# 投资组合：分散、多资产与风险制衡

从仓位大小与 VOO 穿透重叠出发，用 2020 与 2022 两段真实行情看清跨资产制衡与相关性翻转，再建立期货、期权与 CDS 的合约对冲地图，并落回组合现金与再平衡。

网页 / HTML: [投资组合：分散、多资产与风险制衡](https://ou-liu-red-sugar.github.io/zh/notebook/portfolio-diversification-hedging/)

语言 / Language: zh · 更新 / Revised: 2026-11-27

[《亏损、波动与持有能力》](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)看的是单只股票的 Risk–Reward 与回撤。回到真实账户，我们手里常常同时拿着宽基基金、几只个股、债券和现金：占总资金 10% 的股票腰斩，组合只掉 5%；可一旦利率急升、通胀抬头或行业周期转向，几笔重仓股一起下跌，整套账户的回撤才会考验持有能力。

2022 年美联储持续加息，跟踪 S&P 500 的 Vanguard S&P 500 ETF（VOO）含分红全年跌去约 18.2%，20 年以上长期美债 ETF（iShares 20+ Year Treasury Bond ETF，TLT）同步大跌约 31.2%，传统 60/40 股债组合全年跌约 23.4%，回撤超过单买 VOO。[^prices]，[^tlt] 只靠股票内部多买几只代码，或套用固定不变的股债比例，都挡不住所有宏观冲击。把整套账户搭稳，要把仓位大小、跨资产制衡与合约级对冲放在一起看。

## 持仓理由、赔率与仓位大小 {#nb-p01-sizing}

挑中一家有吸引力的公司以后，进组合前先要回答：给它 5%、15%、30% 还是 50% 的仓位？教科书常提醒投资者“不要把鸡蛋放在一个篮子里”[^sec-alloc]；可宏观基金经理 Stanley Druckenmiller 结合早年从 George Soros 学到的经验指出，决定长期业绩的分水岭是**看对时赚了多少、看错时亏了多少**，把资金无差别摊进几十个平庸标的反而会稀释研究价值。[^druck-wizards]，[^druck-losttree]

高集中仓位离不了迅速认错的纪律与良好流动性。要是只学了重仓下注，真碰上基本面恶化又像[《亏损、波动与持有能力》](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/#nb-a03-fisv-reset)里的 Fiserv（FISV）那样等回本，仓位越重，账户越难缓过来。拖动下面的滑块，比较同一只股票涨 +80% 与腰斩 −50% 在不同权重下的不对称后果：

单票仓位的双刃剑：拉动收益与砸坑幅度

假设 100,000 美元组合 · 其余仓位价格暂不变

单票仓位 30%

当前投入金额：**30,000 美元** （其余仓位合计占剩余比例）

在 100,000 美元组合中比较单票仓位为 5%、15%、30% 和 50% 时的不对称影响：看对涨 80% 时，对总组合净值分别拉动 +4.0%、+12.0%、+24.0% 和 +40.0%；看错腰斩下跌 50% 时，对总组合净值分别拖累 −2.5%、−7.5%、−15.0% 和 −25.0%。若该股腰斩后不再回升，其余仓位分别需整体上涨 +2.6%、+8.8%、+21.4% 和 +50.0% 才能把总资产拉回 100,000 美元。

若这只股票腰斩后不再回升，其余 70% 的仓位需整体上涨 +21.4% 才能把总组合拉回 100,000 美元。 其余仓位填坑所需涨幅 **+21.4%**

**默认展示 30% 仓位；横条以组合净值变动 50% 为满格。仓位升至 50% 时，单票腰斩会迫使剩余半仓涨满 +50% 才能回本。**

小仓位即便看对也很难拉动整体净值，重仓一旦看错则会给其余持仓留下极陡的填坑门槛。因此仓位大小同时受制于两件事：研究把握与赔率有多高，以及一旦证伪能不能及时退出。研究透彻、证伪信号清晰的标的可以配高一些，把握尚浅或难以跟踪的标的就该控在较小权重。

## 穿透重叠：代码多不等于分散 {#nb-p01-overlap}

就算单只股票的账面权重都不算太重，几笔持仓叠在一起，真实集中度也可能远高于表面数字。假设手里有 100,000 美元长期资金，按 40% VOO、20% NVIDIA（NVDA）、15% Amazon（AMZN）、10% Coca-Cola（KO）加 15% 现金配置；对照[《指数、基金与 ETF》](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/#nb-v01-concentration)拆解过的 VOO 持仓（NVDA 占 7.5%、AMZN 占 3.6%、信息技术占 38.0%），把藏在宽基里的重叠份额穿透合并，真实敞口立刻改观：[^voo-sheet]

100,000 美元组合：表面配置 vs VOO 穿透后的真实敞口

直接持有 藏在 VOO 里的重叠份额

100,000 美元组合表面配置为 VOO 40,000 美元（40%）、NVDA 20,000 美元（20%）、AMZN 15,000 美元（15%）、KO 10,000 美元（10%）、现金 15,000 美元（15%）。按 VOO 2026 年 6 月 30 日持仓穿透（NVDA 7.5%、AMZN 3.6%、信息技术行业 38.0%）：VOO 内部另含 NVDA 3,000 美元、AMZN 1,440 美元及信息技术合计 15,200 美元。合并后：NVDA 真实敞口升至 23,000 美元（23.0%），AMZN 升至 16,440 美元（16.4%），GICS 信息技术合计 35,200 美元（35.2%），信息技术加上同属云与 AI 资本开支链的 AMZN 合计达 51,640 美元，占总组合约 51.6%、占股票仓位约 60.8%。

**横条均按 100,000 美元总组合（满格 100%）绘制；AMZN 在 GICS 中归属可选消费，但业务上与云计算和 AI 资本开支紧密相连。穿透口径沿用 VOO 2026-06-30 官方季度资料。**

账面最高单票只有 20%，穿透合并后却有超过一半总资金（占股票仓位约六成）绑在同一条云与 AI 资本开支链上（VOO 中还持有 KO 及其他消费必需品成分，因 KO 未列于该期前十大持仓表，图中未对 KO 另作穿透叠加；40,000 美元 VOO 对应的消费必需品板块整体约为 1,840 美元。穿透时既要合并同一只股票，也要合并不同行业标签下共享的客户预算与融资条件）。[^voo-sheet]，[^finra-div]

这种“代码分散、底层同因”在跨市场配置里同样常见：同时买美股 NVDA、台股 TSMC（TSM）、韩股 SK hynix（000660）与欧股 ASML Holding（ASML），横跨四个交易所和四种货币，底层仍押在同一条半导体与算力资本开支周期上。关于跨市场共同因子与局部背离，可按需查阅进阶专题[《全球宏观与跨资产配置》](https://ou-liu-red-sugar.github.io/zh/notebook/global-macro-cross-asset/)。

## 跨资产制衡与相关性翻转 {#nb-p01-multi-asset}

就算股票内部已经分散到不同行业，只要资金全押在权益资产上，利率急升或经济衰退一来，多数股票仍会同步承压。SEC 与 FINRA 的指南都强调分散要分两层：股票内部跨行业，以及**跨资产类别**建立制衡；Druckenmiller 也正是在股市下跌时转向债券、商品与外汇寻找逆势工具（下方对照选取六只常见 ETF 作代理：VOO 跟踪 S&P 500 股票；BIL 跟踪 1–3 个月超短美债，利率抬升时很快滚入更高票息、几乎无久期损伤；TLT 跟踪 20 年以上长久期美债，有效久期约 14.7 年，降息避险时大涨而急加息时深跌；HYG 跟踪美元非投资级高收益企业债，背负与股票同源的企业信用风险；GLD 以实物金条支持、无票息；DBC 通过能源、金属与农产品期货跟踪一篮子商品）。[^sec-alloc]，[^finra-div]，[^druck-losttree]，[^bil]，[^tlt]，[^hyg]，[^gld]，[^dbc]

把六类资产与四套组合放进 **2020 年疫情衰退冲击**与 **2022 年通胀急加息**两段真实行情里并排对照，谁在制衡、谁会突然失效一目了然：

两段真实宏观冲击下的跨资产表现与相关性翻转

Yahoo Finance 调整后收盘价（含分红）· 共同标尺 −40% 至 +25%

两段真实冲击的含分红总回报对照：第一段为 2020 年疫情衰退冲击（2020-02-19 至 2020-03-23）：VOO −34.0%、TLT +14.2%、BIL +0.3%、GLD −3.6%、DBC −25.7%、HYG −21.9%；组合结果：100% VOO −34.0%、40% VOO 加 60% 科技三股（NVDA/AMZN/MSFT） −28.0%、传统 60/40（VOO/TLT） −14.7%、多资产组合（40% VOO、15% TLT、25% BIL、10% GLD、10% DBC） −14.3%。第二段为 2022 年通胀急加息全年（2021-12-31 至 2022-12-30）：VOO −18.2%、TLT −31.2%、BIL +1.4%、GLD −0.8%、DBC +19.3%、HYG −11.0%；组合结果：100% VOO −18.2%、40% VOO 加 60% 科技三股 −32.9%、传统 60/40 −23.4%、多资产组合 −9.8%。VOO 与 TLT 的日收益相关性由 2020 全年的 −0.485 翻正至 2022 全年的 +0.086；2022 年 VOO 与 HYG 的日相关性高达 +0.807。

**实测日收益相关性：VOO 与 TLT 由 2020 全年的 −0.485 翻正至 2022 全年的 +0.086；2022 年 VOO 与 HYG 的日相关性为 +0.807。[查看完整日频数据](https://ou-liu-red-sugar.github.io/notebook/portfolio-basics/cross-asset-daily.csv)。**

两段行情并排暴露出两个容易踩空的规律。第一，**股债相关性会随宏观状态翻转**：衰退降息时 TLT 充当强力避险盾牌，到了通胀推动急加息的年份，长债与美股同步深跌，把固定 60/40 拖到全仓 VOO 以下。第二，**名字带“债”未必对冲股票**：HYG 底层是高收益企业债，两段冲击都紧跟股市同跌；真正托住 2022 年多资产组合的，是几乎无久期损伤的超短美债 BIL、稳住的黄金 GLD 与受益于通胀的商品 DBC（采用 Yahoo Finance 调整后收盘价近似含分红再投资总回报，组合收益按各段起始日固定权重、期间不再平衡计算，不计税费和交易成本；2022 年全年四套组合的最大日回撤依次为：100% VOO −24.5%、40% VOO 加 60% 科技三股 −36.4%、60/40 −27.3%、五类多资产组合 −13.8%）。[^prices]

黄金同样存在一层常被忽略的**流动性挤兑边界**：正因为黄金全球流动性充裕、变现最快，系统性追保潮爆发的最初几天，杠杆机构往往率先抛售黄金和长债套现，让避险资产短线跟着风险资产一起下挫，等恐慌缓和或央行注入流动性后才重拾对冲（2020 年 3 月 9 日至 3 月 19 日美元挤兑最急的 8 个交易日里，GLD 从 157.81 美元急跌至 138.04 美元、单段回撤约 12.5%；同期 TLT 在 3 月 9 日至 18 日从 139.31 美元回落至 117.40 美元、跌约 15.7%。GLD 直到 4 月 14 日才修复至 162.68 美元之上）。至于组合整体跟着大盘晃动的幅度，可先用加权市场敏感度（beta）建立直觉；精确样本回归与对冲张数计算见按需专题[《保证金、对冲与期间现金》](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)。[^prices]

把现货资产与下一节的衍生合约放进同一张宏观棋盘，就能按冲击类型对照各自的制衡方向：

四种宏观状态下，跨资产与合约工具的风险制衡地图

通常受益 / 提供对冲 中性缓冲 / 视条款 通常承压

四种宏观状态下的多资产与合约制衡地图：一、温和增长：股票受益，短债中性，长债中性，黄金与商品中性，期货空头承压，保护性期权与 CDS 消耗保费或息差。二、衰退降息：股票承压，短债中性缓冲，长久期国债受益对冲，黄金偏稳而需求型商品承压，股指期货空头受益，保护性 Put 受益。三、通胀加息：股票与长久期国债同步承压，短债受益于票息重定价，黄金与大宗商品受益对冲，利率与股指期货空头受益，债基或股指 Put 受益。四、信用收缩：股票与高收益债承压，短债受益于流动性避风港，长债避险受益但在极端美元挤兑日亦可能短线遭抛售，黄金因变现最快常在追保潮里先被抛售套现、待恐慌缓和后再修复，股指期货空头受益，CDS 与高收益债 Put 产生凸性赔付。

**表征常见传导方向而非固定定律；单次冲击的实际幅度还取决于起始估值、利率起点与政策响应速度。**

## 合约级对冲：期货、期权与 CDS {#nb-p01-hedges}

跨资产制衡依赖历史相关性，一旦状态切换就可能失效。想要跳过对相关性的猜测、直接按合同条款锁定反向赔付，组合里通常会引入**期货空头**、**保护性期权**与**信用违约互换（CDS）** 三类工具：[^contracts]，[^cds-fed]，[^cds-sec]

三类合约对冲工具的机制、代价与门槛

机制归机制，个人账户执行另看准入与现金约束

比较期货、保护性期权与 CDS 三类对冲工具：一、期货（如股指 MES、美债期货）：对称线性对冲，常态代价为让渡对应方向上行收益，期间现金需履约保证金与逐日盯市，个人期货账户可直接交易。二、保护性期权（如股指、债基或 HYG Put）：非对称保险式对冲，锁住极端下行并保留上行，常态代价为持续支付并损耗权利金，买方权利金预先付清、无追加保证金，个人期权账户可直接交易。三、CDS（单名或 CDX 指数）：针对企业或主权违约与信用利差飙升的凸性赔付，常态代价为按季支付约定息差，机构 OTC 市场需担保品与协议，个人通常无法直接开户交易，可以 HYG Put、减持高信用风险资产或切换国债作近似替代。

**具体保证金、张数估算与盯市划转见[《保证金、对冲与期间现金》](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)；合约定价与交割细节见期权与期货专题。**

三类工具的实务分界主要落在**期间现金**与**账户门槛**上。期货空头不消耗权利金，但标的上涨时逐日盯市会立刻扣减账户现金；期权买方把最大亏损锁在预先付出的权利金里，代价是平稳行情下的时间损耗；至于专门对冲违约与信用利差飙升的 CDS，主要在机构场外（OTC）市场达成，普通个人投资者往往用高收益债 ETF（如 HYG）看跌期权、降杠杆或切回超短国债作现实替代（美联储 FEDS 2022-023 引用的 2020 年国际清算银行调查显示，主要交易商未平仓 CDS 名义本金中约 62% 通过中央对手方清算；场外双边交易通常需签订标准法律协议并配套初始与变动担保品安排。常见合约期限为 1 至 10 年，以 5 年期最为普遍）。[^cds-fed]，[^cds-sec]，[^hyg]

当机构把多资产与合约工具系统组合起来时，会衍生出四条经典范式：[《股票多空与市场中性》](https://ou-liu-red-sugar.github.io/zh/notebook/long-short-market-neutral/)、[《全球宏观与跨资产配置》](https://ou-liu-red-sugar.github.io/zh/notebook/global-macro-cross-asset/)、[《风险平价与全天候配置》](https://ou-liu-red-sugar.github.io/zh/notebook/risk-parity-all-weather/)与[《信用与尾部风险对冲》](https://ou-liu-red-sugar.github.io/zh/notebook/credit-tail-risk-hedging/)。这四篇收在按需进阶专题中，读者完成基础篇或后续单票估值后，可按实际需要随时选读。

## 组合里的现金与再平衡 {#nb-p01-cash-rebalance}

区别于[《投资期限与现金需要》](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)提前划出的生活支出与备用金，长期组合内部保留一笔现金或超短美债（如 BIL），同时承担两项功能：直接压浅下跌回撤，以及留出无需低位割肉就能补仓的机动余粮；牛市里少赚的那一截，正是为这两项功能付出的机会成本（以 100,000 美元组合为例：若股票整体跌 25%，保留 0%、15% 与 30% 现金分别使净值落在 75,000（−25.0%）、78,750（−21.25%）与 82,500 美元（−17.5%）；若股票反涨 25%，净值则分别落在 125,000（+25.0%）、121,250（+21.25%）与 117,500 美元（+17.5%））。

持仓开始涨跌后，原先定好的比例会慢慢跑偏，把权重调回目标结构的操作叫**再平衡**。[^sec-alloc] 落到个人账户里，既要权衡卖出调仓的税费与新增现金流补配的节奏，给个股补仓前更要守住一条前提——跌下去的那笔持仓，基本面理由还得站得住：

再平衡的两种执行方式与一个基本面前提

先区分“价格偏离”还是“基本面改写”

再平衡的两种常见执行方式：一、卖出超配买入低配，可快速恢复目标权重，但在应税账户可能触发资本利得税与交易成本；二、新增现金流再平衡，用新投入资金或分红优先买入低配资产，减少卖出与税费摩擦。再平衡前需要先核查下跌标的的基本面：若经营稳健、仅受情绪或阶段波动拖累（如 2023 年秋的 KO），补仓恢复权重可摊薄买入成本；若经营与指引已经恶化（如 2025 至 2026 年的 FISV），机械再平衡只会不断向变坏仓位追加资金，应先重估去留。

**宽基指数与跨资产大类多适用纪律化再平衡；个股仓位在补仓前需要先核对最新经营证据。**

无论是给单票定仓位、排查跨公司重叠，还是决定下跌时该再平衡补仓还是认错退出，最终判断都绕不开企业经营本身。第一卷基础十篇到此收束；下一篇[《客户、产品与收费方式》](https://ou-liu-red-sugar.github.io/zh/notebook/customers-products-pricing/)正式转入公司内部，先看清一门生意卖给谁、交付什么，又怎样把钱收回来。

[^voo-sheet]: Vanguard，[VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf)，2026-06-30，第 2 页前十大持仓（NVDA 7.5%、AMZN 3.6%）与行业权重（Information Technology 38.0%）；原始摘录见[本篇复用数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)。
[^sec-alloc]: SEC Investor.gov，[Beginners’ Guide to Asset Allocation, Diversification, and Rebalancing](https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset)，资产类别间与类别内两层分散、定期／阈值再平衡及新增资金再平衡说明，2026-11-26 查阅。
[^finra-div]: FINRA，[Asset Allocation and Diversification](https://www.finra.org/investors/investing/investing-basics/asset-allocation-diversification)，集中度风险、低相关性资产互补及集合基金底层分散核查，2026-11-26 查阅。
[^druck-wizards]: Jack D. Schwager，[《The New Market Wizards》— Stanley Druckenmiller 访谈（1992）](https://chian.io/projects/stanley-druckenmiller/sources/new-market-wizards-1992)，关于看对赚多少与看错亏多少及快速止损的公开转录摘录，2026-11-26 查阅。
[^druck-losttree]: Stanley Druckenmiller，[Lost Tree Club 演讲与问答（2015 年 1 月）](https://www.danielscrivner.com/stanley-druckenmiller-rare-lost-tree-club-lecture/)，关于集中下注、盯紧风险及跨股票、债券、商品与外汇多资产选择的公开记录，2026-11-26 查阅。
[^prices]: [Yahoo Finance：历史行情](https://finance.yahoo.com/quote/VOO/history/)，2026-11-26 读取 VOO、TLT、BIL、GLD、DBC、HYG、NVDA、AMZN、MSFT、KO 在 2019-12-20 至 2023-01-09 共 768 个共同交易日的调整后收盘价（含分红与拆股调整）。完整复算数列见[跨资产日频数据](https://ou-liu-red-sugar.github.io/notebook/portfolio-basics/cross-asset-daily.csv)。
[^tlt]: BlackRock iShares，[iShares 20+ Year Treasury Bond ETF（TLT）产品资料](https://www.blackrock.com/us/financial-professionals/products/239454/ishares-20-year-treasury-bond-etf)，跟踪剩余期限 20 年以上的美国国债指数，2026 年 10 月披露有效久期约 14.7 年；久期与利率敏感性基础另见 [iShares：Bond duration 101](https://www.ishares.com/us/insights/what-is-bond-duration)。
[^bil]: State Street Global Advisors，[SPDR Bloomberg 1–3 Month T-Bill ETF（BIL）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1064642/000119312525256752/d50862d497k.htm)，2025-10-31，跟踪 1 至 3 个月美国短期国库券指数。
[^gld]: World Gold Trust Services，[SPDR Gold Trust（GLD）招募说明书](https://www.sec.gov/Archives/edgar/data/1222333/000119312522257655/d236982d424b3.htm)，2022-10-04，以实物金条支持份额，扣除信托费用后反映金价表现。
[^dbc]: Invesco Capital Management，[Invesco DB Commodity Index Tracking Fund（DBC）招募说明书](https://www.sec.gov/Archives/edgar/data/1328237/000119312525273344/d50866d424b3.htm)，2025-11-10 修订，通过能源、金属与农产品期货合约跟踪商品指数并以短期美债等作保证金管理。
[^hyg]: BlackRock iShares，[iShares iBoxx USD High Yield Corporate Bond ETF（HYG）](https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf)，跟踪美元计价的非投资级高收益企业债指数。
[^contracts]: [CME：Micro E-mini FAQ](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html) 与 [OCC：ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，股指期货合约规则、保证金盯市及标准 ETF 期权权利义务。
[^cds-fed]: Federal Reserve Board（FEDS 2022-023），[Credit Default Swaps](https://www.federalreserve.gov/econres/feds/files/2022023pap.pdf)，2022，CDS 定期息差支付、违约赔付、常见 5 年期、OTC 市场结构与中央对手方清算比例。
[^cds-sec]: SEC，[Testimony Concerning Credit Default Swaps](https://www.sec.gov/newsroom/speeches-statements/ts101508ers-testimony-concerning-credit-default-swaps)，CDS 在 OTC 市场由成熟机构协商达成、不在传统交易所挂牌及合成信用空头用途。
