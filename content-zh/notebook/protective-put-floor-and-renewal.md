{
  "title": "保护性看跌：价格下限与保护期限",
  "description": "逐腿推导指定期限净财富下限，并用三次续保说明参照点重设的累计后果.",
  "layout": "entry",
  "notebookid": "zh-p15",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p15"
}

保护性看跌在持有股票的同时买入一段明确期限内的卖出权. “95%的保护”要拆成执行价、权利金、现金和到期日；续保时执行价会随新的参照点重新设定.

<a id="p15-position"></a>
## 持股与出售权

已有100股XYZ，当前每股100，现金2,000，总财富12,000. 买入30天、执行价95的put，取得按95出售100股的权利，组合称为保护性看跌.[^pp]

标准未调整ETF期权采用100股单位、美式实物行权.[^terms] PF-GRID-01教学网格给95 put的mid1.42、bid1.40、ask1.44，每张每次费用0.65；利率与分红为0，时间按ACT/365.

已有股票保持100股. mid买put付142，D1现金1,858，put价值142，净财富仍12,000. 执行层支付144.65，现金1,855.35；按mid计净财富11,997.35.

<a id="p15-floor"></a>
## 到期下限与成本

到期时，股票价值$100s$，put支付$100(95-s)^+$. 加上剩余现金：

$$
W_T=1858+100s+100(95-s)^+.
$$

对$s<95$，把括号展开得到$1858+9500$；对$s\ge95$，put支付为零. 因此

$$
W_T=1858+100\max(s,95).
$$

mid财富下限11,358，较12,000减少642，其中股票从100跌至95损失500，权利金142. 执行层下限11,355.35，最大损失644.65；这里未计最终平股、行权费用及税.

| D30股价 | 只持股财富 | 股票＋put mid财富 | 股票＋put执行层财富 | put单腿毛支付 |
|---:|---:|---:|---:|---:|
| 0 | 2,000 | 11,358 | 11,355.35 | 9,500 |
| 70 | 9,000 | 11,358 | 11,355.35 | 2,500 |
| 95 | 11,500 | 11,358 | 11,355.35 | 0 |
| 100 | 12,000 | 11,858 | 11,855.35 | 0 |
| 130 | 15,000 | 14,858 | 14,855.35 | 0 |

股价70时，股票损失3,000，put毛支付2,500，再计已付权利金142，组合净损失642.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P15-payoff.svg" alt="股票＋put的到期下限与仍保留的上行"></div><div class="svg-narrow pfh-native" data-static-figure="P15-payoff-mobile.svg"><p class="pfh-figure-title">花142 mid权利金，取得指定日期财富下限</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 95保护put</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,218.41 59.50,218.41 64.00,218.41 68.50,218.41 73.00,218.41 77.50,218.41 82.00,218.41 86.50,218.41 91.00,218.41 95.50,218.41 100.00,218.41 104.50,218.41 109.00,218.41 113.50,218.41 118.00,218.41 122.50,218.41 127.00,218.41 131.50,218.41 136.00,218.41 140.50,218.41 145.00,218.41 149.50,218.41 154.00,218.41 158.50,218.41 163.00,218.41 167.50,218.41 172.00,218.41 176.50,218.41 181.00,218.41 185.50,218.41 190.00,218.41 194.50,218.41 199.00,218.41 203.50,218.41 208.00,218.41 212.50,218.41 217.00,218.41 221.50,218.41 226.00,218.41 230.50,218.41 235.00,218.41 239.50,218.41 244.00,218.41 248.50,218.41 253.00,218.41 257.50,218.41 262.00,218.41 266.50,218.41 271.00,217.28 275.50,215.02 280.00,212.77 284.50,210.51 289.00,208.25 293.50,206.00 298.00,203.75 302.50,201.49 307.00,199.23 311.50,196.97 316.00,194.73 320.50,192.47 325.00,190.21 329.50,187.95 334.00,185.70 338.50,183.44 343.00,181.19 347.50,178.94 352.00,176.68 356.50,174.42 361.00,172.16 365.50,169.91 370.00,167.66" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01教学网格 · mid结构</p></div><figcaption>股票＋put的到期下限与仍保留的上行</figcaption></figure>

精确下限要求标的、数量和日期匹配. 200股配一张100股put时，剩余100股继续承担下跌；指数put对个股的保护还取决于两者的相对变化.[^mit]

<a id="p15-exit"></a>
## 平仓、行权与续持

卖put平仓按市场bid收款并保留股票；行权按执行价卖出相应股票；继续持有则保留两条腿. 三种动作分别改变现金、股数和后续选择权.[^exercise]

卖出put可回收剩余价值，行权取得内在价值并可能放弃时间价值. 提前退出比较当时bid、行权条件、费用及到账日期.

到期时也要区分经济标记与完成交付. 若按本例严格价内put行权，低于95时100股交出，收到9,500，在教学下一营业日D31完成现金；高于95时put失效，股票仍在. 如果D30恰为95且put未行权，我们仍持100股，D30之后再下跌将不再由旧put补偿.

<a id="p15-reset"></a>
## 执行价重置与续保

三段教学路径中，每30天股价下跌4%，各段开始按现价95%重新设put执行价. 每次权利金为该段初始股票市值的1.42%，数量始终100股，忽略点差与费用.

| 段 | 起始股价 | 新put执行价 | 本段权利金 | 段末股价 | put支付 | 剩余现金 | 合计财富 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 100 | 95 | 142.00 | 96 | 0 | 1,858.00 | 11,458.00 |
| 2 | 96 | 91.20 | 136.32 | 92.16 | 0 | 1,721.68 | 10,937.68 |
| 3 | 92.16 | 87.552 | ≈130.867 | ≈88.474 | 0 | ≈1,590.813 | ≈10,438.173 |

每一段只跌4%，都没有穿过当段95%执行价，三张put都没有到期支付. 原股价累计下跌$1-0.96^3\approx11.526\%$；累计权利金约409.187，加上股票损失1,152.64，总财富减少约1,561.827. 续保后执行价参照点从95降到91.2，再降到87.552.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P15-renewal.svg" alt="重复续保时，股价、执行价与现金如何一同向下移动"></div><div class="svg-narrow pfh-native" data-static-figure="P15-renewal-mobile.svg"><p class="pfh-figure-title">每次重设95%执行价，不等于原95一直有效</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 段起点股价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 新put执行价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. 段末股价</span></li></ul><p class="pfh-axis-label">纵轴：美元/股</p><div class="pfh-plot" style="--pfh-y-label-ch:4"><div class="pfh-y-ticks"><span style="top:100%">87</span><span style="top:75%">90</span><span style="top:50%">94</span><span style="top:25%">97</span><span style="top:0%">101</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,166.05 212.50,216.79 370.00,265.50" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,229.47 212.50,277.67 370.00,323.95" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,216.79 212.50,265.50 370.00,312.26" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">1</span><span class="" style="left:50%">2</span><span class="last" style="left:100%">3</span></div></div><p class="pfh-axis-label">横轴：续保段编号；每段30天</p><p class="pfh-figure-note">三张put支付均0；累计权利金约409.187；现金约1,590.813；终财富约10,438.173</p></div><figcaption>重复续保时，股价、执行价与现金如何一同向下移动</figcaption></figure>

AQR 2021脚注6说明，保护幅度只有在回报期限与期权到期匹配时才对应同一保护；其示例采用季度滚动的10%/20% OTM、单位名义put. 本篇借用“期限与执行价参照点必须明确”的机制，上表为股票加put总账户的独立路径.[^aqr]

<a id="p15-lab"></a>
## 保护与续保实验

<div data-experiment-slot="EXP-P15-PROTECTIVE-PUT"></div>

比较股价70时的put支付和组合净损失，再切换执行成本. 续保分支按每段自己的执行价及到期价计算支付.

<details data-reading-branch="cash-index"><summary>选读：欧式现金指数put的不同交付</summary>

欧式现金指数put在结算时按指数差额付现，保护效果取决于指数与持仓风险、数量及期限的匹配. SPXW合约规格见对应结算分支.[^spx]

</details>

<a id="p15-exercises"></a>
## 练习与解析

**解释题.** 为什么到期70时，put获得2,500支付，整份账户仍亏642？

**解析.** 股票损失3,000，put毛支付2,500，扣先前权利金142后净贡献2,358，组合损失642.

**迁移题.** 三次−4%路径中，第三段结束时股价约88.474已低于最初95，为什么没有任何一次put赔付？

**解析.** 95 put在第一段股价96时到期；第二、三段执行价降为91.2、87.552，到期股价均高于各自执行价. 维持原始95下限需要覆盖整个期限的相应合同.

**期限题.** 若必须D20用现金，而保护到D30，能否仅凭11,358终点下限承诺按时付款？

**解析.** 需要D20股票与put的变现价格、操作方式、费用及结算日，才能计算按期可用现金.

[^pp]: OIC，[Protective Put](https://www.optionseducation.org/strategies/all-strategies/protective-put-married-put)，Description、Max Loss/Gain、Exercise/Expiration相关完整单元.
[^terms]: OCC，[ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，未调整单位、American exercise及T+1 settlement；报价为本文合成输入.
[^mit]: Andrew Lo，MIT [Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)，Fall 2008，slides 10–11.
[^exercise]: OIC，[Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise)，行权与平仓、提前行权与时间价值问答；OCC [ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf) June 2024 Chapter VIII.
[^aqr]: McQuinn、Thapar、Villalon，[Portfolio Protection? It's a Long (Term) Story…](https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/Portfolio-Protection-Its-a-Long-Term-Story.pdf?sc_lang=en)，February 2021，印刷5–6页、脚注6及Exhibit 3，印刷14页期权数据定义.
[^spx]: Cboe，[SPX Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，©2026，第2页：SPXW欧式、PM现金结算与下一营业日交付.
