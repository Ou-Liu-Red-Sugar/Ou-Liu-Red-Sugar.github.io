(function () {
  "use strict";

  function fmt(n, digits) {
    var d = digits == null ? 1 : digits;
    var v = Math.abs(n) < 0.005 ? 0 : n;
    var s = Math.abs(v).toFixed(d);
    if (d > 0) s = s.replace(/\.0+$/, "");
    return (v < 0 ? "−" : "") + s;
  }

  function fmtSigned(n, digits, suffix) {
    var d = digits == null ? 1 : digits;
    var v = Math.abs(n) < 0.005 ? 0 : n;
    var s = Math.abs(v).toFixed(d);
    if (d > 0) s = s.replace(/\.0+$/, "");
    var sign = v > 0 ? "+" : v < 0 ? "−" : "";
    return sign + s + (suffix || "");
  }

  function initRealTabs() {
    var root = document.getElementById("nb-d03-real-tabs-fig");
    if (!root) return;
    var tabs = root.querySelectorAll("[data-d03-tab]");
    var panels = root.querySelectorAll("[data-d03-panel]");
    if (!tabs.length || !panels.length) return;

    function select(key) {
      for (var i = 0; i < tabs.length; i++) {
        var active = tabs[i].getAttribute("data-d03-tab") === key;
        tabs[i].setAttribute("aria-pressed", active ? "true" : "false");
      }
      for (var j = 0; j < panels.length; j++) {
        var match = panels[j].getAttribute("data-d03-panel") === key;
        panels[j].hidden = !match;
      }
    }

    for (var i = 0; i < tabs.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          select(btn.getAttribute("data-d03-tab"));
        });
      })(tabs[i]);
    }
    select("tsm");
  }

  function initLeverageLab() {
    var root = document.getElementById("nb-d03-lev-lab");
    if (!root) return;

    var PRESETS = {
      highfix: {
        name: "高固定成本（软件／晶圆厂型）",
        baseRev: 100,
        vcRatio: 0.20,
        fixed: 60,
        vol: 10,
        price: 0,
        cost: 0
      },
      balanced: {
        name: "均衡成本（品牌制造型）",
        baseRev: 100,
        vcRatio: 0.50,
        fixed: 30,
        vol: 10,
        price: 0,
        cost: 0
      },
      highvar: {
        name: "高变动成本（零售／经销型）",
        baseRev: 100,
        vcRatio: 0.80,
        fixed: 10,
        vol: 10,
        price: 0,
        cost: 0
      }
    };

    var SCENARIOS = {
      vol_up: { vol: 10, price: 0, cost: 0 },
      price_up: { vol: 0, price: 10, cost: 0 },
      vol_down: { vol: -20, price: 0, cost: 0 },
      cost_up: { vol: 0, price: 0, cost: 10 }
    };

    var state = {
      presetKey: "highfix",
      vol: 10,
      price: 0,
      cost: 0
    };

    var presetBtns = root.querySelectorAll("[data-d03-preset]");
    var scenarioBtns = root.querySelectorAll("[data-d03-scenario]");
    var slVol = root.querySelector("[data-d03-sl='vol']");
    var slPrice = root.querySelector("[data-d03-sl='price']");
    var slCost = root.querySelector("[data-d03-sl='cost']");

    function setEl(key, text) {
      var el = root.querySelector("[data-d03-out='" + key + "']");
      if (el) el.textContent = text;
    }

    function setWidth(key, pct) {
      var el = root.querySelector("[data-d03-bar='" + key + "']");
      if (el) el.style.width = Math.max(0, Math.min(100, pct)).toFixed(1) + "%";
    }

    function update() {
      var p = PRESETS[state.presetKey];
      var baseRev = p.baseRev;
      var baseVc = baseRev * p.vcRatio;
      var baseCm = baseRev - baseVc;
      var baseFix = p.fixed;
      var baseEbit = baseCm - baseFix;
      var baseDol = baseCm / baseEbit;

      var vMult = 1 + state.vol / 100;
      var pMult = 1 + state.price / 100;
      var cMult = 1 + state.cost / 100;

      var newRev = baseRev * vMult * pMult;
      var newVc = baseVc * vMult * cMult;
      var newCm = newRev - newVc;
      var newEbit = newCm - baseFix;

      var revChg = ((newRev - baseRev) / baseRev) * 100;
      var ebitChg = ((newEbit - baseEbit) / baseEbit) * 100;
      var baseMargin = (baseEbit / baseRev) * 100;
      var newMargin = newRev > 0 ? (newEbit / newRev) * 100 : 0;

      var cmRatioNew = newRev > 0 ? newCm / newRev : 0;
      var beRev = cmRatioNew > 0.001 ? baseFix / cmRatioNew : Infinity;

      setEl("vol-lbl", fmtSigned(state.vol, 0, "%"));
      setEl("price-lbl", fmtSigned(state.price, 0, "%"));
      setEl("cost-lbl", fmtSigned(state.cost, 0, "%"));

      setEl("base-dol", fmt(baseDol, 1) + "×");
      setEl("base-ebit", fmt(baseEbit, 1) + " M（" + fmt(baseMargin, 1) + "%）");
      setEl("new-rev", fmt(newRev, 1) + " M（" + fmtSigned(revChg, 1, "%") + "）");
      setEl("new-vc", fmt(newVc, 1) + " M");
      setEl("new-fix", fmt(baseFix, 1) + " M");
      setEl("new-ebit", fmt(newEbit, 1) + " M（" + fmtSigned(ebitChg, 1, "%") + "）");
      setEl("new-margin", fmt(newMargin, 1) + "%");
      setEl("be-rev", isFinite(beRev) ? fmt(beRev, 1) + " M" : "无解");

      var ebitCard = root.querySelector("[data-d03-ebit-card]");
      if (ebitCard) {
        ebitCard.classList.toggle("is-loss", newEbit < 0);
        ebitCard.classList.toggle("is-gain", newEbit > baseEbit + 0.05);
      }

      var maxBar = Math.max(145, newRev, baseRev);
      setWidth("rev", (newRev / maxBar) * 100);
      setWidth("vc", (newVc / maxBar) * 100);
      setWidth("fix", (baseFix / maxBar) * 100);
      setWidth("ebit", (Math.abs(newEbit) / maxBar) * 100);

      var ebitBar = root.querySelector("[data-d03-bar='ebit']");
      if (ebitBar) {
        ebitBar.classList.toggle("is-loss", newEbit < 0);
      }

      var noteEl = root.querySelector("[data-d03-out='note']");
      if (noteEl) {
        var msg = "";
        if (newEbit < 0) {
          msg =
            "反向经营杠杆触发：收入降至 " + fmt(newRev, 1) + " M、跌穿 " + fmt(beRev, 1) +
            " M 盈亏平衡线，固定成本 " + fmt(baseFix, 1) + " M 无法同步缩减，营业利润由 +" +
            fmt(baseEbit, 1) + " M 翻转为 " + fmt(newEbit, 1) + " M 亏损。";
        } else if (state.price > 0 && state.vol === 0 && state.cost === 0) {
          msg =
            "纯提价通道：提价 " + fmtSigned(state.price, 0, "%") + " 不产生额外变动成本，新增的 " +
            fmt(newRev - baseRev, 1) + " M 收入 100% 转化为营业利润（利润 " + fmtSigned(ebitChg, 1, "%") +
            "），弹性远高于同等幅度的扩量。";
        } else if (state.cost > 0 && state.vol === 0 && state.price === 0) {
          msg =
            "供给成本冲击：售价和销量不变，单位变动成本上涨 " + fmtSigned(state.cost, 0, "%") +
            " 直接吞掉 " + fmt(newVc - baseVc, 1) + " M 利润（利润 " + fmtSigned(ebitChg, 1, "%") +
            "）。变动成本占比越高的业务，对原料或人工涨价越脆弱。";
        } else if (state.vol !== 0 && state.price === 0 && state.cost === 0) {
          msg =
            "纯销量杠杆：基期 DOL 为 " + fmt(baseDol, 1) + "×，销量 " + fmtSigned(state.vol, 0, "%") +
            " 令营业利润 " + fmtSigned(ebitChg, 1, "%") + "（营业利润率由 " +
            fmt(baseMargin, 1) + "% 变为 " + fmt(newMargin, 1) + "%），且固定成本仍锁定在 " +
            fmt(baseFix, 1) + " M。";
        } else {
          msg =
            "多因素合成：当前收入 " + fmt(newRev, 1) + " M（" + fmtSigned(revChg, 1, "%") +
            "），营业利润 " + fmt(newEbit, 1) + " M（" + fmtSigned(ebitChg, 1, "%") +
            "），盈亏平衡收入为 " + (isFinite(beRev) ? fmt(beRev, 1) + " M" : "无解") + "。";
        }
        noteEl.textContent = msg;
      }

      for (var i = 0; i < presetBtns.length; i++) {
        var pk = presetBtns[i].getAttribute("data-d03-preset");
        presetBtns[i].setAttribute("aria-pressed", pk === state.presetKey ? "true" : "false");
      }
      for (var j = 0; j < scenarioBtns.length; j++) {
        var sk = scenarioBtns[j].getAttribute("data-d03-scenario");
        var sc = SCENARIOS[sk];
        var match = sc && sc.vol === state.vol && sc.price === state.price && sc.cost === state.cost;
        scenarioBtns[j].setAttribute("aria-pressed", match ? "true" : "false");
      }
    }

    for (var i = 0; i < presetBtns.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          state.presetKey = btn.getAttribute("data-d03-preset");
          update();
        });
      })(presetBtns[i]);
    }

    for (var j = 0; j < scenarioBtns.length; j++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var sc = SCENARIOS[btn.getAttribute("data-d03-scenario")];
          if (!sc) return;
          state.vol = sc.vol;
          state.price = sc.price;
          state.cost = sc.cost;
          if (slVol) slVol.value = String(sc.vol);
          if (slPrice) slPrice.value = String(sc.price);
          if (slCost) slCost.value = String(sc.cost);
          update();
        });
      })(scenarioBtns[j]);
    }

    if (slVol) {
      slVol.addEventListener("input", function () {
        state.vol = Number(slVol.value);
        update();
      });
    }
    if (slPrice) {
      slPrice.addEventListener("input", function () {
        state.price = Number(slPrice.value);
        update();
      });
    }
    if (slCost) {
      slCost.addEventListener("input", function () {
        state.cost = Number(slCost.value);
        update();
      });
    }

    update();
  }

  function boot() {
    initRealTabs();
    initLeverageLab();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
