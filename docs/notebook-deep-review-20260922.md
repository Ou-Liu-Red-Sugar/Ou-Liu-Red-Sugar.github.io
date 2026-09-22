# 投资学笔记深度复审 · 2026-09-22

本记录对应提交 `099d880` 中对143个投资词条所做的审校与技术验证，覆盖五个知识领域、公司入口、有日期的研究记录和中英期权对应篇. 用户随后指出写作要求执行不足、词条内部缺乏连续分析；本记录中的处理篇数与技术通过结果不表示文稿质量已获认可. 后续整篇重写见 [连贯性修订记录](notebook-coherence-review-20260922.md). 正文源为 `notebook/entries/*.json`，网页、引用预览、搜索资料与Agent Markdown由同源生成.

## 协作与采用

审校使用Chat xhigh，最多三个会话并行，本轮Pro调用为0. 17个批次分别读取具名交接包、完整当前稿和相应reference，再返回逐处修改及阅读记录. Codex逐篇核对采用，补读缺失原件，并处理跨篇术语、计算与引用的一致性. Chat通过codex-with-chatgpt读取本地材料，文件修改与验证由Codex完成.

| 批次 | 词条数 | 范围 |
|---|---:|---|
| M-A / M-B / M-C | 9 / 10 / 12 | 金融市场与工具，含中英期权篇 |
| BF-A / BF-B / BF-C | 8 / 8 / 6 | 企业经营与财务分析 |
| EI-A / EI-B | 9 / 9 | 经济与行业分析 |
| P-A / P-B / P-C / P-D | 12 / 7 / 8 / 8 | 投资分析、组合、策略与方法参考 |
| QT-A / QT-B / QT-C / QT-D | 10 / 5 / 8 / 7 | 数学、统计、计算与证明子单元 |
| R | 7 | 公司入口与研究记录 |

原始Chat回执、实际会话地址、逐处采用记录及验证报告保存在本地 `docs/production/20260921/deep-review/`. 入口为 `state.json`，阅读记录位于各批次 `reviews/*-review.json` 的 `reading_log`. 该目录沿项目约定不进入公开站点.

## 编辑结果

删除课程预告、同义复述、重复的教学身份说明、自我辩护与审校过程脚注. 保留条件的判断标准为：删除后是否改变定义、事实、证明、数据身份、计量口径或操作含义. 条件紧邻所限定的命题，后文直接继承. 题目、解析和有判别作用的反例仍用于检查机制与条件.

补齐或重排承重推导，核对条件期望、尾部均值、停止时刻、Itô积分、有限市场定价及时间序列实验中的对象与假设. 数学期望采用 `\mathbb{E}`；Expected Shortfall采用 `\mathrm{ES}`. 一般实数展示至三位小数，小量使用百分比、bp或科学记数法，原始数据与实验输入保持精度. 正文、公式、表格与预览分别核对，论文编号和原始数据身份保持完整.

研究记录保留原研究截止日、报价日和模型输入. Amazon案例统一稀释股数的展示单位，核对公司分部与共同成本、同行TTM分母、股票类别和普通股桥. 本轮修订采用现有研究时点.

银行原表的美元符号单独标为普通文本，避免跨单元的公式识别；修正金额单位粗体. 教学Prompt保留具名必读单元、先读文献的要求、诊断任务与迁移检验.

## 补充原件与复算

各批次原有阅读回执之外，Codex补读或复核以下具名范围. 详细结果见本地 `reviews/lead-primary-completion.json`、`P-A-math-source.json`、`EI-B-source-completion.json` 和 `BusEq-local-check.json`.

| 材料 | 实际使用范围 |
|---|---|
| [Amazon 2026Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm) | Note 8分部成本分配；Note 6未归属RSU滚动 |
| [FASB ASU 2023-07](https://storage.fasb.org/ASU%202023-07.pdf) | ASC 280-10-50-26A/B/C、50-27、55-15C及相关例示 |
| [Walmart FY2027Q2财报](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm)及[演示稿](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm) | 经营利润、现金及有息负债；第26页ROI调节和TTM口径 |
| [Alphabet 2026Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)及[2025全年结果](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm) | 两期上半年及全年经营利润；Note 11存托股份换算 |
| [Microsoft FY2026Q4](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast) | 全年经营利润及OpenAI影响对应的EPS调节 |
| Damodaran 2024年度资料 | 已有本地读取单元pp.6–12、55–57；盈利与索取权的比较口径 |
| [Dembo, Probability Theory, 2021-04-15](https://adembo.su.domains/stat-310b/lnotes.pdf) | §4.1.1–4.1.2，pp.155–158：Radon–Nikodym、Lebesgue分解及唯一性；Hahn分解作为具名依赖 |
| [Barendse, 2019](https://papers.tinbergen.nl/19058.pdf) | 引言pp.2–5：预测比较中估计误差与窗口、样本内外比例的关系 |
| BusEq冻结CSV | 完整432个月，1990-01至2025-12；收益/损失列一致性，样本均值、标准差与标准误 |

BusEq本地复算均值1.389%/月、样本标准差7.288%、常规iid标准误0.351个百分点/月. QT19重抽分布的条件标准误使用经验分布分母，另按其正文公式计算.

## 验证与备份

143份HTML/Agent对照、612个必读单元、144个交互、28个旧URL与5条路线检查通过，错误0、警告0. 本地最终扫描覆盖365个站点页面；窄屏检查页已移出构建目录. 五项部署必需的交互、公式分段与数字显示测试通过.

浏览器核对银行原表、符号表、QT20与QT24公式；QT20和QT24分别有111与79个正常渲染的公式，未见公式错误或裸露TeX. 390px预览中的QT24正文无页面横向溢出，宽表在自身容器滚动；QT04完成窄屏截图检查.

额外运行的既有Python编译器单测有9项夹具错误：临时测试目录缺少 `notebook/notation.json`. 本轮未修改编译器或该测试夹具；生产内容编译、上述部署必需测试及站点校验通过.

修改前基线为 `3f1e28c2c93c256c7c736f2e8fe5499cf2cfd59c`. 词条旧内容可从该提交恢复；写作规范实际旧版另存于 `.git/codex-backups/notebook-deep-review-20260921/notebook-authoring-before.md`，目录和生成数据同处保存. 写作规范重构第1、6节的表达职责；两个方法参考词条保留既有方法与来源.

任务开始前已有的 `public/` 修改及 `data/notebook.json` 图谱排序保留，不纳入本轮提交. 发布状态由对应提交的GitHub Actions部署记录确定.
