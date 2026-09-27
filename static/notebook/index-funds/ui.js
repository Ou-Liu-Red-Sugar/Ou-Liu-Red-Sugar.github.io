(function(root){
  'use strict';
  const colors=['#24664f','#5986a1','#b47550','#c7cba3'];
  const labels=['股票 A','股票 B','股票 C','股票 D'];
  const pct=x=>(x*100).toFixed(1)+'%';
  const cash=x=>Math.round(x).toLocaleString('en-US');
  function weights(kind,stage,aReturn){
    const initial=kind==='cap'?[.4,.3,.2,.1]:[.25,.25,.25,.25];
    const returns=[aReturn,-.10,0,.10];
    const before=initial.map(w=>w*10000);
    const drift=before.map((v,i)=>v*(1+returns[i]));
    const driftTotal=drift.reduce((s,v)=>s+v,0);
    const atStart=stage===0;
    const total=atStart?10000:driftTotal;
    const values=atStart?before:(stage===2&&kind==='equal'?Array(4).fill(total/4):drift);
    return {values,total,weights:values.map(v=>v/total),return:total/10000-1,trades:values.map((v,i)=>v-drift[i])};
  }
  function feeValue(years,fee){return 10000*Math.pow(1.06*(1-fee),years)}
  if(typeof module!=='undefined'&&module.exports)module.exports={weights,feeValue};
  if(typeof document==='undefined')return;
  document.querySelectorAll('[data-if-rebalance]').forEach(panel=>{
    let stage=0;
    const slider=panel.querySelector('[data-if-return]');
    function draw(){
      const a=Number(slider.value)/100;
      panel.querySelector('output').textContent=(a>=0?'+':'')+pct(a);
      const results={cap:weights('cap',stage,a),equal:weights('equal',stage,a)};
      panel.querySelectorAll('[data-if-kind]').forEach(row=>{
        const r=results[row.dataset.ifKind];
        row.querySelector('[data-if-value]').textContent=cash(r.total)+' 美元';
        row.querySelector('[data-if-track]').innerHTML=r.weights.map((w,i)=>`<span class="if-segment" style="width:${w*100}%;--color:${colors[i]}" title="${labels[i]}：${pct(w)}">${pct(w)}</span>`).join('');
      });
      panel.querySelector('[data-if-cap-return]').textContent=pct(results.cap.return);
      panel.querySelector('[data-if-equal-return]').textContent=pct(results.equal.return);
      const text=[
        '起点：两种方式各投入 10,000 美元。市值加权按 40% / 30% / 20% / 10% 分配，等权各占 25%。',
        '两次再平衡之间：组合持有各只股票的数量保持不变，市场价格已经改变了各股在组合中的比重；等权也会偏离 25%。',
        '到了下一次预定再平衡日：等权组合调回各 25%；市值加权继续按变化后的市值分配，不调回起点比例。调整本身不创造收益。'
      ][stage];
      panel.querySelector('[data-if-caption]').textContent=text;
      const trades=panel.querySelector('[data-if-trades]');
      trades.hidden=stage!==2;
      trades.textContent='等权调整：'+results.equal.trades.map((v,i)=>labels[i]+(Math.abs(v)<.005?' 无须交易':v>0?' 买入 '+cash(v)+' 美元':' 卖出 '+cash(-v)+' 美元')).join('；')+'。忽略交易费用。';
      panel.querySelectorAll('[data-if-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.ifStage)===stage)));
    }
    panel.querySelectorAll('[data-if-stage]').forEach(b=>b.addEventListener('click',()=>{stage=Number(b.dataset.ifStage);draw()}));
    slider.addEventListener('input',draw);draw();
  });
})(globalThis);
