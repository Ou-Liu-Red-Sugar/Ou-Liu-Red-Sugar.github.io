/* M-A: pure teaching calculations. Inputs are supplied by the canonical entries. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.MA = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function integer(value, min, max, label, step = 1) {
    if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < min || value > max || (value - min) % step !== 0)
      throw new Error(`${label}须为 ${min}–${max} 之间、步长 ${step} 的数值`);
    return value;
  }
  function cents(value, min, max, label) {
    const raw = String(value);
    if (!/^\d+(?:\.\d{1,2})?$/.test(raw)) throw new Error(`${label}须为最多两位小数的金额`);
    const [whole, fraction = ''] = raw.split('.');
    return integer(Number(whole) * 100 + Number(fraction.padEnd(2, '0')), min, max, label);
  }
  function choice(value, choices, label) {
    if (!choices.includes(value)) throw new Error(`${label}超出本实验范围`);
    return value;
  }
  function fillVisible(data, input) {
    if (data.depth_scope !== 'visible_excerpt') throw new Error('本实验只处理明确标注的可见盘口片段');
    const side = choice(input.side, ['buy', 'sell'], '交易方向');
    const quantity = integer(input.quantity, 0, 1000, '股数');
    const fee = cents(input.fee, 0, 10, '每股费用');
    const limit = input.limit === null ? null : cents(input.limit, 9900, 10100, '限价');
    const mid = cents(data.mid, 1, 100000000, '中间价');
    const levels = side === 'buy' ? data.asks : data.bids;
    let remaining = quantity, blocked = false;
    const fills = [];
    for (const level of levels) {
      if (remaining === 0) break;
      const price = cents(level.price, 1, 100000000, '档位价格');
      integer(level.quantity, 1, 1000, '档位股数');
      if (limit !== null && (side === 'buy' ? price > limit : price < limit)) { blocked = true; break; }
      const n = Math.min(remaining, level.quantity);
      fills.push({ quantity: n, price_cents: price, gross_cents: n * price });
      remaining -= n;
    }
    const filled = quantity - remaining;
    const gross = fills.reduce((s, x) => s + x.gross_cents, 0);
    const fees = filled * fee;
    const best = cents(levels[0].price, 1, 100000000, '最优价');
    const rawCash = side === 'buy' ? -(gross + fees) : gross - fees;
    const cash = rawCash === 0 ? 0 : rawCash;
    const cost = side === 'buy' ? gross + fees - filled * mid : filled * mid - cash;
    const halfSpread = filled * (side === 'buy' ? best - mid : mid - best);
    const walk = fills.reduce((s, x) => s + x.quantity * (side === 'buy' ? x.price_cents - best : best - x.price_cents), 0);
    return { side, depth_scope: data.depth_scope, requested: quantity, filled, remaining, fills, gross_cents: gross, fees_cents: fees,
      cash_cents: cash, cost_cents: cost, half_spread_cents: halfSpread, walk_cents: walk,
      vwap: filled ? gross / filled / 100 : null,
      reason: remaining === 0 ? 'complete' : blocked ? 'limit_blocked' : 'outside_visible_depth_unknown' };
  }
  function remainderText(result, tif) {
    choice(tif, ['day', 'ioc'], '有效期');
    if (!result.requested) return '数量为 0：本轮没有订单，也没有逐股成交费。';
    if (result.reason === 'complete') return '所列模型中已完成全部数量。';
    if (result.reason === 'limit_blocked') return tif === 'ioc'
      ? '本轮被限价阻挡；IOC 在本实验条件下取消余量。'
      : '本轮被限价阻挡；Day 余量等待后续，后续成交未建模。';
    return tif === 'ioc'
      ? '表外执行未知；只有在不存在其他可得深度的条件下，IOC 余量才会取消。'
      : '表外执行未知；没有第一个未完成单位的价格，不能外推成交或最终状态。';
  }
  function settlement(data, tradeDate, stage) {
    choice(tradeDate, Object.keys(data.lags), '交易日期');
    choice(stage, ['executed', 'processed', 'settled', 'failed'], '教学状态');
    const lag = data.lags[tradeDate], i = data.business_days.indexOf(tradeDate);
    const due = data.business_days[i + lag];
    if (!due) throw new Error('本实验日历范围外');
    const settled = stage === 'settled';
    return { trade_date: tradeDate, lag, standard_date: due, stage,
      pending_cash: settled ? 0 : data.quantity * data.price,
      pending_shares: settled ? 0 : data.quantity,
      completed_only_by_explicit_assumption: settled };
  }
  function collateral(data, haircutPercent, debit) {
    integer(haircutPercent, 0, 30, '抵押折扣百分比');
    integer(debit, 0, 11000, '净借记美元', 100);
    const amount = data.market_value * (100 - haircutPercent) / 100;
    return { collateral: amount, net_debit: debit, cm: amount - debit,
      status: amount >= debit ? '本项抵押余量非负；其余约束未核' : '本项抵押约束不满足' };
  }
  function mesPath(data, buffer, allowTopup) {
    integer(buffer, 0, 1000, '初始自由缓冲美元', 50);
    if (typeof allowTopup !== 'boolean') throw new Error('额外补款选项无效');
    const initial = data.teaching_initial_margin, maintenance = data.teaching_maintenance_margin;
    const scale = data.contracts * data.real_contract_multiplier_usd;
    const [p0, p1, p2] = data.teaching_prices;
    const day1 = scale * (p1 - p0), day2 = scale * (p2 - p1), balance1 = initial + day1;
    const call = balance1 < maintenance ? initial - balance1 : 0;
    const shortfall = Math.max(0, call - buffer), blocked = shortfall > 0 && !allowTopup;
    const extra = !blocked && allowTopup ? shortfall : 0;
    const free = blocked ? null : buffer + extra - call;
    const margin = blocked ? null : balance1 + call + day2;
    const terminal = blocked ? null : margin + free;
    const external = initial + buffer + extra;
    return { buffer, notional_at_initial_price: scale * p0, initial_margin: initial,
      day1_pnl: day1, balance_before_topup: balance1, maintenance, call, shortfall,
      status: blocked ? 'funding_unresolved' : 'funded_conditional_path',
      extra_external_cash: extra, day2_conditional_pnl: day2, margin_terminal: margin,
      free_cash: free, terminal_resources: terminal, external_resources: external,
      net_pnl: blocked ? null : terminal - external };
  }
  function rights(data, input) {
    choice(input.instrument, ['bill', 'alphabet_A', 'alphabet_C', 'spx'], '金融工具');
    if (input.instrument === 'bill') {
      integer(input.face, 100, 100000, '美元面值', 100);
      choice(input.quoteMode, ['auction', 'synthetic_99_80'], '报价模式');
      const auction = input.quoteMode === 'auction';
      const quoteMicro = auction ? data.bill.auction_quote_millionths : data.bill.synthetic_quote_millionths;
      const costMicro = input.face / 100 * quoteMicro;
      const gapMicro = input.face * 1000000 - costMicro;
      return { instrument: 'bill', face: input.face, quote: quoteMicro / 1000000,
        cost: costMicro / 1000000, conditional_gap: gapMicro / 1000000,
        holding_return_percent: gapMicro / costMicro * 100,
        holding_days: auction ? data.bill.auction_holding_days : null,
        actual_received: null, quote_identity: auction ? '具名拍卖公告价格' : '99.80 教学转售价格' };
    }
    if (input.instrument === 'spx') {
      integer(input.optionCount, 1, 100, '期权份数');
      const pointsCents = cents(input.premium, 10, 10000, '权利金点数');
      if (pointsCents % 10) throw new Error('权利金点数步长为 0.10');
      return { instrument: 'spx', premium_cash: input.optionCount * data.spx.multiplier * pointsCents / 100,
        multiplier: data.spx.multiplier, payoff: null, actual_received: null };
    }
    integer(input.shares, 1, 1000, '股数');
    return { instrument: input.instrument, shares: input.shares,
      usual_votes: input.instrument === 'alphabet_A' ? input.shares : 0,
      fixed_payment: null, actual_received: null };
  }
  function billFlow(data, input) {
    integer(input.face, 100, 100000, '美元面值', 100);
    choice(input.step, ['issue', 'transfer', 'maturity'], '阶段');
    choice(input.channel, ['commercial', 'treasurydirect_new'], '持有渠道');
    const faceMicro = input.face * 1000000;
    const cost = input.face / 100 * data.auction_quote_millionths;
    const sale = input.face / 100 * data.synthetic_quote_millionths;
    const blocked = input.channel === 'treasurydirect_new' && input.step === 'transfer';
    const step = blocked ? 'issue' : input.step;
    let balances, rights;
    if (step === 'issue') { balances = [-cost, 0, cost]; rights = [input.face, 0]; }
    else if (step === 'transfer') { balances = [sale - cost, -sale, cost]; rights = [0, input.face]; }
    else if (input.channel === 'treasurydirect_new') { balances = [faceMicro - cost, 0, cost - faceMicro]; rights = [0, 0]; }
    else { balances = [sale - cost, faceMicro - sale, cost - faceMicro]; rights = [0, 0]; }
    return { requested_step: input.step, effective_step: step, channel: input.channel, blocked,
      cash_millionths: balances, face_rights: rights, face: input.face,
      issue_cash_millionths: cost, resale_cash_millionths: sale,
      identity: 'teaching cumulative cash changes, not actual account balances' };
  }
  function ipoSnapshot(data, view) {
    choice(view, ['prospectus_base', 'completed_close'], '发行材料');
    const base = data['CASE-MA-REDDIT-IPO-20240320'].observed;
    if (view === 'prospectus_base') {
      const price = cents(base.public_price_usd, 1, 100000, '发行价');
      const commission = cents(base.underwriting_discount_per_share_usd, 0, 100000, '承销佣金');
      const issuer = base.issuer_shares_base, sellers = base.selling_holder_shares;
      const row = shares => ({ shares, gross_cents: shares * price,
        commission_cents: shares * commission, after_commission_before_other_fees_cents: shares * (price - commission) });
      return { view, document_date: '2024-03-20', record_date: '2024-03-20',
        issuer: row(issuer), selling_holders: row(sellers), combined: row(issuer + sellers),
        company_net_proceeds: null, identity: 'prospectus base, excluding additional option shares' };
    }
    const done = data['CASE-MA-REDDIT-IPO-20240325-CLOSE'].observed;
    const unknown = shares => ({ shares, gross_cents: null, commission_cents: null, after_commission_before_other_fees_cents: null });
    const issuer = unknown(done.issuer_shares_completed);
    issuer.gross_cents = Number(done.issuer_gross_proceeds_usd) * 100;
    return { view, document_date: '2024-03-26', record_date: '2024-03-25', issuer,
      selling_holders: unknown(done.selling_holder_shares), combined: unknown(done.total_shares_completed),
      additional_option_shares: done.additional_option_shares, company_net_proceeds: null,
      identity: 'completed IPO, corrected Form 8-K/A; no backfill into prospectus base' };
  }
  return { fillVisible, remainderText, settlement, collateral, mesPath, rights, billFlow, ipoSnapshot };
});
