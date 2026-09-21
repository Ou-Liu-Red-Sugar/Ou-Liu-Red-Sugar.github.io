# Itô 积分：按已知信息累计变化

从左端点持仓和式证明简单等距与鞅，并计算积分 W dW。

Entry: zh-qt16 | Node: QT16 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你是这篇中文学习单元的教学 Agent。读者具备本包列出的先修：条件期望、时空 L2 范数与 QT15 的 QV。
先实际取得 required_readings 中本次所选单元并读完，核对版本、页码与公式；已有同会话同版完整读取可以复用。只取得摘要或目录不得声称完成。指定原件若无法取得，先说明具体缺口；只有本包中已经具名核过等价范围的完整数学证明，才可在对应数学步骤内作为替代，并须实际读完且记录替代正文、版本与支持步骤。若本次必读仍有缺失，就停止依赖该内容的实质讲解；研究样本、训练安排、图表结果与作者主张不得以本站概述替代，也不得声称原件已经读过。runtime_reading_log 是你的实际运行记录，交付的空数组不是已读。
本篇任务：先比较左右端点系数的信息时点；要求以条件期望而不是“收益独立”消交叉项，再由 telescoping 与 QV 算 WdW。
先让读者尝试，再按所缺的一步解释，不将全部课文一次复述。完整证明需要标明每项条件在哪一步用到，练习给出完整解析。只采用 supplied_inputs 的本篇切片和已链接全量数据，区分教学模型、真实记录、作者论文结果。图不是证明，模拟不是现实规律；不以预测概率替换定价测度。禁止从分位数拟造分布或另抽浏览器随机数冒充冻结路径。最后问：读者只读完这个词条，真的能学明白吗？用迁移题实际判断，明确剩余能力缺口。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

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
        "locator": "§1.1 渐进可测定义；§3.1–3.3 pp.7–12",
        "scope": "简单积分、等距、一般构造接口、WdW",
        "purpose": "按已知左系数消交叉项，不声称独立"
      },
      "supports": "渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式。p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开。",
      "title": "Notes on the Itô Calculus",
      "authors": [
        "Steven P. Lalley"
      ],
      "version": "2012-05-15",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "条件期望、时空 L2 范数与 QT15 的 QV。",
    "static_equivalent": "本篇 reader 全部默认表、证明及题解；HTML 禁用脚本仍可读。",
    "attachments": [
      {
        "title": "本篇完整静态阅读、全部题解与证明",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT16.html",
        "kind": "html"
      },
      {
        "title": "本篇同源 Markdown",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT16.md",
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
<a id="qt16-question"></a>
## 先决定系数，再接受下一段变化

离散交易中的累计变化写成“前一时点决定的持仓，乘以后一区间的价格增量”。这一先后顺序到了连续时间不会消失。本篇先在有限个区间上定义积分，完整证明等距与鞅性质，再亲手重建 $\int W\,dW$。一般积分的密度、连续版本与停止规则在独立单元 [Itô 积分的完整构造](https://ou-liu-red-sugar.github.io/zh/notebook/qt-ito-integral-proof/) 中证明。

固定有限 $T$ 和通常条件下的过滤概率空间；通常条件是过滤右连续，并且 $\mathcal F_0$ 包含概率空间中的全部零测子集。$W$ 相对于这个过滤为 Brownian 运动。先修为条件期望、$L^2$ 范数及上一单元的二次变差。

<a id="qt16-simple"></a>
## 可以直接算的积分

令 $0=t_0<\cdots<t_n=T$ 为确定性分割。一个简单可预测过程写作

$$
H_t=\sum_{j=0}^{n-1}\xi_j\mathbf1_{(t_j,t_{j+1}]}(t),
\qquad \xi_j\in L^2(\mathcal F_{t_j}).
$$

这里 $\xi_j$ 服务于 $(t_j,t_{j+1}]$，在 $t_j$ 已知。定义

$$
I_t(H)=\sum_j\xi_j
\bigl(W_{t\wedge t_{j+1}}-W_{t\wedge t_j}\bigr).
$$

它对分割的细分不变：把一个区间分成两半但保持相同系数，两个增量会加回原增量。因此不同的分段表示不会改变积分。它也立即是线性的、适应的，并具有连续路径。[^ito-simple]

系数可以随机，不必是常数；关键是不能偷用下一时点的值。我们并不说每个随机持仓的收益相互独立，接下来只需要条件期望。

<a id="qt16-isometry"></a>
## 等距：交叉项为什么为零

记 $A_j=\xi_j\Delta W_j$。因为未来增量独立于 $\mathcal F_{t_j}$，有

$$
E[A_j\mid\mathcal F_{t_j}]=0,
\qquad
E[A_j^2]=E[\xi_j^2]\Delta t_j.
$$

对 $j<k$，$A_j$ 已是 $\mathcal F_{t_k}$ 可测，故

$$
E[A_jA_k]
=E\{A_j\xi_k E[\Delta W_k\mid\mathcal F_{t_k}]\}=0.
$$

这里各项可积：$A_j\in L^2$，$\xi_k\in L^2$，所以 $A_j\xi_k\in L^1$；再利用其与未来增量的独立性，乘积仍可积。也可以先截断系数再用 $L^2$ 极限得到同一结论。

展开有限和的平方便得

$$
E[I_T(H)]=0,
\qquad
E|I_T(H)|^2
=\sum_j E[\xi_j^2]\Delta t_j
=E\int_0^T H_t^2\,dt.
$$

这就是简单过程的 Itô 等距：被积过程的时空均方范数，变成积分终点的均方范数。它不只是一个方便算方差的技巧；它告诉我们应该用什么距离延拓积分。

<a id="qt16-martingale"></a>
## 从终点均值到整个过程的鞅性质

固定 $s<t$，把分割加上 $s,t$。处在同一原区间内时，系数在较早的左端点已知，因此在新左端点仍已知。对新分段中的每个未来增量，条件均值为零。逐段用塔式性质，得到

$$
E[I_t(H)-I_s(H)\mid\mathcal F_s]=0.
$$

适应性和可积性已经核过，故 $I(H)$ 是连续平方可积鞅。未来区间的系数未必在 $s$ 已知；我们是在各个区间自己的左端点条件化，再退回 $\mathcal F_s$，不是把全部未来系数一口气提出。

<a id="qt16-extension"></a>
## 一般过程需要哪一种可测性

渐进可测（progressive）的意思是：对每个 $u\le T$，$(t,\omega)\mapsto H_t(\omega)$ 在 $[0,u]\times\Omega$ 上相对于 $\mathcal B([0,u])\otimes\mathcal F_u$ 可测。这同时提供时间和样本的联合可测性；单说每个 $H_t$ 适应并不够。

采用空间

$$
\mathcal H_T^2
=\{H\text{ 渐进可测}:E\int_0^T H_t^2dt<\infty\},
$$

并把 $dt\otimes P$ 几乎处处相等的过程视为同一元素。简单左阶梯在这个空间稠密。若 $H^m\to H$ 于此范数，等距使 $I_T(H^m)$ 在 $L^2(P)$ 中收敛；但终点收敛还没有自动构造一条连续路径。QT16-P1 进一步用 Doob 最大不等式建立连续过程的极限，证明逼近无关、鞅性质与停止规则。[^ito-extension]

最终的连续积分过程按不可分辨性（indistinguishability）识别：存在一个共同满测度集合，其上所有时点都相等。这比逐个固定时点的几乎必然相等，量词更强。

若只有 $\int_0^T H_t^2dt<\infty$ 几乎必然，却没有期望有限，则须局部化，自动得到的是连续局部鞅，不可直接声称全局零均值或有限二阶矩。

<a id="qt16-wdw"></a>
## 从定义算一次：为什么不是 $W_T^2/2$

$W$ 本身属于 $\mathcal H_T^2$，因为 $E\int_0^T W_t^2dt=T^2/2$。用左端点阶梯 $H_t^\pi=W_{t_j}$ 逼近它，则

$$
\begin{aligned}
E\int_0^T|W_t-H_t^\pi|^2dt
&=\sum_j\int_{t_j}^{t_{j+1}}(t-t_j)dt\\
&=\frac12\sum_j(\Delta t_j)^2\longrightarrow0.
\end{aligned}
$$

另一方面，每条路径上都有精确望远镜恒等式

$$
2\sum_jW_{t_j}\Delta W_j=W_T^2-Q_\pi.
$$

左边由等距趋于 $2\int_0^T W_t\,dW_t$，右边由二次变差趋于 $W_T^2-T$，于是

$$
\int_0^T W_t\,dW_t=\frac{W_T^2-T}{2}.
$$

若换用右端点，两个有限和之差恰好是

$$
\sum_j W_{t_{j+1}}\Delta W_j
-\sum_jW_{t_j}\Delta W_j=Q_\pi.
$$

故右端点和趋于 $(W_T^2+T)/2$。这是不同信息约定造成的实质差别，不是数值显示误差。右端点系数一般不在区间开始时可知，所以它不属于我们刚定义的简单可预测积分。

<a id="qt16-numeric"></a>
## 同一路径上的左、右和式

实验仍使用上一单元同一个 $8192\times256$ 正态数组，$T=1$。对每条路径从最细网格聚合，不另抽随机数。

| 网格区间数 | 首路径左和 | 首路径右和 | 模拟 MSE | 理论 MSE |
| --- | --- | --- | --- | --- |
| 4 | -0.197281995 | 0.597177420 | 0.126738290 | 0.125000000 |
| 16 | -0.339659852 | 0.739555278 | 0.031220589 | 0.031250000 |
| 64 | -0.310339703 | 0.710235128 | 0.007818851 | 0.007812500 |
| 256 | -0.282960276 | 0.682855701 | 0.001981947 | 0.001953125 |

<div data-experiment-slot="VIEW-QT16-INTEGRAL"></div>

表中的理论均方误差为 $1/(2n)$，它可直接由刚才的逼近误差和等距得到；不是对模拟结果拟合出来的收敛率。单条路径误差可以来回变化，而多路径均方量回答的是另一个问题。

<a id="qt16-exercise"></a>
## 迁移：线性被积过程

**题目。** 对实常数 $a,b$，计算 $J=\int_0^T(a+bW_t)dW_t$ 的期望与方差，并说明 $W_T$ 与 $W_T^2-T$ 不相关是否意味着它们独立。

**解析。** 线性性给

$$
J=aW_T+\frac b2(W_T^2-T).
$$

两个加项期望都为零。高斯分布对称性给 $E[W_T^3]=0$，所以交叉项为零；$\operatorname{Var}(W_T^2)=2T^2$，因此

$$
\operatorname{Var}(J)=a^2T+\frac{b^2T^2}{2}.
$$

从等距也得到 $\int_0^T E[(a+bW_t)^2]dt$，结果相同。不过第二个变量是第一个变量的函数；一般并不独立。不相关足以完成这次二阶矩计算，却不能代替更强的独立性断言。

[^ito-simple]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§3.1，pp.7–8。原 p.8 的一步过程下标混用；本文按 $\xi\in\mathcal F_s$、$\xi(W_t-W_s)$ 的正确区间表达推导。
[^ito-extension]: 同讲义 §1.1–1.2、§3.2–3.5，pp.1–4、9–13；完整过程构造与停止传递见本包 QT16-P1，而非只引用终点 $L^2$ 极限。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-QT15-17-DIFFUSION-01",
    "title": "同一路径的二次变差",
    "anchor": "qt15-experiment",
    "description": "共享输入的本篇视图；保持 EXP-QT15-17-DIFFUSION-01 唯一冻结身份。",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT15",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位。"
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
    "id": "VIEW-QT16-INTEGRAL",
    "title": "左和、右和与积分",
    "anchor": "qt16-numeric",
    "description": "共享输入的本篇视图；保持 EXP-QT15-17-DIFFUSION-01 唯一冻结身份。",
    "inputs": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/data/learning-inputs.json",
      "json_pointer": "/QT16",
      "scope": "本篇 supplied_inputs 的完整同源切片；冻结参数和全部结果附件在该切片内定位。"
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-ghi/static/QT16.html#qt16-numeric",
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
- [Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf): 渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式。p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开。

## Content relations
```json
[
  {
    "from": "zh-qt16",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt16-isometry",
    "relation": "requires",
    "to": "qt15-moments",
    "reason": "该段实际使用所列局部能力。",
    "required_competence": "Brownian 增量与 QV"
  },
  {
    "from": "qt16-isometry",
    "relation": "requires",
    "to": "zh-qt11",
    "reason": "该段实际使用所列局部能力。",
    "required_competence": "条件期望的可测性与积分刻画"
  },
  {
    "from": "zh-qt16",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-ITO12",
    "reason": "渐进可测密度、简单积分等距、延拓、停止、局部化与一维 Itô 公式。p.8 下标和 p.19 漂移步长按正确推导采用；Doob 强 L2 估计及一般系数传递在本站完整展开。",
    "locator": "§1.1 渐进可测定义；§3.1–3.3 pp.7–12",
    "scope": "简单积分、等距、一般构造接口、WdW"
  },
  {
    "from": "qt16-extension",
    "relation": "derived_from",
    "to": "qt16p1-completion",
    "reason": "一般积分过程依赖完整延拓；不是把证明篇反设为简单积分定义的前提。"
  },
  {
    "from": "qt16-numeric",
    "relation": "illustrated_by",
    "to": "EXP-QT15-17-DIFFUSION-01",
    "reason": "唯一冻结输入在本篇的对应视图。"
  },
  {
    "from": "qt16-simple",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-ITO12",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留。",
    "locator": "Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§3.1，pp.7–8。原 p.8 的一步过程下标混用；本文按 $\\xi\\in\\mathcal F_s$、$\\xi(W_t-W_s)$ 的正确区间表达推导。",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元。",
    "citation_labels": [
      "ito-simple"
    ]
  },
  {
    "from": "qt16-extension",
    "relation": "supported_by",
    "to": "QGHI-LALLEY-ITO12",
    "reason": "对应本段作者已著明脚注；教学模型及本站补全证明的身份沿原脚注保留。",
    "locator": "同讲义 §1.1–1.2、§3.2–3.5，pp.1–4、9–13；完整过程构造与停止传递见本包 QT16-P1，而非只引用终点 $L^2$ 极限。",
    "scope": "只支持此处脚注具名的定义、条件、证明或原表单元。",
    "citation_labels": [
      "ito-extension"
    ]
  }
]
```

## Related entries
