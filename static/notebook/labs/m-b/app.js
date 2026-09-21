/* UI adapter. Algorithms and defaults live in engine.js / shared_inputs.json. */
(function(){
"use strict";
const D=window.MB_DATA,E=window.MB_ENGINE;
const $=id=>document.getElementById(id);
const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=(n,d=2)=>Number(n).toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const number=id=>{const s=$(id).value.trim();return s===""?NaN:Number(s)};
const flag=id=>$(id).checked;
function table(headers,rows,caption=""){return '<div class="table-wrap"><table>'+(caption?'<caption>'+esc(caption)+'</caption>':'')+'<thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((v,i)=>'<td'+(i?' class="num"':'')+'>'+esc(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>'}
function status(target,r,good){$(target).className="status "+r.status;$(target).textContent=r.status==="calculated"?good:r.errors.join("；")}
function kpis(rows){return '<div class="kpis">'+rows.map(([label,value])=>'<div class="kpi"><span>'+esc(label)+'</span><strong>'+esc(value)+'</strong></div>').join('')+'</div>'}
function rights(){
 const r=D.rights[$("rights-choice").value];
 $("rights-output").innerHTML='<strong>'+esc(r.label)+'</strong><dl>'+
 [['表决',r.voting_note],['分配',r.dividend_note],['清算',r.liquidation_note],['转换',r.conversion_note]]
 .map(([a,b])=>'<dt>'+a+'</dt><dd>'+esc(b)+'</dd>').join('')+
 '</dl><p class="sources">固定证券文件快照。来源：'+esc(r.source_id)+'；不把普通表决票数当成全部经济权利。</p>';
}
function capitalInput(){return {V:number("cap-v"),C:number("cap-c"),N:number("cap-n"),q:number("cap-q"),
 p:number("cap-p"),d:number("cap-d"),h:number("cap-h"),action:$("cap-action").value};}
function capChart(x){
 if(x.action==="dividend"){return '<p class="muted">分配时比较“剩余权益＋收到的现金”；不是预测除息行情。</p>';}
 const pts=[];
 for(let p=4;p<=16.00001;p+=.2){const r=E.capital({...x,p});
   if(r.status==="calculated")pts.push([p,r.after.perShare]);}
 if(!pts.length)return '<p>当前现金/股数条件下，图示价格范围内无可计算路径。</p>';
 const ys=pts.map(p=>p[1]).concat(x.V/x.N);let lo=Math.min(...ys),hi=Math.max(...ys);
 const pad=Math.max((hi-lo)*.18,.15);lo-=pad;hi+=pad;
 const X=p=>62+(p-4)/12*460,Y=v=>198-(v-lo)/(hi-lo)*157;
 const path=pts.map((p,i)=>(i?"L":"M")+X(p[0]).toFixed(2)+","+Y(p[1]).toFixed(2)).join(" ");
 return '<svg role="img" aria-label="教学每股经济价值对交易价格的关系，只绘制现金和股数约束允许的点" viewBox="0 0 580 258">'+
 '<line x1="62" y1="198" x2="530" y2="198" stroke="#566e7a"/><line x1="62" y1="38" x2="62" y2="198" stroke="#566e7a"/>'+
 '<line x1="62" y1="'+Y(x.V/x.N)+'" x2="530" y2="'+Y(x.V/x.N)+'" stroke="#87969f" stroke-dasharray="5 4"/>'+
 '<path d="'+path+'" stroke="#136a78" stroke-width="3" fill="none"/>'+
 [4,8,12,16].map(p=>'<text x="'+X(p)+'" y="219" text-anchor="middle" font-size="11">'+p+'</text>').join("")+
 '<text x="66" y="20" font-size="12">每股经济价值（USD/股）</text><text x="280" y="243" text-anchor="middle" font-size="12">交易价格 p（USD/股）；虚线＝初始每股值</text>'+
 '<text x="54" y="47" text-anchor="end" font-size="10">'+fmt(hi,2)+'</text><text x="54" y="198" text-anchor="end" font-size="10">'+fmt(lo,2)+'</text></svg>';
}
function renderCapital(){
 const x=capitalInput();const r=E.capital(x);
 status("cap-status",r,"教学模型可计算：下面不是公司实际交易，也不是股价预测。");
 $("cap-q").disabled=x.action==="dividend";$("cap-p").disabled=x.action==="dividend";$("cap-d").disabled=x.action!=="dividend";
 if(r.status!=="calculated"){
   $("cap-result").innerHTML=r.shortfall!==undefined?'<p>所需现金 $'+fmt(r.requiredCash)+'；缺口 $'+fmt(r.shortfall)+'。交易后结果未生成。</p>':'<p>未生成交易后状态。</p>';
   $("cap-chart").innerHTML="";return;
 }
 const a=r.after,b=r.before;
 $("cap-result").innerHTML=kpis([["公司现金（USD）",fmt(a.C)],["权益经济价值（USD）",fmt(a.V)],["在外股数",fmt(a.N,0)]])+
 table(["项目","行动前","行动后"],[["每股经济价值（USD/股）",fmt(b.perShare,4),fmt(a.perShare,4)],["持续持有人股数",fmt(x.h,0),fmt(x.h,0)],["该持有人权益值（USD）",fmt(r.retained.beforeValue),fmt(r.retained.afterValue)],["该持有人收到现金（USD）","0.00",fmt(r.retained.receivedCash)],["权益＋收到现金（USD）",fmt(r.retained.beforeValue),fmt(r.retained.totalAfter)]])+
 '<p>'+esc(r.outsiderFlow)+'：合计 $'+fmt(r.cashTransfer)+'。模型每股变化 $'+fmt(r.delta,4)+'。</p>';
 $("cap-chart").innerHTML=capChart(x);
}
function resetCapital(){
 const x=D.capital_default;
 for(const [id,key] of [["cap-v","V"],["cap-c","C"],["cap-n","N"],["cap-q","q"],["cap-p","p"],["cap-d","d"],["cap-h","h"]])$(id).value=x[key];
 $("cap-action").value=x.action;renderCapital();
}
function renderNav(){
 let f={...D.fund};
 if(flag("nav-mismatch")){f={...f,assets:3000000,liabilities:0,asset_scope:"entire-multiclass-fund"};}
 const q=number("nav-create"),rQ=number("nav-redeem");const n=E.nav(f);
 if(n.status!=="calculated"){status("nav-status",n,"");$("nav-result").innerHTML="<p>拒绝类别错配，不把300美元当ETF类别NAV。</p>";return;}
 const c=E.fundFlow(f,"create",q);
 if(c.status!=="calculated"){status("nav-status",c,"");$("nav-result").innerHTML="";return;}
 const r=E.fundFlow(c.nextInput,"redeem",rQ);
 status("nav-status",r,r.status==="calculated"?"同口径公允值交换；新发或赎回份额不凭空创造NAV。":"");
 let rows=[["申购前",fmt(n.net),fmt(n.shares,0),fmt(n.nav)],["申购后",fmt(c.after.net),fmt(c.after.shares,0),fmt(c.after.nav)]];
 if(r.status==="calculated")rows.push(["从申购后状态赎回后",fmt(r.after.net),fmt(r.after.shares,0),fmt(r.after.nav)]);
 $("nav-result").innerHTML=table(["状态","净资产 USD","份额","NAV USD/份"],rows)+
 '<p>申购对应篮子公允值 $'+fmt(c.basketValue)+'；'+(r.status==="calculated"?'赎回带出 $'+fmt(r.basketValue):'赎回后状态未生成')+'。</p>'+
 '<p class="muted">本实验只有一个份额类别；50,000只是通用教学数量，不是VTI规格。费用不由现有基金承担。下一个实验只看basket/in-kind教学分支的AP执行成本。</p>';
}
function presetAP(name){
 const sc=D.ap.scenarios[name];$("ap-scenario").value=name;
 for(const [id,key] of [["ap-bid","etf_bid"],["ap-ask","etf_ask"],["ap-basket-bid","basket_bid"],["ap-basket-ask","basket_ask"]])$(id).value=sc[key];
 $("ap-fee").value=D.ap.other_cost_per_share;$("ap-cash").value=D.ap.cash;$("ap-blocks").value=D.ap.blocks;
 $("ap-depth").value=D.ap.etf_bid_depth;$("ap-basket-depth").value=D.ap.basket_buy_capacity;
 ["ap-authorized","ap-open","ap-synchronized"].forEach(id=>$(id).checked=true);renderAP();
}
function renderAP(){
 const sc=D.ap.scenarios[$("ap-scenario").value];
 let fund={...D.fund};
 if(sc.fund_stage==="after_creation")fund=E.fundFlow(fund,"create",D.fund.q_create).nextInput;
 const x={...D.ap,...sc,blocks:number("ap-blocks"),cash:number("ap-cash"),other_cost_per_share:number("ap-fee"),
 etf_bid:number("ap-bid"),etf_ask:number("ap-ask"),basket_bid:number("ap-basket-bid"),basket_ask:number("ap-basket-ask"),
 etf_bid_depth:number("ap-depth"),etf_ask_depth:number("ap-depth"),basket_buy_capacity:number("ap-basket-depth"),basket_sell_capacity:number("ap-basket-depth"),
 authorized:flag("ap-authorized"),window_open:flag("ap-open"),synchronized:flag("ap-synchronized")};
 const r=E.apCycle(fund,x);
 $("ap-stage").textContent=sc.side==="create"?"申购方向：基金初始10,000份。":"赎回方向：从教学申购后的60,000份开始；这是另一个报价情景。";
 status("ap-status",r,r.status==="calculated"?(r.conditionalNet>1e-7?"全部设定条件满足，条件差额为正；不是实际利润。":"全部设定条件满足，但条件差额不为正。"):"");
 $("ap-quote").innerHTML=r.quote?kpis([["参考中间价（USD/份）",fmt(r.quote.midpoint)],["同口径参考NAV",fmt(r.quote.referenceNAV)],["中间价溢价（基点）",fmt(r.quote.referencePremiumBps)]]):"";
 if(r.status!=="calculated"){
 $("ap-result").innerHTML='<p>没有生成完成后的资金或份额结果。</p>'+
 (r.requiredCash!==undefined?'<p>该先买后卖顺序需现金 $'+fmt(r.requiredCash)+'；资金缺口 $'+fmt(r.shortfall)+'。</p>':"");return;}
 const direction=sc.side==="create"?"买篮子 → 申购ETF份额 → 按bid卖份额":"按ask买ETF份额 → 赎回篮子 → 卖篮子";
 $("ap-result").innerHTML='<div class="flow"><div class="node">'+direction+'</div></div>'+
 table(["现金项目","USD"],[["先买入的支出",fmt(r.buyCash)],["另一腿卖出所得",fmt(r.sellCash)],["其他成本",fmt(r.otherCost)],["条件净差额",fmt(r.conditionalNet)],["需先备的现金",fmt(r.requiredCash)],["AP循环后的现金（条件值）",fmt(r.apCashAfter)]])+
 table(["基金状态","净资产 USD","份额","NAV"],[["之前",fmt(E.nav(fund).net),fmt(fund.shares,0),fmt(E.nav(fund).nav)],["申赎之后",fmt(r.after.net),fmt(r.after.shares,0),fmt(r.after.nav)]])+
 '<p class="muted">价格差额在AP交易账；本实验只模拟basket/in-kind分支，基金按共同公允值处理篮子。每份其他成本的盈亏平衡点为 $'+fmt(r.breakEvenOtherCostPerShare,4)+'，不含未给定风险变化。</p>';
}
function showHash(){
 document.documentElement.classList.toggle("embedded",window.self!==window.top);
 let key="";try{key=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));}catch(_){}
 const recognized=[...document.querySelectorAll(".lab")].some(e=>e.id===key);
 document.querySelectorAll(".lab").forEach(e=>e.classList.toggle("hidden",recognized&&e.id!==key));
 if(recognized&&window.self===window.top)$(key).scrollIntoView({block:"start"});
}
$("rights-choice").addEventListener("change",rights);
["cap-v","cap-c","cap-n","cap-q","cap-p","cap-d","cap-h"].forEach(id=>$(id).addEventListener("input",renderCapital));
$("cap-action").addEventListener("change",()=>{
 const a=$("cap-action").value;
 if(a==="issue")$("cap-q").value=D.capital_tables.issue_q;
 if(a==="repurchase")$("cap-q").value=D.capital_tables.repurchase_q;
 $("cap-h").value=a==="dividend"?D.capital_tables.distribution_h:D.capital_default.h;
 renderCapital();
});
$("cap-reset").addEventListener("click",resetCapital);
$("cap-stress").addEventListener("click",()=>{$("cap-action").value="repurchase";$("cap-q").value=D.capital_tables.repurchase_q;$("cap-p").value=D.capital_default.p;$("cap-c").value=D.capital_tables.cash_stress;renderCapital()});
["nav-create","nav-redeem"].forEach(id=>$(id).addEventListener("input",renderNav));
$("nav-mismatch").addEventListener("change",renderNav);
$("nav-reset").addEventListener("click",()=>{$("nav-create").value=D.fund.q_create;$("nav-redeem").value=D.fund.q_redeem;$("nav-mismatch").checked=false;renderNav()});
$("ap-scenario").addEventListener("change",()=>presetAP($("ap-scenario").value));
["ap-bid","ap-ask","ap-basket-bid","ap-basket-ask","ap-fee","ap-cash","ap-blocks","ap-depth","ap-basket-depth"].forEach(id=>$(id).addEventListener("input",renderAP));
["ap-authorized","ap-open","ap-synchronized"].forEach(id=>$(id).addEventListener("change",renderAP));
$("ap-reset").addEventListener("click",()=>presetAP("premium"));
window.addEventListener("hashchange",showHash);
window.addEventListener("beforeprint",()=>document.querySelectorAll("details").forEach(e=>{e.dataset.wasOpen=e.open?"1":"0";e.open=true}));
window.addEventListener("afterprint",()=>document.querySelectorAll("details").forEach(e=>{e.open=e.dataset.wasOpen==="1"}));
rights();resetCapital();$("nav-create").value=D.fund.q_create;$("nav-redeem").value=D.fund.q_redeem;renderNav();presetAP("premium");showHash();
document.documentElement.dataset.ready="true";
})();
