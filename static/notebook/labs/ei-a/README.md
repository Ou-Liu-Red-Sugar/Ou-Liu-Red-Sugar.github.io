# EI-A 交互实验

入口：`/notebook/labs/ei-a/interactions.html`。稳定片段：`ei06`、`ei03`、`ei04`、`ei01`、`ei02`。页面嵌入 iframe 时只呈现当前片段对应的词条；单独打开保留全部词条。正文沿用独立静态等价，不依赖 iframe 才能完成阅读。

本包的唯一资料输入是 `docs/production/20260921/drafts/ei-a-v2/notebook-EI-A-20260921-xhigh-review-v2/shared-inputs.json`，完整原对象保存在 `data.json.source`。Census 采用固定 2026 年 5 月发布版中已经核定的 April / May 两期；核验记录在 `docs/production/20260921/review/industry-census-primary-check.md`。IEA 仅有具名历史摘取，没有制造逐小时数据。HHI、线性供需、设备更新、储能、成本和增加值均保留教学身份。

- `engine.js` 保存数值函数及输入约束，原生 JavaScript，浏览器与 Node 共用。
- `view.js` 生成 SVG、文字结果与静态表，默认 HTML 和更新共用同一渲染。
- `app.js` 只管理选择、输入与显示状态；净额 / 总额、固定价 / 均衡分别计算。
- `build.cjs` 仅读取上述共享输入并写本目录的 `data.json` 和 `interactions.html`。
- `verify.cjs` 检查预先给定的算术、关键边界、完整输入一致性和静态标记；结果在 `verification.json`。

运行 `node static/notebook/labs/ei-a/build.cjs` 后运行 `node static/notebook/labs/ei-a/verify.cjs`。未添加依赖，未访问账户，未在本任务启动浏览器。浏览器及站点整体验收由 Lead 集成完成。

设计细节：设备的手工期初范围为 0–200；“下一期”把实际期末带入，并将该期初只读展示，因此目标达到 240 时也不会截掉实际存量。停运超过装机、负订单期末余额与越界输入会被拒绝，保留前一次有效图。零出货比值、零产量 AC 使用“不定义”。打印展开完整资料卡与对照表，并附当前参数。
