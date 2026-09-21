# 业务关系、校准与共同经营状态

本页整理业务模型分析的输入、推演步骤和输出，供 P04、P28 的分析使用.

Entry: zh-pmbusinessstate | Node: PM-BUSINESS-STATE | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
这是按需查阅的方法参考. 定位读者所问的业务边界、证据校准、共同状态或资本部分，读取本参考对应完整单元. 以所选具体业务解释材料怎样修改经营关系，给出输入、输出与一项条件变化. 使用公司数据时，先读有日期案例及相应required_readings完整原文. 记录来源、版本、范围及支持内容；必要材料缺失时先补足，再进入依赖它的分析. runtime_reading_log记录实际读取.

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
      "source_id": "PBCD-METHOD-BUSINESS",
      "title": "业务关系、校准与共同经营状态",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "本页中读者所问的具名节",
        "scope": "该节完整文字与必要相邻定义",
        "purpose": "解决当前方法疑点，不强制延长为一课"
      },
      "supports": "规定业务边界、证据校准、共同经营状态与资本可行性的输入输出.",
      "authors": [
        "本站方法"
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/",
    "scope": "本站方法局部摘编"
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [],
  "content_version": "2026-09-22-deep-review",
  "learning_task": "定位读者所问的业务边界、证据校准、共同状态或资本部分，读取本参考对应完整单元. 以所选具体业务解释材料怎样修改经营关系，给出输入、输出与一项条件变化."
}
```

## Supplied entry
本页整理业务模型分析的输入、推演步骤和输出，供 P04、P28 的分析使用.

<a id="pm-business-state-business-boundaries"></a>
## 业务边界

按收费、需求/竞争、履约、成本、资本承担和权利的实质差异识别业务集合. 使用者、采购决策者和付款者分开；产品收费、客户、地域与共同资源是不同视角，只有同一口径、不重叠的量才可加总. 研究拆分可以细于财报分部，独立定价还需另检盈利、资本和权利的可识别性.

<a id="pm-business-state-calibration-contract"></a>
## 证据校准

输入是原始材料及可修改的经营关系. 完整方法要求：信息截止前最近三个不同季度的财报与对应电话会；至少代表性上游、下游各一跳的财务和研究材料；至少三份不同的实质外部研究，覆盖三个承重角度，并实际取得可留存的完整作品与承重上下文. 新上市、自然人下游、未公开材料分别保留适用范围与缺口.

逐项记录来源变化或冲突、受检验的经营关系、接受或修改理由及采用范围. 重复转述按同一证据计数. 客户资本开支需要经过采购结构、份额和时点，才能推到供应商订单.

<a id="pm-business-state-common-state-path"></a>
## 共同经营状态

共同条件影响企业及客户响应，再改变使用量、价格、组合、收入、成本及资金需求. 各业务沿同一经济状态推进，保留结构演变、季节性、周期、替代与创新.

需求延迟时，已投用工厂继续存在. 收入可能后移，折旧和维护仍存在，尚未下单的设备则可能调整. 把所有资本与收入一同平移，会遗漏这三种状态的差别.

<a id="pm-business-state-path-capital-check"></a>
## 资本与可行性

投入分别记录用途，以及承诺、取得、投用、折旧和付款日期. 折旧按既有资产费用化，维护资本按实际更新需求估计. 收入依赖融资、扩产或客户信贷时，同步计算需款日期、融资条件、利息和潜在损失.

交出业务集合、共享资源、关系式/约束、单位与时点、事实/代理/未来路径身份、资本和普通股接口，以及至少一个有依据的强替代.

## 与其他方法单元的接口

P04重建经营路径和资金，P28判断估值分组；P29/P30使用同一经营与资本结果，P05定义状态，P31组合股东结果.

[Amazon分部原件](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)用于分部实例；[IEA供给与融资小节](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)用于供给与融资机制实例.

## Sources
- [业务关系、校准与共同经营状态](https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/): 本站业务模型方法：业务边界、经营关系校准、共同资本与股东权利的归属.

## Content relations
```json
[
  {
    "from": "zh-pmbusinessstate",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
