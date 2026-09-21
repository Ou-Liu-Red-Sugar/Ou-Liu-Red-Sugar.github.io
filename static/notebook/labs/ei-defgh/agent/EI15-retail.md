# 行业指标、比较与证据选择

当前范围：共同部分 + retail。

## Teaching instructions
你正在教授EI-15《行业指标、比较与证据选择》，采用内容版本2026-09-21-review-v3，当前范围：共同内容 + retail行业分支。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先区分同一材料期的版本重述与跨期经济变化；用2022同年原口径/重述口径重算销售与库存差，并说明为什么不能把口径变化拼成同比。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：只用当前零售分支同一2022材料期重算销售与库存的重述差；明确原口径与雇主企业重述口径、发布版本和总体不同；不得把重述差称需求同比，并提出同版经营判断所需的新资料。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "retail",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验。",
  "required_readings": [
    {
      "source_id": "EIDEF-S13",
      "title": "2017 NAICS Restatement — Summary of Changes",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Annual Revision released 2025-04-25",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "PDF pp.1–2说明；p.3 Restated Annual Retail Sales / End-of-Year Inventories，NAICS44–45总行",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。"
      },
      "supports": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。",
      "branch": "retail",
      "id": "EI-15-READ-1",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "retail_branch": {
        "restatement_release": "2025-04-25 Annual Revision",
        "identity": "series restated to 2017 NAICS and employer-only firms; affected industries restated back through their series rather than a one-month April 2025 break",
        "2022_sales_million_USD": {
          "original_employer_plus_nonemployer": 7040995,
          "restated_employer_only": 6916099,
          "difference_pct_source": -1.8
        },
        "2022_end_of_year_inventory_million_USD": {
          "original_employer_plus_nonemployer": 733168,
          "restated_employer_only": 717180,
          "difference_pct_source": -2.2
        }
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
          "branch": "retail"
        },
        "algorithm": "真实数值只读。只使用当前零售分支：同一2022材料期重述差=(restated/original−1)；比较的是统计总体/版本重述，不是跨期需求增长。",
        "static_equivalent": "零售：同一2022材料期销售重述差−1.7738402%，库存重述差−2.1806735%；不是需求同比。",
        "source_ids": [
          "EIDEF-S13"
        ],
        "identity": "observed_and_derived",
        "description": "指标的对象与证据职责",
        "outputs": {
          "branch": "retail",
          "salesOld": 7040995,
          "salesNew": 6916099,
          "salesChange": -124896,
          "salesPct": -1.7738402029826794,
          "inventoryOld": 733168,
          "inventoryNew": 717180,
          "inventoryPct": -2.1806734609257306,
          "identity": "同一2022材料期的重述差，不是时间增长"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei15-metric-contract",
      "text": "零售：同一2022材料期销售重述差−1.7738402%，库存重述差−2.1806735%；不是需求同比。",
      "outputs": {
        "branch": "retail",
        "salesOld": 7040995,
        "salesNew": 6916099,
        "salesChange": -124896,
        "salesPct": -1.7738402029826794,
        "inventoryOld": 733168,
        "inventoryNew": 717180,
        "inventoryPct": -2.1806734609257306,
        "identity": "同一2022材料期的重述差，不是时间增长"
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









<a id="ei15-retail"></a>

### 零售：先确认比较的是经济变化，还是统计总体变化

零售销售是期间流量，库存是期末余额。研究销售与补库时，两者应对齐期间，但还要确认有没有换统计总体。

Census的 *2017 NAICS Restatement Summary* 说明，2025-04-25发布的年度修订采用2017 NAICS，并把相关月度零售统计重述为有雇员企业口径；受定义变化影响的行业追溯重述至序列开始。这不是只在2025年4月新增一条断点。文件第3页直接比较同一个2022年份的原口径和重述口径。[^retail]

| 2022年同一材料期 | 原公布：雇主＋无雇员企业 | 重述：雇主企业 | 单位 |
|---|---:|---:|---|
| 零售销售总额，NAICS 44–45 | 7,040,995 | 6,916,099 | 百万美元 |
| 年末零售库存总额 | 733,168 | 717,180 | 百万美元 |

销售差额为−124,896，约−1.7738%；库存差额为−15,988，约−2.1807%，对应原表舍入后的−1.8%与−2.2%。这些比较回答的是“同一历史期换统计范围后，发布值怎样变化”，不是2022需求突然下降的幅度。

现在才进入经营判断。若在**同一版本**中销售增长而库存增长更快，可能是备货，也可能是滞销、价格或产品结构变化。下一项资料应根据路径选择：同店交易与客单价可以帮助拆销售，库存年龄或折扣促销帮助判断积压。先把基准版本选对，再讨论经营原因。

**本分支检验：**分析师把旧版2022值与新版2023值拼成同比。解析应先要求同一发布版本的可比序列；即使两格都抄对，也不能把口径改变部分当真实需求增速。





<a id="ei15-selection"></a>

## 三、把指标从清单变成可区分的证据

完成一个分支后，我们回到共同任务。先写两条可能路径，再为每条找一项能够改变判断的观察。若某指标只是其他字段的运算结果，保留它作为便于阅读的摘要，但不要当作新增独立证据；若一项指标来自不同总体或不同日期，先处理口径，再做比较。

<div data-experiment-slot="exp-ei15-metric-contract"></div>

实验只提供当前行业分支的只读展示：当前零售分支展开同一2022材料期的原口径/重述口径差，并核查“版本重述能否直接当作跨期需求下降”。真实数值不能拖动；这里的交互不是预测器，而是让读者检查“这个量能回答我现在的问题吗”。

一套最小证据组合通常比一个没有职责的大面板更有效。比如判断制造瓶颈，出货、积压、交期和产能状态可以分别覆盖结果、承诺、时间和物理约束；再加入一条由前三者算出的指标，可能便于展示，却未增加新的机制信息。

<a id="ei15-exercises"></a>

## 四、共同迁移题与完整反馈

**正向重建：**用当前分支写出一项完整计算和它真正测量的对象。

**答案标准：**应从同一2022材料期写出原口径、重述口径、单位与差额，说明该比率测量统计范围重述而不是跨期需求增长；必须保留版本与总体。

**迁移任务：**某公司的收入、订单与一项“热度指数”同时上升。你准备研究未来交付是否受限。只能再取两份材料，会选择什么？

**解析：**优先选择当前可用产能／关键投入约束和具名交期／积压结构。收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责。若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道。若交期延长且关键投入缺口明确，才形成更完整的约束路径。

**再迁移：**新统计版本减少了样本总体，同时你看到发布值下调。怎样避免把修订当衰退？

**解析：**保留旧版和新版标识，寻找同一材料期的并行重述表，分开“版本之间的差”和“同版时间变化”。当前分支也应先找对应方法说明并保留版本身份，而不是用图形连续性掩盖范围变化。

[^retail]: EIDEF-S13，Census *2017 NAICS Restatement Summary*，pp.1–2变更说明，p.3“Restated Annual Retail Sales Data”与“Restated Annual End-of-Year Inventories Data”。[官方说明](https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf)。


## Additional teaching material
### 图表的静态等价与默认结果

零售：同一2022材料期销售重述差−1.7738402%，库存重述差−2.1806735%；不是需求同比。

```json
{
  "branch": "retail",
  "salesOld": 7040995,
  "salesNew": 6916099,
  "salesChange": -124896,
  "salesPct": -1.7738402029826794,
  "inventoryOld": 733168,
  "inventoryNew": 717180,
  "inventoryPct": -2.1806734609257306,
  "identity": "同一2022材料期的重述差，不是时间增长"
}
```