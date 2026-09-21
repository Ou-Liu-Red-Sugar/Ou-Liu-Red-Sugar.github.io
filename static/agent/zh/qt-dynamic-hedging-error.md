# 离散动态对冲：从现金账到误差分布

沿指定价格路径复算自融资现金账，再用十二组实验比较再平衡频率、费用和对冲误差.

Entry: zh-qt24 | Node: QT24 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从权利金入账开始重建delta、现金计息、成交及到期支付，逐现金事件求借款峰值；复算共同路径的配对损失与费用递推. 选择定价分支后先读指定原件，用Gaussian积分、PDE和自融资条件完整证明call复制. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从权利金入账开始重建delta、现金计息、成交及到期支付，逐现金事件求借款峰值；复算共同路径的配对损失与费用递推. 选择定价分支后先读指定原件，用Gaussian积分、PDE和自融资条件完整证明call复制. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "从权利金入账开始重建delta、现金计息、成交及到期支付，逐现金事件求借款峰值；复算共同路径的配对损失与费用递推. 选择定价分支后先读指定原件，用Gaussian积分、PDE和自融资条件完整证明call复制.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
卖出欧式看涨式负债后，delta 调仓同时改变股票与现金账户；借款利息、价差、终点清仓和合约支付都进入同一自融资账本.以下先逐行复算冻结路径，再在共同随机路径上比较再平衡频率与费用；Black–Scholes 定价与连续复制另列为独立分支.

<a id="qt24-contract"></a>
## 模型合同

实验 `EXP-HEDGE-01`设可交易资产 $S$ 在 $Q$ 下满足 $dS_t=rS_tdt+\sigma S_tdW_t$，$S_0=100,r=0.03,\sigma=0.2$. 卖出欧式看涨式合约，$K=100$、乘数100、期限30/365年，支付 $100(S_T-K)^+$. 同一模型用于定价与路径生成.

模型允许分数股、对称连续复利借贷，无分红及借款上限；各网格点以中价加减半价差立即足量成交，此后不注资，负现金计息.

模型权利金约240.958美元，每单位支付价格约2.41. 默认期限等分16个区间，半价差5bp，即 $c=5\times10^{-4}$，完整价差10bp.

设 $\tau=T-t$. 调仓所用公式是

$$
\begin{gathered}
d_1(t,s)=\frac{\log(s/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt\tau},\\
q_t=m\Phi(d_1(t,s)),\quad t<T.
\end{gathered}
$$

$\Phi$ 为标准正态分布函数. 初始每单位delta约0.529，对应52.857股. 到期直接清仓，置 $q_n=0$.[^bs]

<a id="qt24-ledger"></a>
## 自融资现金递推

用 $C_k$ 表示在 $t_k$ 完成本次交易后的现金，$q_k$ 表示随后持有的股数，服务于 $(t_k,t_{k+1}]$. 从上一行到当前行，先让旧现金增长为 $C_{k-1}e^{r\Delta t_k}$，再按当前信息决定目标股数；实际成交变化是 $\Delta q_k=q_k-q_{k-1}$. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
\mathrm{fee}_k&=cS_k|\Delta q_k|,\\
C_k&=C_k^- -S_k\Delta q_k-\mathrm{fee}_k.
\end{aligned}
$$

买入价 $S_k(1+c)$、卖出价 $S_k(1-c)$，等价于中价成交额另计半价差费用.

同一时点按中间价标记资产，就有

$$
C_k+q_kS_k=(C_k^-+q_{k-1}S_k)-\mathrm{fee}_k.
$$

换仓时中价净资产减少费用，现金利息单独入账. 起点收权利金后开仓，终点清仓后扣合约支付，误差为

$$
\varepsilon=C_n-m(S_T-K)^+.
$$

正误差为清算余额，负误差为不足金额. 权利金已计入初始现金，期间借款另影响资金需求.

<a id="qt24-hand"></a>
## 四价格路径

先取独立指定的手算路径 $100\to102\to101\to104$，分为三个相等区间，每段 $10/365$ 年，半价差仍为 5 bps.该路径与后文 8192 条模拟路径的索引无关.

起点买入 $52.857$ 股，中间价交易额约 $5285.688$，费用约 $2.643$. 所以

$$
\begin{aligned}
C_0&\approx240.958-5285.688\\
&\quad-2.643\\
&\approx-5047.373.
\end{aligned}
$$

下一时点借款利息约4.15美元，价格102，目标68.492股，增持15.635股. 下表使用未舍入输入计算后统一展示：

| 步 | 模型中价 | 成交股数 | 利息 | 半价差成本 | 成交后股数 | 成交后现金 | 本步支付 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 100 | 52.857 | 0 | 2.643 | 52.857 | -5047.373 | 0.00 |
| 1 | 102 | 15.635 | -4.15 | 0.797 | 68.492 | -6647.114 | 0.00 |
| 2 | 101 | -5.111 | -5.466 | 0.258 | 63.381 | -6136.595 | 0.00 |
| 3 | 104 | -63.381 | -5.046 | 3.296 | 0 | 446.666 | 400.00 |

成交后现金的最大借款出现在第10天：

$$
\mathrm{Borrow}^{\mathrm{after\ trade}}_{\max}
\approx6647.114\text{ 美元}.
$$

但第 20 天要先让上一步的负现金计息，再卖出股票. 卖出发生以前，现金已经变成

$$
-6647.114\,e^{0.03(10/365)}
\approx-6652.58.
$$

全部现金事件中的最大借款为

$$
\mathrm{Borrow}^{\mathrm{cash\ events}}_{\max}
\approx6652.58\text{ 美元},
$$

峰值发生于第20天计息后、卖股前，授信额度据此检查.

第三行到最后一行，先计旧现金利息，再以模型买卖价差卖清 $63.381$ 股. 清仓后现金 $446.666$；到期支付 $100(104-100)=400$，所以剩余

$$
\varepsilon\approx446.666-400=46.666\text{ 美元}.
$$

<a id="qt24-comparison"></a>
## 频率与费用

这里用 PCG64 的固定种子 15161724 一次生成 $8192\times256$ 个标准正态数. 先在归一化时间 $u\in[0,1]$ 上形成最细 Brownian 网格，再用 $t=Tu$、$\sqrt T W_u$ 生成 $Q$ 模型价格. 4、16、64、256 个区间都从同一条最细路径抽取；同一行路径索引在十二个设计中始终对应同一段价格历史.

下表是 $\sqrt{N^{-1}\sum_{i=1}^N\varepsilon_i^2}$，即相对于完全复制目标零误差的 RMSE，单位美元. 它既包含均值偏离，也包含离散程度，不等同于样本标准差.

| 等距模型区间数 | 0 bps RMSE（美元） | 5 bps RMSE（美元） | 20 bps RMSE（美元） |
| --- | --- | --- | --- |
| 4 | 93.74 | 94.553 | 100.945 |
| 16 | 47.916 | 49.774 | 68.512 |
| 64 | 24.91 | 31.54 | 79.354 |
| 256 | 12.779 | 34.914 | 129.882 |

无费用时RMSE随网格细化下降；半价差5bp时，256区间RMSE高于64区间；20bp时频繁调仓的费用增加更明显.

对于预定的同一个 delta 目标，如果费用没有反过来改变持仓，令 $D_k=C_k^{(0)}-C_k^{(c)}$. 两套账相减给

$$
\begin{gathered}
D_k=e^{r\Delta t_k}D_{k-1}+\mathrm{fee}_k,\\
\varepsilon^{(0)}-\varepsilon^{(c)}
=\sum_{k=0}^n e^{r(T-t_k)}\mathrm{fee}_k.
\end{gathered}
$$

差额式逐路径包含初始与终点费用. 资金约束若改变目标持仓，两方案的持仓差也进入损益差额.

<a id="qt24-distribution"></a>
## 误差分布

16区间、5bp下，误差均值约−11.026美元、样本标准差48.54美元，5%和95%分位数约−92.698、67.19美元，均值的Monte Carlo标准误约0.536美元.

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

按共同路径计算 $L_i=\varepsilon_{i,256,5}^2-\varepsilon_{i,64,5}^2$，均值约224.19美元²，MCSE约18.953美元². 样本标准差分母为N−1，MSE分母为N，分位数使用线性插值.

<div data-experiment-slot="EXP-HEDGE-01"></div>

<a id="qt24-real-rules"></a>
## XSP规则

Cboe 的 XSP 规则规定，XSP 是 SPX 的十分之一，乘数为100美元，欧式行权，行权结算产生现金交付，现金在到期后的下一个营业日交付. XSP 本身是指数，不是可以按上述 $q_k$ 买入的“XSP 股票”. [^xsp]

将账本用于XSP对冲时，需指定可交易证券或期货，再加入转换比例、基差、分红或展期、实际成交成本及结算时钟.[^cost]

<a id="qt24-exercise"></a>
## 练习与解析

在 $t_1=10/365$ 的第一次再平衡额外扣1美元，保持目标股数不变，终点误差减少多少？无额外初始现金时，借款上限5,000美元和6,700美元分别能否支持手算路径？

### 解析

额外费用在剩余20/365年计息，终点误差减少 $e^{0.03(20/365)}$ 美元.

5,000美元上限在初始开仓时即失效，所需借款约5,047.373美元.

6,700美元高于全部现金事件峰值6,652.58美元，支持该路径. 若额度不足，需改变目标持仓或补充资金后重算.

<section data-reading-branch="pricing">
<a id="qt24-pricing"></a>
## 定价与连续复制

用 [Itô公式](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-gbm/)构造该call的连续自融资复制.

在 $Q$ 模型中，给定 $S_t=s$，有

$$
S_T=s\exp\left((r-\sigma^2/2)\tau+\sigma\sqrt\tau Z\right),
\qquad Z\sim N(0,1).
$$

先定义折现支付均值 $C(t,s)=e^{-r\tau}\mathbb{E}_Q[(S_T-K)^+\mid S_t=s]$. 支付非零的条件是 $Z>-d_2$，其中 $d_2=(\log(s/K)+(r-\sigma^2/2)\tau)/(\sigma\sqrt\tau)$，$d_1=d_2+\sigma\sqrt\tau$.

记正态密度为 $\phi$，用完成平方恒等式 $e^{az-a^2/2}\phi(z)=\phi(z-a)$，第一项积分成为

$$
e^{-r\tau}\mathbb{E}_Q[S_T\mathbf1_{Z>-d_2}]
=s\int_{-d_2}^{\infty}\phi(z-\sigma\sqrt\tau)dz
=s\Phi(d_1).
$$

第二项是 $Ke^{-r\tau}P(Z>-d_2)=Ke^{-r\tau}\Phi(d_2)$. 相减得到

$$
C(t,s)=s\Phi(d_1)-Ke^{-r\tau}\Phi(d_2).
$$

以下构造价值为C的自融资持仓.

直接由 $d_1-d_2=\sigma\sqrt\tau$ 可验证 $s\phi(d_1)=Ke^{-r\tau}\phi(d_2)$；代入导数后，正态密度产生的附加项抵消，得

$$
C_s=\Phi(d_1),\qquad
C_{ss}=\frac{\phi(d_1)}{s\sigma\sqrt\tau},
$$

$$
C_t=-\frac{s\sigma\phi(d_1)}{2\sqrt\tau}
-rKe^{-r\tau}\Phi(d_2).
$$

把它们代回即可逐项核对

$$
C_t+rsC_s+\frac12\sigma^2s^2C_{ss}-rC=0.
$$

现在即使在漂移为 $\mu$ 的另一个 GBM 模型中应用 Itô 公式，仍有

$$
\begin{aligned}
dC
&=C_s\,dS+\left(C_t+\tfrac12\sigma^2S^2C_{ss}\right)dt\\
&=\Delta\,dS+r(C-\Delta S)dt.
\end{aligned}
$$

取 $B_t=e^{rt}$、$\Delta_t=C_s(t,S_t)$、$\beta_t=(C-\Delta_tS_t)/B_t$. 价值满足 $\Delta_tS_t+\beta_tB_t=C$，增益满足 $dC=\Delta_t\,dS_t+\beta_t\,dB_t$，故策略自融资. 现金余额 $C-\Delta S$ 同时反映利息和调仓.

对 $t<T$ 函数光滑，$0\le\Delta\le1$，常数参数 GBM 有 $\mathbb{E}\int_0^TS_t^2dt<\infty$，所以股票增益积分可以合法取到端点；$C(t,S_t)$ 在 $t\uparrow T$ 时连续趋于 $(S_T-K)^+$. 现金漂移项也可积，例如 $C-\Delta S=-Ke^{-r\tau}\Phi(d_2)$ 有界. 这把复制从每个到期前时点延伸到支付端点.

离散再平衡和价差破坏无摩擦连续复制条件，因此终点误差由调仓离散化、现金利息和交易费用共同决定；主线账本逐项记录这些来源. [^pricing]
</section>

[^bs]: Vasily Strela，MIT 18.S096，Lecture 19，Fall 2013，slides 13–22（尤其 slide19 call/delta 公式）；[公开讲义](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf). 数值参数来自本文具名教学模型.
[^xsp]: Cboe，*XSP Options Product Specification*，Underlying、Multiplier、Exercise Style、Settlement of Option Exercise；[官方规则](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications)，2026-09-21 核对.
[^cost]: Stephen Boyd、Kasper Johansson、Ronald Kahn、Philipp Schiele、Thomas Schmelzer，*Markowitz Portfolio Construction at Seventy*，2024-01-05 公开稿，§2.2–2.4、§3.4–3.5、§4.1–4.3；[原文](https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf).
[^pricing]: 正文的 Gaussian 积分与 PDE 推导用于这份 call 的复制；一般 Itô 公式及其条件见 [完整证明单元](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-proof/).

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
