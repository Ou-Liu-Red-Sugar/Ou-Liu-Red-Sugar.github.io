// NB-P01 interactive position-sizing lab: adjust one holding's portfolio weight
// and see the asymmetric upside contribution (+80%) vs downside drag (-50%) and recovery hurdle.
(() => {
  const MAX_UP = 50;   // +50% fills the upside track
  const MAX_DOWN = 50; // -50% fills the downside track

  function render(figure, weightPct) {
    const w = weightPct / 100;
    const upPort = 80 * w;        // +80% stock -> +80*w % portfolio
    const downPort = 50 * w;      // -50% stock -> -50*w % portfolio
    const upUsd = Math.round(1000 * upPort);
    const downUsd = Math.round(1000 * downPort);
    const restRecovery = weightPct >= 100 ? Infinity : (50 * w) / (1 - w);

    const out = figure.querySelector('[data-p01-weight-output]');
    if (out) out.textContent = `${weightPct}%`;
    const usdOut = figure.querySelector('[data-p01-weight-usd]');
    if (usdOut) usdOut.textContent = `${(weightPct * 1000).toLocaleString('en-US')} 美元`;

    const upVal = figure.querySelector('[data-p01-up-val]');
    if (upVal) upVal.textContent = `+${upPort.toFixed(1)}%`;
    const upSub = figure.querySelector('[data-p01-up-sub]');
    if (upSub) upSub.textContent = `净值 +${upUsd.toLocaleString('en-US')} 美元`;
    const upBar = figure.querySelector('[data-p01-up-bar]');
    if (upBar) upBar.style.width = `${Math.min(upPort / MAX_UP * 100, 100).toFixed(1)}%`;

    const downVal = figure.querySelector('[data-p01-down-val]');
    if (downVal) downVal.textContent = `−${downPort.toFixed(1)}%`;
    const downSub = figure.querySelector('[data-p01-down-sub]');
    if (downSub) downSub.textContent = `净值 −${downUsd.toLocaleString('en-US')} 美元`;
    const downBar = figure.querySelector('[data-p01-down-bar]');
    if (downBar) downBar.style.width = `${Math.min(downPort / MAX_DOWN * 100, 100).toFixed(1)}%`;

    const rec = figure.querySelector('[data-p01-recovery]');
    if (rec) {
      rec.textContent = Number.isFinite(restRecovery)
        ? `+${restRecovery.toFixed(1)}%`
        : '—';
    }
    const restNote = figure.querySelector('[data-p01-rest-note]');
    if (restNote) {
      restNote.textContent = `若这只股票腰斩后不再回升，其余 ${100 - weightPct}% 的仓位需整体上涨 +${restRecovery.toFixed(1)}% 才能把总组合拉回 100,000 美元。`;
    }

    figure.querySelectorAll('[data-p01-preset]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(Number(btn.dataset.p01Preset) === weightPct));
    });
  }

  document.querySelectorAll('[data-p01-sizing]').forEach(figure => {
    const slider = figure.querySelector('input[type="range"]');
    if (!slider) return;
    figure.querySelector('.cc-presets')?.removeAttribute('hidden');
    slider.disabled = false;
    const sync = () => render(figure, Number(slider.value));
    slider.addEventListener('input', sync);
    figure.querySelectorAll('[data-p01-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        slider.value = btn.dataset.p01Preset;
        sync();
      });
    });
    sync();
  });
})();
