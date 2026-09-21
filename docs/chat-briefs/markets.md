# Chat-M · 金融市场与金融工具：阅读与写作交接

分发版本：2026-09-21 / production-v2（调用预算修订）。首轮原始派题使用 v1 快照，实际进度见生产记录。内容根为 C:/Users/23980/Documents/Ou-Liu-Red-Sugar.github.io；先核实际连接能读取具名文件。正文用 6 Pro；补读、后续规划和审校用 xhigh，由 Codex 核界面。全项目 Pro 目标 25 次、上限 30 次，内容组可合并，不逐节点耗一次调用。

## 你的职责

以真实合约和市场机制为中心，解释权利安排的经济理由、价格、资金与履约。传统与现代工具使用同一语言；具体策略交给 P。

首组：M-A。

先实际阅读金融权利、发行与二级市场、订单及清算结算对应的讲义正文和原始制度资料，再规划 M-A。已有 BKM/Hull 的目录只帮助选题，需自行补到可读正文；期权、永续、AMM 等后续批次另读其完整相关单元。

## 执行顺序

先实际读取本领域 reference 的相关完整单元，并自行搜索、比较和补充讲义、教材、论文及原始材料。大纲和模板用于定位任务，不算完成文献阅读。已有来源记录中的“已读”是上一轮执行者的范围，你仍需实际读取本次要采用的原文。

本轮先返回领域组序和首组的阅读/写作方案，等待 Codex 对具名批次的确认，再写正文。后续每组同样先补读和规划。你可提出有来源依据的骨架修改，但保持当前五领域、独立公司库及已确认方法。

先读 ../notebook-production-plan.md 的职责与阶段，再按需要实际读取 ../investment-notebook-outline.md 的本领域、../notebook-authoring.md 的共用要求及所用 T 模板、../notebook-agent-template.md、../notebook-knowledge-graph.md。文献入口在 ../notebook-source-map.md；以下是本领域的起始资料，不是封闭书单。

输出首轮阅读/规划回单：task_id、domain、batch、phase=reference_plan、input_versions、readings、entry_plans、shared_inputs、open_issues。readings 逐项写版本、URL/文件、实际定位、完整取得范围、用于哪一步、分歧及限制；entry_plans 写学习任务、段落、案例、必要推导、图与交互、练习与解析、关系和 Agent 必读单元。不要只说“已阅读”。

取得确认后成组写作：合并已核读和获确认的相关组，通常一次 4–8 个完整学习节点，短参考可随组；以完整文件交付，必要续写计入同一 Pro 预算；先组织连续叙述再拆节点。正文、来源、案例/计算、图与交互规范、练习解析、图谱边和专属教学 Prompt 一起交回。已有数学基础直接使用，实质内容以 10–20 分钟学习任务为准；短参考不凑时长。逐篇检查读者能否独立解释与迁移，并落实修正。

结果由 Codex 回收、核对并接入正式内容。保持具名读取范围，普通写作不需要你启动本地命令或改工作区文件。未知、未取得与未执行分别说明。当前文献版本和规则要实际核实，不能把旧资料中的“当前”照搬。

## 自主检索与接口

公开大学金融市场/衍生品讲义；交易所及清算机构的当前规则；与所选机制相关的近年研究。永续搜索定价、资金费率和市场分割；AMM 搜索库存与逆向选择。先核版本和研究设置，再采用。

维护契约、计价、收益与现金的公共定义，向 Chat-P 提供版本化合约及报价口径。M21 与 Chat-QT 的 QT18 共用有限状态例；M29 与 P33 分开交易机制和 LP 投资结果。

## 本领域拟定组序

- M-A · 金融权利、发行、交易与交收：M01、M02、M03、M04。
- M-B · 股东权利、基金与 ETF：M05、M08。
- M-C · 债券、利率风险与融资工具：M06、M07、M09。
- M-D · 远期、期货、基差、展期与互换：M10、M11、M12、M13、M14。
- M-E · 期权权利、权利金、支付与行权：M15、M16、M17、M18。
- M-F · 局部风险、平价与复制定价：M19、M20、M21。
- M-G · 波动率曲面、信息与市场有效性：M22、M23。
- M-H · 永续、反向合约与清算：M24、M25、M26。
- M-I · 稳定币权利与代币化交收：M27、M28。
- M-J · AMM、库存与集中流动性：M29。

## 起始 reference 与本轮必读范围的选择

下面摘自当前资料地图，用于直接定位原件。每项保留先前实际读取层级；你按本次采用命题/案例选择并读完相关单元，在回单中另记自己的读取范围。仅目录或摘要的项目必须补到足够正文后才能支撑教学。首组只读相关项，后续组分别补读。

### MP-BKM · [Investments, 13th Edition](https://info.mheducation.com/rs/128-SJW-347/images/Bodie_Preface_Investments_13e.pdf)

- 作者/机构：Zvi Bodie；Alex Kane；Alan J. Marcus。版本/年：13e; copyright 2024, publication 2023-01-12。本轮取得：2026-09-20。
- 实际读取：完整公开目录与前言，未读各章正文；26 页出版社目录／前言；Ch1–4 资产、市场与基金；Ch5–10 收益、组合、指数模型与均衡；Ch13 实证；Ch14–16 固定收益；Ch20–23 衍生品；Ch24 绩效；Ch27–28 管理与政策。
- 用途：划分工具、定价、组合、执行的知识层次及定位后续必读章。。
- 范围与限制：不能以目录作为具体定理、公式或策略效果的证据；现代股票实践并不因此采用 DCF/WACC。。
- 词条对应：M01–M09：ch1–4、14–16 目录；M18–M22：ch20–23 目录；P01–P12：ch5–10、24、27–28 目录；P25：ch13 目录。

### MP-HULL · [Options, Futures, and Other Derivatives, Global Edition](https://www.pearson.com/en-gb/subject-catalog/p/options-futures-and-other-derivatives-global-edition/P200000004519/9781292410654)

- 作者/机构：John C. Hull。版本/年：11e; published 2021-07-05; copyright 2022。本轮取得：2026-09-20。
- 实际读取：出版社完整目录，未读付费正文；网页 Table of Contents Ch1–37。
- 用途：合约、期货对冲、期权策略和模型分层；章节覆盖校准。。
- 范围与限制：目录不能直接支持精确定价或实证结论。。
- 词条对应：M09–M14：ch2–7、34–35 目录；M15–M22：ch10–15、19–20、28 目录；P20–P22：ch3、6 目录。

### MP-MIT-OPT · [15.401 Finance Theory I, Lectures 10–11: Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)

- 作者/机构：Andrew W. Lo。版本/年：2007–2008 lecture file; Fall 2008 course。本轮取得：2026-09-20。
- 实际读取：31 页 PDF 中 slides2–21 的文字及例题结构；slides2–4 合约与保险；slides5–9 payoff、profit 和 return；slides10–13 组合结构；slides16–21 二项模型和复制。
- 用途：权利设计、收益与利润区分，复制与预测概率的不同职责。。
- 范围与限制：没有声称全套讲义和证明复核；公式写作需回到页面图像复核；历史规则不代替现行规格。。
- 词条对应：M15–M16：slides2–9；M20–M21：slides16–21；P13–P18：slides10–13；P26：slides16–21。

### MP-OCC · [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)

- 作者/机构：The Options Clearing Corporation。版本/年：June 2024。本轮取得：2026-09-20。
- 实际读取：目录和选定章节；并非完整 96 页通读；ChI–II，PDF pp4–10；ChVIII 行权与指派，PDF pp56–57 节选；ChIX 税费及保证金引言，PDF p59；ChX 与指派及风险有关的选段。
- 用途：具体权利义务、期权系列、乘数、履约、交易费用及 margin 与 premium 分离。。
- 范围与限制：OCC 美国标准化合约范围；写作时仍核验当期合约及券商规则；非所有市场通则。。
- 词条对应：M01：chI–II；M03：chIX；M15–M18：chI–II、VIII–X；P08–P09：chIX；P13–P19：chVIII–X；P24：chIX。
- landing_url：https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document。

### MP-MIT-FUT · [15.401 Finance Theory I, Lectures 8–9: Forward and Futures Contracts](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf)

- 作者/机构：Andrew W. Lo。版本/年：2007–2008 lecture file; Fall 2008 course。本轮取得：2026-09-20。
- 实际读取：33 页 PDF 中 slides2–21 的文字；slides3、6–7 企业汇率敞口和对冲作用；slides9–16 远期、标准化期货、保证金、每日结算；slides17–21 持有成本及复制的结构。
- 用途：经济需要先于公式，远期与期货的制度差异，复制价格与预测分开。。
- 范围与限制：旧讲义关于清算消除对手方风险、没有初始现金的简化不能直接沿用；当前规则用 CME/SEC/OCC 校准。。
- 词条对应：M10–M12：slides3–21；M21：slides17–21；P10：slides3、6–7。

### MOD-PERP-PAPER · [Perpetual Futures Pricing](https://arxiv.org/html/2310.11771v2)

- 作者/机构：Damien Ackerer；Julien Hugonnier；Urban Jermann。版本：arXiv:2310.11771v2, posted 2024-09-04; manuscript dated 2024-09-03。本轮读取：2026-09-20–21。
- 实际读取：实际读取引言、§2 模型设定、§3 现金流/递推/无泡沫与可积性条件、§4 开头 inverse 定义；未完整核证明
- 用途：永续的经济功能、funding 与到期终端条件的区别；linear/inverse/quanto 与计价币；模型不等于交易所非线性规则。
- 范围与限制：未复现理论证明、数据；零初始合约价值不能理解成零交易或资金成本。长短方向须按市场定义重核。
- pdf_url：https://arxiv.org/pdf/2310.11771
- entries：永续合约；线性、反向合约与计价货币；基差与资金费率交易

### MOD-BYBIT-FUNDING · [Introduction to Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate)

- 作者/机构：Bybit。版本：updated 2026-05-22 13:52:11。本轮读取：2026-09-20–21。
- 实际读取：主体完整文字，资金费率分解、TWAP、clamp、动态限幅及结算间隔
- 用途：funding 规则、支付时点、溢价与利率项、上限/间隔变化。
- 范围与限制：8 小时是例子而非所有合约固定规则；预估 rate 不是最终 rate；实时规则须再冻结。
- entries：永续合约；基差与资金费率交易；组合实施

### MOD-UNISWAP-V3 · [Uniswap v3 Core](https://app.uniswap.org/whitepaper-v3.pdf)

- 作者/机构：Hayden Adams；Noah Zinsmeister；Moody Salem；River Keefer；Dan Robinson。版本：March 2021。本轮读取：2026-09-20–21。
- 实际读取：9页中abstract、§1 introduction与§2 concentrated liquidity；未全部核实现
- 用途：常数乘积、虚拟与真实储备、集中区间、出区间停止赚交易费。
- 范围与限制：协议版本固定为v3，不将初始费率档位当今所有可选档位；未采具体区块池数据；公式图像尚需写作时复核。
- entries：自动做市；流动性提供作为投资

## 回单前核对

确认你的方案已具体说明 reference 怎样改变叙述、哪些内容要推导或复算、每个真实例子来自哪里，以及读者完成后能独立做什么。需要 Codex 决定的事项只列会影响采用的具体分歧。当前阶段停在阅读与规划回单，收到具名批次确认后再进入成稿。
