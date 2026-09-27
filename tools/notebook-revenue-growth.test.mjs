import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {requiredRevenue,initialCondition,steppedCondition} from '../static/notebook/revenue-growth/math.js';

const inputs={price:60,shares:500_000_000,netMargin:0.1,forwardPE:15,baseRevenue:16_000_000_000};

test('a 60 price and 15x PE require 4 EPS, 2 billion profit and 20 billion revenue at 10% margin',()=>{
  const result=requiredRevenue(inputs);
  assert.equal(result.eps,4);
  assert.equal(result.commonProfit,2_000_000_000);
  assert.equal(result.revenue,20_000_000_000);
  assert.equal(result.growth,0.25);
});

test('a higher margin lowers required revenue while the required EPS and profit stay fixed',()=>{
  const result=requiredRevenue({...inputs,netMargin:0.2});
  assert.equal(result.eps,4);
  assert.equal(result.commonProfit,2_000_000_000);
  assert.equal(result.revenue,10_000_000_000);
  assert.equal(result.growth,-0.375);
});

test('a higher current forward PE reference reduces required EPS, profit and revenue',()=>{
  const result=requiredRevenue({...inputs,forwardPE:30});
  assert.equal(result.eps,2);
  assert.equal(result.commonProfit,1_000_000_000);
  assert.equal(result.revenue,10_000_000_000);
});

test('25% dilution in the forecast period raises profit and revenue requirements without changing EPS',()=>{
  const result=requiredRevenue({...inputs,shareChange:0.25});
  assert.equal(result.forecastShares,625_000_000);
  assert.equal(result.eps,4);
  assert.equal(result.commonProfit,2_500_000_000);
  assert.equal(result.revenue,25_000_000_000);
  assert.equal(result.growth,0.5625);
});

test('the inverse relation requires positive PE, margin and base revenue, and remaining shares',()=>{
  for (const invalid of [{forwardPE:0},{netMargin:0},{netMargin:-0.1},{baseRevenue:0},{shareChange:-1}]) {
    assert.throws(()=>requiredRevenue({...inputs,...invalid}),RangeError);
  }
});

const ko=JSON.parse(readFileSync(new URL('../static/notebook/revenue-growth/config.json',import.meta.url),'utf8'));
test('KO exact comparable margin reproduces the independently verified 48,459.14 million requirement',()=>{
  const netMargin=initialCondition(ko.assumptions.netMargin);
  assert.equal(netMargin,12958/48062);
  const result=requiredRevenue({price:ko.price.value,shares:ko.forecast.shares,baseRevenue:ko.baseRevenue.value,netMargin,forwardPE:initialCondition(ko.assumptions.forwardPE)});
  assert.equal((result.revenue/1e6).toFixed(2),'48459.14');
  assert.equal((result.commonProfit/1e6).toFixed(2),'13065.07');
  assert.equal(result.eps.toFixed(4),'3.0292');
  assert.equal((result.growth*100).toFixed(1),'0.8');
});

test('initial margin stays between ticks; gestures use the declared grid and restoring reuses the exact ratio',()=>{
  const spec=ko.assumptions.netMargin;
  const initial=initialCondition(spec);
  assert.equal(steppedCondition(initial,spec,1),0.27);
  assert.equal(steppedCondition(initial,spec,-1),0.265);
  assert.equal(steppedCondition(0.27,spec,1),0.275);
  assert.equal(steppedCondition(0.27,spec,-1),0.265);
  assert.equal(steppedCondition(0.2837,spec),0.285);
  assert.equal(steppedCondition(0.4,spec),spec.max);
  assert.equal(initialCondition(spec),initial);
  assert.notEqual(initial,steppedCondition(initial,spec));
});
