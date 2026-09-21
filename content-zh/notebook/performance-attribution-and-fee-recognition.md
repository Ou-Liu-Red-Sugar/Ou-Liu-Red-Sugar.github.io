{
  "title": "表现评价与归因：资金、费用与基准",
  "description": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因.",
  "layout": "entry",
  "notebookid": "zh-p12",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p12"
}

同一现金路径可以同时产生金额损益、时间加权回报和资金加权回报；三者回答的问题不同. 评价前先固定对象、期间、现金流与基准，再把费用确认/付款和模型归因接到相应层级.

<a id="p12-objects"></a>
## 金额结果与组合回报

教学例有两个等长期间，初始投入100. 第一期毛回报10%，价值升至110；此时追加100，第二期以210开始，下跌10%后终值189. 总投入200，金额损失11；第二笔100只参与第二期.

在外部现金流处分开估值，时间加权回报连接各子期：

$$
1+R_{TWR}=\frac{110}{100}\times\frac{189}{210}
=1.10\times0.90=0.99.
$$

两期TWR为−1%. 第二期承担下跌的本金较多，金额结果和资金加权回报相应受影响.[^gips12]

<a id="p12-irr"></a>
## 资金加权回报

从投资者视角，时点0付100，时点1再付100，时点2收189. 设每个等长期间的资金加权回报为 $r$，则

$$
100(1+r)^2+100(1+r)=189.
$$

令 $x=1+r>0$，方程正根给出 $r\approx-3.713\%$. 这是每个等长期间的回报，年化需要另给期间长度.

本例先后投入、最终收回，对应唯一正增长因子根. 多次改变收付方向的现金流可能有多个 IRR，需保留完整日期现金比较.

<a id="p12-fees"></a>
## 费用与投入基数

现在每期期末扣2费用，并规定第一期费用在追加100之前确认并支付. 路径为：100涨至110，扣2后108；再投入100到208；下跌10%到187.2，再扣2，最后185.2.

| 口径 | 第一期末入金前净值 | 第二期开端 | 终值 | 金额损益 | 两期TWR | 每期MWR |
|---|---:|---:|---:|---:|---:|---:|
| 毛回报 | 110 | 210 | 189 | −11 | −1.000% | −3.713% |
| 入金前确认费用 | 108 | 208 | 185.2 | −14.8 | −3.838% | −5.017% |

按费用后的子期净值计算 TWR：

$$
\frac{108}{100}\times\frac{185.2}{208}-1
\approx-3.838\%.
$$

净MWR则把现金流方程中的189改为185.2，得到约−5.017%/期. 毛净终值只差3.8而非4，因为第一期少投入的2没有在第二期承受10%跌幅. 费用的金额、确认日期和支付日期都要进入账本. [^fees12]

<a id="p12-recognition"></a>
## 费用确认与支付

若费用2已在入金前应计、稍后才支付，入金前现金110、应付费用2，净资产108. 追加100后现金210、负债2，净资产208；支付时现金和负债同时减少2，净资产仍为208，TWR保持不变.

另一种教学安排则真的改变费用归属：入金前尚未确认费用，先把110和新增100合成210，再立即确认并扣2到208，其间没有价格变化. 外部入金处的净值切点不同：第一子期回报是10%，第二子期从210开始、以185.2结束，因此

$$
1.10\times\frac{185.2}{210}-1
\approx-2.99\%.
$$

两种安排完成“入金加扣款”以后都是208，最终也都是185.2，外部现金流日期相同，所以MWR仍约为−5.017%/期. 差别来自费用在外部流切点前还是后被确认，从而落入不同子期的净回报. GIPS 2.B.4建议按应计反映管理费，以匹配经济发生而非只跟现金付款走. [^fees12]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-a.svg" alt="费用确认与付款在入金边界两侧的账户变化."></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同一个终值，不同费用归属切点</p><p class="pfh-figure-note">外部现金100在第1期后投入；每期费用2</p><ol class="pfh-flow-steps"><li><strong>基准：入金前确认</strong><p>100 → 110 → 108 → 208 → 185.2</p><p>入金切点净资产108；TWR −3.838%</p></li><li><strong>仅延期支付</strong><p>入金前现金110，应付费用2，NAV108</p><p>支付时现金/负债同减；TWR不变</p></li><li><strong>入金后才确认</strong><p>100 → 110 → 210 → 208 → 185.2</p><p>入金切点净资产110；TWR −2.990%</p></li></ol></div></figure>

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-b.svg" alt="费用确认分支：相同终值与MWR，可以对应不同的净TWR切段. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">金额、时间加权和资金加权不是同一量</p><p class="pfh-figure-note">两个等长期间；MWR为每期间，不是年化</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>两期TWR</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>每期MWR</span></li></ul><p class="pfh-axis-label">%</p><div class="pfh-plot" style="--pfh-y-label-ch:6"><div class="pfh-y-ticks"><span style="top:100.0%">-5.50</span><span style="top:75.0%">-4.25</span><span style="top:50.0%">-3.01</span><span style="top:25.0%">-1.76</span><span style="top:0.0%">-0.52</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 430.00,264.98 765.00,224.13" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,258.92 430.00,321.77 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.22580645161287" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="264.9812215573822" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="224.12578395665554" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="258.9178460085559" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">无费用</span><span class="" style="left:50.0%">入金前确认</span><span class="last" style="left:100.0%">入金后确认</span></div></div></div></figure>

<div data-experiment-slot="EXP-P12-PERFORMANCE"></div>

四种费用时序用于比较：毛回报、入金前确认、已应计但晚付款、入金后才确认. “已应计但晚付款”和“入金前确认”应有相同TWR；不同确认时点可有相同终值和MWR但不同TWR，差异来自外部流切点的净资产.

<a id="p12-attribution"></a>
## 模型归因

P27的BusEq/FF3模型使用同版本120个月数据. 月平均超额回报约1.97%，分解为截距0.661%、市场贡献1.284%、SMB贡献0.01%、HML贡献0.015%. 这些量对应回归样本中的均值分解.

金额结果按现金账计算，组合回报按子期连接，回归归因按指定模型分解. 多期复利会产生交叉项，各归因贡献分别复合后再加总通常无法恢复总回报.

保证金调拨转移账户资产，借款同时增加现金和负债，追加自有资金构成外部流. P24的采购对冲按有效采购成本评价，与投资账户的回报目标不同.

<a id="p12-exercises"></a>
## 练习与解析

**解释题.** 毛终值189、总投入200，为什么TWR是−1%，而金额损失11？

TWR把10%与−10%依次复合，不受中间新增本金大小影响. 金额亏损则反映第二期有更多本金承受下跌. 两者分别评价单位资金连续表现与投资者实际盈亏，所以不需要数值相等.

**迁移题.** 费用在入金后才首次确认，且当刻无价格变化，终值185.2. 净TWR和MWR是什么？若只是延迟支付已确认费用呢？

入金后首次确认时，净TWR约−2.99%，MWR解 $100(1+r)^2+100(1+r)=185.2$，约−5.017%/期. 若已在入金前应计，第一期净值108，净TWR约−3.838%；付款时现金和应付费用同减.

[^gips12]: CFA Institute，[GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/)，1.A.35、2.A.23–24、2.A.29：时间加权、资金加权及外部流估值单元.
[^fees12]: 同一GIPS手册，2.A.30完整费用方法单元与2.B.4完整费用应计单元. 这里采用其费用计量与应计/付款区分.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
