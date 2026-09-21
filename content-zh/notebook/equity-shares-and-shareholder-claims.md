{
  "title": "权益变动、每股口径与股东所得",
  "description": "同时维护权益金额、期末股数与期间EPS分母三条桥，区分SBC、回购和普通股归属.",
  "layout": "entry",
  "notebookid": "zh-bf08",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf08"
}

从集团盈利到普通股每股所得，需要同时识别权益归属、股份数量和交易时点. 发行、回购、分红、优先股及非控制性权益都会改变这种连接.

Salesforce FY2026可以同时重建三张桥：权益金额、期末流通股数与期间EPS分母. Caterpillar的非控制性权益进一步说明：**期末余额为零时，期间利润归属仍可能包含非控制性权益损益.**

<a id="bf08-equity-bridge"></a>
## 1. 权益金额桥

权益是资产扣除负债后的剩余账面金额. 净利润会进入权益，但出资、分配、库存股和其他综合收益也会改变它. 普通股这一行通常只是按面值等记录的股本项目，不等于所有普通股股东权益，更不等于股票市值. 发行、回购的基本机制可以先用这个区别理解. [^equitybook]

下面选取Salesforce原权益变动表中**FY2025与FY2026两个完整年度窗口**，从2024年1月31日开始，保留每个变动行与全部权益列. 金额单位为 USD M，股数为 M 股；库存股股数及金额按原表作负数. [^sf]

| 原行／中文 | 普通股股数（ M 股） | 普通股金额（ M 美元） | 库存股股数（负数， M 股） | 库存股金额（负数， M 美元） | 额外实收资本（ M 美元） | 累计其他综合收益／损失（ M 美元） | 留存收益（ M 美元） | 权益合计（ M 美元） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Balance at January 31, 2024／2024-01-31期初 | 1,035 | 1 | (64) | (11,692) | 59,841 | (225) | 11,721 | 59,646 |
| Common stock issued／普通股发行 | 21 | 0 | 0 | 0 | 1,535 | 0 | 0 | 1,535 |
| Common stock repurchased／普通股回购 | 0 | 0 | (30) | (7,815) | 0 | 0 | 0 | (7,815) |
| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,200 | 0 | 0 | 3,200 |
| Other comprehensive loss, net of tax／其他综合损失税后 | 0 | 0 | 0 | 0 | 0 | (41) | 0 | (41) |
| Cash dividends declared／宣布现金股息 | 0 | 0 | 0 | 0 | 0 | 0 | (1,549) | (1,549) |
| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 6,197 | 6,197 |
| Balance at January 31, 2025／2025-01-31期末／次年期初 | 1,056 | 1 | (94) | (19,507) | 64,576 | (266) | 16,369 | 61,173 |
| Common stock issued／普通股发行 | 17 | 0 | 0 | 0 | 1,062 | 0 | 0 | 1,062 |
| Common stock withheld related to net share settlement of equity awards／股权奖励净额结算扣留普通股 | 0 | 0 | 0 | 0 | (325) | 0 | 0 | (325) |
| Common stock repurchased／普通股回购 | 0 | 0 | (50) | (12,721) | 0 | 0 | 0 | (12,721) |
| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,522 | 0 | 0 | 3,522 |
| Other comprehensive loss, net of tax／原行名为loss，本年为正额 | 0 | 0 | 0 | 0 | 0 | 579 | 0 | 579 |
| Cash dividends and dividend equivalents declared／宣布现金股息及股息等价 | 0 | 0 | 0 | 0 | 0 | 0 | (1,605) | (1,605) |
| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 7,457 | 7,457 |
| Balance at January 31, 2026／2026-01-31期末 | 1,073 | 1 | (144) | (32,228) | 68,835 | 313 | 22,221 | 59,142 |

原表FY2026那行英文仍名为“Other comprehensive loss, net of tax”，当年数值却为正579；这里保留它的原名和正号，中文按实际金额理解为权益增加. 表内股数已以 M 为单位取整，显示0也不代表没有任何零星股数变化. [^sf]

FY2026权益金额的合计为：

`61,173 + 1,062 − 325 − 12,721 + 3,522 + 579 − 1,605 + 7,457 = 59,142`.

净利润为正7,457，期末权益仍比期初少2,031，因为回购、宣布股息和奖励净额结算等权益减少超过了其余增加. 出资和股权薪酬在权益中的增加，与客户收入和经营利润来源不同；权益变动必须按各行性质拆解.

其他综合收益（OCI）记录按适用会计要求不先进入当期净利润的部分计量变化，并随后累积在AOCI中. 因此完整权益桥除净利润、分红和回购外，还必须包含原表另列的OCI 579. [^sf]

<a id="bf08-share-bridge"></a>
## 2. 期末股数与EPS分母

普通股已发行数从1,056增至1,073；库存股绝对数从94增至144. 因此流通股数由 `1,056 − 94 = 962` 变为 `1,073 − 144 = 929`，也可以写成 `962 + 17 − 50 = 929`，单位都是 M 股. [^sf]

17是原表“Common stock issued”这一行的 M 股变化，不能全部重新命名为股权薪酬发股. 发行可以来自不同员工计划及其他安排，费用的确认时点又未必和股份交付一致. 50为本期回购的取整股数，期间加权影响取决于实际发生日期.

**基本每股收益使用期间加权平均流通普通股数；稀释每股收益按相应规则考虑潜在普通股的稀释影响**. 期末股数只描述报告日状态，不能替代全年的加权平均. Salesforce Note 13使用库存股法处理相关员工奖励的稀释影响，并另表列出反稀释奖励. [^eps]

| Note 13 原行／中文 | FY2026 | FY2025 | FY2024 |
| --- | --- | --- | --- |
| Net income／净利润（ M 美元） | 7,457 | 6,197 | 4,136 |
| Weighted-average shares for basic EPS／基本加权平均（ M 股） | 950 | 962 | 974 |
| Employee stock awards／稀释性奖励增量（ M 股） | 6 | 12 | 10 |
| Weighted-average shares for diluted EPS／稀释加权平均（ M 股） | 956 | 974 | 984 |
| Excluded anti-dilutive employee stock awards／另表排除的反稀释奖励（ M 股） | 9 | 7 | 13 |

本期基本EPS可核为 `7,457 / 950 ≈ 7.85美元/股`，稀释EPS为 `7,457 / 956 ≈ 7.80美元/股`. 950加6才形成956，另列的9 M 反稀释奖励没有进入当期这个分母. 把929当作基本EPS分母，会得到约8.03，算术虽成立，却回答了另一问题，不是公司报告的基本EPS.

时间加权的作用可由一个独立教学变式说明：全年利润100，前半年100股、后半年80股，没有其他变化，基本平均股数是90，EPS约1.11；用期末80股则得到1.25. 回购越接近年末，期末数与全年平均可能相差越明显. 真实公司仍需按实际时间、工具条款和稀释规则计算，不能从两端股数反推全年平均.

<a id="bf08-sbc-buyback"></a>
## 3. SBC、结算与回购的三套口径

Salesforce FY2026披露了下列相近但口径不同的金额，单位为 M 美元；应分别按费用、现金、权益与回购披露的原表身份读取. [^sf][^buybacks]

| 事项 | 原表位置 | 金额及方向 |
| --- | --- | --- |
| Stock-based compensation expense／股权薪酬费用 | 现金流：从净利润加回 | 3,509 |
| Stock-based compensation／权益中确认 | 权益变动表增加 | 3,522 |
| Taxes related to net share settlement／净额结算税款 | 筹资现金流支出 | (351) |
| Common stock withheld／净额结算扣留 | 权益变动表减少 | (325) |
| Repurchases／年度回购金额 | Note 11披露 | 12,677 |
| Repurchases of common stock／回购付款 | 现金流量表支出 | (12,596) |
| Repurchases／库存股金额变化 | 权益变动表减少 | (12,721) |

SBC是一种劳动报酬安排. 费用进入利润后，在间接法现金流中加回，只消除该费用对经营现金流的非现金影响；劳动成本已经进入利润，潜在股份交付和稀释则进入权益与股数桥. 回购是公司用现金取得自己的股份，具有独立的现金价格和股数影响；它与SBC必须分别记录后再分析关系.

这里有两个容易混淆的“净额”. 发行股数与回购股数相减，描述本期股数的净变化；相关现金流入与回购付款相减，描述选定现金安排. 两种净额都不能替代发行价格、发生时点、费用确认和未归属奖励等信息. Note 11的回购金额12,677、现金付款12,596和权益库存股减少12,721目前没有逐项完整调节，因此三者按各自口径保留，差额不归因于单一税项或时点原因.

表内宣布股息1,605与现金股息支付1,587也分别回答“已经承诺分配多少”和“实际支付多少”. 两者的差额需由应付股息及其他时点差异调节.

<a id="bf08-nci"></a>
## 4. 非控制性权益的期间归属

Caterpillar FY2025的合并及关联公司利润为8,882，减去归属于非控制性权益的损益−2，得到归属于普通股股东的8,884. 单位 M 美元. 计算是 `8,882 − (−2) = 8,884`，不是8,880. [^cat]

NCI是合并子公司中不归属于母公司的权益. 合并报表纳入该子公司的资产、负债和经营结果后，还要把期间成果分配给相应权利人. FY2025非控制性权益承担2的亏损，因此母公司股东归属结果比合并利润高2；这一差额来自归属分配.

同年的NCI余额从3出发，经当期亏损−2及Other −1变为0：`3 − 2 − 1 = 0`. 因此，期末NCI为0与期间存在NCI损益可以同时成立；利润归属必须读取期间损益，不能仅按期末NCI余额判断. [^cat]

<a id="bf08-experiment"></a>
## 5. 权益与股数实验

<div data-experiment-slot="EXP-BF08-EQUITY-SHARES"></div>

<a id="bf08-research"></a>
<details>
<summary>研究选读：回购与股权薪酬的同期关联</summary>

Laurion与Robinson的2025年工作论文研究2010—2021年具有较大且持续SBC的公司，考察同期回购与管理层、分析师如何描述或调整SBC之间的关联. 该研究把会计上分列的SBC与回购放在同一经验样本中观察. [^research]

作者明确保留内生性限制：回购决策也受企业自身状况影响，因此样本关联不能识别Salesforce FY2026的回购动机. 论文构造的净回购指标与法定现金流行属于不同口径；SBC的费用、现金和股数影响仍按公司原表分别处理.

</details>

<a id="bf08-exercise"></a>
## 6. 每股与归属练习

**题一**. 只给净利润7,457和期末流通股数929，能否核出报告的基本EPS？还缺什么？

**解析**. 缺少期间加权平均基本股数. 本期是950 M 股，因此应算7,457／950. 929只是一年结束时的状态. 稀释EPS还要用956，而不是再把反稀释9加入.

<strong>题二. </strong>“净股数减少33 M ，所以原股东获得的收益就是33 M 乘期末股价. ”哪里不完整？

**解析**. 股数减少描述数量，不说明公司为此付出的现金价格、发行所得、发生时间或经营变化；期末股价乘净减少股数也不是原股东收到的现金. 先完成股数、权益和现金三张桥，才能讨论每股权利怎样改变. 回购是否创造价值还需要价格与经营分析，不由这一条数值直接决定.

**题三**. 若一家公司期末NCI为零，能否直接把合并净利润全当成母公司股东的全年利润？

**解析**. 不能. Caterpillar的 `3 − 2 − 1 = 0` 正是反例：期间存在NCI亏损，利润归属须按本期损益表而不是仅按期末余额. 负数的减法也必须保留.

[^equitybook]: OpenStax，[§14.2 股份发行与回购](https://openstax.org/books/principles-financial-accounting/pages/14-2-analyze-and-record-transactions-for-the-issuance-and-repurchase-of-stock)与[§14.5 每股收益](https://openstax.org/books/principles-financial-accounting/pages/14-5-discuss-the-applicability-of-earnings-per-share-as-a-method-to-measure-performance)（2019）.
[^sf]: Salesforce，[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Stockholders’ Equity，p.60；现金流pp.61–62. 本文完整选取FY2025/FY2026年度权益窗口，金额 M 美元、股数 M 股.
[^eps]: 同份[Salesforce 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 13 Net Income Per Share，pp.89–90，三期基本／稀释分母及反稀释表. Note 11说明2026与2025期末无已流通优先股.
[^buybacks]: 同份[Salesforce 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 11 Share Repurchase Program，p.85；期内回购50 M 股为取整显示，披露均价254.21美元和金额12,677 M 美元；不可由取整股数与均价相乘要求精确相等.
[^cat]: Caterpillar，[FY2025 10-K](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm)，Statement 1/2 pp.58–59与Statement 4 pp.61–62，2025利润归属及NCI余额变动. 金额 M 美元.
[^research]: Henry Laurion、Scott Robinson，[Do contemporaneous share repurchases influence managers and analysts framing stock compensation?](https://business.columbia.edu/sites/default/files-efs/imce-uploads/ADP/Spring%202026/1.%20Henry%20Laurion.pdf)，2025年9月工作论文；引言、样本构造、主要分析及结论限制. 研究对象为样本层面的同期关联，不提供Salesforce FY2026单公司回购动机识别.
