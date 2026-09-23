// The source keeps every asset panel readable without JavaScript.
function initializeAssetOverviews() {
  document.querySelectorAll('[data-asset-overview]').forEach((overview, index) => {
    const panels = Array.from(overview.querySelectorAll('[data-asset-panel]'));
    const choices = Array.from(overview.querySelectorAll('button[data-asset-choice]'));
    if (!panels.length || !choices.length) return;

    const panelByKey = new Map(panels.map(panel => [panel.dataset.assetPanel, panel]));
    const validChoices = choices.filter(choice => panelByKey.has(choice.dataset.assetChoice));
    if (!validChoices.length) return;

    panels.forEach(panel => {
      panel.id ||= `asset-overview-${index + 1}-${panel.dataset.assetPanel}`;
      const heading = panel.querySelector('h3');
      if (heading) {
        heading.id ||= `${panel.id}-heading`;
        panel.setAttribute('aria-labelledby', heading.id);
      }
    });
    validChoices.forEach(choice => {
      choice.setAttribute('aria-controls', panelByKey.get(choice.dataset.assetChoice).id);
    });

    const select = selectedChoice => {
      const selectedPanel = panelByKey.get(selectedChoice.dataset.assetChoice);
      choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === selectedChoice)));
      panels.forEach(panel => { panel.hidden = panel !== selectedPanel; });
    };

    validChoices.forEach(choice => choice.addEventListener('click', () => select(choice)));
    select(validChoices.find(choice => choice.dataset.assetChoice === 'equity') || validChoices[0]);
    overview.classList.add('is-enhanced');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAssetOverviews, { once: true });
} else {
  initializeAssetOverviews();
}
