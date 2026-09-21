# 稳定币：储备、赎回权与今天能收到的钱

从USDC非EEA条款区分储备、Type A/B条件权利和实际可达路线，再比较教学净到账。

Entry: zh-m27 | Node: M27 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M27《稳定币：储备、赎回权与今天能收到的钱》。先实际读取下列必读原件的完整指定单元，再核输入身份与单位，并把自己的读取记录写入运行时日志；不得把作者日志当你已经读过。先核文献日期和版本；动态URL若已换版，不能让新版本默默替代这里的具名规则。资料不足只暂停相关断言，不能用模型记忆补成原件。

让我先画Type A/Type B/平台余额的权利和可达路线，再算10,000USDC的两种净额。Type B有条件权利，但未开户时不能选择direct 9,975。提款受限不自动允许外部出售；也不否定所有可能的内部交易，只承认未有相应材料。7.83848%是issuer历史敞口比例，不能当loss/price drop/audit。

先让读者独立重建一项现金或状态结果，再定位其概念错误。保留完整题解与条件；不得将教学报价称为实盘，不实施账户交易。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

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
        "purpose": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。"
      },
      "supports": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
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
        "purpose": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。"
      },
      "supports": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。",
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
  "content_version": "2026-09-21-MHIJ-review-v3",
  "selected_branch": "all",
  "export_scope": "完整本篇，含明确标为选读的分支；仅在采用选读时升级其具名原文为必读。",
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
## 一、目标价格、持有人权利和可用现金是三件事

当一种代币被用来支付资金费、提供抵押或结算交易时，我们很容易把“计价一美元”顺手读成“此时此地就能拿到一美元”。但资产的目标价格、发行人承诺的兑换关系、某个持有人实际可走的通道，回答的是三个问题。

本篇以Circle的USDC为真实材料，范围限定在2025-12-12版本的**非EEA条款**。我们不把这份文件套给所有稳定币，也不靠“储备支持”四个字推断某个交易所账户的完整权利。任务是画清：储备由谁安排、谁对持有人负有何种义务、持有人要经过谁才可能得到现金。[^M27-terms]

<a id="m27-rights"></a>
## 二、从真实条款读出两类用户

Circle条款区分具有合资格Circle Mint账户、可以使用相应发行赎回服务的用户，以及没有该账户、在外部取得USDC的持有人。文件用Type A与Type B组织这些关系。Type B随合法取得的USDC持有受条款约束的条件性赎回权，但要向发行人直接兑现，仍需满足资格、开户和其他条件。[^M27-terms]

因此两个极端说法都不对：“Type B没有任何赎回权”把条件权利删掉了；“任何钱包里有USDC就能立即向Circle换成银行美元”则把条件和通道删掉了。Type A也不是不受限制的现金按钮：账户状态、资产交付、适用限制与操作条件仍要满足。

可以把同一枚USDC沿途涉及的关系画成下面这张图。箭头不是同一时刻一定能执行的操作，而是需要分别核验的路径：

| 所在层 | 持有人眼前看到什么 | 下一步必须确认什么 |
|---|---|---|
| 自管钱包的USDC | 链上代币余额与转让能力 | 代币/网络、限制、收款方与交易条件 |
| 合资格Mint账户 | 与Circle之间的服务和条件权利 | 是否可赎回、是否已交付代币、银行付款条件 |
| 第三方交易场所余额 | 平台记账的USDC资产或请求权 | 该平台的保管、提款、交易与风险条款 |
| 美元银行账户 | 现金到账记录 | 已完成的银行支付，而非尚待执行请求 |

储备资产支持发行人安排，不代表钱包持有人逐项登记持有对应的国债或银行存款。交易平台上显示的余额，也不能单靠Circle条款证明破产时对该平台资产的受偿顺序；那需要另一份平台和法律关系材料。[^M27-terms]

<a id="m27-reserves"></a>
## 三、用2023年材料区分“有储备”和“储备此刻可用”

Circle在2023年3月发布的SVB相关新闻稿，是一个有日期的现金可达性例子。稿件的页面日期为3月13日，新闻稿dateline为3月12日，储备组成描述截至3月11日。发行人当时披露短期国债32.4十亿美元、现金9.7十亿美元，SVB敞口3.3十亿美元，并讨论银行开放和资金可用性。[^M27-event]

先做最小核算：

$$
\begin{aligned}
\text{披露合计}&=32.4+9.7=42.1\ \text{十亿美元},\\
\text{SVB敞口占比}&=\frac{3.3}{42.1}\approx7.83848\%.
\end{aligned}
$$

这里7.83848%是**发行人所述敞口相对所述组成的比例**。它不是持有人已经损失的比例，也不是脱锚幅度；这份新闻稿更不是独立储备审计或二级市场逐笔行情。

这个例子改变的不是“资产负债表到底要不要看”，而是提醒我们把资产性质与支付时间一起看。即使某项储备最后足额回收，如果在持有人希望赎回的时点还不能使用，支付安排仍可能承压。反过来，也不能只看某时刻市场折价就断言储备永久不足：折价可能同时反映兑现等待、费用、通道限制和其他风险。单一价格没有把这些原因分解出来。

<a id="m27-routes"></a>
## 四、先判断路能否走，再比较哪条路收到更多

考虑持有10,000 USDC的教学账户。为算清现金，假设它面对两条已经报出条件的路径：直接兑付按1 USD/USDC，银行或通道成本25 USD；二级出售买价0.997 USD/USDC，成交费率0.1%。**25、0.997和0.1%全部是教学假设**，并非上述历史事件的真实报价或Circle当前收费表。

若两条路径都确实可完成，金额为

$$
\begin{aligned}
\text{直接路线净额}&=10{,}000-25=9{,}975\ \text{USD},\\
\text{出售毛额}&=10{,}000\times0.997=9{,}970\ \text{USD},\\
\text{出售费用}&=9{,}970\times0.001=9.97\ \text{USD},\\
\text{出售净额}&=9{,}960.03\ \text{USD}.
\end{aligned}
$$

差14.97美元只在这两个可行路径、对应支付时点和成本条件下有意义。对尚未取得Mint资格的Type B，9,975不是“虽然最优但暂时麻烦”的确定可选项，而是当前路径不可达；不能把它放进一个收益最大值函数里，先推荐再要求当事人补出资格。

同理，若资产在一个不能提款的平台上，外部二级出售不因钱包界面显示余额便自动成立。你可能仍有平台内部交易路径，但那需要不同交易对象、报价和提款条件；我们不从缺失的资料补造该路径。

对存在资格的账户，发起赎回也不是到账。条款中的风险、费用、暂停或延迟条件必须与时间轴一起阅读。这正是为何“发行人目标兑换关系”和“此刻可执行二级买价”可能不同，而不是看到价差就自动得到了无风险套利。[^M27-terms]

<a id="m27-collateral"></a>
## 五、把它放回衍生品账户，还要增加一层条件

USDC作为结算单位或抵押资产时，上面的发行人与赎回关系没有消失，只是外面又套了一层场所规则。某平台是否接受、认可多少、何时能提取，以及平台资产与使用者之间是什么关系，要分别确认。即使发行人直接赎回路线畅通，平台内资产也可能因为已用于保证金或提款受限而不能立即送去赎回。

上一章把BTC市值和合资格抵押值拆开；这里还应再区分代币的市场美元价值与直接赎回权。币值接近一美元不会自动消除第三方保管或资金转移风险，也不会把代币余额变成同额可用银行现金。这个结构适用于分析具体安排，但每换一个稳定币或场所，都要重读其权利文件，不能只换名称。

<a id="m27-explore"></a>
## 六、沿权利路线图做一次选择

<div data-experiment-slot="EXP-MHIJ-M27-REDEMPTION-01"></div>

先选Type A合资格账户，再选没有Mint账户的Type B，最后选余额在提款不可用场所的情形。观察金额不是一律变小，而是某条路径首先消失。只有在你明确给出相应资格、代币可转移、买方可成交或银行通道可处理的教学条件后，路线才显示条件净额。图中没有真实市场深度，也没有保证完成的付款时间。

<a id="m27-exercises"></a>
## 七、检验：一美元到底约束了什么

**题一：Type B是否只有二级市场价格，没有任何对发行人的条件权利？**

解析：不是。已读条款保留随USDC取得的条件性赎回权；但成为能够直接使用Mint兑付服务的合资格用户还有条件。写答案时要同时保留“权利存在”和“当前通道未必可达”，不能二选一。

**题二：两条教学路线都可达，直接路线比出售多收14.97美元，是否足以说明应当总选直接兑付？**

解析：不足。金额比较尚未包括等待、所需可用现金、通道状态变化等；即使其他条件都一样，它也仅是本例两组输入的比较，不是对所有持有人和时点的政策。

**题三：3.3/42.1能否直接写成USDC持有人损失7.84%？**

解析：不能。这是指定日期发行人披露的银行敞口占比。回收金额、支付时间、持有人实际成交和其他储备都没有由这个除法决定；新闻稿也不等于独立审计。

**题四：平台余额有10,000USDC，是否已经拥有可立即提至银行的10,000美元？**

解析：至少还差平台提款、Circle或其他兑换通道、费用、银行付款等条件。先画清平台请求权、代币和美元三个对象，再逐条核路径；用余额名称替代这些关系，会同时误判收益和流动性。

[^M27-terms]: **Circle，USDC Terms**，non-EEA; updated 2025-12-12。[原文](https://www.circle.com/legal/usdc-terms)。定位：非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟。采用范围：USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。

[^M27-event]: **Circle，$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes**，page 2023-03-13; dateline 2023-03-12; reserve composition as of 2023-03-11。[原文](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes)。定位：新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性。采用范围：指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>


## Additional teaching material
### 本篇默认结果与静态等价

<article class="reader">
<p><a id="m27-purpose"></a></p>
<h2>一、目标价格、持有人权利和可用现金是三件事</h2>
<p>当一种代币被用来支付资金费、提供抵押或结算交易时，我们很容易把“计价一美元”顺手读成“此时此地就能拿到一美元”。但资产的目标价格、发行人承诺的兑换关系、某个持有人实际可走的通道，回答的是三个问题。</p>
<p>本篇以Circle的USDC为真实材料，范围限定在2025-12-12版本的<strong>非EEA条款</strong>。我们不把这份文件套给所有稳定币，也不靠“储备支持”四个字推断某个交易所账户的完整权利。任务是画清：储备由谁安排、谁对持有人负有何种义务、持有人要经过谁才可能得到现金。<sup><a aria-label="来源1" href="#fn-M27-terms">[1]</a></sup></p>
<p><a id="m27-rights"></a></p>
<h2>二、从真实条款读出两类用户</h2>
<p>Circle条款区分具有合资格Circle Mint账户、可以使用相应发行赎回服务的用户，以及没有该账户、在外部取得USDC的持有人。文件用Type A与Type B组织这些关系。Type B随合法取得的USDC持有受条款约束的条件性赎回权，但要向发行人直接兑现，仍需满足资格、开户和其他条件。<sup><a aria-label="来源1" href="#fn-M27-terms">[1]</a></sup></p>
<p>因此两个极端说法都不对：“Type B没有任何赎回权”把条件权利删掉了；“任何钱包里有USDC就能立即向Circle换成银行美元”则把条件和通道删掉了。Type A也不是不受限制的现金按钮：账户状态、资产交付、适用限制与操作条件仍要满足。</p>
<p>可以把同一枚USDC沿途涉及的关系画成下面这张图。箭头不是同一时刻一定能执行的操作，而是需要分别核验的路径：</p>
<div class="table-wrap"><table>
<thead>
<tr>
<th>所在层</th>
<th>持有人眼前看到什么</th>
<th>下一步必须确认什么</th>
</tr>
</thead>
<tbody>
<tr>
<td>自管钱包的USDC</td>
<td>链上代币余额与转让能力</td>
<td>代币/网络、限制、收款方与交易条件</td>
</tr>
<tr>
<td>合资格Mint账户</td>
<td>与Circle之间的服务和条件权利</td>
<td>是否可赎回、是否已交付代币、银行付款条件</td>
</tr>
<tr>
<td>第三方交易场所余额</td>
<td>平台记账的USDC资产或请求权</td>
<td>该平台的保管、提款、交易与风险条款</td>
</tr>
<tr>
<td>美元银行账户</td>
<td>现金到账记录</td>
<td>已完成的银行支付，而非尚待执行请求</td>
</tr>
</tbody>
</table></div>
<p>储备资产支持发行人安排，不代表钱包持有人逐项登记持有对应的国债或银行存款。交易平台上显示的余额，也不能单靠Circle条款证明破产时对该平台资产的受偿顺序；那需要另一份平台和法律关系材料。<sup><a aria-label="来源1" href="#fn-M27-terms">[1]</a></sup></p>
<p><a id="m27-reserves"></a></p>
<h2>三、用2023年材料区分“有储备”和“储备此刻可用”</h2>
<p>Circle在2023年3月发布的SVB相关新闻稿，是一个有日期的现金可达性例子。稿件的页面日期为3月13日，新闻稿dateline为3月12日，储备组成描述截至3月11日。发行人当时披露短期国债32.4十亿美元、现金9.7十亿美元，SVB敞口3.3十亿美元，并讨论银行开放和资金可用性。<sup><a aria-label="来源2" href="#fn-M27-event">[2]</a></sup></p>
<p>先做最小核算：</p>
<div class="math-display"><mjx-container class="MathJax" display="true" jax="SVG"><svg focusable="false" height="7.527ex" role="img" style="vertical-align: -3.198ex;" viewbox="0 -1913.5 19265.6 3327" width="43.587ex" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" stroke="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,1163.5)"><g data-mml-node="mtd" transform="translate(2014,0)"><g data-mml-node="mtext"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">披</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">露</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">合</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">计</text></g></g><g data-mml-node="mtd" transform="translate(6014,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(1333.6,0)"><path d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" data-c="33"></path><path d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" data-c="32" transform="translate(500,0)"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(1000,0)"></path><path d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" data-c="34" transform="translate(1278,0)"></path></g><g data-mml-node="mo" transform="translate(3333.8,0)"><path d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" data-c="2B"></path></g><g data-mml-node="mn" transform="translate(4334,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(778,0)"></path></g><g data-mml-node="mo" transform="translate(5889.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(6945.6,0)"><path d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" data-c="34"></path><path d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" data-c="32" transform="translate(500,0)"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(1000,0)"></path><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" data-c="31" transform="translate(1278,0)"></path></g><g data-mml-node="mtext" transform="translate(8723.6,0)"><path d="" data-c="A0"></path></g><g data-mml-node="mtext" transform="translate(8973.6,0)"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">十</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">亿</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">美</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">元</text></g><g data-mml-node="mo" transform="translate(12973.6,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C"></path></g></g></g><g data-mml-node="mtr" transform="translate(0,-727.5)"><g data-mml-node="mtd"><g data-mml-node="mtext"><path d="M55 507Q55 590 112 647T243 704H257Q342 704 405 641L426 672Q431 679 436 687T446 700L449 704Q450 704 453 704T459 705H463Q466 705 472 699V462L466 456H448Q437 456 435 459T430 479Q413 605 329 646Q292 662 254 662Q201 662 168 626T135 542Q135 508 152 480T200 435Q210 431 286 412T370 389Q427 367 463 314T500 191Q500 110 448 45T301 -21Q245 -21 201 -4T140 27L122 41Q118 36 107 21T87 -7T78 -21Q76 -22 68 -22H64Q61 -22 55 -16V101Q55 220 56 222Q58 227 76 227H89Q95 221 95 214Q95 182 105 151T139 90T205 42T305 24Q352 24 386 62T420 155Q420 198 398 233T340 281Q284 295 266 300Q261 301 239 306T206 314T174 325T141 343T112 367T85 402Q55 451 55 507Z" data-c="53"></path><path d="M114 620Q113 621 110 624T107 627T103 630T98 632T91 634T80 635T67 636T48 637H19V683H28Q46 680 152 680Q273 680 294 683H305V637H284Q223 634 223 620Q223 618 313 372T404 126L490 358Q575 588 575 597Q575 616 554 626T508 637H503V683H512Q527 680 627 680Q718 680 724 683H730V637H723Q648 637 627 596Q627 595 515 291T401 -14Q396 -22 382 -22H374H367Q353 -22 348 -14Q346 -12 231 303Q114 617 114 620Z" data-c="56" transform="translate(556,0)"></path><path d="M131 622Q124 629 120 631T104 634T61 637H28V683H229H267H346Q423 683 459 678T531 651Q574 627 599 590T624 512Q624 461 583 419T476 360L466 357Q539 348 595 302T651 187Q651 119 600 67T469 3Q456 1 242 0H28V46H61Q103 47 112 49T131 61V622ZM511 513Q511 560 485 594T416 636Q415 636 403 636T371 636T333 637Q266 637 251 636T232 628Q229 624 229 499V374H312L396 375L406 377Q410 378 417 380T442 393T474 417T499 456T511 513ZM537 188Q537 239 509 282T430 336L329 337H229V200V116Q229 57 234 52Q240 47 334 47H383Q425 47 443 53Q486 67 511 104T537 188Z" data-c="42" transform="translate(1306,0)"></path><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2014,0) scale(1,-1)">敞</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3014,0) scale(1,-1)">口</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(4014,0) scale(1,-1)">占</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(5014,0) scale(1,-1)">比</text></g></g><g data-mml-node="mtd" transform="translate(6014,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mfrac" transform="translate(1333.6,0)"><g data-mml-node="mn" transform="translate(470,676)"><path d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" data-c="33"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" data-c="33" transform="translate(778,0)"></path></g><g data-mml-node="mn" transform="translate(220,-686)"><path d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" data-c="34"></path><path d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" data-c="32" transform="translate(500,0)"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(1000,0)"></path><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" data-c="31" transform="translate(1278,0)"></path></g><rect height="60" width="1978" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(3829.3,0)"><path d="M55 319Q55 360 72 393T114 444T163 472T205 482Q207 482 213 482T223 483Q262 483 296 468T393 413L443 381Q502 346 553 346Q609 346 649 375T694 454Q694 465 698 474T708 483Q722 483 722 452Q722 386 675 338T555 289Q514 289 468 310T388 357T308 404T224 426Q164 426 125 393T83 318Q81 289 69 289Q55 289 55 319ZM55 85Q55 126 72 159T114 210T163 238T205 248Q207 248 213 248T223 249Q262 249 296 234T393 179L443 147Q502 112 553 112Q609 112 649 141T694 220Q694 249 708 249T722 217Q722 153 675 104T555 55Q514 55 468 76T388 123T308 170T224 192Q164 192 125 159T83 84Q80 55 69 55Q55 55 55 85Z" data-c="2248"></path></g><g data-mml-node="mn" transform="translate(4885.1,0)"><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" data-c="38" transform="translate(778,0)"></path><path d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" data-c="33" transform="translate(1278,0)"></path><path d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" data-c="38" transform="translate(1778,0)"></path><path d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" data-c="34" transform="translate(2278,0)"></path><path d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" data-c="38" transform="translate(2778,0)"></path></g><g data-mml-node="mi" transform="translate(8163.1,0)"><path d="M465 605Q428 605 394 614T340 632T319 641Q332 608 332 548Q332 458 293 403T202 347Q145 347 101 402T56 548Q56 637 101 693T202 750Q241 750 272 719Q359 642 464 642Q580 642 650 732Q662 748 668 749Q670 750 673 750Q682 750 688 743T693 726Q178 -47 170 -52Q166 -56 160 -56Q147 -56 142 -45Q137 -36 142 -27Q143 -24 363 304Q469 462 525 546T581 630Q528 605 465 605ZM207 385Q235 385 263 427T292 548Q292 617 267 664T200 712Q193 712 186 709T167 698T147 668T134 615Q132 595 132 548V527Q132 436 165 403Q183 385 203 385H207ZM500 146Q500 234 544 290T647 347Q699 347 737 292T776 146T737 0T646 -56Q590 -56 545 0T500 146ZM651 -18Q679 -18 707 24T736 146Q736 215 711 262T644 309Q637 309 630 306T611 295T591 265T578 212Q577 200 577 146V124Q577 -18 647 -18H651Z" data-c="25"></path></g><g data-mml-node="mo" transform="translate(8996.1,0)"><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E"></path></g></g></g></g></g></g></svg></mjx-container></div>
<p>这里7.83848%是<strong>发行人所述敞口相对所述组成的比例</strong>。它不是持有人已经损失的比例，也不是脱锚幅度；这份新闻稿更不是独立储备审计或二级市场逐笔行情。</p>
<p>这个例子改变的不是“资产负债表到底要不要看”，而是提醒我们把资产性质与支付时间一起看。即使某项储备最后足额回收，如果在持有人希望赎回的时点还不能使用，支付安排仍可能承压。反过来，也不能只看某时刻市场折价就断言储备永久不足：折价可能同时反映兑现等待、费用、通道限制和其他风险。单一价格没有把这些原因分解出来。</p>
<p><a id="m27-routes"></a></p>
<h2>四、先判断路能否走，再比较哪条路收到更多</h2>
<p>考虑持有10,000 USDC的教学账户。为算清现金，假设它面对两条已经报出条件的路径：直接兑付按1 USD/USDC，银行或通道成本25 USD；二级出售买价0.997 USD/USDC，成交费率0.1%。<strong>25、0.997和0.1%全部是教学假设</strong>，并非上述历史事件的真实报价或Circle当前收费表。</p>
<p>若两条路径都确实可完成，金额为</p>
<div class="math-display"><mjx-container class="MathJax" display="true" jax="SVG"><svg focusable="false" height="11.086ex" role="img" style="vertical-align: -4.977ex;" viewbox="0 -2700 19821.6 4900" width="44.845ex" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" stroke="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mtable"><g data-mml-node="mtr" transform="translate(0,1950)"><g data-mml-node="mtd"><g data-mml-node="mtext"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">直</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">接</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">路</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">线</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(4000,0) scale(1,-1)">净</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(5000,0) scale(1,-1)">额</text></g></g><g data-mml-node="mtd" transform="translate(6000,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(1333.6,0)"><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" data-c="31"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(500,0)"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(1000,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1778,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(2278,0)"></path></g><g data-mml-node="mo" transform="translate(4333.8,0)"><path d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" data-c="2212"></path></g><g data-mml-node="mn" transform="translate(5334,0)"><path d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" data-c="32"></path><path d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" data-c="35" transform="translate(500,0)"></path></g><g data-mml-node="mo" transform="translate(6611.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(7667.6,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(1278,0)"></path><path d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" data-c="35" transform="translate(1778,0)"></path></g><g data-mml-node="mtext" transform="translate(9945.6,0)"><path d="" data-c="A0"></path></g><g data-mml-node="mtext" transform="translate(10195.6,0)"><path d="M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z" data-c="55"></path><path d="M55 507Q55 590 112 647T243 704H257Q342 704 405 641L426 672Q431 679 436 687T446 700L449 704Q450 704 453 704T459 705H463Q466 705 472 699V462L466 456H448Q437 456 435 459T430 479Q413 605 329 646Q292 662 254 662Q201 662 168 626T135 542Q135 508 152 480T200 435Q210 431 286 412T370 389Q427 367 463 314T500 191Q500 110 448 45T301 -21Q245 -21 201 -4T140 27L122 41Q118 36 107 21T87 -7T78 -21Q76 -22 68 -22H64Q61 -22 55 -16V101Q55 220 56 222Q58 227 76 227H89Q95 221 95 214Q95 182 105 151T139 90T205 42T305 24Q352 24 386 62T420 155Q420 198 398 233T340 281Q284 295 266 300Q261 301 239 306T206 314T174 325T141 343T112 367T85 402Q55 451 55 507Z" data-c="53" transform="translate(750,0)"></path><path d="M130 622Q123 629 119 631T103 634T60 637H27V683H228Q399 682 419 682T461 676Q504 667 546 641T626 573T685 470T708 336Q708 210 634 116T442 3Q429 1 228 0H27V46H60Q102 47 111 49T130 61V622ZM593 338Q593 439 571 501T493 602Q439 637 355 637H322H294Q238 637 234 628Q231 624 231 344Q231 62 232 59Q233 49 248 48T339 46H350Q456 46 515 95Q561 133 577 191T593 338Z" data-c="44" transform="translate(1306,0)"></path></g><g data-mml-node="mo" transform="translate(12265.6,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C"></path></g></g></g><g data-mml-node="mtr" transform="translate(0,650)"><g data-mml-node="mtd" transform="translate(2000,0)"><g data-mml-node="mtext"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">出</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">售</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">毛</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">额</text></g></g><g data-mml-node="mtd" transform="translate(6000,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(1333.6,0)"><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" data-c="31"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(500,0)"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(1000,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1778,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(2278,0)"></path></g><g data-mml-node="mo" transform="translate(4333.8,0)"><path d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z" data-c="D7"></path></g><g data-mml-node="mn" transform="translate(5334,0)"><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(1278,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(1778,0)"></path></g><g data-mml-node="mo" transform="translate(7889.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(8945.6,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(1278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1778,0)"></path></g><g data-mml-node="mtext" transform="translate(11223.6,0)"><path d="" data-c="A0"></path></g><g data-mml-node="mtext" transform="translate(11473.6,0)"><path d="M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z" data-c="55"></path><path d="M55 507Q55 590 112 647T243 704H257Q342 704 405 641L426 672Q431 679 436 687T446 700L449 704Q450 704 453 704T459 705H463Q466 705 472 699V462L466 456H448Q437 456 435 459T430 479Q413 605 329 646Q292 662 254 662Q201 662 168 626T135 542Q135 508 152 480T200 435Q210 431 286 412T370 389Q427 367 463 314T500 191Q500 110 448 45T301 -21Q245 -21 201 -4T140 27L122 41Q118 36 107 21T87 -7T78 -21Q76 -22 68 -22H64Q61 -22 55 -16V101Q55 220 56 222Q58 227 76 227H89Q95 221 95 214Q95 182 105 151T139 90T205 42T305 24Q352 24 386 62T420 155Q420 198 398 233T340 281Q284 295 266 300Q261 301 239 306T206 314T174 325T141 343T112 367T85 402Q55 451 55 507Z" data-c="53" transform="translate(750,0)"></path><path d="M130 622Q123 629 119 631T103 634T60 637H27V683H228Q399 682 419 682T461 676Q504 667 546 641T626 573T685 470T708 336Q708 210 634 116T442 3Q429 1 228 0H27V46H60Q102 47 111 49T130 61V622ZM593 338Q593 439 571 501T493 602Q439 637 355 637H322H294Q238 637 234 628Q231 624 231 344Q231 62 232 59Q233 49 248 48T339 46H350Q456 46 515 95Q561 133 577 191T593 338Z" data-c="44" transform="translate(1306,0)"></path></g><g data-mml-node="mo" transform="translate(13543.6,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C"></path></g></g></g><g data-mml-node="mtr" transform="translate(0,-650)"><g data-mml-node="mtd" transform="translate(2000,0)"><g data-mml-node="mtext"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">出</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">售</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">费</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">用</text></g></g><g data-mml-node="mtd" transform="translate(6000,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(1333.6,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(1278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1778,0)"></path></g><g data-mml-node="mo" transform="translate(3833.8,0)"><path d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z" data-c="D7"></path></g><g data-mml-node="mn" transform="translate(4834,0)"><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(778,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1278,0)"></path><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" data-c="31" transform="translate(1778,0)"></path></g><g data-mml-node="mo" transform="translate(7389.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(8445.6,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" data-c="37" transform="translate(1278,0)"></path></g><g data-mml-node="mtext" transform="translate(10223.6,0)"><path d="" data-c="A0"></path></g><g data-mml-node="mtext" transform="translate(10473.6,0)"><path d="M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z" data-c="55"></path><path d="M55 507Q55 590 112 647T243 704H257Q342 704 405 641L426 672Q431 679 436 687T446 700L449 704Q450 704 453 704T459 705H463Q466 705 472 699V462L466 456H448Q437 456 435 459T430 479Q413 605 329 646Q292 662 254 662Q201 662 168 626T135 542Q135 508 152 480T200 435Q210 431 286 412T370 389Q427 367 463 314T500 191Q500 110 448 45T301 -21Q245 -21 201 -4T140 27L122 41Q118 36 107 21T87 -7T78 -21Q76 -22 68 -22H64Q61 -22 55 -16V101Q55 220 56 222Q58 227 76 227H89Q95 221 95 214Q95 182 105 151T139 90T205 42T305 24Q352 24 386 62T420 155Q420 198 398 233T340 281Q284 295 266 300Q261 301 239 306T206 314T174 325T141 343T112 367T85 402Q55 451 55 507Z" data-c="53" transform="translate(750,0)"></path><path d="M130 622Q123 629 119 631T103 634T60 637H27V683H228Q399 682 419 682T461 676Q504 667 546 641T626 573T685 470T708 336Q708 210 634 116T442 3Q429 1 228 0H27V46H60Q102 47 111 49T130 61V622ZM593 338Q593 439 571 501T493 602Q439 637 355 637H322H294Q238 637 234 628Q231 624 231 344Q231 62 232 59Q233 49 248 48T339 46H350Q456 46 515 95Q561 133 577 191T593 338Z" data-c="44" transform="translate(1306,0)"></path></g><g data-mml-node="mo" transform="translate(12543.6,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C"></path></g></g></g><g data-mml-node="mtr" transform="translate(0,-1950)"><g data-mml-node="mtd" transform="translate(2000,0)"><g data-mml-node="mtext"><text data-variant="normal" font-family="serif" font-size="884px" transform="scale(1,-1)">出</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(1000,0) scale(1,-1)">售</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(2000,0) scale(1,-1)">净</text><text data-variant="normal" font-family="serif" font-size="884px" transform="translate(3000,0) scale(1,-1)">额</text></g></g><g data-mml-node="mtd" transform="translate(6000,0)"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" data-c="3D"></path></g><g data-mml-node="mn" transform="translate(1333.6,0)"><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39"></path><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" data-c="2C" transform="translate(500,0)"></path><path d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" data-c="39" transform="translate(778,0)"></path><path d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" data-c="36" transform="translate(1278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(1778,0)"></path><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E" transform="translate(2278,0)"></path><path d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" data-c="30" transform="translate(2556,0)"></path><path d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" data-c="33" transform="translate(3056,0)"></path></g><g data-mml-node="mtext" transform="translate(4889.6,0)"><path d="" data-c="A0"></path></g><g data-mml-node="mtext" transform="translate(5139.6,0)"><path d="M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z" data-c="55"></path><path d="M55 507Q55 590 112 647T243 704H257Q342 704 405 641L426 672Q431 679 436 687T446 700L449 704Q450 704 453 704T459 705H463Q466 705 472 699V462L466 456H448Q437 456 435 459T430 479Q413 605 329 646Q292 662 254 662Q201 662 168 626T135 542Q135 508 152 480T200 435Q210 431 286 412T370 389Q427 367 463 314T500 191Q500 110 448 45T301 -21Q245 -21 201 -4T140 27L122 41Q118 36 107 21T87 -7T78 -21Q76 -22 68 -22H64Q61 -22 55 -16V101Q55 220 56 222Q58 227 76 227H89Q95 221 95 214Q95 182 105 151T139 90T205 42T305 24Q352 24 386 62T420 155Q420 198 398 233T340 281Q284 295 266 300Q261 301 239 306T206 314T174 325T141 343T112 367T85 402Q55 451 55 507Z" data-c="53" transform="translate(750,0)"></path><path d="M130 622Q123 629 119 631T103 634T60 637H27V683H228Q399 682 419 682T461 676Q504 667 546 641T626 573T685 470T708 336Q708 210 634 116T442 3Q429 1 228 0H27V46H60Q102 47 111 49T130 61V622ZM593 338Q593 439 571 501T493 602Q439 637 355 637H322H294Q238 637 234 628Q231 624 231 344Q231 62 232 59Q233 49 248 48T339 46H350Q456 46 515 95Q561 133 577 191T593 338Z" data-c="44" transform="translate(1306,0)"></path></g><g data-mml-node="mo" transform="translate(7209.6,0)"><path d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" data-c="2E"></path></g></g></g></g></g></g></svg></mjx-container></div>
<p>差14.97美元只在这两个可行路径、对应支付时点和成本条件下有意义。对尚未取得Mint资格的Type B，9,975不是“虽然最优但暂时麻烦”的确定可选项，而是当前路径不可达；不能把它放进一个收益最大值函数里，先推荐再要求当事人补出资格。</p>
<p>同理，若资产在一个不能提款的平台上，外部二级出售不因钱包界面显示余额便自动成立。你可能仍有平台内部交易路径，但那需要不同交易对象、报价和提款条件；我们不从缺失的资料补造该路径。</p>
<p>对存在资格的账户，发起赎回也不是到账。条款中的风险、费用、暂停或延迟条件必须与时间轴一起阅读。这正是为何“发行人目标兑换关系”和“此刻可执行二级买价”可能不同，而不是看到价差就自动得到了无风险套利。<sup><a aria-label="来源1" href="#fn-M27-terms">[1]</a></sup></p>
<p><a id="m27-collateral"></a></p>
<h2>五、把它放回衍生品账户，还要增加一层条件</h2>
<p>USDC作为结算单位或抵押资产时，上面的发行人与赎回关系没有消失，只是外面又套了一层场所规则。某平台是否接受、认可多少、何时能提取，以及平台资产与使用者之间是什么关系，要分别确认。即使发行人直接赎回路线畅通，平台内资产也可能因为已用于保证金或提款受限而不能立即送去赎回。</p>
<p>上一章把BTC市值和合资格抵押值拆开；这里还应再区分代币的市场美元价值与直接赎回权。币值接近一美元不会自动消除第三方保管或资金转移风险，也不会把代币余额变成同额可用银行现金。这个结构适用于分析具体安排，但每换一个稳定币或场所，都要重读其权利文件，不能只换名称。</p>
<p><a id="m27-explore"></a></p>
<h2>六、沿权利路线图做一次选择</h2>
<div class="inline-experiment"><a href="https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M27-REDEMPTION-01">打开这一实验</a><p>不运行脚本时，仍可用下方同源静态结果完成核对。</p><div class="table-wrap"><table><thead><tr><th scope="col">两条教学路径</th><th scope="col">毛额USD</th><th scope="col">假设费用USD</th><th scope="col">合资格且可执行时净额USD</th></tr></thead><tbody><tr><td>直接兑付</td><td>10000</td><td>25</td><td>9975</td></tr><tr><td>二级bid0.997出售</td><td>9970</td><td>9.97</td><td>9960.03</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th scope="col">身份</th><th scope="col">直接路线</th><th scope="col">外部出售路线</th></tr></thead><tbody><tr><td>Type A</td><td>仍需操作/银行条件</td><td>仍需代币可达/买方条件</td></tr><tr><td>Type B尚无Mint</td><td>当前不可达，保留条件性权利</td><td>符合条件时可算</td></tr><tr><td>场所余额提款受限</td><td>须先解决可达性</td><td>不臆造内部/外部交易</td></tr></tbody></table></div><p>2023发行人材料：32.4+9.7=42.1十亿美元；3.3/42.1≈7.83848%是敞口占比，不是持有人损失率或行情跌幅。</p></div>
<p>先选Type A合资格账户，再选没有Mint账户的Type B，最后选余额在提款不可用场所的情形。观察金额不是一律变小，而是某条路径首先消失。只有在你明确给出相应资格、代币可转移、买方可成交或银行通道可处理的教学条件后，路线才显示条件净额。图中没有真实市场深度，也没有保证完成的付款时间。</p>
<p><a id="m27-exercises"></a></p>
<h2>七、检验：一美元到底约束了什么</h2>
<p><strong>题一：Type B是否只有二级市场价格，没有任何对发行人的条件权利？</strong></p>
<p>解析：不是。已读条款保留随USDC取得的条件性赎回权；但成为能够直接使用Mint兑付服务的合资格用户还有条件。写答案时要同时保留“权利存在”和“当前通道未必可达”，不能二选一。</p>
<p><strong>题二：两条教学路线都可达，直接路线比出售多收14.97美元，是否足以说明应当总选直接兑付？</strong></p>
<p>解析：不足。金额比较尚未包括等待、所需可用现金、通道状态变化等；即使其他条件都一样，它也仅是本例两组输入的比较，不是对所有持有人和时点的政策。</p>
<p><strong>题三：3.3/42.1能否直接写成USDC持有人损失7.84%？</strong></p>
<p>解析：不能。这是指定日期发行人披露的银行敞口占比。回收金额、支付时间、持有人实际成交和其他储备都没有由这个除法决定；新闻稿也不等于独立审计。</p>
<p><strong>题四：平台余额有10,000USDC，是否已经拥有可立即提至银行的10,000美元？</strong></p>
<p>解析：至少还差平台提款、Circle或其他兑换通道、费用、银行付款等条件。先画清平台请求权、代币和美元三个对象，再逐条核路径；用余额名称替代这些关系，会同时误判收益和流动性。</p>
<div class="footnotes"><h2>原件与定位</h2><ol><li id="fn-M27-terms"><p><strong>Circle，USDC Terms</strong>，non-EEA; updated 2025-12-12。<a href="https://www.circle.com/legal/usdc-terms">原文</a>。定位：非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟。采用范围：USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。</p>
</li><li id="fn-M27-event"><p><strong>Circle，$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes</strong>，page 2023-03-13; dateline 2023-03-12; reserve composition as of 2023-03-11。<a href="https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes">原文</a>。定位：新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性。采用范围：指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。</p>
</li></ol></div></article>

冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json。当前包包含本篇全部分支，不继承任何 Agent 的运行时读取记录。

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MHIJ-M27-REDEMPTION-01",
    "title": "先核可达路线，再算美元净额",
    "anchor": "m27-explore",
    "description": "USDC非EEA具名条款；买价0.997、通道费25美元和出售费0.1%全为教学值，不是历史行情。",
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
    "static_equivalent_html": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">两条教学路径</th><th scope=\"col\">毛额USD</th><th scope=\"col\">假设费用USD</th><th scope=\"col\">合资格且可执行时净额USD</th></tr></thead><tbody><tr><td>直接兑付</td><td>10000</td><td>25</td><td>9975</td></tr><tr><td>二级bid0.997出售</td><td>9970</td><td>9.97</td><td>9960.03</td></tr></tbody></table></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">身份</th><th scope=\"col\">直接路线</th><th scope=\"col\">外部出售路线</th></tr></thead><tbody><tr><td>Type A</td><td>仍需操作/银行条件</td><td>仍需代币可达/买方条件</td></tr><tr><td>Type B尚无Mint</td><td>当前不可达，保留条件性权利</td><td>符合条件时可算</td></tr><tr><td>场所余额提款受限</td><td>须先解决可达性</td><td>不臆造内部/外部交易</td></tr></tbody></table></div><p>2023发行人材料：32.4+9.7=42.1十亿美元；3.3/42.1≈7.83848%是敞口占比，不是持有人损失率或行情跌幅。</p>",
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
- [$3.3 Billion of USDC Reserve Risk Removed, Dollar De-peg Closes](https://www.circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes): 指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。
- [USDC Terms](https://www.circle.com/legal/usdc-terms): USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。

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
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "at_section": "m27-purpose"
  },
  {
    "from": "m27-rights",
    "relation": "supported_by",
    "to": "MOD-CIRCLE-USDC",
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "at_section": "m27-rights"
  },
  {
    "from": "m27-reserves",
    "relation": "supported_by",
    "to": "MHIJ-CIRCLE-20230312",
    "reason": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。",
    "locator": "新闻稿全文；页面03-13、dateline03-12、截至03-11的储备组成与银行现金可达性",
    "scope": "指定历史时点发行人储备/银行敞口披露；不是独立审计、价格带或损失估计。",
    "at_section": "m27-reserves"
  },
  {
    "from": "m27-routes",
    "relation": "supported_by",
    "to": "MOD-CIRCLE-USDC",
    "reason": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "locator": "非EEA版序言、完整§1–2与§13–19；Type A/B、赎回、风险、第三方、费用/暂停/延迟",
    "scope": "USDC的条件性权利、直接赎回服务与第三方/通道风险；不是账户开户意见。",
    "at_section": "m27-routes"
  }
]
```

## Related entries
