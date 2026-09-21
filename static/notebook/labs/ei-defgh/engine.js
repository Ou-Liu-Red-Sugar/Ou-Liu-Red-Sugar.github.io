/* EI-DEFGH pure teaching engine. No network, account data, random draws, or paper-series fabrication. */
(function (g) {
"use strict";
const num=(x,n,lo,hi)=>{if(typeof x!=="number"||!Number.isFinite(x)||x<lo||x>hi)throw new RangeError(n+" outside ["+lo+","+hi+"]");return x;};
const pick=(x,n,d)=>x[n]===undefined?d:x[n];
function rates(x) {
 const A=num(x.cash,"cash",0,1000),F=num(x.floating,"floating",0,1000),K=num(x.fixed,"fixed",0,1000);
 const b=num(x.rateBP,"rateBP",-500,500)/10000;
 const pa=num(pick(x,"assetPass",1),"assetPass",0,1),pf=num(pick(x,"floatPass",1),"floatPass",0,1);
 const sf=num(pick(x,"floatSpreadBP",0),"floatSpreadBP",-500,500)/10000;
 const sk=num(pick(x,"refiSpreadBP",0),"refiSpreadBP",-500,500)/10000;
 const r=num(x.refiFraction,"refiFraction",0,1),tau=num(x.refiTime,"refiTime",0,1);
 const asset=A*pa*b,floating=F*(pf*b+sf),refi=K*r*(b+sk),pre=asset-floating;
 const series=Array.from({length:13},(_,i)=>{const t=i/12;return {t,annual_net:pre-(t>=tau?refi:0),cumulative_accrual:pre*t-refi*Math.max(t-tau,0)};});
 return {annual_asset_income:asset,annual_floating_expense:floating,annual_net_before_refinance:pre,
 annual_refinance_expense:refi,first_year_refinance_expense:refi*(1-tau),
 annual_net_after_refinance:pre-refi,first_year_net_accrual:pre-refi*(1-tau),series,
 units:"million USD; annualized rates versus first-calendar-year accrual; not payment-date cash"};
}
function fx(x) {
 const R=num(x.receivable,"receivable",0,1000),P=num(x.payable,"payable",0,1000);
 const e0=num(x.e0,"e0",.01,10),e1=num(x.e1,"e1",.01,10);
 return {receivable_start:R*e0,receivable_end:R*e1,payable_start:P*e0,payable_end:P*e1,
 receivable_change:R*(e1-e0),payable_gain:-P*(e1-e0),net_change:(R-P)*(e1-e0),
 net_start:(R-P)*e0,net_end:(R-P)*e1,net_eur:R-P,
 conditions:"USD functional currency; EUR fixed amounts; same recognition and settlement dates; no derivative contract"};
}
function liquidity(x) {
 const O=num(x.need,"need",0,500),S=num(x.sources,"sources",0,500),credit=num(x.creditLine,"creditLine",0,500);
 if(!["IV","other","unknown"].includes(x.category))throw new RangeError("category");
 if(typeof x.eligible!=="boolean")throw new TypeError("eligible must be boolean");
 const usable=x.eligible?S:0,net=O-usable;
 return {need:O,eligible_sources:usable,excluded_sources:S-usable,excluded_credit_line:credit,signed_net_need:net,net_need:Math.max(net,0),
 test_frequency:x.category==="IV"?"至少每季度":x.category==="other"?"至少每月（本条其他适用机构）":"先查完整分类，不能自动推定",
 buffer_balance:null,buffer_surplus:null,interpretation:"30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"};
}
function adoption(x) {
 const y=[num(x.y1,"y1",0,100),num(x.y2,"y2",0,100)],d=[x.d1,x.d2],gains=[num(x.g1,"g1",-1,1),num(x.g2,"g2",-1,1)];
 if(d.some(z=>z!==0&&z!==1))throw new RangeError("adoption must be 0 or 1");
 const Y=y[0]+y[1];if(Y<=0)throw new RangeError("positive total baseline required");
 const delta=y.map((z,i)=>z*d[i]*gains[i]),total=delta[0]+delta[1];
 return {baseline:Y,delta,post_output:Y+total,growth:total/Y,weights:y.map(z=>z/Y),
 adopter_output_share:(y[0]*d[0]+y[1]*d[1])/Y,adopter_count_share:(d[0]+d[1])/2,
 count_weighted_gain:(d[0]*gains[0]+d[1]*gains[1])/2,
 interpretation:"same population, additive baseline output, fixed inputs/no spillovers; not BTOS × QJE"};
}
function capacity(x) {
 const a=num(x.a,"a",0,200),K=num(x.K,"K",1,200);
 const q=Math.min(a/2,K),p=a-q,mu=a-2*q;
 return {a,K,q,p,mu,slack:K-q,complementarity:mu*(q-K),
 regime:q<K?"松弛":mu===0?"恰好触边，乘子为零":"绑定且乘子为正",
 identity:"one-period competitive teaching model; abstract price/output, not the IMES model"};
}
function relax(x) {
 const scale=num(pick(x,"capacityScale",1),"capacityScale",.5,2);
 const aa=[100,120,130,110],kk=[80,50,50,80];
 const rows=aa.map((a,i)=>{const z=capacity({a,K:kk[i]*scale});return {period:i+1,a,K:z.K,constrained_q:z.q,constrained_p:z.p,slack_q:a/2,slack_p:a/2,difference:z.p-a/2,mu:z.mu};});
 return {rows,identity:"same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"};
}
function interaction(x) {
 const u=num(x.demandShock,"demandShock",0,80),v=num(x.capacityReduction,"capacityReduction",0,60);
 const b=capacity({a:100,K:80}),d=capacity({a:100+u,K:80}),c=capacity({a:100,K:80-v}),joint=capacity({a:100+u,K:80-v});
 return {baseline:b,demand_only:d,capacity_only:c,joint,
 demand_effect_without_capacity:d.p-b.p,capacity_alone_effect:c.p-b.p,
 conditional_demand_effect:joint.p-c.p,interaction:joint.p-c.p-d.p+b.p,total_effect:joint.p-b.p,
 identity:"price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"};
}
function paper(x) {
 const c=num(x.cashLow,"cashLow",0,1),dc=num(x.cashGap,"cashGap",0,1),dr=num(x.ffrPP,"ffrPP",-10,10);
 if(c+dc>1+1e-12)throw new RangeError("cashHigh > 1");
 const b2=.214,b4=.398,lo=b2+b4*c,hi=b2+b4*(c+dc),z=b4*dc*dr;
 return {cashLow:c,cashHigh:c+dc,derivativeLow:lo,derivativeHigh:hi,derivativeDifference:b4*dc,
 logDifference:z,logPoints:z*100,exactRelativeDifference:Math.expm1(z),
 interpretation:"Table2(2) conditional interaction; declared working-scale illustration with FFR=5.25 and cash-ratio gap encoded as 0.02; paper unit ambiguity retained; not company forecast"};
}
function metrics(branch,F) {
 const z=F.nodes["EI-15"];
 if(branch==="electricity"){const a=z.electricity_branch;return {branch,qty2024:a.Table_5_1_sales_thousand_MWh["2024"],qty2025:a.Table_5_1_sales_thousand_MWh["2025"],revenue:a.Table_5_2_revenue_million_USD["2025"],growth:a.derived.sales_growth_2024_to_2025_pct,averageCents:a.derived.revenue_divided_by_sales_cents_per_kWh,status:"2024 final / 2025 preliminary；EPM 2026-08-26"};}
 if(branch==="manufacturing")return {branch,shipments:4498,backlogStart:11214,backlogEnd:11595,backlogChange:381,constructedOrders:4498+11595-11214,inventoryChange:10659-10593,identity:"新订单由出货与未完成订单月差构造；不是三份独立观察"};
 if(branch==="retail"){let a=z.retail_branch,s=a["2022_sales_million_USD"],i=a["2022_end_of_year_inventory_million_USD"];return {branch,salesOld:s.original_employer_plus_nonemployer,salesNew:s.restated_employer_only,salesChange:s.restated_employer_only-s.original_employer_plus_nonemployer,salesPct:100*(s.restated_employer_only/s.original_employer_plus_nonemployer-1),inventoryOld:i.original_employer_plus_nonemployer,inventoryNew:i.restated_employer_only,inventoryPct:100*(i.restated_employer_only/i.original_employer_plus_nonemployer-1),identity:"同一2022材料期的重述差，不是时间增长"};}
 if(branch==="banking"){const a=z.bank_branch;return {branch,...a,previousNIMpct:a.NIM_pct-a.NIM_qoq_change_bp/100,identity:"全行业Q1 2026统计；NIM为净利息／平均生息资产的年化比率"};}
 throw new RangeError("unknown branch");
}
function industry(region,F){
 if(!["rto","integrated","supplier"].includes(region))throw new RangeError("region type");
 const gen=F.nodes["EI-16"].generation_Table_1_1_thousand_MWh;
 const names={coal:"煤炭",natural_gas:"天然气",nuclear:"核能",hydro:"常规水电",utility_scale_solar:"公用事业规模太阳能"};
 const rows=Object.keys(names).map(k=>({key:k,label:names[k],y2024:gen["2024"][k],y2025:gen["2025"][k],growth:100*(gen["2025"][k]/gen["2024"][k]-1)}));
 const totals=[gen["2024"].utility_scale_total,gen["2025"].utility_scale_total];
 const other=[totals[0]-rows.reduce((s,r)=>s+r.y2024,0),totals[1]-rows.reduce((s,r)=>s+r.y2025,0)];
 rows.push({key:"residual",label:"其余净额（重排）",y2024:other[0],y2025:other[1],growth:100*(other[1]/other[0]-1)});
 return {region,rows,totals,growth:100*(totals[1]/totals[0]-1),salesGrowth:F.nodes["EI-16"].retail_sales.growth_pct,
 plannedGW:86,plannedIdentity:"2026计划，if realized；不是发电量",
 path:region==="rto"?"分时可用出力 → 现货/长期合同 → 燃料与对冲 → 净收入":region==="integrated"?"负荷与购电成本 → 具体费率/成本回收规则 → 确认与回收时间":"项目计划 → 中标产品与份额 → 排产交付 → 验收与收入确认"};
}
const api={rates,fx,liquidity,adoption,capacity,relax,interaction,paper,metrics,industry};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
g.EIEngine=api;
})(typeof window==="undefined"?globalThis:window);
