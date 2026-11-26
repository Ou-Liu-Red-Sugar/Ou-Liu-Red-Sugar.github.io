// NB-P02 interactive Gross vs Net exposure lab:
// Adjust Long % and Short % of 100,000 USD equity and compare market selloff vs crowding unwind.
(() => {
  const MAX_BAR = 300; // 300% fills exposure bar
  const MAX_LOSS = 30; // 30% fills stress bar

  const fmtPct = (v, signed = true) => {
    const abs = Math.abs(v).toFixed(1);
    if (!signed) return `${abs}%`;
    if (Math.abs(v) < 0.05) return '0.0%';
    return `${v > 0 ? '+' : '−'}${abs}%`;
  };

  function paint(fig, longPct, shortPct) {
    const gross = longPct + shortPct;
    const net = longPct - shortPct;
    // Scenario 1: Broad market drops -15%, long and short both drop -15% (zero alpha spread)
    const mktPnl = -0.15 * net;
    // Scenario 2: Factor crowding / reversal: long leg drops -8%, short leg rallies +8%
    const crowdPnl = -0.08 * gross;

    fig.querySelector('[data-p02-long-out]').textContent = `${longPct}%`;
    fig.querySelector('[data-p02-short-out]').textContent = `${shortPct}%`;
    fig.querySelector('[data-p02-gross]').textContent = `${gross}%`;
    fig.querySelector('[data-p02-net]').textContent = net === 0 ? '0%' : `${net > 0 ? '+' : '−'}${Math.abs(net)}%`;

    fig.querySelector('[data-p02-long-bar]').style.width = `${Math.min(longPct / MAX_BAR * 100, 100).toFixed(1)}%`;
    fig.querySelector('[data-p02-short-bar]').style.width = `${Math.min(shortPct / MAX_BAR * 100, 100).toFixed(1)}%`;

    const mktEl = fig.querySelector('[data-p02-mkt-val]');
    mktEl.textContent = fmtPct(mktPnl, true);
    mktEl.className = mktPnl < -0.05 ? 'p02-neg' : (mktPnl > 0.05 ? 'p02-pos' : 'p02-flat');
    fig.querySelector('[data-p02-mkt-usd]').textContent = `${mktPnl === 0 ? '0' : (mktPnl > 0 ? '+' : '−') + Math.round(Math.abs(mktPnl) * 1000).toLocaleString('en-US')} 美元`;
    const mktBar = fig.querySelector('[data-p02-mkt-bar]');
    mktBar.style.width = `${Math.min(Math.abs(mktPnl) / MAX_LOSS * 100, 100).toFixed(1)}%`;
    mktBar.className = `p02-el-bar ${mktPnl > 0.05 ? 'p02-bar-pos' : 'p02-bar-neg'}`;

    const crEl = fig.querySelector('[data-p02-crowd-val]');
    crEl.textContent = fmtPct(crowdPnl, true);
    fig.querySelector('[data-p02-crowd-usd]').textContent = `−${Math.round(Math.abs(crowdPnl) * 1000).toLocaleString('en-US')} 美元`;
    fig.querySelector('[data-p02-crowd-bar]').style.width = `${Math.min(Math.abs(crowdPnl) / MAX_LOSS * 100, 100).toFixed(1)}%`;

    fig.querySelectorAll('[data-p02-preset]').forEach(btn => {
      const [pl, ps] = btn.dataset.p02Preset.split(',').map(Number);
      btn.setAttribute('aria-pressed', String(pl === longPct && ps === shortPct));
    });
  }

  document.querySelectorAll('[data-p02-exposure]').forEach(fig => {
    const lIn = fig.querySelector('[data-p02-long-in]');
    const sIn = fig.querySelector('[data-p02-short-in]');
    if (!lIn || !sIn) return;
    fig.querySelector('.p02-presets')?.removeAttribute('hidden');
    lIn.disabled = false;
    sIn.disabled = false;
    const sync = () => paint(fig, Number(lIn.value), Number(sIn.value));
    lIn.addEventListener('input', sync);
    sIn.addEventListener('input', sync);
    fig.querySelectorAll('[data-p02-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [pl, ps] = btn.dataset.p02Preset.split(',').map(Number);
        lIn.value = String(pl);
        sIn.value = String(ps);
        sync();
      });
    });
    sync();
  });
})();
