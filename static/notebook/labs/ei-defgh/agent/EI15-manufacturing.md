# 行业指标、比较与证据选择

当前范围：共同部分 + manufacturing。

## Teaching instructions
你正在教授EI-15《行业指标、比较与证据选择》，采用内容版本2026-09-21-review-v3，当前范围：共同内容 + manufacturing行业分支。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先画“出货 → 未完成订单余额 → 构造新订单／另列存货”的台账；用M3同版数据重算4498+(11595−11214)=4879，并说明381为何不是第三份独立需求证据。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：只用当前制造分支原表重建N=S+ΔB与独立列示的ΔI；明确381是统计构造桥而非第三份独立需求观察；保留April revised/May preliminary与SA百万美元身份，并提出一项真正独立的新证据。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "manufacturing",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验。",
  "required_readings": [
    {
      "source_id": "EIBC-S07M",
      "title": "Manufacturers’ Shipments, Inventories, and Orders: Methodology",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "采用单元未显示发表/修订日；2026-09-21访问",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Estimation pp.2–3；Seasonal Adjustment pp.3–4；Reliability p.4",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。"
      },
      "supports": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。",
      "branch": "manufacturing",
      "id": "EI-15-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EI-S06-M3-202605",
      "title": "M3 Full Report — May2026",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "2026-07-02 release; CB26-104 M3-2(26)-05",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "PDFp1身份；pp6–9 Tables1–4 Construction machinery row及脚注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。"
      },
      "supports": "April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。",
      "branch": "manufacturing",
      "id": "EI-15-READ-2",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "manufacturing_branch": {
        "M3_new_orders_identity": "published new orders are constructed from shipments plus the change in unfilled orders; not an independent third demand observation",
        "reuse": "EI-B review-v2 M3 methodology correction"
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
          "branch": "manufacturing"
        },
        "algorithm": "真实数值只读。只使用M3当前分支：季调新订单N=S+ΔB；381是定义性未完成订单月差，ΔI=66另列，不作为同一订单桥的一部分。",
        "static_equivalent": "制造：4498+(11595−11214)=4879；ΔB=381是构造桥；库存变化+66单列。",
        "source_ids": [
          "EIBC-S07M",
          "EI-S06-M3-202605"
        ],
        "identity": "observed_and_derived",
        "description": "指标的对象与证据职责",
        "outputs": {
          "branch": "manufacturing",
          "shipments": 4498,
          "backlogStart": 11214,
          "backlogEnd": 11595,
          "backlogChange": 381,
          "constructedOrders": 4879,
          "inventoryChange": 66,
          "identity": "新订单由出货与未完成订单月差构造；不是三份独立观察"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei15-metric-contract",
      "text": "制造：4498+(11595−11214)=4879；ΔB=381是构造桥；库存变化+66单列。",
      "outputs": {
        "branch": "manufacturing",
        "shipments": 4498,
        "backlogStart": 11214,
        "backlogEnd": 11595,
        "backlogChange": 381,
        "constructedOrders": 4879,
        "inventoryChange": 66,
        "identity": "新订单由出货与未完成订单月差构造；不是三份独立观察"
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







<a id="ei15-manufacturing"></a>

### 制造：四张表不等于四份独立需求证据

本例沿用Census M3的2026年5月固定发布版，2026-07-02公开。先看表的组成：Table 1是当月出货，Table 2是当月新订单，Table 3是月末未完成订单，Table 4是月末存货。前两者是期间流量，后两者是余额。工程机械行如下，均为季调百万美元，未作价格调整。[^m3table]

| 工程机械 | 4月，本版修订值 | 5月，初值 |
|---|---:|---:|
| 出货S | 4,424 | 4,498 |
| 新订单N | 4,734 | 4,879 |
| 月末未完成订单B | 11,214 | 11,595 |
| 月末存货I | 10,593 | 10,659 |

一般企业订单台账可以写 $B_t=B_{t-1}+N_t-S_t+A_t$，把取消、范围或计量调整按各自定义归位。**但对本次Census统计产品，需要先读其估计方法。**官方方法的Estimation与Seasonal Adjustment说明：总体新订单由出货与未完成订单变化构造；季调新订单同样由季调出货加季调未完成订单的月差得到，包含取消和修改的影响。[^m3method]

所以
$$
N^{SA}_t=S^{SA}_t+B^{SA}_t-B^{SA}_{t-1}
=4498+(11595-11214)=4879.
$$
381的相等首先是定义性桥。重建它能检查同版列、单位与抄录，却不能证明真实世界中没有取消和经济调整，也不能把三个量当成相互独立的需求验证。

存货变化另算 $10659-10593=66$。存货是物品的会计金额余额，不是未完成客户订单；把66加到381会混合两个台账。真正要解释瓶颈，应再找产量、交期、缺料或产能利用；要解释需求，则找客户订单质量与取消等另外证据。

**本分支检验：**新订单、出货、积压全部上升，可以写“三个独立信号确认需求旺盛”吗？解析必须指出订单构造关系，再提出一项统计上或经济对象上不同的新证据，例如客户侧采购计划或具名交期资料。







<a id="ei15-selection"></a>

## 三、把指标从清单变成可区分的证据

完成一个分支后，我们回到共同任务。先写两条可能路径，再为每条找一项能够改变判断的观察。若某指标只是其他字段的运算结果，保留它作为便于阅读的摘要，但不要当作新增独立证据；若一项指标来自不同总体或不同日期，先处理口径，再做比较。

<div data-experiment-slot="exp-ei15-metric-contract"></div>

实验只提供当前行业分支的只读展示：当前制造分支展开N=S+ΔB、381的统计构造身份、存货+66的独立列示，并核查“新订单/出货/积压是否真是三份独立需求证据”。真实数值不能拖动；这里的交互不是预测器，而是让读者检查“这个量能回答我现在的问题吗”。

一套最小证据组合通常比一个没有职责的大面板更有效。比如判断制造瓶颈，出货、积压、交期和产能状态可以分别覆盖结果、承诺、时间和物理约束；再加入一条由前三者算出的指标，可能便于展示，却未增加新的机制信息。

<a id="ei15-exercises"></a>

## 四、共同迁移题与完整反馈

**正向重建：**用当前分支写出一项完整计算和它真正测量的对象。

**答案标准：**应从M3同版列写出单位、时期与运算，重建N=S+ΔB，并把定义性订单桥与另列存货变化分开；只报4879而不说明构造关系，尚未完成。

**迁移任务：**某公司的收入、订单与一项“热度指数”同时上升。你准备研究未来交付是否受限。只能再取两份材料，会选择什么？

**解析：**优先选择当前可用产能／关键投入约束和具名交期／积压结构。收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责。若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道。若交期延长且关键投入缺口明确，才形成更完整的约束路径。

**再迁移：**新统计版本减少了样本总体，同时你看到发布值下调。怎样避免把修订当衰退？

**解析：**保留旧版和新版标识，寻找同一材料期的并行重述表，分开“版本之间的差”和“同版时间变化”。当前分支也应先找对应方法说明并保留版本身份，而不是用图形连续性掩盖范围变化。

[^m3table]: EI-S06-M3-202605，Census M3 May 2026，2026-07-02发布，Tables 1–4 PDF pp.6–9，Construction machinery行；4月r、5月p、百万美元、SA。[固定原件](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf)。
[^m3method]: EIBC-S07M，Census *M3 Methodology*，Estimation pp.2–3、Seasonal Adjustment pp.3–4、Reliability p.4。采用单元未标明修订日，访问日为2026-09-21。[方法原文](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf)。


## Additional teaching material
### 图表的静态等价与默认结果

制造：4498+(11595−11214)=4879；ΔB=381是构造桥；库存变化+66单列。

```json
{
  "branch": "manufacturing",
  "shipments": 4498,
  "backlogStart": 11214,
  "backlogEnd": 11595,
  "backlogChange": 381,
  "constructedOrders": 4879,
  "inventoryChange": 66,
  "identity": "新订单由出货与未完成订单月差构造；不是三份独立观察"
}
```