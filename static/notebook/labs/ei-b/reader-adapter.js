/* EI-B: common text stays visible; chosen units become Agent requirements. */
(function(){'use strict';
function init(){
 const article=document.querySelector('.entry-article');
 if(!article||!/^zh-ei(07|08|09)$/.test(article.dataset.entryId||''))return;
 const body=article.querySelector('.entry-body'),context=document.getElementById('teaching-context');
 if(!body||!context)return;
 const original=context.value;
 const pattern=/(## Required readings and runtime protocol\r?\n```json\r?\n)([\s\S]*?)(\r?\n```)/;
 const match=original.match(pattern);if(!match)return;
 let originalPacket;try{originalPacket=JSON.parse(match[2]);}catch(_){return;}
 const panels=[...body.querySelectorAll('[data-reading-branch]')];
 const buttons=[...body.querySelectorAll('[data-select-reading-branch]')];
 let selected=originalPacket.default_branch||'common';
 function syncFrame(frame){if(new URL(frame.src,location.href).origin===location.origin)frame.contentWindow?.postMessage({type:'notebook-reading-branch',branch:selected},location.origin);}
 function activate(key){
  if(!Object.hasOwn(originalPacket.required_readings_by_branch||{},key))key='common';
  selected=key;
  panels.forEach(panel=>{panel.hidden=key!=='all'&&panel.dataset.readingBranch!==key;
   if(!panel.hidden){const detail=panel.querySelector('details');if(detail)detail.open=true;}});
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.selectReadingBranch===key)));
  for(const link of document.querySelectorAll('.entry-toc a[href^="#"]')){
   let target;try{target=document.getElementById(decodeURIComponent(link.hash.slice(1)));}catch(_){continue;}
   const panel=target?.closest('[data-reading-branch]');if(panel)(link.closest('li')||link).hidden=panel.hidden;
  }
  body.querySelectorAll('iframe').forEach(syncFrame);
 }
 function fromHash(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch(_){return false;}
  const panel=document.getElementById(id)?.closest('[data-reading-branch]');
  if(panel&&panels.includes(panel)){activate(panel.dataset.readingBranch);return true;}return false;}
 buttons.forEach(button=>button.addEventListener('click',()=>activate(button.dataset.selectReadingBranch)));
 body.querySelectorAll('iframe').forEach(frame=>frame.addEventListener('load',()=>syncFrame(frame)));
 activate(selected);fromHash();addEventListener('hashchange',fromHash);
 const before=[];
 addEventListener('beforeprint',()=>{before.length=0;panels.forEach(p=>{if(p.hidden)before.push(p);p.hidden=false;});});
 addEventListener('afterprint',()=>activate(selected));
 function prepare(){
  const packet=JSON.parse(JSON.stringify(originalPacket));
  packet.selected_branch=selected;packet.required_readings=packet.required_readings_by_branch[selected]||packet.required_readings;
  packet.runtime_reading_log=[];
  packet.learning_task=selected==='all'?Object.values(packet.branch_tasks||{}).join('\n'):(packet.branch_tasks||{})[selected];
  const notice='当前分支：'+selected+'。共同正文保留；以本次 required_readings 为必读，实际取得指定完整单元后再教。未选分支仅为附带资料。\n当前任务：'+packet.learning_task+'\n\n';
  context.value=notice+original.replace(pattern,(_,head,_json,tail)=>head+JSON.stringify(packet,null,2)+tail);
 }
 document.addEventListener('click',ev=>{if(ev.target.closest('[data-teach]'))prepare();},true);
 addEventListener('message',ev=>{
  if(ev.origin!==location.origin||ev.data?.type!=='eib-reading-branch')return;
  const frame=[...body.querySelectorAll('iframe')].find(f=>f.contentWindow===ev.source);
  if(frame&&ev.data.branch==='dealer-channel')activate('dealer-channel');
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
