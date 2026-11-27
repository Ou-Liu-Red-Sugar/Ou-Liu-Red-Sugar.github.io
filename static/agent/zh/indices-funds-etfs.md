# 指数、基金与 ETF

从 10,000 美元买入 VOO 出发，看这笔钱怎样按指数权重分到各家公司，再认识等权与再平衡、基金净值、ETF 的场内价格、主动与主题管理以及各项费用。

Entry: zh-indices-funds-etfs | Node: NB-V01 | Language: zh | Editorial revision: 2026-11-28

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
[《股票、公司与股价》](/zh/notebook/stocks-company-price/#nb-s01-ownership)和[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/#nb-s02-returns)都跟着同一笔 100 股 AAPL，资金只压在一家公司上。换一种买法，用 10,000 美元买入 Vanguard S&P 500 ETF（VOO），同一笔钱会经过基金分到约 500 家美国公司；只是按 2026 年 6 月 30 日的持仓权重，这 500 家拿到的份额悬殊得多。[^voo-sheet]

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

账户里实际持有的是 VOO 基金份额，股价波动与公司派发的股息先汇入基金资产，再体现在每份 VOO 上。前十家公司就占去近四成资金，按行业统计，整只基金更有 38.0%（约 3,800 美元）落在信息技术上。<span data-text-versions id="nb-v01-text-4">即便分属不同行业，头部公司也常共享相近的客户与资本开支周期，评估分散度时要把这些共同暴露算进去<span data-text-detail>（公司与行业是两个观察维度，比例不能相加。VOO 原表将 Alphabet 的 GOOGL 与 GOOG 合并为一家公司；前十行取整相加为 37.8%，合计保留源表公布的 37.9%；NVDA、AAPL、MSFT、AVGO 与 MU 属于信息技术，合计约 2,320 美元。时点固定为 2026 年 6 月 30 日）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

VOO 把最多资金分给 NVIDIA（NVDA）、把较少资金分给其余公司，依据的是它所跟踪的指数：VOO 以取得接近 S&P 500 的回报为目标，这份比例来自 S&P 500 的选样与加权规则。[^voo-prospectus]

## 指数的定义与样本 {#nb-v01-index}

股票指数是衡量一组股票整体表现的独立标尺，本身并不替任何人管理资金。你可以自己照着成分买一篮子股票，也可以通过基金份额去跟踪它。编制者先把市场切出范围、定好权重，再把涨跌汇总成一条连续点位。[^sp-method]<sup>，</sup>[^msci]

<figure class="flow-figure" id="nb-v01-index-funnel">
<div class="ff-head"><p class="ff-title">从股票市场到一条指数曲线：三步规则</p><span class="ff-sub">选样本 → 定权重 → 算点位</span></div>
<div class="business-exchange" aria-label="指数编制的三个步骤：第一步划定样本池，例如 S&P 500 选取约 500 家美国大盘公司（考察规模、流动性、盈利并由委员会裁定），MSCI World 覆盖 23 个发达市场大中盘约 85% 自由流通市值、不含新兴市场；第二步按规则分配权重，分为自由流通市值加权或等权等；第三步汇总成连续指数点位，日常只看涨跌幅，同时区分价格指数与计入分红的总回报指数。">
<svg viewBox="0 0 720 224" role="img" aria-label="指数编制三步流程：选样范围对照、权重规则与点位口径" style="width:100%;height:auto;display:block">
  <defs>
    <marker id="v01-arr" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
      <path d="M1 1.5 L9 5 L1 8.5 Z" fill="#145343"/>
    </marker>
  </defs>
  <rect x="8" y="10" width="268" height="204" rx="8" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.2"/>
  <rect x="8" y="10" width="268" height="32" rx="8" fill="#eaf2ef"/>
  <rect x="8" y="34" width="268" height="8" fill="#eaf2ef"/>
  <text x="22" y="31" font-size="12.5" font-weight="700" fill="#145343">① 划定样本池（买哪些公司）</text>
  <rect x="20" y="54" width="244" height="68" rx="6" fill="#f7faf8" stroke="#d9e4dd"/>
  <text x="32" y="73" font-size="12.5" font-weight="700" fill="#18241e">S&amp;P 500</text>
  <text x="98" y="73" font-size="11" fill="#58605c">S&amp;P Dow Jones Indices</text>
  <text x="32" y="92" font-size="11.5" fill="#3c4c44">约 500 家美国大盘公司</text>
  <text x="32" y="110" font-size="11" fill="#68736d">规模 · 流动性 · 盈利 + 委员会裁定</text>
  <rect x="20" y="132" width="244" height="68" rx="6" fill="#fbf9f5" stroke="#e5dccf"/>
  <text x="32" y="151" font-size="12.5" font-weight="700" fill="#18241e">MSCI World</text>
  <text x="115" y="151" font-size="11" fill="#8f6033">不含新兴市场</text>
  <text x="32" y="170" font-size="11.5" fill="#3c4c44">23 个发达市场大中盘（美 / 日 / 英等）</text>
  <text x="32" y="188" font-size="11" fill="#68736d">覆盖各市场约 85% 自由流通市值</text>
  <line x1="278" y1="112" x2="306" y2="112" stroke="#145343" stroke-width="1.8" marker-end="url(#v01-arr)"/>
  <rect x="312" y="10" width="176" height="204" rx="8" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.2"/>
  <rect x="312" y="10" width="176" height="32" rx="8" fill="#eaf2ef"/>
  <rect x="312" y="34" width="176" height="8" fill="#eaf2ef"/>
  <text x="326" y="31" font-size="12.5" font-weight="700" fill="#145343">② 分配权重</text>
  <rect x="324" y="56" width="152" height="62" rx="6" fill="#f3f7f5" stroke="#b9d0c2"/>
  <text x="336" y="76" font-size="12" font-weight="650" fill="#145343">自由流通市值加权</text>
  <text x="336" y="95" font-size="11" fill="#46544c">公众可交易市值越大，</text>
  <text x="336" y="110" font-size="11" fill="#46544c">对指数影响力越重</text>
  <rect x="324" y="130" width="152" height="62" rx="6" fill="#fbf9f5" stroke="#e2d5c3"/>
  <text x="336" y="150" font-size="12" font-weight="650" fill="#8f6033">等权规则</text>
  <text x="336" y="169" font-size="11" fill="#46544c">按期把每家公司调回</text>
  <text x="336" y="184" font-size="11" fill="#46544c">相同比例（如约 0.2%）</text>
  <line x1="490" y1="112" x2="518" y2="112" stroke="#145343" stroke-width="1.8" marker-end="url(#v01-arr)"/>
  <rect x="524" y="10" width="188" height="204" rx="8" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.2"/>
  <rect x="524" y="10" width="188" height="32" rx="8" fill="#eaf2ef"/>
  <rect x="524" y="34" width="188" height="8" fill="#eaf2ef"/>
  <text x="538" y="31" font-size="12.5" font-weight="700" fill="#145343">③ 汇总成点位</text>
  <text x="538" y="68" font-size="12" font-weight="650" fill="#18241e">只看同一指数的涨跌幅</text>
  <text x="538" y="87" font-size="11" fill="#58605c">不同指数基期和算法不同，</text>
  <text x="538" y="103" font-size="11" fill="#58605c">点位绝对高低不代表贵贱</text>
  <line x1="538" y1="120" x2="698" y2="120" stroke="#e2e7df"/>
  <text x="538" y="142" font-size="12" font-weight="650" fill="#145343">比较回报要对齐口径</text>
  <text x="538" y="162" font-size="11" fill="#46544c">· 价格指数：只记股价变化</text>
  <text x="538" y="180" font-size="11" fill="#46544c">· 总回报指数：计入分红再投</text>
  <text x="538" y="198" font-size="10.5" fill="#7a8780">拆股与成分变更会做除数调整</text>
</svg>
</div>
<figcaption>样本范围、权重规则和回报口径三项共同决定一只指数到底在衡量什么。S&amp;P 500 并非机械截取市值前 500 家，经营格局变化时成分名单也会调整。</figcaption>
</figure>

<span data-text-versions id="nb-v01-text-1">读指数名字时容易被字面误导：MSCI World 听起来像覆盖全球股市，实际只包含发达市场，不包含新兴市场<span data-text-detail>（范围采用 2026 年 8 月 31 日官方资料，覆盖各市场约 85% 的自由流通调整后市值。市场归类依照指数的分类口径；公司被纳入哪个市场，与它在世界各地取得收入的范围是两个维度）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> <span data-text-versions id="nb-v01-text-2">拿基金业绩和指数对照时，还要把分红、币种、期间和费用口径对齐<span data-text-detail>（价格指数主要记录价格变化；总回报指数还将分红及其再投资计入，税前与税后口径也可能不同；公司拆股、成分变更均依方法调整除数，避免把计量变化当成市场涨跌）</span>。[^index-math]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 市值加权、等权与再平衡 {#nb-v01-weights}

同样一组 S&P 500 成分股，换一套权重规则，资金去向立刻大变。按自由流通市值加权，NVDA 在 VOO 里分到最多资金；换成跟踪 S&P 500 等权指数的 Invesco S&P 500 Equal Weight ETF（RSP），在每季调整当日，NVDA 和最小成分公司各分到约 0.2%（10,000 美元里各约 20 美元）。[^sp-method]<sup>，</sup>[^equal]<sup>，</sup>[^rsp]

等权规定的是再平衡那一天的目标比例；两次调整之间，股价涨跌仍会让权重漂移。把 500 家缩成 4 只股票，在下图里切换三个阶段并拖动 A 的涨跌幅，就能亲眼看见同一组涨跌怎样拉开市值加权与等权的结果：

<figure class="if-figure tex2jax_ignore" data-if-rebalance id="nb-v01-rebalance">
<span class="if-kicker">同一组股票 · 两种权重规则</span>
<h3>从等权开始，随价格漂移，再按期调回</h3>
<div class="if-tabs" aria-label="观察权重变化的阶段"><button type="button" data-if-stage="0" aria-pressed="true">① 再平衡日</button><button type="button" data-if-stage="1" aria-pressed="false">② 期间价格变化</button><button type="button" data-if-stage="2" aria-pressed="false">③ 下一次再平衡日</button></div>
<label class="if-control">期间 A 的涨跌幅<input type="range" min="-40" max="60" step="5" value="40" data-if-return aria-label="期间股票A的涨跌幅"><output>+40.0%</output></label>
<div class="if-legend"><span><i style="--color:#23695a"></i>股票 A</span><span><i style="--color:#5986a1"></i>股票 B</span><span><i style="--color:#a8743f"></i>股票 C</span><span><i style="--color:#c7cba3"></i>股票 D</span></div>
<div class="if-bars"><div class="if-bar-row" data-if-kind="cap"><div class="if-bar-label"><span>市值加权</span><strong data-if-value>10,000 美元</strong></div><div class="if-bar-track" data-if-track><span class="if-segment" style="width:40%;--color:#23695a">40.0%</span><span class="if-segment" style="width:30%;--color:#5986a1">30.0%</span><span class="if-segment" style="width:20%;--color:#a8743f">20.0%</span><span class="if-segment" style="width:10%;--color:#c7cba3">10.0%</span></div></div><div class="if-bar-row" data-if-kind="equal"><div class="if-bar-label"><span>等权</span><strong data-if-value>10,000 美元</strong></div><div class="if-bar-track" data-if-track><span class="if-segment" style="width:25%;--color:#23695a">25.0%</span><span class="if-segment" style="width:25%;--color:#5986a1">25.0%</span><span class="if-segment" style="width:25%;--color:#a8743f">25.0%</span><span class="if-segment" style="width:25%;--color:#c7cba3">25.0%</span></div></div></div>
<div class="if-result"><div><span>市值加权 · 区间收益</span><strong data-if-cap-return>0.0%</strong></div><div><span>等权 · 区间收益</span><strong data-if-equal-return>0.0%</strong></div></div>
<p class="if-stage-caption" data-if-caption aria-live="polite">起点：两种方式各投入 10,000 美元。市值加权按 40% / 30% / 20% / 10% 分配，等权各占 25%。</p><p class="if-trades" data-if-trades hidden></p>
<figcaption>设定 B 下跌 10%，C 不变，D 上涨 10%；成分股数及可交易比例保持不变。四只股票用来单独观察权重机制，忽略分红、税费和交易成本。<a href="/notebook/index-funds/calculations.csv">默认情形与计算数据</a>。</figcaption>
</figure>

切到第 ③ 步可以看到两者的机制分叉：等权到期要卖出涨超目标的股票、补进落后的股票，把比例拉回原点（忽略费用，调整瞬间总资产不变，只改写后续权重）；市值加权则顺着股价涨跌自然浮动，不需要为了恢复比例而卖出赢家，当少数巨头持续走强时，资金会越来越向它们集中。

<span data-text-versions id="nb-v01-text-3">实际 S&P 500 等权指数在 3、6、9、12 月按季再平衡，读持仓表时要把披露日和调整节奏合起来看；而且等权压低的是最大几家公司的比重，哪个行业入选家数多，该行业总权重依然更大，并不会自动变成行业等权<span data-text-detail>（指数按公司分配等权目标；同一家公司若有多个符合条件的股类，合计对应一家公司的份额。实际方法的定权参考日与生效日存在间隔，价格在此期间也会漂移；上图为单独展示漂移与调回，采用即时恢复目标比例的简化设定）</span>。[^equal]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 基金份额与净值 {#nb-v01-nav}

基金把投资者的资金集合起来，按约定目标投向股票、债券或其他资产。每份基金背后对应多少净资产，用每份净值（NAV）衡量：[^nav]

\[
\text{每份净值}=\frac{\text{基金资产}-\text{基金负债}}{\text{基金总份额}}.
\]

<figure class="flow-figure step-chain sc-4" id="nb-v01-nav-chain">
<div class="ff-head"><p class="ff-title">从基金资产到一笔持仓的净资产价值</p><span class="ff-sub">设定算例 · 任意时点</span></div>
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

资产涨跌、股息收入和持续费用都会推动净值变化；当基金把现金分给持有人时，净值也会同步下调——钱只是从基金账上搬进了你的现金账户，本身不算亏损：

<figure class="flow-figure g2-nav-split" id="nb-v01-nav-dist">
<div class="ff-head"><p class="ff-title">每份分配 0.20 美元：净值下调，合计价值不变</p><span class="ff-sub">持有 1,000 份 · 其他价值不变</span></div>
<div class="g2-ns-body business-exchange" aria-label="持有 1,000 份基金：分配前每份净值 10 美元，对应净资产价值 10,000 美元。每份分配 0.20 美元现金后，在其他价值不变时，每份净值下调至 9.80 美元，份额对应资产价值为 9,800 美元，同时持有人收到 200 美元现金，两者合计仍为 10,000 美元。净值下降对应的是 200 美元移入现金账户，本身并非亏损。">
<div class="g2-ns-row"><span class="g2-ns-when">分配前</span><div class="g2-ns-bar"><span class="g2-ns-seg g2-ns-share" style="width:100%">1,000 份 × 净值 10.00 美元</span></div><span class="g2-ns-total">10,000 美元</span></div>
<div class="g2-ns-step" aria-hidden="true">每份分配 0.20 美元：200 美元从基金资产移入持有人现金</div>
<div class="g2-ns-row"><span class="g2-ns-when">分配后</span><div class="g2-ns-bar"><span class="g2-ns-seg g2-ns-share" style="width:98%">份额对应资产 9,800 美元</span><span class="g2-ns-seg g2-ns-cash" style="width:2%" title="现金分配 200 美元"></span></div><span class="g2-ns-total">10,000 美元</span></div>
<div class="g2-ns-eq">
<div class="g2-ns-card g2-ns-card-share"><span>留存在份额内</span><strong>9,800 美元</strong><small>1,000 份 × 净值 9.80</small></div>
<span class="g2-ns-op" aria-hidden="true">+</span>
<div class="g2-ns-card g2-ns-card-cash"><span>收到的现金</span><strong>200 美元</strong><small>1,000 份 × 每份 0.20</small></div>
<span class="g2-ns-op g2-ns-op-eq" aria-hidden="true">=</span>
<div class="g2-ns-card g2-ns-card-total"><span>持仓合计</span><strong>10,000 美元</strong><small>净值下调 ≠ 亏损</small></div>
</div>
</div>
<figcaption>设定同一时点、忽略同期市场涨跌与投资者税费；橙色切片示意移入现金的 200 美元（占总价值的 2%）。</figcaption>
</figure>

<span data-text-versions id="nb-v01-text-5">因此评估一段持有结果时，要把净值变化和收到的现金分配合起来算<span data-text-detail>（NAV 有时指基金总净资产，报价页面通常展示每份 NAV，计算时需辨认分母。上述两图均为同一时点的设定算例，忽略同期市场涨跌和投资者税费）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 场内买卖与场外申赎 {#nb-v01-trading}

净值说明每份基金值多少资产，而实际买进卖出付多少钱，取决于基金走的是哪条交易通道：场外共同基金直接向基金申赎，ETF 则在交易所挂牌撮合。[^fund-structure]

<figure class="flow-figure" id="nb-v01-etf-vs-mf">
<div class="ff-head"><p class="ff-title">两种交易通道：场外申赎 vs 场内 ETF</p><span class="ff-sub">对手方与定价时点不同</span></div>
<div class="business-exchange" aria-label="场外开放式共同基金由投资者向基金或销售机构提交申购或赎回申请，按收到有效申请后下一次算出的日终净值成交；场内 ETF 由投资者通过券商在交易所与其他投资者实时撮合成交，成交价为市场价，相对资产价值可能出现溢价或折价，由授权参与商 AP 的大额申赎机制拉回资产价值附近。">
<svg viewBox="0 0 720 218" role="img" aria-label="场外共同基金与场内 ETF 交易路径对照" style="width:100%;height:auto;display:block">
  <defs>
    <marker id="v01-arr2" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M1 1.5 L9 5 L1 8.5 Z" fill="#145343"/></marker>
    <marker id="v01-arr-warm" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M1 1.5 L9 5 L1 8.5 Z" fill="#a8743f"/></marker>
  </defs>
  <rect x="8" y="8" width="704" height="94" rx="8" fill="#fbf9f5" stroke="#e4dacb" stroke-width="1.1"/>
  <text x="20" y="28" font-size="11.5" font-weight="700" fill="#8f6033">场外共同基金 · 申购 / 赎回</text>
  <rect x="20" y="42" width="84" height="44" rx="6" fill="#ffffff" stroke="#d5c9b8"/>
  <text x="62" y="68" text-anchor="middle" font-size="12.5" font-weight="650" fill="#18241e">投资者</text>
  <line x1="112" y1="54" x2="266" y2="54" stroke="#a8743f" stroke-width="1.6" marker-end="url(#v01-arr-warm)"/>
  <text x="190" y="47" text-anchor="middle" font-size="10.5" fill="#8f6033">申购款 / 赎回申请</text>
  <line x1="270" y1="74" x2="116" y2="74" stroke="#145343" stroke-width="1.5" marker-end="url(#v01-arr2)"/>
  <text x="192" y="90" text-anchor="middle" font-size="10.5" fill="#58605c">按日终 NAV 确认份额或回款</text>
  <rect x="276" y="42" width="132" height="44" rx="6" fill="#ffffff" stroke="#d5c9b8"/>
  <text x="342" y="68" text-anchor="middle" font-size="12" font-weight="650" fill="#18241e">基金 / 销售机构</text>
  <rect x="422" y="24" width="276" height="64" rx="6" fill="#ffffff" stroke="#e8dfd2"/>
  <text x="436" y="49" font-size="11.5" font-weight="650" fill="#8f6033">收盘后定净值（Forward Pricing）</text>
  <text x="436" y="70" font-size="11" fill="#58605c">盘中下单时还不知道成交价，无场内溢折价</text>
  <rect x="8" y="114" width="704" height="96" rx="8" fill="#f3f7f5" stroke="#c3d5cb" stroke-width="1.1"/>
  <text x="20" y="135" font-size="11.5" font-weight="700" fill="#145343">场内 ETF（如 VOO）· 二级市场撮合</text>
  <rect x="20" y="148" width="84" height="44" rx="6" fill="#ffffff" stroke="#b9d0c2"/>
  <text x="62" y="174" text-anchor="middle" font-size="12.5" font-weight="650" fill="#18241e">投资者</text>
  <line x1="112" y1="160" x2="266" y2="160" stroke="#145343" stroke-width="1.6" marker-end="url(#v01-arr2)"/>
  <text x="190" y="153" text-anchor="middle" font-size="10.5" fill="#145343">券商下单 · 买卖份额</text>
  <line x1="270" y1="180" x2="116" y2="180" stroke="#a8743f" stroke-width="1.5" marker-end="url(#v01-arr-warm)"/>
  <text x="192" y="196" text-anchor="middle" font-size="10.5" fill="#8f6033">按实时市价即时成交</text>
  <rect x="276" y="148" width="132" height="44" rx="6" fill="#ffffff" stroke="#b9d0c2"/>
  <text x="342" y="174" text-anchor="middle" font-size="12" font-weight="650" fill="#18241e">交易所对手方</text>
  <rect x="422" y="130" width="276" height="64" rx="6" fill="#ffffff" stroke="#c8d8cf"/>
  <text x="436" y="155" font-size="11.5" font-weight="650" fill="#145343">盘中实时报价（可能偏离 NAV）</text>
  <text x="436" y="176" font-size="11" fill="#58605c">市价高于净值叫溢价，低于叫折价；AP 压缩价差</text>
</svg>
</div>
<figcaption>并非所有场内交易基金都是 ETF；共同基金与 ETF 分别对应“向基金申赎”和“交易所撮合”两种进出路径。</figcaption>
</figure>

ETF 的市价由买卖盘撮合决定，一旦高出每份资产价值，同样的资金买到的底层资产就会变少：

<figure class="flow-figure mini-chain" id="nb-v01-price-basis">
<div class="ff-head"><p class="ff-title">同样 10,000 美元，按净值与按市价成交</p><span class="ff-sub">每份资产价值均设为 10 美元</span></div>
<div class="mc-row business-exchange" aria-label="按净值成交：10,000 美元按每份净值 10 美元买入 1,000 份，这些份额对应的资产价值为 10,000 美元。"><span class="mc-name">按净值成交</span><span class="mc-val">10,000<small>美元</small></span><span class="mc-step">÷ 净值<small>10 美元</small></span><span class="mc-val">1,000<small>份</small></span><span class="mc-step">× 资产价值<small>10 美元</small></span><span class="mc-val">10,000<small>美元</small></span><span class="mc-note">份额对应的资产价值</span></div>
<div class="mc-row business-exchange" aria-label="按市价成交：10,000 美元按市价 10.10 美元买入约 990 份，这些份额对应的资产价值约 9,901 美元，约 99 美元付给了 1% 的溢价。"><span class="mc-name">按市价成交</span><span class="mc-val">10,000<small>美元</small></span><span class="mc-step mc-loss">÷ 市价<small>10.10 美元</small></span><span class="mc-val">约 990<small>份</small></span><span class="mc-step">× 资产价值<small>10 美元</small></span><span class="mc-val">约 9,901<small>美元</small></span><span class="mc-note">约 99 美元付给了 1% 的溢价</span></div>
<figcaption>不计佣金、销售费用和买卖价差；溢价例中的资产价值为同一时点的估算。</figcaption>
</figure>

即便底层股票纹丝不动，只要 1% 的溢价随后收窄，多付的约 99 美元就会变成真实亏损。之所以主流 ETF 的溢折价通常不大，依靠的是授权参与商（AP）的申赎套利机制——切换下方按钮，看 AP 在溢价和折价时分别怎样行动：[^etf]

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

<span data-text-versions id="nb-v01-text-6">两条路径打通了份额与底层资产的互换，把市价拉回净值附近<span data-text-detail>（图中采用实物申赎的简化路径，实际篮子也可能包含现金，部分产品使用现金申赎。正式 NAV 通常在日终计算，盘中例子用的是同期资产价值估算；海外市场休市、交易成本和对冲条件会影响套利空间，因此价差仍可能存在）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 指数跟踪、主动管理与主题投资 {#nb-v01-management}

ETF 说的是“在交易所交易”的形式，并不自动等于被动跟踪指数。挑一只基金时，要分开问两个问题：**谁决定买什么**（按指数规则被动跟踪，还是由管理人主动选股）和**钱投向多宽的范围**（广泛市场，还是单一行业与主题）。[^rsp]<sup>，</sup>[^urth]<sup>，</sup>[^cgdv]<sup>，</sup>[^sox]<sup>，</sup>[^soxq]<sup>，</sup>[^roundhill]

<figure class="flow-figure fund-map" id="nb-v01-fund-map">
<div class="ff-head"><p class="ff-title">管理方式与投资范围是两个维度</p><span class="ff-sub">同为 ETF，规则与集中度大不相同</span></div>
<div class="fm-grid business-exchange" aria-label="按指数规则管理、覆盖广泛市场：VOO 跟踪 S&P 500 市值加权，RSP 跟踪 S&P 500 等权，URTH 跟踪 MSCI World。由管理人选股、覆盖广泛市场：CGDV 重视收入与增长，以 S&P 500 为业绩比较基准。由管理人选股、集中于某个主题：CHAT 生成式 AI，HUMN 人形机器人，OZEM GLP-1 与减重。按指数规则管理、集中于某个主题：SOXQ 跟踪 SOX，指数由在美国上市、市值最大的 30 家半导体公司组成。">
<span></span><div class="fm-col">按指数规则<small>被动管理</small></div><div class="fm-col">由管理人选股<small>主动管理</small></div>
<div class="fm-row">广泛<br>市场</div>
<div class="fm-cell"><div class="fm-fund"><b>VOO</b><span>S&P 500，市值加权</span></div><div class="fm-fund"><b>RSP</b><span>S&P 500，等权</span></div><div class="fm-fund"><b>URTH</b><span>MSCI World，发达市场</span></div></div>
<div class="fm-cell"><div class="fm-fund"><b>CGDV</b><span>股息与增长主动选股，以 S&P 500 为比较基准</span></div></div>
<div class="fm-row">集中<br>主题</div>
<div class="fm-cell"><div class="fm-fund"><b>SOXQ</b><span>跟踪 SOX：美国上市最大 30 家半导体公司（设权重上限）</span></div></div>
<div class="fm-cell"><div class="fm-fund"><b>CHAT</b><span>生成式 AI，持有 NVDA</span></div><div class="fm-fund"><b>HUMN</b><span>人形机器人，持有 TSLA</span></div><div class="fm-fund"><b>OZEM</b><span>GLP-1 与减重，持有 LLY</span></div></div>
</div>
<figcaption>列看管理人怎样决定持仓，行看资金主要投向哪里。iShares MSCI World ETF（URTH）、Capital Group Dividend Value ETF（CGDV）、Invesco PHLX Semiconductor ETF（SOXQ）及 Roundhill 旗下 CHAT、HUMN、OZEM 持仓例采用 2026 年 6 月 30 日披露数据。</figcaption>
</figure>

看基金文件列出某个指数时，先分清它是**跟踪目标**还是**业绩比较基准**：VOO、RSP、URTH 与 SOXQ 照规则跟踪对应指数（被动管理仍需交易股票、安排现金并控制误差）；而 CGDV 只把 S&P 500 当比较基准，实际持仓由管理人主动决定，可以和指数大不相同。

<span data-text-versions id="nb-v01-text-11">行业指数本身也会靠上限规则约束集中度，例如 Nasdaq 的 PHLX Semiconductor Sector Index（SOX）从美国上市半导体公司选出市值最大的 30 家，前三名上限依次为 12%、10%、8%，其余每家不超过 4%<span data-text-detail>（入选公司须属于 ICB 分类中的半导体或生产技术设备子行业，超出上限的权重按市值比例分给其他成分；成分每年 9 月重组，权重在 3、6、9、12 月按季调回，两次调整之间会随价格漂移）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> <span data-text-versions id="nb-v01-text-12">跟踪 SOX 的 SOXQ 在调整当日，10,000 美元最多有 1,200 美元落到第一大公司、三名以外每家最多 400 美元，全部压在半导体行业上<span data-text-detail>（据 2025 年 12 月 19 日招募说明书，SOXQ 通常将至少 90% 总资产投向指数成分，年度总费用率 0.19%；1,200/400 美元是按指数上限换算的规则推算，非某一时点实际持仓）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-v01-text-9">主动主题基金（如 Roundhill 的 CHAT、HUMN 与 OZEM）能把对某条产业方向的看好直接落到持仓里，代价是风险同样压在同一条产业链上<span data-text-detail>（2026 年 6 月 30 日前五大持仓中，CHAT 持有 NVDA，HUMN 持有 Tesla（TSLA，官网以 Optimus 说明人形机器人方向），OZEM 持有 Eli Lilly（LLY））</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 拿 CHAT 来说，AI 资本开支扩张时算力与软件往往齐涨，投入节奏一放缓，几十家上下游成分也会一起降温——持仓家数多，并不代表分散了景气风险。

## 基金费用与投资者所得 {#nb-v01-fees}

把选股和日常管理交给基金，持续发生的管理费与运营开支会汇总成年度总费用率，直接从基金资产里扣除并反映在净值中，账户里不会出现单独扣款。<span data-text-versions id="nb-v01-text-10">VOO 年度总费用率 0.03%（10,000 美元每年约 3 美元），CGDV 为 0.33%（约 33 美元），CHAT 为 0.75%（约 75 美元）<span data-text-detail>（分别取自 2026 年 4 月 28 日、8 月 1 日与 8 月 27 日产品文件；VOO 含管理费 0.02% 与其他费用 0.01%，CGDV 与 CHAT 全部为管理费；实际扣费金额随基金净值上下变动）</span>。[^fee-rules]<sup>，</sup>[^voo-prospectus]<sup>，</sup>[^cgdv]<sup>，</sup>[^chat-fee]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 被扣掉的资金无法继续滚存，时间一拉长，微小的费率差会滚出数千美元的差距：

<figure class="flow-figure fee-gap" id="nb-v01-fee-gap">
<div class="ff-head"><p class="ff-title">与年度费用率 0.03% 相比，少留下的金额</p><p class="ff-legend"><span style="--c:#5986a1">0.33%</span><span style="--c:#b47550">0.75%</span></p></div>
<div class="ff-bars fb-grouped business-exchange" aria-label="本金 10,000 美元、费用前年收益 6% 时，年度费用率 0.33% 和 0.75% 与 0.03% 相比：第 5 年分别少 199 和 474 美元；第 10 年分别少 529 和 1,245 美元；第 15 年分别少 1,052 和 2,451 美元；第 20 年分别少 1,860 和 4,291 美元。"><span class="fb-group">第 5 年</span><span class="fb-bar"><i style="--w:4.6%;--c:#5986a1"></i></span><span class="fb-val">199</span><span class="fb-bar"><i style="--w:11.1%;--c:#b47550"></i></span><span class="fb-val">474</span><span class="fb-group">第 10 年</span><span class="fb-bar"><i style="--w:12.3%;--c:#5986a1"></i></span><span class="fb-val">529</span><span class="fb-bar"><i style="--w:29.0%;--c:#b47550"></i></span><span class="fb-val">1,245</span><span class="fb-group">第 15 年</span><span class="fb-bar"><i style="--w:24.5%;--c:#5986a1"></i></span><span class="fb-val">1,052</span><span class="fb-bar"><i style="--w:57.1%;--c:#b47550"></i></span><span class="fb-val">2,451</span><span class="fb-group">第 20 年</span><span class="fb-bar"><i style="--w:43.3%;--c:#5986a1"></i></span><span class="fb-val">1,860</span><span class="fb-bar"><i style="--w:100.0%;--c:#b47550"></i></span><span class="fb-val">4,291</span></div>
<div class="fg-ends business-exchange" aria-label="20 年后，三档费用率分别留下 31,879、30,020 和 27,588 美元。"><div>年度费用率 0.03%<strong>31,879 美元</strong>20 年后</div><div>年度费用率 0.33%<strong>30,020 美元</strong>20 年后</div><div>年度费用率 0.75%<strong>27,588 美元</strong>20 年后</div></div>
<figcaption>本金 10,000 美元，三档采用同样的费用前年收益 6%，每年末按资产扣除相应比例，金额单位为美元，不代表三只实际基金的业绩。<a href="/notebook/index-funds/calculations.csv">查看计算数据</a> · <a href="/notebook/index-funds/fund-fee-extracts.md">费表摘录</a> · <a href="/notebook/index-funds/model.py">计算方法</a>。</figcaption>
</figure>

<span data-text-versions id="nb-v01-text-7">因为基金公布的净值回报已经扣过持续费用，比较历史业绩时不要再重复减去一次费率；对比主动基金，关键看扣除费用后的结果是否值得这笔额外支出<span data-text-detail>（文中三只产品所核费用表均无当期减免使净费率低于总费率；其他产品若列有费率减免，需留意净费率及到期日。上图按 6% 费用前年收益、年末扣费 \(10000[(1+0.06)(1-f)]^{20}\) 测算，不计税费与销售费；实际基金通常按日计提）</span>。[^voo-sheet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除持有期间的持续费用外，买入和退出两个节点也可能扣费，完整持有一轮的成本结构如下：[^aivsx]

<figure class="flow-figure stage-lanes rs-3" id="nb-v01-fee-stages">
<div class="ff-head"><p class="ff-title">一段完整持有过程中的收费</p><span class="ff-sub">以 AIVSX Class A 最高前端费为例</span></div>
<div class="rs-grid business-exchange" aria-label="买入时，部分场外基金份额收取销售费用，ETF 有交易佣金与买卖价差；持有时，基金承担年度持续费用，渠道还可能另收账户或投顾费用；卖出或赎回时，可能有赎回费或后端销售费，ETF 有交易佣金与买卖价差。AIVSX Class A 例：投入 10,000 美元，按最高前端销售费 5.75% 先付 575 美元，买入份额的资金为 9,425 美元；持有期间每年持续费用 0.55%，从基金资产中扣除；该份额属于前端收费 Class A，常规赎回不另收后端销售费，具体按份额条款与销售安排确定。">
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
<div class="rs-cell rs-step rs-wait" style="--c:4;--lane:3">前端收费 Class A<small>常规赎回不另收后端销售费，具体按份额条款</small></div>
</div>
</figure>

<span data-text-versions id="nb-v01-text-8">一次性销售费直接削减起投本金，年度持续费则每年按资产比例滚扣，两者发生时点与分母不同，不能简单相加；同一只基金在不同份额类别和销售渠道下的成本也可能相差很大<span data-text-detail>（The Investment Company of America Class A（AIVSX）年度持续费用 0.55% 含 0.23% 管理费、0.08% 其他费用和 0.24% 持续销售服务费 12b-1，取自产品页标注的 2026 年 3 月 1 日招募书；5.75% 为最高前端销售费，具体折扣、豁免及合并账户资格依销售安排确定，不能与 0.55% 相加称作每年 6.30%）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 场外申赎本身也不必然昂贵：Vanguard 自家共同基金不收前后端销售费（少数产品另设特定买入或赎回费）；而场内 ETF 即便“免佣金”，也仍存在持续费用与买卖价差。[^vanguard-fees]<sup>，</sup>[^fee-rules]

真正下单买入 VOO 时，屏幕报价怎样变成实际成交价、买卖价差又从何而来，下一篇[《报价、订单与实际成交》](/zh/notebook/quotes-orders-execution/)接着展开。

<link rel="stylesheet" href="/notebook/index-funds/ui.css?v=20261126">
<script src="/notebook/index-funds/ui.js?v=20261126" defer></script>
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

[^sp-method]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。
[^msci]: MSCI，[MSCI World Index factsheet](https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf)，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。
[^index-math]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。
[^equal]: S&P Dow Jones Indices，[S&P 500 Equal Weight Index](https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/) 与[等权指数 FAQ](https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/)，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
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
[^roundhill]: Roundhill，[CHAT](https://www.roundhillinvestments.com/etf/chat/)、[HUMN](https://www.roundhillinvestments.com/etf/humn/)、[OZEM](https://www.roundhillinvestments.com/etf/ozem/) 产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
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
- [保证金、对冲与期间现金](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)
- [复利、通胀与机会成本](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/)
- [报价、订单与实际成交](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-execution/)
