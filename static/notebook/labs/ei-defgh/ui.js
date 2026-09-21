
(function(){
"use strict";
const E=window.EIEngine,D=window.EIInput,S=window.EISources||[];
const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=(x,n=4)=>x===null||x===undefined?"未给定":typeof x==="number"?(Math.abs(x)<1e-12?0:x).toLocaleString("zh-CN",{maximumFractionDigits:n}):esc(x);
const pct=x=>fmt(x*100,4)+"%";
const table=(heads,rows)=>'<div class="table-wrap"><table><thead><tr>'+heads.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const tiles=a=>'<div class="result-grid">'+a.map(r=>'<div class="result"><small>'+esc(r[0])+'</small><b>'+r[1]+'</b></div>').join('')+'</div>';
const colors=["#146c73","#a45d29","#425fb3","#ad3f6d"],dashes=["","7 4","2 4","10 3 2 3"];
function lineChart(series,xlabel,ylabel,caption){
 const pts=series.flatMap(s=>s.points).filter(p=>p.every(Number.isFinite));if(!pts.length)return "";
 const legend=series.map((s,i)=>`<span style="--legend:${colors[i%4]};--legend-style:${i===0?'solid':i===2?'dotted':'dashed'}">${esc(s.name)}${i>0?"（虚线"+i+"）":"（实线）"}</span>`).join("");
 const config=esc(JSON.stringify({series,caption}));
 return `<figure class="chart line-chart"><figcaption>${esc(caption)}</figcaption><div class="legend">${legend}</div><p class="chart-axis-label">纵轴：${esc(ylabel)}</p><div class="line-plot" data-line-chart="${config}"></div><p class="chart-axis-label chart-x-label">横轴：${esc(xlabel)}</p></figure>`;
}
function drawLineChart(plot){
 // One SVG unit equals at least one CSS pixel. Read the mounted plot's own
 // content width, not the iframe viewport or a fixed desktop/mobile viewBox.
 const W=Math.floor(plot.getBoundingClientRect().width);if(W<=0)return;
 if(plot.dataset.chartWidth===String(W))return;
 const {series,caption}=JSON.parse(plot.dataset.lineChart);
 const pts=series.flatMap(s=>s.points).filter(p=>p.every(Number.isFinite));if(!pts.length)return;
 let xmin=Math.min(...pts.map(p=>p[0])),xmax=Math.max(...pts.map(p=>p[0])),ymin=Math.min(0,...pts.map(p=>p[1])),ymax=Math.max(...pts.map(p=>p[1]));
 if(xmin===xmax){xmin-=1;xmax+=1;}if(ymin===ymax){ymin-=1;ymax+=1;}const yp=(ymax-ymin)*.12;ymin-=yp;ymax+=yp;
 const yTicks=Array.from({length:5},(_,i)=>{const value=ymin+(ymax-ymin)*i/4;return {value,label:fmt(value,Math.abs(value)>10?1:3)};});
 const H=W<380?260:300,L=Math.max(42,Math.max(...yTicks.map(t=>t.label.length))*7.5+10),RR=10,TOP=12,B=34;
 const X=x=>L+(x-xmin)/(xmax-xmin)*(W-L-RR),Y=y=>H-B-(y-ymin)/(ymax-ymin)*(H-TOP-B);
 let svg=`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(caption)}"><title>${esc(caption)}</title>`;
 yTicks.forEach(t=>{const y=Y(t.value);svg+=`<line x1="${L}" y1="${y}" x2="${W-RR}" y2="${y}" stroke="#dce4e6"/><text x="${L-8}" y="${y+4}" text-anchor="end" font-size="12" fill="#435b68">${esc(t.label)}</text>`;});
 const xSteps=W<320?1:W<460?2:4;
 for(let i=0;i<=xSteps;i++){const x=xmin+(xmax-xmin)*i/xSteps,anchor=i===0?'start':i===xSteps?'end':'middle';svg+=`<text x="${X(x)}" y="${H-B+23}" text-anchor="${anchor}" font-size="12" fill="#435b68">${esc(fmt(x,Math.abs(x)>10?0:2))}</text>`;}
 if(ymin<=0&&ymax>=0)svg+=`<line x1="${L}" x2="${W-RR}" y1="${Y(0)}" y2="${Y(0)}" stroke="#8b9ca4"/>`;
 series.forEach((s,i)=>{svg+=`<polyline points="${s.points.map(p=>X(p[0])+","+Y(p[1])).join(' ')}" fill="none" stroke="${colors[i%4]}" stroke-width="2.8" stroke-dasharray="${dashes[i%4]}"/>`;if(s.points.length<=10)s.points.forEach(p=>svg+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4" fill="${colors[i%4]}"/>`);});
 plot.innerHTML=svg+"</svg>";plot.dataset.chartWidth=String(W);
}
function fitCharts(root){root.querySelectorAll('.line-plot[data-line-chart]').forEach(drawLineChart);}
function fitVisibleCharts(){document.querySelectorAll('.experiment').forEach(fitCharts);}

function chart(series,title,xlabel,ylabel){return lineChart(series.map(s=>({name:s.label,points:s.points})),xlabel,ylabel,title);}
function render(s,x,o){
 switch(s.method){
 case "rates": {
 const t=x.refiTime,p=o.annual_net_before_refinance,a=o.annual_net_after_refinance;
 return tiles([["年初净年化增量（百万美元/年）",fmt(p)],["再融资后净年化增量",fmt(a)],["首年累计增量（百万美元）",fmt(o.first_year_net_accrual)]])
 +chart([{label:"净年化增量",points:[[0,p],[t,p],[t,a],[1,a]]}],"速度：再融资时点前后","年内时间 τ","百万美元/年")
 +chart([{label:"累计计息增量",points:[[0,0],[t,p*t],[1,o.first_year_net_accrual]]}],"期间：首年累计计息","年内时间 τ","百万美元")
 +table(["组成","年化增量","首年影响"],[
 ["现金利息收入",fmt(o.annual_asset_income),fmt(o.annual_asset_income)],
 ["浮债利息费用",fmt(o.annual_floating_expense),fmt(o.annual_floating_expense)],
 ["新固定债利息费用",fmt(o.annual_refinance_expense),fmt(o.first_year_refinance_expense)]])
 +'<p>默认旧浮债利差固定，现金和浮债基准完全传导；固定债只对再融资部分重定价。累计计息不是付息日现金流水。</p>';
 }
 case "fx":return tiles([["应收重估损益（USD）",fmt(o.receivable_change)],["应付重估损益（USD）",fmt(o.payable_gain)],["自然匹配净损益（USD）",fmt(o.net_change)]])
 +table(["同币种、同日","确认时 USD","结算时 USD"],[["应收 EUR "+fmt(x.receivable),fmt(o.receivable_start),fmt(o.receivable_end)],["应付 EUR "+fmt(x.payable),fmt(o.payable_start),fmt(o.payable_end)],["净额 EUR "+fmt(o.net_eur),fmt(o.net_start),fmt(o.net_end)]])
 +'<div class="flow"><span>美元功能货币</span><b>→</b><span>确认 EUR 固定金额</span><b>→</b><span>同日结算与自然匹配</span></div><p>报价是 USD/EUR。日期不同就不能把两笔现金当同日净额；本实验没有衍生品支付，也不计算 OCI 折算。</p>';
 case "liquidity":return tiles([["合格来源（同一金额单位）",fmt(o.eligible_sources)],["30天净压力需要",fmt(o.net_need)],["测试频率（题设类别）",o.test_frequency]])
 +table(["资源/需要","采用金额","规则身份"],[["压力需要",fmt(o.need),"本情景假设"],["候选来源",fmt(o.eligible_sources),"通过资格审查且已折价"],["未满足资格的来源",fmt(o.excluded_sources),"不计入"],["授信额度",fmt(o.excluded_credit_line),"30天及以下不计入现金流来源"],["实际另留缓冲资产","未给定","不能据此推算实际缺口"]])
 +'<p>同一可变现资产只记一次。若来源超过需要，净需要显示0；带符号差额为 '+fmt(o.signed_net_need)+'。这不是资本比率或监管 LCR。</p>';
 case "adoption":return tiles([["采用者数量份额",pct(o.adopter_count_share)],["采用者基期产出份额",pct(o.adopter_output_share)],["总体产出增幅",pct(o.growth)]])
 +table(["单位","基期产出","是否采用","相对提升","产出增量"],[[1,fmt(x.y1),x.d1?"是":"否",pct(x.g1),fmt(o.delta[0])],[2,fmt(x.y2),x.d2?"是":"否",pct(x.g2),fmt(o.delta[1])],["合计",fmt(o.baseline),"—","总体 "+pct(o.growth),fmt(o.delta.reduce((a,b)=>a+b,0))]])
 +'<p>计算 Σ(y·d·g)/Σy。按人数/企业数平均效果会给 '+pct(o.count_weighted_gain)+'，只有额外条件成立才等于产出加权结果。本模型固定投入、忽略外溢，不能代入 BTOS×QJE。</p>';
 case "metrics":{
 if(o.branch==="electricity")return tiles([["2025售电量（千MWh）",fmt(o.qty2025,0)],["2024→2025增长",fmt(o.growth)+"%"],["平均收入率（美分/kWh）",fmt(o.averageCents)]])
 +'<p>'+o.status+'。收入为 '+fmt(o.revenue,0)+' 百万美元。Table5.1/5.2 同版、同总体，收入率是收入除售电量，不是边际电价。</p>'+table(["指标","能观察的环节","下一步资料"],[["售电量","客户账单售电","天气、客户结构"],["收入/量","平均账单收入","费率条款、客户mix"],["发电量/容量","供应不同环节","相同覆盖、时段可用性"]]);
 if(o.branch==="manufacturing")return tiles([["未交订单变化",fmt(o.backlogChange)],["构造的新订单",fmt(o.constructedOrders)],["另列存货变化",fmt(o.inventoryChange)]])
 +'<p>百万美元、季调；April revised / May preliminary。N = S + ΔB = '+fmt(o.shipments)+' + '+fmt(o.backlogChange)+'。这是统计构造桥，不是三个独立需求信号。</p>'+table(["材料","角色"],[["出货","期间流量"],["未交订单","期末存量"],["新订单","由前两者构造"],["存货","另一存量，不加进订单桥"]]);
 if(o.branch==="retail")return table(["同一2022材料期","原口径（百万USD）","重述口径","版本差"],[["年度销售",fmt(o.salesOld,0),fmt(o.salesNew,0),fmt(o.salesPct)+"%"],["期末库存",fmt(o.inventoryOld,0),fmt(o.inventoryNew,0),fmt(o.inventoryPct)+"%"]])
 +'<p>2025-04-25发布的重述改变统计总体/分类；它不是同一经济体在相邻两期需求下降。保留原版和重述版，避免拼接同比。</p>';
 return tiles([["行业净利润（十亿美元）",fmt(o.net_income_billion_USD)],["净息差 NIM",fmt(o.NIM_pct)+"%"],["相邻上一季NIM（倒推）",fmt(o.previousNIMpct)+"%"]])
 +'<p>FDIC Q1 2026，4,278家机构。NIM = 年化净利息 / 平均生息资产；ROA '+fmt(o.ROA_pct)+'% 的分母不同。资产收益率降21bp、资金成本降13bp，给出净息差收窄的方向，不能无视分母结构强行相减为精确恒等式。</p>';
 }
 case "industry":return tiles([["零售售电量增长",fmt(o.salesGrowth)+"%"],["公用事业规模发电增长",fmt(o.growth)+"%"],["2026新增计划",fmt(o.plannedGW)+" GW"]])
 +table(["发电来源（千MWh）","2024 final","2025 preliminary","增长"],o.rows.map(r=>[r.label,fmt(r.y2024,0),fmt(r.y2025,0),fmt(r.growth)+"%"]).concat([["总计",fmt(o.totals[0],0),fmt(o.totals[1],0),fmt(o.growth)+"%"]]))
 +'<div class="flow"><span>'+esc(o.path)+'</span></div><p>冻结 EPM 2026-08-26版。这里切换的是经营路径，不更改全国观察数据；86GW为计划而非发电量。其余净额是总计减已列五类，不代表单一技术。</p>';
 case "capacity":{
 const qmax=Math.max(x.a,x.K,100),points=Array.from({length:31},(_,i)=>{let q=qmax*i/30;return[q,x.a-q];});
 return tiles([["均衡量 Q",fmt(o.q)],["价格 P",fmt(o.p)],["约束乘子 μ",fmt(o.mu)]])
 +chart([{label:"逆需求 P=a−Q",points},{label:"边际成本 P=Q",points:[[0,0],[qmax,qmax]]},{label:"容量上限 K",points:[[x.K,0],[x.K,Math.max(x.a,x.K)]]}],"教学竞争市场：成本与容量","抽象数量","抽象价格")
 +table(["状态","值"],[["K−Q",fmt(o.slack)],["μ(Q−K)",fmt(o.complementarity)],["状态",o.regime]])
 +'<p>Q=min(a/2,K)，P=a−Q，μ=a−2Q。需求增加在容量绑定时可只抬升价格。本实验为一期间教学模型，不是 IMES 估计模型。</p>';
 }
 case "relax":return chart([{label:"保留容量约束",points:o.rows.map(r=>[r.period,r.constrained_p])},{label:"同需求，令容量始终松弛",points:o.rows.map(r=>[r.period,r.slack_p])}],"相同需求路径的两次教学运行","教学期数","抽象价格（不是通胀百分点）")
 +table(["期","固定需求a","容量K","约束价格","松弛价格","差"],o.rows.map(r=>[r.period,r.a,fmt(r.K),fmt(r.constrained_p),fmt(r.slack_p),fmt(r.difference)]))
 +'<p>需求 [100,120,130,110] 在两次运行完全相同；只切换是否施加容量上限。操作结构对应 Fig.7，但这些是本站教学价格，不是论文后验序列。论文须保留同一滤出冲击、参数、measurement error和不确定区间。</p>';
 case "interaction":return table(["同一个基准下的情景","a","K","Q","P"],[["基准 G(0,0)",100,80,fmt(o.baseline.q),fmt(o.baseline.p)],["仅需求 G(u,0)",100+x.demandShock,80,fmt(o.demand_only.q),fmt(o.demand_only.p)],["仅容量 G(0,v)",100,80-x.capacityReduction,fmt(o.capacity_only.q),fmt(o.capacity_only.p)],["联合 G(u,v)",100+x.demandShock,80-x.capacityReduction,fmt(o.joint.q),fmt(o.joint.p)]])
 +tiles([["无容量冲击的需求效应",fmt(o.demand_effect_without_capacity)],["给定容量冲击的需求效应",fmt(o.conditional_demand_effect)],["非线性交互项",fmt(o.interaction)]])
 +'<p>条件需求效应=G(u,v)−G(0,v)。交互项再减 G(u,0)−G(0,0)。单位为教学价格，不是通胀贡献；这种差分不是可相加至100%的线性分解。</p>';
 case "paper":return tiles([["低现金比率下条件导数",fmt(o.derivativeLow,6)],["高现金比率下条件导数",fmt(o.derivativeHigh,6)],["响应差（log units）",fmt(o.logDifference,6)]])
 +table(["对象","结果","单位"],[["现金比率差",fmt(x.cashGap),"0–1比率"],["FFR变动",fmt(x.ffrPP),"采用工作例的百分点尺度"],["对数点",fmt(o.logPoints,6),"100×log units"],["精确相对差 exp(z)−1",pct(o.exactRelativeDifference),"同一条件模型的变换，不是现金收益率"]])
 +'<p>Table2(2)：β₂=.214、β₄=.398；导数 β₂+β₄C。来源文字与算式的比例单位存在疑点；这里按明确的0–1现金比率和工作例FFR尺度解释，不声称修复了原作者，也不输出公司预测。</p>';
 }
 return "";
}
const params=new URLSearchParams(location.search),hasQuery=params.has("experiment");
let wanted=hasQuery?params.get("experiment"):decodeURIComponent(location.hash.slice(1));
const embedded=params.get("embed")==="1";
if(embedded)document.body.classList.add("embedded");
const nav=document.getElementById("lab-nav"),container=document.getElementById("experiments");
const allSpecs=D.experiments;
if(wanted&&!allSpecs.some(s=>s.id===wanted)){
 container.innerHTML='<p class="error" role="alert">未知实验 ID：'+esc(wanted)+'。查询参数优先，不回退到其他实验。</p>';
 if(nav)nav.hidden=true;
 return;
}
if(hasQuery&&!wanted){container.innerHTML='<p class="error">experiment 参数为空。</p>';if(nav)nav.hidden=true;return;}
const selected=wanted?allSpecs.filter(s=>s.id===wanted):allSpecs;
if(nav){nav.hidden=embedded;nav.innerHTML='<a href="interactions.html">全部实验</a> · '+allSpecs.map(s=>'<a href="?experiment='+s.id+'#'+s.id+'">'+s.node_id+' · '+esc(s.title)+'</a>').join(' · ');}
const rendered={};
function field(c,id){let p=id+"-"+c.key,form;
 if(c.kind==="select")form='<select id="'+p+'" data-key="'+c.key+'">'+c.options.map(a=>'<option value="'+esc(a[0])+'"'+(a[0]===c.default?' selected':'')+'>'+esc(a[1])+'</option>').join('')+'</select>';
 else if(c.kind==="checkbox")form='<input id="'+p+'" data-key="'+c.key+'" type="checkbox"'+(c.default?' checked':'')+'>';
 else form='<input id="'+p+'" data-key="'+c.key+'" type="number" min="'+c.min+'" max="'+c.max+'" step="'+c.step+'" value="'+c.default+'" inputmode="decimal">';
 return '<div class="field"><label for="'+p+'">'+esc(c.label)+'</label>'+form+'</div>';
}
selected.forEach(s=>{
 const el=document.createElement("section");el.className="experiment";el.id=s.id;
 const isResearch=s.method==="paper",ident=s.identity.startsWith("observed")?"真实材料：冻结版本；仅作原表计算":isResearch?"论文参数的条件解释；保留原文尺度疑点":"教学变式：参数不是现实估计";
 el.innerHTML='<div class="tag">'+s.node_id+' / '+s.id+'</div><h2>'+esc(s.title)+'</h2><div class="exp-identity">'+ident+'</div><div class="controls">'+s.controls.map(c=>field(c,s.id)).join('')+'</div><button class="reset" type="button">恢复默认</button><div class="error" role="alert" hidden></div><div class="output" aria-live="polite"></div><details><summary>计算约定与静态默认结果</summary><p>'+esc(s.algorithm)+'</p><p>'+esc(s.static_equivalent)+'</p></details><div class="exp-sources">'+s.source_ids.map(id=>{let q=S.find(z=>z.id===id);return q?'<a href="'+esc(q.url)+'" target="_blank" rel="noopener">'+esc(id+' · '+q.title)+'</a>':esc(id);}).join('<br>')+'</div>';
 container.appendChild(el);
 const run=()=>{
  const x={}; s.controls.forEach(c=>{let n=el.querySelector('[data-key="'+c.key+'"]');x[c.key]=c.kind==="checkbox"?n.checked:c.kind==="select"?(typeof c.default==="number"?Number(n.value):n.value):n.value===""?NaN:Number(n.value);});
  try{
   const o=s.method==="metrics"?E.metrics(x.branch,D.frozen):s.method==="industry"?E.industry(x.region,D.frozen):E[s.method](x);
   el.querySelector(".error").hidden=true;el.querySelector(".output").innerHTML=render(s,x,o);fitCharts(el);
   if(s.method==='metrics'){
    const ids={electricity:['EIDEF-S19A','EIDEF-S19B','EIDEF-S16B'],manufacturing:['EIDEF-S14','EIDEF-S21'],retail:['EIDEF-S13'],banking:['EIDEF-S17','EIDEF-S22']}[x.branch];
    el.querySelector('.exp-sources').innerHTML='<strong>本分支原文</strong><br>'+ids.map(id=>{const q=S.find(z=>z.id===id);return '<a href="'+esc(q.url)+'" target="_blank" rel="noopener">'+esc(q.title)+'</a>';}).join('<br>');
   }
   el.dataset.output=JSON.stringify(o);el.dataset.inputs=JSON.stringify(x);
  }catch(e){el.querySelector(".error").textContent="输入无效："+e.message;el.querySelector(".error").hidden=false;el.querySelector(".output").innerHTML="";delete el.dataset.output;}
  requestAnimationFrame(()=>{if(embedded&&window.parent!==window)window.parent.postMessage({type:"ei-lab-height",id:s.id,height:Math.ceil(document.querySelector(".lab-shell").getBoundingClientRect().height)},"*");});
 };
 el.querySelectorAll("input,select").forEach(n=>n.addEventListener("input",()=>{run();if(s.method==='metrics'&&window.parent!==window)window.parent.postMessage({type:'ei-selected-branch',branch:el.querySelector('[data-key="branch"]').value},location.origin);}));
 el.querySelector(".reset").addEventListener("click",()=>{s.controls.forEach(c=>{let n=el.querySelector('[data-key="'+c.key+'"]');if(c.kind==="checkbox")n.checked=c.default;else n.value=c.default;});run();if(s.method==='metrics'&&window.parent!==window)window.parent.postMessage({type:'ei-selected-branch',branch:el.querySelector('[data-key="branch"]').value},location.origin);});
 if(s.method==="metrics"&&params.has("branch")){let b=params.get("branch"),c=el.querySelector('[data-key="branch"]');if([...c.options].some(o=>o.value===b))c.value=b;}
 rendered[s.id]={el,run};
 run();
});
window.addEventListener("message",e=>{
 if(e.source!==window.parent||!e.data||e.data.type!=="ei-lab-branch")return;
 const r=rendered["exp-ei15-metric-contract"];if(!r)return;
 const n=r.el.querySelector('[data-key="branch"]');if([...n.options].some(o=>o.value===e.data.branch)){n.value=e.data.branch;r.run();}
});
window.addEventListener("hashchange",()=>{if(!hasQuery)location.reload();});
let lastWidth=window.innerWidth;window.addEventListener("resize",()=>{if(window.innerWidth!==lastWidth){lastWidth=window.innerWidth;Object.values(rendered).forEach(r=>r.run());}if(embedded)window.parent.postMessage({type:"ei-lab-height",id:wanted,height:Math.ceil(document.querySelector(".lab-shell").getBoundingClientRect().height)},"*");});
})();
