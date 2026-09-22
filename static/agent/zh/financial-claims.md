# 金融资产、权利与经济事项

从国库券的原始条款计算持有现金流，再比较股份的治理与分配权、期权的或有支付.

Entry: zh-financial-claims | Node: M01 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
用M01《金融资产、权利与经济事项》带我阅读金融契约. 先通过本篇reference包中的公开链接，实际读完required_readings指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.
给我912797RD1的拍卖结果，让我从原件识别义务主体、面值与报价单位、发行日、到期日和到期权利，再用原始价格99.685778计算USD 10 K教学持有量的取得成本与28天持有期回报，并解释它与4.040%贴现报价的分母和期间差异. 接着用教学转售价99.80让我判断哪些条款保持不变、哪些现金流改变. 再比较Alphabet A/C类股份的投票、分配和清算权，说明C类仍具有的经济权利. 最后以SPX看涨期权权利金4点为迁移题，让我查出合约乘数、行权与结算方式，计算一份合约的权利金，再用到期结算值高于执行价3点的教学情景，分别计算结算收入与未计费盈亏. 通过标准是能够从原件重建权利关系，区分证券条款、取得价格与给定持有过程的现金结果，并说明换成股份或期权时新增了什么关系.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-financial-claims",
  "node_id": "M01",
  "content_version": "2026-09-22-coherence",
  "export_mode": "public",
  "selected_branch": "full_entry",
  "body_source": "body_markdown",
  "learning_task": "读取证券的义务主体、付款条件、时间和单位，计算取得成本及持有结果，并将同一读法用于股份与期权.",
  "prompt": "用M01《金融资产、权利与经济事项》带我阅读金融契约. 先通过本篇reference包中的公开链接，实际读完required_readings指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.\n给我912797RD1的拍卖结果，让我从原件识别义务主体、面值与报价单位、发行日、到期日和到期权利，再用原始价格99.685778计算USD 10 K教学持有量的取得成本与28天持有期回报，并解释它与4.040%贴现报价的分母和期间差异. 接着用教学转售价99.80让我判断哪些条款保持不变、哪些现金流改变. 再比较Alphabet A/C类股份的投票、分配和清算权，说明C类仍具有的经济权利. 最后以SPX看涨期权权利金4点为迁移题，让我查出合约乘数、行权与结算方式，计算一份合约的权利金，再用到期结算值高于执行价3点的教学情景，分别计算结算收入与未计费盈亏. 通过标准是能够从原件重建权利关系，区分证券条款、取得价格与给定持有过程的现金结果，并说明换成股份或期权时新增了什么关系.",
  "required_readings": [
    {
      "source_id": "MA-OS17",
      "title": "Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital",
      "authors": [
        "Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax"
      ],
      "version": "第3版，2022-12-14；在线单元于2026-09-21取得",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "§17.1 全节",
        "scope": "债权、股权融资与资金提供者权利的经济关系.",
        "purpose": "融资安排的经济位置"
      },
      "supports": "债权、股权融资与资金提供者权利的经济关系.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-TB-AUC",
      "title": "Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1",
      "authors": [
        "U.S. Department of the Treasury"
      ],
      "version": "2025-09-18公告；发行2025-09-23；到期2025-10-21",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "2025-09-18 拍卖公告单页全文及原表",
        "scope": "912797RD1的历史发行日期、期限、面值报价和拍卖结果.",
        "purpose": "具名权利、期间、面值报价"
      },
      "supports": "912797RD1的历史发行日期、期限、面值报价和拍卖结果.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-TB-PRICE",
      "title": "Understanding Pricing and Interest Rates",
      "authors": [
        "TreasuryDirect / Bureau of the Fiscal Service"
      ],
      "version": "现行网页，无独立修订日；取得2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/understanding-pricing/",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Bills 小节全文及公式",
        "scope": "国库券贴现率、面值、期限与取得价格的关系.",
        "purpose": "报价基数与条件付款"
      },
      "supports": "国库券贴现率、面值、期限与取得价格的关系.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-GOOG-10K",
      "title": "Alphabet Inc. 2025 Form 10-K",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "报告期截至2025-12-31；2026年提交",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Note 11 Stockholders’ Equity，印刷 pp.78–79",
        "scope": "Alphabet股份类别、交易代码、投票安排与股东权益披露.",
        "purpose": "股份类别与条件"
      },
      "supports": "Alphabet股份类别、交易代码、投票安排与股东权益披露.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-GOOG-RIGHTS",
      "title": "Description of Securities — Exhibit 4.20",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "2023年原始提交的证券说明，由2025年报引用；非新作的2025年章程",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Voting Rights、Dividends、Liquidation Rights 完整小节",
        "scope": "A/C股份的投票、股息与清算权利及其成立条件.",
        "purpose": "权利条件与证券身份"
      },
      "supports": "A/C股份的投票、股息与清算权利及其成立条件.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-OCC",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
      ],
      "version": "June 2024；官网入口于2026-09-21核得该版本",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Ch.I 印刷 pp.3–5；Ch.II 交易单位及 Premium 对应完整小节",
        "scope": "选择权、现金结算、合约单位与权利金的含义.",
        "purpose": "选择权、单位与权利金"
      },
      "supports": "选择权、现金结算、合约单位与权利金的含义.",
      "limits": "",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SPX",
      "title": "SPX Options Fact Sheet",
      "authors": [
        "Cboe"
      ],
      "version": "两页事实表，页脚©2026；取得2026-09-21；版权年不当作每条规则的生效日",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "两页事实表全文，核看第2页 SPX / SPXW 规格表",
        "scope": "现金结算、欧式行权、USD 100乘数、SPX/SPXW结算值取法及现金交付日.",
        "purpose": "参照对象、现金结算及乘数"
      },
      "supports": "现金结算、欧式行权、USD 100乘数、SPX/SPXW结算值取法及现金交付日.",
      "limits": "",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "local_required_units": [
    {
      "locator": "本篇正文与交互静态输入、算法、边界及默认验算表",
      "scope": "本篇所列具名发行、股份和合约条款，以及明确设定的数量、转让价格和期权情景.",
      "purpose": "重建练习与交互的计算"
    }
  ],
  "shared_inputs": {
    "version": "2026-09-21-review-v2",
    "identity_rule": "observed/source-backed, official_example, and teaching_assumption/synthetic are never relabelled as each other",
    "cases": {
      "CASE-MA-TBILL-912797RD1": {
        "observed": {
          "cusip": "912797RD1",
          "term_days": 28,
          "issue_date": "2025-09-23",
          "maturity_date": "2025-10-21",
          "price_per_100": "99.685778",
          "high_rate_percent": "4.040"
        },
        "teaching_assumptions": {
          "face_value_usd": "10000",
          "resale_price_per_100": "99.80",
          "resale_channel": "commercial_book_entry"
        }
      }
    }
  },
  "reading_scope_notes": ""
}
```

## Supplied entry
金融资产的条款规定持有人可以向谁提出什么要求、在什么条件下提出，以及数量和时间怎样确定. 价格是取得这些权利的对价；投资者的现金收付还取决于持有期间和转让安排. 债券、股份和期权的差别，可以从各自赋予持有人的权利读出来.[^OS17]

<span id="m01-rights-structure"></span>
## 一、权利条款

<span id="m01-bill-case"></span>
<span id="CASE-MA-TBILL-912797RD1"></span>

美国财政部2025年9月18日公布了以下28天国库券的拍卖结果.[^TB-AUC]

| 原始字段 | 公告内容 |
|---|---|
| Security Term | 28-Day Bill |
| CUSIP | 912797RD1 |
| Issue Date | 2025-09-23 |
| Maturity Date | 2025-10-21 |
| Price | 每USD 100面值约USD 99.686 |
| High Rate | 4.04% |

这项证券的义务主体是美国财政部. 持有USD 100面值，就取得到期收取USD 100的权利；国库券期间没有另付票息. CUSIP识别具体证券，发行日与到期日确定这次发行的28天期限. 表中的Price按每USD 100面值报价，所以面值既是到期付款的计量单位，也是读懂报价的基数.[^TB-PRICE]

购买人交付资金，财政部承担未来支付义务，这构成债权融资. 面值说明这笔债权有多大；买入价格说明取得它要付多少钱. 本次发行价格低于面值，两者的差额在持有到期时构成利息收入.

<span id="m01-three-levels"></span>
## 二、价格与持有现金流

设购买USD 10 K面值并持有到期，暂不计费用. 公告的High Rate采用国库券贴现报价惯例：以面值为基数，按360天计算年化贴现额. 令面值为$F$、年化贴现率为$d$、期限天数为$n$，取得成本为[^TB-PRICE]

$$
\begin{aligned}
C&=F\left(1-d\frac{n}{360}\right)\\
 &=10{,}000\left(1-\frac{4.04}{100}\frac{28}{360}\right)\\
 &\approx9{,}968.578\text{ 美元}.
\end{aligned}
$$

到期收到USD 10 K，与取得成本相差USD 31.422. 这28天的持有期回报率以实际投入资金为分母：

$$
R=\frac{F-C}{C}\approx0.315\%.
$$

4.04%和0.315%分别使用面值与投入资金作分母，分别覆盖年化报价期间与28天持有期间. 比较收益率时，分母和期间都要一致. 页面数值最多显示三位小数，计算使用未舍入输入.

再设这笔USD 10 K面值的债权提前按每USD 100面值USD 99.80转让. 新买方支付USD 9,980，随后持有到期可取得USD 10 K，两者相差USD 20. 转让改变了持有人和取得价格，财政部在2025年10月21日按面值付款的条款仍然相同. 原买方的现金路径以转让收款结束，新买方的现金路径从支付转让价开始；两人的收益要分别从各自的买入和退出金额计算.

<span id="m01-rights-comparison"></span>
## 三、股权与或有权利

国库券的到期日期和付款金额已经写入条款. 普通股把投资者的所得与企业的分配和剩余资产联系起来，同时赋予相应的治理权利；阅读股份时，证券类别也成为权利识别的一部分.

<span id="CASE-MA-ALPHABET-RIGHTS-2025"></span>

Alphabet的2025年报将Class A和Class C的交易代码分别列为GOOGL和GOOG. A类通常每股一票，C类除法律要求外通常没有投票权.[^GOOG-10K] 两类股份的股息都取决于董事会宣派及相关优先权；清算时，证券说明规定C类先转换为A类，再按相应顺位参与剩余资产分配.[^GOOG-RIGHTS] 因此，投票权回答股东如何参与公司治理，股息和清算条款回答股东在什么条件下取得分配. 普通股没有国库券式的到期还本安排，买入价格也不能直接给出未来分配金额.

<span id="CASE-MA-SPX-SPEC-2026"></span>

期权把支付与约定条件联系起来. SPX看涨期权以标普500指数为结算参照，采用欧式行权和现金结算，乘数为USD 100/指数点. 令$K$为执行价、$I_T$为该系列规定的到期结算值，一份看涨期权对应的现金支付为

$$
X_T=100\max(I_T-K,0)\text{ 美元}.
$$

当$I_T\le K$时，买方可让期权到期而不行权；当$I_T>K$时，买方取得差额支付. 这项选择使买方取得上行支付而不承担对称的下行支付，卖方则承担相应履约义务，买方为取得这项权利支付权利金.[^OCC] 具体系列还决定结算值的取法：标准SPX使用成分股开盘价格计算，SPXW使用相应收盘价格计算；行权现金在到期后的下一个营业日交付.[^SPX]

若一份合约的教学权利金报价为4点，取得成本就是$4\times100=400$美元，未计费用. 这笔支出在买入时发生，$X_T$则由到期结算值决定. 忽略资金时间成本且持有到期，买方盈亏为$X_T-400$；支付为正仍可能不足以覆盖买入成本. 指数在这里决定支付数额，指数的成分公司不因此向期权持有人支付这笔结算款.

| 对象 | 持有人权利 | 付款条件与时间 | 数量与报价单位 |
|---|---|---|---|
| 912797RD1国库券 | 对美国财政部的面值债权 | 2025-10-21到期付款 | 美元面值；每USD 100面值报价 |
| Alphabet A/C股份 | 相应类别的治理、股息及清算分配权 | 股息宣派、清算及相关顺位条件 | 股，并保留股份类别 |
| SPX看涨期权 | 按结算值与执行价之差取得或有支付 | 具体系列规定结算值和行权现金交付日 | 份；USD 100/指数点 |

<span id="m01-guided-use"></span>

<div data-experiment-slot="INT-M01-RIGHTS"></div>

在交互中改变国库券价格、Alphabet股份类别或SPX合约数量，分别观察取得成本、治理权利和权利金金额怎样变化.

<span id="m01-exercises"></span>
## 四、练习与解析

**取得价格与转让.** 甲按上述拍卖价格取得USD 10 K面值的912797RD1，后来按99.80转给乙，暂不计费用. 甲的转让价差是多少？乙持有到期所得的价差是多少？两笔价差相加后，与原发行价至面值的差额有什么关系？

**解析.** 甲取得USD 9,980的转让款，减去成本USD 9,968.578，价差约USD 11.422；乙的价差为USD 20. 两者合计约USD 31.422，恰好等于面值减原取得成本. 转让价决定这段总差额在两名持有人之间如何分配，债务人的到期付款仍为USD 10 K.

**表决与分配.** 从GOOGL换成相同股数的GOOG，哪些权利需要重新核对？没有投票权能否推出没有股息和清算分配权？

**解析.** 应核对股份类别的Voting Rights、Dividends和Liquidation Rights. A/C的通常投票安排不同；C类仍按证券说明参加股息和清算分配. 治理权利与经济权利由各自条款规定.[^GOOG-RIGHTS]

**或有支付与盈亏.** 买入一份权利金4点的SPX看涨期权. 教学情景中，到期结算值高于执行价3点. 未计费用和资金时间成本，结算收入与盈亏各是多少？

**解析.** 结算收入为$3\times100=300$美元，盈亏为$300-400=-100$美元. 期权取得了正的结算支付，但支付低于取得成本. 两个数分别来自合约支付规则和买入价格.

[^OS17]: **Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax，Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital**. 第3版，2022-12-14.[原文](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital). 定位：§17.1，尤其 Borrowing: Banks and Bonds、Corporate Stock and Public Firms、How Firms Choose between Financial Capital Sources.

[^TB-AUC]: **U.S. Department of the Treasury，Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1**. 2025-09-18公告；发行2025-09-23；到期2025-10-21. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf). 定位：单页表格中的 Security Term、CUSIP、Issue Date、Maturity Date、High Rate、Price.

[^TB-PRICE]: **TreasuryDirect / Bureau of the Fiscal Service，Understanding Pricing and Interest Rates**. 现行网页，2026-09-21访问.[原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/). 定位：Bills 小节及贴现公式.

[^GOOG-10K]: **Alphabet Inc.，Alphabet Inc. 2025 Form 10-K**. 报告期截至2025-12-31；2026年提交. [原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm). 定位：Item 5，印刷p.25；Note 11 Stockholders’ Equity，印刷pp.78–79.

[^GOOG-RIGHTS]: **Alphabet Inc.，Description of Securities — Exhibit 4.20**.2023年提交的证券说明，由2025年报引用.[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm). 定位：Voting Rights、Dividends、Liquidation Rights、Conversion、Equal Status.

[^SPX]: **Cboe，SPX Options Fact Sheet**. 两页事实表，页脚©2026.[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 定位：PDF pp.1–2，尤其第2页 SPX / SPXW 规格表.

[^OCC]: **The Options Clearing Corporation，Characteristics and Risks of Standardized Options**. June 2024.[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 定位：Ch.I印刷pp.3–5；Ch.II印刷pp.6–8、11–12；Ch.IX印刷pp.58–59.

## Sources
- [Alphabet Inc. 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): 股份类别、交易代码、投票权差异和股东权益披露.
- [Description of Securities — Exhibit 4.20](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm): 不同类别股份的经济权利、治理权利及其适用条件.
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital): 融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX与SPXW均为欧式、现金结算，合约乘数为每点100美元. 规格列出最小报价增量，并区分传统SPX的AM结算与SPXW的PM结算；现金在到期后相应营业日交付.
- [Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf): 具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.
- [Understanding Pricing and Interest Rates](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/): 国库券贴现率、面值、天数与价格的关系；不把贴现率当持有期回报率.

## Content relations
```json
[
  {
    "from": "zh-financial-claims",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-TBILL-912797RD1",
    "reason": "用具名发行拆开面值、价格与条件所得"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-ALPHABET-RIGHTS-2025",
    "reason": "同一公司不同股份类别"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-SPX-SPEC-2026",
    "reason": "参照对象与履约权利分开"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-TB-AUC",
    "reason": "发行日期、面值报价及期限",
    "scope": "2025-09-18公告单页",
    "at_section": "m01-bill-case"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-GOOG-RIGHTS",
    "reason": "投票、分配及清算的类别条件",
    "scope": "Voting / Dividends / Liquidation Rights",
    "at_section": "m01-rights-comparison"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "现金结算与乘数",
    "scope": "2026事实表第2页",
    "at_section": "m01-rights-comparison"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 1/17
把资产的约定、实际所得和市场价格分别说清.
认识了权利之后，接着追踪发行与交易中的资金去向.
Next: [发行、交易与市场参与者](https://ou-liu-red-sugar.github.io/zh/notebook/issuance-trading-participants/)
