# PF-GRID-01 计算与静态结果

本包采用真实契约条款和明确的合成教学报价，不是历史行情或订单。
`inputs.json`、`inputs.js`、`engine.js`、`default-results.json` 均保持作者review-v2原字节。

```javascript
const E = require('./engine.js');
const D = require('./inputs.json');
console.log(E.hedge(D, 70, 11300, 1, 'mid'));
console.log(E.verticalLife(D, 1000, 'mid'));
console.log(E.calendar(D, {spot:140, scale:50, decision:'continue', view:'execution'}));
```

每篇 `results/Pxx.json` 保存对应默认结果的完整原值；`static/Pxx.md` 为可读静态表，正文与完整题解在 `readers/`。
P10静态比例只修正显示为百分数：半仓50%，全仓100%，现金0%。算法和数值输入未改。
Agent包只保留一次正文和一次本篇静态说明；数据附件并不表示使用者已经运行实验或读取原件。
