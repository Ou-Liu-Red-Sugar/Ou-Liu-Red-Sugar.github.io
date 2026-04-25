/* =========================================================
   wiki-search.js
   Live-filter for the Wiki landing's A-Z entry list.
   Matches the input value (case-insensitive substring) against the
   `data-wiki-search-item` attribute on each <li>, which is built at
   build time from title + aliases + description.
   ========================================================= */
(function () {
  "use strict";

  function init() {
    var input = document.querySelector("[data-wiki-search]");
    var list  = document.querySelector("[data-wiki-search-list]");
    var empty = document.querySelector("[data-wiki-search-empty]");
    var count = document.querySelector("[data-wiki-search-count]");
    if (!input || !list) return;

    var items = Array.prototype.slice.call(
      list.querySelectorAll("[data-wiki-search-item]")
    );
    var total = items.length;

    function setCount(n) {
      if (!count) return;
      if (!input.value) {
        count.textContent = total + " entr" + (total === 1 ? "y" : "ies");
      } else {
        count.textContent = n + " of " + total + " match" + (n === 1 ? "" : "es");
      }
    }

    function apply() {
      var q = (input.value || "").trim().toLowerCase();
      var visible = 0;
      items.forEach(function (li) {
        var hay = li.getAttribute("data-wiki-search-item") || "";
        var match = !q || hay.indexOf(q) !== -1;
        li.hidden = !match;
        if (match) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
      setCount(visible);
    }

    input.addEventListener("input", apply);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        input.value = "";
        apply();
      }
    });

    // Initial state
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
