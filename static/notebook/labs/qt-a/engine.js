/* QT-A: pure, dependency-free teaching calculations. All trading inputs are fictional. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.QTA = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  function num(x, name) {
    if (typeof x !== 'number' || !Number.isFinite(x)) throw new Error(name + ' 必须为有限数值');
    return x;
  }
  function positive(x, name) { num(x,name); if(x<=0) throw new Error(name+' 必须大于零'); return x; }
  function nonnegative(x,name) {num(x,name); if(x<0)throw new Error(name+' 不能为负');return x;}
  function timestamp(x) {
    if(typeof x!=='string'||!(/T.*(?:Z|[+-]\d{2}:\d{2})$/).test(x)) throw new Error('时间必须为带时区的 ISO 时间');
    const t=Date.parse(x); if(!Number.isFinite(t))throw new Error('无效时间'); return t;
  }
  function weights(p) {
    if(!Array.isArray(p)||!p.length)throw new Error('权重不能为空');
    p.forEach((v,i)=>nonnegative(v,'权重 '+(i+1)));
    const sum=p.reduce((a,b)=>a+b,0);
    if(Math.abs(sum-1)>1e-12) throw new Error('权重和必须为 1；当前为 '+sum+'. 未自动归一化.');
    return sum;
  }
  function selectVintage(records, cutoff, mode, delaySeconds, threshold) {
    const t=timestamp(cutoff); num(threshold,'阈值');
    if(!['public','received','simulated'].includes(mode))throw new Error('未知截面模式');
    nonnegative(delaySeconds,'假设延迟');
    const knownOrders=new Set();
    const rows=records.map(r=>{
      const rel=timestamp(r.release_at);
      if(!Number.isInteger(r.version_order)||knownOrders.has(r.version_order))throw new Error('版本顺序缺失或冲突');
      knownOrders.add(r.version_order); num(r.value,'发布值');
      const rec=r.received_at===null?null:timestamp(r.received_at);
      if(rec!==null&&rec<rel)throw new Error('本实验不允许接收时间早于来源公开');
      return {...r,release_ms:rel,received_ms:rec};
    }).filter(r=>r.release_ms<=t).sort((a,b)=>b.version_order-a.version_order);
    const none=status=>({status,mode,selected_version:null,value:null,signal:null});
    if(!rows.length)return none('not_yet_public');
    for(const r of rows){
      const a=mode==='simulated'?r.release_ms+delaySeconds*1000:r.received_ms;
      if(mode==='received'&&a===null)return none('unknown_received_time');
      if(mode==='public'||a<=t)return {status:'selected',mode,selected_version:r.version,value:r.value,signal:Number(r.value>threshold)};
    }
    return none('not_received');
  }
  function annualToQuarterlyPercent(a){num(a,'年化率');if(a < -100)throw new Error('年化增长率不能小于 -100%');return 100*(Math.pow(1+a/100,0.25)-1);}
  function split(q0,s0,k,s1,d){
    positive(q0,'初始股数');positive(s0,'初始价格');positive(k,'拆股比例');nonnegative(s1,'期末价格');nonnegative(d,'每股新股现金分配');
    const q1=q0*k, initial=q0*s0, stock=q1*s1, cash=q1*d;
    return {new_shares:q1,initial_wealth:initial,stock_value:stock,distribution_cash:cash,ending_wealth:stock+cash,raw_quote_return:s1/s0-1,price_return:s1/(s0/k)-1,total_return:(stock+cash)/initial-1,log_price_return:s1>0?Math.log(s1/(s0/k)):null};
  }
  function ledger(c0,qty,exec,entryFee,mark,exitPrice,exitFee,target){
    nonnegative(c0,'初始现金');nonnegative(qty,'成交股数');positive(exec,'成交价');nonnegative(entryFee,'入场费');nonnegative(mark,'标记价');nonnegative(exitPrice,'退出价');nonnegative(exitFee,'退出费');nonnegative(target,'目标股数');
    if(!Number.isInteger(qty)||!Number.isInteger(target)||qty>target)throw new Error('成交股数须为不超过目标的非负整数');
    const fee=qty>0?entryFee:0, cash=c0-qty*exec-fee;
    if(cash<0)throw new Error('本实验禁止借款：成交后现金不足；未自动缩量');
    const marked=cash+qty*mark, exit=cash+qty*exitPrice-(qty>0?exitFee:0);
    return {cash_after_entry:cash,actual_shares:qty,value_at_execution_mark:cash+qty*exec,marked_value:marked,marked_pnl:marked-c0,cash_after_exit:exit,realized_pnl_if_exited:exit-c0};
  }
  function events(p,A,B){weights(p);if(A.length!==p.length||B.length!==p.length)throw new Error('事件与权重长度不符');
    let a=0,b=0,i=0,u=0,ac=0;p.forEach((v,j)=>{if(A[j])a+=v;if(B[j])b+=v;if(A[j]&&B[j])i+=v;if(A[j]||B[j])u+=v;if(!A[j])ac+=v;});
    return {P_A:a,P_B:b,P_intersection:i,P_union:u,P_A_complement:ac};
  }
  function informationRule(groups,delta,h){
    if(groups.length!==delta.length||h.length!==delta.length)throw new Error('情景长度不符');
    const seen=new Map(); let predictable=true;
    groups.forEach((g,i)=>{num(h[i],'持仓');num(delta[i],'价格变化');if(seen.has(g)&&seen.get(g)!==h[i])predictable=false;seen.set(g,h[i]);});
    return {predictable,gross_pnl:h.map((v,i)=>v*delta[i])};
  }
  function payoff(z,p,K,m,premium,type){
    weights(p);num(K,'行权价');positive(m,'乘数');nonnegative(premium,'教学权利金');
    if(z.length!==p.length||!['call','put'].includes(type))throw new Error('不合法支付设定');
    const Y=z.map(v=>{num(v,'结算值');return m*Math.max(type==='call'?v-K:K-v,0);});
    const mass=new Map();Y.forEach((v,i)=>mass.set(v,(mass.get(v)||0)+p[i]));
    return {payoff_usd:Y,net_pnl_usd:Y.map(v=>v-m*premium),distribution:[...mass.entries()].sort((a,b)=>a[0]-b[0]).map(([value,mass])=>({value,mass}))};
  }
  function uniformCall(low,high,K,m,y){
    num(low,'区间下界');num(high,'区间上界');num(K,'行权价');positive(m,'乘数');num(y,'支付阈值');
    if(high<=low)throw new Error('均匀区间上界须大于下界');
    const clamp=x=>Math.max(0,Math.min(1,x)), atom=clamp((K-low)/(high-low));
    return {zero_atom_mass:atom,positive_mass:1-atom,positive_density_per_usd:atom<1?1/((high-low)*m):0,cdf:y<0?0:clamp((K+y/m-low)/(high-low))};
  }
  return {weights,selectVintage,annualToQuarterlyPercent,split,ledger,events,informationRule,payoff,uniformCall};
});
