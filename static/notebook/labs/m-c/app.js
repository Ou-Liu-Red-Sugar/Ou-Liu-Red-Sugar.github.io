(function(){
"use strict";
const E=window.MC_ENGINE,D=window.MC_DATA;
const $=id=>document.getElementById(id);
const n=id=>{const v=$(id).value;if(v.trim()==="")throw new Error("请填写 "+($(id).labels[0]?.textContent||id));return Number(v);};
const f=(v,d=2)=>Number(v).toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const pc=(v,d=4)=>f(v*100,d)+"%";
const titles={base:"Base",parallel_up:"平行上移",parallel_down:"平行下移",flattening:"扁平化扭曲",steepening:"陡峭化扭曲"};
const table=(h,r)=>'<div class="table-wrap" role="region" tabindex="0" aria-label="数据表，窄屏可横向滚动查看全部列"><table><thead><tr>'+h.map(x=>'<th scope="col">'+x+'</th>').join('')+'</tr></thead><tbody>'+r.map(row=>'<tr>'+row.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const p=s=>'<p>'+s+'</p>';
function safe(id,fn){try{$(id+"-out").innerHTML=fn();}catch(err){$(id+"-out").replaceChildren();const e=document.createElement("p");e.className="error";e.textContent=err.message;$(id+"-out").append(e);}}
function plot(series,xlabel,ylabel,label){
const W=Math.max(320,Math.min(860,window.innerWidth-72)),H=290,L=66,R=18,T=28,B=48;
let xs=series.flatMap(s=>s.points.map(v=>v[0])),ys=series.flatMap(s=>s.points.map(v=>v[1]));
let xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(...ys),ymax=Math.max(...ys);
if(xmin===xmax)xmax=xmin+1;if(ymin===ymax){ymin-=.1;ymax+=.1;}
const pad=(ymax-ymin)*.12;ymin-=pad;ymax+=pad;
const X=x=>L+(x-xmin)/(xmax-xmin)*(W-L-R),Y=y=>H-B-(y-ymin)/(ymax-ymin)*(H-T-B);
let s='<svg class="plot" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+label+'"><title>'+label+'</title>';
for(let i=0;i<=4;i++){const y=ymin+(ymax-ymin)*i/4; s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(y)+'" y2="'+Y(y)+'" stroke="#ddd"/><text x="'+(L-8)+'" y="'+(Y(y)+4)+'" text-anchor="end">'+f(y,2)+'</text>';}
const ticks=xmax-xmin<=3?[...new Set(xs)]:[xmin,(xmin+xmax)/2,xmax];
ticks.forEach(x=>s+='<text x="'+X(x)+'" y="'+(H-B+23)+'" text-anchor="middle">'+f(x,0)+'</text>');
s+='<line x1="'+L+'" x2="'+L+'" y1="'+T+'" y2="'+(H-B)+'" stroke="#555"/><line x1="'+L+'" x2="'+(W-R)+'" y1="'+(H-B)+'" y2="'+(H-B)+'" stroke="#555"/>';
const dashes=["","9 4","3 4","12 3 2 3","2 2"],widths=[3,2.1,2.1,2.5,2.5];
series.forEach((item,i)=>{s+='<polyline fill="none" stroke="#1f2933" stroke-width="'+widths[i%5]+'" stroke-dasharray="'+dashes[i%5]+'" points="'+item.points.map(v=>X(v[0])+','+Y(v[1])).join(" ")+'"/>';
if(item.points.length<=3)item.points.forEach(v=>s+='<circle cx="'+X(v[0])+'" cy="'+Y(v[1])+'" r="'+(3+i*.5)+'" fill="white" stroke="#1f2933"/>');});
s+='<text x="'+(W/2)+'" y="'+(H-4)+'" text-anchor="middle">'+xlabel+'</text><text x="12" y="16">'+ylabel+'</text></svg>';
s+='<div class="key">'+series.map((it,i)=>'<span><svg width="40" height="14" aria-hidden="true"><line x1="0" x2="40" y1="7" y2="7" stroke="#1f2933" stroke-width="'+widths[i%5]+'" stroke-dasharray="'+dashes[i%5]+'"/></svg> '+it.name+'</span>').join('')+'</div>';
return s;
}
function renderNote(){safe("EXP-MC-M06-NOTE",()=>{
const which=$("note-case").value; $("note-y").disabled=which==="reopening";
const r=E.noteCase(D,n("note-face"),which,which==="original"?n("note-y")/100:D.note.original.yield);
let s=p("<strong>"+(which==="original"?"原始发行":"同券重开")+"</strong> · 交付日 "+r.issue+" · 原件高收益率 "+pc(r.official_yield,3));
s+=table(["金额／口径","USD"],[["净价",f(r.clean,6)],["应计",f(r.accrued,6)],["全价（不计额外费用）",f(r.full,6)],["每半年票息",f(r.face*D.note.coupon_annual/D.note.payments_per_year)]]);
if(r.model)s+=p("教学滑杆模型价格：<strong>"+f(r.model.price,6)+"</strong>；对应有效年率 "+pc(r.model.effective_annual)+"。官方结果不随滑杆改变。");
else s+=p("重开为期中取得：不使用20个完整半年期计算模型价格或重开YTM。净价＋官方应计得到全价。");
s+=p("共"+r.schedule.length+"次约定票息；首约定 "+r.schedule[0].contract_date+"，财政部规则付款日 "+D.note.first_payment_rule_date+"。"+D.note.first_payment_status+"。");
s+='<details><summary>展开20期合同日程</summary>'+table(["期数","约定日","票息USD","本金USD","合计USD"],r.schedule.map(v=>[v.period,v.contract_date,f(v.coupon),f(v.principal),f(v.cashflow)]))+'</details>';
return s;});}
function renderLocal(){safe("EXP-MC-M07-LOCAL",()=>{
const face=n("local-face"),r=E.localRisk(D,face,n("local-shock"));
let s=table(["量","值"],[["Base价格USD",f(r.base.price,6)],["冲击后名义年率",pc(r.after_yield,3)],["修正久期（年）",f(r.base.modified,6)],["DV01 USD/bp",f(r.base.dv01,6)],["凸性（年²）",f(r.base.convexity,6)],["精确价格USD",f(r.exact,6)],["一阶价格／误差 USD",f(r.linear,6)+" / "+f(r.linear_error,6)],["二阶价格／误差 USD",f(r.quadratic,6)+" / "+f(r.quadratic_error,6)]]);
const values=Array.from({length:41},(_,i)=>E.localRisk(D,face,-200+i*10));
s+=plot([{name:"精确",points:values.map(v=>[v.shock_bp,v.exact])},{name:"一阶",points:values.map(v=>[v.shock_bp,v.linear])},{name:"二阶",points:values.map(v=>[v.shock_bp,v.quadratic])}],"年收益率冲击（bp）","价格 USD","固定现金流的精确价格、一阶与二阶近似");
return s+p("误差＝近似价−精确价。这里只改变同一个年收益率，不能用这张图代替曲线扭曲、信用或赎回后的现金流重建。");});}
function renderCurve(){safe("EXP-MC-M07-CURVE",()=>{
const r=E.curves(D,[n("spot1")/100,n("spot2")/100,n("spot3")/100],n("curve-shock"));
let s=plot(r.rows.map(v=>({name:titles[v.name],points:v.spot_rates.map((x,i)=>[i+1,x*100])})),"到期（年）","年复利spot（%）","三点教学零息曲线：平移及短长端扭曲");
s+=table(["情景","1Y/2Y/3Y spot","精确价格","ΔUSD","YTM摘要"],r.rows.map(v=>[titles[v.name],v.spot_rates.map(x=>pc(x,2)).join(" / "),f(v.price,6),f(v.delta,6),pc(v.ytm,6)]));
s+=table(["情景","1Y现值","2Y现值","3Y现值"],r.rows.map(v=>[titles[v.name],...v.pv.map(x=>f(x,6))]));
return s+p("每行按对应spot逐期精确折现；YTM是另解单率方程得到的摘要。固定正现金流50/50/1050，非历史市场曲线。");});}
function renderBill(){safe("EXP-MC-M09-BILL",()=>{
const r=E.bill(D,n("bill-face"));
return table(["量","值"],[["购买成本USD",f(r.purchase,6)],["到期面值差额USD",f(r.difference,6)],["91天HPR",pc(r.hpr,6)],["365简单年化",pc(r.simple_annual_365,6)],["官方High Rate",pc(r.discount_rate,3)],["官方Investment Rate",pc(r.official_investment_rate,3)],["按贴现公式未舍入成本USD",f(r.price_from_discount,6)]])+p("按官方公布价格计算持有回报；最后一行以未舍入贴现公式作交叉核对。简单年化不保证未来滚动续投条件。");});}
let priorBasis="cash";
function renderRepo(){safe("EXP-MC-M09-REPO",()=>{
const p0={cash:n("repo-cash"),rate:n("repo-rate")/100,days:n("repo-days"),margin_basis:$("repo-basis").value,margin_value:n("repo-margin")/100,lender_cash:n("repo-lender"),borrower_eligible_collateral:n("repo-collateral"),borrower_buffer:n("repo-buffer"),proceeds_spent:n("repo-spent")};
const r=E.repo(D,p0);
let s=table(["条款演算（不是实际执行）","值"],[["h现金分母 / k证券分母",pc(r.margin_cash,6)+" / "+pc(r.margin_security,6)],["所需抵押证券USD",f(r.required_collateral)],["利息USD",f(r.interest,6)],["到期回购现金USD",f(r.repurchase_cash)]]);
if(!r.opening_ok)return s+'<p class="error">未能开始：'+r.failures.join("；")+"。不生成现金收付或结清账本。</p>";
s+=table(["阶段","放款人现金变化USD","融资人现金变化USD"],[["开始时（假设成交）",f(r.flows.opening.lender),f(r.flows.opening.borrower)],["到期约定应收／应付，非已支付",f(r.flows.repayment.lender),f(r.flows.repayment.borrower)]]);
s+=p("融资人到期可用现金："+f(r.borrower_maturity_cash)+"；还款缺口："+f(r.funding_gap)+"。证券腿单列，不把证券价值加进现金。");
if(!r.completion_ok)return s+'<p class="error">资金不足，不能按设定完成：不假设获得外部融资，也不模拟抵押处置或把到期义务标为已付。</p>';
return s+'<p class="ok">在全部约定依次履行的条件下可以完成。放款人末现金 '+f(r.conditional_end.lender)+'，融资人末现金 '+f(r.conditional_end.borrower)+'；证券按约返还。这不是实际交易记录。</p>';
});}
function renderFX(){safe("EXP-MC-M09-FX",()=>{
const r=E.fx(D,n("fx-amount"),$("fx-direction").value,$("fx-date").value);
if(r.status==="missing")return '<p class="error">该日为ND，没有可用参考观察；不输出零汇率、换算结果或现金账本。</p>';
const s=table(["字段","参考计算"],[["观察日",r.date],["原始报价单位",r.unit],["原币金额",f(n("fx-amount"))+" "+r.from],["运算",r.operation==="multiply"?"乘以参考率":"除以参考率"],["参考结果",f(r.output,6)+" "+r.to]]);
return s+p("假设按参考数完成兑换时的两币种变化（非已执行、非到账）：")+table(["币种","数量变化"],Object.entries(r.ledger).map(([k,v])=>[k,f(v,6)]))+
table(["固定持有10,000EUR，无换币","EUR数量","USD报告值"],[["2026-09-08","10,000","11,627"],["2026-09-11","10,000","11,604"]])+p("报告值变化−23 USD，但EUR现金并未减少。两币种金额不能直接相加；参考数不含真实bid/ask或费用。");
});}
const binds=[["note-form",renderNote],["local-form",renderLocal],["curve-form",renderCurve],["bill-form",renderBill],["repo-form",renderRepo],["fx-form",renderFX]];
binds.forEach(([id,fn])=>{const el=$(id);el.addEventListener("submit",ev=>{ev.preventDefault();fn();});
el.addEventListener("input",ev=>{if(ev.target.id!=="repo-basis")fn();});
el.addEventListener("change",ev=>{if(ev.target.id!=="repo-basis")fn();});
el.addEventListener("reset",()=>setTimeout(()=>{if(id==="repo-form"){priorBasis="cash";$("repo-margin").max="100";}fn();},0));fn();});
$("repo-basis").addEventListener("change",()=>{
try{const next=$("repo-basis").value;$("repo-margin").max=next==="cash"?"100":"50";$("repo-margin").value=String(E.marginConvert(n("repo-margin")/100,priorBasis,next)*100);priorBasis=next;renderRepo();}
catch(e){priorBasis=$("repo-basis").value;renderRepo();}});
document.querySelectorAll("details.static").forEach(e=>e.open=false);
let printState=[];
window.addEventListener("beforeprint",()=>{printState=[...document.querySelectorAll("details")].map(e=>[e,e.open]);printState.forEach(([e])=>e.open=true);});
window.addEventListener("afterprint",()=>printState.forEach(([e,o])=>e.open=o));
function deepLink(){
const embedded=window.self!==window.top;
document.documentElement.classList.toggle("embedded",embedded);
let id="";try{id=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));}catch(_){}
const sections=[...document.querySelectorAll("main > section[id]")];
const chosen=sections.find(el=>el.id===id);
sections.forEach(el=>el.hidden=Boolean(embedded&&chosen&&el!==chosen));
document.querySelectorAll("main > section:not([id])").forEach(el=>el.hidden=Boolean(embedded&&chosen));
if(chosen&&!embedded){chosen.focus({preventScroll:true});chosen.scrollIntoView();}
}
window.addEventListener("hashchange",deepLink);
deepLink();
window.addEventListener("resize",()=>{renderLocal();renderCurve();});
window.MC_APP_READY=true;
})();
