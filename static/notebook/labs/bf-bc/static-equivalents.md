# 实验的完整静态等价

所有默认输入和结果均与共用引擎相同。历史数据按原表单位；四种合同、单独售价、成本流和两期税例为独立教学设定。可以不运行JavaScript完成下列任务。

<a id="EXP-BF04-ACCRUAL-TIMELINE"></a>
## BF-04 · 权责发生与报表之间的联系

四类日期可分别改变；以下为默认条款的静态结果。移动无条件权利日表示改变教学合同的权利事实。

四种固定条款、固定对价；不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎。

### 合同prepaid · 教学总价120

全年均匀服务；2026-01-01付款已无条件到期。 当前开票日：2026-01-01；实际收款日：2026-01-05。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-01 | 付款义务已无条件到期 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |
| 2026-01-01 | 开具全年账单 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |
| 2026-01-05 | 收到服务款 | 0 | 120 | 0 | 0 | 120 | 0 | 0 |
| 2026-01-31 | 完成第1个月服务 | 10 | 120 | 0 | 0 | 110 | 10 | 0 |
| 2026-02-28 | 完成第2个月服务 | 20 | 120 | 0 | 0 | 100 | 20 | 0 |
| 2026-03-31 | 完成第3个月服务 | 30 | 120 | 0 | 0 | 90 | 30 | 0 |
| 2026-04-30 | 完成第4个月服务 | 40 | 120 | 0 | 0 | 80 | 40 | 0 |
| 2026-05-31 | 完成第5个月服务 | 50 | 120 | 0 | 0 | 70 | 50 | 0 |
| 2026-06-30 | 完成第6个月服务 | 60 | 120 | 0 | 0 | 60 | 60 | 0 |
| 2026-07-31 | 完成第7个月服务 | 70 | 120 | 0 | 0 | 50 | 70 | 0 |
| 2026-08-31 | 完成第8个月服务 | 80 | 120 | 0 | 0 | 40 | 80 | 0 |
| 2026-09-30 | 完成第9个月服务 | 90 | 120 | 0 | 0 | 30 | 90 | 0 |
| 2026-10-31 | 完成第10个月服务 | 100 | 120 | 0 | 0 | 20 | 100 | 0 |
| 2026-11-30 | 完成第11个月服务 | 110 | 120 | 0 | 0 | 10 | 110 | 0 |
| 2026-12-31 | 完成第12个月服务 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同unbilled · 教学总价120

1月10日交付即取得无条件收款权；后续仅待时间经过，开票是行政步骤。 当前开票日：2026-02-01；实际收款日：2026-02-28。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 控制权转移、交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-01-10 | 收款只待时间经过 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-01 | 行政开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-28 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同conditional · 教学总价120

两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制。首项已履约，但须第二项完成后才取得整笔无条件权利。 当前开票日：2026-02-11；实际收款日：2026-03-01。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 首项独立交付完成 | 60 | 0 | 0 | 60 | 0 | 60 | 0 |
| 2026-02-10 | 第二项独立交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-02-10 | 第二项交付条件解除 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-11 | 开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-03-01 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同pos · 教学总价120

1月10日当面交付，即取得整笔无条件权利。 当前开票日：2026-01-10；实际收款日：2026-01-10。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 交付商品 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-01-10 | 取得无条件权利 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-01-10 | 开具收据 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-01-10 | 客户付款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


关键比较：1月末未开票的B已取得无条件权利，应收120；C尚附第二项交付条件，合同资产60。A在3月末现金120、合同负债90、收入30。单改开票不改权利；延迟实际收款会留下应收。

<a id="EXP-BF06-PROFIT-LAYERS"></a>
## BF-06 · 利润表：收入、成本与利润的层次

三个历史年度不能当预测；52/53周保留；不计算跨行业统一毛利排名。

### Costco Consolidated Statements of Income

SEC HTML printed p.37; MD&A Gross Margin p.27；单位：USD millions

| 原行／中文 | FY2025 · 2025-08-31 · 52周 | FY2024 · 2024-09-01 · 52周 | FY2023 · 2023-09-03 · 53周 |
| --- | --- | --- | --- |
| REVENUE／收入 |  |  |  |
| Net sales／净销售额 | 269,912 | 249,625 | 237,710 |
| Membership fees／会员费 | 5,323 | 4,828 | 4,580 |
| Total revenue／收入合计 | 275,235 | 254,453 | 242,290 |
| OPERATING EXPENSES／经营费用 |  |  |  |
| Merchandise costs／商品成本 | 239,886 | 222,358 | 212,586 |
| Selling, general and administrative／销售、一般及行政费用 | 24,966 | 22,810 | 21,590 |
| Operating income／经营利润 | 10,383 | 9,285 | 8,114 |
| OTHER INCOME (EXPENSE)／其他收益（费用） |  |  |  |
| Interest expense／利息费用 | -154 | -169 | -160 |
| Interest income and other, net／利息收入及其他净额 | 589 | 624 | 533 |
| Income before income taxes／税前利润 | 10,818 | 9,740 | 8,487 |
| Provision for income taxes／所得税费用 | 2,719 | 2,373 | 2,195 |
| Net income／净利润 | 8,099 | 7,367 | 6,292 |
| NET INCOME PER COMMON SHARE／普通股每股净利润（美元/股） |  |  |  |
| Basic／基本每股净利润 | 18.24 | 16.59 | 14.18 |
| Diluted／稀释每股净利润 | 18.21 | 16.56 | 14.16 |
| SHARES USED IN CALCULATION (000's)／计算使用股数（千股） |  |  |  |
| Basic／基本加权平均股数 | 443,985 | 443,914 | 443,854 |
| Diluted／稀释加权平均股数 | 444,803 | 444,759 | 444,452 |


| 年度 | 计算结果 |
| --- | --- |
| FY2025 · 2025-08-31 · 52周 | {"gross": 30026, "revenue": 275235, "operating": 10383, "pretax": 10818, "net": 8099, "gross_margin_percent": 11.124366460179614} |
| FY2024 · 2024-09-01 · 52周 | {"gross": 27267, "revenue": 254453, "operating": 9285, "pretax": 9740, "net": 7367, "gross_margin_percent": 10.923184777165748} |
| FY2023 · 2023-09-03 · 53周 | {"gross": 25124, "revenue": 242290, "operating": 8114, "pretax": 8487, "net": 6292, "gross_margin_percent": 10.56918093475243} |


### JPMorgan Chase Consolidated Statements of Income

Printed p.165 / physical PDF p.197；单位：USD millions

| 原行／中文 | 2025 | 2024 | 2023 |
| --- | --- | --- | --- |
| Revenue／收入 |  |  |  |
| Investment banking fees／投资银行费用收入 | 9,615 | 8,910 | 6,519 |
| Principal transactions／自营交易收入 | 27,212 | 24,787 | 24,460 |
| Lending- and deposit-related fees／贷款及存款相关费用收入 | 9,093 | 7,606 | 7,413 |
| Asset management fees／资产管理费用收入 | 20,327 | 17,801 | 15,220 |
| Commissions and other fees／佣金及其他费用收入 | 8,539 | 7,530 | 6,836 |
| Investment securities losses／投资证券收益／损失 | -57 | -1,021 | -3,180 |
| Mortgage fees and related income／按揭费用及相关收入 | 1,381 | 1,401 | 1,176 |
| Card income／银行卡收入 | 4,720 | 5,497 | 4,784 |
| Other income／其他收入 | 6,174 | 12,462 | 5,609 |
| Noninterest revenue／非利息收入 | 87,004 | 84,973 | 68,837 |
| Interest income／利息收入 | 193,341 | 193,933 | 170,588 |
| Interest expense／利息支出 | 97,898 | 101,350 | 81,321 |
| Net interest income／净利息收入 | 95,443 | 92,583 | 89,267 |
| Total net revenue／净收入合计 | 182,447 | 177,556 | 158,104 |
| Provision for credit losses／信用损失计提 | 14,212 | 10,678 | 9,320 |
| Noninterest expense／非利息费用 |  |  |  |
| Compensation expense／薪酬费用 | 54,487 | 51,357 | 46,465 |
| Occupancy expense／场地费用 | 5,461 | 5,026 | 4,590 |
| Technology, communications and equipment expense／技术、通信及设备费用 | 11,029 | 9,831 | 9,246 |
| Professional and outside services／专业及外部服务费用 | 12,356 | 11,057 | 10,235 |
| Marketing／营销费用 | 5,531 | 4,974 | 4,591 |
| Other expense／其他费用 | 6,776 | 9,552 | 12,045 |
| Total noninterest expense／非利息费用合计 | 95,640 | 91,797 | 87,172 |
| Income before income tax expense／税前利润 | 72,595 | 75,081 | 61,612 |
| Income tax expense／所得税费用 | 15,547 | 16,610 | 12,060 |
| Net income／净利润 | 57,048 | 58,471 | 49,552 |
| Net income applicable to common stockholders／归属于普通股权益的净利润 | 55,681 | 56,868 | 47,760 |
| Net income per common share data／普通股每股净利润数据（美元/股） |  |  |  |
| Basic earnings per share／基本每股净利润 | 20.05 | 19.79 | 16.25 |
| Diluted earnings per share／稀释每股净利润 | 20.02 | 19.75 | 16.23 |
| Weighted-average basic shares／基本加权平均股数（百万股） | 2,776.5 | 2,873.9 | 2,938.6 |
| Weighted-average diluted shares／稀释加权平均股数（百万股） | 2,781.5 | 2,879 | 2,943.1 |


| 年度 | 计算结果 |
| --- | --- |
| 2025 | {"noninterest": 87004, "nii": 95443, "revenue": 182447, "expenses": 95640, "pretax": 72595, "net": 57048, "common": 55681} |
| 2024 | {"noninterest": 84973, "nii": 92583, "revenue": 177556, "expenses": 91797, "pretax": 75081, "net": 58471, "common": 56868} |
| 2023 | {"noninterest": 68837, "nii": 89267, "revenue": 158104, "expenses": 87172, "pretax": 61612, "net": 49552, "common": 47760} |


零售Gross Margin按公司MD&A定义；银行NII是资金价格和业务资产所产生的差额，不贴商品毛利标签。

<a id="EXP-BF07-CASH-BRIDGE"></a>
## BF-07 · 现金流量表：经营、投资与筹资

原表与附注定义的现金集合不混同；余额差不自动替代CFO行；银行不计算工业企业FCF。

### Salesforce Consolidated Statements of Cash Flows

Printed pp.61–62。（1）D&A含取得无形资产摊销、固定资产折旧、使用权资产摊销及减值。 资产与负债变动按原表扣除企业合并影响，不能直接用两个期末余额替换。 现金集合为cash and cash equivalents。补充已付利息和税款已经体现在现金流中，不重复累加。

| 原行／中文 | FY2026 · 2026-01-31 | FY2025 · 2025-01-31 | FY2024 · 2024-01-31 |
| --- | --- | --- | --- |
| Operating activities／经营活动 |  |  |  |
| Net income／净利润 | 7,457 | 6,197 | 4,136 |
| Adjustments to reconcile net income to net cash provided by operating activities／由净利润调节至经营活动净现金 |  |  |  |
| Depreciation and amortization (1)／折旧和摊销（1） | 3,631 | 3,477 | 3,959 |
| Amortization of costs capitalized to obtain revenue contracts, net／取得收入合同资本化成本的摊销净额 | 2,197 | 2,095 | 1,925 |
| Stock-based compensation expense／股权薪酬费用 | 3,509 | 3,183 | 2,787 |
| (Gains) losses on strategic investments, net／战略投资收益／损失净额的现金流调整 | -1,017 | 121 | 277 |
| Changes in assets and liabilities, net of business combinations／资产负债变动，扣除企业合并影响 |  |  |  |
| Accounts receivable, net／应收款净额变动 | -2,160 | -490 | -659 |
| Costs capitalized to obtain revenue contracts, net／取得收入合同的资本化成本净额变动 | -2,811 | -2,121 | -1,872 |
| Prepaid expenses and other current assets and other assets／预付及其他资产变动 | 819 | -1,495 | -843 |
| Accounts payable and accrued expenses and other liabilities／应付、应计费用及其他负债变动 | 1,014 | 1,089 | -478 |
| Operating lease liabilities／经营租赁负债变动 | -567 | -548 | -621 |
| Unearned revenue／未赚取收入变动 | 2,924 | 1,584 | 1,623 |
| Net cash provided by operating activities／经营活动产生净现金 | 14,996 | 13,092 | 10,234 |
| Investing activities／投资活动 |  |  |  |
| Business combinations, net of cash acquired／企业合并，扣取得现金 | -9,268 | -2,734 | -82 |
| Purchases of strategic investments／购入战略投资 | -1,958 | -539 | -496 |
| Sales of strategic investments／出售战略投资 | 184 | 126 | 108 |
| Purchases of marketable securities／购入有价证券 | -3,763 | -6,879 | -3,761 |
| Sales of marketable securities／出售有价证券 | 4,414 | 4,143 | 1,511 |
| Maturities of marketable securities／有价证券到期 | 2,395 | 3,378 | 2,129 |
| Capital expenditures／资本支出 | -594 | -658 | -736 |
| Net cash used in investing activities／投资活动使用净现金 | -8,590 | -3,163 | -1,327 |
| Financing activities／筹资活动 |  |  |  |
| Proceeds from issuance of debt, net of issuance costs／发行债务所得，扣发行成本 | 6,000 | 0 | 0 |
| Repurchases of common stock／回购普通股现金 | -12,596 | -7,829 | -7,620 |
| Payments for taxes related to net share settlement of equity awards／股权奖励净额结算相关税款支付 | -351 | 0 | 0 |
| Proceeds from employee stock plans／员工股票计划所得 | 1,039 | 1,540 | 1,954 |
| Principal payments on financing obligations／融资义务本金支付 | -584 | -603 | -629 |
| Repayments of debt／偿还债务 | 0 | -1,000 | -1,182 |
| Payments of dividends and dividend equivalents／股息及股息等价支付 | -1,587 | -1,537 | 0 |
| Net cash used in financing activities／筹资活动使用净现金 | -8,079 | -9,429 | -7,477 |
| Effect of exchange rate changes／汇率变化影响 | 152 | -124 | 26 |
| Net increase (decrease) in cash and cash equivalents／现金及等价物净增／减 | -1,521 | 376 | 1,456 |
| Cash and cash equivalents, beginning of period／期初现金及等价物 | 8,848 | 8,472 | 7,016 |
| Cash and cash equivalents, end of period／期末现金及等价物 | 7,327 | 8,848 | 8,472 |
| Supplemental cash flow disclosure／补充现金流披露（不再加入合计） |  |  |  |
| Cash paid for interest／已付利息 | 276 | 233 | 254 |
| Cash paid for income taxes, net of tax refunds／已付所得税，扣退款 | 1,282 | 2,061 | 1,027 |


| 年度 | 期初 | CFO | CFI | CFF | 汇兑 | 计算期末 | 原表期末 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FY2026 · 2026-01-31 | 8,848 | 14,996 | -8,590 | -8,079 | 152 | 7,327 | 7,327 |
| FY2025 · 2025-01-31 | 8,472 | 13,092 | -3,163 | -9,429 | -124 | 8,848 | 8,848 |
| FY2024 · 2024-01-31 | 7,016 | 10,234 | -1,327 | -7,477 | 26 | 8,472 | 8,472 |


### Costco Consolidated Statements of Cash Flows

SEC HTML printed p.41。零值按原表破折号语义保留数值0；主表标题无金额为null，不等于0。 其他非现金经营活动净额为负不能整行解释为本期资产减值。 现金集合为cash and cash equivalents；补充的未付资本支出不加到当期现金支出。

| 原行／中文 | FY2025 · 52周 | FY2024 · 52周 | FY2023 · 53周 |
| --- | --- | --- | --- |
| CASH FLOWS FROM OPERATING ACTIVITIES／经营活动现金流 |  |  |  |
| Net income／净利润 | 8,099 | 7,367 | 6,292 |
| Adjustments to reconcile net income to net cash provided by operating activities／净利润至经营活动净现金的调整 |  |  |  |
| Depreciation and amortization／折旧及摊销 | 2,426 | 2,237 | 2,077 |
| Non-cash lease expense／非现金租赁费用 | 303 | 315 | 412 |
| Stock-based compensation／股权薪酬 | 860 | 818 | 774 |
| Impairment of assets and other non-cash operating activities, net／资产减值及其他非现金经营活动净额 | -117 | -9 | 495 |
| Changes in operating assets and liabilities／经营资产及负债变动 |  |  |  |
| Merchandise inventories／商品存货变动 | 559 | -2,068 | 1,228 |
| Accounts payable／应付账款变动 | 404 | 1,938 | -382 |
| Other operating assets and liabilities, net／其他经营资产负债净变动 | 801 | 741 | 172 |
| Net cash provided by operating activities／经营活动产生净现金 | 13,335 | 11,339 | 11,068 |
| CASH FLOWS FROM INVESTING ACTIVITIES／投资活动现金流 |  |  |  |
| Additions to property and equipment／物业及设备增加的现金支出 | -5,498 | -4,710 | -4,323 |
| Purchases of short-term investments／购买短期投资 | -1,028 | -1,470 | -1,622 |
| Maturities of short-term investments／短期投资到期 | 1,141 | 1,790 | 937 |
| Other investing activities, net／其他投资活动净额 | 74 | -19 | 36 |
| Net cash used in investing activities／投资活动使用净现金 | -5,311 | -4,409 | -4,972 |
| CASH FLOWS FROM FINANCING ACTIVITIES／筹资活动现金流 |  |  |  |
| Repayments of short-term borrowings／偿还短期借款 | -862 | -920 | -935 |
| Proceeds from short-term borrowings／短期借款所得 | 816 | 928 | 917 |
| Repayments of long-term debt／偿还长期债务 | -103 | -1,077 | -75 |
| Proceeds from issuance of long-term debt／长期债务所得 | 0 | 498 | 0 |
| Tax withholdings on stock-based awards／股票奖励代扣税款 | -393 | -315 | -303 |
| Repurchases of common stock／回购普通股 | -903 | -700 | -676 |
| Cash dividend payments／支付股息 | -2,183 | -9,041 | -1,251 |
| Financing lease payments and other financing activities, net／融资租赁支付及其他筹资净额 | -147 | -137 | -291 |
| Net cash used in financing activities／筹资活动使用净现金 | -3,775 | -10,764 | -2,614 |
| Effect of exchange rate changes on cash and cash equivalents／汇率变化对现金及等价物影响 | 6 | 40 | 15 |
| Net change in cash and cash equivalents／现金及等价物净变动 | 4,255 | -3,794 | 3,497 |
| Cash and cash equivalents, beginning of year／期初现金及等价物 | 9,906 | 13,700 | 10,203 |
| Cash and cash equivalents, end of year／期末现金及等价物 | 14,161 | 9,906 | 13,700 |
| SUPPLEMENTAL DISCLOSURE OF CASH FLOW INFORMATION／补充披露（不重复加总） |  |  |  |
| Cash paid during the year for interest／年内已付利息 | 106 | 129 | 125 |
| Income taxes, net／年内已付所得税净额 | 2,917 | 2,319 | 2,234 |
| SUPPLEMENTAL DISCLOSURE OF NON-CASH ACTIVITIES／非现金活动补充披露 |  |  |  |
| Dividends declared, but not yet paid／已宣布而未支付股息 | 0 | 0 | 452 |
| Capital expenditures included in liabilities／列入负债的资本支出 | 193 | 203 | 170 |


| 年度 | 期初 | CFO | CFI | CFF | 汇兑 | 计算期末 | 原表期末 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FY2025 · 52周 | 9,906 | 13,335 | -5,311 | -3,775 | 6 | 14,161 | 14,161 |
| FY2024 · 52周 | 13,700 | 11,339 | -4,409 | -10,764 | 40 | 9,906 | 9,906 |
| FY2023 · 53周 | 10,203 | 11,068 | -4,972 | -2,614 | 15 | 13,700 | 13,700 |


### JPMorgan Chase Consolidated Statements of Cash Flows

Printed p.169 / physical PDF p.201。此表以原页重新排版；行名称保留业务含义，原文图像位于PDF第201页。 JPM现金集合为cash and due from banks and deposits with banks，不能改称普通公司cash equivalents。 变化和合计按原表符号；经营资产扩张与客户存款筹资分属不同活动类别。

| 原行／中文 | 2025 | 2024 | 2023 |
| --- | --- | --- | --- |
| Operating activities／经营活动 |  |  |  |
| Net income／净利润 | 57,048 | 58,471 | 49,552 |
| Provision for credit losses／信用损失计提 | 14,212 | 10,678 | 9,320 |
| Depreciation and amortization／折旧摊销 | 8,821 | 7,938 | 7,512 |
| Deferred tax expense (benefit)／递延所得税费用／利益 | 5,611 | 2,004 | -4,534 |
| Bargain purchase gain associated with First Republic acquisition／First Republic收购廉价购买收益调整 | 0 | -103 | -2,775 |
| Initial gain on Visa exchange／Visa交换初始收益调整 | 0 | -7,990 | 0 |
| Other adjustments／其他调整 | 1,309 | 1,985 | 4,301 |
| Originations and purchases of loans held-for-sale／待售贷款发放及购买 | -260,772 | -212,238 | -115,245 |
| Proceeds from sales, securitizations and paydowns of loans held-for-sale／待售贷款出售、证券化及偿还所得 | 235,232 | 205,303 | 116,430 |
| Trading assets／交易资产变动 | -156,461 | -95,729 | -74,091 |
| Securities borrowed／借入证券变动 | -66,648 | -18,762 | -14,902 |
| Accrued interest and accounts receivable／应计利息和应收账款变动 | -11,514 | 5,735 | 19,928 |
| Other assets／其他资产变动 | -12,582 | -7,650 | 32,970 |
| Trading liabilities／交易负债变动 | 23,134 | 2,276 | 5,315 |
| Accounts payable and other liabilities／应付及其他负债变动 | 5,270 | -90 | -25,388 |
| Other operating adjustments／其他经营调整 | 9,558 | 6,160 | 4,581 |
| Net cash provided by (used in) operating activities／经营活动产生／使用净现金 | -147,782 | -42,012 | 12,974 |
| Investing activities／投资活动 |  |  |  |
| Federal funds sold and securities purchased under resale agreements／拆出联邦基金及买入返售变动 | -41,264 | -18,706 | 39,740 |
| Proceeds from maturities and paydowns of held-to-maturity securities／HTM到期偿还所得 | 54,791 | 99,363 | 53,056 |
| Purchases of held-to-maturity securities／买入HTM | -5,432 | -4,709 | -4,141 |
| Proceeds from maturities and paydowns of available-for-sale securities／AFS到期偿还所得 | 37,414 | 38,499 | 53,744 |
| Proceeds from sales of available-for-sale securities／出售AFS所得 | 141,295 | 104,625 | 108,434 |
| Purchases of available-for-sale securities／购入AFS | -308,772 | -352,712 | -115,499 |
| Proceeds from sales and securitizations of loans held-for-investment／留存投资贷款出售及证券化所得 | 57,565 | 57,921 | 47,312 |
| Other changes in loans, net／其他贷款净变动 | -188,497 | -83,176 | -88,343 |
| Cash paid for First Republic acquisition／First Republic收购现金支出 | 0 | -2,362 | -9,920 |
| All other investing activities, net／其他投资活动净额 | -12,665 | -2,146 | -16,740 |
| Net cash provided by (used in) investing activities／投资活动产生／使用净现金 | -265,565 | -163,403 | 67,643 |
| Financing activities／筹资活动 |  |  |  |
| Deposits／客户存款变动 | 153,168 | 3,299 | -32,196 |
| Federal funds purchased and securities loaned or sold under repurchase agreements／拆入联邦基金及证券出借／回购变动 | 145,535 | 80,288 | 13,801 |
| Short-term borrowings／短期借款变动 | 9,422 | 7,439 | -1,934 |
| Beneficial interests issued by consolidated VIEs／合并VIE发行受益权变动 | -622 | 1,543 | 9,029 |
| Proceeds from long-term borrowings／长期借款所得 | 120,761 | 109,915 | 75,417 |
| Payments of long-term borrowings／偿还长期借款 | -108,100 | -96,605 | -64,880 |
| Proceeds from issuance of preferred stock／发行优先股所得 | 3,000 | 2,500 | 0 |
| Redemption of preferred stock／赎回优先股 | -3,000 | -9,850 | 0 |
| Treasury stock repurchased／购买库存股 | -31,591 | -18,830 | -9,824 |
| Dividends paid／支付股息 | -16,625 | -14,783 | -13,463 |
| All other financing activities, net／其他筹资活动净额 | -2,415 | -1,469 | -1,521 |
| Net cash provided by (used in) financing activities／筹资活动产生／使用净现金 | 269,533 | 63,447 | -25,571 |
| Effect of exchange rate changes／汇率变化影响 | 17,835 | -12,866 | 1,871 |
| Net increase (decrease) in cash and due from banks and deposits with banks／指定现金集合净变动 | -125,979 | -154,834 | 56,917 |
| Cash and due from banks and deposits with banks, beginning of year／期初现金、应收银行款及存放银行款 | 469,317 | 624,151 | 567,234 |
| Cash and due from banks and deposits with banks, end of year／期末现金、应收银行款及存放银行款 | 343,338 | 469,317 | 624,151 |
| Supplemental disclosures of cash flow information／补充披露 |  |  |  |
| Cash interest paid／已付现金利息 | 96,436 | 99,642 | 77,114 |
| Income taxes paid, net／已付所得税净额 | 5,309 | 11,715 | 9,908 |


| 年度 | 期初 | CFO | CFI | CFF | 汇兑 | 计算期末 | 原表期末 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2025 | 469,317 | -147,782 | -265,565 | 269,533 | 17,835 | 343,338 | 343,338 |
| 2024 | 624,151 | -42,012 | -163,403 | 63,447 | -12,866 | 469,317 | 469,317 |
| 2023 | 567,234 | 12,974 | 67,643 | -25,571 | 1,871 | 624,151 | 624,151 |


SF七项重点合计14,747，另四行−1,017+819+1,014−567=249，共14,996。Costco选定余额反向变化893与现金流调整963差70，保留未归因。

<a id="EXP-BF08-EQUITY-SHARES"></a>
## BF-08 · 权益变动、每股口径与股东所得

三桥各自单位与时点；排除反稀释奖励；不通过把SBC和回购抵销来断言无成本。

| 权益原行／中文 | 普通股股数（百万股） | 普通股金额（百万美元） | 库存股股数（负数，百万股） | 库存股金额（负数，百万美元） | 额外实收资本（百万美元） | 累计其他综合收益／损失（百万美元） | 留存收益（百万美元） | 权益合计（百万美元） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Balance at January 31, 2024／2024-01-31期初 | 1,035 | 1 | -64 | -11,692 | 59,841 | -225 | 11,721 | 59,646 |
| Common stock issued／普通股发行 | 21 | 0 | 0 | 0 | 1,535 | 0 | 0 | 1,535 |
| Common stock repurchased／普通股回购 | 0 | 0 | -30 | -7,815 | 0 | 0 | 0 | -7,815 |
| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,200 | 0 | 0 | 3,200 |
| Other comprehensive loss, net of tax／其他综合损失税后 | 0 | 0 | 0 | 0 | 0 | -41 | 0 | -41 |
| Cash dividends declared／宣布现金股息 | 0 | 0 | 0 | 0 | 0 | 0 | -1,549 | -1,549 |
| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 6,197 | 6,197 |
| Balance at January 31, 2025／2025-01-31期末／次年期初 | 1,056 | 1 | -94 | -19,507 | 64,576 | -266 | 16,369 | 61,173 |
| Common stock issued／普通股发行 | 17 | 0 | 0 | 0 | 1,062 | 0 | 0 | 1,062 |
| Common stock withheld related to net share settlement of equity awards／股权奖励净额结算扣留普通股 | 0 | 0 | 0 | 0 | -325 | 0 | 0 | -325 |
| Common stock repurchased／普通股回购 | 0 | 0 | -50 | -12,721 | 0 | 0 | 0 | -12,721 |
| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,522 | 0 | 0 | 3,522 |
| Other comprehensive loss, net of tax／原行名为loss，本年为正额 | 0 | 0 | 0 | 0 | 0 | 579 | 0 | 579 |
| Cash dividends and dividend equivalents declared／宣布现金股息及股息等价 | 0 | 0 | 0 | 0 | 0 | 0 | -1,605 | -1,605 |
| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 7,457 | 7,457 |
| Balance at January 31, 2026／2026-01-31期末 | 1,073 | 1 | -144 | -32,228 | 68,835 | 313 | 22,221 | 59,142 |


| 口径 | 分子：百万美元 | 分母：百万股 | 美元／股 |
| --- | --- | --- | --- |
| 报告基本EPS | 7,457 | 950 | 7.849474 |
| 报告稀释EPS | 7,457 | 956 | 7.800209 |
| 错误口径对照：期末股数 | 7,457 | 929 | 8.026911 |


期末流通：1,073−144=929；期初：1,056−94=962。NCI利润归属8,882−(−2)=8,884；余额3−2−1=0。

SBC费用3,509、权益3,522、结算现金351分开；回购附注12,677、现金12,596、权益12,721分开，不强行抵销。

<a id="EXP-BF09-EVIDENCE"></a>
## BF-09 · 财报附注、会计估计与审计信息

单独售价模型是教学设定；仅对给定distinct obligations和履约模式；CAM不是独立意见。

| 证据层 | 能回答 | 需要继续取得 |
| --- | --- | --- |
| 主表 | 合并收入41,525与期间 | 合同义务、确认政策和估计 |
| 政策及Note2 | 控制权、相对单独售价及余额范围 | 实际合同及SSP证据 |
| CAM | 审计中复杂判断及应对程序 | 不能据此给公司打分或视作单独意见 |


| 教学单独售价 | 许可分配 | 支持分配 | 首月累计收入 |
| --- | --- | --- | --- |
| 100／50 | 80 | 40 | 83.333333 |
| 80／80 | 60 | 60 | 65 |


反馈：选B正确——CAM说明复杂审计判断和应对。A错把CAM当错报结论；C把披露沟通变成公司排名。

<a id="EXP-BF10-CONTRACT-TIMING"></a>
## BF-10 · 收入、应收与合同余额

四类日期可分别改变；以下为默认条款的静态结果。移动无条件权利日表示改变教学合同的权利事实。

只比较四份明确条款；现实合同的条件要由人读取；不将所有未开票款归为CA。

### 合同prepaid · 教学总价120

全年均匀服务；2026-01-01付款已无条件到期。 当前开票日：2026-01-01；实际收款日：2026-01-05。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-01 | 付款义务已无条件到期 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |
| 2026-01-01 | 开具全年账单 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |
| 2026-01-05 | 收到服务款 | 0 | 120 | 0 | 0 | 120 | 0 | 0 |
| 2026-01-31 | 完成第1个月服务 | 10 | 120 | 0 | 0 | 110 | 10 | 0 |
| 2026-02-28 | 完成第2个月服务 | 20 | 120 | 0 | 0 | 100 | 20 | 0 |
| 2026-03-31 | 完成第3个月服务 | 30 | 120 | 0 | 0 | 90 | 30 | 0 |
| 2026-04-30 | 完成第4个月服务 | 40 | 120 | 0 | 0 | 80 | 40 | 0 |
| 2026-05-31 | 完成第5个月服务 | 50 | 120 | 0 | 0 | 70 | 50 | 0 |
| 2026-06-30 | 完成第6个月服务 | 60 | 120 | 0 | 0 | 60 | 60 | 0 |
| 2026-07-31 | 完成第7个月服务 | 70 | 120 | 0 | 0 | 50 | 70 | 0 |
| 2026-08-31 | 完成第8个月服务 | 80 | 120 | 0 | 0 | 40 | 80 | 0 |
| 2026-09-30 | 完成第9个月服务 | 90 | 120 | 0 | 0 | 30 | 90 | 0 |
| 2026-10-31 | 完成第10个月服务 | 100 | 120 | 0 | 0 | 20 | 100 | 0 |
| 2026-11-30 | 完成第11个月服务 | 110 | 120 | 0 | 0 | 10 | 110 | 0 |
| 2026-12-31 | 完成第12个月服务 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同unbilled · 教学总价120

1月10日交付即取得无条件收款权；后续仅待时间经过，开票是行政步骤。 当前开票日：2026-02-01；实际收款日：2026-02-28。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 控制权转移、交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-01-10 | 收款只待时间经过 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-01 | 行政开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-28 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同conditional · 教学总价120

两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制。首项已履约，但须第二项完成后才取得整笔无条件权利。 当前开票日：2026-02-11；实际收款日：2026-03-01。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 首项独立交付完成 | 60 | 0 | 0 | 60 | 0 | 60 | 0 |
| 2026-02-10 | 第二项独立交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-02-10 | 第二项交付条件解除 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-02-11 | 开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-03-01 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


### 合同pos · 教学总价120

1月10日当面交付，即取得整笔无条件权利。 当前开票日：2026-01-10；实际收款日：2026-01-10。假设合同在首个事件前有效成立。改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同。

| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-01-10 | 交付商品 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |
| 2026-01-10 | 取得无条件权利 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-01-10 | 开具收据 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |
| 2026-01-10 | 客户付款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |


关键比较：1月末未开票的B已取得无条件权利，应收120；C尚附第二项交付条件，合同资产60。A在3月末现金120、合同负债90、收入30。单改开票不改权利；延迟实际收款会留下应收。

<a id="EXP-BF11-INVENTORY-VIEW"></a>
## BF-11 · 存货、销售成本与减值

历史混合LIFO/FIFO总额与教学商品分开；不倒推真实采购COGS完整桥；不演示减记转回。

| CAT阶段 | 2025 | 2024 |
| --- | --- | --- |
| Raw materials／原材料 | 7,434 | 6,681 |
| Work-in-process／在制品 | 1,598 | 1,438 |
| Finished goods／产成品 | 8,725 | 8,329 |
| Supplies／用品 | 378 | 379 |


| 口径 | 2025 | 2024 |
| --- | --- | --- |
| 报告总额 | 18,135 | 16,827 |
| 实际LIFO占比（%） | 70 | 65 |
| FIFO调整 | 4,305 | 3,864 |
| FIFO可比总额 | 22,440 | 20,691 |


| 独立教学批次的成本去向 | 教学单位 |
| --- | --- |
| 取得成本 | 100 |
| 销售成本 | 60 |
| 减记 | 8 |
| 留存库存 | 32 |
| 收入 | 90 |
| 利润 | 22 |


销售数量6、单位成本10、售价15、期末每件NRV8；只对余下4件减记。成本100=60+8+32，收入90，利润22。NRV升至10则减记0、库存40、利润30；全部卖完则没有在手库存减记。

<a id="EXP-BF15-TAX-LAYERS"></a>
## BF-15 · 所得税费用、现金税与递延税项

区间需正分母不穿0；不补造税率差异成因；税费、现金和期末余额不连成连续瀑布。

| 三个独立组 | 公式／结果 |
| --- | --- |
| 当期税+递延税 | 1,104+959=2,063 |
| 已付现金税 | 658+132+92+400=1,282 |
| 期末递延余额 | 6,171−967=5,204；5,204−3,144=2,060 |


| 取整检验 | % |
| --- | --- |
| 机械率 | 21.670168 |
| 原列示 | 21.5 |
| 下界 | 21.663778 |
| 上界 | 21.676559 |


| 教学年度 | 账面税前 | 应税 | 当期税 | 递延税 | 税费 | 现金税 | 期末DTA | 应交 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | 200 | 50 | -25 | 25 | 50 | 25 | 0 |
| 2 | 200 | 100 | 25 | 25 | 50 | 25 | 0 | 0 |


金额取整区间不含21.5%；两种原件/复算结果并存，不补造原因。两期教学采用每年特殊费用前利润200、第一年账面费用100、第二年支付且扣除、税率25%、当期税当年付清，无其他差异和备抵，有充分适当的未来应税利润。