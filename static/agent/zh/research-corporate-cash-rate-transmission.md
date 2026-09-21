# 现代研究阅读：企业现金与利率传导

逐步读现金交互回归、单位、样本和高低现金分组，再做有条件的企业映射.

Entry: zh-ei18 | Node: EI-18 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 推导FFR的条件斜率，核现金比率、百分点及对数单位. 保留原文编码疑点，并按声明尺度复算工作例. 读固定高低现金分组、2020基期和控制项，再将现金、债务到期及客户需求对应到公司材料. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei18",
  "node_id": "EI-18",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "从式(1)推出条件导数，用Table2(2)比较响应并记录来源单位疑点.",
  "required_readings": [
    {
      "source_id": "EIDEF-S03",
      "title": "The Role of Corporate Cash Holdings in the Transmission of Monetary Policy Tightening",
      "authors": [
        "JaeBin Ahn",
        "Euihyun Bae",
        "Jing Zhou"
      ],
      "version": "IMF WP 2024/245, November 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.imf.org/-/media/files/publications/wp/2024/english/wpiea2024245-print-pdf.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论. 印刷pp.3–10/PDF pp.5–12",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留."
      },
      "supports": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.",
      "id": "EI-18-READ-1",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei18-paper-map",
      "research_version": "IMF Working Paper 2024/245, November 2024",
      "sample": "U.S.-headquartered non-financial firms, 2010-2023",
      "equation_1": {
        "dependent_variable": "ln InterestIncome_it",
        "cash_ratio": "CashToAssets_(i,t-1), ratio from 0 to 1",
        "ffr": "effective federal funds rate",
        "interaction": "FFR_t * CashToAssets_(i,t-1)",
        "firm_fixed_effects": true,
        "marginal_response_formula": "d ln(InterestIncome) / d FFR = beta2 + beta4*C"
      },
      "Table_2_col2": {
        "beta2_FFR": 0.214,
        "beta4_FFR_x_cash": 0.398,
        "observations": 8413,
        "balanced_sample": true
      },
      "source_work_example": {
        "cash_ratio_difference": 0.02,
        "FFR_change_source_scale": 5.25,
        "normalized_interaction_log_units": 0.04179,
        "approx_log_points": 4.179,
        "source_prose_display": "≈ 0.4 × 2 × 5.25",
        "unit_caveat": "The paper's prose/displayed arithmetic uses inconsistent percentage-point/ratio scaling in places; retain the ambiguity rather than silently rewriting the authors."
      },
      "Table_3_unit_warning": "The fixed-rate-debt prose says 2 percentage points but the displayed calculation uses ×10; do not use it as a clean default numeric exercise.",
      "real_effect_grouping": {
        "high_cash_definition": "above 2020 within-2-digit-NAICS median cash-to-assets ratio",
        "base_year": 2020,
        "controls": "lagged log revenue and debt, firm and year fixed effects, sector-specific trends",
        "author_10_5_percent_counterfactual": "upper-bound framing, not randomized causal effect"
      }
    },
    "experiments": [
      {
        "id": "exp-ei18-paper-map",
        "node_id": "EI-18",
        "title": "交互项导数与工作例单位",
        "anchor": "ei18-table",
        "method": "paper",
        "controls": [
          {
            "key": "cashLow",
            "label": "低现金比例C",
            "default": 0.1,
            "min": 0,
            "max": 0.8,
            "step": 0.01,
            "kind": "number"
          },
          {
            "key": "cashGap",
            "label": "高低现金比例差ΔC",
            "default": 0.02,
            "min": 0,
            "max": 0.2,
            "step": 0.01,
            "kind": "number"
          },
          {
            "key": "ffrPP",
            "label": "FFR变动（工作例百分点）",
            "default": 5.25,
            "min": -10,
            "max": 10,
            "step": 0.25,
            "kind": "number"
          }
        ],
        "inputs": {
          "cashLow": 0.1,
          "cashGap": 0.02,
          "ffrPP": 5.25
        },
        "algorithm": "Table2(2)beta2=.214,beta4=.398固定；m(C)=beta2+beta4*C. mhigh−mlow=beta4ΔC；额外条件log差=beta4ΔCΔF，logpoints=100×log差，精确相对差=expm1(log差). 保持原文单位歧义提示.",
        "static_equivalent": "C=.10/.12斜率. 2538/.26176；在本篇声明的FFR工作尺度ΔF=5.25下，.04179 log units=4.179 logpoints≈4.27%精确相对变化. 来源单位疑点保留；非公司回报预测.",
        "source_ids": [
          "EIDEF-S03"
        ],
        "identity": "teaching_assumption",
        "description": "交互项导数与工作例单位",
        "outputs": {
          "cashLow": 0.1,
          "cashHigh": 0.12000000000000001,
          "derivativeLow": 0.2538,
          "derivativeHigh": 0.26176,
          "derivativeDifference": 0.00796,
          "logDifference": 0.04179,
          "logPoints": 4.179,
          "exactRelativeDifference": 0.04267549390443921,
          "interpretation": "Table2(2) conditional interaction; declared working-scale illustration with FFR=5.25 and cash-ratio gap encoded as 0.02; paper unit ambiguity retained; not company forecast"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei18-paper-map",
      "text": "Table 2(2)的条件斜率为 $0.214+0.398C$；现金比例0.10／0.12对应约0.254／0.262. 工作尺度取现金差0.02、FFR差5.25，额外条件变化为4.179个对数百分点，指数转换约4.268%. 原文比例与百分点编码有歧义，工作例明确采用上述尺度.",
      "outputs": {
        "cashLow": 0.1,
        "cashHigh": 0.12000000000000001,
        "derivativeLow": 0.2538,
        "derivativeHigh": 0.26176,
        "derivativeDifference": 0.00796,
        "logDifference": 0.04179,
        "logPoints": 4.179,
        "exactRelativeDifference": 0.04267549390443921,
        "interpretation": "Table2(2) conditional interaction; declared working-scale illustration with FFR=5.25 and cash-ratio gap encoded as 0.02; paper unit ambiguity retained; not company forecast"
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
<a id="ei18-question"></a>

## 企业现金与利率响应

[融资环境传导](https://ou-liu-red-sugar.github.io/zh/notebook/monetary-credit-transmission/)把资产利息、浮债费用和固定债再融资按合同时间表分开；在输入明确时可以直接计算利息增量. 经验研究还需处理现金、债务、利率、需求与企业行为共同变化的问题.

论文考察美国非金融企业的现金水平如何对应利息收入、费用、资本支出及就业的利率响应差异.

论文§2使用S&P Capital IQ的2010–2023资料，选美国总部企业，并排除NAICS以52开头的金融保险业. 总体约3300家公司、约23000企业—年观测；不同变量可用性和不同规格会改变回归样本. 现金口径包含现金和短期投资等，并不等同于只计银行活期存款. [^data]

<a id="ei18-equation"></a>

## 现金比例与条件斜率

令 $I_{it}$ 为利息收入，$A_{i,t-1}$ 为上一年的流动资产，$C_{i,t-1}$ 为上一年现金／总资产比率，$F_t$ 为有效联邦基金利率. 式(1)为

$$
\begin{aligned}
\ln I_{it}={}&\beta_1\ln A_{i,t-1}
+\beta_2F_t+\beta_3C_{i,t-1}\\
&+\beta_4F_tC_{i,t-1}
+\psi_i+\varepsilon_{it}.
\end{aligned}
$$

$\psi_i$ 为公司固定效应. 全国利率随年份变化，原式未加入完整年份固定效应. 对数因变量采用正利息收入；复现样本筛选需原始处理规则. [^eq]

固定其他回归量，利率的条件斜率为

$$
\frac{\partial\ln I}{\partial F}=\beta_2+\beta_4C.
$$

对现金比例的条件斜率则为 $\beta_3+\beta_4F$. 交互系数 $\beta_4$ 计量一条斜率随另一变量的变化.

若只比较两个现金比例 $C_H,C_L$，利率斜率之差是

$$
m(C_H)-m(C_L)=\beta_4(C_H-C_L).
$$

固定现金比例等其他变量，利率变化 $\Delta F$ 对两者产生的**额外条件对数变化差**为
$$
\Delta\ln I_H-\Delta\ln I_L
=\beta_4(C_H-C_L)\Delta F.
$$

<a id="ei18-table"></a>

## Table 2 的尺度与工作例

Table 2(2)是平衡样本规格，8,413个企业—年观测，纳入公司固定效应，标准误在公司层聚类. 我们只提取本任务所需的两行：FFR系数0.214，FFR与滞后现金比例的交互系数0.398. [^table]

| Table 2(2)采用项 | 数值／身份 |
|---|---|
| 因变量 | 利息收入的自然对数 |
| FFR系数 $\beta_2$ | 0.214 |
| 交互系数 $\beta_4$ | 0.398 |
| 现金比例C | 0到1的比率，滞后一年 |
| 观测数 | 8,413企业—年 |
| 样本和误差 | 平衡样本，公司固定效应，公司聚类标准误 |

Table 1将现金比率按0–1记录，但正文“两百分点”的展示算式使用 $0.4\times2\times5.25$；Table 3也有文字2个百分点与展示乘10的差异. 因此以下采用明确的工作尺度：现金比率差0.02，FFR变化按百分点数值5.25代入，来源编码仍待澄清. [^units]

取 $C_L=0.10,C_H=0.12$，条件斜率分别为
$$
\begin{aligned}
m(C_L)&=0.214+0.398\times0.10\approx0.254,\\
m(C_H)&=0.214+0.398\times0.12\approx0.262.
\end{aligned}
$$
给定利率变化，两组额外条件对数变化差以对数百分点表示为
$$
100\times0.398\times0.02\times5.25=4.179.
$$

同一工作尺度的精确相对水平差为 $\exp(0.398\times0.02\times5.25)-1\approx4.268\%$，计量条件利息收入变化.

<div data-experiment-slot="exp-ei18-paper-map"></div>

固定系数与FFR变化时，现金比率差翻倍使交互项对数变化翻倍；水平比例通过指数转换.

<a id="ei18-debt"></a>

## 债务结构与实际活动

§3.2在利息费用回归中加入债务规模、固定债比例、现金比例及FFR交互. 固定债可延缓费用重定价，现金可减少新增融资需求，研究在指定变量和控制下检验这些关系. [^debt]

回到美元净利息需分别取得收入和费用水平，在一致期间及规格下将各自对数变化还原为金额，再相减；实际现金收付还需合同日期.

§3.3按2020年同一两位NAICS行业内现金／资产中位数固定划分高低组，以2020为基期，控制滞后收入、债务、公司及年份固定效应和行业趋势，估计后续相对路径. [^activity]

用 $H_i$ 表示这个固定分组，一个阅读用重排式是
$$
\begin{aligned}
\ln Y_{it}
&=\sum_{s\ne2020}\gamma_s\mathbf1_{\{t=s\}}H_i\\
&\quad+\Gamma X_{i,t-1}+\psi_i+\kappa_t\\
&\quad+\text{行业趋势}+\varepsilon_{it}.
\end{aligned}
$$
这个写法帮助解释Figure 4的纵轴：$\gamma_s$描述相对2020基期的组间路径差，不是某一年的高现金企业总投资额. 论文显示资本支出与就业在部分疫情后年份出现差异；作者给出的10%／5%量级保留其上界反事实身份，不能当作随机试验效应. [^activity]

高低组由既有现金水平划分，现金与后续活动仍可共同受未观测需求和企业选择影响，因果解释需处理这些因素.

<a id="ei18-transfer"></a>

## 公司层面的材料对应

公司分析需将研究变量对应到自己的现金定义、固定与浮动债、到期日和客户需求.

现金及短期投资需核受限状态，债务需核重置及到期安排，利息收入费用需核财报口径，再结合公司所处经营环境建立传导路径.

<a id="ei18-exercises"></a>

## 重建与迁移

<strong>任务一：</strong>从式(1)推利率斜率，并解释为什么只看0.214不够.

<strong>解析.</strong> 条件斜率为 $0.214+0.398C$，0.214对应 $C=0$，其他现金比例通过交互项改变斜率.

<strong>任务二：</strong>按本篇工作例尺度，现金比率差0.02、FFR差5.25. 算额外条件变化，再把现金差改为0.04.

<strong>解析.</strong> 工作尺度下，两种现金差对应4.179、8.358个对数百分点，水平变化分别为 $\exp(0.398\times0.02\times5.25)-1$ 和 $\exp(0.398\times0.04\times5.25)-1$.

<strong>任务三：</strong>有人拿收入回归系数0.398减费用回归交互系数，称为“净利息美元收益”. 指出缺项.

<strong>解析.</strong> 收入、费用的对数采用不同基数. 需两者的水平、共同期间与一致规格，分别还原金额，再按支付时点安排现金.

<strong>迁移任务：</strong>高现金公司明年有大额固定债集中到期，客户订单同时转弱. 怎样使用本篇而不机械套用“现金多抵抗加息”？

<strong>解析.</strong> 按到期时间计算融资需求与报价，核可动用现金；用订单及客户资料另建业务需求路径. 现金、固定债比例与论文变量对应，到期集中和需求冲击需公司材料补足.

[^imf]: EIDEF-S03. JaeBin Ahn、Euihyun Bae、Jing Zhou，*The Role of Corporate Cash Holdings in the Transmission of Monetary Policy Tightening*，IMF Working Paper 2024/245，2024年11月.[正式PDF](https://www.imf.org/-/media/files/publications/wp/2024/english/wpiea2024245-print-pdf.pdf).
[^data]: 同源§2及Table 1，印刷pp.3–4／PDF pp.5–6；定位：样本选择、现金字段与单位.
[^eq]: 同源§3.1式(1)，印刷p.4／PDF p.6；定位：滞后一年变量、公司固定效应及交互项.
[^table]: 同源Table 2第(2)列及表注，印刷p.5／PDF p.7；定位：已发表系数.
[^units]: 同源Table 2下工作例、Table 3及§3.2，印刷pp.5–7／PDF pp.7–9；定位：百分比／比例及“2与10”显示差异，本文工作例采用明确归一尺度.
[^debt]: 同源§3.2式(2)和Table 3，印刷pp.6–7／PDF pp.8–9；定位：利息费用、债务结构、现金及交互项.
[^activity]: 同源§3.3式(3)、Figure 4与结论，印刷pp.7–10／PDF pp.9–12；定位：2020行业内中位数分组、基期、滞后控制、固定效应与上界解释.

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>

## Additional teaching material
## 静态计算

Table 2(2)的条件斜率为 $0.214+0.398C$；现金比例0.10／0.12对应约0.254／0.262. 工作尺度取现金差0.02、FFR差5.25，额外条件变化为4.179个对数百分点，指数转换约4.268%. 原文比例与百分点编码有歧义，工作例明确采用上述尺度.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei18-paper-map",
    "node_id": "EI-18",
    "title": "交互项导数与工作例单位",
    "anchor": "ei18-table",
    "method": "paper",
    "controls": [
      {
        "key": "cashLow",
        "label": "低现金比例C",
        "default": 0.1,
        "min": 0,
        "max": 0.8,
        "step": 0.01,
        "kind": "number"
      },
      {
        "key": "cashGap",
        "label": "高低现金比例差ΔC",
        "default": 0.02,
        "min": 0,
        "max": 0.2,
        "step": 0.01,
        "kind": "number"
      },
      {
        "key": "ffrPP",
        "label": "FFR变动（工作例百分点）",
        "default": 5.25,
        "min": -10,
        "max": 10,
        "step": 0.25,
        "kind": "number"
      }
    ],
    "inputs": {
      "cashLow": 0.1,
      "cashGap": 0.02,
      "ffrPP": 5.25
    },
    "algorithm": "Table2(2)beta2=.214,beta4=.398固定；m(C)=beta2+beta4*C. mhigh−mlow=beta4ΔC；额外条件log差=beta4ΔCΔF，logpoints=100×log差，精确相对差=expm1(log差). 保持原文单位歧义提示.",
    "static_equivalent": "Table 2(2)的条件斜率为 $0.214+0.398C$；现金比例0.10／0.12对应约0.254／0.262. 工作尺度取现金差0.02、FFR差5.25，额外条件变化为4.179个对数百分点，指数转换约4.268%. 原文比例与百分点编码有歧义，工作例明确采用上述尺度.",
    "source_ids": [
      "EIDEF-S03"
    ],
    "identity": "teaching_assumption",
    "description": "交互项导数与工作例单位",
    "outputs": {
      "cashLow": 0.1,
      "cashHigh": 0.12000000000000001,
      "derivativeLow": 0.2538,
      "derivativeHigh": 0.26176,
      "derivativeDifference": 0.00796,
      "logDifference": 0.04179,
      "logPoints": 4.179,
      "exactRelativeDifference": 0.04267549390443921,
      "interpretation": "Table2(2) conditional interaction; declared working-scale illustration with FFR=5.25 and cash-ratio gap encoded as 0.02; paper unit ambiguity retained; not company forecast"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei18-paper-map",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [The Role of Corporate Cash Holdings in the Transmission of Monetary Policy Tightening](https://www.imf.org/-/media/files/publications/wp/2024/english/wpiea2024245-print-pdf.pdf): 现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.

## Content relations
```json
[
  {
    "from": "zh-ei18",
    "relation": "part_of",
    "to": "industry-evidence",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei18",
    "relation": "requires",
    "to": "zh-ei10",
    "reason": "资产/负债重定价与期限",
    "required_competence": "资产/负债重定价与期限"
  },
  {
    "from": "zh-ei18",
    "relation": "uses_method",
    "to": "zh-balance-sheet",
    "reason": "披露变量映射"
  },
  {
    "from": "zh-ei18",
    "relation": "uses_method",
    "to": "zh-bf19",
    "reason": "现金和债务期限"
  },
  {
    "from": "zh-ei18",
    "relation": "compares_with",
    "to": "zh-ei10",
    "reason": "模型机制与实证研究各自职责"
  },
  {
    "from": "ei18-equation",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论. 印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-equation"
  },
  {
    "from": "ei18-table",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论. 印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-table"
  },
  {
    "from": "ei18-debt",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论. 印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-debt"
  },
  {
    "from": "ei18-transfer",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log. Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留.",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论. 印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-transfer"
  },
  {
    "from": "ei18-table",
    "relation": "illustrated_by",
    "to": "exp-ei18-paper-map",
    "reason": "C=.10/.12斜率. 2538/.26176；ΔF=5.25给. 04179 log units=4.179 logpoints≈4.27%精确相对变化. 非公司回报预测.",
    "at_section": "ei18-table"
  }
]
```

## Related entries
