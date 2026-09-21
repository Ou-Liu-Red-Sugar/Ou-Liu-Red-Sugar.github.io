# 汇率、跨境经营与国际资金联系

沿功能货币、发票、结算和报表折算追踪外汇暴露，而不是只判断美元涨跌。

Entry: zh-ei11 | Node: EI-11 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-11《汇率、跨境经营与国际资金联系》，采用内容版本2026-09-21-review-v2，当前范围：本篇完整学习单元。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：给出EUR100应收、EUR80应付、同日1.10→1.05，先分开重估两条腿，再说提前支付应付款会改变什么。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：功能货币、报价方向、两腿符号、日期与OCI/交易分别正确；日期不匹配时不得继续套同日净额。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei11",
  "node_id": "EI-11",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "重建同币种同日应收应付的自然匹配，再把交易、经营与折算分开。",
  "required_readings": [
    {
      "source_id": "EIDEF-S04",
      "title": "Lecture 17: Introduction to Open Economy",
      "authors": [
        "Ricardo Caballero",
        "MIT OCW"
      ],
      "version": "14.02, Spring 2023",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/1ciz-6OL2VwZZSmosR8LRidy2fGGsMpkW_transcript.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "转录PDF pp.6、11–12：exchange-rate convention / appreciation-depreciation / relative goods prices",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "报价方向依约定而定；名义汇率与商品价格共同决定商品相对价格。"
      },
      "supports": "报价方向依约定而定；名义汇率与商品价格共同决定商品相对价格。",
      "id": "EI-11-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S06",
      "title": "Expeditors International 2025 Form 10-K",
      "authors": [
        "Expeditors International of Washington, Inc."
      ],
      "version": "FY2025; filed 2026-02-25",
      "access": {
        "kind": "site_body",
        "uri": "https://www.sec.gov/Archives/edgar/data/746515/000119312526071569/expd-20251231.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Item7A，SEC印刷pp.41–42；Note1J/1K，F-13–F-14",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同。假设敏感度不含运输模式变化。"
      },
      "supports": "交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同。假设敏感度不含运输模式变化。",
      "id": "EI-11-READ-2",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei11-fx",
      "status": "teaching_assumption",
      "quote_convention": "USD per EUR",
      "inputs": {
        "eur_receivable": 100,
        "eur_payable_natural_match": 80,
        "initial_usd_per_eur": 1.1,
        "settlement_usd_per_eur": 1.05,
        "same_currency": true,
        "same_recognition_and_settlement_dates_for_match": true,
        "derivative_hedge_control": null
      },
      "outputs": {
        "receivable_transaction_change_usd": -5.0,
        "payable_transaction_change_usd": 4.0,
        "net_transaction_change_usd": -1.0
      },
      "identity": {
        "natural_match_only": true,
        "note": "No futures/forward/option hedge amount is exposed because no contract, strike/forward rate, maturity, or payoff rule is defined."
      }
    },
    "experiments": [
      {
        "id": "exp-ei11-fx",
        "node_id": "EI-11",
        "title": "同币种同日自然匹配",
        "anchor": "ei11-invoice",
        "method": "fx",
        "controls": [
          {
            "key": "receivable",
            "label": "应收（EUR）",
            "default": 100,
            "min": 0,
            "max": 1000,
            "step": 10,
            "kind": "number"
          },
          {
            "key": "payable",
            "label": "应付（EUR）",
            "default": 80,
            "min": 0,
            "max": 1000,
            "step": 10,
            "kind": "number"
          },
          {
            "key": "e0",
            "label": "确认时 USD/EUR",
            "default": 1.1,
            "min": 0.01,
            "max": 10,
            "step": 0.01,
            "kind": "number"
          },
          {
            "key": "e1",
            "label": "结算时 USD/EUR",
            "default": 1.05,
            "min": 0.01,
            "max": 10,
            "step": 0.01,
            "kind": "number"
          }
        ],
        "inputs": {
          "receivable": 100,
          "payable": 80,
          "e0": 1.1,
          "e1": 1.05
        },
        "algorithm": "交易损益R*(e1−e0)与−C*(e1−e0)，净额(R−C)*(e1−e0)。美元功能货币、同一确认/结算时点、欧元量固定；无金融衍生品。",
        "static_equivalent": "100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21。错开日期题另按各自汇率，不能沿用同日净式。",
        "source_ids": [
          "EIDEF-S04",
          "EIDEF-S06"
        ],
        "identity": "teaching_assumption",
        "description": "同币种同日自然匹配",
        "outputs": {
          "receivable_start": 110.00000000000001,
          "receivable_end": 105,
          "payable_start": 88,
          "payable_end": 84,
          "receivable_change": -5.000000000000004,
          "payable_gain": 4.0000000000000036,
          "net_change": -1.0000000000000009,
          "net_start": 22,
          "net_end": 21,
          "net_eur": 20,
          "conditions": "USD functional currency; EUR fixed amounts; same recognition and settlement dates; no derivative contract"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei11-fx",
      "text": "100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21。错开日期题另按各自汇率，不能沿用同日净式。",
      "outputs": {
        "receivable_start": 110.00000000000001,
        "receivable_end": 105,
        "payable_start": 88,
        "payable_end": 84,
        "receivable_change": -5.000000000000004,
        "payable_gain": 4.0000000000000036,
        "net_change": -1.0000000000000009,
        "net_start": 22,
        "net_end": 21,
        "net_eur": 20,
        "conditions": "USD functional currency; EUR fixed amounts; same recognition and settlement dates; no derivative contract"
      }
    }
  ],
  "source_id_aliases": {
    "EIDEF-S10": "BFDE-JEP",
    "EIDEF-S14": "EIBC-S07M",
    "EIDEF-S16A": "EIBC-S05A",
    "EIDEF-S16B": "EIBC-S05B",
    "EIDEF-S21": "EI-S06-M3-202605"
  }
}
```

## Supplied entry
<strong>本篇任务：</strong>把一笔跨境业务拆成交易现金、经营选择和报表折算三层。我们会用同币种、同日期的应收应付完成自然匹配，再带读物流企业的外汇披露。建议学习时间约18分钟。

<a id="ei11-structure"></a>

## 一、先说明货币是怎样进入业务的

一件商品可以在欧洲出售、用美元开票、在亚洲采购，再由另一地的母公司合并报表。销售地区、交易币种、当地记账货币和集团报告货币并不需要相同。要判断汇率影响，我们首先需要画出这些不同角色，而不是从“海外收入占比”直接判断美元涨跌的结果。

**功能货币**描述一个经营主体主要经济环境所使用的货币；**交易币种**属于某笔合同；**报告货币**用于呈现合并报表。同一笔外币应收在功能货币账上可能产生重新计量损益；一家外币功能货币子公司的整套报表换算到集团报告货币，则产生另一类折算关系。Expeditors 的年报分别在会计政策和市场风险中说明这两件事。[^expd]

本文采用 $e=\text{USD/EUR}$，即一欧元能兑换多少美元。$e$ 从1.10降至1.05，表示欧元对美元贬值、美元对欧元升值。若改用每美元可买的欧元数，数值方向会相反。MIT 的开放经济讲义也从明确报价约定开始，再讨论名义汇率与商品相对价格；我们这里始终保持这一报价方向。[^mit17]

<div class="flow">
<div>签约：商品、币种、金额</div><span>形成收付安排</span>
<div>确认：功能货币计量</div><span>汇率可能变化</span>
<div>结算：真正收付现金</div><span>另行处理</span>
<div>合并：报告货币折算</div>
</div>

宏观利率或风险预期可以影响外汇市场，但公司需要付款时面对的仍是具体到期日的合同。解释一笔应收结算，不需要先预测整条宏观汇率路径。

<a id="ei11-invoice"></a>

## 二、一笔应收，以及真正有条件的自然匹配

假设一家美元功能货币企业在时点0确认欧元100应收，确认汇率1.10；到时点1收款时，汇率变成1.05。为单独看汇率，假设合同金额固定、全额收回、没有税费和其他期间价格变化。

确认时账面美元金额是 $100\times1.10=110$；收款时兑换价值是 $100\times1.05=105$。从确认到结算的累计交易汇兑差额为−5美元。若期间有其他结账日，部分损益可能已在中途确认，但两个端点的总变化仍为−5。

现在增加一笔同样在时点0确认、时点1支付的欧元80应付。应付的美元价值从88降至84，企业以较少的美元清偿同一欧元债务，负债端形成+4的汇兑收益。我们先分别计算，而不是一开始便把收付款藏进净额：

| 对象 | 欧元金额 | 确认时美元价值 | 结算时美元价值 | 汇兑损益方向 |
|---|---:|---:|---:|---:|
| 应收资产 | 100 | 110 | 105 | −5 |
| 应付负债 | 80 | 88 | 84 | +4 |
| 同日净收付 | 20 | 22 | 21 | −1 |

令 $R$ 为应收欧元数、$C$ 为应付欧元数，$e_0,e_1$ 为相应汇率，则

$$
\Delta V_R=R(e_1-e_0),\qquad
\Delta V_C=-C(e_1-e_0).
$$

因此自然匹配后的净敏感度为

$$
\Delta V_{\mathrm{net}}=(R-C)(e_1-e_0).
$$

默认值给 $(100-80)(1.05-1.10)=-1$。这不是额外创造了一个金融合约，而是原业务收款和付款方向相反；若把收到的欧元用于同日欧元付款，也就不必为匹配部分另行兑换。

<div data-experiment-slot="exp-ei11-fx"></div>

实验把日期匹配作为明确题设，而不是可忽略的小字。如果80欧元应付提前一个月到期、100欧元收入随后才收回，企业就可能先购入欧元、动用现金或融资。此时仅知道净额20欧元，尚不能计算期间资金需求；先前的净敏感度公式需要对应每个不同的结算汇率。没有给定方向、远期汇率、期限与支付式时，我们也不加入一个含义不明的“对冲数量”。

<a id="ei11-operating"></a>

## 三、从固定发票走向会变化的经营

自然匹配解决的是既定金额下的币种方向。长期经营还允许客户、供应商和企业改变行动。例如美元升值后，美元收入折算增加或减少只是其中一层；客户可能改向本地竞争者采购，供应商可能重新报价，企业可能调整生产布局。

用一个本篇的分析式表达这种区别。若外币销售量为 $q(e)$、外币售价为 $p(e)$、外币投入支出为 $c(e)$，另有本币成本 $C_{\$}$，则简化的美元经营剩余是

$$
\Pi(e)=e[p(e)q(e)-c(e)]-C_{\$}.
$$

其导数包括两部分：

$$
\frac{d\Pi}{de}
=[pq-c]+e[p'q+pq'-c'].
$$

第一项是把当前净外币流量换算的直接效果；第二项包含价格、数量和成本随汇率改变的反应。这一式子的职责是标出需要研究的行为变量，不是替企业估计这些导数。前面的100/80发票例固定 $p,q,c$，所以没有第二项。

因此“外币收入很多”还要继续拆：采购是否也是该外币？客户是否接受涨价？合同多久重新定价？企业是否会改变运输路线？同币种收入和成本若来自不同主体，还要查现金能否在法律实体间及时调动。

<a id="ei11-material"></a>

## 四、读 Expeditors：经营风险、交易损益与折算分别放在哪里

Expeditors 是国际物流服务企业。其2025 Form 10-K 的 Item 7A 描述开票币种与费用发生地币种可以不同；Note 1J 和1K则给出外币交易与报表折算政策。以下金额为披露中的近似百万美元，材料期间固定在2025和2024，而非最新市场汇率。[^expd]

| 材料位置 | 2025 | 2024 | 应怎样解释 |
|---|---:|---:|---|
| Item 7A：外币交易损益 | 损失约28 | 收益约12 | 交易及重新计量进入当期损益的对象 |
| Item 7A：税后外币折算调整 | 约+49 | 约−41 | 主要属于其他综合收益，不是同额现金收付 |
| 报告期末外汇衍生品 | 两个年末均无未平仓项目 | 同左 | 只描述这些时点，不扩大为永不使用 |

Note 1J说明：外币子公司资产和负债按期末汇率折算，收入和费用按期间加权平均汇率，权益项目有历史汇率安排；交易汇兑损益与折算调整因此不会因为使用相同“外汇”二字就自动对账。Note 1K也保留符合条件时折算余额重分类进损益的情形，所以不能把OCI写成“永远不会进入利润”。[^expd]

再看公司10%美元变动敏感度。Item 7A给出：其他条件不变的假设下，美元相对所列币种弱10%，营业利润约增加60百万美元；强10%，约减少49百万美元。公司同时说明该比较没有包含运输格局等业务变化。正负方向不必完全对称，也不能拿这个假设敏感度替代公司全部经营预测。[^expd]

我们可以把这份披露读成三张相互联系的卡：**已发生的交易损益**回答本期损益；**折算政策和OCI**回答合并报表怎样记录；**假设敏感度**回答在公司给定条件下改变汇率会怎样。三张卡各自有用，但分母、时点和反事实条件不同。

<a id="ei11-exercises"></a>

## 五、重建与迁移

<strong>任务一：</strong>把欧元100应收、80应付的两笔交易分别重算，再解释为何净汇兑损失只有1美元。

<strong>解析：</strong>应收价值下降5是损失；应付价值下降4对债务人是收益。它们不是相同符号，因此合计−1。净现金价值由22变21，与分别计算一致。必须先固定同币种、同日期、美元功能货币和金额不变，才可以安全合并。

<strong>任务二：</strong>应付仍是欧元80，但必须在汇率1.10时先支付；应收后来在1.05时收回。只知道“净欧元敞口20”，可以沿用−1的整个资金结论吗？

<strong>解析：</strong>不可以。按题设实付88美元、实收105美元，净现金17美元；原先同日匹配时结算净收21美元。提前付款引入了不同汇率时点，且付款到收款之间还需要资金。若考虑融资利息，还要另给利率和时间。这里不计算一个没有合同条件的衍生品来补齐结果。

<strong>任务三：</strong>某公司OCI外币折算增加49百万美元，分析师把它加到经营现金流作为外汇收益。指出应查什么。

<strong>解析：</strong>先查功能货币、折算会计政策和综合收益表，确认这49对应资产负债换算而非收到的现金；再查现金流量表中现金汇率变动的单独影响，以及真实交易收付。不能仅因金额都与汇率有关就相加。

<strong>迁移任务：</strong>出口商用美元销售、欧元采购，欧元贬值。写出固定合同下的第一步效果，再列两项可能改变中长期结论的证据。

<strong>解析：</strong>在美元收入和欧元采购量价都固定时，欧元成本折算降低，有利于美元经营剩余。下一步要查供应商是否重定价、客户是否要求降价，以及竞争者是否也享有同样成本变化。证据可以是采购合同的调价周期、订单报价和毛利变动的量价分解。公司所在国家并不能代替这些合同信息。

[^mit17]: EIDEF-S04，MIT 14.02 Spring 2023，Lecture 17 “Introduction to Open Economy”，名义汇率报价、升贬值及相对商品价格单元。[转录入口](https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/resources/1402-sp23-lecture-17-v2_mp4/)。
[^expd]: EIDEF-S06，Expeditors International of Washington, Inc.，2025 Form 10-K，期末2025-12-31、2026-02-25提交；Item 7A（SEC HTML印刷pp.41–42），Note 1J “Foreign Currency”及1K “Comprehensive Income”（F-13–F-14）完整采用单元。账单币种、敏感度、交易／折算金额及政策均来自该固定年报。[SEC原件](https://www.sec.gov/Archives/edgar/data/746515/000119312526071569/expd-20251231.htm)。

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21。错开日期题另按各自汇率，不能沿用同日净式。

```json
{
  "receivable_start": 110.00000000000001,
  "receivable_end": 105,
  "payable_start": 88,
  "payable_end": 84,
  "receivable_change": -5.000000000000004,
  "payable_gain": 4.0000000000000036,
  "net_change": -1.0000000000000009,
  "net_start": 22,
  "net_end": 21,
  "net_eur": 20,
  "conditions": "USD functional currency; EUR fixed amounts; same recognition and settlement dates; no derivative contract"
}
```

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei11-fx",
    "node_id": "EI-11",
    "title": "同币种同日自然匹配",
    "anchor": "ei11-invoice",
    "method": "fx",
    "controls": [
      {
        "key": "receivable",
        "label": "应收（EUR）",
        "default": 100,
        "min": 0,
        "max": 1000,
        "step": 10,
        "kind": "number"
      },
      {
        "key": "payable",
        "label": "应付（EUR）",
        "default": 80,
        "min": 0,
        "max": 1000,
        "step": 10,
        "kind": "number"
      },
      {
        "key": "e0",
        "label": "确认时 USD/EUR",
        "default": 1.1,
        "min": 0.01,
        "max": 10,
        "step": 0.01,
        "kind": "number"
      },
      {
        "key": "e1",
        "label": "结算时 USD/EUR",
        "default": 1.05,
        "min": 0.01,
        "max": 10,
        "step": 0.01,
        "kind": "number"
      }
    ],
    "inputs": {
      "receivable": 100,
      "payable": 80,
      "e0": 1.1,
      "e1": 1.05
    },
    "algorithm": "交易损益R*(e1−e0)与−C*(e1−e0)，净额(R−C)*(e1−e0)。美元功能货币、同一确认/结算时点、欧元量固定；无金融衍生品。",
    "static_equivalent": "100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21。错开日期题另按各自汇率，不能沿用同日净式。",
    "source_ids": [
      "EIDEF-S04",
      "EIDEF-S06"
    ],
    "identity": "teaching_assumption",
    "description": "同币种同日自然匹配",
    "outputs": {
      "receivable_start": 110.00000000000001,
      "receivable_end": 105,
      "payable_start": 88,
      "payable_end": 84,
      "receivable_change": -5.000000000000004,
      "payable_gain": 4.0000000000000036,
      "net_change": -1.0000000000000009,
      "net_start": 22,
      "net_end": 21,
      "net_eur": 20,
      "conditions": "USD functional currency; EUR fixed amounts; same recognition and settlement dates; no derivative contract"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei11-fx",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Lecture 17: Introduction to Open Economy](https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/1ciz-6OL2VwZZSmosR8LRidy2fGGsMpkW_transcript.pdf): 报价方向依约定而定；名义汇率与商品价格共同决定商品相对价格。
- [Expeditors International 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/746515/000119312526071569/expd-20251231.htm): 交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同。假设敏感度不含运输模式变化。

## Content relations
```json
[
  {
    "from": "zh-ei11",
    "relation": "part_of",
    "to": "industry-environment",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei11",
    "relation": "uses_method",
    "to": "zh-ei05",
    "reason": "定位采购/销售链"
  },
  {
    "from": "zh-ei11",
    "relation": "uses_method",
    "to": "zh-ei10",
    "reason": "外币借款的融资条件"
  },
  {
    "from": "ei11-structure",
    "relation": "supported_by",
    "to": "EIDEF-S04",
    "reason": "报价方向依约定而定；名义汇率与商品价格共同决定商品相对价格。",
    "locator": "转录PDF pp.6、11–12：exchange-rate convention / appreciation-depreciation / relative goods prices",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei11-structure"
  },
  {
    "from": "ei11-material",
    "relation": "supported_by",
    "to": "EIDEF-S06",
    "reason": "交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同。假设敏感度不含运输模式变化。",
    "locator": "Item7A，SEC印刷pp.41–42；Note1J/1K，F-13–F-14",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei11-material"
  },
  {
    "from": "ei11-invoice",
    "relation": "illustrated_by",
    "to": "exp-ei11-fx",
    "reason": "100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21。错开日期题另按各自汇率，不能沿用同日净式。",
    "at_section": "ei11-invoice"
  },
  {
    "from": "zh-ei11",
    "relation": "illustrated_by",
    "to": "zh-record-expeditors-20260921",
    "reason": "有日期的原始公司材料映射，不是公司价值评判"
  }
]
```

## Related entries
