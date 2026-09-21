# 基金、ETF与指数

从VTI的份额类别与更名文件出发，计算同类别NAV，重建双向申赎的报价、现金和深度约束，并区分费用与分配.

Entry: zh-m08 | Node: M08 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教 M08《基金、ETF与指数》，版本2026-09-21-MB-review-v2. 先实际读 required_readings 的完整单元；按版本、范围、用途记录，runtime_reading_log由本次读取填写，不预设完成. 重点是VTI四月概要招募书加七月补充文件，而不是只查当前产品名. 同会话已有的完整同版本单元可复用. 读取失败先找可核实的正式同版入口；关键单元仍缺就明确受阻任务，不凭记忆补写.
先让读者画“投资者持有ETF份额—基金持有资产—基金策略跟踪指数”与二级买卖；现金不能指向指数账户. 要求区分法律载体、交易方式、主动/指数策略、AP权限和做市职责. 更名不能被说成换了一套方法、换了法律基金实体或证明当天持仓重构；VTI真实申赎单位在本包未采用.
再给单类别教学基金，用同类、同一时点的净资产除份额，故意提供全基金3,000,000与类别10,000份检测错配. 推导(W+Bn)/(S+B)=n，先申购到60,000份再赎回50,000；不能从原10,000份直接赎回或计算0/0.
让读者先解释中间价溢价，然后明确本实验只做basket/in-kind教学分支，再用ETF bid/ask及篮子买入成本/卖出所得重建两方向条件差额；50000是通用教学单位. 现金型申赎与custom basket不在本实验范围. 检查资格、窗口、同步、两腿深度和先买后卖的现金，条件缺失不得输出已实现利润. 把6500改算为3500，并分解多算的3000；费用0.19为零差额，宽价差仍有参考溢价却可为负差额.
区分运营费、跟踪差、执行成本和分配；已扣费用的NAV回报不得再扣一遍. 研究分支仅在读者选择时启用，并先读MBC-08指定§2与§4.1–4.2及图脚注. 只讨论2018–2022样本和两类数据；要讨论估计结果，必须另读§3假设、§5变量和§6对应结果，不从本包研究卡推断因果.
最后换一份ETF或一组报价做迁移. 通过标准是对象、版本、同口径NAV、两方向现金与约束全部能独立重建；只报一个溢价率不算掌握.

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
      "source_id": "MBC-04",
      "title": "Vanguard Total Stock Market ETF — Summary Prospectus",
      "authors": [
        "Vanguard Index Funds"
      ],
      "version": "2026-04-28基础版；配合7月补充文件",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/36405/000003640526000197/f44849d1.htm"
      },
      "required_unit": {
        "locator": "封面/Investment Objective；Fees/Example p.1；Principal Strategy p.2；ETF/AP风险pp.3–4；Purchase and Sale p.6",
        "scope": "各指定单元完整正文和费用例假设；概要招募书不是完整法定招募书/SAI",
        "purpose": "确认VTI类别、抽样、费用及零售/AP不同交易权限"
      },
      "supports": "VTI是基金的ETF类别；0.03%费率、5%假设费用例、抽样、二级交易与AP权限. 不是完整法定招募书/SAI或实际交易篮子.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MBC-05",
      "title": "Supplement Dated July 29, 2026",
      "authors": [
        "Vanguard Index Funds"
      ],
      "version": "2026-07-29生效",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/36405/000003640526000386/f45788d1.htm"
      },
      "required_unit": {
        "locator": "两组Important Changes、基金/ETF类及目标指数更名表",
        "scope": "补充文件全文（Prospectus/Summary与SAI两组）",
        "purpose": "建立更名时间线，保留目标、策略、政策不变的限制"
      },
      "supports": "基金、ETF类别及目标指数更名；目标、策略、政策不变. 不支持换方法、调仓或改变投资目标.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MBC-06",
      "title": "Updated Investor Bulletin: Exchange-Traded Funds (ETFs)",
      "authors": [
        "SEC Office of Investor Education and Advocacy"
      ],
      "version": "2023-02-23",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
      },
      "required_unit": {
        "locator": "What is an ETF；similar/different；How do ETFs work；风险/成本含Bid-ask spread",
        "scope": "上述完整单元及50000份例；法律载体范围和主动/指数区分一并读",
        "purpose": "四层对象、双向申赎、NAV和二级报价；不把通用数量写成VTI规格"
      },
      "supports": "投资者教育说明：主动/指数、NAV、零售/AP路径、双向申赎、通用50000份例和价差；不是SEC规则或VTI单位.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MBC-07",
      "title": "Morningstar Market Indexes",
      "authors": [
        "Morningstar Indexes"
      ],
      "version": "网页无独立版本号；访问2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://indexes.morningstar.com/morningstar-market-indexes"
      },
      "required_unit": {
        "locator": "Key Features；The Total Market. One Index.；Size Breakpoints",
        "scope": "三个完整说明单元；不从网页延伸精确阈值或未读方法文件",
        "purpose": "指数是规则和测量对象；区分名称、设计概述与方法版本"
      },
      "supports": "市场覆盖、按市值覆盖分段和实施设计；不是完整方法手册，不支持精确门槛、重组时间或持仓事实.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "MBC-08",
      "title": "ETF (Mis)pricing — FCA Occasional Paper 68",
      "authors": [
        "Andrei Kirilenko",
        "Wladimir Kraus",
        "Oliver Linton",
        "Mingmei Xiao"
      ],
      "version": "May 2025",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fca.org.uk/publication/occasional-papers/op68-etf-mispricing.pdf"
      },
      "required_unit": {
        "locator": "§2 印刷pp.6–7 / 物理pp.7–8；§4.1–4.2 印刷pp.25–26 / 物理pp.26–27",
        "scope": "指定完整单元、图2、图5、脚注5；只采用机制与样本/数据结构",
        "purpose": "用一级申赎与二级报告两类证据区分AP库存和实际申赎；不教未读模型/回归"
      },
      "supports": "本篇只采用研究问题、AP角色与两市场数据结构、样本身份；不讲模型、回归系数或因果结论. 结论段仅作下一步读物导航.",
      "fallback_source_ids": [],
      "branch": "ap-research-data"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MB-review-v2",
    "vti": {
      "identity": "reported",
      "source_ids": [
        "MBC-04",
        "MBC-05"
      ],
      "ticker": "VTI",
      "base_date": "2026-04-28",
      "rename_date": "2026-07-29",
      "base_fund": "Vanguard Total Stock Market Index Fund",
      "new_fund": "Vanguard Morningstar Total Stock Market Index Fund",
      "base_etf": "Vanguard Total Stock Market ETF",
      "new_etf": "Vanguard Morningstar Total Stock Market ETF",
      "base_index": "CRSP US Total Market Index",
      "new_index": "Morningstar US Total Market Index",
      "change_type": "fund/ETF-class/target-index name changes",
      "objective_strategy_policy_unchanged": true,
      "annual_expense_ratio": 0.0003,
      "official_example": {
        "initial": 10000,
        "assumed_annual_return": 0.05,
        "one_year_cost": 3
      },
      "real_creation_unit_size": null,
      "real_holdings_date": null,
      "real_basket": null,
      "nav_scope": "ETF份额类别；本包没有计算真实VTI NAV",
      "legal_fund_entity_change_not_inferred": true,
      "benchmark_methodology_change_not_inferred_from_supplement": true,
      "holdings_rebalance_not_inferred_from_supplement": true
    },
    "fund": {
      "identity": "synthetic",
      "fund_id": "SIM-MB-SINGLE",
      "asset_scope": "single-class-A",
      "share_scope": "single-class-A",
      "asset_time": "teaching-t0",
      "share_time": "teaching-t0",
      "assets": 1010000,
      "liabilities": 5000,
      "shares": 10000,
      "holdings": [
        {
          "label": "证券甲",
          "quantity": 4000,
          "price": 100
        },
        {
          "label": "证券乙",
          "quantity": 2000,
          "price": 200
        },
        {
          "label": "现金",
          "amount": 210000
        }
      ],
      "q_create": 50000,
      "q_redeem": 50000,
      "distribution_per_share": 2,
      "distribution_cash_available": 210000
    },
    "ap": {
      "identity": "synthetic",
      "unit_identity": "50000份为SEC通用教学例，不是VTI规格",
      "unit_size": 50000,
      "blocks": 1,
      "cash": 6000000,
      "other_cost_per_share": 0.12,
      "etf_bid_depth": 50000,
      "etf_ask_depth": 50000,
      "basket_buy_capacity": 50000,
      "basket_sell_capacity": 50000,
      "authorized": true,
      "window_open": true,
      "synchronized": true,
      "sequence": "先买入并预留费用，再申赎，再卖出；所有报价在此教学周期有效；不借款、不卖空、不提前使用卖出款",
      "scenarios": {
        "premium": {
          "label": "溢价快照 / 申购",
          "side": "create",
          "etf_bid": 100.73,
          "etf_ask": 100.77,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "initial"
        },
        "discount": {
          "label": "折价快照 / 赎回",
          "side": "redeem",
          "etf_bid": 100.23,
          "etf_ask": 100.27,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "after_creation"
        },
        "wide": {
          "label": "仍有中间价溢价 / 宽价差",
          "side": "create",
          "etf_bid": 100.55,
          "etf_ask": 100.95,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "initial"
        }
      },
      "primary_market_branch": "basket/in-kind teaching branch",
      "cash_creation_redemption": "out_of_scope_not_modeled",
      "custom_basket": "out_of_scope_not_modeled"
    },
    "research": {
      "source_id": "MBC-08",
      "start": "2018-01",
      "end": "2022-10",
      "etfs": 128,
      "equity": 50,
      "bond": 78,
      "scope": "主要在LSE交易的实物ETF；非VTI实证",
      "adoption": "研究问题与数据结构，不采用未复现模型/回归结果"
    }
  },
  "protocol": "先实际取得指定完整单元再教学；编辑取得记录不能冒充Agent本次已读. 选读分支启用时其指定单元转为必读."
}
```

## Supplied entry
买入一份 ETF 时，我们到底买到了什么？它为什么既有基金净值，又有交易价格；为什么别人可以拿一篮子证券去换 ETF 份额，而零售投资者通常只能在市场上买卖？本篇用 VTI 的正式文件辨认结构，再把一个单类别教学基金的净值、申赎和报价分别算清.

<a id="m08-structure"></a>
## 一、四个对象，不能串成一条“钱流进指数”的线

**基金是集合投资的载体，基金份额是投资者持有的权利，底层证券是基金投资组合中的资产，指数则是按规则构造的测量与比较对象.** 这四个对象有关联，却不处在同一个资产账户里.

| 关系 | 箭头应当怎样读 | 不能怎样读 |
|---|---|---|
| 投资者 → ETF 份额 | 投资者持有该份额 | 直接分别登记了组合中每只股票 |
| 基金 → 底层证券 | 基金持有或投资这些资产 | 指数公司替投资者保管这些股票 |
| 基金策略 → 目标指数 | 策略试图跟踪其表现 | 资金最后汇入了“指数账户” |
| 买方 ↔ 卖方 | 二级市场换手，现金与已有份额交换 | 基金一定同步发生申购或赎回 |

还要沿三个维度读产品：法律载体是什么，份额怎样交易，投资策略是主动还是指数跟踪. ETF 描述的是一种交易与产品结构，不能从一个指数 ETF 推出所有 ETF 都是指数基金. SEC 的教学公告同时讨论主动和指数 ETF，并将其范围限定在特定注册投资公司形式，不能将所有交易所交易产品都混进来. [^MBC-06]

这一结构解决了两个不同需要：基金把许多投资者的资金组织成一个组合；二级市场允许份额在投资者之间换手，不必让每次零售买卖都直接变成基金底层资产的买卖. 但这也留下一个问题：既然市场上的份额价格与基金的资产价值分别形成，二者靠什么联系？答案要等我们先把文件、净值和交易条件读清以后再给.

<a id="case-mb-vti-20260729"></a>
<a id="m08-vti-version"></a>
## 二、先读文件链：VTI 是一类份额，2026 年 7 月发生的是更名

2026 年 4 月 28 日的 Summary Prospectus 把 VTI 说明为 Vanguard Total Stock Market Index Fund 的 **ETF 份额类别**. 这不是一句装饰性称谓：后面算这一类份额的 NAV 时，不能把整个多类别基金净资产除以只有 ETF 类别的股数. [^MBC-04]

该概要招募书还说明其采用指数化投资，使用抽样方式近似目标指数的关键特征；“跟踪指数”因此不等于“在每个时刻逐只、逐权重复制整个指数”. Morningstar 对这一指数体系的官方介绍强调可投资市场覆盖、市值覆盖而非固定成分数量，以及实施与换手的考虑. 这里使用的是设计概述，精确纳入门槛和重组时点仍须读具体方法文件，不能从概述推导. [^MBC-04][^MBC-07]

同年 7 月 29 日的补充文件因 Morningstar 收购 CRSP 而更改名称，并明确基金目标、策略和政策不变. VTI 的文件卡应同时保留两个时点：[^MBC-05]

| 字段 | 4 月 28 日基础文件 | 7 月 29 日起的名称 |
|---|---|---|
| 基金 | Vanguard Total Stock Market Index Fund | Vanguard Morningstar Total Stock Market Index Fund |
| ETF 类别名称 | Vanguard Total Stock Market ETF | Vanguard Morningstar Total Stock Market ETF |
| 目标指数名称 | CRSP US Total Market Index | Morningstar US Total Market Index |
| 本次变更的性质 | 基础版本 | 名称变更；目标、策略、政策不变 |

补充文件确认的是**基金名称、ETF 类别名称和目标指数名称发生更名，目标、策略和政策不变**. 基金名称、指数名称、方法版本、法律载体和实际持仓日期应作为不同字段记录；该文件本身没有给出同日方法论或持仓实质变化. 后面的数值采用教学基金参数，而非 VTI 某一天的真实交易篮子.

再看谁可以做什么. VTI 文件中的零售交易路径是通过券商在二级市场买卖；直接与基金进行大额份额申赎的是获授权的机构，即 Authorized Participant，简称 AP. AP 有相应权限，不表示必须随时申赎. 做市商提供二级报价的职责和 AP 的一级申赎权限也不是同一个身份，虽然可以由同一家机构承担. [^MBC-04]

<a id="m08-nav-price"></a>
## 三、先算净值：一类份额的分子，只能配同一类份额的分母

**单位净值（NAV）是同一时点、同一份额类别归属的净资产，除以该类别在外份额数.** 多类别基金须按其规则分配共同资产、负债和类别特有项目；不能为了方便，混用整个基金和其中一类的数字. 单类别基金才可以直接写成 $(A-L)/S$. [^MBC-06]

我们设立一个只有一种份额类别的合成基金，所有估值均在教学时点 $t_0$，美元为报告币. 它的资产表如下：

| 项目 | 教学持有量与估值 | 美元金额 |
|---|---|---:|
| 证券甲 | 4,000 单位 × 100 | 400,000 |
| 证券乙 | 2,000 单位 × 200 | 400,000 |
| 现金 | — | 210,000 |
| 总资产 $A$ | — | 1,010,000 |
| 负债 $L$ | — | 5,000 |
| 净资产 $W=A-L$ | — | 1,005,000 |
| 在外份额 $S$ | 10,000 份 | — |

因此 $n=W/S=100.50$ 美元/份. 这里的甲、乙不是 VTI 持仓，$t_0$ 也不是某个真实行情时间.

如果同一教学时点 ETF 的 bid/ask 是 100.73/100.77，二者中间价 $m=100.75$，相对 NAV 的**中间价溢价**为

$$
\pi_m=\frac{m-n}{n}
=\frac{100.75-100.50}{100.50}
\approx0.2488\%=24.88\text{ 个基点}.
$$

这还不是任何人已经赚到的收益. 100.75 是本例明定的报价中间价，不是最后成交价，更不是能够卖出 50,000 份的报价. 要判断交易差额，卖出应看 bid，买入应看 ask，还要看对应数量和另一条交易腿. 若 NAV 是昨晚数据、报价是今天盘中数据，还须先识别不同时间的估值变化，不能把计算出来的偏离全部叫错价.

现在让基金按公平价值接纳新投资，看看新增份额本身会不会让老持有人凭空变富. 使用**通用教学单位** $B=50{,}000$ 份；这个数量来自 SEC 的机制例子，不是本篇核定的 VTI 申赎单位. 假设 AP 交来经基金接受、含必要现金调整的篮子，按同一估值口径价值为 $Bn=5{,}025{,}000$ 美元，无费用由现有基金承担. [^MBC-06]

$$
n_{\mathrm{after}}=\frac{W+Bn}{S+B}
=\frac{Sn+Bn}{S+B}=n.
$$

| 基金状态 | 净资产（美元） | 份额 | NAV（美元/份） |
|---|---:|---:|---:|
| 申购前 | 1,005,000 | 10,000 | 100.50 |
| 接纳篮子、新发 50,000 份后 | 6,030,000 | 60,000 | 100.50 |
| 从上述状态赎回 50,000 份后 | 1,005,000 | 10,000 | 100.50 |

第三行是从第二行开始，不是让只有 10,000 份的基金直接赎回 50,000 份. 赎回拿走价值 $Bn$ 的篮子，销掉 $B$ 份，在 $B<S_{\mathrm{before\ redeem}}$ 的本课范围内，同样保持单位净值. 零售换手则既不增加基金资产，也不改变总份额.

这条守恒依赖于同口径公允价值交换和费用假设；若基金承担交易成本却没有补偿，现有份额可能承担损耗. **新增份额并不自动稀释 NAV，关键是资产与份额是否一起、按什么价值进入.** 这与股票增发中“不能只看分母”的道理相通.

<div data-experiment-slot="EXP-MB-M08-NAV"></div>

先观察默认三行，再把申购份数改为 10,000：净资产增至 2,010,000，份额增至 20,000，NAV 仍是 100.50. 接着试着赎回全部份额：在本课只研究持续经营且剩余份额大于零的模型中，应停在范围边界，而不是算出 $0/0$.

<a id="m08-creation-redemption"></a>
## 四、把套利路径算完整：溢价看申购，折价看赎回，但两边都要真的付钱

AP 可以在相应规则下把一组交付资产与 ETF 份额进行一级市场申赎，二级市场则交易份额. VTI 概要文件说明 AP 的大额交易通常以指定证券篮子进行；SEC 的通用教学材料同时指出，ETF 的 creation/redemption 安排可能涉及预先规定的证券篮子，也可能在相应产品安排下使用现金等价.[^MBC-04][^MBC-06]

**下面只展开 basket / in-kind 的教学分支.** 份额相对篮子较贵时，路径是买篮子、申购份额、卖出份额；份额相对篮子较便宜时，路径是买份额、赎回篮子、卖出篮子. 现金型申赎、custom basket、具体税务与每日实际 basket 文件属于其他分支，因此下面公式只适用于这里设定的路径；二级市场交易也不自动触发一级申赎.[^MBC-06]

我们把每个报价都标上方向. 设 $b_E,a_E$ 为 ETF 的 bid/ask，$a_B$ 为买齐一份 ETF 所对应篮子所需的单位成本，$b_B$ 为卖出对应篮子可得的单位金额. 两者已经包含底层买卖价差；另用 $f$ 表示每份对应的其他费用和融资、对冲等成本汇总，不能再次重复扣同一价差. 在所有腿按这些价格、数量完成的条件下：

$$
\Delta_{\mathrm{create}}=B(b_E-a_B-f),\qquad
\Delta_{\mathrm{redeem}}=B(b_B-a_E-f).
$$

这些是**条件现金差额**，不是用 NAV 自己构造出来的利润. 篮子的公允估值 $n$ 与实际买入成本 $a_B$、卖出所得 $b_B$ 各自承担不同职责.

下面是两个独立的合成报价情景，均设篮子买入单位成本 100.54、卖出单位所得 100.46、其他成本 0.12/份. 报价在全部步骤期间保持有效，每条腿可覆盖 50,000 份；AP 具备资格、窗口开放，并有 6,000,000 美元现金先完成买入与费用支付. 这是一个条件齐全的算例，非 VTI 历史成交.

| 条件与结果 | 溢价情景：申购方向 | 折价情景：赎回方向 |
|---|---:|---:|
| ETF bid / ask | 100.73 / 100.77 | 100.23 / 100.27 |
| 中间价相对 NAV | +24.88 基点 | −24.88 基点 |
| 必须先买的那条腿 | 篮子，5,027,000 美元 | ETF 50,000 份，5,013,500 美元 |
| 另一条腿卖出所得 | ETF 按 bid，5,036,500 美元 | 篮子，5,023,000 美元 |
| 其他成本 | 6,000 美元 | 6,000 美元 |
| 条件净差额 | **3,500 美元** | **3,500 美元** |
| 买入并预留费用所需现金 | 5,033,000 美元 | 5,019,500 美元 |

赎回情景从上节已达到 60,000 份的基金状态开始，赎回后剩余 10,000 份；它不是与溢价情景同时发生的两笔无风险交易.

沿申购路径，先花 5,027,000 买到篮子，再交给基金；基金按本例共同估值确认 5,025,000 的净资产，发出 50,000 份；AP 以 bid 卖出，得到 5,036,500. 篮子购入成本高于估值的 2,000 美元由 AP 承担，并没有凭空添加到基金 NAV. 其余费用再扣 6,000，净差额才是 3,500.

若偷用 $(100.75-100.50)\times50{,}000-6{,}000$，会得到 6,500. 多出的 3,000 来自两处：卖出价不是中间价，少收 $0.02\times50{,}000=1{,}000$；篮子买入成本不是 NAV，再多付 $0.04\times50{,}000=2{,}000$. 这个对照说明为什么“24.88 基点溢价”不能直接贴成套利收益率.

<div data-experiment-slot="EXP-MB-M08-AP"></div>

**检验约束比计算最后一行更早.** 将报价深度改为 20,000 份后，就没有依据把 50,000 份全部乘同一价格；将 AP 现金改为 5,000,000，申购路径还差 33,000；将申赎资格关闭、窗口关闭或报价改为不同步，也不能输出已完成循环. 实验不自动借钱，不外推未知深度，不用今天卖出的收入假装支付更早的买入.

即使条件净差额为正，实际 AP 仍须比较库存、风险和资金安排；其申赎权限不是必须纠偏的义务. 若参与者实施申购并卖出份额，会增加份额供给；赎回则减少在外份额. 这提供价格联系的机制，但不是“按钮按下以后价格必定等于 NAV”的等式. [^MBC-04]

<a id="m08-costs-research"></a>
## 五、费用、分配和跟踪，分别影响哪一个结果？

VTI 基础文件列示年运营费率 0.03%；官方例子在投入 10,000 美元、每年回报 5%、费率不变等假设下，给出第一年费用约 3 美元. 这不等于每个账户固定扣 3 美元，费用例也不包括券商佣金等所有交易成本. [^MBC-04]

我们可以把三种比较并排放置：**基金总回报与指数总回报之差**反映跟踪结果；**ETF 市场价格与同口径 NAV 的偏离**反映份额交易估值；**投资者实际成交与其选择的价格基准之差**反映执行成本. 三者可以同时存在. 若基金 NAV 总回报已经扣过运营费用，再从这个回报中扣一次 0.03%，就是重复扣除. 比较跟踪表现时，日期、币种和分配再投资口径也必须一致.

现金分配同样不是额外造出的收益. 在上节单类别基金里，另设一次立即支付的每份 2 美元分配，没有其他变动. 10,000 份共付出 20,000，净资产降至 985,000，NAV 为 98.50. 原持有 100 份的人，剩余份额价值 9,850 加现金 200，仍为 10,050. 这个模型没有套用任何 VTI 实际分配日或金额. 收益比较应计入分配，不能只拿分配后的价格与此前价格相减.

<a id="m08-research-reading"></a>
<details>
<summary>选读：为什么研究 AP 时不能只看 ETF 价格图？</summary>

Kirilenko、Kraus、Linton、Xiao 的 FCA Occasional Paper 68（2025 年 5 月）研究 AP 库存与 ETF 定价. 其数据单元把两家发行人的申赎记录和 FCA 二级交易报告连接起来，样本为 2018 年 1 月至 2022 年 10 月的 128 只主要在 LSE 交易的实物 ETF，其中 50 只股票型、78 只债券型. [^MBC-08]

本篇借用的是这个**提问与数据结构**：一位参与者在二级市场卖出 ETF 后，可能通过已有库存履约，也可能继续申购补库存；仅看成交价格，不能区分两条路径. 请对照论文 §2 的交易流程图与 §4.1–4.2 的两类数据，指出哪个数据源能帮助识别直接申赎，哪个帮助识别二级买卖.

这不是 VTI 的实证检验，本篇也没有借一张研究卡教授论文 §3、§5 的模型或变量构造，更没有把“库存解释一切”当作结论. 要讨论其估计系数或因果解释，须进一步读相应设定、变量和结果，而不是从概要跳过去.

</details>

<a id="m08-exercises"></a>
## 六、换一只基金，仍按同样的次序读

### 题一：名字变了，就说明换指数策略了吗？

4 月文件写 CRSP US Total Market Index，7 月补充文件写 Morningstar US Total Market Index. 能否据此说 VTI 改用了另一种选股方法？

**解析.** 不能. 补充文件说明这是基金、ETF 类别和目标指数的名称变更，并保留目标、策略、政策. 名称时间线应更新，但方法变更和具体调仓需要另外的文件证据. [^MBC-05]

### 题二：类别错配会造成什么错误？

设一只多类别基金总净资产 3,000,000 美元，其中 ETF 类别归属净资产 1,005,000，ETF 类别在外 10,000 份. 有人算 NAV 为 300 美元，并认为 100.75 的市场价是巨大折价. 错在哪里？

**解析.** 分子用了全基金，分母只用 ETF 类别. 正确类别 NAV 是 100.50，100.75 相对它是约 24.88 基点的中间价溢价. 一次口径错误就能把小幅溢价变成虚构巨额折价；套利计算不能修复前面的对象错误.

### 题三：申购后份额变六倍，老股东被稀释到六分之一了吗？

使用上文 10,000→60,000 份的申购表. 一位一直持有 100 份的人，份额比例下降，但其净值权益是否因此下降？

**解析.** 比例从 1% 降到约 0.1667%，但净资产从 1,005,000 增到 6,030,000，单位 NAV 仍为 100.50，其 100 份仍对应 10,050. 这个结果依赖按同口径价值交入篮子且现有基金不承担未补偿成本. 赎回也要反向带走资产，不能只销份额却把全部净资产留给其余持有人.

### 题四：把 6,500 改成真实方向的条件差额

在溢价快照中，计算 50,000 份申购循环，并说明报价深度只有 20,000 份时该怎么办. 再把其他成本由 0.12 改为 0.19 美元/份.

**解析.** 卖 ETF 用 bid 100.73，篮子买入用 100.54，故差额是 $50{,}000(100.73-100.54-0.12)=3{,}500$ 美元. 深度不足时没有已给数据支持整块执行，不能将同价外推到 50,000，也不能凭空把通用教学申赎单位改成 20,000. 费用改为 0.19 后差额为零；NAV 溢价仍存在，但不再留下这一模型中的正净差额.

### 题五：折价时为什么不能把 ETF 的 bid 当买入价？

在折价快照中，从已在外 60,000 份的状态赎回 50,000 份，重建先后两条腿. 若只有 5,000,000 现金，可以先用未来卖篮子的收入填缺口吗？

**解析.** 买 ETF 需按 ask 100.27 付 5,013,500；加预留费用 6,000，共需 5,019,500，缺 19,500. 模型没有融资，不能用更晚的卖出收入付先前账单. 资金足够且其他条件满足时，赎回篮子卖得 5,023,000，条件差额为 3,500. 基金留下 10,000 份；交易价差属于 AP 的交易账，公平价值申赎本身不把基金 NAV 变成 100.27.

### 题六：零售卖出和分配如何进入你的账？

零售投资者卖出 100 份 ETF，能否认定基金当即卖出相应底层股票？若只是收到每份 2 美元分配，应如何比较前后权益？

**解析.** 二级买卖是买方支付卖方、已有份额转手，不自动要求基金动作；有权限的参与者是否继续申赎，需要另一条证据. [^MBC-06] 在分配教学例中，100 份的剩余净值权益 9,850 加已收现金 200，合计仍为 10,050；把分配忽略，或在净值已经扣除分配后再扣一次，都会算错.

面对下一份 ETF 文件，先辨认载体、类别和版本，再核 NAV 的分子分母；随后才读 bid/ask、篮子和申赎条件，最后比较费用、分配与总回报. 这样，“跟踪某个指数”才从一个标签变成可以检查的结构.

[^MBC-04]: Vanguard Index Funds, *Vanguard Total Stock Market ETF Summary Prospectus*, 2026-04-28. [原文](https://www.sec.gov/Archives/edgar/data/36405/000003640526000197/f44849d1.htm). 定位：Investment Objective；Fees and Expenses / Example（印刷 p.1）；Principal Investment Strategies（p.2）；ETF Share Trading / Authorized Participants（pp.3–4）；Purchase and Sale of Fund Shares（p.6）. 本篇采用概要招募书，不将其称为完整法定招募书或 SAI.
[^MBC-05]: Vanguard Index Funds, *Supplement Dated July 29, 2026*. [原文](https://www.sec.gov/Archives/edgar/data/36405/000003640526000386/f45788d1.htm). 定位：两组 Important Changes 正文、基金/ETF 类别更名表和目标指数更名表. 支持基金、ETF类别和目标指数的名称变更，以及目标、策略、政策不变；不据此证明法律基金实体、指数方法论或实际持仓同步发生实质变化.
[^MBC-06]: SEC/OIEA, *Updated Investor Bulletin: Exchange-Traded Funds (ETFs)*, 2023-02-23. [原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24). 定位：What is an ETF、How are ETFs similar/different、How do ETFs work、风险与 Bid-ask spread. 50,000 为一般 creation-unit 例，不是 VTI 已核单位；通用机制可涉及预先规定的证券篮子或相应安排下的现金等价. 本篇数值实验只实现 basket/in-kind 分支. 公告为投资者教育说明而非规则条文.
[^MBC-07]: Morningstar Indexes, *Morningstar Market Indexes*，网页取得日 2026-09-21. [原文](https://indexes.morningstar.com/morningstar-market-indexes). 定位：Key Features、The Total Market. One Index.、Size Breakpoints. 采用设计概述，不采用未经本篇核读的方法阈值或动态行情.
[^MBC-08]: Andrei Kirilenko, Wladimir Kraus, Oliver Linton, Mingmei Xiao, *ETF (Mis)pricing*, FCA Occasional Paper 68, May 2025. [原文](https://www.fca.org.uk/publication/occasional-papers/op68-etf-mispricing.pdf). 本篇研究入口采用 §2 印刷 pp.6–7（含图2）、§4.1–4.2 pp.25–26（含脚注5和图5）；PDF 物理页分别为7–8、26–27. §7 p.69作为进一步阅读定位，不用它替代模型、变量和回归结果的阅读.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MB-M08-AP",
    "title": "申购与赎回的报价、现金和容量",
    "anchor": "m08-creation-redemption",
    "description": "参考中间价溢价与条件交易差额分开；双向bid/ask、篮子执行价和其他成本均有明确职责.",
    "data_identity": "synthetic basket/in-kind branch, synchronous through whole cycle; no real executions",
    "inputs": {
      "source": "shared_inputs.json: ap.scenarios and fund",
      "unit_size": 50000,
      "unit_identity": "generic SEC example, NOT VTI actual unit",
      "blocks": {
        "default": 1,
        "unit": "integer blocks",
        "range": "positive integer"
      },
      "cash": {
        "default": 6000000,
        "unit": "USD AP free cash"
      },
      "other_cost": {
        "default": 0.12,
        "unit": "USD per ETF share-equivalent",
        "scope": "excludes spreads already in execution quotes"
      },
      "depth": {
        "etf_bid": 50000,
        "etf_ask": 50000,
        "basket_buy": 50000,
        "basket_sell": 50000,
        "unit": "ETF share-equivalents"
      },
      "gates": {
        "authorized": true,
        "window_open": true,
        "synchronized": true
      },
      "scenarios": {
        "premium": {
          "label": "溢价快照 / 申购",
          "side": "create",
          "etf_bid": 100.73,
          "etf_ask": 100.77,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "initial"
        },
        "discount": {
          "label": "折价快照 / 赎回",
          "side": "redeem",
          "etf_bid": 100.23,
          "etf_ask": 100.27,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "after_creation"
        },
        "wide": {
          "label": "仍有中间价溢价 / 宽价差",
          "side": "create",
          "etf_bid": 100.55,
          "etf_ask": 100.95,
          "basket_bid": 100.46,
          "basket_ask": 100.54,
          "fund_stage": "initial"
        }
      },
      "primary_market_branch": "basket/in-kind teaching branch"
    },
    "algorithm": {
      "quote": "mid=(bid+ask)/2; premium_bps=(mid/NAV-1)*10000; diagnosis not executable trade price",
      "create": "buy=B*basket_ask; sell=B*etf_bid; cost=B*f",
      "redeem": "buy=B*etf_ask; sell=B*basket_bid; cost=B*f",
      "funding": "required=buy+cost; only proceed with cash>=required; future sell proceeds not advance funding",
      "quantity": "all B must fit ETF direction depth and basket direction capacity; no interpolation/extrapolation or auto partial unit",
      "eligibility": "AP/window/synchronous all true; otherwise no completion",
      "results": "net=sell-buy-cost; AP_cash_after=AP_cash+net; fair-value fundFlow is separate",
      "fund_stage": "redemption starts from post-creation60,000-share state, not initial10,000",
      "not_applying_when_blocked": "after=null, conditionalNet=null, quote can still display, requiredCash/shortfall as conditional resource need"
    },
    "outputs": {
      "create": {
        "buy": 5027000,
        "sell": 5036500,
        "cost": 6000,
        "required": 5033000,
        "net": 3500,
        "ap_cash_after": 6003500,
        "nav_after": 100.5
      },
      "redeem": {
        "buy": 5013500,
        "sell": 5023000,
        "cost": 6000,
        "required": 5019500,
        "net": 3500,
        "remaining_fund_shares": 10000,
        "nav_after": 100.5
      },
      "wide": {
        "mid": 100.75,
        "reference_premium_bps": 24.875621890547706,
        "net": -5500
      },
      "cash5m": {
        "create_shortfall": 33000,
        "redeem_shortfall": 19500
      },
      "cost_break_even": 0.19
    },
    "boundaries": [
      "Cash creation/redemption and custom baskets are outside this experiment",
      "Real VTI basket and unit remain unknown/not adopted",
      "Synthetic market price not a return guarantee",
      "Reject nonfinite/negative/zero quotes and crossed bid/ask",
      "Reject fractional/zero blocks",
      "Positive reference premium does not imply positive net",
      "All gates enforced before completed account changes; negative net can be calculated but is not recommended",
      "No realized timing risk, stochastic inventory risk, tax, actual venue fees or broker financing modeled"
    ],
    "static_equivalent": {
      "reader_anchor": "m08-creation-redemption",
      "table": "full two-direction cash table and 6,500-versus3,500 decomposition in reader",
      "wide_spread": "bid100.55/ask100.95 keeps mid100.75 but default net=-5,500",
      "stress": "depth20,000 blocks; APcash5m shortages33,000/19,500; no access/window/synchrony stops"
    }
  },
  {
    "id": "EXP-MB-M08-NAV",
    "title": "同类别净值与公平价值申赎",
    "anchor": "m08-nav-price",
    "description": "同一合成类别t0，以公允价值投入/带出篮子，追踪净资产和在外份额；故意类别错配须拒绝.",
    "data_identity": "single-class synthetic fund; generic unit size, no observed VTI NAV or basket",
    "inputs": {
      "source": "shared_inputs.json: fund",
      "assets": 1010000,
      "liabilities": 5000,
      "shares": 10000,
      "asset_scope": "single-class-A",
      "share_scope": "single-class-A",
      "asset_time": "teaching-t0",
      "share_time": "teaching-t0",
      "editable": [
        {
          "key": "q_create",
          "unit": "shares",
          "default": 50000,
          "range": "integer >=0"
        },
        {
          "key": "q_redeem",
          "unit": "shares",
          "default": 50000,
          "range": "integer >=0 and <post-create S"
        }
      ],
      "mismatch_switch": "substitute all-fund assets3,000,000 / liabilities0 and different scope, keep class denominator10,000"
    },
    "algorithm": [
      "validate class/time match",
      "W=A-L; n=W/S, require W>0,S>0",
      "create: basket=B*n; A1=A+basket; S1=S+B; L unchanged",
      "redeem FROM created state: basket=R*n1; A2=A1-basket; S2=S1-R>0",
      "post-flow holdings detail is null/aggregate_only; never carry stale initial holdings as if reconstructed",
      "fund pays no transaction fees in this model; AP costs in separate experiment"
    ],
    "outputs": {
      "initial": {
        "net": 1005000,
        "shares": 10000,
        "nav": 100.5
      },
      "after_create": {
        "net": 6030000,
        "shares": 60000,
        "nav": 100.5,
        "basket_value": 5025000
      },
      "after_redeem": {
        "net": 1005000,
        "shares": 10000,
        "nav": 100.5
      },
      "mismatch": {
        "status": "invalid",
        "after": null
      }
    },
    "boundaries": [
      "Reject time/class mismatch, zero denominator, zero/negative net assets",
      "No redeem all shares or more than available",
      "No claim that VTI has only one class",
      "50,000 is generic teaching quantity",
      "Distributions are separate from creation/redemption"
    ],
    "static_equivalent": {
      "reader_anchor": "m08-nav-price",
      "table": "1,005,000/10,000 → 6,030,000/60,000 → 1,005,000/10,000; all NAV100.50",
      "distribution": "separate initial-state example total20,000, net985,000, NAV98.50; 100 shares value+cash10,050",
      "holdings": "only initial t0 breakdown security甲400,000/乙400,000/cash210,000; not actual VTI holdings"
    }
  }
]
```

## Sources
- [Vanguard Total Stock Market ETF — Summary Prospectus](https://www.sec.gov/Archives/edgar/data/36405/000003640526000197/f44849d1.htm): VTI是基金的ETF类别；0.03%费率、5%假设费用例、抽样、二级交易与AP权限. 不是完整法定招募书/SAI或实际交易篮子.
- [Supplement Dated July 29, 2026](https://www.sec.gov/Archives/edgar/data/36405/000003640526000386/f45788d1.htm): 基金、ETF类别及目标指数的名称变更；目标、策略、政策不变. 不据此推定法律基金实体、指数方法论或实际持仓同步发生实质变化.
- [Updated Investor Bulletin: Exchange-Traded Funds (ETFs)](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24): 投资者教育说明：主动/指数、NAV、零售/AP路径、双向申赎、通用50,000份例和价差；通用机制可涉及证券篮子或相应安排下的现金等价. 不是SEC规则或VTI单位.
- [Morningstar Market Indexes](https://indexes.morningstar.com/morningstar-market-indexes): 市场覆盖、按市值覆盖分段和实施设计；不是完整方法手册，不支持精确门槛、重组时间或持仓事实.
- [ETF (Mis)pricing — FCA Occasional Paper 68](https://www.fca.org.uk/publication/occasional-papers/op68-etf-mispricing.pdf): 本篇只采用研究问题、AP角色与两市场数据结构、样本身份；不讲模型、回归系数或因果结论. 结论段仅作下一步读物导航.

## Content relations
```json
[
  {
    "from": "zh-m08",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m08",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能区分持有的权利与发行人或载体的资产",
    "reason": "份额不是直接登记底层每只证券",
    "status": "external_delivered"
  },
  {
    "from": "zh-m08",
    "relation": "uses_method",
    "to": "zh-m03",
    "reason": "bid/ask方向、给定深度及未成交边界用于AP现金计算",
    "scope": "报价与深度的局部能力，可在本篇短释",
    "status": "external_delivered"
  },
  {
    "from": "m08-nav-price",
    "relation": "compares_with",
    "to": "m05-share-count",
    "reason": "都同时看分子和分母；基金公平值申赎与任意价格股权增发的条件不同"
  },
  {
    "from": "zh-m08",
    "relation": "illustrated_by",
    "to": "case-mb-vti-20260729",
    "reason": "基金、ETF份额类别及目标指数名称的文件链"
  },
  {
    "from": "m08-nav-price",
    "relation": "illustrated_by",
    "to": "EXP-MB-M08-NAV",
    "reason": "同口径NAV和正的剩余份额分母"
  },
  {
    "from": "m08-creation-redemption",
    "relation": "illustrated_by",
    "to": "EXP-MB-M08-AP",
    "reason": "参考价差不等于双向可完成现金差额"
  },
  {
    "from": "m08-vti-version",
    "relation": "supported_by",
    "to": "MBC-04",
    "reason": "该处原始材料支持",
    "locator": "封面/Objective/Strategy/ETF-AP risks/Purchase and Sale",
    "scope": "VTI类别、抽样和权限"
  },
  {
    "from": "m08-vti-version",
    "relation": "supported_by",
    "to": "MBC-05",
    "reason": "该处原始材料支持",
    "locator": "补充文件两组Important Changes与更名表",
    "scope": "更名和目标/策略/政策不变"
  },
  {
    "from": "m08-structure",
    "relation": "supported_by",
    "to": "MBC-06",
    "reason": "该处原始材料支持",
    "locator": "What is an ETF；similar/different",
    "scope": "法律载体、交易方式和策略区分"
  },
  {
    "from": "m08-vti-version",
    "relation": "supported_by",
    "to": "MBC-07",
    "reason": "该处原始材料支持",
    "locator": "Key Features/Total Market/Size Breakpoints",
    "scope": "设计概述，不涉及精确方法规则"
  },
  {
    "from": "m08-creation-redemption",
    "relation": "supported_by",
    "to": "MBC-06",
    "reason": "该处原始材料支持",
    "locator": "How do ETFs work；Bid-ask spread",
    "scope": "通用单位和双向申赎/报价方向"
  },
  {
    "from": "m08-costs-research",
    "relation": "supported_by",
    "to": "MBC-04",
    "reason": "该处原始材料支持",
    "locator": "Fees and Expenses / Example",
    "scope": "0.03%年费和官方例的假设、排除项"
  },
  {
    "from": "m08-research-reading",
    "relation": "supported_by",
    "to": "MBC-08",
    "reason": "该处原始材料支持",
    "locator": "§2 pp6–7；§4.1–4.2 pp25–26及图脚注",
    "scope": "机构流程、样本和两类数据；无估计结果主张"
  },
  {
    "from": "case-mb-vti-20260729",
    "relation": "supported_by",
    "to": "MBC-04",
    "reason": "本例有日期的原始材料",
    "locator": "封面/Investment Objective；Fees/Example p.1；Principal Strategy p.2；ETF/AP风险pp.3–4；Purchase and Sale p.6",
    "scope": "ETF类别及fund/ETF/target-index名称变更文件链；不据此推定方法论/法律载体改变；非实际持仓/NAV/交易篮子"
  },
  {
    "from": "case-mb-vti-20260729",
    "relation": "supported_by",
    "to": "MBC-05",
    "reason": "本例有日期的原始材料",
    "locator": "两组Important Changes、基金/ETF类及目标指数更名表",
    "scope": "ETF类别及fund/ETF/target-index名称变更文件链；不据此推定方法论/法律载体改变；非实际持仓/NAV/交易篮子"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 6/17
区分基金与指数，按双向报价和资金条件重建篮子申赎.
再读一份固定现金流合约，沿同一国债的发行与重开比较取得成本.
Next: [债券的合约现金流与价格](https://ou-liu-red-sugar.github.io/zh/notebook/bond-contract-cashflows-price/)
