
/* Pure teaching engine. Reads one adopted input object and the frozen EXP-STATE-01.
   No accounts, live quotes, network calls or mutable persistent market state. */
(function(root){
"use strict";
const must=(c,m)=>{if(!c)throw new Error(m);};
const num=(x,n)=>{must(x!==null&&x!==undefined&&!(typeof x==="string"&&x.trim()===""),n+"不能为空");x=Number(x);must(Number.isFinite(x),n+"必须是有限数");return x;};
const positive=(x,n)=>{x=num(x,n);must(x>0,n+"必须大于0");return x;};
const nonneg=(x,n)=>{x=num(x,n);must(x>=0,n+"不能为负");return x;};
const integer=(x,n,zero=false)=>{x=num(x,n);must(Number.isInteger(x)&&(zero?x>=0:x>0),n+"必须为"+(zero?"非负":"正")+"整数");return x;};
const val=x=>typeof x==="object"&&x!==null?Number(x.decimal):Number(x);
const clone=x=>JSON.parse(JSON.stringify(x));
function Phi(x){
  if(x>=9)return 1;if(x<=-9)return 0;
  const a=Math.abs(x);let term=a,sum=a;
  for(let k=1;k<400;k++){term*=a*a/(2*k+1);sum+=term;if(term<sum*2e-16)break;}
  const y=.5+Math.sign(x)*Math.exp(-a*a/2)*sum/Math.sqrt(2*Math.PI);
  return Math.max(0,Math.min(1,y));
}
const phi=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
function bs(S,K,T,r,sigma,kind="call",div=0){
 S=positive(S,"S");K=positive(K,"K");T=nonneg(T,"剩余年数");r=num(r,"r");sigma=nonneg(sigma,"sigma");div=num(div,"股息率");
 must(kind==="call"||kind==="put","类型须为call/put");
 if(T===0)return Math.max(kind==="call"?S-K:K-S,0);
 const sd=S*Math.exp(-div*T),kd=K*Math.exp(-r*T);
 if(sigma===0)return Math.max(kind==="call"?sd-kd:kd-sd,0);
 const a=sigma*Math.sqrt(T),d1=(Math.log(S/K)+(r-div+sigma*sigma/2)*T)/a,d2=d1-a;
 return kind==="call"?sd*Phi(d1)-kd*Phi(d2):kd*Phi(-d2)-sd*Phi(-d1);
}
function implied(S,K,T,r,price,kind="call",div=0){
 positive(S,"S");positive(K,"K");positive(T,"剩余年数");price=num(price,"报价");
 const sd=S*Math.exp(-div*T),kd=K*Math.exp(-r*T);
 const lower=Math.max(kind==="call"?sd-kd:kd-sd,0),upper=kind==="call"?sd:kd;
 if(!(price>lower&&price<upper))return {status:"outside_model_bounds",iv:null,lower,upper};
 let lo=0,hi=1;
 while(bs(S,K,T,r,hi,kind,div)<price&&hi<64)hi*=2;
 if(bs(S,K,T,r,hi,kind,div)<price)return {status:"not_bracketed",iv:null,lower,upper};
 for(let i=0;i<90;i++){const m=(lo+hi)/2;if(bs(S,K,T,r,m,kind,div)>price)hi=m;else lo=m;}
 return {status:"ok",iv:(lo+hi)/2,lower,upper};
}
function Greeks(S,K,T,r,sigma,div=0){
 positive(T,"T");positive(sigma,"sigma");
 const d1=(Math.log(S/K)+(r-div+sigma*sigma/2)*T)/(sigma*Math.sqrt(T)),d2=d1-sigma*Math.sqrt(T);
 const dis=Math.exp(-div*T),price=bs(S,K,T,r,sigma,"call",div);
 return {price,delta:dis*Phi(d1),gamma:dis*phi(d1)/(S*sigma*Math.sqrt(T)),
 vegaPerPpt:S*dis*phi(d1)*Math.sqrt(T)*.01,
 thetaPerDay:(-S*dis*phi(d1)*sigma/(2*Math.sqrt(T))-r*K*Math.exp(-r*T)*Phi(d2)+div*S*dis*Phi(d1))/365,
 qITM:Phi(d2),d1,d2};
}
function contract(D,x={}){
 const product=x.product||"equity",kind=x.kind||"call",side=x.side||"long";
 must(["equity","etf","spxw"].includes(product),"未知产品");must(["call","put"].includes(kind),"未知权利");must(["long","short"].includes(side),"未知方向");
 const units=100,n=integer(x.contracts??1,"合约数"),K=nonneg(x.strike??(product==="spxw"?5000:100),"行权价");
 const premium=nonneg(x.premium??(product==="spxw"?50:4),"权利金"),ST=nonneg(x.terminal??(product==="spxw"?5025:110),"终值");
 const sign=side==="long"?1:-1,pay=Math.max(kind==="call"?ST-K:K-ST,0)*units*n;
 return {product,kind,side,contracts:n,strike:K,premium,terminal:ST,multiplier:units,
   style:product==="spxw"?"European":"American",settlement:product==="spxw"?"现金":"实物",
   premiumCash:-sign*premium*units*n,payoff:sign*pay,nominalPnl:sign*(pay-premium*units*n),
   grossStrikeCash:product==="spxw"?null:(kind==="call"?-sign:sign)*K*units*n,
   sharesIfExercised:product==="spxw"?0:(kind==="call"?sign:-sign)*units*n,
   exerciseFlowStatus:"conditional_on_exercise; not automatic exercise or account funding",
   dataIdentity:"real product units/style; all prices synthetic"};
}
function wealth(D,x={}){
 const o=D.odd_equal_wealth,ST=nonneg(x.terminal??62,"到期股票价格");
 const r=num(x.cashRate??o.simple_annual_cash_rate,"现金简单年率");
 must(r>=-.5&&r<=1,"教学现金率范围−50%至100%");
 const interest=o.mixed_cash_usd*r*o.horizon_years,onePay=Math.max(ST-o.strike_usd,0)*o.shares_per_contract;
 const premium=o.premium_per_share_usd*o.shares_per_contract;
 const gains=[(ST-o.spot_usd)*o.stock_position_shares,onePay-premium+interest,o.all_option_contracts*(onePay-premium)];
 return {terminal:ST,interest,payoffOne:onePay,onePremium:premium,gains,
 wealth:gains.map(g=>g+o.initial_wealth_usd),returns:gains.map(g=>g/o.initial_wealth_usd),
 premiumReturn:(onePay-premium)/premium,initialWealth:o.initial_wealth_usd};
}
function lifecycle(D,x={}){
 const mode=x.mode||"physical";
 if(mode==="physical"){
   const c=D.cash_examples.equity_call,m=c.multiplier;
   const funds=nonneg(x.funds??10000,"行权可动用现金"),action=x.action||"close";
   must(["close","exercise"].includes(action),"未知操作");
   const gross=c.strike*m,premium=c.purchase_premium*m;
   if(action==="close")return {mode,status:"illustrated_close",premium,receipt:c.later_option_bid*m,pnl:(c.later_option_bid-c.purchase_premium)*m,shares:0,
      rows:[["权利金交收",-premium,0],["卖出平仓交收",c.later_option_bid*m,0]],grossStrikeCash:0};
   if(funds<gross)return {mode,status:"insufficient_sequential_exercise_cash",premium,requiredGross: gross,available:funds,shortfall:gross-funds,pnl:null,rows:[["已付权利金",-premium,0]],shares:null};
   return {mode,status:"illustrated_exercise_then_sale",premium,grossStrikeCash:gross,receipt:c.later_underlying_bid*m,pnl:(c.later_underlying_bid-c.strike-c.purchase_premium)*m,shares:0,
      rows:[["权利金交收",-premium,0],["行权股票交收",-gross,m],["按教学bid卖出股票",c.later_underlying_bid*m,-m]]};
 }
 if(mode==="index"){
   const c=D.cash_examples.spxw_call,ST=nonneg(x.settlement??c.settlement_value_points,"结算值");
   const p=c.purchase_premium_points*c.multiplier_usd_per_point,H=Math.max(ST-c.strike_points,0)*c.multiplier_usd_per_point;
   return {mode,status:"illustrated_expiry",premium:p,payoff:H,pnl:H-p,shares:0,rows:[["权利金",-p,0],["到期现金支付",H,0]]};
 }
 must(mode==="writer","未知生命周期分支");
 const c=D.cash_examples.uncovered_equity_call_margin,m=c.multiplier;
 const S=nonneg(x.laterSpot??c.later_spot,"后续股价"),V=nonneg(x.laterMark??c.later_option_mark,"后续期权标记");
 const external=nonneg(x.external??c.default_external_cash_available,"可追加现金");
 must(V+1e-10>=Math.max(S-c.strike,0)&&V<=S+1e-10,"本无费用普通美式call的教学标记需处于立即行权值与股价之间");
 function collateral(s,v){return m*(v+Math.max(c.base_fraction*s-Math.max(c.strike-s,0),c.minimum_call_fraction*s));}
 const initial=collateral(c.initial_spot,c.initial_option_premium),premium=c.initial_option_premium*m,liability=V*m;
 const req=collateral(S,V),need=Math.max(req-initial,0),paid=Math.min(need,external),short=need-paid,after=initial+paid;
 const rows=[
   {stage:"开仓后",cash:initial,liability:premium,equity:initial-premium,newCapital:initial-premium},
   {stage:"价格变化、未补款",cash:initial,liability,equity:initial-liability,newCapital:0},
   {stage:short>0?"部分补款、仍有缺口":"补足要求",cash:after,liability,equity:after-liability,newCapital:paid}
 ];
 if(short<=1e-8)rows.push({stage:"按标记价买回平仓（教学）",cash:after-liability,liability:0,equity:after-liability,newCapital:0});
 return {mode,status:short>1e-8?"stopped_at_unmet_requirement":"illustrated_funded_close",rows,
   initialCollateral:initial,requiredCollateral:req,requiredEquity:req-liability,requiredTopup:need,paid,shortfall:short,
   markPnl:premium-liability,realizedPnl:short>1e-8?null:premium-liability,
   totalOwnCapital:initial-premium+paid,endingCash:short>1e-8?null:after-liability,
   noFuturesVM:true,noHouseMargin:true};
}
function earlyTree(D,n=2){
 const e=D.early_exercise_counterexample;
 n=integer(n,"期数");must(n===1||n===2,"本反例只采用一期或两期");
 const S=e.spot,K=e.strike,u=e.up_factor,d=e.down_factor,R=e.gross_cash_growth_per_period,q=(R-d)/(u-d);
 let eu=[],am=[],nodes=[];
 for(let j=0;j<=n;j++){let s=S*Math.pow(u,j)*Math.pow(d,n-j),pay=Math.max(K-s,0);eu.push(pay);am.push(pay);nodes.push({depth:n,ups:j,spot:s,exercise:pay,continuation:null,european:pay,american:pay,action:"到期"});}
 for(let t=n-1;t>=0;t--){
   const ne=[],na=[];
   for(let j=0;j<=t;j++){const s=S*Math.pow(u,j)*Math.pow(d,t-j),exercise=Math.max(K-s,0);
     const ec=(q*eu[j+1]+(1-q)*eu[j])/R,ac=(q*am[j+1]+(1-q)*am[j])/R;
     ne.push(ec);na.push(Math.max(exercise,ac));nodes.push({depth:t,ups:j,spot:s,exercise,continuation:ac,european:ec,american:Math.max(exercise,ac),action:exercise>ac?"立即行权":"继续持有"});
   }eu=ne;am=na;
 }
 nodes.sort((a,b)=>a.depth-b.depth||b.ups-a.ups);
 return {periods:n,q,market:clone(e),european:eu[0],american:am[0],intrinsic:K-S,residual:eu[0]-(K-S),nodes};
}
function surface(D){
 const s=D.surface,rows=[];
 for(const mat of s.maturities)for(let i=0;i<s.strikes_points.length;i++){
   const K=s.strikes_points[i],T=mat.days/365,sigma=mat.sigma_by_strike[i],row={days:mat.days,strike:K,sigma};
   for(const kind of ["call","put"]){
     const model=bs(s.spot_index_points,K,T,s.annual_continuous_rate,sigma,kind,s.annual_continuous_dividend_yield);
     const tick=model<3?.05:.1,mid=Math.round(model/tick)*tick,quotes={bid:Number((mid-s.quote_half_width_points).toFixed(10)),mid:Number(mid.toFixed(10)),ask:Number((mid+s.quote_half_width_points).toFixed(10))};
     const ivs={};for(const side of ["bid","mid","ask"])ivs[side]=implied(s.spot_index_points,K,T,s.annual_continuous_rate,quotes[side],kind,s.annual_continuous_dividend_yield).iv;
     row[kind]={model,quotes,iv:ivs,tick};
   }rows.push(row);
 }return rows;
}
function inverse(D,x={}){
 const days=Number(x.days??90),strike=Number(x.strike??5000),kind=x.kind||"call",side=x.side||"mid";
 const row=surface(D).find(z=>z.days===days&&z.strike===strike);must(!!row,"网格中不存在这组日期与执行价");must(kind==="call"||kind==="put","未知类型");
 let p;if(side==="custom")p=num(x.quote,"自定义报价");else {must(["bid","mid","ask"].includes(side),"未知报价侧");p=row[kind].quotes[side];}
 const s=D.surface,result=implied(s.spot_index_points,strike,days/365,s.annual_continuous_rate,p,kind,s.annual_continuous_dividend_yield);
 return {...result,days,strike,kind,side,price:p,contractCash:p*s.contract_multiplier_usd_per_point,row};
}
function localRisk(D,x={}){
 const s=D.surface,g=s.greek_example,S=s.spot_index_points,T=g.days/365,sigma=g.sigma;
 const ds=num(x.ds??50,"点数变化"),dv=num(x.dvPpt??0,"波动率百分点变化"),dt=nonneg(x.elapsedDays??0,"流逝天数");
 must(dt<g.days,"局部Greeks实验要求仍有剩余期限");must(S+ds>0,"变动后标的必须为正");must(sigma+dv/100>0,"变动后波动率必须为正");
 const base=Greeks(S,g.strike,T,s.annual_continuous_rate,sigma,s.annual_continuous_dividend_yield);
 const exact=bs(S+ds,g.strike,T-dt/365,s.annual_continuous_rate,sigma+dv/100,"call",s.annual_continuous_dividend_yield)-base.price;
 const linear=base.delta*ds+base.vegaPerPpt*dv+base.thetaPerDay*dt,quadratic=linear+.5*base.gamma*ds*ds;
 return {base,ds,dvPpt:dv,elapsedDays:dt,linear,quadratic,exact,errorLinear:linear-exact,errorQuadratic:quadratic-exact,
   exactCash:exact*s.contract_multiplier_usd_per_point,multiplier:s.contract_multiplier_usd_per_point,
   limitation:"delta/gamma curvature only in S; cross/time/vol second derivatives omitted"};
}
function parity(D,x={}){
 const p=clone(D.parity_quotes),quotes={};
 for(const k of ["stock","call","put"]){
   const bid=nonneg(x[k+"Bid"]??p[k].bid,k+" bid"),ask=nonneg(x[k+"Ask"]??p[k].ask,k+" ask");
   must(bid<=ask,k+" bid不可大于ask");quotes[k]={bid,ask,mid:(bid+ask)/2};
 }
 const fee=nonneg(x.fee??0,"额外费用"),capital=nonneg(x.capital??p.default_capital_available,"可用启动资金"),PV=p.strike/p.gross_cash_growth;
 const a=quotes.call.bid+PV-quotes.put.ask-quotes.stock.ask-fee;
 const b=quotes.stock.bid+quotes.put.bid-quotes.call.ask-PV-fee;
 const conditions={borrowing:x.borrowing??true,stockShort:x.stockShort??true,depth:x.depth??true,synchronous:x.synchronous??true,terms:x.terms??true};
 const all=conditions.depth&&conditions.synchronous&&conditions.terms;
 const dir=(receipt,available,label)=>({label,initialNetReceipt:receipt,neededCapital:Math.max(-receipt,0),
   status:!all||!available?"missing_execution_conditions":Math.max(-receipt,0)>capital?"insufficient_model_start_capital":receipt>1e-9?"positive_initial_receipt_under_all_stated_assumptions":"no_positive_initial_receipt",
   terminalNet:0,capitalModel:"simultaneous net-funding with stated permissions; broker gross margin not modeled"});
 return {quotes,PV,midGap:quotes.call.mid-quotes.put.mid-quotes.stock.mid+PV,conditions,fee,
   directions:[dir(a,conditions.borrowing,"卖call＋借PV(K)－买put－买股票"),dir(b,conditions.stockShort,"卖股票＋卖put－买call－存PV(K)")],
   identity:"separate synthetic executable-side model; core EXP-STATE-01 unchanged"};
}
function twoState(F,x={}){
 const st=F.two_state, B0=val(st.B_0),R=val(st.B_1)/B0,S=val(st.S_0),[Su,Sd]=st.S_1.map(val),[Hu,Hd]=st.claim.map(val);
 const P=num(x.p??val(st.P_illustrative_not_estimated[0]),"P(up)");must(P>0&&P<1,"P须在(0,1)且保留全支持");
 const delta=(Hu-Hd)/(Su-Sd),beta=(Hd-delta*Sd)/(R*B0),C=beta*B0+delta*S,qu=(R*S-Sd)/(Su-Sd),Q=[qu,1-qu],pi=Q.map(q=>q/R);
 return {stateOrder:st.state_order,strike:val(st.strike),P:[P,1-P],Q,pi,delta,beta,
 initialCash:beta*B0,terminalCash:beta*R*B0,price:C,terminal:[beta*R*B0+delta*Su,beta*R*B0+delta*Sd],
 density:[qu/P,(1-qu)/(1-P)],kernel:[pi[0]/P,pi[1]/(1-P)],expectedPayoff:P*Hu+(1-P)*Hd,
 fundedExpectedPnl:P*Hu+(1-P)*Hd-R*C,cashFactor:R,coreDataUnchanged:true};
}
function threeState(F,x={}){
 const st=F.three_state_incomplete,mode=x.mode||"family";
 const B0=val(st.B_0),B1=val(st.B_1),R=B1/B0,S=val(st.S_0),prices=st.S_1.map(val),pay=st.call_payoff.map(val);
 if(mode==="lower"||mode==="upper"){
   const a=st.endpoint_arbitrages.find(a=>a.endpoint===mode),h=a.holdings_B_S_C.map(val),c=val(a.claim_price);
   return {mode,status:"endpoint_arbitrage_not_valid_EMM",strike:val(st.call_strike),price:c,holdings:h,
   initialCost:h[0]*B0+h[1]*S+h[2]*c,terminal:prices.map((s,i)=>h[0]*B1+h[1]*s+h[2]*pay[i])};
 }
 if(mode==="complete"){
   const a=F.three_state_augmented_complete;
   return {mode,status:"augmented_complete",price:val(a.traded_call_price),Q:a.Q.map(val),pi:a.state_prices.map(val),rank:a.rank,
     digital:a.digital_replications.map(z=>({state:z.state,holdings:z.holdings_B_S_C.map(val),cost:val(z.initial_cost),
       terminal:prices.map((s,i)=>val(z.holdings_B_S_C[0])*B1+val(z.holdings_B_S_C[1])*s+val(z.holdings_B_S_C[2])*pay[i])}))};
 }
 const t=num(x.t??val(st.Q_family.default_t),"t"),low=val(st.Q_family.open_parameter_interval.lower),up=val(st.Q_family.open_parameter_interval.upper);
 must(t>low&&t<up,"合法EMM要求0<t<0.45；端点请用套利演示按钮");
 const qUp=(R*S-prices[1]+(prices[1]-prices[0])*t)/(prices[2]-prices[1]),Q=[t,1-t-qUp,qUp],pi=Q.map(q=>q/R),c=pi.reduce((a,p,i)=>a+p*pay[i],0);
 return {mode,status:"incomplete_family",t,Q,pi,price:c,strike:val(st.call_strike),range:[val(st.claim_arbitrage_free_price_interval.lower),val(st.claim_arbitrage_free_price_interval.upper)],endpointsIncluded:false};
}
function variance(D,x={}){
 const o=D.vix.official_sample,official=100*Math.sqrt((o.minutes_near/o.year_minutes*o.near_variance*(o.minutes_next-o.target_minutes)/(o.minutes_next-o.minutes_near)+o.minutes_next/o.year_minutes*o.next_variance*(o.target_minutes-o.minutes_near)/(o.minutes_next-o.minutes_near))/(o.target_minutes/o.year_minutes));
 const t=D.vix.two_term_teaching_variant,near=positive(x.nearDays??t.days_near,"近到期天数"),far=positive(x.farDays??t.days_next,"远到期天数"),target=positive(x.targetDays??t.target_days,"目标天数");
 must(near<far&&target>=near&&target<=far,"须满足0<近到期<远到期，目标位于两者之间");
 const vn=nonneg(x.nearVol??t.near_vol,"近波动率"),vf=nonneg(x.farVol??t.next_vol,"远波动率"),w=(far-target)/(far-near);
 const targetVariance=(w*near*vn*vn+(1-w)*far*vf*vf)/target;
 const os=o.one_strike,single=os.delta_K/(os.strike*os.strike)*Math.exp(os.R_rounded*os.T_rounded)*os.mid_quote;
 return {near,far,target,vn,vf,wNear:w,variance:targetVariance,vol:Math.sqrt(targetVariance),simpleAverage:(vn+vf)/2,
   officialFinal:official,officialDisplayed:o.displayed_vix,oneStrikeContribution:single,
   officialIdentity:o.identity||"official hypothetical Appendix3; final interpolation only"};
}
function information(D,x={}){
 const a=D.information_example,bc=integer(x.bc??a.buyer_call_contracts,"买方call份数",true),sc=integer(x.sc??a.seller_call_contracts,"卖方call份数",true),
 bp=integer(x.bp??a.buyer_put_contracts,"买方put份数",true),sp=integer(x.sp??a.seller_put_contracts,"卖方put份数",true);
 const baseline=num(x.baseline??a.non_event_mean_TOI,"基线");must(baseline>=-1&&baseline<=1,"TOI均值基线应在[-1,1]");
 const total=bc+sc+bp+sp,calls=bc+sc,puts=bp+sp,signed=bc-sc-bp+sp,TOI=total?signed/total:null;
 const r=a.table_2_column_3,slope=r.OI_coefficient+r.OI_macro_interaction;
 return {bc,sc,bp,sp,total,calls,puts,signed,TOI,abnormal:TOI===null?null:TOI-baseline,putCallRatio:calls?puts/calls:null,baseline,
   status:!total?"undefined_zero_volume":total<10?"toy_value_below_paper_volume_filter":"toy_computed_not_research_replication",
   standardizedMacroSlope:slope,pooledCoefficient:r.column_1_OI_coefficient,ratioToPooled:slope/r.column_1_OI_coefficient,
   unit:"contracts classified by initiating side, size weighted; not transaction counts"};
}
const API={Phi,phi,bs,implied,Greeks,contract,wealth,lifecycle,earlyTree,surface,inverse,localRisk,parity,twoState,threeState,variance,information};
root.MEFG_ENGINE=API;if(typeof module!=="undefined"&&module.exports)module.exports=API;
})(typeof window!=="undefined"?window:globalThis);
