{
  "title": "表现评价与归因：资金、费用与基准",
  "description": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因。",
  "layout": "entry",
  "notebookid": "zh-p12",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p12"
}

同一条资金路径可以同时有负的金额损益、另一种幅度的时间加权回报，以及再不同的资金加权回报。它们不必矛盾，因为回答的问题不同。评价一项安排时，最先要做的不是选择好看的百分比，而是确定评价对象、期间、现金流与基准。本篇让你用同一组数字把这些口径全部重建出来，再分清费用、因子归因与决策质量。

<a id="p12-objects"></a>
## 1. 金额结果、投资者体验与管理表现

先设两个等长期间，初始投入100。第一期资产毛收益10%，所以变成110；这时再投入100，第二期期初有210。第二期下跌10%，期末189。总投入200、最后189，金额亏损11。这是实际资金盈亏，但 $-11/200=-5.5\%$ 不是正确处理资金时点后的同期间收益率：第二笔100只参与了一个期间。

若想问组合本身每段管理表现，可以在外部出入金处切开，用时间加权回报（TWR）连接子期：

$$
1+R_{TWR}=\frac{110}{100}\times\frac{189}{210}
=1.10\times0.90=0.99.
$$

因此两期TWR为−1%。第一期上涨发生在较少资金上，第二期下跌发生在较多资金上，所以投资者的资金体验更差，正是资金加权回报（MWR）要反映的事。GIPS对外部现金流附近的估值和回报连接有明确说明，但这里是教学例，不声称完成了全套合规报告。[^gips12]

<a id="p12-irr"></a>
## 2. 用现金流方程求MWR，而不是给平均收益换个名字

从投资者视角，时点0付100，时点1再付100，时点2收189。设每个等长期间的资金加权回报为 $r$，则

$$
100(1+r)^2+100(1+r)=189.
$$

令 $x=1+r>0$，解 $100x^2+100x-189=0$，正根给 $r=-3.7126116\%$。这是**每个等长期间**的回报，不是两期累计，也不是自动年化；必须知道这两个期间究竟是月、季还是年，才能进一步转换。

本现金流在初始和中途均为投入，最后一次收回，给出唯一正的增长因子根；更复杂、正负多次切换的现金流可能有多个IRR，不能随意选最好看的一个。现金流方程比“IRR工具输出一个数”更重要，因为它暴露了每笔金额参与了多久。

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-a.svg" alt="同一路径的事件顺序：第二笔100不参与第一期上涨，不能把所有本金放在同一分母。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同一个终值，不同费用归属切点</p><p class="pfh-figure-note">外部现金100在第1期后投入；每期费用2</p><ol class="pfh-flow-steps"><li><strong>基准：入金前确认</strong><p>100 → 110 → 108 → 208 → 185.2</p><p>入金切点净资产108；TWR −3.83846%</p></li><li><strong>仅延期支付</strong><p>入金前现金110，应付费用2，NAV108</p><p>支付时现金/负债同减；TWR不变</p></li><li><strong>入金后才确认</strong><p>100 → 110 → 210 → 208 → 185.2</p><p>入金切点净资产110；TWR −2.99048%</p></li></ol></div></figure>

<a id="p12-fees"></a>
## 3. 扣费改变净回报，也改变下一期资产基数

现在每期期末扣2费用，并规定第一期费用在追加100之前确认并支付。路径为：100涨至110，扣2后108；再投入100到208；下跌10%到187.2，再扣2，最后185.2。

| 口径 | 第一期末入金前净值 | 第二期开端 | 终值 | 金额损益 | 两期TWR | 每期MWR |
|---|---:|---:|---:|---:|---:|---:|
| 毛回报 | 110 | 210 | 189 | −11 | −1.000000% | −3.712612% |
| 入金前确认费用 | 108 | 208 | 185.2 | −14.8 | −3.838462% | −5.017242% |

净TWR不是简单把毛回报减4个百分点，而是

$$
\frac{108}{100}\times\frac{185.2}{208}-1
=-3.8384615\%.
$$

净MWR则把现金流方程中的189改为185.2，得到−5.0172424%/期。毛净终值只差3.8而非4，因为第一期少投入的2没有在第二期承受10%跌幅。费用的金额、确认日期和支付日期都要进入账本。[^fees12]

<a id="p12-recognition"></a>
## 4. 费用发生与付款，是两个事件

这是一个值得慢慢推的区别。假如第一期费用2已经应计，只是稍后才付款，入金前净资产仍为108：现金可以是110，但同时有2应付费用。入金100后现金210、负债2，净资产208；随后付2，现金208、负债0，净资产仍208。付款不是新的损失，不能再扣一次NAV。只延迟支付，原净TWR不变。

另一种教学安排则真的改变费用归属：入金前尚未确认费用，先把110和新增100合成210，再立即确认并扣2到208，其间没有价格变化。外部入金处的净值切点不同：第一子期回报是10%，第二子期从210开始、以185.2结束，因此

$$
1.10\times\frac{185.2}{210}-1
=-2.9904762\%.
$$

两种安排完成“入金加扣款”以后都是208，最终也都是185.2，外部现金流日期相同，所以MWR仍为−5.0172424%/期。差别不是凭空改变了下一期本金，而是费用在外部流切点前还是后被确认，从而落入了不同子期的净回报。GIPS 2.B.4鼓励按应计反映管理费，正是为了更贴近经济发生而非只跟现金付款走。[^fees12]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-b.svg" alt="费用确认分支：相同终值与MWR，可以对应不同的净TWR切段。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">金额、时间加权和资金加权不是同一量</p><p class="pfh-figure-note">两个等长期间；MWR为每期间，不是年化</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>两期TWR</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>每期MWR</span></li></ul><p class="pfh-axis-label">%</p><div class="pfh-plot" style="--pfh-y-label-ch:6"><div class="pfh-y-ticks"><span style="top:100.0%">-5.50</span><span style="top:75.0%">-4.25</span><span style="top:50.0%">-3.01</span><span style="top:25.0%">-1.76</span><span style="top:0.0%">-0.52</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 430.00,264.98 765.00,224.13" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,258.92 430.00,321.77 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.22580645161287" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="264.9812215573822" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="224.12578395665554" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="258.9178460085559" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">无费用</span><span class="" style="left:50.0%">入金前确认</span><span class="last" style="left:100.0%">入金后确认</span></div></div></div></figure>

<div data-experiment-slot="EXP-P12-PERFORMANCE"></div>

实验分别提供毛回报、入金前确认、已应计但晚付款、入金后才确认四种显示。先预测哪两种TWR相同，再看账本；再预测哪些MWR相同。不要只换标签，要看入金前资产负债和子期起点。

<a id="p12-attribution"></a>
## 5. 归因在另一个层面，不能替代现金回报

P27用真实BusEq/FF3同版本120个月数据得到超额收益的样本投影。FF3的月平均截距0.6608288%、市场贡献1.2842517%、SMB贡献0.0098444%、HML贡献0.0154084%，加总约1.9703333%。这说明“在选定模型下如何解释样本均值”，不是本节这笔100加100投资的实际alpha，也不是一只真实基金扣费后的收益。两套数据对象不能拼起来。

多期复利也不是把这些贡献各自复合后再相加。金额结果用完整现金账；组合回报用子期连接；模型归因用指定回归；若还要比较管理技能，就要考虑基准适合性、样本选择、费用、杠杆和可实施性。每层都需要新的证据。

对期货或期权安排尤其要小心：保证金转入是内部资产迁移，借款本金伴随负债，追加自有资金是外部流。它们都可能让账户余额上升，却不等于赚了钱。P24的采购预算还应报告有效采购成本，不能因为用了期货就强行生成一个以初始保证金为分母的投资回报率。

最后，决策质量不等于单次结果。一个事前合理且资金可行的安排可以遇到不利情景；一个事前无法承受的仓位也可能侥幸赚钱。评价的作用是找出市场暴露、选择、费用、融资与判断各自的贡献，不是把好运包装成能力。

<a id="p12-exercises"></a>
## 6. 自测与解析

**解释题。** 毛终值189、总投入200，为什么TWR是−1%，而金额损失11？

TWR把10%与−10%依次复合，不受中间新增本金大小影响。金额亏损则反映第二期有更多本金承受下跌。两者分别评价单位资金连续表现与投资者实际盈亏，所以不需要数值相等。

**迁移题。** 费用在入金后才首次确认，且当刻无价格变化，终值185.2。净TWR和MWR是什么？若只是延迟支付已确认费用呢？

首次在入金后确认时，子期起点依次100和210，得到净TWR−2.9904762%；MWR解 $100(1+r)^2+100(1+r)=185.2$，为−5.0172424%/期。若费用已经在入金前应计，第一期净值仍108，净TWR保持−3.8384615%；支付时现金和应付费用同减，不再减净资产。

**完成标准。** 能在看到一个百分比之前先说明它属于谁、用了哪些时点和费用；能解释净值变化与现金变化何时不同，而不是把所有余额增加都叫收益。

[^gips12]: CFA Institute，[GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/)，1.A.35、2.A.23–24、2.A.29：时间加权、资金加权及外部流估值单元。
[^fees12]: 同一GIPS手册，2.A.30完整费用方法单元与2.B.4完整费用应计单元。这里采用其计量区分，不主张案例满足全部GIPS要求。

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

