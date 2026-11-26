(function () {
  var BASE_REV = 1000; /* 百万美元 */
  var COGS_RATIO = 0.65;
  var CASH_MARGIN = 0.15;

  var PRESETS = {
    hardware: {
      dso: 65,
      dio: 105,
      dpo: 45,
      drd: 0,
      growth: 40,
      desc: "重账期硬件／制造模式（+40% 增长）：存货备货 105 天加客户账期 65 天远高于上游 45 天账期，营收多增 400 百万美元时，营运资本直接吃掉 114.0 百万美元现金，经营现金流不到变动前现金利润的一半。"
    },
    retail: {
      dso: 4,
      dio: 26,
      dpo: 40,
      drd: 4,
      growth: 40,
      desc: "高周转零售模式（仿 COST／WMT，+40% 增长）：收银几乎现结、货架 26 天清空，上游账期 40 天叠加年付会员费预收，营收同样多增 400 百万美元，营运资本反而向账面净注入 +10.0 百万美元现金。"
    },
    saas: {
      dso: 60,
      dio: 0,
      dpo: 30,
      drd: 120,
      growth: 40,
      desc: "预收订阅软件模式（仿 MSFT／SNOW，+40% 增长）：零实物存货，客户按年预付带来 120 天递延收入，净资金周期低至 −90 天；高速扩张期营运资本额外注入 +87.1 百万美元，推动 CFO 达到变动前现金利润的 141.5%。"
    },
    downturn: {
      dso: 60,
      dio: 0,
      dpo: 30,
      drd: 120,
      growth: -25,
      desc: "预收模式退坡压力（收入 −25%）：同样一套 −90 天净周期参数，一旦新签收缩、收入滑落至 750 百万美元，递延收入净下降立刻抽走 −54.5 百万美元现金，经营现金流比利润表更早腰斩。"
    }
  };

  function fmtSigned(v, digits) {
    var d = typeof digits === "number" ? digits : 1;
    var n = Math.abs(v) < 0.05 ? 0 : v;
    var body = Math.abs(n).toFixed(d);
    if (n > 0) return "+" + body;
    if (n < 0) return "\u2212" + body;
    return d === 0 ? "0" : "0.0";
  }

  function fmtDays(v) {
    var n = Math.round(v);
    if (n > 0) return "+" + n + " 天";
    if (n < 0) return "\u2212" + Math.abs(n) + " 天";
    return "0 天";
  }

  function initWorkingCapitalLab(root) {
    var presetsWrap = root.querySelector(".e02-presets");
    var presetBtns = root.querySelectorAll("[data-e02-preset]");
    var dsoIn = root.querySelector("[data-e02-dso-in]");
    var dioIn = root.querySelector("[data-e02-dio-in]");
    var dpoIn = root.querySelector("[data-e02-dpo-in]");
    var drdIn = root.querySelector("[data-e02-drd-in]");
    var gIn = root.querySelector("[data-e02-g-in]");

    var dsoOut = root.querySelector("[data-e02-dso-out]");
    var dioOut = root.querySelector("[data-e02-dio-out]");
    var dpoOut = root.querySelector("[data-e02-dpo-out]");
    var drdOut = root.querySelector("[data-e02-drd-out]");
    var gOut = root.querySelector("[data-e02-g-out]");

    var fillDio = root.querySelector("[data-e02-bar-dio]");
    var fillDso = root.querySelector("[data-e02-bar-dso]");
    var fillDpo = root.querySelector("[data-e02-bar-dpo]");
    var fillDrd = root.querySelector("[data-e02-bar-drd]");
    var useTotalEl = root.querySelector("[data-e02-use-days]");
    var srcTotalEl = root.querySelector("[data-e02-src-days]");

    var netCccEl = root.querySelector("[data-e02-net-ccc]");
    var tradeCccEl = root.querySelector("[data-e02-trade-ccc]");
    var preCfEl = root.querySelector("[data-e02-pre-cf]");
    var revSubEl = root.querySelector("[data-e02-rev-sub]");
    var wcCfEl = root.querySelector("[data-e02-wc-cf]");
    var nwcSubEl = root.querySelector("[data-e02-nwc-sub]");
    var cfoEl = root.querySelector("[data-e02-cfo]");
    var convSubEl = root.querySelector("[data-e02-conv-sub]");
    var noteEl = root.querySelector("[data-e02-note]");

    if (!dsoIn || !dioIn || !dpoIn || !drdIn || !gIn) return;

    [dsoIn, dioIn, dpoIn, drdIn, gIn].forEach(function (el) {
      el.disabled = false;
    });
    if (presetsWrap) presetsWrap.hidden = false;

    var activePreset = "hardware";

    function render(customNote) {
      var dso = parseFloat(dsoIn.value);
      var dio = parseFloat(dioIn.value);
      var dpo = parseFloat(dpoIn.value);
      var drd = parseFloat(drdIn.value);
      var g = parseFloat(gIn.value);

      var r1 = BASE_REV * (1 + g / 100);
      var tradeCcc = dso + dio - dpo;
      var netCcc = tradeCcc - drd;
      var useDays = dio + dso;
      var srcDays = dpo + drd;
      var maxScale = Math.max(200, useDays, srcDays);

      var nwcEffDays = dso - drd + COGS_RATIO * (dio - dpo);
      var nwc0 = BASE_REV * (nwcEffDays / 365);
      var nwc1 = r1 * (nwcEffDays / 365);
      var wcCf = -(nwc1 - nwc0);
      var preCf = r1 * CASH_MARGIN;
      var cfo = preCf + wcCf;
      var conv = preCf > 0 ? (cfo / preCf) * 100 : 0;

      if (dsoOut) dsoOut.textContent = dso + " 天";
      if (dioOut) dioOut.textContent = dio + " 天";
      if (dpoOut) dpoOut.textContent = dpo + " 天";
      if (drdOut) drdOut.textContent = drd + " 天";
      if (gOut) gOut.textContent = (g > 0 ? "+" : g < 0 ? "\u2212" : "") + Math.abs(g) + "%";

      if (fillDio) fillDio.style.width = ((dio / maxScale) * 100).toFixed(1) + "%";
      if (fillDso) fillDso.style.width = ((dso / maxScale) * 100).toFixed(1) + "%";
      if (fillDpo) fillDpo.style.width = ((dpo / maxScale) * 100).toFixed(1) + "%";
      if (fillDrd) fillDrd.style.width = ((drd / maxScale) * 100).toFixed(1) + "%";
      if (useTotalEl) useTotalEl.textContent = useDays + " 天";
      if (srcTotalEl) srcTotalEl.textContent = srcDays + " 天";

      if (netCccEl) {
        netCccEl.textContent = fmtDays(netCcc);
        netCccEl.classList.toggle("e02-pos", netCcc <= 0);
        netCccEl.classList.toggle("e02-neg", netCcc > 0);
      }
      if (tradeCccEl) {
        tradeCccEl.textContent = "传统 CCC " + fmtDays(tradeCcc);
      }

      if (preCfEl) preCfEl.textContent = preCf.toFixed(1);
      if (revSubEl) revSubEl.textContent = "本年收入 " + Math.round(r1).toLocaleString("en-US") + "M";

      if (wcCfEl) {
        wcCfEl.textContent = fmtSigned(wcCf, 1);
        wcCfEl.classList.toggle("e02-pos", wcCf >= 0);
        wcCfEl.classList.toggle("e02-neg", wcCf < 0);
      }
      if (nwcSubEl) {
        nwcSubEl.textContent = "NWC " + fmtSigned(nwc0, 1) + " \u2192 " + fmtSigned(nwc1, 1);
      }

      if (cfoEl) {
        cfoEl.textContent = fmtSigned(cfo, 1);
        cfoEl.classList.toggle("e02-pos", cfo >= preCf - 0.05);
        cfoEl.classList.toggle("e02-neg", cfo < 0);
      }
      if (convSubEl) {
        convSubEl.textContent = "现金转换率 " + conv.toFixed(1) + "%";
      }

      if (noteEl) {
        if (customNote) {
          noteEl.textContent = customNote;
        } else if (g === 0 || Math.abs(wcCf) <= 0.05) {
          noteEl.textContent =
            "当前设定下营运资本净变动接近零（余额 " +
            fmtSigned(nwc1, 1) +
            " 百万美元），当期营运资本现金影响为 0.0 百万美元，CFO 基本等于变动前现金利润 " +
            preCf.toFixed(1) +
            " 百万美元。";
        } else if (wcCf < -0.05 && g > 0) {
          noteEl.textContent =
            "正营运资本叠加 " +
            fmtSigned(g, 0) +
            "% 增长：新增存货与应收超过上游账期和预收款，本年净占用 " +
            Math.abs(wcCf).toFixed(1) +
            " 百万美元现金，" +
            (cfo < 0 ? "甚至令经营现金流转为负数（扩张缺血）。" : "把 CFO 压低至变动前现金利润的 " + conv.toFixed(1) + "%。");
        } else if (wcCf > 0.05 && g > 0) {
          noteEl.textContent =
            "负营运资本叠加 " +
            fmtSigned(g, 0) +
            "% 增长：上游账期与客户预付款同步放大，额外贡献 +" +
            wcCf.toFixed(1) +
            " 百万美元经营现金流，令 CFO 达到变动前现金利润的 " +
            conv.toFixed(1) +
            "%。";
        } else if (wcCf < -0.05 && g < 0) {
          noteEl.textContent =
            "负营运资本遇到 " +
            fmtSigned(g, 0) +
            "% 退坡：前期欠供应商的货款或预收履约压力反噬，净流出 " +
            Math.abs(wcCf).toFixed(1) +
            " 百万美元，经营现金流缩水至 " +
            fmtSigned(cfo, 1) +
            " 百万美元。";
        } else {
          noteEl.textContent =
            "正营运资本遇到 " +
            fmtSigned(g, 0) +
            "% 退坡：按账面假设缩减应收与存货可释放 +" +
            wcCf.toFixed(1) +
            " 百万美元现金，但前提是存货不跌价、应收不发生坏账。";
        }
      }

      presetBtns.forEach(function (btn) {
        btn.setAttribute(
          "aria-pressed",
          btn.getAttribute("data-e02-preset") === activePreset ? "true" : "false"
        );
      });
    }

    [dsoIn, dioIn, dpoIn, drdIn, gIn].forEach(function (el) {
      el.addEventListener("input", function () {
        activePreset = "";
        render();
      });
    });

    presetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-e02-preset");
        var p = PRESETS[key];
        if (!p) return;
        activePreset = key;
        dsoIn.value = String(p.dso);
        dioIn.value = String(p.dio);
        dpoIn.value = String(p.dpo);
        drdIn.value = String(p.drd);
        gIn.value = String(p.growth);
        render(p.desc);
      });
    });

    render(PRESETS.hardware.desc);
  }

  document.querySelectorAll("[data-e02-ccc]").forEach(initWorkingCapitalLab);
})();
