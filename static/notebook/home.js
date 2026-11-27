// Homepage tactile interactions: scroll-reactive masthead, sliding segmented controls,
// one-click email copy, and desk-card reading state sync.
const zh = document.documentElement.lang.startsWith("zh");

// 1. Scroll-reactive masthead
const masthead = document.querySelector(".masthead");
if (masthead) {
  let ticking = false;
  const syncScroll = () => {
    masthead.classList.toggle("is-scrolled", window.scrollY > 8);
    ticking = false;
  };
  syncScroll();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(syncScroll);
      }
    },
    { passive: true }
  );
}

// Helper: bind sliding thumb + keyboard navigation to any .home-tabs group
function bindSegmentedTabs(tablist, onSelect) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const thumb = tablist.querySelector(".home-tab-thumb");
  if (!tabs.length) return;

  const moveThumb = (tab, instant = false) => {
    if (!thumb || !tab) return;
    const listRect = tablist.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const borderLeft = parseFloat(getComputedStyle(tablist).borderLeftWidth) || 0;
    const left = tabRect.left - listRect.left - borderLeft + tablist.scrollLeft;
    if (instant) tablist.classList.add("is-instant");
    thumb.style.width = `${tabRect.width}px`;
    thumb.style.transform = `translateX(${left}px)`;
    tablist.classList.add("is-ready");
    if (instant) {
      requestAnimationFrame(() => tablist.classList.remove("is-instant"));
    }
  };

  const activate = (tab, moveFocus = false, instant = false) => {
    for (const item of tabs) {
      const active = item === tab;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    }
    moveThumb(tab, instant);
    onSelect(tab);
    if (moveFocus) tab.focus({ preventScroll: true });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab, false, false));
    tab.addEventListener("keydown", (event) => {
      let next = -1;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      if (next >= 0) {
        event.preventDefault();
        activate(tabs[next], true, false);
      }
    });
  });

  const syncCurrent = () => {
    const active = tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0];
    moveThumb(active, true);
  };

  syncCurrent();
  document.fonts?.ready?.then(syncCurrent);
  if (window.ResizeObserver) {
    new ResizeObserver(syncCurrent).observe(tablist);
  } else {
    window.addEventListener("resize", syncCurrent);
  }
}

// 2. Investment Notebook view tabs (7 Volumes / Topic Graph / Recent / Start here)
for (const section of document.querySelectorAll("[data-home-tabs]")) {
  const tablist = section.querySelector(".home-tabs");
  const panels = [...section.querySelectorAll("[data-home-panel]")];
  if (!tablist || !panels.length) continue;

  bindSegmentedTabs(tablist, (tab) => {
    const target = tab.dataset.homeTab;
    for (const panel of panels) {
      const show = panel.dataset.homePanel === target;
      panel.hidden = !show;
      panel.classList.remove("is-entering");
      if (show) {
        void panel.offsetWidth;
        panel.classList.add("is-entering");
      }
    }
    section.dispatchEvent(new CustomEvent("home:tab-change", { detail: { target } }));
  });
}

// 3. Mathematics filter tabs on EN homepage (All / PDFs / Online)
for (const section of document.querySelectorAll('[data-home-filter="math"]')) {
  const tablist = section.querySelector(".home-tabs");
  const pdfGroup = section.querySelector('[data-filter-group="pdf"]');
  const onlineGroup = section.querySelector('[data-filter-group="online"]');
  if (!tablist || !pdfGroup || !onlineGroup) continue;

  bindSegmentedTabs(tablist, (tab) => {
    const mode = tab.dataset.filterTab || "all";
    const showPdf = mode === "all" || mode === "pdf";
    const showOnline = mode === "all" || mode === "online";
    pdfGroup.hidden = !showPdf;
    onlineGroup.hidden = !showOnline;
    onlineGroup.classList.toggle("is-solo", mode === "online");
    const subhead = onlineGroup.querySelector(".home-math-subhead");
    if (subhead) subhead.hidden = mode === "online";
  });
}

// 4. One-click email copy micro-interaction
for (const btn of document.querySelectorAll("[data-copy-email]")) {
  const label = btn.querySelector(".home-copy-label");
  let timer = 0;

  btn.addEventListener("click", async () => {
    const email = btn.dataset.copyEmail;
    if (!email) return;
    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      const helper = document.createElement("textarea");
      helper.value = email;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.append(helper);
      helper.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      helper.remove();
    }
    if (!copied) return;
    btn.classList.add("is-copied");
    if (label) label.textContent = zh ? "已复制" : "Copied";
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      btn.classList.remove("is-copied");
      if (label) label.textContent = "";
    }, 1800);
  });
}

// 5. Sync Hero Desk footer when site.js reveals local reading progress
const resumeLink = document.querySelector(".home-desk [data-continue-reading]");
const deskNext = document.querySelector(".home-desk [data-desk-next]");
if (resumeLink && deskNext) {
  const syncDeskFooter = () => {
    deskNext.hidden = !resumeLink.hidden;
  };
  syncDeskFooter();
  new MutationObserver(syncDeskFooter).observe(resumeLink, {
    attributes: true,
    attributeFilter: ["hidden"],
  });
}

// 6. Interactive Topic Graph preview inside Homepage Notebook Band
const homeGraph = document.querySelector("[data-home-graph]");
if (homeGraph) {
  let gData = null;
  try {
    gData = JSON.parse(homeGraph.querySelector("[data-home-graph-data]")?.textContent || "null");
  } catch {
    gData = null;
  }
  if (gData?.nodes?.length) {
    const canvas = homeGraph.querySelector("[data-hg-canvas]");
    const svg = homeGraph.querySelector("[data-hg-svg]");
    const card = homeGraph.querySelector("[data-hg-card]");
    const nodeBtns = [...homeGraph.querySelectorAll("[data-hg-node]")];
    const nodesById = new Map(gData.nodes.map((n) => [n.id, n]));
    const btnById = new Map(nodeBtns.map((b) => [b.dataset.hgNode, b]));
    const edges = gData.edges || [];
    const entries = gData.entries || [];
    const ns = "http://www.w3.org/2000/svg";
    let activeId = nodesById.has(gData.default_node) ? gData.default_node : gData.nodes[0].id;

    const svgEl = (tag, attrs) => {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
      return node;
    };

    const drawEdges = (focusId = activeId) => {
      if (!canvas || !svg || canvas.offsetParent === null) return;
      const box = canvas.getBoundingClientRect();
      if (box.width < 120) return;
      svg.setAttribute("viewBox", `0 0 ${Math.ceil(box.width)} ${Math.ceil(box.height)}`);
      svg.replaceChildren();

      const relatedEdges = edges.filter((e) => e.from === focusId || e.to === focusId);
      const neighborIds = new Set([focusId, ...relatedEdges.flatMap((e) => [e.from, e.to])]);
      const drawnKeys = new Set();

      // Draw subtle main spine + crisp highlighted incident edges
      const toDraw = [...edges.filter((e) => e.kind === "main"), ...relatedEdges];
      for (const edge of toDraw) {
        const key = `${edge.from}->${edge.to}`;
        if (drawnKeys.has(key)) continue;
        drawnKeys.add(key);
        const aBtn = btnById.get(edge.from);
        const bBtn = btnById.get(edge.to);
        if (!aBtn || !bBtn) continue;
        const ar = aBtn.getBoundingClientRect();
        const br = bBtn.getBoundingClientRect();
        const ax = ar.left - box.left + ar.width / 2;
        const ay = ar.top - box.top + ar.height / 2;
        const bx = br.left - box.left + br.width / 2;
        const by = br.top - box.top + br.height / 2;
        const dx = bx - ax;
        const dy = by - ay;
        const dist = Math.hypot(dx, dy) || 1;
        const bend = Math.min(26, dist * 0.14);
        const cx = (ax + bx) / 2 - (dy / dist) * bend;
        const cy = (ay + by) / 2 + (dx / dist) * bend;
        const isOut = edge.from === focusId;
        const isIn = edge.to === focusId;
        let cls = "home-graph-edge";
        if (isOut) cls += " is-out";
        else if (isIn) cls += " is-in";
        else if (edge.kind === "main") cls += " is-main is-dim";
        svg.append(svgEl("path", { class: cls, d: `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}` }));
      }

      for (const btn of nodeBtns) {
        const nid = btn.dataset.hgNode;
        btn.classList.toggle("is-neighbor", nid !== focusId && neighborIds.has(nid));
        btn.classList.toggle("is-dim", !neighborIds.has(nid));
      }
    };

    const renderCard = (id) => {
      const node = nodesById.get(id);
      if (!node || !card) return;
      const items = entries.filter((e) => e.node === id);
      const ready = items.filter((e) => e.status === "available");
      const codeEl = card.querySelector("[data-hg-code]");
      const statEl = card.querySelector("[data-hg-stat]");
      const titleEl = card.querySelector("[data-hg-title]");
      const descEl = card.querySelector("[data-hg-desc]");
      const listEl = card.querySelector("[data-hg-entries]");
      const nbEl = card.querySelector("[data-hg-neighbors]");
      const openEl = card.querySelector("[data-hg-open]");

      if (codeEl) codeEl.textContent = zh ? `节点 ${node.id}` : `Node ${node.id}`;
      if (statEl) statEl.textContent = zh ? `${ready.length} / ${items.length} 篇可读` : `${ready.length} / ${items.length} ready`;
      if (titleEl) titleEl.textContent = node.title;
      if (descEl) descEl.textContent = node.description;
      if (openEl) openEl.href = `/zh/notebook/#topic-${encodeURIComponent(node.id)}`;

      if (listEl) {
        listEl.replaceChildren();
        for (const item of ready.slice(0, 4)) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = item.url;
          a.append(document.createTextNode(item.title + " "));
          const arrow = document.createElement("span");
          arrow.className = "home-arrow";
          arrow.setAttribute("aria-hidden", "true");
          arrow.textContent = "↗";
          a.append(arrow);
          li.append(a);
          listEl.append(li);
        }
        const remaining = items.length - ready.length;
        if (!ready.length) {
          const li = document.createElement("li");
          li.className = "hg-entry-muted";
          li.textContent = zh ? `共 ${items.length} 篇规划中，将沿主线陆续更新` : `${items.length} planned entries`;
          listEl.append(li);
        } else if (remaining > 0) {
          const li = document.createElement("li");
          li.className = "hg-entry-muted";
          li.textContent = zh ? `另有 ${remaining} 篇规划中` : `+ ${remaining} planned`;
          listEl.append(li);
        }
      }

      if (nbEl) {
        nbEl.replaceChildren();
        const related = edges.filter((e) => e.from === id || e.to === id);
        const seen = new Set();
        for (const e of related) {
          const otherId = e.from === id ? e.to : e.from;
          if (seen.has(otherId) || !nodesById.has(otherId)) continue;
          seen.add(otherId);
          if (seen.size > 5) break;
          const other = nodesById.get(otherId);
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "hg-neighbor-chip";
          chip.textContent = `${e.from === id ? "→" : "←"} ${other.id}·${other.short}`;
          chip.title = e.label;
          chip.addEventListener("click", () => selectHomeNode(otherId));
          nbEl.append(chip);
        }
      }
      window.__nbEnhanceReferences?.(card);
    };

    const selectHomeNode = (id) => {
      if (!nodesById.has(id)) return;
      activeId = id;
      for (const btn of nodeBtns) {
        btn.setAttribute("aria-pressed", String(btn.dataset.hgNode === id));
      }
      renderCard(id);
      drawEdges(id);
    };

    nodeBtns.forEach((btn) => {
      btn.addEventListener("click", () => selectHomeNode(btn.dataset.hgNode));
      btn.addEventListener("pointerenter", () => drawEdges(btn.dataset.hgNode));
      btn.addEventListener("pointerleave", () => drawEdges(activeId));
    });

    const parentBand = homeGraph.closest("[data-home-tabs]");
    parentBand?.addEventListener("home:tab-change", (event) => {
      if (event.detail?.target === "graph") {
        requestAnimationFrame(() => drawEdges(activeId));
      }
    });
    if (window.ResizeObserver && canvas) {
      new ResizeObserver(() => requestAnimationFrame(() => drawEdges(activeId))).observe(canvas);
    }
    selectHomeNode(activeId);
  }
}
