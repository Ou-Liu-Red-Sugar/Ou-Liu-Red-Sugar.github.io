/* EI-B teaching engines. All observable data/defaults live in inputs.json.
 * Browser: globalThis.EIB_ENGINE. Node: require('./engine.js').
 * Inputs restricted to the ranges used in the actual HTML controls.
 */
(function(root){
"use strict";
const finite=(x,k)=>{if(typeof x!=="number"||!Number.isFinite(x))throw new TypeError(k+": finite number required");return x;};
function boundedInt(x,k,min,max){finite(x,k);if(!Number.isInteger(x)||x<min||x>max)throw new RangeError(k+": integer "+min+".."+max);return x;}
function hotelling(o){
 const c=boundedInt(o.c,"c",0,50),t=boundedInt(o.t,"t",0,30);
 let p1=boundedInt(o.p1,"p1",0,100),p2=boundedInt(o.p2,"p2",0,100);
 if(!["equilibrium","manual"].includes(o.mode))throw new RangeError("mode");
 if(o.mode==="equilibrium")p1=p2=c+t;
 let theta=null,q1,kind;
 if(t===0){q1=p1===p2?.5:p1<p2?1:0;kind=p1===p2?"homogeneous_equal_split":"homogeneous_low_price";}
 else {theta=(p2-p1+t)/(2*t);q1=Math.min(1,Math.max(0,theta));kind=(theta>0&&theta<1)?"interior_allocation":"boundary_allocation";}
 const q2=1-q1;
 return {c,t,p1,p2,theta,q1,q2,profit1:(p1-c)*q1,profit2:(p2-c)*q2,
   kind,label:o.mode==="equilibrium"?"model_equilibrium":"given_price_allocation",covered_market:true};
}
function entry(o){
 const a=boundedInt(o.a,"a",0,200),c=boundedInt(o.c,"c",0,200),
 K=boundedInt(o.K,"K",0,20000),cap=boundedInt(o.cap,"cap",0,20);
 const g=Math.max(a-c,0),g2=BigInt(g)*BigInt(g), k=BigInt(K);
 // Comparison multiplies by a positive integer denominator: exact ties stay ties.
 function cmp(n){let z=g2-k*BigInt((n+1)*(n+1));return z>0n?1:z<0n?-1:0;}
 let rows=[],set=[];
 for(let n=0;n<=cap;n++){
   const incumbentOK=n===0||cmp(n)>=0;
   const nextExists=n<cap;
   const outsiderOK=!nextExists||cmp(n+1)<=0;
   const ok=incumbentOK&&outsiderOK;
   if(ok)set.push(n);
   const q=n>0?g/(n+1):0, qTotal=n*q;
   rows.push({N:n,q_each:n>0?q:null,Q:qTotal,price:qTotal>0?c+g/(n+1):null,
     variable_profit:n>0?g*g/((n+1)*(n+1)):null,
     net_profit:n>0?g*g/((n+1)*(n+1))-K:null,
     incumbentOK,outsiderOK,next_exists:nextExists,equilibrium:ok,
     cap_bound:n===cap,entry_tie:nextExists&&cmp(n+1)===0,incumbent_tie:n>0&&cmp(n)===0});
 }
 return {a,c,K,cap,equilibrium_set:set,rows,nonpositive_margin_corner:a<=c,
   zero_output_continuation:a<=c,no_potential_entrants:cap===0};
}
function inventory(o){
 const E0=boundedInt(o.E0,"E0",100,100),m=boundedInt(o.lambda_steps,"lambda_steps",0,100),
 den=boundedInt(o.lambda_denominator,"lambda_denominator",200,200),
 h=boundedInt(o.h,"h",1,100);
 const lambda=m/den;
 if(m===0)return {E0,lambda_steps:m,lambda,h,crossing:null,status:"never",
   previous:null,current:null,equality_previous:false,
   points:Array.from({length:21},(_,n)=>({n,E:E0})),comparison:"strict <"};
 const num=BigInt(den-m),base=BigInt(den);
 function cmp(n){
   const lhs=100n*num**BigInt(n),rhs=BigInt(h)*base**BigInt(n);
   return lhs<rhs?-1:lhs>rhs?1:0;
 }
 let n=Math.max(0,Math.floor(Math.log(h/E0)/Math.log1p(-lambda))+1);
 // Verify using the original inequality over exact rational slider inputs.
 while(cmp(n)>=0)n++;
 while(n>0&&cmp(n-1)<0)n--;
 const stop=Math.min(1000,Math.max(20,n+2));
 return {E0,lambda_steps:m,lambda,h,crossing:n,status:"crossed",
   previous:n>0?E0*Math.pow(1-lambda,n-1):null,current:E0*Math.pow(1-lambda,n),
   equality_previous:n>0&&cmp(n-1)===0,verified_current:cmp(n)<0,
   verified_previous:n===0||cmp(n-1)>=0,
   points:Array.from({length:stop+1},(_,i)=>({n:i,E:E0*Math.pow(1-lambda,i)})),comparison:"strict <"};
}
function m3(data){
 const [a,b]=data.rows, flow=b.orders-b.shipments,delta=b.backlog-a.backlog;
 return {net_flow:flow,backlog_change:delta,adjustment_residual:delta-flow,
  inventory_change:b.inventories-a.inventories,inventory_shipments:b.inventories/b.shipments,
  growth_pct:Object.fromEntries(["orders","shipments","backlog","inventories"].map(k=>[k,100*(b[k]/a[k]-1)]))};
}
function accounts(data){
 return Object.fromEntries(["costco","sams"].map(k=>{
 const d=data[k];return [k,{reconstructed_revenue:(Math.round(d.net_sales*1000)+Math.round(d.membership*1000))/1000,
 reconstructed_oi:(Math.round(d.total_revenue*1000)-Math.round(d.cost*1000)-Math.round(d.opex*1000))/1000,
 membership_revenue_pct:100*d.membership/d.total_revenue,
 membership_oi_pct:100*d.membership/d.operating_income}];}));
}
const api={hotelling,entry,inventory,m3,accounts};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
root.EIB_ENGINE=api;
})(typeof globalThis!=="undefined"?globalThis:this);
