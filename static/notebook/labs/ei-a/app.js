(function () {
  'use strict';
  const dataElement = document.getElementById('ei-data');
  if (!dataElement || !window.EILab || !window.EIView) return;
  const data = JSON.parse(dataElement.textContent), E = window.EILab, V = window.EIView, initial = E.defaults(data);
  const state = { ...structuredClone(initial), fleetHistory: [], material: 'power-annual', orderView: 'observed', metadata: 'eia', metadataView: 'raw', valueAdded: 'transactions' };
  const get = id => document.getElementById(id);
  const all = selector => Array.from(document.querySelectorAll(selector));
  function error(group, message = '') { const target = get(group + '-error'); if (target) target.textContent = message; }
  function sync(group) {
    all(`[data-group="${group}"]`).forEach(input => {
      input.value = state[group][input.dataset.key];
      const output = get(input.id + '-value');
      if (output) { if (!output.dataset.unit) output.dataset.unit = output.textContent.replace(/^[\d.,−+\-]+\s*/, ''); output.textContent = V.n(Number(input.value), 3) + ' ' + output.dataset.unit; }
    });
  }
  function radio(name, value) { all(`input[name="${name}"]`).forEach(input => { input.checked = input.value === value; }); }
  function show(selector, key, attr) { all(selector).forEach(element => { element.hidden = element.getAttribute(attr) !== key; }); }
  function render(group) {
    if (group === 'hhi') get('hhi-output').innerHTML = V.hhi(data, state.hhi);
    if (group === 'demand') { get('demand-output').innerHTML = V.demand(state.demand); get('demand-pFixed').disabled = state.demand.mode !== 'fixed'; radio('demand-mode', state.demand.mode); }
    if (group === 'fleet') { get('fleet-output').innerHTML = V.fleet(state.fleet, state.fleetHistory); get('fleet-K0').disabled = !!state.fleet.carried; get('fleet-K0').max = state.fleet.carried ? 240 : 200; }
    if (group === 'power') { get('power-output').innerHTML = V.power(state.power); get('power-O').max = state.power.K; }
    if (group === 'cost') get('cost-output').innerHTML = V.cost(state.cost);
    if (group === 'orders') {
      get('orders-toy-output').innerHTML = V.orders(data, state.orders, false);
      const isNet = state.orders.orderMode === 'net';
      get('orders-Nnet').disabled = !isNet; get('orders-Ngross').disabled = isNet; get('orders-cancel').disabled = isNet;
      get('orders-cancel').max = state.orders.Ngross; radio('order-mode', state.orders.orderMode);
    }
    if (initial[group]) sync(group);
  }
  function validate(group, candidate) { if (['demand','fleet','power','cost','orders'].includes(group)) E[group](candidate); }
  function updateInput(input) {
    const group = input.dataset.group, key = input.dataset.key;
    if (!group) return;
    if (input.value.trim() === '') { error(group, '请输入 ' + input.labels[0].textContent.trim() + '。'); return; }
    const value = Number(input.value), candidate = { ...state[group], [key]: value };
    try {
      if (!input.checkValidity()) throw new Error('请使用控件范围内的数值与步长。');
      validate(group, candidate); state[group] = candidate;
      if (group === 'fleet' && !candidate.carried) state.fleetHistory = [];
      error(group); render(group);
    } catch (err) {
      error(group, err.message + ' 图中保留上一次有效输入。');
      if (input.type === 'range') sync(group);
    }
  }
  function onRadio(input) {
    const name = input.name, value = input.value;
    if (name === 'material') { state.material = value; show('[data-material]', value, 'data-material'); }
    if (name === 'hhi-boundary') { state.hhi.boundary = value; render('hhi'); }
    if (name === 'hhi-ownership') { state.hhi.ownership = value; render('hhi'); }
    if (name === 'demand-mode') { state.demand.mode = value; error('demand'); render('demand'); }
    if (name === 'order-view') { state.orderView = value; show('[data-order-view]', value, 'data-order-view'); }
    if (name === 'order-mode') {
      const candidate = { ...state.orders, orderMode: value };
      try { E.orders(candidate); state.orders = candidate; error('orders'); render('orders'); } catch (err) { error('orders', err.message); radio(name,state.orders.orderMode); }
    }
    if (name === 'value-added') { state.valueAdded = value; get('value-added-output').innerHTML = V.valueAdded(data,value); }
    if (name === 'metadata-source') { state.metadata = value; show('[data-meta]', value, 'data-meta'); }
    if (name === 'metadata-view') { state.metadataView = value; show('[data-meta-view]', value, 'data-meta-view'); }
  }
  document.addEventListener('input', event => { if (event.target.matches('input[type="range"][data-group]')) updateInput(event.target); });
  document.addEventListener('change', event => {
    const input = event.target;
    if (input.matches('input[type="radio"]')) onRadio(input);
    if (input.matches('input[type="number"][data-group]')) updateInput(input);
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.hasAttribute('data-demand-preset')) {
      const p = E.experiment(data,'EXP-EI-SUPPLY-DEMAND-01').states[Number(button.dataset.demandPreset)];
      state.demand = { ...state.demand, u: p.u, v: p.v, mode: 'equilibrium' }; error('demand'); render('demand');
    }
    if (button.hasAttribute('data-power-preset')) {
      const p = E.experiment(data,'EXP-EI-CAPACITY-01').power.states[Number(button.dataset.powerPreset)];
      state.power = { ...initial.power, W: p.W_GW, M: p.M_GW, H: p.H_hours }; error('power'); render('power');
    }
    if (button.hasAttribute('data-cost-preset')) {
      const kind = button.dataset.costPreset, presets = E.experiment(data,'EXP-EI-CAPACITY-01').cost.states;
      state.cost = { ...initial.cost, ...(kind === 'price' ? presets[0] : kind === 'fixed' ? presets[1] : {}) }; error('cost'); render('cost');
    }
    if (button.hasAttribute('data-fleet-next')) {
      const result = E.fleet(state.fleet);
      state.fleetHistory.push(result); state.fleet = { ...state.fleet, K0: result.nextK0, carried: true }; error('fleet'); render('fleet');
    }
    if (button.hasAttribute('data-orders-adjust')) {
      const candidate = { ...state.orders, adjustment: E.experiment(data,'EXP-EI-CAPACITY-01').orders_adjustment_exercise.adjustment };
      try { E.orders(candidate); state.orders = candidate; error('orders'); render('orders'); } catch (err) { error('orders', err.message + ' 图中保留上一次有效输入。'); }
    }
    if (button.dataset.reset) { const group = button.dataset.reset; state[group] = structuredClone(initial[group]); if (group === 'fleet') state.fleetHistory = []; error(group); render(group); }
    if (button.hasAttribute('data-print')) window.print();
  });
  let savedDetails = [];
  window.addEventListener('beforeprint', () => { savedDetails = all('details').map(element => [element, element.open]); savedDetails.forEach(([element]) => { element.open = true; }); });
  window.addEventListener('afterprint', () => savedDetails.forEach(([element, open]) => { element.open = open; }));
  all('.interactive-only').forEach(element => { element.hidden = false; });
  show('[data-material]',state.material,'data-material'); show('[data-order-view]',state.orderView,'data-order-view'); show('[data-meta]',state.metadata,'data-meta'); show('[data-meta-view]',state.metadataView,'data-meta-view');
  ['demand','orders'].forEach(render);
  function hashTarget() {
    let id; try { id = decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1))); } catch (_) { return; }
    const target = get(id), chapter = target && target.closest('.chapter');
    const embedded = window.self !== window.top && !!chapter;
    document.documentElement.dataset.embedded = embedded ? 'true' : 'false';
    all('.chapter').forEach(section => { section.hidden = embedded && section !== chapter; });
    if (target) {
      for (let e = target.parentElement; e; e = e.parentElement) if (e.tagName === 'DETAILS') e.open = true;
      if (window.self === window.top) target.scrollIntoView({ block:'start', behavior:'auto' });
    }
  }
  window.addEventListener('hashchange', hashTarget); hashTarget();
}());
