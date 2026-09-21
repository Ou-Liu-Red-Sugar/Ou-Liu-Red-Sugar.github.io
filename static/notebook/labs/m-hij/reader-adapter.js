/* Embedded height only. Financial calculations remain in the reviewed engine. */
(function(){'use strict';
function init(){
 const article=document.querySelector('.entry-article');if(!article||!/^zh-m2[4-9]$/.test(article.dataset.entryId||''))return;
 addEventListener('message',event=>{
  if(event.origin!==location.origin||event.data?.type!=='mhij-height'||!Number.isFinite(event.data.height))return;
  const frame=[...article.querySelectorAll('iframe')].find(f=>f.contentWindow===event.source);if(!frame)return;
  if(frame.closest('[data-experiment-id]')?.dataset.experimentId!==event.data.experiment)return;
  frame.style.height=Math.max(600,Math.min(18000,event.data.height))+'px';
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
