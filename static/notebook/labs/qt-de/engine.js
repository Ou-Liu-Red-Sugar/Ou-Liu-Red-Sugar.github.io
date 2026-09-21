/* QT-DE pure computations. Frozen NumPy runs are DATA, not browser PCG64. */
(function(root){
'use strict';
const finite=(x)=>typeof x==='number'&&Number.isFinite(x);
const requireFinite=(x,name)=>{if(!finite(x))throw Error(name+' 必须为有限数值');return x;};
function score(y,p,b){
 if(!Array.isArray(y)||!y.length||y.length!==p.length||y.length!==b.length)throw Error('数组长度必须相同且非空');
 [y,p,b].forEach(a=>a.forEach(v=>requireFinite(v,'输入')));
 let ss=0,den=0,mae=0;y.forEach((v,i)=>{ss+=(v-p[i])**2;den+=(v-b[i])**2;mae+=Math.abs(v-p[i]);});
 return {n:y.length,rmse_decimal:Math.sqrt(ss/y.length),mae_decimal:mae/y.length,sse_decimal_squared:ss,benchmark_sse_decimal_squared:den,r2_os_vs_expanding_mean:den>0?1-ss/den:null};
}
function bh(p,q,strict=true){
 if(!Array.isArray(p)||!p.length)throw Error('至少需要一个 p 值');
 requireFinite(q,'q');if(!(q>0&&q<1))throw Error('q 必须在 (0,1)');
 p.forEach(v=>{requireFinite(v,'p');if(v<0||v>1)throw Error('p 值必须在 [0,1]');});
 const rows=p.map((v,i)=>({p:v,index:i})).sort((a,b)=>a.p-b.p||a.index-b.index);let k=0;
 rows.forEach((r,i)=>{r.rank=i+1;r.threshold=q*(i+1)/p.length;r.hit=strict?r.p<r.threshold:r.p<=r.threshold;if(r.hit)k=i+1;});
 rows.forEach(r=>r.rejected=r.rank<=k);
 return {k,rows,rejected:rows.filter(r=>r.rejected).map(r=>r.index),strict,equalities:rows.filter(r=>r.p===r.threshold).length};
}
function scaleExample(c=10,lambda=1,yScale=100){
 [c,lambda,yScale].forEach(v=>requireFinite(v,'参数'));if(c===0||lambda<0||yScale===0)throw Error('尺度须非零，lambda 非负');
 return {base_beta:1/(1+lambda),raw_scaled_beta:c/(c*c+lambda),raw_scaled_prediction:c*c/(c*c+lambda),
  adjusted_lambda:c*c*lambda,adjusted_prediction:1/(1+lambda),response_scaled_beta:yScale/(1+lambda),response_back:1/(1+lambda)};
}
function commission(q,p){requireFinite(q,'股数');requireFinite(p,'成交价');if(!Number.isInteger(q)||p<=0)throw Error('需要整数股数及正成交价');return q===0?0:Math.min(.01*p*Math.abs(q),Math.max(1,.005*Math.abs(q)));}
function continuous(o){
 const {mu,rho,sigma,gamma,w0,kappa,cap,cash_min}=o;
 Object.entries(o).forEach(([k,v])=>requireFinite(v,k));
 if(rho<0||sigma<=0||gamma<=0||w0<0||w0>1||kappa<0||kappa>=1||cap<0||cap>1||cash_min<0)throw Error('参数超出本实验范围');
 if(1-kappa*w0<cash_min)return {feasible:false,reason:'即使风险金额为零，也无法满足现金约束'};
 const upperCash=cash_min>1-w0?(1-kappa*w0-cash_min)/(1-kappa):(1+kappa*w0-cash_min)/(1+kappa);
 const upper=Math.min(cap,upperCash),a=gamma*sigma*sigma,eff=mu-rho;
 const raw=eff-a*w0>kappa?(eff-kappa)/a:eff-a*w0< -kappa?(eff+kappa)/a:w0;
 const x=Math.max(0,Math.min(upper,raw)),cost=kappa*Math.abs(x-w0),cash=1-x-cost,wealth=1-cost,pen=a*x*x/2;
 return {feasible:true,upper,x,cost,cash,post_cost_wealth:wealth,post_weight_risky:x/wealth,post_weight_cash:cash/wealth,
 nominal_expected_net_return:mu*x-cost,worst_expected_net_return:eff*x-cost,risk_penalty:pen,objective:eff*x-cost-pen,
 no_trade_mu_band:[a*w0-kappa,a*w0+kappa],w0_feasible_interior:w0>0&&w0<upper};
}
function integer(o){
 const {mu,rho,sigma,gamma,wealth,mid,ask,cap,cash_min,mode}=o;
 Object.entries(o).filter(([k])=>k!=='mode').forEach(([k,v])=>requireFinite(v,k));
 if(rho<0||sigma<0||gamma<0||wealth<=0||mid<=0||ask<mid||!Number.isInteger(cap)||cap<0||cap>80||cash_min<0)throw Error('参数超出整股教学范围');
 if(!['no_cost','spread_only','spread_and_commission'].includes(mode))throw Error('未知费用模式');
 const rows=[];
 for(let q=0;q<=cap;q++){
  const spread=mode==='no_cost'?0:q*(ask-mid),fee=mode==='spread_and_commission'?commission(q,ask):0,cost=spread+fee,cash=wealth-q*mid-cost,x=q*mid/wealth,pen=wealth*gamma*x*x*sigma*sigma/2;
  const ev=q*mid*mu-cost,worst=q*mid*(mu-rho)-cost,term=[cash+q*mid*(1+mu-sigma),cash+q*mid*(1+mu+sigma)];
  rows.push({q,feasible:cash>=cash_min,spread,commission:fee,cost,cash,x,post_cost_wealth:wealth-cost,post_weight_risky:q*mid/(wealth-cost),
 expected_gross_pnl:q*mid*mu,nominal_expected_net_pnl:ev,worst_expected_net_pnl:worst,risk_penalty_dollars:pen,objective_dollars:worst-pen,terminal_mid_wealth:term,returns_prewealth:term.map(v=>(v-wealth)/wealth)});
 }
 const good=rows.filter(r=>r.feasible);if(!good.length)return {feasible:false,rows,reason:'没有满足现金下限的股数'};
 const best=Math.max(...good.map(r=>r.objective_dollars));
 // Floating display engine groups only roundoff-sized ties; exact Fraction fixtures are supplied.
 const tol=64*Number.EPSILON*Math.max(1,...good.map(r=>Math.abs(r.objective_dollars)));
 const ties=good.filter(r=>Math.abs(r.objective_dollars-best)<=tol).map(r=>r.q);
 return {feasible:true,rows,optimal_q_all_ties:ties,display_q:ties[0],largest_feasible_q:good[good.length-1].q,objective:best,tie_tolerance:tol};
}
function beaAt(rows,cutoff){let t=Date.parse(cutoff);if(!Number.isFinite(t))throw Error('无效日期');return rows.filter(r=>Date.parse(r.release_at)<=t).slice(-1)[0]||null;}
function matureMonth(cutoff,h=3){if(!/^\d{6}$/.test(cutoff)||!Number.isInteger(h)||h<1)throw Error('年月/期限无效');let y=Number(cutoff.slice(0,4)),m=Number(cutoff.slice(4));if(m<1||m>12)throw Error('月份无效');const t=y*12+m-1-h;return String(Math.floor(t/12))+String(t%12+1).padStart(2,'0');}
const api={score,bh,scaleExample,commission,continuous,integer,beaAt,matureMonth};root.QTDE=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
