{
  "title": "国债期货：DV01、曲线与CTD错配",
  "description": "相同票面本金的债券，期限不同，利率敏感度也不同. 国债期货对冲按敏感度计算张数. CME 2020年三年期国债发行案例给出455张的DV01匹配，曲线扭曲或CTD变化会改变其效果.",
  "layout": "entry",
  "notebookid": "zh-p22",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p22"
}

相同票面本金的债券，期限不同，利率敏感度也不同. 国债期货对冲按敏感度计算张数. CME 2020年三年期国债发行案例给出455张的DV01匹配，曲线扭曲或CTD变化会改变其效果.

<a id="p22-object"></a>
## 发行敞口与时间线

CME 2020年案例的主体是参与美国国债拍卖、预期形成债券多头敞口的市场参与者. 9月1日先用可观察风险建立代理，9月3日公布并开启when-issued交易，9月8日拍卖，9月15日发行交收；期货空头用于抵消预期多头的利率价格风险. [^3y]

案例采用100 M美元面值，并以刚拍卖的、2023年8月到期、票息1/8%的三年期票据代理未发行新券的敏感度. 因此后续28,055美元/bp是代理敏感度，需随新券风险与市场状态更新.

DV01为收益率上升1bp时价格下降的美元数的一阶近似，本篇将正常债券多头DV01记为正. 小幅变动 $\Delta y_{bp}$ 对应 $\Delta V\approx-D\Delta y_{bp}$，单位为美元/bp；1bp等于收益率的0.01个百分点.

<a id="p22-ratio"></a>
## DV01匹配与取整

原例代理券每200,000美元面值的DV01为56.11美元/基点. 100 M 美元对应500个这样的面值单位，所以

$$
D_p=56.11\times\frac{100,000,000}{200,000}=28,055.
$$

2020年12月三年期国债期货 Z3NZ0 的给定DV01为61.70美元/基点. 空头在利率上涨、期货价格下降时盈利. 令空头张数为 $N$，共同平移下的合并变化约为

$$
\Delta W\approx-(D_p-ND_f)\Delta y_{bp},\qquad
N^*=\frac{28,055}{61.70}\approx454.700.
$$

455张对应期货敏感度28,073.5，残余多头DV01为−18.5. 利率上升1bp，债券约亏28,055、期货空头约赚28,073.5，合并约赚18.5，反映轻微过度对冲.

| 空头张数 | 期货DV01（美元/bp） | 残余多头DV01 | +1bp时合计近似变化 |
|---:|---:|---:|---:|
| 454 | 28,011.8 | +43.2 | −43.2 |
| 455 | 28,073.5 | −18.5 | +18.5 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-a.svg" alt="名义本金到DV01再到整数张数：455的来源是敏感度，不是面值相除. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">DV01匹配</p><p class="pfh-figure-note">CME 2020年发行对冲教学例</p><ol class="pfh-flow-steps"><li><strong>代理证券</strong><p>56.11美元/bp / 200,000美元本金</p><p>100M本金 → 28,055美元/bp</p></li><li><strong>期货一张</strong><p>61.70美元/bp</p><p>28,055 / 61.7 ≈ 454.7张</p></li><li><strong>采用455张</strong><p>净DV01 = −18.50美元/bp</p><p>利率平移+1bp → 合并近似+18.50美元</p></li></ol></div></figure>

<a id="p22-ctd"></a>
## 转换因子与CTD

国债期货允许交付规则规定的一篮子债券. 转换因子CF将期货报价映射到可交割券发票金额，CTD取决于券价、融资、应计利息及交割选择. 固定CTD且基差关系局部稳定时，期货DV01约为CTD的DV01除以其CF.[^treas]

另设每张期货DV01降至58的压力情景. 455张提供26,390美元/bp，对28,055美元/bp的代理风险剩余1,665美元/bp；新理想张数约483.707.

CTD、价格与基差更新后，重新计算每张敏感度和所需张数.

<a id="p22-curve"></a>
## 曲线扭曲与向量匹配

总DV01描述收益率曲线平移. 另设两个期限桶，组合敏感度为(20,000,8,055)，每张期货为(45,16.7)，加总仍为28,055和61.7，平移匹配仍得到455张.

但若第一桶上升10bp、第二桶下降10bp，组合变化为

$$
\Delta V_p=-20,000\times10-8,055\times(-10)=-119,450.
$$

空头期货则给

$$
\Delta V_f=455[45\times10+16.7\times(-10)]
=128,765.
$$

净额9,315美元来自两个敏感度向量不成比例，一个标量张数无法同时匹配两桶. 使用不同期限的合约可将问题写成向量匹配，同时加入各合约的交易与资金成本.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-b.svg" alt="平行移动、曲线扭曲与CTD变化：同一455张面对三个不同风险问题. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">平移匹配不等于曲线匹配</p><p class="pfh-figure-note">教学两桶扭曲 +10 / −10 bp；仍用455张</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">债券变化</span><div class="pfh-cash-reading"><strong>-119,450</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:92.7658913524638%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货变化</span><div class="pfh-cash-reading"><strong>128,765</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净变化</span><div class="pfh-cash-reading"><strong>9,315</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.2341086475362095%"></span></div></li></ul></div></figure>

<div data-experiment-slot="EXP-P22-DV01"></div>

在实验中比较平移、扭曲和CTD变化，再重算张数. 采用一阶近似，未加入凸性；大幅利率变化需按完整价格关系重估.

<a id="p22-funding"></a>
## 价格变化与交收资金

收益率下降时，期货空头补款与债券市值上升可同时发生. 未交收或尚未出售的债券增值无法直接补款，现金安排取决于日结算、保证金规则、可用资金与证券交收日期.

直接卖出部分债券会减少库存，缩小预期拍卖头寸会减少未来敞口，改用其他期限工具会改变基差和资金要求. 按这些变化比较替代方案.

<a id="p22-exercises"></a>
## 练习与解析

**解释题.** 为什么一个CF为0.9的合约，不意味着其DV01就是债券的90%？

CF为无量纲发票换算因子. 固定CTD和基差时，券价格对期货价格的敏感度约为CF，因此期货DV01约为券DV01除以CF. 还需给定券DV01，才能计算美元/bp.

**迁移题.** 保持455张，期货DV01变为58，利率平移上升5bp，忽略凸性和其他变化. 合并损益及新理想张数是多少？

残余 $28,055-455\times58=1,665$ 美元/bp，合并约亏8,325美元. 新理想张数 $28,055/58\approx483.707$.

[^3y]: Jonathan Kronstein / CME Group，[Hedging 3-Year Note Issuance](https://www.cmegroup.com/education/articles-and-reports/hedging-3-year-note-issuance)，2020年教学情景全文，尤其Sep1/3/8/15与DV01算例段.
[^treas]: CME Group，[Understanding Treasury Futures](https://www.cmegroup.com/education/files/understanding-treasury-futures.pdf)，转换因子、CTD及基差单元，印刷pp5–8；BPV风险与对冲单元，印刷pp11–13.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
