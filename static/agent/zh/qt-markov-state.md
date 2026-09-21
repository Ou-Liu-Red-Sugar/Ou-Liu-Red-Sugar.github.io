# Markov 性与状态选择

从矩阵和隐藏状态反例判断当前状态是否足够，并重建后验状态.

Entry: zh-qt13 | Node: QT13 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 推导全初始状态Markov family的转移半群，计算两状态矩阵幂；用隐藏状态构造当前观测和最近两期的反例，重建后验的一维封闭递推. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QGHI-MIT-MARKOV18",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf"
      },
      "required_unit": {
        "locator": "PDF pp.1–4",
        "scope": "有限状态定义、齐次矩阵和 C–K 完整单元",
        "purpose": "核对全起点模型与条件分布边界"
      },
      "supports": "有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性.",
      "title": "Lecture 21: Markov Chains",
      "authors": [
        "MIT 6.436J/15.085J"
      ],
      "version": "Fall 2018; no individual author named on PDF",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "QT11 的条件概率/塔性质与有限矩阵乘法.",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读.",
    "attachments": [
      {
        "title": "本篇完整静态阅读、全部题解与证明",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT13.html",
        "kind": "html"
      },
      {
        "title": "本篇同源 Markdown",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT13.md",
        "kind": "markdown"
      },
      {
        "title": "完整实际结果及指定单元",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/markov"
        ]
      },
      {
        "title": "四个实验的唯一冻结定义",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/qt-ghi-shared-experiments.json",
        "kind": "json",
        "json_pointer": "/experiments/0",
        "experiment_id": "EXP-QT13-MARKOV-01"
      }
    ],
    "frozen": {
      "transition_matrix": [
        [
          0.8,
          0.2
        ],
        [
          0.3,
          0.7
        ]
      ],
      "prior_H_plus": 0.5,
      "observation_accuracy": 0.8,
      "observations_conditionally_independent_given_H": true
    },
    "default_outputs": {
      "P": [
        [
          0.8,
          0.2
        ],
        [
          0.3,
          0.7
        ]
      ],
      "P2": [
        [
          0.7000000000000002,
          0.30000000000000004
        ],
        [
          0.44999999999999996,
          0.5499999999999999
        ]
      ],
      "histories": [
        {
          "history": "+",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "-",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "++",
          "posterior_exact": "16/17",
          "predictive_exact": "13/17",
          "posterior": 0.9411764705882353,
          "predictive": 0.7647058823529411
        },
        {
          "history": "+-",
          "posterior_exact": "1/2",
          "predictive_exact": "1/2",
          "posterior": 0.5,
          "predictive": 0.5
        },
        {
          "history": "-+",
          "posterior_exact": "1/2",
          "predictive_exact": "1/2",
          "posterior": 0.5,
          "predictive": 0.5
        },
        {
          "history": "--",
          "posterior_exact": "1/17",
          "predictive_exact": "4/17",
          "posterior": 0.058823529411764705,
          "predictive": 0.23529411764705882
        },
        {
          "history": "+++",
          "posterior_exact": "64/65",
          "predictive_exact": "257/325",
          "posterior": 0.9846153846153847,
          "predictive": 0.7907692307692308
        },
        {
          "history": "++-",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "+-+",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "+--",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "-++",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "-+-",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "--+",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "---",
          "posterior_exact": "1/65",
          "predictive_exact": "68/325",
          "posterior": 0.015384615384615385,
          "predictive": 0.20923076923076922
        }
      ]
    }
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 推导全初始状态Markov family的转移半群，计算两状态矩阵幂；用隐藏状态构造当前观测和最近两期的反例，重建后验的一维封闭递推. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "推导全初始状态Markov family的转移半群，计算两状态矩阵幂；用隐藏状态构造当前观测和最近两期的反例，重建后验的一维封闭递推.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
<a id="qt13-question"></a>
## 状态压缩

Markov 性取决于所选状态是否保留预测未来所需的信息. 下面先用给定转移矩阵计算多步分布，再用隐藏状态反例比较“当前观测”和后验状态；其中概率均为教学模型参数.

<a id="qt13-definition"></a>
## Markov性与滤过

令 $E$ 为有限状态集，$(\mathcal F_n)$ 为滤过，$X_n$ 是适应过程. 相对于这个滤过的 Markov 性，是说对每个有界函数 $f\colon E\to\mathbb R$，存在转移核，使

$$
\mathbb{E}[f(X_{n+1})\mid\mathcal F_n]
=(P_{n,n+1}f)(X_n).
$$

Markov性以当前状态确定给定历史的下一期条件分布. 时间齐次性另要求转移规律不随日历时间变化，此时统一记为 $P$.[^markov]

以下为每个状态给定一行转移概率，并从每个起点定义链，形成全初始状态Markov family. 可逐步使用独立均匀数按当前行抽取下一状态. 若只给定某个初始分布，条件期望等式仅约束该分布可到达的状态.

<a id="qt13-ck"></a>
## 转移半群

采用两个状态，行是当前状态，列是下一状态：

| 当前状态 | 下一期到状态 1 | 下一期到状态 2 | 两期后到状态 1 | 两期后到状态 2 |
| --- | --- | --- | --- | --- |
| 1 | 0.8 | 0.2 | 0.7 | 0.3 |
| 2 | 0.3 | 0.7 | 0.45 | 0.55 |

从状态1出发，两步后回到1的路径经由中间状态1或2，概率为 $0.8\times0.8+0.2\times0.3=0.7$. 第二步采用对应中间状态的转移行.

一般地，对任何起点 $i$，先对中间状态求和，利用 Markov 性，有

$$
\begin{aligned}
P_i(X_{m+n}=j)
&=\sum_kP_i(X_m=k)\,P_k(X_n=j)\\
&=(P^mP^n)_{ij}.
\end{aligned}
$$

等价地，若 $(P_nf)(i)=\mathbb{E}_i[f(X_n)]$，塔式性质给

$$
\begin{aligned}
\mathbb{E}_i[f(X_{m+n})]
&=\mathbb{E}_i\{\mathbb{E}[f(X_{m+n})\mid\mathcal F_m]\}\\
&=\mathbb{E}_i[(P_nf)(X_m)]\\
&=(P_mP_nf)(i).
\end{aligned}
$$

故 $P_{m+n}=P_mP_n$，即Chapman–Kolmogorov关系.

<a id="qt13-hidden"></a>
## 隐藏状态反例

设隐藏状态 $H\in\{-,+\}$ 一经抽取便保持不变，先验各为 $1/2$. 给定 $H$，观测 $Y_i$ 条件独立，每次正确报告 $H$ 的概率为0.8. 条件独立使序列似然可逐项相乘.

若历史是 $++$，两个隐藏状态下出现这段历史的似然分别为 $.8^2$ 与 $.2^2$. 因此

$$
P(H=+\mid++)=\frac{.8^2}{.8^2+.2^2}=\frac{16}{17}.
$$

历史为 $-+$ 时，两种状态的似然均为 $0.2\times0.8$，后验为 $1/2$. 对隐藏状态加权得下一次观测分布：

$$
\begin{aligned}
P(Y_3=+\mid++)
&=.8\frac{16}{17}+.2\frac1{17}=\frac{13}{17},\\
P(Y_3=+\mid-+)&=\frac12.
\end{aligned}
$$

这两段历史长度相同，当前观测都为 $+$，却给出不同的下一期分布. 因此 $Y_n$ 本身相对于观测历史的自然滤过不是 Markov 过程.

| 历史 | 当前观测 | 隐藏状态为 + 的后验 | 下一期为 + 的概率 |
| --- | --- | --- | --- |
| ++ | + | 16/17 | 13/17 |
| +- | - | 1/2 | 1/2 |
| -+ | + | 1/2 | 1/2 |
| -- | - | 1/17 | 4/17 |

<a id="qt13-posterior"></a>
## 后验递推

令 $\pi_n=P(H=+\mid Y_1,\ldots,Y_n)$. 已知当前后验 $\pi$，看到新观测以后，Bayes 公式给出封闭递推：

$$
\pi^+=\frac{4\pi}{1+3\pi},
\qquad
\pi^-=\frac{\pi}{4-3\pi}.
$$

而下一次为 $+$ 的概率是

$$
g(\pi)=\frac15+\frac35\pi.
$$

后验以概率 $g(\pi)$ 更新为 $\pi^+$，以概率 $1-g(\pi)$ 更新为 $\pi^-$. 在该模型中，后验将全部历史压缩为一个数，并对未来观测给出封闭递推.

<div data-experiment-slot="EXP-QT13-MARKOV-01"></div>

<a id="qt13-exercise"></a>
## 练习与解析

**题目.** 比较 $+++$ 与 $-++$. 它们最后两期都是 $++$. 分别求隐藏状态为 $+$ 的后验、下一期为 $+$ 的概率，并判断状态 $(Y_{n-1},Y_n)$ 是否充分. 再说明向状态加入整个历史为什么虽然可行，却未必是好的建模答案.

**解析.** 对 $+++$，后验赔率为 $4^3$，所以后验 $64/65$，预测为

$$
\frac15+\frac35\frac{64}{65}=\frac{257}{325}.
$$

对 $-++$，赔率为 $4^{-1}4^2=4$，所以后验 $4/5$，预测为 $17/25$. 两者仍不同，因此最近两期也不够.

完整历史的维数随时间增长；本模型的后验递推保持一维，同时保留预测分布.

[^markov]: MIT 6.436J/15.085J，Fall 2018，[Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf)，物理 pp.1–4：有限状态定义、齐次矩阵与多步转移.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT13-MARKOV-01",
    "title": "隐藏状态与矩阵",
    "anchor": "qt13-hidden",
    "description": "共享输入的本篇视图；保持 EXP-QT13-MARKOV-01 唯一冻结身份.",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT13",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位."
    },
    "outputs": {
      "P": [
        [
          0.8,
          0.2
        ],
        [
          0.3,
          0.7
        ]
      ],
      "P2": [
        [
          0.7000000000000002,
          0.30000000000000004
        ],
        [
          0.44999999999999996,
          0.5499999999999999
        ]
      ],
      "histories": [
        {
          "history": "+",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "-",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "++",
          "posterior_exact": "16/17",
          "predictive_exact": "13/17",
          "posterior": 0.9411764705882353,
          "predictive": 0.7647058823529411
        },
        {
          "history": "+-",
          "posterior_exact": "1/2",
          "predictive_exact": "1/2",
          "posterior": 0.5,
          "predictive": 0.5
        },
        {
          "history": "-+",
          "posterior_exact": "1/2",
          "predictive_exact": "1/2",
          "posterior": 0.5,
          "predictive": 0.5
        },
        {
          "history": "--",
          "posterior_exact": "1/17",
          "predictive_exact": "4/17",
          "posterior": 0.058823529411764705,
          "predictive": 0.23529411764705882
        },
        {
          "history": "+++",
          "posterior_exact": "64/65",
          "predictive_exact": "257/325",
          "posterior": 0.9846153846153847,
          "predictive": 0.7907692307692308
        },
        {
          "history": "++-",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "+-+",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "+--",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "-++",
          "posterior_exact": "4/5",
          "predictive_exact": "17/25",
          "posterior": 0.8,
          "predictive": 0.68
        },
        {
          "history": "-+-",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "--+",
          "posterior_exact": "1/5",
          "predictive_exact": "8/25",
          "posterior": 0.2,
          "predictive": 0.32
        },
        {
          "history": "---",
          "posterior_exact": "1/65",
          "predictive_exact": "68/325",
          "posterior": 0.015384615384615385,
          "predictive": 0.20923076923076922
        }
      ]
    },
    "source_experiment_id": "EXP-QT13-MARKOV-01",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT13.html#qt13-hidden",
    "result_attachment": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
      "json_pointers": [
        "/markov"
      ]
    }
  }
]
```

## Sources
- [Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf): 有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性.

## Content relations
```json
[
  {
    "from": "zh-qt13",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt13-ck",
    "relation": "requires",
    "to": "zh-qt11",
    "reason": "该段实际使用所列局部能力.",
    "required_competence": "条件期望与塔性质"
  },
  {
    "from": "zh-qt13",
    "relation": "supported_by",
    "to": "QGHI-MIT-MARKOV18",
    "reason": "有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性.",
    "locator": "PDF pp.1–4",
    "scope": "有限状态定义、齐次矩阵和 C–K 完整单元"
  },
  {
    "from": "qt13-hidden",
    "relation": "illustrated_by",
    "to": "EXP-QT13-MARKOV-01",
    "reason": "唯一冻结输入在本篇的对应视图."
  },
  {
    "from": "qt13-definition",
    "relation": "supported_by",
    "to": "QGHI-MIT-MARKOV18",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "MIT 6.436J/15.085J，Fall 2018，[Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf)，物理 pp.1–4：有限状态定义、齐次矩阵与多步转移. 隐藏状态数例是另述教学构造，不是讲义中的实证.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "markov"
    ]
  }
]
```

## Related entries
