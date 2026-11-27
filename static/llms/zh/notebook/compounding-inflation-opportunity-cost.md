# 复利、通胀与机会成本

从 10,000 美元十年间持有 VOO 的名义金额与购买力出发，用复利、指数与对数、年化和物价换算理解持有回报，再与同期短债比较机会成本，并引入 Sharpe。

网页 / HTML: [复利、通胀与机会成本](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/)

语言 / Language: zh · 更新 / Revised: 2026-11-28

假如[《指数、基金与 ETF》](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/#nb-v01-concentration)里那 10,000 美元在 2015 年底就买入 Vanguard S&P 500 ETF（VOO）并把每次分红继续投入，十年后账户名义金额走到约 39,747 美元；可同期美国物价也涨了约 37%，折回 2015 年底的购买力，实际相当于 29,011 美元。[^voo-data]，[^cpi]

VOO 这笔投资的名义金额与购买力

2015 年 12 月 → 2025 年 12 月

**10,000 美元** 2015 年底投入

按含分红再投资口径，十年增长到约 3.975 倍，期末约 39,747 美元。

**39,747 美元** 2025 年底的名义金额

同期 CPI-U 从 236.525 上升到 324.054，物价因子约 1.370；39,747 美元除以 1.370，按起点物价约为 29,011 美元。

**29,011 美元** 按 2015 年底物价衡量

**物价因子为 324.054 ÷ 236.525。名义金额增加约 297%，购买力增加约 190%。**

从 10,000 滚到 39,747、再折回 29,011，运转的是同一条规律：每一期的结果都会变成下一期的新基数。账户收益、企业经营与物价上涨，都在按这套复利机制推进。

## 复利世界与回报的累积 {#nb-a04-compounding}

把每期留下的结果继续滚入下一期基数，就是复利——上涨如此，先跌再涨同样如此。分红取走还是再投，也会改写下一期参与复利的本金（现金安排可对照[《股东回报：分红、回购与增发》](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/#nb-s02-returns)）（以下跨期计算把现金分配计入再投资结果，期间无额外存取。一般形式为 \(V_n=V_0\prod_{t=1}^{n}(1+R_t)\)，其中 \(R_t\) 为第 \(t\) 期普通收益率；外部追加本金另行记录）。

每一期都在上一期的结果上计算

用增长因子 \(1+R\) 连乘

两次上涨 10%：100 乘以 1.1 得到 110，增加 10；110 再乘以 1.1 得到 121，增加 11。第二次增加得更多，因为基数已经变成 110。

先跌 20% 再涨 20%：100 乘以 0.8 得到 80，减少 20；80 再乘以 1.2 得到 96，只增加 16，没有回到 100。

复利也发生在企业内部：公司把盈利投回高回报业务，盈利与现金底盘随时间越滚越厚。Warren Buffett 在 1989 年股东信里写过，宁可以合理价格买好公司，因为时间站在好公司一边。[^buffett-1989] Berkshire Hathaway（BRK.A / BRK.B）长期持有 Coca-Cola（KO），年度现金股息由 1994 年的 7,500 万美元增至 2022 年的 7.04 亿美元，增至当初约 9.4 倍。[^buffett-2022]

如果把计息间隔不断切短、让每一点利息立刻并入本金，就过渡到连续复利。设恒定连续复利率为 \(r\)，经过 \(t\) 年后的金额为 \(V(t)=V(0)\exp(rt)\)。把这一步倒过来走，按同一利率将未来收款折算回今天，叫作**贴现** ，折回今天的金额即**现值** ：\(V(0)=V(t)\exp(-rt)\)。  复利与贴现互为逆运算，让不同日期的现金流能统一换到同一时点比较（每年计息 \(m\) 次时，名义年利率 \(r\) 的累积因子为 \((1+r/m)^{mt}\)，\(m\to\infty\) 即得 \(e^{rt}\)。已知年有效收益率 \(i\) 时，对应连续复利率 \(r=\ln(1+i)\)；利率随时间变化则写为 \(\exp(\int_0^t r(s)\,ds)\)）。[^compound]

复利与贴现是同一条时间轴的两个方向

示例：连续复利率 \(r = 5\%\)，时长 \(t = 1\) 年

在连续复利率 5%、时长 1 年的同一时间轴上：今天 95.12 美元向后复利乘以 exp(+0.05) 得到一年后的 100.00 美元；反过来，一年后的 100.00 美元向前贴现乘以 exp(-0.05) 折回今天的现值约 95.12 美元。

真实投资每期涨跌各异，各期增长因子原本要连乘；取自然对数得到对数收益 \(g_t=\ln(1+R_t)\)，就能把连乘化成相加，再用指数还原：

\[
g_t=\ln(1+R_t),\qquad
R_{\text{累计}}=\exp\!\left(\sum_t g_t\right)-1.
\]

取对数，把连乘换成相加

两期各上涨 10%：增长因子 1.1 乘以 1.1 等于 1.21。分别取自然对数，每期对数收益约为 0.0953，两期相加约为 0.1906；对 0.1906 取指数还原，又得到 1.21，即累计上涨 21%。

**累计普通收益率为 1.21 − 1 = 21%。**

无论把每日数据接成月，还是把各月接成年，走的都是这套“对数相加、指数还原”的步骤；当涨跌幅很小、时间很短时（例如两次 1% 累计 2.01%），才有 \(\exp(x)\approx 1+x\) 与 \(\ln(1+R)\approx R\) 的线性近似（两期 10% 的每期对数收益为 \(\ln(1.1)\approx 0.09531\)，相加还原得 \(\exp(2\ln 1.1)-1=21\%\)；对数收益为零对应不变，负值对应减少）。 切换下图时长，就能直观看见线性近似在短期几乎重合、长期却被复利迅速甩开：

[![固定连续复利率5%，比较初始1万美元在十年内的指数累积与线性近似。指数结果约16487美元，线性结果15000美元。](https://ou-liu-red-sugar.github.io/notebook/compounding/compound-ten.svg?v=20261126)](https://ou-liu-red-sugar.github.io/notebook/compounding/compound-ten.svg?v=20261126)

**十年后，指数累积约 16,487 美元，线性近似为 15,000 美元，相差约 1,487 美元。  点击图可查看大图。**

为了比较不同持有期限的快慢，可以把整段对数收益按年平均再还原，得到复合年化收益率 \(R_{\text{年化}}=(V_T/V_0)^{1/T}-1=\exp(\ln(V_T/V_0)/T)-1\)：同样累涨 20%，一年完成年化 20%，五年完成仅年化约 3.7%（上图固定连续复利率 5%，对比 \(10000e^{0.05t}\) 与 \(10000(1+0.05t)\)；两期普通收益直接相加省略了交叉项 \(R_1R_2\)，一阶近似仅在变化量足够小时成立）。[^compound]

回到开头那笔 VOO 投资：十年含分红再投资增至约 3.975 倍，复合年化约 14.8%（若只算股价变化，期末约 33,549 美元，差额体现分红再投资的复利作用）。[^voo]，[^voo-data]，[^voo-adjustment] 切换下方视图，同时对照“实际波动 vs 平滑年化”与“名义金额 vs 实际购买力”：

[![VOO从2015年底至2025年底的月末含分红再投资回报估计，与同起点同终点的等效年化路径比较；初始1万美元，期末约39747美元。](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-nominal.svg?v=20261126)](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-nominal.svg?v=20261126)

**按含分红再投资口径估算的月末路径与等效年化路径，十年后都到达约 39,747 美元。  大图：[实际路径与年化](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-nominal.svg?v=20261126) · [金额与购买力](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-real.svg?v=20261126)；[查看数据](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-growth-purchasing-power.csv)。**

年化 14.8% 只是拉平后的结果，途中 VOO 在 2022 年单年就跌去约 18.2%；期间要动用资金时，面对的是当下的真实曲线而非平滑年化线（采用 Yahoo Finance 调整后收盘价近似税前分红再投资总回报，每月取最后交易日，2015-12-31 至 2025-12-31 按十个完整年度年化；允许分数份额，基金费用已反映在价格中。按 40 次分红逐次以除息日收盘价再投期末约 39,721 美元；分红留作不计息现金合计约 36,525 美元）。[^voo-data]，[^voo-adjustment]

## 净所得与实际购买力 {#nb-a04-purchasing-power}

分红再投会扩大下一期本金，持续费用则逐年削减本金——两者的复利分叉可对照[《指数、基金与 ETF》](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/#nb-v01-fee-gap)的费用图来看（再看一组设定：初始 10,000 美元、毛年回报 8%、每年末扣费，20 年后年费率 0.25% 约剩 44,334 美元，1% 约剩 38,122 美元，相差约 6,211 美元，按 \(10000[(1+8\%)(1-f)]^{20}\) 计算）。[^fees]

扣完费用留下名义金额后，还要折算实际能买到多少东西。物价同样在逐期复利，因此实际购买力要拿名义金额**除以**物价因子，而非简单相减：

名义涨 10%、物价涨 8%，实际购买力按除法换算

起点均设为 100 美元 · 橙虚线为涨价后的 108 美元门槛

起点均设为 100 美元：账户名义金额上涨 10% 变成 110 美元；同期一篮商品标价上涨 8% 变成 108 美元。用名义金额 110 除以涨价后标价 108，得到约 1.0185 倍，即实际购买力仅增加约 1.85%，按起点物价相当于 101.85 美元，低于直接相减 10% 减 8% 得到的 2% 粗略近似。

这里按物价换算的是最终能买到的商品数量，前面贴现则是按利率把金额换到同一时点，两者各答各的问题。开头 VOO 期末 39,747 美元除以十年 CPI-U 物价因子 1.370 得 29,011 美元（十年下来同样金额少买约 27% 的东西），把[上图切到“金额与购买力”](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/#nb-a04-history)即可逐月对照；取对数后，这步除法同样化成 \(\ln(1+R)-\ln(1+\pi)\)（普通实际回报为 \((1+R)/(1+\pi)-1\)，常用的 \(R-\pi\) 是小变幅近似。图中采用美国 CPI-U 全项目未季调序列 CUUR0000SA0，2015 年 12 月 236.525、2025 年 12 月 324.054；不同消费币种和结构需相应调整）。[^cpi]

美联储追求最大就业与价格稳定，长期通胀目标为总体个人消费支出价格指数（PCE）年涨 2%：哪怕通胀回落到目标附近，正通胀仍意味着物价继续温和攀升，只是涨得慢了；而利率变动又会直接改写现金、短债与股票之间的比较（政策工具见[《美联储与货币政策》](https://ou-liu-red-sugar.github.io/zh/notebook/federal-reserve-monetary-policy/)）（美联储目标按总体 PCE 衡量，前文购买力采用 CPI-U，两者统计口径不同；长期目标也不代表每年恰好停在 2%）。[^fed]

## 机会成本与风险补偿 {#nb-a04-opportunity-cost}

留足期间要用的钱之后，余下资金放在现金、短债还是股票里，要靠**机会成本**比较。以 2023 年 6 月拍卖的 52 周美国国债（发行价 95.015 / 100 面值，呼应前面的贴现机制）与同期 VOO、现金摆在一起：[^bill]

同一笔 10,000 美元的三种安排

2023 年 6 月 15 日 → 2024 年 6 月 13 日 · 虚线为 10,000 美元本金

保留不计息现金：期末 10,000 美元；决定时已知，金额不因行情变化，可以取用。

持有这笔短债至到期并另留余额：期末约 10,523 美元；决定时已知，买入价、面值与到期日已经给定。

持有 VOO 并把分配再投资：期末约 12,444 美元；这是事后结果，决定时只能依据经营与价格形成预期，途中承受市场波动。

0 本金 10,000 12,444

**短债每 100 美元面值的价格为 95.015：用 9,976.60 美元买入 10,500 美元面值，另留 23.40 美元现金。**

机会成本必须站在做决定的当时衡量：短债到期收回 10,523.40 美元在 2023 年买入那一刻就已锁定，VOO 的 12,444 美元则是事后结果。有短债确定收益垫底，去买股票自然需要足够的超额预期回报来补偿波动；保留现金少赚利息，换取的是随时可取的灵活性（短债 CUSIP 912797FS1，364 天，按每 100 美元面值认购、留存现金不计息、不计税费；拍卖结果中的 5.208% Investment Rate 为等价票息口径。VOO 按起止日调整后收盘价比例估算，采用事后数据）。[^bill]，[^voo-data]

若想以无风险收益为共同基准，直接比较“每承担一单位波动多赚了多少超额收益”，就需要用到 **Sharpe 比率**：[^sharpe]

\[
\operatorname{Sharpe}
=\frac{\text{平均超额收益}}{\text{超额收益的标准差}}.
\]

沿用 William F. Sharpe 原文里的简明对比（无风险 3%）：基金 X 预期 5%、标准差 10%（Sharpe 0.20）；基金 Y 预期 8%、标准差 20%（Sharpe 0.25）。引入无风险资产各配一半后，半仓 Y 的波动被压到和 X 完全一样的 10%，预期收益却高出 0.5 个百分点：

加入无风险资产以后的比较

Sharpe 原文假设数字 · 纵轴自 2% 起

横轴为收益标准差，纵轴为预期收益率（自 2% 起）。无风险资产位于标准差 0%、收益 3%；基金 X 位于标准差 10%、收益 5%；基金 Y 位于标准差 20%、收益 8%。从无风险资产连到 Y 的直线上，一半 Y 一半无风险资产的组合位于标准差 10%、收益 5.5%，与 X 的波动相同，预期收益高出 0.5 个百分点。

**虚线从无风险资产经过 Y，斜率就是 Y 的 Sharpe 比率 0.25；同一 10% 波动下，半仓组合比 X 高出 0.5 个百分点。**

Sharpe 提供了收益与波动的比较尺，落回真实决策时还要一并看基本面前景、价格与资金取用时间（标准 Sharpe 使用同频普通超额收益，不能直接把复合年化或平均对数收益代入分子。原文设无风险收益固定、无交易成本；历史样本常用样本均值与样本标准差，换算年度口径还需处理收益相关性）。

资金什么时候要用，决定了一笔钱能投入多久、期间要不要预留付款。下一篇[《投资期限与现金需要》](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/#nb-a02-layers)就从资金用途与付款时间线展开。

[^buffett-1989]: Warren Buffett，[Berkshire Hathaway 1989 年股东信](https://www.berkshirehathaway.com/letters/1989.html)，Mistakes of the First Twenty-five Years：优秀企业、合理价格与时间的关系。
[^buffett-2022]: Warren Buffett，[2022 年股东信](https://www.berkshirehathaway.com/letters/2022ltr.pdf)，The Secret Sauce：KO 长期持股与年度现金股息。文中金额为 Berkshire 收到的年度分红，分别对应 1994 年与 2022 年。
[^compound]: Jonathan Goodman，NYU Courant，[Compound interest](https://math.nyu.edu/~goodman/teaching/MathFin2019/handouts/CompoundInterest.pdf)：离散与连续复利、指数及对数的一阶近似。
[^voo]: Vanguard，[VOO 官方资料](https://fund-docs.vanguard.com/F0968.pdf)，基金跟踪对象及分配再投资、税前与扣除基金费用后的业绩口径。本文历史曲线采用下一条列明的市场数据。
[^voo-data]: [Yahoo Finance：VOO 历史行情](https://finance.yahoo.com/quote/VOO/history/)，读取于 2026-09-26。2015-12-31 至 2025-12-31，调整后收盘价由 156.8276978 至 623.3413696，累计增长约 297.47%；2023-06-15 至 2024-06-13 的对应值为 389.5532837、484.7463074，增长约 24.44%。[每日输入](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-daily.csv)与[月末资金路径及购买力计算](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-growth-purchasing-power.csv)供复算。
[^voo-adjustment]: [Yahoo：What is the adjusted close?](https://help.yahoo.com/kb/SLN28256.html)，调整后收盘价包含分红与拆股调整。本文原始数据中有 40 次分红事件，以除息日前一交易日价格计算分红调整因子；这与逐笔按实际成交价再投资的规则不同。起止普通收盘价分别为 186.9299927、627.1300049 美元，仅价格变化对应的期末金额为 33,548.92 美元；[分红事件与复算输入](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-dividends.csv)列出两种再投资口径及现金分红。
[^fees]: SEC Investor.gov，[How Fees and Expenses Affect Your Investment Portfolio](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated)，持续费用与后续投资本金。本文金额按所列假设自行计算。
[^cpi]: BLS，[Purchasing power and constant dollars](https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm)及[CUUR0000SA0 数据](https://data.bls.gov/timeseries/CUUR0000SA0)，美国城市消费者、全项目、未季调 CPI。2015 年 12 月为 236.525，2025 年 12 月为 324.054。截至 2026-09-26 复核，本图所用未季调全项目 CPI-U 的 2025 年 10 月官方值仍缺失。BLS 为季调计算采用了 9 月与 11 月指数的几何平均估补，并补发部分非调查分项；这与发布本系列 10 月正式值有别，见[缺失数据与后续处理说明](https://www.bls.gov/cpi/additional-resources/2025-federal-government-shutdown-impact-cpi-faq.htm)第 2、3、12 项。图中虚线连接相邻已知月份，数据表中该月仍留空；[计算输入](https://ou-liu-red-sugar.github.io/notebook/compounding/voo-growth-purchasing-power.csv)。
[^fed]: Federal Reserve，[Statement on Longer-Run Goals and Monetary Policy Strategy](https://www.federalreserve.gov/monetarypolicy/files/fomc_longerrungoals.pdf)，2026-01-27 再确认；[长期 2% 通胀目标说明](https://www.federalreserve.gov/faqs/economy_14400.htm)。
[^bill]: TreasuryDirect，[2023-06-13 拍卖结果](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2023/R_20230613_2.pdf)及[发行公告](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2023/A_20230608_2.pdf)：364 天国债，CUSIP 912797FS1，每 100 美元面值价格 95.015222，2023-06-15 发行，2024-06-13 到期。10,500 美元面值的成本按美分取整，为 9,976.60 美元。
[^sharpe]: William F. Sharpe，[The Sharpe Ratio](https://web.stanford.edu/~wfsharpe/art/sr/SR.htm)，The Ratio、Time Dependence、Related Measures。X、Y 以及半仓 Y 的比较均来自原文假设，所有收益和标准差采用同一期口径。
