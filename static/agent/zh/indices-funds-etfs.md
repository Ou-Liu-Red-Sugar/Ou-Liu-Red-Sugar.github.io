# 指数、基金与 ETF

从 10,000 美元买入 VOO 出发，看这笔钱怎样按指数权重分到各家公司，再认识等权与再平衡、基金净值、ETF 的场内价格、主动与主题管理以及各项费用。

Entry: zh-indices-funds-etfs | Node: NB-V01 | Language: zh | Editorial revision: 2026-10-12

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
先区分持有一组股票与谁管理：可自行建立组合，也可购买基金份额。先定义指数的独立衡量作用，再讲样本、权重、漂移与定期再平衡，随后基金/NAV/ETF，禁止把一篮子股票等同基金或将所有场内基金等同ETF。S&P等权按公司季度调整；参考日与生效日可能已漂移，互动设定为即时调回目标。开篇按VOO2026-06-30基金持仓把10,000美元换算成各公司金额（忽略费用与价差），实图采用同一持仓，公司前十37.9%、IT38.0%，Alphabet合并GOOGL+GOOG，取整行合计与官方合计不同。四股票是假定同本金/成分涨跌，非历史基金表现；费率曲线是相同6%费用前收益假设、年末扣费。CGDV主动，S&P500为基准；CHAT/HUMN/OZEM均主动且主题集中，例中持仓2026-06-30。VOO0.03%、CGDV0.33%、CHAT0.75%为各日期正式费表；费用已进入净值不得再扣。AIVSX5.75%为有条件适用的最高一次性前端费，0.55%年度费已含12b-1。主文简明、细则淡色展开。来源与输入保留，不把产品例变成投资推荐。SOXQ跟踪SOX：美国上市市值最大30家半导体公司，前三12%/10%/8%、其余4%上限（Nasdaq2026方法书）；调整日1,200/400美元是按上限换算的规则推算，非实际持仓。溢价例与NAV链为设定数字，不是VOO实际报价。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-v01-sp-method-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      "required_unit": {
        "locator": "S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。",
        "scope": "S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "S&P U.S. Indices Methodology",
      "authors": [
        "S&P U.S. Indices Methodology"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-msci-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf"
      },
      "required_unit": {
        "locator": "MSCI，MSCI World Index factsheet，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。",
        "scope": "MSCI，MSCI World Index factsheet，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "MSCI World Index factsheet",
      "authors": [
        "MSCI World Index factsheet"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-index-math-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf"
      },
      "required_unit": {
        "locator": "S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。",
        "scope": "S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "S&P U.S. Indices Methodology",
      "authors": [
        "S&P U.S. Indices Methodology"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-equal-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/"
      },
      "required_unit": {
        "locator": "S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。",
        "scope": "S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "S&P 500 Equal Weight Index",
      "authors": [
        "S&P 500 Equal Weight Index"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-equal-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/"
      },
      "required_unit": {
        "locator": "S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。",
        "scope": "S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "等权指数 FAQ",
      "authors": [
        "等权指数 FAQ"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-voo-sheet-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://fund-docs.vanguard.com/F0968.pdf"
      },
      "required_unit": {
        "locator": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "scope": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "VOO 官方季度资料",
      "authors": [
        "VOO 官方季度资料"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-voo-sheet-2",
      "access": {
        "kind": "site_full_text",
        "uri": "/notebook/index-funds/inputs.json"
      },
      "required_unit": {
        "locator": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "scope": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "本篇数据",
      "authors": [
        "本篇数据"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-voo-sheet-3",
      "access": {
        "kind": "site_full_text",
        "uri": "/notebook/index-funds/calculations.csv"
      },
      "required_unit": {
        "locator": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "scope": "Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "计算结果",
      "authors": [
        "计算结果"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-voo-prospectus-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm"
      },
      "required_unit": {
        "locator": "Vanguard，VOO Summary Prospectus，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。",
        "scope": "Vanguard，VOO Summary Prospectus，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "VOO Summary Prospectus",
      "authors": [
        "VOO Summary Prospectus"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-nav-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value"
      },
      "required_unit": {
        "locator": "SEC Investor.gov，Net Asset Value，净资产及每份净值定义，2026-09-27 查阅。",
        "scope": "SEC Investor.gov，Net Asset Value，净资产及每份净值定义，2026-09-27 查阅。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "Net Asset Value",
      "authors": [
        "Net Asset Value"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-fund-structure-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds"
      },
      "required_unit": {
        "locator": "SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。",
        "scope": "SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "Characteristics of Mutual Funds and Exchange-Traded Funds",
      "authors": [
        "Characteristics of Mutual Funds and Exchange-Traded Funds"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-fund-structure-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/rules-regulations/2003/12/amendments-rules-governing-pricing-mutual-fund-shares"
      },
      "required_unit": {
        "locator": "SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。",
        "scope": "SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "共同基金定价规则背景说明",
      "authors": [
        "共同基金定价规则背景说明"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-etf-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
      },
      "required_unit": {
        "locator": "SEC Investor.gov，Updated Investor Bulletin: Exchange-Traded Funds，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。",
        "scope": "SEC Investor.gov，Updated Investor Bulletin: Exchange-Traded Funds，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "Updated Investor Bulletin: Exchange-Traded Funds",
      "authors": [
        "Updated Investor Bulletin: Exchange-Traded Funds"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-rsp-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=RSP"
      },
      "required_unit": {
        "locator": "Invesco，RSP 产品资料，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。",
        "scope": "Invesco，RSP 产品资料，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "RSP 产品资料",
      "authors": [
        "RSP 产品资料"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-urth-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.ishares.com/us/products/239696/URTH"
      },
      "required_unit": {
        "locator": "iShares，URTH 产品资料，跟踪发达市场股票指数的目标，2026-09-27 查阅。",
        "scope": "iShares，URTH 产品资料，跟踪发达市场股票指数的目标，2026-09-27 查阅。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "URTH 产品资料",
      "authors": [
        "URTH 产品资料"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-sox-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://indexes.nasdaq.com/docs/Methodology_SOX.pdf"
      },
      "required_unit": {
        "locator": "Nasdaq，PHLX Semiconductor Sector Index Methodology，2026 年版（变更记录最近一项于 2026-07-06 生效），成分资格、30 家选样、前三 12%／10%／8% 与其余 4% 的权重上限，以及年度重组与季度再平衡日程。",
        "scope": "Nasdaq，PHLX Semiconductor Sector Index Methodology，2026 年版（变更记录最近一项于 2026-07-06 生效），成分资格、30 家选样、前三 12%／10%／8% 与其余 4% 的权重上限，以及年度重组与季度再平衡日程。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "PHLX Semiconductor Sector Index Methodology",
      "authors": [
        "Nasdaq"
      ],
      "version": "2026 年版，变更记录最近一项于 2026-07-06 生效；2026-10-12 读取"
    },
    {
      "source_id": "nb-v01-soxq-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1378872/000119312525325650/d54028d497k.htm"
      },
      "required_unit": {
        "locator": "Invesco，SOXQ Summary Prospectus，2025-12-19，跟踪 SOX 的投资目标、至少 90% 资产投资于指数成分、集中于半导体行业及 0.19% 年度总费用率。",
        "scope": "Invesco，SOXQ Summary Prospectus，2025-12-19，跟踪 SOX 的投资目标、至少 90% 资产投资于指数成分、集中于半导体行业及 0.19% 年度总费用率。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "SOXQ Summary Prospectus",
      "authors": [
        "Invesco"
      ],
      "version": "招募说明书日期 2025-12-19；2026-10-12 读取"
    },
    {
      "source_id": "nb-v01-cgdv-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1870128/000005193126000736/cgdv497k.htm"
      },
      "required_unit": {
        "locator": "Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。",
        "scope": "Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "CGDV Summary Prospectus",
      "authors": [
        "CGDV Summary Prospectus"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-cgdv-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.capitalgroup.com/advisor/investments/exchange-traded-funds/details/cgdv"
      },
      "required_unit": {
        "locator": "Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。",
        "scope": "Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "CGDV 产品资料",
      "authors": [
        "CGDV 产品资料"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-roundhill-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.roundhillinvestments.com/etf/chat/"
      },
      "required_unit": {
        "locator": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "scope": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "CHAT",
      "authors": [
        "CHAT"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-roundhill-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.roundhillinvestments.com/etf/humn/"
      },
      "required_unit": {
        "locator": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "scope": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "HUMN",
      "authors": [
        "HUMN"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-roundhill-3",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.roundhillinvestments.com/etf/ozem/"
      },
      "required_unit": {
        "locator": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "scope": "Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "OZEM",
      "authors": [
        "OZEM"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-fee-rules-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin"
      },
      "required_unit": {
        "locator": "SEC Investor.gov，Mutual Fund and ETF Fees and Expenses，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。",
        "scope": "SEC Investor.gov，Mutual Fund and ETF Fees and Expenses，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "Mutual Fund and ETF Fees and Expenses",
      "authors": [
        "Mutual Fund and ETF Fees and Expenses"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-chat-fee-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1924868/000199937126018651/chat-485bpos_082526.htm"
      },
      "required_unit": {
        "locator": "Roundhill，CHAT Prospectus，2026-08-27，管理费及年度总费用率均为 0.75%。",
        "scope": "Roundhill，CHAT Prospectus，2026-08-27，管理费及年度总费用率均为 0.75%。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "CHAT Prospectus",
      "authors": [
        "CHAT Prospectus"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-aivsx-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.capitalgroup.com/individual/investments/mutual-funds/details/ica-a"
      },
      "required_unit": {
        "locator": "Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。",
        "scope": "Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "AIVSX 产品与费用表",
      "authors": [
        "AIVSX 产品与费用表"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-aivsx-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.capitalgroup.com/individual/investments/share-class-information/reducing-sales-charges.html"
      },
      "required_unit": {
        "locator": "Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。",
        "scope": "Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "Class A 销售费及折扣",
      "authors": [
        "Class A 销售费及折扣"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    },
    {
      "source_id": "nb-v01-vanguard-fees-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investor.vanguard.com/investment-products/mutual-funds/fees"
      },
      "required_unit": {
        "locator": "Vanguard，共同基金费用与最低投资额，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。",
        "scope": "Vanguard，共同基金费用与最低投资额，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。",
        "purpose": "核回本文采用的指数规则、基金机制、产品费用与明确设定的计算。"
      },
      "title": "共同基金费用与最低投资额",
      "authors": [
        "共同基金费用与最低投资额"
      ],
      "version": "2026-09-27 核对；持仓、方法与招募书日期分别见正文"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
[《股票、公司与股价》](/zh/notebook/stocks-company-price/)和[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)都跟着同一笔 100 股 AAPL，钱只放在一家公司上。换一种买法，用 10,000 美元买入 Vanguard S&P 500 ETF（VOO），同一笔钱就会经过基金分到约 500 家美国公司。按 VOO 在 2026 年 6 月 30 日的持仓比例，NVIDIA（NVDA）分到约 750 美元，AAPL 约 660 美元；持仓最多的十家公司合计约 3,790 美元，其余持股合计约 6,210 美元。[^voo-sheet]

<figure class="flow-figure alloc" id="nb-v01-concentration">
<div class="ff-head"><p class="ff-title">10,000 美元买入 VOO，按持仓比例分到各公司</p><span class="ff-sub">2026 年 6 月 30 日 · 按占基金净资产比例换算</span></div>
<div class="al-total business-exchange" aria-label="10,000 美元按 VOO 2026 年 6 月 30 日的持仓比例换算：前十大持股公司合计 37.9%，约 3,790 美元；其余持股合计 62.1%，约 6,210 美元。"><div class="al-part al-open" style="--w:37.9%"><span>前十大公司</span><strong>3,790 美元</strong></div><div class="al-part al-rest"><span>其余持股</span><strong>6,210 美元</strong></div></div>
<div class="al-zoom" style="--w:37.9%" aria-hidden="true"></div>
<div class="ff-bars business-exchange" aria-label="前十大持股公司分到的金额：NVDA 约 750 美元；AAPL 约 660 美元；Alphabet（GOOGL 与 GOOG 合并）约 580 美元；MSFT 约 430 美元；AMZN 约 360 美元；AVGO 约 280 美元；MU 约 200 美元；META 约 190 美元；TSLA 约 180 美元；LLY 约 150 美元。NVDA、AAPL、MSFT、AVGO 和 MU 属于信息技术，合计约 2,320 美元。">
<span class="fb-name">NVDA</span><span class="fb-bar"><i style="--w:100.0%;--c:#24664f"></i></span><span class="fb-val">750 美元</span>
<span class="fb-name">AAPL</span><span class="fb-bar"><i style="--w:88.0%;--c:#7aa88d"></i></span><span class="fb-val">660 美元</span>
<span class="fb-name">GOOGL + GOOG</span><span class="fb-bar"><i style="--w:77.3%;--c:#b47550"></i></span><span class="fb-val">580 美元</span>
<span class="fb-name">MSFT</span><span class="fb-bar"><i style="--w:57.3%;--c:#7aa88d"></i></span><span class="fb-val">430 美元</span>
<span class="fb-name">AMZN</span><span class="fb-bar"><i style="--w:48.0%;--c:#a6b199"></i></span><span class="fb-val">360 美元</span>
<span class="fb-name">AVGO</span><span class="fb-bar"><i style="--w:37.3%;--c:#24664f"></i></span><span class="fb-val">280 美元</span>
<span class="fb-name">MU</span><span class="fb-bar"><i style="--w:26.7%;--c:#24664f"></i></span><span class="fb-val">200 美元</span>
<span class="fb-name">META</span><span class="fb-bar"><i style="--w:25.3%;--c:#b47550"></i></span><span class="fb-val">190 美元</span>
<span class="fb-name">TSLA</span><span class="fb-bar"><i style="--w:24.0%;--c:#a6b199"></i></span><span class="fb-val">180 美元</span>
<span class="fb-name">LLY</span><span class="fb-bar"><i style="--w:20.0%;--c:#a6b199"></i></span><span class="fb-val">150 美元</span>
</div>
<p class="ff-legend"><span style="--c:#24664f">信息技术：半导体</span><span style="--c:#7aa88d">其他信息技术</span><span style="--c:#b47550">通信服务</span><span style="--c:#a6b199">其他行业</span></p>
<figcaption>金额为 10,000 美元乘以各公司占 VOO 净资产的比例，忽略费用和买卖价差；GOOGL 与 GOOG 按 Alphabet 一家合并。<a href="https://fund-docs.vanguard.com/F0968.pdf">基金资料</a> · <a href="/notebook/index-funds/inputs.json">图表输入</a>。</figcaption>
</figure>

这些股票并不在我们自己的账户里。我们持有的是 VOO 的基金份额，VOO 持有这些公司的股票；股价的涨跌和公司派发的股息先进入基金资产，再体现在每份 VOO 上。钱分到了约 500 家公司，却没有平均分开：前十家拿走了将近四成，其中 NVDA、AAPL、MSFT、AVGO 和 MU 属于信息技术行业，合计约 2,320 美元；按行业统计，整只基金有 38.0% 投在信息技术上，约合 3,800 美元。

<span data-text-versions id="nb-v01-text-4">即使分属不同行业，这些公司仍可能依赖相近的客户、需求和资金条件，研究集中度时也要考虑这些共同影响<span data-text-detail>（公司与行业是两个观察维度，比例不能相加。VOO 原表将 Alphabet 的 GOOGL 与 GOOG 合并为一家公司；各行取整后相加为 37.8%，前十合计保持源表公布的 37.9%。图中为基金持仓权重，时点固定为 2026 年 6 月 30 日）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

VOO 给 NVDA 的钱多、给其他公司的钱少，依据的是它跟踪的指数：VOO 以取得接近 S&P 500 的回报为目标，这些比例来自 S&P 500 的选样和加权规则。[^voo-prospectus]

## 指数的定义与样本 {#nb-v01-index}

股票指数是衡量一组股票整体表现的指标。编制者按照规则选择股票、分配权重，再把这些股票的价格变化汇总成可以连续记录的指数点位，各只股票的涨跌就汇成了一条走势。新闻里说 S&P 500 上涨，便是在用这项指数描述它所代表的那部分市场。

不同指数观察的范围各有侧重。S&P 500 由 S&P Dow Jones Indices 编制，主要反映约 500 家美国大盘公司；MSCI 编制的 MSCI World 覆盖 23 个发达市场的大盘和中盘股票，包括美国、日本、英国等市场。[^sp-method]<sup>，</sup>[^msci] <span data-text-versions id="nb-v01-text-1">MSCI World 的名称容易让人联想到全球股票市场，但它只覆盖发达市场，不包括新兴市场<span data-text-detail>（范围采用 2026 年 8 月 31 日官方资料，覆盖各市场约 85% 的自由流通调整后市值。市场归类依照指数的分类口径；公司被纳入哪个市场，与它在世界各地经营、取得收入的范围，是不同的观察维度）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

要反映这部分市场，编制者就要按规则选出参与计算的股票。S&P 500 会考察公司所属市场、规模、可交易股份、流动性和盈利等条件，再由指数委员会作出选择，并不直接按市值排名截取前五百家；公司状况和市场发生变化，成分名单也会随之调整。[^sp-method]

<span data-text-versions id="nb-v01-text-2">指数点位把这些股票的表现连续记录下来，我们通常比较的是同一指数的变化幅度。不同指数各有基期和计算方法，单凭点位高低不能判断哪个市场更贵<span data-text-detail>（价格指数主要记录价格变化；总回报指数还将分红及其再投资计入，税前、税后口径又可能不同。拿基金回报与指数比较时，应匹配分红、币种、期间和费用口径；公司拆股、成分变更等也需依方法调整计算，避免把计量变化当成市场涨跌）</span>。[^index-math]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 市值加权、等权与再平衡 {#nb-v01-weights}

选出成分以后，还要规定每只股票在计算中占多大比重，也就是权重。同样幅度的涨跌，权重越大的股票对指数的影响就越大。S&P 500 采用自由流通市值加权，可供公众投资的股份对应的市值越大，权重越高；VOO 按这套权重持股，所以自由流通市值最大的 NVDA 分到的钱也最多。[^sp-method]

同一组公司也可以换一种分法。S&P 500 等权指数采用相同的成分，按季度把各家公司调回相同的目标权重，通常每家约占 0.2%。如果用同样的 10,000 美元买入跟踪它的 Invesco S&P 500 Equal Weight ETF（RSP），在调整当日，NVDA 和规模最小的成分公司各分到约 20 美元。[^equal]<sup>，</sup>[^rsp]

这种按规则把权重调回目标的操作称为再平衡。等权规定的是调整那一天的比例；在两次再平衡之间，股价的涨跌仍会让权重偏离目标。

我们先把数量缩小到四只股票，观察这个过程。两种方式都投入 10,000 美元，市值加权的起点为 40%、30%、20%、10%，等权的起点则各为 25%。把图从“再平衡日”切到“期间价格变化”，就能看到同样的涨跌怎样改变两组权重。

<figure class="if-figure tex2jax_ignore" data-if-rebalance id="nb-v01-rebalance">
<span class="if-kicker">同一组股票 · 两种权重规则</span>
<h3>从等权开始，随价格漂移，再按期调回</h3>
<div class="if-tabs" aria-label="观察权重变化的阶段"><button type="button" data-if-stage="0" aria-pressed="true">① 再平衡日</button><button type="button" data-if-stage="1" aria-pressed="false">② 期间价格变化</button><button type="button" data-if-stage="2" aria-pressed="false">③ 下一次再平衡日</button></div>
<label class="if-control">期间 A 的涨跌幅<input type="range" min="-40" max="60" step="5" value="40" data-if-return aria-label="期间股票A的涨跌幅"><output>+40.0%</output></label>
<div class="if-legend"><span><i style="--color:#24664f"></i>股票 A</span><span><i style="--color:#5986a1"></i>股票 B</span><span><i style="--color:#b47550"></i>股票 C</span><span><i style="--color:#c7cba3"></i>股票 D</span></div>
<div class="if-bars"><div class="if-bar-row" data-if-kind="cap"><div class="if-bar-label"><span>市值加权</span><strong data-if-value>10,000 美元</strong></div><div class="if-bar-track" data-if-track><span class="if-segment" style="width:40%;--color:#24664f">40.0%</span><span class="if-segment" style="width:30%;--color:#5986a1">30.0%</span><span class="if-segment" style="width:20%;--color:#b47550">20.0%</span><span class="if-segment" style="width:10%;--color:#c7cba3">10.0%</span></div></div><div class="if-bar-row" data-if-kind="equal"><div class="if-bar-label"><span>等权</span><strong data-if-value>10,000 美元</strong></div><div class="if-bar-track" data-if-track><span class="if-segment" style="width:25%;--color:#24664f">25.0%</span><span class="if-segment" style="width:25%;--color:#5986a1">25.0%</span><span class="if-segment" style="width:25%;--color:#b47550">25.0%</span><span class="if-segment" style="width:25%;--color:#c7cba3">25.0%</span></div></div></div>
<div class="if-result"><div><span>市值加权 · 区间收益</span><strong data-if-cap-return>0.0%</strong></div><div><span>等权 · 区间收益</span><strong data-if-equal-return>0.0%</strong></div></div>
<p class="if-stage-caption" data-if-caption aria-live="polite">起点：两种方式各投入 10,000 美元。市值加权按 40% / 30% / 20% / 10% 分配，等权各占 25%。</p><p class="if-trades" data-if-trades hidden></p>
<figcaption>设定 B 下跌 10%，C 不变，D 上涨 10%；成分股数及可交易比例保持不变。四只股票用来单独观察权重机制，忽略分红、税费和交易成本。<a href="/notebook/index-funds/calculations.csv">默认情形与计算数据</a>。</figcaption>
</figure>

默认设定中，A 上涨 40%，B 下跌 10%，C 不变，D 上涨 10%。等权组合的总价值由 10,000 美元增加到 11,000 美元，回报为 10%，A 的权重也从 25% 上升到约 31.8%；市值加权组合起初给了 A 更多资金，同样的价格变化便带来了 14% 的回报。股票相同，起始权重不同，结果也就不同。

到了下一次再平衡日，等权组合要把 A 的金额从 3,500 美元降到 2,750 美元，同时补足其他低于目标的部分，才重新回到各占 25%。忽略费用，这次调整后总价值仍为 11,000 美元，此后的涨跌按新的权重影响组合。市值加权组合不需要这样调回：上涨的股票市值变大，权重随之升高，不必卖出；少数公司的股价持续上涨时，资金就会越来越集中在它们身上。

<span data-text-versions id="nb-v01-text-3">实际的 S&P 500 等权指数在 3、6、9、12 月按季度再平衡，期间权重会随着行情漂移。我们读等权基金的持仓表时，也要把披露日期与再平衡安排放在一起看<span data-text-detail>（指数按公司分配等权目标；同一家公司若有多个符合条件的股类，其合计对应一家公司的份额。实际方法的定权参考日与调整生效日存在间隔，价格在这期间也可能变化。上图为了单独展示漂移与调回，采用在指定时点立即恢复目标比例的简化设定）</span>。[^equal]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

等权会降低最大几家公司的比重，但行业权重仍与各行业入选的公司数量有关，并不会自动变成行业等权。选择加权规则，也就选择了资金在公司和行业之间怎样分布。

## 基金份额与净值 {#nb-v01-nav}

基金把投资者的资金集合起来，由基金管理人按照约定的目标投资；具体投向可以是股票、债券或其他资产，取决于产品规定的范围。开头那 10,000 美元买到的是 VOO 的基金份额。一份值多少钱，可以从基金拥有的资产算起：把股票、现金等资产的价值加起来，扣除基金的负债，得到基金净资产；再除以总份额，就是每份净值，通常记作 NAV：[^nav]

\[
\text{每份净值}=\frac{\text{基金资产}-\text{基金负债}}{\text{基金总份额}}.
\]

假设一只基金在某一时点有资产 101 万美元、负债 1 万美元，共 10 万份，那么净资产就是 100 万美元，每份净值为 10 美元。按这个净值，10,000 美元对应 1,000 份：

<figure class="flow-figure step-chain sc-4" id="nb-v01-nav-chain">
<div class="ff-head"><p class="ff-title">从基金资产到一笔持仓的净资产价值</p></div>
<div class="sc-track">
<div class="sc-node"><strong>101 万美元</strong><small>基金资产</small></div>
<div class="sc-link business-exchange" aria-label="基金资产 101 万美元减去负债 1 万美元，得到净资产 100 万美元。"><span>− 负债</span><span>1 万美元</span></div>
<div class="sc-node"><strong>100 万美元</strong><small>基金净资产</small></div>
<div class="sc-link business-exchange" aria-label="净资产 100 万美元除以总份额 10 万份，每份净值为 10 美元。"><span>÷ 总份额</span><span>10 万份</span></div>
<div class="sc-node sc-focus"><strong>10 美元</strong><small>每份净值（NAV）</small></div>
<div class="sc-link business-exchange" aria-label="持有 1,000 份，对应的净资产价值为 10,000 美元。"><span>× 持有份额</span><span>1,000 份</span></div>
<div class="sc-node"><strong>10,000 美元</strong><small>这笔持仓对应的净资产</small></div>
</div>
</figure>

持有期间，资产价格的涨跌、基金取得的收入及承担的费用都会改变净值；基金向持有人分配现金时，净值也会相应下调。比如每份分配 0.20 美元，在其他价值不变时，净值由 10 美元降至 9.80 美元，1,000 份收到 200 美元现金，份额对应的资产价值则从 10,000 美元降到 9,800 美元。<span data-text-versions id="nb-v01-text-5">比较这段持有结果，就要把净值变化与收到的现金放到一起看<span data-text-detail>（NAV 有时指基金总净资产，报价页面通常展示每份 NAV，计算时需辨认分母。上述金额为同一时点的设定，现金分配例忽略同期市场变化和投资者税费）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 场内买卖与场外申赎 {#nb-v01-trading}

净值说明每份基金对应多少资产，实际买入时付多少钱，还要看份额怎样交易。交易所交易基金（ETF）是份额可以在交易所买卖的基金，VOO 就属于这一类；美国常见的开放式共同基金则通过申购和赎回买卖份额。申购共同基金时，申请交给基金或销售机构，按收到有效申请后下一次计算的净值成交，盘中提交的申请要等相应净值算出才知道价格；退出时向基金赎回份额，由基金支付对应款项。在交易所买入 ETF 时，订单经券商送到市场，按与卖方成交的价格买入；退出时把份额卖给其他投资者。[^fund-structure]

ETF 的市场价格由买卖双方的出价决定，基金持有的资产则决定净值，两者可能出现差距：市价高于净值称为溢价，低于净值称为折价。假设某时点一份 ETF 对应的资产价值估算为 10 美元，市价为 10.10 美元，同样的 10,000 美元按市价买到的份额就比按净值成交少：

<figure class="flow-figure mini-chain" id="nb-v01-price-basis">
<div class="ff-head"><p class="ff-title">同样 10,000 美元，按净值与按市价成交</p><span class="ff-sub">每份资产价值均设为 10 美元</span></div>
<div class="mc-row business-exchange" aria-label="按净值成交：10,000 美元按每份净值 10 美元买入 1,000 份，这些份额对应的资产价值为 10,000 美元。"><span class="mc-name">按净值成交</span><span class="mc-val">10,000<small>美元</small></span><span class="mc-step">÷ 净值<small>10 美元</small></span><span class="mc-val">1,000<small>份</small></span><span class="mc-step">× 资产价值<small>10 美元</small></span><span class="mc-val">10,000<small>美元</small></span><span class="mc-note">份额对应的资产价值</span></div>
<div class="mc-row business-exchange" aria-label="按市价成交：10,000 美元按市价 10.10 美元买入约 990 份，这些份额对应的资产价值约 9,901 美元，约 99 美元付给了 1% 的溢价。"><span class="mc-name">按市价成交</span><span class="mc-val">10,000<small>美元</small></span><span class="mc-step mc-loss">÷ 市价<small>10.10 美元</small></span><span class="mc-val">约 990<small>份</small></span><span class="mc-step">× 资产价值<small>10 美元</small></span><span class="mc-val">约 9,901<small>美元</small></span><span class="mc-note">约 99 美元付给了 1% 的溢价</span></div>
<figcaption>不计佣金、销售费用和买卖价差；溢价例中的资产价值为同一时点的估算。</figcaption>
</figure>

即使底层股票的价格不变，溢价之后收窄，这约 99 美元也会相应变成亏损；以折价买入则相反，同样的钱能多买到一些资产。ETF 的申购、赎回机制把场内份额与基金资产联系起来，会压缩这类差距。能够直接与基金进行大额申赎的机构称为授权参与商（AP），差价足以覆盖成本时，AP 可以分别采取以下交易：[^etf]

<figure class="flow-figure" id="nb-v01-ap" data-ff-views>
<div class="ff-head"><p class="ff-title">AP 怎样把份额与资产连起来</p><div class="ff-switch" role="group" aria-label="选择价格关系" hidden><button type="button" data-ff-view-choice="premium" aria-pressed="true">市价高于资产价值</button><button type="button" data-ff-view-choice="discount" aria-pressed="false">市价低于资产价值</button></div></div>
<div class="ff-row" data-ff-only="premium">
<div class="ff-party"><strong>场内投资者</strong><small>在交易所买卖份额</small></div>
<div class="ff-exchange business-exchange" aria-label="ETF 市价高于相应资产价值时，AP 在场内把新份额卖给投资者，收取成交款。"><div class="ff-arrow ff-left"><span>新份额</span></div><div class="ff-arrow ff-cash ff-right"><span>成交款</span></div></div>
<div class="ff-party ff-party-focus"><strong>AP</strong><small>授权参与商</small></div>
<div class="ff-exchange business-exchange" aria-label="AP 向基金交付规定的证券篮子，换取新的 ETF 份额。"><div class="ff-arrow ff-right"><span>证券篮子</span></div><div class="ff-arrow ff-left"><span>新 ETF 份额</span></div></div>
<div class="ff-party"><strong>基金</strong><small>创设或赎回份额</small></div>
</div>
<p class="ff-aside" data-ff-only="premium"><strong>市价高于资产价值</strong>：AP 换取新份额再卖出，场内份额供给增加，市价向资产价值回落。</p>
<div class="ff-row" data-ff-only="discount" hidden>
<div class="ff-party"><strong>场内投资者</strong><small>在交易所买卖份额</small></div>
<div class="ff-exchange business-exchange" aria-label="ETF 市价低于相应资产价值时，AP 在场内向投资者买入份额，支付成交款。"><div class="ff-arrow ff-right"><span>ETF 份额</span></div><div class="ff-arrow ff-cash ff-left"><span>成交款</span></div></div>
<div class="ff-party ff-party-focus"><strong>AP</strong><small>授权参与商</small></div>
<div class="ff-exchange business-exchange" aria-label="AP 把买入的份额交回基金赎回，取得相应的证券篮子。"><div class="ff-arrow ff-right"><span>交回份额</span></div><div class="ff-arrow ff-left"><span>证券篮子</span></div></div>
<div class="ff-party"><strong>基金</strong><small>创设或赎回份额</small></div>
</div>
<p class="ff-aside" data-ff-only="discount" hidden><strong>市价低于资产价值</strong>：AP 场内买入再赎回，增加买入需求，赎回后份额减少，市价向资产价值回升。</p>
<figcaption>差价足以覆盖成本时，AP 才有动力这样交易。</figcaption>
</figure>

<span data-text-versions id="nb-v01-text-6">这两条路径让份额与资产可以相互转换，促使市价向对应的资产价值靠拢<span data-text-detail>（图中采用实物申赎的简化路径，实际篮子也可能包含现金，部分产品使用现金申赎。正式 NAV 通常在日终计算，盘中例子用的是同期资产价值估算；海外市场休市、交易成本和对冲条件会影响套利空间，因此价差仍可能存在）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 指数跟踪、主动管理与主题投资 {#nb-v01-management}

同样在交易所买卖的 ETF，管理方式和投资范围可以很不一样。VOO 和 RSP 跟踪同一组公司的两种加权规则；iShares MSCI World ETF（URTH）跟踪 MSCI World，把范围扩展到多个发达市场。MSCI 负责制定和维护指数，基金管理人则根据跟踪目标组织实际投资。这种主要依据指数规则调整持仓的方式称为被动管理，管理人仍要买卖股票、安排现金，并处理相应成本。[^rsp]<sup>，</sup>[^urth]

另一种做法是由管理人根据研究和判断来选择持仓，也就是主动管理。Capital Group Dividend Value ETF（CGDV）重视能够提供收入与增长机会的股票，投资目标包括争取高于美国股票平均水平的收入收益率，以及资本增值；它把 S&P 500 作为主要业绩比较基准，组合可以和指数很不一样。看到基金列出一个指数时，我们还要分清它以跟踪这个指数为投资目标，还是只拿它比较业绩。[^cgdv]

投资范围也可以收窄到某个行业或主题，这种收窄同样可以由指数规则完成。<span data-text-versions id="nb-v01-text-11">Nasdaq 编制的 PHLX Semiconductor Sector Index（SOX）只从在美国上市的半导体公司中选出市值最大的 30 家，再按市值加权并设上限：市值前三的公司分别不超过 12%、10% 和 8%，其余每家不超过 4%<span data-text-detail>（入选公司须属于 ICB 分类中的半导体或生产技术设备子行业，超出上限的权重按市值比例分给其他成分；成分每年 9 月重组，权重在 3、6、9、12 月按季度调回，两次调整之间会随价格漂移）</span>。[^sox]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> <span data-text-versions id="nb-v01-text-12">Invesco PHLX Semiconductor ETF（SOXQ）以跟踪这项指数为目标<span data-text-detail>（据 2025 年 12 月 19 日的招募说明书，SOXQ 通常将至少 90% 的总资产投资于指数成分，并集中投资于半导体行业；年度总费用率为 0.19%）</span>。同样的 10,000 美元放进 SOXQ，在调整当日，市值最大的公司最多分到 1,200 美元，前三名以外的每家最多 400 美元，全部落在半导体公司上。[^soxq]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

主题也可以交给管理人把握。<span data-text-versions id="nb-v01-text-9">Roundhill 旗下的 CHAT 投资生成式 AI 与科技，涉及平台、基础设施与软件，持有 NVDA；HUMN 围绕人形机器人，持有 Tesla（TSLA）；OZEM 围绕 GLP-1 与减重产业，持有 Eli Lilly（LLY）。这三只基金都采用主动管理<span data-text-detail>（例中持仓采用发行人标注的 2026 年 6 月 30 日数据；HUMN 官网以 TSLA 的 Optimus 说明相关研发方向）</span>。[^roundhill]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 把本篇提到的基金按管理方式和投资范围放在一起：

<figure class="flow-figure fund-map" id="nb-v01-fund-map">
<div class="ff-head"><p class="ff-title">管理方式与投资范围是两个维度</p></div>
<div class="fm-grid business-exchange" aria-label="按指数规则管理、覆盖广泛市场：VOO 跟踪 S&P 500 市值加权，RSP 跟踪 S&P 500 等权，URTH 跟踪 MSCI World。由管理人选股、覆盖广泛市场：CGDV 重视收入与增长，以 S&P 500 为业绩比较基准。由管理人选股、集中于某个主题：CHAT 生成式 AI，HUMN 人形机器人，OZEM GLP-1 与减重。按指数规则管理、集中于某个主题：SOXQ 跟踪 SOX，指数由在美国上市、市值最大的 30 家半导体公司组成。">
<span></span><div class="fm-col">按指数规则<small>被动管理</small></div><div class="fm-col">由管理人选股<small>主动管理</small></div>
<div class="fm-row">广泛<br>市场</div>
<div class="fm-cell"><div class="fm-fund"><b>VOO</b><span>S&P 500，市值加权</span></div><div class="fm-fund"><b>RSP</b><span>S&P 500，等权</span></div><div class="fm-fund"><b>URTH</b><span>MSCI World，多个发达市场</span></div></div>
<div class="fm-cell"><div class="fm-fund"><b>CGDV</b><span>重视收入与增长，以 S&P 500 为比较基准</span></div></div>
<div class="fm-row">集中<br>主题</div>
<div class="fm-cell"><div class="fm-fund"><b>SOXQ</b><span>SOX，美国上市的 30 家半导体公司</span></div></div>
<div class="fm-cell"><div class="fm-fund"><b>CHAT</b><span>生成式 AI，持有 NVDA</span></div><div class="fm-fund"><b>HUMN</b><span>人形机器人，持有 TSLA</span></div><div class="fm-fund"><b>OZEM</b><span>GLP-1 与减重，持有 LLY</span></div></div>
</div>
<figcaption>列看管理人怎样决定持仓，行看资金主要投向哪里。持仓例按发行人标注的 2026 年 6 月 30 日数据。</figcaption>
</figure>

主题基金让我们把对某种产业变化的判断落实为投资，资金也就集中到了依赖这一主题的公司上。以 CHAT 为例，企业增加生成式 AI 投入时，对计算基础设施和软件服务的需求都可能增加；投入放缓时，这些不同环节也可能同时受到影响。持有多家公司的主题基金，因而也会集中承受同一种需求变化。

## 基金费用与投资者所得 {#nb-v01-fees}

通过基金投资，我们把选股、交易和日常管理交给管理人，也要为此付费。持有期间持续发生的费用里，管理费支付给基金管理人，基金还可能承担其他运营费用；产品文件会把这些持续费用汇总为年度总费用率，按平均净资产的一定比例表示。[^fee-rules] <span data-text-versions id="nb-v01-text-10">VOO 的年度总费用率为 0.03%，其中管理费 0.02%、其他费用 0.01%；CGDV 为 0.33%，CHAT 为 0.75%<span data-text-detail>（三项费率分别取自 2026 年 4 月 28 日、2026 年 8 月 1 日和 2026 年 8 月 27 日的产品文件；CGDV 与 CHAT 的费率全部为管理费，其他费用为 0.00%）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 同样 10,000 美元放在 VOO 里，每年的持续费用约 3 美元；放在 CGDV 和 CHAT，则分别约为 33 和 75 美元，实际金额会随基金资产价值变化。[^voo-prospectus]<sup>，</sup>[^cgdv]<sup>，</sup>[^chat-fee]

这些费用通常直接从基金资产中扣除，已经反映在净值里，我们未必会在证券账户里看到单独扣款。扣去的资金也就不能继续投资，持有时间越长，费用造成的差距越容易累积：

<figure class="flow-figure fee-gap" id="nb-v01-fee-gap">
<div class="ff-head"><p class="ff-title">与年度费用率 0.03% 相比，少留下的金额</p><p class="ff-legend"><span style="--c:#5986a1">0.33%</span><span style="--c:#b47550">0.75%</span></p></div>
<div class="ff-bars fb-grouped business-exchange" aria-label="本金 10,000 美元、费用前年收益 6% 时，年度费用率 0.33% 和 0.75% 与 0.03% 相比：第 5 年分别少 199 和 474 美元；第 10 年分别少 529 和 1,245 美元；第 15 年分别少 1,052 和 2,451 美元；第 20 年分别少 1,860 和 4,291 美元。"><span class="fb-group">第 5 年</span><span class="fb-bar"><i style="--w:4.6%;--c:#5986a1"></i></span><span class="fb-val">199</span><span class="fb-bar"><i style="--w:11.1%;--c:#b47550"></i></span><span class="fb-val">474</span><span class="fb-group">第 10 年</span><span class="fb-bar"><i style="--w:12.3%;--c:#5986a1"></i></span><span class="fb-val">529</span><span class="fb-bar"><i style="--w:29.0%;--c:#b47550"></i></span><span class="fb-val">1,245</span><span class="fb-group">第 15 年</span><span class="fb-bar"><i style="--w:24.5%;--c:#5986a1"></i></span><span class="fb-val">1,052</span><span class="fb-bar"><i style="--w:57.1%;--c:#b47550"></i></span><span class="fb-val">2,451</span><span class="fb-group">第 20 年</span><span class="fb-bar"><i style="--w:43.3%;--c:#5986a1"></i></span><span class="fb-val">1,860</span><span class="fb-bar"><i style="--w:100.0%;--c:#b47550"></i></span><span class="fb-val">4,291</span></div>
<div class="fg-ends business-exchange" aria-label="20 年后，三档费用率分别留下 31,879、30,020 和 27,588 美元。"><div>年度费用率 0.03%<strong>31,879 美元</strong>20 年后</div><div>年度费用率 0.33%<strong>30,020 美元</strong>20 年后</div><div>年度费用率 0.75%<strong>27,588 美元</strong>20 年后</div></div>
<figcaption>本金 10,000 美元，三档采用同样的费用前年收益 6%，每年末按资产扣除相应比例，金额单位为美元，不代表三只实际基金的业绩。<a href="/notebook/index-funds/calculations.csv">查看计算数据</a> · <a href="/notebook/index-funds/fund-fee-extracts.md">费表摘录</a> · <a href="/notebook/index-funds/model.py">计算方法</a>。</figcaption>
</figure>

在相同的费用前收益下，20 年后三档费率留下的金额相差数千美元。实际基金的持仓和费用前收益也会不同；比较主动基金时，还要看管理人的投资结果是否值得为此支付额外费用。

<span data-text-versions id="nb-v01-text-7">基金公布的净值回报通常已经扣除了基金承担的持续费用，用这项回报作比较时，就不再另减一次年度费用率<span data-text-detail>（文中三个产品所核费用表均无当期减免使净费率低于总费率。其他产品若列出费用减免，还需看净费率及其期限。图中设费用前年收益为 6%，每年末按资产扣费，计算为 \(10000[(1+0.06)(1-f)]^{20}\)，不计外部存取、投资者税费及销售收费；实际基金通常按日计提费用）</span>。[^voo-sheet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

持续费用之外，买入和退出时还可能发生额外成本。把费用按发生环节排列，就能看清一段完整持有过程包含哪些收费：

<figure class="flow-figure stage-lanes rs-3" id="nb-v01-fee-stages">
<div class="ff-head"><p class="ff-title">一段完整持有过程中的收费</p></div>
<div class="rs-grid business-exchange" aria-label="买入时，部分场外基金份额收取销售费用，ETF 有交易佣金与买卖价差；持有时，基金承担年度持续费用，渠道还可能另收账户或投顾费用；卖出或赎回时，可能有赎回费或后端销售费，ETF 有交易佣金与买卖价差。AIVSX Class A 例：投入 10,000 美元，按最高前端销售费 5.75% 先付 575 美元，买入份额的资金为 9,425 美元；持有期间每年持续费用 0.55%，从基金资产中扣除。">
<div class="rs-stage" style="--c:2"><strong>买入</strong></div>
<div class="rs-stage" style="--c:3"><strong>持有</strong></div>
<div class="rs-stage" style="--c:4"><strong>卖出、赎回</strong></div>
<div class="rs-lane" style="--lane:2">可能的收费</div>
<div class="rs-lane" style="--lane:3">AIVSX 例</div>
<div class="rs-cell rs-list" style="--c:2;--lane:2"><ul><li>部分场外份额的销售费用</li><li>ETF 交易佣金与买卖价差</li></ul></div>
<div class="rs-cell rs-list" style="--c:3;--lane:2"><ul><li>基金年度持续费用，已从净值中扣除</li><li>渠道另收的账户或投顾费用</li></ul></div>
<div class="rs-cell rs-list" style="--c:4;--lane:2"><ul><li>适用的赎回费或后端销售费</li><li>ETF 交易佣金与买卖价差</li></ul></div>
<div class="rs-cell rs-step rs-lock" style="--c:2;--lane:3">投入 10,000 美元<small>最高销售费 5.75%：先付 575，买入 9,425</small></div>
<div class="rs-cell rs-step" style="--c:3;--lane:3">每年持续费用 0.55%<small>从基金资产中扣除</small></div>
</div>
</figure>

一些场外基金份额在买入时收取销售费，持有期间还会收取持续服务费用。The Investment Company of America 的 Class A 份额（AIVSX），所列最高申购销售费为 5.75%，年度持续费用为 0.55%。同样投入 10,000 美元，若适用这档最高销售费，先支付的销售费用就是 575 美元，实际买入基金份额的资金只剩 9,425 美元；持有以后，基金还会继续承担年度费用。[^aivsx]

<span data-text-versions id="nb-v01-text-8">买入时的一次性收费与每年的持续费用，会在不同阶段减少可供投资的资金。同一只基金的不同份额和销售安排，也可能对应不同成本<span data-text-detail>（这里的 0.55% 已包含 0.23% 管理费、0.08% 其他费用和 0.24% 的持续销售服务费用。费用取自 AIVSX 产品页，该页标注最近招募书日期为 2026 年 3 月 1 日。5.75% 是最高前端销售费，具体适用金额、折扣、豁免及合并账户资格按销售安排确定；0.24% 属于美国 12b-1 费用，已计入 0.55%。一次性销售费与年度持续费的计费时点、分母不同，不能相加称为每年 6.30%）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

不过，场外交易本身并不决定费率高低。Vanguard 的自家共同基金不收前端或后端销售费，仍会承担各自的持续费用；少数产品还可能有特定买入、赎回费用。因此，比较费用时，我们要看具体产品、份额和购买渠道。场内 ETF 同样有持续费用和交易成本，“免佣金”也只是免去了其中一项。[^vanguard-fees]<sup>，</sup>[^fee-rules]

实际下单买入 VOO 时，还会碰上报价和订单。下一篇[《报价、订单与实际成交》](/zh/notebook/quotes-orders-execution/)看计划中的价格怎样变成实际付出的金额。

<link rel="stylesheet" href="/notebook/index-funds/ui.css?v=20260927">
<script src="/notebook/index-funds/ui.js?v=20260927" defer></script>
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261012-5">
<script src="/notebook/flow-figures.js?v=20261012-5" defer></script>

[^sp-method]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。
[^msci]: MSCI，[MSCI World Index factsheet](https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf)，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。
[^index-math]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。
[^equal]: S&P Dow Jones Indices，[S&P 500 Equal Weight Index](https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/)与[等权指数 FAQ](https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/)，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
[^voo-sheet]: Vanguard，[VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf)，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见[本篇数据](/notebook/index-funds/inputs.json)与[计算结果](/notebook/index-funds/calculations.csv)。
[^voo-prospectus]: Vanguard，[VOO Summary Prospectus](https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm)，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。
[^nav]: SEC Investor.gov，[Net Asset Value](https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value)，净资产及每份净值定义，2026-09-27 查阅。
[^fund-structure]: SEC Investor.gov，[Characteristics of Mutual Funds and Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds)，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC [共同基金定价规则背景说明](https://www.sec.gov/rules-regulations/2003/12/amendments-rules-governing-pricing-mutual-fund-shares)，只采用其对 forward pricing 的背景解释。
[^etf]: SEC Investor.gov，[Updated Investor Bulletin: Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24)，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。
[^rsp]: Invesco，[RSP 产品资料](https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=RSP)，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。
[^urth]: iShares，[URTH 产品资料](https://www.ishares.com/us/products/239696/URTH)，跟踪发达市场股票指数的目标，2026-09-27 查阅。
[^cgdv]: Capital Group，[CGDV Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1870128/000005193126000736/cgdv497k.htm)，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；[CGDV 产品资料](https://www.capitalgroup.com/advisor/investments/exchange-traded-funds/details/cgdv)，主要业绩比较基准为 S&P 500。
[^sox]: Nasdaq，[PHLX Semiconductor Sector Index Methodology](https://indexes.nasdaq.com/docs/Methodology_SOX.pdf)，2026 年版（变更记录最近一项于 2026-07-06 生效），成分资格、30 家选样、前三 12%／10%／8% 与其余 4% 的权重上限，以及年度重组与季度再平衡日程，2026-10-12 查阅。
[^soxq]: Invesco，[SOXQ Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1378872/000119312525325650/d54028d497k.htm)，2025-12-19，跟踪 SOX 的投资目标、至少 90% 资产投资于指数成分、集中于半导体行业及 0.19% 年度总费用率。
[^roundhill]: Roundhill，[CHAT](https://www.roundhillinvestments.com/etf/chat/)、[HUMN](https://www.roundhillinvestments.com/etf/humn/)、[OZEM](https://www.roundhillinvestments.com/etf/ozem/)产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
[^fee-rules]: SEC Investor.gov，[Mutual Fund and ETF Fees and Expenses](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin)，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。
[^chat-fee]: Roundhill，[CHAT Prospectus](https://www.sec.gov/Archives/edgar/data/1924868/000199937126018651/chat-485bpos_082526.htm)，2026-08-27，管理费及年度总费用率均为 0.75%。
[^aivsx]: Capital Group，[AIVSX 产品与费用表](https://www.capitalgroup.com/individual/investments/mutual-funds/details/ica-a)，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；[Class A 销售费及折扣](https://www.capitalgroup.com/individual/investments/share-class-information/reducing-sales-charges.html)。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。
[^vanguard-fees]: Vanguard，[共同基金费用与最低投资额](https://investor.vanguard.com/investment-products/mutual-funds/fees)，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。


## Sources
- [AIVSX 产品与费用表](https://www.capitalgroup.com/individual/investments/mutual-funds/details/ica-a): Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。
- [Class A 销售费及折扣](https://www.capitalgroup.com/individual/investments/share-class-information/reducing-sales-charges.html): Capital Group，AIVSX 产品与费用表，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；Class A 销售费及折扣。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。
- [CGDV Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1870128/000005193126000736/cgdv497k.htm): Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。
- [CGDV 产品资料](https://www.capitalgroup.com/advisor/investments/exchange-traded-funds/details/cgdv): Capital Group，CGDV Summary Prospectus，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；CGDV 产品资料，主要业绩比较基准为 S&P 500。
- [CHAT Prospectus](https://www.sec.gov/Archives/edgar/data/1924868/000199937126018651/chat-485bpos_082526.htm): Roundhill，CHAT Prospectus，2026-08-27，管理费及年度总费用率均为 0.75%。
- [S&P 500 Equal Weight Index](https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/): S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
- [等权指数 FAQ](https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/): S&P Dow Jones Indices，S&P 500 Equal Weight Index与等权指数 FAQ，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
- [Updated Investor Bulletin: Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24): SEC Investor.gov，Updated Investor Bulletin: Exchange-Traded Funds，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。
- [Mutual Fund and ETF Fees and Expenses](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin): SEC Investor.gov，Mutual Fund and ETF Fees and Expenses，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。
- [Characteristics of Mutual Funds and Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds): SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。
- [共同基金定价规则背景说明](https://www.sec.gov/rules-regulations/2003/12/amendments-rules-governing-pricing-mutual-fund-shares): SEC Investor.gov，Characteristics of Mutual Funds and Exchange-Traded Funds，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC 共同基金定价规则背景说明，只采用其对 forward pricing 的背景解释。
- [S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf): S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。
- [MSCI World Index factsheet](https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf): MSCI，MSCI World Index factsheet，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。
- [Net Asset Value](https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value): SEC Investor.gov，Net Asset Value，净资产及每份净值定义，2026-09-27 查阅。
- [CHAT](https://www.roundhillinvestments.com/etf/chat/): Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
- [HUMN](https://www.roundhillinvestments.com/etf/humn/): Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
- [OZEM](https://www.roundhillinvestments.com/etf/ozem/): Roundhill，CHAT、HUMN、OZEM产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
- [RSP 产品资料](https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=RSP): Invesco，RSP 产品资料，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。
- [PHLX Semiconductor Sector Index Methodology](https://indexes.nasdaq.com/docs/Methodology_SOX.pdf): Nasdaq，PHLX Semiconductor Sector Index Methodology，2026 年版，美国上市市值最大的 30 家半导体公司；修正市值加权，前三 12%／10%／8%、其余 4% 上限；9 月年度重组，3、6、9、12 月季度再平衡。
- [SOXQ Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1378872/000119312525325650/d54028d497k.htm): Invesco，SOXQ Summary Prospectus，2025-12-19，以跟踪 SOX 为投资目标，通常至少 90% 总资产投资于指数成分，集中于半导体行业，年度总费用率 0.19%。
- [S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf): S&P Dow Jones Indices，S&P U.S. Indices Methodology，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。
- [URTH 产品资料](https://www.ishares.com/us/products/239696/URTH): iShares，URTH 产品资料，跟踪发达市场股票指数的目标，2026-09-27 查阅。
- [共同基金费用与最低投资额](https://investor.vanguard.com/investment-products/mutual-funds/fees): Vanguard，共同基金费用与最低投资额，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。
- [VOO Summary Prospectus](https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm): Vanguard，VOO Summary Prospectus，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。
- [VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf): Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。
- [本篇数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json): Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。
- [计算结果](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv): Vanguard，VOO 官方季度资料，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见本篇数据与计算结果。

## Content relations
```json
[
  {
    "from": "zh-indices-funds-etfs",
    "relation": "part_of",
    "to": "topic-V",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [投资组合、保证金与对冲策略](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)
- [复利、通胀与机会成本](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/)
- [报价、订单与实际成交](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-execution/)
