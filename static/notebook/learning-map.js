const root = document.querySelector('[data-learning-map]');
if (root) {
  let data;
  try {
    data = JSON.parse(root.querySelector('[data-map-data]').textContent);
  } catch {
    /* Keep the complete server-rendered directory. */
  }
  if (data?.nodes?.length) initialiseLearningMap(root, data);
}

function initialiseLearningMap(root, data) {
  const nodes = new Map(data.nodes.map((node) => [node.id, node]));
  const links = [...root.querySelectorAll('[data-map-node]')];
  const panels = [...root.querySelectorAll('[data-map-panel]')];
  const graph = root.querySelector('.learning-map-graph');
  const svg = root.querySelector('.learning-map-edges');
  const choice = root.querySelector('[data-map-edge-choice]');
  const detail = root.querySelector('[data-map-edge-detail]');
  const kindBtns = [...root.querySelectorAll('[data-map-kind]')];
  const resetBtn = root.querySelector('[data-map-reset]');
  const focusLabel = root.querySelector('[data-map-focus-label]');
  const status = root.querySelector('[data-map-status]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const kinds = {
    main: '学习衔接',
    knowledge: '知识支持',
    economic: '经济联系',
    decision: '决策用途',
    research: '研究与反馈',
  };
  const edges = data.edges.map((edge, index) => ({ ...edge, index }));
  const mainIds = new Set(edges.filter((edge) => edge.kind === 'main').flatMap((edge) => [edge.from, edge.to]));
  const ns = 'http://www.w3.org/2000/svg';

  const popup = document.createElement('div');
  popup.className = 'learning-map-edge-popup';
  popup.dataset.mapEdgePopup = '';
  popup.setAttribute('aria-hidden', 'true');
  popup.hidden = true;
  graph.append(popup);

  // Mark nodes that contain locally read articles.
  try {
    const readIds = new Set(JSON.parse(localStorage.getItem('nb.read') || '[]') || []);
    if (readIds.size) {
      for (const link of links) {
        const nid = link.dataset.mapNode;
        const readCount = (data.entries || []).filter((e) => e.node === nid && readIds.has(e.id)).length;
        if (readCount > 0) {
          link.classList.add('has-local-read');
          link.title = `${nodes.get(nid)?.short || nid} · 本设备已读 ${readCount} 篇`;
        }
      }
    }
  } catch {
    /* ignore storage errors */
  }

  let selected = nodes.has(data.default_node) ? data.default_node : data.nodes[0].id;
  let mode = 'overview';
  let activeKind = 'all';
  let hoveredNode = null;
  let positions = new Map();
  let visible = [];
  let paths = [];
  let frame = 0;
  let activeEdge = null;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let resizeTimer = 0;
  let edgeAnchor = null;
  let edgePinned = false;

  function element(name, attrs) {
    const result = document.createElementNS(ns, name);
    Object.entries(attrs).forEach(([key, value]) => result.setAttribute(key, String(value)));
    return result;
  }

  function relatedEdges(id) {
    return edges.filter((edge) => edge.from === id || edge.to === id);
  }

  function filterByKind(list) {
    return activeKind === 'all' ? list : list.filter((edge) => edge.kind === activeKind);
  }

  function hashNode() {
    try {
      const hash = decodeURIComponent(location.hash.slice(1));
      const id = hash.startsWith('topic-') ? hash.slice(6) : hash;
      return nodes.has(id) ? id : null;
    } catch {
      return null;
    }
  }

  function placeExplanation() {
    if (popup.hidden || !edgeAnchor || activeEdge === null) return;
    const box = graph.getBoundingClientRect();
    const w = popup.offsetWidth;
    const h = popup.offsetHeight;
    const left = 10;
    const right = Math.max(left, canvasWidth - w - 10);
    const top = Math.max(10, -box.top + 10);
    const bottom = Math.max(top, Math.min(canvasHeight - h - 10, innerHeight - box.top - h - 10));
    const candidates = [
      [18, -h - 14],
      [-w - 18, -h - 14],
      [18, 16],
      [-w - 18, 16],
    ].map(([dx, dy]) => ({
      x: Math.max(left, Math.min(right, edgeAnchor.x + dx)),
      y: Math.max(top, Math.min(bottom, edgeAnchor.y + dy)),
    }));
    const edge = edges[activeEdge];
    const overlap = (candidate) =>
      [...positions].reduce((sum, [id, p]) => {
        const width = Math.max(0, Math.min(candidate.x + w, p.x + p.w / 2) - Math.max(candidate.x, p.x - p.w / 2));
        const height = Math.max(0, Math.min(candidate.y + h, p.y + p.h / 2) - Math.max(candidate.y, p.y - p.h / 2));
        return sum + width * height * (id === edge.from || id === edge.to ? 4 : 1);
      }, 0);
    candidates.sort((a, b) => overlap(a) - overlap(b));
    popup.style.left = `${candidates[0].x}px`;
    popup.style.top = `${candidates[0].y}px`;
  }

  function syncHoverHighlight() {
    if (mode !== 'overview' || !hoveredNode) {
      links.forEach((link) => {
        link.classList.remove('is-hover-focus', 'is-hover-dim');
      });
      paths.forEach(({ line }) => {
        line.classList.remove('is-hover-focus', 'is-hover-dim');
      });
      return;
    }
    const incident = visible.filter((e) => e.from === hoveredNode || e.to === hoveredNode);
    const neighborIds = new Set([hoveredNode, ...incident.flatMap((e) => [e.from, e.to])]);
    const incidentSet = new Set(incident.map((e) => e.index));
    links.forEach((link) => {
      const id = link.dataset.mapNode;
      link.classList.toggle('is-hover-focus', neighborIds.has(id));
      link.classList.toggle('is-hover-dim', !neighborIds.has(id));
    });
    paths.forEach(({ edge, line }) => {
      const match = incidentSet.has(edge.index);
      line.classList.toggle('is-hover-focus', match);
      line.classList.toggle('is-hover-dim', !match);
    });
  }

  function updateFocusLabel() {
    if (!focusLabel) return;
    const kindNote = activeKind === 'all' ? '' : ` · 仅看${kinds[activeKind]}`;
    if (mode === 'overview' && hoveredNode && nodes.has(hoveredNode)) {
      const count = filterByKind(relatedEdges(hoveredNode)).length;
      focusLabel.textContent = `${hoveredNode} · ${nodes.get(hoveredNode).short}（${count} 条直接联系，点击聚焦）`;
      return;
    }
    if (mode === 'focus') {
      const count = filterByKind(relatedEdges(selected)).length;
      focusLabel.textContent = `节点 ${selected} · ${nodes.get(selected).short}（${count} 条联系${kindNote}）`;
    } else {
      focusLabel.textContent = `全图 19 节点 · ${visible.length} 条关系${kindNote}`;
    }
  }

  function setExplanation(index, anchor = null) {
    activeEdge = index === null ? null : Number(index);
    choice.value = activeEdge === null ? '' : String(activeEdge);
    paths.forEach((item) => {
      item.line.classList.toggle('is-active', item.edge.index === activeEdge);
      item.line.classList.toggle('is-dimmed', activeEdge !== null && item.edge.index !== activeEdge);
    });
    detail.replaceChildren();
    if (activeEdge === null) {
      const prompt = document.createElement('p');
      prompt.textContent = '悬停或点击连线查看起点、作用与终点，也可从下拉菜单按关系浏览。';
      edgePinned = false;
      edgeAnchor = null;
      popup.hidden = true;
      detail.append(prompt);
      render();
      return;
    }
    const edge = edges[activeEdge];
    const kind = document.createElement('p');
    kind.className = 'learning-map-edge-kind';
    kind.textContent = kinds[edge.kind];
    const line = document.createElement('p');
    const from = document.createElement('strong');
    from.textContent = `${edge.from} · ${nodes.get(edge.from).short}`;
    const to = document.createElement('strong');
    to.textContent = `${edge.to} · ${nodes.get(edge.to).short}`;
    line.append(from, document.createTextNode(' → '), to);
    const action = document.createElement('p');
    action.textContent = edge.label;
    detail.append(kind, line, action);
    edgeAnchor = anchor;
    popup.hidden = !anchor;
    if (anchor) popup.replaceChildren(kind.cloneNode(true), line.cloneNode(true), action.cloneNode(true));
    render();
  }

  function prepareEdges() {
    visible = mode === 'overview' ? filterByKind(edges) : filterByKind(relatedEdges(selected));
    const defs = element('defs', {});
    for (const [id, fill] of [
      ['normal', '#6f8d7e'],
      ['main', '#145343'],
      ['active', '#b83b24'],
    ]) {
      const marker = element('marker', {
        id: `map-arrow-${id}`,
        viewBox: '0 0 10 10',
        refX: 8.5,
        refY: 5,
        markerWidth: 6.5,
        markerHeight: 6.5,
        orient: 'auto',
        markerUnits: 'userSpaceOnUse',
      });
      marker.append(element('path', { d: 'M1 1.5 L9 5 L1 8.5 Z', fill }));
      defs.append(marker);
    }
    svg.replaceChildren(defs);

    // Draw non-main edges first so main spine sits crisply above them
    const ordered = [...visible].sort((a, b) => (a.kind === 'main' ? 1 : 0) - (b.kind === 'main' ? 1 : 0));
    paths = ordered.map((edge) => {
      const isSecondaryOverview = mode === 'overview' && activeKind === 'all' && edge.kind !== 'main';
      const line = element('path', {
        class: `learning-map-edge${isSecondaryOverview ? ' is-secondary' : ''}`,
        'data-edge': `${edge.from}-${edge.to}`,
        'data-kind': edge.kind,
        'data-edge-index': edge.index,
        'marker-end': `url(#map-arrow-${edge.kind === 'main' ? 'main' : 'normal'})`,
      });
      const hit = element('path', { class: 'learning-map-edge-hit', 'data-edge-hit': edge.index });
      const title = element('title', {});
      title.textContent = `${nodes.get(edge.from).short} → ${nodes.get(edge.to).short}（${kinds[edge.kind]}）：${edge.label}`;
      hit.append(title);
      function showHere(event) {
        const box = graph.getBoundingClientRect();
        setExplanation(edge.index, { x: event.clientX - box.left, y: event.clientY - box.top });
      }
      hit.addEventListener('pointerenter', (event) => {
        if (!edgePinned && root.dataset.mapAnimating !== 'true') showHere(event);
      });
      hit.addEventListener('pointerleave', () => {
        if (!edgePinned) setExplanation(null);
      });
      hit.addEventListener('click', (event) => {
        edgePinned = true;
        showHere(event);
      });
      svg.append(line, hit);
      return { edge, line, hit };
    });

    choice.replaceChildren();
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = `选择一条关系（${visible.length}）`;
    choice.append(placeholder);
    visible.forEach((edge) => {
      const option = document.createElement('option');
      option.value = edge.index;
      option.textContent = `${edge.from}·${nodes.get(edge.from).short} → ${edge.to}·${nodes.get(edge.to).short} · ${kinds[edge.kind]}`;
      choice.append(option);
    });
    updateFocusLabel();
    setExplanation(null);
  }

  function layoutTargets() {
    const width = graph.clientWidth;
    if (width < 120) return new Map();
    const height = width < 360 ? 1160 : width < 520 ? 940 : width < 700 ? 740 : 600;
    canvasWidth = width;
    canvasHeight = height;
    graph.style.height = `${height}px`;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    const nodeWidth = width < 480 ? 96 : width < 680 ? 108 : 118;
    const nodeHeight = 58;
    const cx = width / 2;
    const cy = height / 2;
    const related = new Set(filterByKind(relatedEdges(selected)).flatMap((edge) => [edge.from, edge.to]));
    const nearby = data.nodes.filter((node) => node.id !== selected && related.has(node.id));
    const peripheral = data.nodes.filter((node) => node.id !== selected && !related.has(node.id));
    const target = new Map();

    function place(ids, rx, ry, angleOffset = -Math.PI / 2) {
      if (!ids.length) return;
      ids.forEach((node, index) => {
        const angle = angleOffset + (index * Math.PI * 2) / ids.length;
        target.set(node.id, {
          x: cx + rx * Math.cos(angle),
          y: cy + ry * Math.sin(angle),
          w: nodeWidth,
          h: nodeHeight,
        });
      });
    }

    if (mode === 'overview') {
      place(data.nodes.filter((node) => mainIds.has(node.id)), width * 0.24, height * 0.26);
      place(data.nodes.filter((node) => !mainIds.has(node.id)), width * 0.415, height * 0.43, -0.9);
    } else {
      target.set(selected, { x: cx, y: cy, w: nodeWidth, h: nodeHeight });
      const innerCount = nearby.length > 9 ? 6 : nearby.length;
      place(nearby.slice(0, innerCount), width * 0.27, height * 0.25);
      place(nearby.slice(innerCount), width * 0.4, height * 0.39, -1.3);
      place(peripheral, width * 0.44, height * 0.45, -0.8);
    }

    const points = data.nodes.map((node) => ({
      id: node.id,
      ...target.get(node.id),
      tx: target.get(node.id).x,
      ty: target.get(node.id).y,
    }));
    const fixed = (point) => mode === 'focus' && point.id === selected;

    for (let pass = 0; pass < 360; pass += 1) {
      for (const point of points) {
        if (!fixed(point) && pass < 240) {
          point.x += (point.tx - point.x) * 0.006;
          point.y += (point.ty - point.y) * 0.006;
        }
      }
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = b.x - a.x || (i < j ? 0.01 : -0.01);
          const dy = b.y - a.y || 0.01;
          const ox = (a.w + b.w) / 2 + 12 - Math.abs(dx);
          const oy = (a.h + b.h) / 2 + 12 - Math.abs(dy);
          if (ox <= 0 || oy <= 0) continue;
          const sx = dx > 0 ? 1 : -1;
          const sy = dy > 0 ? 1 : -1;
          const horizontalRoom =
            a.x - (sx * ox) / 2 > a.w / 2 + 8 &&
            a.x - (sx * ox) / 2 < width - a.w / 2 - 8 &&
            b.x + (sx * ox) / 2 > b.w / 2 + 8 &&
            b.x + (sx * ox) / 2 < width - b.w / 2 - 8;
          const horizontal = ox < oy && horizontalRoom;
          const amount = (horizontal ? ox : oy) + 0.2;
          const shareA = fixed(a) ? 0 : fixed(b) ? 1 : 0.5;
          const shareB = fixed(b) ? 0 : fixed(a) ? 1 : 0.5;
          if (horizontal) {
            a.x -= sx * amount * shareA;
            b.x += sx * amount * shareB;
          } else {
            a.y -= sy * amount * shareA;
            b.y += sy * amount * shareB;
          }
        }
      }
      for (const point of points) {
        point.x = Math.max(point.w / 2 + 10, Math.min(width - point.w / 2 - 10, point.x));
        point.y = Math.max(point.h / 2 + 12, Math.min(height - point.h / 2 - 12, point.y));
      }
    }

    const activeKindNodes =
      activeKind === 'all' ? null : new Set(visible.flatMap((edge) => [edge.from, edge.to]));

    links.forEach((link) => {
      const id = link.dataset.mapNode;
      link.style.width = `${nodeWidth}px`;
      link.style.height = `${nodeHeight}px`;
      if (mode === 'overview') {
        if (activeKindNodes && !activeKindNodes.has(id)) {
          link.dataset.layoutRole = 'peripheral';
        } else {
          link.dataset.layoutRole = id === selected ? 'selected' : 'related';
        }
      } else {
        link.dataset.layoutRole = id === selected ? 'selected' : related.has(id) ? 'related' : 'peripheral';
      }
    });
    return new Map(points.map(({ id, x, y, w, h }) => [id, { x, y, w, h }]));
  }

  function boundary(point, toward) {
    const dx = toward.x - point.x;
    const dy = toward.y - point.y;
    const scale = Math.max(Math.abs(dx) / (point.w / 2 + 3), Math.abs(dy) / (point.h / 2 + 3)) || 1;
    return { x: point.x + dx / scale, y: point.y + dy / scale };
  }

  function render() {
    links.forEach((link) => {
      const p = positions.get(link.dataset.mapNode);
      if (p) link.style.transform = `translate3d(${(p.x - p.w / 2).toFixed(2)}px,${(p.y - p.h / 2).toFixed(2)}px,0)`;
    });
    paths.forEach(({ edge, line, hit }) => {
      const a = positions.get(edge.from);
      const b = positions.get(edge.to);
      if (!a || !b) return;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy) || 1;
      const reverse = visible.some((other) => other.from === edge.to && other.to === edge.from);
      const bend = reverse ? Math.min(48, distance * 0.18) : Math.min(16, distance * 0.035);
      const control = {
        x: (a.x + b.x) / 2 - (dy / distance) * bend,
        y: (a.y + b.y) / 2 + (dx / distance) * bend,
      };
      const start = boundary(a, control);
      const end = boundary(b, control);
      const d = `M${start.x} ${start.y} Q${control.x} ${control.y} ${end.x} ${end.y}`;
      line.setAttribute('d', d);
      hit.setAttribute('d', d);
      const markerKind = edge.index === activeEdge ? 'active' : edge.kind === 'main' ? 'main' : 'normal';
      line.setAttribute('marker-end', `url(#map-arrow-${markerKind})`);
    });
    syncHoverHighlight();
    placeExplanation();
  }

  function move(animate = true) {
    cancelAnimationFrame(frame);
    const target = layoutTargets();
    if (!target.size) return;
    if (!positions.size || reduced.matches || !animate) {
      positions = target;
      root.dataset.mapAnimating = 'false';
      render();
      return;
    }
    const start = new Map([...positions].map(([id, point]) => [id, { ...point }]));
    const began = performance.now();
    const duration = 540;
    root.dataset.mapAnimating = 'true';
    function tick(now) {
      const t = Math.min(1, (now - began) / duration);
      const easing = t * t * (3 - 2 * t);
      target.forEach((to, id) => {
        const from = start.get(id) || to;
        positions.set(id, {
          x: from.x + (to.x - from.x) * easing,
          y: from.y + (to.y - from.y) * easing,
          w: to.w,
          h: to.h,
        });
      });
      render();
      if (t < 1) frame = requestAnimationFrame(tick);
      else {
        root.dataset.mapAnimating = 'false';
        frame = 0;
      }
    }
    frame = requestAnimationFrame(tick);
  }

  function select(id, remember = false, focus = true) {
    if (!nodes.has(id)) return;
    selected = id;
    mode = focus ? 'focus' : 'overview';
    hoveredNode = null;
    root.dataset.mapMode = mode;
    root.dataset.mapSelected = id;
    links.forEach((link) => {
      if (link.dataset.mapNode === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.mapPanel !== id;
    });
    if (resetBtn) resetBtn.setAttribute('aria-pressed', String(!focus));
    if (remember) {
      const hash = `#topic-${encodeURIComponent(id)}`;
      if (location.hash !== hash) history.pushState(null, '', hash);
      if (status) status.textContent = `已聚焦节点 ${id} · ${nodes.get(id).title}，右侧文章与关系已更新。`;
    }
    prepareEdges();
    move();
    const activePanel = panels.find((p) => p.dataset.mapPanel === id);
    if (activePanel) window.__nbEnhanceReferences?.(activePanel);
  }

  root.classList.add('is-enhanced');

  root.addEventListener('click', (event) => {
    const link = event.target.closest('[data-map-node], [data-map-select]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    select(link.dataset.mapNode || link.dataset.mapSelect, true, true);
  });

  links.forEach((link, index) => {
    link.addEventListener('pointerenter', () => {
      if (mode === 'overview' && root.dataset.mapAnimating !== 'true') {
        hoveredNode = link.dataset.mapNode;
        syncHoverHighlight();
        updateFocusLabel();
      }
    });
    link.addEventListener('pointerleave', () => {
      if (hoveredNode === link.dataset.mapNode) {
        hoveredNode = null;
        syncHoverHighlight();
        updateFocusLabel();
      }
    });
    link.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % links.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + links.length - 1) % links.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = links.length - 1;
      else if (event.key === ' ') {
        event.preventDefault();
        link.click();
        return;
      } else return;
      event.preventDefault();
      links[next].focus({ preventScroll: true });
    });
  });

  kindBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeKind = btn.dataset.mapKind || 'all';
      kindBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      prepareEdges();
      move(false);
    });
  });

  resetBtn?.addEventListener('click', () => select(selected, false, false));
  choice.addEventListener('change', () => {
    edgePinned = false;
    setExplanation(choice.value === '' ? null : Number(choice.value));
  });
  graph.addEventListener('click', (event) => {
    if (event.target === graph || event.target === svg) setExplanation(null);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeEdge !== null) setExplanation(null);
  });

  root.addEventListener('nb:select-node', (event) => {
    const id = event.detail?.id;
    if (id && nodes.has(id)) {
      select(id, true, true);
    }
  });

  function restore() {
    const id = hashNode();
    select(id || data.default_node || data.nodes[0].id, false, Boolean(id));
  }
  window.addEventListener('hashchange', restore);
  window.addEventListener('popstate', restore);

  function onResize() {
    if (graph.clientWidth < 120) return;
    if (Math.abs(graph.clientWidth - canvasWidth) < 1 && positions.size) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => move(false), 80);
  }
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(graph);
  window.addEventListener('resize', onResize);
  reduced.addEventListener('change', () => move(false));
  if (document.fonts?.ready) document.fonts.ready.then(() => move(false));
  restore();
}
