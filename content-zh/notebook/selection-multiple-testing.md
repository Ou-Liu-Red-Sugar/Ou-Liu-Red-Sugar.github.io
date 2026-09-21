{
  "title": "选择效应与多重检验",
  "description": "保留全部尝试，证明 Bonferroni，区分 FWER/FDR 并按严格规则执行 BH.",
  "layout": "entry",
  "notebookid": "zh-qt22",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt22"
}

从多个变量、窗口或参数中挑选开发期表现最好的候选，会改变所选统计量的分布，即使每次拟合都遵守信息时点.以下在真值已知的模拟中保留全部候选，并区分 FWER、Bonferroni 与 FDR/BH 的控制对象.

<a id="qt22-object"></a>
## 候选集合与选择

BusEq实验按验证SSE比较12个回归与两条基线，选择扩展历史均值. 候选记录包含已试过的变量、窗口与参数，选择效应取决于实际尝试集合.[^pilot]

设 $M$ 个候选各有 $n=120$ 个独立正态月收益，已知 $\sigma=0.05$，全部均值为0. 预设单侧检验 $H_0:\mu=0$、$H_1:\mu>0$，则

$$
Z_j=\sqrt n\,\bar R_j/\sigma\sim N(0,1),\qquad
p_j=1-\Phi(Z_j).
$$

直接生成统计量 $Z$ 的精确分布，再换算样本均值. PCG64(2201)先生成开发、再生成独立保留样本的 $5000\times500$ 正态矩阵. $M=1,10,100,500$ 共享500列前缀，不同规模的模拟结果因而相关.[^simulation]

每轮只按开发 $Z$ 最大值选出编号 $J$，冻结编号后才看独立保留样本的同一列. $p$ 值问的是“在原假设及所设抽样模型下，至少这样极端的统计量有多常见”，不是“看完数据后原假设为真的概率”. 单侧方向也不能看完符号再改. [^testing]

<a id="qt22-winner"></a>
## 全零模型

| 候选数 $M$ | 开发冠军平均样本收益 | 同编号独立保留样本平均收益 |
|---:|---:|---:|
| 1 | −$2.16\times10^{-4}$ | −0.002 |
| 10 | 0.711 | −0.007 |
| 100 | 1.146 | 0.01 |
| 500 | 1.385 | −0.008 |

表中单位为百分点/月，按5,000轮平均. 取最大值提高了开发统计量，独立保留样本仍围绕零波动.[^simulation]

还可以直接解释为什么保留样本不继承这种提升. $J$ 完全由开发数据决定，保留向量与全部开发数据独立，且每列均值为零. 因此给定开发数据后，

$$
\mathbb{E}[\bar R^{hold}_J\mid\text{开发数据}]
=\sum_{j=1}^M1_{\{J=j\}}\mathbb{E}[\bar R^{hold}_j]=0.
$$

再取期望仍是零. 若看过保留结果再换编号，这个证明的独立性步骤便不再适用.

<a id="qt22-fwer"></a>
## 族错误率

令 $V$ 表示错误拒绝的真实原假设个数. 族错误率是 $FWER=P(V\ge1)$. 若全部 $M$ 个原假设为真，每个独立检验以 $\alpha$ 的概率误报，那么

$$
FWER=1-P(\text{一个也不错})=1-(1-\alpha)^M.
$$

乘法用到独立性及每项精确误报率 $\alpha$. 若仅满足有效性 $P(p_j\le u)\le u$，对应结论为上界.[^fwer]

用 $\alpha=0.05$ 比较理论和本次模拟：

| $M$ | 未校正 FWER 精确值 | 未校正模拟 | Bonferroni 模拟 | Bonferroni 精确值（本独立全零模型） |
|---:|---:|---:|---:|---:|
| 1 | 0.05 | 0.047 | 0.047 | 0.05 |
| 10 | 0.401 | 0.408 | 0.057 | 0.049 |
| 100 | 0.994 | 0.993 | 0.05 | 0.049 |
| 500 | 约 1 | 1 | 0.046 | 0.049 |

Bonferroni 把每一项门槛改成 $\alpha/M$. 其一般控制可以在这里完整证明：设 $I_0$ 是真实原假设集合，只需各项 $p$ 值有效，便有

$$
\begin{aligned}
P(V\ge1)
&=P\left(\bigcup_{j\in I_0}\{p_j\le\alpha/M\}\right)\\
&\le\sum_{j\in I_0}P(p_j\le\alpha/M)\\
&\le |I_0|\alpha/M\le\alpha.
\end{aligned}
$$

并集界允许任意依赖；其前提为单项 $p$ 值有效，且 $M$ 覆盖预定检验族.[^bonf]

$M=10$ 时模拟频率0.057、MCSE约0.003，理论概率约0.049. $M=500$ 的5,000轮未校正结果全有误报，使代入式MCSE为0；边界频率需用二项区间描述有限样本不确定性.[^simulation]

<a id="qt22-fdr"></a>
## 误发现率

记 $R$ 为拒绝总数，$V$ 为其中的误报数. 定义

$$
FDP=\frac{V}{\max(R,1)},\qquad FDR=\mathbb{E}[FDP].
$$

无拒绝时FDP为0；FDR对每轮误报比例取期望. 全零假设下 $V=R$，FDP为 $\mathbf1_{\{R>0\}}$，故FDR等于FWER. 真假混合时二者可分离.[^fdr]

本篇的 BH 规则采用 ISLP Algorithm 13.2 的严格比较. 对 $M$ 个 $p$ 值排序，取

$$
k=\max\{j:p_{(j)}<qj/M\};
$$

集合为空取 $k=0$，否则拒绝前 $k$ 个排序位置. Step-up规则寻找最大的合格序号. 本节采用全部 $p$ 值独立、真零假设下有效的FDR控制版本.[^bh]

例如构造五个 $p$ 值 $0.006,0.012,0.601,0.756,0.918$，$q=0.05$. BH 的阈值依次为 $0.01,0.02,0.03,0.04,0.05$，最大合格序号为 2；Bonferroni 的统一阈值为 0.01，只拒绝第一项.

真假混合实验仍有 $M=100$，前 10 个均值为 0.01，其余 90 个为零，$\sigma=0.05,n=120$ 不变，重置 PCG64(2202). 5000 次运行得到：

| 混合实验、BH $q=0.05$ | 输出 |
|---|---:|
| 平均 FDP，即 FDR 模拟估计 | 0.045 |
| 该估计的 MCSE | 0.002 |
| 至少一次误报的频率 | 0.149 |
| 每轮平均拒绝数 | 2.444 |
| 每轮平均真发现数 | 2.269 |

模型指定了每项真假，故可直接统计FDP. 模拟FDR约4.527%，至少一次误报频率14.88%.[^simulation]

### 阈值等号

给 $M=2,q=0.05,p=(0.025,0.06)$. 严格 `<` 下两项都不合格，拒绝数为零；若改成 `≤`，第一项恰在门槛上，拒绝数为 1. 连续模拟中精确等号的概率为零，但离散输入或四舍五入后的输入可能有等号；显示时四舍五入也不应改变底层比较. 实验保留这组人工边界例，正文和交互使用同一严格规则. [^simulation]

<div data-experiment-slot="EXP-QT-D-SELECT-01"></div>

<a id="qt22-exercises"></a>
## 练习与解析

解释题. 同一轮 BH 发现很多候选，后来知道其中 20% 是误报. 能否据此断言 $q=5\%$ 的 FDR 控制失效？

**解析.** FDR约束重复抽样中FDP的期望，单轮20%不直接反驳5%的期望上界. 应按采用的独立性、p值有效性与选择规则重复评价.

迁移题一. $M=10$ 个独立全零检验，每项门槛 0.05，至少一次误报的概率是多少？Bonferroni 的证明哪一步允许任意依赖？

解析. 未校正值为 $1-0.95^{10}\approx0.401$. Bonferroni 证明用 $P(\cup A_j)\le\sum P(A_j)$，不使用乘法分解，所以无需独立；只要每个真实原假设的误报概率都不超过 $0.05/10$，总 FWER 就不超过 0.05.

迁移题二. 开发期尝试 100 项，挑出编号 7. 先看它的保留成绩，不喜欢，再改成编号 12. 为什么不能继续引用本篇“保留均值为零”的条件证明？

**解析.** 新编号依赖保留结果，给定开发数据后不再固定，条件期望无法按原证明拆成固定列的零均值. 这次选择进入开发过程，另用未参与选择的数据确认.

迁移题三. 对上面的人工等号例分别执行 `<` 和 `≤`，再说明只保存三位小数的 $p$ 值有何风险.

解析. 拒绝数分别为 0 和 1. 若原值略大于 0.025 却显示成 0.025，用显示值重算会改变决定；应保留原始精度、比较规则和全部候选数量，显示精度与运算精度分开.

[^pilot]: [共同输入](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/shared_inputs.json)与[实际结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/data/results.json)，forecast 组；BusEq 版本与数据来源见 <a class="inline-ref" href="/zh/notebook/prediction-regularization-complexity/" data-reference="zh-qt20">预测目标与正则化<span aria-hidden="true"> ↗</span></a>.
[^simulation]: [复算程序](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/compute/reproduce.py)、[完整结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/data/results.json) selection 组及[重复试验数组](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/data/selection-arrays.npz). 模拟按严格 `<` 比较完整精度的 p 值；人工等号例单独展示两种比较规则的差别.
[^testing]: James 等，ISLP 2023，[作者全文入口](https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html)，§13.1.1–13.1.2、§13.2，印刷 pp.558–564.
[^fwer]: 同上，§13.3.1，pp.565–566，FWER 定义及独立全零模型.
[^bonf]: 同上，§13.3.2 的 Bonferroni 子单元，pp.567–568.
[^fdr]: 同上，§13.4.1，pp.573–575，包括 $R=0$ 时比例取零的约定.
[^bh]: 同上，§13.4.2，pp.575–577，Algorithm 13.2 的严格比较.
