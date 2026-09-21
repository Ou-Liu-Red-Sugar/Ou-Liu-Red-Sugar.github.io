(function(){
"use strict";
const D=JSON.parse(document.getElementById("qt-c-data").textContent), E=QTC;
window.QTC_DATA=D;
const $=id=>document.getElementById(id);
const fmt=(v,d=4)=>Number.isFinite(v)?v.toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d}):"未定义";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const table=(heads,rows)=>`<div class="table-wrap"><table><thead><tr>${heads.map(x=>`<th scope="col">${x}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
function cards(items){return `<div class="metrics">${items.map(([a,b,c=""])=>`<div class="metric"><span>${esc(a)}</span><strong>${b}</strong><small>${c}</small></div>`).join("")}</div>`;}
function chart(values,{label="",unit="",markers=[],kind="line",fractions=null,boundaries=[],xlabels=null,band=null}={}){
  const W=Math.max(330,Math.min(970,window.innerWidth-72)),H=260, L=64,R=18,T=25,B=43;
  const all=values.concat(markers.map(x=>x.value)).concat(band||[]);
  let lo=Math.min(...all),hi=Math.max(...all);if(hi===lo){lo-=1;hi+=1;}
  const pad=(hi-lo)*.10;lo-=pad;hi+=pad;
  const x=i=>L+(W-L-R)*(i/Math.max(1,values.length-1)), y=v=>H-B-(H-B-T)*(v-lo)/(hi-lo);
  let s=`<svg role="img" aria-label="${esc(label)}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><title>${esc(label)}</title>`;
  for(let t=0;t<5;t++){let v=lo+(hi-lo)*t/4,yy=y(v);s+=`<line class="grid" x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}"/><text x="${L-8}" y="${yy+4}" text-anchor="end">${esc(fmt(v,Math.abs(v)<1?3:1))}</text>`;}
  s+=`<text x="8" y="14">${esc(unit)}</text><line class="axis" x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}"/>`;
  const labels=xlabels||["1",String(values.length)];
  s+=`<text x="${L}" y="${H-16}">${esc(labels[0])}</text><text x="${W-R}" y="${H-16}" text-anchor="end">${esc(labels[1])}</text>`;
  markers.forEach((m,j)=>{s+=`<line class="mark mark${j}" x1="${L}" y1="${y(m.value)}" x2="${W-R}" y2="${y(m.value)}"/><text class="mark-label" x="${W-R}" y="${12+j*13}" text-anchor="end">${esc(m.label)} ${esc(fmt(m.value,2))}</text>`;});
  if(kind==="scatter"){
    values.forEach((v,i)=>{
      const f=fractions?fractions[i]:0,cl=f>=1-1e-10?"tail-full":f>0?"tail-part":"dot";
      s+=`<circle class="${cl}" cx="${x(i)}" cy="${y(v)}" r="${f>0?3.5:2}"><title>位置 ${i+1}: ${fmt(v,4)} ${esc(unit)}；纳入份额 ${fmt(f,4)}</title></circle>`;
    });
  }else{
    s+=`<polyline class="path" fill="none" points="${values.map((v,i)=>`${x(i).toFixed(2)},${y(v).toFixed(2)}`).join(" ")}"/>`;
  }
  if(boundaries)boundaries.forEach(i=>{if(i<values.length)s+=`<line class="block-tick" x1="${x(i)}" y1="${H-B+2}" x2="${x(i)}" y2="${H-B+10}"/>`;});
  return s+"</svg>";
}
function hist(values,markers,label,unit){
  const h=E.histogram(values,36),W=Math.max(330,Math.min(970,window.innerWidth-72)),H=245,L=55,R=18,T=20,B=47;
  let lo=Math.min(h.lo,...markers.map(x=>x.value)),hi=Math.max(h.hi,...markers.map(x=>x.value));
  const x=v=>L+(W-L-R)*(v-lo)/(hi-lo), ymax=Math.max(...h.counts), yy=c=>H-B-(H-B-T)*c/ymax;
  let s=`<svg role="img" aria-label="${esc(label)}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><title>${esc(label)}</title>`;
  for(let i=0;i<h.counts.length;i++){let xx=x(h.lo+i*h.width),x2=x(h.lo+(i+1)*h.width);s+=`<rect class="hist" x="${xx}" y="${yy(h.counts[i])}" width="${Math.max(.5,x2-xx-1)}" height="${H-B-yy(h.counts[i])}"><title>${h.counts[i]} 次</title></rect>`;}
  markers.forEach((m,j)=>{s+=`<line class="mark mark${j}" x1="${x(m.value)}" x2="${x(m.value)}" y1="${T}" y2="${H-B}"/>`;});
  s+=`<text x="4" y="13">次数</text><text x="${L-5}" y="${T+4}" text-anchor="end">${ymax}</text><text x="${L}" y="${H-25}">${fmt(lo,2)}</text><text x="${W-R}" y="${H-25}" text-anchor="end">${fmt(hi,2)}</text><text x="${W/2}" y="${H-5}" text-anchor="middle">${esc(unit)}</text></svg>`;
  return s+`<p class="legend">${markers.map((m,j)=>`<span class="legend${j}">${esc(m.label)}：${fmt(m.value,unit==="USD"?2:4)}</span>`).join("；")}</p>`;
}
function renderReturns(){
  const start=$("r-start").value,p=Number($("r-level").value);
  if(start!==D.config.dataset.sample_start){$("r-delete").checked=false;$("r-delete").disabled=true;}else $("r-delete").disabled=false;
  const v=E.returnsView(D,start,p,$("r-delete").checked);window.QTC_current_returns=v;
  $("r-status").textContent=`202607 CIZ 重建历史 · ${v.start.slice(0,4)}-${v.start.slice(4)}—2025-12 · ${v.n} 个月 · ${v.removed?"教学扰动：仅删除 "+v.removed.month:"完整所选窗口，无清洗/删极端值"} · 损失 L=-r，月度百分数`;
  $("r-output").innerHTML=cards([
    ["月数",String(v.n),"固定经验样本"],["月均收益",fmt(v.mean*100)+"%","算术平均"],
    ["样本标准差",fmt(v.sampleSD*100)+"%","ddof=1"],
    ["损失 VaR"+fmt(p*100,1),fmt(v.tail.VaR*100,2)+"%","inverted_cdf，不截去负值"],
    ["损失 ES",fmt(v.tail.ES*100)+"%","分位数上尾积分"],
    ["尾部等权观测质量",fmt(v.n*(1-p),2),"不是新造的部分月份"]
  ])+`<p>经验分布标准差（ddof=0）：<b>${fmt(v.empiricalSD*100)}%</b>；严格高于 VaR 的质量 ${fmt(v.tail.aboveMass,6)}，边界纳入质量 ${fmt(v.tail.boundaryMass,6)}（边界原子的 ${fmt(v.tail.fraction*100,2)}%）. 直接平均全部 L≥VaR 为 ${fmt(v.tail.naive*100)}%，不是通用 ES 算法.</p>`;
  $("r-plot").innerHTML=chart(v.loss.map(x=>100*x),{label:"各月损失及上尾质量",unit:"月损失 %",kind:"scatter",fractions:v.tail.fractions,
    markers:[{value:100*v.tail.VaR,label:"VaR"},{value:100*v.tail.ES,label:"ES"}],
    xlabels:[v.records[0].month,v.records[v.n-1].month]});
  const rows=v.records.map((a,i)=>({...a,f:v.tail.fractions[i]})).filter(x=>x.f>0).sort((a,b)=>b.loss-a.loss);
  $("r-tail").innerHTML=table(["原月份","原损失 %","该观测纳入份额","原 CSV 行"],
    rows.map(a=>[a.month,fmt(100*a.loss,2),fmt(a.f,4),a.source_line]));
  $("r-all").innerHTML=table(["月份","收益 %","损失 %","原 CSV 行"],v.records.map(a=>[a.month,fmt(a.percent,2),fmt(-a.percent,2),a.source_line]));
}
function renderMC(){
  const name=$("m-model").value,n=Number($("m-n").value),v=E.mcView(D,name,n),r=v.row;
  window.QTC_current_mc=v;
  $("m-status").textContent=`NumPy PCG64(1201) · ${n.toLocaleString()} 个共同 uniform 的前缀 · ${name==="base"?"基准模型 p":"压力模型 p′"} · 金额 USD · 本页读取已复算的冻结结果，不产生新随机数`;
  $("m-output").innerHTML=cards([
    ["模型均值",fmt(v.ref.model.mean_usd,2),"教学模型，不是期权报价"],
    ["样本均值",fmt(r.estimate_usd,2),"同一路径前缀"],
    ["对本模型误差",fmt(r.error_relative_to_simulated_model_usd,2),"美元"],
    ["对基准模型差异",fmt(r.error_relative_to_base_model_usd,2),"美元；含模型均值差"],
    ["估计 SE",fmt(r.estimated_SE_usd,2),"s/√n，美元"],
    ["理论 SE",fmt(r.theoretical_SE_usd,2),"σ/√n，美元"]
  ])+`<p>选定 n 的 CLT 近似均值区间：<b>[${r.CLT_95_interval_usd.map(x=>fmt(x,2)).join(", ")}] 美元</b>. 这是单个固定 n 的区间，不是整条路径的同时置信带，也不是未来单次支付区间.</p>`+
    table(["状态","支付 USD","模型概率","前缀计数"],v.ref.model.payoffs_usd.map((x,i)=>[i+1,fmt(x,0),fmt(v.ref.model.probabilities[i],1),r.state_counts[i]]));
  $("m-payoff").innerHTML=chart(v.payments,{label:"冻结支付路径",unit:"支付 USD"});
  const markers=[{value:v.ref.model.mean_usd,label:"所模拟模型均值"}];
  if(name==="stress")markers.push({value:D.results.Monte_Carlo.reference.base.model.mean_usd,label:"基准均值"});
  $("m-running").innerHTML=chart(v.means,{label:"同一路径累计均值",unit:"平均 USD",markers});
  $("m-step").max=n;if(Number($("m-step").value)>n)$("m-step").value=n;
  renderMCStep();renderCoverage();
}
function renderMCStep(){
  const i=Number($("m-step").value)-1,v=window.QTC_current_mc,n=i+1;
  const se=n>1?v.ref.running_estimated_SE_n_2_to_nmax[n-2]:null;
  $("m-step-value").textContent=`i=${n}；状态 ${v.states[i]+1}；支付 ${fmt(v.payments[i],0)} USD；前缀平均 ${fmt(v.means[i],2)} USD；估计 SE ${se===null?"n=1 未定义":fmt(se,2)+" USD"}`;
}
function renderCoverage(){
  const v=window.QTC_current_mc,c=v.coverage,i=Number($("m-rep").value)-1;
  $("m-cover").innerHTML=cards([
    ["覆盖实验模型","基准 p","不随上方压力模型切换"],
    ["选定 n",String(c.n),"每行取同一 10,000 长样本前缀"],
    ["覆盖次数",`${c.coverage_count} / ${c.R}`,"5000 行彼此独立"],
    ["覆盖率",fmt(100*c.coverage_rate,2)+"%","不同 n 的估计彼此相关"],
    ["覆盖率 MCSE",fmt(100*c.coverage_MC_standard_error,4),"百分点"],
    ["均值估计 RMSE",fmt(c.empirical_RMSE_usd,2),"USD"]
  ]);
  $("m-rep-value").textContent=`重复 ${i+1}：均值 ${fmt(c.replicate_means_usd[i],2)}；区间 [${fmt(c.replicate_interval_lower_usd[i],2)}, ${fmt(c.replicate_interval_upper_usd[i],2)}] USD；${c.replicate_covered[i]?"覆盖":"未覆盖"}基准模型均值 ${fmt(D.results.Monte_Carlo.reference.base.model.mean_usd,0)} USD.`;
  $("m-hist").innerHTML=hist(c.replicate_means_usd,[{value:D.results.Monte_Carlo.reference.base.model.mean_usd,label:"基准模型均值"}],"5000 次基准均值估计","USD");
}
function renderBoot(){
  const name=$("b-data").value,key=$("b-design").value,v=E.bootView(D,name,key),r=v.row,s=v.scale;
  window.QTC_current_boot=v;
  $("b-status").textContent=`${name==="French_BusEq"?"真实 BusEq，202607 CIZ 重建历史":"指定稳态 AR(1) 合成路径，seed 1910"} · n=${r.n}，B=${r.B} · ${r.method==="iid"?"逐点 iid 条件重抽":"非循环 MBB，块长 "+r.block_length} · seed ${r.seed}，每设计重置；两个数据分支共享索引.`;
  $("b-output").innerHTML=cards([
    ["原样本均值",fmt(r.original_sample_mean*s),v.meanUnit],
    ["精确条件重抽中心",fmt(r.exact_conditional_resampling_center*s),v.meanUnit],
    ["中心偏移",fmt(r.resampling_center_minus_original_mean*s),v.seUnit+"；不是有限 B 噪声"],
    ["5000 个均值的平均",fmt(r.bootstrap_mean_of_means*s),v.meanUnit],
    ["模拟 bootstrap SE",fmt(r.bootstrap_SE*s),v.seUnit],
    ["精确条件重抽 SE",fmt(r.exact_conditional_resampling_SE*s),v.seUnit]
  ])+`<p>percentile 95% 均值区间：<b>[${r.percentile_95_interval.map(x=>fmt(x*s)).join(", ")} ]</b>（${v.meanUnit}）；端点采用 <code>linear</code> 插值，不是 QT04 的 <code>inverted_cdf</code>.</p>`+
  (v.ar?`<p class="note">已知 AR 模型的无条件均值为 ${fmt(v.ar.model_mean,0)}；图中是固定这条样本后的条件重抽分布. 该模型的样本均值真 SE：<b>${fmt(v.ar.exact_finite_n_sample_mean_SE,6)}</b>；边缘方差同为 1 的 iid 对照：${fmt(v.ar.iid_counterfactual_SE_for_variance_1,6)}. 这些与一次样本的条件重抽 SE 不同. X₀=${fmt(v.ar.X0,6)}，来自 N(0,1)，无 burn-in.</p>`:
  `<p class="note">真实数据的过程 SE 未知. 本页的“精确”只指给定有限样本和重抽算法的条件分布，不是对真实市场参数的精确估计.</p>`);
  $("b-original").innerHTML=chart(v.original.map(x=>x*s),{label:"原始序列",unit:v.unit,xlabels:name==="French_BusEq"?["199001","202512"]:["X₁","X₄₃₂"]});
  $("b-resampled").innerHTML=chart(r.first_replicate_values.map(x=>x*s),{label:"第一条完整重抽序列；下方短竖线标块边界",unit:v.unit,boundaries:r.first_replicate_block_boundary_positions||[],xlabels:["重抽位置 0",String(r.n-1)]});
  $("b-hist").innerHTML=hist(r.bootstrap_replicate_means.map(x=>x*s),[
    {value:r.original_sample_mean*s,label:"原样本均值"},
    {value:r.exact_conditional_resampling_center*s,label:"精确条件重抽中心"}
  ],"5000 个条件重抽均值",v.unit);
  const e=E.conditional(v.original,r.block_length),ids=[0,1,2,5,10,v.original.length-6,v.original.length-3,v.original.length-2,v.original.length-1];
  $("b-weights").innerHTML=table(["原位置（从 0）","候选块出现次数","均值中的条件权重"],
    [...new Set(ids)].map(i=>[i,e.multiplicities?e.multiplicities[i]:"iid 等权",fmt(e.weights[i],8)]));
  renderIndex();
  $("b-all").innerHTML=table(["重抽位置","原索引","原月份或时间点","重抽值 "+v.unit],
    r.first_replicate_indices_zero_based.map((i,j)=>[j,i,name==="French_BusEq"?D.results.records[i].month:"X"+(i+1),fmt(v.original[i]*s,4)]));
}
function renderIndex(){
  const v=window.QTC_current_boot,r=v.row,j=Number($("b-index").value),i=r.first_replicate_indices_zero_based[j];
  $("b-index-value").textContent=`重抽位置 ${j} → 原索引 ${i} → ${$("b-data").value==="French_BusEq"?D.results.records[i].month:"X"+(i+1)} → ${fmt(v.original[i]*v.scale,4)} ${v.unit}；${r.block_length?"块内位置 "+(j%r.block_length)+"（从 0）":"iid 单点抽取"}`;
}
function safe(fn){try{fn();$("error").hidden=true;}catch(e){$("error").hidden=false;$("error").textContent=e.message;throw e;}}
document.querySelectorAll(".controls [disabled], .slider-control [disabled], #reset").forEach(e=>e.disabled=false);
["r-start","r-level","r-delete"].forEach(id=>$(id).addEventListener("change",()=>safe(renderReturns)));
["m-model","m-n"].forEach(id=>$(id).addEventListener("change",()=>safe(renderMC)));
$("m-step").addEventListener("input",renderMCStep);$("m-rep").addEventListener("input",renderCoverage);
["b-data","b-design"].forEach(id=>$(id).addEventListener("change",()=>safe(renderBoot)));$("b-index").addEventListener("input",renderIndex);
$("reset").addEventListener("click",()=>{
  $("r-start").value=D.config.dataset.sample_start;$("r-level").value=D.config.returns.default_tail_level;$("r-delete").checked=false;
  $("m-model").value="base";$("m-n").value=D.config.monte_carlo.default_sample_size;$("m-step").value=D.config.monte_carlo.default_sample_size;$("m-rep").value=1;
  $("b-data").value="French_BusEq";$("b-design").value=D.config.bootstrap.default_block_length;$("b-index").value=0;
  safe(()=>{renderReturns();renderMC();renderBoot();});
});
let timer;window.addEventListener("resize",()=>{clearTimeout(timer);timer=setTimeout(()=>safe(()=>{renderReturns();renderMC();renderBoot();}),200);});
safe(()=>{renderReturns();renderMC();renderBoot();});

// Adapter: embedded chapters retain the original engine and frozen data.
function showSelectedLab(){
  const embedded=window.self!==window.top;
  document.documentElement.classList.toggle("embedded",embedded);
  const selected=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));
  const labs=Array.from(document.querySelectorAll("section.lab"));
  const known=labs.some(x=>x.id===selected);
  labs.forEach(x=>{x.hidden=embedded&&known&&x.id!==selected;});
}
window.addEventListener("hashchange",showSelectedLab);
showSelectedLab();
window.QTC_READY=true;
})();
