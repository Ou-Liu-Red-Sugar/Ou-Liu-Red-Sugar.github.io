# 表现评价与归因：资金、费用与基准

同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因.

Entry: zh-p12 | Node: P12 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 用初始100、中途追加100及10%/−10%回报重建金额、TWR和MWR. 加每期费用2，分别改变应计及付款时点. 将现金回报与BusEq/FF3同版本样本归因对应到各自对象，完成费用归属迁移题. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p12",
  "learning_task": "用初始100、中途追加100及10%/−10%回报重建金额、TWR和MWR. 加每期费用2，分别改变应计及付款时点. 将现金回报与BusEq/FF3同版本样本归因对应到各自对象，完成费用归属迁移题.",
  "required_readings": [
    {
      "source_id": "P-R03",
      "title": "2020 GIPS Standards Handbook for Firms",
      "authors": [
        "CFA Institute"
      ],
      "version": "2020标准及官方在线手册",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "1.A.35；2.A.23–24；2.A.29；2.A.30；2.B.4",
        "scope": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
        "purpose": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因."
      },
      "supports": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
      "limits": "教学采用，不宣称全套GIPS合规；2.B.4是建议，不改称强制."
    },
    {
      "source_id": "PI-FRENCH-FACTORS",
      "title": "Fama/French 3 Factors: Description",
      "authors": [
        "Kenneth R. French"
      ],
      "version": "固定202607 CRSP vintage数据，2026-09-21记录",
      "access": {
        "kind": "html_full_text",
        "uri": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/f-f_factors.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整定义页；RF来源变更与因子构造",
        "scope": "市场、SMB、HML与RF定义；2024-06起RF来源变更.",
        "purpose": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因."
      },
      "supports": "市场、SMB、HML与RF定义；2024-06起RF来源变更.",
      "limits": "实际回归使用包内固定CSV，不下载更新版本替换."
    },
    {
      "source_id": "QTC-FRENCH30",
      "title": "30 Industry Portfolios: BusEq",
      "authors": [
        "Kenneth R. French"
      ],
      "version": "202607 CRSP database；CIZ回溯重建",
      "access": {
        "kind": "html_full_text",
        "uri": "https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "行业定义说明；monthly value-weighted BusEq 201601–202512",
        "scope": "固定120个月研究组合的身份.",
        "purpose": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因."
      },
      "supports": "固定120个月研究组合的身份.",
      "limits": "不是基金净回报，不是每月当时已知的点时版本."
    },
    {
      "source_id": "P-R04b",
      "title": "15.401 Finance Theory I: CAPM and APT",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
      ],
      "version": "Fall 2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides2–27；beta6、回归16–18、评价及多因子相应单元",
        "scope": "beta、因子投影与绩效评价的模型身份.",
        "purpose": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因."
      },
      "supports": "beta、因子投影与绩效评价的模型身份.",
      "limits": "旧讲义不当作当前实证；样本截距不证明技能."
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_inputs": [
      {
        "id": "OBS-PK-BUSEQ-FF3-201601-202512",
        "owner": "P27",
        "consumers": [
          "P27",
          "P12"
        ],
        "version": "202607-CRSP-vintage/final-20260921",
        "unit": {
          "returns": "monthly decimals",
          "coefficients": "regression units"
        },
        "identity": "Retrospective BusEq research portfolio + same-vintage FF3; not investable fund or point-in-time vintage.",
        "defaults": {
          "first_month": 201601,
          "last_month": 202512,
          "n": 120
        },
        "default_results": {
          "raw_mean": 0.021445,
          "rf_mean": 0.0017416666666666668,
          "excess_mean": 0.019703333333333333,
          "market_only": {
            "alpha": 0.007019047298710774,
            "mkt": 1.1752871007294476,
            "r2": 0.7521400433210795
          },
          "ff3": {
            "alpha": 0.006608288107652583,
            "mkt": 1.189948308522266,
            "smb": -0.057013935898158966,
            "hml": -0.37581473976432667,
            "r2": 0.8089633080072767,
            "mean_contributions": {
              "mkt": 0.012842517119726558,
              "smb": 9.844406265082114e-05,
              "hml": 0.00015408404330337412
            }
          }
        },
        "branch_boundaries": {
          "P27": "In-sample model attribution only.",
          "P12": "Reuse same identity; no second fund history.",
          "compounding": "Mean contributions add; separately compounded components do not."
        }
      },
      {
        "id": "SIM-PK-FLOW-01",
        "owner": "P12",
        "consumers": [
          "P12"
        ],
        "version": "final-20260921",
        "unit": {
          "wealth": "currency units",
          "return": "decimal per equal period"
        },
        "identity": "Two-period cash-flow/fee teaching ledger; not GIPS compliance report.",
        "defaults": {
          "initial": 100,
          "gross_returns": [
            0.1,
            -0.1
          ],
          "external_contribution_after_period1": 100,
          "fee_each_period_end": 2
        },
        "default_results": {
          "gross": {
            "ending": 189,
            "money_profit": -11,
            "twr": -0.01,
            "mwr": -0.03712611616722061
          },
          "baseline_net": {
            "event_order": [
              "100→110",
              "fee recognized/paid→108",
              "contribution100→208",
              "-10%→187.2",
              "fee→185.2"
            ],
            "ending": 185.2,
            "twr": -0.03838461538461535,
            "mwr": -0.05017242404484534
          },
          "deferred_payment_only": {
            "definition": "Fee already recognized/accrued before contribution; payment later.",
            "twr": -0.03838461538461535,
            "rule": "Payment does not reduce NAV again."
          },
          "recognized_after_contribution": {
            "event_order": [
              "100→110",
              "contribution100→210",
              "fee recognized/paid→208",
              "-10%→187.2",
              "fee→185.2"
            ],
            "ending": 185.2,
            "twr": -0.02990476190476188,
            "mwr": -0.05017242404484534
          }
        },
        "required_source_additions": [
          {
            "source_id": "P-R03",
            "locator": "2.A.30",
            "purpose": "net-of-fees methodology"
          },
          {
            "source_id": "P-R03",
            "locator": "2.B.4",
            "purpose": "fee accrual/recognition versus payment"
          }
        ],
        "branch_boundaries": {
          "migration_question": "Use recognized-after-contribution branch for exact numeric answer; also explain deferred payment branch.",
          "compliance": "No GIPS compliance claim."
        }
      }
    ],
    "operational_details": {},
    "static_default_result": {
      "unit": "currency units",
      "mode": "baseline",
      "ending": 185.2,
      "money_pnl": -14.800000000000011,
      "twr": -0.03838461538461546,
      "mwr_per_equal_period": -0.05017242404484534,
      "first_return": 0.08000000000000007,
      "second_return": -0.10961538461538467,
      "note": "费用、外部入金与支付事件不同；两个期间长度相等，但没有指定年数，MWR不称年化."
    },
    "attachments": [
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/performance-event-ledgers.csv",
        "branch": "core",
        "sha256": "c29630cf51e7973509cff2bc5a6483ec05de537274eb356af7ef39da02608980",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      },
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/factor-attribution-input-201601-202512.csv",
        "branch": "core",
        "sha256": "0cb80e5bdcbc1727d0e1318a734a98a1f1fdb52805b8a271bc3213c92d13d5fe",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      }
    ],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "OBS-PK-BUSEQ-FF3-201601-202512": "core",
      "SIM-PK-FLOW-01": "core"
    },
    "operational_scopes": {},
    "frozen_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json",
    "reproduction_data_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/runtime-inputs.json"
  },
  "source_id_aliases": {
    "PE-CME-MES": "MA-MES",
    "MP-CME-GRAIN": "MP-CME-GRAIN",
    "PI-CME-CORN": "PI-CME-CORN",
    "MP-CME-3Y": "MP-CME-3Y",
    "MP-CME-TREAS": "MP-CME-TREAS",
    "MD-S05": "MD-S05",
    "MD-S08": "MD-S08",
    "PE-FSB-MARGIN": "MA-FSB",
    "PI-CME-EUR": "PI-CME-EUR",
    "PI-MIT-CAPM03": "PI-MIT-CAPM03",
    "PI-MIT-CAPM08": "P-R04b",
    "PI-FRENCH-FACTORS": "PI-FRENCH-FACTORS",
    "QTDE-FRENCH": "QTC-FRENCH30",
    "QTDE-FRENCH-REGIME": "QTC-FRENCH",
    "PI-GIPS20": "P-R03",
    "MEFG-CHICAGOFED-2025": "PFH-CHIFED2025",
    "QTDE-TSCV": "QS02-5.10",
    "QGHI-MIT-BS13": "QGHI-MIT-BS13",
    "MD-S01": "MD-S01",
    "MOD-CRYPTO-CARRY": "MOD-CRYPTO-CARRY",
    "MOD-PERP-PAPER": "MOD-PERP-PAPER",
    "MOD-BYBIT-FUNDING": "MOD-BYBIT-FUNDING",
    "PI-BYBIT-FEE": "PI-BYBIT-FEE",
    "MOD-BYBIT-PNL": "MOD-BYBIT-PNL",
    "PI-CME-MBT": "PI-CME-MBT",
    "PI-CME-CRYPTO-FAQ": "PI-CME-CRYPTO-FAQ",
    "MOD-LVR": "MOD-LVR",
    "MOD-UNISWAP-V3": "MOD-UNISWAP-V3"
  },
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
同一现金路径可以同时产生金额损益、时间加权回报和资金加权回报；三者回答的问题不同. 评价前先固定对象、期间、现金流与基准，再把费用确认/付款和模型归因接到相应层级.

<a id="p12-objects"></a>
## 金额结果与组合回报

教学例有两个等长期间，初始投入100. 第一期毛回报10%，价值升至110；此时追加100，第二期以210开始，下跌10%后终值189. 总投入200，金额损失11；第二笔100只参与第二期.

在外部现金流处分开估值，时间加权回报连接各子期：

$$
1+R_{TWR}=\frac{110}{100}\times\frac{189}{210}
=1.10\times0.90=0.99.
$$

两期TWR为−1%. 第二期承担下跌的本金较多，金额结果和资金加权回报相应受影响.[^gips12]

<a id="p12-irr"></a>
## 资金加权回报

从投资者视角，时点0付100，时点1再付100，时点2收189. 设每个等长期间的资金加权回报为 $r$，则

$$
100(1+r)^2+100(1+r)=189.
$$

令 $x=1+r>0$，方程正根给出 $r\approx-3.713\%$. 这是每个等长期间的回报，年化需要另给期间长度.

本例先后投入、最终收回，对应唯一正增长因子根. 多次改变收付方向的现金流可能有多个 IRR，需保留完整日期现金比较.

<a id="p12-fees"></a>
## 费用与投入基数

现在每期期末扣2费用，并规定第一期费用在追加100之前确认并支付. 路径为：100涨至110，扣2后108；再投入100到208；下跌10%到187.2，再扣2，最后185.2.

| 口径 | 第一期末入金前净值 | 第二期开端 | 终值 | 金额损益 | 两期TWR | 每期MWR |
|---|---:|---:|---:|---:|---:|---:|
| 毛回报 | 110 | 210 | 189 | −11 | −1.000% | −3.713% |
| 入金前确认费用 | 108 | 208 | 185.2 | −14.8 | −3.838% | −5.017% |

按费用后的子期净值计算 TWR：

$$
\frac{108}{100}\times\frac{185.2}{208}-1
\approx-3.838\%.
$$

净MWR则把现金流方程中的189改为185.2，得到约−5.017%/期. 毛净终值只差3.8而非4，因为第一期少投入的2没有在第二期承受10%跌幅. 费用的金额、确认日期和支付日期都要进入账本. [^fees12]

<a id="p12-recognition"></a>
## 费用确认与支付

若费用2已在入金前应计、稍后才支付，入金前现金110、应付费用2，净资产108. 追加100后现金210、负债2，净资产208；支付时现金和负债同时减少2，净资产仍为208，TWR保持不变.

另一种教学安排则真的改变费用归属：入金前尚未确认费用，先把110和新增100合成210，再立即确认并扣2到208，其间没有价格变化. 外部入金处的净值切点不同：第一子期回报是10%，第二子期从210开始、以185.2结束，因此

$$
1.10\times\frac{185.2}{210}-1
\approx-2.99\%.
$$

两种安排完成“入金加扣款”以后都是208，最终也都是185.2，外部现金流日期相同，所以MWR仍约为−5.017%/期. 差别来自费用在外部流切点前还是后被确认，从而落入不同子期的净回报. GIPS 2.B.4建议按应计反映管理费，以匹配经济发生而非只跟现金付款走. [^fees12]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-a.svg" alt="费用确认与付款在入金边界两侧的账户变化."></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同一个终值，不同费用归属切点</p><p class="pfh-figure-note">外部现金100在第1期后投入；每期费用2</p><ol class="pfh-flow-steps"><li><strong>基准：入金前确认</strong><p>100 → 110 → 108 → 208 → 185.2</p><p>入金切点净资产108；TWR −3.838%</p></li><li><strong>仅延期支付</strong><p>入金前现金110，应付费用2，NAV108</p><p>支付时现金/负债同减；TWR不变</p></li><li><strong>入金后才确认</strong><p>100 → 110 → 210 → 208 → 185.2</p><p>入金切点净资产110；TWR −2.990%</p></li></ol></div></figure>

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P12-b.svg" alt="费用确认分支：相同终值与MWR，可以对应不同的净TWR切段. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">金额、时间加权和资金加权不是同一量</p><p class="pfh-figure-note">两个等长期间；MWR为每期间，不是年化</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>两期TWR</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>每期MWR</span></li></ul><p class="pfh-axis-label">%</p><div class="pfh-plot" style="--pfh-y-label-ch:6"><div class="pfh-y-ticks"><span style="top:100.0%">-5.50</span><span style="top:75.0%">-4.25</span><span style="top:50.0%">-3.01</span><span style="top:25.0%">-1.76</span><span style="top:0.0%">-0.52</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 430.00,264.98 765.00,224.13" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,258.92 430.00,321.77 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.22580645161287" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="264.9812215573822" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="224.12578395665554" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="258.9178460085559" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">无费用</span><span class="" style="left:50.0%">入金前确认</span><span class="last" style="left:100.0%">入金后确认</span></div></div></div></figure>

<div data-experiment-slot="EXP-P12-PERFORMANCE"></div>

四种费用时序用于比较：毛回报、入金前确认、已应计但晚付款、入金后才确认. “已应计但晚付款”和“入金前确认”应有相同TWR；不同确认时点可有相同终值和MWR但不同TWR，差异来自外部流切点的净资产.

<a id="p12-attribution"></a>
## 模型归因

P27的BusEq/FF3模型使用同版本120个月数据. 月平均超额回报约1.97%，分解为截距0.661%、市场贡献1.284%、SMB贡献0.01%、HML贡献0.015%. 这些量对应回归样本中的均值分解.

金额结果按现金账计算，组合回报按子期连接，回归归因按指定模型分解. 多期复利会产生交叉项，各归因贡献分别复合后再加总通常无法恢复总回报.

保证金调拨转移账户资产，借款同时增加现金和负债，追加自有资金构成外部流. P24的采购对冲按有效采购成本评价，与投资账户的回报目标不同.

<a id="p12-exercises"></a>
## 练习与解析

**解释题.** 毛终值189、总投入200，为什么TWR是−1%，而金额损失11？

TWR把10%与−10%依次复合，不受中间新增本金大小影响. 金额亏损则反映第二期有更多本金承受下跌. 两者分别评价单位资金连续表现与投资者实际盈亏，所以不需要数值相等.

**迁移题.** 费用在入金后才首次确认，且当刻无价格变化，终值185.2. 净TWR和MWR是什么？若只是延迟支付已确认费用呢？

入金后首次确认时，净TWR约−2.99%，MWR解 $100(1+r)^2+100(1+r)=185.2$，约−5.017%/期. 若已在入金前应计，第一期净值108，净TWR约−3.838%；付款时现金和应付费用同减.

[^gips12]: CFA Institute，[GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/)，1.A.35、2.A.23–24、2.A.29：时间加权、资金加权及外部流估值单元.
[^fees12]: 同一GIPS手册，2.A.30完整费用方法单元与2.B.4完整费用应计单元. 这里采用其费用计量与应计/付款区分.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P12-PERFORMANCE",
    "node_id": "P12",
    "title": "表现评价与归因：资金、费用与基准",
    "anchor": "p12-recognition",
    "description": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因.",
    "inputs": {
      "frozen_ids": [
        "OBS-PK-BUSEQ-FF3-201601-202512",
        "SIM-PK-FLOW-01"
      ],
      "operational_keys": [],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "应计负债与现金/NAV",
      "TWR和MWR评价对象"
    ],
    "boundaries": [
      "真实规格不等于当前保证金或成交",
      "不得从终点补造未提供的资金路径",
      "输入无效即停止，不能沿用旧结果"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P12-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P12-b.svg"
      ],
      "body_tables": true,
      "event_data": [
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/performance-event-ledgers.csv",
          "branch": "core",
          "sha256": "c29630cf51e7973509cff2bc5a6483ec05de537274eb356af7ef39da02608980",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        },
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/factor-attribution-input-201601-202512.csv",
          "branch": "core",
          "sha256": "0cb80e5bdcbc1727d0e1318a734a98a1f1fdb52805b8a271bc3213c92d13d5fe",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        }
      ]
    },
    "input_controls": [
      {
        "key": "mode",
        "label": "费用身份",
        "type": "select",
        "default": "baseline",
        "options": [
          {
            "value": "baseline",
            "label": "入金前确认并支付"
          },
          {
            "value": "gross",
            "label": "无费用"
          },
          {
            "value": "deferred",
            "label": "先应计，推迟付款"
          },
          {
            "value": "after",
            "label": "入金后才确认并支付"
          }
        ]
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/): GIPS对外部现金流、时间加权回报、资金加权回报、费用处理以及费用应计与付款的规定.
- [MIT 15.401, Lecture 15–17: The CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf): CAPM与APT中的beta、因子投影及绩效评价方法.
- [Fama/French 3 Factors: Description](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/f-f_factors.html): 市场、SMB、HML与RF定义；2024-06起RF来源变更.
- [30 Industry Portfolios](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html): 30 个行业研究组合的构造与月收益口径，包括 BusEq 组合的行业身份.

## Content relations
```json
[
  {
    "from": "zh-p12",
    "relation": "part_of",
    "to": "portfolio-implementation",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p12",
    "relation": "uses_method",
    "to": "zh-p02",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p12",
    "relation": "uses_method",
    "to": "zh-p27",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p12",
    "relation": "illustrated_by",
    "to": "p27-data",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "zh-p12",
    "relation": "illustrated_by",
    "to": "p12-fees",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p12-fees",
    "relation": "supported_by",
    "to": "P-R03",
    "reason": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
    "locator": "1.A.35；2.A.23–24；2.A.29；2.A.30；2.B.4",
    "scope": "外部现金流、TWR/MWR、净费用方法和费用应计/付款."
  },
  {
    "from": "p12-attribution",
    "relation": "supported_by",
    "to": "PI-FRENCH-FACTORS",
    "reason": "市场、SMB、HML与RF定义；2024-06起RF来源变更.",
    "locator": "完整定义页；RF来源变更与因子构造",
    "scope": "市场、SMB、HML与RF定义；2024-06起RF来源变更."
  },
  {
    "from": "p12-attribution",
    "relation": "supported_by",
    "to": "QTC-FRENCH30",
    "reason": "固定120个月研究组合的身份.",
    "locator": "行业定义说明；monthly value-weighted BusEq 201601–202512",
    "scope": "固定120个月研究组合的身份."
  },
  {
    "from": "p12-attribution",
    "relation": "supported_by",
    "to": "P-R04b",
    "reason": "beta、因子投影与绩效评价的模型身份.",
    "locator": "slides2–27；beta6、回归16–18、评价及多因子相应单元",
    "scope": "beta、因子投影与绩效评价的模型身份."
  },
  {
    "from": "p12-recognition",
    "relation": "illustrated_by",
    "to": "EXP-P12-PERFORMANCE",
    "reason": "同一现金路径计算金额、TWR与MWR，分清费用确认和付款，再连接模型归因."
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 9/9
区分金额、时间加权、资金加权和费用确认，再选择合适基准.
