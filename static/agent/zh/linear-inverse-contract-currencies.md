# 线性与反向合约：报价、结算与报告币

同时列出报价、数量、结算、抵押与报告币，分开合约损益与钱包资产的价格变化.

Entry: zh-m25 | Node: M25 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《线性与反向合约：报价、结算与报告币》，面向有充分数学背景的高年级本科生至研究生. 先实际读取随包 required_readings 的完整指定单元，记录版本、范围与所支持内容；选择选读分支时，再读取其指定材料. 动态页面换版时保留本文具名版本的身份；缺少原文则寻找正式等价全文，仍缺失时指出该单元.

在入场50K、退出40K或60K的例中，分别计算结算币损益、报告币损益与钱包终值. 改变报告汇率后，将原钱包重估与合约结果分开，保持入场财富的历史换算值. 用保证金模式检验抵押币种；选读论文时先对齐反向头寸方向和计价测度.

先用一项完整推导或分析诊断我的起点，跳过已掌握步骤. 让我先计算或判断，再解释错误与机制，最后改变一个条件检验迁移.

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
      "source_id": "MOD-BYBIT-PNL",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation",
        "verified_access_at": "2026-09-21"
      },
      "version": "updated 2026-08-12 12:24:42",
      "required_unit": {
        "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数."
      },
      "supports": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
      "id": "M25-READ-01",
      "title": "FAQ — Profit and Loss Calculation",
      "authors": [
        "Bybit"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MOD-BYBIT-INVERSE",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ",
        "verified_access_at": "2026-09-21"
      },
      "version": "updated 2026-08-05 14:29:08",
      "required_unit": {
        "locator": "合约symbol、quantity与position value；结算资产、margin modes与抵押/借款说明",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓."
      },
      "supports": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓.",
      "id": "M25-READ-02",
      "title": "FAQ — Inverse Perpetual and Expiry Contracts",
      "authors": [
        "Bybit"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MHIJ-BYBIT-MODES",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account",
        "verified_access_at": "2026-09-21"
      },
      "version": "updated 2026-08-04 13:44:59",
      "required_unit": {
        "locator": "完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价."
      },
      "supports": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.",
      "id": "M25-READ-03",
      "title": "Differences Between the Margin Modes Under the Unified Trading Account",
      "authors": [
        "Bybit"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MOD-PERP-PAPER",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2310.11771v2",
        "verified_access_at": "2026-09-21"
      },
      "version": "arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03",
      "required_unit": {
        "locator": "§4开头的inverse现金、方向与Q_b映射；不要求附录无穷期证明",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射."
      },
      "supports": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
      "branch": "numeraire",
      "id": "M25-READ-04",
      "title": "Perpetual Futures Pricing",
      "authors": [
        "Damien Ackerer",
        "Julien Hugonnier",
        "Urban Jermann"
      ],
      "retrieved_at": "2026-09-21",
      "required_when_selected": true
    }
  ],
  "optional_readings": [
    {
      "source_id": "MOD-PERP-PAPER",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2310.11771v2",
        "verified_access_at": "2026-09-21"
      },
      "version": "arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03",
      "required_unit": {
        "locator": "§4开头的inverse现金、方向与Q_b映射；不要求附录无穷期证明",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射."
      },
      "supports": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
      "branch": "numeraire",
      "id": "M25-READ-04",
      "title": "Perpetual Futures Pricing",
      "authors": [
        "Damien Ackerer",
        "Julien Hugonnier",
        "Urban Jermann"
      ],
      "retrieved_at": "2026-09-21",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "scope": "M25",
    "experiment_ids": [
      "EXP-MHIJ-M25-CURRENCY-01"
    ],
    "groups": {
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
      }
    },
    "attached_frozen_file": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368",
      "reading_scope": "只取本篇及所选分支groups，其他字段不重复内嵌"
    },
    "selection": {
      "default": "main",
      "available": [
        "main",
        "numeraire",
        "all"
      ],
      "chosen": "all"
    }
  },
  "entry_id": "zh-m25",
  "node_id": "M25",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "all",
  "export_scope": "完整本篇，包括计价测度选读；本导出的 required_readings 已含此分支原文. 只学主线可明确选择 main 对应阅读单元.",
  "source_paths": {
    "data/m-hij-final-shared-inputs.json": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static/M25.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M25.html"
  },
  "experiment_ids": [
    "EXP-MHIJ-M25-CURRENCY-01"
  ],
  "required_readings_by_branch": {
    "main": [
      {
        "source_id": "MOD-BYBIT-PNL",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-12 12:24:42",
        "required_unit": {
          "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数."
        },
        "supports": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
        "id": "M25-READ-01",
        "title": "FAQ — Profit and Loss Calculation",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MOD-BYBIT-INVERSE",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-05 14:29:08",
        "required_unit": {
          "locator": "合约symbol、quantity与position value；结算资产、margin modes与抵押/借款说明",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓."
        },
        "supports": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓.",
        "id": "M25-READ-02",
        "title": "FAQ — Inverse Perpetual and Expiry Contracts",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MHIJ-BYBIT-MODES",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-04 13:44:59",
        "required_unit": {
          "locator": "完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价."
        },
        "supports": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.",
        "id": "M25-READ-03",
        "title": "Differences Between the Margin Modes Under the Unified Trading Account",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      }
    ],
    "all": [
      {
        "source_id": "MOD-BYBIT-PNL",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-12 12:24:42",
        "required_unit": {
          "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数."
        },
        "supports": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
        "id": "M25-READ-01",
        "title": "FAQ — Profit and Loss Calculation",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MOD-BYBIT-INVERSE",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-05 14:29:08",
        "required_unit": {
          "locator": "合约symbol、quantity与position value；结算资产、margin modes与抵押/借款说明",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓."
        },
        "supports": "USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓.",
        "id": "M25-READ-02",
        "title": "FAQ — Inverse Perpetual and Expiry Contracts",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MHIJ-BYBIT-MODES",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account",
          "verified_access_at": "2026-09-21"
        },
        "version": "updated 2026-08-04 13:44:59",
        "required_unit": {
          "locator": "完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价."
        },
        "supports": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.",
        "id": "M25-READ-03",
        "title": "Differences Between the Margin Modes Under the Unified Trading Account",
        "authors": [
          "Bybit"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MOD-PERP-PAPER",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://arxiv.org/pdf/2310.11771v2",
          "verified_access_at": "2026-09-21"
        },
        "version": "arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03",
        "required_unit": {
          "locator": "§4开头的inverse现金、方向与Q_b映射；不要求附录无穷期证明",
          "scope": "完整指定单元；不得以目录/摘要替代",
          "purpose": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射."
        },
        "supports": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
        "branch": "numeraire",
        "id": "M25-READ-04",
        "title": "Perpetual Futures Pricing",
        "authors": [
          "Damien Ackerer",
          "Julien Hugonnier",
          "Urban Jermann"
        ],
        "retrieved_at": "2026-09-21",
        "required_when_selected": true
      }
    ]
  }
}
```

## Supplied entry
<a id="m25-purpose"></a>
## 一、报价币、结算币与报告币

上一节算出的8 USDT和0.125mBTC都是资金费，却不是同一个可以直接相加的数. 价格损益也一样：同样叫“做多BTC”，有的合约按USDT计损益，有的以USD表示数量、却把BTC交到账户. 若最后统一报告美元，还需要一次独立换算.

先为两种合约固定报价、数量、结算、抵押和报告币五栏. 合约规则取自Bybit的P&L与反向合约FAQ；价格与钱包数额使用本文教学输入.[^M25-pnl][^M25-inverse]

| 字段 | 线性BTCUSDT例 | 反向BTCUSD例 |
|---|---|---|
| 报价 | USDT/BTC | USD/BTC |
| 合约数量 | BTC | USD合约数量 |
| 损益结算 | USDT | BTC |
| 本例初始钱包 | 5,000 USDT | 0.1 BTC |
| 最终报告币 | USD，另给**报告时**USD/USDT；本例入场固定1 | USD，另给报告时BTC/USD |

报告币只是把结果放到同一尺度观察，不会修改交易所原本应付给你的币种；钱包里持有的资产又可以产生自身的价格变化. 学会这一区别，比记两条公式更重要.

<a id="m25-formulas"></a>
## 二、线性与反向合约的损益单位

线性多头数量为 $q$ BTC，入场和退出报价为 $F_0,F_1$ USDT/BTC，则未计费用的结果是

$$
\Pi_{\rm linear}=q(F_1-F_0)\quad\text{USDT}.
$$

一BTC上涨多少USDT，乘持有的BTC数量即可. 反向多头的数量为 $Q$ USD，按已读Bybit方向约定，结果为

$$
\Pi_{\rm inverse}
=Q\left(\frac1{F_0}-\frac1{F_1}\right)
\quad\text{BTC}.
$$

在后一式中，$1/F$ 的单位是 BTC/USD，乘 $Q$ USD才得到BTC. 价格上涨时，$1/F_1$ 下降，所以这一多头的币本位损益为正；空头则反号. [^M25-pnl]

反向损益为什么不像一条BTC金额的直线？因为固定的是USD合约数量，按不同价格换算的BTC量不同. 若暂时只比较各自结算币下的局部敏感度，线性导数为 $q$，反向导数为 $Q/F_1^2$；这两个导数币种、价格单位不同，不能直接比谁大. 必须先选报告币及转换时点.

<a id="m25-wealth"></a>
## 三、合约损益与钱包价值

设两种合约入场报价均为50K：线性多头0.1 BTC，反向多头5K USD，入场名义额相同. 初始钱包分别为5K USDT和0.1 BTC；按入场时1 USD/USDT及50K USD/BTC换算，初始财富均为5K USD. 退出后按报告时汇率重新计量，入场财富保留历史换算值. 以下忽略交易费、资金费和借款，先计算可存续路径上的损益；[强平机制](https://ou-liu-red-sugar.github.io/zh/notebook/mark-price-collateral-liquidation/)另处理资金约束.

| 退出／报告BTC价格 | 线性损益（USDT） | 反向损益（BTC） | 反向损益报告值（USD） | 线性钱包终值（USD） | 反向钱包终值（USD） |
|---:|---:|---:|---:|---:|---:|
| 40,000 | −1,000 | −0.025 | −1,000 | 4,000 | 3,000 |
| 60,000 | +1,000 | $+1/60$ | +1,000 | 6,000 | 7,000 |

第一行可以完整手算：$5{,}000(1/50{,}000-1/40{,}000)=-0.025$ BTC，钱包还剩0.075 BTC，乘40,000得3,000 USD. **同一行的两个衍生合约报告损益相等，并不使两个钱包的财富相等.** 原本0.1 BTC抵押资产本身又从5,000美元跌到了4,000美元，额外损失1,000美元.

这可以写成一条分解，而不靠口头归因. 设初始币余额为 $B_0$，报告价取 $F_1$，则

$$
\begin{aligned}
W_{I,1}&=(B_0+\Pi_{\rm inverse})F_1,\\
W_{I,1}-B_0F_0
&=B_0(F_1-F_0)+\Pi_{\rm inverse}F_1.
\end{aligned}
$$

右边第一项是原钱包BTC的价值变化，第二项是合约损益的报告值. 当$Q=qF_0$且报告价取$F_1$时，$\Pi_{\rm inverse}F_1=q(F_1-F_0)$，两种合约的美元损益相等.

更进一步，反向钱包终值在这组设定下可写成 $(B_0+Q/F_0)F_1-Q$. 代入 $B_0=0.1,Q/F_0=0.1$，钱包对BTC美元价格的敏感度是0.2，而线性USDT钱包的相应敏感度只有0.1. 所谓入场“等名义额”，只对衍生腿成立；连抵押资产一起看，两个完整账户并不等风险.

<a id="m25-conversion"></a>
## 四、报告币换算

若反向合约仍在40,000退出，但报表稍后用41,000 USD/BTC估值，−0.025 BTC的合约结果显示成−1,025 USD，0.075 BTC的钱包显示为3,075 USD. 币本位已实现损益没有改变，改变的是报告价格. 若你真的在41,000把BTC出售，还应另记实际成交、费用和可能的滑点；不能从一个估值换算直接断言换汇已完成.

线性账户也要遵守同一时点纪律. 仍取40,000退出，合约损益是−1,000 USDT；如果**报告时**1 USDT只值0.98 USD，那么合约损益报告值是−980 USD，4,000 USDT钱包报告值是3,920 USD，但入场财富仍是冻结的5,000 USD，而不是被回写成4,900. 于是
$$
\begin{aligned}
W_1-W_0
&=4{,}000\times0.98-5{,}000\times1\\
&=-1{,}080\ \mathrm{USD}\\
&=5{,}000(0.98-1)+(-1{,}000)\times0.98\\
&=-100-980.
\end{aligned}
$$
第一项是**原有5,000 USDT钱包**从入场1.00到报告时0.98的重估，第二项才是合约−1,000 USDT按报告时汇率折成的−980 USD. 这样改变报告时汇率会改变期末报告值，却不会改写历史入场财富.

数量和价格固定时，杠杆设置改变初始保证金及以保证金为分母的ROI，价格损益保持不变. [^M25-pnl]

<a id="m25-modes"></a>
## 五、结算资产与合资格抵押

上面的两种钱包只是财富比较. 若要把它们放回真实平台，还须先选保证金模式. Bybit UTA的对照表规定，逐仓使用对应合约的结算资产；全仓和组合保证金可以按相应资格把多种抵押资产折成USD价值. 这个选择作用于账户，不是每个交易对可随意独立选一套模式. [^M25-modes]

BTC钱包为逐仓USDT头寸提供资金时，需要先完成资产转换. 在多抵押模式下，还需按资产资格、认可比例及已占用金额计算可用值.

<a id="m25-numeraire"></a>
<details class="reading-optional">
<summary>选读：为什么论文的“反向多头”需要重新映射</summary>

论文的两币模型以 $a$ 为报价币、$b$ 为另一货币，并允许分别以两种现金账户为计价基准. 若 $x_t$ 是一单位$b$的$a$价格，换成$b$计价时用 $x_t^*=1/x_t$. 与计价基准匹配的价格权重也从 $Q_a$ 换为 $Q_b$，而不是把同一个现实概率直接照搬. [^M25-paper]

尤其该论文§4把所称反向多头的价格现金写为 $1/f_{t+1}-1/f_t$；Bybit BTCUSD多头在本篇使用的是 $1/F_0-1/F_1$，方向相反. 比较二者必须先反转所定义的头寸方向，再检查资金费与收付币；只把线性价格取倒数并不能完成这个映射. 钱包计算只需前述有限期现金流，而这条符号纪律用来避免把两份原文中的“long”误作同一个支付.

</details>

<a id="m25-explore"></a>
## 六、合约账与钱包账

<div data-experiment-slot="EXP-MHIJ-M25-CURRENCY-01"></div>

在40K和60K退出价之间切换，可比较结算币损益与美元钱包终值；解除“报告价等于退出价”后，再单独改变报告汇率. 将报告时USD/USDT设为0.98，线性钱包期末值变为3,920 USD，相对初始5K USD的变化分解为−100与−980.

<a id="m25-exercises"></a>
## 七、币种与损益层次检验

**题一：反向数量5,000、入场50,000、退出60,000，$1/60$的单位是什么？**

解析：是BTC. $1/F$ 是BTC/USD，乘5,000 USD才得到这个数. 直接在报表写“赚0.017美元”，或者把5,000当BTC，都会把合约规模改掉.

**题二：40,000退出后按41,000报告，为什么反向合约显示−1,025，而线性仍是−1,000 USDT？**

解析：反向币本位损益−0.025没有变化；报告换算乘41,000才得−1,025. 线性结算USDT，在默认报告时1:1美元假设下仍为−1,000. 若只把**报告时**USD/USDT改成0.98，线性合约报告损益变成−980，但冻结的入场财富仍是5,000 USD；期末钱包3,920 USD，所以总变化是−1,080=−100（原有USDT重估）−980（合约报告损益）. 两条合约的美元结果相等，依赖之前那个特定转换约定.

**题三：两账户初始都值5,000美元，能否把终值4,000和3,000的差全称为反向合约定价更差？**

解析：不能. 差异在本例中来自原0.1BTC钱包的价格变化. 应先把抵押资产收益与合约损益拆开；没有执行价、费用等额外证据，不可归因于交易所报价质量.

**题四：保持数量不变，把杠杆从10倍改成20倍，会把1,000美元价差损益变成2,000吗？BTC又能否直接给任意逐仓USDT仓作保证金？**

解析：两个答案都是否. 前者只改变保证金需求和相应收益率分母；后者先受结算资产模式限制. 扩大头寸数量则会改变损益.

[^M25-pnl]: **Bybit，FAQ — Profit and Loss Calculation**，updated 2026-08-12 12:24:42. [原文](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation). 定位：线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答. 采用范围：合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.

[^M25-inverse]: **Bybit，FAQ — Inverse Perpetual and Expiry Contracts**，updated 2026-08-05 14:29:08. [原文](https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ). 定位：合约symbol、quantity与position value；结算资产、margin modes与抵押/借款说明. 采用范围：USD数量、BTC结算/保证金与账户币种安排；不能将全仓多资产规则套逐仓.

[^M25-modes]: **Bybit，Differences Between the Margin Modes Under the Unified Trading Account**，updated 2026-08-04 13:44:59. [原文](https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account). 定位：完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件. 采用范围：逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.

[^M25-paper]: **Ackerer / Hugonnier / Jermann，Perpetual Futures Pricing**，arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03. [原文](https://arxiv.org/pdf/2310.11771v2). 定位：离散时间§2完整模型；§3一周期现金、有限递推及终端余项；无泡沫/可积性只作边界；§4开头至逆向现金与Q_b为M25选读. 采用范围：两币种现金账户、风险中性条件现金与有限递推. inverse头寸方向见正文映射.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>

## Additional teaching material
### 交互静态结果

<div class="inline-experiment"><a href="https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M25-CURRENCY-01">打开这一实验</a><div class="table-wrap"><table><thead><tr><th scope="col">退出价</th><th scope="col">线性损益USDT</th><th scope="col">反向损益BTC</th><th scope="col">反向报告损益USD</th><th scope="col">线性钱包USD</th><th scope="col">反向钱包USD</th></tr></thead><tbody><tr><td>40,000</td><td>-1,000.00</td><td>-0.02500000</td><td>-1,000.00</td><td>4,000.00</td><td>3,000.00</td></tr><tr><td>60,000</td><td>1,000.00</td><td>0.01666667</td><td>1,000.00</td><td>6,000.00</td><td>7,000.00</td></tr></tbody></table></div><p>默认报告价等于退出价、报告时USD/USDT=1；冻结入场USD/USDT也为1，费用与资金费为0. 反向原有0.1 BTC本身也涨跌；改报告价只改变报告换算，不回写入场5,000 USD.</p><div class="table-wrap"><table><thead><tr><th scope="col">报告时USD/USDT=.98变式</th><th scope="col">USD</th></tr></thead><tbody><tr><td>入场线性钱包报告值（冻结入场1.00）</td><td>5,000.00</td></tr><tr><td>原有5,000 USDT汇率重估</td><td>−100.00</td></tr><tr><td>合约−1,000 USDT按. 98报告</td><td>−980.00</td></tr><tr><td>线性钱包终值4,000 USDT×.98</td><td>3,920.00</td></tr><tr><td>相对入场财富变化</td><td>−1,080.00</td></tr></tbody></table></div><p>逐仓采用对应结算资产；全仓与组合按资格及认可值计入抵押.</p></div>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MHIJ-M25-CURRENCY-01",
    "title": "把合约结果和钱包财富分开",
    "anchor": "m25-explore",
    "description": "50,000入场；0.1 BTC线性／5,000 USD反向；入场钱包均按冻结入场换算记5,000 USD. BTC与USDT控件只改变报告时估值，不回写入场财富.",
    "owner": "M25",
    "data_identity": "Teaching prices/balances under current linear/inverse contract formula conventions; no live quotes, funding or fees.",
    "source_ids": [
      "MOD-BYBIT-PNL",
      "MOD-BYBIT-INVERSE",
      "MHIJ-BYBIT-MODES"
    ],
    "units": {
      "linear_quote": "USDT/BTC",
      "linear_quantity": "BTC",
      "linear_settlement": "USDT",
      "inverse_quote": "USD/BTC",
      "inverse_quantity": "USD",
      "inverse_settlement": "BTC",
      "report_currency": "USD"
    },
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
    "outputs": [
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
    "formulas": {
      "linear_pnl": "Pi_linear_USDT = q_BTC * (F1 - F0)",
      "inverse_pnl": "Pi_inverse_BTC = Q_USD * (1/F0 - 1/F1)",
      "inverse_report_pnl": "Pi_inverse_USD = Pi_inverse_BTC * report_BTCUSD",
      "inverse_wallet": "wallet_USD = (initial_BTC + Pi_inverse_BTC) * report_BTCUSD"
    },
    "branch_boundaries": {
      "reporting": "Equality of report-currency derivative P&L depends on the stated conversion timing/rate; wallet wealth remains different because collateral is different.",
      "leverage": "Fixed contract quantity price P&L is not multiplied by leverage; leverage changes margin/trigger conditions.",
      "margin_mode_compatibility": {
        "isolated": "Single Asset Mode; only the settlement asset can be used for the corresponding contract.",
        "cross": "Multiple-Assets Mode may recognize eligible collateral after USD conversion.",
        "portfolio": "Multiple-Assets Mode may recognize eligible collateral, subject to portfolio risk rules."
      },
      "collateral_selector": "M25 default is a wallet/reporting comparison, not a platform collateral-eligibility simulator. If collateral eligibility is shown, it must be constrained by the selected compatible margin mode."
    },
    "static_equivalent_html": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">退出价</th><th scope=\"col\">线性损益USDT</th><th scope=\"col\">反向损益BTC</th><th scope=\"col\">反向报告损益USD</th><th scope=\"col\">线性钱包USD</th><th scope=\"col\">反向钱包USD</th></tr></thead><tbody><tr><td>40,000</td><td>-1,000.00</td><td>-0.02500000</td><td>-1,000.00</td><td>4,000.00</td><td>3,000.00</td></tr><tr><td>60,000</td><td>1,000.00</td><td>0.01666667</td><td>1,000.00</td><td>6,000.00</td><td>7,000.00</td></tr></tbody></table></div><p>默认报告价等于退出价、报告时USD/USDT=1；冻结入场USD/USDT也为1，费用与资金费为0. 反向原有0.1 BTC本身也涨跌；改报告价只改变报告换算，不回写入场5,000 USD.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">报告时USD/USDT=.98变式</th><th scope=\"col\">USD</th></tr></thead><tbody><tr><td>入场线性钱包报告值（冻结入场1.00）</td><td>5,000.00</td></tr><tr><td>原有5,000 USDT汇率重估</td><td>−100.00</td></tr><tr><td>合约−1,000 USDT按. 98报告</td><td>−980.00</td></tr><tr><td>线性钱包终值4,000 USDT×.98</td><td>3,920.00</td></tr><tr><td>相对入场财富变化</td><td>−1,080.00</td></tr></tbody></table></div><p>逐仓只接受对应结算资产，全仓/组合的多抵押还需资格与认可值，不能只换钱包名称.</p>",
    "frozen_reference": {
      "file": "data/m-hij-final-shared-inputs.json",
      "json_pointer": "/experiments/EXP-MHIJ-M25-CURRENCY-01",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368"
    },
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
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M25.html",
    "implementation": {
      "html": "/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M25-CURRENCY-01",
      "engine": "/notebook/labs/m-hij/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Differences Between the Margin Modes Under the Unified Trading Account](https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account): 逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.
- [FAQ — Inverse Perpetual and Expiry Contracts](https://www.bybit.com/en/help-center/article/Inverse-Contract-FAQ): 反向合约以 USD 表示数量，以 BTC 结算并计保证金；账户规则按逐仓、全仓等具体模式读取.
- [FAQ — Profit and Loss Calculation](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation): 线性与反向合约按各自单位计算价格损益，已实现结果计入相应费用. 固定头寸数量时，杠杆改变保证金和ROI分母，价格损益仍由头寸及价差决定.
- [Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2): 永续合约的两币种现金账户、价格变化与资金费现金流，风险中性条件下的有限递推及反向合约的计价方向.

## Content relations
```json
[
  {
    "from": "zh-m25",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m25",
    "relation": "requires",
    "to": "zh-m24",
    "required_competence": "掌握永续合约价格现金和资金费是不同项目，不要求读完定价分支",
    "reason": "依赖具体能力，不要求机械完成所有前序"
  },
  {
    "from": "zh-m25",
    "relation": "uses_method",
    "to": "zh-m09",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "m25-explore",
    "relation": "illustrated_by",
    "to": "EXP-MHIJ-M25-CURRENCY-01",
    "reason": "冻结输入上的可复算教学实验及静态等价",
    "at_section": "m25-explore"
  },
  {
    "from": "m25-purpose",
    "relation": "supported_by",
    "to": "MOD-BYBIT-PNL",
    "reason": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
    "scope": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "at_section": "m25-purpose"
  },
  {
    "from": "m25-purpose",
    "relation": "supported_by",
    "to": "MOD-BYBIT-INVERSE",
    "reason": "USD合约数量、BTC结算与保证金、各账户模式的币种安排.",
    "locator": "合约symbol、quantity与position value；结算资产、margin modes与抵押/借款说明",
    "scope": "USD合约数量、BTC结算与保证金、各账户模式的币种安排.",
    "at_section": "m25-purpose"
  },
  {
    "from": "m25-formulas",
    "relation": "supported_by",
    "to": "MOD-BYBIT-PNL",
    "reason": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
    "scope": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "at_section": "m25-formulas"
  },
  {
    "from": "m25-conversion",
    "relation": "supported_by",
    "to": "MOD-BYBIT-PNL",
    "reason": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "locator": "线性与反向多空P&L、未实现/已实现、显示价格、费用与杠杆/ROI问答",
    "scope": "合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.",
    "at_section": "m25-conversion"
  },
  {
    "from": "m25-modes",
    "relation": "supported_by",
    "to": "MHIJ-BYBIT-MODES",
    "reason": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.",
    "locator": "完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件",
    "scope": "逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.",
    "at_section": "m25-modes"
  },
  {
    "from": "m25-numeraire",
    "relation": "supported_by",
    "to": "MOD-PERP-PAPER",
    "reason": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "locator": "离散时间§2完整模型；§3一周期现金、有限递推及终端余项；无泡沫/可积性只作边界；§4开头至逆向现金与Q_b为M25选读",
    "scope": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "at_section": "m25-numeraire"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 12/17
分解合约损益、抵押品重估与汇率变化，解释等名义额为何不等账户风险.
币种明确后，再读标记价、保证金模式与清算过程.
Next: [标记价格、抵押品与强平：触发规则与余额传播](https://ou-liu-red-sugar.github.io/zh/notebook/mark-price-collateral-liquidation/)
