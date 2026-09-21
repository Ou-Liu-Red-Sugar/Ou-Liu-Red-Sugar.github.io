(function(){
'use strict';
const E=window.BFBC,D=window.BFBC_INPUTS;
const $=s=>document.querySelector(s), esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function n(x,dec=2){if(typeof x!=='number')return esc(x);return x.toLocaleString('zh-CN',{maximumFractionDigits:dec});}
function table(head,rows){return '<div class="table-scroll"><table><thead><tr>'+head.map(x=>'<th scope="col">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((v,i)=>'<'+(i===0?'th scope="row"':'td')+'>'+n(v)+'</'+(i===0?'th':'td')+'>').join('')+'</tr>').join('')+'</tbody></table></div>';}
function bridgeSVG(id,title,opening,steps,closingLabel){
 const a=[{label:opening[0],value:opening[1],start:0,end:opening[1],total:true}];let current=opening[1];
 for(const [label,value] of steps){a.push({label,value,start:current,end:current+value,total:false});current+=value;}
 a.push({label:closingLabel,value:current,start:0,end:current,total:true});
 const lo=Math.min(0,...a.flatMap(x=>[x.start,x.end])),hi=Math.max(0,...a.flatMap(x=>[x.start,x.end])),span=hi-lo||1,Y=v=>210-(v-lo)*155/span,col=820/a.length,bw=Math.min(80,col*.64),X=i=>40+col*i+(col-bw)/2;
 let g='<svg class="bridge-svg" viewBox="0 0 900 292" role="img" aria-labelledby="'+id+'-title"><title id="'+id+'-title">'+esc(title)+'。首尾柱是总额，中间柱显示有符号变化。精确数字见下面同源表。</title><line x1="30" y1="'+Y(0)+'" x2="875" y2="'+Y(0)+'" stroke="#657681"/><text x="30" y="22" font-size="13">百万美元；中间柱为变化，首尾柱为总额</text>';
 a.forEach((v,i)=>{const y=Math.min(Y(v.start),Y(v.end)),h=Math.max(1,Math.abs(Y(v.start)-Y(v.end))),fill=v.total?'#223f52':v.value<0?'#b36f3c':'#336d83';if(i){const prev=a[i-1];g+='<line x1="'+(X(i-1)+bw)+'" y1="'+Y(prev.end)+'" x2="'+X(i)+'" y2="'+Y(prev.end)+'" stroke="#657681" stroke-dasharray="3 3"/>';}g+='<rect x="'+X(i)+'" y="'+y+'" width="'+bw+'" height="'+h+'" fill="'+fill+'"/><text x="'+(X(i)+bw/2)+'" y="'+(y-8)+'" text-anchor="middle" font-size="13">'+(v.total?'':v.value>=0?'+':'')+n(v.value)+'</text><text x="'+(X(i)+bw/2)+'" y="245" text-anchor="middle" font-size="12">'+esc(v.label)+'</text>';});
 return '<div class="table-scroll">'+g+'</svg></div>';
}
function status(target,fn){try{fn();target.querySelector('.error').textContent='';}catch(e){target.querySelector('.error').textContent=e.message;target.querySelector('.output').innerHTML='<p>输入无效，未生成新结果。请修正条件。</p>';}}
function number(el){const s=el.value.trim();if(s==='')throw new TypeError('数值不能为空');const x=Number(s);return E.finite(x,'输入');}
function src(id){return ({'BBC-C01':'Salesforce FY2026 10-K：现金流pp.61–62、权益p.60、附注2/11/12/13','BF-S-COST-FY2025-SEC':'Costco FY2025 10-K：利润p.37、现金流p.41、附注1','BF-S-JPM-FY2025':'JPM 2025年报：利润p.165、现金流p.169','BBC-C04':'Caterpillar FY2025 10-K：Note 8 Inventories'})[id]||id;}
function cards(items){return '<div class="cards">'+items.map(([h,v])=>'<div><h4>'+esc(h)+'</h4><p>'+n(v)+'</p></div>').join('')+'</div>';}
function contractWidget(id,initial){const el=document.getElementById(id),mode=el.querySelector('[name=mode]'),performance=el.querySelector('[name=performance]'),right=el.querySelector('[name=right]'),invoice=el.querySelector('[name=invoice]'),collection=el.querySelector('[name=collection]'),cutoff=el.querySelector('[name=cutoff]');
  function defaults(){const p=E.preset(mode.value,{},D.synthetic.contract);performance.value=p.events.find(e=>e.type==='performance').date;right.value=p.events.find(e=>e.type==='right').date;invoice.value=p.events.find(e=>e.type==='invoice').date;collection.value=p.events.find(e=>e.type==='cash').date;cutoff.value=mode.value==='prepaid'?'2026-03-31':'2026-01-31';}
  function draw(){status(el,()=>{const p=E.preset(mode.value,{performanceDate:performance.value,rightDate:right.value,invoiceDate:invoice.value,collectionDate:collection.value},D.synthetic.contract),s=E.at(p.timeline,cutoff.value);el.querySelector('.terms').textContent=p.terms;el.querySelector('.output').innerHTML=cards([['累计收入',s.revenue],['现金',s.cash],['应收',s.receivable],['合同资产',s.contract_asset],['合同负债',s.contract_liability],['资产−负债−权益',s.residual]])+'<p>选定观察日：'+esc(cutoff.value)+'。以下为全部实际日期顺序；单位为教学货币单位，非公司数据。相同日期按履约→权利→开票→收款显示中间状态。修改无条件权利日表示改变教学合同的权利事实。</p>'+table(['日期','事件','收入累计','现金','应收','合同资产','合同负债','平衡差'],p.timeline.map(r=>[r.date,r.event,r.revenue,r.cash,r.receivable,r.contract_asset,r.contract_liability,r.residual]));});}
  mode.value=initial;defaults();mode.addEventListener('change',()=>{defaults();draw();});[performance,right,invoice,collection,cutoff].forEach(i=>i.addEventListener('input',draw));el.querySelector('button.reset').addEventListener('click',()=>{mode.value=initial;defaults();draw();});draw();
}
contractWidget('EXP-BF04-ACCRUAL-TIMELINE','prepaid');contractWidget('EXP-BF10-CONTRACT-TIMING','conditional');
function profitWidget(){const el=$('#EXP-BF06-PROFIT-LAYERS');const draw=()=>status(el,()=>{const bank=el.querySelector('[name=industry]').value==='bank',y=number(el.querySelector('[name=year]')),t=D.tables[bank?'jpm_income':'cost_income'],p=E.profit(t,y);let rows=bank?[
['利息收入',E.byid(t,'interestincome',y)],['减：利息支出',-E.byid(t,'interestexpense',y)],['净利息收入',p.nii],['加：非利息收入',p.noninterest],['净收入',p.revenue],['减：信用计提',-E.byid(t,'provision',y)],['减：非利息费用',-p.expenses],['税前利润',p.pretax],['减：所得税',-E.byid(t,'tax',y)],['净利润',p.net],['普通股可归属净利润（原表）',p.common]]:[
['净销售',E.byid(t,'sales',y)],['减：商品成本',-E.byid(t,'merchandise',y)],['Gross Margin（公司MD&A定义）',p.gross],['加：会员费',E.byid(t,'membership',y)],['减：SG&A',-E.byid(t,'sga',y)],['经营利润',p.operating],['利息费用',E.byid(t,'interest_expense',y)],['利息及其他净收益',E.byid(t,'interest_other',y)],['税前利润',p.pretax],['减：所得税',-E.byid(t,'tax',y)],['净利润',p.net]];
 el.querySelector('.output').innerHTML='<p>'+esc(t.title+' · '+t.periods[y])+' · 百万美元。小计说明包含关系，不再把小计与明细一起加总。</p>'+bridgeSVG('profit-bridge','利润层次桥',bank?['净利息收入',p.nii]:['商品毛利',p.gross],bank?[['非利息收入',p.noninterest],['信用计提',-E.byid(t,'provision',y)],['非利息费用',-p.expenses]]:[['会员费',E.byid(t,'membership',y)],['SG&A',-E.byid(t,'sga',y)]],bank?'税前利润':'经营利润')+table(['层次','金额'],rows)+'<p>'+esc(src(t.source_id))+'</p>';});el.querySelectorAll('select').forEach(x=>x.addEventListener('change',draw));draw();}
profitWidget();
function cashWidget(){const el=$('#EXP-BF07-CASH-BRIDGE');const draw=()=>status(el,()=>{const mode=el.querySelector('[name=industry]').value,y=number(el.querySelector('[name=year]')),t=D.tables[{software:'sf_cash',retail:'cost_cash',bank:'jpm_cash'}[mode]],p=E.cashBridge(t,y);let msg=mode==='bank'?'现金集合：cash and due from banks and deposits with banks。交易资产与待售贷款是经营对象，客户存款变动在筹资。':'现金集合：cash and cash equivalents。';if(mode==='software')msg+=' 资产负债变化扣除企业合并；D&A包括取得无形资产、固定资产及使用权资产相关项目。';
 let html='<p>'+esc(t.title+' · '+t.periods[y])+' · 百万美元</p><p>'+esc(msg)+'</p>'+bridgeSVG('cash-bridge','期初至期末现金桥',['期初',p.begin],[['经营',p.cfo],['投资',p.cfi],['筹资',p.cff],['汇兑',p.fx]],'期末')+table(['现金桥','金额'],[['期初',p.begin],['经营净现金',p.cfo],['投资净现金',p.cfi],['筹资净现金',p.cff],['汇率影响',p.fx],['计算期末',p.end],['原表期末',p.reported_end]]);
 for(const g of ['cfo','cfi','cff']){const rs=t.rows.filter(r=>r.kind==='detail'&&r.section===g);const content=table(['原行','含义','有符号金额'],rs.map(r=>[r.label_original,r.label_zh,r.values[y]]));html+=(g==='cfo'?'<h4>完整经营现金桥</h4>'+content:'<details><summary>展开'+(g==='cfi'?'投资':'筹资')+'全部明细</summary>'+content+'</details>');}
 el.querySelector('.output').innerHTML=html+'<p>'+esc(src(t.source_id))+'</p>';});el.querySelectorAll('select').forEach(x=>x.addEventListener('change',draw));draw();}
cashWidget();
function equityWidget(){const el=$('#EXP-BF08-EQUITY-SHARES');const draw=()=>status(el,()=>{const p=E.equity(D),mode=el.querySelector('[name=view]').value;let h;
 if(mode==='equity'){h=table(['FY2026权益桥：百万美元','有符号金额'],[['期初',p.opening],...D.sf_equity.rows.slice(8,15).map(r=>[r[1],r[9]]),['期末',p.closing]]);}
 else if(mode==='shares'){h=table(['FY2026数量桥：百万股','金额'],[['期初发行',p.issued_begin_m],['期初库存股（减）',-p.treasury_begin_m],['期初流通',p.outstanding_begin_m],['当期发行（不能全称SBC）',p.issued_end_m-p.issued_begin_m],['当期回购',p.treasury_begin_m-p.treasury_end_m],['期末流通',p.outstanding_end_m]])+'<p>原表百万取整的0不是无任何交易。回购股数不是现金金额。</p>';}
 else {const den=el.querySelector('[name=denominator]').value;h=table(['分母用途','百万股','7457／分母'],[['报告基本EPS',p.basic_shares_m,p.basic_eps],['报告稀释EPS',p.diluted_shares_m,p.diluted_eps],['错误口径对照：期末股数，不是报告EPS',p.outstanding_end_m,D.sf_eps.net_income[0]/p.outstanding_end_m]])+'<p class="result">当前选择：'+esc(den==='wrong'?'期末股数：不能当作报告EPS':den==='basic'?'基本EPS，期间加权平均':'稀释EPS，按Note 13工具规则')+'</p><p>另有反稀释奖励9百万股，被排除于本期稀释分母；不得再加。</p>';}
 el.querySelector('.output').innerHTML=h+'<p>少数权益例：Caterpillar 8882−(−2)=8884；期末NCI=0不等于当年没有NCI损益。</p>';});el.querySelectorAll('select').forEach(x=>x.addEventListener('change',draw));draw();}
equityWidget();
function evidenceWidget(){const el=$('#EXP-BF09-EVIDENCE');const texts={statement:'主表：Salesforce FY2026收入41525百万美元。主表给合并数和期间，不能识别每份合同的履约义务或独立售价。',policy:'Note 1：控制权、可区分履约义务和相对单独售价。政策告诉我们判断框架，实际合同证据仍需取得。',audit:'Revenue Recognition CAM：尤其困难、主观或复杂的审计判断与应对程序。不是单独负面审计意见，不给公司打分。'};
 const draw=()=>status(el,()=>{const selected=el.querySelector('[name=layer]').value,ss=D.synthetic.ssp,split=el.querySelector('[name=allocation]').value==='equal'?[ss.alternative_license_ssp,ss.alternative_support_ssp]:[ss.license_ssp,ss.support_ssp],p=E.ssp(ss.total,...split);el.querySelector('.output').innerHTML='<p>'+esc(texts[selected])+'</p>'+table(['纯教学合同120；许可已交付、支持一年','金额'],[['许可分配',p.a],['支持分配',p.b],['第一个月累计收入',p.a+p.b/ss.support_months],['履约最终收入',p.a+p.b]])+'<p>改变单独售价只演示确认节奏的敏感性。没有证据表明哪组代表真实公司，也未计算利润。</p>';});
 el.querySelectorAll('select').forEach(x=>x.addEventListener('change',draw));el.querySelector('[name=answer]').addEventListener('change',e=>{el.querySelector('.feedback').textContent=e.target.value==='B'?'正确：B仅描述CAM条件及审计应对。A误作错报结论，C把披露变成公司排名。':'尚未通过。请区分事项沟通、总体审计意见和跨公司评价，再读AS3101 .11–.17。';});draw();}
evidenceWidget();
function inventoryWidget(){const el=$('#EXP-BF11-INVENTORY-VIEW');const draw=()=>status(el,()=>{const hist=E.inventoryHistorical(D),o={...D.synthetic.inventory,sold:number(el.querySelector('[name=sold]')),nrv_per_unit:number(el.querySelector('[name=nrv]'))},p=E.inventoryFlow(o),fifo=el.querySelector('[name=basis]').value==='fifo';el.querySelector('.output').innerHTML='<h4>历史Caterpillar：百万美元</h4>'+table(['期间','所选余额','实际LIFO占比（%）'],[['2025',fifo?hist.fifo[0]:hist.reported[0],hist.lifo_share[0]],['2024',fifo?hist.fifo[1]:hist.reported[1],hist.lifo_share[1]]])+'<p>'+esc(fifo?'FIFO可比总额=报告总额+披露调整；不是新的实物产量。':'报告总额为混合方法、主要LIFO；不是纯LIFO库存。')+'</p><h4>独立教学商品：10件×成本10，售价15</h4>'+table(['成本流去向／结果','教学货币单位'],[['取得成本',p.available],['销售成本',p.cogs],['减记',p.write_down],['期末库存',p.ending],['销售收入',p.revenue],['利润',p.profit],['成本去向差额',p.residual]])+'<p>成本／NRV、无税及其他费用；只对仍在手商品计算减记。不将此设定视为Caterpillar或Costco实际批次。</p>';});el.querySelectorAll('input,select').forEach(x=>x.addEventListener('input',draw));draw();}
inventoryWidget();
function taxWidget(){const el=$('#EXP-BF15-TAX-LAYERS');const draw=()=>status(el,()=>{const p=E.taxGroups(D),r=E.roundingInterval(p.expense,p.pretax,D.sf_tax.amount_rounding_halfwidth_m,D.sf_tax.displayed_etr_percent),o={...D.synthetic.tax,base_profit_each_year:number(el.querySelector('[name=base]')),expense:number(el.querySelector('[name=cost]')),rate:number(el.querySelector('[name=rate]'))/100},tw=E.temporaryTax(o);el.querySelector('.output').innerHTML='<h4>三个独立口径：Salesforce FY2026，百万美元</h4>'+cards([['期间税费：1104+959',p.expense],['期间已付税款净额',p.cash_paid],['期末递延净资产：6171−967−3144',p.net_deferred_asset]])+'<p>这是并列口径，不是三段连续现金瀑布。当前应交税余额未在本实验补造。</p>'+table(['税率检验','百分比'],[['金额相除',r.center],['原表列示',r.shown],['百万位取整下界',r.lower],['百万位取整上界',r.upper]])+'<p class="result">21.5%'+(r.inside?'位于':'不在')+'这两个金额的取整区间；差异尚未解释。</p><h4>两期教学设定</h4><p>每年特殊成本前利润为输入值；成本第一年账面确认、第二年支付及税前扣除。当前税当年付清；无其他差异、期初余额或估值备抵，有充分适当未来应税利润。</p>'+table(['年度','账面税前','应税','当期税','递延税','总税费','现金税','期末DTA','期末应交'],tw.map(v=>[v.year,v.book_profit,v.taxable,v.current,v.deferred,v.total,v.cash_tax,v.dta,v.tax_payable_end]));});el.querySelectorAll('input').forEach(x=>x.addEventListener('input',draw));draw();}
taxWidget();
// Scope the iframe to its owned experiment. Standalone keeps every lab.
function selectEmbeddedExperiment(){
 const embedded=window.self!==window.top;
 document.documentElement.classList.toggle('embedded',embedded);
 let key='';try{key=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));}catch(_){}
 const labs=[...document.querySelectorAll('section.lab')];
 const recognized=labs.some(lab=>lab.id===key);
 for(const lab of labs)lab.hidden=embedded&&recognized&&lab.id!==key;
}
selectEmbeddedExperiment();window.addEventListener('hashchange',selectEmbeddedExperiment);
// The reading branch selects the matching industry in its embedded chart.
window.addEventListener('message',event=>{
 if(event.source!==window.parent||event.origin!==location.origin||event.data?.type!=='notebook-reading-branch')return;
 const key=event.data.branch;if(key==='all')return;
 const lab=document.getElementById((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));
 const industry=lab?.querySelector('select[name=industry]');
 if(industry&&Array.from(industry.options).some(option=>option.value===key)){
  industry.value=key;industry.dispatchEvent(new Event('change',{bubbles:true}));
 }
});
// All calculations remain viewable without relying on graph colour or tooltips.
document.documentElement.classList.add('js-ready');
})();
