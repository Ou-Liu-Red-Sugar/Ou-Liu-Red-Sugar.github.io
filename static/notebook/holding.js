(() => {
  'use strict';
  document.querySelectorAll('[data-holding-scenario]').forEach(panel => {
    const slider = panel.querySelector('input[type="range"]');
    const output = panel.querySelector('output');
    const ratio = panel.querySelector('[data-ratio]');
    const presets = panel.querySelectorAll('[data-price]');
    const update = () => {
      const price = Number(slider.value);
      output.value = String(price);
      panel.querySelectorAll('[data-scenario]').forEach(item => {
        const result = (Number(item.dataset.scenario) / price - 1) * 100;
        item.textContent = `${result >= 0 ? '+' : '−'}${Math.abs(result).toFixed(1)}%`;
      });
      ratio.textContent = `上行空间∶下行空间 = ${((152 - price) / (price - 62)).toFixed(2)}∶1`;
      presets.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.price) === price)));
    };
    slider.addEventListener('input', update);
    presets.forEach(button => button.addEventListener('click', () => {
      slider.value = button.dataset.price;
      update();
    }));
    update();
  });
})();
