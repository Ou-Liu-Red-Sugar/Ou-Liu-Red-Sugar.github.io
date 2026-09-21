# 计数过程与 Poisson 基准

从完整微秒成交记录复算计数与内部等待，并在给定过滤下建立 Poisson 基准.

Entry: zh-qt14 | Node: QT14 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从ETHBTC逐笔时间重建分箱与内部间隔；证明Poisson补偿鞅、指数间隔与独立增量的等价，比较样本离散度、空箱率及扩大滤过后的条件期望. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QGHI-MIT-POISSON15",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf"
      },
      "required_unit": {
        "locator": "七张教学 slides pp.1–7",
        "scope": "计数定义、指数间隔、Poisson 条件",
        "purpose": "不借未证明 strong Markov；本篇联合密度证明自足"
      },
      "supports": "到达、计数、Poisson 与指数间隔设置；strong Markov 在原文仅陈述，本文不用它承担构造证明.",
      "title": "Lecture 20: Poisson process",
      "authors": [
        "Hao Wu",
        "MIT"
      ],
      "version": "2015-04-29",
      "fallback_source_ids": []
    },
    {
      "source_id": "QGHI-BINANCE-DATA",
      "access": {
        "kind": "html_full_text",
        "uri": "https://github.com/binance/binance-public-data"
      },
      "required_unit": {
        "locator": "README Spot/Trades、availability、Updates",
        "scope": "微秒、七列、日档次日与修订",
        "purpose": "读取附带全部 ID/time 投影，复算秒/分计数和内部等待"
      },
      "supports": "2025 起现货 timestamp 微秒；trades 七列、日档次日可用、可能更新. 本文按冻结 first UTC hour 的全部 ID/time 字段复算计数和间隔.",
      "title": "Binance Public Data README and ETHBTC daily trades",
      "authors": [
        "Binance"
      ],
      "version": "README/selected archive frozen 2026-09-21; observations 2025-01-02",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "基本概率、条件期望和过滤；无需强 Markov 定理.",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读.",
    "attachments": [
      {
        "title": "本篇完整静态阅读、全部题解与证明",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT14.html",
        "kind": "html"
      },
      {
        "title": "本篇同源 Markdown",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT14.md",
        "kind": "markdown"
      },
      {
        "title": "ethbtc-trade-times.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/ethbtc-trade-times.csv",
        "kind": "csv",
        "bytes": 92181
      },
      {
        "title": "ethbtc-interior-waits.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/ethbtc-interior-waits.csv",
        "kind": "csv",
        "bytes": 101821
      },
      {
        "title": "ethbtc-counts-one-second.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/ethbtc-counts-one-second.csv",
        "kind": "csv",
        "bytes": 27766
      },
      {
        "title": "ethbtc-counts-one-minute.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/ethbtc-counts-one-minute.csv",
        "kind": "csv",
        "bytes": 442
      },
      {
        "title": "完整实际结果及指定单元",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/arrival"
        ]
      },
      {
        "title": "四个实验的唯一冻结定义",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/qt-ghi-shared-experiments.json",
        "kind": "json",
        "json_pointer": "/experiments/1",
        "experiment_id": "EXP-QT14-ARRIVAL-01"
      }
    ],
    "frozen": {
      "window_utc": {
        "start_inclusive": "2025-01-02T00:00:00Z",
        "end_exclusive": "2025-01-02T01:00:00Z"
      },
      "timestamp_unit": "Unix microseconds",
      "bin_closure": "[left,right)",
      "keep_equal_timestamp_distinct_trade_ids": true,
      "waiting_times": "Adjacent observed interior events only; left/right window waiting segments are censored.",
      "model_count_interval": "N(a,b] is a separate mathematical convention."
    },
    "default_outputs": {
      "minute_counts": [
        6,
        28,
        10,
        4,
        21,
        10,
        23,
        20,
        16,
        14,
        16,
        22,
        11,
        37,
        19,
        61,
        9,
        55,
        16,
        100,
        45,
        35,
        62,
        203,
        531,
        195,
        145,
        54,
        228,
        44,
        139,
        54,
        28,
        59,
        22,
        49,
        52,
        173,
        51,
        33,
        33,
        47,
        21,
        54,
        33,
        3,
        48,
        24,
        51,
        16,
        38,
        41,
        11,
        19,
        19,
        28,
        17,
        48,
        17,
        23
      ],
      "n": 3291,
      "mean": 54.85,
      "sample_variance": 6364.977118644067,
      "fano": 116.04333853498754,
      "lambda_per_second": 0.9141666666666667,
      "seconds_summary_source": "Recomputed from complete 3291-row ID/time projection of the connected frozen CSV",
      "one_second": {
        "mean": 0.9141666666666667,
        "sample_variance": 51.16601208669075,
        "zero_bins": 2901,
        "bins": 3600
      },
      "interior_waits": {
        "n": 3290,
        "zero_gaps": 1880,
        "mean_seconds": 1.092549620668693,
        "max_seconds": 42.742328
      },
      "waiting_histogram": {
        "zero_atom": 1880,
        "positive_bin_edges": [
          0.0,
          0.001,
          0.01,
          0.1,
          1.0,
          5.0,
          10.0,
          30.0,
          60.0
        ],
        "counts": [
          294,
          167,
          112,
          269,
          337,
          131,
          93,
          7
        ],
        "closure": "positive first bin (0,right); subsequent [left,right), final includes right",
        "total": 3290
      }
    }
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从ETHBTC逐笔时间重建分箱与内部间隔；证明Poisson补偿鞅、指数间隔与独立增量的等价，比较样本离散度、空箱率及扩大滤过后的条件期望. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "从ETHBTC逐笔时间重建分箱与内部间隔；证明Poisson补偿鞅、指数间隔与独立增量的等价，比较样本离散度、空箱率及扩大滤过后的条件期望.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
<a id="qt14-records"></a>
## ETHBTC成交记录

取 Binance 的 ETHBTC 现货逐笔成交档案，固定观察 2025 年 1 月 2 日 UTC 的第一个小时 $[00{:}00,01{:}00)$. 每条记录有 trade ID、价格、数量、报价资产数量、时间戳及两个布尔字段. 价格单位为 BTC/ETH，数量单位为 ETH；该日期的现货时间戳使用 Unix 微秒. 时间戳相同而 trade ID 不同的记录仍分别计数.[^binance]

| trade ID | 价格（mBTC/ETH） | 数量（mETH） | Unix微秒 |
|---|---:|---:|---|
| 482524746 | 35.53 | 5.6 | 1735776004130016 |
| 482524747 | 35.52 | 1,000 | 1735776015196046 |

第一笔在窗口开始后约4.13秒. 窗口外相邻成交未纳入，因此边界等待被截断. 附件保留一小时3,291笔的trade ID、微秒时间及分箱统计；上表价格与数量分别换算为mBTC和mETH，1m单位等于0.001原单位.

<a id="qt14-counts"></a>
## 计数与分箱

对严格递增的模型到达时刻 $0<T_1<T_2<\cdots\to\infty$，定义

$$
N_t=\sum_{j\ge1}\mathbf1_{\{T_j\le t\}},
\qquad N(a,b]=N_b-N_a.
$$

理论计数采用 $(a,b]$，数据截窗与分箱采用 $[a,b)$，恰落在下一分钟起点的记录进入下一箱. 重复时间戳表示当前精度无法区分到达先后，逐笔记录仍分别计数.

以窗口起点为 $u_0$，对每条微秒时间戳 $u_i$，计算秒偏移 $t_i=(u_i-u_0)/10^6$. 宽度为 $\Delta$ 秒时，箱号是 $\lfloor t_i/\Delta\rfloor$，仅保留 $0\le t_i<3600$. 于是

$$
\widehat\lambda=\frac{3291}{3600}
\approx0.914\quad\text{笔/秒}.
$$

同一窗口强度换算为54.85笔/分钟.

<a id="qt14-poisson"></a>
## Poisson过程与补偿鞅

令 $N_0=0$，$N$ 为右连续计数过程. 齐次 Poisson 过程的强度为 $\lambda>0$，是指不相交时间区间的增量独立，而且对 $s<t$，

$$
P(N_t-N_s=k)
=e^{-\lambda(t-s)}\frac{[\lambda(t-s)]^k}{k!},
\qquad k=0,1,\ldots.
$$

取自然滤过 $\mathcal F_s=\sigma(N_u:u\le s)$. 扩大滤过后若仍要使用独立增量的条件期望，需要未来增量独立于新增信息.[^poisson]

由独立增量，

$$
\mathbb{E}[N_t-N_s\mid\mathcal F_s]=\lambda(t-s).
$$

因此 $M_t=N_t-\lambda t$ 适应、可积，且

$$
\mathbb{E}[M_t\mid\mathcal F_s]
=N_s+\lambda(t-s)-\lambda t=M_s.
$$

这证明模型中的补偿过程是鞅. 经验残差 $N_t-\widehat\lambda t$ 使用同窗估计参数，其条件均值需另行检验.

首等待 $T_1$ 的尾概率也立即可算：

$$
P(T_1>t)=P(N_t=0)=e^{-\lambda t}.
$$

故 $T_1\sim\operatorname{Exp}(\lambda)$，均值为 $1/\lambda$.

<a id="qt14-arrivals-proof"></a>
## 指数间隔构造

取独立同分布的 $E_j\sim\operatorname{Exp}(\lambda)$，令 $T_n=E_1+\cdots+E_n$. 先排除有限时点发生无穷多次到达. 对任何 $\theta>0$，

$$
\begin{aligned}
P(T_n\le T)
&\le e^{\theta T}\mathbb{E}[e^{-\theta T_n}]\\
&=e^{\theta T}
\left(\frac{\lambda}{\lambda+\theta}\right)^n\longrightarrow0.
\end{aligned}
$$

由于 $\{T_n\le T\}$ 递减，所有 $T_n$ 都落在固定 $[0,T]$ 内的概率为零. 再对正整数 $T$ 取可数并，得到无爆炸.

现在固定 $0=t_0<\cdots<t_m=T$，要求第 $j$ 段恰好有 $n_j$ 次到达，令 $n=\sum n_j$. 对有序到达位置 $0<s_1<\cdots<s_n<T$，前 $n$ 个指数密度相乘，再乘下一次等待超过 $T-s_n$ 的概率，得到

$$
\lambda^n e^{-\lambda s_n}
 e^{-\lambda(T-s_n)}=\lambda^n e^{-\lambda T}.
$$

在每段各自的有序单纯形上积分，体积为 $\prod_j(\Delta t_j)^{n_j}/n_j!$，所以联合概率是

$$
\prod_{j=1}^m
 e^{-\lambda\Delta t_j}
 \frac{(\lambda\Delta t_j)^{n_j}}{n_j!}.
$$

联合概率分解给出各段Poisson分布及独立性. 反向地，$\{T_j>t\}=\{N_t<j\}$ 使计数的有限维分布确定到达时刻的联合分布，故Poisson过程的间隔为iid指数变量.

<a id="qt14-observed"></a>
## 观察记录与模型基准

| 描述对象 | 箱数/间隔数 | 平均数 | 样本方差/零间隔 |
| --- | --- | --- | --- |
| 每秒计数 | 3600 | 0.914 | 51.166 |
| 每分钟计数 | 60 | 54.85 | 6364.977 |
| 内部等待时间 | 3290 | 1.093 秒 | 1880 个零间隔 |

样本方差分母取箱数减1. 齐次Poisson的均值等于方差，而分钟记录的方差远大于均值. 每秒空箱占 $2901/3600\approx80.583\%$；代入全窗强度的Poisson空箱概率约40.085%.

3,290个内部间隔中有1,880个为零，均值约1.093秒；边界截断和时间精度改变了等待样本. 时变强度、共同订单的记录批次与到达依赖均可造成过度离散，区分这些机制需更细事件记录或分时检验.

<div data-experiment-slot="EXP-QT14-ARRIVAL-01"></div>

<a id="qt14-exercise"></a>
## 练习与解析

**题目.** 用每秒强度计算齐次Poisson模型十秒零成交概率，并与样本分箱特征比较. 若 $\mathcal F_0$ 额外包含 $N_{60}$，补偿鞅证明的哪一步改变？

**解析.** $e^{-10\widehat\lambda}\approx1.07\times10^{-4}$. 该拟合基准的每秒零计数概率远低于观测空箱比例，单一恒定强度无法解释现有分箱特征.

加入 $N_{60}$ 后，$\mathbb{E}[N_{60}\mid\mathcal F_0]=N_{60}$，通常异于 $60\lambda$；未来增量已不独立于初始信息，补偿鞅的条件期望等式失效.

[^poisson]: Hao Wu，MIT 18.445，[Lecture 20: Poisson process](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf)，2015-04-29，7 张教学 slides.
[^binance]: Binance，[Public Data README](https://github.com/binance/binance-public-data)，Spot/Trades、availability、Updates；[2025-01-02 ETHBTC 原日档](https://data.binance.vision/data/spot/daily/trades/ETHBTC/ETHBTC-trades-2025-01-02.zip). 固定窗口统计与分钟计数绑定 2026-09-21 冻结档；官方档案仍可能后续修订.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT14-ARRIVAL-01",
    "title": "逐笔计数与内部等待",
    "anchor": "qt14-observed",
    "description": "共享输入的本篇视图；保持 EXP-QT14-ARRIVAL-01 唯一冻结身份.",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT14",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位."
    },
    "outputs": {
      "minute_counts": [
        6,
        28,
        10,
        4,
        21,
        10,
        23,
        20,
        16,
        14,
        16,
        22,
        11,
        37,
        19,
        61,
        9,
        55,
        16,
        100,
        45,
        35,
        62,
        203,
        531,
        195,
        145,
        54,
        228,
        44,
        139,
        54,
        28,
        59,
        22,
        49,
        52,
        173,
        51,
        33,
        33,
        47,
        21,
        54,
        33,
        3,
        48,
        24,
        51,
        16,
        38,
        41,
        11,
        19,
        19,
        28,
        17,
        48,
        17,
        23
      ],
      "n": 3291,
      "mean": 54.85,
      "sample_variance": 6364.977118644067,
      "fano": 116.04333853498754,
      "lambda_per_second": 0.9141666666666667,
      "seconds_summary_source": "Recomputed from complete 3291-row ID/time projection of the connected frozen CSV",
      "one_second": {
        "mean": 0.9141666666666667,
        "sample_variance": 51.16601208669075,
        "zero_bins": 2901,
        "bins": 3600
      },
      "interior_waits": {
        "n": 3290,
        "zero_gaps": 1880,
        "mean_seconds": 1.092549620668693,
        "max_seconds": 42.742328
      },
      "waiting_histogram": {
        "zero_atom": 1880,
        "positive_bin_edges": [
          0.0,
          0.001,
          0.01,
          0.1,
          1.0,
          5.0,
          10.0,
          30.0,
          60.0
        ],
        "counts": [
          294,
          167,
          112,
          269,
          337,
          131,
          93,
          7
        ],
        "closure": "positive first bin (0,right); subsequent [left,right), final includes right",
        "total": 3290
      }
    },
    "source_experiment_id": "EXP-QT14-ARRIVAL-01",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT14.html#qt14-observed",
    "result_attachment": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
      "json_pointers": [
        "/arrival"
      ]
    }
  }
]
```

## Sources
- [Binance Public Data README and ETHBTC daily trades](https://github.com/binance/binance-public-data): 2025 起现货 timestamp 微秒；trades 七列、日档次日可用、可能更新. 本文按冻结 first UTC hour 的全部 ID/time 字段复算计数和间隔.
- [Lecture 20: Poisson process](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf): 到达、计数、Poisson 与指数间隔设置；strong Markov 在原文仅陈述，本文不用它承担构造证明.

## Content relations
```json
[
  {
    "from": "zh-qt14",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt14-poisson",
    "relation": "requires",
    "to": "zh-qt07",
    "reason": "该段实际使用所列局部能力.",
    "required_competence": "过滤与信息时点"
  },
  {
    "from": "zh-qt14",
    "relation": "supported_by",
    "to": "QGHI-MIT-POISSON15",
    "reason": "到达、计数、Poisson 与指数间隔设置；strong Markov 在原文仅陈述，本文不用它承担构造证明.",
    "locator": "七张教学 slides pp.1–7",
    "scope": "计数定义、指数间隔、Poisson 条件"
  },
  {
    "from": "zh-qt14",
    "relation": "supported_by",
    "to": "QGHI-BINANCE-DATA",
    "reason": "2025 起现货 timestamp 微秒；trades 七列、日档次日可用、可能更新. 本文按冻结 first UTC hour 的全部 ID/time 字段复算计数和间隔.",
    "locator": "README Spot/Trades、availability、Updates",
    "scope": "微秒、七列、日档次日与修订"
  },
  {
    "from": "qt14-observed",
    "relation": "illustrated_by",
    "to": "EXP-QT14-ARRIVAL-01",
    "reason": "唯一冻结输入在本篇的对应视图."
  },
  {
    "from": "qt14-records",
    "relation": "supported_by",
    "to": "QGHI-BINANCE-DATA",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Binance，[Public Data README](https://github.com/binance/binance-public-data)，Spot/Trades、availability、Updates；[2025-01-02 ETHBTC 原日档](https://data.binance.vision/data/spot/daily/trades/ETHBTC/ETHBTC-trades-2025-01-02.zip). 固定窗口统计与分钟计数来自 2026-09-21 冻结档，不能据此保证未来档案永不修订.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "binance"
    ]
  },
  {
    "from": "qt14-poisson",
    "relation": "supported_by",
    "to": "QGHI-MIT-POISSON15",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Hao Wu，MIT 18.445，[Lecture 20: Poisson process](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf)，2015-04-29，7 张教学 slides. 指数间隔的联合密度证明在本篇完整给出；讲义的 strong Markov 陈述不是这里采用的证明.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "poisson"
    ]
  },
  {
    "from": "qt14-observed",
    "relation": "supported_by",
    "to": "QGHI-BINANCE-DATA",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Binance，[Public Data README](https://github.com/binance/binance-public-data)，Spot/Trades、availability、Updates；[2025-01-02 ETHBTC 原日档](https://data.binance.vision/data/spot/daily/trades/ETHBTC/ETHBTC-trades-2025-01-02.zip). 固定窗口统计与分钟计数来自 2026-09-21 冻结档，不能据此保证未来档案永不修订.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "binance"
    ]
  }
]
```

## Related entries
