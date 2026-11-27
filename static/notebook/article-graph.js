// Article-level interactive ego-graph: 1-screen hub capping, SVG directed connectors & live edge readout.
const roots = [...document.querySelectorAll('[data-article-graph]')];
for (const root of roots) initArticleGraph(root);

function initArticleGraph(root) {
  const stage = root.querySelector('[data-ag-stage]');
  const svg = root.querySelector('[data-ag-svg]');
  const center = root.querySelector('[data-ag-center]');
  const readout = root.querySelector('[data-ag-readout]');
  const filterBtns = [...root.querySelectorAll('[data-ag-filter]')];
  const cards = [...root.querySelectorAll('.ag-node-card')];
  const moreBtns = {
    in: root.querySelector('[data-ag-more="in"]'),
    out: root.querySelector('[data-ag-more="out"]'),
  };
  if (!stage || !svg || !center) return;

  const DEFAULT_CAP = 5;
  const defaultReadout = readout ? readout.textContent : '';
  const ns = 'http://www.w3.org/2000/svg';
  const mobileMQ = window.matchMedia('(max-width: 760px)');
  const expanded = { in: false, out: false };
  let activeKind = 'all';
  let activeEdge = null;
  let pinnedEdge = null;
  let lastStageW = 0;
  let lastStageH = 0;
  let drawQueued = false;
  const pathMap = new Map();

  function el(tag, attrs) {
    const node = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
    return node;
  }

  function updateReadout(card) {
    if (!readout) return;
    if (!card) {
      readout.textContent = defaultReadout;
      return;
    }
    readout.replaceChildren();
    const kind = document.createElement('strong');
    kind.textContent = `[${card.dataset.kindLabel}] `;
    const dir = document.createElement('strong');
    dir.textContent = `${card.dataset.from} → ${card.dataset.to}`;
    readout.append(kind, dir, document.createTextNode(`：${card.dataset.label}`));
  }

  function syncActiveState(edgeKey) {
    activeEdge = edgeKey;
    const activeCard = edgeKey ? cards.find((c) => c.dataset.agEdge === edgeKey && !c.hidden) : null;
    for (const card of cards) {
      const match = activeCard && card === activeCard;
      card.classList.toggle('is-active', Boolean(match));
      card.classList.toggle('is-dimmed', Boolean(activeCard && !match));
    }
    for (const [key, path] of pathMap.entries()) {
      const match = activeCard && key === edgeKey;
      path.classList.toggle('is-active', Boolean(match));
      path.classList.toggle('is-dimmed', Boolean(activeCard && !match));
      path.setAttribute('marker-end', `url(#ag-arrow-${match ? 'active' : 'normal'})`);
    }
    updateReadout(activeCard);
  }

  function drawConnectors(force = false) {
    drawQueued = false;
    pathMap.clear();
    if (mobileMQ.matches) {
      svg.replaceChildren();
      return;
    }
    const stageRect = stage.getBoundingClientRect();
    const w = Math.ceil(stageRect.width);
    const h = Math.ceil(stageRect.height);
    if (w < 120) return;
    if (!force && Math.abs(w - lastStageW) < 1 && Math.abs(h - lastStageH) < 1 && svg.childNodes.length) return;
    lastStageW = w;
    lastStageH = h;

    const cRect = center.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const defs = el('defs', {});
    for (const [id, fill] of [['normal', '#6f8b7e'], ['active', '#b83b24']]) {
      const marker = el('marker', {
        id: `ag-arrow-${id}`,
        viewBox: '0 0 10 10',
        refX: 8.5,
        refY: 5,
        markerWidth: 6.5,
        markerHeight: 6.5,
        orient: 'auto',
        markerUnits: 'userSpaceOnUse',
      });
      marker.append(el('path', { d: 'M1 1.5 L9 5 L1 8.5 Z', fill }));
      defs.append(marker);
    }
    svg.replaceChildren(defs);

    const visibleCards = cards.filter((c) => !c.hidden);
    const inCards = visibleCards.filter((c) => c.dataset.agSide === 'in');
    const outCards = visibleCards.filter((c) => c.dataset.agSide === 'out');

    const centerLeft = cRect.left - stageRect.left;
    const centerRight = cRect.right - stageRect.left;
    const centerTop = cRect.top - stageRect.top;
    const centerHeight = cRect.height;

    const anchorY = (idx, total) => {
      const pad = Math.min(34, centerHeight * 0.22);
      if (total <= 1) return centerTop + centerHeight * 0.5;
      return centerTop + pad + ((centerHeight - pad * 2) * idx) / (total - 1);
    };

    inCards.forEach((card, idx) => {
      const r = card.getBoundingClientRect();
      const x1 = r.right - stageRect.left + 2;
      const y1 = r.top - stageRect.top + r.height / 2;
      const x2 = centerLeft - 3;
      const y2 = anchorY(idx, inCards.length);
      const bend = Math.max(20, (x2 - x1) * 0.52);
      const d = `M${x1.toFixed(1)} ${y1.toFixed(1)} C${(x1 + bend).toFixed(1)} ${y1.toFixed(1)}, ${(x2 - bend).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      const path = el('path', {
        class: 'ag-edge-path',
        'data-kind': card.dataset.kind,
        d,
        'marker-end': 'url(#ag-arrow-normal)',
      });
      svg.append(path);
      pathMap.set(card.dataset.agEdge, path);
    });

    outCards.forEach((card, idx) => {
      const r = card.getBoundingClientRect();
      const x1 = centerRight + 2;
      const y1 = anchorY(idx, outCards.length);
      const x2 = r.left - stageRect.left - 3;
      const y2 = r.top - stageRect.top + r.height / 2;
      const bend = Math.max(20, (x2 - x1) * 0.52);
      const d = `M${x1.toFixed(1)} ${y1.toFixed(1)} C${(x1 + bend).toFixed(1)} ${y1.toFixed(1)}, ${(x2 - bend).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      const path = el('path', {
        class: 'ag-edge-path',
        'data-kind': card.dataset.kind,
        d,
        'marker-end': 'url(#ag-arrow-normal)',
      });
      svg.append(path);
      pathMap.set(card.dataset.agEdge, path);
    });

    if (activeEdge) syncActiveState(activeEdge);
  }

  function queueDraw(force = false) {
    if (drawQueued) return;
    drawQueued = true;
    requestAnimationFrame(() => drawConnectors(force));
  }

  function syncVisibility() {
    for (const side of ['in', 'out']) {
      const matching = cards.filter(
        (c) => c.dataset.agSide === side && (activeKind === 'all' || c.dataset.kind === activeKind)
      );
      const cap = activeKind === 'all' && !expanded[side] ? DEFAULT_CAP : Infinity;
      const hiddenOverflow = Math.max(0, matching.length - cap);

      for (const c of cards.filter((x) => x.dataset.agSide === side)) {
        const idx = matching.indexOf(c);
        c.hidden = idx < 0 || idx >= cap;
      }

      const btn = moreBtns[side];
      if (btn) {
        if (activeKind === 'all' && matching.length > DEFAULT_CAP) {
          btn.hidden = false;
          btn.textContent = expanded[side]
            ? `收起至核心 ${DEFAULT_CAP} 项`
            : `+ 展开其余 ${hiddenOverflow} 项联系（共 ${matching.length}）`;
          btn.setAttribute('aria-expanded', String(expanded[side]));
        } else {
          btn.hidden = true;
        }
      }
    }
    syncActiveState(null);
    queueDraw(true);
  }

  for (const btn of filterBtns) {
    btn.addEventListener('click', () => {
      activeKind = btn.dataset.agFilter || 'all';
      pinnedEdge = null;
      filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      syncVisibility();
    });
  }

  for (const side of ['in', 'out']) {
    moreBtns[side]?.addEventListener('click', () => {
      expanded[side] = !expanded[side];
      syncVisibility();
    });
  }

  for (const card of cards) {
    const key = card.dataset.agEdge;
    card.addEventListener('mouseenter', () => {
      if (!pinnedEdge) syncActiveState(key);
    });
    card.addEventListener('mouseleave', () => {
      if (!pinnedEdge) syncActiveState(null);
    });
    card.addEventListener('focus', () => {
      if (!pinnedEdge) syncActiveState(key);
    });
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      pinnedEdge = pinnedEdge === key ? null : key;
      syncActiveState(pinnedEdge);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (event.target.closest('a')) return;
        event.preventDefault();
        pinnedEdge = pinnedEdge === key ? null : key;
        syncActiveState(pinnedEdge);
      } else if (event.key === 'Escape' && pinnedEdge) {
        pinnedEdge = null;
        syncActiveState(null);
      }
    });
  }

  if ('ResizeObserver' in window) {
    new ResizeObserver(() => queueDraw(false)).observe(stage);
  }
  window.addEventListener('resize', () => queueDraw(false));
  mobileMQ.addEventListener('change', () => queueDraw(true));
  document.fonts?.ready?.then(() => queueDraw(true));
  syncVisibility();
  window.__nbEnhanceReferences?.(root);
}
