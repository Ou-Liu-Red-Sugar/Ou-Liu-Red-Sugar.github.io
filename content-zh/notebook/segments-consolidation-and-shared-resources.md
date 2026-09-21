{
  "title": "分部、合并范围与共同资源",
  "description": "CAT收入与税前利润两条完整合并桥，配Salesforce单分部业务地图；把共同资源与报告边界一起保留.",
  "layout": "entry",
  "notebookid": "zh-bf18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf18"
}

业务拆分用于识别收费、投入和责任，重新合并则检查这些结果最终归属的集团范围及是否重复或遗漏. Caterpillar 用多分部收入与利润桥展示这一过程；Salesforce 展示一个 operating segment 内仍可按产品、共同资源与集团结果组织业务分析.

<a id="bf18-boundaries"></a>
## 1. 业务与报告边界

<strong>经营业务</strong>是分析者按收费、交付和资源关系确定的对象；<strong>经营分部</strong>沿管理层定期评估资源与绩效的组织方式识别；<strong>报告分部</strong>是对外披露的分部范围；<strong>合并集团</strong>则涉及哪些实体与交易被纳入同一套报表. 两家公司可以卖相似产品，却采用不同的内部组织和对外分部结构.

共同资源会跨越业务边界：研究团队服务多条产品线，融资和法律职能集中管理，发动机、零部件或保险由集团内部提供. 分析时分别记录资源使用者和成本确认范围；估计产品利润还需确定共同成本的分配目的与规则. [^bf18-cat][^bf18-crm]

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="industrial">多分部：Caterpillar</button>
<button type="button" data-select-reading-branch="software">单分部：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="industrial">

<a id="CASE-BFDE-CAT-BF18-20260921"></a>
<a id="bf18-cat-revenue"></a>
## 2. Caterpillar 分部与合并

Caterpillar FY2025 Note 23 列出五个经营分部，其中四个为报告分部，较小的分部进入 All Other，若干共同职能为成本中心. 2025-07-01职责调整后，本份年报已按新列报重排2024、2023比较数据；下文沿用这些比较列. [^bf18-cat]

### 收入表：列头、内部交易与脚注

下表摘录 Note 23 的外部、内部及合计收入列，地理分布细列省略. 单位：USD M；期间：FY2025.

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

Construction Industries、Resource Industries、Power & Energy 分别服务不同设备与应用；Financial Products 提供融资、租赁和保险等服务，部分客户来自集团内部.

四个报告分部收入73,955，加 All Other 327，减 Corporate Items and Eliminations 6,693，得到集团收入67,589. 按列核对，外部列为 $68,348+46-805=67,589$，内部列为 $5,607+281-5,888=0$.

Financial Products 外部列4,220按分部计量口径包含来自工业及 All Other 分部的712. 这部分集团内部来源随 Corporate Items and Eliminations 抵销. [^bf18-cat-revenue]

<a id="bf18-cat-profit"></a>
### 分部利润表：利润定义与扣项

Note 23 的分部利润表按 CODM 定期取得的信息列示. 以下为 FY2025 全部报告分部及主要费用板块；金额 M 美元. 原表的费用列为“减去”，所以负的 Other segment items 在计算中会增加利润.

| 原行 | Construction Industries | Resource Industries | Power & Energy | Financial Products Segment | Total |
|---|---|---|---|---|---|
| Sales and revenues | 25,060 | 12,474 | 32,201 | 4,220 | 73,955 |
| Less: Cost of goods sold | 18,393 | 9,018 | 22,474 | 0 | 49,885 |
| Less: SG&A/R&D | 1,902 | 1,513 | 3,330 | 829 | 7,574 |
| Less: Other segment items | 90 | (45) | (21) | 2,425 | 2,449 |
| Segment Profit | 4,675 | 1,988 | 6,418 | 966 | 14,047 |

例如 Resource Industries 的利润为 $12,474-9,018-1,513-(-45)=1,988$. Financial Products 没有在该表列商品销售成本；它的其他分部项目含融资利息、出租设备折旧、保险承保费用及其他收益. 工业分部与金融分部的利润都称税前口径，但纳入的利息及其他损益范围不同. [^bf18-cat-profit]

分部存货和销售成本按 current cost 计量，股权薪酬从分部利润中排除，部分成本存在现金与应计确认的时间差，许多共同管理负债从工业分部净资产中排除. 下列合并桥将这些差异调整到集团口径.

### 分部利润与集团税前利润

分部利润与集团税前利润的调整如下. [^bf18-cat-recon]

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

四个报告分部利润合计14,047，调整合计−2,506，得到集团税前利润11,541. 集团经营利润11,151另经 $11,151-502+892=11,541$ 接到同一税前终点；502为不含金融产品业务的利息费用，892为其他收益.

### 工业分支练习

<strong>任务.</strong>独立核出两项结果：四分部收入到集团收入；四分部利润到集团税前利润. 然后使用 FY2025 报告内的 2024 比较数据——报告分部收入 70,833、All Other 344、Corporate/eliminations −6,368——恢复 2024 集团收入.

<strong>解析.</strong> 2025收入为 $73,955+327-6,693=67,589$，税前利润为 $14,047-2,506=11,541$. 2024重列收入为 $70,833+344-6,368=64,809$.

</section>

<section data-reading-branch="software">

<a id="CASE-BFDE-CRM-BF18-20260921"></a>
<a id="bf18-salesforce"></a>
## 3. Salesforce 产品与共同资源

Salesforce FY2026 Note 1 披露一个经营分部，CODM 按合并净利润评估资源和表现，分部资产为合并资产总额. 多数服务共用 Agentforce 360 Platform、部署方式相近，公司据此解释其管理方式. 产品和地理收入提供更细的业务信息，产品利润则未单独披露. [^bf18-crm]

Note 2 p70 披露 Agentforce Sales 的订阅及支持收入为9,028，FY2025为8,322. 与之对应的资源包括共同平台及集团研发；FY2026集团研发费用5,993，已含股权薪酬1,162. 产品收入变化可以与客户使用、续约和共同平台投入结合分析. [^bf18-crm-product][^bf18-crm-fs]

| 具名业务路径 | 直接披露 | 可建立的资源关系 | 仍未披露 |
|---|---|---|---|
| Agentforce Sales | FY2026 subscription and support revenue 9,028；Note 2 p70 | 多数服务共享 Agentforce 360 Platform；集团 R&D 5,993 含 SBC 1,162 | Agentforce Sales 独立营业利润、独立 R&D 分配、独立资产负债表 |

按产品、共同资源与集团结果组织材料：

| 当前分析问题 | 可以使用的材料 | 所建立的关系 | 留在集团层核对的部分 |
|---|---|---|---|
| 客户买哪类服务、何时付费 | 产品收入和合同披露 | 收费／履约到收入 | 同一合同涉及多个产品时的分配 |
| 研发支持什么能力 | 研发费用、员工及分摊成本说明 | 产品与共同平台调用资源 | 未披露的逐产品研发分配 |
| 收购带来什么资源 | Informatica 初步 PPA、无形资产类别 | 买入技术和客户关系 | 商誉、税项及其他取得净资产 |
| 最终怎样评价集团表现 | 合并利润表与 Note 1 Segments | 收入、费用、其他损益到合并净利润 | 不能凭产品名补出的独立利润表 |

若需估计产品利润，应补充产品增量成本、共同资源使用和分摊规则，再将估计数与集团披露核对. 不同分摊目的会改变产品利润，集团费用总额保持同一口径.

### 软件分支练习

<strong>任务.</strong>以 Agentforce Sales 为对象，写一条四步业务链：①原件直接披露的 FY2026 收入及位置；②它与共同平台的关系；③集团层已披露的研发资源；④若要算该产品利润还缺什么.

<strong>解析.</strong> Agentforce Sales FY2026订阅及支持收入9,028，见 Note 2 p70；共同平台关系见 Note 1；集团研发5,993已含股权薪酬1,162. 计算产品利润仍需产品增量成本及共同平台资源分配资料.

</section>

<a id="bf18-experiment"></a>
## 4. 分部合并实验

<div data-experiment-slot="EXP-BF18-SEGMENT-RECONCILIATION"></div>

<a id="bf18-exercise"></a>
## 5. 分析记录

记录所选业务的范围、来源期次、利润定义、合并终点及一项共同资源，并说明资料能支持哪一级利润分析.

[^bf18-cat]: Caterpillar FY2025 Form 10-K，Note 23 A/B/C，pp115–118，业务划分、2025-07-01职责调整及比较期重列、计量政策. [SEC 原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm).
[^bf18-cat-revenue]: 同一原件 Note 23，Sales and Revenues by Geographic Region，p118 含 Financial Products external-column 脚注1；本篇保留外部、内部、总额与抵销列，省略地理细列.
[^bf18-cat-profit]: 同一原件 Note 23，Profit from Reportable Segments，p120 全表及脚注1–3；negative Other segment items 按原表保留.
[^bf18-cat-recon]: 同一原件 Note 23，Reconciliation of Consolidated profit before taxes，p121，全部调整项；经营到税前取 Statement 1 对应层次. 均为 M 美元.
[^bf18-crm]: Salesforce FY2026 10-K，Note 1 Principles of Consolidation／Segments，p63. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 截至2026-01-31的年度.
[^bf18-crm-product]: 同一 Salesforce FY2026 原件，Note 2 `Subscription and Support Revenue by the Company's Service Offerings`，p70：Agentforce Sales FY2026/2025/2024 分别为 9,028/8,322/7,580；表下注明 FY2026 第三季度产品命名变化未改变收入分配. 金额 M 美元.

[^bf18-crm-fs]: 同一 Salesforce 原件，Consolidated Statements of Operations p58 及R&D股权薪酬脚注、MD&A Research and Development.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>
