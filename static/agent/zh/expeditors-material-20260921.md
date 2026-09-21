# Expeditors International of Washington, Inc.：2025年外汇风险记录

2025年外币交易损益、报表折算 OCI 与跨办公室/代理结算管理的具名材料.

Entry: zh-record-expeditors-20260921 | Node: CASE-EI11-EXPD-FX-2025 | Language: zh | Editorial revision: 2026-09-22
Research cutoff: 2026-09-21 | Data period: 2025-01-01/2025-12-31

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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文.",
        "purpose": "交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同. 假设敏感度不含运输模式变化."
      },
      "supports": "交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同. 假设敏感度不含运输模式变化.",
      "id": "EI-11-READ-2",
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

公司：[Expeditors International of Washington, Inc.](/zh/notebook/expeditors/). 研究截止2026-09-21；材料期间2025-01-01/2025-12-31.

原文：[Expeditors International 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/746515/000119312526071569/expd-20251231.htm). 定位：Item 7A；Note 1J/1K.

| 原披露字段（USD M） | 值 |
|---|---:|
| 2025年外币交易损失 | 28 |
| 2024年外币交易收益 | 12 |
| 2025年外币报表折算（税后 OCI） | 49 |
| 2024年外币报表折算（税后 OCI） | -41 |

外币交易损益进入经营结果，报表折算进入OCI. 公司还以加快办公室和代理之间的国际货币结算管理外汇暴露；截至2025-12-31，未结算内部交易净额约185M美元，多数内部账单在30天内结清.

## 逐项分析

[查看本材料的逐项分析](/zh/notebook/exchange-rates-cross-border-business/#ei11-material).

## Sources
- [Expeditors International 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/746515/000119312526071569/expd-20251231.htm): 交易币种、功能货币和报告货币分开；2025交易损失约28m与税后折算约49m不同. 假设敏感度不含运输模式变化.

## Content relations
```json
[
  {
    "from": "zh-record-expeditors-20260921",
    "relation": "analyzes",
    "to": "zh-company-expeditors",
    "reason": "固定期间的业务/披露对象"
  },
  {
    "from": "zh-record-expeditors-20260921",
    "relation": "supported_by",
    "to": "EIDEF-S06",
    "reason": "映射功能货币、外币交易、报表折算和结算管理；不形成证券估值.",
    "locator": "Item7A；Note1J/K"
  }
]
```

## Related entries
