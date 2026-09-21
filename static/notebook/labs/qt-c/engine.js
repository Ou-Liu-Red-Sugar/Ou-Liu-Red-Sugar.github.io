(function(root){
"use strict";
const finite=(x,name="number")=>{if(typeof x!=="number"||!Number.isFinite(x))throw Error(name+" 必须为有限数");return x;};
function prob(p){finite(p,"p");if(!(p>0&&p<1))throw Error("p 必须在 (0,1) 内");return p;}
function mean(a){if(!a.length)throw Error("空样本");a.forEach(x=>finite(x));return a.reduce((s,x)=>s+x,0)/a.length;}
function sd(a,ddof=1){const m=mean(a);if(a.length<=ddof)throw Error("样本不足");return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-ddof));}
function quantile(a,p,method){
  if(!a.length||!(p>=0&&p<=1))throw Error("无效分位数");a.forEach(x=>finite(x));
  const s=a.slice().sort((x,y)=>x-y);
  if(method==="inverted_cdf")return s[Math.max(0,Math.ceil(p*s.length)-1)];
  if(method!=="linear")throw Error("未知分位数约定");
  const h=(s.length-1)*p,j=Math.floor(h),f=h-j;return s[j]+f*(s[Math.min(j+1,s.length-1)]-s[j]);
}
function tail(a,p,weights=null){
  prob(p);if(!a.length)throw Error("空损失分布");a.forEach(x=>finite(x));
  const w=weights||a.map(()=>1/a.length);
  if(w.length!==a.length||w.some(x=>!Number.isFinite(x)||x<0)||Math.abs(w.reduce((s,x)=>s+x,0)-1)>1e-12)throw Error("概率权重不合法");
  const cells=a.map((x,i)=>({x,w:w[i],i})).sort((a,b)=>a.x-b.x);
  let c=0,v=null;
  for(let j=0;j<cells.length;j++){c=weights?c+cells[j].w:(j+1)/cells.length;if(c>=p){v=cells[j].x;break;}}
  if(v===null)v=cells[cells.length-1].x;
  let mass=0,amount=0,atom=0,naiveMass=0,naiveAmount=0;
  a.forEach((x,i)=>{if(x>v){mass+=w[i];amount+=w[i]*x;}if(x===v)atom+=w[i];if(x>=v){naiveMass+=w[i];naiveAmount+=w[i]*x;}});
  let boundary=(1-p)-mass;if(Math.abs(boundary)<1e-13)boundary=0;
  if(boundary < -1e-10 || boundary>atom+1e-10)throw Error("边界质量不一致");
  return {VaR:v,ES:(amount+v*boundary)/(1-p),p,aboveMass:mass,atomMass:atom,boundaryMass:boundary,
    fraction:atom?boundary/atom:0,naive:naiveAmount/naiveMass,
    fractions:a.map(x=>x>v?1:x===v?(atom?boundary/atom:0):0)};
}
function returnsView(data,start,p,removeWorst){
  if(!data.config.dataset.sample_windows.some(x=>x[0]===start))throw Error("未定义窗口");
  let records=data.results.records.filter(x=>x.month>=start&&x.month<=data.config.dataset.sample_end);
  let removed=null;
  if(removeWorst){
    if(start!==data.config.dataset.sample_start)throw Error("删除扰动只适用于完整窗口");
    const min=Math.min(...records.map(x=>x.r));const i=records.findIndex(x=>x.r===min);removed=records[i];records.splice(i,1);
  }
  const r=records.map(x=>x.r),loss=r.map(x=>-x);
  return {records,n:r.length,start,end:data.config.dataset.sample_end,removed,mean:mean(r),sampleSD:sd(r),empiricalSD:sd(r,0),tail:tail(loss,p),r,loss};
}
function mcView(data,name,n){
  if(!["base","stress"].includes(name))throw Error("未知模型");
  const ref=data.results.Monte_Carlo.reference[name],row=ref.sample_sizes.find(x=>x.n===n);
  if(!row)throw Error("未冻结的样本量");
  return {ref,row,coverage:data.results.Monte_Carlo.coverage.find(x=>x.n===n),
    states:ref.full_state_indices.slice(0,n),means:ref.running_mean_n_1_to_nmax.slice(0,n),
    payments:ref.full_state_indices.slice(0,n).map(i=>ref.model.payoffs_usd[i])};
}
function bootView(data,name,key){
  if(!["French_BusEq","simulated_AR1"].includes(name))throw Error("未知数据分支");
  const series=data.results.bootstrap.series[name],ell=key==="iid"?null:Number(key);
  const row=series.designs.find(x=>key==="iid"?x.method==="iid":x.method==="moving_block"&&x.block_length===ell);
  if(!row)throw Error("未冻结的重抽设计");
  const original=name==="French_BusEq"?data.results.records.map(x=>x.r):data.results.bootstrap.AR1.X1_to_Xn;
  return {row,original,scale:name==="French_BusEq"?100:1,
    unit:name==="French_BusEq"?"月收益 %":"无量纲",
    meanUnit:name==="French_BusEq"?"%/月":"无量纲",seUnit:name==="French_BusEq"?"百分点/月":"无量纲",ar:name==="simulated_AR1"?data.results.bootstrap.AR1:null};
}
function conditional(a,ell=null){
  const n=a.length;
  if(ell===null)return {center:mean(a),SE:sd(a,0)/Math.sqrt(n),weights:a.map(()=>1/n)};
  if(!Number.isInteger(ell)||ell<1||ell>n||n%ell)throw Error("该核算只支持整块、块长整除 n");
  const N=n-ell+1,k=n/ell,sums=Array.from({length:N},(_,j)=>a.slice(j,j+ell).reduce((s,x)=>s+x,0));
  const mult=Array.from({length:n},(_,i)=>Math.min(i+1,N)-Math.max(1,i+2-ell)+1);
  return {center:k*mean(sums)/n,SE:Math.sqrt(k)*sd(sums,0)/n,weights:mult.map(x=>x/(ell*N)),multiplicities:mult};
}
function histogram(a,bins=36){
  if(!Number.isInteger(bins)||bins<1)throw Error("无效组数");a.forEach(x=>finite(x));
  let lo=Math.min(...a),hi=Math.max(...a);if(lo===hi){lo-=.5;hi+=.5;}
  const counts=Array(bins).fill(0),width=(hi-lo)/bins;
  a.forEach(x=>counts[Math.min(bins-1,Math.floor((x-lo)/width))]++);
  return {lo,hi,width,counts,n:a.length};
}
root.QTC={finite,mean,sd,quantile,tail,returnsView,mcView,bootView,conditional,histogram};
if(typeof module!=="undefined"&&module.exports)module.exports=root.QTC;
})(typeof globalThis!=="undefined"?globalThis:this);
