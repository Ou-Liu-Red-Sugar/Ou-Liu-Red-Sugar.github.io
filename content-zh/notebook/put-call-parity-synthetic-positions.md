{
  "title": "平价与合成：终端支付、现金腿与可执行价格",
  "description": "逐状态保留行权价现金腿，推导平价；用真实交易方向的合成bid/ask检查中价偏离.",
  "layout": "entry",
  "notebookid": "zh-m20",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m20"
}

<a id="m20-payoff"></a>
## 一、终端支付与现金腿

令call与put具有同一标的、同一行权价 $K$、同一到期日，并采用欧式、无股息、可持有股票与现金、借贷利率相同且无费用或交易约束的市场. 在这些条件下，先逐状态比较终端支付，再比较当前价格.[^MEFG-OIC-PARITY]

无论 $S_T$ 大于还是小于 $K$，
$$
(S_T-K)^+-(K-S_T)^+=S_T-K.
$$
买call、卖put在到期时的合计支付为$S_T-K$. 同时存入足够到期变成$K$的现金后，合计支付才与一股股票相同.

<a id="m20-parity"></a>
## 二、两状态平价勾稽

采用共同有限市场：$B_0=1$，$B_1=R=1.02$，股票100变为120或90；本分支 $K=105$. 两种期权到期支付分别为call的 $(15,0)$ 与put的 $(0,15)$. [^MEFG-STATE]

| 到期状态 | call支付 | put支付 | call−put | 到期支付105的现金＋call−put | 股票价值 |
|---|---:|---:|---:|---:|---:|
| 上涨 | 15 | 0 | 15 | 120 | 120 |
| 下跌 | 0 | 15 | −15 | 90 | 90 |

若今天存入 $K/R=105/1.02$，到期可支付105. 因此相同终端支付的价格关系为
$$
C+\frac K R=P+S_0,
\qquad
C-P=S_0-\frac K R.
$$
共同模型中$C=100/17$、$P=150/17$，价格差为$-50/17\approx-2.941$. <a class="inline-ref" href="/zh/notebook/replication-state-prices-risk-neutral-probability/" data-reference="zh-m21">复制定价<span aria-hidden="true"> ↗</span></a>从股票与现金求得两个期权各自的价格. [^MEFG-MIT-OPTIONS]

平价也给价格界提供直觉. 例如无股息欧式call不低于 $\max(S_0-K/R,0)$，而不是无条件不低于 $S_0-K$；put的相应融资关系涉及 $K/R-S_0$. 对立刻允许行权的美式，决策集合改变，不能把上述欧式等式原封不动套过去. 已知现金股息还需把持股期间现金计入；不同借贷成本与借券约束则把理想等式变成需要逐腿检查的区间或单向约束. [^MEFG-OIC-PARITY]

<a id="m20-execution"></a>
## 三、Bid/Ask 下的可执行平价

另设带买卖价差的教学报价，保持$K=105$和现金增长因子1.02：

| 工具 | bid | ask | mid |
|---|---:|---:|---:|
| 股票 | 99.95 | 100.05 | 100.00 |
| call | 5.80 | 6.20 | 6.00 |
| put | 8.70 | 9.10 | 8.90 |

若只把中价代入，得到
$$
6-8.9-100+\frac{105}{1.02}\approx0.041.
$$
这个“偏离”来自中价，但你不能要求所有腿按中价足额成交. 为了核可交易现金，先定义**初始净现金为收到减付出**；正数表示手里剩下现金，负数表示还需投入.

第一条方向是卖call、借入 $K/R$、买put和股票. 卖用bid，买用ask：
$$
a_1=5.8+\frac{105}{1.02}-9.1-100.05\approx-0.409.
$$
到期支付 $-C_T-K+P_T+S_T=0$，但起点已经需要净付0.409.

反方向是卖股票和put、买call并存入 $K/R$：
$$
a_2=99.95+8.7-6.2-\frac{105}{1.02}\approx-0.491.
$$
到期 $-S_T-P_T+C_T+K=0$，起点同样要净付. 两方向都没有留下正的初始现金；加上额外费用只会更差.

| 检查 | 第一方向 | 反方向 |
|---|---:|---:|
| 初始净现金 | −0.409 | −0.491 |
| 理论到期净支付 | 0 | 0 |
| 已证明无风险套利？ | 否 | 否 |

这里的价格按每个标的单位计量，并允许分割. 若映射到上市合约，还需加入合约乘数；若判断可执行套利，还需逐腿满足同步成交、融资、借券与足够深度等条件.

<a id="m20-feasibility"></a>
## 四、复制交易的实施条件

两个组合终端支付相同而价格不同，且买入便宜组合、卖出昂贵组合及相关资金安排均可实施时，价差构成套利. 交易约束决定这些头寸是否可建立.

第一方向需要融资买入股票和put、卖出call；反方向需要卖空股票并卖出put. 若借不到股票，反方向就不能按原设定实施. 若某报价滞后，下一秒另一条腿的价格可能已经变动；若一个产品允许提前行权而另一个不允许，原先只按共同到期日设计的现金账也不再完整. [^MEFG-OIC-PARITY]

合成远期的支付为$S_T-K$，可以为正或负. 在本市场中，交割价$K=RS_0=102$时初始价值为零；改为$K=105$，初始价值就是$S_0-105/R$. 交割价与远期当前价值由这条关系连接.

<a id="m20-explore"></a>
## 五、状态支付与初始现金

<div data-experiment-slot="EXP-MEFG-M20-PARITY"></div>

实验列出两个方向的bid/ask现金账，同时显示中价偏离. 改变报价会重算净额；关闭融资、借券、同步或深度条件时，相应交易路径变为不可执行，账面差额仅作比较.

静态阅读时，按上表分别把“收到”与“付出”分开加总即可：第一方向收到108.741、付出109.15；反方向收到108.65、付出109.141. 每条账到期归零，起点差额才是该检查的重点.

<a id="m20-exercises"></a>
## 六、现金腿与执行约束检验

**题一.** “买call、卖put等于买股票”在本例缺了哪一条现金腿？

**解析.** 前者到期支付 $S_T-105$，还要加到期支付105的现金资产，才能变成股票支付 $S_T$. 这笔资产今天成本 $105/1.02$. 不计现金腿就把一个有融资成分的合成头寸冒充裸股票.

**题二.** 中间价偏离为＋0.041. 为什么第一方向真正使用买卖边后反而需要付0.409？

**解析.** 卖call只能按5.8，买put需9.1，买股需100.05. 中价不是所有腿的可执行价格. 把各腿恢复到正确bid／ask，交易成本立刻超过中价缝隙.

**题三.** 若反方向初始净额出现正数，但股票无法借到，应该怎样展示？

**解析.** 可以报告“报价代数提示这个方向”，但执行状态必须标为受借券约束而未完成. 不能给它一个真实无风险利润，也不能悄悄把不能卖空的股票腿删掉.

**题四.** 为什么共同模型公平远期交割价是102，而本篇平价仍用105？

**解析.** 102使远期初值 $S_0-K/R$ 为零；105是两份期权的给定行权价. 不同 $K$ 对应不同初始价值的合成远期，不能为了让公式“漂亮”就改合约条款.

[^MEFG-OIC-PARITY]: Options Industry Council，*Put/Call Parity*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/put-call-parity). 本篇定位：Full article including formulas, financing/dividend/friction discussion.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
