{
  "title": "商品期货：从采购和销售出发",
  "description": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配.",
  "layout": "entry",
  "notebookid": "zh-p21",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p21"
}

同一份期货，采购者可能做多，生产者却可能做空. 两者并不矛盾，因为他们要保护的不是同一个现金流. 我们先把经营问题写出来，再推导对冲. 本篇完成后，你应能把期货赚亏放回实物采购或销售中，算出有效单价，也能指出数量、交期和当地基差留下的风险.

主例来自CME粮食与油籽自学指南，是交易所的公开教学案例，不是某家企业已经执行的交易. 金额为美元，数量为蒲式耳（bushel）. CBOT玉米标准期货每张5,000蒲式耳；交割等级以No.2 Yellow为基准，其他允许等级有规定差价. 合约数量相同，并不意味着当地不同品质、地点与交期的现货完全相同. [^grain][^corn]

<a id="p21-business"></a>
## 1. 谁在什么时候付钱？

饲料采购者计划将来买15,000蒲式耳玉米. 还没有购买时，他担心的是未来采购价上涨；可以先做多期货，让期货上涨时的收入抵消一部分更高的现货支出. 种植者准备出售20,000蒲式耳，则担心未来售价下降；可以先做空，让期货下跌时的收入抵消较低的销售收入.

这两个安排都不能脱离实物目标. 采购取消以后仍保留期货多头，它就不再与原经营付款相配；实际收成减少以后空头数量不变，也可能变成超量对冲. 所谓“对冲仓位”，是仓位与另一项敞口之间的关系，不是合约名称上的永久属性.

交易所把规格、交割规则和合约月份标准化. 企业却有自己的采购地点、品质、数量和付款日. 真实实施应选能覆盖风险期间的合约，并在不准备交割时及时平仓或换月；不能只挑一个看起来价格相近、但早于经营风险结束的月份. 期货的涨跌来自市场，并不会替企业保证交货品质或供应商履约.

<a id="p21-basis"></a>
## 2. 两个方向为什么得到同一个有效价格公式？

令 $S_T$ 为退出时的当地现货价，$F_T$ 为同一时点所用期货价，定义当地基差 $b_T=S_T-F_T$. 先假设实物数量与期货覆盖数量恰好相同，在采购或销售日同时退出期货，暂不计费用和资金利息.

采购者每单位实物付出 $S_T$，多头期货赚 $F_T-F_0$. 因此有效采购成本是

$$
S_T-(F_T-F_0)=F_0+b_T.
$$

销售者每单位收到 $S_T$，空头期货赚 $F_0-F_T$，因此有效销售收入也是

$$
S_T+(F_0-F_T)=F_0+b_T.
$$

形式相同，不意味着“对冲没有方向”. 采购把期货收入从支出中减去，销售把期货收入加到收入上；它们分别来自不同现金方向. 这个等式还说明，期初确定的是 $F_0$，最终仍留下 $b_T$. 期货与当地现货的共同价格风险被部分替换成基差风险，并非把任何价格都锁成一个固定数.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-a.svg" alt="采购和销售两条现金链：先根据经营付款或收款确定期货方向. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">从经营现金方向推出期货方向</p><p class="pfh-figure-note">数量、地点、品质和日期仍需分别匹配</p><ol class="pfh-flow-steps"><li><strong>采购：未来要付钱</strong><p>担心现货上涨 → 期货多头</p><p>实物支出 − 期货所得 = 有效采购成本</p></li><li><strong>销售：未来要收钱</strong><p>担心现货下跌 → 期货空头</p><p>实物收入 + 期货所得 = 有效销售收入</p></li><li><strong>共同剩余</strong><p>终点基差 b = S当地 − F</p><p>数量全配且同日退出时，有效单价 = F0 + b</p></li></ol></div></figure>

<a id="p21-procurement"></a>
## 3. 采购15,000蒲式耳：逐项对账

CME采购例中的期货起点为5.75美元，覆盖15,000蒲式耳需要3张多头. 若最终期货6.25、当地现货6.20，实物支付93,000，期货收入7,500，合并采购成本85,500，即5.70/蒲式耳. 这里的5.70低于起点期货5.75，来自终点基差−0.05，不是期货凭空提供了折扣.

| 退出期货价 | 当地现货价 | 终点基差 | 实物付款 | 多头结果 | 有效单价 |
|---:|---:|---:|---:|---:|---:|
| 6.25 | 6.20 | −0.05 | 93,000 | +7,500 | 5.70 |
| 5.45 | 5.45 | 0.00 | 81,750 | −4,500 | 5.75 |
| 6.03 | 6.10 | +0.07 | 91,500 | +4,200 | 5.82 |

第二行尤其值得停下来想：期货亏了4,500，但实物也更便宜. 若只把期货损失截出来看，会把经营对冲误读成失败的投机. 第三行则提醒我们：期货盈利并不保证整体采购最便宜，因为当地基差也可能走向不利一侧.

案例中另有5.80的远期采购报价. 若品质、地点、交期与信用条件可比，它给出另一种固定采购安排；可是三条期货情景没有概率，不能算个均值就宣布期货或远期更好. 远期也可能要求抵押、信用额度或带取消条款. 比较应回到合同，而不是只看标价.

<a id="p21-sales"></a>
## 4. 销售20,000蒲式耳：把生产成本放回来

销售例从5.70的期货起点卖出4张. 给定每蒲式耳生产成本5.10，原料/种植等成本总额102,000. 先把销售收入与期货结果合并，再减生产成本：

| 退出期货价 | 当地售价 | 基差 | 现货收入 | 空头结果 | 有效售价 | 减生产成本后利润 |
|---:|---:|---:|---:|---:|---:|---:|
| 5.20 | 5.05 | −0.15 | 101,000 | +10,000 | 5.55 | 9,000 |
| 5.90 | 5.70 | −0.20 | 114,000 | −4,000 | 5.50 | 8,000 |
| 5.37 | 5.10 | −0.27 | 102,000 | +6,600 | 5.43 | 6,600 |

原指南印刷p21右侧上涨情景把基差从−0.25到−0.20的变化写成0.10；按表中数字应为0.05. p22从−0.25到−0.27则是−0.02，不应称作gain. 本表从原始价格重新求差，不继承这些标签. [^grain]

上述利润仍没有扣其他经营费用、交易费或融资利息. 更重要的是，期货亏款可能先发生，销售收入后来才到. 对冲后的有效售价是终点合并结果，不是经营中途随时可提取的现金.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-b.svg" alt="六个原始价格状态的有效单价：剩余变化对应当地基差，不等于共同价格完全未对冲. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">有效单价的变化来自剩余基差</p><p class="pfh-figure-note">CME原始教学状态；横轴1/2/3并非时间</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>采购有效价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>销售有效价</span></li></ul><p class="pfh-axis-label">美元/蒲式耳</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">5.38</span><span style="top:75.0000000000001%">5.50</span><span style="top:50.0%">5.62</span><span style="top:24.999999999999904%">5.75</span><span style="top:0.0%">5.87</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0000000000002" x2="765" y2="285.0000000000002" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="164.99999999999977" x2="765" y2="164.99999999999977" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,187.78 430.00,162.97 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,262.22 430.00,287.03 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="187.7791563275434" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="162.96526054590583" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.22580645161293" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="262.22084367245657" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="287.03473945409417" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">1</span><span class="" style="left:50.0%">2</span><span class="last" style="left:100.0%">3</span></div></div></div></figure>

<a id="p21-lab"></a>
## 5. 数量改变时，把等式重新推一遍

<div data-experiment-slot="EXP-P21-CORN"></div>

令实际采购量为 $Q$，期货覆盖量为 $H=5,000N$. 采购成本的一般式为

$$
C=QS_T-H(F_T-F_0),\qquad
\frac{C}{Q}=S_T-\frac{H}{Q}(F_T-F_0).
$$

只有 $H=Q$ 时才简化为 $F_0+b_T$. 先在实验中复原默认采购第一行，再将实际采购量改为12,000而保留3张. 多出的3,000蒲式耳期货没有实物需求配对；上涨时可能让采购成本看起来更低，下跌时则可能增加额外亏损. 它并不是“更有效的同一对冲”，而是多了一段净方向敞口.

数量和执行日期都要持续维护. 采购延期意味着原合约可能提前结束风险覆盖；收成下降意味着原空头可能过量. 减仓、换月、重新谈固定价采购都有代价，应该在新信息出现时比较，而不是直到到期才解释结果.

<a id="p21-exercises"></a>
## 6. 自测与解析

**解释题.** 当地采购价6.20，期货从5.75涨到6.25，多3张. 有人说“总盈利7,500，所以采购风险消失”. 如何改写？

7,500只是期货单腿收入. 企业仍要付93,000买货，合并成本85,500，等于5.70/蒲式耳. 它仍承担数量、基差、品质、对手履约和中途资金风险. 恰当结论是“在该数量匹配且能持有到退出的情景中，期货收入抵消了部分现货涨价”，不是无风险.

**迁移题.** 实际只买12,000蒲式耳，价格仍为6.20，期货仍按3张持有至6.25. 有效单价是多少？若只持2张呢？

3张时成本 $12,000\times6.20-7,500=66,900$，每单位5.575；2张时期货收入5,000，成本69,400，单价5.783333. 前者更低只是这一次上涨恰好有利于过量多头，不能据此说3张在任何路径都更好. 若期货下跌，超出需求的多头会反向增加损失.

**完成标准.** 给你一个经营量和支付日，能否先判断现金方向，再列合约数量、基差、实际付款以及未被覆盖的部分？能做到这一点，才是在分析经营对冲，而不是竞猜期货涨跌.

[^grain]: CME Group，[Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch2印刷pp9–14、ch3印刷pp17–22，采购/销售完整教学单元；数例未计交易及融资成本.
[^corn]: CME/CBOT，[Corn Futures，Chapter 10](https://www.cmegroup.com/rulebook/CBOT/I/10.pdf)，§10100–10104：合约单位、等级、报价与交易/交割月份的核心规则.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

