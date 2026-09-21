# 制度、监管与市场设计

从适用机构、现金流来源资格和压力期限理解规则怎样改变行为选择。

Entry: zh-ei12 | Node: EI-12 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-12《制度、监管与市场设计》，采用内容版本2026-09-21-review-v2，当前范围：本篇完整学习单元。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：给出30天需要120、折价后来源50和授信20，要求解释每项资源是否可计入，以及还缺什么才能判断真实缓冲缺口。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：范围、给定类别、30天信用额度排除、折价和不重复计算均能解释；70不得叫资本缺口或LCR。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei12",
  "node_id": "EI-12",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "读取30天流动性规定，搭出合格来源与净压力需要，区分现行条文和历史案例。",
  "required_readings": [
    {
      "source_id": "EIDEF-S07",
      "title": "12 CFR §252.30 — Scope",
      "authors": [
        "eCFR / Federal Reserve"
      ],
      "version": "页面截至2026-09-17，2026-09-21核读",
      "access": {
        "kind": "site_body",
        "uri": "https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.30",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§252.30全文",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "BHC平均合并资产100bn是本子部分适用门槛；不单独决定Category IV。"
      },
      "supports": "BHC平均合并资产100bn是本子部分适用门槛；不单独决定Category IV。",
      "id": "EI-12-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S08",
      "title": "12 CFR §252.35 — Liquidity stress testing and buffer requirements",
      "authors": [
        "eCFR / Federal Reserve"
      ],
      "version": "页面截至2026-09-17，2026-09-21核读",
      "access": {
        "kind": "site_body",
        "uri": "https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.35",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "(a)(1)–(5)、(b)(1)–(3)；频率(a)(2)、来源(a)(5)(i)–(iii)",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "30天及以下不得计入credit line；资产现金来源考虑折价；频率按已给定类别；缓冲资格与净现金需要分别处理。"
      },
      "supports": "30天及以下不得计入credit line；资产现金来源考虑折价；频率按已给定类别；缓冲资格与净现金需要分别处理。",
      "id": "EI-12-READ-2",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S09",
      "title": "Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Executive Summary",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ],
      "version": "2023-04-28 historical review",
      "access": {
        "kind": "site_body",
        "uri": "https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Executive Summary；Governance and Risk Management中ILST、CFP及资金操作准备段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "历史报告记载ILST失败、调整假设和资金准备等问题；不替代现行法规，不作政治或机构优劣评级。"
      },
      "supports": "历史报告记载ILST失败、调整假设和资金准备等问题；不替代现行法规，不作政治或机构优劣评级。",
      "id": "EI-12-READ-3",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei12-rule-path",
      "status": "teaching_assumption",
      "inputs": {
        "thirty_day_stressed_cash_need": 120,
        "eligible_cash_flow_sources_after_haircuts": 50,
        "credit_line_in_30_day_sources": 0,
        "institution_category": "given_by_case_not_inferred_from_assets"
      },
      "outputs": {
        "net_thirty_day_stressed_cash_need": 70
      },
      "eligibility_contract": {
        "eligible_sources": "monetizable asset/cash-flow sources after risk/volatility haircuts under the teaching scenario",
        "exclude_credit_lines_for_30_days_or_less": true,
        "no_double_counting": "assets counted as the 50 cash-flow sources cannot simultaneously remain in the residual liquidity buffer calculation",
        "not_lcr_or_capital_gap": true
      }
    },
    "experiments": [
      {
        "id": "exp-ei12-rule-path",
        "node_id": "EI-12",
        "title": "30天来源资格与净需要",
        "anchor": "ei12-rebuild",
        "method": "liquidity",
        "controls": [
          {
            "key": "need",
            "label": "30天压力需要",
            "default": 120,
            "min": 0,
            "max": 500,
            "step": 5,
            "kind": "number"
          },
          {
            "key": "sources",
            "label": "折价后候选来源",
            "default": 50,
            "min": 0,
            "max": 500,
            "step": 5,
            "kind": "number"
          },
          {
            "key": "eligible",
            "label": "候选来源已满足资格",
            "default": true,
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "checkbox"
          },
          {
            "key": "creditLine",
            "label": "另有授信额度（不计入）",
            "default": 0,
            "min": 0,
            "max": 500,
            "step": 5,
            "kind": "number"
          },
          {
            "key": "category",
            "label": "题设已给定类别",
            "default": "unknown",
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "select",
            "options": [
              [
                "unknown",
                "未给定"
              ],
              [
                "IV",
                "Category IV"
              ],
              [
                "other",
                "其他本条适用机构"
              ]
            ]
          }
        ],
        "inputs": {
          "need": 120,
          "sources": 50,
          "eligible": true,
          "creditLine": 0,
          "category": "unknown"
        },
        "algorithm": "合格来源S=eligible?候选额:0；净需要=O−S，非负覆盖需要=max(O−S,0)。30天内credit line贡献恒0。来源与剩余buffer去重；没有B余额就不报buffer余缺。类别不从资产自动计算。",
        "static_equivalent": "120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源。原资产62.5经20%折价为50，仅为正文补充变式。",
        "source_ids": [
          "EIDEF-S07",
          "EIDEF-S08",
          "EIDEF-S09"
        ],
        "identity": "teaching_assumption",
        "description": "30天来源资格与净需要",
        "outputs": {
          "need": 120,
          "eligible_sources": 50,
          "excluded_sources": 0,
          "excluded_credit_line": 0,
          "signed_net_need": 70,
          "net_need": 70,
          "test_frequency": "先查完整分类，不能自动推定",
          "buffer_balance": null,
          "buffer_surplus": null,
          "interpretation": "30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei12-rule-path",
      "text": "120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源。原资产62.5经20%折价为50，仅为正文补充变式。",
      "outputs": {
        "need": 120,
        "eligible_sources": 50,
        "excluded_sources": 0,
        "excluded_credit_line": 0,
        "signed_net_need": 70,
        "net_need": 70,
        "test_frequency": "先查完整分类，不能自动推定",
        "buffer_balance": null,
        "buffer_surplus": null,
        "interpretation": "30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"
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
<strong>本篇任务：</strong>从一项银行流动性规则重建“谁适用—要求做什么—哪些资源合格—如何改变选择”的完整链条，再用历史案例区分制度文本和实际实施。建议学习约18分钟。本文用于制度与经济机制阅读，不是具体机构的法律合规意见。

<a id="ei12-structure"></a>

## 一、规则改变的是行动集合和现金安排

行业里的制度不是经营模型外面附带的一段文字。准入规则决定谁能提供服务，支付和结算安排决定钱何时到手，信息披露改变交易双方能观察什么，流动性要求则改变机构必须准备哪些资源、用什么情景检验它们。

我们先区分四层材料：**适用中的规则正文**负责确认义务；**监管解释**说明其适用方式；**历史监督和事件报告**描述过去发生了什么；**企业内部流程**决定义务如何落到操作。它们的证据身份不同，应该顺着问题分别读取。

本篇选择美国 Regulation YY 的一个确定对象：受 Subpart D 约束的银行控股公司。采用2026-09-21核读、页面标示更新截至2026-09-17的12 CFR §§252.30、252.35。我们研究的是这两条中的范围、流动性压力测试和缓冲安排，不把它们延伸成所有国家、所有银行的一般法。[^scope][^rule]

<a id="ei12-scope"></a>

## 二、从适用范围走到测试要求

§252.30给出本子部分适用的银行控股公司平均合并资产门槛：至少1000亿美元。但公司越过这个门槛，还不能仅据此自动判断它属于 Category IV，或决定所有细分监管要求。本篇的算例会直接给定类别；分类依据本身需要另一套完整信息。[^scope]

§252.35要求测试公司在压力下怎样满足现金需要：既考虑机构自身压力，也考虑市场范围压力及两者结合；要求包括隔夜、30天、90天和一年等期间。Category IV至少每季度测试一次，其他本条适用机构至少每月一次；这是测试频率，与“30天压力期限”不是同一个时钟。[^rule]

| 规则位置 | 确认的对象 | 对分析工作的要求 |
|---|---|---|
| §252.30 | 本子部分覆盖的银行控股公司 | 先确认主体与规模口径 |
| §252.35(a)(2) | 测试频率 | 使用已确定的机构类别 |
| §252.35(a)(3)–(4) | 压力情景与计划期限 | 分情景、分期限计算现金流 |
| §252.35(a)(5) | 合格现金来源及折价 | 检查能否在该窗口真正变现 |
| §252.35(b) | 流动性缓冲 | 为相应30天净需要准备合格资源 |

制度的经济联系由这里开始清楚：一本资产账面值很大的报表，不保证银行明天能支付提款；有一份融资意向，也不保证在全市场压力下可以提取。因此需要把金额、时间、可操作性和资格放在一起。

<a id="ei12-rebuild"></a>

## 三、重建120减50：关键在50究竟是什么

以下是**教学压力情景**，金额单位统一设为百万美元，不对应任何真实银行。未来30天累计压力现金需要为120。另有一组明确识别的资产或现金流来源，在考虑风险折价、变现能力及窗口内到位后，可供50。

这里的50需要四个前提：来源可以在30天内到位；作为现金来源的资产反映信用风险和市场波动折价；相互依赖和集中性得到考虑；没有把已经质押或缺乏变现操作安排的资产当成可随时调用。更特别的是，§252.35(a)(5)(iii)不允许将授信额度计作30天及以下压力期间的现金流来源。[^rule]

先计算净压力现金需要：
$$
N=O-S=120-50=70.
$$

$O$ 是该情景需要覆盖的现金流，$S$ 是已经符合上述口径的来源。70是这个模型中的净现金需要。要进一步得出“还缺多少缓冲”，仍需一笔**与50没有重复使用的**、符合缓冲要求的资源余额 $B$。若题设另给 $B=80$，可得余量10；若 $B=60$，才得到该简化比较下缺10。冻结默认例没有给 $B$，所以只输出70，不宣称现实银行资本缺口就是70。

| 资源记录 | 教学金额 | 本轮用途 | 还可同时算剩余缓冲吗 |
|---|---:|---|---|
| 30天压力现金需要 | 120 | 待覆盖用途 | 不适用 |
| 合格、折价后来源集合S | 50 | 降低净现金需要 | 同一资产不可再次使用 |
| 计算结果N | 70 | 未由S覆盖的需要 | 是需要，不是持有资产 |
| 独立缓冲集合B | 默认未给 | 之后比较其覆盖能力 | 必须独立核资格与去重 |

为了看清折价的作用，补充一个**独立教学变式**：假设原始资产额62.5，经20%压力折价后得到 $62.5(1-0.2)=50$。若折价提高到40%，来源只剩37.5，净需要升到82.5。另有一条20的银行授信额度，也不会在本例30天来源中把82.5降为62.5，因为期限规则禁止那样计入。

<div data-experiment-slot="exp-ei12-rule-path"></div>

在交互中，先保持需要120，切换来源是否合格，再改变折价后来源。信用额度以单独字段展示，被排除的金额也明确显示。这使我们可以观察**规则改变可用资源集合**的过程，而不只是熟练地做减法。

<a id="ei12-history"></a>

## 四、用SVB历史复盘检验“有测试”和“能应付压力”的差距

美联储2023年SVB复盘的 Executive Summary 记载：SVBFG在2022年7月开始适用强化审慎标准后，多次未通过自身内部流动性压力测试；一些增加融资能力的措施执行不够及时，管理层还改变了部分压力假设。报告也讨论集中存款来源及应急融资准备。这些是报告对当时事实和管理实践的归纳，不是本文独立对机构作评级。[^svb]

我们把它接到上一节的资源表。若一个机构写了“可获得融资50”，但抵押品尚未准备、操作通道未落实，测试可能高估实际可供现金。若为通过测试而放松提款等假设，减少的是模型算出的需要，未必是现实压力。这就说明为什么分析需要同时保留：**输入假设、来源资格、操作验证、结果和整改动作**。

也要保留时间顺序：2023历史事件和目前采用的规则文本是两类材料。不能拿复盘替代现行条文，或仅从事故结果倒推出某项规则当初的全部设计动机。本篇采用的是一种中性分析法：让每个制度陈述有主体、日期和具体作用路径。

<a id="ei12-transfer"></a>

## 五、把这个方法迁移到其他行业

同样的结构可用于电力接入许可、药品支付资格或金融交易准入，不过实际条文必须另查。我们不先评价规则“严”或“松”，而是依次确认对象、条件、允许行动与后果。

例如一项**虚构设备许可**要求产品完成检测才能交付。企业宣布“年产能翻倍”，未必同时意味着可售数量翻倍，因为检验、客户验收和许可期限构成另一个交付条件。这里可以画出“名义产能→合格产品→获准交付→收款”的路径；就像银行账面资产必须经过资格和变现条件才能成为某个窗口内的现金来源。

一个制度变更影响多大，还取决于企业离边界多远。有余量的机构与原先依赖被排除来源的机构，面对同一条文时调整幅度可能不同。要研究这种异质性，就需要机构自己的资产、合同和流程，而不只是一条新闻标题。

<a id="ei12-exercises"></a>

## 六、重建与迁移

<strong>任务一：</strong>本例现金需要120、折价后合格来源50，银行另有授信额度20。30天净需要是多少？为什么？

<strong>解析：</strong>仍为70。50已经按来源资格确认，20授信额度在30天及以下压力期限不能算入来源。若50本身包含该20，就须先纠正来源集合，不能一边声称已合格、一边又重复扣减。净需要70不是LCR分子分母，也不是资本比率。

<strong>任务二：</strong>机构用同一批资产变现50来降低现金需要，又说“我还持有这50作为缓冲”。问题在哪里？

<strong>解析：</strong>同一资源被分配了两次。应在资产台账上给来源集合与未动用缓冲集合不同标识；计入一种用途后，相应份额必须从另一种用途中扣除。若题设没有给剩余资源，就不能计算缓冲余量。

<strong>任务三：</strong>某美国银行控股公司平均合并资产1200亿美元，题目没有给类别。能否直接说它应每季度测试？

<strong>解析：</strong>可以先核§252.30的规模范围，但不能由一个规模数自动推 Category IV。若类别已确认为IV，本条至少每季；若属于本条其他适用机构，频率至少每月。合规结论还要用完整主体和类别条件。

<strong>迁移任务：</strong>设备商已完成厂房，某产品仍需6个月资格认证。研究窗口3个月。怎样改写“产能已建成，所以可立即增加销售”？

<strong>解析：</strong>拆成两条已经完成与尚未完成的条件：物理生产设施可用，但产品认证限制当前可交付量。应补查认证进度、范围、试产合格率及客户验收；不能把全部设备能力直接计作研究窗口内的已授权销量。真实案件的具体许可条文必须另取，不能把本篇银行规则跨行业照搬。

[^scope]: EIDEF-S07，12 CFR §252.30，Regulation YY Subpart D，适用范围全文。采用2026-09-21访问、eCFR页面截至2026-09-17版本。[官方条文](https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.30)。
[^rule]: EIDEF-S08，12 CFR §252.35，(a)(1)–(5)及(b)(1)–(3)，压力情景、期限、频率、来源资格、折价与流动性缓冲。来源资格特别见(a)(5)(i)–(iii)。[官方条文](https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.35)。条文不是统一的LCR计算式。
[^svb]: EIDEF-S09，美联储理事会，2023-04-28 SVB Review，Executive Summary，“Governance and Risk Management”中ILST、contingency funding及资金准备的具名段落。[历史复盘](https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm)。未将其替代现行法规。

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源。原资产62.5经20%折价为50，仅为正文补充变式。

```json
{
  "need": 120,
  "eligible_sources": 50,
  "excluded_sources": 0,
  "excluded_credit_line": 0,
  "signed_net_need": 70,
  "net_need": 70,
  "test_frequency": "先查完整分类，不能自动推定",
  "buffer_balance": null,
  "buffer_surplus": null,
  "interpretation": "30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"
}
```

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei12-rule-path",
    "node_id": "EI-12",
    "title": "30天来源资格与净需要",
    "anchor": "ei12-rebuild",
    "method": "liquidity",
    "controls": [
      {
        "key": "need",
        "label": "30天压力需要",
        "default": 120,
        "min": 0,
        "max": 500,
        "step": 5,
        "kind": "number"
      },
      {
        "key": "sources",
        "label": "折价后候选来源",
        "default": 50,
        "min": 0,
        "max": 500,
        "step": 5,
        "kind": "number"
      },
      {
        "key": "eligible",
        "label": "候选来源已满足资格",
        "default": true,
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "checkbox"
      },
      {
        "key": "creditLine",
        "label": "另有授信额度（不计入）",
        "default": 0,
        "min": 0,
        "max": 500,
        "step": 5,
        "kind": "number"
      },
      {
        "key": "category",
        "label": "题设已给定类别",
        "default": "unknown",
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "select",
        "options": [
          [
            "unknown",
            "未给定"
          ],
          [
            "IV",
            "Category IV"
          ],
          [
            "other",
            "其他本条适用机构"
          ]
        ]
      }
    ],
    "inputs": {
      "need": 120,
      "sources": 50,
      "eligible": true,
      "creditLine": 0,
      "category": "unknown"
    },
    "algorithm": "合格来源S=eligible?候选额:0；净需要=O−S，非负覆盖需要=max(O−S,0)。30天内credit line贡献恒0。来源与剩余buffer去重；没有B余额就不报buffer余缺。类别不从资产自动计算。",
    "static_equivalent": "120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源。原资产62.5经20%折价为50，仅为正文补充变式。",
    "source_ids": [
      "EIDEF-S07",
      "EIDEF-S08",
      "EIDEF-S09"
    ],
    "identity": "teaching_assumption",
    "description": "30天来源资格与净需要",
    "outputs": {
      "need": 120,
      "eligible_sources": 50,
      "excluded_sources": 0,
      "excluded_credit_line": 0,
      "signed_net_need": 70,
      "net_need": 70,
      "test_frequency": "先查完整分类，不能自动推定",
      "buffer_balance": null,
      "buffer_surplus": null,
      "interpretation": "30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei12-rule-path",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [12 CFR §252.30 — Scope](https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.30): BHC平均合并资产100bn是本子部分适用门槛；不单独决定Category IV。
- [12 CFR §252.35 — Liquidity stress testing and buffer requirements](https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-252/subpart-D/section-252.35): 30天及以下不得计入credit line；资产现金来源考虑折价；频率按已给定类别；缓冲资格与净现金需要分别处理。
- [Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Executive Summary](https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm): 历史报告记载ILST失败、调整假设和资金准备等问题；不替代现行法规，不作政治或机构优劣评级。

## Content relations
```json
[
  {
    "from": "zh-ei12",
    "relation": "part_of",
    "to": "industry-environment",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei12",
    "relation": "requires",
    "to": "zh-ei10",
    "reason": "能区分资金来源和负债重定价",
    "required_competence": "能区分资金来源和负债重定价"
  },
  {
    "from": "zh-ei12",
    "relation": "uses_method",
    "to": "zh-ei05",
    "reason": "规则如何改变交易边的资格和成本"
  },
  {
    "from": "ei12-scope",
    "relation": "supported_by",
    "to": "EIDEF-S07",
    "reason": "BHC平均合并资产100bn是本子部分适用门槛；不单独决定Category IV。",
    "locator": "§252.30全文",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei12-scope"
  },
  {
    "from": "ei12-scope",
    "relation": "supported_by",
    "to": "EIDEF-S08",
    "reason": "30天及以下不得计入credit line；资产现金来源考虑折价；频率按已给定类别；缓冲资格与净现金需要分别处理。",
    "locator": "(a)(1)–(5)、(b)(1)–(3)；频率(a)(2)、来源(a)(5)(i)–(iii)",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei12-scope"
  },
  {
    "from": "ei12-history",
    "relation": "supported_by",
    "to": "EIDEF-S09",
    "reason": "历史报告记载ILST失败、调整假设和资金准备等问题；不替代现行法规，不作政治或机构优劣评级。",
    "locator": "Executive Summary；Governance and Risk Management中ILST、CFP及资金操作准备段",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei12-history"
  },
  {
    "from": "ei12-rebuild",
    "relation": "illustrated_by",
    "to": "exp-ei12-rule-path",
    "reason": "120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源。原资产62.5经20%折价为50，仅为正文补充变式。",
    "at_section": "ei12-rebuild"
  },
  {
    "from": "zh-ei12",
    "relation": "illustrated_by",
    "to": "zh-record-svb-financial-group-historical-20260921",
    "reason": "有日期的原始公司材料映射，不是公司价值评判"
  }
]
```

## Related entries
