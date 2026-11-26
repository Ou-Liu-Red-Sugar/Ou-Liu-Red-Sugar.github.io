(function () {
  function fmtPct(v, digits) {
    var d = typeof digits === "number" ? digits : 1;
    var n = Math.abs(v) < 0.005 ? 0 : v;
    if (n > 0) return "+" + n.toFixed(d) + "%";
    if (n < 0) return "\u2212" + Math.abs(n).toFixed(d) + "%";
    return "0.0%";
  }

  /* 1. Interactive Cross-Asset Macro Expression Switcher */
  var PERIODS = {
    "2022": {
      sub: "2021-12-31 \u2192 2022-12-30 \u00b7 \u7f8e\u8054\u50a8\u6025\u52a0\u606f\uff0c\u65e5\u672c\u592e\u884c\u6309\u5175\u4e0d\u52a8",
      note: "2022 \u5e74\u52a0\u606f\u51b2\u51fb\u4e0b\uff0cTLT \u4e0e QQQ \u540c\u6b65\u5927\u8dcc\uff0cUSD/JPY \u6da8 15.5%\uff1b\u540c\u662f\u65e5\u80a1\uff0c\u6c47\u7387\u5bf9\u51b2\u7248 DXJ \u6b63\u6536\u76ca +6.0%\uff0c\u672a\u5bf9\u51b2 EWJ \u8dcc \u221217.7%\u3002",
      scale: 40,
      items: [
        { key: "usdjpy", val: 15.5, tag: "\u76f4\u63a5\u8868\u8fbe\u7f8e\u65e5\u5229\u5dee" },
        { key: "dxj", val: 6.0, tag: "\u4fdd\u7559\u65e5\u80a1\u4e14\u9501\u5b9a\u7f8e\u5143\u5229\u5dee" },
        { key: "ewj", val: -17.7, tag: "\u65e5\u5143\u8d2c\u503c\u541e\u566c\u7f8e\u5143\u56de\u62a5" },
        { key: "tlt", val: -31.2, tag: "\u957f\u503a\u76f4\u63a5\u627f\u53d7\u52a0\u606f\u6740\u4f30\u503c" },
        { key: "qqq", val: -32.6, tag: "\u6210\u957f\u80a1\u540c\u6b65\u53d7\u8d34\u73b0\u7387\u6253\u538b" }
      ]
    },
    "2023": {
      sub: "2022-12-30 \u2192 2023-12-29 \u00b7 \u7f8e\u56fd\u7ef4\u6301\u9ad8\u5229\u7387\uff0cAI \u76c8\u5229\u6d6a\u6f6e\u7206\u53d1",
      note: "2023 \u5e74\u5229\u7387\u4ecd\u5728\u9ad8\u4f4d\uff0c\u53ef QQQ \u5728 AI \u76c8\u5229\u9a71\u52a8\u4e0b\u5927\u6da8 +54.9%\uff0c\u7528\u505a\u7a7a\u79d1\u6280\u80a1\u8868\u8fbe\u201c\u9ad8\u5229\u7387\u201d\u88ab\u4e2a\u80a1\u566a\u97f3\u6253\u7a7f\uff1bDXJ \u4ecd\u9886\u5148 EWJ 21.8 \u4e2a\u767e\u5206\u70b9\u3002",
      scale: 60,
      items: [
        { key: "usdjpy", val: 6.4, tag: "\u5229\u5dee\u7ef4\u6301\u9ad8\u4f4d\uff0c\u7f8e\u5143\u7eed\u5347" },
        { key: "dxj", val: 42.0, tag: "\u65e5\u80a1\u4e0a\u6da8\uff0b\u8fdc\u671f\u6b63\u5229\u5dee\u53cc\u91cd\u53d7\u76ca" },
        { key: "ewj", val: 20.3, tag: "\u540c\u671f\u65e5\u5143\u7eed\u8d2c\u62d6\u7d2f\u7f8e\u5143\u8ba1\u4ef7" },
        { key: "tlt", val: 2.8, tag: "\u52a0\u606f\u5c3e\u58f0\u4e0e\u8870\u9000\u9884\u671f\u62c9\u952f" },
        { key: "qqq", val: 54.9, tag: "AI \u76c8\u5229\u7206\u53d1\u538b\u5012\u9ad8\u5229\u7387\u538b\u529b" }
      ]
    },
    "cum": {
      sub: "2021-12-31 \u2192 2024-07-10 \u00b7 \u7f8e\u65e5\u5229\u5dee\u8d70\u9614\u81f3 USD/JPY 161.61 \u5cf0\u503c",
      note: "\u4e24\u5e74\u534a\u7d2f\u8ba1\uff1aUSD/JPY \u6da8 40.5%\uff0c\u540c\u4e00\u7247\u65e5\u672c\u80a1\u5e02\u91cc\uff0c\u6c47\u7387\u5bf9\u51b2\u7248 DXJ \u7ffb\u500d\uff08+102.6%\uff09\uff0c\u672a\u5bf9\u51b2 EWJ \u4ec5 +10.8%\uff0c\u76f8\u5dee 91.8 \u4e2a\u767e\u5206\u70b9\u3002",
      scale: 110,
      items: [
        { key: "usdjpy", val: 40.5, tag: "115.06 \u2192 161.61\uff0c\u5229\u5dee\u5355\u8fb9\u4e3b\u5bfc" },
        { key: "dxj", val: 102.6, tag: "\u51fa\u53e3\u76c8\u5229\uff0b\u6c47\u7387\u5bf9\u51b2\uff0b\u6b63\u5229\u5dee" },
        { key: "ewj", val: 10.8, tag: "\u80a1\u4ef7\u6da8\u5e45\u5927\u534a\u88ab\u65e5\u5143\u8d2c\u503c\u62b5\u9500" },
        { key: "tlt", val: -32.5, tag: "\u7f8e\u503a\u6536\u76ca\u7387\u4e2d\u67a2\u6301\u7eed\u62ac\u5347" },
        { key: "qqq", val: 28.6, tag: "\u5148\u66b4\u8dcc\u540e\u53cd\u8d85\uff0c\u5939\u5e26\u5927\u91cf\u76c8\u5229\u566a\u97f3" }
      ]
    },
    "unwind": {
      sub: "2024-07-10 \u2192 2024-08-05 \u00b7 BOJ \u52a0\u606f\u4e0e\u7f8e\u56fd\u5c31\u4e1a\u8f6c\u5f31\u89e6\u53d1\u5957\u606f\u5e73\u4ed3",
      note: "\u53cd\u8f6c\u7a97\u53e3\u91cc\uff0c\u65e5\u5143\u6025\u5347\u8ba9\u672a\u5bf9\u51b2 EWJ\uff08\u221211.0%\uff09\u83b7\u5f97\u6c47\u5151\u7f13\u51b2\uff0c\u53cd\u800c\u8dcc\u5f97\u53ea\u6709 DXJ\uff08\u221222.2%\uff09\u4e00\u534a\uff1bTLT \u9006\u52bf\u6da8 +7.0%\u3002",
      scale: 28,
      items: [
        { key: "usdjpy", val: -9.8, tag: "161.61 \u2192 145.79\uff0c\u65e5\u5143\u6025\u5347\u5e73\u4ed3" },
        { key: "dxj", val: -22.2, tag: "\u5265\u79bb\u65e5\u5143\u5347\u503c\u540e\u76f4\u9762\u65e5\u80a1\u66b4\u8dcc" },
        { key: "ewj", val: -11.0, tag: "\u65e5\u5143\u5347\u503c\u5bf9\u51b2\u6389\u7ea6\u4e00\u534a\u80a1\u4ef7\u8dcc\u5e45" },
        { key: "tlt", val: 7.0, tag: "\u8870\u9000\u62c5\u5fe7\u4e0e\u907f\u9669\u63a8\u9ad8\u957f\u503a" },
        { key: "qqq", val: -13.4, tag: "\u6760\u6746\u5e73\u4ed3\u51b2\u51fb\u9ad8\u52a8\u91cf\u79d1\u6280\u80a1" }
      ]
    }
  };

  function initExpr(root) {
    var tabsWrap = root.querySelector(".p03-tabs");
    var tabs = root.querySelectorAll("[data-p03-tab]");
    var subEl = root.querySelector("[data-p03-expr-sub]");
    var noteEl = root.querySelector("[data-p03-expr-note]");
    if (tabsWrap) tabsWrap.hidden = false;

    function render(key) {
      var p = PERIODS[key] || PERIODS.cum;
      if (subEl) subEl.textContent = p.sub;
      if (noteEl) noteEl.textContent = p.note;
      p.items.forEach(function (it) {
        var row = root.querySelector('[data-p03-row="' + it.key + '"]');
        if (!row) return;
        var bar = row.querySelector("[data-p03-bar]");
        var val = row.querySelector("[data-p03-val]");
        var tag = row.querySelector("[data-p03-tag]");
        var pct = Math.min(100, (Math.abs(it.val) / p.scale) * 100);
        if (bar) {
          bar.style.width = Math.max(pct, 2).toFixed(1) + "%";
          bar.classList.toggle("p03-neg", it.val < 0);
          bar.classList.toggle("p03-pos", it.val >= 0);
        }
        if (val) {
          val.textContent = fmtPct(it.val, 1);
          val.classList.toggle("p03-neg", it.val < 0);
          val.classList.toggle("p03-pos", it.val >= 0);
        }
        if (tag) tag.textContent = it.tag;
      });
      tabs.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-p03-tab") === key ? "true" : "false");
      });
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        render(btn.getAttribute("data-p03-tab"));
      });
    });

    render("cum");
  }

  /* 2. Interactive Cross-Currency Return & Hedge Decomposer */
  function initFxLab(root) {
    var localIn = root.querySelector("[data-p03-local-in]");
    var fxIn = root.querySelector("[data-p03-fx-in]");
    var localOut = root.querySelector("[data-p03-local-out]");
    var fxOut = root.querySelector("[data-p03-fx-out]");
    var presetsWrap = root.querySelector(".p03-fx-presets");
    var presets = root.querySelectorAll("[data-p03-fx-preset]");

    var rLocalEl = root.querySelector("[data-p03-res-local]");
    var rFxEl = root.querySelector("[data-p03-res-fx]");
    var rCrossEl = root.querySelector("[data-p03-res-cross]");
    var rUsdEl = root.querySelector("[data-p03-res-usd]");
    var noteEl = root.querySelector("[data-p03-fx-note]");

    if (!localIn || !fxIn) return;
    localIn.disabled = false;
    fxIn.disabled = false;
    if (presetsWrap) presetsWrap.hidden = false;

    function render() {
      var rl = parseFloat(localIn.value) || 0;
      var rf = parseFloat(fxIn.value) || 0;
      var cross = (rl * rf) / 100;
      var usd = ((1 + rl / 100) * (1 + rf / 100) - 1) * 100;

      if (localOut) localOut.textContent = fmtPct(rl, 0);
      if (fxOut) fxOut.textContent = fmtPct(rf, 0);
      if (rLocalEl) rLocalEl.textContent = fmtPct(rl, 1);
      if (rFxEl) {
        rFxEl.textContent = fmtPct(rf, 1);
        rFxEl.classList.toggle("p03-neg", rf < 0);
        rFxEl.classList.toggle("p03-pos", rf > 0);
      }
      if (rCrossEl) rCrossEl.textContent = fmtPct(cross, 1);
      if (rUsdEl) {
        rUsdEl.textContent = fmtPct(usd, 1);
        rUsdEl.classList.toggle("p03-neg", usd < 0);
        rUsdEl.classList.toggle("p03-pos", usd > 0);
      }
      if (noteEl) {
        if (rl > 0 && rf < 0) {
          noteEl.textContent =
            "\u5f53\u5730\u80a1\u4ef7\u4e0a\u6da8 " + fmtPct(rl, 0) + "\uff0c\u4f46\u5f53\u5730\u8d27\u5e01\u8d2c\u503c " +
            fmtPct(rf, 0) + "\uff0c\u6298\u56de\u7f8e\u5143\u540e\u51c0\u56de\u62a5\u88ab\u538b\u7f29\u81f3 " + fmtPct(usd, 1) +
            "\uff08\u82e5\u901a\u8fc7\u8fdc\u671f\u5408\u7ea6\u5bf9\u51b2\u6c47\u7387\uff0c\u7f8e\u5143\u56de\u62a5\u8fd1\u4f3c\u4fdd\u7559\u5f53\u5730\u6da8\u5e45\u5e76\u52a0\u51cf\u4e24\u56fd\u5229\u5dee\uff09\u3002";
        } else if (rl < 0 && rf > 0) {
          noteEl.textContent =
            "\u5f53\u5730\u80a1\u4ef7\u4e0b\u8dcc " + fmtPct(rl, 0) + "\uff0c\u4f46\u5f53\u5730\u8d27\u5e01\u5347\u503c " +
            fmtPct(rf, 0) + "\uff0c\u7ed9\u672a\u5bf9\u51b2\u7f8e\u5143\u8d26\u6237\u63d0\u4f9b\u4e86\u6c47\u5151\u7f13\u51b2\uff0c\u7f8e\u5143\u4e8f\u635f\u6536\u7a84\u81f3 " + fmtPct(usd, 1) + "\u3002";
        } else if (rl < 0 && rf < 0) {
          noteEl.textContent =
            "\u80a1\u4ef7\u4e0e\u6c47\u7387\u540c\u6b65\u4e0b\u8dcc\uff08\u201c\u80a1\u6c47\u53cc\u6740\u201d\uff09\uff0c\u7f8e\u5143\u8d26\u6237\u51c0\u56de\u62a5\u8fdb\u4e00\u6b65\u4e0b\u63a2\u81f3 " + fmtPct(usd, 1) + "\u3002";
        } else {
          noteEl.textContent =
            "\u80a1\u4ef7\u4e0e\u6c47\u7387\u540c\u5411\u8d70\u5f3a\u65f6\uff0c\u4e58\u6cd5\u4ea4\u53c9\u9879\uff08" + fmtPct(cross, 1) +
            "\uff09\u4f1a\u628a\u7f8e\u5143\u51c0\u56de\u62a5\u8fdb\u4e00\u6b65\u653e\u5927\u81f3 " + fmtPct(usd, 1) + "\u3002";
        }
      }

      var pairKey = Math.round(rl) + "," + Math.round(rf);
      presets.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-p03-fx-preset") === pairKey ? "true" : "false");
      });
    }

    localIn.addEventListener("input", render);
    fxIn.addEventListener("input", render);
    presets.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var parts = (btn.getAttribute("data-p03-fx-preset") || "").split(",");
        if (parts.length !== 2) return;
        localIn.value = parts[0];
        fxIn.value = parts[1];
        render();
      });
    });

    render();
  }

  document.querySelectorAll("[data-p03-expr]").forEach(initExpr);
  document.querySelectorAll("[data-p03-fx]").forEach(initFxLab);
})();
