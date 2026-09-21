(function(){'use strict';
const E=window.MD_ENGINE,D=window.MD_DATA,$=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const f=(x,d=2)=>x===null||x===undefined?'未知':(Object.is(x,-0)?0:Number(x)).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
const num=id=>$(id).value.trim()===''?NaN:Number($(id).value),on=id=>$(id).checked;
const status=(text,blocked=false)=>'<p class="status '+(blocked?'blocked':'')+'">'+esc(text)+'</p>';
const metrics=rows=>'<div class="metrics">'+rows.map(([k,v])=>'<div class="metric"><span>'+esc(k)+'</span><strong>'+esc(v)+'</strong></div>').join('')+'</div>';
const tab=(heads,rows,cap)=>'<div class="table-scroll" tabindex="0"><table><caption>'+esc(cap)+'</caption><thead><tr>'+heads.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+esc(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
function chart(xs,series,title){
 const w=760,h=260,padL=75,padR=22,padT=43,padB=42,values=series.flatMap(s=>s.vals),xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(0,...values),ymax=Math.max(0,...values),dx=xmax-xmin||1,dy=ymax-ymin||1;
 const X=v=>padL+(v-xmin)/dx*(w-padL-padR),Y=v=>h-padB-(v-ymin)/dy*(h-padT-padB);
 let s='<svg class="plot" role="img" aria-label="'+esc(title)+'；精确数据见同页表格" viewBox="0 0 '+w+' '+h+'"><title>'+esc(title)+'</title>';
 s+='<text x="'+padL+'" y="19">'+esc(title)+'</text><line class="axis" x1="'+padL+'" x2="'+(w-padR)+'" y1="'+Y(0)+'" y2="'+Y(0)+'"/>';
 [ymin,ymax].forEach(y=>{s+='<text text-anchor="end" x="'+(padL-7)+'" y="'+(Y(y)+5)+'">'+esc(f(y,0))+'</text>';});
 xs.forEach(x=>{s+='<text x="'+X(x)+'" y="'+(h-21)+'" text-anchor="middle">'+esc(x)+'</text>';});
 series.forEach((r,i)=>{s+='<polyline class="series'+i+'" points="'+xs.map((x,j)=>X(x)+','+Y(r.vals[j])).join(' ')+'"/>';s+='<text x="'+(padL+180*i)+'" y="'+(h-3)+'">'+esc((i===0?'实线 ':i===1?'虚线 ':'点线 ')+r.title)+'</text>';});return s+'</svg>';
}
function put(id,fn){try{$('out-'+id).innerHTML=fn();}catch(e){$('out-'+id).innerHTML='<p class="status error" role="alert">输入未通过：'+esc(e.message)+'。未据此生成交易结果。</p>';}}
function render10(){put('m10',()=>{const r=E.contract(D,{side:$('c-side').value,contracts:num('c-n'),entry:num('c-entry'),next:num('c-next')});
return status('条件价格损益；不是现货购买现金，也不是实际成交记录。')+metrics([['数量尺度（桶）',f(r.quantity,0)],['每跳（美元）',f(r.tick_value)],['本段价格损益（美元）',f(r.pnl)]])+tab(['项目','数值/身份'],[['起点报价×数量（有符号）',f(r.quote_times_quantity)+' 美元'],['每+1美元/桶的方向敏感度',f(r.signed_sensitivity)+' 美元'],['建仓商品购买本金','0；本设定并未买入原油'],['保证金/费用','此面板未给具体规则金额']], '数量、报价尺度与现金不可互换')+chart([-2,-1,0,1,2],[{title:'价格变化→持仓损益',vals:[-2,-1,0,1,2].map(x=>x*r.signed_sensitivity)}],'横轴Δ价格（美元/桶）；纵轴条件损益（美元）');});}
function render11(){put('m11',()=>{const r=E.margin(D,{path:$('m-path').value,contracts:num('m-n'),starting_cash:num('m-cash'),initial_per_contract:num('m-im'),maintenance_per_contract:num('m-mm'),raised:on('m-raised'),transfer_on_time:on('m-time')});
if(r.status==='blocked_initial')return status('起点资金不足，尚未建立教学头寸；缺 '+f(r.initial_shortfall)+' 美元。',true);
const last=r.rows.at(-1),stopped=r.status!=='completed';
return status(stopped?'在D_'+last.stage+'尚未满足 '+f(last.shortfall)+' 美元。此处停止，未计算后续反弹。':'按教学要求完成全部结算阶段；转入保证金不另记一次费用。',stopped)+metrics([['最后已建模总余额',f(r.equity_at_stop)],['累计已建模VM',f(r.cumulative_vm)],['全路径终点总额',r.completed_equity===null?'未完成，不输出':f(r.completed_equity)]])+tab(['阶段','价格','VM','IM / MM','转入前','要求','实转','尚欠','余额','外部'],r.rows.map(x=>[x.stage,f(x.price),f(x.vm),f(x.initial,0)+' / '+f(x.maintenance,0),f(x.before),f(x.required),f(x.paid),f(x.shortfall),f(x.balance),f(x.free)]),'客户教学资金账；金额美元；仅列已处理阶段')+chart([0,...r.rows.map(x=>x.stage)],[{title:'担保余额',vals:[r.initial_state.balance,...r.rows.map(x=>x.balance)]},{title:'外部可用现金',vals:[r.initial_state.free,...r.rows.map(x=>x.free)]}],'阶段与资金；停止点后不画价格反弹收益')+'<p class="small">两栏合计=初始总现金+已建模累计VM。'+(stopped?'未满足的追缴不会因为部分付款后余额超过MM而自行消失。':'相等MM不触发；一旦触发须补到IM。')+'</p>';});}
function render12(){put('m12',()=>{const a={spot:num('k-spot'),storage:num('k-storage'),storage_timing:$('k-timing').value,handling:num('k-handling'),rate:num('k-rate')/100,days:num('k-days'),forward:num('k-forward'),mid:num('k-mid'),end:num('k-end'),initial_margin:num('k-im'),storage_available:on('k-store'),funding_available:on('k-fund'),deliverable:on('k-deliver')},r=E.carry(D,a);
if(r.status==='blocked_replication')return status('复制条件未满足：'+r.missing.join('；')+'。撤下可取得净额；给定价格不能补齐缺少的交易腿。',true);
const other=E.carry(D,{...a,storage_timing:a.storage_timing==='upfront'?'end':'upfront'});
return status('各腿在教学条件下可融资并履约。中间正现金不计利息；未覆盖的融资成本只扣一次。')+metrics([['终值持有成本',f(r.all_in)],['远期条件净额',f(r.forward_net)],['期货现金时点变式净额',f(r.futures_net)]])+tab(['项目','美元'],[['起点融资',f(r.upfront)],['购货/前付仓储本息',f(r.repayment)],['后付仓储',f(r.late_storage)],['交付费用',f(r.handling)],['每桶终值成本',f(r.per_unit,5)],['切换另一仓储付款时点：总成本',f(other.all_in)],['两段VM',r.vm.map(x=>f(x)).join(' / ')],['中段VM借款利息',f(r.vm_funding,4)],['保证金融资利息',f(r.im_funding,4)]],'逐笔成本与资金时点')+tab(['末期资金事件','收到为正 / 支付为负'],r.final_rows.map(([k,v])=>[k,f(v,4)]).concat([['合计',f(r.final_cash_sum,4)]]),'完整末期账；与累计VM简写必须相等')+'<p class="small">时间线：第0天购油/仓储/保证金 → 第30天VM及所需借款 → 第'+f(a.days,0)+'天实物收入、VM、保证金退回、所有本息与费用。不是CL实际付款日历。</p>';});}
function render13(){put('m13',()=>{const known=$('r-prev-mode').value==='known';$('r-prev').disabled=!known;
const r=E.roll(D,{contracts:num('r-n'),old_entry:num('r-entry'),previous_settlement:known?num('r-prev'):null,old_sell_slippage:num('r-old-slip'),new_buy_slippage:num('r-new-slip'),fee_per_leg_per_contract:num('r-fee')});
const event=D.delivery_events.find(x=>x.id===$('r-event').value);
return '<div class="event"><h3>'+esc(event.title)+'</h3><p>'+esc(event.text)+'</p><p class="small">Chapter200 §'+esc(event.locator)+' · 当前规则读取日2026-09-21；未套用2020历史日期。</p></div>'+status(known?'以明确教学前结算价重建旧仓当日VM；金额不含未知保证金变动。':'未给旧仓前一结算价：累计损益可算，旧仓/合计当日现金不能用累计值代替。',!known)+metrics([['两段净损益（含两腿费用）',f(r.net_pnl)],['报价月差×数量（不是损失）',f(r.quoted_month_gap)],['换月日VM及费用现金',r.roll_day_cash===null?'未知；缺前一结算价':f(r.roll_day_cash)]])+tab(['项目','金额（美元）'],[['旧May累计损益',f(r.old_total)],['换月以前旧仓VM',f(r.old_vm_before)],['换月日旧仓VM',f(r.old_close_day_vm)],['新June建仓商品本金','0（保证金未纳入）'],['新June建仓日VM',f(r.new_entry_day_vm)],['下一June结算VM',f(r.new_next_vm)],['新June累计损益',f(r.new_total)],['两腿手续费',f(r.fees)],['全期价格损益',f(r.total_price_pnl)]],'旧/新合约和每个时期独立记录')+'<p class="small">旧实际卖价 '+f(r.old_exit)+'；新实际买价 '+f(r.new_entry)+'，均为指定滑点下的教学执行。参考结算价未因滑点改变。</p>';});}
function render14(){put('m14',()=>{const r=E.swap(D,{loan_notional:num('s-loan')*1e6,swap_notional:num('s-notional')*1e6,rate:num('s-rate')/100,accrual_numerator:num('s-days'),same_index:on('s-index'),same_fixing:on('s-fixing'),same_payment:on('s-payment'),same_accrual:on('s-accrual')});
if(r.status==='needs_distinct_inputs'||r.status==='needs_swap_floor')return status('不能继续用同一默认L计算：'+r.missing.join('；')+'。本面板撤下两条浮息与合并金额、固定综合率；不补造第二组输入。',true);
const fixed=r.fixed_combined_rate===null?'不固定，存在浮动残余':(100*r.fixed_combined_rate).toFixed(3)+'%';
return status(r.status==='matched_teaching'?'同本金、同指数/重置/期间/付款的教学匹配，不是AECOM真实综合融资报价。':'本金不匹配，现金仍可按共同L计算，但合并率不再固定。',r.status!=='matched_teaching')+metrics([['一期合并净支付（美元）',f(r.combined_payment)],['匹配条件下的固定综合率',fixed],['剩余浮动本金（美元）',f(r.residual_notional,0)]])+tab(['公司视角','一期金额（美元）'],[['互换固定腿付出',f(r.fixed_cash)],['互换浮动腿收到',f(r.floating_cash)],['互换净收到（负=净付）',f(r.swap_net_receipt)],['贷款利息付出',f(r.loan_interest)],['利率上升100bp的本期残余增支',f(r.increment_for_100bp)],['整份互换市值/CSA追缴','未建模，无相应实际输入']],'计息分数 '+f(r.alpha,6)+'；不是本金交换表')+'<p class="small">若观察、期间或日期不匹配，必须提供独立浮息和日程，不把这里共同L的数值继续保留成精确结果。贷款0%floor不代表互换也有同样floor。</p>';});}
const renders={m10:render10,m11:render11,m12:render12,m13:render13,m14:render14};
function set(id,v){if(typeof v==='boolean')$(id).checked=v;else $(id).value=v;}
function reset(key){$('form-'+key).reset();}
const actions={
 'contract-default':()=>{reset('m10');render10();},'contract-history':()=>{reset('m10');set('c-entry',D.history[0].may);set('c-next',D.history[1].may);render10();},'contract-short':()=>{reset('m10');set('c-side','short');set('c-n',3);render10();},
 'margin-default':()=>{reset('m11');render11();},'margin-raised':()=>{reset('m11');set('m-raised',true);render11();},'margin-lowcash':()=>{reset('m11');set('m-cash',D.additional_teaching_examples.margin_less_cash);render11();},
 'carry-default':()=>{reset('m12');render12();},'carry-late':()=>{reset('m12');set('k-timing','end');render12();},'carry-stress':()=>{reset('m12');set('k-mid',D.additional_teaching_examples.carry_mid_variant);render12();},
 'roll-default':()=>{reset('m13');render13();},'roll-known':()=>{reset('m13');set('r-prev-mode','known');render13();},'roll-cost':()=>{reset('m13');set('r-prev-mode','known');set('r-old-slip',D.additional_teaching_examples.roll_execution_variant.old_sell_slippage);set('r-new-slip',D.additional_teaching_examples.roll_execution_variant.new_buy_slippage);set('r-fee',D.additional_teaching_examples.roll_execution_variant.fee_per_leg_per_contract);render13();},
 'swap-default':()=>{reset('m14');render14();},'swap-small':()=>{reset('m14');set('s-notional',D.additional_teaching_examples.swap_notional_variant/1e6);render14();},'swap-missing':()=>{reset('m14');set('s-index',false);render14();}
};
Object.keys(renders).forEach(k=>{$('form-'+k).addEventListener('submit',e=>{e.preventDefault();renders[k]();});$('form-'+k).addEventListener('input',renders[k]);$('form-'+k).addEventListener('change',renders[k]);renders[k]();});
document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>actions[b.dataset.action]()));
document.querySelectorAll('details.static').forEach(d=>d.open=false);
function requestedExperiment(search,hash){try{const q=new URLSearchParams(search||'').get('experiment');if(q)return decodeURIComponent(q).toLowerCase();return decodeURIComponent((hash||'').replace(/^#/,'')).toLowerCase();}catch(_){return '';}}
function route(){
 const id=requestedExperiment(location.search,location.hash),panels=[...document.querySelectorAll('.lab')],match=panels.find(p=>p.id===id);
 const embedded=window.self!==window.top;
 document.documentElement.classList.toggle('embedded',embedded);
 document.body.classList.toggle('focused',!!match);
 panels.forEach(p=>p.hidden=!!match&&p!==match);
}
window.addEventListener('hashchange',route);route();
let detailStates=[];window.addEventListener('beforeprint',()=>{detailStates=[...document.querySelectorAll('details.static')].map(d=>[d,d.open]);detailStates.forEach(([d])=>d.open=true);});window.addEventListener('afterprint',()=>detailStates.forEach(([d,v])=>d.open=v));
window.MD_APP={renderAll:()=>Object.values(renders).forEach(f=>f()),route,requestedExperiment};
})();
