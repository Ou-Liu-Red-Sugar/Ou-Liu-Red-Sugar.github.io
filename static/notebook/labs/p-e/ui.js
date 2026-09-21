/* DOM layer for four teaching labs. Pure results come only from engine.js + shared inputs. */
(function(){'use strict';
 const E=createPEEngine(PE_INPUTS),D=PE_INPUTS.frozen;window.PE_ENGINE=E;window.PE_RESULT={};
 const $=id=>document.getElementById(id),fmt=(x,n=2)=>x===null||x===undefined?'不适用':Number(x).toLocaleString('en-US',{minimumFractionDigits:n,maximumFractionDigits:n});
 const pc=x=>fmt(x*100,3)+'%', yn=x=>x?'通过':'未通过';
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function value(id){let el=$(id);if(el.value.trim()==='')throw new Error(`${el.labels?.[0]?.textContent.split('\n')[0]||id}不能为空.`);return Number(el.value);}
 const yes=id=>$(id).value==='yes';
 function tbl(headers,rows,label){return `<div class="table-wrap" role="region" aria-label="${esc(label)}" tabindex="0"><table><thead><tr>${headers.map(h=>'<th scope="col">'+h+'</th>').join('')}</tr></thead><tbody>${rows.map(r=>'<tr>'+r.map((c,i)=>i?'<td>'+c+'</td>':'<td>'+c+'</td>').join('')+'</tr>').join('')}</tbody></table></div>`;}
 function metric(label,x,unit='美元',n=2){return `<div class="metric"><div class="label">${label}</div><div class="value">${fmt(x,n)}</div><div class="unit">${unit}</div></div>`;}
 function notice(s,warn=false){return `<p class="notice ${warn?'warn':''}">${s}</p>`;}
 function bars(rows,label){let neg=Math.min(0,...rows.map(r=>r[1])),pos=Math.max(0,...rows.map(r=>r[1])),range=pos-neg||1;const x=v=>600*(v-neg)/range;return `<div class="chart-frame" aria-label="${esc(label)}">`+rows.map(([name,v])=>`<div class="bar-row"><div class="bar-label"><span>${name}</span><span class="bar-value">${fmt(v)} 美元</span></div><svg viewBox="0 0 600 18" role="img" aria-label="${esc(name+' '+fmt(v)+'美元')}"><rect x="0" y="0" width="600" height="18" fill="#eef2f4"/><line x1="${x(0)}" y1="0" x2="${x(0)}" y2="18" stroke="#667b89"/><rect x="${Math.min(x(v),x(0))}" y="2" width="${Math.max(0,Math.abs(x(v)-x(0)))}" height="14" fill="${v<0?'#a75a3b':'#2a817b'}"/></svg></div>`).join('')+'</div>';}
 function render08(){const o=$('p08-out');try{
  let r=E.margin({assets:value('p08-assets'),debt:value('p08-debt'),maintenance:value('p08-maintenance')/100,sale_fee:value('p08-fee'),interest_on:yes('p08-interest'),action:$('p08-action').value});window.PE_RESULT.P08=r;
  let s=r.selected,rows=r.actions.map(a=>a.feasible?[{cash:'最少现金还债',sale:'最少出售还债',sale800:'尝试出售800'}[a.action],fmt(a.amount),fmt(a.fee),fmt(a.post.assets),fmt(a.post.debt),fmt(a.post.equity),fmt(a.post.required_equity),fmt(a.post.shortfall)]:[{cash:'现金',sale:'最少出售还债',sale800:'尝试出售800'}[a.action],'无可行交易','—','—','—','—','—','—']);
  o.innerHTML=`<div class="metrics">${metric('补救前权益',r.initial.equity)}${metric('当前维持要求',r.initial.required_equity)}${metric('当前权益缺口',r.initial.shortfall)}</div>`+notice(s.feasible?(s.closed?'所选动作清空证券及借款，账户关闭.':s.satisfied?'所选动作满足本例维持条件；现金转移不是收益.':'所选动作仍有缺口：'+fmt(s.post.shortfall)+'美元.'):s.reason,!s.feasible||(s.feasible&&!s.satisfied))+`<p class="small">未付利息：${fmt(r.interest,6)} 美元；借款已包含该利息，只计一次.</p>`+tbl(['补救','金额','费用','证券A′','借款D′','权益E′','要求mA′','仍缺'],rows,'补救后的账户')+(s.feasible?bars([['补救前权益',r.initial.equity],['所选补救后权益',s.post.equity],['所选补救后要求',s.post.required_equity]],'权益与维持要求'):notice('不显示超出持仓或债务的机械卖出量.',true));
 }catch(e){window.PE_RESULT.P08={error:e.message};o.innerHTML='<p class="error">'+esc(e.message)+'</p>';}}
 function renderCollateral(){let o=$('p08-resources-out');try{let r=E.collateral({cash_only:yes('p08-cashonly'),unencumbered:yes('p08-unencumbered'),eligible:yes('p08-eligible'),currency_ok:yes('p08-currency'),location_ok:yes('p08-location'),haircut:value('p08-haircut')/100,cash_arrival_minutes:value('p08-cash-time'),security_arrival_minutes:value('p08-security-time')});window.PE_RESULT.collateral=r;
 o.innerHTML=notice(`独立资源卡：10:00需交800. 可及时交付现金${fmt(r.available_cash)}；可计非现金抵押${fmt(r.security_credit)}. 剩余要求${fmt(r.remaining_call)}.`,r.remaining_call>0)+tbl(['资源','名义额','折扣后','本次可计','说明'],[['证券',fmt(r.nominal_security),fmt(r.recognized_security),fmt(r.security_credit),r.security_reasons.join('；')||'非现金抵押条件满足；不等于借款已到账'],['现金','1,000.00','1,000.00',fmt(r.cash_credit),r.cash_reason]],'独立抵押资源');
 }catch(e){o.innerHTML='<p class="error">'+esc(e.message)+'</p>';}}
 function render09(){let o=$('p09-out');try{let r=E.execution({route:$('p09-route').value,limit_price:value('p09-limit'),terminal_price:value('p09-terminal'),fee:value('p09-fee')});window.PE_RESULT.P09=r;
 o.innerHTML=`<div class="metrics">${metric('已成交 / 目标',r.filled,'股；目标300',0)}${metric('剩余现金',r.cash)}${metric('全部实施差额 IS',r.implementation_shortfall)}</div>`+notice(`成交均价${r.average_fill===null?'不适用':fmt(r.average_fill,6)}；未完成${r.unfilled}股. 到达后待处理${r.pending_immediately_after_arrival}股，立即撤销${r.cancelled_immediately}股；10:00剩余均已取消.`)+tbl(['项目','实际值'],[['成交名义金额',fmt(r.notional)],['已成交均价',fmt(r.average_fill,6)],['终点股票市值',fmt(r.terminal_stock_value)],['实际现金＋持仓',fmt(r.actual_wealth)],['纸面目标财富',fmt(r.paper_wealth)],['IS = 纸面−实际',fmt(r.paper_wealth-r.actual_wealth)],['IS / 目标名义金额15,000',fmt(r.bps,6)+' 价格bps']], '全部实施账')+bars([['已成交价格差',r.execution_difference],['指令费用',r.fee],['未成交机会差额',r.opportunity],['全部实施差额',r.implementation_shortfall]],'IS分解')+tbl(['实际成交价','股数','现金金额'],r.fills.length?r.fills.map(x=>[fmt(x.price),fmt(x.shares,0),fmt(x.price*x.shares)]):[['无成交','0','0.00']],'逐笔成交');
 }catch(e){window.PE_RESULT.P09={error:e.message};o.innerHTML='<p class="error">'+esc(e.message)+'</p>';}}
 function budgetOptions(){return{basket:value('p07-basket'),contracts:value('p07-n'),early_budget:value('p07-early'),late_before_deadline:yes('p07-late'),allocate_released:yes('p07-release'),loss_cap:value('p07-loss'),depth:value('p07-depth')};}
 function cashPlot(r){const rows=r.actual_path;if(!rows.length)return'';let mx=Math.max(...r.required_path.map(x=>x.required_balance),...rows.map(x=>x.balance),1),y=v=>235-195*v/mx,x=i=>60+i*195;let req=r.required_path.map((v,i)=>`${x(i)},${y(v.required_balance)}`).join(' '),act=rows.map((v,i)=>`${x(i)},${y(v.balance)}`).join(' ');return `<div class="chart-frame"><div class="legend"><span><i class="swatch"></i>实际补款后余额</span><span><i class="swatch dashed"></i>要求余额</span></div><svg viewBox="0 0 700 290" role="img" aria-label="逐日实际余额；现金不足后停止后续实际路径"><title>每日账户余额，美元</title><line x1="60" y1="235" x2="660" y2="235" stroke="#9fafb8"/><text x="7" y="35" font-size="14">${fmt(mx,0)}</text><text x="27" y="240" font-size="14">0</text><polyline points="${req}" fill="none" stroke="#a34d31" stroke-width="3" stroke-dasharray="8 5"/><polyline points="${act}" fill="none" stroke="#167b75" stroke-width="4"/>${rows.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v.balance)}" r="5" fill="#167b75"/>`).join('')}${['T0','D1','D2','D3'].map((s,i)=>`<text x="${x(i)}" y="270" text-anchor="middle" font-size="18">${s}</text>`).join('')}</svg></div>`;}
 function render07(){let o=$('p07-out');try{let opt=budgetOptions(),r=E.budget(opt),all=E.budgetAll(opt);window.PE_RESULT.P07=r;window.PE_RESULT.P07all=all;
 const feasible=all.filter(a=>a.feasible).map(a=>a.parameters.contracts);
 o.innerHTML=notice('共同可行张数：'+(feasible.length?feasible.join('、'):'空集；没有数量同时满足所列风险、按时资金与成交限制.'),!feasible.length)+`<div class="metrics">${metric('所选张数的DOWN净损失',r.down_loss)}${metric('UP完整持有所需累计补款',r.cumulative_required)}${metric('实际累计已补入',r.actual_calls)}</div>`+tbl(['张数','初始要求＋费','DOWN损失','UP应补','风险','现金','深度','全部'],all.map(a=>[a.parameters.contracts,fmt(a.initial_required_plus_fee),fmt(a.down_loss),fmt(a.cumulative_required),yn(a.risk_ok),a.depth_ok?yn(a.cash_ok):'未执行',yn(a.depth_ok),a.feasible?'可行':'不可行']),'整数可行集合')+notice(!r.depth_ok?'所选数量超过接受价位的成交容量；未建立完整头寸，实际资金路径尚未启动.':r.first_failure?`实际路径在${r.first_failure}失败${r.failure_gap===null?'':'，尚缺'+fmt(r.failure_gap)+'美元'}. 不推算未获融资后的继续持仓或强平价.`:'所选数量可履行本例资金调用；风险上限仍须单独通过.',!!r.first_failure)+tbl(['初始资金归属','金额'],[['股票',fmt(r.opening.basket)],['一般现金（含未指定/未分配释放款）',fmt(r.opening.general_cash)],['期货账户',fmt(r.opening.fcm_cash)],['初始可调拨池',fmt(r.opening.timely_pool)],['另有D3条件资金',fmt(r.opening.locked_pool)],['总资产；减仓释放额='+fmt(r.opening.released_general_source),fmt(r.opening.total)]],'初始全部本金归属')+cashPlot(r);
 if(r.actual_path.length)o.innerHTML+=tbl(['实际时点','变动损失','补前余额','应补','实补','补后余额','及时池余','待解锁','未补缺口'],r.actual_path.map((a,i)=>[a.time,fmt(a.variation_loss||0),fmt(a.before===undefined?a.balance:a.before),fmt(a.required_call),fmt(a.actual_call),fmt(a.balance),fmt(a.remaining_timely),fmt(a.remaining_locked),fmt(a.gap||0)]),'实际资金路径');
 o.innerHTML+=`<details><summary>对照：完整履行所需的现金，不代表已获得资金</summary>`+tbl(['时点','要求余额','应补','累计应补','假设足额后的余额'],r.required_path.map(a=>[a.time,fmt(a.required_balance),fmt(a.required_call),fmt(a.cumulative_required),fmt(a.balance)]),'需求账')+'</details>';
 if(r.up_wealth_after_close!==null)o.innerHTML+=`<p class="small">在所示UP路径按期补齐并最终平仓的条件下：总财富${fmt(r.up_wealth_after_close)}，相对原220,000净变化${fmt(r.up_gain_after_close)}. 调拨不是收益.</p>`;
 }catch(e){window.PE_RESULT.P07={error:e.message};o.innerHTML='<p class="error">'+esc(e.message)+'</p>';}}
 function weightPlot(r){let vals=[r.current_weight,r.parameters.target,r.threshold_weight,r.destination_weight,r.post_weight??r.current_weight],lo=Math.max(0,Math.min(...vals)-.012),hi=Math.min(1,Math.max(...vals)+.012),x=v=>30+(v-lo)/(hi-lo)*620;const defs=[['目标',r.parameters.target,'#274e78'],['上侧阈值',r.threshold_weight,'#a34d31'],['目的地',r.destination_weight,'#167b75'],['当前',r.current_weight,'#222']];return `<div class="chart-frame"><div class="legend">${defs.map(([name,v])=>`<span>${name} ${pc(v)}</span>`).join('')}</div><svg viewBox="0 0 680 84" role="img" aria-label="目标、触发阈值、目的地与当前权重分别标示"><line x1="30" y1="45" x2="650" y2="45" stroke="#c4d1d7" stroke-width="12"/>${defs.map(([n,v,c],i)=>`<line x1="${x(v)}" x2="${x(v)}" y1="${i===3?20:30}" y2="${i===3?65:58}" stroke="${c}" stroke-width="4"/>`).join('')}<text x="30" y="80" font-size="14">${pc(lo)}</text><text x="650" y="80" font-size="14" text-anchor="end">${pc(hi)}</text></svg></div>`;}
 function render11(){let o=$('p11-out');try{let r=E.rebalance({weight:value('p11-weight')/100,target:value('p11-target')/100,trigger:value('p11-trigger')/10000,destination:value('p11-destination')/10000,cost:value('p11-cost')/10000,next_return:value('p11-return')/100,mode:$('p11-mode').value,reason:$('p11-reason').value});window.PE_RESULT.P11=r;
 const unavailable=['needs-judgment','unsupported-direction'].includes(r.status);
 o.innerHTML=notice(r.message,unavailable)+weightPlot(r);
 if(unavailable){o.innerHTML+='<p>当前不产生交易金额. 请先识别改变的是目标、判断还是方向，而非把未生成的金额当作零交易建议.</p>';return;}
 o.innerHTML+=`<div class="metrics">${metric('卖股金额',r.sale, '美元',6)}${metric('合计费用',r.cost,'美元',6)}${metric('交易后股票权重',r.post_weight*100,'%',5)}</div>`+tbl(['账户项目','金额／结果'],[['当前股票',fmt(r.initial_stock)],['当前债券',fmt(r.initial_bond)],['卖股',fmt(r.sale,6)],['买债（含新资本时注明）',fmt(r.bond_purchase,6)],['外部新增投入',fmt(r.external_contribution)],['交易后股票',fmt(r.stock,6)],['交易后债券',fmt(r.bond,6)],['费用后总额',fmt(r.total,6)],['即时净损益，已扣外部投入',fmt(r.instant_net_gain,6)],['下一期教学财富',fmt(r.wealth,6)],['下一期净回报；按期初已投入资本',pc(r.next_return_on_funded_capital)]],'费用后再平衡账户')+bars([['股票金额',r.stock],['债券金额',r.bond]],'调整后的持仓构成');
 }catch(e){window.PE_RESULT.P11={error:e.message};o.innerHTML='<p class="error">'+esc(e.message)+'</p>';}}
 function applyExperimentRoute(loc=window.location){
  const labs=Array.from(document.querySelectorAll('section.lab'));
  labs.forEach(el=>{el.hidden=false;});
  document.body.classList.remove('single-experiment');
  const pathname=String(loc&&loc.pathname||'');
  if(!/\/interactions\.html$/.test(pathname))return{mode:'all',requested:null,source:null};
  const search=String(loc&&loc.search||'');
  const hash=String(loc&&loc.hash||'');
  const q=new URLSearchParams(search).get('experiment');
  const h=hash.startsWith('#')?decodeURIComponent(hash.slice(1)):'';
  const requested=q||h||null,source=q?'query':h?'hash':null;
  if(!requested)return{mode:'all',requested:null,source:null};
  const target=document.getElementById(requested);
  if(!target||!target.classList.contains('lab'))return{mode:'invalid',requested,source};
  labs.forEach(el=>{el.hidden=el!==target;});
  document.body.classList.add('single-experiment');
  return{mode:'single',requested,source};
 }
 window.PE_APPLY_EXPERIMENT_ROUTE=applyExperimentRoute;
 const fs=[['p08-form',render08],['p08-resources',renderCollateral],['p09-form',render09],['p07-form',render07],['p11-form',render11]];
 fs.forEach(([id,run])=>{const f=$(id);f.addEventListener('submit',e=>e.preventDefault());f.addEventListener('input',run);f.addEventListener('change',run);f.addEventListener('reset',()=>setTimeout(run,0));run();});
 document.documentElement.classList.add('js-ready');
 window.PE_RENDER_ALL=()=>fs.forEach(([,r])=>r());
 applyExperimentRoute();
 window.addEventListener('hashchange',()=>{if(!new URLSearchParams(location.search).get('experiment'))applyExperimentRoute();});
 window.addEventListener('beforeprint',()=>document.querySelectorAll('details').forEach(el=>{el.dataset.wasOpen=el.open?'1':'0';el.open=true;}));
 window.addEventListener('afterprint',()=>document.querySelectorAll('details').forEach(el=>{el.open=el.dataset.wasOpen==='1';}));
})();
