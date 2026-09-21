(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./engine.js') : root.EILab);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EIView = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (E) {
  'use strict';
  const colors = ['#087e83', '#265d9b', '#74548d', '#b86619', '#427d54'];
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const n = (value, digits = 2) => value === null ? '不定义' : Number(value).toLocaleString('zh-CN', { maximumFractionDigits: digits });
  const sign = (value, digits = 2) => (value > 0 ? '+' : '') + n(value, digits);
  const txt = (x, y, value, cls = 'annotation', extra = '') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${esc(value)}</text>`;
  function table(headers, rows, caption = '', cls = '') {
    return `<div class="scroll-table" tabindex="0" role="region" aria-label="${esc(caption || '数据表，可水平滚动')}"><table class="${cls}">${caption ? `<caption>${esc(caption)}</caption>` : ''}<thead><tr>${headers.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((v, i) => i === 0 ? `<th scope="row">${v}</th>` : `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function metric(label, value, unit = '', accent = false) { return `<div class="metric${accent ? ' accent' : ''}"><span class="label">${esc(label)}</span><span class="value">${esc(value)}</span><span class="unit">${esc(unit)}</span></div>`; }
  function svg(id, width, height, title, description, content, caption, wide = false) {
    return `<figure class="chart${wide ? ' wide' : ''}" tabindex="0" aria-label="${esc(title)}，窄屏可水平滚动"><svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(title)}</title><desc id="${id}-desc">${esc(description)}</desc><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#728a92"/></marker></defs>${content}</svg><figcaption>${caption}</figcaption></figure>`;
  }
  function link(url, title) { return `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(title)} ↗</a>`; }
  function source(data, id, title, locator) {
    const s = data.source.sources[id];
    return `<p class="source-line">${link(s.url, title)} · ${esc(locator || s.scope || s.version)}</p>`;
  }
  function range(group, key, label, value, min, max, step, unit = '') {
    const id = `${group}-${key}`;
    return `<div class="control"><label for="${id}">${esc(label)}<output id="${id}-value" for="${id}">${n(value, 3)} ${esc(unit)}</output></label><input id="${id}" data-group="${group}" data-key="${key}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" aria-describedby="${id}-value"></div>`;
  }
  function numInput(group, key, label, value, min, max, step = 1) {
    return `<div class="control"><label for="${group}-${key}">${esc(label)}</label><input id="${group}-${key}" data-group="${group}" data-key="${key}" type="number" min="${min}" max="${max}" step="${step}" value="${value}"></div>`;
  }
  function radios(name, legend, items, selected) {
    return `<fieldset class="radios"><legend>${esc(legend)}</legend>${items.map(([value, label]) => `<label><input type="radio" name="${name}" value="${value}"${value === selected ? ' checked' : ''}>${esc(label)}</label>`).join('')}</fieldset>`;
  }
  function hhi(data, state) {
    const exp = E.experiment(data, 'EXP-EI-HHI-01');
    const raw = exp.states.find(s => s.boundary === 'wide' && s.ownership === 'separate').sales;
    const a = E.hhi(raw, state.boundary, state.ownership), baseline = E.hhi(raw, 'narrow', 'separate').HHI;
    let x = 55;
    const segments = a.firms.map((f, i) => {
      const w = 740 * f.share / 100, content = `<rect x="${x}" y="75" width="${w}" height="65" fill="${colors[i]}"/>${txt(x + w / 2, 101, f.name, '', 'fill="white" text-anchor="middle" font-size="16" font-weight="700"')}${txt(x + w / 2, 126, n(f.share) + '%', '', 'fill="white" text-anchor="middle" font-size="15"')}`;
      x += w; return content;
    }).join('');
    const chart = svg('hhi-chart', 850, 205, '给定边界和控制主体后的份额', a.firms.map(f => `${f.name} ${n(f.share)}%`).join('；') + `. HHI ${n(a.HHI)}.`, `${txt(55, 40, '先确定分母，再按控制主体归并', 'node-title')}${segments}${txt(55, 172, `边界内总销售 ${n(a.denominator)}；A 与 B ${a.ownership === 'combined' ? '合并为一个控制主体' : '分别计入'}`)}`, '条带总宽均为 100%；宽边界把 D、E 纳入同一分母，控制主体切换只改变合并方式.');
    return `${chart}<div class="metric-grid">${metric('同口径总销售', n(a.denominator), '教学单位 / 期')}${metric('HHI = Σ(百分比份额)²', n(a.HHI), '百分数平方，0—10,000', true)}${metric('相对窄边界／分别控制', sign(a.HHI - baseline), 'HHI 点')}</div><p class="formula">${a.firms.map(f => `${n(f.share)}²`).join(' + ')} = <strong>${n(a.HHI)}</strong></p>${table(['控制主体', '销售', '份额', '对 HHI 的贡献'], a.firms.map(f => [esc(f.name), n(f.sales), n(f.share) + '%', n(f.contribution)]))}<p class="caption">这组销售是假设输入. 边界与控制主体已经给定，计算结果用于看分母和归并怎样传导；实际市场边界仍要回到用途与可替代条件.</p>`;
  }
  function hhiStatic(data) {
    const exp = E.experiment(data, 'EXP-EI-HHI-01'), raw = exp.states.find(s => s.boundary === 'wide' && s.ownership === 'separate').sales;
    return table(['边界 / 控制', '分母', '份额（%）', 'HHI'], ['narrow', 'wide'].flatMap(boundary => ['separate', 'combined'].map(ownership => {
      const r = E.hhi(raw, boundary, ownership);
      return [(boundary === 'narrow' ? '窄：A、B、C' : '宽：A—E') + ' / ' + (ownership === 'separate' ? '分别控制' : 'A+B 共同控制'), n(r.denominator), r.firms.map(f => f.name + ': ' + n(f.share)).join('；'), n(r.HHI)];
    })), '四种状态由同一组销售和同一计算生成.');
  }
  function materialCards(data) {
    const power = E.electricity(data), composition = power.record.end_use_sales_2024_thousand_MWh;
    const labels = { residential: '居民', commercial: '商业', industrial: '工业', transportation: '交通' };
    let start = 55;
    const bars = Object.entries(labels).map(([k, label], i) => { const width = 740 * composition[k] / composition.total; const str = `<rect x="${start}" y="48" width="${width}" height="46" fill="${colors[i]}"/>${width > 30 ? txt(start + width / 2, 77, label, '', 'fill="white" text-anchor="middle" font-size="15"') : ''}`; start += width; return str; }).join('');
    const annual = `<div class="material-card" data-material="power-annual"><span class="badge">真实资料 · 年度售电</span><h4>美国 2024：这是最终用途构成</h4>${svg('annual-composition', 850, 140, '美国售电的最终用途构成', Object.entries(labels).map(([k, label]) => `${label} ${n(composition[k])} K MWh`).join('；'), bars + txt(55, 125, `总量 ${n(composition.total)} K MWh；居民占比 ${n(power.residentialShare, 4)}%`), '每个色块是最终用途，不能改名为供电企业或控制主体.')}${table(['用途', '售电（K MWh）', '构成'], Object.entries(labels).map(([k, label]) => [label, n(composition[k]), n(100 * composition[k] / composition.total, 4) + '%']))}<p class="caption">边界：美国 50 州与华盛顿特区、2024 年、最终客户售电；企业 HHI：未计算.</p>${link(data.source.sources['EI-S04-EIA-2024'].tables['2.5'], 'EIA Table 2.5 原表')}</div>`;
    const de = E.observed(data, 'CASE-EI-DE-POWER-2024');
    const hourly = `<div class="material-card" data-material="power-hourly"><span class="badge">真实资料 · 历史事件摘取</span><h4>德国紧张时段：能否交付决定谁进入候选</h4>${svg('boundary-hourly', 850, 245, '给定用电时段下的可交付条件', '用途先指向候选资源；候选资源再经过设备状态、网络和持续时间筛选. 箭头表示筛选条件，不表示已估计因果系数.', `<rect x="25" y="79" width="185" height="80" rx="12" fill="#edf5f2"/>${txt(118, 111, '指定地点与时段', 'node-title', 'text-anchor="middle"')}${txt(118, 138, '要交付的电力', 'annotation', 'text-anchor="middle"')}<path d="M210 119 H292" stroke="#728a92" fill="none" marker-end="url(#boundary-hourly-arrow)"/>${txt(252, 96, '候选方案', 'annotation', 'text-anchor="middle"')}<rect x="302" y="40" width="220" height="158" rx="12" fill="#edf3fa"/>${txt(412, 74, '本地可用资源', 'node-title', 'text-anchor="middle"')}${txt(412, 110, '已可交付进口', 'node-title', 'text-anchor="middle"')}${txt(412, 146, '储能 / 需求调整', 'node-title', 'text-anchor="middle"')}${txt(412, 178, '按技术与合同分开', 'annotation', 'text-anchor="middle"')}<path d="M522 119 H615" stroke="#728a92" fill="none" marker-end="url(#boundary-hourly-arrow)"/>${txt(570, 74, '状态、网络', 'annotation', 'text-anchor="middle"')}${txt(570, 96, '持续时间', 'annotation', 'text-anchor="middle"')}<rect x="625" y="79" width="200" height="80" rx="12" fill="#f8f1e6"/>${txt(725, 112, '该窗口可行方案', 'node-title', 'text-anchor="middle"')}${txt(725, 139, '重新核可交付边界', 'annotation', 'text-anchor="middle"')}`, '结构图只画候选与筛选条件. IEA 未提供给本实验的逐小时原序列，因此这里没有拼造历史折线.', true)}${table(['摘取窗口', '风电容量因子', '窗口类型'], de.extracts.map(x => [esc(x.date || x.period), '约 ' + n(x.value_pct) + '%', esc(x.metric.includes('daily') ? '日均' : '历史 12 月平均')] ))}<p class="caption">日事件与历史月平均来自不同窗口.60 GW 等可调数值放在 EI-04 的独立教学模型中.</p>${source(data, 'EI-S05-IEA-2025', 'IEA Electricity 2025', '印刷 pp57—61 首段及图注')}</div>`;
    const machinery = `<div class="material-card" data-material="machinery"><span class="badge">真实资料 · 制造活动</span><h4>工程机械：制造统计与客户采购是两个边界</h4><div class="mini-cards"><div class="mini-card"><strong>统计活动</strong>制造商出货、净新订单、未交订单与库存；同一期 Census M3.</div><div class="mini-card"><strong>客户选择</strong>购买新机、购买二手机、租赁或调整使用；需要按任务另外界定.</div><div class="mini-card"><strong>计量边界</strong>制造美元金额不能直接当作设备台数，也不能据行业一行计算企业份额.</div></div>${actualMachineryTable(data)}<p class="caption">企业份额和 HHI：未计算. 这里核的是统计活动及其观察位置.</p>${source(data, 'EI-S06-M3-202605', 'Census M3：固定 2026 年 5 月版', 'PDF pp6—9，工程机械行')}</div>`;
    return annual + hourly + machinery;
  }
  function actualElectricity(data) {
    const r = E.electricity(data);
    return `${table(['年度', '售电（K MWh）', '收入（ M 美元）', '公布均价（美分/kWh）', '收入 / 电量复算'], r.rows.map(x => [String(x.year), n(x.residential_sales_thousand_MWh), n(x.residential_revenue_million_USD), x.published_residential_price_cent_per_kWh.toFixed(2), n(x.reconstructedPrice, 7)]), 'EIA 2024 年报同一期中的居民列；2023 / 2024 年度，final.')}<div class="metric-grid">${metric('2024 售电年增速', n(r.salesGrowth, 4) + '%', '同口径年度数量')}${metric('公布均价年增速', n(r.publishedPriceGrowth, 4) + '%', '用 16.48 / 16.00 复算')}${metric('未识别的两期变化比', n(r.unidentifiedChangeRatio, 6), '售电增速 ÷ 公布均价增速')}</div><p class="caption">两期共同变化混合了供给、需求与构成的变化. 下面的曲线通过明确控制 u、v 来解释这些区别，并不从这两年数据估计参数.</p><p class="source-line">${Object.entries(data.source.sources['EI-S04-EIA-2024'].tables).map(([key, url]) => link(url, 'EIA Table ' + key)).join(' · ')}</p>`;
  }
  function demand(p) {
    const r = E.demand(p), x = q => 70 + q / 140 * 680, y = price => 365 - price / 60 * 295;
    let grid = '';
    for (let q = 0; q <= 140; q += 20) grid += `<line x1="${x(q)}" x2="${x(q)}" y1="70" y2="365" class="gridline"/>${txt(x(q), 389, q, 'axis-label', 'text-anchor="middle"')}`;
    for (let price = 0; price <= 60; price += 10) grid += `<line x1="70" x2="750" y1="${y(price)}" y2="${y(price)}" class="gridline"/>${txt(58, y(price) + 5, price, 'axis-label', 'text-anchor="end"')}`;
    function curve(fn, stroke, dashed = false) {
      const pts = []; for (let q = 0; q <= 140; q += 0.5) { const price = fn(q); if (price >= 0 && price <= 60) pts.push(`${x(q)},${y(price)}`); }
      return `<polyline points="${pts.join(' ')}" fill="none" stroke="${stroke}" stroke-width="${dashed ? 1.7 : 3}"${dashed ? ' stroke-dasharray="6 5" opacity=".42"' : ''}/>`;
    }
    const curves = curve(q => (100 - q) / 2, colors[0], true) + curve(q => (q - 20) / 2, colors[1], true) + curve(q => (100 + p.u - q) / 2, colors[0]) + curve(q => (q - 20 - p.v) / 2, colors[1]);
    let annotations = '';
    if (p.u !== 0) annotations += `<path d="M${x(30)},${y(35)} H${x(30 + p.u)}" fill="none" stroke="#728a92" stroke-width="1.4" marker-end="url(#demand-chart-arrow)"/>${txt(x(30 + p.u / 2), y(35) - 12, '需求移动 ' + sign(p.u), 'annotation', 'text-anchor="middle"')}`;
    if (p.v !== 0) annotations += `<path d="M${x(40)},${y(10)} H${x(40 + p.v)}" fill="none" stroke="#728a92" stroke-width="1.4" marker-end="url(#demand-chart-arrow)"/>${txt(x(40 + p.v / 2), y(10) - 12, '供给移动 ' + sign(p.v), 'annotation', 'text-anchor="middle"')}`;
    if (p.mode === 'equilibrium') annotations += `<path d="M70 ${y(r.P)} H${x(r.Q)} V365" stroke="#6c8088" stroke-dasharray="4 4" fill="none"/><circle cx="${x(r.Q)}" cy="${y(r.P)}" r="6" fill="#172e40"/>${txt(x(r.Q) + 14, y(r.P) - 15, `均衡 (${n(r.Q)}, ${n(r.P)})`, 'node-title')}`;
    else {
      annotations += `<line x1="70" x2="750" y1="${y(r.P)}" y2="${y(r.P)}" stroke="#b86619" stroke-width="2" stroke-dasharray="6 4"/>`;
      annotations += `<circle cx="${x(r.Qd)}" cy="${y(r.P)}" r="6" fill="${colors[0]}"/><circle cx="${x(r.Qs)}" cy="${y(r.P)}" r="6" fill="${colors[1]}"/>${txt(x(r.Qd), y(r.P) - 18, '需求意愿 ' + n(r.Qd), 'annotation', 'text-anchor="middle"')}${txt(x(r.Qs), y(r.P) + 28, '供给意愿 ' + n(r.Qs), 'annotation', 'text-anchor="middle"')}`;
      if (r.Qd !== r.Qs) { const arrowY = y(r.P) + (r.P < 17 ? -47 : 47), labelY = arrowY + (r.P < 17 ? -16 : 23); annotations += `<path d="M${x(Math.min(r.Qd, r.Qs))} ${arrowY} H${x(Math.max(r.Qd, r.Qs))}" stroke="#728a92" marker-start="url(#demand-chart-arrow)" marker-end="url(#demand-chart-arrow)"/><text x="${x((r.Qd + r.Qs) / 2)}" y="${labelY}" class="annotation" text-anchor="middle">${r.excessSupply > 0 ? '超额供给' : '超额需求'} ${n(Math.abs(r.excessSupply))}</text>`; }
    }
    const chart = svg('demand-chart', 850, 440, p.mode === 'equilibrium' ? '移动后的供需曲线与均衡' : '固定价格下的需求和供给意愿量', p.mode === 'equilibrium' ? `均衡价格 ${r.P}，数量 ${r.Q}.` : `固定价格 ${r.P}，需求意愿 ${r.Qd}，供给意愿 ${r.Qs}；实际成交量未指定.`, grid + curves + annotations + txt(68, 35, '价格 P（教学货币 / 单位）', 'axis-label') + txt(745, 424, '数量 Q（教学单位 / 期）', 'axis-label', 'text-anchor="end"'), '横轴为数量、纵轴为价格；淡虚线是 u = v = 0 的基准，实线是当前输入. 只绘制坐标窗内的非负部分，函数本身没有截零.');
    return `<p class="print-only">当前输入：u=${n(p.u)}，v=${n(p.v)}；模式=${p.mode === 'equilibrium' ? '求均衡' : '固定价格'}；固定价格控件=${n(p.pFixed)}.</p>${chart}<div class="legend"><span style="--swatch:${colors[0]}">需求：Qᴰ = 100 − 2P ${sign(p.u)}</span><span style="--swatch:${colors[1]}">供给：Qˢ = 20 + 2P ${sign(p.v)}</span></div><div class="metric-grid">${metric(p.mode === 'equilibrium' ? '求出的均衡价格' : '保持不变的价格', n(r.P), '教学货币 / 单位', true)}${metric(p.mode === 'equilibrium' ? '均衡数量' : '需求意愿量', n(p.mode === 'equilibrium' ? r.Q : r.Qd), '教学单位 / 期')}${metric(p.mode === 'equilibrium' ? '需求量 − 供给量' : '供给意愿量', n(p.mode === 'equilibrium' ? r.Qd - r.Qs : r.Qs), '教学单位 / 期')}</div><p class="result-line">${p.mode === 'equilibrium' ? `同时解两条曲线：P* = 20 + (${n(p.u)} − (${n(p.v)})) / 4；Q* = 60 + (${n(p.u)} + (${n(p.v)})) / 2.` : `价格固定为 ${n(r.P)}；${r.excessSupply === 0 ? '两种意愿数量相等' : (r.excessSupply > 0 ? '超额供给' : '超额需求') + '为 ' + n(Math.abs(r.excessSupply))}. 实际成交量：未指定.`}</p><p class="caption">${p.mode === 'equilibrium' ? '本模式每次移动曲线后重新求交点. u 改需求截距，v 改供给截距，两条斜率保持不变.' : '本模式固定价格；两点分别表示愿意买与愿意卖的数量. 还没有给定排队、配给或成交规则，所以不另画“实际成交”点.'}</p>`;
  }
  function demandStatic(data) {
    const e = E.experiment(data, 'EXP-EI-SUPPLY-DEMAND-01');
    const rows = e.states.map((s, i) => { const r = E.demand({ u: s.u, v: s.v, mode: 'equilibrium', pFixed: e.fixed_price_example.P }); return [['基准', '需求右移', '供给左移', '同时移动'][i], n(s.u), n(s.v), n(r.P), n(r.Q)]; });
    const fixed = E.demand({ u: 0, v: 0, mode: 'fixed', pFixed: e.fixed_price_example.P });
    return table(['均衡状态', 'u', 'v', 'P*', 'Q*'], rows) + `<p>固定价格对照：P = ${n(fixed.P)}，Qᴰ = ${n(fixed.Qd)}，Qˢ = ${n(fixed.Qs)}，超额供给 ${n(fixed.excessSupply)}. 实际成交量未指定.</p>`;
  }
  function fleet(p, history = []) {
    const r = E.fleet(p), max = Math.max(r.K0, r.nextK0, r.target, 1) * 1.12, scale = value => value / max * 670;
    const rows = [{ label: '期初', parts: [{ v: r.K0, color: colors[1], label: '已有 ' + n(r.K0) }] }, { label: '退出之后', parts: [{ v: r.survivors, color: colors[1], label: '保留 ' + n(r.survivors) }, { v: r.retired, color: '#d9e0df', label: '' }] }, { label: '采购之后', parts: [{ v: r.survivors, color: colors[1], label: '保留 ' + n(r.survivors) }, { v: r.purchases, color: colors[0], label: '购入 ' + n(r.purchases) }] }];
    let content = '';
    rows.forEach((row, i) => { let pos = 125; const y = 65 + i * 75; content += txt(105, y + 28, row.label, 'annotation', 'text-anchor="end"'); row.parts.forEach(part => { const width = scale(part.v); content += `<rect x="${pos}" y="${y}" width="${width}" height="44" rx="2" fill="${part.color}"/>`; if (part.label && width > 75) content += txt(pos + width / 2, y + 28, part.label, '', 'fill="white" text-anchor="middle" font-size="14"'); pos += width; }); });
    content += `<line x1="${125 + scale(r.target)}" x2="${125 + scale(r.target)}" y1="42" y2="270" stroke="#b86619" stroke-width="1.7" stroke-dasharray="5 4"/>${txt(Math.min(125 + scale(r.target), 795), 30, '目标 ' + n(r.target), 'annotation', 'text-anchor="end"')}`;
    return `<p class="print-only">当前输入：期初 ${n(p.K0)} 台，退出比例 ${n(p.delta,3)}，期末目标 ${n(p.target)} 台.</p>${p.carried ? '<p class="caption">本期期初由上一期实际期末带入；重置后可重新选择手工期初. 新增设备在期末到位，队伍封闭且设备同质.</p>' : '<p class="caption">队伍封闭、设备同质；新增设备在期末到位，未另加转让、租赁或闲置.</p>'}${svg('fleet-chart', 850, 300, '设备存量、退出和采购', `期初 ${n(r.K0)}，退出 ${n(r.retired)}，保留 ${n(r.survivors)}，采购 ${n(r.purchases)}，下一期期初 ${n(r.nextK0)}.`, content, '深蓝是保留下来的设备，浅灰是退出部分，绿色是新采购；目标低于保留量时，采购为 0，实际存量仍保留.')}<div class="metric-grid">${metric('退出后仍在使用', n(r.survivors), '台')}${metric('本期采购', n(r.purchases), '台', true)}${metric('下一期期初', n(r.nextK0), '台')}</div><p class="formula">保留 = (1 − ${n(p.delta, 3)}) × ${n(p.K0)} = ${n(r.survivors)}；采购 = max(0, ${n(p.target)} − ${n(r.survivors)}) = ${n(r.purchases)}.</p>${r.target < r.survivors ? '<p class="note">目标低于保留量，本例采购为 0. 出售、额外退役和闲置尚未纳入，所以实际存量仍高于目标.</p>' : ''}${history.length ? table(['已完成期次', '期初', '采购', '期末 / 下期期初'], history.map((h, i) => [String(i + 1), n(h.K0), n(h.purchases), n(h.nextK0)]), '点击进入下一期时保存；下一期使用上一期实际存量.') : ''}`;
  }
  function actualMachineryTable(data) {
    const record = E.observed(data, 'CASE-EI-US-CONSTRUCTION-MACHINERY-202605');
    const fields = [['shipments', '出货：期间流量 · p6'], ['net_new_orders', '新订单：期间净额 · p7'], ['end_unfilled_orders', '未交订单：期末余额 · p8'], ['end_inventories', '存货：期末余额 · p9']];
    return table(['工程机械字段', ...record.rows.map(r => r.month + (r.status_in_selected_table === 'preliminary' ? ' p' : r.status_in_selected_table === 'revised' ? ' r' : ''))], fields.map(([key, label]) => [label, ...record.rows.map(r => n(r[key]))]), '同一期 Census M3，2026-07-02 发布； M 美元，季调、未扣价格变化. p 为初值，r 为本版修订值.');
  }
  function power(p) {
    const r = E.power(p), width = 695, max = Math.max(r.L, r.W + r.available + r.M + r.batteryUsed, 1) * 1.05, scale = v => v / max * width;
    let pos = 120;
    const components = [{ label: '风光', v: r.W, color: colors[0] }, { label: '可调度', v: r.available, color: colors[1] }, { label: '进口', v: r.M, color: colors[2] }, { label: '储能', v: r.batteryUsed, color: colors[3] }, { label: '尚需补足', v: r.gapAfter, color: '#d5b4ae' }];
    const parts = components.map(item => { const w = scale(item.v); const shape = `<rect x="${pos}" y="124" width="${w}" height="50" fill="${item.color}"/>${w > 60 ? txt(pos + w / 2, 154, `${item.label} ${n(item.v, 2)}`, '', 'fill="white" text-anchor="middle" font-size="13"') : ''}`; pos += w; return shape; }).join('');
    const content = `${txt(103, 74, '负荷', 'annotation', 'text-anchor="end"')}<rect x="120" y="46" width="${scale(r.L)}" height="48" fill="#243e51"/>${txt(130, 76, n(r.L) + ' GW', '', 'fill="white" font-size="17" font-weight="700"')}${txt(103, 152, '覆盖能力', 'annotation', 'text-anchor="end"')}${parts}<line x1="${120 + scale(r.L)}" x2="${120 + scale(r.L)}" y1="28" y2="194" stroke="#728a92" stroke-dasharray="5 4"/>${txt(120, 217, `装机 ${n(r.K)} − 停运 ${n(r.O)} → 可调度 ${n(r.available)} GW`)}${txt(120, 243, `负荷 ${n(r.L)} − 风光 ${n(r.W)} → 剩余负荷 ${n(r.residualLoad)} GW`)}`;
    const x = t => 75 + t / p.H * 685, maxEnergy = Math.max(p.E0, 1), y = energy => 260 - energy / maxEnergy * 195;
    let grid = ''; for (let i = 0; i <= 4; i++) { const t = p.H * i / 4, e = maxEnergy * i / 4; grid += `<line x1="${x(t)}" x2="${x(t)}" y1="65" y2="260" class="gridline"/>${txt(x(t), 286, n(t, 2), 'axis-label', 'text-anchor="middle"')}<line x1="75" x2="760" y1="${y(e)}" y2="${y(e)}" class="gridline"/>${txt(60, y(e) + 4, n(e, 2), 'axis-label', 'text-anchor="end"')}`; }
    const depletion = p.Pmax > 0 ? Math.min(p.H, p.E0 / p.Pmax) : p.H;
    const endAtMax = Math.max(0, p.E0 - p.Pmax * p.H);
    const energyContent = grid + `<path d="M${x(0)} ${y(p.E0)} L${x(depletion)} ${y(endAtMax)} L${x(p.H)} ${y(endAtMax)}" fill="none" stroke="#9ca8ab" stroke-width="2" stroke-dasharray="6 4"/><path d="M${x(0)} ${y(p.E0)} L${x(p.H)} ${y(r.endEnergy)}" fill="none" stroke="${colors[0]}" stroke-width="3.5"/><circle cx="${x(p.H)}" cy="${y(r.endEnergy)}" r="5" fill="${colors[0]}"/>${txt(75, 32, '储能剩余电量（GWh）', 'axis-label')}${txt(760, 322, '持续时间（小时）', 'axis-label', 'text-anchor="end"')}${txt(460, 52, `当前恒定放电 ${n(r.batteryUsed, 4)} GW`, 'node-title', 'text-anchor="middle"')}`;
    return `<p class="print-only">当前输入：L=${n(p.L)} GW，W=${n(p.W)} GW，K=${n(p.K)} GW，O=${n(p.O)} GW，M=${n(p.M)} GW，Pmax=${n(p.Pmax)} GW，E0=${n(p.E0)} GWh，H=${n(p.H)} h.</p>${svg('power-resources', 850, 274, '给定窗口的电力覆盖能力', components.map(x => `${x.label} ${n(x.v, 4)} GW`).join('；'), content, '虚线标出需要覆盖的负荷. 进口是该窗口已能交付的补充；绿色和蓝色并非装机总量，而是本例输入的实际风光与扣除停运后的可用能力.')}<div class="legend">${components.map(x => `<span style="--swatch:${x.color}">${x.label} ${n(x.v, 4)} GW</span>`).join('')}</div><div class="metric-grid">${metric('储能前缺口', n(r.gapBefore, 4), 'GW')}${metric('实际恒定放电', n(r.batteryUsed, 4), 'GW，受功率和电量共同限制', true)}${metric('模型外资源 / 需求调整尚需补足', n(r.gapAfter, 4), 'GW')}</div><p class="formula">恒定放电上限 = min(${n(p.Pmax)} GW, ${n(p.E0)} GWh ÷ ${n(p.H)} h) = ${n(r.batteryLimit, 4)} GW；实际放电再取它与缺口的较小值.</p>${r.headroom > 0 ? `<p class="note">简化资源上界余量 ${n(r.headroom)} GW. 这是资源上界与负荷之差，没有指定实际弃电、出口或机组调度.</p>` : ''}${svg('power-energy', 850, 340, '恒定支撑窗口内的储能电量', `期初 ${p.E0} GWh，以 ${n(r.batteryUsed, 4)} GW 恒定放电 ${p.H} 小时，期末 ${n(r.endEnergy, 4)} GWh.`, energyContent, `实线：当前策略，期末 ${n(r.endEnergy, 4)} GWh. 灰虚线：直接按功率上限放电的对照${p.Pmax > 0 && p.E0 / p.Pmax < p.H ? `，${n(p.E0 / p.Pmax, 4)} 小时后耗尽` : ''}. 两条线都是教学计算，没有作为历史调度序列.`)}<p class="caption">条件：期初满电，无充电、无损耗；窗口内负荷与出力恒定. 没有纳入内部网络、爬坡与备用约束.</p>`;
  }
  function powerStatic(data) {
    const init = E.defaults(data).power, states = E.experiment(data, 'EXP-EI-CAPACITY-01').power.states;
    return table(['教学状态', '风光 GW', '进口 GW', '小时', '储能前缺口', '实际放电 GW', '仍需补足 GW', '期末 GWh'], states.map((s, i) => { const r = E.power({ ...init, W: s.W_GW, M: s.M_GW, H: s.H_hours }); return [['基准', '低风、无进口', '低风、进口 5', '四小时窗口'][i], n(r.W), n(r.M), n(r.H), n(r.gapBefore), n(r.batteryUsed, 4), n(r.gapAfter, 4), n(r.endEnergy, 4)]; }));
  }
  function cost(p) {
    const r = E.cost(p), qMax = Math.max(p.K, 20), maxY = Math.max(p.P, p.c + p.k * qMax, p.F / qMax + p.c + p.k * qMax / 2, 10) * 1.22;
    function panel(id, monetary) {
      const x = q => 68 + q / qMax * 690;
      const cap = monetary ? Math.max(p.F + p.c * qMax + p.k * qMax ** 2 / 2, p.P * qMax, 1) * 1.13 : maxY;
      const y = v => 275 - v / cap * 218;
      let content = `<rect x="${x(p.K)}" y="57" width="${Math.max(0, x(qMax) - x(p.K))}" height="218" fill="#ede7df" opacity=".6"/>`;
      for (let i = 0; i <= 4; i++) { const q = i * qMax / 4, v = i * cap / 4; content += `<line x1="68" x2="758" y1="${y(v)}" y2="${y(v)}" class="gridline"/>${txt(55, y(v) + 5, n(v, 1), 'axis-label', 'text-anchor="end"')}${txt(x(q), 299, n(q, 2), 'axis-label', 'text-anchor="middle"')}`; }
      function path(fn, color, dashed = false) { let str = '', visible = false; for (let i = 0; i <= 240; i++) { const q = qMax * i / 240, v = fn(q); if (Number.isFinite(v) && v >= 0 && v <= cap) { str += `${visible ? 'L' : 'M'}${x(q)} ${y(v)} `; visible = true; } else visible = false; } return `<path d="${str}" fill="none" stroke="${color}" stroke-width="3"${dashed ? ' stroke-dasharray="6 4"' : ''}/>`; }
      if (monetary) content += path(q => p.F + p.c * q + p.k * q * q / 2, colors[1]) + path(q => p.P * q, colors[0]);
      else content += path(q => p.c + p.k * q, colors[1]) + path(q => q === 0 ? NaN : p.F / q + p.c + p.k * q / 2, colors[2]) + path(() => p.P, colors[3], true);
      content += `<line x1="${x(r.q)}" x2="${x(r.q)}" y1="57" y2="275" stroke="#172e40" stroke-dasharray="4 4"/>${txt(x(r.q), 37, 'q* = ' + n(r.q), 'node-title', 'text-anchor="middle"')}${txt(68, 18, monetary ? '本期金额（教学货币）' : '价格 / 单位成本（教学货币 / 产品）', 'axis-label')}${txt(758, 329, '产量 q；阴影为 q > K', 'axis-label', 'text-anchor="end"')}`;
      return svg(id, 850, 345, monetary ? '总收入和总成本' : '价格、边际成本与平均成本', monetary ? `当前收入 ${n(r.revenue)}，成本 ${n(r.C)}，利润 ${n(r.profit)}.` : `最优数量 ${n(r.q)}，边际成本 ${n(r.MC)}，平均成本 ${n(r.AC)}.`, content, monetary ? '绿色为总收入 Pq，蓝色为总成本 C(q). 二者的纵向距离是本期利润.' : '蓝色 MC，紫色 AC，橙虚线价格 P；AC 在 q = 0 不定义，超出当前纵轴的部分没有压扁或改值.');
    }
    return `<p class="print-only">当前输入：F=${n(p.F)}，c=${n(p.c)}，k=${n(p.k)}，K=${n(p.K)}，P=${n(p.P)}；F 本期不可避免.</p>${panel('cost-unit', false)}${panel('cost-total', true)}<div class="metric-grid">${metric('约束内最优产量', n(r.q, 4), 'q* = min(K, max(0, (P − c) / k))', true)}${metric('本期利润', n(r.profit, 4), '总收入 ' + n(r.revenue) + ' − 总成本 ' + n(r.C))}${metric('停产时利润', n(r.shutdownProfit), '本期固定成本仍不可避免')}</div><p class="formula">MC(q*) = ${n(r.MC, 4)}；AC(q*) = ${r.AC === null ? '不定义（q* = 0）' : n(r.AC, 4)}. ${r.q === p.K && r.q > 0 ? '产能上限正在约束产量.' : r.q === 0 ? '本例的最优数量位于下界.' : '最优点位于 0 与 K 之间.'}</p><p class="caption">短期价格接受者模型；F 为本期已承诺、停产也不能避免的成本. 改变它会改变利润，不改变本模型的边际产量条件.</p>`;
  }
  function orders(data, p, observedMode = true) {
    const r = observedMode ? E.actualOrders(data, p.month) : E.orders(p);
    const levels = [r.B0, r.B0 + r.net, r.B0 + r.net - r.shipments, r.B1];
    const min = Math.min(...levels, 0), max = Math.max(...levels, r.B1, 1) * 1.2, y = value => 300 - (value - min) / (max - min) * 250;
    const entries = [ { label: '期初余额', start: 0, end: r.B0, value: r.B0, color: colors[1] }, { label: '净新增', start: r.B0, end: levels[1], value: r.net, color: colors[0] }, { label: '履约减少', start: levels[1], end: levels[2], value: -r.shipments, color: colors[3] }, { label: observedMode ? '定义式核对差' : '其他净调整', start: levels[2], end: r.B1, value: r.adjustment, color: colors[2] }, { label: '期末余额', start: 0, end: r.B1, value: r.B1, color: colors[1] } ];
    let content = '';
    for (let i = 0; i <= 4; i++) { const v = min + i * (max - min) / 4; content += `<line x1="74" x2="820" y1="${y(v)}" y2="${y(v)}" class="gridline"/>${txt(66, y(v) + 4, n(v, 0), 'axis-label', 'text-anchor="end"')}`; }
    entries.forEach((entry, i) => { const x = 105 + i * 148, top = Math.min(y(entry.start), y(entry.end)), height = Math.max(2, Math.abs(y(entry.start) - y(entry.end))); content += `<rect x="${x}" y="${top}" width="92" height="${height}" fill="${entry.color}" rx="2"/>${txt(x + 46, top - 12, (i === 0 || i === 4 ? n(entry.value) : sign(entry.value)), 'node-title', 'text-anchor="middle"')}${txt(x + 46, 326, entry.label, 'annotation', 'text-anchor="middle"')}`; if (i < 4) content += `<path d="M${x + 92} ${y(entry.end)} H${x + 145}" stroke="#728a92" stroke-width="1.2" stroke-dasharray="3 3" marker-end="url(#${observedMode ? 'orders-real' : 'orders-toy'}-arrow)"/>`; });
    const formula = `${n(r.B0)} + ${n(r.net)} − ${n(r.shipments)} ${sign(r.adjustment)} = ${n(r.B1)}`;
    return `${svg(observedMode ? 'orders-real' : 'orders-toy', 850, 355, '未交订单的存量流量桥', formula + '， M 美元. 库存单列，不作为余额桥中的订单流.', txt(74, 24, '未交订单及桥接金额（ M 美元）', 'axis-label') + content, observedMode ? '同版统计定义核对：季调新订单 N=S+ΔB；381不是三个独立观测互证. 代数核对差为0不能推断经济取消、修改或调整为零.' : '这屏使用一般企业内部台账的教学变式，不套用 Census 新订单构造. 净额模式已扣取消，总额模式才从新增总额中减取消.', true)}<p class="formula">期末未交订单 = ${formula}（ M 美元）</p><div class="metric-grid">${metric('未交订单变动', sign(r.change), ' M 美元', true)}${metric('期末存货（另一个状态）', n(r.inventory), ' M 美元')}${metric('期末库存 / 当月出货', n(r.inventoryRatio, 7), '金额存量与月度金额流量之比')}</div><p class="caption">库存没有作为订单桥的一笔流入，也没有从库存画出“导致交期”的箭头. 这个比值没有逐单日期和实物数量，不能直接读取为客户平均交期.</p>${!observedMode ? `<p class="result-line">${p.orderMode === 'net' ? `当前新订单已是净额 ${n(r.net)}；取消 ${n(p.cancel)} 已包含在内，不再扣减.` : `当前新增总额 ${n(p.Ngross)} − 取消 ${n(p.cancel)} = 净新增 ${n(r.net)}.`}</p>` : `<p class="source-line">当前材料月份 ${esc(r.month)}，状态 ${r.status === 'preliminary' ? '初值 p' : '修订值 r'}；期初来自同版 ${esc(r.previousMonth)} 期末.</p>`}`;
  }
  function valueAdded(data, mode) {
    const a = E.valueAdded(data), scale = value => value / a.final * 610;
    let content = '';
    a.rows.forEach((row, i) => {
      const y = 90 + i * 94, x = 160;
      content += txt(140, y + 30, row.name, 'node-title', 'text-anchor="end"');
      if (mode === 'transactions') content += `<rect x="${x}" y="${y}" width="${scale(row.gross)}" height="50" rx="3" fill="${colors[i]}"/>${txt(x + scale(row.gross) + 12, y + 32, n(row.gross), 'node-value')}`;
      else content += `<rect x="${x}" y="${y}" width="${scale(row.intermediate)}" height="50" fill="#dbe2df"/><rect x="${x + scale(row.intermediate)}" y="${y}" width="${scale(row.added)}" height="50" rx="2" fill="${colors[0]}"/>${txt(x + scale(row.intermediate) + scale(row.added) / 2, y + 32, '+' + n(row.added), '', 'fill="white" text-anchor="middle" font-size="18" font-weight="700"')}`;
      if (i < a.rows.length - 1) content += `<path d="M${x + scale(row.gross)} ${y + 50} V${y + 82}" stroke="#728a92" marker-end="url(#va-chart-arrow)"/>${txt(x + scale(row.gross) - 10, y + 77, '中间产品交付 ' + n(row.gross), 'annotation', 'text-anchor="end"')}`;
      else content += `<path d="M${x + scale(row.gross)} ${y + 50} V${y + 80}" stroke="#728a92" marker-end="url(#va-chart-arrow)"/>${txt(x + scale(row.gross) - 10, y + 78, '最终产品交付 ' + n(row.gross), 'annotation', 'text-anchor="end"')}`;
    });
    return `${svg('va-chart', 900, 382, mode === 'transactions' ? '三道生产工序的总产出' : '逐环扣除中间投入后的增加值', a.rows.map(r => `${r.name}：总产出${r.gross}，中间投入${r.intermediate}，增加值${r.added}`).join('；'), txt(160, 37, mode === 'transactions' ? '每道实际生产工序的总产出' : '灰色：已含的中间品价值；绿色：本环节新增', 'node-title') + content, '箭头表示产品向下一环交付；相应资金沿反方向支付，支付与产品交付没有作为两笔新增价值相加. 第三环节是实际装配.', true)}<div class="metric-grid">${metric(mode === 'transactions' ? '交易 / 总产出逐笔相加' : '各环增加值合计', n(mode === 'transactions' ? a.gross : a.added), mode === 'transactions' ? '不可作为本例 GDP' : '在本例封闭核算下等于最终产品', true)}${metric('中间投入合计', n(a.intermediate), '扣除重复含入的产品价值')}${metric('最终产品价值', n(a.final), '相同期间与计量口径')}</div><p class="formula">${a.rows.map(r => '(' + n(r.gross) + ' − ' + n(r.intermediate) + ')').join(' + ')} = ${n(a.added)}.</p><p class="caption">没有进口、税价差或存货变动，第一工序无购入中间品. 增加值还要在劳动报酬等组成之间分配，因此不等于净利润.</p>`;
  }
  function metadata(data) {
    const e = E.electricity(data), machine = E.observed(data, 'CASE-EI-US-CONSTRUCTION-MACHINERY-202605');
    const cards = [
      { key: 'eia', title: 'EIA · 年度最终客户售电', source: 'EI-S04-EIA-2024', fields: [ ['测量对象', '居民最终客户售电、收入及公布均价'], ['地理覆盖', '美国 50 州与华盛顿特区'], ['单位', 'K MWh； M 美元；美分 / kWh'], ['频率', '年度'], ['期间', '2023 / 2024'], ['存量 / 流量', '售电和收入是期间流量；均价为收入 / 电量口径'], ['季节调整', '所用年度原表未标季调'], ['价格调整', '收入与公布均价为金额 / 价格口径；未提供匹配的实际收入序列'], ['发布日', '2025-10-16'], ['固定版本', 'Electric Power Annual with data for 2024；final'], ['读取状态', '2026-09-21；Tables 2.5—2.7 及表注已核'] ], raw: actualElectricity(data), explanation: `<p class="formula">${n(e.rows[1].residential_revenue_million_USD)} × 10⁶ USD ÷ (${n(e.rows[1].residential_sales_thousand_MWh)} × 10³ MWh × 10³ kWh/MWh) × 100 cent/USD<br>= <strong>${n(e.rows[1].reconstructedPrice, 7)} 美分 / kWh</strong></p><p>电量原数值换算后也是 M kWh，先相除得到美元 / kWh，再乘 100. 公布值 16.48 与复算值因显示位数略有差别；均价并非某位客户多用一单位电的边际电价.</p>` },
      { key: 'census', title: 'Census M3 · 2026 年 5 月工程机械', source: 'EI-S06-M3-202605', fields: [ ['测量对象', '制造商出货、净新订单、未交订单和存货'], ['地理覆盖', '美国制造调查中的工程机械行'], ['单位', ' M 美元'], ['频率', '月度'], ['期间', '同一报告中的 2026-04 / 05'], ['存量 / 流量', '出货 / 新订单为期间流量；未交订单 / 存货为期末余额'], ['季节调整', '是（含适用的节假日、交易日与季节处理）'], ['价格调整', '未扣价格变化；不能直接转成设备台数'], ['发布日', '2026-07-02 10:00 EDT'], ['固定版本', 'CB26-104 M3-2(26)-05；5 月 p、4 月 r'], ['读取状态', 'Lead 已取得固定历史 PDF，核第 1、6—9 页；原数据与图注按同版保留'] ], raw: actualMachineryTable(data), explanation: '<p>新订单已经扣除取消. 季节调整不等于扣通胀；月末库存与月内出货即使同为美元，也承担不同的存量 / 流量职责.</p><p>固定发布日期和 p / r 标签一起定义这次资料快照，后来的修订不会覆盖这里的历史版本. 调查面板不是概率抽样；精确读取公布单元格，并不表示总体抽样误差已经量化.</p>' },
      { key: 'iea', title: 'IEA · 2024 年低风低光事件', source: 'EI-S05-IEA-2025', fields: [ ['测量对象', '指定历史时段的发电、可用能力、进口及日前价格'], ['地理覆盖', '德国及相关相邻竞价区讨论'], ['单位', '图中功率 MW、价格 EUR/MWh；摘取容量因子为 %'], ['频率', '指定事件的时段观察；另有日均和历史月均'], ['期间', '2024-11-05—07、12-11—12；历史 2019—2023 年 12 月'], ['存量 / 流量', '功率与给定时间内电量不同；本包未取得逐小时原序列'], ['季节调整', '所用事件单元未核定季调字段'], ['价格调整', '所用事件单元未核定价格平减字段'], ['发布日', '只采用已核报告年份 2025，不补造具体日时'], ['固定版本', 'Electricity 2025，pp57—61 首段'], ['读取状态', '2026-09-21 已读事件正文与图注，未从图像估取新时间序列'] ], raw: table(['观察窗口', '容量因子', '口径'], E.observed(data, 'CASE-EI-DE-POWER-2024').extracts.map(x => [esc(x.date || x.period), '约 ' + n(x.value_pct) + '%', x.metric.includes('daily') ? '风电日均' : '历史 12 月平均'])), explanation: '<p>同一图的功率和价格可能使用两个纵轴；线的视觉高度不能直接相除. 日事件和历史月平均也不能拼成等间隔序列计算同频率增长.</p><p>本包只使用报告内已发生的 2024 年事件，不把报告其他预测部分改写为历史实绩.</p>' }
    ];
    return cards.map(card => `<article class="material-card" data-meta="${card.key}"><span class="badge">已核材料卡</span><h4>${esc(card.title)}</h4><dl class="field-grid">${card.fields.map(([label, value]) => `<dt>${esc(label)}</dt><dd>${esc(value)}</dd>`).join('')}</dl><div data-meta-view="raw">${card.raw}</div><div data-meta-view="explain">${card.explanation}</div><p class="caption">${card.key === 'eia' ? '可比两期：年度售电量和公布均价，增速见原值.' : card.key === 'census' ? '可比两期：本版月度名义金额；初值和修订状态一起保留.' : '同频率可比的两期增长：未计算；现有日事件与历史月均窗口不同.'}</p><div class="button-row interactive-only" hidden><button disabled type="button">实际金额增长：未计算</button><span>本卡没有匹配的价格平减输入.</span></div>${source(data, card.source, '打开本卡原始资料')}</article>`).join('');
  }
  return { esc, n, sign, txt, table, metric, svg, link, source, range, numInput, radios, hhi, hhiStatic, materialCards, actualElectricity, demand, demandStatic, fleet, actualMachineryTable, power, powerStatic, cost, orders, valueAdded, metadata };
}));


