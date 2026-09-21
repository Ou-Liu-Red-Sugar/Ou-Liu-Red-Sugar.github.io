{
  "title": "风险溢价、回测与样本外检验",
  "description": "Ian Dew-Becker与Stefano Giglio的Chicago Fed工作论文比较交易期权与动态合成期权的收益，并研究负alpha随时间的变化. 本文按2025年9月4日版本重建数据、持仓、收益分母、信息时点与统计结论，再据此区分历史结构变化、可实施性与样本外验证.[^cf25]",
  "layout": "entry",
  "notebookid": "zh-p25",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p25"
}

Ian Dew-Becker与Stefano Giglio的Chicago Fed工作论文比较交易期权与动态合成期权的收益，并研究负alpha随时间的变化. 本文按2025年9月4日版本重建数据、持仓、收益分母、信息时点与统计结论，再据此区分历史结构变化、可实施性与样本外验证.[^cf25]

<a id="p25-question"></a>
## 风险解释与策略实施

交易所期权是实际有市场报价的权利；合成期权则通过动态改变市场资产持仓来构造非线性收益. 两者的价格、成本、残余风险和可交易条件不必相同. 论文用它们研究边际效用与风险补偿的解释，需要满足关于定价、非线性形状和未被市场解释风险的条件.

§2.3.1的价格解释依赖边际效用与支付形状的关系，动态复制对投资者的可得性另由成本、交易时间和融资约束决定.

投资者可实施性还取决于成交时点、价差、交易频率、借贷、融资、账户权限和无法继续持仓时的处置规则. 这些变量决定统计上的合成收益能否转化为实际可执行策略.

<a id="p25-method"></a>
## 数据构造与信息时点

合成策略采用每日CRSP市值加权市场收益及French无风险收益. 主分析delta含杠杆效应调整，波动率由扩展窗口估计的异质自回归模型预测. 扩展窗口限制估计时可用数据，delta再滞后一天，以减轻滞后价格等微观结构偏差.[^data25]

交易期权数据把1987–1995年的CME期货期权与1996–2022年的OptionMetrics SPX期权连接起来，按第三个星期五买入并持有到下个月对应到期日. 直接比较交易与合成期权时，持有期必须相同；论文的一些合成期权单变量统计则采用21日重叠窗口，以使用更多观测.

相邻21日窗口共享大部分市场路径，误差相关性影响标准误与有效样本量. §4.1直接比较时采用与交易期权相同的换月日.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P25-a.svg" alt="资料和滚动规则时间线：真实期权、合成头寸与重叠统计各有身份. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">先对齐样本与持有期，再读结果</p><p class="pfh-figure-note">作者报告的数据与样本构造</p><ol class="pfh-flow-steps"><li><strong>合成期权</strong><p>CRSP长期日数据；滞后信息与扩张估计</p><p>单变量统计可用21日重叠窗口</p></li><li><strong>交易期权</strong><p>CME 1987–1995；SPX 1996–2022</p><p>第三个星期五至下一同类日期</p></li><li><strong>直接比较与分期</strong><p>合成回报对齐交易期权换月日</p><p>2012m5是事后识别断点，不是预封存OOS</p></li></ol></div></figure>

<a id="p25-denominator"></a>
## 收益分母与尺度

主分析以标的价格规范化期权超额支付. 同一损益 $\Pi_t$，以标的价 $S_t$ 或权利金 $C_t$ 作分母，得到

$$
R_t^{premium}=\frac{\Pi_t}{C_t}
=\frac{S_t}{C_t}R_t^{underlying}.
$$

$S_t/C_t$ 随期限、波动率及价内外程度变化，因此变更分母会逐期改变规模、暴露和统计权重.

固定比例缩放则保留某些统计量. 同一超额收益序列乘固定 $c>0$，相同CAPM回归下有 $\alpha'=c\alpha$、$\epsilon'=c\epsilon$，信息比率满足

$$
IR'=\frac{c\alpha}{c\operatorname{sd}(\epsilon)}=IR.
$$

<a id="p25-result"></a>
## 样本结构变化

方差伪收益在§4.1脚注26定义为

$$
R_t^{RV}=\frac{RV_t-VIX_{t-1}^{2}}{VIX_{t-1}^{2}},
$$

$RV_t$ 为年化已实现月方差，$VIX_{t-1}$ 为前月末VIX. 两者统一使用小数或百分数尺度后再平方、相减；IR为该收益序列的CAPM alpha除以残差标准差.[^result25]

§4.1展示滚动十年IR，§4.1.1的事后断点检验将2012年5月划为早晚样本分界. Table 2及相邻正文报告交易期权IR由约−0.6变为0.09，变化具有统计显著性.[^result25]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P25-b.svg" alt="结论所需的证据层次：原始回报、风险调整、分期与样本外不能彼此替代. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">回报评价与证据</p><p class="pfh-figure-note">回报定义、风险调整与样本划分</p><ol class="pfh-flow-steps"><li><strong>原始结果</strong><p>净支付 / 明确资本分母</p><p>保费与标的资本分别列示</p></li><li><strong>风险调整</strong><p>CAPM alpha与残差标准差</p><p>IR：固定比例缩放不变，变动比例需重估</p></li><li><strong>后续检验</strong><p>先冻结规则再评价未知时期</p><p>事后断点与真正滚动样本外不同</p></li></ol></div></figure>

alpha贡献缩小后，与市场beta相联系的补偿仍可构成总方差风险溢价. 将长期权改为短期权还会改变尾部损失、融资和资本需求；实际净收益须按卖方执行条件重算.

<a id="p25-oos"></a>
## 滚动样本外检验

2012年5月由完整历史的断点检验识别，支持历史结构变化. 预测检验则要求参数、窗口和交易规则在相应测试期开始前确定.

滚动验证在每个起点按可得数据估参、选规则，再评价随后时期. FPP3给出滚动起点结构，金融数据另需按发布时间、版本和成交时刻对齐.[^oos25] 全样本调参会使后段结果参与规则选择，破坏这项独立性.

<div data-experiment-slot="EXP-P25-EVIDENCE"></div>

实验比较事后断点与预定滚动起点，以及固定倍数与逐期分母. −0.6和0.09沿用作者报告值，切换用于辨认证据及缩放方式.

<a id="p25-exercises"></a>
## 练习与解析

**解释题.** “2012年5月以后alpha改善，说明策略通过了样本外检验. ”如何修改这句话？

作者依据事后识别的断点报告风险调整表现变化. 样本外检验另要求测试结果未参与参数、窗口和策略选择.

**迁移题.** 将同一超额收益序列统一乘100，与逐期改除以期权权利金，有什么不同？

统一乘100时，alpha与残差标准差同比缩放，IR不变. 改用权利金分母时，$S_t/C_t$ 逐期变化，须重新估计回归和IR.

[^cf25]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，Chicago Fed WP2025-17，manuscript 2025-09-04，§2.3及§2.3.1.
[^data25]: 同文§3.1，印刷pp12–13 / PDF pp13–14；§3.2开头讨论收益非线性.
[^result25]: 同文§4.1脚注25（滚动日期对齐）、脚注26（印刷p30 / PDF p31），以及§4.1.1和Table 2讨论（印刷p31 / PDF p32）.
[^oos25]: Hyndman、Athanasopoulos，[Forecasting: Principles and Practice, §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html)，滚动起点单元.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
