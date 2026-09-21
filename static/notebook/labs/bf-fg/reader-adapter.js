/* BF-F/G: carry one same-source body and actual selected reading units. */
(function(){'use strict';
function init(){
 const article=document.querySelector('.entry-article');if(!article||!/^zh-bf(19|20|21|22)$/.test(article.dataset.entryId||''))return;
 const body=article.querySelector('.entry-body'),context=document.getElementById('teaching-context');if(!body||!context)return;
 const original=context.value,pattern=/(## Required readings and runtime protocol\r?\n```json\r?\n)([\s\S]*?)(\r?\n```)/;
 const match=original.match(pattern);if(!match)return;let initial;try{initial=JSON.parse(match[2]);}catch(_){return;}
 const current=()=>body.querySelector('[data-select-reading-branch][aria-pressed="true"]')?.dataset.selectReadingBranch||initial.default_branch;
 function projectInputs(data,spec,selected){
  const paths=[...spec.metadata_pointers,...spec.common_pointers];
  for(const [branch,fields] of Object.entries(spec.branch_pointers))if(selected==='all'||branch===selected)paths.push(...fields);
  const result={};for(const pointer of new Set(paths)){
   const keys=pointer.slice(1).split('/');let source=data,target=result;
   for(const key of keys)source=source[key];
   for(const key of keys.slice(0,-1))target=target[key]??=( {} );
   target[keys.at(-1)]=JSON.parse(JSON.stringify(source));
  }return result;
 }
 function prepare(){
  const packet=JSON.parse(JSON.stringify(initial)),selected=current();
  const active=[...body.querySelectorAll('details[data-agent-option][open]')].filter(d=>{
   const section=d.closest('[data-reading-branch]');return !section||selected==='all'||section.dataset.readingBranch===selected;
  }).map(d=>d.dataset.agentOption);
  let required=[...(packet.required_readings_by_branch[selected]||packet.required_readings)];
  for(const reading of packet.optional_readings||[])if(active.includes(reading.activated_by))required.push(reading);
  const seen=new Set();packet.required_readings=required.filter(r=>{const k=[r.source_id,r.required_unit.locator,r.branch].join('|');if(seen.has(k))return false;seen.add(k);return true;});
  packet.selected_branch=selected;packet.activated_options=active;packet.runtime_reading_log=[];
  packet.supplied_inputs=projectInputs(initial.supplied_inputs,packet.input_projection,selected);
  packet.learning_task=selected==='all'?Object.values(packet.branch_tasks).join('\n'):packet.branch_tasks[selected]||packet.branch_tasks.core;
  let result=original.replace(pattern,(_,a,_old,b)=>a+JSON.stringify(packet,null,2)+b);
  if(selected!=='all')result=result.replace(/(## Supplied entry\r?\n)([\s\S]*?)(?=\r?\n## Additional teaching material)/,
   (_,heading,md)=>heading+md.replace(/<section data-reading-branch="([^"]+)">([\s\S]*?)<\/section>/g,(_section,key,inner)=>key===selected?inner:''));
  context.value='当前分支：'+selected+'；启用选读：'+(active.join('、')||'无')+'. 共同与所选分支的同源正文、完整必要原表与输入、静态说明和解析随包提供；先实际读取本次 required_readings. 未启用的扩展不得冒称已读. \n当前任务：'+packet.learning_task+'\n\n'+result;
 }
 document.addEventListener('click',event=>{if(event.target.closest('[data-teach]'))prepare();},true);
 function sync(frame){if(new URL(frame.src,location.href).origin===location.origin)frame.contentWindow?.postMessage({type:'notebook-reading-branch',branch:current()},location.origin);}
 body.querySelectorAll('iframe').forEach(frame=>{frame.addEventListener('load',()=>sync(frame));sync(frame);});
 body.querySelectorAll('[data-select-reading-branch]').forEach(button=>button.addEventListener('click',()=>body.querySelectorAll('iframe').forEach(sync)));
 addEventListener('message',event=>{
  if(event.origin!==location.origin||!['bffg-branch','bffg-height'].includes(event.data?.type))return;
  const frame=[...body.querySelectorAll('iframe')].find(f=>f.contentWindow===event.source);if(!frame)return;
  const owner=frame.closest('[data-experiment-id]');if(owner?.dataset.experimentId!==event.data.experiment)return;
  if(event.data.type==='bffg-height'){if(Number.isFinite(event.data.height))frame.style.height=Math.min(16000,Math.max(650,event.data.height))+'px';return;}
  const button=[...body.querySelectorAll('[data-select-reading-branch]')].find(b=>b.dataset.selectReadingBranch===event.data.branch);button?.click();
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
