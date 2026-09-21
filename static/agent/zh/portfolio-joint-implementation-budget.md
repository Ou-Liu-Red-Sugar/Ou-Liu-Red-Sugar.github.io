# 组合实施：风险、资金与可成交规模的联合预算

逐项检验整数数量的情景损失、账户余额、到账截止和成交深度，允许可行集合为空.

Entry: zh-p07 | Node: P07 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 求0–3张MES的损失、初始余额、现金截止和深度交集. 完整核3张逐日应补、实补及D3缺口；再比较190,000股票配2张与6,000提前到账，守恒记录每个资金池. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

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
      "source_id": "MA-MES",
      "title": "Micro E-mini Equity Index Futures FAQ",
      "version": "current page read 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2, Q5, Q6, Q9, Q10, Q14",
        "scope": "各完整问答",
        "purpose": "取得MES乘数、跳动、结算和保证金可变性；不采历史示例名义额为现值"
      },
      "supports": "MES每点5美元、0.25点跳动、代码/结算与保证金可变；不提供本文教学费率或当前保证金.",
      "authors": [
        "CME Group"
      ],
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-FSB",
      "title": "Liquidity Preparedness for Margin and Collateral Calls: Final report",
      "version": "2024-12-10",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fsb.org/uploads/P101224-1.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.3; Recommendations 6–8; printed pp18–20 / PDF pp22–24",
        "scope": "完整一节",
        "purpose": "识别现金调用的时间/地点/币种与操作可用性"
      },
      "supports": "Recommendations6–8的资源可用性、haircut、币种/地点/截止与操作准备；不是零售统一账户规则.",
      "authors": [
        "Financial Stability Board"
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
      "frozen.joint_budget",
      "extensions.budget"
    ],
    "data": {
      "id": "PE-DRAFT-INPUTS-20260921-v1",
      "version": "2026-09-21-v1",
      "frozen": {
        "package_id": "P-E-PRIMARY-20260921",
        "research_cutoff": "2026-09-21",
        "identity": "Public-source teaching support, not account or historical execution data",
        "joint_budget": {
          "id": "SIM-PE-BUDGET-01",
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "source_id": "PE-CME-MES",
          "currency": "USD",
          "basket_value": 200000,
          "basket_reduced_value": 190000,
          "futures_multiplier": 5,
          "execution_index_level": 4500,
          "max_entry_contracts_at_accepted_price": 3,
          "entry_fee_per_contract": 2,
          "exit_fee_per_contract": 2,
          "fcm_cash_initial": 6000,
          "initial_margin_per_contract": 1750,
          "timely_external_cash_total": 8000,
          "late_external_cash": 6000,
          "late_cash_time": "D3 10:30, after the D3 10:00 call deadline",
          "max_stress_loss": 30000,
          "down": {
            "basket_return": -0.2,
            "futures_final": 3600
          },
          "up": {
            "basket_return": 0.15,
            "daily_settlements": [
              4500,
              4725,
              4950,
              5175
            ],
            "required_balance_per_contract": [
              1750,
              1750,
              2000,
              2200
            ],
            "call_deadlines": [
              "T0 entry",
              "D1 10:00",
              "D2 10:00",
              "D3 10:00"
            ],
            "rule_identity": "Teaching FCM cash-only arrangement: debit each daily variation loss, then restore this day's required balance by its stated deadline; amounts are neither current CME margins nor a real broker agreement"
          }
        }
      },
      "extensions": {
        "identity": "Author teaching interface extensions; not new observed data or broker terms",
        "budget": {
          "default": {
            "basket": 200000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "limits": {
            "contracts": [
              0,
              3
            ],
            "early_budget": [
              0,
              8000
            ],
            "loss_cap": [
              0,
              50000
            ],
            "depth": [
              0,
              3
            ]
          },
          "basket_options": [
            200000,
            190000
          ],
          "release_assumption": "Basket reduced before T0 at stated value, no incremental sale costs; released 10000 is already settled general cash; transfer designation moves this same cash, never creates wealth",
          "early_budget_assumption": "Unused part of original 8000 remains in general cash, not destroyed",
          "late_timing": "Early switch releases the same 6000 only at D3 09:30; default D3 10:30 remains unavailable at all call deadlines",
          "default_initial_total_wealth": 220000
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
  "entry_id": "zh-p07",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "common",
  "branch_selection_protocol": "默认只读 required_readings；选中 optional_readings 的具名分支后，追加该条完整 required_unit，实际读完后才教相应分支. 正文保留可展开内容与全部题解.",
  "public_artifacts": {
    "full_inputs": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "full_results": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "result_pointer": "/P07",
    "engine": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/engine.js",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md",
    "static_equivalents": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/static-results.md",
    "original_specifications": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/author-experiments.json"
  },
  "experiment_ids": [
    "EXP-P07-FEASIBLE-INTEGERS"
  ]
}
```

## Supplied entry
持仓数量要同时满足终点损失、期间现金和成交容量约束. 降低下跌情景损失的期货空头，在上涨过程中可能需要补入现金.

以下对0–3张整数期货求这些约束的共同可行集合.

<span id="SIM-PE-BUDGET-01"></span>

<a id="p07-task"></a>
## 原始敞口与资金池

设一个教学股票篮子价值200,000美元，希望在指定下跌情景中，把平仓后的净损失限制在30,000以内. 可用工具是做空Micro E-mini S&P 500期货，代码MES. CME的合约资料给出每指数点5美元、最小价格跳动0.25点，即每张1.25美元；保证金要求会随条件变化. [^cme]

除MES每点5美元与0.25点最小跳动外，其余价格、数量上限、保证金、费用与到账时间均为教学输入：按4,500点建立空头，最多成交3张；每张开/平仓费各2美元，期货账户现金6,000、每张初始所需余额1,750，另有8,000可按截止调入，6,000到D3 10:30才可用，晚于10:00截止.

| 资产或资金池 | 初始金额，美元 | 作用 |
|---|---:|---|
| 股票篮子 | 200,000 | 原有经济敞口；不是已兑现的期货现金 |
| 期货账户现金 | 6,000 | 支付费用、逐日变动损失，并满足所需余额 |
| 可及时调拨的现金 | 8,000 | 需要时转入期货账户；不与账户余额重复计数 |
| D3 10:30才可调拨的现金 | 6,000 | 属于总资产，但晚于本例最后截止 |
| 合计 | **220,000** | 转账只改变所在地，不产生收益 |

3张初始名义敞口为 $3\times4,500\times5=67,500$. 所需余额5,250留在期货账户，开仓费6减少当时财富.

我们采用两条共同情景. DOWN：股票跌20%，期货从4,500到3,600，随后平仓. UP：股票到终点涨15%，期货沿三个结算日 $4,500\to4,725\to4,950\to5,175$ 上升. 股票与期货的变动都是本例设定，不是由一个固定beta或历史相关性推出来的. UP下，每日先扣空头变动损失，再补到当日所需余额；D1、D2、D3每张分别要求1,750、2,000、2,200. 这是本例的现金调用规则，不是全部期货账户的统一操作方式.

<a id="p07-risk"></a>
## 整数数量与损失约束

令空头张数为 $n$. DOWN中的股票损失40,000；期货每张赚 $(4,500-3,600)\times5=4,500$，进出费用每张共4. 因此组合净损失是

$$
L(n)=40,000-4,500n+4n=40,000-4,496n.
$$

要求 $L(n)\le30,000$，得到 $n\ge10,000/4,496\approx2.224$. 结合整数和最多3张的成交限制，满足这一约束的数量为3张.

<a id="p07-cash"></a>
## 期间现金路径

UP中，每张每天损失 $225\times5=1,125$，3张每天扣3,375. 这笔现金由期货账户支付；股票升值保留在股票资产中.

令 $B_{t-1}$ 为前一日补款后余额，$v_t$ 为当日变动损失，$M_t$ 为要求余额. 补款前余额 $B^-_t=B_{t-1}-v_t$，应补金额 $a_t=\max(0,M_t-B^-_t)$. 当日实际可转入 $u_t$ 时，到账余额为 $B_t=B^-_t+u_t$；若 $u_t<a_t$，余额仍低于要求.

先沿“每次需要补多少”的账走一遍：3张开仓费6，期货现金从6,000变为5,994，满足5,250的初始要求.

| 截止 | 扣变动损失前余额 | 本日变动损失 | 补款前余额 | 当日要求 | 本日应补 | 累计应补 |
|---|---:|---:|---:|---:|---:|---:|
| D1 10:00 | 5,994 | 3,375 | 2,619 | 5,250 | 2,631 | 2,631 |
| D2 10:00 | 5,250 | 3,375 | 1,875 | 6,000 | 4,125 | 6,756 |
| D3 10:00 | 6,000 | 3,375 | 2,625 | 6,600 | 3,975 | 10,731 |

前两日累计补6,756，8,000池剩1,244. D3实际最多转入1,244，期货余额为 $2,625+1,244=3,869$，距6,600要求尚缺2,731. 表中的累计应补10,731高于实际及时可用资金.

资金需要按要求的币种、地点和时间到达.[^fsb] 本例另有6,000在D3 10:30到账，晚于10:00截止，因此该持仓安排在10:00失效；后续需按实际处置价格另记资金和损益.

<a id="p07-feasibility"></a>
## 共同可行集合

把整数数量逐个放回相同输入，得到以下静态结果. 初始要求栏是应保留余额加开仓费，不是两笔费用；累计应补是UP下维持给定持仓所需的资金.

| $n$ | 初始要求＋开仓费 | DOWN平仓净损失 | UP累计应补 | 截止前缺口 | 结论 |
|---:|---:|---:|---:|---:|---|
| 0 | 0 | 40,000 | 0 | 0 | 损失超限 |
| 1 | 1,752 | 35,504 | 0 | 0 | 损失超限 |
| 2 | 3,504 | 31,008 | 5,154 | 0 | 损失超限 |
| 3 | 5,256 | 26,512 | 10,731 | 2,731 | 按时现金不足 |

$n=0$意味着不建立期货，不收期货费用、不占用期货保证金，也不产生追加现金. 它保留股票的40,000下跌损失. $n=2$资金可行，但只把损失降至31,008；$n=3$经济损失过关，资金却不过关. 所以原问题的可行集合为空.

$$
\mathcal F=\{n\in\mathbb Z_{\ge0}: n\le3,\ L(n)\le30,000,\ B_0\ge M_0,\ \text{每次调用都可按期支付}\}.
$$

损失、现金与成交容量各自约束可行集合. 新增现金可以缓解资金缺口，无法增加给定价格的成交数量.

<a id="p07-repair"></a>
## 可行替代

第一种修复是减少原敞口. 假设在开始本实验前，以所示账面值将股票篮子降为190,000；这项教学调整不计额外减仓费用，释放的10,000已成为一般现金. 先**不把它加入期货调拨预算**，仍只用原8,000比较. 于是

$$
L_{190000}(2)=38,000-9,000+8=29,008,
$$

2张UP累计需补5,154，初始要求也满足，因而2张可行. 减仓后资产仍为220,000：190,000股票、10,000一般现金及原三项资金池.

另一安排保留200,000股票与3张期货，使原迟到的6,000在D3 10:00前到账. D3可用现金为1,244加6,000，足以支付3,975. 若改从减仓所得拨款，则同时减少一般现金、增加调拨池.

| 替代 | 股票敞口 | 张数 | 原8,000以外的及时资金 | 是否通过本例约束 | 放弃或改变什么 |
|---|---:|---:|---:|---|---|
| 减篮子且保留一般现金 | 190,000 | 2 | 0 | 通过 | 减少股票参与度，保留10,000一般现金 |
| 原篮子，迟到款提前到D3截止前 | 200,000 | 3 | D3可用6,000 | 通过 | 需要可信的提前到账安排 |

及时完成所有调用并平仓时，UP经济结果为 $30,000-10,125-12=19,863$. 这条终值以期间现金可支付为条件.

<a id="p07-lab"></a>
## 可行集合实验

在[整数仓位与每日现金实验](/notebook/labs/p-e/interactions.html?experiment=EXP-P07-FEASIBLE-INTEGERS#EXP-P07-FEASIBLE-INTEGERS)中比较各张数的失效条件，再改变股票金额或D3资金到账时间. 每笔调拨同时记录资金来源与账户增加.

<div data-experiment-slot="EXP-P07-FEASIBLE-INTEGERS"></div>

**解释题.** 为什么给3张期货的现金准备不能只按初始5,250，再加一次最终净损失来计算？

**解析.** 初始5,250为所需余额. 期间每天支付变动损失，要求余额还上升至6,600，所需追加资金由逐日余额与截止前到账决定.

**迁移题.** 原200,000篮子不变，只把DOWN损失上限放宽到31,500，其余保持默认. 是否出现可行张数？

**解析.** 2张损失31,008，低于31,500上限；UP需补5,154，初始要求及深度也满足. 1张仍超过损失上限，3张仍有资金缺口.

**资金守恒题.** 在190,000篮子变式中，若把释放的10,000全部预先列为可调拨现金，一般现金还能保留10,000吗？

**解析.** 一般现金降至0，及时调拨池从8,000增至18,000，实际补款再从该池移至期货账户. 总资产仍为220,000，再随费用和损益变化.

**执行题.** 若接受价位只剩2张深度，保持原篮子与30,000上限，即使增加现金是否就足够？

**解析.** 允许数量0、1、2均超过损失上限. 新增现金不改变这一结果，需要调整原始敞口、目标、工具或可接受成交价并重新计算.

[^cme]: CME Group，*Micro E-mini Equity Index Futures FAQ*，2026-09-21访问；Q2乘数、Q5最小变动、Q6代码、Q9–10结算、Q14保证金. 本文的4,500点、现金要求和费用均为教学条件. [原文](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html).
[^fsb]: FSB，*Liquidity Preparedness for Margin and Collateral Calls*，2024-12-10；§3.3、Recommendations 6–8，印刷pp.18–20／PDF pp.22–24，讨论资源的币种、地点、时间及操作可用性. [原文](https://www.fsb.org/uploads/P101224-1.pdf#page=22).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P07-FEASIBLE-INTEGERS",
    "node_id": "P07",
    "title": "组合实施：风险、资金与可成交规模的联合预算：操作实验",
    "anchor": "p07-lab",
    "description": "逐项检验整数数量的情景损失、账户余额、到账截止和成交深度，允许可行集合为空.",
    "inputs": {
      "shared_input_id": "PE-DRAFT-INPUTS-20260921-v1",
      "frozen_case_keys": [
        "joint_budget"
      ],
      "controls": {
        "default": {
          "basket": 200000,
          "contracts": 3,
          "early_budget": 8000,
          "late_before_deadline": false,
          "allocate_released": false,
          "loss_cap": 30000,
          "depth": 3
        },
        "limits": {
          "contracts": [
            0,
            3
          ],
          "early_budget": [
            0,
            8000
          ],
          "loss_cap": [
            0,
            50000
          ],
          "depth": [
            0,
            3
          ]
        },
        "basket_options": [
          200000,
          190000
        ],
        "release_assumption": "Basket reduced before T0 at stated value, no incremental sale costs; released 10000 is already settled general cash; transfer designation moves this same cash, never creates wealth",
        "early_budget_assumption": "Unused part of original 8000 remains in general cash, not destroyed",
        "late_timing": "Early switch releases the same 6000 only at D3 09:30; default D3 10:30 remains unavailable at all call deadlines",
        "default_initial_total_wealth": 220000
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
      "枚举整数0..3，在选择深度之外拒绝实际交易；L=−basket×down_return−n×5×(4500−3600)+4n.",
      "初始期货余额6000−2n，保证金为账户要求，不再次扣除.",
      "单独计算足额条件下应补路径a=max(0,M−(B−variation))，得到完整持有所需资金.",
      "实际账每次只从可用池支付min(a,pool)；6000提前开关仅在D3解锁；首个缺口后停止实际持仓路径.",
      "减篮子200000→190000释放10000，一般现金保留；重分配开关把相同现金转到及时池. 减少原及时预算时未指定部分也回一般池.",
      "所有转移守恒，总初始220000；每期全部现金=20000−开仓费−累计变动损失.",
      "UP完整平仓财富仅对已经满足现金与执行条件的路径给出，不能对失败路径续算已实现收益."
    ],
    "boundaries": [
      "n0 zero fees/margin/calls",
      "integer contracts and depth",
      "no negative reserve as implicit borrowing",
      "all released principal retained",
      "late money cannot cure an earlier deadline",
      "no forced-liquidation price assumed"
    ],
    "outputs": {
      "default_candidates": [
        {
          "parameters": {
            "basket": 200000,
            "contracts": 0,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 40000,
          "initial_required": 0,
          "entry_fee": 0,
          "initial_required_plus_fee": 0,
          "exit_fee": 0,
          "cumulative_required": 0,
          "depth_ok": true,
          "risk_ok": false,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": false,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 0,
          "ending_pools": {
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": 249999.99999999997,
          "up_gain_after_close": 29999.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 200000,
            "contracts": 1,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 35504,
          "initial_required": 1750,
          "entry_fee": 2,
          "initial_required_plus_fee": 1752,
          "exit_fee": 2,
          "cumulative_required": 0,
          "depth_ok": true,
          "risk_ok": false,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": false,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 0,
          "ending_pools": {
            "fcm_cash": 2623,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": 246620.99999999997,
          "up_gain_after_close": 26620.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 200000,
            "contracts": 2,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 31008,
          "initial_required": 3500,
          "entry_fee": 4,
          "initial_required_plus_fee": 3504,
          "exit_fee": 4,
          "cumulative_required": 5154,
          "depth_ok": true,
          "risk_ok": false,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": false,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 5154,
          "ending_pools": {
            "fcm_cash": 4400,
            "timely_pool": 2846,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": 243241.99999999997,
          "up_gain_after_close": 23241.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 200000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 26512,
          "initial_required": 5250,
          "entry_fee": 6,
          "initial_required_plus_fee": 5256,
          "exit_fee": 6,
          "cumulative_required": 10731,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": false,
          "feasible": false,
          "first_failure": "D3 10:00",
          "failure_gap": 2731,
          "actual_calls": 8000,
          "ending_pools": {
            "fcm_cash": 3869,
            "timely_pool": 0,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": null,
          "up_gain_after_close": null,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        }
      ],
      "reduced_candidates": [
        {
          "parameters": {
            "basket": 190000,
            "contracts": 0,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 10000,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 0
          },
          "down_loss": 38000,
          "initial_required": 0,
          "entry_fee": 0,
          "initial_required_plus_fee": 0,
          "exit_fee": 0,
          "cumulative_required": 0,
          "depth_ok": true,
          "risk_ok": false,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": false,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 0,
          "ending_pools": {
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "general_cash": 10000
          },
          "up_wealth_after_close": 248499.99999999997,
          "up_gain_after_close": 28499.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 190000,
            "contracts": 1,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 10000,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 0
          },
          "down_loss": 33504,
          "initial_required": 1750,
          "entry_fee": 2,
          "initial_required_plus_fee": 1752,
          "exit_fee": 2,
          "cumulative_required": 0,
          "depth_ok": true,
          "risk_ok": false,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": false,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 0,
          "ending_pools": {
            "fcm_cash": 2623,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "general_cash": 10000
          },
          "up_wealth_after_close": 245120.99999999997,
          "up_gain_after_close": 25120.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 190000,
            "contracts": 2,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 10000,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 0
          },
          "down_loss": 29008,
          "initial_required": 3500,
          "entry_fee": 4,
          "initial_required_plus_fee": 3504,
          "exit_fee": 4,
          "cumulative_required": 5154,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": true,
          "feasible": true,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 5154,
          "ending_pools": {
            "fcm_cash": 4400,
            "timely_pool": 2846,
            "locked_pool": 6000,
            "general_cash": 10000
          },
          "up_wealth_after_close": 241741.99999999997,
          "up_gain_after_close": 21741.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        {
          "parameters": {
            "basket": 190000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 10000,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 0
          },
          "down_loss": 24512,
          "initial_required": 5250,
          "entry_fee": 6,
          "initial_required_plus_fee": 5256,
          "exit_fee": 6,
          "cumulative_required": 10731,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "cash_ok": false,
          "feasible": false,
          "first_failure": "D3 10:00",
          "failure_gap": 2731,
          "actual_calls": 8000,
          "ending_pools": {
            "fcm_cash": 3869,
            "timely_pool": 0,
            "locked_pool": 6000,
            "general_cash": 10000
          },
          "up_wealth_after_close": null,
          "up_gain_after_close": null,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        }
      ],
      "representative_ledgers": {
        "default_n3": {
          "parameters": {
            "basket": 200000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 26512,
          "initial_required": 5250,
          "entry_fee": 6,
          "initial_required_plus_fee": 5256,
          "exit_fee": 6,
          "required_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "required_call": 0,
              "cumulative_required": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "cumulative_required": 2631,
              "balance": 5250
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "cumulative_required": 6756,
              "balance": 6000
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "cumulative_required": 10731,
              "balance": 6600
            }
          ],
          "cumulative_required": 10731,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "actual_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "actual_call": 0,
              "required_call": 0,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 0,
              "cash_total": 19994,
              "cumulative_variation_loss": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "actual_call": 2631,
              "balance": 5250,
              "remaining_timely": 5369,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 2631,
              "cash_total": 16619,
              "cumulative_variation_loss": 3375,
              "gap": 0
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "actual_call": 4125,
              "balance": 6000,
              "remaining_timely": 1244,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 6756,
              "cash_total": 13244,
              "cumulative_variation_loss": 6750,
              "gap": 0
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "actual_call": 1244,
              "balance": 3869,
              "remaining_timely": 0,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 8000,
              "cash_total": 9869,
              "cumulative_variation_loss": 10125,
              "gap": 2731
            }
          ],
          "cash_ok": false,
          "feasible": false,
          "first_failure": "D3 10:00",
          "failure_gap": 2731,
          "actual_calls": 8000,
          "ending_pools": {
            "fcm_cash": 3869,
            "timely_pool": 0,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": null,
          "up_gain_after_close": null,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        "reduced_n2": {
          "parameters": {
            "basket": 190000,
            "contracts": 2,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 10000,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 0
          },
          "down_loss": 29008,
          "initial_required": 3500,
          "entry_fee": 4,
          "initial_required_plus_fee": 3504,
          "exit_fee": 4,
          "required_path": [
            {
              "time": "T0",
              "balance": 5996,
              "required_balance": 3500,
              "required_call": 0,
              "cumulative_required": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 2250,
              "before": 3746,
              "required_balance": 3500,
              "required_call": 0,
              "cumulative_required": 0,
              "balance": 3746
            },
            {
              "time": "D2 10:00",
              "variation_loss": 2250,
              "before": 1496,
              "required_balance": 4000,
              "required_call": 2504,
              "cumulative_required": 2504,
              "balance": 4000
            },
            {
              "time": "D3 10:00",
              "variation_loss": 2250,
              "before": 1750,
              "required_balance": 4400,
              "required_call": 2650,
              "cumulative_required": 5154,
              "balance": 4400
            }
          ],
          "cumulative_required": 5154,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "actual_path": [
            {
              "time": "T0",
              "balance": 5996,
              "required_balance": 3500,
              "actual_call": 0,
              "required_call": 0,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 10000,
              "cash_total": 29996,
              "cumulative_variation_loss": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 2250,
              "before": 3746,
              "required_balance": 3500,
              "required_call": 0,
              "actual_call": 0,
              "balance": 3746,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 10000,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 0,
              "cash_total": 27746,
              "cumulative_variation_loss": 2250,
              "gap": 0
            },
            {
              "time": "D2 10:00",
              "variation_loss": 2250,
              "before": 1496,
              "required_balance": 4000,
              "required_call": 2504,
              "actual_call": 2504,
              "balance": 4000,
              "remaining_timely": 5496,
              "remaining_locked": 6000,
              "general_cash": 10000,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 2504,
              "cash_total": 25496,
              "cumulative_variation_loss": 4500,
              "gap": 0
            },
            {
              "time": "D3 10:00",
              "variation_loss": 2250,
              "before": 1750,
              "required_balance": 4400,
              "required_call": 2650,
              "actual_call": 2650,
              "balance": 4400,
              "remaining_timely": 2846,
              "remaining_locked": 6000,
              "general_cash": 10000,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 5154,
              "cash_total": 23246,
              "cumulative_variation_loss": 6750,
              "gap": 0
            }
          ],
          "cash_ok": true,
          "feasible": true,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 5154,
          "ending_pools": {
            "fcm_cash": 4400,
            "timely_pool": 2846,
            "locked_pool": 6000,
            "general_cash": 10000
          },
          "up_wealth_after_close": 241741.99999999997,
          "up_gain_after_close": 21741.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        "late_early": {
          "parameters": {
            "basket": 200000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": true,
            "allocate_released": false,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 26512,
          "initial_required": 5250,
          "entry_fee": 6,
          "initial_required_plus_fee": 5256,
          "exit_fee": 6,
          "required_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "required_call": 0,
              "cumulative_required": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "cumulative_required": 2631,
              "balance": 5250
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "cumulative_required": 6756,
              "balance": 6000
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "cumulative_required": 10731,
              "balance": 6600
            }
          ],
          "cumulative_required": 10731,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "actual_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "actual_call": 0,
              "required_call": 0,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 0,
              "cash_total": 19994,
              "cumulative_variation_loss": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "actual_call": 2631,
              "balance": 5250,
              "remaining_timely": 5369,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 2631,
              "cash_total": 16619,
              "cumulative_variation_loss": 3375,
              "gap": 0
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "actual_call": 4125,
              "balance": 6000,
              "remaining_timely": 1244,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 6756,
              "cash_total": 13244,
              "cumulative_variation_loss": 6750,
              "gap": 0
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "actual_call": 3975,
              "balance": 6600,
              "remaining_timely": 3269,
              "remaining_locked": 0,
              "general_cash": 0,
              "unlocked_at_deadline": 6000,
              "cumulative_actual_calls": 10731,
              "cash_total": 9869,
              "cumulative_variation_loss": 10125,
              "gap": 0
            }
          ],
          "cash_ok": true,
          "feasible": true,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 10731,
          "ending_pools": {
            "fcm_cash": 6600,
            "timely_pool": 3269,
            "locked_pool": 0,
            "general_cash": 0
          },
          "up_wealth_after_close": 239862.99999999997,
          "up_gain_after_close": 19862.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        "relaxed_loss": {
          "parameters": {
            "basket": 200000,
            "contracts": 2,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": false,
            "loss_cap": 31500,
            "depth": 3
          },
          "opening": {
            "basket": 200000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 8000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 0,
            "released_designated": 0
          },
          "down_loss": 31008,
          "initial_required": 3500,
          "entry_fee": 4,
          "initial_required_plus_fee": 3504,
          "exit_fee": 4,
          "required_path": [
            {
              "time": "T0",
              "balance": 5996,
              "required_balance": 3500,
              "required_call": 0,
              "cumulative_required": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 2250,
              "before": 3746,
              "required_balance": 3500,
              "required_call": 0,
              "cumulative_required": 0,
              "balance": 3746
            },
            {
              "time": "D2 10:00",
              "variation_loss": 2250,
              "before": 1496,
              "required_balance": 4000,
              "required_call": 2504,
              "cumulative_required": 2504,
              "balance": 4000
            },
            {
              "time": "D3 10:00",
              "variation_loss": 2250,
              "before": 1750,
              "required_balance": 4400,
              "required_call": 2650,
              "cumulative_required": 5154,
              "balance": 4400
            }
          ],
          "cumulative_required": 5154,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "actual_path": [
            {
              "time": "T0",
              "balance": 5996,
              "required_balance": 3500,
              "actual_call": 0,
              "required_call": 0,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 0,
              "cash_total": 19996,
              "cumulative_variation_loss": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 2250,
              "before": 3746,
              "required_balance": 3500,
              "required_call": 0,
              "actual_call": 0,
              "balance": 3746,
              "remaining_timely": 8000,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 0,
              "cash_total": 17746,
              "cumulative_variation_loss": 2250,
              "gap": 0
            },
            {
              "time": "D2 10:00",
              "variation_loss": 2250,
              "before": 1496,
              "required_balance": 4000,
              "required_call": 2504,
              "actual_call": 2504,
              "balance": 4000,
              "remaining_timely": 5496,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 2504,
              "cash_total": 15496,
              "cumulative_variation_loss": 4500,
              "gap": 0
            },
            {
              "time": "D3 10:00",
              "variation_loss": 2250,
              "before": 1750,
              "required_balance": 4400,
              "required_call": 2650,
              "actual_call": 2650,
              "balance": 4400,
              "remaining_timely": 2846,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 5154,
              "cash_total": 13246,
              "cumulative_variation_loss": 6750,
              "gap": 0
            }
          ],
          "cash_ok": true,
          "feasible": true,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 5154,
          "ending_pools": {
            "fcm_cash": 4400,
            "timely_pool": 2846,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": 243241.99999999997,
          "up_gain_after_close": 23241.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        },
        "reallocated": {
          "parameters": {
            "basket": 190000,
            "contracts": 3,
            "early_budget": 8000,
            "late_before_deadline": false,
            "allocate_released": true,
            "loss_cap": 30000,
            "depth": 3
          },
          "opening": {
            "basket": 190000,
            "general_cash": 0,
            "fcm_cash": 6000,
            "timely_pool": 18000,
            "locked_pool": 6000,
            "total": 220000,
            "released_general_source": 10000,
            "released_designated": 10000
          },
          "down_loss": 24512,
          "initial_required": 5250,
          "entry_fee": 6,
          "initial_required_plus_fee": 5256,
          "exit_fee": 6,
          "required_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "required_call": 0,
              "cumulative_required": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "cumulative_required": 2631,
              "balance": 5250
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "cumulative_required": 6756,
              "balance": 6000
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "cumulative_required": 10731,
              "balance": 6600
            }
          ],
          "cumulative_required": 10731,
          "depth_ok": true,
          "risk_ok": true,
          "initial_ok": true,
          "identity": "MES multiplier and tick are actual contract specifications; portfolio, futures prices, account amounts, margins, fee, depth and stress paths are teaching inputs",
          "actual_path": [
            {
              "time": "T0",
              "balance": 5994,
              "required_balance": 5250,
              "actual_call": 0,
              "required_call": 0,
              "remaining_timely": 18000,
              "remaining_locked": 6000,
              "general_cash": 0,
              "cash_total": 29994,
              "cumulative_variation_loss": 0
            },
            {
              "time": "D1 10:00",
              "variation_loss": 3375,
              "before": 2619,
              "required_balance": 5250,
              "required_call": 2631,
              "actual_call": 2631,
              "balance": 5250,
              "remaining_timely": 15369,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 2631,
              "cash_total": 26619,
              "cumulative_variation_loss": 3375,
              "gap": 0
            },
            {
              "time": "D2 10:00",
              "variation_loss": 3375,
              "before": 1875,
              "required_balance": 6000,
              "required_call": 4125,
              "actual_call": 4125,
              "balance": 6000,
              "remaining_timely": 11244,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 6756,
              "cash_total": 23244,
              "cumulative_variation_loss": 6750,
              "gap": 0
            },
            {
              "time": "D3 10:00",
              "variation_loss": 3375,
              "before": 2625,
              "required_balance": 6600,
              "required_call": 3975,
              "actual_call": 3975,
              "balance": 6600,
              "remaining_timely": 7269,
              "remaining_locked": 6000,
              "general_cash": 0,
              "unlocked_at_deadline": 0,
              "cumulative_actual_calls": 10731,
              "cash_total": 19869,
              "cumulative_variation_loss": 10125,
              "gap": 0
            }
          ],
          "cash_ok": true,
          "feasible": true,
          "first_failure": null,
          "failure_gap": 0,
          "actual_calls": 10731,
          "ending_pools": {
            "fcm_cash": 6600,
            "timely_pool": 7269,
            "locked_pool": 6000,
            "general_cash": 0
          },
          "up_wealth_after_close": 238362.99999999997,
          "up_gain_after_close": 18362.99999999997,
          "up_outcome_identity": "Only the stated UP path if every cash call is funded; not a realized outcome after failure"
        }
      },
      "full_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
      "full_results_pointer": "/P07",
      "identity": "未重新计算或取整：所有候选保留非路径字段，五种默认/变式各有精确代表账本；所有完整逐日账在公开原结果文件."
    },
    "static_equivalent_markdown": "| 张数 | DOWN损失 | 完整持有所需补款 | 实际累计补款 | 首个现金缺口 | 全部可行 |\n| --- | --- | --- | --- | --- | --- |\n| 0 | 40,000 | 0 | 0 | 0 | False |\n| 1 | 35,504 | 0 | 0 | 0 | False |\n| 2 | 31,008 | 5,154 | 5,154 | 0 | False |\n| 3 | 26,512 | 10,731 | 8,000 | 2,731 | False |\n\n实际3张逐日账（不是足额融资假设账）：\n\n| 时点 | 应补 | 实补 | 补后余额 | 及时池余 | 待解锁 | 缺口 |\n| --- | --- | --- | --- | --- | --- | --- |\n| T0 | 0 | 0 | 5,994 | 8,000 | 6,000 | 0 |\n| D1 10:00 | 2,631 | 2,631 | 5,250 | 5,369 | 6,000 | 0 |\n| D2 10:00 | 4,125 | 4,125 | 6,000 | 1,244 | 6,000 | 0 |\n| D3 10:00 | 3,975 | 1,244 | 3,869 | 0 | 6,000 | 2,731 |\n\n190000篮子、2张：一般现金10000；DOWN29008，需补5154，可行. 原篮子3张且6000于D3截止前到达也可行. 所有初始资金池合计220000.",
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/default-results.json",
    "results_pointer": "/P07",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-e/reproduce.md"
  }
]
```

## Sources
- [Liquidity Preparedness for Margin and Collateral Calls — Final Report](https://www.fsb.org/uploads/P101224-1.pdf): 流动性压力与准备的政策研究. Recommendations 6–8 讨论抵押品资格、占用、haircut、币种、地点、付款截止时间及操作准备.
- [Micro E-mini Equity Index Futures: Frequently Asked Questions](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html): MES乘数为每指数点5美元，最小价格跳动为0.25点. FAQ分别说明合约代码、结算和保证金安排.

## Content relations
```json
[
  {
    "from": "zh-p07",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p07",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "调用截止前资金与账户恒等式"
  },
  {
    "from": "zh-p07",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "调用成交数量与费用"
  },
  {
    "from": "zh-p07",
    "relation": "uses_method",
    "to": "zh-p03",
    "reason": "调用情景损失与现金短缺的区分"
  },
  {
    "from": "zh-p07",
    "relation": "uses_method",
    "to": "zh-p06",
    "reason": "调用共同风险敞口语言，不重估beta"
  },
  {
    "from": "zh-p07",
    "relation": "illustrated_by",
    "to": "SIM-PE-BUDGET-01",
    "reason": "同源教学算例／有日期原始观察；身份见https://ou-liu-red-sugar.github.io/notebook/labs/p-e/objects.json"
  },
  {
    "from": "zh-p07",
    "relation": "supported_by",
    "to": "MA-MES",
    "reason": "取得MES乘数、跳动、结算和保证金可变性；不采历史示例名义额为现值",
    "locator": "Q2, Q5, Q6, Q9, Q10, Q14",
    "scope": "MES每点5美元、0.25点跳动、代码/结算与保证金可变；不提供本文教学费率或当前保证金."
  },
  {
    "from": "zh-p07",
    "relation": "supported_by",
    "to": "MA-FSB",
    "reason": "识别现金调用的时间/地点/币种与操作可用性",
    "locator": "§3.3; Recommendations 6–8; printed pp18–20 / PDF pp22–24",
    "scope": "Recommendations6–8的资源可用性、haircut、币种/地点/截止与操作准备；不是零售统一账户规则."
  },
  {
    "from": "p07-lab",
    "relation": "illustrated_by",
    "to": "EXP-P07-FEASIBLE-INTEGERS",
    "at_section": "p07-lab",
    "reason": "逐项检验整数数量的情景损失、账户余额、到账截止和成交深度，允许可行集合为空."
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 7/9
枚举整数数量，找出共同可行集合及可改变的具体约束.
安排建立后，继续区分权重漂移、资金变化与判断更新.
Next: [再平衡、退出与判断维护](https://ou-liu-red-sugar.github.io/zh/notebook/rebalancing-exit-judgment-maintenance/)
