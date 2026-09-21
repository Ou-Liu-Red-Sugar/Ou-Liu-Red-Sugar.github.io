{
  "title": "单位经济、成本结构与经营杠杆",
  "description": "用CAT历史桥解释变化，再用独立教材模型推导经营杠杆的精确有限变化；产能台阶显式改变条件。",
  "layout": "entry",
  "notebookid": "zh-bf17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf17"
}

收入和利润把许多经营变化压成几个总额。要解释变化，我们需要重新展开销量、价格、组合、投入成本和共同费用；要预测一个条件变化的后果，还需要更明确的模型。本篇把这两项工作分开：先走完 Caterpillar 的真实历史驱动桥，再用参数透明的线性模型理解经营杠杆。完成以后，你应能判断一项数字究竟是历史归因，还是可以用于变式计算的模型参数。

主线约 15–20 分钟。历史公司图和教学模型使用不同单位与身份，实验也将它们分在两个视图。我们不把某家教材虚构公司改名成 Caterpillar。

<a id="CASE-BFDE-CAT-BF17-20260921"></a>
<a id="bf17-historical-bridge"></a>
## 1. 从历史总额回到变化来源

Caterpillar FY2025 将 2024 年收入 64,809 百万美元接到 2025 年 67,589。按其披露类别，完整桥为：[^bf17-cat]

| Sales and Revenues Comparison／收入桥原类别 | 影响，百万美元 |
|---|---:|
| 2024 Sales and revenues／期初年度收入 | 64,809 |
| Sales Volume／销售量相关影响 | +3,389 |
| Price Realization／价格实现 | −817 |
| Currency／汇率 | +45 |
| Financial Products／金融产品 | +163 |
| 2025 Sales and revenues／期末年度收入 | 67,589 |

收入增长了 2,780，但经营利润反而由 13,072 降至 11,151。公司原始经营利润比较图给出八个因素，全部列出才能核回终点：

| Consolidated Operating Profit Comparison／经营利润桥原类别 | 影响，百万美元 |
|---|---:|
| 2024 Operating profit | 13,072 |
| Sales Volume | +1,218 |
| Price Realization | −817 |
| Manufacturing Costs | −2,148 |
| SG&A / R&D | −336 |
| Currency | −32 |
| Financial Products | +49 |
| Restructuring | −85 |
| Other | +230 |
| 2025 Operating profit | 11,151 |

正向关系已经很清楚：本次披露中销量相关影响为正，但制造成本、价格及其他费用的不利影响更大，最终利润净减少 1,921。这是公司对历史变化的分类与解释。下一步要读定义，才能知道这些名字究竟捕捉了什么，而不是把每一行直接当教科书里的独立变量。

<a id="bf17-driver-definitions"></a>
## 2. “Volume”不总是纯数量

Caterpillar 的 Definitions 说明：收入桥中的 Sales Volume 包含数量与新产品推出的影响；经营利润桥里的同名项目还包含产品组合。Price Realization 包含地域价格组合；Manufacturing Costs 包含按产量调整后的变动成本变化，以及期间制造成本的绝对变化。Financial Products 的汇率等影响又留在其自身类别中。[^bf17-def]

这意味着，$1,218/3,389\approx35.94\%$ 可以叫“这次两项披露效果之比”，却不是已经识别出的每台设备边际贡献率。你甚至还没有一个纯数量单位和对应单位变动成本。真实驱动桥依然有用：它指向要继续核验的成本、组合和定价证据；只是它所回答的是“公司怎样解释这一年”，不是“下一年每增加一台设备必然赚多少”。

现在我们主动换一种对象：建立一个条件足够清楚的小模型，让后一个问题可以被严格回答。

<a id="bf17-cvp"></a>
## 3. 线性模型里，经营杠杆为什么出现

假定只有一种产品，或固定产品组合；单位价格为 $p$，单位变动成本为 $v$，销量为 $q$，相关产量范围内固定成本为 $F$。那么销售额为 $S=pq$，贡献利润为 $C=(p-v)q$，经营利润为 $OI=C-F$。贡献利润先承担固定成本，余下部分才是模型经营利润。这里的“固定”是针对决策期间和产量范围而言，并非永远不能调整。

<strong>经营杠杆系数</strong>在基点利润非零时为 $DOL=C/OI$。把价格、单位变动成本、组合及固定成本保持不变，只让销量变化比例 $x$，新的贡献利润就是 $C(1+x)$，所以利润增量为 $Cx$。因此：

$$\frac{\Delta OI}{OI}=\frac{C}{OI}x=DOL\frac{\Delta S}{S}$$

在上述线性且参数不变的模型里，这对该次<strong>有限变化是精确恒等式</strong>，不是只能在极小变化下成立的近似。它也有局部弹性的含义；两种表述并不矛盾。直接重算与右式应给出相同结果。[^bf17-cvp]

OpenStax 的虚构 Company A／B 给出一个有区分力的基准，单位是普通美元，不是上面的百万美元：

| 模型项目 | Company A | Company B |
|---|---:|---:|
| Sales／销售额 | 250,000 | 315,000 |
| Variable costs／变动成本 | 102,000 | 105,000 |
| Contribution margin／贡献利润 | 148,000 | 210,000 |
| Fixed costs／固定成本 | 63,000 | 125,000 |
| Operating income／经营利润 | 85,000 | 85,000 |
| 由上述原始输入计算的DOL | 1.741176 | 2.470588 |

两者利润相同，但 B 有更大的贡献利润和固定成本。销售上升时，有更多新增贡献利润越过已覆盖的固定成本；下降时，同一固定成本又会使利润降得更快。

| 在固定参数内的销量／销售变化 | A新利润 | A利润变化 | B新利润 | B利润变化 |
|---|---:|---:|---:|---:|
| +10% | 99,800 | +17.4118% | 106,000 | +24.7059% |
| −20% | 55,400 | −34.8235% | 43,000 | −49.4118% |

例如 A 的 −20% 情景，直接算 $148,000\times0.8-63,000=55,400$；同样由 $1.741176\times(-20\%)$ 得利润下降约 34.8235%。两条路径相等。表格全部由原始输入复算，正文中的系数与百分比不采用教材网页中和这些输入不一致的数值。

<a id="bf17-boundaries"></a>
## 4. 模型边界要用另一个计算展示

接近盈亏平衡时，基点利润小，DOL 会很大；这不代表企业获得了免费的高回报能力。当 $OI=0$ 时该比率无定义，程序应显示“基点利润为零”，而不是给一个能继续乘的无穷大。

再给 Company A 加一个明确的教学条件：销量比基准高出 15% 以后，必须新增 10,000 固定成本。若销量增加 20%，旧线性式先给 $148,000\times1.2-63,000=114,600$；跨产能台阶后实际模型利润为 104,600。此时参数已改变，旧 DOL 预测的 34.8235% 与新模型利润增长约 23.0588% 不再相等，差异来自新增固定成本，而非 DOL 公式突然不准确。

真实企业还可能改变售价、折扣、产品组合和投入方式。与其把这些全部塞进一个“调整后杠杆”，不如先说明是哪项条件变化，再建立新的成本桥。这样模型的差异能被经营资料核验。

<a id="bf17-experiment"></a>
## 5. 固定历史桥，与可变教学模型并排看

<div data-experiment-slot="EXP-BF17-HISTORICAL-VS-STRUCTURAL"></div>

历史视图完整保留 Caterpillar 的两条桥，不用滑块把历史变成预测。模型视图允许选择 A／B、改变销量比例，并开启上面定义的产能台阶。图同时显示直接重算与恒定参数恒等式结果；在线性模式两条线重合，台阶模式才发生有解释的分离。每次图的变化都附有数值表，不依赖颜色猜结论。

<a id="bf17-exercise"></a>
## 6. 从推演回到资料

<strong>计算任务。</strong>Company B 在固定参数下销量下降 20%，请同时用贡献利润直接重算和 DOL 等式求结果。然后说明要把同样的模型用于 Caterpillar，还缺哪些输入。

<strong>解析。</strong>直接算 $210,000\times0.8-125,000=43,000$；利润下降 42,000，占原85,000的49.4118%。DOL为 $210,000/85,000=2.470588$，乘 −20% 得相同变化。迁移到 Caterpillar，仍需定义销量单位、纯价格、单位变动成本、产品组合、相关范围及固定成本，并处理报告桥里已混合的组合与新产品影响。

<strong>解释任务。</strong>Caterpillar 收入上升而利润下降，与 DOL 模型矛盾吗？

<strong>解析。</strong>不矛盾。固定参数模型没有允许售价、单位成本与固定成本同时变化，而公司历史桥恰恰披露了价格、制造成本等多项变化。正确的工作次序是先用真实定义解释历史，再判断是否具备建立某个条件模型的证据；不是拿一个模型系数覆盖全部经营过程。

[^bf17-cat]: Caterpillar FY2025 10-K，MD&A pp31–35，Sales and Revenues Comparison 与 Consolidated Operating Profit Comparison；[SEC 原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm)，[经营利润原图](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg)。两期为2024→2025，单位百万美元，取得日2026-09-21。
[^bf17-def]: 同一原件 Definitions pp36–38：Manufacturing Costs、Price Realization、Sales Volume、Financial Products。披露归因不等于独立因果识别或可外推结构参数。
[^bf17-cvp]: OpenStax, *Principles of Accounting, Volume 2: Managerial Accounting* (2019)，§3.5 的 Operating Leverage 与虚构 Company A/B 输入。[公开全节](https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage)。有限变化恒等式由本篇列明的线性假设推导；产能台阶为另设教学变式。

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>

