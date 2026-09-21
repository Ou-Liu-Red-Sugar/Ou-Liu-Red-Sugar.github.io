/* M-D teaching engine. No network, trades, account reads or persistent writes. */
(function(root, factory){const api=factory(); if(typeof module==='object'&&module.exports)module.exports=api;else root.MD_ENGINE=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const finite=(x,n)=>{if(typeof x!=='number'||!Number.isFinite(x))throw new TypeError(n+'必须为有限数值');return x;};
const range=(x,n,lo,hi)=>{finite(x,n);if(x<lo||x>hi)throw new RangeError(n+'超出教学范围');return x;};
const integer=(x,n,lo,hi)=>{range(x,n,lo,hi);if(!Number.isInteger(x))throw new RangeError(n+'须为整数');return x;};
const flag=(x,n)=>{if(typeof x!=='boolean')throw new TypeError(n+'须为布尔值');return x;};
const choice=(x,n,vals)=>{if(!vals.includes(x))throw new RangeError(n+'不支持该选项');return x;};
const cent=(x)=>Math.round(x*100)/100;
const tickPrice=(x,n)=>{range(x,n,-1000,1000);if(Math.abs(x*100-Math.round(x*100))>1e-7)throw new RangeError(n+'须为0.01的整数倍');return x;};
const clone=x=>JSON.parse(JSON.stringify(x));
function history(D){let prev=null;return D.history.map(r=>{const out={date:r.date,may:r.may,june:cent(r.may-r.spread),spot:r.spot,spread:r.spread,basis:cent(r.spot-r.may),vm:prev===null?null:cent((r.may-prev)*D.contract.quantity)};prev=r.may;return out;});}
function contract(D,args={}){
 const p={...D.m10,...args};choice(p.side,'方向',['long','short']);integer(p.contracts,'张数',1,D.contract.max_contracts);tickPrice(p.entry,'起价');tickPrice(p.next,'后价');
 const quantity=p.contracts*D.contract.quantity,sign=p.side==='long'?1:-1;
 return {status:'conditional_price_change',identity:p.identity,inputs:p,quantity,tick_value:cent(quantity*D.contract.tick),signed_sensitivity:sign*quantity,quote_times_quantity:cent(quantity*p.entry),pnl:cent(sign*quantity*(p.next-p.entry)),commodity_purchase_payment_at_entry:0,margin_requirement:null,history:history(D)};
}
function margin(D,args={}){
 const p={...D.margin,path:'A',raised:false,...args};choice(p.path,'路径',['A','B']);integer(p.contracts,'张数',1,50);range(p.starting_cash,'现金',0,1e8);flag(p.raised,'变更要求');flag(p.transfer_on_time,'准时转款');
 const im0=p.initial_per_contract*p.contracts, mm0=p.maintenance_per_contract*p.contracts;
 range(p.initial_per_contract,'初始要求',0,1e7);range(p.maintenance_per_contract,'维持要求',0,p.initial_per_contract);
 range(p.raised_initial_per_contract,'新初始要求',0,1e7);range(p.raised_maintenance_per_contract,'新维持要求',0,p.raised_initial_per_contract);integer(p.change_at_mark,'变更阶段',1,4);
 const prices=args.prices===undefined?D.margin.paths[p.path]:args.prices;
 if(!Array.isArray(prices)||prices.length<2||prices.length>31)throw new RangeError('价格路径须有2–31点');prices.forEach((v,i)=>tickPrice(v,'价格'+i));
 if(p.starting_cash<im0)return {status:'blocked_initial',inputs:p,initial_required:im0,initial_shortfall:cent(im0-p.starting_cash),rows:[],initial_state:null,completed_equity:null,equity_at_stop:p.starting_cash,cumulative_vm:0};
 let bal=cent(im0),free=cent(p.starting_cash-im0),sum=0,status='completed';const rows=[];
 const initial_state={stage:0,price:prices[0],balance:bal,free,equity:cent(bal+free)};
 for(let i=1;i<prices.length;i++){
  const vm=cent(p.contracts*D.contract.quantity*(prices[i]-prices[i-1]));sum=cent(sum+vm);bal=cent(bal+vm);
  const raised=p.raised&&i>=p.change_at_mark,im=raised?p.raised_initial_per_contract*p.contracts:im0,mm=raised?p.raised_maintenance_per_contract*p.contracts:mm0;
  const before=bal,required=bal<mm?cent(im-bal):0,paid=p.transfer_on_time?Math.min(free,required):0;
  free=cent(free-paid);bal=cent(bal+paid);const shortfall=cent(required-paid);
  rows.push({stage:i,price:prices[i],vm,initial:im,maintenance:mm,before,required,paid,shortfall,balance:bal,free,equity:cent(bal+free),deadline:'D_'+i,transfer_on_time:p.transfer_on_time});
  if(shortfall>0){status=p.transfer_on_time?'stopped_at_unmet_call':'stopped_at_deadline';break;}
 }
 return {status,inputs:p,initial_state,rows,cumulative_vm:sum,equity_at_stop:cent(bal+free),completed_equity:status==='completed'?cent(bal+free):null,unmodeled_marks:prices.length-1-rows.length,actual_account:false};
}
function carry(D,args={}){
 const p={...D.carry,...args};
 range(p.spot,'现货价',0,1000);range(p.storage,'仓储',0,100);range(p.handling,'交付费用',0,100);range(p.rate,'融资年率',0,1);range(p.days,'持有天数',31,3650);range(p.initial_margin,'保证金',0,1e7);
 range(p.forward,'远期/期貨起价',0,1000);range(p.mid,'中段价格',0,1000);range(p.end,'终段价格',0,1000);choice(p.storage_timing,'仓储时点',['upfront','end']);
 range(p.mid_day,'中段日期',1,p.days-1);flag(p.storage_available,'仓储可用');flag(p.funding_available,'融资可用');flag(p.deliverable,'交付可用');
 if(p.quantity!==D.contract.quantity||p.denominator!==365||p.margin_rate!==0||p.positive_intermediate_cash_rate!==0)throw new RangeError('数量/ACT365/零报酬条件在本实验只读');
 const missing=[];if(!p.storage_available)missing.push('仓储服务不可取得，无法保持指定现货腿');if(!p.funding_available)missing.push('融资不可取得，不能完成起点付款及中间资金');if(!p.deliverable)missing.push('油品/地点/接入不满足，无法抵销交付义务');
 if(missing.length)return {status:'blocked_replication',inputs:p,missing,forward_net:null,futures_net:null,rows:[],historical:history(D)};
 const Q=p.quantity,up=Q*(p.spot+(p.storage_timing==='upfront'?p.storage:0)),repay=up*(1+p.rate*p.days/p.denominator),late=p.storage_timing==='end'?Q*p.storage:0,handling=Q*p.handling;
 const allin=repay+late+handling,receipt=Q*p.forward,vm1=Q*(p.forward-p.mid),vm2=Q*(p.mid-p.end),vmloan=Math.max(0,-vm1),idle=Math.max(0,vm1),vmcost=vmloan*p.rate*(p.days-p.mid_day)/p.denominator,imcost=p.initial_margin*p.rate*p.days/p.denominator,invoice=Q*p.end;
 const final_rows=[['实物出售',invoice],['末次VM',vm2],['中段正VM留存释放',idle],['保证金本金退回',p.initial_margin],['购油/前付仓储本息',-repay],['后付仓储',-late],['交付费用',-handling],['中段VM借款本息',-(vmloan+vmcost)],['保证金借款本息',-(p.initial_margin+imcost)]];
 return {status:'conditional_funded_ledger',inputs:p,upfront:up,repayment:repay,late_storage:late,handling,all_in:allin,per_unit:allin/Q,forward_receipt:receipt,forward_net:receipt-allin,vm:[vm1,vm2],vm_funding:vmcost,im_funding:imcost,futures_invoice:invoice,futures_net:invoice+vm1+vm2-allin-vmcost-imcost,final_rows,final_cash_sum:final_rows.reduce((a,r)=>a+r[1],0),historical:history(D)};
}
function roll(D,args={}){
 const p={...D.roll,...args};integer(p.contracts,'张数',1,50);tickPrice(p.old_entry,'旧建仓价');range(p.old_sell_slippage,'旧卖出滑点',0,10);range(p.new_buy_slippage,'新买入滑点',0,10);range(p.fee_per_leg_per_contract,'每腿费用',0,1000);
 tickPrice(p.old_sell_slippage,'卖出滑点');tickPrice(p.new_buy_slippage,'买入滑点');
 if(p.previous_settlement!==null)tickPrice(p.previous_settlement,'前结算');
 for(const key of ['old_reference','new_reference','next_new_settlement'])if(p[key]!==D.roll[key])throw new RangeError('历史参考'+key+'只读');
 const Q=p.contracts*D.contract.quantity,oldExit=cent(p.old_reference-p.old_sell_slippage),newEntry=cent(p.new_reference+p.new_buy_slippage),oldTotal=cent((oldExit-p.old_entry)*Q),gap=cent((p.new_reference-p.old_reference)*Q),newDay=cent((p.new_reference-newEntry)*Q),newNext=cent((p.next_new_settlement-p.new_reference)*Q),newTotal=cent(newDay+newNext),fees=cent(2*p.contracts*p.fee_per_leg_per_contract),prev=p.previous_settlement;
 const before=prev===null?null:cent((prev-p.old_entry)*Q),oldDay=prev===null?null:cent((oldExit-prev)*Q),dayNet=oldDay===null?null:cent(oldDay+newDay-fees);
 return {status:'assumed_executions',inputs:p,quantity:Q,old_exit:oldExit,new_entry:newEntry,old_total:oldTotal,quoted_month_gap:gap,new_principal_purchase_payment:0,new_quote_scale:cent(p.new_reference*Q),old_vm_before:before,old_close_day_vm:oldDay,new_entry_day_vm:newDay,new_next_vm:newNext,new_total:newTotal,fees,total_price_pnl:cent(oldTotal+newTotal),net_pnl:cent(oldTotal+newTotal-fees),roll_day_cash:dayNet,margin_change:null,roll_day_cash_includes_margin:false};
}
function swap(D,args={}){
 const p={...D.swap,...args};range(p.loan_notional,'贷款本金',1,1e10);range(p.swap_notional,'互换本金',0,1e10);finite(p.rate,'浮动利率');range(p.accrual_numerator,'计息分子',1,366);if(p.accrual_denominator!==360)throw new RangeError('计息分母在本例固定360');
 for(const k of ['same_index','same_fixing','same_payment','same_accrual'])flag(p[k],k);
 if(p.fixed!==D.swap.fixed||p.spread!==D.swap.spread||p.loan_floor!==0)throw new RangeError('披露固定率/贷款利差/floor只读，不能修改为真实新条款');
 const missing=[];
 if(!p.same_index)missing.push('贷款与互换各自指数定义、L_L与L_S的独立观察');
 if(!p.same_fixing)missing.push('各自fixing日期及对应浮动利率');
 if(!p.same_payment)missing.push('两条付款日程与跨日期现金/融资输入');
 if(!p.same_accrual)missing.push('贷款与互换各自计息期间及alpha_L、alpha_S');
 if(p.rate<0)missing.push('负利率下互换floor/确认书；贷款0%floor不能套到互换');
 if(p.rate>1)throw new RangeError('浮动利率超过本教学范围');
 if(missing.length)return {status:p.rate<0?'needs_swap_floor':'needs_distinct_inputs',inputs:p,missing,fixed_cash:null,floating_cash:null,swap_net_receipt:null,loan_interest:null,combined_payment:null,fixed_combined_rate:null};
 const alpha=p.accrual_numerator/p.accrual_denominator,fixedCash=p.swap_notional*p.fixed*alpha,floatCash=p.swap_notional*p.rate*alpha,swapNet=floatCash-fixedCash,loan=p.loan_notional*(Math.max(p.rate,0)+p.spread)*alpha,matched=p.loan_notional===p.swap_notional;
 return {status:matched?'matched_teaching':'notional_mismatch',inputs:p,alpha,fixed_cash:fixedCash,floating_cash:floatCash,swap_net_receipt:swapNet,loan_interest:loan,combined_payment:loan-swapNet,fixed_combined_rate:matched?p.fixed+p.spread:null,residual_notional:p.loan_notional-p.swap_notional,increment_for_100bp:(p.loan_notional-p.swap_notional)*.01*alpha,swap_mtm:null,collateral_call:null};
}
return {history,contract,margin,carry,roll,swap,version:'2026-09-21-MD-draft-v1'};
});
