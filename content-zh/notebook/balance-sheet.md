{
  "title": "资产负债表：全表结构、附注与行业差异",
  "description": "按零售或银行业务阅读完整资产负债表，追查关键附注，并将两期余额与期间现金、股东权益连接起来.",
  "layout": "entry",
  "notebookid": "zh-balance-sheet",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-balance-sheet"
}

资产负债表列出报告日企业确认的资产、负债和权益. 商品、收款权、使用权和付款义务等交易结果在这一天汇集为余额；沿业务关系追读这些项目及其附注，可以解释企业的资金放在哪里、承担哪些义务，以及哪些剩余利益归属股东. 两期余额之间发生的经营、投资和融资活动，还要结合利润表、现金流量表及权益变动表阅读. [FASB]、[OPENSTAX-22]

<span id="bf05-common-structure"></span>

## 1　报告日余额与期间变化

在本篇采用的 FASB 概念框架中，资产是企业取得经济利益的现时权利；负债是企业转移经济利益的现时义务；权益是在资产扣除负债后的剩余利益. [FASB]（E16、E37、E61–E66）令某日的已确认资产、负债和权益分别为 $A,L,E$，则账面关系为 $A=L+E$. 赊购货物可以使资产和负债同时增加；收回应收款可以只改变资产构成；交付商品并确认净收益，则可能增加权益.

常见非金融企业会按一年或正常经营周期等条件区分流动与非流动项目. 现金、应收账款和存货通常位于流动资产，厂房、设备和长期使用权位于非流动资产；应付账款、短期借款及近期到期的义务位于流动负债，长期借款和长期租赁义务另列. 权益包括股东投入、留存收益及其他权益项目. 银行可以按项目性质列报，JPMorgan 的原表就没有流动资产和流动负债小计. [OPENSTAX-22]、[JPM-BS]

分类确定项目在表中的位置，计量规则确定列示金额. 设备净额、贷款净额和证券公允价值虽然都以美元列示，金额含义仍要追到相应政策和附注；比较两期数值时，也要核对采用的计量基础. [FASB]、[JPM-SEC]、[JPM-LOAN]

<span id="bf05-reading-method"></span>

零售分支选取Costco，沿商品采购、供应商结算、会员服务和门店资源读表；银行分支选取JPMorgan，沿存款、贷款、证券和普通股归属读表. 选择一条即可完成本次阅读. 如需先确认交易怎样同时影响余额、利润和现金，可以展开下面的演示.

<details>
<summary>交易、利润与现金</summary>

<span id="bf05-events"></span>

一家教学企业期初只有现金100和权益100，没有负债；期初出资发生在观察窗口之前. 随后依次赊购成本100的商品、赊销全部商品150并结转成本100、向供应商付款100、向客户收款150. 忽略税、退款、信用损失、运费、其他费用和分配；销售时满足确认条件.

| 步骤完成后 | 现金 | 应收 | 存货 | 总资产 | 应付／总负债 | 权益 | 累计本期利润 | 累计经营现金净额 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| S0 期初 | 100 | 0 | 0 | 100 | 0 | 100 | 0 | 0 |
| S1 赊购100 | 100 | 0 | 100 | 200 | 100 | 100 | 0 | 0 |
| S2 赊销150并结转100 | 100 | 150 | 0 | 250 | 100 | 150 | 50 | 0 |
| S3 付款100 | 0 | 150 | 0 | 150 | 0 | 150 | 50 | −100 |
| S4 收款150 | 150 | 0 | 0 | 150 | 0 | 150 | 50 | 50 |

S0→S1 中，赊购留下存货100和付款义务100，现金不变. S1→S2 中，商品被结转，形成应收150，资产净增加50并通过本期利润进入权益；现金仍未收到. S2→S3 只是用现金清偿既有应付，利润保持50. S3→S4 把既有应收变成现金，同样不重复确认收入. 因此，同一笔经营活动会在不同时间留下余额、利润和现金变化，报告日的两个余额之差不能自动当作期间现金流.

**迁移题.** 将收款放在付款之前，逐步写出变化. 若期初现金改为0，原顺序和新顺序有什么不同？

**解析.** 期初现金100时，销售后先收款，余额成为现金250、应收0、存货0、资产250、负债100、权益150；再付款后现金150、负债0、权益150，终点与原顺序相同. 若期初现金为0且权益亦为0，先付款会出现100的资金缺口，在禁止透支的模型中无法继续；先收款可以先得到150，再支付100，终点现金和权益均为50. 利润没有因先后顺序变化，资金可行性发生了变化.

<div data-experiment-slot="lab-bf05-events"></div>

</details>

<nav data-reading-branch-controls aria-label="选择资产负债表行业分支">
<button type="button" data-select-reading-branch="retail" aria-pressed="true">零售 · Costco</button>
<button type="button" data-select-reading-branch="bank" aria-pressed="false">银行 · JPMorgan</button>
<button type="button" data-select-reading-branch="all" aria-pressed="false">全部展开</button>
</nav>

<section data-reading-branch="retail">

<a id="BS-RETAIL"></a>

## 2　零售 · Costco

<span id="bf05-retail-full-table"></span>
<span id="bf05-retail-inventory-payables"></span>

### 2.1　商品、供应商与现金

**Costco Wholesale Corporation — CONSOLIDATED BALANCE SHEETS.** 合并范围为公司及其全资子公司，重大内部交易抵销. 金额为 **USD M**；面值为美元／股，股数为股，不随金额单位缩放. 2025与2024比较列均取自2025年报. 原件定位为 SEC 10-K 印刷p.39；另一版股东年报PDF的同表位于印刷p.37／物理p.43. [COST-BS]、[COST-POLICY]、[COST-PDF]

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
| <a id="cost-preferred_stock"></a>　Preferred stock <span class="tex2jax_ignore">&#36;0.005</span> par value; 100,000,000 shares authorized; no shares issued and outstanding | 优先股：每股面值0.005美元；授权100,000,000股；无已发行及流通股 | — | — |
| <a id="cost-common_stock"></a>　Common stock <span class="tex2jax_ignore">&#36;0.005</span> par value; 900,000,000 shares authorized; 443,237,000 and 443,126,000 shares issued and outstanding | 普通股：每股面值0.005美元；授权900,000,000股；两期已发行及流通443,237,000及443,126,000股 | 2 | 2 |
| <a id="cost-additional_paid_in_capital"></a>　Additional paid-in capital | 额外实缴资本 | 8,282 | 7,829 |
| <a id="cost-aocl"></a>　Accumulated other comprehensive loss | 累计其他综合损失 | (1,770) | (1,828) |
| <a id="cost-retained_earnings"></a>　Retained earnings | 留存收益 | 22,650 | 17,619 |
| <a id="cost-total_equity"></a>**TOTAL EQUITY** | **权益合计** | **29,164** | **23,622** |
| <a id="cost-total_liabilities_equity"></a>**TOTAL LIABILITIES AND EQUITY** | **负债及权益合计** | **77,099** | **69,831** |

两期主表都满足资产等于负债加权益：2025年 `77,099 = 47,935 + 29,164`；2024年 `69,831 = 46,209 + 23,622`. 流动资产小计已包含现金、短期投资、应收和存货等明细，汇总总资产时使用该小计一次. 普通股行中的2按 USD M 列示，是股本金额；“承诺及或有事项”通过附注披露，主表没有列示金额.

Costco 的业务说明把快速周转和供应商结算联系起来，并说明其经常能在付款到期前售出商品. 因此，存货和应付账款可以先作为同一采购—销售链中的两个报告日余额来读，再用现金流量表判断期间变化. [COST-BUS] 2024年末商品存货18,647、应付账款19,421；2025年末分别为18,116和19,783. 定义本次分析的选定余额 $N=\text{商品存货}-\text{应付账款}$，则

$$
N_{2024}=18,647-19,421=-774,\qquad
N_{2025}=18,116-19,783=-1,667.
$$

所以 $\Delta N=-893$. 相对于所列应付，账上的商品存货净占用降低893. 这里的 $N$ 取两项余额的差，用于观察商品库存与供应商结算的关系；完整营运资本还涉及应收和其他经营项目.

现金流量表给出的期间调整进一步区分了余额与现金. 2025年的存货变动调整为正559，应付账款变动调整为正404，合计963. 若只把两期余额变化取反，会得到893.

| 对照步骤 | 计算， USD M | 本步骤的身份 |
|---|---:|---|
| 存货余额减少 | `18,647−18,116=531` | 两期余额差 |
| 应付余额增加 | `19,783−19,421=362` | 两期余额差 |
| 选定余额变化取反 | `531+362=893` | 供对照的派生数 |
| 现金流量表相应调整 | `559+404=963` | 原表期间调整合计 |
| 尚待归因差额 | `963−893=70` | 当前材料未完成调节 |

[COST-CF] 893描述两期存货和应付余额的反向变化，963是现金流量表由利润调节到经营现金流时列示的两项调整. 差额70需要进一步核对调节口径，现有材料未给出它的组成.

供应商关系还出现在应收净额3,203中. Note 1列出供应商款项、联名卡激励、再保险和第三方药房等来源；供应商应收又包括折扣、销量返利等安排，部分情形按协议净额结算. [COST-RECEIVABLES] 因而分析采购带来的收付款时，需要把这部分供应商应收一并纳入；直接将全部应收解释为顾客赊销，会认错付款人和回款条件.

<span id="bf05-retail-membership-leases"></span>
### 2.2　会员义务与门店资源

会员在门店购买商品，也通过会员费和奖励安排与Costco形成持续的权利义务. 递延会员费2,854对应已收取、尚未随会员期间确认的收入；应计会员奖励2,677对应奖励安排，按披露政策影响销售额并形成相应义务. [COST-REV] 两项都列在流动负债中，但前者主要随会员服务期间确认为收入，后者随会员奖励的兑现处理；偿付和履约方式与应付供应商货款不同.

门店和设施则把长期经营能力留在资产和负债两侧. 2025年物业及设备净额31,909，加经营租赁使用权资产2,725，合计34,634，占总资产约44.921%. [COST-BS] 使用权资产记录合同取得的使用能力，租赁负债记录相应付款义务；后续计量使两者不要求在每个报告日保持相等. Costco Note 5还说明，融资租赁资产1,488列在其他长期资产. [COST-LEASE]

2025年租赁负债4,147可以沿附注重新放回主表已有项目.

| 租赁义务， USD M | 2025金额 | 已包含在主表的什么位置 |
|---|---:|---|
| 流动经营租赁负债 | 208 | 其他流动负债 |
| 流动融资租赁负债 | 78 | 其他流动负债 |
| 长期经营租赁负债 | 2,460 | 主表单列的长期经营租赁负债 |
| 长期融资租赁负债 | 1,401 | 其他长期负债 |
| **租赁负债合计** | **4,147** | `208+78+2,460+1,401` |

来源：[COST-LEASE]，SEC印刷p.53，表下注释(1)–(3). 这4,147是主表已有负债的附注拆分，按付款性质重新汇集后，总负债仍为47,935.

<span id="bf05-retail-whole-statement"></span>

### 2.3　现金与权益变动

商品、会员服务和门店资源构成了上面的经营分析；全表还包含现金、借款和股东资本. 2025年总资产比2024年增加7,268，对应负债增加1,726、权益增加5,542. 权益增量来自股本、额外实缴资本、留存收益和累计其他综合收益等项目的共同变化，利润与分配的期间贡献可继续查权益变动表. 2025年优先股没有已发行及流通股，表中无需分出已发行优先股的账面权益.

现金的期间路径可以从现金流量表完整接回资产负债表：

`9,906 + 13,335 − 5,311 − 3,775 + 6 = 14,161`.

依次是期初现金、经营、投资、筹资和汇率影响，终点等于2025年资产负债表的现金14,161. 前面计算的存货与应付调整963属于经营现金流13,335的调节项目；投资和筹资现金流继续改变现金余额，最终现金增加4,255. 资产负债表提供两个报告日的终点，现金流量表把它们之间的收付过程补齐. [COST-CF]

<span id="bf05-retail-exercise"></span>

### 2.4　零售迁移练习

**题目.** 一位读者看到 Costco 2024年流动资产34,246小于流动负债35,464，便据此判断当时无法经营；又看到2025年流动比率超过1，便认为问题已经解决. 请计算两个比率，再用本分支的业务和现金资料改写这一判断. 随后解释为什么不能把4,147租赁负债再加到47,935上.

**解析.** 两期流动比率分别为 `34246/35464≈0.966` 和 `38380/37108≈1.034`. 这两个比率只比较各报告日已列流动项目，无法替代销售回款、供应商账期、到期结构和可用资金等期间信息. 本分支已经看到，Costco 的存货与供应商结算存在经营联系，会员义务与债务还对应不同履约方式，因此可以准确说“流动比率由约0.966升至1.034”，却不能仅凭这一比率判断经营是否可持续. [COST-BS]、[COST-BUS]、[COST-CF]

4,147已经分别包含在其他流动负债、长期经营租赁负债和其他长期负债中；把它再次加入47,935会重复计数. 附注在这里负责拆分主表已有金额.

<div data-experiment-slot="lab-bf05-retail"></div>

</section>

<section data-reading-branch="bank">

<a id="BS-BANKING"></a>

## 3　银行 · JPMorgan Chase & Co.

<span id="bf05-bank-full-table"></span>
<span id="bf05-bank-funding"></span>

### 3.1　资金来源、运用与完整原表

**JPMorgan Chase & Co. — Consolidated balance sheets.** 这是集团合并表，时点为2025-12-31和2024-12-31；金额为 **USD M**，面值和股数另列. 原件为2025 Annual Report印刷p.167／物理p.199. 原表没有流动／非流动小计，因此阅读顺序由银行的资金来源、资金运用和计量方式决定. [JPM-BS]

| 英文原行 | 中文名称 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| <a id="jpm-assets"></a>**Assets** | **资产** |  |  |
| <a id="jpm-cash_due_from_banks"></a>　Cash and due from banks | 现金及应收银行款 | 21,742 | 23,372 |
| <a id="jpm-deposits_with_banks"></a>　Deposits with banks | 存放银行款项 | 321,596 | 445,945 |
| <a id="jpm-fed_funds_sold_resale"></a>　Federal funds sold and securities purchased under resale agreements (included <span class="tex2jax_ignore">&#36;327,018</span> and <span class="tex2jax_ignore">&#36;286,771</span> at fair value) | 拆出联邦基金及买入返售证券〔其中按公允价值计量327,018／286,771〕 | 336,426 | 295,001 |
| <a id="jpm-securities_borrowed"></a>　Securities borrowed (included <span class="tex2jax_ignore">&#36;98,111</span> and <span class="tex2jax_ignore">&#36;83,962</span> at fair value) | 借入证券〔其中按公允价值计量98,111／83,962〕 | 286,191 | 219,546 |
| <a id="jpm-trading_assets"></a>　Trading assets (included assets pledged of <span class="tex2jax_ignore">&#36;165,927</span> and <span class="tex2jax_ignore">&#36;136,070</span>) | 交易资产〔其中已质押资产165,927／136,070〕 | 802,873 | 637,784 |
| <a id="jpm-afs_securities"></a>　　Available-for-sale securities (amortized cost of <span class="tex2jax_ignore">&#36;507,226</span> and <span class="tex2jax_ignore">&#36;411,045</span>; included assets pledged of <span class="tex2jax_ignore">&#36;7,735</span> and <span class="tex2jax_ignore">&#36;10,162</span>) | 可供出售证券〔摊余成本507,226／411,045；其中已质押7,735／10,162〕 | 507,198 | 406,852 |
| <a id="jpm-htm_securities"></a>　　Held-to-maturity securities | 持有至到期证券 | 270,134 | 274,468 |
| <a id="jpm-investment_securities_net"></a>　**Investment securities, net of allowance for credit losses** | **投资证券，扣除信用损失准备后** | **777,332** | **681,320** |
| <a id="jpm-loans_gross"></a>　　Loans (included <span class="tex2jax_ignore">&#36;70,684</span> and <span class="tex2jax_ignore">&#36;41,350</span> at fair value) | 贷款，未扣贷款损失准备〔其中按公允价值计量70,684／41,350〕 | 1,493,429 | 1,347,988 |
| <a id="jpm-allowance_loan_losses"></a>　　Allowance for loan losses | 贷款损失准备〔资产减项〕 | (25,765) | (24,345) |
| <a id="jpm-loans_net"></a>　**Loans, net of allowance for loan losses** | **贷款净额** | **1,467,664** | **1,323,643** |
| <a id="jpm-accrued_interest_receivables"></a>　Accrued interest and accounts receivable | 应计利息及应收账款 | 111,599 | 101,223 |
| <a id="jpm-premises_equipment"></a>　Premises and equipment | 房屋及设备 | 36,244 | 32,223 |
| <a id="jpm-goodwill_msrs_other_intangibles"></a>　Goodwill, MSRs and other intangible assets | 商誉、按揭服务权及其他无形资产 | 64,458 | 64,560 |
| <a id="jpm-other_assets"></a>　Other assets (included <span class="tex2jax_ignore">&#36;15,849</span> and <span class="tex2jax_ignore">&#36;15,122</span> at fair value and assets pledged of <span class="tex2jax_ignore">&#36;11,984</span> and <span class="tex2jax_ignore">&#36;6,288</span>) | 其他资产〔其中按公允价值计量15,849／15,122；已质押11,984／6,288〕 | 198,775 | 178,197 |
| <a id="jpm-total_assets"></a>**Total assets(a)** | **总资产〔附注(a)〕** | **4,424,900** | **4,002,814** |
| <a id="jpm-liabilities"></a>**Liabilities** | **负债** |  |  |
| <a id="jpm-customer_deposits"></a>　Deposits (included <span class="tex2jax_ignore">&#36;20,930</span> and <span class="tex2jax_ignore">&#36;33,768</span> at fair value) | 客户存款〔其中按公允价值计量20,930／33,768〕 | 2,559,320 | 2,406,032 |
| <a id="jpm-fed_funds_purchased_repo"></a>　Federal funds purchased and securities loaned or sold under repurchase agreements (included <span class="tex2jax_ignore">&#36;360,194</span> and <span class="tex2jax_ignore">&#36;226,329</span> at fair value) | 拆入联邦基金及证券借出或回购融资〔其中按公允价值计量360,194／226,329〕 | 442,396 | 296,835 |
| <a id="jpm-short_term_borrowings"></a>　Short-term borrowings (included <span class="tex2jax_ignore">&#36;32,460</span> and <span class="tex2jax_ignore">&#36;26,521</span> at fair value) | 短期借款〔其中按公允价值计量32,460／26,521〕 | 64,776 | 52,893 |
| <a id="jpm-trading_liabilities"></a>　Trading liabilities | 交易负债 | 216,019 | 192,883 |
| <a id="jpm-accounts_payable_other_liabilities"></a>　Accounts payable and other liabilities (included <span class="tex2jax_ignore">&#36;6,660</span> and <span class="tex2jax_ignore">&#36;5,893</span> at fair value) | 应付账款及其他负债〔其中按公允价值计量6,660／5,893〕 | 316,794 | 280,672 |
| <a id="jpm-vie_beneficial_interests"></a>　Beneficial interests issued by consolidated VIEs (included <span class="tex2jax_ignore">&#36;5</span> and <span class="tex2jax_ignore">&#36;1</span> at fair value) | 合并VIE发行的受益权益〔其中按公允价值计量5／1〕 | 27,951 | 27,323 |
| <a id="jpm-long_term_debt"></a>　Long-term debt (included <span class="tex2jax_ignore">&#36;134,559</span> and <span class="tex2jax_ignore">&#36;100,780</span> at fair value) | 长期债务〔其中按公允价值计量134,559／100,780〕 | 435,206 | 401,418 |
| <a id="jpm-total_liabilities"></a>**Total liabilities(a)** | **负债合计〔附注(a)〕** | **4,062,462** | **3,658,056** |
| <a id="jpm-commitments_contingencies"></a>Commitments and contingencies (refer to Notes 28, 29 and 30) | 承诺及或有事项〔参见Notes 28、29、30；原表无金额〕 |  |  |
| <a id="jpm-equity"></a>**Stockholders’ equity** | **股东权益** |  |  |
| <a id="jpm-preferred_stock"></a>　Preferred stock (<span class="tex2jax_ignore">&#36;1</span> par value; authorized 200,000,000 shares: issued 2,005,375 and 2,005,375 shares) | 优先股：面值每股1美元；授权200,000,000股；两期已发行均为2,005,375股 | 20,045 | 20,050 |
| <a id="jpm-common_stock"></a>　Common stock (<span class="tex2jax_ignore">&#36;1</span> par value; authorized 9,000,000,000 shares; issued 4,104,933,895 shares) | 普通股：面值每股1美元；授权9,000,000,000股；已发行4,104,933,895股 | 4,105 | 4,105 |
| <a id="jpm-additional_paid_in_capital"></a>　Additional paid-in capital | 额外实缴资本 | 91,114 | 90,911 |
| <a id="jpm-retained_earnings"></a>　Retained earnings | 留存收益 | 416,055 | 376,166 |
| <a id="jpm-aocl"></a>　Accumulated other comprehensive losses | 累计其他综合损失 | (4,290) | (12,456) |
| <a id="jpm-treasury_stock"></a>　Treasury stock, at cost (1,408,661,319 and 1,307,313,494 shares) | 库存股，按成本〔股数1,408,661,319／1,307,313,494〕 | (164,591) | (134,018) |
| <a id="jpm-total_equity"></a>**Total stockholders’ equity** | **股东权益合计** | **362,438** | **344,758** |
| <a id="jpm-total_liabilities_equity"></a>**Total liabilities and stockholders’ equity** | **负债及股东权益合计** | **4,424,900** | **4,002,814** |

主表等式为：2025年 `4,424,900 = 4,062,462 + 362,438`；2024年 `4,002,814 = 3,658,056 + 344,758`. 其中投资证券777,332已经包含AFS和HTM两项，贷款净额1,467,664已经扣除贷款损失准备；核对总资产时各使用一次净小计.

主表附注(a)列示的可变利益实体（VIE）已纳入集团合并范围，2025年资产43,295、负债28,642都包含在上述集团总额中. [JPM-BS]

<details>
<summary>VIE附注表与追索关系</summary>

这些实体的资产用于清偿各自负债，受益权持有人通常不对JPMorgan Chase的一般信用享有追索. 下表列示第三方资产和负债，内部余额已在合并时抵销. [JPM-BS]

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

</details>

银行首先把大量资金来源记在负债侧，又把这些资金以及其他融资来源配置到贷款、证券、交易和回购等资产中. 主表的 `Deposits with banks` 321,596是集团存放在其他银行的资产；负债侧 `Deposits` 2,559,320是集团对客户承担的存款义务. [JPM-BS] Note 17进一步给出2025年美国机构无息存款583,342、非美国机构无息存款37,057，合计620,399，占客户存款约24.24%；2024年对应合计619,306，占比约25.74%. 分子略增而占比下降，是因为总存款这一分母同时变化. [JPM-DEPOSITS]

存款类别影响付息成本，服务成本、客户结构、期限和提款行为又影响资金成本与稳定性. 资金运用分布在贷款、证券、交易资产和逆回购等项目中，同时由存款、其他负债与权益共同支持. 因而贷款存款比 `1,493,429/2,559,320≈58.35%` 可以比较两项规模，其余资产的配置仍要回到全表读取. [JPM-BS]

<span id="bf05-bank-loan-measurement"></span>

### 3.2　贷款、证券与净额计量

贷款都是收款权，但报告金额取决于持有方式和计量规则. Note 12把贷款分为留存、持有待售及按公允价值计量三类. 这里的“留存”指持有用于投资的贷款. [JPM-LOAN] 就本报告政策而言，留存贷款按摊余成本记录并扣除预期信用损失准备；持有待售贷款按成本与公允价值孰低计量；选择公允价值选项的贷款按公允价值计量，相关估值变化进入非利息收入. [JPM-LOAN]

| 英文原类 | 中文 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| Retained | 留存贷款 | 1,408,905 | 1,299,590 |
| Held-for-sale | 持有待售贷款 | 13,840 | 7,048 |
| At fair value | 按公允价值计量贷款 | 70,684 | 41,350 |
| Total | 未扣贷款损失准备的贷款合计 | 1,493,429 | 1,347,988 |

来源：[JPM-LOAN-TABLE]，印刷p.239；原表脚注说明该组合表不含单列的应计利息应收.

三类贷款回接主表为 `1,408,905+13,840+70,684=1,493,429`，再扣贷款损失准备25,765，得到贷款净额1,467,664. 贷款损失准备通过账面资产减项反映预期信用损失；准备余额的期间变化由信用损失费用、核销、回收等滚动关系解释. [JPM-BS]、[JPM-LOAN]

准备与留存贷款使用同一计量范围时，2025年为 `25,765/1,408,905≈1.829%`，2024年为 `24,345/1,299,590≈1.873%`. 若把全部贷款作为分母，2025年会得到约1.725%，同时把持有待售和公允价值贷款纳入分母. 两个比率回答的范围不同，准备比率本身也没有完成对贷款组合风险变化的解释. [JPM-LOAN]、[JPM-LOAN-TABLE]

证券部分沿用同一读法. AFS 507,198与HTM 270,134合计为主表投资证券777,332. Note 10说明，AFS按公允价值列账，适用的对冲和信用损失调整后，未实现损益反映在累计其他综合收益中；HTM要求有持有至到期的意图和能力，按摊余成本扣除信用损失准备列账. 2025年还有44.1 B，即44,100 M，从AFS到HTM的非现金转移. 因此，同一“投资证券”小计包含不同计量基础，类别余额变化也可以来自重分类，证券购买现金仍需另查现金流量表. [JPM-SEC]

<span id="bf05-extensions"></span>

<details>
<summary>衍生品总额、表内净额与担保品</summary>

<span id="bf05-netting-extension"></span>

JPM Note 5 的2025年应收表可以沿三个金额层次读. 衍生品应收总额606,382中，只有满足报告所述净额列报条件的部分进入表内抵销；扣除实际表内抵销548,605后，表内净应收为57,777. 再考虑表内不能抵销的担保品28,891，附注给出相应净额28,886. 抵销政策依赖相关协议和法律条件，不能只因两笔金额方向相反就相减. [JPM-NETTING]

| 层次 | 计算， USD M | 金额身份 |
|---|---:|---|
| 未作所列抵销的应收总额 | 606,382 | 衍生品应收总额，不是名义本金 |
| 表内抵销之后 | `606,382−548,605=57,777` | 表内净应收 |
| 再考虑所列不能表内抵销的担保品 | `57,777−28,891=28,886` | 本附注相应净额，不改写主表列报 |

担保品影响进一步计算的净敞口，表内抵销条件决定主表列报金额；两种金额沿各自规则计算.

</details>

<span id="bf05-bank-common-equity"></span>
<span id="bf05-cashflow-extension"></span>

### 3.3　普通股归属与现金终点

集团2025年股东权益362,438中包含优先股20,045，因此按这份表得到普通股权益 `362,438−20,045=342,393`. 2024年同口径为324,708. 这是账面股东权益中的普通股归属，市场价格与监管CET1采用不同口径. [JPM-BS]

库存股 `(164,591)` 是权益减项. 表中已发行普通股4,104,933,895股，库存股1,408,661,319股，两者相减得到流通普通股2,696,272,576股. 把普通股权益从 USD M 换成美元后，每股账面值为

`342393 * 1000000 / 2696272576 ≈ 126.99 美元/股`.

“普通股”行4,105 M只是股本金额，普通股权益还包括额外实缴资本、留存收益、累计其他综合损失和库存股等相应构成. [JPM-BS]

集团总资产从4,002,814增至4,424,900，增加422,086；负债增加404,406，股东权益增加17,680. 银行现金流量表的期末现金集合又采用了与单一主表现金行不同的范围：2025年343,338等于 `Cash and due from banks 21,742 + Deposits with banks 321,596`. [JPM-CF] 完整现金桥为

`469,317 − 147,782 − 265,565 + 269,533 + 17,835 = 343,338`.

依次为期初、经营、投资、筹资和汇率影响. 经营现金流负值包含交易资产、借入证券等业务项目的变动；MD&A也说明，支持贷款与资本市场活动的经营性资产负债会随客户活动、风险管理和市场状况显著变化. [JPM-CF] 因此，银行的现金终点要先核清现金集合，再结合这些经营资产负债及资金来源解释，不能直接套用零售企业的单一现金行阅读方式.

<span id="bf05-bank-exercise"></span>

### 3.4　银行迁移练习

**题目.** 用2024列自行复算贷款净额与普通股权益. 另一位读者把VIE脚注资产41,076加到集团资产4,002,814上，又把准备24,345当成额外现金. 请逐项说明错在哪里. 最后说明为什么 Costco 的“商品存货减应付”不能直接移植为这家银行的资金占用指标.

**解析.** 贷款净额为 `1,347,988−24,345=1,323,643`；普通股权益为 `344,758−20,050=324,708`. VIE脚注明确说明这些资产已经包含在合并表里，再加41,076会重复计算；贷款准备是贷款账面额的减项，不提供额外资金. [JPM-BS] Costco 的存货与应付对应商品采购和供应商结算，而银行的经营资产和资金义务主要分布在存款、贷款、证券、交易与回购等项目中，必须沿这些业务和计量关系重新选择分析对象.

<div data-experiment-slot="lab-bf05-bank"></div>

</section>

<span id="bf05-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [FASB] | BF-S-FASB-ELEMENTS；FASB，2021-12；Chapter 4 E16–E70，尤其E16、E37、E61–E66 |
| [OPENSTAX-22] | BF-S-OPENSTAX-22；OpenStax，Principles of Accounting Vol.1，2019，§2.2 |
| [COST-BS] | BI-S05；Costco FY2025 SEC 10-K，印刷p.39完整合并资产负债表；两期 M 美元，股数/面值除外 |
| [COST-PDF] | 同一公司股东年报PDF；资产负债表印刷p.37／物理p.43；排版页码与SEC HTML不同 |
| [COST-POLICY] | BI-S05；Note 1，印刷p.42，Basis of Presentation、Fiscal Year、Reclassification |
| [COST-BUS] | BI-S05；Item 1 General，印刷pp.3–4，周转与供应商付款关系 |
| [COST-CF] | BI-S05；完整合并现金流量表印刷p.41；截至2025-08-31的52周， M 美元；股东年报PDF对应印刷p.39／物理p.45 |
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
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K，印刷p.39完整合并资产负债表；两期 M 美元，股数/面值除外"
[COST-PDF]: https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf#page=43 "同一公司股东年报PDF；资产负债表印刷p.37／物理p.43；排版页码与SEC HTML不同"
[COST-POLICY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1，印刷p.42，Basis of Presentation、Fiscal Year、Reclassification"
[COST-BUS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Item 1 General，印刷pp.3–4，周转与供应商付款关系"
[COST-CF]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并现金流量表印刷p.41；截至2025-08-31的52周， M 美元；股东年报PDF对应印刷p.39／物理p.45"
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
