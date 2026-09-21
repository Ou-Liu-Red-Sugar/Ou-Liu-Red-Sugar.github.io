# Amazon：2026-09-20业务状态与股东结果历史案例

2026-09-20历史研究，覆盖业务状态、资本与融资、2029-12-31条件定价及概率判断；参考价格为2026-09-18常规收盘.

Entry: zh-amzn-research-20260920 | Node: CASE-AMZN-20260920 | Language: zh | Editorial revision: 2026-09-22
Research cutoff: 2026-09-20 | Data period: 2025Q4–2026Q2 facts and dated subsequent disclosures; conditional paths 2026H2–2029

## Teaching instructions
先实际阅读 agent_packet.required_readings 指定原文单元，记录题名、版本、定位及支持内容；缺失时取得等价可读原件后再讲解. 依据具名历史材料解释业务、证券权利、日期、计量口径和已列计算. 沿该历史截止日复算，区分披露、模型假设和未来代表点. 先检查读者当前疑点，再以完整计算或条件迁移解释. runtime_reading_log保留实际读取记录.

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
      "source_id": "PBCD-CASE-AMZN",
      "title": "Amazon：2026-09-20历史条件研究案例",
      "version": "研究截止2026-09-20；教学摘编2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "case-amzn-identity及当前问题的相应完整单元",
        "scope": "身份与所用单元",
        "purpose": "固定日期和结果身份"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.",
      "authors": [
        "本站历史研究"
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json",
    "data": {
      "format": "portfolio-frozen-teaching-inputs-v1",
      "case_id": "CASE-AMZN-20260920",
      "aliases": [
        "CASE-PBCD-AMZN-20260920"
      ],
      "metadata": {
        "information_cutoff": "2026-09-20",
        "purchase_date": "2026-09-18",
        "valuation_date": "2029-12-31",
        "purchase_price": 253.71,
        "currency": "USD",
        "money_unit": "billion",
        "share_unit": "billion",
        "quote_type": "regular_close",
        "quote_time": "16:00 EDT",
        "years": 3.2854209445585214,
        "cash_distributions": 0,
        "original_shareholder_additional_cash": 0,
        "result_identity": "历史研究的未来条件结果；不是当期目标价；期间分配为零；救援发行不等于原股东强制追加现金"
      },
      "states": [
        "Bull",
        "Base",
        "Bear",
        "Tail"
      ],
      "weight_ids": [
        "adopted",
        "capital_pressure",
        "platform_durable",
        "mixed_retail_pressure"
      ],
      "pricing_ids": [
        "representative",
        "aws_low",
        "retail_low",
        "both_low"
      ],
      "probabilities": {
        "adopted": {
          "Bull": 0.31,
          "Base": 0.44,
          "Bear": 0.2,
          "Tail": 0.05
        },
        "capital_pressure": {
          "Bull": 0.2,
          "Base": 0.42,
          "Bear": 0.3,
          "Tail": 0.08
        },
        "platform_durable": {
          "Bull": 0.37,
          "Base": 0.43,
          "Bear": 0.16,
          "Tail": 0.04
        },
        "mixed_retail_pressure": {
          "Bull": 0.27,
          "Base": 0.41,
          "Bear": 0.26,
          "Tail": 0.06
        }
      },
      "pricing": {
        "representative": {
          "prices": {
            "Bull": 556.4431539969916,
            "Base": 347.4461331923256,
            "Bear": 170.3830229466745,
            "Tail": 39.57284315295868
          },
          "distributions": {
            "adopted": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.31,
                "Base": 0.44,
                "Bear": 0.2,
                "Tail": 0.05
              },
              "expected_terminal_wealth": 361.4289230906735,
              "annualized_expected_terminal_wealth": 0.11372500084263093,
              "probability_weighted_annualized_return": 0.08347799170226604,
              "representative_point_loss_probability": 0.25,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 107.71892309067348,
              "expected_holding_return": 0.42457499937201315,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "capital_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.2,
                "Base": 0.42,
                "Bear": 0.3,
                "Tail": 0.08
              },
              "expected_terminal_wealth": 311.49674107641414,
              "annualized_expected_terminal_wealth": 0.06444851095331705,
              "probability_weighted_annualized_return": 0.02739362318963135,
              "representative_point_loss_probability": 0.38,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 57.78674107641413,
              "expected_holding_return": 0.22776690345833472,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "platform_durable": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.37,
                "Base": 0.43,
                "Bear": 0.16,
                "Tail": 0.04
              },
              "expected_terminal_wealth": 384.1300016491731,
              "annualized_expected_terminal_wealth": 0.13456741963153296,
              "probability_weighted_annualized_return": 0.10756073466601901,
              "representative_point_loss_probability": 0.2,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 130.4200016491731,
              "expected_holding_return": 0.5140514825949829,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "mixed_retail_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.27,
                "Base": 0.41,
                "Bear": 0.26,
                "Tail": 0.06
              },
              "expected_terminal_wealth": 339.3665227433541,
              "annualized_expected_terminal_wealth": 0.09257717616699845,
              "probability_weighted_annualized_return": 0.05849624773953117,
              "representative_point_loss_probability": 0.32,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 85.65652274335409,
              "expected_holding_return": 0.3376158714412285,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            }
          }
        },
        "aws_low": {
          "prices": {
            "Bull": 501.9201160419391,
            "Base": 307.23516017809226,
            "Bear": 142.662843118597,
            "Tail": 32.729060876469404
          },
          "distributions": {
            "adopted": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.31,
                "Base": 0.44,
                "Bear": 0.2,
                "Tail": 0.05
              },
              "expected_terminal_wealth": 320.9477281189046,
              "annualized_expected_terminal_wealth": 0.07417660466152975,
              "probability_weighted_annualized_return": 0.04260405124858831,
              "representative_point_loss_probability": 0.25,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 67.23772811890458,
              "expected_holding_return": 0.2650180446923833,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "capital_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.2,
                "Base": 0.42,
                "Bear": 0.3,
                "Tail": 0.08
              },
              "expected_terminal_wealth": 274.8399682888832,
              "annualized_expected_terminal_wealth": 0.024647981645059325,
              "probability_weighted_annualized_return": -0.013972336275786732,
              "representative_point_loss_probability": 0.38,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 21.12996828888319,
              "expected_holding_return": 0.08328393949344992,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "platform_durable": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.37,
                "Base": 0.43,
                "Bear": 0.16,
                "Tail": 0.04
              },
              "expected_terminal_wealth": 341.9567791461314,
              "annualized_expected_terminal_wealth": 0.0951087194514817,
              "probability_weighted_annualized_return": 0.06691970990061341,
              "representative_point_loss_probability": 0.2,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 88.24677914613139,
              "expected_holding_return": 0.3478253878291411,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "mixed_retail_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.27,
                "Base": 0.41,
                "Bear": 0.26,
                "Tail": 0.06
              },
              "expected_terminal_wealth": 300.54092986776476,
              "annualized_expected_terminal_wealth": 0.052911001655461254,
              "probability_weighted_annualized_return": 0.017289746862522194,
              "representative_point_loss_probability": 0.32,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 46.83092986776475,
              "expected_holding_return": 0.18458448570322328,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            }
          }
        },
        "retail_low": {
          "prices": {
            "Bull": 518.7315541002855,
            "Base": 316.295337911165,
            "Bear": 153.7165513620935,
            "Tail": 32.3000212248235
          },
          "distributions": {
            "adopted": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.31,
                "Base": 0.44,
                "Bear": 0.2,
                "Tail": 0.05
              },
              "expected_terminal_wealth": 332.33504178566096,
              "annualized_expected_terminal_wealth": 0.08563661920994514,
              "probability_weighted_annualized_return": 0.05434228003363471,
              "representative_point_loss_probability": 0.25,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 78.62504178566095,
              "expected_holding_return": 0.3099012328471915,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "capital_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.2,
                "Base": 0.42,
                "Bear": 0.3,
                "Tail": 0.08
              },
              "expected_terminal_wealth": 285.2893198493603,
              "annualized_expected_terminal_wealth": 0.03635196615726377,
              "probability_weighted_annualized_return": -0.001923265807132167,
              "representative_point_loss_probability": 0.38,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 31.579319849360303,
              "expected_holding_return": 0.12447014248299348,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "platform_durable": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.37,
                "Base": 0.43,
                "Bear": 0.16,
                "Tail": 0.04
              },
              "expected_terminal_wealth": 353.8243193858345,
              "annualized_expected_terminal_wealth": 0.1065396937848615,
              "probability_weighted_annualized_return": 0.07855824157161317,
              "representative_point_loss_probability": 0.2,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 100.11431938583448,
              "expected_holding_return": 0.39460139287310114,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "mixed_retail_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.27,
                "Base": 0.41,
                "Bear": 0.26,
                "Tail": 0.06
              },
              "expected_terminal_wealth": 311.64291277828846,
              "annualized_expected_terminal_wealth": 0.06460052109503844,
              "probability_weighted_annualized_return": 0.02938465337265891,
              "representative_point_loss_probability": 0.32,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 57.932912778288454,
              "expected_holding_return": 0.22834304039371123,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            }
          }
        },
        "both_low": {
          "prices": {
            "Bull": 464.20851614523303,
            "Base": 276.08436489693173,
            "Bear": 125.99637153401603,
            "Tail": 25.45623894833421
          },
          "distributions": {
            "adopted": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.31,
                "Base": 0.44,
                "Bear": 0.2,
                "Tail": 0.05
              },
              "expected_terminal_wealth": 291.8538468138921,
              "annualized_expected_terminal_wealth": 0.043552908344197894,
              "probability_weighted_annualized_return": 0.01050543847442972,
              "representative_point_loss_probability": 0.25,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 38.14384681389211,
              "expected_holding_return": 0.1503442781675619,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "capital_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.2,
                "Base": 0.42,
                "Bear": 0.3,
                "Tail": 0.08
              },
              "expected_terminal_wealth": 248.63254706182948,
              "annualized_expected_terminal_wealth": -0.006134289196877973,
              "probability_weighted_annualized_return": -0.0465101641443272,
              "representative_point_loss_probability": 0.38,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": -5.077452938170524,
              "expected_holding_return": -0.020012821481890875,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "platform_durable": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.37,
                "Base": 0.43,
                "Bear": 0.16,
                "Tail": 0.04
              },
              "expected_terminal_wealth": 311.6510968827928,
              "annualized_expected_terminal_wealth": 0.06460903062550782,
              "probability_weighted_annualized_return": 0.03506603435849147,
              "representative_point_loss_probability": 0.2,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 57.94109688279278,
              "expected_holding_return": 0.22837529810725932,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            },
            "mixed_retail_pressure": {
              "identity": "weighted representative-point discrete approximation; not identified conditional means",
              "weights": {
                "Bull": 0.27,
                "Base": 0.41,
                "Bear": 0.26,
                "Tail": 0.06
              },
              "expected_terminal_wealth": 272.8173199026991,
              "annualized_expected_terminal_wealth": 0.02234686284916987,
              "probability_weighted_annualized_return": -0.014897488794448313,
              "representative_point_loss_probability": 0.32,
              "benchmark_terminal_wealth": 296.2384031031345,
              "expected_net_gain": 19.107319902699118,
              "expected_holding_return": 0.07531165465570577,
              "arithmetic_fields_derived_from_frozen_inputs": [
                "expected_net_gain",
                "expected_holding_return"
              ]
            }
          }
        }
      },
      "named_alternatives": {
        "aws_strong_alternative_fixed_base_pricing": {
          "title": "AWS较弱、非AWS Base",
          "source_key": "operating.aws_strong_alternative_fixed_base_pricing",
          "aws_path": "Bear",
          "retail_path": "Base",
          "capital_rules": "Base规则接替代经营输出；不是直接取Base现金/债务",
          "base_multiple_outcome": {
            "price": 278.41074602717924,
            "aws_multiple": 21,
            "retail_multiple": 22
          },
          "own_segment_multiple_outcome": {
            "price": 243.3004566504273,
            "aws_multiple": 16,
            "retail_multiple": 22
          },
          "capital": {
            "cash": 87.44001533493298,
            "debt": 308.7319839094192,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 144.29541690941917,
            "cumulative_equity_proceeds": 0,
            "investment_net": 219.252225,
            "minimum_pre_financing_cash": 16.29222090682039
          },
          "detail_export": "本包导出替代经营年度表与资金终点/低谷摘要；不从主路径补出未导出的替代季度."
        },
        "retail_weak_fixed_base_pricing": {
          "title": "非AWS较弱、AWS Base",
          "source_key": "operating.retail_weak_fixed_base_pricing",
          "aws_path": "Base",
          "retail_path": "Bear",
          "capital_rules": "Base规则接替代经营输出；不是直接取Base现金/债务",
          "base_multiple_outcome": {
            "price": 300.3763878141127,
            "aws_multiple": 21,
            "retail_multiple": 22
          },
          "own_segment_multiple_outcome": {
            "price": 279.2666892532346,
            "aws_multiple": 21,
            "retail_multiple": 17
          },
          "capital": {
            "cash": 101.7779184600819,
            "debt": 294.8029515520003,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 130.36638455200026,
            "cumulative_equity_proceeds": 0,
            "investment_net": 219.252225,
            "minimum_pre_financing_cash": 13.887237257714155
          },
          "detail_export": "本包导出替代经营年度表与资金终点/低谷摘要；不从主路径补出未导出的替代季度."
        },
        "mixed_aws_strong_retail_weak": {
          "title": "AWS强、非AWS弱",
          "source_key": "operating.mixed_aws_strong_retail_weak",
          "aws_path": "Bull",
          "retail_path": "Bear",
          "capital_rules": "Base规则接替代经营输出；不是直接取Base现金/债务",
          "base_multiple_outcome": {
            "price": 369.0413995753626,
            "aws_multiple": 21,
            "retail_multiple": 22
          },
          "own_segment_multiple_outcome": {
            "price": 415.4219017264131,
            "aws_multiple": 26,
            "retail_multiple": 17
          },
          "capital": {
            "cash": 96.42330630787293,
            "debt": 331.09307403685904,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 166.656507036859,
            "cumulative_equity_proceeds": 0,
            "investment_net": 219.252225,
            "minimum_pre_financing_cash": 7.684874822033322
          },
          "detail_export": "本包导出替代经营年度表与资金终点/低谷摘要；不从主路径补出未导出的替代季度."
        },
        "mixed_aws_weak_retail_strong": {
          "title": "AWS弱、非AWS强",
          "source_key": "operating.mixed_aws_weak_retail_strong",
          "aws_path": "Bear",
          "retail_path": "Bull",
          "capital_rules": "Base规则接替代经营输出；不是直接取Base现金/债务",
          "base_multiple_outcome": {
            "price": 306.4144985921975,
            "aws_multiple": 21,
            "retail_multiple": 22
          },
          "own_segment_multiple_outcome": {
            "price": 301.17973828828775,
            "aws_multiple": 16,
            "retail_multiple": 26
          },
          "capital": {
            "cash": 91.96819294335825,
            "debt": 304.7663028199208,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 140.3297358199208,
            "cumulative_equity_proceeds": 0,
            "investment_net": 219.252225,
            "minimum_pre_financing_cash": 16.412377067643583
          },
          "detail_export": "本包导出替代经营年度表与资金终点/低谷摘要；不从主路径补出未导出的替代季度."
        },
        "ai_delay_core_attach_linked_capital_unchanged": {
          "title": "AI延后并连带Core；原资本计划保留",
          "source_key": "operating.ai_delay_core_attach_linked_capital_unchanged",
          "price": 294.5172639617058,
          "annualized": 0.04644241453269271,
          "growth_debt": 163.23615734511785,
          "equity_proceeds": 0,
          "shares": 11.297400000000001,
          "cash": 94.58021174376321,
          "debt": 327.67272434511784,
          "minimum_pre_financing_cash": 9.750020926169249,
          "condition": {
            "ai": [
              27,
              35,
              58,
              90
            ],
            "core_first": 148,
            "core_2027_growth": 0.12,
            "later_growth_from": "Base",
            "capital_additions": "Base；资本计划不变不代表现金或债务不变"
          },
          "detail_export": "冻结敏感性仅保存本项汇总；本包不生成未导出的逐季度路径或改倍数版本."
        }
      },
      "calibration": {
        "h1_2026": {
          "aws_revenue": 79.819,
          "aws_ebit": 30.782,
          "aws_da": 15.353,
          "aws_energy_gain_adjustment": 0.599,
          "retail_ebit": 20.531,
          "retail_tariff_refund_adjustment": 0.64,
          "retail_da": 11.35,
          "capex_cash": 96.31,
          "additions": 118.648
        },
        "cash_20260630": 122.988,
        "debt_principal_20260630": 132.995,
        "short_term_borrowings_20260630": 0.325
      },
      "parameters": {
        "aws": {
          "kernel": {
            "server_share": 0.45,
            "server_life": 5.5,
            "server_commission": [
              0.75,
              0.25
            ],
            "dc_share": 0.55,
            "dc_life": 30,
            "dc_commission": [
              0.2,
              0.45,
              0.35
            ]
          },
          "legacy_runoff": 0.9,
          "da_2026": 33,
          "calibration_contribution": 0.64
        },
        "retail": {
          "growth": {
            "Bull": [
              [
                10,
                9,
                8
              ],
              [
                5,
                5,
                4
              ],
              [
                14,
                13,
                12
              ],
              [
                23,
                21,
                18
              ],
              [
                12,
                11,
                10
              ],
              [
                30,
                28,
                25
              ]
            ],
            "Base": [
              [
                8,
                7,
                6
              ],
              [
                4,
                4,
                4
              ],
              [
                11,
                10,
                9
              ],
              [
                18,
                16,
                14
              ],
              [
                10,
                9,
                8
              ],
              [
                24,
                23,
                23
              ]
            ],
            "Bear": [
              [
                5,
                5,
                4
              ],
              [
                2,
                2,
                2
              ],
              [
                8,
                7,
                6
              ],
              [
                10,
                9,
                8
              ],
              [
                6,
                5,
                4
              ],
              [
                12,
                10,
                8
              ]
            ],
            "Tail": [
              [
                -2,
                1,
                3
              ],
              [
                -2,
                0,
                1
              ],
              [
                1,
                3,
                4
              ],
              [
                3,
                5,
                7
              ],
              [
                2,
                3,
                4
              ],
              [
                0,
                5,
                8
              ]
            ]
          },
          "revenue_2026": [
            297.1,
            23.5,
            194.1,
            85,
            55.7,
            7.1
          ],
          "service_mix_spread_bps_per_pp": 20,
          "logistics_cost_bps_per_pct": 35,
          "base_unit_cost_na": [
            0,
            -1,
            -1
          ],
          "base_unit_cost_intl": [
            0.25,
            -0.75,
            -1
          ],
          "base_price_invest_na": [
            15,
            10,
            10
          ],
          "base_price_invest_intl": [
            20,
            15,
            10
          ],
          "base_other_net_na": [
            15,
            20,
            25
          ],
          "base_other_net_intl": [
            25,
            35,
            35
          ]
        },
        "capital": {
          "operating_cash_reserve": 40,
          "liquidity_floor": 60,
          "issuance_fee": 0.005,
          "max_growth_debt": 168.883433,
          "new_debt_rate": {
            "Bull": 0.06,
            "Base": 0.06,
            "Bear": 0.075,
            "Tail": 0.09
          },
          "dilution_start_fully_awarded": 11.0274,
          "future_new_awards": {
            "Bull": [
              0.015,
              0.035,
              0.04,
              0.045
            ],
            "Base": [
              0.02,
              0.065,
              0.075,
              0.085
            ],
            "Bear": [
              0.025,
              0.11,
              0.125,
              0.135
            ],
            "Tail": [
              0.04,
              0.18,
              0.21,
              0.22
            ]
          },
          "globalstar_shares": 0.025,
          "globalstar_debt_assumed": 0.423692,
          "anthropic_cash": {
            "Bull": [
              0,
              7.5,
              7.5,
              0
            ],
            "Base": [
              0,
              10,
              5,
              0
            ],
            "Bear": [
              0,
              0,
              5,
              5
            ],
            "Tail": [
              0,
              5,
              0,
              0
            ]
          },
          "cash_tax": {
            "Bull": [
              5,
              18,
              28,
              40
            ],
            "Base": [
              5,
              16,
              23,
              32
            ],
            "Bear": [
              5,
              12,
              16,
              22
            ],
            "Tail": [
              5,
              8,
              11,
              15
            ]
          },
          "extra_equipment_payable_change": [
            30.2,
            -10,
            -12,
            -8.2
          ],
          "finance_lease_additions": [
            4.3,
            4,
            4,
            4
          ],
          "corporate_additions": [
            2,
            2,
            2,
            2
          ],
          "annual_refi_reserve": [
            0,
            14.06,
            17.087,
            19.452375
          ]
        },
        "benchmark": {
          "annual_rate": 0.0483,
          "identity": "Frozen three-year Treasury par yield, approximate constant-rate reinvestment comparator; not a security quote or discount rate"
        }
      },
      "scenarios": {
        "Bull": {
          "aws": [
            {
              "core": 148.0,
              "ai": 27.0,
              "revenue": 175.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 11.92530971145705,
              "da": 33.0,
              "ebit": 67.07469028854295,
              "margin": 0.38328394450595976,
              "additions": 192.5,
              "year": 2026
            },
            {
              "core": 179.0,
              "ai": 61.0,
              "revenue": 240.0,
              "contribution_rate": 0.66,
              "fixed_pre_da_cost": 16.74553919743255,
              "da": 46.33865340909091,
              "ebit": 95.31580739347655,
              "margin": 0.39714919747281896,
              "additions": 215.0,
              "year": 2027
            },
            {
              "core": 205.0,
              "ai": 110.0,
              "revenue": 315.0,
              "contribution_rate": 0.67,
              "fixed_pre_da_cost": 23.206317744031878,
              "da": 64.21707310606061,
              "ebit": 123.62660914990752,
              "margin": 0.3924654258727223,
              "additions": 210.0,
              "year": 2028
            },
            {
              "core": 233.0,
              "ai": 157.0,
              "revenue": 390.0,
              "contribution_rate": 0.68,
              "fixed_pre_da_cost": 29.917851825714465,
              "da": 82.78938946969697,
              "ebit": 152.4927587045886,
              "margin": 0.3910070736015092,
              "additions": 200.0,
              "year": 2029
            }
          ],
          "retail": [
            {
              "revenue": 662.5,
              "na_share": 0.7239245283018868,
              "na_margin": 0.0765,
              "intl_margin": 0.0385,
              "ebit": 43.731049999999996,
              "additions": 60.0,
              "da": 24.0,
              "mix_bps": 0.0,
              "margin_change_na_bps": 0.0,
              "margin_change_intl_bps": 0.0,
              "year": 2026,
              "categories": {
                "Online": 297.1,
                "Physical": 23.5,
                "ThirdParty": 194.1,
                "Advertising": 85,
                "Subscription": 55.7,
                "Other": 7.1
              },
              "na_revenue": 479.6,
              "intl_revenue": 182.89999999999998
            },
            {
              "revenue": 748.9230000000001,
              "na_share": 0.721,
              "na_margin": 0.08434930678315694,
              "intl_margin": 0.04634930678315694,
              "ebit": 55.231054237962255,
              "additions": 68.0,
              "da": 27.0,
              "mix_bps": 25.993067831569405,
              "margin_change_na_bps": 78.4930678315694,
              "margin_change_intl_bps": 78.4930678315694,
              "year": 2027,
              "categories": {
                "Online": 326.81000000000006,
                "Physical": 24.675,
                "ThirdParty": 221.27400000000003,
                "Advertising": 104.55,
                "Subscription": 62.38400000000001,
                "Other": 9.23
              },
              "na_revenue": 539.9734830000001,
              "intl_revenue": 208.94951700000001
            },
            {
              "revenue": 839.7374100000001,
              "na_share": 0.717,
              "na_margin": 0.09260229263468589,
              "intl_margin": 0.05510229263468589,
              "ebit": 68.8498961134882,
              "additions": 70.0,
              "da": 30.0,
              "mix_bps": 25.029858515289494,
              "margin_change_na_bps": 82.52985851528949,
              "margin_change_intl_bps": 87.52985851528949,
              "year": 2028,
              "categories": {
                "Online": 356.2229000000001,
                "Physical": 25.90875,
                "ThirdParty": 250.03962,
                "Advertising": 126.5055,
                "Subscription": 69.24624000000001,
                "Other": 11.814400000000001
              },
              "na_revenue": 602.09172297,
              "intl_revenue": 237.6456870300001
            },
            {
              "revenue": 931.9255604000002,
              "na_share": 0.713,
              "na_margin": 0.10116158636351254,
              "intl_margin": 0.06416158636351253,
              "ebit": 84.37895053688185,
              "additions": 69.0,
              "da": 33.0,
              "mix_bps": 23.092937288266448,
              "margin_change_na_bps": 85.59293728826646,
              "margin_change_intl_bps": 90.59293728826646,
              "year": 2029,
              "categories": {
                "Online": 384.7207320000001,
                "Physical": 26.945100000000004,
                "ThirdParty": 280.04437440000004,
                "Advertising": 149.27649,
                "Subscription": 76.17086400000002,
                "Other": 14.768
              },
              "na_revenue": 664.4629245652002,
              "intl_revenue": 267.46263583480004
            }
          ],
          "capital": {
            "cash": 109.07315890389165,
            "debt": 318.4556581561797,
            "finance_claims": 27.0548,
            "shares": 11.187399999999998,
            "cumulative_growth_debt": 154.01909115617963,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 15.0,
            "investment_gross": 425.0,
            "investment_tax_basis": 90.0,
            "investment_tax": 82.075,
            "investment_net": 342.925,
            "operating_tax_timing_proxy": 69.15670410621198,
            "minimum_pre_financing_cash": 7.688421656321893,
            "quarters": [
              {
                "pre_financing_cash": 111.56592300226076,
                "ending_cash": 111.56592300226076,
                "core_cash_flow": -20.65650149773924,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2495865395047758,
                "ebit": 28.647047305916484,
                "da": 14.291037735849056,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 3,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": -4,
                "known_issue_cash": 30.5344245,
                "known_issue_principal": 30.692875,
                "openai_cash": 21.3,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 111.97401542326261,
                "ending_cash": 111.97401542326261,
                "core_cash_flow": 0.4080924210018476,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2975628257755671,
                "ebit": 32.084692982626464,
                "da": 16.005962264150945,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 4,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": 11.96,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 49.32964020006121,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -60.7693752232014,
                "new_growth_debt": 10.805427645507631,
                "equity_proceeds": 0.0,
                "fees": 0.05402713822753816,
                "net_interest": 1.5554843898645332,
                "ebit": 34.62577817523092,
                "da": 16.867890284090908,
                "cash_capex": 81.48,
                "year": 2027,
                "quarter": 1,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.5,
                "wc_cash": -30.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 32.845012195044504,
                "ending_cash": 60.0,
                "core_cash_flow": -19.279987804955493,
                "new_growth_debt": 27.49872182780303,
                "equity_proceeds": 0.0,
                "fees": 0.13749360913901515,
                "net_interest": 2.0701518283911375,
                "ebit": 36.13124679154531,
                "da": 17.601276818181816,
                "cash_capex": 69.84,
                "year": 2027,
                "quarter": 2,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.5,
                "wc_cash": -2.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 6,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 41.67138651803276,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -16.45361348196724,
                "new_growth_debt": 18.56062124756176,
                "equity_proceeds": 0.0,
                "fees": 0.0928031062378088,
                "net_interest": 2.4155969014563734,
                "ebit": 37.6367154078597,
                "da": 18.334663352272727,
                "cash_capex": 69.84,
                "year": 2027,
                "quarter": 3,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.5,
                "wc_cash": -1.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 58.109542650535225,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -0.015457349464765957,
                "new_growth_debt": 1.9143871893314175,
                "equity_proceeds": 0.0,
                "fees": 0.009571935946657088,
                "net_interest": 2.569159464733072,
                "ebit": 42.15312125680286,
                "da": 20.534822954545458,
                "cash_capex": 69.84,
                "year": 2027,
                "quarter": 4,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.5,
                "wc_cash": 8.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 7.688421656321893,
                "ending_cash": 60.0,
                "core_cash_flow": -50.4365783436781,
                "new_growth_debt": 52.97375022144618,
                "equity_proceeds": 0.0,
                "fees": 0.2648687511072309,
                "net_interest": 3.289804495313904,
                "ebit": 44.26959621058102,
                "da": 21.669926814393943,
                "cash_capex": 81.2,
                "year": 2028,
                "quarter": 1,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 7.0,
                "wc_cash": -31.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 49.36075118669477,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -8.764248813305226,
                "new_growth_debt": 10.773922848916687,
                "equity_proceeds": 0.0,
                "fees": 0.05386961424458343,
                "net_interest": 3.7679120433416258,
                "ebit": 46.19436126321497,
                "da": 22.612097545454546,
                "cash_capex": 69.6,
                "year": 2028,
                "quarter": 2,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 7.0,
                "wc_cash": -3.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 53.06607812765557,
                "ending_cash": 60.0,
                "core_cash_flow": -5.058921872344419,
                "new_growth_debt": 7.021693035285496,
                "equity_proceeds": 0.0,
                "fees": 0.03510846517642748,
                "net_interest": 3.9013791624731424,
                "ebit": 48.11912631584893,
                "da": 23.554268276515153,
                "cash_capex": 69.6,
                "year": 2028,
                "quarter": 3,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 7.0,
                "wc_cash": -2.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 71.60984503357405,
                "ending_cash": 71.60984503357405,
                "core_cash_flow": 13.484845033574045,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 3.905756909873739,
                "ebit": 53.893421473750806,
                "da": 26.380780469696973,
                "cash_capex": 69.6,
                "year": 2028,
                "quarter": 4,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 7.0,
                "wc_cash": 7.75,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.875
              },
              {
                "pre_financing_cash": 35.835314948926666,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -35.77453008464738,
                "new_growth_debt": 24.470567140327425,
                "equity_proceeds": 0.0,
                "fees": 0.12235283570163713,
                "net_interest": 4.368012041768352,
                "ebit": 54.48049312553821,
                "da": 26.631559578030306,
                "cash_capex": 77.056,
                "year": 2029,
                "quarter": 1,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 10.0,
                "wc_cash": -32.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 66.36767970162707,
                "ending_cash": 66.36767970162707,
                "core_cash_flow": 6.367679701627081,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.576883989053092,
                "ebit": 56.84921021795291,
                "da": 27.78945347272727,
                "cash_capex": 66.048,
                "year": 2029,
                "quarter": 2,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 10.0,
                "wc_cash": -4.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 77.33749151082368,
                "ending_cash": 77.33749151082368,
                "core_cash_flow": 10.969811809196612,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.501362868595242,
                "ebit": 59.217927310367614,
                "da": 28.947347367424243,
                "cash_capex": 66.048,
                "year": 2029,
                "quarter": 3,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 10.0,
                "wc_cash": -3.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 109.07315890389165,
                "ending_cash": 109.07315890389165,
                "core_cash_flow": 31.73566739306797,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.315340246058931,
                "ebit": 66.32407858761174,
                "da": 32.421029051515156,
                "cash_capex": 66.048,
                "year": 2029,
                "quarter": 4,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 10.0,
                "wc_cash": 7.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              }
            ],
            "annual_summaries": [
              {
                "year": 2026,
                "period": "H2",
                "ending_cash": 111.97401542326261,
                "minimum_pre_financing_cash": 111.56592300226076,
                "cash_capex": 123.69,
                "core_cash_flow": -20.248409076737392,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "net_interest": 2.547149365280343,
                "ebit": 60.73174028854295,
                "da": 30.297,
                "sbc": 12.93,
                "wc_cash": 7.960000000000001,
                "cash_tax": 5.0,
                "fees": 0.0
              },
              {
                "year": 2027,
                "period": "FY",
                "ending_cash": 59.99999999999999,
                "minimum_pre_financing_cash": 32.845012195044504,
                "cash_capex": 291.0,
                "core_cash_flow": -96.5184338595889,
                "new_growth_debt": 58.779157910203836,
                "equity_proceeds": 0.0,
                "net_interest": 8.610392584445115,
                "ebit": 150.5468616314388,
                "da": 73.33865340909091,
                "sbc": 25.0,
                "wc_cash": -26.0,
                "cash_tax": 18.0,
                "fees": 0.2938957895510192
              },
              {
                "year": 2028,
                "period": "FY",
                "ending_cash": 71.60984503357405,
                "minimum_pre_financing_cash": 7.688421656321893,
                "cash_capex": 290.0,
                "core_cash_flow": -50.774903995753704,
                "new_growth_debt": 70.76936610564836,
                "equity_proceeds": 0.0,
                "net_interest": 14.86485261100241,
                "ebit": 192.47650526339572,
                "da": 94.21707310606061,
                "sbc": 27.0,
                "wc_cash": -29.0,
                "cash_tax": 28.0,
                "fees": 0.35384683052824184
              },
              {
                "year": 2029,
                "period": "FY",
                "ending_cash": 109.07315890389165,
                "minimum_pre_financing_cash": 35.835314948926666,
                "cash_capex": 275.2,
                "core_cash_flow": 13.298628819244282,
                "new_growth_debt": 24.470567140327425,
                "equity_proceeds": 0.0,
                "net_interest": 17.761599145475618,
                "ebit": 236.87170924147046,
                "da": 115.78938946969697,
                "sbc": 29.0,
                "wc_cash": -32.0,
                "cash_tax": 40.0,
                "fees": 0.12235283570163713
              }
            ]
          },
          "bridge": {
            "aws_ev": 3964.8117263193035,
            "retail_ev": 2193.852713958928,
            "cash": 69.07315890389165,
            "debt": 318.4556581561797,
            "finance_claims": 27.0548,
            "investment_net": 342.925,
            "other_claims": 0,
            "shares": 11.187399999999998,
            "common_equity": 6225.152141025943,
            "price": 556.4431539969916,
            "aws_multiple": 26,
            "retail_multiple": 26
          }
        },
        "Base": {
          "aws": [
            {
              "core": 148.0,
              "ai": 27.0,
              "revenue": 175.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 11.92530971145705,
              "da": 33.0,
              "ebit": 67.07469028854295,
              "margin": 0.38328394450595976,
              "additions": 192.5,
              "year": 2026
            },
            {
              "core": 173.0,
              "ai": 55.0,
              "revenue": 228.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 16.45178673369533,
              "da": 45.52577462121212,
              "ebit": 83.94243864509258,
              "margin": 0.36816859054865164,
              "additions": 190.0,
              "year": 2027
            },
            {
              "core": 195.0,
              "ai": 88.0,
              "revenue": 283.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 21.96039527778799,
              "da": 60.76932689393939,
              "ebit": 98.39027782827262,
              "margin": 0.34766882624831313,
              "additions": 165.0,
              "year": 2028
            },
            {
              "core": 217.0,
              "ai": 120.0,
              "revenue": 337.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 27.10487768543194,
              "da": 75.00526068181819,
              "ebit": 113.56986163274988,
              "margin": 0.3370025567737385,
              "additions": 145.0,
              "year": 2029
            }
          ],
          "retail": [
            {
              "revenue": 662.5,
              "na_share": 0.7239245283018868,
              "na_margin": 0.0765,
              "intl_margin": 0.0385,
              "ebit": 43.731049999999996,
              "additions": 60.0,
              "da": 24.0,
              "mix_bps": 0.0,
              "margin_change_na_bps": 0.0,
              "margin_change_intl_bps": 0.0,
              "year": 2026,
              "categories": {
                "Online": 297.1,
                "Physical": 23.5,
                "ThirdParty": 194.1,
                "Advertising": 85,
                "Subscription": 55.7,
                "Other": 7.1
              },
              "na_revenue": 479.6,
              "intl_revenue": 182.89999999999998
            },
            {
              "revenue": 731.133,
              "na_share": 0.722,
              "na_margin": 0.07856165792461318,
              "intl_margin": 0.04018665792461319,
              "ebit": 49.63911101614622,
              "additions": 64.0,
              "da": 27.5,
              "mix_bps": 20.616579246131916,
              "margin_change_na_bps": 20.616579246131916,
              "margin_change_intl_bps": 16.866579246131916,
              "year": 2027,
              "categories": {
                "Online": 320.86800000000005,
                "Physical": 24.44,
                "ThirdParty": 215.45100000000002,
                "Advertising": 100.3,
                "Subscription": 61.27000000000001,
                "Other": 8.804
              },
              "na_revenue": 527.878026,
              "intl_revenue": 203.25497400000006
            },
            {
              "revenue": 799.7036800000002,
              "na_share": 0.719,
              "na_margin": 0.08499932019197266,
              "intl_margin": 0.046749320191972664,
              "ebit": 59.378854076458865,
              "additions": 63.0,
              "da": 30.5,
              "mix_bps": 19.376622673594746,
              "margin_change_na_bps": 64.37662267359474,
              "margin_change_intl_bps": 65.62662267359474,
              "year": 2028,
              "categories": {
                "Online": 343.3287600000001,
                "Physical": 25.417600000000004,
                "ThirdParty": 236.99610000000004,
                "Advertising": 116.34799999999998,
                "Subscription": 66.78430000000002,
                "Other": 10.82892
              },
              "na_revenue": 574.9869459200002,
              "intl_revenue": 224.71673408000004
            },
            {
              "revenue": 866.7718742000002,
              "na_share": 0.716,
              "na_margin": 0.09178214123810165,
              "intl_margin": 0.054532141238101656,
              "ebit": 70.38459892187669,
              "additions": 60.0,
              "da": 33.0,
              "mix_bps": 17.828210461289906,
              "margin_change_na_bps": 67.8282104612899,
              "margin_change_intl_bps": 77.8282104612899,
              "year": 2029,
              "categories": {
                "Online": 363.9284856000001,
                "Physical": 26.434304000000004,
                "ThirdParty": 258.3257490000001,
                "Advertising": 132.63672,
                "Subscription": 72.12704400000003,
                "Other": 13.3195716
              },
              "na_revenue": 620.6086619272002,
              "intl_revenue": 246.16321227280002
            }
          ],
          "capital": {
            "cash": 116.40452209404924,
            "debt": 276.79227253610446,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 112.35570553610444,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 15.0,
            "investment_gross": 261.195,
            "investment_tax_basis": 90.0,
            "investment_tax": 41.942775,
            "investment_net": 219.252225,
            "operating_tax_timing_proxy": 58.00922060228494,
            "minimum_pre_financing_cash": 15.884423673048552,
            "quarters": [
              {
                "pre_financing_cash": 111.56592300226076,
                "ending_cash": 111.56592300226076,
                "core_cash_flow": -20.65650149773924,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2495865395047758,
                "ebit": 28.647047305916484,
                "da": 14.291037735849056,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 3,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": -4,
                "known_issue_cash": 30.5344245,
                "known_issue_principal": 30.692875,
                "openai_cash": 21.3,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 111.97401542326261,
                "ending_cash": 111.97401542326261,
                "core_cash_flow": 0.4080924210018476,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2975628257755671,
                "ebit": 32.084692982626464,
                "da": 16.005962264150945,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 4,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": 11.96,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 53.35065632570309,
                "ending_cash": 60.0,
                "core_cash_flow": -56.12335909755952,
                "new_growth_debt": 6.7335125815664885,
                "equity_proceeds": 0.0,
                "fees": 0.033667562907832446,
                "net_interest": 1.5249450268849747,
                "ebit": 30.723756422084925,
                "da": 16.795928162878788,
                "cash_capex": 73.36000000000001,
                "year": 2027,
                "quarter": 1,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.0,
                "wc_cash": -30.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 2.5
              },
              {
                "pre_financing_cash": 35.59432513906472,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -15.905674860935276,
                "new_growth_debt": 24.714607454111672,
                "equity_proceeds": 0.0,
                "fees": 0.12357303727055836,
                "net_interest": 1.9881922446293347,
                "ebit": 32.05957191869731,
                "da": 17.52618590909091,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 2,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.0,
                "wc_cash": -2.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 6,
                "anthropic_cash": 2.5
              },
              {
                "pre_financing_cash": 44.289679270077556,
                "ending_cash": 60.0,
                "core_cash_flow": -13.210320729922438,
                "new_growth_debt": 15.90918554928855,
                "equity_proceeds": 0.0,
                "fees": 0.07954592774644274,
                "net_interest": 2.2928706921548367,
                "ebit": 33.3953874153097,
                "da": 18.25644365530303,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 3,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.0,
                "wc_cash": -1.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 2.5
              },
              {
                "pre_financing_cash": 60.24926121531176,
                "ending_cash": 60.24926121531176,
                "core_cash_flow": 2.7492612153117655,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 2.412189583774501,
                "ebit": 37.40283390514686,
                "da": 20.447216893939395,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 4,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 4.0,
                "wc_cash": 8.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 2.5
              },
              {
                "pre_financing_cash": 15.884423673048552,
                "ending_cash": 60.0,
                "core_cash_flow": -43.11483754226321,
                "new_growth_debt": 44.6740013437483,
                "equity_proceeds": 0.0,
                "fees": 0.22337000671874152,
                "net_interest": 3.0551380760356244,
                "ebit": 36.28690033808824,
                "da": 20.99194518560606,
                "cash_capex": 66.64,
                "year": 2028,
                "quarter": 1,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 5.75,
                "wc_cash": -31.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 54.974346507750276,
                "ending_cash": 60.0,
                "core_cash_flow": -3.775653492249726,
                "new_growth_debt": 5.089269359240227,
                "equity_proceeds": 0.0,
                "fees": 0.025446346796201134,
                "net_interest": 3.4294531241250272,
                "ebit": 37.86459165713555,
                "da": 21.904638454545452,
                "cash_capex": 57.12,
                "year": 2028,
                "quarter": 2,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 5.75,
                "wc_cash": -3.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 58.38839205534838,
                "ending_cash": 60.0,
                "core_cash_flow": -0.36160794465161805,
                "new_growth_debt": 1.632008045216827,
                "equity_proceeds": 0.0,
                "fees": 0.008160040226084136,
                "net_interest": 3.4798627046584545,
                "ebit": 39.44228297618287,
                "da": 22.81733172348485,
                "cash_capex": 57.12,
                "year": 2028,
                "quarter": 3,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 5.75,
                "wc_cash": -2.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 75.90204723606178,
                "ending_cash": 75.90204723606178,
                "core_cash_flow": 17.152047236061772,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 3.425121227566074,
                "ebit": 44.175356933324814,
                "da": 25.555411530303033,
                "cash_capex": 57.12,
                "year": 2028,
                "quarter": 4,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 5.75,
                "wc_cash": 7.75,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 46.566917812104265,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -29.33512942395751,
                "new_growth_debt": 13.603121202932389,
                "equity_proceeds": 0.0,
                "fees": 0.06801560601466194,
                "net_interest": 3.8057887173618035,
                "ebit": 42.30952592756411,
                "da": 24.841209956818183,
                "cash_capex": 59.136,
                "year": 2029,
                "quarter": 1,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 8.0,
                "wc_cash": -32.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 69.79924760532762,
                "ending_cash": 69.79924760532762,
                "core_cash_flow": 9.799247605327635,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 3.9369854914191063,
                "ebit": 44.149070533110375,
                "da": 25.921262563636365,
                "cash_capex": 50.687999999999995,
                "year": 2029,
                "quarter": 2,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 8.0,
                "wc_cash": -4.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 83.62098407737042,
                "ending_cash": 83.62098407737042,
                "core_cash_flow": 13.821736472042796,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 3.834093837068395,
                "ebit": 45.98861513865664,
                "da": 27.001315170454546,
                "cash_capex": 50.687999999999995,
                "year": 2029,
                "quarter": 3,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 8.0,
                "wc_cash": -3.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 116.40452209404924,
                "ending_cash": 116.40452209404924,
                "core_cash_flow": 32.78353801667881,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 3.6310839295257367,
                "ebit": 51.507248955295445,
                "da": 30.241472990909095,
                "cash_capex": 50.687999999999995,
                "year": 2029,
                "quarter": 4,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 8.0,
                "wc_cash": 7.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              }
            ],
            "annual_summaries": [
              {
                "year": 2026,
                "period": "H2",
                "ending_cash": 111.97401542326261,
                "minimum_pre_financing_cash": 111.56592300226076,
                "cash_capex": 123.69,
                "core_cash_flow": -20.248409076737392,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "net_interest": 2.547149365280343,
                "ebit": 60.73174028854295,
                "da": 30.297,
                "sbc": 12.93,
                "wc_cash": 7.960000000000001,
                "cash_tax": 5.0,
                "fees": 0.0
              },
              {
                "year": 2027,
                "period": "FY",
                "ending_cash": 60.24926121531176,
                "minimum_pre_financing_cash": 35.59432513906472,
                "cash_capex": 262.0,
                "core_cash_flow": -82.49009347310547,
                "new_growth_debt": 47.35730558496671,
                "equity_proceeds": 0.0,
                "net_interest": 8.218197547443648,
                "ebit": 133.5815496612388,
                "da": 73.02577462121212,
                "sbc": 25.0,
                "wc_cash": -26.0,
                "cash_tax": 16.0,
                "fees": 0.23678652792483357
              },
              {
                "year": 2028,
                "period": "FY",
                "ending_cash": 75.90204723606178,
                "minimum_pre_financing_cash": 15.884423673048552,
                "cash_capex": 238.0,
                "core_cash_flow": -30.10005174310278,
                "new_growth_debt": 51.39527874820536,
                "equity_proceeds": 0.0,
                "net_interest": 13.389575132385179,
                "ebit": 157.76913190473147,
                "da": 91.2693268939394,
                "sbc": 27.0,
                "wc_cash": -29.0,
                "cash_tax": 23.0,
                "fees": 0.25697639374102677
              },
              {
                "year": 2029,
                "period": "FY",
                "ending_cash": 116.40452209404924,
                "minimum_pre_financing_cash": 46.566917812104265,
                "cash_capex": 211.2,
                "core_cash_flow": 27.06939267009173,
                "new_growth_debt": 13.603121202932389,
                "equity_proceeds": 0.0,
                "net_interest": 15.20795197537504,
                "ebit": 183.95446055462656,
                "da": 108.00526068181819,
                "sbc": 29.0,
                "wc_cash": -32.0,
                "cash_tax": 32.0,
                "fees": 0.06801560601466194
              }
            ]
          },
          "bridge": {
            "aws_ev": 2384.9670942877474,
            "retail_ev": 1548.4611762812872,
            "cash": 76.40452209404924,
            "debt": 276.79227253610446,
            "finance_claims": 27.0548,
            "investment_net": 219.252225,
            "other_claims": 0,
            "shares": 11.297400000000001,
            "common_equity": 3925.23794512698,
            "price": 347.4461331923256,
            "aws_multiple": 21,
            "retail_multiple": 22
          }
        },
        "Bear": {
          "aws": [
            {
              "core": 148.0,
              "ai": 27.0,
              "revenue": 175.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 11.92530971145705,
              "da": 33.0,
              "ebit": 67.07469028854295,
              "margin": 0.38328394450595976,
              "additions": 192.5,
              "year": 2026
            },
            {
              "core": 165.00816000000003,
              "ai": 35.0,
              "revenue": 200.00816000000003,
              "contribution_rate": 0.6333451570079005,
              "fixed_pre_da_cost": 16.45178673369533,
              "da": 45.52577462121212,
              "ebit": 64.69663814315386,
              "margin": 0.32346999314004915,
              "additions": 190.0,
              "year": 2027
            },
            {
              "core": 176.97125160000004,
              "ai": 58.0,
              "revenue": 234.97125160000004,
              "contribution_rate": 0.63309146738186,
              "fixed_pre_da_cost": 21.611417350868166,
              "da": 59.803626893939395,
              "ebit": 67.34325022318866,
              "margin": 0.2866020832958301,
              "additions": 135.3,
              "year": 2028
            },
            {
              "core": 190.00518428034005,
              "ai": 90.0,
              "revenue": 280.00518428034,
              "contribution_rate": 0.6362980007548441,
              "fixed_pre_da_cost": 26.23569754486125,
              "da": 72.60004477272727,
              "ebit": 79.33099664098356,
              "margin": 0.28331974225719225,
              "additions": 143.5375,
              "year": 2029
            }
          ],
          "retail": [
            {
              "revenue": 662.5,
              "na_share": 0.7239245283018868,
              "na_margin": 0.0765,
              "intl_margin": 0.0385,
              "ebit": 43.731049999999996,
              "additions": 60.0,
              "da": 24.0,
              "mix_bps": 0.0,
              "margin_change_na_bps": 0.0,
              "margin_change_intl_bps": 0.0,
              "year": 2026,
              "categories": {
                "Online": 297.1,
                "Physical": 23.5,
                "ThirdParty": 194.1,
                "Advertising": 85,
                "Subscription": 55.7,
                "Other": 7.1
              },
              "na_revenue": 479.6,
              "intl_revenue": 182.89999999999998
            },
            {
              "revenue": 706.047,
              "na_share": 0.724,
              "na_margin": 0.07226920589176662,
              "intl_margin": 0.031019205891766616,
              "ebit": 42.98711091726415,
              "additions": 62.0,
              "da": 27.5,
              "mix_bps": 15.192058917666174,
              "margin_change_na_bps": -42.307941082333826,
              "margin_change_intl_bps": -74.80794108233383,
              "year": 2027,
              "categories": {
                "Online": 311.95500000000004,
                "Physical": 23.97,
                "ThirdParty": 209.62800000000001,
                "Advertising": 93.50000000000001,
                "Subscription": 59.04200000000001,
                "Other": 7.952
              },
              "na_revenue": 511.178028,
              "intl_revenue": 194.86897200000004
            },
            {
              "revenue": 748.9604100000001,
              "na_share": 0.725,
              "na_margin": 0.07159494562834884,
              "intl_margin": 0.02759494562834883,
              "ebit": 44.55935887073586,
              "additions": 56.0,
              "da": 29.5,
              "mix_bps": 10.757397365822152,
              "margin_change_na_bps": -6.7426026341778496,
              "margin_change_intl_bps": -34.24260263417785,
              "year": 2028,
              "categories": {
                "Online": 327.55275000000006,
                "Physical": 24.4494,
                "ThirdParty": 224.30196000000004,
                "Advertising": 101.91500000000002,
                "Subscription": 61.99410000000001,
                "Other": 8.747200000000001
              },
              "na_revenue": 542.9962972500001,
              "intl_revenue": 205.96411275000003
            },
            {
              "revenue": 787.3423656000002,
              "na_share": 0.725,
              "na_margin": 0.07316092129456486,
              "intl_margin": 0.027410921294564853,
              "ebit": 47.69694170433312,
              "additions": 52.0,
              "da": 30.5,
              "mix_bps": 10.659756662160236,
              "margin_change_na_bps": 15.659756662160236,
              "margin_change_intl_bps": -1.840243337839766,
              "year": 2029,
              "categories": {
                "Online": 340.6548600000001,
                "Physical": 24.938388,
                "ThirdParty": 237.76007760000005,
                "Advertising": 110.06820000000003,
                "Subscription": 64.473864,
                "Other": 9.446976000000001
              },
              "na_revenue": 570.8232150600002,
              "intl_revenue": 216.51915054000006
            }
          ],
          "capital": {
            "cash": 78.46916242898965,
            "debt": 307.65570077862856,
            "finance_claims": 27.0548,
            "shares": 11.447399999999996,
            "cumulative_growth_debt": 143.21913377862856,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 10.0,
            "investment_gross": 193.0,
            "investment_tax_basis": 85.0,
            "investment_tax": 26.46,
            "investment_net": 166.54,
            "operating_tax_timing_proxy": 46.83650919705054,
            "minimum_pre_financing_cash": 16.284976550733155,
            "quarters": [
              {
                "pre_financing_cash": 111.56592300226076,
                "ending_cash": 111.56592300226076,
                "core_cash_flow": -20.65650149773924,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2495865395047758,
                "ebit": 28.647047305916484,
                "da": 14.291037735849056,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 3,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": -4,
                "known_issue_cash": 30.5344245,
                "known_issue_principal": 30.692875,
                "openai_cash": 21.3,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 111.97401542326261,
                "ending_cash": 111.97401542326261,
                "core_cash_flow": 0.4080924210018476,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2975628257755671,
                "ebit": 32.084692982626464,
                "da": 16.005962264150945,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 4,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": 11.96,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 51.454162187514314,
                "ending_cash": 60.0,
                "core_cash_flow": -60.5198532357483,
                "new_growth_debt": 8.670475903599936,
                "equity_proceeds": 0.0,
                "fees": 0.04335237951799968,
                "net_interest": 1.5557293941194754,
                "ebit": 24.767262283896144,
                "da": 16.795928162878788,
                "cash_capex": 72.80000000000001,
                "year": 2027,
                "quarter": 1,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 3.0,
                "wc_cash": -30.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 33.29728426039874,
                "ending_cash": 60.0,
                "core_cash_flow": -20.702715739601263,
                "new_growth_debt": 27.09216562039443,
                "equity_proceeds": 0.0,
                "fees": 0.13546082810197216,
                "net_interest": 2.1183904758836967,
                "ebit": 25.84409977450032,
                "da": 17.52618590909091,
                "cash_capex": 62.4,
                "year": 2027,
                "quarter": 2,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 3.0,
                "wc_cash": -2.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 6,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 41.596401391832636,
                "ending_cash": 60.0,
                "core_cash_flow": -18.403598608167364,
                "new_growth_debt": 18.67200873371451,
                "equity_proceeds": 0.0,
                "fees": 0.09336004366857255,
                "net_interest": 2.547429610453468,
                "ebit": 26.920937265104502,
                "da": 18.25644365530303,
                "cash_capex": 62.4,
                "year": 2027,
                "quarter": 3,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 3.0,
                "wc_cash": -1.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 56.6675869385244,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -3.3324130614755973,
                "new_growth_debt": 3.3810151543189333,
                "equity_proceeds": 0.0,
                "fees": 0.016905075771594665,
                "net_interest": 2.7541767094037812,
                "ebit": 30.151449736917044,
                "da": 20.447216893939395,
                "cash_capex": 62.4,
                "year": 2027,
                "quarter": 4,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 3.0,
                "wc_cash": 8.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 16.284976550733155,
                "ending_cash": 60.0,
                "core_cash_flow": -42.46502344926684,
                "new_growth_debt": 44.35259195867277,
                "equity_proceeds": 0.0,
                "fees": 0.22176295979336386,
                "net_interest": 3.5106632760880783,
                "ebit": 25.73760009160264,
                "da": 20.53983418560606,
                "cash_capex": 56.36400000000001,
                "year": 2028,
                "quarter": 1,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 4.0,
                "wc_cash": -31.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 53.51742781138671,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -5.232572188613293,
                "new_growth_debt": 6.577118263653306,
                "equity_proceeds": 0.0,
                "fees": 0.03288559131826653,
                "net_interest": 3.988129309422385,
                "ebit": 26.856626182541884,
                "da": 21.432870454545455,
                "cash_capex": 48.312,
                "year": 2028,
                "quarter": 2,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 4.0,
                "wc_cash": -3.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 56.40616920382184,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -2.343830796178153,
                "new_growth_debt": 3.6462455763380195,
                "equity_proceeds": 0.0,
                "fees": 0.0182312278816901,
                "net_interest": 4.0839733454223035,
                "ebit": 27.97565227348113,
                "da": 22.32590672348485,
                "cash_capex": 48.312,
                "year": 2028,
                "quarter": 3,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 4.0,
                "wc_cash": -2.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 72.42582850655911,
                "ending_cash": 72.42582850655911,
                "core_cash_flow": 13.675828506559126,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.06631757004278,
                "ebit": 31.33273054629887,
                "da": 25.005015530303034,
                "cash_capex": 48.312,
                "year": 2028,
                "quarter": 4,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 4.0,
                "wc_cash": 7.75,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 32.12763672572495,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -39.048191780834166,
                "new_growth_debt": 28.27887206013956,
                "equity_proceeds": 0.0,
                "fees": 0.1413943603006978,
                "net_interest": 4.610142323548086,
                "ebit": 29.216425819422835,
                "da": 23.713010297727273,
                "cash_capex": 56.4865,
                "year": 2029,
                "quarter": 1,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 5.5,
                "wc_cash": -32.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 57.48799619950245,
                "ending_cash": 60.0,
                "core_cash_flow": -1.2620038004975425,
                "new_growth_debt": 2.5486405077971366,
                "equity_proceeds": 0.0,
                "fees": 0.012743202538985683,
                "net_interest": 4.953513253588686,
                "ebit": 30.486705202876,
                "da": 24.744010745454545,
                "cash_capex": 48.416999999999994,
                "year": 2029,
                "quarter": 2,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 5.5,
                "wc_cash": -4.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 60.742436160629296,
                "ending_cash": 60.742436160629296,
                "core_cash_flow": 1.992436160629295,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.9764596188817025,
                "ebit": 31.756984586329168,
                "da": 25.775011193181818,
                "cash_capex": 48.416999999999994,
                "year": 2029,
                "quarter": 3,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 5.5,
                "wc_cash": -3.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 78.46916242898965,
                "ending_cash": 78.46916242898965,
                "core_cash_flow": 18.97672626836036,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 4.896009004691953,
                "ebit": 35.56782273668867,
                "da": 28.86801253636364,
                "cash_capex": 48.416999999999994,
                "year": 2029,
                "quarter": 4,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 5.5,
                "wc_cash": 7.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              }
            ],
            "annual_summaries": [
              {
                "year": 2026,
                "period": "H2",
                "ending_cash": 111.97401542326261,
                "minimum_pre_financing_cash": 111.56592300226076,
                "cash_capex": 123.69,
                "core_cash_flow": -20.248409076737392,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "net_interest": 2.547149365280343,
                "ebit": 60.73174028854295,
                "da": 30.297,
                "sbc": 12.93,
                "wc_cash": 7.960000000000001,
                "cash_tax": 5.0,
                "fees": 0.0
              },
              {
                "year": 2027,
                "period": "FY",
                "ending_cash": 59.99999999999999,
                "minimum_pre_financing_cash": 33.29728426039874,
                "cash_capex": 260.0,
                "core_cash_flow": -102.95858064499252,
                "new_growth_debt": 57.815665412027805,
                "equity_proceeds": 0.0,
                "net_interest": 8.97572618986042,
                "ebit": 107.68374906041801,
                "da": 73.02577462121212,
                "sbc": 25.0,
                "wc_cash": -26.0,
                "cash_tax": 12.0,
                "fees": 0.28907832706013903
              },
              {
                "year": 2028,
                "period": "FY",
                "ending_cash": 72.42582850655911,
                "minimum_pre_financing_cash": 16.284976550733155,
                "cash_capex": 201.3,
                "core_cash_flow": -36.36559792749916,
                "new_growth_debt": 54.5759557986641,
                "equity_proceeds": 0.0,
                "net_interest": 15.649083500975546,
                "ebit": 111.90260909392453,
                "da": 89.3036268939394,
                "sbc": 27.0,
                "wc_cash": -29.0,
                "cash_tax": 16.0,
                "fees": 0.2728797789933205
              },
              {
                "year": 2029,
                "period": "FY",
                "ending_cash": 78.46916242898965,
                "minimum_pre_financing_cash": 32.12763672572495,
                "cash_capex": 201.73749999999998,
                "core_cash_flow": -19.341033152342053,
                "new_growth_debt": 30.827512567936694,
                "equity_proceeds": 0.0,
                "net_interest": 19.436124200710427,
                "ebit": 127.02793834531667,
                "da": 103.10004477272727,
                "sbc": 29.0,
                "wc_cash": -32.0,
                "cash_tax": 22.0,
                "fees": 0.15413756283968347
              }
            ]
          },
          "bridge": {
            "aws_ev": 1269.295946255737,
            "retail_ev": 810.848008973663,
            "cash": 38.46916242898965,
            "debt": 307.65570077862856,
            "finance_claims": 27.0548,
            "investment_net": 166.54,
            "other_claims": 0,
            "shares": 11.447399999999996,
            "common_equity": 1950.4426168797609,
            "price": 170.3830229466745,
            "aws_multiple": 16,
            "retail_multiple": 17
          }
        },
        "Tail": {
          "aws": [
            {
              "core": 148.0,
              "ai": 27.0,
              "revenue": 175.0,
              "contribution_rate": 0.64,
              "fixed_pre_da_cost": 11.92530971145705,
              "da": 33.0,
              "ebit": 67.07469028854295,
              "margin": 0.38328394450595976,
              "additions": 192.5,
              "year": 2026
            },
            {
              "core": 155.0,
              "ai": 30.0,
              "revenue": 185.0,
              "contribution_rate": 0.6,
              "fixed_pre_da_cost": 16.45178673369533,
              "da": 45.52577462121212,
              "ebit": 49.02243864509255,
              "margin": 0.2649861548383381,
              "additions": 190.0,
              "year": 2027
            },
            {
              "core": 167.0,
              "ai": 38.0,
              "revenue": 205.0,
              "contribution_rate": 0.59,
              "fixed_pre_da_cost": 21.349683905678305,
              "da": 59.0793518939394,
              "ebit": 40.52096420038228,
              "margin": 0.19766324000186478,
              "additions": 113.025,
              "year": 2028
            },
            {
              "core": 180.0,
              "ai": 50.0,
              "revenue": 230.0,
              "contribution_rate": 0.6,
              "fixed_pre_da_cost": 25.230538382731254,
              "da": 69.81854448863636,
              "ebit": 42.95091712863238,
              "margin": 0.18674311795057558,
              "additions": 112.375,
              "year": 2029
            }
          ],
          "retail": [
            {
              "revenue": 662.5,
              "na_share": 0.7239245283018868,
              "na_margin": 0.0765,
              "intl_margin": 0.0385,
              "ebit": 43.731049999999996,
              "additions": 60.0,
              "da": 24.0,
              "mix_bps": 0.0,
              "margin_change_na_bps": 0.0,
              "margin_change_intl_bps": 0.0,
              "year": 2026,
              "categories": {
                "Online": 297.1,
                "Physical": 23.5,
                "ThirdParty": 194.1,
                "Advertising": 85,
                "Subscription": 55.7,
                "Other": 7.1
              },
              "na_revenue": 479.6,
              "intl_revenue": 182.89999999999998
            },
            {
              "revenue": 661.693,
              "na_share": 0.727,
              "na_margin": 0.06481740604839005,
              "intl_margin": 0.026817406048390044,
              "ebit": 36.02482067837735,
              "additions": 64.0,
              "da": 28.0,
              "mix_bps": 18.17406048390047,
              "margin_change_na_bps": -116.82593951609954,
              "margin_change_intl_bps": -116.82593951609954,
              "year": 2027,
              "categories": {
                "Online": 291.158,
                "Physical": 23.03,
                "ThirdParty": 196.041,
                "Advertising": 87.55,
                "Subscription": 56.81400000000001,
                "Other": 7.1
              },
              "na_revenue": 481.05081099999995,
              "intl_revenue": 180.64218900000003
            },
            {
              "revenue": 676.92273,
              "na_share": 0.73,
              "na_margin": 0.056537126833474324,
              "intl_margin": 0.01953712683347432,
              "ebit": 31.508808169771694,
              "additions": 55.0,
              "da": 30.0,
              "mix_bps": 12.197207850842773,
              "margin_change_na_bps": -82.80279214915723,
              "margin_change_intl_bps": -72.80279214915723,
              "year": 2028,
              "categories": {
                "Online": 294.06958000000003,
                "Physical": 23.03,
                "ThirdParty": 201.92223,
                "Advertising": 91.9275,
                "Subscription": 58.518420000000006,
                "Other": 7.455
              },
              "na_revenue": 494.1535929,
              "intl_revenue": 182.76913710000002
            },
            {
              "revenue": 703.4240684,
              "na_share": 0.732,
              "na_margin": 0.05290642748315568,
              "intl_margin": 0.016906427483155677,
              "ebit": 30.42901905278774,
              "additions": 50.0,
              "da": 31.0,
              "mix_bps": 8.693006496813593,
              "margin_change_na_bps": -36.306993503186405,
              "margin_change_intl_bps": -26.306993503186405,
              "year": 2029,
              "categories": {
                "Online": 302.8916674,
                "Physical": 23.2603,
                "ThirdParty": 209.99911920000002,
                "Advertising": 98.362425,
                "Subscription": 60.85915680000001,
                "Other": 8.051400000000001
              },
              "na_revenue": 514.9064180688,
              "intl_revenue": 188.5176503312
            }
          ],
          "capital": {
            "cash": 71.8790067485007,
            "debt": 333.31999999999994,
            "finance_claims": 27.0548,
            "shares": 12.551806996018387,
            "cumulative_growth_debt": 168.883433,
            "cumulative_equity_proceeds": 21.235174900459718,
            "investment_funded": 5.0,
            "investment_gross": 73.5,
            "investment_tax_basis": 80.0,
            "investment_tax": 0.0,
            "investment_net": 73.5,
            "operating_tax_timing_proxy": 33.79717704089674,
            "minimum_pre_financing_cash": 15.257610910144159,
            "quarters": [
              {
                "pre_financing_cash": 111.56592300226076,
                "ending_cash": 111.56592300226076,
                "core_cash_flow": -20.65650149773924,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2495865395047758,
                "ebit": 28.647047305916484,
                "da": 14.291037735849056,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 3,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": -4,
                "known_issue_cash": 30.5344245,
                "known_issue_principal": 30.692875,
                "openai_cash": 21.3,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 111.97401542326261,
                "ending_cash": 111.97401542326261,
                "core_cash_flow": 0.4080924210018476,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 1.2975628257755671,
                "ebit": 32.084692982626464,
                "da": 16.005962264150945,
                "cash_capex": 61.845,
                "year": 2026,
                "quarter": 4,
                "lease_principal": 0.465,
                "sbc": 6.465,
                "cash_tax": 2.5,
                "wc_cash": 11.96,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 45.552769548016244,
                "ending_cash": 59.99999999999999,
                "core_cash_flow": -65.17124587524637,
                "new_growth_debt": 14.685875935942827,
                "equity_proceeds": 0.0,
                "fees": 0.07342937967971414,
                "net_interest": 1.6396597868025828,
                "ebit": 19.56086964439808,
                "da": 16.91092816287879,
                "cash_capex": 73.36000000000001,
                "year": 2027,
                "quarter": 1,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 2.0,
                "wc_cash": -30.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 27.08666593816497,
                "ending_cash": 60.0,
                "core_cash_flow": -25.663334061835027,
                "new_growth_debt": 33.4570104821703,
                "equity_proceeds": 0.0,
                "fees": 0.16728505241085148,
                "net_interest": 2.4086535764831294,
                "ebit": 20.411342237632777,
                "da": 17.64618590909091,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 2,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 2.0,
                "wc_cash": -2.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 6,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 34.91961354176297,
                "ending_cash": 60.0,
                "core_cash_flow": -23.83038645823703,
                "new_growth_debt": 25.49467492578097,
                "equity_proceeds": 0.0,
                "fees": 0.12747337462890485,
                "net_interest": 3.0718600373225815,
                "ebit": 21.261814830867475,
                "da": 18.38144365530303,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 3,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 2.0,
                "wc_cash": -1.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 49.103174374273365,
                "ending_cash": 60.0,
                "core_cash_flow": -9.646825625726638,
                "new_growth_debt": 11.076824015986414,
                "equity_proceeds": 0.0,
                "fees": 0.05538412007993207,
                "net_interest": 3.483289400417464,
                "ebit": 23.813232610571575,
                "da": 20.587216893939395,
                "cash_capex": 62.879999999999995,
                "year": 2027,
                "quarter": 4,
                "lease_principal": 0.5586,
                "sbc": 6.25,
                "cash_tax": 2.0,
                "wc_cash": 8.5,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 1.25
              },
              {
                "pre_financing_cash": 15.257610910144159,
                "ending_cash": 60.0,
                "core_cash_flow": -44.74238908985584,
                "new_growth_debt": 45.481462861352824,
                "equity_proceeds": 0.0,
                "fees": 0.2274073143067641,
                "net_interest": 4.42855412778753,
                "ebit": 16.566847645135415,
                "da": 20.488250935606064,
                "cash_capex": 49.84700000000001,
                "year": 2028,
                "quarter": 1,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 2.75,
                "wc_cash": -31.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 50.96636923840466,
                "ending_cash": 60.0,
                "core_cash_flow": -9.033630761595338,
                "new_growth_debt": 9.182852108356126,
                "equity_proceeds": 0.0,
                "fees": 0.04591426054178063,
                "net_interest": 5.043527671196756,
                "ebit": 17.287145368836953,
                "da": 21.379044454545458,
                "cash_capex": 42.726,
                "year": 2028,
                "quarter": 2,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 2.75,
                "wc_cash": -3.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 53.37084630860759,
                "ending_cash": 60.0,
                "core_cash_flow": -6.629153691392412,
                "new_growth_debt": 6.738656865456072,
                "equity_proceeds": 0.0,
                "fees": 0.03369328432728036,
                "net_interest": 5.222644647152143,
                "ebit": 18.007443092538495,
                "da": 22.26983797348485,
                "cash_capex": 42.726,
                "year": 2028,
                "quarter": 3,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 2.75,
                "wc_cash": -2.25,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 68.08543307068226,
                "ending_cash": 68.08543307068226,
                "core_cash_flow": 8.085433070682253,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 5.265521723263897,
                "ebit": 20.168336263643116,
                "da": 24.942218530303034,
                "cash_capex": 42.726,
                "year": 2028,
                "quarter": 4,
                "lease_principal": 0.7836,
                "sbc": 6.75,
                "cash_tax": 2.75,
                "wc_cash": 7.75,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 26.00966885759096,
                "ending_cash": 60.0,
                "core_cash_flow": -42.0757642130913,
                "new_growth_debt": 22.766075804954454,
                "equity_proceeds": 11.652466401291548,
                "fees": 0.17209271103123003,
                "net_interest": 5.800433120010027,
                "ebit": 16.877385321726628,
                "da": 23.188265232386364,
                "cash_capex": 47.201,
                "year": 2029,
                "quarter": 1,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 3.75,
                "wc_cash": -32.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 53.86161011831355,
                "ending_cash": 60.0,
                "core_cash_flow": -6.138389881686448,
                "new_growth_debt": 0.0,
                "equity_proceeds": 6.169236061996433,
                "fees": 0.030846180309982162,
                "net_interest": 6.091925242499999,
                "ebit": 17.611184683540827,
                "da": 24.196450677272725,
                "cash_capex": 40.458,
                "year": 2029,
                "quarter": 2,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 3.75,
                "wc_cash": -4.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 56.60359492501412,
                "ending_cash": 60.0,
                "core_cash_flow": -3.396405074985877,
                "new_growth_debt": 0.0,
                "equity_proceeds": 3.413472437171737,
                "fees": 0.017067362185858685,
                "net_interest": 6.091925242499999,
                "ebit": 18.34498404535503,
                "da": 25.20463612215909,
                "cash_capex": 40.458,
                "year": 2029,
                "quarter": 3,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 3.75,
                "wc_cash": -3.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              },
              {
                "pre_financing_cash": 71.8790067485007,
                "ending_cash": 71.8790067485007,
                "core_cash_flow": 11.879006748500705,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "fees": 0.0,
                "net_interest": 6.042467839115117,
                "ebit": 20.546382130797635,
                "da": 28.229192456818183,
                "cash_capex": 40.458,
                "year": 2029,
                "quarter": 4,
                "lease_principal": 0.8961000000000001,
                "sbc": 7.25,
                "cash_tax": 3.75,
                "wc_cash": 7.0,
                "known_issue_cash": 0,
                "known_issue_principal": 0,
                "openai_cash": 0,
                "globalstar_cash": 0,
                "anthropic_cash": 0.0
              }
            ],
            "annual_summaries": [
              {
                "year": 2026,
                "period": "H2",
                "ending_cash": 111.97401542326261,
                "minimum_pre_financing_cash": 111.56592300226076,
                "cash_capex": 123.69,
                "core_cash_flow": -20.248409076737392,
                "new_growth_debt": 0.0,
                "equity_proceeds": 0.0,
                "net_interest": 2.547149365280343,
                "ebit": 60.73174028854295,
                "da": 30.297,
                "sbc": 12.93,
                "wc_cash": 7.960000000000001,
                "cash_tax": 5.0,
                "fees": 0.0
              },
              {
                "year": 2027,
                "period": "FY",
                "ending_cash": 60.0,
                "minimum_pre_financing_cash": 27.08666593816497,
                "cash_capex": 262.0,
                "core_cash_flow": -124.31179202104506,
                "new_growth_debt": 84.71438535988051,
                "equity_proceeds": 0.0,
                "net_interest": 10.603462801025758,
                "ebit": 85.0472593234699,
                "da": 73.52577462121212,
                "sbc": 25.0,
                "wc_cash": -26.0,
                "cash_tax": 8.0,
                "fees": 0.42357192679940253
              },
              {
                "year": 2028,
                "period": "FY",
                "ending_cash": 68.08543307068226,
                "minimum_pre_financing_cash": 15.257610910144159,
                "cash_capex": 178.025,
                "core_cash_flow": -52.31974047216134,
                "new_growth_debt": 61.40297183516502,
                "equity_proceeds": 0.0,
                "net_interest": 19.960248169400327,
                "ebit": 72.02977237015398,
                "da": 89.0793518939394,
                "sbc": 27.0,
                "wc_cash": -29.0,
                "cash_tax": 11.0,
                "fees": 0.3070148591758251
              },
              {
                "year": 2029,
                "period": "FY",
                "ending_cash": 71.8790067485007,
                "minimum_pre_financing_cash": 26.00966885759096,
                "cash_capex": 168.575,
                "core_cash_flow": -39.73155242126292,
                "new_growth_debt": 22.766075804954454,
                "equity_proceeds": 21.235174900459718,
                "net_interest": 24.02675144412514,
                "ebit": 73.37993618142012,
                "da": 100.81854448863636,
                "sbc": 29.0,
                "wc_cash": -32.0,
                "cash_tax": 15.0,
                "fees": 0.22000625352707087
              }
            ]
          },
          "bridge": {
            "aws_ev": 386.55825415769147,
            "retail_ev": 365.1482286334529,
            "cash": 31.8790067485007,
            "debt": 333.31999999999994,
            "finance_claims": 27.0548,
            "investment_net": 73.5,
            "other_claims": 0,
            "shares": 12.551806996018387,
            "common_equity": 496.71068953964516,
            "price": 39.57284315295868,
            "aws_multiple": 9,
            "retail_multiple": 12
          }
        }
      },
      "state_classification": {
        "business_states": [
          "S",
          "N",
          "W",
          "X"
        ],
        "matrix": [
          [
            "Bull",
            "Bull",
            "Base",
            "Bear"
          ],
          [
            "Bull",
            "Base",
            "Base",
            "Bear"
          ],
          [
            "Base",
            "Bear",
            "Bear",
            "Tail"
          ],
          [
            "Bear",
            "Bear",
            "Tail",
            "Tail"
          ]
        ],
        "row": "AWS",
        "column": "整合非AWS",
        "horizon": "2026-09-20可用信息下的2026H2–2029经营路径",
        "definitions": {
          "S": "采用/收入与资本转化较强；同时保留支出和企业响应",
          "N": "主要机制按研究基准兑现，仍承担竞争、资本及更新需要",
          "W": "兑现、单位经济或资本转化受挫，仍有经营与修复能力",
          "X": "客户融资/使用、既有能力或普通股权利严重受损"
        },
        "boundary_rule": "先依业务条件定S/N/W/X，再按矩阵. Tail格优先、其次Bull与Bear、余格Base；不是按终价分档. 原研究未给硬数字阈值；边界不清先记录未定类，不事后按股价改类."
      },
      "probability_evidence": [
        {
          "stage": "机制起点",
          "weights": [
            0.24,
            0.46,
            0.24,
            0.06
          ],
          "reason": "两组大型正利润经营，资本扩张阶段；成功与失配先作粗对称判断",
          "identity": "研究起点，不是样本频率"
        },
        {
          "stage": "资本与物理兑现",
          "weights": [
            0.2,
            0.45,
            0.28,
            0.07
          ],
          "reason": "前置建设、供电与使用时滞，提高失配权重"
        },
        {
          "stage": "需求与存量留存",
          "weights": [
            0.29,
            0.43,
            0.23,
            0.05
          ],
          "reason": "最近三期需求加速及迁移摩擦支持需求持续；并不保证计费量"
        },
        {
          "stage": "恢复及混合状态",
          "weights": [
            0.31,
            0.44,
            0.2,
            0.05
          ],
          "reason": "容纳修复、创新和业务不同时好坏的共同状态；采用的粗分布"
        }
      ],
      "identity_notes": {
        "market_debt": "期末有息借款余额（模型口径），不是未来债券市场公允价值",
        "cash": "期末账面可用现金/证券模型余额，经营保留未被支出",
        "finance_claims": "融资租赁及融资义务；与有息借款分列",
        "investment_net": "已扣模型实现税的非经营投资；不是流动性储备",
        "other_claims": "模型取0；未作全体潜在权利为零的审计结论",
        "pricing_range": "同一经营/资金路径的定价参数范围；不是置信区间或条件支持",
        "probability": "主观粗判断，不是统计后验；按钮操作不新增研究证据",
        "quarters": "每季已继承此前融资；融资前余额不是全期无融资轨迹，也不保证季内资金充足",
        "quote_vs_cutoff": "9月18日参考进入价格，9月20日研究信息截止；无实际成交或仅用9月18日信息的样本外回测声明.",
        "share_count_proxy": "11.0274 B 股是冻结模型规划代理：10.783普通股 + 0.2444 outstanding RSU；公司另披露普通股加全部 outstanding stock awards 对应股份约11.0 B 股. 该代理不是官方完全稀释股数，也不是EPS加权平均股数."
      },
      "source_map": {
        "annual_operations": "operating-results.json::{state}.aws/retail",
        "quarters_and_capital": "model-results.json::scenarios.{state}.capital",
        "pricing": "sensitivity-results.json::pricing.{pricing_id}.prices/distributions",
        "alternatives": "sensitivity-results.json::operating.{named_key}",
        "weights": "model-inputs.json::probabilities.{weight_id}"
      },
      "peers": {
        "GOOGL": {
          "title": "Alphabet全集团",
          "quote_date": "2026-09-18",
          "quote_time": "16:00 EDT",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-06-30",
          "balance_sheet_date": "2026-06-30",
          "quote": 349.54,
          "fy_operating_income": 129.039,
          "current_h1_operating_income": 80.466,
          "prior_h1_operating_income": 61.877,
          "ttm_ebit": 147.628,
          "h1_annualized": 160.932,
          "vendor_ev": 4153.1912,
          "debt_book": 100.164,
          "finance_lease": 2.59,
          "operating_lease": 18.037,
          "preferred_depositary_shares_bn": 0.385,
          "preferred_per_depositary_usd": 50,
          "preferred_liquidation_proxy": 19.25,
          "nonmarketable_book": 131.461,
          "adjustments": [
            {
              "label": "原冻结EV",
              "value": 4153.1912
            },
            {
              "label": "移除经营租赁",
              "value": -18.037
            },
            {
              "label": "优先权清算代理",
              "value": 19.25
            }
          ],
          "uncertain_subtract_range": [
            0,
            131.461
          ],
          "full_cash_reconstruction": false,
          "limitations": "vendor EV为原研究观察并非当日完整不可变快照；非上市账面非税后现金；优先权清算额非市值；不能把集团参照当纯GCP."
        },
        "WMT": {
          "title": "Walmart全集团",
          "quote_date": "2026-09-18",
          "quote_time": "16:00 EDT",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-07-31",
          "balance_sheet_date": "2026-07-31",
          "quote": 106.73,
          "fiscal_year_base_end": "2026-01-31",
          "fy_operating_income": 29.825,
          "current_h1_operating_income": 16.876,
          "prior_h1_operating_income": 14.421,
          "ttm_ebit": 32.28,
          "vendor_ev": 910.33,
          "common_market_cap": 846.77,
          "short_borrowings": 10.479,
          "current_long_debt": 3.47,
          "long_debt": 36.462,
          "debt_book": 50.411,
          "finance_lease_current": 0.88,
          "finance_lease_long": 5.952,
          "finance_lease": 6.832,
          "redeemable_nci": 0.293,
          "nonredeemable_nci": 6.268,
          "nci_book": 6.561,
          "cash": 11.529,
          "operating_lease": 16.512,
          "rebuilt_ev": 899.045,
          "vendor_wrong_ebit": 28.98,
          "vendor_wrong_multiple": 31.41,
          "vendor_debt": 75.092,
          "debt_with_all_leases": 73.755,
          "unreconciled_vendor_difference": 1.337,
          "adjustments": [
            {
              "label": "普通股市值",
              "value": 846.77
            },
            {
              "label": "有息借款",
              "value": 50.411
            },
            {
              "label": "融资租赁",
              "value": 6.832
            },
            {
              "label": "非控制权益账面代理",
              "value": 6.561
            },
            {
              "label": "现金",
              "value": -11.529
            }
          ],
          "limitations": "NCI用账面代理；未完全复原vendor debt定义；ROI调整后分子50.285不是经营利润32.280."
        },
        "MSFT": {
          "title": "Microsoft全集团盈利对照",
          "quote_date": "2026-09-18",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-06-30",
          "balance_sheet_date": "2026-06-30",
          "quote": 493.78,
          "ttm_ebit": 155.237,
          "gaap_eps": 17.95,
          "adjusted_eps": 17.28,
          "use": "仅集团盈利/EPS口径对照；不发布未补读完整租赁单元的统一EV倍数图",
          "source": "FY2026官方业绩表"
        }
      },
      "business_views": [
        {
          "id": "AWS",
          "label": "AWS",
          "type": "reportable_segment_and_business",
          "group": "AWS",
          "reason": "独立分部收入/OI及资本资料；独立客户不是必要条件"
        },
        {
          "id": "1P",
          "label": "自营商品",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "按商品收入确认，采购、存货与履约责任"
        },
        {
          "id": "3P",
          "label": "第三方卖家服务",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "服务收费不是卖家GMV；履约资源与1P共享"
        },
        {
          "id": "Ads",
          "label": "广告",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "收入已进入地域分部；依赖购物流量、库存和技术"
        },
        {
          "id": "Prime",
          "label": "Prime/订阅关系",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "会费与配送/内容共同投入；不能再加一份相同留存价值"
        },
        {
          "id": "International",
          "label": "国际",
          "type": "geography",
          "group": "nonAWS",
          "reason": "同一收费活动的地域视角，不是六收入类别之外的收入"
        },
        {
          "id": "Fulfillment",
          "label": "履约网络",
          "type": "shared_resource",
          "group": "nonAWS",
          "reason": "同时服务自营、卖家和会员安排；另有已披露的服务收费"
        },
        {
          "id": "TechnologyContent",
          "label": "技术/内容资源",
          "type": "shared_resource",
          "group": "shared_by_usage",
          "reason": "依据实际使用进入所属分部；不是额外可直接加总的EV"
        }
      ],
      "grouping_sensitivity": {
        "direction": "nonAWS_to_AWS",
        "delta_ebit_bn": 5,
        "fixed_multiples": [
          21,
          22
        ],
        "price_effect": -0.4425797086055198,
        "identity": "固定分组与倍数的分摊敏感性，不是重估或任意重组方向结论"
      },
      "dilution_sensitivity": {
        "extra_awards_bn": 0.2,
        "price": 341.40222529676095,
        "cash_proceeds": 0,
        "identity": "纯分母检查；不是现实授予/融资政策分析"
      },
      "teaching_examples": {
        "mixed_equity_bridge": {
          "industrial_ev": 600,
          "industrial_debt": 120,
          "bank_equity": 200,
          "bank_debt_already_in_equity": 1000,
          "nonoperating_cash": 30,
          "parent_debt": 40,
          "shares": 10,
          "common_equity": 670,
          "price": 67,
          "identity": "纯教学设定；不是任何公司披露"
        },
        "brier": {
          "hypothetical_observation": "Base",
          "adopted": 0.4522,
          "capital_pressure": 0.4728,
          "normalization": "sum over four classes, no one-half; range0–2"
        }
      }
    },
    "identity": "完整公共冻结教学输入；不更新研究"
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [],
  "prompt": "先实际阅读 agent_packet.required_readings 指定原文单元，记录题名、版本、定位及支持内容；缺失时取得等价可读原件后再讲解. 依据具名历史材料解释业务、证券权利、日期、计量口径和已列计算. 沿该历史截止日复算，区分披露、模型假设和未来代表点. 先检查读者当前疑点，再以完整计算或条件迁移解释. runtime_reading_log保留实际读取记录.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
**案例ID：CASE-AMZN-20260920.** 公司为 Amazon.com, Inc.；证券为 AMZN 普通股，计价美元.

<a id="case-amzn-identity"></a>
## 时点、单位与结果身份

信息截止2026-09-20，参考价为2026-09-18常规收盘253.71美元，条件价值日2029-12-31，持有期约3.285年（1200/365.25）. 金额单位USD B，股数单位B股；期间分配与原股东额外付款均为0. 四条路径为代表点，类内条件均值未识别. 公司融资及授予进入股数. 研究晚于报价，结果为9月20日信息下的历史条件比较.

<a id="case-amzn-facts"></a>
## 经营事实与假设

历史研究的三期 AWS 收入/OI 依次为2025Q4的35.579/12.465、2026Q1的37.587/14.161、2026Q2的42.232/16.621. Q2 10-Q Note 8可复核H1收入79.819、OI 30.782、设备折旧摊销15.353，以及北美/国际H1 OI 17.39/3.141. 电话会、代表性电力供应、成熟云客户、消费者资料及 IAB、CMA、IEA 材料用于校准关系；由这些材料生成的未来代理仍属分析输入.

收入拆为Core与直接AI需求代理；贡献率64%、固定成本与折旧关系、资产mix及投用批次均为模型假设. 非AWS由六类收入、服务组合、物流单位成本、价格投入及其他净改善形成地区利润. 2026全年为预测，H2资金桥仅计下半年现金流.

1,920MW电力合同约束地区性分期供电，容量最迟于2032年爬坡至全额.[Talen 2025-06-11公告](https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699)，附件99.1第1页. IEA转述同一合同；模型未由它换算全球AWS已投用容量或美元/MW收入.

原始材料入口：Amazon [Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)，Note8 pp22–25；[IAB/PwC FY2025](https://www.iab.com/wp-content/uploads/2026/04/IAB_PwC_Internet_Ad_Revenue_Report_Full_Year_2025_April_2026.pdf) p27及定义/方法pp32、35；[CMA 2025](https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf) §§6.32–6.325；[IEA 2026执行摘要](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)供给和融资小节.

<a id="case-amzn-groups"></a>
## 业务、资源与估值组

定价组为AWS与整合非AWS. 1P、3P、广告、Prime/订阅是收费业务，国际为地域维度，履约、技术和内容含共同资源. 非AWS利润已含广告贡献. 独立定价要求利润、资本、索取权与共同负担可识别.

固定Base倍数21/22，将5B美元EBIT从非AWS移入AWS，集团利润不变，每股价值减少约0.443美元.

<a id="case-amzn-operating"></a>
## 四条经营路径

AWS采用 `OI=贡献率×收入−固定折旧前成本−设备D&A`. 服务器/网络占45%，寿命5.5年，投用75%/25%；数据中心占55%，寿命30年，投用20%/45%/35%；投用首年按半年度折旧. 短窗口折旧核显示为约0.033/0.079/0.097/0.1，既有折旧每年保留90%；这些均为历史研究假设.

下表为2026—2029年度预测，取得资产与现金付款通过资金桥衔接.

| 状态 | 年 | AWS收入 | AWS OI | AWS D&A | AWS取得 | 非AWS收入 | 非AWS OI | 非AWS D&A | 非AWS取得 |
|---|---|---|---|---|---|---|---|---|---|
| Bull | 2026 | 175 | 67.075 | 33 | 192.5 | 662.5 | 43.731 | 24 | 60 |
| Bull | 2027 | 240 | 95.316 | 46.339 | 215 | 748.923 | 55.231 | 27 | 68 |
| Bull | 2028 | 315 | 123.627 | 64.217 | 210 | 839.737 | 68.85 | 30 | 70 |
| Bull | 2029 | 390 | 152.493 | 82.789 | 200 | 931.926 | 84.379 | 33 | 69 |
| Base | 2026 | 175 | 67.075 | 33 | 192.5 | 662.5 | 43.731 | 24 | 60 |
| Base | 2027 | 228 | 83.942 | 45.526 | 190 | 731.133 | 49.639 | 27.5 | 64 |
| Base | 2028 | 283 | 98.39 | 60.769 | 165 | 799.704 | 59.379 | 30.5 | 63 |
| Base | 2029 | 337 | 113.57 | 75.005 | 145 | 866.772 | 70.385 | 33 | 60 |
| Bear | 2026 | 175 | 67.075 | 33 | 192.5 | 662.5 | 43.731 | 24 | 60 |
| Bear | 2027 | 200.008 | 64.697 | 45.526 | 190 | 706.047 | 42.987 | 27.5 | 62 |
| Bear | 2028 | 234.971 | 67.343 | 59.804 | 135.3 | 748.96 | 44.559 | 29.5 | 56 |
| Bear | 2029 | 280.005 | 79.331 | 72.6 | 143.538 | 787.342 | 47.697 | 30.5 | 52 |
| Tail | 2026 | 175 | 67.075 | 33 | 192.5 | 662.5 | 43.731 | 24 | 60 |
| Tail | 2027 | 185 | 49.022 | 45.526 | 190 | 661.693 | 36.025 | 28 | 64 |
| Tail | 2028 | 205 | 40.521 | 59.079 | 113.025 | 676.923 | 31.509 | 30 | 55 |
| Tail | 2029 | 230 | 42.951 | 69.819 | 112.375 | 703.424 | 30.429 | 31 | 50 |

<a id="case-amzn-capital"></a>
## 资金、股份和可行性

2026-06-30起始现金及证券122.988，不含受限现金；借款本金132.995加短借0.325；融资租赁13.451及融资义务9.315另列. 期后已知发债本金约30.693、净现金约30.534分别进账；OpenAI支付21.3一次. 2026全年现金资本支出220，上半年已付96.31，H2为123.69. 2027—2029设备付款时差分别按−10/−12/−8.2进入现金桥.

季度融资警戒线60与终点经营现金保留40是两个独立模型条件. 自6月末以来借款总增加上限200，扣除已知发行约30.693与收购承接债约0.424后，额外增长借款空间约168.883；融资租赁另行滚动. 新债利率取 Bull/Base 6%、Bear 7.5%、Tail 9%，发行费率0.5%，均为模型假设.

SBC费用、现金加回与股权授予分别入账. 6月末普通股10,783M、outstanding RSU244.4M，模型合计11,027.4M作为fully-awarded规划代理；公司披露普通股加全部outstanding awards约11.0B股，EPS另取期内加权平均股数. 已计RSU归属不增加该代理. Tail到达借款上限后，按25美元假设发行21.235B，增加约0.849B股；该融资可得性影响现金及稀释路径.

表中“融资前现金”指本季度新增融资前、但已包含以前季度已完成融资的现金；季度表只给端点，季内最低现金未识别.

### Bull：14个季度资金摘要

| 季度 | 融资前现金 | 季末现金 | 现金资本支出 | 新增长借款 | 股权募资 |
|---|---|---|---|---|---|
| 2026Q3 | 111.566 | 111.566 | 61.845 | 0 | 0 |
| 2026Q4 | 111.974 | 111.974 | 61.845 | 0 | 0 |
| 2027Q1 | 49.33 | 60 | 81.48 | 10.805 | 0 |
| 2027Q2 | 32.845 | 60 | 69.84 | 27.499 | 0 |
| 2027Q3 | 41.671 | 60 | 69.84 | 18.561 | 0 |
| 2027Q4 | 58.11 | 60 | 69.84 | 1.914 | 0 |
| 2028Q1 | 7.688 | 60 | 81.2 | 52.974 | 0 |
| 2028Q2 | 49.361 | 60 | 69.6 | 10.774 | 0 |
| 2028Q3 | 53.066 | 60 | 69.6 | 7.022 | 0 |
| 2028Q4 | 71.61 | 71.61 | 69.6 | 0 | 0 |
| 2029Q1 | 35.835 | 60 | 77.056 | 24.471 | 0 |
| 2029Q2 | 66.368 | 66.368 | 66.048 | 0 | 0 |
| 2029Q3 | 77.337 | 77.337 | 66.048 | 0 | 0 |
| 2029Q4 | 109.073 | 109.073 | 66.048 | 0 | 0 |

### Base：14个季度资金摘要

| 季度 | 融资前现金 | 季末现金 | 现金资本支出 | 新增长借款 | 股权募资 |
|---|---|---|---|---|---|
| 2026Q3 | 111.566 | 111.566 | 61.845 | 0 | 0 |
| 2026Q4 | 111.974 | 111.974 | 61.845 | 0 | 0 |
| 2027Q1 | 53.351 | 60 | 73.36 | 6.734 | 0 |
| 2027Q2 | 35.594 | 60 | 62.88 | 24.715 | 0 |
| 2027Q3 | 44.29 | 60 | 62.88 | 15.909 | 0 |
| 2027Q4 | 60.249 | 60.249 | 62.88 | 0 | 0 |
| 2028Q1 | 15.884 | 60 | 66.64 | 44.674 | 0 |
| 2028Q2 | 54.974 | 60 | 57.12 | 5.089 | 0 |
| 2028Q3 | 58.388 | 60 | 57.12 | 1.632 | 0 |
| 2028Q4 | 75.902 | 75.902 | 57.12 | 0 | 0 |
| 2029Q1 | 46.567 | 60 | 59.136 | 13.603 | 0 |
| 2029Q2 | 69.799 | 69.799 | 50.688 | 0 | 0 |
| 2029Q3 | 83.621 | 83.621 | 50.688 | 0 | 0 |
| 2029Q4 | 116.405 | 116.405 | 50.688 | 0 | 0 |

### Bear：14个季度资金摘要

| 季度 | 融资前现金 | 季末现金 | 现金资本支出 | 新增长借款 | 股权募资 |
|---|---|---|---|---|---|
| 2026Q3 | 111.566 | 111.566 | 61.845 | 0 | 0 |
| 2026Q4 | 111.974 | 111.974 | 61.845 | 0 | 0 |
| 2027Q1 | 51.454 | 60 | 72.8 | 8.67 | 0 |
| 2027Q2 | 33.297 | 60 | 62.4 | 27.092 | 0 |
| 2027Q3 | 41.596 | 60 | 62.4 | 18.672 | 0 |
| 2027Q4 | 56.668 | 60 | 62.4 | 3.381 | 0 |
| 2028Q1 | 16.285 | 60 | 56.364 | 44.353 | 0 |
| 2028Q2 | 53.517 | 60 | 48.312 | 6.577 | 0 |
| 2028Q3 | 56.406 | 60 | 48.312 | 3.646 | 0 |
| 2028Q4 | 72.426 | 72.426 | 48.312 | 0 | 0 |
| 2029Q1 | 32.128 | 60 | 56.487 | 28.279 | 0 |
| 2029Q2 | 57.488 | 60 | 48.417 | 2.549 | 0 |
| 2029Q3 | 60.742 | 60.742 | 48.417 | 0 | 0 |
| 2029Q4 | 78.469 | 78.469 | 48.417 | 0 | 0 |

### Tail：14个季度资金摘要

| 季度 | 融资前现金 | 季末现金 | 现金资本支出 | 新增长借款 | 股权募资 |
|---|---|---|---|---|---|
| 2026Q3 | 111.566 | 111.566 | 61.845 | 0 | 0 |
| 2026Q4 | 111.974 | 111.974 | 61.845 | 0 | 0 |
| 2027Q1 | 45.553 | 60 | 73.36 | 14.686 | 0 |
| 2027Q2 | 27.087 | 60 | 62.88 | 33.457 | 0 |
| 2027Q3 | 34.92 | 60 | 62.88 | 25.495 | 0 |
| 2027Q4 | 49.103 | 60 | 62.88 | 11.077 | 0 |
| 2028Q1 | 15.258 | 60 | 49.847 | 45.481 | 0 |
| 2028Q2 | 50.966 | 60 | 42.726 | 9.183 | 0 |
| 2028Q3 | 53.371 | 60 | 42.726 | 6.739 | 0 |
| 2028Q4 | 68.085 | 68.085 | 42.726 | 0 | 0 |
| 2029Q1 | 26.01 | 60 | 47.201 | 22.766 | 11.652 |
| 2029Q2 | 53.862 | 60 | 40.458 | 0 | 6.169 |
| 2029Q3 | 56.604 | 60 | 40.458 | 0 | 3.413 |
| 2029Q4 | 71.879 | 71.879 | 40.458 | 0 | 0 |


<a id="case-amzn-pricing"></a>
## 条件定价与同行身份

2029-12-31条件EV/FY2029 EBIT：AWS四状态26/21/16/9，非AWS26/22/17/12；低倍数替代分别为22/17/12/7和21/17/13/9. 倍数对应该研究对业务状态与资本转化的判断.

同行价格观察日为2026-09-18，历史取数日为2026-09-20. Alphabet和Microsoft盈利截止2026-06-30，Walmart截止2026-07-31. Walmart `TTM=29.825+16.876−14.421=32.28`，并由官方演示 slide 26 交叉确认；以冻结普通股市值846.770和官方组件重建 EV 899.045，对应约27.851倍. NCI 6.561采用账面代理，供应商债务差额1.337尚未对平.

Alphabet `TTM=129.039+80.466−61.877=147.628`；从冻结 vendor EV 4153.191剔除经营租赁18.037、加入存托股份清算额代理19.250，并对非上市证券账面0或131.461设置扣除边界，得到约27.25—28.14倍. 该数值只作 Alphabet 全集团口径参照，不作为 GCP 独立倍数. Microsoft只作FY2026经营利润155.237、GAAP/调整EPS 17.95/17.28的集团口径对照.

原件：Alphabet [FY2025公告p5](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm)及[Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm) p5、Notes 3/4/6/11；Walmart [Q2 FY27公告pp8–9](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm)和[演示slide26](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm)；[Microsoft FY2026业绩](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast). 本节市场EV/市值继续使用2026-09-20历史研究保存的观察值.

<a id="case-amzn-equity"></a>
## 同时点的普通股桥

加回现金取超过40的部分，借款按期末有息余额计. 非经营投资按证券权利计价：Base毛值261.195、税基代理90、税率24.5%，税后约219.252. 本桥其他权利输入为0.

| 状态 | AWS EV | 非AWS EV | 现金总额 | 可加入现金 | 借款 | 融资权利 | 税后投资 | 普通股值 | 股数 | 每股值 |
|---|---|---|---|---|---|---|---|---|---|---|
| Bull | 3964.812 | 2193.853 | 109.073 | 69.073 | 318.456 | 27.055 | 342.925 | 6225.152 | 11.187 | 556.443 |
| Base | 2384.967 | 1548.461 | 116.405 | 76.405 | 276.792 | 27.055 | 219.252 | 3925.238 | 11.297 | 347.446 |
| Bear | 1269.296 | 810.848 | 78.469 | 38.469 | 307.656 | 27.055 | 166.54 | 1950.443 | 11.447 | 170.383 |
| Tail | 386.558 | 365.148 | 71.879 | 31.879 | 333.32 | 27.055 | 73.5 | 496.711 | 12.552 | 39.573 |

<a id="case-amzn-probabilities"></a>
## 公司状态与概率证据

S/N/W/X对应强、正常、弱、严重受损. 根据采用、交付、单位经济、资本转化与权利证据判断两组业务，再依下表归类. 类别先确定，代表点用于计算.

| AWS / 非AWS | S | N | W | X |
|---|---|---|---|---|
| S | Bull | Bull | Base | Bear |
| N | Bull | Base | Base | Bear |
| W | Base | Bear | Bear | Tail |
| X | Bear | Bear | Tail | Tail |

历史主观权重证据链：

| 阶段 | Bull/Base/Bear/Tail | 依据 |
|---|---|---|
| 机制起点 | 24/46/24/6 | 两组大型正利润经营，资本扩张阶段；成功与失配先作粗对称判断 |
| 资本与物理兑现 | 20/45/28/7 | 前置建设、供电与使用时滞，提高失配权重 |
| 需求与存量留存 | 29/43/23/5 | 最近三期需求加速及迁移摩擦支持需求持续；并不保证计费量 |
| 恢复及混合状态 | 31/44/20/5 | 容纳修复、创新和业务不同时好坏的共同状态；采用的粗分布 |

四套概率分布：

| 标识 | Bull | Base | Bear | Tail |
|---|---|---|---|---|
| adopted | 0.31 | 0.44 | 0.2 | 0.05 |
| capital_pressure | 0.2 | 0.42 | 0.3 | 0.08 |
| platform_durable | 0.37 | 0.43 | 0.16 | 0.04 |
| mixed_retail_pressure | 0.27 | 0.41 | 0.26 | 0.06 |

<a id="case-amzn-alternatives"></a>
## 具名经营替代

前四项沿用Base资本规则，重算替代经营路径的现金，分别套用固定Base倍数与对应状态倍数. AI延后项仅保存Base定价结果.

| 替代 | 固定Base倍数 | 相应组状态倍数 | 现金 | 借款 | 最低融资前现金 |
|---|---|---|---|---|---|
| AWS较弱、非AWS Base | 278.411 | 243.3 | 87.44 | 308.732 | 16.292 |
| 非AWS较弱、AWS Base | 300.376 | 279.267 | 101.778 | 294.803 | 13.887 |
| AWS强、非AWS弱 | 369.041 | 415.422 | 96.423 | 331.093 | 7.685 |
| AWS弱、非AWS强 | 306.414 | 301.18 | 91.968 | 304.766 | 16.412 |
| AI延后并连带Core；原资本计划保留 | 294.517 | 未生成 | 94.58 | 327.673 | 9.75 |

AI延后路径将2027年Core设为148×1.12，此后沿原增速；AI收入27/35/58/90. 资产取得计划不变，资金随经营结果重算.

<a id="case-amzn-distributions"></a>
## 四种定价与四套概率：16组既有分布

4套定价与4套状态权重产生16组结果，共享既有经营及融资路径. 期望终财富为加权代表点近似，亏损权重统计低于参考价253.71的代表点. Tail点损失约84.402%；类内分布未识别，四点权重无法直接确定全局亏损概率或ES.

| 定价 | 权重 | 期望终财富 | 期望终财富年化 | 加权路径年化 | 四点亏损权重 |
|---|---|---|---|---|---|
| representative | adopted | 361.429 | 11.373% | 8.348% | 25% |
| representative | capital_pressure | 311.497 | 6.445% | 2.739% | 38% |
| representative | platform_durable | 384.13 | 13.457% | 10.756% | 20% |
| representative | mixed_retail_pressure | 339.367 | 9.258% | 5.85% | 32% |
| aws_low | adopted | 320.948 | 7.418% | 4.26% | 25% |
| aws_low | capital_pressure | 274.84 | 2.465% | -1.397% | 38% |
| aws_low | platform_durable | 341.957 | 9.511% | 6.692% | 20% |
| aws_low | mixed_retail_pressure | 300.541 | 5.291% | 1.729% | 32% |
| retail_low | adopted | 332.335 | 8.564% | 5.434% | 25% |
| retail_low | capital_pressure | 285.289 | 3.635% | -0.192% | 38% |
| retail_low | platform_durable | 353.824 | 10.654% | 7.856% | 20% |
| retail_low | mixed_retail_pressure | 311.643 | 6.46% | 2.938% | 32% |
| both_low | adopted | 291.854 | 4.355% | 1.051% | 25% |
| both_low | capital_pressure | 248.633 | -0.613% | -4.651% | 38% |
| both_low | platform_durable | 311.651 | 6.461% | 3.507% | 20% |
| both_low | mixed_retail_pressure | 272.817 | 2.235% | -1.49% | 32% |

常利率4.83%再投资对应终财富约296.238. 固定参考价及Base/Tail权重，Bull向Bear转移约16.886个百分点时，期望终财富等于该比较；转移约27.902个百分点时等于本金.

该版本尚待识别AWS可计费容量与利用率、AI拆分、私企证券税基、未来融资可得性、季内资金及类内概率.

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): Amazon 历史研究的事实、分析代理、四条未来路径、5 项替代、4 套权重和 16 组已算分布. 价格使用固定研究时点报价；各情景数值是代表点.
- [Cloud Infrastructure Services: Final Decision Report](https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf): 历史英国技术迁移/multi-cloud摩擦及缓解并存；不从这一单元推全球AWS增长或现行费用政策.
- [Alphabet Q4 and FY2025 earnings exhibit](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm): 全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成.
- [Internet Advertising Revenue Report, Full-Year2025](https://www.iab.com/wp-content/uploads/2026/04/IAB_PwC_Internet_Ad_Revenue_Report_Full_Year_2025_April_2026.pdf): 美国 commerce media 收入 63.4 B 美元，报告增速 18%，附测量与增量回报的讨论. 统计范围为美国市场.
- [Key Questions on Energy and AI — Executive summary](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary): AI资本链中的供应/设备/电网与融资限制；采用行业机制，不推AWS具体容量或收益率.
- [Microsoft FY2026 Q4/FY results](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast): 集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数.
- [Talen 8-K, Exhibit 99.1: nuclear energy relationship with Amazon](https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699): 公告中的1,920MW为满额供电计划，预计爬坡最迟2032达到；供电数量不等于AWS当期IT容量或收费收入.
- [Walmart FY2027 Q2 earnings release](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm): H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录.
- [Walmart FY2027 Q2 presentation](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm): ROI reconciliation列示TTM营业利润32.280B美元、对照期29.825B美元；调整后ROI分子另为50.285B美元，组成与营业利润不同.
- [Amazon · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对自营零售、第三方卖家服务与 AWS 的业务口径，以及存货、设备和现金流的合并披露. 案例的解释由作者根据研究整理.
- [Alphabet · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对 Google Services、Google Cloud、技术基础设施与设备用途. 报告主体为 Alphabet；GOOG 与 GOOGL 对应不同股份类别.

## Content relations
```json
[
  {
    "relation": "analyzes",
    "to": "zh-amzn",
    "reason": "公司身份与这一日期的独立研究记录分别保留；不覆盖旧教学片段.",
    "cutoff": "2026-09-20",
    "period": "2025Q4–2026Q2 facts and dated subsequent disclosures; conditional paths 2026H2–2029",
    "from": "zh-amzn-research-20260920"
  }
]
```

## Related entries
