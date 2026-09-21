# 债券利率、信用与期限风险

从固定现金流的局部敏感度与曲线扭曲，区分信用、流动性和赎回通道。

Entry: zh-m07 | Node: M07 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M07。先读MIT指定完整单元和两份真实合约来源；采用研究卡时才额外读NY Fed对应方法、表2/3原页和结论，不从摘要复述因果。记录实际读取，不预填read_complete。
先让我说保持什么不变、改变什么，再按同一现金流求P'、P''。25bp=0.0025：4.255%变4.505%或4.005%。不沿用MIT末项凸性负号，不把forward当预测。随后用50/50/1050、年复利三点spot逐期重算五情景；YTM另解，是摘要，不是整条曲线。不要把半年复利移植到三点年复利例。
让我解释扁平化为何本例涨，不能推出所有债券涨。研究里的价格bp不许直接乘DV01；样本是2017–2024非2026现状。Barclays首次全额赎回须标假设、通知/部分赎回条款保留，不能以1525>1157.5排名回报。用一项混合情景让读者分别定位现金流/折现率/交易成本/选择权。
NY Fed流动性卡必须把2.07/3.73写成2017-07至2024-06全样本列的proportional effective spread（价格bp），不要错读成March2020列或yield bp。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MBC-09",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf"
      },
      "required_unit": {
        "locator": "slides12–19、25–33、35–42",
        "scope": "slides12–19、25–33、35–42的完整指定单元，含必要脚注与表头",
        "purpose": "spot/单一YTM/局部导数三层区分；修正错号"
      },
      "supports": "零息利率、票息债券现金流、YTM、久期与凸性。采用独立导数校验；不采用forward=预测的简化及slide41末项错号。",
      "version": "MIT 15.401, Fall 2008, lecture file 2007–2008",
      "title": "Finance Theory I: Fixed Income Securities",
      "authors": [
        "Andrew W. Lo"
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
        "purpose": "原始现金流与年率约定"
      },
      "supports": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计。",
      "version": "2025-08-06",
      "title": "Auction Results: 10-Year Note 91282CNT4",
      "authors": [
        "U.S. Treasury"
      ]
    },
    {
      "source_id": "MBC-15",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/312070/000191870426020298/form424b2.htm"
      },
      "required_unit": {
        "locator": "PS-1–PS-3条款；Selected Risk Factors中issuer/call/liquidity完整小节",
        "scope": "PS-1–PS-3条款；Selected Risk Factors中issuer/call/liquidity完整小节的完整指定单元，含必要脚注与表头",
        "purpose": "赎回、信用、流动性真实条款"
      },
      "supports": "票息5.25%、30/360、年付、2029-07-17起可按季全额或部分赎回及受托人通知；无担保信用、非存款、做市无保证。不作完整bail-in法律解读。",
      "version": "2026-07-15; CUSIP06749HU29",
      "title": "Callable Fixed Rate Notes due July 17, 2036: Pricing Supplement",
      "authors": [
        "Barclays Bank PLC"
      ]
    }
  ],
  "optional_readings": [
    {
      "source_id": "MBC-16",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1170.pdf"
      },
      "required_unit": {
        "locator": "Abstract；Introduction/§1；§2交易量及有效价差的定义、过滤与Tables2–3；Conclusion",
        "scope": "Abstract；Introduction/§1；§2交易量及有效价差的定义、过滤与Tables2–3；Conclusion的完整指定单元，含必要脚注与表头",
        "purpose": "只有选研究卡才读样本、筛选、表2/3和结论；不用未读回归"
      },
      "supports": "2017-07–2024-06样本中OTR与旧券的成交/价差差异。价格bp不等于收益率bp，统计对照不识别因果，不称2026现状。",
      "version": "NY Fed Staff Report1170, November2025",
      "branch": "liquidity-research"
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
      "EXP-MC-M07-LOCAL",
      "EXP-MC-M07-CURVE"
    ],
    "identity": "单一冻结输入；真实条款只读，教学项另标"
  }
}
```

## Supplied entry
一只债券价格下跌，并不自动告诉我们“利率上升了”。也可能是对履约能力的判断变了、卖出更困难了，或者发行人拥有的提前赎回权变得重要。要解释价格，先问：**我们保持了什么不变，这次又改变了哪一层？**

本篇先沿用[债券的合约现金流与价格](https://ou-liu-red-sugar.github.io/zh/notebook/bond-contract-cashflows-price/)中91282CNT4的固定现金流，再从单一收益率走到期限结构，最后把信用、交易流动性与赎回选择权放回真实合约。核心阅读约18–20分钟；研究卡可作为选读。需要能从一组给定现金流计算现值，不需要先修完整的信用模型或对冲课程。

<a id="m07-rate-risk"></a>
## 一、保持现金流不变，价格为什么仍会动？

先把市场中的其他变化暂时固定。对原始发行、1,000面值的91282CNT4，现金流仍是19次21.25，最后一次1,021.25。按半年复利、名义年率 $y$ 计价，$P(y)=\sum CF_k(1+y/2)^{-k}$。本金和票息没有变，变的是买方愿意用什么收益率取得这组现金流。[^MBC-12][^MBC-09]

为了把小变化写成有单位的量，对年收益率求导：

$$
P'(y)=-\sum_{k=1}^{20}\frac{k\,CF_k}{2(1+y/2)^{k+1}}.
$$

本例每个 $CF_k>0$、$1+y/2>0$，所以导数为负。价格随这个统一收益率上升而下降，不是经验猜测，而是给定现金流和折现约定下的数学性质。若合同本身允许赎回，未来现金流会随条件变化，这个固定现金流论证的适用范围就必须重新检查。

**Macaulay久期**把每笔现金流的发生时间，用其现值占总价的比重加权：

$$
D_M=\frac{\sum_{k=1}^{20}(k/2)\,CF_k(1+y/2)^{-k}}{P(y)}.
$$

它的时间单位是年，$k/2$ 不是 $k$。**修正久期**为 $D_{\rm mod}=D_M/(1+y/2)=-P'(y)/P(y)$，描述价格对这里的名义年收益率的局部敏感度。久期不是“还剩多久才到期”的别名：中间票息使部分经济价值较早收到。[^MBC-09]

<a id="m07-duration"></a>
## 二、DV01和凸性：把近似与精确重算放在一起

在 $y=4.255\%$ 时，计算得到：

| 量 | 本例数值与单位 |
|---|---:|
| 价格 $P$ | 999.5962美元／1,000面值 |
| Macaulay久期 | 8.2492年 |
| 修正久期 | 8.0773年，按本文年率约定 |
| DV01 | 0.8074美元／1,000面值／1bp |
| 凸性 $C=P''(y)/P(y)$ | 77.5305年²，按同一年率约定 |

这里 $1\text{bp}=0.0001$，因此取正的金额敏感度 $\mathrm{DV01}=P D_{\rm mod}\times0.0001$。收益率上升1bp时的一阶价格变化约为负0.8074美元；这个符号来自利率方向，不能把表里的正DV01直接当价格涨幅。

继续对价格函数求导：

$$
P''(y)=\sum_{k=1}^{20}\frac{k(k+1)\,CF_k}{4(1+y/2)^{k+2}}>0.
$$

对小的年收益率变化 $\Delta y$，局部展开为

$$
P(y+\Delta y)\approx P(y)
\left[1-D_{\rm mod}\Delta y+\frac12 C(\Delta y)^2\right].
$$

二阶项是正的。它说明这条固定现金流价格曲线有正曲率；不应在公式末尾机械添一个负号。现在用同一函数精确重算，检验近似究竟差了多少：

| 教学冲击 | 冲击后名义年率 | 精确价格 | 仅久期一阶 | 加凸性二阶 |
|---|---:|---:|---:|---:|
| +25bp | **4.505%** | 979.6511 | 979.4110 | 979.6532 |
| −25bp | **4.005%** | 1,020.0257 | 1,019.7814 | 1,020.0236 |

+25bp的一阶预测比精确价格低约0.2401美元，二阶预测则高约0.0021美元。−25bp时也存在曲率修正，所以价格涨跌并不严格对称。二阶更接近不等于对任何幅度、任何债券都准确；特别是信用事件或赎回行为改变现金流时，不能只靠多加一项泰勒展开解决。

<div data-experiment-slot="EXP-MC-M07-LOCAL"></div>

先把冲击从25bp改为100bp，再比较一阶、二阶与精确值。实验始终保留相同现金流，显示冲击使用的是“年收益率的bp”，不是价格bp。把面值放大十倍，金额价格、DV01和误差放大十倍；久期与相对凸性不因此改变。

<a id="m07-curve-shape"></a>
## 三、一条YTM不是整条收益率曲线

前两节用一个 $y$ 压缩这只债券的价格。如果不同期限的利率不是一起动，单一滑杆就不足以描述市场变化。我们用一组更短的固定现金流，把这个区别单独看清：第1年付50，第2年付50，第3年付1,050。这是MIT讲义slide25的教学现金流；下面的零息利率则全部是本篇的**教学设定**，不是某一天的美国国债曲线。[^MBC-09]

令 $s_t$ 是期限 $t$ 年的年复利零息利率，每一期使用与自身期限对应的折现因子：

$$
P(s_1,s_2,s_3)=
\frac{50}{1+s_1}
+\frac{50}{(1+s_2)^2}
+\frac{1050}{(1+s_3)^3}.
$$

注意这里是**年复利**，不是上一只国债的半年复利。Base曲线设为3%、3.5%、4%，三项现值分别为48.543689、46.675535、933.446177，合计1,028.665401。

我们只改变利率，不改变任何现金流。平行上移是在三个点都加25bp；扁平化扭曲是在短端加25bp、长端减25bp、中点不动；陡峭化则反过来。

| 教学曲线 | 1年spot | 2年spot | 3年spot | 精确价格 | 相对Base变化 | 同价单一YTM摘要 |
|---|---:|---:|---:|---:|---:|---:|
| Base | 3.00% | 3.50% | 4.00% | 1,028.665401 | 0.000000 | 3.967680% |
| 平行+25bp | 3.25% | 3.75% | 4.25% | 1,021.623842 | −7.041559 | 4.217568% |
| 平行−25bp | 2.75% | 3.25% | 3.75% | 1,035.773894 | +7.108493 | 3.717792% |
| 扁平化扭曲 | 3.25% | 3.50% | 3.75% | 1,035.311938 | +6.646537 | 3.733959% |
| 陡峭化扭曲 | 2.75% | 3.50% | 4.25% | 1,022.084163 | −6.581238 | 4.201160% |

这些价格全部是**逐期精确重定价**，不是久期近似。扁平化时第一期现值下降，最后一期上升；本例最后一期1,050的权重大，因此合计价格上升。换成主要在第一年付款的现金流，结论可以不同。每一期的局部导数 $-tCF_t/(1+s_t)^{t+1}$ 也表明：敏感度同时取决于金额、期限和折现率，不只看“长端”这个名字。

表中最后一列是另解一个方程得到的：

$$
P=\frac{50}{1+y}+\frac{50}{(1+y)^2}
+\frac{1050}{(1+y)^3}.
$$

这个 $y$ 是让三笔现金流产生**同一价格**的单率摘要，并不是说三个spot rates原来就相等。改变现金流组合，即使面对同一spot曲线，YTM摘要也可能不同。远期利率同样是由可交易期限价格关系定义的量，不能不加风险溢价、模型和预期假设就叫作未来现货利率的预测。

<div data-experiment-slot="EXP-MC-M07-CURVE"></div>

图中横轴为1、2、3年，纵轴为年复利spot rate。先只看五条线的形状，再对照价格表；之后改变短端或长端默认spot，检查每一期现值如何变化。没有交互时，上面的五行表和三项Base现值就是完整静态实验。

<a id="case-mbc-barc-callable-20260715"></a>
<a id="m07-credit-liquidity-call"></a>
## 四、哪些变化不能只塞进“利率风险”？

**信用改变的是履约。** 若发行人没有按约支付，原定现金流不再是实际现金流。给同一支付承诺换一个折现率，有时能概括市场价格差异，但不能代替对偿付能力、顺位和回收安排的分析。

看一个不同的真实合同：Barclays Bank PLC于2026-07-15定价的票据，CUSIP **06749HU29**，2026-07-17发行、2036-07-17到期。面额1,000，固定年票息5.25%，按30/360、每年7月17日支付，首息2027-07-17。它是发行人的无担保债务，不是受存款保险保障的银行存款；固定票息没有消除发行人信用风险。[^MBC-15]

**流动性改变的是转手条件。** 同一条款的未来付款不变，今天也可能难以按参考估值卖出。上述票据不在证券交易所上市，关联机构可能做市但没有持续做市义务。这限制的是实际退出路径，不能凭“价格模型有结果”就宣称一定能以该价成交。[^MBC-15]

<details>
<summary>选读研究：同一个发行主体，也会有不同的交易流动性</summary>

NY Fed的2025年Staff Report1170使用2017年7月至2024年6月TRACE样本研究在发基准券与旧券。10年期限组中，Table2的全样本平均日成交额分别为92.05和6.73**十亿美元**；Table3在 **July 2017–June 2024 全样本列**给出的 proportional effective bid-ask spread 分别为2.07和3.73**价格bp**。Table3另有 March 2020 压力期列，本篇这两个2.07/3.73数字不是那一列。这里比较的是on-the-run与第一档off-the-run，不是换成两个信用主体。[^MBC-16]

这个proportional effective spread由客户买入均价与卖出均价之差，相对于两者中点价格来度量；样本还剔除特定交易条件码，保留25至250的十进制债券价格及100万至2,500万美元交易，并剔除债券—日层面为负的有效价差。它是已执行交易的样本交易成本指标，不是所有报价深度；更不是把3.73bp当成收益率冲击去乘DV01。历史差异提示要研究交易条件，却没有单独证明旧券身份的因果效应，也不能当作2026年9月实时水平。

</details>

**赎回选择权会改写剩余支付路径。** 这只Barclays票据从2029-07-17起，允许发行人在规定季度日期全部或部分提前赎回，须至少提前5个营业日通知受托人，赎回支付本金及截至规定时点的应计未付利息。[^MBC-15] 选择留在发行人一侧：投资者拿到的是含这一条件的固定票息债权，而不是绝对保留十年票息的权利。较高票息本身不能证明足以补偿这些限制，需要另作定价与比较。

为了理解条款，固定面值1,000，先只列两种**假设均依约支付**的路径：

| 合同情景 | 完整年度票息次数 | 本金支付时间 | 未折现名义合计 |
|---|---:|---|---:|
| 从不提前赎回，持有至2036-07-17 | 10 | 约定到期日 | $10×52.50+1000=1,525.00$ |
| 假设首次可赎回日2029-07-17全额行权 | 3 | 第三次付息同日 | $3×52.50+1000=1,157.50$ |

第二行不是赎回预测，现实条款还允许部分赎回。两行的期限不同，不能用1,525较大就宣布第一行“回报更好”。被截断的以后七次票息，也不能直接命名为投资亏损：本金更早返还，之后的再投资、购买价格和时间价值都必须一起处理。

<a id="m07-risk-map"></a>
## 五、把变化放回它实际改变的那一层

现在再遇到一条“债券跌了”的观察，可以按下面顺序定位，而不是先套一个风险标签：

| 这次改变了什么？ | 可以先保持什么不变？ | 合适的计算或证据 |
|---|---|---|
| 同一价格函数中的要求收益率 | 合同现金流 | 精确重定价，再检查DV01近似 |
| 不同期限的零息率分别移动 | 每一期现金流 | 各期限折现，不把YTM当整条曲线 |
| 信用事件或偿付能力判断 | 条款中的承诺文本 | 另分析能否、多少、何时履约；不能仅用固定现金流导数 |
| 深度、价差、做市能力 | 可以仍是同一发行人同一承诺 | 实际交易/报价证据及退出成本 |
| 发行人行使赎回权 | 已知的条件条款 | 分情景重建剩余现金流及本金返还时间 |

这些因素可以同时发生。把它们分开，不是宣称市场里一次只变一件事，而是让我们的每一步解释都有可核对的输入。固定现金流、利率约定、数据样本、合约条件各自负责自己的结论。

<a id="m07-exercises"></a>
## 六、四道迁移题

### 题一：把25bp写成0.25，会怎样？

**解析。** 在年收益率小数中，25bp是0.0025，不是0.25。原率0.04255应变成0.04505或0.04005。把单位错100倍，再精确的导数也救不回来。一阶金额为约 $999.5962×8.0773×0.0025=20.1852$ 美元；上行时减去，下行时加上，并用精确值检验误差。

### 题二：长端下降，所有债券都涨吗？

**解析。** 不能只凭这一句判断。三点扁平化情景同时让短端上升。对50/50/1050，末期现值权重大，合计上涨；若主要现金流在第一年，短端上升可能占主导。必须用同一条完整变化曲线和相应现金流逐期重算。

### 题三：旧券的3.73bp该乘哪一个DV01？

**解析。** 这里不应直接乘任何DV01。论文该数是交易价格口径的有效价差bp，而本篇DV01是年收益率变化1bp引起的局部价格金额。它们分子分母、样本和经济含义不同。把旧券较宽价差解释为财政部突然更可能违约，也缺少证据。

### 题四：提前赎回少付367.50票息，是否亏了367.50？

**解析。** $7×52.50=367.50$是两个条件路径名义票息总额之差，不是同一期限的投资损益。首次赎回路径在2029年返还本金，到期路径在2036年返还；购买成本、折现及本金返还后的机会均不同。先重建现金流，再选择共同的持有期与再投资条件，才能比较回报。

本篇真正要留下的不是几个风险名称，而是一个动作：**先说固定什么、改变什么，再选择与这一层相匹配的计算。**


[^MBC-12]: U.S. Treasury，*Auction Results: 10-Year Note 91282CNT4*，2025-08-06。[原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf)。定位：PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest。

[^MBC-09]: Andrew W. Lo，*Finance Theory I: Fixed Income Securities*，MIT 15.401, Fall 2008, lecture file 2007–2008。[原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf)。定位：slides 12–19；slides 25–33；slides 35–47。

[^MBC-15]: Barclays Bank PLC，*Callable Fixed Rate Notes due July 17, 2036: Pricing Supplement*，2026-07-15; CUSIP06749HU29。[原文](https://www.sec.gov/Archives/edgar/data/312070/000191870426020298/form424b2.htm)。定位：PS-1–PS-3条款与文件链；Selected Risk Factors: issuer risk, early redemption, liquidity。

[^MBC-16]: Alain Chaboud, Ellen Correia Golay, Michael J. Fleming, Yesol Huh, Frank M. Keane, Or Shachar，*Liquidity and Trading Dynamics in the Off-the-Run U.S. Treasury Market*，NY Fed Staff Report1170, November2025。[原文](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1170.pdf)。定位：Abstract；Introduction与§1市场背景；§2设定、Tables2–3（PDF物理pp8、10）；Conclusion（印刷p16）。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MC-M07-CURVE",
    "title": "平行与扭曲：三点spot精确重定价",
    "anchor": "m07-curve-shape",
    "description": "50/50/1050年复利教学现金流；五条spot曲线与同价YTM。",
    "inputs": {
      "base_spot": {
        "default": [
          0.03,
          0.035,
          0.04
        ],
        "unit": "annual-compounded spot"
      },
      "cashflows": [
        50,
        50,
        1050
      ],
      "times": [
        1,
        2,
        3
      ],
      "shock_bp": {
        "default": 25,
        "min": 0,
        "max": 200
      }
    },
    "outputs": {
      "rows": [
        {
          "name": "base",
          "spot_rates": [
            0.03,
            0.035,
            0.04
          ],
          "pv": [
            48.543689320388346,
            46.675535018320154,
            933.4461766044606
          ],
          "price": 1028.665400943169,
          "ytm": 0.03967680030171661,
          "delta": 0,
          "delta_pct": 0
        },
        {
          "name": "parallel_up",
          "spot_rates": [
            0.0325,
            0.037500000000000006,
            0.0425
          ],
          "pv": [
            48.426150121065376,
            46.45086369574683,
            926.7468277849125
          ],
          "price": 1021.6238416017247,
          "ytm": 0.04217568272130967,
          "delta": -7.0415593414443265,
          "delta_pct": -0.6845335067154021
        },
        {
          "name": "parallel_down",
          "spot_rates": [
            0.0275,
            0.0325,
            0.0375
          ],
          "pv": [
            48.661800486618,
            46.9018403109592,
            940.2102531187311
          ],
          "price": 1035.7738939163082,
          "ytm": 0.03717791640059198,
          "delta": 7.108492973139164,
          "delta_pct": 0.6910403486519023
        },
        {
          "name": "flattening",
          "spot_rates": [
            0.0325,
            0.035,
            0.0375
          ],
          "pv": [
            48.426150121065376,
            46.675535018320154,
            940.2102531187311
          ],
          "price": 1035.3119382581167,
          "ytm": 0.03733959259821684,
          "delta": 6.646537314947636,
          "delta_pct": 0.6461320959034413
        },
        {
          "name": "steepening",
          "spot_rates": [
            0.0275,
            0.035,
            0.0425
          ],
          "pv": [
            48.661800486618,
            46.675535018320154,
            926.7468277849125
          ],
          "price": 1022.0841632898507,
          "ytm": 0.04201160246940827,
          "delta": -6.58123765331834,
          "delta_pct": -0.6397840976554761
        }
      ],
      "cashflows": [
        50,
        50,
        1050
      ],
      "times": [
        1,
        2,
        3
      ],
      "compounding": "annual",
      "identity": "synthetic curves; no Treasury historical quotes"
    },
    "algorithm": "PV_t=CF_t/(1+s_t)^t; five vector shifts; YTM by monotone bisection on same annual cashflows",
    "boundaries": [
      "全部曲线为教学设定",
      "三个正现金流固定；期限递增；1+s>0",
      "各场景独立精确计算，不用YTM替代曲线",
      "不生成key-rate hedge"
    ],
    "static_equivalent": "正文五行精确价格表、三项PV；HTML五条三点曲线与每场景三项PV表。",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  },
  {
    "id": "EXP-MC-M07-LOCAL",
    "title": "精确价格与久期/凸性误差",
    "anchor": "m07-duration",
    "description": "年收益率bp冲击，不等于交易价格bp。",
    "inputs": {
      "face": {
        "default": 1000,
        "unit": "USD face"
      },
      "shock_bp": {
        "default": 25,
        "min": -200,
        "max": 200,
        "unit": "annual yield bp"
      }
    },
    "outputs": {
      "up": {
        "base": {
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
        "shock_bp": 25,
        "after_yield": 0.04505,
        "exact": 979.6511242124321,
        "linear": 979.4110240939459,
        "quadratic": 979.6532092265344,
        "linear_error": -0.24010011848622526,
        "quadratic_error": 0.0020850141022492608
      },
      "down": {
        "base": {
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
        "shock_bp": -25,
        "after_yield": 0.040049999999999995,
        "exact": 1020.0256741897387,
        "linear": 1019.7813751041512,
        "quadratic": 1020.0235602367396,
        "linear_error": -0.24429908558749958,
        "quadratic_error": -0.0021139529990250594
      }
    },
    "algorithm": "Dmod=-P'/P; C=P''/P; linear=P+P'*dy; quadratic=linear+0.5*P''*dy^2; exact=P(y+dy)",
    "boundaries": [
      "固定正现金流",
      "半年复利的名义年率",
      "不模拟违约、赎回或曲线扭曲",
      "错误输入不输出数值结果"
    ],
    "static_equivalent": "正文±25bp表，HTML默认同表；图精确/一阶/二阶三条线。",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  }
]
```

## Sources
- [Finance Theory I: Fixed Income Securities](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf): 零息利率、票息债券现金流、YTM、久期与凸性。采用独立导数校验；不采用forward=预测的简化及slide41末项错号。
- [Auction Results: 10-Year Note 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf): 4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计。
- [Callable Fixed Rate Notes due July 17, 2036: Pricing Supplement](https://www.sec.gov/Archives/edgar/data/312070/000191870426020298/form424b2.htm): 票息5.25%、30/360、年付、2029-07-17起可按季全额或部分赎回及受托人通知；无担保信用、非存款、做市无保证。不作完整bail-in法律解读。
- [Liquidity and Trading Dynamics in the Off-the-Run U.S. Treasury Market](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1170.pdf): 2017-07–2024-06样本中OTR与旧券的成交/价差差异。核心2.07/3.73为Table3全样本列的proportional effective bid-ask spread（价格bp）；March2020另列。统计对照不识别因果，不称2026现状。

## Content relations
```json
[
  {
    "from": "zh-m07",
    "relation": "part_of",
    "to": "markets-fixed-income",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m07",
    "relation": "requires",
    "to": "zh-m06",
    "reason": "实际所需能力，不由推荐相邻推定",
    "required_competence": "按约定CF和单位计算价格",
    "status": "in_batch"
  },
  {
    "from": "zh-m07",
    "relation": "illustrated_by",
    "to": "case-mbc-ust-91282cnt4",
    "reason": "2025-07-30至2025-10-15发行/重开文件"
  },
  {
    "from": "zh-m07",
    "relation": "illustrated_by",
    "to": "case-mbc-barc-callable-20260715",
    "reason": "2026-07-15定价；2026–2036约定期限"
  },
  {
    "from": "m07-duration",
    "relation": "illustrated_by",
    "to": "EXP-MC-M07-LOCAL",
    "reason": "年收益率bp冲击，不等于交易价格bp。"
  },
  {
    "from": "m07-curve-shape",
    "relation": "illustrated_by",
    "to": "EXP-MC-M07-CURVE",
    "reason": "50/50/1050年复利教学现金流；五条spot曲线与同价YTM。"
  },
  {
    "from": "m07-duration",
    "relation": "supported_by",
    "to": "MBC-09",
    "reason": "该单元原件依据",
    "locator": "slides 12–19；slides 25–33；slides 35–47",
    "scope": "零息利率、票息债券现金流、YTM、久期与凸性。采用独立导数校验；不采用forward=预测的简化及slide41末项错号。"
  },
  {
    "from": "m07-rate-risk",
    "relation": "supported_by",
    "to": "MBC-12",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest",
    "scope": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计。"
  },
  {
    "from": "m07-curve-shape",
    "relation": "supported_by",
    "to": "MBC-09",
    "reason": "该单元原件依据",
    "locator": "slides 12–19；slides 25–33；slides 35–47",
    "scope": "零息利率、票息债券现金流、YTM、久期与凸性。采用独立导数校验；不采用forward=预测的简化及slide41末项错号。"
  },
  {
    "from": "m07-credit-liquidity-call",
    "relation": "supported_by",
    "to": "MBC-15",
    "reason": "该单元原件依据",
    "locator": "PS-1–PS-3条款与文件链；Selected Risk Factors: issuer risk, early redemption, liquidity",
    "scope": "票息5.25%、30/360、年付、2029-07-17起可按季全额或部分赎回及受托人通知；无担保信用、非存款、做市无保证。不作完整bail-in法律解读。"
  },
  {
    "from": "m07-credit-liquidity-call",
    "relation": "supported_by",
    "to": "MBC-16",
    "reason": "该单元原件依据",
    "locator": "Abstract；Introduction与§1市场背景；§2设定、Tables2–3（PDF物理pp8、10）；Conclusion（印刷p16）",
    "scope": "2017-07–2024-06样本中OTR与旧券的成交/价差差异。价格bp不等于收益率bp，统计对照不识别因果，不称2026现状。"
  },
  {
    "from": "case-mbc-barc-callable-20260715",
    "relation": "supported_by",
    "to": "MBC-15",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PS-1–PS-3条款与文件链; Selected Risk Factors: issuer risk, early redemption, liquidity",
    "scope": "2026-07-15定价补充文件：5.25%年票息、2029-07-17起规定日期可赎回；信用、转手条件和赎回分别改变不同关系。首次全额赎回仅为教学条件路径。"
  }
]
```

## Related entries
