{
  "title": "商品期货：从采购和销售出发",
  "description": "采购者以期货多头对冲采购价上涨，生产者以空头对冲售价下跌. 将期货损益与经营付款或收款合并，得到对冲后的有效单价.",
  "layout": "entry",
  "notebookid": "zh-p21",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p21"
}

采购者以期货多头对冲采购价上涨，生产者以空头对冲售价下跌. 将期货损益与经营付款或收款合并，得到对冲后的有效单价.

主例采用CME粮食与油籽指南的公开教学案例，金额为美元、数量为蒲式耳（bushel）. CBOT玉米标准期货每张5,000蒲式耳；No.2 Yellow为基准等级，其他允许等级按规则计价差. 合约数量匹配后，地点、品质和交期仍可能形成基差与交割错配. [^grain][^corn]

<a id="p21-business"></a>
## 经营现金流与多空方向

饲料采购者计划将来买15,000蒲式耳玉米. 还没有购买时，他担心的是未来采购价上涨；可以先做多期货，让期货上涨时的收入抵消一部分更高的现货支出. 种植者准备出售20,000蒲式耳，则担心未来售价下降；可以先做空，让期货下跌时的收入抵消较低的销售收入.

采购取消后保留的期货多头转为独立方向敞口；实际收成减少而空头数量不变，则可能超过待售数量.

企业按采购地点、品质、数量和付款日选择合约. 合约应覆盖风险期间；不准备进入交割时，在适用期限前平仓或换月. 现货品质与供应商履约仍由采购合同安排.

<a id="p21-basis"></a>
## 基差与有效单价

令 $S_T$ 为退出时的当地现货价，$F_T$ 为同一时点所用期货价，定义当地基差 $b_T=S_T-F_T$. 先假设实物数量与期货覆盖数量恰好相同，在采购或销售日同时退出期货，暂不计费用和资金利息.

采购者每单位实物付出 $S_T$，多头期货赚 $F_T-F_0$. 因此有效采购成本是

$$
S_T-(F_T-F_0)=F_0+b_T.
$$

销售者每单位收到 $S_T$，空头期货赚 $F_0-F_T$，因此有效销售收入也是

$$
S_T+(F_0-F_T)=F_0+b_T.
$$

采购从实物支出中扣期货所得，销售向实物收入加期货所得，因而得到同一形式. 起点确定 $F_0$，终点仍取决于当地基差 $b_T$；共同价格波动被转为基差风险.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-a.svg" alt="采购和销售两条现金链：先根据经营付款或收款确定期货方向. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">从经营现金方向推出期货方向</p><p class="pfh-figure-note">数量、地点、品质和日期仍需分别匹配</p><ol class="pfh-flow-steps"><li><strong>采购：未来要付钱</strong><p>担心现货上涨 → 期货多头</p><p>实物支出 − 期货所得 = 有效采购成本</p></li><li><strong>销售：未来要收钱</strong><p>担心现货下跌 → 期货空头</p><p>实物收入 + 期货所得 = 有效销售收入</p></li><li><strong>共同剩余</strong><p>终点基差 b = S当地 − F</p><p>数量全配且同日退出时，有效单价 = F0 + b</p></li></ol></div></figure>

<a id="p21-procurement"></a>
## 采购对冲

CME采购例的期货起点为5.75美元，15,000蒲式耳对应3张多头. 最终期货6.25、现货6.20时，实物支付93,000，期货收入7,500，合并成本85,500，即5.7/蒲式耳. 终点基差−0.05使有效单价比起点期货低0.05.

| 退出期货价 | 当地现货价 | 终点基差 | 实物付款 | 多头结果 | 有效单价 |
|---:|---:|---:|---:|---:|---:|
| 6.25 | 6.2 | −0.05 | 93,000 | +7,500 | 5.7 |
| 5.45 | 5.45 | 0 | 81,750 | −4,500 | 5.75 |
| 6.03 | 6.1 | +0.07 | 91,500 | +4,200 | 5.82 |

第二行的期货亏损4,500伴随较低采购价，有效单价为5.75. 第三行期货盈利4,200，但终点基差升至+0.07，有效单价为5.82.

案例另有5.8的远期采购报价. 在品质、地点、交期和信用条件相同时，可比较固定采购价与各基差情景下的有效价格，并计入抵押、额度和取消条款. 三条情景未设概率，当前只能逐情景比较.

<a id="p21-sales"></a>
## 销售对冲

销售例从5.70的期货起点卖出4张. 给定每蒲式耳生产成本5.10，原料/种植等成本总额102,000. 先把销售收入与期货结果合并，再减生产成本：

| 退出期货价 | 当地售价 | 基差 | 现货收入 | 空头结果 | 有效售价 | 减生产成本后利润 |
|---:|---:|---:|---:|---:|---:|---:|
| 5.2 | 5.05 | −0.15 | 101,000 | +10,000 | 5.55 | 9,000 |
| 5.9 | 5.7 | −0.2 | 114,000 | −4,000 | 5.5 | 8,000 |
| 5.37 | 5.1 | −0.27 | 102,000 | +6,600 | 5.43 | 6,600 |

原指南印刷p21右侧上涨情景把基差从−0.25到−0.20的变化写成0.10；按表中价格重算应为+0.05. p22从−0.25到−0.27为−0.02，即基差弱化. 本文按原始现货与期货价格重算这两处变化. [^grain]

表中利润未扣其他经营费用、交易费和融资利息. 期货补款若早于销售回款，还需安排中途资金.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-b.svg" alt="六个原始价格状态的有效单价：剩余变化对应当地基差，不等于共同价格完全未对冲. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">有效单价的变化来自剩余基差</p><p class="pfh-figure-note">CME原始教学状态；横轴为三个情景</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>采购有效价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>销售有效价</span></li></ul><p class="pfh-axis-label">美元/蒲式耳</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">5.38</span><span style="top:75.0000000000001%">5.5</span><span style="top:50.0%">5.62</span><span style="top:24.999999999999904%">5.75</span><span style="top:0.0%">5.87</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0000000000002" x2="765" y2="285.0000000000002" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="164.99999999999977" x2="765" y2="164.99999999999977" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,187.78 430.00,162.97 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,262.22 430.00,287.03 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="187.7791563275434" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="162.96526054590583" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.22580645161293" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="262.22084367245657" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="287.03473945409417" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">1</span><span class="" style="left:50.0%">2</span><span class="last" style="left:100.0%">3</span></div></div></div></figure>

<a id="p21-lab"></a>
## 数量错配

<div data-experiment-slot="EXP-P21-CORN"></div>

令实际采购量为 $Q$，期货覆盖量为 $H=5,000N$. 采购成本的一般式为

$$
C=QS_T-H(F_T-F_0),\qquad
\frac{C}{Q}=S_T-\frac{H}{Q}(F_T-F_0).
$$

$H=Q$ 时简化为 $F_0+b_T$. 实际采购降至12,000而保留3张时，多出的3,000蒲式耳为方向敞口：期货上涨降低成本，下跌增加成本.

采购延期会使原合约过早结束覆盖，收成下降会使空头过量. 根据新数量与日期比较减仓、换月和固定价采购的成本.

<a id="p21-exercises"></a>
## 练习与解析

**解释题.** 当地采购价6.2，期货从5.75涨到6.25，多3张. 企业采购15,000蒲式耳的有效成本是多少？

现货付款93,000减期货收入7,500，合并成本85,500，即5.7/蒲式耳.

**迁移题.** 实际只买12,000蒲式耳，价格仍为6.20，期货仍按3张持有至6.25. 有效单价是多少？若只持2张呢？

3张时成本 $12,000\times6.20-7,500=66,900$，每单位5.575；2张时期货收入5,000，成本69,400，单价约5.783. 前者在这条上涨路径中受益于过量多头；若期货下跌，超出需求的多头会反向增加损失.

[^grain]: CME Group，[Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch2印刷pp9–14、ch3印刷pp17–22，采购/销售完整教学单元.
[^corn]: CME/CBOT，[Corn Futures，Chapter 10](https://www.cmegroup.com/rulebook/CBOT/I/10.pdf)，§10100–10104：合约单位、等级、报价与交易/交割月份的核心规则.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
