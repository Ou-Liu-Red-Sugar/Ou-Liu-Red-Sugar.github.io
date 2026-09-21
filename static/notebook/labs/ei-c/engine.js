/* EI-C teaching engine. No external dependencies. Source data remain immutable. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EIC = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  function num(x, name, low, high) {
    if (typeof x !== 'number' || !Number.isFinite(x) || x < low || x > high)
      throw new RangeError(name + ': 必须为 ' + low + ' 至 ' + high + ' 的有限数值');
    return x;
  }
  function integer(x, name, lo, hi) {
    num(x, name, lo, hi);
    if (!Number.isInteger(x)) throw new RangeError(name + ': 必须为整数');
    return x;
  }
  const I = [[1,0,0],[0,1,0],[0,0,1]];
  const add = (a,b) => a.map((x,i)=>x+b[i]);
  const mv = (a,v) => a.map(row=>row.reduce((s,x,i)=>s+x*v[i],0));
  const mm = (a,b) => a.map(row=>b[0].map((_,j)=>row.reduce((s,x,k)=>s+x*b[k][j],0)));
  function solve(a,b) {
    const n=b.length, t=a.map((row,i)=>[...row,b[i]]);
    for (let k=0;k<n;k++) {
      let pivot=k;
      for (let i=k+1;i<n;i++) if (Math.abs(t[i][k])>Math.abs(t[pivot][k])) pivot=i;
      if (Math.abs(t[pivot][k])<1e-14) throw new RangeError('矩阵奇异，不能求解');
      [t[k],t[pivot]]=[t[pivot],t[k]];
      const d=t[k][k];
      for(let j=k;j<=n;j++) t[k][j]/=d;
      for(let i=0;i<n;i++) if(i!==k) {
        const w=t[i][k];
        for(let j=k;j<=n;j++) t[i][j]-=w*t[k][j];
      }
    }
    return t.map(row=>row[n]);
  }
  function inverse(a) {
    const cols=I.map(e=>solve(a,e));
    return I.map((_,i)=>I.map((__,j)=>cols[j][i]));
  }
  function io(inputs, y, rounds=2, supplier=0, user=1) {
    if(!Array.isArray(y)||y.length!==3) throw new TypeError('最终需求必须有三个分量');
    const cfg=inputs.io;
    y=y.map((v,i)=>num(v,'最终需求 '+i,cfg.y_range[0],cfg.y_range[1]));
    integer(rounds,'累计层数',0,80);integer(supplier,'供给产品',0,2);integer(user,'使用产品',0,2);
    const A=cfg.A_display.map(r=>r.slice());
    const RA=inverse(A.map((r,i)=>r.map((v,j)=>I[i][j]-v)));
    const direct=mv(A,y), AA=mm(A,A), limit=mv(RA,y), published=mv(cfg.R_published,y);
    let term=y.slice(), sum=y.slice();
    const path=[{round:0,term:term.slice(),cumulative:sum.slice()}];
    for(let k=1;k<=rounds;k++) {
      term=mv(A,term);sum=add(sum,term);
      path.push({round:k,term:term.slice(),cumulative:sum.slice()});
    }
    const tail=limit.map((v,i)=>v-sum[i]);
    const residual=limit.map((v,i)=>v-mv(A,limit)[i]-y[i]);
    const baseline=y.every((v,i)=>v===cfg.y_default[i]);
    return {y,direct,second:mv(AA,y),rounds,path,partial:sum,limit,published,
      source_snapshot:cfg.gross_output_original.slice(),source_snapshot_is_current_scenario:baseline,
      RA,tail,residual,selected:{supplier,user,identity:I[supplier][user],direct:A[supplier][user],
        second:AA[supplier][user],second_paths:A[supplier].map((v,k)=>v*A[k][user]),
        complete_display:RA[supplier][user],complete_published:cfg.R_published[supplier][user]},
      note:'层数是生产网络深度，不是日历时间；原表总产出只对应原最终需求。'};
  }
  function trade(inputs) {
    const rows=inputs.trade.rows.map(r=>({...r,share_pct:100*r.china/r.world}));
    const [a,b]=rows;
    return {rows,china_growth_pct:100*(b.china/a.china-1),world_growth_pct:100*(b.world/a.world-1),
      share_change_pp:b.share_pct-a.share_pct,identity:inputs.trade.identity,unit:inputs.trade.unit};
  }
  function network(inputs, exports, purchases) {
    num(exports,'同批出口额',0,200);num(purchases,'同批投入采购',0,200);
    return {exports,purchases,purchase_ratio_pct:exports===0?null:100*purchases/exports,
      origin:inputs.network_toy.origin_assumed,ownership:null,china_value_added:null,
      identity:'teaching_assumption',note:exports===0?'出口额为零，采购／出口金额比未定义。':'采购金额比不是增加值份额；所有权保持未知。'};
  }
  function research(inputs, deltaPP) {
    num(deltaPP,'假设中国来源份额变化',-20,20);
    return {delta_china_pp:deltaPP,identity:'reported coefficient × teaching-assumption regressor',
      rows:inputs.research.rows.map(r=>({...r,partial_term_pp:r.beta*deltaPP})),
      interpretation:'仅式(2)第一项贡献；不是完整拟合、金额增长或预测。'};
  }
  function composition(inputs) {
    const d=inputs.composition_toy,s=d.within_product_china_shares,w0=d.product_weights_initial,w1=d.product_weights_final;
    const share0=w0.reduce((v,w,i)=>v+w*s[i],0), share1=w1.reduce((v,w,i)=>v+w*s[i],0);
    return {initial_pct:share0*100,final_pct:share1*100,within_product_pp:0,
      composition_pp:w1.reduce((v,w,i)=>v+(w-w0[i])*s[i],0)*100};
  }
  return {version:'2026-09-21-eic-review-v2',io,trade,network,research,composition,mv,mm,solve,inverse};
});
