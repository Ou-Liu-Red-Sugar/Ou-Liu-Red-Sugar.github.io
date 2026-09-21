# 鞅与有限时点停止

用完整条件有界停止证明区分可实施停时、事后规则与无限停止的尾部问题.

Entry: zh-qt08 | Node: QT08 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 证明有界条件可选抽样，包括停止sigma域、可测性和可积性；在八步抛币上重算条件均值，重建事后最大值和无限停止反例，定位一致可积性条件. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTF-MIT25",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf"
      },
      "required_unit": {
        "locator": "§1 PDF pp.2–4",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "定义、可积性、Doob构造"
      },
      "supports": "定义、可积性、Doob构造",
      "title": "Lecture 25: Martingales I",
      "authors": [
        "Yury Polyanskiy",
        "MIT Class Participants"
      ],
      "version": "MIT 6.436J/15.085J, Fall 2018"
    },
    {
      "source_id": "QTF-MIT25",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf"
      },
      "required_unit": {
        "locator": "§3 PDF pp.6–9",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "停时、停止过程、有界证明背景及UI延伸"
      },
      "supports": "停时、停止过程、有界证明背景及UI延伸",
      "title": "Lecture 25: Martingales I",
      "authors": [
        "Yury Polyanskiy",
        "MIT Class Participants"
      ],
      "version": "MIT 6.436J/15.085J, Fall 2018"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "stopping_config": {
      "experiment_id": "EXP-QT08-STOP-01",
      "identity": "有限等概率±1教学随机游走，完全穷举；非市场观测.",
      "N": 8,
      "initial_value": 0,
      "increment_values": [
        -1,
        1
      ],
      "increment_probabilities": [
        "1/2",
        "1/2"
      ],
      "sigma": {
        "first_hit": 1,
        "cap": 3
      },
      "tau": {
        "first_hit": 2,
        "cap": 8
      },
      "default_path": "UUDDDDDD",
      "infinite_counterexample": {
        "identity": "另一个无限公平抛币乘积空间；不是256路径的延长或重用.",
        "initial_value": 1,
        "heads_probability": "1/2",
        "process": "Z_n=2^n * 1(first n tosses all heads)",
        "stopping_time": "first tail",
        "truncations": [
          1,
          2,
          4,
          8,
          16,
          32
        ],
        "default_truncation": 8,
        "default_tail_threshold": 100
      }
    },
    "default_summary": {
      "atoms": [
        {
          "prefix": "U",
          "sigma": 1,
          "count": 128,
          "probability": {
            "exact": "1/2",
            "decimal": 0.5
          },
          "M_sigma": 1,
          "conditional_mean": {
            "exact": "1",
            "decimal": 1.0
          }
        },
        {
          "prefix": "DDD",
          "sigma": 3,
          "count": 32,
          "probability": {
            "exact": "1/8",
            "decimal": 0.125
          },
          "M_sigma": -3,
          "conditional_mean": {
            "exact": "-3",
            "decimal": -3.0
          }
        },
        {
          "prefix": "DDU",
          "sigma": 3,
          "count": 32,
          "probability": {
            "exact": "1/8",
            "decimal": 0.125
          },
          "M_sigma": -1,
          "conditional_mean": {
            "exact": "-1",
            "decimal": -1.0
          }
        },
        {
          "prefix": "DUD",
          "sigma": 3,
          "count": 32,
          "probability": {
            "exact": "1/8",
            "decimal": 0.125
          },
          "M_sigma": -1,
          "conditional_mean": {
            "exact": "-1",
            "decimal": -1.0
          }
        },
        {
          "prefix": "DUU",
          "sigma": 3,
          "count": 32,
          "probability": {
            "exact": "1/8",
            "decimal": 0.125
          },
          "M_sigma": 1,
          "conditional_mean": {
            "exact": "1",
            "decimal": 1.0
          }
        }
      ],
      "count": 256,
      "mean_sigma": {
        "exact": "0",
        "decimal": 0.0
      },
      "mean_tau": {
        "exact": "0",
        "decimal": 0.0
      },
      "mean_maximum": {
        "exact": "467/256",
        "decimal": 1.82421875
      },
      "second_moment_sigma": {
        "exact": "2",
        "decimal": 2.0
      },
      "second_moment_tau": {
        "exact": "187/32",
        "decimal": 5.84375
      },
      "squared_increment_mean": {
        "exact": "123/32",
        "decimal": 3.84375
      },
      "infinite": [
        {
          "N": 1,
          "survival_probability": {
            "exact": "1/2",
            "decimal": 0.5
          },
          "nonzero_stopped_value": 2,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "1",
            "decimal": 1.0
          }
        },
        {
          "N": 2,
          "survival_probability": {
            "exact": "1/4",
            "decimal": 0.25
          },
          "nonzero_stopped_value": 4,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "3/2",
            "decimal": 1.5
          }
        },
        {
          "N": 4,
          "survival_probability": {
            "exact": "1/16",
            "decimal": 0.0625
          },
          "nonzero_stopped_value": 16,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "15/8",
            "decimal": 1.875
          }
        },
        {
          "N": 8,
          "survival_probability": {
            "exact": "1/256",
            "decimal": 0.00390625
          },
          "nonzero_stopped_value": 256,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "255/128",
            "decimal": 1.9921875
          }
        },
        {
          "N": 16,
          "survival_probability": {
            "exact": "1/65536",
            "decimal": 1.52587890625e-05
          },
          "nonzero_stopped_value": 65536,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "65535/32768",
            "decimal": 1.999969482421875
          }
        },
        {
          "N": 32,
          "survival_probability": {
            "exact": "1/4294967296",
            "decimal": 2.3283064365386963e-10
          },
          "nonzero_stopped_value": 4294967296,
          "mean": {
            "exact": "1",
            "decimal": 1.0
          },
          "mean_truncated_time": {
            "exact": "4294967295/2147483648",
            "decimal": 1.9999999995343387
          }
        }
      ]
    },
    "full_enumeration_attachment": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt08-paths.json",
      "count": 256,
      "scope": "完整256路径及逐路径sigma/tau/M值；扩展核验用，不在Agent内联重复.",
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt08-paths.json",
      "json_pointer": "/paths",
      "experiment_id": "EXP-QT08-STOP-01"
    },
    "attachments": [
      {
        "title": "本篇完整静态阅读",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT08.html",
        "kind": "html"
      },
      {
        "title": "有限八步实验全部路径与信息原子",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt08-paths.json",
        "kind": "json",
        "json_pointers": [
          "/paths",
          "/atoms"
        ],
        "count": 256
      },
      {
        "title": "同包默认精确计算",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/stopping/atoms",
          "/stopping/mean_sigma",
          "/stopping/mean_tau",
          "/stopping/infinite"
        ]
      }
    ]
  },
  "learning_task": "证明有界条件可选抽样，包括停止sigma域、可测性和可积性；在八步抛币上重算条件均值，重建事后最大值和无限停止反例，定位一致可积性条件.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
当信息集随时间增长时，鞅要求下一时点的条件平均等于当前值；停时只允许用截至当前已经到达的信息决定是否停止. 有界可选抽样把这两项约束连接为停止时点之间的条件期望等式.

<a id="qt08-definition"></a>

## 鞅与条件期望

令 $(\Omega,\mathcal F,P)$ 为概率空间，$(\mathcal F_k)_{k\ge0}$ 为滤过，即随时间增加的子 $\sigma$-代数. 实值过程 $M=(M_k)$ 是相对于这个滤过和概率 $P$ 的鞅，是指每个 $M_k$ 都是 $\mathcal F_k$ 可测、$\mathbb{E}_P|M_k|<\infty$，并且

$$
\mathbb{E}_P[M_k\mid\mathcal F_{k-1}]=M_{k-1},\qquad k\ge1.
$$

可测性要求当前值已知，可积性保证条件期望有定义；最后一项固定给定昨日信息的条件平均. 下文期望均在 $P$ 下取.[^mit-definition]

例如固定一个 $X\in L^1$，令 $M_k=\mathbb{E}[X\mid\mathcal F_k]$. 条件期望本身可测，而且 $\mathbb{E}|M_k|\le \mathbb{E}|X|$. 对嵌套信息再用塔式性质：

$$
\mathbb{E}[M_k\mid\mathcal F_{k-1}]
=\mathbb{E}[\mathbb{E}[X\mid\mathcal F_k]\mid\mathcal F_{k-1}]
=M_{k-1}.
$$

鞅性质依赖滤过：加入未来信息后，原本条件均值为零的增量可能已确定正负. 无条件均值恒定只是鞅的推论，不能反推条件期望等式.

金融模型还需指定测度. 研究概率 $P$ 下的价格鞅与有限无套利模型中等价测度 $Q$ 下的贴现价格鞅，是对不同测度与过程的命题.

<a id="qt08-stopping"></a>

## 停时与停止信息

随机时间 $\tau:\Omega\to\{0,1,\ldots\}\cup\{\infty\}$ 称为停时，若 $\{\tau\le k\}\in\mathcal F_k$ 对每个 $k$ 成立，即在 $k$ 时可判断是否已停止. 离散时间中等价于 $\{\tau=k\}\in\mathcal F_k$.[^mit-stopping]

首次达到某个已知阈值就是例子. 相反，“在整条路径的最高点第一次出现时退出”通常不是停时：要确认眼前是否为全路径最高点，还需要知道以后会不会更高.

停下时知道的事件组成

$$
\mathcal F_\tau
=\{A\in\mathcal F:A\cap\{\tau\le k\}\in\mathcal F_k
\text{ 对每个 }k\text{ 成立}\}.
$$

这确实是 $\sigma$-代数：与 $\{\tau\le k\}$ 相交后，补集变成相对于该事件的差集，可数并仍是可数并. 对有界 $\tau\le N$，若 $D\subseteq\mathbb R$ 为 Borel 集，则

$$
\{M_\tau\in D\}\cap\{\tau\le n\}
=\bigcup_{j=0}^{\min(n,N)}
\bigl(\{\tau=j\}\cap\{M_j\in D\}\bigr).
$$

每一项属于 $\mathcal F_n$，因此 $M_\tau$ 是 $\mathcal F_\tau$ 可测；这与可积性一起构成把 $M_\sigma$ 识别为条件期望所需的条件.

先看停止过程 $Y_k=M_{k\wedge\tau}$. 它适应，而且 $|Y_k|\le\sum_{j=0}^k|M_j|$，所以可积. 它的增量为

$$
Y_k-Y_{k-1}
=\mathbf1_{\{\tau\ge k\}}(M_k-M_{k-1}).
$$

由于 $\{\tau\ge k\}=\{\tau\le k-1\}^{c}\in\mathcal F_{k-1}$，对昨日信息取条件期望得到零. 因此 $Y$ 仍为鞅. 这只证明每个有限 $k$ 的性质；还没有允许把 $k$ 直接换成无穷大.

<a id="qt08-bounded-theorem"></a>

## 有界可选抽样

命题（条件有界可选抽样）. 设 $M_0,\ldots,M_N$ 是可积鞅，$\sigma,\tau$ 是取值于 $\{0,\ldots,N\}$ 的停时，且 $\sigma\le\tau$. 则

$$
\mathbb{E}[M_\tau\mid\mathcal F_\sigma]=M_\sigma.
$$

特别地，$\mathbb{E}[M_\tau]=\mathbb{E}[M_\sigma]=\mathbb{E}[M_0]$. $N$ 是确定上界，概率空间可为无限空间.[^mit-stopping]

证明. 首先，$|M_\sigma|,|M_\tau|\le\sum_{j=0}^N|M_j|$，两者可积；上一节已证明 $M_\sigma$ 对 $\mathcal F_\sigma$ 可测. 剩下的任务是对每个 $A\in\mathcal F_\sigma$ 验证积分相同.

对每条路径，区间 $(\sigma,\tau]$ 上的增量恰好拼出

$$
M_\tau-M_\sigma
=\sum_{k=1}^N
\mathbf1_{\{\sigma<k\le\tau\}}(M_k-M_{k-1}).
$$

固定 $A\in\mathcal F_\sigma$，令

$$
D_k=A\cap\{\sigma\le k-1\}\cap\{\tau\ge k\}.
$$

第一部分 $A\cap\{\sigma\le k-1\}$ 由 $\mathcal F_\sigma$ 的定义属于 $\mathcal F_{k-1}$；第二部分也属于 $\mathcal F_{k-1}$. 因此 $D_k\in\mathcal F_{k-1}$，并有

$$
\begin{gathered}
\mathbb{E}[\mathbf1_{D_k}(M_k-M_{k-1})]\\
=\mathbb{E}[\mathbf1_{D_k}\mathbb{E}[M_k-M_{k-1}\mid\mathcal F_{k-1}]]\\
=0.
\end{gathered}
$$

有限项可以逐项求期望，于是 $\mathbb{E}[\mathbf1_A(M_\tau-M_\sigma)]=0$. 可测性、可积性和每个信息事件上的积分相同都已成立，条件期望的定义遂给出结论. 证毕.

停时条件保证增量前系数对前一期信息可测，确定上界使求和有限，可积性保证各项期望存在.

<a id="qt08-experiment"></a>

## 条件均值复算

取八次独立公平的 $\pm1$ 增量，$M_0=0$，每条完整路径概率为 $1/256$. 取由前 $k$ 次增量生成的自然滤过 $\mathcal F_k$. 以 U 表示 $+1$，D 表示 $-1$. 令 $\sigma$ 为首次到达 $+1$、最晚在 3 停止；令 $\tau$ 为首次到达 $+2$、最晚在 8 停止. 若达到 $+2$，此前必已经过 $+1$；否则截断规则也保证 $\sigma\le\tau$.

在停止时刻已观察到以下五个前缀. 对每组平均后续可能路径：

| 停止时已知前缀 | $\sigma$ | 完整路径数 | $M_\sigma$ | 组内 $M_\tau$ 平均 |
|---|---|---|---|---|
| U | 1 | 128 | 1 | $1$ |
| DDD | 3 | 32 | -3 | $-3$ |
| DDU | 3 | 32 | -1 | $-1$ |
| DUD | 3 | 32 | -1 | $-1$ |
| DUU | 3 | 32 | 1 | $1$ |

DDD组的 $M_\sigma=-3$，继续到 $\tau$ 的组内均值也为−3；条件等式逐组成立，比总体均值为0更强.

<div data-experiment-slot="EXP-QT08-STOP-01"></div>

以“事后最高点”作对照，八步路径最大值的平均为 $\frac{467}{256}\approx1.824$. 该退出规则依赖未来路径，不是停时，因此不适用上述可选抽样结论.

<a id="qt08-infinite"></a>

## 无限停时与一致可积性

在无限公平抛币空间上，令

$$
Z_n=2^n\mathbf1_{\{\text{前 }n\text{ 次全为正面}\}},\qquad Z_0=1,
$$

并令 $\tau$ 为首次反面出现的次数. 在尚未出现反面时，下一步以各 $1/2$ 的概率加倍或归零；已归零后保持零. 因此 $Z$ 是非负可积鞅，且 $\mathbb{E}[Z_n]=1$.

这里 $P(\tau=n)=2^{-n}$，所以 $P(\tau<\infty)=1$，而

$$
\mathbb{E}[\tau]=\sum_{n=0}^{\infty}P(\tau>n)
=\sum_{n=0}^{\infty}2^{-n}=2.
$$

但一旦反面出现，$Z_\tau=0$. 对于每个确定 $N$，却有

$$
Z_{\tau\wedge N}=2^N\mathbf1_{\{\tau>N\}},
\qquad \mathbb{E}[Z_{\tau\wedge N}]=1.
$$

停止变量逐路径趋于0，期望却始终为1；期望与极限在此不能交换.

一族可积变量 $(Y_n)$ 一致可积，是指

$$
\lim_{K\to\infty}\sup_n
\mathbb{E}[|Y_n|\mathbf1_{\{|Y_n|>K\}}]=0.
$$

任给 $K$，选 $2^N>K$，尾部期望为 $2^N2^{-N}=1$. 幸存路径的数值增长抵消其概率下降，停止族不一致可积. 这给出 $\mathbb{E}\tau<\infty$ 单独不足以延伸鞅等式的反例.[^mit-ui]

<a id="qt08-exercises"></a>

## 练习与解析

问题一. 比较两条路径 UUDDDDDD 和 UDDDDDDD. 它们在时点 1 的信息相同. 若 $\rho$ 为全路径最大值第一次出现的时间，$\{\rho\le1\}$ 能在时点 1 判定吗？

**解析.** 第一条路径的最大值2首次出现于时点2，第二条的最大值1首次出现于时点1. 同一时点1的信息组内，$\{\rho\le1\}$ 一真一假，故不属于 $\mathcal F_1$，$\rho$ 不是停时.

问题二. 额外假设 $M_0,\ldots,M_N\in L^2$. 是否还能说 $\mathbb{E}[M_\tau^2]=\mathbb{E}[M_\sigma^2]$？请由本篇定理推导正确关系.

解析. 先由有限上界得到 $M_\sigma,M_\tau\in L^2$. 条件等式给 $\mathbb{E}[M_\tau-M_\sigma\mid\mathcal F_\sigma]=0$，从而交叉项期望为零. 展开平方得

$$
\mathbb{E}[M_\tau^2]
=\mathbb{E}[M_\sigma^2]+\mathbb{E}[(M_\tau-M_\sigma)^2]
\ge \mathbb{E}[M_\sigma^2].
$$

先截断 $M_\sigma$，再用Cauchy–Schwarz过极限，可将它乘入条件期望等式. 八步例中

$$
\mathbb{E}[M_\tau^2]=\frac{187}{32},\qquad
\mathbb{E}[M_\sigma^2]=2,\qquad
\mathbb{E}[(M_\tau-M_\sigma)^2]=\frac{123}{32},
$$

问题三. 无限首次反面反例同时有 $\mathbb{E}\tau=2$. 为什么 MIT 的“有限期望停时”判据仍未适用？

**解析.** 该充分条件另要求 $\mathbb{E}[|Z_n-Z_{n-1}|\mid\mathcal F_{n-1}]$ 有统一常数上界. 此处该量等于 $Z_{n-1}$，在连续正面的路径上随 $n$ 无界增长.

[^mit-definition]: Yury Polyanskiy / MIT Class Participants, [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf#page=2), Fall 2018，§1，PDF pp.2–4：鞅定义与 Doob 构造.
[^mit-stopping]: 同讲义 §3，PDF pp.6–9：停时、停止过程与可选停止定理.
[^mit-ui]: 同讲义 Proposition 1，p.7；Theorem 3 及证明，pp.8–9：一致可积条件与无穷停时结论.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT08-STOP-01",
    "title": "鞅与有限时点停止：计算视图",
    "anchor": "qt08-experiment",
    "description": "改变本视图参数后重算；正文保留默认表、完整推导和题解，公开附件提供精确输入与结果.",
    "inputs": {
      "shared_experiment_id": "EXP-QT08-STOP-01",
      "view": {
        "node": "QT08",
        "underlying_experiment_id": "EXP-QT08-STOP-01"
      },
      "public_attachments": [
        {
          "title": "有限八步实验全部路径与信息原子",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt08-paths.json",
          "kind": "json",
          "json_pointers": [
            "/paths",
            "/atoms"
          ],
          "count": 256
        },
        {
          "title": "同包默认精确计算",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
          "kind": "json",
          "json_pointers": [
            "/stopping/atoms",
            "/stopping/mean_sigma",
            "/stopping/mean_tau",
            "/stopping/infinite"
          ]
        }
      ]
    },
    "outputs": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
      "scope": "stopping",
      "json_pointers": [
        "/stopping/atoms",
        "/stopping/mean_sigma",
        "/stopping/mean_tau",
        "/stopping/infinite"
      ]
    },
    "is_view_of_existing_experiment": false,
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT08.html"
  }
]
```

## Sources
- [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf): 离散鞅、Doob构造、停时、停止过程、有界停止及一致可积延伸.

## Content relations
```json
[
  {
    "from": "zh-qt08",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt08-experiment",
    "relation": "illustrated_by",
    "to": "EXP-QT08-STOP-01",
    "reason": "同一冻结输入的当前视图；证明与算术分别呈现."
  },
  {
    "from": "zh-qt08",
    "relation": "requires",
    "to": "zh-qt11",
    "reason": "本证明实际调用的局部能力.",
    "required_competence": "条件期望的可测性、可积性、积分刻画与塔式性质."
  },
  {
    "from": "qt08-definition",
    "relation": "supported_by",
    "to": "QTF-MIT25",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "Yury Polyanskiy / MIT Class Participants, [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf#page=2), Fall 2018，§1，PDF pp.2–4. 采用定义和 Doob 构造；一般首次越界会自动有界的旁述不作为命题.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "mit-definition"
    ]
  },
  {
    "from": "qt08-stopping",
    "relation": "supported_by",
    "to": "QTF-MIT25",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同讲义 §3，PDF pp.6–9. 本文给出两停时条件版本的完整增量证明；不沿用 pp.6–7 停止和式中旧值下标的排印错误.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "mit-stopping"
    ]
  },
  {
    "from": "qt08-bounded-theorem",
    "relation": "supported_by",
    "to": "QTF-MIT25",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同讲义 §3，PDF pp.6–9. 本文给出两停时条件版本的完整增量证明；不沿用 pp.6–7 停止和式中旧值下标的排印错误.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "mit-stopping"
    ]
  },
  {
    "from": "qt08-infinite",
    "relation": "supported_by",
    "to": "QTF-MIT25",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同讲义 Proposition 1，p.7；Theorem 3 及证明，pp.8–9. 无限空间反例与八步有限实验分别建模.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "mit-ui"
    ]
  }
]
```

## Related entries
