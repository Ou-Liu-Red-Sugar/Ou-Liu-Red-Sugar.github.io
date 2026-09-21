/* BF-B+C: bounded, deterministic teaching calculations. No remote services. */
(function(root, factory){
  const api=factory();
  if(typeof module==='object' && module.exports) module.exports=api;
  else root.BFBC=api;
})(typeof globalThis!=='undefined'?globalThis:this, function(){
  'use strict';
  function finite(x,name){if(typeof x!=='number'||!Number.isFinite(x))throw new TypeError(name+'须为有限数值');return x;}
  function range(x,lo,hi,name){finite(x,name);if(x<lo||x>hi)throw new RangeError(name+'超出范围');return x;}
  function date(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))throw new TypeError('日期须为YYYY-MM-DD');const d=new Date(s+'T00:00:00Z');if(!Number.isFinite(+d)||d.toISOString().slice(0,10)!==s)throw new RangeError('无效日期');return s;}
  function sum(a){return a.reduce((s,x)=>s+finite(x,'数值'),0);}
  function byid(table,id,y=0){const r=table.rows.find(x=>x.id===id);if(!r)throw new Error('缺行 '+id);range(y,0,table.periods.length-1,'期间');if(!Number.isInteger(y))throw new Error('期间索引须为整数');return finite(r.values[y],id);}
  function contractEvents(events,price=120){
    range(price,0,1e9,'总价'); if(!Array.isArray(events))throw new TypeError('events须为数组');
    const rank={performance:0,right:1,invoice:2,cash:3}; const sorted=events.map((e,i)=>{
      if(!Object.hasOwn(rank,e.type))throw new TypeError('未知事件类型');
      return {...e,date:date(e.date),amount:range(e.amount,0,price,'事件金额'),originalIndex:i};
    }).sort((a,b)=>a.date.localeCompare(b.date)||rank[a.type]-rank[b.type]||a.originalIndex-b.originalIndex);
    let R=0,U=0,C=0,B=0; const result=[];
    for(const e of sorted){
      if(e.type==='performance')R+=e.amount;
      if(e.type==='right')U+=e.amount;
      if(e.type==='cash')C+=e.amount;
      if(e.type==='invoice')B+=e.amount;
      if([R,U,C,B].some(v=>v>price+1e-8))throw new RangeError('累计金额超过合同总价');
      const ar=Math.max(U-C,0),net=R-Math.max(U,C),ca=Math.max(net,0),cl=Math.max(-net,0);
      const assets=C+ar+ca, equity=R; // no costs or taxes in this bounded contract
      const state={date:e.date,event:e.label||e.type,type:e.type,amount:e.amount,revenue:R,unconditional:U,billed:B,cash:C,receivable:ar,contract_asset:ca,contract_liability:cl,assets,equity,residual:assets-cl-equity};
      if(Math.abs(state.residual)>1e-7)throw new Error('会计恒等式不平'); result.push(state);
    }
    return result;
  }
  function preset(name,opts={},template){
    if(!template||!template.presets||!Object.hasOwn(template.presets,name))throw new Error('缺少具名合同共用输入');
    const source=template.presets[name],price=opts.price===undefined?template.consideration:range(opts.price,0,1e9,'总价');
    range(price,0,1e9,'总价');
    let performanceSeen=false,rightSeen=false;
    const events=source.events.map(e=>{
      let d=e.date;
      if(e.type==='performance'&&!performanceSeen){performanceSeen=true;d=opts.performanceDate||d;}
      else if(e.type==='right'&&!rightSeen){rightSeen=true;d=opts.rightDate||d;}
      else if(e.type==='invoice') d=opts.invoiceDate||d;
      else if(e.type==='cash') d=opts.collectionDate||d;
      return {type:e.type,date:date(d),amount:price*e.fraction,label:e.label};
    });
    const perfDate=events.find(e=>e.type==='performance').date,rightDate=events.find(e=>e.type==='right').date,invoiceDate=events.find(e=>e.type==='invoice').date,collectionDate=events.find(e=>e.type==='cash').date;
    const changed=perfDate!==source.events.find(e=>e.type==='performance').date||rightDate!==source.events.find(e=>e.type==='right').date||invoiceDate!==source.events.find(e=>e.type==='invoice').date||collectionDate!==source.events.find(e=>e.type==='cash').date;
    const terms=source.rights_and_performance_terms+' 当前首个/唯一履约日：'+perfDate+'；无条件权利日：'+rightDate+'；开票日：'+invoiceDate+'；实际收款日：'+collectionDate+'.'+(changed?' 日期已改为教学变式；权利日变化代表合同权利事实变化.':'')+template.scope_note;
    return {name,price,terms,events,timeline:contractEvents(events,price),same_day_order:template.same_day_order.join(' → ')};
  }
  function at(timeline,cutoff){date(cutoff);const a=timeline.filter(r=>r.date<=cutoff);return a.length?a[a.length-1]:{date:cutoff,revenue:0,unconditional:0,billed:0,cash:0,receivable:0,contract_asset:0,contract_liability:0,assets:0,equity:0,residual:0};}
  function cashBridge(table,y=0){const groups=['cfo','cfi','cff'];const computed={};for(const g of groups)computed[g]=sum(table.rows.filter(r=>r.kind==='detail'&&r.section===g).map(r=>r.values[y]));const begin=byid(table,'begin',y),fx=byid(table,'fx',y),end=begin+computed.cfo+computed.cfi+computed.cff+fx;return {...computed,begin,fx,end,reported_end:byid(table,'end',y),cash_change:end-begin,checks:groups.map(g=>({group:g,computed:computed[g],reported:byid(table,g,y)}))};}
  function profit(table,y=0){const v=id=>byid(table,id,y);if(table.id==='cost_income'){const gross=v('sales')-v('merchandise'),revenue=v('sales')+v('membership'),operating=gross+v('membership')-v('sga'),pretax=operating+v('interest_expense')+v('interest_other');return {gross,revenue,operating,pretax,net:pretax-v('tax'),gross_margin_percent:100*gross/v('sales')};}
    if(table.id==='jpm_income'){const noninterest=sum(table.rows.filter(r=>r.section==='noninterest'&&r.kind==='detail').map(r=>r.values[y])),nii=v('interestincome')-v('interestexpense'),expenses=sum(table.rows.filter(r=>r.section==='expense'&&r.kind==='detail').map(r=>r.values[y])),revenue=noninterest+nii,pretax=revenue-v('provision')-expenses;return {noninterest,nii,revenue,expenses,pretax,net:pretax-v('tax'),common:v('common_net')};}throw new Error('未知利润表');}
  function equity(d,y=0){
    range(y,0,2,'EPS期间');if(!Number.isInteger(y))throw new Error('期间索引');
    const e=d.sf_eps,n=e.net_income[y],basic=e.basic_shares_m[y],diluted=e.diluted_shares_m[y],rows=d.sf_equity.rows,opening=rows[7],ending=rows[15],components=rows.slice(8,15).map(r=>r[r.length-1]);
    return {equity_period:'FY2026',eps_period:e.periods[y],opening:opening[9],components,closing:opening[9]+sum(components),issued_begin_m:opening[2],treasury_begin_m:-opening[4],outstanding_begin_m:opening[2]+opening[4],issued_end_m:ending[2],treasury_end_m:-ending[4],outstanding_end_m:ending[2]+ending[4],basic_eps:n/basic,diluted_eps:n/diluted,basic_shares_m:basic,diluted_shares_m:diluted,antidilutive:e.antidilutive_awards_m[y],nci_common:d.cat_nci.profit_consolidated_affiliates-d.cat_nci.nci_profit};
  }
  function inventoryHistorical(d){const c=d.inventory.cat;return {reported:c.total,fifo:c.total.map((v,i)=>v+c.fifo_uplift[i]),reported_change:c.total[0]-c.total[1],fifo_change:c.total[0]+c.fifo_uplift[0]-c.total[1]-c.fifo_uplift[1],uplift_change:c.fifo_uplift[0]-c.fifo_uplift[1],lifo_share:c.lifo_share_percent};}
  function inventoryFlow(o){const q=range(o.units,0,1e6,'数量'),c=range(o.unit_cost,0,1e9,'单位成本'),sold=range(o.sold,0,q,'销售数量'),p=range(o.sale_price,0,1e9,'售价'),n=range(o.nrv_per_unit,0,1e9,'单位NRV');const available=q*c,cogs=sold*c,remaining=q-sold,write_down=remaining*Math.max(c-n,0),ending=remaining*Math.min(c,n),revenue=sold*p;return {available,cogs,remaining,write_down,ending,revenue,profit:revenue-cogs-write_down,residual:available-cogs-write_down-ending};}
  function taxGroups(d,y=0){
    range(y,0,2,'税项期间');if(!Number.isInteger(y))throw new Error('期间索引');const t=d.sf_tax,b=t.deferred_balances,hasBalance=y<b.periods.length;
    const amount=k=>hasBalance?b[k][y]:null;
    return {period:t.periods[y],current:sum(Object.values(t.current).map(a=>a[y])),deferred:sum(Object.values(t.deferred).map(a=>a[y])),expense:t.expense[y],cash_paid:sum(Object.values(t.cash_paid).map(a=>a[y])),pretax:t.pretax[y],computed_rate_percent:100*t.expense[y]/t.pretax[y],displayed_2026_rate:t.displayed_etr_percent,deferred_snapshot_period:hasBalance?b.periods[y]:null,dta_gross:amount('gross_dta'),valuation_allowance:amount('valuation_allowance'),dta_after_allowance:amount('dta_after_allowance'),dtl:amount('total_dtl'),net_deferred_asset:amount('net_deferred_tax_asset')};
  }
  function roundingInterval(expense,pretax,half=0.5,shown=21.5){finite(expense,'税费');finite(pretax,'税前利润');range(half,0,1e9,'取整半宽');finite(shown,'列示率');if(expense<half||pretax<=half)throw new RangeError('本示例要求正税费、正税前利润，且区间不穿零');const lower=100*(expense-half)/(pretax+half),upper=100*(expense+half)/(pretax-half);return {center:100*expense/pretax,lower,upper,shown,inside:shown>=lower&&shown<=upper};}
  function temporaryTax(o){const b=range(o.base_profit_each_year,0,1e9,'特殊成本前利润'),e=range(o.expense,0,b,'递延扣除成本'),r=range(o.rate,0,1,'税率');return [{year:1,book_profit:b-e,taxable:b,current:b*r,deferred:-e*r,total:(b-e)*r,cash_tax:b*r,dta:e*r,tax_payable_end:0},{year:2,book_profit:b,taxable:b-e,current:(b-e)*r,deferred:e*r,total:b*r,cash_tax:(b-e)*r,dta:0,tax_payable_end:0}];}
  function ssp(total,a,b){range(total,0,1e9,'合同价');range(a,0,1e9,'单独售价A');range(b,0,1e9,'单独售价B');if(a+b<=0)throw new RangeError('单独售价之和须正');return {a:total*a/(a+b),b:total*b/(a+b)};}
  return {finite,range,date,sum,byid,contractEvents,preset,at,cashBridge,profit,equity,inventoryHistorical,inventoryFlow,taxGroups,roundingInterval,temporaryTax,ssp};
});
