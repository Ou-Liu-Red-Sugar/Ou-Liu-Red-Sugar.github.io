{
  "title": "保证金与对冲中的现金压力",
  "description": "中途现金决定期货对冲能否持有至采购日. 结算损益、保证金补款和及时可用资金共同决定每次继续或平仓；平仓后停止计入期货损益.",
  "layout": "entry",
  "notebookid": "zh-p23",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p23"
}

中途现金决定期货对冲能否持有至采购日. 结算损益、保证金补款和及时可用资金共同决定每次继续或平仓；平仓后停止计入期货损益.

<a id="p23-setup"></a>
## 资产位置与可用日期

采购者将在未来购买15,000蒲式耳玉米，现有106,000美元自有现金，其中90,000存款到采购日才可用，当前可用于对冲16,000.

沿用CME采购例：3张多头，每张5,000蒲式耳，起点5.75. 设中途价格5.45、5.1、6.25，每张初始保证金3,000、维持要求2,000；先结算，余额低于维持要求时补至初始要求，补不齐则按显示价平仓并返还余额. 中途路径、保证金和处置方式为教学参数，未计交易费和滑点.[^grain23]

建仓将9,000从自由现金转入保证金账户，资产分为90,000受限存款、9,000保证金和7,000自由现金，合计106,000. 随后期货损益改变净财富.

<a id="p23-recursion"></a>
## 结算与补款递推

设仍持有的张数为 $N$，期货价从 $F_{k-1}$ 变为 $F_k$. 多头本次结算损益为

$$
VM_k=5,000N(F_k-F_{k-1}).
$$

结算前保证金为 $M_{k-1}$，结算后 $M_k^-=M_{k-1}+VM_k$. 若 $M_k^-<2,000N$，应补 $A_k=3,000N-M_k^-$；否则为零. 比较应补款与自由现金加及时可提承诺额度，足额时才执行补款.

第一次跌到5.45，损失 $15,000\times(-0.30)=-4,500$. 账户从9,000降到4,500，低于6,000维持要求，应补4,500. 7,000自由现金足够，所以补至9,000，自由现金变2,500.

跌至5.1再损失 $15,000\times(-0.35)=-5,250$，保证金由9,000降至3,750，应补5,250，自由现金2,500，缺口2,750.

| 事件 | 本次VM | 结算后账户 | 应补款 | 截止前自由现金 | 动作后账户 | 动作后自由现金 |
|---|---:|---:|---:|---:|---:|---:|
| 建仓 | 0 | 9,000 | — | 7,000 | 9,000 | 7,000 |
| 5.75→5.45 | −4,500 | 4,500 | 4,500 | 7,000 | 9,000 | 2,500 |
| 5.45→5.10 | −5,250 | 3,750 | 5,250 | 2,500 | 0，平仓 | 6,250 |
| 后来5.10→6.25 | 0 | 0 | 0 | 6,250 | 0 | 6,250 |

本例在第二次检查失败后直接平仓，返还3,750保证金，自由现金为 $2,500+3,750=6,250$，期货张数归零.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P23-a.svg" alt="资金分在不同地点和日期：第二次要求补款时，90,000仍不能调用. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">三张采购对冲的现金过程</p><p class="pfh-figure-note">第2压力点平仓，随后期货持仓为零</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>自由现金</span></li></ul><p class="pfh-axis-label">美元；图示保证金与自由现金</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-1,080</span><span style="top:75.0%">1,710</span><span style="top:50.0%">4,500</span><span style="top:25.0%">7,290</span><span style="top:0.0%">10,080</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 229.00,225.00 363.00,128.23 497.00,241.13 631.00,321.77 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,171.24 229.00,171.24 363.00,268.01 497.00,268.01 631.00,187.37 765.00,187.37" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="229.0" cy="224.99999999999994" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="363.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="497.0" cy="241.12903225806468" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="631.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="171.23655913978496" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="229.0" cy="171.23655913978496" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="363.0" cy="268.010752688172" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="497.0" cy="268.010752688172" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="631.0" cy="187.36559139784956" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="187.36559139784956" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">建仓</span><span class="" style="left:60.0%">第2记账</span><span class="last" style="left:100.0%">无仓位</span></div></div></div></figure>

<a id="p23-terminal"></a>
## 采购成本与剩余现金

采购日存款可用，账户有 $90,000+6,250=96,250$ 现金. 当地现货价6.20，支付93,000采购，剩余现金3,250. 期间期货累计损失9,750，所以有效采购成本为

$$
93,000-(-9,750)=102,750.
$$

各方案购入同数量玉米，日期与现货价相同，可按有效采购成本和剩余现金比较. 若计算终点净资产，再按一致口径计入玉米库存.

若额外资金使3张持续持有，5.1到6.25会带来17,250，累计期货损益由−9,750变为+7,500. 两条结果的差异由中途融资是否可得决定.

<a id="p23-alternatives"></a>
## 数量与融资替代

改为2张覆盖10,000蒲式耳，剩5,000未对冲. 初始保证金6,000，自由现金10,000；前两次VM为−3,000、−3,500，补款后剩3,500自由现金. 反弹带来11,500，累计盈利5,000，采购成本88,000，剩余18,000.

建仓前取得3,000承诺额度，则第二次借2,750即可继续. 十天后按10%年单利偿还，利息为

$$
2,750\times10\%\times\frac{10}{365}\approx7.534.
$$

3张累计期货收入7,500，有效采购成本 $93,000-7,500+7.534\approx85,507.534$，自有剩余现金约20,492.466. 偿还本金同时减少现金与负债，融资费用计利息.

| 安排 | 能否完整持有原头寸 | 期货累计损益 | 利息 | 有效采购成本 | 采购后自有现金 |
|---|---|---:|---:|---:|---:|
| 3张，无融资 | 否，第二次退出 | −9,750 | 0 | 102,750 | 3,250 |
| 2张 | 是，但数量不完全覆盖 | +5,000 | 0 | 88,000 | 18,000 |
| 3张，预先承诺额度 | 是，借2,750 | +7,500 | 7.534 | 85,507.534 | 20,492.466 |
| 不对冲 | 不适用 | 0 | 0 | 93,000 | 13,000 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P23-b.svg" alt="同一初始资金下，比较四种安排的有效采购成本. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同一采购日，不同存续路径</p><p class="pfh-figure-note">四方案都从106,000自有资金出发</p><p class="pfh-axis-label">单位：有效采购成本，美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">3张，停仓</span><div class="pfh-cash-reading"><strong>102,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">2张，存续</span><div class="pfh-cash-reading"><strong>88,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:85.64476885644768%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">3张，承诺融资</span><div class="pfh-cash-reading"><strong>85,507.534</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:83.21901119221411%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">不对冲</span><div class="pfh-cash-reading"><strong>93,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:90.51094890510949%"></span></div></li></ul></div></figure>

<a id="p23-reality"></a>
## 保证金压力与资金可达性

BIS对2020和2022年利率互换压力的分析显示，变动保证金和模型初始保证金可以同时上升. Graph A1的VM按五日累计，IM采用五日平仓期，分别反映价格变动结算和履约抵押需求.[^bis23]

FSB抵押品管理建议检查占用状态、资产资格、折扣率、币种、账户地点和到达时间.[^fsb23] 出售资产的结算日、银行转账时间及额度提款条件，共同决定截止前可达资金.

<div data-experiment-slot="EXP-P23-LIQUIDITY"></div>

实验中，3张且额度为0时在第二次检查退出，额度2,000仍缺750；额度3,000可继续3张，2张无融资则保留5,000蒲式耳采购敞口.

<a id="p23-exercises"></a>
## 练习与解析

**解释题.** 在第二次追保前，资产包括90,000存款、3,750保证金和2,500自由现金，为什么仍不能继续？

90,000存款尚不可用，5,250应补款只能动用2,500自由现金，缺口2,750. 总资产96,250无法改变当期付款来源.

**迁移题.** 承诺额度为2,000，第二次应补5,250时，按本实验规则采取什么动作？

及时可达资金4,500，仍缺750. 本例先判断能否足额补款，失败时不提款，在5.1平仓并返还保证金.

[^grain23]: CME Group，[Grain and Oilseed Hedgers Guide](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch1保证金机制与ch3采购单元.
[^bis23]: Benjamin H. Cohen、Kevin Tracol，BIS Quarterly Review March 2023，[Box A: Market turbulence and soaring margins](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf)，印刷pp5–6与Graph A1图注.
[^fsb23]: FSB，[Liquidity Preparedness for Margin and Collateral Calls](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3印刷pp18–20、Recommendations 6–8.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
