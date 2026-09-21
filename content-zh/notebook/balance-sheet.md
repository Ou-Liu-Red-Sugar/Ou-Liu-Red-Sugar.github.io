{
  "title": "资产负债表：全表结构与行业带读",
  "description": "在完整资产负债表中定位资源、义务与权益，沿所选行业查附注并解释余额变化。",
  "layout": "entry",
  "notebookid": "zh-balance-sheet",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-balance-sheet"
}

一家企业已经开展了许多交易，有些结束了，有些仍留下商品、收款权或付款义务。资产负债表把某个时点尚留在账上的这些关系放在一起。因此，我们读的不是“这一年总共赚了多少”，也不是“把公司卖掉能拿多少钱”，而是**在指定日期、指定合并范围和计量规则下，企业确认了哪些资产、负债和权益**。[FASB]、[OPENSTAX-22]

这一篇可以选路阅读。零售分支从商品、供应商结算和门店资源进入；银行分支从资金来源、贷款计量和普通股归属进入。两条路都先给出完整原表，然后围绕几项真正连在一起的关系展开。选一条读完、做完练习，就完成本次学习；另一条可以用来检验哪些方法能够迁移。

<span id="bf05-common-structure"></span>

## 1　共同结构：同一张表的两面

**在本篇采用的 FASB 概念框架中，资产是企业取得经济利益的现时权利；负债是企业转移经济利益的现时义务；权益是在资产扣除负债后的剩余利益。** 这三个定义指向权利与义务，不限于看得见的物品或已经收到的借款。[FASB]（E16、E37、E61–E66）

令某日的已确认资产、负债和权益分别为 $A,L,E$，则账面关系为 $A=L+E$。赊购货物可以使资产和负债同时增加；收回应收款可以只改变资产的构成；交付商品并确认净收益，则可能增加权益。等式要求各项相互衔接，但不会自动告诉我们交易的经济好坏。

| 共同板块 | 通常要区分什么 | 阅读时要补的条件 |
|---|---|---|
| 资产 | 现金和收款权、待销售资源、长期使用资源及其他资产 | 归属谁、怎样计量、能否变现或用于履约 |
| 负债 | 供应商及员工应付、客户相关义务、借款、租赁等 | 欠谁、何时履行、用现金还是商品或服务履行 |
| 权益 | 股本、其他投入、留存收益、其他综合收益累计额、库存股等 | 总权益中有哪些不同权利；是否还需区分普通股、优先股和其他归属 |

常见的非金融企业列报会再区分流动与非流动，考虑一年或正常经营周期等条件；它不是简单的“短期安全、长期危险”分组。银行可以采用不同列报。下面 JPMorgan 的原表就没有硬分出一组流动资产和流动负债，我们也不替它造一组。[OPENSTAX-22]、[JPM-BS]

还要留下一条界线：定义某种权利是什么、是否在报表确认、按多少金额计量，不是同一个问题。表内的设备净额、贷款净额和证券公允价值，不能因为都以美元表示，就当成按同一种方法测出的市场价值；账面未单列的经营能力，也不能随意估一个金额补进总资产。[FASB]、[JPM-SEC]、[JPM-LOAN]

<nav data-reading-branch-controls aria-label="选择资产负债表行业分支">
<button type="button" data-select-reading-branch="retail" aria-pressed="true">零售 · Costco</button>
<button type="button" data-select-reading-branch="bank" aria-pressed="false">银行 · JPMorgan</button>
<button type="button" data-select-reading-branch="all" aria-pressed="false">全部展开</button>
</nav>

<section data-reading-branch="retail">

## 2　零售分支：Costco

<a id="BS-RETAIL"></a>

<span id="bf05-retail-full-table"></span>

### 2.1　先看到整张表

**Costco Wholesale Corporation — CONSOLIDATED BALANCE SHEETS。** 合并范围为公司及其全资子公司，重大内部交易抵销。金额为**百万美元**；面值为美元／股，股数为股，不随金额单位缩放。2025与2024比较列均取自2025年报，保留该报的比较期列报。[COST-BS]、[COST-POLICY]

原件定位：**SEC 10-K 印刷p.39**；另一版股东年报PDF为**印刷p.37／物理p.43**，不能混用页码。以下按原序重排为中英对照，保留全部35行、板块和合计。空白表示该行没有金额，不表示零；优先股原表的破折号另由“无已发行及流通股”说明支持。[COST-BS]、[COST-PDF]

| 英文原行 | 中文名称 | 2025-08-31 | 2024-09-01 |
|---|---|---:|---:|
| <a id="cost-assets"></a>**ASSETS** | **资产** |  |  |
| <a id="cost-current_assets"></a>　**CURRENT ASSETS** | **流动资产** |  |  |
| <a id="cost-cash"></a>　　Cash and cash equivalents | 现金及现金等价物 | 14,161 | 9,906 |
| <a id="cost-short_term_investments"></a>　　Short-term investments | 短期投资 | 1,123 | 1,238 |
| <a id="cost-receivables_net"></a>　　Receivables, net | 应收款净额 | 3,203 | 2,721 |
| <a id="cost-inventory"></a>　　Merchandise inventories | 商品存货 | 18,116 | 18,647 |
| <a id="cost-other_current_assets"></a>　　Other current assets | 其他流动资产 | 1,777 | 1,734 |
| <a id="cost-total_current_assets"></a>　**Total current assets** | **流动资产合计** | **38,380** | **34,246** |
| <a id="cost-other_assets"></a>　**OTHER ASSETS** | **其他资产** |  |  |
| <a id="cost-ppe_net"></a>　　Property and equipment, net | 物业及设备净额 | 31,909 | 29,032 |
| <a id="cost-operating_lease_rou"></a>　　Operating lease right-of-use assets | 经营租赁使用权资产 | 2,725 | 2,617 |
| <a id="cost-other_long_term_assets"></a>　　Other long-term assets | 其他长期资产 | 4,085 | 3,936 |
| <a id="cost-total_assets"></a>**TOTAL ASSETS** | **总资产** | **77,099** | **69,831** |
| <a id="cost-liabilities_and_equity"></a>**LIABILITIES AND EQUITY** | **负债与权益** |  |  |
| <a id="cost-current_liabilities"></a>　**CURRENT LIABILITIES** | **流动负债** |  |  |
| <a id="cost-accounts_payable"></a>　　Accounts payable | 应付账款 | 19,783 | 19,421 |
| <a id="cost-accrued_salaries_benefits"></a>　　Accrued salaries and benefits | 应计工资及福利 | 5,205 | 4,794 |
| <a id="cost-accrued_member_rewards"></a>　　Accrued member rewards | 应计会员奖励 | 2,677 | 2,435 |
| <a id="cost-deferred_membership_fees"></a>　　Deferred membership fees | 递延会员费 | 2,854 | 2,501 |
| <a id="cost-other_current_liabilities"></a>　　Other current liabilities | 其他流动负债 | 6,589 | 6,313 |
| <a id="cost-total_current_liabilities"></a>　**Total current liabilities** | **流动负债合计** | **37,108** | **35,464** |
| <a id="cost-other_liabilities"></a>　**OTHER LIABILITIES** | **其他负债** |  |  |
| <a id="cost-long_term_debt"></a>　　Long-term debt, excluding current portion | 长期债务，不含流动部分 | 5,713 | 5,794 |
| <a id="cost-long_term_operating_lease_liabilities"></a>　　Long-term operating lease liabilities | 长期经营租赁负债 | 2,460 | 2,375 |
| <a id="cost-other_long_term_liabilities"></a>　　Other long-term liabilities | 其他长期负债 | 2,654 | 2,576 |
| <a id="cost-total_liabilities"></a>**TOTAL LIABILITIES** | **负债合计** | **47,935** | **46,209** |
| <a id="cost-commitments_contingencies"></a>COMMITMENTS AND CONTINGENCIES | 承诺及或有事项〔原表无金额〕 |  |  |
| <a id="cost-equity"></a>**EQUITY** | **权益** |  |  |
| <a id="cost-preferred_stock"></a>　Preferred stock \$0.005 par value; 100,000,000 shares authorized; no shares issued and outstanding | 优先股：每股面值0.005美元；授权100,000,000股；无已发行及流通股 | — | — |
| <a id="cost-common_stock"></a>　Common stock \$0.005 par value; 900,000,000 shares authorized; 443,237,000 and 443,126,000 shares issued and outstanding | 普通股：每股面值0.005美元；授权900,000,000股；两期已发行及流通443,237,000及443,126,000股 | 2 | 2 |
| <a id="cost-additional_paid_in_capital"></a>　Additional paid-in capital | 额外实缴资本 | 8,282 | 7,829 |
| <a id="cost-aocl"></a>　Accumulated other comprehensive loss | 累计其他综合损失 | (1,770) | (1,828) |
| <a id="cost-retained_earnings"></a>　Retained earnings | 留存收益 | 22,650 | 17,619 |
| <a id="cost-total_equity"></a>**TOTAL EQUITY** | **权益合计** | **29,164** | **23,622** |
| <a id="cost-total_liabilities_equity"></a>**TOTAL LIABILITIES AND EQUITY** | **负债及权益合计** | **77,099** | **69,831** |

附注构成合并财务报表的一部分。普通股行中的2是按百万美元列示的股本金额，不是2百万股；“承诺及或有事项”没有主表金额，也不等于不存在相关承诺。[COST-BS]

先核全貌：2025年 `77,099 = 47,935 + 29,164`；2024年 `69,831 = 46,209 + 23,622`。汇总时用流动资产小计加其余资产，不能再把现金、存货等流动资产明细重复加一遍。

<span id="bf05-retail-inventory-payables"></span>

### 2.2　商品已经进来，钱什么时候出去？

我们沿实际经营过程读，而不是按表格顺序逐格念。Costco 的业务说明把快速周转和供应商结算联系起来，并说明其经常能在付款到期前售出商品。这为存货和应付提供了一个阅读方向，但是否在某个时点表现出来，仍要看数。[COST-BUS]

2024年末商品存货18,647，应付账款19,421；2025年末分别为18,116和19,783。只取这两项，定义一个本次分析使用的选定余额 $N=\text{商品存货}-\text{应付账款}$。它不是完整营运资本，也不表示两行中的每一笔合同都一一匹配。

$$
N_{2024}=18,647-19,421=-774,\qquad
N_{2025}=18,116-19,783=-1,667.
$$

所以 $\Delta N=-893$。这个计算告诉我们：**相对于所列应付，账上的商品存货净占用进一步降低了893。** 它与供应商结算支持商品周转的业务关系相容，却还不能直接改名为“今年释放现金893”。[COST-BS]（本文计算）

现在翻到现金流量表。2025年的存货变动调整是正559，应付账款变动调整是正404，合计963。若只用余额变化取反，会得到893，两者还差70。[COST-CF]

| 对照步骤 | 计算，百万美元 | 本步骤的身份 |
|---|---:|---|
| 存货余额减少 | `18,647−18,116=531` | 两期余额差 |
| 应付余额增加 | `19,783−19,421=362` | 两期余额差 |
| 选定余额变化取反 | `531+362=893` | 供对照的派生数 |
| 现金流量表相应调整 | `559+404=963` | 原表期间调整合计 |
| 尚待归因差额 | `963−893=70` | 不能凭空填成汇率或非现金项目 |

遇到差额，下一步是检查合并范围、重分类、汇兑及非现金变动等口径，而不是让计算“看起来闭合”。这些是待查的可能通道，不是已经证实的70的组成。本次保留差额，仍然已经得到一个重要结果：**相近的报表名称，并不保证余额差就是现金流量表的相应行。**

再看应收净额3,203，也不要自动补上一句“顾客赊账增加”。Note 1 的应收小节列出供应商款项、联名卡激励、再保险、第三方药房等来源；其中供应商应收包括折扣、销量返利等安排，通常与应付款分开列示，部分情形再按协议净额结算。企业是零售商，不代表每一项应收都来自零售顾客。[COST-RECEIVABLES]

<span id="bf05-retail-membership-leases"></span>

### 2.3　会员义务与门店资源，也在这张表里

在商品和应付之外，表里还有递延会员费2,854、应计会员奖励2,677。前者连接尚待确认的会员服务收入；后者连接奖励安排，两者不是同一个“预收款”名称的不同写法。会员费收入按会员期间确认，奖励则按披露政策影响销售额并形成相应义务。[COST-REV]

门店与设施也不能从商品周转图里消失。2025年的物业设备净额31,909，加经营租赁使用权资产2,725，为34,634，占总资产约44.92%。这个比例只描述两个已确认账面项目的分量，既不是全部经营资源，也不是其市场价值。[COST-BS]（本文计算）

**使用权资产**在这里表示合同取得的使用能力；**租赁负债**表示相应付款义务。两者不必在后续每个时点都相等，读表时应分别追到各自的附注。Costco Note 5还告诉我们，融资租赁资产1,488列在**其他长期资产**，不是物业设备净额；因此不能按别家公司的常见位置替它归类。[COST-LEASE]

下面把同一附注的2025年租赁负债展开。它是对主表已有金额的分类说明，**不是额外再添4,147的负债**。

| 租赁义务，百万美元 | 2025金额 | 已包含在主表的什么位置 |
|---|---:|---|
| 流动经营租赁负债 | 208 | 其他流动负债 |
| 流动融资租赁负债 | 78 | 其他流动负债 |
| 长期经营租赁负债 | 2,460 | 主表单列的长期经营租赁负债 |
| 长期融资租赁负债 | 1,401 | 其他长期负债 |
| **租赁负债合计** | **4,147** | `208+78+2,460+1,401` |

来源：[COST-LEASE]，SEC印刷p.53，表下注释(1)–(3)。它让我们得到的不只是一个总数，还得到一张“附注明细已经装在哪个主表项目中”的地图。

<span id="bf05-retail-whole-statement"></span>

### 2.4　回到全表，而不是停在几项比率

现在可以把零售分支合回去：商品和应付解释一部分经营占用，会员余额解释不同性质的客户义务，物业设备和租赁解释长期使用能力。现金、短期投资、其他资产、工资福利应付、债务及权益仍留在全表里，没有因为这次不深入分析就消失。

两期总资产增加7,268，对应负债增加1,726、权益增加5,542。这里回答的是账面规模怎样变动；5,542不能直接叫“本年利润”，因为盈利、分配和其他权益变化还需要回到权益表核对。[COST-BS]

最后检查现金的完整起讫。2025年现金流量表给出：

`9,906 + 13,335 − 5,311 − 3,775 + 6 = 14,161`。

依次是期初现金、经营、投资、筹资和汇率影响，终点接回资产负债表。现金增加4,255，并不是存货与应付调整963，也不是权益增加5,542。这几项本来就在描述不同关系。[COST-CF]

<span id="bf05-retail-exercise"></span>

### 2.5　零售迁移练习

**题目。** 一位读者说：“Costco 2024年流动资产34,246小于流动负债35,464，所以当时无法经营；2025年流动比率超过1，问题就解决了。”请计算两个比率，再用本分支资料说明应怎样改写结论。随后解释为什么不能把4,147租赁负债加到47,935上。

**解析。** 两期流动比率分别为 `34246/35464≈0.9657` 和 `38380/37108≈1.0343`。这只是各时点已列流动项目的比值，不能代替到期时间、销售回款、供应商账期、可用资金和履约方式。会员义务与债务到期付款也不是同一种需求。因此可以说“比值由约0.966升至1.034”，但不能仅据此给出经营能否持续的判断。需要把存货周转、结算和现金流继续连起来。[COST-BS]、[COST-BUS]、[COST-CF]

4,147已分别包含在其他流动负债、长期经营租赁负债和其他长期负债中，再加一次会重复计入。正确动作是按附注重新分类展示，不改变原总负债。这也正是为什么我们要保留完整原表，而不是只摘几个看起来重要的数。[COST-LEASE]

<div data-experiment-slot="lab-bf05-retail"></div>

</section>

<section data-reading-branch="bank">

## 3　银行分支：JPMorgan Chase & Co.

<a id="BS-BANKING"></a>

<span id="bf05-bank-full-table"></span>

### 3.1　先保留银行自己的全表结构

**JPMorgan Chase & Co. — Consolidated balance sheets。** 这是集团合并表，不是 JPMorgan Chase Bank, N.A. 单体表。时点为2025-12-31和2024-12-31；金额为**百万美元**，面值和股数另列。原件为2025 Annual Report，**印刷p.167／物理p.199**。以下保留36行以及全部括注；原表没有流动／非流动小计。[JPM-BS]

| 英文原行 | 中文名称 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| <a id="jpm-assets"></a>**Assets** | **资产** |  |  |
| <a id="jpm-cash_due_from_banks"></a>　Cash and due from banks | 现金及应收银行款 | 21,742 | 23,372 |
| <a id="jpm-deposits_with_banks"></a>　Deposits with banks | 存放银行款项 | 321,596 | 445,945 |
| <a id="jpm-fed_funds_sold_resale"></a>　Federal funds sold and securities purchased under resale agreements (included \$327,018 and \$286,771 at fair value) | 拆出联邦基金及买入返售证券〔其中按公允价值计量327,018／286,771〕 | 336,426 | 295,001 |
| <a id="jpm-securities_borrowed"></a>　Securities borrowed (included \$98,111 and \$83,962 at fair value) | 借入证券〔其中按公允价值计量98,111／83,962〕 | 286,191 | 219,546 |
| <a id="jpm-trading_assets"></a>　Trading assets (included assets pledged of \$165,927 and \$136,070) | 交易资产〔其中已质押资产165,927／136,070〕 | 802,873 | 637,784 |
| <a id="jpm-afs_securities"></a>　　Available-for-sale securities (amortized cost of \$507,226 and \$411,045; included assets pledged of \$7,735 and \$10,162) | 可供出售证券〔摊余成本507,226／411,045；其中已质押7,735／10,162〕 | 507,198 | 406,852 |
| <a id="jpm-htm_securities"></a>　　Held-to-maturity securities | 持有至到期证券 | 270,134 | 274,468 |
| <a id="jpm-investment_securities_net"></a>　**Investment securities, net of allowance for credit losses** | **投资证券，扣除信用损失准备后** | **777,332** | **681,320** |
| <a id="jpm-loans_gross"></a>　　Loans (included \$70,684 and \$41,350 at fair value) | 贷款，未扣贷款损失准备〔其中按公允价值计量70,684／41,350〕 | 1,493,429 | 1,347,988 |
| <a id="jpm-allowance_loan_losses"></a>　　Allowance for loan losses | 贷款损失准备〔资产减项〕 | (25,765) | (24,345) |
| <a id="jpm-loans_net"></a>　**Loans, net of allowance for loan losses** | **贷款净额** | **1,467,664** | **1,323,643** |
| <a id="jpm-accrued_interest_receivables"></a>　Accrued interest and accounts receivable | 应计利息及应收账款 | 111,599 | 101,223 |
| <a id="jpm-premises_equipment"></a>　Premises and equipment | 房屋及设备 | 36,244 | 32,223 |
| <a id="jpm-goodwill_msrs_other_intangibles"></a>　Goodwill, MSRs and other intangible assets | 商誉、按揭服务权及其他无形资产 | 64,458 | 64,560 |
| <a id="jpm-other_assets"></a>　Other assets (included \$15,849 and \$15,122 at fair value and assets pledged of \$11,984 and \$6,288) | 其他资产〔其中按公允价值计量15,849／15,122；已质押11,984／6,288〕 | 198,775 | 178,197 |
| <a id="jpm-total_assets"></a>**Total assets(a)** | **总资产〔附注(a)〕** | **4,424,900** | **4,002,814** |
| <a id="jpm-liabilities"></a>**Liabilities** | **负债** |  |  |
| <a id="jpm-customer_deposits"></a>　Deposits (included \$20,930 and \$33,768 at fair value) | 客户存款〔其中按公允价值计量20,930／33,768〕 | 2,559,320 | 2,406,032 |
| <a id="jpm-fed_funds_purchased_repo"></a>　Federal funds purchased and securities loaned or sold under repurchase agreements (included \$360,194 and \$226,329 at fair value) | 拆入联邦基金及证券借出或回购融资〔其中按公允价值计量360,194／226,329〕 | 442,396 | 296,835 |
| <a id="jpm-short_term_borrowings"></a>　Short-term borrowings (included \$32,460 and \$26,521 at fair value) | 短期借款〔其中按公允价值计量32,460／26,521〕 | 64,776 | 52,893 |
| <a id="jpm-trading_liabilities"></a>　Trading liabilities | 交易负债 | 216,019 | 192,883 |
| <a id="jpm-accounts_payable_other_liabilities"></a>　Accounts payable and other liabilities (included \$6,660 and \$5,893 at fair value) | 应付账款及其他负债〔其中按公允价值计量6,660／5,893〕 | 316,794 | 280,672 |
| <a id="jpm-vie_beneficial_interests"></a>　Beneficial interests issued by consolidated VIEs (included \$5 and \$1 at fair value) | 合并VIE发行的受益权益〔其中按公允价值计量5／1〕 | 27,951 | 27,323 |
| <a id="jpm-long_term_debt"></a>　Long-term debt (included \$134,559 and \$100,780 at fair value) | 长期债务〔其中按公允价值计量134,559／100,780〕 | 435,206 | 401,418 |
| <a id="jpm-total_liabilities"></a>**Total liabilities(a)** | **负债合计〔附注(a)〕** | **4,062,462** | **3,658,056** |
| <a id="jpm-commitments_contingencies"></a>Commitments and contingencies (refer to Notes 28, 29 and 30) | 承诺及或有事项〔参见Notes 28、29、30；原表无金额〕 |  |  |
| <a id="jpm-equity"></a>**Stockholders’ equity** | **股东权益** |  |  |
| <a id="jpm-preferred_stock"></a>　Preferred stock (\$1 par value; authorized 200,000,000 shares: issued 2,005,375 and 2,005,375 shares) | 优先股：面值每股1美元；授权200,000,000股；两期已发行均为2,005,375股 | 20,045 | 20,050 |
| <a id="jpm-common_stock"></a>　Common stock (\$1 par value; authorized 9,000,000,000 shares; issued 4,104,933,895 shares) | 普通股：面值每股1美元；授权9,000,000,000股；已发行4,104,933,895股 | 4,105 | 4,105 |
| <a id="jpm-additional_paid_in_capital"></a>　Additional paid-in capital | 额外实缴资本 | 91,114 | 90,911 |
| <a id="jpm-retained_earnings"></a>　Retained earnings | 留存收益 | 416,055 | 376,166 |
| <a id="jpm-aocl"></a>　Accumulated other comprehensive losses | 累计其他综合损失 | (4,290) | (12,456) |
| <a id="jpm-treasury_stock"></a>　Treasury stock, at cost (1,408,661,319 and 1,307,313,494 shares) | 库存股，按成本〔股数1,408,661,319／1,307,313,494〕 | (164,591) | (134,018) |
| <a id="jpm-total_equity"></a>**Total stockholders’ equity** | **股东权益合计** | **362,438** | **344,758** |
| <a id="jpm-total_liabilities_equity"></a>**Total liabilities and stockholders’ equity** | **负债及股东权益合计** | **4,424,900** | **4,002,814** |

**附注(a)：已合并VIE的资产负债。** VIE在这里是依合并规则纳入集团的可变利益实体。原表说明，这些实体的资产用于清偿各自负债；受益权持有人通常不对JPMorganChase的一般信用享有追索。下面披露的是已合并第三方资产和负债，排除了合并时抵销的内部余额，进一步说明见Note 14。<strong>它们已经在上表里，不能再加到总资产或总负债。</strong>[JPM-BS]（附注(a)）

| 英文原行 | 中文名称 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| <a id="jpm-vie-assets"></a>**Assets** | **资产** |  |  |
| <a id="jpm-vie-trading_assets"></a>　Trading assets | 交易资产 | 4,835 | 3,885 |
| <a id="jpm-vie-loans"></a>　Loans | 贷款 | 37,777 | 36,510 |
| <a id="jpm-vie-all_other_assets"></a>　All other assets | 其他资产 | 683 | 681 |
| <a id="jpm-vie-total_assets"></a>**Total assets** | **资产合计** | **43,295** | **41,076** |
| <a id="jpm-vie-liabilities"></a>**Liabilities** | **负债** |  |  |
| <a id="jpm-vie-beneficial_interests"></a>　Beneficial interests issued by consolidated VIEs | 合并VIE发行的受益权益 | 27,951 | 27,323 |
| <a id="jpm-vie-all_other_liabilities"></a>　All other liabilities | 其他负债 | 691 | 454 |
| <a id="jpm-vie-total_liabilities"></a>**Total liabilities** | **负债合计** | **28,642** | **27,777** |

主表等式为：2025年 `4,424,900 = 4,062,462 + 362,438`；2024年 `4,002,814 = 3,658,056 + 344,758`。其中投资证券777,332已经包含AFS和HTM两项，贷款净额1,467,664已经包含准备减项。核对总资产时各用一次净小计。

<span id="bf05-bank-funding"></span>

### 3.2　先看资金来自哪里，再看它怎样使用

银行的负债不是一张等待读完资产后再顺带检查的清单。资金来源本身就是经营的重要部分。先在表中对照两行：资产方 `Deposits with banks` 为321,596，负债方 `Deposits` 为2,559,320。前者是集团存放在其他银行的款项，后者是对客户的存款义务。中文都叫“存款”还不够，必须带上权利或义务的方向。[JPM-BS]

Note 17让我们进一步看到，2025年美国机构无息存款583,342，非美国机构无息存款37,057，合计620,399，占客户存款约24.24%；2024年对应合计619,306，占比约25.74%。分子略增而占比下降并不矛盾：总存款的分母也在变化。[JPM-DEPOSITS]

这个分解能帮助我们提出资金成本问题，但“无息”不等于提供服务没有成本，也不直接证明存款一定稳定。需要研究未来资金成本和提款需求时，必须继续看客户、期限、资金行为和其他披露，不能在这一比例后接一个自动的安全评分。

另一边，贷款与存款之比可算成 `1,493,429/2,559,320≈58.35%`，但剩下的41.65%不能直接叫“闲置现金”：全表还包括证券、交易资产、逆回购、其他资金来源和相应负债。这个比值是两项余额关系，不是一份把每一美元存款逐笔分配给资产的资金追踪表。[JPM-BS]（本文计算）

<span id="bf05-bank-loan-measurement"></span>

### 3.3　贷款不是一个只有总额的盒子

贷款先是一项收款权，但怎么放在账上，还取决于它被怎样持有。Note 12把贷款分为留存、持有待售及按公允价值计量三类。这里“留存”指持有用于投资的贷款，不是留存收益。[JPM-LOAN]

就本报告的政策而言，留存贷款按摊余成本记录，并另扣预期信用损失准备；摊余成本会随还本、费用或折溢价摊销等变化，不是每天重新报一个市场价格。持有待售贷款按成本与公允价值孰低计量；选择公允价值选项的贷款则按公允价值计量。后两类的相关估值变化进入非利息收入，不套用留存贷款那一套贷款损失准备处理。所以，下面的分类不仅是把总数分成三个名字，它决定了损失通过什么位置反映。[JPM-LOAN]

**以下只摘Note 12贷款构成表的合计列，单位：百万美元。** 这不是附注全文，也没有把附注各业务组合再重复加到主表。

| 英文原类 | 中文 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| Retained | 留存贷款 | 1,408,905 | 1,299,590 |
| Held-for-sale | 持有待售贷款 | 13,840 | 7,048 |
| At fair value | 按公允价值计量贷款 | 70,684 | 41,350 |
| Total | 未扣贷款损失准备的贷款合计 | 1,493,429 | 1,347,988 |

来源：[JPM-LOAN-TABLE]，印刷p.239。原表脚注说明该组合表不含单列的应计利息应收；不是把所有贷款有关资产都装进了这一列。

我们先回接主表：`1,408,905+13,840+70,684=1,493,429`，再扣准备25,765，得到1,467,664。**贷款损失准备是账面资产的减项，不是一笔锁在另一账户中的现金。** 本期信用损失费用、核销和回收如何使准备余额变化，需要另外的滚动表，不能用两期准备之差直接替代全部期间费用。[JPM-BS]、[JPM-LOAN]

这里还藏着一个分母问题。将准备正额除以对应的留存贷款，2025年为 `25,765/1,408,905≈1.8287%`，2024年为 `24,345/1,299,590≈1.8733%`。若改除全部贷款，2025年会得到约1.7252%。后一计算并非算术错误，却不能冒充前一口径；它把不同计量类别都放入了分母。[JPM-LOAN]、[JPM-LOAN-TABLE]

比值下降本身也不是信用质量改善的证明。它可能需要通过组合构成和估计变化来解释。我们在本篇完成的是计量范围匹配，不是贷款损失预测。

证券部分可以接着用同一读法。主表中的AFS（可供出售）507,198与HTM（持有至到期）270,134合计777,332。Note 10说明，AFS按公允价值列账；作适用的对冲和信用损失调整后，未实现损益反映在累计其他综合收益中。HTM要求有持有至到期的意图和能力，按摊余成本扣除信用损失准备列账。因此，主表的777,332是两种不同计量基础下的账面额相加，并不是把两类证券都重估到同一个“市场价值”口径。2025年还发生44.1 billion，即44,100 million，从AFS到HTM的非现金转移。这提醒我们：类别余额的变化可能同时含采购、到期和重分类，不能把HTM的变化单独当作证券购买现金。[JPM-SEC]

<span id="bf05-bank-common-equity"></span>

### 3.4　普通股股东在哪一层？

全表的股东权益362,438中含优先股20,045。因此，按这份表计算的普通股权益为 `362,438−20,045=342,393`。2024年同口径为324,708。这里是在澄清剩余权益的归属，不是在估算股票价格，也不是直接计算监管普通股一级资本。[JPM-BS]

库存股也要读对方向。2025年的 `(164,591)` 是权益减项，不是银行新增持有的一项普通经营资产。表中还给出已发行普通股4,104,933,895股和库存股1,408,661,319股，两者相减得到流通普通股2,696,272,576股。由此算普通股每股账面值时，必须先把百万美元换成美元：

`342393 * 1000000 / 2696272576 ≈ 126.99 美元/股`。

这个结果能核对金额与股数的接口，不能替代市场定价。尤其不要把“普通股”行的4,105百万美元误当作全部普通股权益；它只是权益构成中的一行。[JPM-BS]（本文计算）

回到全貌：集团资产增加422,086，对应负债增加404,406、权益增加17,680。账面扩张同时涉及资金来源、贷款与证券及其他业务项目。只看“资产很多”或“现金下降”，都还没有完成银行经营分析。

<span id="bf05-bank-exercise"></span>

### 3.5　银行迁移练习

**题目。** 用2024列自行复算贷款净额与普通股权益。另一位读者把VIE脚注资产41,076加到集团资产4,002,814上，又把准备24,345当成额外现金。请逐项说明错在哪里。最后说出为何不能用Costco的“商品存货减应付”直接衡量这家银行。

**解析。** 贷款净额为 `1,347,988−24,345=1,323,643`；普通股权益为 `344,758−20,050=324,708`。VIE脚注明确是合并表中已有项目的说明，再加41,076重复计算；贷款准备是减项，不是额外资金来源。[JPM-BS]

零售那一对余额对应商品采购与供应商结算。银行本例的主要关系是金融权利、资金义务及其计量，且有许多业务类型；硬找两行替代“库存”和“应付”，会丢掉存款、证券和风险计量这些核心关系。正确的迁移是保留“先业务、后口径、再计算”的方法，而不是搬同一个比率。

<div data-experiment-slot="lab-bf05-bank"></div>

</section>

<span id="bf05-events"></span>

## 4　共同事件实验：一张表怎样随交易移动

这组数是**独立教学设定，不是 Costco 或 JPMorgan 的交易记录**。一家小企业期初只有现金100和权益100，没有负债；期初出资已在观察窗口之前完成。依次发生赊购成本100的商品、赊销全部商品150并结转成本100、向供应商付款100、向客户收款150。忽略税、退款、信用损失、运费、其他费用和分配；销售时满足确认条件。

| 步骤完成后 | 现金 | 应收 | 存货 | 总资产 | 应付／总负债 | 权益 | 累计本期利润 | 累计经营现金净额 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| S0 期初 | 100 | 0 | 0 | 100 | 0 | 100 | 0 | 0 |
| S1 赊购100 | 100 | 0 | 100 | 200 | 100 | 100 | 0 | 0 |
| S2 赊销150并结转100 | 100 | 150 | 0 | 250 | 100 | 150 | 50 | 0 |
| S3 付款100 | 0 | 150 | 0 | 150 | 0 | 150 | 50 | −100 |
| S4 收款150 | 150 | 0 | 0 | 150 | 0 | 150 | 50 | 50 |

每一条事件箭头必须带完整变化，而不是全部指向权益：

| 箭头 | 现金变化 | 应收变化 | 存货变化 | 负债变化 | 权益变化 | 经济含义 |
|---|---:|---:|---:|---:|---:|---|
| S0→S1 赊购 | 0 | 0 | +100 | +100 | 0 | 商品与付款义务同时留下 |
| S1→S2 销售并结转成本 | 0 | +150 | −100 | 0 | +50 | 收款权替代商品，净收益增加权益 |
| S2→S3 付款 | −100 | 0 | 0 | −100 | 0 | 清偿旧义务，不重复确认商品成本 |
| S3→S4 收款 | +150 | −150 | 0 | 0 | 0 | 实现旧收款权，不重复确认销售收入 |

为什么S2的总资产250比S4的150还大，最终利润却没有减少？因为S2还同时保留着100的应付，随后付款消除了现金和负债，净资产不变。总资产变大并不是利润的同义词；现金变化也不是权益变化的同义词。

**迁移题。** 将收款放在付款之前，逐步写出变化。若期初现金改为0，原顺序和新顺序有什么不同？

**解析。** 期初现金100时，销售后先收款，余额成为现金250、应收0、存货0、资产250、负债100、权益150；再付款回到现金150、负债0、权益150，终点相同。若期初现金为0、权益亦为0，先付款会短缺100，不能在禁止透支的模型里执行；先收款则可先得到150，再支付100，终点现金和权益均为50。利润没有因顺序改变，资金可行性却改变了。系统应显示资金缺口，不应偷偷生成一笔未说明的借款。

<div data-experiment-slot="lab-bf05-events"></div>

<section data-reading-branch="bank">

<span id="bf05-extensions"></span>

## 5　扩展层：表内净额与现金口径

以下不计入首次选择一条行业分支的核心任务。

<span id="bf05-netting-extension"></span>

### 5.1　衍生品的三个金额，不是同一层次

JPM Note 5 的2025年应收表可以沿三个层次读：衍生品应收总额606,382，其中只有满足报告所述净额列报条件的部分进入表内抵销；扣除实际表内抵销548,605后，得到表内净应收57,777。再考虑表内不能抵销的担保品28,891，附注给出净额28,886。抵销政策涉及相应协议与法律意见等条件，并非见到两笔相反金额就可以相减。[JPM-NETTING]

| 层次 | 计算，百万美元 | 能怎样称呼 |
|---|---|---|
| 未作所列抵销的应收总额 | 606,382 | 衍生品应收总额，不是名义本金 |
| 表内抵销之后 | `606,382−548,605=57,777` | 表内净应收 |
| 再考虑所列不能表内抵销的担保品 | `57,777−28,891=28,886` | 本附注相应净额，不改写主表列报 |

**解析。** 把28,886填回主表替代57,777错在跨越了列报层次。附注帮助理解信用风险相关关系，但并不授权分析者改变法定主表。这个净额也不是所有市场、流动性和交易对手风险的统一计量。[JPM-NETTING]

<span id="bf05-cashflow-extension"></span>

### 5.2　银行现金流的终点到底接到哪里

JPM现金流表2025年的期末金额343,338，接的是 `Cash and due from banks 21,742 + Deposits with banks 321,596`，而不只是第一行。[JPM-CF]、[JPM-BS]

完整现金桥为：

`469,317 − 147,782 − 265,565 + 269,533 + 17,835 = 343,338`。

依次为期初、经营、投资、筹资和汇率影响。经营现金流负值里包含交易资产、借入证券等业务项目的变动；MD&A也说明，支持贷款与资本市场活动的经营性资产负债会随客户活动、风险管理和市场状况显著变化。读者应先读组成，再解释经营现金流的意义；不能凭一个负值直接得出与普通商品企业完全相同的结论。[JPM-CF]

</section>

<span id="bf05-reading-method"></span>

## 6　把两条分支合在同一阅读方法里

我们保留的共同方法很简单：先确认整表对象，再找业务关系，沿主表到附注，做能回接的计算，最后把发现放回全表。改变行业时，变的是分析中心，而不是证据标准。

零售分支最重要的收获不是记住−1,667，而是知道这个数来自哪两项、它没有包含什么，以及为什么还要与963对照。银行分支最重要的收获不是记住某个覆盖率，而是理解它的分母为什么必须与计量范围匹配。能把这两点带到另一份真实材料中，就开始具备独立读表的能力了。

<span id="bf05-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [FASB] | BF-S-FASB-ELEMENTS；FASB，2021-12；Chapter 4 E16–E70，尤其E16、E37、E61–E66 |
| [OPENSTAX-22] | BF-S-OPENSTAX-22；OpenStax，Principles of Accounting Vol.1，2019，§2.2 |
| [COST-BS] | BI-S05；Costco FY2025 SEC 10-K，印刷p.39完整合并资产负债表；两期百万美元，股数/面值除外 |
| [COST-PDF] | 同一公司股东年报PDF；资产负债表印刷p.37／物理p.43；排版页码与SEC HTML不同 |
| [COST-POLICY] | BI-S05；Note 1，印刷p.42，Basis of Presentation、Fiscal Year、Reclassification |
| [COST-BUS] | BI-S05；Item 1 General，印刷pp.3–4，周转与供应商付款关系 |
| [COST-CF] | BI-S05；完整合并现金流量表印刷p.41；截至2025-08-31的52周，百万美元；股东年报PDF对应印刷p.39／物理p.45 |
| [COST-RECEIVABLES] | BI-S05；Note 1 Receivables, Net，印刷p.44；应收来源而非顾客赊销假定 |
| [COST-REV] | BI-S05；Note 1 Revenue Recognition，印刷pp.47–48；会员费与会员奖励分别处理 |
| [COST-LEASE] | BI-S05；Note 5 Leases，印刷pp.53–54；资产负债分类表及脚注(1)–(3)在p.53 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整表及VIE附注(a) |
| [JPM-DEPOSITS] | BI-S07；Note 17 Deposits，印刷p.277／物理p.309；含计息/无息、地域和定期存款说明 |
| [JPM-LOAN] | BI-S07；Note 12 Loan accounting framework，印刷pp.236–238 |
| [JPM-LOAN-TABLE] | BI-S07；Note 12 Loan portfolio，印刷p.239／物理p.271；本稿摘构成表合计列，脚注(a)(b)保留支持范围 |
| [JPM-SEC] | BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1bn非现金转移及计量政策在p.228 |
| [JPM-NETTING] | BI-S07；Note 5 Derivatives netting，印刷pp.207–209；2025应收表在p.208，结合相邻说明与脚注 |
| [JPM-CF] | BI-S07；合并现金流量表印刷p.169／物理p.201；解释参见MD&A p.58 |

[FASB]: https://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf "BF-S-FASB-ELEMENTS；FASB，2021-12；Chapter 4 E16–E70，尤其E16、E37、E61–E66"
[OPENSTAX-22]: https://openstax.org/books/principles-financial-accounting/pages/2-2-define-explain-and-provide-examples-of-current-and-noncurrent-assets-current-and-noncurrent-liabilities-equity-revenues-and-expenses "BF-S-OPENSTAX-22；OpenStax，Principles of Accounting Vol.1，2019，§2.2"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K，印刷p.39完整合并资产负债表；两期百万美元，股数/面值除外"
[COST-PDF]: https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf#page=43 "同一公司股东年报PDF；资产负债表印刷p.37／物理p.43；排版页码与SEC HTML不同"
[COST-POLICY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1，印刷p.42，Basis of Presentation、Fiscal Year、Reclassification"
[COST-BUS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Item 1 General，印刷pp.3–4，周转与供应商付款关系"
[COST-CF]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并现金流量表印刷p.41；截至2025-08-31的52周，百万美元；股东年报PDF对应印刷p.39／物理p.45"
[COST-RECEIVABLES]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Receivables, Net，印刷p.44；应收来源而非顾客赊销假定"
[COST-REV]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Revenue Recognition，印刷pp.47–48；会员费与会员奖励分别处理"
[COST-LEASE]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 5 Leases，印刷pp.53–54；资产负债分类表及脚注(1)–(3)在p.53"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整表及VIE附注(a)"
[JPM-DEPOSITS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=309 "BI-S07；Note 17 Deposits，印刷p.277／物理p.309；含计息/无息、地域和定期存款说明"
[JPM-LOAN]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=268 "BI-S07；Note 12 Loan accounting framework，印刷pp.236–238"
[JPM-LOAN-TABLE]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=271 "BI-S07；Note 12 Loan portfolio，印刷p.239／物理p.271；本稿摘构成表合计列，脚注(a)(b)保留支持范围"
[JPM-SEC]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=260 "BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1bn非现金转移及计量政策在p.228"
[JPM-NETTING]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=239 "BI-S07；Note 5 Derivatives netting，印刷pp.207–209；2025应收表在p.208，结合相邻说明与脚注"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；合并现金流量表印刷p.169／物理p.201；解释参见MD&A p.58"

