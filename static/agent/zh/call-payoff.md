# 看涨期权：到期收益与盈亏

一份执行价100、权利金8的期权，到期时可能值5，但整笔交易仍亏3。把五种结果算完，再看看一张到期图还没有告诉我们什么。

Entry: zh-call-payoff | Node:  | Language: zh | Editorial revision: 2026-09-20

## Teaching instructions
先问我执行价100与权利金8各代表什么。一次只问一个问题，从行权选择推导max(S_T−100,0)，再算90、100、105、108、120的收益和净盈亏。追问105时为何亏损却仍有正价差值得保留。让我预测调整权利金怎样移动曲线，再用到期前按12卖出区分当前报价与到期收益。最后计算等概率90/120下的平均收益10，并解释为什么平均价格105的收益只有5。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "runtime_reading_log": [],
  "required_readings": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry

## 买到有价值的权利以后，为什么还会亏？ [q-call-right]

企业资源支撑普通股的剩余权利。围绕同一个标的，还可以订立其他合约，让持有人面对价格变化时取得不同结果。看涨期权就是一个适合完整算清楚的例子：合约在到期时有价值，买入这份合约的交易却仍可能亏钱。先把这两件事分开，后面的图就容易读了。

我们买入一单位欧式看涨期权，对应一单位标的，执行价100，买入时支付权利金8，并持有至到期。先忽略费用、税收和资金成本，用现金等价方式衡量到期权利。这里的一单位就是一单位，现实合约若有数量乘数，还需要按具体合约换算。

合约给我们的选择是在到期时以100买入标的。执行价100是行使权利时的买入条件；权利金8是当初取得选择权的代价。它们发生在不同环节：买入时付8，获得权利；到期时根据标的价格决定是否使用这项权利。最后把两端合起来，才得到整笔交易的盈亏。[看涨期权的权利与合约要素](https://www.optionseducation.org/optionsoverview/options-basics)

## 先从“可以选择”推到收益公式 [def-call-payoff]

用 $S_T$ 表示到期标的价格。若 $S_T<100$，市场上直接买入更便宜，按100买入的权利没有正的到期价值，可以放弃。若 $S_T>100$，以100取得价值为 $S_T$ 的标的，价差就是 $S_T-100$。当 $S_T=100$ 时，价差恰好为零。

把两种情况合起来，一单位看涨期权的到期收益为
$$C_T=\max(S_T-100,0).$$
这里的收益是合约到期时的经济价值，通常称为 payoff。标的价值120时，到期收益是20：如果通过行权取得标的，还要支付执行价100，120中只有20是这项权利带来的价差。

然后计入当初支付的权利金，得到整笔交易的净盈亏：
$$\Pi_T=\max(S_T-100,0)-8.$$
在这条式子里减去8，是把初始支出算进交易；它不表示到期时再付一次8。到期收益可以因为放弃不利选择而保持非负，净盈亏却要承担买入权利的成本。

请先用自己的话复述这条计算链：到期标的价格，经过合约规则变成到期收益，再与最初支出合起来，得到交易盈亏。

## 把五种结果逐个算完，再动手改图 [q-premium]

当到期价格是90，按100买入没有优势，到期收益为0，净盈亏为−8。在100时价差也是0，结果仍是收益0、净亏8。两个标的价格不同，期权的到期结果却相同。

到期价格变成105时，收益为105−100=5，净盈亏为5−8=−3。现在期权已经“价内”，也有正的到期收益，只是还没收回最初的成本。到期108时收益8，正好覆盖权利金，盈亏为0；到期120时收益20，净赚12。

| 到期价格 | 到期收益 | 减去已付权利金 | 净盈亏 |
| --- | ---: | ---: | ---: |
| 90 | 0 | 8 | −8 |
| 100 | 0 | 8 | −8 |
| 105 | 5 | 8 | −3 |
| 108 | 8 | 8 | 0 |
| 120 | 20 | 8 | 12 |

表里的100和108是两个不同的门槛。100决定权利什么时候开始有正的到期价值；108决定这笔以8买入的交易什么时候覆盖成本。在正价差区域，解 $S_T-100-8=0$，就得到盈亏平衡点108。

先别看图，想一下：在105到期时，既然交易仍亏3，放弃会不会更好？放弃会使到期收益从5变成0，净亏损变成8。已经付出的8不会退回；到期时真正面对的选择，是取得5还是取得0。

现在给自己两分钟操作下面的图。先把到期价格停在105和108，分别核对两条线；再只把权利金从8改为12。预测哪条线会移动，找到新的盈亏平衡点，最后把参数恢复成100、8、120。

### Illustration — paths and results
横轴为到期标的价格，蓝绿色线为到期收益，橙色线为扣除权利金后的净盈亏。调节三个参数时同时更新折线、当前点和盈亏平衡点。默认 S_T=120 时到期收益20、净盈利12、盈亏平衡108。
Formula: payoff = max(S_T - K, 0); P&L = payoff - premium; breakeven = K + premium
Default: K=100，premium=8，S_T=120，quantity=1。
Conditions: 欧式多头看涨，持有至到期；按一单位标的计量，忽略费用、税收、融资及行权后持仓；不代表当前市场价格。

## 到期前报价12，和图上的20是什么关系？ [q-option-quote]

图的横轴是不同的到期标的价格，纵轴是对应的到期收益和整笔交易盈亏。收益线在100以下保持0，超过100后斜率为1；净盈亏线整体比它低8，在108穿过零点。执行价处的转折，就是这个收益函数非线性的地方。

横轴不是日期。把点移到120，表示“假如到期标的是120”，并不是说今天期权的市场报价已经等于20。到期前的市场报价还反映剩余期限内各种可能结果，以及波动率、利率等相关条件。

假设你以8买入以后，在到期前某个时点能以12卖出。如果卖出，交易盈亏为12−8=4，后续权利转给买方。出售所得来自交易对手，这与前面债券中途转手的道理相同。

报价12没有改写合约。执行价仍是100，到期函数仍是 $\max(S_T-100,0)$。以12新买入的人，持有到期时从收益中扣的是自己的成本12；你衡量从最初买入开始的盈亏，成本仍是8。相同合约可以对应不同持有人的不同盈亏曲线。

## 先算每个状态，再讨论平均 [q-option-boundaries]

先比较两段变化：标的从90涨到100，期权到期收益增加0；从110涨到120，收益增加10。相同的标的涨幅，对期权的影响取决于价格落在哪个区间。

再做一个给定概率的教学例子：到期价格以相同概率为90或120。平均标的价格为105；两种状态下期权收益分别为0和20，所以平均收益为10。若把平均价格105先塞进收益公式，只会得到5。两种算法为什么不同？因为从标的价格到期权收益的映射带着转折；必须先逐状态算收益，再按概率取平均。

在这组人为给定的概率下，平均到期净盈亏是10−8=2。10是该概率分布下的未来平均收益，8是今天已经支付的交易价格，二者仍有不同的时间和含义。平均结果也不会消除具体状态下亏8的可能。

下面的三个变式分别检查合约规则、买入成本和持有起点。先算，再展开答案。完成以后，就可以进入 [条件期望](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation/)：获得新信息时，哪些状态仍可能发生，各自的权重怎样改变？

### 保持执行价100、权利金8。先别拖滑块：到期价格105时，合约价值和交易净盈亏各是多少？
以100取得市场价值105的标的，权利价值为5。最初为这项权利付过8，交易净盈亏是5−8=−3。105已经超过执行价，但还没有达到108的盈亏平衡点。

### 执行价不变，将权利金从8改成12。哪条线移动？到期价格120时赚多少？
到期收益函数只由合约规则与终值决定，所以收益线不动。净盈亏线下移4，盈亏平衡从108移到112。在120到期时，收益20减去权利金12，净赚8。

### 你以8买入后，期权在到期前涨到12。若立即卖掉，你赚多少？若继续持有，原来的到期盈亏图要把8改成12吗？
立即以12卖出，已实现盈亏是12−8=4。若继续持有，衡量自最初买入以来的总盈亏仍减去实际支付的8；若比较“现在卖掉”和“继续持有”这两个选择，12则是当前放弃卖出的机会成本。这是两个不同起点的比较。

## Sources
- [Options Industry Council · Options basics](https://www.optionseducation.org/optionsoverview/options-basics): 来源摘要：期权给予持有人按约定条件买入或卖出的权利，权利金是取得该权利的价格。本词条的数值全部是教学假设。

## Content relations
```json
[
  {
    "from": "zh-call-payoff",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [条件期望：按已有信息分组平均](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation/)
