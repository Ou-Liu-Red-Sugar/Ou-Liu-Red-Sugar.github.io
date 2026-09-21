/* Generated read-only browser data; source JSONs remain canonical. */
window.MEFG_DATA = {
  "schema": "markets-mefg-adopted-inputs-v1",
  "content_version": "2026-09-21-MEFG-draft-v1",
  "scope": [
    "M15",
    "M16",
    "M17",
    "M18",
    "M19",
    "M20",
    "M21",
    "M22",
    "M23"
  ],
  "state_tree": {
    "experiment_id": "EXP-STATE-01",
    "source_file": "data/qt-f-shared-state-experiment.json",
    "source_version": "2026-09-21-v1",
    "source_sha256": "8489fd3b74f469c3424d32a2b0738280e4e83709f081dfb24282d9afcfa8804b",
    "source_pointer": "two_state / three_state_incomplete / three_state_augmented_complete",
    "identity": "Exact received QT-F/M21 frozen contract; file preserved byte-for-byte; generated browser data is a derived copy",
    "physical_up_probability_variants": [
      0.2,
      0.6,
      0.8,
      0.9
    ],
    "period_unit": "one abstract period; R is gross growth, not annual net rate"
  },
  "odd_equal_wealth": {
    "identity": "OCC ODD June2024 printed p61 hypothetical; exact interest versus rounded official display distinguished",
    "initial_wealth_usd": 5000,
    "spot_usd": 50,
    "strike_usd": 50,
    "premium_per_share_usd": 5,
    "shares_per_contract": 100,
    "stock_position_shares": 100,
    "mixed_contracts": 1,
    "all_option_contracts": 10,
    "mixed_cash_usd": 4500,
    "simple_annual_cash_rate": 0.0325,
    "horizon_years": 0.5,
    "terminal_spots_usd": [
      62,
      58,
      54,
      50,
      46,
      42,
      38
    ],
    "cost_convention": "No fees, tax or stock dividends in base; terminal economic payoff is not a funding guarantee for physical exercise"
  },
  "cash_examples": {
    "identity": "Synthetic amounts under documented product rules; not historical quotes/series/accounts",
    "equity_call": {
      "multiplier": 100,
      "contracts": 1,
      "strike": 100,
      "purchase_premium": 4,
      "later_underlying_bid": 105,
      "later_option_bid": 6,
      "later_option_ask": 6.2,
      "exercise_gross_cash_assumption": 10000,
      "exercise_model": "sequential gross payment first; no assumed netting/credit; broker policy not inferred"
    },
    "spxw_call": {
      "multiplier_usd_per_point": 100,
      "strike_points": 5000,
      "purchase_premium_points": 50,
      "settlement_value_points": 5025,
      "shares_delivered": 0
    },
    "uncovered_equity_call_margin": {
      "contract_type": "OCC ordinary equity uncovered call minimum; not ETF/index or broker house rules",
      "multiplier": 100,
      "strike": 105,
      "initial_spot": 100,
      "initial_option_premium": 4,
      "later_spot": 120,
      "later_option_mark": 17,
      "base_fraction": 0.2,
      "minimum_call_fraction": 0.1,
      "other_positions_or_broker_addons": false,
      "default_external_cash_available": 2200,
      "model": "cash collateral; liability is mark not daily futures VM; no external deposits beyond the explicitly displayed steps"
    }
  },
  "early_exercise_counterexample": {
    "identity": "Separate teaching market, not EXP-STATE-01",
    "spot": 50,
    "strike": 100,
    "up_factor": 1.2,
    "down_factor": 0.9,
    "gross_cash_growth_per_period": 1.02,
    "periods": [
      1,
      2
    ],
    "dividend": 0,
    "time_unit": "one abstract period; not a year; American exercise at every displayed node"
  },
  "parity_quotes": {
    "identity": "Separate synthetic quote/funding scenario; no friction toggle on EXP-STATE-01",
    "strike": 105,
    "gross_cash_growth": 1.02,
    "stock": {
      "bid": 99.95,
      "ask": 100.05
    },
    "call": {
      "bid": 5.8,
      "ask": 6.2
    },
    "put": {
      "bid": 8.7,
      "ask": 9.1
    },
    "extra_fee_per_underlying_unit": 0,
    "cost_convention": "same borrowing/lending, zero dividend European same K/T; all legs synchronous and fully fillable only by explicit teaching assumption",
    "execution_assumptions": {
      "borrowing": true,
      "stock_short": true,
      "synchronous": true,
      "depth": true,
      "exercise_terms_match": true
    },
    "default_capital_available": 1
  },
  "surface": {
    "experiment_id": "EXP-MEFG-IV-01",
    "identity": "Entirely synthetic SPX-sized European call/put quotes; actual multiplier/tick only; no historical chain",
    "quote_date": null,
    "spot_index_points": 5000,
    "annual_continuous_rate": 0.04,
    "annual_continuous_dividend_yield": 0,
    "dividend_note": "zero is teaching assumption, not S&P500 dividend forecast",
    "day_count": "ACT/365 teaching whole-day expiries",
    "strikes_points": [
      4500,
      5000,
      5500
    ],
    "maturities": [
      {
        "days": 30,
        "sigma_by_strike": [
          0.28,
          0.24,
          0.22
        ]
      },
      {
        "days": 90,
        "sigma_by_strike": [
          0.27,
          0.235,
          0.22
        ]
      },
      {
        "days": 180,
        "sigma_by_strike": [
          0.25,
          0.23,
          0.22
        ]
      }
    ],
    "quote_half_width_points": 0.2,
    "contract_multiplier_usd_per_point": 100,
    "min_quote_tick_below3": 0.05,
    "min_quote_tick_at_or_above3": 0.1,
    "greek_example": {
      "strike": 5000,
      "days": 90,
      "sigma": 0.235,
      "spot_changes_points": [
        50,
        500
      ],
      "vol_changes_absolute": [
        0.01,
        0.1
      ]
    },
    "validation_scope": "displayed grid only; not a global no-arbitrage surface or observed chain"
  },
  "vix": {
    "official_sample": {
      "identity": "Methodology v6.0 Appendix3 explicitly hypothetical (2022-09-27 10:45:15 ET label is not observed VIX)",
      "minutes_near": 34484,
      "minutes_next": 44954,
      "target_minutes": 43200,
      "year_minutes": 525600,
      "near_variance": 0.019233906,
      "next_variance": 0.019423884,
      "displayed_T_near": 0.0656088,
      "displayed_T_next": 0.0855289,
      "displayed_vix": 13.93,
      "one_strike": {
        "strike": 1370,
        "delta_K": 5,
        "mid_quote": 0.2,
        "R_rounded": 0.000317,
        "T_rounded": 0.0656088,
        "displayed_contribution": 5.328e-07
      }
    },
    "two_term_teaching_variant": {
      "identity": "separate variance interpolation, not a VIX-strip reproduction",
      "days_near": 24,
      "days_next": 36,
      "target_days": 30,
      "near_vol": 0.2,
      "next_vol": 0.24
    }
  },
  "information_example": {
    "identity": "Synthetic contract volumes classified by initiating side; size-weighted KIT Eq(2), not unweighted transaction counts; not motives",
    "unit": "option contracts",
    "buyer_call_contracts": 30,
    "seller_call_contracts": 10,
    "buyer_put_contracts": 25,
    "seller_put_contracts": 35,
    "non_event_mean_TOI": 0.05,
    "baseline_window": "non-announcement days tau-40 through tau-10 per paper; 0.05 here a teaching value",
    "table_2_column_3": {
      "identity": "published regression coefficients with macro/non-macro separately standardized variables; not raw-return slopes/profits",
      "OI_coefficient": 0.0033,
      "OI_macro_interaction": 0.025,
      "column_1_OI_coefficient": 0.0078,
      "sample_observations": 51522
    }
  },
  "runtime_reading_log": []
};
window.MEFG_STATE = {
  "schema": "qt-f-shared-state-experiment-v1",
  "experiment_id": "EXP-STATE-01",
  "version": "2026-09-21-v1",
  "status": "frozen_for_QT-F_and_M21_authoring; not yet a published entry or market observation",
  "consumer_nodes": [
    "QT18",
    "QT18-P1",
    "QT18-P2",
    "M21"
  ],
  "identity": "Finite frictionless teaching market, independently reconstructed with exact rational arithmetic; no estimated probability or live security quote",
  "units": {
    "monetary_unit": "USD, teaching denomination per modeled asset unit",
    "time": "one abstract period; not annualized",
    "cash_account_holding": "number of cash-account units; cash value at t equals beta*B_t",
    "probabilities": "dimensionless; state-price vector is not a probability",
    "gross_cash_return_symbol": "R=B_1/B_0=51/50; reserve real scalars for mathbb R"
  },
  "assumptions": {
    "time_grid": [
      0,
      1
    ],
    "F_0": "{empty, Omega}",
    "F_T": "all subsets of the displayed terminal atoms",
    "physical_probability": "strictly positive on every terminal atom",
    "cash_account": "B_0=1, deterministic B_1=51/50 > 0; identical borrowing and lending accumulation",
    "holdings": "unrestricted finite signed real quantities; fractional positions and short sales allowed",
    "timing": "holdings for (0,1] chosen from F_0; terminal state cannot be used to choose them",
    "financing": "V_0=beta*B_0+sum_j h_j*S_0^j over every traded risky asset; in the augmented market this includes the added claim at price c. No external cash flows; its terminal payoff is included once in the portfolio value.",
    "frictions": "zero transaction costs, no bid/ask spread, no dividends, no margin/liquidity/short-sale constraint"
  },
  "two_state": {
    "state_order": [
      "up",
      "down"
    ],
    "B_0": {
      "exact": "1",
      "decimal": 1.0
    },
    "B_1": {
      "exact": "51/50",
      "decimal": 1.02
    },
    "S_0": {
      "exact": "100",
      "decimal": 100.0
    },
    "S_1": [
      {
        "exact": "120",
        "decimal": 120.0
      },
      {
        "exact": "90",
        "decimal": 90.0
      }
    ],
    "strike": {
      "exact": "105",
      "decimal": 105.0
    },
    "claim": [
      {
        "exact": "15",
        "decimal": 15.0
      },
      {
        "exact": "0",
        "decimal": 0.0
      }
    ],
    "P_illustrative_not_estimated": [
      {
        "exact": "3/5",
        "decimal": 0.6
      },
      {
        "exact": "2/5",
        "decimal": 0.4
      }
    ],
    "payoff_matrix_state_rows_asset_columns_B_S": [
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "120",
          "decimal": 120.0
        }
      ],
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "90",
          "decimal": 90.0
        }
      ]
    ],
    "initial_price_vector_B_S": [
      {
        "exact": "1",
        "decimal": 1.0
      },
      {
        "exact": "100",
        "decimal": 100.0
      }
    ],
    "Q": [
      {
        "exact": "2/5",
        "decimal": 0.4
      },
      {
        "exact": "3/5",
        "decimal": 0.6
      }
    ],
    "state_prices": [
      {
        "exact": "20/51",
        "decimal": 0.39215686274509803
      },
      {
        "exact": "10/17",
        "decimal": 0.5882352941176471
      }
    ],
    "dQ_dP": [
      {
        "exact": "2/3",
        "decimal": 0.6666666666666666
      },
      {
        "exact": "3/2",
        "decimal": 1.5
      }
    ],
    "pricing_kernel_m": [
      {
        "exact": "100/153",
        "decimal": 0.6535947712418301
      },
      {
        "exact": "25/17",
        "decimal": 1.4705882352941178
      }
    ],
    "rank": 2,
    "P_expected_stock": {
      "exact": "108",
      "decimal": 108.0
    },
    "Q_expected_stock": {
      "exact": "102",
      "decimal": 102.0
    },
    "P_expected_claim": {
      "exact": "9",
      "decimal": 9.0
    },
    "Q_expected_claim": {
      "exact": "6",
      "decimal": 6.0
    },
    "P_discounted_claim_expectation_not_replication_price": {
      "exact": "150/17",
      "decimal": 8.823529411764707
    },
    "replication": {
      "cash_account_units": {
        "exact": "-750/17",
        "decimal": -44.11764705882353
      },
      "stock_units": {
        "exact": "1/2",
        "decimal": 0.5
      },
      "initial_cash_value": {
        "exact": "-750/17",
        "decimal": -44.11764705882353
      },
      "initial_stock_value": {
        "exact": "50",
        "decimal": 50.0
      },
      "initial_cost": {
        "exact": "100/17",
        "decimal": 5.882352941176471
      },
      "terminal_cash_value": {
        "exact": "-45",
        "decimal": -45.0
      },
      "terminal_stock_values": [
        {
          "exact": "60",
          "decimal": 60.0
        },
        {
          "exact": "45",
          "decimal": 45.0
        }
      ],
      "terminal_values": [
        {
          "exact": "15",
          "decimal": 15.0
        },
        {
          "exact": "0",
          "decimal": 0.0
        }
      ]
    },
    "P_change_exercise": {
      "P": [
        {
          "exact": "9/10",
          "decimal": 0.9
        },
        {
          "exact": "1/10",
          "decimal": 0.1
        }
      ],
      "Q_unchanged": [
        {
          "exact": "2/5",
          "decimal": 0.4
        },
        {
          "exact": "3/5",
          "decimal": 0.6
        }
      ],
      "price_unchanged": {
        "exact": "100/17",
        "decimal": 5.882352941176471
      },
      "new_dQ_dP": [
        {
          "exact": "4/9",
          "decimal": 0.4444444444444444
        },
        {
          "exact": "6",
          "decimal": 6.0
        }
      ],
      "new_m": [
        {
          "exact": "200/459",
          "decimal": 0.4357298474945534
        },
        {
          "exact": "100/17",
          "decimal": 5.882352941176471
        }
      ]
    },
    "stock_simple_returns": [
      {
        "exact": "1/5",
        "decimal": 0.2
      },
      {
        "exact": "-1/10",
        "decimal": -0.1
      }
    ],
    "cash_simple_return": {
      "exact": "1/50",
      "decimal": 0.02
    }
  },
  "three_state_incomplete": {
    "state_order": [
      "down",
      "middle",
      "up"
    ],
    "B_0": {
      "exact": "1",
      "decimal": 1.0
    },
    "B_1": {
      "exact": "51/50",
      "decimal": 1.02
    },
    "S_0": {
      "exact": "100",
      "decimal": 100.0
    },
    "S_1": [
      {
        "exact": "80",
        "decimal": 80.0
      },
      {
        "exact": "100",
        "decimal": 100.0
      },
      {
        "exact": "120",
        "decimal": 120.0
      }
    ],
    "call_strike": {
      "exact": "100",
      "decimal": 100.0
    },
    "call_payoff": [
      {
        "exact": "0",
        "decimal": 0.0
      },
      {
        "exact": "0",
        "decimal": 0.0
      },
      {
        "exact": "20",
        "decimal": 20.0
      }
    ],
    "P_illustrative_not_estimated": null,
    "P_requirement": "Any fixed probability positive on all three terminal atoms; no default physical probabilities assigned",
    "initial_price_vector_B_S": [
      {
        "exact": "1",
        "decimal": 1.0
      },
      {
        "exact": "100",
        "decimal": 100.0
      }
    ],
    "payoff_matrix_state_rows_asset_columns_B_S": [
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "80",
          "decimal": 80.0
        }
      ],
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "100",
          "decimal": 100.0
        }
      ],
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "120",
          "decimal": 120.0
        }
      ]
    ],
    "rank": 2,
    "Q_family": {
      "parameter": "t",
      "expression": [
        "t",
        "9/10 - 2*t",
        "1/10 + t"
      ],
      "open_parameter_interval": {
        "lower": {
          "exact": "0",
          "decimal": 0.0
        },
        "upper": {
          "exact": "9/20",
          "decimal": 0.45
        },
        "endpoints_included": false
      },
      "default_t": {
        "exact": "1/5",
        "decimal": 0.2
      },
      "null_direction": [
        {
          "exact": "1",
          "decimal": 1.0
        },
        {
          "exact": "-2",
          "decimal": -2.0
        },
        {
          "exact": "1",
          "decimal": 1.0
        }
      ],
      "samples": [
        {
          "t": {
            "exact": "1/10",
            "decimal": 0.1
          },
          "Q": [
            {
              "exact": "1/10",
              "decimal": 0.1
            },
            {
              "exact": "7/10",
              "decimal": 0.7
            },
            {
              "exact": "1/5",
              "decimal": 0.2
            }
          ],
          "state_prices": [
            {
              "exact": "5/51",
              "decimal": 0.09803921568627451
            },
            {
              "exact": "35/51",
              "decimal": 0.6862745098039216
            },
            {
              "exact": "10/51",
              "decimal": 0.19607843137254902
            }
          ],
          "claim_price": {
            "exact": "200/51",
            "decimal": 3.9215686274509802
          }
        },
        {
          "t": {
            "exact": "1/5",
            "decimal": 0.2
          },
          "Q": [
            {
              "exact": "1/5",
              "decimal": 0.2
            },
            {
              "exact": "1/2",
              "decimal": 0.5
            },
            {
              "exact": "3/10",
              "decimal": 0.3
            }
          ],
          "state_prices": [
            {
              "exact": "10/51",
              "decimal": 0.19607843137254902
            },
            {
              "exact": "25/51",
              "decimal": 0.49019607843137253
            },
            {
              "exact": "5/17",
              "decimal": 0.29411764705882354
            }
          ],
          "claim_price": {
            "exact": "100/17",
            "decimal": 5.882352941176471
          }
        },
        {
          "t": {
            "exact": "2/5",
            "decimal": 0.4
          },
          "Q": [
            {
              "exact": "2/5",
              "decimal": 0.4
            },
            {
              "exact": "1/10",
              "decimal": 0.1
            },
            {
              "exact": "1/2",
              "decimal": 0.5
            }
          ],
          "state_prices": [
            {
              "exact": "20/51",
              "decimal": 0.39215686274509803
            },
            {
              "exact": "5/51",
              "decimal": 0.09803921568627451
            },
            {
              "exact": "25/51",
              "decimal": 0.49019607843137253
            }
          ],
          "claim_price": {
            "exact": "500/51",
            "decimal": 9.803921568627452
          }
        }
      ]
    },
    "claim_price_function": "c(t) = (2 + 20*t)/(51/50)",
    "claim_arbitrage_free_price_interval": {
      "lower": {
        "exact": "100/51",
        "decimal": 1.9607843137254901
      },
      "upper": {
        "exact": "550/51",
        "decimal": 10.784313725490197
      },
      "endpoints_included": false,
      "scope": "Claim is added as a freely signed, fractionally tradable asset at t=0, paying H at t=1; prices of cash and stock fixed"
    },
    "endpoint_arbitrages": [
      {
        "endpoint": "lower",
        "claim_price": {
          "exact": "100/51",
          "decimal": 1.9607843137254901
        },
        "holdings_B_S_C": [
          {
            "exact": "5000/51",
            "decimal": 98.03921568627452
          },
          {
            "exact": "-1",
            "decimal": -1.0
          },
          {
            "exact": "1",
            "decimal": 1.0
          }
        ],
        "initial_cost": {
          "exact": "0",
          "decimal": 0.0
        },
        "terminal_payoffs": [
          {
            "exact": "20",
            "decimal": 20.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          }
        ]
      },
      {
        "endpoint": "upper",
        "claim_price": {
          "exact": "550/51",
          "decimal": 10.784313725490197
        },
        "holdings_B_S_C": [
          {
            "exact": "-2000/51",
            "decimal": -39.21568627450981
          },
          {
            "exact": "1/2",
            "decimal": 0.5
          },
          {
            "exact": "-1",
            "decimal": -1.0
          }
        ],
        "initial_cost": {
          "exact": "0",
          "decimal": 0.0
        },
        "terminal_payoffs": [
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "10",
            "decimal": 10.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          }
        ]
      }
    ]
  },
  "three_state_augmented_complete": {
    "traded_call_price": {
      "exact": "6",
      "decimal": 6.0
    },
    "Q": [
      {
        "exact": "103/500",
        "decimal": 0.206
      },
      {
        "exact": "61/125",
        "decimal": 0.488
      },
      {
        "exact": "153/500",
        "decimal": 0.306
      }
    ],
    "state_prices": [
      {
        "exact": "103/510",
        "decimal": 0.2019607843137255
      },
      {
        "exact": "122/255",
        "decimal": 0.47843137254901963
      },
      {
        "exact": "3/10",
        "decimal": 0.3
      }
    ],
    "payoff_matrix_state_rows_asset_columns_B_S_C": [
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "80",
          "decimal": 80.0
        },
        {
          "exact": "0",
          "decimal": 0.0
        }
      ],
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "100",
          "decimal": 100.0
        },
        {
          "exact": "0",
          "decimal": 0.0
        }
      ],
      [
        {
          "exact": "51/50",
          "decimal": 1.02
        },
        {
          "exact": "120",
          "decimal": 120.0
        },
        {
          "exact": "20",
          "decimal": 20.0
        }
      ]
    ],
    "initial_price_vector_B_S_C": [
      {
        "exact": "1",
        "decimal": 1.0
      },
      {
        "exact": "100",
        "decimal": 100.0
      },
      {
        "exact": "6",
        "decimal": 6.0
      }
    ],
    "rank": 3,
    "determinant": {
      "exact": "408",
      "decimal": 408.0
    },
    "parameter_t": {
      "exact": "103/500",
      "decimal": 0.206
    },
    "digital_replications": [
      {
        "state": "down",
        "payoff": [
          {
            "exact": "1",
            "decimal": 1.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          }
        ],
        "holdings_B_S_C": [
          {
            "exact": "250/51",
            "decimal": 4.901960784313726
          },
          {
            "exact": "-1/20",
            "decimal": -0.05
          },
          {
            "exact": "1/20",
            "decimal": 0.05
          }
        ],
        "initial_cost": {
          "exact": "103/510",
          "decimal": 0.2019607843137255
        }
      },
      {
        "state": "middle",
        "payoff": [
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "1",
            "decimal": 1.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          }
        ],
        "holdings_B_S_C": [
          {
            "exact": "-200/51",
            "decimal": -3.9215686274509802
          },
          {
            "exact": "1/20",
            "decimal": 0.05
          },
          {
            "exact": "-1/10",
            "decimal": -0.1
          }
        ],
        "initial_cost": {
          "exact": "122/255",
          "decimal": 0.47843137254901963
        }
      },
      {
        "state": "up",
        "payoff": [
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "1",
            "decimal": 1.0
          }
        ],
        "holdings_B_S_C": [
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          },
          {
            "exact": "1/20",
            "decimal": 0.05
          }
        ],
        "initial_cost": {
          "exact": "3/10",
          "decimal": 0.3
        }
      }
    ],
    "arbitrary_payoff_replication_formula": {
      "for": [
        "x_down",
        "x_middle",
        "x_up"
      ],
      "stock_units": "(x_middle-x_down)/20",
      "cash_account_units": "(5*x_down-4*x_middle)/(51/50)",
      "claim_units": "(x_up-2*x_middle+x_down)/20",
      "initial_cost": "pi_down*x_down + pi_middle*x_middle + pi_up*x_up"
    }
  },
  "formula_contract": {
    "state_prices": "A^T*pi=s_0; pi_i>0; sum_i pi_i=B_0/B_1=1/R",
    "martingale_probability": "Q_i=R*pi_i, E_Q[S_1]=R*S_0",
    "density": "z_i=Q_i/P_i; E_P[z]=1",
    "pricing_kernel": "m_i=pi_i/P_i=z_i/R; E_P[m]=1/R",
    "replication": "A*theta=H; price=s_0^T*theta=sum_i pi_i*H_i",
    "multiperiod_cash_completion": "beta_1=(V_0-h_1 dot S_0)/B_0; beta_(k+1)=(beta_k*B_k+h_k dot S_k-h_(k+1) dot S_k)/B_k",
    "discounted_wealth": "V_k/B_k=V_0/B_0+sum_(j=1)^k h_j dot (S_j/B_j-S_(j-1)/B_(j-1))",
    "attainable_space": "K=span{1}+L={a*1+ell:a in real numbers,ell in L}; R is not the scalar field"
  },
  "interaction_boundaries": [
    "Switching full-support P changes dQ/dP and m, but fixed payoffs/prices imply unchanged Q and replication price in the two-state complete model",
    "Three-state t must be strictly between 0 and 9/20 for an EMM; endpoint demonstrations must be labelled arbitrage cases",
    "Before adding the claim, Q is a family and a claim price is not fixed; after freely trading it at 6, rank is 3 and Q is unique",
    "No transaction-cost or constraint toggle under this frictionless theorem; such variations need a different model",
    "QT08 uses separate EXP-QT08-STOP-01; stopping enumeration is not part of this state-market model"
  ],
  "source": {
    "source_id": "QDEF-EF05",
    "authors": [
      "Ruth J. Williams"
    ],
    "title": "Finite Market Model, Chapter 3",
    "url": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
    "version": "Chapter PDF; no reliable revision date stated; retrieved/read 2026-09-21",
    "required_units": [
      "Section 3.1, printed pp.40-43 / PDF pp.2-3",
      "Section 3.2, printed pp.44-50 / PDF pp.4-7, all statements/proofs and Lemmas 3.2.5-3.2.6",
      "Section 3.3, Theorems 3.3.1-3.3.3, printed pp.51-55 / PDF pp.7-9",
      "Section 3.6, Theorem 3.6.1 and full proof, printed pp.66-67 / PDF p.15"
    ],
    "supports": "Model conventions and finite-market proofs; the exact numerical parameters here are a separately stated teaching construction"
  },
  "provenance": {
    "plan": "receipts/qt-def-reference-plan-v1.md §§4.5,10-12",
    "lead_scope": "receipts/qt-def-plan-review.md QT-F initial adoption",
    "prior_candidate": "references/qt-ef-primary-20260921/qt-ef-calculation-results.json:qt18",
    "independent_review": "receipts/qt-f-proof-plan-independent-review.md",
    "frozen_source_policy": "This file freezes the parameters for authoring. It does not change the prior candidate, formal catalogue, entries or production state."
  },
  "actual_verification": {
    "date": "2026-09-21",
    "python": "3.14.2",
    "libraries": "Python standard library, fractions.Fraction",
    "random_seed": null,
    "implementation": "Independent exact Gaussian elimination, state-by-state cash/payoff checks and finite enumeration; did not import prior support script",
    "shared_state_checks": [
      {
        "name": "two_state_Q_positive_probability",
        "passed": true
      },
      {
        "name": "two_state_Atranspose_pi_equals_prices",
        "passed": true
      },
      {
        "name": "two_state_replication_all_states",
        "passed": true
      },
      {
        "name": "two_state_replication_cost_Q_and_state_prices",
        "passed": true
      },
      {
        "name": "two_state_density_mean_one",
        "passed": true
      },
      {
        "name": "two_state_kernel_prices_cash",
        "passed": true
      },
      {
        "name": "two_state_kernel_prices_stock",
        "passed": true
      },
      {
        "name": "two_state_kernel_prices_claim",
        "passed": true
      },
      {
        "name": "two_state_expected_stock_P_Q",
        "passed": true
      },
      {
        "name": "two_state_cash_completion",
        "passed": true
      },
      {
        "name": "two_state_rank",
        "passed": true
      },
      {
        "name": "P_change_keeps_Q_price_and_changes_density",
        "passed": true
      },
      {
        "name": "three_state_old_market_rank_2",
        "passed": true
      },
      {
        "name": "three_state_claim_not_old_market_replicable",
        "passed": true
      },
      {
        "name": "three_state_family_positive_and_prices_1/10",
        "passed": true
      },
      {
        "name": "three_state_family_positive_and_prices_1/5",
        "passed": true
      },
      {
        "name": "three_state_family_positive_and_prices_2/5",
        "passed": true
      },
      {
        "name": "three_state_open_range_exact",
        "passed": true
      },
      {
        "name": "three_state_endpoints_not_equivalent",
        "passed": true
      },
      {
        "name": "lower_endpoint_zero_initial_cost",
        "passed": true
      },
      {
        "name": "lower_endpoint_arbitrage_payoffs",
        "passed": true
      },
      {
        "name": "upper_endpoint_zero_initial_cost",
        "passed": true
      },
      {
        "name": "upper_endpoint_arbitrage_payoffs",
        "passed": true
      },
      {
        "name": "augmented_Q_default",
        "passed": true
      },
      {
        "name": "augmented_Q_positive_probability",
        "passed": true
      },
      {
        "name": "augmented_all_assets_priced",
        "passed": true
      },
      {
        "name": "augmented_full_rank",
        "passed": true
      },
      {
        "name": "down_digital_replication",
        "passed": true
      },
      {
        "name": "down_digital_cost",
        "passed": true
      },
      {
        "name": "middle_digital_replication",
        "passed": true
      },
      {
        "name": "middle_digital_cost",
        "passed": true
      },
      {
        "name": "up_digital_replication",
        "passed": true
      },
      {
        "name": "up_digital_cost",
        "passed": true
      },
      {
        "name": "incomplete_null_direction",
        "passed": true
      }
    ],
    "passed": 34,
    "total": 34
  }
};
