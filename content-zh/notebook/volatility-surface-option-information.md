{
  "title": "波动率曲面与市场信息：从报价读到研究结论",
  "description": "从合成IV网格到VIX总方差插值，再带读2025年风险溢价研究，分开模型表达、回报分母和风险调整.",
  "layout": "entry",
  "notebookid": "zh-m22",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m22"
}

<a id="m22-question"></a>
## 一、IV 曲面的信息层次

同一个标的，不同行权价、到期日的期权会有不同报价. 把每个报价放进同一套定价模型反解，就得到一组隐含波动率，简称IV. 沿执行价看，是偏斜或微笑；沿期限看，是波动率期限结构；把两个方向放在一起，才是一张曲面.

IV由带时点的市场报价和选定定价模型共同确定. 从IV进一步推断未来风险或风险补偿，还需连接定价测度与现实分布，并识别交易条件的影响. [^MEFG-MIT-KOGAN]

<a id="m22-surface"></a>
## 二、同源九点 IV 曲面

采用与M18、M19相同的合成网格：标的5,000点、连续复利年利率4%、股息率0，期限按ACT/365. 先给定各点的模型$\sigma$，计算欧式call/put，再按SPX报价增量取整并加减0.2点半价差. SPX乘数为每点100美元. [^MEFG-SPX]

| 到期天数 | 执行价 | 生成报价所用 $\sigma$ | call bid / mid / ask（点） | 反解IV：bid / mid / ask |
|---:|---:|---:|---|---|
| 30 | 4,500 | 28.0% | 530.00 / 530.20 / 530.40 | 27.911% / 28.004% / 28.096% |
| 30 | 5,000 | 24.0% | 145.20 / 145.40 / 145.60 | 23.972% / 24.007% / 24.043% |
| 30 | 5,500 | 22.0% | 10.40 / 10.60 / 10.80 | 21.896% / 21.993% / 22.089% |
| 90 | 4,500 | 27.0% | 612.30 / 612.50 / 612.70 | 26.97% / 27.001% / 27.032% |
| 90 | 5,000 | 23.5% | 256.70 / 256.90 / 257.10 | 23.484% / 23.505% / 23.525% |
| 90 | 5,500 | 22.0% | 70.40 / 70.60 / 70.80 | 21.968% / 21.994% / 22.021% |
| 180 | 4,500 | 25.0% | 702.80 / 703.00 / 703.20 | 24.981% / 25.001% / 25.021% |
| 180 | 5,000 | 23.0% | 369.70 / 369.90 / 370.10 | 22.986% / 23.001% / 23.016% |
| 180 | 5,500 | 22.0% | 160.90 / 161.10 / 161.30 | 21.983% / 21.999% / 22.015% |

固定90天，低执行价对应较高IV；固定执行价5,000，从30天到180天，输入波动率依次为24%、23.5%、23%. 期权价格还取决于价内程度与资金时间，其斜率需由价格函数另行计算.

bid和ask反解得到一个IV区间. 90天、K=5,000的call中价为256.90，反解23.505%，略不同于生成未取整价格时的23.5%. 这点差别来自报价取整. 价格与IV的转换还依赖股息、利率、结算和模型；换一组假设，同一个报价可以对应不同IV. 这里的九点只检查价格界、执行价单调性和离散凸性，并没有构造全局无套利插值曲面.

<a id="m22-vix"></a>
## 三、VIX 的方差聚合

Cboe的VIX产品方法文件与数学方法文件各有职责. 本篇采用前者 **v6.0、2026-02-26**，后者 **v5.0、同日**. 产品方法确定合格SPX／SPXW合约、期限、报价与发布／结算安排；数学方法给定期权报价如何进入方差计算. [^MEFG-VIX-METHOD]

为看清权重，先只写一个期限 $T$ 的核心表达：
$$
\sigma^2(T)=
\frac{2}{T}\sum_i
\frac{\Delta K_i}{K_i^2}e^{rT}q_{\rm quote}(K_i)
-\frac1T\left(\frac F{K_0}-1\right)^2.
$$
这里的 $q_{\rm quote}(K)$ 是按方法选定的**期权报价**；原文把它写作 $Q(K)$，我们特意换符号，避免与M21的概率测度 $Q$ 混淆. $F$ 是由期权关系推得的远期水平，$K_0$ 是相应边界执行价；两侧使用指定的虚值put／call，$K_0$处按规则使用两种期权的平均报价，$\Delta K$则给不同执行价间距以权重. 合约与报价须通过方法文件指定的过滤规则. [^MEFG-VIX-MATH]

每个期限先形成**年化方差**，然后在两个期限之间插值的是总方差. 若两期限剩余分钟数为 $N_1,N_2$，目标30天为 $N_*=43,200$，一年为 $N_Y=525,600$，令
$$
w_1=\frac{N_2-N_*}{N_2-N_1},\qquad w_2=1-w_1,\qquad T_i=\frac{N_i}{N_Y}.
$$
则
$$
\sigma_{30}^2
=\frac{w_1T_1\sigma_1^2+w_2T_2\sigma_2^2}{N_*/N_Y},
\qquad
VIX=100\sqrt{\sigma_{30}^2}.
$$

Cboe产品方法Appendix 3给出以下假设算例，用于重算总方差插值的最后一步：

| 输入 | 近到期 | 次近到期 |
|---|---:|---:|
| 剩余分钟 | 34,484 | 44,954 |
| 已给定年化方差（%） | 1.923 | 1.942 |

用原件未舍入输入代入得到约13.928，按两位小数显示为13.93. 另一项可核的小计算是执行价1,370那一行：$\Delta K=5$、报价0.2、原例利率 $r=3.17\times10^{-4}$、期限 $T=34484/525600$ 年，其求和项
$$
\frac5{1370^2}e^{(3.17\times10^{-4})(34484/525600)}\times0.2
\approx5.328\times10^{-7}.
$$
该数是方差求和式中执行价1,370这一行的贡献. [^MEFG-VIX-METHOD]

再做一个更直观的独立教学变式：24天年化波动20%、36天24%，目标30天. 权重各半，但总方差必须带期限：
$$
\sigma_{30}^2
=\frac{\tfrac12\,24(0.20)^2+\tfrac12\,36(0.24)^2}{30}
=5.056\%.
$$
开平方是 <strong>22.486%</strong>，不是20%与24%的算术平均22%.

最后，VIX现货指数的中间报价计算，不等于能直接按那个指数值买卖某个现货资产. 相关衍生品到期使用的特别开盘报价SOQ有自己的单期限、开盘成交及相应替代报价规则，不是机械复制普通盘中两期限插值. [^MEFG-VIX-METHOD]

<a id="case-mefg-chicago-2025"></a>
<a id="m22-study"></a>
## 四、风险调整后的期权回报证据

Dew-Becker和Giglio的工作论文 *The decline of the variance risk premium: evidence from traded and synthetic options*（2025-09-04稿）比较交易期权与动态合成期权的回报. 其样本、回报分母与对冲定义如下. [^MEFG-CHICAGOFED-2025]

**第一，两个样本的来源不同.** Synthetic由CRSP股票市场回报构造，覆盖1926–2022；traded部分拼接CME 1987–1995与SPX OptionMetrics 1996–2022. 因而1926年起的长历史属于模型合成序列，上市合约样本从1987年开始.

**第二，回报分母和窗口要对齐.** 作者把期权超额回报按**标的价格**缩放，不是拿损益除以买入权利金. 它表达每单位标的规模对应的期权结果，不能直接与M16中“投入500美元期权、回报140%”相比较. 直接对照的持有窗口为第三个周五到下个月第三个周五；合成序列的另一些单变量统计用21日重叠窗口. Figure 8采用对齐的roll dates，不能将不同窗口静默拼接.

**第三，风险调整依赖可得信息与实现条件.** 合成头寸只使用滞后一日信息，波动估计采用扩张窗；§2.2的beta对冲是按期初信息确定的静态市场头寸，区别于每日更新的delta复制. §2.1–2.3还列出traded与synthetic回报解释所需的定价条件与交易摩擦，实施成本和频率会影响可行性.

原论文Figure 8（印刷p29／PDF第30页）报告滚动风险调整量，横轴为年份. §4.1–4.1.1发现CAPM alpha分量随时间衰减，同时保留beta关联的方差风险补偿；该结果区分了超出市场风险暴露的回报与承担市场风险所对应的回报. [^MEFG-CHICAGOFED-2025]

<details data-agent-option="dealer-gamma"><summary>选读：交易商 gamma 的候选机制</summary>

<a id="m22-mechanism"></a>

BIS 2024年文章 *What could explain the recent drop in VIX?* 讨论收益增强产品、交易商头寸与对冲行为的候选联系. 若某种客户交易使交易商净持有正gamma，价格上涨后减持、下跌后增持的对冲可能逆着价格变动交易；但净头寸还取决于客户方向、产品结构和其他头寸抵销. [^MEFG-BIS-2024]

所以“0DTE成交量很大”只说明活动规模，不能独立识别交易商净gamma；常规VIX不直接纳入0DTE，但其他期限与市场机制仍可能存在间接联系. 该文章提出的是需要进一步检验的机制，不能由总成交量单独识别VIX下降的因果关系.

</details>

<a id="m22-explore"></a>
## 六、曲面与风险溢价的图形视角

<div data-experiment-slot="EXP-MEFG-M22-SURFACE"></div>

曲面实验沿执行价和期限展示九点网格，并可切换bid、mid、ask；总方差实验比较两个期限与30天插值结果. 研究卡链接Figure 8原图.

<a id="m22-exercises"></a>
## 七、VIX 与实证结论检验

**题一：24天20%、36天24%，为什么不直接取22%？**

**解析.** 合约期限不同，先形成期限内总方差，再插到30天并重新年化. 公式得5.056%的年化方差，开平方为22.486%. 先平均波动率会丢掉平方与期限权重.

**题二：低执行价IV高，能否直接读出实际崩盘概率？**

**解析.** 不能. 它首先是某模型下对期权报价的表达，包含投资者对状态支付的定价、风险补偿及交易条件. 真实概率需要另外的统计与经济假设，不能把定价权重直接换名.

**题三：想复核论文的回报，为什么不能用“到期损益÷权利金”？**

**解析.** 论文§3.1采用标的价格分母. 换成权利金分母会引入不同的杠杆尺度，合约期限、虚实值和roll窗口也需保持一致；那已经不是同一个统计对象.

**题四：Figure 8中alpha的变化，证明未来卖期权一定无利可图吗？**

**解析.** 没有. 它是指定样本和风险调整方法下的结果；作者区分alpha与beta相关补偿. 预测未来可执行净收益还需新信息、真实成本、融资和风险约束，不能从该图一步推出.

**题五：为什么这里不画“0DTE成交量导致VIX下降”的箭头？**

**解析.** 总量不等于净方向或净gamma，常规VIX还有自己的成份方法. 要画因果箭头，需要识别中间持仓、对冲路径及替代解释；现有候选机制不足以完成这一步.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

[^MEFG-VIX-METHOD]: Cboe Global Indices，*Volatility Index Methodology: Cboe Volatility Index*，v6.0, revised 2026-02-26. [原文](https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf). 本篇定位：Sections 1–5 and Appendices 1–3; physical pp3–14, stop before Appendix4 strip；Appendix2 document version; Appendix3 hypothetical sample.

[^MEFG-VIX-MATH]: Cboe Global Indices，*Cboe Volatility Index Mathematics Methodology*，v5.0, revised 2026-02-26. [原文](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf). 本篇定位：Physical pp3–8 / printed pp4–9: constituent, rates, single-term and constant-maturity calculation；Physical p18 / printed p19: version.

[^MEFG-CHICAGOFED-2025]: Ian Dew-Becker, Stefano Giglio，*The decline of the variance risk premium: evidence from traded and synthetic options*，Chicago Fed WP2025-17, manuscript 2025-09-04; DOI 10.21033/wp-2025-17. [原文](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en). 本篇定位：§2.1–2.3 including feasibility: physical pp7–12；§3.1 data: physical pp13–14；§4.1–4.1.1: physical pp29–32; Figure8 physical p30.

[^MEFG-BIS-2024]: Karamfil Todorov, Grigory Vilkov，*What could explain the recent drop in VIX?*，BIS Quarterly Review Box B, 2024-03-04. [原文](https://www.bis.org/publications/what-could-explain-recent-drop-vix). 本篇定位：Full box body and footnotes; no GraphB1 numeric extraction.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
