(() => {
  'use strict';

  // Prices are integer cents so that the displayed amounts add exactly.
  const PRICES = { bid: [9998, 9995, 9990], ask: [10002, 10005, 10010] };
  const DEPTHS = { thick: [100, 200, 500], thin: [10, 20, 50] };
  const DEFAULTS = { direction: 'buy', quantity: 300, type: 'market', limitCents: 10005, depth: 'thick' };

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
    return { book, consumedSide, filled, unfilled, amountCents, average: filled ? amountCents / 100 / filled : null };
  }

  if (typeof module === 'object' && module.exports) module.exports = { calculate };
  if (typeof document === 'undefined') return;

  const number = (value, digits = 0, maxDigits = digits) => value.toLocaleString('zh-CN', {
    minimumFractionDigits: digits, maximumFractionDigits: maxDigits,
  });
  const money = (cents) => number(cents / 100, 2);

  document.querySelectorAll('[data-trade-demo]').forEach((figure) => {
    const form = figure.querySelector('[data-trade-form]');
    const field = (name) => form.elements.namedItem(name);
    const hint = figure.querySelector('[data-trade-hint]');
    const status = figure.querySelector('[data-trade-status]');
    const write = (name, value) => { figure.querySelector(`[data-trade-${name}]`).textContent = value; };
    const render = (order) => {
      const result = calculate(order);
      for (const side of ['bid', 'ask']) {
        const rows = figure.querySelectorAll(`[data-trade-side="${side}"] tbody tr`);
        result.book[side].forEach((level, index) => {
          const row = rows[index];
          row.classList.toggle('is-filled', level.filled > 0);
          [money(level.priceCents), number(level.original), number(level.filled), number(level.remaining)]
            .forEach((value, cell) => { row.cells[cell].textContent = value; });
        });
      }
      const direction = order.direction === 'buy' ? '买入' : '卖出';
      const orderType = order.type === 'market' ? '市价' : `限价 ${money(order.limitCents)} 美元`;
      write('order-label', `${order.depth === 'thick' ? '厚' : '薄'}盘口 · ${orderType}${direction} ${number(order.quantity)} 股`);
      write('filled', `${number(result.filled)} 股`);
      write('amount', number(result.amountCents / 100, 2));
      write('average', result.average === null ? '—' : number(result.average, 2, 4));
      write('unfilled', `${number(result.unfilled)} 股`);
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
    };

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
      form.reset();
      field('limit').disabled = true;
      render(DEFAULTS);
    });
    render(DEFAULTS);
    form.hidden = false;
  });
})();
