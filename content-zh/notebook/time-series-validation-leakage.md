{
  "title": "时间序列验证与信息泄漏",
  "description": "按一个预测原点重建训练、预处理与标签成熟，解释未来缩放不必改善成绩.",
  "layout": "entry",
  "notebookid": "zh-qt21",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt21"
}

每个预测原点都对应一个信息截面：先确定当时已成熟的标签和可用特征，再拟合预处理与模型，目标成熟后才能计算预测误差.以下用 BusEq 冻结历史重放这些时点，并以 GDP 初值/次值区分观察期、发布时间与接收时点.

<a id="qt21-clock"></a>
## 信息截面

仍使用 202607 CRSP 数据库 vintage 下由当前 CIZ 生产链重建的 BusEq 月收益快照：1990-01—2025-12，共 432 月，无目标窗口缺失，百分数除以 100 后运算.该文件是单一当前重建快照，未恢复各历史月的原始 vintage；教学时钟约定月末后可使用该月收益，来源真实发布时间与系统 `received_at` 在该文件中未知. [^data]

预测2010-01时，训练目标为1991-01至2009-12的228行；1990年提供滞后预热. 所有候选使用相同目标行.

| 环节 | 本原点允许使用的对象 |
|---|---|
| 决策原点 | 2009-12 月末后的教学信息截面 |
| 拟合目标 $y_s$ | 1991-01—2009-12 已成熟收益 |
| 拟合特征 $x_s$ | 每个目标月之前的 $p$ 个滞后；所有训练特征中最晚的收益月是 2009-11 |
| 标准化参数 | 仅由这些训练特征行求出的列均值与列标准差 |
| 新预测输入 $x_t$ | 从 2009-12 起向前取 $p$ 个滞后；这行不参与本次 scaler 拟合 |
| 当前输出 | 对 2010-01 的预测 |
| 何时评价 | 2010-01 目标成熟后，才用真实 $r_t$ 计算误差 |

训练标签截至2009-12，训练滞后特征截至2009-11，2009-12收益仅作为新输入；标准化参数从训练特征行估计.[^calculation]

<a id="qt21-procedure"></a>
## 逐原点训练

给定候选 $(p,\lambda)$，在每个目标月 $t$ 之前依次做：

```text
train = 已成熟的共同目标行 1991-01,...,t-1
X_train[s] = (r[s-1],...,r[s-p]); y_train[s] = r[s]
从 X_train 拟合 mean、sd，不从完整文件拟合
Z_train = (X_train-mean)/sd
拟合不惩罚截距的 RSS/n + lambda*||beta||²
对 x_new=(r[t-1],...,r[t-p]) 使用相同 mean、sd
输出并保留 prediction[t]；目标成熟后才添加 error[t]
```

扩展窗口固定起点、逐次前移终点；固定长度滚动窗口同时移动两端. FPP3的rolling forecasting origin描述评价原点向前移动，其示例允许扩展训练集.[^cv]

2010—2019的120个原点用于比较12个回归与两条基线. 进入2020—2025的72月评价段后，冻结 $p,\lambda$ 或基线身份，系数仍按扩展窗口逐月更新.[^calculation]

预测2010-02时，成熟的2010-01标签使训练增至229行. 训练残差使用参与拟合的目标，预测误差使用该原点尚未参与拟合的目标.[^accuracy]

<a id="qt21-leakage"></a>
## 未来标准化对照

我们故意构造一个错误版本：每个原点都用完整样本的滞后特征列拟合标准化参数. 该池含目标月份 1991-01—2025-12 的特征行，最晚原始特征收益到 2025-11. 对 2009 年末的原点而言，它显然包含未来信息. 拟合标签仍只取过去，以便隔离“标准化范围”这一项变化.

| $p=12$，2010—2019 验证 | 合法训练窗标准化 RMSE | 越界全样本标准化 RMSE | 最大单月预测差 |
|---|---:|---:|---:|
| OLS，$\lambda=0$ | 5.135 | 5.135 | 约 $7.3\times10^{-15}$ |
| Ridge，$\lambda=0.1$ | 5.121 | 5.123 | 0.039 |

三列单位均为百分点/月. OLS差异处于浮点误差量级，ridge全样本标准化的RMSE略高.[^calculation]

为什么 OLS 会不变？设原输入 $x=m+Dz$，$D$ 为对角非奇异尺度矩阵. 仿射预测函数可写成

$$
a+x^Tb=(a+m^Tb)+z^TDb.
$$

在有截距、斜率无约束、同一转换作用于训练和新输入时，这是一一对应的重参数化. OLS 最小化相同的残差集合. 本例每个训练设计都满列秩，因此唯一预测函数被对应起来，样本外预测也相同. 若秩不足，只能先说训练拟合向量与解集合在映射下相同；两种坐标下软件各自挑出的最小范数系数，其样本外外推未必一样.

Ridge 则额外惩罚系数. 改了 $D$ 却仍用同一个坐标中的 $\lambda\|\beta\|^2$，等于改变了对原预测函数的代价，所以预测可以变. <a class="inline-ref" href="/zh/notebook/prediction-regularization-complexity/" data-reference="zh-qt20">预测目标与正则化<span aria-hidden="true"> ↗</span></a> 已推导这一点.

<div data-experiment-slot="EXP-QT-D-CLOCK-01"></div>

信息泄漏由输入依赖的时点判定，RMSE的变化方向不参与该判定.

<a id="qt21-release"></a>
## 发布与接收时点

2020Q2 GDP有两个先后发布的版本：

| 观察期 | 版本 | BEA 发布时点 | 实际 GDP 环比年化率 |
|---|---|---|---:|
| 2020Q2 | Advance | 2020-07-30 08:30 EDT | −32.9% |
| 2020Q2 | Second | 2020-08-27 08:30 EDT | −31.7% |

同一观察期的两次发布相差1.2个百分点. [^bea-a][^bea-b] 信息截止在2020-08-03时，可使用的公开版本为初值.

来源发布后还需接收、解析和计算，系统可用时点取自相应日志. 缺日志的历史实验可设定延迟参数，并按该假设计算.

KMZ脚注33将月度通胀对应的价格信息视为当月信息，同时记载官方统计在次月发布的差异.[^kmz]

<a id="qt21-horizon"></a>
## 多期标签成熟

假设在月份 $s$ 结束后预测接下来三个月的复合收益：

$$
Y_s=(1+r_{s+1})(1+r_{s+2})(1+r_{s+3})-1.
$$

在 $t$ 月末纳入训练的条件为 $s+3\le t$，且相关原始数据已接收.

| 当前信息截面：2020-03 月末 | 标签覆盖月份 | 是否成熟 |
|---|---|---|
| 原点 2019-12 | 2020-01—2020-03 | 是，在本例月末可知假设下 |
| 原点 2020-01 | 2020-02—2020-04 | 否 |
| 原点 2020-02 | 2020-03—2020-05 | 否 |
| 原点 2020-03 | 2020-04—2020-06 | 否，这是新的预测对象 |

相邻三个月标签共享收益月，预测误差因此可能相关；估计标准误需考虑这种依赖. 验证间隔由标签成熟时点与评价目标确定.[^cv]

<a id="qt21-exercises"></a>
## 练习与解析

解释题. 在预测 2010-01 前，用全样本求标准差，随后发现 OLS 的预测完全不变. 是否就证明未来标准化没有问题？

**解析.** OLS在本例的仿射重参数化下不变，计算过程仍引用未来信息. 将标准化改为训练窗口内拟合即可恢复信息约束.

迁移题一. 截止 2020-08-03，分析规则比较 GDP 公布值是否大于 −32. 用哪一版？能否断言自己的系统 7 月 30 日 08:30:01 已得到信号？

解析. 在公开发布口径下，初值 −32.9 不满足规则；8 月 27 日才发布的 −31.7 会满足，但不能提前使用. 系统是否收到及完成计算没有日志便不能判断.

迁移题二. 2020-03 月末训练三个月目标，最新能纳入的原点是哪月？再用明确虚构的月收益 $1\%,-2\%,3\%$ 算一次标签.

**解析.** 最新可用原点为2019-12. 所给收益形成的标签为 $1.01\times0.98\times1.03-1\approx1.949\%$.

时间顺序约束未来信息，但不控制多次尝试后的选择效应；后者见 <a class="inline-ref" href="/zh/notebook/selection-multiple-testing/" data-reference="zh-qt22">选择效应与多重检验<span aria-hidden="true"> ↗</span></a>.

[^data]: French [30 Industry Portfolios](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html) 与 [FIZ/CIZ 来源说明](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html). 具体样本身份和所有 432 行见[随包输入](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/shared_inputs.json)及 CSV.
[^calculation]: [实际计算结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/data/results.json)，forecast 的逐原点拟合与 future_scaling_controls；[复算程序](https://ou-liu-red-sugar.github.io/notebook/labs/qt-de/compute/reproduce.py). 原点、尺度与标签均可逐行重建.
[^accuracy]: FPP3，[§5.8 Evaluating point forecast accuracy 全节](https://otexts.com/fpp3/accuracy.html).
[^cv]: FPP3，[§5.1 Time series cross-validation 全节](https://otexts.com/fpp3/tscv.html).
[^bea-a]: BEA，[2020Q2 Advance Estimate 原发布](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update)，页首发布时间及 GDP 开篇.
[^bea-b]: BEA，[2020Q2 Second Estimate 原发布](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter)，页首、GDP 开篇和 Updates to GDP 表.
[^kmz]: Kelly、Malamud、Zhou，[2024 发表版](https://economics.yale.edu/sites/default/files/2024-01/The%20Journal%20of%20Finance%20-%202023%20-%20KELLY%20-%20The%20Virtue%20of%20Complexity%20in%20Return%20Prediction%20%281%29.pdf)，§V.A，p.487 脚注33.
