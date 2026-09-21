# 条件期望：按已有信息分组平均

用有限分区计算条件平均，验证每个可辨认事件上的积分身份和全期望公式。

Entry: zh-conditional-expectation | Node: QT06 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在使用一份公开教学包，读者具有高年级本科至研究生的数学背景。先实际读取 required_readings 中本次采用的完整单元，再进入讲解；记录版本、页/节、关键假设与支持范围。仅取得目录、摘要或失败链接不算读完。已在本次会话完整取得的同一版本可以复用。找不到正文时尝试已核公开等价版本并说明版本变化，仍缺失则明确缺少的单元，不编造已读内容。
以下正文、输入和解析为共同来源，不能自行改变数字或把教学概率改称样本频率、现实真值或定价测度。不要访问账户。每次推进一个完整推理任务；已掌握的基础可跳过讲解，但承重条件不能省略。静态说明与交互同义；工具不能运行时直接使用完整静态输入与精确计算，不声称运行过实验。

当前词条：QT06《条件期望：按已有信息分组平均》。本次只教这个节点及选择的证明分支。
诊断任务：先问 L/H 信息下是否可以在后两行分别预测 10000 与 20000；再让读者计算合法的组内条件平均。
通过标准：能按 0.4/0.6 组概率再平均得到 8000，验证全部信息事件而不只验证总体，并解释零概率组的版本仍需可测。
先让读者作解释或计算，再依完整解析反馈；最后更换分组、概率或条件做迁移，不能只询问“懂了吗”。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "QTB-MIT-CE",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf"
      },
      "required_unit": {
        "locator": "§1.1–§1.2，pp.1–6",
        "scope": "离散条件平均、全期望、条件期望作为随机变量的完整相关段",
        "purpose": "把组内平均、可测性与所有信息事件的积分身份相接"
      },
      "supports": "支持离散条件平均、全期望和条件期望本身为随机变量。讲义部分 g(Y) 表述简写，本文额外保留所需可积/有界条件，不采用无条件的乘积期望断言。",
      "title": "Recitation 3: Conditional Expectations",
      "authors": [
        "MIT 6.436J/15.085J"
      ],
      "version": "Fall 2018"
    },
    {
      "source_id": "QTB-CBOE-SPX",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf"
      },
      "required_unit": {
        "locator": "p.2 合约规格",
        "scope": "Contract Multiplier、Exercise Style、Settlement of Option Exercise、Final Settlement Value 四个条款",
        "purpose": "核单位和结算值；区分真实条款与教学数字"
      },
      "supports": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别。不支持本包设定的行权价、情景、信号、概率或模型平均为价格。",
      "title": "SPX Index Options Fact Sheet",
      "authors": [
        "Cboe"
      ],
      "version": "页脚 ©2026；文件未标独立修订日"
    }
  ],
  "optional_readings": [
    {
      "source_id": "QTB-DEMBO-2021",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://adembo.su.domains/stat-310b/lnotes.pdf"
      },
      "required_unit": {
        "locator": "Theorem 4.1.2 pp.153–156",
        "scope": "一般 L1 条件期望存在唯一证明",
        "purpose": "从有限分组进入一般定义"
      },
      "supports": "定义与条件的公开依据。采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出。一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论。",
      "branch": "一般条件期望"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-B-review-v3",
    "experiment": {
      "id": "EXP-QTB-CONDITIONAL-01",
      "title": "信息分组与条件平均",
      "anchor": "qt06-case",
      "description": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量。",
      "inputs": {
        "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
        "shared_file": "shared_inputs.json",
        "paths": [
          "shared_case",
          "defaults.conditional"
        ],
        "values": {
          "shared_case": {
            "id": "EXP-COND-01",
            "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
            "state_ids": [
              "w1",
              "w2",
              "w3",
              "w4"
            ],
            "probabilities": [
              0.1,
              0.3,
              0.4,
              0.2
            ],
            "signals": [
              "L",
              "L",
              "H",
              "H"
            ],
            "settlement_points": [
              5900,
              6000,
              6100,
              6200
            ],
            "strike_points": 6000,
            "multiplier_usd_per_point": 100,
            "contracts": 1,
            "payoff_type": "call",
            "probability_measure": "P_model",
            "clocks": {
              "t0": "未观察信号",
              "t1": "模型约定已收到 L/H 信号",
              "t2": "合约规定结算值确定；支付金额可计算",
              "cash_delivery": "与 t2 的金额确定区分，不在本实验建立账户到账/交收模型"
            },
            "partitions": {
              "trivial": [
                [
                  0,
                  1,
                  2,
                  3
                ]
              ],
              "signal": [
                [
                  0,
                  1
                ],
                [
                  2,
                  3
                ]
              ],
              "full": [
                [
                  0
                ],
                [
                  1
                ],
                [
                  2
                ],
                [
                  3
                ]
              ],
              "cross": [
                [
                  0,
                  2
                ],
                [
                  1,
                  3
                ]
              ]
            },
            "partition_labels": {
              "trivial": "尚无信号",
              "signal": "只知 L/H",
              "full": "完整状态",
              "cross": "交叉分组 {1,3}/{2,4}"
            },
            "events": {
              "H": [
                2,
                3
              ],
              "T": [
                3
              ],
              "L": [
                0,
                1
              ],
              "all": [
                0,
                1,
                2,
                3
              ],
              "empty": []
            },
            "case_source_ids": [
              "QTB-CBOE-SPX"
            ]
          },
          "defaults": {
            "events": {
              "event": "T",
              "given": "H"
            },
            "conditional": {
              "partition": "signal"
            },
            "measurable": {
              "partition": "signal",
              "candidate": [
                0,
                1,
                2,
                2
              ]
            },
            "projection": {
              "partition": "signal",
              "candidate_usd": [
                0,
                0,
                10000,
                10000
              ],
              "outer_partition": "trivial"
            },
            "rn": {
              "partition": "signal",
              "shift_usd": 15000
            },
            "integration": {
              "pareto_alpha": 1.5,
              "cap": 100,
              "spike_n": 10,
              "probe_x": 0.02,
              "dyadic_n": 4
            }
          }
        }
      },
      "outputs": {
        "rows": [
          {
            "indices": [
              0,
              1
            ],
            "mass": 0.4,
            "total": 0,
            "mean": 0,
            "ratio_defined": true,
            "version_note": ""
          },
          {
            "indices": [
              2,
              3
            ],
            "mass": 0.6000000000000001,
            "total": 8000,
            "mean": 13333.333333333332,
            "ratio_defined": true,
            "version_note": ""
          }
        ],
        "vector": [
          0,
          0,
          13333.333333333332,
          13333.333333333332
        ],
        "expectation": 8000,
        "conditional_expectation": 8000
      },
      "algorithm": "每组 mass=sum(p_i)，total=sum(p_i*x_i)，mass>0 时 mean=total/mass；零组不相除而取常数0版本；将组值回填各行并核全期望。",
      "units": {
        "probabilities": "dimensionless",
        "settlement_points": "index points (contract-defined settlement value)",
        "payoff": "USD / one contract",
        "expectation": "USD",
        "mse": "USD^2",
        "pareto": "dimensionless pedagogical variable, support [1,infinity)",
        "spike": "dimensionless on (0,1) with Lebesgue probability"
      },
      "boundaries": [
        "划分非空、无遗漏、无重复",
        "零概率组采用可测常数0版本，明确比值未定义",
        "不以小于某epsilon判断零组"
      ],
      "static_equivalent": {
        "body_anchor": "qt06-case",
        "default_table_html": "<div class=\"table-wrap\"><table><caption>按组保留积分</caption><thead><tr><th>信息组</th><th>概率</th><th>支付积分（美元）</th><th>条件平均（美元）</th></tr></thead><tbody><tr><td>L</td><td>0.4</td><td>0</td><td>0</td></tr><tr><td>H</td><td>0.6</td><td>8,000</td><td>40,000/3</td></tr></tbody></table></div><p>全期望：0.4×0 + 0.6×(40,000/3) = 8,000 美元。完整状态已知时条件期望等于 X。</p>",
        "scope": "默认及正文列明的迁移算例，不依赖点击状态"
      },
      "execution": {
        "status": "executed",
        "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
        "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
      },
      "source_ids": [
        "QTB-MIT-CE",
        "QTB-CBOE-SPX"
      ]
    },
    "shared_inputs": {
      "schema_version": "qt-b-inputs-1",
      "content_version": "2026-09-21-QT-B-review-v3",
      "shared_case": {
        "id": "EXP-COND-01",
        "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
        "state_ids": [
          "w1",
          "w2",
          "w3",
          "w4"
        ],
        "probabilities": [
          0.1,
          0.3,
          0.4,
          0.2
        ],
        "signals": [
          "L",
          "L",
          "H",
          "H"
        ],
        "settlement_points": [
          5900,
          6000,
          6100,
          6200
        ],
        "strike_points": 6000,
        "multiplier_usd_per_point": 100,
        "contracts": 1,
        "payoff_type": "call",
        "probability_measure": "P_model",
        "clocks": {
          "t0": "未观察信号",
          "t1": "模型约定已收到 L/H 信号",
          "t2": "合约规定结算值确定；支付金额可计算",
          "cash_delivery": "与 t2 的金额确定区分，不在本实验建立账户到账/交收模型"
        },
        "partitions": {
          "trivial": [
            [
              0,
              1,
              2,
              3
            ]
          ],
          "signal": [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ],
          "full": [
            [
              0
            ],
            [
              1
            ],
            [
              2
            ],
            [
              3
            ]
          ],
          "cross": [
            [
              0,
              2
            ],
            [
              1,
              3
            ]
          ]
        },
        "partition_labels": {
          "trivial": "尚无信号",
          "signal": "只知 L/H",
          "full": "完整状态",
          "cross": "交叉分组 {1,3}/{2,4}"
        },
        "events": {
          "H": [
            2,
            3
          ],
          "T": [
            3
          ],
          "L": [
            0,
            1
          ],
          "all": [
            0,
            1,
            2,
            3
          ],
          "empty": []
        },
        "case_source_ids": [
          "QTB-CBOE-SPX"
        ]
      },
      "defaults": {
        "events": {
          "event": "T",
          "given": "H"
        },
        "conditional": {
          "partition": "signal"
        },
        "measurable": {
          "partition": "signal",
          "candidate": [
            0,
            1,
            2,
            2
          ]
        },
        "projection": {
          "partition": "signal",
          "candidate_usd": [
            0,
            0,
            10000,
            10000
          ],
          "outer_partition": "trivial"
        },
        "rn": {
          "partition": "signal",
          "shift_usd": 15000
        },
        "integration": {
          "pareto_alpha": 1.5,
          "cap": 100,
          "spike_n": 10,
          "probe_x": 0.02,
          "dyadic_n": 4
        }
      },
      "named_cases": {
        "zero_group": {
          "probabilities": [
            0.25,
            0.75,
            0,
            0
          ],
          "partition": "signal"
        },
        "zero_atom": {
          "probabilities": [
            0.25,
            0.75,
            0,
            0
          ],
          "partition": "full"
        },
        "bad_future_candidate": {
          "candidate_usd": [
            0,
            0,
            10000,
            20000
          ]
        },
        "cap_grid": [
          10,
          100,
          1000
        ],
        "alpha_grid": [
          0.8,
          1,
          1.5,
          3
        ],
        "integration_spike_grid": [
          2,
          10,
          100
        ],
        "mse_probe_grid_usd": [
          0,
          10000,
          13333.333333333334,
          20000
        ],
        "dyadic_grid": [
          1,
          2,
          4,
          8
        ]
      },
      "units": {
        "probabilities": "dimensionless",
        "settlement_points": "index points (contract-defined settlement value)",
        "payoff": "USD / one contract",
        "expectation": "USD",
        "mse": "USD^2",
        "pareto": "dimensionless pedagogical variable, support [1,infinity)",
        "spike": "dimensionless on (0,1) with Lebesgue probability"
      },
      "numerical_policy": {
        "probability_sum_absolute_tolerance": 1e-12,
        "calculation_relative_tolerance": 1e-10,
        "calculation_absolute_tolerance": 1e-08,
        "null_group": "mass exactly zero; conditional ratios undefined; canonical CE constant 0 on that group; never infer impossibility outside the model",
        "normalization": "invalid probabilities rejected, never silently normalized",
        "finite": "all finite numeric inputs required",
        "identity": "fixed finite model; no stochastic simulation and no financial return denominator used"
      }
    },
    "body_scope": "完整正文、静态核算与题目解析"
  }
}
```

## Supplied entry
我们有时不知道最终落在哪个状态，却已知道它属于哪一组。此时要计算的平均既不能忽略已知信息，也不能偷偷使用组内尚未揭晓的结果。本页只需要有限概率、[条件概率](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-probability/)和加权平均，不需要先学尾部风险。

<a id="qt06-definition"></a>
## 有限分组的定义

令有限样本空间 $\Omega$ 上的状态概率为 $p_\omega$，$X$ 为有限实值随机变量。取非空集合 $A_1,\ldots,A_m$ 两两不交并覆盖 $\Omega$，并假设目前能辨认的恰是这些组及其并集，记为 $\mathcal G=\sigma(A_1,\ldots,A_m)$。这个记号的含义可在 [可测信息](https://ou-liu-red-sugar.github.io/zh/notebook/measurable-information/) 中查询。

若 $P(A_i)>0$，则在第 $i$ 组中的条件平均为
$$
m_i=\frac{\sum_{\omega\in A_i}p_\omega X(\omega)}
{\sum_{\omega\in A_i}p_\omega}.
$$
**给定这份信息的条件期望**是随机变量
$$
M=E[X\mid\mathcal G]=\sum_i m_i\,1_{A_i}.
$$
在零概率组上可选择任一有限常数作为 $m_i$；以下统一取 $0$。这是一个版本约定，不是给 $0/0$ 定义了数值。[^finite]

$M$ 是一个函数：收到第 $i$ 组的消息时，我们使用数 $m_i$。所以“给定某个已经发生的组后的平均数”和“在消息到达前定义的条件期望随机变量”有关，但不是同一种对象。

<a id="qt06-case"></a>
## 看见信号后，支付怎样平均

下面使用一份**教学情景表**。支付约定参考标准 SPX 欧式现金结算看涨期权：每指数点对应 $100$ 美元。这里的行权价 $6000$、四个结算值、信号和概率均为人为设定，不是实际挂牌报价或估出的市场概率。$S_T$ 表示合约规则指定的结算值，而不是随便选的一笔最后成交价。支付 $X=100(S_T-6000)^+$ 是一份合约的美元金额。[^spx]

| 状态 | 模型概率 | 先收到的信号 | $S_T$（点） | $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | $0.1$ | $L$ | $5900$ | $0$ |
| $\omega_2$ | $0.3$ | $L$ | $6000$ | $0$ |
| $\omega_3$ | $0.4$ | $H$ | $6100$ | $10000$ |
| $\omega_4$ | $0.2$ | $H$ | $6200$ | $20000$ |

模型约定先收到 $L/H$，以后才知道结算值。金额被确定，不等于经纪账户已收到现金；本例没有另建账户入账和交收账本。这里计算的是模型支付的条件平均，也没有扣权利金或贴现，**不是期权利润或价格**。

收到 $L$ 后，两行支付都为零，所以 $m_L=0$。收到 $H$ 后，组内概率不是各一半，而是
$$
P(\omega_3\mid H)=\frac{0.4}{0.6}=\frac23,\qquad
P(\omega_4\mid H)=\frac13.
$$
因此
$$
m_H=\frac23(10000)+\frac13(20000)=\frac{40000}{3}.
$$

换句话说，$M$ 在前两行取 $0$，在后两行取 $40000/3$ 美元。不能在后两行分别填 $10000,20000$：那需要已经知道完整状态，而当前只知道同一个 $H$ 信号。

<div data-experiment-slot="EXP-QTB-CONDITIONAL-01"></div>

保持概率和支付不变，只改变可用信息，得到下面的静态对照：

| 状态 | 尚无信号：$E[X]$ | 只知 $L/H$：$E[X\mid\mathcal G]$ | 完整状态已知：$X$ |
|---|---:|---:|---:|
| $\omega_1$ | $8000$ | $0$ | $0$ |
| $\omega_2$ | $8000$ | $0$ | $0$ |
| $\omega_3$ | $8000$ | $40000/3$ | $10000$ |
| $\omega_4$ | $8000$ | $40000/3$ | $20000$ |

信息变细并不使条件期望在每条状态上都上升：从中间列走到最后一列，第三行下降，第四行上升。变多的是可区分的结果，而不是每个结果中的平均数。

<a id="qt06-identity"></a>
## 为什么这个平均保留了正确的信息

对每个正概率组，定义直接给出
$$
\sum_{\omega\in A_i}p_\omega M(\omega)
=m_iP(A_i)
=\sum_{\omega\in A_i}p_\omega X(\omega).
$$
零概率组的两边均为零。任意 $B\in\mathcal G$ 都是若干组的并，把这些组的等式相加，便有
$$
E[M1_B]=E[X1_B].
$$
此外，$M$ 在每组中为常数，因此由当前信息便能确定它的值，即 $M$ 是 $\mathcal G$-可测的。这两点正好成为 [一般条件期望](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation-projection/) 的定义。

特别地，取 $B=\Omega$ 得到全期望公式。本例中
$$
E[M]=0.4(0)+0.6\left(\frac{40000}{3}\right)=8000
=0.4(10000)+0.2(20000)=E[X].
$$
这里必须按组的概率加权，不能把 $0$ 和 $40000/3$ 直接各乘一半。

仅保留总体平均仍不够。例如常数 $8000$ 的确与 $X$ 有相同期望，但它在 $L$ 上的积分是 $8000(0.4)=3200$，而 $X$ 在 $L$ 上的积分为零。已经知道的 $L$ 消息被它忽略了。

<a id="qt06-tests"></a>
## 自检与解析

**题 1。** 改为三个可辨认组 $\{\omega_1\}$、$\{\omega_2,\omega_3\}$、$\{\omega_4\}$，重新计算条件期望及其总体平均。

**解析。** 三组概率为 $0.1,0.7,0.2$，组内平均依次为 $0$、$4000/0.7=40000/7$、$20000$。因此条件期望向量为 $(0,40000/7,40000/7,20000)$，其期望是 $0.7(40000/7)+0.2(20000)=8000$。第二组必须把零支付状态 $\omega_2$ 的概率放进分母。

**题 2。** 保持原来的 $L/H$ 信息，但另设概率为 $(0.25,0.75,0,0)$。在 $H$ 上取 $M=0$ 和取 $M=100$，哪一个是条件期望？能否在 $\omega_3,\omega_4$ 上分别取 $0,100$？

**解析。** 前两种都是版本：它们在 $H$ 这整个零概率组上取常数，因而仍可测，且不改变任何积分。后一种在同一组中取不同值，不再对 $L/H$ 信息可测；“只差在零概率集合上”不能自动免除可测性要求。应在选定事件域下讨论版本。

[^finite]: MIT, *Recitation 3: Conditional Expectations*，Fall 2018，§1.1，pp.1–4 的离散条件平均与全期望；§1.2，pp.4–6 将它视为随机变量及说明一般定义的职责。[公开全文](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf)。有限分区的积分验证在本文直接给出。
[^spx]: Cboe, *SPX Index Options Fact Sheet*，页脚 ©2026，p.2：乘数、欧式行权、现金结算，以及 SPX Traditional 与 SPXW 不同的结算值口径。[产品规格](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)。本文只借用支付规则；所有数值情景、信号及概率为教学假设。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QTB-CONDITIONAL-01",
    "title": "信息分组与条件平均",
    "anchor": "qt06-case",
    "description": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量。",
    "inputs": {
      "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
      "shared_file": "shared_inputs.json",
      "paths": [
        "shared_case",
        "defaults.conditional"
      ],
      "values": {
        "shared_case": {
          "id": "EXP-COND-01",
          "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
          "state_ids": [
            "w1",
            "w2",
            "w3",
            "w4"
          ],
          "probabilities": [
            0.1,
            0.3,
            0.4,
            0.2
          ],
          "signals": [
            "L",
            "L",
            "H",
            "H"
          ],
          "settlement_points": [
            5900,
            6000,
            6100,
            6200
          ],
          "strike_points": 6000,
          "multiplier_usd_per_point": 100,
          "contracts": 1,
          "payoff_type": "call",
          "probability_measure": "P_model",
          "clocks": {
            "t0": "未观察信号",
            "t1": "模型约定已收到 L/H 信号",
            "t2": "合约规定结算值确定；支付金额可计算",
            "cash_delivery": "与 t2 的金额确定区分，不在本实验建立账户到账/交收模型"
          },
          "partitions": {
            "trivial": [
              [
                0,
                1,
                2,
                3
              ]
            ],
            "signal": [
              [
                0,
                1
              ],
              [
                2,
                3
              ]
            ],
            "full": [
              [
                0
              ],
              [
                1
              ],
              [
                2
              ],
              [
                3
              ]
            ],
            "cross": [
              [
                0,
                2
              ],
              [
                1,
                3
              ]
            ]
          },
          "partition_labels": {
            "trivial": "尚无信号",
            "signal": "只知 L/H",
            "full": "完整状态",
            "cross": "交叉分组 {1,3}/{2,4}"
          },
          "events": {
            "H": [
              2,
              3
            ],
            "T": [
              3
            ],
            "L": [
              0,
              1
            ],
            "all": [
              0,
              1,
              2,
              3
            ],
            "empty": []
          },
          "case_source_ids": [
            "QTB-CBOE-SPX"
          ]
        },
        "defaults": {
          "events": {
            "event": "T",
            "given": "H"
          },
          "conditional": {
            "partition": "signal"
          },
          "measurable": {
            "partition": "signal",
            "candidate": [
              0,
              1,
              2,
              2
            ]
          },
          "projection": {
            "partition": "signal",
            "candidate_usd": [
              0,
              0,
              10000,
              10000
            ],
            "outer_partition": "trivial"
          },
          "rn": {
            "partition": "signal",
            "shift_usd": 15000
          },
          "integration": {
            "pareto_alpha": 1.5,
            "cap": 100,
            "spike_n": 10,
            "probe_x": 0.02,
            "dyadic_n": 4
          }
        }
      }
    },
    "outputs": {
      "rows": [
        {
          "indices": [
            0,
            1
          ],
          "mass": 0.4,
          "total": 0,
          "mean": 0,
          "ratio_defined": true,
          "version_note": ""
        },
        {
          "indices": [
            2,
            3
          ],
          "mass": 0.6000000000000001,
          "total": 8000,
          "mean": 13333.333333333332,
          "ratio_defined": true,
          "version_note": ""
        }
      ],
      "vector": [
        0,
        0,
        13333.333333333332,
        13333.333333333332
      ],
      "expectation": 8000,
      "conditional_expectation": 8000
    },
    "algorithm": "每组 mass=sum(p_i)，total=sum(p_i*x_i)，mass>0 时 mean=total/mass；零组不相除而取常数0版本；将组值回填各行并核全期望。",
    "units": {
      "probabilities": "dimensionless",
      "settlement_points": "index points (contract-defined settlement value)",
      "payoff": "USD / one contract",
      "expectation": "USD",
      "mse": "USD^2",
      "pareto": "dimensionless pedagogical variable, support [1,infinity)",
      "spike": "dimensionless on (0,1) with Lebesgue probability"
    },
    "boundaries": [
      "划分非空、无遗漏、无重复",
      "零概率组采用可测常数0版本，明确比值未定义",
      "不以小于某epsilon判断零组"
    ],
    "static_equivalent": {
      "body_anchor": "qt06-case",
      "default_table_html": "<div class=\"table-wrap\"><table><caption>按组保留积分</caption><thead><tr><th>信息组</th><th>概率</th><th>支付积分（美元）</th><th>条件平均（美元）</th></tr></thead><tbody><tr><td>L</td><td>0.4</td><td>0</td><td>0</td></tr><tr><td>H</td><td>0.6</td><td>8,000</td><td>40,000/3</td></tr></tbody></table></div><p>全期望：0.4×0 + 0.6×(40,000/3) = 8,000 美元。完整状态已知时条件期望等于 X。</p>",
      "scope": "默认及正文列明的迁移算例，不依赖点击状态"
    },
    "execution": {
      "status": "executed",
      "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
      "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
    },
    "source_ids": [
      "QTB-MIT-CE",
      "QTB-CBOE-SPX"
    ]
  }
]
```

## Sources
- [SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别。不支持本包设定的行权价、情景、信号、概率或模型平均为价格。
- [Recitation 3: Conditional Expectations](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf): 支持离散条件平均、全期望和条件期望本身为随机变量。讲义部分 g(Y) 表述简写，本文额外保留所需可积/有界条件，不采用无条件的乘积期望断言。

## Content relations
```json
[
  {
    "from": "zh-conditional-expectation",
    "relation": "part_of",
    "to": "quant-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-conditional-expectation",
    "relation": "supported_by",
    "to": "QTB-MIT-CE",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "§1.1–§1.2，pp.1–6",
    "scope": "支持离散条件平均、全期望和条件期望本身为随机变量。讲义部分 g(Y) 表述简写，本文额外保留所需可积/有界条件，不采用无条件的乘积期望断言。"
  },
  {
    "from": "zh-conditional-expectation",
    "relation": "supported_by",
    "to": "QTB-CBOE-SPX",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "p.2 合约规格",
    "scope": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别。不支持本包设定的行权价、情景、信号、概率或模型平均为价格。"
  },
  {
    "from": "qt06-case",
    "relation": "illustrated_by",
    "to": "EXP-QTB-CONDITIONAL-01",
    "reason": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量。"
  },
  {
    "from": "zh-conditional-expectation",
    "relation": "uses_method",
    "to": "zh-qt05",
    "reason": "计算正概率组内的条件权重；不以 QT04 作为先修"
  },
  {
    "from": "zh-conditional-expectation",
    "relation": "uses_method",
    "to": "zh-qt09",
    "reason": "解释有限分组与可测性"
  }
]
```

## Related entries
