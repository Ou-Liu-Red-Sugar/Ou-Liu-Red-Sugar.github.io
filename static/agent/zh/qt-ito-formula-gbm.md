# Itô 公式与几何 Brownian 模型

用Itô公式验证GBM，证明线性SDE的路径唯一性，区分价格均值与对数漂移.

Entry: zh-qt17 | Node: QT17 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 说明Itô公式每项的正则性与局部可积性；验证GBM显式解，用停止和Gronwall证明路径唯一性，重算均值、中位数、对数漂移和Euler同路径误差. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 说明Itô公式每项的正则性与局部可积性；验证GBM显式解，用停止和Gronwall证明路径唯一性，重算均值、中位数、对数漂移和Euler同路径误差. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "说明Itô公式每项的正则性与局部可积性；验证GBM显式解，用停止和Gronwall证明路径唯一性，重算均值、中位数、对数漂移和Euler同路径误差.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
<a id="qt17-motivation"></a>
## 二次变差修正

Brownian 增量的平方和留下非零极限，因此二阶 Taylor 项在连续时间极限中保留；完整证明见 [一维 Itô 公式的证明](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-formula-proof/).

<a id="qt17-theorem"></a>
## 一维Itô公式

固定 $T<\infty$，通常条件（滤过右连续，且 $\mathcal F_0$ 包含 $\mathcal F$ 中所有 $P$ 零集及其子集）的滤过概率空间，$W$ 相对于该滤过为 Brownian. 令 $X_0$ 是有限的 $\mathcal F_0$ 可测随机变量；$a,b$ 渐进可测，满足

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

连续路径在有限区间内有界，所需导数沿路径也有界，因而普通积分与局部随机积分存在. 最后一项为局部鞅，取期望消去它需额外全局可积性.[^ito]

对 $f(x)=x^2$，公式给 $d(X_t^2)=2X_t\,dX_t+b_t^2dt$. 当 $X=W$，就回到 $\int WdW=(W_t^2-t)/2$. 记号 $(dW)^2=dt$ 概括的是二次变差项在这一极限中的作用.

<a id="qt17-gbm"></a>
## GBM显式解

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

<a id="qt17-unique"></a>
## 路径唯一性

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

<a id="qt17-moments"></a>
## 漂移与均值

高斯矩母函数给

$$
\mathbb{E}[S_T]=S_0e^{\mu T},
\qquad
\mathbb{E}\log(S_T/S_0)=(\mu-\sigma^2/2)T.
$$

取 $S_0=100$、$\mu_P=0.08$、$\sigma=0.2$、$T=1$. 一年均值约108.329，对数漂移0.06，预期简单收益 $e^{0.08}-1\approx8.329\%$. 固定 $\mu$、提高 $\sigma$ 时，价格均值不变，预期对数增长下降.

| 网格区间数 | Euler 与精确终点的 RMSE | 样本中非正 Euler 终点数 |
| --- | --- | --- |
| 4 | 1.622 | 0 |
| 16 | 0.788 | 0 |
| 64 | 0.391 | 0 |
| 256 | 0.196 | 0 |

<div data-experiment-slot="VIEW-QT17-GBM"></div>

Euler式为 $S_{j+1}^{E}=S_j^E(1+\mu\Delta t+\sigma\Delta W_j)$，与显式解使用相同增量. 表中RMSE比较同路径终点；非正终点数为0. 由于高斯增量无下界，Euler乘数仍有取非正值的概率.

<a id="qt17-exercise"></a>
## 练习与解析

**题目.** 在上述一年模型下，比较均值、中位数和预期对数收益. 有人忽略二阶修正，写成 $\widetilde S_T=100e^{.08+.20W_T}$，求它实际对应的价格漂移，并解释为什么它不再是原模型.

**解析.** 中位数 $100e^{0.06}\approx106.184$，均值 $100e^{0.08}\approx108.329$，预期对数收益0.06. 右尾使均值高于中位数.

对 $\widetilde S$ 应用Itô公式，价格漂移为 $0.08+0.5(0.2)^2=0.1$，均值 $100e^{0.1}\approx110.517$. 省去二阶修正改变了SDE的漂移系数.

[^ito]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§4.1–4.2、§4.5. 一般 $L^1/L^2$ 系数的传递见本包 QT17-P1.
[^sde]: Lalley，[Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf)，2016-12-02，§2.2 的 Gronwall 与 §2.5 的停止唯一性，pp.3、6–7.

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
