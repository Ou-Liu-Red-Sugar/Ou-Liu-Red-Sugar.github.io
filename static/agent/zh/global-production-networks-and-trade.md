# 全球生产网络、贸易与产业布局

重建历史进口金额与份额，区分产品构成、直接来源、上游采购及所有权，并读懂产品回归与间接联系的证据.

Entry: zh-ei14 | Node: EI-14 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 重建2017／2022中国来源金额增速、份额和产品构成分解. 应用分支核100出口、40采购的原产地、增加值与控制关系，再分析18个月认证和3个月交付. 研究分支重建Alfaro–Chor 2023稿的WLS、HS2固定效应、聚类标准误及第一项拟合贡献；保留图11不同截止年和图13项目计数. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei14",
  "node_id": "EI-14",
  "export_mode": "public",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "all",
  "required_readings": [
    {
      "source_id": "EIC-S05",
      "title": "Trade in Goods with China",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "2017 and 2022 annual tables; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.census.gov/foreign-trade/balance/c5700.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2017/2022 annual TOTAL, Imports column + unit/seasonality notes",
        "scope": "完整读取两年表头、年度TOTAL及相关口径；只采用冻结两年",
        "purpose": "恢复中国来源进口额及真实单位"
      },
      "supports": "美国商品进口的中国来源金额；名义 M 美元、未季调. 固定2017/2022 TOTAL Imports，不是论文Comtrade产品回归输入.",
      "branch": "common",
      "id": "EI14-all-READ-01"
    },
    {
      "source_id": "EIC-S06",
      "title": "Trade in Goods with World, Not Seasonally Adjusted",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "2017 and 2022 annual tables; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.census.gov/foreign-trade/balance/c0015.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2017/2022 annual TOTAL, Imports column + unit/seasonality notes",
        "scope": "完整读取世界年表同年同列及表头、口径",
        "purpose": "恢复份额分母并与中国进口匹配"
      },
      "supports": "同口径美国世界商品进口分母；名义 M 美元、未季调. 用于本站份额和增长率计算.",
      "branch": "common",
      "id": "EI14-all-READ-02"
    },
    {
      "source_id": "EIC-S04",
      "title": "Global Supply Chains: The Looming “Great Reallocation”",
      "authors": [
        "Laura Alfaro",
        "Davin Chor"
      ],
      "version": "HBS Working Paper 24-012; draft 2023-08-30",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.hbs.edu/ris/Publication%20Files/24-012_b2f8ef5c-dc1b-4897-b66e-0edea5a20942.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "HBS 24-012，2023-08-30；§2 印刷 p.5 / PDF 8；§4.2 印刷 pp.16–23 / PDF 19–26，式(2) / Table 3 及整节解释；§4.4 印刷 pp.26–30 / PDF 29–33，含 Figures 11–13 及图注.",
        "scope": "§2数据、§4.2完整采用回归设定和结果解释、§4.4完整单元与图注",
        "purpose": "区分Census总量/Comtrade产品回归；保留描述性身份、Vietnam2021及Count轴"
      },
      "supports": "固定历史版本的产品来源重配研究.§4.2式(2)/Table3为UN Comtrade HS4描述性WLS；§4.4区分间接贸易/投资联系和未完成的增加值核算. Figure11越南用2021，墨西哥用2022；Figure13纵轴Count.",
      "branch": "all",
      "id": "EI14-all-READ-03"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "trade": {
      "identity": "observed",
      "source_ids": [
        "EIC-S05",
        "EIC-S06"
      ],
      "unit": "nominal USD M; not seasonally adjusted",
      "period": [
        2017,
        2022
      ],
      "retrieved_at": "2026-09-21",
      "rows": [
        {
          "year": 2017,
          "china": 505165.1,
          "world": 2339591.3
        },
        {
          "year": 2022,
          "china": 536268.7,
          "world": 3239732.9
        }
      ]
    },
    "composition_toy": {
      "identity": "teaching_assumption",
      "within_product_china_shares": [
        0.5,
        0.1
      ],
      "product_weights_initial": [
        0.8,
        0.2
      ],
      "product_weights_final": [
        0.2,
        0.8
      ]
    },
    "selected_branch": "all",
    "network_toy": {
      "identity": "teaching_assumption",
      "unit": "USD, one matched production/export batch",
      "export_value": 100,
      "china_supplier_purchase": 40,
      "origin_assumed": "Vietnam",
      "ownership": null,
      "china_value_added": null,
      "input_range": [
        0,
        200
      ],
      "interpretation": "purchase-to-export ratio, not value-added or ownership share; zero exports gives undefined ratio"
    },
    "research": {
      "identity": "reported_research_estimate",
      "source_id": "EIC-S04",
      "table": "Table3 cols1–2; Eq(2)",
      "unit": "share-change coefficient; example converted consistently to percentage points",
      "rows": [
        {
          "destination": "Vietnam",
          "beta": -0.198,
          "cluster_se": 0.025,
          "n": 1149
        },
        {
          "destination": "Mexico",
          "beta": -0.079,
          "cluster_se": 0.02,
          "n": 1149
        }
      ],
      "estimation": "WLS; 2017 US imports from China by HS4 as weights; HS2 fixed effects; HS2-clustered SE",
      "hypothetical_delta_china_pp": -10,
      "hypothetical_delta_range": [
        -20,
        20
      ],
      "figure11_endpoints": {
        "Vietnam": 2021,
        "Mexico": 2022
      },
      "figure13_axis": "Count, not USD"
    },
    "default_results": {
      "trade": {
        "china_growth_pct": 6.157115762747667,
        "world_growth_pct": 38.474309594158605,
        "shares_pct": [
          21.59202335895163,
          16.552867676221084
        ],
        "share_change_pp": -5.03915568273054
      },
      "network": {
        "purchase_to_export_pct": 40,
        "ownership": null,
        "china_value_added": null
      },
      "partial_regression_terms_pp": {
        "Vietnam": 1.98,
        "Mexico": 0.79
      },
      "composition": {
        "initial_share_pct": 42,
        "final_share_pct": 18,
        "within_effect_pp": 0,
        "mix_effect_pp": -24
      }
    }
  },
  "answer_scope": "共同正文与所选分支的全部题目、解析和静态图表包含在唯一正文中；不从完整作者 Agent 再嵌入第二份正文.",
  "experiment_reading_boundary": "实验规格列出本节点全部视角；未选分支的原文须在实际启用该视角教学前加入required_readings并读取.",
  "default_branch": "application",
  "experiment_ids": [
    "exp-ei14-reallocation"
  ],
  "shared_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/inputs.json",
  "branch_exports": {
    "application": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/agent/EI-14.application.agent.md",
    "research": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/agent/EI-14.research.agent.md",
    "all": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/agent/EI-14.all.agent.md"
  }
}
```

## Supplied entry
<a id="ei14-network"></a>

## 采购、生产与所有权

生产地点取决于客户距离、运输成本、投入可得性、政策及协调成本. 装配地迁移可缩短最终交付距离，同时增加上游协调，或保留原有关键投入依赖.

我们把网络分成三层. **直接采购来源**记录最终进口货物从什么原产地进入统计；**生产联系**追问各环节使用什么上游投入，以及其中增加值来自哪里；**所有权联系**记录经营这些环节的企业由谁持有或控制. 采购金额是沿生产网络追踪的起点，但它还没有把该投入自身使用的进口和中间品扣开，所以采购来源与增加值来源仍需区分.

装配地改变而零件来源不变时，直接进口结构和上游依赖会沿不同路径变化；同一原产地企业更换上游来源，海关总量也可能保持不变.

本篇采用2017–2022美国商品进口历史窗口. Census年表用于复算金额与份额，Alfaro–Chor 2023-08-30稿用于分析产品层变化和间接联系；分别保留各自的数据来源及版本. [^china][^world][^paper]

<a id="ei14-totals"></a>
<a id="CASE-EI14-CENSUS-IMPORT-2017-2022"></a>

## 金额增长与份额变化

Census China和World年表中，取年度TOTAL的Imports列，以美国自中国进口除同年自世界进口. 两者均为名义USD M、未季调，份额计量进口金额构成.

| 年份 | 美国自中国进口 | 美国自世界进口 | 中国直接来源份额（约） |
|:--|--:|--:|--:|
| 2017 | 505,165.1 | 2,339,591.3 | 21.592% |
| 2022 | 536,268.7 | 3,239,732.9 | 16.553% |

*摘录：Census China / World 年表，2017与2022年度 TOTAL、Imports 列；份额为本站计算，原表金额保持不变. *[^china][^world]

令 $M_{C,t}$ 为美国自中国进口金额，$M_{W,t}$ 为美国总进口，份额为 $s_t=M_{C,t}/M_{W,t}$. 两期变化分别是

$$
g_C=\frac{536268.7}{505165.1}-1\approx6.157\%.
$$

$$
g_W=\frac{3239732.9}{2339591.3}-1\approx38.474\%.
$$

它们共同决定份额的相对变化：

$$
\frac{s_{2022}}{s_{2017}}
=\frac{1+g_C}{1+g_W}.
$$

中国来源金额增长约6.157%，世界来源总额增长约38.474%，因此中国份额由约21.592%降至16.553%，下降约5.039个百分点.

百分点计量份额之差，增长率计量金额的比例变化. 分析实际物量还需价格及产品构成资料.

<a id="ei14-composition"></a>

## 产品构成分解

设产品 $p$ 在美国总进口中的权重为 $w_{p,t}$，中国在该产品中的来源份额为 $s_{p,t}$，按同一分类和口径分组，有

$$
s_t=\sum_p w_{p,t}s_{p,t},\qquad \sum_p w_{p,t}=1.
$$

总份额可以因为产品内部的供应来源变化而变，也可以因为美国买了不同的产品组合而变. 把两期恒等式相减，可得到一组明确的分解：

$$
\Delta s
=\sum_p w_{p,0}\Delta s_p
+\sum_p \Delta w_p\,s_{p,1}.
$$

第一项固定基期产品权重，更新产品内来源份额；第二项固定末期来源份额，更新产品权重. 交换更新次序会重新分配分项，总变化保持相同. 该分解记录构成变化，迁移原因另需经营及政策证据.

试一个完全虚构的两产品例子. 中国在甲、乙两种产品中的来源份额始终分别为50%与10%. 美国进口的产品权重却从“甲80%、乙20%”变成“甲20%、乙80%”. 总中国来源份额于是从 $0.8\times0.5+0.2\times0.1=42\%$ 变成 $0.2\times0.5+0.8\times0.1=18\%$，下降24个百分点，但两种产品内部都没有换供应来源.

总量变化还需用产品层材料区分“同样产品换了来源”与“购买组合改变”；再结合订单、产能和企业资料定位具体生产环节.

<a id="ei14-choice"></a>

## 生产链与产品层证据

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="application">应用：追踪一条生产链</button>
<button type="button" data-select-reading-branch="research">研究：读回归与图注</button>
<button type="button" data-select-reading-branch="all">全部展开</button>
</div>

<section data-reading-branch="application">

<a id="ei14-chain"></a>
<a id="MODEL-EI14-MATCHED-PURCHASE-01"></a>

### 应用分支：采购与增加值

设一批出口美国的成品价值100美元，原产地已按适用规则认定为越南. 本批生产消耗40美元向中国供应商购买的投入，采购、消耗和出口批次匹配，企业股权资料未给出.

<div class="flow-diagram" role="group" aria-label="教学生产链：上游采购40美元，经越南工厂形成100美元出口；所有权未给定">
<div class="flow-node">中国供应商<br><strong>投入交易40美元</strong></div>
<div class="flow-arrow">供给投入 →</div>
<div class="flow-node">越南工厂<br><strong>加工／装配</strong></div>
<div class="flow-arrow">成品出口 →</div>
<div class="flow-node">美国进口者<br><strong>进口金额100美元</strong></div>
</div>

| 要回答的问题 | 本例已有的答案 | 继续判断所需资料 |
|:--|:--|:--|
| 成品直接原产地是什么 | 假定为越南 | 真实案例需原产地与申报材料 |
| 这批生产向中国供应商采购多少 | 40美元，占本批出口金额40% | 采购、消耗、库存和批次匹配 |
| 成品中有多少中国增加值 | 未给定 | 中国供应商自己的投入来源及各环节增加值 |
| 工厂与供应商由谁持有或控制 | 未给定 | 股权及控制关系，而非贸易流向 |

采购金额占出口金额40%. 若这笔投入中中国境内增加值占90%，对应36美元；占25%时对应10美元. 两种情况的采购额与成品原产地相同，增加值贡献却不同. 完整核算还需其他投入路径.

Alfaro–Chor 2023稿§§2、4.4说明，当时世界投入产出资料未覆盖所研究近年变化的完整增加值链条，因而结合贸易与投资资料讨论间接联系. [^paper]

若现有投入停供，第二来源需要18个月认证，三个月交付窗口只能依赖合格库存、确定到货或可提前完成的替代. 名单中的候选来源需经过规格与时间条件才能成为可用供给.

</section>

<section data-reading-branch="research">

<a id="ei14-regression"></a>
<a id="RESEARCH-EI14-ALFARO-CHOR-2023-08-30"></a>

### 研究分支：产品回归

Alfaro–Chor HBS Working Paper 24-012的2023-08-30稿使用UN Comtrade产品数据. [^paper]

§4.2式(2)将替代来源地的产品份额变化与中国来源份额变化联系起来. 将份额记为 $s$，其关系为

$$
\begin{aligned}
\Delta s_{p,c}^{17:22}
&=\beta_1\Delta s_{p,CN}^{17:22}\\
&\quad+\beta_2\Delta s_{p,c}^{12:17}\\
&\quad+\delta_{h(p)}+\varepsilon_p.
\end{aligned}
$$

$p$ 是 HS4 产品，$c$ 是某个替代来源地，$h(p)$ 为所属 HS2 大类. 左边和第一项都使用2017—2022的五年变化；第二项控制该来源地2012—2017的既有趋势；$\delta$允许大类有不同基准. 作者用2017年美国自中国进口各HS4产品的金额作加权最小二乘权重，并按HS2聚类标准误. 下表只摘取Table 3的越南和墨西哥两列，保留所用系数、标准误和样本数. [^paper]

| Table 3 摘项 | 越南列(1) | 墨西哥列(2) |
|:--|--:|--:|
| 中国份额变化的系数 $\beta_1$ | −0.198 | −0.079 |
| 对应聚类标准误 | 0.025 | 0.020 |
| HS4观察数 | 1,149 | 1,149 |
| HS2固定效应 | 是 | 是 |

用系数做一次单位清楚的解释：若某产品中国来源份额的变化为−10个百分点，仅式中第一项对越南列拟合值的贡献就是 $(-0.198)\times(-10)=+1.98$ 个百分点；墨西哥列相应为+0.79个百分点. 这只是第一项的拟合贡献，完整拟合值还包含既有趋势和固定效应.

作者将回归解释为产品层的描述性关联. 各来源份额共享分母且合计为1，单项政策或企业迁移的因果影响还需能区分同期冲击的识别安排. [^paper]

### 研究分支：间接贸易与投资联系

§4.4 Figures 11–13展示贸易伙伴自身的进口来源及对外投资联系. [^paper]

| 图 | 观察对象与纵轴 | 期间与必须保留的注记 |
|:--|:--|:--|
| Figure 11 A：越南 | 越南进口中各来源地的份额变化；百分点 | 2017→2021；因2022双边数据不完整而采用2021 |
| Figure 11 B：墨西哥 | 墨西哥进口中各来源地的份额变化；百分点 | 2017→2022 |
| Figure 12：欧盟 | 欧盟进口的来源份额变化；百分点 | 2017→2022，Eurostat资料版本标为2023-06-15 |
| Figure 13：制造业对外投资 | 图纵轴为Count；来源为fDi Markets | 2005—2022；单位为项目数 |

Figure 11的分母为越南或墨西哥进口总额. 要将其连接到美国供应链，还需确认相关投入进入对美出口生产；Figure 13项目计数可定位投资联系，工厂控制关系则需股权及控制资料.

</section>

<a id="ei14-interaction"></a>

## 数据比较与计算

<div data-experiment-slot="exp-ei14-reallocation"></div>

默认计算为：中国来源进口增长约6.157%，份额下降约5.039个百分点；教学生产链出口100、采购40，采购比40%.

<section data-reading-branch="research">

研究分支将中国来源份额变化设为−10个百分点，对越南、墨西哥拟合式第一项分别贡献1.98、0.79个百分点.

</section>

<a id="ei14-exercises"></a>

## 独立复算与迁移

### 金额与份额

用两张Census年表重算中国来源份额变化，再解释为什么真实金额增长与来源份额下降可以同时成立. 若只有两个总量，能否知道下降来自哪些HS4产品？

**解析.** 两年来源份额约21.592%、16.553%，变化约−5.039个百分点. 中国来源金额增约6.157%，低于总额约38.474%的增幅. 产品贡献需各产品的进口金额和来源构成；两产品例显示，单独改变产品权重也能改变总份额.

### 增加值与控制关系

沿100美元出口、40美元上游采购的例子，有人写“中国增加值40%，工厂为中国企业控制”. 请改写成一条已经有证据的结论，并为两个未知项分别指定资料.

**解析.** 该批出口消耗向中国供应商采购的投入40美元，占出口金额40%，成品原产地按题设为越南. 增加值核算需上游投入和各环节增加值，控制关系需股权及控制资料. 同一采购额在90%、25%的中国增加值假设下分别带入36、10美元.

### 认证与交付

设设备商有两国供应商，第二来源的新型号仍需18个月认证，当前研究三个月交付. 分析这项来源变化能带来什么.

**解析.** 固定型号、需求量与交付月份，核同规格库存、现有来源确定到货及第二来源最早合格交付. 若认证无法提前，第二来源在三个月窗口内供给为零，较长期才增加选择. 再核两家是否共享关键上游或控制主体. 型号认证、产能锁定及可执行交付安排可以更新判断.

<section data-reading-branch="research">

### 回归对象与图表期间

“Table 3 表明，中国份额减少10%，就会使越南进口增长1.98%，Figure 11 又用2022数据证明两国上游关系. ”这句话有哪几处需要修正？

**解析.** 自变量减少10个百分点，对越南来源份额拟合式第一项贡献1.98个百分点；完整拟合还含既有趋势和固定效应. Figure 11越南面板截止2021年，观察的是越南进口来源. 与美国进口产品回归连接，需要投入进入出口生产的证据.

</section>

[^china]: EIC-S05. U.S. Census Bureau，*Trade in Goods with China*；定位：2017/2022年度TOTAL的Imports列，名义 M 美元、未季调. https://www.census.gov/foreign-trade/balance/c5700.html
[^world]: EIC-S06. U.S. Census Bureau，*Trade in Goods with World, Not Seasonally Adjusted*；定位：2017/2022年度TOTAL的Imports列及口径注. https://www.census.gov/foreign-trade/balance/c0015.html
[^paper]: EIC-S04. Laura Alfaro、Davin Chor，*Global Supply Chains: The Looming “Great Reallocation”*，HBS Working Paper 24-012，2023-08-30稿；定位：§2（印刷p.5及延续）、§4.2式(2)、Table3（p.18，PDF物理页21）及该节解释、§4.4（pp.26–30）与Figures11–13（pp.27–28）. Table3使用UN Comtrade、2017金额权重、HS2固定效应与聚类标准误. https://www.hbs.edu/ris/Publication%20Files/24-012_b2f8ef5c-dc1b-4897-b66e-0edea5a20942.pdf

<link rel="stylesheet" href="/notebook/labs/ei-c/reader.css">
<script src="/notebook/labs/ei-c/reader-adapter.js" defer></script>

## Additional teaching material
## 静态计算

Census2017／2022中国来源份额约21.592%／16.553%，中国进口金额增约6.157%、世界总额增约38.474%，份额降约5.039个百分点. 教学出口100、采购40，对应采购比40%；增加值来源及所有权另取资料. 研究分支的−10个百分点对越南、墨西哥拟合式第一项分别贡献1.98、0.79个百分点. Figure 11越南截止2021、墨西哥截止2022；Figure 13计投资项目数.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei14-reallocation",
    "title": "来源份额与三层生产联系",
    "anchor": "ei14-interaction",
    "description": "只读Census历史额/份额；教学采购链不填VA或所有权；研究面板只算Table3式(2)第一项.",
    "inputs": {
      "observed": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/inputs.json#trade",
      "network": {
        "export_default": 100,
        "purchase_default": 40,
        "unit": "USD, same batch",
        "range": [
          0,
          200
        ],
        "origin": "Vietnam (assumed qualified)",
        "ownership": null,
        "value_added": null
      },
      "research": {
        "delta_china_pp_default": -10,
        "range": [
          -20,
          20
        ],
        "coefficients": [
          -0.198,
          -0.079
        ]
      }
    },
    "algorithm": [
      "shares=100*china/world; growth=100*(last/first-1); pp=share2022-share2017",
      "matched purchase ratio=100*purchase/export if export>0, otherwise null",
      "ownership and China VA always null unless independent new evidence supplied (no control for these in current lab)",
      "study partial term=reported beta*assumed regressor change in pp; not full fitted value",
      "composition: within-product shares .5/.1 unchanged; weights .8/.2 to .2/.8 => .42 to .18"
    ],
    "outputs": {
      "china_growth_pct": 6.157115762747667,
      "world_growth_pct": 38.474309594158605,
      "share_change_pp": -5.039155682730545,
      "network_ratio_pct": 40,
      "ownership": null,
      "value_added": null,
      "regression_partial_pp": [
        1.98,
        0.79
      ]
    },
    "boundaries": [
      "真实年表不可编辑；不取网页新年份代替冻结窗口.",
      "教学金额0..200有限数；出口0比率null；采购/出口可大于100%，但不称份额或VA.",
      "研究变量单位为百分点；delta -20..20；只算一项，不裁剪成预测概率.",
      "Figure11越南2021、墨西哥2022；Figure13是Count，不是USD.",
      "Census aggregate不可当作UN Comtrade HS4回归输入."
    ],
    "static_equivalent": {
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-c/static-equivalents.md#ei-14",
      "in_entry": "ei14-interaction"
    },
    "accessibility": "金额图与份额图标明轴及单位；三层网络分别标签；零分母显示未定义；完整表/静态文字可替代图.",
    "local_url": "/notebook/labs/ei-c/interactions.html?experiment=exp-ei14-reallocation#exp-ei14-reallocation",
    "implementation_files": [
      "/notebook/labs/ei-c/interactions.html",
      "/notebook/labs/ei-c/engine.js",
      "/notebook/labs/ei-c/inputs.json",
      "/notebook/labs/ei-c/inputs.js",
      "/notebook/labs/ei-c/ui.js",
      "/notebook/labs/ei-c/lab-adapter.js"
    ],
    "state": "staging_only_awaiting_Lead_UI"
  }
]
```

## Sources
- [Global Supply Chains: The Looming “Great Reallocation”](https://www.hbs.edu/ris/Publication%20Files/24-012_b2f8ef5c-dc1b-4897-b66e-0edea5a20942.pdf): 固定历史版本的产品来源重配研究.§4.2式(2)/Table3为UN Comtrade HS4描述性WLS；§4.4区分间接贸易/投资联系和未完成的增加值核算. Figure11越南用2021，墨西哥用2022；Figure13纵轴Count.
- [Trade in Goods with China](https://www.census.gov/foreign-trade/balance/c5700.html): 美国自中国进口商品的名义金额，单位 USD M，未作季节调整；本站使用 2017、2022 年 TOTAL Imports.
- [Trade in Goods with World, Not Seasonally Adjusted](https://www.census.gov/foreign-trade/balance/c0015.html): 同口径美国世界商品进口分母；名义 M 美元、未季调. 用于本站份额和增长率计算.

## Content relations
```json
[
  {
    "from": "zh-ei14",
    "relation": "part_of",
    "to": "industry-environment",
    "reason": "主要 topic 归属"
  },
  {
    "from": "ei14-network",
    "relation": "requires",
    "to": "zh-ei05",
    "reason": "沿生产链区分直接与间接投入",
    "required_competence": "会区分一跳采购和多轮生产需要；可就地短释",
    "at_section": "ei14-network"
  },
  {
    "from": "ei14-totals",
    "relation": "uses_method",
    "to": "zh-ei02",
    "reason": "历史总量、分母与数据版本",
    "at_section": "ei14-totals"
  },
  {
    "from": "ei14-regression",
    "relation": "supported_by",
    "to": "EIC-S04",
    "reason": "固定历史版本的产品来源重配研究.§4.2式(2)/Table3为UN Comtrade HS4描述性WLS；§4.4区分间接贸易/投资联系和未完成的增加值核算. Figure11越南用2021，墨西哥用2022；Figure13纵轴Count.",
    "locator": "HBS24-012, 2023-08-30; §2; §4.2 Eq(2)/Table3; §4.4/Figures11–13",
    "scope": "§2数据、§4.2完整采用回归设定和结果解释、§4.4完整单元与图注",
    "at_section": "ei14-regression"
  },
  {
    "from": "ei14-totals",
    "relation": "supported_by",
    "to": "EIC-S05",
    "reason": "美国商品进口的中国来源金额；名义 M 美元、未季调. 固定2017/2022 TOTAL Imports，不是论文Comtrade产品回归输入.",
    "locator": "2017/2022 annual TOTAL, Imports column + unit/seasonality notes",
    "scope": "完整读取两年表头、年度TOTAL及相关口径；只采用冻结两年",
    "at_section": "ei14-totals"
  },
  {
    "from": "ei14-totals",
    "relation": "supported_by",
    "to": "EIC-S06",
    "reason": "同口径美国世界商品进口分母；名义 M 美元、未季调. 用于本站份额和增长率计算.",
    "locator": "2017/2022 annual TOTAL, Imports column + unit/seasonality notes",
    "scope": "完整读取世界年表同年同列及表头、口径",
    "at_section": "ei14-totals"
  },
  {
    "from": "ei14-totals",
    "relation": "illustrated_by",
    "to": "CASE-EI14-CENSUS-IMPORT-2017-2022",
    "reason": "同口径金额和份额",
    "at_section": "ei14-totals"
  },
  {
    "from": "ei14-regression",
    "relation": "illustrated_by",
    "to": "RESEARCH-EI14-ALFARO-CHOR-2023-08-30",
    "reason": "固定研究版本",
    "at_section": "ei14-regression"
  },
  {
    "from": "ei14-chain",
    "relation": "illustrated_by",
    "to": "MODEL-EI14-MATCHED-PURCHASE-01",
    "reason": "明确假设的生产批次",
    "at_section": "ei14-chain"
  },
  {
    "from": "ei14-interaction",
    "relation": "illustrated_by",
    "to": "exp-ei14-reallocation",
    "at_section": "ei14-interaction",
    "reason": "只读Census历史额/份额；教学采购链不填VA或所有权；研究面板只算Table3式(2)第一项."
  }
]
```

## Related entries
