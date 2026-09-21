(() => {
  'use strict';
  const E=window.BFEngine,V=window.BFView,packet=JSON.parse(document.getElementById('bf-inputs').textContent),datasets=packet.datasets;
  const q=(selector,root=document)=>root.querySelector(selector),qa=(selector,root=document)=>[...root.querySelectorAll(selector)];
  let currentIndustry='COST',showAll=false,step=0;
  const industryButtons=qa('[data-industry]'),companyPanels=qa('[data-company]');
  function setIndustry(ticker){
    currentIndustry=ticker;companyPanels.forEach(panel=>panel.hidden=!showAll&&panel.dataset.company!==ticker);
    industryButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.industry===ticker)));
  }
  industryButtons.forEach(button=>button.addEventListener('click',()=>{showAll=false;q('[data-show-all]').textContent='展开两个行业';setIndustry(button.dataset.industry);}));
  q('[data-show-all]').addEventListener('click',event=>{showAll=!showAll;setIndustry(currentIndustry);event.currentTarget.textContent=showAll?'只看当前行业':'展开两个行业';});
  function highlight(panel,ids){const selected=new Set(ids);qa('[data-statement-row]',panel).forEach(row=>row.classList.toggle('is-selected',selected.has(row.dataset.statementRow)));}
  for(const panel of companyPanels){
    const data=datasets[panel.dataset.company],periodSelect=q('[data-period-select]',panel),aggregateSelect=q('[data-aggregate-select]',panel);
    let selectedRelation=E.relations(data,periodSelect.value)[0].id;
    function update(){
      const period=periodSelect.value,relations=E.relations(data,period);
      q('[data-balance-equation]',panel).innerHTML=`<span>资产 <strong>${E.format(E.amount(data,'total_assets',period))}</strong></span><b>=</b><span>负债 <strong>${E.format(E.amount(data,'total_liabilities',period))}</strong></span><b>+</b><span>权益 <strong>${E.format(E.amount(data,'total_equity',period))}</strong></span><small>${period} · M 美元</small>`;
      for(const item of relations){const box=q('[data-relation-panel="'+item.id+'"]',panel);box.innerHTML=V.relation(data,item,period);box.hidden=item.id!==selectedRelation;}
      qa('[data-relation-button]',panel).forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.relationButton===selectedRelation)));
      qa('[data-period]',panel).forEach(cell=>cell.classList.toggle('active-period',cell.dataset.period===period));
      q('[data-aggregation]',panel).innerHTML=V.aggregation(data,aggregateSelect.value,period);
      const bank=q('[data-bank-measure]',panel);if(bank)bank.innerHTML=V.bankMeasure(data,period,q('[data-denominator]',panel).value);
      highlight(panel,relations.find(item=>item.id===selectedRelation).rows);
    }
    panel.addEventListener('click',event=>{
      const relation=event.target.closest('[data-relation-button]');if(relation){selectedRelation=relation.dataset.relationButton;update();}
      const link=event.target.closest('a[data-row-link]');if(link&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey){
        const row=document.getElementById(V.rowID(data,link.dataset.rowLink));if(row){event.preventDefault();q('.statement-panel',panel).open=true;highlight(panel,[link.dataset.rowLink]);row.scrollIntoView({block:'nearest'});history.replaceState(null,'','#'+row.id);}
      }
    });
    periodSelect.addEventListener('change',update);aggregateSelect.addEventListener('change',()=>{update();highlight(panel,E.aggregate(data,aggregateSelect.value,periodSelect.value).components.map(row=>row.id));});
    q('[data-denominator]',panel)?.addEventListener('change',update);
    q('[data-open-notes]',panel).addEventListener('click',()=>{const notes=q('.notes-panel',panel);notes.open=true;notes.scrollIntoView({block:'start'});});
    update();
  }
  const stepButtons=qa('[data-event-step]'),eventPanels=qa('[data-event-panel]');
  function updateEvents(){
    try{
      const input=q('#initial-cash').value.trim();if(input==='')throw new Error('请填入期初现金与权益.');
      const cash=Number(input),collectFirst=q('#event-order').value==='collect-first',result=E.ledgerAt(step,cash,collectFirst);
      if(!result.completed)step=result.index;
      for(let i=0;i<5;i++){eventPanels[i].innerHTML=V.eventPanel(E.ledgerAt(i,cash,collectFirst));eventPanels[i].hidden=i!==step;stepButtons[i].textContent='S'+i+' '+E.sequence(collectFirst)[i].title;stepButtons[i].setAttribute('aria-pressed',String(i===step));stepButtons[i].tabIndex=i===step?0:-1;}
      q('#event-config').textContent='当前输入：期初现金与权益各 '+E.format(cash)+' 美元；'+(collectFirst?'先收款，再付款.':'先付款，再收款.');
      q('#event-position').textContent='S'+step+' / S4';q('#event-previous').disabled=step===0;q('#event-next').disabled=step===4||!result.completed;
      q('#event-error').hidden=true;
    }catch(error){q('#event-error').textContent=error.message;q('#event-error').hidden=false;}
  }
  stepButtons.forEach((button,index)=>{
    button.addEventListener('click',()=>{step=index;updateEvents();});
    button.addEventListener('keydown',event=>{let next=event.key==='ArrowRight'?Math.min(4,index+1):event.key==='ArrowLeft'?Math.max(0,index-1):event.key==='Home'?0:event.key==='End'?4:null;if(next!==null){event.preventDefault();step=next;updateEvents();stepButtons[step].focus();}});
  });
  q('#event-previous').addEventListener('click',()=>{step=Math.max(0,step-1);updateEvents();});q('#event-next').addEventListener('click',()=>{step=Math.min(4,step+1);updateEvents();});
  q('#initial-cash').addEventListener('input',updateEvents);q('#event-order').addEventListener('change',updateEvents);
  q('#reset-events').addEventListener('click',()=>{q('#initial-cash').value=100;q('#event-order').value='pay-first';step=0;updateEvents();});
  function followHash(){
    let id;try{id=decodeURIComponent((new URLSearchParams(location.search).get('experiment') || location.hash.slice(1)));}catch{return;}
    if(id==='BS-BANKING'||id.startsWith('jpm-')){showAll=false;setIndustry('JPM');}
    else if(id==='BS-RETAIL'||id.startsWith('cost-')){showAll=false;setIndustry('COST');}
    const target=document.getElementById(id),company=target?.closest('.company-panel'),events=target?.closest('.event-lab');
    const embedded=window.self!==window.top&&!!(company||events);
    document.documentElement.dataset.embedded=embedded?'true':'false';
    q('#statements').hidden=embedded&&!!events;q('#EXP-BF05-EVENTS').hidden=embedded&&!!company;
    if(embedded&&company){showAll=false;setIndustry(company.dataset.company);if(!company.dataset.embedInitialized){q('.statement-panel',company).open=false;company.dataset.embedInitialized='true';}}
    if(target){for(let el=target;el;el=el.parentElement)if(el instanceof HTMLDetailsElement)el.open=true;if(window.self===window.top)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}
  }
  qa('.interactive-only').forEach(control=>control.hidden=false);setIndustry('COST');updateEvents();followHash();window.addEventListener('hashchange',followHash);
  let printDetails=[],printHidden=[];
  window.addEventListener('beforeprint',()=>{printDetails=qa('details:not([open])');printDetails.forEach(detail=>detail.open=true);printHidden=qa('.company-panel[hidden],.relation-panel[hidden],.event-panel[hidden]');printHidden.forEach(panel=>panel.hidden=false);});
  window.addEventListener('afterprint',()=>{printDetails.forEach(detail=>detail.open=false);printHidden.forEach(panel=>panel.hidden=true);printDetails=[];printHidden=[];});
})();
