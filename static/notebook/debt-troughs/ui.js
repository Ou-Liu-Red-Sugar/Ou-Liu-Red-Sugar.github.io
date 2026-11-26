(function () {
  var REVOLVER = 120;
  var SCENARIOS = {
    ladder: {
      id: "ladder",
      troughCash: 179,
      troughLabel: "+179 M（Y1 Q2）",
      troughWithRev: "+299 M（含额度）",
      negQ: "0 个季度",
      negQRev: "0 个季度",
      endStr: "+354 / 600 M",
      status: "安全充裕 · 全程未破零线",
      statusRev: "安全充裕 · 无需动用循环信贷",
      statusTone: "good",
      statusRevTone: "good",
      dotX: 132.0,
      dotY: 64.0,
      dotText: "最低 +179 M",
      dotAnchor: "start",
      dotDx: 8,
      dotDy: -8,
      qstrip: "最低谷 Y1 Q2 拆解：期初 182 ＋ 息前 FCF 5 − 利息 8 − 净还本 0（到期 100 / 平价续借 100）＝ 期末现金 +179 M；后两笔到期在 Y2 Q4、Y3 Q3 直接用现金清偿。",
      note: "① 梯度分散到期：400 M 到期本金均摊至 Y1 Q2、Y2 Q1、Y2 Q4、Y3 Q3 四期（各 100 M）。单笔续借压力小，前期 4.0% 平稳滚续、后期靠现金净减债 200 M，全程守住流动性安全垫。",
      noteRev: "① 梯度分散到期（叠加 120 M 额度）：账户自身现金最低仍达 +179 M，根本不必动用循环信贷，也远离契约红线。",
      mats: [
        { x: 132, h: 14, label: "100" },
        { x: 264, h: 14, label: "100" },
        { x: 396, h: 14, label: "100" },
        { x: 528, h: 14, label: "100" }
      ],
      covenantFreeze: false
    },
    wall: {
      id: "wall",
      troughCash: -83,
      troughLabel: "\u221283 M（Y2 Q2）",
      troughWithRev: "+37 M（动用 83 M）",
      negQ: "2 个季度",
      negQRev: "0 个季度（过桥）",
      endStr: "+261 / 500 M",
      status: "击穿零线 · 短期缺口 83 M",
      statusRev: "循环信贷过桥脱险（前提：契约未违约）",
      statusTone: "warn",
      statusRevTone: "good",
      dotX: 308.0,
      dotY: 120.9,
      dotText: "低谷 \u221283 M",
      dotAnchor: "start",
      dotDx: 8,
      dotDy: 14,
      qstrip: "撞墙季 Y2 Q2 拆解：期初 210 ＋ 息前 FCF 15 − 利息 8 − 净还本 300（到期 400 / 仅续借 100 @ 8%）＝ 期末现金 \u221283 M；Y2 Q3 仍缺 44 M。",
      note: "② 第 2 年集中债墙：经营现金流与情景 ① 逐季完全一致，只因 400 M 本金扎堆在 Y2 Q2 到期、市场仅愿续借 100 M，账户现金当季跌穿零线至 \u221283 M；无过桥额度将被迫折价增发。",
      noteRev: "② 第 2 年集中债墙（叠加 120 M 额度）：若经营尚未触发财务契约违约，提取 83 M 循环信贷即可填平 Y2 Q2–Q3 缺口（最低可用余量 +37 M），Y2 Q4 起靠主业现金流归还。",
      mats: [
        { x: 308, h: 32, label: "400 债墙" }
      ],
      covenantFreeze: false
    },
    shock: {
      id: "shock",
      troughCash: -254,
      troughLabel: "\u2212254 M（Y2 Q2）",
      troughWithRev: "\u2212134 M（超额度）",
      negQ: "4 个季度",
      negQRev: "3 个季度（仍穿底）",
      endStr: "+177 / 450 M",
      status: "击穿零线 · 被迫稀释或违约",
      statusRev: "超额击穿 134 M 且面临契约冻结",
      statusTone: "bad",
      statusRevTone: "bad",
      dotX: 308.0,
      dotY: 158.0,
      dotText: "低谷 \u2212254 M",
      dotAnchor: "start",
      dotDx: 8,
      dotDy: 4,
      qstrip: "撞墙季 Y2 Q2 拆解：期初 128 ＋ 息前 FCF \u221220 − 利息 12（浮息跳升至 8%）− 净还本 350（到期 400 / 仅续借 50）＝ 期末现金 \u2212254 M。",
      note: "③ 高息再融资＋回款延迟：三年总息前 FCF 仍为 +465 M，但 105 M 回款推迟三个季度，叠加浮息重定价与信用收紧，现金在 Y2 Q2 跌至 \u2212254 M 并连续四季为负，经营兑现前即触发危机。",
      noteRev: "③ 高息再融资＋回款延迟（叠加 120 M 额度）：即使银行全额放款仍缺 134 M；现实中连续负现金流常先触发净债务／EBITDA 契约红线，导致循环信贷被冻结，只能折价增发或重组。",
      mats: [
        { x: 308, h: 32, label: "400 债墙" }
      ],
      covenantFreeze: true
    }
  };

  function initTroughLab(root) {
    var ctrl = root.querySelector(".e05-controls");
    var scenBtns = root.querySelectorAll("[data-e05-scen]");
    var revBtn = root.querySelector("[data-e05-revolver]");
    var lines = root.querySelectorAll("[data-e05-line]");
    var dot = root.querySelector("[data-e05-dot]");
    var dotLbl = root.querySelector("[data-e05-dot-label]");
    var revLine = root.querySelector("[data-e05-rev-line]");
    var revLbl = root.querySelector("[data-e05-rev-label]");
    var matGroup = root.querySelector("[data-e05-mats]");
    var qstrip = root.querySelector("[data-e05-qstrip]");
    var noteEl = root.querySelector("[data-e05-note]");

    if (ctrl) ctrl.hidden = false;

    var state = { scen: "shock", rev: false };

    function setKpi(key, val, tone) {
      var el = root.querySelector('[data-e05-k="' + key + '"]');
      if (!el) return;
      el.textContent = val;
      el.classList.remove("e05-t-good", "e05-t-warn", "e05-t-bad");
      if (tone) el.classList.add("e05-t-" + tone);
    }

    function renderMats(mats) {
      if (!matGroup) return;
      while (matGroup.firstChild) matGroup.removeChild(matGroup.firstChild);
      var ns = "http://www.w3.org/2000/svg";
      mats.forEach(function (m) {
        var r = document.createElementNS(ns, "rect");
        r.setAttribute("x", String(m.x - 7));
        r.setAttribute("y", String(168 - m.h));
        r.setAttribute("width", "14");
        r.setAttribute("height", String(m.h));
        r.setAttribute("rx", "2");
        r.setAttribute("class", m.h > 20 ? "e05-mbar e05-mbar-wall" : "e05-mbar");
        matGroup.appendChild(r);
        var t = document.createElementNS(ns, "text");
        t.setAttribute("x", String(m.x));
        t.setAttribute("y", String(168 - m.h - 3));
        t.setAttribute("text-anchor", "middle");
        t.setAttribute("class", "e05-mlbl");
        t.textContent = m.label;
        matGroup.appendChild(t);
      });
    }

    function render() {
      var s = SCENARIOS[state.scen] || SCENARIOS.shock;
      var revOn = state.rev;

      scenBtns.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-e05-scen") === s.id ? "true" : "false");
      });
      if (revBtn) {
        revBtn.setAttribute("aria-pressed", revOn ? "true" : "false");
      }

      lines.forEach(function (ln) {
        var active = ln.getAttribute("data-e05-line") === s.id;
        ln.classList.toggle("e05-line-active", active);
        ln.classList.toggle("e05-line-dim", !active);
      });

      if (dot) {
        dot.setAttribute("cx", String(s.dotX));
        dot.setAttribute("cy", String(s.dotY));
        dot.setAttribute("class", "e05-dot e05-dot-" + s.id);
      }
      if (dotLbl) {
        dotLbl.setAttribute("x", String(s.dotX + s.dotDx));
        dotLbl.setAttribute("y", String(s.dotY + s.dotDy));
        dotLbl.setAttribute("text-anchor", s.dotAnchor);
        dotLbl.setAttribute("class", "e05-dotlbl e05-dotlbl-" + s.id);
        dotLbl.textContent = s.dotText;
      }

      if (revLine) {
        revLine.style.display = revOn ? "" : "none";
      }
      if (revLbl) {
        revLbl.style.display = revOn ? "" : "none";
        revLbl.textContent = s.covenantFreeze
          ? "120 M 循环信贷底线（触发契约冻结风险）"
          : "120 M 循环信贷底线（契约达标可过桥）";
        revLbl.classList.toggle("e05-rev-warn", !!s.covenantFreeze);
      }

      renderMats(s.mats);

      var tone = revOn ? s.statusRevTone : s.statusTone;
      setKpi("trough", revOn ? s.troughWithRev : s.troughLabel, tone);
      setKpi("negq", revOn ? s.negQRev : s.negQ, tone === "good" ? "good" : tone);
      setKpi("end", s.endStr, null);
      setKpi("status", revOn ? s.statusRev : s.status, tone);

      if (qstrip) qstrip.textContent = s.qstrip;
      if (noteEl) noteEl.textContent = revOn ? s.noteRev : s.note;
    }

    scenBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        state.scen = b.getAttribute("data-e05-scen");
        render();
      });
    });

    if (revBtn) {
      revBtn.addEventListener("click", function () {
        state.rev = !state.rev;
        render();
      });
    }

    render();
  }

  document.querySelectorAll("[data-e05-trough]").forEach(initTroughLab);
})();
