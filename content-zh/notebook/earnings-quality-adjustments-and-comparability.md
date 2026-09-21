{
  "title": "盈利质量、调整口径与比较",
  "description": "完整复算Salesforce官方GAAP/non-GAAP调节，辨清税额、SBC范围和分母；自选区只改变经营利润与利润率。",
  "layout": "entry",
  "notebookid": "zh-bf20",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf20"
}

读到一家公司同时给出两种利润，我们不必先选“相信哪一个”。更有效的起点是问：它们各自计入了什么，为了回答什么问题，又有哪些事项被留在了图外？这篇用Salesforce FY2026的原始业绩公告，把经营利润、净利润、每股收益和自由现金流四组调节走完，再由读者撤销一项调整。完整学习约15–20分钟；研究选读可后看。

<a id="bf20-purpose"></a>
## 1. 一项调整先要有一个分析目的

<strong>报告质量</strong>关心计量、披露和呈现能否让人理解经营事实；<strong>盈利的持续性</strong>关心某个项目今后是否还会发生；<strong>可比性</strong>关心两期或两家公司是否使用相同口径。三者相关，却不是同一个尺度。某项费用真实发生、披露清楚，仍可能在下一年不再发生；某项没有当期现金支付的费用，也可能每年继续发生并改变股东权利。

因此我们从GAAP原值出发，保留一条可逆路径：原利润，加减具名项目，得到明确命名的补充指标。调整不是抹去事实，而是让某个比较更清楚。例如，要观察收购无形资产摊销前的经营结果，可以单独列出该摊销；但要判断现有收入由哪些资源支持，又必须回到取得这些资产的成本、使用寿命和未来投入。一个视角提供信息，不代表它取代了其他视角。

SEC对发行人的non-GAAP披露解释也围绕这些关系：原值及调节应清楚，名称不能歪曲计算，跨期处理要解释，税务影响要与指标匹配。经常性项目、现金项目或单方面只调坏消息，需要结合具体事实判断。它们是发行人披露要求，不是禁止读者自行研究的指令；我们这里采用的是保留原值和解释调整目的的方法。[^sec]

<a id="bf20-official-oi"></a>
## 2. 先完整恢复公司的经营利润桥

采用2026-02-25发布的FY2026 Q4及全年业绩公告Exhibit 99.1。下面摘选<strong>完整年度列</strong>，不混入同张原表的季度列。FY2026截至2026-01-31，FY2025截至2025-01-31；金额为百万美元。[^release]

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP income from operations</strong> | <strong>GAAP经营利润</strong> | <strong>8,331</strong> | <strong>7,205</strong> |
| Amortization of purchased intangibles | 购入无形资产摊销 | 1,687 | 1,651 |
| Stock-based compensation expense | 股权薪酬（不含另列重组股权薪酬） | 3,480 | 3,181 |
| Restructuring and acquisition-related costs | 重组与收购相关成本 | 658 | 461 |
| <strong>Non-GAAP income from operations</strong> | <strong>公司non-GAAP经营利润</strong> | <strong>14,156</strong> | <strong>12,498</strong> |
| Total revenues | 收入分母 | 41,525 | 37,895 |
| GAAP operating margin | GAAP经营利润率（%） | 20.1 | 19 |
| Non-GAAP operating margin | 公司non-GAAP经营利润率（%） | 34.1 | 33 |

单位：USD million。年度期间截至相应年份1月31日，非日历年；利润率是公司展示的取整百分数。 SBC脚注(3)：FY26/FY25重组项内的29/2不在本表SBC剔除行，已经纳入重组与收购行。

FY2026原经营利润8,331；加回1,687的购入无形资产摊销、3,480的特定范围股权薪酬，以及658的重组与收购相关成本，得到14,156。分母仍是同一份GAAP收入41,525。因此，金额复算的两种利润率分别为20.0626%和34.0903%，对应公告展示的20.1%和34.1%。

先看两期，而不是只看加回后较大的数。FY2025同类三项为1,651、3,181和461，官方补充利润为12,498。由此可以确认这些调整类别并非只在FY2026出现；但“类别连续出现”仍不能替代对具体收购、奖励和重组事项的分析。持续性应在项目层面判断，不能仅凭表里写了“调整”就把它认作一次性。

### 三项加回分别把什么移出了观察窗口

购入无形资产摊销是已取得资源的期间分摊；它没有在摊销当期重复发生同额收购现金支出，但这些技术和客户关系仍参与形成收入。公司自己的说明也承认它们支持收入。如果拿摊销前利润与内部研发企业比较，还须注意后者的研发或销售投入可能已直接费用化；仅移掉一边的资源成本，并不会自动得到更好的可比口径。[^release]

股权薪酬对应员工服务和可能的股东权利变化。把它从经营指标中排除，可以形成公司选定的补充视角，但不能把薪酬安排及股数影响一并删掉。重组与收购相关成本则可能同时含现金付款、非现金减值和其他成本；要判断它今后会否发生，应读所对应计划、交易和履行情况，而不只看科目名。

<a id="bf20-official-ni"></a>
## 3. 净利润和每股桥必须连同税与分母一起读

经营利润桥只处理这一层的费用。走到净利润时，公司还调整所得税，以下保留整条官方桥。[^release]

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP net income</strong> | <strong>GAAP净利润</strong> | <strong>7,457</strong> | <strong>6,197</strong> |
| Amortization of purchased intangibles | 购入无形资产摊销 | 1,687 | 1,651 |
| Stock-based compensation expense | 股权薪酬（同一排除范围） | 3,480 | 3,181 |
| Restructuring and acquisition-related costs | 重组与收购相关成本 | 658 | 461 |
| Income tax effects and adjustments | 所得税影响及调整 | (1,313) | (1,560) |
| <strong>Non-GAAP net income</strong> | <strong>公司non-GAAP净利润</strong> | <strong>11,969</strong> | <strong>9,930</strong> |

单位：USD million。这是官方完整组合；税额不作为可任意拆分的单项税收属性。

FY2026的计算为7,457＋1,687＋3,480＋658−1,313＝11,969。这一税额是整套指标的组成部分，不是可以随意留在任意三个开关后的“共同扣项”。公司的方法说明，FY2025和FY2026使用22.0%的长期预计non-GAAP税率，20.5%属于FY2027，不能前移到本期。[^taxmethod]

我们可以用本期税前利润9,520和GAAP税费2,063检查整桥的量级：

```text
调整后税前总额 = 9,520 + 1,687 + 3,480 + 658 = 15,345
按公司FY2026方法的税额 = 15,345 × 22% = 3,375.9
相对GAAP税费增加 = 3,375.9 − 2,063 = 1,312.9 ≈ 1,313
```

这解释了为什么−1,313不能固定跟随任何子集。若三个经营调整都关闭却仍扣它，会得到6,144，既不是GAAP7,457，也不是官方non-GAAP11,969。若未来要研究自选的税后口径，需要另给适用期间、税收假设和分母，而不是按加回金额比例分配这条税额。

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP diluted net income per share</strong> | <strong>GAAP稀释EPS</strong> | <strong>7.8</strong> | <strong>6.36</strong> |
| Amortization of purchased intangibles | 摊销每股调整 | 1.76 | 1.7 |
| Stock-based compensation expense | 股权薪酬每股调整 | 3.64 | 3.27 |
| Restructuring and acquisition-related costs | 重组/收购每股调整 | 0.69 | 0.47 |
| Income tax effects and adjustments | 所得税每股调整 | (1.37) | (1.6) |
| <strong>Non-GAAP diluted net income per share</strong> | <strong>公司non-GAAP稀释EPS</strong> | <strong>12.52</strong> | <strong>10.2</strong> |
| Shares used in computing basic net income per share | GAAP与non-GAAP基本分母（百万股） | 950 | 962 |
| Shares used in computing diluted net income per share | GAAP与non-GAAP稀释分母（百万股） | 956 | 974 |

单位：USD/share；分母行另为million shares。每股调整分别取整；FY26/FY25官方两种稀释EPS分别使用同一956/974百万股分母。

官方FY2026的两种稀释EPS都用956百万股：7,457÷956约7.80，11,969÷956约12.52。每股调节各行经过取整，比较时首先保留原表。年度基本分母950和稀释分母956又不同于期末在外929百万股；前两者是期间加权数量，最后一个是时点数量。换分母会同时换问题。[^shares]

<a id="bf20-scope"></a>
## 4. 一处脚注能避免怎样的重复计算

在现金流量表中，FY2026股权薪酬加回为3,509；业绩公告的剔除行却是3,480。乍看像冲突，但公告脚注(3)明确说明：另有29已包含在重组项中，所以3,480＋29＝3,509。如果把3,509全部填进经营利润桥，再保留完整658，就会把29重复加回。[^release]

| 事项 | 在这份调节中的位置 | 还要回到哪份材料 |
|---|---|---|
| 股权薪酬 | 3,480单列；29在重组项内 | 现金流加回3,509；权益、授予和股数 |
| 购入无形资产摊销 | 本期加回1,687 | 无形资产附注、过去收购及资源替换 |
| 重组与收购成本 | 加回658，含上述29 | 具体计划、交易范围、现金及非现金组成 |
| 税额 | 整套官方净利润调整−1,313 | FY2026的22%方法与GAAP税前/税费 |

现金流加回本身也不表示员工服务免费。Salesforce现金流还单列股权奖励净额结算相关税款351和回购现金12,596；这不是把它们全归为“消除股权薪酬”的理由，而是提醒我们薪酬费用、现金分类和股数是三组需要联读的证据。实验中的调整按钮只改变分析结果，不会真的支付现金或注销股份。[^cfs]

<a id="bf20-fcf"></a>
## 5. 自由现金流也有自己的定义边界

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| GAAP net cash provided by operating activities | GAAP经营现金流 | 14,996 | 13,092 |
| Capital expenditures | 资本支出 | (594) | (658) |
| <strong>Free cash flow</strong> | <strong>公司定义FCF</strong> | <strong>14,402</strong> | <strong>12,434</strong> |

单位：USD million。

公司这里将FCF定义为经营现金流减资本支出，14,996−594＝14,402。这个等式能完整复算，但它没有扣去本年9,268的企业合并净现金支出，也不替代债务、分红或其他融资安排。FCF不是从所有义务中扣剩的“任意可分配资金”。SEC的相关解释特别要求说明定义与调节，并提醒不同公司的FCF口径可能不同。[^fcf]

这也说明盈利质量不能只用“净利润与FCF接近不接近”判断。订阅业务的开票、收款与履约时间，以及合同取得成本资本化等项目，会进入经营现金流；收购形成的资源则在另一类现金流里。比较之前先恢复这些路径，才知道差额在说明什么。

<a id="bf20-experiment"></a>
## 6. 现在撤销一项，写出自己的理由

实验固定显示四条官方桥；读者自选区只重算经营利润和收入分母下的利润率。默认启用全部三项，得到公司官方经营口径。将股权薪酬排除开关关闭，相当于把该费用重新纳入：14,156−3,480＝10,676，利润率25.7098%。全部关闭则回到8,331和20.0626%。

<div data-experiment-slot="EXP-BF20-REVERSIBLE-ADJUSTMENTS"></div>

与开关一同写下的应是一句目的说明。例如：“为了观察保留员工薪酬后的经营结果，我保留股权薪酬费用，同时暂时剔除购入无形资产摊销和重组/收购项；所得10,676是这个特定比较口径，不代表它已完成未来盈利正常化。”下一步再追问剔除项的持续性，才会从算术走向分析。

<a id="bf20-exercise"></a>
## 7. 解释题与跨期迁移

<strong>任务一：</strong>只剔除摊销，保留其他所有费用。给出FY2026经营利润及利润率，并指出为什么不能直接沿用−1,313税额。

<strong>任务二：</strong>对FY2025也采用“保留股权薪酬、剔除其他两项”的同一口径，计算两期经营利润。两者比较改善了什么，又还没解决什么？

<strong>任务三：</strong>有人把现金流的3,509填进non-GAAP桥，结果比14,156多29。找出错误，并说明为何不能简单把某张表判为不可靠。

<details><summary>展开完整解析</summary>

任务一：8,331＋1,687＝10,018；10,018÷41,525＝24.1252%。−1,313是官方完整三项组合与公司税率方法共同产生的税后调节，不是摊销这一项的独立税收属性。本任务不生成自选净利润或EPS。

任务二：FY2025为12,498−3,181＝9,317；FY2026为10,676，增加1,359，约14.59%。统一处理改善了指标口径的一致性，却还没有证明重组成本永不重复、并购摊销与内部资源投入经济上完全等价。它也没有改变真实现金或股数。可以把同口径结果当作后续经营状态分析的输入，不把它自动命名为未来正常盈利。

任务三：29已进入658重组/收购项。再用3,509取代3,480会重复剔除29。应按脚注恢复3,480＋29＝3,509的范围关系，而不是凭两个接近的数字宣告原件冲突。

</details>

<details data-agent-option="research"><summary>研究选读：透明度、持续性和分母为什么要一起读</summary>
<a id="bf20-research"></a>

Dechow、Ge、Loh和McVay（2026）的披露质量框架把调节透明度、剔除项目、分母和其他披露渠道联系起来，也承认non-GAAP既可能提供信息，也可能掩盖经营成本。其18家公司试用对应2024Q2，虽含Salesforce和Adobe，却不是本篇FY2026的公司评价；某些难编码指标还未进入试用评分。这里借用的是联读问题，不是一个自动质量分数。[^research]

</details>

[^sec]: SEC Division of Corporation Finance，[Non-GAAP Financial Measures CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，100.01–100.06、102.05–102.07、102.10(a–c)、102.11；页面Last Update 2022-12-13。
[^release]: [Salesforce FY2026 Q4/FY Results，Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，2026-02-25，GAAP Results Reconciled to Non-GAAP Results的完整年度列、费用明细及脚注(1)–(3)。
[^taxmethod]: 同份[Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Non-GAAP Financial Measures—Income Tax Effects and Adjustments；FY2025/FY2026 22%，FY2027 20.5%。配合[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)利润表及Note 12的9,520/2,063，仅用于本例整桥核对。
[^shares]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share；[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)权益表及Note 13。百万股与美元/股分开。
[^cfs]: [Salesforce FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows，FY2026列；股权奖励现金税、回购与经营加回分别保留。
[^fcf]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Free Cash Flow及定义；[SEC CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，102.07。公司FCF是补充指标而非所有剩余资金。
[^research]: Dechow、Ge、Loh、McVay，[Beyond earnings quality: evaluating the quality of corporate disclosure practices](https://link.springer.com/article/10.1007/s11142-026-09971-2)，Review of Accounting Studies 31（2026），1567–1637，§3.2–3.3及§8的2024Q2试用范围；2026-07-24出版。

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>

