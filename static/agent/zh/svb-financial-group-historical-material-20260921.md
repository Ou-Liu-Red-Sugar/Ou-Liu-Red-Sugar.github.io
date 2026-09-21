# SVB Financial Group（历史报告对象）：2023年流动性风险复盘记录

2023年联储复盘所述的内部流动性压力测试、应急融资计划与融资操作准备.

Entry: zh-record-svb-financial-group-historical-20260921 | Node: CASE-EI12-SVB-LIQUIDITY-2023 | Language: zh | Editorial revision: 2026-09-22
Research cutoff: 2026-09-21 | Data period: 2022/2023-03

## Teaching instructions
先实际阅读 agent_packet.required_readings 指定原文单元，记录题名、版本、定位及支持内容；缺失时取得等价可读原件后再讲解. 依据具名历史材料解释业务、证券权利、日期、计量口径和已列计算. 沿该历史截止日复算，区分披露、模型假设和未来代表点. 先检查读者当前疑点，再以完整计算或条件迁移解释. runtime_reading_log保留实际读取记录.

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
      "source_id": "EIDEF-S09",
      "title": "Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Executive Summary",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ],
      "version": "2023-04-28 historical review",
      "access": {
        "kind": "site_body",
        "uri": "https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Executive Summary；Governance and Risk Management中ILST、CFP及资金操作准备段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文.",
        "purpose": "适用身份为2023-04历史复盘，记录ILST失败、压力假设调整、CFP与融资操作准备问题；现行规则需另查相应时点的法规文本."
      },
      "supports": "适用身份为2023-04历史复盘，记录ILST失败、压力假设调整、CFP与融资操作准备问题；现行规则需另查相应时点的法规文本.",
      "id": "EI-12-READ-3",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "prompt": "先实际阅读 agent_packet.required_readings 指定原文单元，记录题名、版本、定位及支持内容；缺失时取得等价可读原件后再讲解. 依据具名历史材料解释业务、证券权利、日期、计量口径和已列计算. 沿该历史截止日复算，区分披露、模型假设和未来代表点. 先检查读者当前疑点，再以完整计算或条件迁移解释. runtime_reading_log保留实际读取记录.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
## 材料身份

公司：[SVB Financial Group（历史报告对象）](/zh/notebook/svb-financial-group-historical/). 研究截止2026-09-21；材料期间2022/2023-03.

原文：[Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Executive Summary](https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm). 定位：2023-04 Executive Summary，Governance and Risk Management / Liquidity.

联储复盘记载，SVBFG自2022年7月起反复未通过自身内部流动性压力测试（ILST）；扩大融资能力的行动至2023年3月仍未完整执行，压力测试假设同期有所放松. 临近失败时，SVB执行应急融资计划（CFP）又暴露操作准备不足：2022年未测试贴现窗口借款能力，抵押与操作安排也未就绪. 报告同时指出，更强的应急融资操作能力很可能仍不足以阻止失败，但可能使处置更有序.

## 逐项分析

[查看本材料的逐项分析](/zh/notebook/institutions-regulation-market-design/#ei12-history).

## Sources
- [Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Executive Summary](https://www.federalreserve.gov/publications/2023-April-SVB-Executive-Summary.htm): 历史报告对 ILST 失败、假设调整和资金准备的记录.

## Content relations
```json
[
  {
    "from": "zh-record-svb-financial-group-historical-20260921",
    "relation": "analyzes",
    "to": "zh-company-svb-financial-group-historical",
    "reason": "固定期间的业务/披露对象"
  },
  {
    "from": "zh-record-svb-financial-group-historical-20260921",
    "relation": "supported_by",
    "to": "EIDEF-S09",
    "reason": "历史报告记载的内部压力测试与融资操作准备.",
    "locator": "2023-04 Executive Summary, Governance and Risk Management / Liquidity"
  }
]
```

## Related entries
