# 再平衡、退出与判断维护

把触发与目的地、费用后的交易量、外部新资本和判断更新分别放回同一维护过程.

Entry: zh-p11 | Node: P11 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 从费用后股票和债券余额推导再平衡交易量，区分200 bp触发与175 bp目的地. 比较不动、部分、完全及追加4,000. 再以61.8%未触发、58%反向交易和经营依据失效检验；选择指数分支后才加入Nasdaq公告时点题. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

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
      "source_id": "PE-VANGUARD-RB",
      "title": "The rebalancing edge: Optimizing target-date fund rebalancing through threshold-based strategies",
      "version": "Vanguard Research, 2024-12",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://corporate.vanguard.com/content/dam/corp/research/pdf/the_rebalancing_edge_optimizing_target_date_fund_rebalancing_through_threshold_based_strategies.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "pp2–3 definitions and Figure1 notes; p4 framework; pp5–6 The inputs to our forecasting model; p7 Estimated transaction costs and Figure5 notes",
        "scope": "完整具名单元及图注",
        "purpose": "区分阈值、目的地和模拟条件，不把研究节费结果泛化"
      },
      "supports": "触发与目的地、收益/成本联合研究框架及模拟条件. 无现金流/期货的研究结果不证明200/175普遍最优.",
      "authors": [
        "Yu Zhang",
        "Harshdeep Ahluwalia",
        "Ankul Daga",
        "Yiran Zi"
      ],
      "fallback_source_ids": []
    },
    {
      "source_id": "PE-VANGUARD-POL",
      "title": "Vanguard's approach to target-date fund rebalancing",
      "version": "2025-01-23",
      "access": {
        "kind": "html_full_text",
        "uri": "https://workplace.vanguard.com/insights-and-research/perspective/vanguards-approach-to-target-date-fund-rebalancing.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Selecting a TDF rebalancing approach; Vanguard’s approach; Figure1 notes",
        "scope": "有日期的政策说明完整正文；不采用冲突图像替代描述",
        "purpose": "以真实机构选择解释200/175的两个不同数字"
      },
      "supports": "2025-01-23机构政策中200bps触发、175bps目的地；排除冲突图像替代文字.",
      "authors": [
        "Vanguard"
      ],
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "PE-NASDAQ-NDX",
      "title": "The Nasdaq-100 Index Special Rebalance to be Effective July 24, 2023",
      "version": "2023-07-07",
      "access": {
        "kind": "html_full_text",
        "uri": "https://ir.nasdaq.com/node/106481",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Event announcement three paragraphs",
        "scope": "完整事件正文",
        "purpose": "区分参考、公告、计划文件发布与生效日期"
      },
      "supports": "2023公告的参考、公开、计划文件发布与生效四种日期；不包含ETF成交.",
      "branch": "index-event",
      "required_if_branch_selected": true,
      "authors": [
        "Nasdaq, Inc."
      ],
      "fallback_source_ids": []
    },
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
        "locator": "Stop Orders; Stop-Limit Orders",
        "scope": "完整两小节",
        "purpose": "判断触发和订单执行的区别"
      },
      "supports": "订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据.",
      "branch": "order-trigger",
      "required_if_branch_selected": true,
      "authors": [
        "SEC Office of Investor Education and Assistance"
      ],
      "fallback_source_ids": []
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "input_id": "PE-DRAFT-INPUTS-20260921-v1",
    "version": "2026-09-21-v1",
    "selected_paths": [
      "frozen.rebalance",
      "frozen.index_event",
      "extensions.rebalance"
    ],
    "data": {
      "id": "PE-DRAFT-INPUTS-20260921-v1",
      "version": "2026-09-21-v1",
      "frozen": {
        "package_id": "P-E-PRIMARY-20260921",
        "research_cutoff": "2026-09-21",
        "identity": "Public-source teaching support, not account or historical execution data",
        "rebalance": {
          "id": "SIM-PE-REBALANCE-01",
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "source_ids": [
            "PE-VANGUARD-POL",
            "PE-VANGUARD-RB"
          ],
          "currency": "USD",
          "stock": 62400,
          "bond": 37600,
          "target_stock_weight": 0.6,
          "trigger_distance": 0.02,
          "destination_distance": 0.0175,
          "combined_implementation_cost_per_stock_sale_dollar": 0.002,
          "cost_identity": "Teaching aggregate cost for the stock sale plus bond purchase; charged once on stock-sale notional, not again on each leg",
          "next_stock_returns": [
            0.05,
            -0.05
          ],
          "next_bond_return": 0,
          "new_contribution_alternative": 4000
        },
        "index_event": {
          "id": "EVENT-PE-NDX-20230724",
          "source_id": "PE-NASDAQ-NDX",
          "identity": "Actual index-rebalance announcement; not ETF executions or a trading backtest",
          "reference_date": "2023-07-03",
          "announcement_date": "2023-07-07",
          "scheduled_pro_forma_release": "2023-07-14",
          "effective_time": "2023-07-24 before market open",
          "adds_or_removals": false
        }
      },
      "extensions": {
        "identity": "Author teaching interface extensions; not new observed data or broker terms",
        "rebalance": {
          "default": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": 0.05,
            "mode": "partial",
            "reason": "drift"
          },
          "limits": {
            "weight": [
              0,
              1
            ],
            "target": [
              0.1,
              0.9
            ],
            "trigger": [
              0.005,
              0.1
            ],
            "destination": [
              0,
              0.1
            ],
            "cost": [
              0,
              0.01
            ],
            "next_return": [
              -0.2,
              0.2
            ]
          },
          "modes": [
            "none",
            "partial",
            "full",
            "contribution"
          ],
          "reasons": [
            "drift",
            "cashflow",
            "target_changed",
            "thesis_changed"
          ],
          "trigger_convention": "Strictly above target+trigger; equality does not trigger in this teaching implementation",
          "contribution_identity": "4000 external new cash placed into bonds, ignoring its own transaction cost; not portfolio return",
          "direction": "Only sell stocks and buy bonds; underweight/inverse trades explicitly unsupported"
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
  "entry_id": "zh-p11",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "common",
  "branch_selection_protocol": "默认只读 required_readings；选中 optional_readings 的具名分支后，追加该条完整 required_unit，实际读完后才教相应分支. 正文保留可展开内容与全部题解.",
  "public_artifacts": {
    "full_inputs": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "full_results": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "result_pointer": "/P11",
    "engine": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/engine.js",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md",
    "static_equivalents": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/static-results.md",
    "original_specifications": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/author-experiments.json"
  },
  "experiment_ids": [
    "EXP-P11-MAINTENANCE-DECISION"
  ]
}
```

## Supplied entry
价格变化造成权重漂移时，再平衡恢复既定配置. 目标或经营依据改变时，则先更新目标，再确定交易；这两类调整采用不同依据.

<a id="p11-policy"></a>
## 触发阈值与目的地

Vanguard在2025-01-23的目标日期基金政策说明中，区分了触发距离与调整目的地：股票配置偏离目标200个基点时触发，其选择的调整后偏离为175个基点，而非总是调回目标. [^policy]

60%股票目标加200个基点，给出62%的上侧阈值；加175个基点，给出61.75%的调整目的地. 交易量由当前持仓和该目的地反算.

> **本篇的政策约定.** 设当前股票权重为 $w$，目标为 $w_*$，上侧触发距离为 $\tau$，目的地距离为 $\delta$. 当 $w-w_*>\tau$ 时，卖股买债，调向 $u=w_*+\delta$；其中 $0\le\delta<\tau$. 恰好等于阈值时，本教学实现暂不触发；这是为计算明确的边界约定，不替代具体管理协议. 完全调回则取 $u=w_*$.

部分调回通常减少本次交易量和费用，但保留更大偏离，下一次触发时间也可能改变. Vanguard 2024研究以10 K条模拟路径比较这些后果，采用指定资产组合，并设不使用现金流或期货.[^research]

<span id="SIM-PE-REBALANCE-01"></span>

<a id="p11-ledger"></a>
## 调整后的资产与费用

现在给一个独立教学组合：股票62,400美元，债券37,600，总额100,000，目标60/40. 股票权重62.4%，比目标高240个基点，超过200的上侧阈值.

设卖股买债的合计费用为卖股金额的20个基点，即 $c=0.002$. 卖出 $x$ 后扣费用 $cx$，其余 $x-cx$ 买债：

$$
S'=62,400-x,\qquad B'=37,600+x-cx,
$$

$$
V'=S'+B'=100,000-cx.
$$

本金在股票与债券之间转移，费用减少总财富，因此调整后的权重使用费用后分母.

<a id="p11-derivation"></a>
## 费用后目标与交易量

希望交易后股票权重为 $u$，便要满足 $(S-x)/(V-cx)=u$. 移项得到 $S-x=uV-ucx$，所以

$$
x=\frac{S-uV}{1-uc}.
$$

该关系适用于股票超配、卖股买债：$S/V\ge u$、$0\le c<1$，并检验 $0\le x\le S$、$V-cx>0$. 反向调整须按卖债买股的费用基数另建资金关系.

部分调回时，$u=61.75\%$，于是

$$
x=\frac{62,400-61.75\%\times100,000}{1-61.75\%\times0.002}
\approx650.804.
$$

费用约1.302，买债约649.502，交易后股票约61,749.196、债券约38,249.502，总额约99,998.698. 用新总额相除，股票恰为61.75%.

完全调回时，$u=0.60$，卖出额约2,402.883，费用约4.806，买债约2,398.078，股票约59,997.117、债券约39,998.078，总额约99,995.194，股票恰为60%.

| 立即选择的动作 | 卖股金额 | 合计费用 | 买债金额 | 交易后总额 | 股票权重 |
|---|---:|---:|---:|---:|---:|
| 不调整 | 0 | 0 | 0 | 100,000.000 | 62.40% |
| 部分调至61.75% | 650.804 | 1.302 | 649.502 | 99,998.698 | 61.75% |
| 完全调至60% | 2,402.883 | 4.806 | 2,398.078 | 99,995.194 | 60.00% |

无费用时，部分调整卖650，完全调整卖2,400；纳入费用后，达到同一目标权重需多卖一部分股票.

<a id="p11-alternatives"></a>
## 后续回报与新增资金

我们再给两个明确的教学后续：下一期债券不变，股票分别涨5%或跌5%. 沿交易后的持仓计算 $W_1=S'(1+r_S)+B'(1+r_B)$，得到

| 动作 | 下一期股票+5%、债券0 | 下一期股票−5%、债券0 |
|---|---:|---:|
| 不调整 | 103,120.000 | 96,880.000 |
| 部分调回 | 103,086.158 | 96,911.239 |
| 完全调回 | 102,995.050 | 96,995.338 |

上涨路径中保留较多股票的财富更高，下跌路径中减少较多股票的财富更高. 再平衡政策在事前权衡目标偏离和交易成本，以上两条路径显示其不同后果.

还有第四条路径：账户得到外部新增4,000，全部买债. 在暂不计这笔新投入的交易费用时，股票仍为62,400，总资产104,000，股票权重 $62,400/104,000=60\%$. 无需卖股也可以修复权重，但代价是使用了新的资本.

外部转入4,000使本金与财富同时增加，转入时净损益为0. 下一期股票涨5%时总财富107,120，其中仍含这笔新增资本. 多日期评价按现金流实际日期计算回报.

<a id="p11-maintenance"></a>
## 判断与目标更新

维护记录保留原目标和依据版本、新事实及可得时间、受影响的假设或约束、拟议动作与成交条件，以及不操作的比较结果.

价格上涨而经营判断未变，更新权重和条件回报；关键经营依据失效，重审受影响的判断和目标；付款义务提前，重排现金；政策或基准更新，采用新目标配置.

到期合约还需维护交割、展期和融资安排. 止损指令属于执行规则，触发后的成交依可得价格.[^orders]

<details id="p11-index-branch">
<summary>选读：Nasdaq特别再平衡的四个不同日期</summary>

<span id="EVENT-PE-NDX-20230724"></span>

<a id="p11-index-event"></a>

Nasdaq在2023-07-07公告，拟于7月24日开市前实施Nasdaq-100特别再平衡；采用7月3日的在外指数股份作为参考，计划7月14日发布调整后的指数股份和pro-forma文件，并说明不增删成分股. [^nasdaq]

| 日期 | 在该公告中的身份 |
|---|---|
| 2023-07-03 | 计算所采用的参考日 |
| 2023-07-07 | 决定向公众公告 |
| 2023-07-14 | 公告计划的新股份／pro-forma发布日 |
| 2023-07-24开市前 | 公告所定生效时间 |

本公告7月7日公开，采用7月3日参考数据，并安排7月14日发布文件、7月24日生效. 成分股名单保持不变，指数权重变化仍可要求跟踪者调整.

**迁移题.** 能否从7月3日开始给“已知这次特别再平衡”的策略记收益？

**解析.** 按所用公告，决定到7月7日才公开；7月3日只为计算参考日，回测的信息集合应从公开时点纳入决定.

</details>

<a id="p11-lab"></a>
## 维护与再平衡实验

维护练习分别改变触发阈值、目的地、费用和“关键判断改变”状态：阈值决定是否触发，目的地只在触发后决定目标权重，费用改变交易额与费用后总额；若承重判断变化，先更新目标再执行旧阈值规则.

<div data-experiment-slot="EXP-P11-MAINTENANCE-DECISION"></div>

**解释题.** 目标60%、规则200/175、当前62.4%，为什么不能直接卖1,750美元？

**解析.** 175个基点为目标外保留距离，目的地61.75%. 当前权重到目的地差0.65个百分点，按费用后分母求得卖出约650.804；卖1,750会越过该目的地.

**迁移题.** 当前股票权重改为61.8%，仍是200/175，其他条件不变. 是否应先算出一个正出售量，再执行？

**解析.** 61.8%仅偏离目标180个基点，未触发，交易量为0. 本例采用严格超过阈值的规则，恰好62%也不触发.

**判断题.** A组合权重62.4%，经营判断未变；B组合权重60%，一项承重经营证据已被反驳. 谁更需要重新研究？

**解析.** A按现有目标检查阈值、成本和约束；B重审已受反证影响的经营判断，即使权重仍为60%.

**反向边界题.** 股票低配至58%，把上面的公式算出负交易额后，能否直接买入相应绝对金额？

**解析.** 原式按卖股额计费用，并从买债资金扣除；反向交易需要重新定义卖债净所得、费用基数和买股金额.

[^policy]: Vanguard，*Vanguard’s approach to target-date fund rebalancing*，2025-01-23；“Selecting a TDF rebalancing approach”及“Vanguard’s approach”正文. 200/175按该日期的管理政策解释；本篇采用政策正文和Figure 1的定义. [原文](https://workplace.vanguard.com/insights-and-research/perspective/vanguards-approach-to-target-date-fund-rebalancing.html).
[^research]: Yu Zhang、Harshdeep Ahluwalia、Ankul Daga、Yiran Zi，*The rebalancing edge*，Vanguard Research，2024-12；pp.2–3阈值与Figure 1、p.4框架、pp.5–6模型输入及图注、p.7成本单元. 模拟研究与本篇合成组合分开. [原文](https://corporate.vanguard.com/content/dam/corp/research/pdf/the_rebalancing_edge_optimizing_target_date_fund_rebalancing_through_threshold_based_strategies.pdf#page=2).
[^orders]: SEC，*Understanding Order Types – Investor Bulletin*，更新2026-08-18，“Stop Orders”. [原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14).
[^nasdaq]: Nasdaq，*The Nasdaq-100 Index Special Rebalance to be Effective July 24, 2023*，公告2023-07-07，事件正文三段. [原文](https://ir.nasdaq.com/node/106481).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P11-MAINTENANCE-DECISION",
    "node_id": "P11",
    "title": "再平衡、退出与判断维护：操作实验",
    "anchor": "p11-lab",
    "description": "把触发与目的地、费用后的交易量、外部新资本和判断更新分别放回同一维护过程.",
    "inputs": {
      "shared_input_id": "PE-DRAFT-INPUTS-20260921-v1",
      "frozen_case_keys": [
        "rebalance",
        "index_event"
      ],
      "controls": {
        "default": {
          "weight": 0.624,
          "target": 0.6,
          "trigger": 0.02,
          "destination": 0.0175,
          "cost": 0.002,
          "next_return": 0.05,
          "mode": "partial",
          "reason": "drift"
        },
        "limits": {
          "weight": [
            0,
            1
          ],
          "target": [
            0.1,
            0.9
          ],
          "trigger": [
            0.005,
            0.1
          ],
          "destination": [
            0,
            0.1
          ],
          "cost": [
            0,
            0.01
          ],
          "next_return": [
            -0.2,
            0.2
          ]
        },
        "modes": [
          "none",
          "partial",
          "full",
          "contribution"
        ],
        "reasons": [
          "drift",
          "cashflow",
          "target_changed",
          "thesis_changed"
        ],
        "trigger_convention": "Strictly above target+trigger; equality does not trigger in this teaching implementation",
        "contribution_identity": "4000 external new cash placed into bonds, ignoring its own transaction cost; not portfolio return",
        "direction": "Only sell stocks and buy bonds; underweight/inverse trades explicitly unsupported"
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
      "current_stock=100000×weight；target、trigger、destination分别给定，严格超过上侧阈值才触发.",
      "仅卖股买债：0≤destination<trigger；低配拒绝反向量；thesis/target_changed先返回needs-judgment.",
      "已触发partial的u=target+destination，full的u=target；x=(S−uV)/(1−u×c).",
      "成本c×x一次；S′=S−x，B′=B+x−c×x，V′=V−c×x；以V′求权重.",
      "contribution固定外部4000进入债券，本分支忽略该新增投入交易成本，即时净损益0.",
      "next财富=S′(1+r)+B′；新资本分支按V+4000资金基数说明，不把本金视为收益."
    ],
    "boundaries": [
      "no negative sell amount",
      "no trigger at equality under explicit convention",
      "no action before trigger",
      "0<=cost<=.01",
      "finite/range validation",
      "destination strictly below trigger",
      "changed thesis not automatic no-action advice"
    ],
    "outputs": [
      {
        "mode": "none",
        "up": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": 0.05,
            "mode": "none",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "no-trade",
          "sale": 0,
          "cost": 0,
          "bond_purchase": 0,
          "external_contribution": 0,
          "stock": 62400,
          "bond": 37600,
          "total": 100000,
          "post_weight": 0.624,
          "wealth": 103120,
          "next_return_on_funded_capital": 0.031199999999999894,
          "instant_net_gain": 0,
          "message": "选择不调整，保留原敞口."
        },
        "down": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": -0.05,
            "mode": "none",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "no-trade",
          "sale": 0,
          "cost": 0,
          "bond_purchase": 0,
          "external_contribution": 0,
          "stock": 62400,
          "bond": 37600,
          "total": 100000,
          "post_weight": 0.624,
          "wealth": 96880,
          "next_return_on_funded_capital": -0.031200000000000006,
          "instant_net_gain": 0,
          "message": "选择不调整，保留原敞口."
        }
      },
      {
        "mode": "partial",
        "up": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": 0.05,
            "mode": "partial",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "traded",
          "sale": 650.8037426221456,
          "cost": 1.3016074852442912,
          "bond_purchase": 649.5021351369013,
          "external_contribution": 0,
          "stock": 61749.19625737785,
          "bond": 38249.50213513691,
          "total": 99998.69839251475,
          "post_weight": 0.6174999999999999,
          "wealth": 103086.15820538366,
          "next_return_on_funded_capital": 0.03086158205383671,
          "instant_net_gain": -1.3016074852442912,
          "message": "按费用后目的地计算卖股买债."
        },
        "down": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": -0.05,
            "mode": "partial",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "traded",
          "sale": 650.8037426221456,
          "cost": 1.3016074852442912,
          "bond_purchase": 649.5021351369013,
          "external_contribution": 0,
          "stock": 61749.19625737785,
          "bond": 38249.50213513691,
          "total": 99998.69839251475,
          "post_weight": 0.6174999999999999,
          "wealth": 96911.23857964587,
          "next_return_on_funded_capital": -0.030887614203541358,
          "instant_net_gain": -1.3016074852442912,
          "message": "按费用后目的地计算卖股买债."
        }
      },
      {
        "mode": "full",
        "up": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": 0.05,
            "mode": "full",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "traded",
          "sale": 2402.8834601521826,
          "cost": 4.805766920304365,
          "bond_purchase": 2398.077693231878,
          "external_contribution": 0,
          "stock": 59997.11653984782,
          "bond": 39998.07769323188,
          "total": 99995.1942330797,
          "post_weight": 0.6,
          "wealth": 102995.0500600721,
          "next_return_on_funded_capital": 0.02995050060072102,
          "instant_net_gain": -4.805766920304365,
          "message": "按费用后目的地计算卖股买债."
        },
        "down": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": -0.05,
            "mode": "full",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "traded",
          "sale": 2402.8834601521826,
          "cost": 4.805766920304365,
          "bond_purchase": 2398.077693231878,
          "external_contribution": 0,
          "stock": 59997.11653984782,
          "bond": 39998.07769323188,
          "total": 99995.1942330797,
          "post_weight": 0.6,
          "wealth": 96995.3384060873,
          "next_return_on_funded_capital": -0.03004661593912694,
          "instant_net_gain": -4.805766920304365,
          "message": "按费用后目的地计算卖股买债."
        }
      },
      {
        "mode": "contribution",
        "up": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": 0.05,
            "mode": "contribution",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "contribution",
          "sale": 0,
          "cost": 0,
          "bond_purchase": 4000,
          "external_contribution": 4000,
          "stock": 62400,
          "bond": 41600,
          "total": 104000,
          "post_weight": 0.6,
          "wealth": 107120,
          "next_return_on_funded_capital": 0.030000000000000027,
          "instant_net_gain": 0,
          "message": "新增4000为外部资本；该分支忽略新增投入的交易费，不将资本增加当收益."
        },
        "down": {
          "parameters": {
            "weight": 0.624,
            "target": 0.6,
            "trigger": 0.02,
            "destination": 0.0175,
            "cost": 0.002,
            "next_return": -0.05,
            "mode": "contribution",
            "reason": "drift"
          },
          "initial_stock": 62400,
          "initial_bond": 37600,
          "initial_total": 100000,
          "current_weight": 0.624,
          "threshold_weight": 0.62,
          "destination_weight": 0.6174999999999999,
          "triggered": true,
          "identity": "Synthetic cash portfolio applying the threshold/destination distinction in the dated Vanguard policy; not an actual Vanguard portfolio or cost observation",
          "status": "contribution",
          "sale": 0,
          "cost": 0,
          "bond_purchase": 4000,
          "external_contribution": 4000,
          "stock": 62400,
          "bond": 41600,
          "total": 104000,
          "post_weight": 0.6,
          "wealth": 100880,
          "next_return_on_funded_capital": -0.030000000000000027,
          "instant_net_gain": 0,
          "message": "新增4000为外部资本；该分支忽略新增投入的交易费，不将资本增加当收益."
        }
      }
    ],
    "static_equivalent_markdown": "| 路线 | 出售 | 费 | 外部投入 | 费用后总额 | 股票权重 | 股票+5%财富 | 股票−5%财富 |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| none | 0.000000 | 0.000000 | 0 | 100,000.000000 | 0.624000 | 103,120.000000 | 96,880.000000 |\n| partial | 650.803743 | 1.301607 | 0 | 99,998.698393 | 0.617500 | 103,086.158205 | 96,911.238580 |\n| full | 2,402.883460 | 4.805767 | 0 | 99,995.194233 | 0.600000 | 102,995.050060 | 96,995.338406 |\n| contribution | 0.000000 | 0.000000 | 4,000 | 104,000.000000 | 0.600000 | 107,120.000000 | 100,880.000000 |\n\n新增4000财富含新本金，不能与三条原资金路线直接按金额排名. 低配反向交易未实现；恰等阈值不触发.",
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "results_pointer": "/P11",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md"
  }
]
```

## Sources
- [Understanding Order Types — Investor Bulletin](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14): 市价单、限价单的价格与成交条件，以及Day、GTC和IOC等有效期安排.
- [The Nasdaq-100 Index Special Rebalance to be Effective July 24, 2023](https://ir.nasdaq.com/node/106481): 2023公告的参考、公开、计划文件发布与生效四种日期；不包含ETF成交.
- [Vanguard's approach to target-date fund rebalancing](https://workplace.vanguard.com/insights-and-research/perspective/vanguards-approach-to-target-date-fund-rebalancing.html): 2025-01-23机构政策中200bps触发、175bps目的地；排除冲突图像替代文字.
- [The rebalancing edge: Optimizing target-date fund rebalancing through threshold-based strategies](https://corporate.vanguard.com/content/dam/corp/research/pdf/the_rebalancing_edge_optimizing_target_date_fund_rebalancing_through_threshold_based_strategies.pdf): 触发与目的地、收益/成本联合研究框架及模拟条件. 无现金流/期货的研究结果不证明200/175普遍最优.

## Content relations
```json
[
  {
    "from": "zh-p11",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p11",
    "relation": "uses_method",
    "to": "zh-p07",
    "reason": "调用共同可行约束"
  },
  {
    "from": "zh-p11",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "调用截止前资金与账户恒等式"
  },
  {
    "from": "zh-p11",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "调用成交数量与费用"
  },
  {
    "from": "zh-p11",
    "relation": "illustrated_by",
    "to": "SIM-PE-REBALANCE-01",
    "reason": "同源教学算例／有日期原始观察；身份见https://ou-liu-red-sugar.github.io/notebook/labs/p-e/objects.json"
  },
  {
    "from": "zh-p11",
    "relation": "illustrated_by",
    "to": "EVENT-PE-NDX-20230724",
    "reason": "同源教学算例／有日期原始观察；身份见https://ou-liu-red-sugar.github.io/notebook/labs/p-e/objects.json"
  },
  {
    "from": "zh-p11",
    "relation": "supported_by",
    "to": "PE-VANGUARD-RB",
    "reason": "再平衡阈值、目标权重、模拟条件与费用结果.",
    "locator": "pp2–3 definitions and Figure1 notes; p4 framework; pp5–6 The inputs to our forecasting model; p7 Estimated transaction costs and Figure5 notes",
    "scope": "触发与目的地、收益/成本联合研究框架及模拟条件. 无现金流/期货的研究结果不证明200/175普遍最优."
  },
  {
    "from": "zh-p11",
    "relation": "supported_by",
    "to": "PE-VANGUARD-POL",
    "reason": "以真实机构选择解释200/175的两个不同数字",
    "locator": "Selecting a TDF rebalancing approach; Vanguard’s approach; Figure1 notes",
    "scope": "2025-01-23机构政策中200bps触发、175bps目的地；排除冲突图像替代文字."
  },
  {
    "from": "zh-p11",
    "relation": "supported_by",
    "to": "PE-NASDAQ-NDX",
    "reason": "区分参考、公告、计划文件发布与生效日期",
    "locator": "Event announcement three paragraphs",
    "scope": "2023公告的参考、公开、计划文件发布与生效四种日期；不包含ETF成交.",
    "branch": "index-event"
  },
  {
    "from": "zh-p11",
    "relation": "supported_by",
    "to": "MA-ORDERS",
    "reason": "判断触发和订单执行的区别",
    "locator": "Stop Orders; Stop-Limit Orders",
    "scope": "订单的价格/成交保证区别与有效期；本篇盘口和执行数列另为合成数据.",
    "branch": "order-trigger"
  },
  {
    "from": "p11-lab",
    "relation": "illustrated_by",
    "to": "EXP-P11-MAINTENANCE-DECISION",
    "at_section": "p11-lab",
    "reason": "把触发与目的地、费用后的交易量、外部新资本和判断更新分别放回同一维护过程."
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 8/9
区分触发和目的地，推导费用后的交易量并维护判断.
安排实施后，用一致的资金与费用口径评价表现.
Next: [表现评价与归因：资金、费用与基准](https://ou-liu-red-sugar.github.io/zh/notebook/performance-attribution-and-fee-recognition/)
