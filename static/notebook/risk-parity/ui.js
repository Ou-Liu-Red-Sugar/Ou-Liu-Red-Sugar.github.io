(function () {
  var SIGMA_S = 0.172; /* 2011-2020 SPY annualized vol */
  var SIGMA_B = 0.059; /* 2011-2020 IEF annualized vol */

  function fmtSigned(v, digits) {
    var d = typeof digits === "number" ? digits : 1;
    var n = Math.abs(v) < 0.05 ? 0 : v;
    if (n < 0) return "\u2212" + Math.abs(n).toFixed(d) + "%";
    return n.toFixed(d) + "%";
  }

  function fmtCorr(v) {
    var n = Math.abs(v) < 0.005 ? 0 : v;
    if (n > 0) return "+" + n.toFixed(2);
    if (n < 0) return "\u2212" + Math.abs(n).toFixed(2);
    return "0.00";
  }

  function initRcLab(root) {
    var wIn = root.querySelector("[data-p04-w-in]");
    var cIn = root.querySelector("[data-p04-c-in]");
    var wOut = root.querySelector("[data-p04-w-out]");
    var cOut = root.querySelector("[data-p04-c-out]");
    var presetsWrap = root.querySelector(".p04-presets");
    var presets = root.querySelectorAll("[data-p04-preset]");

    var capSBar = root.querySelector("[data-p04-cap-s]");
    var capBBar = root.querySelector("[data-p04-cap-b]");
    var capSVal = root.querySelector("[data-p04-cap-s-val]");
    var capBVal = root.querySelector("[data-p04-cap-b-val]");

    var rcSBar = root.querySelector("[data-p04-rc-s]");
    var rcBBar = root.querySelector("[data-p04-rc-b]");
    var rcSVal = root.querySelector("[data-p04-rc-s-val]");
    var rcBVal = root.querySelector("[data-p04-rc-b-val]");

    var volEl = root.querySelector("[data-p04-vol]");
    var noteEl = root.querySelector("[data-p04-note]");

    if (!wIn || !cIn) return;
    wIn.disabled = false;
    cIn.disabled = false;
    if (presetsWrap) presetsWrap.hidden = false;

    function render() {
      var wsPct = parseFloat(wIn.value);
      var ws = wsPct / 100;
      var wb = 1 - ws;
      var rho = parseFloat(cIn.value);

      var vs = ws * ws * SIGMA_S * SIGMA_S;
      var vb = wb * wb * SIGMA_B * SIGMA_B;
      var cov = ws * wb * rho * SIGMA_S * SIGMA_B;
      var pVar = Math.max(vs + vb + 2 * cov, 1e-8);
      var pVol = Math.sqrt(pVar) * 100;

      var rcS = ((vs + cov) / pVar) * 100;
      var rcB = 100 - rcS;

      if (wOut) wOut.textContent = wsPct.toFixed(1).replace(/\.0$/, "") + "% / " + (100 - wsPct).toFixed(1).replace(/\.0$/, "") + "%";
      if (cOut) cOut.textContent = fmtCorr(rho);

      if (capSBar) capSBar.style.width = wsPct.toFixed(1) + "%";
      if (capBBar) capBBar.style.width = (100 - wsPct).toFixed(1) + "%";
      if (capSVal) capSVal.textContent = wsPct.toFixed(1).replace(/\.0$/, "") + "%";
      if (capBVal) capBVal.textContent = (100 - wsPct).toFixed(1).replace(/\.0$/, "") + "%";

      /* Clamp visual stacked bar between 0% and 100% while displaying exact signed % */
      var barS = Math.max(0, Math.min(100, rcS));
      var barB = Math.max(0, Math.min(100, 100 - barS));
      if (rcSBar) rcSBar.style.width = barS.toFixed(1) + "%";
      if (rcBBar) rcBBar.style.width = barB.toFixed(1) + "%";
      if (rcSVal) rcSVal.textContent = fmtSigned(rcS, 1);
      if (rcBVal) rcBVal.textContent = fmtSigned(rcB, 1);
      if (volEl) volEl.textContent = pVol.toFixed(1) + "%";

      if (noteEl) {
        if (rcB < -0.5) {
          noteEl.textContent =
            "\u80a1\u7968\u4ec5\u5360 " + wsPct.toFixed(1).replace(/\.0$/, "") + "% \u8d44\u91d1\uff0c\u5374\u8d21\u732e\u4e86 " +
            fmtSigned(rcS, 1) + " \u7684\u6ce2\u52a8\uff1b\u503a\u5238\u56e0\u8d1f\u76f8\u5173\u5448\u73b0 " + fmtSigned(rcB, 1) +
            " \u7684\u5bf9\u51b2\u8d21\u732e\uff0c\u7ec4\u5408\u8d70\u52bf\u51e0\u4e4e\u5168\u7531\u80a1\u5e02\u4e3b\u5bfc\u3002";
        } else if (Math.abs(rcS - 50) <= 2.5) {
          noteEl.textContent =
            "\u6309\u6ce2\u52a8\u5012\u6570\u914d\u6bd4\u65f6\uff0c\u80a1\u503a\u98ce\u9669\u8d21\u732e\u7a33\u5b9a\u5728\u7ea6 50% / 50%\uff1b\u4f46\u5927\u5934\u8d44\u91d1\u843d\u5728\u4f4e\u6ce2\u503a\u5238\u4e0a\uff0c\u7ec4\u5408\u603b\u6ce2\u52a8\u964d\u81f3 " +
            pVol.toFixed(1) + "%\uff0c\u4e14\u76f8\u5173\u6027\u7ffb\u6b63\u4ecd\u4f1a\u63a8\u9ad8\u603b\u6ce2\u52a8\u3002";
        } else if (rcS > 80) {
          noteEl.textContent =
            "\u867d\u7136\u8d44\u91d1\u50cf\u662f\u5206\u6563\u914d\u7f6e\uff0c\u80a1\u7968\u4ecd\u5360\u636e " + fmtSigned(rcS, 1) +
            " \u7684\u7ec4\u5408\u98ce\u9669\uff0c\u7ec4\u5408\u5e74\u5316\u6ce2\u52a8\u4e3a " + pVol.toFixed(1) + "%\u3002";
        } else {
          noteEl.textContent =
            "\u5f53\u524d\u80a1\u7968\u8d21\u732e " + fmtSigned(rcS, 1) + " \u98ce\u9669\u3001\u503a\u5238\u8d21\u732e " + fmtSigned(rcB, 1) +
            " \u98ce\u9669\uff0c\u7ec4\u5408\u5e74\u5316\u6ce2\u52a8\u7387\u4e3a " + pVol.toFixed(1) + "%\u3002";
        }
      }

      var key = wsPct.toFixed(1) + "," + rho.toFixed(2);
      presets.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-p04-preset") === key ? "true" : "false");
      });
    }

    wIn.addEventListener("input", render);
    cIn.addEventListener("input", render);
    presets.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var parts = (btn.getAttribute("data-p04-preset") || "").split(",");
        if (parts.length !== 2) return;
        wIn.value = parts[0];
        cIn.value = parts[1];
        render();
      });
    });

    render();
  }

  document.querySelectorAll("[data-p04-rc]").forEach(initRcLab);
})();
