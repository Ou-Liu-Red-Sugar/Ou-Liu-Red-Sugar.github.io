/* Per-batch height and optional-reading scope; no financial calculation. */
(function(){'use strict';
function init(){
 const article=document.querySelector('.entry-article');if(!article||!/^zh-m(1[5-9]|2[0-3])$/.test(article.dataset.entryId||''))return;
 const body=article.querySelector('.entry-body');if(!body)return;
 addEventListener('message',event=>{
  if(event.origin!==location.origin||event.data?.type!=='mefg-height'||!Number.isFinite(event.data.height))return;
  const frame=[...body.querySelectorAll('iframe')].find(f=>f.contentWindow===event.source);if(!frame)return;
  const owner=frame.closest('[data-experiment-id]');if(owner?.dataset.experimentId!==event.data.experiment)return;
  frame.style.height=Math.max(650,Math.min(16000,event.data.height))+'px';
 });
 if(article.dataset.entryId!=='zh-m22')return;
 const context=document.getElementById('teaching-context');if(!context)return;
 const original=context.value,pattern=/(## Required readings and runtime protocol\r?\n```json\r?\n)([\s\S]*?)(\r?\n```)/;
 const match=original.match(pattern);if(!match)return;let initial;try{initial=JSON.parse(match[2]);}catch(_){return;}
 document.addEventListener('click',event=>{
  if(!event.target.closest('[data-teach]'))return;
  const active=!!body.querySelector('details[data-agent-option="dealer-gamma"][open]');
  const packet=JSON.parse(JSON.stringify(initial));packet.selected_branch=active?'dealer-gamma':'core';
  packet.required_readings=packet.required_readings_by_branch[packet.selected_branch];packet.runtime_reading_log=[];
  packet.learning_task=packet.branch_tasks[packet.selected_branch];
  let value=original.replace(pattern,(_,a,_json,b)=>a+JSON.stringify(packet,null,2)+b);
  if(!active)value=value.replace(/(## Supplied entry\r?\n)([\s\S]*?)(?=\r?\n## Additional teaching material)/,
   (_,heading,md)=>heading+md.replace(/<details data-agent-option="dealer-gamma">[\s\S]*?<\/details>/,''));
  context.value='当前范围：'+packet.selected_branch+'。正文、静态等价、实际输入和当前必读同源；先实际读取本次 required_readings。\n当前任务：'+packet.learning_task+'\n\n'+value;
 },true);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
