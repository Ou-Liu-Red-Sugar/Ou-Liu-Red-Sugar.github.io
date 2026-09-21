{
  "title": "财报附注、会计估计与审计信息",
  "description": "沿真实收入事项从主表追到政策、合同证据和审计程序，判断材料支持什么结论.",
  "layout": "entry",
  "notebookid": "zh-bf09",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf09"
}

主表汇总金额，附注展开确认政策、构成和估计依据，审计报告说明总体意见及涉及困难审计判断的事项. 同一收入金额需要沿这些材料追溯到合同承诺、交付时点和价格分配.

<a id="bf09-evidence-layers"></a>
## 1. 主表、附注与审计报告

Salesforce FY2026合并利润表报告收入41,525 M 美元，其中订阅及支持39,388，专业服务及其他2,137. 合同中的履约义务、价格分配和确认时点见以下附注与审计报告. [^sfstatement]

| 材料层 | 本例的具体位置 | 它回答什么 |
| --- | --- | --- |
| 主表 | Consolidated Statements of Operations，p.58 | 41,525属于哪个期间；收入和成本如何汇总 |
| 政策 | Note 1 Revenue Recognition，pp.64–65 | 何时转移控制；履约义务是否可区分；怎样分配价格 |
| 余额与明细 | Note 2 Contract Balances，p.71 | 已确认收入、应收／合同资产和剩余履约之间还有哪些关系 |
| 审计报告 | Revenue Recognition CAM，pp.54–55 | 审计难点在哪；审计师描述了哪些应对程序 |

<a id="bf09-revenue-policy"></a>
## 2. 履约义务与单独售价

Note 1区分不同交付. 云服务通常在服务期间分期确认；可供使用的软件许可可能在控制权转移时确认；支持与专业服务还要按各自履约方式处理. 合同若包含多项承诺，就要判断它们能否分别识别，再按相对单独售价分配交易价格. [^sfpolicy]

客户能否从一项商品或服务本身获益、承诺之间是否高度相互依赖，以及企业是否将多项投入整合为综合交付，会影响可区分履约义务的判断. Salesforce披露了识别履约义务、估计单独售价及分配价格的方法；评价具体估计还需要对应合同和销售证据.

教学设定：合同总价120，包含立即交付的可区分软件使用权和一年的可区分支持服务；无折扣分配例外、可变对价、税或融资成分. 单独售价分别为100和50，按相对售价分配后，许可分到 `120×100/150=80`，支持分到40. 许可满足时点确认条件且已交付，支持均匀履约，第一月累计收入为 `80 + 40/12 ≈ 83.333`.

若有证据支持的单独售价改为80和80，两项各分60，第一月累计收入为 `60 + 60/12 = 65`. 两种分配在服务结束时均累计确认120，差别来自收入进入各期间的节奏.

| 教学假设：单独售价 | 许可分配 | 支持分配 | 第一月累计收入 | 一年最终收入 |
| --- | --- | --- | --- | --- |
| 100与50 | 80 | 40 | 83.33… | 120 |
| 80与80 | 60 | 60 | 65 | 120 |

比较两组估计，需要可比独立销售、合同条款、交付内容和适用政策；算术敏感性只能说明参数如何改变确认节奏.

<a id="bf09-cam"></a>
## 3. CAM的定义与意见边界

PCAOB AS 3101定义的关键审计事项（CAM）须同时满足：来自财务报表审计，已向或按要求应向审计委员会沟通；涉及对报表重大的账户或披露；涉及尤其具有挑战性、主观或复杂的审计师判断. [^cam]

审计师须识别事项、说明认定理由与审计应对，并指向相关账户或披露. CAM属于事项沟通，不对该事项单独发表审计意见，也不替代其他应当出具的审计意见. [^cam]

Salesforce收入确认CAM涉及履约义务识别、价格分配及单独售价估计. 审计应对包括了解和测试相关控制、评价产品与服务的可区分性、抽取合同检查条款、评价单独售价依据及检查计算. [^sfcam]

<a id="bf09-evidence-practice"></a>
## 4. 经营变化与会计估计的归因

收入增速与未赚取收入增速不同，可能同时受期间、范围和确认节奏影响：前者是全年流量，后者是年末余额；Note 2的未赚取收入滚动包含汇兑、合同资产和企业合并；同一合同也可能同时包含时点与期间确认的履约义务. 归因需要把这些变化与新增合同及实际交付分开. [^sfcontract]

寿命或减值估计可沿同样的证据关系追溯：资产余额与费用行定位金额，成本及累计折旧或减值滚动解释变动，寿命、使用方式和估计变更说明计量依据. 审计报告若讨论相关判断，再核其认定理由与程序.

<a id="bf09-experiment"></a>
## 5. 合同分配与CAM实施

<div data-experiment-slot="EXP-BF09-EVIDENCE"></div>

<a id="bf09-research"></a>
<details>
<summary>研究选读：正式标准与实际实施经验</summary>

Griffith、Rousseau与Zehms发表于2026年的研究，通过七家事务所30位资深审计人员的调查和访谈，研究CAM早期实施经验. 作者报告的组织惯例，包括避免与同行显著不同、关注披露数量、尽量避免让客户措手不及等，可能影响最终披露提供多少新增信息. [^research]

这些质性发现来自CAM早期实施环境；外推到其他时期或项目，取决于审计组织惯例和制度环境是否可比.

</details>

<a id="bf09-exercise"></a>
## 6. 证据判断练习

**题一**. 看到Revenue Recognition CAM，以下哪句最接近原件支持的范围？

A．审计师认定该公司收入有重大错报. B．收入事项符合CAM条件，涉及尤其困难、主观或复杂的审计判断，报告解释了相应应对. C．这家公司一定比没有收入CAM的公司风险高.

**解析**. B. A把事项沟通错当成不利或单独审计意见；C把不同项目的披露直接变成跨公司排名. 完整判断还要看总体意见、事项条件和实际程序.

**题二**. 教学合同单独售价从100／50变成80／80时，第一月收入从83.33左右变成65. 能否由此断言修改者操纵了利润？

**解析**. 两组参数只给出了收入确认节奏的敏感性. 判断估计是否合理还需要可比销售、合同和售价依据；判断利润影响还需要相应费用.

**迁移题**. 一项设备净额下降，请给出至少两种需要区分的原因和应查材料.

**解析**. 折旧、处置和减值均可使设备净额下降. 固定资产滚动及费用记录可区分各项贡献，寿命变化还需结合估计变更说明.

[^sfstatement]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Operations，p.58；年度截至2026-01-31，单位 M 美元.
[^sfpolicy]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 Revenue Recognition，pp.64–65；履约义务、时点／期间确认与Standalone Selling Price.
[^sfcontract]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 2 Contract Balances，p.71；未赚取收入滚动及脚注.
[^cam]: PCAOB，[AS 3101](https://pcaobus.org/oversight/standards/auditing-standards/details/AS3101)，.11–.17；CAM定义、判断因素、沟通事项及其不构成单独意见的规定.
[^sfcam]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Report of Independent Registered Public Accounting Firm，Revenue Recognition CAM，pp.54–55.
[^research]: Emily E. Griffith、Linette M. Rousseau、Karla M. Zehms，[Why do critical audit matters lack teeth? Insights from auditors’ implementation experiences](https://link.springer.com/article/10.1007/s11142-026-09938-3)，2026，*Review of Accounting Studies* 31:1481–1520；引言、方法、样本、主要发现与结论.
