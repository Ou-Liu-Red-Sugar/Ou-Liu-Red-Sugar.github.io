# 稳定币：储备、赎回权与今天能收到的钱

从USDC非EEA条款区分储备、Type A/B条件权利和实际可达路线，再比较教学净到账.

Entry: zh-m27 | Node: M27 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《稳定币：储备、赎回权与今天能收到的钱》，面向有充分数学背景的高年级本科生至研究生. 先实际读取随包 required_readings 的完整指定单元，记录版本、范围与所支持内容；选择选读分支时，再读取其指定材料. 动态页面换版时保留本文具名版本的身份；缺少原文则寻找正式等价全文，仍缺失时指出该单元.

画出Type A、尚未开立Mint账户的Type B及平台余额的权利与兑换路径，再计算10K USDC两条可达路径的净额. 用2023年发行人材料区分储备规模、SVB敞口、支付时间与持有人损失，解释额外证据能分别识别什么.

先用一项完整推导或分析诊断我的起点，跳过已掌握步骤. 让我先计算或判断，再解释错误与机制，最后改变一个条件检验迁移.

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
      "source_id": "MOD-CIRCLE-USDC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.circle.com/legal/usdc-terms",
        "verified_access_at": "2026-09-21"
      },
      "version": "non-EEA; updated 2025-12-12",
      "required_unit": {
        "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见."
      },
      "supports": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
      "id": "M27-READ-01",
      "title": "USDC Terms",
      "authors": [
        "Circle"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MHIJ-CIRCLE-20230312",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes",
        "verified_access_at": "2026-09-21"
      },
      "version": "page 2023-03-13; dateline 2023-03-12; reserve composition as of 2023-03-11",
      "required_unit": {
        "locator": "新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计."
      },
      "supports": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计.",
      "id": "M27-READ-02",
      "title": "$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes",
      "authors": [
        "Circle"
      ],
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "scope": "M27",
    "experiment_ids": [
      "EXP-MHIJ-M27-REDEMPTION-01"
    ],
    "groups": {
      "EXP-MHIJ-M27-REDEMPTION-01": {
        "owner": "M27",
        "unit_contract": {
          "token": "USDC",
          "cash": "USD",
          "reserve_amounts": "USD billions"
        },
        "identity": "Real non-EEA USDC terms and dated issuer disclosure plus synthetic route costs/secondary bid; no historical price tape or independent reserve audit.",
        "source_ids": [
          "MOD-CIRCLE-USDC",
          "MHIJ-CIRCLE-20230312"
        ],
        "inputs": {
          "historical_issuer_disclosure": {
            "treasuries_usd_bn": 32.4,
            "cash_usd_bn": 9.7,
            "svb_exposure_usd_bn": 3.3
          },
          "teaching_routes": {
            "tokens_usdc": 10000,
            "issuer_gross_usd_per_usdc": 1,
            "assumed_issuer_bank_cost_usd": 25,
            "secondary_bid_usd_per_usdc": 0.997,
            "assumed_secondary_fee_rate": 0.001
          }
        },
        "formulas": {
          "issuer_net_if_reachable": "tokens * 1 USD - assumed route/bank cost",
          "secondary_net": "tokens * bid * (1 - secondary_fee_rate)"
        },
        "default_results": {
          "reported_reserve_total_usd_bn": 42.1,
          "svb_share_of_reported_amount": 0.07838479809976247,
          "issuer_net_if_eligible": 9975,
          "secondary_net": 9960.03
        },
        "branch_boundaries": {
          "Type_A": "Direct redemption route only if the holder actually satisfies the relevant Mint eligibility/account/operational conditions.",
          "Type_B": "Carries a conditional redemption right under the terms; do not label it either immediately cash-redeemable or devoid of redemption rights.",
          "venue_balance": "Venue custody/withdrawal must be resolved before assuming the Circle route is reachable.",
          "routing": "Reachability is checked before comparing route amounts; no automatic arbitrage label."
        }
      }
    },
    "attached_frozen_file": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368",
      "reading_scope": "只取本篇及所选分支groups，其他字段不重复内嵌"
    },
    "selection": {
      "default": "main",
      "available": [
        "main",
        "all"
      ],
      "chosen": "all"
    }
  },
  "entry_id": "zh-m27",
  "node_id": "M27",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "all",
  "export_scope": "完整本篇，含明确标为选读的分支；仅在采用选读时升级其具名原文为必读.",
  "source_paths": {
    "data/m-hij-final-shared-inputs.json": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static/M27.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M27.html"
  },
  "experiment_ids": [
    "EXP-MHIJ-M27-REDEMPTION-01"
  ]
}
```

## Supplied entry
<a id="m27-purpose"></a>
## 一、目标兑换关系、权利与现金可达性

稳定币的目标兑换价格、持有人权利和当时可用现金分别由不同安排决定. 储备支持兑换承诺，账户资格与支付通道决定持有人何时能兑现；二级市场交易另有价格与成本.

本文材料限定为Circle 2025-12-12版**非EEA USDC条款**. 分析依次区分储备安排、持有人对Circle的权利条件，以及获得现金所需的账户与通道路由.[^M27-terms]

<a id="m27-rights"></a>
## 二、Type A 与 Type B 的权利条件

Circle条款区分具有合资格Circle Mint账户、可以使用相应发行赎回服务的用户，以及没有该账户、在外部取得USDC的持有人. 文件用Type A与Type B组织这些关系. Type B随合法取得的USDC持有受条款约束的条件性赎回权，但要向发行人直接兑现，仍需满足资格、开户和其他条件. [^M27-terms]

直接赎回还要求账户状态、代币交付、适用限制与银行操作条件均满足. 条件性权利可以已随代币取得，而直接服务通道尚未开通.

持有位置会改变兑现前需要核对的关系：

| 所在层 | 持有人眼前看到什么 | 下一步必须确认什么 |
|---|---|---|
| 自管钱包的USDC | 链上代币余额与转让能力 | 代币/网络、限制、收款方与交易条件 |
| 合资格Mint账户 | 与Circle之间的服务和条件权利 | 是否可赎回、是否已交付代币、银行付款条件 |
| 第三方交易场所余额 | 平台记账的USDC资产或请求权 | 该平台的保管、提款、交易与风险条款 |
| 美元银行账户 | 现金到账记录 | 已完成的银行支付，而非尚待执行请求 |

USDC储备由发行人安排，钱包持有人并不因此逐项取得对应国债或银行存款的直接所有权. 交易平台余额的破产受偿顺序取决于平台条款与适用法律，Circle条款本身无法确定.[^M27-terms]

<a id="m27-reserves"></a>
## 三、储备规模与可用性

Circle在2023年3月发布的SVB相关新闻稿，是一个有日期的现金可达性例子. 稿件的页面日期为3月13日，新闻稿dateline为3月12日，储备组成描述截至3月11日. 发行人当时披露短期国债32.4 B 美元、现金9.7 B 美元，SVB敞口3.3 B 美元，并讨论银行开放和资金可用性.[^M27-event]

先做最小核算：

$$
\begin{aligned}
\text{披露合计}&=32.4+9.7=42.1\ \text{ B 美元},\\
\text{SVB敞口占比}&=\frac{3.3}{42.1}\approx7.838\%.
\end{aligned}
$$

约7.838%是发行人披露的SVB敞口占储备组成的比例. 持有人损失还取决于回收金额、兑现时间及其实际交易价格.

储备的资产价值与可用时间共同影响兑付. 足额回收的资产若在赎回日无法动用，仍会造成现金缺口；二级折价还可能包含等待、费用与通道限制，单一价格无法识别各项贡献.

<a id="m27-routes"></a>
## 四、可达路径与净到账

考虑10,000 USDC的教学持仓，并设两条已给定条件的路径：直接兑付按1 USD/USDC，银行或通道成本25 USD；二级出售买价0.997 USD/USDC，成交费率0.1%. **25、0.997和0.1%均为教学输入**.

若两条路径都确实可完成，金额为

$$
\begin{aligned}
\text{直接路线净额}&=10{,}000-25=9{,}975\ \text{USD},\\
\text{出售毛额}&=10{,}000\times0.997=9{,}970\ \text{USD},\\
\text{出售费用}&=9{,}970\times0.001=9.97\ \text{USD},\\
\text{出售净额}&=9{,}960.03\ \text{USD}.
\end{aligned}
$$

差14.97美元只在这两个可行路径、对应支付时点和成本条件下有意义. 对尚未取得Mint资格的Type B，9,975美元的直接路线当前不可达，因此不进入当前可行集合或收益比较.

资产位于提款受限的平台时，外部出售需要先恢复转出能力；平台内部交易则另取决于其交易与提款规则.

合资格账户发起赎回后，现金到账仍经历代币交付和银行付款. 等待、费用、暂停或延迟条件使目标兑换关系与当前二级买价可能不同. [^M27-terms]

<a id="m27-collateral"></a>
## 五、稳定币在衍生品账户中的附加条件

USDC作为结算单位或抵押资产时，上面的发行人与赎回关系没有消失，只是外面又套了一层场所规则. 某平台是否接受、认可多少、何时能提取，以及平台资产与使用者之间是什么关系，要分别确认. 即使发行人直接赎回路线畅通，平台内资产也可能因为已用于保证金或提款受限而不能立即送去赎回.

代币作为抵押时，可用资金还受平台认可比例、保证金占用和转移限制影响. 持有人需要同时满足代币兑换与账户提款两组条件.

<a id="m27-explore"></a>
## 六、权利路线与路径选择

<div data-experiment-slot="EXP-MHIJ-M27-REDEMPTION-01"></div>

切换Type A、尚未开户的Type B和提款受限场所余额，可比较各自可达的兑换路径. 路径开放后，再按给定的报价、费用和付款条件计算净额.

<a id="m27-exercises"></a>
## 七、1 美元约束的检验

**题一：Type B是否只有二级市场价格，没有任何对发行人的条件权利？**

解析：不是. 已读条款保留随USDC取得的条件性赎回权；但成为能够直接使用Mint兑付服务的合资格用户还有条件. 写答案时要同时保留“权利存在”和“当前通道未必可达”，不能二选一.

**题二：两条教学路线都可达，直接路线比出售多收14.97美元，是否足以说明应当总选直接兑付？**

解析：不足. 金额比较尚未包括等待、所需可用现金、通道状态变化等；即使其他条件都一样，它也仅是本例两组输入的比较，不是对所有持有人和时点的政策.

**题三：3.3/42.1能否直接写成USDC持有人损失7.84%？**

解析：不能. 这是指定日期发行人披露的银行敞口占比. 回收金额、支付时间、持有人实际成交和其他储备都没有由这个除法决定；新闻稿也不等于独立审计.

**题四：平台余额有10,000USDC，是否已经拥有可立即提至银行的10,000美元？**

解析：至少还差平台提款、Circle或其他兑换通道、费用、银行付款等条件. 先画清平台请求权、代币和美元三个对象，再逐条核路径；用余额名称替代这些关系，会同时误判收益和流动性.

[^M27-terms]: **Circle，USDC Terms**，non-EEA; updated 2025-12-12. [原文](https://www.circle.com/legal/usdc-terms). 定位：非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟. 采用范围：USDC的条件性权利、直接赎回服务与第三方/通道风险.

[^M27-event]: **Circle，$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes**，page 2023-03-13; dateline 2023-03-12; reserve composition as of 2023-03-11. [原文](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes). 定位：新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性. 采用范围：指定历史时点发行人储备/银行敞口披露.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>

## Additional teaching material
### 交互静态结果

<div class="inline-experiment"><a href="https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M27-REDEMPTION-01">打开这一实验</a><div class="table-wrap"><table><thead><tr><th scope="col">两条教学路径</th><th scope="col">毛额USD</th><th scope="col">假设费用USD</th><th scope="col">合资格且可执行时净额USD</th></tr></thead><tbody><tr><td>直接兑付</td><td>10000</td><td>25</td><td>9975</td></tr><tr><td>二级bid0.997出售</td><td>9970</td><td>9.97</td><td>9960.03</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th scope="col">身份</th><th scope="col">直接路线</th><th scope="col">外部出售路线</th></tr></thead><tbody><tr><td>Type A</td><td>仍需操作/银行条件</td><td>仍需代币可达/买方条件</td></tr><tr><td>Type B尚无Mint</td><td>当前不可达，保留条件性权利</td><td>符合条件时可算</td></tr><tr><td>场所余额提款受限</td><td>须先解决可达性</td><td>外部出售须先恢复转出能力</td></tr></tbody></table></div><p>2023发行人材料：32.4+9.7=42.1 B 美元；3.3/42.1≈7.838%为SVB敞口占披露储备的比例.</p></div>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MHIJ-M27-REDEMPTION-01",
    "title": "先核可达路线，再算美元净额",
    "anchor": "m27-explore",
    "description": "USDC非EEA具名条款；买价0.997、通道费25美元和出售费0.1%全为教学值，不是历史行情.",
    "owner": "M27",
    "data_identity": "Real non-EEA USDC terms and dated issuer disclosure plus synthetic route costs/secondary bid; no historical price tape or independent reserve audit.",
    "source_ids": [
      "MOD-CIRCLE-USDC",
      "MHIJ-CIRCLE-20230312"
    ],
    "units": {
      "token": "USDC",
      "cash": "USD",
      "reserve_amounts": "USD billions"
    },
    "inputs": {
      "historical_issuer_disclosure": {
        "treasuries_usd_bn": 32.4,
        "cash_usd_bn": 9.7,
        "svb_exposure_usd_bn": 3.3
      },
      "teaching_routes": {
        "tokens_usdc": 10000,
        "issuer_gross_usd_per_usdc": 1,
        "assumed_issuer_bank_cost_usd": 25,
        "secondary_bid_usd_per_usdc": 0.997,
        "assumed_secondary_fee_rate": 0.001
      }
    },
    "outputs": {
      "reported_reserve_total_usd_bn": 42.1,
      "svb_share_of_reported_amount": 0.07838479809976247,
      "issuer_net_if_eligible": 9975,
      "secondary_net": 9960.03
    },
    "formulas": {
      "issuer_net_if_reachable": "tokens * 1 USD - assumed route/bank cost",
      "secondary_net": "tokens * bid * (1 - secondary_fee_rate)"
    },
    "branch_boundaries": {
      "Type_A": "Direct redemption route only if the holder actually satisfies the relevant Mint eligibility/account/operational conditions.",
      "Type_B": "Carries a conditional redemption right under the terms; do not label it either immediately cash-redeemable or devoid of redemption rights.",
      "venue_balance": "Venue custody/withdrawal must be resolved before assuming the Circle route is reachable.",
      "routing": "Reachability is checked before comparing route amounts; no automatic arbitrage label."
    },
    "static_equivalent_html": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">两条教学路径</th><th scope=\"col\">毛额USD</th><th scope=\"col\">假设费用USD</th><th scope=\"col\">合资格且可执行时净额USD</th></tr></thead><tbody><tr><td>直接兑付</td><td>10000</td><td>25</td><td>9975</td></tr><tr><td>二级bid0.997出售</td><td>9970</td><td>9.97</td><td>9960.03</td></tr></tbody></table></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">身份</th><th scope=\"col\">直接路线</th><th scope=\"col\">外部出售路线</th></tr></thead><tbody><tr><td>Type A</td><td>仍需操作/银行条件</td><td>仍需代币可达/买方条件</td></tr><tr><td>Type B尚无Mint</td><td>当前不可达，保留条件性权利</td><td>符合条件时可算</td></tr><tr><td>场所余额提款受限</td><td>须先解决可达性</td><td>不臆造内部/外部交易</td></tr></tbody></table></div><p>2023发行人材料：32.4+9.7=42.1 B 美元；3.3/42.1≈7.83848%是敞口占比，不是持有人损失率或行情跌幅.</p>",
    "frozen_reference": {
      "file": "data/m-hij-final-shared-inputs.json",
      "json_pointer": "/experiments/EXP-MHIJ-M27-REDEMPTION-01",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368"
    },
    "controls": [
      {
        "name": "holder",
        "label": "持有人身份",
        "type": "select",
        "value": "type_a",
        "options": [
          {
            "value": "type_a",
            "label": "合资格Type A"
          },
          {
            "value": "type_b",
            "label": "Type B：尚无Mint账户"
          },
          {
            "value": "venue",
            "label": "第三方场所内余额"
          }
        ]
      },
      {
        "name": "tokens",
        "label": "USDC数量",
        "type": "number",
        "value": 10000,
        "step": 100,
        "min": 1e-06
      },
      {
        "name": "cost",
        "label": "直接通道成本（USD）",
        "type": "number",
        "value": 25,
        "step": 1,
        "min": 0
      },
      {
        "name": "bid",
        "label": "外部二级买价（USD/USDC）",
        "type": "number",
        "value": 0.997,
        "step": 0.001,
        "min": 1e-06
      },
      {
        "name": "fee",
        "label": "外部出售费率（%）",
        "type": "number",
        "value": 0.1,
        "step": 0.01,
        "min": 0,
        "max": 100
      },
      {
        "name": "issuerOnline",
        "label": "发行人／银行通道条件已满足",
        "type": "checkbox",
        "value": true
      },
      {
        "name": "secondaryReady",
        "label": "外部二级全量成交条件已满足",
        "type": "checkbox",
        "value": true
      },
      {
        "name": "withdraw",
        "label": "场所提款条件已满足",
        "type": "checkbox",
        "value": false
      },
      {
        "name": "mint",
        "label": "场所余额持有人另有合资格Mint账户",
        "type": "checkbox",
        "value": false
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M27.html",
    "implementation": {
      "html": "/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M27-REDEMPTION-01",
      "engine": "/notebook/labs/m-hij/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes): 发行人在 2023-03-12 对储备及银行敞口的披露.
- [USDC Terms](https://www.circle.com/legal/usdc-terms): USDC 持有人的条件性权利、直接赎回服务，以及第三方和通道安排.

## Content relations
```json
[
  {
    "from": "zh-m27",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m27",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能区分持有人权利、义务主体和兑现条件",
    "reason": "依赖具体能力，不要求机械完成所有前序"
  },
  {
    "from": "zh-m27",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "zh-m27",
    "relation": "uses_method",
    "to": "zh-m26",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "m27-explore",
    "relation": "illustrated_by",
    "to": "EXP-MHIJ-M27-REDEMPTION-01",
    "reason": "冻结输入上的可复算教学实验及静态等价",
    "at_section": "m27-explore"
  },
  {
    "from": "m27-purpose",
    "relation": "supported_by",
    "to": "MOD-CIRCLE-USDC",
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "at_section": "m27-purpose"
  },
  {
    "from": "m27-rights",
    "relation": "supported_by",
    "to": "MOD-CIRCLE-USDC",
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "at_section": "m27-rights"
  },
  {
    "from": "m27-reserves",
    "relation": "supported_by",
    "to": "MHIJ-CIRCLE-20230312",
    "reason": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计.",
    "locator": "新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性",
    "scope": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计.",
    "at_section": "m27-reserves"
  },
  {
    "from": "m27-routes",
    "relation": "supported_by",
    "to": "MOD-CIRCLE-USDC",
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见.",
    "at_section": "m27-routes"
  }
]
```

## Related entries
