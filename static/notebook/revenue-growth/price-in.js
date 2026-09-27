import {requiredRevenue,initialCondition,steppedCondition} from './math.js';

const q = selector => document.querySelector(selector);
const number = (value, digits=1) => new Intl.NumberFormat('zh-CN', {maximumFractionDigits:digits, minimumFractionDigits:digits}).format(value);
const percent = value => `${value>0?'+':''}${number(value*100)}%`;
const status = q('#load-status');
status.hidden=false;

function validateConfig(config) {
  if (config.schemaVersion!==1 || !['development','sourced'].includes(config.status)) throw new Error('案例配置状态无效。');
  if (!config.company?.name || !config.price?.asOf || !config.forecast?.period || !config.baseRevenue?.period || !config.currency) throw new Error('案例缺少公司、日期、期间或币种。');
  for (const key of ['amountScale','shareScale']) {
    if (!(config.display?.[key]>0)) throw new Error('显示单位的换算倍数须为正数。');
  }
  if (!config.display.amountUnit || !config.display.shareUnit) throw new Error('案例缺少金额或股数单位。');
  for (const key of ['netMargin','forwardPE']) {
    const input = config.assumptions?.[key];
    if (!input) throw new Error('案例缺少可调条件。');
    const initial=initialCondition(input);
    if (![initial,input.min,input.max,input.step].every(Number.isFinite) || input.min<=0 || input.step<=0 || input.min>initial || input.max<initial) throw new Error('可调条件的默认值或范围无效。');
  }
  if (!Array.isArray(config.sources)) throw new Error('案例来源须为列表。');
  if (config.status==='sourced' && !config.sources.length) throw new Error('案例缺少已核资料的来源入口。');
}

function addBasis(config, title, text, sourceIds=[]) {
  const term = document.createElement('dt'), description = document.createElement('dd');
  term.textContent=title;description.textContent=text||'尚未填写。';
  for (const id of sourceIds) {
    if (!config.sources.some(source=>source.id===id)) throw new Error(`找不到来源编号 ${id}。`);
    const link=document.createElement('a');link.href='#source-'+id;link.textContent=' [资料]';description.append(link);
  }
  q('#input-basis').append(term,description);
}

async function start() {
  const response=await fetch(new URL('./config.json',import.meta.url));
  if (!response.ok) throw new Error('案例资料暂未载入，请刷新后重试。');
  const config=await response.json();validateConfig(config);
  const amount=value=>`${number(value/config.display.amountScale,config.display.amountDigits??1)} ${config.display.amountUnit}`;
  const shareCount=value=>`${number(value/config.display.shareScale,config.display.shareDigits??1)} ${config.display.shareUnit}`;
  const labels={revenue:'收入',profit:'普通股利润',eps:'EPS',margin:'预测期普通股净利率',...config.labels};
  const inputs={netMargin:q('#net-margin'),forwardPE:q('#forward-pe'),shareChange:q('#share-change')};
  q('#company').textContent=config.company.name+(config.company.ticker?`（${config.company.ticker}）`:'');
  q('#price').textContent=`${number(config.price.value,2)} ${config.currency}／股`;
  q('#price-label').textContent=config.price.label||'报价与日期';
  q('#price-date').textContent=config.price.asOf+(config.price.reportedOn?`；报告发布于 ${config.price.reportedOn}`:'');
  q('#base-period').textContent=`基期${labels.revenue} · ${config.baseRevenue.period}`;
  q('#base-revenue').textContent=amount(config.baseRevenue.value);
  q('#period-note').textContent=config.scenarioNote||`预测盈利期间：${config.forecast.period}。PE 为本篇对所列报价和这一盈利期间采用的参照条件。`;
  q('#revenue-label').textContent=`所需${labels.revenue} · ${config.forecast.period}`;
  q('#margin-label').textContent=labels.margin;
  q('#development-note').hidden=config.status!=='development';
  for (const key of ['netMargin','forwardPE']) {
    for (const attribute of ['min','max']) inputs[key][attribute]=config.assumptions[key][attribute];
    // Native range step validation would round the historical ratio on assignment.
    inputs[key].step='any';
  }
  const changes=config.assumptions.shareChanges||[{label:'维持所设预测股数',value:0}];
  if (!changes.length || changes.some(option=>!option.label || !Number.isFinite(option.value) || option.value<=-1)) throw new Error('预测股数情景无效。');
  for (const change of changes) {
    const option=document.createElement('option');option.value=change.value;option.textContent=change.label;inputs.shareChange.append(option);
  }
  q('#share-control').hidden=changes.length<2;
  q('#conditions').addEventListener('submit',event=>event.preventDefault());
  const defaults={netMargin:initialCondition(config.assumptions.netMargin),forwardPE:initialCondition(config.assumptions.forwardPE),shareChange:changes[0].value};
  let state={...defaults};
  q('#margin-step-note').textContent=`初始值按基期精确比率计算；调整每档 ${number(config.assumptions.netMargin.step*100)} 个百分点。`;
  q('#pe-step-note').textContent=`调整每档 ${number(config.assumptions.forwardPE.step)} 倍。`;
  function update() {
    const {netMargin,forwardPE,shareChange}=state;
    const result=requiredRevenue({price:config.price.value,shares:config.forecast.shares,netMargin,forwardPE,baseRevenue:config.baseRevenue.value,shareChange});
    const marginDigits=1;
    const marginApprox=netMargin===defaults.netMargin&&config.assumptions.netMargin.ratio?'约 ':'';
    q('#net-margin-value').value=marginApprox+number(netMargin*100,marginDigits)+'%';
    q('#forward-pe-value').value=number(forwardPE)+' 倍';
    inputs.netMargin.setAttribute('aria-valuetext',number(netMargin*100,marginDigits)+'%');
    inputs.forwardPE.setAttribute('aria-valuetext',number(forwardPE)+' 倍');
    q('#required-revenue').textContent=amount(result.revenue);
    q('#revenue-growth').textContent=percent(result.growth);
    q('#derived-values').textContent=`对应${labels.eps} ${number(result.eps,4)} ${config.currency}／股；${labels.profit} ${amount(result.commonProfit)}；所选预测股数 ${shareCount(result.forecastShares)}。`;
  }
  function restore() {
    state={...defaults};
    for (const [key,input] of Object.entries(inputs)) input.value=state[key];
    update();
  }
  addBasis(config,'报价 P',config.price.basis,config.price.sourceIds);
  addBasis(config,'所设预测股数 N',`${shareCount(config.forecast.shares)}。${config.forecast.shareBasis||''}`,config.forecast.sourceIds);
  addBasis(config,'基期收入 R₀',config.baseRevenue.basis,config.baseRevenue.sourceIds);
  addBasis(config,'预测期净利率 m',config.assumptions.netMargin.basis,config.assumptions.netMargin.sourceIds);
  addBasis(config,'前瞻 PE 参照 M',config.assumptions.forwardPE.basis,config.assumptions.forwardPE.sourceIds);
  for (const source of config.sources) {
    if (typeof source.url!=='string' || !source.url.trim()) throw new Error('来源缺少链接。');
    const url=new URL(source.url,location.href);
    if (!['https:','http:'].includes(url.protocol) || !source.id || !source.title) throw new Error('来源入口无效。');
    const item=document.createElement('li'),link=document.createElement('a');
    item.id='source-'+source.id;link.href=url.href;link.textContent=source.title;link.target='_blank';link.rel='noopener';item.append(link);
    if (source.locator) item.append(document.createTextNode(' · '+source.locator));
    q('#source-list').append(item);
  }
  restore();
  for (const key of ['netMargin','forwardPE']) {
    const input=inputs[key],spec=config.assumptions[key];
    input.disabled=false;
    input.addEventListener('input',()=>{
      state[key]=steppedCondition(Number(input.value),spec);input.value=state[key];update();
    });
    input.addEventListener('keydown',event=>{
      const direction=['ArrowRight','ArrowUp'].includes(event.key)?1:['ArrowLeft','ArrowDown'].includes(event.key)?-1:0;
      if (!direction&&!['Home','End'].includes(event.key)) return;
      event.preventDefault();
      state[key]=event.key==='Home'?spec.min:event.key==='End'?spec.max:steppedCondition(state[key],spec,direction);
      input.value=state[key];update();
    });
  }
  inputs.shareChange.disabled=false;
  inputs.shareChange.addEventListener('input',()=>{state.shareChange=Number(inputs.shareChange.value);update();});
  q('#reset-conditions').disabled=false;q('#reset-conditions').addEventListener('click',restore);
  status.hidden=true;q('#experiment').hidden=false;
}

start().catch(error=>{
  status.textContent=error.message||'案例资料无法读取。';status.setAttribute('role','alert');
});

let restoreDetails=false;
window.addEventListener('beforeprint',()=>{const details=q('details');restoreDetails=!details.open;details.open=true;});
window.addEventListener('afterprint',()=>{if(restoreDetails)q('details').open=false;restoreDetails=false;});
