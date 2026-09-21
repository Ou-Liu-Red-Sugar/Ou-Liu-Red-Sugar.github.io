# 条件期望的存在性：从 Radon–Nikodym 定理到可用信息

在较小事件域上构造有限绝对连续测度，以两项 RN 密度建立一般 $L^1$ 条件期望.

Entry: zh-qt11p1 | Node: QT11-P1 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 检查受限事件域上的两有限测度、可列可加及绝对连续，调用Radon–Nikodym定理构造非负与有符号条件期望；重建RN定理的Lebesgue分解证明链，注明Hahn分解依赖，比较正负部分与条件平均的正负部. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTB-DEMBO-2021",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://adembo.su.domains/stat-310b/lnotes.pdf"
      },
      "required_unit": {
        "locator": "Theorem 4.1.2 pp.154–156；Definition 4.1.4、Theorem 4.1.5 p.155；Remark p.156",
        "scope": "条件期望存在性构造及完整 RN 定理条件；两项密度非结果正负部分的说明",
        "purpose": "逐项核 ν± 的测度性、有限性、绝对连续与所得函数可积性"
      },
      "supports": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.",
      "title": "Probability Theory: STAT310/MATH230",
      "authors": [
        "Amir Dembo"
      ],
      "version": "2021-04-15（PDF 标题页；不等同于此前规划的 2019 版）"
    },
    {
      "source_id": "QTB-DEMBO-2021",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://adembo.su.domains/stat-310b/lnotes.pdf"
      },
      "required_unit": {
        "locator": "非负积分 pp.31–34；MCT 证明 p.41",
        "scope": "非负积分及单调收敛完整相关单元",
        "purpose": "支撑可列可加性和零测集积分"
      },
      "supports": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.",
      "title": "Probability Theory: STAT310/MATH230",
      "authors": [
        "Amir Dembo"
      ],
      "version": "2021-04-15（PDF 标题页；不等同于此前规划的 2019 版）"
    },
    {
      "source_id": "QTB-CBOE-SPX",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf"
      },
      "required_unit": {
        "locator": "p.2 合约规格",
        "scope": "乘数与结算值的条款单元",
        "purpose": "只确认例子的支付单位，不赋予概率市场身份"
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
        "locator": "§4.1.2 pp.156–158",
        "scope": "RN 与 Lebesgue 分解证明、辅助引理与 sigma-有限推广；保留 Hahn 定理引用",
        "purpose": "明确何处继续下钻；不把目录视为已读证明"
      },
      "supports": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.",
      "branch": "完整 RN 证明"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-B-review-v3",
    "experiment": {
      "id": "EXP-QTB-RN-01",
      "title": "两个密度与结果的正负部分",
      "anchor": "qt11p1-experiment",
      "description": "先分别平均 W 的正负部分，再相减；观察这两个平均与结果自身的正负部分为什么不同.",
      "inputs": {
        "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
        "shared_file": "shared_inputs.json",
        "paths": [
          "shared_case",
          "defaults.rn"
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
        "w": [
          -15000,
          -15000,
          -5000,
          5000
        ],
        "plus": [
          0,
          0,
          0,
          5000
        ],
        "minus": [
          15000,
          15000,
          5000,
          0
        ],
        "u": {
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
              "total": 1000,
              "mean": 1666.6666666666665,
              "ratio_defined": true,
              "version_note": ""
            }
          ],
          "vector": [
            0,
            0,
            1666.6666666666665,
            1666.6666666666665
          ],
          "expectation": 1000,
          "conditional_expectation": 1000
        },
        "v": {
          "rows": [
            {
              "indices": [
                0,
                1
              ],
              "mass": 0.4,
              "total": 6000,
              "mean": 15000,
              "ratio_defined": true,
              "version_note": ""
            },
            {
              "indices": [
                2,
                3
              ],
              "mass": 0.6000000000000001,
              "total": 2000,
              "mean": 3333.333333333333,
              "ratio_defined": true,
              "version_note": ""
            }
          ],
          "vector": [
            15000,
            15000,
            3333.333333333333,
            3333.333333333333
          ],
          "expectation": 8000,
          "conditional_expectation": 8000
        },
        "m": [
          -15000,
          -15000,
          -1666.6666666666665,
          -1666.6666666666665
        ],
        "m_plus": [
          0,
          0,
          0,
          0
        ],
        "m_minus": [
          15000,
          15000,
          1666.6666666666665,
          1666.6666666666665
        ],
        "expectation": -7000,
        "conditional_expectation": -7000,
        "total_nu_plus": 1000,
        "total_nu_minus": 8000,
        "rows": [
          {
            "indices": [
              0,
              1
            ],
            "mass": 0.4,
            "nu_plus": 0,
            "nu_minus": 6000,
            "u": 0,
            "v": 15000,
            "m": -15000,
            "m_plus": 0,
            "m_minus": 15000,
            "ratio_defined": true
          },
          {
            "indices": [
              2,
              3
            ],
            "mass": 0.6000000000000001,
            "nu_plus": 1000,
            "nu_minus": 2000,
            "u": 1666.6666666666665,
            "v": 3333.333333333333,
            "m": -1666.6666666666665,
            "m_plus": 0,
            "m_minus": 1666.6666666666665,
            "ratio_defined": true
          }
        ]
      },
      "algorithm": "W=X−c，分别取正负部分；对各组计算ν±并除以组概率求U,V；零组取0版本；M=U−V；另外计算M+/M−供对照，核EW=EM.",
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
        "ν±不归一化",
        "W的平移不是权利金",
        "U,V与M+/M−分别计算",
        "零组不做0/0，积分恒等与可测性均保留"
      ],
      "static_equivalent": {
        "body_anchor": "qt11p1-experiment",
        "default_table_html": "<div class=\"table-wrap\"><table><caption>W=X−15,000；金额单位均为美元</caption><thead><tr><th>组</th><th>U=E[W⁺|G]</th><th>V=E[W⁻|G]</th><th>M=U−V</th><th>M⁺</th><th>M⁻</th></tr></thead><tbody><tr><td>L</td><td>0</td><td>15,000</td><td>−15,000</td><td>0</td><td>15,000</td></tr><tr><td>H</td><td>5,000/3</td><td>10,000/3</td><td>−5,000/3</td><td>0</td><td>5,000/3</td></tr></tbody></table></div><p>ν₊ 总量 1,000 美元，ν₋ 总量 8,000 美元，所以 E[W]=−7,000 美元. U、V 不是 M 的正负部分.</p>",
        "scope": "默认及正文列明的迁移算例，不依赖点击状态"
      },
      "execution": {
        "status": "executed",
        "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
        "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
      },
      "source_ids": [
        "QTB-DEMBO-2021",
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
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 检查受限事件域上的两有限测度、可列可加及绝对连续，调用Radon–Nikodym定理构造非负与有符号条件期望；重建RN定理的Lebesgue分解证明链，注明Hahn分解依赖，比较正负部分与条件平均的正负部. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "检查受限事件域上的两有限测度、可列可加及绝对连续，调用Radon–Nikodym定理构造非负与有符号条件期望；重建RN定理的Lebesgue分解证明链，注明Hahn分解依赖，比较正负部分与条件平均的正负部.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
一般概率空间未必由正概率原子构成. 连续变量的精确取值事件常为零概率，有限分组中的比值公式无法直接延用.

Radon–Nikodym定理将 $A\mapsto\int_A X\,dP$ 表示为当前事件域上的可测密度，由此构造条件期望.

<a id="qt11p1-target"></a>
## 条件期望存在性

**定理（条件期望存在性）.** 令 $(\Omega,\mathcal F,P)$ 为概率空间，$\mathcal G\subseteq\mathcal F$ 为子 $\sigma$-代数，$X$ 为实值随机变量且 $\mathbb{E}|X|<\infty$. 则存在实值、$\mathcal G$-可测的 $M$，满足

$$
\mathbb{E}|M|<\infty,\qquad
\int_A M\,dP=\int_A X\,dP\quad(A\in\mathcal G).
$$

因而 $M$ 是 $\mathbb{E}[X\mid\mathcal G]$ 的一个版本.[^ce]

**调用定理（Radon–Nikodym）.** 令 $(S,\mathcal A)$ 为可测空间，$\mu,\nu$ 为其上的两个非负、$\sigma$-有限测度. 若 $\nu\ll\mu$，即

$$
\mu(A)=0\Longrightarrow\nu(A)=0\quad(A\in\mathcal A),
$$

则存在非负 $\mathcal A$-可测函数 $h$，满足

$$
\nu(A)=\int_Ah\,d\mu\quad(A\in\mathcal A).
$$

$h$ 在 $\mu$-几乎处处意义下唯一，称为 $\frac{d\nu}{d\mu}$. 在上述 $\sigma$-有限假设下可选取有限值版本；若 $\nu(S)<\infty$，则 $h\in L^1(\mu)$. $\sigma$-有限表示空间能由可数个有限测度集合覆盖. [^rn]

本次构造使用有限测度，自动满足 $\sigma$-有限. RN定理的Lebesgue分解证明及Hahn分解依赖见所引单元.[^rn]

<a id="qt11p1-nonnegative"></a>
## 非负可积构造

先设 $X\ge0$ 且 $\mathbb{E}X<\infty$. 我们把测度都定义在 **$(\Omega,\mathcal G)$** 上：

$$
\mu=P|_{\mathcal G},\qquad
\nu(A)=\int_A X\,dP\quad(A\in\mathcal G).
$$

$X$ 本身不必 $\mathcal G$-可测，这不妨碍右侧的积分：它在原空间 $(\Omega,\mathcal F,P)$ 上计算，而 $A\in\mathcal G\subseteq\mathcal F$.

首先，$\nu(\varnothing)=0$、$\nu(A)\ge0$. 若 $A_1,A_2,\ldots\in\mathcal G$ 两两不交，则非负函数

$$
X\sum_{k=1}^n1_{A_k}\uparrow X1_{\bigcup_{k\ge1}A_k}.
$$

有限积分的线性性及单调收敛给出

$$
\nu\left(\bigcup_{k\ge1}A_k\right)
=\lim_{n\to\infty}\sum_{k=1}^n\int_{A_k}X\,dP
=\sum_{k\ge1}\nu(A_k).
$$

所以 $\nu$ 可列可加. 其次，$\nu(\Omega)=\mathbb{E}X<\infty$，而 $\mu(\Omega)=1$，两者都有限. 最后，若 $\mu(A)=P(A)=0$，对零概率集合的非负积分为零，故 $\nu(A)=0$，也就是 $\nu\ll\mu$. [^integral]

现在所有 RN 条件都已满足. 取 $h=d\nu/d\mu$，则 $h$ 是 **$\mathcal G$-可测**的，而且

$$
\int_\Omega h\,d\mu=\nu(\Omega)=\mathbb{E}X<\infty.
$$

因此 $h$ 几乎处处有限. 将 $\{h=\infty\}\in\mathcal G$ 上的值统一改为零，可得到处处有限而仍可测的版本. 对 $\mathcal G$-可测函数，按 $\mu=P|_{\mathcal G}$ 积分与按 $P$ 积分相同：先检查指示函数，再用简单函数和非负逼近即可. 于是对每个 $A\in\mathcal G$，

$$
\int_Ah\,dP=\int_Ah\,d\mu=\nu(A)=\int_AX\,dP.
$$

所以 $M=h$ 就是所求变量. RN 密度把事件测度 $\nu$ 表示为相对于 $\mu$ 的 $\mathcal G$-可测函数.

<a id="qt11p1-signed"></a>
## 有符号构造

一般 $X\in L^1$ 时，写成 $X=X^+-X^-$，其中 $X^+=\max(X,0)$、$X^-=\max(-X,0)$. $\mathbb{E}X^+$ 与 $\mathbb{E}X^-$ 都有限.

在 $(\Omega,\mathcal G)$ 上分别定义

$$
\nu_+(A)=\mathbb{E}[X^+1_A],\qquad \nu_-(A)=\mathbb{E}[X^-1_A].
$$

上节已经证明这两项是相对于 $\mu$ 绝对连续的有限非负测度. 因此可以分别取 RN 密度

$$
U=\frac{d\nu_+}{d\mu},\qquad V=\frac{d\nu_-}{d\mu}.
$$

在共同的 $\mathcal G$-可测例外零测集上把两者都改为零，令 $M=U-V$. 此时 $M$ 处处有定义，且

$$
\mathbb{E}|M|\le \mathbb{E}[U+V]=\mathbb{E}X^++\mathbb{E}X^-=\mathbb{E}|X|<\infty.
$$

对每个 $A\in\mathcal G$，我们只在两个**有限积分**之间作减法：

$$
\int_AM\,dP
=\int_AU\,dP-\int_AV\,dP
=\int_AX^+\,dP-\int_AX^-\,dP
=\int_AX\,dP.
$$

可测性、可积性和积分身份都已验证，存在性证明完成. 再结合 [条件期望的唯一性证明](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation-projection/)，便得到完整的存在唯一结论.

这里用 $U,V$ 表示 $X^+,X^-$ 的两项条件平均；**一般而言**

$$
\mathbb{E}[X^+\mid\mathcal G]\ne \big(\mathbb{E}[X\mid\mathcal G]\big)^+.
$$

$X^+$ 和 $X^-$ 在每个状态不能同时为正；平均以后，两个条件平均却可以在同一个信息组里都为正. 它们在相减前已经把组内不同状态混合了.[^parts]

<a id="qt11p1-experiment"></a>
## 四状态密度

仍设 $P=(0.1,0.3,0.4,0.2)$，信息只分 L/H，其中 $L=\{1,2\}$、$H=\{3,4\}$. 看涨支付为 $X=(0,0,10000,20000)$ 美元；金额按 SPX 每指数点 100 美元的产品约定换算，四状态和概率为教学设定.[^spx]

对非负支付，$\mu(L)=0.4$、$\mu(H)=0.6$，$\nu(L)=0$、$\nu(H)=8000$. 组内常数 $h_A$ 满足 $h_A\mu(A)=\nu(A)$：

| 信息组 | $\mu(A)$ | $\nu(A)$（美元） | 密度 $h_A$（美元） |
|---|---:|---:|---:|
| L | 0.4 | 0 | 0 |
| H | 0.6 | 8000 | $40000/3$ |

$\nu(\Omega)=8000$，$\nu$ 是有限测度，密度的单位随 $X$ 为美元.

为了比较正负部分，令 $W=X-15000$ 美元，其中 15000 是教学参考金额. 此时

$$
W=(-15000,-15000,-5000,5000).
$$

在 H 组，正部分来自第四个状态，负部分来自第三个状态. 因此

$$
U_H=\frac{0.2(5000)}{0.6}=\frac{5000}{3},\qquad
V_H=\frac{0.4(5000)}{0.6}=\frac{10000}{3}.
$$

两项都严格为正，但

$$
M_H=U_H-V_H=-\frac{5000}{3},\qquad
(M_H)^+=0,\quad(M_H)^-=\frac{5000}{3}.
$$

$U_H$ 不是 $(M_H)^+$，$V_H$ 也不是 $(M_H)^-$. 全体平均仍然一致：

$$
\mathbb{E}M=0.4(-15000)+0.6(-5000/3)=-7000=\mathbb{E}X-15000.
$$

<div data-experiment-slot="EXP-QTB-RN-01"></div>

对 L 组，$U_L=0,V_L=15000,M_L=-15000$；改变参考金额时可按同一组内积分关系重算 $U,V$ 与 $M^+,M^-$.

<a id="qt11p1-exercises"></a>
## 练习与解析

**题一.** 对非负可积 $X$，在 $(\Omega,\mathcal F)$ 上定义 $\nu(A)=\int_AX\,dP$. 求相对于 $P$ 的RN密度，并说明将事件域限制到 $\mathcal G$ 会改变什么.

**解析.** 原空间的密度为 $X$，未必对 $\mathcal G$ 可测. 把测度限制到 $(\Omega,\mathcal G)$，RN定理输出 $\mathcal G$-可测密度.

**题二：测度必须归一化吗？** 在上表中，把 $\nu$ 除以 8000 使其总量为一，再求相对于 $\mu$ 的密度，最后得到的是 $\mathbb{E}[X\mid\mathcal G]$ 吗？

**解析.** 归一化测度的密度为 $\mathbb{E}[X\mid\mathcal G]/8000$. 恢复原积分与单位需乘回8000.

**题三：RN 的绝对连续条件不能省.** 在 $([0,1],\mathcal B([0,1]))$ 上，令 $\mu$ 是 Lebesgue 概率、$\nu=\delta_0$. 能否存在 $h\ge0$ 使所有 Borel 集 $A$ 都满足 $\nu(A)=\int_Ah\,d\mu$？

**解析.** 取 $A=\{0\}$，左侧为1，右侧对零测集积分为0，矛盾. 此例违反 $\nu\ll\mu$.

**题四：零概率组上能否直接做除法？** 若一组 $A\in\mathcal G$ 的概率是零，应怎样给条件期望选版本？

**解析.** $\mu(A)=\nu_+(A)=\nu_-(A)=0$，比值 $0/0$ 未定义. 组内可统一取任意有限常数，保持 $\mathcal G$-可测性且不改变积分.

[^ce]: Amir Dembo, *Probability Theory: STAT310/MATH230*, 2021-04-15，Theorem 4.1.2，pp.154–156. [原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=154).
[^rn]: 同书，Definition 4.1.4、Theorem 4.1.5，p.155；§4.1.2 “Proof of the Radon–Nikodym theorem”，pp.156–158；Hahn 分解见 Theorem 4.1.12.[定理与证明入口](https://adembo.su.domains/stat-310b/lnotes.pdf#page=155).
[^integral]: 同书，Definition 1.3.1、Theorem 1.3.4 及证明，pp.31–33、41；非负积分与单调收敛用于上述测度的定义和可列可加性.
[^parts]: 同书，p.156，存在性证明后的 Remark. [原页](https://adembo.su.domains/stat-310b/lnotes.pdf#page=156).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2，乘数与结算值规格；访问于 2026-09-21. [原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf#page=2).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QTB-RN-01",
    "title": "两个密度与结果的正负部分",
    "anchor": "qt11p1-experiment",
    "description": "先分别平均 W 的正负部分，再相减；观察这两个平均与结果自身的正负部分为什么不同.",
    "inputs": {
      "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
      "shared_file": "shared_inputs.json",
      "paths": [
        "shared_case",
        "defaults.rn"
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
      "w": [
        -15000,
        -15000,
        -5000,
        5000
      ],
      "plus": [
        0,
        0,
        0,
        5000
      ],
      "minus": [
        15000,
        15000,
        5000,
        0
      ],
      "u": {
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
            "total": 1000,
            "mean": 1666.6666666666665,
            "ratio_defined": true,
            "version_note": ""
          }
        ],
        "vector": [
          0,
          0,
          1666.6666666666665,
          1666.6666666666665
        ],
        "expectation": 1000,
        "conditional_expectation": 1000
      },
      "v": {
        "rows": [
          {
            "indices": [
              0,
              1
            ],
            "mass": 0.4,
            "total": 6000,
            "mean": 15000,
            "ratio_defined": true,
            "version_note": ""
          },
          {
            "indices": [
              2,
              3
            ],
            "mass": 0.6000000000000001,
            "total": 2000,
            "mean": 3333.333333333333,
            "ratio_defined": true,
            "version_note": ""
          }
        ],
        "vector": [
          15000,
          15000,
          3333.333333333333,
          3333.333333333333
        ],
        "expectation": 8000,
        "conditional_expectation": 8000
      },
      "m": [
        -15000,
        -15000,
        -1666.6666666666665,
        -1666.6666666666665
      ],
      "m_plus": [
        0,
        0,
        0,
        0
      ],
      "m_minus": [
        15000,
        15000,
        1666.6666666666665,
        1666.6666666666665
      ],
      "expectation": -7000,
      "conditional_expectation": -7000,
      "total_nu_plus": 1000,
      "total_nu_minus": 8000,
      "rows": [
        {
          "indices": [
            0,
            1
          ],
          "mass": 0.4,
          "nu_plus": 0,
          "nu_minus": 6000,
          "u": 0,
          "v": 15000,
          "m": -15000,
          "m_plus": 0,
          "m_minus": 15000,
          "ratio_defined": true
        },
        {
          "indices": [
            2,
            3
          ],
          "mass": 0.6000000000000001,
          "nu_plus": 1000,
          "nu_minus": 2000,
          "u": 1666.6666666666665,
          "v": 3333.333333333333,
          "m": -1666.6666666666665,
          "m_plus": 0,
          "m_minus": 1666.6666666666665,
          "ratio_defined": true
        }
      ]
    },
    "algorithm": "W=X−c，分别取正负部分；对各组计算ν±并除以组概率求U,V；零组取0版本；M=U−V；另外计算M+/M−供对照，核EW=EM.",
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
      "ν±不归一化",
      "W的平移不是权利金",
      "U,V与M+/M−分别计算",
      "零组不做0/0，积分恒等与可测性均保留"
    ],
    "static_equivalent": {
      "body_anchor": "qt11p1-experiment",
      "default_table_html": "<div class=\"table-wrap\"><table><caption>W=X−15,000；金额单位均为美元</caption><thead><tr><th>组</th><th>U=E[W⁺|G]</th><th>V=E[W⁻|G]</th><th>M=U−V</th><th>M⁺</th><th>M⁻</th></tr></thead><tbody><tr><td>L</td><td>0</td><td>15,000</td><td>−15,000</td><td>0</td><td>15,000</td></tr><tr><td>H</td><td>5,000/3</td><td>10,000/3</td><td>−5,000/3</td><td>0</td><td>5,000/3</td></tr></tbody></table></div><p>ν₊ 总量 1,000 美元，ν₋ 总量 8,000 美元，所以 E[W]=−7,000 美元. U、V 不是 M 的正负部分.</p>",
      "scope": "默认及正文列明的迁移算例，不依赖点击状态"
    },
    "execution": {
      "status": "executed",
      "runtime": "Chromium 144.0.7559.96 JavaScript in author sandbox",
      "independent_check": "Python Fraction 的共同四状态精确结果；其余边界见验证报告"
    },
    "source_ids": [
      "QTB-DEMBO-2021",
      "QTB-CBOE-SPX"
    ]
  }
]
```

## Sources
- [SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格.
- [Probability Theory: STAT310/MATH230](https://adembo.su.domains/stat-310b/lnotes.pdf): 定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.

## Content relations
```json
[
  {
    "from": "zh-qt11p1",
    "relation": "part_of",
    "to": "quant-data-info",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt11p1",
    "relation": "supported_by",
    "to": "QTB-DEMBO-2021",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "Theorem 4.1.2 pp.154–156；Definition 4.1.4、Theorem 4.1.5 p.155；Remark p.156",
    "scope": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论."
  },
  {
    "from": "zh-qt11p1",
    "relation": "supported_by",
    "to": "QTB-CBOE-SPX",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "p.2 合约规格",
    "scope": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格."
  },
  {
    "from": "qt11p1-experiment",
    "relation": "illustrated_by",
    "to": "EXP-QTB-RN-01",
    "reason": "先分别平均 W 的正负部分，再相减；观察这两个平均与结果自身的正负部分为什么不同."
  },
  {
    "from": "zh-qt11p1",
    "relation": "requires",
    "to": "zh-qt10",
    "reason": "核可列可加性与非负密度构造",
    "required_competence": "能使用 L1 正负部分、零测集积分与单调收敛"
  },
  {
    "from": "qt11p1-nonnegative",
    "relation": "derived_from",
    "to": "QTB-DEMBO-2021",
    "reason": "RN 定理构造密度；本篇验证所有适用条件",
    "locator": "Theorem 4.1.5，p.155；§4.1.2，pp.156–158",
    "scope": "调用完整 RN 定理；不重证 Hahn 分解"
  },
  {
    "from": "zh-qt11p1",
    "relation": "compares_with",
    "to": "zh-conditional-expectation",
    "reason": "有限分组公式是一般构造可逐项复算的情形"
  }
]
```

## Related entries
