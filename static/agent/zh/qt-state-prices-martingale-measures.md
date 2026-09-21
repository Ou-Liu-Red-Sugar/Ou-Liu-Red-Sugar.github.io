# 有限市场中的状态价格、等价鞅测度与完备性

在二状态与三状态市场中求复制组合、定价权重和无套利价格区间.

Entry: zh-qt18 | Node: QT18 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 由一期矩阵计算复制持仓、正状态价格、P/Q密度及定价核；推导三状态无套利开放价格区间及端点套利，加入新资产后重建全部数字支付. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTF-WILLIAMS3",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.1 printed pp.40–43/PDF2–3",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "一期作为有限市场的特例，单位/持仓/无摩擦"
      },
      "supports": "一期作为有限市场的特例，单位/持仓/无摩擦",
      "title": "Finite Market Model, Chapter 3",
      "authors": [
        "Ruth J. Williams"
      ],
      "version": "Chapter PDF; no reliable revision date stated"
    },
    {
      "source_id": "QTF-WILLIAMS3",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.2 Definitions3.2.1–3.2.2 and Lemma3.2.3 printed pp.44–45/PDF4",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "等价概率、贴现价格与财富"
      },
      "supports": "等价概率、贴现价格与财富",
      "title": "Finite Market Model, Chapter 3",
      "authors": [
        "Ruth J. Williams"
      ],
      "version": "Chapter PDF; no reliable revision date stated"
    },
    {
      "source_id": "QTF-WILLIAMS3",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.3 through Theorem3.3.2 printed pp.50–54/PDF7–9",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "可复制价值和完备性含义；一般证明在P1/P2"
      },
      "supports": "可复制价值和完备性含义；一般证明在P1/P2",
      "title": "Finite Market Model, Chapter 3",
      "authors": [
        "Ruth J. Williams"
      ],
      "version": "Chapter PDF; no reliable revision date stated"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "market_identity": {
      "experiment_id": "EXP-STATE-01",
      "version": "2026-09-21-v1",
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
      "formula_contract": {
        "state_prices": "A^T*pi=s_0; pi_i>0; sum_i pi_i=B_0/B_1=1/R",
        "martingale_probability": "Q_i=R*pi_i, E_Q[S_1]=R*S_0",
        "density": "z_i=Q_i/P_i; E_P[z]=1",
        "pricing_kernel": "m_i=pi_i/P_i=z_i/R; E_P[m]=1/R",
        "replication": "A*theta=H; price=s_0^T*theta=sum_i pi_i*H_i",
        "multiperiod_cash_completion": "beta_1=(V_0-h_1 dot S_0)/B_0; beta_(k+1)=(beta_k*B_k+h_k dot S_k-h_(k+1) dot S_k)/B_k",
        "discounted_wealth": "V_k/B_k=V_0/B_0+sum_(j=1)^k h_j dot (S_j/B_j-S_(j-1)/B_(j-1))",
        "attainable_space": "K=span{1}+L={a*1+ell:a in real numbers,ell in L}; R is not the scalar field"
      }
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
    "augmented_summary": {
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
      "rank": 3,
      "determinant": {
        "exact": "408",
        "decimal": 408.0
      }
    },
    "view": {
      "node": "QT18",
      "underlying_experiment_id": "EXP-STATE-01",
      "default_mode": "two"
    },
    "attachments": [
      {
        "title": "本篇完整静态阅读",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18.html",
        "kind": "html"
      },
      {
        "title": "EXP-STATE-01 唯一冻结市场",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
        "kind": "json",
        "version": "2026-09-21-v1",
        "json_pointers": [
          "/units",
          "/assumptions",
          "/two_state",
          "/three_state_incomplete",
          "/three_state_augmented_complete"
        ],
        "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
      },
      {
        "title": "同包默认精确计算",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/two",
          "/three",
          "/complete"
        ]
      }
    ]
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 由一期矩阵计算复制持仓、正状态价格、P/Q密度及定价核；推导三状态无套利开放价格区间及端点套利，加入新资产后重建全部数字支付. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "由一期矩阵计算复制持仓、正状态价格、P/Q密度及定价核；推导三状态无套利开放价格区间及端点套利，加入新资产后重建全部数字支付.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
<a id="qt18-model"></a>

## 市场与持仓

取有限状态空间 $\Omega$，$\mathcal F_0=\{\varnothing,\Omega\}$，$\mathcal F_1=2^\Omega$，研究概率 $P$ 对每个状态严格为正. 现金账户每单位的价格为确定的 $B_0,B_1>0$；本例 $B_0=1$、$B_1=\frac{51}{50}$，所以现金一期增长因子为 $R=B_1/B_0=\frac{51}{50}$. 这是一段抽象期间，不年化.

允许在时点 0 选择任意有限、有符号的实数持仓，借贷都使用同一现金账户；没有价差、费用、分红或额外持仓限制. 持仓必须在结果揭晓前确定. [^w-model]

令 $\beta$ 为现金账户单位数、$\Delta$ 为股票单位数. 初始成本与终端价值是

$$
V_0=\beta B_0+\Delta S_0,
\qquad V_1=\beta B_1+\Delta S_1.
$$

$\beta$ 为现金账户单位数，$\beta B_t$ 为现金金额，负值表示借款.

EXP-STATE-01以美元计价，每个支付对应一份模型资产.

<a id="qt18-replication"></a>

## 二状态复制

状态顺序为上涨、下跌. 给定股票初价 $S_0=100$，终值与现金账户如下；看涨式支付的行权价为 $105$.

| 时点或状态 | 现金账户每单位 | 股票每单位 | 看涨式支付 |
|---|---|---|---|
| 初始 | $1$ | $100$ | 待由复制确定价格 |
| 上涨 | $\frac{51}{50}$ | $120$ | $15$ |
| 下跌 | $\frac{51}{50}$ | $90$ | $0$ |

令 $\theta=(\beta,\Delta)^T$. 把状态放在行、资产放在列：

$$
A=\begin{pmatrix}\frac{51}{50}&120\\\frac{51}{50}&90\end{pmatrix},
\qquad A\theta=\begin{pmatrix}15\\0\end{pmatrix}.
$$

两行相减消去现金，得到 $\Delta=\frac{1}{2}$；再代回下跌状态，得终端现金金额 $\beta B_1=-45$，因而 $\beta=-\frac{750}{17}$. 初始成本为 $V_0=\frac{100}{17}\approx5.882$. [^w-replicate]

| 项目 | 时点0 | 上涨终值 | 下跌终值 |
|---|---|---|---|
| 现金金额 | $-\frac{750}{17}$ | $-45$ | $-45$ |
| 股票金额 | $50$ | $60$ | $45$ |
| 合计 | $\frac{100}{17}$ | $15$ | $0$ |

这套持仓在两种状态都支付 $H$. 若同一支付可以买卖，报价 $c$ 高于复制成本，就卖出支付、买入复制组合，并把差额存入现金账户；报价更低时反向操作. 因此可复制支付的无套利价格由逐状态复制成本确定，不依赖研究概率 $P$.

<a id="qt18-measures"></a>

## 状态价格与定价核

称满足

$$
A^T\pi=s_0,\qquad \pi_i>0
$$

$s_0$ 为已交易资产初价向量，$\pi_i$ 给状态 $i$ 的一美元支付赋予价格. 不完备市场中该支付可能不可复制，正状态价格也可能不唯一.

若这样的 $\pi$ 存在，对任意零成本持仓 $\theta$ 都有 $\pi^TA\theta=s_0^T\theta=0$；而一个逐状态非负、至少一处严格正的终值，其严格正加权和不可能为零. 这已经证明了该一期市场没有套利. 反方向由有限期第一基本定理给出. [^w-ftap]

现金账户那一列满足 $B_1\sum_i\pi_i=B_0$，所以 $\sum_i\pi_i=1/R$. 将它归一化，定义 $Q_i=R\pi_i$，得到

$$
\sum_i Q_i=1,
\qquad \mathbb{E}_Q[S_1]=RS_0.
$$

这等价于 $\mathbb{E}_Q[S_1/B_1]=S_0/B_0$；贴现价格在 $Q$ 下为鞅. 因为 $Q_i>0$，它与全支持的 $P$ 有相同的零概率事件，故称等价鞅测度. [^w-ftap]

二状态中联立概率总和与股票定价约束，算得 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$，$\pi=\left(\frac{20}{51},\frac{10}{17}\right)$. 再取教学概率 $P=\left(\frac{3}{5},\frac{2}{5}\right)$，就能把这些对象放在同一张表里：

| 对象 | 上涨 | 下跌 | 归一化检查 |
|---|---|---|---|
| 研究概率 $P$ | $\frac{3}{5}$ | $\frac{2}{5}$ | 分量和为1 |
| 定价概率 $Q$ | $\frac{2}{5}$ | $\frac{3}{5}$ | 分量和为1 |
| 状态价格 $\pi$ | $\frac{20}{51}$ | $\frac{10}{17}$ | 分量和为 $\frac{50}{51}$ |
| 密度 $z=Q/P$ | $\frac{2}{3}$ | $\frac{3}{2}$ | $\mathbb{E}_Pz=1$ |
| 定价核 $m=\pi/P$ | $\frac{100}{153}$ | $\frac{25}{17}$ | $\mathbb{E}_Pm=1/R$ |

其中密度 $z_i=Q_i/P_i$ 满足 $\mathbb{E}_Pz=1$；定价核 $m_i=\pi_i/P_i=z_i/R$ 满足 $\mathbb{E}_Pm=1/R$. 对可复制支付，三个价格写法完全一致：

$$
\begin{aligned}
\operatorname{price}(H)
&=\sum_i\pi_iH_i\\
&=R^{-1}\mathbb{E}_Q[H]\;=\;\mathbb{E}_P[mH].
\end{aligned}
$$

本例 $\mathbb{E}_PH=9$，$\mathbb{E}_QH=6$. 直接算 $R^{-1}\mathbb{E}_PH=\frac{150}{17}$，并不会得到复制成本 $\frac{100}{17}$. 研究概率在回答支付平均有多大；定价核则按资产价格约束改变了状态权重.

<div data-experiment-slot="EXP-STATE-01"></div>

若只把 $P$ 改为 $\left(\frac{9}{10},\frac{1}{10}\right)$，而支付矩阵与已交易资产价格保持不变，则 $Q$、$\pi$ 和复制成本不变，密度 $dQ/dP$ 与定价核 $m$ 改变.

<a id="qt18-incomplete"></a>

## 三状态不完备市场

三状态分支取股票终值80、100、120，保持现金账户与股票初价，行权价改为100，研究概率全支持.

| 状态 | 现金账户终值 | 股票终值 | 新增支付终值 |
|---|---|---|---|
| 下跌 | $\frac{51}{50}$ | $80$ | $0$ |
| 中间 | $\frac{51}{50}$ | $100$ | $0$ |
| 上涨 | $\frac{51}{50}$ | $120$ | $20$ |

现金和股票只有两列，其支付矩阵秩为 2. 可复制支付一定形如 $H_i=\beta B_1+\Delta S_{1i}$，即三个点落在同一直线上. 给定 $H=\left(0,0,20\right)$ 并非如此：前两个状态支付都为零迫使 $\Delta=0,\beta=0$，便不可能在第三个状态支付 $20$.

从 $q_d+q_m+q_u=1$ 与 $\mathbb{E}_QS_1=RS_0$ 出发，令 $t=q_d$，解得

$$
Q(t)=\bigl(t,\ \frac{9}{10}-2t,\ \frac{1}{10}+t\bigr).
$$

三个分量都必须严格正，所以 $0<t<\frac{9}{20}$. 原市场因此存在一族 EMM，不能单凭它给每个非复制支付一个唯一价格. [^w-complete]

现在明确改变的是交易集合：允许将支付 $H$ 以初价 $c$ 自由买卖，同时保留原现金和股票价格. 该新增资产要求

$$
c(t)=\frac{ 2+20t }{ \frac{51}{50} },
\qquad c\in(\frac{100}{51},\frac{550}{51}).
$$

| $t$ | $Q(t)$ | 新增支付的相容初价 |
|---|---|---|
| $\frac{1}{10}$ | $\left(\frac{1}{10},\frac{7}{10},\frac{1}{5}\right)$ | $\frac{200}{51}$ |
| $\frac{1}{5}$ | $\left(\frac{1}{5},\frac{1}{2},\frac{3}{10}\right)$ | $\frac{100}{17}$ |
| $\frac{2}{5}$ | $\left(\frac{2}{5},\frac{1}{10},\frac{1}{2}\right)$ | $\frac{500}{51}$ |

区间内的 $c$ 对应严格正状态价格；两个端点分别有如下零成本持仓：

| 新增支付初价 | 持仓 $(\beta,\Delta,\gamma)$ | 初始成本 | 三状态终值 |
|---|---|---|---|
| $\frac{100}{51}$ | $\left(\frac{5000}{51},-1,1\right)$ | $0$ | $\left(20,0,0\right)$ |
| $\frac{550}{51}$ | $\left(-\frac{2000}{51},\frac{1}{2},-1\right)$ | $0$ | $\left(0,10,0\right)$ |

两组持仓终值非负且有一处严格正，构成套利. 下端以外第一组、高端以外第二组的初始成本更低，将所收差额存入现金账户即可得到零成本套利.

<a id="qt18-complete"></a>

## 新增资产与完备性

让新增支付的成交初价固定为 $c=6$. 增广矩阵为

$$
A_+=\begin{pmatrix}
\frac{51}{50}&80&0\\
\frac{51}{50}&100&0\\
\frac{51}{50}&120&20
\end{pmatrix}.
$$

它的行列式为 $408$，秩为 3. 因此每个三状态支付都能解出持仓. 新资产价格同时把自由参数固定，得到

$$
Q=\left(\frac{103}{500},\frac{61}{125},\frac{153}{500}\right),\qquad \pi=\left(\frac{103}{510},\frac{122}{255},\frac{3}{10}\right).
$$

此时支付矩阵满行秩，任意终端可测支付都可复制，市场因而完备；完备性刻画复制空间，不识别研究概率 $P$. 一般有限期下的第一基本定理见 [第一基本定理证明](https://ou-liu-red-sugar.github.io/zh/notebook/qt-finite-market-ftap-proof/#qt18p1-ftap)，完备性与 EMM 唯一性的关系见 [第二基本定理证明](https://ou-liu-red-sugar.github.io/zh/notebook/qt-completeness-unique-measure-proof/#qt18p2-theorem). [^w-complete]

<a id="qt18-exercises"></a>

## 练习与解析

问题一. 只把二状态研究概率改为 $P=\left(\frac{9}{10},\frac{1}{10}\right)$，支付和初价全部不动. 重新计算 $dQ/dP$、定价核以及支付价格. 为什么 $\mathbb{E}_PH$ 会变，但复制价格不变？

解析. 市场方程没有变化，所以 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$、$\pi=\left(\frac{20}{51},\frac{10}{17}\right)$ 不变. 逐分量相除得到

$$
\frac{dQ}{dP}=\left(\frac{4}{9},6\right),\qquad m=\left(\frac{200}{459},\frac{100}{17}\right).
$$

此时 $\mathbb{E}_PH=27/2$，$\mathbb{E}_P[mH]=100/17$. $P$ 与相应定价核改变，固定资产的复制关系保持不变.

问题二. 只交易三状态市场中的现金和股票，能否复制中间状态的一美元数字支付 $(0,1,0)$？

**解析.** 前两行给 $\Delta=1/20$、$\beta B_1=-4$，第三行支付为2，异于目标0，因此不能复制. 加入第三项资产后的完整持仓见 [完备性与唯一EMM](https://ou-liu-red-sugar.github.io/zh/notebook/qt-completeness-unique-measure-proof/).

[^w-model]: Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3；章节 PDF 未标可靠修订日期. EXP-STATE-01 为 2026-09-21-v1 教学构造.
[^w-replicate]: 同章 §3.3，Theorem 3.3.1，印刷 p.51 / PDF p.7，复制价值的条件期望表示. 本文一期持仓由显示的矩阵直接求解.
[^w-ftap]: 同章 Definitions 3.2.1–3.2.2、Lemma 3.2.3、Theorem 3.2.4，印刷 pp.44–50 / PDF pp.4–7；正状态价格的一期充分性由本文内积直接证明，一般必要性在 QT18-P1.
[^w-complete]: 同章 §3.3，Theorems 3.3.2–3.3.3，印刷 pp.52–55 / PDF pp.8–9；本文三状态开放区间及端点套利由显示的资产和持仓直接重建.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-STATE-01",
    "title": "有限市场中的状态价格、等价鞅测度与完备性：计算视图",
    "anchor": "qt18-measures",
    "description": "改变本视图参数后重算；正文保留默认表、完整推导和题解，公开附件提供精确输入与结果.",
    "inputs": {
      "shared_experiment_id": "EXP-STATE-01",
      "view": {
        "node": "QT18",
        "underlying_experiment_id": "EXP-STATE-01",
        "default_mode": "two"
      },
      "public_attachments": [
        {
          "title": "EXP-STATE-01 唯一冻结市场",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
          "kind": "json",
          "version": "2026-09-21-v1",
          "json_pointers": [
            "/units",
            "/assumptions",
            "/two_state",
            "/three_state_incomplete",
            "/three_state_augmented_complete"
          ],
          "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
        },
        {
          "title": "同包默认精确计算",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
          "kind": "json",
          "json_pointers": [
            "/two",
            "/three",
            "/complete"
          ]
        }
      ]
    },
    "outputs": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
      "scope": "two/three/complete",
      "json_pointers": [
        "/two",
        "/three",
        "/complete"
      ]
    },
    "is_view_of_existing_experiment": true,
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18.html"
  }
]
```

## Sources
- [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf): 有限状态模型、现金补足、指标持仓鞅判据、两条基本定理及有限维分离完整证明. 数值输入属于另行冻结的教学市场，不归称讲义报价.

## Content relations
```json
[
  {
    "from": "zh-qt18",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt18-measures",
    "relation": "illustrated_by",
    "to": "EXP-STATE-01",
    "reason": "同一冻结输入的当前视图；证明与算术分别呈现."
  },
  {
    "from": "zh-qt18",
    "relation": "requires",
    "to": "zh-qt07",
    "reason": "本证明实际调用的局部能力.",
    "required_competence": "分清决定持仓与揭晓终端结果的时点."
  },
  {
    "from": "qt18-complete",
    "relation": "derived_from",
    "to": "qt18p1-ftap",
    "reason": "一般有限期定理的完整证明，主篇一期例不冒充一般证明."
  },
  {
    "from": "qt18-complete",
    "relation": "derived_from",
    "to": "qt18p2-theorem",
    "reason": "一般有限期定理的完整证明，主篇一期例不冒充一般证明."
  },
  {
    "from": "qt18-model",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3；章节 PDF 未标可靠修订日期. 数值市场是 EXP-STATE-01，2026-09-21-v1 的独立教学构造，不是讲义市场报价.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-model"
    ]
  },
  {
    "from": "qt18-replication",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 §3.3，Theorem 3.3.1，印刷 p.51 / PDF p.7，复制价值的条件期望表示. 本文一期持仓由显示的矩阵直接求解.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-replicate"
    ]
  },
  {
    "from": "qt18-measures",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 Definitions 3.2.1–3.2.2、Lemma 3.2.3、Theorem 3.2.4，印刷 pp.44–50 / PDF pp.4–7；正状态价格的一期充分性由本文内积直接证明，一般必要性在 QT18-P1.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-ftap"
    ]
  },
  {
    "from": "qt18-incomplete",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 §3.3，Theorems 3.3.2–3.3.3，印刷 pp.52–55 / PDF pp.8–9；本文三状态开放区间及端点套利由显示的资产和持仓直接重建.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-complete"
    ]
  },
  {
    "from": "qt18-complete",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 §3.3，Theorems 3.3.2–3.3.3，印刷 pp.52–55 / PDF pp.8–9；本文三状态开放区间及端点套利由显示的资产和持仓直接重建.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-complete"
    ]
  }
]
```

## Related entries
