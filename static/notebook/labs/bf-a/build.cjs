// Rebuild this lab from the two verified source datasets; all writes stay here.
const fs = require('node:fs');
const path = require('node:path');
const E = require('./engine.js');
const V = require('./view.js');
const inputDir = path.resolve(__dirname, '../../../../docs/production/20260921/review');
const datasetFiles = { COST: 'costco-2025-balance-sheet.json', JPM: 'jpm-2025-balance-sheet.json' };
const datasets = Object.fromEntries(Object.entries(datasetFiles).map(([ticker,file]) => [ticker,JSON.parse(fs.readFileSync(path.join(inputDir,file),'utf8'))]));
for (const dataset of Object.values(datasets)) {
  const failures = E.verifyDataset(dataset).filter(check=>!check.passed);
  if(failures.length)throw new Error('Statement checks failed: '+JSON.stringify(failures));
}
const packet = {
  version: '2026-09-21.BF-A.lab-2',
  statement_experiment: 'EXP-BF-STATEMENTS-01',
  transaction_experiment: 'EXP-BF05-EVENTS',
  input_files: Object.values(datasetFiles).map(file=>'docs/production/20260921/review/'+file),
  writing_contract: 'docs/production/20260921/drafts/bf-a-v2/notebook-BF-A-20260921-revised/BF-05.md §§4, 配套规格',
  event_default: { initial_cash:100, initial_equity:100, cost:100, sales:150, collect_first:false, unit:'USD' },
  datasets
};
fs.writeFileSync(path.join(__dirname,'data.json'),JSON.stringify(packet,null,2)+'\n');
const dataJSON=JSON.stringify(packet).replace(/</g,'\\u003c');
const html=`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>资产负债表实验 · 零售、银行与交易传导</title><link rel="stylesheet" href="style.css"><script defer src="engine.js"></script><script defer src="view.js"></script><script defer src="app.js"></script></head>
<body><a class="skip-link" href="#statements">跳到原表</a><main>
<header class="lab-header"><p class="eyebrow">BF-05 · 从完整原表读起</p><h1>资产负债表：两种业务，一套读表方法</h1><p class="deck">先选行业，找到资产、负债与权益，再让图上的每一个数字回到原表。最后用一组独立的小企业交易，观察同一张表怎样随事件变化。</p><nav aria-label="实验导航"><a href="#BS-RETAIL">零售原表</a><a href="#BS-BANKING">银行原表</a><a href="#EXP-BF05-EVENTS">事件传导</a><a href="/zh/notebook/balance-sheet/" target="_top">返回完整词条 ↗</a></nav></header>
<section id="statements"><div class="section-heading"><p class="eyebrow">01 · 行业带读</p><h2>先看全表，再选择要追的关系</h2><p>两个行业使用各自的列报结构。金额均为百万美元；两家公司的时点分别显示，不合并成同一个日期。</p></div><div class="industry-controls interactive-only" hidden><div role="group" aria-label="选择行业"><button type="button" data-industry="COST" aria-pressed="true" aria-controls="BS-RETAIL">零售 · Costco</button><button type="button" data-industry="JPM" aria-pressed="false" aria-controls="BS-BANKING">银行 · JPMorgan</button></div><button type="button" data-show-all>展开两个行业</button></div><noscript><p>两个行业的原表、关系说明与默认计算均在下方。可用原生折叠控件展开附注和直接加总。</p></noscript>${Object.values(datasets).map(V.company).join('\n')}</section>
<section id="EXP-BF05-EVENTS" class="event-lab"><div class="section-heading"><p class="eyebrow">02 · EXP-BF05-EVENTS · 独立教学设定</p><h2>赊购、赊销、付款、收款，各留下什么</h2><p>默认期初现金与权益各 100 美元，期初出资已在观察窗口之前完成。赊购成本 100 的商品，全部赊销 150 并结转成本 100，然后付款、收款。销售满足确认条件；忽略税、退款、信用损失、运费、其他费用与分配。</p></div><div class="event-controls interactive-only" hidden><label>期初现金与权益，美元 <input id="initial-cash" type="number" min="0" step="50" value="100"></label><label>资金顺序 <select id="event-order"><option value="pay-first">先付供应商，再收客户款</option><option value="collect-first">先收客户款，再付供应商</option></select></label><button type="button" id="reset-events">恢复默认</button></div><p class="input-error" id="event-error" role="status" hidden></p><p class="event-config" id="event-config">当前输入：期初现金与权益各 100 美元；先付款，再收款。</p><div class="event-step-buttons interactive-only" hidden role="group" aria-label="选择累计到哪一步">${E.sequence().map((event,i)=>`<button type="button" data-event-step="${i}" aria-pressed="${i===0}" tabindex="${i===0?0:-1}">S${i} ${V.esc(event.title)}</button>`).join('')}</div><div class="event-paging interactive-only" hidden><button type="button" id="event-previous">← 上一步</button><span id="event-position" role="status">S0 / S4</span><button type="button" id="event-next">下一步 →</button></div><div id="event-panels">${E.sequence().map((event,i)=>`<section class="event-panel" data-event-panel="${i}">${V.eventPanel(E.ledgerAt(i))}</section>`).join('')}</div><details class="default-ledger" open><summary>完整默认路径 · 期初现金 100 · 先付款</summary>${V.ledgerTable()}</details><details class="order-comparison"><summary>顺序迁移：期初现金 0，先收款</summary>${V.ledgerTable(0,true)}<p>终点现金、权益、利润与经营现金净额均为 50。期初现金 0 若先付款，则在该步缺口 100；此时先完成收款会改变资金可行性。</p></details></section>
<footer><p>实际材料：COST-BS-20250831、JPM-BS-20251231；原始表格及来源定位保留在各行业中。事件输入来自 BF-05 的具名教学设定。</p><p><a href="data.json">同源数据 JSON</a> · <a href="verification.json">计算核验记录</a> · <a href="/zh/notebook/balance-sheet/" target="_top">返回完整词条</a></p></footer>
<script id="bf-inputs" type="application/json">${dataJSON}</script></main></body></html>`;
fs.writeFileSync(path.join(__dirname,'interactions.html'),html);
console.log('Built BF-A interactions.html from '+Object.keys(datasets).length+' verified datasets.');

