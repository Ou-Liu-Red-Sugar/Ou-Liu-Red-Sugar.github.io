{
  "title": "跨式与宽跨式：到期幅度与期间价值",
  "description": "区分到期支付、期间IV与剩余时间，并用两腿退出报价与费用重建中途损益.",
  "layout": "entry",
  "notebookid": "zh-p18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p18"
}

跨式与宽跨式同时买入call和put，以两份权利金换取大幅价格变化时的凸性支付. 评价它们要同时看价格移动幅度、发生时间、剩余期限和期权重定价是否覆盖初始成本.

<a id="p18-task"></a>
## 两腿结构与成本

PF-GRID-01现价100，30天到期，标准单位100. 跨式买100 call与100 put；宽跨式买95 put与105 call. 到期行权后形成的股票或空股，按新持仓计算后续风险.[^odd]

上涨时call支付增加，下跌时put支付增加，两份权利金在建仓时付出. 两腿相加形成随价格偏离增大的凸性支付.[^oic]

从12,000现金起点出发，100C与100P的模型mid均为3.43. 无摩擦对照付686，D1现金11,314，并拥有两张期权. 合成执行层两腿均按ask3.45买入，各付0.65费用，共付691.30，现金11,308.70. 期权按mid标记为686，所以执行后即时净财富11,994.70；这5.30是点差与费用，不是标的下跌.

宽跨式mid成本299，合成执行成本304.30. 较远的执行价缩小了具有正支付的价格区域，因此权利金低于平值跨式.

<a id="p18-expiry"></a>
## 到期支付与盈亏平衡

设到期价为$s\ge0$，跨式的每股支付为

$$
(s-100)^++(100-s)^+=|s-100|.
$$

因此mid净损益是$100|s-100|-686$. 令它为零，得$s=93.14$或$106.86$. 执行层只计建仓摩擦、仍按匹配到期支付标记时，门槛变为93.087与106.913；若选择卖期权平仓，还需实际买卖价及退出费，不能套用这两个到期门槛.

宽跨式的mid损益为

$$
100[(95-s)^++(s-105)^+]-299.
$$

95至105之间两腿均无到期支付，损失299. 下方盈亏平衡为$95-2.99=92.01$，上方为$105+2.99=107.99$. 与跨式相比，付出的成本较少，开始赚钱却需要更远的价格移动.

| 到期价 | 跨式mid损益 | 宽跨式mid损益 | 跨式执行层损益 | 宽跨式执行层损益 |
|---:|---:|---:|---:|---:|
| 70 | +2,314 | +2,201 | +2,308.70 | +2,195.70 |
| 95 | −186 | −299 | −191.30 | −304.30 |
| 100 | −686 | −299 | −691.30 | −304.30 |
| 105 | −186 | −299 | −191.30 | −304.30 |
| 110 | +314 | +201 | +308.70 | +195.70 |
| 130 | +2,314 | +2,201 | +2,308.70 | +2,195.70 |

终财富为12,000加表中损益. call上涨支付无有限上界，put下跌支付受 $s\ge0$ 限制.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P18-payoff.svg" alt="跨式和宽跨式的到期支付与成本门槛"></div><div class="svg-narrow pfh-native" data-static-figure="P18-payoff-mobile.svg"><p class="pfh-figure-title">到期幅度：跨式较贵，宽跨式需要移动更远</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 100跨式</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 95/105宽跨式</span></li></ul><p class="pfh-axis-label">纵轴：损益（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">-1,386</span><span style="top:75%">1,464</span><span style="top:50%">4,314</span><span style="top:25%">7,164</span><span style="top:0%">10,014</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,166.05 59.50,169.22 64.00,172.37 68.50,175.53 73.00,178.68 77.50,181.84 82.00,185.00 86.50,188.16 91.00,191.31 95.50,194.47 100.00,197.64 104.50,200.79 109.00,203.95 113.50,207.10 118.00,210.26 122.50,213.42 127.00,216.58 131.50,219.74 136.00,222.89 140.50,226.06 145.00,229.21 149.50,232.37 154.00,235.52 158.50,238.69 163.00,241.84 167.50,245.00 172.00,248.16 176.50,251.31 181.00,254.48 185.50,257.63 190.00,260.79 194.50,263.94 199.00,267.11 203.50,270.26 208.00,273.42 212.50,276.58 217.00,279.74 221.50,282.90 226.00,286.05 230.50,289.21 235.00,292.36 239.50,295.53 244.00,298.69 248.50,301.84 253.00,305.00 257.50,308.16 262.00,311.32 266.50,314.47 271.00,317.63 275.50,320.78 280.00,323.95 284.50,320.78 289.00,317.63 293.50,314.47 298.00,311.32 302.50,308.16 307.00,305.00 311.50,301.84 316.00,298.69 320.50,295.53 325.00,292.36 329.50,289.21 334.00,286.05 338.50,282.90 343.00,279.74 347.50,276.58 352.00,273.42 356.50,270.26 361.00,267.11 365.50,263.94 370.00,260.79" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,167.83 59.50,171.00 64.00,174.15 68.50,177.31 73.00,180.47 77.50,183.62 82.00,186.79 86.50,189.94 91.00,193.10 95.50,196.25 100.00,199.42 104.50,202.58 109.00,205.73 113.50,208.89 118.00,212.05 122.50,215.21 127.00,218.36 131.50,221.52 136.00,224.67 140.50,227.84 145.00,231.00 149.50,234.15 154.00,237.31 158.50,240.47 163.00,243.63 167.50,246.78 172.00,249.94 176.50,253.10 181.00,256.26 185.50,259.42 190.00,262.57 194.50,265.73 199.00,268.89 203.50,272.05 208.00,275.20 212.50,278.36 217.00,281.53 221.50,284.68 226.00,287.84 230.50,290.99 235.00,294.15 239.50,297.31 244.00,300.47 248.50,303.62 253.00,306.78 257.50,309.95 262.00,313.10 266.50,316.26 271.00,317.84 275.50,317.84 280.00,317.84 284.50,317.84 289.00,317.84 293.50,316.26 298.00,313.10 302.50,309.95 307.00,306.78 311.50,303.62 316.00,300.47 320.50,297.31 325.00,294.15 329.50,290.99 334.00,287.84 338.50,284.68 343.00,281.53 347.50,278.36 352.00,275.20 356.50,272.05 361.00,268.89 365.50,265.73 370.00,262.57" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01教学网格 · mid结构</p></div><figcaption>跨式和宽跨式的到期支付与成本门槛</figcaption></figure>

<a id="p18-interim"></a>
## 期间价值与重定价

D10剩余20天，组合价值包含剩余选择权，需要两腿当时价格；到期支付公式仅在剩余期限为0时适用.

为把这种依赖算清楚，本实验用无分红、零利率、固定波动率的BSM公式生成条件mark. 令剩余时间$\tau$以ACT/365计、$N$为标准正态分布函数，则

$$
d_1=\frac{\log(S/K)}{\sigma\sqrt{\tau}}
       +\frac{\sigma\sqrt{\tau}}2,
\qquad d_2=d_1-\sigma\sqrt{\tau},
$$

$$
C=S N(d_1)-K N(d_2),\qquad P=C-S+K.
$$

$\sigma$ 为模型输入，从市场报价反解时称隐含波动率. BSM价格采用给定 $S,K,\tau,\sigma,r$ 条件.[^bsm]

本链的初始ask已固定. 第10天分别代入不同的$S$与$\sigma$，得到新mark；再将每腿mark四舍五入到美分，按减0.02形成合成退出bid，各扣0.65退出费. 以下列出了两腿而非只有组合总价：

| 第10天条件 | call mark / put mark（每股） | 退出call bid / put bid | 两腿退出现金（扣两费） | 相对691.30入场支出 |
|---|---:|---:|---:|---:|
| $S=100,\sigma=20\%$ | ≈1.868 / ≈1.868 | 1.85 / 1.85 | 368.70 | −322.60 |
| $S=103,\sigma=20\%$ | ≈3.761 / ≈0.761 | 3.74 / 0.74 | 446.70 | −244.60 |
| $S=103,\sigma=30\%$ | ≈4.591 / ≈1.591 | 4.57 / 1.57 | 612.70 | −78.60 |
| $S=100,\sigma=50\%$ | ≈4.667 / ≈4.667 | 4.65 / 4.65 | 928.70 | +237.40 |

第二行股价涨3%，但call与put合计的退出现金仍不足以覆盖691.30入场支出，组合亏244.60. 第四行现价不变，较高条件波动率使两腿合成退出现金升至928.70. 期间P&L由价格、剩余时间与IV共同决定.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P18-interim.svg" alt="同一入场成本下，第10天四种条件的两腿价值和净退出结果"></div><div class="svg-narrow pfh-native" data-static-figure="P18-interim-mobile.svg"><p class="pfh-figure-title">同一691.30执行入场成本，第10天退出结果</p><p class="pfh-figure-note">单位：美元. 条长比较绝对值. </p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">S100 / IV20%：退出现金</span><div class="pfh-cash-reading"><strong>368.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:39.7015%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S103 / IV20%：退出现金</span><div class="pfh-cash-reading"><strong>446.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:48.1007%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S103 / IV30%：退出现金</span><div class="pfh-cash-reading"><strong>612.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:65.9739%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S100 / IV50%：退出现金</span><div class="pfh-cash-reading"><strong>928.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">入场：两腿ask＋两费</span><div class="pfh-cash-reading"><strong>691.30</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:74.4366%"></span></div></li></ul><p class="pfh-figure-note">退出现金已扣每腿0.65；采用模型派生合成报价. </p></div><figcaption>同一入场成本下，第10天四种条件的两腿价值和净退出结果</figcaption></figure>

实验可分别改变call与put的波动率作敏感性分析；独立输入可能违反两腿平价，故不作为统一无套利价格曲面. 默认四种情景采用相同两侧波动率. 合成bid降至0时仅保留估值，退出价格未给定.

<a id="p18-short"></a>
## 卖方结构与资金

若把两腿反向卖出，匹配到期支付的符号确实反转，但资金条件没有因此反转. 卖100C与100P按bid3.41收682，扣建仓两费后净收680.70；账户现金12,680.70，同时负有两张期权的义务. 涨到很高时短call损失无界；跌到零时短put也可能要求10,000接股款.

期间IV上升会增加买回成本，担保要求依券商规则变化. 本实验给出短跨式负债及买回现金，账户可实施性还缺具体保证金时序；买回现金不足时列资金缺口.[^odd]

<details data-reading-branch="risk-premium"><summary>选读：历史期权收益与风险补偿</summary>

Dew-Becker与Giglio的2025年Chicago Fed工作论文比较长期合成期权与实际交易期权：实际交易样本拼接1987–1995年CME期权与1996–2022年SPX期权，收益按标的价格缩放. §4.1与§4.1.1显示实际交易期权的风险调整alpha在样本后段向零收敛，而方差风险溢价仍包含市场beta对应的补偿. 因此卖期权收入、系统风险补偿与alpha应分别记录. [^research]

</details>

<a id="p18-lab"></a>
## 波动实验与解析

<div data-experiment-slot="EXP-P18-VOLATILITY"></div>

到期比较跨式与宽跨式门槛；D10固定股价103，比较波动率20%与30%的两腿bid、费用和退出现金，再比较股价100、波动率50%的状态.

**解释题.** 股价涨3%，为什么跨式仍亏244.60？

**解析.** 入场支付691.30，退出收 $374+74-1.30=446.70$，亏244.60. 股价上涨提高call价值，剩余时间缩短及较低波动率同时影响两腿合计价值.

**迁移题.** 同样到期110，宽跨式更便宜，是否一定赚得更多？比较两结构的执行层收益.

**解析.** 跨式支付1,000、净赚308.70；宽跨式支付500、净赚195.70. 共同财富分别12,308.70与12,195.70，较低入场成本对应较远支付区域.

**资金题.** 短跨式条件市值亏损已大于12,000，但有人说“到期还没到，不必处理”. 这个结论缺了什么？

**解析.** 需检查期间担保品追加、买回资金及指派付款的截止条件. 条件负债和已列现金可计算，继续持仓的可行性还需账户规则.

[^oic]: OIC，[Long Straddle](https://www.optionseducation.org/strategies/all-strategies/long-straddle)与[Long Strangle](https://www.optionseducation.org/strategies/all-strategies/long-strangle-long-combination)，完整策略正文；MIT [Options lecture](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)，slide 13. 来源支持腿结构，数值为PF-GRID-01教学链.
[^bsm]: Leonid Kogan，MIT [Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)，Fall 2010，slides 16–21：模型市场、复制及公式. 此处仅使用无分红零利率特例.
[^odd]: OCC，[Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII、IX与Chapter X holder/writer及Other Risks item 1；到期后的股票、多腿独立性与卖方资金义务.
[^research]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，WP2025-17，2025-09-04；§3.1（数据与收益分母）、§4.1/4.1.1（滚动时期与风险调整）.
