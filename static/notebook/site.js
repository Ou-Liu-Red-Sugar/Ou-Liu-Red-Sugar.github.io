import {callOutcome, informationCell, conditionalMean} from './math.js';
const zh = document.documentElement.lang.startsWith('zh');
const q = (s,root=document)=>root.querySelector(s);
const qa = (s,root=document)=>[...root.querySelectorAll(s)];
const t=(a,b)=>zh?a:b;

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
  qa('.entry-toc a[href="#'+section.id+'"]').forEach(link=>link.hidden=true);
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
    for(const link of qa('.entry-toc a[href^="#"]')){
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
const panel=q('#reference-panel'), content=q('#reference-content');
let origin=null, pinned=false, hoverTimer, stack=[];
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
    const heading=document.createElement('h2');heading.id='reference-title';heading.textContent=t('来源与注释 ','Source and note ')+link.textContent.trim();
    const body=document.createElement('div');body.className='prose';
    for(const child of footnote.childNodes)body.append(child.cloneNode(true));
    qa('[id]',body).forEach(el=>el.removeAttribute('id'));
    qa('a[role="doc-backlink"], a.footnote-backref',body).forEach(el=>el.remove());
    const full=document.createElement('a');full.className='reference-open';full.href='#'+footnoteID;full.textContent=t('前往完整脚注 →','Go to the complete footnote →');
    template.content.append(heading,body,full);referenceTemplates.set(key,template);
  }
  link.dataset.reference=key;link.setAttribute('aria-haspopup','dialog');
}
for(const link of qa('.entry-body a[href], .graph-relations a[href]')){
  if(link.dataset.reference||link.matches('[role="doc-backlink"],.footnote-backref'))continue;
  const destination=new URL(link.getAttribute('href'),location.href);
  const id=referenceURLs.get(destination.href)||(destination.origin!==location.origin?referenceURLs.get(destination.origin+destination.pathname+destination.search):null);
  if(id){link.dataset.reference=id;link.classList.add('inline-ref');link.setAttribute('aria-haspopup','dialog');}
}
function showReference(id,link,pin=false,push=true){
  const template=referenceTemplates.get(id);
  if(!template)return false;
  clearTimeout(hoverTimer);pinned=pin;
  if(push && stack.at(-1)!==id)stack.push(id);
  if(link&&!panel.contains(link))origin=link;
  window.MathJax?.typesetClear?.([content]);
  content.replaceChildren(template.content.cloneNode(true));
  if(link&&!id.startsWith('footnote-')){
    const locator=link.getAttribute('title')?.trim();
    if(locator){const note=document.createElement('p');note.className='reference-meta';note.textContent=t('本次引用定位：','Location for this citation: ')+locator;q('#reference-title',content)?.after(note);}
    const original=q('.reference-open',content),href=link.getAttribute('href');
    if(original&&href)original.href=new URL(href,location.href).href;
  }
  wrapTables(content);
  panel.hidden=false;
  q('#reference-back').disabled=stack.length<2;
  if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([content]).catch(()=>{});
  if(pin){panel.setAttribute('aria-modal',String(window.innerWidth<760));q('#reference-close').focus();}
  return true;
}
function closeReference(restore=false){panel.hidden=true;pinned=false;stack=[];if(restore)origin?.focus();}
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
  if(event.target.closest('a[data-reference]')&&!pinned){clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>closeReference(),350);}
});
panel.addEventListener('mouseenter',()=>clearTimeout(hoverTimer));
panel.addEventListener('mouseleave',()=>{if(!pinned)hoverTimer=setTimeout(()=>closeReference(),350);});
q('#reference-close').addEventListener('click',()=>closeReference(true));
q('#reference-back').addEventListener('click',()=>{stack.pop();showReference(stack.at(-1),null,true,false);});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!panel.hidden){event.preventDefault();closeReference(true);}
  if(event.key==='Tab'&&!panel.hidden&&pinned&&window.innerWidth<760){
    const focusable=qa('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,[tabindex="0"]',panel),first=focusable[0],last=focusable.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});

// Prompt and full content travel together.
qa('[data-teach]').forEach(b=>b.addEventListener('click',()=>{
  q('#teach-copy-text').value=q('#teaching-context').value;
  q('#copy-status').textContent='';q('#teach-dialog').showModal();
}));
q('#copy-teaching').addEventListener('click',async()=>{
  const text=q('#teach-copy-text');
  try{await navigator.clipboard.writeText(text.value);q('#copy-status').textContent=t('已复制完整教学材料。','Complete teaching material copied.');}
  catch{ text.focus();text.select();q('#copy-status').textContent=t('请使用 Ctrl/Cmd+C 复制已选中的材料。','Press Ctrl/Cmd+C to copy the selected material.');}
});
qa('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
qa('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));

// Unicode substring matching supports Chinese terms and explicit aliases.
let searchIndex=null;
const searchDialog=q('#search-dialog'),searchInput=q('#search-query'),searchLang=q('#search-lang');
const normalize=s=>s.normalize('NFKC').toLocaleLowerCase();
async function loadIndex(){
  if(searchIndex)return searchIndex;
  const response=await fetch('/notebook/search.json');
  if(!response.ok)throw new Error('Search index unavailable');
  const notebook=await response.json();
  const archives=await Promise.all(['zh','en'].map(async lang=>{
    const res=await fetch('/'+lang+'/index.json');
    if(!res.ok)return [];
    return (await res.json()).filter(e=>!new URL(e.permalink,location.origin).pathname.includes('/notebook/')).map(e=>({
      lang,title:e.title,summary:new DOMParser().parseFromString(e.summary,'text/html').body.textContent.trim().slice(0,180),text:e.content,url:new URL(e.permalink,location.origin).pathname
    }));
  }));
  searchIndex=[...new Map([...notebook,...archives.flat()].map(e=>[e.url,e])).values()];return searchIndex;
}
function search(){
  const terms=normalize(searchInput.value.trim()).split(/\s+/).filter(Boolean),lang=searchLang.value;
  const score=e=>terms.reduce((total,term)=>total+(normalize(e.title).includes(term)?10:1),0);
  const rows=(searchIndex||[]).filter(e=>(lang==='all'||e.lang===lang)&&terms.every(term=>normalize(e.title+' '+e.text).includes(term))).sort((a,b)=>score(b)-score(a));
  q('#search-results').replaceChildren(...rows.map(e=>{
    const a=document.createElement('a');a.href=e.url;
    const title=document.createElement('strong');title.textContent=e.title;
    const desc=document.createElement('p');desc.textContent=e.summary;
    const small=document.createElement('small');small.textContent=e.lang==='zh'?'中文':'English';
    a.append(small,title,desc);return a;
  }));
  q('#search-status').textContent=t('找到 '+rows.length+' 篇笔记',rows.length+' notes found');
}
qa('[data-open-search]').forEach(b=>b.addEventListener('click',async()=>{
  searchDialog.showModal();searchInput.focus();
  q('#search-status').textContent=t('正在载入…','Loading…');
  try{await loadIndex();search();}catch{q('#search-status').textContent=t('搜索暂时不可用，请从目录继续阅读。','Search is unavailable. Please use the catalogue.');}
}));
searchInput.addEventListener('input',search);searchLang.addEventListener('change',search);

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
