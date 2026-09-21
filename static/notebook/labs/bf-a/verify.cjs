const fs = require('node:fs');
const path = require('node:path');
const E = require('./engine.js');
const packet = JSON.parse(fs.readFileSync(path.join(__dirname,'data.json'),'utf8'));
const checks=[];
function check(name,actual,expected,tolerance=0){const passed=typeof expected==='number'?Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance:JSON.stringify(actual)===JSON.stringify(expected);checks.push({name,actual,expected,passed});}
for(const [ticker,dataset] of Object.entries(packet.datasets))for(const record of E.verifyDataset(dataset))checks.push({name:ticker+'/'+record.table+'/'+record.target+'/'+record.period,...record});
const expected=[
  {cash:100,receivable:0,inventory:0,payable:0,equity:100,profit:0,ocf:0},
  {cash:100,receivable:0,inventory:100,payable:100,equity:100,profit:0,ocf:0},
  {cash:100,receivable:150,inventory:0,payable:100,equity:150,profit:50,ocf:0},
  {cash:0,receivable:150,inventory:0,payable:0,equity:150,profit:50,ocf:-100},
  {cash:150,receivable:0,inventory:0,payable:0,equity:150,profit:50,ocf:50}
];
for(let i=0;i<5;i++){const result=E.ledgerAt(i);for(const field of E.fields)check('default/S'+i+'/'+field,result.state[field],expected[i][field]);check('default/S'+i+'/A=L+E',result.balanced,true);check('default/S'+i+'/delta-balance',result.change.assets,result.change.liabilities+result.change.equity);check('default/S'+i+'/cash-flow',result.state.cash-100,result.state.ocf);}
check('collect-first/S3/cash',E.ledgerAt(3,100,true).state.cash,250);
check('collect-first/S3/payable',E.ledgerAt(3,100,true).state.payable,100);
for(const field of E.fields)check('collect-first/end/'+field,E.ledgerAt(4,100,true).state[field],expected[4][field]);
const blocked=E.ledgerAt(4,0,false);check('zero-cash/pay-first/completed',blocked.completed,false);check('zero-cash/pay-first/gap',blocked.fundingGap,100);check('zero-cash/pay-first/no-overdraft',blocked.state.cash,0);check('zero-cash/pay-first/payable-retained',blocked.state.payable,100);check('zero-cash/pay-first/ocf',blocked.state.ocf,0);
const reorder=E.ledgerAt(4,0,true);check('zero-cash/collect-first/completed',reorder.completed,true);for(const field of ['cash','equity','profit','ocf'])check('zero-cash/collect-first/'+field,reorder.state[field],50);
for(const invalid of [-1,NaN,Infinity]){let thrown=false;try{E.ledgerAt(1,invalid);}catch{thrown=true;}check('reject-initial-cash/'+String(invalid),thrown,true);}
let badIndex=false;try{E.ledgerAt(5);}catch{badIndex=true;}check('reject-event-index',badIndex,true);
const bridge=E.retailBridge(packet.datasets.COST);for(const [key,value] of Object.entries({oldNet:-774,newNet:-1667,delta:-893,reverse:893,cfInventory:559,cfPayables:404,cfAdjustment:963,unexplainedDifference:70}))check('retail-bridge/'+key,bridge[key],value);
const bank25=E.bankMeasures(packet.datasets.JPM,'2025-12-31');check('bank/2025/coverage',bank25.coveragePercent,1.8287251447045756,1e-12);check('bank/2025/all-loans-denominator',E.bankMeasures(packet.datasets.JPM,'2025-12-31','loans_gross').coveragePercent,1.725224299246901,1e-12);check('bank/2025/common-equity',bank25.commonEquity,342393);check('bank/2025/shares',bank25.shares,2696272576);check('bank/2025/book-value',bank25.commonBookPerShare,126.98753199053418,1e-12);check('bank/2024/book-value',E.bankMeasures(packet.datasets.JPM,'2024-12-31').commonBookPerShare,116.06578214969201,1e-12);
const html=fs.readFileSync(path.join(__dirname,'interactions.html'),'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);check('html/unique-ids',new Set(ids).size,ids.length);
for(const dataset of Object.values(packet.datasets))for(const row of dataset.statement_rows)check('html/full-row/'+dataset.entity.ticker+'/'+row.id,ids.includes(dataset.entity.ticker.toLowerCase()+'-'+row.id),true);
for(const id of ['BS-RETAIL','BS-BANKING','EXP-BF05-EVENTS'])check('html/entry-fragment/'+id,ids.includes(id),true);
check('html/embedded-input-parity',JSON.parse(html.match(/<script id="bf-inputs" type="application\/json">([\s\S]*?)<\/script>/)[1]),packet);
const result={version:packet.version,checked_at:new Date().toISOString(),scope:'Direct sums, teaching-event states and funding boundary, stated derived metrics, static HTML identities and embedded input parity; no browser checks.',passed:checks.filter(c=>c.passed).length,failed:checks.filter(c=>!c.passed).length,checks:checks.map(c=>c.name==='html/embedded-input-parity'?{name:c.name,passed:c.passed}:c)};
fs.writeFileSync(path.join(__dirname,'verification.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({passed:result.passed,failed:result.failed}));if(result.failed){console.error(JSON.stringify(checks.filter(c=>!c.passed),null,2));process.exitCode=1;}
