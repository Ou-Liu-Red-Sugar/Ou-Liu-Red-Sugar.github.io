# 行业指标、比较与证据选择

当前范围：共同部分 + electricity。

## Teaching instructions
你正在教授EI-15《行业指标、比较与证据选择》，采用内容版本2026-09-21-review-v3，当前范围：共同内容 + electricity行业分支。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先画“容量 → 可用发电 → 最终客户售电／账单收入”的对象边界；用Table 5.1/5.2重算售电增长与平均账单收入率，再解释为什么新增装机10%不能直接推出全年售电10%。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：只用当前电力分支原表完成售电增长与平均账单收入率复算；明确2024 final/2025 preliminary、账单期间与发电自然月/覆盖不同；不带入EI-16 Table 1.1发电分解，并提出区分需求与供给约束的下一项资料。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "electricity",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验。",
  "required_readings": [
    {
      "source_id": "EIDEF-S19A",
      "title": "Table 5.1 Sales of Electricity to Ultimate Customers",
      "authors": [
        "EIA"
      ],
      "version": "Electric Power Monthly；data June2026；release2026-08-26",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2024/2025年度all sectors行与适用表注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。"
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
      "branch": "electricity",
      "id": "EI-15-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S19B",
      "title": "Table 5.2 Revenue from Sales of Electricity to Ultimate Customers",
      "authors": [
        "EIA"
      ],
      "version": "Electric Power Monthly；data June2026；release2026-08-26",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2025年度all sectors行与适用表注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。"
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
      "branch": "electricity",
      "id": "EI-15-READ-2",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIBC-S05B",
      "title": "Preliminary Monthly Electric Generator Inventory (EIA-860M)",
      "authors": [
        "EIA"
      ],
      "version": "方法页访问2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "工作簿列表前：preliminary、existing/proposed、revision及not capacity commitments说明",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。"
      },
      "supports": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。",
      "branch": "electricity",
      "id": "EI-15-READ-3",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "electricity_branch": {
        "source_release": "EIA Electric Power Monthly, data for June 2026, released 2026-08-26",
        "Table_5_1_sales_thousand_MWh": {
          "2024": 3975382,
          "2025": 4058007,
          "2024_status": "final",
          "2025_status": "preliminary_cutoff_model_sample"
        },
        "Table_5_2_revenue_million_USD": {
          "2025": 553285,
          "2025_status": "preliminary_cutoff_model_sample"
        },
        "derived": {
          "sales_growth_2024_to_2025_pct": 2.0784166150573657,
          "revenue_divided_by_sales_cents_per_kWh": 13.634402306353833
        },
        "note": "Revenue/sales is an average billed revenue rate, not a marginal retail price."
      }
    },
    "experiments": [
      {
        "id": "exp-ei15-metric-contract",
        "node_id": "EI-15",
        "title": "指标的对象与证据职责",
        "anchor": "ei15-selection",
        "method": "metrics",
        "controls": [],
        "inputs": {
          "branch": "electricity"
        },
        "algorithm": "真实数值只读。只使用EPM Table 5.1/5.2当前分支：售电增长=(2025/2024−1)；平均账单收入率=百万USD/千MWh换算为cents/kWh。2024 final、2025 preliminary；不引入EI-16 Table 1.1发电分解。",
        "static_equivalent": "电力：2024→2025售电增长2.0784166%；2025收入/售电=13.6344023 cents/kWh；2024 final / 2025 preliminary。",
        "source_ids": [
          "EIDEF-S19A",
          "EIDEF-S19B",
          "EIBC-S05B"
        ],
        "identity": "observed_and_derived",
        "description": "指标的对象与证据职责",
        "outputs": {
          "branch": "electricity",
          "qty2024": 3975382,
          "qty2025": 4058007,
          "revenue": 553285,
          "growth": 2.0784166150573657,
          "averageCents": 13.634402306353833,
          "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei15-metric-contract",
      "text": "电力：2024→2025售电增长2.0784166%；2025收入/售电=13.6344023 cents/kWh；2024 final / 2025 preliminary。",
      "outputs": {
        "branch": "electricity",
        "qty2024": 3975382,
        "qty2025": 4058007,
        "revenue": 553285,
        "growth": 2.0784166150573657,
        "averageCents": 13.634402306353833,
        "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
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
# EI-15 行业指标、比较与证据选择

**本篇任务：**从一个要解释的经营问题出发，选择最少但足够的指标，说明每项指标测到哪个环节、与其他指标是否提供独立信息。共同部分加一个行业分支约18–20分钟；四个分支不必一次全读。

<a id="ei15-structure"></a>

## 一、指标必须在经营过程中有一个位置

仪表盘可以同时放收入、订单、库存、价格、产能、信用和就业，但观察量多，并不意味着已经有解释。我们先固定研究问题：到底要判断客户需求、生产瓶颈、渠道调整、资金成本，还是数据统计范围改变？

随后给每个指标分配一个职责。订单靠近购买承诺，出货靠近生产交付，库存是跨期余额，价格可能同时受供需影响；净息差记录银行利息经营，不替代贷款质量。它们的价值来自能排除哪条竞争解释，而不只是相关系数高不高。

一个完整的指标说明至少包含：**计量对象、总体、单位、期间、存量或流量、发布日期、数据版本，以及它要检验的机制**。这些字段不需要都挤进图例，但必须能够就地打开。资料晚发布、后来修订或由其他字段构造，都会影响我们对证据强度的判断。

例如“订单、出货、积压都支持需求增加”看上去有三项证据；若订单本来就按出货加积压变化构造，第三项并没有增加一份独立观察。反过来，一个原本不起眼的调查范围说明，可能足以解释整张图的水平变化。

<a id="ei15-branches"></a>

## 二、选择一个行业完成实际带读





<a id="ei15-electricity"></a>

### 电力：把装机、发电和售电分别放回流程

我们研究的具体问题是“售电活动与供给规模发生了什么变化”。这里至少涉及三类对象：设备的MW容量、某期间的MWh发电量，以及向最终客户售出的MWh。容量要经过资源、可用状态和利用时间才能变成发电；发电到售电还经过网络、跨区交易、损耗和账单期间。

本例固定 EIA *Electric Power Monthly*，2026-08-26发布、数据至2026年6月。Table 5.1和5.2的全行业年度行为：

| 指标 | 2024 | 2025 | 单位／状态 |
|---|---:|---:|---|
| 向最终客户售电量 | 3,975,382 | 4,058,007 | 千MWh；2024 final，2025 preliminary |
| 2025售电收入 | — | 553,285 | 百万美元；preliminary |

资料中的2025和2026值基于cutoff model sample的初步估计。即使另一份EIA-923年度发电数据后来已经final，也不能把那个版本标签移给这两个售电系列。原表还说明，售电与收入按约28–35天账单期间累积，不能强求每个自然月与净发电一致。[^epmsales][^epmrevenue]

现在正向重建两个量：
$$
g_Q=\frac{4{,}058{,}007}{3{,}975{,}382}-1
=2.0784166\%.
$$
收入除电量需要把单位展开：
$$
\begin{aligned}
\bar p&=\frac{553285\times10^6\ \mathrm{USD}}
{4058007\times10^6\ \mathrm{kWh}}\times100\\
&=13.6344023\ \mathrm{cents/kWh}.
\end{aligned}
$$
两个 $10^3$ 分别来自“千MWh”和“一MWh等于千kWh”。$\bar p$ 是加权平均账单收入率，包含客户、地区、费率和用量构成；它不是每位客户的边际电价。

这一分支保留售电量、收入及平均收入率，供给问题再接发电量和可用容量。若只是研究账单收入，不必同时堆上所有燃料价格；若要解释调度，就必须另取时间和地区材料。

**本分支检验：**有人用新增装机10%预测全年售电10%。解析应指出容量到电量需要发电时间与可用率，售电还需要客户需求和统计覆盖；应该先找发电量、负荷与投运时点，而不是再补一个同类装机指标。









<a id="ei15-selection"></a>

## 三、把指标从清单变成可区分的证据

完成一个分支后，我们回到共同任务。先写两条可能路径，再为每条找一项能够改变判断的观察。若某指标只是其他字段的运算结果，保留它作为便于阅读的摘要，但不要当作新增独立证据；若一项指标来自不同总体或不同日期，先处理口径，再做比较。

<div data-experiment-slot="exp-ei15-metric-contract"></div>

实验只提供当前行业分支的只读展示：当前电力分支展开售电增长、平均账单收入率、final/preliminary与账单期间边界，并给出“新增装机10%不能直接推出全年售电10%”的核查与解析。真实数值不能拖动；这里的交互不是预测器，而是让读者检查“这个量能回答我现在的问题吗”。

一套最小证据组合通常比一个没有职责的大面板更有效。比如判断制造瓶颈，出货、积压、交期和产能状态可以分别覆盖结果、承诺、时间和物理约束；再加入一条由前三者算出的指标，可能便于展示，却未增加新的机制信息。

<a id="ei15-exercises"></a>

## 四、共同迁移题与完整反馈

**正向重建：**用当前分支写出一项完整计算和它真正测量的对象。

**答案标准：**应从Table 5.1/5.2写出单位、时期与运算，重建售电增长和平均账单收入率，并说明它们测量最终客户售电/账单收入，不等同于发电量、装机容量或边际电价。

**迁移任务：**某公司的收入、订单与一项“热度指数”同时上升。你准备研究未来交付是否受限。只能再取两份材料，会选择什么？

**解析：**优先选择当前可用产能／关键投入约束和具名交期／积压结构。收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责。若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道。若交期延长且关键投入缺口明确，才形成更完整的约束路径。

**再迁移：**新统计版本减少了样本总体，同时你看到发布值下调。怎样避免把修订当衰退？

**解析：**保留旧版和新版标识，寻找同一材料期的并行重述表，分开“版本之间的差”和“同版时间变化”。当前分支也应先找对应方法说明并保留版本身份，而不是用图形连续性掩盖范围变化。

[^epmsales]: EIDEF-S19A，EIA *Electric Power Monthly*，data June 2026、release 2026-08-26，Table 5.1年度2024/2025行及全部适用表注。[原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1)。
[^epmrevenue]: EIDEF-S19B，同版EPM Table 5.2，2025 all sectors收入行及preliminary、账单期间表注。[原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2)。


## Additional teaching material
### 图表的静态等价与默认结果

电力：2024→2025售电增长2.0784166%；2025收入/售电=13.6344023 cents/kWh；2024 final / 2025 preliminary。

```json
{
  "branch": "electricity",
  "qty2024": 3975382,
  "qty2025": 4058007,
  "revenue": 553285,
  "growth": 2.0784166150573657,
  "averageCents": 13.634402306353833,
  "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
}
```