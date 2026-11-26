(function () {
  var PRESETS = {
    "2020": { eq: -35, budget: 3.0, mult: 12.0, label: "2020-03 \u6781\u901f\u95ea\u5d29\u793a\u610f\uff1a\u80a1\u5e02\u6025\u8dcc \u221235%\u3001VIX \u7206\u70b8\uff0c\u6df1\u5ea6\u865a\u503c Put \u4ef7\u503c\u5047\u8bbe\u8df3\u5347 12 \u500d\u3002" },
    "2008": { eq: -50, budget: 3.0, mult: 18.0, label: "2008 \u6df1\u5ea6\u80a1\u707e\u793a\u610f\uff1a\u80a1\u5e02\u8170\u65a9 \u221250%\uff0c\u5c3e\u90e8 Put \u4ef7\u503c\u5047\u8bbe\u8df3\u5347 18 \u500d\uff0c\u4e3a\u4f4e\u4f4d\u6284\u5e95\u63d0\u4f9b\u5927\u989d\u73b0\u91d1\u3002" },
    "2022": { eq: -20, budget: 3.0, mult: 1.5, label: "2022 \u6162\u718a\u9634\u8dcc\u793a\u610f\uff1a\u5168\u5e74\u7f13\u6162\u8dcc \u221220%\u4e14 VIX \u672a\u7206\u70b8\uff0c\u6df1\u5ea6\u865a\u503c Put \u5047\u8bbe\u4ec5\u56de\u6536 1.5 \u500d\uff0c\u6548\u679c\u5f31\u4e8e 20% \u77ed\u503a\u7f13\u51b2\u3002" },
    "bull": { eq: 12, budget: 3.0, mult: 0.0, label: "\u5e38\u6001\u6162\u725b\u793a\u610f\uff1a\u80a1\u5e02\u6da8 +12%\uff0c\u6df1\u5ea6\u865a\u503c Put \u5230\u671f\u5f52\u96f6\uff0c\u8d26\u6237\u627f\u53d7\u5e74\u5ea6\u4fdd\u8d39\u635f\u8017\u3002" }
  };

  function estimateMult(eq) {
    if (eq >= -10) return 0.0;
    if (eq >= -20) return ((-eq - 10) / 10) * 1.5;
    if (eq >= -35) return 1.5 + ((-eq - 20) / 15) * 10.5;
    return 12.0 + ((-eq - 35) / 15) * 6.0;
  }

  function fmtPct(v) {
    var n = Math.abs(v) < 0.05 ? 0 : v;
    if (n > 0) return "+" + n.toFixed(1) + "%";
    if (n < 0) return "\u2212" + Math.abs(n).toFixed(1) + "%";
    return "0.0%";
  }

  function fmtUsd(v) {
    return Math.round(v).toLocaleString("en-US") + " \u7f8e\u5143";
  }

  function initTailLab(root) {
    var eqIn = root.querySelector("[data-p05-eq-in]");
    var bgIn = root.querySelector("[data-p05-bg-in]");
    var eqOut = root.querySelector("[data-p05-eq-out]");
    var bgOut = root.querySelector("[data-p05-bg-out]");
    var presetsWrap = root.querySelector(".p05-presets");
    var presets = root.querySelectorAll("[data-p05-preset]");

    var v100 = root.querySelector("[data-p05-v100]");
    var r100 = root.querySelector("[data-p05-r100]");
    var v80 = root.querySelector("[data-p05-v80]");
    var r80 = root.querySelector("[data-p05-r80]");
    var vTail = root.querySelector("[data-p05-vtail]");
    var rTail = root.querySelector("[data-p05-rtail]");
    var dryEl = root.querySelector("[data-p05-dry]");
    var rebEl = root.querySelector("[data-p05-rebound]");
    var noteEl = root.querySelector("[data-p05-note]");

    if (!eqIn || !bgIn) return;
    eqIn.disabled = false;
    bgIn.disabled = false;
    if (presetsWrap) presetsWrap.hidden = false;

    var activePreset = "2020";

    function render(customMult, customNote) {
      var eq = parseFloat(eqIn.value);
      var budget = parseFloat(bgIn.value);
      var mult = typeof customMult === "number" ? customMult : estimateMult(eq);

      var eqFactor = 1 + eq / 100;
      var cashFactor = 1.03; /* ~3% illustrative T-bill carry */
      var p100 = 100000 * eqFactor;
      var p80 = 80000 * eqFactor + 20000 * cashFactor;

      var stockAlloc = 100000 * (1 - budget / 100);
      var putBudget = 100000 * (budget / 100);
      var putPayoff = putBudget * mult;
      var pTail = stockAlloc * eqFactor + putPayoff;

      var ret100 = (p100 / 100000 - 1) * 100;
      var ret80 = (p80 / 100000 - 1) * 100;
      var retTail = (pTail / 100000 - 1) * 100;

      /* Illustrative dry-powder effect if market rebounds +40% after crash */
      var reb100 = p100 * 1.4;
      var rebTail = pTail * 1.4; /* Rebalancing put cash into equities at trough */

      if (eqOut) eqOut.textContent = (eq > 0 ? "+" : eq < 0 ? "\u2212" : "") + Math.abs(eq) + "%";
      if (bgOut) bgOut.textContent = budget.toFixed(1).replace(/\.0$/, "") + "%";

      if (v100) v100.textContent = fmtUsd(p100);
      if (r100) {
        r100.textContent = fmtPct(ret100);
        r100.classList.toggle("p05-neg", ret100 < 0);
        r100.classList.toggle("p05-pos", ret100 >= 0);
      }
      if (v80) v80.textContent = fmtUsd(p80);
      if (r80) {
        r80.textContent = fmtPct(ret80);
        r80.classList.toggle("p05-neg", ret80 < 0);
        r80.classList.toggle("p05-pos", ret80 >= 0);
      }
      if (vTail) vTail.textContent = fmtUsd(pTail);
      if (rTail) {
        rTail.textContent = fmtPct(retTail);
        rTail.classList.toggle("p05-neg", retTail < 0);
        rTail.classList.toggle("p05-pos", retTail >= 0);
      }
      if (dryEl) {
        dryEl.textContent =
          "\u671f\u6743\u53d8\u73b0 " + fmtUsd(putPayoff) + "\uff08" + mult.toFixed(1) + "\u00d7\uff09";
      }
      if (rebEl) {
        if (eq <= -25) {
          rebEl.textContent =
            "\u82e5\u628a\u671f\u6743\u53d8\u73b0\u73b0\u91d1\u5728\u4f4e\u4f4d\u518d\u5e73\u8861\u56de\u80a1\u7968\uff0c\u540e\u7eed\u53cd\u5f39 +40% \u540e\u51c0\u503c\u53ef\u8fbe " +
            fmtUsd(rebTail) + "\uff08\u7eaf\u80a1\u7968\u4e3a " + fmtUsd(reb100) + "\uff09\u3002";
        } else if (eq < 0) {
          rebEl.textContent =
            "\u6e29\u548c\u4e0b\u8dcc\u672a\u89e6\u53d1\u6df1\u5ea6\u865a\u503c Put \u51f8\u6027\u7206\u53d1\uff0c20% \u77ed\u503a\u7f13\u51b2\u7684\u9632\u5fa1\u6548\u679c\u66f4\u7a33\u5b9a\u3002";
        } else {
          rebEl.textContent =
            "\u5e38\u6001\u4e0a\u6da8\u5e74\u4efd\u91cc\uff0c\u671f\u6743\u4fdd\u8d39\u5168\u989d\u635f\u8017\uff0c\u4f46\u9ad8\u80a1\u7968\u4ed3\u4f4d\uff08" +
            (100 - budget).toFixed(1).replace(/\.0$/, "") + "%\uff09\u4ecd\u6bd4 80/20 \u4fdd\u7559\u66f4\u591a\u4e0a\u884c\u5f39\u6027\u3002";
        }
      }
      if (noteEl) {
        noteEl.textContent =
          customNote ||
          "\u5f53\u524d\u6559\u5b66\u8bbe\u5b9a\uff1a\u80a1\u5e02 " + (eq > 0 ? "+" : eq < 0 ? "\u2212" : "") + Math.abs(eq) +
          "%\uff0c\u5e74\u5ea6 Put \u9884\u7b97 " + budget.toFixed(1).replace(/\.0$/, "") + "%\uff0c\u8fd1\u4f3c\u51f8\u6027\u500d\u6570 " +
          mult.toFixed(1) + "\u00d7\u3002";
      }

      presets.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-p05-preset") === activePreset ? "true" : "false");
      });
    }

    eqIn.addEventListener("input", function () {
      activePreset = "";
      render();
    });
    bgIn.addEventListener("input", function () {
      activePreset = "";
      render();
    });
    presets.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-p05-preset");
        var p = PRESETS[key];
        if (!p) return;
        activePreset = key;
        eqIn.value = String(p.eq);
        bgIn.value = String(p.budget);
        render(p.mult, p.label);
      });
    });

    render(PRESETS["2020"].mult, PRESETS["2020"].label);
  }

  document.querySelectorAll("[data-p05-tail]").forEach(initTailLab);
})();
