/* No RNG. Every plotted distribution uses the frozen-exported complete observations. */
(function(root){'use strict';
const api={
 route(search,hash,ids){let q=new URLSearchParams(search).get('experiment');let h=decodeURIComponent((hash||'').replace(/^#/,''));return ids.includes(q)?q:ids.includes(h)?h:null;},
 bayes(history,prior,accuracy){if(!/^[+-]+$/.test(history)||!(prior>0&&prior<1)||!(accuracy>0&&accuracy<1))throw Error('invalid observation model');let p=prior;for(const s of history){let a=s==='+'?accuracy:1-accuracy;p=a*p/(a*p+(1-a)*(1-p));}return{posterior:p,predictive:1-accuracy+(2*accuracy-1)*p};},
 matrixPower(P,n){if(!Number.isInteger(n)||n<1)throw Error('positive integer power');let A=P.map(r=>r.slice());for(let k=1;k<n;k++)A=A.map(row=>P[0].map((_,j)=>row.reduce((s,v,i)=>s+v*P[i][j],0)));return A;},
 diffusion(first,n){const step=256/n;if(!Number.isInteger(step)||step<1)throw Error('invalid nested grid');let qv=0,left=0,right=0;const pts=[];for(let i=0;i<=256;i+=step){pts.push([first[i].t_Brownian,first[i].W]);if(i){let d=first[i].W-first[i-step].W;qv+=d*d;left+=first[i-step].W*d;right+=first[i].W*d;}}return{points:pts,qv,left,right,target:(first[256].W**2-1)/2};},
 variance(a){let mean=a.reduce((s,x)=>s+x,0)/a.length;return a.reduce((s,x)=>s+(x-mean)**2,0)/a.length;},
 metric(actual,pred,base){if(actual.length!==pred.length||base.length!==actual.length)throw Error('shape');let e=actual.map((v,i)=>v-pred[i]),be=actual.map((v,i)=>v-base[i]),sse=e.reduce((s,v)=>s+v*v,0),den=be.reduce((s,v)=>s+v*v,0);return {mse:sse/e.length,varianceR2:1-api.variance(e)/api.variance(actual),baselineR2:1-sse/den};},
 validateHistogram(edges,counts,total){if(edges.length!==counts.length+1||edges.some((x,i)=>i&&x<=edges[i-1])||counts.some(x=>!Number.isInteger(x)||x<0)||counts.reduce((a,b)=>a+b,0)!==total)throw Error('invalid histogram');return true;}
};root.QTEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
