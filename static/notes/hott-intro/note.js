(() => {
  const article=document.querySelector('[data-hott-article]');
  if(!article)return;
  const ns='http://www.w3.org/2000/svg';
  const status=article.querySelector('[data-hott-status]');
  const detail=article.querySelector('[data-hott-detail-toggle]');
  detail.addEventListener('click',()=>{
    const on=article.classList.toggle('hott-detailed');
    detail.setAttribute('aria-pressed',String(on));
    detail.textContent=on?'收起详细补充':'显示详细补充';
    if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([article]).catch(()=>{});
  });
  article.querySelectorAll('[data-hott-detail-for]').forEach(button=>button.addEventListener('click',()=>{
    const target=document.getElementById(button.dataset.hottDetailFor);
    if(!target)return;
    const on=target.classList.toggle('is-open');button.setAttribute('aria-expanded',String(on));
    if(on && window.MathJax?.typesetPromise)window.MathJax.typesetPromise([target]).catch(()=>{});
  }));
  article.querySelector('[data-hott-print]').addEventListener('click',()=>window.print());
  article.querySelector('[data-hott-copy]').addEventListener('click',async()=>{
    const source=article.querySelector('[data-hott-full-text]').value;
    const text=source.replace(/\{\{<\s*hott-figure\s+kind="roots"\s*>\}\}/g,'[互动图：z 绕单位圆周两圈；连续跟踪 w²=z 的两支根，一圈后交换，两圈后各自返回。]')
      .replace(/\{\{<\s*hott-figure\s+kind="paths"\s*>\}\}/g,'[互动图：固定端点 a、b；参数 t 沿当前路径移动，参数 s 连续改变整条路径。]')
      .replace(/\{\{<\s*hott-figure\s+kind="matchings"\s*>\}\}/g,'[图：A 的项为 L、R，B 的项为 0、1。对应 f 将 L 送到 0、R 送到 1；对应 g 将 L 送到 1、R 送到 0。]')
      .replace(/<button\b[^>]*>[\s\S]*?<\/button>/g,'').replace(/<\/?(?:span|div)\b[^>]*>/g,'');
    try{await navigator.clipboard.writeText(text);status.textContent='已复制完整正文与教学 Prompt。';}
    catch{status.textContent='当前浏览器未允许复制，请直接选取正文。';}
  });
  document.querySelectorAll('[data-hott-figure]').forEach(figure=>{
    if(figure.dataset.hottFigure==='matchings')return;
    const svg=figure.querySelector('svg');
    const make=(name,attrs,text)=>{const el=document.createElementNS(ns,name);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));if(text!==undefined)el.textContent=text;svg.append(el);return el;};
    const label=(x,y,text,cls='',anchor='middle')=>make('text',{x,y,class:cls,'text-anchor':anchor},text);
    const line=(x1,y1,x2,y2,attrs={})=>make('line',{x1,y1,x2,y2,stroke:'var(--hott-line)','stroke-width':1,...attrs});
    const point=(x,y,color,r=5)=>make('circle',{cx:x,cy:y,r,fill:color});
    const circlePath=(cx,cy,r,angle,start=0)=>{
      const points=Array.from({length:129},(_,i)=>{const a=start+(angle-start)*i/128;return [cx+r*Math.cos(a),cy-r*Math.sin(a)];});
      return points.map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' ');
    };
    let rootTurns=0,rootAnimation=0;
    function drawRoots(){
      const w=figure.clientWidth;const narrow=w<470;const half=narrow?w:w/2;const height=narrow?528:274;
      svg.replaceChildren();svg.setAttribute('viewBox',`0 0 ${w} ${height}`);svg.setAttribute('height',height);
      const turns=rootTurns,theta=turns*2*Math.PI;
      const r=Math.min(76,(half-86)/2),a={x:half/2,y:124},b={x:narrow?half/2:half*1.5,y:narrow?389:124};
      [a,b].forEach(c=>{line(c.x-r-6,c.y,c.x+r+6,c.y);line(c.x,c.y-r-6,c.x,c.y+r+6);make('circle',{cx:c.x,cy:c.y,r,fill:'none',stroke:'var(--hott-line)','stroke-width':1.5});label(c.x+r+15,c.y+5,'1','math');label(c.x-r-17,c.y+5,'−1','math');label(c.x,c.y-r-11,'i','math');label(c.x,c.y+r+23,'−i','math');});
      label(a.x,17,'平方后的点 z');label(b.x,narrow?282:17,'连续跟踪的根 w');
      if(!narrow){const l=a.x+r+31,h=b.x-r-31;make('path',{d:`M${h} 124 H${l} M${l+6} 120 L${l} 124 L${l+6} 128`,fill:'none',stroke:'var(--hott-muted)','stroke-width':1.3});label(w/2,102,'w² = z','math');label(w/2,150,'角度 × 2','quiet');}
      const end=(c,ang)=>({x:c.x+r*Math.cos(ang),y:c.y-r*Math.sin(ang)});
      make('path',{d:circlePath(a.x,a.y,r,theta),fill:'none',stroke:'var(--hott-blue)','stroke-width':3,opacity:.4});
      make('path',{d:circlePath(b.x,b.y,r,theta/2),fill:'none',stroke:'var(--hott-blue)','stroke-width':3});
      const z=end(a,theta),root=end(b,theta/2),other=end(b,theta/2+Math.PI);
      line(a.x,a.y,z.x,z.y,{stroke:'var(--hott-blue)',opacity:.3});point(z.x,z.y,'var(--hott-ink)',5.5);
      line(root.x,root.y,other.x,other.y,{stroke:'var(--hott-line)','stroke-dasharray':'3 5'});
      line(b.x,b.y,root.x,root.y,{stroke:'var(--hott-blue)',opacity:.3});point(other.x,other.y,'var(--hott-muted)',4.5);
      make('circle',{cx:root.x,cy:root.y,r:12,fill:'var(--hott-blue)',opacity:.12});point(root.x,root.y,'var(--hott-blue)',6);
      label(a.x,248,`z 转过 ${(turns*360).toFixed(0)}°`);label(b.x,narrow?513:248,`w 转过 ${(turns*180).toFixed(0)}°`);
    }
    function drawPaths(){
      const w=figure.clientWidth,narrow=w<500,leftWidth=narrow?w:w*.3,height=narrow?398:263;
      const s=Number(figure.querySelector('[data-path-s]').value),t=Number(figure.querySelector('[data-path-t]').value);
      svg.replaceChildren();svg.setAttribute('viewBox',`0 0 ${w} ${height}`);svg.setAttribute('height',height);
      const size=narrow?108:Math.min(125,leftWidth-45),x=(leftWidth-size)/2+5,y=narrow?34:58;
      label(leftWidth/2,16,'参数','quiet');
      for(let i=0;i<=4;i++){line(x+i*size/4,y,x+i*size/4,y+size,{opacity:.65});line(x,y+i*size/4,x+size,y+i*size/4,{opacity:.65});}
      line(x,y+(1-s)*size,x+size,y+(1-s)*size,{stroke:'var(--hott-blue)','stroke-width':2.5});point(x+t*size,y+(1-s)*size,'var(--hott-blue)');
      label(x-15,y+size/2+5,'s','math');label(x+size/2,y+size+22,'t','math');label(x-9,y+4,'1','quiet','end');label(x-9,y+size+4,'0','quiet','end');label(x+size,y+size+22,'1','quiet');
      const start=narrow?25:leftWidth+58,end=w-24,cy=narrow?290:129,amp=narrow?65:77;
      label((start+end)/2,narrow?199:16,'路径族','quiet');
      const path=v=>Array.from({length:101},(_,i)=>{const u=i/100;return `${i?'L':'M'}${start+(end-start)*u},${cy-(1-2*v)*Math.sin(Math.PI*u)*amp}`;}).join(' ');
      for(let i=0;i<=8;i++)make('path',{d:path(i/8),fill:'none',stroke:i===0||i===8?'var(--hott-muted)':'var(--hott-blue)','stroke-width':1,opacity:i===0||i===8?.5:.13});
      make('path',{d:path(s),fill:'none',stroke:'var(--hott-blue)','stroke-width':3});
      const px=start+(end-start)*t,py=cy-(1-2*s)*Math.sin(Math.PI*t)*amp;
      make('circle',{cx:px,cy:py,r:12,fill:'var(--hott-blue)',opacity:.12});point(px,py,'var(--hott-blue)',5);
      point(start,cy,'var(--hott-ink)',3.5);point(end,cy,'var(--hott-ink)',3.5);label(start-11,cy+5,'a','math','end');label(end+10,cy+5,'b','math','start');
      label((start+end)/2,cy-amp-11,'γ₀','math quiet');label((start+end)/2,cy+amp+23,'γ₁','math quiet');
      figure.querySelector('[data-path-s-value]').textContent=s.toFixed(2);figure.querySelector('[data-path-t-value]').textContent=t.toFixed(2);
    }
    const draw=figure.dataset.hottFigure==='roots'?drawRoots:drawPaths;
    figure.querySelectorAll('[data-root-turns]').forEach(button=>button.addEventListener('click',()=>{
      const target=Number(button.dataset.rootTurns),from=rootTurns;
      cancelAnimationFrame(rootAnimation);
      figure.querySelectorAll('[data-root-turns]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      const result=figure.querySelector('[data-root-result]');
      const messages={0:'z = 1，w = 1',0.5:'z = −1，w = i',1:'z = 1，w = −1',2:'z = 1，w = 1'};
      const finish=()=>{rootTurns=target;drawRoots();result.textContent=messages[target];};
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || from===target){finish();return;}
      result.textContent='沿着移动过程跟踪蓝色的平方根……';
      const start=performance.now(),duration=Math.min(1800,700+Math.abs(target-from)*500);
      const animate=now=>{const progress=Math.min(1,(now-start)/duration),eased=progress<.5?2*progress*progress:1-Math.pow(-2*progress+2,2)/2;rootTurns=from+(target-from)*eased;drawRoots();if(progress<1)rootAnimation=requestAnimationFrame(animate);else finish();};
      rootAnimation=requestAnimationFrame(animate);
    }));
    figure.querySelectorAll('input').forEach(input=>input.addEventListener('input',draw));
    new ResizeObserver(draw).observe(figure);draw();
  });
})();
