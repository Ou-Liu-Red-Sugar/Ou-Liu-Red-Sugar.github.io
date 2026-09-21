{
  "title": "分部、合并范围与共同资源",
  "description": "CAT收入与税前利润两条完整合并桥，配Salesforce单分部业务地图；把共同资源与报告边界一起保留.",
  "layout": "entry",
  "notebookid": "zh-bf18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf18"
}

拆开企业，是为了看清不同业务的收费、投入和责任；把它们重新合起来，是为了确认这些结果最终归属于哪一个集团. 前一步让差异显露，后一步检查重复、遗漏和口径. 这篇要完成一张有明确终点的合并桥，而不是把所有分部利润相加后就停下.

共同部分加一条所选分支约需 15–20 分钟. Caterpillar 分支重建多分部的收入与利润；Salesforce 分支练习在一个披露分部内组织业务分析. 两条路线都保留各自能观察到的东西，不强迫公司披露成同一种形状.

<a id="bf18-boundaries"></a>
## 1. 四种切法为什么不一定重合

<strong>经营业务</strong>是分析者按收费、交付和资源关系确定的对象；<strong>经营分部</strong>沿管理层定期评估资源与绩效的组织方式识别；<strong>报告分部</strong>是对外披露的分部范围；<strong>合并集团</strong>则涉及哪些实体与交易被纳入同一套报表. 两家公司可以卖相似产品，却采用不同的内部组织和对外分部结构.

共同资源也会穿过这些边界. 一个研究团队可能服务多条产品线，融资和法律职能可能集中管理，集团内部还可能提供发动机、零部件或保险服务. 读者需要同时保留“哪个业务使用资源”与“在哪个口径下确认成本”，而不是为了得到整齐的分部利润率，把共同成本随意分摊. 下面两份年报把这种差异展示得很具体. [^bf18-cat][^bf18-crm]

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="industrial">多分部：Caterpillar</button>
<button type="button" data-select-reading-branch="software">单分部：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="industrial">

<a id="CASE-BFDE-CAT-BF18-20260921"></a>
<a id="bf18-cat-revenue"></a>
## 2. Caterpillar：先接收入，再接利润

Caterpillar FY2025 的 Note 23 说明，公司有五个经营分部，其中四个为报告分部；较小的分部进入 All Other，若干共同职能为成本中心. 2025-07-01 发生职责调整，本份年报中的 2024／2023 比较数据已追溯按新列报重排. 所以本篇跨期比较使用<strong>同一份 FY2025 报告内的比较列</strong>，不拼接旧年报. [^bf18-cat]

### 收入表：不要跳过列头和脚注

以下保留 Note 23 收入表的外部、内部与合计列，省略的是地理分布细列，而不是合并所需的主板块. 单位 M 美元，期间为 2025 年全年.

| 原分部／合计 | External Sales and Revenues¹ | Intersegment Sales and Revenues | Total Sales and Revenues |
|---|---|---|---|
| Construction Industries | 24,800 | 260 | 25,060 |
| Resource Industries | 12,185 | 289 | 12,474 |
| Power & Energy | 27,143 | 5,058 | 32,201 |
| Financial Products Segment | 4,220 | 0 | 4,220 |
| Total sales and revenues from reportable segments | 68,348 | 5,607 | 73,955 |
| All Other Segment | 46 | 281 | 327 |
| Corporate Items and Eliminations | (805) | (5,888) | (6,693) |
| Total Sales and Revenues | 67,589 | 0 | 67,589 |


Construction Industries、Resource Industries、Power & Energy 分别服务不同设备与应用；Financial Products Segment 则提供融资、租赁、保险等服务. 先有这个业务区别，再读金额，才能理解集团内交易为什么会存在.

四个报告分部总收入为 73,955，加 All Other 327，再加 Corporate Items and Eliminations 的负数 6,693，得到集团 67,589. 另一方面，按列也能核对：外部列 $68,348+46-805=67,589$；内部列 $5,607+281-5,888=0$. 两条核对一起做，才能确认我们没有把内部销售留在集团收入中.

原表 Financial Products 的外部列 4,220 还有脚注：其中包含来自工业及 All Other 分部的 712. 这里的列头不能脱离公司使用的分部计量方式，被理解为每一行全是集团外客户销售. 保留 712 的脚注，再使用完整 Corporate Items and Eliminations 核回合并总额；它不是额外应加的一笔收入. [^bf18-cat-revenue]

<a id="bf18-cat-profit"></a>
### 分部利润表：先看它扣了什么

Note 23 的分部利润表按 CODM 定期取得的信息列示. 以下为 FY2025 全部报告分部及主要费用板块；金额 M 美元. 原表的费用列为“减去”，所以负的 Other segment items 在计算中会增加利润.

| 原行 | Construction Industries | Resource Industries | Power & Energy | Financial Products Segment | Total |
|---|---|---|---|---|---|
| Sales and revenues | 25,060 | 12,474 | 32,201 | 4,220 | 73,955 |
| Less: Cost of goods sold | 18,393 | 9,018 | 22,474 | 0 | 49,885 |
| Less: SG&A/R&D | 1,902 | 1,513 | 3,330 | 829 | 7,574 |
| Less: Other segment items | 90 | (45) | (21) | 2,425 | 2,449 |
| Segment Profit | 4,675 | 1,988 | 6,418 | 966 | 14,047 |


例如 Resource Industries 的利润为 $12,474-9,018-1,513-(-45)=1,988$. Financial Products 没有在该表列商品销售成本；它的其他分部项目含融资利息、出租设备折旧、保险承保费用及其他收益. 工业分部与金融分部的利润都称税前口径，但纳入的利息及其他损益范围不同. [^bf18-cat-profit]

公司还说明，分部存货和销售成本按 current cost 计量，股权薪酬不进入分部利润，某些成本存在现金与应计确认的时间差，许多共同管理负债不进入工业分部净资产. 这些差异决定我们不能把分部数原样当作集团 GAAP 经营利润.

### 合并桥的终点是税前利润

下面保留完整调整项. 不要把“方法差异”四个字当成吞掉一切的黑箱；逐项看名称，至少知道是在调整共同成本、时点还是计量. [^bf18-cat-recon]

| 完整原行与中文 | FY2025， M 美元 |
|---|---|
| Total profit from reportable segments／报告分部利润 | 14,047 |
| Profit from All Other Segment／其他分部利润 | (8) |
| Cost centers／成本中心 | (11) |
| Corporate costs／公司共同成本 | (1,006) |
| Timing／确认时点差异 | (175) |
| Restructuring costs／重组成本 | (445) |
| Inventory/cost of sales／存货／销售成本计量 | 49 |
| Postretirement benefit income (expense)／退休后福利收益（费用） | 185 |
| Stock-based compensation expense／股权薪酬费用 | (230) |
| Financing costs／融资成本 | (180) |
| Currency／汇率 | (81) |
| Goodwill impairment charge／商誉减值 | 0 |
| Other income/expense methodology differences／其他损益计量方法差异 | (470) |
| Other methodology differences／其他方法差异 | (134) |
| Total consolidated profit before taxes／合并税前利润 | 11,541 |


四项报告分部利润合计 14,047，调整合计 −2,506，因此得到 <strong>集团税前利润 11,541</strong>. 集团经营利润另为 11,151，它通过 $11,151-502+892=11,541$ 接到税前利润：502 是不含金融产品业务的利息费用，892 是其他收益. 不能把两条桥的终点混成一个“利润”.

这时我们可以返回业务：分部利润有助于看管理层如何配置资源、哪些业务承受不同压力；集团桥则恢复共同职能、会计口径和归属. 二者都需要，合并不是否定分部信息，而是让它能被正确使用.

### 工业分支练习

<strong>任务. </strong>独立核出两项结果：四分部收入到集团收入；四分部利润到集团税前利润. 然后使用 FY2025 报告内的 2024 比较数据——报告分部收入 70,833、All Other 344、Corporate/eliminations −6,368——恢复 2024 集团收入.

<strong>解析. </strong>2025 收入是 $73,955+327-6,693=67,589$；利润是 $14,047-2,506=11,541$. 2024 收入是 $70,833+344-6,368=64,809$. 最后一个计算沿同份报告的重列数据保持口径. 若想解释两年变化，还需要回到各业务的量价成本说明；简单相减不能替代经营原因.

</section>

<section data-reading-branch="software">

<a id="CASE-BFDE-CRM-BF18-20260921"></a>
<a id="bf18-salesforce"></a>
## 3. Salesforce：一个报告分部，仍然可以做有结构的业务分析

Salesforce FY2026 的 Note 1 明确称其为一个经营分部，CODM 按合并净利润评估资源和表现，分部资产就是合并资产总额. 公司虽然有多种产品、地理市场与收购业务，但这些产品收入类别不是各自披露了营业利润的独立经营分部. 原文将这一管理方式与产品共同运行的平台、相似部署方式联系起来. [^bf18-crm]

先把这套原则走完一条具名路径. Note 2 p70 披露 FY2026 `Agentforce Sales` 的 subscription and support revenue 为 9,028（FY2025 为 8,322）；Note 1 同时说明大多数 service offerings 运行在 Agentforce 360 Platform 上、部署方式近似，而集团 FY2026 研发费用为 5,993，其中已经包含 1,162 的股权薪酬. 于是我们可以从<strong>已披露的产品收入 9,028</strong>出发，连到<strong>共同平台与集团研发资源</strong>，最后回到<strong>一个 operating segment 与 consolidated net income</strong>这个报告终点. 这里仍然没有披露 Agentforce Sales 自己的营业利润、研发分摊或独立资产负债表；这正是“具名业务分析”与“伪造分部利润”的分界. [^bf18-crm-product][^bf18-crm-fs]

| 具名业务路径 | 直接披露 | 可建立的资源关系 | 仍未披露 |
|---|---|---|---|
| Agentforce Sales | FY2026 subscription and support revenue 9,028；Note 2 p70 | 多数服务共享 Agentforce 360 Platform；集团 R&D 5,993 含 SBC 1,162 | Agentforce Sales 独立营业利润、独立 R&D 分配、独立资产负债表 |

这不意味着分析只能写“全公司收入”. 我们可以建立一个<strong>分析性业务—共同资源表</strong>，同时留住披露边界：

| 当前分析问题 | 可以使用的材料 | 所建立的关系 | 留在集团层核对的部分 |
|---|---|---|---|
| 客户买哪类服务、何时付费 | 产品收入和合同披露 | 收费／履约到收入 | 同一合同涉及多个产品时的分配 |
| 研发支持什么能力 | 研发费用、员工及分摊成本说明 | 产品与共同平台调用资源 | 未披露的逐产品研发分配 |
| 收购带来什么资源 | Informatica 初步 PPA、无形资产类别 | 买入技术和客户关系 | 商誉、税项及其他取得净资产 |
| 最终怎样评价集团表现 | 合并利润表与 Note 1 Segments | 收入、费用、其他损益到合并净利润 | 不能凭产品名补出的独立利润表 |

这张表是围绕真实披露建立的分析地图，不是公司报告的分部表；它用于定位产品、共同资源和集团核对项. 比如，FY2026 研发 5,993 中已经含 1,162 股权薪酬；多个产品共用同一平台时，这笔已记录的集团费用不能为每个产品重复计入一次.[^bf18-crm-fs]

可以正面完成的任务是：写明一个产品的收费和交付关系，列出它调用的共同资源，再标出可以直接观察、只能分析估计和仍未取得的数据. 完成以后，合并净利润仍是报告口径的终点. 只有当另外取得足够证据、明确分摊目的与规则时，才能另做分析性产品利润估计；该估计应与原始合并数并列，而不是替换公司披露.

### 软件分支练习

<strong>任务. </strong>以 Agentforce Sales 为对象，写一条四步业务链：①原件直接披露的 FY2026 收入及位置；②它与共同平台的关系；③集团层已披露的研发资源；④若要算该产品利润还缺什么.

<strong>解析. </strong>第一步是 Note 2 p70 的 Agentforce Sales subscription and support revenue 9,028；第二步是 Note 1 对多数 service offerings 共用 Agentforce 360 Platform、部署方式近似的说明；第三步是集团 FY2026 R&D 5,993（已含 SBC 1,162），这笔集团费用只能在集团层计一次；第四步，若要计算 Agentforce Sales 自身利润，还需要可支持的产品增量成本、共同平台资源使用或内部管理资料及明确分配规则. 现有材料支持一条具名业务—共同资源—集团终点的分析链，但不支持把 9,028 旁边补出一项“公司披露的产品营业利润”.

</section>

<a id="bf18-experiment"></a>
## 4. 看清每一条合并箭头的终点

<div data-experiment-slot="EXP-BF18-SEGMENT-RECONCILIATION"></div>

实验的工业视图分别展开收入、分部利润和经营利润到税前利润三条路径. 选择所需的桥，下方表格会同时显示完整调整行与逐步累计结果；软件视图则显示“产品／共同资源→一个经营分部→合并结果”的映射，不显示不存在的逐产品利润. 所有历史输入固定不动，静态表已保留同样的结果.

<a id="bf18-exercise"></a>
## 5. 带走一份可复核的拆合记录

完成所选分支后，写下对象边界、来源期次、采用的利润定义与合并终点，再选一个共同资源说明为什么它跨业务. 工业路线应交出 67,589 的收入桥和 11,541 的税前桥；软件路线应交出一张不重复集团费用、并把未披露产品利润留作未识别项的资源地图. 换公司时，先重复这个动作，再计算你关心的利润率. 这样“拆业务”是在明确的记录范围内解释经营，而不是按股票标签给数字分组.

[^bf18-cat]: Caterpillar FY2025 Form 10-K，Note 23 A/B/C，pp115–118，业务划分、2025-07-01职责调整及比较期重列、计量政策. [SEC 原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm). 取得日 2026-09-21.
[^bf18-cat-revenue]: 同一原件 Note 23，Sales and Revenues by Geographic Region，p118 含 Financial Products external-column 脚注1；本篇保留外部、内部、总额与抵销列，省略地理细列.
[^bf18-cat-profit]: 同一原件 Note 23，Profit from Reportable Segments，p120 全表及脚注1–3；negative Other segment items 按原表保留.
[^bf18-cat-recon]: 同一原件 Note 23，Reconciliation of Consolidated profit before taxes，p121，全部调整项；经营到税前取 Statement 1 对应层次. 均为 M 美元.
[^bf18-crm]: Salesforce FY2026 10-K，Note 1 Principles of Consolidation／Segments，p63. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 截至2026-01-31的年度，取得日2026-09-21.
[^bf18-crm-product]: 同一 Salesforce FY2026 原件，Note 2 `Subscription and Support Revenue by the Company's Service Offerings`，p70：Agentforce Sales FY2026/2025/2024 分别为 9,028/8,322/7,580；表下注明 FY2026 第三季度产品命名变化未改变收入分配. 金额 M 美元.

[^bf18-crm-fs]: 同一 Salesforce 原件，Consolidated Statements of Operations p58 及R&D股权薪酬脚注、MD&A Research and Development. 共同资源表为基于披露的分析组织，不是公司分部新表.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>

