# EI-D/E/F/G/H · 交互的静态等价

各实验的完整解释、推导和题解仍在对应正文；本文件提供同源默认计算，不要求点击.

## exp-ei10-rate-transmission · 年化利息与首年累计

teaching_assumption；正文锚：EI-10#ei10-repricing.

默认资产/浮债完全传导、旧浮债利差不变；ΔIA=AΔb，ΔIf=DfΔb，ΔIk=Dk*r*(Δb+Δsk).τ前净年化ΔIA−ΔIf，τ后再减ΔIk；首年累计ΔIA−ΔIf−(1−τ)ΔIk. 简单计息、余额固定，不给付息流水.

冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.

```json
{
  "inputs": {
    "cash": 200,
    "floating": 50,
    "fixed": 250,
    "rateBP": 200,
    "refiFraction": 0.4,
    "refiTime": 0.5,
    "refiSpreadBP": 0
  },
  "outputs": {
    "annual_asset_income": 4,
    "annual_floating_expense": 1,
    "annual_net_before_refinance": 3,
    "annual_refinance_expense": 2,
    "first_year_refinance_expense": 1,
    "annual_net_after_refinance": 1,
    "first_year_net_accrual": 2,
    "series": [
      {
        "t": 0,
        "annual_net": 3,
        "cumulative_accrual": 0
      },
      {
        "t": 0.08333333333333333,
        "annual_net": 3,
        "cumulative_accrual": 0.25
      },
      {
        "t": 0.16666666666666666,
        "annual_net": 3,
        "cumulative_accrual": 0.5
      },
      {
        "t": 0.25,
        "annual_net": 3,
        "cumulative_accrual": 0.75
      },
      {
        "t": 0.3333333333333333,
        "annual_net": 3,
        "cumulative_accrual": 1
      },
      {
        "t": 0.4166666666666667,
        "annual_net": 3,
        "cumulative_accrual": 1.25
      },
      {
        "t": 0.5,
        "annual_net": 1,
        "cumulative_accrual": 1.5
      },
      {
        "t": 0.5833333333333334,
        "annual_net": 1,
        "cumulative_accrual": 1.5833333333333333
      },
      {
        "t": 0.6666666666666666,
        "annual_net": 1,
        "cumulative_accrual": 1.6666666666666667
      },
      {
        "t": 0.75,
        "annual_net": 1,
        "cumulative_accrual": 1.75
      },
      {
        "t": 0.8333333333333334,
        "annual_net": 1,
        "cumulative_accrual": 1.8333333333333333
      },
      {
        "t": 0.9166666666666666,
        "annual_net": 1,
        "cumulative_accrual": 1.9166666666666667
      },
      {
        "t": 1,
        "annual_net": 1,
        "cumulative_accrual": 2
      }
    ],
    "units": "USD M; annualized rates versus first-calendar-year accrual; not payment-date cash"
  }
}
```

## exp-ei11-fx · 同币种同日自然匹配

teaching_assumption；正文锚：EI-11#ei11-invoice.

交易损益R*(e1−e0)与−C*(e1−e0)，净额(R−C)*(e1−e0). 美元功能货币、同一确认/结算时点、欧元量固定；无金融衍生品.

100/80欧元在1.10→1.05：资产−5、负债+4、净−1美元；净现金换算22→21. 错开日期题另按各自汇率，不能沿用同日净式.

```json
{
  "inputs": {
    "receivable": 100,
    "payable": 80,
    "e0": 1.1,
    "e1": 1.05
  },
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
```

## exp-ei12-rule-path · 30天来源资格与净需要

teaching_assumption；正文锚：EI-12#ei12-rebuild.

合格来源S=eligible?候选额:0；净需要=O−S，非负覆盖需要=max(O−S,0).30天内credit line贡献恒0. 来源与剩余buffer去重；没有B余额就不报buffer余缺. 类别不从资产自动计算.

120−50=70；如果50不合格，需覆盖120；另有授信20也不改变30天来源. 原资产62.5经20%折价为50，仅为正文补充变式.

```json
{
  "inputs": {
    "need": 120,
    "sources": 50,
    "eligible": true,
    "creditLine": 0,
    "category": "unknown"
  },
  "outputs": {
    "need": 120,
    "eligible_sources": 50,
    "excluded_sources": 0,
    "excluded_credit_line": 0,
    "signed_net_need": 70,
    "net_need": 70,
    "test_frequency": "先查完整分类，不能自动推定",
    "buffer_balance": null,
    "buffer_surplus": null,
    "interpretation": "30-day scenario net need; distinct source and reserve asset sets; not LCR/capital gap"
  }
}
```

## exp-ei13-tech-path · 数量权重与产出权重

teaching_assumption；正文锚：EI-13#ei13-aggregation.

总基期Y=y1+y2>0；增量Σyi*di*gi；整体增幅=增量/Y. 数量权重比较式Σdi*gi/2只在等基期产出等条件下适用. 固定投入、无外溢、一致可加产出.

y1=1,y2=9,g=10%；只低产出单位采用→总增长1%，只高产出单位采用→9%，数量权重均误报5%. 两者全不采用为0；总基期0拒绝.

```json
{
  "inputs": {
    "y1": 1,
    "y2": 9,
    "d1": 1,
    "d2": 0,
    "g1": 0.1,
    "g2": 0.1
  },
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
```

## exp-ei15-metric-contract · 指标的对象与证据职责

observed_and_derived；正文锚：EI-15#ei15-selection.

真实数值只读. 电力按 M USD/ K MWh换算；制造N=S+ΔB是统计构造，ΔI另列；零售同年重述差=(new/old−1)；银行前季NIM=本季−bp变化/100. 不同统计产品不互证.

电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp.

```json
{
  "inputs": {
    "branch": "electricity"
  },
  "outputs": {
    "branch": "electricity",
    "qty2024": 3975382,
    "qty2025": 4058007,
    "revenue": 553285,
    "growth": 2.0784166150573657,
    "averageCents": 13.634402306353833,
    "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
  }
}
```

## exp-ei16-industry-path · 售电、发电结构与经营路径

observed_and_derived；正文锚：EI-16#ei16-capital.

EPM1.1只读采用 Generation at Utility Scale Facilities 列组的五项能源与utility-scale total；不把右侧estimated small-scale solar并入该总量. 其余净额=utility-scale total−五项，逐项同比=(2025/2024−1). 地区按钮只改变定性条件路径，不生造价格弹性.86GW另列planned.

发电总量4,308,634→4,429,502 K MWh，+2.8052510%；售电+2.0784166%；天然气下降、煤/太阳能上升. 其余净额541981/557538.

```json
{
  "inputs": {
    "region": "rto"
  },
  "outputs": {
    "region": "rto",
    "rows": [
      {
        "key": "coal",
        "label": "煤炭",
        "y2024": 652156,
        "y2025": 737151,
        "growth": 13.03292463766339
      },
      {
        "key": "natural_gas",
        "label": "天然气",
        "y2024": 1869902,
        "y2025": 1807338,
        "growth": -3.345843792883263
      },
      {
        "key": "nuclear",
        "label": "核能",
        "y2024": 781865,
        "y2025": 784781,
        "growth": 0.37295441028821763
      },
      {
        "key": "hydro",
        "label": "常规水电",
        "y2024": 242896,
        "y2025": 247023,
        "growth": 1.6990810882023588
      },
      {
        "key": "utility_scale_solar",
        "label": "公用事业规模太阳能",
        "y2024": 219834,
        "y2025": 295671,
        "growth": 34.49739348781353
      },
      {
        "key": "residual",
        "label": "其余净额（重排）",
        "y2024": 541981,
        "y2025": 557538,
        "growth": 2.8703958256839357
      }
    ],
    "totals": [
      4308634,
      4429502
    ],
    "growth": 2.8052510377999162,
    "salesGrowth": 2.0784166150573657,
    "plannedGW": 86,
    "plannedIdentity": "2026计划，if realized；不是发电量",
    "path": "分时可用出力 → 现货/长期合同 → 燃料与对冲 → 净收入"
  }
}
```

## exp-ei17-static-capacity-complementarity · 产能互补松弛

teaching_assumption；正文锚：EI-17#ei17-kkt.

最大化aQ−Q²,0≤Q≤K. a≥0,K>0；Q=min(a/2,K),P=a−Q,μ=a−2Q. 显示slack与μ(Q−K)=0. a=0采用Q=P=μ=0. 模型为静态教学经济，不是IMES复现.

K80/a100→120：P,Q均50→60；K50/a120→130：Q50，P70→80，μ20→30；a100,K50：触边μ0.

```json
{
  "inputs": {
    "a": 120,
    "K": 50
  },
  "outputs": {
    "a": 120,
    "K": 50,
    "q": 50,
    "p": 70,
    "mu": 20,
    "slack": 0,
    "complementarity": 0,
    "regime": "绑定且乘子为正",
    "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
  }
}
```

## exp-ei17-fig7-relax-constraints · 同一输入路径，放松约束

teaching_assumption；正文锚：EI-17#ei17-fig7.

新增教学路径a=[100,120,130,110],K=[80,50,50,80]×scale；受限逐期用静态模型，松弛逐期P=Q=a/2. 不是论文通胀，不生成后验置信带. 作者实验流程另列同θ、同smoothed shocks、all-slack反事实及measurement error.

scale1时受限价格[50,70,80,55]，松弛[50,60,65,55]，价格差[0,10,15,0]. 均为抽象价格单位.

```json
{
  "inputs": {
    "capacityScale": 1
  },
  "outputs": {
    "rows": [
      {
        "period": 1,
        "a": 100,
        "K": 80,
        "constrained_q": 50,
        "constrained_p": 50,
        "slack_q": 50,
        "slack_p": 50,
        "difference": 0,
        "mu": 0
      },
      {
        "period": 2,
        "a": 120,
        "K": 50,
        "constrained_q": 50,
        "constrained_p": 70,
        "slack_q": 60,
        "slack_p": 60,
        "difference": 10,
        "mu": 20
      },
      {
        "period": 3,
        "a": 130,
        "K": 50,
        "constrained_q": 50,
        "constrained_p": 80,
        "slack_q": 65,
        "slack_p": 65,
        "difference": 15,
        "mu": 30
      },
      {
        "period": 4,
        "a": 110,
        "K": 80,
        "constrained_q": 55,
        "constrained_p": 55,
        "slack_q": 55,
        "slack_p": 55,
        "difference": 0,
        "mu": 0
      }
    ],
    "identity": "same demand sequence, constraint switched off; additional teaching data, not Fig.7 posterior simulation"
  }
}
```

## exp-ei17-fig9-interaction · 条件效应与非线性交互

teaching_assumption；正文锚：EI-17#ei17-fig9.

基准a100,K80；分别计算P(0,0),P(u,0),P(0,v),P(u,v). conditional=P(u,v)−P(0,v)；interaction=conditional−[P(u,0)−P(0,0)]. 非线性不强制贡献加总100%.

默认价格[50,65,50,80]；单独需求15、容量单独0、容量背景下需求30、交互15. 教学价格，不是作者Figure9数值.

```json
{
  "inputs": {
    "demandShock": 30,
    "capacityReduction": 30
  },
  "outputs": {
    "baseline": {
      "a": 100,
      "K": 80,
      "q": 50,
      "p": 50,
      "mu": 0,
      "slack": 30,
      "complementarity": 0,
      "regime": "松弛",
      "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
    },
    "demand_only": {
      "a": 130,
      "K": 80,
      "q": 65,
      "p": 65,
      "mu": 0,
      "slack": 15,
      "complementarity": 0,
      "regime": "松弛",
      "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
    },
    "capacity_only": {
      "a": 100,
      "K": 50,
      "q": 50,
      "p": 50,
      "mu": 0,
      "slack": 0,
      "complementarity": 0,
      "regime": "恰好触边，乘子为零",
      "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
    },
    "joint": {
      "a": 130,
      "K": 50,
      "q": 50,
      "p": 80,
      "mu": 30,
      "slack": 0,
      "complementarity": 0,
      "regime": "绑定且乘子为正",
      "identity": "one-period competitive teaching model; abstract price/output, not the IMES model"
    },
    "demand_effect_without_capacity": 15,
    "capacity_alone_effect": 0,
    "conditional_demand_effect": 30,
    "interaction": 15,
    "total_effect": 30,
    "identity": "price-unit four-state teaching example; difference operation mirrors Fig.9b, not estimated inflation"
  }
}
```

## exp-ei18-paper-map · 交互项导数与工作例单位

teaching_assumption；正文锚：EI-18#ei18-table.

Table2(2)beta2=.214,beta4=.398固定；m(C)=beta2+beta4*C. mhigh−mlow=beta4ΔC；额外条件log差=beta4ΔCΔF，logpoints=100×log差，精确相对差=expm1(log差). 保持原文单位歧义提示.

C=.10/.12斜率.2538/.26176；仅在本篇声明的working scale（cash gap按0.02、ΔF=5.25）下，.04179 log units=4.179 logpoints≈4.27%精确相对变化. 来源单位疑点保留；非公司回报预测.

```json
{
  "inputs": {
    "cashLow": 0.1,
    "cashGap": 0.02,
    "ffrPP": 5.25
  },
  "outputs": {
    "cashLow": 0.1,
    "cashHigh": 0.12000000000000001,
    "derivativeLow": 0.2538,
    "derivativeHigh": 0.26176,
    "derivativeDifference": 0.00796,
    "logDifference": 0.04179,
    "logPoints": 4.179,
    "exactRelativeDifference": 0.04267549390443921,
    "interpretation": "Table2(2) conditional interaction; declared working-scale illustration with FFR=5.25 and cash-ratio gap encoded as 0.02; paper unit ambiguity retained; not company forecast"
  }
}
```

