{
  "title": "盈利质量、调整口径与比较",
  "description": "复算Salesforce的GAAP/non-GAAP调节，核对税额、SBC与股数；改变经营利润调整后比较利润率.",
  "layout": "entry",
  "notebookid": "zh-bf20",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf20"
}

同一公司给出 GAAP 与 non-GAAP 利润时，先比较各口径纳入、排除和调节的项目. Salesforce FY2026 公告可以完整复算经营利润、净利润、每股收益与自由现金流四条桥，再检验撤销一项调整如何改变观察口径.

<a id="bf20-purpose"></a>
## 1. 报告质量、持续性与可比性

<strong>报告质量</strong>涉及计量、披露与呈现是否足以理解经营事实；<strong>盈利持续性</strong>涉及项目今后是否继续发生；<strong>可比性</strong>涉及两期或两家公司是否采用一致口径. 一笔披露清楚的费用可以只发生一次，一笔没有同期现金付款的费用也可以持续发生并改变股东权利.

补充指标从 GAAP 利润加减具名项目得到. 剔除购入无形资产摊销可观察摊销前经营结果；评价支持这些收入的资源，则还需取得成本、使用寿命与未来投入.

SEC对发行人的non-GAAP披露解释要求原值及调节清楚、名称不歪曲计算、跨期处理可解释，税务影响与指标匹配；经常性项目、现金项目或单方面只调坏消息需结合具体事实判断. [^sec]

<a id="bf20-official-oi"></a>
## 2. Salesforce 经营利润调节

采用2026-02-25发布的 FY2026 Q4及全年业绩公告 Exhibit 99.1，摘录年度列. FY2026截至2026-01-31，FY2025截至2025-01-31；单位：USD M. [^release]

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

单位：USD M. 年度期间截至相应年份1月31日，非日历年；利润率是公司展示的取整百分数. SBC脚注(3)：FY26/FY25重组项内的29/2不在本表SBC剔除行，已经纳入重组与收购行.

FY2026原经营利润8,331；加回1,687的购入无形资产摊销、3,480的特定范围股权薪酬，以及658的重组与收购相关成本，得到14,156. 分母仍是同一份GAAP收入41,525. 因此，金额复算的两种利润率约为20.063%和34.09%，对应公告展示的20.1%和34.1%.

FY2025同类调整分别为1,651、3,181和461，补充经营利润12,498. 三类调整连续两年出现，其持续性需结合具体收购、奖励和重组计划判断.

### 摊销、股权薪酬与重组费用

购入无形资产摊销将已取得技术、客户关系等资源的成本分配到使用期间. 这些资源继续支持收入，而收购现金支出发生在取得时. 与内部研发企业比较时，应同时检查对方已费用化的研发或销售投入，避免只剔除其中一方的资源成本. [^release]

股权薪酬对应员工服务，并影响股东权利；经营指标剔除这项费用后，股数与奖励条款仍决定普通股所得. 重组和收购相关成本可包含现金付款、非现金减值及其他成本，具体计划、交易与履行进度决定后续费用.

<a id="bf20-official-ni"></a>
## 3. 税后调整与每股分母

经营利润桥只处理这一层的费用. 走到净利润时，公司还调整所得税，以下保留整条官方桥. [^release]

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP net income</strong> | <strong>GAAP净利润</strong> | <strong>7,457</strong> | <strong>6,197</strong> |
| Amortization of purchased intangibles | 购入无形资产摊销 | 1,687 | 1,651 |
| Stock-based compensation expense | 股权薪酬（同一排除范围） | 3,480 | 3,181 |
| Restructuring and acquisition-related costs | 重组与收购相关成本 | 658 | 461 |
| Income tax effects and adjustments | 所得税影响及调整 | (1,313) | (1,560) |
| <strong>Non-GAAP net income</strong> | <strong>公司non-GAAP净利润</strong> | <strong>11,969</strong> | <strong>9,930</strong> |

单位：USD M. 税务调节对应下列完整调整组合.

FY2026净利润桥为7,457＋1,687＋3,480＋658−1,313＝11,969. 公司 FY2025与 FY2026方法采用22%的长期预计 non-GAAP 税率，FY2027改为20.5%. [^taxmethod]

我们可以用本期税前利润9,520和GAAP税费2,063检查整桥的量级：

```text
调整后税前总额 = 9,520 + 1,687 + 3,480 + 658 = 15,345
按公司FY2026方法的税额 = 15,345 × 22% = 3,375.9
相对GAAP税费增加 = 3,375.9 − 2,063 = 1,312.9 ≈ 1,313
```

若变更经营调整组合，税后口径需重新设定相应税务处理. 例如关闭三个经营调整却保留−1,313，会使净利润成为6,144，无法回到 GAAP 的7,457.

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP diluted net income per share</strong> | <strong>GAAP稀释EPS</strong> | <strong>7.8</strong> | <strong>6.36</strong> |
| Amortization of purchased intangibles | 摊销每股调整 | 1.76 | 1.7 |
| Stock-based compensation expense | 股权薪酬每股调整 | 3.64 | 3.27 |
| Restructuring and acquisition-related costs | 重组/收购每股调整 | 0.69 | 0.47 |
| Income tax effects and adjustments | 所得税每股调整 | (1.37) | (1.6) |
| <strong>Non-GAAP diluted net income per share</strong> | <strong>公司non-GAAP稀释EPS</strong> | <strong>12.52</strong> | <strong>10.2</strong> |
| Shares used in computing basic net income per share | GAAP与non-GAAP基本分母（ M 股） | 950 | 962 |
| Shares used in computing diluted net income per share | GAAP与non-GAAP稀释分母（ M 股） | 956 | 974 |

单位：USD/share；分母单位：M股. 每股调整分别取整；FY2026、FY2025的两种稀释 EPS 分别采用同一956、974 M股分母.

FY2026：7,457÷956≈7.8，11,969÷956≈12.52. 年度基本和稀释加权平均股数分别950、956 M股，期末在外股数929 M股. 前两者按持有期间加权，后者记录期末状态. [^shares]

<a id="bf20-scope"></a>
## 4. 股权薪酬调整范围

FY2026现金流量表股权薪酬加回3,509，公告剔除行3,480. 公告脚注(3)说明另外29已进入重组项，故3,480＋29＝3,509. 若以3,509替换经营利润桥的3,480而保留完整658，会重复加回29. [^release]

| 事项 | 在这份调节中的位置 | 还要回到哪份材料 |
|---|---|---|
| 股权薪酬 | 3,480单列；29在重组项内 | 现金流加回3,509；权益、授予和股数 |
| 购入无形资产摊销 | 本期加回1,687 | 无形资产附注、过去收购及资源替换 |
| 重组与收购成本 | 加回658，含上述29 | 具体计划、交易范围、现金及非现金组成 |
| 税额 | 整套官方净利润调整−1,313 | FY2026的22%方法与GAAP税前/税费 |

现金流还单列股权奖励净额结算相关税款351、回购现金12,596. 这些现金项目与薪酬费用、股份变化采用各自确认时间和范围. [^cfs]

<a id="bf20-fcf"></a>
## 5. 自由现金流口径

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| GAAP net cash provided by operating activities | GAAP经营现金流 | 14,996 | 13,092 |
| Capital expenditures | 资本支出 | (594) | (658) |
| <strong>Free cash flow</strong> | <strong>公司定义FCF</strong> | <strong>14,402</strong> | <strong>12,434</strong> |

单位：USD M.

公司将 FCF 定义为经营现金流减资本支出：14,996−594＝14,402. 企业合并净现金支出9,268及债务、股息等安排位于这一定义之外. 跨公司比较应先按各自定义和调节表统一范围. [^fcf]

净利润与 FCF 的差额还受订阅开票、收款、履约时间和合同取得成本资本化影响；收购资源支出则列入投资活动. 判断现金与盈利的关系，需要分解这些项目的时间及分类.

<a id="bf20-experiment"></a>
## 6. 自选经营利润口径

四条官方桥保持固定；自选组合只重算经营利润和同一收入分母下的利润率. 保留股权薪酬费用时，14,156−3,480＝10,676，利润率约25.71%；不剔除三项时回到8,331和约20.063%.

<div data-experiment-slot="EXP-BF20-REVERSIBLE-ADJUSTMENTS"></div>

例如，为比较保留员工薪酬后的经营结果，可剔除购入无形资产摊销和重组、收购项，得到10,676. 估计未来盈利时，还需判断剔除项目将如何变化.

<a id="bf20-exercise"></a>
## 7. 解释题与跨期迁移

<strong>任务一：</strong>只剔除摊销，保留其他所有费用. 给出FY2026经营利润及利润率，并指出为什么不能直接沿用−1,313税额.

<strong>任务二：</strong>对FY2025也采用“保留股权薪酬、剔除其他两项”的同一口径，计算两期经营利润. 两者比较改善了什么，又还没解决什么？

<strong>任务三：</strong>将现金流的3,509填入 non-GAAP 桥会使结果多29. 根据脚注恢复费用范围.

<details><summary>展开完整解析</summary>

任务一：8,331＋1,687＝10,018；10,018÷41,525≈24.125%. 官方税务调节1,313对应三项调整及整套税率方法，单独剔除摊销需另算相应税务影响.

任务二：FY2025为12,498−3,181＝9,317，FY2026为10,676，增加1,359，约14.587%. 统一剔除范围后，两期仍需比较重组活动及资源取得方式：并购无形资产摊销与内部研发费用对应不同取得路径.

任务三：29已进入658重组、收购项. 按脚注将3,509分成3,480与29，分别放回相应调整行.

</details>

<details data-agent-option="research"><summary>研究选读：披露评价与测量</summary>
<a id="bf20-research"></a>

Dechow、Ge、Loh和McVay（2026）将调节透明度、剔除项目、分母与其他披露渠道结合评价. §8以2024Q2的18家公司试用框架：在 S&P 500、MidCap 400、SmallCap 600 中，分别按三个行业各取两家同行，样本包含 Salesforce 和 Adobe. 部分难编码指标未进入试用计算，因此所得评价覆盖的是实际可测项目. [^research]

</details>

[^sec]: SEC Division of Corporation Finance，[Non-GAAP Financial Measures CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，100.01–100.06、102.05–102.07、102.10(a–c)、102.11；页面Last Update 2022-12-13.
[^release]: [Salesforce FY2026 Q4/FY Results，Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，2026-02-25，GAAP Results Reconciled to Non-GAAP Results的完整年度列、费用明细及脚注(1)–(3).
[^taxmethod]: 同份[Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Non-GAAP Financial Measures—Income Tax Effects and Adjustments；FY2025/FY2026 22%，FY2027 20.5%. 配合[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)利润表及Note 12的9,520/2,063.
[^shares]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share；[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)权益表及Note 13.  M 股与美元/股分开.
[^cfs]: [Salesforce FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows，FY2026列；股权奖励现金税、回购与经营加回分别保留.
[^fcf]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Free Cash Flow及定义；[SEC CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，102.07.
[^research]: Dechow、Ge、Loh、McVay，[Beyond earnings quality: evaluating the quality of corporate disclosure practices](https://link.springer.com/article/10.1007/s11142-026-09971-2)，Review of Accounting Studies 31（2026），1567–1637，§3.2–3.3及§8的2024Q2试用范围；2026-07-24出版.

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>
