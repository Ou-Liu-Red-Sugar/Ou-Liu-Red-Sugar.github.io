/* Reading branches and iframe sizing; no economic calculations. */
(function(){'use strict';
async function init(){
 const article=document.querySelector('.entry-article');if(!article||!/^zh-ei(10|11|12|13|15|16|17|18)$/.test(article.dataset.entryId||''))return;
 const body=article.querySelector('.entry-body');
 addEventListener('message',event=>{
  if(event.origin!==location.origin||event.data?.type!=='ei-lab-height'||!Number.isFinite(event.data.height))return;
  const frame=[...body.querySelectorAll('iframe')].find(f=>f.contentWindow===event.source);if(!frame)return;
  if(frame.closest('[data-experiment-id]')?.dataset.experimentId!==event.data.id)return;
  frame.style.height=Math.max(500,Math.min(event.data.height+24,18000))+'px';
 });
 if(article.dataset.entryId!=='zh-ei15')return;
 const context=document.getElementById('teaching-context'),buttons=[...body.querySelectorAll('[data-select-reading-branch]')];
 const original=context.value,download=article.querySelector('.entry-actions a[href*="/agent/"]'),originalHref=download?.getAttribute('href');
 let branch='all',packets;
 function syncFrame(){const frame=body.querySelector('iframe');if(frame&&branch!=='all')frame.contentWindow?.postMessage({type:'ei-lab-branch',branch},location.origin);}
 function apply(b){
  if(b!=='all'&&!packets?.[b])return;branch=b;
  body.querySelectorAll('[data-reading-branch]').forEach(s=>{s.hidden=b!=='all'&&s.dataset.readingBranch!==b;});
  buttons.forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.selectReadingBranch===b)));
  context.value=b==='all'?original:packets[b].markdown;
  if(download)download.href=b==='all'?originalHref:packets[b].url;
  syncFrame();
 }
 function followHash(){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));const section=target?.closest('[data-reading-branch]');if(section)apply(section.dataset.readingBranch);}
 buttons.forEach(b=>{b.disabled=true;b.addEventListener('click',()=>apply(b.dataset.selectReadingBranch));});
 try{const response=await fetch('/notebook/labs/ei-defgh/branch-agents.json');if(!response.ok)throw Error('branch material unavailable');packets=await response.json();buttons.forEach(b=>b.disabled=false);apply('electricity');followHash();}
 catch(_){buttons.forEach(b=>b.disabled=false);apply('all');}
 body.querySelectorAll('iframe').forEach(f=>f.addEventListener('load',syncFrame));
 addEventListener('hashchange',followHash);
 // A branch chosen inside the experiment also selects the matching reading and Agent materials.
 addEventListener('message',event=>{if(event.origin===location.origin&&event.source===body.querySelector('iframe')?.contentWindow&&event.data?.type==='ei-selected-branch'&&event.data.branch!==branch)apply(event.data.branch);});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
