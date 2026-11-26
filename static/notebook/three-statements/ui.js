(function () {
  var STEPS = [
    {
      id: "1",
      title: "\u2460 \u80a1\u4e1c\u51fa\u8d44 100,000 \uff0b \u94f6\u884c\u501f\u6b3e 50,000",
      note: "\u501f\u94b1\u548c\u80a1\u4e1c\u51fa\u8d44\u5c5e\u4e8e\u878d\u8d44\u6d3b\u52a8\uff0c\u4e0d\u662f\u7ecf\u8425\u6536\u5165\uff1b\u5229\u6da6\u8868\u4e3a 0\uff0c\u8d44\u4ea7\u8d1f\u503a\u8868\u73b0\u91d1\u4e0e\u8d1f\u503a/\u6743\u76ca\u540c\u6b65\u589e\u52a0\u3002",
      is: { rev: 0, cogs: 0, opex: 0, dep: 0, intTax: 0, ni: 0 },
      cf: { cfo: 0, cfi: 0, cff: 150000, cash: 150000 },
      bs: { cash: 150000, ar: 0, inv: 0, ppe: 0, ta: 150000, ap: 0, debt: 50000, pic: 100000, re: 0, tle: 150000 },
      hi: ["cf-cff", "cf-cash", "bs-cash", "bs-debt", "bs-pic"]
    },
    {
      id: "2",
      title: "\u2461 \u73b0\u91d1 60,000 \u8d2d\u4e70\u751f\u4ea7\u8bbe\u5907",
      note: "\u4e70\u8bbe\u5907\u662f\u8d44\u672c\u5f00\u652f\uff08\u6295\u8d44\u73b0\u91d1\u6d41 \u221260,000\uff09\uff0c\u53ea\u662f\u628a\u73b0\u91d1\u6362\u6210\u56fa\u5b9a\u8d44\u4ea7\uff0c\u5f53\u5929\u4e0d\u8ba1\u5165\u5229\u6da6\u8868\u8d39\u7528\u3002",
      is: { rev: 0, cogs: 0, opex: 0, dep: 0, intTax: 0, ni: 0 },
      cf: { cfo: 0, cfi: -60000, cff: 150000, cash: 90000 },
      bs: { cash: 90000, ar: 0, inv: 0, ppe: 60000, ta: 150000, ap: 0, debt: 50000, pic: 100000, re: 0, tle: 150000 },
      hi: ["cf-cfi", "cf-cash", "bs-cash", "bs-ppe"]
    },
    {
      id: "3",
      title: "\u2462 \u8d4a\u8d2d 40,000 \u539f\u6750\u6599\u5165\u5e93",
      note: "\u539f\u6599\u5c1a\u672a\u5356\u51fa\u4e14\u5c1a\u672a\u4ed8\u6b3e\uff1a\u5229\u6da6\u8868\u4e0e\u73b0\u91d1\u6d41\u5747\u4e0d\u53d8\uff0c\u8d44\u4ea7\u8d1f\u503a\u8868\u540c\u65f6\u591a\u51fa 40,000 \u5b58\u8d27\u4e0e 40,000 \u5e94\u4ed8\u8d26\u6b3e\u3002",
      is: { rev: 0, cogs: 0, opex: 0, dep: 0, intTax: 0, ni: 0 },
      cf: { cfo: 0, cfi: -60000, cff: 150000, cash: 90000 },
      bs: { cash: 90000, ar: 0, inv: 40000, ppe: 60000, ta: 190000, ap: 40000, debt: 50000, pic: 100000, re: 0, tle: 190000 },
      hi: ["bs-inv", "bs-ap"]
    },
    {
      id: "4",
      title: "\u2463 \u4ea4\u4ed8\u552e\u51fa 75,000\uff08\u73b0\u6536 45,000 \uff0b \u8d4a\u9500 30,000\uff09",
      note: "\u4ea7\u54c1\u4ea4\u4ed8\u5373\u786e\u8ba4\u6536\u5165 75,000\u3001\u7ed3\u8f6c\u5b58\u8d27\u6210\u672c 30,000\uff08\u6bdb\u5229 45,000\uff09\uff1b\u73b0\u91d1\u53ea\u56de\u6765 45,000\uff0c\u672a\u6536\u7684 30,000 \u8fdb\u5165\u5e94\u6536\u8d26\u6b3e\u3002",
      is: { rev: 75000, cogs: -30000, opex: 0, dep: 0, intTax: 0, ni: 45000 },
      cf: { cfo: 45000, cfi: -60000, cff: 150000, cash: 135000 },
      bs: { cash: 135000, ar: 30000, inv: 10000, ppe: 60000, ta: 235000, ap: 40000, debt: 50000, pic: 100000, re: 45000, tle: 235000 },
      hi: ["is-rev", "is-cogs", "is-ni", "cf-cfo", "cf-cash", "bs-cash", "bs-ar", "bs-inv", "bs-re"]
    },
    {
      id: "5",
      title: "\u2464 \u4ed8\u5de5\u8d44\u5229\u606f\u7a0e 25,000 \uff0b \u8ba1\u63d0\u6298\u65e7 3,000",
      note: "\u5de5\u8d44\u623f\u79df\u3001\u5229\u606f\u4e0e\u6240\u5f97\u7a0e\u5171\u6d41\u51fa\u73b0\u91d1 25,000\uff1b\u6298\u65e7 3,000 \u6263\u51cf\u51c0\u5229\u6da6\u548c\u8bbe\u5907\u51c0\u503c\u5374\u4e0d\u82b1\u73b0\u91d1\uff0c\u7ecf\u8425\u73b0\u91d1\u6d41 +20,000 \u9ad8\u4e8e\u51c0\u5229\u6da6 +17,000\u3002",
      is: { rev: 75000, cogs: -30000, opex: -20000, dep: -3000, intTax: -5000, ni: 17000 },
      cf: { cfo: 20000, cfi: -60000, cff: 150000, cash: 110000 },
      bs: { cash: 110000, ar: 30000, inv: 10000, ppe: 57000, ta: 207000, ap: 40000, debt: 50000, pic: 100000, re: 17000, tle: 207000 },
      hi: ["is-opex", "is-dep", "is-inttax", "is-ni", "cf-cfo", "cf-cash", "bs-cash", "bs-ppe", "bs-re"]
    },
    {
      id: "6",
      title: "\u2465 \u6d3e\u53d1\u73b0\u91d1\u80a1\u606f 5,000\uff08\u671f\u672b\u5168\u8c8c\uff09",
      note: "\u5206\u7ea2\u5c5e\u4e8e\u5229\u6da6\u5206\u914d\uff0c\u4e0d\u6539\u53d8\u5229\u6da6\u8868\u51c0\u5229\u6da6\uff08\u4ecd\u4e3a 17,000\uff09\uff1b\u73b0\u91d1\u4ece\u878d\u8d44\u6d3b\u52a8\u6d41\u51fa 5,000\uff0c\u671f\u672b\u7559\u5b58\u6536\u76ca\u843d\u5728 12,000\uff0c\u4e09\u8868\u4e25\u4e1d\u5408\u7f1d\u3002",
      is: { rev: 75000, cogs: -30000, opex: -20000, dep: -3000, intTax: -5000, ni: 17000 },
      cf: { cfo: 20000, cfi: -60000, cff: 145000, cash: 105000 },
      bs: { cash: 105000, ar: 30000, inv: 10000, ppe: 57000, ta: 202000, ap: 40000, debt: 50000, pic: 100000, re: 12000, tle: 202000 },
      hi: ["cf-cff", "cf-cash", "bs-cash", "bs-re"]
    }
  ];

  function fmt(v, signed) {
    if (v === 0) return "0";
    var abs = Math.abs(v).toLocaleString("en-US");
    if (v < 0) return "\u2212" + abs;
    return signed ? "+" + abs : abs;
  }

  function initLedger(root) {
    var btnsWrap = root.querySelector(".e01-steps");
    var btns = root.querySelectorAll("[data-e01-step]");
    var noteEl = root.querySelector("[data-e01-note]");
    if (btnsWrap) btnsWrap.hidden = false;

    function setField(key, text) {
      var el = root.querySelector('[data-e01-v="' + key + '"]');
      if (el) el.textContent = text;
    }

    function render(stepId) {
      var s = STEPS.find(function (x) { return x.id === stepId; }) || STEPS[STEPS.length - 1];
      setField("is-rev", fmt(s.is.rev, false));
      setField("is-cogs", fmt(s.is.cogs, true));
      setField("is-opex", fmt(s.is.opex, true));
      setField("is-dep", fmt(s.is.dep, true));
      setField("is-inttax", fmt(s.is.intTax, true));
      setField("is-ni", fmt(s.is.ni, true));

      setField("cf-cfo", fmt(s.cf.cfo, true));
      setField("cf-cfi", fmt(s.cf.cfi, true));
      setField("cf-cff", fmt(s.cf.cff, true));
      setField("cf-cash", fmt(s.cf.cash, false));

      setField("bs-cash", fmt(s.bs.cash, false));
      setField("bs-ar", fmt(s.bs.ar, false));
      setField("bs-inv", fmt(s.bs.inv, false));
      setField("bs-ppe", fmt(s.bs.ppe, false));
      setField("bs-ta", fmt(s.bs.ta, false));
      setField("bs-ap", fmt(s.bs.ap, false));
      setField("bs-debt", fmt(s.bs.debt, false));
      setField("bs-pic", fmt(s.bs.pic, false));
      setField("bs-re", fmt(s.bs.re, false));
      setField("bs-tle", fmt(s.bs.tle, false));

      root.querySelectorAll("[data-e01-row]").forEach(function (row) {
        var k = row.getAttribute("data-e01-row");
        row.classList.toggle("e01-hi", s.hi.indexOf(k) !== -1);
      });
      if (noteEl) noteEl.textContent = s.title + "\uff1a" + s.note;

      btns.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-e01-step") === s.id ? "true" : "false");
      });
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        render(b.getAttribute("data-e01-step"));
      });
    });

    render("6");
  }

  document.querySelectorAll("[data-e01-ledger]").forEach(initLedger);
})();
