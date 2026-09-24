import {callOutcome, informationCell, conditionalMean} from './math.js';
const zh = document.documentElement.lang.startsWith('zh');
const q = (s,root=document)=>root.querySelector(s);
const qa = (s,root=document)=>[...root.querySelectorAll(s)];
const t=(a,b)=>zh?a:b;
const searchShortcut=q('[data-search-shortcut]');
if(searchShortcut)searchShortcut.textContent=/Mac|iPhone|iPad/.test(navigator.platform)?'⌘ K':'Ctrl K';

// Keep the complete sentence in the source; only supplementary spans collapse.
for(const [index,group] of qa('[data-text-versions]').entries()){
  const details=qa('[data-text-detail]',group),button=q('[data-text-version-toggle]',group);
  if(!details.length||!button)continue;
  details.forEach((part,partIndex)=>part.id||=(group.id||'text-versions-'+(index+1))+'-detail-'+(partIndex+1));
  button.setAttribute('aria-controls',details.map(part=>part.id).join(' '));
  let expanded=false;
  const show=value=>{
    expanded=value;
    details.forEach(part=>part.hidden=!expanded);
    button.setAttribute('aria-expanded',String(expanded));
    button.textContent=expanded?t('（简明版）','(Brief)'):t('（详细版）','(Details)');
  };
  button.addEventListener('click',()=>show(!expanded));
  show(false);
  button.hidden=false;
}

// Each experiment is rendered once, then placed beside its explanation.
// Without scripting it remains a complete, linked disclosure at the page end.
for(const slot of qa('[data-experiment-slot]')){
  const experiment=document.getElementById(slot.dataset.experimentSlot);
  if(!experiment?.matches('.experiment-embed')||slot.contains(experiment))continue;
  slot.append(experiment);slot.classList.add('experiment-slot');
}
for(const section of qa('.entry-experiments')){
  if(q('.experiment-embed',section))continue;
  section.hidden=true;
  qa(':is(.entry-toc,.entry-mobile-toc) a[href="#'+section.id+'"]').forEach(link=>link.hidden=true);
}

// Same-origin labs grow with their content, keeping one page scroll for reading.
for(const frame of qa('.experiment-frame')){
  const fit=()=>{
    const body=frame.contentDocument?.body;
    if(!body||!frame.getClientRects().length)return;
    const style=frame.contentWindow.getComputedStyle(body);
    const height=Math.ceil(body.getBoundingClientRect().height+(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0)+4);
    if(height>4){frame.style.height=Math.max(320,height)+'px';frame.classList.add('is-fitted');}
  };
  let observer;
  const observe=()=>{
    if(new URL(frame.src,location.href).origin!==location.origin)return;
    observer?.disconnect();
    const body=frame.contentDocument?.body;if(!body)return;
    observer=new ResizeObserver(fit);observer.observe(body);
    frame.contentDocument.fonts?.ready.then(fit);fit();
  };
  frame.addEventListener('load',observe);
  if(frame.contentDocument?.readyState==='complete')observe();
  frame.closest('details')?.addEventListener('toggle',fit);
}

// Industry branches preserve the full original text and work as normal reading
// sections until enhancement succeeds. Deep links reveal the relevant branch.
const readingBranchControllers=new Map();
for(const body of qa('.entry-body')){
  const branches=qa('[data-reading-branch]',body);if(branches.length<2)continue;
  let controls=q('[data-reading-branch-controls]',body);
  if(!controls){controls=document.createElement('div');controls.dataset.readingBranchControls='';branches[0].before(controls);}
  controls.classList.add('reading-branch-controls');controls.setAttribute('role','group');controls.setAttribute('aria-label',t('选择行业带读','Choose an industry branch'));
  if(!q('[data-select-reading-branch]',controls)){
    const label=document.createElement('span');label.textContent=t('选择一个行业深入读：','Choose an industry to read:');controls.append(label);
    for(const branch of branches.filter((value,index,list)=>list.findIndex(item=>item.dataset.readingBranch===value.dataset.readingBranch)===index)){
      const button=document.createElement('button');button.type='button';button.dataset.selectReadingBranch=branch.dataset.readingBranch;
      button.textContent=branch.dataset.branchLabel||({retail:t('零售 · Costco','Retail · Costco'),bank:t('银行 · JPMorgan','Banking · JPMorgan')}[branch.dataset.readingBranch])||q('h2,h3',branch)?.textContent||branch.dataset.readingBranch;
      controls.append(button);
    }
    const all=document.createElement('button');all.type='button';all.dataset.selectReadingBranch='all';all.textContent=t('展开全部行业','Show all industries');controls.append(all);
  }
  const buttons=qa('[data-select-reading-branch]',controls);
  branches.forEach(branch=>{
    if(branch.id)return;
    const base='reading-branch-'+branch.dataset.readingBranch;let id=base,index=2;
    while(document.getElementById(id))id=base+'-'+index++;
    branch.id=id;
  });
  let activeBranch=branches[0].dataset.readingBranch;
  const branchFrames=qa('iframe',body);
  function syncBranchFrame(frame){
    if(new URL(frame.src,location.href).origin===location.origin)
      frame.contentWindow?.postMessage({type:'notebook-reading-branch',branch:activeBranch},location.origin);
  }
  branchFrames.forEach(frame=>frame.addEventListener('load',()=>syncBranchFrame(frame)));
  function activateBranch(key){
    activeBranch=key;
    branches.forEach(branch=>{branch.hidden=key!=='all'&&branch.dataset.readingBranch!==key;});
    buttons.forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.selectReadingBranch===key));button.setAttribute('aria-controls',branches.filter(branch=>button.dataset.selectReadingBranch==='all'||branch.dataset.readingBranch===button.dataset.selectReadingBranch).map(branch=>branch.id).join(' '));});
    branchFrames.forEach(syncBranchFrame);
    for(const link of qa(':is(.entry-toc,.entry-mobile-toc) a[href^="#"]')){
      let id;try{id=decodeURIComponent(link.hash.slice(1));}catch{continue;}
      const branch=document.getElementById(id)?.closest('[data-reading-branch]');
      if(branches.includes(branch)){const item=link.closest('li')||link;item.hidden=branch.hidden;}
    }
  }
  branches.forEach(branch=>readingBranchControllers.set(branch,activateBranch));
  buttons.forEach(button=>button.addEventListener('click',()=>activateBranch(button.dataset.selectReadingBranch)));
  controls.hidden=false;activateBranch(branches[0].dataset.readingBranch);
}

// Cases are all readable until enhancement succeeds.
for (const group of qa('.case-group')) {
  const cards=qa('.case-card',group), tabs=qa('[data-case]',group), select=q('[data-case-select]',group);
  let all=false;
  function activate(id,changeHash=false) {
    all=false;
    cards.forEach(c=>{c.hidden=c.id!==id; c.setAttribute('role','tabpanel');});
    tabs.forEach(b=>{const active=b.dataset.case===id;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
    select.value=id;
    q('[data-show-cases]',group).setAttribute('aria-pressed','false');
    if(changeHash) history.replaceState(null,'','#'+id);
  }
  const hash=decodeURIComponent(location.hash.slice(1));
  activate(cards.some(c=>c.id===hash)?hash:cards[0].id);
  q('.case-controls',group).hidden=false;
  tabs.forEach((b,i)=>{
    b.addEventListener('click',()=>activate(b.dataset.case,true));
    b.addEventListener('keydown',event=>{
      const offset=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;
      let next=event.key==='Home'?0:event.key==='End'?tabs.length-1:offset?(i+offset+tabs.length)%tabs.length:null;
      if(next!==null){event.preventDefault();activate(tabs[next].dataset.case,true);tabs[next].focus();}
    });
  });
  select.addEventListener('change',()=>activate(select.value,true));
  q('[data-show-cases]',group).addEventListener('click',()=>{
    all=!all;
    if(all){cards.forEach(c=>c.hidden=false);tabs.forEach(b=>b.setAttribute('aria-selected','false'));q('[data-show-cases]',group).setAttribute('aria-pressed','true');}
    else activate(select.value);
  });
  window.addEventListener('hashchange',()=>{
    const id=decodeURIComponent(location.hash.slice(1));
    if(cards.some(c=>c.id===id)){activate(id);q('#'+id).scrollIntoView();}
  });
}

// Fixed data, live interaction.
for(const figure of qa('[data-diagram]')) {
  qa('input,select,button',figure).forEach(c=>c.disabled=false);
  if(figure.dataset.diagram==='call'){
    const inputs=Object.fromEntries(qa('input',figure).map(el=>[el.name,el]));
    const update=()=>{
      const strike=+inputs.strike.value,premium=+inputs.premium.value,spot=+inputs.spot.value;
      Object.entries(inputs).forEach(([key,input])=>q('[data-value="'+key+'"]',figure).textContent=input.value);
      const result=callOutcome(spot,strike,premium);
      Object.entries(result).forEach(([key,value])=>q('[data-result="'+key+'"]',figure).textContent=value);
      const low=-35,high=Math.max(200-strike,30), x=s=>54+s/200*554,y=v=>251-(v-low)/(high-low)*227;
      ['payoff','profit'].forEach(key=>{
        const path=[0,strike,200].map((s,i)=>(i?'L':'M')+x(s)+' '+y(callOutcome(s,strike,premium)[key])).join(' ');
        q('[data-line="'+key+'"]',figure).setAttribute('d',path);
        const dot=q('[data-point="'+key+'"]',figure);dot.setAttribute('cx',x(spot));dot.setAttribute('cy',y(result[key]));
      });
      const axes=q('.chart-axis',figure);axes.setAttribute('d','M54 24V251H608M54 '+y(0)+'H608');
      q('.chart-labels text:not([data-yhigh])',figure).setAttribute('y',y(0)+5);
      q('[data-yhigh]',figure).textContent=high;
      const marker=q('[data-marker]',figure);marker.setAttribute('x1',x(spot));marker.setAttribute('x2',x(spot));
      q('svg',figure).setAttribute('aria-label',t('到期价格','Terminal price')+' '+spot+', '+t('到期收益','payoff')+' '+result.payoff+', '+t('净盈亏','profit')+' '+result.profit);
    };
    Object.values(inputs).forEach(input=>input.addEventListener('input',update));update();
  } else if(figure.dataset.diagram==='expectation'){
    let face=1;const select=q('select',figure);
    const update=()=>{
      const cell=informationCell(face,select.value);
      qa('[data-face]',figure).forEach(button=>{
        const f=+button.dataset.face;
        button.classList.toggle('in-cell',cell.includes(f));
        button.setAttribute('aria-pressed',String(f===face));
        q('[data-mean]',button).textContent=conditionalMean(f,select.value);
      });
      q('[data-result="cell"]',figure).textContent='{'+cell.join(', ')+'}';
      q('[data-result="mean"]',figure).textContent=conditionalMean(face,select.value);
    };
    qa('[data-face]',figure).forEach(button=>button.addEventListener('click',()=>{face=+button.dataset.face;update();}));
    select.addEventListener('change',update);update();
  } else if(figure.dataset.diagram==='balance'){
    const buttons=qa('[data-event]',figure),panels=qa('[data-event-panel]',figure);
    const update=key=>{
      buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.event===key)));
      panels.forEach(p=>p.hidden=p.dataset.eventPanel!==key);
    };
    buttons.forEach(b=>b.addEventListener('click',()=>update(b.dataset.event)));
    q('.event-tabs',figure).hidden=false;
    update('sale');
  }
}

// Old anchors remain real document targets. Move aliases beside their canonical
// sections, and open disclosures on a direct link without rewriting saved URLs.
for(const alias of qa('[data-anchor-target]')) {
  const destination=new URL(alias.dataset.anchorUrl||'#'+alias.dataset.anchorTarget,location.href);
  if(destination.origin!==location.origin||destination.pathname!==location.pathname)continue;
  const target=document.getElementById(alias.dataset.anchorTarget.replace(/^#/,''));
  if(target&&target!==alias){target.before(alias);alias.classList.add('is-resolved');}
}
function openHashTarget(){
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  let target=document.getElementById(id);
  if(target?.dataset.anchorTarget){
    const destination=new URL(target.dataset.anchorUrl||'#'+target.dataset.anchorTarget,location.href);
    if(destination.origin===location.origin&&destination.pathname===location.pathname)target=document.getElementById(target.dataset.anchorTarget.replace(/^#/,''))||target;
  }
  if(!target)return;
  const readingBranch=target.closest('[data-reading-branch]');
  if(readingBranch?.hidden)readingBranchControllers.get(readingBranch)?.(readingBranch.dataset.readingBranch);
  for(let ancestor=target;ancestor;ancestor=ancestor.parentElement){if(ancestor instanceof HTMLDetailsElement)ancestor.open=true;}
  const card=target.closest('.case-card');
  if(card?.hidden){const tab=qa('[data-case]',card.closest('.case-group')).find(button=>button.dataset.case===card.id);tab?.click();}
  requestAnimationFrame(()=>target.scrollIntoView());
}
openHashTarget();window.addEventListener('hashchange',openHashTarget);

// Read references without losing the paragraph. Clicking pins; hovering previews.
const panel=q('#reference-panel'), content=q('#reference-content'),referenceBackdrop=q('#reference-backdrop');
let origin=null, pinned=false, hoverTimer, stack=[],referenceInert=[];
const referenceMobile=matchMedia('(max-width:760px)');
function syncOverlayScroll(){
  document.body.classList.toggle('has-reader-dialog',!!q('.reader-dialog[open]')||(!panel.hidden&&pinned&&referenceMobile.matches));
}
function syncReferenceMode(){
  const modal=!panel.hidden&&pinned&&referenceMobile.matches;
  referenceBackdrop.hidden=!modal;
  panel.setAttribute('aria-modal',String(modal));
  panel.classList.toggle('is-pinned',pinned);
  if(modal&&!referenceInert.length){
    referenceInert=[...document.body.children].filter(el=>el!==panel&&el!==referenceBackdrop&&!el.inert&&!el.matches('script,style,link'));
    referenceInert.forEach(el=>el.inert=true);
  }else if(!modal&&referenceInert.length){
    referenceInert.forEach(el=>el.inert=false);referenceInert=[];
  }
  syncOverlayScroll();
}
referenceMobile.addEventListener('change',syncReferenceMode);
const referenceTemplates=new Map(qa('template[data-ref]').map(template=>[template.dataset.ref,template]));
const referenceURLs=new Map();
for(const [id,template] of referenceTemplates){
  const urls=template.dataset.url?[template.dataset.url]:[];
  if(template.dataset.additionalUrls){try{const additional=JSON.parse(template.dataset.additionalUrls);if(Array.isArray(additional))urls.push(...additional);}catch{}}
  for(const url of urls){if(typeof url!=='string')continue;try{referenceURLs.set(new URL(url,location.href).href,id);}catch{}}
}
function wrapTables(root){
  for(const table of qa('table',root)){
    if(table.parentElement.classList.contains('notebook-table-scroll'))continue;
    const wrap=document.createElement('div');wrap.className='notebook-table-scroll';wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label',table.caption?.textContent||t('表格，可水平滚动','Table, scroll horizontally'));
    table.before(wrap);wrap.append(table);
  }
}
qa('.entry-body').forEach(wrapTables);

// Whole-page Markdown keeps native footnotes. Their actual rendered content is
// also the preview, so bibliography text is never maintained in a second place.
for(const link of qa('.entry-body a[role="doc-noteref"], .entry-body a.footnote-ref')){
  let footnoteID;try{footnoteID=decodeURIComponent(new URL(link.href).hash.slice(1));}catch{continue;}
  const footnote=document.getElementById(footnoteID);if(!footnote)continue;
  const key='footnote-'+footnoteID;
  if(!referenceTemplates.has(key)){
    const template=document.createElement('template');
    const heading=document.createElement('h2');heading.dataset.referenceTitle='';heading.tabIndex=-1;heading.textContent=t('来源与注释 ','Source and note ')+link.textContent.trim();
    const body=document.createElement('div');body.className='prose';
    for(const child of footnote.childNodes)body.append(child.cloneNode(true));
    qa('[id]',body).forEach(el=>el.removeAttribute('id'));
    qa('a[role="doc-backlink"], a.footnote-backref',body).forEach(el=>el.remove());
    const full=document.createElement('a');full.className='reference-open';full.href='#'+footnoteID;full.textContent=t('查看文末注释 ↗','View the endnote ↗');
    template.content.append(heading,body,full);referenceTemplates.set(key,template);
  }
  link.dataset.reference=key;link.setAttribute('aria-haspopup','dialog');
}
function enhanceReferences(root){
  for(const link of qa('a[href]',root)){
    if(link.matches('[role="doc-backlink"],.footnote-backref,.reference-open'))continue;
    if(!link.dataset.reference){
      const destination=new URL(link.getAttribute('href'),location.href);
      const id=referenceURLs.get(destination.href)||(destination.origin!==location.origin?referenceURLs.get(destination.origin+destination.pathname+destination.search):null);
      if(id){link.dataset.reference=id;link.classList.add('inline-ref');}
    }
    if(link.dataset.reference)link.setAttribute('aria-haspopup','dialog');
  }
}
qa('.entry-body,.graph-relations,.entry-actions,.catalogue-tools').forEach(enhanceReferences);
function showReference(id,link,pin=false,push=true){
  const template=referenceTemplates.get(id);
  if(!template)return false;
  clearTimeout(hoverTimer);pinned=pin;
  const external=link&&!panel.contains(link);
  if(external){origin?.removeAttribute('aria-expanded');origin=link;origin.setAttribute('aria-expanded','true');stack=[];}
  if(push&&stack.length)stack.at(-1).scroll=content.scrollTop;
  if(push&&stack.at(-1)?.id!==id)stack.push({id,href:link?.getAttribute('href'),locator:link?.getAttribute('title')?.trim(),scroll:0});
  const current=stack.at(-1);
  window.MathJax?.typesetClear?.([content]);
  content.replaceChildren(template.content.cloneNode(true));
  q('[data-reference-title]',content).id='reference-title';
  if(current&&!id.startsWith('footnote-')){
    if(current.locator){const note=document.createElement('p');note.className='reference-meta reference-location';note.textContent=current.locator;q('#reference-title',content)?.after(note);}
    const original=q('.reference-open',content),href=current.href;
    if(original&&href)original.href=new URL(href,location.href).href;
  }
  wrapTables(content);enhanceReferences(content);
  panel.hidden=false;
  q('#reference-back').disabled=stack.length<2;
  q('#reference-back').setAttribute('aria-label',t('返回上一个引用','Back to the previous reference'));
  syncReferenceMode();
  content.scrollTop=current?.scroll||0;
  if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([content]).catch(()=>{});
  if(pin)q('#reference-title',content)?.focus({preventScroll:true});
  return true;
}
function closeReference(restore=false){
  clearTimeout(hoverTimer);panel.hidden=true;pinned=false;stack=[];
  origin?.removeAttribute('aria-expanded');syncReferenceMode();
  if(restore)origin?.focus({preventScroll:true});
}
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-reference]');
  if(link&&event.button===0&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey&&referenceTemplates.has(link.dataset.reference)){event.preventDefault();showReference(link.dataset.reference,link,true);}
  else if(event.target.closest('#reference-content .reference-open'))closeReference();
});
document.addEventListener('mouseover',event=>{
  const link=event.target.closest('a[data-reference]');
  if(link && !pinned && matchMedia('(hover:hover)').matches){
    clearTimeout(hoverTimer);
    hoverTimer=setTimeout(()=>showReference(link.dataset.reference,link),220);
  }
});
document.addEventListener('mouseout',event=>{
  const link=event.target.closest('a[data-reference]');
  if(link&&!link.contains(event.relatedTarget)&&!pinned){clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>closeReference(),350);}
});
panel.addEventListener('mouseenter',()=>clearTimeout(hoverTimer));
panel.addEventListener('mouseleave',()=>{if(!pinned)hoverTimer=setTimeout(()=>closeReference(),350);});
q('#reference-close').addEventListener('click',()=>closeReference(true));
referenceBackdrop.addEventListener('click',()=>closeReference(true));
q('#reference-back').addEventListener('click',()=>{if(stack.length<2)return;stack.pop();showReference(stack.at(-1).id,null,true,false);});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!panel.hidden){event.preventDefault();closeReference(true);}
  if(event.key==='Tab'&&!panel.hidden&&pinned&&referenceMobile.matches){
    const focusable=qa('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,[tabindex="0"]',panel).filter(el=>el.getClientRects().length),first=focusable[0],last=focusable.at(-1);
    if(event.shiftKey&&(document.activeElement===first||document.activeElement===q('#reference-title'))){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});

// Prompt and full content travel together.
qa('[data-teach]').forEach(b=>b.addEventListener('click',()=>{
  closeReference();
  q('#teach-copy-text').value=q('#teaching-context').value;
  q('#copy-status').textContent='';q('#teach-dialog').showModal();syncOverlayScroll();
  q('#copy-teaching').focus();
}));
q('#copy-teaching').addEventListener('click',async()=>{
  const text=q('#teach-copy-text');
  try{await navigator.clipboard.writeText(text.value);q('#copy-status').textContent=t('完整材料已复制.','Complete material copied.');}
  catch{ text.focus();text.select();q('#copy-status').textContent=t('材料已选中，按 Ctrl/⌘C 复制.','Material selected. Press Ctrl/⌘C to copy.');}
});
qa('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
qa('.reader-dialog').forEach(dialog=>{
  dialog.addEventListener('close',syncOverlayScroll);
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog)return;
    const bounds=dialog.getBoundingClientRect();
    if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();
  });
});
qa('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));

// Unicode substring matching supports Chinese terms and explicit aliases.
let searchIndex=null,indexRequest=null,indexIncomplete=false,searchKind='all';
const searchDialog=q('#search-dialog'),searchInput=q('#search-query'),searchLang=q('#search-lang');
const normalize=s=>String(s||'').normalize('NFKC').toLocaleLowerCase();
const searchResults=q('#search-results'),searchStatus=q('#search-status');
function readingSearchPages(){
  try{const pages=JSON.parse(q('#reading-search-pages')?.textContent||'[]');return Array.isArray(pages)?pages:[];}catch{return [];}
}
async function loadIndex(){
  if(searchIndex&&!indexIncomplete)return searchIndex;
  if(indexRequest)return indexRequest;
  const fetchJSON=async path=>{const response=await fetch(path);if(!response.ok)throw new Error('Search index unavailable');return response.json();};
  indexRequest=(async()=>{
    const resources=await Promise.allSettled([
      fetchJSON('/notebook/search.json'),
      ...['zh','en'].map(async lang=>(await fetchJSON('/'+lang+'/index.json')).filter(e=>!new URL(e.permalink,location.origin).pathname.includes('/notebook/')).map(e=>({
        lang,title:e.title,summary:new DOMParser().parseFromString(e.summary||'','text/html').body.textContent.trim().slice(0,180),text:e.content,url:new URL(e.permalink,location.origin).pathname,
        kind:new URL(e.permalink,location.origin).pathname.includes('/notes/')?'lecture':new URL(e.permalink,location.origin).pathname.includes('/blog/')?'blog':'page'
      })))
    ]);
    indexIncomplete=resources.some(result=>result.status==='rejected');
    const entries=[...resources.flatMap(result=>result.status==='fulfilled'&&Array.isArray(result.value)?result.value:[]),...readingSearchPages()];
    if(!entries.length&&indexIncomplete)throw new Error('Search index unavailable');
    const unique=new Map();
    for(const entry of entries){
      if(!entry.url||!entry.title)continue;
      const url=new URL(entry.url,location.origin),key=url.href;
      const merged={...unique.get(key),...entry};
      merged.lang=merged.lang||url.pathname.split('/')[1];
      merged._title=normalize(merged.title);merged._summary=normalize(merged.summary);
      merged._text=normalize([merged.title,merged.summary,merged.text,merged.node_id,merged.id].join(' '));
      unique.set(key,merged);
    }
    searchIndex=[...unique.values()];return searchIndex;
  })();
  try{return await indexRequest;}finally{indexRequest=null;}
}
const kindLabel=kind=>({blog:'Blog',lecture:t('笔记与讲义','Notes & lectures'),company:t('公司资料','Company'),research:t('研究记录','Research'),reference:t('基础参考','Reference'),page:t('页面','Page')}[kind]||t('投资词条','Investment note'));
const subjectLabel=subject=>({markets:t('金融市场与工具','Markets & instruments'),business:t('企业经营与财务','Business & finance'),industry:t('经济与行业','Economy & industries'),portfolio:t('投资与组合','Investing & portfolios'),quant:t('数学、统计与计算','Mathematics & computation'),mathematics:t('数学','Mathematics')}[subject]||'');
function search(){
  const terms=normalize(searchInput.value.trim()).split(/\s+/).filter(Boolean),lang=searchLang.value;
  const score=e=>terms.reduce((total,term)=>total+(e._title===term?60:e._title.includes(term)?20:e._summary.includes(term)?4:1),0);
  const rows=(searchIndex||[]).filter(e=>(lang==='all'||e.lang===lang)&&(searchKind==='all'||(searchKind==='notebook'?e.url.includes('/notebook/'):e.kind===searchKind))&&terms.every(term=>e._text.includes(term))).sort((a,b)=>score(b)-score(a));
  searchResults.replaceChildren(...rows.map(e=>{
    const a=document.createElement('a');a.href=e.url;a.className='search-result';
    const meta=document.createElement('span');meta.className='search-result-meta';
    const kind=document.createElement('span');kind.className='search-result-kind';kind.textContent=kindLabel(e.kind);meta.append(kind);
    const detail=[e.node_id,e.format,subjectLabel(e.subject),lang==='all'?(e.lang==='zh'?'中文':'English'):''].filter(Boolean);
    if(detail.length){const info=document.createElement('span');info.textContent=detail.join(' · ');meta.append(info);}
    const title=document.createElement('strong');title.textContent=e.title;
    const desc=document.createElement('p');desc.textContent=e.summary||'';
    const arrow=document.createElement('span');arrow.className='search-result-arrow';arrow.textContent=e.format==='PDF'?'↗':'→';arrow.setAttribute('aria-hidden','true');
    a.append(meta,title,desc,arrow);return a;
  }));
  if(!rows.length&&searchIndex){
    const empty=document.createElement('div');empty.className='search-empty';
    const title=document.createElement('strong');title.textContent=t('没有找到匹配内容','No matching results');
    const hint=document.createElement('p');hint.textContent=t('试试更短的关键词，或切换内容类型与语言.','Try a shorter keyword, or change the content type or language.');
    empty.append(title,hint);searchResults.append(empty);
  }
  searchStatus.textContent=t(rows.length+' 项内容',rows.length+' results')+(indexIncomplete?t(' · 部分索引未载入',' · Some indexes unavailable'):'');
  searchResults.scrollTop=0;
}
async function openSearch(){
  closeReference();
  q('#teach-dialog').close();
  if(!searchDialog.open)searchDialog.showModal();
  syncOverlayScroll();searchInput.focus();
  searchStatus.textContent=t('正在载入…','Loading…');
  try{await loadIndex();search();}catch{searchStatus.textContent=t('搜索暂时不可用，请从目录继续阅读.','Search is unavailable. Please use the catalogue.');}
}
qa('[data-open-search]').forEach(b=>b.addEventListener('click',openSearch));
searchInput.addEventListener('input',search);searchLang.addEventListener('change',search);
qa('[data-search-kind]').forEach(button=>button.addEventListener('click',()=>{
  searchKind=button.dataset.searchKind;
  qa('[data-search-kind]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));search();
}));
searchDialog.addEventListener('keydown',event=>{
  if(event.isComposing||event.altKey||event.ctrlKey||event.metaKey)return;
  const results=qa('a.search-result',searchResults),index=results.indexOf(document.activeElement);
  let next=null;
  if(event.target===searchInput&&(event.key==='ArrowDown'||event.key==='ArrowUp'))next=event.key==='ArrowDown'?0:results.length-1;
  else if(index!==-1){
    if(event.key==='ArrowDown')next=Math.min(index+1,results.length-1);
    if(event.key==='ArrowUp'){if(index===0){event.preventDefault();searchInput.focus();return;}next=index-1;}
    if(event.key==='Home')next=0;
    if(event.key==='End')next=results.length-1;
  }
  if(next!==null&&results[next]){event.preventDefault();results[next].focus({preventScroll:true});results[next].scrollIntoView({block:'nearest'});}
  if(event.target===searchInput&&event.key==='Enter'&&results[0]){event.preventDefault();results[0].click();}
});
document.addEventListener('keydown',event=>{
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'&&!event.altKey){event.preventDefault();openSearch();}
});

// The company library searches the profiles already present in this language.
const companyQuery=q('[data-company-query]');
if(companyQuery){
  const cards=qa('[data-company-cards] .entry-card'),status=q('[data-company-status]');
  companyQuery.addEventListener('input',()=>{
    const terms=normalize(companyQuery.value.trim()).split(/\s+/).filter(Boolean);let count=0;
    for(const card of cards){card.hidden=!terms.every(term=>normalize(card.textContent).includes(term));if(!card.hidden)count++;}
    status.textContent=t(count+' 份公司资料',count+' company profiles');
  });
}

// Keep exercise answers and text alternatives available on paper.
let printDisclosures=[],printRelations=[],printBranches=[];
window.addEventListener('beforeprint',()=>{
  printDisclosures=qa('.learning-check details, .diagram-description, .entry-body details, .graph-relations').filter(d=>!d.open);
  printDisclosures.forEach(d=>d.open=true);
  printRelations=qa('.graph-relations li[hidden]');printRelations.forEach(row=>row.hidden=false);
  printBranches=qa('[data-reading-branch][hidden]');printBranches.forEach(branch=>branch.hidden=false);
});
window.addEventListener('afterprint',()=>{
  printDisclosures.forEach(d=>d.open=false);printDisclosures=[];
  printRelations.forEach(row=>row.hidden=true);printRelations=[];
  printBranches.forEach(branch=>branch.hidden=true);printBranches=[];
});
