(() => {
  'use strict';

  // Prices are integer cents so that the displayed amounts add exactly.
  const PRICES = { bid: [9998, 9995, 9990], ask: [10002, 10005, 10010] };
  const DEPTHS = { thick: [100, 200, 500], thin: [10, 20, 50] };
  const MAX_SCALE_DEPTH = 500;
  const DEFAULTS = { direction: 'buy', quantity: 300, type: 'market', limitCents: 10005, depth: 'thick' };
  const PRESETS = {
    'thick-300': { direction: 'buy', quantity: 300, type: 'market', limitCents: 10005, depth: 'thick' },
    'thick-600': { direction: 'buy', quantity: 600, type: 'market', limitCents: 10005, depth: 'thick' },
    'thin-50': { direction: 'buy', quantity: 50, type: 'market', limitCents: 10005, depth: 'thin' },
    'limit-600': { direction: 'buy', quantity: 600, type: 'limit', limitCents: 10005, depth: 'thick' },
  };

  function calculate({ direction, quantity, type, limitCents, depth }) {
    if (!['buy', 'sell'].includes(direction) || !['market', 'limit'].includes(type) || !Object.hasOwn(DEPTHS, depth)) {
      throw new RangeError('Unknown order setting');
    }
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000000) {
      throw new RangeError('Quantity must be a whole number from 1 to 1000000');
    }
    if (type === 'limit' && (!Number.isSafeInteger(limitCents) || limitCents < 1 || limitCents > 100000000)) {
      throw new RangeError('Limit price must be positive whole cents');
    }
    const consumedSide = direction === 'buy' ? 'ask' : 'bid';
    let unfilled = quantity;
    let amountCents = 0;
    const book = {};
    for (const side of ['bid', 'ask']) {
      book[side] = PRICES[side].map((priceCents, index) => {
        const original = DEPTHS[depth][index];
        const eligible = side === consumedSide && (type === 'market' ||
          (direction === 'buy' ? priceCents <= limitCents : priceCents >= limitCents));
        const filled = eligible ? Math.min(original, unfilled) : 0;
        unfilled -= filled;
        amountCents += priceCents * filled;
        return { priceCents, original, filled, remaining: original - filled };
      });
    }
    const filled = quantity - unfilled;
    const bestQuoteCents = PRICES[consumedSide][0];
    const average = filled ? amountCents / 100 / filled : null;
    const bestAmountCents = bestQuoteCents * filled;
    const extraCostCents = filled ? (direction === 'buy' ? amountCents - bestAmountCents : bestAmountCents - amountCents) : 0;
    const slippagePerShare = filled ? extraCostCents / 100 / filled : null;
    return {
      book,
      consumedSide,
      filled,
      unfilled,
      amountCents,
      average,
      bestQuoteCents,
      extraCostCents,
      slippagePerShare,
    };
  }

  if (typeof module === 'object' && module.exports) module.exports = { calculate };
  if (typeof document === 'undefined') return;

  const number = (value, digits = 0, maxDigits = digits) => value.toLocaleString('zh-CN', {
    minimumFractionDigits: digits, maximumFractionDigits: maxDigits,
  });
  const money = (cents) => number(cents / 100, 2);

  document.querySelectorAll('[data-trade-demo]').forEach((figure) => {
    const form = figure.querySelector('[data-trade-form]');
    const presetsBar = figure.querySelector('[data-trade-presets]');
    const field = (name) => form.elements.namedItem(name);
    const hint = figure.querySelector('[data-trade-hint]');
    const status = figure.querySelector('[data-trade-status]');
    const slippageBox = figure.querySelector('[data-trade-slippage]');
    const write = (name, value) => {
      const node = figure.querySelector(`[data-trade-${name}]`);
      if (node) node.textContent = value;
    };

    const syncPresetState = (order) => {
      if (!presetsBar) return;
      presetsBar.querySelectorAll('[data-trade-preset]').forEach((btn) => {
        const p = PRESETS[btn.dataset.tradePreset];
        const match = p && p.direction === order.direction && p.quantity === order.quantity &&
          p.type === order.type && p.depth === order.depth &&
          (p.type === 'market' || p.limitCents === order.limitCents);
        btn.setAttribute('aria-pressed', String(Boolean(match)));
      });
    };

    const fillForm = (order) => {
      field('direction').value = order.direction;
      field('quantity').value = String(order.quantity);
      field('type').value = order.type;
      field('limit').value = (order.limitCents / 100).toFixed(2);
      field('limit').disabled = order.type === 'market';
      field('depth').value = order.depth;
    };

    const render = (order) => {
      const result = calculate(order);
      for (const side of ['bid', 'ask']) {
        const rows = figure.querySelectorAll(`[data-trade-side="${side}"] tbody tr`);
        result.book[side].forEach((level, index) => {
          const row = rows[index];
          row.classList.toggle('is-filled', level.filled > 0);
          const origPct = (level.original / MAX_SCALE_DEPTH) * 100;
          const fillPct = (level.filled / MAX_SCALE_DEPTH) * 100;
          row.cells[0].textContent = money(level.priceCents);
          const origBar = row.querySelector('.trade-depth-orig');
          const fillBar = row.querySelector('.trade-depth-fill');
          if (origBar && fillBar) {
            origBar.style.setProperty('--orig', `${origPct.toFixed(1)}%`);
            fillBar.style.setProperty('--fill', `${fillPct.toFixed(1)}%`);
            fillBar.classList.toggle('is-zero', level.filled === 0);
          }
          const numStart = row.cells.length === 5 ? 2 : 1;
          row.cells[numStart].textContent = number(level.original);
          row.cells[numStart + 1].textContent = number(level.filled);
          row.cells[numStart + 2].textContent = number(level.remaining);
        });
      }

      const direction = order.direction === 'buy' ? '买入' : '卖出';
      const orderType = order.type === 'market' ? '市价' : `限价 ${money(order.limitCents)} 美元`;
      write('order-label', `${order.depth === 'thick' ? '厚' : '薄'}盘口 · ${orderType}${direction} ${number(order.quantity)} 股`);
      write('filled', `${number(result.filled)} 股`);
      write('amount', number(result.amountCents / 100, 2));
      write('average', result.average === null ? '—' : number(result.average, 2, 4));
      write('unfilled', `${number(result.unfilled)} 股`);

      if (slippageBox) {
        const bestName = order.direction === 'buy' ? '最优卖价' : '最优买价';
        const bestText = money(result.bestQuoteCents);
        slippageBox.classList.remove('is-clean', 'is-empty');
        if (result.filled === 0) {
          slippageBox.classList.add('is-empty');
          write('slippage-main', `${bestName} ${bestText} · 限价未触及对手盘，本次 0 股成交`);
          write('slippage-cost', '无吃单滑点');
        } else if (result.extraCostCents === 0) {
          slippageBox.classList.add('is-clean');
          write('slippage-main', `${bestName} ${bestText} → 均价 ${number(result.average, 2, 4)}（全在最优一档成交）`);
          write('slippage-cost', '跨档滑点 0.00 美元');
        } else {
          const sign = order.direction === 'buy' ? '+' : '−';
          const verb = order.direction === 'buy' ? '多付' : '少收';
          write('slippage-main', `${bestName} ${bestText} → 逐档均价 ${number(result.average, 2, 4)}（每股滑点 ${sign}${number(result.slippagePerShare, 2, 4)} 美元）`);
          write('slippage-cost', `比最优档${verb} ${money(result.extraCostCents)} 美元`);
        }
      }

      if (result.unfilled === 0) {
        status.textContent = `已在显示的报价中成交全部 ${number(result.filled)} 股。`;
      } else if (order.type === 'market') {
        status.textContent = `已成交 ${number(result.filled)} 股；其余 ${number(result.unfilled)} 股超出可见范围，结果待后续报价。`;
      } else {
        status.textContent = `已成交 ${number(result.filled)} 股；其余 ${number(result.unfilled)} 股等待后续报价。`;
      }
      const fills = result.book[result.consumedSide].filter((level) => level.filled > 0);
      write('calculation', fills.length
        ? `${fills.map((level) => `${number(level.filled)} × ${money(level.priceCents)}`).join(' + ')} = ${money(result.amountCents)} 美元`
        : '当前可见报价没有满足限价的成交。');
      hint.textContent = '每次执行都从原始盘口开始比较。';
      syncPresetState(order);
    };

    if (presetsBar) {
      presetsBar.hidden = false;
      presetsBar.querySelectorAll('[data-trade-preset]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const preset = PRESETS[btn.dataset.tradePreset];
          if (!preset) return;
          fillForm(preset);
          render(preset);
        });
      });
    }

    form.addEventListener('input', () => {
      field('limit').disabled = field('type').value === 'market';
      hint.textContent = '条件已更改；点击“执行比较”查看结果。';
    });
    form.addEventListener('change', () => {
      field('limit').disabled = field('type').value === 'market';
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      render({
        direction: field('direction').value,
        quantity: Number(field('quantity').value),
        type: field('type').value,
        limitCents: Math.round(Number(field('limit').value) * 100),
        depth: field('depth').value,
      });
    });
    figure.querySelector('[data-trade-reset]').addEventListener('click', () => {
      fillForm(DEFAULTS);
      render(DEFAULTS);
    });
    fillForm(DEFAULTS);
    render(DEFAULTS);
    form.hidden = false;
  });
})();
