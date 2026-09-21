/* Pure teaching ledger engine. No network, account access or trade execution. */
(function(root,factory){
  if(typeof module==='object' && module.exports) module.exports=factory;
  else root.createPEEngine=factory;
})(typeof globalThis!=='undefined'?globalThis:this,function createPEEngine(inputs){
 'use strict';
 const D=inputs.frozen,X=inputs.extensions,EPS=1e-8;
 class InputError extends Error {constructor(code,message){super(message);this.name='InputError';this.code=code;}}
 const clone=o=>JSON.parse(JSON.stringify(o));
 function num(v,name,lo=-Infinity,hi=Infinity){if(typeof v!=='number'||!Number.isFinite(v)||v<lo||v>hi)throw new InputError('invalid-number',`${name}必须是${lo}至${hi}之间的有限数值.`);return v;}
 function integer(v,name,lo,hi){num(v,name,lo,hi);if(!Number.isInteger(v))throw new InputError('non-integer',`${name}必须是整数.`);return v;}
 function member(v,arr,name){if(!arr.includes(v))throw new InputError('invalid-choice',`${name}不在本实验允许范围.`);return v;}
 function bool(v,name){if(typeof v!=='boolean')throw new InputError('invalid-boolean',`${name}须明确选择是或否.`);return v;}
 function closezero(x){return Math.abs(x)<1e-9?0:x;}
 function balance(A,D0,m){const E=A-D0;return{assets:closezero(A),debt:closezero(D0),equity:closezero(E),required_equity:m*A,shortfall:Math.max(0,m*A-E),equity_ratio:A>EPS?E/A:null};}
 function margin(opt={}){
  const p=Object.assign({},X.margin.default,opt),lim=X.margin.limits;
  const A=num(p.assets,'证券市值',...lim.assets), debt=num(p.debt,'借款',...lim.debt),m=num(p.maintenance,'维持率',...lim.maintenance),fee=num(p.sale_fee,'出售费',...lim.sale_fee);
  bool(p.interest_on,'利息'); member(p.action,['cash','sale','sale800'],'补救方式');
  const interest=p.interest_on?debt*D.margin.interest_extension.annual_rate*D.margin.interest_extension.days/D.margin.interest_extension.day_basis:0;
  const due=debt+interest,initial=balance(A,due,m),gap=initial.shortfall;
  function perform(action){
   let amount=action==='cash'?gap:action==='sale800'?X.margin.fixed_sale_amount:(gap>EPS?(gap+fee)/m:0);
   const charged=action==='cash'||amount<=EPS?0:fee;
   const repay=action==='cash'?amount:amount-charged;
   if(action!=='cash'&&(amount>A+EPS||repay>due+EPS||repay< -EPS))
    return{action,feasible:false,amount:null,fee:null,repayment:null,post:null,reason:'在现有证券、债务与费用范围内无法执行这项卖出还债；不能超卖或制造负借款.'};
   if(action==='cash'&&repay>due+EPS)throw new InputError('repay-over-debt','还债不能超过借款.');
   const post=balance(action==='cash'?A:A-amount,due-repay,m);
   return{action,feasible:true,amount,fee:charged,repayment:repay,external_cash_used:action==='cash'?amount:0,post,satisfied:post.shortfall<=EPS,closed:post.assets<=EPS&&post.debt<=EPS};
  }
  return{parameters:p,interest,initial,trigger_assets:m<1?due/(1-m):null,actions:['cash','sale800','sale'].map(perform),selected:perform(p.action),identity:'Account algebra; outside cash repayment is a transfer, not profit'};
 }
 function collateral(opt={}){
  const c=X.collateral,p=Object.assign({},c.default,{haircut:c.haircut,cash_arrival_minutes:c.cash_arrival_minutes,security_arrival_minutes:c.security_arrival_minutes},opt);
  ['cash_only','unencumbered','eligible','currency_ok','location_ok'].forEach(k=>bool(p[k],k));
  num(p.haircut,'haircut',0,1);num(p.cash_arrival_minutes,'现金到达分钟',0,1440);num(p.security_arrival_minutes,'证券可用分钟',0,1440);
  let reasons=[];if(p.cash_only)reasons.push('本次只收现金');if(!p.unencumbered)reasons.push('证券已占用');if(!p.eligible)reasons.push('证券不合格');if(!p.currency_ok)reasons.push('币种不匹配');if(!p.location_ok)reasons.push('未到指定账户');if(p.security_arrival_minutes>c.deadline_minutes)reasons.push('证券晚于截止');
  const security_credit=reasons.length?0:c.security_value*(1-p.haircut);
  const cash_ok=p.currency_ok&&p.location_ok&&p.cash_arrival_minutes<=c.deadline_minutes;
  const cash_credit=cash_ok?c.cash_value:0;
  return{parameters:p,call_amount:c.call_amount,nominal_security:c.security_value,recognized_security:c.security_value*(1-p.haircut),security_credit,security_reasons:reasons,cash_credit,cash_reason:cash_ok?'可及时交付':(p.cash_arrival_minutes>c.deadline_minutes?'现金晚到':'币种或账户不匹配'),available_collateral_value:cash_credit+security_credit,available_cash:cash_credit,remaining_call:Math.max(0,c.call_amount-cash_credit-security_credit),identity:c.identity};
 }
 function execution(opt={}){
  const p=Object.assign({},X.execution.default,opt),e=D.execution;
  member(p.route,X.execution.routes,'指令'); num(p.limit_price,'最高买价',...X.execution.limits.limit_price);num(p.terminal_price,'终点价',...X.execution.limits.terminal_price);num(p.fee,'指令费用',...X.execution.limits.fee);
  const Q=e.target_shares,p0=e.decision_price;
  let remain=Q,fills=[];
  for(const x of e.arrival_asks){if(remain<=0)break;if(p.route!=='market'&&x.price>p.limit_price+1e-10)break;let q=Math.min(remain,x.shares);fills.push({price:x.price,shares:q});remain-=q;}
  if(p.route==='fok'&&remain>0){fills=[];remain=Q;}
  const filled=Q-remain,notional=fills.reduce((s,x)=>s+x.price*x.shares,0),fee=filled?p.fee:0;
  if(notional+fee>e.initial_cash+EPS)throw new InputError('cash-insufficient','给定现金不足以支付该成交款与费用；本例不自动新增借款.');
  const cash=e.initial_cash-notional-fee,stock=filled*p.terminal_price;
  const executed=notional-filled*p0,opportunity=remain*(p.terminal_price-p0),is=executed+fee+opportunity;
  const paper=e.initial_cash-Q*p0+Q*p.terminal_price,actual=cash+stock;
  return{parameters:p,target:Q,fills,filled,unfilled:remain,notional,average_fill:filled?notional/filled:null,fee,cash,terminal_stock_value:stock,paper_wealth:paper,actual_wealth:actual,execution_difference:executed,opportunity,implementation_shortfall:is,bps:is/(Q*p0)*10000,bps_denominator:Q*p0,pending_immediately_after_arrival:p.route==='limit'?remain:0,cancelled_immediately:['ioc','fok'].includes(p.route)?remain:0,unfilled_cancelled_by_terminal:remain,identity:e.identity};
 }
 function budget(opt={}){
  const p=Object.assign({},X.budget.default,opt),j=D.joint_budget;
  member(p.basket,X.budget.basket_options,'股票篮子');integer(p.contracts,'张数',0,3);integer(p.depth,'接受价可成交张数',0,3);num(p.early_budget,'原有及时预算',0,8000);num(p.loss_cap,'损失上限',...X.budget.limits.loss_cap);bool(p.late_before_deadline,'迟到款提前');bool(p.allocate_released,'释放现金重新分配');
  const n=p.contracts,released=j.basket_value-p.basket,release_alloc=p.allocate_released?released:0;
  const general=released-release_alloc+(j.timely_external_cash_total-p.early_budget),early=p.early_budget+release_alloc,late=j.late_external_cash;
  const entryfee=n*j.entry_fee_per_contract,exitfee=n*j.exit_fee_per_contract;
  const opening={basket:p.basket,general_cash:general,fcm_cash:j.fcm_cash_initial,timely_pool:early,locked_pool:late,total:p.basket+general+j.fcm_cash_initial+early+late,released_general_source:released,released_designated:release_alloc};
  const downloss=-p.basket*j.down.basket_return-n*j.futures_multiplier*(j.execution_index_level-j.down.futures_final)+entryfee+exitfee;
  const initialneed=n*j.initial_margin_per_contract;
  let hypothetical=j.fcm_cash_initial-entryfee,cumulative=0;
  const required=[{time:'T0',balance:hypothetical,required_balance:initialneed,required_call:0,cumulative_required:0}];
  for(let t=1;t<4;t++){let variation=n*j.futures_multiplier*(j.up.daily_settlements[t]-j.up.daily_settlements[t-1]);let before=hypothetical-variation;let need=n*j.up.required_balance_per_contract[t];let call=Math.max(0,need-before);hypothetical=before+call;cumulative+=call;required.push({time:j.up.call_deadlines[t],variation_loss:variation,before,required_balance:need,required_call:call,cumulative_required:cumulative,balance:hypothetical});}
  const result={parameters:p,opening,down_loss:downloss,initial_required:initialneed,entry_fee:entryfee,initial_required_plus_fee:initialneed+entryfee,exit_fee:exitfee,required_path:required,cumulative_required:cumulative,depth_ok:n<=p.depth,risk_ok:downloss<=p.loss_cap+EPS,initial_ok:j.fcm_cash_initial-entryfee>=initialneed-EPS,identity:j.identity};
  if(!result.depth_ok||!result.initial_ok){return Object.assign(result,{actual_path:[],cash_ok:false,feasible:false,first_failure:!result.depth_ok?'T0成交容量':'T0所需余额',failure_gap:null,actual_calls:0,ending_pools:opening,up_wealth_after_close:null});}
  let B=j.fcm_cash_initial-entryfee,early_left=early,late_left=late,actualcalls=0,varsum=0,first_failure=null,gap=0;
  const actual=[{time:'T0',balance:B,required_balance:initialneed,actual_call:0,required_call:0,remaining_timely:early_left,remaining_locked:late_left,general_cash:general,cash_total:B+early_left+late_left+general,cumulative_variation_loss:0}];
  for(let t=1;t<4;t++){
   let unlocked=0;if(t===3&&p.late_before_deadline){unlocked=late_left;early_left+=late_left;late_left=0;}
   const variation=n*j.futures_multiplier*(j.up.daily_settlements[t]-j.up.daily_settlements[t-1]);varsum+=variation;
   const before=B-variation,need=n*j.up.required_balance_per_contract[t],requiredcall=Math.max(0,need-before),paid=Math.min(early_left,requiredcall);
   early_left-=paid;B=before+paid;actualcalls+=paid;gap=Math.max(0,need-B);
   actual.push({time:j.up.call_deadlines[t],variation_loss:variation,before,required_balance:need,required_call:requiredcall,actual_call:paid,balance:B,remaining_timely:early_left,remaining_locked:late_left,general_cash:general,unlocked_at_deadline:unlocked,cumulative_actual_calls:actualcalls,cash_total:B+early_left+late_left+general,cumulative_variation_loss:varsum,gap});
   if(gap>EPS){first_failure=j.up.call_deadlines[t];break;}
  }
  const cashok=first_failure===null,ending={fcm_cash:B,timely_pool:early_left,locked_pool:late_left,general_cash:general};
  const upwealth=cashok?p.basket*(1+j.up.basket_return)+B+early_left+late_left+general-exitfee:null;
  return Object.assign(result,{actual_path:actual,cash_ok:cashok,feasible:cashok&&result.risk_ok,first_failure,failure_gap:gap,actual_calls:actualcalls,ending_pools:ending,up_wealth_after_close:upwealth,up_gain_after_close:upwealth===null?null:upwealth-opening.total,up_outcome_identity:'Only the stated UP path if every cash call is funded; not a realized outcome after failure'});
 }
 function budgetAll(opt={}){return[0,1,2,3].map(n=>budget(Object.assign({},opt,{contracts:n})));}
 function rebalance(opt={}){
  const p=Object.assign({},X.rebalance.default,opt),r=D.rebalance,L=X.rebalance.limits;
  ['weight','target','trigger','destination','cost','next_return'].forEach(k=>num(p[k],k,...L[k]));member(p.mode,X.rebalance.modes,'调整模式');member(p.reason,X.rebalance.reasons,'维护原因');
  if(p.destination>=p.trigger-EPS)throw new InputError('destination-outside','目的地偏离必须小于触发距离；完全回目标对应0.');
  if(p.target+p.trigger>1+EPS)throw new InputError('invalid-threshold','上侧触发权重不能大于100%.');
  const V=r.stock+r.bond,S=V*p.weight,B=V-S,triggered=p.weight-p.target>p.trigger+1e-12;
  const identity={parameters:p,initial_stock:S,initial_bond:B,initial_total:V,current_weight:p.weight,threshold_weight:p.target+p.trigger,destination_weight:p.target+p.destination,triggered,identity:r.identity};
  if(['thesis_changed','target_changed'].includes(p.reason))return Object.assign(identity,{status:'needs-judgment',sale:null,message:'先更新受影响的判断或目标；未跨价格/权重阈值不能代替这项决定.'});
  if(p.mode==='contribution'){
   const add=r.new_contribution_alternative,postV=V+add,wealth=S*(1+p.next_return)+(B+add)*(1+r.next_bond_return);
   return Object.assign(identity,{status:'contribution',sale:0,cost:0,bond_purchase:add,external_contribution:add,stock:S,bond:B+add,total:postV,post_weight:S/postV,wealth,next_return_on_funded_capital:wealth/postV-1,instant_net_gain:0,message:'新增4000为外部资本；该分支忽略新增投入的交易费，不将资本增加当收益.'});
  }
  if(p.mode!=='none'&&p.weight<p.target-EPS)return Object.assign(identity,{status:'unsupported-direction',sale:null,message:'股票低配：本分支只推导了卖股买债，不使用负卖出量模拟反向交易.'});
  let sale=0,u=p.mode==='full'?p.target:p.target+p.destination;
  if(p.mode!=='none'&&triggered){
   if(S/V<u-EPS)throw new InputError('unsupported-direction','目的地高于当前权重；需要反向交易.');
   sale=(S-u*V)/(1-u*p.cost);
   if(sale< -EPS||sale>S+EPS||V-p.cost*sale<=0)throw new InputError('infeasible-sale','卖出量或费用后的资金不满足当前账户约束.');
  }
  sale=closezero(sale);let cost=p.cost*sale,stock=S-sale,bond=B+sale-cost,total=stock+bond,wealth=stock*(1+p.next_return)+bond*(1+r.next_bond_return);
  return Object.assign(identity,{status:sale>EPS?'traded':'no-trade',sale,cost,bond_purchase:sale-cost,external_contribution:0,stock,bond,total,post_weight:stock/total,wealth,next_return_on_funded_capital:wealth/V-1,instant_net_gain:-cost,message:p.mode==='none'?'选择不调整，保留原敞口.':!triggered?'未严格超过阈值，不发出调仓指令.':'按费用后目的地计算卖股买债.'});
 }
 return Object.freeze({margin,collateral,execution,budget,budgetAll,rebalance,defaults:()=>clone(X),InputError});
});
