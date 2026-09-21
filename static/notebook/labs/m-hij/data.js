/* Generated from byte-frozen source; do not edit. */
window.MHIJ_DATA = {
  "schema": "notebook-markets-m-hij-final-shared-inputs-v1",
  "prepared_on": "2026-09-21",
  "task_id": "notebook-markets-20260921",
  "status": "ready_for_Lead_freeze; not yet a published experiment or entry",
  "scope": [
    "M24",
    "M25",
    "M26",
    "M27",
    "M28",
    "M29"
  ],
  "identity_policy": "Seven unique experiment IDs only. Current rules, issuer statements, official examples, research models and teaching assumptions remain separately labelled.",
  "revision_adoption": {
    "MHIJ-REV-01": "M28 general five-stage flow and PvP three-stage flow separated; teaching PvP uses only the three-stage flow.",
    "MHIJ-REV-02": "M26 isolated/cross/portfolio trigger/display/asset-mode distinctions fixed; M25 collateral eligibility constrained by compatible margin mode.",
    "MHIJ-REV-03": "M26 Insurance+ADL moved into default required readings; M28 PvP pp51–52 explicit; M29 Pool and SwapMath URLs separate required units.",
    "MHIJ-REV-04": "M24 full nested clamp and min cap, post-limit hourly frequency rule, hourly interest recalculation, ±5-second qualification uncertainty and sign conventions encoded.",
    "MHIJ-REV-05": "M29 price-limit stop separated from tick crossing with L update; no eighth experiment; separate L100 fee-allocation example distinguished from default L1000 position."
  },
  "source_unit_registry": {
    "MOD-PERP-PAPER": {
      "title": "Perpetual Futures Pricing",
      "authors": [
        "Damien Ackerer",
        "Julien Hugonnier",
        "Urban Jermann"
      ],
      "version": "arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03",
      "url": "https://arxiv.org/pdf/2310.11771v2",
      "adopted_units": [
        "Discrete-time §2 model: currencies a/b, cash accounts, Qa/Qb",
        "§3 one-period linear perpetual cash flow and finite recursive restriction",
        "§3 no-bubble/integrability only as named boundary; no proof adopted",
        "§4 opening/inverse cashflow and numeraire orientation for M25 optional branch"
      ],
      "limits": [
        "M24 uses the one-period/finite recursion actually read; no infinite-horizon theorem proof is taught as established.",
        "Do not copy the known p12 prose/sign inconsistency for contango/backwardation.",
        "Paper inverse-long sign/orientation must be mapped before comparison to exchange BTCUSD long."
      ]
    },
    "MOD-BYBIT-FUNDING": {
      "title": "Introduction to Funding Rate",
      "version": "updated 2026-05-22 13:52:11",
      "url": "https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate",
      "adopted_units": [
        "Funding Rate Calculation",
        "Interest Rate",
        "Average Premium Index and weighted sampling",
        "Funding Rate Upper and Lower Limit",
        "frequency-change notes"
      ],
      "limits": [
        "8 hours is the selected teaching branch, not a universal interval.",
        "Current symbol limits are time-specific and can change."
      ]
    },
    "PI-BYBIT-FEE": {
      "title": "Funding Fee Calculation",
      "version": "updated 2026-05-12 12:38:20",
      "url": "https://www.bybit.com/en/help-center/article/Funding-fee-calculation",
      "adopted_units": [
        "eligibility at funding timestamp",
        "positive/negative funding direction",
        "deduction from balance/isolated initial margin",
        "USDT and inverse fee formulas/examples",
        "±5-second settlement-window uncertainty"
      ],
      "limits": [
        "Opening/closing within ±5 seconds of funding time does not guarantee inclusion or exclusion."
      ]
    },
    "MOD-BYBIT-PNL": {
      "title": "FAQ — Profit and Loss Calculation",
      "version": "updated 2026-08-12 12:24:42",
      "url": "https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation",
      "adopted_units": [
        "linear/inverse P&L formulas; displayed prices; fees/funding; leverage/ROI identity"
      ]
    },
    "MOD-BYBIT-INVERSE": {
      "title": "FAQ — Inverse Perpetual and Expiry Contracts",
      "version": "updated 2026-08-05 14:29:08",
      "url": "https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ",
      "adopted_units": [
        "USD contract quantity; BTC settlement/P&L; margin modes; position value/order cost"
      ]
    },
    "MOD-BYBIT-LIQUIDATION": {
      "title": "Trading Rules: Liquidation Process (Unified Trading Account)",
      "version": "updated 2026-08-07 02:22:50",
      "url": "https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process",
      "adopted_units": [
        "complete Isolated Margin tab; USDT and inverse formulas/examples; cancel/partial-close/takeover"
      ]
    },
    "MHIJ-BYBIT-MARK": {
      "title": "Mark Price (Perpetual and Expiry Contracts)",
      "version": "updated 2026-09-04 10:32:20",
      "url": "https://www.bybit.com/en/help-center/article/Mark-Price-Calculation-Perpetual-Expiry-Contracts",
      "adopted_units": [
        "normal perpetual median structure; index+basis; last; fallback boundary"
      ]
    },
    "MHIJ-BYBIT-INDEX": {
      "title": "Index Price Calculation",
      "version": "updated 2026-06-19",
      "url": "https://www.bybit.com/en/help-center/article/Index-Price-Calculation",
      "adopted_units": [
        "normal index construction and external-reference role"
      ],
      "limits": [
        "Do not implement conflicting exceptional protection/depth examples."
      ]
    },
    "MHIJ-BYBIT-MAINTENANCE": {
      "title": "Maintenance Margin",
      "version": "updated 2026-04-16",
      "url": "https://www.bybit.com/en/help-center/article/Maintenance-Margin-USDT-Contract",
      "adopted_units": [
        "tiered maintenance requirement; MM deduction; illustrative tier example"
      ]
    },
    "MHIJ-BYBIT-COLLATERAL": {
      "title": "Understanding Collateral Value Ratios in Unified Trading Account",
      "version": "updated 2026-03-30",
      "url": "https://www.bybit.com/en/help-center/article/Assets-Collateral-Value-Ratio-List-UTA",
      "adopted_units": [
        "asset amount × USD index × eligible ratio; no-position/no-order/no-borrow teaching branch"
      ]
    },
    "MHIJ-BYBIT-MODES": {
      "title": "Differences Between the Margin Modes Under the Unified Trading Account",
      "version": "updated 2026-08-04 13:44:59",
      "url": "https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account",
      "adopted_units": [
        "complete three-mode comparison table",
        "Asset Mode",
        "Liquidation Trigger Criteria",
        "Liquidation Price Display",
        "switching criteria"
      ]
    },
    "MHIJ-BYBIT-INSURANCE": {
      "title": "Insurance Fund",
      "version": "updated 2026-03-24 02:50:27",
      "url": "https://www.bybit.com/en/help-center/article/Insurance-Fund",
      "adopted_units": [
        "full mechanism and bankruptcy-vs-execution example"
      ]
    },
    "MHIJ-BYBIT-ADL": {
      "title": "Auto-Deleveraging (ADL) Mechanism",
      "version": "updated 2026-04-13 03:29:06",
      "url": "https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL",
      "adopted_units": [
        "definition",
        "Trigger & Stop Condition 1",
        "Trigger & Stop Condition 2",
        "How does ADL work?"
      ],
      "limits": [
        "Detailed ranking formulas/examples are not required for M26 default teaching."
      ]
    },
    "MOD-CIRCLE-USDC": {
      "title": "USDC Terms",
      "version": "non-EEA; updated 2025-12-12",
      "url": "https://www.circle.com/legal/usdc-terms",
      "adopted_units": [
        "Preamble; complete §§1–2 and §§13–19"
      ]
    },
    "MHIJ-CIRCLE-20230312": {
      "title": "$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes",
      "version": "page 2023-03-13; dateline 2023-03-12; reserve composition as of 2023-03-11",
      "url": "https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes",
      "adopted_units": [
        "full press-release body"
      ],
      "limits": [
        "issuer statement, not independent audit or price tape"
      ]
    },
    "MHIJ-FRANKLIN-20260801": {
      "title": "Franklin OnChain U.S. Government Money Fund — Prospectus",
      "version": "2026-08-01",
      "url": "https://www.franklintempleton.com/forms-literature/download-preview/9001-P",
      "adopted_units": [
        "pp5–7; pp14–19; pp31–33; pp36–39"
      ],
      "limits": [
        "Do not adopt a public-exchange-listing conclusion from the p15/p39 wording conflict."
      ]
    },
    "MHIJ-BIS-AGORA-2026": {
      "title": "Project Agorá: A shared programmable platform for wholesale cross-border payments",
      "version": "2026-05-27",
      "url": "https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments.pdf",
      "adopted_units": [
        "general end-to-end workflow printed pp19–23",
        "lock/PvP printed pp50–53, especially PvP three-stage pp51–52",
        "legal nature printed pp59–61",
        "settlement finality printed pp65–66",
        "limitations printed pp82–83"
      ]
    },
    "MOD-UNISWAP-V3": {
      "title": "Uniswap v3 Core",
      "version": "March 2021",
      "url": "https://app.uniswap.org/whitepaper-v3.pdf",
      "adopted_units": [
        "§§2–3.2 and §§6.1–6.3"
      ],
      "limits": [
        "Eq. (6.9) is not used as the final per-liquidity fee-growth implementation without the tagged-code correction."
      ]
    },
    "MHIJ-UNI-V3-POOL": {
      "title": "Uniswap v3-core v1.0.0 — UniswapV3Pool.swap",
      "version": "git tag v1.0.0",
      "url": "https://raw.githubusercontent.com/Uniswap/v3-core/v1.0.0/contracts/UniswapV3Pool.sol",
      "adopted_units": [
        "swap lines 596–788: price limit, next tick, protocol fee, feeGrowth/L, tick crossing and liquidity update"
      ]
    },
    "MHIJ-UNI-V3-SWAPMATH": {
      "title": "Uniswap v3-core v1.0.0 — SwapMath.sol",
      "version": "git tag v1.0.0",
      "url": "https://raw.githubusercontent.com/Uniswap/v3-core/v1.0.0/contracts/libraries/SwapMath.sol",
      "adopted_units": [
        "complete file: exact-input fee split, target price, partial input/output"
      ]
    },
    "MHIJ-UNI-CURRENT": {
      "title": "Concentrated Liquidity",
      "version": "current docs retrieved 2026-09-21",
      "url": "https://developers.uniswap.org/docs/get-started/concepts/liquidity-providers/concentrated-liquidity",
      "adopted_units": [
        "How it works; Active liquidity; Ticks"
      ]
    }
  },
  "experiment_order": [
    "EXP-MHIJ-M24-FUNDING-01",
    "EXP-MHIJ-M25-CURRENCY-01",
    "EXP-MHIJ-M26-LIQUIDATION-01",
    "EXP-MHIJ-M26-COLLATERAL-01",
    "EXP-MHIJ-M27-REDEMPTION-01",
    "EXP-MHIJ-M28-SETTLEMENT-01",
    "EXP-MHIJ-M29-AMM-SWAP-01"
  ],
  "experiments": {
    "EXP-MHIJ-M24-FUNDING-01": {
      "owner": "M24",
      "unit_contract": {
        "rates": "decimal fractions per funding event",
        "position_linear": "BTC",
        "mark_linear": "USDT/BTC",
        "fee_linear": "USDT",
        "position_inverse": "USD contract quantity",
        "mark_inverse": "USD/BTC",
        "fee_inverse": "BTC"
      },
      "identity": "Current Bybit funding formulas/rules plus explicit teaching premium aggregates and teaching IMR/MMR; no historical funding path or live symbol parameters.",
      "source_ids": [
        "MOD-PERP-PAPER",
        "MOD-BYBIT-FUNDING",
        "PI-BYBIT-FEE"
      ],
      "model_scope": {
        "paper_formula": "One-period finite recursion only: (1+kappa_t) f_t = E_t^{Q_a}[f_{t+1}] + (kappa_t-iota_t) x_t.",
        "infinite_horizon": "Boundary note only: dropping the terminal remainder requires named no-bubble and integrability conditions; proof is not part of M24."
      },
      "inputs": {
        "selected_interval_hours": 8,
        "daily_interest_fraction": 0.0003,
        "inner_clamp_absolute": 0.0005,
        "normal_limit_coefficient": 0.75,
        "teaching_IMR": 0.01,
        "teaching_MMR": 0.005,
        "premium_aggregates": [
          0.0002,
          0.001,
          -0.001,
          0.01
        ],
        "official_linear_example": {
          "quantity_btc": 10,
          "mark_usdt_per_btc": 8000,
          "rate": 0.0001
        },
        "official_inverse_example": {
          "quantity_usd": 10000,
          "mark_usd_per_btc": 8000,
          "rate": 0.0001
        }
      },
      "formulas": {
        "interest_per_event": "I = 0.0003 / (24 / interval_hours)",
        "inner_adjustment": "A = clamp(I - P, -0.0005, +0.0005)",
        "normal_limit": "L = min(coefficient * (IMR - MMR), MMR)",
        "funding_rate": "F = clamp(P + A, -L, +L)",
        "linear_fee": "fee_USDT = quantity_BTC * mark_USDT_per_BTC * F",
        "inverse_fee": "fee_BTC = quantity_USD / mark_USD_per_BTC * F"
      },
      "default_results": {
        "interest_8h": 0.0001,
        "normal_limit": 0.00375,
        "funding_by_premium": [
          {
            "premium": 0.0002,
            "funding": 0.0001,
            "hits_limit": false
          },
          {
            "premium": 0.001,
            "funding": 0.0005,
            "hits_limit": false
          },
          {
            "premium": -0.001,
            "funding": -0.0005,
            "hits_limit": false
          },
          {
            "premium": 0.01,
            "funding": 0.00375,
            "hits_limit": true
          }
        ],
        "linear_positive_rate_long_pays_usdt": 8,
        "inverse_positive_rate_long_pays_btc": 0.000125
      },
      "branch_boundaries": {
        "parameter_domain": "IMR >= MMR > 0; normal limit must use the full min expression.",
        "limit_hit": "If the funding rate reaches the preset upper/lower limit at settlement, subsequent settlement frequency switches to hourly. The current capped 8h result remains valid only for that event.",
        "hourly_interest_if_same_daily_interest": 1.25e-05,
        "next_event": "Requires a new premium path/inputs and then-current limits; do not reuse the old 8h funding value.",
        "eligibility": "Holding at the actual funding time controls payment/receipt, but opening/closing within ±5 seconds does not guarantee inclusion or exclusion.",
        "signs": "Positive funding: long cash outflow, short inflow. Trade-history fee signs are a separate display convention and must be labelled.",
        "no_annualization": true
      }
    },
    "EXP-MHIJ-M25-CURRENCY-01": {
      "owner": "M25",
      "unit_contract": {
        "linear_quote": "USDT/BTC",
        "linear_quantity": "BTC",
        "linear_settlement": "USDT",
        "inverse_quote": "USD/BTC",
        "inverse_quantity": "USD",
        "inverse_settlement": "BTC",
        "report_currency": "USD"
      },
      "identity": "Teaching prices/balances under current linear/inverse contract formula conventions; no live quotes, funding or fees.",
      "source_ids": [
        "MOD-BYBIT-PNL",
        "MOD-BYBIT-INVERSE",
        "MHIJ-BYBIT-MODES"
      ],
      "inputs": {
        "entry_price": 50000,
        "exit_prices": [
          40000,
          60000
        ],
        "linear_long_btc": 0.1,
        "inverse_long_usd": 5000,
        "linear_initial_usdt": 5000,
        "inverse_initial_btc": 0.1,
        "usdt_usd_conversion": 1,
        "terminal_btcusd_report_price_equals_contract_exit": true,
        "funding_and_fees": 0
      },
      "formulas": {
        "linear_pnl": "Pi_linear_USDT = q_BTC * (F1 - F0)",
        "inverse_pnl": "Pi_inverse_BTC = Q_USD * (1/F0 - 1/F1)",
        "inverse_report_pnl": "Pi_inverse_USD = Pi_inverse_BTC * report_BTCUSD",
        "inverse_wallet": "wallet_USD = (initial_BTC + Pi_inverse_BTC) * report_BTCUSD"
      },
      "default_results": [
        {
          "exit": 40000,
          "linear_pnl_usdt": -1000,
          "inverse_pnl_btc": -0.025,
          "inverse_pnl_usd": -1000,
          "linear_wallet_usd": 4000,
          "inverse_wallet_usd": 3000
        },
        {
          "exit": 60000,
          "linear_pnl_usdt": 1000,
          "inverse_pnl_btc": 0.016666666666666666,
          "inverse_pnl_usd": 1000,
          "linear_wallet_usd": 6000,
          "inverse_wallet_usd": 7000
        }
      ],
      "branch_boundaries": {
        "reporting": "Equality of report-currency derivative P&L depends on the stated conversion timing/rate; wallet wealth remains different because collateral is different.",
        "leverage": "Fixed contract quantity price P&L is not multiplied by leverage; leverage changes margin/trigger conditions.",
        "margin_mode_compatibility": {
          "isolated": "Single Asset Mode; only the settlement asset can be used for the corresponding contract.",
          "cross": "Multiple-Assets Mode may recognize eligible collateral after USD conversion.",
          "portfolio": "Multiple-Assets Mode may recognize eligible collateral, subject to portfolio risk rules."
        },
        "collateral_selector": "M25 default is a wallet/reporting comparison, not a platform collateral-eligibility simulator. If collateral eligibility is shown, it must be constrained by the selected compatible margin mode."
      }
    },
    "EXP-MHIJ-M26-LIQUIDATION-01": {
      "owner": "M26",
      "unit_contract": {
        "linear_prices": "USDT/BTC",
        "linear_cash": "USDT",
        "inverse_prices": "USD/BTC",
        "inverse_margin": "BTC"
      },
      "identity": "Bybit official isolated-margin teaching examples plus a synthetic simultaneous mark/last branch and a small teaching insurance ledger; not a customer account or live risk tier.",
      "source_ids": [
        "MOD-BYBIT-LIQUIDATION",
        "MHIJ-BYBIT-MARK",
        "MHIJ-BYBIT-INDEX",
        "MHIJ-BYBIT-MODES",
        "MHIJ-BYBIT-INSURANCE",
        "MHIJ-BYBIT-ADL"
      ],
      "inputs": {
        "mainline_currency": "USDT linear",
        "official_linear": {
          "quantity_btc": 1,
          "entry": 40000,
          "leverage": 50,
          "extra_margin_usdt": 3000,
          "MMR": 0.005,
          "taker_fee_rate": 0.00055,
          "MM_deduction": 0
        },
        "official_inverse_branch": {
          "quantity_usd": 30000,
          "entry": 60000,
          "leverage": 10,
          "extra_margin_btc": 0,
          "MMR": 0.005,
          "taker_fee_rate": 0.00055,
          "MM_deduction": 0,
          "branch": "complete selected reading branch, not the first-time mainline calculation"
        },
        "synthetic_mark": {
          "index": 36350,
          "last_funding_rate": 0.0001,
          "time_until_funding_hours": 4,
          "funding_interval_denominator_hours": 8,
          "average_basis": 30,
          "last": 36500,
          "last_price_stop_trigger": 36400
        },
        "insurance_teaching": {
          "quantity_btc": 1,
          "liquidation_trigger": 65000,
          "bankruptcy": 64000,
          "actual_exit_prices": [
            64980,
            63950
          ]
        }
      },
      "formulas": {
        "mark_price1": "index * (1 + last_funding_rate * time_until_funding / interval_denominator)",
        "mark_price2": "index + average_basis",
        "mark_normal": "median(price1, price2, last)",
        "insurance_delta_long": "(actual_execution - bankruptcy_price) * quantity_BTC"
      },
      "default_results": {
        "linear": {
          "fee_to_close": 21.56,
          "initial_margin_before_extra": 821.56,
          "maintenance_at_entry": 221.56,
          "liquidation_price": 36380.2503437192
        },
        "inverse": {
          "position_value_btc": 0.5,
          "fee_to_close_btc": 0.0002475,
          "initial_margin_btc": 0.0502475,
          "maintenance_btc": 0.0027475,
          "liquidation_price": 66333.33333333333
        },
        "synthetic_mark": {
          "price1": 36351.8175,
          "price2": 36380,
          "last": 36500,
          "mark": 36380,
          "isolated_long_liquidation_triggered": true,
          "last_stop_triggered": false
        },
        "insurance_fund_delta_usdt": [
          980,
          -50
        ]
      },
      "margin_mode_contract": {
        "isolated": {
          "trigger": "Mark Price reaches the position liquidation price",
          "liquidation_price_display": "actual position trigger price",
          "asset_mode": "single settlement asset"
        },
        "cross": {
          "trigger": "Account Maintenance Margin Rate reaches 100%",
          "liquidation_price_display": "estimate/reference only",
          "asset_mode": "multiple collateral assets after eligible conversion"
        },
        "portfolio": {
          "trigger": "Account Maintenance Margin Rate reaches 100%",
          "liquidation_price_display": "not applicable",
          "asset_mode": "multiple collateral assets; portfolio risk engine not reconstructed"
        }
      },
      "loss_allocation_required_branch": {
        "insurance": "Customer position is settled at bankruptcy price while venue execution can differ; better/worse execution changes the insurance fund.",
        "adl": [
          "Condition 1: 8-hour insurance-fund drawdown trigger/stop thresholds may activate ADL before a zero fund balance.",
          "Condition 2: combined balance of independent insurance funds at/below zero can trigger ADL.",
          "How ADL works: opposing positions are deleveraged/closed at the relevant bankruptcy price."
        ],
        "agent_reading": "Insurance mechanism/example and ADL Trigger & Stop Conditions 1–2 plus How does ADL work are required for the default M26 lesson."
      },
      "branch_boundaries": {
        "mainline": "Teach the linear USDT isolated example first. Keep the inverse official example as a complete selected branch/static analysis.",
        "no_execution_at_trigger": "Mark-price trigger is not the final market execution price.",
        "cross_portfolio": "Do not reuse isolated liquidation-price formulas as account triggers.",
        "adl_ranking": "Detailed ranking formula is not required for the default branch."
      }
    },
    "EXP-MHIJ-M26-COLLATERAL-01": {
      "owner": "M26",
      "unit_contract": {
        "position_value": "USDT",
        "margin": "USDT",
        "collateral_asset": "BTC",
        "eligible_value": "USD"
      },
      "identity": "Official tier mechanics plus a no-position/no-order/no-borrow teaching collateral haircut; the two examples are not one real account.",
      "source_ids": [
        "MHIJ-BYBIT-MAINTENANCE",
        "MHIJ-BYBIT-COLLATERAL",
        "MHIJ-BYBIT-MODES"
      ],
      "inputs": {
        "official_tier_example": {
          "tier_upper_values": [
            1000,
            2000,
            3000,
            4000,
            5000
          ],
          "marginal_rates": [
            0.02,
            0.025,
            0.03,
            0.035,
            0.04
          ],
          "position_value": 3500,
          "initial_margin": 350,
          "closing_fee_excluded": true
        },
        "teaching_collateral": {
          "quantity_btc": 0.1,
          "usd_index_prices": [
            50000,
            40000
          ],
          "eligible_ratio": 0.9
        }
      },
      "formulas": {
        "tier_MM": "sum over marginal value in each tier × tier rate; equivalent at 3500 to 3500×3.5%−30",
        "eligible_collateral": "quantity * USD_index * eligible_ratio"
      },
      "default_results": {
        "tier_MM": 92.5,
        "tier_4_deduction": 30,
        "snapshot_surplus": 257.5,
        "eligible_value": [
          {
            "index": 50000,
            "headline": 5000,
            "eligible": 4500
          },
          {
            "index": 40000,
            "headline": 4000,
            "eligible": 3600
          }
        ]
      },
      "branch_boundaries": {
        "snapshot_surplus": "257.5 is not maximum future loss; price/tier/requirements can change.",
        "eligible_ratio": "90% is a teaching value, not a current BTC tier.",
        "mode_compatibility": "The BTC multi-collateral illustration belongs to a compatible cross/portfolio asset-mode branch, not arbitrary isolated USDT margin."
      }
    },
    "EXP-MHIJ-M27-REDEMPTION-01": {
      "owner": "M27",
      "unit_contract": {
        "token": "USDC",
        "cash": "USD",
        "reserve_amounts": "USD billions"
      },
      "identity": "Real non-EEA USDC terms and dated issuer disclosure plus synthetic route costs/secondary bid; no historical price tape or independent reserve audit.",
      "source_ids": [
        "MOD-CIRCLE-USDC",
        "MHIJ-CIRCLE-20230312"
      ],
      "inputs": {
        "historical_issuer_disclosure": {
          "treasuries_usd_bn": 32.4,
          "cash_usd_bn": 9.7,
          "svb_exposure_usd_bn": 3.3
        },
        "teaching_routes": {
          "tokens_usdc": 10000,
          "issuer_gross_usd_per_usdc": 1,
          "assumed_issuer_bank_cost_usd": 25,
          "secondary_bid_usd_per_usdc": 0.997,
          "assumed_secondary_fee_rate": 0.001
        }
      },
      "formulas": {
        "issuer_net_if_reachable": "tokens * 1 USD - assumed route/bank cost",
        "secondary_net": "tokens * bid * (1 - secondary_fee_rate)"
      },
      "default_results": {
        "reported_reserve_total_usd_bn": 42.1,
        "svb_share_of_reported_amount": 0.07838479809976247,
        "issuer_net_if_eligible": 9975,
        "secondary_net": 9960.03
      },
      "branch_boundaries": {
        "Type_A": "Direct redemption route only if the holder actually satisfies the relevant Mint eligibility/account/operational conditions.",
        "Type_B": "Carries a conditional redemption right under the terms; do not label it either immediately cash-redeemable or devoid of redemption rights.",
        "venue_balance": "Venue custody/withdrawal must be resolved before assuming the Circle route is reachable.",
        "routing": "Reachability is checked before comparing route amounts; no automatic arbitrage label."
      }
    },
    "EXP-MHIJ-M28-SETTLEMENT-01": {
      "owner": "M28",
      "unit_contract": {
        "fund_shares": "shares",
        "pvp_currency_1": "USD",
        "pvp_currency_2": "EUR"
      },
      "identity": "Franklin real fund record/transfer examples plus a synthetic state-machine illustration of Agorá-style PvP; not a performed Agorá transaction and not a Franklin DvP service.",
      "source_ids": [
        "MHIJ-FRANKLIN-20260801",
        "MHIJ-BIS-AGORA-2026"
      ],
      "inputs": {
        "fund_migration": {
          "shares_before": 100,
          "burn_old_chain": 100,
          "mint_new_chain": 100
        },
        "dividend_allocation": {
          "cycle_hours": 24,
          "transferor_hours": 12,
          "transferee_hours": 12
        },
        "teaching_pvp": {
          "A_initial": {
            "USD": 120,
            "EUR": 0
          },
          "B_initial": {
            "USD": 0,
            "EUR": 100
          },
          "A_pays_USD": 100,
          "B_pays_EUR": 90,
          "insufficient_B_EUR": 80,
          "amounts_identity": "pre-agreed teaching settlement instruction; not discovered by the smart contract"
        }
      },
      "workflow_contract": {
        "general_end_to_end_five_stage": [
          "confirmation of payee",
          "path",
          "validation / amount determination / readiness",
          "lock + delegate",
          "settle: commit or cancel"
        ],
        "pvp_three_stage": [
          "validation / readiness",
          "locking: lock + delegate",
          "settlement: coordinated commit or cancel"
        ],
        "pvp_exclusions": "The PvP branch does not require confirmation of payee, path discovery or cross-currency amount determination in the prototype flow."
      },
      "formulas": {
        "migration": "shares_after = shares_before - burned_old + minted_new",
        "dividend_fraction": "holding_hours / NAV_cycle_hours",
        "pvp": "check prerequisites -> lock both legs -> commit both or cancel/release both"
      },
      "default_results": {
        "shares_after_migration": 100,
        "dividend_fraction": {
          "transferor": 0.5,
          "transferee": 0.5
        },
        "pvp_lock_free": {
          "A_USD": 20,
          "B_EUR": 10
        },
        "pvp_commit": {
          "A": {
            "USD": 20,
            "EUR": 90
          },
          "B": {
            "USD": 100,
            "EUR": 10
          }
        },
        "pvp_insufficient": {
          "outcome": "cancel; no principal leg commits; prior locks released",
          "A": {
            "USD": 120,
            "EUR": 0
          },
          "B": {
            "USD": 0,
            "EUR": 80
          }
        }
      },
      "branch_boundaries": {
        "Franklin_vs_Agora": "Keep as separate tabs/real identities; do not synthesize a real Franklin-Agorá service.",
        "lock_vs_payment": "Locked assets are reserved, not yet paid.",
        "finality_layers": [
          "workflow-level atomic commit/cancel",
          "technical irreversibility on the relevant ledger",
          "legal settlement finality"
        ],
        "prototype": "No claim of production availability or synchronous physical-ledger updates."
      }
    },
    "EXP-MHIJ-M29-AMM-SWAP-01": {
      "owner": "M29",
      "unit_contract": {
        "price": "token Y per token X",
        "liquidity": "continuous teaching liquidity units",
        "input": "token Y",
        "output": "token X"
      },
      "identity": "Single active v3-style continuous teaching position and exact-real-arithmetic swap; tagged v1.0.0 code supplies implementation semantics. Not a tick/wei-valid deployed pool or observed block.",
      "source_ids": [
        "MOD-UNISWAP-V3",
        "MHIJ-UNI-V3-POOL",
        "MHIJ-UNI-V3-SWAPMATH",
        "MHIJ-UNI-CURRENT"
      ],
      "inputs": {
        "pool_active_liquidity": 1000,
        "default_position_liquidity": 1000,
        "initial_price": 1,
        "lower_price": 0.81,
        "upper_price": 1.21,
        "gross_y_inputs": [
          50,
          150
        ],
        "swap_fee_rate": 0.003,
        "protocol_share_of_swap_fee": 0,
        "price_limit": 1.21,
        "other_liquidity_beyond_range_default": 0,
        "fee_allocation_example": {
          "identity": "separate proportional-fee example, not the same unique L1000 position",
          "pool_active_liquidity": 1000,
          "position_liquidity": 100,
          "other_active_liquidity": 900,
          "fee_y_total": 3
        }
      },
      "formulas": {
        "virtual_reserves": "x_v=L/sqrt(P), y_v=L*sqrt(P)",
        "actual_inventory": "x=L(1/sqrt(P)-1/sqrt(P_b)); y=L(sqrt(P)-sqrt(P_a))",
        "exact_input": "net_input = gross_consumed*(1-fee); fee = gross_consumed-net_input",
        "average_execution": "gross_consumed_Y / X_out",
        "fee_growth": "LP fee after any protocol share / current active pool liquidity L"
      },
      "default_results": {
        "initial": {
          "actual_x": 90.9090909090909,
          "actual_y": 100,
          "virtual_x": 1000,
          "virtual_y": 1000
        },
        "gross_50": {
          "consumed_y": 50,
          "unused_y": 0,
          "fee_y": 0.15,
          "net_y": 49.85,
          "x_out": 47.48297375815591,
          "end_price": 1.1021850225,
          "gross_average_y_per_x": 1.0530090270812442,
          "remaining_x": 43.42611715093503,
          "remaining_y_ex_fee": 149.85
        },
        "gross_150": {
          "consumed_y": 100.30090270812445,
          "unused_y": 49.69909729187555,
          "fee_y": 0.30090270812437,
          "net_y": 100,
          "x_out": 90.9090909090909,
          "end_price": 1.21,
          "gross_average_y_per_x": 1.1033099297893687,
          "remaining_x": 0,
          "remaining_y_ex_fee": 200,
          "reached_price_limit": true
        },
        "fee_allocation": {
          "fee_growth_y_per_L": 0.003,
          "position_L100_fee_y": 0.3
        }
      },
      "branch_boundaries": {
        "default_price_limit": "Upper range boundary 1.21 is also the user's price limit. Once reached, the swap stops even if liquidity exists beyond that tick; unused exact input is returned/not consumed and is not a fee.",
        "tick_crossing_mechanism_only": "If the user price limit is relaxed beyond an initialized tick and the tick is reached first, update active L using the tick liquidity net, then continue with remaining amount. Do not add a second cross-tick frozen experiment.",
        "fee_allocation": "The L100 fee-allocation position is a separate example inside a pool with active L1000 and other active L900; it is not the unique L1000 default position.",
        "fee_separation": "Fees remain separate from curve reserves/L unless explicitly reinvested; no automatic compounding.",
        "whitepaper_erratum": "For per-liquidity fee growth, use tagged code semantics: after protocol share, feeGrowth += feeAmount*Q128/state.liquidity. Treat the whitepaper (6.9) omission of /L as a local unit correction only."
      }
    }
  },
  "ownership_boundaries": {
    "P32": "Existing perpetual-carry strategy/capital inputs remain owned by P32; Markets does not overwrite them.",
    "P33": "Existing LVR path/benchmark inputs remain owned by P33; M29 owns the swap/inventory mechanism only."
  },
  "agent_runtime_reading_log_default": [],
  "no_eighth_cross_tick_experiment": true
};
window.MHIJ_UI = {
  "panels": [
    {
      "id": "EXP-MHIJ-M24-FUNDING-01",
      "node": "M24",
      "title": "一笔资金费：函数、资格与下一事件",
      "identity": "Bybit具名规则 + 已汇总教学溢价. 规则系数0.75固定；IMR/MMR与溢价为透明教学输入. 不是历史资金费率或当前币对参数.",
      "controls": [
        {
          "name": "hours",
          "label": "本次事件间隔",
          "type": "select",
          "value": 8,
          "options": [
            {
              "value": 8,
              "label": "8小时（默认事件）"
            },
            {
              "value": 1,
              "label": "1小时（独立教学选择）"
            }
          ]
        },
        {
          "name": "premium",
          "label": "平均溢价 P（%）",
          "type": "number",
          "value": 0.02,
          "step": 0.01,
          "min": -20,
          "max": 20
        },
        {
          "name": "imr",
          "label": "教学初始保证金率 IMR（%）",
          "type": "number",
          "value": 1,
          "step": 0.1,
          "min": 0.0001,
          "max": 100
        },
        {
          "name": "mmr",
          "label": "教学维持率 MMR（%）",
          "type": "number",
          "value": 0.5,
          "step": 0.1,
          "min": 0.0001,
          "max": 100
        },
        {
          "name": "eligibility",
          "label": "本事件参与资格",
          "type": "select",
          "value": "included",
          "options": [
            {
              "value": "included",
              "label": "已确认参与（教学条件）"
            },
            {
              "value": "excluded",
              "label": "已确认不参与"
            },
            {
              "value": "uncertain",
              "label": "开平仓临近±5秒：不确定"
            }
          ]
        },
        {
          "name": "kind",
          "label": "费用计算分支",
          "type": "select",
          "value": "linear",
          "options": [
            {
              "value": "linear",
              "label": "线性：数量BTC，费用USDT"
            },
            {
              "value": "inverse",
              "label": "反向：数量USD，费用BTC"
            }
          ]
        },
        {
          "name": "side",
          "label": "持仓方向",
          "type": "select",
          "value": "long",
          "options": [
            {
              "value": "long",
              "label": "多头"
            },
            {
              "value": "short",
              "label": "空头"
            }
          ]
        },
        {
          "name": "quantity",
          "label": "合约数量（按所选分支单位）",
          "type": "number",
          "value": 10,
          "step": 1,
          "min": 1e-06
        },
        {
          "name": "mark",
          "label": "当次标记价（USDT/BTC或USD/BTC）",
          "type": "number",
          "value": 8000,
          "step": 1,
          "min": 1e-06
        }
      ],
      "presets": [
        [
          "P=.10%",
          {
            "premium": 0.1
          }
        ],
        [
          "P=−.10%",
          {
            "premium": -0.1
          }
        ],
        [
          "本事件触限P=1%",
          {
            "premium": 1
          }
        ]
      ]
    },
    {
      "id": "EXP-MHIJ-M25-CURRENCY-01",
      "node": "M25",
      "title": "把合约结果和钱包财富分开",
      "identity": "50,000入场；0.1 BTC线性／5,000 USD反向；入场钱包均按冻结入场换算记5,000 USD. BTC与USDT控件只改变报告时估值，不回写入场财富.",
      "controls": [
        {
          "name": "exit",
          "label": "退出合约价",
          "type": "number",
          "value": 40000,
          "step": 1000,
          "min": 1
        },
        {
          "name": "reportPolicy",
          "label": "报告BTC/USD价",
          "type": "select",
          "value": "exit",
          "options": [
            {
              "value": "exit",
              "label": "与退出价相同"
            },
            {
              "value": "manual",
              "label": "另给报告价"
            }
          ]
        },
        {
          "name": "report",
          "label": "独立报告BTC/USD价",
          "type": "number",
          "value": 41000,
          "step": 100,
          "min": 1
        },
        {
          "name": "usdtUsd",
          "label": "报告时 USD/USDT（入场固定1）",
          "type": "number",
          "value": 1,
          "step": 0.001,
          "min": 1e-06
        },
        {
          "name": "side",
          "label": "合约方向",
          "type": "select",
          "value": "long",
          "options": [
            {
              "value": "long",
              "label": "多头"
            },
            {
              "value": "short",
              "label": "空头"
            }
          ]
        },
        {
          "name": "mode",
          "label": "仅核币种相容性的账户模式",
          "type": "select",
          "value": "isolated",
          "options": [
            {
              "value": "isolated",
              "label": "逐仓：结算资产"
            },
            {
              "value": "cross",
              "label": "全仓：多资产"
            },
            {
              "value": "portfolio",
              "label": "组合：多资产"
            }
          ]
        },
        {
          "name": "product",
          "label": "拟用于哪种合约的抵押",
          "type": "select",
          "value": "linear",
          "options": [
            {
              "value": "linear",
              "label": "线性USDT"
            },
            {
              "value": "inverse",
              "label": "反向BTC"
            }
          ]
        },
        {
          "name": "asset",
          "label": "拟用钱包资产",
          "type": "select",
          "value": "USDT",
          "options": [
            {
              "value": "USDT",
              "label": "USDT"
            },
            {
              "value": "BTC",
              "label": "BTC"
            }
          ]
        }
      ],
      "presets": [
        [
          "退出40,000",
          {
            "exit": 40000
          }
        ],
        [
          "退出60,000",
          {
            "exit": 60000
          }
        ],
        [
          "另以41,000报告",
          {
            "exit": 40000,
            "reportPolicy": "manual",
            "report": 41000
          }
        ],
        [
          "报告时USDT=.98",
          {
            "exit": 40000,
            "usdtUsd": 0.98
          }
        ]
      ]
    },
    {
      "id": "EXP-MHIJ-M26-LIQUIDATION-01",
      "node": "M26",
      "title": "先模式，再触发：清算不是成交",
      "identity": "主线为官方USDT逐仓long例；反向short为完整对照. mark/last是合成同刻输入；保险基金数值是另一独立例.",
      "controls": [
        {
          "name": "mode",
          "label": "保证金模式",
          "type": "select",
          "value": "isolated",
          "options": [
            {
              "value": "isolated",
              "label": "逐仓：结算资产"
            },
            {
              "value": "cross",
              "label": "全仓：多资产"
            },
            {
              "value": "portfolio",
              "label": "组合：多资产"
            }
          ]
        },
        {
          "name": "kind",
          "label": "完整官方例分支",
          "type": "select",
          "value": "linear",
          "options": [
            {
              "value": "linear",
              "label": "主线：USDT线性多头"
            },
            {
              "value": "inverse",
              "label": "选读：BTC反向空头"
            }
          ]
        },
        {
          "name": "index",
          "label": "线性分支指数价",
          "type": "number",
          "value": 36350,
          "step": 1,
          "min": 1
        },
        {
          "name": "last",
          "label": "线性分支最新成交",
          "type": "number",
          "value": 36500,
          "step": 1,
          "min": 1
        },
        {
          "name": "basis",
          "label": "线性分支平均基差",
          "type": "number",
          "value": 30,
          "step": 1
        },
        {
          "name": "normal",
          "label": "采用正常median分支",
          "type": "checkbox",
          "value": true
        },
        {
          "name": "inverseMark",
          "label": "反向分支独立标记价",
          "type": "number",
          "value": 60000,
          "step": 100,
          "min": 1
        },
        {
          "name": "accountMmr",
          "label": "全仓／组合：另给账户MMR（%）",
          "type": "number",
          "value": null,
          "step": 0.1,
          "min": 0,
          "max": 1000,
          "hint": "留空表示缺完整账户结果，不自动从逐仓推算"
        },
        {
          "name": "insuranceExit",
          "label": "独立保险例：实际退出价",
          "type": "select",
          "value": 64980,
          "options": [
            {
              "value": 64980,
              "label": "64,980：优于破产价"
            },
            {
              "value": 63950,
              "label": "63,950：劣于破产价"
            }
          ]
        }
      ],
      "presets": [
        [
          "看组合模式",
          {
            "mode": "portfolio"
          }
        ],
        [
          "反向触发对照",
          {
            "mode": "isolated",
            "kind": "inverse",
            "inverseMark": 66400
          }
        ]
      ]
    },
    {
      "id": "EXP-MHIJ-M26-COLLATERAL-01",
      "node": "M26",
      "title": "分档维持额与抵押认可值：两张账",
      "identity": "子例A是官方假设分档；子例B是无仓BTC钱包.350 USDT与0.1 BTC不合并成同一账户；90%不是实时档位.",
      "controls": [
        {
          "name": "position",
          "label": "子例A名义额（USDT）",
          "type": "number",
          "value": 3500,
          "step": 100,
          "min": 0,
          "max": 5000
        },
        {
          "name": "initial",
          "label": "子例A教学资金（USDT）",
          "type": "number",
          "value": 350,
          "step": 10,
          "min": 0
        },
        {
          "name": "index",
          "label": "子例B BTC/USD指数",
          "type": "number",
          "value": 50000,
          "step": 1000,
          "min": 1
        },
        {
          "name": "ratio",
          "label": "子例B教学认可比例（%）",
          "type": "number",
          "value": 90,
          "step": 1,
          "min": 0,
          "max": 100
        },
        {
          "name": "mode",
          "label": "子例B拟用于USDT合约的模式",
          "type": "select",
          "value": "cross",
          "options": [
            {
              "value": "isolated",
              "label": "逐仓：结算资产"
            },
            {
              "value": "cross",
              "label": "全仓：多资产"
            },
            {
              "value": "portfolio",
              "label": "组合：多资产"
            }
          ]
        }
      ],
      "presets": [
        [
          "BTC跌至40,000",
          {
            "index": 40000
          }
        ],
        [
          "逐仓币种不相容",
          {
            "mode": "isolated"
          }
        ]
      ]
    },
    {
      "id": "EXP-MHIJ-M27-REDEMPTION-01",
      "node": "M27",
      "title": "先核可达路线，再算美元净额",
      "identity": "USDC非EEA具名条款；买价0.997、通道费25美元和出售费0.1%全为教学值，不是历史行情.",
      "controls": [
        {
          "name": "holder",
          "label": "持有人身份",
          "type": "select",
          "value": "type_a",
          "options": [
            {
              "value": "type_a",
              "label": "合资格Type A"
            },
            {
              "value": "type_b",
              "label": "Type B：尚无Mint账户"
            },
            {
              "value": "venue",
              "label": "第三方场所内余额"
            }
          ]
        },
        {
          "name": "tokens",
          "label": "USDC数量",
          "type": "number",
          "value": 10000,
          "step": 100,
          "min": 1e-06
        },
        {
          "name": "cost",
          "label": "直接通道成本（USD）",
          "type": "number",
          "value": 25,
          "step": 1,
          "min": 0
        },
        {
          "name": "bid",
          "label": "外部二级买价（USD/USDC）",
          "type": "number",
          "value": 0.997,
          "step": 0.001,
          "min": 1e-06
        },
        {
          "name": "fee",
          "label": "外部出售费率（%）",
          "type": "number",
          "value": 0.1,
          "step": 0.01,
          "min": 0,
          "max": 100
        },
        {
          "name": "issuerOnline",
          "label": "发行人／银行通道条件已满足",
          "type": "checkbox",
          "value": true
        },
        {
          "name": "secondaryReady",
          "label": "外部二级全量成交条件已满足",
          "type": "checkbox",
          "value": true
        },
        {
          "name": "withdraw",
          "label": "场所提款条件已满足",
          "type": "checkbox",
          "value": false
        },
        {
          "name": "mint",
          "label": "场所余额持有人另有合资格Mint账户",
          "type": "checkbox",
          "value": false
        }
      ],
      "presets": [
        [
          "Type B路线",
          {
            "holder": "type_b"
          }
        ],
        [
          "场所提款不可用",
          {
            "holder": "venue",
            "withdraw": false
          }
        ]
      ]
    },
    {
      "id": "EXP-MHIJ-M28-SETTLEMENT-01",
      "node": "M28",
      "title": "份额记录与PvP：锁定还不是付款",
      "identity": "Franklin基金记录例与Agorá式教学PvP是两个对象. 不是Franklin采用Agorá的实际服务；100 USD/90 EUR是预定指令.",
      "controls": [
        {
          "name": "tab",
          "label": "选择材料视图",
          "type": "select",
          "value": "fund",
          "options": [
            {
              "value": "fund",
              "label": "主材料：Franklin份额"
            },
            {
              "value": "pvp",
              "label": "对照：PvP三阶段"
            }
          ]
        },
        {
          "name": "recordAction",
          "label": "份额记录操作",
          "type": "select",
          "value": "migration",
          "options": [
            {
              "value": "migration",
              "label": "跨链记录迁移"
            },
            {
              "value": "transfer",
              "label": "P2P份额腿"
            },
            {
              "value": "dividend",
              "label": "24h周期12h/12h分配"
            }
          ],
          "group": "fund"
        },
        {
          "name": "permission",
          "label": "登记／钱包权限已获准",
          "type": "checkbox",
          "value": true,
          "group": "fund"
        },
        {
          "name": "insufficient",
          "label": "B改为只有80 EUR",
          "type": "checkbox",
          "value": false,
          "group": "pvp"
        },
        {
          "name": "valid",
          "label": "双方验证／就绪成功",
          "type": "checkbox",
          "value": true,
          "group": "pvp"
        },
        {
          "name": "authorized",
          "label": "最终授权与时限条件满足",
          "type": "checkbox",
          "value": true,
          "group": "pvp"
        }
      ],
      "presets": []
    },
    {
      "id": "EXP-MHIJ-M29-AMM-SWAP-01",
      "node": "M29",
      "title": "有限交换：gross、net、费用和限价余量",
      "identity": "v3式连续教学状态；区间0.81–1.21，用户价格上限固定1.21. 不是链上区块、tick/wei有效状态或长期LP收益.",
      "controls": [
        {
          "name": "gross",
          "label": "指定输入gross（Y）",
          "type": "number",
          "value": 50,
          "step": 10,
          "min": 0,
          "max": 1000000
        },
        {
          "name": "liquidity",
          "label": "池活动L＝默认唯一头寸L",
          "type": "number",
          "value": 1000,
          "step": 100,
          "min": 1
        },
        {
          "name": "fee",
          "label": "swap费率（%）",
          "type": "number",
          "value": 0.3,
          "step": 0.1,
          "min": 0,
          "max": 50
        }
      ],
      "presets": [
        [
          "gross50",
          {
            "gross": 50
          }
        ],
        [
          "gross150限价停止",
          {
            "gross": 150
          }
        ],
        [
          "零输入",
          {
            "gross": 0
          }
        ]
      ]
    }
  ]
};
