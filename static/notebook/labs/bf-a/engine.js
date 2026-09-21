/* Shared, dependency-free calculations for EXP-BF-STATEMENTS-01 and
   EXP-BF05-EVENTS. Source amounts remain in USD M; the fictional
   transaction ledger has its own explicit unit of USD. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BFEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const fields = ['cash', 'receivable', 'inventory', 'payable', 'equity', 'profit', 'ocf'];
  const labels = { cash: '现金', inventory: '存货', receivable: '应收账款', payable: '应付账款', equity: '权益', profit: '累计本期利润', ocf: '累计经营现金净额' };
  const initial = { cash: 100, inventory: 0, receivable: 0, payable: 0, equity: 100, profit: 0, ocf: 0 };
  const events = [
    { id: 'initial', title: '期初余额', description: '期初出资已在观察窗口之前完成. 企业只有现金与等额权益；本窗口累计利润、累计经营现金净额均从零开始.', delta: {}, links: [{ account: 'cash', label: '观察窗口开始时持有现金' }, { account: 'equity', label: '期初所有者权益与现金等额' }] },
    { id: 'purchase', title: '赊购存货 100', description: '商品已收到，货款以后支付. 存货增加 100，同时形成应付账款 100；现金和权益保持原额.', delta: { inventory: 100, payable: 100 }, links: [{ account: 'inventory', label: '收到商品，存货 +100' }, { account: 'payable', label: '尚未付款，应付 +100' }] },
    { id: 'sale', title: '赊销 150，成本 100', description: '全部商品交给客户，约定稍后收取 150. 应收增加 150，存货减少 100；收入 150 减成本 100，利润 50 进入权益.', delta: { receivable: 150, inventory: -100, equity: 50, profit: 50 }, revenue: 150, cost: 100, links: [{ account: 'receivable', label: '赊销形成收款权利 +150' }, { account: 'inventory', label: '交付商品，结转存货 −100' }, { account: 'equity', label: '收入 150 − 成本 100 = 利润 50' }] },
    { id: 'pay', title: '付供应商 100', description: '用现金支付前面的采购欠款. 现金和应付账款同时减少 100；这一步清偿既有债务，本期利润保持原额.', delta: { cash: -100, payable: -100, ocf: -100 }, links: [{ account: 'cash', label: '支付货款，现金 −100' }, { account: 'payable', label: '清偿采购欠款，应付 −100' }] },
    { id: 'collect', title: '收客户款 150', description: '收回前面赊销形成的应收款. 现金增加 150，应收减少 150；资产内部换了形式，资产总额和权益保持原额.', delta: { cash: 150, receivable: -150, ocf: 150 }, links: [{ account: 'cash', label: '收到客户付款，现金 +150' }, { account: 'receivable', label: '收款权利结清，应收 −150' }] }
  ];
  function row(dataset, id, rows = dataset.statement_rows) {
    const found = rows.find(item => item.id === id);
    if (!found) throw new Error('Unknown statement row: ' + id);
    return found;
  }
  function amount(dataset, id, period, rows = dataset.statement_rows) {
    const value = row(dataset, id, rows).amounts[period];
    if (typeof value !== 'number' || !Number.isFinite(value)) throw new Error('Missing numeric amount: ' + id + '/' + period);
    return value;
  }
  function aggregate(dataset, target, period, rows = dataset.statement_rows, rules = dataset.aggregation_rules) {
    const rule = rules.find(item => item.target_row_id === target);
    if (!rule || rule.operation !== 'sum_signed') throw new Error('Unknown signed aggregation: ' + target);
    const components = rule.component_row_ids.map(id => ({ ...row(dataset, id, rows), value: amount(dataset, id, period, rows) }));
    const total = components.reduce((sum, item) => sum + item.value, 0);
    const reported = amount(dataset, target, period, rows);
    return { target, label: row(dataset, target, rows).label_zh, components, total, reported, difference: total - reported, period };
  }
  function totals(state) { return { assets: state.cash + state.inventory + state.receivable, liabilities: state.payable, equity: state.equity }; }
  function sequence(collectFirst = false) { return collectFirst ? [events[0], events[1], events[2], events[4], events[3]] : events; }
  function ledgerAt(index, initialCash = 100, collectFirst = false) {
    if (!Number.isInteger(index) || index < 0 || index >= events.length) throw new Error('Event index must be 0–4');
    if (!Number.isFinite(initialCash) || initialCash < 0) throw new Error('期初现金必须为非负有限数');
    if (typeof collectFirst !== 'boolean') throw new Error('collectFirst must be boolean');
    const state = { ...initial, cash: initialCash, equity: initialCash }, ordered = sequence(collectFirst);
    for (let i = 1; i <= index; i++) {
      if (ordered[i].id === 'pay' && state.cash < 100) return { index: i, event: ordered[i], state, delta: Object.fromEntries(fields.map(field => [field, 0])), balance: totals(state), change: { assets: 0, liabilities: 0, equity: 0 }, balanced: true, completed: false, fundingGap: 100 - state.cash };
      for (const field of fields) state[field] += ordered[i].delta[field] || 0;
    }
    const delta = Object.fromEntries(fields.map(field => [field, ordered[index].delta[field] || 0]));
    const balance = totals(state), change = totals(delta);
    return { index, event: ordered[index], state, delta, balance, change, balanced: balance.assets === balance.liabilities + balance.equity, completed: true, fundingGap: 0 };
  }
  function format(value) { return value === null || value === undefined ? '—' : value < 0 ? '(' + (-value).toLocaleString('en-US') + ')' : value.toLocaleString('en-US'); }
  function signed(value) { return (value > 0 ? '+' : value < 0 ? '−' : '') + Math.abs(value).toLocaleString('en-US'); }
  function relations(dataset, period) {
    const v = id => amount(dataset, id, period), f = id => format(v(id));
    if (dataset.entity.ticker === 'COST') return [
      { id: 'cash', title: '现金在什么位置', rows: ['cash', 'short_term_investments', 'total_current_assets'], text: `现金及现金等价物 ${f('cash')}、短期投资 ${f('short_term_investments')} 都在流动资产板块. 流动资产合计 ${f('total_current_assets')} 还包括应收、存货和其他流动资产. 先找到现金，再顺着组成表回到整个板块.` },
      { id: 'inventory-payables', title: '存货与应付放在两侧', rows: ['inventory', 'accounts_payable', 'receivables_net', 'cash'], text: `存货 ${f('inventory')} 是企业持有的商品，应付账款 ${f('accounts_payable')} 是尚待支付的义务. 应付比存货多 ${format(v('accounts_payable') - v('inventory'))}，这是两项期末余额的差. 应收净额 ${f('receivables_net')} 也不全是顾客赊账；Note 1 披露供应商款项、联名卡激励等来源，供应商应收通常与应付分列，部分情形按协议净额结算. 现金余额为 ${f('cash')}；期间现金怎样形成，需要接着阅读现金流量表.` },
      { id: 'asset-structure', title: '回到完整资产结构', rows: ['total_current_assets', 'ppe_net', 'operating_lease_rou', 'other_long_term_assets'], text: `这张表把流动资产 ${f('total_current_assets')} 与物业设备净额 ${f('ppe_net')}、经营租赁使用权资产 ${f('operating_lease_rou')}、其他长期资产 ${f('other_long_term_assets')} 列在一起，构成总资产 ${f('total_assets')}. 图中的流动资产已是小计，计算总资产时按这四行直接相加.` }
    ];
    return [
      { id: 'net-loans', title: '从贷款总额读到净额', rows: ['loans_gross', 'allowance_loan_losses', 'loans_net'], text: `贷款总额 ${f('loans_gross')} 加上以负数列示的贷款损失准备 ${f('allowance_loan_losses')}，得到贷款净额 ${f('loans_net')}. 总资产加总采用这个净额. 准备是这项贷款余额的减项；它与银行的现金、客户存款分别列示.` },
      { id: 'securities', title: '投资证券与交易资产分开', rows: ['afs_securities', 'htm_securities', 'investment_securities_net', 'trading_assets'], text: `可供出售证券 ${f('afs_securities')} 与持有至到期证券 ${f('htm_securities')} 相加，为投资证券净额 ${f('investment_securities_net')}. AFS 按公允价值列账，HTM 按摊余成本扣除信用损失准备列账；这个小计是两种计量基础的账面额相加. 交易资产 ${f('trading_assets')} 是原表另一行. 沿净小计回到总资产，才能保留原表的范围与层级.` },
      { id: 'funding', title: '存款是银行的资金来源', rows: ['customer_deposits', 'fed_funds_purchased_repo', 'long_term_debt', 'deposits_with_banks'], text: `客户存款 ${f('customer_deposits')} 位于负债侧，体现银行对客户的义务；存放银行款项 ${f('deposits_with_banks')} 位于资产侧. 负债还包括回购等融资、借款及其他项目. 先分别看贷款与证券的资产结构、存款与融资的负债结构，再沿附注研究各自的期限与条件.` }
    ];
  }
  function verifyDataset(dataset) {
    const checks = [];
    const verifyRules = (rows, rules, table) => {
      for (const period of dataset.periods) for (const rule of rules) {
        const result = aggregate(dataset, rule.target_row_id, period.key, rows, rules);
        checks.push({ table, target: rule.target_row_id, period: period.key, computed: result.total, reported: result.reported, passed: result.difference === 0 });
      }
    };
    verifyRules(dataset.statement_rows, dataset.aggregation_rules, 'statement_rows');
    for (const table of dataset.footnote_tables || []) verifyRules(table.rows, table.aggregation_rules || [], table.id);
    for (const period of dataset.periods) {
      const assets = amount(dataset, 'total_assets', period.key), right = amount(dataset, 'total_liabilities', period.key) + amount(dataset, 'total_equity', period.key);
      checks.push({ table: 'statement_rows', target: 'assets_equal_liabilities_plus_equity', period: period.key, computed: right, reported: assets, passed: assets === right });
    }
    return checks;
  }
  function retailBridge(dataset) {
    const [latest, older] = dataset.periods.map(period => period.key);
    const net = period => amount(dataset, 'inventory', period) - amount(dataset, 'accounts_payable', period);
    const oldNet = net(older), newNet = net(latest), delta = newNet - oldNet;
    const cfInventory = amount(dataset, 'cf_inventory_change', latest, dataset.supplemental_inputs);
    const cfPayables = amount(dataset, 'cf_accounts_payable_change', latest, dataset.supplemental_inputs);
    return { latest, older, oldNet, newNet, delta, reverse: -delta, cfInventory, cfPayables, cfAdjustment: cfInventory + cfPayables, unexplainedDifference: cfInventory + cfPayables + delta };
  }
  function bankMeasures(dataset, period, denominator = 'retained_loans') {
    if (!['retained_loans', 'loans_gross'].includes(denominator)) throw new Error('Unknown denominator');
    const allowance = -amount(dataset, 'allowance_loan_losses', period);
    const base = amount(dataset, denominator, period, denominator === 'retained_loans' ? dataset.supplemental_inputs : dataset.statement_rows);
    const commonEquity = amount(dataset, 'total_equity', period) - amount(dataset, 'preferred_stock', period);
    const shares = amount(dataset, 'common_shares_issued', period, dataset.supplemental_inputs) - amount(dataset, 'treasury_shares', period, dataset.supplemental_inputs);
    return { allowance, denominator, base, coveragePercent: 100 * allowance / base, commonEquity, shares, commonBookPerShare: 1000000 * commonEquity / shares };
  }
  return { fields, labels, initial, events, sequence, row, amount, aggregate, totals, ledgerAt, format, signed, relations, verifyDataset, retailBridge, bankMeasures };
});
