{
  "title": "垂直价差：到期支付与期间资金",
  "description": "重建借方/贷方同到期支付、状态相关theta和行权后股票资金压力.",
  "layout": "entry",
  "notebookid": "zh-p17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p17"
}

垂直价差用同标的、同到期、不同执行价的两张期权，把方向判断限制在一个价格区间. 同一到期损益可以由debit或credit结构表达，但建仓现金、担保要求与实物交割的时点不同.

<a id="p17-range"></a>
## 价格区间与两腿结构

假设关注XYZ未来30天从100到105这一段上涨，并不要求105以上继续增加收益. 买100 call可获得100以上的上涨，卖105 call则让出105以上部分. 两腿必须匹配标的、单位、期限与适用结算方式，才得到下文的有限宽度结论. OIC与MIT的组合图都用这个逐腿相减方式解释call vertical. [^vertical]

PF-GRID-01中，100C mid 3.43、105C mid 1.57，每组100单位净付186美元. 从12,000现金起点出发，D1剩11,814，同时持有long 100C与short 105C；两腿净mid价值186，因此未计摩擦的即时净财富仍为12,000.

<a id="p17-payoff"></a>
## 到期支付与损益

定义每股call spread到期支付

$$
h(s)=(s-100)^+-(s-105)^+.
$$

$s\le100$时两项为零；$100<s<105$时只剩$s-100$；$s\ge105$时相减为5. 于是$0\le h(s)\le5$. 整份mid组合损益为$100h(s)-186$：最大损失186，最大盈利314，盈亏平衡101.86.

合成执行层买100C按3.45，卖105C按1.55，两笔费用共1.30，净支出

$$
100(3.45-1.55)+1.30=191.30.
$$

其匹配到期损失上限191.30，盈利上限308.70，盈亏平衡101.913. 默认这里尚未增加行权、指派或最终股票平仓费用；一旦采用相应退出方式，需要另列这些现金.

同一个上涨区间也可以用put表达：买100P、卖105P. mid净收$100(6.57-3.43)=314$，到期支付则是

$$
g(s)=(100-s)^+-(105-s)^+.
$$

逐区间展开得 $g(s)=h(s)-5$，put credit损益 $314+100g(s)=100h(s)-186$，与call debit相同. call结构先付186、到期最多收500；put结构先收314、到期最多付500.

| 到期股价 | call debit mid损益 | put credit mid损益 | 两者执行层损益 |
|---:|---:|---:|---:|
| 95 | −186 | −186 | −191.30 |
| 100 | −186 | −186 | −191.30 |
| 102 | +14 | +14 | +8.70 |
| 105 | +314 | +314 | +308.70 |
| 110 | +314 | +314 | +308.70 |

在这条零利率、零分红且点差费用相同的教学网格中，两者执行层损益也相同. put净收308.70，最大支付500，所收现金可能被担保要求占用.[^margin]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P17-payoff.svg" alt="两种入场现金方向，相同的匹配到期损益"></div><div class="svg-narrow pfh-native" data-static-figure="P17-payoff-mobile.svg"><p class="pfh-figure-title">同到期区间：debit与credit是两种现金时间</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. call debit</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. put credit</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. bear put</span></li></ul><p class="pfh-axis-label">纵轴：价差损益（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100%">-237</span><span style="top:75%">-90</span><span style="top:50%">56</span><span style="top:25%">203</span><span style="top:0%">350</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,319.34 59.50,319.34 64.00,319.34 68.50,319.34 73.00,319.34 77.50,319.34 82.00,319.34 86.50,319.34 91.00,319.34 95.50,319.34 100.00,319.34 104.50,319.34 109.00,319.34 113.50,319.34 118.00,319.34 122.50,319.34 127.00,319.34 131.50,319.34 136.00,319.34 140.50,319.34 145.00,319.34 149.50,319.34 154.00,319.34 158.50,319.34 163.00,319.34 167.50,319.34 172.00,319.34 176.50,319.34 181.00,319.34 185.50,319.34 190.00,319.34 194.50,319.34 199.00,319.34 203.50,319.34 208.00,319.34 212.50,319.34 217.00,319.34 221.50,319.34 226.00,319.34 230.50,319.34 235.00,319.34 239.50,319.34 244.00,319.34 248.50,319.34 253.00,319.34 257.50,319.34 262.00,319.34 266.50,319.34 271.00,319.34 275.50,319.34 280.00,319.34 284.50,258.03 289.00,196.71 293.50,166.05 298.00,166.05 302.50,166.05 307.00,166.05 311.50,166.05 316.00,166.05 320.50,166.05 325.00,166.05 329.50,166.05 334.00,166.05 338.50,166.05 343.00,166.05 347.50,166.05 352.00,166.05 356.50,166.05 361.00,166.05 365.50,166.05 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,319.34 59.50,319.34 64.00,319.34 68.50,319.34 73.00,319.34 77.50,319.34 82.00,319.34 86.50,319.34 91.00,319.34 95.50,319.34 100.00,319.34 104.50,319.34 109.00,319.34 113.50,319.34 118.00,319.34 122.50,319.34 127.00,319.34 131.50,319.34 136.00,319.34 140.50,319.34 145.00,319.34 149.50,319.34 154.00,319.34 158.50,319.34 163.00,319.34 167.50,319.34 172.00,319.34 176.50,319.34 181.00,319.34 185.50,319.34 190.00,319.34 194.50,319.34 199.00,319.34 203.50,319.34 208.00,319.34 212.50,319.34 217.00,319.34 221.50,319.34 226.00,319.34 230.50,319.34 235.00,319.34 239.50,319.34 244.00,319.34 248.50,319.34 253.00,319.34 257.50,319.34 262.00,319.34 266.50,319.34 271.00,319.34 275.50,319.34 280.00,319.34 284.50,258.03 289.00,196.71 293.50,166.05 298.00,166.05 302.50,166.05 307.00,166.05 311.50,166.05 316.00,166.05 320.50,166.05 325.00,166.05 329.50,166.05 334.00,166.05 338.50,166.05 343.00,166.05 347.50,166.05 352.00,166.05 356.50,166.05 361.00,166.05 365.50,166.05 370.00,166.05" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,170.66 59.50,170.66 64.00,170.66 68.50,170.66 73.00,170.66 77.50,170.66 82.00,170.66 86.50,170.66 91.00,170.66 95.50,170.66 100.00,170.66 104.50,170.66 109.00,170.66 113.50,170.66 118.00,170.66 122.50,170.66 127.00,170.66 131.50,170.66 136.00,170.66 140.50,170.66 145.00,170.66 149.50,170.66 154.00,170.66 158.50,170.66 163.00,170.66 167.50,170.66 172.00,170.66 176.50,170.66 181.00,170.66 185.50,170.66 190.00,170.66 194.50,170.66 199.00,170.66 203.50,170.66 208.00,170.66 212.50,170.66 217.00,170.66 221.50,170.66 226.00,170.66 230.50,170.66 235.00,170.66 239.50,170.66 244.00,170.66 248.50,170.66 253.00,170.66 257.50,170.66 262.00,170.66 266.50,170.66 271.00,201.31 275.50,262.63 280.00,323.95 284.50,323.95 289.00,323.95 293.50,323.95 298.00,323.95 302.50,323.95 307.00,323.95 311.50,323.95 316.00,323.95 320.50,323.95 325.00,323.95 329.50,323.95 334.00,323.95 338.50,323.95 343.00,323.95 347.50,323.95 352.00,323.95 356.50,323.95 361.00,323.95 365.50,323.95 370.00,323.95" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01教学网格 · mid结构</p></div><figcaption>两种入场现金方向，相同的匹配到期损益</figcaption></figure>

<a id="p17-theta"></a>
## 状态与时间敏感性

期间价差价值为两腿市值之差，一天变化为 $\Delta C_{100}-\Delta C_{105}$.

在本链的零利率、零分红BSM条件中，仅把剩余30天改为29天、保持现价与30%波动率不变，100/105 call spread每组价值变化如下：

| 标的现价 | 今天净期权价值 | 一天后净期权价值 | 一天变化 |
|---:|---:|---:|---:|
| 95 | 90.297 | 88.501 | −1.796 |
| 103 | 252.896 | 253.231 | +0.335 |
| 110 | 389.512 | 391.612 | +2.100 |

在股价与IV固定的条件下，一天时间流逝对应的组合价值变化从−1.796到+2.100，说明vertical的theta随状态而变. 实际隔天P&L还会叠加股价、IV和其他输入变化；时间敏感性应按两腿逐项相减. [^bsm]

<a id="p17-delivery"></a>
## 实物交割与剩余持仓

给定D30收盘104.99、long 100C行权、short 105C未被指派这一条路径：长call带来支付10,000并取得100股的结果，短call没有产生对应卖股交付.

另设初始1,000现金的资金例. mid建仓后814，长call交割需10,000，缺9,186，因而在给定资源下无法完成交割.[^odd]

12,000现金例中，建仓后11,814，交割后现金1,814及100股，按104.99计财富12,313. 若继续持股至80，财富降至9,814，较起点损失2,186；到期后的损益由新股票头寸产生.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P17-funding.svg" alt="小钱包在交割前停止，大钱包交割后成为股票持仓"></div><div class="svg-narrow pfh-native" data-static-figure="P17-funding-mobile.svg"><p class="pfh-figure-title">到期104.99：long100行权，short105不指派</p><ol class="pfh-flow-steps"><li><strong>小钱包1,000</strong><p>mid付186 → 余814</p><p>行权总付款10,000</p><p>缺口9,186</p><p>停止“已完成交割”</p></li><li><strong>共同钱包12,000</strong><p>mid付186 → 余11,814</p><p>付款10,000 → 余1,814</p><p>收到100股，按104.99</p><p>总财富12,313</p></li><li><strong>若股票随后到80</strong><p>现金仍1,814</p><p>股票价值8,000</p><p>财富9,814</p><p>这是新股仓的损失</p></li></ol><p class="pfh-figure-note">小debit是期权成本，不是实物交割付款能力. </p></div><figcaption>小钱包在交割前停止，大钱包交割后成为股票持仓</figcaption></figure>

短call提前指派可产生空股和仍存续的长call，需要分别处理借股、通知与资金. 同到期欧式现金结算价差按现金差额交付，无提前实物交割.

<details data-reading-branch="cash-index"><summary>结算对照：SPXW与现金账户价差条件</summary>

SPXW采用欧式行权、PM结算价、每点100美元及下一营业日现金交付. Cboe现金账户价差规则适用于其指定的同到期、欧式、现金结算组合.[^spx]

</details>

<a id="p17-lab"></a>
## 价差实验与解析

<div data-experiment-slot="EXP-P17-VERTICAL"></div>

比较call debit与put credit的D1现金及到期曲线，再计算三个价格状态的一天时间敏感性. 交割分支分别核1,000与12,000现金例的付款和剩余持仓.

**解释题.** put credit先收314，是否意味着不需要自有资金？

**解析.** 收314同时产生期权负债，组合到期最多支付500，期间还需满足对应担保与结算要求.

**迁移题.** 把方向改为看跌：买100P、卖95P，mid分别3.43和1.42. 求匹配到期损失、盈利上限和盈亏平衡.

**解析.** 净付201，支付是$100[(100-s)^+-(95-s)^+]$，介于0与500. 损失上限201，盈利上限299；在95到100之间令$100(100-s)=201$，得$s=97.99$. 执行层买3.45、卖1.40，加1.30费用，净付206.30，上限盈利293.70. 方向改变了有效区间，没有改变逐腿现金方法.

**生命周期题.** 小钱包例在104.99标记有313盈利，能否用“已经盈利”替代9,186资金缺口？

**解析.** 长call内在价值499，实物交割总付款10,000，现有现金814. 若改为卖期权或配套卖股，需要可成交价格及能按期净结算的安排.

[^vertical]: OIC，[Bull Call Spread](https://www.optionseducation.org/strategies/all-strategies/bull-call-spread-debit-call-spread) 与 [Bull Put Spread](https://www.optionseducation.org/strategies/all-strategies/bull-put-spread-credit-put-spread)，完整策略正文；MIT [Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf) slide 12.
[^margin]: Cboe，[Strategy-based Margin](https://www.cboe.com/markets/us/options/margin/strategy-based-margin)，主文及same-expiry European cash-settled spreads单元，
[^bsm]: Leonid Kogan，MIT [Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)，Fall 2010，slides 16–21：无分红、固定利率/波动率模型、复制与公式. 上表为本篇教学模型计算.
[^odd]: OCC，[ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII与Other Risks item 1印刷67–68页；一腿结束不自动关闭另一腿.
[^spx]: Cboe，[SPX Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，©2026，第2页区分传统SPX的AM与SPXW的PM现金结算.
