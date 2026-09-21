# 技术、创新与产业结构演变

沿技术能力、部署、采用、任务效果和价值取得，检验每一层的证据与聚合权重.

Entry: zh-ei13 | Node: EI-13 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 用产出1和9、单个采用且改善10%的例子推导聚合权重. 读取BTOS使用比例和QJE部署识别，区分企业数量、人员月份、任务表现及收益分配；用视觉检测的设备、数据和改造成本迁移. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei13",
  "node_id": "EI-13",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "重建基期产出加权的技术效果，比较企业采用调查和任务层研究.",
  "required_readings": [
    {
      "source_id": "BFDE-JEP",
      "title": "The Economics of Intangible Capital",
      "authors": [
        "Nicolas Crouzet",
        "Janice C. Eberly",
        "Andrea L. Eisfeldt",
        "Dimitris Papanikolaou"
      ],
      "version": "JEP 36(3), 2022, 29–52",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "印刷pp.30–34 Characteristics of Intangibles as Assets；pp.34–39 Production with Intangible Capital",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "信息的存储、使用中非竞争性、有限排他性及经营范围/投入之间的权衡. 本文不使用不存在的§2.1编号，也不声称证明附录."
      },
      "supports": "信息的存储、使用中非竞争性、有限排他性及经营范围/投入之间的权衡. 本文不使用不存在的§2.1编号，也不声称证明附录.",
      "id": "EI-13-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S11",
      "title": "Generative AI at Work",
      "authors": [
        "Erik Brynjolfsson",
        "Danielle Li",
        "Lindsey R. Raymond"
      ],
      "version": "QJE 140(2), 2025, 889–942",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://danielle-li.github.io/assets/docs/GenerativeAIatWork.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "印刷pp.901–908 IV.A–C、TablesI–II/FigureII；pp.910–915 skill/tenure；TableII p.907",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "5172人是全样本，Table II(3)为12295人月；0.301及15.2%的分母不同于表中总体均值. 大规模部署前有约50人的小型RCT；主要5172人结果来自受培训容量、预算和经理排期影响的错峰部署，用DiD/固定效应与event-study等识别，而不是把整个样本称随机试验."
      },
      "supports": "5172人是全样本，Table II(3)为12295人月；0.301及15.2%的分母不同于表中总体均值. 大规模部署前有约50人的小型RCT；主要5172人结果来自受培训容量、预算和经理排期影响的错峰部署，用DiD/固定效应与event-study等识别，而不是把整个样本称随机试验.",
      "id": "EI-13-READ-2",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S12",
      "title": "AI Use in Businesses",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "2026-05-26 article; BTOS window 2025-12-14 to 2026-05-03",
      "access": {
        "kind": "site_body",
        "uri": "https://www.census.gov/library/stories/2026/05/ai-use-businesses.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "调查窗口、May3 19.8%、2025-11-17问题表述改变的完整段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "企业数量采用率，不是产出或劳动份额；不能与QJE特定任务效果直接相乘."
      },
      "supports": "企业数量采用率，不是产出或劳动份额；不能与QJE特定任务效果直接相乘.",
      "id": "EI-13-READ-3",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei13-tech-path",
      "aggregation_formula": "sum(y_i * d_i * g_i) / sum(y_i)",
      "required_weight": "baseline output share when g_i is a relative output effect",
      "counterexample": {
        "baseline_outputs": [
          1,
          9
        ],
        "relative_gain_if_adopted": 0.1,
        "number_share_adoption": 0.5,
        "naive_number_share_times_gain": 0.05,
        "aggregate_growth_if_low_output_unit_adopts": 0.01,
        "aggregate_growth_if_high_output_unit_adopts": 0.09
      },
      "observed_sources_kept_separate": {
        "BTOS_business_AI_use_May_3_2026_pct": 19.8,
        "QJE_total_agents": 5172,
        "QJE_Table_II_col3_agent_months": 12295,
        "QJE_Table_II_col3_effect_resolutions_per_hour": 0.301,
        "QJE_source_reported_pct_effect_from_pretreatment_baseline": 15.2,
        "QJE_Table_II_overall_DV_mean": 2.176
      },
      "prohibited_real_world_product": "Do not multiply BTOS adoption share by QJE treatment effect."
    },
    "experiments": [
      {
        "id": "exp-ei13-tech-path",
        "node_id": "EI-13",
        "title": "数量权重与产出权重",
        "anchor": "ei13-aggregation",
        "method": "adoption",
        "controls": [
          {
            "key": "y1",
            "label": "单位1基期产出",
            "default": 1,
            "min": 0,
            "max": 100,
            "step": 0.5,
            "kind": "number"
          },
          {
            "key": "y2",
            "label": "单位2基期产出",
            "default": 9,
            "min": 0,
            "max": 100,
            "step": 0.5,
            "kind": "number"
          },
          {
            "key": "d1",
            "label": "单位1采用",
            "default": 1,
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "select",
            "options": [
              [
                0,
                "不采用"
              ],
              [
                1,
                "采用"
              ]
            ]
          },
          {
            "key": "d2",
            "label": "单位2采用",
            "default": 0,
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "select",
            "options": [
              [
                0,
                "不采用"
              ],
              [
                1,
                "采用"
              ]
            ]
          },
          {
            "key": "g1",
            "label": "单位1相对提升",
            "default": 0.1,
            "min": -1,
            "max": 1,
            "step": 0.01,
            "kind": "number"
          },
          {
            "key": "g2",
            "label": "单位2相对提升",
            "default": 0.1,
            "min": -1,
            "max": 1,
            "step": 0.01,
            "kind": "number"
          }
        ],
        "inputs": {
          "y1": 1,
          "y2": 9,
          "d1": 1,
          "d2": 0,
          "g1": 0.1,
          "g2": 0.1
        },
        "algorithm": "总基期Y=y1+y2>0；增量Σyi*di*gi；整体增幅=增量/Y. 数量权重比较式Σdi*gi/2只在等基期产出等条件下适用. 固定投入、无外溢、一致可加产出.",
        "static_equivalent": "y1=1,y2=9,g=10%；只低产出单位采用→总增长1%，只高产出单位采用→9%，数量权重均误报5%. 两者全不采用为0；总基期0拒绝.",
        "source_ids": [
          "BFDE-JEP",
          "EIDEF-S11",
          "EIDEF-S12"
        ],
        "identity": "teaching_assumption",
        "description": "数量权重与产出权重",
        "outputs": {
          "baseline": 10,
          "delta": [
            0.1,
            0
          ],
          "post_output": 10.1,
          "growth": 0.01,
          "weights": [
            0.1,
            0.9
          ],
          "adopter_output_share": 0.1,
          "adopter_count_share": 0.5,
          "count_weighted_gain": 0.05,
          "interpretation": "same population, additive baseline output, fixed inputs/no spillovers; not BTOS × QJE"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei13-tech-path",
      "text": "两个单位基期产出1、9，仅低产出者采用并改善10%时，总增长1%；仅高产出者采用时，总增长9%. 两者都采用、改善分别10%与2%时，总增长2.8%. 模型保持同一总体、可加产出、固定投入及无溢出，按基期产出权重计算 $\\sum_iw_i d_i g_i$.",
      "outputs": {
        "baseline": 10,
        "delta": [
          0.1,
          0
        ],
        "post_output": 10.1,
        "growth": 0.01,
        "weights": [
          0.1,
          0.9
        ],
        "adopter_output_share": 0.1,
        "adopter_count_share": 0.5,
        "count_weighted_gain": 0.05,
        "interpretation": "same population, additive baseline output, fixed inputs/no spillovers; not BTOS × QJE"
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
<a id="ei13-structure"></a>

## 技术能力与企业收益

技术可提高同等投入的产出、改善质量或使新任务可行. 企业获得的利润取决于部署、实际使用、互补投入及竞争后的收益分配.

<div class="flow">
<div>技术能力</div><span>接口、安全、成本</span>
<div>可部署产品</div><span>流程改造、培训</span>
<div>组织采用</div><span>真实使用与任务匹配</span>
<div>任务产出</div><span>价格、成本和收益分配</span>
<div>企业取得的收益</div>
</div>

部署受接口、安全和集成成本约束；使用受流程、培训及任务匹配影响；节省的任务时间再通过工资、软件收费和客户价格分配.

<a id="ei13-intangible"></a>

## 无形资本与互补投入

Crouzet等人的2022年JEP文章把无形资本视为能够储存并用于生产的信息，例如软件、数据、设计、组织流程. 文章特别强调使用中的非竞争性与有限排他性：同一信息能够在多个生产环节同时使用，但创造者未必能独占全部收益. [^jep]

信息可同时用于多处，服务器、整合服务、权限管理和人员仍需配置. 团队间转移知识也需传递使用语境，由此产生部署和协调成本.

该生产模型联合选择投资、经营范围及资源配置. 扩展范围使同一信息服务更多活动，也会增加模仿、协调及收益分享. [^jep]

非竞争性指同一资源可同时使用，网络效应指新增使用者改变其他使用者所得. 内部排班算法可复制到多个门店，其效用是否随门店数增长还取决于数据共享等具体机制.

<a id="ei13-evidence"></a>

## AI 使用与任务表现

先读美国人口普查局2026年5月26日的BTOS文章. 材料窗口为2025年12月14日至2026年5月3日，问企业是否在最近两周使用AI；5月3日的企业使用比例约19.8%. 该调查在2025年11月17日改变了问题表述，把关注范围由商品和服务生产扩展到业务功能，比较历史序列时必须保留这个变化. [^btos]

19.8%以企业为分母，描述采用广度. 测量产出影响还需采用者的使用强度、任务构成及产出权重.

再读Brynjolfsson、Li和Raymond的2025年QJE正式发表版. 研究观察一家公司客服工作的分阶段AI辅助部署，完整样本包括5,172名客服人员；关键回归以“人员—月份”为观测单位. [^qje]

| 正式材料定位 | 记录内容 | 应保留的单位 |
|---|---|---|
| Table I，p.903 | 全部5,172名客服人员 | 人员数 |
| Table II第(3)列，p.907 | 12,295条观测 | 人员—月份 |
| 同一列处理项系数 | 0.301 | 每小时成功解决问题数的增量 |
| 正文报告的相对提升 | 约15.2% | 相对处理前基准 |
| Table II总体因变量均值 | 2.176 | 不自动等于处理前组的分母 |

0.301为每小时成功解决问题数增量，15.2%相对处理前基准计算，2.176则为表中总体均值. 复算相对效果需使用对应处理前基准及未舍入值.

主要结果来自5,172人的错峰部署，时间由培训容量、预算和经理排期等决定；部署前另有约50人的小型随机试验. Table II(3)控制年月、地点、人员及工龄固定效应，事件研究与稳健估计检查动态. 因果解释依赖平行趋势、无预先反应等条件；技能和工龄分组显示效果存在差异. [^qje]

<a id="ei13-aggregation"></a>

## 产出聚合

另设教学模型：各单位同期间基期产出 $y_i\ge0$，采用状态 $d_i\in\{0,1\}$，采用后的相对变化 $g_i\ge-1$. 总投入固定，产出可加，无溢出，未采用者产出保持不变.

于是采用后产出是 $y_i(1+d_i g_i)$. 总产出增长率为

$$
\begin{aligned}
G&=\frac{\sum_i y_i(1+d_i g_i)-\sum_i y_i}{\sum_i y_i}\\
 &=\sum_i w_i d_i g_i,\\
w_i&=\frac{y_i}{\sum_jy_j}.
\end{aligned}
$$

这里要求总基期产出为正. 若所有采用者有相同的相对改善 $g$，才可以写成 $G=a_y g$，其中 $a_y=\sum_iw_i d_i$ 是**采用者的基期产出份额**. 用人数或企业数份额代替它，还需要各单位基期产出相等等额外条件.

设两个单位基期产出1和9，仅一个采用且增产10%.

| 谁采用 | 企业／单位数量采用率 | 采用者基期产出份额 | 总产出增长 |
|---|---:|---:|---:|
| 产出1的单位 | 50% | 10% | 1% |
| 产出9的单位 | 50% | 90% | 9% |
| 误用数量权重 | 50% | 未核 | 错算5% |

低产出单位采用后总量 $1.1+9=10.1$，增长1%；高产出单位采用后总量 $1+9.9=10.9$，增长9%. 差别由采用者的基期产出权重决定.

<div data-experiment-slot="exp-ei13-tech-path"></div>

若两单位基期产出均为5，仅一个采用并改善10%，总产出增长5%，此时数量权重和产出权重相等.

<a id="ei13-capture"></a>

## 收益分配与互补成本

单位劳动服务更多客户后，收益可经工资流向员工，经软件和集成费流向供应商，经降价流向客户. 企业同时承担部署、运行和维护投入.

作为另一条**分析关系**，可以把每期利润变化展开为：

$$
\Delta\Pi=\Delta(pq)-\Delta C_{\mathrm{operating}}
-\Delta C_{\mathrm{deployment}}.
$$

按一致期间比较资源占用时，若技术让产出效率提高但客户需求尚未增加，企业可能得到空闲时间而非额外销售；若竞争导致降价，收入提升又可能小于任务产出提升.

<a id="ei13-exercises"></a>

## 重建与迁移

<strong>任务一：</strong>两单位产出1和9，第一家提升10%，第二家不变，重建总增长. 为什么50%乘10%不对？

<strong>解析.</strong> 增量0.1除总基数10，增长1%. 第一家占单位数量50%、基期产出10%，加总采用产出权重. 各单位基期产出相等时，两种权重一致.

<strong>任务二：</strong>把第二家也设为采用，但它只提升2%. 总增长是多少？

<strong>解析.</strong> 新产出 $1.1+9.18=10.28$，增长2.8%；等价地，$0.1\times10\%+0.9\times2\%=2.8\%$.

<strong>任务三：</strong>团队看到BTOS企业采用19.8%与QJE客服效率15.2%，想算全经济AI提升. 请指出至少三个缺项.

<strong>解析.</strong> 需要同一总体的产出或工时权重、使用强度与任务构成、客服部署效果向其他任务迁移的依据，以及投入变化和溢出信息.

<strong>迁移任务：</strong>一项视觉检测技术准确率改善，但工厂需要新相机、数据标注和停线改造. 怎样给出不跳步的经营解释？

<strong>解析.</strong> 核任务质量与误报，设备、数据和改造成本，产线使用与故障率，再比较良率、工时、停线损失及客户验收. 技术改善可伴随短期成本上升，应按同一期间比较新增产出与互补投入.

[^jep]: BFDE-JEP. Crouzet、Eberly、Eisfeldt、Papanikolaou，2022，*The Economics of Intangible Capital*，JEP 36(3):29–52；定位：pp.30–34 “Characteristics of Intangibles as Assets”及pp.34–39 “Production with Intangible Capital”.[作者公开发表版](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf).
[^btos]: EIDEF-S12. U.S. Census Bureau，2026-05-26，*AI Use in Businesses*；定位：BTOS窗口2025-12-14至2026-05-03、问题表述变更及19.8%段落.[官方文章](https://www.census.gov/library/stories/2026/05/ai-use-businesses.html).
[^qje]: EIDEF-S11. Erik Brynjolfsson、Danielle Li、Lindsey R. Raymond，2025，*Generative AI at Work*，QJE 140(2):889–942；定位：pp.901–908 IV.A–C、Tables I–II、Figure II，以及pp.910–915技能／工龄异质性单元. [作者公开最终发表版](https://danielle-li.github.io/assets/docs/GenerativeAIatWork.pdf).

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>

## Additional teaching material
## 静态计算

两个单位基期产出1、9，仅低产出者采用并改善10%时，总增长1%；仅高产出者采用时，总增长9%. 两者都采用、改善分别10%与2%时，总增长2.8%. 模型保持同一总体、可加产出、固定投入及无溢出，按基期产出权重计算 $\sum_iw_i d_i g_i$.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei13-tech-path",
    "node_id": "EI-13",
    "title": "数量权重与产出权重",
    "anchor": "ei13-aggregation",
    "method": "adoption",
    "controls": [
      {
        "key": "y1",
        "label": "单位1基期产出",
        "default": 1,
        "min": 0,
        "max": 100,
        "step": 0.5,
        "kind": "number"
      },
      {
        "key": "y2",
        "label": "单位2基期产出",
        "default": 9,
        "min": 0,
        "max": 100,
        "step": 0.5,
        "kind": "number"
      },
      {
        "key": "d1",
        "label": "单位1采用",
        "default": 1,
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "select",
        "options": [
          [
            0,
            "不采用"
          ],
          [
            1,
            "采用"
          ]
        ]
      },
      {
        "key": "d2",
        "label": "单位2采用",
        "default": 0,
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "select",
        "options": [
          [
            0,
            "不采用"
          ],
          [
            1,
            "采用"
          ]
        ]
      },
      {
        "key": "g1",
        "label": "单位1相对提升",
        "default": 0.1,
        "min": -1,
        "max": 1,
        "step": 0.01,
        "kind": "number"
      },
      {
        "key": "g2",
        "label": "单位2相对提升",
        "default": 0.1,
        "min": -1,
        "max": 1,
        "step": 0.01,
        "kind": "number"
      }
    ],
    "inputs": {
      "y1": 1,
      "y2": 9,
      "d1": 1,
      "d2": 0,
      "g1": 0.1,
      "g2": 0.1
    },
    "algorithm": "总基期Y=y1+y2>0；增量Σyi*di*gi；整体增幅=增量/Y. 数量权重比较式Σdi*gi/2只在等基期产出等条件下适用. 固定投入、无外溢、一致可加产出.",
    "static_equivalent": "两个单位基期产出1、9，仅低产出者采用并改善10%时，总增长1%；仅高产出者采用时，总增长9%. 两者都采用、改善分别10%与2%时，总增长2.8%. 模型保持同一总体、可加产出、固定投入及无溢出，按基期产出权重计算 $\\sum_iw_i d_i g_i$.",
    "source_ids": [
      "BFDE-JEP",
      "EIDEF-S11",
      "EIDEF-S12"
    ],
    "identity": "teaching_assumption",
    "description": "数量权重与产出权重",
    "outputs": {
      "baseline": 10,
      "delta": [
        0.1,
        0
      ],
      "post_output": 10.1,
      "growth": 0.01,
      "weights": [
        0.1,
        0.9
      ],
      "adopter_output_share": 0.1,
      "adopter_count_share": 0.5,
      "count_weighted_gain": 0.05,
      "interpretation": "same population, additive baseline output, fixed inputs/no spillovers; not BTOS × QJE"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei13-tech-path",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [The Economics of Intangible Capital](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf): 无形资本的信息存储、使用中的非竞争性、有限排他性与过时，以及这些性质怎样影响企业经营范围和投入.
- [Generative AI at Work](https://danielle-li.github.io/assets/docs/GenerativeAIatWork.pdf): 主要研究样本为5,172人，采用受培训容量、预算和经理排期影响的错峰部署，以DiD、固定效应及event-study等识别；此前另有约50人的小型RCT. Table II(3)包含12,295人月，0.301与15.2%的分母分别按表中模型和对应基准解释.
- [AI Use in Businesses](https://www.census.gov/library/stories/2026/05/ai-use-businesses.html): 按企业数量统计的采用率；该口径衡量采用企业的比例.

## Content relations
```json
[
  {
    "from": "zh-ei13",
    "relation": "part_of",
    "to": "industry-dynamics",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei13",
    "relation": "uses_method",
    "to": "zh-ei03",
    "reason": "客户采用和替代"
  },
  {
    "from": "zh-ei13",
    "relation": "uses_method",
    "to": "zh-ei04",
    "reason": "部署与有效资源"
  },
  {
    "from": "zh-ei13",
    "relation": "uses_method",
    "to": "zh-ei07",
    "reason": "竞争与收益取得"
  },
  {
    "from": "zh-ei13",
    "relation": "uses_method",
    "to": "zh-ei08",
    "reason": "互补投入与建设时间"
  },
  {
    "from": "ei13-intangible",
    "relation": "supported_by",
    "to": "BFDE-JEP",
    "reason": "信息的存储、使用中非竞争性、有限排他性及经营范围/投入之间的权衡. 本文不使用不存在的§2.1编号，也不声称证明附录.",
    "locator": "印刷pp.30–34 Characteristics of Intangibles as Assets；pp.34–39 Production with Intangible Capital",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei13-intangible"
  },
  {
    "from": "ei13-evidence",
    "relation": "supported_by",
    "to": "EIDEF-S11",
    "reason": "5172人是全样本，Table II(3)为12295人月；0.301及15.2%的分母不同于表中总体均值. 大规模部署前有约50人的小型RCT；主要5172人结果来自受培训容量、预算和经理排期影响的错峰部署，用DiD/固定效应与event-study等识别，而不是把整个样本称随机试验.",
    "locator": "印刷pp.901–908 IV.A–C、TablesI–II/FigureII；pp.910–915 skill/tenure；TableII p.907",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei13-evidence"
  },
  {
    "from": "ei13-evidence",
    "relation": "supported_by",
    "to": "EIDEF-S12",
    "reason": "企业数量采用率，不是产出或劳动份额；不能与QJE特定任务效果直接相乘.",
    "locator": "调查窗口、May3 19.8%、2025-11-17问题表述改变的完整段",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei13-evidence"
  },
  {
    "from": "ei13-aggregation",
    "relation": "illustrated_by",
    "to": "exp-ei13-tech-path",
    "reason": "y1=1,y2=9,g=10%；只低产出单位采用→总增长1%，只高产出单位采用→9%，数量权重均误报5%. 两者全不采用为0；总基期0拒绝.",
    "at_section": "ei13-aggregation"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 8/10
从部署、采用、任务产出追踪收益归属，按基期产出权重聚合变化.
先选有信息职责的指标，再组织行业判断.
Next: [行业指标、比较与证据选择](https://ou-liu-red-sugar.github.io/zh/notebook/industry-metrics-evidence-selection/)
