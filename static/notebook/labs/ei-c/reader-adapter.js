/* EI-C only: selected branch, full same-source Agent text and iframe alignment. */
(function () {
  'use strict';
  function init() {
    const article = document.querySelector('.entry-article');
    const match = (article?.dataset.entryId || '').match(/^zh-ei(05|14)$/);
    if (!match) return;
    const body = article.querySelector('.entry-body');
    const context = document.getElementById('teaching-context');
    if (!body || !context) return;
    const node = 'EI-' + match[1], base = '/notebook/labs/ei-c/agent/' + node;
    const original = context.value;
    const panels = [...body.querySelectorAll('[data-reading-branch]')];
    const buttons = [...body.querySelectorAll('[data-select-reading-branch]')];
    let selected = 'application', variants = null, pending = null;
    const replay = new WeakSet();

    function load() {
      if (variants) return Promise.resolve(variants);
      if (!pending) pending = fetch(base + '.variants.json').then(response => {
        if (!response.ok) throw new Error('Teaching material unavailable');
        return response.json();
      }).then(value => {
        if (!['application', 'research', 'all'].every(key => typeof value[key] === 'string')) {
          throw new Error('Incomplete teaching material');
        }
        variants = value;
        return variants;
      }).catch(error => { pending = null; throw error; });
      return pending;
    }
    function sync(frame) {
      if (new URL(frame.src, location.href).origin === location.origin) {
        frame.contentWindow?.postMessage({ type: 'notebook-reading-branch', branch: selected }, location.origin);
      }
    }
    function activate(key) {
      if (!['application', 'research', 'all'].includes(key)) return;
      selected = key;
      panels.forEach(panel => { panel.hidden = key !== 'all' && panel.dataset.readingBranch !== key; });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.selectReadingBranch === key)));
      for (const link of document.querySelectorAll('.entry-toc a[href^="#"]')) {
        let id; try { id = decodeURIComponent(link.hash.slice(1)); } catch (_) { continue; }
        const panel = document.getElementById(id)?.closest('[data-reading-branch]');
        if (panels.includes(panel)) (link.closest('li') || link).hidden = panel.hidden;
      }
      for (const link of article.querySelectorAll('.entry-actions a[href*="/agent/"]')) {
        link.href = base + '.' + key + '.agent.md';
      }
      if (variants) context.value = variants[key];
      body.querySelectorAll('iframe').forEach(sync);
    }
    function fromHash() {
      let id; try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return false; }
      const panel = document.getElementById(id)?.closest('[data-reading-branch]');
      if (panels.includes(panel)) { activate(panel.dataset.readingBranch); return true; }
      return false;
    }
    buttons.forEach(button => button.addEventListener('click', () => activate(button.dataset.selectReadingBranch)));
    body.querySelectorAll('iframe').forEach(frame => frame.addEventListener('load', () => sync(frame)));
    activate(selected); fromHash();
    load().then(() => activate(selected)).catch(() => {});
    addEventListener('hashchange', fromHash);
    addEventListener('beforeprint', () => panels.forEach(panel => { panel.hidden = false; }));
    addEventListener('afterprint', () => activate(selected));
    addEventListener('message', event => {
      if (event.origin !== location.origin || event.data?.type !== 'eic-reading-branch') return;
      const frame = [...body.querySelectorAll('iframe')].find(item => item.contentWindow === event.source);
      if (!frame || !['application', 'research'].includes(event.data.branch)) return;
      if (selected === 'all') return;
      // Also update the common site's branch controller, whose deep-link and
      // print handlers must know the same selected branch.
      const button = buttons.find(item => item.dataset.selectReadingBranch === event.data.branch);
      if (button) button.click(); else activate(event.data.branch);
    });
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-teach]');
      if (!button || !article.contains(button)) return;
      if (replay.has(button)) { replay.delete(button); return; }
      if (variants) { context.value = variants[selected]; return; }
      event.preventDefault(); event.stopImmediatePropagation();
      button.setAttribute('aria-busy', 'true');
      load().then(() => { context.value = variants[selected]; }).catch(() => {
        // The page already carries the complete all-branch package. A failed
        // optional asset request may not present that package as branch-only.
        context.value = '当前分支文件未取得，以下提供本篇全部分支的完整材料；selected_branch=all. \n\n' + original;
      }).finally(() => {
        button.removeAttribute('aria-busy'); replay.add(button); button.click();
      });
    }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
