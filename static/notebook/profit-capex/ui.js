(function () {
  var PRESETS = {
    light: {
      da: 8,
      mult: 1.8,
      growth: 40
    },
    expand: {
      da: 20,
      mult: 3.0,
      growth: 70
    },
    mature: {
      da: 46,
      mult: 1.0,
      growth: 15
    }
  };

  var TAX_RATE = 0.2;

  function fmtNum(v) {
    var r = Math.round(v * 10) / 10;
    if (Object.is(r, -0) || r === 0) return "0.0";
    var abs = Math.abs(r).toFixed(1);
    return r < 0 ? "\u2212" + abs : abs;
  }

  function fmtPct(v) {
    var r = Math.round(v);
    if (r === 0) return "0%";
    return r < 0 ? "\u2212" + Math.abs(r) + "%" : r + "%";
  }

  function diagnose(da, mult, growth, oe, fcf, maintCapex, growthCapex) {
    if (fcf < 0 && oe > 25) {
      return "\u8d26\u9762 FCF \u5df2\u8f6c\u8d1f\uff08" + fmtNum(fcf) + "\uff09\uff0c\u4f46 Owner Earnings \u4ecd\u6709 " + fmtNum(oe) + "\uff1a\u73b0\u91d1\u7f3a\u53e3\u4e3b\u8981\u6765\u81ea " + fmtNum(growthCapex) + " \u7684\u6269\u5f20\u6295\u5165\uff0c\u5355\u5e74 FCF \u4f1a\u6682\u65f6\u4f4e\u4f30\u73b0\u6709\u4e1a\u52a1\u9020\u8840\u529b\uff0c\u6210\u8d25\u53d6\u51b3\u4e8e\u65b0\u589e\u4ea7\u80fd\u6295\u4ea7\u540e\u7684\u5229\u7528\u7387\u4e0e\u56de\u62a5\u7387\u3002";
    }
    if (fcf < 0) {
      return "\u7ef4\u6301\u6027\u8d44\u672c\u5f00\u652f\uff08" + fmtNum(maintCapex) + "\uff09\u4e0e\u6269\u5f20\u652f\u51fa\u53e0\u52a0\u540e\u8d85\u8fc7\u7ecf\u8425\u73b0\u91d1\u6d41\uff0cEBITDA \u4ecd\u663e\u793a 100.0\uff0c\u5b9e\u9645\u5374\u9700\u5bf9\u5916\u878d\u8d44\u6216\u6d88\u8017\u5b58\u91cf\u73b0\u91d1\u624d\u80fd\u7ef4\u7cfb\u8fd0\u8f6c\u3002";
    }
    if (growthCapex >= 20 && oe - fcf >= 20) {
      return "\u91cd\u8d44\u672c\u6269\u4ea7\u578b\u80cc\u79bb\uff1aOwner Earnings\uff08" + fmtNum(oe) + "\uff09\u663e\u8457\u9ad8\u4e8e\u8d26\u9762 FCF\uff08" + fmtNum(fcf) + "\uff09\uff0c\u5dee\u989d " + fmtNum(growthCapex) + " \u662f\u63d0\u524d\u652f\u4ed8\u7684\u6269\u5f20\u6295\u5165\uff1b\u7528 EBITDA \u4f1a\u9ad8\u4f30\uff0c\u5355\u770b\u5f53\u5e74 FCF \u53c8\u4f1a\u4f4e\u4f30\u3002";
    }
    if (maintCapex >= 30) {
      return "\u5178\u578b EBITDA \u9677\u9631\uff1a\u6298\u65e7\u5360 EBITDA \u8fbe " + da + "%\uff0c\u4e14\u6bcf\u5e74\u5fc5\u987b\u6295\u5165 " + fmtNum(maintCapex) + " \u505a\u5b58\u91cf\u66f4\u65b0\uff0cOwner Earnings \u53ea\u5269 " + fmtNum(oe) + "\uff1b\u82e5\u518d\u6263\u9664\u91cd\u8d44\u4ea7\u5e38\u4f34\u7684\u503a\u52a1\u5229\u606f\uff0c\u53ef\u5206\u914d\u73b0\u91d1\u8fd8\u4f1a\u66f4\u4f4e\u3002";
    }
    if (da <= 12 && maintCapex <= 15) {
      return "\u8f7b\u8d44\u4ea7\u6210\u719f\u578b\uff1a\u6298\u65e7\u4e0e\u7ef4\u6301\u6027\u6295\u5165\u5360\u6bd4\u90fd\u5c0f\uff0cEBIT\uff08" + fmtNum(100 - da) + "\uff09\u3001Owner Earnings\uff08" + fmtNum(oe) + "\uff09\u4e0e FCF\uff08" + fmtNum(fcf) + "\uff09\u5f7c\u6b64\u63a5\u8fd1\uff0c\u73b0\u91d1\u8f6c\u5316\u6548\u7387\u9ad8\u3002";
    }
    return "\u5f53\u524d\u603b CapEx \u4e3a " + fmtNum(maintCapex + growthCapex) + "\uff08\u7ef4\u6301 " + fmtNum(maintCapex) + " \uff0b \u6269\u5f20 " + fmtNum(growthCapex) + "\uff09\uff1aEBITDA 100.0 \u6263\u9664\u6240\u5f97\u7a0e\u4e0e\u7ef4\u6301\u6295\u5165\u540e\u4e3a Owner Earnings " + fmtNum(oe) + "\uff0c\u518d\u6263\u6269\u5f20\u6295\u5165\u540e\u843d\u4e3a FCF " + fmtNum(fcf) + "\u3002";
  }

  function initCapexLab(root) {
    var controls = root.querySelector(".e03-controls");
    var presetBtns = root.querySelectorAll("[data-e03-preset]");
    var inDa = root.querySelector('[data-e03-in="da"]');
    var inMult = root.querySelector('[data-e03-in="mult"]');
    var inGrowth = root.querySelector('[data-e03-in="growth"]');
    var outDa = root.querySelector('[data-e03-out="da"]');
    var outMult = root.querySelector('[data-e03-out="mult"]');
    var outGrowth = root.querySelector('[data-e03-out="growth"]');
    var noteEl = root.querySelector("[data-e03-note]");
    if (controls) controls.hidden = false;

    function setBar(key, val, negMax) {
      var bar = root.querySelector('[data-e03-bar="' + key + '"]');
      var valEl = root.querySelector('[data-e03-val="' + key + '"]');
      var track = bar ? bar.parentElement : null;
      var span = 100 + negMax;
      var zeroPct = (negMax / span) * 100;
      if (track) {
        track.classList.toggle("e03-bipolar", negMax > 0);
        track.style.setProperty("--z", zeroPct.toFixed(2) + "%");
      }
      if (bar) {
        if (val >= 0) {
          var wPos = Math.min(100 - zeroPct, (val / span) * 100);
          bar.style.setProperty("--l", zeroPct.toFixed(2) + "%");
          bar.style.setProperty("--w", Math.max(0, wPos).toFixed(2) + "%");
          bar.classList.remove("e03-wbar-neg");
        } else {
          var wNeg = Math.min(zeroPct, (Math.abs(val) / span) * 100);
          bar.style.setProperty("--l", (zeroPct - wNeg).toFixed(2) + "%");
          bar.style.setProperty("--w", Math.max(0, wNeg).toFixed(2) + "%");
          bar.classList.add("e03-wbar-neg");
        }
      }
      if (valEl) {
        valEl.textContent = fmtNum(val);
        valEl.classList.toggle("e03-neg", val < 0);
        valEl.classList.toggle("e03-pos", val >= 55 && key !== "ebitda");
        valEl.classList.toggle("e03-warn-t", val >= 0 && val < 35 && key === "fcf");
      }
    }

    function updatePresetButtons(activeKey) {
      presetBtns.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-e03-preset") === activeKey ? "true" : "false");
      });
    }

    function render(activePreset) {
      var da = parseFloat(inDa.value);
      var mult = parseFloat(inMult.value);
      var growth = parseFloat(inGrowth.value);

      if (outDa) outDa.textContent = da + "%";
      if (outMult) outMult.textContent = mult.toFixed(1) + "\u00d7";
      if (outGrowth) outGrowth.textContent = growth + "%";

      var ebitda = 100;
      var ebit = ebitda - da;
      var tax = Math.max(0, ebit * TAX_RATE);
      var cfo = ebitda - tax;
      var totalCapex = da * mult;
      var growthCapex = totalCapex * (growth / 100);
      var maintCapex = totalCapex - growthCapex;
      var oe = cfo - maintCapex;
      var fcf = cfo - totalCapex;

      var minVal = Math.min(0, oe, fcf);
      var negMax = minVal < 0 ? Math.max(40, Math.ceil(Math.abs(minVal) / 10) * 10) : 0;

      setBar("ebitda", ebitda, negMax);
      setBar("ebit", ebit, negMax);
      setBar("oe", oe, negMax);
      setBar("fcf", fcf, negMax);

      var kSplit = root.querySelector('[data-e03-k="capex-split"]');
      var ksTot = root.querySelector('[data-e03-ks="capex-tot"]');
      var kRatio = root.querySelector('[data-e03-k="fcf-ratio"]');
      var ksOe = root.querySelector('[data-e03-ks="oe-ratio"]');
      var kRatioBox = kRatio ? kRatio.closest(".e03-kbox") : null;

      if (kSplit) kSplit.textContent = fmtNum(maintCapex) + " / " + fmtNum(growthCapex);
      if (ksTot) ksTot.textContent = "\u603b CapEx " + fmtNum(totalCapex) + "\uff08CFO " + fmtNum(cfo) + "\uff09";
      if (kRatio) kRatio.textContent = fmtPct(fcf);
      if (ksOe) ksOe.textContent = "Owner Earnings \u5360 EBITDA " + fmtPct(oe);
      if (kRatioBox) kRatioBox.classList.toggle("e03-kwarn", fcf < 40);

      if (noteEl) {
        noteEl.textContent = diagnose(da, mult, growth, oe, fcf, maintCapex, growthCapex);
      }

      if (typeof activePreset === "string") {
        updatePresetButtons(activePreset);
      } else {
        updatePresetButtons("");
      }
    }

    presetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-e03-preset");
        var p = PRESETS[key];
        if (!p) return;
        inDa.value = String(p.da);
        inMult.value = String(p.mult);
        inGrowth.value = String(p.growth);
        render(key);
      });
    });

    [inDa, inMult, inGrowth].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", function () {
        render(null);
      });
    });

    render("expand");
  }

  document.querySelectorAll("[data-e03-capex]").forEach(initCapexLab);
})();
