# 业务关系、校准与共同经营状态

本站原创方法摘编，规定业务边界、校准与共同资本责任；公开原件各自支持实例，不是完整方法的外部背书.

Entry: zh-pmbusinessstate | Node: PM-BUSINESS-STATE | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
这是T10短参考，不扩写成另一篇课程. 先读取当前短参考和读者问题所涉及的实际单元，说明其输入、输出与条件；需要公司数字才读取有日期的公司案例. 不得把方法页的使用地图当成硬先修. 先确认本次节点和读者所选分支. 先实际取得required_readings中该范围的全部完整单元，核对版本、期间、币种与模型身份；目录、摘要、搜索节选和成功打开标题不算正文. 记录实际工具/文件、单元起止、读到的关键约定及其支持范围，runtime_reading_log从空表开始，不预填“已读”. 本站方法和公司案例从access.uri所列公开正文读取，外部原件从指定URL读取；不得假设访问任何私人盘符. 读取失败先用明示的已核等价来源，仍缺则具体说明缺的单元，不凭记忆声称已核该事实. 读者要求直接讲解时可直接推进；互动时一次要求一个完整推理任务，不逐格问四则运算. 引用紧随所用材料. 案例固定2026-09-20信息与2026-09-18价格，不更新报价、不接账户、不重估公司；不执行或换名恢复股票DCF/WACC. 所有操作标原状态、具名已算替代或纯教学扰动，不能把点击当新增证据. 最后用迁移题检验，给完整解析，并指出剩余条件.

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
      "supports": "本站原创方法摘编，规定业务边界、校准与共同资本责任；公开原件各自支持实例，不是完整方法的外部背书.",
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
  "experiment_ids": []
}
```

## Supplied entry
本页整理业务模型分析的输入、推演步骤和输出，供 P04、P28 的分析使用.

<a id="pm-business-state-business-boundaries"></a>
## 业务边界

按收费、需求/竞争、履约、成本、资本承担和权利的实质差异识别业务集合. 使用者、采购决策者和付款者分开；产品收费、客户、地域与共同资源是不同视角，只有同一口径、不重叠的量才可加总. 研究拆分可以细于财报分部，独立定价还需另检盈利、资本和权利的可识别性.

<a id="pm-business-state-calibration-contract"></a>
## 校准合同

输入是原始材料及可修改的经营关系. 完整方法要求：信息截止前最近三个不同季度的财报与对应电话会；至少代表性上游、下游各一跳的财务和研究材料；至少三份不同的实质外部研究，覆盖三个承重角度，并实际取得可留存的完整作品与承重上下文. 新上市、自然人下游、未公开材料分别保留适用范围与缺口，不凑数.

覆盖数量只是取证条件. 还要记录“材料中的实际变化或冲突 → 被检验的关系 → 接受、修改或限用 → 实际采用范围”. 同一公司陈述的多次转述不变成独立确认；事后拟合不称样本外验证；客户资本开支不直接等于供应商订单.

<a id="pm-business-state-common-state-path"></a>
## 共同经营状态

输出路径沿“共同条件 → 企业/客户响应 → 使用量、价格、组合 → 收入、贡献与成本 → 资源和资金 → 时间”生成. 保留结构变化、季节性、周期、替代与创新；不把各业务各自最佳阶段拼成Base，也不因预测期结束就强迫业务成熟或退坡.

极小示例：需求延迟，但已投用工厂不能撤销. 收入可能后移，折旧和维护仍存在，尚未下单的设备则可能调整. 把所有资本与收入一同平移，会遗漏这三种状态的差别.

<a id="pm-business-state-path-capital-check"></a>
## 资本与可行性

区分维护、更新、增长投入，以及承诺、取得、投用、折旧和付款. 折旧不自动等于维护资本. 收入若依赖融资、扩产或客户信贷，必须同时保留需款日期、融资条件、利息与潜在损失. 年度正现金不证明期内资金已落实.

交出业务集合、共享资源、关系式/约束、单位与时点、事实/代理/未来路径身份、资本和普通股接口，以及至少一个有依据的强替代. 不能把改写一组增长率和倍数称为同一机制的传播.

## 使用地图与来源边界

P04重建路径和资金，P28判断分组；P29/P30消费相同的经营与资本结果，P05定义状态，P31组合股东结果. 后四篇不反向成为本参考的硬先修.

[Amazon分部原件](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)提供实例；[IEA供给与融资小节](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)提供行业机制. 它们各自支持事实与分析，不是这套本站方法的完整外部背书. 对应完整教学见[P04](/zh/notebook/calibrated-business-scenarios/)、[P28](/zh/notebook/business-states-valuation-groups/).


## Sources
- [业务关系、校准与共同经营状态](https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/): 本站原创方法摘编，规定业务边界、校准与共同资本责任；公开原件各自支持实例，不是完整方法的外部背书.

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
