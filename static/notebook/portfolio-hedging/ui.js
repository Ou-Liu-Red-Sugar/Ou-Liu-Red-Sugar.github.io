(() => {
  'use strict';
  const figures = [...document.querySelectorAll('[data-portfolio-hedging]')];
  if (!figures.length) return;
  const url = '/notebook/portfolio-hedging/data.json?v=20260926-3';
  const pending = '待载入';
  const isNumber = value => typeof value === 'number' && Number.isFinite(value);
  const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  const feeFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const amount = (value, signed = false) => isNumber(value) ? `${value < 0 ? '−' : signed && value > 0 ? '+' : ''}${numberFormat.format(Math.abs(value))}` : pending;
  const decimal = (value, digits = 2) => isNumber(value) ? value.toFixed(digits) : pending;
  const text = value => value === null || value === undefined || value === '' ? pending : Array.isArray(value) ? value.join('；') : String(value);
  const node = (tag, className, value) => {
    const item = document.createElement(tag);
    if (className) item.className = className;
    if (value !== undefined) item.textContent = value;
    return item;
  };
  const svgNode = (tag, attributes = {}, value) => {
    const item = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attributes).forEach(([key, val]) => item.setAttribute(key, val));
    if (value !== undefined) item.textContent = value;
    return item;
  };
  let clipIndex = 0;
  function frame(host, title, xDomain, yDomain, xLabel, yLabel, xTicks, yFormat) {
    const width = Math.max(210, Math.floor(host.clientWidth || 600));
    const height = width < 420 ? 300 : 340;
    const left = yLabel.includes('净值') ? 76 : 62;
    const right = 15, top = 22, bottom = 55;
    const plotWidth = width - left - right, plotHeight = height - top - bottom;
    const sx = value => left + (value - xDomain[0]) / (xDomain[1] - xDomain[0]) * plotWidth;
    const sy = value => top + plotHeight - (value - yDomain[0]) / (yDomain[1] - yDomain[0]) * plotHeight;
    const svg = svgNode('svg', { viewBox:`0 0 ${width} ${height}`, role:'img', 'aria-label':title });
    svg.append(svgNode('title', {}, title));
    for (let index = 0; index <= 4; index++) {
      const value = yDomain[0] + (yDomain[1] - yDomain[0]) * index / 4;
      const y = sy(value);
      svg.append(svgNode('line', { x1:left, y1:y, x2:width-right, y2:y, class:'ph-grid' }));
      svg.append(svgNode('text', { x:left-7, y:y+4, 'text-anchor':'end' }, yFormat(value)));
    }
    xTicks.forEach(({ value, label }) => {
      const x = sx(value);
      svg.append(svgNode('line', { x1:x, y1:top, x2:x, y2:height-bottom, class:'ph-grid' }));
      const anchor = value === xDomain[0] ? 'start' : value === xDomain[1] ? 'end' : 'middle';
      svg.append(svgNode('text', { x, y:height-bottom+21, 'text-anchor':anchor }, label));
    });
    if (xDomain[0] < 0 && xDomain[1] > 0) svg.append(svgNode('line', { x1:sx(0), y1:top, x2:sx(0), y2:height-bottom, class:'ph-zero' }));
    if (yDomain[0] < 0 && yDomain[1] > 0) svg.append(svgNode('line', { x1:left, y1:sy(0), x2:width-right, y2:sy(0), class:'ph-zero' }));
    svg.append(svgNode('text', { x:left+plotWidth/2, y:height-9, 'text-anchor':'middle', class:'ph-axis-label' }, xLabel));
    svg.append(svgNode('text', { x:0, y:0, transform:`translate(13 ${top+plotHeight/2}) rotate(-90)`, 'text-anchor':'middle', class:'ph-axis-label' }, yLabel));
    const clipId = `ph-clip-${++clipIndex}`;
    const defs = svgNode('defs'), clip = svgNode('clipPath', { id:clipId });
    clip.append(svgNode('rect', { x:left, y:top, width:plotWidth, height:plotHeight })); defs.append(clip); svg.append(defs);
    const plot = svgNode('g', { 'clip-path':`url(#${clipId})` }); svg.append(plot);
    host.replaceChildren(svg);
    return { svg, plot, sx, sy, width };
  }
  function domain(values, fallback = [-1, 1]) {
    if (!values.length) return fallback;
    let low = Math.min(...values), high = Math.max(...values);
    const padding = (high - low || Math.max(Math.abs(high) * .05, 1)) * .08;
    low -= padding; high += padding;
    return low === high ? [low - 1, high + 1] : [low, high];
  }
  function emptyChart(host) { host.replaceChildren(node('p', 'ph-placeholder', '图形数据待载入。')); }
  function options(select, items) {
    select.replaceChildren(...items.map(item => { const option = node('option', '', text(item.label)); option.value = item.id; return option; }));
  }
  function observeWidth(host, render) {
    if (!window.ResizeObserver) return;
    let width = host.clientWidth;
    const observer = new ResizeObserver(() => {
      const next = host.clientWidth;
      if (Math.abs(width - next) < 1) return;
      width = next; render();
    });
    observer.observe(host);
  }
  function setupBeta(figure, data) {
    const beta = data.beta;
    if (!beta || !Array.isArray(beta.modes) || !beta.modes.length || !Array.isArray(beta.tickers) || !beta.tickers.length) return;
    const mode = figure.querySelector('[data-ph-mode]');
    const ticker = figure.querySelector('[data-ph-ticker]');
    const chart = figure.querySelector('[data-ph-beta-chart]');
    options(mode, beta.modes);
    options(ticker, beta.tickers.map(id => ({ id, label:id })));
    if (beta.modes.some(item => item.id === 'd1')) mode.value = 'd1';
    function render() {
      const row = beta.rows?.[mode.value]?.[ticker.value] || {};
      const values = { beta:decimal(row.beta), n:isNumber(row.n) ? amount(row.n) : pending, r2:decimal(row.r2, 3), portfolio:decimal(beta.portfolio_beta?.[mode.value] ?? data.portfolio_beta?.[mode.value]) };
      Object.entries(values).forEach(([key,value]) => { figure.querySelector(`[data-ph-metric="${key}"]`).textContent = value; });
      const decomposition = figure.querySelector('[data-ph-beta-decomposition]');
      const frequency = mode.selectedOptions[0].textContent.includes('周') ? '周' : '日';
      const portfolioFit = beta.portfolio_fit?.[mode.value] || {};
      if (decomposition) decomposition.textContent = `${ticker.value} ${frequency}波动率 ${decimal(row.volatility_pct)}% → 抵销市场分量后 ${decimal(row.residual_volatility_pct)}%；整个组合的样本内解释率 R² 为 ${decimal(portfolioFit.r2, 3)}。`;
      figure.querySelector('[data-ph-beta-status]').textContent = `${ticker.value} · ${mode.selectedOptions[0].textContent} · ${text(row.start)} 至 ${text(row.end)}`;
      const points = Array.isArray(row.points) ? row.points.filter(p => isNumber(p.x) && isNumber(p.y)) : [];
      if (!points.length) { emptyChart(chart); return; }
      const xd = domain(points.map(p => p.x)), yd = domain(points.map(p => p.y));
      const ticks = Array.from({ length:4 }, (_,index) => { const value = xd[0] + (xd[1]-xd[0])*index/3; return { value, label:value.toFixed(1) }; });
      const plot = frame(chart, `${ticker.value} 与市场的超额收益散点及拟合线`, xd, yd, '市场超额收益（%）', '个股超额收益（%）', ticks, value => value.toFixed(1));
      points.forEach(p => {
        const dot = svgNode('circle', { cx:plot.sx(p.x), cy:plot.sy(p.y), r:2.7, class:'ph-point' });
        dot.append(svgNode('title', {}, `${text(p.date)}；市场 ${p.x.toFixed(2)}%；个股 ${p.y.toFixed(2)}%`)); plot.plot.append(dot);
      });
      if (isNumber(row.beta) && isNumber(row.intercept_pct)) plot.plot.append(svgNode('path', { d:`M${plot.sx(xd[0])},${plot.sy(row.intercept_pct+row.beta*xd[0])} L${plot.sx(xd[1])},${plot.sy(row.intercept_pct+row.beta*xd[1])}`, class:'ph-fit' }));
    }
    mode.addEventListener('change', render); ticker.addEventListener('change', render);
    figure.querySelector('.ph-controls').hidden = false;
    render(); observeWidth(chart, render);
  }
  function table(host, headings, rows, className = '') {
    const grid = node('table', `ph-table ${className}`.trim());
    const head = node('thead'), headRow = node('tr');
    headings.forEach(label => { const th = node('th', '', label); th.scope = 'col'; headRow.append(th); }); head.append(headRow);
    const body = node('tbody');
    rows.forEach(values => {
      const row = node('tr');
      values.forEach((value,index) => { const td = node('td', '', text(value)); td.dataset.label = headings[index]; row.append(td); });
      body.append(row);
    });
    grid.append(head,body); host.replaceChildren(grid);
  }
  function setupOperations(figure, data) {
    if (!Array.isArray(data.strategies) || !data.strategies.length || !Array.isArray(data.scenarios) || !data.scenarios.length) return;
    const scenario = figure.querySelector('[data-ph-scenario]');
    const buttons = [...figure.querySelectorAll('[data-ph-strategy]')];
    const chart = figure.querySelector('[data-ph-nav-chart]');
    let selected = data.strategies.some(item => item.id === 'A') ? 'A' : data.strategies[0].id;
    options(scenario, data.scenarios);
    if (data.scenarios.some(item => item.id === 'market_down')) scenario.value = 'market_down';
    buttons.forEach(button => {
      const strategy = data.strategies.find(item => item.id === button.dataset.phStrategy);
      button.disabled = !strategy;
      if (strategy) button.textContent = `${strategy.id} ${strategy.label}`;
      button.addEventListener('click', () => { selected = button.dataset.phStrategy; render(); });
    });
    function renderPath(result, baseline) {
      const path = Array.isArray(result.path) ? result.path : [];
      const original = Array.isArray(baseline.path) ? baseline.path : [];
      const series = [path,original].map(items => items.filter(p => isNumber(p.nav)));
      if (!series[0].length) { emptyChart(chart); return; }
      const keys = [...new Set([...original,...path].map(p => String(p.day)))];
      const values = series.flat().map(p => p.nav);
      const xd = [0,Math.max(1,keys.length-1)], yd = domain(values);
      const maxTicks = chart.clientWidth < 320 ? 2 : chart.clientWidth < 500 ? 3 : 5;
      const indexes = [...new Set(Array.from({ length:Math.min(maxTicks,keys.length) }, (_,i) => Math.round(i*(keys.length-1)/Math.max(1,Math.min(maxTicks,keys.length)-1))))];
      const plot = frame(chart, '所选方案与维持组合的净值路径', xd, yd, '建仓后经过天数（日）', '净值（美元）', indexes.map(value => ({ value, label:keys[value] })), value => amount(value));
      function line(points, className) {
        if (!points.length) return;
        const d = points.map((p,i) => `${i ? 'L' : 'M'}${plot.sx(keys.indexOf(String(p.day)))},${plot.sy(p.nav)}`).join(' ');
        plot.plot.append(svgNode('path', { d, class:className }));
      }
      if (selected !== 'A') line(series[1], 'ph-nav-baseline');
      line(series[0], 'ph-nav-selected');
      series[0].forEach(p => {
        const dot = svgNode('circle', { cx:plot.sx(keys.indexOf(String(p.day))), cy:plot.sy(p.nav), r:3.4, class:'ph-nav-dot' });
        dot.append(svgNode('title', {}, `第 ${p.day} 日；净值 ${amount(p.nav)} 美元；现金 ${amount(p.cash)} 美元`)); plot.plot.append(dot);
      });
    }
    function render() {
      const strategy = data.strategies.find(item => item.id === selected);
      const market = data.scenarios.find(item => item.id === scenario.value);
      const result = data.results?.[scenario.value]?.[selected] || {};
      const baseline = data.results?.[scenario.value]?.A || {};
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.phStrategy === selected)));
      figure.querySelector('[data-ph-selected-label]').textContent = `${selected} ${strategy.label}`;
      figure.querySelector('[data-ph-description]').textContent = text(strategy.description);
      figure.querySelector('[data-ph-holdings]').textContent = `建立后的持仓：${text(strategy.holdings)}`;
      figure.querySelector('[data-ph-opening]').textContent = `建仓后现金约 ${amount(strategy.opening_cash)} 美元；建仓费用 ${isNumber(strategy.opening_fees) ? feeFormat.format(strategy.opening_fees) : pending} 美元。`;
      figure.querySelector('[data-ph-scenario-description]').textContent = text(market.description);
      figure.querySelector('[data-ph-selected-legend]').textContent = `${selected} ${strategy.label}`;
      figure.querySelector('[data-ph-baseline-legend]').hidden = selected === 'A';
      renderPath(result, baseline);
      table(figure.querySelector('[data-ph-contributions]'), ['持仓贡献','损益（美元）'], (Array.isArray(result.contributions) ? result.contributions : [{ label:'持仓贡献',value:null }]).map(item => [item.label,amount(item.value,true)]));
      const fields = [['pnl','合计损益',true],['ending_nav','期末净值'],['cash','总现金'],['maintenance_margin','普通维持要求'],['margin_scan','扫描示意'],['peak_transfer','期货累计补入']];
      table(figure.querySelector('[data-ph-summary]'), ['项目','所选方案','维持组合 A'], fields.map(([key,label,signed]) => [label,amount(result[key],signed),amount(baseline[key],signed)]));
      const path = Array.isArray(result.path) ? result.path : [];
      table(figure.querySelector('[data-ph-cash]'), ['时点','证券现金','期货现金','合计现金','本次划转'], path.length ? path.map(p => [p.day === 0 ? '建仓后' : `第 ${p.day} 日`,amount(p.securities_cash),amount(p.futures_cash),amount(p.cash),amount(p.transfer,true)]) : [['待载入',pending,pending,pending,pending]], 'ph-cash-table');
      const notes = figure.querySelector('[data-ph-notes]');
      notes.replaceChildren(...(Array.isArray(result.notes) ? result.notes : []).map(value => node('li','',text(value))));
      notes.hidden = !notes.children.length;
      figure.querySelector('[data-ph-operation-status]').textContent = `${market.label} · 当前仅显示 ${selected} ${strategy.label} 的明细。`;
    }
    scenario.addEventListener('change',render);
    figure.querySelector('.ph-controls').hidden = false;
    render(); observeWidth(chart,render);
  }
  fetch(url).then(response => {
    if (!response.ok) throw new Error('Data unavailable');
    return response.json();
  }).then(data => figures.forEach(figure => {
    if (figure.dataset.portfolioHedging === 'beta') setupBeta(figure,data);
    if (figure.dataset.portfolioHedging === 'operations') setupOperations(figure,data);
  })).catch(() => {
    figures.forEach(figure => {
      const status = figure.querySelector('[data-ph-beta-status], [data-ph-operation-status]');
      if (status) status.textContent = '交互数据尚未载入，保留当前静态内容。';
    });
  });
})();
