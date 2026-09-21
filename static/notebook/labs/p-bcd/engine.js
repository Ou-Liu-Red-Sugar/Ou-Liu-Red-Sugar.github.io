/* Pure teaching engine. It propagates only frozen objects and explicitly bounded
   arithmetic exercises; it contains no company forecast generator or quote API. */
(function(root,factory){'use strict'; if(typeof module==='object'&&module.exports){module.exports=factory(require('./inputs.json'));}else{root.PBCD=factory(root.PBCD_INPUTS);}})(typeof globalThis!=='undefined'?globalThis:this,function(D){
 'use strict';
 if(!D||D.case_id!=='CASE-AMZN-20260920')throw Error('缺少正确版本的共用输入');
 const S=D.states, own=(x,k)=>Object.prototype.hasOwnProperty.call(x,k),clone=x=>JSON.parse(JSON.stringify(x));
 function finite(x,name){if(typeof x!=='number'||!Number.isFinite(x))throw new TypeError(name+'须为有限数字');return x;}
 function enumKey(k,keys,name){if(!keys.includes(k))throw new RangeError('未知'+name+'；不能组合未计算的路径');return k;}
 function probability(p){if(!p||typeof p!=='object'||Array.isArray(p)||Object.keys(p).length!==4||S.some(s=>!own(p,s)))throw new TypeError('须恰好提供四类概率');let sum=0;S.forEach(s=>{finite(p[s],s);if(p[s]<0||p[s]>1)throw new RangeError('概率必须在0与1之间');sum+=p[s];});if(Math.abs(sum-1)>1e-10)throw new RangeError('概率和必须为1，不自动归一化');return clone(p);}
 function path(key){
  if(S.includes(key)){const s=clone(D.scenarios[key]);return {mode:'canonical',key,title:key+'原代表路径',source_key:'scenarios.'+key,aws:s.aws,retail:s.retail,capital:s.capital,bridge:s.bridge,identity:'历史研究未来路径；融资仍以市场开放等条件为前提'};}
  enumKey(key,Object.keys(D.named_alternatives),'具名替代');const a=clone(D.named_alternatives[key]);
  if(a.aws_path){return {mode:'named',key,...a,aws:clone(D.scenarios[a.aws_path].aws),retail:clone(D.scenarios[a.retail_path].retail),quarters:null,identity:'具名经营替代；资本规则重新接到经营结果，未导出季度不以原路径补造'};}
  return {mode:'named-summary',key,...a,quarters:null,identity:'原资本计划保留，但现金/债务已改变；仅有冻结汇总，不生成改倍数版本'};
 }
 function reallocation(x){finite(x,'EBIT移动');if(x < -5||x>5)throw new RangeError('教学移动范围为−5至5');const b=D.scenarios.Base.bridge;return {shift:x,aws_ebit:D.scenarios.Base.aws[3].ebit+x,retail_ebit:D.scenarios.Base.retail[3].ebit-x,total_ebit:D.scenarios.Base.aws[3].ebit+D.scenarios.Base.retail[3].ebit,delta_ev:x*(b.aws_multiple-b.retail_multiple),delta_price:x*(b.aws_multiple-b.retail_multiple)/b.shares,identity:'只改变共享EBIT分配、固定21/22倍；不是经济情景或分组算法'};}
 function business(id){enumKey(id,D.business_views.map(x=>x.id),'卡片');return clone(D.business_views.find(x=>x.id===id));}
 function peer(id,metric='EV_EBIT',tax=.25,subtractBook=false){
  enumKey(id,Object.keys(D.peers),'同行');finite(tax,'教学税率');if(tax<0||tax>=1)throw new RangeError('教学税率须满足0≤t<1');if(typeof subtractBook!=='boolean')throw new TypeError('账面扣除开关须为布尔值');
  const p=clone(D.peers[id]);
  if(id==='MSFT'){
   if(!['PE_GAAP','PE_ADJUSTED'].includes(metric))throw new RangeError('Microsoft仅采用集团权益/EPS对照，本包不生成租赁统一EV');
   const eps=metric==='PE_GAAP'?p.gaap_eps:p.adjusted_eps;
   return {...p,metric,claimant:'普通股权益',denominator:eps,denominator_label:metric==='PE_GAAP'?'FY2026 GAAP EPS':'FY2026调整EPS',value:p.quote,multiple:p.quote/eps,identity:'非AWS/非Azure独立倍数；调整只针对所声明项目'};
  }
  if(!['EV_EBIT','EV_NOPAT'].includes(metric))throw new RangeError('经营EV只能匹配经营分母；PE/EBIT或EV/EPS都不相容');
  const ttm=p.fy_operating_income+p.current_h1_operating_income-p.prior_h1_operating_income;
  const ev=id==='WMT'?p.common_market_cap+p.debt_book+p.finance_lease+p.nci_book-p.cash:p.vendor_ev-p.operating_lease+p.preferred_liquidation_proxy-(subtractBook?p.nonmarketable_book:0);
  const den=metric==='EV_NOPAT'?ttm*(1-tax):ttm;
  return {...p,metric,claimant:'经营价值',ttm_ebit:ttm,denominator:den,denominator_label:metric==='EV_NOPAT'?'同TTM经营税代理下NOPAT':'TTM EBIT',value:ev,multiple:ev/den,tax,subtractBook:id==='GOOGL'&&subtractBook,identity:'冻结市场观察+明确资本边界；非新的报价或目标价'};
 }
 function equity(state='Base',extra=0){enumKey(state,S,'原状态');finite(extra,'额外奖励股');if(extra<0||extra>.2)throw new RangeError('额外奖励股仅允许0至0.2 B 股的分母敏感性');const b=clone(D.scenarios[state].bridge),c=D.scenarios[state].capital;
  const common=b.aws_ev+b.retail_ev+b.cash-b.debt-b.finance_claims+b.investment_net-b.other_claims;
  return {...b,original_shares:b.shares,shares:b.shares+extra,common_equity:common,price:Math.max(0,common)/(b.shares+extra),original_price:b.price,extra_awards:extra,ending_cash:c.cash,operating_cash_reserve:D.parameters.capital.operating_cash_reserve,liquidity_floor:D.parameters.capital.liquidity_floor,identity:extra?'固定价值的股份分母教学扰动，不是新的薪酬/融资预测':'原研究同日期普通股桥'};
 }
 function mixedEquity(doubleCountBank=false){if(doubleCountBank)throw new RangeError('银行价值已经在股权层；再扣其1000借款是重复处理');return clone(D.teaching_examples.mixed_equity_bridge);}
 function classify(a,r){enumKey(a,[...D.state_classification.business_states,'?'],'AWS业务状态');enumKey(r,[...D.state_classification.business_states,'?'],'非AWS业务状态');if(a==='?'||r==='?')return {status:'unresolved',label:'证据不足：先记录候选类别，不按股价补类'};enumKey(a,D.state_classification.business_states,'AWS业务状态');enumKey(r,D.state_classification.business_states,'非AWS业务状态');return {status:'classified',label:D.state_classification.matrix[D.state_classification.business_states.indexOf(a)][D.state_classification.business_states.indexOf(r)],aws:a,retail:r};}
 function weights(id='adopted',delta=0){enumKey(id,D.weight_ids,'权重集');finite(delta,'概率转移');const p=clone(D.probabilities[id]);if(delta<0||delta>p.Bull)throw new RangeError('只能把0至原Bull权重转给Bear');p.Bull-=delta;p.Bear+=delta;return probability(p);}
 function brier(p,observed){probability(p);enumKey(observed,S,'假设实现类');return S.reduce((v,s)=>v+(p[s]-(s===observed?1:0))**2,0);}
 function resultWithWeights(pricingId,p){enumKey(pricingId,D.pricing_ids,'定价框架');probability(p);const prices=D.pricing[pricingId].prices,m=D.metadata,T=m.years,P=m.purchase_price;
  const etw=S.reduce((v,s)=>v+p[s]*prices[s],0),weighted=S.reduce((v,s)=>v+p[s]*((prices[s]/P)**(1/T)-1),0),loss=S.reduce((v,s)=>v+(prices[s]<P?p[s]:0),0);
  return {prices:clone(prices),weights:clone(p),expected_terminal_wealth:etw,expected_net_gain:etw-P,expected_holding_return:etw/P-1,annualized_expected_terminal_wealth:(etw/P)**(1/T)-1,probability_weighted_annualized_return:weighted,representative_point_loss_probability:loss,tail_representative_loss:1-prices.Tail/P,tail_class_weight:p.Tail,benchmark_terminal_wealth:P*(1+D.parameters.benchmark.annual_rate)**T,years:T,identity:'代表点离散近似；真实类内亏损概率未识别；Tail不是损失下限'};
 }
 function distribution(pricingId='representative',weightId='adopted'){enumKey(weightId,D.weight_ids,'权重集');const result=resultWithWeights(pricingId,D.probabilities[weightId]);return {...result,source_key:'pricing.'+pricingId+'.distributions.'+weightId};}
 function flip(target){finite(target,'比较终值');const x=distribution(),spread=x.prices.Bull-x.prices.Bear;const delta=spread===0?null:(x.expected_terminal_wealth-target)/spread;return {target,delta,feasible:delta!==null&&delta>=0&&delta<=x.weights.Bull,fixed:'所有价格和Base/Tail权重固定，仅Bull→Bear'};}
 function financingIssue(pre,fee,rate){finite(pre,'融资前现金');finite(fee,'费用率');finite(rate,'利率');if(fee<0||rate<0||fee+rate/8>=1)throw new RangeError('净融资系数必须为正');const issue=Math.max(0,60-pre)/(1-fee-rate/8);return {issue,fee:issue*fee,interest:issue*rate/8,ending_cash:pre+issue*(1-fee-rate/8),identity:'单季融资恒等式；不保证市场可得性'};}
 return Object.freeze({data:clone(D),states:S.slice(),path,business,reallocation,peer,equity,mixedEquity,classify,weights,probability,brier,distribution,resultWithWeights,flip,financingIssue});
});
