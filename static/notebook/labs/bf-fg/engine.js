/* BF-FG pure calculation engine. Historical observations are never mutated. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.BFFG=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const sum=a=>a.reduce((x,y)=>x+y,0);
const clone=x=>JSON.parse(JSON.stringify(x));
function finite(x,name){if(typeof x!=='number'||!Number.isFinite(x))throw new TypeError(name+'须为有限数');return x;}
function nonnegative(x,name){finite(x,name);if(x<0)throw new RangeError(name+'不能为负');return x;}
function boolean(x,name){if(typeof x!=='boolean')throw new TypeError(name+'须为布尔值');return x;}
function row(t,id){const r=t.rows.find(r=>r.id===id);if(!r)throw new Error('Missing row '+id);return r;}
function maturity(D,opt={}){
 const c=D.cost_debt;const o={horizon:0,cash:true,shortInvestments:true,facility:false,facilityConditionsAcknowledged:false,...opt};
 if(!Number.isInteger(o.horizon)||o.horizon<0||o.horizon>=c.maturity_principal.length)throw new RangeError('到期范围无效');
 ['cash','shortInvestments','facility','facilityConditionsAcknowledged'].forEach(k=>boolean(o[k],k));
 if(o.facility&&!o.facilityConditionsAcknowledged)throw new Error('纳入设施前须确认其有条件、期限与信用证影响身份');
 const selectedAssets=(o.cash?c.cash:0)+(o.shortInvestments?c.short_investments:0);
 const principal=sum(c.maturity_principal.slice(0,o.horizon+1));
 return {identity:'analyst_arithmetic_not_forecast',snapshot_date:c.as_of,through:c.maturity_labels[o.horizon],selected_assets:selectedAssets,selected_principal:principal,difference:selectedAssets-principal,conditional_capacity:o.facility?c.facility_capacity:0,conditional_scenario_difference:o.facility?selectedAssets+c.facility_capacity-principal:null,conditions:clone(c.facility_conditions),cash_forecast:null,safety_score:null};
}
function stress(D,opt={}){
 const b=D.liquidity_teaching;const o={receiptDay:b.receipt_day,...opt};
 if(!Number.isInteger(o.receiptDay)||o.receiptDay<1||o.receiptDay>b.observation_days)throw new RangeError('到账日须在1至3日观察期内');
 const events=[{day:o.receiptDay,order:0,label:'既有应收到账',amount:b.receipt},{day:b.supplier_day,order:1,label:'供应商付款',amount:-b.supplier_payment},{day:b.debt_day,order:1,label:'到期本金',amount:-b.debt_payment}].sort((a,b)=>a.day-b.day||a.order-b.order);
 let cash=b.initial_cash,min=cash;const eventRows=[];const days=[];
 for(let day=1;day<=b.observation_days;day++){
  events.filter(e=>e.day===day).forEach(e=>{cash+=e.amount;min=Math.min(min,cash);eventRows.push({...e,cash_before_financing:cash});});
  days.push({day,cash_before_financing:cash});
 }
 return {identity:'hypothetical_contract',receipt_day:o.receiptDay,initial_cash:b.initial_cash,events:eventRows,days,ending_cash:cash,minimum_cash:min,funding_gap:Math.max(0,-min),same_day_order:b.same_day_order,revenue_changed:false};
}
function bank(D){const b=clone(D.jpm_liquidity);return {...b,average_amount_ratio_pct:100*b.group.hqla/b.group.nco,period_end_asset_sum_approx_bn:b.period_end.hqla_pre_haircut_approx_bn+b.period_end.other_unencumbered_approx_bn,uninsured_share_pct:100*b.period_end.uninsured_estimate/b.period_end.deposits,total_unconditional_liquidity:null,run_probability:null};}
function adjust(D,selected={amort:true,sbc:true,restruct:true}){
 const a=D.sf_adjust;const keys=a.adjustments.map(a=>a.id);if(Object.keys(selected).some(k=>!keys.includes(k)))throw new Error('只允许经营利润调整项；没有自选税项');
 keys.forEach(k=>boolean(selected[k],k));
 const chosen=a.adjustments.filter(x=>selected[x.id]);const oi=a.gaap_oi+sum(chosen.map(x=>x.value));
 return {identity:'analyst_selected_operating_measure',selected:clone(selected),oi,margin_pct:100*oi/a.revenue,revenue:a.revenue,adjustments:clone(chosen),official:{oi:a.official_oi,ni:a.official_ni,eps:a.official_eps,fcf:a.fcf,gaap_ni:a.gaap_ni,gaap_eps:a.gaap_eps,diluted_shares_m:a.diluted_shares_m,tax_effect:a.tax_effect},scope:a.custom_scope};
}
function cash(D){
 const t=D.tables.sf_cash;const cfo=row(t,'cfo').values[0];const cfRows=t.rows.filter(r=>r.kind==='detail'&&r.section==='cfo');
 const operating=cfRows.map(r=>({id:r.id,label_original:r.label_original,label_zh:r.label_zh,value:r.values[0]}));
 const lines=[{id:'cfo',label_original:row(t,'cfo').label_original,label_zh:'经营现金流整体',value:cfo,section:'cfo'},...t.rows.filter(r=>r.kind==='detail'&&['cfi','cff'].includes(r.section)).map(r=>({id:r.id,label_original:r.label_original,label_zh:r.label_zh,value:r.values[0],section:r.section}))];
 const sources=lines.filter(r=>r.value>0),uses=lines.filter(r=>r.value<0),zero=lines.filter(r=>r.value===0);const sourceTotal=sum(sources.map(r=>r.value)),useTotal=-sum(uses.map(r=>r.value));
 const begin=row(t,'begin').values[0],fx=row(t,'fx').values[0];
 return {identity:'reported_cash_rows_regrouped',sources,uses,zero,sources_total:sourceTotal,uses_total:useTotal,cfo,cfi:row(t,'cfi').values[0],cff:row(t,'cff').values[0],net_three_activities:sourceTotal-useTotal,fx_separate:fx,change:sourceTotal-useTotal+fx,begin,end:begin+sourceTotal-useTotal+fx,operating_explanation:operating,operating_explanation_sum:sum(operating.map(r=>r.value)),note:'CFO展开替换整体；来源29028不含FX，补充现金披露不再累计。'};
}
function allocate(D,action='retain',opt={}){
 if(!['retain','repay','build','repurchase'].includes(action))throw new Error('未知资金用途');
 const base=clone(D.capital_teaching.initial);const budget=opt.budget===undefined?D.capital_teaching.budget:opt.budget;const price=opt.price===undefined?D.capital_teaching.repurchase_price:opt.price;
 nonnegative(budget,'预算');finite(price,'执行价');if(price<=0)throw new RangeError('执行价须大于0');if(budget>base.cash)throw new RangeError('预算超过初始现金');
 const state=clone(base);let sharesBought=0;
 if(action==='repay'){if(budget>base.debt)throw new RangeError('还债超过原债务');state.cash-=budget;state.debt-=budget;}
 if(action==='build'){state.cash-=budget;state.facility+=budget;}
 if(action==='repurchase'){sharesBought=budget/price;if(sharesBought>=base.shares)throw new RangeError('不能回购全部或超过原在外股数');state.cash-=budget;state.equity-=budget;state.shares-=sharesBought;}
 const assets=state.cash+state.other_assets+state.facility;const delta=Object.fromEntries(Object.keys(base).map(k=>[k,state[k]-base[k]]));
 return {identity:'hypothetical_instant_book_state',action,budget,price,initial:base,state,assets,liabilities_plus_equity:state.debt+state.equity,accounting_gap:assets-state.debt-state.equity,delta,shares_bought:sharesBought,future_return:null,wealth_change:null};
}
function paper(D){const p=D.paper_example;const repurchased=p.budget/p.price;const forgone=p.budget*p.interest*(1-p.tax)*p.period_fraction;return {identity:p.data_identity,shares_bought:repurchased,forgone_interest:forgone,eps:(p.earnings-forgone)/(p.shares-repurchased)};}
function integrated(D,branch){
 if(!['retail','bank'].includes(branch))throw new Error('请选择零售或银行');const a=D.integrated[branch];
 const end=a.cash_begin+a.cfo+a.cfi+a.cff+a.fx;
 if(branch==='retail')return {branch,period:a.period,profit:a.oi,ni:a.ni,cash_end:end,stock_gap:a.equity-a.equity_prior,shares_net_change:a.shares_end-a.shares_prior,inventory_ap_change:(a.inventory-a.ap)-(a.inventory_prior-a.ap_prior),reverse_balance_change:(a.inventory_prior-a.ap_prior)-(a.inventory-a.ap),cf_two_rows:a.cf_inventory+a.cf_ap,unexplained_difference:a.cf_inventory+a.cf_ap-((a.inventory_prior-a.ap_prior)-(a.inventory-a.ap)),income_growth:(row(D.tables.cost_income,'sales').values[0]-row(D.tables.cost_income,'merchandise').values[0])-(row(D.tables.cost_income,'sales').values[1]-row(D.tables.cost_income,'merchandise').values[1])+(row(D.tables.cost_income,'membership').values[0]-row(D.tables.cost_income,'membership').values[1])-(row(D.tables.cost_income,'sga').values[0]-row(D.tables.cost_income,'sga').values[1])};
 return {branch,period:a.period,profit:a.net_revenue-a.provision-a.noninterest_expense,ni:a.ni,cash_end:end,common_equity:a.equity-a.preferred,shares_end:a.issued_shares-a.treasury_shares,deposits_change:a.deposits-a.deposits_prior};
}
function worksheet(D,branch,input={}){
 const expected=integrated(D,branch);const required=['business','resources','funding','shareholders','alternatives','nextEvidence'];
 const presence=Object.fromEntries(required.map(k=>[k,typeof input[k]==='string'&&input[k].trim().length>0]));
 const isNumber=v=>v!==''&&v!==null&&v!==undefined&&Number.isFinite(Number(v));
 const checks={profit:isNumber(input.profit)&&Math.abs(Number(input.profit)-expected.profit)<.5,cash:isNumber(input.cash)&&Math.abs(Number(input.cash)-expected.cash_end)<.5};
 return {scope:'数字及非空检查，不认证推理质量或投资价值',checks,presence,numeric_ok:Object.values(checks).every(Boolean),fields_present:Object.values(presence).every(Boolean),expected};
}
return {maturity,stress,bank,adjust,cash,allocate,paper,integrated,worksheet};
});
