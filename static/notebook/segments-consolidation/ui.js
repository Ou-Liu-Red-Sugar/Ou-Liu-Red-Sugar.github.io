(function () {
  var CASES = {
    ko: {
      name: "The Coca-Cola Company（KO）· FY2025",
      revTitle: "收入合并桥（M 美元）",
      revBaseLabel: "五大分部＋Corporate 收入直接相加",
      revBase: 48950,
      revSegDetail: "EMEA 11,513 ＋ LatAm 6,334 ＋ NA 19,586 ＋ APAC 5,638 ＋ 装瓶投资 5,735 ＋ Corporate 144",
      elimLabel: "分部间内部交易抵销（Eliminations）",
      elimVal: -1009,
      officialRev: 47941,
      opTitle: "营业利润合并桥（M 美元）",
      opBaseLabel: "五个经营分部营业利润之和",
      opBase: 15578,
      opSegDetail: "EMEA 4,298 ＋ LatAm 3,742 ＋ NA 5,070 ＋ APAC 2,042 ＋ 装瓶投资 426（内部收入与成本同步抵销）",
      corpLabel: "总部未分配共同成本（Corporate 营业亏损）",
      corpVal: -1816,
      officialOp: 13762,
      belowTitle: "营业利润以下 → 归母净利润（M 美元）",
      eqMethodLabel: "权益法投资收益（联营装瓶商等，实收现金分红 993）",
      eqMethodVal: 2031,
      eqSecLabel: "股权证券公允价值重估（本案主要归入其他项）",
      eqSecVal: 0,
      eqSecHide: true,
      otherTaxLabel: "利息净额 −868 ＋ 其他收益净额 1,073 − 所得税 2,861",
      otherTaxVal: -2656,
      nciLabel: "减：归属少数股东净利润（NCI）",
      nciVal: -30,
      nciNote: null,
      officialNi: 13107,
      elimBtn: "扣分部间抵销 −1,009",
      corpBtn: "扣总部共同成本 −1,816",
      belowBtn: "计入权益法 +2,031 与扣 NCI −30",
      reconciledMsg: "KO FY2025 已完整还原官方 10-K 合并报表：收入 47,941、营业利润 13,762（营业利润率 28.7%）、归母净利润 13,107 M 美元。注意权益法利润 2,031 中仅 993 收到现金分红，差额 1,038 在经营现金流中扣回。",
      belowOffNote: "关闭营业外权益法与少数股东项后，漏计联营装瓶商贡献的 +2,031 权益法利润，也未扣出 −30 少数股东损益"
    },
    googl: {
      name: "Alphabet Inc.（GOOGL）· FY2025",
      revTitle: "收入合并桥（M 美元）",
      revBaseLabel: "三大经营分部收入直接相加",
      revBase: 402963,
      revSegDetail: "Google Services 342,721 ＋ Google Cloud 58,705 ＋ Other Bets 1,537",
      elimLabel: "未分配外汇套期保值损益（Hedging losses）",
      elimVal: -127,
      officialRev: 402836,
      opTitle: "营业利润合并桥（M 美元）",
      opBaseLabel: "三大经营分部营业利润之和",
      opBase: 145799,
      opSegDetail: "Google Services 139,404 ＋ Google Cloud 13,910 − Other Bets 7,515（若连 Other Bets 也忽略则高达 153,314）",
      corpLabel: "总部未分配共同成本（Alphabet-level activities）",
      corpVal: -16760,
      officialOp: 129039,
      belowTitle: "营业利润以下 → 合并净利润（M 美元）",
      eqMethodLabel: "权益法投资净收益",
      eqMethodVal: 281,
      eqSecLabel: "股权证券公允价值重估净收益（<20% 非上市／上市股权）",
      eqSecVal: 24080,
      eqSecHide: false,
      otherTaxLabel: "利息及其他 OI&E +5,426 − 所得税 26,656",
      otherTaxVal: -21230,
      nciLabel: "归属少数股东损益（Waymo 等期末 NCI 34 亿美元）",
      nciVal: 0,
      nciNote: "不重大（归入 OI&E）",
      officialNi: 132170,
      elimBtn: "扣未分配套保 −127",
      corpBtn: "扣总部共同成本 −16,760",
      belowBtn: "计入股权公允价值 +24,080 与权益法 +281",
      reconciledMsg: "GOOGL FY2025 已完整还原官方 10-K 合并报表：收入 402,836、营业利润 129,039（营业利润率 32.0%）、净利润 132,170 M 美元。注意营业利润下方包含 +24,080 M 美元股权证券公允价值重估收益，并非搜索或云业务经营利润。",
      belowOffNote: "剔除营业外股权投资重估（+24,080）与权益法收益（+281）后（按原税额直观对照），净利润立减 24,361 M 美元，凸显非经营性估值波动的影响"
    }
  };

  function fmt(v, signed) {
    if (v === 0) return "0";
    var abs = Math.abs(v).toLocaleString("en-US");
    if (v < 0) return "\u2212" + abs;
    return signed ? "+" + abs : abs;
  }

  function fmtPct(num, den) {
    if (!den) return "0.0%";
    return (num / den * 100).toFixed(1) + "%";
  }

  function initBridge(root) {
    var controls = root.querySelector(".e04-controls");
    if (controls) controls.hidden = false;

    var state = { co: "ko", elim: true, corp: true, below: true };
    var coBtns = root.querySelectorAll("[data-e04-co]");
    var togBtns = root.querySelectorAll("[data-e04-toggle]");
    var presetBtn = root.querySelector("[data-e04-preset]");

    function setTxt(key, val) {
      var el = root.querySelector('[data-e04-v="' + key + '"]');
      if (el) el.textContent = val;
    }

    function setRowOff(key, off) {
      var el = root.querySelector('[data-e04-row="' + key + '"]');
      if (el) el.classList.toggle("e04-row-off", off);
    }

    function render() {
      var c = CASES[state.co];
      var curRev = c.revBase + (state.elim ? c.elimVal : 0);
      var curOp = c.opBase + (state.corp ? c.corpVal : 0);
      var eqM = state.below ? c.eqMethodVal : 0;
      var eqS = state.below ? c.eqSecVal : 0;
      var nci = state.below ? c.nciVal : 0;
      var curNi = curOp + eqM + eqS + c.otherTaxVal + nci;

      setTxt("co-name", c.name);
      setTxt("rev-base-lbl", c.revBaseLabel);
      setTxt("rev-base", fmt(c.revBase, false));
      setTxt("rev-seg-detail", c.revSegDetail);
      setTxt("elim-lbl", c.elimLabel);
      setTxt("elim-val", fmt(c.elimVal, true));
      setTxt("cur-rev", fmt(curRev, false));

      setTxt("op-base-lbl", c.opBaseLabel);
      setTxt("op-base", fmt(c.opBase, false));
      setTxt("op-seg-detail", c.opSegDetail);
      setTxt("corp-lbl", c.corpLabel);
      setTxt("corp-val", fmt(c.corpVal, true));
      setTxt("cur-op", fmt(curOp, false) + "（利润率 " + fmtPct(curOp, curRev) + "）");

      setTxt("below-op", fmt(curOp, false));
      setTxt("eqm-lbl", c.eqMethodLabel);
      setTxt("eqm-val", fmt(c.eqMethodVal, true));
      setTxt("eqs-lbl", c.eqSecLabel);
      setTxt("eqs-val", fmt(c.eqSecVal, true));
      setTxt("ot-lbl", c.otherTaxLabel);
      setTxt("ot-val", fmt(c.otherTaxVal, true));
      setTxt("nci-lbl", c.nciLabel);
      setTxt("nci-val", c.nciNote ? c.nciNote : fmt(c.nciVal, true));
      setTxt("cur-ni", fmt(curNi, false));

      var eqsRow = root.querySelector('[data-e04-row="eqs"]');
      if (eqsRow) eqsRow.hidden = Boolean(c.eqSecHide);

      setRowOff("elim", !state.elim);
      setRowOff("corp", !state.corp);
      setRowOff("eqm", !state.below);
      setRowOff("eqs", !state.below);
      setRowOff("nci", !state.below && !c.nciNote);

      var revOver = curRev - c.officialRev;
      var opOver = curOp - c.officialOp;

      var revTotRow = root.querySelector('[data-e04-row="rev-tot"]');
      var opTotRow = root.querySelector('[data-e04-row="op-tot"]');
      var niTotRow = root.querySelector('[data-e04-row="ni-tot"]');
      if (revTotRow) revTotRow.classList.toggle("e04-over", revOver !== 0);
      if (opTotRow) opTotRow.classList.toggle("e04-over", opOver !== 0);
      if (niTotRow) niTotRow.classList.toggle("e04-over", curNi !== c.officialNi);

      var revBar = root.querySelector('[data-e04-bar="rev"]');
      var opBar = root.querySelector('[data-e04-bar="op"]');
      var maxRev = c.revBase;
      var maxOp = c.opBase;
      if (revBar) {
        revBar.style.width = Math.min(100, (curRev / maxRev * 100)).toFixed(1) + "%";
        revBar.classList.toggle("e04-bar-warn", revOver !== 0);
      }
      if (opBar) {
        opBar.style.width = Math.min(100, (curOp / maxOp * 100)).toFixed(1) + "%";
        opBar.classList.toggle("e04-bar-warn", opOver !== 0);
      }
      setTxt("rev-bar-pct", revOver === 0 ? "0.0%" : "+" + (revOver / c.officialRev * 100).toFixed(2) + "%");
      setTxt("op-bar-pct", opOver === 0 ? "0.0%" : "+" + (opOver / c.officialOp * 100).toFixed(1) + "%");

      togBtns.forEach(function (b) {
        var k = b.getAttribute("data-e04-toggle");
        b.setAttribute("aria-pressed", state[k] ? "true" : "false");
        if (k === "elim") b.textContent = (state.elim ? "✓ " : "✕ ") + c.elimBtn;
        if (k === "corp") b.textContent = (state.corp ? "✓ " : "✕ ") + c.corpBtn;
        if (k === "below") b.textContent = (state.below ? "✓ " : "✕ ") + c.belowBtn;
      });

      coBtns.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-e04-co") === state.co ? "true" : "false");
      });

      if (presetBtn) {
        var allOn = state.elim && state.corp && state.below;
        presetBtn.textContent = allOn ? "模拟漏扣（仅分部相加）" : "还原官方合并数";
      }

      var alertEl = root.querySelector("[data-e04-alert]");
      if (alertEl) {
        var msgs = [];
        if (revOver !== 0) {
          msgs.push("收入高估 +" + Math.abs(revOver).toLocaleString("en-US") + " M 美元（+" + (revOver / c.officialRev * 100).toFixed(revOver / c.officialRev < 0.005 ? 2 : 1) + "%）");
        }
        if (opOver !== 0) {
          msgs.push("营业利润高估 +" + Math.abs(opOver).toLocaleString("en-US") + " M 美元（+" + (opOver / c.officialOp * 100).toFixed(1) + "%）");
        }
        if (!state.below) {
          msgs.push(c.belowOffNote);
        }
        if (msgs.length === 0) {
          alertEl.classList.remove("e04-alert-warn");
          alertEl.textContent = c.reconciledMsg;
        } else {
          alertEl.classList.add("e04-alert-warn");
          alertEl.textContent = "口径偏差提示：" + msgs.join("；") + "。";
        }
      }
    }

    coBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        state.co = b.getAttribute("data-e04-co");
        render();
      });
    });

    togBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-e04-toggle");
        state[k] = !state[k];
        render();
      });
    });

    if (presetBtn) {
      presetBtn.addEventListener("click", function () {
        var allOn = state.elim && state.corp && state.below;
        if (allOn) {
          state.elim = false;
          state.corp = false;
          state.below = true;
        } else {
          state.elim = true;
          state.corp = true;
          state.below = true;
        }
        render();
      });
    }

    render();
  }

  function initDualTabs(root) {
    var tabsWrap = root.querySelector(".e04-dual-tabs");
    var tabs = root.querySelectorAll("[data-e04-dual-tab]");
    var panels = root.querySelectorAll("[data-e04-dual-panel]");
    if (!tabs.length || !panels.length) return;
    if (tabsWrap) tabsWrap.hidden = false;

    function activate(key) {
      tabs.forEach(function (btn) {
        btn.setAttribute("aria-pressed", btn.getAttribute("data-e04-dual-tab") === key ? "true" : "false");
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-e04-dual-panel") !== key;
      });
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activate(btn.getAttribute("data-e04-dual-tab"));
      });
    });

    activate("ko");
  }

  document.querySelectorAll("[data-e04-dual-tabs]").forEach(initDualTabs);
  document.querySelectorAll("[data-e04-bridge]").forEach(initBridge);
})();
