/* QT-B pure deterministic computation. No file/network access.
   All default parameters are provided by shared_inputs.json, never by this engine. */
(function(root){
"use strict";
const sum = xs => xs.reduce((a,b)=>a+b,0);
function finite(x,name){if(typeof x!=="number"||!Number.isFinite(x))throw Error(name+" 必须为有限数");return x;}
function arr(a,n,name){if(!Array.isArray(a)||a.length!==n)throw Error(name+" 长度错误");a.forEach((x,i)=>finite(x,name+"["+i+"]"));return a;}
function probabilities(p,tol){
  finite(tol,"概率容差");if(tol<0)throw Error("概率容差不得为负");
  if(!Array.isArray(p)||!p.length)throw Error("概率数组不能为空");
  p.forEach((v,i)=>{finite(v,"概率 "+(i+1));if(v<0||v>1)throw Error("概率必须在 [0,1] 内");});
  if(Math.abs(sum(p)-1)>tol)throw Error("概率总和必须为 1；不会自动归一化");
  return p;
}
function partition(groups,n){
  if(!Array.isArray(groups)||!groups.length)throw Error("划分不能为空");
  const seen=new Set();
  groups.forEach(g=>{
    if(!Array.isArray(g)||!g.length)throw Error("分组不能为空");
    g.forEach(i=>{if(!Number.isInteger(i)||i<0||i>=n||seen.has(i))throw Error("分组必须恰好覆盖每个状态一次");seen.add(i);});
  });
  if(seen.size!==n)throw Error("分组遗漏状态");
  return groups;
}
function event(e,n){
 if(!Array.isArray(e)||new Set(e).size!==e.length)throw Error("事件索引必须唯一");
 e.forEach(i=>{if(!Number.isInteger(i)||i<0||i>=n)throw Error("非法事件索引");});return e;
}
function dot(p,x){arr(x,p.length,"变量");return sum(p.map((v,i)=>v*x[i]));}
function payoff(c){
 arr(c.settlement_points,c.state_ids.length,"结算值");
 finite(c.strike_points,"行权价");finite(c.multiplier_usd_per_point,"乘数");finite(c.contracts,"合约数量");
 if(c.multiplier_usd_per_point<=0||c.contracts<=0)throw Error("乘数和合约数量必须为正");
 if(c.payoff_type!=="call")throw Error("本批实验仅采用看涨支付");
 const x=c.settlement_points.map(s=>c.multiplier_usd_per_point*c.contracts*Math.max(s-c.strike_points,0));
 return arr(x,c.state_ids.length,"支付");
}
function conditional(x,p,groups,tol){
 probabilities(p,tol);arr(x,p.length,"变量");partition(groups,p.length);
 let vector=Array(p.length).fill(0);
 const rows=groups.map(indices=>{
  const mass=sum(indices.map(i=>p[i])),total=sum(indices.map(i=>p[i]*x[i]));
  const mean=mass===0?0:total/mass;finite(total,"分组积分");finite(mean,"条件平均");
  indices.forEach(i=>vector[i]=mean);
  return {indices:indices.slice(),mass,total,mean,ratio_defined:mass>0,version_note:mass===0?"零概率组：比例未定义；采用组内常数 0 版本":""};
 });
 return {rows,vector,expectation:dot(p,x),conditional_expectation:dot(p,vector)};
}
function measurable(y,groups){
 if(!Array.isArray(y)||!y.length)throw Error("变量不能为空");arr(y,y.length,"候选函数");partition(groups,y.length);
 const violations=groups.filter(g=>g.some(i=>y[i]!==y[g[0]])).map(g=>g.slice());
 return {measurable:violations.length===0,violations};
}
function sigmaEvents(groups,n){
 partition(groups,n);if(groups.length>12)throw Error("事件枚举仅用于最多 12 组的有限实验");
 const events=[];
 for(let mask=0;mask<2**groups.length;mask++){
  let e=[];groups.forEach((g,j)=>{if((mask>>j)&1)e=e.concat(g);});events.push(e.sort((a,b)=>a-b));
 }
 return events;
}
function eventStats(p,a,b,tol){
 probabilities(p,tol);event(a,p.length);event(b,p.length);
 const A=new Set(a),B=new Set(b),both=a.filter(i=>B.has(i));
 const pa=sum(a.map(i=>p[i])),pb=sum(b.map(i=>p[i])),joint=sum(both.map(i=>p[i]));
 return {p_event:pa,p_given:pb,p_intersection:joint,
    conditional:pb===0?null:joint/pb,reverse_conditional:pa===0?null:joint/pa,
    conditional_defined:pb>0,reverse_defined:pa>0,
    independent:Math.abs(joint-pa*pb)<=tol,product:pa*pb,intersection:both};
}
function coarser(coarse,fine,n){
 partition(coarse,n);partition(fine,n);
 return fine.every(g=>coarse.some(h=>g.every(i=>h.includes(i))));
}
function tower(x,p,inner,outer,tol){
 const m=conditional(x,p,inner,tol);
 const iterated=conditional(m.vector,p,outer,tol);
 const direct=conditional(x,p,outer,tol);
 return {nested:coarser(outer,inner,p.length),inner:m.vector,iterated:iterated.vector,direct:direct.vector};
}
function projection(x,p,groups,y,tol){
 const m=conditional(x,p,groups,tol);arr(y,p.length,"预测");
 const legal=measurable(y,groups);
 const mse=z=>dot(p,x.map((v,i)=>(v-z[i])**2));
 const mse_m=mse(m.vector),mse_y=mse(y),gap=dot(p,y.map((v,i)=>(m.vector[i]-v)**2));
 const cross=dot(p,x.map((v,i)=>(v-m.vector[i])*(m.vector[i]-y[i])));
 [mse_m,mse_y,gap,cross].forEach(v=>finite(v,"平方误差结果"));
 return {conditional:m,admissible:legal.measurable,violations:legal.violations,
  mse_ce:mse_m,mse_candidate:mse_y,mse_gap:gap,cross_term:cross,
  identity_residual:mse_y-(mse_m+gap+2*cross),pythagoras_residual:mse_y-mse_m-gap,
  residual:x.map((v,i)=>v-m.vector[i])};
}
function rn(x,p,groups,shift,tol){
 finite(shift,"参考平移金额");
 const w=x.map(v=>v-shift),plus=w.map(v=>Math.max(v,0)),minus=w.map(v=>Math.max(-v,0));
 const u=conditional(plus,p,groups,tol),v=conditional(minus,p,groups,tol);
 const m=u.vector.map((a,i)=>a-v.vector[i]);
 return {w,plus,minus,u,v,m,m_plus:m.map(v=>Math.max(v,0)),m_minus:m.map(v=>Math.max(-v,0)),
  expectation:dot(p,w),conditional_expectation:dot(p,m),
  total_nu_plus:dot(p,plus),total_nu_minus:dot(p,minus),
  rows:groups.map((g,j)=>({indices:g,mass:u.rows[j].mass,nu_plus:u.rows[j].total,nu_minus:v.rows[j].total,
   u:u.rows[j].mean,v:v.rows[j].mean,m:m[g[0]],m_plus:Math.max(m[g[0]],0),m_minus:Math.max(-m[g[0]],0),
   ratio_defined:u.rows[j].ratio_defined}))};
}
function pareto(alpha,cap){
 finite(alpha,"尾指数");finite(cap,"封顶高度");if(alpha<=0||cap<1)throw Error("要求 α>0 且 b≥1");
 const d=1-alpha;
 const capMean=1+(d===0?Math.log(cap):Math.expm1(d*Math.log(cap))/d);
 const censoredContribution=Math.exp(d*Math.log(cap));
 const omittedMean=capMean-censoredContribution;
 finite(capMean,"封顶平均");finite(omittedMean,"截断平均");
 return {alpha,cap,mean:alpha>1?alpha/(alpha-1):null,mean_finite:alpha>1,
  second_moment:alpha>2?alpha/(alpha-2):null,second_moment_finite:alpha>2,
  capped_mean:capMean,omitted_tail_mean:omittedMean,boundary_contribution:censoredContribution};
}
function spike(n,x){
 finite(n,"尖峰 n");finite(x,"观察位置");
 if(!Number.isInteger(n)||n<1||!(x>0&&x<1))throw Error("要求 n 为正整数且 0<x<1");
 return {n,x,height:n,width:1/n,area:1,value:x<1/n?n:0,pointwise_limit:0};
}
function dyadic(n){
 finite(n,"网格层数");if(!Number.isInteger(n)||n<1||n>20)throw Error("网格层数为 1–20 的整数");
 return {n,step:2**(-n),integral:(1-2**(-n))/2,limit_integral:0.5};
}
function defaults(D){
 const c=D.shared_case, t=D.numerical_policy.probability_sum_absolute_tolerance,x=payoff(c),p=c.probabilities;
 const d=D.defaults,g=c.partitions;
 return {payoff:x,
  events:eventStats(p,c.events[d.events.event],c.events[d.events.given],t),
  conditional:conditional(x,p,g[d.conditional.partition],t),
  measurable:{...measurable(d.measurable.candidate,g[d.measurable.partition]),events:sigmaEvents(g[d.measurable.partition],p.length)},
  projection:projection(x,p,g[d.projection.partition],d.projection.candidate_usd,t),
  tower:tower(x,p,g[d.projection.partition],g[d.projection.outer_partition],t),
  rn:rn(x,p,g[d.rn.partition],d.rn.shift_usd,t),
  integration:{pareto:pareto(d.integration.pareto_alpha,d.integration.cap),
      spike:spike(d.integration.spike_n,d.integration.probe_x),dyadic:dyadic(d.integration.dyadic_n)}};
}
const api={finite,probabilities,partition,event,dot,payoff,conditional,measurable,sigmaEvents,eventStats,coarser,tower,projection,rn,pareto,spike,dyadic,defaults};
root.QTB=Object.freeze(api);
if(typeof module!=="undefined"&&module.exports)module.exports=api;
})(typeof globalThis!=="undefined"?globalThis:this);
