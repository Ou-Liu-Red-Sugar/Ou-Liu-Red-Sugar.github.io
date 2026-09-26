(() => {
  const money = (value, digits = 0) => value.toLocaleString('zh-CN', {
    minimumFractionDigits: digits, maximumFractionDigits: digits,
  });
  document.querySelectorAll('[data-compound-demo]').forEach((figure) => {
    const image = figure.querySelector('[data-compound-image]');
    const full = figure.querySelector('[data-compound-full]');
    const caption = figure.querySelector('[data-compound-caption]');
    const views = { month: { t: 1 / 12, name: '一个月', digits: 2 },
      ten: { t: 10, name: '十年', digits: 0 },
      thirty: { t: 30, name: '三十年', digits: 0 } };
    figure.querySelectorAll('[data-horizon]').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.horizon;
        const view = views[key];
        if (!view) return;
        const compounded = 10000 * Math.exp(0.05 * view.t);
        const linear = 10000 * (1 + 0.05 * view.t);
        const text = `${view.name}后，指数累积约 ${money(compounded, view.digits)} 美元，线性近似为 ${money(linear, view.digits)} 美元，相差约 ${money(compounded - linear, view.digits)} 美元。`;
        image.src = `/notebook/compounding/compound-${key}.svg`;
        image.alt = `固定连续复利率5%，初始1万美元。${text}`;
        full.href = image.getAttribute('src');
        caption.textContent = text;
        figure.querySelectorAll('[data-horizon]').forEach((item) => {
          item.setAttribute('aria-pressed', String(item === button));
        });
      });
    });
  });
  document.querySelectorAll('[data-growth-demo]').forEach((figure) => {
    const image = figure.querySelector('[data-growth-image]');
    const full = figure.querySelector('[data-growth-full]');
    const caption = figure.querySelector('[data-growth-caption]');
    const show = (view) => {
      if (!['nominal', 'real'].includes(view)) return;
      image.src = `/notebook/compounding/voo-${view}.svg?v=20260926-4`;
      full.href = image.getAttribute('src');
      const text = view === 'nominal'
        ? '按含分红再投资口径估算的月末路径与等效年化路径，十年后都到达约 39,747 美元。'
        : '同一笔资金，含分红再投资的期末金额估计约 39,747 美元，按起点物价换算的购买力约为 29,011 美元。2025 年 10 月 CPI 缺报，虚线连接相邻已知月份。';
      image.alt = `VOO从2015年底至2025年底，初始1万美元，税前分红再投资口径。${text}`;
      caption.textContent = text;
      figure.querySelectorAll('[data-growth-view]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.growthView === view));
      });
    };
    figure.querySelectorAll('[data-growth-view]').forEach((button) => {
      button.addEventListener('click', () => show(button.dataset.growthView));
    });
    document.querySelectorAll('a[href="#nb-a04-history"]').forEach((link) => {
      link.addEventListener('click', () => show('real'));
    });
  });
})();
