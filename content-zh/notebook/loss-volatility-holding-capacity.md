{
  "title": "亏损、波动与持有能力",
  "description": "从 FISV 财报后暴跌、又继续下跌的持有经历出发，对照 KO 的修复，结合行业比较、Risk–Reward、重新定价和资金安排，理解持有与退出。",
  "layout": "entry",
  "notebookid": "zh-loss-volatility-holding-capacity",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-loss-volatility-holding-capacity"
}

2025 年 10 月 29 日，Fiserv（FISV，当时代码为 FI）公布第三季度财报并大幅下调全年指引，股价当天从 126.17 美元跌到 70.60 美元，单日跌去约 44%。一天跌掉这么多，很多人会觉得“再拿一拿总能涨回来”；可此后将近一年里，FISV 的收盘价最高也只回到 69.85 美元，到 2026 年 9 月 24 日进一步跌至 45.98 美元，比暴跌当天的收盘价又低了约 35%。[^prices-fisv]<sup>，</sup>[^ticker]

同样是在下跌中选择继续持有，2023 年秋天的 Coca-Cola（KO）到年底便收复了跌幅。两笔持仓走出不同的结果，原因要到行业和公司里去找：下跌期间经营和盈利预期发生了什么变化，眼前的价格又对应着怎样的前景。光靠等回本的愿望，回答不了这些问题。

## 亏损与回本预期 {#nb-a03-loss}

先把几种常见的亏损说法放进 FISV 这笔持仓。如果在 2025 年第一个交易日以 205.98 美元买入，拿到 2026 年 9 月 24 日的 45.98 美元，相对买入成本亏了约 77.7%；这只股票在 2025 年 3 月 3 日一度涨到 237.79 美元，从高点算起，回撤约 80.7%。前一个数字记的是这笔投资的得失，后一个数字量的是从高处回落的幅度。[^prices-fisv]

股票还没卖出时的亏损，通常叫浮亏。股份虽然还在账户里，持仓的市场价值已经缩水；一旦卖出，股份换成现金，这部分盈亏便随之实现。如果持有期间收过分红，就要像[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)谈到的那样，把已经到手的现金和剩余股份的价值合在一起算。

过去的账算清楚了，接下来做决定却得往前看。不妨假设三个人分别在 2025 年初、财报前一天和暴跌当天收盘时买入 FISV，到 2026 年 9 月 24 日，三人账面各自亏了约 77.7%、63.6% 和 34.9%；可从这一天往后看，他们手里握着的都是同一只 45.98 美元的股票，接下来的涨跌毫无二致。市场不会因为有人当初花 205.98 美元买进，就额外照顾他、帮他涨回成本价。买入价留着记账就够了，眼下还值不值得继续拿，只看今天的价格和公司往后能赚多少。

<figure class="flow-figure path-chart g3-cost-bases" id="nb-a03-cost-bases">
<div class="ff-head"><p class="ff-title">同一个现价，三种买入成本</p><span class="ff-sub">FISV 收盘价，美元／股</span></div>
<div class="pc-plot business-exchange" aria-label="FISV 拆股调整后收盘价，2025 年 1 月 2 日 至 2026 年 9 月 24 日。2025 年 3 月 3 日 达到高点 237.79 美元，2025 年 10 月 28 日 收盘 126.17 美元，2025 年 10 月 29 日 财报后收盘 70.60 美元，2026 年 9 月 24 日 为 45.98 美元。年初以 205.98 美元买入的人亏损约 77.7%，财报前一天以 126.17 美元买入的人亏损约 63.6%，暴跌当天收盘以 70.60 美元买入的人亏损约 34.9%；从高点算起回撤约 80.7%。此后三人持有的是同一只 45.98 美元的股票，接下来的涨跌相同。">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="pc-grid" points="0,80.77 100,80.77"/><polyline class="pc-grid" points="0,61.54 100,61.54"/><polyline class="pc-grid" points="0,42.31 100,42.31"/><polyline class="pc-grid" points="0,23.08 100,23.08"/><polyline class="pc-grid" points="0,3.85 100,3.85"/><polyline class="pc-fixed" points="0.00,20.78 100,20.78"/><polyline class="pc-fixed" points="47.46,51.47 100,51.47"/><polyline class="pc-fixed" points="47.62,72.85 100,72.85"/><polyline class="pc-price" points="0.00,20.78 0.16,19.78 1.27,22.88 2.38,19.78 3.49,19.68 4.60,16.91 5.71,11.52 6.83,11.31 7.94,10.64 9.05,9.35 10.16,16.14 11.27,17.46 12.38,16.12 13.49,16.87 14.60,23.62 15.71,19.95 16.67,19.75 17.94,31.72 19.05,29.09 20.16,29.20 21.27,35.90 22.38,38.72 23.49,37.39 24.60,35.88 25.71,37.30 26.83,37.16 27.94,33.72 28.89,32.48 30.16,36.34 31.27,36.25 32.38,45.37 33.49,47.95 34.60,48.75 35.71,47.42 36.83,46.28 37.94,46.85 39.05,48.06 40.16,48.34 41.27,49.31 42.38,50.17 43.49,50.94 44.60,52.83 45.71,53.21 46.83,51.86 47.46,51.47 47.62,72.85 47.94,74.35 49.05,75.50 50.16,75.61 51.27,76.60 52.38,76.36 53.49,74.51 54.60,73.56 55.71,73.87 56.83,74.04 57.94,74.77 59.05,73.13 60.16,74.50 61.27,74.02 62.38,75.49 63.49,76.92 64.60,77.17 65.71,76.36 66.83,76.04 67.94,75.73 69.05,78.18 70.16,78.05 71.27,79.27 72.22,78.40 73.49,78.43 74.60,75.40 75.71,76.60 76.83,76.10 77.94,78.66 79.05,78.72 80.16,78.03 81.27,78.25 82.38,79.07 83.49,79.32 84.44,81.59 85.71,80.98 86.67,79.87 87.94,80.60 89.05,80.53 90.16,80.38 91.27,79.25 92.38,79.84 93.49,79.08 94.60,79.78 95.71,79.55 96.83,79.62 97.94,80.16 99.05,81.85 100.00,82.32"/></svg>
<span class="pc-y" style="top:80.77%">50</span><span class="pc-y" style="top:61.54%">100</span><span class="pc-y" style="top:42.31%">150</span><span class="pc-y" style="top:23.08%">200</span><span class="pc-y" style="top:3.85%">250</span><span class="pc-xlab" style="left:28.57%">2025.07</span><span class="pc-xlab" style="left:57.78%">2026.01</span><span class="pc-xlab" style="left:86.51%">2026.07</span>
<span class="pc-dot" style="left:9.52%;top:8.54%"></span><span class="pc-note" style="left:calc(9.52% + 8px);top:calc(8.54% - 22px)">高点 237.79</span><span class="pc-dot" style="left:0.00%;top:20.78%"></span><span class="pc-note cb-mark" style="left:calc(0.00% + 4px);top:calc(20.78% + 6px)">①</span><span class="pc-dot" style="left:47.46%;top:51.47%"></span><span class="pc-note cb-mark" style="left:calc(47.46% + 8px);top:calc(51.47% - 20px)">②</span><span class="pc-dot" style="left:47.62%;top:72.85%;--c:var(--ff-cash)"></span><span class="pc-note cb-mark pc-warm" style="left:calc(47.62% - 22px);top:calc(72.85% + 4px)">③</span><span class="pc-dot" style="left:100.00%;top:82.32%;--c:var(--ff-cash)"></span><span class="pc-note" style="right:0;top:calc(20.78% - 18px);text-align:right">① <strong>−77.7%</strong></span><span class="pc-note" style="right:0;top:calc(51.47% - 18px);text-align:right">② <strong>−63.6%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(72.85% - 18px);text-align:right">③ <strong>−34.9%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(82.32% + 8px);text-align:right">现价 45.98</span>
</div>
<figcaption>① 2025 年初以 205.98 买入；② 10 月 28 日财报前以 126.17 买入；③ 10 月 29 日暴跌后以 70.60 买入。虚线是三个买入价，右端为各自到 2026 年 9 月 24 日的盈亏；拆股调整后收盘价，不含分红。<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

## 行业参照与两种结果 {#nb-a03-industry}

先看 KO 的那次下跌。2023 年秋天，GLP-1 减肥药走红，市场开始担心食品饮料的消费量会跟着缩水：如果大家吃得更少、喝得更少，相关公司的增长会不会受挫？一时间，KO 和多家食品饮料公司的股价都被拖累，但随后又逐步修复。[^wsj]

看实际行情，KO 在 2023 年 9 月底收于约 56 美元，10 月初一度跌到约 52 美元，到年底又涨回约 59 美元。下图拿消费必需品 ETF XLP 作参照：KO 在 10 月初跌得更急一些，后来慢慢追了回来，到年底时，两者相对 9 月底都涨了约 5%。接下来需要查证的，就是当时市场的担忧与公司实际经营之间究竟有多大距离。[^prices-ko]

<figure class="holding-figure">
<img src="/notebook/holding/ko-recovery.svg?v=20261126" alt="2023年9月29日至12月29日，KO和消费必需品ETF XLP收盘价均以期初为100。KO在10月初下跌后逐步修复，期末KO上涨约5.3%，XLP上涨约4.7%；标记10月24日的财报发布。" width="820" height="416" loading="lazy">
<figcaption>KO 的修复过程与消费必需品板块的同期表现。两条线各自从 100 起步，比较价格变化；<a href="/notebook/holding/ko-recovery.csv">查看数据</a>。</figcaption>
</figure>

再看开头的 FISV。它主营支付处理和金融技术服务，起初给出了较高的增长与盈利预期，后来却大幅下修指引。要判断这段下跌里有多少来自大环境，不妨把它和支付行业 ETF IPAY 放在同一张图里比较。IPAY 覆盖支付网络、支付处理及相关技术服务公司，能够提供一组行业参照。从 2025 年首个交易日到 2026 年 9 月 24 日，IPAY 跌了约 18%，FISV 却跌去约 78%。整个支付板块确实在走弱，但 FISV 落后的幅度要大得多，我们因而要回到公司披露，查清它的经营与盈利预期到底出了什么变化。[^ipay]<sup>，</sup>[^prices-fisv]

<figure class="holding-figure">
<img src="/notebook/holding/fiserv-underperformance.svg?v=20261126" alt="2025年1月2日至2026年9月24日，FISV和支付行业ETF IPAY收盘价均以期初为100。期末FISV下跌约77.7%，IPAY下跌约18.1%；FISV在2025年10月指引大幅下修时暴跌，随后仍持续承压。" width="820" height="426" loading="lazy">
<figcaption>FISV 相对支付行业 ETF IPAY 的明显落后。虚线标出几次公司披露，区间末的数字为相对期初的价格变化；<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-1">一般而言，当同行业的公司一起下跌、自己的持仓也大致同步时，就不必单凭账面亏损怀疑它出了独有的毛病；相反，如果它在一段时间里明显跑输行业，就该重点检查需求、竞争位置和盈利前景是否已经相对转弱。即便公司账面上还在增长，市场原先押注的增长预期也可能已经落空<span data-text-detail>（KO 图观察 2023 年 9 月 29 日至 12 月 29 日；FISV 图观察 2025 年 1 月 2 日至 2026 年 9 月 24 日。两图使用拆股调整后的收盘价，各自以期初为 100，不计分红。XLP 覆盖美国消费必需品板块，IPAY 覆盖全球数字支付相关公司，业务范围均比对应单一公司更广；相对股价还受起始估值及市场预期变化影响）</span>。相对行业的表现指明了查证的方向，接下来还要拿公司披露的经营数据去检验：当初担心的业务变化有没有真的发生，原来的增长预期又兑现了几分。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 基本面变化与 Risk-Reward {#nb-a03-risk-reward}

先看 KO 在这轮下跌中交出了怎样的成绩单。市场担忧消费减少之后，公司随后公布的财报正好提供了一个检验窗口。2023 年 10 月 24 日发布的第三季度报告显示，全球销量同比增长 2%，营业利润增长 6%，公司还顺势把全年有机收入增长预期上调到了 10%—11%。财报呈现的是截至 9 月底仍在稳步增长的业务底盘，管理层对全年的判断也未随市场担忧一同转弱。[^ko-results]

这就给了持有人继续观察的具体锚点：销量能不能守住，产品和定价还有没有竞争力，全年盈利预期需不需要重估。面对同一轮利空担忧，我们既要弄懂它可能怎样传导到业务，也要核实这种影响眼下走到了哪一步。后来股价修复，让我们事后看到了继续持有的回报；可在当时落子做决定时，手里能倚仗的，只有已经披露的经营事实和对未来的审慎估计。

再回到 FISV，就得带着它原先许下的预期去看后来的变化。2025 年 7 月，公司还预计全年有机收入增长约 10%、调整后每股收益 10.15—10.30 美元；到了 10 月，这两项指引分别被压低到 3.5%—4% 和 8.50—8.60 美元。原先期待的增长没有按计划兑现，继续持有的依据也就得跟着重写。[^fiserv-q2]<sup>，</sup>[^fiserv-q3]

经营端的压力同样写进了季度财报里。FISV 的商户业务有机收入增速，从第二季度的 9% 放缓到第三季度的 5%；金融服务业务更从增长 7% 转成下降 3%，第三季度调整后每股收益同比下滑 11%。到了 2026 年第二季度，公司有机收入同比下降 5%，调整后每股收益再降 26%，经营逆风仍未消退。公司虽然还在赚钱，但当初预期中的那条增长与盈利路径已经改变了。[^fiserv-q2]<sup>，</sup>[^fiserv-q3]<sup>，</sup>[^fiserv-2026]

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

<span data-text-versions id="nb-a03-text-2">经营与盈利预期的变化，会直接改写我们对股东未来所得的估计。正如[《股票、公司与股价》](/zh/notebook/stocks-company-price/)所讨论的，持有股份，看的还是公司业务最终能带来什么回报。当某项业务遭遇冲击时，要评估它在公司利润中占多大分量、压力大概持续多久、其他业务能托住多少，再把共同费用、债务和资金投入一起算进来，重估整体的盈利前景<span data-text-detail>（本节的有机收入增长及调整后每股收益，采用各公司披露的非 GAAP 口径；比较始终在同一家公司、同一指标内进行，所述季度同比变化与全年指引分别保留各自期间）</span>。因此，重新审视一笔持仓时，既要更新对未来所得的估计，也要看清眼前的股价已经落到了哪里。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

至于股价下跌之后是不是更值得继续拿，取决于未来所得的预期怎么变。如果经营前景仍有支撑、只是价格降了下来，同样的潜在回报便对应更少的投入成本；反过来，要是经营预期下调得比股价还深，哪怕价格看起来便宜了一大截，这笔投资也未必更划算。要把这两边放在同一个天平上称量，就要用到 Risk-Reward，对照可能拿到的上行回报与需要承担的下行损失。

不妨用一组简化数字把这套比较展开。假设当前股价为 100 美元，观察两年后的结果，期间累计每股分红按 2 美元计。经营顺利时，需求扩大、利润增长；中性情景下，业务大致维持现状；不利时，需求和利润一同走弱。这里按“年每股收益 × 市盈率”估算期末股价——也就是先估计每股一年能赚多少利润，再看市场愿意为这份利润出多少倍的价格。

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

假设期间收到的分红先留作现金，那么从当前价格继续持有，情景回报就可以写为：

\[
\text{情景持有回报}
=\frac{\text{情景期末股价}+\text{期间每股分红}-\text{当前股价}}{\text{当前股价}}.
\]

顺利情景下，期末股价与分红合起来是 152 美元，相对当前的 100 美元，上行空间为 52%；不利情景下，两项合计 62 美元，下行空间为 38%。两相比照，上行空间与下行空间之比约为 1.37∶1。这个比值把涨跌两边的幅度摆在了一起，接下来还要结合各情景发生的可能性以及等待时间来权衡。

拖动上图里的滑块，把当前股价改到 80 美元，顺利情景的回报就会抬高到 90%，不利情景的亏损收窄到 22.5%；换成 130 美元，上行空间只剩约 17%，下行风险却放大到约 52%。这几种比较里，公司的经营假设分毫未变，可继续持有的吸引力已经随价格换了模样。所以，即便企业经营依然稳健，价格涨得太高时，减仓同样顺理成章。

反过来，经营情景本身也会移动。假如中性情景的年每股收益从 5 美元下调到 4 美元，仍按 20 倍市盈率估，期末股价便从 100 美元落到 80 美元。哪怕眼前股价也跟着跌到了 80 美元，中性情景下两年的回报依然只有分红带来的 2.5%。过去已经跌掉的那一截，并不会自动转化成从今天算起的上行空间。

<span data-text-versions id="nb-a03-text-3">把幅度算清之后，还要进一步追问：乐观情景倚仗的需求增长能否兑现，不利情景会由哪些因素触发，以及等待期间有没有更合适的资金去处。同样的累计回报，等两年和等十年，吸引力相去甚远<span data-text-detail>（本例每个情景均假设两年累计每股分红 2 美元，暂不计税费、融资成本及分红再投资；没有给情景指定概率。图中的不利情景只对应所列经营结果）</span>。只要原来的持有理由仍有支撑、当前价格下的 Risk-Reward 也站得住脚，继续拿着便有依据；一旦这些前提变了，即便还没回本，也可以重新调整持仓。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 交易心理与重新定价 {#nb-a03-repricing}

不过，从今天走到两年后的情景兑现，途中还会夹杂无数次短期涨跌。有人因为亏损急着止损，有人见到反弹赶紧追入，也有人死守着成本线，打算一解套就卖。急着成交的人愿意接受的报价本就不一样，而这些买卖反过来又会牵动旁观者的神经：跌得越深越让人发慌，涨起来又让原本观望的人坐不住。众人的心态落成一笔笔下单，最后都写进了成交价里。

这些交易会沉淀出价格和成交量的记录。技术指标正是整理这些记录的工具，能帮我们具体说出价格处在近期区间的什么位置、短期走势在转强还是转弱；布林带、MACD、KDJ 与 VWAP 的读法，留给按需专题[《指标与趋势交易》](/zh/notebook/indicators-trend-trading/)展开。只是，当我们正亏着钱、盼着反弹时，一次转强信号往往刚好迎合了心里的愿望。均线拐头、价格重回某个区间，都可以当作观察线索，但紧接着仍要核对行业处境、经营预期和当前价格下的 Risk-Reward 是否同步改善。好几个由同一段价格算出来的指标一齐转强，有时反映的不过是同一次价格跳动。

日常涨跌之外，一旦出现足以改写经营预期的新信息，旧的价格区间还可能一夜之间失去参照意义。Microsoft（MSFT）在 2026 年 7 月 29 日盘后公布 FY26 Q4 财报，当季收入同比增长 18%，Azure 及其他云服务收入增长 43%；次日收盘价便从约 391 美元跳升至 451 美元，单日上涨约 15.5%，成交量也放大到前一天的约 2.3 倍。[^msft-results]<sup>，</sup>[^msft-prices]

<figure class="holding-figure">
<img src="/notebook/holding/msft-repricing.svg?v=20261126" alt="MSFT在2026年7月29日盘后发布FY26 Q4财报，次日收盘价上升到451.10美元并明显放量；图中虚线保留财报前约401.7美元的区间上沿作对照。" width="820" height="478" loading="lazy">
<figcaption>财报后的新价格与旧区间。虚线固定在财报前按近 20 个交易日收盘价画出的区间上沿，下方显示成交量；<a href="/notebook/holding/msft-repricing.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-10">这时候，如果只因为股价远远高出财报前的交易区间，就断定它应该回落，便忽略了新信息正在抬高市场愿意支付的价格。图中虚线是财报前按近 20 个交易日收盘价及其波动画出的区间上沿，约为 401.7 美元；哪怕把财报次日的大涨一并纳入重算，当天更新后的上沿也只有约 422 美元，依然落在 451 美元收盘价下方。面对这类跳空重估，得先更新对经营前景的判断，再去观察新的量价关系如何展开<span data-text-detail>（这条上沿就是布林带上轨：取截至 7 月 29 日的 20 个交易日收盘价均值，加上 2 倍总体标准差，约为 401.68 美元，财报发布后仍固定在原位置作对照；7 月 30 日实际更新后的上轨为 422.16 美元）</span>。至于 FY26 Q4 这种财年命名与自然季度之间的对应关系，留到《三张财报与经营活动》再展开。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>


## 资金、心态与持有能力 {#nb-a03-capacity}

即便经营前景与当前价格都还支持继续持有，账户里也得有足够的资金撑到预期兑现。[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)用 VOO 2022 年的下跌比较过：付款日正好碰上低位时，满仓买入的人不得不卖出份额凑钱，卖掉的那一部分也就无缘后来的回升。换到正在亏损的个股上，道理分毫不差。沿用前面的情景算例，若股价跌到 80 美元时急着凑 2,000 美元，就得卖出 25 股；哪怕随后真的走出了顺利情景，这 25 股也再分不到从 80 美元算起约 90% 的那段回报。因此，只要在预期兑现之前还有必须支付的款项，就得先把那笔钱单独留好，再去衡量剩下的仓位能陪它等多久。

如果买股时还动用了借款，资金安排就又多了一道约束。自有资金 10,000 美元、全额买股时，股价跌 20% 后还剩 8,000 美元；若是另借 10,000 美元、合计买入 20,000 美元股票，同样跌去 20%，股票市值剩下 16,000 美元，扣掉照旧要还的 10,000 美元借款本金，自有资金便只剩 6,000 美元。股价跌了 20%，自己的本钱却亏掉 40%，这还没把利息算进去。

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

<span data-text-versions id="nb-a03-text-6">保证金要求还可能把退出提前推到眼前。继续看这笔 10,000 美元借款：若券商要求净权益至少占持仓市值的 30%，一旦持仓市值跌到约 14,286 美元，净权益占比就恰好踩在要求线上；再往下跌，账户便会出现保证金不足，要么立刻补钱，要么面临持仓被处置<span data-text-detail>（这里采用单一股票账户，暂不计其他担保品和利息；临界关系为“持仓市值−10,000＝30%×持仓市值”。30% 为本例采用的券商要求。FINRA 的一般股票维持保证金最低要求为 25%，券商可以设更高要求，并可能直接处置证券）</span>。等到风控规则触发处置，原本打算再等多久，也就由不得自己决定了。[^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除了资金缓冲，也要给情绪留出余地。频繁点开行情，每一次下探都会重新勾起回本的执念，一点反弹又容易让人临时改主意。屏幕上的报价每时每刻都在跳动，真正改变公司经营的新信息却远没有那么密集。少受一点盘面来回拉扯，反而更能照着事先想清楚的依据行事。有时候关掉软件、离开屏幕去做点别的事，少盯一会儿盘，股票反而更容易拿得住。

决定是否继续持有一只股票，权衡的是从今天算起的潜在回报与可能损失，再叠加上等待的时间和期间的现金需要；这些条件变了，就不必执着于回本，可以果断减仓或退出。以上讨论针对的是单笔持仓；当手里同时握有几只股票和基金时，它们常常会同涨同跌，手里的现金也得在多项持仓之间统筹安排。下一篇[《投资组合：分散、多资产与风险制衡》](/zh/notebook/portfolio-diversification-hedging/)会把这些持仓合在一起来看，若需要进一步了解保证金与衍生工具的实务，则可接读[《保证金、对冲与期间现金》](/zh/notebook/settlement-margin-cash/)。

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
