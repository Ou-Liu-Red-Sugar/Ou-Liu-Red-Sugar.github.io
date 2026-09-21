/* Generated from shared_inputs.json */
window.MC_DATA = {
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
};
