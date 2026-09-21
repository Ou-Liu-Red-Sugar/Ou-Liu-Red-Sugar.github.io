
"use strict";
const D=JSON.parse(document.getElementById("qtb-inputs").textContent);
const C=D.shared_case,T=D.numerical_policy.probability_sum_absolute_tolerance;
let weights=C.probabilities.slice();
const $=id=>document.getElementById(id);
const n=(v,max=6)=>{if(v===null)return "未定义";if(!Number.isFinite(v))throw Error("结果不是有限数");if(v!==0 && Math.abs(v)<1e-6)return v.toExponential(4);return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:max}).format(v);};
const money=v=>n(v,2), sqmoney=v=>n(v,2);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const vec=(v,max=2)=>"("+v.map(x=>n(x,max)).join(", ")+")";
const table=(heads,rows)=>'<div class="table-wrap" tabindex="0" role="region" aria-label="数据表；窄屏可横向滚动"><table><thead><tr>'+heads.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
const groupName=g=>"{"+g.map(i=>i+1).join(",")+"}";
function getnum(id){const raw=$(id).value.trim();if(!raw)throw Error("输入不能为空");const v=Number(raw);QTB.finite(v,id);return v;}
function getvector(id){const parts=$(id).value.replace(/，/g,",").split(",");if(parts.some(x=>!x.trim()))throw Error("向量中有空项");const v=parts.map(Number);if(v.length!==weights.length)throw Error("请给四个状态各一个值");v.forEach(x=>QTB.finite(x,"向量值"));return v;}
function select(id,options,val){$(id).innerHTML=options.map(([v,t])=>'<option value="'+esc(v)+'">'+esc(t)+'</option>').join("");$(id).value=val;}
const groupopts=Object.keys(C.partitions).map(k=>[k,C.partition_labels[k]]);
const eventopts=Object.keys(C.events).map(k=>[k,{T:"T：尾部状态 {4}",H:"H：{3,4}",L:"L：{1,2}",all:"全空间",empty:"空集"}[k]]);
window.QTB_LAST={};
function output(id,key,fn){
 try{const [r,text]=fn();$(id).innerHTML=text;window.QTB_LAST[key]=r;$(id).dataset.ok="true";}
 catch(e){$(id).innerHTML='<p class="bad" role="alert">'+esc(e.message)+'</p>';window.QTB_LAST[key]={error:e.message};$(id).dataset.ok="false";}
}
function groupRows(res){
 return table(["信息组","概率","变量在组上的积分","条件平均"],
  res.rows.map(r=>[groupName(r.indices),n(r.mass),money(r.total),r.ratio_defined?money(r.mean):"比例未定义；取 0 版本"]));
}
function drawCurve(x,p){
 const gr=C.partitions.signal,rows=[];
 const m=QTB.conditional(x,p,gr,T).vector[gr[1][0]];
 const probes=D.named_cases.mse_probe_grid_usd, lo=Math.min(...probes),hi=Math.max(...probes);
 const vals=[];
 for(let k=0;k<=60;k++){const y=lo+(hi-lo)*k/60,v=[0,0,y,y],r=QTB.projection(x,p,gr,v,T);vals.push([y,r.mse_candidate]);}
 const max=Math.max(...vals.map(v=>v[1]),1);
 const pt=(a,b)=>[(a-lo)/(hi-lo)*510+45,190-b/max*155];
 const path=vals.map((v,i)=>(i?"L":"M")+pt(...v).map(x=>x.toFixed(2)).join(" ")).join(" ");
 const mp=pt(m,QTB.projection(x,p,gr,[0,0,m,m],T).mse_candidate);
 return '<svg viewBox="0 0 600 230" role="img" aria-label="L 组预测为零，H 组预测变化时的均方误差曲线"><title>L 组预测固定零，只改变 H 组预测；误差单位美元平方</title><path d="M45 25V190H570" stroke="#607988" fill="none"/><path d="'+path+'" fill="none" stroke="#275f7e" stroke-width="3"/><circle cx="'+mp[0]+'" cy="'+mp[1]+'" r="4" fill="#913c2f"/><text x="45" y="218" font-size="12">'+n(lo)+'</text><text x="515" y="218" font-size="12">'+n(hi)+'</text><text x="50" y="18" font-size="12">MSE（美元²）；横轴为 H 组预测（美元）</text></svg>'+
 table(["H 组预测（美元）","MSE（美元²）"],probes.map(y=>[money(y),sqmoney(QTB.projection(x,p,gr,[0,0,y,y],T).mse_candidate)]));
}
function update(){
 const x=QTB.payoff(C);
 output("out-events","events",()=>{
  const a=C.events[$("event-a").value],b=C.events[$("event-b").value],r=QTB.eventStats(weights,a,b,T);
  return [r,table(["P(A)","P(B)","P(A∩B)","P(A|B)","P(B|A)"],[[n(r.p_event),n(r.p_given),n(r.p_intersection),n(r.conditional),n(r.reverse_conditional)]])+
   '<p>'+ (r.conditional_defined?"选中的条件分母为 "+n(r.p_given)+"。":"<strong>条件事件概率为零：比值没有定义，不填成 0。</strong>")+
   ' 乘法检验：P(A)P(B)='+n(r.product)+'；'+(r.independent?"在数值容差内独立。":"不独立。")+'</p>'];
 });
 output("out-ce","conditional",()=>{
  const r=QTB.conditional(x,weights,C.partitions[$("ce-partition").value],T);
  return [r,groupRows(r)+'<p>条件期望向量 M = <code>'+vec(r.vector)+'</code> 美元。</p><p>E[X]='+n(r.expectation)+'；E[M]='+n(r.conditional_expectation)+' 美元。必须按组概率再平均。</p>'];
 });
 output("out-meas","measurable",()=>{
  const g=C.partitions[$("meas-partition").value],y=getvector("meas-vector"),r=QTB.measurable(y,g),ev=QTB.sigmaEvents(g,weights.length);
  return [{...r,events:ev},'<p class="'+(r.measurable?"good":"bad")+'">'+(r.measurable?"可测：每个分组内取值相同。":"不可测：这些组内出现不同值 "+r.violations.map(groupName).join("、"))+'</p>'+
  '<p>事件域有 '+ev.length+' 个事件：</p><div class="chips">'+ev.map(e=>'<span class="chip">'+(e.length?groupName(e):"∅")+'</span>').join("")+'</div><p class="muted">这个检查不根据概率删除状态。零概率组也必须保留可测性。</p>'];
 });
 output("out-projection","projection",()=>{
  const g=C.partitions[$("proj-partition").value],y=getvector("proj-vector"),r=QTB.projection(x,weights,g,y,T);
  let text='<p class="'+(r.admissible?"good":"bad")+'">'+(r.admissible?"候选只使用当前信息，可以参与最优性比较。":"候选在同组内取不同值，使用当前信息无法辨认；不属于允许集合。")+'</p>'+
    table(["E[(X−M)²]","E[(M−Y)²]","E[(X−Y)²]"],[[sqmoney(r.mse_ce),sqmoney(r.mse_gap),sqmoney(r.mse_candidate)]])+
   '<p>以上单位均为美元²。交叉项 E[(X−M)(M−Y)] = '+n(r.cross_term)+'。</p>'+
   '<p>一般展开：MSE(Y)=MSE(M)+E[(M−Y)²]+2×交叉项。'+(r.admissible?"理论交叉项为零；显示出的微小残差来自浮点舍入。":"不可测候选不能自动省略交叉项。")+'</p>'+
   '<p>条件期望 M = <code>'+vec(r.conditional.vector)+'</code> 美元。</p>';
  if($("proj-partition").value==="signal")text+='<h3>只改变 H 组预测时的误差</h3>'+drawCurve(x,weights);
  return [r,text];
 });
 output("out-tower","tower",()=>{
  const r=QTB.tower(x,weights,C.partitions[$("proj-partition").value],C.partitions[$("outer-partition").value],T);
  return [r,'<p class="'+(r.nested?"good":"bad")+'">'+(r.nested?"外层信息包含在内层信息中，可使用塔式性质。":"两份信息没有所需的嵌套关系：本例不能调用塔式性质。")+'</p>'+
  table(["直接按外层信息平均","先按内层再按外层平均"],[[vec(r.direct),vec(r.iterated)]])+'<p class="muted">非嵌套时数值偶尔相等，也不是一般塔式定理成立的证明。</p>'];
 });
 output("out-rn","rn",()=>{
  const r=QTB.rn(x,weights,C.partitions[$("rn-partition").value],getnum("rn-shift"),T);
  return [r,'<p>W = <code>'+vec(r.w)+'</code> 美元。总 ν₊='+n(r.total_nu_plus)+'，总 ν₋='+n(r.total_nu_minus)+'（美元），不是归一化概率。</p>'+
  table(["组","P(组)","ν₊(组)","ν₋(组)","U","V","M","M⁺","M⁻"],r.rows.map(v=>[groupName(v.indices),n(v.mass),money(v.nu_plus),money(v.nu_minus),money(v.u),money(v.v),money(v.m),money(v.m_plus),money(v.m_minus)]))+
  '<p>E[W]='+n(r.expectation)+'，E[M]='+n(r.conditional_expectation)+' 美元。'+(r.rows.some(v=>!v.ratio_defined)?"零概率组未做除法，U、V 均使用常数 0 版本。":"")+'</p>'];
 });
 output("out-pareto","pareto",()=>{
  const r=QTB.pareto(getnum("pareto-alpha"),getnum("pareto-cap"));
  return [r,table(["E[Z]","E[Z²]","E[min(Z,b)]","E[Z·1{Z≤b}]"],[[
  r.mean_finite?n(r.mean):"+∞（非有限）",r.second_moment_finite?n(r.second_moment):"+∞（非有限）",n(r.capped_mean),n(r.omitted_tail_mean)]])+
  '<p>封顶与超阈值置零之差 bP(Z&gt;b)='+n(r.boundary_contribution)+'。变量无量纲；这些值不是股票收益样本。</p>'];
 });
 output("out-integral","integral",()=>{
  const r=QTB.spike(getnum("spike-n"),getnum("spike-x")),dy=QTB.dyadic(getnum("dyadic-n"));
  return [{spike:r,dyadic:dy},table(["尖峰高度","支撑长度","积分","观察位置的值"],[[n(r.height),n(r.width),n(r.area),n(r.value)]])+
   '<p>每个固定 x&gt;0 处极限为零，积分仍恒为一；不能省略 DCT 的统一可积支配。</p>'+
   '<p>独立的 Uniform 简单函数：二进步长 '+n(dy.step)+'，积分 '+n(dy.integral)+'，目标积分 '+n(dy.limit_integral)+'。</p>'];
 });
}
function init(){
 for(let i=0;i<C.probabilities.length;i++)$("p"+i).value=C.probabilities[i];
 select("event-a",eventopts,D.defaults.events.event);select("event-b",eventopts,D.defaults.events.given);
 select("ce-partition",groupopts,D.defaults.conditional.partition);
 select("meas-partition",groupopts,D.defaults.measurable.partition);$("meas-vector").value=D.defaults.measurable.candidate.join(",");
 select("proj-partition",groupopts,D.defaults.projection.partition);$("proj-vector").value=D.defaults.projection.candidate_usd.join(",");
 select("outer-partition",groupopts,D.defaults.projection.outer_partition);
 select("rn-partition",groupopts,D.defaults.rn.partition);$("rn-shift").value=D.defaults.rn.shift_usd;
 $("pareto-alpha").value=D.defaults.integration.pareto_alpha;$("pareto-cap").value=D.defaults.integration.cap;
 $("spike-n").value=D.defaults.integration.spike_n;$("spike-x").value=D.defaults.integration.probe_x;$("dyadic-n").value=D.defaults.integration.dyadic_n;
 weights=C.probabilities.slice();$("results").hidden=false;$("data-status").textContent="当前使用明确设定的四状态模型概率。";update();
}
document.documentElement.classList.add("js");
document.querySelectorAll(".live-controls").forEach(e=>e.hidden=false);
document.querySelectorAll("details.static").forEach(e=>e.open=false);
$("prob-apply").addEventListener("click",()=>{
 try{const next=C.probabilities.map((_,i)=>getnum("p"+i));QTB.probabilities(next,T);weights=next;
 $("data-status").className="good";$("data-status").textContent="已采用新权重；它们仍是模型输入，不是历史频率。";
 $("results").hidden=false;update();}
 catch(e){$("data-status").className="bad";$("data-status").textContent=e.message+"。隐藏旧结果，直到输入合法。";$("results").hidden=true;}
});
$("all-reset").addEventListener("click",()=>{init();$("data-status").className="";});
$("zero-preset").addEventListener("click",()=>{D.named_cases.zero_group.probabilities.forEach((p,i)=>$("p"+i).value=p);$("prob-apply").click();});
document.querySelectorAll(".lab input,.lab select").forEach(e=>e.addEventListener("input",update));
$("proj-ce").addEventListener("click",()=>{$("proj-vector").value=QTB.conditional(QTB.payoff(C),weights,C.partitions[$("proj-partition").value],T).vector.join(",");update();});
$("proj-future").addEventListener("click",()=>{$("proj-vector").value=D.named_cases.bad_future_candidate.candidate_usd.join(",");update();});
$("proj-default").addEventListener("click",()=>{$("proj-vector").value=D.defaults.projection.candidate_usd.join(",");update();});
function hashView(){
 document.documentElement.classList.toggle("embedded",window.self!==window.top);
 const id=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1))),known=[...document.querySelectorAll(".lab")].some(e=>e.id===id);
 document.querySelectorAll(".lab").forEach(e=>e.classList.toggle("filtered",known&&e.id!==id));
 document.querySelector("main > .card").hidden=id==="EXP-QTB-INTEGRAL-01";
 if(known&&window.self===window.top)$(id).scrollIntoView({block:"start"});
}
window.addEventListener("hashchange",hashView);
window.addEventListener("beforeprint",()=>document.querySelectorAll("details.static").forEach(e=>e.open=true));
init();hashView();
