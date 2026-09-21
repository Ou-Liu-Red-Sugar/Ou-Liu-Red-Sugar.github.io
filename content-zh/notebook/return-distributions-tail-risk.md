{
  "title": "收益分布、尾部与风险度量",
  "description": "从损失的广义逆分位数与尾部概率质量出发，复算202607重建历史中BusEq的月度VaR/ES，并区分经验统计量与未来风险.",
  "layout": "entry",
  "notebookid": "zh-qt04",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt04"
}

令月度简单收益为 $R$，损失率为 $L=-R$. 均值、标准差、VaR 和 ES 分别描述中心、离散程度、分位阈值与固定尾部质量的平均；这些量必须相对于明确的模型分布或经验分布计算.

<a id="qt04-objects"></a>
## 收益与损失分布

令 $R$ 为一个月的简单收益率，内部按小数表示，例如 $-0.1$ 表示亏损 10%. 定义损失率 $L=-R$，于是损失越大越坏；赚钱时 $L$ 可以为负. 以下概率与期望均相对于明确选定的分布.

模型分布F定义总体风险函数值，历史等权经验分布 $\widehat F_n$ 定义样本风险函数值. 下一期损失另由未来分布决定；将经验分布用于预测，需要说明过程及估计假设.

$\mathbb{E}|R|<\infty$ 保证有限期望，二阶矩有限则有有限方差 $\operatorname{Var}(R)=\mathbb{E}[(R-\mathbb{E}R)^2]$. 固定样本使用

$$
\bar r=\frac1n\sum_{t=1}^nr_t,\qquad s^2=\frac1{n-1}\sum_{t=1}^n(r_t-\bar r)^2.
$$

 经验分布方差用分母n，故 $s^2=\frac n{n-1}\widehat\sigma_{\rm emp}^2$. 无偏性另依赖抽样假设.

恒定损失2.6与下文五点分布有相同均值，但后者可损失10. 尾部量保留均值未区分的信息.

<a id="qt04-quantile-es"></a>
## 分位数与尾部均值

固定 $0<p<1$，采用广义逆

$$
q_p(L)=\inf\{x:F_L(x)\ge p\},\qquad \operatorname{VaR}_p(L)=q_p(L).
$$

 分布有原子时，边界约定影响分位点. VaR是分位阈值，可取负值，未描述阈值以上损失的大小.

在 $L\in L^1$ 下，定义**预期短缺（Expected Shortfall，ES）**
\[
\mathrm{ES}_p(L)=\frac1{1-p}\int_p^1 q_u(L)\,du.
\]
这相当于取最坏的 $1-p$ 概率质量，按质量平均其损失. 定义对离散、连续和混合分布都适用. Acerbi–Tasche 原文用损益 $X$ 和下尾质量 $\alpha$；这里用 $L=-X$、$p=1-\alpha$，把记号统一为损失上尾. [^es]

记 $v=q_p(L)$. 因为
$P(L>v)\le1-p\le P(L\ge v)$，先取完所有严格超过 $v$ 的结果，再从 $L=v$ 的质量中补足
$b=(1-p)-P(L>v)$. 于是
\[
\mathrm{ES}_p(L)
=\frac{\mathbb{E}[L\mathbf1_{\{L>v\}}]+v\,b}{1-p},
\qquad 0\le b\le P(L=v).
\]
在分位数图上，$L=v$ 对应一段高度为 $v$ 的水平阶梯；积分只取这段阶梯落在 $(p,1)$ 内的长度. 边界原子按所需概率质量截取，损失值保持不变.

现在手算一个教学分布. 五个等可能结果的损失为 $0,1,1,1,10$，单位暂不指定为货币. 取 $p=.7$，则 $F_L(0)=.2$、$F_L(1)=.8$，所以 VaR 为 1. 最坏 30% 的质量包括损失 10 的全部 20%，再从损失 1 的 60% 原子里取 10%：
\[
\mathrm{ES}_{.7}=\frac{.2\times10+.1\times1}{.3}=7.
\]
这里取的是损失 1 的原子质量的 $1/6$. 反过来，把所有 $L\ge1$ 的结果平均，会得到
$\mathbb{E}[L\mid L\ge1]=(.6\times1+.2\times10)/.8=3.25$.
该条件平均覆盖80%质量，ES则固定最坏30%.

<a id="qt04-sample"></a>
## 432个月经验样本

本例采用 Kenneth French 30 Industry Portfolios 的 **BusEq、value-weighted monthly** 数据，取 1990-01 至 2025-12，共 432 个连续月份. 原文件声明使用 **202607 CRSP database**；这是数据库版本，不是这 432 个月最初各自的公布时间. 样本对应原 CSV 第 775–1206 行，原单位为百分数，读入后除以 100，损失取相反数；两个缺失码 `-99.99`、`-999` 在目标窗口均未出现，未插值、未删除极端月. [^data]

202607快照按French自2025年1月采用的CIZ流程重建全部历史. 本例使用单一重建版本，未还原每月当时可得的数据.[^french]

默认样本结果如下，全部为月度口径，不年化.

| 量 | 结果 | 对象 |
|---|---:|---|
| 算术平均收益 | 约 1.389% | 固定 432 月的平均 |
| 样本标准差 $s$（分母 $n-1$） | 约 7.288% | 收益的样本离散程度 |
| 经验分布标准差（分母 $n$） | 约 7.28% | 等权经验分布的标准差 |
| 损失 VaR95 | 10.68% | 经验损失分布的 95% 分位点 |
| 损失 ES95 | 约 16.058% | 最坏 5% 经验质量的平均损失 |

把损失降序排列为
$l_{[1]}\ge\cdots\ge l_{[n]}$，令 $m=n(1-p)=k+\theta$，其中 $k=\lfloor m\rfloor$、$0\le\theta<1$. 每个排序格子的质量是 $1/n$，因此分位数积分直接化为
\[
\widehat{\mathrm{ES}}_p=
\frac{\sum_{j=1}^k l_{[j]}+\theta\,l_{[k+1]}}{m}.
\]
$\theta=0$ 时不再加入下一项. 这正是经验分位阶梯函数的积分.

这里 $m=432\times.05=21.6$：完整取最坏 21 个月，再取边界月 0.6 份**经验概率质量**. 边界月是 1997-10，损失为 10.68%；最坏 21 项损失按百分数读数相加为 **340.45**. 故
\[
\widehat{\mathrm{ES}}_{.95}
=\frac{340.45+.6\times10.68}{21.6}\%
\approx16.058\%.
\]
分子先用同一百分数刻度求和，再除以 21.6. 若把所有损失至少为 10.68% 的 22 个月直接平均，则约为 15.961%；多取的那 0.4 份较轻损失拉低了均值.

<div data-experiment-slot="EXP-RETURNS-01"></div>

经验上尾保留原月份和原损失；严格高于 VaR 的观测全部计入，边界观测按所需概率质量分数计入.

<a id="qt04-comparisons"></a>
## 样本窗口与尾部统计量

| 起点（终点均为 2025-12） | 月数 | 月均收益 | 样本标准差 | 损失 VaR95 | 损失 ES95 |
|---|---:|---:|---:|---:|---:|
| 1990-01 | 432 | 约 1.389% | 约 7.288% | 10.68% | 约 16.058% |
| 2000-01 | 312 | 约 1.036% | 约 7.524% | 11.62% | 约 17.382% |
| 2010-01 | 192 | 约 1.741% | 约 5.759% | 8.4% | 约 10.055% |
| 2020-01 | 72 | 约 2.273% | 约 6.799% | 9.82% | 约 11.153% |

起点不同改变样本长度、历史状态及极端月份，表中较近窗口的经验ES较低. 依据结果挑窗口还会引入选择偏差，后续验证需计入选择过程.

删除最差月2001-02的扰动得到431月，均值约1.465%、VaR95为10.33%、ES95约15.094%，用于检验单个极端观测的影响；后续bootstrap沿主样本.

本节保持月度口径还有一个原因：一年简单收益是 $\prod_{t=1}^{12}(1+r_t)-1$，不是把单月损失阈值乘 12. 即使研究的是可相加的逐月损益，其总方差还包含跨月协方差. 时间尺度改变时，需要新的联合分布或明确的聚合假设.

$\widehat F_n$ 随样本变化，$\widehat{\mathrm{ES}}_p$ 也会变化. <a class="inline-ref" href="/zh/notebook/estimation-prediction-uncertainty/" data-reference="zh-qt19">估计误差与预测不确定性<span aria-hidden="true"> ↗</span></a>进一步区分这种抽样不确定性和未来结果本身的波动.

<a id="qt04-exercises"></a>
## 练习与解析

**题一：边界质量.** 五点分布 $[0,1,1,1,10]$ 取 $p=.8$，求VaR、ES及边界纳入质量.

**解析.** $q_{.8}=1$，最坏20%恰为损失10的全部质量，边界质量零，ES为10.

**题二：从比率变成金额.** 只作风险刻度换算，假设起始资本为 100,000 美元且损失金额等于资本乘月损失率，不增加杠杆或现金流. 默认样本 VaR95 与 ES95 对应多少美元？其中哪一个是最大可能损失？

**解析.** VaR为10,680美元，ES约16,058.24美元，分别为经验分位点和尾部平均；最大经验损失需另查样本最大值.

**题三：检验一项解释.** 有人说“删除最差月后 ES 降低，所以清洗后的估计更可靠”. 这个结论缺什么？

**解析.** 删除需有独立于结果的数据错误证据或预定处理规则. 仅因损失极端而删除，会改变尾部分布及待估对象.

[^es]: Carlo Acerbi、Dirk Tasche，*On the coherence of Expected Shortfall*，arXiv:cond-mat/0104295v5（2002-05-02）；§2 的损益/下尾约定、Definitions 2.1、2.2、2.6，以及 Proposition 3.2 与证明，PDF pp.3、5–6. [公开全文](https://arxiv.org/pdf/cond-mat/0104295v5). 本节保留广义逆约定，并改写为损失上尾.
[^data]: 数据版本 `QT-C-inputs-20260921-v1`，原 CSV 的 `202607 CRSP database`、首个 value-weighted monthly 区块、`BusEq` 列. [完整 432 行快照](/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv)、[参数合同](/notebook/labs/qt-c/data/experiment-config.json)、[完整计算结果](/notebook/labs/qt-c/data/results.json). 表格由同一组参数与输入生成；原始百分数保留两位小数，额外计算位数不增加原观测精度.
[^french]: Kenneth R. French，[Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html) 的 Current Research Returns 与历史重建说明；[30 Industry Portfolios](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html) 的 Monthly Returns、Construction. 访问于 2026-09-21；公开链接会更新，本节数值绑定上述冻结快照.
