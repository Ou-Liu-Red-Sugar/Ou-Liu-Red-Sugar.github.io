const selector = document.querySelector('[data-path-selector]');
if (selector) {
  const tablist = selector.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = [...selector.querySelectorAll('[data-path-panel]')];
  if (tabs.length && tabs.length === panels.length) {
    const activate = (tab, focus = false) => {
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        panel.hidden = !selected;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', item.id);
        panel.tabIndex = 0;
      });
      if (focus) tab.focus({ preventScroll: true });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (index + 1) % tabs.length;
        if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        activate(tabs[next], true);
      });
    });
    activate(tabs[0]);
    tablist.hidden = false;
    selector.classList.add('paths-ready');
  }
}
