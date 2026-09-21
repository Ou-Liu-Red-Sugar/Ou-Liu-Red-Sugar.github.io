# 债券的合约现金流与价格

沿同一国债发行与重开，读清合同日程、净全价、YTM和持有结果.

Entry: zh-m06 | Node: M06 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
用M06《债券的合约现金流与价格》带我分析91282CNT4. 先通过本篇 reference 包中的公开链接，实际读完 required_readings 指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF 表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.
从原始发行文件列出首息、末息、20期现金流及每100面值报价，计算2K面值的票息与付款. 比较原发行和10月重开：票息日程保持原约定，交付日改变剩余期限与应计利息. 用同源输入复算原发行价格约999.596、重开全价约1,017.617，内部保留原始精度. 解释YTM方程、票息复投、提前出售和实际持有回报的关系，区分约定支付日与非营业日付款规则. 最后改变面值或出售时点，让我独立列完整现金流并说明价格、利息与回报的计量口径.

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
      "source_id": "MBC-10",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/treasury-notes/"
      },
      "required_unit": {
        "locator": "主体及 Notes at a Glance 全表",
        "scope": "主体及 Notes at a Glance 全表的完整指定单元，含必要脚注与表头",
        "purpose": "先读票息国债的产品结构"
      },
      "supports": "票息国债期限、半年付息与持有/出售的产品层结构；不是某CUSIP的报价.",
      "version": "网页；取得2026-09-21",
      "title": "Treasury Notes",
      "authors": [
        "U.S. Treasury, Bureau of the Fiscal Service"
      ]
    },
    {
      "source_id": "MBC-11",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20250730_1.pdf"
      },
      "required_unit": {
        "locator": "PDF物理p1全文，Security Terms与Tender Information",
        "scope": "PDF物理p1全文，Security Terms与Tender Information的完整指定单元，含必要脚注与表头",
        "purpose": "原始日期与票息日"
      },
      "supports": "原发行日期、到期日、半年票息日及报价单位.",
      "version": "2025-07-30",
      "title": "Offering Announcement: 10-Year Note 91282CNT4",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-12",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf"
      },
      "required_unit": {
        "locator": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest",
        "scope": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest的完整指定单元，含必要脚注与表头",
        "purpose": "官方收益率/价格核对"
      },
      "supports": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计.",
      "version": "2025-08-06",
      "title": "Auction Results: 10-Year Note 91282CNT4",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-13",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20251002_2.pdf"
      },
      "required_unit": {
        "locator": "PDF物理p1全文",
        "scope": "PDF物理p1全文的完整指定单元，含必要脚注与表头",
        "purpose": "同券重开安排"
      },
      "supports": "同一CUSIP重开、2025-10-15交付、相同票息/到期日及应计期间.",
      "version": "2025-10-02",
      "title": "Reopening Announcement: 91282CNT4",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-14",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20251008_2.pdf"
      },
      "required_unit": {
        "locator": "PDF物理p1全文",
        "scope": "PDF物理p1全文的完整指定单元，含必要脚注与表头",
        "purpose": "净价、应计、全价"
      },
      "supports": "重开净价101.057226/100、应计7.04484/1000、高收益率4.117%；本包不另反算重开YTM.",
      "version": "2025-10-08",
      "title": "Reopening Auction Results: 91282CNT4",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-09",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf"
      },
      "required_unit": {
        "locator": "slides25–33",
        "scope": "slides25–33的完整指定单元，含必要脚注与表头",
        "purpose": "从规则期CF推PV/YTM；不偷加复投定义"
      },
      "supports": "零息利率、票息债券现金流、YTM、久期与凸性. 采用独立导数校验；不采用forward=预测的简化及slide41末项错号.",
      "version": "MIT 15.401, Fall 2008, lecture file 2007–2008",
      "title": "Finance Theory I: Fixed Income Securities",
      "authors": [
        "Andrew W. Lo"
      ]
    },
    {
      "source_id": "MBC-25",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.govinfo.gov/content/pkg/CFR-2025-title31-vol2/pdf/CFR-2025-title31-vol2-sec356-30.pdf"
      },
      "required_unit": {
        "locator": "§356.30(a)完整段",
        "scope": "§356.30(a)完整段的完整指定单元，含必要脚注与表头",
        "purpose": "约定日与营业日支付；历史版本范围"
      },
      "supports": "本金/票息支付与遇周末或联储非营业日顺延且不加利息的规则，用于2025发行案例.",
      "version": "2025-07-01 CFR edition",
      "title": "31 CFR §356.30: Payment of principal and interest",
      "authors": [
        "U.S. Treasury / Government Publishing Office"
      ]
    },
    {
      "source_id": "MBC-26",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.federalreserve.gov/aboutthefed/k8.htm"
      },
      "required_unit": {
        "locator": "2026列及周末/假日规则",
        "scope": "2026列及周末/假日规则的完整指定单元，含必要脚注与表头",
        "purpose": "只推首笔财政部规则付款日，不声称全部未来到账"
      },
      "supports": "2026-02-16休业与星期日2026-02-15结合，推算首次财政部规则付款日2026-02-17；非账户到账记录.",
      "version": "2026–2030表；更新2026-07-08",
      "title": "Holidays Observed — K.8",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ]
    }
  ],
  "optional_readings": [],
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
      "EXP-MC-M06-NOTE"
    ],
    "identity": "单一冻结输入；真实条款只读，教学项另标"
  }
}
```

## Supplied entry
债券合同规定支付日期和金额，交易价格决定取得成本，到期收益率则把两者联系起来. 净价、应计利息与全价描述不同的价格口径，票息与到期收益率分别描述合同支付和按现价计算的回报率.

<a id="case-mbc-ust-91282cnt4"></a>
<a id="m06-contract"></a>
## 一、91282CNT4的合同现金流

CUSIP **91282CNT4** 的2025年7月30日发行公告给出期限与发行安排，8月6日拍卖结果给出票息、拍卖收益率和价格；两份文件共同确定本例的合同与取得条件. [^MBC-11][^MBC-12]

| 字段 | 原件对应内容 | 对持有人的意义 |
|---|---|---|
| 义务主体 | 美国财政部 | 约定的本金与利息由谁支付 |
| 原始发行／起息日 | 2025-08-15 | 本例现金流定价的起点 |
| 到期日 | 2035-08-15 | 最后一笔本金的约定支付日 |
| 年票息率 | 4.25% | 乘面值确定合同利息，不乘购买价格 |
| 约定票息日 | 每年 2 月 15 日、8 月 15 日 | 每半年一次；原始发行后首个约定日为 2026-02-15 |
| 拍卖高收益率 | 4.255% | 原始发行价格对应的年化报价 |
| 公布价格 | 每100美元面值99.96美元 | 实际付款按取得面值同比例换算 |

以下以**1K美元面值**计算，每半年票息为$1000\times4.25\%/2=21.25$美元. 发行日为起息日，首个票息日为2026-02-15；完整约定日程如下：

| 年份 | 2月15日：票息／本金 | 8月15日：票息／本金 |
|---|---:|---:|
| 2026 | 21.25／0 | 21.25／0 |
| 2027 | 21.25／0 | 21.25／0 |
| 2028 | 21.25／0 | 21.25／0 |
| 2029 | 21.25／0 | 21.25／0 |
| 2030 | 21.25／0 | 21.25／0 |
| 2031 | 21.25／0 | 21.25／0 |
| 2032 | 21.25／0 | 21.25／0 |
| 2033 | 21.25／0 | 21.25／0 |
| 2034 | 21.25／0 | 21.25／0 |
| 2035 | 21.25／0 | 21.25／1,000.00 |

共有20次票息，末期合付1,021.25美元. 425美元票息加1K美元本金，得到十年内各次支付的名义金额合计1,425美元.

这张表列的是**约定日**. 本例采用的财政部支付规则规定，若约定日遇周末或联储休业日，顺延到下一营业日，不额外增加利息. 2026-02-15是星期日，2月16日又在联储休业日表中，因此首笔按规则推得的**财政部付款日**为**2026-02-17**；其余未来付款日需按相应营业日历逐一确定.[^MBC-25][^MBC-26]

票息把本金的使用分成期间支付，本金则在到期时归还. 这种安排让出借人与借款人事先知道支付规则，但不保证投资者提前卖出时仍能拿回原来付出的价格. 合同时间表与二级市场转让价格，需要分别研究. [^MBC-10]

<a id="m06-price-yield"></a>
## 二、票息、价格与YTM

票息率乘的是面值. 若以 950 美元买入同样 1,000 面值，合同每半年仍付 21.25；若以 1,050 买入也一样. 市场价格改变的是取得这组现金流的成本，不会自动重写票息.

令 $CF_k$ 为第 $k$ 个半年期的合同现金流：前 19 期各 21.25，最后一期 1,021.25. 按名义年率 $y$、半年复利报价，期利率是 $y/2$. 在原始发行这个规则期点上，价格与收益率的关系为

$$
P(y)=\sum_{k=1}^{20}\frac{CF_k}{(1+y/2)^k}.
$$

**到期收益率（YTM）**是使约定现金流现值等于给定价格的内部收益率表示. 它由价格与合同现金流定义，不要求先假定票息按同一利率复投. 对本例正现金流，在$1+y/2>0$的范围内，$y$上升时$P(y)$下降. [^MBC-09]

代入官方原始拍卖的 $y=4.255\%$：

$$
P=\sum_{k=1}^{20}\frac{21.25}{(1+4.255\%/2)^k}
 +\frac{1000}{(1+4.255\%/2)^{20}}
 \approx999.596.
$$

官方报价换算到1K美元面值约999.596美元，与公式复算在公布精度一致.

Treasury原始发行的常规半年报价模型按约定票息期间折现. 非营业日顺延改变实际支付日期，并保留原合同利息金额；分析每日资金可用时间时应使用调整后的支付日账本.

为了看出“同一合同，不同价格”的含义，我们只改变教学收益率，保持全部现金流不动：

| 教学名义年收益率，半年复利 | 每1,000面值的价格 |
|---|---:|
| 3.000% | 1,107.30 |
| 4.255% | 999.60 |
| 6.000% | 869.82 |

这三点展示同一固定现金流的价格函数：要求收益率越高，取得价格越低. 年票息42.50除以当前价格得到当前收益率；YTM还计入票息时点以及到期面值与购买成本的差额.

<a id="m06-reopening"></a>
## 三、重开债券的净价、应计利息与全价

2025年10月2日公告、10月8日拍卖的重开券沿用CUSIP 91282CNT4、4.25%票息及2035-08-15到期日，新一批证券于2025-10-15交付.[^MBC-13]

到十月中旬，首个半年票息期间已经走过一部分. 新买方取得的是这只债券今后的支付权，包括下一次完整的票息；因此发行结果将净价与应计利息分列. 我们把同一面值下两次取得条件放在一起：[^MBC-14]

| 取得批次 | 原始发行 | 重开 |
|---|---:|---:|
| 交付日 | 2025-08-15 | 2025-10-15 |
| 官方高收益率 | 4.255% | 4.117% |
| 每100面值净价 | 99.96 | 101.057 |
| 每1,000面值净价 | 999.596 | 1,010.572 |
| 每1,000面值应计利息 | 0 | 7.045 |
| 每1,000面值全价 | 999.596 | **1,017.617** |

**净价（clean price）**把本期已经积累的利息单列；**全价（dirty/full price）**把它加回，表示本例不计额外交易费用的应付对价. 重开时，

$$
1{,}010.572+7.045\approx1{,}017.617.
$$

取得证券时支付7.045美元应计利息，下一次合同票息仍为21.25美元. 持有回报由取得全价、剩余票息、出售或到期所得共同决定.

本表使用官方应计数，并以净价加应计利息核对全价. 重开日位于票息期中，距离下一票息日不足半年；按收益率复算价格时，需要依结算日和计息约定处理首个不完整期间.

<a id="m06-return"></a>
## 四、YTM与实际持有回报

YTM由给定价格与合同现金流的内部收益率方程确定；实际持有财富还取决于是否按约履行、出售时点和中途票息的处理方式.

仍用原始取得成本 999.596，假设全部按约支付且持有至约定到期. 若每次票息只保留为不生息现金，到期合计财富为1,425. 以这个**终值财富**计算十年年化约为 $(1425/999.596)^{1/10}-1\approx3.609\%$. 若每笔票息均能按同一半年率 $4.255\%/2$ 复投到最后一个规则期点，终值为

$$
W_{20}
=\sum_{k=1}^{20}CF_k(1+y/2)^{20-k}
=P_0(1+y/2)^{20}.
$$

相应有效年复合率是 $(1+y/2)^2-1\approx4.300\%$；名义年率4.255%与有效年复合率不是同一口径. 两种财富路径都不改变原始YTM定义，只改变中途收款累积到同一终点的方式.

再换一个教学情景：收到两次票息后立即卖出，假设不计费用的出售所得为1,010美元. 投入仍为999.596，期间收票息42.50，终点出售1,010，则该段不复投的持有回报为

$$
\frac{1010+42.50-999.596}{999.596}\approx5.293\%.
$$

出售后，剩余十八次票息权利转给买方并反映在卖出价格中；再把未来票息加到卖出所得上会重复计算.

<a id="m06-experiment"></a>
## 五、原始发行与重开实验

<div data-experiment-slot="EXP-MC-M06-NOTE"></div>

实验有“原始发行”和“重开”两个原件视图. 固定面值1,000，检查20行约定日程及本金只出现在最后一期；切换重开后，合同日程沿原券继续，取得日、净价和应计改变. 收益率滑杆只对**原始发行的规则期现金流**开放，旁边分别标明官方报价与教学重定价.

不用交互也能完成同一任务：用第二节的3%、4.255%、6%三行价格，说明票息是否改变；再用第三节两批次表核算全价，并区分首个约定日2026-02-15与财政部规则付款日2026-02-17.

<a id="m06-exercises"></a>
## 六、练习与解析

### 题一·票息日程

某同学从2025-08-15开始每半年计21.25，一直算到2035-08-15，得到21次票息. 错在哪里？

**解析.** 首个约定票息日为2026-02-15，至2035-08-15共20期，前19期各付21.25美元，末期支付票息及本金共1,021.25美元. 非营业日按规则顺延付款.

### 题二·面值与报价单位

取2,000面值，分别算原始发行成本、每半年票息和重开全价. 4.255%是否也翻倍？

**解析.** 原始成本约1,999.192美元，票息42.5美元，重开全价约2,035.234美元. 收益率、票息率及每100面值报价均不翻倍. 面值只按比例放大金额.

### 题三·净价与应计利息

净价101.057是不是收到的利息？

**解析.** 101.057是每100面值的净购买价格. 1K面值的净价约1,010.572美元，另付应计利息约7.045美元，全价约1,017.617美元；下次收到的合同票息为21.25美元.

### 题四·YTM与再投资

不复投能不能定义YTM？

**解析.** 给定价格和约定现金流即可建立YTM方程. 计算某一终点财富的复合增长率，还需指定履约、持有期和中间现金再投资条件；提前出售时计入实际出售所得.

[^MBC-11]: U.S. Treasury，*Offering Announcement: 10-Year Note 91282CNT4*，2025-07-30. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20250730_1.pdf). 定位：PDF物理p1全文，Security Terms与Tender Information.

[^MBC-12]: U.S. Treasury，*Auction Results: 10-Year Note 91282CNT4*，2025-08-06. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf). 定位：PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest.

[^MBC-25]: U.S. Treasury / Government Publishing Office，*31 CFR §356.30: Payment of principal and interest*，2025-07-01 CFR edition. [原文](https://www.govinfo.gov/content/pkg/CFR-2025-title31-vol2/pdf/CFR-2025-title31-vol2-sec356-30.pdf). 定位：§356.30(a)，印刷p406.

[^MBC-26]: Board of Governors of the Federal Reserve System，*Holidays Observed — K.8*，2026–2030表；更新2026-07-08. [原文](https://www.federalreserve.gov/aboutthefed/k8.htm). 定位：2026列及周末观察规则、注释.

[^MBC-10]: U.S. Treasury, Bureau of the Fiscal Service，*Treasury Notes*，网页；取得2026-09-21. [原文](https://www.treasurydirect.gov/marketable-securities/treasury-notes/). 定位：主体及 Notes at a Glance 全表.

[^MBC-09]: Andrew W. Lo，*Finance Theory I: Fixed Income Securities*，MIT 15.401, Fall 2008, lecture file 2007–2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf). 定位：slides 12–19；slides 25–33；slides 35–47.

[^MBC-13]: U.S. Treasury，*Reopening Announcement: 91282CNT4*，2025-10-02. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20251002_2.pdf). 定位：PDF物理p1全文.

[^MBC-14]: U.S. Treasury，*Reopening Auction Results: 91282CNT4*，2025-10-08. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20251008_2.pdf). 定位：PDF物理p1全文.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MC-M06-NOTE",
    "title": "国债日程、原发行与重开",
    "anchor": "m06-experiment",
    "description": "两批次共享同一合同日程；重开不用原始20完整期模型.",
    "inputs": {
      "case": [
        "original",
        "reopening"
      ],
      "face": {
        "default": 1000,
        "unit": "USD face",
        "step": 100
      },
      "yield": {
        "default": 0.04255,
        "unit": "nominal annual; q=2",
        "enabled_only": "original",
        "min": 0,
        "max": 0.2
      }
    },
    "outputs": {
      "original": {
        "which": "original",
        "face": 1000,
        "issue": "2025-08-15",
        "official_yield": 0.04255,
        "clean": 999.5962,
        "accrued": 0,
        "full": 999.5962,
        "model": {
          "price": 999.5961995990485,
          "coupon": 21.25,
          "mac": 8.249177066596465,
          "modified": 8.077331831873359,
          "dv01": 0.807407020204103,
          "convexity": 77.53054929520565,
          "d1": -8074.07020204103,
          "d2": 77499.24242831426,
          "effective_annual": 0.04300262562499979,
          "cashflows": [
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            21.25,
            1021.25
          ]
        },
        "schedule": [
          {
            "period": 1,
            "contract_date": "2026-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 2,
            "contract_date": "2026-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 3,
            "contract_date": "2027-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 4,
            "contract_date": "2027-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 5,
            "contract_date": "2028-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 6,
            "contract_date": "2028-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 7,
            "contract_date": "2029-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 8,
            "contract_date": "2029-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 9,
            "contract_date": "2030-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 10,
            "contract_date": "2030-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 11,
            "contract_date": "2031-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 12,
            "contract_date": "2031-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 13,
            "contract_date": "2032-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 14,
            "contract_date": "2032-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 15,
            "contract_date": "2033-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 16,
            "contract_date": "2033-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 17,
            "contract_date": "2034-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 18,
            "contract_date": "2034-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 19,
            "contract_date": "2035-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 20,
            "contract_date": "2035-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 1000,
            "coupon": 21.25,
            "principal": 1000,
            "cashflow": 1021.25
          }
        ],
        "identity": "source-backed contract; face/slider are teaching settings; actual receipt unverified"
      },
      "reopening": {
        "which": "reopening",
        "face": 1000,
        "issue": "2025-10-15",
        "official_yield": 0.04117,
        "clean": 1010.5722599999999,
        "accrued": 7.04484,
        "full": 1017.6170999999999,
        "model": null,
        "schedule": [
          {
            "period": 1,
            "contract_date": "2026-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 2,
            "contract_date": "2026-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 3,
            "contract_date": "2027-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 4,
            "contract_date": "2027-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 5,
            "contract_date": "2028-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 6,
            "contract_date": "2028-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 7,
            "contract_date": "2029-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 8,
            "contract_date": "2029-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 9,
            "contract_date": "2030-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 10,
            "contract_date": "2030-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 11,
            "contract_date": "2031-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 12,
            "contract_date": "2031-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 13,
            "contract_date": "2032-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 14,
            "contract_date": "2032-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 15,
            "contract_date": "2033-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 16,
            "contract_date": "2033-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 17,
            "contract_date": "2034-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 18,
            "contract_date": "2034-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 19,
            "contract_date": "2035-02-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 0,
            "coupon": 21.25,
            "principal": 0,
            "cashflow": 21.25
          },
          {
            "period": 20,
            "contract_date": "2035-08-15",
            "coupon_per_1000": 21.25,
            "principal_per_1000": 1000,
            "coupon": 21.25,
            "principal": 1000,
            "cashflow": 1021.25
          }
        ],
        "identity": "source-backed contract; face/slider are teaching settings; actual receipt unverified"
      }
    },
    "algorithm": "P=sum(CF_k/(1+y/2)^k); clean=face*price_per_100/100; accrued=face*accrued_per_1000/1000; full=clean+accrued",
    "boundaries": [
      "面值为100整数倍",
      "官方条款只读",
      "重开返回model=null",
      "日程为约定日；首日历调整另列；无账户到账证明"
    ],
    "static_equivalent": "正文二/三节价格表与第一节完整20期表；HTML静态表一致.",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  }
]
```

## Sources
- [Finance Theory I: Fixed Income Securities](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf): 零息利率、票息债券现金流、YTM、久期和凸性. slide 41凸性末项的符号由本文所列导数推导校正；远期利率与未来现货利率预测分别需要定价和预期条件.
- [Treasury Notes](https://www.treasurydirect.gov/marketable-securities/treasury-notes/): 美国票息国债的期限、半年付息及持有和出售安排.
- [Offering Announcement: 10-Year Note 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20250730_1.pdf): 原发行日期、到期日、半年票息日及报价单位.
- [Auction Results: 10-Year Note 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf): 4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计.
- [Reopening Announcement: 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/A_20251002_2.pdf): 同一CUSIP重开、2025-10-15交付、相同票息/到期日及应计期间.
- [Reopening Auction Results: 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20251008_2.pdf): 重开净价101.057226/100、应计7.04484/1000、高收益率4.117%；本包不另反算重开YTM.
- [31 CFR §356.30: Payment of principal and interest](https://www.govinfo.gov/content/pkg/CFR-2025-title31-vol2/pdf/CFR-2025-title31-vol2-sec356-30.pdf): 本金/票息支付与遇周末或联储非营业日顺延且不加利息的规则，用于2025发行案例.
- [Holidays Observed — K.8](https://www.federalreserve.gov/aboutthefed/k8.htm): 2026-02-16 是 Washington’s Birthday，联储休业. 结合星期日 2026-02-15 及国债付款规则，对应付款日顺延至 2026-02-17.

## Content relations
```json
[
  {
    "from": "zh-m06",
    "relation": "part_of",
    "to": "markets-fixed-income",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m06",
    "relation": "requires",
    "to": "zh-financial-claims",
    "reason": "实际所需能力，不由推荐相邻推定",
    "required_competence": "识别义务主体、权利事项、日期和单位",
    "status": "external_delivered"
  },
  {
    "from": "zh-m06",
    "relation": "illustrated_by",
    "to": "case-mbc-ust-91282cnt4",
    "reason": "2025-07-30至2025-10-15发行/重开文件"
  },
  {
    "from": "m06-experiment",
    "relation": "illustrated_by",
    "to": "EXP-MC-M06-NOTE",
    "reason": "两批次共享同一合同日程；重开不用原始20完整期模型."
  },
  {
    "from": "m06-contract",
    "relation": "supported_by",
    "to": "MBC-11",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文，Security Terms与Tender Information",
    "scope": "原发行日期、到期日、半年票息日及报价单位."
  },
  {
    "from": "m06-contract",
    "relation": "supported_by",
    "to": "MBC-12",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest",
    "scope": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计."
  },
  {
    "from": "m06-contract",
    "relation": "supported_by",
    "to": "MBC-25",
    "reason": "该单元原件依据",
    "locator": "§356.30(a)，印刷p406",
    "scope": "本金/票息支付与遇周末或联储非营业日顺延且不加利息的规则，用于2025发行案例."
  },
  {
    "from": "m06-contract",
    "relation": "supported_by",
    "to": "MBC-26",
    "reason": "该单元原件依据",
    "locator": "2026列及周末观察规则、注释",
    "scope": "2026-02-16休业与星期日2026-02-15结合，推算首次财政部规则付款日2026-02-17；非账户到账记录."
  },
  {
    "from": "m06-price-yield",
    "relation": "supported_by",
    "to": "MBC-09",
    "reason": "该单元原件依据",
    "locator": "slides 12–19；slides 25–33；slides 35–47",
    "scope": "零息利率、票息债券现金流、YTM、久期与凸性. 采用独立导数校验；不采用forward=预测的简化及slide41末项错号."
  },
  {
    "from": "m06-reopening",
    "relation": "supported_by",
    "to": "MBC-13",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文",
    "scope": "同一CUSIP重开、2025-10-15交付、相同票息/到期日及应计期间."
  },
  {
    "from": "m06-reopening",
    "relation": "supported_by",
    "to": "MBC-14",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文",
    "scope": "重开净价101.057226/100、应计7.04484/1000、高收益率4.117%；本包不另反算重开YTM."
  },
  {
    "from": "case-mbc-ust-91282cnt4",
    "relation": "supported_by",
    "to": "MBC-11",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PDF物理p1全文，Security Terms与Tender Information",
    "scope": "原始交付2025-08-15、重开交付2025-10-15；同一CUSIP、4.25%票息和2035-08-15约定到期. 比较价格、应计及取得日期，合同日程不重启."
  },
  {
    "from": "case-mbc-ust-91282cnt4",
    "relation": "supported_by",
    "to": "MBC-12",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest",
    "scope": "原始交付2025-08-15、重开交付2025-10-15；同一CUSIP、4.25%票息和2035-08-15约定到期. 比较价格、应计及取得日期，合同日程不重启."
  },
  {
    "from": "case-mbc-ust-91282cnt4",
    "relation": "supported_by",
    "to": "MBC-13",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PDF物理p1全文",
    "scope": "原始交付2025-08-15、重开交付2025-10-15；同一CUSIP、4.25%票息和2035-08-15约定到期. 比较价格、应计及取得日期，合同日程不重启."
  },
  {
    "from": "case-mbc-ust-91282cnt4",
    "relation": "supported_by",
    "to": "MBC-14",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PDF物理p1全文",
    "scope": "原始交付2025-08-15、重开交付2025-10-15；同一CUSIP、4.25%票息和2035-08-15约定到期. 比较价格、应计及取得日期，合同日程不重启."
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 7/17
从原始发行与重开文件重建票息日程、净价、全价和持有回报.
利率与短期资金可从选读分支进入；接着把未来义务放进远期与期货合约.
Next: [远期与期货的合约结构](https://ou-liu-red-sugar.github.io/zh/notebook/forward-futures-contracts/)
