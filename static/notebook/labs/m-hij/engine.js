/* Pure teaching functions. Frozen input is never mutated. No network/account actions. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.MHIJ_ENGINE=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){'use strict';
const IDs={funding:'EXP-MHIJ-M24-FUNDING-01',currency:'EXP-MHIJ-M25-CURRENCY-01',liquidation:'EXP-MHIJ-M26-LIQUIDATION-01',collateral:'EXP-MHIJ-M26-COLLATERAL-01',redemption:'EXP-MHIJ-M27-REDEMPTION-01',settlement:'EXP-MHIJ-M28-SETTLEMENT-01',amm:'EXP-MHIJ-M29-AMM-SWAP-01'};
const clone=x=>JSON.parse(JSON.stringify(x));
function num(v,name,lo=-Infinity,hi=Infinity){if(typeof v!=='number'||!Number.isFinite(v)||v<lo||v>hi)throw new RangeError(name+' 超出教学输入范围');return v;}
function pos(v,name){num(v,name);if(v<=0)throw new RangeError(name+' 必须为正');return v;}
function one(v,items,name){if(!items.includes(v))throw new RangeError(name+' 无效');return v;}
function group(D,key){const g=D.experiments[IDs[key]];if(!g)throw new Error('缺少冻结输入 '+key);return g;}
function clamp(z,l,u){return Math.min(Math.max(z,l),u);}
function funding(D,o={}){
 const b=group(D,'funding').inputs, h=o.intervalHours??b.selected_interval_hours;
 one(h,[1,8],'事件小时数'); const P=num(o.premium??b.premium_aggregates[0],'平均溢价',-.2,.2);
 const im=pos(o.imr??b.teaching_IMR,'IMR'),mm=pos(o.mmr??b.teaching_MMR,'MMR');
 if(im<mm||im>1||mm>1)throw new RangeError('须满足 0 < MMR <= IMR <= 1');
 const a=num(o.coefficient??b.normal_limit_coefficient,'系数',.5,1), I=b.daily_interest_fraction/(24/h), L=Math.min(a*(im-mm),mm);
 const adjust=clamp(I-P,-b.inner_clamp_absolute,b.inner_clamp_absolute),pre=P+adjust,F=clamp(pre,-L,L);
 const eligible=one(o.eligibility??'included',['included','excluded','uncertain'],'参与资格'), side=one(o.side??'long',['long','short'],'方向');
 const kind=one(o.kind??'linear',['linear','inverse'],'合约类别'),base=kind==='linear'?b.official_linear_example:b.official_inverse_example;
 const qty=pos(o.quantity??(base.quantity_btc??base.quantity_usd),'数量'),mark=pos(o.mark??(base.mark_usdt_per_btc??base.mark_usd_per_btc),'标记价');
 const value=kind==='linear'?qty*mark:qty/mark, signed=(side==='long'?-1:1)*value*F;
 const touched=L>0&&Math.abs(F)>=L-1e-14;
 return {id:IDs.funding,I,P,adjust,preCap:pre,cap:L,F,value,currency:kind==='linear'?'USDT':'BTC',kind,side,eligibility:eligible,
 conditionalCash:signed,cash:eligible==='uncertain'?null:eligible==='excluded'?0:signed,
 feeDisplayIfIncluded:-signed,
 status:eligible==='uncertain'?'eligibility_unconfirmed':eligible==='excluded'?'not_in_event':'conditional_event_calculated',
 hitLimit:touched,zeroWidthCap:L===0,nextIntervalHours:touched?1:null,
 nextInterest:touched?b.daily_interest_fraction/24:null,nextFunding:null,
 nextEventReason:touched?'本事件触限；后续小时事件须重新读取溢价与限额':'未推断下一事件费率或参数',
 uncertaintyWindowSeconds:5};
}
function currency(D,o={}){
 const b=group(D,'currency').inputs; const E=pos(o.entry??b.entry_price,'入场价'),F=pos(o.exit??b.exit_prices[0],'退出价');
 const R=pos(o.report??F,'报告BTC美元价');
 const entryUsdtUsd=pos(b.usdt_usd_conversion,'冻结入场USD/USDT'),reportUsdtUsd=pos(o.usdtUsd??b.usdt_usd_conversion,'报告时USD/USDT');
 const side=one(o.side??'long',['long','short'],'方向'),sgn=side==='long'?1:-1;
 const q=pos(o.linearQuantity??b.linear_long_btc,'线性BTC数量'),Q=pos(o.inverseQuantity??b.inverse_long_usd,'反向USD数量');
 const linearPnl=sgn*q*(F-E),inversePnl=sgn*Q*(1/E-1/F),linearWallet=b.linear_initial_usdt+linearPnl,inverseWallet=b.inverse_initial_btc+inversePnl;
 const initialLinearReport=b.linear_initial_usdt*entryUsdtUsd,linearReportPnl=linearPnl*reportUsdtUsd,linearWalletUsd=linearWallet*reportUsdtUsd;
 const linearOriginalWalletFxPnl=b.linear_initial_usdt*(reportUsdtUsd-entryUsdtUsd),linearWealthChangeUsd=linearWalletUsd-initialLinearReport;
 const mode=one(o.mode??'isolated',['isolated','cross','portfolio'],'模式'),product=one(o.product??'linear',['linear','inverse'],'合约'),asset=one(o.collateralAsset??'BTC',['BTC','USDT'],'资产');
 const settlement=product==='linear'?'USDT':'BTC',compatible=mode!=='isolated'||asset===settlement;
 return {id:IDs.currency,entry:E,exit:F,report:R,side,linearPnl,inversePnl,inverseReportPnl:inversePnl*R,linearReportPnl,
 linearWallet,linearWalletUsd,inverseWallet,inverseWalletUsd:inverseWallet*R,
 entryUsdtUsd,reportUsdtUsd,initialLinearReport,initialInverseReport:b.inverse_initial_btc*E,
 linearOriginalWalletFxPnl,linearWealthChangeUsd,
 collateralPriceChange:b.inverse_initial_btc*(R-E),
 mode,product,collateralAsset:asset,assetModeCompatible:compatible,
 eligibilityScope:compatible?'仅币种/模式相容，不验证账户可用余额或开仓资格':'逐仓须用相应结算资产；钱包估值仍非零',
 survivalModeled:false,negativeWallet:linearWallet<0||inverseWallet<0,status:'conditional_price_only_no_liquidation_path'};
}
function liquidation(D,o={}){
 const b=group(D,'liquidation').inputs, mode=one(o.mode??'isolated',['isolated','cross','portfolio'],'模式');
 const kind=one(o.kind??'linear',['linear','inverse'],'官方例'),v=kind==='linear'?b.official_linear:b.official_inverse_branch;
 const E=pos(o.entry??v.entry,'入场价'),lev=pos(o.leverage??v.leverage,'杠杆'),m=num(o.mmr??v.MMR,'维持档位率',0,.5),fee=num(o.fee??v.taker_fee_rate,'taker费率',0,.1);
 if(lev<=1||m<=0)throw new RangeError('教学例要求杠杆>1且维持率>0');
 const qty=pos(o.quantity??(v.quantity_btc??v.quantity_usd),'数量'),extra=num(o.extra??(v.extra_margin_usdt??v.extra_margin_btc),'额外保证金',0);
 const d=v.MM_deduction,value=kind==='linear'?qty*E:qty/E,close=value*(1-1/lev)*fee,im=value/lev+close,mm=value*m-d+close;
 const denominator=kind==='linear'?qty*(1-m):qty/E-qty/(E*lev)-extra/(1-fee)-d;
 const hypothetical=denominator>0?(kind==='linear'?(E*qty-E*qty/lev-extra/(1-fee)-d)/denominator:qty*(1-m)/denominator):null;
 const validLp=hypothetical!==null&&hypothetical>0?hypothetical:null;
 const k=b.synthetic_mark,index=pos(o.index??k.index,'指数价'),last=pos(o.last??k.last,'最新成交'),basis=num(o.basis??k.average_basis,'平均基差');
 const P1=index*(1+k.last_funding_rate*k.time_until_funding_hours/k.funding_interval_denominator_hours),P2=index+basis;
 if(P2<=0)throw new RangeError('本正常mark分支须正价格');
 const normal=o.normalMark??true,mark=normal?[P1,P2,last].sort((a,b)=>a-b)[1]:null;
 // Inverse example uses its own mark, not the unrelated synthetic 36k case.
 const actualMark=kind==='inverse'?(o.inverseMark===undefined?E:pos(o.inverseMark,'反向标记价')):mark;
 const ratio=o.accountMmr===undefined||o.accountMmr===null?null:num(o.accountMmr,'教学账户MMR',0,10);
 const triggered=mode==='isolated'?(validLp===null||actualMark===null?null:kind==='linear'?actualMark<=validLp:actualMark>=validLp):(ratio===null?null:ratio>=1);
 return {id:IDs.liquidation,mode,kind,entry:E,quantity:qty,value,estimatedCloseFee:close,initialBeforeExtra:im,extra,maintenanceAtEntry:mm,
 currency:kind==='linear'?'USDT':'BTC',priceUnit:kind==='linear'?'USDT/BTC':'USD/BTC',
 lp:mode==='isolated'?validLp:null,
 display:mode==='isolated'?'单仓触发阈值':mode==='cross'?'单仓显示价仅参考；此处不计算':'单仓显示价不适用',
 P1,P2,last,mark:actualMark,normalMark:normal,accountMmr:ratio,triggered,
 lastStopTriggered:kind==='linear'?last<=k.last_price_stop_trigger:null,
 triggerState:triggered===null?'missing_required_risk_state':triggered?'triggered_not_a_fill':'not_triggered_by_selected_rule',
 executionPrice:null,bankruptcyPrice:null,
 ruleScope:'官方isolated示例/正常mark演算；cross和portfolio只比较给定账户比率，未重建风险引擎'};
}
function insurance(D,exit){const b=group(D,'liquidation').inputs.insurance_teaching;const x=pos(exit??b.actual_exit_prices[0],'另例退出价');return {bankruptcy:b.bankruptcy,trigger:b.liquidation_trigger,execution:x,quantity:b.quantity_btc,fundDelta:(x-b.bankruptcy)*b.quantity_btc,identity:'独立清算例；不接入40k头寸'};}
function collateral(D,o={}){
 const b=group(D,'collateral').inputs,t=b.official_tier_example,p=num(o.positionValue??t.position_value,'分档名义额',0,t.tier_upper_values.at(-1));
 let previous=0,MM=0;const rows=[];
 t.tier_upper_values.forEach((upper,i)=>{const used=Math.max(0,Math.min(p,upper)-previous),amount=used*t.marginal_rates[i];rows.push({from:previous,to:upper,used,rate:t.marginal_rates[i],amount});MM+=amount;previous=upper;});
 const initial=num(o.initial??t.initial_margin,'教学资金',0),c=b.teaching_collateral,qty=num(o.quantity??c.quantity_btc,'钱包BTC',0),index=pos(o.index??c.usd_index_prices[0],'转换指数');
 const ratio=num(o.ratio??c.eligible_ratio,'教学认可比例',0,1),mode=one(o.mode??'cross',['isolated','cross','portfolio'],'模式');
 const headline=qty*index,theoreticalEligible=headline*ratio,modeCompatible=mode!=='isolated';
 return {id:IDs.collateral,rows,MM,initial,snapshotSurplus:initial-MM,positionValue:p,headline,ratio,theoreticalEligible,
 eligible:modeCompatible?theoreticalEligible:null,excluded:modeCompatible?headline-theoreticalEligible:null,mode,
 modeCompatible,scope:'分档USDT例和无仓BTC钱包例彼此独立；isolated选项指USDT合约',closingFeeIncluded:false};
}
function redemption(D,o={}){
 const b=group(D,'redemption').inputs.teaching_routes;
 const holder=one(o.holder??'type_a',['type_a','type_b','venue'],'持有人场景'),tokens=pos(o.tokens??b.tokens_usdc,'USDC数量');
 const cost=num(o.issuerCost??b.assumed_issuer_bank_cost_usd,'通道成本',0),bid=pos(o.bid??b.secondary_bid_usd_per_usdc,'教学买价'),fr=num(o.feeRate??b.assumed_secondary_fee_rate,'出售费率',0,1);
 const issuerOnline=o.issuerOnline??true,secondaryReady=o.secondaryReady??true,canWithdraw=o.canWithdraw??false;
 const minted=holder==='type_a'||(holder==='venue'&&(o.hasMintAccount??false));
 const tokenAccessible=holder!=='venue'||canWithdraw;
 const directReachable=minted&&tokenAccessible&&issuerOnline,secondaryReachable=tokenAccessible&&secondaryReady;
 const gross=tokens*bid,fee=gross*fr;
 const direct=directReachable?tokens*b.issuer_gross_usd_per_usdc-cost:null,secondary=secondaryReachable?gross-fee:null;
 return {id:IDs.redemption,holder,tokens,directReachable,secondaryReachable,direct,secondary,secondaryGross:secondaryReachable?gross:null,secondaryFee:secondaryReachable?fee:null,
 directReference:tokens-cost,secondaryReference:gross-fee,
 directReason:directReachable?'条件已给定，可演算净额':!minted?'未具备合资格Mint账户':!tokenAccessible?'先解决场所提款/代币可达性':'发行人/银行通道不可处理',
 secondaryReason:secondaryReachable?'假设全量可按给定买价成交':'提款或二级交易条件未满足',
 status:'route_conditions_before_cash_comparison',arrivedCash:null};
}
function fundRecord(D,o={}){
 const b=group(D,'settlement').inputs,branch=one(o.branch??'migration',['migration','transfer','dividend'],'份额操作');
 const permission=o.permission??true;
 if(branch==='migration')return {branch,permission,sharesBefore:b.fund_migration.shares_before,sharesAfter:b.fund_migration.shares_before,
 oldChain:permission?0:b.fund_migration.shares_before,newChain:permission?b.fund_migration.shares_before:0,status:permission?'approved_record_migration':'not_authorized_no_record_change',paymentConfirmed:false};
 if(branch==='transfer')return {branch,permission,sharesTransferred:permission?b.fund_migration.shares_before:0,otherPaymentConfirmed:false,
 status:permission?'fund_share_leg_only':'wallet_not_permitted',note:'未提供另一支付腿的确认，不能推断券款对付'};
 return {branch,transferorFraction:b.dividend_allocation.transferor_hours/b.dividend_allocation.cycle_hours,
 transfereeFraction:b.dividend_allocation.transferee_hours/b.dividend_allocation.cycle_hours,dividendAmount:null,status:'fraction_only_no_dividend_amount'};
}
function pvpStart(D,o={}){
 const b=group(D,'settlement').inputs.teaching_pvp,B=o.insufficient?b.insufficient_B_EUR:b.B_initial.EUR;
 return {phase:'initial',A:clone(b.A_initial),B:{USD:0,EUR:B},initial:{A:clone(b.A_initial),B:{USD:0,EUR:B}},
 locks:{A_USD:0,B_EUR:0},pay:{USD:b.A_pays_USD,EUR:b.B_pays_EUR},log:['已给定100 USD / 90 EUR指令；尚未验证、锁资或支付'],commits:0};
}
function pvpStep(s,action,o={}){
 let n=clone(s); const release=()=>{n.locks={A_USD:0,B_EUR:0};};
 if(['committed','cancelled'].includes(n.phase))return n;
 if(action==='validate'){
  if(n.phase!=='initial')return n;
  if(o.valid===false){n.phase='cancelled';n.log.push('验证失败；不进入锁定');release();}
  else{n.phase='validated';n.log.push('双方检查及就绪；尚未支付');}
 }else if(action==='lock'){
  if(n.phase!=='validated')return n;
  if(n.A.USD<n.pay.USD){n.phase='cancelled';n.log.push('A余额不足；取消');release();return n;}
  n.locks.A_USD=n.pay.USD;n.log.push('A为本指令锁定100 USD');
  if(n.B.EUR<n.pay.EUR){n.phase='cancelled';n.log.push('B不足90 EUR；协调cancel，释放A的准备锁');release();return n;}
  n.locks.B_EUR=n.pay.EUR;n.phase='locked';n.log.push('B锁定90 EUR；两腿有限授权就绪，仍未转账');
 }else if(action==='commit'){
  if(n.phase!=='locked')return n;
  if(o.authorized===false){n.phase='cancelled';n.log.push('最终授权/时限条件失败；释放两腿');release();return n;}
  n.A.USD-=n.pay.USD;n.B.USD+=n.pay.USD;n.B.EUR-=n.pay.EUR;n.A.EUR+=n.pay.EUR;
  release();n.phase='committed';n.commits+=1;n.log.push('按同一commit结果转移两币；不代表法律最终性已由本例证明');
 }else if(action==='cancel'){
  n.phase='cancelled';release();n.log.push('取消；释放准备锁，无本金腿完成');
 }else throw new RangeError('未知PvP动作');
 return n;
}
function pvpView(s){return {...clone(s),free:{A_USD:s.A.USD-s.locks.A_USD,B_EUR:s.B.EUR-s.locks.B_EUR},totals:{USD:s.A.USD+s.B.USD,EUR:s.A.EUR+s.B.EUR}};}
function amm(D,o={}){
 const b=group(D,'amm').inputs,L=pos(o.liquidity??b.pool_active_liquidity,'全池/唯一头寸L'),fee=num(o.fee??b.swap_fee_rate,'swap费率',0,.5);
 const gross=num(o.gross??b.gross_y_inputs[0],'指定Y输入',0,1e6),s0=Math.sqrt(b.initial_price),sa=Math.sqrt(b.lower_price),sb=Math.sqrt(b.upper_price),sl=Math.sqrt(b.price_limit);
 // Both frozen upper boundary and user limit are 1.21. No cross-tick extension is run.
 const target=Math.min(sb,sl),maxNet=L*(target-s0),maxGross=maxNet/(1-fee),consumed=Math.min(gross,maxGross),net=consumed*(1-fee),fees=consumed-net;
 const s=Math.min(target,s0+net/L),out=L*(1/s0-1/s),P=s*s,unused=Math.max(0,gross-consumed);
 const x0=L*(1/s0-1/sb),y0=L*(s0-sa),x=Math.max(0,L*(1/s-1/sb)),y=L*(s-sa);
 const hit=gross>0&&s>=sl-1e-12;
 const share=b.fee_allocation_example;
 return {id:IDs.amm,L,positionL:L,fee,gross,consumed,net,fees,unused,out,P,startP:b.initial_price,limit:b.price_limit,
 average:out>1e-13?consumed/out:null,x0,y0,x,y,virtualX:L/s,virtualY:L*s,
 feeGrowthThisSwap:fees/L,hitLimit:hit,rangeBoundaryReached:s>=sb-1e-12,
 status:hit?'stopped_at_user_price_limit':gross===0?'no_trade':'filled_within_range',
 beyondLiquidityDoesNotOverrideLimit:true,
 feeAllocation:{identity:'独立多LP分配例',poolL:share.pool_active_liquidity,positionL:share.position_liquidity,otherL:share.other_active_liquidity,
 totalFee:share.fee_y_total,perL:share.fee_y_total/share.pool_active_liquidity,positionFee:share.fee_y_total*share.position_liquidity/share.pool_active_liquidity}};
}
return {IDs,clamp,funding,currency,liquidation,insurance,collateral,redemption,fundRecord,pvpStart,pvpStep,pvpView,amm};
});
