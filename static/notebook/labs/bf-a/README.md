# BF-A：完整原表与事件传导

公开入口为 `interactions.html`，含 `#BS-RETAIL`、`#BS-BANKING` 和 `#EXP-BF05-EVENTS`。网站只需一个 iframe；行业按钮和片段入口负责选择。页面不加载外部框架、字体或网络数据，生成时已经保存完整原表、静态计算、四个事件与期初状态。

历史输入来自已核 `docs/production/20260921/review/costco-2025-balance-sheet.json` 与 `jpm-2025-balance-sheet.json`。`build.cjs` 读取这两份现行输入，输出 `data.json` 和完整静态 HTML；未改变原研究输入。Costco 为 2025-08-31／2024-09-01，JPM 为 2025-12-31／2024-12-31，主表单位均为百万美元。直接加总完全沿 `aggregation_rules`，JPM 的 VIE 脚注单独保留，股数与面值保持自身单位。

交易实验按 BF-05 初稿 §4 与配套规格：期初现金和权益各 100 美元；采购成本 100、售价 150；期初出资在观察窗口之外；忽略税、退款、信用损失、运费、其他费用与分配，销售满足确认条件。可选先付款或先收款，修改期初现金时同步修改权益。每步列累计余额与增减、资产＝负债＋权益、累计本期利润及经营现金净额。现金不足时停在付款之前，保留上一状态并显示缺口。

`engine.js` 是浏览器与静态生成共同使用的纯计算；`view.js` 共享表格、SVG 和文本输出。`node build.cjs` 重建，`node verify.cjs` 复算。验证记录包含两期主表与脚注直接加总、两种资金顺序、零现金付款约束、零售 893／963／70 对照、贷款准备分母及普通股每股账面值、原表行与深链。浏览器视觉检查由 Lead 单独完成，本包记录不代称浏览器已检查。

计算和资料采用范围：比率、余额差与每股账面值仅执行 BF-05 已列计算；70 的来源保持未归因；没有增加经营预测、银行安全评分或估值模型。完整来源、页码、原行文字和本次核验日随输入保留。

2026-09-21 v2: iframe fragment mode isolates BS-RETAIL, BS-BANKING or EXP-BF05-EVENTS; standalone keeps the complete lab. Supplier receivables and AFS/HTM measurement prose follows reviewed BF-05 v2; numeric inputs and computations are unchanged. Before-change files are preserved in .git/notebook-planning/frontend-before-inline-20260921-024337/static/notebook/labs/bf-a/.
