/* M-B teaching engine. No network, no market data and no account actions.
 * Every price/funding experiment is synthetic. The engine never mutates inputs.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.MB_ENGINE = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const finite = x => typeof x === "number" && Number.isFinite(x);
  const count = x => Number.isSafeInteger(x) && x >= 0 && x <= 1e9;
  const money = x => finite(x) && x >= 0 && x <= 1e12;
  const error = (msg, details={}) => ({status:"invalid", applied:false, after:null, errors:[msg], ...details});
  const blocked = (msg, details={}) => ({status:"blocked", applied:false, after:null, errors:[msg], ...details});
  const tol = 1e-7;
  function capital(x) {
    const {V,C,N,action}=x;
    if (!money(V)||V<=0||!money(C)||C>V||!count(N)||N===0)
      return error("需 V>0、0≤C≤V、N为正整数；本模型把现金包含在权益经济价值中.");
    const before={V,C,N,perShare:V/N};
    if (!["issue","repurchase","dividend"].includes(action)) return error("未知公司行动.",{before});
    let q=0, transfer=0, V1=V,C1=C,N1=N, delta=0;
    if (action==="dividend") {
      if (!money(x.d)) return error("每股分配须为非负有限金额.",{before});
      transfer=x.d*N;
      if (transfer>C+tol) return blocked("分配所需现金不足；不自动融资.",{before,requiredCash:transfer,shortfall:transfer-C});
      V1=V-transfer; C1=Math.max(0,C-transfer); delta=-x.d;
    } else {
      const {p}=x; q=x.q;
      if (!count(q)||!money(p)||p<=0||p*q>1e12) return error("数量须为非负整数，交易价须为正，乘积不超过本实验数值范围.",{before});
      if (action==="repurchase" && q>=N) return blocked("回购数量必须小于在外股数，保留剩余每股量的分母.",{before});
      transfer=p*q;
      if (action==="repurchase" && transfer>C+tol)
        return blocked("回购现金不足；经济价值为正不代表付得起钱.",{before,requiredCash:transfer,shortfall:transfer-C});
      const sign=action==="issue"?1:-1;
      V1=V+sign*transfer; C1=Math.max(0,C+sign*transfer); N1=N+sign*q;
      if (V1>1e12||C1>1e12||N1>1e9) return error("操作后超出本实验有限数值范围.",{before});
      delta=action==="issue" ? q*(p-before.perShare)/(N+q) : q*(before.perShare-p)/(N-q);
    }
    const h=x.h===undefined?0:x.h;
    if (!count(h)||h>N1||h>N) return error("持续持有者的股数不能超过交易前或交易后的在外股数.",{before});
    const received=action==="dividend"?h*x.d:0;
    return {status:"calculated",applied:true,errors:[],identity:"synthetic",
      before,after:{V:V1,C:C1,N:N1,perShare:V1/N1},delta,
      cashTransfer:transfer,companyCashChange:C1-C,
      retained:{shares:h,beforeFraction:h/N,afterFraction:h/N1,beforeValue:h*before.perShare,
        afterValue:h*V1/N1,receivedCash:received,totalAfter:h*V1/N1+received},
      outsiderFlow:action==="issue"?"新投资者付款给公司":action==="repurchase"?"公司付款给出售股份者":"公司付款给符合条件的持有人"};
  }
  function nav(x) {
    if (x.asset_scope!==x.share_scope || !x.asset_scope) return error("资产分子与份额分母不属于同一类别.");
    if (x.asset_time!==x.share_time || !x.asset_time) return error("NAV分子分母不是同一时点.");
    if (!money(x.assets)||!money(x.liabilities)||x.assets<=x.liabilities||!count(x.shares)||x.shares<=0)
      return error("本实验需正净资产及正的在外份额；不在此模拟清算.");
    return {status:"calculated",applied:false,net:x.assets-x.liabilities,nav:(x.assets-x.liabilities)/x.shares,
            shares:x.shares,assets:x.assets,liabilities:x.liabilities,errors:[]};
  }
  function fundFlow(x, mode, q) {
    const n=nav(x); if(n.status!=="calculated") return n;
    if(!["create","redeem"].includes(mode)||!count(q)) return error("申赎数量须为非负整数且方向有效.");
    if(mode==="redeem" && q>=x.shares) return blocked("持续经营模型要求赎回后份额大于零；不计算0/0.",{before:n});
    const sign=mode==="create"?1:-1;
    const basketValue=q*n.nav, assets=x.assets+sign*basketValue, shares=x.shares+sign*q;
    if(assets>1e12||shares>1e9) return error("操作后超出本实验有限数值范围.");
    const next={...x,assets,shares,
      holdings:q===0?x.holdings:null,
      holdings_state:q===0?x.holdings_state:"aggregate_only_after_flow"};
    const n1=nav(next);
    if(n1.status!=="calculated") return n1;
    return {status:"calculated",applied:true,identity:"synthetic",before:n,after:n1,
      basketValue,units:q,mode,nextInput:next,
      assumptions:"按同口径公允值交换；本函数只追踪basket/in-kind教学分支中的总资产、负债及份额，费用由AP承担，未模拟现金申赎、custom basket、篮子成分或基金清算.",
      errors:[]};
  }
  function distribution(x,d,cash) {
    const n=nav(x);if(n.status!=="calculated")return n;
    if(!money(d)||!money(cash)||cash>x.assets)return error("分配和可用现金输入无效.");
    const required=d*x.shares;
    if(required>cash+tol)return blocked("基金现金不足，模型不自动卖出资产或借钱.",{requiredCash:required,shortfall:required-cash});
    if(required>=n.net)return blocked("本实验要求分配后净资产仍为正.");
    return {status:"calculated",applied:true,before:n,after:nav({...x,assets:x.assets-required}),
      cashAfter:Math.max(0,cash-required),distributionTotal:required,perShare:d,errors:[]};
  }
  function apCycle(fund,x) {
    const n=nav(fund); if(n.status!=="calculated")return n;
    const side=x.side;
    if(!["create","redeem"].includes(side)||!count(x.unit_size)||x.unit_size<=0||!count(x.blocks)||x.blocks<=0)
      return error("有效方向、正整数申赎单位和块数是必要输入.");
    const units=x.unit_size*x.blocks;
    if(!count(units))return error("总份数超出实验范围.");
    for (const k of ["etf_bid","etf_ask","basket_bid","basket_ask"])
      if(!money(x[k])||x[k]<=0)return error("ETF和篮子报价须为正的有限金额.");
    if(x.etf_bid>x.etf_ask||x.basket_bid>x.basket_ask)return error("拒绝交叉bid/ask；这不是本例可用报价.");
    if(!money(x.other_cost_per_share)||!money(x.cash))return error("成本和现金须为非负有限金额.");
    for(const k of ["etf_bid_depth","etf_ask_depth","basket_buy_capacity","basket_sell_capacity"])
      if(!count(x[k]))return error("可用深度须为非负整数份.");
    const midpoint=(x.etf_bid+x.etf_ask)/2;
    const quote={midpoint,referenceNAV:n.nav,referencePremiumBps:(midpoint/n.nav-1)*10000,
      quoteType:"synthetic_bid_ask_midpoint",time:"teaching-t0"};
    const reasons=[];
    if(x.authorized!==true)reasons.push("没有本例所需AP申赎权限");
    if(x.window_open!==true)reasons.push("申赎窗口关闭");
    if(x.synchronized!==true)reasons.push("两腿报价未确认同步且在全部步骤有效");
    const etfDepth=side==="create"?x.etf_bid_depth:x.etf_ask_depth;
    const basketDepth=side==="create"?x.basket_buy_capacity:x.basket_sell_capacity;
    if(units>etfDepth)reasons.push("ETF对应方向给定深度不足；不外推同价");
    if(units>basketDepth)reasons.push("篮子对应方向给定容量不足；不外推同价");
    if(side==="redeem" && units>=fund.shares)reasons.push("赎回数量超出本例剩余份额为正的范围");
    const buyPrice=side==="create"?x.basket_ask:x.etf_ask;
    const sellPrice=side==="create"?x.etf_bid:x.basket_bid;
    const buyCash=units*buyPrice, sellCash=units*sellPrice, otherCost=units*x.other_cost_per_share;
    const requiredCash=buyCash+otherCost, shortfall=Math.max(0,requiredCash-x.cash);
    if(requiredCash>1e12||sellCash>1e12)return error("成交金额超出实验有限数值范围.");
    if(shortfall>tol)reasons.push("先买入及预留成本的现金不足；不预用未来卖出款");
    if(reasons.length) return {status:"blocked",applied:false,errors:reasons,after:null,quote,units,
      requiredCash,shortfall,conditionalNet:null,identity:"synthetic"};
    const flow=fundFlow(fund,side,units);
    if(flow.status!=="calculated")return flow;
    const conditionalNet=sellCash-buyCash-otherCost;
    return {status:"calculated",applied:true,errors:[],identity:"synthetic",quote,units,side,
      buyCash,sellCash,otherCost,requiredCash,shortfall:0,conditionalNet,
      apCashAfter:x.cash+conditionalNet,after:flow.after,fundFlow:flow,
      breakEvenOtherCostPerShare:sellPrice-buyPrice,
      netLabel:"所有教学条件满足时的净现金差额；不是实际成交利润"};
  }
  return Object.freeze({capital,nav,fundFlow,distribution,apCycle});
});
