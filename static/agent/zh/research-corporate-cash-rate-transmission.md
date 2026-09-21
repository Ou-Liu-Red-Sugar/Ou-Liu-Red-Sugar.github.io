# 现代研究阅读：企业现金与利率传导

逐步读现金交互回归、单位、样本和高低现金分组，再做有条件的企业映射。

Entry: zh-ei18 | Node: EI-18 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-18《现代研究阅读：企业现金与利率传导》，采用内容版本2026-09-21-review-v2，当前范围：本篇完整学习单元。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先从式(1)对FFR求导，解释现金比率0.02与2个百分点，并检查工作例log单位和现金收益率有何区别。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：条件导数和差分正确、工作例单位疑点保留、高低现金分组/控制项和外推边界齐全；不把观察性分组当随机试验。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei18",
  "node_id": "EI-18",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "从式(1)推出条件导数，用Table2(2)比较响应并记录来源单位疑点。",
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
        "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论。印刷pp.3–10/PDF pp.5–12",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。"
      },
      "supports": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。",
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
        "algorithm": "Table2(2)beta2=.214,beta4=.398固定；m(C)=beta2+beta4*C。mhigh−mlow=beta4ΔC；额外条件log差=beta4ΔCΔF，logpoints=100×log差，精确相对差=expm1(log差)。保持原文单位歧义提示。",
        "static_equivalent": "C=.10/.12斜率.2538/.26176；在本篇声明的FFR工作尺度ΔF=5.25下，.04179 log units=4.179 logpoints≈4.27%精确相对变化。来源单位疑点保留；非公司回报预测。",
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
      "text": "C=.10/.12斜率.2538/.26176；在本篇声明的FFR工作尺度ΔF=5.25下，.04179 log units=4.179 logpoints≈4.27%精确相对变化。来源单位疑点保留；非公司回报预测。",
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
<strong>本篇任务：</strong>从一条带交互项的回归，读出现金比例怎样改变利率与利息收入的条件关系；再检查样本、单位、分组和迁移边界。主要材料为Ahn、Bae和Zhou的IMF Working Paper 2024/245，约18–20分钟完成。[^imf]

<a id="ei18-question"></a>

## 一、从资产负债机制转向经验问题

在[融资环境传导](https://ou-liu-red-sugar.github.io/zh/notebook/monetary-credit-transmission/)中，我们已经把资产利息、浮债费用和固定债再融资分开。那里的合同算例只要输入明确，就能直接算出相应增量。经验研究面对的问题不同：企业的现金和债务不是实验员随机分配的，利率变化也可能与需求、行业和企业行为共同发生。

这篇论文询问：在美国非金融企业资料中，现金较多的企业，利息收入和费用对利率变化的响应是否不同？这种异质性是否又与资本支出和就业路径有关？它提供的是特定数据和规格中的证据，不能直接把系数当作一家公司的现金收益率。

论文§2使用S&P Capital IQ的2010–2023资料，选美国总部企业，并排除NAICS以52开头的金融保险业。总体约3300家公司、约23000企业—年观测；不同变量可用性和不同规格会改变回归样本。现金口径包含现金和短期投资等，并不等同于只计银行活期存款。[^data]

<a id="ei18-equation"></a>

## 二、完整读懂式(1)：利率斜率随现金比例变化

令 $I_{it}$ 为利息收入，$A_{i,t-1}$ 为上一年的流动资产，$C_{i,t-1}$ 为上一年现金／总资产比率，$F_t$ 为有效联邦基金利率。式(1)为

$$
\begin{aligned}
\ln I_{it}={}&\beta_1\ln A_{i,t-1}
+\beta_2F_t+\beta_3C_{i,t-1}\\
&+\beta_4F_tC_{i,t-1}
+\psi_i+\varepsilon_{it}.
\end{aligned}
$$

$\psi_i$是公司固定效应。这里没有把“公司固定效应”自动写成“公司和年份固定效应”；全国共同利率本身就随年份变化，规格必须按原式读取。对数因变量也要求回归使用可取对数的收入记录；没有底层处理代码时，不自行补造零或负利息收入的处理规则。[^eq]

为什么要保留交互项？固定其他回归量，利率的条件斜率是

$$
\frac{\partial\ln I}{\partial F}=\beta_2+\beta_4C.
$$

而对现金比例求导则为 $\partial\ln I/\partial C=\beta_3+\beta_4F$。因此 $\beta_4$既不是“现金每多一美元能赚多少”，也不是所有公司的共同利率弹性；它描述一条斜率怎样随另一个变量变化。

若只比较两个现金比例 $C_H,C_L$，利率斜率之差是

$$
m(C_H)-m(C_L)=\beta_4(C_H-C_L).
$$

固定现金比例等其他变量，利率变化 $\Delta F$ 对两者产生的**额外条件对数变化差**为
$$
\Delta\ln I_H-\Delta\ln I_L
=\beta_4(C_H-C_L)\Delta F.
$$

这是从回归函数推得的条件比较，不是重新估计，也不是两家现实公司实际收入变化之差；后者还包含资产规模、未观测因素和其他变量的变化。

<a id="ei18-table"></a>

## 三、把Table 2第(2)列变成可复核工作例

Table 2(2)是平衡样本规格，8,413个企业—年观测，纳入公司固定效应，标准误在公司层聚类。我们只提取本任务所需的两行：FFR系数0.214，FFR与滞后现金比例的交互系数0.398。[^table]

| Table 2(2)采用项 | 数值／身份 |
|---|---|
| 因变量 | 利息收入的自然对数 |
| FFR系数 $\beta_2$ | 0.214 |
| 交互系数 $\beta_4$ | 0.398 |
| 现金比例C | 0到1的比率，滞后一年 |
| 观测数 | 8,413企业—年 |
| 样本和误差 | 平衡样本，公司固定效应，公司聚类标准误 |

按本文明确声明的**工作例尺度**，FFR变化用百分点数值。取 $C_L=0.10,C_H=0.12$，则
$$
m(C_L)=0.214+0.398\times0.10=0.2538,
$$
$$
m(C_H)=0.214+0.398\times0.12=0.26176.
$$
两条条件斜率差0.00796。若利率变化按该工作例为5.25个百分点，就得到
$$
0.398\times0.02\times5.25=0.04179.
$$

0.04179是自然对数单位，等于4.179个对数百分点。把它当小幅百分比近似约4.18%；按指数精确转换则为 $\exp(0.04179)-1\approx4.27\%$。这仍只是按给定尺度重建的条件相对差，不是现金投资获得4.27%的收益，也不是公司整体利润增加4.27%。

这里的4.27%只在本篇**人为声明的工作尺度**下成立：我们把“2 percentage points”按现金比例变量的0–1定义归一为0.02，并把5.25按来源工作例的FFR尺度代入。如果源数据对FFR或现金比例采用另一种百分数编码，数值必须随编码重新换算。因此交互中的这一结果是 `working-scale illustration`，不是作者已经澄清的唯一单位解释。

**原文尺度需要保留疑点。** Table 1把现金比例写为0–1比率，Table 2正文举“两百分点”的例子，但展示算式写成近似 $0.4\times2\times5.25$，以文字百分数表达结果。其他系数的文字解释与此尺度也需要对照。本文没有悄悄改写作者的数据编码，而是明确把2个百分点归一成0.02后做上述工作例。Table 3的固定债例还存在文字说2个百分点、展示乘10的不同；它不适合作为无歧义的默认数值题。[^units]

<div data-experiment-slot="exp-ei18-paper-map"></div>

实验固定所采用的系数，让读者改变**假设的**现金比例差与FFR变动，显示条件斜率差、对数单位和指数转换。它不接入现实企业、不预测收入金额。把现金比例差从0.02改为0.04，会让本条件交互差加倍；这来自线性规格，不证明实际企业反应在任何区间都线性。

<a id="ei18-debt"></a>

## 四、资产端之后，怎样读负债端和实际活动

论文§3.2转向利息费用，加入债务规模、固定利率债务比例、现金比例以及它们与FFR的交互。其经验方向与合同机制相呼应：较多固定债可能延缓费用重定价，较多现金可能减少对新融资的依赖。我们只按论文变量和条件解释这种关系，不从这张表宣布“固定债比例越高，一切时候融资越便宜”。[^debt]

尤其不能把Table 2的利息收入对数系数与Table 3的费用对数系数直接相减，称为美元净利息变化。两个对数因变量的基数不同，样本和规格也不同。若要回到净现金，需要各自的水平、相同期间、合同时间和一致样本；这正是合同算例与经验回归之间必须补上的接口。

接着读§3.3。作者以2020年同一两位NAICS行业内现金／资产的中位数分成高低现金组，以2020作为比较基期，估计不同年份相对路径；模型控制滞后收入、债务、公司与年份固定效应、行业趋势。这里的“高现金”是按基期定义的组，而不是每一年重新把企业排一次名。[^activity]

用 $H_i$ 表示这个固定分组，一个阅读用重排式是
$$
\begin{aligned}
\ln Y_{it}
&=\sum_{s\ne2020}\gamma_s\mathbf1_{\{t=s\}}H_i\\
&\quad+\Gamma X_{i,t-1}+\psi_i+\kappa_t\\
&\quad+\text{行业趋势}+\varepsilon_{it}.
\end{aligned}
$$
这个写法帮助解释Figure 4的纵轴：$\gamma_s$描述相对2020基期的组间路径差，不是某一年的高现金企业总投资额。论文显示资本支出与就业在部分疫情后年份出现差异；作者给出的10%／5%量级保留其上界反事实身份，不能当作随机试验效应。[^activity]

如何阅读图？先确认高低组的定义，再看2020基准、所用结果变量和误差区间；最后问，哪些未观测需求或企业选择仍可能同时影响现金和后续活动。图形支持或限制一个机制解释，但不会替读者取消识别假设。

<a id="ei18-transfer"></a>

## 五、迁移到公司时，需要补哪一层

假设一家公司现金／资产20%、固定债占80%，但未来12个月有10%债务到期。它与论文变量有部分对应，却还不能直接把系数乘进公司收入表。

首先核现金和短期投资定义是否一致，是否包含受限资金；随后核固定／浮动债务、到期和重置安排；再看利息收入、费用在财报中的口径，以及公司是否属于论文样本的经济环境。最后才问这些数据是否足以建立公司特定的传导路径。分类“高现金”可以帮助组织问题，不能替代这一步材料阅读。

两种分析因此互相补充：合同结构可以计算给定条件下的利息时间表；经验研究可以检验某类异质性是否出现在历史样本中。它们并非互相替代，更不能从一个显著交互项直接走到股东价值。

<a id="ei18-exercises"></a>

## 六、重建与迁移

<strong>任务一：</strong>从式(1)推利率斜率，并解释为什么只看0.214不够。

<strong>解析：</strong>对FFR求偏导得到 $0.214+0.398C$。0.214是该函数在C=0处的条件斜率；对其他现金比例，需要交互项。其经济解释还受样本、变量尺度和控制条件限制，不能把截距斜率当所有企业响应。

<strong>任务二：</strong>按本篇工作例尺度，现金比率差0.02、FFR差5.25。算额外条件变化，再把现金差改为0.04。

<strong>解析：</strong>分别为0.04179和0.08358自然对数单位。前者4.179个对数百分点，后者8.358个对数百分点；精确相对水平变化应分别用指数转换，不能无限用线性百分比。原文单位疑点保持在旁，不声称这一步消除了作者全部编码问题。

<strong>任务三：</strong>有人拿收入回归系数0.398减费用回归交互系数，称为“净利息美元收益”。指出缺项。

<strong>解析：</strong>回归的因变量是两个不同基数的对数，不能直接相减成美元。需要收入／费用水平、相同时间和一致规格，再按各自变化重建金额；即使完成，还只是条件估计，而非确定现金支付。

<strong>迁移任务：</strong>高现金公司明年有大额固定债集中到期，客户订单同时转弱。怎样使用本篇而不机械套用“现金多抵抗加息”？

<strong>解析：</strong>先按到期时间计算新融资需求和可能报价，再检查现金是否可动用；另用订单和客户材料建立业务需求路径。论文提供现金、固定债结构与利率响应异质性的历史证据，却不包含这家公司明年的具体到期墙或需求冲击。应报告哪部分与论文变量对应，哪部分要独立建模。

[^imf]: EIDEF-S03，JaeBin Ahn、Euihyun Bae、Jing Zhou，*The Role of Corporate Cash Holdings in the Transmission of Monetary Policy Tightening*，IMF Working Paper 2024/245，2024年11月，工作论文而非统一适用规则。[正式PDF](https://www.imf.org/-/media/files/publications/wp/2024/english/wpiea2024245-print-pdf.pdf)。
[^data]: 同源§2及Table 1，印刷pp.3–4／PDF pp.5–6，样本选择、现金字段与单位。
[^eq]: 同源§3.1式(1)，印刷p.4／PDF p.6；滞后一年变量、公司固定效应及交互项。
[^table]: 同源Table 2第(2)列及表注，印刷p.5／PDF p.7；本篇只重建已发表系数的算术，没有重新估计Capital IQ微观数据。
[^units]: 同源Table 2下工作例、Table 3及§3.2，印刷pp.5–7／PDF pp.7–9。保留原文百分比／比例及“2与10”显示差异，本文工作例采用明确归一尺度。
[^debt]: 同源§3.2式(2)和Table 3，印刷pp.6–7／PDF pp.8–9，利息费用、债务结构、现金及交互项。
[^activity]: 同源§3.3式(3)、Figure 4与结论，印刷pp.7–10／PDF pp.9–12；2020行业内中位数分组、基期、滞后控制、固定效应与上界解释。未抄造作者逐期估计曲线。

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

C=.10/.12斜率.2538/.26176；在本篇声明的FFR工作尺度ΔF=5.25下，.04179 log units=4.179 logpoints≈4.27%精确相对变化。来源单位疑点保留；非公司回报预测。

```json
{
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
```

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
    "algorithm": "Table2(2)beta2=.214,beta4=.398固定；m(C)=beta2+beta4*C。mhigh−mlow=beta4ΔC；额外条件log差=beta4ΔCΔF，logpoints=100×log差，精确相对差=expm1(log差)。保持原文单位歧义提示。",
    "static_equivalent": "C=.10/.12斜率.2538/.26176；在本篇声明的FFR工作尺度ΔF=5.25下，.04179 log units=4.179 logpoints≈4.27%精确相对变化。来源单位疑点保留；非公司回报预测。",
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
- [The Role of Corporate Cash Holdings in the Transmission of Monetary Policy Tightening](https://www.imf.org/-/media/files/publications/wp/2024/english/wpiea2024245-print-pdf.pdf): 现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。

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
    "reason": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论。印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-equation"
  },
  {
    "from": "ei18-table",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论。印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-table"
  },
  {
    "from": "ei18-debt",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论。印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-debt"
  },
  {
    "from": "ei18-transfer",
    "relation": "supported_by",
    "to": "EIDEF-S03",
    "reason": "现金比例为滞后0–1比率；利息收入为log。Table2(2)0.214/0.398用于具名条件斜率重建；原文百分点尺度疑点保留。",
    "locator": "§2–3.3；Eq.(1)；Table2(2)；Table3单位说明；Figure4与结论。印刷pp.3–10/PDF pp.5–12",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei18-transfer"
  },
  {
    "from": "ei18-table",
    "relation": "illustrated_by",
    "to": "exp-ei18-paper-map",
    "reason": "C=.10/.12斜率.2538/.26176；ΔF=5.25给.04179 log units=4.179 logpoints≈4.27%精确相对变化。非公司回报预测。",
    "at_section": "ei18-table"
  }
]
```

## Related entries
