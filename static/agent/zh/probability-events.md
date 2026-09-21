# 情景、事件与概率

固定观察期限、基本结果与模型权重，再由结果集合定义事件及其交并概率.

Entry: zh-qt02 | Node: QT02 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从给定有限状态和权重计算事件交并补及边界变化，证明容斥关系，区分零概率与空事件. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-qt02",
  "node_id": "QT02",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "高年级本科至研究生；默认微积分、线性代数和基本概率",
  "selected_branch": "full_entry",
  "learning_task": "从给定有限状态和权重计算事件交并补及边界变化，证明容斥关系，区分零概率与空事件.",
  "body_source": "body_markdown",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从给定有限状态和权重计算事件交并补及边界变化，证明容斥关系，区分零概率与空事件. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "required_readings": [
    {
      "source_id": "QP01-L01",
      "title": "Lecture 1: Probabilistic Models and Probability Measures",
      "authors": [
        "MIT 6.436J / 15.085J course materials"
      ],
      "version": "Fall 2018",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3 Definition 1（p.3），§4 Definition 2（pp.4–5），§5 Definition 3（pp.7–8）、Proposition 2 及两事件公式（pp.9–10，上半页至 Finite Additivity 之前）",
        "scope": "MIT 6.436J/15.085J，Fall 2018，[Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf). 指定范围：§3 Definition 1（p.3），§4 Definition 2（pp.4–5），§5 Definition 3（pp.7–8）、Proposition 2 及两事件公式（pp.9–10，上半页至 Finite Additivity 之前）. 本页不需要后续单调类定理.",
        "purpose": "概率空间、可加性和容斥公式"
      },
      "supports": "概率空间、可加性和容斥公式",
      "limits": "原文把有限容斥的证明留作练习；QT02 的二事件证明是本篇给出的推导，不冒称原文已完整证明.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "data_version": "2026-09-21-QT-A-review-v2",
    "inputs": {
      "probability": {
        "experiment_id": "EXP-PAYOFF-MAP-01",
        "horizon": "one hypothetical terminal settlement T; no actual listed expiry",
        "status": "teaching_assumption",
        "states": [
          "w1",
          "w2",
          "w3"
        ],
        "settlement_points": [
          5900,
          6000,
          6100
        ],
        "weights": [
          0.2,
          0.5,
          0.3
        ],
        "event_A": [
          true,
          true,
          false
        ],
        "event_B": [
          false,
          true,
          true
        ]
      }
    },
    "default_outputs": {
      "events": {
        "P_A": 0.7,
        "P_B": 0.8,
        "P_intersection": 0.5,
        "P_union": 1,
        "P_A_complement": 0.3
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
<span id="qt02-definitions"></span>

## 定义与约定

概率模型先固定观察期限、基本结果与权重，再由结果集合定义事件；不同期限不能共用一张未注明期限的情景表.

**定义.** 令 $\Omega$ 为非空集合，$\mathcal F$ 为其上的 $\sigma$-代数，即包含空集、对补集和可数并封闭的一族子集，则 $\Omega$ 称为样本空间，$\omega\in\Omega$ 是一个基本结果，$A\in\mathcal F$ 称为事件. 给定概率测度 $\mathbb P\colon\mathcal F\to[0,1]$，要求 $\mathbb P(\Omega)=1$，且对两两不交的可数事件族满足可列可加性. [^mit]

有限模型可取 $\mathcal F=2^\Omega$. 给定 $p_i\ge0$、$\sum_i p_i=1$，有 $\mathbb P(A)=\sum_{\omega_i\in A}p_i$. 零概率结果可保留在样本空间中.

<span id="qt02-event-example"></span>

## 有限情景与事件边界

约定期限为一次期末结算 $T$. 三个基本结果的结算值分别为 5,900、6,000、6,100 点，模型权重为 0.2、0.5、0.3；这些权重是本例输入.

| 结果 | 结算情景标签（点） | $p_i$ | $A$：不超过 6,000 | $B$：不低于 6,000 |
|---|---:|---:|---|---|
| $\omega_1$ | 5,900 | 0.2 | 是 | 否 |
| $\omega_2$ | 6,000 | 0.5 | 是 | 是 |
| $\omega_3$ | 6,100 | 0.3 | 否 | 是 |

$P(A)=0.7$、$P(B)=0.8$，交集为 $\{\omega_2\}$、概率0.5，并集覆盖全空间. 这对事件穷尽且重叠.

**命题（二事件容斥）.** 对事件 $A,B$，有 $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$.

**证明.** 将并集分为两两不交的 $A\setminus B$、$A\cap B$、$B\setminus A$，按可加性求和. $P(A)+P(B)$ 把交集计两遍，减一次即得结论.

本例结果为 $0.7+0.8-0.5=1$；补事件 $A^c=\{\omega_3\}$ 的概率为 0.3. 事件属于哪些结果，与采用什么权重，是两层输入；改权重不必改变事件集合.

<span id="qt02-self-check"></span>

<div data-experiment-slot="lab-qt02"></div>

## 边界变更

**解释题.** 刚才 $A$、$B$ 的概率和超过 1，是否说明模型权重不合法？

**解析.** 基本结果权重合法，0.7与0.8重复计入交集，应按容斥计算.

**迁移题.** 把 $B$ 改为“严格大于 6,000”. 哪些概率改变？

**解析.** $B=\{\omega_3\}$ 的概率为0.3，与A交集为空，并集仍为全空间. 概率改变来自移出边界状态.

[事件实验](/notebook/labs/qt-a/interactions.html#qt02)分别改变集合成员和概率权重，展示交集、并集与补集. 权重要求非负且和为1.

[^mit]: MIT 6.436J/15.085J，Fall 2018，[Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf). 指定范围：§3 Definition 1（p.3），§4 Definition 2（pp.4–5），§5 Definition 3（pp.7–8）、Proposition 2 及两事件公式（pp.9–10，上半页至 Finite Additivity 之前）.

## Additional teaching material
## 计算输入与默认输出

同源对象为 `experiments.json` 的 `probability`；期限为算例结算 $T$.

```json
{"experiment_id":"EXP-PAYOFF-MAP-01","states":["w1","w2","w3"],"settlement_points":[5900,6000,6100],"weights":[0.2,0.5,0.3],"event_A":[true,true,false],"event_B":[false,true,true],"outputs":{"P_A":0.7,"P_B":0.8,"P_intersection":0.5,"P_union":1,"P_A_complement":0.3}}
```

```text
P(A) = sum_i weights[i] * Number(event_A[i])
P(A intersection B) = sum_i weights[i] * Number(event_A[i] && event_B[i])
P(A union B) = sum_i weights[i] * Number(event_A[i] || event_B[i])
```

HTML `#qt02` 为每个情景给出 A、B 复选框及有标签的权重输入，显示全部五项概率. 默认输出是上面的精确值. 接受条件为每项有限、非负且和为 1；浮点校验容差 `1e-12` 只处理机器舍入，不修改输入. 错误用文字解释；全不选的事件返回概率 0. 静态表常驻，所有操作可用键盘，打印保留默认权重与输出.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-PAYOFF-MAP-01",
    "title": "同一情景、事件与支付映射",
    "anchor": "qt02-event-example",
    "description": "one hypothetical terminal settlement T; no actual listed expiry",
    "inputs": {
      "probability": {
        "experiment_id": "EXP-PAYOFF-MAP-01",
        "horizon": "one hypothetical terminal settlement T; no actual listed expiry",
        "status": "teaching_assumption",
        "states": [
          "w1",
          "w2",
          "w3"
        ],
        "settlement_points": [
          5900,
          6000,
          6100
        ],
        "weights": [
          0.2,
          0.5,
          0.3
        ],
        "event_A": [
          true,
          true,
          false
        ],
        "event_B": [
          false,
          true,
          true
        ]
      },
      "payoff": {
        "status": "real_product_terms_with_hypothetical_strike_prices_probabilities_premium",
        "contract_source": "CBOE-SPX-20260921",
        "type": "call",
        "strike": 6000,
        "multiplier": 100,
        "premium_points": 30,
        "fees": 0,
        "funding_cost": 0,
        "tax": 0,
        "uniform_alternative": {
          "status": "separate_fixed_teaching_model",
          "low": 5900,
          "high": 6100,
          "strike": 6000,
          "multiplier": 100,
          "query_y": 5000
        },
        "product_cash_delivery_timing": "business day following expiration (Cboe fact sheet); account booking not modelled"
      }
    },
    "outputs": {
      "events": {
        "P_A": 0.7,
        "P_B": 0.8,
        "P_intersection": 0.5,
        "P_union": 1,
        "P_A_complement": 0.3
      },
      "payoff": {
        "payoff_usd": [
          0,
          0,
          10000
        ],
        "net_pnl_usd": [
          -3000,
          -3000,
          7000
        ],
        "distribution": [
          {
            "value": 0,
            "mass": 0.7
          },
          {
            "value": 10000,
            "mass": 0.3
          }
        ]
      },
      "uniform": {
        "zero_atom_mass": 0.5,
        "positive_mass": 0.5,
        "positive_density_per_usd": 5e-05,
        "cdf": 0.75
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched",
    "url": "/notebook/labs/qt-a/interactions.html#qt02"
  }
]
```

## Sources
- [Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf): 概率模型先指定情景集合、可辨认事件及非负且总量为1的概率测度. 事件的并、交与补集描述不同范围；容斥修正的是重复计数，不要求事件独立.

## Content relations
```json
[
  {
    "from": "zh-qt02",
    "relation": "part_of",
    "to": "quant-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt02",
    "relation": "illustrated_by",
    "to": "EXP-PAYOFF-MAP-01",
    "reason": "事件边界与权重分开"
  },
  {
    "from": "zh-qt02",
    "relation": "supported_by",
    "to": "QP01-L01",
    "reason": "概率空间、可加性和容斥公式",
    "scope": "指定定义与 Proposition 2；两事件证明由本页补全",
    "locator": "§§1–4，约 pp.1–7；§5 Definition 3、Proposition 2，约 pp.7–10"
  },
  {
    "from": "zh-qt02",
    "relation": "informs",
    "to": "zh-qt03",
    "reason": "提供同一情景集及模型权重"
  }
]
```

## Related entries
