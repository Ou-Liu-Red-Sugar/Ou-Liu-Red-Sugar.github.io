# 看涨期权：到期收益与盈亏

用执行价100、权利金8的看涨期权，区分到期支付、交易盈亏、当前报价与持有的机会成本.

Entry: zh-call-payoff | Node:  | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
先实际读取随包参考文献的指定单元，记录版本和读取范围. 按高年级本科生的数学基础带读：让我区分执行价100与权利金8，推导到期支付，并比较105和120时的支付与盈亏. 用到期前以12卖出的情形区分原始成本和当前机会成本；最后以等概率90/120检验非线性支付的期望. 根据首次作答跳过已掌握步骤，作答后给出推导与反馈.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

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

## 看涨期权的权利与买入成本 [q-call-right]

看涨期权到期时可以具有正的合约价值，而买入这份期权的整笔交易仍可能亏损. 到期支付扣除取得权利的成本，才得到交易盈亏.

我们买入一单位欧式看涨期权，对应一单位标的，执行价100，买入时支付权利金8，并持有至到期. 先忽略费用、税收和资金成本，用现金等价方式衡量到期权利.

合约给我们的选择是在到期时以100买入标的. 执行价100是行使权利时的买入条件；权利金8是当初取得选择权的代价. 它们发生在不同环节：买入时付8，获得权利；到期时根据标的价格决定是否使用这项权利. 最后把两端合起来，才得到整笔交易的盈亏.[看涨期权的权利与合约要素](https://www.optionseducation.org/optionsoverview/options-basics)

## 到期支付与交易盈亏 [def-call-payoff]

用 $S_T$ 表示到期标的价格. 若 $S_T<100$，市场上直接买入更便宜，按100买入的权利没有正的到期价值，可以放弃. 若 $S_T>100$，以100取得价值为 $S_T$ 的标的，价差就是 $S_T-100$. 当 $S_T=100$ 时，价差恰好为零.

把两种情况合起来，一单位看涨期权的到期收益为
$$C_T=\max(S_T-100,0).$$
这里的收益是合约到期时的经济价值，通常称为 payoff. 标的价值120时，到期收益是20：如果通过行权取得标的，还要支付执行价100，120中只有20是这项权利带来的价差.

然后计入当初支付的权利金，得到整笔交易的净盈亏：
$$\Pi_T=\max(S_T-100,0)-8.$$
在这条式子里减去8，是把初始支出算进交易. 到期收益可以因为放弃不利选择而保持非负，净盈亏却要承担买入权利的成本.



## 执行价、盈亏平衡与沉没成本 [q-premium]

当到期价格是90，按100买入没有优势，到期收益为0，净盈亏为−8. 在100时价差也是0，结果仍是收益0、净亏8. 两个标的价格不同，期权的到期结果却相同.

到期价格变成105时，收益为105−100=5，净盈亏为5−8=−3. 现在期权已经“价内”，也有正的到期收益，只是还没收回最初的成本. 到期108时收益8，正好覆盖权利金，盈亏为0；到期120时收益20，净赚12.

| 到期价格 | 到期收益 | 减去已付权利金 | 净盈亏 |
| --- | ---: | ---: | ---: |
| 90 | 0 | 8 | −8 |
| 100 | 0 | 8 | −8 |
| 105 | 5 | 8 | −3 |
| 108 | 8 | 8 | 0 |
| 120 | 20 | 8 | 12 |

表里的100和108是两个不同的门槛. 100决定权利什么时候开始有正的到期价值；108决定这笔以8买入的交易什么时候覆盖成本. 在正价差区域，解 $S_T-100-8=0$，就得到盈亏平衡点108.

在105到期时，行使权利取得5的到期价值，整笔交易净亏3；若放弃，净亏损变成8. 已支付的8不会退回，因此到期决策比较的是取得5与取得0.



### Illustration — paths and results
横轴为到期标的价格，蓝绿色线为到期收益，橙色线为扣除权利金后的净盈亏. 调节三个参数时同时更新折线、当前点和盈亏平衡点. 默认 S_T=120 时到期收益20、净盈利12、盈亏平衡108.
Formula: payoff = max(S_T - K, 0); P&L = payoff - premium; breakeven = K + premium
Default: K=100，premium=8，S_T=120，quantity=1.
Conditions: 欧式多头看涨，持有至到期；按一单位标的计量，忽略费用、税收、融资及行权后持仓.

## 到期前报价与到期支付 [q-option-quote]

图的横轴是不同的到期标的价格，纵轴是对应的到期收益和整笔交易盈亏. 收益线在100以下保持0，超过100后斜率为1；净盈亏线整体比它低8，在108穿过零点. 执行价处的转折，就是这个收益函数非线性的地方.

横轴枚举到期标的价格. 点120对应“到期标的价值120时，期权支付20”这一条件结果. 到期前的市场报价还反映剩余期限内各种可能结果，以及波动率、利率等相关条件.

假设你以8买入以后，在到期前某个时点能以12卖出. 如果卖出，交易盈亏为12−8=4，后续权利转给买方.

报价12没有改写合约. 执行价仍是100，到期函数仍是 $\max(S_T-100,0)$. 以12新买入的人，持有到期时从收益中扣的是自己的成本12；你衡量从最初买入开始的盈亏，成本仍是8. 相同合约可以对应不同持有人的不同盈亏曲线.

## 非线性支付与状态平均 [q-option-boundaries]

先比较两段变化：标的从90涨到100，期权到期收益增加0；从110涨到120，收益增加10. 相同的标的涨幅，对期权的影响取决于价格落在哪个区间.

再做一个给定概率的教学例子：到期价格以相同概率为90或120. 平均标的价格为105；两种状态下期权收益分别为0和20，所以平均收益为10. 若把平均价格105先塞进收益公式，只会得到5. 期权支付是标的价格的非线性函数，函数的期望需对各状态的支付加权.

在这组人为给定的概率下，平均到期净盈亏是 $10-8=2$. 其中10是该概率分布下的未来平均收益，8是今天已经支付的交易价格，二者有不同的时间和含义. 平均结果也不会消除低价状态下亏8的可能.

获得新信息后，可用[条件期望](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation/)更新仍可能发生的状态及其权重.

### 保持执行价100、权利金8. 到期价格105时，合约价值和交易净盈亏各是多少？
以100取得市场价值105的标的，权利价值为5. 最初为这项权利付过8，交易净盈亏是 $5-8=-3$. 105已经超过执行价，但还没有达到108的盈亏平衡点.

### 执行价不变，将权利金从8改成12. 哪条线移动？到期价格120时赚多少？
到期收益函数只由合约规则与终值决定，所以收益线不动. 净盈亏线下移4，盈亏平衡从108移到112. 在120到期时，收益20减去权利金12，净赚8.

### 你以8买入后，期权在到期前涨到12. 若立即卖掉，你赚多少？若继续持有，原来的到期盈亏图要把8改成12吗？
立即以12卖出，已实现盈亏是12−8=4. 若继续持有，衡量自最初买入以来的总盈亏仍减去实际支付的8；若比较“现在卖掉”和“继续持有”这两个选择，12则是当前放弃卖出的机会成本. 这是两个不同起点的比较.

## Sources
- [Options Industry Council · Options basics](https://www.optionseducation.org/optionsoverview/options-basics): 来源摘要：期权给予持有人按约定条件买入或卖出的权利，权利金是取得该权利的价格. 本词条的数值全部是教学假设.

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
