{
  "title": "预期收益、CAPM与多因子模型",
  "description": "推导CAPM的均衡关系，并在同一120个月样本上比较单因子与FF3回归.",
  "layout": "entry",
  "notebookid": "zh-p27",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p27"
}

CAPM从均值—方差最优化和市场清算得到期望收益与共同风险的关系. 历史回归则将已实现收益投影到给定因子上. 本篇先推导均衡关系，再比较同一120个月样本的单因子与FF3回归.

<a id="p27-risk"></a>
## 共同风险与支付

在其他财富缩水时支付较多的资产，可以抵消部分总财富风险；与现有财富同步下跌的资产则增加风险. 评价新增资产要考虑它与整个财富组合的共同变化.

CAPM假设单期决策、均值—方差选择、共同收益分布判断、相同无风险借贷利率及无关键交易摩擦. 可交易风险资产组成市场组合；风险厌恶程度影响各人持仓规模，共同判断使风险资产方向一致.[^capm03]

<a id="p27-theory"></a>
## CAPM推导

令 $\mu$ 是风险资产超额收益的期望向量，$\Sigma$ 是正定协方差矩阵. 对风险厌恶系数 $a_h>0$ 的投资者，若风险头寸向量为 $z_h$，均值—方差目标为

$$
\max_{z_h}\;z_h^\top\mu-\frac{a_h}{2}z_h^\top\Sigma z_h.
$$

一阶条件给 $z_h=a_h^{-1}\Sigma^{-1}\mu$. 所以不同投资者的风险头寸沿同一个方向，只是规模不同. 市场清算要求这些头寸的总和等于市场风险资产供给；适当规范化后，存在标量 $\lambda$ 使

$$
\mu=\lambda\Sigma w_M.
$$

第 $i$ 个分量是 $\mu_i=\lambda\operatorname{Cov}(R_i,R_M)$. 两边按市场权重加总，得 $\mu_M=\lambda\operatorname{Var}(R_M)$. 在市场方差非零时消掉 $\lambda$：

$$
\mathbb{E}[R_i]-r_f
=\underbrace{\frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)}}_{\beta_i}
\bigl(\mathbb{E}[R_M]-r_f\bigr).
$$

共同方向与市场清算使协方差进入定价关系. 异质信息、借贷约束、非交易财富或交易摩擦会改变这些中间条件；实证股票指数仅是理论市场组合的代理.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P27-a.svg" alt="理论链与样本链分开：最优化加市场清算，不是对一张回归表换个名字. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">均衡关系与样本投影</p><p class="pfh-figure-note">共同风险进入两种关系，但成立条件不同</p><ol class="pfh-flow-steps"><li><strong>理论起点</strong><p>均值—方差优化、共同预期、无摩擦借贷</p><p>正定协方差 → 个体风险头寸沿共同方向</p></li><li><strong>市场清算</strong><p>个体头寸总和对应市场供给</p><p>得到期望超额收益与市场beta的均衡关系</p></li><li><strong>经验回归</strong><p>给定一段真实已实现收益与所选因子</p><p>最小二乘正交 → 样本均值归因</p></li><li><strong>判断边界</strong><p>正截距的预测解释需额外证据</p><p>换模型/窗口会改变解释，而不会改变历史收益</p></li></ol></div></figure>

<a id="p27-regression"></a>
## 样本回归与投影

现在有一段已经发生的月度数据. 将某资产超额收益 $y_t=R_{i,t}-R_{f,t}$ 回归到因子 $f_t$：

$$
y_t=\alpha+\beta^\top f_t+\epsilon_t.
$$

含常数项的OLS使残差与常数、解释变量在样本内正交，残差均值为零（数值计算存在舍入误差）. 这一投影恒等式由最小二乘决定，描述选定模型在该样本中的解释部分与残差.

多因子回归以共同变量解释收益. APT的定价限制另依赖因子结构、分散和无套利条件；Fama–French因子则按明确组合规则构造，可作为经验回归输入.[^capm08]

正alpha可来自遗漏暴露、样本选择、特定行业状态、数据口径或额外回报机制. 区分这些解释需要增加因子、改变样本或取得机制证据；预测还需检验条件关系在后续时期的稳定性.

<a id="p27-data"></a>
## BusEq与FF3实证

采用Kenneth French的BusEq市值加权行业研究组合和FF3月因子，均取202607 CRSP数据库版本，覆盖2016年1月至2025年12月，共120期. 研究组合不含基金管理费、申赎及经理交易；该版本重建历史值，未还原每月当时发布的数据. RF来源于2024年6月由Ibbotson转为ICE BofA US 1-Month Treasury Bill Index，原始百分数已转为小数.[^french]

这120个月的月算术平均原始收益约2.145%，无风险收益均值约0.174%，超额均值约1.970%. 对同一个超额收益序列，使用两个模型：

| 模型 | 截距/月 | 市场载荷 | SMB载荷 | HML载荷 | 样本R² |
|---|---:|---:|---:|---:|---:|
| 仅Mkt−RF | 0.702% | 1.175 | — | — | 0.752 |
| FF3 | 0.661% | 1.19 | −0.057 | −0.376 | 0.809 |

增加SMB与HML后，R²由0.752升至0.809，截距略降，历史收益序列保持相同. HML载荷为负，表示控制其他因子后的负关联.

含常数项的FF3回归可以在均值层面核对：

$$
\begin{aligned}
1.970\%\approx{}&0.661\%+1.284\%\\
&+0.010\%+0.015\%.
\end{aligned}
$$

右侧依次为alpha、市场、SMB和HML均值贡献. 本样本SMB、HML载荷与因子均值均为负，因此二者的均值贡献为正.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P27-b.svg" alt="FF3月均超额收益的逐项分解：市场、SMB、HML与截距共同解释同一均值. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">FF3的月均贡献可以逐项相加</p><p class="pfh-figure-note">同一120个月；百分数/月；算术均值贡献</p><p class="pfh-axis-label">单位：% / 月</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">市场</span><div class="pfh-cash-reading"><strong>1.284</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:65.17766497461929%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">SMB</span><div class="pfh-cash-reading"><strong>0.01</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.5076142131979696%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">HML</span><div class="pfh-cash-reading"><strong>0.015</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.7614213197969543%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">截距alpha</span><div class="pfh-cash-reading"><strong>0.661</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.55329949238579%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">超额均值</span><div class="pfh-cash-reading"><strong>1.97</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

<a id="p27-time"></a>
## 均值归因与复利

上述分解针对算术均值. 逐因子分别复合再相加会遗漏乘积交叉项；长期财富按每月总收益连乘，多期归因另指定连接方法. 月alpha乘12为算术年化尺度.

<div data-experiment-slot="EXP-P27-FACTORS"></div>

实验用同一底层CSV比较全样本及两个预设子窗口，并在每个窗口切换单因子与FF3，观察截距和载荷对模型与样本选择的敏感度. 若窗口是根据结果挑选，选择过程本身应进入后续验证.

若改为收费基金，研究对象还包含经理成交、借款、申赎、费用及现金时点，应据此重建净收益并选择基准.

<a id="p27-exercises"></a>
## 练习与解析

**解释题.** FF3回归截距约0.661%/月，是否意味着可以每月稳定获得这笔超额收益？

0.661%为给定因子、版本和120个月窗口的拟合截距，各月收益还包含因子贡献和残差. 将其用于预测需要额外的机制与样本外证据.

**迁移题.** 将超额收益百分数误当小数，但因子仍用小数，会发生什么？如果把因变量和因子全部按一致单位转换又怎样？

仅将因变量放大100倍，截距与载荷均放大100倍. 因变量及全部收益因子一起从小数转为百分数时，载荷相同，截距改变单位，R²保持不变.

[^capm03]: MIT 15.433，Reto Gallati，[The CAPM and APT, Part 1: Theory](https://ocw.mit.edu/courses/15-433-investments-spring-2003/df52f7f91f5a13fbfa988a0becb6334a_154336capm1.pdf)，Spring 2003，PDF pp2–9完整理论单元.
[^capm08]: Andrew W. Lo，MIT 15.401，[CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf)，Fall 2008，slides2–27中beta、经验单/多因子与表现评价单元.
[^french]: Kenneth R. French，[FF3说明](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/f-f_factors.html)与[30 Industry Portfolios说明](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html)；采用同一202607数据库版本的201601–202512月度值.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
