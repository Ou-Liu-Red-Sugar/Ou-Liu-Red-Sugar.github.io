{
  "title": "P15 保护性看跌：买下一个有日期的下限",
  "description": "逐腿推导指定期限净财富下限，并用三次续保说明参照点重设的累计后果。",
  "layout": "entry",
  "notebookid": "zh-p15",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p15"
}

我们已经决定暂时保留股票，现在要为一段明确期限内的下跌付费。本篇会把“95%的保护”拆成执行价、权利金、现金和到期日四件事，并检验一个容易误解的延伸：每个月都买保护，是否就能把整个季度的损失限制在同一比例？

<a id="p15-position"></a>
## 1. put保护的是交付价格，不是市场报价

先沿用上一节可独立理解的输入：已有100股XYZ，当前每股100，现金2,000，总财富12,000。买入一张30天、执行价95的put，就得到按95卖出100股的权利。低于95时，可以利用这个权利处理股票下跌；但市场仍然可能报价70，put不会让市场价停止下跌。OIC称这种股票加put的组合为protective put。[^pp]

标准未调整ETF期权的100股单位与美式实物行权沿OCC规则。PF-GRID-01的95 put价格则是独立教学输入：mid1.42、bid1.40、ask1.44，每张每次费0.65。主链假定利率与分红为零，30天用ACT/365换算。真实市场选择权的价格由交易形成，我们仅用模型生成一组可追溯的合成报价；这不是实时保险费。[^terms]

建立时已持有的股票仍为100股，不再次支付10,000。mid支出142，D1现金成为1,858，同时得到mid价值142的put，净财富仍为12,000。执行层需按ask付144，另付0.65，现金变成1,855.35；按mid计价的即时财富为11,997.35。

<a id="p15-floor"></a>
## 2. 从两条腿推导下限与代价

到期时，股票价值$100s$，put支付$100(95-s)^+$。加上剩余现金：

$$
W_T=1858+100s+100(95-s)^+.
$$

对$s<95$，把括号展开得到$1858+9500$；对$s\ge95$，put支付为零。因此

$$
W_T=1858+100\max(s,95).
$$

mid终点下限11,358，对原12,000的最大损失为642。里面包括股票由100跌到95的500，以及买put的142。所谓“95%的执行价”不是“整个账户最多亏5%”：财富中还有2,000现金，保险本身还要付费。执行层下限为11,355.35，对应损失644.65；默认不计最终平股、行权费用及税。

| D30股价 | 只持股财富 | 股票＋put mid财富 | 股票＋put执行层财富 | put单腿毛支付 |
|---:|---:|---:|---:|---:|
| 0 | 2,000 | 11,358 | 11,355.35 | 9,500 |
| 70 | 9,000 | 11,358 | 11,355.35 | 2,500 |
| 95 | 11,500 | 11,358 | 11,355.35 | 0 |
| 100 | 12,000 | 11,858 | 11,855.35 | 0 |
| 130 | 15,000 | 14,858 | 14,855.35 | 0 |

股价上涨时，put未使用并不表示当初购买必定错误。我们买的是某些状态下的选择权，而不是保证以后每条腿都盈利。反过来，put单腿支付2,500也不能说组合赚2,500：股价70时股票亏3,000，整个组合仍亏642。

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P15-payoff.svg" alt="股票＋put的到期下限与仍保留的上行"></div><div class="svg-narrow pfh-native" data-static-figure="P15-payoff-mobile.svg"><p class="pfh-figure-title">花142 mid权利金，取得指定日期财富下限</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 95保护put</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,218.41 59.50,218.41 64.00,218.41 68.50,218.41 73.00,218.41 77.50,218.41 82.00,218.41 86.50,218.41 91.00,218.41 95.50,218.41 100.00,218.41 104.50,218.41 109.00,218.41 113.50,218.41 118.00,218.41 122.50,218.41 127.00,218.41 131.50,218.41 136.00,218.41 140.50,218.41 145.00,218.41 149.50,218.41 154.00,218.41 158.50,218.41 163.00,218.41 167.50,218.41 172.00,218.41 176.50,218.41 181.00,218.41 185.50,218.41 190.00,218.41 194.50,218.41 199.00,218.41 203.50,218.41 208.00,218.41 212.50,218.41 217.00,218.41 221.50,218.41 226.00,218.41 230.50,218.41 235.00,218.41 239.50,218.41 244.00,218.41 248.50,218.41 253.00,218.41 257.50,218.41 262.00,218.41 266.50,218.41 271.00,217.28 275.50,215.02 280.00,212.77 284.50,210.51 289.00,208.25 293.50,206.00 298.00,203.75 302.50,201.49 307.00,199.23 311.50,196.97 316.00,194.73 320.50,192.47 325.00,190.21 329.50,187.95 334.00,185.70 338.50,183.44 343.00,181.19 347.50,178.94 352.00,176.68 356.50,174.42 361.00,172.16 365.50,169.91 370.00,167.66" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01合成链 · mid结构；非真实行情</p></div><figcaption>股票＋put的到期下限与仍保留的上行</figcaption></figure>

下限依赖数量、对象和日期匹配。若只买一张却持有200股，另外100股没有获得这份95出售权；若拿指数put保护一家公司的股票，个股与指数之间的差异仍在，不能把这个精确下限照搬。MIT的股票加put图说明了支付相加的形状，但具体合约交付物仍须按原件确认。[^mit]

<a id="p15-exit"></a>
## 3. 卖put、行权卖股与继续持有是三种动作

在美式put仍有效时，持有人可以按规则选择行权；行权会改变股票数量，并产生执行价现金。卖出put平仓则使用市场bid，保留股票。两者的经济目的不同，不能仅以“put盈利了”混在一起。还有第三个选择：暂不处理，继续保有股票和put，直到未来再判断。[^exercise]

例如中途不再担心原来那项事件，卖put可以将剩余价值转成现金，而不退出股票；若不再愿意持股，则需要一起考虑股票出售、put平仓，或在适当条件下行权。不能默认行权总是优于卖出，因为行权只实现合同内在价值，可能放弃尚存的时间价值。具体比较需要当时的bid、行权条件、费用和资金时间。

到期时也要区分经济标记与完成交付。若按本例严格价内put行权，低于95时100股交出，收到9,500，在教学下一营业日D31完成现金；高于95时put失效，股票仍在。如果D30恰为95且put未行权，我们仍持100股，D30之后再下跌将不再由旧put补偿。

<a id="p15-reset"></a>
## 4. 三次95%保护，可能一次都不赔

现在不猜真实行情，只取一条明确的三段教学路径：每30天股价下跌4%，并在每段开始时用当时股价的95%重新设put执行价。每次权利金占该段起始股票市值1.42%，数量始终100股；忽略点差和费用，只检查续保与参照点。

| 段 | 起始股价 | 新put执行价 | 本段权利金 | 段末股价 | put支付 | 剩余现金 | 合计财富 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 100 | 95 | 142.00 | 96 | 0 | 1,858.00 | 11,458.00 |
| 2 | 96 | 91.20 | 136.32 | 92.16 | 0 | 1,721.68 | 10,937.68 |
| 3 | 92.16 | 87.552 | 130.8672 | 88.4736 | 0 | 1,590.8128 | 10,438.1728 |

每一段只跌4%，都没有穿过当段95%执行价，三张put都没有到期支付。可原股价已经累计下跌$1-0.96^3=11.5264\%$。累计权利金为409.1872，再加股票损失1,152.64，总财富减少1,561.8272。旧的95下限并没有一直留在原100的参照点上：第二段降到91.2，第三段又降到87.552。

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P15-renewal.svg" alt="重复续保时，股价、执行价与现金如何一同向下移动"></div><div class="svg-narrow pfh-native" data-static-figure="P15-renewal-mobile.svg"><p class="pfh-figure-title">每次重设95%执行价，不等于原95一直有效</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 段起点股价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 新put执行价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. 段末股价</span></li></ul><p class="pfh-axis-label">纵轴：美元/股</p><div class="pfh-plot" style="--pfh-y-label-ch:4"><div class="pfh-y-ticks"><span style="top:100%">87</span><span style="top:75%">90</span><span style="top:50%">94</span><span style="top:25%">97</span><span style="top:0%">101</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,166.05 212.50,216.79 370.00,265.50" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,229.47 212.50,277.67 370.00,323.95" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,216.79 212.50,265.50 370.00,312.26" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">1</span><span class="" style="left:50%">2</span><span class="last" style="left:100%">3</span></div></div><p class="pfh-axis-label">横轴：续保段编号；每段30天</p><p class="pfh-figure-note">三张put支付均0；累计premium409.1872；现金1,590.8128；终财富10,438.1728</p></div><figcaption>重复续保时，股价、执行价与现金如何一同向下移动</figcaption></figure>

这不是put失约，也不是证明购买保护从来无效，而是不同期限的承诺被误读为同一长期承诺。AQR作者2021年的论文以脚注6讨论了同类期限问题；其期权研究用季度滚动、单位名义敞口，且相关结果不是本篇股票加put总账户的回报。我们只采用“期限和参照点必须明确”的机制，并在上表独立复算。[^aqr]

<a id="p15-lab"></a>
## 5. 操作：在一张图上看保护，在另一张图上看重设

<div data-experiment-slot="EXP-P15-PROTECTIVE-PUT"></div>

先选择股价70，说明put单腿毛支付与组合净损失为何同时存在。再切换执行层：下限仅因建立成本而小幅变化，不把真实手续费说成股价风险。最后查看三次续保，用每行新执行价比较当行段末价，不要一直拿95与三个终点比较。

<details data-reading-branch="cash-index"><summary>选读：欧式现金指数put的不同交付</summary>

若改用欧式现金指数put，行权和交付又不同。它可以在相应结算日收到现金，但不提供提前实物卖出这100股XYZ的权利；只有标的风险、数量与结算期匹配时，才可以讨论相应保护。具体现金指数规格见P17/P19的SPXW分支，不把所有期权都视为同一种交割。[^spx]

</details>

<a id="p15-exercises"></a>
## 6. 解释与迁移

**解释题。** 为什么到期70时，put获得2,500支付，整份账户仍亏642？

**解析。** 原股票从10,000降到7,000，亏3,000；put到期毛支付2,500，但先前花142购买，净帮助2,358。两者合并损失642。若只用put权利金作分母，会放大单腿百分比，却不能说明原股票组合的财富损失。

**迁移题。** 三次−4%路径中，第三段结束时股价88.4736已低于最初95，为什么没有任何一次put赔付？

**解析。** 首份95 put在D30已结束，而当时股价96；后续put的执行价分别为91.2和87.552，各自到期股价又都高于执行价。不能让早已到期的95 put替后面的价格变化支付。要保持原始95下限，须另取得跨整个期限的相应合同，并支付当时真实价格。

**期限题。** 若必须D20用现金，而保护到D30，能否仅凭11,358终点下限承诺按时付款？

**解析。** 不能。需把股票与put在D20的变现方式、可成交价格和结算日放回现金账。价格下限、资产标记与现金到账是三个不同对象。这个判断不要求再猜一个未来收益率，而要求补齐实施资料。

[^pp]: OIC，[Protective Put](https://www.optionseducation.org/strategies/all-strategies/protective-put-married-put)，Description、Max Loss/Gain、Exercise/Expiration相关完整单元。
[^terms]: OCC，[ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，未调整单位、American exercise及T+1 settlement；报价为本文合成输入。
[^mit]: Andrew Lo，MIT [Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)，Fall 2008，slides 10–11。
[^exercise]: OIC，[Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise)，行权与平仓、提前行权与时间价值问答；OCC [ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf) June 2024 Chapter VIII。
[^aqr]: McQuinn、Thapar、Villalon，[Portfolio Protection? It's a Long (Term) Story…](https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/Portfolio-Protection-Its-a-Long-Term-Story.pdf?sc_lang=en)，February 2021，印刷5–6页、脚注6及Exhibit 3，印刷14页期权数据定义。三段路径为本站合成例，不是论文回测。
[^spx]: Cboe，[SPX Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，©2026，第2页：SPXW欧式、PM现金结算与下一营业日交付；不采用为XYZ的精确复制。

