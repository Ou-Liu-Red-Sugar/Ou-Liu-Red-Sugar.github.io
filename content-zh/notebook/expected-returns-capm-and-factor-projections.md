{
  "title": "预期收益、CAPM与多因子模型",
  "description": "由共同风险进入均衡条件，再用同版本120个月数据区分样本投影、归因与预测.",
  "layout": "entry",
  "notebookid": "zh-p27",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p27"
}

看到一个资产过去收益很高，我们常会问：这是承担了共同风险，还是获得了模型解释不了的收益？这两个问题还不同于“未来预期回报有多高”. 本篇把理论预期、历史均值、因子敞口与样本alpha分开. 我们会先给出一条紧凑的CAPM推导，再用同一份真实公开研究数据比较两个回归模型，而不把回归结果当未来承诺.

<a id="p27-risk"></a>
## 1. 为什么自身波动不是风险价格的全部？

假设某资产在你的其他财富缩水时反而支付较多. 即使它自身波动很大，也可能帮助你在更需要钱的时候取得资源. 相反，另一资产平时很稳定，却恰好在整个组合最脆弱时一起下跌，未必真的更适合你. 因此风险评价需要看与其他财富的共同变化，不能只给每只资产按标准差排序.

CAPM把这个直觉放进一组很强的模型条件：单期决策；投资者按均值与方差选择；共同的收益分布判断；相同的无风险借贷利率；没有关键交易摩擦；可交易的风险资产组成市场组合. 共同判断不意味着人人风险厌恶程度相同；后者影响各人承担多少风险，但在这些条件下，风险资产组合的方向相同. [^capm03]

<a id="p27-theory"></a>
## 2. 从最优化到市场beta：把中间一步写出来

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

这说明为什么共同协方差进入定价关系，而不是资产自己的方差单独进入. 证明也让限制变得清楚：异质信息、借贷约束、非交易财富和交易摩擦，都会使中间的共同方向或市场清算关系不再如此简单. 现实研究拿一个股票指数作 $R_M$ 代理，也不代表那个指数就是理论里的全部市场财富.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P27-a.svg" alt="理论链与样本链分开：最优化加市场清算，不是对一张回归表换个名字. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">理论链与样本链，不是同一个推断</p><p class="pfh-figure-note">共同风险进入两种关系，但成立条件不同</p><ol class="pfh-flow-steps"><li><strong>理论起点</strong><p>均值—方差优化、共同预期、无摩擦借贷</p><p>正定协方差 → 个体风险头寸沿共同方向</p></li><li><strong>市场清算</strong><p>个体头寸总和对应市场供给</p><p>得到期望超额收益与市场beta的均衡关系</p></li><li><strong>经验回归</strong><p>给定一段真实已实现收益与所选因子</p><p>最小二乘正交 → 样本均值归因</p></li><li><strong>判断边界</strong><p>正截距不是未来收益或技能的证明</p><p>换模型/窗口会改变解释，而不会改变历史收益</p></li></ol></div></figure>

<a id="p27-regression"></a>
## 3. 样本回归回答的是另一个问题

现在有一段已经发生的月度数据. 将某资产超额收益 $y_t=R_{i,t}-R_{f,t}$ 回归到因子 $f_t$：

$$
y_t=\alpha+\beta^\top f_t+\epsilon_t.
$$

含常数项的普通最小二乘，在样本内使残差与常数和解释变量正交，因此残差均值约为零. 这个**投影恒等式**不需要CAPM在现实中完全正确. 它只表示：在选择的模型、样本与计量方法下，有多少变化被共同变量解释，剩下多少没有.

多因子回归加入更多共同变量，也不自动证明APT. APT的无套利价格限制需要关于因子结构、分散与套利机会的额外条件；Fama–French因子则有具体的组合构造，是经验模型的输入. 理论条件、因子构造和样本回归是三层不同对象. [^capm08]

一个正alpha可能来自遗漏变量、样本选择、某段行业繁荣、会计或数据口径，也可能有真正的额外回报机制；只凭截距本身不能判断原因. 要预测未来，还需要说明这个条件均值如何在未来保持，而不是将过去十年的平均截距照搬.

<a id="p27-data"></a>
## 4. 用同一120个月数据，看看基准怎样改变解释

本篇使用Kenneth French的BusEq市值加权行业**研究组合**，与同一202607 CRSP数据库版本的FF3月因子相接，区间2016年1月至2025年12月，共120期. 它不是基金净收益，也不是逐月当时可下载的历史版本；完整月度底层CSV随文提供. RF数据源在2024年6月由Ibbotson转为ICE BofA US 1-Month Treasury Bill Index，因子原始百分数已转换成小数. [^french]

这120个月的月算术平均原始收益为2.1445%，无风险收益均值0.1741667%，超额均值1.9703333%. 对同一个超额收益序列，使用两个模型：

| 模型 | 截距/月 | 市场载荷 | SMB载荷 | HML载荷 | 样本R² |
|---|---:|---:|---:|---:|---:|
| 仅Mkt−RF | 0.7019047% | 1.1752871 | — | — | 0.7521400 |
| FF3 | 0.6608288% | 1.1899483 | −0.0570139 | −0.3758147 | 0.8089633 |

同一资产并没有因为换模型而改变历史收益；变的是解释方式. 加入SMB与HML后，R²提高，截距略降. 负HML载荷说明样本收益与HML变量呈负的条件关联，不表示“每个月都卖空价值股”，也不保证这种载荷未来稳定.

含常数项的FF3回归可以在均值层面核对：

$$
\begin{aligned}
1.9703333\%\approx{}&0.6608288\%+1.2842517\%\\
&+0.0098444\%+0.0154084\%.
\end{aligned}
$$

右边依次为alpha、市场、SMB、HML均值贡献. SMB和HML载荷虽然为负，本样本因子均值也略负，所以均值贡献为正；不要仅看载荷符号便推断累计收益方向.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P27-b.svg" alt="FF3月均超额收益的逐项分解：市场、SMB、HML与截距共同解释同一均值. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">FF3的月均贡献可以逐项相加</p><p class="pfh-figure-note">同一120个月；百分数/月；不是分别复合贡献</p><p class="pfh-axis-label">单位：% / 月</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">市场</span><div class="pfh-cash-reading"><strong>1.284</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:65.17766497461929%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">SMB</span><div class="pfh-cash-reading"><strong>0.010</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.5076142131979696%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">HML</span><div class="pfh-cash-reading"><strong>0.015</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.7614213197969543%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">截距alpha</span><div class="pfh-cash-reading"><strong>0.661</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.55329949238579%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">超额均值</span><div class="pfh-cash-reading"><strong>1.970</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

<a id="p27-time"></a>
## 5. 加总、复利与样本选择不能混成一件事

上一行是算术均值恒等式. 若将每一因子贡献单独复合十年，再相加，不会一般等于资产十年复合收益，因为逐期乘积中有交叉项. 对长期财富，应逐月把总收益相乘；对因子归因，则说明自己采用何种多期连接方法. 把月alpha简单乘12，得到的是年化算术尺度，不是一个真实独立策略的年复合回报.

<div data-experiment-slot="EXP-P27-FACTORS"></div>

实验从同一底层CSV重建全样本与两个预设子窗口的回归. 先在全样本切换单因子/FF3；再只改变窗口，观察载荷和截距是否仍相同. 窗口开关是教学敏感度，不是让你挑出最大alpha后称作样本外发现. 若从许多窗口中按结果选择一个，还必须把选择过程计入验证.

这个回归没有模拟经理的成交、借款、申赎和手续费，所以不能叫净基金alpha. 若真实投资者持有的是收费基金，还要接上P12的净回报与现金时点，再比较适当基准. 理论市场组合也不能与这里的数据股票市场代理悄悄互换.

<a id="p27-exercises"></a>
## 6. 自测与解析

**解释题.** FF3回归截距0.6608288%/月，是否意味着可以每月稳定获得这笔超额收益？

不是. 这是120个月样本的常数项，依赖因子集合、数据版本和样本窗口. 残差可很大，实际结果不会每月等于截距；BusEq也不是一个已经扣了所有成本的实盘基金. 把这个数当未来承诺，还缺机制、稳定性与样本外证据.

**迁移题.** 将超额收益百分数误当小数，但因子仍用小数，会发生什么？如果把因变量和因子全部按一致单位转换又怎样？

前者把因变量放大100倍，截距和载荷都会受到错误尺度影响，结果不能解释为原单位的beta. 若因变量和所有收益因子都从小数改成百分数，载荷仍相同，截距改为百分数单位，R²不变；单位转换必须逐列一致. 原始数据说明是计算的一部分，不是附带书目.

**完成标准.** 看到alpha时，能先问模型、样本、版本与收益分母；也能区分理论预期限制与样本正交条件. 若只记住“beta高预期收益高”，就跳过了本篇最重要的条件.

[^capm03]: MIT 15.433，Reto Gallati，[The CAPM and APT, Part 1: Theory](https://ocw.mit.edu/courses/15-433-investments-spring-2003/df52f7f91f5a13fbfa988a0becb6334a_154336capm1.pdf)，Spring 2003，PDF pp2–9完整理论单元.
[^capm08]: Andrew W. Lo，MIT 15.401，[CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf)，Fall 2008，slides2–27中beta、经验单/多因子与表现评价单元.
[^french]: Kenneth R. French，[FF3说明](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/f-f_factors.html)与[30 Industry Portfolios说明](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html)；采用同一202607数据库版本的201601–202512月度值，不混用其他vintage.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

