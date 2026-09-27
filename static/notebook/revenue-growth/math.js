/** Inputs use unscaled currency amounts, shares and fractional margins. */
export function requiredRevenue({price, shares, netMargin, forwardPE, baseRevenue, shareChange=0}) {
  for (const [name, value] of Object.entries({price, shares, netMargin, forwardPE, baseRevenue})) {
    if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${name} must be positive and finite`);
  }
  if (!Number.isFinite(shareChange) || shareChange <= -1) throw new RangeError('shareChange must exceed -1');
  const forecastShares = shares * (1 + shareChange);
  const eps = price / forwardPE;
  const commonProfit = eps * forecastShares;
  const revenue = commonProfit / netMargin;
  const growth = revenue / baseRevenue - 1;
  return {forecastShares, eps, commonProfit, revenue, growth};
}

/** Keep a reference ratio exact; display rounding never becomes an input. */
export function initialCondition(condition) {
  if (!condition.ratio) return condition.value;
  const {numerator,denominator}=condition.ratio;
  if (![numerator,denominator].every(value=>Number.isFinite(value)&&value>0)) throw new RangeError('Reference ratio must be positive');
  return numerator/denominator;
}

/** User gestures use the declared grid; the initial value can lie between ticks. */
export function steppedCondition(value,{min,max,step},direction=0) {
  const position=(value-min)/step;
  const tick=direction>0?Math.floor(position+1e-9)+1:direction<0?Math.ceil(position-1e-9)-1:Math.round(position);
  return Math.max(min,Math.min(max,Number((min+tick*step).toPrecision(12))));
}
