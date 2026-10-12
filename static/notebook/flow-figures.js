// Calculation chains: change the current price and update each scenario's return and the ratio.
(() => {
  const SCALE = 1.2; // a return of ±120% fills half of the bar track
  const pct = value => `${value >= 0 ? '+' : '−'}${Math.abs(value * 100).toFixed(1)}%`;

  function paint(figure, price) {
    let up = null, down = null;
    figure.querySelectorAll('[data-cc-outcome]').forEach(lane => {
      const r = Number(lane.dataset.ccOutcome) / price - 1;
      const cell = lane.querySelector('[data-cc-return]');
      const bar = cell.querySelector('.cc-bar');
      const label = cell.querySelector('.cc-value');
      const half = Math.min(Math.abs(r) / SCALE, 1) * 50;
      const side = r >= 0 ? 'cc-up' : 'cc-down';
      bar.className = `cc-bar ${side}`;
      bar.style.width = `${half * 2}%`;
      // Long bars carry their value inside the bar so it never leaves the track.
      const inside = half > 30;
      label.className = `cc-value ${side}${inside ? ' cc-inside' : ''}`;
      label.textContent = pct(r);
      const outer = `calc(50% + ${half}% + 6px)`, inner = `calc(50% - ${half}% + 6px)`;
      label.style.left = r >= 0 ? (inside ? 'auto' : outer) : (inside ? inner : 'auto');
      label.style.right = r >= 0 ? (inside ? inner : 'auto') : (inside ? 'auto' : outer);
      if (lane.dataset.ccRole === 'up') up = r;
      if (lane.dataset.ccRole === 'down') down = -r;
    });
    const ratio = figure.querySelector('[data-cc-ratio]');
    if (ratio && up !== null && down !== null) {
      ratio.textContent = down > 0 && up > 0 ? `${(up / down).toFixed(2)}∶1` : '—';
    }
    const output = figure.querySelector('[data-cc-price-output]');
    if (output) output.textContent = String(price);
    figure.querySelectorAll('[data-cc-price]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.ccPrice) === price));
    });
  }

  document.querySelectorAll('[data-calc-chain]').forEach(figure => {
    const slider = figure.querySelector('input[type=range]');
    if (!slider) return;
    figure.querySelector('.cc-presets')?.removeAttribute('hidden');
    slider.disabled = false;
    const update = () => paint(figure, Number(slider.value));
    slider.addEventListener('input', update);
    figure.querySelectorAll('[data-cc-price]').forEach(button => {
      button.addEventListener('click', () => { slider.value = button.dataset.ccPrice; update(); });
    });
    update();
  });
})();

// View switches: show one authored view at a time; every view stays in the page source.
// Elements marked data-ff-series stay visible as outlines when their view is not selected.
// A switch group may sit inside another; each group shows and hides only the elements nearest to it,
// and outlines every series it offers a choice for, including copies inside a nested group.
(() => {
  document.querySelectorAll('[data-ff-views]').forEach(figure => {
    const own = selector => [...figure.querySelectorAll(selector)].filter(el => el.closest('[data-ff-views]') === figure);
    const buttons = own('[data-ff-view-choice]');
    const choices = new Set(buttons.map(button => button.dataset.ffViewChoice));
    const series = [...figure.querySelectorAll('[data-ff-series]')].filter(el => choices.has(el.dataset.ffSeries));
    const show = view => {
      own('[data-ff-only]').forEach(el => { el.hidden = el.dataset.ffOnly !== view; });
      series.forEach(el => el.classList.toggle('is-ghost', el.dataset.ffSeries !== view));
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ffViewChoice === view)));
      figure.dataset.ffView = view;
    };
    buttons.forEach(button => button.addEventListener('click', () => show(button.dataset.ffViewChoice)));
    const pressed = buttons.find(button => button.getAttribute('aria-pressed') === 'true');
    if (pressed) show(pressed.dataset.ffViewChoice);
    own('.ff-switch')[0]?.removeAttribute('hidden');
    figure.classList.add('is-switching');
  });
})();
