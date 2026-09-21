/* Pure functions. Parameters labelled teaching_assumption are not quotes or trading instructions. */
(function(global){
"use strict";
function finite(v,name){if(typeof v!=="number"||!Number.isFinite(v))throw new TypeError(name+"须为有限数字");return v;}
function within(v,min,max,name){finite(v,name);if(v<min||v>max)throw new RangeError(name+"超出教学范围");return v;}
function positive(v,name){finite(v,name);if(v<=0)throw new RangeError(name+"必须大于零");return v;}
function int(v,name){finite(v,name);if(!Number.isInteger(v))throw new RangeError(name+"须为整数");return v;}
function moneyFace(v){within(v,100,100000000,"面值");if(Math.abs(v/100-Math.round(v/100))>1e-9)throw new RangeError("面值须为100的整数倍");return v;}
function sum(a){return a.reduce((s,x)=>s+x,0);}
function fixedPV(cfs,times,rates){if(cfs.length!==times.length||rates.length!==times.length)throw new RangeError("维度不一致");
return cfs.map((c,i)=>{positive(c,"现金流");positive(times[i],"期限");if(i&&times[i]<=times[i-1])throw new RangeError("期限必须递增");
finite(rates[i],"零息利率");if(rates[i]<=-1)throw new RangeError("1+利率必须为正");return c/Math.pow(1+rates[i],times[i]);});}
function ytm(cfs,times,price){
positive(price,"价格");let lo=-.5,hi=.5;
const pv=y=>sum(fixedPV(cfs,times,times.map(()=>y)));
while(pv(lo)<price&&lo>-.999999)lo=-1+(1+lo)/2;
while(pv(hi)>price&&hi<1e6)hi=2*hi+1;
if(pv(lo)<price||pv(hi)>price)throw new RangeError("YTM根未括住");
for(let i=0;i<140;i++){let m=(lo+hi)/2;if(pv(m)>price)lo=m;else hi=m;}
return(lo+hi)/2;
}
function noteMetrics(face,y,note){
moneyFace(face);within(y,-.5,.5,"名义年率");
const q=note.payments_per_year,n=note.periods,c=face*note.coupon_annual/q;
const cf=Array.from({length:n},(_,i)=>c+(i===n-1?face:0));
const a=1+y/q;let p=0,w=0,d1=0,d2=0;
cf.forEach((v,i)=>{const k=i+1,term=v/Math.pow(a,k);p+=term;w+=k/q*term;
d1-=k/q*v/Math.pow(a,k+1);d2+=k*(k+1)/(q*q)*v/Math.pow(a,k+2);});
return{price:p,coupon:c,mac:w/p,modified:-d1/p,dv01:-d1*.0001,convexity:d2/p,
d1,d2,effective_annual:Math.pow(a,q)-1,cashflows:cf};
}
function noteCase(D,face,which,y){
if(!["original","reopening"].includes(which))throw new RangeError("未知发行批次");
moneyFace(face);if(which==="original")within(y,0,.20,"教学原始发行收益率");const n=D.note,x=n[which],clean=face*x.clean_per_100/100,accrued=face*x.accrued_per_1000/1000;
return{which,face,issue:x.issue,official_yield:x.yield,clean,accrued,full:clean+accrued,
model:which==="original"?noteMetrics(face,y,n):null,
schedule:n.schedule.map(r=>({...r,coupon:r.coupon_per_1000*face/1000,principal:r.principal_per_1000*face/1000,
cashflow:(r.coupon_per_1000+r.principal_per_1000)*face/1000})),
identity:"source-backed contract; face/slider are teaching settings; actual receipt unverified"};
}
function localRisk(D,face,shockBp){
within(shockBp,-200,200,"冲击bp");let base=noteMetrics(face,D.note.original.yield,D.note);
const dy=shockBp/10000,after=D.note.original.yield+dy,exact=noteMetrics(face,after,D.note).price;
const linear=base.price+base.d1*dy,quadratic=linear+base.d2*dy*dy/2;
return{base,shock_bp:shockBp,after_yield:after,exact,linear,quadratic,linear_error:linear-exact,quadratic_error:quadratic-exact};
}
function curves(D,spots,shockBp){
if(spots.length!==3)throw new RangeError("需3个spot点");spots.forEach(s=>within(s,-.05,.20,"教学spot"));
within(shockBp,0,200,"曲线冲击bp");const h=shockBp/10000,patterns=[
["base",[0,0,0]],["parallel_up",[h,h,h]],["parallel_down",[-h,-h,-h]],["flattening",[h,0,-h]],["steepening",[-h,0,h]]];
const rows=patterns.map(([name,d])=>{const rates=spots.map((s,i)=>s+d[i]),pv=fixedPV(D.curve.cashflows,D.curve.times,rates),price=sum(pv);
return{name,spot_rates:rates,pv,price,ytm:ytm(D.curve.cashflows,D.curve.times,price)};});
rows.forEach(r=>{r.delta=r.price-rows[0].price;r.delta_pct=r.delta/rows[0].price*100;});
return{rows,cashflows:D.curve.cashflows,times:D.curve.times,compounding:"annual",identity:"synthetic curves; no Treasury historical quotes"};
}
function callable(D,face,scenario){
positive(face,"面值");if(face%1000!==0)throw new RangeError("面额须为1000的整数倍");
if(!["no_call","first_call"].includes(scenario))throw new RangeError("未知情景");
const years=scenario==="first_call"?3:10,coupon=face*D.callable.coupon_annual;
return{scenario,years,coupon,coupon_count:years,total_nominal:face+years*coupon,
principal_date:scenario==="first_call"?D.callable.first_call:D.callable.maturity,
identity:"conditional full redemption/performance; not forecast, not comparable holding return"};
}
function bill(D,face){
moneyFace(face);let b=D.bill,purchase=face*b.price_per_100/100,diff=face-purchase,hpr=diff/purchase;
return{face,purchase,difference:diff,hpr,simple_annual_365:hpr*365/b.days,discount_rate:b.discount_rate,
official_investment_rate:b.investment_rate,price_from_discount:face*(1-b.discount_rate*b.days/360),
identity:"observed auction terms, hypothetical face; assumes contractual maturity payment"};
}
function marginConvert(value,from,to){if(!["cash","security"].includes(from)||!["cash","security"].includes(to))throw new RangeError("分母错误");within(value,0,from==="cash"?1:.50,"抵押比例");
if(from===to)return value;return from==="cash"?value/(1+value):value/(1-value);}
function repo(D,p){
["cash","lender_cash","borrower_eligible_collateral","borrower_buffer","proceeds_spent"].forEach(k=>within(p[k],0,1e12,k));
positive(p.cash,"现金本金");within(p.rate,0,.20,"教学利率");int(p.days,"教学天数");within(p.days,1,30,"教学天数");
if(p.proceeds_spent>p.cash)throw new RangeError("本例动用本金不能超过借款本金");
const h=marginConvert(p.margin_value,p.margin_basis,"cash"),k=h/(1+h);
const required=p.cash*(1+h),interest=p.cash*p.rate*p.days/360,due=p.cash+interest;
let failures=[];if(p.lender_cash+1e-7<p.cash)failures.push("放款人可用现金不足");
if(p.borrower_eligible_collateral+1e-7<required)failures.push("融资人可交付证券不足");
const remaining=p.borrower_buffer+p.cash-p.proceeds_spent,gap=Math.max(0,due-remaining);
return{status:failures.length?"blocked_at_open":gap>1e-7?"funding_gap_at_maturity":"conditional_complete",
opening_ok:!failures.length,completion_ok:!failures.length&&gap<=1e-7,failures,
required_collateral:required,margin_cash:h,margin_security:k,interest,repurchase_cash:due,
funding_gap:failures.length?null:gap,borrower_maturity_cash:failures.length?null:remaining,
conditional_end:failures.length||gap>1e-7?null:{lender:p.lender_cash+interest,borrower:remaining-due},
flows:failures.length?null:{opening:{lender:-p.cash,borrower:p.cash},repayment:{lender:due,borrower:-due}},
identity:"teaching ACT/360 and collateral ratio; no default liquidation, no trade executed"};
}
function fx(D,amount,direction,date){
within(amount,0,1e12,"原币金额");
let rec=D.fx.dates[date];if(!rec)throw new RangeError("未冻结此日期");
const pairs={EUR_USD:["EUR","USD","EUR",true],USD_EUR:["USD","EUR","EUR",false],
USD_JPY:["USD","JPY","JPY",true],JPY_USD:["JPY","USD","JPY",false]};
let q=pairs[direction];if(!q)throw new RangeError("未知方向");
const [from,to,currency,multiply]=q,rate=rec[currency];
if(rate===null)return{status:"missing",date,from,to,output:null,ledger:null,identity:"ND is not zero"};
positive(rate,"参考汇率");const out=multiply?amount*rate:amount/rate;
return{status:"reference_only",date,from,to,rate,unit:D.fx.units[currency],operation:multiply?"multiply":"divide",
output:out,ledger:{[from]:-amount,[to]:out},ledger_identity:"假设按参考数完成兑换时的记账，不是实际成交或到账",settlement_confirmed:false};
}
const E={noteMetrics,noteCase,localRisk,curves,callable,bill,marginConvert,repo,fx,fixedPV,ytm};
if(typeof module!=="undefined"&&module.exports)module.exports=E;
global.MC_ENGINE=E;
})(typeof window!=="undefined"?window:globalThis);
