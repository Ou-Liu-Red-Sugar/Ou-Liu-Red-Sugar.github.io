(function () {
  var PRESETS = {
    snow: {
      id: "snow",
      label: "SNOW FY26 \u00b7 \u9ad8 SBC \u79d1\u6280",
      subtitle: "Snowflake FY2026\uff08\u622a\u81f3 2026-01-31\uff09\u00b7 \u53c2\u8003\u4ef7 173.06 \u7f8e\u5143\uff082026-02-26 \u6536\u76d8\uff09",
      unit: "M \u7f8e\u5143",
      price: 173.06,
      gaapProfit: -1331.616,
      gaapShares: 337.493,
      mgmtProfit: 465.893,
      mgmtShares: 372.323,
      positiveShares: 372.323,
      taxRateOnPreTax: 138.193 / 1933.181,
      taxExplain: "\u914d\u5957\u6240\u5f97\u7a0e\u8c03\u8282\uff08\u6309\u516c\u53f8\u7efc\u5408\u7a0e\u8d1f\u6bd4\u4f8b 7.15% \u968f\u5df2\u52fe\u9009\u7a0e\u524d\u9879\u8054\u52a8\uff09",
      items: [
        {
          id: "office",
          name: "\u529e\u516c\u573a\u6240\u9000\u79df\u8d44\u4ea7\u51cf\u503c",
          desc: "San Mateo \u529e\u516c\u697c\u9000\u79df\u4e00\u6b21\u6027\u51cf\u503c\u51c0\u989d",
          badge: "\u4e00\u6b21\u6027",
          badgeClass: "",
          warn: false,
          amount: 108.627,
          taxable: true,
          defaultChecked: true
        },
        {
          id: "other",
          name: "\u5e76\u8d2d\u8d39\u3001\u503a\u52a1\u53d1\u884c\u644a\u9500\u53ca\u91cd\u7ec4\u51b2\u56de\u51c0\u989d",
          desc: "\u5e76\u8d2d\u4e0e\u503a\u52a1\u644a\u9500 +16.5\u3001\u5b50\u516c\u53f8\u91cd\u7ec4\u51b2\u56de \u221212.7\u3001\u5c11\u6570\u80a1\u4e1c +2.5",
          badge: "\u5076\u53d1\u51c0\u9879",
          badgeClass: "",
          warn: false,
          amount: 6.277,
          preTaxPart: 3.756,
          taxable: true,
          defaultChecked: true
        },
        {
          id: "intangibles",
          name: "\u5e76\u8d2d\u65e0\u5f62\u8d44\u4ea7\u644a\u9500",
          desc: "\u6536\u8d2d\u8bb0\u8d26\u5f62\u6210\u7684\u53ef\u8fa8\u8ba4\u65e0\u5f62\u8d44\u4ea7\u644a\u9500",
          badge: "\u89c6\u7528\u9014",
          badgeClass: "e06-bmid",
          warn: false,
          amount: 110.113,
          taxable: true,
          defaultChecked: false
        },
        {
          id: "sbc",
          name: "\u80a1\u6743\u6fc0\u52b1\u53ca\u76f8\u5173\u85aa\u8d44\u7a0e\uff08SBC\uff09",
          desc: "\u542b 1,599.5 M \u80a1\u6743\u6fc0\u52b1\u8d39\u4e0e 69.6 M \u96c7\u4e3b\u85aa\u8d44\u7a0e\uff0c\u5360\u6536\u5165 36.5%",
          badge: "\u8b66\u60d5 \u00b7 \u5e38\u6001\u85aa\u916c",
          badgeClass: "e06-bwarn",
          warn: true,
          amount: 1710.685,
          taxable: true,
          defaultChecked: false
        }
      ],
      noteFn: function (checked, res) {
        if (checked.indexOf("sbc") !== -1) {
          return "\u52fe\u9009\u5254\u9664 SBC \u540e\uff0cSNOW \u7531\u5de8\u4e8f\u7ffb\u4e3a\u76c8\u5229\uff0c\u540c\u65f6\u5206\u6bcd\u4ece\u53cd\u7a00\u91ca 337.5 M \u80a1\u8df3\u5347\u81f3 372.3 M \u7a00\u91ca\u80a1\uff08+10.3%\uff09\uff1b\u4f46\u540c\u671f\u56de\u8d2d\u4e0e\u80a1\u6743\u7a0e\u5df2\u6d41\u51fa 1,546.4 M \u73b0\u91d1\uff0c\u5ffd\u7565 SBC \u4f1a\u4e25\u91cd\u4f4e\u4f30\u771f\u5b9e\u4eba\u529b\u4ee3\u4ef7\u3002";
        }
        if (res.profit <= 0) {
          return "\u62d2\u7edd\u5254\u9664 1,710.7 M \u80a1\u6743\u6fc0\u52b1\u540e\uff0cSNOW \u72ec\u7acb\u53ef\u6bd4\u5229\u6da6\u4ecd\u4e3a " + fmtM(res.profit) + " M \u7f8e\u5143\uff08\u6df1\u5ea6\u4e8f\u635f\uff09\uff0c\u4e0e\u7ba1\u7406\u5c42 Non-GAAP \u7684 +465.9 M\uff08138.3 \u500d P/E\uff09\u5f62\u6210\u6839\u672c\u53cd\u5dee\u3002";
        }
        return "\u5f53\u524d\u53e3\u5f84\u4e0b SNOW \u5229\u6da6\u4e3a " + fmtM(res.profit) + " M \u7f8e\u5143\uff0c\u8bf7\u540c\u6b65\u6838\u5bf9\u80a1\u6743\u6fc0\u52b1\u644a\u8584\u4e0e\u56de\u8d2d\u73b0\u91d1\u6d41\u51fa\u3002";
      }
    },
    hpq: {
      id: "hpq",
      label: "HPQ FY25 \u00b7 \u8fde\u7eed\u91cd\u7ec4",
      subtitle: "HP Inc. FY2025\uff08\u622a\u81f3 2025-10-31\uff09\u00b7 \u53c2\u8003\u4ef7 23.98 \u7f8e\u5143\uff082025-11-26 \u6536\u76d8\uff09",
      unit: "M \u7f8e\u5143",
      price: 23.98,
      gaapProfit: 2529,
      gaapShares: 953,
      mgmtProfit: 2972,
      mgmtShares: 953,
      positiveShares: 953,
      taxRateOnPreTax: 0.16,
      taxExplain: "\u7a0e\u524d\u8c03\u8282\u9879\u914d\u5957\u6240\u5f97\u7a0e\uff08\u6309 Non-GAAP \u6709\u6548\u7a0e\u7387 16.0% \u8054\u52a8\u6263\u51cf\uff09",
      items: [
        {
          id: "oneoff",
          name: "\u5e76\u8d2d\u5904\u7f6e\u3001\u7279\u5b9a\u8bc9\u8bbc\u4e0e\u975e\u7ecf\u8425\u9000\u4f11\u91d1\u51c0\u989d",
          desc: "\u5e76\u8d2d +45 M\u3001\u6807\u51c6\u5fc5\u8981\u4e13\u5229\u8bc9\u8bbc +88 M\u3001\u9000\u4f11\u91d1\u8d37\u9879 \u221213 M",
          badge: "\u5076\u53d1\u975e\u4e3b\u4e1a",
          badgeClass: "",
          warn: false,
          amount: 120,
          taxable: true,
          defaultChecked: true
        },
        {
          id: "taxnorm",
          name: "\u4e00\u6b21\u6027\u79bb\u6563\u7a0e\u9879\u6b63\u5e38\u5316\u8c03\u8282",
          desc: "\u6263\u56de FY25 GAAP \u4e00\u6b21\u6027\u7a0e\u6536\u4f18\u60e0\uff0c\u4f7f\u57fa\u51c6\u7a0e\u7387\u56de\u5f52 16.0%",
          badge: "\u53cc\u5411\u6263\u56de",
          badgeClass: "",
          warn: false,
          amount: -287.8,
          taxable: false,
          defaultChecked: true
        },
        {
          id: "intangibles",
          name: "\u5e76\u8d2d\u65e0\u5f62\u8d44\u4ea7\u644a\u9500",
          desc: "\u5386\u53f2\u6536\u8d2d\u4ea7\u751f\u7684\u53ef\u8fa8\u8ba4\u65e0\u5f62\u8d44\u4ea7\u644a\u9500",
          badge: "\u89c6\u7528\u9014",
          badgeClass: "e06-bmid",
          warn: false,
          amount: 345,
          taxable: true,
          defaultChecked: true
        },
        {
          id: "restructuring",
          name: "\u91cd\u7ec4\u53ca\u5176\u4ed6\u8d39\u7528\uff08\u8fde\u7eed\u4e09\u5e74\u53d1\u751f\uff09",
          desc: "FY23\u2014FY25 \u5206\u522b\u4e3a 527 / 301 / 405 M\uff0c\u540c\u65e5\u518d\u5ba3 650 M \u65b0\u8ba1\u5212",
          badge: "\u8b66\u60d5 \u00b7 \u5e74\u5e74\u91cd\u7ec4",
          badgeClass: "e06-bwarn",
          warn: true,
          amount: 405,
          taxable: true,
          defaultChecked: false
        }
      ],
      noteFn: function (checked, res) {
        if (checked.indexOf("restructuring") === -1) {
          return "\u628a\u8fde\u7eed\u591a\u5e74\u53d1\u751f\u7684 405 M \u91cd\u7ec4\u8d39\u7559\u56de\u5229\u6da6\u8868\u540e\uff0cHPQ \u72ec\u7acb\u53ef\u6bd4\u5229\u6da6\u964d\u81f3 " + fmtM(res.profit) + " M\uff08EPS " + res.eps.toFixed(2) + " \u7f8e\u5143\uff09\uff0c\u5e02\u76c8\u7387\u7531\u7ba1\u7406\u5c42\u53e3\u5f84\u7684 7.7 \u500d\u5347\u81f3 " + res.pe.toFixed(1) + " \u500d\uff0c\u4f30\u503c\u5e76\u975e\u8868\u9762\u90a3\u4e48\u4fbf\u5b9c\u3002";
        }
        return "\u5f53\u524d\u5df2\u52fe\u9009\u5254\u9664 405 M \u91cd\u7ec4\u8d39\uff1b\u7531\u4e8e HPQ \u5df2\u8fde\u7eed\u4e09\u5e74\u53d1\u751f\u91cd\u7ec4\u4e14\u65b0\u589e FY26\u2014FY28 \u7ea6 650 M \u8ba1\u5212\uff0c\u6309\u4e00\u6b21\u6027\u566a\u58f0\u62b9\u6389\u4f1a\u7cfb\u7edf\u6027\u9ad8\u4f30\u5e38\u6001\u76c8\u5229\u3002";
      }
    },
    msft: {
      id: "msft",
      label: "MSFT FY26 \u00b7 \u53cc\u5411\u5254\u9664",
      subtitle: "Microsoft FY2026\uff08\u622a\u81f3 2026-06-30\uff09\u00b7 \u53c2\u8003\u4ef7 451.10 \u7f8e\u5143\uff082026-07-30 \u6536\u76d8\uff09",
      unit: "M \u7f8e\u5143",
      price: 451.10,
      gaapProfit: 133749,
      gaapShares: 7453,
      mgmtProfit: 128786,
      mgmtShares: 7453,
      positiveShares: 7453,
      taxRateOnPreTax: 0,
      taxExplain: "OpenAI \u9879\u4e3a\u516c\u53f8\u62ab\u9732\u7684\u7a0e\u540e\u51c0\u5f71\u54cd\uff1b\u6a21\u62df SBC \u9879\u5df2\u6309 FY26 \u6709\u6548\u7a0e\u7387 19.4% \u6298\u7b97\u7a0e\u540e",
      items: [
        {
          id: "openai",
          name: "\u5254\u9664 OpenAI \u6743\u76ca\u6cd5\u6295\u8d44\u51c0\u6536\u76ca\uff08\u7a0e\u540e\uff09",
          desc: "\u53cc\u5411\u5bf9\u79f0\uff1aFY25 \u4e8f\u635f\u65f6\u52a0\u56de +3,620 M\uff0cFY26 \u76c8\u5229\u65f6\u5411\u4e0b\u6263\u56de \u22124,963 M",
          badge: "\u53cc\u5411\u5bf9\u79f0",
          badgeClass: "",
          warn: false,
          amount: -4963,
          taxable: false,
          defaultChecked: true
        },
        {
          id: "sim_sbc",
          name: "\u3010\u53cd\u5411\u5bf9\u7167\u3011\u6a21\u62df\u82e5\u6548\u4eff\u540c\u884c\u52a0\u56de SBC\uff08\u7a0e\u540e\u4f30\u7b97\uff09",
          desc: "MSFT \u5b9e\u9645\u5e76\u672a\u5254\u9664 12,405 M \u80a1\u6743\u6fc0\u52b1\uff1b\u6b64\u9879\u4ec5\u7528\u4e8e\u6f14\u793a\u53e3\u5f84\u5931\u771f",
          badge: "\u6a21\u62df \u00b7 \u516c\u53f8\u672a\u5254\u9664",
          badgeClass: "e06-bwarn",
          warn: true,
          amount: 9999,
          taxable: false,
          defaultChecked: false
        }
      ],
      noteFn: function (checked, res) {
        if (checked.indexOf("sim_sbc") !== -1) {
          return "\u5047\u8bbe MSFT \u6548\u4eff\u9ad8 SBC \u8f6f\u4ef6\u540c\u884c\u5c06 12,405 M \u80a1\u6743\u6fc0\u52b1\u52a0\u56de\uff08\u7a0e\u540e\u7ea6 +10.0 B\uff09\uff0c\u5e02\u76c8\u7387\u4f1a\u88ab\u4eba\u4e3a\u538b\u4f4e\u81f3 " + res.pe.toFixed(1) + " \u500d\uff1b\u8de8\u516c\u53f8\u6bd4\u500d\u6570\u524d\u5fc5\u987b\u5148\u5bf9\u9f50 SBC \u53e3\u5f84\u3002";
        }
        if (checked.indexOf("openai") !== -1) {
          return "MSFT \u662f\u514b\u5236\u578b Non-GAAP \u7684\u6837\u672c\uff1a\u5411\u4e0b\u6263\u56de 4,963 M \u975e\u4e3b\u4e1a OpenAI \u6536\u76ca\u4e14\u4fdd\u7559\u5168\u90e8 SBC\uff0cNon-GAAP \u5229\u6da6\u53cd\u800c\u6bd4 GAAP \u4f4e 3.7%\uff0cP/E \u4ece 25.1 \u500d\u5347\u81f3 26.1 \u500d\u3002";
        }
        return "\u672a\u5254\u9664 OpenAI \u6536\u76ca\u65f6\u76f4\u63a5\u91c7\u7528 GAAP 133,749 M\uff08P/E 25.1 \u500d\uff09\uff0c\u4f46\u5176\u4e2d\u6df7\u5165\u4e86\u975e\u4e3b\u4e1a\u6743\u76ca\u6cd5\u6295\u8d44\u5f71\u54cd\u7684\u5468\u671f\u6ce2\u52a8\u3002";
      }
    }
  };

  function fmtM(v) {
    var r = Math.round(Math.abs(v) * 10) / 10;
    var isInt = Math.abs(r - Math.round(r)) < 0.001;
    var s = r >= 1000
      ? r.toLocaleString("en-US", { minimumFractionDigits: isInt ? 0 : 1, maximumFractionDigits: 1 })
      : (isInt ? String(Math.round(r)) : r.toFixed(1));
    if (v < -0.05) return "\u2212" + s;
    if (v > 0.05) return "+" + s;
    return "0";
  }

  function fmtSignedM(v) {
    return fmtM(v) + " M";
  }

  function fmtEps(v) {
    var abs = Math.abs(v).toFixed(2);
    return (v < -0.005 ? "\u2212" : "") + abs + " \u7f8e\u5143";
  }

  function fmtPe(price, eps) {
    if (eps <= 0.005) return "\u4e8f\u635f\uff08\u4e0d\u9002\u7528\uff09";
    return (price / eps).toFixed(1) + " \u500d";
  }

  function initLab(root) {
    var presetWrap = root.querySelector(".e06-presets");
    var presetBtns = root.querySelectorAll("[data-e06-preset]");
    var itemsWrap = root.querySelector("[data-e06-items]");
    var subEl = root.querySelector("[data-e06-sub]");
    var taxLabelEl = root.querySelector("[data-e06-tax-label]");
    var taxValEl = root.querySelector("[data-e06-tax-val]");
    var gapEl = root.querySelector("[data-e06-gap]");
    var noteEl = root.querySelector("[data-e06-note]");
    var userCard = root.querySelector("[data-e06-user-card]");
    if (presetWrap) presetWrap.hidden = false;

    var state = {
      preset: "snow",
      checked: {}
    };

    Object.keys(PRESETS).forEach(function (k) {
      state.checked[k] = PRESETS[k].items.filter(function (it) { return it.defaultChecked; }).map(function (it) { return it.id; });
    });

    function setText(key, val) {
      var el = root.querySelector('[data-e06-v="' + key + '"]');
      if (el) el.textContent = val;
    }

    function compute(p, checkedIds) {
      var preTaxSum = 0;
      var totalAdj = 0;
      p.items.forEach(function (it) {
        if (checkedIds.indexOf(it.id) !== -1) {
          totalAdj += it.amount;
          if (it.taxable) {
            preTaxSum += (typeof it.preTaxPart === "number" ? it.preTaxPart : it.amount);
          }
        }
      });
      var taxOffset = p.taxRateOnPreTax > 0 ? -(preTaxSum * p.taxRateOnPreTax) : 0;
      var profit = p.gaapProfit + totalAdj + taxOffset;
      var shares = profit > 0 ? p.positiveShares : p.gaapShares;
      var eps = profit / shares;
      var pe = eps > 0.005 ? p.price / eps : null;
      return {
        profit: profit,
        shares: shares,
        eps: eps,
        pe: pe,
        taxOffset: taxOffset
      };
    }

    function renderChecklist(p) {
      if (!itemsWrap) return;
      var checkedIds = state.checked[p.id];
      itemsWrap.innerHTML = "";
      p.items.forEach(function (it) {
        var isOn = checkedIds.indexOf(it.id) !== -1;
        var label = document.createElement("label");
        label.className = "e06-item" + (isOn ? " e06-checked" : "") + (it.warn ? " e06-item-warn" : "");

        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = isOn;
        cb.setAttribute("data-e06-item", it.id);
        cb.addEventListener("change", function () {
          var arr = state.checked[p.id];
          var idx = arr.indexOf(it.id);
          if (cb.checked && idx === -1) arr.push(it.id);
          if (!cb.checked && idx !== -1) arr.splice(idx, 1);
          label.classList.toggle("e06-checked", cb.checked);
          updateOutputs(p);
        });

        var body = document.createElement("span");
        var nameSpan = document.createElement("span");
        nameSpan.className = "e06-iname";
        nameSpan.textContent = it.name;
        var badge = document.createElement("span");
        badge.className = "e06-ibadge" + (it.badgeClass ? " " + it.badgeClass : "");
        badge.textContent = it.badge;
        nameSpan.appendChild(badge);
        var descSpan = document.createElement("span");
        descSpan.className = "e06-idesc";
        descSpan.textContent = it.desc;
        body.appendChild(nameSpan);
        body.appendChild(descSpan);

        var val = document.createElement("span");
        val.className = "e06-ival";
        val.textContent = fmtSignedM(it.amount);

        label.appendChild(cb);
        label.appendChild(body);
        label.appendChild(val);
        itemsWrap.appendChild(label);
      });
    }

    function updateOutputs(p) {
      var checkedIds = state.checked[p.id];
      var res = compute(p, checkedIds);
      var gaapEps = p.gaapProfit / p.gaapShares;
      var mgmtEps = p.mgmtProfit / p.mgmtShares;
      var mgmtPe = mgmtEps > 0.005 ? p.price / mgmtEps : null;

      if (subEl) subEl.textContent = p.subtitle;
      if (taxLabelEl) taxLabelEl.textContent = p.taxExplain;
      if (taxValEl) taxValEl.textContent = p.taxRateOnPreTax > 0 ? fmtSignedM(res.taxOffset) : "\u5df2\u542b\u7a0e\u540e\u53e3\u5f84";

      setText("gaap-profit", fmtM(p.gaapProfit) + " M");
      setText("gaap-eps", "EPS " + fmtEps(gaapEps) + " \u00b7 " + p.gaapShares.toFixed(p.gaapShares >= 500 ? 0 : 1) + " M \u80a1");
      setText("gaap-pe", "P/E " + fmtPe(p.price, gaapEps));

      setText("mgmt-profit", fmtM(p.mgmtProfit) + " M");
      setText("mgmt-eps", "EPS " + fmtEps(mgmtEps) + " \u00b7 " + p.mgmtShares.toFixed(p.mgmtShares >= 500 ? 0 : 1) + " M \u80a1");
      setText("mgmt-pe", "P/E " + fmtPe(p.price, mgmtEps));

      setText("user-profit", fmtM(res.profit) + " M");
      setText("user-eps", "EPS " + fmtEps(res.eps) + " \u00b7 " + res.shares.toFixed(res.shares >= 500 ? 0 : 1) + " M \u80a1");
      setText("user-pe", "P/E " + fmtPe(p.price, res.eps));

      if (userCard) userCard.classList.toggle("e06-kpi-loss", res.profit <= 0);

      if (gapEl) {
        var diffProfit = res.profit - p.mgmtProfit;
        if (Math.abs(diffProfit) < 0.5) {
          gapEl.textContent = "\u4e0e\u7ba1\u7406\u5c42 Non-GAAP \u4e00\u81f4\uff1a\u5229\u6da6\u5dee 0\uff0c\u5e02\u76c8\u7387\u540c\u4e3a " + fmtPe(p.price, res.eps) + "\u3002";
        } else if (res.pe === null && mgmtPe !== null) {
          gapEl.textContent = "\u53e3\u5f84\u843d\u5dee\uff1a\u72ec\u7acb\u5229\u6da6\u6bd4\u7ba1\u7406\u5c42\u4f4e " + Math.abs(diffProfit).toLocaleString("en-US", { maximumFractionDigits: 1 }) + " M\uff0c\u7531 " + mgmtPe.toFixed(1) + " \u500d P/E \u76f4\u63a5\u8f6c\u4e3a\u4e8f\u635f\u3002";
        } else if (res.pe !== null && mgmtPe !== null) {
          var peDiff = res.pe - mgmtPe;
          var dir = peDiff > 0 ? "\u66f4\u8d35 +" : "\u66f4\u4f4e \u2212";
          gapEl.textContent = "\u53e3\u5f84\u843d\u5dee\uff1a\u72ec\u7acb\u5229\u6da6\u8f83\u7ba1\u7406\u5c42 " + fmtM(diffProfit) + " M\uff0c\u5e02\u76c8\u7387" + dir + Math.abs(peDiff).toFixed(1) + " \u500d\uff08" + mgmtPe.toFixed(1) + " \u2192 " + res.pe.toFixed(1) + " \u500d\uff09\u3002";
        } else {
          gapEl.textContent = "\u53e3\u5f84\u843d\u5dee\uff1a\u72ec\u7acb\u5229\u6da6\u8f83\u7ba1\u7406\u5c42 " + fmtM(diffProfit) + " M\u3002";
        }
      }

      if (noteEl) noteEl.textContent = p.noteFn(checkedIds, res);
    }

    function selectPreset(id) {
      var p = PRESETS[id] || PRESETS.snow;
      state.preset = p.id;
      presetBtns.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-e06-preset") === p.id ? "true" : "false");
      });
      renderChecklist(p);
      updateOutputs(p);
    }

    presetBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        selectPreset(b.getAttribute("data-e06-preset"));
      });
    });

    selectPreset("snow");
  }

  document.querySelectorAll("[data-e06-nongaap]").forEach(initLab);
})();
