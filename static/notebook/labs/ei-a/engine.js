(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EILab = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const sum = values => values.reduce((a, b) => a + b, 0);
  function number(value, name, low = -Infinity, high = Infinity) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < low || value > high) throw new Error(name + ' 应在 ' + low + ' 至 ' + high + ' 之间。');
    return value;
  }
  function experiment(data, id) {
    const item = data.source.experiments.find(x => x.id === id);
    if (!item) throw new Error('Missing experiment: ' + id);
    return item;
  }
  function observed(data, id) {
    const item = data.source.cases.find(x => x.id === id);
    if (!item || item.status !== 'observed') throw new Error('Missing observed case: ' + id);
    return item;
  }
  function defaults(data) {
    const sd = experiment(data, 'EXP-EI-SUPPLY-DEMAND-01');
    const capacity = experiment(data, 'EXP-EI-CAPACITY-01');
    const power = capacity.power.inputs;
    const machinery = observed(data, 'CASE-EI-US-CONSTRUCTION-MACHINERY-202605');
    const previous = machinery.rows[machinery.rows.length - 2];
    const current = machinery.rows[machinery.rows.length - 1];
    const cancel = capacity.orders_adjustment_exercise.cancellations_already_included;
    return {
      hhi: { boundary: 'narrow', ownership: 'separate' },
      demand: { u: sd.states[0].u, v: sd.states[0].v, mode: 'equilibrium', pFixed: sd.fixed_price_example.P },
      fleet: { ...experiment(data, 'EXP-EI-FLEET-01').inputs },
      power: { L: power.L_GW, W: power.W_GW, K: power.K_GW, O: power.O_GW, M: power.M_GW, Pmax: power.storage_power_GW, E0: power.storage_energy_GWh, H: power.H_hours },
      cost: { ...capacity.cost.inputs },
      orders: { B0: previous.end_unfilled_orders, Nnet: current.net_new_orders, Ngross: current.net_new_orders + cancel, cancel, shipments: current.shipments, adjustment: 0, inventory: current.end_inventories, orderMode: 'net' }
    };
  }
  function hhi(raw, boundary, ownership) {
    if (!['narrow', 'wide'].includes(boundary) || !['separate', 'combined'].includes(ownership)) throw new Error('Unknown boundary or ownership');
    if (!Array.isArray(raw) || raw.length !== 5) throw new Error('需要五家教学企业的完整销售输入。');
    raw.forEach((x, i) => number(x, '企业 ' + i + ' 销售', 0));
    let firms = raw.map((sales, index) => ({ name: 'ABCDE'[index], sales })).slice(0, boundary === 'narrow' ? 3 : 5);
    if (ownership === 'combined') firms = [{ name: 'A+B', sales: firms[0].sales + firms[1].sales }, ...firms.slice(2)];
    const denominator = sum(firms.map(f => f.sales));
    if (!(denominator > 0)) throw new Error('份额分母必须为正，缺失销售不能按零处理。');
    firms = firms.map(f => ({ ...f, share: 100 * f.sales / denominator, contribution: (100 * f.sales / denominator) ** 2 }));
    return { firms, denominator, HHI: sum(firms.map(f => f.contribution)), boundary, ownership };
  }
  function demand(p) {
    number(p.u, '需求移动 u', -20, 20); number(p.v, '供给移动 v', -20, 20);
    number(p.pFixed, '固定价格', 10, 30);
    if (!['equilibrium', 'fixed'].includes(p.mode)) throw new Error('Unknown demand mode');
    if (p.mode === 'equilibrium') {
      const P = 20 + (p.u - p.v) / 4;
      const Q = 60 + (p.u + p.v) / 2;
      return { ...p, P, Q, Qd: 100 - 2 * P + p.u, Qs: 20 + 2 * P + p.v, actualTrade: Q };
    }
    const Qd = 100 - 2 * p.pFixed + p.u, Qs = 20 + 2 * p.pFixed + p.v;
    return { ...p, P: p.pFixed, Qd, Qs, excessSupply: Qs - Qd, actualTrade: null };
  }
  function fleet(p) {
    number(p.K0, '期初设备', 0, p.carried ? 240 : 200); number(p.delta, '退出比例', 0, 0.3); number(p.target, '目标设备', 0, 240);
    const retired = p.K0 * p.delta, survivors = p.K0 - retired, purchases = Math.max(0, p.target - survivors);
    return { ...p, retired, survivors, purchases, nextK0: survivors + purchases };
  }
  function power(p) {
    [['L', 40, 80], ['W', 0, 30], ['K', 0, 70], ['O', 0, p.K], ['M', 0, 15], ['Pmax', 0, 10], ['E0', 0, 40], ['H', 1, 24]].forEach(([k, lo, hi]) => number(p[k], k, lo, hi));
    if (!Number.isInteger(p.H)) throw new Error('持续窗口使用整数小时。');
    const available = p.K - p.O, residualLoad = p.L - p.W, headroom = p.W + available + p.M - p.L;
    const gapBefore = Math.max(0, -headroom), batteryLimit = Math.min(p.Pmax, p.E0 / p.H), batteryUsed = Math.min(gapBefore, batteryLimit);
    return { ...p, available, residualLoad, headroom, gapBefore, batteryLimit, batteryUsed, gapAfter: gapBefore - batteryUsed, endEnergy: p.E0 - batteryUsed * p.H };
  }
  function cost(p) {
    [['F', 0, 300], ['c', 0, 20], ['k', 0.1, 3], ['K', 0, 30], ['P', 0, 50]].forEach(([key, lo, hi]) => number(p[key], key, lo, hi));
    const q = Math.min(p.K, Math.max(0, (p.P - p.c) / p.k));
    const C = p.F + p.c * q + p.k * q * q / 2, revenue = p.P * q;
    return { ...p, q, C, revenue, profit: revenue - C, shutdownProfit: -p.F, MC: p.c + p.k * q, AC: q === 0 ? null : C / q };
  }
  function orders(p) {
    ['B0', 'Nnet', 'Ngross', 'shipments', 'inventory'].forEach(key => number(p[key], key, 0, 20000));
    number(p.adjustment, '其他净调整', -1000, 1000);
    if (!['net', 'gross'].includes(p.orderMode)) throw new Error('Unknown orders mode');
    if (p.orderMode === 'gross') number(p.cancel, '取消订单', 0, p.Ngross);
    const net = p.orderMode === 'net' ? p.Nnet : p.Ngross - p.cancel;
    const B1 = p.B0 + net - p.shipments + p.adjustment;
    if (B1 < 0) throw new Error('输入不满足本例余额约束：期末未交订单小于 0。');
    return { ...p, net, B1, change: B1 - p.B0, inventoryRatio: p.shipments === 0 ? null : p.inventory / p.shipments, backlogRatio: p.shipments === 0 ? null : B1 / p.shipments };
  }
  function actualOrders(data, month = '2026-05') {
    const record = observed(data, 'CASE-EI-US-CONSTRUCTION-MACHINERY-202605');
    const index = record.rows.findIndex(x => x.month === month);
    if (index < 1) throw new Error('此桥需要同版上月余额。');
    const row = record.rows[index], prev = record.rows[index - 1];
    const p = { B0: prev.end_unfilled_orders, Nnet: row.net_new_orders, Ngross: row.net_new_orders, cancel: 0, shipments: row.shipments, inventory: row.end_inventories, adjustment: row.end_unfilled_orders - prev.end_unfilled_orders - row.net_new_orders + row.shipments, orderMode: 'net' };
    return { ...orders(p), month, previousMonth: prev.month, status: row.status_in_selected_table, observed: true, reconciliationResidual: p.adjustment, netFlow: row.net_new_orders - row.shipments };
  }
  function electricity(data) {
    const record = observed(data, 'CASE-EI-US-POWER-2024'), [a, b] = record.rows;
    const growth = (next, old) => 100 * (next / old - 1);
    const salesGrowth = growth(b.residential_sales_thousand_MWh, a.residential_sales_thousand_MWh);
    const publishedPriceGrowth = growth(b.published_residential_price_cent_per_kWh, a.published_residential_price_cent_per_kWh);
    return { record, rows: record.rows.map(r => ({ ...r, reconstructedPrice: 100 * r.residential_revenue_million_USD / r.residential_sales_thousand_MWh })), salesGrowth, publishedPriceGrowth, unidentifiedChangeRatio: salesGrowth / publishedPriceGrowth, residentialShare: 100 * record.end_use_sales_2024_thousand_MWh.residential / record.end_use_sales_2024_thousand_MWh.total };
  }
  function valueAdded(data) {
    const input = experiment(data, 'EXP-EI-VALUE-ADDED-01');
    const rows = input.gross_output.map((gross, i) => ({ name: ['原料生产', '零件加工', '最终装配'][i], gross, intermediate: input.intermediate_inputs[i], added: gross - input.intermediate_inputs[i] }));
    return { rows, gross: sum(rows.map(r => r.gross)), intermediate: sum(rows.map(r => r.intermediate)), added: sum(rows.map(r => r.added)), final: rows[rows.length - 1].gross };
  }
  function factory(data) {
    const p = experiment(data, 'EXP-EI-CAPACITY-01').factory.inputs;
    const available = p.design_per_week * p.availability, production = Math.min(available, p.parts_limit, p.labor_limit), deliveries = Math.min(production + p.opening_finished_stock, p.shipping_limit);
    return { ...p, available, production, deliveries, closing: p.opening_finished_stock + production - deliveries };
  }
  return { sum, number, experiment, observed, defaults, hhi, demand, fleet, power, cost, orders, actualOrders, electricity, valueAdded, factory };
}));
