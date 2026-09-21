# P-E 计算入口

本包原始输入与结果均为教学数据；来源、合成盘口、保证金假设和机构研究分别保留原身份。

下载同一目录的 `engine.js`、`inputs.json`、`default-results.json`。以 Node.js 读取公开输入并建立引擎：

```javascript
const fs = require('node:fs');
const createPEEngine = require('./engine.js');
const data = JSON.parse(fs.readFileSync('./inputs.json', 'utf8'));
const E = createPEEngine(data);
// 可用函数和参数见 engine.js；default-results.json 保留作者所有完整输出。
console.log(E.margin(data.extensions.margin.default));
console.log(E.execution(data.extensions.execution.default));
console.log(E.budgetAll(data.extensions.budget.default));
console.log(E.rebalance(data.extensions.rebalance.default));
```

这一入口不等于重新执行结果。Agent 须记录自己的实际执行；作者及独立审校已运行的检查见各自记录。
复算 P07 时，`default-results.json` 的 `/P07` 保存全部默认0–3张、减篮子0–3张及三项变式的完整资金路径。
其他节点分别在 `/P08`、`/P09`、`/P11`；完整输入单位在 `inputs.json` 的 `units`。
