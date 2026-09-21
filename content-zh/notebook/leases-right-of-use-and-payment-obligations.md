{
  "title": "租赁、使用权与付款义务",
  "description": "按所选公司恢复使用权、负债、未来付款、费用与特定范围现金；两类租赁完整表和同公司比较期练习.",
  "layout": "entry",
  "notebookid": "zh-bf13",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf13"
}

租赁让企业不必先买下底层资产，也能在约定期间取得使用能力. 与此同时，它约束了未来付款. 因此读租赁附注，我们要把“能使用什么”与“必须付什么”一起看，再分别跟到期间费用、现金和剩余承诺. 本篇的产出是一张五栏阅读地图，而不是把几个名字相似的金额加在一起.

共同部分加所选公司约需 15–20 分钟. 默认读 Costco 的零售设施分支；也可只读 Salesforce 的办公、数据中心与设备分支. 迁移题首先使用所选公司另一期间；跨公司比较放在最后，需要时再展开.

<a id="bf13-lease-structure"></a>
## 1. 五种数字，五个问题

<strong>使用权资产</strong>表示租期内使用底层资产的权利；<strong>租赁负债</strong>表示按规则纳入计量的付款义务. <strong>未来未折付款表</strong>按到期时间展示这些付款；<strong>期间费用</strong>记录本期服务消耗和相关融资成本；<strong>现金表</strong>记录本期实际付出的资金. 前两者是时点存量，后两者是期间量，而未来付款表跨越了多个尚未发生的期间. [^bf13-fasb]

这里还要先确认对象本身是不是租赁. 按 Topic 842 的定义边界，合同要在一段期间内以对价换取对<strong>已识别资产</strong>使用的控制权，才进入下面这组租赁视图；所谓控制，至少要求客户能够取得该资产使用产生的几乎全部经济利益，并有权决定资产如何使用. 普通云服务或外包合同即使按月付款，只要客户并不控制一项已识别资产，就不会因为付款形式相似而自动变成租赁. 这个对象边界决定我们什么时候才应该继续计算使用权资产和租赁负债. [^bf13-fasb]

美国租赁准则将使用权和义务带入资产负债表，同时保留经营租赁与融资租赁的区分. 融资租赁把使用权摊销与利息费用分开，现金偿还本金通常列筹资活动、利息列经营活动；经营租赁则一般按直线方式形成单一租赁费用，相关现金列经营活动. 短期政策选择和某些可变付款影响入表范围，所以“所有租金”并不自动等于“用于计量租赁负债的付款”. [^bf13-fasb]

可以把它记成两个并行过程：使用权随服务消耗、减值等变化；负债随利息计量、付款和合同变化而变化. 在起点，预付租金、初始直接成本及租金优惠等还会调整使用权资产. 这就是为什么后来两侧余额不必相等. 下面不替整组租赁重造一个统一利率，而是利用原附注已给出的付款与负债连接.

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="retail">零售：Costco</button>
<button type="button" data-select-reading-branch="software">软件：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="retail">

<a id="CASE-BFDE-COST-BF13-20260921"></a>
<a id="bf13-costco"></a>
## 2. Costco：先恢复资源和义务，再读承诺的时间形状

Costco FY2025 年末为 2025-08-31. 以下按 Note 5 的资产负债表重排，保留两期与小计，单位为 M 美元. 括号中的编号对应原表列报说明. [^bf13-cost]

| 原行及中文 | 2025 | 2024 |
|---|---:|---:|
| <strong>Assets／资产</strong> | | |
| Operating lease right-of-use assets／经营租赁使用权资产 | 2,725 | 2,617 |
| Finance lease assets (1)／融资租赁资产 | 1,488 | 1,433 |
| Total lease assets／租赁资产合计 | 4,213 | 4,050 |
| <strong>Liabilities—Current／流动负债</strong> | | |
| Operating lease liabilities (2)／经营租赁负债 | 208 | 179 |
| Finance lease liabilities (2)／融资租赁负债 | 78 | 147 |
| <strong>Long-term／长期负债</strong> | | |
| Operating lease liabilities／经营租赁负债 | 2,460 | 2,375 |
| Finance lease liabilities (3)／融资租赁负债 | 1,401 | 1,351 |
| Total lease liabilities／租赁负债合计 | 4,147 | 4,052 |

(1) 融资租赁资产在合并表的 `Other long-term assets`；(2) 两类流动负债在 `Other current liabilities`；(3) 长期融资租赁负债在 `Other long-term liabilities`. 这些都是主表内已有金额的拆分，不是要再加进总资产或总负债的新项目.

现在可以恢复两种租赁义务：经营租赁为 $208+2,460=2,668$，融资租赁为 $78+1,401=1,479$. 把它们放回业务，门店、土地、设施或设备的使用权构成长期经营能力，而流动部分提醒我们下一年度要安排的付款. 期末使用权与负债分别为 4,213、4,147，差 66 本身不是应付给股东的收益.

<a id="bf13-costco-maturity"></a>
### 未来付款表怎样回到负债

下表保留 2025 年末之后五个财年和 thereafter，单位仍为 M 美元. 原表 `Less amount representing interest` 在下面显示为减项，以便复算. [^bf13-cost]

| 未来付款所属财年 | Operating leases／经营租赁 | Finance leases／融资租赁 |
|---|---|---|
| FY2026 | 267 | 133 |
| FY2027 | 250 | 132 |
| FY2028 | 235 | 135 |
| FY2029 | 204 | 122 |
| FY2030 | 184 | 109 |
| Thereafter | 2,451 | 1,780 |
| Total／未折现付款合计 | 3,591 | 2,411 |
| Less amount representing interest／减：利息 | (923) | (932) |
| Present value of lease liabilities／租赁负债 | 2,668 | 1,479 |


经营租赁未来未折付款 3,591，减去所含利息 923，得到负债 2,668；融资租赁则是 $2,411-932=1,479$. 合计未折付款 6,002 跨越多年，不是“明年必须支付的租金”. `Thereafter` 是多年合并桶，不能把它画成第六年一个确定付款日.

原表还保留两个很重要的范围说明：经营租赁付款没有扣预期未来转租收入 92；已签署但尚未开始的租赁付款 1,094 没有纳入这张到期表. 前者是另一条预计收款关系，后者是尚未进入这一已开始租赁计量范围的承诺. 读者可以先把这两条标在图外，不要擅自从负债减掉 92、再给负债加上 1,094.

### 费用与现金：先看原行，再看交集

| 费用原行 | FY2025 | FY2024 |
|---|---:|---:|
| Operating lease costs／经营租赁费用 | 271 | 284 |
| Amortization of lease assets／融资租赁资产摊销 | 102 | 97 |
| Interest on lease liabilities／融资租赁利息 | 63 | 58 |
| Variable lease costs／可变租赁费用 | 182 | 163 |
| Total lease costs／列示租赁费用合计 | 618 | 602 |

费用表不含金额不重大的短期租赁费用及转租收入. 经营租赁费用、资产摊销和可变费用进入 SG&A 与 merchandise costs；利息进入 interest expense 与 merchandise costs，具体经营用途影响费用位置. [^bf13-cost]

| Cash paid for amounts included in the measurement of lease liabilities／纳入负债计量金额的现金 | FY2025 | FY2024 |
|---|---:|---:|
| Operating cash flows—operating leases | 255 | 274 |
| Operating cash flows—finance leases | 58 | 58 |
| Financing cash flows—finance leases | 147 | 136 |
| 三行合计（计算） | 460 | 468 |

现在我们能明确安排本例的现金阅读：255 是经营租赁对应的经营现金；融资租赁的 58 与 147 分别显示经营和筹资现金. 费用为 618，特定范围现金为 460，但二者范围不同——费用中有可变部分，而这张现金表只覆盖纳入负债计量的付款. 它们之间的 158 不能直接命名成“应计增加”.

非现金取得也要单看：本年以新租赁或修改租赁换得的经营、融资租赁资产分别为 294、131. 取得使用权可以不在当时支付等额现金；这与买入设备时的“取得日和付款日”是相通的关系.

### 零售分支练习

<strong>任务. </strong>恢复 2024 年的经营与融资租赁负债，并核对负债总额；再说明 2025 年付款到期表的哪个量可以直接和 2025 年负债对接.

<strong>解析. </strong>2024 经营负债 $179+2,375=2,554$；融资负债 $147+1,351=1,498$；合计 4,052. 2025 的未折现付款减去表列利息后为 2,668 和 1,479，分别对接该年的两类负债. 跨年度的未折付款合计不能直接当期末资产，更不能当本年费用.

</section>

<section data-reading-branch="software">

<a id="CASE-BFDE-CRM-BF13-20260921"></a>
<a id="bf13-salesforce"></a>
## 3. Salesforce：同样的使用安排，列报位置与期限不同

Salesforce FY2026 截至 2026-01-31，比较日为 2025-01-31. 公司披露租赁涉及办公室、数据中心和设备. Note 1 说明融资租赁资产列入 PP&E，而不是另设同名主表行；流动及非流动融资负债则进入相应其他负债. 先把附注恢复出来，才看得到完整使用能力. [^bf13-crm]

| 原行及中文 | 2026-01-31 | 2025-01-31 |
|---|---:|---:|
| <strong>Operating leases／经营租赁</strong> | | |
| Operating lease right-of-use assets／使用权资产 | 2,003 | 2,157 |
| Operating lease liabilities, current／流动负债 | 548 | 579 |
| Noncurrent operating lease liabilities／非流动负债 | 2,189 | 2,380 |
| Total operating lease liabilities／负债合计 | 2,737 | 2,959 |
| <strong>Finance leases／融资租赁</strong> | | |
| Computers, equipment and software／资产原值 | 1,427 | 1,520 |
| Accumulated depreciation／累计折旧 | (813) | (708) |
| Property and equipment, net／净额 | 614 | 812 |
| Accrued expenses and other liabilities／流动负债 | 275 | 337 |
| Other noncurrent liabilities／非流动负债 | 260 | 341 |
| Total finance lease liabilities／负债合计 | 535 | 678 |

这些金额是 M 美元. 融资租赁资源的 $1,427-813=614$ 和义务的 $275+260=535$ 各有自己的余额路径；它们不因为服务同一组租赁就必须相等.

未来到期付款为：

| 未来付款所属财年 | Operating leases／经营租赁 | Finance leases／融资租赁 |
|---|---|---|
| FY2027 | 615 | 289 |
| FY2028 | 571 | 120 |
| FY2029 | 493 | 76 |
| FY2030 | 338 | 58 |
| FY2031 | 268 | 26 |
| Thereafter | 790 | 0 |
| Total minimum lease payments／未折现付款合计 | 3,075 | 569 |
| Less: Imputed interest／减：利息 | (338) | (34) |
| Total／租赁负债 | 2,737 | 535 |


经营租赁 $3,075-338=2,737$，融资租赁 $569-34=535$，回到原表负债. 这给出一条可复核的义务关系，不要求拿加权平均利率去重新折现一个包含许多合同的池子.

Note 6 还给了这张到期表的范围说明：经营租赁付款没有扣掉预计转租收入——未来五年约 258、之后约 35；另外，公司披露包括尚未开始租赁在内的租赁承诺总额约 4.4 billion，其中约 3.8 billion 与办公室和数据中心设施有关. 4.4 billion 是一个更广、且以 B 美元四舍五入列示的承诺口径，不能拿它减去表中 3,075 就反推出一个精确的“未开始租赁金额”；预计转租收入也不能直接从 2,737 的租赁负债中扣掉. [^bf13-crm]

FY2026 经营租赁费用 614，融资使用权摊销 375、利息 25；对应纳入租赁负债计量的现金为经营租赁 695、融资租赁利息 25、本金 367，合计 1,087. 第一组是费用组成，第二组是特定范围付现. 融资租赁的本金付款减少义务，而使用权摊销分配服务成本，这正是现金与利润表不能只按“租赁”二字合并的原因. [^bf13-crm]

### 软件分支练习

<strong>任务. </strong>用 2025-01-31 比较列恢复融资租赁资产净额和负债，写出它们在合并表中的位置；再用 2026 到期表核回融资租赁负债.

<strong>解析. </strong>资产为 $1,520-708=812$，在 PP&E 内；负债为 $337+341=678$，分别在应计及其他流动负债、其他非流动负债内. 2026 的 $569-34=535$ 与 $275+260=535$ 相等. 没有独立主表行，不代表没有资源或义务.

</section>

<a id="bf13-experiment"></a>
## 4. 在五个视图之间切换

<div data-experiment-slot="EXP-BF13-LEASE-VIEWS"></div>

选择你正在读的公司，依次查看资产／负债、付款到期、费用、特定范围现金. 到期图把付款按原表桶排列；旁边始终保留减利息后回到负债的算式. 它不是现金预测器，也不改变公司的历史金额. 静态阅读时，上面的表已经给出全部默认结果.

<details data-agent-option="cross">
<summary>跨公司迁移：比较资金承诺的形状，而不是比较谁“租得更好”</summary>

Costco 的加权剩余租期，经营／融资分别为 20／25 年；Salesforce 为 7／3 年. 它们记录不同报告日、不同合同组合. 这个差异值得带回业务去问：资源用途是什么、续约与替换怎样安排、较远的付款集中在哪个桶？只凭较短年限不能判定融资更优. 比较前分别读取两家公司租赁政策和完整 Note 5／Note 6，使用权位置与费用现金范围也要一起带过来. [^bf13-cost][^bf13-crm]

</details>

<a id="bf13-exercise"></a>
## 5. 最后把五栏重新连起来

<strong>综合任务. </strong>用所选公司的数字写一段四句分析：先给两类负债及其到期表连接，再说明使用权列报位置，再区分费用与现金，最后指出一项仍需原合同或额外明细才能判断的事项.

<strong>参考解析. </strong>以 Costco 为例：经营与融资负债为 2,668、1,479，分别由 3,591、2,411 未折付款减表列利息得到. 融资资产 1,488 在其他长期资产内. 费用 618 与特定范围现金 460 不属于同一个完整调整桥. 要判断某个设施退出后的剩余义务、转租回收和减值，需要该合同及对应资产组信息，而不是只看整个租赁池的加权租期. 软件分支可写：经营与融资负债为 2,737、535，分别与 3,075−338、569−34 对接；融资使用权净额 614 在 PP&E 内；列示费用 614+375+25=1,014 与特定范围现金 1,087 分开；特定数据中心提前退出的现金与减值影响，仍需相应合同和资产组资料. 完成所选一段，你就把资源、承诺、使用成本与资金安排放回了同一项经营活动.

[^bf13-fasb]: FASB ASU 2016-02, Section A，Summary 印刷 pp1–5／PDF pp7–11：承租人确认、两类租赁、可选期间、短期与可变付款及定义. [官方原件](https://storage.fasb.org/ASU%202016-02_Section%20A.pdf#page=7). 该修订说明用于理解制度及案例，不替代全部现行 Codification.
[^bf13-cost]: Costco FY2025 Annual Report，租赁政策印刷 p43／PDF p49；Note 5 印刷 pp50–51／PDF pp56–57，含两期表和全部采用脚注. [公司 PDF](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf#page=56). 同年度 [SEC 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm) 对应政策 p45、Note 5 pp52–53. 取得日 2026-09-21.
[^bf13-crm]: Salesforce FY2026 Form 10-K，Note 1 Leases pp67–68、Note 6 pp75–77，完整费用、现金、资产负债与到期表. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日 2026-09-21；金额 M 美元.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>

