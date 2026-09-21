# 行业指标、比较与证据选择

当前范围：共同部分 + banking。

## Teaching instructions
你正在教授EI-15《行业指标、比较与证据选择》，采用内容版本2026-09-21-review-v3，当前范围：共同内容 + banking行业分支。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先写清NIM的分子、平均生息资产分母与bp单位；由3.31%和−8bp回推前季约3.39%，再说明NIM为何不能替代综合利润桥。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：只用当前银行分支重建3.39%→3.31%=−8bp；明确NIM分母是平均生息资产而非存款或总资产；把NIM与ROA/净利润职责分开，并提出下沉到单家银行所需的结构资料。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "banking",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验。",
  "required_readings": [
    {
      "source_id": "EIDEF-S17",
      "title": "Quarterly Banking Profile — First Quarter 2026",
      "authors": [
        "FDIC"
      ],
      "version": "Q1 2026; official release 2026-05-27",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q1 2026官方发布：Net Income、Net Interest Margin、earning-asset yield与cost of funds具名段；QBP Q1 2026对应全行业指标",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。"
      },
      "supports": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。",
      "branch": "banking",
      "id": "EI-15-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S22",
      "title": "Do Net Interest Margins and Interest Rates Move Together?",
      "authors": [
        "Huberto M. Ennis",
        "Helen Fessenden",
        "John R. Walter"
      ],
      "version": "Richmond Fed Economic Brief No16-05, May2016",
      "access": {
        "kind": "site_body",
        "uri": "https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "The Importance of Maturity Mismatch：NIM definition、profits comparison及期限结构段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。"
      },
      "supports": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。",
      "branch": "banking",
      "id": "EI-15-READ-2",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "bank_branch": {
        "source": "FDIC Quarterly Banking Profile Q1 2026 / May 27 2026 release",
        "population": "4,278 FDIC-insured commercial banks and savings institutions in the release",
        "net_income_billion_USD": 80.5,
        "ROA_pct": 1.26,
        "NIM_pct": 3.31,
        "NIM_qoq_change_bp": -8,
        "NIM_definition": "interest/dividends earned on interest-bearing assets minus interest paid to depositors and other creditors, expressed relative to average earning assets",
        "current_driver": "earning-asset yield fell 21 bp while cost of funds fell 13 bp"
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
          "branch": "banking"
        },
        "algorithm": "真实数值只读。只使用当前银行分支：前季NIM=本季NIM−qoq bp/100；bp是百分点单位，NIM分母为平均生息资产，不能替代综合利润桥。",
        "static_equivalent": "银行：前季约3.39%→本季3.31%=−8bp；NIM分母为平均生息资产。",
        "source_ids": [
          "EIDEF-S17",
          "EIDEF-S22"
        ],
        "identity": "observed_and_derived",
        "description": "指标的对象与证据职责",
        "outputs": {
          "branch": "banking",
          "source": "FDIC Quarterly Banking Profile Q1 2026 / May 27 2026 release",
          "population": "4,278 FDIC-insured commercial banks and savings institutions in the release",
          "net_income_billion_USD": 80.5,
          "ROA_pct": 1.26,
          "NIM_pct": 3.31,
          "NIM_qoq_change_bp": -8,
          "NIM_definition": "interest/dividends earned on interest-bearing assets minus interest paid to depositors and other creditors, expressed relative to average earning assets",
          "current_driver": "earning-asset yield fell 21 bp while cost of funds fell 13 bp",
          "previousNIMpct": 3.39,
          "identity": "全行业Q1 2026统计；NIM为净利息／平均生息资产的年化比率"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei15-metric-contract",
      "text": "银行：前季约3.39%→本季3.31%=−8bp；NIM分母为平均生息资产。",
      "outputs": {
        "branch": "banking",
        "source": "FDIC Quarterly Banking Profile Q1 2026 / May 27 2026 release",
        "population": "4,278 FDIC-insured commercial banks and savings institutions in the release",
        "net_income_billion_USD": 80.5,
        "ROA_pct": 1.26,
        "NIM_pct": 3.31,
        "NIM_qoq_change_bp": -8,
        "NIM_definition": "interest/dividends earned on interest-bearing assets minus interest paid to depositors and other creditors, expressed relative to average earning assets",
        "current_driver": "earning-asset yield fell 21 bp while cost of funds fell 13 bp",
        "previousNIMpct": 3.39,
        "identity": "全行业Q1 2026统计；NIM为净利息／平均生息资产的年化比率"
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











<a id="ei15-banking"></a>

### 银行：净息差有明确分母，也不是全部盈利

银行的经营过程是吸收和配置资金、承担信用与期限风险，并提供金融服务。若问题是“为什么利息经营变薄”，我们需要净利息收入、平均生息资产和资金成本，而不应只看当期净利润。

FDIC Q1 2026报告与2026-05-27发布材料的总体为4,278家FDIC投保商业银行及储蓄机构。采用值为净利润805亿美元、ROA 1.26%、NIM 3.31%，NIM较前季下降8基点。发布材料将息差变化与生息资产收益率下降21基点、资金成本下降13基点联系起来。它们是这个历史季度的总体资料，不是任意一家银行的结果。[^fdic]

| 指标 | 记录什么 | 分析职责 |
|---|---|---|
| 净利润805亿美元 | 一个季度的综合利润流量 | 需要再拆利息、非息、拨备和税费 |
| ROA 1.26% | 年化利润相对平均总资产 | 衡量资产规模上的综合盈利 |
| NIM 3.31% | 年化净利息相对平均生息资产 | 研究利息经营及重定价 |
| NIM环比−8bp | 息差水平的差 | 不是利润下降8% |

用同一期间的净利息收入 $NII_q$ 和平均生息资产 $\bar E$ 表示，季度年化的概念式是 $\mathrm{NIM}\approx4NII_q/\bar E$；精确复算须沿报告年化与平均余额规则。净息差的分母不是存款额，也不是全部资产；净息差与综合利润的概念区分还可对照Richmond Fed的具名定义单元。[^nimdef]由3.31%及−8bp，可回推前季公布水平约3.39%；这是百分点相减，不是乘 $1-8\%$。

“21减13等于8”在这里可以帮助读懂报告的方向叙述，但利息资产收益率与资金成本的分母和规模权重并不必然相同，因此它不能替代所有时期的精确NIM恒等式。若要下沉到一家银行，应另外查生息资产／付息负债结构、存款重定价和贷款收益，再查拨备为何改变净利润。

**本分支检验：**总体NIM下降、净利润仍可能上升吗？可以：资产规模、非息收入、费用、拨备和税收都可能变化。应查利润桥，而不是用一项息差率覆盖整个利润表。



<a id="ei15-selection"></a>

## 三、把指标从清单变成可区分的证据

完成一个分支后，我们回到共同任务。先写两条可能路径，再为每条找一项能够改变判断的观察。若某指标只是其他字段的运算结果，保留它作为便于阅读的摘要，但不要当作新增独立证据；若一项指标来自不同总体或不同日期，先处理口径，再做比较。

<div data-experiment-slot="exp-ei15-metric-contract"></div>

实验只提供当前行业分支的只读展示：当前银行分支展开NIM的平均生息资产分母、3.39%→3.31%=−8bp，并核查“NIM下降是否等于综合利润下降”。真实数值不能拖动；这里的交互不是预测器，而是让读者检查“这个量能回答我现在的问题吗”。

一套最小证据组合通常比一个没有职责的大面板更有效。比如判断制造瓶颈，出货、积压、交期和产能状态可以分别覆盖结果、承诺、时间和物理约束；再加入一条由前三者算出的指标，可能便于展示，却未增加新的机制信息。

<a id="ei15-exercises"></a>

## 四、共同迁移题与完整反馈

**正向重建：**用当前分支写出一项完整计算和它真正测量的对象。

**答案标准：**应写清3.31%、−8bp与平均生息资产分母，重建前季约3.39%，并说明NIM是利息经营指标而非综合利润；必须保留Q1 2026全行业总体。

**迁移任务：**某公司的收入、订单与一项“热度指数”同时上升。你准备研究未来交付是否受限。只能再取两份材料，会选择什么？

**解析：**优先选择当前可用产能／关键投入约束和具名交期／积压结构。收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责。若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道。若交期延长且关键投入缺口明确，才形成更完整的约束路径。

**再迁移：**新统计版本减少了样本总体，同时你看到发布值下调。怎样避免把修订当衰退？

**解析：**保留旧版和新版标识，寻找同一材料期的并行重述表，分开“版本之间的差”和“同版时间变化”。当前分支也应先找对应方法说明并保留版本身份，而不是用图形连续性掩盖范围变化。

[^fdic]: EIDEF-S17，FDIC *Quarterly Banking Profile, First Quarter 2026*及2026-05-27官方发布中的全行业盈利、净息差、收益率与资金成本单元。采用冻结的Q1 2026统计总体；NIM以净利息相对平均生息资产定义。[官方发布](https://www.fdic.gov/news/press-releases/2026/fdic-insured-institutions-reported-return-assets-126-percent-and-net)，[完整报告入口](https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf)。

[^nimdef]: EIDEF-S22，Ennis、Fessenden、Walter，Richmond Fed Economic Brief 16-05，2016-05，“The Importance of Maturity Mismatch”首段NIM／利润定义；仅作概念补充，不提供2026数据。[原文](https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05)。


## Additional teaching material
### 图表的静态等价与默认结果

银行：前季约3.39%→本季3.31%=−8bp；NIM分母为平均生息资产。

```json
{
  "branch": "banking",
  "source": "FDIC Quarterly Banking Profile Q1 2026 / May 27 2026 release",
  "population": "4,278 FDIC-insured commercial banks and savings institutions in the release",
  "net_income_billion_USD": 80.5,
  "ROA_pct": 1.26,
  "NIM_pct": 3.31,
  "NIM_qoq_change_bp": -8,
  "NIM_definition": "interest/dividends earned on interest-bearing assets minus interest paid to depositors and other creditors, expressed relative to average earning assets",
  "current_driver": "earning-asset yield fell 21 bp while cost of funds fell 13 bp",
  "previousNIMpct": 3.39,
  "identity": "全行业Q1 2026统计；NIM为净利息／平均生息资产的年化比率"
}
```