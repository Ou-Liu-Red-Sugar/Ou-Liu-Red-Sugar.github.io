# 情景概率：状态集合、证据与更新

先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率.

Entry: zh-p05 | Node: P05 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 固定观察窗口及AWS/非AWS状态判别，重建四类分区与证据权重记录. 推导联合强状态0至30%界限和Brier严格适当性，比较权重变化与类内结果变化. 迁移到固定概率下增加模拟样本的误差. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

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
      "source_id": "PBCD-METHOD-RR",
      "title": "业务状态下的条件定价、普通股桥与Risk-Reward",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "pm-conditional-rr-states-and-probability",
        "scope": "完整状态与概率节",
        "purpose": "分区、粗依据、可行替代"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.",
      "authors": [
        "本站方法"
      ]
    },
    {
      "source_id": "PBCD-CASE-AMZN",
      "title": "Amazon：2026-09-20历史条件研究案例",
      "version": "研究截止2026-09-20；教学摘编2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "case-amzn-probabilities",
        "scope": "完整状态映射与权重证据记录",
        "purpose": "按业务而非价格归类"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.",
      "authors": [
        "本站历史研究"
      ]
    },
    {
      "source_id": "PBCD-SILVA-CALIBRATION-2023",
      "title": "Classifier calibration: a survey on how to assess and improve predicted class probabilities",
      "version": "Machine Learning112,2023,DOI10.1007/s10994-023-06336-7",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s10994-023-06336-7"
      },
      "required_unit": {
        "locator": "§2.3、§3和§3.1",
        "scope": "完整定义及Brier/properness单元，式1–2",
        "purpose": "评分约定和非直接校准边界"
      },
      "supports": "多分类概率校准、未除以2的Brier及properness；单次得分不是校准直接证明，分类器论文不生成公司主观权重.",
      "authors": [
        "Telmo Silva Filho",
        "et al."
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_id": "CASE-AMZN-20260920",
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json",
    "identity": "冻结2026-09-20输入；不同JSON字段保留事实/假设/条件结果身份",
    "selected_keys": [
      "case_id",
      "metadata",
      "states",
      "probabilities",
      "state_classification",
      "probability_evidence",
      "identity_notes",
      "teaching_examples"
    ],
    "data": {
      "case_id": "CASE-AMZN-20260920",
      "metadata": {
        "information_cutoff": "2026-09-20",
        "purchase_date": "2026-09-18",
        "valuation_date": "2029-12-31",
        "purchase_price": 253.71,
        "currency": "USD",
        "money_unit": "billion",
        "share_unit": "billion",
        "quote_type": "regular_close",
        "quote_time": "16:00 EDT",
        "years": 3.2854209445585214,
        "cash_distributions": 0,
        "original_shareholder_additional_cash": 0,
        "result_identity": "历史研究的未来条件结果；不是当期目标价；期间分配为零；救援发行不等于原股东强制追加现金"
      },
      "states": [
        "Bull",
        "Base",
        "Bear",
        "Tail"
      ],
      "probabilities": {
        "adopted": {
          "Bull": 0.31,
          "Base": 0.44,
          "Bear": 0.2,
          "Tail": 0.05
        },
        "capital_pressure": {
          "Bull": 0.2,
          "Base": 0.42,
          "Bear": 0.3,
          "Tail": 0.08
        },
        "platform_durable": {
          "Bull": 0.37,
          "Base": 0.43,
          "Bear": 0.16,
          "Tail": 0.04
        },
        "mixed_retail_pressure": {
          "Bull": 0.27,
          "Base": 0.41,
          "Bear": 0.26,
          "Tail": 0.06
        }
      },
      "state_classification": {
        "business_states": [
          "S",
          "N",
          "W",
          "X"
        ],
        "matrix": [
          [
            "Bull",
            "Bull",
            "Base",
            "Bear"
          ],
          [
            "Bull",
            "Base",
            "Base",
            "Bear"
          ],
          [
            "Base",
            "Bear",
            "Bear",
            "Tail"
          ],
          [
            "Bear",
            "Bear",
            "Tail",
            "Tail"
          ]
        ],
        "row": "AWS",
        "column": "整合非AWS",
        "horizon": "2026-09-20可用信息下的2026H2–2029经营路径",
        "definitions": {
          "S": "采用/收入与资本转化较强；同时保留支出和企业响应",
          "N": "主要机制按研究基准兑现，仍承担竞争、资本及更新需要",
          "W": "兑现、单位经济或资本转化受挫，仍有经营与修复能力",
          "X": "客户融资/使用、既有能力或普通股权利严重受损"
        },
        "boundary_rule": "先依业务条件定S/N/W/X，再按矩阵. Tail格优先、其次Bull与Bear、余格Base；不是按终价分档. 原研究未给硬数字阈值；边界不清先记录未定类，不事后按股价改类."
      },
      "probability_evidence": [
        {
          "stage": "机制起点",
          "weights": [
            0.24,
            0.46,
            0.24,
            0.06
          ],
          "reason": "两组大型正利润经营，资本扩张阶段；成功与失配先作粗对称判断",
          "identity": "研究起点，不是样本频率"
        },
        {
          "stage": "资本与物理兑现",
          "weights": [
            0.2,
            0.45,
            0.28,
            0.07
          ],
          "reason": "前置建设、供电与使用时滞，提高失配权重"
        },
        {
          "stage": "需求与存量留存",
          "weights": [
            0.29,
            0.43,
            0.23,
            0.05
          ],
          "reason": "最近三期需求加速及迁移摩擦支持需求持续；并不保证计费量"
        },
        {
          "stage": "恢复及混合状态",
          "weights": [
            0.31,
            0.44,
            0.2,
            0.05
          ],
          "reason": "容纳修复、创新和业务不同时好坏的共同状态；采用的粗分布"
        }
      ],
      "identity_notes": {
        "market_debt": "期末有息借款余额（模型口径），不是未来债券市场公允价值",
        "cash": "期末账面可用现金/证券模型余额，经营保留未被支出",
        "finance_claims": "融资租赁及融资义务；与有息借款分列",
        "investment_net": "已扣模型实现税的非经营投资；不是流动性储备",
        "other_claims": "模型取0；未作全体潜在权利为零的审计结论",
        "pricing_range": "同一经营/资金路径的定价参数范围；不是置信区间或条件支持",
        "probability": "主观粗判断，不是统计后验；按钮操作不新增研究证据",
        "quarters": "每季已继承此前融资；融资前余额不是全期无融资轨迹，也不保证季内资金充足",
        "quote_vs_cutoff": "9月18日参考进入价格，9月20日研究信息截止；无实际成交或仅用9月18日信息的样本外回测声明.",
        "share_count_proxy": "11.0274 B 股是冻结模型规划代理：10.783普通股 + 0.2444 outstanding RSU；公司另披露普通股加全部 outstanding stock awards 对应股份约11.0 B 股. 该代理不是官方完全稀释股数，也不是EPS加权平均股数."
      },
      "teaching_examples": {
        "mixed_equity_bridge": {
          "industrial_ev": 600,
          "industrial_debt": 120,
          "bank_equity": 200,
          "bank_debt_already_in_equity": 1000,
          "nonoperating_cash": 30,
          "parent_debt": 40,
          "shares": 10,
          "common_equity": 670,
          "price": 67,
          "identity": "纯教学设定；不是任何公司披露"
        },
        "brier": {
          "hypothetical_observation": "Base",
          "adopted": 0.4522,
          "capital_pressure": 0.4728,
          "normalization": "sum over four classes, no one-half; range0–2"
        }
      }
    }
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [
    "EXP-P05-PROBABILITY-LEDGER"
  ],
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
情景权重分配给一类未来状态. 赋权之前，需要固定观察窗口、分类规则和支撑每类状态的经营证据.

以下采用2026年9月20日 Amazon 历史研究的主观情景判断，展示状态划分、权重更新与事后评分.[^case]

<a id="p05-states"></a>
## 状态集合与代表路径

代表路径中的2029 AWS 收入337、经营利润约113.57，描述该状态的一种结果. 概率对应客户采用、单位变现、资本转化和普通股权利组成的状态集合.

设观察窗口固定为2026年9月20日至2029年末，未来状态空间为 $\Omega$. 四类集合 $S_B,S_N,S_W,S_X$ 要形成分区：互不重叠、并集为 $\Omega$. 概率 $p_s=P(S_s)$ 才满足 $p_s\ge0$、$\sum_sp_s=1$. 每条代表路径只描述该类中的一个代表结果，不要求所有属于该类的公司未来恰好实现同一个收入.

历史案例分别定义 AWS 与非AWS的强S、正常N、弱W、严重受损X：S表示采用和资本转化较强；N允许增长、竞争与资本负担并存；W仍有经营基础，但需求、成本或资本转化受挫；X表示经营或权利结构严重受损. 按这些经营条件归类.[^method]

然后按下表归入公司层四类. 行是 AWS，列是非AWS. 案例约定优先判断Tail，再Bull，再Bear，其余Base，避免同一事实叙述被重复归类.

| AWS \ 非AWS | S 强 | N 正常 | W 弱 | X 严重受损 |
|---|---|---|---|---|
| S 强 | Bull | Bull | Base | Bear |
| N 正常 | Bull | Base | Base | Bear |
| W 弱 | Base | Bear | Bear | Tail |
| X 严重受损 | Bear | Bear | Tail | Tail |

AWS强、零售弱在此映射中属于Base；AWS严重受损、平台弱属于Tail. 表中覆盖16种业务标签组合，公司层概率分配给其归并后的四类状态.

分类边界需要可核事实. 信息尚不足以区分相邻状态时，记录候选归类及所缺证据；事后评分沿预先固定的判别规则处理边界.

<a id="p05-joint"></a>
## 共同条件与联合概率

AWS和零售共享融资环境及部分客户预算，同时在客户结构、成本和产品周期上存在差异. 联合概率需要反映这些共同与独有条件.

假设另一个纯教学问题里，AWS处于强状态的边际概率为40%，零售处于强状态为30%. 仅凭这两数，联合强状态的概率只能满足

$$
\max(0,0.4+0.3-1)\le P(A\cap R)\le\min(0.4,0.3),
$$

上下界为0与30%：下界来自 $P(A\cup R)\le1$，上界来自交集包含于各事件. 额外假设独立时才得到12%. 共同资本冲击可能同时削弱两项业务，云需求变化则可能主要影响 AWS.

按16格等权会让类别划分本身决定概率：将某一弱状态再拆成两格，就增加了其总权重. 权重应依据对应状态的证据确定.

<a id="p05-evidence"></a>
## 权重依据与可行替代

记录参考类或机制起点、当前证据、调整理由、采用权重与替代，以及下一次观察. 参考类的可比性取决于技术、规模及资本结构.

以下为当时的主观权重更新，顺序对应证据进入判断的次序.[^case]

| 当时处理的内容 | Bull / Base / Bear / Tail |
|---|---|
| 机制起点：两组大型正利润业务，同时处于资本扩张期 | 24 / 46 / 24 / 6 |
| 纳入资本先行与实际交付风险 | 20 / 45 / 28 / 7 |
| 纳入三期需求变化与留存机制 | 29 / 43 / 23 / 5 |
| 纳入可恢复机制与混合状态后采用 | **31 / 44 / 20 / 5** |

证据先对应经营关系，再判断它改变状态发生机会还是类内结果. 迁移摩擦主要支持留存机制；修正折旧计算首先改变同一状态下的条件利润. 只有修正同时揭示新的状态证据，才调整概率.

三组替代权重为：资本压力20/42/30/8，平台耐久37/43/16/4，零售压力27/41/26/6. 每组非负且合计100%，分别表示一套共同可行的判断.

若采用各类概率区间，应将完整向量约束为非负且和为1. 比较结论时，在这一可行集合中选择替代向量.

<a id="p05-update"></a>
## 权重与类内结果更新

权重不确定性涉及各类状态的发生机会；类内结果不确定性涉及给定状态中的收入、资本及普通股所得范围. 模拟将这些输入传播为结果分布.

更新记录给出新材料、受影响的经营关系、状态依据、前后权重及下一观察时点. 股价变化可影响买入回报，但经营状态的概率调整需要相应经营证据.

保存旧版本，并在观察结果前固定状态判别与边界处置规则，才能区分事前预测和事后解释.

<a id="p05-score"></a>
## Brier评分

对实现类的one-hot向量 $y$，采用未除以2的多分类 Brier 分数：

$$
BS(p,y)=\sum_s(p_s-y_s)^2.
$$

该分数在概率单纯形上介于0与2，越小越好.[^score]

设真实条件分布为 $q$，报告的概率向量为 $p$，则

$$
\begin{aligned}
\mathbb{E}_q[BS(p,Y)]
&=\sum_s\{p_s^2-2p_sq_s+q_s\}\\
&=\sum_s(p_s-q_s)^2+1-\sum_sq_s^2.
\end{aligned}
$$

最后两项与 $p$ 无关，第一项在且仅在 $p=q$ 时为零. 因而期望评分由真实条件概率唯一最小化.

设未来被判为Base. 采用分布的分数为 $0.31^2+(0.44-1)^2+0.20^2+0.05^2\approx0.452$；资本压力分布约为0.473. 前者在这一结果下得分更低，但单次实现不能判断长期校准性.

校准评估需要一系列定义、期间和信息边界可比的预测. 概率可靠性与区分不同风险对象的能力分别评价.[^score]

<a id="p05-experiment"></a>
## 权重与评分实验

<div data-experiment-slot="EXP-P05-PROBABILITY-LEDGER"></div>

实验可将一部分概率从Bull移到Bear，保持Base/Tail不变，转移量不超过Bull原权重.

评分的假设实现类默认为Base. 改变实现类时保留事前权重，用同一评分公式比较结果.

<a id="p05-exercises"></a>
## 练习与解析

**解释题.** 同一条Base经营关系修正折旧后，利润减少. 是否一定要再次把Base权重下调？

**解析.** 成本计算修正先改变条件结果；若它同时揭示新的经营事实或机制，再根据新增证据调整状态权重.

**计算题.** 在采用权重中把5个百分点从Bull移给Bear，其余不变. 新权重是否合法？若假设Base实现，Brier是多少？

**解析.** 新向量为(0.26,0.44,0.25,0.05)，非负且和为1. 分数 $0.26^2+0.56^2+0.25^2+0.05^2\approx0.446$. Base权重不变，另外两类的权重更接近，使平方项之和下降；评分比较覆盖整个概率向量.

**迁移题.** 有人把10 K 个模拟样本增加到10 M 个，然后说31%的Bull概率现在更可信. 应如何区分两件事？

**解析.** Bull概率31%作为输入保持固定，增加抽样次数只降低模拟频率的抽样误差. 状态概率本身的依据仍来自参考类、机制及观察.

[^case]: [CASE-AMZN-20260920的状态与证据记录](/zh/notebook/amzn-research-20260920/#case-amzn-probabilities). 权重与分类版本为2026-09-20.
[^method]: [状态与概率短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-states-and-probability).
[^score]: Telmo Silva Filho等，Classifier calibration: a survey on how to assess and improve predicted class probabilities，Machine Learning 112，2023，§2.3、§3及§3.1，式(1)(2)与properness/分解讨论. [开放正文](https://link.springer.com/article/10.1007/s10994-023-06336-7).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P05-PROBABILITY-LEDGER",
    "title": "情景概率：状态集合、证据与更新",
    "anchor": "p05-experiment",
    "description": "先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率.",
    "inputs": {
      "aws_state": {
        "allowed": [
          "S",
          "N",
          "W",
          "X",
          "?"
        ],
        "default": "N"
      },
      "retail_state": {
        "allowed": [
          "S",
          "N",
          "W",
          "X",
          "?"
        ],
        "default": "N"
      },
      "weight_id": {
        "allowed": [
          "adopted",
          "capital_pressure",
          "platform_durable",
          "mixed_retail_pressure"
        ],
        "default": "adopted"
      },
      "delta": {
        "min": 0,
        "max": "selected Bull probability",
        "default": 0
      },
      "hypothetical_outcome": {
        "allowed": [
          "Bull",
          "Base",
          "Bear",
          "Tail"
        ],
        "default": "Base"
      }
    },
    "outputs": {
      "class": "frozen16-cell classification or unresolved",
      "weights": "full four probabilities",
      "brier": "sum(p−onehot)^2, no1/2"
    },
    "units": {
      "money": "USD billion for company amounts; USD per share for outcomes",
      "shares": "billion",
      "probabilities": "fractions summing to one"
    },
    "identity": "frozen dated research or explicitly marked bounded teaching arithmetic",
    "static_equivalent": {
      "reader": "https://ou-liu-red-sugar.github.io/zh/notebook/scenario-probabilities-evidence-updates/#p05-experiment",
      "lab": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/interactions.html#EXP-P05-PROBABILITY-LEDGER",
      "without_javascript": "正文保留默认结果、计算关系与主要对照."
    },
    "algorithm": "engine.classify/weights/brier；教学转移只Bull→Bear，Base/Tail不动；操作历史不更改研究.",
    "boundaries": [
      "概率和≠1直接拒绝，非自动归一化",
      "NaN/negative/unknown states拒绝",
      "?保留证据不足",
      "一次假设结果得分不是校准证明"
    ],
    "default_values": {
      "class": "Base",
      "weights": {
        "Bull": 0.31,
        "Base": 0.44,
        "Bear": 0.2,
        "Tail": 0.05
      },
      "brier": 0.4522
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json"
  }
]
```

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): Amazon 历史研究的事实、分析代理、四条未来路径、5 项替代、4 套权重和 16 组已算分布. 价格使用固定研究时点报价；各情景数值是代表点.
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.
- [Classifier calibration: a survey on how to assess and improve predicted class probabilities](https://link.springer.com/article/10.1007/s10994-023-06336-7): 多分类概率校准、未除以 2 的 Brier 分数及 properness. 概率校准考察一系列预测与实际频率的关系.

## Content relations
```json
[
  {
    "from": "zh-p05",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  },
  {
    "relation": "requires",
    "to": "zh-p04",
    "reason": "本篇承重步骤实际使用该能力",
    "required_competence": "能定义共同经营状态而不是只有四个价格",
    "from": "zh-p05"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmconditionalrr",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p05"
  },
  {
    "relation": "illustrated_by",
    "to": "zh-amzn-research-20260920",
    "reason": "固定日期案例；不新建第二个别名案例",
    "period": "2025Q4–2029",
    "cutoff": "2026-09-20",
    "from": "zh-p05"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-SILVA-CALIBRATION-2023",
    "reason": "多分类概率校准、未除以2的Brier及properness；单次得分不是校准直接证明，分类器论文不生成公司主观权重.",
    "locator": "§2.3; §3 and §3.1, equations1–2",
    "scope": "实际取得指定定义和完整评分/Brier单元；本课期望分数的代数证明另行展示，未复现论文实证.",
    "optional": false,
    "from": "zh-p05"
  },
  {
    "relation": "informs",
    "to": "zh-p31",
    "reason": "提供共同可行的状态粗权重，不从终点价格倒推",
    "from": "zh-p05"
  },
  {
    "from": "p05-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P05-PROBABILITY-LEDGER",
    "at_section": "p05-experiment",
    "reason": "先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率."
  }
]
```

## Related entries
