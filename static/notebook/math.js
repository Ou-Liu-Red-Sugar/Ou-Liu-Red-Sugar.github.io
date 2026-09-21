export function callOutcome(spot, strike, premium) {
  const payoff = Math.max(spot - strike, 0);
  return {payoff, profit: payoff - premium, breakeven: strike + premium};
}
export function informationCell(face, information) {
  const outcomes = [1,2,3,4,5,6];
  return outcomes.filter(x => information === 'none' || (information === 'parity' ? x % 2 === face % 2 : x === face));
}
export function conditionalMean(face, information) {
  const cell = informationCell(face, information);
  return cell.reduce((a,b)=>a+b,0)/cell.length;
}

