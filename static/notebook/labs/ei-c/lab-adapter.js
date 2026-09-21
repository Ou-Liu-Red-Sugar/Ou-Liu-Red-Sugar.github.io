/* Presentation only. Frozen inputs and arithmetic remain in the author engine. */
(function () {
  'use strict';
  let parentBranch = 'application', applying = false, printing = false;
  const trade = document.getElementById('exp-ei14-reallocation');
  const battery = document.getElementById('battery-application');
  function notify() { window.EIC_UI?.notify(); }
  function selectTab(id) {
    const button = trade.querySelector('[data-tab="' + id + '"]');
    if (button) button.click();
  }
  function send(branch) {
    if (window.parent !== window && !applying && !printing && parentBranch !== 'all' && parentBranch !== branch) {
      parentBranch = branch;
      window.parent.postMessage({ type: 'eic-reading-branch', branch }, location.origin);
    }
  }
  addEventListener('message', event => {
    if (event.source !== window.parent || event.origin !== location.origin || event.data?.type !== 'notebook-reading-branch') return;
    if (!['application', 'research', 'all'].includes(event.data.branch)) return;
    parentBranch = event.data.branch;
    applying = true;
    if (parentBranch === 'research') {
      if (!trade.hidden) selectTab('trade-paper');
      if (battery) battery.open = false;
    } else if (parentBranch === 'application' && !document.getElementById('trade-paper').hidden) {
      selectTab('trade-network');
    }
    applying = false; notify();
  });
  trade.querySelectorAll('[data-tab]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.tab === 'trade-paper') send('research');
    if (button.dataset.tab === 'trade-network') send('application');
  }));
  battery?.addEventListener('toggle', () => { if (battery.open) send('application'); });
  const printState = [];
  addEventListener('beforeprint', () => {
    printing = true; printState.length = 0;
    document.querySelectorAll('details').forEach(detail => { printState.push([detail, detail.open]); detail.open = true; });
  });
  addEventListener('afterprint', () => {
    printState.forEach(([detail, open]) => { detail.open = open; });
    printing = false; notify();
  });
})();
