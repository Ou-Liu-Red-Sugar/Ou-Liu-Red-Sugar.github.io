# 债券利率、信用与期限风险

从固定现金流的局部敏感度与曲线扭曲，区分信用、流动性和赎回通道.

Entry: zh-m07 | Node: M07 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
用M07《债券风险与期限结构》带我分析价格变化. 先通过本篇 reference 包中的公开链接，实际读完 required_readings 指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF 表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.
在现金流固定、半年复利条件下求P的一阶、二阶导数，比较25bp冲击的DV01、凸性近似与精确重算；25bp=0.0025，4.255%分别变为4.505%或4.005%. 重新推导凸性末项的正号. 再用50、50、1,050现金流和年复利的三点即期曲线重算五个情景，解释曲线扁平化对不同现金流权重的影响.
读Barclays赎回条款后，比较首次全额赎回的假设路径与持有至到期路径，保留通知和部分赎回条件，并按日期比较所得与再投资. 选读流动性研究时，实际读取NY Fed方法、表2–3及结论：2.07和3.73来自2017-07至2024-06全样本的比例有效价差，单位为价格基点；说明样本筛选及其与收益率基点的区别. 最后用混合情景分别识别现金流、折现率、执行成本和选择权的变化.

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
      "supports": "零息利率、票息债券现金流、YTM、久期与凸性. 采用独立导数校验；不采用forward=预测的简化及slide41末项错号.",
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
      "supports": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计.",
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
      "supports": "票息5.25%、30/360、年付、2029-07-17起可按季全额或部分赎回及受托人通知；无担保信用、非存款、做市无保证. 不作完整bail-in法律解读.",
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
      "supports": "2017-07–2024-06样本中OTR与旧券的成交/价差差异. 价格bp不等于收益率bp，统计对照不识别因果，不称2026现状.",
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
债券价格取决于未来现金流及其折现方式. 利率变化改变折现因子，信用事件改变偿付，赎回权改变支付期限与金额，流动性则影响可成交价格. 本节沿用[91282CNT4国债的现金流](https://ou-liu-red-sugar.github.io/zh/notebook/bond-contract-cashflows-price/)，先固定合同支付分析利率敏感度，再分别处理其他变化.

<a id="m07-rate-risk"></a>
## 一、固定现金流下的价格敏感度

先把市场中的其他变化暂时固定. 对原始发行、1,000面值的91282CNT4，现金流仍是19次21.25，最后一次1,021.25. 按半年复利、名义年率 $y$ 计价，$P(y)=\sum CF_k(1+y/2)^{-k}$. 本金和票息没有变，变的是买方愿意用什么收益率取得这组现金流. [^MBC-12][^MBC-09]

为了把小变化写成有单位的量，对年收益率求导：

$$
P'(y)=-\sum_{k=1}^{20}\frac{k\,CF_k}{2(1+y/2)^{k+1}}.
$$

本例每个 $CF_k>0$ 且 $1+y/2>0$，所以导数为负；价格随统一收益率上升而下降，这是给定现金流和折现约定下的数学性质. 含赎回权的债券会随行权情景改变未来现金流，应先重建情景现金流再使用该敏感度.

**Macaulay久期**把每笔现金流的发生时间，用其现值占总价的比重加权：

$$
D_M=\frac{\sum_{k=1}^{20}(k/2)\,CF_k(1+y/2)^{-k}}{P(y)}.
$$

麦考利久期按各期现金流现值占比加权其收到时间，本例时间单位为年，因此使用$k/2$. **修正久期**$D_{\rm mod}=D_M/(1+y/2)=-P^{\prime}(y)/P(y)$描述价格对名义年收益率的局部敏感度. 中间票息使部分价值在到期前收回，因而影响加权时间.[^MBC-09]

<a id="m07-duration"></a>
## 二、DV01、凸性与重定价误差

在 $y=4.255\%$ 时，计算得到：

| 量 | 本例数值与单位 |
|---|---:|
| 价格 $P$ | 999.596美元／1,000面值 |
| Macaulay久期 | 8.249年 |
| 修正久期 | 8.077年，按本文年率约定 |
| DV01 | 0.807美元／1,000面值／1bp |
| 凸性 $C=P''(y)/P(y)$ | 77.531年²，按同一年率约定 |

这里$1\text{bp}=10^{-4}$，取正金额敏感度$\mathrm{DV01}=P D_{\rm mod}\times10^{-4}$. 收益率上升1bp时，一阶价格变化约为−0.807美元；下降时符号反转.

继续对价格函数求导：

$$
P''(y)=\sum_{k=1}^{20}\frac{k(k+1)\,CF_k}{4(1+y/2)^{k+2}}>0.
$$

对小的年收益率变化 $\Delta y$，局部展开为

$$
P(y+\Delta y)\approx P(y)
\left[1-D_{\rm mod}\Delta y+\frac12 C(\Delta y)^2\right].
$$

二阶项为正，对应这条固定现金流价格曲线的正曲率. 下面用同一函数精确重算近似误差：

| 教学冲击 | 冲击后名义年率 | 精确价格 | 仅久期一阶 | 加凸性二阶 |
|---|---:|---:|---:|---:|
| +25bp | **4.505%** | 979.651 | 979.411 | 979.653 |
| −25bp | **4.005%** | 1,020.026 | 1,019.781 | 1,020.024 |

+25bp时，一阶预测比精确价格低约0.240美元，二阶预测高约0.002美元；−25bp时同样存在曲率修正，因此涨跌不严格对称. 较大收益率冲击可用完整价格公式重新计算；信用事件或赎回行为改变现金流时，还需重建支付情景.

<div data-experiment-slot="EXP-MC-M07-LOCAL"></div>

将收益率冲击从25bp改为100bp，比较一阶、二阶和精确价格. 保持同一现金流结构并将面值放大十倍，价格、DV01和金额误差均放大十倍，久期与相对凸性保持不变.

<a id="m07-curve-shape"></a>
## 三、YTM与期限结构

前两节用一个 $y$ 压缩这只债券的价格. 不同期限利率分别变化时，需要逐期折现. 以下沿用MIT讲义slide25的50、50、1,050三期教学现金流，并使用本篇设定的零息利率.[^MBC-09]

令 $s_t$ 是期限 $t$ 年的年复利零息利率，每一期使用与自身期限对应的折现因子：

$$
P(s_1,s_2,s_3)=
\frac{50}{1+s_1}
+\frac{50}{(1+s_2)^2}
+\frac{1050}{(1+s_3)^3}.
$$

本例使用**年复利**；91282CNT4的前述算例使用半年复利. Base曲线设为3%、3.5%、4%，三项现值分别为48.544、46.676、933.446，合计1,028.665.

我们只改变利率，不改变任何现金流. 平行上移是在三个点都加25bp；扁平化扭曲是在短端加25bp、长端减25bp、中点不动；陡峭化则反过来.

| 教学曲线 | 1年spot | 2年spot | 3年spot | 精确价格 | 相对Base变化 | 同价单一YTM摘要 |
|---|---:|---:|---:|---:|---:|---:|
| Base | 3.00% | 3.50% | 4.00% | 1,028.665 | 0.000 | 3.968% |
| 平行+25bp | 3.25% | 3.75% | 4.25% | 1,021.624 | −7.042 | 4.218% |
| 平行−25bp | 2.75% | 3.25% | 3.75% | 1,035.774 | +7.108 | 3.718% |
| 扁平化扭曲 | 3.25% | 3.50% | 3.75% | 1,035.312 | +6.647 | 3.734% |
| 陡峭化扭曲 | 2.75% | 3.50% | 4.25% | 1,022.084 | −6.581 | 4.201% |

表中价格逐期精确重算. 扁平化使第一期现值下降、末期现值上升；本例末期1,050的权重大，合计价格上升. 若现金流集中在第一年，短端升息可使合计价格下降. 局部导数$-tCF_t/(1+s_t)^{t+1}$刻画金额、期限和折现率共同决定的敏感度.

表中最后一列是另解一个方程得到的：

$$
P=\frac{50}{1+y}+\frac{50}{(1+y)^2}
+\frac{1050}{(1+y)^3}.
$$

这个 $y$ 是让三笔现金流产生**同一价格**的单率摘要；三个spot rates仍按期限分别取值. 改变现金流组合，即使面对同一spot曲线，YTM摘要也可能不同. 将远期利率解释为未来现货利率预测，还需要风险溢价和预期模型.

<div data-experiment-slot="EXP-MC-M07-CURVE"></div>

图中横轴为1、2、3年，纵轴为年复利spot rate. 比较五条曲线及价格表，再改变短端或长端spot，检查各期现值变化.

<a id="case-mbc-barc-callable-20260715"></a>
<a id="m07-credit-liquidity-call"></a>
## 四、信用、流动性与赎回选择权

**信用风险改变偿付结果.** 违约、顺位和回收安排会改变实际收到的金额与时点；分析这些变化需要分别估计偿付能力和违约后的现金流.

看一个不同的真实合同：Barclays Bank PLC于2026-07-15定价的票据，CUSIP **06749HU29**，2026-07-17发行、2036-07-17到期. 面额1,000，固定年票息5.25%，按30/360、每年7月17日支付，首息2027-07-17. 它是发行人的无担保债务，不是受存款保险保障的银行存款；固定票息没有消除发行人信用风险. [^MBC-15]

**流动性影响转手条件.** 上述票据不在证券交易所上市，关联机构可做市，但没有持续做市义务. 因而退出时能否取得报价、可成交数量及交易价差，都可能随做市安排变化.[^MBC-15]

<details>
<summary>选读研究：同一个发行主体，也会有不同的交易流动性</summary>

NY Fed的2025年Staff Report1170使用2017年7月至2024年6月TRACE样本研究on-the-run与第一档off-the-run美国国债. 10年期限组中，Table2的全样本平均日成交额分别为92.05和6.73**B 美元**；Table3 **July 2017–June 2024 全样本列**的 proportional effective bid-ask spread 分别为2.07和3.73**价格bp**.[^MBC-16]

proportional effective spread 以客户买入均价与卖出均价之差除以两者中点价格衡量. 样本剔除特定交易条件码，保留价格25至250、规模USD 1 M至25 M的交易，并剔除债券—日层面为负的有效价差. 2.07/3.73是2017-07至2024-06样本中的**价格bp**交易成本，计算分母是债券价格；DV01使用的收益率bp则是收益率变化量. 这组历史描述性差异本身无法识别旧券身份的因果效应.

</details>

**赎回权改变剩余支付路径.** 这只Barclays票据从2029-07-17起，允许发行人在规定季度日期全部或部分提前赎回，须至少提前5个营业日通知受托人，支付本金及截至规定时点的应计未付利息.[^MBC-15] 发行人行使该权利后，被赎回部分的后续票息终止，投资者提前取得本金.

为了理解条款，固定面值1,000，先只列两种**假设均依约支付**的路径：

| 合同情景 | 完整年度票息次数 | 本金支付时间 | 未折现名义合计 |
|---|---:|---|---:|
| 从不提前赎回，持有至2036-07-17 | 10 | 约定到期日 | $10×52.50+1000=1,525.00$ |
| 假设首次可赎回日2029-07-17全额行权 | 3 | 第三次付息同日 | $3×52.50+1000=1,157.50$ |

第二行是假设发行人在首次可赎回日全额行权；实际条款还允许部分赎回. 两条路径的回报比较需同时处理购买价格、本金返还时点、时间价值和再投资条件.

<a id="m07-risk-map"></a>
## 五、风险层次与对应证据

| 这次改变了什么？ | 可以先保持什么不变？ | 合适的计算或证据 |
|---|---|---|
| 同一价格函数中的要求收益率 | 合同现金流 | 精确重定价，再检查DV01近似 |
| 不同期限的零息率分别移动 | 每一期现金流 | 各期限折现，不把YTM当整条曲线 |
| 信用事件或偿付能力判断 | 条款中的承诺文本 | 另分析能否、多少、何时履约；不能仅用固定现金流导数 |
| 深度、价差、做市能力 | 可以仍是同一发行人同一承诺 | 实际交易/报价证据及退出成本 |
| 发行人行使赎回权 | 已知的条件条款 | 分情景重建剩余现金流及本金返还时间 |

这些因素可以同时发生. 把它们分开，是为了让每一步解释都有可核对的输入：固定现金流、利率约定、数据样本和合约条件分别约束相应结论.

<a id="m07-exercises"></a>
## 六、练习与解析

### 题一·收益率单位

把25bp写成0.25，会怎样？

**解析.** 25bp对应0.25个百分点，原率4.255%变为4.505%或4.005%. 一阶金额变化约为$999.596\times8.077\times0.25\%\approx20.185$美元，上行时减去、下行时加上；较大冲击需与精确重算比较.

### 题二·曲线与现金流权重

长端下降，所有债券都涨吗？

**解析.** 不能只凭这一句判断. 三点扁平化情景同时让短端上升. 对50/50/1050，末期现值权重大，合计上涨；若主要现金流在第一年，短端上升可能占主导. 必须用同一条完整变化曲线和相应现金流逐期重算.

### 题三·价格基点与收益率基点

旧券的3.73bp该乘哪一个DV01？

**解析.** 3.73bp是以交易价格为基数的有效价差；DV01衡量年收益率变化1bp对应的价格金额. 前者表达执行价差，后者表达收益率敏感度，换算所依据的变量和分母不同.

### 题四·赎回与持有期

提前赎回少付367.50票息，是否亏了367.50？

**解析.** $7×52.50=367.50$是两个条件路径名义票息总额之差，不是同一期限的投资损益. 首次赎回路径在2029年返还本金，到期路径在2036年返还；购买成本、折现及本金返还后的机会均不同. 先重建现金流，再选择共同的持有期与再投资条件，才能比较回报.

[^MBC-12]: U.S. Treasury，*Auction Results: 10-Year Note 91282CNT4*，2025-08-06. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf). 定位：PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest.

[^MBC-09]: Andrew W. Lo，*Finance Theory I: Fixed Income Securities*，MIT 15.401, Fall 2008, lecture file 2007–2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf). 定位：slides 12–19；slides 25–33；slides 35–47.

[^MBC-15]: Barclays Bank PLC，*Callable Fixed Rate Notes due July 17, 2036: Pricing Supplement*，2026-07-15; CUSIP06749HU29. [原文](https://www.sec.gov/Archives/edgar/data/312070/000191870426020298/form424b2.htm). 定位：PS-1–PS-3条款与文件链；Selected Risk Factors: issuer risk, early redemption, liquidity.

[^MBC-16]: Alain Chaboud, Ellen Correia Golay, Michael J. Fleming, Yesol Huh, Frank M. Keane, Or Shachar，*Liquidity and Trading Dynamics in the Off-the-Run U.S. Treasury Market*，NY Fed Staff Report1170, November2025. [原文](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1170.pdf). 定位：Abstract；Introduction与§1市场背景；§2设定、Tables2–3（PDF物理pp8、10）；Conclusion（印刷p16）.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MC-M07-CURVE",
    "title": "平行与扭曲：三点spot精确重定价",
    "anchor": "m07-curve-shape",
    "description": "50/50/1050年复利教学现金流；五条spot曲线与同价YTM.",
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
    "static_equivalent": "正文五行精确价格表、三项PV；HTML五条三点曲线与每场景三项PV表.",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  },
  {
    "id": "EXP-MC-M07-LOCAL",
    "title": "精确价格与久期/凸性误差",
    "anchor": "m07-duration",
    "description": "年收益率bp冲击，不等于交易价格bp.",
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
    "static_equivalent": "正文±25bp表，HTML默认同表；图精确/一阶/二阶三条线.",
    "source_inputs": "shared_inputs.json",
    "implementation": "labs/m-c/engine.js",
    "data_identity": "合同/报价身份按输入卡；可调项均为教学设定"
  }
]
```

## Sources
- [Finance Theory I: Fixed Income Securities](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/df418b972d36cd53ae5c375b8af61e53_MIT15_401F08_lec04.pdf): 零息利率、票息债券现金流、YTM、久期和凸性. slide 41凸性末项的符号由本文所列导数推导校正；远期利率与未来现货利率预测分别需要定价和预期条件.
- [Auction Results: 10-Year Note 91282CNT4](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250806_2.pdf): 4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计.
- [Callable Fixed Rate Notes due July 17, 2036: Pricing Supplement](https://www.sec.gov/Archives/edgar/data/312070/000191870426020298/form424b2.htm): 票息 5.25%、30/360 日数惯例、每年付息，自 2029-07-17 起可按季全部或部分赎回，附受托人通知安排. 证券为无担保债务，不属于存款；文件未承诺持续做市.
- [Liquidity and Trading Dynamics in the Off-the-Run U.S. Treasury Market](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1170.pdf): 2017-07–2024-06样本中OTR与旧券的成交/价差差异. 核心2.07/3.73为Table3全样本列的proportional effective bid-ask spread（价格bp）；March2020另列. 统计对照不识别因果，不称2026现状.

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
    "reason": "年收益率bp冲击，不等于交易价格bp."
  },
  {
    "from": "m07-curve-shape",
    "relation": "illustrated_by",
    "to": "EXP-MC-M07-CURVE",
    "reason": "50/50/1050年复利教学现金流；五条spot曲线与同价YTM."
  },
  {
    "from": "m07-duration",
    "relation": "supported_by",
    "to": "MBC-09",
    "reason": "该单元原件依据",
    "locator": "slides 12–19；slides 25–33；slides 35–47",
    "scope": "零息利率、票息债券现金流、YTM、久期与凸性. 采用独立导数校验；不采用forward=预测的简化及slide41末项错号."
  },
  {
    "from": "m07-rate-risk",
    "relation": "supported_by",
    "to": "MBC-12",
    "reason": "该单元原件依据",
    "locator": "PDF物理p1全文，Coupon/High Yield/Price/Accrued Interest",
    "scope": "4.25%票息、4.255%高收益率、每100面值99.959620、原发行无应计."
  },
  {
    "from": "m07-curve-shape",
    "relation": "supported_by",
    "to": "MBC-09",
    "reason": "该单元原件依据",
    "locator": "slides 12–19；slides 25–33；slides 35–47",
    "scope": "零息利率、票息债券现金流、YTM、久期与凸性. 采用独立导数校验；不采用forward=预测的简化及slide41末项错号."
  },
  {
    "from": "m07-credit-liquidity-call",
    "relation": "supported_by",
    "to": "MBC-15",
    "reason": "该单元原件依据",
    "locator": "PS-1–PS-3条款与文件链；Selected Risk Factors: issuer risk, early redemption, liquidity",
    "scope": "票息5.25%、30/360、年付、2029-07-17起可按季全额或部分赎回及受托人通知；无担保信用、非存款、做市无保证. 不作完整bail-in法律解读."
  },
  {
    "from": "m07-credit-liquidity-call",
    "relation": "supported_by",
    "to": "MBC-16",
    "reason": "该单元原件依据",
    "locator": "Abstract；Introduction与§1市场背景；§2设定、Tables2–3（PDF物理pp8、10）；Conclusion（印刷p16）",
    "scope": "2017-07–2024-06样本中OTR与旧券的成交/价差差异. 价格bp不等于收益率bp，统计对照不识别因果，不称2026现状."
  },
  {
    "from": "case-mbc-barc-callable-20260715",
    "relation": "supported_by",
    "to": "MBC-15",
    "reason": "本例有日期的契约、规则或公开观察材料",
    "locator": "PS-1–PS-3条款与文件链; Selected Risk Factors: issuer risk, early redemption, liquidity",
    "scope": "2026-07-15定价补充文件：5.25%年票息、2029-07-17起规定日期可赎回；信用、转手条件和赎回分别改变不同关系. 首次全额赎回仅为教学条件路径."
  }
]
```

## Related entries
