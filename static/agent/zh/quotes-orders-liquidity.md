# 报价、订单与流动性

用给定报价深度重建成交、现金与成本，并正确保留未成交或数据不足的部分.

Entry: zh-m03 | Node: M03 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M03，版本2026-09-21-review-v2. 先用工具读取上述原文与本篇输入；
列明实际范围、版本和支持的订单含义. 确认SIM-MA-BOOK-v1是合成数据，
买盘只有99.98的200股. 不得接入或猜测用户账户，不把模型输出称为历史成交.

先让我独立算350股买入的分笔、均价、费用和现金；
若错，把问题定位到方向、有限深度、单位或基准，不用一串四则运算小题代替.
随后只改变限价为100.05，要求我同时交代未完成的50股，而非仅报告更低金额.
再让我重建20.50的成本分解，检查是否重复加价差、分母是否用已成交数量.
迁移题使用卖350股：合格回答必须主动停在200股的可计算范围，
不能给全部350股均价. 最后切换SPX报价单位，检查100倍乘数和费用.
材料齐全后才解释具体规则；提示先给原文/表格定位，完整答案用本篇解析.
理解标准是正确完成已知部分，并准确界定未知部分，而不是给出最多的小数.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-m03",
  "node_id": "M03",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "full_entry",
  "body_source": "body_markdown",
  "learning_task": "用给定报价深度重建成交、现金与成本，并正确保留未成交或数据不足的部分.",
  "prompt": "你在教M03，版本2026-09-21-review-v2. 先用工具读取上述原文与本篇输入；\n列明实际范围、版本和支持的订单含义. 确认SIM-MA-BOOK-v1是合成数据，\n买盘只有99.98的200股. 不得接入或猜测用户账户，不把模型输出称为历史成交.\n\n先让我独立算350股买入的分笔、均价、费用和现金；\n若错，把问题定位到方向、有限深度、单位或基准，不用一串四则运算小题代替.\n随后只改变限价为100.05，要求我同时交代未完成的50股，而非仅报告更低金额.\n再让我重建20.50的成本分解，检查是否重复加价差、分母是否用已成交数量.\n迁移题使用卖350股：合格回答必须主动停在200股的可计算范围，\n不能给全部350股均价. 最后切换SPX报价单位，检查100倍乘数和费用.\n材料齐全后才解释具体规则；提示先给原文/表格定位，完整答案用本篇解析.\n理解标准是正确完成已知部分，并准确界定未知部分，而不是给出最多的小数.",
  "required_readings": [
    {
      "source_id": "MA-ORDERS",
      "title": "Understanding Order Types — Investor Bulletin",
      "authors": [
        "SEC Office of Investor Education and Advocacy"
      ],
      "version": "初发2017-07-12；页面明确更新2026-08-18",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Market Order、Limit Order、Day、IOC 完整单元",
        "scope": "订单语义、分档执行、限价与成交保证的区别；投资者教学而非规则正文；各券商细则仍可能不同.",
        "purpose": "价格/有效期约束与执行结果"
      },
      "supports": "订单语义、分档执行、限价与成交保证的区别；投资者教学而非规则正文；各券商细则仍可能不同.",
      "limits": "订单语义、分档执行、限价与成交保证的区别；投资者教学而非规则正文；各券商细则仍可能不同.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-EXEC",
      "title": "Executing an Order",
      "authors": [
        "SEC Investor.gov"
      ],
      "version": "现行教学网页；取得2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "主体全文",
        "scope": "券商路由和执行路径；非同一时点真实盘口.",
        "purpose": "报价与路由的不同执行路径"
      },
      "supports": "券商路由和执行路径；非同一时点真实盘口.",
      "limits": "券商路由和执行路径；非同一时点真实盘口.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-FINRA5310",
      "title": "FINRA Rule 5310 — Best Execution and Interpositioning",
      "authors": [
        "FINRA"
      ],
      "version": "2026-09-21所见规则；页尾列示最近修订生效2014-05-09，不以取得日代替修订日",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5310",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "(a)(1) 与 Supplementary Material .09 完整条款",
        "scope": "合理勤勉及执行质量的价格、数量、速度、可能性、费用维度；不保证每笔按显示价成交.",
        "purpose": "多维执行质量"
      },
      "supports": "合理勤勉及执行质量的价格、数量、速度、可能性、费用维度；不保证每笔按显示价成交.",
      "limits": "合理勤勉及执行质量的价格、数量、速度、可能性、费用维度；不保证每笔按显示价成交.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-OCC",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
      ],
      "version": "June 2024；官网入口于2026-09-21核得该版本",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Ch.II 交易单位完整小节及 Ch.IX 印刷 pp.58–59",
        "scope": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
        "purpose": "交易单位和费用"
      },
      "supports": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
      "limits": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SPX",
      "title": "SPX Options Fact Sheet",
      "authors": [
        "Cboe"
      ],
      "version": "两页事实表，页脚©2026；取得2026-09-21；版权年不当作每条规则的生效日",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "两页事实表全文",
        "scope": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
        "purpose": "合约乘数"
      },
      "supports": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
      "limits": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "local_required_units": [
    {
      "locator": "本篇正文与交互静态输入、算法、边界及默认验算表",
      "scope": "仅所列教学数据和规则；不补不存在的盘口或账户流水",
      "purpose": "重建练习与交互的计算"
    }
  ],
  "shared_inputs": {
    "version": "2026-09-21-review-v2",
    "identity_rule": "observed/source-backed, official_example, and teaching_assumption/synthetic are never relabelled as each other",
    "cases": {
      "SIM-MA-BOOK-v1": {
        "identity": "synthetic",
        "bid_levels": [
          [
            "99.98",
            200
          ]
        ],
        "ask_levels": [
          [
            "100.02",
            100
          ],
          [
            "100.05",
            200
          ],
          [
            "100.10",
            300
          ]
        ],
        "fee_per_share_usd": "0.01",
        "depth_scope": "visible_excerpt",
        "timestamp": "teaching t0"
      }
    }
  },
  "reading_scope_notes": "本交付是交互规格与静态等价，不是已经连接行情或经浏览器执行过的交易页面."
}
```

## Supplied entry
屏幕上的价格不是一份不问数量、永远有效的出售承诺. 要从报价走到自己账户里的成交，至少还要问：这是买方报价还是卖方报价，能做多少，自己的指令允许什么，轮到自己时这些报价是否还在？

本篇把这些问题放进同一个可复算的教学实验. 盘口数字、数量和费用都由题目明确给定；我们沿交易过程核对每一笔数量、价格和费用.

<span id="m03-quote-fields"></span>
## 一、四个“价格”，先不要合并

我们把成交理解为买卖双方达成的一笔执行结果；订单则是投资者交给券商等执行渠道的一项指令. 券商负责接收或路由，不必就是最终交易对手. [^EXEC]

<strong>买价（bid）</strong>是买方愿意买入的报价，<strong>卖价（ask/offer）</strong>是卖方愿意卖出的报价. 自己急于买入时，需要找愿意卖的人；急于卖出时，需要找愿意买的人. 因此，买入通常观察卖侧可得报价，卖出观察买侧，不能看到两个数就挑更有利的那个直接相乘.

还有两个看起来很像、实际职责不同的数字：**最后成交价**描述已经发生的交易；**订单限价**规定自己愿意接受的价格边界. 最后一笔发生在什么时候、成交了多少，都不自动保证现在的订单也能以同价成交. SEC现行订单教学特别说明了这一点. [^ORDERS]

| 字段 | 它回答的问题 | 不能单独回答的问题 |
|---|---|---|
| Bid / Ask | 当前所见买/卖报价 | 我的全部数量是否都能在这里成交 |
| 报价数量 | 这个价格所见的数量 | 其他场所或稍后是否有更多数量 |
| Last trade | 最近那笔已发生交易的价格 | 本次成交价 |
| Limit | 我的价格约束 | 会不会成交、什么时候成交 |

真实快照还必须保留证券或合约身份、时间和时区、是否延迟、报价范围、最后成交的独立时间，以及合约乘数. 本篇实验的时间只叫“教学时点t0”，不能给它补上一个真实交易所时间戳.

<span id="m03-book-experiment"></span>
## 二、用一张冻结盘口，把350股买入算完

这是`SIM-MA-BOOK-v1`. 价格单位为美元/股；只提供一档买盘、三档卖盘. 该表不是历史观测.

| 侧别与档位 | 价格 | 数量 |
|---|---:|---:|
| 买一 | 99.98 | 200股 |
| 卖一 | 100.02 | 100股 |
| 卖二 | 100.05 | 200股 |
| 卖三 | 100.10 | 300股 |

我们设定买入350股，在这一轮计算中，所列报价不撤回，也没有别人的订单先把这些数量拿走；只计算表内可见深度，不为表外数量捏造价格. 每成交一股另收0.01美元费用，这同样是教学设定.

先拿卖一的100股，付$100\times100.02=10,002$美元；还差250股，于是拿卖二200股，付20,010美元；最后50股从卖三取得，付5,005美元. 总成交金额为

$$
G=10{,}002+20{,}010+5{,}005=35{,}017\text{ 美元}.
$$

成交均价不是简单平均三个报价，而是按实际数量加权：$G/350=100.048571\ldots$美元/股. 费用为$350\times0.01=3.50$美元，总现金支出35,020.50美元.

| 执行顺序 | 成交数量 | 成交价格 | 金额 | 尚需数量 |
|---|---:|---:|---:|---:|
| 卖一 | 100 | 100.02 | 10,002 | 250 |
| 卖二 | 200 | 100.05 | 20,010 | 50 |
| 卖三 | 50 | 100.10 | 5,005 | 0 |
| 合计 | 350 | 均价100.048571… | 35,017 | 0 |

这里的“流动性”已经不只是价差窄不窄. 100股和350股面对相同的最优报价，却需要不同的平均成交价. 报价能够承接的数量，是问题的一部分. 反过来，仅从这张静态表还不能估计真实市场会如何撤单、补充报价或回应自己的交易；本例没有计算这些动态反应.

<div data-experiment-slot="INT-M03-BOOK"></div>

<span id="m03-limit-order"></span>
## 三、改成限价单：限制了价格，没有创造数量

**市价单**优先寻求当前可得执行，但不保证成交价格；**买入限价单**只允许在限价或更低价格成交，卖出限价单则只允许限价或更高价格. 限价并不保证成交. [^ORDERS]

现在仍买350股，但设限价100.05. 前两档满足条件，成交100＋200＝300股；卖三100.10超出限制，所以剩余50股不能按本轮规则从那里取得.

| 项目 | 市价买350股 | 限价100.05买350股 |
|---|---:|---:|
| 本模型中即时成交 | 350股 | 300股 |
| 成交金额 | 35,017 | 30,012 |
| 费用 | 3.50 | 3.00 |
| 现金支出 | 35,020.50 | 30,015.00 |
| 成交均价，不含费用 | 100.048571… | 100.04 |
| 剩余数量 | 0 | 50股 |

于是两笔订单不能仅凭“限价单现金支出更少”比较优劣：它少买了50股. 若目标必须取得350股，后续是否能买到、需要多久、价格怎样变化，都是尚未完成的任务.

剩余50股怎么办，还取决于有效期. Day限价单可以在当日继续等待，未成交部分一般在该交易日结束时失效；IOC要求立即执行，不能立即完成的部分取消. 券商具体支持及细则需要单独确认. [^ORDERS] 本例选择Day时，只记录“本轮未成交、待后续”，不预测稍后的成交.

这也说明“市场碰到了我的限价”为什么不等于“我必然成交”. 即使价格条件满足，可得数量、排在前面的订单、报价是否仍在以及执行路径，也会改变结果. 把限价写进订单，只表达自己的边界，没有命令其他人必须提供足够数量.

<span id="m03-cost-decomposition"></span>
## 四、成本要先选基准，不能把价差重复加一次

现在我们评价已算出的350股买入. 取**下单前这张盘口的中间价**为基准：

$m_0=(99.98+100.02)/2=100.00$美元/股.

若350股都按这个基准取得，金额为35,000美元；实际模型现金支出为35,020.50. 因此，相对该基准的成本是20.50美元. 它可以分成三部分：

$$
\begin{aligned}
C_{\text{基准}}&=G+fQ-m_0Q\\
&=(a_1-m_0)Q
+\sum_i q_i(p_i-a_1)+fQ\\
&=7.00+10.00+3.50=20.50.
\end{aligned}
$$

第一项是350股从中间价跨到初始卖一的半价差：$0.02\times350=7$美元. 第二项是超过卖一数量后，向上逐档成交多付的钱：$200\times0.03+50\times0.08=10$美元. 最后是费用3.50美元.

关键在于：**35,017的成交金额已经含有跨价差和逐档成交的影响.** 如果在这个金额之外，再加一次完整bid–ask价差，就重复计算了. 这里的20.50也不是从其他地方额外扣除的一笔账单，而是实际现金与选定基准之间的差.

若改用最优卖价100.02作基准，成本变为13.50美元，因为基准已经包含了跨到卖一的7美元. 两个结果并不冲突，它们回答不同问题. 比较两份执行报告时，先看基准是否相同，再比较数字.

对卖出方向，符号也需要改变. 按99.98卖出200股，毛收入19,996美元，费用2美元，净收入19,994美元；相对中间价20,000美元，成本是6美元，而不是负6美元. 本篇统一把“相对基准变差”记为正成本.

**如果要求卖出350股呢？** 我们只有200股买盘. 因此只能重建其中200股的上述金额，另外150股的成交价格和结果在材料中未知. 不能把买一99.98延长成无限深度，也不能借用卖二、卖三的价格来替买方报价.

<span id="m03-units-quality"></span>
## 五、迁移到期权，还要先检查单位

前面的价格都是美元/股. 若换到SPX期权，Cboe规格中的乘数为每指数点100美元，报价、合约数与现金之间多了一个明确的换算. [^SPX] 例如，教学报价3.90/4.00点，买入一份、按卖价4.00计算，权利金是400美元；不是4美元，也不是用股票实验的350股数量照搬过去.

**报价格式相似，不代表每个数字的单位相同.** 债券可以按每100面值报价，股票按每股，期权则要按具体合约乘数. OCC还要求注意交易费用与较小权利金之间的关系；费用不能因为图中只画一条收益曲线就被省略. [^OCC]

最后，执行质量也不能压成一个均价数字. FINRA的最佳执行规则把价格、交易规模、报价可得性、订单条件以及执行的速度、数量、可能性和费用等列入考察范围. [^FINRA5310] 这与刚才的算例相连：限价单降低了可接受价格的上界，却可能没有完成目标数量；等待的结果还没有出现在即时均价里.

这张冻结盘口是一个完整的算术练习，不是完整的路由评价. 真正评价执行还需要逐笔订单、成交和当时可得信息；但在进入那些资料之前，我们至少已经会把方向、单位、数量与基准对齐.

<span id="m03-exercises"></span>
## 六、检验理解：算完数字，还要说清没有算出的部分

### 练习一：低估发生在哪一步？

有人将350股买入成本写为$350\times100.02+3.50=35,010.50$. 请指出漏掉的金额，并给出解释.

**解析.** 卖一只有100股，而不是350股. 剩余200股在100.05、50股在100.10，分别比100.02多付6和4美元，共10美元. 正确现金支出是35,020.50. 错误不是没加“整段价差”，而是把有限卖一深度当成无限.

### 练习二：卖出350股，是否能报一个完整均价？

使用本篇输入，不补任何报价. 先报告可复算部分，再写还缺什么.

**解析.** 只有200股按99.98成交的可见计算段：毛额19,996、费用2、净额19,994美元. 余下150股需要更多买盘或后续成交资料. 在这份输入下，不能给完整350股均价. 若另设“本实验没有任何其他买盘且指令为IOC”，模型内可以取消剩余量，但这仍不是一笔真实委托的终态证明.

### 练习三：限价约束是否包含手续费？

设买100股、限价100.02，每股费用仍0.01. 给定卖一数量保持不动，订单能否成交？每股含费成本是否可能超过限价？

**解析.** 100股全部可以在100.02成交；金额10,002，费用1，总支出10,003，含费成本100.03美元/股. 这里的限价约束成交价格，不是把交易费用也装进同一个上界. 这不是违规地在100.03成交. 实际委托系统的费用和预算限制仍应分别确认.

### 练习四：成交300股后，能否宣称限价单“省了5.5美元”？

限价100.05的300股相对中间价成本为15美元，市价350股为20.50美元. 为什么直接相减不能说明限价策略更好？

**解析.** 两个数字对应不同已完成数量. 限价单尚有50股需求未完成；若把这部分排除，比较就没有覆盖同一目标. 可以先比较同样300股的即时执行，或补上50股后续执行和等待的后果，但不能假设尚未发生的成交免费. 真实实施差额还可能涉及未完成部分的机会成本，本篇没有替它填数.

[^EXEC]: **SEC Investor.gov，Executing an Order**. 现行教学网页，2026-09-21访问.[原文](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order). 定位：主体全文中的订单路由、执行场所及报价时效/数量.

[^ORDERS]: **SEC Office of Investor Education and Advocacy，Understanding Order Types — Investor Bulletin**. 初发2017-07-12；更新2026-08-18.[原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14). 定位：Market Order、Limit Order，以及 Timing Restrictions 中的 Day、GTC、IOC.

[^SPX]: **Cboe，SPX Options Fact Sheet**. 两页事实表，页脚©2026.[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 定位：PDF pp.1–2，尤其第2页 SPX / SPXW 规格表；版权年份不作为各项规则的生效日.

[^OCC]: **The Options Clearing Corporation，Characteristics and Risks of Standardized Options**. June 2024.[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 定位：Ch.I印刷pp.3–5；Ch.II印刷pp.6–8、11–12；Ch.IX印刷pp.58–59.

[^FINRA5310]: **FINRA，FINRA Rule 5310 — Best Execution and Interpositioning**. 规则页2026-09-21访问；页尾列示最近修订生效2014-05-09.[原文](https://www.finra.org/rules-guidance/rulebooks/finra-rules/5310). 定位：(a)–(e)及Supplementary Material .01–.09，尤其(a)(1)、.09(b).

## Additional teaching material
### 交互规范：`INT-M03-BOOK`

数据身份固定为`synthetic`，证券代码为空，时间标签为“教学时点t0”，可见范围固定“仅本实验所列深度”. 不得显示“实时/历史行情”. 报价在本轮计算期间冻结，不估计跨场所路由、竞争订单和新增流动性.

| 输入 | 类型与默认值 | 范围/处理 |
|---|---|---|
| `side` | `buy` | `buy / sell` |
| `quantity` | 整数，股，350 | 0–1000 |
| `order_type` | `market` | `market / limit` |
| `limit` | 美元/股，100.05 | 99.00–101.00，0.01；市价模式忽略 |
| `tif` | `day` | `day / ioc`；用于所列模型内余量说明 |
| `fee_per_share` | 美元/股，0.01 | 0–0.10，0.01 |
| `book` | 上文四行，只读 | 买侧只给200股；不生成下一档 |
| `depth_scope` | `visible_excerpt`，只读 | 明确这是可见片段，不宣称覆盖所有场所/隐藏流动性 |
| `benchmark` | 初始中间价100.00，只读 | 使用成交前报价，不随输出反向更新 |

**确定算法.** 价格内部用整数美分. 买单读取卖侧升序，卖单读取买侧降序. 对于限价单，只保留买价不高于限价、卖价不低于限价的合资格档位. 逐档取`fill=min(remaining, level_quantity)`，扣减剩余量. 若所给深度不足，计算止于已知部分，不外推.`filled=sum(fill)`；`gross=sum(fill*price)`；`fee=filled*fee_per_share`；买方现金流`-(gross+fee)`，卖方`gross-fee`.`VWAP=gross/filled`，零成交时为`null`，不是0.

买方相对中间价成本`gross+fee-filled*mid`；卖方成本`filled*mid-(gross-fee)`.**分母和基准数量都用已成交数量，不用原始委托量.** 买方半价差项`filled*(ask1-mid)`、逐档项`sum(fill*(price-ask1))`；卖方分别`filled*(mid-bid1)`、`sum(fill*(bid1-price))`. 加费用后应与总成本相等.

余量必须同时输出`remaining`和`reason`：
- 价格条件阻挡：本轮未成交；Day等待后续，IOC在本实验条件下取消余量.
- 可见深度用尽：显示“表外执行未知”；`depth_scope=visible_excerpt`时，即使IOC也只能陈述“若执行路径上不存在其他立即可得深度，剩余会取消”，不能把可见片段误当整个市场并生成真实终态.
- 当前零成交：不给VWAP、不收逐股成交费；没有本例之外的固定费用.

| 验算状态 | 已成交 | 毛额 | 费用 | 现金流 | 均价 | 余量/限制 |
|---|---:|---:|---:|---:|---:|---|
| 默认买350 | 350 | 35017 | 3.50 | −35020.50 | 100.048571… | 0 |
| 买350，限价100.05 | 300 | 30012 | 3.00 | −30015.00 | 100.04 | 50，限价阻挡 |
| 卖350 | 200 | 19996 | 2.00 | +19994.00 | 99.98 | 150，表外执行未知 |
| 买100，限价100.02 | 100 | 10002 | 1.00 | −10003.00 | 100.02 | 0 |
| 买601 | 600 | 60042 | 6.00 | −60048.00 | 100.07 | 1，表外执行未知 |
| 买350，限价100.01 | 0 | 0 | 0 | 0 | null | 350，价格不符 |
| 数量0 | 0 | 0 | 0 | 0 | null | 0，无订单 |

静态等价为上述验算表、正文逐档表及成本公式. 网页可以用阶梯图，但必须同时显示成交分笔表. 图中“已知”与“未知”有文字标签；不能用最后一级横线延长到1000股.`section#INT-M03-BOOK`提供键盘可达的方向、数量、类型、限价输入；结果有`aria-live`简报. 打印展开表格，窄屏保留单位. 断言：每档不超其数量；成交量不超委托；限价约束逐笔满足；成本分解相等；卖350没有第201股价格.

### 指定阅读单元

| 必读来源 | 完整单元 | 目的 |
|---|---|---|
| ORDERS | Market、Limit、Day、IOC | 价格/有效期约束与执行结果 |
| EXEC | 主体全文 | 报价与路由的不同执行路径 |
| FINRA5310 | (a)(1)与Supplementary .09完整条款 | 多维执行质量，不只看均价 |
| OCC、SPX | OCC交易单位及Ch.IX；SPX两页事实表 | 单位、乘数和费用 |
| 本篇实验 | 全部输入、算法、边界与默认验算表 | 不从不完整数据生成深度 |

### 阅读范围说明

本交付是交互规格与静态等价，不是已经连接行情或经浏览器执行过的交易页面.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-MA-BOOK-v1",
    "title": "冻结合成盘口：成交、现金与成本",
    "anchor": "m03-book-experiment",
    "description": "synthetic_experiment",
    "period": null,
    "sources": [],
    "static_equivalent_markdown": "### 交互规范：`INT-M03-BOOK`\n\n数据身份固定为`synthetic`，证券代码为空，时间标签为“教学时点t0”，可见范围固定“仅本实验所列深度”. 不得显示“实时/历史行情”. 报价在本轮计算期间冻结，不估计跨场所路由、竞争订单和新增流动性.\n\n| 输入 | 类型与默认值 | 范围/处理 |\n|---|---|---|\n| `side` | `buy` | `buy / sell` |\n| `quantity` | 整数，股，350 | 0–1000 |\n| `order_type` | `market` | `market / limit` |\n| `limit` | 美元/股，100.05 | 99.00–101.00，0.01；市价模式忽略 |\n| `tif` | `day` | `day / ioc`；用于所列模型内余量说明 |\n| `fee_per_share` | 美元/股，0.01 | 0–0.10，0.01 |\n| `book` | 上文四行，只读 | 买侧只给200股；不生成下一档 |\n| `depth_scope` | `visible_excerpt`，只读 | 明确这是可见片段，不宣称覆盖所有场所/隐藏流动性 |\n| `benchmark` | 初始中间价100.00，只读 | 使用成交前报价，不随输出反向更新 |\n\n**确定算法.** 价格内部用整数美分. 买单读取卖侧升序，卖单读取买侧降序. 对于限价单，只保留买价不高于限价、卖价不低于限价的合资格档位. 逐档取`fill=min(remaining, level_quantity)`，扣减剩余量. 若所给深度不足，计算止于已知部分，不外推.`filled=sum(fill)`；`gross=sum(fill*price)`；`fee=filled*fee_per_share`；买方现金流`-(gross+fee)`，卖方`gross-fee`.`VWAP=gross/filled`，零成交时为`null`，不是0.\n\n买方相对中间价成本`gross+fee-filled*mid`；卖方成本`filled*mid-(gross-fee)`.**分母和基准数量都用已成交数量，不用原始委托量.** 买方半价差项`filled*(ask1-mid)`、逐档项`sum(fill*(price-ask1))`；卖方分别`filled*(mid-bid1)`、`sum(fill*(bid1-price))`. 加费用后应与总成本相等.\n\n余量必须同时输出`remaining`和`reason`：\n- 价格条件阻挡：本轮未成交；Day等待后续，IOC在本实验条件下取消余量.\n- 可见深度用尽：显示“表外执行未知”；`depth_scope=visible_excerpt`时，即使IOC也只能陈述“若执行路径上不存在其他立即可得深度，剩余会取消”，不能把可见片段误当整个市场并生成真实终态.\n- 当前零成交：不给VWAP、不收逐股成交费；没有本例之外的固定费用.\n\n| 验算状态 | 已成交 | 毛额 | 费用 | 现金流 | 均价 | 余量/限制 |\n|---|---:|---:|---:|---:|---:|---|\n| 默认买350 | 350 | 35017 | 3.50 | −35020.50 | 100.048571… | 0 |\n| 买350，限价100.05 | 300 | 30012 | 3.00 | −30015.00 | 100.04 | 50，限价阻挡 |\n| 卖350 | 200 | 19996 | 2.00 | +19994.00 | 99.98 | 150，表外执行未知 |\n| 买100，限价100.02 | 100 | 10002 | 1.00 | −10003.00 | 100.02 | 0 |\n| 买601 | 600 | 60042 | 6.00 | −60048.00 | 100.07 | 1，表外执行未知 |\n| 买350，限价100.01 | 0 | 0 | 0 | 0 | null | 350，价格不符 |\n| 数量0 | 0 | 0 | 0 | 0 | null | 0，无订单 |\n\n静态等价为上述验算表、正文逐档表及成本公式. 网页可以用阶梯图，但必须同时显示成交分笔表. 图中“已知”与“未知”有文字标签；不能用最后一级横线延长到1000股.`section#INT-M03-BOOK`提供键盘可达的方向、数量、类型、限价输入；结果有`aria-live`简报. 打印展开表格，窄屏保留单位. 断言：每档不超其数量；成交量不超委托；限价约束逐笔满足；成本分解相等；卖350没有第201股价格.",
    "inputs": {
      "unit": "USD per share; quantities in shares",
      "teaching_data": true,
      "bids": [
        {
          "price": "99.98",
          "quantity": 200
        }
      ],
      "asks": [
        {
          "price": "100.02",
          "quantity": 100
        },
        {
          "price": "100.05",
          "quantity": 200
        },
        {
          "price": "100.10",
          "quantity": 300
        }
      ],
      "depth_scope": "visible_excerpt",
      "timestamp": "teaching t0",
      "mid": "100",
      "default_side": "buy",
      "default_quantity": 350,
      "default_fee_per_share": "0.01",
      "bounds": {
        "quantity": [
          0,
          1000
        ],
        "fee_per_share": [
          "0",
          "0.10"
        ],
        "limit": [
          "99",
          "101"
        ]
      }
    },
    "outputs": {
      "default": {
        "side": "buy",
        "requested": 350,
        "filled": 350,
        "remaining": 0,
        "reason": "complete",
        "fills": [
          [
            100,
            "100.02"
          ],
          [
            200,
            "100.05"
          ],
          [
            50,
            "100.10"
          ]
        ],
        "gross": "35017.00",
        "fees": "3.50",
        "cash_flow": "-35020.50",
        "vwap": "100.0485714285714285714285714",
        "cost": "20.50",
        "half_spread": "7.00",
        "walk": "10.00"
      },
      "limit_100_05": {
        "side": "buy",
        "requested": 350,
        "filled": 300,
        "remaining": 50,
        "reason": "limit_blocked",
        "fills": [
          [
            100,
            "100.02"
          ],
          [
            200,
            "100.05"
          ]
        ],
        "gross": "30012.00",
        "fees": "3.00",
        "cash_flow": "-30015.00",
        "vwap": "100.04",
        "cost": "15.00",
        "half_spread": "6.00",
        "walk": "6.00"
      },
      "sell_350": {
        "side": "sell",
        "requested": 350,
        "filled": 200,
        "remaining": 150,
        "reason": "outside_visible_depth_unknown",
        "fills": [
          [
            200,
            "99.98"
          ]
        ],
        "gross": "19996.00",
        "fees": "2.00",
        "cash_flow": "19994.00",
        "vwap": "99.98",
        "cost": "6.00",
        "half_spread": "4.00",
        "walk": "0.00"
      }
    }
  }
]
```

## Sources
- [Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order): 券商路由和执行路径；非同一时点真实盘口.
- [FINRA Rule 5310 — Best Execution and Interpositioning](https://www.finra.org/rules-guidance/rulebooks/finra-rules/5310): 合理勤勉及执行质量的价格、数量、速度、可能性、费用维度；不保证每笔按显示价成交.
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Understanding Order Types — Investor Bulletin](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14): 订单语义、分档执行、限价与成交保证的区别；投资者教学而非规则正文；各券商细则仍可能不同.

P-E 使用范围：订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.

SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价.

M-E/F/G 本批采用：SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.

## Content relations
```json
[
  {
    "from": "zh-m03",
    "relation": "part_of",
    "to": "markets-trading",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m03",
    "relation": "illustrated_by",
    "to": "SIM-MA-BOOK-v1",
    "reason": "完全合成且冻结的逐档成交实验"
  },
  {
    "from": "zh-m03",
    "relation": "supported_by",
    "to": "MA-ORDERS",
    "reason": "报价、最新成交与订单约束区别",
    "scope": "Market Order / Limit Order",
    "at_section": "m03-quote-fields"
  },
  {
    "from": "zh-m03",
    "relation": "derived_from",
    "to": "m03-book-experiment",
    "reason": "按实际填单数量和固定基准代数分解",
    "conditions": "本轮报价冻结；仅计算可见成交；逐股费用",
    "at_section": "m03-cost-decomposition",
    "original_target": "SIM-MA-BOOK-v1#inputs"
  },
  {
    "from": "zh-m03",
    "relation": "supported_by",
    "to": "MA-FINRA5310",
    "reason": "执行质量有多个维度",
    "scope": "(a)(1)、Supplementary Material .09(b)",
    "at_section": "m03-units-quality"
  },
  {
    "from": "zh-m03",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "合约乘数改变报价到现金的换算",
    "scope": "事实表第2页",
    "at_section": "m03-units-quality"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 3/17
按报价深度复算成交数量、均价与成本.
成交后还有证券、现金和担保安排需要完成.
Next: [清算、结算与抵押品](https://ou-liu-red-sugar.github.io/zh/notebook/clearing-settlement-collateral/)
