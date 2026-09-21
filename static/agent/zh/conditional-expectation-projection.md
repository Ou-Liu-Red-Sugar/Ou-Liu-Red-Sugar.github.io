# 条件期望、投影与预测目标

由局部积分定义证明唯一性和塔式性质，再通过截断补齐 L2 投影与均方误差分解.

Entry: zh-qt11 | Node: QT11 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在使用一份公开教学包，读者具有高年级本科至研究生的数学背景. 先实际读取 required_readings 中本次采用的完整单元，再进入讲解；记录版本、页/节、关键假设与支持范围. 仅取得目录、摘要或失败链接不算读完. 已在本次会话完整取得的同一版本可以复用. 找不到正文时尝试已核公开等价版本并说明版本变化，仍缺失则明确缺少的单元，不编造已读内容.
以下正文、输入和解析为共同来源，不能自行改变数字或把教学概率改称样本频率、现实真值或定价测度. 不要访问账户. 每次推进一个完整推理任务；已掌握的基础可跳过讲解，但承重条件不能省略. 静态说明与交互同义；工具不能运行时直接使用完整静态输入与精确计算，不声称运行过实验.

当前词条：QT11《条件期望、投影与预测目标》. 本次只教这个节点及选择的证明分支.
诊断任务：先给常数 8000 候选，要求只用条件期望定义验证或否定；再让读者在唯一性证明中定位可测性所用的事件.
通过标准：能重建 eps 集合唯一性、嵌套塔式证明、M∈L2 的截断桥和 L2 检验函数延伸；正确计算三项 MSE，并拒绝非法未来候选.
先让读者作解释或计算，再依完整解析反馈；最后更换分组、概率或条件做迁移，不能只询问“懂了吗”.

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
        "locator": "§4.1.1 pp.153–156；Proposition 4.2.8 p.160；Proposition 4.2.10 pp.160–161",
        "scope": "定义、存在唯一的完整单元，塔式性质及提出有界已知量的证明",
        "purpose": "按每个信息事件上的积分身份讲解，不只给公式"
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
        "locator": "Proposition 4.3.1 pp.166–167；Proposition 4.3.7 pp.168–169；MCT p.41 与 DCT pp.42–43",
        "scope": "L2 投影证明、L2 完备性相关单元及截断所用收敛定理",
        "purpose": "核对截断证明的全部依赖，不将 L1 身份直接扩到 L2"
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
        "scope": "乘数、欧式、现金结算和结算值定义",
        "purpose": "不把模型平均称为风险中性价格或到账现金"
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
        "scope": "RN 证明及明列的 Hahn 分解依赖",
        "purpose": "用户追问基础测度表示时继续读；Hahn 完整证明另取原文，不伪称本包已重证"
      },
      "supports": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论.",
      "branch": "RN 基础证明"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-B-review-v3",
    "experiment": {
      "id": "EXP-QTB-PROJECTION-01",
      "title": "合法预测与正交误差分解",
      "anchor": "qt11-experiment",
      "description": "平方误差以美元²计. 候选不依赖未来信息，才属于当前信息允许的比较集合.",
      "inputs": {
        "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
        "shared_file": "shared_inputs.json",
        "paths": [
          "shared_case",
          "defaults.projection",
          "named_cases.bad_future_candidate",
          "named_cases.mse_probe_grid_usd"
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
        "conditional": {
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
        "admissible": true,
        "violations": [],
        "mse_ce": 13333333.333333336,
        "mse_candidate": 20000000,
        "mse_gap": 6666666.666666662,
        "cross_term": 1.862645149230957e-09,
        "identity_residual": -3.725290298461914e-09,
        "pythagoras_residual": 1.862645149230957e-09,
        "residual": [
          0,
          0,
          -3333.333333333332,
          6666.666666666668
        ],
        "tower_default": {
          "nested": true,
          "inner": [
            0,
            0,
            13333.333333333332,
            13333.333333333332
          ],
          "iterated": [
            8000,
            8000,
            8000,
            8000
          ],
          "direct": [
            8000,
            8000,
            8000,
            8000
          ]
        }
      },
      "algorithm": "先算 M；对候选严格检查组内常数，再算三项加权平方误差及交叉项. 由细信息到外层信息前检查每个细组包含于某个粗组. 不可测候选仍显示一般平方展开，但不报告合法最优比较.",
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
        "所有候选与支付有限；本有限模型自动L2",
        "不合法候选显示交叉项，禁止伪称反例",
        "非嵌套塔式不承诺相等；偶然相等不改变条件",
        "理论0与浮点舍入分开，计量单位USD²，无收益率分母"
      ],
      "static_equivalent": {
        "body_anchor": "qt11-experiment",
        "default_table_html": "<div class=\"table-wrap\"><table><thead><tr><th>量</th><th>精确值（美元²）</th><th>近似值</th></tr></thead><tbody><tr><td>E[(X−M)²]</td><td>40,000,000/3</td><td>13,333,333.33</td></tr><tr><td>E[(M−Y)²]</td><td>20,000,000/3</td><td>6,666,666.67</td></tr><tr><td>E[(X−Y)²]</td><td>20,000,000</td><td>20,000,000</td></tr></tbody></table></div><p>Y=(0,0,10,000,10,000) 只用 L/H 信息，合法；Y=X 虽为零误差，却在 H 组有不同取值，因此不是该信息下的合法候选.</p>",
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
  }
}
```

## Supplied entry
我们已经知道，信息会限制一个决定能够依赖什么. 现在把问题再推进一步：若只能使用已有信息，怎样用一个可知的量概括仍然未知的结果？条件期望同时回答两个问题：怎样保留每个可辨认事件上的平均；在平方误差有意义时，怎样找到最好的预测.

本篇以可测性、积分和线性代数为基础. 读完后，应能用定义检验候选条件期望，独立证明唯一性与塔式性质，并说明均方最优结论为什么需要比“期望存在”更强的假设. 对可测性或可积性不熟悉的地方，可就地查阅 [可测空间与信息](https://ou-liu-red-sugar.github.io/zh/notebook/measurable-information/)、[积分与可积性](https://ou-liu-red-sugar.github.io/zh/notebook/integration-expectation/).

<a id="qt11-definition"></a>
## 一、不是只保留一个总平均

固定概率空间 $(\Omega,\mathcal F,P)$、子 $\sigma$-代数 $\mathcal G\subseteq\mathcal F$，以及实值随机变量 $X\in L^1(P)$，即 $\mathbb{E}|X|<\infty$. $\mathcal G$ 表示当前允许使用的信息；$L^1(\mathcal G)$ 中的变量还须 $\mathcal G$-可测.

**定义（条件期望）.** 令上述对象固定，则 **$X$ 关于 $\mathcal G$ 的条件期望**是指满足下列条件的随机变量 $M$：
$$
M\in L^1(\mathcal G),\qquad
\int_A M\,dP=\int_A X\,dP\quad\text{对所有 }A\in\mathcal G.
$$
记作 $M=\mathbb{E}[X\mid\mathcal G]$. 这个记号代表一个几乎处处等价类；选取其中一个具体可测函数，称为一个**版本**. [^ce]

第一个条件说，观察现有信息后能够确定 $M$ 的值. 第二个条件说，不只全体结果上的平均，每个已经能辨认的事件上的加权总量也要保留. 它们缺一不可：$X$ 本身当然保留所有积分，却未必已经可知；常数 $\mathbb{E}X$ 虽然总是可知，也未必保留各个局部事件上的积分.

我们用一张完整的教学情景表检验定义. 采用一份标准 SPX 看涨期权的支付形式：$Z$ 为**合约规定的结算值**，$K=6000$ 点，一张合约的金额为 $X=100(Z-K)^+$ 美元. SPX 的每点 100 美元、欧式行权和现金结算是产品条款；下表的结算情景、概率和提前揭晓的信号则全是人为设定. 它们不是历史频率，也不是从期权价格倒出的概率. [^spx]

| 状态 | 模型概率 | 时点 $t_1$ 已收到的信号 | $t_2$ 结算值（点） | 支付 $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | 0.10 | L | 5900 | 0 |
| $\omega_2$ | 0.30 | L | 6000 | 0 |
| $\omega_3$ | 0.40 | H | 6100 | 10000 |
| $\omega_4$ | 0.20 | H | 6200 | 20000 |

令 $L=\{\omega_1,\omega_2\}$、$H=\{\omega_3,\omega_4\}$、$\mathcal G=\{\varnothing,L,H,\Omega\}$. 在 $t_1$，模型只允许知道 L/H；$t_2$ 才知道结算值. 确定支付金额也不等于账户已经收到现金. 本篇计算支付的平均，尚未建立交易、交收或定价模型.

我们有
$$
\mathbb{E}X=0.10(0)+0.30(0)+0.40(10000)+0.20(20000)=8000.
$$
候选量
$$
M=0\,1_L+\frac{40000}{3}\,1_H
$$
在每组内恒定，所以 $\mathcal G$-可测. 在 $L$ 上，两边积分都是零；在 $H$ 上，
$$
\mathbb{E}[M1_H]=\frac{40000}{3}(0.60)=8000=\mathbb{E}[X1_H].
$$
空集和全空间的等式随之成立，因而它满足完整定义. 反过来，常数 8000 在 $L$ 上的积分是 $8000(0.40)=3200$，并不是零. **保留总平均不等于保留条件平均.**

<a id="qt11-uniqueness"></a>
## 二、为什么只有一个答案，又为什么只能说几乎处处

**命题（唯一性）.** 若 $M,N\in L^1(\mathcal G)$ 都满足上述积分恒等式，则 $M=N$，$P$-几乎处处. [^ce]

**证明.** 对每个正整数 $n$，令 $A_n=\{M-N>1/n\}$. 因为 $M,N$ 都 $\mathcal G$-可测，$A_n\in\mathcal G$，所以可以把它代入定义：
$$
0=\int_{A_n}(M-N)\,dP\ge\frac1nP(A_n).
$$
故 $P(A_n)=0$. 而 $\{M>N\}=\bigcup_{n\ge1}A_n$，可列个零概率事件之并仍为零概率，得到 $P(M>N)=0$. 交换 $M,N$，再得 $P(N>M)=0$，证明完成.

这里可测性不是装饰：若 $A_n$ 不属于 $\mathcal G$，就没有权利把它代入积分恒等式.

“几乎处处”也不能删去. 另取 $\Omega=\{a,b,c\}$、$P(a)=P(b)=1/2$、$P(c)=0$，完整信息下 $X=(2,4,9)$. 函数 $(2,4,0)$ 和 $(2,4,100)$ 都是条件期望版本；在 $c$ 上的值不会改变任何积分. 一般改动还必须保留 $\mathcal G$-可测性，不能因为某集合概率为零就任意拆开一个无法辨认的信息组.

唯一性只说明“若有答案，不会有两个本质不同的答案”. 一般的存在性还需要构造. [条件期望存在性的证明](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation-existence/) 从两个有限测度出发，验证 Radon–Nikodym 定理的适用条件并构造 $M$；因此这里的一般存在性依赖该证明，有限分组公式只是特例.

<a id="qt11-tower"></a>
## 三、先按细信息平均，再回到粗信息

**命题（塔式性质）.** 若 $X\in L^1(P)$，且 $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$，则
$$
\mathbb{E}[\mathbb{E}[X\mid\mathcal G]\mid\mathcal H]=\mathbb{E}[X\mid\mathcal H]\quad\text{a.s.}
$$
这对应 Dembo 的 Proposition 4.2.8，印刷页 160.[^tower]

**证明.** 令 $M=\mathbb{E}[X\mid\mathcal G]$、$N=\mathbb{E}[M\mid\mathcal H]$. $N$ 可积且 $\mathcal H$-可测. 对每个 $A\in\mathcal H$，也有 $A\in\mathcal G$，故
$$
\int_A N\,dP=\int_A M\,dP=\int_A X\,dP.
$$
$N$ 因而满足 $\mathbb{E}[X\mid\mathcal H]$ 的定义，再用唯一性即可.

特别地，取平凡信息 $\mathcal H=\{\varnothing,\Omega\}$，便得到 $\mathbb{E}[M]=\mathbb{E}X$. 在四状态表中，这就是
$$
0.40(0)+0.60\left(\frac{40000}{3}\right)=8000.
$$
不是把两个组平均再等权平均；两个组的概率不同.

嵌套条件必须真的核对. 另一划分 $\{\omega_1,\omega_3\}/\{\omega_2,\omega_4\}$ 与 L/H 交叉，既不更细也不更粗；不能只因为两者各有两组，就套用塔式性质.

<a id="qt11-projection"></a>
## 四、平方误差最优：补齐从 $L^1$ 到 $L^2$ 的桥

现在加强为 $X\in L^2(P)$，并令 $M=\mathbb{E}[X\mid\mathcal G]$. 我们要证明，对任意 $Y\in L^2(\mathcal G)$，
$$
\mathbb{E}[(X-Y)^2]=\mathbb{E}[(X-M)^2]+\mathbb{E}[(M-Y)^2]. \tag{1}
$$
第二项非负，所以 $M$ 最小化均方误差；达到相同最小值的 $Y$ 必须与 $M$ 几乎处处相同. 下面先证明 $M\in L^2$，再由条件期望的定义推导等式.[^projection]

**第一步：从事件推广到有界检验函数.** 定义已给出 $\mathbb{E}[(X-M)1_A]=0$. 有限线性组合说明，对每个 $\mathcal G$-可测简单函数 $V$，有 $\mathbb{E}[(X-M)V]=0$. 若 $V$ 有界，选 $\mathcal G$-可测简单函数 $V_j\to V$，并使 $|V_j|\le \|V\|_\infty+1$. 乘积由 $(\|V\|_\infty+1)|X-M|$ 支配，后者可积. 由支配收敛，
$$
\mathbb{E}[(X-M)V]=0. \tag{2}
$$
这一步只用到了 $X,M\in L^1$. [^bounded]

**第二步：证明 $M\in L^2$，不能先用后证.** 取有界检验函数 $V_n=M1_{\{|M|\le n\}}$. 记
$$
a_n=\mathbb{E}[M^2 1_{\{|M|\le n\}}].
$$
由式 (2) 及 Cauchy–Schwarz，
$$
a_n=\mathbb{E}[XV_n]\le \|X\|_2\|V_n\|_2=\|X\|_2\sqrt{a_n}.
$$
$a_n$ 有限；若 $a_n=0$，结论直接成立，否则两边除以 $\sqrt{a_n}$，得 $a_n\le \mathbb{E}[X^2]$. 因为 $M$ 可取处处有限的实值版本，$M^2 1_{\{|M|\le n\}}\uparrow M^2$，单调收敛给出
$$
\mathbb{E}[M^2]=\lim_n a_n\le \mathbb{E}[X^2]<\infty. \tag{3}
$$
这里用截断证明了所需的 $L^2$ 收缩，不必先建立一般条件 Jensen 不等式.

**第三步：推广到所有 $L^2$ 检验函数.** 对 $V\in L^2(\mathcal G)$，取 $V_n=V1_{\{|V|\le n\}}$. 因为
$$
\mathbb{E}[|V-V_n|^2]=\mathbb{E}[V^2 1_{\{|V|>n\}}]\longrightarrow0,
$$
所以由式 (2)、式 (3) 与 Cauchy–Schwarz，
$$
\left|\mathbb{E}[(X-M)(V-V_n)]\right|
\le \|X-M\|_2\|V-V_n\|_2\longrightarrow0.
$$
于是 $\mathbb{E}[(X-M)V]=0$. 所有乘积都有有限绝对期望，极限交换有明确控制.

**第四步：完成平方展开.** 写成 $X-Y=(X-M)+(M-Y)$. $M-Y\in L^2(\mathcal G)$，上一步使交叉项为零，于是得到式 (1). 若两个预测达到同一最小值，则 $\mathbb{E}[(M-Y)^2]=0$，从而 $M=Y$ a.s.

这就是向 $L^2(\mathcal G)$ 的正交投影. 按 a.s. 等价类识别后，$L^2(\mathcal G)$ 本身完备，包含到 $L^2(\mathcal F)$ 的映射等距，故其像是闭子空间；这里用闭性解释投影视角，条件期望的存在性已经由前面的测度构造给出，不依赖 Hilbert 投影定理.[^closed]

<a id="qt11-experiment"></a>
## 五、重算误差，然后改一项有意义的条件

仍用四状态表，选择只用 L/H 的预测 $Y=0\,1_L+10000\,1_H$. 全部误差都按模型概率加权，不按四行等权平均.

| 量 | $\omega_1$ | $\omega_2$ | $\omega_3$ | $\omega_4$ |
|---|---:|---:|---:|---:|
| $X$（美元） | 0 | 0 | 10000 | 20000 |
| $M$（美元） | 0 | 0 | $40000/3$ | $40000/3$ |
| $Y$（美元） | 0 | 0 | 10000 | 10000 |
| $X-M$（美元） | 0 | 0 | $-10000/3$ | $20000/3$ |

因此
$$
\mathbb{E}[(X-M)^2]
=0.4(10000/3)^2+0.2(20000/3)^2
=\frac{40000000}{3}\ {\rm USD}^2,
$$
$$
\mathbb{E}[(M-Y)^2]
=0.6(10000/3)^2
=\frac{20000000}{3}\ {\rm USD}^2.
$$
两项相加等于 $20000000\ {\rm USD}^2=\mathbb{E}[(X-Y)^2]$. 美元平方是平方误差的单位，不是美元损益，也不是收益率.

<div data-experiment-slot="EXP-QTB-PROJECTION-01"></div>

在交互中先只改 H 组预测值 $y_H$. L 组仍预测零，此时
$$
\mathbb{E}[(X-Y)^2]=\frac{40000000}{3}
+0.6\left(y_H-\frac{40000}{3}\right)^2.
$$
所以 $y_H=0,10000,40000/3,20000$ 时，误差依次为 $120000000,20000000,40000000/3,40000000$ 美元平方. 这张静态对照表述也给出了整条误差曲线.

再把候选改成 $Y=X$：误差确实为零，但 H 组里它取两个不同值，在 $t_1$ 并不可知. **一个不在允许集合内的候选，不能推翻允许集合中的最优结论.** 反过来，当信息确实细化到完整状态，$X$ 就成为合法候选，零误差也就成立.

| 结论 | 本篇采用的条件 |
|---|---|
| 条件期望存在且 a.s. 唯一 | $X\in L^1$，$\mathcal G$ 为子 $\sigma$-代数 |
| 塔式性质 | 上述条件，另有 $\mathcal H\subseteq\mathcal G$ |
| 有限均方误差的正交投影 | $X\in L^2$，比较对象 $Y\in L^2(\mathcal G)$ |
| 从模型平均得到可交易价格或最优策略 | 本篇没有建立；还需要对应的市场与决策模型 |

改变损失函数也会改变预测目标. 均方误差选择条件均值；这不意味着同一个量也最小化每一种损失，更不意味着估计出的模型条件均值等于现实中未知的条件均值.

<a id="qt11-exercises"></a>
## 六、检验与迁移

**题一：只有总平均够不够？** 仍用表中信息 $\mathcal G$，验证常数 8000 与候选 $M$ 都有平均 8000，为什么只有后者是条件期望？

**解析.** $\mathbb{E}[8000]=8000=\mathbb{E}M$，但在事件 $L$ 上，前者的积分为 3200，原支付积分为零. 候选 $M$ 在 L/H 两个原子上分别保留积分，因此在全部可辨认事件上都保留积分. 否定候选只需找一个反例事件，证明成立则必须覆盖所有事件.

**题二：去掉平方可积会怎样？** 令 $X$ 的密度为 $\frac32 x^{-5/2}1_{\{x\ge1\}}$，信息为平凡信息. 条件期望还存在吗？是否仍能用有限均方误差选出唯一常数预测？

**解析.** $\mathbb{E}X=3$、$\mathbb{E}X^2=\infty$，所以 $X\in L^1\setminus L^2$，条件期望仍是 3. 对任意有限常数 $c$，在足够大的 $x$ 上 $(x-c)^2\ge x^2/4$，故 $\mathbb{E}[(X-c)^2]=\infty$. 此处不能靠有限均方误差的比较得到唯一常数最优解. 不是条件期望失效，而是所选优化问题失去原来的有限性.

**题三：非嵌套信息的塔式等式.** 令 $\mathcal K$ 由 $\{\omega_1,\omega_3\}$ 和 $\{\omega_2,\omega_4\}$ 生成. 分别计算 $\mathbb{E}[X\mid\mathcal K]$ 与 $\mathbb{E}[M\mid\mathcal K]$.

**解析.** 两组概率都是 0.5，原支付在两组上的加权总量都为 4000，所以 $\mathbb{E}[X\mid\mathcal K]=8000$. 对 $M$，两组的条件平均分别为
$$
\frac{0.4(40000/3)}{0.5}=\frac{32000}{3},
\qquad
\frac{0.2(40000/3)}{0.5}=\frac{16000}{3}.
$$
它们不同于 8000；这里 $\mathcal K\not\subseteq\mathcal G$，不能套用塔式性质.

本篇的三个检验方式可以带到新问题中：用信息决定哪些候选合法，用局部积分确认条件期望，用损失与可积条件确认最优结论的范围.

[^ce]: Amir Dembo, *Probability Theory: STAT310/MATH230*, 2021-04-15，§4.1.1，Theorem 4.1.2 及证明，印刷页 153–156. [开放原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=153).
[^tower]: 同书，Proposition 4.2.8（Tower property），印刷页 160. [原页](https://adembo.su.domains/stat-310b/lnotes.pdf#page=160).
[^projection]: 同书，§4.3，Proposition 4.3.1 及证明，印刷页 166–167. [原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=166). 本节对 $L^2$ 假设与截断桥接分别保留.
[^bounded]: 同书，Proposition 4.2.10，pp.160–161；支配收敛见 Theorem 1.3.34，pp.42–43. 本节使用有界检验函数情形，并在正文给出逼近.
[^closed]: 同书，Proposition 4.3.7 及证明，pp.168–169；一般 Hilbert 投影定理见 Theorem 4.3.10，pp.169–170.
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，访问于 2026-09-21，p.2 “Contract Multiplier / Final Settlement Value”. 标准 SPX 的结算值采用到期日成分股开盘成交价计算；SPXW 的口径不同. [产品原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf#page=2). 本例仅采用产品支付规则；真实挂牌序列、权利金和账户现金时点未指定.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QTB-PROJECTION-01",
    "title": "合法预测与正交误差分解",
    "anchor": "qt11-experiment",
    "description": "平方误差以美元²计. 候选不依赖未来信息，才属于当前信息允许的比较集合.",
    "inputs": {
      "identity": "教学构造；真实产品条款仅用于支付乘数和结算值的解释，不是历史行情、样本频率或风险中性模型",
      "shared_file": "shared_inputs.json",
      "paths": [
        "shared_case",
        "defaults.projection",
        "named_cases.bad_future_candidate",
        "named_cases.mse_probe_grid_usd"
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
      "conditional": {
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
      "admissible": true,
      "violations": [],
      "mse_ce": 13333333.333333336,
      "mse_candidate": 20000000,
      "mse_gap": 6666666.666666662,
      "cross_term": 1.862645149230957e-09,
      "identity_residual": -3.725290298461914e-09,
      "pythagoras_residual": 1.862645149230957e-09,
      "residual": [
        0,
        0,
        -3333.333333333332,
        6666.666666666668
      ],
      "tower_default": {
        "nested": true,
        "inner": [
          0,
          0,
          13333.333333333332,
          13333.333333333332
        ],
        "iterated": [
          8000,
          8000,
          8000,
          8000
        ],
        "direct": [
          8000,
          8000,
          8000,
          8000
        ]
      }
    },
    "algorithm": "先算 M；对候选严格检查组内常数，再算三项加权平方误差及交叉项. 由细信息到外层信息前检查每个细组包含于某个粗组. 不可测候选仍显示一般平方展开，但不报告合法最优比较.",
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
      "所有候选与支付有限；本有限模型自动L2",
      "不合法候选显示交叉项，禁止伪称反例",
      "非嵌套塔式不承诺相等；偶然相等不改变条件",
      "理论0与浮点舍入分开，计量单位USD²，无收益率分母"
    ],
    "static_equivalent": {
      "body_anchor": "qt11-experiment",
      "default_table_html": "<div class=\"table-wrap\"><table><thead><tr><th>量</th><th>精确值（美元²）</th><th>近似值</th></tr></thead><tbody><tr><td>E[(X−M)²]</td><td>40,000,000/3</td><td>13,333,333.33</td></tr><tr><td>E[(M−Y)²]</td><td>20,000,000/3</td><td>6,666,666.67</td></tr><tr><td>E[(X−Y)²]</td><td>20,000,000</td><td>20,000,000</td></tr></tbody></table></div><p>Y=(0,0,10,000,10,000) 只用 L/H 信息，合法；Y=X 虽为零误差，却在 H 组有不同取值，因此不是该信息下的合法候选.</p>",
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
    "from": "zh-qt11",
    "relation": "part_of",
    "to": "quant-data-info",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt11",
    "relation": "supported_by",
    "to": "QTB-DEMBO-2021",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "§4.1.1 pp.153–156；Proposition 4.2.8 p.160；Proposition 4.2.10 pp.160–161",
    "scope": "定义与条件的公开依据. 采用 L1 条件期望及 RN 构造、塔式性质和 L2 投影；正文把指示函数到有界函数再到 L2 检验函数的延伸逐步写出. 一般 RN 证明单元保留其 Hahn 分解依赖，未声称重新证明全部测度论."
  },
  {
    "from": "zh-qt11",
    "relation": "supported_by",
    "to": "QTB-CBOE-SPX",
    "reason": "支持本篇采用的定义、条件或真实产品条款",
    "locator": "p.2 合约规格",
    "scope": "只支持 SPX 产品的每点 100 美元乘数、欧式与现金结算，以及 SPX Traditional/SPXW 结算值口径区别. 不支持本包设定的行权价、情景、信号、概率或模型平均为价格."
  },
  {
    "from": "qt11-experiment",
    "relation": "illustrated_by",
    "to": "EXP-QTB-PROJECTION-01",
    "reason": "平方误差以美元²计. 候选不依赖未来信息，才属于当前信息允许的比较集合."
  },
  {
    "from": "zh-qt11",
    "relation": "uses_method",
    "to": "zh-qt10",
    "reason": "L1/L2、MCT/DCT 与截断"
  },
  {
    "from": "zh-qt11",
    "relation": "uses_method",
    "to": "zh-qt09",
    "reason": "以信息事件域限制候选"
  },
  {
    "from": "qt11-uniqueness",
    "relation": "derived_from",
    "to": "qt11-definition",
    "reason": "由可测性及所有事件的积分恒等式证明唯一性"
  },
  {
    "from": "qt11-tower",
    "relation": "derived_from",
    "to": "qt11-uniqueness",
    "reason": "验证候选定义后用 a.s. 唯一性识别；另检查 H⊆G"
  },
  {
    "from": "qt11-definition",
    "relation": "uses_method",
    "to": "zh-qt11p1",
    "reason": "一般存在性由该具名证明单元提供；定义本身不依赖存在性证明"
  }
]
```

## Related entries

## Optional reading path
理解模型并亲手算: step 3/9
从局部积分身份证明唯一性、塔式性质与平方误差最优.
把分布与条件预测的对象固定后，用真实收益样本重建尾部风险.
Next: [收益分布、尾部与风险度量](https://ou-liu-red-sugar.github.io/zh/notebook/return-distributions-tail-risk/)
