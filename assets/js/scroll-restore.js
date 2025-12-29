(function () {
  // Key per page; keep hash separate so anchors still work
  function key() {
    return "scrollY:" + location.pathname + location.search;
  }

  // If URL has #hash, let browser handle it (do not override).
  function hasHash() {
    return !!(location.hash && location.hash.length > 1);
  }

  // Save on unload (full reload)
  window.addEventListener("beforeunload", function () {
    try {
      if (!hasHash()) {
        sessionStorage.setItem(key(), String(window.scrollY || 0));
      }
    } catch (e) {}
  });

  // Restore on load
  window.addEventListener("load", function () {
    try {
      if (hasHash()) return;
      var v = sessionStorage.getItem(key());
      if (v == null) return;
      var y = parseInt(v, 10);
      if (Number.isFinite(y) && y >= 0) {
        // Wait a tick so layout settles (MathJax / images)
        setTimeout(function () {
          window.scrollTo(0, y);
        }, 50);
      }
    } catch (e) {}
  });
})();
