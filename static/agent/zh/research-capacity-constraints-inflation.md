# 现代研究阅读：产能约束与通胀

从互补松弛走到同冲击反事实与非线性交互，分清论文重建和教学模拟。

Entry: zh-ei17 | Node: EI-17 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-17《现代研究阅读：产能约束与通胀》，采用内容版本2026-09-21-review-v3，当前范围：本篇完整学习单元。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先解a=100,K=50的乘子边界，再区分“保持同冲击、放松约束”与“联合冲击减容量单独路径”。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：互补松弛、恰触边μ=0、同冲击对照、四状态交互公式全部正确；并能区分Figure 7c的2021–2022总体通胀高约1–2pp与Figure 7a的2020Q2–2021Q2商品通胀加速约一半，不能把两者当同一分母，也不能将教学价格称后验通胀或相加为100%。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei17",
  "node_id": "EI-17",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "重建容量约束的作用与Figure 7/9的不同运算，不伪造作者后验时间序列。",
  "required_readings": [
    {
      "source_id": "EIDEF-S20",
      "title": "Supply Chain Constraints and Inflation",
      "authors": [
        "Diego Comin",
        "Robert C. Johnson",
        "Callum Jones"
      ],
      "version": "IMES DP2025-E-15, October2025",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.imes.boj.or.jp/research/papers/english/25-E-15.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "Figure 7保持同一组smoothed shocks、只把约束改为始终松弛；Figure 7c的2021–2022总体通胀高约1–2pp，与Figure 7a的2020Q2–2021Q2商品通胀加速约一半是不同面板/期间/分母。Figure 9联合冲击减容量单独路径另行识别交互。"
      },
      "supports": "Figure 7保持同一组smoothed shocks、只把约束改为始终松弛；Figure 7c的2021–2022总体通胀高约1–2pp，与Figure 7a的2020Q2–2021Q2商品通胀加速约一半是不同面板/期间/分母。Figure 9联合冲击减容量单独路径另行识别交互。",
      "id": "EI-17-READ-1",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_ids": [
        "exp-ei17-static-capacity-complementarity",
        "exp-ei17-fig7-relax-constraints",
        "exp-ei17-fig9-interaction"
      ],
      "research_version": "IMES Discussion Paper 2025-E-15, October 2025",
      "static_capacity_toy": {
        "demand_inverse": "P = a - Q",
        "marginal_cost_inverse_supply": "P = Q + mu",
        "constraints": [
          "Q <= K",
          "mu >= 0",
          "mu*(Q-K)=0"
        ],
        "slack_case": {
          "K": 80,
          "a_before": 100,
          "a_after": 120,
          "before": {
            "P": 50,
            "Q": 50,
            "mu": 0
          },
          "after": {
            "P": 60,
            "Q": 60,
            "mu": 0
          }
        },
        "binding_case": {
          "K": 50,
          "a_before": 120,
          "a_after": 130,
          "before": {
            "P": 70,
            "Q": 50,
            "mu": 20
          },
          "after": {
            "P": 80,
            "Q": 50,
            "mu": 30
          }
        },
        "lesson": "P↑,Q↑ for a positive demand shift requires a non-binding interior in this toy; with binding capacity, P can rise while Q remains fixed."
      },
      "Fig7_contract": {
        "filter_shocks_under_model_with_potentially_binding_constraints": true,
        "counterfactual": "feed the same smoothed shocks through the model with constraints slack in all periods",
        "inflation_identity": "quarterly inflation expressed at annualized rate and de-meaned; counterfactual simulations retain measurement-error treatment",
        "uncertainty": "posterior simulations / 5th-95th percentile bands",
        "capacity_prior": "positive mass on binding durations only starting 2020Q2"
      },
      "Fig9b_contract": {
        "operation": "simulate named shock type together with filtered capacity shocks, then subtract the capacity-shocks-alone path",
        "nonlinear_interaction": true,
        "not_additive_100pct_decomposition": true
      },
      "Figure7_scale_reading": {
        "aggregate_consumer_price_inflation": {
          "period": "2021-2022",
          "actual_minus_all_slack_counterfactual_pp_approx": "1-2",
          "panel": "Figure 7c / aggregate consumer price inflation"
        },
        "goods_price_inflation_acceleration": {
          "period": "2020Q2-2021Q2",
          "constraint_share_approx": "about one half",
          "panel": "Figure 7a / goods price inflation"
        },
        "identity": "different panel, period, and denominator; do not infer a permanent aggregate 50% share by dividing an aggregate pp gap by another number"
      }
    },
    "experiments": [
      {
        "id": "exp-ei17-static-capacity-complementarity",
        "node_id": "EI-17",
        "title": "产能互补松弛",
        "anchor": "ei17-kkt",
        "method": "capacity",
        "controls": [
          {
            "key": "a",
            "label": "逆需求截距a",
            "default": 120,
            "min": 0,
            "max": 200,
            "step": 5,
            "kind": "number"
          },
          {
            "key": "K",
            "label": "产能K",
            "default": 50,
            "min": 1,
            "max": 150,
            "step": 5,
            "kind": "number"
          }
        ],
        "inputs": {
          "a": 120,
          "K": 50
        },
        "algorithm": "最大化aQ−Q²,0≤Q≤K。a≥0,K>0；Q=min(a/2,K),P=a−Q,μ=a−2Q。显示slack与μ(Q−K)=0。a=0采用Q=P=μ=0。模型为静态教学经济，不是IMES复现。",
        "static_equivalent": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0。",
        "source_ids": [
          "EIDEF-S20"
        ],
        "identity": "teaching_assumption",
        "description": "产能互补松弛",
        "outputs": {
          "a": 120,
          "K": 50,
          "q": 50,
          "p": 70,
          "mu": 20,
          "slack": 0,
          "complementarity": 0,
          "regime": "绑定且乘子为正",
          "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
        }
      },
      {
        "id": "exp-ei17-fig7-relax-constraints",
        "node_id": "EI-17",
        "title": "同一输入路径，放松约束",
        "anchor": "ei17-fig7",
        "method": "relax",
        "controls": [
          {
            "key": "capacityScale",
            "label": "教学容量路径倍数",
            "default": 1,
            "min": 0.5,
            "max": 2,
            "step": 0.1,
            "kind": "number"
          }
        ],
        "inputs": {
          "capacityScale": 1
        },
        "algorithm": "新增教学路径a=[100,120,130,110],K=[80,50,50,80]×scale；受限逐期用静态模型，松弛逐期P=Q=a/2。不是论文通胀，不生成后验置信带。作者实验流程另列同θ、同smoothed shocks、all-slack反事实及measurement error。",
        "static_equivalent": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]。均为抽象价格单位。",
        "source_ids": [
          "EIDEF-S20"
        ],
        "identity": "teaching_assumption",
        "description": "同一输入路径，放松约束",
        "outputs": {
          "rows": [
            {
              "period": 1,
              "a": 100,
              "K": 80,
              "constrained_q": 50,
              "constrained_p": 50,
              "slack_q": 50,
              "slack_p": 50,
              "difference": 0,
              "mu": 0
            },
            {
              "period": 2,
              "a": 120,
              "K": 50,
              "constrained_q": 50,
              "constrained_p": 70,
              "slack_q": 60,
              "slack_p": 60,
              "difference": 10,
              "mu": 20
            },
            {
              "period": 3,
              "a": 130,
              "K": 50,
              "constrained_q": 50,
              "constrained_p": 80,
              "slack_q": 65,
              "slack_p": 65,
              "difference": 15,
              "mu": 30
            },
            {
              "period": 4,
              "a": 110,
              "K": 80,
              "constrained_q": 55,
              "constrained_p": 55,
              "slack_q": 55,
              "slack_p": 55,
              "difference": 0,
              "mu": 0
            }
          ],
          "identity": "same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"
        }
      },
      {
        "id": "exp-ei17-fig9-interaction",
        "node_id": "EI-17",
        "title": "条件效应与非线性交互",
        "anchor": "ei17-fig9",
        "method": "interaction",
        "controls": [
          {
            "key": "demandShock",
            "label": "教学需求截距增量u",
            "default": 30,
            "min": 0,
            "max": 80,
            "step": 5,
            "kind": "number"
          },
          {
            "key": "capacityReduction",
            "label": "教学容量减少v",
            "default": 30,
            "min": 0,
            "max": 60,
            "step": 5,
            "kind": "number"
          }
        ],
        "inputs": {
          "demandShock": 30,
          "capacityReduction": 30
        },
        "algorithm": "基准a100,K80；分别计算P(0,0),P(u,0),P(0,v),P(u,v)。conditional=P(u,v)−P(0,v)；interaction=conditional−[P(u,0)−P(0,0)]。非线性不强制贡献加总100%。",
        "static_equivalent": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15。教学价格，不是作者Figure9数值。",
        "source_ids": [
          "EIDEF-S20"
        ],
        "identity": "teaching_assumption",
        "description": "条件效应与非线性交互",
        "outputs": {
          "baseline": {
            "a": 100,
            "K": 80,
            "q": 50,
            "p": 50,
            "mu": 0,
            "slack": 30,
            "complementarity": 0,
            "regime": "松弛",
            "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
          },
          "demand_only": {
            "a": 130,
            "K": 80,
            "q": 65,
            "p": 65,
            "mu": 0,
            "slack": 15,
            "complementarity": 0,
            "regime": "松弛",
            "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
          },
          "capacity_only": {
            "a": 100,
            "K": 50,
            "q": 50,
            "p": 50,
            "mu": 0,
            "slack": 0,
            "complementarity": 0,
            "regime": "恰好触边，乘子为零",
            "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
          },
          "joint": {
            "a": 130,
            "K": 50,
            "q": 50,
            "p": 80,
            "mu": 30,
            "slack": 0,
            "complementarity": 0,
            "regime": "绑定且乘子为正",
            "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
          },
          "demand_effect_without_capacity": 15,
          "capacity_alone_effect": 0,
          "conditional_demand_effect": 30,
          "interaction": 15,
          "total_effect": 30,
          "identity": "price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei17-static-capacity-complementarity",
      "text": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0。",
      "outputs": {
        "a": 120,
        "K": 50,
        "q": 50,
        "p": 70,
        "mu": 20,
        "slack": 0,
        "complementarity": 0,
        "regime": "绑定且乘子为正",
        "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
      }
    },
    {
      "experiment_id": "exp-ei17-fig7-relax-constraints",
      "text": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]。均为抽象价格单位。",
      "outputs": {
        "rows": [
          {
            "period": 1,
            "a": 100,
            "K": 80,
            "constrained_q": 50,
            "constrained_p": 50,
            "slack_q": 50,
            "slack_p": 50,
            "difference": 0,
            "mu": 0
          },
          {
            "period": 2,
            "a": 120,
            "K": 50,
            "constrained_q": 50,
            "constrained_p": 70,
            "slack_q": 60,
            "slack_p": 60,
            "difference": 10,
            "mu": 20
          },
          {
            "period": 3,
            "a": 130,
            "K": 50,
            "constrained_q": 50,
            "constrained_p": 80,
            "slack_q": 65,
            "slack_p": 65,
            "difference": 15,
            "mu": 30
          },
          {
            "period": 4,
            "a": 110,
            "K": 80,
            "constrained_q": 55,
            "constrained_p": 55,
            "slack_q": 55,
            "slack_p": 55,
            "difference": 0,
            "mu": 0
          }
        ],
        "identity": "same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"
      }
    },
    {
      "experiment_id": "exp-ei17-fig9-interaction",
      "text": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15。教学价格，不是作者Figure9数值。",
      "outputs": {
        "baseline": {
          "a": 100,
          "K": 80,
          "q": 50,
          "p": 50,
          "mu": 0,
          "slack": 30,
          "complementarity": 0,
          "regime": "松弛",
          "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
        },
        "demand_only": {
          "a": 130,
          "K": 80,
          "q": 65,
          "p": 65,
          "mu": 0,
          "slack": 15,
          "complementarity": 0,
          "regime": "松弛",
          "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
        },
        "capacity_only": {
          "a": 100,
          "K": 50,
          "q": 50,
          "p": 50,
          "mu": 0,
          "slack": 0,
          "complementarity": 0,
          "regime": "恰好触边，乘子为零",
          "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
        },
        "joint": {
          "a": 130,
          "K": 50,
          "q": 50,
          "p": 80,
          "mu": 30,
          "slack": 0,
          "complementarity": 0,
          "regime": "绑定且乘子为正",
          "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
        },
        "demand_effect_without_capacity": 15,
        "capacity_alone_effect": 0,
        "conditional_demand_effect": 30,
        "interaction": 15,
        "total_effect": 30,
        "identity": "price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"
      }
    }
  ],
  "source_id_aliases": {
    "EIDEF-S10": "BFDE-JEP",
    "EIDEF-S14": "EIBC-S07M",
    "EIDEF-S16A": "EIBC-S05A",
    "EIDEF-S16B": "EIBC-S05B",
    "EIDEF-S21": "EI-S06-M3-202605"
  }
}
```

## Supplied entry
<strong>本篇任务：</strong>重建一篇研究中“约束怎样进入价格、同一组冲击怎样做反事实、不同冲击为什么不能线性分账”的完整关系。主要读物是Comin、Johnson和Jones的 *Supply Chain Constraints and Inflation*，固定为IMES 2025-E-15、2025年10月版。正文与三个小实验约20分钟；它们不代替整篇宏观模型及附录的复现。[^paper]

<a id="ei17-question"></a>

## 一、论文真正要区分的，是冲击与约束如何共同作用

价格上涨可以来自需求增加，也可以来自生产或进口受限。只画一条价格曲线，很难分清这些解释。论文把国内外生产、投入联系、价格调整和可能生效的产能上限放进同一个动态模型，再用价格与数量数据共同识别。研究样本是美国1990Q1–2023Q4的季度资料，不是2026年的通胀预测。<strong>它衡量产能约束历史影响的核心反事实，是先在允许约束生效的模型中滤出冲击，再保持同一组冲击，只把约束改成始终松弛来比较路径。</strong>[^data][^counter]

本篇沿三层推进：第一层是优化条件，说明产能影子价格为何改变定价；第二层是Figure 7的**保持同一组冲击、移除约束**实验；第三层是Figure 9的**某类冲击与容量冲击共同作用**实验。它们分别回答机制、反事实和交互，不应该混成一个“供应链贡献占比”。

<a id="ei17-kkt"></a>

## 二、约束不是一条标签：它有可行性和乘子条件

在论文§2.2.2中，企业价格决策要面对产量上限。简写某期某企业的产量为 $Y$、上限为 $\bar Y$、乘子为 $\mu$，必须同时满足

$$
Y\le\bar Y,\qquad
\mu\ge0,\qquad
\mu(Y-\bar Y)=0.
$$

最后一条是互补松弛：有闲置容量时，乘子必须为0；乘子严格为正时，产量必在上限。反过来，仅有 $Y=\bar Y$ 并不强迫 $\mu>0$，因为需求恰好把产量推到边界时，增加一点容量也可能没有一阶价值。[^model]

论文的价格一阶条件中，边际成本与产能乘子一起影响最优价格；§2.6.1线性化的国内和进口价格方程额外出现由乘子带来的项。其机制不是“所有企业突然改变了市场力量”，而是在同一生产与定价结构下，产能上限改变继续扩大供给的影子成本。论文同时有投入替代、国内外来源及粘性价格，不能把它缩成下面的静态例子。[^model]

为了手算这三个条件，我们另设一个**静态教学经济**：逆需求 $P=a-Q$，边际生产成本为 $Q$，总产出不得超过 $K>0$。其竞争配置可由最大化总剩余重建：

$$
\begin{aligned}
&\max_{0\le Q\le K}\left[
\int_0^Q(a-z)\,dz-\frac{Q^2}{2}
\right]\\
&\qquad=\max_{0\le Q\le K}(aQ-Q^2).
\end{aligned}
$$

在 $a>0,K>0$ 下，正产量一阶条件为 $a-2Q-\mu=0$，配合上界互补松弛，得到

$$
\begin{aligned}
Q&=\min(a/2,K),\\
P&=a-Q,\\
\mu&=P-Q=a-2Q.
\end{aligned}
$$

这是单期竞争教学例，不是论文的垄断竞争动态模型。它保留了同样重要的对象区别：成本、容量和影子价格。

| 教学情景 | a | K | Q | P | μ |
|---|---:|---:|---:|---:|---:|
| 需求较低，容量松弛 | 100 | 80 | 50 | 50 | 0 |
| 同一容量，需求增加 | 120 | 80 | 60 | 60 | 0 |
| 需求不变，容量较紧 | 120 | 50 | 50 | 70 | 20 |
| 已受限后需求继续增加 | 130 | 50 | 50 | 80 | 30 |
| 恰好触边 | 100 | 50 | 50 | 50 | 0 |

在松弛内点，需求增加使价格和数量都上升；约束已经生效时，需求继续增加可以只推价格、不推数量。这是给“价格↑、数量↑是需求冲击”直觉加上必要条件，而不是取消供需分析。

<div data-experiment-slot="exp-ei17-static-capacity-complementarity"></div>

<a id="ei17-estimation"></a>

## 三、从不可直接观察的容量走到模型估计

论文§3使用消费品与服务价格、消费支出、工业生产、劳动生产率以及进口价格和支出等观测，将不同系列映射到模型变量。原始系列有自己的统计定义；例如工业生产在这里是商品部门产出的代理，不是精确相同的对象。增长和通胀序列按作者处理去均值。[^data]

容量约束是否生效不是直接从一张“全国容量”表读取。作者用约束持续时间和结构参数刻画分段状态方程，给定候选参数与持续时间后滤出平滑冲击，再检查产生的模型路径是否与候选约束状态相容。基准先验只允许2020Q2起约束生效，因此更早时期的零乘子并不是由数据自由发现的普遍事实。[^data]

这一步告诉我们如何评价研究结果：必须同时看观测、模型映射、先验与近似解。论文还说明，数值上的分段线性近似可能产生小的负乘子残差；理论KKT要求非负，不应把数值近似误差解释成“真实产能约束具有负影子成本”。[^counter]

我们不在本篇重估后验或重新运行Dynare；但可以准确重建每次实验固定什么、改变什么、最后比较什么。这已经比只复述“产能影响通胀”多走了最重要的一步。

<a id="ei17-fig7"></a>

## 四、Figure 7：同一组冲击，拿掉约束

论文§4.2的迭代可用一张流程表重建。对每次后验抽样 $b$，先得到参数 $\theta^{(b)}$ 和约束持续时间，再在**允许约束生效的模型**中从数据滤出冲击路径 $\hat\varepsilon^{(b)}$。随后保持这些冲击，改用始终松弛的约束运行模型。[^counter]

$$
\begin{aligned}
X^{(b)}_{\mathrm{constrained}}
 &=F(\theta^{(b)},\hat\varepsilon^{(b)};\text{允许绑定}),\\
X^{(b)}_{\mathrm{slack}}
 &=F(\theta^{(b)},\hat\varepsilon^{(b)};\text{始终松弛}).
\end{aligned}
$$

这里的 $F$ 是本篇为解释作者求解流程所用的记号。关键不是重新把松弛模型估到现实数据，而是对同一次抽样使用同一组冲击：否则两条路径的差还会混入重新估出的冲击变化。

Figure 7的纵轴是**去均值的季度通胀年化值**，不是同比通胀。若季度对数变动为 $\pi_t$，年化尺度是 $4\pi_t$；以百分比显示时还要乘100。图比较原始数据与反事实中位数，区间来自后验模拟，并保留观测的测量误差处理。约1000次后验抽样形成的第5至95分位区间，不是本篇静态例子能够生成的置信带。[^counter]

实际读图要把面板、期间和分母分开。<strong>Figure 7c对应总体（aggregate/headline）消费价格通胀：在2021–2022年，实际路径比始终松弛约束的反事实高约1–2个百分点。</strong>另一方面，**Figure 7a及其正文说“约一半的加速”时，分母是2020Q2–2021Q2的商品价格通胀加速**；正文还另讨论2022年后半年商品通胀回落。这不是把总体通胀的“2个百分点”除以某个“4个百分点”所得的永久50%比例。图7的商品、服务和总体面板必须分别读，不能把更窄对象/期间的份额改写成2021–2022总体通胀的固定贡献率。[^counter]

我们用四期**教学变式**演示“同冲击、不同约束”的运算，不抄造论文曲线。输入需求截距 $a=(100,120,130,110)$，容量 $K=(80,50,50,80)$，逐期使用上一节静态规则；拿掉上限后，同一 $a$ 得到 $P=Q=a/2$。

| 教学期 | 相同需求a | 容量K | 受限价格 | 始终松弛价格 | 价格差 |
|---|---:|---:|---:|---:|---:|
| 1 | 100 | 80 | 50 | 50 | 0 |
| 2 | 120 | 50 | 70 | 60 | 10 |
| 3 | 130 | 50 | 80 | 65 | 15 |
| 4 | 110 | 80 | 55 | 55 | 0 |

这里是抽象价格单位，不是通胀百分点；逐期独立的静态重算也没有学习预期或跨期价格调整。它只让我们亲手确认反事实比较固定的是输入，而不是把一条曲线任意下移。

<div data-experiment-slot="exp-ei17-fig7-relax-constraints"></div>

<a id="ei17-fig9"></a>

## 五、Figure 9：容量改变其他冲击的效果

Figure 9a让各类冲击分别进入模型；Figure 9b则把某类冲击与容量冲击一起放入，再减去容量冲击单独作用的路径。作者用这一步观察同一种冲击在容量路径不同的背景下怎样表现。[^interaction]

令 $G(u,v)$ 表示给定其他模型条件时，具名冲击 $u$ 与容量冲击 $v$ 产生的某一结果。Figure 9b对应的比较结构是
$$
G(u,v)-G(0,v),
$$
而不是单纯的 $G(u,0)-G(0,0)$。它们的差是交互项：
$$
J=G(u,v)-G(0,v)-G(u,0)+G(0,0).
$$

用同一个静态教学模型，基准 $a=100,K=80$；需求冲击把 $a$ 增加30，容量冲击把 $K$ 减少30：

| 输入组合 | a | K | 价格P |
|---|---:|---:|---:|
| 无冲击 | 100 | 80 | 50 |
| 只有需求冲击 | 130 | 80 | 65 |
| 只有容量冲击 | 100 | 50 | 50 |
| 两者一起 | 130 | 50 | 80 |

单独需求效应是15；在较紧容量下，条件需求效应是 $80-50=30$，交互项为15。容量冲击单独出现时只是恰好触边，价格变化为0，却不能据此说它与联合结果无关。这正是非线性的重要之处。

因此把“需求单独贡献15、容量单独贡献0”相加，不能解释联合变化30。分配交互项需要另外定义归因规则，论文的Figure 9b不是自动加总为100%的分账表。Figure 7改变约束制度而固定全套冲击；Figure 9改变冲击组合并允许约束响应。两个实验回答不同问题。

<div data-experiment-slot="exp-ei17-fig9-interaction"></div>

<a id="ei17-exercises"></a>

## 六、重建与迁移

<strong>任务一：</strong>$a=100,K=50$时为什么产量在上限，但乘子为0？把a再提高到110会怎样？

<strong>解析：</strong>无约束最优产量正好是50，增加容量没有边际收益，所以触边不必有正乘子。a升到110后，产量仍50，价格60，$\mu=10$；此时放宽容量才能增加可满足需求。

<strong>任务二：</strong>有人为“无约束反事实”重新估计了一套更小的需求冲击，然后比较通胀。它还是本篇Figure 7的实验吗？

<strong>解析：</strong>不是。比较中同时改变了约束和冲击来源，差距不能只归于放松约束。作者流程先在允许约束的模型中滤出冲击，再保持同组冲击进入无约束模型；测量误差及后验抽样也要沿其原约定处理。

<strong>任务三：</strong>用上一节四格价格重算Figure 9b式差分、无容量冲击的需求效应和交互项。

<strong>解析：</strong>依次为 $80-50=30$、$65-50=15$、$30-15=15$。它们都是教学价格差，不是研究论文的通胀贡献。若把三者都作为独立贡献相加，会再次重复计数。

<strong>迁移任务：</strong>一家制造商的产品价格上涨，但实物交付持平。这能否直接识别其产能约束？

<strong>解析：</strong>可以提出容量绑定的候选机制：需求增强时只能涨价、不增产。但还可能有产品组合、计划检修、配给或价格调整时点等解释。需要可用产能、排产、实物订单和交期；论文中的宏观模型结果不能直接识别这家公司的瓶颈，更不能直接推出利润。可迁移的是“把约束和冲击共同建模”的方法，而非某一个宏观份额。

[^paper]: EIDEF-S20，Diego Comin、Robert C. Johnson、Callum Jones，*Supply Chain Constraints and Inflation*，IMES Discussion Paper 2025-E-15，2025年10月；固定72页公开版本。[全文](https://www.imes.boj.or.jp/research/papers/english/25-E-15.pdf)。
[^model]: 同源§2.2.2，印刷pp.12–13（PDF物理pp.15–16），生产、价格条件与互补松弛式(6)–(7)；§2.6.1印刷pp.17–18（PDF pp.20–21），定价关系。本文静态总剩余例是另设教学模型，不是作者企业问题的完整复制。
[^data]: 同源§3，印刷pp.21–26（PDF pp.24–29），数据、参数、持续时间与先验；季度美国资料1990Q1–2023Q4。未重新估计底层序列或后验。
[^counter]: 同源§4.1–4.2，印刷pp.27–30（PDF pp.30–33）；Figure 7位于印刷p.29／PDF p.32，脚注34–35含近似乘子、测量误差说明。本文保留其反事实流程和图读对象，不提供伪造的作者逐期模拟数据。
[^interaction]: 同源§4.3，印刷pp.31–33（PDF pp.34–36）；Figure 9位于印刷p.32／PDF p.35，图下正文明确“联合冲击路径减容量冲击单独路径”。

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0。

```json
{
  "a": 120,
  "K": 50,
  "q": 50,
  "p": 70,
  "mu": 20,
  "slack": 0,
  "complementarity": 0,
  "regime": "绑定且乘子为正",
  "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
}
```

scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]。均为抽象价格单位。

```json
{
  "rows": [
    {
      "period": 1,
      "a": 100,
      "K": 80,
      "constrained_q": 50,
      "constrained_p": 50,
      "slack_q": 50,
      "slack_p": 50,
      "difference": 0,
      "mu": 0
    },
    {
      "period": 2,
      "a": 120,
      "K": 50,
      "constrained_q": 50,
      "constrained_p": 70,
      "slack_q": 60,
      "slack_p": 60,
      "difference": 10,
      "mu": 20
    },
    {
      "period": 3,
      "a": 130,
      "K": 50,
      "constrained_q": 50,
      "constrained_p": 80,
      "slack_q": 65,
      "slack_p": 65,
      "difference": 15,
      "mu": 30
    },
    {
      "period": 4,
      "a": 110,
      "K": 80,
      "constrained_q": 55,
      "constrained_p": 55,
      "slack_q": 55,
      "slack_p": 55,
      "difference": 0,
      "mu": 0
    }
  ],
  "identity": "same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"
}
```

默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15。教学价格，不是作者Figure9数值。

```json
{
  "baseline": {
    "a": 100,
    "K": 80,
    "q": 50,
    "p": 50,
    "mu": 0,
    "slack": 30,
    "complementarity": 0,
    "regime": "松弛",
    "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
  },
  "demand_only": {
    "a": 130,
    "K": 80,
    "q": 65,
    "p": 65,
    "mu": 0,
    "slack": 15,
    "complementarity": 0,
    "regime": "松弛",
    "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
  },
  "capacity_only": {
    "a": 100,
    "K": 50,
    "q": 50,
    "p": 50,
    "mu": 0,
    "slack": 0,
    "complementarity": 0,
    "regime": "恰好触边，乘子为零",
    "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
  },
  "joint": {
    "a": 130,
    "K": 50,
    "q": 50,
    "p": 80,
    "mu": 30,
    "slack": 0,
    "complementarity": 0,
    "regime": "绑定且乘子为正",
    "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
  },
  "demand_effect_without_capacity": 15,
  "capacity_alone_effect": 0,
  "conditional_demand_effect": 30,
  "interaction": 15,
  "total_effect": 30,
  "identity": "price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"
}
```

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei17-fig7-relax-constraints",
    "node_id": "EI-17",
    "title": "同一输入路径，放松约束",
    "anchor": "ei17-fig7",
    "method": "relax",
    "controls": [
      {
        "key": "capacityScale",
        "label": "教学容量路径倍数",
        "default": 1,
        "min": 0.5,
        "max": 2,
        "step": 0.1,
        "kind": "number"
      }
    ],
    "inputs": {
      "capacityScale": 1
    },
    "algorithm": "新增教学路径a=[100,120,130,110],K=[80,50,50,80]×scale；受限逐期用静态模型，松弛逐期P=Q=a/2。不是论文通胀，不生成后验置信带。作者实验流程另列同θ、同smoothed shocks、all-slack反事实及measurement error。",
    "static_equivalent": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]。均为抽象价格单位。",
    "source_ids": [
      "EIDEF-S20"
    ],
    "identity": "teaching_assumption",
    "description": "同一输入路径，放松约束",
    "outputs": {
      "rows": [
        {
          "period": 1,
          "a": 100,
          "K": 80,
          "constrained_q": 50,
          "constrained_p": 50,
          "slack_q": 50,
          "slack_p": 50,
          "difference": 0,
          "mu": 0
        },
        {
          "period": 2,
          "a": 120,
          "K": 50,
          "constrained_q": 50,
          "constrained_p": 70,
          "slack_q": 60,
          "slack_p": 60,
          "difference": 10,
          "mu": 20
        },
        {
          "period": 3,
          "a": 130,
          "K": 50,
          "constrained_q": 50,
          "constrained_p": 80,
          "slack_q": 65,
          "slack_p": 65,
          "difference": 15,
          "mu": 30
        },
        {
          "period": 4,
          "a": 110,
          "K": 80,
          "constrained_q": 55,
          "constrained_p": 55,
          "slack_q": 55,
          "slack_p": 55,
          "difference": 0,
          "mu": 0
        }
      ],
      "identity": "same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei17-fig7-relax-constraints",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  },
  {
    "id": "exp-ei17-fig9-interaction",
    "node_id": "EI-17",
    "title": "条件效应与非线性交互",
    "anchor": "ei17-fig9",
    "method": "interaction",
    "controls": [
      {
        "key": "demandShock",
        "label": "教学需求截距增量u",
        "default": 30,
        "min": 0,
        "max": 80,
        "step": 5,
        "kind": "number"
      },
      {
        "key": "capacityReduction",
        "label": "教学容量减少v",
        "default": 30,
        "min": 0,
        "max": 60,
        "step": 5,
        "kind": "number"
      }
    ],
    "inputs": {
      "demandShock": 30,
      "capacityReduction": 30
    },
    "algorithm": "基准a100,K80；分别计算P(0,0),P(u,0),P(0,v),P(u,v)。conditional=P(u,v)−P(0,v)；interaction=conditional−[P(u,0)−P(0,0)]。非线性不强制贡献加总100%。",
    "static_equivalent": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15。教学价格，不是作者Figure9数值。",
    "source_ids": [
      "EIDEF-S20"
    ],
    "identity": "teaching_assumption",
    "description": "条件效应与非线性交互",
    "outputs": {
      "baseline": {
        "a": 100,
        "K": 80,
        "q": 50,
        "p": 50,
        "mu": 0,
        "slack": 30,
        "complementarity": 0,
        "regime": "松弛",
        "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
      },
      "demand_only": {
        "a": 130,
        "K": 80,
        "q": 65,
        "p": 65,
        "mu": 0,
        "slack": 15,
        "complementarity": 0,
        "regime": "松弛",
        "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
      },
      "capacity_only": {
        "a": 100,
        "K": 50,
        "q": 50,
        "p": 50,
        "mu": 0,
        "slack": 0,
        "complementarity": 0,
        "regime": "恰好触边，乘子为零",
        "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
      },
      "joint": {
        "a": 130,
        "K": 50,
        "q": 50,
        "p": 80,
        "mu": 30,
        "slack": 0,
        "complementarity": 0,
        "regime": "绑定且乘子为正",
        "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
      },
      "demand_effect_without_capacity": 15,
      "capacity_alone_effect": 0,
      "conditional_demand_effect": 30,
      "interaction": 15,
      "total_effect": 30,
      "identity": "price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei17-fig9-interaction",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  },
  {
    "id": "exp-ei17-static-capacity-complementarity",
    "node_id": "EI-17",
    "title": "产能互补松弛",
    "anchor": "ei17-kkt",
    "method": "capacity",
    "controls": [
      {
        "key": "a",
        "label": "逆需求截距a",
        "default": 120,
        "min": 0,
        "max": 200,
        "step": 5,
        "kind": "number"
      },
      {
        "key": "K",
        "label": "产能K",
        "default": 50,
        "min": 1,
        "max": 150,
        "step": 5,
        "kind": "number"
      }
    ],
    "inputs": {
      "a": 120,
      "K": 50
    },
    "algorithm": "最大化aQ−Q²,0≤Q≤K。a≥0,K>0；Q=min(a/2,K),P=a−Q,μ=a−2Q。显示slack与μ(Q−K)=0。a=0采用Q=P=μ=0。模型为静态教学经济，不是IMES复现。",
    "static_equivalent": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0。",
    "source_ids": [
      "EIDEF-S20"
    ],
    "identity": "teaching_assumption",
    "description": "产能互补松弛",
    "outputs": {
      "a": 120,
      "K": 50,
      "q": 50,
      "p": 70,
      "mu": 20,
      "slack": 0,
      "complementarity": 0,
      "regime": "绑定且乘子为正",
      "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei17-static-capacity-complementarity",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Supply Chain Constraints and Inflation](https://www.imes.boj.or.jp/research/papers/english/25-E-15.pdf): 同冲击、改约束的Figure 7反事实：Figure 7c在2021–2022总体消费价格通胀约高1–2pp；Figure 7a“约一半”对应2020Q2–2021Q2商品价格通胀加速，二者不是同一分母。Figure 9联合冲击减容量单独路径是另一运算；近似乘子、先验、测量误差与后验区间保留。

## Content relations
```json
[
  {
    "from": "zh-ei17",
    "relation": "part_of",
    "to": "industry-evidence",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei17",
    "relation": "uses_method",
    "to": "zh-ei03",
    "reason": "需求冲击"
  },
  {
    "from": "zh-ei17",
    "relation": "uses_method",
    "to": "zh-ei04",
    "reason": "容量上限"
  },
  {
    "from": "zh-ei17",
    "relation": "uses_method",
    "to": "zh-ei05",
    "reason": "投入网络"
  },
  {
    "from": "zh-ei17",
    "relation": "uses_method",
    "to": "zh-ei09",
    "reason": "动态传导"
  },
  {
    "from": "zh-ei17",
    "relation": "compares_with",
    "to": "zh-ei16",
    "reason": "原表综合阅读与结构模型研究"
  },
  {
    "from": "ei17-question",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算。近似乘子、先验、测量误差与后验区间保留。",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-question"
  },
  {
    "from": "ei17-kkt",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算。近似乘子、先验、测量误差与后验区间保留。",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-kkt"
  },
  {
    "from": "ei17-estimation",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算。近似乘子、先验、测量误差与后验区间保留。",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-estimation"
  },
  {
    "from": "ei17-fig7",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算。近似乘子、先验、测量误差与后验区间保留。",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-fig7"
  },
  {
    "from": "ei17-fig9",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算。近似乘子、先验、测量误差与后验区间保留。",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-fig9"
  },
  {
    "from": "ei17-kkt",
    "relation": "illustrated_by",
    "to": "exp-ei17-static-capacity-complementarity",
    "reason": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0。",
    "at_section": "ei17-kkt"
  },
  {
    "from": "ei17-fig7",
    "relation": "illustrated_by",
    "to": "exp-ei17-fig7-relax-constraints",
    "reason": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]。均为抽象价格单位。",
    "at_section": "ei17-fig7"
  },
  {
    "from": "ei17-fig9",
    "relation": "illustrated_by",
    "to": "exp-ei17-fig9-interaction",
    "reason": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15。教学价格，不是作者Figure9数值。",
    "at_section": "ei17-fig9"
  }
]
```

## Related entries
