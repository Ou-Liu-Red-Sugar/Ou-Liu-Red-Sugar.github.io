/* Pure teaching engine. PF-GRID-01 is the only default chain.
   No network, account access, order transmission, or broker-margin assumptions. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.OptionsEngine=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const EPS=1e-8;
function num(x,name,lo=-Infinity,hi=Infinity){if(typeof x!=='number'||!Number.isFinite(x)||x<lo||x>hi)throw new Error(name+' 超出有效范围');return x;}
function choice(x,list,name){if(!list.includes(x))throw new Error(name+' 未注册');return x;}
function round(x,n=2){const f=10**n;return Math.round((x+Number.EPSILON)*f)/f;}
// Normal CDF via positive-term integral series with compensated summation.
// Absolute accuracy is checked against Python math.erf; endpoints beyond |10| round to 0/1.
function normal(x){if(x===0)return .5;if(x>=10)return 1;if(x<=-10)return 0;const z=Math.abs(x);let term=z,sum=z,comp=0;for(let n=1;n<500;n++){term*=z*z/(2*n+1);const y=term-comp,t=sum+y;comp=(t-sum)-y;sum=t;if(term<sum*1e-17)break;}const p=Math.min(1,Math.max(.5,.5+Math.exp(-z*z/2)*sum/Math.sqrt(2*Math.PI)));return x<0?1-p:p;}
function intrinsic(s,k,kind){return kind==='call'?Math.max(s-k,0):Math.max(k-s,0);}
function bsm(s,k,days,sigma,kind='call'){
 num(s,'标的',0,1e6);num(k,'执行价',.0001,1e6);num(days,'余日',0,3650);num(sigma,'波动率',0,3);choice(kind,['call','put'],'类型');
 if(days===0||sigma===0)return intrinsic(s,k,kind);if(s===0)return kind==='call'?0:k;
 const st=sigma*Math.sqrt(days/365),d1=Math.log(s/k)/st+st/2,d2=d1-st;
 const c=Math.max(0,s*normal(d1)-k*normal(d2));return kind==='call'?c:Math.max(0,c-s+k);
}
function quote(D,kind,k,days){let q=D.quote_chain.find(x=>x.kind===kind&&x.strike===k&&x.days===days);if(!q)throw new Error('该系列不在冻结链中');return q;}
function entry(D,id,view='mid',origin='existing'){
 choice(view,['mid','execution'],'口径');choice(origin,['existing','cash'],'起点');
 const spec=D.strategy_specs.find(s=>s.id===id);if(!spec)throw new Error('策略未注册');
 const initialShares=origin==='existing'?100:0,initialCash=12000-initialShares*100;
 const ds=spec.shares-initialShares, stockPx=view==='execution'?100+(ds>0?.02:ds<0?-.02:0):100;
 const stockCash=-ds*stockPx, stockSpread=view==='execution'?Math.abs(ds)*.02:0;
 let cash=initialCash+stockCash, optionCash=0,optionMark=0,fee=0,legs=[];
 for(const a of spec.legs){const [kind,k,days,q]=a,p=quote(D,kind,k,days),fill=view==='mid'?p.mid:q>0?p.ask:p.bid;
 const f=view==='execution'?Math.abs(q)*.65:0,cf=-q*100*fill-f;cash+=cf;optionCash+=cf;optionMark+=q*100*p.mid;fee+=f;
 legs.push({kind,strike:k,days,quantity:q,mid:p.mid,bid:p.bid,ask:p.ask,fill,fee:f,cash:cf});}
 return {id,view,origin,initial_wealth:12000,initial_shares:initialShares,initial_cash:initialCash,stock_delta:ds,stock_trade_cash:stockCash,stock_spread:stockSpread,shares:spec.shares,option_cash:optionCash,opening_fee:fee,cash_after_D1:cash,option_mark:optionMark,wealth_at_mid_after_entry:cash+100*spec.shares+optionMark,legs,settlement_note:'D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金。'};
}
function terminal(D,id,s,view='mid',origin='existing'){
 num(s,'终点价',0,1000);const e=entry(D,id,view,origin);
 const pay=e.legs.map(l=>l.quantity*100*intrinsic(s,l.strike,l.kind));
 const w=e.cash_after_D1+e.shares*s+pay.reduce((a,b)=>a+b,0);
 return {...e,spot:s,payoffs:pay,stock_mark:e.shares*s,option_payoff:pay.reduce((a,b)=>a+b,0),wealth:w,pnl:w-12000,return_on_initial:w/12000-1,identity:'到期闭合支付的财富标记；不自动宣称所有实物交割已完成。默认不计最终平股/行权费或税。'};
}
function expiryHoldings(D,id,s,view='mid',origin='existing'){
 num(s,'终点价',0,1000);const e=entry(D,id,view,origin);let cash=e.cash_after_D1,shares=e.shares,events=[];
 for(const l of e.legs){if(intrinsic(s,l.strike,l.kind)>EPS){const shareDelta=(l.kind==='call'?1:-1)*l.quantity*100,cf=-shareDelta*l.strike;cash+=cf;shares+=shareDelta;events.push({kind:l.kind,quantity:l.quantity,share_delta:shareDelta,cash_delta:cf,strike:l.strike});}}
 return {cash,shares,events,wealth:cash+shares*s,conditional:true,note:'以严格价内腿履约、平价腿不履约作为终点演示；成员处理/客户指令与资金资格须另核，不能预测指派。'};
}
function coveredAssignment(D,view='mid',collar=false){
 const e=entry(D,collar?'collar_95_105':'covered_call_105',view,'existing');
 return {entry:e,assigned:true,shares_after:0,delivery_shares:100,cash_receivable:10500,cash_after_settlement:e.cash_after_D1+10500,
 dividend_received:0,remaining_put:collar?1:0,remaining_put_value:collar?null:0,
 hold_comparator:{ex_price:108,shares:100,cash:2100,wealth:12900},
 pre_ex_spot:109,dividend_per_share:1,wealth:collar?null:e.cash_after_D1+10500,
 note:'单独施加D10指派及随后1美元除息分支；108除息股价与100现金股息一起计。剩余put的报价未给，不用零代替。'};
}
function putAssignment(D,timely=9500,view='mid'){
 num(timely,'截止可用现金',0,20000);let e=entry(D,'cash_secured_put_95',view,'cash');timely=Math.min(timely,e.cash_after_D1);
 const gap=Math.max(0,9500-timely),ok=gap<EPS;
 return {entry:e,obligation:9500,timely_cash:timely,unavailable_cash:e.cash_after_D1-timely,gap,completed:ok,
 cash_after:ok?e.cash_after_D1-9500:null,shares_after:ok?100:null,wealth_after:ok?e.cash_after_D1-9500+7500:null,
 note:ok?'教学时点支付完成，股票按75标记。':'截止前缺现金：停止已完成交割结果；未假设券商借款。'};
}
function limitComparison(D,s){num(s,'终点价',0,1000);return {spot:s,limit_filled_price:95,limit_wealth:12000-9500+100*s,csp95_wealth:terminal(D,'cash_secured_put_95',s,'mid','cash').wealth,hold_wealth:2000+100*s,cash_wealth:12000,note:'D10限价已成交被明确施加；put没有提前指派，不能从一次触价推断这两件事。'};}
function parity(R=1.01){num(R,'毛增长倍数',1,1.2);const S=100,K=105,C=2,P=C-S+K/R;return {R,S,K,C,P,stock_minus_call:S-C,pv_strike_minus_put:K/R-P,full_reserve_extra:K-K/R};}
function hedge(D,s=70,requiredFloor=11300,requiredUpside=1,view='mid'){
 num(requiredFloor,'要求下限',0,12000);num(requiredUpside,'上涨斜率',0,1);
 const ids=['hold','half_stock','cash','covered_call_105','protective_put_95','collar_95_105'];
 return ids.map(id=>{const e=terminal(D,id,s,view,'existing'),floor=terminal(D,id,0,view,'existing').wealth;
 const slope=(terminal(D,id,131,view,'existing').wealth-terminal(D,id,130,view,'existing').wealth)/100;
 return {...e,floor,high_upside_fraction:slope,meets_floor:floor+EPS>=requiredFloor,meets_upside:slope+EPS>=requiredUpside,qualifies:floor+EPS>=requiredFloor&&slope+EPS>=requiredUpside};});
}
function roll(D){let s=100,c=2000,total=0;const a=[];for(let j=0;j<3;j++){let k=s*.95,p=s*.0142*100;c-=p;total+=p;let t=s*.96,pay=100*Math.max(k-t,0);c+=pay;a.push({cycle:j+1,start:s,strike:k,premium:p,cumulative_premium:total,end:t,put_payoff:pay,cash:c,wealth:c+100*t});s=t;}return a;}
function verticalLife(D,wallet=1000,view='mid'){
 num(wallet,'独立钱包',0,30000);const e=entry(D,'bull_call_100_105',view,'cash'),debit=-e.option_cash,post=wallet-debit;
 if(post<0)return {wallet,debit,completed:false,phase:'entry',gap:-post,stock_after:null,wealth_after_gap:null};
 const gap=Math.max(0,10000-post),ok=gap<EPS;
 return {wallet,debit,fixing:104.99,expiry_payoff:499,expiry_pnl:499-debit,cash_before_delivery:post,gross_payment:10000,gap,completed:ok,phase:ok?'delivery_completed':'delivery_failed',cash_after:ok?post-10000:null,stock_after:ok?100:null,wealth_at_fixing:ok?post-10000+10499:null,wealth_after_gap:ok?post-10000+8000:null,note:'明确施加长100C行权、短105C不指派。交割后80是新股票风险，不重写旧价差到期支付。'};
}
function theta(s=103){num(s,'标的',1,300);const v=d=>100*(bsm(s,100,d,.3)-bsm(s,105,d,.3));return {spot:s,today:v(30),tomorrow:v(29),change:v(29)-v(30)};}
function volPosition(D,s=103,elapsed=10,callIV=.2,putIV=.2,shape='straddle',side='long'){
 num(s,'标的',0,300);num(elapsed,'经过日数',0,29);num(callIV,'call IV',0,1.5);num(putIV,'put IV',0,1.5);choice(shape,['straddle','strangle'],'结构');choice(side,['long','short'],'方向');
 let ks=shape==='straddle'?[100,100]:[105,95],sgn=side==='long'?1:-1,legs=[],initialCash=12000,mark=0,closeCash=0,executable=true;
 for(let i=0;i<2;i++){const kind=i===0?'call':'put',q=quote(D,kind,ks[i],30),enter=sgn>0?q.ask:q.bid,cf=-sgn*enter*100-.65;initialCash+=cf;
 const m=bsm(s,ks[i],30-elapsed,i===0?callIV:putIV,kind),mid=round(m),bid=Math.max(0,round(mid-.02)),ask=round(mid+.02),exit=sgn>0?bid:ask;
 if(sgn>0&&bid===0)executable=false;
 const exitcf=sgn*exit*100-.65;mark+=sgn*m*100;closeCash+=exitcf;
 legs.push({kind,strike:ks[i],entry_price:enter,entry_fee:.65,entry_cash:cf,model_mark:m,synthetic_mid:mid,bid,ask,exit_price:exit,exit_fee:.65,exit_cash:exitcf});}
 const w=initialCash+closeCash;const fundingGap=side==='short'?Math.max(0,-w):0;executable=executable&&fundingGap<EPS;return {s,elapsed,shape,side,callIV,putIV,legs,cash_after_D1:initialCash,entry_net_cash:initialCash-12000,model_option_mark:mark,marked_wealth:initialCash+mark,close_cash:executable?closeCash:null,closed_wealth:executable?w:null,closed_pnl:executable?w-12000:null,close_available:executable,funding_gap:fundingGap,collateral_assessment:side==='short'?'未给券商担保品规则；现金余额不等于可用余额，不能判可实施。':'长仓付清premium；行权资金另核。'};
}
function calendar(D,{spot=100,elapsed=30,nearIV=.3,farIV=.3,scale=1,view='mid',decision='close',finalSpot=80,settlement='cash',available=null,offset=false}={}){
 num(scale,'缩放',1,50);if(![1,50].includes(scale))throw new Error('缩放仅1或50');num(spot,'近端标的',0,300);num(finalSpot,'远端标的',0,300);num(elapsed,'经过日数',0,30);num(nearIV,'近端IV',0,1.5);num(farIV,'远端IV',0,1.5);
 choice(view,['mid','execution'],'口径');choice(decision,['close','continue'],'决策');choice(settlement,['cash','physical'],'结算方式');if(settlement==='physical'&&scale!==1)throw new Error('SPXW不采用实物结算');
 const n=quote(D,'call',100,30),f=quote(D,'call',100,90),W=12000*scale;
 const entryShort=(view==='mid'?n.mid:n.bid)*100*scale,entryLong=(view==='mid'?f.mid:f.ask)*100*scale,entryFee=view==='execution'?1.3:0;
 const debit=entryLong-entryShort+entryFee,cash=W-debit;
 const near=bsm(spot,100,Math.max(0,30-elapsed),nearIV),far=bsm(spot,100,90-elapsed,farIV),shortPay=100*Math.max(spot-100,0)*scale;
 const nearBid=elapsed===30?null:Math.max(0,round(near)-.02)*scale,nearAsk=elapsed===30?null:(round(near)+.02)*scale,farBid=Math.max(0,round(far)-.02)*scale,farAsk=(round(far)+.02)*scale;
 const marked=cash+(far-near)*100*scale;
 let result={spot,elapsed,nearIV,farIV,scale,view,decision,settlement,initial_wealth:W,debit,cash_after_D1:cash,near_model:near*scale,far_model:far*scale,near_bid:nearBid,near_ask:nearAsk,far_bid:farBid,far_ask:farAsk,marked_wealth:marked,marked_pnl:marked-W,entry_legs:[{side:'sell near',cash:entryShort-(view==='execution'?.65:0)},{side:'buy far',cash:-entryLong-(view==='execution'?.65:0)}]};
 if(elapsed<30){const executable=view==='mid'||farBid>0,exitFar=view==='mid'?far*100*scale:farBid*100-.65,exitNear=view==='mid'?-near*100*scale:-nearAsk*100-.65;
 return {...result,phase:'before_near_expiry',closing_legs:{near:exitNear,far:exitFar},close_available:executable,closed_wealth:executable?cash+exitFar+exitNear:null,closed_pnl:executable?cash+exitFar+exitNear-W:null,continued_final_wealth:null,note:'两期限仍存在，平仓分别卖远腿bid、买回近腿ask。'};}
 if(settlement==='physical'){
 const assigned=spot>100,shares=assigned?-100:0,deliveryReceivable=assigned?10000:0;
 return {...result,phase:'physical_inventory',gross_near_cash_obligation:null,shares_after:shares,cash_after_stock_settlement:cash+deliveryReceivable,short_stock_proceeds_restricted:assigned?deliveryReceivable:0,far_calls_after:1,close_available:null,closed_wealth:null,continued_final_wealth:null,note:'美式近call指派产生空股及远call；未给借股、保证金和后续平股条件，因此不沿用现金指数终值。'};
 }
 if(available===null)available=cash;num(available,'D31可达现金',0,1e8);available=Math.min(available,cash);
 const saleAvailable=view==='mid'||farBid>0,sale=view==='mid'?far*100*scale:farBid*100-.65;
 const committed=decision==='close'&&offset&&saleAvailable?Math.max(0,sale):0,gap=Math.max(0,shortPay-available-committed),ok=gap<EPS;
 const endCash=cash-shortPay,continued=endCash+100*Math.max(finalSpot-100,0)*scale;
 const closeOk=decision==='close'&&saleAvailable&&ok;
 return {...result,phase:ok?'near_cash_settled':'near_cash_failed',gross_near_cash_obligation:shortPay,payment_day:'D31',available_cash:available,far_sale_proceeds:saleAvailable?sale:null,confirmed_sale_offset:committed,gap,completed:ok,cash_after_near_settlement:ok?endCash+(committed>0?sale:0):null,close_available:closeOk,closed_wealth:closeOk?endCash+sale:null,closed_pnl:closeOk?endCash+sale-W:null,continued_final_wealth:ok&&decision==='continue'?continued:null,continued_pnl:ok&&decision==='continue'?continued-W:null,finalSpot,note:'近端先现金结算。远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策。'};
}
return {num,round,normal,bsm,quote,entry,terminal,expiryHoldings,coveredAssignment,putAssignment,limitComparison,parity,hedge,roll,verticalLife,theta,volPosition,calendar};
});
