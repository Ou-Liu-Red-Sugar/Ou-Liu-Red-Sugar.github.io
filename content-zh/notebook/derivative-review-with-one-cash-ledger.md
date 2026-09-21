{
  "title": "一次衍生品安排的完整复盘",
  "description": "衍生品复盘应按当时可见的信息重建目标、仓位、资金约束、动作和结果. 下面沿用P23的玉米采购账，把对冲方向、执行、融资条件与终点归因分别记录，并在同一事前约束下比较替代路径.",
  "layout": "entry",
  "notebookid": "zh-p24",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p24"
}

衍生品复盘应按当时可见的信息重建目标、仓位、资金约束、动作和结果. 下面沿用P23的玉米采购账，把对冲方向、执行、融资条件与终点归因分别记录，并在同一事前约束下比较替代路径.

<a id="p24-original"></a>
## 原始计划与信息时点

采购者预计未来购买15,000蒲式耳玉米并担心涨价，以5.75建立3张多头，对应15,000蒲式耳. 自有资金106,000，其中90,000的存款到采购日才可用，当前流动现金16,000. 每张初始/维持要求3,000/2,000，以及5.45、5.10、6.25的中途价格和显示价格平仓规则，均为本文教学路径参数；采购日当地现货价为6.20. [^grain24]

原计划包含价格方向与资金可行性两项判断：多头抵消采购价上涨，16,000流动现金负责维持头寸. 复盘保留初始采购量、资金和承诺额度，按这些已知条件评价后续动作.

D0记录采购批次、结束日、可接受基差、补款账户和停止条件. 采购取消或数量下降时，相应调整期货覆盖量.

<a id="p24-events"></a>
## 逐事件账户

按各时点已知信息、应补款和实际动作重建账户：

| 时点 | 此时刚知道什么 | VM | 应补/执行 | 期货余仓 | 可动自由现金 |
|---|---|---:|---|---:|---:|
| D0 | 采购量和初始资金 | 0 | 转入9,000初始保证金 | 3 | 7,000 |
| 第一次结算 | 期货5.45 | −4,500 | 实际补4,500 | 3 | 2,500 |
| 第二次结算 | 期货5.10 | −5,250 | 应补5,250但缺2,750；平仓返还3,750 | 0 | 6,250 |
| 采购日 | 期货6.25、现货6.20、存款解锁 | 0 | 总现金96,250中付93,000买货 | 0 | 3,250 |

第二次结算后持仓为零，因此最后一期VM为零. 90,000存款解锁及保证金转账改变资产位置，期货损益改变净财富，两类记录可据此勾稽.[^money24]

完整持有3张至终点的有效单价为5.7，未计融资成本；该路径要求跨过第二次追保. 比较此反事实时，将所需融资及成本一并加入.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P24-a.svg" alt="复盘信息集：每个时点只允许使用此前已知的信息，关闭之后不再领取未来VM. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">复盘沿当时信息推进</p><p class="pfh-figure-note">复用P23玉米采购路径</p><ol class="pfh-flow-steps"><li><strong>初始计划</strong><p>未来采购15,000蒲式耳；多3张</p><p>当前流动资金16,000，90,000尚受限</p></li><li><strong>第1压力点</strong><p>期货5.45；变动现金−4,500</p><p>补足后自由资金2,500</p></li><li><strong>第2压力点</strong><p>期货5.10；应补5,250</p><p>无授信，缺2,750 → 按教学价退出</p></li><li><strong>采购日</strong><p>现货6.20；支付93,000</p><p>期货已经关闭，不取得后段17,250反弹</p></li></ol></div></figure>

<a id="p24-attribution"></a>
## 结果归因

采购支出93,000减已实现期货损益−9,750，得到有效成本102,750；也等于自有资金106,000减剩余现金3,250.

原多头方向与采购涨价风险相配；价格先跌后涨，但现金缺口使持仓在5.1结束. 按给定成交价关闭后，有效成本高于不对冲的93,000. 资金缺口及处置价格共同解释9,750差额.

保持价格路径不变，预先承诺额度并借2,750使3张得以延续，期货损益由−9,750变为+7,500，另付利息约7.534. 两方案有效成本相差约17,242.466美元.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P24-b.svg" alt="同一采购的金额归因：终点现货价相同，仓位是否延续改变了实际期货结果. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">把方向、资金和终点拆开</p><p class="pfh-figure-note">实际教学关闭分支的有效采购成本</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">实物付款</span><div class="pfh-cash-reading"><strong>93,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:90.51094890510949%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货已实现损失</span><div class="pfh-cash-reading"><strong>9,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:9.48905109489051%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">有效采购成本</span><div class="pfh-cash-reading"><strong>102,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

<a id="p24-comparison"></a>
## 替代路径比较

四个方案都从106,000自有现金、同一采购量与同一采购日开始：3张无融资、2张、3张加承诺融资、不对冲. 2张方案成本88,000，留下三分之一数量未覆盖；承诺融资3张成本约85,507.534，增加信用依赖；不对冲成本93,000，保留共同价格风险.

替代方案按事前可接受的涨价风险、资金预算和融资条件比较. 当前路径给出逐方案结果，失败概率或平均成本另需路径分布. 外部新增自有资金按金额与时点计入资本和回报.

FSB关于抵押品的建议要求把融资承诺具体到资产资格、折扣、账户、币种及到达时点. [^fsb24] 因此融资分支应在事前写明可提款额度和操作条件；事后评价则使用当时可见证据与可行集合.

<div data-experiment-slot="EXP-P24-REVIEW"></div>

实验用时间视图重建事件账，用金额视图分解归因. 三张无额度、两张无融资与3,000额度三种分支分别改变存续能力、数量覆盖和信用依赖，比较时保持其余价格路径与采购条件一致.

<a id="p24-fx"></a>
## 欧元应收款对冲

欧元应收款变式：未来收到1M EUR，初始现汇1.1 USD/EUR，以8张CME EUR/USD期货空头覆盖. 合约每张125,000 EUR，到期实物交割，本例提前平仓. 设期货路径1.105、1.12、1.115、1.083，终点现汇1.08，初始与维持保证金总额32,000和24,000.[^eur24]

自有现金52,000，开仓费用16，转入保证金32,000，留下19,984. 第一次期货上涨0.015，空头VM−15,000，需要补15,000，自由现金降为4,984；后两次VM为+5,000、+32,000，不再补款. 累计VM22,000，双边费用32，净期货21,968.

收款后按1.08换得1,080,000，合并有效换汇所得1,101,968，折合约1.102美元/欧元；与最初期货1.105的差异来自终点现汇与期货−0.003的基差及交易费用. 总初始财富按应收初值1,100,000加现金52,000为1,152,000；最后1,153,968. 不对冲且保留相同现金，最后则为1,132,000.

该路径累计盈利前先需补15,000美元. 应收款延期或减少时，调整期货数量和退出日；补款安排同时核对欧元到账、换汇及美元转入时间.

<a id="p24-exercises"></a>
## 练习与解析

**解释题.** 3张玉米期货最终亏9,750，能否写“买入方向错了，应该卖出”？

采购价上涨是原始风险，多头方向与之对应. 本路径亏损来自先跌和被迫退出；改做空会在采购价上涨时增加损失. 复盘应将对冲方向与维持头寸的现金安排分别评价.

**迁移题.** 复盘者从106,000减去9,000初始保证金，再减9,750期货亏损和93,000采购，得到负5,750. 哪里重复了？

初始保证金转入与平仓返还已进入逐日账，再扣9,000会重复. 期末现金为 $106,000-9,750-93,000=3,250$.

[^grain24]: CME Group，[Grain and Oilseed Hedgers Guide](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch3采购与销售原例.
[^money24]: CME Group，[Money Calculations](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，pp1–3；账户转移与期货价格损益.
[^fsb24]: FSB，[Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，§3.3 Recommendations 6–8：抵押资格、运营能力和可用性.
[^eur24]: CME，[EUR/USD Futures，Chapter 261](https://www.cmegroup.com/rulebook/CME/III/250/261/261.pdf)，§26101–26102：合约单位、报价、到期与实物交割规则.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
