'use strict';
const D=JSON.parse(document.getElementById('experiment-data').textContent),C=D.inputs,F=D.forecast,S=D.selection;
const $=id=>document.getElementById(id),esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nread=id=>{const t=$(id).value.trim();if(!t)throw Error('输入不能为空');const n=Number(t);if(!Number.isFinite(n))throw Error('输入必须为有限数值');return n;};
const num=(x,d=6)=>x===null?'未定义':Number(x).toLocaleString('en-US',{maximumFractionDigits:d,minimumFractionDigits:d});
const pp=(x,d=5)=>num(100*x,d),shortmonth=x=>x.slice(0,4)+'-'+x.slice(4);
const table=(heads,rows)=>'<div class="table-wrap" tabindex="0"><table><thead><tr>'+heads.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const metric=(label,value)=>'<div class="metric"><span>'+label+'</span><strong>'+value+'</strong></div>';
function lineChart(target,series,unit,labels){
 const width=760,height=280,left=100,right=18,top=25,bottom=42;let vals=series.flatMap(s=>s.values),lo=Math.min(...vals),hi=Math.max(...vals);if(hi===lo){lo-=1;hi+=1;}const pad=(hi-lo)*.06;lo-=pad;hi+=pad;let n=Math.max(...series.map(s=>s.values.length));
 const tickDigits=(hi-lo)<.02?5:(hi-lo)<2?3:2;const x=i=>left+i*(width-left-right)/Math.max(1,n-1),y=v=>top+(hi-v)*(height-top-bottom)/(hi-lo);
 let svg='<svg role="img" aria-label="'+esc(unit)+'；'+esc(series.map(s=>s.name).join('、'))+'" viewBox="0 0 '+width+' '+height+'">';
 for(let k=0;k<4;k++){let v=lo+(hi-lo)*k/3;svg+='<line class="grid" x1="'+left+'" x2="'+(width-right)+'" y1="'+y(v)+'" y2="'+y(v)+'"/><text x="'+(left-7)+'" y="'+(y(v)+4)+'" text-anchor="end">'+num(v,tickDigits)+'</text>';}
 series.forEach((s,i)=>{svg+='<polyline class="curve curve'+i+'" points="'+s.values.map((v,j)=>x(j)+','+y(v)).join(' ')+'"/>';});
 svg+='<text x="'+left+'" y="'+(height-12)+'">'+esc(labels?labels[0]:'1')+'</text><text x="'+(width-right)+'" y="'+(height-12)+'" text-anchor="end">'+esc(labels?labels.at(-1):String(n))+'</text><text x="'+left+'" y="15">'+esc(unit)+'</text></svg>';
 $(target).innerHTML=svg+'<p class="legend">'+series.map((s,i)=>'<span class="key key'+i+'">'+esc(s.name)+'</span>').join('')+'</p>';
}
function histogram(target,series,unit){
 let all=series.flatMap(s=>s.values),lo=Math.min(...all),hi=Math.max(...all);if(hi===lo)hi=lo+1;
 const bins=35,step=(hi-lo)/bins;let counts=series.map(s=>{let a=Array(bins).fill(0);s.values.forEach(v=>a[Math.min(bins-1,Math.floor((v-lo)/step))]++);return a;});let max=Math.max(...counts.flat());let svg='<svg viewBox="0 0 760 260" role="img" aria-label="5000次候选冠军均值分布">';
 counts.forEach((a,j)=>a.forEach((v,i)=>{let w=670/bins/series.length;svg+='<rect class="bar'+j+'" x="'+(65+i*670/bins+j*w)+'" y="'+(215-v/max*180)+'" width="'+Math.max(.4,w-1)+'" height="'+v/max*180+'"/>';}));
 svg+='<text x="65" y="18">频数（5000次）</text><text x="65" y="244">'+num(lo,2)+'</text><text x="735" y="244" text-anchor="end">'+num(hi,2)+' '+esc(unit)+'</text></svg>';
 $(target).innerHTML=svg+'<p class="legend">'+series.map((s,i)=>'<span class="key key'+i+'">'+esc(s.name)+'</span>').join('')+'</p>';
}
function guard(out,fn){try{fn();$(out).textContent='';}catch(e){$(out).textContent=e.message;}}
function renderForecast(){guard('e20',()=>{
 let key=$('model20').value,item=F.ledger.find(r=>r.key===key);let baseline=!item,sc=baseline?F.baselines[key]:item;
 let pred=baseline?(key==='zero'?F.months.map(()=>0):F.baseline_predictions):F.series[key].predictions;
 $('out20').innerHTML=metric('验证 RMSE（百分点/月）',pp(sc.rmse_decimal,8))+metric('验证 MAE（百分点/月）',pp(sc.mae_decimal,8))+metric('R²_OS；分母=扩展均值 SSE',num(sc.r2_os_vs_expanding_mean,8))+metric('各原点训练 RMSE 的均值',baseline?'基线不作同类拟合':pp(item.mean_train_rmse_decimal,6))+metric('标准化斜率范数的原点均值',baseline?'—':num(item.mean_beta_norm,8));
 lineChart('plot20',[{name:'随后观测',values:F.observed.map(x=>100*x)},{name:'所选预测',values:pred.map(x=>100*x)},{name:'扩展均值基线',values:F.baseline_predictions.map(x=>100*x)}],'收益百分数；误差差值为百分点',F.months.map(shortmonth));
 $('all20').innerHTML=table(['完整候选（全部14项）','验证RMSE pp/月','验证MAE pp/月','R²_OS'],F.ledger.map(r=>[r.key===key?'<b>'+r.key+'</b>':r.key,pp(r.rmse_decimal,8),pp(r.mae_decimal,8),num(r.r2_os_vs_expanding_mean,8)]).concat(['zero','expanding_mean'].map(k=>[k===key?'<b>'+k+'</b>':k,pp(F.baselines[k].rmse_decimal,8),pp(F.baselines[k].mae_decimal,8),num(F.baselines[k].r2_os_vs_expanding_mean,8)])));
 $('identity20').textContent='202607 CIZ 重建历史；验证120月；总冠军 expanding_mean. 这里切换冻结的实际拟合网格，不插值、不重新选历史评价冠军.';
});}
function renderScale(){guard('escale',()=>{let a=QTDE.scaleExample(nread('featureScale'),C.scale_examples.lambda,C.scale_examples.response_scale);$('scaleOut').innerHTML=table(['两点教学例','原单位预测'],[['基准 λ=1',num(a.base_beta)],['未标准化特征×尺度，λ仍=1',num(a.raw_scaled_prediction)],['λ改为 '+num(a.adjusted_lambda,3),num(a.adjusted_prediction)],['只将响应×100，预测再÷100',num(a.response_back)]]);});}
function renderClock(){guard('e21',()=>{
 const i=nread('origin21'),l=$('lambda21').value,key='p12-l'+l,good=F.series[key].fits[i],bad=F.controls[l].fits[i],target=F.months[i],t=D.records.findIndex(r=>r.month===target);
 const rows=[['预测目标',shortmonth(target)],['预测原点（月末假设）',shortmonth(D.records[t-1].month)],['训练目标', '1991-01—'+shortmonth(D.records[t-1].month)+'；n='+good.n_train],['合法第1滞后特征的训练末月',shortmonth(D.records[t-2].month)],['预测新输入的最近月份',shortmonth(D.records[t-1].month)],['非法尺度拟合池','1991-01—2025-12 的全部特征行；包含原点以后'],['合法预测 / 非法预测（%）',pp(good.prediction,8)+' / '+pp(bad.prediction,8)],['合法第1列尺度 / 非法尺度',num(good.scaler_sd[0],9)+' / '+num(bad.scaler_sd[0],9)]];
 $('out21').innerHTML=table(['一步的对象','所用信息'],rows);
 let co=F.controls[l];$('compare21').innerHTML=table(['p=12；λ='+l,'训练期尺度','全样本尺度（越界）'],[['验证RMSE pp/月',pp(co.good.rmse_decimal,8),pp(co.bad.rmse_decimal,8)],['最大逐点预测差 pp','—',pp(co.maxdiff,12)]]);
 lineChart('plot21',[{name:'合法预测',values:F.series[key].predictions.map(x=>100*x)},{name:'未来尺度预测（越界）',values:co.predictions.map(x=>100*x)}],'预测百分数',F.months.map(shortmonth));
 $('note21').textContent=l==='0'?'OLS 带截距；本设计满列秩. 同一可逆仿射变换不改变预测函数族. 过程仍然越界.':'Ridge 的惩罚几何随尺度改变. 本样本的未来尺度反而略增 RMSE，不能预设泄漏总改善成绩.';
 });}
function renderBEA(){guard('ebea',()=>{let x=QTDE.beaAt(C.clocks.BEA,$('cutoff21').value+'T23:59:59-04:00');$('beaOut').textContent=x?'截至该日可公开取得的最近版本：'+x.vintage+'，'+x.value_percent_SAAR+'%（季度环比年化）；发布 '+x.release_at+'. received_at 未知，不能证明系统何时收到.':'该日两份发布均未发生；没有可选版本.';});}
function renderSelect(){guard('e22',()=>{
 const m=nread('m22'),a=S.all_null.find(x=>x.m===m),v=S.views[String(m)];
 $('out22').innerHTML=metric('M / B',m+' / '+C.selection.B)+metric('未校正 FWER：模拟 / 精确',num(a.naive_fwer_estimate,4)+' / '+num(a.naive_fwer_exact,6))+metric('Bonferroni FWER 模拟（MCSE）',num(a.bonferroni_fwer_estimate,4)+' ('+num(a.bonferroni_fwer_mcse,6)+')')+metric('BH 严格<：全零 FDR=FWER',num(a.bh_strict.mean_fdp_fdr_estimate,4));
 histogram('plot22',[{name:'开发冠军均值',values:v.development.map(x=>100*x)},{name:'相同编号独立保留均值',values:v.holdout.map(x=>100*x)}],'百分点/月');
 const first=a.first_replica,b=QTDE.bh(first.p_values,C.selection.alpha,true);
 $('first22').innerHTML='<p>第一轮模拟：开发冠军编号 '+(first.winner_zero_based+1)+'（从1显示）；原始数据索引从0. BH R='+b.k+'. 这是候选分布，不是月度路径.</p>'+table(['排序','候选编号','p（显示）','qj/M','严格< 合格','最终拒绝'],b.rows.map(r=>[r.rank,r.index+1,r.p.toExponential(7),num(r.threshold,8),r.hit?'是':'否',r.rejected?'是':'否']));
 });}
function renderMixed(){guard('emixed',()=>{const kind=$('mixedMetric').value,a=S.mixed.bh_strict;
const specs={fdr:['平均 FDP（FDR估计）',a.mean_fdp_fdr_estimate,'每轮 V/max(R,1)，再对5000轮取平均；不是 𝔼[V]/𝔼[R]. MCSE='+num(a.mc_se_fdr_estimate,8)],fwer:['至少一次错误的频率（FWER估计）',a.probability_any_false_rejection,'每轮 1{V≥1}，再取平均；不等于本例约4.53%的FDR.'],discoveries:['每轮平均真发现',a.mean_true_discoveries,'每轮 R−V 的平均；不是从真实市场辨认已知真策略.']};
const v=specs[kind];$('mixedOut').innerHTML=metric(v[0],num(v[1],8))+'<p>'+v[2]+'</p>'+table(['固定混合模型','参数'],[['M / 真信号数','100 / 10'],['真信号μ / 原假设μ','0.01 / 0'],['B / seed','5000 / 2202'],['全部p值独立；BH严格<','q=0.05'],['平均拒绝数',num(a.mean_rejections,4)]]);
lineChart('mixedPlot',[{name:'前80轮的拒绝数 R',values:S.mixed.replicate_R.slice(0,80)},{name:'前80轮的误报数 V',values:S.mixed.replicate_V.slice(0,80)}],'每轮个数；不是月度路径');
});}
function renderManual(){guard('emanual',()=>{const p=$('manual22').value.split(/[ ,，]+/).filter(Boolean).map(Number),q=nread('q22');const a=QTDE.bh(p,q,true),b=QTDE.bh(p,q,false);$('manualOut').innerHTML='<p><b>严格 &lt;：R='+a.k+'；非严格 ≤：R='+b.k+'</b>. 数学运算用未舍入 p 值.</p>'+table(['序号','p','阈值','严格合格','严格最终拒绝'],a.rows.map(r=>[r.rank,num(r.p,8),num(r.threshold,8),r.hit?'是':'否',r.rejected?'是':'否']));});}
function continuousInput(){return {...C.cost.continuous_default,mu:nread('mu23'),rho:nread('rho23'),kappa:nread('kappa23'),cap:nread('cap23'),cash_min:nread('cash23')};}
function renderContinuous(){guard('e23c',()=>{let o=continuousInput(),v=QTDE.continuous(o);if(!v.feasible){$('out23c').textContent=v.reason;$('plot23c').innerHTML='';return;}
 $('out23c').innerHTML=table(['连续金额：调仓前财富=1','实际重算'],[['最优风险金额 x',num(v.x,9)],['费用 / 现金',num(v.cost,9)+' / '+num(v.cash,9)],['费用后财富',num(v.post_cost_wealth,9)],['真正风险权重',num(v.post_weight_risky,9)],['名义净回报期望',num(v.nominal_expected_net_return,9)],['最坏均值下净回报期望',num(v.worst_expected_net_return,9)],['风险罚项（不再扣现金）',num(v.risk_penalty,9)],['目标 J',num(v.objective,9)],['可行上界',num(v.upper,9)],['内点不交易条件是否适用',v.w0_feasible_interior?'w0 为可行内点':'否；使用可行方向'],['名义 μ 的不交易带（ρ=0）',v.no_trade_mu_band.map(x=>num(x,6)).join(' — ')]]);
 let arr=Array.from({length:151},(_,i)=>v.upper*i/150);lineChart('plot23c',[{name:'可行区间上的目标 J（不是利润）',values:arr.map(x=>(o.mu-o.rho)*x-o.gamma*o.sigma**2*x*x/2-o.kappa*Math.abs(x-o.w0))}],'目标 / 原财富',['x=0','x='+num(v.upper,4)]);
 });}
function renderInteger(){guard('e23i',()=>{let o={...C.cost.integer_default,mu:nread('mui23'),rho:nread('rhoi23'),cash_min:nread('cashi23'),cap:nread('capi23'),mode:$('mode23').value};delete o.initial_shares;
 let v=QTDE.integer(o);if(!v.feasible){$('out23i').textContent=v.reason;$('rows23i').innerHTML='';return;}let r=v.rows.find(r=>r.q===v.display_q);
 $('out23i').innerHTML=metric('全部最优股数',v.optimal_q_all_ties.join('、'))+metric('最大可行股数',String(v.largest_feasible_q))+metric('显示股数（同分取较小）',String(v.display_q))+table(['显示股数的账本（USD）','实际重算'],[['现金',num(r.cash,2)],['价差 / 佣金组件',num(r.spread,2)+' / '+num(r.commission,2)],['名义净损益期望',num(r.nominal_expected_net_pnl,3)],['最坏均值下净损益期望',num(r.worst_expected_net_pnl,3)],['风险罚项',num(r.risk_penalty_dollars,3)],['目标',num(r.objective_dollars,3)],['两状态期末中价标记财富',r.terminal_mid_wealth.map(x=>num(x,2)).join(' / ')],['两状态原财富基数收益（%）',r.returns_prewealth.map(x=>pp(x,4)).join(' / ')]]);
 $('rows23i').innerHTML=table(['全部 q','可行','现金USD','名义净期望USD','罚项USD','目标USD'],v.rows.map(r=>[v.optimal_q_all_ties.includes(r.q)?'<b>'+r.q+' ★</b>':r.q,r.feasible?'是':'否',num(r.cash,2),num(r.nominal_expected_net_pnl,3),num(r.risk_penalty_dollars,3),num(r.objective_dollars,3)]));
 lineChart('plot23i',[{name:'各可行整数股数的目标',values:v.rows.filter(r=>r.feasible).map(r=>r.objective_dollars)}],'目标USD；不是期望净利',['q=0','q='+v.largest_feasible_q]);
 });}
function route(){
 document.documentElement.classList.toggle("embedded",window.self!==window.top);
 const labs=[...document.querySelectorAll('section.lab')], known=id=>labs.some(s=>s.id===id);
 const q=new URLSearchParams(location.search).get('experiment');
 const h=decodeURIComponent(location.hash.slice(1));
 const selected=known(q)?q:(known(h)?h:null);
 labs.forEach(s=>s.hidden=!!selected&&s.id!==selected);
 document.body.classList.toggle('isolated',!!selected);
 return selected;
}
document.documentElement.classList.add('js');
$('model20').innerHTML=F.ledger.map(r=>'<option value="'+r.key+'">p='+r.p+'；λ='+r.lambda+'</option>').join('')+'<option value="zero">零预测</option><option value="expanding_mean">扩展均值：总冠军</option>';$('model20').value=F.winner.key;
$('origin21').innerHTML=F.months.map((m,i)=>'<option value="'+i+'">预测 '+shortmonth(m)+'</option>').join('');
[['model20',renderForecast],['featureScale',renderScale],['origin21',renderClock],['lambda21',renderClock],['cutoff21',renderBEA],['m22',renderSelect],['mixedMetric',renderMixed],['manual22',renderManual],['q22',renderManual],...['mu23','rho23','kappa23','cap23','cash23'].map(x=>[x,renderContinuous]),...['mui23','rhoi23','cashi23','capi23','mode23'].map(x=>[x,renderInteger])].forEach(([id,fn])=>$(id).addEventListener('input',fn));
$('allLabs').onclick=()=>{
 try{
  const u=new URL(location.href);
  if(['http:','https:','file:'].includes(u.protocol)){u.searchParams.delete('experiment');u.hash='';location.href=u.toString();return;}
 }catch(_e){}
 document.querySelectorAll('section.lab').forEach(s=>s.hidden=false);document.body.classList.remove('isolated');
};window.addEventListener('hashchange',route);window.addEventListener('popstate',route);
renderForecast();renderScale();renderClock();renderBEA();renderSelect();renderMixed();renderManual();renderContinuous();renderInteger();route();

document.querySelectorAll('details.static').forEach(x=>x.open=false);
