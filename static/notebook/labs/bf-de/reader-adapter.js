/* BF-D/E only: keep the supplied whole entry and select its actual reading task. */
(function(){'use strict';
const article=document.querySelector('.entry-article');
if(!article||!/^zh-bf(12|13|14|16|17|18)$/.test(article.dataset.entryId||''))return;
const body=article.querySelector('.entry-body'),context=document.getElementById('teaching-context');
if(!body||!context)return;
const original=context.value;
const pattern=/(## Required readings and runtime protocol\r?\n```json\r?\n)([\s\S]*?)(\r?\n```)/;
const match=original.match(pattern);if(!match)return;
let originalPacket;try{originalPacket=JSON.parse(match[2]);}catch(_){return;}
function prepareContext(){
 const packet=JSON.parse(JSON.stringify(originalPacket));
 const button=body.querySelector('[data-select-reading-branch][aria-pressed="true"]');
 const selected=button?.dataset.selectReadingBranch||packet.default_branch||packet.selected_branch;
 const activated=[...body.querySelectorAll('details[data-agent-option][open]')].map(x=>x.dataset.agentOption);
 const all=selected==='all'||activated.includes('cross');
 const by=packet.required_readings_by_branch||{};
 const required=all?Object.values(by).flat():(by[selected]||packet.required_readings||[]);
 for(const reading of packet.optional_readings||[])if(activated.includes(reading.activated_by))required.push(reading);
 const seen=new Set();packet.required_readings=required.filter(r=>{const key=[r.source_id,r.required_unit?.locator,r.branch].join('|');if(seen.has(key))return false;seen.add(key);return true;});
 packet.selected_branch=selected;packet.activated_options=activated;packet.runtime_reading_log=[];
 const task=all?Object.entries(packet.branch_tasks||{}).map(([k,v])=>k+'：'+v).join('\n'):(packet.branch_tasks||{})[selected]||'';
 const notice='当前阅读选择：'+selected+'；选读：'+(activated.join('、')||'无')+'. 以本次选择及下列 required_readings 为准，先实际读取，再教学；其他分支正文作为完整材料保留. \n'+(task?'当前任务：'+task+'\n':'')+'\n';
 context.value=notice+original.replace(pattern,(_,head,_json,tail)=>head+JSON.stringify(packet,null,2)+tail);
}
document.addEventListener('click',ev=>{if(ev.target.closest('[data-teach]'))prepareContext();},true);
window.addEventListener('message',ev=>{
 if(ev.origin!==location.origin||ev.data?.type!=='bfde-branch')return;
 const frame=[...body.querySelectorAll('iframe')].find(f=>f.contentWindow===ev.source);
 if(!frame||!frame.closest('[data-experiment-id]')||frame.closest('[data-experiment-id]').dataset.experimentId!==ev.data.id)return;
 const branchButton=[...body.querySelectorAll('[data-select-reading-branch]')].find(b=>b.dataset.selectReadingBranch===ev.data.branch);
 if(branchButton&&branchButton.getAttribute('aria-pressed')!=='true')branchButton.click();
});
})();
