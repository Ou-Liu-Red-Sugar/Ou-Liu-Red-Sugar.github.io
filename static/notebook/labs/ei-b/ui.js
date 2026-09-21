(function(){
"use strict";
const D=globalThis.EIB_INPUTS,E=globalThis.EIB_ENGINE,$=id=>document.getElementById(id);
const fmt=(x,d=6)=>x===null?"—（无交易／不适用）":new Intl.NumberFormat("zh-CN",{maximumFractionDigits:d}).format(x);
function el(tag,attrs={},text){const n=document.createElement(tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;return n;}
const ns="http://www.w3.org/2000/svg";
function sv(tag,attrs,text){const n=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs||{}))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;return n;}
function chart(container,title,series,xmax,ymax,marks=[]){
 const box=$(container);box.replaceChildren();const svg=sv("svg",{viewBox:"0 0 720 300",role:"img","aria-label":title});
 svg.append(sv("title",{},title));
 const X=x=>55+610*x/(xmax||1),Y=y=>250-205*y/(ymax||1);
 svg.append(sv("line",{x1:55,y1:250,x2:675,y2:250,stroke:"#6c7b70"}),sv("line",{x1:55,y1:45,x2:55,y2:250,stroke:"#6c7b70"}));
 svg.append(sv("text",{x:55,y:280},"0"),sv("text",{x:640,y:280},fmt(xmax,2)),sv("text",{x:3,y:48},fmt(ymax,1)));
 for(let i=0;i<series.length;i++){
  const s=series[i],color=["#1b705c","#ad6a16","#565898"][i%3];
  svg.append(sv("polyline",{points:s.points.map(p=>X(p[0])+","+Y(p[1])).join(" "),fill:"none",stroke:color,"stroke-width":2.7,...(s.dash?{"stroke-dasharray":"6 4"}:{})}));
  svg.append(sv("text",{x:55+i*205,y:24,fill:color},s.label));
 }
 for(const m of marks){svg.append(sv("circle",{cx:X(m.x),cy:Y(m.y),r:4,fill:"#a54129"}),sv("text",{x:Math.min(X(m.x)+8,550),y:Math.max(Y(m.y)-10,65)},m.label));}
 box.append(svg);
}
function readInt(id){return Number($(id).value);}
function setVal(id,value){$(id).value=value;}
function outVal(id){$(id+"-value").textContent=$(id).value;}
function hot(){
 try{
 const o={c:readInt("h-c"),t:readInt("h-t"),p1:readInt("h-p1"),p2:readInt("h-p2"),mode:$("h-mode").value},r=E.hotelling(o);
 if(o.mode==="equilibrium"){setVal("h-p1",r.p1);setVal("h-p2",r.p2);}
 ["c","t","p1","p2"].forEach(k=>outVal("h-"+k));
 ["h-p1","h-p2"].forEach(k=>$(k).disabled=o.mode==="equilibrium");
 $("hot-result").textContent=(r.label==="model_equilibrium"?"模型均衡":"给定价格配置")+"：p1="+fmt(r.p1)+"，p2="+fmt(r.p2)+"；q1="+fmt(r.q1)+"，q2="+fmt(r.q2)+"；利润1="+fmt(r.profit1)+"，利润2="+fmt(r.profit2)+"."+(r.t===0?"同价均分、低价取得全市场.":r.kind==="boundary_allocation"?"客户选择位于角点.":"客户边界 θ*="+fmt(r.theta)+".");
 chart("hot-chart","两家产品的客户总负担随位置变化",[
 {label:"企业1：p1+tθ",points:[[0,r.p1],[1,r.p1+r.t]]},
 {label:"企业2：p2+t(1−θ)",points:[[0,r.p2+r.t],[1,r.p2]],dash:true}],1,Math.max(r.p1+r.t,r.p2+r.t,1),
 r.theta!==null&&r.theta>=0&&r.theta<=1?[{x:r.theta,y:r.p1+r.t*r.theta,label:"选择边界"}]:[]);
 }catch(e){$("hot-result").textContent="输入不合法："+e.message;}
}
function entry(){
 try{
 const o=Object.fromEntries(["a","c","K","cap"].map(k=>[k,readInt("e-"+k)])),r=E.entry(o);
 ["a","c","K","cap"].forEach(k=>outVal("e-"+k));
 $("entry-result").textContent="弱均衡企业数集合：{"+r.equilibrium_set.join(", ")+"}."+(r.equilibrium_set.length>1?"存在无差异多解；没有取最大N.":"")+(r.cap===0?"潜在企业上限为0.":r.nonpositive_margin_corner?"采用零产量续局，不展示实际成交价.":"");
 const wrap=$("entry-table");wrap.replaceChildren();const div=el("div",{class:"table-wrap"}),t=el("table"),head=el("thead"),tr=el("tr");
 ["N","每家产量","成交价","变动利润","扣K后净利润","检查下一家？","均衡"].forEach(h=>tr.append(el("th",{scope:"col"},h)));head.append(tr);t.append(head);
 const body=el("tbody");r.rows.forEach(row=>{const tr=el("tr",row.equilibrium?{class:"eq"}:{});
 [row.N,fmt(row.q_each),fmt(row.price),fmt(row.variable_profit),fmt(row.net_profit),row.next_exists?"有下一家":"达到上限，不检查",row.equilibrium?"是":"否"].forEach(x=>tr.append(el("td",{},String(x))));body.append(tr);});t.append(body);div.append(t);wrap.append(div);
 const pts=r.rows.filter(x=>x.N>0).map(x=>[x.N,x.variable_profit]);
 chart("entry-chart","进入企业数与每家变动利润、进入成本",[{label:"每家变动利润",points:pts},{label:"K：进入成本",points:[[0,o.K],[Math.max(1,o.cap),o.K]],dash:true}],Math.max(1,o.cap),Math.max(o.K,pts[0]?.[1]||0,1),
 r.rows.filter(x=>x.equilibrium&&x.N>0).map(x=>({x:x.N,y:x.variable_profit,label:"N="+x.N})));
 }catch(e){$("entry-result").textContent="输入不合法："+e.message;}
}
function inv(){
 try{
 const o={...D.models.inventory.defaults,lambda_steps:readInt("i-lambda_steps"),h:readInt("i-h")},r=E.inventory(o);
 $("i-lambda_steps-value").textContent=o.lambda_steps+"；λ="+fmt(r.lambda,3)+"（"+fmt(100*r.lambda,1)+"%）";outVal("i-h");
 $("inventory-result").textContent=r.status==="never"?"λ=0：E始终等于100，在此阈值下永不严格低于.":"首次严格低于 "+r.h+"：第 "+r.crossing+" 期. 前一期 "+fmt(r.previous)+"；本期 "+fmt(r.current)+"."+(r.equality_previous?"前一期恰好等于阈值，必须再等一期.":"")+"计算按原式作了精确整数比较.";
 const xmax=r.points[r.points.length-1].n;
 chart("inventory-chart","超额库存按固定比例消化的教学路径",[{label:"E_t（教学指数）",points:r.points.map(p=>[p.n,p.E])},{label:"严格阈值 h",points:[[0,r.h],[xmax,r.h]],dash:true}],xmax,100,r.crossing!==null?[{x:r.crossing,y:r.current,label:"首次低于：n="+r.crossing}]:[]);
 }catch(e){$("inventory-result").textContent="输入不合法："+e.message;}
}
document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",e=>e.preventDefault()));
$("hotelling-form").addEventListener("input",hot);$("hotelling-form").addEventListener("change",hot);
$("entry-form").addEventListener("input",entry);$("inventory-form").addEventListener("input",inv);
document.querySelectorAll("[data-hot-preset]").forEach(b=>b.addEventListener("click",()=>{
 const o={...D.models.hotelling.defaults};switch(b.dataset.hotPreset){case"manual18":o.mode="manual";o.p1=18;break;case"corner":o.mode="manual";o.p1=22;break;case"homogeneous":o.t=0;break;}
 for(const k of ["c","t","p1","p2"])setVal("h-"+k,o[k]);$("h-mode").value=o.mode;hot();
}));
document.querySelectorAll("[data-entry-k]").forEach(b=>b.addEventListener("click",()=>{
 for(const k of ["a","c","K","cap"])setVal("e-"+k,D.models.entry.defaults[k]);setVal("e-K",Number(b.dataset.entryK));entry();
}));
document.querySelectorAll("[data-entry-special]").forEach(b=>b.addEventListener("click",()=>{
 if(b.dataset.entrySpecial==="cap0")setVal("e-cap",0);
 else{setVal("e-a",20);setVal("e-c",30);setVal("e-K",0);setVal("e-cap",3);}entry();
}));
document.querySelectorAll("[data-inventory-preset]").forEach(b=>b.addEventListener("click",()=>{
 const mode=b.dataset.inventoryPreset;setVal("i-lambda_steps",mode==="equality"?100:mode==="never"?0:10);setVal("i-h",mode==="equality"?25:70);inv();
}));
hot();entry();inv();
function focusHash(){
 const params=new URLSearchParams(location.search),requested=params.get("experiment")||location.hash.slice(1),panels=[...document.querySelectorAll("section.lab")],id=panels.some(s=>s.id===requested)?requested:panels[0].id,isEmbed=parent!==window;
 if(isEmbed){document.querySelector("header").style.display="none";document.querySelector("footer").style.display="none";document.querySelectorAll("section.lab").forEach(s=>s.hidden=s.id!==id);document.querySelector("main").style.paddingTop="0";}
 else document.querySelectorAll("section.lab").forEach(s=>s.hidden=false);
}
focusHash();
if(parent!==window){
 const notify=()=>parent.postMessage({type:"eib-frame-height",height:document.body.scrollHeight},location.origin);
 if(typeof ResizeObserver!=="undefined")new ResizeObserver(notify).observe(document.body);
 setTimeout(notify,50);
}
addEventListener("hashchange",focusHash);

let parentBranch="common",printing=false;
addEventListener("message",event=>{
 if(event.source!==parent||event.origin!==location.origin||event.data?.type!=="notebook-reading-branch")return;
 const card=$("dealer-card"),key=event.data.branch;
 parentBranch=key;card.open=key==="dealer-channel"||key==="all";
});
$("dealer-card").addEventListener("toggle",()=>{
 if(!printing&&!['dealer-channel','all'].includes(parentBranch)&&$("dealer-card").open&&parent!==window)parent.postMessage({type:"eib-reading-branch",branch:"dealer-channel"},location.origin);
});
addEventListener("beforeprint",()=>{printing=true;});
addEventListener("afterprint",()=>{printing=false;});

window.addEventListener("beforeprint",()=>document.querySelectorAll("details").forEach(d=>d.open=true));
})();
