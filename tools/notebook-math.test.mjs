import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
// Import the exact browser calculation module without a project-wide package.json.
const source=await readFile(new URL('../static/notebook/math.js',import.meta.url),'utf8');
const {callOutcome,informationCell,conditionalMean}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
test('long call: loss floor, strike, break-even, in-the-money loss and default',()=>{
  for(const [spot,payoff,profit] of [[0,0,-8],[100,0,-8],[104,4,-4],[108,8,0],[120,20,12]]){
    assert.deepEqual(callOutcome(spot,100,8),{payoff,profit,breakeven:108});
  }
  assert.deepEqual(callOutcome(40,40,0),{payoff:0,profit:0,breakeven:40});
});
test('finite information: membership, measurability and preservation of expectation',()=>{
  assert.deepEqual(informationCell(5,'parity'),[1,3,5]);
  assert.deepEqual(informationCell(2,'exact'),[2]);
  for(const info of ['none','parity','exact']){
    const values=[1,2,3,4,5,6].map(face=>conditionalMean(face,info));
    assert.equal(values.reduce((a,b)=>a+b,0)/6,3.5);
    for(let face=1;face<=6;face++){
      for(const other of informationCell(face,info))assert.equal(conditionalMean(face,info),conditionalMean(other,info));
    }
  }
  assert.equal(conditionalMean(1,'parity'),3);
  assert.equal(conditionalMean(2,'parity'),4);
});
