# 条件期望：按已有信息分组平均

用有限分区计算条件平均，验证每个可辨认事件上的积分身份和全期望公式.

Entry: zh-conditional-expectation | Node: QT06 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 在有限分区上构造条件期望，证明可测性、可积性、积分身份及几乎处处唯一性；说明零概率组中合法常数版本和塔式性质所需嵌套条件. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "supports": "支持离散条件平均、全期望和条件期望本身为随机变量. 讲义部分 g(Y) 表述简写，本文额外保留所需可积/有界条件，不采用无条件的乘积期望断言.",
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
      "supports": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格.",
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
      "supports": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.",
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
      "description": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量.",
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
      "algorithm": "每组 mass=sum(p_i)，total=sum(p_i*x_i)，mass>0 时 mean=total/mass；零组不相除而取常数0版本；将组值回填各行并核全期望.",
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
        "default_table_html": "<div class=\"table-wrap\"><table><caption>按组保留积分</caption><thead><tr><th>信息组</th><th>概率</th><th>支付积分（美元）</th><th>条件平均（美元）</th></tr></thead><tbody><tr><td>L</td><td>0.4</td><td>0</td><td>0</td></tr><tr><td>H</td><td>0.6</td><td>8,000</td><td>40,000/3</td></tr></tbody></table></div><p>全期望：0.4×0 + 0.6×(40,000/3) = 8,000 美元. 完整状态已知时条件期望等于 X.</p>",
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
  },
  "learning_task": "在有限分区上构造条件期望，证明可测性、可积性、积分身份及几乎处处唯一性；说明零概率组中合法常数版本和塔式性质所需嵌套条件.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
当信息只辨认出结果属于某一分组时，条件期望用 [条件概率](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-probability/) 在组内重新加权，并在同组取同一值；组内尚未揭晓的状态不能被提前区分.

<a id="qt06-definition"></a>
## 有限分组定义

令有限样本空间 $\Omega$ 上的状态概率为 $p_\omega$，$X$ 为有限实值随机变量. 取非空集合 $A_1,\ldots,A_m$ 两两不交并覆盖 $\Omega$，并假设目前能辨认的恰是这些组及其并集，记为 $\mathcal G=\sigma(A_1,\ldots,A_m)$. 这个记号的含义可在 [可测信息](https://ou-liu-red-sugar.github.io/zh/notebook/measurable-information/) 中查询.

若 $P(A_i)>0$，则在第 $i$ 组中的条件平均为

$$
m_i=\frac{\sum_{\omega\in A_i}p_\omega X(\omega)}
{\sum_{\omega\in A_i}p_\omega}.
$$

**给定这份信息的条件期望**是随机变量

$$
M=\mathbb{E}[X\mid\mathcal G]=\sum_i m_i\,1_{A_i}.
$$

在零概率组上可选择任一有限常数作为 $m_i$；以下统一取 $0$. 该约定在零概率组保持可测且不改变积分. [^finite]

M将每个状态映射到其所在组的平均值，观察第i组后得到数值 $m_i$.

<a id="qt06-case"></a>
## 信号与条件支付

采用 $K=6000$、四个结算值、$L/H$ 信号与模型概率作为算例输入. 支付规则按标准 SPX 欧式现金结算看涨期权，每指数点对应 $100$ 美元；$S_T$ 表示合约规则指定的结算值，$X=100(S_T-6000)^+$ 为一份合约的美元结算金额. [^spx]

| 状态 | 模型概率 | 先收到的信号 | $S_T$（点） | $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | $0.1$ | $L$ | $5900$ | $0$ |
| $\omega_2$ | $0.3$ | $L$ | $6000$ | $0$ |
| $\omega_3$ | $0.4$ | $H$ | $6100$ | $10000$ |
| $\omega_4$ | $0.2$ | $H$ | $6200$ | $20000$ |

模型中先观察 $L/H$，随后才揭晓结算值. 这里的 $X$ 是到期结算金额，未扣权利金也未贴现，因此条件平均针对支付金额而非净损益或期权价格.

收到 $L$ 后，两行支付都为零，所以 $m_L=0$. 收到 $H$ 后，条件概率为

$$
P(\omega_3\mid H)=\frac{0.4}{0.6}=\frac23,\qquad
P(\omega_4\mid H)=\frac13.
$$

因此

$$
m_H=\frac23(10000)+\frac13(20000)=\frac{40000}{3}.
$$

M在L组取0、H组取 $40000/3$，与当前能辨认的分组一致.

<div data-experiment-slot="EXP-QTB-CONDITIONAL-01"></div>

保持概率和支付不变，只改变可用信息，得到下面的静态对照：

| 状态 | 尚无信号：$\mathbb{E}[X]$ | 只知 $L/H$：$\mathbb{E}[X\mid\mathcal G]$ | 完整状态已知：$X$ |
|---|---:|---:|---:|
| $\omega_1$ | $8000$ | $0$ | $0$ |
| $\omega_2$ | $8000$ | $0$ | $0$ |
| $\omega_3$ | $8000$ | $40000/3$ | $10000$ |
| $\omega_4$ | $8000$ | $40000/3$ | $20000$ |

信息细化可使条件期望上升或下降：从L/H列到完整状态列，第三行下降、第四行上升.

<a id="qt06-identity"></a>
## 事件上的积分身份

对每个正概率组，定义直接给出

$$
\sum_{\omega\in A_i}p_\omega M(\omega)
=m_iP(A_i)
=\sum_{\omega\in A_i}p_\omega X(\omega).
$$

零概率组的两边均为零. 任意 $B\in\mathcal G$ 都是若干组的并，把这些组的等式相加，便有

$$
\mathbb{E}[M1_B]=\mathbb{E}[X1_B].
$$

此外，$M$ 在每组中为常数，因此由当前信息便能确定它的值，即 $M$ 是 $\mathcal G$-可测的. 这两点正好成为 [一般条件期望](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation-projection/) 的定义.

特别地，取 $B=\Omega$ 得到全期望公式. 本例中

$$
\mathbb{E}[M]=0.4(0)+0.6\left(\frac{40000}{3}\right)=8000
=0.4(10000)+0.2(20000)=\mathbb{E}[X].
$$

仅保留总体平均仍不够. 例如常数 $8000$ 的确与 $X$ 有相同期望，但它在 $L$ 上的积分是 $8000(0.4)=3200$，而 $X$ 在 $L$ 上的积分为零. 已经知道的 $L$ 消息被它忽略了.

<a id="qt06-tests"></a>
## 练习与解析

**题 1.** 改为三个可辨认组 $\{\omega_1\}$、$\{\omega_2,\omega_3\}$、$\{\omega_4\}$，重新计算条件期望及其总体平均.

**解析.** 三组概率为 $0.1,0.7,0.2$，组内平均依次为 $0$、$4000/0.7=40000/7$、$20000$. 因此条件期望向量为 $(0,40000/7,40000/7,20000)$，其期望是 $0.7(40000/7)+0.2(20000)=8000$. 第二组必须把零支付状态 $\omega_2$ 的概率放进分母.

**题 2.** 保持原来的 $L/H$ 信息，但另设概率为 $(0.25,0.75,0,0)$. 在 $H$ 上取 $M=0$ 和取 $M=100$，哪一个是条件期望？能否在 $\omega_3,\omega_4$ 上分别取 $0,100$？

**解析.** 整个零概率H组分别取常数0或100，均为可测版本且保持积分. 在同组两点取不同值破坏对当前事件域的可测性，因此后一函数不符合定义.

[^finite]: MIT, *Recitation 3: Conditional Expectations*，Fall 2018，§1.1，pp.1–4（离散条件平均与全期望）；§1.2，pp.4–6（条件期望作为随机变量及一般定义）.[公开全文](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2：乘数、欧式行权、现金结算，以及 SPX Traditional 与 SPXW 不同的结算值口径. [产品规格](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QTB-CONDITIONAL-01",
    "title": "信息分组与条件平均",
    "anchor": "qt06-case",
    "description": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量.",
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
    "algorithm": "每组 mass=sum(p_i)，total=sum(p_i*x_i)，mass>0 时 mean=total/mass；零组不相除而取常数0版本；将组值回填各行并核全期望.",
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
      "default_table_html": "<div class=\"table-wrap\"><table><caption>按组保留积分</caption><thead><tr><th>信息组</th><th>概率</th><th>支付积分（美元）</th><th>条件平均（美元）</th></tr></thead><tbody><tr><td>L</td><td>0.4</td><td>0</td><td>0</td></tr><tr><td>H</td><td>0.6</td><td>8,000</td><td>40,000/3</td></tr></tbody></table></div><p>全期望：0.4×0 + 0.6×(40,000/3) = 8,000 美元. 完整状态已知时条件期望等于 X.</p>",
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
- [SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格.
- [Recitation 3: Conditional Expectations](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf): 离散条件平均、全期望及条件期望作为随机变量的定义. 涉及可测乘子的条件期望恒等式需满足相应可积性或有界条件.

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
    "scope": "支持离散条件平均、全期望和条件期望本身为随机变量. 讲义部分 g(Y) 表述简写，本文额外保留所需可积/有界条件，不采用无条件的乘积期望断言."
  },
  {
    "from": "zh-conditional-expectation",
    "relation": "supported_by",
    "to": "QTB-CBOE-SPX",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "p.2 合约规格",
    "scope": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格."
  },
  {
    "from": "qt06-case",
    "relation": "illustrated_by",
    "to": "EXP-QTB-CONDITIONAL-01",
    "reason": "在同一支付变量上改变信息分组，逐组检查 M×P(组) 是否等于 X 在该组的加权总量."
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
