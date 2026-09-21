(function(){'use strict';
const E=window.MHIJ_ENGINE,D=window.MHIJ_DATA,U=window.MHIJ_UI;const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function fmt(x,d=2){return x===null||x===undefined?'未确定':Number(x).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});}
const pct=(x,d=4)=>x==null?'未确定':fmt(100*x,d)+'%';
const table=(heads,rows)=>'<div class="table-wrap"><table><thead><tr>'+heads.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(v=>'<td>'+esc(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const metric=(label,value,unit,note='')=>'<div class="metric"><span>'+esc(label)+'</span><strong>'+esc(value)+'</strong><small>'+esc(unit)+(note?' · '+esc(note):'')+'</small></div>';
function status(text,type=''){return '<p class="status '+type+'">'+esc(text)+'</p>';}
function field(id,name){return $(id).querySelector('[name="'+name+'"]');}
function val(id,name){const f=field(id,name);if(!f)return undefined;if(f.type==='checkbox')return f.checked;if(f.type==='number'){if(f.value.trim()==='')return null;return Number(f.value);}return f.value;}
function output(id,html){const root=$(id+'-result');root.innerHTML=html;fitCharts(root);}
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
function bars(caption,items,unit){
 const labels=items.map(x=>x[0]),values=items.map(x=>x[1]);
 const max=Math.max(1e-10,...values.map(Math.abs));
 const rows=labels.map((label,i)=>{
  const v=Object.is(values[i],-0)?0:values[i],width=Math.abs(v)/max*50,left=v<0?50-width:50;
  const number=(v>0?'+':'')+fmt(v,Math.abs(v)>100?2:4);
  return `<li class="bar-row"><div class="bar-heading"><span class="bar-label">${esc(label)}</span><span class="bar-value">${esc(number)}</span></div><div class="bar-track" aria-hidden="true"><span class="bar-fill ${v<0?'negative':'positive'}" style="left:${left}%;width:${width}%"></span></div></li>`;
 }).join('');
 return `<figure class="chart signed-bars"><figcaption>${esc(caption)}</figcaption><p class="chart-unit">单位：${esc(unit)}</p><p class="bar-direction" aria-hidden="true"><span>← 负值</span><span>0</span><span>正值 →</span></p><ol class="bar-list">${rows}</ol></figure>`;
}

function svgLines(title,xlabel,ylabel,series){return lineChart(series,xlabel,ylabel,title);}
let pvp=E.pvpStart(D);
const renders={};
renders[E.IDs.funding]=id=>{
 const o={intervalHours:Number(val(id,'hours')),premium:val(id,'premium')/100,imr:val(id,'imr')/100,mmr:val(id,'mmr')/100,coefficient:val(id,'coefficient'),kind:val(id,'kind'),side:val(id,'side'),eligibility:val(id,'eligibility'),quantity:val(id,'quantity'),mark:val(id,'mark')};const r=E.funding(D,o);
 const msg=r.eligibility==='uncertain'?'参与资格未确认：仅显示条件现金，不能承诺本次收付。':r.eligibility==='excluded'?'已给定本次不参与；实际事件现金为0。':'已给定参与资格；以下为这一事件的条件演算，不是已取得的账户流水。';
 let h=status(msg,r.eligibility==='uncertain'?'warn':'')+'<div class="metrics">'+metric('本次资金费率',pct(r.F),'事件百分比')+metric('参与资格下现金',r.cash===null?'未确定':fmt(r.cash,r.kind==='inverse'?8:2),r.currency,'流入为正')+metric('正常外限',pct(r.cap),'min(两项)')+metric('利息项 I',pct(r.I),'当前 '+o.intervalHours+' 小时事件')+'</div>';
 h+=table(['本事件步骤','值'],[['平均溢价 P',pct(r.P)],['内层调整 clamp(I−P)',pct(r.adjust)],['外夹之前 P+调整',pct(r.preCap)],['最终 F',pct(r.F)],['若确认参与的有符号现金',fmt(r.conditionalCash,r.kind==='inverse'?8:2)+' '+r.currency],['Trade History费用显示符号（参与时）',fmt(r.feeDisplayIfIncluded,r.kind==='inverse'?8:2)+'；正为支出']]);
 h+=r.hitLimit?status('本次触及限额：后续结算频率改为每小时。同日利息设置下，小时I='+pct(r.nextInterest,5)+'；下一次F仍未知，须新溢价和当时参数。','warn'):status(r.zeroWidthCap?'IMR=MMR令教学正常外限为0；不据此声明存在这种实时币对规则。':'本例没有推定下一事件费率；当前值不能年化成锁定收益。');
 const points=[];for(let i=0;i<=100;i++){let p=-.01+.02*i/100;points.push([p*100,E.funding(D,{...o,premium:p}).F*100]);}
 h+=svgLines('本事件的分段函数；不是历史资金费率','平均溢价（%）','每次资金费率（%）',[{name:'两层clamp',points},{name:'当前输入',points:[[r.P*100,r.F*100]]}]);h+='<p class="note">±5秒开平仓没有自动判定按钮：该窗口内是否计入结算仍可能不确定。</p>';output(id,h);
};
renders[E.IDs.currency]=id=>{
 const ex=val(id,'exit'),r=E.currency(D,{exit:ex,report:val(id,'reportPolicy')==='exit'?ex:val(id,'report'),usdtUsd:val(id,'usdtUsd'),side:val(id,'side'),mode:val(id,'mode'),product:val(id,'product'),collateralAsset:val(id,'asset')});
 field(id,'report').disabled=val(id,'reportPolicy')==='exit';
 let h=status('这是条件价格/钱包比较，不模拟中途资金费或强平存续。'+(r.negativeWallet?'出现负钱包只是模型条件失效警示，不证明实际可存续到此。':''),r.negativeWallet?'warn':'');
 h+=table(['项目','线性账户','反向账户'],[['入场钱包报告值',fmt(r.initialLinearReport)+' USD（入场USD/USDT '+fmt(r.entryUsdtUsd,4)+'）',fmt(r.initialInverseReport)+' USD'],['合约结算损益',fmt(r.linearPnl)+' USDT',fmt(r.inversePnl,8)+' BTC'],['报告币损益',fmt(r.linearReportPnl)+' USD',fmt(r.inverseReportPnl)+' USD'],['期末钱包数量',fmt(r.linearWallet)+' USDT',fmt(r.inverseWallet,8)+' BTC'],['期末钱包报告值',fmt(r.linearWalletUsd)+' USD（报告时USD/USDT '+fmt(r.reportUsdtUsd,4)+'）',fmt(r.inverseWalletUsd)+' USD']]);
 h+=bars('冻结同一入场尺度；报告时汇率只改变期末估值',[['线性钱包',r.linearWalletUsd],['反向钱包',r.inverseWalletUsd]],'USD');
 h+='<div class="metrics">'+metric('线性原有USDT汇率重估',fmt(r.linearOriginalWalletFxPnl),'USD')+metric('线性合约报告损益',fmt(r.linearReportPnl),'USD')+metric('线性钱包相对入场变化',fmt(r.linearWealthChangeUsd),'USD')+metric('反向原有BTC重估',fmt(r.collateralPriceChange),'USD')+metric('反向合约报告损益',fmt(r.inverseReportPnl),'USD')+'</div>';
 h+='<p class="note">USD/USDT控件是报告时汇率；冻结入场换算始终为1。改变报告汇率不会把历史入场5,000 USD回写成另一数字。</p>';
 h+=status('币种/模式检查：'+r.eligibilityScope,r.assetModeCompatible?'':'warn')+'<p class="note">这项检查不是平台开户、授信或保证金充足认定；钱包资产不能因模式不接受就当作市值为零。</p>';output(id,h);
};
renders[E.IDs.liquidation]=id=>{
 const mode=val(id,'mode'),kind=val(id,'kind');const r=E.liquidation(D,{mode,kind,index:val(id,'index'),last:val(id,'last'),basis:val(id,'basis'),normalMark:val(id,'normal'),inverseMark:val(id,'inverseMark'),accountMmr:val(id,'accountMmr')===null?null:val(id,'accountMmr')/100});
 ['index','last','basis','normal'].forEach(n=>field(id,n).disabled=kind!=='linear');field(id,'inverseMark').disabled=kind!=='inverse';field(id,'accountMmr').disabled=mode==='isolated';
 let h=status(r.triggered===null?'缺少相应风险状态，不能判断触发。':r.triggered?'所选规则已触发；尚未提供实际平仓成交。':'给定状态下未触发所选规则。',r.triggered===false?'':'warn');
 h+='<div class="metrics">'+metric('所选模式',{'isolated':'逐仓','cross':'全仓','portfolio':'组合'}[mode],r.display)+metric('单仓阈值',r.lp===null?'不计算':fmt(r.lp,6),r.priceUnit)+metric('风险参考',r.mark===null?'未确定':fmt(r.mark,4),r.priceUnit,'不是可执行报价')+'</div>';
 if(mode==='isolated')h+=table(['官方例的计算项目','数值'],[['合约参考价值',fmt(r.value,kind==='inverse'?8:2)+' '+r.currency],['预计平仓费',fmt(r.estimatedCloseFee,kind==='inverse'?8:2)+' '+r.currency],['初始额（未含另加额）',fmt(r.initialBeforeExtra,kind==='inverse'?8:2)+' '+r.currency],['另加保证金',fmt(r.extra,kind==='inverse'?8:2)+' '+r.currency],['入场参考维持额',fmt(r.maintenanceAtEntry,kind==='inverse'?8:2)+' '+r.currency]]);
 else h+=table(['账户条件','值'],[['给定账户MMR',r.accountMmr===null?'未提供':pct(r.accountMmr,2)],['触发标准','账户MMR达到100%'],['单仓显示价',r.display],['完整组合风险引擎','本实验没有重建']]);
 if(kind==='linear')h+=table(['正常标记分量／另一规则','结果'],[['指数×资金基差部分 P1',fmt(r.P1,4)],['指数+平均基差 P2',fmt(r.P2,4)],['最新成交',fmt(r.last,4)],['normal median',r.normalMark?fmt(r.mark,4):'常规分支已关闭，不模拟回退'],['按最新成交止损36,400','给定最新成交'+(r.lastStopTriggered?'触发':'未触发')]]);
 h+='<h3>另一清算例：破产价与市场执行</h3><p class="note">下列65,000/64,000例独立于前面的40,000入场头寸。</p>';const ins=E.insurance(D,Number(val(id,'insuranceExit')));
 h+=table(['触发价','客户破产价结算','实际执行','保险基金增减（1 BTC）'],[[fmt(ins.trigger),fmt(ins.bankruptcy),fmt(ins.execution),fmt(ins.fundDelta)+' USDT']]);
 h+='<div class="flow"><span><b>先识别触发</b>mark或账户MMR，不是成交保证。</span><span><b>撤单／部分减仓／接管</b>按规则与可实施条件执行。</span><span><b>保险与ADL</b>回撤触发条件不必等到保险基金为零。</span></div>';output(id,h);
};
renders[E.IDs.collateral]=id=>{
 const r=E.collateral(D,{positionValue:val(id,'position'),initial:val(id,'initial'),index:val(id,'index'),ratio:val(id,'ratio')/100,mode:val(id,'mode')});
 let h='<h3>子例A：USDT头寸的边际档位</h3>'+table(['名义额区间','该档用额','边际率','维持额贡献'],r.rows.map(x=>[fmt(x.from,0)+'–'+fmt(x.to,0),fmt(x.used),pct(x.rate,2),fmt(x.amount)]));
 h+='<div class="metrics">'+metric('当前维持额',fmt(r.MM),'USDT；未计关闭费')+metric('资金减维持额',fmt(r.snapshotSurplus),'USDT；不是最大亏损')+'</div>';
 h+='<h3>子例B：独立无仓BTC钱包</h3>'+table(['市场报告值','认可比例','合资格值','模式'],[[fmt(r.headline)+' USD',pct(r.ratio,2),r.eligible===null?'此用途不相容':fmt(r.eligible)+' USD',{'cross':'全仓多资产','portfolio':'组合多资产','isolated':'逐仓USDT'}[r.mode]]]);
 h+=status(r.modeCompatible?'90%等认可比例是可调教学参数，不是实时BTC档位。':'BTC市场价值仍然存在；但逐仓USDT合约不能把BTC任意变为结算保证金。','warn');
 if(r.eligible!==null)h+=bars('钱包换算与抵押认可值是两步',[['市值',r.headline],['认可值',r.eligible]],'USD');output(id,h);
};
renders[E.IDs.redemption]=id=>{
 const r=E.redemption(D,{holder:val(id,'holder'),tokens:val(id,'tokens'),issuerCost:val(id,'cost'),bid:val(id,'bid'),feeRate:val(id,'fee')/100,issuerOnline:val(id,'issuerOnline'),secondaryReady:val(id,'secondaryReady'),canWithdraw:val(id,'withdraw'),hasMintAccount:val(id,'mint')});
 field(id,'withdraw').disabled=r.holder!=='venue';field(id,'mint').disabled=r.holder!=='venue';
 let h='<div class="flow"><span><b>身份</b>'+esc({'type_a':'合资格Type A账户','type_b':'Type B，尚无Mint账户','venue':'第三方场所记账余额'}[r.holder])+'</span><span><b>直接路线</b>'+esc(r.directReason)+'</span><span><b>外部出售路线</b>'+esc(r.secondaryReason)+'</span></div>';
 h+=table(['路线','本例能否作为选项','条件净额'],[['直接兑付',r.directReachable?'是':'否',r.direct===null?'不可达；不参加金额比较':fmt(r.direct)+' USD'],['二级买价出售',r.secondaryReachable?'是':'否',r.secondary===null?'条件未满足':fmt(r.secondary)+' USD']]);
 if(r.direct!==null&&r.secondary!==null)h+=status('两路线均在给定条件内：直接路线净额差 '+fmt(r.direct-r.secondary)+' USD。未评估等待、融资或真实市场深度，不是套利建议。');
 else h+=status('先核可达集，不把无法执行的参考金额当成更优路线。','warn');
 h+='<p class="note">本例“场所余额”按需先提款，再走上述外部路线。场所内另有交易是否可行，需要另读合同与报价。这里没有推断实际银行到账。</p>';output(id,h);
};
renders[E.IDs.settlement]=id=>{
 const tab=val(id,'tab');$(id+'-fund').hidden=tab!=='fund';$(id+'-pvp').hidden=tab!=='pvp';
 if(tab==='fund'){
  const r=E.fundRecord(D,{branch:val(id,'recordAction'),permission:val(id,'permission')});let h=status('Franklin真实材料的记录/权利例；不与Agorá合成一种真实服务。');
  if(r.branch==='migration')h+=table(['迁移权限','原链记录','新链记录','经济份额','另行付款'],[[r.permission?'已给定批准':'未批准',r.oldChain,r.newChain,r.sharesAfter,'本例未确认']]);
  else if(r.branch==='transfer')h+=table(['钱包权限','份额腿','另一支付腿'],[[r.permission?'已给定允许':'未允许',r.sharesTransferred+'份转移','未提供确认；不能证明券款对付']]);
  else h+=table(['NAV周期','转让者比例','受让者比例','美元股息'],[['该例24小时',pct(r.transferorFraction,1),pct(r.transfereeFraction,1),'未给金额；只分比例']]);
  output(id,h);return;
 }
 const s=E.pvpView(pvp);let h=status('Agorá式教学PvP：'+{'initial':'初始指令','validated':'验证就绪','locked':'两腿已锁，尚未付款','committed':'共同完成','cancelled':'取消并释放锁'}[s.phase],s.phase==='cancelled'?'warn':'');
 h+='<div class="flow"><span><b>1 验证／就绪</b>不重新发现汇率或路径。</span><span><b>2 锁定／有限授权</b>准备资产，锁定不是付款。</span><span><b>3 共同完成／取消</b>不会单边完成，不等于法律最终性已证明。</span></div>';
 h+=table(['主体','USD总余额','USD锁定','EUR总余额','EUR锁定','该币可用余额'],[['A',s.A.USD,s.locks.A_USD,s.A.EUR,0,s.free.A_USD+' USD'],['B',s.B.USD,0,s.B.EUR,s.locks.B_EUR,s.free.B_EUR+' EUR']]);
 h+='<div class="metrics">'+metric('两主体USD合计',fmt(s.totals.USD),'USD；逐币守恒')+metric('两主体EUR合计',fmt(s.totals.EUR),'EUR；不能和USD直接相加')+'</div><ol class="log">'+s.log.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol>';
 $(id).querySelector('[data-pvp=validate]').disabled=s.phase!=='initial';$(id).querySelector('[data-pvp=lock]').disabled=s.phase!=='validated';$(id).querySelector('[data-pvp=commit]').disabled=s.phase!=='locked';$(id).querySelector('[data-pvp=cancel]').disabled=['committed','cancelled'].includes(s.phase);output(id,h);
};
renders[E.IDs.amm]=id=>{
 const r=E.amm(D,{gross:val(id,'gross'),liquidity:val(id,'liquidity'),fee:val(id,'fee')/100});
 let h=status(r.hitLimit?'已触及用户价格限制1.21：停止，不因区间外有流动性而继续。':r.status==='no_trade'?'输入为零：没有交换，成交均价不定义。':'本次输入在区间内完成。',r.hitLimit?'warn':'');
 h+='<div class="metrics">'+metric('实际消耗Y',fmt(r.consumed,6),'Y；含本次费用')+metric('未用Y',fmt(r.unused,6),'Y；不是费用')+metric('得到X',fmt(r.out,6),'X')+metric('终点边际价格',fmt(r.P,8),'Y / X')+'</div>';
 h+=table(['输入分解／均价','结果'],[['指定gross输入',fmt(r.gross,8)+' Y'],['进入曲线net',fmt(r.net,8)+' Y'],['单列fee',fmt(r.fees,8)+' Y'],['gross平均执行价',r.average===null?'无交易，不定义':fmt(r.average,8)+' Y/X']]);
 h+=table(['库存对象','初始X','初始Y','最后X','最后Y'],[['真实库存（不含fee）',fmt(r.x0,6),fmt(r.y0,6),fmt(r.x,6),fmt(r.y,6)],['虚拟储备',fmt(r.L,6),fmt(r.L,6),fmt(r.virtualX,6),fmt(r.virtualY,6)]]);
 const netmax=r.L*(Math.sqrt(r.limit)-1),points=[];for(let i=0;i<=50;i++){let y=netmax*i/50;points.push([y,(1+y/r.L)**2]);}
 h+=svgLines('边际价格沿净输入移动；平均价由整笔消耗/输出计算','净Y进入曲线','边际P：Y / X',[{name:'固定L区间',points},{name:'本次终点',points:[[r.net,r.P]]}]);
 const f=r.feeAllocation;h+='<h3>另一费用分配例，不是上面的唯一头寸</h3>'+table(['全池活动L','本LP的L','其他LP的L','池内LP fee','每L增长','本LP所得'],[[f.poolL,f.positionL,f.otherL,f.totalFee+' Y',fmt(f.perL,6)+' Y/L',fmt(f.positionFee,3)+' Y']]);
 h+='<p class="note">本次swap默认唯一头寸L等于池L；上表是独立的100/1000比例分配。跨tick更新L只在正文解释，不在本页另造第八个实验。</p>';output(id,h);
};
function render(id){try{for(const f of $(id).querySelectorAll('input[type=number][required]')){if(!f.disabled&&f.value.trim()==='')throw new Error('请补齐必需的教学数值；空白不等于零。');}renders[id](id);}catch(e){output(id,status(e.message,'error'));}}
function requestedExperiment(search,hash){try{const p=new URLSearchParams(search||'');const q=p.get('experiment');return(q!==null?q:(hash||'').replace(/^#/,'')).toUpperCase();}catch(_){return '';}}
function routeTo(request){document.body.classList.toggle("embedded",parent!==window);const panels=[...document.querySelectorAll('.lab')],id=String(request||'').toUpperCase(),known=panels.some(x=>x.id===id);panels.forEach(x=>x.hidden=known&&x.id!==id);requestAnimationFrame(fitVisibleCharts);document.querySelectorAll('button[data-route]').forEach(b=>b.setAttribute('aria-pressed',String(known?b.dataset.route===id:b.dataset.route==='ALL')));}
function reset(id){const p=U.panels.find(p=>p.id===id);p.controls.forEach(c=>{const f=field(id,c.name);if(!f)return;if(c.type==='checkbox')f.checked=!!c.value;else f.value=c.value===null?'':String(c.value);});if(id===E.IDs.settlement)pvp=E.pvpStart(D);render(id);}
U.panels.forEach(p=>{
 const section=$(p.id);section.addEventListener('input',ev=>{if(p.id===E.IDs.settlement&&ev.target.name==='insufficient')pvp=E.pvpStart(D,{insufficient:ev.target.checked});render(p.id);});
 section.addEventListener('change',ev=>{if(p.id===E.IDs.funding&&ev.target.name==='kind'){field(p.id,'quantity').value=ev.target.value==='inverse'?10000:10;}if(p.id===E.IDs.settlement&&ev.target.name==='insufficient')pvp=E.pvpStart(D,{insufficient:ev.target.checked});render(p.id);});
 section.querySelector('[data-reset]').addEventListener('click',()=>reset(p.id));
 section.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{const obj=JSON.parse(b.dataset.preset);for(const[n,v]of Object.entries(obj)){const f=field(p.id,n);if(f.type==='checkbox')f.checked=v;else f.value=v;}render(p.id);}));
 if(p.id===E.IDs.settlement)section.querySelectorAll('[data-pvp]').forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.pvp;if(a==='restart')pvp=E.pvpStart(D,{insufficient:val(p.id,'insufficient')});else pvp=E.pvpStep(pvp,a,{valid:val(p.id,'valid'),authorized:val(p.id,'authorized')});render(p.id);}));
 render(p.id);
});
document.querySelectorAll('[data-route]').forEach(b=>b.addEventListener('click',()=>routeTo(b.dataset.route)));
window.addEventListener('hashchange',()=>routeTo(requestedExperiment(location.search,location.hash)));
window.addEventListener('beforeprint',()=>document.querySelectorAll('details').forEach(d=>d.open=true));
routeTo(requestedExperiment(location.search,location.hash));
function notifyHeight(){if(parent===window)return;const panel=document.querySelector('.lab:not([hidden])');if(panel)parent.postMessage({type:'mhij-height',experiment:panel.id,height:Math.ceil(document.body.scrollHeight)+20},location.origin);}
if(typeof ResizeObserver!=='undefined')new ResizeObserver(()=>{fitVisibleCharts();notifyHeight();}).observe(document.body);
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',notifyHeight));
notifyHeight();
window.MHIJ_APP={routeTo,requestedExperiment,render,reset,getPvpState:()=>JSON.parse(JSON.stringify(pvp))};
})();
