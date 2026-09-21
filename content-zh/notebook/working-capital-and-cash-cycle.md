{
  "title": "营运资本与现金周转",
  "description": "按业务匹配平均余额与期间流量，计算零售周转代理或订阅资金时钟，并区分收付款时点、利润与融资缺口.",
  "layout": "entry",
  "notebookid": "zh-bf16",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf16"
}

采购、生产、交付、收款和持续履约的时间差决定企业需要垫付多少资金. 周转天数用平均余额与期间流量概括这段占用；具体融资需求还需按日期重建收付款.

<a id="bf16-framework"></a>
## 1. 营运资本与周转天数

<strong>会计净营运资本</strong>通常指流动资产减流动负债；它提供整组短期资源与义务的视角. <strong>经营性营运资本</strong>是为一个经营问题选定的科目集合，必须说清是否包含应收、存货、预付、应付、客户预收以及其他项目. <strong>周转天数</strong>再把匹配的平均余额与期间流量相除，乘该期间天数，用来观察资金停留的速度. [^bf16-finance]

库存的平均余额与销售成本有关；应付的平均余额应尽量对应赊购额，若只能使用销售成本则保留代理身份；客户应收天数需要与客户赊销相匹配的应收和流量. 分子与分母必须属于可比业务范围和期间.

库存销售业务的现金转换周期为存货天数加客户应收天数减应付天数. 两个年末余额的平均只近似期间平均，季节性越强，近似偏差可能越大；精细分析可改用月度或逐日平均余额.

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="retail">零售：Costco</button>
<button type="button" data-select-reading-branch="subscription">订阅：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="retail">

<a id="CASE-BFDE-COST-BF16-20260921"></a>
<a id="bf16-retail"></a>
## 2. Costco存货与供应商应付

Costco FY2025、FY2024 都是52周. 下面保留本次计算所需的原表行，金额单位为 USD M. 存货和应付是两个时点余额；merchandise costs 是 FY2025 的期间成本. [^bf16-cost]

| 原行及中文 | 2025-08-31 | 2024-09-01 |
|---|---:|---:|
| Merchandise inventories／商品存货 | 18,116 | 18,647 |
| Accounts payable／应付账款 | 19,783 | 19,421 |
| Receivables, net／应收净额 | 3,203 | 2,721 |
| Deferred membership fees／递延会员费 | 2,854 | 2,501 |

FY2025的merchandise costs为239,886，天数基准为 $52\times7=364$. 存货减应付的余额为 $18,116-19,783=-1,667$，前期为 $18,647-19,421=-774$；这个分组记录库存占用与供应商信用的净关系.

### 周转天数代理

存货平均余额为 $(18,116+18,647)/2=18,381.5$；应付平均余额为 $(19,783+19,421)/2=19,602$. 使用同一期间、同一天数基准：

| 本篇计算 | 公式 | 天数 |
|---|---|---:|
| 存货天数代理 | 18,381.5 ÷ 239,886 × 364 | ≈27.892 |
| 应付天数代理 | 19,602 ÷ 239,886 × 364 | ≈29.744 |
| 两项之差 | (18,381.5 − 19,602) ÷ 239,886 × 364 | ≈−1.852 |

应付天数以merchandise costs代理赊购额；该成本行还包含运输、制造及相关作业成本. 得到的29.744天衡量平均余额相对于成本流量的规模，实际合同账期需查看付款条款.[^bf16-cost-policy]

应收净额包含供应商、信用卡奖励、再保险、第三方药房和其他应收，其他应收主要与政府及税项有关. 供应商应收通常与应付分列，仅在特定约定下净结算. 这些混合权利缺少与客户赊销匹配的拆分，无法据3,203计算客户DSO.[^bf16-cost-policy]

存货与应付代理之差约−1.852天；完整现金转换周期还缺客户DSO.

### 余额变动与现金流调整

存货减应付的余额减少893；现金流量表存货与应付调整分别为559、404，合计963. 两种口径相差70，构成尚待调节.[^bf16-cost-cf]

### 零售交易的资金路径

教学交易以教学金额为单位：第0天取得成本100的商品并形成应付；第20天以150赊销并结转100成本；第23天收款，第30天付供应商. 没有税费、其他现金或期初投入. <strong>融资前累计净现金</strong>若为负，其绝对低点定义为最低外部资金需要.

| 事件日 | 货物流转 | 现金动作 | 累计净现金 | 仍在账上的相关关系 |
|---|---|---:|---:|---|
| 0 | 存货+100 | 0 | 0 | 应付100 |
| 20 | 存货−100，确认销售与成本 | 0 | 0 | 客户应收150、应付100 |
| 23 | 无新增货物流转 | +150 | 150 | 应收结清，应付100 |
| 30 | 无新增货物流转 | −100 | 50 | 应付结清 |

默认路径的最低外部资金需要为0，利润50. 若付款提前到第10天，第10至23天融资前累计净现金为−100，需要100资金承接；最终利润仍为50.

### 零售练习与解析

把收款从第23天改到第35天，付款仍在第30天. 求最大资金缺口与结束净现金. 解析：第30天付款后为−100，第35天收款后为50，最大缺口100. 周转天数概括平均占用，安排到期资金还需每笔收付款日历.

</section>

<section data-reading-branch="subscription">

<a id="CASE-BFDE-CRM-BF16-20260921"></a>
<a id="bf16-subscription"></a>
## 3. Salesforce开票、收款与履约

Salesforce FY2026披露通常按年提前开票，典型付款期限为开票后30天. 年度开票集中于第四财季，历史上第一财季通常是收款和经营现金流最强的季度.[^bf16-season]

期末应收净额14,339、未赚取收入24,317，前期分别为11,945和20,743，单位：M 美元. 开票可同时形成应收与待履约负债，收款将应收转为现金，履约则逐步减少合同负债并确认收入.

Note 2的未赚取收入滚动如下.[^bf16-unearned]

| 原行 | FY2026， M 美元 |
|---|---:|
| Beginning unearned revenue／期初余额 | 20,743 |
| Billings and other／开票及其他 | +45,099 |
| Revenue recognized over time／随时间确认收入 | −39,041 |
| Revenue recognized at a point in time／时点确认收入 | −2,484 |
| Ending unearned revenue／期末余额 | 24,317 |

$20,743+45,099-39,041-2,484=24,317$. 开票及其他变动45,099包括汇率、合同资产和企业合并影响，其中Informatica取得余额为651. 将其连接到现金收款，还需应收及其他结算变动.

### 订阅履约的资金路径

教学合同：第0天开票120，收款权已无条件；12个教学月均匀履约，每月30天、月末确认收入10，并支付员工服务成本6. 默认第30天收齐120；同日先收款、再支付月末成本；没有退款、税费和其他业务.

| 时点 | 累计收入 | 应收 | 尚待履约余额 | 融资前累计净现金 |
|---|---:|---:|---:|---:|
| 第0天开票 | 0 | 120 | 120 | 0 |
| 第30天完成首月并收款、支付成本 | 10 | 0 | 110 | 114 |
| 第60天 | 20 | 0 | 100 | 108 |
| 第360天服务完成 | 120 | 0 | 0 | 48 |

如果收款推迟到第90天，前两个月仍需各付6，融资前最低净现金为−12；第90天先收120再付第三个月成本，变为102；最终仍为48. 收入确认及总成本不变，但资金缺口出现.

### 订阅练习与解析

保持履约和成本安排，收款改为第120天. 前三个月先付18，最大缺口18；第四个月收款并付成本后余额96，全年结束余额48. 重建Salesforce实际季度缺口则需季度开票、收款和支出资料.

</section>

<a id="bf16-experiment"></a>
## 4. 余额指标与事件现金路径

<div data-experiment-slot="EXP-BF16-CASH-CYCLES"></div>

<a id="bf16-exercise"></a>
## 5. 资金周期综合重建

<strong>综合任务. </strong>围绕所选业务，先列资金部件与时间线，再写一个可算指标和一个仍需材料的问题. 解释改变某个付款时点后，利润和资金缺口各怎样变化.

<strong>参考解析. </strong>零售路线得到约27.892天库存代理、约29.744天应付代理，客户DSO未识别；100成本／150销售的教学交易显示付款提前可产生100资金缺口. 订阅路线恢复未实现收入24,317的滚动关系，并用120合同得到收款第90天时12的资金缺口、全年利润48.

[^bf16-finance]: Dahlquist & Knight, OpenStax *Principles of Finance* (2022)，§19.1 “What Is Working Capital?”，The Cash Cycle 与 Working Capital Needs by Industry. [公开全节](https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital). 本例按364天计算，并以merchandise costs作为DPO分母代理.
[^bf16-cost]: Costco FY2025 公司年报，利润表／资产负债表／现金流表：PDF印刷pp35、37、39／物理pp41、43、45；[公司 PDF](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf). 同年[SEC 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)分别pp37、39、41. 取得日2026-09-21.
[^bf16-cost-policy]: 同一公司 PDF，Receivables, Net／Merchandise Inventories印刷pp41–42，Merchandise Costs／Vendor Consideration p46；SEC对应pp43–44、48. 应收构成包括credit card incentive、third-party pharmacy及其他应收.
[^bf16-cost-cf]: 同一 Costco 现金流量表，FY2025 inventory adjustment559、accounts payable404；70为本文两种口径的未分解核对差额.
[^bf16-season]: Salesforce FY2026 10-K，MD&A “Seasonal Nature of Unearned Revenue, Accounts Receivable and Operating Cash Flow”，pp39–40. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日2026-09-21.
[^bf16-unearned]: 同一 Salesforce 原件，资产负债表p57；Note 2 Unearned Revenue p71的完整滚动与脚注、Note 7 Informatica取得未实现收入651. 年度截至2026-01-31.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>
