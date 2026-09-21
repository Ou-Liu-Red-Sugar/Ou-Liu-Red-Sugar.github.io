# 货币、回购与汇率工具

从短票、repo和汇率原件重建单位、抵押、资金与双币种账本。

Entry: zh-m09 | Node: M09 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M09，先读Bill、定价说明、2026-09-16 SRP、FEDS margin单元和固定H10页。只在选FX结算分支时读BIS指定方法与尾注。每项先实际读取，工具失败则说明具体缺口，不从当前滚动网页伪造冻结版本。
先诊断：3.595%、0.9171%、3.6784%各有什么分母/期间；再让我自己重建bill两笔CF。Repo先定出借/融资方向，4%只属具名设施；ACT/360、2%和现金可动用额是教学设定。按h现金分母与k证券分母转换，不把抵押证券当现金。资金/证券开始不足时停止；开始足额但到期有缺口时，不编造外部融资或违约处置。
FX先写USD/EUR或JPY/USD再算乘除，ND不作零。区分原币数量、报告币价值和两币种实际现金流；本包均非可执行报价。结尾要求同一工具卡的权利/日期/币种/抵押/单位五栏完整。BIS的新实际交收口径不能与旧法直接相减，PvP不等同CCP或消除一切风险。
SRP原件中的BNY margin流程与2%的教学h必须分开；2%不是SRP官方参数。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MBC-17",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/treasury-bills/"
      },
      "required_unit": {
        "locator": "主体与Bills at a Glance",
        "scope": "主体与Bills at a Glance的完整指定单元，含必要脚注与表头",
        "purpose": "bill的面值/期间"
      },
      "supports": "短期贴现/面值到期及产品层条款。",
      "version": "网页；取得2026-09-21",
      "title": "Treasury Bills",
      "authors": [
        "U.S. Treasury, Bureau of the Fiscal Service"
      ]
    },
    {
      "source_id": "MBC-18",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/understanding-pricing/"
      },
      "required_unit": {
        "locator": "Bills完整小节",
        "scope": "Bills完整小节的完整指定单元，含必要脚注与表头",
        "purpose": "贴现分母与日数"
      },
      "supports": "国库券面值分母/360贴现报价；票息与收益率、债券价格的基本关系。",
      "version": "网页；取得2026-09-21",
      "title": "Understanding Pricing and Interest Rates",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-19",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260526_2.pdf"
      },
      "required_unit": {
        "locator": "PDF物理p1全文及Investment Rate脚注",
        "scope": "PDF物理p1全文及Investment Rate脚注的完整指定单元，含必要脚注与表头",
        "purpose": "三个收益数的真实原件"
      },
      "supports": "91天、2026-05-28至08-27、3.595%High Rate、99.091264价格、3.678%Investment Rate。",
      "version": "2026-05-26",
      "title": "Auction Results: 91-Day Bill 912797TY3",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-20",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.newyorkfed.org/markets/repo-agreement-ops-faq"
      },
      "required_unit": {
        "locator": "定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ",
        "scope": "定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ的完整指定单元，含必要脚注与表头",
        "purpose": "设施版本、主体、证券与三方职责"
      },
      "supports": "特定SRP的4%管理利率、隔夜、当日交收及BNY三方职责。不支持全市场repo利率、教学ACT/360或统一2%抵押率。",
      "version": "2026-09-16",
      "title": "FAQs: Standing Repo Operations",
      "authors": [
        "Federal Reserve Bank of New York"
      ]
    },
    {
      "source_id": "MBC-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.federalreserve.gov/econres/notes/feds-notes/proportionate-margining-for-repo-transactions-20250214.html"
      },
      "required_unit": {
        "locator": "Introduction；现有repo市场惯例及Figure1文字；Proportionate margins与单笔交易相关单元",
        "scope": "Introduction；现有repo市场惯例及Figure1文字；Proportionate margins与单笔交易相关单元的完整指定单元，含必要脚注与表头",
        "purpose": "h分母和担保/流动性的设计理由"
      },
      "supports": "h=(证券价值−现金)/现金及融资风险/流动性权衡。研究分析不是SRP规则；不采用未复现VaR/组合数值。",
      "version": "FEDS Notes,2025-02-14",
      "title": "Proportionate margining for repo transactions",
      "authors": [
        "R. Jay Kahn",
        "Matthew McCormick"
      ]
    },
    {
      "source_id": "MBC-22",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.federalreserve.gov/releases/h10/20260914/"
      },
      "required_unit": {
        "locator": "周表2026-09-07至09-11的EUR/JPY；一般单位说明及星号脚注",
        "scope": "周表2026-09-07至09-11的EUR/JPY；一般单位说明及星号脚注的完整指定单元，含必要脚注与表头",
        "purpose": "固定观察日期、ND、单位及星号"
      },
      "supports": "EUR单位USD/EUR、JPY单位JPY/USD、ND非零；参考观察不是bid/ask或成交保证。",
      "version": "固定发布2026-09-14",
      "title": "Foreign Exchange Rates H.10",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ]
    }
  ],
  "optional_readings": [
    {
      "source_id": "MBC-24",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bis.org/publications/qr-202606/uncovering-fx-settlement-risk-new-measures-2025-bis-triennial-survey"
      },
      "required_unit": {
        "locator": "正文研究设定、方法变化、36/54/10结果、尾注3/9及相邻方法尾注",
        "scope": "正文研究设定、方法变化、36/54/10结果、尾注3/9及相邻方法尾注的完整指定单元，含必要脚注与表头",
        "purpose": "实际交收与成交额、PvP与CCP、历史不可比边界"
      },
      "supports": "49辖区2025-04实际交收，36/54/10%的新口径；PvP本金风险与替换/流动性风险分开，不与CCP等同。",
      "version": "BIS Quarterly Review, June2026",
      "branch": "fx-settlement"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MC-review-v2",
    "data": {
      "content_version": "2026-09-21-MC-review-v2",
      "cutoff": "2026-09-21",
      "currency": "USD",
      "identities": {
        "source_observed": "原件条款或记录",
        "derived": "据明确输入计算",
        "teaching_assumption": "非真实成交或历史曲线",
        "reference_quote": "非bid/ask成交报价",
        "conditional_cashflow": "须按约履行且满足情景"
      },
      "note": {
        "cusip": "91282CNT4",
        "face_default": 1000,
        "face_identity": "teaching_assumption",
        "coupon_annual": 0.0425,
        "payments_per_year": 2,
        "periods": 20,
        "dated_date": "2025-08-15",
        "maturity": "2035-08-15",
        "original": {
          "announcement": "2025-07-30",
          "auction": "2025-08-06",
          "issue": "2025-08-15",
          "yield": 0.04255,
          "clean_per_100": 99.95962,
          "accrued_per_1000": 0
        },
        "reopening": {
          "announcement": "2025-10-02",
          "auction": "2025-10-08",
          "issue": "2025-10-15",
          "yield": 0.04117,
          "clean_per_100": 101.057226,
          "accrued_per_1000": 7.04484
        },
        "schedule": [
          {
            "period": 1,
            "contract_date": "2026-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 2,
            "contract_date": "2026-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 3,
            "contract_date": "2027-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 4,
            "contract_date": "2027-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 5,
            "contract_date": "2028-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 6,
            "contract_date": "2028-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 7,
            "contract_date": "2029-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 8,
            "contract_date": "2029-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 9,
            "contract_date": "2030-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 10,
            "contract_date": "2030-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 11,
            "contract_date": "2031-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 12,
            "contract_date": "2031-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 13,
            "contract_date": "2032-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 14,
            "contract_date": "2032-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 15,
            "contract_date": "2033-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 16,
            "contract_date": "2033-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 17,
            "contract_date": "2034-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 18,
            "contract_date": "2034-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 19,
            "contract_date": "2035-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0
          },
          {
            "period": 20,
            "contract_date": "2035-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 1000
          }
        ],
        "first_payment_rule_date": "2026-02-17",
        "first_payment_status": "按31 CFR §356.30(a)及2026联储休业表推得的财政部规则付款日；非持有人账户到账记录",
        "payment_rule": "约定付息日遇周末或联储休业日，顺延至下一营业日，不加利息；其余未来日期不预生成已核营业日日历",
        "slider_yield_default": 0.04255
      },
      "local": {
        "shock_bp_default": 25,
        "annual_yield_basis": "nominal annual, semiannual compounding"
      },
      "curve": {
        "times": [
          1,
          2,
          3
        ],
        "cashflows": [
          50,
          50,
          1050
        ],
        "base_spot": [
          0.03,
          0.035,
          0.04
        ],
        "shock_bp": 25,
        "compounding": "annual",
        "identity": "teaching_assumption",
        "scenarios": [
          {
            "name": "base",
            "spot_rates": [
              0.03,
              0.035,
              0.04
            ]
          },
          {
            "name": "parallel_up",
            "spot_rates": [
              0.0325,
              0.0375,
              0.0425
            ]
          },
          {
            "name": "parallel_down",
            "spot_rates": [
              0.0275,
              0.0325,
              0.0375
            ]
          },
          {
            "name": "flattening",
            "spot_rates": [
              0.0325,
              0.035,
              0.0375
            ]
          },
          {
            "name": "steepening",
            "spot_rates": [
              0.0275,
              0.035,
              0.0425
            ]
          }
        ]
      },
      "callable": {
        "issuer": "Barclays Bank PLC",
        "cusip": "06749HU29",
        "pricing_date": "2026-07-15",
        "issue": "2026-07-17",
        "maturity": "2036-07-17",
        "denomination": 1000,
        "coupon_annual": 0.0525,
        "day_count": "30/360",
        "coupon_month_day": "07-17",
        "first_coupon": "2027-07-17",
        "first_call": "2029-07-17",
        "call_months": [
          1,
          4,
          7,
          10
        ],
        "notice": "至少提前5个营业日通知受托人；可全部或部分赎回",
        "scenario": "假设首次可赎回日全额行权、依约支付；不是赎回预测"
      },
      "liquidity": {
        "sample": "2017-07 to 2024-06",
        "maturity_sector": "10-year",
        "on_the_run": {
          "volume_bn_usd_day": 92.05,
          "effective_spread_price_bp": 2.07
        },
        "first_off_the_run": {
          "volume_bn_usd_day": 6.73,
          "effective_spread_price_bp": 3.73
        },
        "identity": "NY Fed sr1170 Tables 2 and 3 sample statistics, not 2026 observations",
        "table3_metric": "proportional effective bid-ask spread in price basis points",
        "table3_values_period": "July 2017–June 2024 full-sample column; March 2020 column is separate and not used for 2.07/3.73"
      },
      "bill": {
        "cusip": "912797TY3",
        "auction": "2026-05-26",
        "issue": "2026-05-28",
        "maturity": "2026-08-27",
        "days": 91,
        "discount_rate": 0.03595,
        "price_per_100": 99.091264,
        "investment_rate": 0.03678,
        "face_default": 10000
      },
      "repo": {
        "rule_card": {
          "version": "2026-09-16",
          "rate": 0.04,
          "tenor": "overnight",
          "facility": "New York Fed Standing Repo",
          "counterparties": "primary dealers / approved SRP counterparties",
          "collateral": "Treasuries / agency debt / agency MBS",
          "agent": "BNY tri-party",
          "settlement": "same-day",
          "margin_ratio_numeric_input": "not supplied by SRP FAQ in this lesson"
        },
        "teaching": {
          "cash": 10000000,
          "rate": 0.04,
          "days": 1,
          "basis": 360,
          "margin_cash_ratio": 0.02,
          "lender_cash": 10000000,
          "borrower_eligible_collateral": 10200000,
          "borrower_buffer": 2000,
          "proceeds_spent": 0,
          "margin_cash_ratio_identity": "teaching assumption using FEDS Note h=(Vsec-L)/L; not SRP parameter"
        },
        "assumptions": "教学ACT/360、一天、单一抵押比例、无外部融资，无违约处置或真实发票；公允值不变；h=(证券价值−现金)/现金"
      },
      "fx": {
        "release": "2026-09-14",
        "url": "https://www.federalreserve.gov/releases/h10/20260914/",
        "identity": "reference_quote",
        "units": {
          "EUR": "USD/EUR",
          "JPY": "JPY/USD"
        },
        "dates": {
          "2026-09-07": {
            "EUR": null,
            "JPY": null
          },
          "2026-09-08": {
            "EUR": 1.1627,
            "JPY": 154.24
          },
          "2026-09-11": {
            "EUR": 1.1604,
            "JPY": 153.71
          }
        },
        "amount_default": 10000,
        "direction_default": "EUR_USD",
        "date_default": "2026-09-11"
      },
      "fx_settlement": {
        "period": "2025-04",
        "jurisdictions": 49,
        "pvp_pct": 36,
        "mitigated_pct": 54,
        "gross_bilateral_pct": 10,
        "identity": "BIS June2026 report, actual settlement new questionnaire; not turnover/noncomparable old methods"
      }
    },
    "experiments": [
      "EXP-MC-M09-BILL",
      "EXP-MC-M09-REPO",
      "EXP-MC-M09-FX"
    ],
    "identity": "单一冻结输入；真实条款只读，教学项另标"
  }
}
```

## Supplied entry
“这笔钱暂时放在哪里”并不是只有一个收益率问题。银行存款是对银行的请求权，短期国库券有自己的到期日，repo把现金融资与证券回购连在一起，外币则让我们面对另一种计价单位。期限短，不等于权利、履约和交易方式相同。

本篇选一张真实国库券、一项有日期的回购设施规则和一张官方汇率表，训练同一个动作：**先写谁给谁什么、何时、用什么单位，再算钱**。核心阅读约18–20分钟。需要会读基本金融权利，不要求先学完整的票息债券定价；[债券现金流与价格](https://ou-liu-red-sugar.github.io/zh/notebook/bond-contract-cashflows-price/)和[交收与抵押品](https://ou-liu-red-sugar.github.io/zh/notebook/clearing-settlement-collateral/)只在需要时提供方法。

<a id="m09-tool-card"></a>
## 一、把“现金类”拆成四个可核对的字段

| 对象 | 期限／时点 | 币种和权利 | 抵押或履约安排 | 先看哪种报价 |
|---|---|---|---|---|
| 国库券bill | 本例91天，定日到期 | 美元面值债权 | 到期按约付面值 | 每100面值价格、年化贴现率 |
| repo | 本例设施为隔夜 | 先交换现金与证券，约定反向交易 | 证券、对手方与三方服务安排 | repo利率与抵押比例，二者分开 |
| 外币现货换算 | 观察时点与交收时点分开 | 一种货币换另一种 | 两条货币腿如何最终交收 | 每单位哪种币值多少另一种币 |

存款适合作为入口对照，但本篇不推断任何银行产品的保险、提前支取或破产安排。那需要读相应银行和辖区文件。接下来三种对象也不做“谁最安全”的排名，而是把合同、计价和现金路径看清。

<a id="case-mbc-tbill-912797ty3"></a>
<a id="m09-bill"></a>
## 二、一张91天国库券，为什么有三个不同的收益数？

2026-05-26的财政部拍卖结果列出91天bill **912797TY3**：2026-05-28发行、2026-08-27到期，High Rate为3.595%，价格99.091264，Investment Rate为3.678%。这是一份具名历史记录，不是现在可以按原价买入的报价。[^MBC-19]

bill在本例中没有期间票息：取得时支付低于面值的金额，到期按约收到面值。[^MBC-17] 对教学面值10,000美元，

$$
P=10000\times99.091264/100=9909.1264,\qquad
F-P=90.8736.
$$

假设按约到期、没有费用，91天的持有回报以**实际投入**为分母：

$$
HPR=\frac{90.8736}{9909.1264}=0.9170697\%.
$$

High Rate却使用**面值分母和360天年化**。把它按财政部说明换回价格：

$$
P=F\left(1-d\frac{n}{360}\right),\quad
100\left(1-0.03595\frac{91}{360}\right)
=99.0912638889,
$$

舍入后就是原件价格99.091264。[^MBC-18] 这说明“3.595%”不是91天赚3.595%，也不能直接用 $P\times3.595\%$当这91天利息。

| 名称 | 本例结果 | 分母与期间 |
|---|---:|---|
| 到期面值差额 | 90.87美元 | 金额，不是率 |
| 91天HPR | 0.9171% | 购买成本，91天 |
| High Rate | 3.595% | 面值分母，360天贴现报价 |
| 本篇365天简单年化 | 3.6784% | 购买成本，$HPR×365/91$ |
| 官方Investment Rate | 3.678% | 官方等价票息收益率报价 |

本例365天简单年化与官方Investment Rate在显示精度接近，但不能把这个短期公式直接外推到所有期限、所有产品。简单年化也不是“每91天都能按相同条件滚动”的承诺。若计算不断续投的复合结果，需要另给每次再投资价格及期限，而不是只把3.678乘年数。

<div data-experiment-slot="EXP-MC-M09-BILL"></div>

实验只调面值，固定本次公告的期限、价格和利率。面值改成20,000，金额翻倍而各收益率不变。

<a id="case-mbc-srp-20260916"></a>
<a id="m09-repo"></a>
## 三、repo的利息和抵押品，不是同一笔所得

先读一项真实设施，再做自己的数值演算。纽约联储2026-09-16的Standing Repo FAQ说明：联储向合格对手方买入证券，约定次日反向出售；差价对应利息。该版隔夜操作利率为 <strong>4.00%</strong>，当日交收，使用BNY的三方安排，合格证券包括美国国债、机构债和机构MBS。它面向规定的交易对手，不是一项个人可直接购买的“4%存款”，也不代表全市场每笔repo都按4%成交。[^MBC-20]

在这项SRP中，BNY三方平台负责托管、证券估值、应用相应margin并在账上交收；存在服务机构，不等于参与者的信用和资金风险都消失。这里也不要把“BNY会应用相应margin”偷换成下面的<strong>2%</strong>：所读SRP FAQ并没有给本实验一个统一2%抵押率，2%只是下一段依据另一篇研究口径设置的教学参数。repo的法律交易结构是出售并约定购回，不能与普通质押不加区分地互换名称。下面只跟踪本例资金与证券交付，不从这一教学账本推断任何主体的会计终止确认。

**教学交易设定**：资金本金 $L=10{,}000{,}000$，利率沿用上述4%，另明确设定一天、ACT/360、无额外费用。所读FAQ不承担这一日数公式的证据，所以这不是复现某笔真实设施发票。

$$
I=Lr\frac{1}{360}=1111.111111,\qquad
L+I=10{,}001{,}111.111111.
$$

放款人开始支付10m，到期取得本金加利息；融资人收到10m，到期要付回10m加利息。证券腿的经济职责是给现金融资提供履约保障，而不是让放款人再把证券全额算一次收益。

研究文章《Proportionate margining for repo transactions》用“每1美元现金对应 $(1+h)$ 美元证券”的口径说明抵押比例。按它的**现金分母**定义，教学设 $h=2\%$，应交证券价值为10m×1.02＝**10.2m**。[^MBC-21] 注意另一种常见表示把证券价值放在分母：

$$
h=\frac{V_{\rm sec}-L}{L},\qquad
k=\frac{V_{\rm sec}-L}{V_{\rm sec}}
=\frac{h}{1+h}.
$$

因此 $h=2\%$对应 $k=1.960784\%$。若给的是 $k=2\%$，所需证券应为 $L/(1-0.02)=10.2040816m$，不再是10.2m。名称都可能被口头叫作“haircut”，分母却必须写在输入框旁。

抵押比率高低会改变风险保护和可取得的融资量。它不直接决定利息，也不是最大亏损的保证：抵押价格、对手方履约与处置时点仍可能变化。研究强调按实际风险设计保证金的取舍；它不是这个SRP版本的抵押率规则，本篇的2%始终是教学参数。

<a id="m09-repo-ledger"></a>
### 把融资人的资金缺口也写出来

为看清整条路径，假设放款人可用现金10m、融资人有可交付证券10.2m，以及借款前自有现金缓冲2,000。先假设融资人收到本金后暂未动用；证券价格不变、抵押要求不变。

| 时点 | 放款人的现金 | 融资人的现金 | 证券腿／义务 |
|---|---:|---:|---|
| 开始前 | 10,000,000.00 | 自有2,000.00 | 融资人可交付证券10.2m |
| 开始交易后 | 减10m，剩0 | 加10m，合计10,002,000.00 | 证券交付，形成约定回购义务 |
| 到期需履行 | 应收10,001,111.11 | 应付10,001,111.11 | 按约反向移转证券 |
| 全部依约完成后 | 10,001,111.11 | 888.89 | 证券返还；该笔现金及证券义务结束 |

融资人若已花掉收到本金中的1m，且没有其他现金流，到期只有9,002,000，距应付金额仍缺**999,111.11**美元。抵押品足额，不等于融资人手里已经有钱还。实验会停在这个缺口，不替其虚构外部融资或一场成功的抵押处置。

<div data-experiment-slot="EXP-MC-M09-REPO"></div>

先切换抵押比例的分母，保持经济抵押额不变；再把融资人可交证券改成10.1m，看到开始阶段就不能满足本例条件。最后恢复证券，再设收到本金后花掉1m，观察“能够开始”与“到期能够完成”是两个不同约束。这不是对真实SRP资格或风险模型的完整模拟。

<a id="case-mbc-h10-20260914"></a>
<a id="m09-fx"></a>
## 四、汇率先写单位，再决定乘还是除

联储H.10固定发布页2026-09-14列的是9月7日至11日的参考汇率。一般单位为“每美元对应多少外币”，带星号的货币例外为“每单位外币对应多少美元”。欧元带星号，日元不带。[^MBC-22]

| 观察日 | 欧元，USD/EUR | 日元，JPY/USD |
|---|---:|---:|
| 2026-09-07 | ND | ND |
| 2026-09-08 | 1.1627 | 154.2400 |
| 2026-09-11 | 1.1604 | 153.7100 |

ND表示没有这个观察，不是汇率等于零。9月11日按参考数换算，

$$
10{,}000\ {\rm EUR}\times1.1604\ {\rm USD/EUR}
=11{,}604\ {\rm USD},
$$

$$
1{,}000\ {\rm USD}\times153.71\ {\rm JPY/USD}
=153{,}710\ {\rm JPY}.
$$

反向把日元换成美元就除以153.71。其倒数约为0.006505758 USD/JPY；小数长短不重要，量纲方向才重要。这些数不是可执行bid/ask，不据此安排一个“无费用立即成交”。

还有一个更容易混淆的问题：**估值改变不等于已经换币。** 若始终持有10,000欧元，美元参考价值从9月8日的11,627变成9月11日的11,604，变化−23美元、约−0.1978%；欧元现金仍为10,000。两种币种不能直接把数字相加成“总现金”。

| 事情 | EUR现金变化 | USD现金变化 | 解释 |
|---|---:|---:|---|
| 只重估持有的10,000EUR | 0 | 0 | 美元报告价值变了，没有兑换现金流 |
| 假设按9月11日参考数完成兑换 | −10,000 | +11,604 | 仅演示两币种记账，非已执行交易 |
| 仅达成兑换约定、尚未交收 | 待付10,000 | 待收11,604 | 先形成义务，不能当已到账 |

<div data-experiment-slot="EXP-MC-M09-FX"></div>

实验先选日期和方向，再输入原币数量。它显示单位抵消、参考换算数，以及“假设完成兑换时”的两个币种变动；不出现实际下单按钮。切到9月7日应当显示数据缺失，而不是返回零或无穷大。另有固定欧元持仓的两日重估表，检查你是否把报告币亏益误当原币现金支出。

<a id="m09-fx-settlement"></a>
## 五、选读：汇率定了，交收风险为什么还在？

两币种支付往往涉及不同支付安排。**付款对付款（PvP**）使一条货币腿的最终交付以另一条的最终交付为条件，针对的是“已交付卖出的货币，却收不到买入货币”的本金交收风险。它不自动等于中央对手方CCP，也不消除等待资金、替换未完成交易等所有风险。[^MBC-24]

BIS在2026年6月公布的分析使用49辖区、**2025年4月实际交收**的新问卷口径：36%经PvP，54%使用缓释但未消除本金交收风险的方式，10%经双边全额方式。这不是2026年实时值，也不是外汇成交额分类。修订问卷与2019/2022的旧统计不能直接相减，声称风险上升或下降；样本对象与方法先要一致。[^MBC-24]

这段研究只补上一个环节：前节算出11,604美元，解决的是单位与参考金额；是否、何时真正取得这笔美元，是另一个履约问题。

<a id="m09-exercises"></a>
## 六、把三种工具放回同一张检查表

### 题一：bill的3.595%、0.9171%、3.6784%哪一个是“这91天的回报”？

**解析。** 在按约到期、无费用的设定下，0.9171%是以9909.1264成本为分母的91天HPR。3.595%是面值分母、360天年化的贴现报价；3.6784%是本篇把HPR按365/91简单年化的比较值。先统一期间和分母，不能直接把三个数字排高低。

### 题二：10m本金、2% haircut，抵押物到底是10.2m还是10.2040816m？

**解析。** 取决于分母。若2%是 $h=(V-L)/L$，则 $V=10m×1.02=10.2m$；若2%是 $k=(V-L)/V$，则 $V=10m/0.98$。不能换了公式仍说参数含义相同。前一种额外0.2m是证券价值缓冲，不是利息。

### 题三：资金开始够用，到期为什么还差999,111.11？

**解析。** 收到本金后花掉1m，融资人的可用现金是2,000＋10m−1m＝9,002,000；到期应付10m＋1,111.111111，缺口为999,111.111111。持有或已交付10.2m证券没有自动变成还款现金。本实验也没有授予随时按全价卖出、再次融资或无损处置的能力。

### 题四：10,000EUR美元价值减少23，是否需要在欧元账户扣23？

**解析。** 不需要。原币EUR现金未变；−23是按两日参考汇率折成美元后的价值差。实际兑换要分别记卖出币减少、买入币增加，并另记录成交报价、费用和交收。不能把美元报告值直接扣到欧元余额。

### 题五：PvP和CCP能否互换使用？

**解析。** 不能。PvP描述两条货币腿的最终支付条件；CCP描述中央对手方承接义务的机构安排。即使本金交收风险被PvP处理，也仍须安排流动性与未完成交易的替换。名称相近或都出现在“结算系统”介绍里，不意味着职责相同。

现在回到第一张四栏表。你不必给所有工具套一个“现金收益率”，而应先固定**权利、日期、币种、抵押和报价分母**。这几项一旦写清，公式往往很短；省掉它们，公式再精确也可能在计算另一件事。


[^MBC-19]: U.S. Treasury，*Auction Results: 91-Day Bill 912797TY3*，2026-05-26。[原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260526_2.pdf)。定位：PDF物理p1全文及Investment Rate脚注。

[^MBC-17]: U.S. Treasury, Bureau of the Fiscal Service，*Treasury Bills*，网页；取得2026-09-21。[原文](https://www.treasurydirect.gov/marketable-securities/treasury-bills/)。定位：主体与Bills at a Glance。

[^MBC-18]: U.S. Treasury，*Understanding Pricing and Interest Rates*，网页；取得2026-09-21。[原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/)。定位：Bills全节；Notes and Bonds全节。

[^MBC-20]: Federal Reserve Bank of New York，*FAQs: Standing Repo Operations*，2026-09-16。[原文](https://www.newyorkfed.org/markets/repo-agreement-ops-faq)。定位：定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ。

[^MBC-21]: R. Jay Kahn, Matthew McCormick，*Proportionate margining for repo transactions*，FEDS Notes,2025-02-14。[原文](https://www.federalreserve.gov/econres/notes/feds-notes/proportionate-margining-for-repo-transactions-20250214.html)。定位：Introduction；Margining practices in U.S. repo markets及Figure1文字说明；Proportionate margins与Individual transactions对应单元。

[^MBC-22]: Board of Governors of the Federal Reserve System，*Foreign Exchange Rates H.10*，固定发布2026-09-14。[原文](https://www.federalreserve.gov/releases/h10/20260914/)。定位：周表2026-09-07至09-11的EUR/JPY；一般单位说明及星号脚注。

[^MBC-24]: Bank for International Settlements，*Uncovering FX settlement risk: new measures from the 2025 BIS Triennial Survey*，BIS Quarterly Review, June2026。[原文](https://www.bis.org/publications/qr-202606/uncovering-fx-settlement-risk-new-measures-2025-bis-triennial-survey)。定位：正文研究设定、实际交收分类/比例、方法改变；尾注3、9及相邻方法尾注。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MC-M09-BILL",
    "title": "短票价格、期间回报与年化",
    "anchor": "m09-bill",
    "description": "保留官方价格、贴现率和Investment Rate各自身份。",
    "inputs": {
      "face": {
        "default": 10000,
        "unit": "USD face",
        "step": 100
      },
      "term_days": 91,
      "official_price_per_100": 99.091264
    },
    "outputs": {
      "face": 10000,
      "purchase": 9909.1264,
      "difference": 90.8736000000008,
      "hpr": 0.009170697428988373,
      "simple_annual_365": 0.036783566610777536,
      "discount_rate": 0.03595,
      "official_investment_rate": 0.03678,
      "price_from_discount": 9909.12638888889,
      "identity": "observed auction terms, hypothetical face; assumes contractual maturity payment"
    },
    "algorithm": "P=F*quoted_price/100; HPR=(F-P)/P; simple365=HPR*365/91; discount cross-check=F*(1-d*91/360)",
    "boundaries": [
      "不改变真实期限/利率",
      "复算内部不逐笔过早舍入",
      "无费用/按约到期条件",
      "简单年化不是续投保证"
    ],
    "static_equivalent": "正文五行收益数表，HTML默认同值。",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  },
  {
    "id": "EXP-MC-M09-FX",
    "title": "参考换算与两币种账本",
    "anchor": "m09-fx",
    "description": "H10固定日期；ND不计算，金额变动只作条件记账。",
    "inputs": {
      "amount": {
        "default": 10000,
        "unit": "source currency"
      },
      "date": [
        "2026-09-11",
        "2026-09-08",
        "2026-09-07"
      ],
      "directions": [
        "EUR_USD",
        "USD_EUR",
        "USD_JPY",
        "JPY_USD"
      ]
    },
    "outputs": {
      "status": "reference_only",
      "date": "2026-09-11",
      "from": "EUR",
      "to": "USD",
      "rate": 1.1604,
      "unit": "USD/EUR",
      "operation": "multiply",
      "output": 11604.000000000002,
      "ledger": {
        "EUR": -10000,
        "USD": 11604.000000000002
      },
      "ledger_identity": "假设按参考数完成兑换时的记账，不是实际成交或到账",
      "settlement_confirmed": false
    },
    "algorithm": "EUR_USD=EUR*r; USD_EUR=USD/r; USD_JPY=USD*q; JPY_USD=JPY/q; conditional ledger=(-from,+to)",
    "boundaries": [
      "ND→output=null,ledger=null",
      "非可执行bid/ask",
      "无交易/到账确认",
      "固定原币持有时重估不改现金",
      "两币种不直接求和"
    ],
    "static_equivalent": "正文09-08/11表及双币种变化表，HTML默认同值。",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  },
  {
    "id": "EXP-MC-M09-REPO",
    "title": "Repo现金和抵押账本",
    "anchor": "m09-repo-ledger",
    "description": "开始与到期约束分开；同一抵押比例换分母保持经济额。",
    "inputs": {
      "default": {
        "cash": 10000000,
        "rate": 0.04,
        "days": 1,
        "basis": 360,
        "margin_cash_ratio": 0.02,
        "lender_cash": 10000000,
        "borrower_eligible_collateral": 10200000,
        "borrower_buffer": 2000,
        "proceeds_spent": 0,
        "margin_value": 0.02,
        "margin_basis": "cash"
      },
      "editable_identity": "teaching only",
      "limits": "cash>0; rate in [0,.20]; integer days 1..30; amount 0..1e12; spending<=principal; h_cash in [0,1], k_security in [0,.5]"
    },
    "outputs": {
      "status": "conditional_complete",
      "opening_ok": true,
      "completion_ok": true,
      "failures": [],
      "required_collateral": 10200000,
      "margin_cash": 0.02,
      "margin_security": 0.0196078431372549,
      "interest": 1111.111111111111,
      "repurchase_cash": 10001111.111111112,
      "funding_gap": 0,
      "borrower_maturity_cash": 10002000,
      "conditional_end": {
        "lender": 10001111.111111112,
        "borrower": 888.888888888061
      },
      "flows": {
        "opening": {
          "lender": -10000000,
          "borrower": 10000000
        },
        "repayment": {
          "lender": 10001111.111111112,
          "borrower": -10001111.111111112
        }
      },
      "identity": "teaching ACT/360 and collateral ratio; no default liquidation, no trade executed"
    },
    "algorithm": "h=(Vsec-L)/L; k=h/(1+h); interest=L*r*days/360; open if lender_cash>=L and collateral>=L*(1+h); maturity_gap=max(0,due-(buffer+L-spent))",
    "boundaries": [
      "无外部融资",
      "若开始不满足，flows=null",
      "若到期缺口，conditional_end=null",
      "到期flows是应收应付不是已支付",
      "证券价值不并入现金",
      "不模拟抵押价格变化及违约处置"
    ],
    "static_equivalent": "正文默认两方现金表+花掉1m的缺口；HTML同值。",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  }
]
```

## Sources
- [Treasury Bills](https://www.treasurydirect.gov/marketable-securities/treasury-bills/): 短期贴现/面值到期及产品层条款。
- [Understanding Pricing and Interest Rates](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/): 国库券面值分母/360贴现报价；票息与收益率、债券价格的基本关系。
- [Auction Results: 91-Day Bill 912797TY3](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260526_2.pdf): 91天、2026-05-28至08-27、3.595%High Rate、99.091264价格、3.678%Investment Rate。
- [FAQs: Standing Repo Operations](https://www.newyorkfed.org/markets/repo-agreement-ops-faq): 特定SRP的4%管理利率、隔夜、当日交收及BNY三方职责；BNY托管、估值、应用相应margin并交收。不支持全市场repo利率、教学ACT/360或统一2%抵押率。
- [Proportionate margining for repo transactions](https://www.federalreserve.gov/econres/notes/feds-notes/proportionate-margining-for-repo-transactions-20250214.html): h=(证券价值−现金)/现金及融资风险/流动性权衡。研究分析不是SRP规则；不采用未复现VaR/组合数值。
- [Foreign Exchange Rates H.10](https://www.federalreserve.gov/releases/h10/20260914/): EUR单位USD/EUR、JPY单位JPY/USD、ND非零；参考观察不是bid/ask或成交保证。
- [Uncovering FX settlement risk: new measures from the 2025 BIS Triennial Survey](https://www.bis.org/publications/qr-202606/uncovering-fx-settlement-risk-new-measures-2025-bis-triennial-survey): 49辖区2025-04实际交收，36/54/10%的新口径；PvP本金风险与替换/流动性风险分开，不与CCP等同。

## Content relations
```json
[
  {
    "from": "zh-m09",
    "relation": "part_of",
    "to": "markets-fixed-income",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m09",
    "relation": "requires",
    "to": "zh-financial-claims",
    "reason": "实际所需能力，不由推荐相邻推定",
    "required_competence": "识别义务主体、权利事项、日期和单位",
    "status": "external_delivered"
  },
  {
    "from": "zh-m09",
    "relation": "uses_method",
    "to": "zh-m06",
    "reason": "段落调用短期价格/回报分母区别，不设整篇硬先修",
    "status": "in_batch"
  },
  {
    "from": "zh-m09",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "两腿交收与抵押、资金可用性的区别",
    "status": "external_delivered"
  },
  {
    "from": "zh-m09",
    "relation": "illustrated_by",
    "to": "case-mbc-tbill-912797ty3",
    "reason": "2026-05-26拍卖；05-28至08-27约定持有期"
  },
  {
    "from": "zh-m09",
    "relation": "illustrated_by",
    "to": "case-mbc-srp-20260916",
    "reason": "2026-09-16 FAQ版本"
  },
  {
    "from": "zh-m09",
    "relation": "illustrated_by",
    "to": "case-mbc-h10-20260914",
    "reason": "2026-09-14发布；观察09-07至09-11"
  },
  {
    "from": "m09-bill",
    "relation": "illustrated_by",
    "to": "EXP-MC-M09-BILL",
    "reason": "保留官方价格、贴现率和Investment Rate各自身份。"
  },
  {
    "from": "m09-repo-ledger",
    "relation": "illustrated_by",
    "to": "EXP-MC-M09-REPO",
    "reason": "开始与到期约束分开；同一抵押比例换分母保持经济额。"
  },
  {
    "from": "m09-fx",
    "relation": "illustrated_by",
    "to": "EXP-MC-M09-FX",
    "reason": "H10固定日期；ND不计算，金额变动只作条件记账。"
  },
  {
    "from": "m09-bill",
    "relation": "supported_by",
    "to": "MBC-19",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文及Investment Rate脚注",
    "scope": "91天、2026-05-28至08-27、3.595%High Rate、99.091264价格、3.678%Investment Rate。"
  },
  {
    "from": "m09-bill",
    "relation": "supported_by",
    "to": "MBC-18",
    "reason": "该单元原件依据",
    "locator": "Bills全节；Notes and Bonds全节",
    "scope": "国库券面值分母/360贴现报价；票息与收益率、债券价格的基本关系。"
  },
  {
    "from": "m09-repo",
    "relation": "supported_by",
    "to": "MBC-20",
    "reason": "该单元原件依据",
    "locator": "定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ",
    "scope": "特定SRP的4%管理利率、隔夜、当日交收及BNY三方职责。不支持全市场repo利率、教学ACT/360或统一2%抵押率。"
  },
  {
    "from": "m09-repo",
    "relation": "supported_by",
    "to": "MBC-21",
    "reason": "该单元原件依据",
    "locator": "Introduction；Margining practices in U.S. repo markets及Figure1文字说明；Proportionate margins与Individual transactions对应单元",
    "scope": "h=(证券价值−现金)/现金及融资风险/流动性权衡。研究分析不是SRP规则；不采用未复现VaR/组合数值。"
  },
  {
    "from": "m09-fx",
    "relation": "supported_by",
    "to": "MBC-22",
    "reason": "该单元原件依据",
    "locator": "周表2026-09-07至09-11的EUR/JPY；一般单位说明及星号脚注",
    "scope": "EUR单位USD/EUR、JPY单位JPY/USD、ND非零；参考观察不是bid/ask或成交保证。"
  },
  {
    "from": "m09-fx-settlement",
    "relation": "supported_by",
    "to": "MBC-24",
    "reason": "该单元原件依据",
    "locator": "正文研究设定、实际交收分类/比例、方法改变；尾注3、9及相邻方法尾注",
    "scope": "49辖区2025-04实际交收，36/54/10%的新口径；PvP本金风险与替换/流动性风险分开，不与CCP等同。"
  },
  {
    "from": "case-mbc-tbill-912797ty3",
    "relation": "supported_by",
    "to": "MBC-19",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PDF物理p1全文及Investment Rate脚注",
    "scope": "2026-05-26拍卖结果：期限2026-05-28至08-27、High Rate 3.595%、每100面值99.091264、Investment Rate 3.678%。教学面值与原件条款分开。"
  },
  {
    "from": "case-mbc-srp-20260916",
    "relation": "supported_by",
    "to": "MBC-20",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ",
    "scope": "具名版本支持隔夜、4%设施利率及BNY三方职责；实验的ACT/360与现金分母2%抵押比率为教学设定，不是该设施的统一官方参数。"
  },
  {
    "from": "case-mbc-h10-20260914",
    "relation": "supported_by",
    "to": "MBC-22",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "周表2026-09-07至09-11的EUR/JPY; 一般单位说明及星号脚注",
    "scope": "固定周发布的2026-09-07至09-11参考观察，EUR为USD/EUR、JPY为JPY/USD；ND保留缺失，重估原币持仓与完成兑换的两币种现金分别处理。"
  }
]
```

## Related entries
