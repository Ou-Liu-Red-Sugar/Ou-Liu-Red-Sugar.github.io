# 首批词条的来源与采用记录

范围：网站教学样例；复用具名现有研究，不开展新的公司估值。AMZN 与 GOOG 由用户指定。资料选择与编辑日期为 2026-09-20。

## 公司材料

- AMZN：`F:/Investing-v3/research/AMZN/report.md` 与 `valuation-20260920/calibration.md`。采用业务集合、零售总额/平台净收入区别，以及设备付款—投用—折旧—账单的时间关系。未采用股价、情景估值、收益概率或账户信息。
- GOOG：`F:/Investing-v3/research/GOOGL/report.md`。采用 Alphabet 公司业务集合、共享技术基础设施与设备用途区分。研究原证券为 GOOGL；网站 GOOG 入口只复用公司层面分析，没有移用 Class A 股价、目标价、股数口径或收益结果。
- 两份案例均固定研究截止日 2026-09-20、资料期间 2026 年第二季度及上半年。公司页与宿主案例分别标明日期。
- 公开证据核对：[Amazon Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)、[Alphabet Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)。Alphabet 的 Inventory 会计政策说明企业客户 TPU 系统及设备存货；网站未把这种分类推断成所有设备均可出售。
- 页面中的“案例推论”“分析框架”“分析限制”是依据业务关系作出的编辑解释；来源摘要不伪装原文引句。

## 理论与教学

本地参考：`F:/Investing/workspace/learn/stochastic-processes-financial-markets/tex/chapters/03-04-independence-conditional-probability-expectation.tex`，条件期望定义、有限分割及基本性质；`04-02-derivatives-contingent-cash-flows.tex` 为衍生品内容参考。旧项目只作具名内容源，原文件未修改。

条件期望保留 X 可积、子 sigma 代数、可测性、所有可测集合上的积分保持以及几乎处处唯一性；有限分割中明确正概率单元。骰子例子是新增教学例子，不是原讲义四点例子的逐字转换。塔式性质使用嵌套信息与可积条件，附定义与唯一性证明。

看涨期权使用假设参数 K=100、权利金=8、一单位、S_T=120；到期收益20、净盈亏12、盈亏平衡108。排除费用、税项与融资；到期图不表示当前期权价格。边界计算与骰子期望保持性质由浏览器实际使用的计算模块检验。

## Chat 协作

会话：https://chatgpt.com/c/6aafd753-3214-83ea-b41a-b5abca7fccb8

界面核实为 Chat 模式、极高档位；未显示可核模型名称，记录为 null。使用 codex-with-chatgpt skill 的讨论流程，当前未依赖连接器写本地。

Chat 首轮返回三个概念的 JSON 写作初稿、教学 Prompt 与交互说明；主线修订后返回金融资产开篇。开篇核对 Investor.gov 的 Stocks、Bonds 与 OIC Options basics；Lead 明确治理权取决于股份类别，避免将所有股票默认成投票权相同。通过可见 DOM 读取并编辑采用；本目录没有声称保存逐字原回复，原回复保留在会话。Lead 增补数学完整条件、调整“条件期望是随机变量”的表述以容许常数情形，提供公司快照、英文对应版本、引用与实际交互实现。Chat 未收到完整私人研究库。

## 公开边界

本文件是非发布的编辑来源记录；Hugo 只从 content、content-zh、data 与 static 形成站点。公开模板只输出经过选择的来源字段。内部路径与私人研究正文不复制到公开目录。网站仍为本地草稿，未经本次任务发布。
