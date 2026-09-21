const fs = require('node:fs');
const path = require('node:path');
const E = require('./engine.js');
const V = require('./view.js');
const data = JSON.parse(fs.readFileSync(path.join(__dirname,'data.json'),'utf8'));
const html = fs.readFileSync(path.join(__dirname,'interactions.html'),'utf8');
const source = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../../..',data.source_path),'utf8'));
const tests = [];
function check(name, passed, actual, expected) { tests.push({ name, passed:!!passed, ...(actual === undefined ? {} : {actual}), ...(expected === undefined ? {} : {expected}) }); }
function near(name, actual, expected) { check(name, typeof actual === 'number' && Number.isFinite(actual) && Math.abs(actual-expected) <= 1e-8*Math.max(1,Math.abs(expected)), actual, expected); }
function throws(name, fn) { let rejected = false; try { fn(); } catch (_) { rejected = true; } check(name,rejected); }
const d = E.defaults(data);
check('Complete input packet equals reviewed v2 source',JSON.stringify(data.source)===JSON.stringify(source));
check('Source version is review-2',data.source.version==='2026-09-21-review-2');
check('Three observed cases preserved',data.source.cases.length===3 && data.source.cases.every(x=>x.status==='observed'));
check('Five teaching experiments preserved',data.source.experiments.length===5 && data.source.experiments.every(x=>x.status==='teaching_assumption'));
const embedded = JSON.parse(html.match(/<script type="application\/json" id="ei-data">([\s\S]*?)<\/script>/)[1]);
check('Embedded JSON equals data.json without escaping changes',JSON.stringify(embedded)===JSON.stringify(data));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
check('All HTML and SVG ids are unique',new Set(ids).size===ids.length,ids.length,new Set(ids).size);
for(const id of data.implementation.anchors)check('Stable hash #'+id,ids.includes(id));
for(const titleId of [...html.matchAll(/aria-labelledby="([^"]+)"/g)].flatMap(x=>x[1].split(/\s+/)))check('SVG accessible label resolves '+titleId,ids.includes(titleId));
const machine = E.observed(data,'CASE-EI-US-CONSTRUCTION-MACHINERY-202605');
check('Census contains only April and May',machine.rows.map(r=>r.month).join(',')==='2026-04,2026-05');
check('Fixed Census vintage and source URL retained',data.source.sources['EI-S06-M3-202605'].url.endsWith('/2026/may26prel.pdf'));
check('Old March values not exposed',!html.includes('4,472')&&!html.includes('10,904')&&!html.includes('2026-03'));
const power = E.electricity(data), expected = power.record.expected;
for(const [output,key] of [['salesGrowth','sales_growth_pct'],['publishedPriceGrowth','published_price_growth_pct'],['unidentifiedChangeRatio','unidentified_change_ratio'],['residentialShare','residential_composition_pct']])near('EIA '+key,power[output],expected[key]);
near('EIA 2023 revenue/quantity',power.rows[0].reconstructedPrice,expected.reconstructed_price_2023_cent_per_kWh);
near('EIA 2024 revenue/quantity',power.rows[1].reconstructedPrice,expected.reconstructed_price_2024_cent_per_kWh);
const hhi=E.experiment(data,'EXP-EI-HHI-01'), raw=hhi.states.find(s=>s.boundary==='wide'&&s.ownership==='separate').sales;
for(const s of hhi.states){ const r=E.hhi(raw,s.boundary,s.ownership==='separate'?'separate':'combined'); near('HHI '+s.boundary+'/'+s.ownership,r.HHI,s.HHI);near('HHI denominator '+s.boundary+'/'+s.ownership,r.denominator,s.denominator);near('HHI shares sum '+s.boundary+'/'+s.ownership,E.sum(r.firms.map(f=>f.share)),100);r.firms.forEach((f,i)=>near('HHI share '+s.boundary+'/'+s.ownership+'/'+f.name,f.share,s.shares_pct[i])); }
throws('Zero HHI denominator rejected',()=>E.hhi([0,0,0,0,0],'wide','separate'));
throws('Missing HHI sales rejected',()=>E.hhi([40,undefined,25,50,50],'wide','separate'));
const demandExp=E.experiment(data,'EXP-EI-SUPPLY-DEMAND-01');
for(const s of demandExp.states){const r=E.demand({...d.demand,u:s.u,v:s.v});near('Demand P u='+s.u+',v='+s.v,r.P,s.P);near('Demand Q u='+s.u+',v='+s.v,r.Q,s.Q);near('Demand clears u='+s.u+',v='+s.v,r.Qd,r.Qs);}
const fixed=E.demand({...d.demand,mode:'fixed'});
near('Fixed price Qd',fixed.Qd,50);near('Fixed price Qs',fixed.Qs,70);near('Fixed price gap',fixed.excessSupply,20);check('Fixed price has no actual trade quantity',fixed.actualTrade===null&&!Object.hasOwn(fixed,'Q'));
let bounds=true;for(let u=-20;u<=20;u++)for(let v=-20;v<=20;v++){const r=E.demand({...d.demand,u,v});if(r.P<10||r.P>30||r.Q<40||r.Q>80||r.Q!==r.Qd||r.Q!==r.Qs)bounds=false;for(const pFixed of [10,30]){const f=E.demand({...d.demand,u,v,pFixed,mode:'fixed'});if(f.Qd<20||f.Qs<20)bounds=false;}}
check('Entire integer shock domain has interior equilibrium and positive fixed-price quantities',bounds);
throws('Out-of-domain demand shock rejected',()=>E.demand({...d.demand,u:21}));
check('Fixed price SVG has no equilibrium point label',!V.demand({...d.demand,mode:'fixed'}).includes('均衡 ('));
const first=E.fleet(d.fleet),second=E.fleet({...d.fleet,K0:first.nextK0});near('Fleet first purchase',first.purchases,20);near('Fleet actual stock carried',second.K0,110);near('Fleet second purchase',second.purchases,11);near('Fleet purchase growth',100*(second.purchases/first.purchases-1),-45);
const lower=E.fleet({...d.fleet,target:50});near('Fleet no negative purchase',lower.purchases,0);near('Fleet actual stock can exceed target',lower.nextK0,90);
const large=E.fleet({...d.fleet,target:240});near('Fleet carries actual stock above manual initial range',E.fleet({...d.fleet,K0:large.nextK0,target:240,carried:true}).K0,240);throws('Manual initial fleet remains within 200',()=>E.fleet({...d.fleet,K0:240}));
const capacity=E.experiment(data,'EXP-EI-CAPACITY-01');
for(const s of capacity.power.states){const r=E.power({...d.power,W:s.W_GW,M:s.M_GW,H:s.H_hours});for(const [key,field]of[['gapBefore','deficit_GW'],['batteryUsed','storage_GW'],['gapAfter','remaining_GW']])near('Power '+s.name+'/'+key,r[key],s[field]);near('Energy conserved '+s.name,r.endEnergy+r.batteryUsed*r.H,r.E0);check('Storage power limit '+s.name,r.batteryUsed<=r.Pmax&&r.endEnergy>=-1e-10);}
const full=E.power({...d.power,W:5,M:5,E0:30,Pmax:5,H:6});near('5 GW and 30 GWh cover six-hour gap',full.gapAfter,0);
throws('Outages cannot exceed installed capacity',()=>E.power({...d.power,K:4,O:5}));
near('Zero-energy storage gives zero output',E.power({...d.power,W:5,E0:0}).batteryUsed,0);
near('Zero-power storage gives zero output',E.power({...d.power,W:5,Pmax:0}).batteryUsed,0);
const cost=E.cost(d.cost);for(const [key,expectedValue]of Object.entries(capacity.cost.expected))near('Cost default '+key,cost[key],expectedValue);
for(const s of capacity.cost.states){const r=E.cost(s);near('Cost scenario q P='+s.P+',F='+s.F,r.q,s.q);near('Cost scenario profit P='+s.P+',F='+s.F,r.profit,s.profit);}
check('Average cost undefined at zero output',E.cost({...d.cost,P:0}).AC===null);throws('Nonpositive k rejected',()=>E.cost({...d.cost,k:0}));near('Capacity binds',E.cost({...d.cost,K:10}).q,10);
const actual=E.actualOrders(data);for(const [key,out]of[['net_flow_may','netFlow'],['backlog_change_may','change'],['reconciliation_residual_may','reconciliationResidual'],['inventory_to_monthly_shipments','inventoryRatio']])near('Actual orders '+key,actual[out],machine.expected[key]);
const net=E.orders(d.orders),gross=E.orders({...d.orders,orderMode:'gross'});near('Net and gross are equivalent',net.B1,gross.B1);near('Net cancellation not deducted twice',net.B1,11595);near('Other adjustment exercise',E.orders({...d.orders,adjustment:-100}).B1,11495);check('Zero shipments has undefined ratios',E.orders({...d.orders,shipments:0}).inventoryRatio===null&&E.orders({...d.orders,shipments:0}).backlogRatio===null);throws('Negative ending backlog rejected',()=>E.orders({...d.orders,B0:0,Nnet:0,shipments:1}));throws('Cancellation cannot exceed gross orders',()=>E.orders({...d.orders,orderMode:'gross',Ngross:100,cancel:121}));
const added=E.valueAdded(data),vaExpected=E.experiment(data,'EXP-EI-VALUE-ADDED-01').expected;for(const [key,out]of[['gross_output_sum','gross'],['intermediate_input_sum','intermediate'],['value_added_sum','added'],['final_product_value','final']])near('Value-added '+key,added[out],vaExpected[key]);near('VA sum cancels intermediate output',added.gross-added.intermediate,added.added);
const factory=E.factory(data);near('Factory production',factory.production,70);near('Factory delivery',factory.deliveries,60);near('Factory inventory change',factory.closing,10);
for(const [name,view]of[['demand zero shifts',V.demand(d.demand)],['demand endpoint',V.demand({...d.demand,u:-20,v:20,mode:'fixed',pFixed:10})],['cost zero capacity',V.cost({...d.cost,K:0,P:0})],['power zero storage',V.power({...d.power,E0:0,Pmax:0})],['orders zero shipments',V.orders(data,{...d.orders,shipments:0},false)]])check('No nonfinite SVG coordinates '+name,!/\b(?:x|y|x1|x2|y1|y2|height|width|cx|cy)="(?:NaN|Infinity|-Infinity)/.test(view)&&!/(?:M|L)NaN/.test(view));
const result={version:data.version,source_version:data.source.version,scope:'Numerical mechanisms, data identity, static equivalent content and markup references; no browser acceptance claimed',passed:tests.filter(t=>t.passed).length,failed:tests.filter(t=>!t.passed).length,checks:tests};
fs.writeFileSync(path.join(__dirname,'verification.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({passed:result.passed,failed:result.failed,failures:tests.filter(t=>!t.passed)}));
if(result.failed)process.exitCode=1;
