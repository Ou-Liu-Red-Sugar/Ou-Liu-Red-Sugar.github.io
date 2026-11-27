import {callOutcome, informationCell, conditionalMean} from './math.js';
const zh = document.documentElement.lang.startsWith('zh');
const q = (s,root=document)=>root.querySelector(s);
const qa = (s,root=document)=>[...root.querySelectorAll(s)];
const t=(a,b)=>zh?a:b;
const searchShortcut=q('[data-search-shortcut]');
if(searchShortcut)searchShortcut.textContent=/Mac|iPhone|iPad/.test(navigator.platform)?'⌘ K':'Ctrl K';

// Small preferences survive between pages on this device only.
const store={
  get(key,fallback=null){try{const value=localStorage.getItem('nb.'+key);return value===null?fallback:JSON.parse(value);}catch{return fallback;}},
  set(key,value){try{localStorage.setItem('nb.'+key,JSON.stringify(value));}catch{}}
};

// Keep the complete sentence in the source; only supplementary spans collapse.
const textVersionControllers=new Map();
const textVersionGroups=[];
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
    button.textContent=expanded?t('简明版','Brief'):t('详细版','Details');
  };
  button.addEventListener('click',()=>show(!expanded));
  details.forEach(part=>textVersionControllers.set(part,show));
  textVersionGroups.push(show);
  show(false);
  button.hidden=false;
}
for(const switcher of qa('[data-detail-all]')){
  if(!textVersionGroups.length)continue;
  const apply=(on,remember)=>{
    textVersionGroups.forEach(show=>show(on));
    switcher.setAttribute('aria-pressed',String(on));
    if(remember)store.set('details',on);
  };
  switcher.hidden=false;
  switcher.addEventListener('click',()=>apply(switcher.getAttribute('aria-pressed')!=='true',true));
  if(store.get('details',false))apply(true,false);
}

// The "More" menu closes like a menu: outside click, Escape or choosing an item.
for(const menu of qa('.entry-more')){
  document.addEventListener('click',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});
  menu.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;q('summary',menu)?.focus();}});
  qa('.entry-more-menu>a,.entry-more-menu>button',menu).forEach(item=>item.addEventListener('click',()=>{menu.open=false;}));
}

// Reading progress on this device: last article and articles already opened.
const routeArticle=q('[data-route-number]');
if(routeArticle){
  const id=routeArticle.dataset.routeId;
  store.set('last',{id,number:Number(routeArticle.dataset.routeNumber),title:routeArticle.dataset.routeTitle,url:location.pathname});
  const read=store.get('read',[]);
  if(Array.isArray(read)&&!read.includes(id))store.set('read',read.concat(id).slice(-200));
}
{
  const read=new Set(store.get('read',[])||[]),last=store.get('last',null);
  for(const card of qa('[data-article]')){
    const isRead=read.has(card.dataset.article);
    card.classList.toggle('is-read',isRead);
    const badge=q('.nb-card-read',card);if(badge)badge.hidden=!isRead;
    card.classList.toggle('is-current',!!last&&last.id===card.dataset.article);
  }
  for(const step of qa('.route-steps [data-route-entry]'))step.classList.toggle('is-read',read.has(step.dataset.routeEntry));
  const resume=q('[data-continue-reading]');
  if(resume&&last&&last.url&&last.title){
    resume.href=last.url;
    q('[data-continue-title]',resume).textContent=t(`第 ${last.number} 篇 · ${last.title}`,`No. ${last.number} · ${last.title}`);
    resume.hidden=false;
  }
}

// A link to something inside a closed disclosure opens that disclosure.
function revealHashTarget(){
  const target=(()=>{try{return document.getElementById(decodeURIComponent(location.hash.slice(1)));}catch{return null;}})();
  let parent=target?.parentElement;
  while(parent){if(parent.tagName==='DETAILS'&&!parent.open)parent.open=true;parent=parent.parentElement;}
  if(target&&target.closest('details'))target.scrollIntoView({block:'start'});
}
if(location.hash)revealHashTarget();
window.addEventListener('hashchange',revealHashTarget);

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
    observer=new ResizeObserver(()=>requestAnimationFrame(fit));observer.observe(body);
    frame.contentDocument.fonts?.ready.then(fit);fit();
  };
  frame.addEventListener('load',observe);
  if(frame.contentDocument?.readyState==='complete')observe();
  frame.closest('details')?.addEventListener('toggle',fit);
}

// Industry branches preserve the full original text and work as normal reading
// sections until enhancement succeeds. Deep links reveal the relevant branch.
const readingBranchControllers=new Map();
const readingFootnoteControllers=new Map();
const teachingContext=q('#teaching-context'),defaultTeachingContext=teachingContext?.value||'';
let teachingContextsByBranch={},activeTeachingBranch='all';
try{teachingContextsByBranch=JSON.parse(q('#teaching-context-by-branch')?.textContent||'{}')||{};}catch{}
function syncTeachingContext(branch=activeTeachingBranch){
  activeTeachingBranch=branch;
  const selected=teachingContextsByBranch[branch];
  const prompt=typeof selected==='string'&&selected.trim()?selected:defaultTeachingContext;
  if(teachingContext)teachingContext.value=prompt;
  const copy=q('#teach-copy-text');if(copy)copy.value=prompt;
}
function hashElement(hash=location.hash){
  try{return document.getElementById(decodeURIComponent(hash.replace(/^#/,'')));}catch{return null;}
}
for(const body of qa('.entry-body')){
  const branches=qa('[data-reading-branch]',body);if(branches.length<2)continue;
  let controls=q('[data-reading-branch-controls]',body);
  if(!controls){controls=document.createElement('div');controls.dataset.readingBranchControls='';branches[0].before(controls);}
  controls.id||='reading-branches-'+(body.closest('[data-entry-id]')?.dataset.entryId||'entry');
  controls.classList.add('reading-branch-controls');controls.setAttribute('role','group');controls.setAttribute('aria-label',t('选择行业带读','Choose an industry branch'));
  if(!q('[data-select-reading-branch]',controls)){
    const label=document.createElement('span');label.textContent=t('选择一个行业深入读，下一篇会接着显示同一行业：','Choose an industry; the next entry continues with the same one:');controls.append(label);
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
  // Keep endnote numbers aligned with references when other industries are hidden.
  for(const list of qa('.footnotes ol',body)){
    let number=list.start||1;
    for(const note of [...list.children].filter(item=>item.tagName==='LI')){
      if(note.hasAttribute('value'))number=note.value;
      note.value=number++;
    }
  }
  const footnotes=new Map();
  for(const reference of qa('a[role="doc-noteref"],a.footnote-ref',body)){
    const note=hashElement(reference.hash);if(!note||!body.contains(note))continue;
    if(!footnotes.has(note))footnotes.set(note,[]);
    footnotes.get(note).push(reference.closest('[data-reading-branch]'));
    note.dataset.readingBranchFootnote='';
  }
  const backlinks=qa('a[role="doc-backlink"],a.footnote-backref',body);
  backlinks.forEach(link=>link.dataset.readingBranchBacklink='');
  const branchFrames=qa('iframe',body);
  function syncBranchFrame(frame){
    if(new URL(frame.src,location.href).origin===location.origin)
      frame.contentWindow?.postMessage({type:'notebook-reading-branch',branch:activeBranch},location.origin);
  }
  branchFrames.forEach(frame=>frame.addEventListener('load',()=>syncBranchFrame(frame)));
  function activateBranch(key,changeHash=false){
    if(key!=='all'&&!branches.some(branch=>branch.dataset.readingBranch===key))return;
    activeBranch=key;
    branches.forEach(branch=>{branch.hidden=key!=='all'&&branch.dataset.readingBranch!==key;});
    buttons.forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.selectReadingBranch===key));button.setAttribute('aria-controls',branches.filter(branch=>button.dataset.selectReadingBranch==='all'||branch.dataset.readingBranch===button.dataset.selectReadingBranch).map(branch=>branch.id).join(' '));});
    branchFrames.forEach(syncBranchFrame);
    for(const [note,owners] of footnotes){
      note.hidden=key!=='all'&&!owners.some(owner=>!owner||owner.dataset.readingBranch===key);
    }
    backlinks.forEach(link=>{link.hidden=!!hashElement(link.hash)?.closest('[data-reading-branch]')?.hidden;});
    syncTeachingContext(key);
    for(const link of qa(':is(.entry-toc,.entry-mobile-toc) a[href^="#"]')){
      let id;try{id=decodeURIComponent(link.hash.slice(1));}catch{continue;}
      const branch=document.getElementById(id)?.closest('[data-reading-branch]');
      if(branches.includes(branch)){const item=link.closest('li')||link;item.hidden=branch.hidden;}
    }
    if(changeHash){
      const id=key==='all'?controls.id:branches.find(branch=>branch.dataset.readingBranch===key).id;
      history.replaceState(history.state,'','#'+encodeURIComponent(id));
    }
  }
  branches.forEach(branch=>readingBranchControllers.set(branch,activateBranch));
  readingBranchControllers.set(controls,activateBranch);
  for(const [note,owners] of footnotes){
    readingFootnoteControllers.set(note,()=>{
      if(note.hidden){const owner=owners.find(Boolean);if(owner)activateBranch(owner.dataset.readingBranch);}
    });
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.selectReadingBranch;activateBranch(key,true);store.set('branch',key);}));
  const target=hashElement(),initialBranch=target?.closest('[data-reading-branch]');
  const saved=store.get('branch',null),savedValid=saved==='all'||branches.some(branch=>branch.dataset.readingBranch===saved);
  controls.hidden=false;activateBranch(target===controls?'all':branches.includes(initialBranch)?initialBranch.dataset.readingBranch:savedValid?saved:activeBranch);
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
let landedTimer=0;
function flashTarget(target){
  if(!target)return;
  qa('.pinpoint-landed').forEach(el=>el.classList.remove('pinpoint-landed'));
  void target.offsetWidth;
  target.classList.add('pinpoint-landed');
  clearTimeout(landedTimer);
  landedTimer=setTimeout(()=>target.classList.remove('pinpoint-landed'),2700);
}
function openHashTarget(shouldFlash=true){
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  if(!id)return;
  let target=document.getElementById(id);
  if(target?.dataset.anchorTarget){
    const destination=new URL(target.dataset.anchorUrl||'#'+target.dataset.anchorTarget,location.href);
    if(destination.origin===location.origin&&destination.pathname===location.pathname)target=document.getElementById(target.dataset.anchorTarget.replace(/^#/,''))||target;
  }
  if(!target)return;
  const branchControls=target.closest('[data-reading-branch-controls]');
  if(branchControls)readingBranchControllers.get(branchControls)?.('all');
  const footnote=target.closest('[data-reading-branch-footnote]');
  if(footnote)readingFootnoteControllers.get(footnote)?.();
  const readingBranch=target.closest('[data-reading-branch]');
  if(readingBranch)readingBranchControllers.get(readingBranch)?.(readingBranch.dataset.readingBranch);
  const textDetail=target.closest('[data-text-detail]');
  if(textDetail)textVersionControllers.get(textDetail)?.(true);
  for(let ancestor=target;ancestor;ancestor=ancestor.parentElement){if(ancestor instanceof HTMLDetailsElement)ancestor.open=true;}
  const card=target.closest('.case-card');
  if(card?.hidden){const tab=qa('[data-case]',card.closest('.case-group')).find(button=>button.dataset.case===card.id);tab?.click();}
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  requestAnimationFrame(()=>{
    target.scrollIntoView({block:target.matches('p,span,mark,li,blockquote,figure,.flow-figure,.interactive-figure')?'center':'start',behavior:reduced?'auto':'smooth'});
    if(shouldFlash&&target.closest('.entry-body,.entry-section'))flashTarget(target);
  });
}
openHashTarget(Boolean(location.hash));window.addEventListener('hashchange',()=>openHashTarget(true));

// Anchored reference & pinpoint-location citation preview (desktop popover + mobile bottom sheet).
const panel=q('#reference-panel'), content=q('#reference-content'), referenceBackdrop=q('#reference-backdrop');
const referenceKicker=q('#reference-kicker'), referencePinBadge=q('#reference-pin-badge');
let origin=null, pinned=false, hoverTimer, stack=[], referenceInert=[], renderToken=0;
const referenceMobile=matchMedia('(max-width:760px)');
const canHover=matchMedia('(hover:hover)');
const pageDocCache=new Map();
const pageFetchInflight=new Map();

function isSheetMode(){
  return referenceMobile.matches||!canHover.matches;
}
function syncOverlayScroll(){
  document.body.classList.toggle('has-reader-dialog',!!q('.reader-dialog[open]')||(!panel.hidden&&pinned&&isSheetMode()));
}
function positionReferencePanel(anchor=origin){
  if(panel.hidden)return;
  if(isSheetMode()||!anchor||!anchor.isConnected){
    panel.classList.remove('is-anchored');
    panel.style.left='';panel.style.top='';panel.style.maxHeight='';
    delete panel.dataset.placement;
    return;
  }
  const rect=anchor.getBoundingClientRect();
  if(!rect.width&&!rect.height){panel.classList.remove('is-anchored');return;}
  panel.classList.add('is-anchored');
  const margin=16, gap=10;
  const vw=window.innerWidth, vh=window.innerHeight;
  const width=Math.min(panel.offsetWidth||460, vw-margin*2);
  const spaceBelow=vh-rect.bottom-margin-gap;
  const spaceAbove=rect.top-margin-gap-56;
  const placeAbove=spaceBelow<260&&spaceAbove>spaceBelow;
  const maxHeight=Math.max(220, Math.min(pinned?600:460, Math.floor((placeAbove?spaceAbove:spaceBelow))));
  panel.style.maxHeight=maxHeight+'px';
  const height=Math.min(panel.scrollHeight+2, maxHeight);
  let left=rect.left+(rect.width/2)-(width/2);
  left=Math.max(margin, Math.min(vw-width-margin, left));
  let top=placeAbove?Math.max(margin+52, rect.top-gap-height):Math.min(vh-margin-height, rect.bottom+gap);
  panel.dataset.placement=placeAbove?'above':'below';
  panel.style.left=Math.round(left)+'px';
  panel.style.top=Math.round(top)+'px';
}
function syncReferenceMode(){
  const modal=!panel.hidden&&pinned&&isSheetMode();
  referenceBackdrop.hidden=!modal;
  panel.setAttribute('aria-modal',String(modal));
  panel.classList.toggle('is-pinned',pinned);
  if(referencePinBadge)referencePinBadge.hidden=!(pinned&&!isSheetMode());
  if(modal&&!referenceInert.length){
    referenceInert=[...document.body.children].filter(el=>el!==panel&&el!==referenceBackdrop&&!el.inert&&!el.matches('script,style,link'));
    referenceInert.forEach(el=>el.inert=true);
  }else if(!modal&&referenceInert.length){
    referenceInert.forEach(el=>el.inert=false);referenceInert=[];
  }
  syncOverlayScroll();
  positionReferencePanel(origin);
}
referenceMobile.addEventListener('change',syncReferenceMode);
window.addEventListener('resize',()=>{if(!panel.hidden)positionReferencePanel(origin);});
window.addEventListener('scroll',()=>{
  if(panel.hidden||isSheetMode())return;
  if(!origin||!origin.isConnected){if(!pinned)closeReference();return;}
  const r=origin.getBoundingClientRect();
  if(!pinned&&(r.bottom<0||r.top>window.innerHeight)){closeReference();return;}
  positionReferencePanel(origin);
},{passive:true});

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
    wrap.dataset.cols=String(table.rows[0]?.cells.length||0);
    table.before(wrap);wrap.append(table);
    const edge=()=>{const over=wrap.scrollWidth>wrap.clientWidth+2;wrap.classList.toggle('is-scrollable',over);wrap.classList.toggle('is-scrolled-end',over&&wrap.scrollLeft+wrap.clientWidth>=wrap.scrollWidth-2);};
    let edgeQueued=false;
    const scheduleEdge=()=>{if(edgeQueued)return;edgeQueued=true;requestAnimationFrame(()=>{edgeQueued=false;edge();});};
    wrap.addEventListener('scroll',scheduleEdge,{passive:true});
    if(window.ResizeObserver)new ResizeObserver(scheduleEdge).observe(wrap);
    edge();
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

function isPinpointEligible(link, destination){
  if(link.dataset.noPreview!==undefined)return false;
  if(link.matches('[role="doc-backlink"],.footnote-backref,.reference-open,.anchor-link,[data-map-node],[data-map-select]'))return false;
  if(link.closest('.entry-toc,.entry-mobile-toc,.masthead,.site-colophon'))return false;
  if(destination.origin!==location.origin||!destination.hash)return false;
  const frag=decodeURIComponent(destination.hash.slice(1));
  if(!frag||frag.startsWith('fn:')||frag.startsWith('fnref:')||frag==='main'||frag==='article-graph'||frag==='experiments'||frag==='nb-graph'||frag.startsWith('phase-'))return false;
  const samePage=destination.pathname===location.pathname;
  if(samePage)return Boolean(document.getElementById(frag));
  return destination.pathname.includes('/notebook/');
}

function enhanceReferences(root){
  if(!root)return;
  for(const link of qa('a[href]',root)){
    if(link.matches('[role="doc-backlink"],.footnote-backref,.reference-open,.anchor-link'))continue;
    let destination;
    try{destination=new URL(link.getAttribute('href'),location.href);}catch{continue;}
    if(!link.dataset.reference){
      const baseURL=destination.origin+destination.pathname+destination.search;
      const id=referenceURLs.get(destination.href)||referenceURLs.get(baseURL)||null;
      if(id){link.dataset.reference=id;link.classList.add('inline-ref');}
    }
    if(isPinpointEligible(link, destination)){
      link.dataset.pinpoint=destination.href;
      link.classList.add('inline-ref','is-pinpoint-ref');
    }
    if(link.dataset.reference||link.dataset.pinpoint)link.setAttribute('aria-haspopup','dialog');
  }
}
window.__nbEnhanceReferences=enhanceReferences;
qa('.entry-body,.graph-relations,.article-graph,.entry-actions,.catalogue-tools,.learning-map-details,.home-nb-graph').forEach(enhanceReferences);

async function fetchDocument(pageURL){
  if(pageURL.pathname===location.pathname&&pageURL.origin===location.origin)return document;
  const key=pageURL.origin+pageURL.pathname;
  if(pageDocCache.has(key))return pageDocCache.get(key);
  if(pageFetchInflight.has(key))return pageFetchInflight.get(key);
  const req=(async()=>{
    const res=await fetch(key,{credentials:'same-origin'});
    if(!res.ok)throw new Error('HTTP '+res.status);
    const html=await res.text();
    const doc=new DOMParser().parseFromString(html,'text/html');
    pageDocCache.set(key,doc);
    return doc;
  })();
  pageFetchInflight.set(key,req);
  try{return await req;}finally{pageFetchInflight.delete(key);}
}

function sanitizePreviewNode(node, baseHref, revealDetails=false){
  qa('script,iframe,object,embed,style,button.text-version-toggle,a.anchor-link,a.footnote-backref,[role="doc-backlink"]',node).forEach(el=>el.remove());
  qa('[data-text-detail]',node).forEach(el=>{if(revealDetails)el.hidden=false; else el.remove();});
  qa('*',node).forEach(el=>{
    if(el.hasAttribute('id'))el.removeAttribute('id');
    for(const attr of [...el.attributes]){
      if(attr.name.toLowerCase().startsWith('on'))el.removeAttribute(attr.name);
    }
    if(el.hasAttribute('href')){
      try{el.setAttribute('href',new URL(el.getAttribute('href'),baseHref).href);}catch{}
    }
    if(el.hasAttribute('src')){
      try{el.setAttribute('src',new URL(el.getAttribute('src'),baseHref).href);}catch{}
    }
  });
  return node;
}

function findHeadingContext(target, doc){
  if(!target||target.matches('h1,h2,h3,h4'))return '';
  const body=target.closest('.entry-body')||doc.querySelector('.entry-body');
  if(!body)return '';
  const headings=qa('h2,h3',body);
  let last='';
  for(const h of headings){
    if(h.compareDocumentPosition(target)&Node.DOCUMENT_POSITION_FOLLOWING){
      last=h.textContent.replace(/^#\s*/,'').trim();
    }else break;
  }
  return last;
}

function buildPinpointFragment(doc, destURL){
  const frag=decodeURIComponent(destURL.hash.slice(1)).split(':~:text=',1)[0];
  let target=doc.getElementById(frag);
  if(target?.dataset.anchorTarget){
    const aliasId=target.dataset.anchorTarget.replace(/^#/,'');
    target=doc.getElementById(aliasId)||target;
  }
  if(!target)return null;

  const samePage=destURL.origin===location.origin&&destURL.pathname===location.pathname;
  const pageTitle=(doc.querySelector('.entry-header h1, .nb-hero h1, h1')?.textContent||'').trim();
  const sectionHeading=findHeadingContext(target, doc);
  const wrapper=document.createDocumentFragment();

  // Case 0: Topic node panel from /zh/notebook/#topic-X
  if(target.matches('.learning-map-panel')){
    const title=q('h2',target)?.textContent.trim()||frag;
    const desc=q('.learning-map-panel-heading>p:last-child',target)?.textContent.trim()||'';
    const count=q('.learning-map-count',target)?.textContent.trim()||'';
    const header=document.createElement('header');header.className='reference-heading';
    const label=document.createElement('div');label.className='reference-label';label.textContent=t('知识图谱节点','TOPIC NODE');
    if(count){const sp=document.createElement('span');sp.textContent=count;label.append(sp);}
    const h2=document.createElement('h2');h2.dataset.referenceTitle='';h2.tabIndex=-1;h2.textContent=title;
    header.append(label,h2);
    const prose=document.createElement('div');prose.className='prose';
    if(desc){const p=document.createElement('p');p.textContent=desc;prose.append(p);}
    const items=qa('.learning-map-entries>li',target).slice(0,5);
    if(items.length){
      const ul=document.createElement('ul');ul.className='pinpoint-topic-list';
      for(const li of items){
        const row=document.createElement('li');
        const link=q('a.learning-map-entry-title',li);
        if(link){
          const a=document.createElement('a');a.href=new URL(link.getAttribute('href'),destURL.href).href;
          a.textContent=link.textContent.replace(/\s*↗\s*$/,'').trim();
          row.append(a);
        }
        const st=document.createElement('span');st.textContent=li.dataset.status==='available'?t('可读','Ready'):t('规划中','Planned');
        row.append(st);ul.append(row);
      }
      prose.append(ul);
    }
    wrapper.append(header,prose);
    return {fragment:wrapper, kicker:t('知识图谱节点','TOPIC NODE'), actionLabel:t('在图谱中查看该节点','Open node in graph')};
  }

  // Standard pinpoint citation: figure, inline span, block, or section heading
  const header=document.createElement('header');header.className='reference-heading';
  const label=document.createElement('div');label.className='reference-label';
  label.textContent=samePage?t('本篇精准定位','ON THIS PAGE'):t('跨篇精准定位','PINPOINT CITATION');
  const h2=document.createElement('h2');h2.dataset.referenceTitle='';h2.tabIndex=-1;
  const isHeading=target.matches('h2,h3,h4');
  const isFigure=target.matches('figure,.flow-figure,.interactive-figure,table');
  const isInline=target.matches('span,mark,strong,em,cite,q,code,a')&&target.closest('p,li,blockquote');
  const revealDetails=Boolean(target.closest('[data-text-detail]')||target.matches('[data-text-detail]'));

  if(isHeading){
    h2.textContent=target.textContent.replace(/^#\s*/,'').trim();
  }else if(isFigure){
    const cap=q('figcaption,.flow-title,.chart-title,caption,h3,h4',target)?.textContent.trim();
    h2.textContent=cap||sectionHeading||pageTitle;
  }else{
    h2.textContent=sectionHeading||pageTitle||frag;
  }
  header.append(label);
  if(pageTitle&&pageTitle!==h2.textContent){
    const crumb=document.createElement('p');crumb.className='reference-breadcrumb';
    const strong=document.createElement('strong');strong.textContent=pageTitle;
    crumb.append(strong);
    if(sectionHeading&&sectionHeading!==h2.textContent){crumb.append(document.createTextNode(' › '+sectionHeading));}
    header.append(crumb);
  }
  header.append(h2);

  const prose=document.createElement('div');prose.className='prose';
  const excerpt=document.createElement('div');excerpt.className='pinpoint-excerpt';

  if(isInline){
    const host=target.closest('p,li,blockquote');
    const clone=host.cloneNode(true);
    const marked=clone.querySelector('#'+CSS.escape(target.id));
    if(marked)marked.classList.add('pinpoint-highlight');
    sanitizePreviewNode(clone, destURL.href, revealDetails);
    excerpt.append(clone);
  }else if(isFigure){
    excerpt.classList.add('is-figure');
    const clone=target.cloneNode(true);
    sanitizePreviewNode(clone, destURL.href, true);
    // Avoid broken nested interactive form inputs inside hover preview
    qa('input,select',clone).forEach(el=>el.setAttribute('disabled',''));
    excerpt.append(clone);
  }else if(isHeading){
    let sib=target.nextElementSibling, chars=0, added=0;
    while(sib&&added<2&&chars<460){
      if(sib.matches('h2,h3,h4'))break;
      if(sib.matches('p,blockquote,ul,ol,figure,.flow-figure')){
        const clone=sib.cloneNode(true);
        sanitizePreviewNode(clone, destURL.href, false);
        const textLen=(clone.textContent||'').trim().length;
        if(textLen||clone.querySelector('svg,img')){
          excerpt.append(clone);
          chars+=textLen;added++;
        }
      }
      sib=sib.nextElementSibling;
    }
    if(sib&&!sib.matches('h2,h3,h4')&&added>=2)excerpt.classList.add('is-clipped');
    if(!added){const p=document.createElement('p');p.textContent=t('点击下方按钮跳转到该小节正文。','Jump directly to this section.');excerpt.append(p);}
  }else if(target.matches('.experiment-embed')){
    const sum=q('summary',target)?.textContent.trim()||h2.textContent;
    const p=document.createElement('p');p.textContent=t('交互实验：','Interactive experiment: ')+sum;
    excerpt.append(p);
  }else{
    const clone=target.cloneNode(true);
    sanitizePreviewNode(clone, destURL.href, revealDetails);
    if((clone.textContent||'').trim().length>560)excerpt.classList.add('is-clipped');
    excerpt.append(clone);
  }

  prose.append(excerpt);
  wrapper.append(header,prose);
  return {
    fragment:wrapper,
    kicker:samePage?t('精准引用 · 本篇','PINPOINT · THIS PAGE'):t('精准引用 · 跨篇','PINPOINT CITATION'),
    actionLabel:samePage?t('跳到本篇该位置','Jump to location'):t('跳转到对应位置','Jump to cited passage')
  };
}

function appendReferenceFooter(container, href, actionLabel, isFootnote=false){
  const footer=document.createElement('div');footer.className='reference-footer';
  const hint=document.createElement('span');hint.className='reference-hint';
  hint.textContent=pinned?t('按 Esc 或点外部关闭','Press Esc or click outside'):t('点击链接可固定预览','Click link to pin');
  const open=document.createElement('a');open.className='reference-open';open.href=href;
  const span=document.createElement('span');span.textContent=actionLabel;
  open.append(span);
  if(!isFootnote){
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('aria-hidden','true');
    const use=document.createElementNS('http://www.w3.org/2000/svg','use');
    use.setAttribute('href','/notebook/brand/icons.svg#arrow-up-right');
    svg.append(use);open.append(svg);
  }
  footer.append(hint,open);
  container.append(footer);
}

async function showReference(item, link, pin=false, push=true){
  // item can be a string (legacy reference id) or {id, pinpoint, href, locator}
  const entry=typeof item==='string'?{id:item,pinpoint:link?.dataset.pinpoint||null,href:link?.getAttribute('href'),locator:link?.getAttribute('title')?.trim()}:item;
  const hasTemplate=entry.id&&referenceTemplates.has(entry.id);
  const hasPinpoint=Boolean(entry.pinpoint);
  if(!hasTemplate&&!hasPinpoint)return false;

  clearTimeout(hoverTimer);
  pinned=pin;
  const token=++renderToken;
  const external=link&&!panel.contains(link);
  if(external){origin?.removeAttribute('aria-expanded');origin=link;origin.setAttribute('aria-expanded','true');stack=[];}
  if(push&&stack.length)stack.at(-1).scroll=content.scrollTop;
  const stackKey=entry.pinpoint||entry.id;
  if(push&&stack.at(-1)?.key!==stackKey){
    stack.push({key:stackKey,id:entry.id||null,pinpoint:entry.pinpoint||null,href:entry.href||entry.pinpoint||null,locator:entry.locator||'',scroll:0});
  }
  const current=stack.at(-1);
  q('#reference-back').disabled=stack.length<2;
  q('#reference-back').setAttribute('aria-label',t('返回上一个引用','Back to the previous reference'));

  // 1) Pinpoint live excerpt path
  if(current.pinpoint){
    const destURL=new URL(current.pinpoint,location.href);
    const samePage=destURL.origin===location.origin&&destURL.pathname===location.pathname;
    if(referenceKicker)referenceKicker.textContent=samePage?t('精准引用 · 本篇','PINPOINT · THIS PAGE'):t('精准引用 · 跨篇','PINPOINT CITATION');
    if(!samePage&&!pageDocCache.has(destURL.origin+destURL.pathname)){
      const loading=document.createElement('div');loading.className='pinpoint-loading';loading.textContent=t('正在载入对应位置…','Loading cited passage…');
      content.replaceChildren(loading);
      panel.hidden=false;syncReferenceMode();
    }
    try{
      const doc=await fetchDocument(destURL);
      if(token!==renderToken)return false;
      const built=buildPinpointFragment(doc, destURL);
      if(built){
        window.MathJax?.typesetClear?.([content]);
        content.replaceChildren(built.fragment);
        if(referenceKicker)referenceKicker.textContent=built.kicker;
        const titleEl=q('[data-reference-title]',content);
        if(titleEl)titleEl.id='reference-title';
        if(current.locator&&titleEl){const note=document.createElement('p');note.className='reference-meta reference-location';note.textContent=current.locator;titleEl.after(note);}
        appendReferenceFooter(content, destURL.href, built.actionLabel, false);
        wrapTables(content);enhanceReferences(content);
        panel.hidden=false;syncReferenceMode();
        content.scrollTop=current.scroll||0;
        if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([content]).catch(()=>{});
        if(pin)titleEl?.focus({preventScroll:true});
        return true;
      }
    }catch{
      // Fallback gracefully to template if available
    }
    if(token!==renderToken)return false;
    if(!hasTemplate){closeReference();return false;}
  }

  // 2) Standard template path (entries, sources, notation, footnotes)
  const template=referenceTemplates.get(current.id);
  if(!template)return false;
  window.MathJax?.typesetClear?.([content]);
  content.replaceChildren(template.content.cloneNode(true));
  if(referenceKicker)referenceKicker.textContent=current.id.startsWith('footnote-')?t('来源与注释','FOOTNOTE'):t('引用预览','REFERENCE PREVIEW');
  const titleEl=q('[data-reference-title]',content);
  if(titleEl)titleEl.id='reference-title';
  if(current&&!current.id.startsWith('footnote-')){
    if(current.locator&&titleEl){const note=document.createElement('p');note.className='reference-meta reference-location';note.textContent=current.locator;titleEl.after(note);}
    const original=q('.reference-open',content), href=current.href;
    if(original){
      const resolvedHref=href?new URL(href,location.href).href:original.href;
      const label=original.textContent.trim();
      original.remove();
      appendReferenceFooter(content, resolvedHref, label, false);
    }
  }else{
    const original=q('.reference-open',content);
    if(original){
      const resolvedHref=original.getAttribute('href');
      const label=original.textContent.trim();
      original.remove();
      appendReferenceFooter(content, resolvedHref, label, true);
    }
  }
  wrapTables(content);enhanceReferences(content);
  panel.hidden=false;
  syncReferenceMode();
  content.scrollTop=current?.scroll||0;
  if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([content]).catch(()=>{});
  if(pin)titleEl?.focus({preventScroll:true});
  return true;
}

function closeReference(restore=false){
  clearTimeout(hoverTimer);renderToken++;
  panel.hidden=true;pinned=false;stack=[];
  origin?.removeAttribute('aria-expanded');syncReferenceMode();
  if(restore)origin?.focus({preventScroll:true});
}

document.addEventListener('click',event=>{
  const openBtn=event.target.closest('#reference-content .reference-open');
  if(openBtn){
    const dest=new URL(openBtn.href,location.href);
    closeReference();
    if(dest.origin===location.origin&&dest.pathname===location.pathname&&dest.hash){
      event.preventDefault();
      if(location.hash!==dest.hash)history.pushState(null,'',dest.hash);
      openHashTarget(true);
    }
    return;
  }
  const link=event.target.closest('a[data-reference], a[data-pinpoint]');
  if(link&&event.button===0&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey){
    const hasRef=link.dataset.reference&&referenceTemplates.has(link.dataset.reference);
    const hasPin=Boolean(link.dataset.pinpoint);
    if(hasRef||hasPin){
      event.preventDefault();
      showReference({id:hasRef?link.dataset.reference:null,pinpoint:hasPin?link.dataset.pinpoint:null,href:link.getAttribute('href'),locator:link.getAttribute('title')?.trim()},link,true);
      return;
    }
  }
  // Clicking outside a pinned desktop popover closes it cleanly.
  if(!panel.hidden&&pinned&&!isSheetMode()&&!panel.contains(event.target)){
    closeReference(false);
  }
});
document.addEventListener('mouseover',event=>{
  const link=event.target.closest('a[data-reference], a[data-pinpoint]');
  if(link&&!pinned&&canHover.matches&&!referenceMobile.matches){
    const hasRef=link.dataset.reference&&referenceTemplates.has(link.dataset.reference);
    const hasPin=Boolean(link.dataset.pinpoint);
    if(!hasRef&&!hasPin)return;
    clearTimeout(hoverTimer);
    hoverTimer=setTimeout(()=>showReference({id:hasRef?link.dataset.reference:null,pinpoint:hasPin?link.dataset.pinpoint:null,href:link.getAttribute('href'),locator:link.getAttribute('title')?.trim()},link,false),200);
  }
});
document.addEventListener('mouseout',event=>{
  const link=event.target.closest('a[data-reference], a[data-pinpoint]');
  if(link&&!link.contains(event.relatedTarget)&&!pinned){clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>closeReference(),320);}
});
panel.addEventListener('mouseenter',()=>clearTimeout(hoverTimer));
panel.addEventListener('mouseleave',()=>{if(!pinned)hoverTimer=setTimeout(()=>closeReference(),320);});
q('#reference-close').addEventListener('click',()=>closeReference(true));
referenceBackdrop.addEventListener('click',()=>closeReference(true));
q('#reference-back').addEventListener('click',()=>{if(stack.length<2)return;stack.pop();showReference(stack.at(-1),null,true,false);});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!panel.hidden){event.preventDefault();closeReference(true);}
  if(event.key==='Tab'&&!panel.hidden&&pinned&&isSheetMode()){
    const focusable=qa('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,[tabindex="0"]',panel).filter(el=>el.getClientRects().length),first=focusable[0],last=focusable.at(-1);
    if(event.shiftKey&&(document.activeElement===first||document.activeElement===q('#reference-title'))){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
  }
});

// Copy the learner's request; complete reference material stays behind its own link.
qa('[data-teach]').forEach(b=>b.addEventListener('click',()=>{
  closeReference();
  syncTeachingContext();
  const context=q('#teaching-context');
  q('#teach-copy-text').value=context.value;
  q('#teach-reference-link').href=context.dataset.agentUrl;
  q('#teach-preview-note').hidden=location.protocol!=='file:'&&!['localhost','127.0.0.1','[::1]'].includes(location.hostname);
  q('#copy-status').textContent='';q('#teach-dialog').showModal();syncOverlayScroll();
  q('#copy-teaching').focus();
}));
q('#copy-teaching').addEventListener('click',async()=>{
  const text=q('#teach-copy-text');
  try{await navigator.clipboard.writeText(text.value);q('#copy-status').textContent=t('开课指令已复制。','Learning request copied.');}
  catch{ text.focus();text.select();q('#copy-status').textContent=t('开课指令已选中，按 Ctrl/⌘C 复制。','Learning request selected. Press Ctrl/⌘C to copy.');}
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
const kindLabel=kind=>({blog:'Blog',lecture:t('笔记与讲义','Notes & lectures'),company:t('公司资料','Company'),research:t('研究记录','Research'),reference:t('基础参考','Reference'),page:t('页面','Page')}[kind]||t('投资学笔记','Investment note'));
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
  printBranches=qa('[data-reading-branch][hidden],[data-reading-branch-footnote][hidden],[data-reading-branch-backlink][hidden]');printBranches.forEach(branch=>branch.hidden=false);
});
window.addEventListener('afterprint',()=>{
  printDisclosures.forEach(d=>d.open=false);printDisclosures=[];
  printRelations.forEach(row=>row.hidden=true);printRelations=[];
  printBranches.forEach(branch=>branch.hidden=true);printBranches=[];
});
