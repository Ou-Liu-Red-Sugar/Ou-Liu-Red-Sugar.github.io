{
  "title": "基差与资金费率交易：结算、融资与退出",
  "description": "基差交易同时包含现货损益、期货结算、保证金与融资现金. 以下分别计算美元计价MBT到期安排和USDT线性永续安排. 合约单位、结算及funding/P&L采用引用规则，价格、费用、保证金和借款为教学输入.",
  "layout": "entry",
  "notebookid": "zh-p32",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p32"
}

基差交易同时包含现货损益、期货结算、保证金与融资现金. 以下分别计算美元计价MBT到期安排和USDT线性永续安排. 合约单位、结算及funding/P&L采用引用规则，价格、费用、保证金和借款为教学输入.

<a id="p32-dated"></a>
## 基差与退出尾差

先持有1 BTC现货，同时卖出覆盖1 BTC的期货. CME Micro Bitcoin Futures每张对应0.1 BTC，因此需要空10张；它按指定BRR参考价格现金结算，不把另一个账户的BTC拿来实物交割. [^mbt32]

令现货买入价为 $S_0$，期货卖出价为 $F_0$. 期末现货实际卖价为 $S_T$，期货最终结算参考价为 $F_T$. 数量均为1 BTC，暂不计费用，则

$$
\begin{aligned}
\Pi_{\rm gross}
&=(S_T-S_0)+(F_0-F_T)\\
&=(F_0-S_0)+(S_T-F_T).
\end{aligned}
$$

毛收益为建仓基差加退出尾差. 数量、时点、可执行现货价和结算参考价对齐时，尾差为零；异地现货退出会留下差额.

设 $S_0=50{,}000$、$F_0=51{,}500$，第30天期货结算52,000、现货卖价51,950，则毛收益 $1{,}500-50=1{,}450$. 市场分割和融资约束会影响这种安排的可实施性.[^bis32]

期货建仓按保证金和费用记现金，名义额51,500用于计量价格敞口. 随后按结算价格变动支付或收取VM.

<a id="p32-funding"></a>
## 保证金现金缺口

我们有自有现金36,000，另借30,000，借款单利年息8%. 合计66,000中，50,000用于现货，12,000转入期货保证金. 现货开仓费用为5个基点，即25；期货每张每边2美元，开仓20. 因此自由现金只有

$$66{,}000-50{,}000-12{,}000-25-20=3{,}955.$$

保证金保留为资产，借款30,000记负债. 另设现货位于其他账户，出售、结算及转入无法赶上期货补款截止.

期货由51,500升至54,500、56,000. 初始和维持要求从12,000/10,000在第二压力点升为14,000/12,000.

| 事件 | 期货现金变化 | 补款前保证金 | 应补至初始要求 | 可用自由现金 | 结果 |
|---|---:|---:|---:|---:|---|
| 建仓 | 0 | 12,000 | 0 | 3,955 | 仓位建立 |
| 期货54,500 | −3,000 | 9,000 | 3,000 | 3,955 | 补足后剩955 |
| 期货56,000，要求提高 | −1,500 | 10,500 | 3,500 | 955 | 缺2,545 |

第二压力点保证金10,500高于旧维持线10,000，却低于新线12,000，因此触发补款至14,000. 价格损益与保证金模型变动分别造成资金需求.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-a.svg" alt="期货账户在两个压力点的余额、应补款和可用现金. 现货账户不与之自动净额结算. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">美元carry的过程资金</p><p class="pfh-figure-note">第二压力点要求提高；现货不能及时转入</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>补款前保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>当时自由现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="2 5"/></svg><span>目标初始保证金</span></li></ul><p class="pfh-axis-label">美元；应补款分别0、3,000、3,500</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-610.4</span><span style="top:75.0%">3,433.55</span><span style="top:50.0%">7,477.5</span><span style="top:25.00000000000001%">11,521.45</span><span style="top:0.0%">15,565.4</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000003" x2="765" y2="165.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,202.41 765.00,180.16" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,277.26 430.00,277.26 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,157.90 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="202.41069993447002" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="180.15523188961288" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">初始</span><span class="" style="left:50.0%">F54,500</span><span class="last" style="left:100.0%">F56,000</span></div></div></div></figure>

此时现货价53,000，账面盈利3,000；跨账户转账时限使其无法支付当前缺口.

<a id="p32-exit"></a>
## 退出与融资路径

无追加资金分支设在第10天以现货53,000、期货56,000关闭两腿.

现货赚3,000、期货亏4,500，毛亏1,500. 双边费用 $25+20+26.5+20=91.5$，借款利息 $30{,}000\times8\%\times10/365\approx65.753$. 净损失为

$$-1{,}500-91.5-65.753\approx-1{,}657.253\text{ USD}.$$

及时追加2,545自有资金，与原955补足3,500，保证金恢复14,000. 期货随后由56,000降至52,000，空头获4,000，保证金增至18,000，再结算两腿. 追加款记外部本金.

| 项目 | 第10天退出 | 追加后第30天退出 |
|---|---:|---:|
| 现货损益 | +3,000 | +1,950 |
| 期货损益 | −4,500 | −500 |
| 两腿毛损益 | −1,500 | +1,450 |
| 全部交易费 | −91.500 | −90.975 |
| 借款利息 | −65.753 | −197.26 |
| 净损益 | **−1,657.253** | **+1,161.765** |
| 累计投入自有本金 | 36,000 | 38,545 |
| 偿清贷款后现金 | 34,342.747 | 39,706.765 |

贷款本金在终点现金偿还，同时消灭负债；损益只计利息与交易结果. 保证金释放为资产内部转移.

存续分支净收益除原始自有资金约为3.227%，除最大累计投入38,545约为3.014%. 两个比率对应不同资本分母；若要计算TWR或MWR，应把2,545的实际追加日期纳入日期现金表.

减少数量会降低资金需求并保留部分敞口，事先授信会增加可用资金及融资成本. 比较时固定风险目标，核对交易、清算及客户到账日期.[^cash32]

<a id="p32-perpetual"></a>
## 永续资金费

现在换到独立的USDT账户：自有66,000 USDT，买1 BTC现货50,000，卖1 BTC线性永续50,200. 退出时现货51,000，永续51,100. 因此两腿价格损益为 $1{,}000-900=100$ USDT.

永续没有本例那样预先给定的最终到期收敛日. 线性合约的每次资金费以持仓数量、该次标记价和资金费率计算；正费率由多头付给空头，负费率反过来. [^bybit32] 本例空头跨三个给定资金事件，记录如下：

| 资金事件 | 标记价，USDT/BTC | 每次费率 | 空头现金 |
|---|---:|---:|---:|
| 1 | 50,000 | +0.01% | +5.00 |
| 2 | 52,000 | −0.02% | −10.40 |
| 3 | 51,000 | +0.015% | +7.65 |
| 合计 | — | 不把费率直接相加代替金额 | **+2.25** |

保证金12,000，现货开仓费25、永续开仓费 $50{,}200\times0.02\%=10.04$，自由现金3,964.96. 三次funding后分别为3,969.96、3,959.56、3,967.21；强平判断还需逐点维持保证金规则.

现货双边费50.50，永续双边费20.26，总费70.76. 完整结果为

$$\Pi=1{,}000-900+2.25-70.76=31.49\text{ USDT}.$$

本路径价格损益100加资金费2.25，再扣70.76费用，净得31.49 USDT. 该计算采用线性USDT合约；反向合约需改用对应的数量和计价公式.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-b.svg" alt="独立USDT账户的funding现金与净收益分解. 正funding收入不等于整个安排盈利. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">USDT永续：funding并非全部收益</p><p class="pfh-figure-note">独立币种账户；总费用70.76 USDT</p><p class="pfh-axis-label">单位：USDT</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件1</span><div class="pfh-cash-reading"><strong>5</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:15.878056525881231%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件2</span><div class="pfh-cash-reading"><strong>-10.4</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.02635757383297%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件3</span><div class="pfh-cash-reading"><strong>7.65</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:24.29342648459829%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">funding合计</span><div class="pfh-cash-reading"><strong>2.25</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.145125436646555%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净所得</span><div class="pfh-cash-reading"><strong>31.49</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

线性永续的多头现金由价格变动扣funding项构成，实际费率、持仓资格、结算频率及扣款由交易所规则确定.[^perp32]

<a id="p32-lab"></a>
## 双账户实验

<div data-experiment-slot="EXP-P32-CARRY"></div>

美元分支比较无追加与及时追加2,545，分别列示损益、资本投入及最终现金. USDT分支逐次按标记价和费率计算空头收付.

每8小时0.01%按固定费率外推，全年 $3\times365=1{,}095$ 次，费率合计10.95%. 实际金额随费率、间隔、标记名义量及资格变化；Bybit各交易对间隔可不同，并可调整结算频率.[^bybit32]

<a id="p32-exercises"></a>
## 练习与解析

**解释题.** 第二压力点现货账面盈利3,000，为什么仍不能认定3,500应补款已解决？

自由现金955，尚缺2,545. 本例现货出售和转入赶不上截止，故账面盈利不能用于此次补款.

**迁移题.** 若期货仍按52,000结算，但现货实际只能卖51,900，存续分支净收益如何变化？

现货少收50，卖出费少0.025，净收益减少49.975至约1,111.79美元.

**辨认题.** 每次0.01%、每8小时一次，一年简单外推是多少，为什么它不是预期净回报？

固定条件下全年费率合计10.95%. 净回报另计价格腿、费用与融资，并按投入资本及现金日期计算.

[^mbt32]: [CME Rulebook Chapter348: Micro Bitcoin Futures](https://www.cmegroup.com/rulebook/CME/III/300/348.pdf)，常规合约单位及最终现金结算；[Cryptocurrency Futures FAQ](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html)，交易与清算时钟相关回答.
[^bis32]: Schmeling、Schrimpf、Todorov，[Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf)，BIS WP1087，2023，§2.1–2.2及§3.3；用于资金分割与实施条件.
[^cash32]: [CME Money Calculations for Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，普通期货VM单元；[FSB Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3.
[^bybit32]: [Bybit Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation)，2026-05-12版本，When Charged、How Deducted与USDT Perpetual单元；[Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate)及[P&L FAQ](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation)，相应线性公式.
[^perp32]: Ackerer、Hugonnier、Jermann，[Perpetual Futures Pricing](https://arxiv.org/pdf/2310.118v2)，固定v2，2024-09-04，§2–3及p8式(6). 原文p12口头符号标签与现金式方向存在冲突，本文按式(6)计算收付.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
