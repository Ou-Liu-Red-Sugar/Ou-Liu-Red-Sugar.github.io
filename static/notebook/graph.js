// One-hop relationships come from the authored typed edges, never inferred links.
(() => {
  const SVG = 'http://www.w3.org/2000/svg';
  const zh = document.documentElement.lang.startsWith('zh');
  const previewURLs = new Map([...document.querySelectorAll('template[data-ref][data-url]')].map(template => [new URL(template.dataset.url, location.href).href, template.dataset.ref]));
  const groups = {
    learning: new Set(['part_of', 'requires', 'informs']),
    methods: new Set(['uses_method', 'derived_from', 'has_mechanism']),
    evidence: new Set(['illustrated_by', 'supported_by', 'analyzes', 'updates', 'compares_with'])
  };
  const element = (name, attributes = {}, text) => {
    const el = document.createElementNS(SVG, name);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    if (text !== undefined) el.textContent = text;
    return el;
  };
  function shortLines(text, length = 16) {
    const chars = Array.from(text || '');
    return chars.length <= length ? [text] : [chars.slice(0, length).join(''), chars.slice(length, 2 * length - 1).join('') + (chars.length >= 2 * length ? '…' : '')];
  }
  document.querySelectorAll('[data-knowledge-graph]').forEach((root, index) => {
    const source = root.querySelector('.knowledge-graph-data');
    let data;
    try { data = JSON.parse(source.textContent); } catch { return; }
    const nodes = new Map(data.nodes.map(node => [node.id, node]));
    const focus = nodes.get(data.focus);
    const scope = new Set(data.scope || [data.focus]);
    if (!focus) return;
    const visual = root.querySelector('.knowledge-graph-visual');
    const status = root.querySelector('.graph-view-status');
    const controls = root.querySelector('.graph-controls');
    const markerID = 'notebook-graph-arrow-' + index;
    function render(view) {
      const edges = data.edges.filter(edge => view === 'all' || groups[view].has(edge.relation));
      const neighborIDs = [...new Set(edges.map(edge => scope.has(edge.from) ? edge.to : edge.from))].filter(id => id !== data.focus && nodes.has(id));
      root.querySelectorAll('[data-graph-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.graphView === view)));
      root.querySelectorAll('.graph-relations li[data-relation]').forEach(row => { row.hidden = view !== 'all' && !groups[view].has(row.dataset.relation); });
      status.textContent = zh ? edges.length + ' 条直接关系；完整文字和链接见下方列表。' : edges.length + ' direct relationships; full details appear below.';
      const height = Math.max(270, Math.ceil(neighborIDs.length / 2) * 108 + 40);
      const svg = element('svg', { viewBox: `0 0 900 ${height}`, role: 'group', 'aria-label': zh ? '有类型的一跳关系图' : 'Typed one-hop relationship graph' });
      const defs = element('defs');
      const marker = element('marker', { id: markerID, viewBox: '0 0 10 10', refX: '9', refY: '5', markerWidth: '6', markerHeight: '6', orient: 'auto-start-reverse' });
      marker.append(element('path', { d: 'M0 0L10 5L0 10Z', class: 'graph-arrow' }));
      defs.append(marker); svg.append(defs);
      const center = { x: 450, y: height / 2 };
      const places = new Map(neighborIDs.map((id, i) => [id, { x: i % 2 === 0 ? 135 : 765, y: 50 + Math.floor(i / 2) * 108 }]));
      const linesLayer = element('g'); const nodesLayer = element('g');
      for (const id of neighborIDs) {
        const p = places.get(id), left = p.x < center.x;
        const linked = edges.filter(edge => edge.from === id || edge.to === id);
        linked.forEach((edge, n) => {
          const outbound = scope.has(edge.from);
          const a = { x: center.x + (left ? -112 : 112), y: center.y + (n - (linked.length - 1) / 2) * 7 };
          const b = { x: p.x + (left ? 112 : -112), y: p.y };
          const from = outbound ? a : b, to = outbound ? b : a;
          const path = element('path', { d: `M ${from.x} ${from.y} L ${to.x} ${to.y}`, class: 'graph-connection', 'marker-end': `url(#${markerID})` });
          if(edge.relation==='compares_with')path.setAttribute('marker-start',`url(#${markerID})`);
          path.append(element('title', {}, `${nodes.get(edge.from)?.title || edge.from} — ${data.labels[edge.relation] || edge.relation} → ${nodes.get(edge.to)?.title || edge.to}: ${edge.reason}`));
          linesLayer.append(path);
        });
        const relations = [...new Set(linked.map(edge => data.labels[edge.relation] || edge.relation))];
        shortLines(relations.join(' / '), 25).forEach((text, n) => nodesLayer.append(element('text', { x: p.x, y: p.y + 44 + n * 15, class: 'graph-edge-label', 'text-anchor': 'middle' }, text)));
      }
      function addNode(node, p, current = false) {
        const group = element(node.url ? 'a' : 'g', node.url ? { href: node.url, tabindex: '0', 'aria-label': node.title } : {});
        const previewID = node.preview_id || (node.url && previewURLs.get(new URL(node.url, location.href).href));
        if (previewID) group.setAttribute('data-reference', previewID);
        group.setAttribute('class', current ? 'graph-node is-current' : 'graph-node');
        group.append(element('title', {}, [node.title, node.kind, node.period, node.cutoff].filter(Boolean).join(' · ')));
        group.append(element('rect', { x: p.x - 112, y: p.y - 28, width: 224, height: 56, rx: 6 }));
        const titleLines = shortLines(node.title);
        titleLines.forEach((line, n) => group.append(element('text', { x: p.x, y: p.y + (titleLines.length === 1 ? 5 : -3 + n * 19), 'text-anchor': 'middle' }, line)));
        nodesLayer.append(group);
      }
      neighborIDs.forEach(id => addNode(nodes.get(id), places.get(id)));
      addNode(focus, center, true);
      svg.append(linesLayer, nodesLayer); visual.replaceChildren(svg);
    }
    controls.addEventListener('click', event => {
      const button = event.target.closest('[data-graph-view]');
      if (button) render(button.dataset.graphView);
    });
    render('all'); visual.hidden = false; status.hidden = false; controls.hidden = false;
  });
})();
