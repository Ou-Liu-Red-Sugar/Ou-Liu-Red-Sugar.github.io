# 盈利状态、资本需求与条件定价参照

重建TTM和经营价值边界，匹配索取权、盈利期间与定价日，再讨论资本状态差异。

Entry: zh-p29 | Node: P29 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P29《盈利状态、资本需求与条件定价参照》，读者具有高年级本科至研究生数学背景。

先确认本次节点和读者所选分支。先实际取得required_readings中该范围的全部完整单元，核对版本、期间、币种与模型身份；目录、摘要、搜索节选和成功打开标题不算正文。记录实际工具/文件、单元起止、读到的关键约定及其支持范围，runtime_reading_log从空表开始，不预填“已读”。本站方法和公司案例从access.uri所列公开正文读取，外部原件从指定URL读取；不得假设访问任何私人盘符。读取失败先用明示的已核等价来源，仍缺则具体说明缺的单元，不凭记忆声称已核该事实。读者要求直接讲解时可直接推进；互动时一次要求一个完整推理任务，不逐格问四则运算。引用紧随所用材料。案例固定2026-09-20信息与2026-09-18价格，不更新报价、不接账户、不重估公司；不执行或换名恢复股票DCF/WACC。所有操作标原状态、具名已算替代或纯教学扰动，不能把点击当新增证据。最后用迁移题检验，给完整解析，并指出剩余条件。

本篇任务与反馈尺度：
先要求读者给EV/普通股EPS、PE/EBIT各指出错误。用WMT实际期间重建29.825+16.876−14.421=32.280，再以借款、融资租赁、NCI和现金得899.045；解释vendor差额不是已经解决。Alphabet优先权用385m存托份×50，不用四舍五入优先股数；非上市账面两端不是统计区间。由同一EV推导MN=ME/(1−t)，25%只是教学经营税，不用集团ETR或现金税替代。Microsoft只讲已读集团利润/EPS，不生成缺完整租赁单元的EV图。最后纠正今日forwardPE当未来售价，并迁移到金融或亏损业务，要求先研究资本和权利，不给行业固定倍数。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "PBCD-METHOD-RR",
      "title": "业务状态下的条件定价、普通股桥与Risk-Reward",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "pm-conditional-rr-earnings-reference",
        "scope": "完整盈利与参照节",
        "purpose": "先定义对象与状态"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。",
      "authors": [
        "本站方法"
      ]
    },
    {
      "source_id": "PBCD-RELVAL-2024",
      "title": "Relative Valuation lecture packet",
      "version": "Spring 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf"
      },
      "required_unit": {
        "locator": "pp6–12、56–57",
        "scope": "指定九页完整单元",
        "purpose": "倍数一致性及可比选择，不用p55图或DCF"
      },
      "supports": "相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照。",
      "authors": [
        "Aswath Damodaran"
      ]
    },
    {
      "source_id": "PBCD-WMT-FY27Q2",
      "title": "Walmart FY2027 Q2 earnings release",
      "version": "2026-08-20, half-year ended2026-07-31",
      "access": {
        "kind": "html_full_text",
        "uri": "https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm"
      },
      "required_unit": {
        "locator": "pp8–9",
        "scope": "完整半年损益及资产负债表",
        "purpose": "逐项重建TTM和claimants"
      },
      "supports": "H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录。",
      "authors": [
        "Walmart Inc."
      ]
    },
    {
      "source_id": "PBCD-WMT-FY27Q2-SLIDE",
      "title": "Walmart FY2027 Q2 presentation",
      "version": "2026-08-20",
      "access": {
        "kind": "html_full_text",
        "uri": "https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm"
      },
      "required_unit": {
        "locator": "slide26",
        "scope": "完整ROI reconciliation",
        "purpose": "核32.280而非50.285"
      },
      "supports": "ROI reconciliation第一行TTM营业利润32.280及旧FY29.825；不采用调整后ROI分子50.285作EBIT。",
      "authors": [
        "Walmart Inc."
      ]
    },
    {
      "source_id": "PBCD-GOOGL-FY2025",
      "title": "Alphabet Q4 and FY2025 earnings exhibit",
      "version": "2026-02-04, FY ended2025-12-31",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm"
      },
      "required_unit": {
        "locator": "p5",
        "scope": "完整全年损益表",
        "purpose": "FY129.039"
      },
      "supports": "全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成。",
      "authors": [
        "Alphabet Inc."
      ]
    },
    {
      "source_id": "src-goog-2026q2",
      "title": "Alphabet Form 10-Q, quarter ended June 30, 2026",
      "version": "2026Q2 SEC filing",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm"
      },
      "required_unit": {
        "locator": "p5、Note3非上市证券、Note4租赁、Note11 p34首三段",
        "scope": "所用表、相关定义及优先存托权利段",
        "purpose": "147.628期间桥与19.250优先权"
      },
      "supports": "H1营业利润61.877/80.466bn，非上市证券账面131.461，租赁18.037/2.590，优先权385m存托份×50美元；账面/清算代理不等于交易市值。",
      "authors": [
        "Alphabet Inc."
      ]
    },
    {
      "source_id": "PBCD-MSFT-FY2026",
      "title": "Microsoft FY2026 Q4/FY results",
      "version": "2026-07-29, FY ended2026-06-30",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast"
      },
      "required_unit": {
        "locator": "全年reconciliation和Income Statements",
        "scope": "完整相应单位",
        "purpose": "集团GAAP17.95与调整17.28的区别"
      },
      "supports": "集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数。",
      "authors": [
        "Microsoft Corporation"
      ]
    },
    {
      "source_id": "PBCD-CASE-AMZN",
      "title": "Amazon：2026-09-20历史条件研究案例",
      "version": "研究截止2026-09-20；教学摘编2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "case-amzn-pricing",
        "scope": "冻结价格、供应商输入与条件倍数说明",
        "purpose": "四日期字段和未来条件身份"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布。报价冻结，代表点不是条件均值。",
      "authors": [
        "本站历史研究"
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_id": "CASE-AMZN-20260920",
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json",
    "identity": "冻结2026-09-20输入；不同JSON字段保留事实/假设/条件结果身份",
    "selected_keys": [
      "case_id",
      "metadata",
      "peers"
    ],
    "data": {
      "case_id": "CASE-AMZN-20260920",
      "metadata": {
        "information_cutoff": "2026-09-20",
        "purchase_date": "2026-09-18",
        "valuation_date": "2029-12-31",
        "purchase_price": 253.71,
        "currency": "USD",
        "money_unit": "billion",
        "share_unit": "billion",
        "quote_type": "regular_close",
        "quote_time": "16:00 EDT",
        "years": 3.2854209445585214,
        "cash_distributions": 0,
        "original_shareholder_additional_cash": 0,
        "result_identity": "历史研究的未来条件结果；不是当期目标价；期间分配为零；救援发行不等于原股东强制追加现金"
      },
      "peers": {
        "GOOGL": {
          "title": "Alphabet全集团",
          "quote_date": "2026-09-18",
          "quote_time": "16:00 EDT",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-06-30",
          "balance_sheet_date": "2026-06-30",
          "quote": 349.54,
          "fy_operating_income": 129.039,
          "current_h1_operating_income": 80.466,
          "prior_h1_operating_income": 61.877,
          "ttm_ebit": 147.628,
          "h1_annualized": 160.932,
          "vendor_ev": 4153.1912,
          "debt_book": 100.164,
          "finance_lease": 2.59,
          "operating_lease": 18.037,
          "preferred_depositary_shares_bn": 0.385,
          "preferred_per_depositary_usd": 50,
          "preferred_liquidation_proxy": 19.25,
          "nonmarketable_book": 131.461,
          "adjustments": [
            {
              "label": "原冻结EV",
              "value": 4153.1912
            },
            {
              "label": "移除经营租赁",
              "value": -18.037
            },
            {
              "label": "优先权清算代理",
              "value": 19.25
            }
          ],
          "uncertain_subtract_range": [
            0,
            131.461
          ],
          "full_cash_reconstruction": false,
          "limitations": "vendor EV为原研究观察并非当日完整不可变快照；非上市账面非税后现金；优先权清算额非市值；不能把集团参照当纯GCP。"
        },
        "WMT": {
          "title": "Walmart全集团",
          "quote_date": "2026-09-18",
          "quote_time": "16:00 EDT",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-07-31",
          "balance_sheet_date": "2026-07-31",
          "quote": 106.73,
          "fiscal_year_base_end": "2026-01-31",
          "fy_operating_income": 29.825,
          "current_h1_operating_income": 16.876,
          "prior_h1_operating_income": 14.421,
          "ttm_ebit": 32.28,
          "vendor_ev": 910.33,
          "common_market_cap": 846.77,
          "short_borrowings": 10.479,
          "current_long_debt": 3.47,
          "long_debt": 36.462,
          "debt_book": 50.411,
          "finance_lease_current": 0.88,
          "finance_lease_long": 5.952,
          "finance_lease": 6.832,
          "redeemable_nci": 0.293,
          "nonredeemable_nci": 6.268,
          "nci_book": 6.561,
          "cash": 11.529,
          "operating_lease": 16.512,
          "rebuilt_ev": 899.045,
          "vendor_wrong_ebit": 28.98,
          "vendor_wrong_multiple": 31.41,
          "vendor_debt": 75.092,
          "debt_with_all_leases": 73.755,
          "unreconciled_vendor_difference": 1.337,
          "adjustments": [
            {
              "label": "普通股市值",
              "value": 846.77
            },
            {
              "label": "有息借款",
              "value": 50.411
            },
            {
              "label": "融资租赁",
              "value": 6.832
            },
            {
              "label": "非控制权益账面代理",
              "value": 6.561
            },
            {
              "label": "现金",
              "value": -11.529
            }
          ],
          "limitations": "NCI用账面代理；未完全复原vendor debt定义；ROI调整后分子50.285不是经营利润32.280。"
        },
        "MSFT": {
          "title": "Microsoft全集团盈利对照",
          "quote_date": "2026-09-18",
          "retrieved_at": "2026-09-20",
          "earnings_period_end": "2026-06-30",
          "balance_sheet_date": "2026-06-30",
          "quote": 493.78,
          "ttm_ebit": 155.237,
          "gaap_eps": 17.95,
          "adjusted_eps": 17.28,
          "use": "仅集团盈利/EPS口径对照；不发布未补读完整租赁单元的统一EV倍数图",
          "source": "FY2026官方业绩表"
        }
      }
    }
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [
    "EXP-P29-COMP-MATCH"
  ]
}
```

## Supplied entry
到了这一步，我们已经知道要定价的是哪一组业务，也有了收入、成本与资本相互连接的未来状态。接下来不是从表里挑一个“行业倍数”，而是问：相近状态下，市场曾怎样给这样的盈利与权利定价？这个比较哪里成立，哪里需要调整？

本篇继续使用2026年9月20日的历史研究。同行报价观察日固定为9月18日，不能把今天的报价塞进旧盈利与旧资本表。学完之后，你应能重建一个 TTM 分母和一个经营价值分子，纠正分母、索取权与日期的错配，而不是记住 Amazon 应乘多少倍。[^case]

<a id="p29-contract"></a>
## 1. 使用倍数之前，先说清五件事

**条件定价参照**是指，对特定价值日期、业务状态和索取权，选择口径相容的市场价格与盈利量之间的比较。一个完整记录至少包含价值属于谁、盈利分母、盈利期间、价值日期，以及增长和资本等差异。[^method]

经营价值 EV 对应经营活动整体；EBIT 尚未扣除融资利息，因而可以与经营价值比较。普通股市值对应普通股持有人；PE 的净盈利应已经处理利息、税和非普通股权利。若拿全部经营价值除普通股 EPS，或者拿普通股股价除“EBIT/股数”，单位可能仍显示“倍”，经济身份却错了。相对估值讲义把这种分子分母的一致性列为使用倍数前的基本检查。[^relative]

这也解释了为什么同行名字并不足够。同属“云”的两个集团，一个包含大量软件订阅，另一个仍在建设数据中心；同属“零售”的两个平台，商品毛额和服务净额占比又可能不同。行业名称是找材料的入口，不是相同倍数的证明。

<a id="p29-ttm"></a>
## 2. 先把一年真正拼出来

TTM 是截至某日的过去十二个月，不是把最近半年简单翻倍。若财年全年值为 $E_{FY}$，新财年上半年值为 $E_{H1,new}$，旧财年上半年为 $E_{H1,old}$，且会计口径一致，则

$$
E_{TTM}=E_{FY}+E_{H1,new}-E_{H1,old}.
$$

理由很直接：先从旧全年去掉较早半年，再加上刚结束的新半年。被保留的两段不重叠，合起来恰好十二个月。对于存在季节性的零售，这与“最近半年乘二”尤其不同。

Walmart 的 FY2026 截止于2026年1月31日；本例新半年属于 FY2027，截止于2026年7月31日。其营业利润为：[^wmt]

| 构成 | 实际期间 | 营业利润，十亿美元 |
|---|---|---:|
| FY2026全年 | 2025-02-01至2026-01-31 | 29.825 |
| 加：FY2027上半年 | 2026-02-01至2026-07-31 | 16.876 |
| 减：FY2026上半年 | 2025-02-01至2025-07-31 | 14.421 |
| 得到TTM | 2025-08-01至2026-07-31 | **32.280** |

官方Q2演示第26页的 ROI reconciliation 也直接列出32.280。要找的是该表第一行营业利润，不是加入利息收入、折旧和租金后得到的50.285“ROI operating income”。后者服务另一种资本回报指标，不能因为名字里也有 operating income 就拿来替换 EBIT。[^wmt-slide]

Alphabet 使用同样的期间桥：FY2025营业利润129.039，加2026H1的80.466，减2025H1的61.877，得到截至2026年6月30日的TTM147.628。$80.466\times2=160.932$ 是半年年化，不能改名为TTM。[^goog]

<a id="p29-claimants"></a>
## 3. 再把分子属于谁说清楚

本例同行价格是2026年9月18日常规收盘的冻结观察，统计取数日为9月20日；资产负债表和盈利有各自截止日。因此分子是“同一研究口径下的近似重建”，并非各项资产负债都在9月18日逐笔重估后的交易价格。

| 对象 | 报价观察日 | 历史取数日 | 盈利截止/TTM截止 | 资产负债表日期 |
|---|---|---|---|---|
| Alphabet | 2026-09-18 | 2026-09-20 | 2026-06-30 | 2026-06-30 |
| Walmart | 2026-09-18 | 2026-09-20 | 2026-07-31 | 2026-07-31 |
| Microsoft | 2026-09-18 | 2026-09-20 | 2026-06-30 | 2026-06-30（仅口径对照；本篇不重建EV） |

先看 Walmart。冻结普通股市值846.770，配合同一资产负债表的借款、融资租赁、少数权益与现金，得到：

$$
EV=846.770+50.411+6.832+6.561-11.529=899.045.
$$

借款50.411分为短期10.479、当期长期债3.470和长期36.462；融资租赁6.832分为当期0.880和长期5.952；少数权益6.561包括可赎回0.293和非可赎回6.268。这些是可回到原表的组件，少数权益在本例使用账面代理，不是假装已知其交易市值。经营租赁16.512没有再次加入，因为本比较的经营利润仍承担经营租金。[^wmt]

于是采用的经营倍数约为 $899.045/32.280=27.85$。冻结供应商EV910.330除以正确分母则为28.20；供应商的旧分母28.980不能继续使用。其债务字段与官方借款、两类租赁合计还有1.337未解释差额，因此我们只说明自己重建了哪些组件，不宣称完全还原了供应商算法。普通股市值沿历史观察保存，也没有用半年加权平均股数乘当天股价冒充精确时点市值。[^case]

再看 Alphabet。历史供应商 EV 为4153.1912，本例剔除其中的经营租赁18.037，加入尚未单列的优先权清算额代理19.250，并把非上市证券账面131.461作为“完全不扣/全部扣除”的边界：

$$
M=\frac{4153.1912-18.037+19.250-x}{147.628},
\qquad x\in\{0,131.461\}.
$$

这给出约27.25—28.14倍。原分子中的有息债和融资租赁已经保留，不再次加入。优先权19.250由 **3.85亿份存托股份×每份50美元**得到；不要拿四舍五入后的优先股股数再乘面值。非上市证券131.461是账面额，不是已扣税、当日可变现的现金，因此两个端点是会计边界敏感性，不是置信区间。[^goog]

<a id="p29-state"></a>
## 4. 口径正确以后，还要判断盈利是什么状态

我们现在只修正了期间与权利，并没有证明哪一家公司应该和另一家公司同价。还要区分三层。

第一层是**会计可比调整**，例如某项重估收益是否混进所用净盈利。第二层是**业务状态调整**，例如当前利用率、产品组合、信用损失或库存状态是否可以持续。第三层是**普通股归属**，包括融资、税和其他持有人。剔除一个特殊项目不能自动完成第二层，更不能跳过恢复过程中的现金缺口。

Microsoft 的 FY2026营业利润155.237恰好也是截至6月末的TTM。其GAAP EPS17.95与调整后EPS17.28的差别，来自所公布的 OpenAI 投资影响调整，不表示其他所有项目和未来业务状态都已“正常化”。采用冻结股价493.78，两种PE约为27.51与28.58。这是集团权益口径的对照，不是 Azure 或 AWS 独立倍数。[^msft]

有时我们希望将 EBIT 换成经营税后利润 NOPAT。令教学经营税率为 $t$，在此简化中 $NOPAT=EBIT(1-t)$。如果只是把**同一个价值**换一种写法，必须有

$$
EV=M_E\,EBIT=M_N\,EBIT(1-t),
\qquad M_N=\frac{M_E}{1-t}.
$$

因此25%教学税率下，21倍EV/EBIT对应28倍EV/NOPAT；26倍对应34.666667倍。仍用21乘NOPAT，会机械削去25%的价值。这不是风险判断，而是变换不一致。这里的25%是明确的经营税设定，不从包含投资收益的集团有效税率或某年低现金税直接抄取。

<a id="p29-capital-date"></a>
## 5. 当期参照怎样走向未来条件定价

历史 Amazon Base 采用2029-12-31的经营价值除FY2029 EBIT，AWS21倍、非AWS22倍。同行参照却是2026年价格和当时TTM盈利。两者之间需要解释业务状态、增长持续性、竞争、资本形成与更新的差别，不能把日期悄悄抹掉。

同理，今日 $P_{2026}/EPS_{2027}$ 的前瞻PE对应的是今日价格；它不自动等于明年 $P_{2027}/EPS_{2027}$。要得到明年的出售结果，必须明确明年市场面对什么盈利窗口和状态。公式里有一个未来年份，并不表示算出的就是那个年份的股价。

资本是这种比较的重要部分。历史Base的2029 AWS资产取得145、收入337、设备折旧75.005261；取得额约占收入43%。这说明买家接手的不是一项只需很少更新投入的轻资本利润。用 $EBIT+D\&A-资产取得$ 得约43.58，只能作为税前资本负担观察，尚未处理付款时差、税、营运资本和融资，不能改称现金自由流。研究因此同时保留AWS17倍的低资本转化替代，而不是宣称21倍已由同行“证明”。[^case]

不同业务还需要不同入口：

| 业务状态 | 先识别的对象 | 可考虑的参照及条件 |
|---|---|---|
| 非金融、正经营利润 | 可归属经营利润与资本责任 | EV/NOPAT、适配的EV/EBITA；使用EBITDA也不能让资本消耗消失 |
| 银行等资本约束业务 | 信用损失、资本充足与可分配盈利 | 适配普通股PE、权益回报/账面权益参照，不套工业企业净债桥 |
| 早期、亏损或转型业务 | 里程碑、资金到达、后续融资与稀释 | 先建立未来可达到的经营状态，再选相似状态参照；负利润不机械乘正PE |

表格说明方法选择的条件，不提供统一行业倍数。收入或用户数倍数也必须接回利润和资本，不能因为当期亏损就绕开经济责任。[^method]

<a id="p29-experiment"></a>
## 6. 操作与练习

<div data-experiment-slot="EXP-P29-COMP-MATCH"></div>

[打开参照口径实验](/notebook/labs/p-bcd/interactions.html#EXP-P29-COMP-MATCH)。先选Walmart，核对32.280的期间桥；再选Alphabet，切换非上市证券的两种账面扣除边界。最后把分母从EBIT换为NOPAT，观察倍数随税率变化而同一经营价值不变。另一个选择框故意允许提出“EV/普通股EPS”或“PE/EBIT”，它会要求先修正索取权，而不是给出一个貌似正确的倍数。

静态等价结果是：Walmart重建EV899.045、TTM32.280、EV/EBIT约27.85；Alphabet同口径约27.25—28.14；教学21倍EV/EBIT在25%税率下转换为28倍EV/NOPAT。它们不生成新的Amazon价格。

<a id="p29-exercises"></a>
**解释题。** 为什么Walmart的16.876不能直接乘二并叫TTM？

**解析。** 16.876只覆盖2026年2月至7月。乘二假定接下来或前面半年与这半年相同，而TTM要求拼入真实的2025年8月至2026年1月。正确桥为29.825+16.876−14.421=32.280；半年翻倍33.752是另一项年化近似，不能改名。节庆与季节性足以使二者不同。

**计算题。** 经营利润100、21倍EV/EBIT、教学税率25%。研究员改用NOPAT75，却坚持21倍，价值差多少？

**解析。** 原EV2100，新算1575，相差525，正好25%。同价值换分母应使用28倍，$75\times28=2100$。若研究员真正认为税收或业务变化降低价值，应明确改变的经济条件，而不是把分母错配当作论据。

**迁移题。** 某金融子公司报告净盈利20，集团普通股仅拥有80%，且还应承担共同费用2。能否直接用集团EV倍数乘20？

**解析。** 先辨认20是全体权益还是已归属集团的盈利，2是否已扣，以及监管资本和可分配限制。若20为全体权益、2为集团需另承担的税后共同费用，则在这些教学条件下归属盈利为 $20\times80\%-2=14$；应选择与该权益口径匹配的参照，而非EV乘净盈利。具体资本安排可能要求更完整的处理，这道题的重点是先定权利和分母，再谈倍数。

[^relative]: Aswath Damodaran，Relative Valuation，Spring 2024，pp6–12、56–57。[可读讲义](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf)。仅采用相对估值的定义、一致性与可比选择，不采用其折现或公式倍数路线。
[^wmt]: Walmart FY2027 Q2 earnings release，2026-08-20，p8半年损益表、p9资产负债表。[原文](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm)。金额million转为billion。
[^wmt-slide]: Walmart FY2027 Q2 presentation，slide26，Calculation of Return on Investment，营业利润行的2026-01-31与2026-07-31列。[原表](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm)。
[^goog]: Alphabet [FY2025业绩公告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm) p5；[2026Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm) p5半年损益、Note3非上市证券、Note4租赁、Note6债务、Note11 p34存托股份与优先权。
[^msft]: Microsoft FY2026 Q4/FY results，2026-07-29，全年GAAP/non-GAAP reconciliation及Income Statements。[原文](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast)。此处只比较集团盈利和权益口径，不展开租赁调整的EV比较。
[^case]: [历史公司案例的参照与价格身份](/zh/notebook/amzn-research-20260920/#case-amzn-pricing)；冻结市值/供应商EV、旧分母勘误和条件倍数属于该研究，不是现价更新。
[^method]: [条件定价短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-earnings-reference)，本站方法摘编。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P29-COMP-MATCH",
    "title": "盈利状态、资本需求与条件定价参照",
    "anchor": "p29-experiment",
    "description": "重建TTM和经营价值边界，匹配索取权、盈利期间与定价日，再讨论资本状态差异。",
    "inputs": {
      "peer": {
        "allowed": [
          "WMT",
          "GOOGL",
          "MSFT"
        ],
        "default": "WMT"
      },
      "metric": {
        "allowed": [
          "EV_EBIT",
          "EV_NOPAT",
          "PE_GAAP",
          "PE_ADJUSTED",
          "EV_EPS",
          "PE_EBIT"
        ],
        "default": "EV_EBIT"
      },
      "tax": {
        "min": 0,
        "max_exclusive": 1,
        "default": 0.25
      },
      "subtract_book": {
        "default": false
      }
    },
    "outputs": {
      "ttm": "FY+newH1−oldH1",
      "ev": "explicit claimant components",
      "multiple": "matching EV/earnings or price/EPS"
    },
    "units": {
      "money": "USD billion for company amounts; USD per share for outcomes",
      "shares": "billion",
      "probabilities": "fractions summing to one"
    },
    "identity": "frozen dated research or explicitly marked bounded teaching arithmetic",
    "static_equivalent": {
      "reader": "https://ou-liu-red-sugar.github.io/zh/notebook/state-earnings-conditional-pricing/#p29-experiment",
      "lab": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/interactions.html#EXP-P29-COMP-MATCH",
      "without_javascript": "默认完整表和主要对照保留；不把参数规格当运行结果"
    },
    "algorithm": "engine.peer；GOOGL账面开关仅取0/131.461；MSFT只接受PE_GAAP/PE_ADJUSTED；同EV转NOPAT倍数除1−t。",
    "boundaries": [
      "EV/EPS和PE/EBIT报错",
      "t<0或t≥1/NaN报错",
      "MSFT不生成EV图",
      "历史报价日/取数日/利润与资产负债日期分别展示"
    ],
    "default_values": {
      "wmt_ttm": 32.28,
      "wmt_ev": 899.045,
      "wmt_ev_ebit": 27.851456009913257
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json"
  }
]
```

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): 原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布。报价冻结，代表点不是条件均值。
- [Alphabet Q4 and FY2025 earnings exhibit](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm): 全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成。
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。
- [Microsoft FY2026 Q4/FY results](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast): 集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数。
- [Relative Valuation lecture packet](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf): 相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照。
- [Walmart FY2027 Q2 earnings release](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm): H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录。
- [Walmart FY2027 Q2 presentation](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm): ROI reconciliation第一行TTM营业利润32.280及旧FY29.825；不采用调整后ROI分子50.285作EBIT。
- [Alphabet · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告。用于核对 Google Services、Google Cloud、技术基础设施与设备用途。报告主体为 Alphabet；GOOG 与 GOOGL 对应不同股份类别。

## Content relations
```json
[
  {
    "from": "zh-p29",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  },
  {
    "relation": "requires",
    "to": "zh-p28",
    "reason": "本篇承重步骤实际使用该能力",
    "required_competence": "能定义估值组及索取权边界",
    "from": "zh-p29"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmconditionalrr",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p29"
  },
  {
    "relation": "illustrated_by",
    "to": "zh-amzn-research-20260920",
    "reason": "固定日期案例；不新建第二个别名案例",
    "period": "2025Q4–2029",
    "cutoff": "2026-09-20",
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-RELVAL-2024",
    "reason": "相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照。",
    "locator": "pp6–12; pp56–57",
    "scope": "九页正文与原图实际逐页读取；不采用p55未读图、DCF、WACC或公式倍数。无~旧入口失败后使用同版可读~入口。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-GOOGL-FY2025",
    "reason": "全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成。",
    "locator": "p5 Consolidated Statements of Income, full-year columns",
    "scope": "所用完整损益表及单位，未采用当前报价。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "src-goog-2026q2",
    "reason": "H1营业利润61.877/80.466bn，非上市证券账面131.461，租赁18.037/2.590，优先权385m存托份×50美元；账面/清算代理不等于交易市值。",
    "locator": "p5 six-month income statement; Note3 pp17–18 non-marketable securities; Note4 lease balances/maturities; Note6 debt; Note11 p34 mandatory convertible preferred, opening three paragraphs",
    "scope": "本次指定损益、非上市证券、租赁及优先权单元；债务总体口径同时沿批准的冻结研究桥，未扩查全部债务合约。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-WMT-FY27Q2",
    "reason": "H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录。",
    "locator": "p8 six-month income statement; p9 balance sheet, debt/leases/NCI/cash",
    "scope": "所用两张完整表及单位；不从加权平均股数生成当日市值。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-WMT-FY27Q2-SLIDE",
    "reason": "ROI reconciliation第一行TTM营业利润32.280及旧FY29.825；不采用调整后ROI分子50.285作EBIT。",
    "locator": "slide26 Calculation of Return on Investment",
    "scope": "整张slide26原图已查看，文本与数据列核对。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-MSFT-FY2026",
    "reason": "集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数。",
    "locator": "FY GAAP/non-GAAP reconciliation; FY Income Statements",
    "scope": "上述完整利润/reconciliation单元及相关财务表；未完整取得10-K租赁附注，所以本包不采用MSFT租赁统一EV图。",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "from": "p29-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P29-COMP-MATCH",
    "at_section": "p29-experiment",
    "reason": "重建TTM和经营价值边界，匹配索取权、盈利期间与定价日，再讨论资本状态差异。"
  }
]
```

## Related entries
