# 投资期限与现金需要

从用钱的时间出发，按用途给资金分层，用 VOO 在 2022 年的下跌比较预留现金、被迫卖出与借钱周转。

Entry: zh-investment-horizon-cash | Node: NB-A02 | Language: zh | Editorial revision: 2026-10-11

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇用简明版建立用钱时间与投资期限的关系，详细版保留计算口径。VOO 数据采用 Yahoo Finance 调整后收盘价（含分红与拆股调整），样本 2015-12-31 至 2025-12-31，属事后数据，不作预测。主要数字：2021-12-31 至 2022-12-30 含分红约 −18.2%，10,000 美元约剩 8,183；一年持有期约 14% 亏损、最差约 −19.7%（2021-12-28 至 2022-12-28）；2020-02-19 至 03-23 约 −34%，8 月恢复；2022-01-03 高点至 10-12 低点约 −24.5%，2023-12-13 恢复；五年期在样本内全部上涨，不能推广为保证。被迫卖出比较：全部买入并在 2022 年底卖出 2,000 美元，2025 年底约 11,500；预留 2,000 现金、8,000 买入，约 12,177。借款周转为教学设定：8% 年利率，2023-12-29 还 2,160，剩约 8,177，2025 年底约 12,040；若价格停在 2022 年底水平，还款后约 6,023，比直接卖出少约 160。现金工具、债券和期权的细节分别属于按需专题；保证金约束在《亏损、波动与持有能力》继续展开。不给出具体配置比例或投资建议。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-a04-voo-data-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/VOO/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：VOO 历史行情，调整后收盘价；2021-12-31、2022-12-30、2023-12-29、2025-12-31 及 2020、2022 年高低点。每日输入见 /notebook/compounding/voo-daily.csv。",
        "scope": "Yahoo Finance：VOO 历史行情，调整后收盘价；2021-12-31、2022-12-30、2023-12-29、2025-12-31 及 2020、2022 年高低点。每日输入见 /notebook/compounding/voo-daily.csv。",
        "purpose": "核对本篇采用的 VOO 行情、交收时间与资金规则。"
      },
      "title": "Yahoo Finance：VOO 历史行情",
      "authors": [
        "Yahoo Finance"
      ],
      "version": "本篇核对日期：2026-09-26；历史期间见正文脚注"
    },
    {
      "source_id": "nb-a02-source-settlement",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      },
      "required_unit": {
        "locator": "SEC：New “T+1” Settlement Cycle – What Investors Need To Know，2024-03-27，What is Settlement?",
        "scope": "SEC：New “T+1” Settlement Cycle – What Investors Need To Know，2024-03-27，What is Settlement?",
        "purpose": "核对本篇采用的 VOO 行情、交收时间与资金规则。"
      },
      "title": "SEC：New T+1 Settlement Cycle – What Investors Need To Know",
      "authors": [
        "SEC Office of Investor Education and Advocacy"
      ],
      "version": "本篇实际阅读日期：2026-09-24"
    },
    {
      "source_id": "nb-b03-cash-account-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/trading/faqs-about-account"
      },
      "required_unit": {
        "locator": "Fidelity：About Your Account，现金账户已交收资金与可提款余额。",
        "scope": "Fidelity：About Your Account，现金账户已交收资金与可提款余额。",
        "purpose": "核对本篇采用的 VOO 行情、交收时间与资金规则。"
      },
      "title": "Fidelity：About Your Account",
      "authors": [
        "Fidelity"
      ],
      "version": "本篇核对日期：2026-09-26；各输入时点及采用范围见正文"
    },
    {
      "source_id": "nb-b03-cash-account-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/trading/faqs-trading-restrictions"
      },
      "required_unit": {
        "locator": "Fidelity：Trading Restrictions，现金账户用未交收卖款交易的限制。",
        "scope": "Fidelity：Trading Restrictions，现金账户用未交收卖款交易的限制。",
        "purpose": "核对本篇采用的 VOO 行情、交收时间与资金规则。"
      },
      "title": "Trading Restrictions",
      "authors": [
        "Trading Restrictions"
      ],
      "version": "本篇核对日期：2026-09-26；各输入时点及采用范围见正文"
    },
    {
      "source_id": "nb-a03-source-margin-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts"
      },
      "required_unit": {
        "locator": "FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。",
        "scope": "FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。",
        "purpose": "核对本篇采用的 VOO 行情、交收时间与资金规则。"
      },
      "title": "FINRA：Brokerage Accounts",
      "authors": [
        "FINRA"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/period-cash.css">

## 用钱的时间与投资期限 {#nb-a02-horizon}

[《复利、通胀与机会成本》](/zh/notebook/compounding-inflation-opportunity-cost/)比较过同一笔 10,000 美元在 2023 年 6 月到 2024 年 6 月间的三种安排：保留现金仍是 10,000 美元，持有到期的短期国债约为 10,523 美元，持有 VOO 并把分红继续投入则约为 12,444 美元。把起点往前挪一年半，结果就不一样了。2021 年底把 10,000 美元买成 VOO，到 2022 年底，连同分红也只剩约 8,183 美元，下跌了约 18%。[^voo-data]

如果这笔钱原本就要在 2022 年底支付一笔 10,000 美元的款项，比如一笔已经确定的学费，那么付款日一到，持有人还差约 1,817 美元。VOO 在 2015 年底到 2025 年底的十年里，含分红的复合年化约为 14.8%，可这对一年后就要付款的人帮助不大：付款那天的价格是多少，这笔钱就只能换回多少。相比之下，持有到期的短期国债在买入时就约定了到期收回的金额；只要到期日早于付款日，付款那天能拿到多少钱就是确定的。

所以一笔投资能投多久，首先要看这笔钱什么时候要用。用钱的日期越近、金额越确定，就越需要让这笔钱在付款日之前确定可以取回；离用钱还早，才有时间等待价格从下跌中恢复。

## 按用途给资金分层 {#nb-a02-layers}

一般来说，我们可以先按用钱的时间和确定程度，把手里的钱分成几层。第一层是**近期支出**，日期和金额已经比较清楚，比如几个月后的学费、房租或税款；第二层是**备用金**，用于失业、医疗、维修这类难以预料、却可能随时发生的开支；第三层是**长期资金**，要到多年以后才会用到。三层钱关心的问题各不相同：近期支出要看到期能否按时足额拿到，备用金要看能否随时取用、金额会不会大起大落，长期资金才主要比较回报，也更能承受途中的下跌。

那么长期要有多长？我们还是用 VOO 的数据看一看。在 2016 年初到 2025 年底这十年里，任选一个交易日买入、持有一年，约有 14% 的情形以亏损结束，最差的一次出现在 2021 年 12 月 28 日到 2022 年 12 月 28 日，含分红亏损约 20%。下跌也可能来得很快：2020 年 2 月 19 日到 3 月 23 日，VOO 在一个多月里下跌了约 34%，到当年 8 月才回到原来的水平；2022 年则从 1 月 3 日的高点跌到 10 月 12 日，跌幅约 25%，直到 2023 年 12 月 13 日才回到年初的高点，前后将近两年。[^voo-data]

<span data-text-versions id="nb-a02-text-1">同一段数据里，持有五年的情形全部以上涨结束<span data-text-detail>（持有期按日历日计算：从每个交易日起，取一年或五年后首个交易日的调整后收盘价作比较，一年期共 2,266 个起点，五年期共 1,261 个起点；调整后收盘价含分红与拆股调整，不计税费）</span>。不过这十年大体是美国股市表现较好的一段时间，它能说明价格恢复可能要花上一两年，却不能保证持有五年就一定不会亏损。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这样一来，资金分层就有了具体的做法：近期支出和备用金放在能按时、按确定金额取回的地方，比如现金、存款，或到期日与付款日相匹配的短期国债；能够等上几年的钱，才适合放进股票和股票基金。

## 变现时间与付款日的金额 {#nb-a02-liquidity}

把钱放在不同的地方，差别主要有两点：需要用钱时多快能变成可用的现金，以及付款那天能拿到多少。按这两点比较几种常见安排：

| 资金放在哪里 | 付款日能拿到多少 | 多快可以使用 | 提前取用要付出什么 |
|---|---|---|---|
| 现金与活期存款 | 金额确定 | 按账户约定随时支取 | 利息按账户约定；物价上涨时，购买力会减少 |
| 到期日早于付款日的短期国债 | 持有到期时，收回约定的面值 | 到期日收回 | 到期前卖出，按当时的市场价格成交 |
| 股票与股票基金 | 取决于卖出那天的价格 | 交易日可以卖出，交收后才能转出 | 价格可能低于买入价，卖出就把浮亏变成实际亏损 |

表中最后一行还有一段容易漏掉的时间。[《报价、订单与实际成交》](/zh/notebook/quotes-orders-execution/)介绍过，美国多数证券交易按 T+1 交收：周五卖出 VOO，交收要到周一才完成，之后把钱转到银行，还要按账户和银行的安排处理。付款日如果就在周一，周五才卖出，时间就已经很紧了。所以安排付款时，我们还要把卖出、交收和转账的时间一起留出来。[^settlement]<sup>，</sup>[^cash-account]

债券和期权这类合约，自身还约定了付息、到期或行权付款的日期，持有它们时也要把这些日期放进同一张时间表；具体怎样计算，留给按需专题[《债券的现金流与收益》](/zh/notebook/#topic-R)和[《期权权利、盈亏与退出》](/zh/notebook/#topic-G)。

## 被迫卖出的代价 {#nb-a02-forced}

现在把付款缩小到一部分资金。假设 2021 年底我们有 10,000 美元，其中 2,000 美元要在 2022 年底支付，其余的钱可以长期投资。比较两种安排：一种是全部买入 VOO，到付款时再卖出一部分；另一种是先留出 2,000 美元现金，只把 8,000 美元买入 VOO。2022 年底付款以后，两种安排都一直持有到 2025 年底：

| 安排 | 2022 年底付款后持有的 VOO | 2025 年底的 VOO |
|---|---:|---:|
| 全部买入，到时卖出 2,000 美元 | 约 6,183 美元 | 约 11,500 美元 |
| 预留 2,000 美元，8,000 美元买入 | 约 6,546 美元 | 约 12,177 美元 |

<span data-text-versions id="nb-a02-text-2">两种安排都按时付了款，差别出在付款当天的价格上。全部买入的做法要在 VOO 下跌约 18% 时卖出份额来凑足 2,000 美元，卖掉的是当初花约 2,444 美元买到的那部分份额，这约 444 美元的亏损就此成了定局；这些份额也错过了 2023 年以后的回升。到 2025 年底，两种安排相差约 676 美元<span data-text-detail>（采用调整后收盘价计算，允许买卖不足一份的份额，不计税费和交易成本，金额四舍五入到美元。全部买入的安排在 2022 年底卖出 2,000 美元后剩 6,182.60 美元；预留现金的安排用 8,000 美元买入的份额在 2022 年底值 6,546.08 美元，两者此后按同一价格变化）</span>。[^voo-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

预留现金也有代价。假如 2022 年市场上涨，全部买入的做法多投入了 2,000 美元，结果反而会更好。预留换来的，是这笔付款不再取决于那一天的价格：无论市场涨跌，该付的钱都已经备好，长期投资的部分也不必在低位被动卖出。

## 借钱周转与还款日 {#nb-a02-borrowing}

<span data-text-versions id="nb-a02-text-3">还有一种做法是不卖出，先借钱付款，以后再还。仍从全部买入 VOO 的情形出发，假设 2022 年底借入 2,000 美元完成付款，一年后连本带息归还 2,160 美元<span data-text-detail>（年利率 8% 为本例设定，到期一次还本付息，没有其他费用和抵押要求）</span>。2023 年 VOO 含分红上涨了约 26%，到 2023 年 12 月 29 日卖出份额还款后，还持有约 8,177 美元的 VOO，2025 年底约为 12,040 美元。这一次，借钱的结果比在低位卖出好，也接近预留现金的安排。[^voo-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

不过这个结果有一个前提：还款之前，价格已经回升。借钱以后，我们把“按今天的价格卖出”换成了“在约定日期归还一笔确定的金额，并另付利息”。如果 VOO 在 2023 年一直停在 2022 年底的水平，到期卖出份额归还 2,160 美元，剩下的约 6,023 美元，比当初直接卖出还少约 160 美元，少掉的正是这笔利息；如果价格继续下跌，差距还会更大。2022 年那次下跌从高点到恢复用了将近两年，期限更短的借款，就可能在价格还处于低位时到期。

<span data-text-versions id="nb-a02-text-4">用账户里的证券作抵押借款，还多了一层约束。证券跌价、账户权益低于要求时，券商可以要求补充资金，也可以出售账户中的证券，什么时候退出也就不再完全由自己决定<span data-text-detail>（这里指证券账户中的融资借款，券商可以在法规最低要求之上设定更高的维持要求，并可能不经事先通知处置证券；具体条件依账户协议而定）</span>。这种保证金约束在持仓亏损时会怎样影响持有，下一篇还会继续展开。[^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 把期限放回整体资金 {#nb-a02-plan}

把这些比较放回自己的资金安排，我们可以先列出已经知道的付款：什么时候付、付多少。每一笔近期付款，都对应准备现金，或到期日早于付款日的短期工具，再另外留出一笔备用金；剩下能等上几年的钱，才用于股票和基金这类价格会大幅波动的投资。之后收入、开支或计划发生变化时，再重新核对一次。

几项投资放在一起时，还要看它们的收付款能不能相互配合。几笔付款集中在相近的日期，回款却都要更晚才来，现金缺口就会一起出现；几项持仓若在同一段行情中一起下跌，靠卖出它们来凑钱也会同时变得困难。预留的现金既用来支持已经承诺的付款、应对回款延后，也给后来的调整和投资机会留下空间。

钱的期限排好以后，长期持仓仍可能在途中出现亏损。下一篇[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)从亏损后的回本预期讲起，看怎样按经营前景和当前价格判断是否继续持有。

[^voo-data]: [Yahoo Finance：VOO 历史行情](https://finance.yahoo.com/quote/VOO/history/)，读取于 2026-09-26，采用调整后收盘价（含分红与拆股调整）。2021-12-31、2022-12-30、2023-12-29、2025-12-31 的调整后收盘价分别为 409.54、335.11、423.32、623.34 美元；2022 年 1 月 3 日的高点与 10 月 12 日的低点分别为 412.05、311.01 美元，2023-12-13 回到 417.41 美元；2020 年 2 月 19 日与 3 月 23 日分别为 282.47、186.45 美元，8 月 10 日回到 282.90 美元。[每日输入](/notebook/compounding/voo-daily.csv)供复算。
[^settlement]: [SEC：New “T+1” Settlement Cycle – What Investors Need To Know](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin)，2024-03-27，What is Settlement?。这里采用美国通常证券交易的交收周期，不推广到所有市场。
[^cash-account]: [Fidelity：About Your Account](https://www.fidelity.com/trading/faqs-about-account) 与 [Trading Restrictions](https://www.fidelity.com/trading/faqs-trading-restrictions)，现金账户已交收资金、可交易与可提款余额的不同用途。
[^margin]: [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts)，Margin Requirements、Firm Practices、Know Before You Trade。


## Sources
- [SEC：New T+1 Settlement Cycle – What Investors Need To Know](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin): 成交与证券、款项正式交付的区别；本文不推广美国特定周期。
- [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts): FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。采用净权益、维持保证金、券商自行提高要求及强制处置的规则；正文价格、借款和 30% 比例为教学设定。
- [Yahoo Finance：VOO 历史行情](https://finance.yahoo.com/quote/VOO/history/): Yahoo Finance：VOO 历史行情，读取于 2026-09-26。2015-12-31 至 2025-12-31，调整后收盘价由 156.8276978 至 623.3413696，累计增长约 297.47%；2023-06-15 至 2024-06-13 的对应值为 389.5532837、484.7463074，增长约 24.44%。每日输入与月末资金路径及购买力计算供复算。
- [Fidelity：About Your Account](https://www.fidelity.com/trading/faqs-about-account): Fidelity：About Your Account 与 Trading Restrictions，现金账户的可交易、已交收、可提款金额与付款关系。
- [Trading Restrictions](https://www.fidelity.com/trading/faqs-trading-restrictions): Fidelity：About Your Account 与 Trading Restrictions，现金账户的可交易、已交收、可提款金额与付款关系。

## Content relations
```json
[
  {
    "from": "zh-investment-horizon-cash",
    "relation": "part_of",
    "to": "topic-A",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [复利、通胀与机会成本](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/)
- [报价、订单与实际成交](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-execution/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
