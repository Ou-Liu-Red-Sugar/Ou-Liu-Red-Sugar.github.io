/* Investment Notebook Index: Accessible Tabs (Chapters vs Graph) + Volume Filters & Bulk Accordion */
(function () {
  "use strict";

  const root = document.querySelector("[data-notebook-index]");
  if (!root) return;

  const tabs = [...root.querySelectorAll('[role="tab"][data-nb-tab]')];
  const panels = [...root.querySelectorAll('[role="tabpanel"][data-nb-panel]')];

  function activateTab(name, moveFocus) {
    let activeTab = null;
    for (const tab of tabs) {
      const selected = tab.dataset.nbTab === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) activeTab = tab;
    }
    for (const panel of panels) {
      const selected = panel.dataset.nbPanel === name;
      if (selected) {
        panel.hidden = false;
      } else {
        panel.setAttribute("hidden", "until-found");
      }
    }
    if (moveFocus && activeTab) {
      activeTab.focus({ preventScroll: true });
    }
    if (name === "graph") {
      // Allow ResizeObserver / learning-map.js to compute exact graph geometry once visible.
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("resize"));
      });
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.nbTab, false));
    tab.addEventListener("keydown", (event) => {
      let next = -1;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      if (next >= 0) {
        event.preventDefault();
        activateTab(tabs[next].dataset.nbTab, true);
      }
    });
  });

  // Sync browser Find-in-Page matches inside hidden="until-found" tab panels.
  panels.forEach((panel) => {
    panel.addEventListener("beforematch", () => {
      activateTab(panel.dataset.nbPanel, false);
    });
  });

  // If user arrives directly via #topic-X hash, switch to the Knowledge Graph tab.
  function syncHashToTab() {
    const hash = location.hash || "";
    if (hash.startsWith("#topic-") || hash === "#nb-graph") {
      activateTab("graph", false);
    } else if (hash.startsWith("#phase-")) {
      activateTab("chapters", false);
      const target = document.getElementById(hash.slice(1));
      if (target && target.tagName === "DETAILS") target.open = true;
    }
  }
  window.addEventListener("hashchange", syncHashToTab);

  // Chapter Filters + Published-only toggle + Expand/Collapse All button
  const filterBtns = [...root.querySelectorAll("[data-nb-filter]")];
  const readyToggle = root.querySelector("[data-nb-ready-only]");
  const toggleAllBtn = root.querySelector("[data-nb-toggle-all]");
  const volumes = [...root.querySelectorAll(".nb-volume")];
  const groupLabels = [...root.querySelectorAll("[data-nb-group-label]")];

  let activeFilter = "all";
  let readyOnly = false;

  function applyFilters() {
    for (const vol of volumes) {
      const group = vol.dataset.volGroup || "main";
      const hasReady = Number(vol.dataset.volReady || 0) > 0;
      const matchesGroup = activeFilter === "all" || activeFilter === group;
      const matchesReady = !readyOnly || hasReady;
      vol.hidden = !(matchesGroup && matchesReady);

      for (const row of vol.querySelectorAll(".nb-row.is-planned")) {
        row.hidden = readyOnly;
      }
    }

    for (const label of groupLabels) {
      const g = label.dataset.nbGroupLabel;
      const anyVisible = volumes.some((v) => !v.hidden && v.dataset.volGroup === g);
      label.hidden = !anyVisible;
    }

    syncToggleAllState();
  }

  function syncToggleAllState() {
    if (!toggleAllBtn) return;
    const visible = volumes.filter((v) => !v.hidden);
    const allOpen = visible.length > 0 && visible.every((v) => v.open);
    toggleAllBtn.setAttribute("aria-expanded", String(allOpen));
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.nbFilter || "all";
      filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      applyFilters();
    });
  });

  if (readyToggle) {
    readyToggle.addEventListener("click", () => {
      readyOnly = readyToggle.getAttribute("aria-pressed") !== "true";
      readyToggle.setAttribute("aria-pressed", String(readyOnly));
      applyFilters();
    });
  }

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", () => {
      const visible = volumes.filter((v) => !v.hidden);
      const expand = toggleAllBtn.getAttribute("aria-expanded") !== "true";
      visible.forEach((v) => {
        v.open = expand;
      });
      syncToggleAllState();
    });
  }

  volumes.forEach((vol) => {
    vol.addEventListener("toggle", syncToggleAllState);
  });

  // Boot initial state
  syncToggleAllState();
  syncHashToTab();
})();
