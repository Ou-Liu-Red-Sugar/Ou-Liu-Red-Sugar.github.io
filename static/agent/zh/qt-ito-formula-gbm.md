# Itô 公式与几何 Brownian 模型

按准确 C1,2 条件验证 GBM，证明线性专例唯一性，区分均值与对数漂移.

Entry: zh-qt17 | Node: QT17 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你是这篇中文学习单元的教学 Agent. 读者具备本包列出的先修：Brownian 增量、Itô 积分、基本微分与期望.
先实际取得 required_readings 中本次所选单元并读完，核对版本、页码与公式；已有同会话同版完整读取可以复用. 只取得摘要或目录不得声称完成. 指定原件若无法取得，先说明具体缺口；只有本包中已经具名核过等价范围的完整数学证明，才可在对应数学步骤内作为替代，并须实际读完且记录替代正文、版本与支持步骤. 若本次必读仍有缺失，就停止依赖该内容的实质讲解；研究样本、训练安排、图表结果与作者主张不得以本站概述替代，也不得声称原件已经读过. runtime_reading_log 是你的实际运行记录，交付的空数组不是已读.
本篇任务：先让读者区分 mu=.08、log drift=.06 和 mean level=100exp(.08)，再验证 GBM 和停止后的唯一性；不能以四网格样本证明 Euler 收敛阶.
先让读者尝试，再按所缺的一步解释，不将全部课文一次复述. 完整证明需要标明每项条件在哪一步用到，练习给出完整解析. 只采用 supplied_inputs 的本篇切片和已链接全量数据，区分教学模型、真实记录、作者论文结果. 图不是证明，模拟不是现实规律；不以预测概率替换定价测度. 禁止从分位数拟造分布或另抽浏览器随机数冒充冻结路径. 最后问：读者只读完这个词条，真的能学明白吗？用迁移题实际判断，明确剩余能力缺口.

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
      "source_id": "QGHI-LALLEY-ITO12",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf"
      },
      "required_unit": {
        "locator": "§4.1–4.2 pp.14–16",
        "scope": "C1,2 命题及 Itô 过程条件",
        "purpose": "区分公式与全局期望结论"
      },
      "supports": "渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式. p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开.",
      "title": "Notes on the Itô Calculus",
      "authors": [
        "Steven P. Lalley"
      ],
      "version": "2012-05-15",
      "fallback_source_ids": []
    },
    {
      "source_id": "QGHI-LALLEY-SDE16",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf"
      },
      "required_unit": {
        "locator": "§2.2 p.3；§2.5 pp.6–7",
        "scope": "Gronwall 与停止唯一性",
        "purpose": "只采用 GBM 线性专例，不强制完整 Picard"
      },
      "supports": "SDE 初值和积分条件、Gronwall、停止后唯一性；这里只采用 GBM 的线性专例.",
      "title": "Stochastic Differential Equations",
      "authors": [
        "Steven P. Lalley"
      ],
      "version": "2016-12-02",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "Brownian 增量、Itô 积分、基本微分与期望.",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读.",
    "attachments": [
      {
        "title": "本篇完整静态阅读、全部题解与证明",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT17.html",
        "kind": "html"
      },
      {
        "title": "本篇同源 Markdown",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT17.md",
        "kind": "markdown"
      },
      {
        "title": "common-first-path.csv",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/common-first-path.csv",
        "kind": "csv",
        "bytes": 23281
      },
      {
        "title": "reproduce.py",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/compute/reproduce.py",
        "kind": "py",
        "bytes": 10867
      },
      {
        "title": "shared-normal-array.npz",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/shared-normal-array.npz",
        "kind": "npz",
        "bytes": 16118323
      },
      {
        "title": "完整实际结果及指定单元",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/diffusion"
        ]
      },
      {
        "title": "四个实验的唯一冻结定义",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/qt-ghi-shared-experiments.json",
        "kind": "json",
        "json_pointer": "/experiments/2",
        "experiment_id": "EXP-QT15-17-DIFFUSION-01"
      }
    ],
    "frozen": {
      "rng": {
        "library": "NumPy 2.4.6",
        "generator": "Generator(PCG64(15161724))",
        "draw": "standard_normal((8192,256))",
        "seed": 15161724,
        "shape": [
          8192,
          256
        ],
        "draw_order": "Exactly as the existing source algorithm; no preceding draws."
      },
      "brownian_horizon": 1,
      "finest_intervals": 256,
      "nested_intervals": [
        4,
        16,
        64,
        256
      ],
      "gbm_P_illustration": {
        "S0": 100,
        "mu_P": 0.08,
        "sigma": 0.2,
        "T_years": 1,
        "identity": "Teaching physical model; not fitted to observed returns."
      }
    },
    "default_outputs": {
      "grids": [
        {
          "steps": 4,
          "first_qv": 0.7944594147350206,
          "mean_qv": 0.9906292333607486,
          "sample_variance": 0.506927228120233,
          "theory_variance": 0.5,
          "left": -0.19728199481057607,
          "right": 0.5971774199244447,
          "integral": -0.3000522874430651,
          "integral_mse": 0.12673828965562223,
          "theory_mse": 0.125,
          "euler_rmse": 1.6218905290221228,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.865174681370263e-14,
          "right_left_max_residual": 4.440892098500626e-15
        },
        {
          "steps": 16,
          "first_qv": 1.0792151299895332,
          "mean_qv": 0.9972134638881094,
          "sample_variance": 0.12488983556326173,
          "theory_variance": 0.125,
          "left": -0.33965985243783225,
          "right": 0.7395552775517009,
          "integral": -0.3000522874430651,
          "integral_mse": 0.031220588751377322,
          "theory_mse": 0.03125,
          "euler_rmse": 0.7879970305170926,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        },
        {
          "steps": 64,
          "first_qv": 1.0205748309050482,
          "mean_qv": 0.9979784834959156,
          "sample_variance": 0.031275134203983666,
          "theory_variance": 0.03125,
          "left": -0.31033970289559004,
          "right": 0.7102351280094583,
          "integral": -0.3000522874430651,
          "integral_mse": 0.007818850741888548,
          "theory_mse": 0.0078125,
          "euler_rmse": 0.3906616566182395,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.687538997430238e-14,
          "right_left_max_residual": 1.9984014443252818e-15
        },
        {
          "steps": 256,
          "first_qv": 0.9658159774394378,
          "mean_qv": 1.0007154342405915,
          "sample_variance": 0.007928244277278857,
          "theory_variance": 0.0078125,
          "left": -0.2829602761627848,
          "right": 0.6828557012766532,
          "integral": -0.3000522874430651,
          "integral_mse": 0.001981947080043741,
          "theory_mse": 0.001953125,
          "euler_rmse": 0.19619282035111724,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        }
      ],
      "terminal": {
        "n": 8192,
        "mean": 108.19699073155812,
        "sample_sd": 21.797741228015408,
        "mean_mc_se": 0.24083329120123867,
        "mse_to_zero": 12181.672325334242,
        "mse_mc_se": 55.97140472475497,
        "q05": 76.595919234743,
        "q95": 147.22698979604334
      },
      "theory_mean": 108.32870676749586,
      "log_drift": 0.06
    }
  }
}
```

## Supplied entry
<a id="qt17-motivation"></a>
## 二阶项不是对普通链式法则的小修饰

普通链式法则把一阶增量累加，较高阶项消失；Brownian 增量的平方和却留下非零极限. 这就是 Itô 修正项的来源. 本篇先给条件完整的一维公式，再把几何 Brownian 运动的显式解、均值、对数漂移和唯一性走通；完整公式证明见 [一维 Itô 公式的证明](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-proof/).

先修是连续积分的含义、二次变差，以及对确定函数求偏导. 数值实验中的概率 $P$ 是人为指定的生成模型，不是从真实收益拟合出来的规律.

<a id="qt17-theorem"></a>
## 采用的公式及全部条件

固定 $T<\infty$，通常条件（过滤右连续，且 $\mathcal F_0$ 包含 $\mathcal F$ 中所有 $P$ 零集及其子集）的过滤概率空间，$W$ 相对于该过滤为 Brownian. 令 $X_0$ 是有限的 $\mathcal F_0$ 可测随机变量；$a,b$ 渐进可测，满足

$$
\int_0^T|a_s|ds+\int_0^Tb_s^2ds<\infty\quad\text{几乎必然}.
$$

定义连续 Itô 过程

$$
X_t=X_0+\int_0^ta_sds+\int_0^tb_sdW_s.
$$

随机积分必要时按局部平方可积版本解释. 若 $f\in C^{1,2}([0,T]\times\mathbb R)$，即 $f,f_t,f_x,f_{xx}$ 联合连续，时间端点取单侧导数，则在一个共同满测度集合上，对所有 $t\le T$，

$$
\begin{aligned}
f(t,X_t)-f(0,X_0)
={}&\int_0^t f_t(s,X_s)ds\\
&+\int_0^t a_sf_x(s,X_s)ds\\
&+\frac12\int_0^t b_s^2f_{xx}(s,X_s)ds\\
&+\int_0^t b_sf_x(s,X_s)dW_s.
\end{aligned}
$$

不要求 $f_{tt}$ 或 $f_{tx}$ 存在，也不要求 $\mathbb{E}|X_0|^2<\infty$. 连续路径在有限时间内有界；在其经过的紧区域上，所需导数有界. 因此普通积分和局部随机积分合法. 这个结论本身不会让最后一项自动成为全局零均值的真鞅. [^ito]

对 $f(x)=x^2$，公式给 $d(X_t^2)=2X_t\,dX_t+b_t^2dt$. 当 $X=W$，就回到 $\int WdW=(W_t^2-t)/2$. 这既检验系数 $1/2$，也说明简写 $(dW)^2=dt$ 只能是已证公式的记忆方式.

<a id="qt17-gbm"></a>
## 从显式函数验证 GBM

取常数 $\mu,\sigma$ 和确定 $S_0>0$，令

$$
S_t=S_0\exp\{(\mu-\sigma^2/2)t+\sigma W_t\}.
$$

设 $g(t,x)=S_0e^{(\mu-\sigma^2/2)t+\sigma x}$. 则

$$
g_t=(\mu-\sigma^2/2)g,
\quad g_x=\sigma g,
\quad g_{xx}=\sigma^2g.
$$

对 Brownian 特例应用公式，两项 $\sigma^2/2$ 抵消，得到

$$
dS_t=\mu S_tdt+\sigma S_tdW_t.
$$

显式函数连续、正值，有限区间上路径有界，故相关局部积分确实存在. 反过来，对任一正解应用 $\log$，在远离零和无穷的停止区间上有

$$
d\log S_t=(\mu-\sigma^2/2)dt+\sigma dW_t.
$$

这里 $\log$ 只在正半轴定义，不能对一个可能穿零的过程不加停止直接应用.

<a id="qt17-unique"></a>
## 还要说明：这是同一驱动下的唯一解

若 $S,\widehat S$ 是同一个 $W$、同一起点的两个连续解，令 $D=S-\widehat S$，并停在

$$
\tau_m=\inf\{t:S_t^2+\widehat S_t^2\ge m\}\wedge T.
$$

停止后各二阶矩有限，停止规则与差方程给

$$
D_{t\wedge\tau_m}
=\mu\int_0^t\mathbf1_{\{s\le\tau_m\}}D_sds
+\sigma\int_0^t\mathbf1_{\{s\le\tau_m\}}D_sdW_s.
$$

利用 $(x+y)^2\le2x^2+2y^2$、Cauchy–Schwarz 与 Itô 等距，若 $y(t)=\mathbb{E}|D_{t\wedge\tau_m}|^2$，则

$$
y(t)\le2(\mu^2T+\sigma^2)\int_0^t y(s)ds.
$$

令 $F(t)=\int_0^t y(s)ds$. 它绝对连续、$F(0)=0$，且 $F'\le CF$，所以 $(e^{-Ct}F(t))'\le0$；非负性迫使 $F=y=0$. 这就是本例需要的 Gronwall 步骤. 随 $m$ 增大，连续路径在有限区间有界，停时最终等于 $T$. 先对有理时点、再用连续性，就得两个解不可分辨. [^sde]

如果不先停止，直接写有限的二阶矩不等式，就可能把待证的可积性偷放进证明. 显式解的验证与唯一性是不同责任.

<a id="qt17-moments"></a>
## $\mu$、对数漂移和均值增长不是一个量

高斯矩母函数给

$$
\mathbb{E}[S_T]=S_0e^{\mu T},
\qquad
\mathbb{E}\log(S_T/S_0)=(\mu-\sigma^2/2)T.
$$

冻结教学模型是 $S_0=100$、$\mu_P=.08$、$\sigma=.20$、$T=1$. 理论一年均值为 108.32870677，对数漂移为 .06；预期简单收益则为 $e^{.08}-1$，不是恰好 .08. 波动率越高，保持相同 $\mu$ 时典型的对数增长越低，但价格均值增长率仍由 $\mu$ 决定.

| 网格区间数 | Euler 与精确终点的 RMSE | 样本中非正 Euler 终点数 |
| --- | --- | --- |
| 4 | 1.621890529 | 0 |
| 16 | 0.787997031 | 0 |
| 64 | 0.390661657 | 0 |
| 256 | 0.196192820 | 0 |

<div data-experiment-slot="VIEW-QT17-GBM"></div>

Euler 离散式是 $S_{j+1}^{E}=S_j^E(1+\mu\Delta t+\sigma\Delta W_j)$. 表中它与显式解使用同一组增量，比较的是同路径终点误差，不是两套独立模拟的差. Euler 理论上可能产生非正值；这次有限样本未出现，也不能将其当作正值保证. 四个步长上的下降趋势不是一份收敛阶证明.

定价实验后来会在一个另述的 $Q$ 模型中用 $r$ 作为漂移. 共用随机数只是数值耦合，不是证明 $P$ 与 $Q$ 的换测度关系，更不能把这里的 .08 随手替换成真实投资的必要回报率.

<a id="qt17-exercise"></a>
## 迁移题：谁增长得更快？

**题目.** 在上述一年模型下，比较均值、中位数和预期对数收益. 有人忽略二阶修正，写成 $\widetilde S_T=100e^{.08+.20W_T}$，求它实际对应的价格漂移，并解释为什么它不再是原模型.

**解析.** 中位数为 $100e^{.06}\approx106.1837$，均值为 $100e^{.08}\approx108.3287$，预期对数收益为 .06. 均值被较大的右尾拉高，不能用均值代表“半数路径以上”.

对错误式用 Itô 公式，它的价格漂移是 $.08+.5(.20)^2=.10$，均值变为 $100e^{.10}\approx110.5171$. 少掉 $-\sigma^2/2$ 不是一个记号偏好，而是换了模型. 纠正方式应回到导数与二阶项，而不是事后把模拟均值强行校到 108.33.

[^ito]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§4.1–4.2、§4.5. 一般 $L^1/L^2$ 系数的传递见本包 QT17-P1.
[^sde]: Lalley，[Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf)，2016-12-02，§2.2 的 Gronwall 与 §2.5 的停止唯一性，pp.3、6–7. 本节只需 GBM 的线性专例；一般 Picard 理论不是先修.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT15-17-DIFFUSION-01",
    "title": "同一路径的二次变差",
    "anchor": "qt15-experiment",
    "description": "共享输入的本篇视图；保持 EXP-QT15-17-DIFFUSION-01 唯一冻结身份.",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT15",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位."
    },
    "outputs": {
      "grids": [
        {
          "steps": 4,
          "first_qv": 0.7944594147350206,
          "mean_qv": 0.9906292333607486,
          "sample_variance": 0.506927228120233,
          "theory_variance": 0.5,
          "left": -0.19728199481057607,
          "right": 0.5971774199244447,
          "integral": -0.3000522874430651,
          "integral_mse": 0.12673828965562223,
          "theory_mse": 0.125,
          "euler_rmse": 1.6218905290221228,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.865174681370263e-14,
          "right_left_max_residual": 4.440892098500626e-15
        },
        {
          "steps": 16,
          "first_qv": 1.0792151299895332,
          "mean_qv": 0.9972134638881094,
          "sample_variance": 0.12488983556326173,
          "theory_variance": 0.125,
          "left": -0.33965985243783225,
          "right": 0.7395552775517009,
          "integral": -0.3000522874430651,
          "integral_mse": 0.031220588751377322,
          "theory_mse": 0.03125,
          "euler_rmse": 0.7879970305170926,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        },
        {
          "steps": 64,
          "first_qv": 1.0205748309050482,
          "mean_qv": 0.9979784834959156,
          "sample_variance": 0.031275134203983666,
          "theory_variance": 0.03125,
          "left": -0.31033970289559004,
          "right": 0.7102351280094583,
          "integral": -0.3000522874430651,
          "integral_mse": 0.007818850741888548,
          "theory_mse": 0.0078125,
          "euler_rmse": 0.3906616566182395,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.687538997430238e-14,
          "right_left_max_residual": 1.9984014443252818e-15
        },
        {
          "steps": 256,
          "first_qv": 0.9658159774394378,
          "mean_qv": 1.0007154342405915,
          "sample_variance": 0.007928244277278857,
          "theory_variance": 0.0078125,
          "left": -0.2829602761627848,
          "right": 0.6828557012766532,
          "integral": -0.3000522874430651,
          "integral_mse": 0.001981947080043741,
          "theory_mse": 0.001953125,
          "euler_rmse": 0.19619282035111724,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        }
      ],
      "terminal": {
        "n": 8192,
        "mean": 108.19699073155812,
        "sample_sd": 21.797741228015408,
        "mean_mc_se": 0.24083329120123867,
        "mse_to_zero": 12181.672325334242,
        "mse_mc_se": 55.97140472475497,
        "q05": 76.595919234743,
        "q95": 147.22698979604334
      },
      "theory_mean": 108.32870676749586,
      "log_drift": 0.06
    },
    "source_experiment_id": "EXP-QT15-17-DIFFUSION-01",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT15.html#qt15-experiment",
    "result_attachment": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
      "json_pointers": [
        "/diffusion"
      ]
    }
  },
  {
    "id": "VIEW-QT17-GBM",
    "title": "GBM 精确解与 Euler",
    "anchor": "qt17-moments",
    "description": "共享输入的本篇视图；保持 EXP-QT15-17-DIFFUSION-01 唯一冻结身份.",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT17",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位."
    },
    "outputs": {
      "grids": [
        {
          "steps": 4,
          "first_qv": 0.7944594147350206,
          "mean_qv": 0.9906292333607486,
          "sample_variance": 0.506927228120233,
          "theory_variance": 0.5,
          "left": -0.19728199481057607,
          "right": 0.5971774199244447,
          "integral": -0.3000522874430651,
          "integral_mse": 0.12673828965562223,
          "theory_mse": 0.125,
          "euler_rmse": 1.6218905290221228,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.865174681370263e-14,
          "right_left_max_residual": 4.440892098500626e-15
        },
        {
          "steps": 16,
          "first_qv": 1.0792151299895332,
          "mean_qv": 0.9972134638881094,
          "sample_variance": 0.12488983556326173,
          "theory_variance": 0.125,
          "left": -0.33965985243783225,
          "right": 0.7395552775517009,
          "integral": -0.3000522874430651,
          "integral_mse": 0.031220588751377322,
          "theory_mse": 0.03125,
          "euler_rmse": 0.7879970305170926,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        },
        {
          "steps": 64,
          "first_qv": 1.0205748309050482,
          "mean_qv": 0.9979784834959156,
          "sample_variance": 0.031275134203983666,
          "theory_variance": 0.03125,
          "left": -0.31033970289559004,
          "right": 0.7102351280094583,
          "integral": -0.3000522874430651,
          "integral_mse": 0.007818850741888548,
          "theory_mse": 0.0078125,
          "euler_rmse": 0.3906616566182395,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.687538997430238e-14,
          "right_left_max_residual": 1.9984014443252818e-15
        },
        {
          "steps": 256,
          "first_qv": 0.9658159774394378,
          "mean_qv": 1.0007154342405915,
          "sample_variance": 0.007928244277278857,
          "theory_variance": 0.0078125,
          "left": -0.2829602761627848,
          "right": 0.6828557012766532,
          "integral": -0.3000522874430651,
          "integral_mse": 0.001981947080043741,
          "theory_mse": 0.001953125,
          "euler_rmse": 0.19619282035111724,
          "euler_nonpositive": 0,
          "telescoping_max_residual": 1.7763568394002505e-14,
          "right_left_max_residual": 1.7763568394002505e-15
        }
      ],
      "terminal": {
        "n": 8192,
        "mean": 108.19699073155812,
        "sample_sd": 21.797741228015408,
        "mean_mc_se": 0.24083329120123867,
        "mse_to_zero": 12181.672325334242,
        "mse_mc_se": 55.97140472475497,
        "q05": 76.595919234743,
        "q95": 147.22698979604334
      },
      "theory_mean": 108.32870676749586,
      "log_drift": 0.06
    },
    "source_experiment_id": "EXP-QT15-17-DIFFUSION-01",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT17.html#qt17-moments",
    "result_attachment": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/results.json",
      "json_pointers": [
        "/diffusion"
      ]
    }
  }
]
```

## Sources
- [Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf): 渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式. p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开.
- [Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf): SDE 初值和积分条件、Gronwall、停止后唯一性；这里只采用 GBM 的线性专例.

## Content relations
```json
[
  {
    "from": "zh-qt17",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt17-theorem",
    "relation": "requires",
    "to": "qt16-extension",
    "reason": "该段实际使用所列局部能力.",
    "required_competence": "随机积分与局部积分接口"
  },
  {
    "from": "zh-qt17",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-ITO12",
    "reason": "渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式. p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开.",
    "locator": "§4.1–4.2 pp.14–16",
    "scope": "C1,2 命题及 Itô 过程条件"
  },
  {
    "from": "zh-qt17",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-SDE16",
    "reason": "SDE 初值和积分条件、Gronwall、停止后唯一性；这里只采用 GBM 的线性专例.",
    "locator": "§2.2 p.3；§2.5 pp.6–7",
    "scope": "Gronwall 与停止唯一性"
  },
  {
    "from": "qt17-theorem",
    "relation": "derived_from",
    "to": "qt17p1-statement",
    "reason": "准确命题与完整证明分流."
  },
  {
    "from": "qt17-moments",
    "relation": "illustrated_by",
    "to": "EXP-QT15-17-DIFFUSION-01",
    "reason": "唯一冻结输入在本篇的对应视图."
  },
  {
    "from": "qt17-theorem",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-ITO12",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§4.1–4.2、§4.5. 一般 $L^1/L^2$ 系数的完整传递在本包 QT17-P1 给出，不以原文的简略逼近说明代替.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "ito"
    ]
  },
  {
    "from": "qt17-unique",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-SDE16",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留.",
    "locator": "Lalley，[Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf)，2016-12-02，§2.2 的 Gronwall 与 §2.5 的停止唯一性，pp.3、6–7. 本文只证明 GBM 的线性专例，不要求先掌握一般 Picard 理论.",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元.",
    "citation_labels": [
      "sde"
    ]
  }
]
```

## Related entries
