# 盈利状态、资本需求与条件定价参照

重建2026年9月18日同行报价对应的TTM盈利和经营价值，比较增长、资本状态与股东权利.

Entry: zh-p29 | Node: P29 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的全部指定单元，所选可选分支再读 optional_readings，核对版本、期间、单位及支持内容. 缺少必要单元时先取得等价可读原件，再进行依赖它的讲解. 重建Walmart TTM和经营价值，记录供应商债务1.337未对平；以Alphabet存托股份重建优先权及非上市账面边界. 推导EBIT/NOPAT同价值倍数转换，比较当期与未来价值日期，再迁移到金融或亏损业务. 先以完整推理任务诊断，再让读者计算和解释；按错误反馈，使用迁移题检验. 采用所列日期研究和教学输入，runtime_reading_log记录实际来源与范围.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

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
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.",
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
      "supports": "相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照.",
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
      "supports": "H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录.",
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
      "supports": "ROI reconciliation第一行TTM营业利润32.280及旧FY29.825；不采用调整后ROI分子50.285作EBIT.",
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
      "supports": "全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成.",
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
      "supports": "H1营业利润61.877/80.466bn，非上市证券账面131.461，租赁18.037/2.590，优先权385m存托份×50美元；账面/清算代理不等于交易市值.",
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
      "supports": "集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数.",
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
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.",
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
          "limitations": "vendor EV为原研究观察并非当日完整不可变快照；非上市账面非税后现金；优先权清算额非市值；不能把集团参照当纯GCP."
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
          "limitations": "NCI用账面代理；未完全复原vendor debt定义；ROI调整后分子50.285不是经营利润32.280."
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
  ],
  "content_version": "2026-09-22-deep-review",
  "learning_task": "重建Walmart TTM和经营价值，记录供应商债务1.337未对平；以Alphabet存托股份重建优先权及非上市账面边界. 推导EBIT/NOPAT同价值倍数转换，比较当期与未来价值日期，再迁移到金融或亏损业务."
}
```

## Supplied entry
条件定价参照比较的是特定价值日期、业务状态和索取权下的市场价格与盈利量. 本篇沿用2026年9月20日历史研究，同行报价观察日固定为2026年9月18日；任务是重建 TTM 盈利分母和经营价值分子，再判断增长、资本状态与权利差异怎样限制可比性. [^case]

<a id="p29-contract"></a>
## 条件参照与索取权

**条件定价参照**是指，对特定价值日期、业务状态和索取权，选择口径相容的市场价格与盈利量之间的比较. 一个完整记录至少包含价值属于谁、盈利分母、盈利期间、价值日期，以及增长和资本等差异. [^method]

EV对应经营活动整体，可与扣融资利息前的EBIT比较. 普通股市值对应普通股持有人，应与扣税、利息及非普通股权利后的盈利比较；股价则与每股盈利比较. 分子和分母既要单位一致，也要属于相同索取权.[^relative]

云业务的订阅收入占比、数据中心建设阶段，或零售业务的商品毛额与服务净额占比，会改变盈利与资本需求. 同行比较应据这些经营变量调整.

<a id="p29-ttm"></a>
## TTM期间桥

TTM为截至某日的过去十二个月. 会计口径一致时，由全年 $E_{FY}$、新半年 $E_{H1,new}$ 与旧半年 $E_{H1,old}$ 得到

$$
E_{TTM}=E_{FY}+E_{H1,new}-E_{H1,old}.
$$

旧全年减去较早半年，再加最新半年，留下连续且不重叠的十二个月. 半年翻倍则隐含两半年相同，季节性业务的差异会较大.

Walmart 的 FY2026 截止于2026年1月31日；本例新半年属于 FY2027，截止于2026年7月31日. 其营业利润为：[^wmt]

| 构成 | 实际期间 | 营业利润， B 美元 |
|---|---|---:|
| FY2026全年 | 2025-02-01至2026-01-31 | 29.825 |
| 加：FY2027上半年 | 2026-02-01至2026-07-31 | 16.876 |
| 减：FY2026上半年 | 2025-02-01至2025-07-31 | 14.421 |
| 得到TTM | 2025-08-01至2026-07-31 | **32.280** |

Q2演示第26页的ROI reconciliation首行也给出32.28营业利润；50.285另含利息收入、折旧和租金，是公司ROI指标使用的调整分子.[^wmt-slide]

Alphabet以129.039全年营业利润加80.466新半年、减61.877旧半年，得到截至2026-06-30的TTM147.628. 半年年化为 $80.466\times2=160.932$.[^goog]

<a id="p29-claimants"></a>
## 经营价值分子

同行股价观察于2026-09-18常规收盘，取数于9月20日，盈利与资产负债采用下表期间. 经营价值据这些不同日期的可得组件近似重建.

| 对象 | 报价观察日 | 历史取数日 | 盈利截止/TTM截止 | 资产负债表日期 |
|---|---|---|---|---|
| Alphabet | 2026-09-18 | 2026-09-20 | 2026-06-30 | 2026-06-30 |
| Walmart | 2026-09-18 | 2026-09-20 | 2026-07-31 | 2026-07-31 |
| Microsoft | 2026-09-18 | 2026-09-20 | 2026-06-30 | 2026-06-30（仅作集团权益口径对照） |

先看 Walmart. 冻结普通股市值846.770，配合同一资产负债表的借款、融资租赁、少数权益与现金，得到：

$$
EV=846.770+50.411+6.832+6.561-11.529=899.045.
$$

借款50.411含短期10.479、当期长期债3.47和长期36.462；融资租赁6.832含当期0.88和长期5.952；少数权益6.561含可赎回0.293及非可赎回6.268. 少数权益按账面代理，EBIT仍含经营租金，因此未另加经营租赁16.512.[^wmt]

经营倍数约 $899.045/32.28\approx27.851$. 冻结供应商EV910.33以同分母计算约28.201，其旧分母28.98已不适用. 供应商债务字段与借款及两类租赁合计仍有1.337未解释差额，本例采用可回到原表的组件；普通股市值沿历史冻结观察.[^case]

Alphabet历史供应商EV约4,153.191，本例剔除经营租赁18.037，加入优先权清算额代理19.25，非上市证券账面131.461取全不扣和全扣两端：

$$M\approx\frac{4,153.191-18.037+19.25-x}{147.628},\qquad x\in\{0,131.461\}.$$

这给出约27.25—28.14倍. 原分子已包含有息债和融资租赁，不再重复加入. 优先权19.250由 **385 M份存托股份×每份50美元**得到. 非上市证券131.461按账面额取“全不扣/全扣”两端，仅表示会计边界敏感性. [^goog]

<a id="p29-state"></a>
## 盈利与业务状态

会计可比调整处理重估收益等项目，业务状态调整判断利用率、产品组合、信用损失及库存的持续性，普通股归属处理融资、税和其他持有人. 恢复期现金需求沿经营路径另算.

Microsoft FY2026营业利润155.237也是截至6月末的TTM. EPS17.95和调整后17.28的差异对应公告中的OpenAI投资影响调整. 冻结股价493.78对应PE约27.509和28.575，均为集团普通股口径.[^msft]

有时我们希望将 EBIT 换成经营税后利润 NOPAT. 令教学经营税率为 $t$，在此简化中 $NOPAT=EBIT(1-t)$. 如果只是把**同一个价值**换一种写法，必须有

$$
EV=M_E\,EBIT=M_N\,EBIT(1-t),
\qquad M_N=\frac{M_E}{1-t}.
$$

因此25%教学税率下，21倍EV/EBIT对应28倍EV/NOPAT；26倍对应约34.667倍. 若仍用21乘NOPAT，价值会机械减少25%，原因是分母变换与倍数没有同步. 25%在这里是明确的教学经营税设定.

<a id="p29-capital-date"></a>
## 资本责任与价值日期

Amazon Base使用2029-12-31经营价值和FY2029 EBIT，AWS21倍、非AWS22倍；同行观察为2026价格除当时TTM盈利. 将参照用于2029状态，需比较增长持续性、竞争及资本形成与更新责任.

前瞻PE $P_{2026}/EPS_{2027}$ 对应今日价格. 未来出售价格 $P_{2027}$ 还取决于2027年市场面对的盈利窗口及状态.

资本责任限制参照的可迁移性. 历史Base的2029 AWS资产取得145、收入337、设备折旧约75.005；取得额约占收入43%. $EBIT+D\&A-资产取得$ 约43.58，仅是税前资本负担观察，尚未计付款时差、税、营运资本和融资. 因此研究另保留AWS17倍的低资本转化替代，用来检验21倍参照在高资本状态下的敏感性. [^case]

| 业务状态 | 先识别的对象 | 可考虑的参照及条件 |
|---|---|---|
| 非金融、正经营利润 | 可归属经营利润与资本责任 | EV/NOPAT、适配的EV/EBITA；使用EBITDA也不能让资本消耗消失 |
| 银行等资本约束业务 | 信用损失、资本充足与可分配盈利 | 适配普通股PE、权益回报/账面权益参照，不套工业企业净债桥 |
| 早期、亏损或转型业务 | 里程碑、资金到达、后续融资与稀释 | 先建立未来可达到的经营状态，再选相似状态参照；负利润不机械乘正PE |

收入或用户数参照仍需说明转化为利润、承担资本并归属普通股的关系.[^method]

<a id="p29-experiment"></a>
## 口径实验与解析

<div data-experiment-slot="EXP-P29-COMP-MATCH"></div>

[参照口径实验](/notebook/labs/p-bcd/interactions.html#EXP-P29-COMP-MATCH)重建Walmart的TTM、切换Alphabet非上市证券边界，并保持EV不变，将EBIT倍数转换为NOPAT倍数. 索取权错配的选项须先修正计量对象.

<a id="p29-exercises"></a>
**解释题.** 为什么Walmart的16.876不能直接乘二并叫TTM？

**解析.** 16.876覆盖2026年2月至7月，TTM还需2025年8月至2026年1月. 期间桥给32.28，半年翻倍给33.752，季节性使二者不同.

**计算题.** 经营利润100、21倍EV/EBIT、教学税率25%. 研究员改用NOPAT75，却坚持21倍，价值差多少？

**解析.** 原EV为2100，错配后1575，少525. 同价值改用NOPAT需28倍，$75\times28=2100$.

**迁移题.** 某金融子公司报告净盈利20，集团普通股仅拥有80%，且还应承担共同费用2. 能否直接用集团EV倍数乘20？

**解析.** 若20为全体权益盈利、2为集团另担的税后费用，则归属盈利为 $20\times80\%-2=14$. 使用相应权益参照，同时检查监管资本及可分配限制.

[^relative]: Aswath Damodaran，Relative Valuation，Spring 2024，pp6–12、56–57. [可读讲义](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf).
[^wmt]: Walmart FY2027 Q2 earnings release，2026-08-20，p8半年损益表、p9资产负债表. [原文](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm). 金额由M换算为B.
[^wmt-slide]: Walmart FY2027 Q2 presentation，slide26，Calculation of Return on Investment，营业利润行的2026-01-31与2026-07-31列. [原表](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm).
[^goog]: Alphabet [FY2025业绩公告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm) p5；[2026Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm) p5半年损益、Note3非上市证券、Note4租赁、Note6债务、Note11 p34存托股份与优先权.
[^msft]: Microsoft FY2026 Q4/FY results，2026-07-29，全年GAAP/non-GAAP reconciliation及Income Statements. [原文](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast).
[^case]: [历史公司案例的参照与价格身份](/zh/notebook/amzn-research-20260920/#case-amzn-pricing)；冻结市值/供应商EV、旧分母勘误和条件倍数属于该研究.
[^method]: [条件定价短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-earnings-reference)，本站方法摘编.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P29-COMP-MATCH",
    "title": "盈利状态、资本需求与条件定价参照",
    "anchor": "p29-experiment",
    "description": "重建TTM和经营价值边界，匹配索取权、盈利期间与定价日，再讨论资本状态差异.",
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
    "algorithm": "engine.peer；GOOGL账面开关仅取0/131.461；MSFT只接受PE_GAAP/PE_ADJUSTED；同EV转NOPAT倍数除1−t.",
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
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): Amazon 历史研究的事实、分析代理、四条未来路径、5 项替代、4 套权重和 16 组已算分布. 价格使用固定研究时点报价；各情景数值是代表点.
- [Alphabet Q4 and FY2025 earnings exhibit](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000012/googexhibit991q42025.htm): 全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成.
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.
- [Microsoft FY2026 Q4/FY results](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast): 集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数.
- [Relative Valuation lecture packet](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf): 相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照.
- [Walmart FY2027 Q2 earnings release](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningsreleasefy27q2.htm): H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录.
- [Walmart FY2027 Q2 presentation](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000145/earningspresentationfy27.htm): ROI reconciliation列示TTM营业利润32.280B美元、对照期29.825B美元；调整后ROI分子另为50.285B美元，组成与营业利润不同.
- [Alphabet · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对 Google Services、Google Cloud、技术基础设施与设备用途. 报告主体为 Alphabet；GOOG 与 GOOGL 对应不同股份类别.

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
    "reason": "相对估值的分子/分母索取权一致性、定义与统计描述，以及按相关基本面选择参照.",
    "locator": "pp6–12; pp56–57",
    "scope": "九页正文与原图实际逐页读取；不采用p55未读图、DCF、WACC或公式倍数. 无~旧入口失败后使用同版可读~入口.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-GOOGL-FY2025",
    "reason": "全年营业利润129.039bn，作为截至2026年6月末TTM的旧全年组成.",
    "locator": "p5 Consolidated Statements of Income, full-year columns",
    "scope": "所用完整损益表及单位，未采用当前报价.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "src-goog-2026q2",
    "reason": "H1营业利润61.877/80.466bn，非上市证券账面131.461，租赁18.037/2.590，优先权385m存托份×50美元；账面/清算代理不等于交易市值.",
    "locator": "p5 six-month income statement; Note3 pp17–18 non-marketable securities; Note4 lease balances/maturities; Note6 debt; Note11 p34 mandatory convertible preferred, opening three paragraphs",
    "scope": "本次指定损益、非上市证券、租赁及优先权单元；债务总体口径同时沿批准的冻结研究桥，未扩查全部债务合约.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-WMT-FY27Q2",
    "reason": "H1利润16.876/14.421及借款、融资租赁、NCI和现金组件；FY2027与实际经济期间同时记录.",
    "locator": "p8 six-month income statement; p9 balance sheet, debt/leases/NCI/cash",
    "scope": "所用两张完整表及单位；不从加权平均股数生成当日市值.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-WMT-FY27Q2-SLIDE",
    "reason": "ROI reconciliation第一行TTM营业利润32.280及旧FY29.825；不采用调整后ROI分子50.285作EBIT.",
    "locator": "slide26 Calculation of Return on Investment",
    "scope": "整张slide26原图已查看，文本与数据列核对.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-MSFT-FY2026",
    "reason": "集团营业利润155.237、GAAP EPS17.95与按OpenAI投资影响调整EPS17.28；不提供纯Azure倍数.",
    "locator": "FY GAAP/non-GAAP reconciliation; FY Income Statements",
    "scope": "上述完整利润/reconciliation单元及相关财务表；未完整取得10-K租赁附注，所以本包不采用MSFT租赁统一EV图.",
    "optional": false,
    "from": "zh-p29"
  },
  {
    "from": "p29-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P29-COMP-MATCH",
    "at_section": "p29-experiment",
    "reason": "重建TTM和经营价值边界，匹配索取权、盈利期间与定价日，再讨论资本状态差异."
  }
]
```

## Related entries
