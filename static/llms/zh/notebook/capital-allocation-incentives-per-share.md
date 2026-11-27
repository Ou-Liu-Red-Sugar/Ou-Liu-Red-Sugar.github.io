# 资本配置、激励与每股结果

厘清 ROE、DuPont 三因子、ROIC（含与不含商誉）与 ROIIC 的公式边界、适用场景与失真陷阱；以 MSFT、KO、HD、MCD 与 AAPL 的 SEC 年报实证剥离杠杆幻觉，再拆解五条资金出路、回购价格纪律、管理层激励与 SBC 净股数影响，并附单屏五年资本配置推演器。

网页 / HTML: [资本配置、激励与每股结果](https://ou-liu-red-sugar.github.io/zh/notebook/capital-allocation-incentives-per-share/)

语言 / Language: zh · 更新 / Revised: 2026-11-27

翻开最新 SEC 年报，四家蓝筹的账面 ROE 给出了反直觉排序：**The Coca-Cola Company**（KO）达 46.0%，高出 **Microsoft**（MSFT）34.0% 整整 12 个百分点；**The Home Depot**（HD）冲到 145.5%；盈利稳健的 **McDonald’s**（MCD）反而是负值。卖汽水和建材为什么看起来比云计算更赚钱？

在[《盈利质量与可比口径》](https://ou-liu-red-sugar.github.io/zh/notebook/earnings-quality-comparability/)核实当期利润之后，判断一家公司能否长期复利，要接着追问三件事：赚来的利润占用了多少资本，新投出去的每一美元还能赚回多少，以及管理层对自由现金流的分配最终怎样改写每股结果。这些问题，要靠 **ROE**、**ROIC** 与 **ROIIC** 逐层拆开。

## ROE 与 DuPont 三因子拆解：盈利能力还是财务杠杆 {#nb-e07-roe-dupont}

**净资产收益率**（Return on Equity，简称 ROE）衡量归属于普通股股东的净利润相对平均股东权益的产出效率。早在 1914 年，**DuPont** 财务高管 **Donaldson Brown** 就把它拆成了盈利厚度、周转效率与财务杠杆三项乘积：[^mauboussin-roic]

\[
\text{ROE} = \frac{\text{归母净利润}}{\text{平均股东权益}} = \underbrace{\frac{\text{净利润}}{\text{收入}}}_{\text{净利率}} \times \underbrace{\frac{\text{收入}}{\text{平均总资产}}}_{\text{资产周转率}} \times \underbrace{\frac{\text{平均总资产}}{\text{平均股东权益}}}_{\text{权益乘数（杠杆）}}.
\]

这一等式把“会赚钱”和“敢借钱”切了开来：**净利率**看每卖出 1 美元留下多少利润，**资产周转率**看每 1 美元总资产一年撬动多少收入，**权益乘数**（总资产 ÷ 股东权益）则直接刻画财务杠杆。负债越多或股东权益越薄，权益乘数越大，同样的经营利润也会被放大成更高的账面 ROE。把开头四家公司放进这套拆解，落差的源头立刻显现：

DuPont 三因子拆解：四家公司账面 ROE 为何拉出巨大落差

净利率 × 资产周转率 × 权益乘数 ＝ ROE · 均据 SEC 最新 Form 10-K 核对

四家上市公司 DuPont 三因子拆解对照：一、Microsoft（MSFT）FY2026：净利率 40.3% 乘以资产周转率 0.48 倍再乘以权益乘数 1.75 倍，得 ROE 34.0%，高利润率驱动、杠杆偏低。二、Coca-Cola（KO）FY2025：净利率 27.3% 乘以资产周转率 0.47 倍再乘以权益乘数 3.60 倍，得 ROE 46.0%，依靠两倍于 MSFT 的财务杠杆反超账面 ROE。三、Home Depot（HD）FY2025：净利率 8.6% 乘以资产周转率 1.64 倍再乘以权益乘数 10.34 倍，得 ROE 145.5%，累计 960 亿美元库存股压薄权益造成杠杆放大。四、McDonald's（MCD）FY2025：净利率 31.9%、资产周转率 0.47 倍，但因累计 793 亿美元库存股令平均股东权益落为 −2,794 M 美元，权益乘数与 ROE 变为负值（−306.5%），指标失去解释力。

**各家平均总资产与平均股东权益均取期初与期末均值；KO 归母净利润 13,107 M 美元对应归母平均权益 28,513 M 美元。橙底标出权益乘数偏高或权益为负的情形。**

顺着图里第三列往右看，账面 ROE 的放大机制就露了底。KO 净利率比 MSFT 低 13 个百分点，账面 ROE 却能反超，靠的是两倍于 MSFT 的财务杠杆；到了 HD、**Apple**（AAPL）乃至 MCD，多年借债回购把库存股滚成数百亿美元负项，股东权益被不断压薄甚至压负，正常利润除以极小分母，就会蹦出破百或失真的账面 ROE（各公司 SEC 年报细项：KO FY2025 背负 454.92 亿美元总债务与 −564.23 亿美元历史库存股，归母平均权益被压在 285 亿美元；HD FY2025 收入 1,646.83 亿、净利润 141.56 亿美元，但 −959.71 亿美元库存股叠加 557.72 亿美元有息债务令平均权益仅余 97.27 亿美元，权益乘数升至 10.34 倍；AAPL FY2026 回购 863.90 亿美元，维持 4.11 倍权益乘数与 142.3% 账面 ROE；MCD FY2025 录得 85.63 亿美元净利润、营业利润率高达 46.1%，但 −793.16 亿美元库存股叠加 399.73 亿美元长期债务令股东权益落为负值［2024 年末 −37.97 亿、2025 年末 −17.91 亿美元］，分母为负使 ROE 失去经济意义）。[^msft-fy26]，[^ko-fy25]，[^hd-fy25]，[^aapl-fy26]，[^mcd-fy25]

因此，ROE 有清晰的适用范围。对银行与保险而言，存款和保单本身就是经营原料，股东权益又受监管资本充足率硬约束——正如 **Michael J. Mauboussin** 所言，ROE 之于金融业相当于 ROIC 之于实体企业。[^mauboussin-roic] 放到非金融公司，ROE 适合检验低杠杆企业；一旦遇上高负债或大额回购的蓝筹，单看它就会把杠杆错当护城河。

## ROIC：剥离财务杠杆后的生意底色 {#nb-e07-roic}

跨公司比较非金融企业的生意质地，要把资本结构的影响从分子和分母同时剥离，算出**投入资本回报率**（Return on Invested Capital，简称 ROIC）。按 **Michael J. Mauboussin** 与 **McKinsey** 的标准口径：[^mauboussin-roic]，[^mckinsey-roic]

\[
\text{ROIC} = \frac{\text{NOPAT}}{\text{平均投入资本}}, \qquad \text{NOPAT} = \text{EBIT} \times (1 - \text{有效税率}).
\]

分子 **NOPAT**（税后净营业利润）只算主营息税前利润扣掉经营税，不管债息也不管闲置现金的理财利息；分母**投入资本**（Invested Capital）只算真正投入经营的资金，可以从经营资产侧或债务加权益的融资侧交叉算得，两头在复式记账下完全等价，且都要把超出日常运营所需的**超额现金**扣掉（经营侧 ＝ 净营运资本 ＋ 固定资产净值 ＋ 商誉及收购无形资产 ＋ 其他经营资产；融资侧 ＝ 全部有息债务 ＋ 含少数股东权益的总权益 − 超额现金及有价证券。一般而言，成熟公司日常运转仅需约占年收入 2% 的经营现金，账上多出的现金与短期理财不参与生产销售，理应从投入资本中扣除，否则会拉低现金充沛公司的表面 ROIC）。[^mauboussin-roic]

扣掉超额现金后，ROIC 显现出一条与 ROE 截然不同的性质：**股票回购本身不改变 ROIC**。花超额现金回购，融资侧股东权益与超额现金等额减少，投入资本不动；举债回购，新增债务正好补上减少的权益，分子 NOPAT 又不受债息影响，ROIC 照样纹丝不动。靠借债回购把 ROE 推上 100% 的招数，放到这里立刻失去放大效果。

跨表勾稽图：从投入资本与 NOPAT 算到 ROIC，再到账面 ROE

左：利润表分子与资产负债表双侧等价分母 · 中：剥离资本结构的 ROIC · 右：叠加杠杆与回购后的账面 ROE

投入资本双侧勾稽与 ROIC 到 ROE 路径图：左侧上方为利润表分子税后营业利润 NOPAT（等于 EBIT 乘以 1 减有效税率，归属债权人与股东共同的税后主业盈利），左侧下方为资产负债表分母投入资本（经营侧为净营运资本加固定资产加商誉无形，与融资侧总债务加总权益减超额现金在复式记账下等价）。两条绿色曲线箭头相除汇聚至中间 ROIC（NOPAT 除以平均投入资本，剥离借债与回购影响，还原真实生意回报，ROIC 高于 WACC 才创造价值，且可区分含商誉与不含商誉两种口径）。中间再经琥珀色箭头叠加财务杠杆与回购压薄权益效应，指向右侧账面 ROE（归母净利润除以平均权益，高杠杆或负权益下易失真，更适用于银行与保险业）。

**融资侧扣除超额现金后，回购与举债置换只改变右侧 ROE 的权益分母，不改变中间 ROIC。**

拆解分母时还要再切一刀，区分**含商誉**与**不含商誉**两种口径。[^mckinsey-roic] **商誉**是历次溢价并购留下的买价差额：把商誉留在分母里，用来给管理层历年的并购算总账；把商誉扣掉，则用来检验新开门店、新建产线或扩建机房这类原厂内生业务的资本效率。把开头四家公司放进这套标尺，此前被杠杆与回购颠倒的排序立刻反转：

含商誉 ROIC → 账面 ROE 排名反转：四家公司 10-K 实证

统一融资侧口径 · 绿条与琥珀条共享 0%–50% 刻度（HD 145.5% 以断轴标示，MCD 因负权益失效）

四家上市公司含商誉 ROIC 到账面 ROE 的横向排名反转对照（统一融资侧口径）：一、Microsoft（MSFT）FY2026：含商誉 ROIC 35.2%（不含商誉 53.1%），账面 ROE 34.0%，净现金低杠杆令 ROIC 居首且高于 ROE。二、Coca-Cola（KO）FY2025：含商誉 ROIC 18.5%（不含商誉 25.5%），经 3.60 倍权益乘数放大至账面 ROE 46.0%，借杠杆反超 MSFT。三、Home Depot（HD）FY2025：含商誉 ROIC 24.7%（不含商誉 36.6%），受大额历史回购压薄股东权益影响，账面 ROE 飙升至 145.5%，放大近 6 倍。四、McDonald's（MCD）FY2025：含商誉 ROIC 27.1%（不含商誉 29.7%），因累计回购压负股东权益，账面 ROE 数学失效。

**跨公司比较实体企业质地时，先把资本结构剥离掉看含商誉／不含商誉 ROIC，再看杠杆与回购如何改写 ROE 排序。**

图里的反转拆出两层意思：剥掉杠杆后，MSFT 的 ROIC 接近 KO 两倍，MCD 也摆脱负权益干扰、还原出特许加盟底色；HD 披露的 ROIC 从 FY2023 的 36.7% 降至 FY2025 的 **25.7%**，正因连续收购 SRS Distribution 与 GMS 垫高商誉，可扣掉商誉后原厂仍有 **36.6%**——双口径把并购账和原厂账切得清清楚楚（统一融资侧明细，单位 M 美元：MSFT FY26 含商誉 ROIC 35.2%、不含商誉 53.1%，有效税率 19.40%、NOPAT 125,127，期初期末有息债务 43,151→40,294、权益 343,479→442,387、现金及短期投资 94,565→76,843，扣除收入 2% 后平均投入资本 355,087，平均商誉 119,580；KO FY25 含商誉 ROIC 18.5%、不含商誉 25.5%，有效税率 17.88%、NOPAT 11,301，总债务 44,522→45,492、总权益 26,372→34,275、现金及有价证券 14,571→15,806，平均投入资本 61,092，平均商誉 16,815，若再扣除 129 亿美元无期限商标则达 36.0%；HD FY25 统一口径含商誉 ROIC 24.7%、不含商誉 36.6%，有效税率 23.90%、NOPAT 15,897，总债务含短期商业票据 53,383→55,772、权益 6,640→12,813、期末现金 1,389 低于收入 2% 故超额现金为 0，平均投入资本 64,304、平均商誉约 209 亿美元；MCD FY25 含商誉 ROIC 27.1%、不含商誉 29.7%，有效税率 21.42%、NOPAT 9,739，不含经营租赁负债口径下平均投入资本 36,003，若将 142 亿美元经营租赁负债并入投入资本则 ROIC 约 19%–20%。另需注意两点口径边界：一、研发与品牌费用按会计准则当期费用化而非资本化，Michael J. Mauboussin 2022 年报告指出若把部分内部研发与营销视作无形资本化，高研发科技公司的表观 ROIC 会下移；二、若企业存在巨额负营运资本，如 AAPL FY26 应付账款与其他流动负债高达 1,484 亿美元、现金及有价证券 1,369 亿美元高于总债务 801 亿美元，投入资本会被压至 566 亿美元，表观 ROIC 飙升至 230% 以上，此时宜结合自由现金流与资本开支强度综合研判）。[^hd-fy25]，[^mcd-fy25]，[^mauboussin-roic]

算清 ROIC 之后，还要减去企业的**加权平均资本成本**（WACC，即债权人与股东要求的机会成本加权均值），得到**经济利润**（Economic Profit）：

\[
\text{经济利润} = (\text{ROIC} - \text{WACC}) \times \text{投入资本}.
\]

**Michael J. Mauboussin** 用“一美元测试”划出红线：若资本成本 8%，投入 10,000 美元每年只赚 500 美元（ROIC 5%），折现仅值 6,250 美元，越扩张越毁灭价值；赚 800 美元只是原地踏步；唯有赚 1,100 美元（ROIC 11%），1 美元才值回超 1 美元。[^mauboussin-roic] **增长本身不创造价值，唯有回报高于资本成本的增长才创造价值**。

## ROIIC：存量护城河与未来复利跑道 {#nb-e07-roiic}

ROIC 衡量的是历史存量资本的平均回报，股价定价的却是未来增量现金流。一家老牌龙头过去建成的品牌或软件生态可能回报极高，但新赚回来的利润投出去还能不能保持同样效率，要看**增量投入资本回报率**（Return on Incremental Invested Capital，简称 ROIIC）：[^mauboussin-roic]

\[
\text{ROIIC} = \frac{\Delta \text{NOPAT}}{\Delta \text{投入资本}}.
\]

实务中很少只看单年 ROIIC。大额建厂、算力扩产或重磅并购会在当年立刻垫高分母，对应的收入与 NOPAT 往往滞后一到三年才释放，单年数字极易被折旧错期和周期噪音淹没。因此，**Michael J. Mauboussin** 建议采用 **3 至 5 年滚动窗口**，并常把投入资本的变动向前滞后一年，平滑大额投放的时滞（例如用第 3 年减第 0 年的 NOPAT 变动，除以第 2 年减第 −1 年的投入资本变动，让先期资本开支与随后爬坡的盈利在时间上对齐）。[^mauboussin-roic]，[^mauboussin-capalloc]

把增量回报率与利润留存比例相乘，就接上了长期复利的底层规律：

\[
\text{内在价值长期复利增速} \approx \text{再投资率} \times \text{ROIIC}.
\]

1994 年，**Charlie Munger** 点破了这条规律的威力：长期持有一只股票，年化回报终会向企业自身的资本回报率收敛——若公司四十年只赚 6%，再便宜买进，拿满四十年仍会落回 6% 上下；若能二三十年持续按 18% 复利，买价偏贵回报依然可观。[^munger-1994] 不过这里藏着一个前提：公司既要有高存量 ROIC，还要有足够宽的跑道把新钱按高 ROIIC 投出去。

对照存量 ROIC 与增量 ROIIC，表面相似的高盈利企业会分化出三种命运：

- **高存量 ROIC ＋ 窄再投资跑道**（成熟现金牛）：KO 三年滚动 ROIIC 约 **22.1%**，浓缩液赚钱稳健，但全球销量增速有限，FY2025 资本开支仅占收入 4.4%，吃不下全部利润，因此把 87.79 亿美元以现金分红还给股东。[^ko-fy25]，[^ko-fy23]
- **高存量 ROIC ＋ 宽再投资跑道**（复利扩产期）：MSFT 滞后三年 ROIIC 达 **29.3%**，印证了云业务的高产出；但 FY2026 单年 AI 资本开支猛增至 1,159.48 亿美元、产能尚在爬坡，同期三年 ROIIC 随之回落至 **20.1%**——市场当下的分歧，正押在这些新算力能否继续站稳资本成本之上。[^msft-fy26]，[^msft-fy23]
- **高存量 ROIC ＋ 低 ROIIC**（价值毁灭陷阱）：若一家存量 ROIC 高达 30% 的现金牛不甘放慢增长，把新现金投进回报只有 5% 的跨界并购或过剩产能，合并收入与存量 ROIC 短期内仍会好看，拆开三年 ROIIC 却能提前看见新钱正在失血。[^mckinsey-roic]

上面两家龙头的多年投入产出，直观体现了“跑道宽度决定现金去向”的分化（三年滚动 ROIIC 核算明细：KO FY2022→FY2025 间 NOPAT 由 89.35 亿升至 113.01 亿美元，投入资本由 542.04 亿温和增至 649.20 亿美元［净增 107.16 亿美元］，三年 ROIIC 约 22.1%，FY2025 固定资产 CapEx 为 21.12 亿美元；MSFT FY2023→FY2026 间 NOPAT 由 717.23 亿跃升至 1,251.27 亿美元［净增 534.04 亿美元］，按滞后一年口径 FY2022→FY2025 投入资本净增 1,821.68 亿美元对应 ROIIC 29.3%，按同期窗口 FY2023→FY2026 投入资本净增 2,660.39 亿美元对应 ROIIC 20.1%）。把 **ROE**、**ROIC** 与 **ROIIC** 并排摆进一张判别图谱，各自的职责与踩坑红线便一目了然：

ROE、ROIC 与 ROIIC 判别图谱：定义、适用场景与失真陷阱

先用 DuPont 拆清杠杆，再用 ROIC 检验存量质地，最后用滚动 ROIIC 追踪复利跑道

ROE、ROIC 与 ROIIC 三大指标对比：一、ROE（归母净利润除以平均股东权益，可拆为净利率乘资产周转率乘权益乘数）：最适用于银行、保险等金融企业及低杠杆公司；核心陷阱是借债与连续回购会压薄甚至压负股东权益（如 HD ROE 145.5%、MCD 负权益失真）。二、ROIC（NOPAT 除以平均投入资本，分含商誉与不含商誉）：最适用于跨公司横向比较非金融企业护城河，并与 WACC 比较检验经济利润；核心陷阱是不适用于金融业，且未扣超额现金、未考虑研发费用化或极端负营运资本（如 AAPL）时会产生偏差。三、ROIIC（NOPAT 增量除以投入资本增量，宜用 3 至 5 年滚动与滞后窗口）：最适用于区分高回报复利扩产与成熟现金牛，并预警高存量 ROIC 公司低效再投资；核心陷阱是单年数据受大额并购或 CapEx 投放时滞干扰极大（如 MSFT FY26 千亿级 AI CapEx 拉低同期 ROIIC），且不可脱离资本成本单独判断。底部公式强调长期内在价值复利增速约等于再投资率乘以 ROIIC。

**单家公司分析宜三指标联读：DuPont 看杠杆依赖度，ROIC 含／不含商誉看存量生意与并购总账，3–5 年滚动 ROIIC 看未来复利跑道。**

## 资本配置的五条出路、回购价格与管理层激励 {#nb-e07-allocation-incentives}

公司每年赚回自由现金流后，管理层手里一共只有五条出路：**内生再投资**、**外部并购**、**偿还债务**、**股票回购**与**现金分红**。**Warren Buffett** 在 2012 年 Berkshire Hathaway 股东信里给出过一条清晰排序：主业里回报高于资本成本的扩张优先留存复利，多余现金再跨这五条路径横向比价，流向风险调整后最能增厚每股长期内在价值的地方。[^berkshire-2012]，[^mauboussin-capalloc]

1 美元留存自由现金流的五条出路：创造还是毁灭每股价值

每条资金去向都按风险调整后的每股长期内在价值变化判别 · 绿底增厚，橙底毁灭

1 美元留存自由现金流的五条资本配置出路对照：左侧起点为 1 美元留存自由现金流，经五条平滑曲线分流至右侧五张决策卡，每张卡并排给出绿底创造每股价值与橙底毁灭每股价值两类结果。一、内生再投资：ROIIC 高于 WACC 时加速复利、免付并购溢价；ROIIC 低于 WACC 时越扩越亏、持续摊薄经济利润。二、外部并购 M&A：协同明确且买价合理时含商誉全价回报站稳 WACC 之上并增厚价值；高溢价买低回报则拉低含商誉 ROIC，须警惕账面 EPS 增厚幻觉（如 HD 并购后 ROIC 回落）。三、偿还债务：高息债务或临近债墙时优先止血、守住财务弹性；过度去杠杆闲置低息现金则会放弃高确定性投资与资本结构效率。四、股票回购：买价低于每股内在价值时折价注销股本增厚股东；高估追买或仅用来抵销 SBC 摊薄则会把多付溢价转给退出者，净股数几乎未缩。五、现金分红：再投资空间耗尽时把钱还给股东、避免低效囤钱；错失高 ROIIC 扩张跑道过早承诺刚性股息则会挤占长期复利机会。

**资本配置没有固定套路：高回报跑道充足时优先内生再投资，跑道收窄或负债偏高时转向降债、分红或折价回购。**

顺着树图往下查，并购与偿债藏着两处常见误判。**McKinsey** 指出，取消商誉摊销后，只要标的盈利盖过税后债息，哪怕全价回报低于 WACC、实际毁灭价值，首年 EPS 照样“增厚”。[^mckinsey-roic] 而大额并购推高杠杆后，停下回购去降债往往更守纪律——HD 2024 年 3 月收购 SRS 后即暂停回购，FY2025 回购归零，优先削债并保住 36.79 亿开支与 91.52 亿美元分红。[^hd-fy25]

同为向股东返还现金，分红与回购的效果并不对称。正如[《股东回报：分红、回购与增发》](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)所讲，分红带有很强刚性——**Michael J. Mauboussin** 引用的调研显示，逾六成 CFO 宁可放弃高回报项目也不愿削减股息，因此更适合 KO 这类再投资空间有限的成熟现金牛。[^mauboussin-capalloc] 回购灵活得多，但本身不创造一美元经营利润，成败全看买价是否低于每股内在价值。[^berkshire-2012]

一道心算就能看清买价的分量：假设公司共 10 股，业务值 900 美元加 100 美元现金，每股值 100 美元。拿这 100 美元回购后，剩余业务均值 900 美元——趁悲观按 **75 美元**注销 1.333 股，剩余每股立刻升至 **103.85 美元**（+3.8%）；按 **140 美元**溢价追买，仅注销 0.714 股，剩余每股反降至 **96.92 美元**（−3.1%）。

### 管理层激励与 SBC 净股数核对

既然配置决定长期每股结果，管理层为何常反着干？答案多半藏在代理书（Form DEF 14A）的薪酬条款里。奖金若挂钩收入或未扣资本成本的 Adjusted EBITDA，高管天然偏好冲规模与溢价并购；若像 HD 把 **50%** 长期绩效股绑定三年 ROIC（FY23—FY25 未达标即折减至 70.1%），或像 KO 纳入三年累计自由现金流，激励才向股东靠拢（激励统计与委托书细节：Michael J. Mauboussin 与 Dan Callahan 2025 年 11 月报告转引 FW Cook 对 S&P 500 前 250 大企业的追踪显示，2024 年高管长期激励中采用相对或绝对 TSR 的占 73%、利润／EPS 占 53%、资本效率指标仅占 34%、收入占 25%、现金流仅占 16%。HD 2026 DEF 14A 披露 FY2023—FY2025 绩效股三年平均 ROIC 目标 39.2%、实际 37.4%，平均营业利润目标 228.4 亿、实际 211.5 亿美元，综合兑现 70.1%；KO 2026 DEF 14A 披露 2025—2027 周期 PSU 将有机营收、EPS 与三年累计自由现金流［目标 358 亿美元］等权挂钩，并叠加相对同业 TSR 调节系数）。[^hd-def14a]，[^ko-def14a]，[^mauboussin-capalloc]

核对回购时，还要连回[《股票的类型、发行与交易形式》](https://ou-liu-red-sugar.github.io/zh/notebook/stock-types-issuance-trading/)检查 **SBC** 摊薄。许多科技股的大额回购其实只是在对冲员工新发股份：FY2026 里，MSFT 回购 222.71 亿对照 124.05 亿美元 SBC，稀释股数仅微降 **0.16%**；同期 AAPL 回购 863.90 亿远超 137.89 亿美元 SBC，期末股本才真正净缩 **1.63%**，切实抬高每股份额（全市场背景与精确股数：Michael J. Mauboussin 与 Dan Callahan 2025 年报告统计，2024 年美国上市公司 SBC 费用合计达 3,140 亿美元，同期总回购 1.1 万亿美元，逾四分之三 CFO 承认对冲 SBC 稀释是回购的重要动因。具体到两家公司 FY2026 年报：MSFT 稀释加权平均股数仅由 7,465 M 股微降至 7,453 M 股；AAPL 期末流通股由 14,773 M 股缩减至 14,532 M 股）。[^mauboussin-capalloc]，[^msft-fy26]，[^aapl-fy26]

下面这台单屏推演器把杠杆、再投资率与 ROIIC 装进了同一张面板，可以切换三类典型公司并拖动滑块，直观检验 ROE 与 ROIC 如何拉开落差，以及五年期每股自由现金流与内在价值怎样分化：

ROE / ROIC / ROIIC 与五年资本配置推演器

期初投入资本 100 美元/股 · 税后债务利率 4.5% · 资本成本 WACC 8.0%

财务杠杆（债务/权益）0.2×

利润再投资率70%

增量回报率 ROIIC28%

互动推演器默认展示高 ROIIC 扩产复利型设定（期初投入资本 100 美元/股、存量 ROIC 25.0%、债务权益比 0.2 倍、再投资率 70%、增量 ROIIC 28.0%）：左侧显示账面 ROE 29.1%、存量 ROIC 25.0%（杠杆放大仅 +4.1 个百分点）、增量 ROIIC 28.0%（高出 8.0% 资本成本 +20.0 个百分点），第 5 年末总 ROIC 升至 26.7%。右侧展示第 0 年至第 5 年每股 NOPAT 从 25.0 复利增至 61.2 美元（隐含年增速 19.6%），其中每期 30% 为当期可分配每股 FCF（第 0 年 7.5 升至第 5 年 18.4 美元，5 年累计 66.2 美元）、70% 留存再投资，策略较零增长净增厚内在价值 +83.0%。另外两套预设分别为轻资产高 ROIC 现金牛（ROIC 24%、杠杆 1.0 倍致 ROE 43.5%、再投资 20%、ROIIC 18%、5 年累计 FCF 106.9 美元）与借债拉高 ROE 但 ROIC 平庸型（ROIC 10%、杠杆 3.0 倍致 ROE 26.5%、再投资 60%、ROIIC 6% 低于 WACC，策略净毁灭价值 −4.6%）。

高复利扩产：将 70% 利润投入 28% 的增量跑道（超资本成本 +20.0 pp），每股盈利能力以 19.6%/年复利增至第 5 年 61.2 美元/股，当期 FCF 由 7.5 升至 18.4 美元/股，策略净增厚价值 +83.0%。

**杠杆恒等式：ROE ＝ ROIC ＋（债务 ÷ 权益）×（ROIC − 税后债务利率）。把预设切到“③ 借债拉高 ROE 但 ROIC 平庸型”后，试着拖动“财务杠杆”与“利润再投资率”，可以直观看到加杠杆只抬高 ROE、不增加一分经营现金流，而把低回报再投资率降到 0% 反而止住价值毁灭。**

到这里，从三表勾稽、营运资本、盈利质量到 ROE、ROIC、ROIIC 与资本配置，财务分析这条底盘已经合拢。历史报表记录了过去每一美元资本换来的每股现金流；把这份体检转化为面向未来的竞争解释、条件估值与赔率取舍，接下来将在第五卷[《事实、判断与“价格不进权重”》](https://ou-liu-red-sugar.github.io/zh/notebook/#topic-A)与[《业务路径、估值与投资判断》](https://ou-liu-red-sugar.github.io/zh/notebook/#topic-F)继续展开。

[^mauboussin-roic]: Michael J. Mauboussin & Dan Callahan，[Return on Invested Capital: How to Calculate ROIC and Handle Common Issues](https://www.morganstanley.com/content/dam/im/assets/publication/thought-leadership/consilient-observer/article_returnoninvestedcapital.pdf)，Morgan Stanley Counterpoint Global Insights，2022-10-06。
[^mauboussin-capalloc]: Michael J. Mauboussin & Dan Callahan，[Capital Allocation: Results, Analysis, and Assessment](https://www.morganstanley.com/content/dam/im/assets/publication/thought-leadership/consilient-observer/article_capitalallocation.pdf)，Morgan Stanley Counterpoint Global Insights，2025-11-05。
[^mckinsey-roic]: McKinsey & Company，[Merger valuation: Time to jettison EPS](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/merger-valuation-time-to-jettison-eps) 与 [Why bad multiples happen to good companies](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/why-bad-multiples-happen-to-good-companies)，含商誉与不含商誉 ROIC 及并购 EPS 增厚幻觉分析。
[^munger-1994]: Charlie Munger，*A Lesson on Elementary, Worldly Wisdom As It Relates To Investment Management & Business*（1994，USC Business School），引文核对见 [RBC BlueBay 研究引录](https://www.rbcbluebay.com/globalassets/documents/whats-a-share-price-worth.pdf)。
[^berkshire-2012]: Warren Buffett，[Berkshire Hathaway 2012 Shareholder Letter（Dividends 节）](https://www.berkshirehathaway.com/letters/2012ltr.pdf)，资本配置排序与低于内在价值回购原则。
[^msft-fy26]: Microsoft Corporation，[FY2026 Form 10-K（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)与 [FY2026 EX-99.1](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29 提交。
[^msft-fy23]: Microsoft Corporation，[FY2023 Form 10-K（截至 2023-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000095017023035122/msft-20230630.htm)，用于 FY2022—FY2026 投入资本与三年滚动 ROIIC 核对。
[^ko-fy25]: The Coca-Cola Company，[FY2025 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)与 [FY2025 EX-99.1](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)，2026-02-20 提交。
[^ko-fy23]: The Coca-Cola Company，[FY2023 Form 10-K（截至 2023-12-31）](https://www.sec.gov/Archives/edgar/data/21344/000002134424000009/ko-20231231.htm)，用于 FY2022—FY2025 三年滚动 ROIIC 核对。
[^hd-fy25]: The Home Depot, Inc.，[FY2025 Form 10-K（截至 2026-02-01）](https://www.sec.gov/Archives/edgar/data/354950/000162828026019436/hd-20260201.htm)，2026-03-18 提交，Item 7 ROIC 调节表、资本配置政策与 Item 8 经审计财报。
[^hd-def14a]: The Home Depot, Inc.，[2026 Form DEF 14A](https://www.sec.gov/Archives/edgar/data/354950/000035495026000090/hd-20260406.htm)，2026-04-07 提交，Performance Shares 三年平均 ROIC 权重（50%）与 FY2023—FY2025 实际兑现（70.1%）。
[^mcd-fy25]: McDonald’s Corporation，[FY2025 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/63908/000006390826000035/mcd-20251231.htm)，2026-02-24 提交，利润表、负股东权益资产负债表与库存股披露。
[^aapl-fy26]: Apple Inc.，[FY2026 Form 10-K（截至 2026-09-26）](https://www.sec.gov/Archives/edgar/data/320193/000032019326000026/aapl-20260926.htm)，2026-11-03 提交，净利润、股东权益、股票回购、SBC 费用与期末流通股变动。
[^ko-def14a]: The Coca-Cola Company，[2026 Form DEF 14A](https://www.sec.gov/Archives/edgar/data/21344/000110465926028215/ko-20260429xdef14a.htm)，2026-03-16 提交，2025—2027 周期 PSU 业绩指标与三年累计自由现金流目标（358 亿美元）。
