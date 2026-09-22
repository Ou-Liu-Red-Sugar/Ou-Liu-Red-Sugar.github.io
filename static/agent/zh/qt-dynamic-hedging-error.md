# 离散动态对冲：从现金账到误差分布

从期权delta建立股票与现金账户，逐步计算借款和复制误差，再比较调仓频率、交易费用与资金约束.

Entry: zh-qt24 | Node: QT24 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 进入实质讲解前，先实际读取 agent_packet.required_readings_by_branch 中本次启用分支的全部必读单元，并在 runtime_reading_log 记录题名、版本、定位和实际取得的支持内容；需要定价分支时再读取 QGHI-MIT-BS13 指定单元，缺失必读正文时先取得等价原件，不凭印象补足. 主线从 short call 的权利金入账开始，让读者用 delta 把期权敞口转换成股票目标，逐现金事件重建 C_k、成交费用、借款峰值和终点误差 ε；随后保持共同随机路径，比较调仓频率与半价差对 RMSE、误差分布和配对平方误差的影响. 再把借款额度作为约束变式，并用 XSP 条款诊断模型向真实合约迁移时仍缺哪些 对冲工具、敞口转换、基差、成本和结算输入. 诊断理解时优先要求读者完成一段现金递推或解释一组配对结果；已掌握步骤直接继承. 选择定价分支后，用 Gaussian 积分、PDE、Itô 公式和自融资条件完整证明 V(t,s) 及 Delta，并说明连续复制中的现金利息与主线离散误差的关系. 最后用改变费用、额度或对冲工具条件的任务检验迁移.

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
      "source_id": "QGHI-CBOE-XSP",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications"
      },
      "required_unit": {
        "locator": "Underlying、Multiplier、Exercise Style、Settlement of Option Exercise",
        "scope": "完整相关合约条款",
        "purpose": "核对仅是模型接口，不作真实回测"
      },
      "supports": "SPX/10 指数、100 美元乘数、欧式与下一营业日现金交付；不提供真实历史报价、可买卖指数股或券商入账秒.",
      "title": "Mini-SPX Index Options Contract Specifications",
      "authors": [
        "Cboe"
      ],
      "version": "Official current page accessed 2026-09-21, not historical rules snapshot",
      "fallback_source_ids": []
    },
    {
      "source_id": "QGHI-MIT-BS13",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf"
      },
      "required_unit": {
        "locator": "Slides 13–22",
        "scope": "call、PDE、复制背景完整单元",
        "purpose": "仅定价推导分支启用；忽略 slide16 错现金简述，读本篇完整推导"
      },
      "supports": "call 公式与复制/PDE背景；不采用 slide16 将再平衡现金误说成确定过程的简述，完整 Gaussian/PDE/自融资核算在 QT24 定价分支.",
      "branch": "pricing",
      "title": "Lecture 19: Risk Neutral Pricing / Black–Scholes Formula",
      "authors": [
        "Vasily Strela",
        "MIT"
      ],
      "version": "Fall 2013",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "QTDE-MARKOWITZ",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf"
      },
      "required_unit": {
        "locator": "§2.1–2.4、§3.1、§3.4–3.5、§4.1–4.3",
        "scope": "现金、交易成本和约束完整采用单元",
        "purpose": "仅成本/约束拓展时启用，不新增实盘结论"
      },
      "title": "Markowitz Portfolio Construction at Seventy",
      "authors": [
        "Stephen Boyd",
        "Kasper Johansson",
        "Ronald Kahn",
        "Philipp Schiele",
        "Thomas Schmelzer"
      ],
      "version": "manuscript January 5, 2024; journal July 2024 separately identified",
      "fallback_source_ids": []
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "主线只需现金递推、概率与均方误差；定价分支调用 QT17.",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读.",
    "attachments": [
      {
        "title": "本篇完整静态阅读、全部题解与证明",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT24.html",
        "kind": "html"
      },
      {
        "title": "本篇同源 Markdown",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT24.md",
        "kind": "markdown"
      },
      {
        "title": "hedge-errors.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/hedge-errors.csv",
        "kind": "csv",
        "bytes": 1974784
      },
      {
        "title": "hedge-histograms.json",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/hedge-histograms.json",
        "kind": "json",
        "bytes": 4957
      },
      {
        "title": "default-first-path-ledger.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/default-first-path-ledger.csv",
        "kind": "csv",
        "bytes": 4554
      },
      {
        "title": "hand-path-ledger.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/hand-path-ledger.csv",
        "kind": "csv",
        "bytes": 1093
      },
      {
        "title": "reproduce.py",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/compute/reproduce.py",
        "kind": "py",
        "bytes": 10867
      },
      {
        "title": "完整实际结果及指定单元",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/hedge",
          "/paired",
          "/hand",
          "/pricing"
        ]
      },
      {
        "title": "四个实验的唯一冻结定义",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/qt-ghi-shared-experiments.json",
        "kind": "json",
        "json_pointer": "/experiments/3",
        "experiment_id": "EXP-HEDGE-01"
      },
      {
        "title": "8192×256 共用正态数组",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/shared-normal-array.npz",
        "kind": "npz",
        "bytes": 16118323
      },
      {
        "title": "8192×12 全部分布数组",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/hedge-errors.npz",
        "kind": "npz",
        "bytes": 744411
      },
      {
        "title": "12 种设计的同一首路径完整账本",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/first-path-ledgers.json",
        "kind": "json",
        "bytes": 670957
      },
      {
        "title": "257 点共用首路径",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/common-first-path.csv",
        "kind": "csv",
        "bytes": 23281
      }
    ],
    "frozen": {
      "contract": {
        "position": "short_one_model_european_call",
        "S0": 100,
        "K": 100,
        "multiplier": 100,
        "sigma": 0.2,
        "T_years": 0.0821917808219178,
        "T_exact": "30/365",
        "r_lend_equals_borrow": 0.03,
        "rate_convention": "annual continuously compounded",
        "dividend_yield": 0,
        "underlying_identity": "Hypothetical tradable GBM asset; not XSP index shares.",
        "measure": "Q model with drift r"
      },
      "path_recipe": {
        "shared_normal_array_with": "EXP-QT15-17-DIFFUSION-01",
        "normalized_clock": "u=j/256",
        "hedge_clock": "t=(30/365)*u",
        "hedge_brownian_driver": "sqrt(30/365)*W_u",
        "price": "100*exp((r-sigma^2/2)*t+sigma*sqrt(T)*W_u)",
        "nested_intervals": [
          4,
          16,
          64,
          256
        ],
        "pair_by": "Identical path index within the shared normal array.",
        "meaning": "Common random numbers and deterministic time scaling, not a change-of-measure theorem."
      },
      "default_display": {
        "intervals": 16,
        "half_spread_bps": 5
      },
      "comparison_grid": {
        "intervals": [
          4,
          16,
          64,
          256
        ],
        "half_spread_bps": [
          0,
          5,
          20
        ]
      },
      "initial_model_price_per_unit": 2.409581446079464,
      "initial_premium_dollars": 240.95814460794642,
      "holding_rule": "After observation/fill at t_k, q_k=100*Phi(d1) serves (t_k,t_(k+1)]; at T, q_n=0.",
      "event_order": [
        "At inception receive model premium with q=0.",
        "For k>0 accrue previous cash at exp(r*dt).",
        "Observe S_k and compute target using time-k information.",
        "Trade dq at model mid plus/minus half-spread.",
        "Subtract c*S_k*abs(dq) from cash.",
        "At T flatten all shares, including closing spread.",
        "Pay model cash payoff at the same T."
      ],
      "cash_recursion": "C_k=C_(k-1)*exp(r*dt_k)-S_k*(q_k-q_(k-1))-c*S_k*abs(q_k-q_(k-1))",
      "model_assumptions": [
        "fractional shares",
        "unlimited symmetric borrowing and lending",
        "no margin constraint",
        "no dividends",
        "observation then same-grid assumed fill",
        "no external funding after inception",
        "half-spread is an assumed one-way cost, not an observed quote"
      ],
      "error_definition": "Cash after terminal hedge liquidation minus call payoff; dollars, not a return rate."
    },
    "default_outputs": {
      "design": "n16_c5",
      "intervals": 16,
      "half_spread_bps": 5,
      "n": 8192,
      "mean": -11.025472701825556,
      "sample_sd": 48.5403947822721,
      "mean_mc_se": 0.5363006611252611,
      "mse_to_zero": 2477.443355518406,
      "mse_mc_se": 51.24665443833317,
      "q05": -92.6979375973376,
      "q95": 67.19023591443182,
      "rmse": 49.77392244457338,
      "mean_nominal_cost": 11.382854902867193,
      "mean_terminal_cost": 11.39685202252775,
      "cash_balance_max_residual": 2.6666446828471635e-12,
      "cost_identity_max_residual": 1.1883827255587676e-11
    },
    "hand_path": {
      "prices": [
        100,
        102,
        101,
        104
      ],
      "ledger": [
        {
          "step": 0,
          "time_years": 0.0,
          "model_mid": 100.0,
          "target_shares": 52.85688375454997,
          "shares_before": 0.0,
          "filled_shares": 52.85688375454997,
          "assumed_fill_price": 100.05,
          "cash_before_interest": 240.95814460794642,
          "interest": 0.0,
          "cash_before_trade": 240.95814460794642,
          "half_spread_cost": 2.6428441877274986,
          "cash_after_trade": -5047.373075034779,
          "shares_after": 52.85688375454997,
          "payoff": 0.0,
          "cash_after_payoff": -5047.373075034779,
          "external_flow": 0.0
        },
        {
          "step": 1,
          "time_years": 0.0273972602739726,
          "model_mid": 102.0,
          "target_shares": 68.49211431927395,
          "shares_before": 52.85688375454997,
          "filled_shares": 15.635230564723983,
          "assumed_fill_price": 102.05099999999999,
          "cash_before_interest": -5047.373075034779,
          "interest": -4.150231155904294,
          "cash_before_trade": -5051.523306190683,
          "half_spread_cost": 0.7973967588009232,
          "cash_after_trade": -6647.11422055133,
          "shares_after": 68.49211431927395,
          "payoff": 0.0,
          "cash_after_payoff": -6647.11422055133,
          "external_flow": 0.0
        },
        {
          "step": 2,
          "time_years": 0.0547945205479452,
          "model_mid": 101.0,
          "target_shares": 63.380801897059655,
          "shares_before": 68.49211431927395,
          "filled_shares": -5.111312422214297,
          "assumed_fill_price": 100.9495,
          "cash_before_interest": -6647.11422055133,
          "interest": -5.46562739168985,
          "cash_before_trade": -6652.57984794302,
          "half_spread_cost": 0.258121277321822,
          "cash_after_trade": -6136.595414576697,
          "shares_after": 63.380801897059655,
          "payoff": 0.0,
          "cash_after_payoff": -6136.595414576697,
          "external_flow": 0.0
        },
        {
          "step": 3,
          "time_years": 0.0821917808219178,
          "model_mid": 104.0,
          "target_shares": 0.0,
          "shares_before": 63.380801897059655,
          "filled_shares": -63.380801897059655,
          "assumed_fill_price": 103.94800000000001,
          "cash_before_interest": -6136.595414576697,
          "interest": -5.045850406169848,
          "cash_before_trade": -6141.641264982867,
          "half_spread_cost": 3.2958016986471024,
          "cash_after_trade": 446.6663306126902,
          "shares_after": 0.0,
          "payoff": 400.0,
          "cash_after_payoff": 46.66633061269022,
          "external_flow": 0.0
        }
      ],
      "borrowing_metrics": {
        "max_borrowing_after_trade": 6647.11422055133,
        "max_borrowing_over_cash_events": 6652.57984794302,
        "peak_over_cash_events_step": 2,
        "peak_event": "after interest before trade",
        "borrowing_limit_5000_feasible": false,
        "borrowing_limit_5000_rejection_step": 0
      }
    },
    "full_arrays_are_external": true,
    "reproduction": {
      "instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/README.md",
      "code": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/compute/reproduce.py",
      "array_policy": "全数组为实际复算附件；教学先读当前完整账本及所选设计结果. NPZ需实际用数组工具读取，不由浏览器另抽随机数."
    }
  },
  "required_readings_by_branch": {
    "ledger": [
      {
        "source_id": "QGHI-CBOE-XSP",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications"
        },
        "required_unit": {
          "locator": "Underlying、Multiplier、Exercise Style、Settlement of Option Exercise",
          "scope": "完整相关合约条款",
          "purpose": "核对仅是模型接口，不作真实回测"
        },
        "supports": "SPX/10 指数、100 美元乘数、欧式与下一营业日现金交付；不提供真实历史报价、可买卖指数股或券商入账秒.",
        "title": "Mini-SPX Index Options Contract Specifications",
        "authors": [
          "Cboe"
        ],
        "version": "Official current page accessed 2026-09-21, not historical rules snapshot",
        "fallback_source_ids": []
      }
    ],
    "pricing": [
      {
        "source_id": "QGHI-CBOE-XSP",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications"
        },
        "required_unit": {
          "locator": "Underlying、Multiplier、Exercise Style、Settlement of Option Exercise",
          "scope": "完整相关合约条款",
          "purpose": "核对仅是模型接口，不作真实回测"
        },
        "supports": "SPX/10 指数、100 美元乘数、欧式与下一营业日现金交付；不提供真实历史报价、可买卖指数股或券商入账秒.",
        "title": "Mini-SPX Index Options Contract Specifications",
        "authors": [
          "Cboe"
        ],
        "version": "Official current page accessed 2026-09-21, not historical rules snapshot",
        "fallback_source_ids": []
      },
      {
        "source_id": "QGHI-MIT-BS13",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf"
        },
        "required_unit": {
          "locator": "Slides 13–22",
          "scope": "call、PDE、复制背景完整单元",
          "purpose": "仅定价推导分支启用；忽略 slide16 错现金简述，读本篇完整推导"
        },
        "supports": "call 公式与复制/PDE背景；不采用 slide16 将再平衡现金误说成确定过程的简述，完整 Gaussian/PDE/自融资核算在 QT24 定价分支.",
        "branch": "pricing",
        "title": "Lecture 19: Risk Neutral Pricing / Black–Scholes Formula",
        "authors": [
          "Vasily Strela",
          "MIT"
        ],
        "version": "Fall 2013",
        "fallback_source_ids": []
      }
    ]
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 进入实质讲解前，先实际读取 agent_packet.required_readings_by_branch 中本次启用分支的全部必读单元，并在 runtime_reading_log 记录题名、版本、定位和实际取得的支持内容；需要定价分支时再读取 QGHI-MIT-BS13 指定单元，缺失必读正文时先取得等价原件，不凭印象补足. 主线从 short call 的权利金入账开始，让读者用 delta 把期权敞口转换成股票目标，逐现金事件重建 C_k、成交费用、借款峰值和终点误差 ε；随后保持共同随机路径，比较调仓频率与半价差对 RMSE、误差分布和配对平方误差的影响. 再把借款额度作为约束变式，并用 XSP 条款诊断模型向真实合约迁移时仍缺哪些 对冲工具、敞口转换、基差、成本和结算输入. 诊断理解时优先要求读者完成一段现金递推或解释一组配对结果；已掌握步骤直接继承. 选择定价分支后，用 Gaussian 积分、PDE、Itô 公式和自融资条件完整证明 V(t,s) 及 Delta，并说明连续复制中的现金利息与主线离散误差的关系. 最后用改变费用、额度或对冲工具条件的任务检验迁移.",
  "learning_task": "给定卖出 call、delta 规则、价格路径、利率和交易成本，从初始权利金开始算出每次股票成交与现金余额、借款峰值和终点复制误差；再用共同随机路径判断调仓频率与费用如何共同改变误差，并识别资金约束或真实合约条件会在哪一步迫使模型重算.",
  "content_version": "2026-09-22-coherence"
}
```

## Supplied entry
卖出看涨期权后，收到的权利金与到期支付之间存在价格风险. 卖方可以持有股票来对冲，并随股价和剩余期限调整持股数；每次买卖同时改变现金余额，产生交易费用. 把初始权利金、股票买卖、现金利息和到期支付记入同一账户，就能计算对冲需要多少借款，以及最后还剩多少盈亏.

<a id="qt24-contract"></a>
## 对冲合同与实验变量

实验 `EXP-HEDGE-01` 设可交易资产 $S$ 在 $Q$ 下满足 $dS_t=rS_tdt+\sigma S_tdW_t$，$S_0=100,r=0.03,\sigma=0.2$. 卖出的欧式看涨期权取 $K=100$、乘数100、期限30/365年. 模型允许分数股、对称连续复利借贷，无分红及借款上限；各网格点以中价加减半价差立即足量成交，此后不注资，负现金按同一利率计息.

用 $V(t,s)$ 表示每单位期权价格，delta 定义为 $\Delta=\partial V/\partial s$. 在固定时刻，股价小幅变化 $\mathrm{d}s$ 时，每单位期权价格的一阶变化约为 $\Delta\,\mathrm{d}s$. 卖出乘数为 $m$ 的一份期权，敞口为 $-m\Delta$；持有 $m\Delta$ 股可抵消这一局部价格变化. 股价和剩余期限改变后，delta 也随之改变，因此持仓需要再平衡.

初始模型价格为每单位约2.41美元，对应权利金240.958美元. 设 $\tau=T-t$，Black–Scholes 模型给出的 delta 为 $\Phi(d_1)$，推导见 [定价与连续复制](#qt24-pricing). 调仓目标为

$$
\begin{gathered}
d_1(t,s)=\frac{\log(s/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt\tau},\\
q_t=m\Phi(d_1(t,s)),\quad t<T.
\end{gathered}
$$

$\Phi$ 为标准正态分布函数，$m=100$. 初始每单位 delta 约0.529，因此要持有52.857股；到期直接清仓，置 $q_n=0$.[^bs] 默认期限等分16个区间，半价差5bp，即 $c=5\times10^{-4}$，完整价差10bp.

后文的8,192条价格路径也由这个 $Q$ 模型生成. 用同一批路径比较再平衡区间数4、16、64、256和半价差0、5、20 bps的十二种组合，其余合同和路径生成规则保持一致.

<a id="qt24-ledger"></a>
## 单路径现金账

用 $C_k$ 表示在 $t_k$ 完成本次股票交易后的现金，$q_k$ 表示随后持有的股数，$\Delta t_k=t_k-t_{k-1}$. 初始建仓前，现金为收到的权利金 $C_0^-=mV(0,S_0)$，股票为 $q_{-1}=0$. 在 $t_0$ 按 $q_0=m\Phi(d_1(0,S_0))$ 建仓：

$$
\begin{aligned}
\mathrm{fee}_0&=cS_0|q_0|,\\
C_0&=mV(0,S_0)-S_0q_0-\mathrm{fee}_0.
\end{aligned}
$$

随后对 $k=1,\ldots,n$，旧现金先计息，再按当前价格更新持仓. 实际成交量为 $\Delta q_k=q_k-q_{k-1}$；到期取 $q_n=0$ 以清仓. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
\mathrm{fee}_k&=cS_k|\Delta q_k|,\\
C_k&=C_k^- -S_k\Delta q_k-\mathrm{fee}_k.
\end{aligned}
$$

买入价 $S_k(1+c)$、卖出价 $S_k(1-c)$，与按中价成交再单列半价差费用等价. 同一时点按中间价标记资产时，

$$
C_k+q_kS_k=(C_k^-+q_{k-1}S_k)-\mathrm{fee}_k.
$$

因此换仓本身只通过价差减少中价净资产，现金账户在两次交易之间按 $r$ 计息. 起点收权利金后建仓，终点先把股票清零，再扣除期权支付；终点误差定义为

$$
\varepsilon=C_n-m(S_T-K)^+.
$$

正误差表示清算后还有现金，负误差表示复制资金不足.

<a id="qt24-hand"></a>
把这套递推用于指定路径 $100\to102\to101\to104$. 三个区间各为 $10/365$ 年，半价差仍为5 bps；这条手算路径独立指定，与后文8,192条模拟路径的索引无关. 起点买入52.857股，中间价交易额约5285.688美元，费用约2.643美元，所以

$$
\begin{aligned}
C_0&\approx240.958-5285.688\\
&\quad-2.643\\
&\approx-5047.373.
\end{aligned}
$$

第10天先给原现金计息，价格102时目标持仓变为68.492股，因此增持15.635股. 后面的每一行都按同一顺序更新：旧现金计息、观察价格、计算目标股数、成交并支付价差费用. 下表使用未舍入输入计算后统一展示：

| 步 | 模型中价 | 成交股数 | 利息 | 半价差成本 | 成交后股数 | 成交后现金 | 本步支付 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 100 | 52.857 | 0 | 2.643 | 52.857 | -5047.373 | 0 |
| 1 | 102 | 15.635 | -4.15 | 0.797 | 68.492 | -6647.114 | 0 |
| 2 | 101 | -5.111 | -5.466 | 0.258 | 63.381 | -6136.595 | 0 |
| 3 | 104 | -63.381 | -5.046 | 3.296 | 0 | 446.666 | 400 |

只看每次成交后的余额，最大借款出现在第10天：

$$
\mathrm{Borrow}^{\mathrm{after\ trade}}_{\max}
\approx6647.114\text{ 美元}.
$$

现金约束还要检查交易之间的计息事件. 第20天卖股以前，上一步的负现金先变为

$$
-6647.114\,e^{0.03(10/365)}
\approx-6652.58.
$$

因此全部现金事件中的最大借款为

$$
\mathrm{Borrow}^{\mathrm{cash\ events}}_{\max}
\approx6652.58\text{ 美元},
$$

峰值发生在第20天计息后、卖股前. 最后一行同样先计息，再以含价差的价格卖清63.381股，得到现金446.666美元；期权到期支付 $100(104-100)=400$ 美元，于是这条路径的终点误差是

$$
\varepsilon\approx446.666-400=46.666\text{ 美元}.
$$

<a id="qt24-comparison"></a>
## 频率与费用

单路径账本给出了每条路径的 $\varepsilon$. 现在把同一递推应用到共同随机路径，改变再平衡频率与半价差，比较这些误差整体离零有多远. PCG64 固定种子15161724一次生成 $8192\times256$ 个标准正态数；先在归一化时间 $u\in[0,1]$ 上形成最细 Brownian 网格，再用 $t=Tu$、$\sqrt T W_u$ 生成模型价格. 4、16、64、256个区间都从同一条最细路径抽取，因此同一行路径索引在十二个设计中始终对应同一段价格历史.

对每种设计计算

$$
\sqrt{N^{-1}\sum_{i=1}^N\varepsilon_i^2},
$$

得到相对于零复制误差的 RMSE，单位为美元. RMSE 同时受到误差均值和误差散布影响，因此它与样本标准差含义不同.

| 等距模型区间数 | 0 bps RMSE（美元） | 5 bps RMSE（美元） | 20 bps RMSE（美元） |
| --- | --- | --- | --- |
| 4 | 93.74 | 94.553 | 100.945 |
| 16 | 47.916 | 49.774 | 68.512 |
| 64 | 24.91 | 31.54 | 79.354 |
| 256 | 12.779 | 34.914 | 129.882 |

0 bps 时，网格细化使这次实验的 RMSE 持续下降. 加入费用后，更多调仓一方面减少离散化误差，另一方面增加成交成本；5 bps 时256区间的 RMSE 已高于64区间，20 bps 时这一反转更明显.

这个费用效应可以直接从前面的现金递推推出. 若两套方案使用预定的同一个 delta 目标，费用没有反过来改变持仓，令 $D_k=C_k^{(0)}-C_k^{(c)}$. 两套账逐项相减得到

$$
\begin{gathered}
D_0=\mathrm{fee}_0,\qquad
D_k=e^{r\Delta t_k}D_{k-1}+\mathrm{fee}_k\quad(k\ge1),\\
\varepsilon^{(0)}-\varepsilon^{(c)}
=\sum_{k=0}^n e^{r(T-t_k)}\mathrm{fee}_k.
\end{gathered}
$$

每次价差费用都会以现金账户的计息方式传到终点，初始建仓和终点清仓的费用也包含在内. 这个恒等式依赖两套方案采用相同的目标持仓；若资金约束迫使 $q_k$ 改变，持仓差本身也会进入损益差额.

<a id="qt24-distribution"></a>
## 误差分布

RMSE 把全部 $\varepsilon_i$ 压缩成一个数；同一组误差还可以分开看均值、散布和尾部. 默认16区间、5 bps设计下，误差均值约−11.025美元，样本标准差48.54美元，5%和95%分位数约−92.698、67.19美元，均值的 Monte Carlo 标准误约0.536美元. 负均值表示这组模拟中的清算余额平均低于零；标准差和分位数则显示单条路径的误差范围远大于这个均值偏移.

十二个设计各有8,192个误差，使用共同分箱边界；左闭右开，末箱含右端点，箱外计数0. 附件保留完整同索引数组.

| 误差箱（美元） | 默认 16 区间 / 5 bps 路径数 |
| --- | --- |
| [-325, -300) | 1 |
| [-275, -250) | 2 |
| [-250, -225) | 4 |
| [-225, -200) | 9 |
| [-200, -175) | 17 |
| [-175, -150) | 38 |
| [-150, -125) | 91 |
| [-125, -100) | 172 |
| [-100, -75) | 371 |
| [-75, -50) | 736 |
| [-50, -25) | 1475 |
| [-25, 0) | 2000 |
| [0, 25) | 1574 |
| [25, 50) | 948 |
| [50, 75) | 464 |
| [75, 100) | 192 |
| [100, 125) | 78 |
| [125, 150) | 19 |
| [150, 175) | 1 |

共同路径还允许直接比较两个设计在同一条价格历史上的平方误差. 定义

$$
L_i=\varepsilon_{i,256,5}^2-\varepsilon_{i,64,5}^2.
$$

其样本均值约224.19美元²，MCSE约18.953美元². 每个 $L_i$ 都在同一条价格历史上比较两个设计；这组模拟中，256区间、5 bps设计的平均平方误差高于64区间、5 bps设计. 样本标准差分母为 $N-1$，MSE 分母为 $N$，分位数使用线性插值.

<div data-experiment-slot="EXP-HEDGE-01"></div>

<a id="qt24-real-rules"></a>
## 资金约束与真实合约

前面的基准实验允许无限对称借贷. 加入借款额度后，用每个现金事件后的余额核对约束，计息、股票成交和到期支付都要计入；执行一笔交易前，据预计成交后的余额判断能否足额成交. 手算路径的借款峰值为6,652.58美元. 若额度迫使实际持仓偏离目标 $q_k$，股票敞口也随之改变，需要从新的持仓继续计算现金和终点误差.

真实合约还要求把模型中的“可交易资产 $S$”落实为实际可以买卖的对冲工具. Cboe 的 XSP 规则规定，XSP 是 SPX 的十分之一，乘数为100美元，欧式行权，行权结算产生现金交付，现金在到期后的下一个营业日交付.[^xsp] XSP 本身是指数，因此模型里的 $q_k$ 不能直接解释成可以买入的“XSP 股数”. 若把这套账本用于 XSP 对冲，还要指定实际证券或期货，并给出转换比例、基差、分红或展期、实际成交成本及结算时钟，之后才能把这些项目接入同一个现金递推.[^cost]

<a id="qt24-exercise"></a>
### 练习与解析

在 $t_1=10/365$ 的第一次再平衡额外扣1美元，保持目标股数不变，终点误差减少多少？无额外初始现金时，借款上限5,000美元和6,700美元分别能否支持手算路径？

额外1美元费用会在剩余20/365年按现金账户利率传到终点，因此终点误差减少

$$
e^{0.03(20/365)}\text{ 美元}.
$$

5,000美元额度在初始开仓时即不足，所需借款约5,047.373美元. 6,700美元高于全部现金事件峰值6,652.58美元，可以支持这条路径.

<section data-reading-branch="pricing">

<a id="qt24-pricing"></a>

## 定价与连续复制

连续自融资复制使股票与现金组合在到期时恰好支付 $(S_T-K)^+$. 下面先计算期权价格 $V(t,s)$，再用 [Itô公式](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-gbm/) 证明持有 $V_s$ 股以及相应现金即可完成复制，从而得到前文使用的 delta 规则.

在 $Q$ 模型中，给定 $S_t=s$，有

$$
S_T=s\exp\left((r-\sigma^2/2)\tau+\sigma\sqrt\tau Z\right),
\qquad Z\sim N(0,1).
$$

定义每单位期权价格

$$
V(t,s)=e^{-r\tau}\mathbb{E}_Q[(S_T-K)^+\mid S_t=s].
$$

支付非零的条件是 $Z>-d_2$，其中
$d_2=(\log(s/K)+(r-\sigma^2/2)\tau)/(\sigma\sqrt\tau)$，且 $d_1=d_2+\sigma\sqrt\tau$. 记标准正态密度为 $\phi$. 利用完成平方恒等式 $e^{az-a^2/2}\phi(z)=\phi(z-a)$，支付中的股票项为

$$
e^{-r\tau}\mathbb{E}_Q[S_T\mathbf1_{Z>-d_2}]
=s\int_{-d_2}^{\infty}\phi(z-\sigma\sqrt\tau)dz
=s\Phi(d_1).
$$

执行价项为

$$
Ke^{-r\tau}P(Z>-d_2)
=Ke^{-r\tau}\Phi(d_2).
$$

因此

$$
V(t,s)=s\Phi(d_1)-Ke^{-r\tau}\Phi(d_2).
$$

接着构造价值为 $V$ 的自融资持仓. 由 $d_1-d_2=\sigma\sqrt\tau$ 可验证

$$
s\phi(d_1)=Ke^{-r\tau}\phi(d_2).
$$

代入导数后，正态密度产生的附加项抵消，得到

$$
V_s=\Phi(d_1),\qquad
V_{ss}=\frac{\phi(d_1)}{s\sigma\sqrt\tau},
$$

以及

$$
V_t=-\frac{s\sigma\phi(d_1)}{2\sqrt\tau}
-rKe^{-r\tau}\Phi(d_2).
$$

逐项代回可得

$$
V_t+rsV_s+\frac12\sigma^2s^2V_{ss}-rV=0.
$$

若股价仍服从波动率为同一常数 $\sigma$ 的 GBM，其漂移可取任意常数 $\mu$. 应用 Itô 公式并代入上面的 PDE，得到

$$
\begin{aligned}
dV
&=V_s\,dS+\left(V_t+\tfrac12\sigma^2S^2V_{ss}\right)dt\\
&=\Delta\,dS+r(V-\Delta S)dt.
\end{aligned}
$$

取 $B_t=e^{rt}$、$\Delta_t=V_s(t,S_t)$、$\beta_t=(V-\Delta_tS_t)/B_t$. 持仓价值满足

$$
\Delta_tS_t+\beta_tB_t=V,
$$

而增益满足

$$
dV=\Delta_t\,dS_t+\beta_t\,dB_t,
$$

所以这是一套连续自融资复制. 其中现金余额 $V-\Delta S$ 本来就按无风险利率增长，现金利息属于复制机制本身.

对 $t<T$，函数光滑且 $0\le\Delta\le1$. 常数参数 GBM 有 $\mathbb{E}\int_0^TS_t^2dt<\infty$，因此股票增益积分可以合法取到端点；$V(t,S_t)$ 在 $t\uparrow T$ 时连续趋于 $(S_T-K)^+$. 现金漂移项也可积，例如

$$
V-\Delta S=-Ke^{-r\tau}\Phi(d_2)
$$

有界. 这把复制从每个到期前时点延伸到支付端点.

离散实验在每个网格点重新计算这个连续复制策略的目标股数，随后持仓保持到下一个网格点. 这段时间内 delta 的变化无法立即抵消，交易时还要支付价差；两项变化共同形成前文计算的终点误差.[^pricing]
</section>

[^bs]: Vasily Strela，MIT 18.S096，Lecture 19，Fall 2013，slides 13–22（尤其 slide19 call/delta 公式）；[公开讲义](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf).
[^xsp]: Cboe，*XSP Options Product Specification*，Underlying、Multiplier、Exercise Style、Settlement of Option Exercise；[官方规则](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications)，2026-09-21 核对.
[^cost]: Stephen Boyd、Kasper Johansson、Ronald Kahn、Philipp Schiele、Thomas Schmelzer，*Markowitz Portfolio Construction at Seventy*，2024-01-05 公开稿，§2.2–2.4、§3.4–3.5、§4.1–4.3；[原文](https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf).
[^pricing]: [Itô公式及其条件](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-proof/).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-HEDGE-01",
    "title": "动态对冲同路径分布与资金账",
    "anchor": "qt24-distribution",
    "description": "共享输入的本篇视图；保持 EXP-HEDGE-01 唯一冻结身份.",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT24",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位."
    },
    "outputs": {
      "design": "n16_c5",
      "intervals": 16,
      "half_spread_bps": 5,
      "n": 8192,
      "mean": -11.025472701825556,
      "sample_sd": 48.5403947822721,
      "mean_mc_se": 0.5363006611252611,
      "mse_to_zero": 2477.443355518406,
      "mse_mc_se": 51.24665443833317,
      "q05": -92.6979375973376,
      "q95": 67.19023591443182,
      "rmse": 49.77392244457338,
      "mean_nominal_cost": 11.382854902867193,
      "mean_terminal_cost": 11.39685202252775,
      "cash_balance_max_residual": 2.6666446828471635e-12,
      "cost_identity_max_residual": 1.1883827255587676e-11
    },
    "source_experiment_id": "EXP-HEDGE-01",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT24.html#qt24-distribution",
    "result_attachment": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
      "json_pointers": [
        "/hedge",
        "/paired",
        "/hand",
        "/pricing"
      ]
    }
  }
]
```

## Sources
- [Mini-SPX Index Options Contract Specifications](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications): SPX/10 指数、100 美元乘数、欧式与下一营业日现金交付；不提供真实历史报价、可买卖指数股或券商入账秒.
- [Lecture 19: Risk Neutral Pricing / Black–Scholes Formula](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf): 看涨期权公式、Delta复制与PDE背景. 再平衡现金由自融资交易逐次确定；完整高斯积分、PDE和自融资推导见QT24.

## Content relations
```json
[
  {
    "from": "zh-qt24",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt24",
    "relation": "supported_by",
    "to": "QGHI-CBOE-XSP",
    "reason": "SPX/10 指数、100 美元乘数、欧式与下一营业日现金交付；不提供真实历史报价、可买卖指数股或券商入账秒.",
    "locator": "Underlying、Multiplier、Exercise Style、Settlement of Option Exercise",
    "scope": "完整相关合约条款"
  },
  {
    "from": "zh-qt24",
    "relation": "supported_by",
    "to": "QGHI-MIT-BS13",
    "reason": "call 公式与复制/PDE背景；不采用 slide16 将再平衡现金误说成确定过程的简述，完整 Gaussian/PDE/自融资核算在 QT24 定价分支.",
    "locator": "Slides 13–22",
    "scope": "call、PDE、复制背景完整单元",
    "branch": "pricing"
  },
  {
    "from": "qt24-pricing",
    "relation": "uses_method",
    "to": "qt17-theorem",
    "reason": "仅定价分支使用 Itô 公式.",
    "branch": "pricing"
  },
  {
    "from": "qt24-distribution",
    "relation": "illustrated_by",
    "to": "EXP-HEDGE-01",
    "reason": "唯一冻结输入在本篇的对应视图."
  },
  {
    "from": "qt24-contract",
    "relation": "supported_by",
    "to": "QGHI-MIT-BS13",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Vasily Strela，MIT 18.S096，Lecture 19，Fall 2013，slides 13–22（尤其 slide19 call/delta 公式）；[公开讲义](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf). 数值参数是本文具名教学模型，不是讲义中的历史报价.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "bs"
    ]
  },
  {
    "from": "qt24-real-rules",
    "relation": "supported_by",
    "to": "QGHI-CBOE-XSP",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Cboe，*XSP Options Product Specification*，Underlying、Multiplier、Exercise Style、Settlement of Option Exercise；[官方规则](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications)，2026-09-21 核对. 该规则不支持券商 booking 的精确时点.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "xsp"
    ]
  },
  {
    "from": "qt24-real-rules",
    "relation": "supported_by",
    "to": "QTDE-MARKOWITZ",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Stephen Boyd、Kasper Johansson、Ronald Kahn、Philipp Schiele、Thomas Schmelzer，*Markowitz Portfolio Construction at Seventy*，2024-01-05 公开稿，§2.2–2.4、§3.4–3.5、§4.1–4.3；[原文](https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf). 这里只采用成本、预测和约束对象，不引其策略绩效.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "cost"
    ]
  }
]
```

## Related entries
