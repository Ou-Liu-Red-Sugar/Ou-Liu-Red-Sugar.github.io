# 收入增长与市场预期

拆开销量、净价、客户和产品组合，用真实业绩与预测市场辨认增长预期，再从股价反推所需收入，交给经营证据检验。

Entry: zh-revenue-growth-expectations | Node: NB-D02 | Language: zh | Editorial revision: 2026-11-28

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
以学习者当前问题为主，按需读取所选行业。共同主线是解释实际收入增长、辨认事件门槛与事前价格、在明确条件下从股票价格反推收入。MRVL历史价格记录与后来结果分开；年度展望不可直接替代季度。KO互动使用2025可比收入/归属利润，2026全年、利润率、股数与26倍参照为本篇条件；26倍数值有研报出处，但不是唯一市场预期。Agent应解释客户需求、供应交付、价格与组合怎样支持或挑战增长要求。公式由程序计算，经营判断仍须依据材料。静态输入与结果在正文，互动配置与源码按需读取；不要求学习者先看完所有资料。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-d02-ko-q2-2025",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf"
      },
      "required_unit": {
        "locator": "PDF p1 标题与 Quarterly Performance / Revenues；PDF p3 Revenues and Volume，Consolidated 行及 rounding 注；PDF p8 Notes，unit case、unit case volume、concentrate sales、price/mix；PDF p15 Definitions；p25 Net Operating Revenues 调节表；PDF p3 Asia Pacific 行；p5 Asia Pacific 第二段",
        "scope": "全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "The Coca-Cola Company — Second Quarter 2025 Earnings Release",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2025-07-22"
    },
    {
      "source_id": "nb-d02-pm-contracts",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above"
      },
      "required_unit": {
        "locator": "event id 483195; markets id 2256679–2256683; description/outcomes/clobTokenIds/closedTime",
        "scope": "读取五个子合约完整description、题目、token映射、结束及关闭字段、当前解析状态；完整JSON保留。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets",
      "authors": [
        "Polymarket"
      ],
      "version": "Retrieved 2026-09-27; markets created/opened May 2026"
    },
    {
      "source_id": "nb-d02-pm-history-1850",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60"
      },
      "required_unit": {
        "locator": "history[] entries with t/p; selected t=1779811204",
        "scope": "读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.85B?",
      "authors": [
        "Polymarket"
      ],
      "version": "2026-05-14 to 2026-05-28, hourly request"
    },
    {
      "source_id": "nb-d02-pm-history-1900",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://clob.polymarket.com/prices-history?market=17371423556770029879189222365137773013648929593752442002979764677862763408752&startTs=1778716800&endTs=1779926400&fidelity=60"
      },
      "required_unit": {
        "locator": "history[] entries with t/p; selected t=1779811204",
        "scope": "读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.9B?",
      "authors": [
        "Polymarket"
      ],
      "version": "2026-05-14 to 2026-05-28, hourly request"
    },
    {
      "source_id": "nb-d02-mrvl-q1fy2027",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm"
      },
      "required_unit": {
        "locator": "Quarterly Revenue Trend (Unaudited), Revenue by End Market table (HTML table index 9, zero-based); opening acquisition paragraph",
        "scope": "读取收入终端市场定义表、当前/前季/去年同季收入表、收购纳入范围及发布日期；未重建全套利润和现金流。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2026-05-27; quarter ended 2026-05-02"
    },
    {
      "source_id": "nb-d02-mrvl-base",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm"
      },
      "required_unit": {
        "locator": "Quarterly Revenue Trend table (HTML table index 8, zero-based)",
        "scope": "读取当年已披露Data center 1,440.6百万美元及季度期间；与最新表所列同季数一致。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2025-05-29; quarter ended 2025-05-03"
    },
    {
      "source_id": "nb-d02-mrvl-guidance-deck",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf"
      },
      "required_unit": {
        "locator": "PDF pp6,13,15–16 (one-based)",
        "scope": "实际读p6全年数据中心约40%增长预期、p13产品/需求背景、p15收入类别变更脚注及p16全公司Q1指引；完整45页原件保存但不称通读。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY26 and Q4 FY26 Financial and Business Results",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2026-03-05"
    },
    {
      "source_id": "nb-d02-ko-fy2025-base",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf"
      },
      "required_unit": {
        "locator": "PDF p10 Consolidated Statements of Income，Year Ended December 31, 2025；PDF p16 Comparable EPS 定义；PDF p22 Reconciliation，Comparable (Non-GAAP) Net operating revenues；PDF p23 Reconciliation，Comparable (Non-GAAP) Net income及Diluted net income per share；脚注3明确net income为归属公司股东净利",
        "scope": "GAAP净营收为47,941m；另列的可比净营收为48,062m，不能不加标签地交换。；可比归属股东净利润12,958m和可比稀释EPS显示值3.00均来自公司非GAAP调节表；GAAP对应归属股东净利13,107m、稀释EPS3.04。；4,313m为2025全年稀释加权平均股数，不是2025年末股数。；本篇同口径净利率proxy采用12,958/48,062；EPS用12,958/4,313核对，公司显示3.00是取整数。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2026-02-10"
    },
    {
      "source_id": "nb-d02-dbs-ko-multiple",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf"
      },
      "required_unit": {
        "locator": "PDF p1右上 4 May 2026；PDF p1 Key Financial Data / Share Price (USD) 78.76；表下 Closing Price as of 30 Apr 2026；PDF p1 Investment Overview，Maintain BUY段：TP86 pegged to a higher 26x fwd PE；PDF p1 12-mth Target Price (USD) 86.0",
        "scope": "当前URL取得的本地PDF实际为2026-05-04版，报告列示2026-04-30收盘价78.76。；26倍是分析师为其目标价选择的forward PE；本篇可把这个已公开数值作为有出处、可调整的条件输入。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke",
      "authors": [
        "DBS"
      ],
      "version": "2026-05-04"
    }
  ],
  "required_readings_by_branch": {
    "consumer": [
      {
        "source_id": "nb-d02-ko-q2-2025",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf"
        },
        "required_unit": {
          "locator": "PDF p1 标题与 Quarterly Performance / Revenues；PDF p3 Revenues and Volume，Consolidated 行及 rounding 注；PDF p8 Notes，unit case、unit case volume、concentrate sales、price/mix；PDF p15 Definitions；p25 Net Operating Revenues 调节表；PDF p3 Asia Pacific 行；p5 Asia Pacific 第二段",
          "scope": "全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "The Coca-Cola Company — Second Quarter 2025 Earnings Release",
        "authors": [
          "The Coca-Cola Company"
        ],
        "version": "2025-07-22"
      },
      {
        "source_id": "nb-d01-wmt",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm"
        },
        "required_unit": {
          "locator": "Walmart U.S. Results of Operations；本轮实际阅读974–980行",
          "scope": "FY2025 WMT US comparable sales +4.8%，公司归因为交易次数及销量增加；FY2024 +5.5%来自交易次数与客单价。可用来区分同店业务变化与新店扩张，不能据此推算未给出的新店精确贡献。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Walmart FY2025 Form 10-K — Business; Membership and Other Income",
        "authors": [
          "Walmart"
        ],
        "version": "财年截至 2025-01-31；申报 2025-03-14"
      },
      {
        "source_id": "nb-d01-nke",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Consolidated Operating Results",
          "scope": "批发 −7%（剔汇率 −6%）、NIKE Direct −13%（剔汇率 −12%，数字 −20%）、鞋类销量 −8% 与均价拖累约 3 pct。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "NIKE FY2025 Form 10-K — Business and Revenue Recognition",
        "authors": [
          "NIKE"
        ],
        "version": "财年截至 2025-05-31"
      }
    ],
    "software": [
      {
        "source_id": "nb-d02-snow-q2fy2026",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf"
        },
        "required_unit": {
          "locator": "PDF p16 Note 3 Revenue；p53 Revenue comparison 三个月列；PDF p45 Net Revenue Retention Rate 全段；PDF p53 Product revenue increased 段：125% as of July 31, 2025；PDF p17 Note 3 / Remaining Performance Obligations；p47 Remaining Performance Obligations及Components of Results / Revenue",
          "scope": "Q2 FY2026产品收入为1,090.496m，可显示1,090.5m，同比报告为32%；NRR为125%。；125%表示所定义同一cohort在第二个12个月窗口的产品收入相对第一个窗口增长25%，包含该组扩张、收缩和不再使用的净结果。；32%与25%不能直接相减取得新客户贡献：观察期间、客户总体及比较分母不相同。即使期间统一，也要知道该cohort在总基期收入中的权重。；RPO既含递延收入也含未开票合同额；它不能完整反映未来usage增长及其发生时间，超出已承诺capacity的消费与新增采购未必已经进入现有RPO。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025",
        "authors": [
          "Snowflake Inc."
        ],
        "version": "本篇核读：2026-09-27"
      },
      {
        "source_id": "nb-d01-msft-fy26",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm"
        },
        "required_unit": {
          "locator": "FY2026 10-K Segment Results",
          "scope": "M365 商业云 +17%（席位 +6% 叠加 E5/Copilot 提价）与 Azure +41% 增长对照。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Microsoft Corporation FY2026 Form 10-K",
        "authors": [
          "Microsoft Corporation"
        ],
        "version": "FY2026 (ended 2026-06-30)"
      }
    ],
    "platform": [
      {
        "source_id": "nb-b01-source-alphabet",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
        },
        "required_unit": {
          "locator": "Item 7，广告指标定义与增长表；本轮实际阅读 HTML 907–918、1108–1118 行",
          "scope": "Search & other 的 paid clicks 2025同比+6%、CPC+7%；不是全部Alphabet广告的统一量价。Network采用展示量与每次展示费用。CPC受设备/地域/产品组合和外汇等影响，不等于所有广告统一涨价。两个增速不能直接当精确加总。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Alphabet 2025 Form 10-K",
        "authors": [
          "Alphabet"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-d01-amzn-fy25",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Note 10 Net Sales by Group",
          "scope": "3P 第三方卖家服务 1,561→1,722 亿美元（+10.3%）与广告服务 686 亿（+22.1%）。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Amazon.com, Inc. FY2025 Form 10-K",
        "authors": [
          "Amazon.com, Inc."
        ],
        "version": "FY2025 (ended 2025-12-31)"
      },
      {
        "source_id": "nb-d01-bkng",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Results of Operations",
          "scope": "总预订 +12.4%、收入 +13.4%、营销费用 +12.5%（占收比 30.4%）。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Booking Holdings 2025 Form 10-K — Marketing",
        "authors": [
          "Booking Holdings"
        ],
        "version": "年度截至 2025-12-31"
      }
    ],
    "semiconductor": [
      {
        "source_id": "nb-d02-mrvl-q1fy2027-10q",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000019/mrvl-20260502.htm"
        },
        "required_unit": {
          "locator": "Net revenue by end market table (HTML table index 12, zero-based); Note 13 Segment Information; MD&A overview",
          "scope": "读取终端市场收入表、唯一报告分部说明、数据中心产品需求解释及并购纳入；与前日8-K按同一数字对照。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Marvell quarter ended May 2 2026 Form 10-Q",
        "authors": [
          "Marvell Technology"
        ],
        "version": "2026-05-28; quarter ended 2026-05-02"
      },
      {
        "source_id": "nb-d01-asml-20f",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm"
        },
        "required_unit": {
          "locator": "FY2025 Form 20-F & Annual Report Note 2",
          "scope": "系统确认台数 583→535（−8.2%）而净系统销售 +12.4%（NXE/EXE 放量对冲 KrF 腰斩），装机服务 +26.2%。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "ASML Holding N.V. FY2025 Form 20-F",
        "authors": [
          "ASML Holding N.V."
        ],
        "version": "FY2025 (ended 2025-12-31)"
      },
      {
        "source_id": "nb-d01-nvda",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm"
        },
        "required_unit": {
          "locator": "FY2026 10-K Revenue by End Market",
          "scope": "数据中心 1,152→1,937 亿（+68%），其中 Compute +59%、Networking +142%。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customers",
        "authors": [
          "NVIDIA"
        ],
        "version": "财年截至 2026-01-25"
      }
    ],
    "industrial": [
      {
        "source_id": "nb-d01-otis",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm"
        },
        "required_unit": {
          "locator": "Item 1 Service；本轮阅读205–222行",
          "scope": "维保组合约250万台，涵盖本公司和其他厂家设备；增长来源为新梯交付后转入维保、取得其他已有设备维保合同、收购。维修/现代化项目另看，不能装机总量乘统一年费。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Otis Worldwide 2025 Form 10-K — New Equipment and Service",
        "authors": [
          "Otis Worldwide"
        ],
        "version": "年度截至 2025-12-31"
      },
      {
        "source_id": "nb-d02-otis-call",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s203.q4cdn.com/227649559/files/doc_financials/2025/q4/4Q25-Otis-Worldwide-Corp-Earnings-Call-Transcript.pdf"
        },
        "required_unit": {
          "locator": "Q4 2025 Earnings Call pp4 & 18",
          "scope": "全年新设备订单持平、Backlog 固定汇率 +2%（实际 +6%）、服务组合 +4% 及美国 Q4 执行延至 Q1 说明。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Otis Worldwide Corporation Q4 2025 Earnings Call — Corrected Transcript",
        "authors": [
          "Otis Worldwide Corporation",
          "FactSet CallStreet"
        ],
        "version": "2026-01-28"
      }
    ],
    "healthcare": [
      {
        "source_id": "nb-d01-hca",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf"
        },
        "required_unit": {
          "locator": "PDF第68、71页（网络文本P67等），收入与Equivalent admissions解释",
          "scope": "2025收入75.600b、2024为70.603b，同比增长7.1%；equivalent admissions +2.9%，每equivalent admission收入+4.0%。该量按总收入比例把门诊折合进住院当量，不是去重患者人数。使用数字时解释这一层，不能直接称患者+2.9%。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues",
        "authors": [
          "HCA Healthcare"
        ],
        "version": "2025 年度；URL 目录含 2024，报告正文为 2025"
      },
      {
        "source_id": "nb-d01-jnj",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Innovative Medicine Product Sales",
          "scope": "STELARA −41.3%（103.6→60.8 亿）与 DARZALEX +23.0%、TREMFYA +40.5%、CARVYKTI +95.9% 新旧对冲。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Johnson & Johnson 2025 Form 10-K — Innovative Medicine and MedTech",
        "authors": [
          "Johnson & Johnson"
        ],
        "version": "财年截至 2025-12-28"
      },
      {
        "source_id": "nb-d01-isrg-fy25",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Revenue & Procedures",
          "scope": "总收入 +20.5%（83.5→100.6 亿），da Vinci 手术超 310 万例（+18%）、Ion +51% 带动系统/耗材/服务三线增长。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Intuitive Surgical, Inc. FY2025 Form 10-K",
        "authors": [
          "Intuitive Surgical, Inc."
        ],
        "version": "FY2025 (ended 2025-12-31)"
      }
    ],
    "finance": [
      {
        "source_id": "nb-d01-jpm",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf"
        },
        "required_unit": {
          "locator": "PDF79、83、92、351页；NII及定义段",
          "scope": "净收入含净利息收入与非利息收入。NII受到平均生息资产、资产收益与资金利息成本共同影响；信用卡循环余额、存款、证券活动及利率变化参与解释。季度不能将余额与年化收益率直接相乘漏掉时间。这里只用机制，不复制整表。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "JPMorgan Chase 2025 Annual Report — Consumer & Community Banking",
        "authors": [
          "JPMorgan Chase"
        ],
        "version": "2025 年度"
      },
      {
        "source_id": "nb-d01-visa",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm"
        },
        "required_unit": {
          "locator": "Service/data processing revenue与operating metrics；已读1152–54、1189、1211、1240–68行",
          "scope": "付款金额主要驱动service revenue，处理交易笔数主要驱动data processing revenue；季度service revenue主要按上季名义支付金额计费。跨境/定价/客户激励亦影响净收入。只对此收费类别讲前季→本季，不能推广全部V收入。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Visa FY2025 Form 10-K — Network Model and Transaction Processing",
        "authors": [
          "Visa"
        ],
        "version": "财年截至 2025-09-30"
      },
      {
        "source_id": "nb-d02-chubb-premiums",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf"
        },
        "required_unit": {
          "locator": "PDF pp157–158，印刷页 F-10–F-11，Note 1 Summary of significant accounting policies / b) Premiums；PDF p97，10-K印刷页49，Financial Highlights for the Year Ended December 31, 2025，P&C net premiums written 段",
          "scope": "保费定义跨页完整读取，经营增长说明读取对应段落；其他命中页只作定位上下文，不作为新增研究内容。未称304页全文已审读。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Chubb Limited Annual Report 2025 — Premiums; Financial Highlights",
        "authors": [
          "Chubb Limited"
        ],
        "version": "本篇核读：2026-09-27"
      }
    ],
    "energy": [
      {
        "source_id": "nb-d01-xom",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions"
        },
        "required_unit": {
          "locator": "D01已核的业务介绍；本篇按上游、产品和服务机制复用",
          "scope": "自产资源销售与炼化/化工业务分别研究。产销量、实现售价和组合不等于屏幕现货价；本篇无额外精确增长数字。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "ExxonMobil — Business divisions",
        "authors": [
          "ExxonMobil"
        ],
        "version": "动态公司业务页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-kmi",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.kindermorgan.com/Operations/Products/Index"
        },
        "required_unit": {
          "locator": "Products Pipelines，Galena Park；本轮读取网页276行",
          "scope": "Galena Park凝析油加工基于与BP North America长期fee-based协议。用于区别收费加工与自有商品销售，不虚构具体容量费/最低量公式，不说全部KMI合同相同。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Kinder Morgan — Products Pipelines; Condensate Processing Facility",
        "authors": [
          "Kinder Morgan"
        ],
        "version": "动态公司业务页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-xom-10k",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm"
        },
        "required_unit": {
          "locator": "FY2025 10-K Production, Realizations, Note 3 & Note 20",
          "scope": "原油日产量 +7.2% 而均价 −14.3%、合并销售收入降至 3,239 亿、消除分部间收入 1,210 亿及 Pioneer 并表范围。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Exxon Mobil Corporation FY2025 Form 10-K",
        "authors": [
          "Exxon Mobil Corporation"
        ],
        "version": "FY2025 (ended 2025-12-31)"
      },
      {
        "source_id": "nb-d01-wic-2025",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://pipeline2.kindermorgan.com/Documents/WIC/RP25-1193-000_Negotiated_Rate_Agreement_Update_-_Black_Hills_2025-20250930164903.pdf"
        },
        "required_unit": {
          "locator": "Clean Tariff PDF pp6–7",
          "scope": "相同 28,150 Dth/d 容量下，输送量翻倍（10k→20k Dth/d）仅使两项费用合计增长 56.8%。",
          "purpose": "核对本行业分支采用的 2025/2026 两期增长拆解实数与口径限制。"
        },
        "title": "Wyoming Interstate Company — Black Hills Negotiated Rate Agreement Update",
        "authors": [
          "Wyoming Interstate Company, L.L.C."
        ],
        "version": "Filed 2025-09-30 (term 2025-11-01 to 2030-10-31)"
      }
    ]
  },
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
收入增长，可能因为卖得更多，也可能因为卖得更贵。Coca-Cola（KO）在 2025 年第二季度的报表净营收同比增长 1%，全球标准箱销量却下降 1%。收入在涨、销量在跌，不把增长拆开，根本看不清多出来的钱究竟靠什么撑着。[^ko-growth]

[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)拆清了八类生意谁买单、怎么收费。收入一旦开始变化，接下来就要追问增长的质量与延续性：究竟是真实用量扩张、结构上移，还是仅仅受惠于发货时点、折扣回补或并购并表？真到买卖决策时，还要把经营拆解拿去跟公开预期门槛对表，再从眼前股价反推出公司需要交出怎样的成绩单。

## 销量、净价与产品组合 {#nb-d02-drivers}

卖商品的收入最直观：每类商品的销量 \(q_i\) 乘以扣除折扣、退货与渠道折让后的平均净价 \(p_i\)，加总即得收入 \(R=\sum_i q_i p_i\)。把相邻两期或上年同季并列时，除了量与单品净价，还有一个经常被错当成“提价”的变量——**产品组合**。哪怕每款商品单价分文未涨，只要高价款占比上升，整体均价也会大幅跳升。

<figure class="flow-figure stack-rows" id="nb-d02-mix">
<div class="ff-head"><p class="ff-title">每款都不涨价，平均售价也能上升（示意）</p><p class="ff-legend"><span style="--c:#8db39c">A 款，每件 10 元</span><span style="--c:#24664f">B 款，每件 20 元</span></p></div>
<div class="sr-grid">
<span class="sr-name">第一期</span><span class="sr-val">收入 <strong>1,200 元</strong><br>平均售价 12 元</span><div class="sr-bar business-exchange" aria-label="第一期卖出 100 件：A 款 80 件、B 款 20 件，收入 1,200 元，平均售价 12 元。"><i style="--w:80%;--c:#8db39c">A 80 件</i><i style="--w:20%;--c:#24664f">B 20 件</i></div>
<span class="sr-name">第二期</span><span class="sr-val">收入 <strong>1,400 元</strong><br>平均售价 <strong>14 元，+16.7%</strong></span><div class="sr-bar business-exchange" aria-label="第二期同样卖出 100 件，每款价格不变，但 B 款增加到 40 件、A 款减少到 60 件，收入 1,400 元，平均售价 14 元，上升约 16.7%。"><i style="--w:60%;--c:#8db39c">A 60 件</i><i style="--w:40%;--c:#24664f">B 40 件</i></div>
</div>
<figcaption>两期都卖出 100 件，A、B 两款单价不变；平均售价跳升 16.7%，全部来自高价款占比提高。</figcaption>
</figure>

量、价与组合彼此牵动：硬提价可能劝退价格敏感顾客，推高毛利新品则可能同时拉高销量与均价。下面沿用前篇的八个行业分支，逐一用 2025/2026 年一手财报演示不同生意怎样拆增长、避陷阱。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d02-consumer">

## 消费品与零售：销量与组合 {#nb-d02-consumer-story}

拆消费品牌与零售商的收入变化，要先核对三条分界线：**批发与直营渠道**、**上游出货与终端动销**，以及**老店可比销售与新店／会费增量**。前篇[《消费品与零售》](/zh/notebook/customers-products-pricing/#nb-d01-consumer-flow)已经拆开了 NKE 与 WMT 的收费结构，把它们拉进两期对比，差异立刻显现。[^nke]<sup>，</sup>[^ko-growth]<sup>，</sup>[^wmt]

<figure class="flow-figure" id="nb-d02-consumer-bridge">
<div class="ff-head"><p class="ff-title">消费品与零售：渠道量价分化（NKE）、发货时点差（KO）与同店拆分（WMT）</p><span class="ff-sub">2025 年财报实数：出货、动销、老店与会费各走各的账</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 NKE FY2025 渠道与量价分化，批发收入由 277.6 亿降至 258.8 亿美元（报告 −7%、剔汇率 −6%），NIKE Direct 由 215.2 亿降至 187.8 亿美元（报告 −13%、剔汇率 −12%，其中数字业务 −20%），同期 NIKE Brand 鞋类销量降 8%、低均价再拖累约 3 个百分点；右栏展示 KO 2025 Q2 亚太地区标准箱销量 −3% 与浓缩液发货 −5% 的 2 个百分点时点落差，以及 WMT U.S. FY2025 净销售增 4.7%（4,418 亿至 4,624 亿美元）、可比销售增 4.8%（交易次数与件数拉动）及全集团纯会费由 31 亿增至 38 亿美元。">
<svg viewBox="0 0 860 320" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="408" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="408" height="36" rx="11" fill="#faeae7"/>
  <rect x="14" y="38" width="408" height="12" fill="#faeae7"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">NKE FY2025：渠道降速与折扣拖累</text>
  <text x="30" y="74" font-size="12" font-weight="700" fill="#22392f">批发（Wholesale）</text>
  <text x="404" y="74" text-anchor="end" font-size="12" font-weight="700" fill="#b5483a">277.6 → 258.8 亿（−7% / 剔汇率 −6%）</text>
  <rect x="30" y="83" width="374" height="14" rx="4" fill="#eef1ec"/>
  <rect x="30" y="83" width="348" height="14" rx="4" fill="#6b9f8c"/>
  <text x="30" y="122" font-size="12" font-weight="700" fill="#22392f">直营（NIKE Direct）</text>
  <text x="404" y="122" text-anchor="end" font-size="12" font-weight="700" fill="#b5483a">215.2 → 187.8 亿（−13% / 剔汇率 −12%）</text>
  <rect x="30" y="131" width="290" height="14" rx="4" fill="#eef1ec"/>
  <rect x="30" y="131" width="253" height="14" rx="4" fill="#b5483a"/>
  <text x="30" y="160" font-size="11" fill="#5e6d65">其中直营数字业务同比 −20%，自有门店持平</text>
  <rect x="30" y="178" width="374" height="112" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="44" y="200" font-size="12" font-weight="700" fill="#8f6033">NIKE Brand 鞋类量价拆解（公司披露）</text>
  <text x="44" y="223" font-size="12" fill="#3c4c44">· 单位销量：<tspan font-weight="700" fill="#b5483a">−8%</tspan>（主动压缩部分经典款供给）</text>
  <text x="44" y="245" font-size="12" fill="#3c4c44">· 每双均价：<tspan font-weight="700" fill="#b5483a">拖累约 −3 pct</tspan>（直营降价＋批发折扣退货）</text>
  <text x="44" y="269" font-size="11" fill="#5e6d65">注：鞋类量价属产品口径，不能直接套作直营 −12% 的精确拆解。</text>
  <rect x="438" y="14" width="408" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="438" y="14" width="408" height="36" rx="11" fill="#eff4f1"/>
  <rect x="438" y="38" width="408" height="12" fill="#eff4f1"/>
  <text x="454" y="37" font-size="13.5" font-weight="700" fill="#22392f">KO 发货时点差 ＆ WMT 老店／会费拆分</text>
  <rect x="454" y="66" width="376" height="96" rx="8" fill="#f7faf8" stroke="#c8dad0"/>
  <text x="468" y="88" font-size="12" font-weight="700" fill="#23695a">KO 2025 Q2 亚太：两个“箱数”差 2 个百分点</text>
  <text x="468" y="112" font-size="12" fill="#3c4c44">标准箱销量（贴近下游装瓶出货）：<tspan font-weight="700" fill="#22392f">−3%</tspan></text>
  <text x="468" y="133" font-size="12" fill="#3c4c44">浓缩液销量（KO 向装瓶厂发货）：<tspan font-weight="700" fill="#b5483a">−5%</tspan></text>
  <text x="468" y="152" font-size="11" fill="#5e6d65">差异主因浓缩液跨季发货时点，不等于终端消费骤跌。</text>
  <rect x="454" y="176" width="376" height="114" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="468" y="198" font-size="12" font-weight="700" fill="#22392f">WMT U.S. FY2025：老店增长与会费分账</text>
  <text x="468" y="221" font-size="12" fill="#3c4c44">· 分部净销售：4,418 → 4,624 亿美元（<tspan font-weight="700" fill="#23695a">+4.7%</tspan>）</text>
  <text x="468" y="242" font-size="12" fill="#3c4c44">· 可比销售：<tspan font-weight="700" fill="#23695a">+4.8%</tspan>（由交易次数与件数拉动）</text>
  <text x="468" y="263" font-size="12" fill="#3c4c44">· 全集团纯会费：31 → 38 亿美元（按 12 个月摊销）</text>
  <text x="468" y="281" font-size="10.5" fill="#5e6d65">全销售 +4.7% 与可比 +4.8% 范围不同，不能相减倒推新店贡献。</text>
</svg>
</div>
<figcaption>数据来自 NKE FY2025 10-K、KO 2025 Q2 业绩稿与 WMT FY2025 10-K。各公司口径与财政年度按原文保留。</figcaption>
</figure>

看 NKE 时，直营跌幅几乎是批发的两倍，且直营线上重挫 20%，说明终端流量承压后，品牌不得不靠直营降价和批发折扣去消化库存，进而同时拉低销量与每双净价。看 KO 亚太区，标准箱销量与浓缩液发货相差 2 个百分点，一旦只盯单季出货量，很容易把跨季发货错位当成需求断崖；而 KO 披露的 `price/mix` 把提价、包装规格与渠道组合打成一包，同样不能读成全线饮料统一涨价。

看 WMT 这类零售巨头，则要把老店客流（交易次数与件数）同新店扩张分开，再把按 12 个月摊销的纯会员费单独列出——年初入会与年中入会在当年确认的会费天数不同，会员总数与当期会费收入天然存在时间错位。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d02-software">

## 软件与云服务：新增客户与原有客户 {#nb-d02-software-story}

软件与云服务的增长来自两头：新客户买进来了没有，老客户花得比去年多了没有。按席位收费的办公软件看付费许可与套餐升级（参考前篇[席位与用量双轨图](/zh/notebook/customers-products-pricing/#nb-d01-software-flow)），按用量计费的云数据平台则看同一群老客的实际消耗扩张。[^snow]<sup>，</sup>[^msft-fy26]

<figure class="flow-figure" id="nb-d02-software-bridge">
<div class="ff-head"><p class="ff-title">软件与云服务：为什么单季收入 +32% 不能直接减 NRR 125% 算新客贡献</p><span class="ff-sub">SNOW Q2 FY2026（截至 2025-07-31）与 MSFT FY2026 实数对照</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 SNOW Q2 FY2026 两个口径错位的指标，上框为单季全体产品收入由 829.3 M 美元增至 1,090.5 M 美元（同比 +32%，涵盖 2025 年 5 至 7 月全体新老客户），下框为净收入留存率 NRR 125%（对应 +25% 净扩用，比较的是 2023 年 8 月已在网的固定容量客户群在连续两个 12 个月窗口内的收入，流失客户保留在分母中记零），二者时间窗、客户总体与分母均不同，不能相减；右栏展示领先储备指标与席位制对照，SNOW 剩余履约义务 RPO 增 33% 至 69.3 亿美元、年消超 100 万美元大客户增 30% 至 654 家，对照 MSFT FY2026 M365 商业云增 17%（席位 +6% 加单价提升）与 Azure 增 41%。">
<svg viewBox="0 0 860 320" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="446" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="446" height="36" rx="11" fill="#eff4f1"/>
  <rect x="14" y="38" width="446" height="12" fill="#eff4f1"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">SNOW Q2 FY2026：两把尺子量的是不同人群与时间窗</text>
  <rect x="30" y="64" width="414" height="86" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="44" y="86" font-size="12.5" font-weight="700" fill="#23695a">尺子 A：单季全体产品收入同比 +32%</text>
  <text x="44" y="108" font-size="12" fill="#22392f">829.3 M → <tspan font-weight="700">1,090.5 M 美元</tspan>（净增 +261.2 M）</text>
  <text x="44" y="129" font-size="11" fill="#5e6d65">窗口：2025.05–07 对 2024.05–07 · 范围：全体新老客户</text>
  <rect x="30" y="162" width="414" height="86" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="44" y="184" font-size="12.5" font-weight="700" fill="#8f6033">尺子 B：净收入留存率 NRR = 125%（净增 +25%）</text>
  <text x="44" y="206" font-size="12" fill="#22392f">同一群老客后 12 个月 ÷ 前 12 个月（含扩用、缩减与停用归零）</text>
  <text x="44" y="227" font-size="11" fill="#5e6d65">窗口：2024.08–2025.07 对 2023.08–2024.07 · 仅限 2023.08 在网客户</text>
  <rect x="30" y="258" width="414" height="36" rx="7" fill="#faeae7" stroke="#e4c2bc"/>
  <text x="44" y="280" font-size="11.5" font-weight="700" fill="#b5483a">严禁拿 32% − 25% = 7% 当新客贡献：窗口、群体与分母全错位</text>
  <rect x="476" y="14" width="370" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="476" y="14" width="370" height="36" rx="11" fill="#f6eee4"/>
  <rect x="476" y="38" width="370" height="12" fill="#f6eee4"/>
  <text x="492" y="37" font-size="13.5" font-weight="700" fill="#22392f">配套领先指标 ＆ 席位制对照</text>
  <rect x="492" y="64" width="338" height="106" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="506" y="86" font-size="12.5" font-weight="700" fill="#22392f">SNOW 储备与大客户扩张</text>
  <text x="506" y="109" font-size="12" fill="#3c4c44">· 在手 RPO：52.3 → <tspan font-weight="700" fill="#23695a">69.3 亿美元（+33%）</tspan></text>
  <text x="506" y="131" font-size="12" fill="#3c4c44">· 年消超 100 万美元客户：504 → <tspan font-weight="700" fill="#23695a">654 家（+30%）</tspan></text>
  <text x="506" y="154" font-size="11" fill="#5e6d65">总客户数升至 12,062 家；高价值客户加量撑起留存</text>
  <rect x="492" y="184" width="338" height="110" rx="8" fill="#f7faf8" stroke="#c8dad0"/>
  <text x="506" y="206" font-size="12.5" font-weight="700" fill="#23695a">MSFT FY2026：席位 vs 云消耗分化</text>
  <text x="506" y="229" font-size="12" fill="#3c4c44">· M365 商业云：<tspan font-weight="700" fill="#23695a">+17%</tspan>（席位 +6% ＋ 升级提价）</text>
  <text x="506" y="250" font-size="12" fill="#3c4c44">· Azure 及其他云：<tspan font-weight="700" fill="#8f6033">+41%</tspan>（AI 与云负载拉动）</text>
  <text x="506" y="274" font-size="11" fill="#5e6d65">席位慢增也能靠 E5／Copilot 提 ARPU；云端看工作负载爬坡</text>
</svg>
</div>
<figcaption>数据来自 SNOW Q2 FY2026 Form 10-Q 与 MSFT FY2026 Form 10-K。SNOW 32% 为公司取整值（原值算得约 31.5%）。</figcaption>
</figure>

<span data-text-versions id="nb-d02-software-text-1">Snowflake（SNOW）的净收入留存率（NRR）125%，打包反映了选定老客群体扩用、缩减与停用退出后的净扩张<span data-text-detail>（本次口径选取 2023 年 8 月在网且签有容量合同的客户，对比 2023.08–2024.07 与 2024.08–2025.07 两个 12 个月窗口；停用客户保留在群体中、后一年记零。同季 10-Q 另披露约 98% 收入来自既有容量客户，属存量结构占比，同样不能拿来替代新客增长拆解）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>实务里最容易犯的算数错，是拿当季产品收入同比 32% 减去 25% 声称新客贡献了 7%——两把尺子的时间窗口、客户池和分母全部错位。

判断软件与云增长能否延续，还要把“工作负载优化”纳入视野：同一客户给查询加速或压缩存储，可能让业务量不变而云账单收缩；反过来，像 MSFT M365 那样靠 E5 与 Copilot 升级拉高每席位单价，哪怕席位只增 6%，商业云收入依然能跑出 17% 的增速。

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d02-platform">

## 互联网平台与广告：交易与收费 {#nb-d02-platform-story}

平台流量涨上去以后，要沿着收费层逐一拆解：搜索广告拆**付费点击量 × 平均单次点击收入（CPC）**，电商平台拆**成交件数与履约／广告渗透率**，再回查广告主获客账本确认这轮增长是需求变旺还是获客变贵。前篇[《互联网平台与广告》](/zh/notebook/customers-products-pricing/#nb-d01-platform-flow)已画出 AMZN、BKNG 与 GOOGL 的资金链，这里直接落到 2025 年的变动上。[^alphabet]<sup>，</sup>[^amzn-fy25]<sup>，</sup>[^bkng]

<figure class="flow-figure" id="nb-d02-platform-bridge">
<div class="ff-head"><p class="ff-title">互联网平台与广告：搜索量价乘积（GOOGL）与增长质量核验（AMZN／BKNG）</p><span class="ff-sub">2025 年报实数：先拆点击量与单价，再查广告主是不是被迫“贵买同量”</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 GOOGL 2025 Google Search & other 收入由 1,980.8 亿增至 2,245.3 亿美元（同比 +13.4%），其中点击驱动范围拆为付费点击 +6% 乘以平均 CPC +7% 约等于 +13.4%，同时列出 YouTube 广告 +11.7% 与 Google Network −1.9%；右栏对比两条健康度核验线，AMZN 3P 第三方卖家服务由 1,561 亿增至 1,722 亿美元（+10.3%，受成交件数与 FBA 履约渗透共同推动），BKNG 2025 总预订额 +12.4%、收入 +13.4%、营销费用 +12.5%（占收比稳在 30.4%），用来区分需求扩容与获客变贵。">
<svg viewBox="0 0 860 320" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="414" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="414" height="36" rx="11" fill="#eff4f1"/>
  <rect x="14" y="38" width="414" height="12" fill="#eff4f1"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">GOOGL 2025：搜索量价乘积与板块分化</text>
  <rect x="30" y="64" width="112" height="72" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="86" y="88" text-anchor="middle" font-size="11.5" fill="#5e6d65">付费点击量</text>
  <text x="86" y="114" text-anchor="middle" font-size="20" font-weight="700" fill="#23695a">+6%</text>
  <text x="155" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#7a8780">×</text>
  <rect x="168" y="64" width="112" height="72" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="224" y="88" text-anchor="middle" font-size="11.5" fill="#5e6d65">平均 CPC</text>
  <text x="224" y="114" text-anchor="middle" font-size="20" font-weight="700" fill="#8f6033">+7%</text>
  <text x="293" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#7a8780">≈</text>
  <rect x="306" y="64" width="106" height="72" rx="8" fill="#23695a"/>
  <text x="359" y="88" text-anchor="middle" font-size="11" fill="#e5efe9">点击驱动收入</text>
  <text x="359" y="114" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">+13.4%</text>
  <text x="30" y="158" font-size="11.5" fill="#3c4c44">全体 Search &amp; other：1,980.8 → <tspan font-weight="700" fill="#22392f">2,245.3 亿美元（+13.4%）</tspan></text>
  <rect x="30" y="172" width="382" height="58" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="44" y="194" font-size="11.5" fill="#3c4c44">· YouTube 广告：361.5 → 403.7 亿（<tspan font-weight="700" fill="#23695a">+11.7%</tspan>）</text>
  <text x="44" y="216" font-size="11.5" fill="#3c4c44">· Google Network：303.6 → 297.9 亿（<tspan font-weight="700" fill="#b5483a">−1.9%</tspan>，按展示/CPM 看）</text>
  <rect x="30" y="242" width="382" height="48" rx="7" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="44" y="262" font-size="11" font-weight="700" fill="#8f6033">CPC +7% ≠ 全站统一涨价 7%</text>
  <text x="44" y="279" font-size="10.5" fill="#5e6d65">它混杂了设备、地域、广告格式组合、广告主竞价与汇率变动。</text>
  <rect x="444" y="14" width="402" height="292" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="444" y="14" width="402" height="36" rx="11" fill="#f6eee4"/>
  <rect x="444" y="38" width="402" height="12" fill="#f6eee4"/>
  <text x="460" y="37" font-size="13.5" font-weight="700" fill="#22392f">增长质量双核对：AMZN 3P ＆ BKNG 获客</text>
  <rect x="460" y="64" width="370" height="92" rx="8" fill="#f7faf8" stroke="#c8dad0"/>
  <text x="474" y="86" font-size="12" font-weight="700" fill="#23695a">AMZN 3P 卖家服务：1,561 → 1,722 亿（+10.3%）</text>
  <text x="474" y="109" font-size="11.5" fill="#3c4c44">不只看成交件数：即使 GMV 不变，更多卖家从自发货</text>
  <text x="474" y="128" font-size="11.5" fill="#3c4c44">转向 FBA 履约、或在库时间拉长，都会推高平台服务费。</text>
  <text x="474" y="146" font-size="10.5" fill="#5e6d65">（广告收入 686 亿单列，同比增长 22.1%，独立核算）</text>
  <rect x="460" y="170" width="370" height="120" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="474" y="192" font-size="12" font-weight="700" fill="#8f6033">BKNG 2025：广告主生意变大 vs 获客变贵</text>
  <text x="474" y="215" font-size="12" fill="#3c4c44">总预订 <tspan font-weight="700" fill="#23695a">+12.4%</tspan> · 收入 <tspan font-weight="700" fill="#23695a">+13.4%</tspan> · 营销费 <tspan font-weight="700" fill="#8f6033">+12.5%</tspan></text>
  <text x="474" y="238" font-size="11.5" fill="#3c4c44">· <tspan font-weight="700" fill="#23695a">良性扩张</tspan>：营销增速 ≤ 收入增速，转化稳、退订可控</text>
  <text x="474" y="259" font-size="11.5" fill="#3c4c44">· <tspan font-weight="700" fill="#b5483a">脆弱增长</tspan>：转化跌或退订升，被迫花更多点击买回同单</text>
  <text x="474" y="279" font-size="10.5" fill="#5e6d65">2025 年 BKNG 营销占收比稳在 30.4%，支撑投放延续性。</text>
</svg>
</div>
<figcaption>数据来自 GOOGL、AMZN 与 BKNG 2025 Form 10-K。GOOGL 付费点击 +6% 与 CPC +7% 仅对应点击驱动收入范围。</figcaption>
</figure>

GOOGL 的拆解给出了一个极好的核对示范：付费点击 +6% 乘以平均 CPC +7% 约等于 +13.4%，与全体 Search & other 收入增速 13.4% 高度接近，但 CPC 变动夹杂着移动端占比、高价值行业竞价与广告格式调整，不能直接当成所有关键词统一提价；与此同时，依赖外部版位的 Google Network 反而微降 1.9%，说明不同广告位景气度可以背道而驰。

把镜头切到买方 BKNG，就能辨别增长成色：如果广告主营销费用增速持续跑赢预订与收入增速，意味着平台广告的高增可能是在透支广告主利润率，往往难以为继；当营销占收比平稳、退订率可控时，广告预算扩张才站得住脚。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d02-semiconductor">

## 半导体与硬件：交付量与产品结构 {#nb-d02-semiconductor-story}

读半导体公司的收入增长，最危险的捷径是把所有产品加总成“出货台数”或“芯片颗数”。前篇[半导体四层产业链图](/zh/notebook/customers-products-pricing/#nb-d01-semi-chain)已经区分了设计、代工与设备三层，落到年度增幅上，**代际结构迁移**与**系统配套率提升**的威力远大于单纯出货量变化。[^asml-20f]<sup>，</sup>[^nvda]<sup>，</sup>[^mrvl]

<figure class="flow-figure" id="nb-d02-semi-bridge">
<div class="ff-head"><p class="ff-title">半导体与硬件：台数下降却收入大涨（ASML）与机架配套爆发（NVDA）</p><span class="ff-sub">2025/2026 年报实数：在半导体里，产品代际与结构迁移往往比总出货件数更凶猛</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 ASML 2025 净系统销售由 217.7 亿欧元增至 244.7 亿欧元（+12.4%），但表内确认台数反而从 583 台降至 535 台（−8.2%），原因在于低价 KrF 从 152 台腰斩至 78 台（收入 19.9 亿降至 10.0 亿欧元），而高价 NXE EUV 从 42 台升至 44 台（收入由 78.6 亿跃至 104.5 亿欧元，台均收入由 187 M 升至 237 M 欧元、+26.9%），EXE High-NA EUV 从 2 台增至 4 台（4.7 亿升至 11.6 亿欧元），同期装机升级服务增 26.2% 至 81.9 亿欧元；右栏展示 NVDA FY2026 数据中心营收由 1,152 亿跃至 1,937 亿美元（+68%），其中计算芯片 Compute 增 59% 至 1,624 亿，高速网络 Networking 暴增 142% 至 314 亿美元。">
<svg viewBox="0 0 860 330" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="446" height="302" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="446" height="36" rx="11" fill="#eff4f1"/>
  <rect x="14" y="38" width="446" height="12" fill="#eff4f1"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">ASML 2025：总台数 −8.2%，净系统收入反涨 +12.4%</text>
  <text x="30" y="70" font-size="11.5" fill="#5e6d65">确认系统总数：583 → <tspan font-weight="700" fill="#b5483a">535 台</tspan> ｜ 净系统销售：217.7 → <tspan font-weight="700" fill="#23695a">244.7 亿欧元</tspan></text>
  <rect x="30" y="84" width="414" height="54" rx="7" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="44" y="105" font-size="12" font-weight="700" fill="#23695a">NXE（0.33 NA 极紫外）· 42 → 44 台（仅 +2 台）</text>
  <text x="44" y="126" font-size="11.5" fill="#3c4c44">收入 78.6 → <tspan font-weight="700" fill="#22392f">104.5 亿欧元</tspan>（台均 187 → 237 M 欧元，+26.9%）</text>
  <rect x="30" y="146" width="414" height="50" rx="7" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="44" y="166" font-size="12" font-weight="700" fill="#8f6033">EXE（高数值孔径极紫外）· 2 → 4 台</text>
  <text x="44" y="185" font-size="11.5" fill="#3c4c44">收入 4.7 → <tspan font-weight="700" fill="#22392f">11.6 亿欧元</tspan>（台均约 289 M 欧元）</text>
  <rect x="30" y="204" width="414" height="50" rx="7" fill="#faeae7" stroke="#e4c2bc"/>
  <text x="44" y="224" font-size="12" font-weight="700" fill="#b5483a">KrF（成熟深紫外）· 152 → 78 台（大减 74 台）</text>
  <text x="44" y="243" font-size="11.5" fill="#3c4c44">收入 19.9 → 10.0 亿欧元（单台价值远低于极紫外，拖不动总额）</text>
  <rect x="30" y="264" width="414" height="38" rx="7" fill="#f6f7f3" stroke="#dfe5dc"/>
  <text x="44" y="287" font-size="11.5" fill="#3c4c44">另有<tspan font-weight="700" fill="#23695a">装机升级与服务</tspan>：64.9 → 81.9 亿欧元（<tspan font-weight="700" fill="#23695a">+26.2%</tspan>，含现场升级）</text>
  <rect x="476" y="14" width="370" height="302" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="476" y="14" width="370" height="36" rx="11" fill="#f6eee4"/>
  <rect x="476" y="38" width="370" height="12" fill="#f6eee4"/>
  <text x="492" y="37" font-size="13.5" font-weight="700" fill="#22392f">NVDA FY2026：整柜化拉爆网络配套</text>
  <text x="492" y="72" font-size="12" font-weight="700" fill="#22392f">数据中心总收入：1,152 → 1,937 亿美元（+68%）</text>
  <text x="492" y="102" font-size="11.5" font-weight="600" fill="#23695a">计算（Compute · GPU 与整机）</text>
  <rect x="492" y="110" width="214" height="16" rx="4" fill="#b7d2c5"/>
  <rect x="492" y="130" width="338" height="18" rx="4" fill="#23695a"/>
  <text x="500" y="122" font-size="10.5" fill="#22392f">FY25: 1,022 亿</text>
  <text x="500" y="143" font-size="11" font-weight="700" fill="#ffffff">FY26: 1,624 亿（+59%）</text>
  <text x="492" y="176" font-size="11.5" font-weight="600" fill="#8f6033">网络（Networking · NVLink／以太网）</text>
  <rect x="492" y="184" width="54" height="16" rx="4" fill="#e5c7a7"/>
  <rect x="492" y="204" width="132" height="18" rx="4" fill="#a8743f"/>
  <text x="554" y="196" font-size="10.5" fill="#5e6d65">FY25: 130 亿</text>
  <text x="632" y="217" font-size="11.5" font-weight="700" fill="#8f6033">FY26: 314 亿（+142%）</text>
  <rect x="492" y="238" width="338" height="64" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="506" y="259" font-size="11.5" font-weight="700" fill="#22392f">跨到下文 MRVL 预测市场案例的口径提醒</text>
  <text x="506" y="279" font-size="11" fill="#3c4c44">MRVL Q1 FY2027 数据中心占总收入 76%，</text>
  <text x="506" y="295" font-size="11" fill="#5e6d65">核对单季合约门槛时，严禁混用全公司营收或全年指引。</text>
</svg>
</div>
<figcaption>数据来自 ASML 2025 年报（Note 2 含光刻及量测检测系统，不含未列出的 ArF immersion 等其余四行）、NVDA FY2026 10-K 与 MRVL Q1 FY2027 业绩稿。</figcaption>
</figure>

ASML 2025 年给出了教科书级反例：全年确认收入的系统总台数不升反降 8.2%，净系统销售额却逆势大涨 12.4%。低价成熟深紫外（KrF）少卖 74 台，只要多交付 2 台 NXE 极紫外与 2 台高数值孔径 EXE，就能轻松反转大盘。<span data-text-versions id="nb-d02-semi-text-1">同时要守住分母口径与验收时点<span data-text-detail>（ASML 2025 年 Note 2 表的 535 台含光刻及量测检测系统，纯光刻系统为 327 台，总收入 326.7 亿欧元还包含 81.9 亿装机升级与服务收入，三者不可交叉相除算均价；成熟设备与新机型的验收确认时点也会影响跨年收入归属）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

NVDA FY2026 的数据中心爆发则展示了另一层结构杠杆：从单卡走向整柜集群后，高速网络互联（Networking）以 142% 的增速把配套比例大幅推高。紧接下文的 Marvell（MRVL）预测市场案例同样遵循这一纪律——核对数据中心板块门槛时，必须锁死终端市场口径，不与全公司收入或全年指引混谈。

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d02-industrial">

## 工业设备与工程服务：订单与履约 {#nb-d02-industrial-story}

工业与工程公司最常让新手困惑的现象，是“订单没跌、在手积压还在涨，当期收入却跌了”。原因在于新签合同、在手待履约（Backlog）与当期完工确认分属三个时间节点；只要大项目施工或现场土建延后几周，收入就会滑进下一季度。前篇[OTIS 利润翻转图](/zh/notebook/customers-products-pricing/#nb-d01-industrial-flow)已经表明九成利润藏在服务里，拆增长时自然要把新设备与服务彻底拆开。[^otis]<sup>，</sup>[^otis-call]

<figure class="flow-figure" id="nb-d02-industrial-bridge">
<div class="ff-head"><p class="ff-title">工业设备与工程服务：新梯订单与收入错位，服务靠存量盘与改造双推（OTIS 2025）</p><span class="ff-sub">同一家工业龙头里，新设备看履约排期，服务看在保台数转化与改造放量</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 OTIS 2025 新设备板块三项指标为何不同步，全年新梯订单持平（0%）、年末新设备在手订单 Backlog 按固定汇率增 2%（实际汇率增 6%），但全年确认的新设备收入反而下降 7%（53.7 亿降至 49.9 亿美元），反映签单、在手积压与当期完工进度错位；右栏展示服务业务有机增长 5%（88.9 亿增至 94.4 亿美元）的双引擎，维护与维修由 72.1 亿增至 75.8 亿美元（有机 +4%，在保梯组合由约 240 万台增至约 250 万台、+4% 主靠新梯转入），现代化改造由 16.8 亿增至 18.6 亿美元（有机 +9%）。">
<svg viewBox="0 0 860 315" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="406" height="287" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="406" height="36" rx="11" fill="#faeae7"/>
  <rect x="14" y="38" width="406" height="12" fill="#faeae7"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">新设备：订单、在手 Backlog 与收入为何背离</text>
  <rect x="30" y="66" width="374" height="56" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="46" y="88" font-size="12" font-weight="700" fill="#22392f">1. 全年新签订单（New Orders）</text>
  <text x="388" y="88" text-anchor="end" font-size="14" font-weight="700" fill="#5e6d65">持平（0%）</text>
  <text x="46" y="109" font-size="11" fill="#5e6d65">衡量新接工程合同量，尚未转化为当期损益</text>
  <rect x="30" y="132" width="374" height="56" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="46" y="154" font-size="12" font-weight="700" fill="#23695a">2. 年末在手待履约（Backlog）</text>
  <text x="388" y="154" text-anchor="end" font-size="13.5" font-weight="700" fill="#23695a">+2% 固定汇率 / +6% 实际</text>
  <text x="46" y="175" font-size="11" fill="#5e6d65">留存到未来 12 个月以上排产安装的待完工存量</text>
  <rect x="30" y="198" width="374" height="56" rx="8" fill="#faeae7" stroke="#e4c2bc"/>
  <text x="46" y="220" font-size="12" font-weight="700" fill="#b5483a">3. 当年确认收入（53.7 → 49.9 亿）</text>
  <text x="388" y="220" text-anchor="end" font-size="14" font-weight="700" fill="#b5483a">有机 −7%</text>
  <text x="46" y="241" font-size="11" fill="#5e6d65">按累计发生成本进度确认；美国 Q4 执行放缓延至次年 Q1</text>
  <text x="30" y="282" font-size="11" fill="#3c4c44">结论：拿新订单增速或全部 RPO（约 191 亿）直接外推下季收入必出错。</text>
  <rect x="436" y="14" width="410" height="287" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="436" y="14" width="410" height="36" rx="11" fill="#eff4f1"/>
  <rect x="436" y="38" width="410" height="12" fill="#eff4f1"/>
  <text x="452" y="37" font-size="13.5" font-weight="700" fill="#22392f">服务业务（88.9 → 94.4 亿，有机 +5%）</text>
  <rect x="452" y="66" width="378" height="82" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="466" y="88" font-size="12.5" font-weight="700" fill="#23695a">在保电梯池：约 240 万 → 约 250 万台（+4%）</text>
  <text x="466" y="110" font-size="11.5" fill="#3c4c44">期初在保 ＋ <tspan font-weight="700" fill="#23695a">新梯交付转入（主增量）</tspan> ＋ 夺回/收购 − 流失</text>
  <text x="466" y="132" font-size="11" fill="#5e6d65">管理层披露 2025 年夺回合同与取消大致抵消，增量主要靠新梯转保。</text>
  <rect x="452" y="162" width="182" height="122" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="466" y="184" font-size="12" font-weight="700" fill="#22392f">维护与维修</text>
  <text x="466" y="208" font-size="16" font-weight="700" fill="#23695a">75.8 亿美元</text>
  <text x="466" y="229" font-size="11.5" fill="#3c4c44">2024: 72.1 亿 · 有机 +4%</text>
  <text x="466" y="250" font-size="11" fill="#5e6d65">维保按期直线确认</text>
  <text x="466" y="268" font-size="11" fill="#5e6d65">单次维修另按次计费</text>
  <rect x="648" y="162" width="182" height="122" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="662" y="184" font-size="12" font-weight="700" fill="#8f6033">现代化改造</text>
  <text x="662" y="208" font-size="16" font-weight="700" fill="#8f6033">18.6 亿美元</text>
  <text x="662" y="229" font-size="11.5" fill="#3c4c44">2024: 16.8 亿 · 有机 +9%</text>
  <text x="662" y="250" font-size="11" fill="#5e6d65">老旧梯升级提速最快</text>
  <text x="662" y="268" font-size="11" fill="#5e6d65">按项目完工进度确认</text>
</svg>
</div>
<figcaption>数据来自 OTIS 2025 Form 10-K、FY2025 业绩公告及 Q4 2025 业绩电话会。维护维修 +4% 与改造 +9% 基数不同，不可直接相加。</figcaption>
</figure>

对照左右两栏能一眼看透工业龙头的韧性来源：新梯受地产竣工周期与美国 Q4 现场执行延迟拖累下滑 7%，但 250 万台在保电梯池像复利蓄水池一样稳步托住维护维修（+4%），叠加存量楼宇进入老龄换代期带动改造提速（+9%），稳住了整体大盘。<span data-text-versions id="nb-d02-industrial-text-1">核对工业服务增长时，不能把总服务收入除以在保台数当成统一年费<span data-text-detail>（OTIS 服务收入既含按合同期直线确认的周期维保，也含单次维修与按完工成本进度确认的现代化改造；年报中的“Organic volume”排除了汇率与近 12 个月并购剥离，但仍混杂价格与工作组合，不等同于纯物理设备台数增长）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d02-healthcare">

## 医药与医疗服务：采用与支付 {#nb-d02-healthcare-story}

医疗行业内部的三类生意，拆解收入增长时要换三套尺子：创新药看**新药临床爬坡能否跑赢老药专利悬崖（LOE）**，手术机器人看**手术量带动的高频耗材复购**，医院连锁则看**诊疗当量与支付方结构**（对应前篇[医疗渠道与支付错配图](/zh/notebook/customers-products-pricing/#nb-d01-healthcare-flow)）。[^jnj]<sup>，</sup>[^isrg]<sup>，</sup>[^hca]

<figure class="flow-figure" id="nb-d02-healthcare-bridge">
<div class="ff-head"><p class="ff-title">医药与医疗服务：新药接力对冲专利悬崖（JNJ）、手术复购（ISRG）与医院量价（HCA）</p><span class="ff-sub">2025 年报实数：三种医疗细分生意的增长方程完全不同</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="三栏对比图：左栏展示 JNJ 2025 创新药新旧切换，重磅药 STELARA 受生物类似药冲击暴跌 41.3%（103.6 亿降至 60.8 亿美元），同时 DARZALEX 增 23.0% 至 143.5 亿、TREMFYA 增 40.5% 至 51.6 亿、CARVYKTI 增 95.9% 至 18.9 亿完成对冲；中栏展示 ISRG 2025 总收入增 20.5% 至 100.6 亿美元，由超 310 万例 da Vinci 手术（+18%）与 Ion 活检（+51%）带动系统 +26%、器械附件 +19%、服务 +20%；右栏展示 HCA 2025 营收由 706.0 亿增至 756.0 亿美元（+7.1%），拆解为折合住院人次 +2.9% 与每折合人次收入 +4.0%，且包含 Medicaid 州补充支付由 55 亿增至 62 亿美元。">
<svg viewBox="0 0 860 325" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="278" height="297" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="278" height="36" rx="11" fill="#faeae7"/>
  <rect x="14" y="38" width="278" height="12" fill="#faeae7"/>
  <text x="28" y="37" font-size="13" font-weight="700" fill="#22392f">创新药：JNJ 专利悬崖 vs 放量</text>
  <rect x="28" y="64" width="250" height="66" rx="8" fill="#faeae7" stroke="#e4c2bc"/>
  <text x="40" y="84" font-size="12" font-weight="700" fill="#b5483a">专利到期拖累：STELARA</text>
  <text x="40" y="104" font-size="14" font-weight="700" fill="#b5483a">103.6 → 60.8 亿（−41.3%）</text>
  <text x="40" y="121" font-size="10.5" fill="#5e6d65">单年蒸发 42.8 亿美元（生物类似药冲击）</text>
  <rect x="28" y="142" width="250" height="114" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="40" y="162" font-size="12" font-weight="700" fill="#23695a">核心新药接力增长</text>
  <text x="40" y="185" font-size="11.5" fill="#3c4c44">· DARZALEX：116.7 → <tspan font-weight="700" fill="#23695a">143.5 亿 (+23%)</tspan></text>
  <text x="40" y="207" font-size="11.5" fill="#3c4c44">· TREMFYA：36.7 → <tspan font-weight="700" fill="#23695a">51.6 亿 (+41%)</tspan></text>
  <text x="40" y="229" font-size="11.5" fill="#3c4c44">· CARVYKTI：9.6 → <tspan font-weight="700" fill="#23695a">18.9 亿 (+96%)</tspan></text>
  <text x="40" y="247" font-size="10.5" fill="#5e6d65">创新药板块合计仍录得 +6.0% 增长</text>
  <text x="28" y="284" font-size="10.5" fill="#5e6d65">看药企不能只看总增速，必拆老药衰减与新药爬坡。</text>
  <rect x="304" y="14" width="266" height="297" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="304" y="14" width="266" height="36" rx="11" fill="#eff4f1"/>
  <rect x="304" y="38" width="266" height="12" fill="#eff4f1"/>
  <text x="318" y="37" font-size="13" font-weight="700" fill="#22392f">器械复购：ISRG 2025（+20.5%）</text>
  <rect x="318" y="64" width="238" height="62" rx="8" fill="#f7faf8" stroke="#c8dad0"/>
  <text x="330" y="84" font-size="11.5" font-weight="700" fill="#23695a">临床活动先行扩张</text>
  <text x="330" y="103" font-size="11.5" fill="#3c4c44">da Vinci 手术 &gt;310 万例（<tspan font-weight="700">+18%</tspan>）</text>
  <text x="330" y="119" font-size="11.5" fill="#3c4c44">Ion 肺部活检操作量（<tspan font-weight="700">+51%</tspan>）</text>
  <rect x="318" y="138" width="238" height="118" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="330" y="158" font-size="11.5" font-weight="700" fill="#22392f">三线收入同步放大（83.5 → 100.6 亿）</text>
  <text x="330" y="182" font-size="11.5" fill="#3c4c44">· 系统装机：19.7 → 24.7 亿（<tspan font-weight="700" fill="#23695a">+26%</tspan>）</text>
  <text x="330" y="204" font-size="11.5" fill="#3c4c44">· 器械附件：50.8 → 60.2 亿（<tspan font-weight="700" fill="#23695a">+19%</tspan>）</text>
  <text x="330" y="226" font-size="11.5" fill="#3c4c44">· 维保服务：13.1 → 15.7 亿（<tspan font-weight="700" fill="#23695a">+20%</tspan>）</text>
  <text x="330" y="246" font-size="10.5" fill="#5e6d65">注：医院先用库再补货，19%−18% 不算提价。</text>
  <text x="318" y="284" font-size="10.5" fill="#5e6d65">收入含双平台合计，不可全除以 da Vinci 手术量。</text>
  <rect x="582" y="14" width="264" height="297" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="582" y="14" width="264" height="36" rx="11" fill="#f6eee4"/>
  <rect x="582" y="38" width="264" height="12" fill="#f6eee4"/>
  <text x="596" y="37" font-size="13" font-weight="700" fill="#22392f">医院服务：HCA 2025（+7.1%）</text>
  <rect x="596" y="64" width="236" height="58" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="608" y="85" font-size="11.5" fill="#5e6d65">集团营收：706.0 → 756.0 亿美元</text>
  <text x="608" y="109" font-size="14" font-weight="700" fill="#8f6033">量 +2.9% × 均价 +4.0%</text>
  <rect x="596" y="134" width="236" height="122" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="608" y="155" font-size="11.5" font-weight="700" fill="#22392f">两项驱动背后的真实构成</text>
  <text x="608" y="177" font-size="11" fill="#3c4c44">· 折合住院人次：399 → 411 万</text>
  <text x="608" y="194" font-size="10.5" fill="#5e6d65">  （按毛收入比例折入非住院门诊）</text>
  <text x="608" y="215" font-size="11" fill="#3c4c44">· 单次均价 +4.0%：含病例复杂度、</text>
  <text x="608" y="232" font-size="11" fill="#3c4c44">  商保占比及 Medicaid 州补充支付</text>
  <text x="608" y="248" font-size="11" font-weight="700" fill="#8f6033">  （55 → 62 亿美元）</text>
  <text x="596" y="284" font-size="10.5" fill="#5e6d65">1.029×1.04−1=7.02%，与 7.1% 差来自取整。</text>
</svg>
</div>
<figcaption>数据来自 JNJ、ISRG 与 HCA 2025 Form 10-K。ISRG 器械附件与系统收入涵盖 da Vinci 与 Ion 两套平台。</figcaption>
</figure>

<span data-text-versions id="nb-d02-healthcare-text-1">拆这三张账单时，每一类都有一个隐蔽的口径边界<span data-text-detail>（JNJ 创新药增速背后是 STELARA 失专利大跌 41.3% 与 DARZALEX 等新药高增的对冲；ISRG 医院会先消耗已有器械库存再按寿命补货，且器械收入覆盖 da Vinci 与 Ion 双平台，因此不能把器械增速 19% 减 da Vinci 手术增速 18% 读成 1% 提价；HCA 的折合住院人次按住院与门诊毛收入比例折算，不是去重患者人数，其同机构增速 6.6% 也与集团 7.1% 不同）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

对医院而言，单次收入上升 4.0% 并不等于医院普涨了诊费——高复杂手术占比提升、商业保险患者比例走高，以及 Medicaid 州定向补充支付从 55 亿增至 62 亿美元，都会一起抬高单次均价。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d02-finance">

## 银行、支付与保险：规模与收费 {#nb-d02-finance-story}

比较金融业务的收入增长，第一步是沿着前篇[资金规模与收入对照图](/zh/notebook/customers-products-pricing/#nb-d01-finance-flow)的边界，把**表内本金／支付流水／签单保费**同**损益表确认收入**的转换时间差对齐。2025 年三家龙头的真实转换桥摆在一起，就能看出为什么不能拿规模增速直接预测当季收入。[^jpm]<sup>，</sup>[^visa]<sup>，</sup>[^chubb]

<figure class="flow-figure" id="nb-d02-fin-revenue">
<div class="ff-head"><p class="ff-title">三类金融业务：2025 年“规模基数”如何转换成“损益表收入”</p><span class="ff-sub">JPM、V 与 CB 2025 年报实数：先对齐期间与扣减项，再谈收入增速</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="三行金融收入转换路径图：第一行银行 JPM 2025，利息收入同比降 5.9 亿（1,939 降至 1,933 亿美元），但利息支出大降 34.5 亿（1,014 降至 979 亿美元），两相抵消后净利息收入反增 28.6 亿至 954.4 亿美元（+3.1%）；第二行支付网络 Visa FY2025，名义支付额 12.99 增至 13.89 万亿美元（+7%，截至 6 月末，滞后一季驱动服务费 175.4 亿 +9%），处理笔数 2,338 增至 2,575 亿笔（+10%，同期驱动处理费 199.9 亿 +13%），加跨境等 182.2 亿并扣除客户激励 157.5 亿（+14%）后，净收入 359.3 增至 400.0 亿美元（+11%）；第三行财险 Chubb 2025，财险净签单保费 451.4 增至 475.6 亿美元（+5.4%），随保障期间分摊后财险净已赚保费增 5.1%，例如 10 月生效年单在当年仅确认 3/12。">
<svg viewBox="0 0 860 345" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d02-fin-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
    <marker id="d02-fin-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
  </defs>
  <rect x="14" y="14" width="832" height="98" rx="10" fill="#ffffff" stroke="#c8dad0" stroke-width="1.3"/>
  <rect x="14" y="14" width="112" height="98" rx="10" fill="#eff4f1"/>
  <rect x="114" y="14" width="12" height="98" fill="#eff4f1"/>
  <text x="70" y="54" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">银行</text>
  <text x="70" y="76" text-anchor="middle" font-size="12" font-weight="600" fill="#22392f">JPM 2025</text>
  <rect x="142" y="25" width="246" height="76" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="156" y="46" font-size="12" font-weight="700" fill="#22392f">利息收入微降 −5.9 亿</text>
  <text x="156" y="66" font-size="11.5" fill="#3c4c44">1,939.3 → 1,933.4 亿美元</text>
  <text x="156" y="87" font-size="11" font-weight="700" fill="#23695a">但利息支出大降 −34.5 亿（1,014→979）</text>
  <line x1="388" y1="63" x2="432" y2="63" stroke="#23695a" stroke-width="2" marker-end="url(#d02-fin-sage)"/>
  <text x="410" y="54" text-anchor="middle" font-size="10.5" font-weight="600" fill="#23695a">息差净额</text>
  <rect x="438" y="25" width="394" height="76" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="454" y="48" font-size="12.5" font-weight="700" fill="#23695a">净利息收入（NII）：925.8 → 954.4 亿美元（+3.1%）</text>
  <text x="454" y="69" font-size="11.5" fill="#3c4c44">负债端降息快于资产端，带动净额反增 +28.6 亿美元；</text>
  <text x="454" y="88" font-size="11" fill="#5e6d65">另有非息收入 870 亿（+2%），单季计算余额 × 年化利率须折算期间。</text>
  <rect x="14" y="124" width="832" height="104" rx="10" fill="#ffffff" stroke="#ead9c4" stroke-width="1.3"/>
  <rect x="14" y="124" width="112" height="104" rx="10" fill="#f6eee4"/>
  <rect x="114" y="124" width="12" height="104" fill="#f6eee4"/>
  <text x="70" y="166" text-anchor="middle" font-size="13.5" font-weight="700" fill="#8f6033">支付网络</text>
  <text x="70" y="188" text-anchor="middle" font-size="12" font-weight="600" fill="#22392f">V FY2025</text>
  <rect x="142" y="135" width="246" height="82" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="156" y="156" font-size="11.5" font-weight="700" fill="#22392f">支付额：12.99→13.89 万亿 (+7%)</text>
  <text x="156" y="175" font-size="10.5" fill="#8f6033">（截至 6 月末 · 滞后一季计服务费）</text>
  <text x="156" y="196" font-size="11.5" font-weight="700" fill="#22392f">处理笔数：2,338→2,575 亿 (+10%)</text>
  <text x="156" y="211" font-size="10.5" fill="#5e6d65">（截至 9 月末 · 同期计处理费）</text>
  <line x1="388" y1="176" x2="432" y2="176" stroke="#a8743f" stroke-width="2" marker-end="url(#d02-fin-amber)"/>
  <text x="410" y="166" text-anchor="middle" font-size="10.5" font-weight="600" fill="#8f6033">扣激励</text>
  <rect x="438" y="135" width="394" height="82" rx="8" fill="#fcf8f3" stroke="#ead9c4"/>
  <text x="454" y="157" font-size="12.5" font-weight="700" fill="#8f6033">净收入：359.3 → 400.0 亿美元（+11%）</text>
  <text x="454" y="178" font-size="11.5" fill="#3c4c44">服务费 175.4 亿 (+9%) ＋ 处理费 199.9 亿 (+13%) ＋ 跨境等 182.2 亿</text>
  <text x="454" y="199" font-size="11.5" font-weight="700" fill="#b5483a">减：客户激励 137.6 → 157.5 亿美元（+14%，增速高于收入）</text>
  <rect x="14" y="240" width="832" height="92" rx="10" fill="#ffffff" stroke="#c8dad0" stroke-width="1.3"/>
  <rect x="14" y="240" width="112" height="92" rx="10" fill="#eff4f1"/>
  <rect x="114" y="240" width="12" height="92" fill="#eff4f1"/>
  <text x="70" y="278" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">财产保险</text>
  <text x="70" y="300" text-anchor="middle" font-size="12" font-weight="600" fill="#22392f">CB 2025</text>
  <rect x="142" y="251" width="246" height="70" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="156" y="273" font-size="12" font-weight="700" fill="#22392f">财险净签单保费（NPW）</text>
  <text x="156" y="294" font-size="12.5" font-weight="700" fill="#23695a">451.4 → 475.6 亿（+5.4%）</text>
  <text x="156" y="312" font-size="10.5" fill="#5e6d65">已扣除分出再保险；含新单、续保与涨价</text>
  <line x1="388" y1="286" x2="432" y2="286" stroke="#23695a" stroke-width="2" marker-end="url(#d02-fin-sage)"/>
  <text x="410" y="276" text-anchor="middle" font-size="10.5" font-weight="600" fill="#23695a">按期分摊</text>
  <rect x="438" y="251" width="394" height="70" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="454" y="273" font-size="12.5" font-weight="700" fill="#23695a">财险净已赚保费（NPE）：全年 +5.1%</text>
  <text x="454" y="294" font-size="11.5" fill="#3c4c44">示意：10 月生效 1,200 美元年单，当年仅确认 300 美元（3/12）</text>
  <text x="454" y="311" font-size="11" fill="#5e6d65">余下 900 美元留作次年未赚保费，涨价滞后四个季度入账。</text>
</svg>
</div>
<figcaption>数据来自 JPM 2025 年报、V FY2025 Form 10-K、CB 2025 年报及 2026-02-03 全年业绩公告。三类业务各守各的期间与扣减口径。</figcaption>
</figure>

每一行里都藏着一个反直觉机制：银行在利率下行阶段，即便利息收入微降，只要存款与批发融资成本降得更快，净利息收入照样增长；支付网络的服务费按**上一季度**名义支付额计费，且大客户谈判拉高了客户激励（+14% 跑赢净收入 +11%），研究费率弹性时必须盯着激励占毛收入的比例；财险则因签单保费要沿 12 个月保障期逐月赚取，涨价周期里已赚保费往往滞后于签单增速。想进一步深挖保险浮存金、准备金释放与综合成本率拆解，可直接进入专题[《保险业：浮存金、综合成本率与准备金》](/zh/notebook/industry-insurance-float/#nb-n08-combined-ratio)。

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d02-energy">

## 能源与原材料：销量、售价与服务 {#nb-d02-energy-story}

能源板块的收入增长常出现两极画面：上游资源商辛辛苦苦把产量拉高，只要油价掉头向下，报表收入照样缩水；中游管网即便客户输送量翻倍，账单也未必跟着翻倍。结合前篇[三条能源盈利曲线](/zh/notebook/customers-products-pricing/#nb-d01-energy-flow)，把 XOM 2025 年报与 KMI 旗下管输协议并列，原因一目了然。[^xom]<sup>，</sup>[^xom-10k]<sup>，</sup>[^kmi]<sup>，</sup>[^wic]

<figure class="flow-figure" id="nb-d02-energy-bridge">
<div class="ff-head"><p class="ff-title">能源与原材料：产量大增却收入下滑（XOM）vs 用量翻倍但预留费不动（KMI WIC）</p><span class="ff-sub">2025 年实数与监管费率对照：商品价格弹性与管输固定费率的本质差异</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="左右双栏图：左栏展示 XOM 2025 合并子公司量价背离，原油日产量由 1,858 升至 1,992 千桶每日（+7.2%，含 Pioneer 全年并表影响），但自产原油销售均价由 76.57 跌至 65.64 美元每桶（−14.3%），合并销售及其他营业收入由 3,392 亿降至 3,239 亿美元，同时合并报表消除了 1,210 亿美元分部间内部转移；右栏展示 KMI 旗下 WIC 与 Black Hills 协议在同一 30 日服务月、相同 28,150 Dth/d 预订容量下的两种使用情景，日交付 10,000 Dth 时按月预留费 25,687 美元加追加费 33,750 美元小计 59,437 美元，日交付翻倍至 20,000 Dth 时预留费仍固定为 25,687 美元，追加费翻倍至 67,500 美元，两项小计 93,187 美元（仅增 56.8%）。">
<svg viewBox="0 0 860 315" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="406" height="287" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="14" y="14" width="406" height="36" rx="11" fill="#faeae7"/>
  <rect x="14" y="38" width="406" height="12" fill="#faeae7"/>
  <text x="30" y="37" font-size="13.5" font-weight="700" fill="#22392f">XOM 2025：产量上升盖不住油价走弱</text>
  <rect x="30" y="66" width="180" height="82" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="44" y="88" font-size="11.5" fill="#5e6d65">原油日产量（千桶/日）</text>
  <text x="44" y="114" font-size="17" font-weight="700" fill="#23695a">1,858 → 1,992</text>
  <text x="44" y="136" font-size="12" font-weight="700" fill="#23695a">+7.2%（含 Pioneer）</text>
  <rect x="224" y="66" width="180" height="82" rx="8" fill="#faeae7" stroke="#e4c2bc"/>
  <text x="238" y="88" font-size="11.5" fill="#5e6d65">自产原油销售均价</text>
  <text x="238" y="114" font-size="16" font-weight="700" fill="#b5483a">76.57 → 65.64</text>
  <text x="238" y="136" font-size="12" font-weight="700" fill="#b5483a">−14.3%（美元/桶）</text>
  <rect x="30" y="164" width="374" height="120" rx="8" fill="#fbfbf6" stroke="#dfe5dc"/>
  <text x="44" y="186" font-size="12" font-weight="700" fill="#22392f">合并营收结果与内部转移消除</text>
  <text x="44" y="210" font-size="12" fill="#3c4c44">· 合并销售及营业收入：3,392 → <tspan font-weight="700" fill="#b5483a">3,239 亿美元</tspan></text>
  <text x="44" y="232" font-size="12" fill="#3c4c44">· 消除分部间内部转移：<tspan font-weight="700" fill="#22392f">−1,210 亿美元</tspan></text>
  <text x="44" y="254" font-size="11" fill="#5e6d65">注：Pioneer 于 2024-05 并表，2025 为全年口径；</text>
  <text x="44" y="271" font-size="11" fill="#5e6d65">不能把产量乘均价构造收入，且内部供油不增加外部收入。</text>
  <rect x="436" y="14" width="410" height="287" rx="11" fill="#ffffff" stroke="#d5ddd6" stroke-width="1.3"/>
  <rect x="436" y="14" width="410" height="36" rx="11" fill="#eff4f1"/>
  <rect x="436" y="38" width="410" height="12" fill="#eff4f1"/>
  <text x="452" y="37" font-size="13.5" font-weight="700" fill="#22392f">KMI WIC 协议：同一月、同容量下用量翻倍对比</text>
  <text x="452" y="70" font-size="11.5" fill="#5e6d65">固定条件：预订 28,150 Dth/d 容量 · 完整 30 日 · 指定接收交付点</text>
  <text x="452" y="102" font-size="12" font-weight="700" fill="#22392f">情景 A：日输 10,000 Dth（月输 30 万 Dth）</text>
  <rect x="452" y="112" width="102" height="26" rx="4" fill="#23695a"/>
  <rect x="556" y="112" width="134" height="26" rx="4" fill="#a8743f"/>
  <text x="503" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">预留 2.57 万</text>
  <text x="623" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">追加 3.38 万</text>
  <text x="700" y="129" font-size="12" font-weight="700" fill="#22392f">5.94 万美元</text>
  <text x="452" y="168" font-size="12" font-weight="700" fill="#22392f">情景 B：日输 20,000 Dth（月输 60 万 · 翻倍）</text>
  <rect x="452" y="178" width="102" height="26" rx="4" fill="#23695a"/>
  <rect x="556" y="178" width="210" height="26" rx="4" fill="#a8743f"/>
  <text x="503" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">预留 2.57 万</text>
  <text x="661" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">追加 6.75 万（翻倍）</text>
  <text x="774" y="195" font-size="12" font-weight="700" fill="#23695a">9.32 万美元</text>
  <rect x="452" y="222" width="378" height="62" rx="8" fill="#f3f8f4" stroke="#b9d0c2"/>
  <text x="466" y="244" font-size="12" font-weight="700" fill="#23695a">运输量翻倍（+100%），两项合计仅增 +56.8%</text>
  <text x="466" y="264" font-size="11" fill="#3c4c44">绿条预留费（0.9125 美元 × 28,150）旱涝保收，压弹性也托底；</text>
  <text x="466" y="279" font-size="10.5" fill="#5e6d65">注：两项为监管费率下的教学情景对照，不含商品费与燃料损耗。</text>
</svg>
</div>
<figcaption>数据来自 XOM 2025 Form 10-K（第 12–14 页、Note 3 与 Note 20）及 WIC—Black Hills 2025-09-30 监管费率申报。</figcaption>
</figure>

读一体化油企如 XOM 时，还要提防两道口径关：一是**并购并表**（Pioneer 于 2024 年 5 月才并入，2025 年是首个完整年度，产量 +7.2% 并非纯有机增长）；二是**内部转移消除**（2025 年集团上游供货给下游炼厂消除了 1,210 亿美元分部间收入，不能把各分部收入简单相加）。换到 KMI 这类管输合同，固定预留费垫起了稳健底盘，判断增长时应重点跟踪新管道投产、预订容量扩展与长约到期续签费率，而不是拿国际油价涨跌幅去套。

</section>

## 增长的期间与比较口径 {#nb-d02-comparison}

不论落到哪个行业，比较增速前都要先把**期间、合并范围与币种**对齐。季节性强的生意要看同比而非环比；刚做完收购或剥离资产的公司，报表增速会被合并范围扭曲；跨国企业还要剥离汇率换算波动。

回到开篇 KO 2025 年第二季度的案例：报表净营收仅增 1%，剔除 −3% 汇率拖累及结构变动后的**有机收入**实为 +5%，其中价格与组合（`price/mix`）贡献 +6%，浓缩液与标准箱销量双双小幅回落 −1%。[^ko-growth]

<figure><img src="/notebook/revenue-growth/ko-growth.svg?v=20261126" alt="KO 2025年第二季度报告净营收增长1%、有机收入增长5%、price/mix增长6%，浓缩液销量和标准箱销量均下降1%；不同指标分别比较。" loading="lazy"><figcaption>KO 2025 年第二季度。报表收入、有机收入及量价指标按各自定义列示；横向比较方向与幅度。</figcaption></figure>

<span data-text-versions id="nb-d02-comparison-text-1">这一季的增长主要由价格与组合推高，汇率换算拉低了报表表象<span data-text-detail>（公司将汇率影响列为 −3%；price/mix 包含提价、包装、渠道与地区结构，不可全部归为提价；各项披露值经过取整，未必严格相加）</span>。判断这类有机增长能不能延续，仍须回查终端动销与补货节奏，不能直接线性外推。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除了同比与汇率，**签约、消耗与确认收入的时间错位**同样关键。拿 SNOW 的容量合同来说，客户签字承诺的多年采购额先进入剩余履约义务（RPO），后续随实际消耗才逐季确认成产品收入。[^snow]

<figure class="flow-figure" id="nb-d02-rpo-flow">
<div class="ff-head"><p class="ff-title">合同签约、实际消耗与报表收入如何错开（SNOW Q2 FY2026 实例）</p><span class="ff-sub">RPO 反映账外待履约池，实际落进哪一季由客户消耗速度决定</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="SNOW 容量合同三阶段转化图：第一阶段客户签署多年期容量合同，尚未确认金额进入剩余履约义务 RPO 池（截至 2025-07-31 达 69.3 亿美元，同比 +33%）；第二阶段客户在平台上跑计算查询与存储数据，消耗节奏随工作负载和优化起伏；第三阶段随实际资源消耗逐季确认产品收入（Q2 FY2026 确认 1,090.5 M 美元，同比 +32%）。">
<svg viewBox="0 0 860 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d02-rpo-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
    <marker id="d02-rpo-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
  </defs>
  <rect x="14" y="18" width="246" height="138" rx="10" fill="#ffffff" stroke="#b9d0c2" stroke-width="1.3"/>
  <rect x="14" y="18" width="246" height="32" rx="10" fill="#eff4f1"/>
  <rect x="14" y="38" width="246" height="12" fill="#eff4f1"/>
  <text x="137" y="39" text-anchor="middle" font-size="12.5" font-weight="700" fill="#23695a">1. 签下容量合同（RPO 池）</text>
  <text x="137" y="76" text-anchor="middle" font-size="20" font-weight="700" fill="#22392f">69.3 亿美元</text>
  <text x="137" y="98" text-anchor="middle" font-size="11.5" font-weight="700" fill="#23695a">同比 +33%（上年 52.3 亿）</text>
  <text x="137" y="122" text-anchor="middle" font-size="11" fill="#5e6d65">含递延收入＋未开票不可取消合同</text>
  <text x="137" y="140" text-anchor="middle" font-size="10.5" fill="#7a8780">（签约当刻不计入损益表收入）</text>
  <line x1="260" y1="87" x2="300" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d02-rpo-sage)"/>
  <text x="280" y="77" text-anchor="middle" font-size="10.5" fill="#23695a">随使用</text>
  <rect x="306" y="18" width="248" height="138" rx="10" fill="#ffffff" stroke="#e4d2bc" stroke-width="1.3"/>
  <rect x="306" y="18" width="248" height="32" rx="10" fill="#f6eee4"/>
  <rect x="306" y="38" width="248" height="12" fill="#f6eee4"/>
  <text x="430" y="39" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8f6033">2. 平台实际消耗（节奏开关）</text>
  <text x="430" y="74" text-anchor="middle" font-size="12.5" font-weight="700" fill="#22392f">查询计算 ＋ 压缩存储</text>
  <text x="430" y="98" text-anchor="middle" font-size="11.5" fill="#3c4c44">· 新增任务推快消耗</text>
  <text x="430" y="118" text-anchor="middle" font-size="11.5" fill="#3c4c44">· 查询优化放慢消耗</text>
  <text x="430" y="140" text-anchor="middle" font-size="10.5" fill="#8f6033">（超额消耗或无承诺按需另行发生）</text>
  <line x1="554" y1="87" x2="594" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d02-rpo-amber)"/>
  <text x="574" y="77" text-anchor="middle" font-size="10.5" fill="#8f6033">当季确认</text>
  <rect x="600" y="18" width="246" height="138" rx="10" fill="#ffffff" stroke="#b9d0c2" stroke-width="1.3"/>
  <rect x="600" y="18" width="246" height="32" rx="10" fill="#23695a"/>
  <rect x="600" y="38" width="246" height="12" fill="#23695a"/>
  <text x="723" y="39" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">3. 当季确认产品收入</text>
  <text x="723" y="76" text-anchor="middle" font-size="20" font-weight="700" fill="#23695a">1,090.5 M 美元</text>
  <text x="723" y="98" text-anchor="middle" font-size="11.5" font-weight="700" fill="#23695a">同比 +32%（占总收入 95%）</text>
  <text x="723" y="122" text-anchor="middle" font-size="11" fill="#5e6d65">大部分来自此前已签的存量合同</text>
  <text x="723" y="140" text-anchor="middle" font-size="10.5" fill="#7a8780">（与当季现金回款分属不同日期）</text>
</svg>
</div>
<figcaption>数据来自 SNOW Q2 FY2026 Form 10-Q（截至 2025-07-31）。RPO 含尚未开票的未来履约义务，不能等同于已到账现金。</figcaption>
</figure>

<span data-text-versions id="nb-d02-timing-text-1">看 RPO 高增时，必须同时跟踪客户消耗速度，辨认积压合同是在加速转化还是停留在纸面承诺<span data-text-detail>（RPO 包含递延收入和未来才开票的不可取消合同额，不能等同于已收现；无最低承诺的按需用量以及超出已有承诺的未来扩用，也未必反映在当前 RPO 中）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 增长预期与事件报价 {#nb-d02-expectations}

拆清公司真实的增长驱动后，下一步是把自己的判断拿去跟市场预期对表。公司指引与券商一致预期通常给一个宽泛区间；Prediction Market（预测市场）则直接把问题钉成一道是非题——单季某板块收入是否严格超过门槛——到期判 YES 付 1 美元、否则付 0，事前成交价于是标出了市场的过线把握。[^pm]

以 Marvell（MRVL）FY2027 第一季度（截至 2026 年 5 月 2 日）数据中心收入为例。Polymarket 上线了“严格超过 18.5 亿美元”与“严格超过 19 亿美元”两道门槛合约，对照上年同季基期 14.406 亿美元，分别要求同比增速超过约 28.4% 与 31.9%。[^pm]<sup>，</sup>[^mrvl-base]

<figure class="flow-figure g4-pm-thresholds" id="nb-d02-pm-thresholds">
<div class="ff-head"><p class="ff-title">MRVL FY2027 Q1 数据中心收入门槛与事前过线把握</p><span class="ff-sub">2026-05-26 财报前一日同一时刻 YES 历史价格</span></div>
<div class="business-exchange" aria-label="MRVL FY2027 第一季度数据中心收入两项 Polymarket 门槛合约对照：上年同季基期收入为 14.406 亿美元。门槛一为严格超过 18.5 亿美元，对应同比增长边界约 28.4%，5 月 26 日 YES 历史价格为 0.395 美元（对应约 39.5% 过线把握）；门槛二为严格超过 19 亿美元，对应同比增长边界约 31.9%，5 月 26 日 YES 历史价格为 0.185 美元（对应约 18.5% 过线把握）。两张合约为可同时成立的门槛事件，非互斥区间。">
<p class="g4-pm-section">收入门槛相对上年同季基期的位置（亿美元）</p>
<div class="g4-pm-ruler">
<div class="g4-pm-rail">
<i class="g4-pm-span" style="--from:7.38%;--w:74.44%;--c:#b7d2c5"></i>
<i class="g4-pm-span" style="--from:81.82%;--w:9.09%;--c:#e5c7a7"></i>
</div>
<span class="g4-pm-tick" style="--x:7.38%;--c:#7a8780"></span>
<span class="g4-pm-lab g4-pm-lab-base" style="--x:7.38%">基期 14.406 亿</span>
<span class="g4-pm-tick" style="--x:81.82%;--c:var(--ff-share)"></span>
<span class="g4-pm-lab g4-pm-lab-top" style="--x:81.82%">门槛一 <strong>&gt; 18.5 亿</strong>（+28.4%）</span>
<span class="g4-pm-tick" style="--x:90.91%;--c:var(--ff-cash)"></span>
<span class="g4-pm-lab g4-pm-lab-bot" style="--x:90.91%">门槛二 <strong>&gt; 19.0 亿</strong>（+31.9%）</span>
</div>
<p class="g4-pm-section">5 月 26 日 YES 历史价格对应的过线把握（0%—100%）</p>
<div class="g4-pm-bars">
<div class="g4-pm-name"><strong>严格超过 18.5 亿美元</strong><small>对应同比边界约 +28.4%</small></div>
<div class="g4-pm-track"><i style="--w:39.5%;--c:var(--ff-share)"></i></div>
<div class="g4-pm-val"><strong>0.395 美元</strong>（39.5%）</div>
<div class="g4-pm-name"><strong>严格超过 19 亿美元</strong><small>对应同比边界约 +31.9%</small></div>
<div class="g4-pm-track"><i style="--w:18.5%;--c:#619483"></i></div>
<div class="g4-pm-val"><strong>0.185 美元</strong>（18.5%）</div>
<div class="g4-pm-axis"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
</div>
</div>
<figcaption>门槛从 18.5 亿抬高 0.5 亿到 19 亿，YES 历史价格便从 0.395 美元落到 0.185 美元；两项事件可同时成立，并非互斥区间。</figcaption>
</figure>

<span data-text-versions id="nb-d02-pm-text-1">这两组价格取自财报前一日同一时刻的历史成交序列，直观标出了门槛每抬高 0.5 亿美元时市场过线把握的衰减<span data-text-detail>（观察时点为 2026-05-26 16:00:04 UTC 官方历史序列，未还原当时盘口买卖价差与深度，不视作可即时成交价；两道门槛可同时成立，并非互斥区间；结算按官方原始金额判定）</span>。[^pm-history]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure><img src="/notebook/revenue-growth/mrvl-expectations.svg?v=20261126" alt="2026年3月5日MRVL给出公司展望，5月26日记录数据中心收入门槛的预测市场事前价格，5月27日报告实际收入18.327亿美元，两项门槛均未超过。" loading="lazy"><figcaption>先留档事前指引与事件报价，再与财报公布后的同口径实数对照。</figcaption></figure>

5 月 27 日财报落地，MRVL 数据中心收入录得 18.327 亿美元（同比 +27.2%），距 18.5 亿仅差 0.173 亿美元，两张合约双双结为 NO。[^mrvl]27% 以上的增速本身并不慢，但在交易层面依然落在事前门槛之下。回看 3 月 5 日公司展望时，更要守住口径边界：管理层提到的约 40% 增速针对的是 FY2027 **全年**数据中心收入，24 亿美元（±5%）则是下一季**全公司**指引，哪一个都不能直接套用单季数据中心门槛。<span data-text-versions id="nb-d02-pm-text-2">实操复核还要把并购并表范围拆清楚<span data-text-detail>（本期指引与实际收入均已自收购日起并入 Celestial AI 与 XConn 两笔交易，此处同比为报告口径，尚未剥离并购贡献）</span>。[^mrvl-outlook]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 股价对应的增长要求 {#nb-d02-price-in}

事件合约只锁住一个季度；买股票时，更实用的做法是把眼前的股价倒推回收入要求，看看市场究竟在押注一份怎样的经营成绩单。设股价为 \(P\)、目标年度净利率为 \(m\)、股数为 \(N\)、市场愿意给出的前瞻市盈率为 \(M\)，由 \(\mathrm{EPS}=mR/N\) 可直接反推出所需每股收益与所需收入：

\[
\mathrm{EPS}_{\mathrm{要求}}=\frac{P}{M},\qquad
R_{\mathrm{要求}}=\frac{PN}{Mm}.
\]

这里换回 KO 全年数据演示。按公司调整后的可比口径，2025 全年净营收 480.62 亿美元、归属股东净利润 129.58 亿美元（净利率约 27.0%）、稀释加权平均股数 43.13 亿股。[^ko-base]借用 DBS 研报采用的 26 倍前瞻 PE 并将其明确限定在 2026 全年可比盈利上，就能沿四步反推出所需的收入底线：[^dbs]

<figure class="flow-figure step-chain sc-4" id="nb-d02-reverse-chain">
<div class="ff-head"><p class="ff-title">从 KO 的股价反推 2026 年的收入要求</p><span class="ff-sub">可比口径，美元</span></div>
<div class="sc-track">
<div class="sc-node"><strong>78.76</strong><small>股价，2026 年 4 月 30 日收盘</small></div>
<div class="sc-link business-exchange" aria-label="股价 78.76 美元除以借用自 DBS 报告的 26 倍前瞻 PE，得到 2026 年所需的每股收益约 3.03 美元。"><span>÷ 26 倍 PE</span><span>借用 DBS 的倍数</span></div>
<div class="sc-node"><strong>3.03</strong><small>2026 年所需每股收益</small></div>
<div class="sc-link business-exchange" aria-label="每股收益乘以 43.13 亿股稀释加权平均股数，假设股数保持 2025 年水平，所需归属股东净利润约 130.7 亿美元。"><span>× 43.13 亿股</span><span>假设保持 2025 年</span></div>
<div class="sc-node"><strong>130.7 亿</strong><small>所需净利润</small></div>
<div class="sc-link business-exchange" aria-label="所需净利润除以约 27.0% 的净利率，假设保持 2025 年的比率，所需可比净营收约 484.6 亿美元。"><span>÷ 27.0%</span><span>净利率，假设保持</span></div>
<div class="sc-node sc-focus"><strong>484.6 亿</strong><small>所需净营收</small></div>
</div>
<p class="ff-aside business-exchange" aria-label="2025 年同口径净营收为 480.62 亿美元，所需净营收约 484.6 亿美元，需要增长约 0.8%。"><strong>与 2025 年的 480.62 亿美元相比</strong>：需要增长约 0.8%。</p>
<figcaption>净利率按 2025 年可比口径计算：129.58 ÷ 480.62 ≈ 27.0%。股价为实际收盘价，PE、股数与净利率均为本篇设定的条件。</figcaption>
</figure>

<span data-text-versions id="nb-d02-price-text-1">只需改变 PE、净利率或股数中的任意一项条件，反推出来的收入增长要求就会大幅移动<span data-text-detail>（DBS 报告未在该处完整界定其 forward PE 的盈利期间，本篇限定为 2026 全年可比口径，不用于复刻报告目标价；计算采用 129.58 ÷ 480.62 的精确净利率，股数维持 2025 年稀释加权平均股数）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>在下方推演器里拖动滑块就能切身体会：单凭一个 78.76 美元的股价，解不出增长率、利润率与估值倍数三个未知数。

<div data-experiment-slot="nb-d02-price-lab"></div>

固定净利率与股数、只把 PE 从 26 倍压到 22 倍，KO 需要增长约 19.2% 才能托住当前股价；若市场给到 30 倍，哪怕收入回落约 12.6% 也能站稳。反推的价值不在于猜出唯一市场共识，而在于把不同估值假设对应的经营成绩单摊到桌面上，交给前面拆过的销量、净价、渠道与留存证据逐条检验。

## 从增长到盈利 {#nb-d02-next}

MRVL 提醒我们高增长不等于跑赢预期门槛，KO 反推又把增长要求绑到了净利率与股数之上。要检验账面确认的收入最终有没有变成利润与到账现金，必须打通公司的整套会计账本。下一篇[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)就沿同一段经营过程贯通利润表、资产负债表与现金流量表，补齐分析营运资本、资本开支与成本结构的底座。

<link rel="stylesheet" href="/notebook/business-branches.css?v=20261128">
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261128">

[^ko-growth]: [The Coca-Cola Company — Second Quarter 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf)。PDF p1、p3、p5、p8、p15、p25；全球报表 +1%、有机 +5%（price/mix +6%、浓缩液 −1%、标准箱 −1%），亚太标准箱 −3% 与浓缩液 −5%。
[^nke]: [NIKE FY2025 Form 10-K — Consolidated Operating Results](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm)。财年截至 2025-05-31；批发 277.6→258.8 亿（−7%／剔汇率 −6%）、NIKE Direct 215.2→187.8 亿（−13%／剔汇率 −12%，数字 −20%）、鞋类销量 −8% 及均价拖累约 3 pct。
[^wmt]: [Walmart FY2025 Form 10-K — Walmart U.S. Results and Membership](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm)。财年截至 2025-01-31；Walmart U.S. 净销售 4,418→4,624 亿（+4.7%）、可比销售 +4.8% 与全集团纯会员费 31→38 亿美元。
[^snow]: [Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf)。PDF p16–17、p45、p47、p53；产品收入 829.3→1,090.5 M 美元（+32%）、NRR 125%、RPO 52.3→69.3 亿（+33%）及年消超 100 万美元大客户 504→654 家。
[^msft-fy26]: [Microsoft FY2026 Form 10-K — Segment Results](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)。财年截至 2026-06-30；M365 商业云 +17%（席位 +6% 及 E5/Copilot 推升单价）、Azure 及其他云 +41%。
[^alphabet]: [Alphabet 2025 Form 10-K — Revenues and Monetization Metrics](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。年度截至 2025-12-31；Search & other 1,980.8→2,245.3 亿（+13.4%，付费点击 +6%、CPC +7%）、YouTube +11.7%、Network −1.9%。
[^amzn-fy25]: [Amazon.com, Inc. FY2025 Form 10-K — Note 10 Net Sales by Group](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm)。年度截至 2025-12-31；3P 第三方卖家服务 1,561→1,722 亿美元（+10.3%）、广告服务 686 亿（+22.1%）。
[^bkng]: [Booking Holdings 2025 Form 10-K — Gross Bookings, Revenues and Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm)。年度截至 2025-12-31；总预订 +12.4%、收入 +13.4%、营销费用 +12.5%（占收比 30.4%）。
[^asml-20f]: [ASML Holding N.V. FY2025 Form 20-F & Annual Report Note 2](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm)。年度截至 2025-12-31；净系统销售 217.7→244.7 亿欧元（+12.4%）、表内系统数 583→535 台（NXE 42→44 台、EXE 2→4 台、KrF 152→78 台）及装机升级服务 64.9→81.9 亿欧元（+26.2%）。
[^nvda]: [NVIDIA FY2026 Form 10-K — Revenue by End Market](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)。财年截至 2026-01-25；数据中心 1,152→1,937 亿美元（+68%，其中 Compute +59% 至 1,624 亿、Networking +142% 至 314 亿）。
[^mrvl]: [Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm)。截至 2026-05-02；总收入 24.18 亿（+28%），数据中心 18.327 亿（占 76%，同比 +27.2%），含 Celestial AI 与 XConn 收购。
[^otis]: [Otis Worldwide 2025 Form 10-K — Segment Results & Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm)。年度截至 2025-12-31；新设备 53.7→49.9 亿（有机 −7%）、维护维修 72.1→75.8 亿（有机 +4%）、改造 16.8→18.6 亿（有机 +9%）及在保梯约 250 万台。
[^otis-call]: [Otis Reports FY2025 Results & Q4 2025 Earnings Call Transcript](https://s203.q4cdn.com/227649559/files/doc_financials/2025/q4/4Q25-Otis-Worldwide-Corp-Earnings-Call-Transcript.pdf)。2026-01-28；全年新设备订单持平、年末 Backlog 固定汇率 +2%（实际 +6%）、服务组合 +4% 主靠新梯转入及美国 Q4 执行延至 Q1 说明。
[^jnj]: [Johnson & Johnson 2025 Form 10-K — Innovative Medicine Product Sales](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm)。财年截至 2025-12-28；STELARA 103.6→60.8 亿（−41.3%）、DARZALEX 116.7→143.5 亿（+23.0%）、TREMFYA 36.7→51.6 亿（+40.5%）、CARVYKTI 9.6→18.9 亿（+95.9%）。
[^isrg]: [Intuitive Surgical FY2025 Form 10-K — Revenue & Procedures](https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm)。年度截至 2025-12-31；总收入 83.5→100.6 亿（+20.5%），系统 +26%、器械附件 +19%、服务 +20%；da Vinci 手术超 310 万例（+18%）、Ion 操作量 +51%。
[^hca]: [HCA Healthcare 2025 Annual Report & Form 10-K](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf)。2025 年度；集团营收 706.0→756.0 亿（+7.1%）、折合住院人次 399→411 万（+2.9%）、单次收入 +4.0% 及 Medicaid 州补充支付 55→62 亿美元。
[^jpm]: [JPMorgan Chase 2025 Annual Report & Form 10-K](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)。2025 年度；集团 GAAP 利息收入 1,939.3→1,933.4 亿、利息支出 1,013.5→979.0 亿、净利息收入 925.8→954.4 亿美元（+3.1%）。
[^visa]: [Visa FY2025 Form 10-K — Operating Metrics & Revenue Disaggregation](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm)。财年截至 2025-09-30；名义支付额 12.99→13.89 万亿（截至 6 月末，+7%）、处理笔数 2,338→2,575 亿笔（+10%）、服务费 175.4 亿（+9%）、处理费 199.9 亿（+13%）、客户激励 157.5 亿（+14%）及净收入 400.0 亿美元（+11%）。
[^chubb]: [Chubb Limited Annual Report 2025 & FY2025 Results Release](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf)。2025 年度；财险净签单保费 451.4→475.6 亿（+5.4%）、2026-02-03 全年业绩公告财险净已赚保费 +5.1% 及 Note 1 保费分摊确认政策。
[^xom]: [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions)。上游开采、下游炼化与化工业务划分。
[^xom-10k]: [Exxon Mobil Corporation FY2025 Form 10-K — Production, Realizations & Note 3](https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm)。年度截至 2025-12-31；原油日产量 1,858→1,992 千桶/日（+7.2%）、销售均价 76.57→65.64 美元/桶（−14.3%）、合并销售及营业收入 3,392→3,239 亿及消除分部间收入 1,210 亿美元。
[^kmi]: [Kinder Morgan — Products Pipelines](https://www.kindermorgan.com/Operations/Products/Index)。Galena Park 凝析油长期收费加工协议。
[^wic]: [Wyoming Interstate Company — Black Hills Negotiated Rate Agreement Update](https://pipeline2.kindermorgan.com/Documents/WIC/RP25-1193-000_Negotiated_Rate_Agreement_Update_-_Black_Hills_2025-20250930164903.pdf)。2025-09-30 申报；28,150 Dth/d 容量月预留费率 0.9125 美元/Dth 与指定接收点追加费率 0.1125 美元/Dth。
[^pm]: [Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets](https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above)。event id 483195；门槛合约严格超过 18.5 亿与 19 亿美元。
[^mrvl-base]: [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm)。FY2026 Q1 数据中心收入 14.406 亿美元。
[^pm-history]: [Official CLOB YES price history: MRVL Q1 Data Center > 1.85B / 1.9B](https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60)。2026-05-26 16:00:04 UTC 历史序列 YES 价格 0.395 与 0.185 美元。
[^mrvl-outlook]: [Marvell FY26 and Q4 FY26 Financial and Business Results](https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf)。PDF pp6,13,15–16；FY2027 全年数据中心约 40% 增长展望与 Q1 全公司 24 亿（±5%）指引。
[^ko-base]: [The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf)。2025 全年可比净营收 480.62 亿、归属股东可比净利 129.58 亿、稀释加权平均股数 43.13 亿股。
[^dbs]: [DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke](https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf)。2026-05-04 研报；2026-04-30 收盘价 78.76 美元与 26 倍前瞻 PE 参照。


## Sources
- [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。
- [Amazon.com, Inc. FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm): Amazon.com, Inc.
- [ASML Holding N.V. FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm): ASML Holding N.V.
- [Booking Holdings 2025 Form 10-K — Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm): BKNG 披露其效果营销主要使用搜索引擎，尤其 Google，以及联盟、比价和社交渠道。；其营销效率受点击成本、转化、取消和渠道组合等影响。
- [HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf): HCA 提供住院和门诊服务，多数患者合同还涉及政府项目、商业保险或管理式医疗等第三方付款者。；支付可按病例、日或服务项目等约定，服务交付、收入确认与收款需要区别。
- [Intuitive Surgical, Inc. FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm): Intuitive Surgical, Inc.
- [Johnson & Johnson 2025 Form 10-K — Innovative Medicine and MedTech](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm): JNJ 同时经营药品与医疗器械。；药品可经零售商、批发商、分销商、医院和专业人员分销；器械有对应专业用途与机构采购渠道。；临床使用者、机构买方与最终支付方需要分别识别。
- [JPMorgan Chase 2025 Annual Report — Consumer & Community Banking](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPM 的消费与社区银行服务个人和小企业，包含存款、贷款、账户和支付服务。；客户存入的本金、银行放出的贷款本金、利息及服务费用承担不同权利和义务。
- [Kinder Morgan — Products Pipelines; Condensate Processing Facility](https://www.kindermorgan.com/Operations/Products/Index): KMI 提供成品油等运输、储存与调和服务。；其 Galena Park 附近凝析油加工设施由与 BP North America 的长期收费协议支持。；同样处理能源商品，企业也可以通过提供加工服务取得收费。
- [Microsoft Corporation FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm): Microsoft Corporation
- [NIKE FY2025 Form 10-K — Business and Revenue Recognition](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm): NKE 设计、开发及销售商品，绝大部分产品由独立承包商制造。；自有门店和数字渠道直营与批发并存；批发交货和消费者购入是不同交易阶段。；批发与直营的控制转移、付款和退货折扣安排存在差别。
- [NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customers](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm): NVDA 的计算平台可以以机架系统、子系统、模块及相关软件服务交付。；直接采购者与实际部署使用者可以不同。；公司采用晶圆代工和合同制造，明确提到 TSMC 制造晶圆与 CoWoS 封装技术。
- [Otis Worldwide 2025 Form 10-K — New Equipment and Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm): 新设备客户包括开发商、总承包商和政府机构；通常有预付和按里程碑付款。；维保客户通常为业主和设施管理方，可以不同于原设备采购者。；OTIS 维护自家和其他厂商设备，服务还包含维修与改造。
- [Visa FY2025 Form 10-K — Network Model and Transaction Processing](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm): V 向支付体系参与者提供网络处理服务，本身不发卡或向持卡人授信。；交换费一般由收单方向发卡方支付，商户收单费用与 V 对机构收取的费用需区分。；网络流经金额不等同 V 的营业收入。
- [Wyoming Interstate Company — Black Hills Negotiated Rate Agreement Update](https://pipeline2.kindermorgan.com/Documents/WIC/RP25-1193-000_Negotiated_Rate_Agreement_Update_-_Black_Hills_2025-20250930164903.pdf): Wyoming Interstate Company, L.L.C.
- [Walmart FY2025 Form 10-K — Business; Membership and Other Income](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm): WMT 有商品零售和会员服务，会员收费对应期间权益。；同一购物活动可以涉及商品价款与会员费两种不同收费。
- [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions): XOM 同时有油气生产、下游燃料及化工业务，最终服务不同用途。；从开采、加工及商品销售切面识别业务，有助于分别研究产品价格和加工关系。
- [Exxon Mobil Corporation FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm): Exxon Mobil Corporation
- [Chubb Limited Annual Report 2025 — Premiums; Financial Highlights](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf): 保费定义跨页完整读取，经营增长说明读取对应段落；其他命中页只作定位上下文，不作为新增研究内容。未称304页全文已审读。
- [DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke](https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf): 当前URL取得的本地PDF实际为2026-05-04版，报告列示2026-04-30收盘价78.76。；26倍是分析师为其目标价选择的forward PE；本篇可把这个已公开数值作为有出处、可调整的条件输入。
- [The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf): GAAP净营收为47,941m；另列的可比净营收为48,062m，不能不加标签地交换。；可比归属股东净利润12,958m和可比稀释EPS显示值3.00均来自公司非GAAP调节表；GAAP对应归属股东净利13,107m、稀释EPS3.04。；4,313m为2025全年稀释加权平均股数，不是2025年末股数。；本篇同口径净利率proxy采用12,958/48,062；EPS用12,958/4,313核对，公司显示3.00是取整数。
- [The Coca-Cola Company — Second Quarter 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf): 全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。
- [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm): 读取当年已披露Data center 1,440.6 M 美元及季度期间；与最新表所列同季数一致。
- [Marvell FY26 and Q4 FY26 Financial and Business Results](https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf): 实际读p6全年数据中心约40%增长预期、p13产品/需求背景、p15收入类别变更脚注及p16全公司Q1指引；完整45页原件保存但不称通读。
- [Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm): 读取收入终端市场定义表、当前/前季/去年同季收入表、收购纳入范围及发布日期；未重建全套利润和现金流。
- [Marvell quarter ended May 2 2026 Form 10-Q](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000019/mrvl-20260502.htm): 读取终端市场收入表、唯一报告分部说明、数据中心产品需求解释及并购纳入；与前日8-K按同一数字对照。
- [Otis Worldwide Corporation Q4 2025 Earnings Call — Corrected Transcript](https://s203.q4cdn.com/227649559/files/doc_financials/2025/q4/4Q25-Otis-Worldwide-Corp-Earnings-Call-Transcript.pdf): Otis Worldwide Corporation
- [Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets](https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above): 读取五个子合约完整description、题目、token映射、结束及关闭字段、当前解析状态；完整JSON保留。
- [Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.85B?](https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60): 读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。
- [Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.9B?](https://clob.polymarket.com/prices-history?market=17371423556770029879189222365137773013648929593752442002979764677862763408752&startTs=1778716800&endTs=1779926400&fidelity=60): 读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。
- [Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf): Q2 FY2026产品收入为1,090.496m，可显示1,090.5m，同比报告为32%；NRR为125%。；125%表示所定义同一cohort在第二个12个月窗口的产品收入相对第一个窗口增长25%，包含该组扩张、收缩和不再使用的净结果。；32%与25%不能直接相减取得新客户贡献：观察期间、客户总体及比较分母不相同。即使期间统一，也要知道该cohort在总基期收入中的权重。；RPO既含递延收入也含未开票合同额；它不能完整反映未来usage增长及其发生时间，超出已承诺capacity的消费与新增采购未必已经进入现有RPO。

## Content relations
```json
[
  {
    "from": "zh-revenue-growth-expectations",
    "relation": "part_of",
    "to": "topic-D",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [客户、产品与收费方式](https://ou-liu-red-sugar.github.io/zh/notebook/customers-products-pricing/)
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
