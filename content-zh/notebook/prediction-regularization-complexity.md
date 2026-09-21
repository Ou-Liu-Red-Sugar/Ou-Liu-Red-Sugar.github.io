{
  "title": "预测目标、正则化与模型复杂度",
  "description": "从损失函数推导 ridge，重建相同信息下的完整基线比较，分清两类单位变换.",
  "layout": "entry",
  "notebookid": "zh-qt20",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt20"
}

以平方损失预测下一月 BusEq 收益时，总体目标是条件均值.以下以滞后收益为特征推导 ridge 回归，并在相同信息集、预测月份和评价规则下，与零预测和扩展历史均值比较.

<a id="qt20-object"></a>
## 数据与比较对象

使用French 30 Industry Portfolios的BusEq市值加权月收益，1990-01至2025-12共432个月，无缺失. 运算采用小数收益；市值权重用于行业组合内股票，统计时各月份等权.[^french]

数据来自 202607 CRSP 数据库 vintage 的当前 CIZ 重建快照，并由同一生产链重建 1990—2025 历史.该快照不提供各历史预测原点的当时版本；以下计算约定月末可使用当月收益，因此评价对象是当前快照上的预测运算. [^french-version]

在 $t-1$ 月末，以 $x_t=(r_{t-1},\ldots,r_{t-p})^T$ 预测下一月简单收益 $y_t=r_t$.

| 阶段 | 目标月份 | 数量 | 用途 |
|---|---|---:|---|
| 预热 | 1990-01—1990-12 | 12 | 提供最大 12 期滞后，不进入各模型的目标行 |
| 初始训练 | 1991-01—2009-12 | 228 | 拟合第一个验证原点 |
| 参数选择 | 2010-01—2019-12 | 120 | 每月扩展训练、预测，再累计验证误差 |
| 历史评价 | 2020-01—2025-12 | 72 | 固定选择规则后评价；系数仍按相同扩展规则更新 |

候选为 $p\in\{1,3,12\}$、$\lambda\in\{0,0.1,1,10\}$ 的 12 个回归，另外保留零预测和扩展历史均值两条基线. 每个模型从同一目标行开始、预测同一批月份. 完整候选账本与逐月结果随实验提供. [^compute]

<a id="qt20-loss"></a>
## 平方损失与预测目标

令 $Y\in L^2$，$\mathcal G$ 是预测时已知的信息，$m=\mathbb{E}[Y\mid\mathcal G]$. 对任意 $\mathcal G$ 可测的平方可积预测量 $g$，条件期望的正交性质给出

$$
\mathbb{E}[(Y-g)^2]=\mathbb{E}[(Y-m)^2]+\mathbb{E}[(m-g)^2].
$$

展开 $Y-g=(Y-m)+(m-g)$，正交性使交叉期望为0，故平方损失选择条件均值. 完整证明见 <a class="inline-ref" href="/zh/notebook/conditional-expectation-projection/" data-reference="zh-qt11">条件期望与投影<span aria-hidden="true"> ↗</span></a>.

线性回归将预测限制在线性函数族，另有有限样本参数估计误差. 绝对损失的总体最优目标为条件中位数.[^accuracy]

按验证SSE选模型，报告 $RMSE=\sqrt{SSE/n}$ 与 $MAE=n^{-1}\sum_t|r_t-\widehat r_t|$，均以百分点/月展示.

<a id="qt20-ridge"></a>
## Ridge与标准化

固定一个预测原点，训练目标有 $n$ 行、特征有 $p$ 列. 只在这 $n$ 行上求第 $j$ 列的均值 $\bar x_j$ 与标准差 $s_j=\sqrt{n^{-1}\sum_i(x_{ij}-\bar x_j)^2}$，然后令 $Z_{ij}=(x_{ij}-\bar x_j)/s_j$. 本实验各列都非恒定；若 $s_j=0$，须另定删除或保留规则，不能直接除零. 未来输入也使用这同一组训练参数.

Ridge 回归在本篇是以下优化问题：

$$
\min_{a\in\mathbb R,\;\beta\in\mathbb R^p}
\frac1n\|y-a\mathbf1-Z\beta\|_2^2+\lambda\|\beta\|_2^2,
\qquad \lambda\ge0.
$$

$Z$ 为 $n\times p$，$y$ 为 $n\times1$；截距 $a$ 不受惩罚. 惩罚只限制斜率，避免把整体平均收益也机械压向零. ISLP 使用的 RSS 版本与这里相差一个 $n$：把我们的目标整体乘 $n$，惩罚就成为 $n\lambda\|\beta\|^2$，不能不换尺度便移植另一实现的参数值. [^ridge]

对 $a$ 求导得 $a=\bar y-\bar z^T\beta$. 设 $Z_c=Z-\mathbf1\bar z^T$、$y_c=y-\bar y\mathbf1$，再对 $\beta$ 求导：

$$
-\frac2nZ_c^T(y_c-Z_c\beta)+2\lambda\beta=0,
$$

所以

$$
(Z_c^TZ_c+n\lambda I_p)\widehat\beta=Z_c^Ty_c.
$$

当 $\lambda>0$，任意非零 $v$ 都满足 $v^T(Z_c^TZ_c+n\lambda I)v=\|Z_cv\|^2+n\lambda\|v\|^2>0$，故解唯一. 实际计算解线性方程，不显式求逆. $\lambda=0$ 是 OLS；若设计矩阵秩不足，系数可以不唯一，不能顺便宣称每个样本外输入的预测都唯一.

Ridge以训练误差与系数规模的取舍控制敏感性. 随 $\lambda$ 增大，整体系数范数不增，单个系数未必单调；预测改善由验证误差判断.[^ridge]

<a id="qt20-run"></a>
## 逐原点计算与评价

先取回归组内最终胜者 $p=1,\lambda=10$，但只重建它在第一个验证原点的拟合. 预测目标为 2010-01；训练目标截止 2009-12，共 228 行.

| 中间量 | 展示值 |
|---|---:|
| 训练目标均值 $\bar y$ | 1.162% |
| 滞后特征训练均值 | 1.15% |
| 滞后特征训练标准差 | 8.361% |
| 2009-12收益 | 6.63% |
| 标准化输入 $z_0$ | 0.655 |
| $Z_c^Ty_c/n$ | 0.266% |
| $Z_c^TZ_c/n$ | 1 |
| $\widehat\beta$ | 0.024% |

单列标准化特征给出 $\widehat\beta=(Z_c^Ty_c/n)/(1+10)$. 使用附件未舍入输入，预测 $\bar y+z_0\widehat\beta\approx1.178\%$；实际收益−8.05%，误差约−9.228个百分点.[^compute]

接下来对每个验证原点重复同一流程. 训练窗口可以扩展，但每个候选的 $p,\lambda$ 保持固定，验证段只在结束后比较累计成绩.

| 候选 | 验证 RMSE（百分点/月） | MAE（百分点/月） | $R^2_{OS}$（%） |
|---|---:|---:|---:|
| $p=1,\lambda=0$ | 5.046 | 4.152 | -0.653 |
| $p=1,\lambda=0.1$ | 5.044 | 4.151 | -0.591 |
| $p=1,\lambda=1$ | 5.037 | 4.145 | -0.317 |
| $p=1,\lambda=10$ | 5.031 | 4.139 | -0.056 |
| $p=3,\lambda=0$ | 5.061 | 4.106 | -1.265 |
| $p=3,\lambda=0.1$ | 5.057 | 4.108 | -1.099 |
| $p=3,\lambda=1$ | 5.042 | 4.119 | -0.478 |
| $p=3,\lambda=10$ | 5.031 | 4.134 | -0.064 |
| $p=12,\lambda=0$ | 5.135 | 4.166 | -4.256 |
| $p=12,\lambda=0.1$ | 5.121 | 4.161 | -3.662 |
| $p=12,\lambda=1$ | 5.069 | 4.147 | -1.57 |
| $p=12,\lambda=10$ | 5.035 | 4.138 | -0.216 |
| 零预测 | 5.214 | 4.32 | -7.466 |
| 扩展历史均值 | 5.03 | 4.138 | 0.0 |

$R^2_{OS}=1-SSE_{model}/SSE_{expanding\ mean}$，基线在相同原点使用可得历史均值. 12个回归中 $p=1,\lambda=10$ 的验证SSE最低；加入两条基线后，扩展历史均值最低. 表中R²以百分数展示.

| 2020—2025 历史评价 | RMSE（百分点/月） | 相对均值基线 $R^2_{OS}$（%） |
|---|---:|---:|
| 扩展历史均值：验证总冠军 | 6.824 | 0.0 |
| $p=1,\lambda=10$：回归组冠军 | 6.824 | -0.012 |
| 零预测 | 7.124 | -8.977 |

2020—2025已在研究中查看，属于固定算法的历史评价段. 两模型RMSE相差约 $4\times10^{-4}$ 个百分点/月，未作显著性检验.[^compute]

<div data-experiment-slot="EXP-QT-D-FORECAST-01"></div>

<a id="qt20-units"></a>
## 特征尺度与响应单位

取 $c>0$，设未经标准化的一列特征从 $x$ 改成 $x'=c x$，响应不变. 为了保持同一预测函数，对应系数必须是 $\beta'=\beta/c$. 若还施加相同的 $\lambda(\beta')^2$，它在原系数坐标下变成 $\lambda\beta^2/c^2$：预测函数虽然能对应，惩罚强度却改变了. 若要维持原惩罚，应改为 $\lambda'=c^2\lambda$. [^ridge]

只把响应 $y$ 乘以 $c$，同时允许 $a,\beta$ 乘以 $c$，整个 ridge 目标恰好乘以 $c^2$；$\lambda$ 不变时，解与预测随之乘 $c$，换回原单位仍相同. 本实验若把原始滞后收益 $X$ 与 $y$ 同时由小数改成百分数，重新按训练窗标准化后 $Z$ 不变，经济预测也不因此改变.

### 选读：复杂模型的机制分解

Kelly、Malamud、Zhou 的 2024 年研究在 15 个原始预测量上构造随机 Fourier 特征，改变特征数、训练窗和收缩参数，报告其特定设计下的预测与策略结果. Nagel 的 2025 年工作论文则把相关 ridgeless 预测重写为过去收益的线性权重，研究短训练窗和持久预测量的作用，并用人工反转收益检验机制.[^kmz][^nagel]

在 $k^TK^{-1}y$ 表示中，$K$ 需可逆，权重通常不受非负及和为1的约束.

<a id="qt20-exercises"></a>
## 练习与解析

解释题. 某回归在 12 个回归候选里最好，却比预先保留的均值基线差. 应选择谁？换用 MAE 会自动得到同一选择吗？

**解析.** 按预定SSE应选均值基线. MAE对应不同损失，排序可变；若据此重选模型，构成新的选择规则.

迁移题一：原始特征换单位. 两行教学数据为 $x=(-1,1)^T$、$y=(-1,1)^T$，无须额外标准化，含不惩罚截距，$\lambda=1$. 先求 ridge；再把 $x$ 乘 10、保持同一惩罚，计算在原来 $x=1$ 处的预测.

解析. 两列都居中，截距为零. 原目标为 $(1-\beta)^2+\beta^2$，故 $\beta=1/2$、预测为 $1/2$. 新目标为 $(1-10b)^2+b^2$，故 $b=10/101$，在 $x'=10$ 的预测是 $100/101$，不是 $1/2$. 改用 $\lambda'=100$ 后，$b=0.05$，才恢复原预测.

迁移题二：响应换单位. 保持原 $x$，只把 $y$ 乘 100，$\lambda=1$. 解和换回原单位的预测是什么？

解析. 目标为 $(100-b)^2+b^2$，解 $b=50$；预测 50 除以 100，仍是 $1/2$. 一般情形的结论来自目标函数整体乘 $c^2$.

[^french]: Kenneth French，30 Industry Portfolios：[来源构造说明](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html). 本篇数值取自随包冻结 CSV.
[^french-version]: French [Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)，FIZ/CIZ 生产方式说明；本包原文件首行标明 202607 CRSP database.
[^accuracy]: Hyndman、Athanasopoulos，FPP3，[§5.8 全节](https://otexts.com/fpp3/accuracy.html)，误差度量、训练与新数据评价.
[^ridge]: James 等，ISLP，2023 首印，[作者全文下载入口](https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html)，§6.2.1 pp.240–244、§6.2.3 pp.252–253. 本节使用 RSS/n 目标，单位变换见正文推导.
[^compute]: [完整实验输入](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/shared_inputs.json)；[实际计算结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/data/results.json)，forecast 组；[复算程序](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/compute/reproduce.py). 均值、预测与误差均对应这份冻结历史教学实验.
[^kmz]: Kelly、Malamud、Zhou，*The Virtue of Complexity in Return Prediction*，Journal of Finance 79(1), 2024，[发表版全文](https://economics.yale.edu/sites/default/files/2024-01/The%20Journal%20of%20Finance%20-%202023%20-%20KELLY%20-%20The%20Virtue%20of%20Complexity%20in%20Return%20Prediction%20%281%29.pdf)，§V.A–C pp.487–493，特别是脚注33、39–40.
[^nagel]: Nagel，*Seemingly Virtuous Complexity in Return Prediction*，NBER 34104，2025-08 版，[全文](https://www.nber.org/system/files/working_papers/w34104/w34104.pdf)，§II.A–D 与 §II.G.1.
