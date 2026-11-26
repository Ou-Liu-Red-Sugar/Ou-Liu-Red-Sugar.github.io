(function () {
  var IC0 = 100;
  var RD = 0.045;
  var WACC = 0.08;

  var PRESETS = {
    cashcow: {
      label: "\u2460 \u8f7b\u8d44\u4ea7\u9ad8 ROIC \u73b0\u91d1\u725b",
      baseRoic: 0.24,
      lev: 1.0,
      reinv: 20,
      roiic: 18
    },
    compounder: {
      label: "\u2461 \u9ad8 ROIIC \u6269\u4ea7\u590d\u5229\u578b",
      baseRoic: 0.25,
      lev: 0.2,
      reinv: 70,
      roiic: 28
    },
    levered: {
      label: "\u2462 \u501f\u503a\u62c9\u9ad8 ROE \u4f46 ROIC \u5e73\u5eb8\u578b",
      baseRoic: 0.10,
      lev: 3.0,
      reinv: 60,
      roiic: 6
    }
  };

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  function fmtPct(v, digits) {
    return (v * 100).toFixed(digits === undefined ? 1 : digits) + "%";
  }

  function fmtSignedPP(v) {
    var pp = (v * 100).toFixed(1);
    return (v >= 0 ? "+" : "\u2212") + Math.abs(Number(pp)).toFixed(1) + " pp";
  }

  function fmtSignedPct(v) {
    var p = (v * 100).toFixed(1);
    return (v >= 0 ? "+" : "\u2212") + Math.abs(Number(p)).toFixed(1) + "%";
  }

  function initLab(root) {
    var controls = root.querySelector(".e07-controls");
    if (controls) controls.hidden = false;

    var presetBtns = root.querySelectorAll("[data-e07-preset]");
    var levInput = root.querySelector('[data-e07-input="lev"]');
    var reinvInput = root.querySelector('[data-e07-input="reinv"]');
    var roiicInput = root.querySelector('[data-e07-input="roiic"]');

    var state = {
      presetKey: "compounder",
      baseRoic: PRESETS.compounder.baseRoic,
      lev: PRESETS.compounder.lev,
      reinv: PRESETS.compounder.reinv,
      roiic: PRESETS.compounder.roiic
    };

    function setText(key, text) {
      var el = root.querySelector('[data-e07-out="' + key + '"]');
      if (el) el.textContent = text;
    }

    function setBarWidth(key, pct) {
      var el = root.querySelector('[data-e07-bar="' + key + '"]');
      if (el) el.style.setProperty("--w", clamp(pct, 0, 100).toFixed(1) + "%");
    }

    function render() {
      var roic0 = state.baseRoic;
      var lev = state.lev;
      var b = state.reinv / 100;
      var roiic = state.roiic / 100;

      // Exact financial-leverage ROE identity: ROE = ROIC + (D/E) * (ROIC - r_d)
      var roe0 = roic0 + lev * (roic0 - RD);
      var gap = roe0 - roic0;
      var spread = roiic - WACC;
      var g = b * roiic;

      // 5-year compounding simulation (per share, $100 initial IC per share)
      var nopat = [IC0 * roic0];
      var fcf = [nopat[0] * (1 - b)];
      var reinvAmt = [nopat[0] * b];
      var ic = [IC0];

      for (var t = 1; t <= 5; t++) {
        var addedIc = nopat[t - 1] * b;
        var nextIc = ic[t - 1] + addedIc;
        var nextNopat = nopat[t - 1] + addedIc * roiic;
        ic.push(nextIc);
        nopat.push(nextNopat);
        fcf.push(nextNopat * (1 - b));
        reinvAmt.push(nextNopat * b);
      }

      var cumFcf = 0;
      var pvFcf = 0;
      for (var k = 1; k <= 5; k++) {
        cumFcf += fcf[k];
        pvFcf += fcf[k] / Math.pow(1 + WACC, k);
      }

      var roic5 = nopat[5] / ic[5];
      var evBase = nopat[0] / WACC;
      var pvTerm = (nopat[5] / WACC) / Math.pow(1 + WACC, 5);
      var valueLift = (pvFcf + pvTerm) / evBase - 1;

      // Update slider outputs & aria-valuetext
      if (levInput) {
        levInput.value = lev.toFixed(1);
        levInput.setAttribute("aria-valuetext", lev.toFixed(1) + " \u500d\uff08\u503a\u52a1 / \u6743\u76ca\uff09");
      }
      if (reinvInput) {
        reinvInput.value = String(state.reinv);
        reinvInput.setAttribute("aria-valuetext", state.reinv + "%");
      }
      if (roiicInput) {
        roiicInput.value = String(state.roiic);
        roiicInput.setAttribute("aria-valuetext", state.roiic + "%");
      }

      setText("lev", lev.toFixed(1) + "\u00d7");
      setText("reinv", state.reinv + "%");
      setText("roiic", state.roiic + "%");

      // Gauges (scale max = 60% so WACC 8% sits cleanly at 13.33%)
      var scaleMax = 0.60;
      setText("roe-val", fmtPct(roe0, 1));
      setText("roic-val", fmtPct(roic0, 1));
      setText("roiic-val", fmtPct(roiic, 1));
      setBarWidth("roe", (roe0 / scaleMax) * 100);
      setBarWidth("roic", (roic0 / scaleMax) * 100);
      setBarWidth("roiic", (roiic / scaleMax) * 100);

      var roiicBar = root.querySelector('[data-e07-bar="roiic"]');
      if (roiicBar) roiicBar.classList.toggle("e07-below-wacc", spread < 0);

      // Left KPI pills
      setText("lev-gap", fmtSignedPP(gap));
      var spreadEl = root.querySelector('[data-e07-out="wacc-spread"]');
      if (spreadEl) {
        spreadEl.textContent = fmtSignedPP(spread);
        spreadEl.classList.toggle("e07-pos", spread >= 0);
        spreadEl.classList.toggle("e07-neg", spread < 0);
      }
      setText("roic5", fmtPct(roic5, 1));

      // Right 5-year stacked columns (Y0..Y5)
      var maxNopat = Math.max(nopat[5], nopat[0], 30);
      for (var y = 0; y <= 5; y++) {
        var col = root.querySelector('[data-e07-yr="' + y + '"]');
        if (!col) continue;
        var valEl = col.querySelector(".e07-col-val");
        var fcfSeg = col.querySelector(".e07-seg-fcf");
        var reinvSeg = col.querySelector(".e07-seg-reinv");
        var totH = (nopat[y] / maxNopat) * 100;
        var fcfH = totH * (1 - b);
        var reinvH = totH * b;
        if (valEl) valEl.textContent = nopat[y].toFixed(1);
        if (fcfSeg) fcfSeg.style.height = fcfH.toFixed(1) + "%";
        if (reinvSeg) reinvSeg.style.height = reinvH.toFixed(1) + "%";
      }

      // Right summary readouts
      setText("growth-g", fmtPct(g, 1) + "/\u5e74");
      setText("cum-fcf", cumFcf.toFixed(1) + " \u7f8e\u5143");
      var liftEl = root.querySelector('[data-e07-out="val-lift"]');
      if (liftEl) {
        liftEl.textContent = fmtSignedPct(valueLift);
        liftEl.classList.toggle("e07-pos", valueLift >= 0);
        liftEl.classList.toggle("e07-neg", valueLift < 0);
      }

      // Diagnostic live note
      var noteEl = root.querySelector("[data-e07-note]");
      if (noteEl) {
        var diag;
        if (spread < 0 && b > 0) {
          diag =
            "\u8b66\u793a\uff1a\u589e\u91cf ROIIC\uff08" + fmtPct(roiic, 0) +
            "\uff09\u4f4e\u4e8e 8.0% \u8d44\u672c\u6210\u672c\u3002\u5c3d\u7ba1 " + lev.toFixed(1) +
            "\u00d7 \u6760\u6746\u628a ROE \u63a8\u9ad8\u81f3 " + fmtPct(roe0, 1) +
            "\u3001\u6bcf\u80a1 NOPAT \u4ecd\u6309 " + fmtPct(g, 1) +
            "/\u5e74\u589e\u957f\uff0c\u4f46\u6bcf\u7559\u5b58 1 \u7f8e\u5143\u6269\u4ea7\u90fd\u5728\u6bc1\u706d\u4ef7\u503c\uff085 \u5e74\u7b56\u7565\u8f83\u96f6\u589e\u957f\u51c0\u635f " +
            fmtSignedPct(valueLift) + "\uff09\uff1b\u628a\u518d\u6295\u8d44\u7387\u964d\u81f3 0% \u5e76\u5206\u7ea2\u53cd\u800c\u66f4\u4fdd\u503c\u3002";
        } else if (b <= 0.30) {
          diag =
            "\u73b0\u91d1\u725b\u914d\u7f6e\uff1a\u4ec5\u7559\u5b58 " + state.reinv +
            "% \u5229\u6da6\u518d\u6295\u8d44\uff0c\u5176\u4f59 " + (100 - state.reinv) +
            "% \u4ee5\u5206\u7ea2\u6216\u5408\u7406\u4ef7\u56de\u8d2d\u8fd4\u8fd8\u80a1\u4e1c\uff0c5 \u5e74\u7d2f\u8ba1\u53ef\u5206\u914d FCF \u8fbe " +
            cumFcf.toFixed(1) + " \u7f8e\u5143/\u80a1\uff1bROE\uff08" + fmtPct(roe0, 1) +
            "\uff09\u4e0e\u5b58\u91cf ROIC\uff08" + fmtPct(roic0, 1) +
            "\uff09\u4e4b\u95f4\u7684 " + fmtSignedPP(gap) + " \u843d\u5dee\u5168\u90e8\u6765\u81ea\u8d22\u52a1\u6760\u6746\u3002";
        } else {
          diag =
            "\u9ad8\u590d\u5229\u6269\u4ea7\uff1a\u5c06 " + state.reinv +
            "% \u5229\u6da6\u6295\u5165 " + fmtPct(roiic, 0) +
            " \u7684\u589e\u91cf\u8dd1\u9053\uff08\u8d85\u8d44\u672c\u6210\u672c " + fmtSignedPP(spread) +
            "\uff09\uff0c\u6bcf\u80a1\u76c8\u5229\u80fd\u529b\u4ee5 " + fmtPct(g, 1) +
            "/\u5e74\u590d\u5229\u589e\u81f3\u7b2c 5 \u5e74 " + nopat[5].toFixed(1) +
            " \u7f8e\u5143/\u80a1\uff0c\u5f53\u671f FCF \u7531 " + fcf[0].toFixed(1) +
            " \u5347\u81f3 " + fcf[5].toFixed(1) + " \u7f8e\u5143/\u80a1\uff0c\u7b56\u7565\u51c0\u589e\u539a\u4ef7\u503c " +
            fmtSignedPct(valueLift) + "\u3002";
        }
        noteEl.textContent = diag;
      }

      presetBtns.forEach(function (btn) {
        var k = btn.getAttribute("data-e07-preset");
        btn.setAttribute("aria-pressed", k === state.presetKey ? "true" : "false");
      });
    }

    presetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var k = btn.getAttribute("data-e07-preset");
        var p = PRESETS[k];
        if (!p) return;
        state.presetKey = k;
        state.baseRoic = p.baseRoic;
        state.lev = p.lev;
        state.reinv = p.reinv;
        state.roiic = p.roiic;
        render();
      });
    });

    if (levInput) {
      levInput.addEventListener("input", function () {
        state.lev = Number(levInput.value);
        render();
      });
    }
    if (reinvInput) {
      reinvInput.addEventListener("input", function () {
        state.reinv = Number(reinvInput.value);
        render();
      });
    }
    if (roiicInput) {
      roiicInput.addEventListener("input", function () {
        state.roiic = Number(roiicInput.value);
        render();
      });
    }

    render();
  }

  document.querySelectorAll("[data-e07-roic]").forEach(initLab);
})();
