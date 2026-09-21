# 权益变动、每股口径与股东所得

同时维护权益金额、期末股数与期间EPS分母三条桥，区分SBC、回购和普通股归属.

Entry: zh-bf08 | Node: BF-08 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你现在教授BF-08《权益变动、每股口径与股东所得》. 对象是有微积分、线性代数及基本概率基础，但不假定受过会计训练的高年级本科至研究生. 先确认本篇行业/扩展分支和学习任务. 在讲解前，使用读取工具实际取得agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件）. optional_readings只有选中相应研究/扩展时才转为必读. 记录标题、版本、实际范围以及支持当前教学的关键设定；runtime_reading_log初始为空，不以编辑访问或参考清单冒充本次已读. 访问失败时尝试同版本官方等价正文；仍缺失就指出具体缺口，不拿摘要代替承重单元. 诊断任务：让读者分别重建FY2026权益59142、期末流通929、EPS分母950/956. 沿当前同源正文、静态表和supplied_inputs逐段推进，先让读者分析再反馈，已会步骤直接跳过. 判断理解的尺度：不得把17全部命名SBC；不得用929算报告EPS；SBC与回购不同金额保持身份；NCI减负得加. 最后迁移：利润100、半年前100股后80股，比较平均90与期末80的用途. 保留历史观测与教学设定身份、单位、期间、未解释差额；不得从本篇生成新估值或账户建议.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "BBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-financial-accounting/pages/14-2-analyze-and-record-transactions-for-the-issuance-and-repurchase-of-stock"
      },
      "required_unit": {
        "locator": "§14.2全文",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "发行、库存股与回购"
      },
      "supports": "普通股发行、库存股和回购机制.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Principles of Accounting, Volume 1: Financial Accounting — §14.2 Analyze and Record Transactions for the Issuance and Repurchase of Stock",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper"
      ],
      "version": "OpenStax 2019"
    },
    {
      "source_id": "BBC-S09",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-financial-accounting/pages/14-5-discuss-the-applicability-of-earnings-per-share-as-a-method-to-measure-performance"
      },
      "required_unit": {
        "locator": "§14.5全文",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "期间EPS分母"
      },
      "supports": "基本每股收益和期间加权分母；真实稀释规则使用公司附注.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Principles of Accounting, Volume 1: Financial Accounting — §14.5 Discuss the Applicability of Earnings per Share as a Method to Measure Performance",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper"
      ],
      "version": "OpenStax 2019"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Equity p.60两个完整年度窗口；Cash Flows pp.61–62；Note11 Share Repurchases p.85；Note13 EPS pp.89–90",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "三桥与各自原始口径"
      },
      "supports": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "Fiscal year ended 2026-01-31"
    },
    {
      "source_id": "BBC-C04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm"
      },
      "required_unit": {
        "locator": "Statement1/2归属单元pp.58–59；Statement4完整NCI两期窗口pp.61–62",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "NCI利润与余额不是同一对象"
      },
      "supports": "制造库存四阶段、部分LIFO与FIFO可比调整，以及NCI利润/权益归属；公司同时包含Financial Products.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Caterpillar Inc. FY2025 Form 10-K",
      "authors": [
        "Caterpillar Inc."
      ],
      "version": "Year ended 2025-12-31"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BBC-R01",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://business.columbia.edu/sites/default/files-efs/imce-uploads/ADP/Spring%202026/1.%20Henry%20Laurion.pdf"
      },
      "required_unit": {
        "locator": "Introduction；样本与变量；主要分析；结论和内生性限制",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "将会计交易与管理层/分析师叙述区分"
      },
      "supports": "股权薪酬和同期回购的经济叙述研究；本篇只采用研究设计与关联性/内生性边界，不判定Salesforce动机.",
      "branch": "research",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "canonical_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
    "selected_keys": [
      "sf_equity",
      "sf_eps",
      "sf_equity_comparison",
      "cat_nci",
      "synthetic.share_weighting"
    ],
    "data": {
      "sf_equity": {
        "source_id": "BBC-C01",
        "locator": "Consolidated Statements of Stockholders’ Equity, printed p.60",
        "identity": "historical_observation",
        "columns": [
          "普通股股数（ M 股）",
          "普通股金额（ M 美元）",
          "库存股股数（负数， M 股）",
          "库存股金额（负数， M 美元）",
          "额外实收资本（ M 美元）",
          "累计其他综合收益／损失（ M 美元）",
          "留存收益（ M 美元）",
          "权益合计（ M 美元）"
        ],
        "rows": [
          [
            "Balance at January 31, 2024",
            "2024-01-31期初",
            1035,
            1,
            -64,
            -11692,
            59841,
            -225,
            11721,
            59646
          ],
          [
            "Common stock issued",
            "普通股发行",
            21,
            0,
            0,
            0,
            1535,
            0,
            0,
            1535
          ],
          [
            "Common stock repurchased",
            "普通股回购",
            0,
            0,
            -30,
            -7815,
            0,
            0,
            0,
            -7815
          ],
          [
            "Stock-based compensation",
            "股权薪酬",
            0,
            0,
            0,
            0,
            3200,
            0,
            0,
            3200
          ],
          [
            "Other comprehensive loss, net of tax",
            "其他综合损失税后",
            0,
            0,
            0,
            0,
            0,
            -41,
            0,
            -41
          ],
          [
            "Cash dividends declared",
            "宣布现金股息",
            0,
            0,
            0,
            0,
            0,
            0,
            -1549,
            -1549
          ],
          [
            "Net income",
            "净利润",
            0,
            0,
            0,
            0,
            0,
            0,
            6197,
            6197
          ],
          [
            "Balance at January 31, 2025",
            "2025-01-31期末／次年期初",
            1056,
            1,
            -94,
            -19507,
            64576,
            -266,
            16369,
            61173
          ],
          [
            "Common stock issued",
            "普通股发行",
            17,
            0,
            0,
            0,
            1062,
            0,
            0,
            1062
          ],
          [
            "Common stock withheld related to net share settlement of equity awards",
            "股权奖励净额结算扣留普通股",
            0,
            0,
            0,
            0,
            -325,
            0,
            0,
            -325
          ],
          [
            "Common stock repurchased",
            "普通股回购",
            0,
            0,
            -50,
            -12721,
            0,
            0,
            0,
            -12721
          ],
          [
            "Stock-based compensation",
            "股权薪酬",
            0,
            0,
            0,
            0,
            3522,
            0,
            0,
            3522
          ],
          [
            "Other comprehensive loss, net of tax",
            "原行名为loss，本年为正额",
            0,
            0,
            0,
            0,
            0,
            579,
            0,
            579
          ],
          [
            "Cash dividends and dividend equivalents declared",
            "宣布现金股息及股息等价",
            0,
            0,
            0,
            0,
            0,
            0,
            -1605,
            -1605
          ],
          [
            "Net income",
            "净利润",
            0,
            0,
            0,
            0,
            0,
            0,
            7457,
            7457
          ],
          [
            "Balance at January 31, 2026",
            "2026-01-31期末",
            1073,
            1,
            -144,
            -32228,
            68835,
            313,
            22221,
            59142
          ]
        ],
        "notes": [
          "连续选取FY2025–2026完整年度权益变动；原表另有FY2024，未纳入此处年度窗口.",
          "股数以 M 为单位取整，显示0不证明没有股数变动；17不得全部标为SBC发股.",
          "原表Other comprehensive loss, net of tax在FY2026列正579，按原符号保留."
        ]
      },
      "sf_eps": {
        "source_id": "BBC-C01",
        "locator": "Note 13, printed pp.89–90",
        "periods": [
          "FY2026",
          "FY2025",
          "FY2024"
        ],
        "net_income": [
          7457,
          6197,
          4136
        ],
        "basic_shares_m": [
          950,
          962,
          974
        ],
        "dilutive_awards_m": [
          6,
          12,
          10
        ],
        "diluted_shares_m": [
          956,
          974,
          984
        ],
        "antidilutive_awards_m": [
          9,
          7,
          13
        ],
        "reported_basic_eps": [
          7.85,
          6.44,
          4.25
        ],
        "reported_diluted_eps": [
          7.8,
          6.36,
          4.2
        ],
        "identity": "historical_observation"
      },
      "sf_equity_comparison": {
        "source_id": "BBC-C01",
        "locator": "Statements of Equity/Cash Flows; Note 11",
        "sbc_expense": 3509,
        "sbc_equity": 3522,
        "share_settlement_cash_tax": 351,
        "share_withholding_equity": 325,
        "repurchase_note": 12677,
        "repurchase_cash": 12596,
        "repurchase_equity": 12721,
        "repurchase_shares_m": 50,
        "repurchase_avg_price": 254.21,
        "identity": "historical_observation",
        "unit": "USD M except shares million and average price USD/share"
      },
      "cat_nci": {
        "source_id": "BBC-C04",
        "locator": "Statements 1/2 pp.58–59; Statement 4 pp.61–62",
        "year": 2025,
        "profit_consolidated_affiliates": 8882,
        "nci_profit": -2,
        "profit_common": 8884,
        "opening_nci": 3,
        "other_nci": -1,
        "closing_nci": 0,
        "unit": "USD M",
        "identity": "historical_observation"
      },
      "synthetic": {
        "share_weighting": {
          "id": "SYN-SHARE-01",
          "data_identity": "teaching_assumption",
          "profit": 100,
          "first_half_shares": 100,
          "second_half_shares": 80,
          "first_half_weight": 0.5,
          "unit": "arbitrary currency / shares",
          "terms": "Two equal half-year intervals; no preferred distributions or other share changes."
        }
      }
    },
    "default_results_file": "labs/default-results.json"
  },
  "diagnosis": "让读者分别重建FY2026权益59142、期末流通929、EPS分母950/956.",
  "feedback_criteria": "不得把17全部命名SBC；不得用929算报告EPS；SBC与回购不同金额保持身份；NCI减负得加.",
  "transfer_task": "利润100、半年前100股后80股，比较平均90与期末80的用途.",
  "experiment_ids": [
    "EXP-BF08-EQUITY-SHARES"
  ]
}
```

## Supplied entry
公司净利润增长，并不等于原有普通股股东按同样比例变得更富. 公司可能发行股票、回购股份、分红，也可能有优先股或少数股东. 要从公司总额走到普通股每股口径，我们需要把权益金额、流通股数和期间平均股数分别记清，再看它们如何联系.

这一篇以Salesforce FY2026为主. 我们会重建三张桥，而不是把所有项目塞进一行“净回购”. 最后用Caterpillar的少数权益说明：**期末余额很小，甚至为零，仍可能在期间利润归属中有作用.**

<a id="bf08-equity-bridge"></a>
## 1. 先看权益原表：并非每项增加都是盈利

权益是资产扣除负债后的剩余账面金额. 净利润会进入权益，但出资、分配、库存股和其他综合收益也会改变它. 普通股这一行通常只是按面值等记录的股本项目，不等于所有普通股股东权益，更不等于股票市值. 发行、回购的基本机制可以先用这个区别理解. [^equitybook]

下面选取Salesforce原权益变动表中**FY2025与FY2026两个完整年度窗口**，从2024年1月31日开始，保留每个变动行与全部权益列. 金额单位为 USD M，股数为 M 股；库存股股数及金额按原表作负数. 原年报还列出更早年度，此处没有把它混入这两个年度的期初. [^sf]

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

现在只沿最后一列走FY2026：

`61,173 + 1,062 − 325 − 12,721 + 3,522 + 579 − 1,605 + 7,457 = 59,142`.

净利润为正7,457，期末权益却比期初少2,031. 原因并不神秘：回购、宣布股息和奖励净额结算等权益减少超过了其余增加. 出资和股权薪酬在权益中的增加，与客户收入和经营利润不是同一种来源. 理解这些方向，才不会把“权益减少”自动判作亏损，或者把“权益增加”都说成公司赚到了钱.

其他综合收益（OCI）这一层也值得保留：有些计量变化按适用会计要求不先进入当期净利润，而进入其他综合收益，随后累积在AOCI中. 因此，“净利润 + 分红回购”不是完整权益桥；原表中另列的579不能直接丢掉. [^sf]

<a id="bf08-share-bridge"></a>
## 2. 再看股数：发行、流通和期间平均不同

普通股已发行数从1,056增至1,073；库存股绝对数从94增至144. 因此流通股数由 `1,056 − 94 = 962` 变为 `1,073 − 144 = 929`，也可以写成 `962 + 17 − 50 = 929`，单位都是 M 股. [^sf]

17是原表“Common stock issued”这一行的 M 股变化，不能全部重新命名为股权薪酬发股. 发行可以来自不同员工计划及其他安排，费用的确认时点又未必和股份交付一致. 相同地，50是本期回购的取整股数，不是每一天都有50 M 股从流通中消失.

这就引出了EPS分母. **基本每股收益使用期间加权平均流通普通股数；稀释每股收益按相应规则考虑潜在普通股的稀释影响**. 期末股数只描述最后一天，不能替代全年的加权平均. Salesforce Note 13使用库存股法处理相关员工奖励的稀释影响，并另表列出反稀释奖励. [^eps]

| Note 13 原行／中文 | FY2026 | FY2025 | FY2024 |
| --- | --- | --- | --- |
| Net income／净利润（ M 美元） | 7,457 | 6,197 | 4,136 |
| Weighted-average shares for basic EPS／基本加权平均（ M 股） | 950 | 962 | 974 |
| Employee stock awards／稀释性奖励增量（ M 股） | 6 | 12 | 10 |
| Weighted-average shares for diluted EPS／稀释加权平均（ M 股） | 956 | 974 | 984 |
| Excluded anti-dilutive employee stock awards／另表排除的反稀释奖励（ M 股） | 9 | 7 | 13 |


本期基本EPS可核为 `7,457 / 950 ≈ 7.85美元/股`，稀释EPS为 `7,457 / 956 ≈ 7.80美元/股`. 950加6才形成956，另列的9 M 反稀释奖励没有进入当期这个分母. 把929当作基本EPS分母，会得到约8.03，算术虽成立，却回答了另一问题，不是公司报告的基本EPS.

为什么时间加权不能省略？做一个独立教学变式：全年利润100，前半年100股、后半年80股，没有其他变化，基本平均股数是90，EPS约1.11；期末80股算出1.25. 回购越接近年末，期末数与全年平均就可能相差越明显. 真实公司还要按实际时间、工具条款和稀释规则处理，不能从两端股数反推全年平均.

<a id="bf08-sbc-buyback"></a>
## 3. 把SBC、结算与回购分别放回各自的表

Salesforce FY2026披露了下面这些相近但不相同的金额. 单位为 M 美元. 表的目的不是强迫它们相等，而是先认清各自记录什么. [^sf][^buybacks]

| 事项 | 原表位置 | 金额及方向 |
| --- | --- | --- |
| Stock-based compensation expense／股权薪酬费用 | 现金流：从净利润加回 | 3,509 |
| Stock-based compensation／权益中确认 | 权益变动表增加 | 3,522 |
| Taxes related to net share settlement／净额结算税款 | 筹资现金流支出 | (351) |
| Common stock withheld／净额结算扣留 | 权益变动表减少 | (325) |
| Repurchases／年度回购金额 | Note 11披露 | 12,677 |
| Repurchases of common stock／回购付款 | 现金流量表支出 | (12,596) |
| Repurchases／库存股金额变化 | 权益变动表减少 | (12,721) |


SBC首先是一种劳动报酬安排. 费用进入利润后，在间接法现金流中加回，说明该笔费用没有作为同额现金支出在经营部分再付一次；这不把劳动变成免费，也不消除潜在的股份交付和稀释. 另一方面，回购是公司拿现金取得自己的股份，它既有现金价格，也影响流通股数，不能仅因为与SBC同年出现，就宣布两者完全抵消.

这里有两个容易混淆的“净额”. 发行股数与回购股数相减，描述本期股数的净变化；相关现金流入与回购付款相减，描述选定现金安排. 两种净额都不能替代发行价格、发生时点、费用确认和未归属奖励等信息. Note 11的回购金额12,677、现金付款12,596和权益库存股减少12,721目前没有逐项完整调节，因此三者按各自口径保留，差额不归因于单一税项或时点原因.

表内宣布股息1,605与现金股息支付1,587也分别回答“已经承诺分配多少”和“实际支付多少”. 期间末可能仍有应付或其他时点差异；读表时应寻找相应关系，而不是直接把一条覆盖另一条.

<a id="bf08-nci"></a>
## 4. 归属反例：少数股东本期亏损时怎么办？

Caterpillar FY2025的合并及关联公司利润为8,882，减去归属于非控制性权益的损益−2，得到归属于普通股股东的8,884. 单位 M 美元. 计算是 `8,882 − (−2) = 8,884`，不是8,880. [^cat]

这里的NCI，是合并子公司中不归属于母公司的权益. 我们合并了该子公司的资产、负债和经营结果，但还要把相应成果归还给各自权利人. 非控制性权益承担了2的亏损，扣除这部分亏损后，母公司股东归属结果自然高于合并总结果. 这并没有多赚出2，而是在做归属分配.

同年的NCI余额从3出发，经当期亏损−2及Other −1变为0：`3 − 2 − 1 = 0`. 因此，期末NCI为0与当年出现NCI损益完全可以同时成立. 不能看最后一天就删去整年的少数权益分析. [^cat]

<a id="bf08-experiment"></a>
## 5. 在三张桥之间切换

<div data-experiment-slot="EXP-BF08-EQUITY-SHARES"></div>

实验分别显示权益金额、期末股数、EPS分母. 默认权益59,142，期末流通929 M 股，本期基本／稀释EPS约7.85／7.80. 切换分母时，界面保留原名，使用期末股数的结果会明确标为“非报告EPS的错误口径对照”，不会假装产生另一种公司官方EPS.

<a id="bf08-research"></a>
<details>
<summary>研究选读：为什么有人把回购与股权薪酬放在一起讨论？</summary>

Laurion与Robinson的2025年工作论文研究2010—2021年具有较大且持续SBC的公司，考察同期回购与管理层、分析师如何描述或调整SBC之间的关联. 它让我们看到：会计上不同的交易，在经济叙述里可能被同时观察. [^research]

但回购决策也受企业自身状况影响，作者明确保留内生性限制. 关联不能识别Salesforce本年的全部回购动机，更不能把“有回购”自动转成“SBC没有成本”. 读这篇论文时，先区分研究者构造的净回购指标与法定现金流行，再问研究设计能支持到哪一步.

</details>

<a id="bf08-exercise"></a>
## 6. 练习与解析

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
[^research]: Henry Laurion、Scott Robinson，[Do contemporaneous share repurchases influence managers and analysts framing stock compensation?](https://business.columbia.edu/sites/default/files-efs/imce-uploads/ADP/Spring%202026/1.%20Henry%20Laurion.pdf)，2025年9月工作论文；引言、样本构造、主要分析及结论限制. 此处是方法选读，不是Salesforce动机判定.


## Additional teaching material
交互算法：权益金额从同源表逐行相加；流通=已发行−库存股；基本/稀释EPS分别用各自期间加权分母.

边界：三桥各自单位与时点；排除反稀释奖励；不通过把SBC和回购抵销来断言无成本.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF08-EQUITY-SHARES. 所有输入保留历史/教学身份；行业选择与打印由配套页面提供.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF08-EQUITY-SHARES",
    "title": "权益变动、每股口径与股东所得：交互实验",
    "anchor": "bf08-experiment",
    "description": "同时维护权益金额、期末股数与期间EPS分母三条桥，区分SBC、回购和普通股归属.",
    "inputs": {
      "source": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
      "selected_keys": [
        "sf_equity",
        "sf_eps",
        "sf_equity_comparison",
        "cat_nci",
        "synthetic.share_weighting"
      ],
      "units": "各原表自带单位；教学合同/成本/税例使用独立教学货币单位",
      "controls": "见labs/interactions.html具名label；全部算法使用engine.js"
    },
    "outputs": {
      "default": {
        "equity_period": "FY2026",
        "eps_period": "FY2026",
        "opening": 61173,
        "components": [
          1062,
          -325,
          -12721,
          3522,
          579,
          -1605,
          7457
        ],
        "closing": 59142,
        "issued_begin_m": 1056,
        "treasury_begin_m": 94,
        "outstanding_begin_m": 962,
        "issued_end_m": 1073,
        "treasury_end_m": 144,
        "outstanding_end_m": 929,
        "basic_eps": 7.849473684210526,
        "diluted_eps": 7.800209205020921,
        "basic_shares_m": 950,
        "diluted_shares_m": 956,
        "antidilutive": 9,
        "nci_common": 8884
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/default-results.json"
    },
    "algorithm": "权益金额从同源表逐行相加；流通=已发行−库存股；基本/稀释EPS分别用各自期间加权分母.",
    "boundaries": "三桥各自单位与时点；排除反稀释奖励；不通过把SBC和回购抵销来断言无成本.",
    "static_equivalent": {
      "reader_anchors": [
        "bf08-experiment"
      ],
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF08-EQUITY-SHARES",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static-equivalents.md",
      "markdown_body": "<a id=\"EXP-BF08-EQUITY-SHARES\"></a>\n## BF-08 · 权益变动、每股口径与股东所得\n\n三桥各自单位与时点；排除反稀释奖励；不通过把SBC和回购抵销来断言无成本.\n\n| 权益原行／中文 | 普通股股数（ M 股） | 普通股金额（ M 美元） | 库存股股数（负数， M 股） | 库存股金额（负数， M 美元） | 额外实收资本（ M 美元） | 累计其他综合收益／损失（ M 美元） | 留存收益（ M 美元） | 权益合计（ M 美元） |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| Balance at January 31, 2024／2024-01-31期初 | 1,035 | 1 | -64 | -11,692 | 59,841 | -225 | 11,721 | 59,646 |\n| Common stock issued／普通股发行 | 21 | 0 | 0 | 0 | 1,535 | 0 | 0 | 1,535 |\n| Common stock repurchased／普通股回购 | 0 | 0 | -30 | -7,815 | 0 | 0 | 0 | -7,815 |\n| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,200 | 0 | 0 | 3,200 |\n| Other comprehensive loss, net of tax／其他综合损失税后 | 0 | 0 | 0 | 0 | 0 | -41 | 0 | -41 |\n| Cash dividends declared／宣布现金股息 | 0 | 0 | 0 | 0 | 0 | 0 | -1,549 | -1,549 |\n| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 6,197 | 6,197 |\n| Balance at January 31, 2025／2025-01-31期末／次年期初 | 1,056 | 1 | -94 | -19,507 | 64,576 | -266 | 16,369 | 61,173 |\n| Common stock issued／普通股发行 | 17 | 0 | 0 | 0 | 1,062 | 0 | 0 | 1,062 |\n| Common stock withheld related to net share settlement of equity awards／股权奖励净额结算扣留普通股 | 0 | 0 | 0 | 0 | -325 | 0 | 0 | -325 |\n| Common stock repurchased／普通股回购 | 0 | 0 | -50 | -12,721 | 0 | 0 | 0 | -12,721 |\n| Stock-based compensation／股权薪酬 | 0 | 0 | 0 | 0 | 3,522 | 0 | 0 | 3,522 |\n| Other comprehensive loss, net of tax／原行名为loss，本年为正额 | 0 | 0 | 0 | 0 | 0 | 579 | 0 | 579 |\n| Cash dividends and dividend equivalents declared／宣布现金股息及股息等价 | 0 | 0 | 0 | 0 | 0 | 0 | -1,605 | -1,605 |\n| Net income／净利润 | 0 | 0 | 0 | 0 | 0 | 0 | 7,457 | 7,457 |\n| Balance at January 31, 2026／2026-01-31期末 | 1,073 | 1 | -144 | -32,228 | 68,835 | 313 | 22,221 | 59,142 |\n\n\n| 口径 | 分子： M 美元 | 分母： M 股 | 美元／股 |\n| --- | --- | --- | --- |\n| 报告基本EPS | 7,457 | 950 | 7.849474 |\n| 报告稀释EPS | 7,457 | 956 | 7.800209 |\n| 错误口径对照：期末股数 | 7,457 | 929 | 8.026911 |\n\n\n期末流通：1,073−144=929；期初：1,056−94=962. NCI利润归属8,882−(−2)=8,884；余额3−2−1=0.\n\nSBC费用3,509、权益3,522、结算现金351分开；回购附注12,677、现金12,596、权益12,721分开，不强行抵销.\n"
    },
    "data_identity": "historical_observations_and_separately_labelled_teaching_assumptions"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.
- [Caterpillar Inc. FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm): 制造库存四阶段、部分LIFO与FIFO可比调整，以及NCI利润/权益归属；公司同时包含Financial Products.
- [Do contemporaneous share repurchases influence managers and analysts framing stock compensation?](https://business.columbia.edu/sites/default/files-efs/imce-uploads/ADP/Spring%202026/1.%20Henry%20Laurion.pdf): 股权薪酬和同期回购的经济叙述研究；本篇只采用研究设计与关联性/内生性边界，不判定Salesforce动机.
- [Principles of Accounting, Volume 1: Financial Accounting — §14.2 Analyze and Record Transactions for the Issuance and Repurchase of Stock](https://openstax.org/books/principles-financial-accounting/pages/14-2-analyze-and-record-transactions-for-the-issuance-and-repurchase-of-stock): 普通股发行、库存股和回购机制.
- [Principles of Accounting, Volume 1: Financial Accounting — §14.5 Discuss the Applicability of Earnings per Share as a Method to Measure Performance](https://openstax.org/books/principles-financial-accounting/pages/14-5-discuss-the-applicability-of-earnings-per-share-as-a-method-to-measure-performance): 基本每股收益和期间加权分母；真实稀释规则使用公司附注.

## Content relations
```json
[
  {
    "from": "zh-bf08",
    "relation": "part_of",
    "to": "business-reports",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf08",
    "relation": "uses_method",
    "to": "zh-bf06",
    "reason": "按本篇实际使用的局部能力调用；正文已作必要就地补充，不锁为整篇硬先修"
  },
  {
    "from": "zh-bf08",
    "relation": "uses_method",
    "to": "zh-bf07",
    "reason": "按本篇实际使用的局部能力调用；正文已作必要就地补充，不锁为整篇硬先修"
  },
  {
    "from": "zh-bf08",
    "relation": "illustrated_by",
    "to": "bf08-equity-bridge",
    "reason": "固定期间原始材料带读",
    "period": "FY2025/FY2026 equity windows",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf08-equity-bridge",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "该案例的原表与附注",
    "locator": "Auditor Revenue Recognition CAM pp.54–55；Balance Sheets p.57; Operations p.58；Equity p.60; Cash Flows pp.61–62；Note 1 credit risk/revenue pp.63–65; income tax and ASU adoption pp.69–70；Note 2 Contract Balances/RPO pp.71–72；Note 11 p.85; Note 12 pp.86–89; Note 13 pp.89–90",
    "scope": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节."
  },
  {
    "from": "zh-bf08",
    "relation": "illustrated_by",
    "to": "bf08-nci",
    "reason": "固定期间原始材料带读",
    "period": "2025",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf08-nci",
    "relation": "supported_by",
    "to": "BBC-C04",
    "reason": "该案例的原表与附注",
    "locator": "Statements 1/2 pp.58–59；Statement 4 Equity pp.61–62; Statement 5 Cash Flows（按标题定位）；Note 1 C. Inventories；Note 8 Inventories p.89",
    "scope": "制造库存四阶段、部分LIFO与FIFO可比调整，以及NCI利润/权益归属；公司同时包含Financial Products."
  },
  {
    "from": "zh-bf08",
    "relation": "supported_by",
    "to": "BBC-S08",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "§14.2完整单元",
    "scope": "普通股发行、库存股和回购机制."
  },
  {
    "from": "zh-bf08",
    "relation": "supported_by",
    "to": "BBC-S09",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "§14.5完整单元",
    "scope": "基本每股收益和期间加权分母；真实稀释规则使用公司附注."
  },
  {
    "from": "zh-bf08",
    "relation": "supported_by",
    "to": "BBC-R01",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "Introduction; sample construction 2010–2021; principal analyses; conclusion/limitations",
    "scope": "股权薪酬和同期回购的经济叙述研究；本篇只采用研究设计与关联性/内生性边界，不判定Salesforce动机."
  },
  {
    "from": "bf08-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF08-EQUITY-SHARES",
    "reason": "同时维护权益金额、期末股数与期间EPS分母三条桥，区分SBC、回购和普通股归属.",
    "at_section": "bf08-experiment",
    "conditions": "三桥各自单位与时点；排除反稀释奖励；不通过把SBC和回购抵销来断言无成本."
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 5/14
核对权益、期末股数和EPS分母，解释盈利、发行和分配的不同作用.
权益与股数核清之后，进一步看资源怎样形成、使用，并传导到经营现金.
Next: [资本开支、在建工程与折旧](https://ou-liu-red-sugar.github.io/zh/notebook/capital-expenditure-cip-and-depreciation/)
