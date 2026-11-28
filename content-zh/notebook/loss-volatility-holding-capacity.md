{
  "title": "亏损、波动与持有能力",
  "description": "从 FISV 财报后暴跌、又继续下跌的持有经历出发，对照 KO 的修复，结合行业比较、Risk–Reward、重新定价和资金安排，理解持有与退出。",
  "layout": "entry",
  "notebookid": "zh-loss-volatility-holding-capacity",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-loss-volatility-holding-capacity"
}

2025 年 10 月 29 日，Fiserv（FISV，当时代码为 FI）发布第三季度财报并大幅下修全年指引，收盘价单日从 126.17 美元跌到 70.60 美元（约 −44%）。大跌之后很多人会盼着“拿住总能回本”，可此后近一年里 FISV 收盘最高也只回到 69.85 美元，到 2026 年 9 月 24 日再跌至 45.98 美元，比暴跌当天又低了约 35%。[^prices-fisv]<sup>，</sup>[^ticker]

同样在下跌中选择继续持有，2023 年秋天的 Coca-Cola（KO）到年底就收复了失地。两笔持仓走向分叉，取决于下跌期间行业处境、经营预期与眼下价格的对应关系，单靠“等回本”的愿望决定不了留与走。

## 亏损与回本预期 {#nb-a03-loss}

先分清两种常见记账口径：相对买入成本的涨跌记的是这笔投资的得失，从阶段高点算起的回撤量的是回落幅度；卖出前叫浮亏，卖出换成现金才成为已实现盈亏，若期间收过分红，则要像[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/#nb-s02-returns)那样把现金与剩余股份合在一起算。

过去的账记清楚即可，决定今天留不留，只能往前看。下图把三位在不同时点买入 FISV 的持有人放在同一条价格线上：

<figure class="flow-figure path-chart g3-cost-bases" id="nb-a03-cost-bases">
<div class="ff-head"><p class="ff-title">同一个现价，三种买入成本</p><span class="ff-sub">FISV 收盘价，美元／股 · 高点 237.79 美元起回撤 −80.7%</span></div>
<div class="pc-plot business-exchange" aria-label="FISV 拆股调整后收盘价，2025 年 1 月 2 日 至 2026 年 9 月 24 日。2025 年 3 月 3 日 达到高点 237.79 美元，2025 年 10 月 28 日 收盘 126.17 美元，2025 年 10 月 29 日 财报后收盘 70.60 美元，2026 年 9 月 24 日 为 45.98 美元。年初以 205.98 美元买入的人亏损约 77.7%，财报前一天以 126.17 美元买入的人亏损约 63.6%，暴跌当天收盘以 70.60 美元买入的人亏损约 34.9%；从高点算起回撤约 80.7%。此后三人持有的是同一只 45.98 美元的股票，接下来的涨跌相同。">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="pc-grid" points="0,80.77 100,80.77"/><polyline class="pc-grid" points="0,61.54 100,61.54"/><polyline class="pc-grid" points="0,42.31 100,42.31"/><polyline class="pc-grid" points="0,23.08 100,23.08"/><polyline class="pc-grid" points="0,3.85 100,3.85"/><polyline class="pc-fixed" points="0.00,20.78 100,20.78"/><polyline class="pc-fixed" points="47.46,51.47 100,51.47"/><polyline class="pc-fixed" points="47.62,72.85 100,72.85"/><polyline class="pc-price" points="0.00,20.78 0.16,19.78 1.27,22.88 2.38,19.78 3.49,19.68 4.60,16.91 5.71,11.52 6.83,11.31 7.94,10.64 9.05,9.35 10.16,16.14 11.27,17.46 12.38,16.12 13.49,16.87 14.60,23.62 15.71,19.95 16.67,19.75 17.94,31.72 19.05,29.09 20.16,29.20 21.27,35.90 22.38,38.72 23.49,37.39 24.60,35.88 25.71,37.30 26.83,37.16 27.94,33.72 28.89,32.48 30.16,36.34 31.27,36.25 32.38,45.37 33.49,47.95 34.60,48.75 35.71,47.42 36.83,46.28 37.94,46.85 39.05,48.06 40.16,48.34 41.27,49.31 42.38,50.17 43.49,50.94 44.60,52.83 45.71,53.21 46.83,51.86 47.46,51.47 47.62,72.85 47.94,74.35 49.05,75.50 50.16,75.61 51.27,76.60 52.38,76.36 53.49,74.51 54.60,73.56 55.71,73.87 56.83,74.04 57.94,74.77 59.05,73.13 60.16,74.50 61.27,74.02 62.38,75.49 63.49,76.92 64.60,77.17 65.71,76.36 66.83,76.04 67.94,75.73 69.05,78.18 70.16,78.05 71.27,79.27 72.22,78.40 73.49,78.43 74.60,75.40 75.71,76.60 76.83,76.10 77.94,78.66 79.05,78.72 80.16,78.03 81.27,78.25 82.38,79.07 83.49,79.32 84.44,81.59 85.71,80.98 86.67,79.87 87.94,80.60 89.05,80.53 90.16,80.38 91.27,79.25 92.38,79.84 93.49,79.08 94.60,79.78 95.71,79.55 96.83,79.62 97.94,80.16 99.05,81.85 100.00,82.32"/></svg>
<span class="pc-y" style="top:80.77%">50</span><span class="pc-y" style="top:61.54%">100</span><span class="pc-y" style="top:42.31%">150</span><span class="pc-y" style="top:23.08%">200</span><span class="pc-y" style="top:3.85%">250</span><span class="pc-xlab" style="left:28.57%">2025.07</span><span class="pc-xlab" style="left:57.78%">2026.01</span><span class="pc-xlab" style="left:86.51%">2026.07</span>
<span class="pc-dot" style="left:9.52%;top:8.54%"></span><span class="pc-note" style="left:calc(9.52% + 8px);top:calc(8.54% - 22px)">高点 237.79</span><span class="pc-dot" style="left:0.00%;top:20.78%"></span><span class="pc-note cb-mark" style="left:calc(0.00% + 4px);top:calc(20.78% + 6px)">①</span><span class="pc-dot" style="left:47.46%;top:51.47%"></span><span class="pc-note cb-mark" style="left:calc(47.46% + 8px);top:calc(51.47% - 20px)">②</span><span class="pc-dot" style="left:47.62%;top:72.85%;--c:var(--ff-cash)"></span><span class="pc-note cb-mark pc-warm" style="left:calc(47.62% - 22px);top:calc(72.85% + 4px)">③</span><span class="pc-dot" style="left:100.00%;top:82.32%;--c:var(--ff-cash)"></span><span class="pc-note" style="right:0;top:calc(20.78% - 18px);text-align:right">① <strong>−77.7%</strong></span><span class="pc-note" style="right:0;top:calc(51.47% - 18px);text-align:right">② <strong>−63.6%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(72.85% - 18px);text-align:right">③ <strong>−34.9%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(82.32% + 8px);text-align:right">现价 45.98</span>
</div>
<figcaption>① 2025 年初以 205.98 买入；② 10 月 28 日财报前以 126.17 买入；③ 10 月 29 日暴跌后以 70.60 买入。虚线是三个买入价，右端为各自到 2026 年 9 月 24 日的盈亏；拆股调整后收盘价，不含分红。<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

三位持有人的历史账面盈亏相差悬殊，但从 2026 年 9 月 24 日往后看，三人握着同一只 45.98 美元的股票，接下来的涨跌分毫不差。市场不会因为有人当初花 205.98 美元买进，就替他拉回成本线；还值不值得继续拿，只取决于眼前的价格和公司往后能赚多少。[^prices-fisv]

## 行业参照与两种结果 {#nb-a03-industry}

股票下跌时，第一步先把它放回行业坐标系里，区分这是板块一起承压，还是这家公司独自失速。2023 年秋天 GLP-1 减肥药走红，市场担心食品饮料销量缩水，KO 10 月初曾随板块急跌（55.98 → 52.38 美元），但到年底与消费必需品 ETF XLP 同步收复失地：[^wsj]<sup>，</sup>[^prices-ko]

<figure class="holding-figure">
<img src="/notebook/holding/ko-recovery.svg?v=20261126" alt="2023年9月29日至12月29日，KO和消费必需品ETF XLP收盘价均以期初为100。KO在10月初下跌后逐步修复，期末KO上涨约5.3%，XLP上涨约4.7%；标记10月24日的财报发布。" width="820" height="416" loading="lazy">
<figcaption>KO 的修复过程与消费必需品板块的同期表现。两条线各自从 100 起步，比较价格变化；<a href="/notebook/holding/ko-recovery.csv">查看数据</a>。</figcaption>
</figure>

再把主营支付处理与金融技术的 FISV，放进支付行业 ETF IPAY 旁边对照。同期整个支付板块虽然走弱，但 FISV 落后的幅度远超行业，立刻指明了排查方向——回到公司财报查清经营与盈利预期到底变了什么：[^ipay]<sup>，</sup>[^prices-fisv]

<figure class="holding-figure">
<img src="/notebook/holding/fiserv-underperformance.svg?v=20261126" alt="2025年1月2日至2026年9月24日，FISV和支付行业ETF IPAY收盘价均以期初为100。期末FISV下跌约77.7%，IPAY下跌约18.1%；FISV在2025年10月指引大幅下修时暴跌，随后仍持续承压。" width="820" height="426" loading="lazy">
<figcaption>FISV 相对支付行业 ETF IPAY 的明显落后。虚线标出几次公司披露，区间末的数字为相对期初的价格变化；<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-1">一般而言，同业齐跌且持仓大致同步时，不必单凭浮亏怀疑公司出了独有毛病；相反，持续明显跑输行业时，就该重点检查需求、竞争位置和盈利预期是否已经相对转弱<span data-text-detail>（KO 图观察 2023 年 9 月 29 日至 12 月 29 日，KO 从 55.98 跌至 10 月 5 日的 52.38、年底收于 58.93 美元；FISV 图观察 2025 年 1 月 2 日至 2026 年 9 月 24 日。两图均用拆股调整后收盘价，期初定为 100，不含分红。XLP 与 IPAY 的业务范围均比对应单一公司更广；相对股价还受起始估值和市场预期变化影响）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 基本面变化与 Risk-Reward {#nb-a03-risk-reward}

行业坐标指出了检查方向，接下来拿公司财报直接核验：当初的利空担忧有没有落进报表，原先的盈利预期兑现了几分？把 KO 与 FISV 各自的财报证据摆在一起，两条分叉一目了然：[^ko-results]<sup>，</sup>[^fiserv-q2]<sup>，</sup>[^fiserv-q3]<sup>，</sup>[^fiserv-2026]

<figure class="flow-figure" id="nb-a03-diagnosis-map" data-ff-views>
<div class="ff-head"><p class="ff-title">财报核验怎样区分“虚惊修复”与“预期改写”</p><div class="ff-switch" role="group" aria-label="切换案例" hidden><button type="button" data-ff-view-choice="ko" aria-pressed="true">KO · 虚惊修复</button><button type="button" data-ff-view-choice="fisv" aria-pressed="false">FISV · 预期改写</button></div></div>
<div class="business-exchange" data-ff-only="ko" aria-label="KO 2023 秋财报核验：市场担忧 GLP-1 压缩销量、股价随 XLP 下跌，但 2023 Q3 财报全球销量 +2%、营业利润 +6% 并上调全年有机指引至 10%–11%，底盘未转弱，年底收复失地。">
<svg viewBox="0 0 720 155" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <defs><marker id="a03-k-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="28" width="196" height="98" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">KO · 2023 秋</text>
  <text x="118" y="86" text-anchor="middle" font-size="12.5" fill="#22392f">担忧 GLP-1 压销量</text>
  <text x="118" y="108" text-anchor="middle" font-size="12" fill="#5e6d65">走势贴近板块 XLP</text>
  <line x1="216" y1="77" x2="256" y2="77" stroke="#23695a" stroke-width="2" marker-end="url(#a03-k-s)"/>
  <rect x="262" y="28" width="196" height="98" rx="10" fill="#fbfbf6" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="360" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">2023 Q3 财报证伪</text>
  <text x="360" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">销量 +2% · 利润 +6%</text>
  <text x="360" y="108" text-anchor="middle" font-size="12" fill="#5e6d65">有机指引上调至 10%–11%</text>
  <line x1="458" y1="77" x2="498" y2="77" stroke="#23695a" stroke-width="2" marker-end="url(#a03-k-s)"/>
  <rect x="504" y="28" width="196" height="98" rx="10" fill="#23695a"/>
  <text x="602" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="#e5efe9">底盘未转弱</text>
  <text x="602" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">随板块收复失地</text>
  <text x="602" y="108" text-anchor="middle" font-size="12" fill="#d7e8df">KO +5.3% vs XLP +4.7%</text>
</svg>
</div>
<div class="business-exchange" data-ff-only="fisv" hidden aria-label="FISV 2025–2026 财报核验：大幅跑输支付 ETF（−77.7% vs IPAY −18.1%），随后 25Q3 指引重设、26Q2 有机收入 −5% 且调整后 EPS −26%，原有增长路径已改写。">
<svg viewBox="0 0 720 155" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <defs><marker id="a03-f-r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#b5483a"/></marker></defs>
  <rect x="20" y="28" width="196" height="98" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="118" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="#b5483a">FISV · 2025–26</text>
  <text x="118" y="86" text-anchor="middle" font-size="12.5" fill="#22392f">独自大跑输行业</text>
  <text x="118" y="108" text-anchor="middle" font-size="12" fill="#b5483a">−77.7% vs IPAY −18.1%</text>
  <line x1="216" y1="77" x2="256" y2="77" stroke="#b5483a" stroke-width="2" marker-end="url(#a03-f-r)"/>
  <rect x="262" y="28" width="196" height="98" rx="10" fill="#fbfbf6" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="360" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">指引下修、逆风延续</text>
  <text x="360" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="#b5483a">26Q2 调整 EPS −26%</text>
  <text x="360" y="108" text-anchor="middle" font-size="12" fill="#5e6d65">有机收入同比 −5%</text>
  <line x1="458" y1="77" x2="498" y2="77" stroke="#b5483a" stroke-width="2" marker-end="url(#a03-f-r)"/>
  <rect x="504" y="28" width="196" height="98" rx="10" fill="#b5483a"/>
  <text x="602" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="#fce8e5">增长路径已改写</text>
  <text x="602" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">持有依据须重写</text>
  <text x="602" y="108" text-anchor="middle" font-size="12" fill="#f7d6d0">旧预期失效、不靠等回本</text>
</svg>
</div>
<figcaption>点击切换 KO 与 FISV 案例。落子做决定时看不到事后的股价曲线，手里能倚仗的只有已披露经营事实与审慎估计。</figcaption>
</figure>

把 FISV 在 2025 年 7 月与 10 月两次披露的关键数字排开，就能看清它的全年指引与两大业务线是如何同步下移的：

<figure class="flow-figure shift-rows g3-shift-tune" id="nb-a03-fisv-reset">
<div class="ff-head"><p class="ff-title">FISV 的预期与经营怎样被改写</p><p class="ff-legend"><span style="--c:#8a978e" class="sh-key-old">原先</span><span class="ff-key-cash">后来</span></p></div>
<div class="sh-grid">
<span class="sh-sep">全年指引：2025 年 7 月 → 10 月</span>
<span class="sh-name">有机收入增长<small>2025 年全年</small></span><span class="sh-val">约 10% → <strong>3.5%–4%</strong></span><div class="sh-track business-exchange" aria-label="2025 年全年有机收入增长指引，从 7 月的约 10% 下调到 10 月的 3.5%—4%。"><i class="sh-line" style="--from:31.2%;--w:52.1%"></i><i class="sh-old" style="--from:83.3%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:29.2%;--w:4.2%;--shift:0px"></i></div>
<span class="sh-name">调整后每股收益<small>2025 年全年，美元</small></span><span class="sh-val">10.15–10.30 → <strong>8.50–8.60</strong></span><div class="sh-track business-exchange" aria-label="2025 年全年调整后每股收益指引，从 7 月的 10.15—10.30 美元下调到 10 月的 8.50—8.60 美元。"><i class="sh-line" style="--from:18.3%;--w:55.8%"></i><i class="sh-old" style="--from:71.7%;--w:5.0%;--shift:0px"></i><i class="sh-new" style="--from:16.7%;--w:3.3%;--shift:0px"></i></div>
<span class="sh-sep">季度有机收入增长：第二季度 → 第三季度</span>
<span class="sh-name">商户业务<small>2025 年</small></span><span class="sh-val">9% → <strong>5%</strong></span><div class="sh-track business-exchange" aria-label="商户业务有机收入增速从 2025 年第二季度的 9% 放缓到第三季度的 5%。"><span class="sh-zero" style="--x:33.3%"></span><i class="sh-line" style="--from:61.1%;--w:22.2%"></i><i class="sh-old" style="--from:83.3%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:61.1%;--w:0.0%;--shift:-6px"></i></div>
<span class="sh-name">金融服务业务<small>2025 年</small></span><span class="sh-val">7% → <strong>−3%</strong></span><div class="sh-track business-exchange" aria-label="金融服务业务有机收入从 2025 年第二季度增长 7% 转为第三季度下降 3%。"><span class="sh-zero g3-sh-zero" style="--x:33.3%"><em>0%</em></span><i class="sh-line" style="--from:16.7%;--w:55.6%"></i><i class="sh-old" style="--from:72.2%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:16.7%;--w:0.0%;--shift:-6px"></i></div>
</div>
<figcaption>空心标记为原先的数字，实心为后来的数字，箭头指向下修方向；每行各用自己的刻度，竖虚线为 0%。均为公司披露的非 GAAP 口径。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-2">正如[《股票、公司与股价》](/zh/notebook/stocks-company-price/#nb-s01-expectations)所讨论的，股价下跌后是不是更划算，取决于未来所得的预期怎么变：经营仍有支撑而价格走低，赔率会变好；若经营预期下调得比股价还深，哪怕跌了一大截也未必划算<span data-text-detail>（本节有机收入增长与调整后每股收益均采用各公司披露的非 GAAP 口径；比较在同一公司、同一指标内进行，并保留各自的季度同比或全年指引期间；重估公司前景时还需把受冲击业务占比、共同费用、债务和资本投入一并算入）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

要把眼前的上行回报与下行损失放在同一架天平上，就要算当前价格下的 Risk–Reward。假设分红留作现金，从今天起的情景持有回报为：

\[
\text{情景持有回报}
=\frac{\text{情景期末股价}+\text{期间每股分红}-\text{当前股价}}{\text{当前股价}}.
\]

下面按“年每股收益 × 市盈率”估算两年后的三种情景；拖动当前股价滑块，看同一套经营假设下，价格变化怎样瞬间改写赔率：

<figure class="flow-figure g3-calc-tune" id="nb-a03-scenario-chain" data-calc-chain>
<div class="ff-head"><p class="ff-title">从经营情景到持有回报</p><p class="ff-legend"><span class="ff-key-share">上行</span><span class="ff-key-cash">下行</span></p></div>
<div class="cc-control">
<label for="nb-a03-price">当前股价 <output for="nb-a03-price" data-cc-price-output>100</output> 美元</label>
<input id="nb-a03-price" type="range" min="70" max="140" step="1" value="100" disabled>
<div class="cc-presets" hidden><button type="button" data-cc-price="80">80</button><button type="button" data-cc-price="100" aria-pressed="true">100</button><button type="button" data-cc-price="130">130</button></div>
</div>
<div class="cc-table business-exchange" aria-label="两年后三种经营情景的持有回报计算链（期间累计分红 2 美元）：顺利情景年 EPS 6 美元乘以 25 倍得期末股价 150 美元，加分红共 152 美元；中性情景 5 美元乘以 20 倍得 100 美元，加分红共 102 美元；不利情景 3 美元乘以 20 倍得 60 美元，加分红共 62 美元。当前股价 100 美元时，三者回报分别为 +52.0%、+2.0%、−38.0%，上行比下行约 1.37 比 1；当前股价 80 美元时上行 +90.0%、下行 −22.5%；130 美元时上行约 +16.9%、下行约 −52.3%。">
<div class="cc-head" aria-hidden="true"><span>两年后的经营情景</span><span>年每股收益 × 市盈率</span><span>期末股价</span><span>＋分红</span><span>＝每股所得</span><span>相对当前股价</span></div>
<div class="cc-lane" data-cc-outcome="152" data-cc-role="up"><div class="cc-name"><strong>顺利</strong><small>需求增加，利润增长</small></div><div class="cc-step cc-eps">6 <em>美元</em> × 25 <em>倍</em></div><div class="cc-step cc-price">150</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">152</div><div class="cc-return" data-cc-return><div class="cc-bar cc-up" style="width:43.3%"></div><span class="cc-value cc-up" style="left:calc(50% + 21.7% + 6px)">+52.0%</span></div></div>
<div class="cc-lane" data-cc-outcome="102"><div class="cc-name"><strong>中性</strong><small>业务大致维持</small></div><div class="cc-step cc-eps">5 <em>美元</em> × 20 <em>倍</em></div><div class="cc-step cc-price">100</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">102</div><div class="cc-return" data-cc-return><div class="cc-bar cc-up" style="width:1.7%"></div><span class="cc-value cc-up" style="left:calc(50% + 0.8% + 6px)">+2.0%</span></div></div>
<div class="cc-lane" data-cc-outcome="62" data-cc-role="down"><div class="cc-name"><strong>不利</strong><small>需求转弱，利润下降</small></div><div class="cc-step cc-eps">3 <em>美元</em> × 20 <em>倍</em></div><div class="cc-step cc-price">60</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">62</div><div class="cc-return" data-cc-return><div class="cc-bar cc-down" style="width:31.7%"></div><span class="cc-value cc-down" style="right:calc(50% + 15.8% + 6px)">−38.0%</span></div></div>
</div>
<div class="cc-foot"><span>每股所得 ÷ 当前股价 − 1，即从今天起的情景回报；金额单位为美元／股。</span><span>上行∶下行 = <strong data-cc-ratio>1.37∶1</strong></span></div>
<figcaption>简化教学设定：观察两年，期间每股分红合计 2 美元并留作现金；三个情景没有指定概率。</figcaption>
</figure>

把滑块在 80、100、130 美元之间来回拖动可以看到，哪怕公司经营分毫未变，价格涨太高时减仓同样顺理成章。反过来，如果中性情景的年每股收益本身从 5 美元下修到 4 美元（仍按 20 倍计，期末股价降到 80 美元），即便眼前股价同步跌到 80 美元，中性两年回报也只剩分红带来的 2.5%——过去跌掉的那一截，不会自动变成从今天算起的上行空间。

<span data-text-versions id="nb-a03-text-3">算清幅度后，还要结合各情景的发生可能性、等待时间以及有没有更好的资金去处来权衡<span data-text-detail>（本例每个情景均设两年累计每股分红 2 美元，暂不计税费、融资成本与分红再投资，且未指定概率；同样的累计回报，等两年与等十年吸引力相去甚远）</span>。持有理由和现价 Risk–Reward 依然站得住，继续拿着才有依据；前提变了，即便还没回本也可以调整持仓。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 交易心理与重新定价 {#nb-a03-repricing}

从今天走到两年后的情景兑现，盘面每天都在跳动：止损、追涨和“一解套就卖”的心态都会写进成交价与成交量。技术指标用来整理这些量价记录（布林带、MACD、KDJ 与 VWAP 的读法见按需专题[《指标与趋势交易》](/zh/notebook/indicators-trend-trading/)），可以当作观察线索，但不能替代基本面核查——亏钱盼反弹时，一次转强信号很容易迎合心里的愿望，而多个由同一段价格算出的指标齐转强，有时只是同一次跳动。

日常波动之外，一旦重大信息改写了经营预期，旧的价格区间还会一夜之间失去参照意义。2026 年 7 月 29 日盘后，Microsoft（MSFT）发布 FY26 Q4 财报（当季收入同比 +18%，Azure 及其他云服务收入 +43%），次日收盘价跳升约 15.5% 至 451.10 美元，成交量放大至前一天的约 2.3 倍：[^msft-results]<sup>，</sup>[^msft-prices]

<figure class="holding-figure">
<img src="/notebook/holding/msft-repricing.svg?v=20261126" alt="MSFT在2026年7月29日盘后发布FY26 Q4财报，次日收盘价上升到451.10美元并明显放量；图中虚线保留财报前约401.7美元的区间上沿作对照。" width="820" height="478" loading="lazy">
<figcaption>财报后的新价格与旧区间。虚线固定在财报前按近 20 个交易日收盘价画出的区间上沿，下方显示成交量；<a href="/notebook/holding/msft-repricing.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-10">如果只因股价远高于财报前约 401.7 美元的旧上沿就断定“涨过头该回落”，便忽略了新信息正在抬高市场愿意支付的估值；面对跳空重估，得先更新对经营前景的判断，再观察新的量价关系<span data-text-detail>（虚线为截至 7 月 29 日的 20 日布林带上轨：20 个交易日收盘均值加 2 倍总体标准差，约 401.68 美元，固定原位置作对照；即便把 7 月 30 日大涨纳入重算，当日更新后的上轨约 422.16 美元，仍落在 451.10 美元下方）</span>。至于 FY26 Q4 这种财年与自然季度的对应，留到[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)展开。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 资金、心态与持有能力 {#nb-a03-capacity}

前景和赔率都站得住，账户里还得有足够的资金撑到兑现。[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/#nb-a02-forced-lanes)展示过：刚性付款日碰上低位，满仓买入的人只能割肉凑钱，卖掉的股份也再分不到后来的修复（例如前例股价跌到 80 美元时急需 2,000 美元，就得卖掉 25 股）。

如果买股还动用了借款，约束会进一步收紧：借款本金纹丝不动，股价的全部跌幅都由自有资金硬吃，触发维持保证金线时还会被迫平仓。

<figure class="flow-figure leverage-bars g3-leverage-tune" id="nb-a03-leverage">
<div class="ff-head"><p class="ff-title">借款不随股价变化，自有资金承担全部跌幅</p><p class="ff-legend"><span class="lv-key-own">自有资金</span><span class="lv-key-loan">借款 10,000</span></p></div>
<div class="lv-grid">
<span class="lv-name">不借款<small>买入 10,000</small></span><span class="lv-val">自有 <strong>10,000</strong></span><div class="lv-bar business-exchange" aria-label="不借款：用 10,000 美元自有资金买入股票。"><i class="lv-own" style="--w:50.00%"></i></div>
<span class="lv-name">不借款，跌 20%</span><span class="lv-val">自有 <strong class="lv-bad">8,000</strong>，−20%</span><div class="lv-bar business-exchange" aria-label="不借款时股价下跌 20%，持仓和自有资金都剩 8,000 美元，损失 20%。"><i class="lv-own" style="--w:40.00%"></i><i class="lv-gone" style="--w:10.00%"></i></div>
<span class="lv-sep"></span>
<span class="lv-name">再借 10,000<small>买入 20,000</small></span><span class="lv-val">自有 <strong>10,000</strong></span><div class="lv-bar business-exchange" aria-label="另借 10,000 美元，一共买入 20,000 美元股票，其中自有资金 10,000 美元。"><i class="lv-own" style="--w:50.00%"></i><i class="lv-loan" style="--w:50.00%"></i></div>
<span class="lv-name">借款，跌 20%</span><span class="lv-val">自有 <strong class="lv-bad">6,000</strong>，−40%</span><div class="lv-bar business-exchange" aria-label="借款时股价下跌 20%，持仓剩 16,000 美元，扣除 10,000 美元借款，自有资金只剩 6,000 美元，损失 40%。"><i class="lv-own" style="--w:30.00%"></i><i class="lv-loan" style="--w:50.00%"></i><i class="lv-gone" style="--w:20.00%"></i></div>
<span class="lv-name g3-lv-warn">保证金临界<small>持仓约 14,286</small></span><span class="lv-val">自有 <strong class="lv-bad">约 4,286</strong>，占 30%</span><div class="lv-bar business-exchange" aria-label="若券商要求净权益至少占持仓市值的 30%，持仓市值跌到约 14,286 美元时，自有资金约 4,286 美元，恰好达到要求；再跌就需要补入资金或被处置持仓。"><i class="lv-own" style="--w:21.43%"></i><i class="lv-loan" style="--w:50.00%"></i><i class="lv-gone" style="--w:28.57%"></i></div>
<div class="g3-lv-axis" aria-hidden="true"><span>0</span><span>10,000</span><span>20,000 美元</span></div>
</div>
<figcaption>整条长度按 20,000 美元绘制，虚线框是已经跌掉的市值。不计利息；30% 为本例采用的券商要求。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-6">一旦跌破券商维持保证金线，要么立刻补钱，要么面临持仓被处置，原本打算等多久也就由不得自己决定了<span data-text-detail>（单一股票账户、暂不计其他担保品与利息；按 30% 要求，临界关系为“持仓市值 − 10,000 = 30% × 持仓市值”，即约 14,286 美元。FINRA 一般股票维持保证金最低要求为 25%，券商可设更高标准并直接处置证券）</span>。[^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

资金之外，也要给情绪留出余地。屏幕报价每秒都在跳动，真正改变公司经营的新信息却远没有那么密集；频繁盯盘只会让每一次下探勾起回本执念、一点反弹又动摇原定依据。有时候关掉软件、离开屏幕去做点别的事，少盯一会儿盘，股票反而更容易拿得住。

<figure class="flow-figure" id="nb-a03-hold-checklist">
<div class="ff-head"><p class="ff-title">面对浮亏时的四步持有检查</p><span class="ff-sub">按顺序回答，不靠“等回本”拍板</span></div>
<div class="business-exchange" aria-label="面对浮亏的四步检查：01 忘掉买入成本，以现价为起点；02 相对行业排雷，辨别板块同跌还是独自跑输；03 重算现价 Risk-Reward，前提变了就调整；04 守住现金期限与杠杆安全线。">
<svg viewBox="0 0 720 140" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <defs><marker id="a03-ck-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="12" y="22" width="154" height="96" rx="9" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.3"/>
  <text x="89" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">01 忘掉成本</text>
  <text x="89" y="80" text-anchor="middle" font-size="12" fill="#3c4c44">历史价只记账</text>
  <text x="89" y="102" text-anchor="middle" font-size="12" fill="#5e6d65">现价才是起点</text>
  <line x1="166" y1="70" x2="188" y2="70" stroke="#23695a" stroke-width="1.8" marker-end="url(#a03-ck-s)"/>
  <rect x="194" y="22" width="154" height="96" rx="9" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.3"/>
  <text x="271" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">02 对照行业</text>
  <text x="271" y="80" text-anchor="middle" font-size="12" fill="#3c4c44">板块同跌先稳住</text>
  <text x="271" y="102" text-anchor="middle" font-size="12" fill="#5e6d65">独自跑输立刻查</text>
  <line x1="348" y1="70" x2="370" y2="70" stroke="#23695a" stroke-width="1.8" marker-end="url(#a03-ck-s)"/>
  <rect x="376" y="22" width="154" height="96" rx="9" fill="#f3f8f4" stroke="#23695a" stroke-width="1.4"/>
  <text x="453" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">03 重算赔率</text>
  <text x="453" y="80" text-anchor="middle" font-size="12" fill="#22392f">核对财报与预期</text>
  <text x="453" y="102" text-anchor="middle" font-size="12" fill="#5e6d65">前提变了就调整</text>
  <line x1="530" y1="70" x2="552" y2="70" stroke="#23695a" stroke-width="1.8" marker-end="url(#a03-ck-s)"/>
  <rect x="558" y="22" width="150" height="96" rx="9" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="633" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">04 守住现金</text>
  <text x="633" y="80" text-anchor="middle" font-size="12" fill="#3c4c44">避开用款与追保</text>
  <text x="633" y="102" text-anchor="middle" font-size="12" fill="#5e6d65">撑到预期兑现</text>
</svg>
</div>
</figure>

以上讨论针对的是单笔持仓；当手里同时握有几只股票和基金时，它们常常会同涨同跌，现金也得在多项持仓之间统筹安排。下一篇[《投资组合：分散、多资产与风险制衡》](/zh/notebook/portfolio-diversification-hedging/#nb-p01-sizing)会把这些持仓合在一起来看；若需要进一步了解保证金与衍生工具实务，可接读按需专题[《保证金、对冲与期间现金》](/zh/notebook/settlement-margin-cash/)。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>
<link rel="stylesheet" href="/notebook/holding.css?v=20261126">
<script src="/notebook/holding.js" defer></script>

[^wsj]: [Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging](https://www.wsj.com/finance/stocks/how-to-tell-whether-a-plunging-stock-will-keep-plunging-bf0be3ed)，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。
[^prices-ko]: Yahoo Finance：[KO](https://finance.yahoo.com/quote/KO/history/)、[XLP](https://finance.yahoo.com/quote/XLP/history/)，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见[数据表](/notebook/holding/ko-recovery.csv)。
[^ipay]: [Amplify：Digital Payments ETF（IPAY）](https://amplifyetfs.com/ipay/)，跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。
[^prices-fisv]: Yahoo Finance：[FISV](https://finance.yahoo.com/quote/FISV/history/)、[IPAY](https://finance.yahoo.com/quote/IPAY/history/)，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见[数据表](/notebook/holding/fiserv-underperformance.csv)。
[^ticker]: [Nasdaq：Fiserv 上市与交易代码公告](https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2025-32)，自 2025-11-11 起使用 FISV，此前使用 FI。
[^ko-results]: [Coca-Cola：2023 年第三季度业绩公告](https://www.coca-colacompany.com/media-center/coca-cola-reports-third-quarter-2023-results)，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。
[^fiserv-q2]: [Fiserv：2025 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/798354/000079835425000161/fiq225earningsrelease.htm)，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。
[^fiserv-q3]: [Fiserv：2025 年第三季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-third-quarter-2025-results)，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。
[^fiserv-2026]: [Fiserv：2026 年第二季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-second-quarter-2026-results)，2026-08-06，季度有机收入与调整后每股收益的同比变化。
[^msft-results]: [Microsoft：FY26 Q4 业绩公告](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast)，2026-07-29，收入及 Azure 与其他云服务收入增长；[财报发布时间公告](https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/)，确认盘后发布。
[^msft-prices]: [Yahoo Finance：MSFT 历史行情](https://finance.yahoo.com/quote/MSFT/history/)。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见[数据表](/notebook/holding/msft-repricing.csv)。
[^margin]: [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts)，Margin Requirements、Firm Practices、Know Before You Trade。
