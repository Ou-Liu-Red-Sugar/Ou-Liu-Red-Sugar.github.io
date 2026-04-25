/* =========================================================
   wiki-graph.js
   Renders force-directed graphs for any element with the
   `data-wiki-graph` attribute. The element must contain a
   <script type="application/json" class="wiki-graph-source">...</script>
   block whose payload has the shape:
     { nodes: [{id, title, url, category, color, focus}],
       edges: [{source, target}] }
   Colours come straight from the embedded `node.color` (set by the
   Hugo template from data/wiki_palette.yaml), so the legend and
   per-entry colour accents stay in sync with the entry pages.
   ========================================================= */

(function () {
  "use strict";

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildLegend(target, nodes) {
    if (!target) return;
    var seen = {};
    var entries = [];
    nodes.forEach(function (n) {
      var c = n.category || "Uncategorized";
      if (seen[c]) return;
      seen[c] = true;
      entries.push({ category: c, color: n.color || "#1a5fb4" });
    });
    entries.sort(function (a, b) { return a.category < b.category ? -1 : 1; });
    target.innerHTML = "";
    entries.forEach(function (e) {
      var li = document.createElement("span");
      li.className = "wiki-graph-legend-item";
      li.innerHTML =
        '<span class="wiki-graph-legend-swatch" style="background:' +
        e.color + '"></span>' + escapeHTML(e.category);
      target.appendChild(li);
    });
  }

  function readData(container) {
    var src = container.querySelector("script.wiki-graph-source");
    if (!src) return null;
    try {
      return JSON.parse(src.textContent);
    } catch (e) {
      console.warn("wiki-graph: invalid JSON", e);
      return null;
    }
  }

  function sizeFor(container, mode) {
    var rect = container.getBoundingClientRect();
    if (mode === "full") {
      var h = Math.max(window.innerHeight - 220, 480);
      return { w: rect.width || 800, h: h };
    }
    return { w: rect.width || 600, h: 260 };
  }

  function render(container) {
    var data = readData(container);
    if (!data || !Array.isArray(data.nodes) || data.nodes.length === 0) return;
    if (typeof ForceGraph !== "function") {
      window.setTimeout(function () { render(container); }, 100);
      return;
    }

    var mode = container.getAttribute("data-wiki-graph-mode") || "mini";

    var links = (data.edges || []).map(function (e) {
      return { source: e.source, target: e.target };
    });

    Array.prototype.forEach.call(
      container.querySelectorAll("canvas, .force-graph-container"),
      function (n) { n.remove(); }
    );

    var size = sizeFor(container, mode);

    var fg = ForceGraph()(container)
      .width(size.w)
      .height(size.h)
      .backgroundColor("rgba(0,0,0,0)")
      .graphData({ nodes: data.nodes, links: links })
      .nodeId("id")
      .nodeLabel(function (n) { return escapeHTML(n.title); })
      .nodeRelSize(mode === "full" ? 5 : 4)
      .linkColor(function () { return "rgba(0,0,0,0.22)"; })
      .linkWidth(function () { return mode === "full" ? 1.1 : 0.9; })
      .linkDirectionalParticles(0)
      .nodeCanvasObject(function (node, ctx, globalScale) {
        var r = (mode === "full" ? 5 : 4) + (node.focus ? 2 : 0);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
        ctx.fillStyle = node.color || "#1a5fb4";
        ctx.fill();
        if (node.focus) {
          ctx.strokeStyle = "#141210";
          ctx.lineWidth = 1.6 / globalScale;
          ctx.stroke();
        }
        if (mode === "full" || node.focus) {
          var fontSize = (mode === "full" ? 11 : 10) / globalScale;
          ctx.font = fontSize + 'px "Latin Modern Roman","CMU Serif",serif';
          ctx.fillStyle = "#141210";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText("  " + node.title, node.x + r, node.y);
        }
      })
      .nodePointerAreaPaint(function (node, color, ctx) {
        var r = (mode === "full" ? 7 : 6);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
        ctx.fill();
      })
      .onNodeClick(function (node) {
        if (node && node.url) window.location.href = node.url;
      })
      .cooldownTicks(mode === "full" ? 200 : 80);

    if (fg.d3Force("charge")) fg.d3Force("charge").strength(mode === "full" ? -120 : -60);
    if (fg.d3Force("link"))   fg.d3Force("link").distance(mode === "full" ? 50 : 32);

    if (mode === "full") {
      var legend = document.querySelector("[data-wiki-graph-legend]");
      buildLegend(legend, data.nodes);
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        var s = sizeFor(container, mode);
        fg.width(s.w).height(s.h);
      }, 150);
    });
  }

  function init() {
    var containers = document.querySelectorAll("[data-wiki-graph]");
    Array.prototype.forEach.call(containers, render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
