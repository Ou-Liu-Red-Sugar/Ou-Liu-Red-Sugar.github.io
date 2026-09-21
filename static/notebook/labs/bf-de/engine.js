/* BF-D+E: deterministic accounting teaching engines. No network or account access. */
(function(root, factory){
  if (typeof module === 'object' && module.exports) module.exports = factory;
  else root.BFDE = factory(root.BFDE_INPUTS);
})(typeof globalThis !== 'undefined' ? globalThis : this, function(D){
'use strict';
if (!D || D.input_id !== 'BFDE-SHARED-20260921-v1') throw new Error('缺少或不匹配的冻结输入');
const H=D.historical, X=D.supplemental, T=D.teaching;
const copy=x=>JSON.parse(JSON.stringify(x));
const sum=a=>a.reduce((s,v)=>s+v,0);
function num(v,name,min=-Infinity,max=Infinity){
  if(typeof v!=='number' || !Number.isFinite(v) || v<min || v>max) throw new Error(name+' 必须为范围内有限数值');
  return v;
}
function integer(v,name,min,max){num(v,name,min,max);if(!Number.isInteger(v))throw new Error(name+' 必须为整数');return v;}
function array(a,name){if(!Array.isArray(a)||a.length<1||a.length>100)throw new Error(name+' 须含1–100期');a.forEach(v=>num(v,name,0,1e12));return a;}
function same(a,b,tol=1e-8){return Math.abs(a-b)<=tol*Math.max(1,Math.abs(a),Math.abs(b));}
function month(s){if(typeof s!=='string'||!/^\d{4}-(0[1-9]|1[0-2])$/.test(s))throw new Error('日期须为YYYY-MM');let[y,m]=s.split('-').map(Number);return y*12+m-1;}
function mstr(m){return Math.floor(m/12)+'-'+String(m%12+1).padStart(2,'0');}
function assetTimeline(overrides={}){
 const p=Object.assign(copy(T.asset),overrides);
 num(p.cost,'成本',0,1e9);num(p.residual,'残值',0,p.cost);num(p.initial_cash,'初始现金',0,1e12);
 integer(p.life_months,'寿命月数',1,1200);integer(p.months,'观察月数',1,240);
 const start=month(p.start),acq=month(p.acquisition),ready=month(p.ready),pay=month(p.payment);
 for(const [name,m] of [['取得',acq],['可用',ready],['付款',pay]])if(m<start||m>start+1200)throw new Error(name+'月份超出观察起点允许范围');
 if(ready<acq)throw new Error('未取得资源前不能投用');
 let cash=p.initial_cash,prepaid=0,cip=0,gross=0,accum=0,ap=0,acquired=false,paid=false,usable=false;
 const rows=[],monthly=(p.cost-p.residual)/p.life_months;
 function snap(date,event,period_dep=0){
  const assets=cash+prepaid+cip+gross-accum,equity=p.initial_cash-accum;
  rows.push({date,event,cash,prepaid,cip,in_use_gross:gross,accumulated_depreciation:accum,net_ppe:cip+gross-accum,accounts_payable:ap,equity,total_assets:assets,period_depreciation:period_dep,balance_residual:assets-ap-equity});
 }
 snap(mstr(start)+'-01','期初');
 for(let m=start;m<start+p.months;m++){
  const d=mstr(m)+'-01';
  // Events with identical dates: acquisition, ready-for-use, payment. Month-end allocation follows.
  if(m===acq){acquired=true;cip=p.cost;if(paid)prepaid=0;else ap=p.cost;snap(d,'取得控制权：确认在建资源');}
  if(m===ready){if(!acquired)throw new Error('可用状态缺少资源取得');usable=true;gross=cip;cip=0;snap(d,'达到可用状态：在建转入使用中');}
  if(m===pay){if(cash<p.cost-1e-9)throw new Error('付款所需现金不足；本例不自动生成融资');cash-=p.cost;paid=true;if(acquired)ap=0;else prepaid=p.cost;snap(d,acquired?'付款：结清应付':'取得前付款：形成预付款');}
  let dep=0;if(usable&&m-ready<p.life_months){dep=Math.min(monthly,Math.max(0,p.cost-p.residual-accum));accum+=dep;}
  snap(mstr(m)+'-末','月末分摊',dep);
 }
 if(rows.some(r=>!same(r.balance_residual,0)))throw new Error('会计平衡检查失败');
 return {identity:p.identity,unit:p.unit,parameters:p,monthly_depreciation:monthly,rows,ending:rows.at(-1)};
}
function lease(company='costco'){
 if(!['costco','salesforce'].includes(company))throw new Error('公司选项无效');
 const v=H[company][company==='costco'?'leases_2025':'leases_2026'];
 const expense=company==='costco'?[['Operating lease costs',v.operating_cost],['Amortization of lease assets',v.finance_asset_amortization],['Interest on lease liabilities',v.finance_interest_expense],['Variable lease costs',v.variable_cost]]:[['Operating lease cost',v.operating_cost],['Amortization of right-of-use assets',v.finance_asset_amortization],['Interest on lease liabilities',v.finance_interest_expense]];
 return {company,period:H[company].periods[0],unit:'USD million',source_id:H[company].source_id,locator:v.locator,
  balances:[['Operating lease right-of-use assets',v.operating_rou_asset],['Finance lease assets, net',v.finance_lease_asset_net],['Operating lease liabilities, current',v.operating_liability_current],['Operating lease liabilities, noncurrent',v.operating_liability_noncurrent],['Finance lease liabilities, current',v.finance_liability_current],['Finance lease liabilities, noncurrent',v.finance_liability_noncurrent]],
  operating_liability:v.operating_liability_current+v.operating_liability_noncurrent,finance_liability:v.finance_liability_current+v.finance_liability_noncurrent,
  maturity:v.payment_buckets.map((b,i)=>({bucket:b,operating:v.operating_payments[i],finance:v.finance_payments[i]})),
  undiscounted:[sum(v.operating_payments),sum(v.finance_payments)],interest_deduction:[v.operating_interest_deduction,v.finance_interest_deduction],
  expense_rows:expense,listed_expense_total:sum(expense.map(r=>r[1])),expense_scope:company==='costco'?'费用表不含不重大的短期费用和转租收入；含可变费用':'本表列示经营费用、融资摊销及利息，不另推未列示现金范围',
  cash_rows:[['Operating cash flows — operating leases',v.cash_operating_leases],['Operating cash flows — finance leases',v.cash_finance_interest],['Financing cash flows — finance leases',v.cash_finance_principal]],
  liability_measurement_cash:v.cash_operating_leases+v.cash_finance_interest+v.cash_finance_principal,
  cash_scope:'Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金',
  finance_asset_location:v.finance_asset_balance_sheet_location,remaining_term:v.remaining_term_years_operating_finance,
  exclusions:company==='costco'?{signed_not_commenced:v.signed_not_commenced_payments_excluded,sublease_income_not_netted:v.future_operating_sublease_income_not_netted}:null};
}
function intangible(overrides={}){
 const p=Object.assign(copy(T.intangible),overrides);
 array(p.rd,'研发流量');array(p.sga_excluding_rd,'不含研发的SG&A');if(p.rd.length!==p.sga_excluding_rd.length)throw new Error('两条流量序列长度必须相同');
 for(const k of ['alpha','gamma','delta_r','delta_s'])num(p[k],k,0,1);
 num(p.initial_r,'知识资本期初',0,1e12);num(p.initial_s,'组织资本期初',0,1e12);
 let g=p.initial_r,s=p.initial_s;const rows=[];
 p.rd.forEach((rd,i)=>{const og=g,os=s,dg=og*p.delta_r,ds=os*p.delta_s,ig=p.alpha*rd,is=p.gamma*p.sga_excluding_rd[i];g=og-dg+ig;s=os-ds+is;rows.push({period:'T'+(i+1),rd,sga_excluding_rd:p.sga_excluding_rd[i],opening_g:og,opening_s:os,depreciation_g:dg,depreciation_s:ds,investment_g:ig,investment_s:is,g,s,total:g+s});});
 return {parameters:p,rows,ending:rows.at(-1)};
}
function intangibleFacts(){
 const s=H.salesforce,p=s.informatica_2025_ppa,r=s.intangible_roll;
 return {period:'FY2026 / 2026-01-31',unit:'USD million',preliminary:true,consideration:sum(Object.values(p.consideration_components)),assets:sum(Object.values(p.assets)),liabilities:sum(Object.values(p.liabilities_positive)),identifiable_net_assets:sum(Object.values(p.assets))-p.assets.goodwill-sum(Object.values(p.liabilities_positive)),goodwill:p.assets.goodwill,identifiable_intangibles:sum(p.intangibles.map(x=>x.amount)),goodwill_share:p.assets.goodwill/p.consideration_total,award_total:p.assumed_equity_fair_value,award_purchase:p.consideration_components.assumed_equity_purchase_component,award_future_service:p.assumed_equity_future_service_component,amortization_expense:s.income.acquired_intangibles_amortization_cost_of_revenue[0]+s.income.acquired_intangibles_amortization_sales_marketing[0],accumulated_amortization_net_change:r.expense_and_retirements_net_positive,net_open:r.net_opening,gross_net_change:r.additions_and_retirements_net,net_close:r.net_closing,rd:s.income.rd_expense[0],included_rd_sbc:s.income.rd_sbc_included[0],goodwill_roll:[r.goodwill_opening,r.regrello,r.informatica,r.other_acquisitions_adjustments,r.goodwill_closing]};
}
function bridge(opening,rows,ending){let c=opening;return {opening,rows:rows.map(([label,value])=>{const before=c;c+=value;return {label,value,before,after:c};}),computed:c,reported:ending,residual:c-ending};}
function segments(){const s=H.caterpillar.segments_2025;
 const revenue=bridge(s.reportable_sales_total,[['All Other Segment',s.all_other_sales],['Corporate Items and Eliminations',s.corporate_eliminations_sales]],s.consolidated_sales);
 const profit=bridge(s.reportable_profit_total,X.cat_profit_rows_original.map(([key,en,zh])=>[en+'／'+zh,s.profit_reconciling_items[key]]),s.consolidated_pretax_profit);
 return {unit:'USD million',period:'FY2025',revenue,profit,external:sum(s.rows.map(r=>r.external_column))+s.all_other_external_column+s.corporate_external_column,intersegment:sum(s.rows.map(r=>r.intersegment_column))+s.all_other_intersegment_column+s.corporate_intersegment_column,fp_external_includes_group:s.financial_products_external_column_includes_group_revenue,operating_to_pretax:bridge(s.consolidated_operating_profit,[['Interest expense excluding Financial Products',-s.interest_expense_excluding_financial_products],['Other income',s.other_income]],s.consolidated_pretax_profit),rows:copy(s.rows)};
}
const driverNames={sales_volume_including_product_mix:'Sales Volume（含产品组合）',sales_volume:'Sales Volume（含新产品）',price_realization:'Price Realization',manufacturing_costs:'Manufacturing Costs',sga_rd:'SG&A / R&D',currency:'Currency',financial_products:'Financial Products',restructuring:'Restructuring',other:'Other'};
function historicalDrivers(){const c=H.caterpillar;const make=o=>bridge(o.opening_2024,Object.entries(o.drivers).map(([k,v])=>[driverNames[k],v]),o.closing_2025);return {identity:'Company historical attribution, not structural coefficients',unit:'USD million',revenue:make(c.revenue_bridge),profit:make(c.operating_profit_bridge)};}
function cvp(company='A',sales_change=T.cvp_extension.sales_change,options={}){
 const base=H.teaching_cvp.companies.find(x=>x.name===company);if(!base)throw new Error('未知教学公司');
 num(sales_change,'销量变化',-1,5);
 const p=Object.assign(copy(T.cvp_extension),options); p.sales_change=sales_change;
 if(typeof p.step_enabled!=='boolean')throw new Error('产能台阶须为布尔选项');num(p.threshold,'产能阈值',-1,5);num(p.step_fixed_cost,'新增固定成本',0,1e12);
 const fixed=options.fixed_costs===undefined?base.fixed_costs:num(options.fixed_costs,'固定成本',0,1e12);
 const cm=base.sales-base.variable_costs,oi=cm-fixed,dol=oi===0?null:cm/oi,newSales=base.sales*(1+sales_change),newVC=base.variable_costs*(1+sales_change),step=p.step_enabled&&sales_change>p.threshold?p.step_fixed_cost:0,linearOI=cm*(1+sales_change)-fixed,newOI=linearOI-step;
 return {identity:H.teaching_cvp.identity,unit:'USD',company,parameters:p,base_sales:base.sales,base_variable_costs:base.variable_costs,fixed_costs:fixed,contribution:cm,base_oi:oi,dol,sales_change,new_sales:newSales,new_variable_costs:newVC,added_fixed_cost:step,linear_oi:linearOI,new_oi:newOI,relative_oi_change:oi===0?null:(newOI-oi)/oi,constant_parameter_identity:oi===0?null:dol*sales_change,exact_linear_identity_applies:oi!==0&&step===0};
}
function workingCapital(){const c=H.costco, w=c.working_capital,f=c.flows,days=c.fiscal_weeks[0]*7,avgI=sum(w.inventory)/2,avgP=sum(w.accounts_payable)/2,previous=w.inventory[1]-w.accounts_payable[1],current=w.inventory[0]-w.accounts_payable[0],reverse=previous-current,cfo=f.cashflow_inventory_adjustment[0]+f.cashflow_accounts_payable_adjustment[0];
 return {unit:'USD million / days',period:'FY2025 (52 weeks)',days,average_inventory:avgI,average_payables:avgP,denominator:f.merchandise_costs[0],denominator_identity:'Merchandise costs proxy, not independently observed credit purchases',dio_proxy:avgI/f.merchandise_costs[0]*days,dpo_proxy:avgP/f.merchandise_costs[0]*days,two_proxy_difference:(avgI-avgP)/f.merchandise_costs[0]*days,dso:null,ccc:null,unidentified_reason:'混合应收不是可匹配的客户赊销应收；缺客户DSO，不能补0或构造完整CCC',two_row_balance_current:current,two_row_balance_previous:previous,reverse_balance_change:reverse,cfo_two_rows:cfo,unallocated_difference:cfo-reverse};}
function retailCycle(overrides={}){
 const p=Object.assign(copy(T.retail_cycle),overrides);num(p.cost,'成本',0,1e9);num(p.price,'销售额',0,1e9);
 for(const k of ['acquire_day','sale_day','collect_day','pay_day'])integer(p[k],k,0,720);
 if(p.sale_day<p.acquire_day||p.collect_day<p.sale_day||p.pay_day<p.acquire_day)throw new Error('本合同要求取得后出售、出售后收款、取得后付款');
 const events=[{day:p.acquire_day,priority:0,event:'取得存货／应付',amount:0},{day:p.sale_day,priority:1,event:'赊销并结转成本',amount:0},{day:p.collect_day,priority:2,event:'收客户款',amount:p.price},{day:p.pay_day,priority:3,event:'支付供应商',amount:-p.cost}].sort((a,b)=>a.day-b.day||a.priority-b.priority);
 let cash=0,min=0,inv=0,ar=0,ap=0,profit=0;const rows=[];
 for(const e of events){if(e.priority===0){inv=p.cost;ap=p.cost;}if(e.priority===1){inv=0;ar=p.price;profit=p.price-p.cost;}if(e.priority===2)ar=0;if(e.priority===3)ap=0;cash+=e.amount;min=Math.min(min,cash);rows.push({...e,cumulative_net_cash:cash,inventory:inv,receivable:ar,payable:ap,profit});}
 return {parameters:p,rows,maximum_funding_gap:-min,ending_net_cash:cash,profit};
}
function subscriptionCycle(overrides={}){
 const p=Object.assign(copy(T.subscription_cycle),overrides);num(p.amount,'合同金额',0,1e9);num(p.monthly_cost,'月成本',0,1e9);integer(p.term_months,'服务月数',1,120);integer(p.month_days,'教学月天数',1,60);integer(p.collection_day,'收款日',0,7200);if(p.invoice_day!==0)throw new Error('该模板固定第0日开票及成立无条件收款权');
 const end=p.term_months*p.month_days;const days=[0,p.collection_day,...Array.from({length:p.term_months},(_,i)=>(i+1)*p.month_days)].sort((a,b)=>a-b);
 let cash=0,min=0,ar=p.amount,rev=0,cost=0;const rows=[];
 for(const day of [...new Set(days)]){
  let ev=[];if(day===0)ev.push('开票／无条件应收权');
  if(day===p.collection_day){cash+=p.amount;ar=0;ev.push('收款');}
  if(day>0&&day<=end&&day%p.month_days===0){rev+=p.amount/p.term_months;cost+=p.monthly_cost;cash-=p.monthly_cost;ev.push('完成服务月并支付成本');}
  min=Math.min(min,cash);rows.push({day,event:ev.join('；'),revenue:rev,receivable:ar,unearned:Math.max(0,p.amount-rev),cumulative_service_cost:cost,profit:rev-cost,cumulative_net_cash:cash});
 }
 return {parameters:p,rows,maximum_funding_gap:-min,ending_net_cash:cash,profit:rev-cost};
}
function defaults(){return {asset:assetTimeline(),asset_late_payment:assetTimeline({payment:'2026-06'}),asset_late_ready:assetTimeline({ready:'2026-07'}),lease_costco:lease('costco'),lease_salesforce:lease('salesforce'),intangible_facts:intangibleFacts(),intangible: intangible(),intangible_gamma_half:intangible({gamma:0.5}),segments:segments(),drivers:historicalDrivers(),cvp:[cvp('A',0.1),cvp('A',-0.2),cvp('B',0.1),cvp('B',-0.2)],cvp_step:cvp('A',0.2,{step_enabled:true}),working_capital:workingCapital(),retail:retailCycle(),retail_early_payment:retailCycle({pay_day:10}),retail_late_collection:retailCycle({collect_day:35}),subscription:subscriptionCycle(),subscription_late:subscriptionCycle({collection_day:90}),subscription_120:subscriptionCycle({collection_day:120})};}
return {input_id:D.input_id,assetTimeline,lease,intangible,intangibleFacts,segments,historicalDrivers,cvp,workingCapital,retailCycle,subscriptionCycle,defaults};
});
