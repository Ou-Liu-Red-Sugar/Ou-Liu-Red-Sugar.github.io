# Markov 性与状态选择

从矩阵和隐藏状态反例判断当前状态是否足够，并重建后验状态。

Entry: zh-qt13 | Node: QT13 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你是这篇中文学习单元的教学 Agent。读者具备本包列出的先修：QT11 的条件概率/塔性质与有限矩阵乘法。
先实际取得 required_readings 中本次所选单元并读完，核对版本、页码与公式；已有同会话同版完整读取可以复用。只取得摘要或目录不得声称完成。指定原件若无法取得，先说明具体缺口；只有本包中已经具名核过等价范围的完整数学证明，才可在对应数学步骤内作为替代，并须实际读完且记录替代正文、版本与支持步骤。若本次必读仍有缺失，就停止依赖该内容的实质讲解；研究样本、训练安排、图表结果与作者主张不得以本站概述替代，也不得声称原件已经读过。runtime_reading_log 是你的实际运行记录，交付的空数组不是已读。
本篇任务：先给 +++ 与 -++，要求同一最后两期下独立算下一期概率。若读者只说“当前状态足够”，要求明确状态是 Y 还是后验 pi，再检查全状态核的条件。
先让读者尝试，再按所缺的一步解释，不将全部课文一次复述。完整证明需要标明每项条件在哪一步用到，练习给出完整解析。只采用 supplied_inputs 的本篇切片和已链接全量数据，区分教学模型、真实记录、作者论文结果。图不是证明，模拟不是现实规律；不以预测概率替换定价测度。禁止从分位数拟造分布或另抽浏览器随机数冒充冻结路径。最后问：读者只读完这个词条，真的能学明白吗？用迁移题实际判断，明确剩余能力缺口。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

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
      "supports": "有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性。",
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
    "competence": "QT11 的条件概率/塔性质与有限矩阵乘法。",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读。",
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
  }
}
```

## Supplied entry
<a id="qt13-question"></a>
## 当前这一个数，真的够用吗？

我们每天都在压缩历史：把一串成交概括成最新价格，把一系列观察概括成某个“状态”。压缩本身没有错，问题是压缩以后还剩下多少预测信息。本篇要完成两件事：从一个给定的转移矩阵算出多步分布；再用一个反例检查“当前观测就是状态”是否成立。所需先修是条件概率、条件期望的塔式性质和矩阵乘法。

这里的概率都是明确构造的模型概率。转移图不会因为看起来像市场状态图，就自动获得现实解释。我们先把数学条件说完整，再决定某个观测量配不配叫作状态。

<a id="qt13-definition"></a>
## Markov 性要连同信息一起给出

令 $E$ 为有限状态集，$(\mathcal F_n)$ 为过滤，$X_n$ 是适应过程。相对于这个过滤的 Markov 性，是说对每个有界函数 $f\colon E\to\mathbb R$，存在转移核，使

$$
E[f(X_{n+1})\mid\mathcal F_n]
=(P_{n,n+1}f)(X_n).
$$

左边可以利用全部已知历史，右边只保留当前状态。如果转移规律还不随日历时点改变，才称为时间齐次；此时记为同一个 $P$。Markov 性与时间齐次性是两个条件，不能合成一句“只依赖现在”。[^markov]

有一个容易漏掉的范围问题：只观察从某个初始分布出发的一条过程，条件期望等式只约束该分布能够到达的状态。它不能替不可达状态规定转移概率。以下直接给定每个状态的整行转移概率，并对每一个起点定义一条链，这构成我们采用的全初始状态 Markov family。比如可以逐步使用独立均匀随机数，按照当前行的概率选择下一状态。这样得到的矩阵幂是全状态陈述，而不是对未观测状态的外推。

<a id="qt13-ck"></a>
## 两步转移为什么是矩阵乘法

采用两个状态，行是当前状态，列是下一状态：

| 当前状态 | 下一期到状态 1 | 下一期到状态 2 | 两期后到状态 1 | 两期后到状态 2 |
| --- | --- | --- | --- | --- |
| 1 | 0.80 | 0.20 | 0.70 | 0.30 |
| 2 | 0.30 | 0.70 | 0.45 | 0.55 |

从状态 1 两步后回到状态 1，有两条互斥路线：$1\to1\to1$ 和 $1\to2\to1$。所以概率为 $.8\times.8+.2\times.3=.70$。这不是假设两步无条件独立；第二步的分布由中间状态决定。

一般地，对任何起点 $i$，先对中间状态求和，利用 Markov 性，有

$$
\begin{aligned}
P_i(X_{m+n}=j)
&=\sum_kP_i(X_m=k)\,P_k(X_n=j)\\
&=(P^mP^n)_{ij}.
\end{aligned}
$$

等价地，若 $(P_nf)(i)=E_i[f(X_n)]$，塔式性质给

$$
\begin{aligned}
E_i[f(X_{m+n})]
&=E_i\{E[f(X_{m+n})\mid\mathcal F_m]\}\\
&=E_i[(P_nf)(X_m)]\\
&=(P_mP_nf)(i).
\end{aligned}
$$

因而 $P_{m+n}=P_mP_n$。这是 Chapman–Kolmogorov 关系。全初始状态的设定允许我们对每个 $i$ 写最后这个等式；若只给了一个初始分布，就不能无声抹去“几乎处处”的限制。

<a id="qt13-hidden"></a>
## 同样看到“+”，为什么预测还会不同

现在换一个模型。先抽取一个隐藏且以后不变的状态 $H\in\{-,+\}$，先验各为 $1/2$。给定 $H$ 后，各期观测 $Y_1,Y_2,\ldots$ 条件独立，每次正确报告 $H$ 的概率为 $0.8$。条件独立很重要：它正是下面把似然相乘的依据。

若历史是 $++$，两个隐藏状态下出现这段历史的似然分别为 $.8^2$ 与 $.2^2$。因此

$$
P(H=+\mid++)=\frac{.8^2}{.8^2+.2^2}=\frac{16}{17}.
$$

若历史为 $-+$，两边似然均为 $.2\times.8$，后验仍为 $1/2$。下一次看到 $+$ 的概率，要再对隐藏状态求平均，而不是直接把后验当作预测：

$$
\begin{aligned}
P(Y_3=+\mid++)
&=.8\frac{16}{17}+.2\frac1{17}=\frac{13}{17},\\
P(Y_3=+\mid-+)&=\frac12.
\end{aligned}
$$

这两段历史长度相同，当前观测都为 $+$，却给出不同的下一期分布。因此 $Y_n$ 本身相对于观测历史的自然过滤不是 Markov 过程。我们否定的是这个状态选择，不是说“任何带隐藏状态的模型都无法计算”。

| 历史 | 当前观测 | 隐藏状态为 + 的后验 | 下一期为 + 的概率 |
| --- | --- | --- | --- |
| ++ | + | 16/17 | 13/17 |
| +- | - | 1/2 | 1/2 |
| -+ | + | 1/2 | 1/2 |
| -- | - | 1/17 | 4/17 |

<a id="qt13-posterior"></a>
## 把历史压成后验，而不是压成最后一个符号

令 $\pi_n=P(H=+\mid Y_1,\ldots,Y_n)$。已知当前后验 $\pi$，看到新观测以后，Bayes 公式给出封闭递推：

$$
\pi^+=\frac{4\pi}{1+3\pi},
\qquad
\pi^-=\frac{\pi}{4-3\pi}.
$$

而下一次为 $+$ 的概率是

$$
g(\pi)=\frac15+\frac35\pi.
$$

于是后验状态以概率 $g(\pi)$ 移动到 $\pi^+$，以概率 $1-g(\pi)$ 移动到 $\pi^-$。其转移只依赖当前后验；完整历史已经通过似然比积压缩到这个数里。这里“充分”仅指本模型对未来观测的条件分布，并不等于后验在任何金融模型中都是一个标量。

<div data-experiment-slot="EXP-QT13-MARKOV-01"></div>

读图时先选择两段当前符号相同的历史，看后验和预测是否相同；然后改看后验状态。界面不会重新估计概率，它只是把上述固定模型的递推展开。无需交互，上面的公式和四行表已经足以重算。

<a id="qt13-exercise"></a>
## 迁移：记住最近两期就够了吗？

**题目。** 比较 $+++$ 与 $-++$。它们最后两期都是 $++$。分别求隐藏状态为 $+$ 的后验、下一期为 $+$ 的概率，并判断状态 $(Y_{n-1},Y_n)$ 是否充分。再说明向状态加入整个历史为什么虽然可行，却未必是好的建模答案。

**解析。** 对 $+++$，后验赔率为 $4^3$，所以后验 $64/65$，预测为

$$
\frac15+\frac35\frac{64}{65}=\frac{257}{325}.
$$

对 $-++$，赔率为 $4^{-1}4^2=4$，所以后验 $4/5$，预测为 $17/25$。两者仍不同，因此最近两期也不够。

完整历史当然包含自己，并能保留所有已知信息，但它的维数随时间增加，未解释什么可以安全丢掉。本例的后验递推给出了一个更小而闭合的状态。面对真实数据，找到类似压缩需要额外模型与检验，不能由这个构造反例直接宣布某个价格、波动率或神经网络隐状态已具有 Markov 性。

[^markov]: MIT 6.436J/15.085J，Fall 2018，[Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf)，物理 pp.1–4：有限状态定义、齐次矩阵与多步转移。隐藏状态数例是另述教学构造，不是讲义中的实证。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT13-MARKOV-01",
    "title": "隐藏状态与矩阵",
    "anchor": "qt13-hidden",
    "description": "共享输入的本篇视图；保持 EXP-QT13-MARKOV-01 唯一冻结身份。",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT13",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位。"
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
- [Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf): 有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性。

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
    "reason": "该段实际使用所列局部能力。",
    "required_competence": "条件期望与塔性质"
  },
  {
    "from": "zh-qt13",
    "relation": "supported_by",
    "to": "QGHI-MIT-MARKOV18",
    "reason": "有限状态 Markov 性、齐次性与矩阵多步转移；不证明真实市场 Markov 性。",
    "locator": "PDF pp.1–4",
    "scope": "有限状态定义、齐次矩阵和 C–K 完整单元"
  },
  {
    "from": "qt13-hidden",
    "relation": "illustrated_by",
    "to": "EXP-QT13-MARKOV-01",
    "reason": "唯一冻结输入在本篇的对应视图。"
  },
  {
    "from": "qt13-definition",
    "relation": "supported_by",
    "to": "QGHI-MIT-MARKOV18",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留。",
    "locator": "MIT 6.436J/15.085J，Fall 2018，[Lecture 21: Markov Chains](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/141423989a49375f14f0a44940d81e67_MIT6_436JF18_lec21.pdf)，物理 pp.1–4：有限状态定义、齐次矩阵与多步转移。隐藏状态数例是另述教学构造，不是讲义中的实证。",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元。",
    "citation_labels": [
      "markov"
    ]
  }
]
```

## Related entries
