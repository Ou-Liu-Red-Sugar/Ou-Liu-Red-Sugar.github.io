{
  "title": "基差与资金费率交易：先把资金账走完",
  "description": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求.",
  "layout": "entry",
  "notebookid": "zh-p32",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p32"
}

现货50,000、期货51,500，看起来像是把1,500放在桌上：买现货、卖期货，等到期就收钱. 我们先不争论它是否“套利”，而是把这个安排真正装进账户. 买现货要付钱，期货每天可能要补钱，借款要付息，两个账户之间的钱也未必能及时转移. 最后两腿相抵，只说明终点的一部分价格风险相抵，不能替我们完成这条资金路径.

这一篇先走美元计价的有到期期货，再换到USDT计价的线性永续. 二者是两个独立教学账，不能把两个净结果直接相加. 真实合约规格与规则有原文依据；下面的价格、费用、保证金和借款条件均为透明教学设定，不是当前报价、收益承诺或真实账户记录.

<a id="p32-dated"></a>
## 1. 到期基差收益怎样产生，又怎样留下尾差

先持有1 BTC现货，同时卖出覆盖1 BTC的期货. CME Micro Bitcoin Futures每张对应0.1 BTC，因此需要空10张；它按指定BRR参考价格现金结算，不把另一个账户的BTC拿来实物交割. [^mbt32]

令现货买入价为 $S_0$，期货卖出价为 $F_0$. 期末现货实际卖价为 $S_T$，期货最终结算参考价为 $F_T$. 数量均为1 BTC，暂不计费用，则

$$
\begin{aligned}
\Pi_{\rm gross}
&=(S_T-S_0)+(F_0-F_T)\\
&=(F_0-S_0)+(S_T-F_T).
\end{aligned}
$$

第一项是建立仓位时的基差；第二项是实际现货卖价与期货结算价之间仍留下的尾差. 只有在数量、退出时点、可执行价格和结算基准都按假设对齐时，才能进一步把第二项当成零. 现金结算本身并不保证你能在参考价卖掉另一场所的现货.

本例 $S_0=50{,}000$、$F_0=51{,}500$. 存续至第30天时，期货按52,000结算，现货实际卖价51,950. 于是毛收益为 $1{,}500-50=1{,}450$，不是1,500. BIS的carry研究提示我们关注市场分割与融资约束，但其历史组合统计与这里的一枚BTC账户不是同一个收益分母. [^bis32]

还有一个建仓细节：**卖出期货不等于在建仓时收到51,500现金**. 期货初始价值、保证金转移与逐日变动现金分别记录. 若把名义金额写进入金，一张本来需要融资的账户会凭空变得富裕.

<a id="p32-funding"></a>
## 2. 终点有利润，中途却可能先缺2,545

我们有自有现金36,000，另借30,000，借款单利年息8%. 合计66,000中，50,000用于现货，12,000转入期货保证金. 现货开仓费用为5个基点，即25；期货每张每边2美元，开仓20. 因此自由现金只有

$$66{,}000-50{,}000-12{,}000-25-20=3{,}955.$$

12,000保证金仍是资产，不是消费掉的费用；30,000借款同时是负债，不是投资收益. 为隔离资金问题，设现货在另一个账户，无法在保证金截止前卖出并转入.

期货从51,500先涨到54,500，再涨到56,000. 初始要求12,000、维持要求10,000；第二压力点要求提高至14,000／12,000. 所有这些要求是教学参数，不是券商现行保证金.

| 事件 | 期货现金变化 | 补款前保证金 | 应补至初始要求 | 可用自由现金 | 结果 |
|---|---:|---:|---:|---:|---|
| 建仓 | 0 | 12,000 | 0 | 3,955 | 仓位建立 |
| 期货54,500 | −3,000 | 9,000 | 3,000 | 3,955 | 补足后剩955 |
| 期货56,000，要求提高 | −1,500 | 10,500 | 3,500 | 955 | 缺2,545 |

读表时不要跳过“要求提高”这一列. 若仍用原维持线10,000，10,500不会触发同一个补款动作；模型IM变化和市场VM是两个不同原因. 资金准备要同时覆盖两者，而不是只看价格损失.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-a.svg" alt="期货账户在两个压力点的余额、应补款和可用现金. 现货账户不与之自动净额结算. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">美元carry的过程资金</p><p class="pfh-figure-note">第二压力点要求提高；现货不能及时转入</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>补款前保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>当时自由现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="2 5"/></svg><span>目标初始保证金</span></li></ul><p class="pfh-axis-label">美元；应补款分别0、3,000、3,500</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-610.40</span><span style="top:75.0%">3,433.55</span><span style="top:50.0%">7,477.50</span><span style="top:25.00000000000001%">11,521.45</span><span style="top:0.0%">15,565.40</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000003" x2="765" y2="165.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,202.41 765.00,180.16" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,277.26 430.00,277.26 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,157.90 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="202.41069993447002" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="180.15523188961288" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">初始</span><span class="" style="left:50.0%">F54,500</span><span class="last" style="left:100.0%">F56,000</span></div></div></div></figure>

此时现货价设为53,000，账面赚3,000. 经济上似乎足以覆盖缺口，操作上却来不及转移. 这正是为什么净资产为正和截止前可支付必须分开：我们不能拿一个尚未到账的变现假设完成今天的账户.

<a id="p32-exit"></a>
## 3. 被迫退出与活到终点，是两条不同路径

没有追加自有资金时，本例明确假设在第10天按现货53,000、期货56,000退出. 不能继续把后来期货回到52,000的收益记给已关闭仓位.

现货赚3,000，期货亏4,500，合计毛亏1,500. 两腿双边费用为 $25+20+26.50+20=91.50$；贷款利息为 $30{,}000\times8\%\times10/365=65.7534$. 净损失因此为

$$-1{,}500-91.50-65.7534=-1{,}657.2534\text{ 美元}.$$

另一分支是及时追加2,545自有资金. 这是外部本金，不是策略赚的钱. 它与原有955一同补足3,500，使保证金恢复14,000. 之后期货从56,000降至52,000，空头获得4,000，保证金变成18,000，再与现货退出一起结算.

| 项目 | 第10天退出 | 追加后第30天退出 |
|---|---:|---:|
| 现货损益 | +3,000 | +1,950 |
| 期货损益 | −4,500 | −500 |
| 两腿毛损益 | −1,500 | +1,450 |
| 全部交易费 | −91.500 | −90.975 |
| 借款利息 | −65.7534 | −197.2603 |
| 净损益 | **−1,657.2534** | **+1,161.7647** |
| 累计投入自有本金 | 36,000 | 38,545 |
| 偿清贷款后现金 | 34,342.7466 | 39,706.7647 |

贷款本金在最终现金中偿还，但不能又从净损益扣一次30,000，否则重复计算. 同理，保证金释放只是资产地点变化，不是额外利润.

存续分支的净收益除原始自有资金为3.2271%，除最大累计投入38,545为3.0140%. 这两个比率描述不同的资本占用，不是已经按追加日期处理的TWR或MWR，更不自动成为年化收益. 若要评价投资者实际经历，应把2,545的真实到账日期加入日期现金表再计算.

合理替代可以是减少数量、事先锁定可用授信、或不建立此安排. 它们改变的是资金需求、剩余基差或机会成本，不应只按这条已知路径的终值排名. 关于真实清算，成交时钟、清算业务日和客户到账仍要逐项核定. [^cash32]

<a id="p32-perpetual"></a>
## 4. 永续：价格变化之外，还有逐次funding现金

现在换到独立的USDT账户：自有66,000 USDT，买1 BTC现货50,000，卖1 BTC线性永续50,200. 退出时现货51,000，永续51,100. 因此两腿价格损益为 $1{,}000-900=100$ USDT.

永续没有本例那样预先给定的最终到期收敛日. 线性合约的每次资金费以持仓数量、该次标记价和资金费率计算；正费率由多头付给空头，负费率反过来. [^bybit32] 本例空头跨三个给定资金事件，记录如下：

| 资金事件 | 标记价，USDT/BTC | 每次费率 | 空头现金 |
|---|---:|---:|---:|
| 1 | 50,000 | +0.01% | +5.00 |
| 2 | 52,000 | −0.02% | −10.40 |
| 3 | 51,000 | +0.015% | +7.65 |
| 合计 | — | 不把费率直接相加代替金额 | **+2.25** |

以初始保证金12,000计，开仓现货费25、永续费 $50{,}200\times0.02\%=10.04$，自由现金3,964.96；三次funding后依次3,969.96、3,959.56、3,967.21. 这里没有提供逐点维持保证金条件，因而不能另画一条自称真实的强平线.

现货双边费50.50，永续双边费20.26，总费70.76. 完整结果为

$$\Pi=1{,}000-900+2.25-70.76=31.49\text{ USDT}.$$

少量价差和funding几乎被费用吃掉. 它说明检查费用很重要，不说明所有永续carry都只有这样的收益. 反向合约有不同的数量/计价公式，不能把这里的线性USDT公式直接移过去；也不能把31.49 USDT与前面的美元结果相加.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-b.svg" alt="独立USDT账户的funding现金与净收益分解. 正funding收入不等于整个安排盈利. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">USDT永续：funding并非全部收益</p><p class="pfh-figure-note">独立币种账户；总费用70.76 USDT</p><p class="pfh-axis-label">单位：USDT</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件1</span><div class="pfh-cash-reading"><strong>5.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:15.878056525881231%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件2</span><div class="pfh-cash-reading"><strong>-10.400</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.02635757383297%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件3</span><div class="pfh-cash-reading"><strong>7.650</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:24.29342648459829%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">funding合计</span><div class="pfh-cash-reading"><strong>2.250</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.145125436646555%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净所得</span><div class="pfh-cash-reading"><strong>31.490</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

定价论文把线性永续的多头现金写成价格变动减funding相关项，帮助我们看清合约对象；具体交易所则决定实际费率、时间与扣款程序.[^perp32] 模型中的已知系数不能替代未来实际费率. 原文p12的口头符号标签与现金式存在冲突时，方向以现金式为准.

<a id="p32-lab"></a>
## 5. 先检查能否继续，再看收益

<div data-experiment-slot="EXP-P32-CARRY"></div>

在美元分支，先保持“不追加”，推进到第二压力点，找到955与3,500之间的缺口. 再切换及时追加2,545，比较最后现金与净损益；注意本金变化列，而不是只盯利润. USDT分支单独显示三次funding，可以核对空头遇负费率时也要付款.

看到每8小时0.01%，最容易做的外推是 $(24/8)\times365=1{,}095$ 次，每年简单相加10.95%. 这个数学次数没有错；把它叫作“锁定净年化”才错. 未来费率可能反转，间隔会调整，标记名义量和持仓资格改变，且这一乘法没有扣任何费用、融资和退出差价. Bybit原文明确各交易对可以有不同间隔，并可调整结算频率. [^bybit32]

<a id="p32-exercises"></a>
## 6. 自测与解析

**解释题.** 第二压力点现货账面盈利3,000，为什么仍不能认定3,500应补款已解决？

本账户自由现金只有955；现货盈利要通过出售、结算与跨账户转入才能成为及时现金. 题目已设这些动作赶不上截止，因此仍缺2,545. 净资产足够与流动性可用不是同一个判断.

**迁移题.** 若期货仍按52,000结算，但现货实际只能卖51,900，存续分支净收益如何变化？

毛损益再减少50. 现货卖出费由25.975降至25.950，节省0.025，其他条件不变，所以净收益减少49.975，变为1,111.7897美元. 这是实际退出尾差的影响；不能因为期货结算已确定就忽略它.

**辨认题.** 每次0.01%、每8小时一次，一年简单外推是多少，为什么它不是预期净回报？

次数为1,095，简单外推10.95%. 只有在费率、间隔、名义本金和资格全固定时，这个算式才描述全年资金费；净回报还需加价格腿、减费用和融资，并用合适的投入资本/日期现金评价. 现实规则不提供这些条件的锁定承诺.

**完成标准.** 能独立写出两腿和每个账户的现金，先判第二次补款可行性，再解释终值、外部投入与资本分母；永续部分能逐次算funding并保持USD与USDT分账.

[^mbt32]: [CME Rulebook Chapter348: Micro Bitcoin Futures](https://www.cmegroup.com/rulebook/CME/III/300/348.pdf)，常规合约单位及最终现金结算；[Cryptocurrency Futures FAQ](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html)，交易与清算时钟相关回答. 本例保证金另由教学设定.
[^bis32]: Schmeling、Schrimpf、Todorov，[Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf)，BIS WP1087，2023，§2.1–2.2及§3.3；用于资金分割与实施条件.
[^cash32]: [CME Money Calculations for Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，普通期货VM单元；[FSB Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3.
[^bybit32]: [Bybit Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation)，2026-05-12版本，When Charged、How Deducted与USDT Perpetual单元；[Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate)及[P&L FAQ](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation)，相应线性公式. 这里引用扣款时点与公式，即时费率和费率档位不作为输入.
[^perp32]: Ackerer、Hugonnier、Jermann，[Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2)，固定v2，2024-09-04，§2–3及p8式(6)；用于模型现金关系，交易所实时程序另以实际规则为准.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

