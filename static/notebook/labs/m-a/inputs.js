/* Generated from canonical M-A entry inputs; edit entry data and regenerate. */
(function(root){const data={
  "version": "2026-09-21-review-v2",
  "canonical_entry_ids": [
    "zh-financial-claims",
    "zh-m02",
    "zh-m03",
    "zh-m04"
  ],
  "book": {
    "unit": "USD per share; quantities in shares",
    "teaching_data": true,
    "bids": [
      {
        "price": "99.98",
        "quantity": 200
      }
    ],
    "asks": [
      {
        "price": "100.02",
        "quantity": 100
      },
      {
        "price": "100.05",
        "quantity": 200
      },
      {
        "price": "100.10",
        "quantity": 300
      }
    ],
    "depth_scope": "visible_excerpt",
    "timestamp": "teaching t0",
    "mid": "100",
    "default_side": "buy",
    "default_quantity": 350,
    "default_fee_per_share": "0.01",
    "bounds": {
      "quantity": [
        0,
        1000
      ],
      "fee_per_share": [
        "0",
        "0.10"
      ],
      "limit": [
        "99",
        "101"
      ]
    }
  },
  "collateral": {
    "market_value": 10000,
    "default_haircut": "0.10",
    "default_net_debit": 8000,
    "formula": "market_value * (1-haircut) - net_debit",
    "original_example_source": "MA-DTC",
    "variants": [
      "0.20",
      "0.25"
    ]
  },
  "mes": {
    "real_contract_multiplier_usd": 5,
    "contracts": 2,
    "teaching_prices": [
      6000,
      5960,
      6010
    ],
    "teaching_initial_margin": 3000,
    "teaching_maintenance_margin": 2700,
    "default_buffer": 250,
    "default_allow_external_topup": false,
    "buffer_bounds": [
      0,
      1000
    ],
    "rule": "When balance falls below maintenance, restore to initial; stop if cash is insufficient unless explicit topup is selected.",
    "notional_usd_at_initial_price": "60000"
  },
  "rights": {
    "bill": {
      "cusip": "912797RD1",
      "issue_date": "2025-09-23",
      "maturity_date": "2025-10-21",
      "auction_quote_millionths": 99685778,
      "synthetic_quote_millionths": 99800000,
      "auction_holding_days": 28,
      "default_face": 10000,
      "face_bounds": [
        100,
        100000
      ],
      "face_step": 100
    },
    "alphabet": {
      "disclosure_period": "2025-12-31",
      "default_shares": 1,
      "share_bounds": [
        1,
        1000
      ]
    },
    "spx": {
      "multiplier": 100,
      "default_count": 1,
      "default_premium_points": "4.00",
      "count_bounds": [
        1,
        100
      ],
      "premium_bounds": [
        "0.10",
        "100.00"
      ],
      "premium_step": "0.10"
    },
    "identity": "Real rights/terms with explicitly synthetic size and resale/premium inputs"
  },
  "securities": {
    "trade_dates": [
      "2024-05-24",
      "2024-05-28"
    ],
    "default_trade_date": "2024-05-28",
    "business_days": [
      "2024-05-24",
      "2024-05-28",
      "2024-05-29",
      "2024-05-30"
    ],
    "lags": {
      "2024-05-24": 2,
      "2024-05-28": 1
    },
    "holiday": "2024-05-27",
    "quantity": 100,
    "price": 100,
    "default_stage": "executed",
    "identity": "Historical US standard settlement dates; hypothetical trade and selectable completion state"
  },
  "flows": {
    "bill_case_id": "CASE-MA-TBILL-912797RD1",
    "default_face": 10000,
    "face_bounds": [
      100,
      100000
    ],
    "face_step": 100,
    "steps": [
      "issue",
      "transfer",
      "maturity"
    ],
    "channels": [
      "commercial",
      "treasurydirect_new"
    ],
    "default_channel": "commercial",
    "default_step": "issue",
    "treasurydirect_new_holding_days": 45,
    "channel_rule_source_id": "MA-TB-SELL",
    "channel_rule_access_at": "2026-09-21",
    "channel_rule_identity": "Current operating rules paired with a historical security for teaching; not a 2025 actual execution replay",
    "ipo_views": [
      "prospectus_base",
      "completed_close"
    ],
    "ipo_default_view": "prospectus_base",
    "ipo_default_component": "issuer"
  },
  "ipo": {
    "CASE-MA-REDDIT-IPO-20240320": {
      "observed": {
        "issuer_shares_base": 15276527,
        "selling_holder_shares": 6723473,
        "public_price_usd": "34.00",
        "underwriting_discount_per_share_usd": "1.70"
      },
      "source_ids": [
        "REDDIT-IPO"
      ]
    },
    "CASE-MA-REDDIT-IPO-20240325-CLOSE": {
      "observed": {
        "total_shares_completed": 25300000,
        "issuer_shares_completed": 18576527,
        "selling_holder_shares": 6723473,
        "additional_option_shares": 3300000,
        "issuer_gross_proceeds_usd": "631601918"
      },
      "source_ids": [
        "REDDIT-CLOSE"
      ]
    }
  }
};if(typeof module==="object"&&module.exports)module.exports=data;else root.MADATA=data;})(globalThis);
