{
  "title": "现代金融研究复核：对象、方法与证据边界",
  "description": "在 KMZ 收益预测或 HTZ 粗糙波动对冲分支中，重建研究对象、预处理、评价指标与报告证据，并保留原件中的未决冲突.",
  "layout": "entry",
  "notebookid": "zh-qt25",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt25"
}

KMZ研究随机特征数、训练窗与收缩对收益预测的影响；HTZ研究粗糙波动模型中的历史信息与对冲网络. 两支分别重建信息输入、评价公式与原表比较.

<div data-reading-branch-controls>
<button data-select-reading-branch="A">A：收益预测复杂度</button>
<button data-select-reading-branch="B">B：粗糙波动下的对冲</button>
<button data-select-reading-branch="all">显示两支</button>
</div>

<a id="qt25-common"></a>
## 研究主张与证据

近似定理描述函数族能力，训练结果还依赖优化算法，样本表现取决于数据与评价规则. 涉及交易时再加入成本、资金和成交条件.

以下训练结果均引自作者，另行复算指标定义与表内比值.

<section data-reading-branch="A">

<a id="qt25-a-object"></a>
## 收益预测设计

KMZ的预测目标为CRSP市值加权市场组合月度超额收益，原始输入15项，含一阶市场收益滞后.[^kmz]

论文把原始信息向量 $G_t\in\mathbb R^{15}$ 转成随机 Fourier 特征. 对独立抽取的 $\omega_i\sim N(0,I)$，构造一对

$$
\sin(\gamma\omega_i^TG_t),\qquad
\cos(\gamma\omega_i^TG_t).
$$

实证基准取 $\gamma=2$. 每对特征来自同一个随机投影；增加特征数可以在保留原始信息的同时增大函数表示空间. 论文以 $c=P/T$ 表示复杂度，其中 $P$ 是特征数，$T$ 是训练月数，研究 $T=12,60,120$ 和最高 $P=12000$. 这里的 $P$ 不是概率测度.

固定 $P=120$，训练窗12个月时 $c=10$，120个月时 $c=1$，分别改变参数与样本量的比例.

<a id="qt25-a-preprocessing"></a>
## 预处理尺度

论文使用三个不同的尺度步骤. 第一，收益按过去12个月的未中心化二阶矩尺度标准化；脚注34说明这里用二阶矩而非先减样本均值的短窗波动，因为短窗均值很不稳定. 第二，15个原始预测量按扩展历史窗口的标准差标准化，初始至少需要36个月. 第三，在每次回归拟合前，训练 RFF 和当前待预测 RFF 又共同按这次训练样本中的标准差缩放，这是脚注39的步骤. [^kmz-pre]

三种尺度分别对应收益、原始预测量与RFF. 原文脚注35规定回归不含截距.

月份t的通胀官方统计通常在t+1公布，作者按数据库日期约定将产生该统计的价格信息归入t.[^kmz-pre]

<a id="qt25-a-design"></a>
## 滚动估计与随机特征

对固定的随机特征集合、特征数 $P$、收缩参数 $z$ 和训练窗 $T$，每个原点只用此前 $T$ 对训练观测拟合，再用当期特征预测下一月. 论文用 $\log_{10}z=-3,\ldots,3$ 等设置比较收缩程度. 较小的 $P$ 取自同一组已生成特征的前缀，避免把“特征数量变化”和“换了一套完全不同的特征”混在一起.

预测量为 $\widehat\beta_t^TS_t$，择时收益为 $\widehat\beta_t^TS_tR_{t+1}$. 作者重复生成随机特征1,000次并平均表现，刻画同一市场历史下随机特征的变异.[^kmz-design]

Figures7–10报告插值附近的不稳定、高复杂度区间的恢复及相应择时结果，均对应上述数据、窗口和收缩设计.

Nagel将ridgeless预测重写为过去收益的线性权重，并用人工反转收益区分机制. $k^TK^{-1}y$ 的权重一般不要求非负或和为1.[^nagel]

<a id="qt25-a-metric"></a>
## 样本外评价公式

论文脚注40将实证 $R^2$ 定义为一减去“样本外预测误差的方差 / 样本外实际收益的方差”. 采用相同中心化方差分母时，可以写成

$$
R^2_{\mathrm{var}}=1-\frac{\sum(e_t-\bar e)^2}{\sum(y_t-\bar y)^2},
\qquad e_t=y_t-\widehat y_t.
$$

它与相对于逐原点历史均值基线的 SSE 比值

$$
R^2_{\mathrm{base}}=1-\frac{\sum(y_t-\widehat y_t)^2}
{\sum(y_t-\widehat y_t^{\mathrm{base}})^2}
$$

取三点例：初始历史0，后续实际值1、2、3，预测0、1、2，逐原点历史均值基线0、1/2、1.

预测误差恒为1，所以 MSE 为1，但中心化误差方差为零，$R^2_{\mathrm{var}}=1$. 相对于历史均值基线，误差平方和为 $1+(3/2)^2+2^2=29/4$，模型误差平方和为3，因此

$$
R^2_{\mathrm{base}}=1-\frac3{29/4}=\frac{17}{29}.
$$

误差中心化消去了常数偏差，故方差指标为1而MSE仍为1. 评价绝对预测水平需同时保留偏差或MSE.

<div data-experiment-slot="VIEW-QT25-A-RESEARCH"></div>

<a id="qt25-a-exercise"></a>
## 练习与解析

有人准备“复现”论文：使用 BusEq、带截距 ridge、随机打乱月份做交叉验证，并用 expanding-mean SSE $R^2$ 得到一个数. 他能否将结果写成“与 KMZ 的 Figure7 不一致，因此推翻原论文”？

**解析.** 目标、截距、尺度、特征、时序切分和评价公式均已改变，结果无法直接反驳原比较. 复算Figure7需固定这些输入及重复规则.

</section>

<section data-reading-branch="B">

<a id="qt25-b-object"></a>
## 粗糙波动对冲

采用HTZ的arXiv:2102.01962v1，重点为rough Bergomi模型、两种对冲工具、网络与Tables2–4.[^htz]

作者在离散交易时点 $t_0<\cdots<t_n$ 观察信息 $I_k$，根据当时及过去的信息选对冲持仓 $\delta_k$. 一般框架允许成本，但本文后续主要数值比较使用定价测度 $Q$ 下、无成本的平方对冲误差：

$$
\mathbb{E}_Q\left[\left(-Z+p_0+
\sum_{k=0}^{n-1}\delta_k\cdot(S_{k+1}-S_k)\right)^2\right].
$$

$Z$ 是到期负债，$p_0$ 是该设定中的初始价格；评价量是 $Q$ 下无成本平方对冲误差.向量 $S$ 含股票与 forward-variance 工具两种对冲对象.

<a id="qt25-b-model"></a>
## 历史核与远期方差

论文使用 rough Bergomi 模型. 以相互独立的 Brownian 运动 $W,B$ 表示驱动，在所用无漂移价格模型中，

$$
dS_t=S_t\sqrt{V_t}\big(\rho\,dW_t+\sqrt{1-\rho^2}\,dB_t\big),
$$

$$
V_t=V_0\exp\left(
\nu\sqrt{2H}\int_0^t(t-s)^{H-1/2}dW_s
-\frac12\nu^2t^{2H}\right).
$$

$H>0$ 时核平方积分为 $t^{2H}/(2H)$，故固定t的随机积分存在. 不同未来期限对过去使用不同核权重，当前方差通常不足以恢复整条条件方差曲线.

为认清第二种工具，固定未来期限 $u>t$，定义已知历史部分

$$
\Theta_t^u=\nu\sqrt{2H}\int_0^t(u-s)^{H-1/2}dW_s.
$$

把 $V_u$ 的高斯积分在 $t$ 处分开. 未来部分独立于 $\mathcal F_t$，方差为 $\nu^2(u-t)^{2H}$；利用正态指数均值，得到点时 forward variance

$$
\xi_t(u)=\mathbb{E}_Q[V_u\mid\mathcal F_t]
=V_0\exp\left(\Theta_t^u+
\frac{\nu^2}{2}\big((u-t)^{2H}-u^{2H}\big)\right).
$$

不同u对应不同历史加权，该点时方差用于核对Eq.(3.8).[^htz-model]

设call的 $S_0=K=100,T=30/365$，第二对冲工具期限45/365. 取 $V_0=0.235^2,\nu=1.9,\rho=-0.7$ 并改变H；作者报告H=0.1时单份call价格约2.39.

<a id="qt25-b-architecture"></a>
## 网络隐状态

原结构传递当前信息与此前持仓；fRNN另设隐状态向后传递，记为

$$
(\delta_k,h_k)=F_k(I_k,h_{k-1}).
$$

$h_k$ 为网络隐状态，$F_k$ 可随时点变化. 隐状态提供历史信息通道，是否保留预测所需信息由模型与训练结果决定.

<a id="qt25-b-evidence"></a>
## 原表比较

固定 $H=0.1$、75 epochs，Table 3 给出的舍入平方损失为：模型对冲 1.45，原网络 1.16，fRNN 0.83.由表中数字直接计算，相对原网络的损失下降为

$$
1-\frac{0.83}{1.16}\approx28.448\%,
$$

相对模型对冲损失下降约42.759%. H=0.1时Table2的0.834与Table3的0.83相容；H=0.4时0.244与0.22存在固定v1未解释的差异.[^htz-tables]

作者还比较了不同再对冲频率：

| 每日再对冲次数 | 0.5 | 1 | 2 | 4 |
|---|---:|---:|---:|---:|
| Table4 平方损失 | 1.11 | 0.65 | 0.46 | 0.52 |

最后一步增加 $0.52/0.46-1\approx13.043\%$，因此该无成本实验的频率比较并非单调改善.Table 4 不含交易成本；75 与 200 epochs 的比较还同时改变了数据集规模等设置，无法识别单独增加 epoch 的因果效应.

Rough Bergomi价格过程连续；论文所称jump-like描述离散观察下的快速变化.

<a id="qt25-b-audit"></a>
## 对象与量纲

原文 Eq.(3.8) 左侧写成 $\mathbb{E}_Q[\int_0^uV_sds\mid\mathcal F_t]$，右侧却采用点时 forward variance $\mathbb{E}_Q[V_u\mid\mathcal F_t]$ 的表达式.取 $t=0$ 且初始 forward-variance 曲线平坦，

$$
\mathbb{E}_Q\int_0^uV_sds
=0.235^2\frac{45}{365}
\approx6.809\times10^{-3},
\qquad
V_0\approx5.523\times10^{-2}.
$$

前者是积分方差，后者是点时方差，对象和量纲不同，因此固定 v1 的 Eq.(3.8) 存在对象不一致. [^htz-eq]

<div data-experiment-slot="VIEW-QT25-B-RESEARCH"></div>

<a id="qt25-b-exercise"></a>
## 练习与解析

考虑三个结论：“隐状态必定学到了所有充分信息”；“有成本时四次每日对冲一定最差”；“在本固定版的一项无成本模拟中，H=.1 的fRNN报告损失低于原网络”. 哪些能由刚才读的单元直接支持？如果准备进一步检验费用，至少需要补什么？

**解析.** 第三项由具名表格直接支持. 前两项分别超出有限训练和无成本实验范围. 检验费用时，在相同工具、路径与信息时钟下加入成交成本、融资和终点支付，允许策略响应成本，再比较重复训练与测试误差.

</section>

[^kmz]: Bryan Kelly、Semyon Malamud、Kangying Zhou，*The Virtue of Complexity in Return Prediction*，*Journal of Finance* 79(1), 459–503, 2024，§V.A–C，印刷 pp.487–493／PDF29–35；[发表版全文](https://economics.yale.edu/sites/default/files/2024-01/The%20Journal%20of%20Finance%20-%202023%20-%20KELLY%20-%20The%20Virtue%20of%20Complexity%20in%20Return%20Prediction%20%281%29.pdf).
[^kmz-pre]: 同文 §V.A，脚注33–35；§V.C 脚注39. 三种标准化、时间约定与不含截距分别据这些位置识别.
[^kmz-design]: 同文 §V.B–C，式(20)、步骤(i)–(iv)、脚注38–41及 Figures7–10.
[^nagel]: Stefan Nagel，*Seemingly Virtuous Complexity in Return Prediction*，NBER Working Paper 34104，August 2025，§II.A–D、§II.G.1 为可选对照；[作者工作论文入口](https://www.nber.org/papers/w34104).
[^htz]: Blanka Horvath、Josef Teichmann、Žan Žurič，*Deep Hedging under Rough Volatility*，arXiv:2102.01962v1，提交 2021-02-03、封面 2021-02-04；[固定版全文](https://arxiv.org/pdf/2102.01962v1).
[^htz-model]: 同文 §2、§3.1–3.3，PDF3–9：信息、Q 平方损失、rough Bergomi、辅助过程和两种对冲工具.
[^htz-tables]: 同文 §3.5、§4.1–4.3，Table2/3 位于 PDF14、Table4 位于 PDF18. 这里的减幅使用 Table3 的舍入数字；H=.4 两表差异保留未决.
[^htz-eq]: 同文 Eq.(3.8)，PDF8. 正文以 $t=0$ 的平坦方差曲线核对左右对象.

<script defer src="/notebook/labs/qt-ghi/agent-branches.js"></script>
