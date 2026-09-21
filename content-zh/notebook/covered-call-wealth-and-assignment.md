{
  "title": "备兑看涨：权利金与上行让渡",
  "description": "从已有股票出发，重建权利金、负债、封顶收益和股息指派后的完整账户.",
  "layout": "entry",
  "notebookid": "zh-p13",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p13"
}

备兑看涨从已有股票出发：卖出call取得权利金，同时承担在被指派时按执行价交付股票的义务. 判断这项结构时，先明确是否愿意在约定期限内按指定价格交出股票，再把股票、短call、现金和指派放在同一账户中比较.

<a id="p13-objective"></a>
## 持股与交付义务

设我们已经持有100股教学标的XYZ，现价100美元，另有现金2,000美元. 今天的共同财富为12,000美元. 我们仍愿意承担股票的日常涨跌，但未来30天若能按105卖出，愿意接受这个结果. 由此才考虑卖出一张执行价105的看涨期权：对方获得买入100股的选择权，我们承担被指派时交付100股的义务. 现有股票能够用于交付，因此称为**备兑看涨**；同时买股票和卖call的建立方式常称buy-write. [^cc]

股价超过执行价时，持有人可以按约定价格买入；低于执行价时可以放弃，股票下跌仍由卖方承担. 权利金是这项选择权的市场价格，模型在给定条件下提供价格参照.

本篇采用PF-GRID-01合成链：未调整标准合约每张对应100股，主例30天，利率和分红均设为零. 105 call的模型mid为1.57，合成bid/ask为1.55/1.59，交易费每张每次0.65美元. 美式实物合约、100股单位和行权后T+1交割取自OCC；调整合约须另核交付物. [^terms]

<a id="p13-ledger"></a>
## 权利金与短期权负债

按mid卖call产生157美元权利金应收和157美元短期权负债，已有100股保持不变.

| 账户项目（美元，股数另列） | 建立前 | 按mid建立后 |
|---|---:|---:|
| 股票股数 | 100 | 100 |
| 股票市值 | 10,000 | 10,000 |
| 现金及结算后权利金 | 2,000 | 2,157 |
| 短call价值 | 0 | −157 |
| 净财富 | 12,000 | 12,000 |

教学时钟把成交记作D0、现金结算记作下一营业日D1；本例把D0、D30及其下一编号日设为营业日. D0已经有短call，157仍可能是应收而非可转出的现金. 期权仓位建立与权利金现金结算是两个时点. [^t1]

合成执行层按bid卖出，净收 $100\times1.55-0.65=154.35$. D1现金2,154.35，短call按mid记负债157，净财富11,997.35. 2.65差额由点差与费用构成；到期表另未计最终卖股、履约费用及税.

<a id="p13-payoff"></a>
## 到期财富与盈亏

记到期股价为$s$，并记$x^+=\max(x,0)$. 若没有提前指派，股票加短call的到期经济价值为$100s-100(s-105)^+$，再加账上现金，得到

$$
W_T=2157+100s-100(s-105)^+.
$$

当$s\le105$，call没有正的到期支付，组合仍随股票每上涨1美元增加100美元. 超过105后，股票每增加100美元，短call支付也增加100美元，两者正好抵消. 因此

$$
W_T=2157+100\min(s,105).
$$

终点经济价值与持仓身份要分开. 按严格价内call指派、平价call不指派的教学分支，$s<105$时仍持有股票，$s>105$时交出股票并收到10,500现金. 恰在105附近需按实际指令和指派结果确定持仓；两种结果当时经济价值相同，之后的敞口不同.

| 到期XYZ股价 | 只持股财富 | 备兑mid财富 | 备兑执行层财富 | mid备兑相对只持股 |
|---:|---:|---:|---:|---:|
| 0 | 2,000 | 2,157 | 2,154.35 | +157 |
| 70 | 9,000 | 9,157 | 9,154.35 | +157 |
| 100 | 12,000 | 12,157 | 12,154.35 | +157 |
| 105 | 12,500 | 12,657 | 12,654.35 | +157 |
| 130 | 15,000 | 12,657 | 12,654.35 | −2,343 |

股票归零时，mid账户损失9,843；最大到期盈利657，下侧盈亏平衡股价98.43. 执行价105决定交付价格，盈亏平衡点还计入权利金.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P13-payoff.svg" alt="共同财富曲线：股票与备兑在105以上分开"></div><div class="svg-narrow pfh-native" data-static-figure="P13-payoff-mobile.svg"><p class="pfh-figure-title">备兑：下跌区间仍有股票，上涨区间封顶</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. CC105</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,322.18 59.50,319.92 64.00,317.66 68.50,315.41 73.00,313.16 77.50,310.90 82.00,308.64 86.50,306.38 91.00,304.13 95.50,301.88 100.00,299.62 104.50,297.37 109.00,295.11 113.50,292.85 118.00,290.59 122.50,288.35 127.00,286.09 131.50,283.83 136.00,281.57 140.50,279.32 145.00,277.06 149.50,274.81 154.00,272.55 158.50,270.30 163.00,268.04 167.50,265.78 172.00,263.53 176.50,261.28 181.00,259.02 185.50,256.76 190.00,254.51 194.50,252.25 199.00,250.00 203.50,247.74 208.00,245.49 212.50,243.23 217.00,240.97 221.50,238.71 226.00,236.47 230.50,234.21 235.00,231.95 239.50,229.70 244.00,227.44 248.50,225.18 253.00,222.93 257.50,220.68 262.00,218.42 266.50,216.16 271.00,213.90 275.50,211.65 280.00,209.40 284.50,207.14 289.00,204.88 293.50,203.76 298.00,203.76 302.50,203.76 307.00,203.76 311.50,203.76 316.00,203.76 320.50,203.76 325.00,203.76 329.50,203.76 334.00,203.76 338.50,203.76 343.00,203.76 347.50,203.76 352.00,203.76 356.50,203.76 361.00,203.76 365.50,203.76 370.00,203.76" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01教学网格 · mid结构</p></div><figcaption>共同财富曲线：股票与备兑在105以上分开</figcaption></figure>

卖50股持现会将整个价格区间的股票敏感度减半；备兑仅在105以上封顶，明显下跌时仍保留100股敏感度，权利金提供157的固定缓冲.

<a id="p13-lifecycle"></a>
## 股息与提前指派

另设提前指派事件：D10短call被指派，随后每股除息1美元，除息前教学股价109，除息后108.

备兑持有人交付100股，在交割完成后有现金$2157+10500=12657$，不再持股，也不取得这次股息. 只持股的对照则是100股按108计值，加原现金2,000和股息100，共12,900. 股息若尚未支付，应先列应收，到实际付款才成为可用现金.

只持股对照以108除息价计股票、另列100股息，总财富12,900. 与已按105交股的备兑账户12,657相比，差额243同时反映出售价格与股息归属.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P13-lifecycle.svg" alt="持股、短call、现金与除息事件的顺序"></div><div class="svg-narrow pfh-native" data-static-figure="P13-lifecycle-mobile.svg"><p class="pfh-figure-title">指派与除息后的账户</p><ol class="pfh-flow-steps"><li><strong>D0→D1</strong><p>已有100股</p><p>现金2,000 → 2,157</p><p>短call负债157</p><p>净财富仍12,000</p></li><li><strong>D10指派（施加）</strong><p>交出100股</p><p>应收10,500</p><p>交割后现金12,657</p><p>不再拥有股票</p></li><li><strong>除息对照</strong><p>只持股：109 → 108</p><p>100股×108＋现金2,000</p><p>另有股息100</p><p>完整财富12,900</p></li></ol><p class="pfh-figure-note">指派与分红为独立教学事件；股息应收与已到账现金另区分. </p></div><figcaption>持股、短call、现金与除息事件的顺序</figcaption></figure>

希望保留股票时，可按当时买价平仓短call；先卖股票而保留短call则转为无股票覆盖的空头. 一腿退出后，按剩余合约重新盘点义务与资金.[^odd]

<a id="p13-lab"></a>
## 账户实验

<div data-experiment-slot="EXP-P13-COVERED-CALL"></div>

比较股价70、105、130时的财富与剩余股数，再切换mid和执行层，核对2.65建仓成本差. 提前指派分支同时计入除息价108及对照账户股息100.

<details data-reading-branch="benchmark-bxm"><summary>选读：BXM基准规则</summary>

Cboe BuyWrite方法文件6.0版（2026-05-11修订）的BXM以S&P 500敞口配月度call，规定执行价、到期SOQ、新call滚动VWAP，并将股息和权利金在规则中再投资. 非滚动日计算同时扣除当前短call负债. 本篇用这些制度特征与XYZ主例对照. [^bxm]

</details>

<a id="p13-exercises"></a>
## 练习与解析

**解释题.** XYZ跌到70时，call到期没有价值. 有人说“期权赚157，所以这次策略成功”. 这句话漏了什么？

**解析.** 股票损失3,000、短call赚157，mid账户终值9,157，净亏2,843. 原任务是否完成取决于预设的下行约束.

**迁移题.** 若原股票很早以前买在60，现在100，备兑到130时应该用60还是100衡量今天的决策？

**解析.** 历史累计盈亏采用60成本；今天两种动作从相同12,000财富比较. 股价130时，持股财富15,000，备兑12,657，机会差额2,343.

**生命周期题.** 股票被call走后又继续上涨，我们能否继续把图上的封顶线称为账户从此永远封顶？

**解析.** 该图覆盖30天合同及指定持有安排. 指派后持现，到期未指派则仍持股；后续回报按实际剩余持仓和新交易计算.

[^cc]: OIC，[Covered Call](https://www.optionseducation.org/strategies/all-strategies/covered-call-buy-write)，Description、Variations、Max Loss/Gain、Assignment Risk完整单元；2026-09-21核用. 来源支持结构与义务，本篇数字为PF-GRID-01推导.
[^terms]: OCC，[ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，Unit of Trade、Exercise Style、Exercise Settlement Time，2026-09-21读取.
[^t1]: OIC，[The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion)，July 2024，Option Trade Settlement及exercise settlement正文.
[^odd]: OCC，[Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII印刷55–57页、Chapter X Other Risks第1项印刷67–68页.
[^bxm]: Cboe，[BuyWrite Indices Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_BuyWrite_Indices_Methodology.pdf)，6.0版，§§1–2及§3.1的BXM部分；只采用结构、定价与滚动规则.
