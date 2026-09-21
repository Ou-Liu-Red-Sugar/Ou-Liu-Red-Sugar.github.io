{
  "title": "无形资源、研发与商誉",
  "description": "沿研发、初步购买价分摊和集团无形资产滚动识别资源及会计来源；进阶再构建条件明确的资本存量.",
  "layout": "entry",
  "notebookid": "zh-bf14",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf14"
}

内部研发、收购买入的无形资产和商誉进入报表的路径不同. Salesforce的研发费用、Informatica收购及集团无形资产滚动表展示这些差别；进阶分支再用研发与组织资本模型估计报表之外的经济资源.

<a id="bf14-economic-resource"></a>
## 1. 无形资源的使用与收益归属

一套软件可以在多个地方重复部署，一种管理流程也可能被不同团队同时使用；但它们需要代码、设备、文档或人员来承载. 可复制不等于收益能被企业完全占有：人员流动、模仿、更新不足和制度安排都会改变收益归属与资源寿命. JEP 2022 对无形资本的讨论，用“非竞争性使用”和“有限排他性”把这两面分开. [^bf14-jep]

经营分析识别资源、承载方式、用途和收益归属；会计确认再依据适用规则记录资产或费用，研究模型则通过投入、形成比例和耗损估计资本存量.

<a id="bf14-rd"></a>
## 2. 内部研发与费用

Salesforce FY2026 截至 2026-01-31，研发费用为 5,993 M 美元，其中股权薪酬 1,162 已经包含在内；FY2025 两项分别为 5,493 与 1,091. 研发活动涉及员工与分摊成本，这些金额能够支持“本期投入了什么”的分析. 若想进一步判断形成了多少可持续能力，还需要项目产出、更新需求、留存人员、客户采用和收益证据. [^bf14-crm-fs]

分析上将研发资本化，需要确定投入形成长期资源的比例、耗损速度，以及各期重新计入成本的金额.

<a id="CASE-BFDE-CRM-BF14-20260921"></a>
<a id="bf14-ppa"></a>
## 3. Informatica：从购买对价到可辨认净资产与商誉

Salesforce于2025年11月收购Informatica. 以下采用FY2026披露的初步购买价分摊，单位：M 美元. 对价由三项组成.[^bf14-ppa]

| 对价原行 | 金额 |
|---|---:|
| Cash／现金 | 9,538 |
| Fair value of pre-existing relationship／先前关系公允价值 | 62 |
| Fair value of equity plan assumed／承接股权计划中计入对价部分 | 36 |
| Total／总对价 | 9,636 |

取得资产和承接负债如下.

| 初步购买价分摊原行 | 金额 |
|---|---|
| Cash and cash equivalents／现金及等价物 | 1,405 |
| Accounts receivable／应收 | 233 |
| Property and equipment, net／物业设备净额 | 128 |
| Operating lease right-of-use assets／使用权资产 | 27 |
| Other assets／其他资产 | 149 |
| Goodwill／商誉 | 5,257 |
| Intangible assets／可辨认无形资产 | 3,818 |
| Accounts payable, accrued expenses and other current liabilities／应付、应计及其他流动负债 | (221) |
| Unearned revenue／未实现收入 | (651) |
| Operating lease liabilities／经营租赁负债 | (30) |
| Other noncurrent liabilities／其他非流动负债 | (36) |
| Deferred tax liability／递延所得税负债 | (443) |
| Net assets acquired／含商誉的取得净资产 | 9,636 |

原表含商誉的净资产总额为 9,636. 将商誉单独取出，其他已确认资产减负债为 4,379，于是 $4,379+5,257=9,636$. 这里 4,379 是<strong>除商誉外的可辨认净资产</strong>，包括其他资产和负债；3,818 才是其中可辨认无形资产的总额.

| 可辨认无形资产原行 | 初步金额 | 估计寿命 |
|---|---:|---:|
| Developed technology—Cloud／云技术 | 1,350 | 7年 |
| Developed technology—Other／其他技术 | 270 | 3年 |
| Customer relationships／客户关系 | 1,840 | 10年 |
| Trade names／商号 | 79 | 4年 |
| Backlog／订单相关无形资产 | 279 | 2年 |
| Total intangible assets subject to amortization | 3,818 | — |

这些类别对应不同的持续投入与服务期：技术需要更新，客户关系需要维持，订单相关无形资产对应现有服务期. 寿命是会计分摊估计. 商誉占对价约54.6%，该比例描述本次初步购买价分摊的结构.

承接股权奖励的公允价值330中，36初步计入购买对价，294对应未来服务，按剩余服务期费用化.[^bf14-ppa]

<a id="bf14-intangible-roll"></a>
## 4. 无形资产滚动与摊销费用

集团Note 8把购入无形资产分为技术、客户关系及其他. 以下为FY2026全部分项重排，金额 M 美元. 原值变动列是 `Additions and retirements, net`；累计摊销变动列是 `Expense and retirements, net`，两列均为净额口径. [^bf14-roll]

| 原分类 | 期初原值 | 增加及退除净额 | 期末原值 | 期初累计摊销正额 | 费用及退除净额正额 | 期末累计摊销正额 | 期初净额 | 期末净额 |
|---|---|---|---|---|---|---|---|---|
| Acquired developed technology／购入已开发技术 | 2,958 | 1,838 | 4,796 | 1,753 | 654 | 2,407 | 1,205 | 2,389 |
| Customer relationships／客户关系 | 6,894 | 1,765 | 8,659 | 3,820 | 820 | 4,640 | 3,074 | 4,019 |
| Other (1)／其他（商号、未开票订单、区域权利） | 331 | 353 | 684 | 182 | 95 | 277 | 149 | 407 |
| Total／合计 | 10,183 | 3,956 | 14,139 | 5,755 | 1,569 | 7,324 | 4,428 | 6,815 |

先做净额核对：原值 $10,183+3,956=14,139$；累计摊销正额 $5,755+1,569=7,324$；期末净额 $14,139-7,324=6,815$. 等价地，期初净额 4,428 加原值净变动 3,956，再减累计摊销净变动 1,569，得到 6,815.

本年购入无形资产摊销费用为收入成本内692加销售营销费用内995，共1,687；Note 8概述为约1.7 B 美元. 累计摊销净变动1,569还扣除了资产退除等影响. [^bf14-crm-fs][^bf14-roll]

未来摊销在FY2027至FY2031及之后分别为1,842、1,412、1,104、710、448、1,299，合计报告日净额6,815. 商誉滚动为 $51,283+704+5,257+697=57,941$：704来自Regrello，5,257来自Informatica，697为其他收购与调整，含汇率及前期计量调整. 商誉不按有限寿命无形资产的方式系统摊销.

<a id="bf14-experiment"></a>
## 5. 研发、收购与资本存量

<div data-experiment-slot="EXP-BF14-INTANGIBLE-LAYERS"></div>

<a id="bf14-research"></a>
<details data-agent-option="epw">
<summary>进阶：无形资本的形成与耗损</summary>

Ewens、Peters、Wang的研究用1996–2017年退出事件价格连接历史研发和SG&A流量，并处理商誉中的协同、溢付与样本选择. `4.1的设定无法同时独立识别组织资本形成比例与折损率，因此固定后者估计前者；`4.2约束价格与存量的关系. 参数识别决定历史费用能被转换成怎样的资本估计.[^bf14-epw]

教学模型：知识资本记为 $G$，组织资本记为 $S$，期初存量均为0；每期先折损期初存量，再把本期期末形成的投入加入：

$$G_t=(1-\delta_G)G_{t-1}+\alpha R_t$$
$$S_t=(1-\delta_S)S_{t-1}+\gamma M_t$$

$R_t$ 是研发流量，$M_t$ 是明确排除研发、避免重叠的 SG&A 流量. 默认研发为 100、120、80，SG&A 每期为 60；研发形成比例 $\alpha=1$，SG&A 形成比例 $\gamma=0.3$，两种折损率都为 20%. 当前投入在期末加入，因此不在本期先被折损一次.

| 教学期 | 研发流量 | SG&A流量（不含研发） | 期末G | 期末S | 合计 |
|---|---:|---:|---:|---:|---:|
| T1 | 100 | 60 | 100 | 18 | 118 |
| T2 | 120 | 60 | 200 | 32.4 | 232.4 |
| T3 | 80 | 60 | 240 | 43.92 | 283.92 |

T2知识资本为 $100\times0.8+120=200$. 将形成比例 $\gamma$ 从0.3改为0.5，T3组织资本增至73.2，总资本增至313.2，差额29.28来自该参数变化.

将模型用于真实研究时，需用经营能力、历史投入及退出价格证据校准形成比例、折损率和价格约束.

</details>

<a id="bf14-exercise"></a>
## 6. 无形资源分析练习

<strong>任务. </strong>写出 Informatica 对价、可辨认无形资产、除商誉外净资产和商誉四个金额，并说明各自如何核对. 再写出集团本期无形摊销费用与累计摊销净变动.

<strong>解析. </strong>对价 9,636；无形资产五项合计 3,818；除商誉外净资产 4,379；商誉 5,257，后两者合计对价. 不能用 $3,818+5,257$ 代替总对价，因为还少了其他净资产. 集团实际摊销为 $692+995=1,687$，累计摊销净变动为 1,569；它们分别属于期间费用与含退除影响的存量滚动.

<strong>迁移. </strong>某公司内部研发费用很高，但账面无形资产少. 为研究其经营能力，你下一步做什么？

<strong>解析. </strong>列出研发项目、承载资源、持续更新、控制与收益归属的证据，检验费用如何形成可持续经营能力. 建立资本存量估计时，再说明起始存量、形成比例、折损及验证依据.

[^bf14-jep]: Crouzet, Eberly, Eisfeldt, Papanikolaou (2022), *The Economics of Intangible Capital*, JEP 36(3), pp29–34，完整 “Characteristics of Intangibles as Assets”. [已发表版](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf).
[^bf14-crm-fs]: Salesforce FY2026 10-K，Consolidated Statements of Operations p58 及脚注1–2，MD&A Research and Development／Sales and Marketing；Note 1 无形资产及业务合并政策 pp67–68. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日 2026-09-21；金额 M 美元.
[^bf14-ppa]: 同一原件 Note 7，Informatica, Inc.，pp77–79；对价、初步购买价分摊、寿命和承接奖励分配.
[^bf14-roll]: 同一原件 Note 8，pp80–81；含全部原值、累计摊销、净额、未来摊销和商誉滚动及脚注.
[^bf14-epw]: Ewens, Peters, Wang, *Measuring Intangible Capital with Market Prices*, Management Science，Articles in Advance，2024-04-05，Introduction、§§2–4.2（pp1–7）. [作者版本](https://profsean.wang/papers/ewens-peters-wang-2025-ms.pdf). 1996–2017退出样本.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>
