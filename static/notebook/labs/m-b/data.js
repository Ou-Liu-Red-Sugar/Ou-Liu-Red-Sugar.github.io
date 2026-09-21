/* Generated from shared_inputs.json. All adjustable financial values are synthetic. */
window.MB_DATA = {
  "schema_version": "2026-09-21-MB-review-v2",
  "currency": "USD",
  "identities": {
    "reported": "原始披露，不是预测",
    "synthetic": "教学设定，不是行情或真实账户",
    "official_example": "机构教学例，不等于特定产品参数"
  },
  "rights": {
    "alphabet_A": {
      "label": "Alphabet A / GOOGL",
      "votes": 1,
      "source_id": "MBC-02",
      "voting_note": "一般事项每股1票；法律或类别事项按原条款",
      "dividend_note": "按董事会决定及适用优先权，每股相应参与分配",
      "liquidation_note": "债务和适用优先清算权之后参与剩余分配",
      "conversion_note": "A不可转换为其他类别"
    },
    "alphabet_B": {
      "label": "Alphabet B",
      "votes": 10,
      "source_id": "MBC-02",
      "voting_note": "一般事项每股10票",
      "dividend_note": "相应每股经济分配权与A相同",
      "liquidation_note": "按条款参与剩余分配",
      "conversion_note": "持有人可按1:1转A；转让一般触发转换，但有条件的创始人、税务/遗产及实体分配等例外；不能认定任何转让都转换"
    },
    "alphabet_C": {
      "label": "Alphabet C / GOOG",
      "votes": 0,
      "source_id": "MBC-02",
      "voting_note": "通常无表决权，法律要求的情形除外",
      "dividend_note": "按条款享有相应每股经济分配权",
      "liquidation_note": "相关清算分配或其登记日两者较早发生前，先按1:1转A",
      "conversion_note": "一般不可转换；上述清算转换除外"
    },
    "apple": {
      "label": "Apple 普通股 / AAPL",
      "votes": 1,
      "source_id": "MBC-03",
      "voting_note": "一股一票；无累积投票权",
      "dividend_note": "董事会从依法可分配资金中酌情宣派",
      "liquidation_note": "按条款参与剩余分配",
      "conversion_note": "无优先认购、转换或约定赎回权；仅为普通股类别，不代表只有一种证券"
    }
  },
  "alphabet_2025": {
    "identity": "reported",
    "period": "2025",
    "source_id": "MBC-01",
    "share_unit": "million_shares",
    "amount_unit": "USD_million",
    "shares_start": 12211,
    "shares_issued": 117,
    "shares_repurchase": 240,
    "shares_end": 12088,
    "class_a_repurchase_shares": 37,
    "class_c_repurchase_shares": 203,
    "class_a_repurchase_amount": 6501,
    "class_c_repurchase_amount": 38897,
    "repurchase_cash_paid": 45709,
    "includes_unsettled": true,
    "net_cash_difference_not_fully_reconciled": true,
    "repurchase_note11_amount": 45398,
    "note11_share_footnote": "shares repurchased include any unsettled repurchases",
    "repurchase_cash_flow_payment_identity": "Consolidated Statements of Cash Flows financing activity",
    "note11_amount_not_labeled_generic_recognition_measure": true
  },
  "capital_default": {
    "identity": "synthetic",
    "V": 1000000,
    "C": 150000,
    "N": 100000,
    "q": 10000,
    "p": 8,
    "d": 0.21,
    "h": 1000,
    "action": "repurchase"
  },
  "capital_tables": {
    "issue_q": 20000,
    "repurchase_q": 10000,
    "prices": [
      8,
      10,
      12
    ],
    "distribution_d": 0.21,
    "distribution_h": 10,
    "cash_stress": 60000
  },
  "vti": {
    "identity": "reported",
    "source_ids": [
      "MBC-04",
      "MBC-05"
    ],
    "ticker": "VTI",
    "base_date": "2026-04-28",
    "rename_date": "2026-07-29",
    "base_fund": "Vanguard Total Stock Market Index Fund",
    "new_fund": "Vanguard Morningstar Total Stock Market Index Fund",
    "base_etf": "Vanguard Total Stock Market ETF",
    "new_etf": "Vanguard Morningstar Total Stock Market ETF",
    "base_index": "CRSP US Total Market Index",
    "new_index": "Morningstar US Total Market Index",
    "change_type": "fund/ETF-class/target-index name changes",
    "objective_strategy_policy_unchanged": true,
    "annual_expense_ratio": 0.0003,
    "official_example": {
      "initial": 10000,
      "assumed_annual_return": 0.05,
      "one_year_cost": 3
    },
    "real_creation_unit_size": null,
    "real_holdings_date": null,
    "real_basket": null,
    "nav_scope": "ETF份额类别；本包没有计算真实VTI NAV",
    "legal_fund_entity_change_not_inferred": true,
    "benchmark_methodology_change_not_inferred_from_supplement": true,
    "holdings_rebalance_not_inferred_from_supplement": true
  },
  "fund": {
    "identity": "synthetic",
    "fund_id": "SIM-MB-SINGLE",
    "asset_scope": "single-class-A",
    "share_scope": "single-class-A",
    "asset_time": "teaching-t0",
    "share_time": "teaching-t0",
    "assets": 1010000,
    "liabilities": 5000,
    "shares": 10000,
    "holdings": [
      {
        "label": "证券甲",
        "quantity": 4000,
        "price": 100
      },
      {
        "label": "证券乙",
        "quantity": 2000,
        "price": 200
      },
      {
        "label": "现金",
        "amount": 210000
      }
    ],
    "q_create": 50000,
    "q_redeem": 50000,
    "distribution_per_share": 2,
    "distribution_cash_available": 210000
  },
  "ap": {
    "identity": "synthetic",
    "unit_identity": "50000份为SEC通用教学例，不是VTI规格",
    "unit_size": 50000,
    "blocks": 1,
    "cash": 6000000,
    "other_cost_per_share": 0.12,
    "etf_bid_depth": 50000,
    "etf_ask_depth": 50000,
    "basket_buy_capacity": 50000,
    "basket_sell_capacity": 50000,
    "authorized": true,
    "window_open": true,
    "synchronized": true,
    "sequence": "先买入并预留费用，再申赎，再卖出；所有报价在此教学周期有效；不借款、不卖空、不提前使用卖出款",
    "scenarios": {
      "premium": {
        "label": "溢价快照 / 申购",
        "side": "create",
        "etf_bid": 100.73,
        "etf_ask": 100.77,
        "basket_bid": 100.46,
        "basket_ask": 100.54,
        "fund_stage": "initial"
      },
      "discount": {
        "label": "折价快照 / 赎回",
        "side": "redeem",
        "etf_bid": 100.23,
        "etf_ask": 100.27,
        "basket_bid": 100.46,
        "basket_ask": 100.54,
        "fund_stage": "after_creation"
      },
      "wide": {
        "label": "仍有中间价溢价 / 宽价差",
        "side": "create",
        "etf_bid": 100.55,
        "etf_ask": 100.95,
        "basket_bid": 100.46,
        "basket_ask": 100.54,
        "fund_stage": "initial"
      }
    },
    "primary_market_branch": "basket/in-kind teaching branch",
    "cash_creation_redemption": "out_of_scope_not_modeled",
    "custom_basket": "out_of_scope_not_modeled"
  },
  "research": {
    "source_id": "MBC-08",
    "start": "2018-01",
    "end": "2022-10",
    "etfs": 128,
    "equity": 50,
    "bond": 78,
    "scope": "主要在LSE交易的实物ETF；非VTI实证",
    "adoption": "研究问题与数据结构，不采用未复现模型/回归结果"
  }
};
