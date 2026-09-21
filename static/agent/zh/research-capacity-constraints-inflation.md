# 现代研究阅读：产能约束与通胀

从互补松弛走到同冲击反事实与非线性交互，分清论文重建和教学模拟.

Entry: zh-ei17 | Node: EI-17 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 从a＝100、K＝50诊断互补松弛和零乘子边界，再重建同冲击约束反事实与四状态交互. Figure 7c的2021–2022总体通胀高1–2 pp，与7a的2020Q2–2021Q2商品通胀加速约一半，分别标清对象及期间. 用公司量价变化提出替代解释. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei17",
  "node_id": "EI-17",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "重建容量约束的作用与Figure 7/9的不同运算，不伪造作者后验时间序列.",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "Figure 7保持同一组smoothed shocks、只把约束改为始终松弛；Figure 7c的2021–2022总体通胀高约1–2pp，与Figure 7a的2020Q2–2021Q2商品通胀加速约一半是不同面板/期间/分母. Figure 9联合冲击减容量单独路径另行识别交互."
      },
      "supports": "Figure 7保持同一组smoothed shocks、只把约束改为始终松弛；Figure 7c的2021–2022总体通胀高约1–2pp，与Figure 7a的2020Q2–2021Q2商品通胀加速约一半是不同面板/期间/分母. Figure 9联合冲击减容量单独路径另行识别交互.",
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
        "algorithm": "最大化aQ−Q²,0≤Q≤K. a≥0,K>0；Q=min(a/2,K),P=a−Q,μ=a−2Q. 显示slack与μ(Q−K)=0. a=0采用Q=P=μ=0. 模型为静态教学经济，不是IMES复现.",
        "static_equivalent": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0.",
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
        "algorithm": "新增教学路径a=[100,120,130,110],K=[80,50,50,80]×scale；受限逐期用静态模型，松弛逐期P=Q=a/2. 不是论文通胀，不生成后验置信带. 作者实验流程另列同θ、同smoothed shocks、all-slack反事实及measurement error.",
        "static_equivalent": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]. 均为抽象价格单位.",
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
        "algorithm": "基准a100,K80；分别计算P(0,0),P(u,0),P(0,v),P(u,v). conditional=P(u,v)−P(0,v)；interaction=conditional−[P(u,0)−P(0,0)]. 非线性不强制贡献加总100%.",
        "static_equivalent": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15. 教学价格，不是作者Figure9数值.",
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
      "text": "单期教学模型 $Q=\\min(a/2,K)$、$P=a-Q$、$\\mu=a-2Q$. $K=80$ 时，$a$ 从100增至120，量价均从50增至60；$K=50$ 时，$a$ 从120增至130，产量50、价格70变80、乘子20变30. $a=100,K=50$ 恰好触边，乘子为零.",
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
      "text": "教学四期需求100、120、130、110，容量80、50、50、80. 受限价格50、70、80、55；放松上限且保持需求时，价格50、60、65、55；差为0、10、15、0，均为抽象价格单位.",
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
      "text": "基准、仅需求冲击、仅容量冲击和联合冲击的教学价格依次50、65、50、80. 需求单独效应15，容量单独效应0，容量背景下需求效应30，交互项15.",
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
<a id="ei17-question"></a>

## 冲击与产能约束

Comin、Johnson、Jones的模型联合国内外生产、投入联系、价格调整和容量上限，使用美国1990Q1–2023Q4季度资料估计. 反事实先在允许容量绑定的模型中滤出冲击，再固定这些冲击、令约束始终松弛，比较两条路径. [^paper][^data][^counter]

<a id="ei17-kkt"></a>

## 互补松弛与影子价格

在论文§2.2.2中，企业价格决策要面对产量上限. 简写某期某企业的产量为 $Y$、上限为 $\bar Y$、乘子为 $\mu$，必须同时满足

$$
Y\le\bar Y,\qquad
\mu\ge0,\qquad
\mu(Y-\bar Y)=0.
$$

最后一条是互补松弛：有闲置容量时，乘子必须为0；乘子严格为正时，产量必在上限. 反过来，仅有 $Y=\bar Y$ 并不强迫 $\mu>0$，因为需求恰好把产量推到边界时，增加一点容量也可能没有一阶价值. [^model]

论文价格一阶条件将边际成本与产能乘子共同纳入最优价格，线性化的国内及进口定价方程保留乘子项. 上限通过额外一单位供给的影子成本影响价格；模型同时包含投入替代和粘性价格. [^model]

为了手算这三个条件，我们另设一个**静态教学经济**：逆需求 $P=a-Q$，边际生产成本为 $Q$，总产出不得超过 $K>0$. 其竞争配置可由最大化总剩余重建：

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

以下单期竞争例隔离成本、容量和影子价格的关系.

| 教学情景 | a | K | Q | P | μ |
|---|---:|---:|---:|---:|---:|
| 需求较低，容量松弛 | 100 | 80 | 50 | 50 | 0 |
| 同一容量，需求增加 | 120 | 80 | 60 | 60 | 0 |
| 需求不变，容量较紧 | 120 | 50 | 50 | 70 | 20 |
| 已受限后需求继续增加 | 130 | 50 | 50 | 80 | 30 |
| 恰好触边 | 100 | 50 | 50 | 50 | 0 |

松弛内点中，需求增加同时提高价格和数量；容量生效后，需求增加只提高价格及乘子. 量价组合的解释因约束状态而变化.

<div data-experiment-slot="exp-ei17-static-capacity-complementarity"></div>

<a id="ei17-estimation"></a>

## 数据映射与约束估计

§3将消费价格、支出、工业生产、劳动生产率、进口价格和支出映射到模型变量，工业生产作为商品部门产出的代理，增长及通胀序列按作者方法去均值. [^data]

给定候选参数和约束持续时间后，作者滤出平滑冲击，检验所得路径与候选状态是否相容. 基准先验仅允许2020Q2起约束生效，因此更早的零乘子由这一先验限定. [^data]

分段线性近似可能留下小的负乘子残差，属于数值误差；理论KKT仍要求乘子非负. [^counter]

<a id="ei17-fig7"></a>

## 同冲击约束反事实

论文§4.2的迭代可用一张流程表重建. 对每次后验抽样 $b$，先得到参数 $\theta^{(b)}$ 和约束持续时间，再在**允许约束生效的模型**中从数据滤出冲击路径 $\hat\varepsilon^{(b)}$. 随后保持这些冲击，改用始终松弛的约束运行模型. [^counter]

$$
\begin{aligned}
X^{(b)}_{\mathrm{constrained}}
 &=F(\theta^{(b)},\hat\varepsilon^{(b)};\text{允许绑定}),\\
X^{(b)}_{\mathrm{slack}}
 &=F(\theta^{(b)},\hat\varepsilon^{(b)};\text{始终松弛}).
\end{aligned}
$$

$F$ 表示模型求解映射. 两条路径保持参数和滤出冲击相同，差别来自约束是否允许绑定.

Figure 7的纵轴为去均值的季度通胀年化值；季度对数变动 $\pi_t$ 以百分比显示时乘400. 图比较数据与反事实中位数，约1000次后验模拟形成第5至95分位区间，并按原文处理测量误差. [^counter]

Figure 7c中，2021–2022总体消费价格通胀的实际路径比松弛反事实高约1–2个百分点. Figure 7a及正文的“约一半”则指2020Q2–2021Q2商品价格通胀的加速. 两个结论分别限定对象和期间. [^counter]

另设四期教学需求 $a=(100,120,130,110)$、容量 $K=(80,50,50,80)$，逐期使用静态规则. 放松容量后保持同一 $a$，有 $P=Q=a/2$.

| 教学期 | 相同需求a | 容量K | 受限价格 | 始终松弛价格 | 价格差 |
|---|---:|---:|---:|---:|---:|
| 1 | 100 | 80 | 50 | 50 | 0 |
| 2 | 120 | 50 | 70 | 60 | 10 |
| 3 | 130 | 50 | 80 | 65 | 15 |
| 4 | 110 | 80 | 55 | 55 | 0 |

这些价格以抽象货币单位记录，各期独立求解.

<div data-experiment-slot="exp-ei17-fig7-relax-constraints"></div>

<a id="ei17-fig9"></a>

## 冲击交互

Figure 9a让各类冲击分别进入模型；Figure 9b则把某类冲击与容量冲击一起放入，再减去容量冲击单独作用的路径. 作者用这一步观察同一种冲击在容量路径不同的背景下怎样表现. [^interaction]

令 $G(u,v)$ 表示给定其他模型条件时，具名冲击 $u$ 与容量冲击 $v$ 产生的某一结果. Figure 9b对应的比较结构是
$$
G(u,v)-G(0,v),
$$
它与单独施加冲击 $u$ 时的变化 $G(u,0)-G(0,0)$ 相减，得到交互项：
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

需求单独效应15，较紧容量背景下需求效应30，交互项15. 容量冲击单独只使产量触边，联合需求冲击后才形成正的容量乘子.

两个单独效应合计15，联合效应30，其余15由交互产生，进一步分配需要指定归因规则. Figure 7比较约束制度，Figure 9比较冲击组合.

<div data-experiment-slot="exp-ei17-fig9-interaction"></div>

<a id="ei17-exercises"></a>

## 重建与迁移

<strong>任务一：</strong>$a=100,K=50$时为什么产量在上限，但乘子为0？把a再提高到110会怎样？

<strong>解析：</strong>无约束最优产量正好是50，增加容量没有边际收益，所以触边不必有正乘子. a升到110后，产量仍50，价格60，$\mu=10$；此时放宽容量才能增加可满足需求.

<strong>任务二：</strong>有人为“无约束反事实”重新估计了一套更小的需求冲击，然后比较通胀. 它还是本篇Figure 7的实验吗？

<strong>解析：</strong>不是. 比较中同时改变了约束和冲击来源，差距不能只归于放松约束. 作者流程先在允许约束的模型中滤出冲击，再保持同组冲击进入无约束模型；测量误差及后验抽样也要沿其原约定处理.

<strong>任务三：</strong>用上一节四格价格重算Figure 9b式差分、无容量冲击的需求效应和交互项.

<strong>解析.</strong> 条件需求效应 $80-50=30$，无容量冲击的需求效应 $65-50=15$，两者差15为交互项，单位均为教学价格差.

<strong>迁移任务：</strong>一家制造商的产品价格上涨，但实物交付持平. 这能否直接识别其产能约束？

<strong>解析.</strong> 需求增长且容量绑定可产生价格升、交付平；产品组合、检修、配给或调价时间也可产生类似观察. 可用容量、排产、实物订单及交期能区分这些解释.

[^paper]: EIDEF-S20，Diego Comin、Robert C. Johnson、Callum Jones，*Supply Chain Constraints and Inflation*，IMES Discussion Paper 2025-E-15，2025年10月；固定72页公开版本. [全文](https://www.imes.boj.or.jp/research/papers/english/25-E-15.pdf).
[^model]: 同源§2.2.2，印刷pp.12–13（PDF物理pp.15–16），生产、价格条件与互补松弛式(6)–(7)；§2.6.1印刷pp.17–18（PDF pp.20–21），定价关系.
[^data]: 同源§3，印刷pp.21–26（PDF pp.24–29），数据、参数、持续时间与先验；季度美国资料1990Q1–2023Q4.
[^counter]: 同源§4.1–4.2，印刷pp.27–30（PDF pp.30–33）；Figure 7位于印刷p.29／PDF p.32，脚注34–35含近似乘子、测量误差说明.
[^interaction]: 同源§4.3，印刷pp.31–33（PDF pp.34–36）；Figure 9位于印刷p.32／PDF p.35，图下正文明确“联合冲击路径减容量冲击单独路径”.

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>

## Additional teaching material
## 静态计算

单期教学模型 $Q=\min(a/2,K)$、$P=a-Q$、$\mu=a-2Q$. $K=80$ 时，$a$ 从100增至120，量价均从50增至60；$K=50$ 时，$a$ 从120增至130，产量50、价格70变80、乘子20变30. $a=100,K=50$ 恰好触边，乘子为零.

教学四期需求100、120、130、110，容量80、50、50、80. 受限价格50、70、80、55；放松上限且保持需求时，价格50、60、65、55；差为0、10、15、0，均为抽象价格单位.

基准、仅需求冲击、仅容量冲击和联合冲击的教学价格依次50、65、50、80. 需求单独效应15，容量单独效应0，容量背景下需求效应30，交互项15.

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
    "algorithm": "新增教学路径a=[100,120,130,110],K=[80,50,50,80]×scale；受限逐期用静态模型，松弛逐期P=Q=a/2. 不是论文通胀，不生成后验置信带. 作者实验流程另列同θ、同smoothed shocks、all-slack反事实及measurement error.",
    "static_equivalent": "教学四期需求100、120、130、110，容量80、50、50、80. 受限价格50、70、80、55；放松上限且保持需求时，价格50、60、65、55；差为0、10、15、0，均为抽象价格单位.",
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
    "algorithm": "基准a100,K80；分别计算P(0,0),P(u,0),P(0,v),P(u,v). conditional=P(u,v)−P(0,v)；interaction=conditional−[P(u,0)−P(0,0)]. 非线性不强制贡献加总100%.",
    "static_equivalent": "基准、仅需求冲击、仅容量冲击和联合冲击的教学价格依次50、65、50、80. 需求单独效应15，容量单独效应0，容量背景下需求效应30，交互项15.",
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
    "algorithm": "最大化aQ−Q²,0≤Q≤K. a≥0,K>0；Q=min(a/2,K),P=a−Q,μ=a−2Q. 显示slack与μ(Q−K)=0. a=0采用Q=P=μ=0. 模型为静态教学经济，不是IMES复现.",
    "static_equivalent": "单期教学模型 $Q=\\min(a/2,K)$、$P=a-Q$、$\\mu=a-2Q$. $K=80$ 时，$a$ 从100增至120，量价均从50增至60；$K=50$ 时，$a$ 从120增至130，产量50、价格70变80、乘子20变30. $a=100,K=50$ 恰好触边，乘子为零.",
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
- [Supply Chain Constraints and Inflation](https://www.imes.boj.or.jp/research/papers/english/25-E-15.pdf): Figure 7 比较同一冲击下改变约束的反事实. 7c 的 1–2 pp 对应 2021–2022 年总体消费价格通胀；7a 的“约一半”对应 2020Q2–2021Q2 商品价格通胀加速. Figure 9 另计算联合冲击路径减去容量单独路径，估计包含先验、测量误差与后验区间.

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
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算. 近似乘子、先验、测量误差与后验区间保留.",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-question"
  },
  {
    "from": "ei17-kkt",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算. 近似乘子、先验、测量误差与后验区间保留.",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-kkt"
  },
  {
    "from": "ei17-estimation",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算. 近似乘子、先验、测量误差与后验区间保留.",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-estimation"
  },
  {
    "from": "ei17-fig7",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算. 近似乘子、先验、测量误差与后验区间保留.",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-fig7"
  },
  {
    "from": "ei17-fig9",
    "relation": "supported_by",
    "to": "EIDEF-S20",
    "reason": "容量互补松弛；同冲击松弛约束反事实与联合冲击减容量单独路径是不同运算. 近似乘子、先验、测量误差与后验区间保留.",
    "locator": "§2.2.2 printed12–13；§2.6.1 printed17–18；§3 printed21–26；§4.1–4.3 printed27–33；Fig7 p29/PDF32；Fig9 p32/PDF35",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei17-fig9"
  },
  {
    "from": "ei17-kkt",
    "relation": "illustrated_by",
    "to": "exp-ei17-static-capacity-complementarity",
    "reason": "K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0.",
    "at_section": "ei17-kkt"
  },
  {
    "from": "ei17-fig7",
    "relation": "illustrated_by",
    "to": "exp-ei17-fig7-relax-constraints",
    "reason": "scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]. 均为抽象价格单位.",
    "at_section": "ei17-fig7"
  },
  {
    "from": "ei17-fig9",
    "relation": "illustrated_by",
    "to": "exp-ei17-fig9-interaction",
    "reason": "默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15. 教学价格，不是作者Figure9数值.",
    "at_section": "ei17-fig9"
  }
]
```

## Related entries
