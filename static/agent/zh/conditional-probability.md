# 条件概率、独立性与信息更新

从同一联合表选对条件分母，重建 Bayes 更新，并分清独立、不相关与因果.

Entry: zh-qt05 | Node: QT05 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 由联合概率表推导条件概率和Bayes公式，检查条件事件的正概率要求；用反例区分独立、不相关与条件独立. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTB-MIT-CONDITIONING",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/5ba99e3803701c145f1d06c26dcf61b8_MIT6_436JF18_lec03.pdf"
      },
      "required_unit": {
        "locator": "§1、§2 开头，pp.1–4",
        "scope": "完整条件概率、全概率、Bayes 推导及独立性定义",
        "purpose": "先确认正分母与方向，随后用四状态表教学"
      },
      "supports": "支持正概率事件的条件概率、Bayes 与独立性的定义. 四状态表与三点不相关反例为本包自行构造，不是讲义中的金融数据.",
      "title": "Lecture 3: Conditioning and Independence",
      "authors": [
        "MIT 6.436J/15.085J",
        "Yury Polyanskiy（课程教师）"
      ],
      "version": "Fall 2018"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-B-review-v3",
    "experiment": {
      "id": "EXP-QTB-EVENTS-01",
      "title": "选事件，再选条件",
      "anchor": "qt05-example",
      "description": "同一份联合分布中，选择一个事件和一个条件. 先找分母，再比较交换条件前后的结果.",
      "inputs": {
        "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
        "shared_file": "shared_inputs.json",
        "paths": [
          "shared_case.events",
          "shared_case.probabilities",
          "defaults.events"
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
        "p_event": 0.2,
        "p_given": 0.6000000000000001,
        "p_intersection": 0.2,
        "conditional": 0.3333333333333333,
        "reverse_conditional": 1,
        "conditional_defined": true,
        "reverse_defined": true,
        "independent": false,
        "product": 0.12000000000000002,
        "intersection": [
          3
        ]
      },
      "algorithm": "对事件索引求和得到 pa,pb,joint；pb>0 时 joint/pb，否则输出 null/undefined；另算反向条件与 joint−pa*pb.",
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
        "概率有限且在[0,1]内，总和在1e-12容差内为1；不自动归一化",
        "事件索引唯一合法",
        "零条件事件输出未定义，不填0"
      ],
      "static_equivalent": {
        "body_anchor": "qt05-example",
        "default_table_html": "<div class=\"table-wrap\"><table><caption>默认四状态模型</caption><thead><tr><th>P(T)</th><th>P(H)</th><th>P(T∩H)</th><th>P(T|H)</th><th>P(H|T)</th></tr></thead><tbody><tr><td>0.2</td><td>0.6</td><td>0.2</td><td>1/3</td><td>1</td></tr></tbody></table></div>",
        "scope": "默认及正文列明的迁移算例，不依赖点击状态"
      },
      "execution": {
        "status": "executed",
        "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
        "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
      },
      "source_ids": [
        "QTB-MIT-CONDITIONING"
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
  "learning_task": "由联合概率表推导条件概率和Bayes公式，检查条件事件的正概率要求；用反例区分独立、不相关与条件独立.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
给定一份联合分布后，条件概率把计算范围限制到条件事件，并用该事件的概率重新归一化. 本例的概率是模型输入.

<a id="qt05-definition"></a>
## 条件概率

令 $(\Omega,\mathcal F,P)$ 为概率空间，$A,B\in\mathcal F$ 且 $P(B)>0$，则**给定 $B$ 的条件概率**是指

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

条件概率在B内重新归一化，全空间质量1，交集分解保留可列可加性. $P(B)=0$ 时该比值未定义.[^conditional]

若 $B_1,\ldots,B_m$ 两两不交并覆盖 $\Omega$，则 $A$ 是各个 $A\cap B_i$ 的不交并，故

$$
P(A)=\sum_{i:P(B_i)>0}P(A\mid B_i)P(B_i).
$$

零概率项直接对交集取零，不在那里计算条件比值. 进一步，若 $P(A)>0$ 且 $P(B_i)>0$，由 $P(A\cap B_i)=P(A\mid B_i)P(B_i)$ 得到 **Bayes 公式**

$$
P(B_i\mid A)
=\frac{P(A\mid B_i)P(B_i)}
{\sum_{j:P(B_j)>0}P(A\mid B_j)P(B_j)}.
$$

Bayes公式用同一交集交换条件方向，分母为所观测事件的概率.

<a id="qt05-example"></a>
## 条件方向与联合表

四个模型状态中先收到L/H信号，T表示尾部状态：

| 状态 | 模型概率 | 信号 | 是否属于 $T$ |
|---|---:|---|---|
| $\omega_1$ | $0.1$ | $L$ | 否 |
| $\omega_2$ | $0.3$ | $L$ | 否 |
| $\omega_3$ | $0.4$ | $H$ | 否 |
| $\omega_4$ | $0.2$ | $H$ | 是 |

这里 $H=\{\omega_3,\omega_4\}$，$T=\{\omega_4\}$. 不附加信息时 $P(T)=0.2$；得知 $H$ 以后，只在总质量为 $0.6$ 的后两行中比较：

$$
P(T\mid H)=\frac{0.2}{0.6}=\frac13.
$$

反过来，得知 $T$ 以后只剩最后一行，而这一行一定属于 $H$：

$$
P(H\mid T)=\frac{0.2}{0.2}=1.
$$

Bayes给 $P(T\mid H)=1\times0.2/0.6=1/3$；$P(H\mid T)=1$ 则来自T包含于H.

<div data-experiment-slot="EXP-QTB-EVENTS-01"></div>

计算顺序是“筛出条件行—算交集质量—除以条件质量”. 默认模型结果如下：

| 对象 | $P(T)$ | $P(H)$ | $P(T\cap H)$ | $P(T\mid H)$ | $P(H\mid T)$ |
|---|---:|---:|---:|---:|---:|
| 默认模型 | $0.2$ | $0.6$ | $0.2$ | $1/3$ | $1$ |

<a id="qt05-independence"></a>
## 独立与不相关

令 $A,B$ 为事件，则二者**独立**是指 $P(A\cap B)=P(A)P(B)$. 这个乘法定义不需要除法，也适用于零概率事件. 只有当 $P(B)>0$ 时，才可等价改写为 $P(A\mid B)=P(A)$. 上述例中 $0.2\ne0.2\times0.6$，因此 $T$ 与 $H$ 不独立. [^independence]

随机变量独立要求其取值事件满足同样的乘法规则，不能只检查协方差. 例如令 $U$ 等概率取 $-1,0,1$，$V=U^2$. 对称性给出 $\mathbb{E}[U]=\mathbb{E}[U^3]=0$，所以 $\operatorname{Cov}(U,V)=0$；但事件 $\{U=0\}$ 和 $\{V=0\}$ 完全相同，交集概率为 $1/3$，并非 $(1/3)^2$. 不相关仍可以保留明显的非线性关系.

同样，独立性要连同条件一起看. 两枚独立公平硬币原本独立；给定“两次结果相同”后，只剩 $HH,TT$ 两个等概率结果. 此时已知第一枚正面，就确定第二枚也是正面. 原分布独立，不代表条件分布仍独立.

这些更新只改变既定联合分布下的条件集合；若要讨论干预 $H$ 对 $T$ 的因果效应，还需要额外的因果结构.

<a id="qt05-tests"></a>
## 练习与解析

**题 1.** 默认表中，得知 $L$ 后 $T$ 的概率是多少？若把 $H$ 两行的概率都改为零，还能计算 $P(T\mid H)$ 吗？

**解析.** $P(L)=0.4$、$T\cap L=\varnothing$，所以 $P(T\mid L)=0$. $P(H)=0$ 时条件比值未定义.

**题 2.** 另一模型有 $P(T)=0.1$、$P(H\mid T)=0.8$、$P(H\mid T^c)=0.2$. 收到 $H$ 后 $T$ 的概率是多少？

**解析.** $P(H)=0.8(0.1)+0.2(0.9)=0.26$，故 $P(T\mid H)=0.08/0.26=4/13$.

[^conditional]: MIT 6.436J/15.085J, *Lecture 3: Conditioning and Independence*，Fall 2018，§1、pp.1–3：条件概率、全概率与 Bayes 公式. [公开讲义](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/5ba99e3803701c145f1d06c26dcf61b8_MIT6_436JF18_lec03.pdf).
[^independence]: 同讲义 §2 开头、pp.3–4 的独立性定义.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QTB-EVENTS-01",
    "title": "选事件，再选条件",
    "anchor": "qt05-example",
    "description": "同一份联合分布中，选择一个事件和一个条件. 先找分母，再比较交换条件前后的结果.",
    "inputs": {
      "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
      "shared_file": "shared_inputs.json",
      "paths": [
        "shared_case.events",
        "shared_case.probabilities",
        "defaults.events"
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
      "p_event": 0.2,
      "p_given": 0.6000000000000001,
      "p_intersection": 0.2,
      "conditional": 0.3333333333333333,
      "reverse_conditional": 1,
      "conditional_defined": true,
      "reverse_defined": true,
      "independent": false,
      "product": 0.12000000000000002,
      "intersection": [
        3
      ]
    },
    "algorithm": "对事件索引求和得到 pa,pb,joint；pb>0 时 joint/pb，否则输出 null/undefined；另算反向条件与 joint−pa*pb.",
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
      "概率有限且在[0,1]内，总和在1e-12容差内为1；不自动归一化",
      "事件索引唯一合法",
      "零条件事件输出未定义，不填0"
    ],
    "static_equivalent": {
      "body_anchor": "qt05-example",
      "default_table_html": "<div class=\"table-wrap\"><table><caption>默认四状态模型</caption><thead><tr><th>P(T)</th><th>P(H)</th><th>P(T∩H)</th><th>P(T|H)</th><th>P(H|T)</th></tr></thead><tbody><tr><td>0.2</td><td>0.6</td><td>0.2</td><td>1/3</td><td>1</td></tr></tbody></table></div>",
      "scope": "默认及正文列明的迁移算例，不依赖点击状态"
    },
    "execution": {
      "status": "executed",
      "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
      "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
    },
    "source_ids": [
      "QTB-MIT-CONDITIONING"
    ]
  }
]
```

## Sources
- [Lecture 3: Conditioning and Independence](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/5ba99e3803701c145f1d06c26dcf61b8_MIT6_436JF18_lec03.pdf): 正概率事件下的条件概率、Bayes 公式与独立性的定义.

## Content relations
```json
[
  {
    "from": "zh-qt05",
    "relation": "part_of",
    "to": "quant-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt05",
    "relation": "supported_by",
    "to": "QTB-MIT-CONDITIONING",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "§1、§2 开头，pp.1–4",
    "scope": "支持正概率事件的条件概率、Bayes 与独立性的定义. 四状态表与三点不相关反例为本包自行构造，不是讲义中的金融数据."
  },
  {
    "from": "qt05-example",
    "relation": "illustrated_by",
    "to": "EXP-QTB-EVENTS-01",
    "reason": "同一份联合分布中，选择一个事件和一个条件. 先找分母，再比较交换条件前后的结果."
  },
  {
    "from": "zh-qt05",
    "relation": "uses_method",
    "to": "zh-qt09",
    "reason": "需要严谨事件域时就地查询，不要求先读完整测度单元"
  }
]
```

## Related entries
