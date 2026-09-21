{
  "title": "国债期货：DV01、曲线与CTD错配",
  "description": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。",
  "layout": "entry",
  "notebookid": "zh-p22",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p22"
}

买一亿元面值的短债和一亿元面值的长债，利率上涨时的价格反应不会一样。因此，国债期货对冲不能只比名义本金。本篇先把一个有日期的CME教学案例算清，再有意破坏“所有利率一起变化”的假设，看看一个看似严丝合缝的张数留下了什么。

<a id="p22-object"></a>
## 1. 先确定保护的究竟是谁

CME的2020年案例站在参与美国国债拍卖、预期形成债券多头敞口的市场参与者一侧，不是在为财政部设计借款成本。它以9月1日可观察的风险为起点，列出9月3日公布并开启when-issued交易、9月8日拍卖、9月15日发行交收的时间线，用国债期货空头对冲预计的多头价格风险。[^3y]

这里采用的是作者的1亿美元面值教学安排，不是已执行订单。未发行新券的敏感度暂用刚拍卖的、2023年8月到期、票息1/8%的三年期票据作代理。这个“代理”身份很重要：券还未最终形成，不能把代理证券的精确数值说成新券永远不变的风险。

DV01表示收益率增加1个基点时，价格减少多少美元的一阶敏感度，本篇把正常债券多头的DV01记为正。于是对于小幅收益率变动 $\Delta y_{bp}$，价格变化约为 $-D\Delta y_{bp}$。单位是美元/基点；“基点”是收益率的0.01个百分点，不是债券价格下跌0.01%。

<a id="p22-ratio"></a>
## 2. 为什么得到455张？

原例代理券每200,000美元面值的DV01为56.11美元/基点。1亿美元对应500个这样的面值单位，所以

$$
D_p=56.11\times\frac{100,000,000}{200,000}=28,055.
$$

2020年12月三年期国债期货 Z3NZ0 的给定DV01为61.70美元/基点。空头在利率上涨、期货价格下降时盈利。令空头张数为 $N$，共同平移下的合并变化约为

$$
\Delta W\approx-(D_p-ND_f)\Delta y_{bp},\qquad
N^*=\frac{28,055}{61.70}=454.700162.
$$

采用455张后，期货敏感度是28,073.50，残余多头DV01为−18.50。利率上升1bp，组合约亏28,055，空头约赚28,073.50，合并约赚18.50。这个小正数来自轻微过度对冲，不是一种利率套利。

| 空头张数 | 期货DV01（美元/bp） | 残余多头DV01 | +1bp时合计近似变化 |
|---:|---:|---:|---:|
| 454 | 28,011.80 | +43.20 | −43.20 |
| 455 | 28,073.50 | −18.50 | +18.50 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-a.svg" alt="名义本金到DV01再到整数张数：455的来源是敏感度，不是面值相除。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">用DV01而不是票面本金匹配</p><p class="pfh-figure-note">CME 2020年发行对冲教学例；不是当前DV01</p><ol class="pfh-flow-steps"><li><strong>代理证券</strong><p>56.11美元/bp / 200,000美元本金</p><p>100m本金 → 28,055美元/bp</p></li><li><strong>期货一张</strong><p>61.70美元/bp</p><p>28,055 / 61.70 = 454.700162张</p></li><li><strong>采用455张</strong><p>净DV01 = −18.50美元/bp</p><p>利率平移+1bp → 合并近似+18.50美元</p></li></ol></div></figure>

<a id="p22-ctd"></a>
## 3. 转换因子和最便宜可交割券，为什么必须进来？

国债期货允许交付符合规则的一篮子不同债券。转换因子（CF）把期货报价映射到某一可交割券的发票金额；最便宜可交割券（CTD）则与当时券价、融资、应计利息和交割选择有关。简化地说，在选定CTD且基差关系局部稳定时，期货DV01常可从CTD的DV01除以其CF近似得到。但CF本身没有美元/基点单位，所以不能拿CF直接替代风险敏感度。[^treas]

假如原来61.70的每张DV01在新CTD或价格状态下变为58，455张提供的敏感度只有26,390；相对28,055，还剩1,665美元/bp。新的理想张数约483.706897。先前的455并没有算错，是被用来计算它的风险关系已经变了。

这一步也说明为什么“定期检查合约”不能简化成固定日历加减仓。需要先知道价格、交割篮和风险是否改变。没有这些信息就机械从455加到484，只会把另一个假设当事实。实验里的58是明确的教学压力，不是对2020或当前真实CTD的重新估计。

<a id="p22-curve"></a>
## 4. 总DV01相同，曲线扭曲仍然可能不同

一个DV01把整条收益率曲线压成“所有期限同时增加1bp”。实际可以一端涨、另一端跌。我们另设两个期限桶，组合敏感度为 $(20,000,8,055)$，每张期货为 $(45,16.7)$。它们加总仍分别是28,055和61.70，所以沿平行方向继续得到同一个455。

但若第一桶上升10bp、第二桶下降10bp，组合变化为

$$
\Delta V_p=-20,000\times10-8,055\times(-10)=-119,450.
$$

空头期货则给

$$
\Delta V_f=455[45\times10+16.7\times(-10)]
=128,765.
$$

净额为9,315美元，不再接近零。原因是两个敏感度向量不成比例，一个标量张数只能匹配一个方向。若要同时约束多个期限桶，可能需要不同期限的合约，解一个向量匹配问题；同时还会增加交易、资金和模型维护成本。

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-b.svg" alt="平行移动、曲线扭曲与CTD变化：同一455张面对三个不同风险问题。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">平移匹配不等于曲线匹配</p><p class="pfh-figure-note">教学两桶扭曲 +10 / −10 bp；仍用455张</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">债券变化</span><div class="pfh-cash-reading"><strong>-119,450.000</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:92.7658913524638%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货变化</span><div class="pfh-cash-reading"><strong>128,765.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净变化</span><div class="pfh-cash-reading"><strong>9,315.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.2341086475362095%"></span></div></li></ul></div></figure>

<div data-experiment-slot="EXP-P22-DV01"></div>

在实验中先选“平移”，观察455张的18.50美元微小残余，再切“扭曲”而不改张数。最后切“CTD变化”，分别比较保持455与重新计算理想张数。图中风险都是一阶教学近似；没有给出凸性、实际完整曲线和每日券价时，不会把它延伸成大幅变动下的精确损益。

<a id="p22-funding"></a>
## 5. 价格抵消不负责提供交收现金

期货空头可能在收益率下降时发生现金亏损，而债券多头的市值同时上升。若持有的是未交收证券或不愿卖出的库存，增值不自动变成期货截止前可用现金。真正部署还要知道期货日结算、经纪商保证金、可动用现金、发券交收和旧合约退出日期。

本例没有这些账户数据，因此没有“455张所需现金”的数值结论。一个负18.50美元/bp的残余并不能证明资金充足。直接卖掉一部分债券、缩小预期拍卖头寸或使用其他期限工具，都是可比较的替代；它们分别改变库存、收益机会、基差或资金要求，不能只按最小残余DV01排序。

<a id="p22-exercises"></a>
## 6. 自测与解析

**解释题。** 为什么一个CF为0.9的合约，不意味着其DV01就是债券的90%？

CF调整交割发票报价，不是无量纲风险折扣。简化交割关系中，某券价格近似为CF乘期货价再加其他项，反过来期货敏感度更接近券敏感度除以CF，而且还需要CTD和基差稳定的假设。只报0.9，没有券的DV01，甚至无法得到美元/bp。

**迁移题。** 455张不变，期货DV01变58，利率平移上升5bp。忽略凸性和其他变化，合计多少？这能直接变成加仓建议吗？

残余为 $28,055-455\times58=1,665$ 美元/bp，所以近似损失8,325美元。新理想张数为483.706897，但是否采用484仍要核CTD判断、费用和过程现金。教学敏感度表不是已经观察到的市场资料，因此只能给条件结果。

**完成标准。** 能说清455来自哪个日期、哪个代理券、哪个期货敏感度；还能指出曲线、CTD、凸性和现金分别在哪一步超出了这个数字。

[^3y]: Jonathan Kronstein / CME Group，[Hedging 3-Year Note Issuance](https://www.cmegroup.com/education/articles-and-reports/hedging-3-year-note-issuance)，2020年教学情景全文，尤其Sep1/3/8/15与DV01算例段。
[^treas]: CME Group，[Understanding Treasury Futures](https://www.cmegroup.com/education/files/understanding-treasury-futures.pdf)，转换因子、CTD及基差单元，印刷pp5–8；BPV风险与对冲单元，印刷pp11–13。本文两期限桶是另列的教学变式。

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

