{
  "title": "现金流量表：经营、投资与筹资",
  "description": "从完整原表连起期初与期末现金，并用软件、零售和银行区分现金流分类与经营解释.",
  "layout": "entry",
  "notebookid": "zh-bf07",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf07"
}

现金流量表将期初现金与经营、投资、筹资及汇率影响连接到期末现金. 它解释资金实际流入与流出的时间和用途，与利润表中的确认时点和费用分类配合阅读.

软件订阅与会员零售提供两条完整现金流结构，银行作为分类对照. 每条结构都从期初现金连接经营、投资、筹资和汇率影响到期末现金，并把经营现金流尚未回答的投入、义务和股东归属另行标出.

<a id="bf07-cash-bridge"></a>
## 1. 现金集合与三类活动

**现金流量表**解释一个报告期间内，所定义现金集合的变动. 经营、投资和筹资是按现金活动性质组织的类别. 间接法的经营部分从净利润出发，把非现金、时点和分类差异调回来. [^cashbook]

一个简单关系是：`期末现金 = 期初现金 + 经营净现金 + 投资净现金 + 筹资净现金 + 汇率及所列其他影响`. 要使用它，先核对两端现金集合是否一致. 受限现金、存放银行款等是否在这个集合内，要沿各公司表头和政策读，不能自动换成资产负债表上名字最像的一行.

间接法加回折旧，是因为净利润先扣除了本期非现金费用，转向现金时需要消除该影响. 同理，已经通过净利润反映的投资收益可能在经营桥中扣回，再由相应投资现金活动列示. 每个调整项都应对应它所修正的利润—现金差异.

<div data-reading-branch-controls>
<button data-select-reading-branch="software">软件：Salesforce</button>
<button data-select-reading-branch="retail">零售：Costco</button>
<button data-select-reading-branch="all">比较两条路径</button>
</div>

<section data-reading-branch="software">

<a id="bf07-software"></a>
## 2. Salesforce：经营、投资与筹资现金桥

Salesforce FY2026截至2026年1月31日. 下面是完整现金流主板块及现金、已付利息和税款补充；金额为**M 美元**. 每个小计等于其所属明细之和. [^sf]

| 原行名称 | 中文对照 | FY2026 · 2026-01-31 | FY2025 · 2025-01-31 | FY2024 · 2024-01-31 |
| --- | --- | --- | --- | --- |
| **Operating activities** | **经营活动** |  |  |  |
| Net income | 净利润 | 7,457 | 6,197 | 4,136 |
| **Adjustments to reconcile net income to net cash provided by operating activities** | **由净利润调节至经营活动净现金** |  |  |  |
| Depreciation and amortization (1) | 折旧和摊销（1） | 3,631 | 3,477 | 3,959 |
| Amortization of costs capitalized to obtain revenue contracts, net | 取得收入合同资本化成本的摊销净额 | 2,197 | 2,095 | 1,925 |
| Stock-based compensation expense | 股权薪酬费用 | 3,509 | 3,183 | 2,787 |
| (Gains) losses on strategic investments, net | 战略投资收益／损失净额的现金流调整 | (1,017) | 121 | 277 |
| **Changes in assets and liabilities, net of business combinations** | **资产负债变动，扣除企业合并影响** |  |  |  |
| Accounts receivable, net | 应收款净额变动 | (2,160) | (490) | (659) |
| Costs capitalized to obtain revenue contracts, net | 取得收入合同的资本化成本净额变动 | (2,811) | (2,121) | (1,872) |
| Prepaid expenses and other current assets and other assets | 预付及其他资产变动 | 819 | (1,495) | (843) |
| Accounts payable and accrued expenses and other liabilities | 应付、应计费用及其他负债变动 | 1,014 | 1,089 | (478) |
| Operating lease liabilities | 经营租赁负债变动 | (567) | (548) | (621) |
| Unearned revenue | 未赚取收入变动 | 2,924 | 1,584 | 1,623 |
| **Net cash provided by operating activities** | **经营活动产生净现金** | 14,996 | 13,092 | 10,234 |
| **Investing activities** | **投资活动** |  |  |  |
| Business combinations, net of cash acquired | 企业合并，扣取得现金 | (9,268) | (2,734) | (82) |
| Purchases of strategic investments | 购入战略投资 | (1,958) | (539) | (496) |
| Sales of strategic investments | 出售战略投资 | 184 | 126 | 108 |
| Purchases of marketable securities | 购入有价证券 | (3,763) | (6,879) | (3,761) |
| Sales of marketable securities | 出售有价证券 | 4,414 | 4,143 | 1,511 |
| Maturities of marketable securities | 有价证券到期 | 2,395 | 3,378 | 2,129 |
| Capital expenditures | 资本支出 | (594) | (658) | (736) |
| **Net cash used in investing activities** | **投资活动使用净现金** | (8,590) | (3,163) | (1,327) |
| **Financing activities** | **筹资活动** |  |  |  |
| Proceeds from issuance of debt, net of issuance costs | 发行债务所得，扣发行成本 | 6,000 | 0 | 0 |
| Repurchases of common stock | 回购普通股现金 | (12,596) | (7,829) | (7,620) |
| Payments for taxes related to net share settlement of equity awards | 股权奖励净额结算相关税款支付 | (351) | 0 | 0 |
| Proceeds from employee stock plans | 员工股票计划所得 | 1,039 | 1,540 | 1,954 |
| Principal payments on financing obligations | 融资义务本金支付 | (584) | (603) | (629) |
| Repayments of debt | 偿还债务 | 0 | (1,000) | (1,182) |
| Payments of dividends and dividend equivalents | 股息及股息等价支付 | (1,587) | (1,537) | 0 |
| **Net cash used in financing activities** | **筹资活动使用净现金** | (8,079) | (9,429) | (7,477) |
| Effect of exchange rate changes | 汇率变化影响 | 152 | (124) | 26 |
| **Net increase (decrease) in cash and cash equivalents** | **现金及等价物净增／减** | (1,521) | 376 | 1,456 |
| Cash and cash equivalents, beginning of period | 期初现金及等价物 | 8,848 | 8,472 | 7,016 |
| Cash and cash equivalents, end of period | 期末现金及等价物 | 7,327 | 8,848 | 8,472 |
| **Supplemental cash flow disclosure** | **补充现金流披露（不再加入合计）** |  |  |  |
| Cash paid for interest | 已付利息 | 276 | 233 | 254 |
| Cash paid for income taxes, net of tax refunds | 已付所得税，扣退款 | 1,282 | 2,061 | 1,027 |

原表脚注（1）的D&A包含无形资产摊销、固定资产折旧以及使用权资产的摊销或减值，不能整行改称“服务器折旧”. 资产负债变动部分也明确扣除了企业合并影响. 补充的利息、税款已经在相应现金流中体现，不是末尾还要再扣的一次支出. [^sf]

### 现金总桥

`8,848 + 14,996 − 8,590 − 8,079 + 152 = 7,327`.

投资和筹资使用的现金合计16,669，超过经营流入14,996，汇兑增加152，因此现金净减少1,521. 净利润7,457只是经营现金桥的起点，不能替代投资、筹资与汇率对期末现金的共同影响.

投资活动由资本支出594、收购净支出9,268及有价证券买卖到期等不同活动组成，因此投资现金流净额不能直接当作维持经营所需资本支出. 筹资活动同时包含新债所得6,000、回购12,596、员工计划所得1,039、其他偿付和股息；净流出是这些项目的合计结果. [^sf]

### 经营现金桥的十一项调整

本期完整经营桥为：

`7,457 + 3,631 + 2,197 + 3,509 − 1,017 − 2,160 − 2,811 + 819 + 1,014 − 567 + 2,924 = 14,996`.

我们把它分成两段看. 净利润7,457加上D&A、合同成本摊销和股权薪酬，扣回战略投资净收益调整1,017，得到15,777. 这里大部分工作是移除净利润中的非现金或不同类别影响，得到的是转入经营性资产负债调整前的净额.

接着，应收变动占用2,160，取得收入合同的资本化成本占用2,811；预付等资产释放819，应付等负债提供1,014，经营租赁负债减少567，未赚取收入增加提供2,924. 后一组净额是−781，最后得到14,996. 这些项目把真实的开票、获客支出、供应商付款及提前收款的节奏带了回来.

尤其看合同成本：摊销2,197与新增资本化成本现金调整−2,811同时出现. 前者说明已确认费用中有过去形成资源的消耗；后者说明本期为未来收入合同继续投入. 比较经营现金时需要同时计入资源消耗与新增投入. [^sf]

股权薪酬3,509在间接法中加回，只消除该费用对经营现金流的非现金影响；另有351的奖励净额结算税款列在筹资中，权益和股数也会变化. 股东层面的股份交付、回购与稀释在<a class="inline-ref" href="/zh/notebook/equity-shares-and-shareholder-claims/" data-reference="zh-bf08">权益、股数与每股口径<span aria-hidden="true"> ↗</span></a>中另行连接.

### 软件练习

**题**. 只保留净利润、D&A、合同成本摊销、SBC、应收、合同成本增加和未赚取收入七项，会得到多少？为什么不能把这张简图标成完整经营现金桥？

**解析**. 七项合计14,747. 还缺战略投资调整−1,017、预付及其他资产+819、应付等负债+1,014、经营租赁负债−567，四项合计+249. 补全后才是14,996.

**迁移**. 应收账面从11,945增加到14,339，增加2,394，而现金流调整为−2,160，可以直接用−2,394替换吗？

**解析**. 不可以. 原表相关变化扣除了企业合并影响；两端账面还可能受到范围和非现金变化. 我们能辨认两口径不同，但没有完整调节时不把234差额擅自归给某个原因. 经营现金桥沿现金流原行，余额变化另列.

</section>

<section data-reading-branch="retail">

<a id="bf07-retail"></a>
## 3. 零售：货物周转、设施投入和分配

Costco FY2025截至2025年8月31日，共52周. 零售现金流由三组关系连接：库存及供应商结算影响经营现金，门店与设备投入使用投资现金，股东分配及借还款进入筹资现金. [^cost]

| 原行名称 | 中文对照 | FY2025 · 52周 | FY2024 · 52周 | FY2023 · 53周 |
| --- | --- | --- | --- | --- |
| **CASH FLOWS FROM OPERATING ACTIVITIES** | **经营活动现金流** |  |  |  |
| Net income | 净利润 | 8,099 | 7,367 | 6,292 |
| **Adjustments to reconcile net income to net cash provided by operating activities** | **净利润至经营活动净现金的调整** |  |  |  |
| Depreciation and amortization | 折旧及摊销 | 2,426 | 2,237 | 2,077 |
| Non-cash lease expense | 非现金租赁费用 | 303 | 315 | 412 |
| Stock-based compensation | 股权薪酬 | 860 | 818 | 774 |
| Impairment of assets and other non-cash operating activities, net | 资产减值及其他非现金经营活动净额 | (117) | (9) | 495 |
| **Changes in operating assets and liabilities** | **经营资产及负债变动** |  |  |  |
| Merchandise inventories | 商品存货变动 | 559 | (2,068) | 1,228 |
| Accounts payable | 应付账款变动 | 404 | 1,938 | (382) |
| Other operating assets and liabilities, net | 其他经营资产负债净变动 | 801 | 741 | 172 |
| **Net cash provided by operating activities** | **经营活动产生净现金** | 13,335 | 11,339 | 11,068 |
| **CASH FLOWS FROM INVESTING ACTIVITIES** | **投资活动现金流** |  |  |  |
| Additions to property and equipment | 物业及设备增加的现金支出 | (5,498) | (4,710) | (4,323) |
| Purchases of short-term investments | 购买短期投资 | (1,028) | (1,470) | (1,622) |
| Maturities of short-term investments | 短期投资到期 | 1,141 | 1,790 | 937 |
| Other investing activities, net | 其他投资活动净额 | 74 | (19) | 36 |
| **Net cash used in investing activities** | **投资活动使用净现金** | (5,311) | (4,409) | (4,972) |
| **CASH FLOWS FROM FINANCING ACTIVITIES** | **筹资活动现金流** |  |  |  |
| Repayments of short-term borrowings | 偿还短期借款 | (862) | (920) | (935) |
| Proceeds from short-term borrowings | 短期借款所得 | 816 | 928 | 917 |
| Repayments of long-term debt | 偿还长期债务 | (103) | (1,077) | (75) |
| Proceeds from issuance of long-term debt | 长期债务所得 | 0 | 498 | 0 |
| Tax withholdings on stock-based awards | 股票奖励代扣税款 | (393) | (315) | (303) |
| Repurchases of common stock | 回购普通股 | (903) | (700) | (676) |
| Cash dividend payments | 支付股息 | (2,183) | (9,041) | (1,251) |
| Financing lease payments and other financing activities, net | 融资租赁支付及其他筹资净额 | (147) | (137) | (291) |
| **Net cash used in financing activities** | **筹资活动使用净现金** | (3,775) | (10,764) | (2,614) |
| Effect of exchange rate changes on cash and cash equivalents | 汇率变化对现金及等价物影响 | 6 | 40 | 15 |
| **Net change in cash and cash equivalents** | **现金及等价物净变动** | 4,255 | (3,794) | 3,497 |
| Cash and cash equivalents, beginning of year | 期初现金及等价物 | 9,906 | 13,700 | 10,203 |
| Cash and cash equivalents, end of year | 期末现金及等价物 | 14,161 | 9,906 | 13,700 |
| **SUPPLEMENTAL DISCLOSURE OF CASH FLOW INFORMATION** | **补充披露（不重复加总）** |  |  |  |
| Cash paid during the year for interest | 年内已付利息 | 106 | 129 | 125 |
| Income taxes, net | 年内已付所得税净额 | 2,917 | 2,319 | 2,234 |
| **SUPPLEMENTAL DISCLOSURE OF NON-CASH ACTIVITIES** | **非现金活动补充披露** |  |  |  |
| Dividends declared, but not yet paid | 已宣布而未支付股息 | 0 | 0 | 452 |
| Capital expenditures included in liabilities | 列入负债的资本支出 | 193 | 203 | 170 |

FY2025总桥为 `9,906 + 13,335 − 5,311 − 3,775 + 6 = 14,161`，现金增加4,255. 经营桥也可以完整重建：

`8,099 + 2,426 + 303 + 860 − 117 + 559 + 404 + 801 = 13,335`.

注意−117这一行原名包含“资产减值及其他非现金经营活动净额”. 它是混合净额，不是说公司发生了负117的单独减值损失. 类似地，+801也是多个其他经营资产负债变化的净额，不应凭一个正号就断言某项业务付款延后.

### 存货、应付与现金调整

资产负债表里，商品存货从18,647降至18,116，应付从19,421增至19,783. 我们只取这两个余额作一个局部观察：

`库存−应付：−774 → −1,667；变化−893`.

在最简单、没有其他变化的模型中，经营资产减少、经营负债增加通常与资金占用下降对应. 但真实现金流表给的是库存调整+559、应付调整+404，合计+963，不是+893. 两者差70. 进一步分开看：库存两期差的反向数为531，与559差28；应付余额增加362，与404差42.[^cost]

963是本表的期间调整，893是选定两项账面余额的反向变化；70的差额有待完整口径调节. 门店、设备、现金缓冲等资本需求另见全表.

### 分配与资本支出的资金影响

2024年公司经营现金仍为11,339，期末现金却下降3,794. 比较两年现金表，很快能看到2024股息支付9,041，明显高于2025的2,183. 两年的现金变化受到分配支出差异影响. [^cost]

另外，2025物业设备现金增加5,498，而补充披露还有193的资本支出列在负债中. 后者提示取得资源和支付现金的时点不同；它不应该再加到本年现金流净额中. 判断资源形成，要回查资产和付款义务；判断本年用了多少钱，则先维护现金表口径.

### 零售练习

**题**. 用2024列重建期末现金，并分别解释为何不能从“现金下降”推成“经营没赚到现金”，或从“经营现金为正”推成“本年现金必然上升”.

<strong>解析. </strong>`13,700 + 11,339 − 4,409 − 10,764 + 40 = 9,906`. 经营确实提供现金，但投资及筹资使用更多. 后者还含股息、回购、借还款等不同去向. 两种错误都把一类活动的结果直接当成全部资金变化.

**迁移**. 把库存及应付的调整963改成893，桥会怎样？

**解析**. 经营现金会被错减70，期末现金变成14,091，不再等于原表14,161. 对账失败提示不能未经依据替换原行；正确动作是并排保留两种计算，并继续追查差异.

</section>

<a id="bf07-bank-contrast"></a>
<details>
<summary>银行扩展：经营现金流与资金活动</summary>

JPMorgan Chase 2025的经营现金为−147,782. 原表中，交易资产变化为−156,461，借入证券为−66,648；待售贷款发放和购买−260,772，与其出售、证券化及偿还+235,232也在经营部分. 客户存款变化+153,168却列入筹资. 贷款、证券、交易头寸和存款本来就在银行的业务与资金安排中，分类不能照搬零售商品和供应商账期. [^jpm]

该负数表示本表所列经营资产与负债活动合计使用现金；解释其经营含义还需结合资产扩张、资金来源、期限、流动性和风险暴露.

本表的现金集合准确叫 **cash and due from banks and deposits with banks**. 完整总桥是 `469,317 − 147,782 − 265,565 + 269,533 + 17,835 = 343,338`. 资金可用性还取决于资产负债和流动性附注中的具体安排.

</details>

<a id="bf07-experiment"></a>
## 4. 用完整桥检查理解

<div data-experiment-slot="EXP-BF07-CASH-BRIDGE"></div>

<a id="bf07-exercise"></a>
## 5. 经营现金流与股东可分配现金

**解释题**. 经营现金流是否就是普通股股东本年可以全部取走的钱？

**解析**. 经营现金流是当期经营活动分类下的净现金；普通股可分配现金还需接入资本投入、收购、偿债、未来投入、现金缓冲及权益归属. 原表同时列示这些投资与筹资活动，因此经营现金流不能直接等同于股东所得.

[^cashbook]: OpenStax，[§16.1现金流量表目的](https://openstax.org/books/principles-financial-accounting/pages/16-1-explain-the-purpose-of-the-statement-of-cash-flows)、[§16.2活动分类](https://openstax.org/books/principles-financial-accounting/pages/16-2-differentiate-between-operating-investing-and-financing-activities)、[§16.3间接法](https://openstax.org/books/principles-financial-accounting/pages/16-3-prepare-the-statement-of-cash-flows-using-the-indirect-method)（2019）.
[^sf]: Salesforce，[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows及脚注／补充，印刷pp.61–62；应收余额见合并资产负债表，年度截至2026-01-31. 金额 M 美元.
[^cost]: Costco，[FY2025 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，现金流量表及补充p.41、资产负债表p.39；原表三年比较，2023为53周. “库存−应付”余额差仅为本文局部分析口径，不等同于完整营运资本.
[^jpm]: JPMorgan Chase，[2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，现金流量表印刷p.169／PDF物理第201页；MD&A现金流分析p.58. 银行扩展所列各行均保持该表分类与现金集合.
