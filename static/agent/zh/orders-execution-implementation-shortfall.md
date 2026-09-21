# 下单、成交与交易成本

从整个300股目标、成交、现金和未完成部分推导实施差额，而不只比较成交均价.

Entry: zh-p09 | Node: P09 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教P09“下单、成交与交易成本”. 先实际读取SEC两大指令单元，以及FEDS指定方法、样本、Table1和表注；记录估计公平价、久期归一与分组筛选的身份. 未读原文时不能拿摘要数字开始讲解.
从合成300股任务出发，让读者先交目标—逐笔成交—未成交—现金—共同终点财富的一张完整账，不逐个考四则运算. 再让其从两份财富相减推导IS，而不是背公式. 解释限价均价较低但终点50.20的总IS更高；改变终点不改变既有成交. 低限价无成交时费用0、均价不适用；IOC/FOK扩展均保留教学身份. 反馈重点是是否错误地把200股均价乘300、是否丢失剩余现金、是否重复加价差/冲击. 最后做50.10临界价和零成交迁移题，区分事后机会差额与事前最优决策. 讲FEDS表前先要求读者说清其统计单位：证券×交易日×成交量区间的组内有效价差中位数，最终为101,978个聚合观察，而不是逐笔原始成交. FEDS收益率bp不能套成本例价格bp，不声称复现原始交易估计.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MA-ORDERS",
      "title": "Understanding Order Types – Investor Bulletin",
      "version": "2017-07-12; updated 2026-08-18",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Market, Limit and Stop Orders; Timing Restrictions and Trading Instructions",
        "scope": "两个完整单元，更新2026-08-18",
        "purpose": "区分成交价格条件、成交数量和剩余指令状态"
      },
      "supports": "订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据.",
      "authors": [
        "SEC Office of Investor Education and Assistance"
      ],
      "fallback_source_ids": []
    },
    {
      "source_id": "PE-FEDS-2025049",
      "title": "Trading Costs v. Indicative Liquidity in the Off-the-Run Treasury Market",
      "version": "FEDS 2025-049, 2025-07-07",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.federalreserve.gov/econres/feds/files/2025049pap.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§2.1–2.2 printed pp7–13; §§3.1–3.2 pp13–17; Table1 and notes p32/PDF33",
        "scope": "完整方法、样本、分布单元及全表表注",
        "purpose": "解释公平价估计、筛选分组、收益率bp与分位数的支持边界"
      },
      "supports": "估计公平价和有效价差的方法、筛选/分组样本、Table1PanelA摘要统计. 未取原始TRACE，未复现估计；收益率bp不移植到股票价格bp.",
      "authors": [
        "Oleg Sokolinskiy"
      ],
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "input_id": "PE-DRAFT-INPUTS-20260921-v1",
    "version": "2026-09-21-v1",
    "selected_paths": [
      "frozen.execution",
      "frozen.research_observation",
      "extensions.execution"
    ],
    "data": {
      "id": "PE-DRAFT-INPUTS-20260921-v1",
      "version": "2026-09-21-v1",
      "frozen": {
        "package_id": "P-E-PRIMARY-20260921",
        "research_cutoff": "2026-09-21",
        "identity": "Public-source teaching support, not account or historical execution data",
        "execution": {
          "id": "SIM-PE-EXEC-01",
          "identity": "Entire book, fills, prices and fee are synthetic; no real ticker or historical quotes",
          "currency": "USD",
          "initial_cash": 15100,
          "target_shares": 300,
          "decision_price": 50,
          "arrival_bid": 49.98,
          "arrival_asks": [
            {
              "price": 50.02,
              "shares": 100
            },
            {
              "price": 50.05,
              "shares": 100
            },
            {
              "price": 50.1,
              "shares": 100
            }
          ],
          "fee_per_instruction_with_fills": 1,
          "limit_price": 50.05,
          "terminal_prices": [
            50.2,
            49.8
          ],
          "timeline": [
            "09:30:00 decision at midpoint 50.00",
            "09:30:01 arrival: displayed book unchanged and available to this order",
            "09:30:01 specified fills; limit residual remains unfilled",
            "10:00:00 cancel residual and compare wealth at the common terminal price"
          ],
          "assumptions": [
            "No competing cancellation or replenishment during the stipulated immediate fills",
            "No interest or price change between decision and arrival",
            "Cash for unfilled shares remains cash",
            "Do not label book-walking arithmetic as an estimated causal price-impact model"
          ]
        },
        "research_observation": {
          "id": "OBS-PE-FEDS-T1A",
          "source_id": "PE-FEDS-2025049",
          "locator": "Table 1 Panel A, printed p.32 / PDF p.33; definitions in 2.2 and 3.2; sample in 3.1",
          "identity": "Published summary statistics, not raw trade data or a replicated estimate",
          "sample_period": "2018-01 through 2024-06",
          "unit": "Yield-equivalent basis points after the paper's duration normalization; not equity-price basis points",
          "median": {
            "effective_spread": 0.37,
            "indicative_spread": 0.68
          },
          "p95": {
            "effective_spread": 6.22,
            "indicative_spread": 4.16
          }
        }
      },
      "extensions": {
        "identity": "Author teaching interface extensions; not new observed data or broker terms",
        "execution": {
          "default": {
            "route": "market",
            "limit_price": 50.05,
            "terminal_price": 50.2,
            "fee": 1
          },
          "routes": [
            "market",
            "limit",
            "ioc",
            "fok"
          ],
          "limits": {
            "limit_price": [
              49.9,
              50.2
            ],
            "terminal_price": [
              45,
              55
            ],
            "fee": [
              0,
              100
            ]
          }
        }
      },
      "units": {
        "amount": "USD",
        "shares": "shares",
        "futures": "integer contracts",
        "index": "index points",
        "rate": "fraction unless UI percent/bps labelled",
        "p09_cost_bps_denominator": "target_shares * decision_price",
        "feds_bps": "paper-defined duration-normalized yield equivalent basis points"
      }
    },
    "source_id_mapping": {
      "PE-FSB-MARGIN": "MA-FSB",
      "PE-SEC-ORDERS": "MA-ORDERS",
      "PE-CME-MES": "MA-MES"
    },
    "selection_identity": "本篇全部教学输入的逐字段副本；原公共共享文件保持作者字节，不含其他三篇无关数列."
  },
  "solutions_identity": "解释、迁移与边界题完整解析包含在同源body_markdown末节",
  "entry_id": "zh-p09",
  "content_version": "2026-09-21.PE-review-v3",
  "selected_branch": "common",
  "branch_selection_protocol": "默认只读 required_readings；选中 optional_readings 的具名分支后，追加该条完整 required_unit，实际读完后才教相应分支. 正文保留可展开内容与全部题解.",
  "public_artifacts": {
    "full_inputs": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "full_results": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "result_pointer": "/P09",
    "engine": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/engine.js",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md",
    "static_equivalents": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/static-results.md",
    "original_specifications": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/author-experiments.json"
  },
  "experiment_ids": [
    "EXP-P09-IMPLEMENTATION-SHORTFALL"
  ]
}
```

## Supplied entry
一项投资判断落到交易里，通常先成为一个目标：在某个时点，用某笔资金取得多少持仓. 指令只是实现目标的安排，成交才改变资产. 于是，评价交易不能只问“成交均价是多少”，还应问：**原来要完成的目标还剩多少，未成交的资金去了哪里，与同一时点的比较对象相比，最终财富差了多少？**

我们用一项300股的买入任务走完这条链. 你不需要先学会所有订单名称；本篇会给齐价格、数量、时间与费用，让两种指令在同一张账上接受比较.

<span id="SIM-PE-EXEC-01"></span>

<a id="p09-task"></a>
## 1. 在发单之前，先固定比较任务

下面全部交易数据都是教学设定，没有真实股票代码，也不是历史行情. 初始现金15,100美元，09:30:00决定买入300股，决策价和到达时的买卖中点都是50美元. 09:30:01指令到达时，买一49.98，卖盘如下；假定展示数量确实可供本指令立即成交，期间没有其他指令抢走或撤掉这些数量.

| 卖盘价格，美元／股 | 该档可买数量 | 买到该档为止的累计数量 |
|---:|---:|---:|
| 50.02 | 100 | 100 |
| 50.05 | 100 | 200 |
| 50.10 | 100 | 300 |

只要这条指令有成交，就收一次1美元费用. 之后没有进一步成交；10:00取消限价单剩余部分，并在同一终点价比较两条路径. 这个时间安排是本例的一部分：如果让一条路径用09:30价格、另一条用收盘价格，比较的问题就已经变了.

SEC 的订单教育材料说明，市价单以可得价格执行，但不保证执行价；限价单限制买入最高价或卖出最低价，却不保证成交. 具体订单功能和触发条件仍依经纪商. 本例只使用这两个差异，不把名字当成结果. [^orders]

<a id="p09-ledger"></a>
## 2. 两条指令，各自怎样改变现金与持仓

先发市价买单. 为了取得300股，指令依次买入三档，支出 $100\times50.02+100\times50.05+100\times50.10=15,017$. 成交均价为 $15,017/300=50.056667$，再付1美元，剩余现金82.

再看最高买价50.05的限价单. 它只吃到前两档，成交200股，名义金额10,007，均价50.035. 付1美元后剩余现金5,092，还有100股目标没有完成. 这100股不是损失掉的证券，也不是已经持有的证券；它们只是原目标与实际持仓之间的差额. 对应购买力仍留在现金中. 开放订单可能占用购买力，但不能把预留资金再当作已经花出的成交款.

| 路径 | 实际股数 | 已成交名义金额 | 成交均价 | 费用 | 剩余现金 | 未完成目标 |
|---|---:|---:|---:|---:|---:|---:|
| 市价单 | 300 | 15,017 | 50.056667 | 1 | 82 | 0股 |
| 50.05限价单 | 200 | 10,007 | 50.035000 | 1 | 5,092 | 100股 |

只看均价，限价路径更低. 但它买到的是200股，市价路径买到的是300股. 现在直接宣布前者执行更好，相当于把“取得300股”悄悄换成“只看已经买到的部分”. 我们需要一个覆盖整个目标的比较.

<a id="p09-shortfall"></a>
## 3. 从终点财富推导全部实施差额

先构造一个纸面比较组合：它拥有同样的15,100初始现金，并在比较中按50美元立即买齐300股，留下100现金. 这里的50美元是决策基准价，不要求它真实可成交；这个组合只用来记录从投资决定到实际完成之间的差异.

记目标数量为 $Q$，决策价 $p_0$，实际各笔成交为 $(q_i,p_i)$，总成交 $F=\sum_iq_i$，总费用 $f$，共同终点价 $p_T$，初始现金 $C_0$. 假定只有买入、不计期间利息和分红，终点的两份财富分别是

$$
W_{\mathrm{paper}}=C_0-Qp_0+Qp_T,
$$

$$
W_{\mathrm{actual}}=C_0-\sum_iq_ip_i-f+Fp_T.
$$

> **买入任务的实施差额.** 本篇把 $IS=W_{\mathrm{paper}}-W_{\mathrm{actual}}$ 称为全部实施差额（implementation shortfall）. 正数表示实际财富少于纸面目标，负数表示实际财富更多.

相减后，初始现金消去，整理得到

$$
IS=\sum_iq_i(p_i-p_0)+f+(Q-F)(p_T-p_0).
$$

第一项是已成交部分偏离决策价的金额，第二项是实际费用，第三项是未完成目标的机会差额. 我们不是在原损益之外“再罚一笔未成交费”；第三项本来就包含在两份终点财富的差里，推导只是把它显出来.

取 $p_T=50.20$. 市价路径的已成交价格差17，加费用1，$IS=18$. 限价路径的已成交价格差7，加费用1，再加 $100\times(50.20-50)=20$ 的未成交机会差额，总计28.

| 截止价50.20 | 纸面财富 | 实际现金 | 实际股票市值 | 实际财富 | 差额 |
|---|---:|---:|---:|---:|---:|
| 市价 | 15,160 | 82 | 15,060 | 15,142 | 18 |
| 限价 | 15,160 | 5,092 | 10,040 | 15,132 | 28 |

这张表解释了看似矛盾的结果：限价确实省下了已成交部分的价格成本，但少买的100股在终点涨价，机会差额超过了节省. 相对全部目标名义额 $Qp_0=15,000$，两个差额为12和18.666667个**价格基点**，计算为 $10,000\times IS/(Qp_0)$. 这里的分母不是实际成交额，也不是15,100的账户现金；必须先写清它要衡量的对象.

<a id="p09-alternatives"></a>
## 4. 未成交可能有利，但不能倒写事前信息

把同一条限价路径的终点价改为49.80，不改变已有成交. 未成交机会差额变为 $100\times(-0.20)=-20$，所以 $IS=7+1-20=-12$. 实际组合有5,092现金和价值9,960的股票，共15,052；纸面组合只有15,040，实际多12.

| 路径 | 终点价 | 已成交价差＋费 | 未成交机会差额 | 全部IS |
|---|---:|---:|---:|---:|
| 市价 | 50.20 | 18 | 0 | 18 |
| 限价 | 50.20 | 8 | 20 | 28 |
| 市价 | 49.80 | 18 | 0 | 18 |
| 限价 | 49.80 | 8 | −20 | −12 |

所以“没有买齐”并不天然是好事或坏事. 它保留了现金、减少了实际敞口，结果取决于后续路径以及原目标为什么需要完成. 如果任务是必须在截止前交付300股，限价未完成就违反任务；如果允许留下机会成本，才可以在共同财富尺度上比较.

也不要把价差、滑点、冲击成本几个名称再次相加. 本例已成交的 $\sum q_i(p_i-p_0)$ 已包含相对决策价的全部执行价格差. 单独研究因果市场冲击，需要另一个反事实模型；沿三档订单簿求和并没有识别“因为我下单而造成的价格变化”.

剩余指令的状态同样重要. IOC会立即取消未成交部分；普通限价剩余指令则可能继续有效. 我们的设定是它留到10:00但没有新增成交，随后撤单；不能把这一结果推广为所有限价单. 止损价也是触发条件，不是保证成交价；换成止损限价后又可能无法成交. [^orders]

<span id="OBS-PE-FEDS-T1A"></span>

<a id="p09-research"></a>
## 5. 一张真实研究表：报价宽度不等于你实际付出的成本

Sokolinskiy 的 FEDS 2025-049 研究直接交易商对客户的非新发行美国国债交易. 其样本覆盖2018年1月至2024年6月，经过交易量、证券活跃度和定价准确性筛选；下面采用论文公布的估计方法、筛选样本与摘要分布，不把它们当成原始交易数据的复现. [^feds]

论文在形成这里采用的描述统计前，先按证券、交易日和成交量区间分组，对有效价差取组内中位数；最终样本是 **101,978 个聚合观察、118只证券、1,589个交易日**. 因此下面的分位数是这些聚合观察的统计摘要，不是101,978笔逐笔原始成交. [^feds]

这里“实际成交”与“成本完全可观测”仍不同. 作者观察成交价，但公平比较价需要估计：使用较活跃国债报价拟合的价格成分，再加最近一笔较早指示性报价所估的证券特有成分. §2.2 的有效价差把成交与估计公平价的绝对差乘2，再以美元久期归一；因此结果是**收益率空间的基点**，不是上面股票任务的价格基点. [^feds]

| Table 1 Panel A，论文摘要统计 | 有效价差 | 指示性价差 |
|---|---:|---:|
| 中位数 | 0.37 | 0.68 |
| 95%分位 | 6.22 | 4.16 |

中位数下的比较与尾部比较给出了不同图像. 尤其注意：表里的两列分位数不是同一笔交易的配对结果，$0.68-0.37$ 不能写成每笔都能获得的节省. 它也没有给这张300股教学单提供可移植的费率. 我们采用它的用途，是提醒自己核对成交、报价、数量、时间与比较价怎样形成，而不是用一个研究平均值替代实施账. [^feds]

<a id="p09-lab"></a>
## 6. 用一张账完成操作与复盘

打开[全部实施差额实验](/notebook/labs/p-e/interactions.html?experiment=EXP-P09-IMPLEMENTATION-SHORTFALL#EXP-P09-IMPLEMENTATION-SHORTFALL). 先选择市价与默认截止价，再切到限价，找出现金、股数和IS三者各变了多少. 随后只改截止价；成交账应保持不变，变化应只来自终点持仓市值及未成交机会项. 低于卖一的限价、IOC剩余撤销和FOK全部取消是另标的指令练习，不混入默认成交记录.

<div data-experiment-slot="EXP-P09-IMPLEMENTATION-SHORTFALL"></div>

复盘时至少保留原目标、决策及到达时间、当时可见数量、真实成交、撤改单状态、费用和统一截止价. 指令提交成功不能替代成交回报；成交金额也不自动等于此刻可转出的结算现金. 我们的账只做本次执行与财富比较，跨账户调用还要回到资金可用性.

**解释题.** 限价单均价更低，为什么不能直接用 $50.056667-50.035$ 乘300，说它节省了6.5美元？

**解析.** 限价均价只描述200股，把它乘300等于假定缺少的100股也能以该价成交. 应先比较已有200股的执行结果，再保留100股未完成目标及对应现金. 按50.20共同终点，前者实际财富反而比市价少10美元；计算对象改变，不能靠补乘一个数量修复.

**迁移题.** 其他条件不变，终点价为50.10. 哪条路径IS较低？这个临界价意味着什么？

**解析.** 市价仍是18；限价为 $8+100(50.10-50)=18$，恰好相同. 由 $8+100(p_T-50)=18$ 可直接解出临界价50.10. 它描述给定两条成交路径的结果交叉点，不表示发单时已经知道终点会在哪一侧，也不构成最优指令规则.

**资金题.** 若一股都没有成交，费用也为零，终点50.20，初始15,100应怎样记录？

**解析.** 实际仍有15,100现金和零股，纸面财富15,160，因此IS为60，全来自 $300\times0.20$ 的机会差额. 成交均价应记为“不适用”，不能填0美元让图显示买得异常便宜. 未成交资金没有消失，亦没有凭空变成股票.

本篇最后留下的是完整实施结果，而非一个漂亮的均价. 把它和融资、到账条件合起来，我们才能继续判断某个目标仓位是否真的可实施.

[^orders]: SEC，*Understanding Order Types – Investor Bulletin*，原署2017-07-12，更新2026-08-18；“Market, Limit and Stop Orders”及“Timing Restrictions and Trading Instructions”完整单元. [原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14).
[^feds]: Oleg Sokolinskiy，*Trading Costs v. Indicative Liquidity in the Off-the-Run Treasury Market*，FEDS 2025-049，2025-07-07；§§2.1–2.2（印刷pp.7–13）、§§3.1–3.2（pp.13–17）、Table 1及表注（p.32／PDF p.33）. 其有效价差估计、筛选／分组与单位必须连同数字阅读；这里未取得原始TRACE／报价数据. [原文](https://www.federalreserve.gov/econres/feds/files/2025049pap.pdf#page=8).


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P09-IMPLEMENTATION-SHORTFALL",
    "node_id": "P09",
    "title": "下单、成交与交易成本：操作实验",
    "anchor": "p09-lab",
    "description": "从整个300股目标、成交、现金和未完成部分推导实施差额，而不只比较成交均价.",
    "inputs": {
      "shared_input_id": "PE-DRAFT-INPUTS-20260921-v1",
      "frozen_case_keys": [
        "execution",
        "research_observation"
      ],
      "controls": {
        "default": {
          "route": "market",
          "limit_price": 50.05,
          "terminal_price": 50.2,
          "fee": 1
        },
        "routes": [
          "market",
          "limit",
          "ioc",
          "fok"
        ],
        "limits": {
          "limit_price": [
            49.9,
            50.2
          ],
          "terminal_price": [
            45,
            55
          ],
          "fee": [
            0,
            100
          ]
        }
      },
      "unit_contract": {
        "amount": "USD",
        "shares": "shares",
        "futures": "integer contracts",
        "index": "index points",
        "rate": "fraction unless UI percent/bps labelled",
        "p09_cost_bps_denominator": "target_shares * decision_price",
        "feds_bps": "paper-defined duration-normalized yield equivalent basis points"
      }
    },
    "algorithm": [
      "固定Q300、p0=50、C0=15100；按价格顺序吃到可用三档，限价只取不高于上限的档.",
      "FOK不足300时全部不成交；IOC取消剩余；普通限价剩余到10:00取消.",
      "仅有成交收单次费用，零成交均价null；现金不足时拒绝结果而不自动融资.",
      "Wpaper=C0−Qp0+QpT；Wactual=C0−Σqipi−fee+FpT.",
      "IS=Wpaper−Wactual=Σqi(pi−p0)+fee+(Q−F)(pT−p0)；bps=IS/(Qp0)×10000."
    ],
    "boundaries": [
      "no fabricated residual fills",
      "fixed book not causal impact",
      "fee once when filled",
      "null average for zero fills",
      "negative opportunity/IS permitted",
      "FEDS yield basis points separate"
    ],
    "outputs": [
      {
        "parameters": {
          "route": "market",
          "limit_price": 50.05,
          "terminal_price": 50.2,
          "fee": 1
        },
        "target": 300,
        "fills": [
          {
            "price": 50.02,
            "shares": 100
          },
          {
            "price": 50.05,
            "shares": 100
          },
          {
            "price": 50.1,
            "shares": 100
          }
        ],
        "filled": 300,
        "unfilled": 0,
        "notional": 15017,
        "average_fill": 50.056666666666665,
        "fee": 1,
        "cash": 82,
        "terminal_stock_value": 15060,
        "paper_wealth": 15160,
        "actual_wealth": 15142,
        "execution_difference": 17,
        "opportunity": 0,
        "implementation_shortfall": 18,
        "bps": 11.999999999999998,
        "bps_denominator": 15000,
        "pending_immediately_after_arrival": 0,
        "cancelled_immediately": 0,
        "unfilled_cancelled_by_terminal": 0,
        "identity": "Entire book, fills, prices and fee are synthetic; no real ticker or historical quotes"
      },
      {
        "parameters": {
          "route": "market",
          "limit_price": 50.05,
          "terminal_price": 49.8,
          "fee": 1
        },
        "target": 300,
        "fills": [
          {
            "price": 50.02,
            "shares": 100
          },
          {
            "price": 50.05,
            "shares": 100
          },
          {
            "price": 50.1,
            "shares": 100
          }
        ],
        "filled": 300,
        "unfilled": 0,
        "notional": 15017,
        "average_fill": 50.056666666666665,
        "fee": 1,
        "cash": 82,
        "terminal_stock_value": 14940,
        "paper_wealth": 15040,
        "actual_wealth": 15022,
        "execution_difference": 17,
        "opportunity": 0,
        "implementation_shortfall": 18,
        "bps": 11.999999999999998,
        "bps_denominator": 15000,
        "pending_immediately_after_arrival": 0,
        "cancelled_immediately": 0,
        "unfilled_cancelled_by_terminal": 0,
        "identity": "Entire book, fills, prices and fee are synthetic; no real ticker or historical quotes"
      },
      {
        "parameters": {
          "route": "limit",
          "limit_price": 50.05,
          "terminal_price": 50.2,
          "fee": 1
        },
        "target": 300,
        "fills": [
          {
            "price": 50.02,
            "shares": 100
          },
          {
            "price": 50.05,
            "shares": 100
          }
        ],
        "filled": 200,
        "unfilled": 100,
        "notional": 10007,
        "average_fill": 50.035,
        "fee": 1,
        "cash": 5092,
        "terminal_stock_value": 10040,
        "paper_wealth": 15160,
        "actual_wealth": 15132,
        "execution_difference": 7,
        "opportunity": 20.000000000000284,
        "implementation_shortfall": 28.000000000000284,
        "bps": 18.666666666666856,
        "bps_denominator": 15000,
        "pending_immediately_after_arrival": 100,
        "cancelled_immediately": 0,
        "unfilled_cancelled_by_terminal": 100,
        "identity": "Entire book, fills, prices and fee are synthetic; no real ticker or historical quotes"
      },
      {
        "parameters": {
          "route": "limit",
          "limit_price": 50.05,
          "terminal_price": 49.8,
          "fee": 1
        },
        "target": 300,
        "fills": [
          {
            "price": 50.02,
            "shares": 100
          },
          {
            "price": 50.05,
            "shares": 100
          }
        ],
        "filled": 200,
        "unfilled": 100,
        "notional": 10007,
        "average_fill": 50.035,
        "fee": 1,
        "cash": 5092,
        "terminal_stock_value": 9960,
        "paper_wealth": 15040,
        "actual_wealth": 15052,
        "execution_difference": 7,
        "opportunity": -20.000000000000284,
        "implementation_shortfall": -12.000000000000284,
        "bps": -8.000000000000188,
        "bps_denominator": 15000,
        "pending_immediately_after_arrival": 100,
        "cancelled_immediately": 0,
        "unfilled_cancelled_by_terminal": 100,
        "identity": "Entire book, fills, prices and fee are synthetic; no real ticker or historical quotes"
      }
    ],
    "static_equivalent_markdown": "| 路线 | 终点 | 成交 | 未成交 | 现金 | 均价 | IS | 目标价格bps |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| market | 50.20 | 300 | 0 | 82.00 | 50.056667 | 18.000000 | 12.000000 |\n| market | 49.80 | 300 | 0 | 82.00 | 50.056667 | 18.000000 | 12.000000 |\n| limit | 50.20 | 200 | 100 | 5,092.00 | 50.035000 | 28.000000 | 18.666667 |\n| limit | 49.80 | 200 | 100 | 5,092.00 | 50.035000 | -12.000000 | -8.000000 |",
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "results_pointer": "/P09",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md"
  }
]
```

## Sources
- [Understanding Order Types — Investor Bulletin](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14): 订单语义、分档执行、限价与成交保证的区别；投资者教学而非规则正文；各券商细则仍可能不同.

P-E 使用范围：订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据.
- [Trading Costs v. Indicative Liquidity in the Off-the-Run Treasury Market](https://www.federalreserve.gov/econres/feds/files/2025049pap.pdf): 估计公平价和有效价差的方法、筛选/分组样本、Table1PanelA摘要统计. 未取原始TRACE，未复现估计；收益率bp不移植到股票价格bp.

## Content relations
```json
[
  {
    "from": "zh-p09",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p09",
    "relation": "uses_method",
    "to": "zh-m03",
    "reason": "调用盘口和指令定义"
  },
  {
    "from": "zh-p09",
    "relation": "uses_method",
    "to": "zh-p02",
    "reason": "调用日期资金与回报基数"
  },
  {
    "from": "zh-p09",
    "relation": "illustrated_by",
    "to": "SIM-PE-EXEC-01",
    "reason": "同源教学算例／有日期原始观察；身份见https://ou-liu-red-sugar.github.io/notebook/labs/p-e/objects.json"
  },
  {
    "from": "zh-p09",
    "relation": "illustrated_by",
    "to": "OBS-PE-FEDS-T1A",
    "reason": "同源教学算例／有日期原始观察；身份见https://ou-liu-red-sugar.github.io/notebook/labs/p-e/objects.json"
  },
  {
    "from": "zh-p09",
    "relation": "supported_by",
    "to": "MA-ORDERS",
    "reason": "区分成交价格条件、成交数量和剩余指令状态",
    "locator": "Market, Limit and Stop Orders; Timing Restrictions and Trading Instructions",
    "scope": "订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据."
  },
  {
    "from": "zh-p09",
    "relation": "supported_by",
    "to": "PE-FEDS-2025049",
    "reason": "解释公平价估计、筛选分组、收益率bp与分位数的支持边界",
    "locator": "§§2.1–2.2 printed pp7–13; §§3.1–3.2 pp13–17; Table1 and notes p32/PDF33",
    "scope": "估计公平价和有效价差的方法、筛选/分组样本、Table1PanelA摘要统计. 未取原始TRACE，未复现估计；收益率bp不移植到股票价格bp."
  },
  {
    "from": "p09-lab",
    "relation": "illustrated_by",
    "to": "EXP-P09-IMPLEMENTATION-SHORTFALL",
    "at_section": "p09-lab",
    "reason": "从整个300股目标、成交、现金和未完成部分推导实施差额，而不只比较成交均价."
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 6/9
用整个目标、实际成交与共同终点财富比较执行路径.
将经济损失、资金和成交深度放回同一组数量约束.
Next: [组合实施：风险、资金与可成交规模的联合预算](https://ou-liu-red-sugar.github.io/zh/notebook/portfolio-joint-implementation-budget/)
