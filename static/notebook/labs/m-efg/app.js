
(function(){
"use strict";
const E=window.MEFG_ENGINE,D=window.MEFG_DATA,F=window.MEFG_STATE;
const esc=x=>String(x??"—").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=(x,d=2)=>x===null||x===undefined?"—":Number(x).toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const pct=(x,d=4)=>x==null?"—":fmt(x*100,d)+"%";
const get=(id,name)=>{const el=document.querySelector("#"+id+" [name='"+name+"']");return el.type==="checkbox"?el.checked:el.value;};
const vals=id=>Object.fromEntries([...document.querySelectorAll("#"+id+" .controls [name]")].map(el=>[el.name,el.type==="checkbox"?el.checked:el.value]));
const output=(id,s)=>{const result=document.getElementById(id+"-result");result.innerHTML=s;fitCharts(result);};
const metric=(title,value,unit="")=>`<div class="metric"><small>${esc(title)}</small><b>${esc(value)}</b><small>${esc(unit)}</small></div>`;
const metrics=a=>'<div class="metrics">'+a.map(z=>metric(...z)).join('')+'</div>';
function table(head,rows,caption=""){return `<div class="table-wrap"><table>${caption?`<caption>${esc(caption)}</caption>`:""}<thead><tr>${head.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
const status=(s,warn=false)=>`<p class="status${warn?" warn":""}">${esc(s)}</p>`;
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
 let xmin=Math.min(...pts.map(p=>p[0])),xmax=Math.max(...pts.map(p=>p[0])),ymin=Math.min(...pts.map(p=>p[1])),ymax=Math.max(...pts.map(p=>p[1]));
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
function fitVisibleCharts(){document.querySelectorAll('.lab:not([hidden])').forEach(fitCharts);}
function bars(labels,values,caption,unit){
 const max=Math.max(1e-10,...values.map(Math.abs));
 const rows=labels.map((label,i)=>{
  const v=Object.is(values[i],-0)?0:values[i],width=Math.abs(v)/max*50,left=v<0?50-width:50;
  const number=(v>0?'+':'')+fmt(v,Math.abs(v)>100?2:4);
  return `<li class="bar-row"><div class="bar-heading"><span class="bar-label">${esc(label)}</span><span class="bar-value">${esc(number)}</span></div><div class="bar-track" aria-hidden="true"><span class="bar-fill ${v<0?'negative':'positive'}" style="left:${left}%;width:${width}%"></span></div></li>`;
 }).join('');
 return `<figure class="chart signed-bars"><figcaption>${esc(caption)}</figcaption><p class="chart-unit">单位：${esc(unit)}</p><p class="bar-direction" aria-hidden="true"><span>← 负值</span><span>0</span><span>正值 →</span></p><ol class="bar-list">${rows}</ol></figure>`;
}
function fieldVisibility(id){
 const sec=document.getElementById(id);
 if(id==="exp-mefg-m17-lifecycle"){
  const m=get(id,"mode"),groups={physical:["action","funds"],index:["settlement"],writer:["laterSpot","laterMark","external"]};
  for(const [group,names] of Object.entries(groups))for(const n of names)sec.querySelector("[name='"+n+"']").closest(".field").hidden=group!==m;
 }
 if(id==="exp-mefg-m18-iv")sec.querySelector("[name=quote]").closest(".field").hidden=get(id,"side")!=="custom";
 if(id==="view-mefg-m21-state-01"){
   sec.querySelector("[name=p]").closest(".field").hidden=get(id,"branch")!=="two";
   sec.querySelector("[name=t]").closest(".field").hidden=get(id,"branch")!=="family";
 }
}
const renders={};
renders["exp-mefg-m15-contract"]=id=>{
 const x=vals(id),r=E.contract(D,x),sign=r.side==="long"?1:-1,span=Math.max(20,r.strike*.2),arr=[];
 for(let i=0;i<=30;i++){const s=Math.max(0,r.strike-span)+2*span*i/30,rr=E.contract(D,{...x,terminal:s});arr.push([s,rr.payoff,rr.nominalPnl]);}
 const cashSettle=r.settlement==="现金";
 const right=cashSettle
   ?(r.kind==="call"?"按指定最终结算值超过K的正差额取得现金":"按K超过指定最终结算值的正差额取得现金")
   :(r.kind==="call"?"按K取得标的":"按K交出标的");
 const writer=cashSettle?"条件触发后承担对应现金结算义务":"条件触发后按约完成实物履约";
 const quoteNote=cashSettle?`每点${r.multiplier}美元；不交付股票，也不支付K×乘数购买标的`:`乘数${r.multiplier}，行权货款与权利金分开`;
 output(id,metrics([["权利金现金",fmt(r.premiumCash),"美元；正为收到"],["终点合约支付",fmt(r.payoff),"条件经济支付／美元"],["名义交易损益",fmt(r.nominalPnl),"不含资金时间、税费"],["合约规则",r.style,r.settlement+"结算"]])+
 `<div class="flow"><span><b>持有人</b>${esc(right)}的权利</span><span><b>写出方</b>${esc(writer)}</span><span><b>报价不是货款</b>${esc(quoteNote)}</span></div>`+
 table(["条件行权结果","金额／股数"],[["实物行权毛现金（正为收）",r.grossStrikeCash===null?"不适用：现金结算":fmt(r.grossStrikeCash)],["行权股票变化",r.sharesIfExercised===0?"0（现金结算）":fmt(r.sharesIfExercised,0)]])+
 lineChart([{name:"终端支付",points:arr.map(p=>[p[0],p[1]])},{name:"扣权利金后的损益",points:arr.map(p=>[p[0],p[2]])}],"到期标的值","美元","教学到期曲线；不是合约到期前的报价曲线"));
};
renders["exp-mefg-m16-return"]=id=>{
 const x=vals(id),r=E.wealth(D,{terminal:x.terminal,cashRate:Number(x.cashRate)/100}),names=["100股","1call＋现金","10calls"],view=x.view;
 const series=names.map((name,j)=>({name,points:Array.from({length:31},(_,i)=>{const s=30+i*1.6,z=E.wealth(D,{terminal:s,cashRate:Number(x.cashRate)/100});return [s,view==="wealth"?z.wealth[j]:view==="return"?z.returns[j]*100:z.gains[j]];})}));
 output(id,metrics([["单份call支付",fmt(r.payoffOne),"美元"],["保留现金利息",fmt(r.interest,3),"4,500×简单年率×0.5"],["单份call权利金回报",pct(r.premiumReturn,2),"分母500，不是全部财富"]])+
 table(["配置","终值财富","损益","初始5,000回报"],names.map((n,j)=>[n,fmt(r.wealth[j],3),fmt(r.gains[j],3),pct(r.returns[j],4)]))+
 lineChart(series,"到期股价",view==="return"?"百分比":"美元","同样初始财富的三种经济终值；忽略税费及股票股息.")+
 status("切换图的单位不改变资产配置；权利金回报与全部财富回报的分母不能互换."));
};
renders["exp-mefg-m17-lifecycle"]=id=>{
 const x=vals(id),r=E.lifecycle(D,x);let html="";
 if(r.mode==="writer"){
   html=metrics([["所需总抵押",fmt(r.requiredCollateral),"含负债对应部分"],["所需净权益",fmt(r.requiredEquity),"总抵押−当前空头负债"],["本次应追加",fmt(r.requiredTopup),"现金转入，不是损失"],["尚缺金额",fmt(r.shortfall),"缺款时不生成平仓结果"]])+
   status(r.shortfall>0?"未满足抵押要求：停止于部分付款，不假定处置或继续持有.":"默认教学补足后按标记价平仓；不是个人券商实际成交.",r.shortfall>0)+
   table(["阶段","现金／抵押资产","空头负债","净权益","新增外部现金"],r.rows.map(z=>[z.stage,fmt(z.cash),fmt(z.liability),fmt(z.equity),fmt(z.newCapital)]))+
   bars(["初始自有资金","追加已付","标记损益"],[r.rows[0].newCapital,r.paid,r.markPnl],"资金流与损益不是同一个量","美元")+
   `<p>累计自有投入：${fmt(r.totalOwnCapital)}；${r.endingCash===null?"尚无完成平仓后的余额.":"平仓剩余："+fmt(r.endingCash)+"；已实现教学损益："+fmt(r.realizedPnl)+"."}</p>`;
 }else{
   html=status(r.status==="insufficient_sequential_exercise_cash"?"先付完整行权货款的教学顺序无法资助；不显示后续卖股利润.":"按所选教学路径列账；成交、通知、结算是不同事件.",r.pnl===null)+
   metrics([["初始权利金",fmt(r.premium),"美元"],["此路径交易损益",r.pnl===null?"未完成":fmt(r.pnl),"已扣初始权利金"],["交付股票",r.shares===null?"未执行":fmt(r.shares,0),"收取后卖出或现金结算终态"]])+
   table(["事件","现金变化（美元）","股票变化"],r.rows.map(z=>[z[0],fmt(z[1]),z[2]]))+
   bars(r.rows.map(z=>z[0]),r.rows.map(z=>z[1]),"路径中的现金时间顺序","美元")+
   (r.shortfall?`<p>毛现金要求${fmt(r.requiredGross)}，可用${fmt(r.available)}，缺口${fmt(r.shortfall)}. 这不是所有经纪商净额融资政策.</p>`:"");
 }output(id,html);
};
renders["exp-mefg-m18-iv"]=id=>{
 const x=vals(id),r=E.inverse(D,x),t=E.earlyTree(D,Number(x.periods)),s=D.surface;
 const sigmas=Array.from({length:41},(_,i)=>.02+i*.0145);
 const curve=sigmas.map(sig=>[sig*100,E.bs(s.spot_index_points,r.strike,r.days/365,s.annual_continuous_rate,sig,r.kind,s.annual_continuous_dividend_yield)]);
 output(id,status(r.iv===null?"该报价不在本模型有限正IV区间；拒绝强行反解.":"模型假设固定，反解的是报价表达，不是未来实际波动预测.",r.iv===null)+
 metrics([["输入报价",fmt(r.price),"期权点"],["对应现金",fmt(r.contractCash),"每合约美元"],["反解IV",r.iv===null?"无":pct(r.iv),"年化模型参数"]])+
 table(["同一报价界","点数"],[["正IV下严格下界",fmt(r.lower,6)],["严格上界",fmt(r.upper,6)]])+
 lineChart([{name:"模型价格",points:curve},{name:"所选报价",points:[[2,r.price],[60,r.price]]}],"σ（%）","期权报价点","报价水平与模型价格相交处给出IV；界外可能无交点.")+
 `<h3>另一个市场：欧式put与可行权节点</h3><p>S₀=50，K=100，u=1.2，d=0.9，R=1.02；${t.periods}个抽象期间，无股息.</p>`+
 metrics([["欧式现值",fmt(t.european,6),"当前不能行权"],["美式倒推",fmt(t.american,6),"每个节点可行权"],["当前立即行权差额",fmt(t.intrinsic),"不是欧式当前的权利"]])+
 table(["深度／上涨次数","股票","立即行权","美式继续价值","美式节点价值","选择"],t.nodes.map(n=>[n.depth+" / "+n.ups,fmt(n.spot),fmt(n.exercise),n.continuation===null?"到期":fmt(n.continuation,6),fmt(n.american,6),n.action])));
};
renders["exp-mefg-m19-greeks"]=id=>{
 const x=vals(id),r=E.localRisk(D,x),scale=x.unit==="usd"?100:1,label=x.unit==="usd"?"美元／合约":"期权点";
 const span=Math.min(2000,Math.max(500,Math.abs(r.ds)*1.1)),xx=Array.from({length:35},(_,i)=>-span+2*span*i/34);
 const exact=[],linear=[],second=[];
 xx.forEach(ds=>{const z=E.localRisk(D,{ds,dvPpt:r.dvPpt,elapsedDays:r.elapsedDays});exact.push([ds,z.exact*scale]);linear.push([ds,z.linear*scale]);second.push([ds,z.quadratic*scale]);});
 output(id,table(["默认初始敏感度","数值","单位"],[
 ["delta",fmt(r.base.delta,9),"期权点／标的点"],["gamma",fmt(r.base.gamma,12),"delta／标的点"],["vega",fmt(r.base.vegaPerPpt,6),"期权点／1波动率百分点"],["theta",fmt(r.base.thetaPerDay,6),"期权点／日"],["N(d₂)",fmt(r.base.qITM,6),"Q下模型实值概率，不是P"]
 ])+metrics([["一阶局部变化",fmt(r.linear*scale,6),label],["加spot二阶",fmt(r.quadratic*scale,6),label],["完整重新定价",fmt(r.exact*scale,6),label],["二阶近似误差",fmt(r.errorQuadratic*scale,6),label]])+
 lineChart([{name:"完整重新定价",points:exact},{name:"一阶Δ/vega/theta",points:linear},{name:"再加spot gamma项",points:second}],"标的点数变化",label,"固定本面板所选波动率与时间变化；仅加入spot二阶项，没有加入所有交叉偏导."));
};
renders["exp-mefg-m20-parity"]=id=>{
 const r=E.parity(D,vals(id)),z=r.quotes;
 const labels={"missing_execution_conditions":"条件缺失，不能解释为可执行","insufficient_model_start_capital":"模型净启动资金不足","positive_initial_receipt_under_all_stated_assumptions":"仅在全部设定条件下有正初始收款","no_positive_initial_receipt":"无正初始收款"};
 output(id,metrics([["PV(K)",fmt(r.PV,6),"K=105，R=1.02"],["中价平价差",fmt(r.midGap,6),"不是可执行套利额"]])+
 table(["现金腿","方向一：卖call/借/买put+股","方向二：卖股+put/买call+存"],[
 ["股票",-z.stock.ask,z.stock.bid],["call",z.call.bid,-z.call.ask],["put",-z.put.ask,z.put.bid],["借入／存入PV(K)",r.PV,-r.PV],["额外费用",-r.fee,-r.fee]
 ].map(row=>[row[0],fmt(row[1],6),fmt(row[2],6)]),"初始收款为正、付款为负；每单位标的")+
 table(["方向","初始净收款","需净启动资金","到期逐状态净额","条件判断"],r.directions.map((d,i)=>[i+1,fmt(d.initialNetReceipt,6),fmt(d.neededCapital,6),"0（匹配欧式支付）",labels[d.status]]))+
 bars(["中价偏差","方向一初始净额","方向二初始净额"],[r.midGap,...r.directions.map(d=>d.initialNetReceipt)],"中间价与跨价成交的区别","每单位标的金额")+
 status("终点现金相抵不等于今天免费. 此处只建同时成交的净融资模型，不模拟券商各腿毛额保证金."));
};
renders["view-mefg-m21-state-01"]=id=>{
 const x=vals(id);let h="";
 if(x.branch==="two"){
   const r=E.twoState(F,x);
   h=metrics([["复制初始成本",fmt(r.price,6),"核心市场不随P改变"],["股票持有",fmt(r.delta,4),"股"],["现金账户持有",fmt(r.beta,6),"单位β"],["终点现金金额",fmt(r.terminalCash),"β×B₁"]])+
    table(["状态","P","Q","状态价格π","dQ/dP","定价核m","复制支付"],["上涨","下跌"].map((n,i)=>[n,pct(r.P[i],2),pct(r.Q[i],2),fmt(r.pi[i],6),fmt(r.density[i],6),fmt(r.kernel[i],6),fmt(r.terminal[i])]))+
    bars(["P下预期支付","Q下预期支付","长仓P期望净额"],[r.expectedPayoff,6,r.fundedExpectedPnl],"价格不变时，改变P只改变预期结果与权重密度","教学美元")+
    status("本页两状态K=105；P须全支持. 现金因子1.02是一期总增长，不年化.");
 }else{
   const mode=x.branch,r=E.threeState(F,{mode,t:x.t});
   if(mode==="family"){
    const values=Array.from({length:25},(_,i)=>.001+.448*i/24).map(t=>[t,E.threeState(F,{t}).price]);
    h=metrics([["三状态候选价格",fmt(r.price,6),"K=100"],["开放下界",fmt(r.range[0],6),"端点不含"],["开放上界",fmt(r.range[1],6),"端点不含"]])+
     table(["状态","Q(t)","状态价格π"],["下","中","上"].map((n,i)=>[n,fmt(r.Q[i],6),fmt(r.pi[i],6)]))+
     lineChart([{name:"允许价格c(t)",points:values}],"t（不含0与0.45）","当前价格","图中仅采样0.001≤t≤0.449；理论两端0与0.45不含，新增支付的价格须落在开区间.");
   }else if(mode==="complete"){
    h=metrics([["新支付成交价格",fmt(r.price),"给定为6"],["矩阵秩",String(r.rank),"三个独立支付方向"]])+
     table(["状态","唯一Q","状态价格"],["下","中","上"].map((n,i)=>[n,fmt(r.Q[i],6),fmt(r.pi[i],6)]))+
     table(["数字支付","现金单位","股票单位","新支付单位","初始成本","乘回终值"],r.digital.map(z=>[z.state,...z.holdings.map(v=>fmt(v,6)),fmt(z.cost,6),z.terminal.map(v=>fmt(v,2)).join(" / ")]));
   }else{
    h=status("端点是套利演示，不是合法全支持EMM.",true)+metrics([["新增支付价格",fmt(r.price,6),"三状态K=100"],["组合初始成本",fmt(r.initialCost,6),"应为0"]])+
     table(["资产","持有单位"],["现金账户","股票","新增支付"].map((n,i)=>[n,fmt(r.holdings[i],6)]))+
     bars(["下状态","中状态","上状态"],r.terminal,"零成本非负支付，至少一个状态严格正","教学美元");
   }
 }output(id,h);
};
renders["exp-mefg-m22-surface"]=id=>{
 const x=vals(id),rows=E.surface(D),byStrike=x.slice==="strike";
 const set=rows.filter(r=>byStrike?r.days===Number(x.days):r.strike===Number(x.strike));
 const series=["call","put"].map(kind=>({name:kind+" "+x.side+" IV",points:set.map(r=>[byStrike?r.strike:r.days,r[kind].iv[x.side]*100])}));
 const v=E.variance(D,{nearDays:x.nearDays,farDays:x.farDays,targetDays:x.targetDays,nearVol:Number(x.nearVol)/100,farVol:Number(x.farVol)/100});
 output(id,lineChart(series,byStrike?"执行价（点）":"剩余天数","IV（%）","合成报价网格的切片；不是实测期权链.")+
 table(["天数","执行价","call选侧IV","put选侧IV"],set.map(r=>[r.days,r.strike,pct(r.call.iv[x.side]),pct(r.put.iv[x.side])]))+
 metrics([["教学目标波动",pct(v.vol,6),"总方差插值后开平方"],["简单算术平均",pct(v.simpleAverage,6),"仅供对照"],["官方假设例最后一步",fmt(v.officialFinal,6),"显示13.93，不是历史实测"]])+
 lineChart([{name:"两点总方差线",points:[[v.near,v.near*v.vn*v.vn],[v.far,v.far*v.vf*v.vf]]},{name:"目标总方差",points:[[v.target,v.target*v.variance]]}],"天数","天×年化方差","先插总方差，再除目标期限；这一图不重建完整VIX条带.")+
 `<p>官方K=1,370单行求和贡献：${v.oneStrikeContribution.toExponential(8)}；不是整项方差.</p>
 <div class="status">研究阅读：Chicago Fed §2.1–2.3、§3.1、§4.1–4.1.1、Figure 8（PDF第30页）. synthetic 1926–2022并非历史上市报价；分母是标的价格；alpha变化不等于beta相关风险补偿消失.</div>`);
};
renders["exp-mefg-m23-information"]=id=>{
 const r=E.information(D,vals(id));
 output(id,status(r.status==="undefined_zero_volume"?"零成交量：TOI未定义.":r.total<10?"可算教学定义，但低于原研究相应成交量筛选；不是合格实证样本.":"合约成交量的教学计算；发起方向分类不是动机识别.",r.total<10)+
 metrics([["TOI",r.TOI===null?"未定义":fmt(r.TOI,4),"size加权合约量"],["异常OI",r.abnormal===null?"未定义":fmt(r.abnormal,4),"减去非事件基线"],["put/call总量比",r.putCallRatio===null?"未定义":fmt(r.putCallRatio,4),"不含方向"],["宏观日标准化系数",fmt(r.standardizedMacroSlope,4),"不是2.83%交易收益"]])+
 bars(["买方call：正","卖方call：负","买方put：负","卖方put：正"],[r.bc,-r.sc,-r.bp,r.sp],"四类发起方向的带符号合约成交量","合约份数")+
 `<div class="timeline"><p><b>τ−300…τ−46：</b>估计市场beta，不用未来回报.</p><p><b>τ−40…τ−10：</b>非公告日流量基线.</p><p><b>τ−1：</b>公告前OI.</p><p><b>τ：</b>消息公开；事后好坏标签不能倒放.</p><p><b>[0,1]：</b>公告回报，按原市场模型比较.</p></div>`+
 table(["论文系数读法","数值"],[["第3列OI",fmt(D.information_example.table_2_column_3.OI_coefficient,4)],["宏观日交互增量",fmt(D.information_example.table_2_column_3.OI_macro_interaction,4)],["原文两者之和",fmt(r.standardizedMacroSlope,4)],["第1列合并系数",fmt(r.pooledCoefficient,4)],["作者比较比值",fmt(r.ratioToPooled,4)]])+
 `<p class="small">宏观／非宏观分别标准化. 没有逐日原始数据，因此这里没有历史回测或样本外收益按钮.</p>`);
};
function render(id){try{fieldVisibility(id);renders[id](id);}catch(err){output(id,`<div class="error" role="alert">${esc(err.message)}. 请修改输入；不保留旧结果作为当前输出.</div>`);}}
function requestedExperiment(search,hash){
 try{const q=new URLSearchParams(search||"").get("experiment");return (q||decodeURIComponent((hash||"").replace(/^#/,""))).toLowerCase();}catch(_){return "";}
}
function routeTo(id){const labs=[...document.querySelectorAll(".lab")],match=labs.find(x=>x.id===id);labs.forEach(l=>l.hidden=!!match&&l!==match);document.getElementById("page-title").textContent=match?match.dataset.node+" · "+match.querySelector("h2").textContent:"期权、复制与市场信息";fitVisibleCharts();return match?.id||"all";}
function route(){
 const embedded=parent!==window;document.body.classList.toggle("embedded",embedded);
 let id=requestedExperiment(location.search,location.hash);
 if(embedded&&![...document.querySelectorAll(".lab")].some(x=>x.id===id))id=document.querySelector(".lab").id;
 return routeTo(id);
}
document.querySelectorAll(".lab").forEach(sec=>{
 const id=sec.id;sec.querySelectorAll("input,select").forEach(el=>el.addEventListener("input",()=>{
  if(id==="exp-mefg-m15-contract"&&el.name==="product"){const sp=el.value==="spxw";sec.querySelector("[name=strike]").value=sp?5000:100;sec.querySelector("[name=premium]").value=sp?50:4;sec.querySelector("[name=terminal]").value=sp?5025:110;}
  render(id);
 }));
 sec.querySelector("[data-reset]").addEventListener("click",()=>{sec.querySelectorAll("input,select").forEach(el=>{if(el.type==="checkbox")el.checked=el.defaultChecked;else el.value=el.dataset.default;});render(id);});
 render(id);
});
document.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",ev=>{
 ev.preventDefault();const id=a.dataset.go;
 try{const u=new URL(location.href);u.searchParams.delete("experiment");u.hash=id==="all"?"all":id;history.replaceState({}, "", u.href);}catch(_){}
 routeTo(id);
 if(id!=="all")document.getElementById(id)?.focus({preventScroll:false});
}));
window.addEventListener("hashchange",route);window.addEventListener("popstate",route);
let resizeTimer;window.addEventListener("resize",()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(fitVisibleCharts,100);});
window.addEventListener("beforeprint",()=>document.querySelectorAll("details.static").forEach(d=>d.open=true));
document.querySelectorAll("details.static").forEach(d=>d.open=false);route();
function notifyHeight(){if(parent===window)return;const panel=document.querySelector(".lab:not([hidden])");if(panel)parent.postMessage({type:"mefg-height",experiment:panel.id.toUpperCase(),height:Math.ceil(document.body.scrollHeight)+20},location.origin);}
if(typeof ResizeObserver!=="undefined")new ResizeObserver(notifyHeight).observe(document.body);
document.querySelectorAll("details").forEach(d=>d.addEventListener("toggle",notifyHeight));
notifyHeight();
// Parent panels can change width without changing the iframe viewport.
// Only redraw cached point geometry; resizing does not call a pricing engine.
if(typeof ResizeObserver!=="undefined"){
 const widths=new WeakMap(),observer=new ResizeObserver(records=>{
  records.forEach(record=>{const width=record.contentRect.width;if(width>0&&widths.get(record.target)!==width){widths.set(record.target,width);fitCharts(record.target);}});
 });
 document.querySelectorAll(".result").forEach(result=>observer.observe(result));
}
window.MEFG_APP={render,renderAll:()=>Object.keys(renders).forEach(render),requestedExperiment,route,routeTo};
})();
