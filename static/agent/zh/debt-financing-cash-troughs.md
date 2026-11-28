# 债务、融资与现金低谷

拆解总债务、受限现金、净债务、账内租赁与表外刚性义务的口径差异，用 AT&T（T）FY25 对照净债务／EBITDA 与 EBIT 利息保障倍数的盲区及再融资冲击，借 12 季度现金低谷模拟器演示到期墙怎样在经营兑现前击穿流动性，再以 Microsoft（MSFT）FY26 对照 The Boeing Company（BA）FY24–FY25 呈现净现金与高杠杆面对低谷时的股东结果分叉。

Entry: zh-debt-financing-cash-troughs | Node: NB-E05 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E05《债务、融资与现金低谷》，承接 NB-A02 的个人资金期限错配、NB-E03 的资本开支先于现金回报、以及 NB-E04 的公司级共同义务，建立企业流动性与偿债能力判断框架。全篇分四节：一、总债务、净债务与表外刚性义务：区分短债与一年内到期长债、长期债务（账面净额 vs 到期面值）、ASC 842 账内融资与经营租赁负债、以及未起租合约等表外承诺；明确净债务必须剔除受限现金（举 BA 2025 末受限 742 M、T 受限 293 M），并以 MSFT FY26 为例展示主表净现金 365.5 亿美元背后还挂着 885.2 亿美元账内租赁与 3,291 亿美元未起租数据中心承诺。二、两把偿债标尺（净债务／EBITDA vs EBIT 利息保障倍数及（EBITDA−维持性 CapEx）／利息）：以 AT&T（T）FY25 10-K 实证（EBITDA 45,048、D&A 20,886、CapEx 20,842、EBIT 24,162、利息 6,804、净债务 117,866、银行契约上限 3.75x），说明高资本开支行业下净债务／EBITDA（2.62x）与 EBITDA／利息（6.62x）偏乐观，扣除折旧或资本开支后覆盖倍数骤降至 3.55x／3.56x，并对照 T 2026–2028 年 245.1 亿美元低息旧债（3.1%–3.8%）与 2025–2026 年新发债（5.0%–5.2%）解释再融资利率跳升，及高收益债利差走阔（FRED BAMLH0A0HYM2）。三、债务到期墙、循环信贷与现金低谷（12 季度交互推演器）：同一家期初现金 180 M、债务 800 M、三年总息前 FCF 同为 +465 M、到期本金同为 400 M 的公司，在梯度分散到期（最低 +179 M）、Y2 Q2 集中债墙（跌至 −83 M，契约达标时可由 120 M 循环信贷过桥）、高息再融资＋105 M 回款延迟（暴跌至 −254 M 且四季为负，击穿额度并触发契约冻结）三种情景下出现截然不同的存续路径。四、真实 10-K 分叉对照：MSFT FY26（净现金 365.5 亿、74.5% 债务面值于 FY31 后到期、50.9x EBIT 利息保障、重资本周期仍持续分红回购令股数微降）对照 BA FY24–FY25（2024 年 FCF −143.1 亿，2024 年 10 月被迫增发 1.294 亿普通股＋575 万股 6.00% 强制可转优先股净募 238.6 亿，流通股从 609.5 M 激增至 749.2 M［+22.9%］及 784.7 M，2025 年末仍面 2026 年 83.5 亿到期债墙且剔除 96.7 亿处置收益后主业与 FCF 仍负），自然衔接 NB-E06 盈利质量与可比口径。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-e05-msft-10k-fy26",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm"
      },
      "required_unit": {
        "locator": "FY2026 Form 10-K（截至 2026-06-30）Balance Sheets、Other Income (Expense), Net、Note 10 Debt 与 Note 13 Leases。",
        "scope": "核对 MSFT 现金及短投 76,843、账面债务 40,294（面值 46,136）、融资租赁 66,594、经营租赁 21,925、未起租数据中心承诺 3,291 亿美元，以及 EBIT 155,237 与利息支出 3,051（M 美元）。",
        "purpose": "核对净现金主表与账内租赁、表外承诺之间的层级差异，以及高安全垫下的股东回报路径。"
      },
      "title": "Microsoft Corporation：FY2026 Form 10-K（Balance Sheets、Other Income、Note 10 Debt 与 Note 13 Leases）",
      "authors": [
        "Microsoft Corporation"
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e05-t-10k-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm"
      },
      "required_unit": {
        "locator": "FY2025 Form 10-K（截至 2025-12-31）Consolidated Statements、Debt（含 Credit Facilities 与 Scheduled Repayments）、Leases 及 Restricted Cash 附注。",
        "scope": "核对 T 营业利润 24,162、折旧摊销 20,886、EBITDA 45,048、资本开支 20,842、利息支出 6,804、总债务 136,100、非受限现金 18,234（受限现金 293）、经营租赁 22,524、3.75 倍净债务／EBITDA 契约及 2026–2030 年到期利率阶梯。",
        "purpose": "核对高资本开支行业下净债务／EBITDA 与 EBIT 利息保障倍数的背离，以及低息旧债滚续的再融资利率抬升。"
      },
      "title": "AT&T Inc.：FY2025 Form 10-K（Consolidated Statements、Debt、Leases 与 Restricted Cash）",
      "authors": [
        "AT&T Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e05-ba-10k-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm"
      },
      "required_unit": {
        "locator": "FY2025 Form 10-K（截至 2025-12-31，含 FY2024 比较期）Consolidated Statements、Debt、Leases 与 Shareholders’ Equity 附注。",
        "scope": "核对 BA 2024 年 CFO −12,080、CapEx −2,230（FCF −14,310）、2024 年 10 月增发普通股净募 18,200 与强制可转优先股净募 5,657、流通股由 609.5 M 增至 749.2 M 与 784.7 M；及 2025 年末非受限现金与短投 29,400（受限现金 742）、总债务 54,098、2026 年到期 8,351 与未动用循环信贷 10,000（M 美元）。",
        "purpose": "核对高杠杆企业在现金低谷被迫大幅增发摊薄普通股的真实路径。"
      },
      "title": "The Boeing Company：FY2025 Form 10-K（Consolidated Statements、Debt、Leases 与 Shareholders’ Equity）",
      "authors": [
        "The Boeing Company"
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-p05-fred-hyoas",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
      },
      "required_unit": {
        "locator": "ICE BofA US High Yield Index Option-Adjusted Spread（BAMLH0A0HYM2）历史极端走阔区间。",
        "scope": "核对信用紧缩期高收益债期权调整利差从常态低位急剧跳升至 10% 以上（如 2020 年 3 月 10.87%、2008 年 12 月 21.82%）的再融资环境变化。",
        "purpose": "说明集中到期撞上信用收紧时，市场再融资窗口为何会骤然收窄且成本飙升。"
      },
      "title": "ICE Data Indices / FRED（BAMLH0A0HYM2）：ICE BofA US High Yield Index Option-Adjusted Spread",
      "authors": [
        "ICE Data Indices",
        "Federal Reserve Bank of St. Louis"
      ],
      "version": "2026-11-26 核对"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127b">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

在[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)里，个人把短期要付的钱投进波动资产，就可能在低点被迫卖出；上市公司面对的期限错配往往更剧烈。[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)已经说明，建厂、扩产与备货总是先花现金、回报落在后面；[《分部、共同成本与合并》](/zh/notebook/segments-shared-costs-consolidation/)则指出，债务本息挂在总部层面，由全部业务共同承担。

一旦经营现金还没兑现，企业却先撞上集中到期的债务、高额利息与刚性资本付款，哪怕长期生意依然赚钱，普通股股东也可能在低谷被迫承受大比例折价增发，甚至面临债务重组。

## 总债务、净债务与表外刚性义务 {#nb-e05-debt-structure}

衡量一家公司的真实财务负担，不能只扫资产负债表上的“长期债务”一行。刚性义务按到期紧迫度与列报位置分成四层：

- **短期借款与一年内到期长期债务**（Short-Term Debt & Current Portion of Long-Term Debt）：包括商业票据、短期贷款，以及未来 12 个月内到期须清偿或续借的长期债券本金，后者一旦扎堆就会把偿债压力压进眼前四季。
- **长期债务**（Long-Term Debt）：一年以上到期的企业债与银团贷款。主表通常列示扣除折价和发行费后的账面净额，而到期须按票面本金全额兑付，核对真实还款额要回债务附注里的到期表。
- **租赁负债**（Operating & Finance Lease Liabilities）：自美国会计准则 ASC 842 实施后，融资租赁与一年以上经营租赁均须折现上表，但常分散在“其他流动负债”“应计费用”或“其他非流动负债”里，略过附注就容易低估杠杆。
- **表外刚性义务**（Off-Balance-Sheet Commitments）：包括已签约但机房或设备尚未交付起租的长期租赁承诺、无条件采购合约（Take-or-Pay）及对外担保，虽未进资产负债表数字，仍会按合约陆续流出真金白银。

摸清总债务之后，再扣掉手头能自由调度的现金资产，才是**净债务**（Net Debt）：

\[
\text{净债务} = \text{总有息债务} - \text{非受限现金及短期投资}.
\]

算减项时有一条硬边界：**受限现金**（Restricted Cash）不能算进来。托管保证金、偿债专户存款虽会并入现金流量表期末余额，企业却无法挪去偿还一般债务——如 **The Boeing Company**（BA）与 **AT&T Inc.**（T）2025 年末便分别剔除了 7.4 亿与 2.9 亿美元。[^ba-10k]<sup>，</sup>[^t-10k] 把三家公司的四层口径并排摊开，账面与真实的落差就很清楚：

<figure class="flow-figure e05-debt-stack" id="nb-e05-debt-stack-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">债务与流动性的四层拆解：从账面净债务到表外承诺</p><div class="ff-switch" role="group" aria-label="切换公司" hidden><button type="button" data-ff-view-choice="msft" aria-pressed="true">MSFT · 净现金＋表外</button><button type="button" data-ff-view-choice="t" aria-pressed="false">AT&amp;T · 含租净债</button><button type="button" data-ff-view-choice="ba" aria-pressed="false">BA · 近端债墙</button></div></div>
<div class="e05-formula-strip" aria-hidden="true">
<div class="e05-fbox"><b>总有息债务</b><small>短债 ＋ 长期债</small></div>
<div class="e05-fop">−</div>
<div class="e05-fbox e05-fbox-cash"><b>非受限现金</b><small>须剔受限现金</small></div>
<div class="e05-fop">＝</div>
<div class="e05-fbox e05-fbox-net"><b>账面净债务</b><small>负值即净现金</small></div>
<div class="e05-fop">＋</div>
<div class="e05-fbox e05-fbox-off"><b>租赁与表外</b><small>账内租＋未起租</small></div>
</div>
<div data-ff-only="msft" class="e05-co-rows business-exchange" aria-label="MSFT FY2026（亿美元）：非受限现金及短投 768.4 亿，账面债务 402.9 亿，账面净现金 365.5 亿；账内租赁负债 885.2 亿（含融资 665.9），另附注披露 3,291 亿未起租数据中心承诺。">
<div class="e05-co-row" style="--e05-c:#23695a">
<div class="e05-co-id"><strong>MSFT · FY26</strong><small>2026-06-30</small></div>
<div class="e05-cell"><em>非受限现金＋短投</em><b class="e05-pos">768.4 亿</b><br>现金 209.4 ＋ 短投 559.1</div>
<div class="e05-cell"><em>账面债务 → 净额</em>债 402.9 → <b class="e05-pos">净现金 365.5 亿</b><br>一年内到期 92.3</div>
<div class="e05-cell"><em>账内租赁与表外</em>账内租赁 <b class="e05-neg">885.2 亿</b>（融资 665.9）<br>表外未起租承诺 <b class="e05-bad">3,291 亿</b></div>
</div>
</div>
<div data-ff-only="t" hidden class="e05-co-rows business-exchange" aria-label="AT&amp;T（T）FY2025（亿美元）：非受限现金 182.3 亿（已剔除受限 2.9 亿），总债务 1,361.0 亿，账面净债务 1,178.7 亿；加经营租赁 225.2 亿后含租净债务达 1,403.9 亿。">
<div class="e05-co-row" style="--e05-c:#a8743f">
<div class="e05-co-id"><strong>T · FY25</strong><small>2025-12-31</small></div>
<div class="e05-cell"><em>非受限现金</em><b>182.3 亿</b><br>已剔受限现金 2.9 亿</div>
<div class="e05-cell"><em>账面债务 → 净额</em>债 1,361.0 → <b class="e05-neg">净债 1,178.7 亿</b><br>一年内到期 90.1</div>
<div class="e05-cell"><em>账内经营租赁</em>经营租赁 <b>225.2 亿</b><br>含租净债升至 <b class="e05-bad">1,403.9 亿</b></div>
</div>
</div>
<div data-ff-only="ba" hidden class="e05-co-rows business-exchange" aria-label="Boeing（BA）FY2025（亿美元）：非受限现金及短投 294.0 亿（已剔除受限 7.4 亿），总债务 541.0 亿（84.6 亿一年内到期），账面净债务 247.0 亿，含租净债务 269.7 亿，另备 100 亿未动用循环信贷。">
<div class="e05-co-row" style="--e05-c:#b44c33">
<div class="e05-co-id"><strong>BA · FY25</strong><small>2025-12-31</small></div>
<div class="e05-cell"><em>非受限现金＋短投</em><b>294.0 亿</b><br>已剔受限现金 7.4 亿</div>
<div class="e05-cell"><em>账面债务 → 净额</em>债 541.0 → <b class="e05-neg">净债 247.0 亿</b><br>一年内到期 84.6</div>
<div class="e05-cell"><em>租赁与循环信贷</em>经营租赁 <b>22.7 亿</b>（含租 269.7 亿）<br>另备循环信贷 100.0 亿</div>
</div>
</div>
<figcaption>点击切换三家公司（单位：亿美元）。比较同业杠杆时，须核对双方是否统一包含租赁负债与短期投资，并确认已剔除受限现金。</figcaption>
</figure>

<span data-text-versions id="nb-e05-text-netdebt">最容易看走眼的是图里第一行：**Microsoft Corporation**（MSFT）主表看似握有 365.5 亿美元净现金，可加上 Note 13 的 885.2 亿美元账内租赁后，含租口径直接翻成净债务，表外还挂着 **3,291 亿美元**未起租数据中心承诺。[^msft-10k] 同样，T 计入经营租赁也会多出两百多亿美元净债——跨公司比较杠杆，先要对齐租赁与受限现金口径<span data-text-detail>（附注核对，单位 M 美元：BA 2025 年末现金流量表期末余额 11,663，扣减归于投资科目的 742 受限现金后，自由现金及等价物为 10,921；T 同期 293 受限现金分列于流动资产 157 与其他非流动资产 136，账面总债务 136,100 已含 1,382 融资租赁，另将 3,581 流动经营租赁列在应付及应计费用内、18,943 非流动经营租赁单列。MSFT FY2026 账面现金及短投 76,843，债务面值 46,136 扣减未摊销折价及发行费 1,081、套保公允价值调整 11 与债券置换溢价摊销项 4,750 后得账面债务 40,294；66,594 融资租赁拆列在 Other Current Liabilities 4,290 与 Other Long-term Liabilities 62,304，21,925 经营租赁拆列在 Other Current Liabilities 5,393 与 Operating Lease Liabilities 16,532；3,291 亿美元未起租租赁将于 FY2027 至 FY2033 陆续起租，租期 1 至 20 年）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 两把偿债标尺：净债务／EBITDA 与 EBIT 利息保障倍数 {#nb-e05-solvency-ratios}

摸清债务存量之后，还要放回企业每年的造血能力里比较。实务中最常用的两把标尺，分别衡量“本金要还多少年”与“利息每天付不付得起”：

\[
\text{净债务 / EBITDA} = \frac{\text{总债务} - \text{非受限现金及短期投资}}{\text{EBIT} + \text{折旧与摊销}},
\]

\[
\text{EBIT 利息保障倍数} = \frac{\text{EBIT}}{\text{利息支出}}, \qquad \text{资本开支后利息保障} = \frac{\text{EBITDA} - \text{维持性 CapEx}}{\text{利息支出}}.
\]

**净债务／EBITDA**（Net Debt / EBITDA）粗略估算“把全部经营现金利润拿去还债，大概几年能还清本金”。它抹平了不同公司折旧年限和税率的差异，口径高度标准化，因此银行贷款契约（Debt Covenants）和评级机构常拿它画红线——例如 T 的银团循环信贷协议就写明，每季末净债务／EBITDA 不得超过 **3.75 倍**。[^t-10k]

不过，这把标尺在两类场景下极易失真：

- **高资本开支行业**：折旧虽不流出现金，通信基站、光纤、矿山与 AI 服务器却会真实损耗。当公司每年须投入接近甚至超过折旧的维持性资本开支才能保住收入，账面很胖的 EBITDA 远高于实际能拿来还债的现金流。
- **强周期景气顶点**：大宗商品、航运或化工在涨价高点时分母 EBITDA 骤然膨胀，杠杆倍数看似降到 1 倍出头；一旦产品跌价盈利回落，分子债务分毫未减，倍数会在几个季度内翻倍逼近契约红线。

相比之下，**EBIT 利息保障倍数**先扣掉当期折旧摊销，直接检验日常营业利润够不够付息；若维持性资本开支高于折旧，把分子换成 **EBITDA 减去维持性 CapEx** 会更贴近真实付息能力。把两把尺子并排量在 T 的 FY2025 财报上，盲区与利率重定价压力就会直接显现：

<figure class="flow-figure e05-ratio-bridge" id="nb-e05-ratio-bridge-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">偿债标尺落差与再融资冲击：AT&amp;T（T）FY2025 实证</p><div class="ff-switch" role="group" aria-label="切换视角" hidden><button type="button" data-ff-view-choice="cov" aria-pressed="true">偿息标尺收缩</button><button type="button" data-ff-view-choice="refi" aria-pressed="false">2026–2030 旧债重定价</button></div></div>
<div data-ff-only="cov" class="business-exchange" aria-label="AT&amp;T FY2025 偿息标尺收缩（M 美元）：EBITDA 45,048 覆盖利息 6,804 达 6.62 倍，扣除折旧或等额资本开支 20,842 后，EBIT 与 EBITDA 减 CapEx 落至 24,162 与 24,206，利息保障骤降至 3.55 倍；含经营租赁净债务/EBITDA 达 3.12 倍（银行契约上限 3.75 倍）。">
<div class="e05-bcard">
<div class="e05-bhead"><strong>EBITDA 到可付息利润的收缩（M 美元）</strong><span>年利息 6,804 M</span></div>
<div class="e05-bars">
<div class="e05-brow"><div class="e05-blbl"><span>EBITDA（EBIT ＋ 折旧摊销）</span><b class="e05-tag-good">45,048 · 6.62 倍</b></div><div class="e05-track"><i class="e05-fill" style="--w:100%;--c:#23695a"></i></div></div>
<div class="e05-brow"><div class="e05-blbl"><span>减：折旧 / CapEx（吃掉 46.3%）</span><b class="e05-tag-warn">−20,886 / −20,842</b></div><div class="e05-track"><i class="e05-fill" style="--l:53.7%;--w:46.3%;--c:#d4a574"></i></div></div>
<div class="e05-brow"><div class="e05-blbl"><span>EBIT /（EBITDA − CapEx）</span><b>24,162 / 24,206 · 3.55 倍</b></div><div class="e05-track"><i class="e05-fill" style="--w:53.7%;--c:#3b7d6e"></i></div></div>
<div class="e05-brow"><div class="e05-blbl"><span>全年利息支出</span><b class="e05-tag-bad">6,804</b></div><div class="e05-track"><i class="e05-fill" style="--w:15.1%;--c:#b44c33"></i></div></div>
</div>
<div class="e05-cov-box">
<div class="e05-cov-top"><b>净债务／EBITDA：2.62 倍（含租 3.12 倍）</b><span>银行契约上限 3.75 倍</span></div>
<div class="e05-cov-meter" aria-hidden="true"><i class="e05-cov-fill"></i><i class="e05-cov-lease"></i><i class="e05-cov-red"></i></div>
<p class="e05-cov-note">深绿为账面净债务 2.62 倍，浅绿叠入经营租赁至 3.12 倍，红线标出 3.75 倍契约上限。</p>
</div>
</div>
</div>
<div data-ff-only="refi" hidden class="business-exchange" aria-label="AT&amp;T 2026 至 2030 年到期债务与旧息（M 美元）：2026 年 8,652（3.1%）、2027 年 8,953（3.8%）、2028 年 6,905（3.2%）、2029 年 6,918（4.6%）、2030 年 7,020（4.3%），对照新发债利率 5.0%–5.2%，2026–2028 年 245.1 亿美元低息旧债面临 120–210 基点重定价抬升。">
<div class="e05-bcard">
<div class="e05-bhead"><strong>到期旧债票息 vs 新发债利率（M 美元）</strong><span>2026–2030 阶梯</span></div>
<div class="e05-refi-ref">新发参考：2025 年 5.0% · 2026 年 2 月 5.2%</div>
<div class="e05-mrows">
<div class="e05-mrow"><strong>2026</strong><div class="e05-track"><i class="e05-fill" style="--w:96.6%;--c:#b44c33"></i></div><span class="e05-mval">8,652 · <em class="e05-hot">3.1%</em></span></div>
<div class="e05-mrow"><strong>2027</strong><div class="e05-track"><i class="e05-fill" style="--w:100%;--c:#c66a47"></i></div><span class="e05-mval">8,953 · <em class="e05-hot">3.8%</em></span></div>
<div class="e05-mrow"><strong>2028</strong><div class="e05-track"><i class="e05-fill" style="--w:77.1%;--c:#b44c33"></i></div><span class="e05-mval">6,905 · <em class="e05-hot">3.2%</em></span></div>
<div class="e05-mrow"><strong>2029</strong><div class="e05-track"><i class="e05-fill" style="--w:77.3%;--c:#8a9b92"></i></div><span class="e05-mval">6,918 · <em>4.6%</em></span></div>
<div class="e05-mrow"><strong>2030</strong><div class="e05-track"><i class="e05-fill" style="--w:78.4%;--c:#8a9b92"></i></div><span class="e05-mval">7,020 · <em>4.3%</em></span></div>
</div>
<p class="e05-refi-foot">2026–2028 年共 245.1 亿美元低息旧债面临滚续重定价；按 5.1% 粗估，每百亿美元新增约 1.7 亿美元年利息。</p>
</div>
</div>
<figcaption>点击切换静态偿息标尺与动态再融资阶梯。数据来自 AT&amp;T FY2025 Form 10-K（2030 年后另有 106,216 M 美元、加权利率 4.3% 到期）。</figcaption>
</figure>

<span data-text-versions id="nb-e05-text-att-ratios">先看偿息标尺视图：单凭 EBITDA 口径，T 的杠杆（2.62 倍）离 3.75 倍红线颇有余地，付息覆盖也高达 6.62 倍。可电信网络每年须投入几乎与折旧 1 比 1 等额的资本开支，直接吃掉近一半 EBITDA；一旦把这笔真实消耗扣掉，EBIT 与扣 CapEx 后的利息保障倍数双双缩水至 **3.55 倍**左右，安全垫远没有表面那么厚<span data-text-detail>（T FY2025 Form 10-K 核对，单位 M 美元：营业利润 24,162、折旧摊销 20,886，合得 EBITDA 45,048；全年资本开支 20,842 占 EBITDA 46.3%，扣除后 EBITDA − CapEx 为 24,206，对照利息支出 6,804，EBIT 利息保障倍数为 3.55 倍、CapEx 后覆盖为 3.56 倍；账面净债务 117,866 对应净债务／EBITDA 2.62 倍，叠入 22,524 经营租赁后升至 3.12 倍；2025 年 11 月续签的 120 亿美元循环信贷与 175 亿美元延迟提款定期贷款均设定每季末 3.75 倍上限）</span>。[^t-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e05-text-att-refi">切到旧债重定价视图，还能看到动态风险：**低息旧债到期后的再融资利率跳升**（Refinancing Shock）。低利率窗口发行的债券到期前一直按旧票息记账，让当期利息显得温和；一旦集中到期撞上高利率，新债利息便台阶式抬升。T 全组合旧息虽仅 4.2%，2026 至 2028 年却有 **245.1 亿美元**低息旧债待续借，对照近期 **5.0%–5.2%** 新发利率，利息负担会逐年走高<span data-text-detail>（T FY2025 债务附注到期阶梯，单位 M 美元：2026 年到期 8,652［加权旧息 3.1%］、2027 年 8,953［3.8%］、2028 年 6,905［3.2%］，三年合计 245.1 亿美元；2025 年新发 14,111 长债加权利率已升至 5.0%，2026 年 2 月 5 日新发 6,500 全球债票息达 5.2%，按 5.1% 粗估重定价，每百亿美元将新增约 1.7 亿美元年利息）</span>。[^t-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这还只是投资级电信巨头在信用平稳时的重定价幅度。一旦企业评级落入高收益区间、又赶上市场恐慌——例如 ICE BofA 美国高收益债期权调整利差在 2020 年 3 月冲上 10.87%、2008 年 12 月飙至 21.82%——利率跳升叠加发行额度收缩，足以在短时间内击穿原本看似稳妥的覆盖倍数。[^hyoas]

## 债务到期墙、循环信贷与现金低谷 {#nb-e05-cash-trough}

年度偿债比率即使看起来过关，企业依然可能在某几个季度里突然熄火。债务本息和资本开支按日历准点扣款，经营现金流却可能因交付排期、备货积压或客户延迟回款落在后半程。当大额本金扎堆在同一时间窗到期——即**债务到期墙**（Maturity Wall）——又碰上回款推迟与信用收紧，公司就会在经营兑现前撞上**现金低谷**（Cash Trough）。

为防这类短期错配，上市公司通常会向银团申请**循环信贷额度**（Revolving Credit Facility），平时不提款、只付极低承诺费（如 T 每年仅付 0.06% 至 0.08%），缺钱时随借随还。[^t-10k] 但额度并非无条件兜底：协议通常捆绑季度财务契约，一旦盈利滑坡令净债务／EBITDA 破线，银行有权拒放甚至要求加速到期——企业越缺钱，额度反而越容易被锁死。

<figure class="flow-figure e05-refi-chain" id="nb-e05-refi-chain-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">流动性危机的四步传导链与反周期对照</p><div class="ff-switch" role="group" aria-label="切换路径" hidden><button type="button" data-ff-view-choice="crisis" aria-pressed="true">危机四步传导</button><button type="button" data-ff-view-choice="buffer" aria-pressed="false">净现金反周期对照</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="crisis" aria-label="高杠杆危机四步传导链：第一步旧债到期与回款推迟撞车形成现金低谷；第二步触发净债务/EBITDA 银行契约红线；第三步银行顺周期冻结循环信贷额度；第四步普通股被迫承受高息续借或低谷折价增发（如 BA 2024 年 10 月增发令股本增 22.9%）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e05-c-r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#b5483a"/></marker></defs>
  <rect x="14" y="34" width="154" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="91" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">1. 流出撞车</text>
  <text x="91" y="92" text-anchor="middle" font-size="12" fill="#22392f">旧债到期＋回款慢</text>
  <text x="91" y="116" text-anchor="middle" font-size="12" fill="#5e6d65">提前撞上现金低谷</text>
  <line x1="168" y1="87" x2="192" y2="87" stroke="#b5483a" stroke-width="2" marker-end="url(#e05-c-r)"/>
  <rect x="198" y="34" width="154" height="106" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="275" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#b5483a">2. 触契约红线</text>
  <text x="275" y="92" text-anchor="middle" font-size="12" fill="#22392f">净债/EBITDA 冲顶</text>
  <text x="275" y="116" text-anchor="middle" font-size="12" fill="#5e6d65">评级贴近投资级边</text>
  <line x1="352" y1="87" x2="376" y2="87" stroke="#b5483a" stroke-width="2" marker-end="url(#e05-c-r)"/>
  <rect x="382" y="34" width="154" height="106" rx="10" fill="#faeae7" stroke="#d89a89" stroke-width="1.3"/>
  <text x="459" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#b5483a">3. 冻结信贷</text>
  <text x="459" y="92" text-anchor="middle" font-size="12" fill="#22392f">银行顺周期拒放款</text>
  <text x="459" y="116" text-anchor="middle" font-size="12" fill="#5e6d65">安全垫在最急时失效</text>
  <line x1="536" y1="87" x2="560" y2="87" stroke="#b5483a" stroke-width="2" marker-end="url(#e05-c-r)"/>
  <rect x="566" y="34" width="140" height="106" rx="10" fill="#b5483a"/>
  <text x="636" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#fce8e5">4. 压向普通股</text>
  <text x="636" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">低谷折价增发</text>
  <text x="636" y="116" text-anchor="middle" font-size="12" fill="#f7d6d0">BA 股本 +22.9%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="buffer" hidden aria-label="净现金反周期对照路径（如 MSFT）：74.5% 债务锁定在 FY31 后、远离契约红线与再融资挤兑，在重资本低谷期依然从容投资与回购、流通股数反降。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e05-c-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">1. 净现金＋长久期</text>
  <text x="118" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">74.5% 在 FY31 后</text>
  <text x="118" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">MSFT 无近端债墙</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#e05-c-s)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">2. 远离契约红线</text>
  <text x="360" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">免受再融资挤兑</text>
  <text x="360" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">高息周期不受压制</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#e05-c-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">3. 逆周期增厚每股</text>
  <text x="602" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="#ffffff">从容投资与回购</text>
  <text x="602" y="118" text-anchor="middle" font-size="12" fill="#d7e8df">流通股不升反降</text>
</svg>
</div>
<figcaption>点击切换危机传导与净现金对照。循环信贷往往在企业最缺钱时因触发契约红线而失效，把账单最终转嫁给普通股。</figcaption>
</figure>

下面的 12 季度模拟器把同一家公司放进三种环境：期初均持有 **180 M 美元**现金、背负 **800 M 美元**债务（初始年利率 4.0%），三年累计息前自由现金流也**同为 +465 M 美元**，到期本金同为 400 M 美元；差别只在到期节奏、再融资条件与回款时点。点击上方按钮切换情景，或叠加 **120 M 美元循环信贷**，看看现金曲线怎样跌穿零线：

<figure class="flow-figure e05-trough-lab" id="nb-e05-trough-lab" data-e05-trough>
<div class="ff-head"><p class="ff-title">企业现金低谷与债务到期墙模拟器（未来 12 个季度）</p><span class="ff-sub">单位：M 美元 · 三种情景三年总息前 FCF 同为 +465 · 教学简化模型</span></div>
<div class="e05-controls" hidden>
<div class="e05-scens"><button type="button" data-e05-scen="ladder">① 梯度分散到期</button><button type="button" data-e05-scen="wall">② 第 2 年集中债墙</button><button type="button" data-e05-scen="shock" aria-pressed="true">③ 高息再融资＋回款延迟</button></div>
<button type="button" class="e05-rev-btn" data-e05-revolver aria-pressed="false">叠加 120 M 循环信贷额度</button>
</div>
<div class="e05-kpis">
<div class="e05-kpi"><span>现金最低谷</span><strong class="e05-t-bad" data-e05-k="trough">−254 M（Y2 Q2）</strong></div>
<div class="e05-kpi"><span>负现金持续季数</span><strong class="e05-t-bad" data-e05-k="negq">4 个季度</strong></div>
<div class="e05-kpi"><span>期末现金 / 债务</span><strong data-e05-k="end">+177 / 450 M</strong></div>
<div class="e05-kpi"><span>流动性判定</span><strong class="e05-t-bad" data-e05-k="status">击穿零线 · 被迫稀释或违约</strong></div>
</div>
<div class="e05-chart-wrap business-exchange" aria-label="12 季度企业可动用现金余额轨迹对比（单位：M 美元；期初现金 180，总债务 800，三年累计息前自由现金流同为 +465，到期本金同为 400）：情景一梯度分散到期（每三季左右到期 100，前期平价续借、后期现金清偿），全程现金最低 +179（Y1 Q2），期末现金 +354、债务降至 600，完全安全；情景二第 2 年集中债墙（Y2 Q2 单季到期 400、仅续借 100 须净还本 300），尽管逐季经营现金流与情景一相同，Y2 Q2 现金仍跌破零线至 −83、Y2 Q3 为 −44，但若契约未违约可由 120 M 循环信贷过桥脱险（最低可用 +37）；情景三高息再融资叠加回款延迟（105 M 回款由 Y1 Q4–Y2 Q2 推迟至 Y3 Q1–Q3，400 M 浮息债务利率由 4% 跳至 8%，Y2 Q2 仅续借 50），现金暴跌至 −254 且连续四个季度为负，即使叠加 120 M 循环信贷仍短缺 134 并面临契约冻结，在第 3 年盈利到来前即被迫折价增发或重组。">
<svg class="e05-svg" viewBox="0 0 600 196" role="img" aria-hidden="true">
<rect class="e05-danger-bg" x="40" y="102.9" width="540" height="65.1"/>
<line class="e05-grid" x1="40" y1="37.7" x2="580" y2="37.7"/>
<line class="e05-grid" x1="40" y1="70.3" x2="580" y2="70.3"/>
<line class="e05-zero" x1="40" y1="102.9" x2="580" y2="102.9"/>
<line class="e05-grid" x1="40" y1="135.4" x2="580" y2="135.4"/>
<line class="e05-rev-line" data-e05-rev-line="" x1="40" y1="128.9" x2="580" y2="128.9" style="display:none"/>
<text class="e05-rev-lbl" data-e05-rev-label="" x="576" y="124.5" text-anchor="end" style="display:none">120 M 循环信贷底线</text>
<g data-e05-mats=""><rect x="301" y="136" width="14" height="32" rx="2" class="e05-mbar e05-mbar-wall"/><text x="297" y="162" text-anchor="end" class="e05-mlbl">400 债墙</text></g>
<polyline class="e05-path e05-p-ladder e05-line-dim" data-e05-line="ladder" points="44.0,63.8 88.0,63.3 132.0,64.0 176.0,62.5 220.0,59.9 264.0,57.3 308.0,55.7 352.0,47.7 396.0,59.2 440.0,46.6 484.0,32.9 528.0,41.0 572.0,26.0"/>
<polyline class="e05-path e05-p-wall e05-line-dim" data-e05-line="wall" points="44.0,63.8 88.0,63.3 132.0,64.0 176.0,62.5 220.0,59.9 264.0,57.3 308.0,120.9 352.0,112.4 396.0,101.8 440.0,89.0 484.0,75.1 528.0,61.2 572.0,46.2"/>
<polyline class="e05-path e05-p-shock e05-line-active" data-e05-line="shock" points="44.0,63.8 88.0,63.3 132.0,64.0 176.0,63.3 220.0,69.2 264.0,75.1 308.0,158.0 352.0,150.2 396.0,140.2 440.0,120.4 484.0,99.6 528.0,78.8 572.0,64.4"/>
<circle class="e05-dot e05-dot-shock" data-e05-dot="" cx="308.0" cy="158.0" r="4.5"/>
<text class="e05-dotlbl e05-dotlbl-shock" data-e05-dot-label="" x="320" y="162" text-anchor="start">低谷 −254 M</text>
<text class="e05-axis-lbl" x="36" y="40.7" text-anchor="end">+300</text>
<text class="e05-axis-lbl" x="36" y="73.3" text-anchor="end">+150</text>
<text class="e05-zero-lbl" x="36" y="105.9" text-anchor="end">0</text>
<text class="e05-axis-lbl" x="36" y="138.4" text-anchor="end">−150</text>
<text class="e05-axis-lbl" x="44" y="184" text-anchor="middle">期初</text>
<text class="e05-axis-lbl" x="132" y="184" text-anchor="middle">Y1Q2</text>
<text class="e05-axis-lbl" x="220" y="184" text-anchor="middle">Y1Q4</text>
<text class="e05-axis-lbl" x="308" y="184" text-anchor="middle">Y2Q2</text>
<text class="e05-axis-lbl" x="396" y="184" text-anchor="middle">Y2Q4</text>
<text class="e05-axis-lbl" x="484" y="184" text-anchor="middle">Y3Q2</text>
<text class="e05-axis-lbl" x="572" y="184" text-anchor="middle">Y3Q4</text>
</svg>
<div class="e05-legend" aria-hidden="true"><span style="--lc:#23695a">① 梯度分散</span><span style="--lc:#a8743f">② 集中债墙</span><span style="--lc:#b44c33">③ 高息＋回款延迟</span></div>
</div>
<p class="e05-qstrip" data-e05-qstrip>撞墙季 Y2 Q2 拆解：期初 128 ＋ 息前 FCF −20 − 利息 12（浮息跳升至 8%）− 净还本 350（到期 400 / 仅续借 50）＝ 期末现金 −254 M。</p>
<p class="e05-note" data-e05-note>③ 高息再融资＋回款延迟：三年总息前 FCF 仍为 +465 M，但 105 M 回款推迟三个季度，叠加浮息重定价与信用收紧，现金在 Y2 Q2 跌至 −254 M 并连续四季为负，经营兑现前即触发危机。</p>
<figcaption>浅红阴影区表示账户现金跌破零线；实线为当前所选情景，虚线保留另外两条轨迹作同口径参照。情景 ② 与 ③ 的第 3 年均能带来丰厚现金流入，却可能倒在 Y2 Q2 这一关口。</figcaption>
</figure>

三条曲线并排对照，暴露出估值模型里常被忽略的硬约束：按三年累计现金流看，三种情景是同一家赚钱的企业，可债务按季清算，从不给“先赊到第 3 年再补上”的宽限。梯度到期能守住安全垫，集中债墙只能靠未违约的循环信贷勉强过桥；一旦再叠加回款推迟与利率跳升，现金缺口在盈利兑现前就会击穿全部额度，迫使普通股在谷底让出股权。

## 净现金与高杠杆的分叉：MSFT FY26 对照 BA FY24–FY25 {#nb-e05-real-cases}

把这套传导链放进真实 10-K，资产负债表如何改写普通股命运就能一眼看清。下面对照两家同样背负巨额资金压力的巨头：密集建设 AI 数据中心的 **MSFT**，与穿越 2024 年交付停工低谷的 **BA**：

<figure class="flow-figure e05-case-compare" id="nb-e05-case-compare-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">资产负债表抗压分叉：MSFT FY26 vs BA FY24–FY25</p><div class="ff-switch" role="group" aria-label="切换公司" hidden><button type="button" data-ff-view-choice="msft" aria-pressed="true">MSFT · 净现金长久期</button><button type="button" data-ff-view-choice="ba" aria-pressed="false">BA · 低谷折价增发</button></div></div>
<div data-ff-only="msft" class="business-exchange" aria-label="Microsoft FY2026（M 美元）：非受限现金及短投 76,843、账面债务 40,294、净现金 +36,549，EBIT 利息保障 50.9 倍，74.5% 债务在 FY31 后到期，全年投出 1,159 亿 CapEx 后流通股仍由 7,434 M 降至 7,427 M。">
<div class="e05-ccard" style="--e05-c:#23695a;--e05-nbg:#edf6f1;--e05-ntxt:#22392f">
<div class="e05-chead"><strong>Microsoft（MSFT）· FY2026（单位：M 美元）</strong><small>截至 2026-06-30 · 净现金缓冲＋超长久期债务</small></div>
<div class="e05-csec"><div class="e05-csec-t">流动性与偿债能力</div><div class="e05-citems">
<div class="e05-ci"><span>非受限现金＋短投 / 账面债务</span><b class="e05-pos">76,843 / 40,294</b></div>
<div class="e05-ci"><span>账面净现金（含 885 亿租赁仍仅 0.27 倍）</span><b class="e05-pos">+36,549</b></div>
<div class="e05-ci"><span>EBIT / 利息支出</span><b class="e05-pos">50.9 倍</b></div>
</div></div>
<div class="e05-csec"><div class="e05-csec-t">债务面值到期结构（合计 46,136 M）</div>
<div class="e05-mstrip" aria-hidden="true"><span class="e05-mseg" style="width:20%;background:#588c79">FY27 20%</span><span class="e05-mseg" style="width:6%;background:#93b6a7"></span><span class="e05-mseg" style="width:74%;background:#23695a">FY31 后到期 74.5%（34,385）</span></div>
<div class="e05-mcap">FY27 到期 9,250 · FY28–31 合计仅 2,501 · 几乎无近端债墙</div>
</div>
<p class="e05-cnote"><strong>股东结果：</strong>全年 1,159 亿美元 CapEx 后仍派息 264.5 亿＋回购 222.7 亿，流通股由 7,434 M 降至 7,427 M。</p>
</div>
</div>
<div data-ff-only="ba" hidden class="business-exchange" aria-label="Boeing FY2024–FY2025（M 美元）：2024 FCF −14,310，被迫于 2024 年 10 月折价增发净募 238.6 亿美元，流通股由 609.5 M 飙至 784.7 M；2025 年末净债务 24,698、2026 年债墙 8,351。">
<div class="e05-ccard" style="--e05-c:#b44c33;--e05-nbg:#fdf2ee;--e05-ntxt:#6e2918">
<div class="e05-chead"><strong>Boeing（BA）· FY2024–FY2025（单位：M 美元）</strong><small>2024 低谷被迫增发 · 2025 末仍背近端债墙</small></div>
<div class="e05-csec"><div class="e05-csec-t">流动性与债务快照（2025 年末）</div><div class="e05-citems">
<div class="e05-ci"><span>非受限现金＋短投 / 总债务</span><b class="e05-bad">29,400 / 54,098</b></div>
<div class="e05-ci"><span>账面净债务（另备循环信贷 10,000）</span><b class="e05-neg">24,698</b></div>
<div class="e05-ci"><span>2024 FCF / 2025 FCF（年利息 2,771）</span><b class="e05-bad">−14,310 / −1,877</b></div>
</div></div>
<div class="e05-csec"><div class="e05-csec-t">近五年到期债墙（2026–2030 合计 23,275 M）</div>
<div class="e05-mstrip" aria-hidden="true"><span class="e05-mseg" style="width:36%;background:#b44c33">26 年 8,351</span><span class="e05-mseg" style="width:19%;background:#cc7b58">27 年</span><span class="e05-mseg" style="width:22%;background:#d8a47c">28–29</span><span class="e05-mseg" style="width:23%;background:#a8743f">30 年 5,274</span></div>
<div class="e05-mcap">2026 年到期 8,351（含 5,899 低息旧债）· 2027 年 4,403 · 2028–30 共 10,521</div>
</div>
<p class="e05-cnote"><strong>股东结果：</strong>2024 年 10 月被迫增发净募 238.6 亿美元，流通股由 609.5 M 飙至 784.7 M，2027 年还将强制转股摊薄。</p>
</div>
</div>
<figcaption>点击切换 MSFT 与 BA 对照。数据取自两家 SEC Form 10-K 原件（MSFT 仍需持续跟踪 3,291 亿表外未起租数据中心承诺）。</figcaption>
</figure>

<span data-text-versions id="nb-e05-text-msft">先看左卡的 **MSFT**。FY2026 公司砸下上千亿美元 AI 资本开支，普通股却毫无压力，靠的是三层缓冲同时发力：账面净现金叠加上千亿美元经营现金流，令利息与股息收入甚至反超全部利息支出；近四分之三债务面值锁定在 FY2031 之后，几乎没有近端债墙；即便并入 885.2 亿美元账内租赁，含租杠杆仍仅 **0.27 倍**，使公司在重投入年份照常分红回购、流通股不升反降<span data-text-detail>（MSFT FY2026 Form 10-K 与 EX-99.1 核对，单位 M 美元：经营现金流 182,935、固定资产资本开支 115,948、营业利润 155,237、EBITDA 193,771、利息支出 3,051［EBIT 利息保障 50.9 倍］、利息及股息收入 3,301；46,136 债务面值中 FY2027 到期 9,250、FY2028 至 FY2031 合计仅 2,501、FY2031 之后到期 34,385［占 74.5%］；全年派息 26,445、回购 22,271，期末流通普通股由 7,434 M 股微降至 7,427 M 股）</span>。[^msft-10k]<sup>，</sup>[^msft-ex]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e05-text-dilution">再看右卡的 **BA**。2024 年交付受阻叠加停工，单是存货积压就消耗 123.5 亿美元现金，自由现金流大亏 **−143.1 亿美元**，评级紧贴投资级底线。为了守住投资级融资窗口，BA 于 2024 年 10 月股价低谷被迫增发普通股与强制可转优先股，募资 **238.6 亿美元**；老股东份额一年被永久摊薄 **22.9%**，次年换股并购又继续推高股本<span data-text-detail>（BA FY2025 Form 10-K 核对：2024 年营业亏损 −107.1 亿美元、经营现金流 −120.8 亿美元、资本开支 22.3 亿美元，年末总债务 538.6 亿美元、利息及债务费用 27.3 亿美元。据 Shareholders’ Equity 附注：2024 年 10 月 30 日从库存股增发 129,375,000 股普通股，扣承销及发行费后附注净额 18,181 M 美元、现金流量表口径 18,200 M 美元；10 月 31 日发行 115,000,000 份存托股份代表 5,750,000 股 6.00% A 系列强制可转优先股，每股清算优先权 1,000 美元、合计 5,750 M 美元，附注净额 5,651 M 美元、现金流量表口径 5,657 M 美元，每年须付 3.45 亿美元优先股息，并将于 2027 年 10 月 15 日按届时均价自动以每股 5.8280 股［均价高于 171.59 美元］至 6.9940 股［均价低于 142.98 美元］转为 3,351 万至 4,022 万股普通股；期末流通普通股由 2023 年末 6.095 亿股激增至 2024 年末 7.492 亿股，2025 年 12 月 8 日再发 22,977,008 股换股收购 Spirit AeroSystems，期末升至 7.847 亿股）</span>。[^ba-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这轮巨额融资帮 BA 跨过了 2024 年末的流动性悬崖，债务存量本身依然压在账上。2025 年主业自由现金流仍未转正，2026 年迎面又是一道 **83.5 亿美元**债墙（其中逾七成是 2.20%–2.50% 的低息旧债），每年逾 31 亿美元的利息与优先股息依旧沉重；老股东保住了公司存续，代价是把未来复苏后超过五分之一的每股收益永久分给了增发资金。[^ba-10k]

读 BA 的 FY2025 利润表时，还要警惕一个误导偿债判断的细节：账面营业利润看似转正至 **+4,281 M 美元**，仿佛足以覆盖当年利息；翻开现金流量表才会发现，其中包含 **9,672 M 美元**一次性资产处置收益，剔除后主业盈利与自由现金流均仍为负值。[^ba-10k] 怎样把一次性项目、非 GAAP 调整与经常性盈利拆干净，正是下一篇[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)要解决的问题。

<script src="/notebook/debt-troughs/ui.js?v=20261127b" defer></script>

[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)（2026-07-29 提交，截至 2026-06-30），Consolidated Balance Sheets、Other Income (Expense), Net、Note 10 Debt 与 Note 13 Leases（含 66,594 M 美元融资租赁、21,925 M 美元经营租赁及 3,291 亿美元未起租数据中心等租赁承诺）。
[^msft-ex]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，经营现金流 182,935、固定资产资本开支 −115,948、分红 −26,445 与回购 −22,271 M 美元。
[^t-10k]: AT&T Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm)（2026-02-09 提交，截至 2025-12-31），Consolidated Statements、Debt（含 120 亿美元循环信贷 3.75 倍净债务／EBITDA 契约、2026–2030 年到期利率阶梯及 2025–2026 年新发债票息）、Leases 与 Restricted Cash 附注。
[^ba-10k]: The Boeing Company，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm)（2026-01-30 提交，含 FY2023–FY2025 三年比较报表），Consolidated Statements、Debt（含 100 亿美元循环信贷与 2026–2030 年到期表）、Leases、Cash Flows（含 742 M 美元受限现金及 9,672 M 美元资产处置收益）与 Shareholders’ Equity（含 2024 年 10 月普通股与 6.00% A 系列强制可转优先股发行条款）。
[^hyoas]: ICE Data Indices / FRED，[ICE BofA US High Yield Index Option-Adjusted Spread（BAMLH0A0HYM2）](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)，美国高收益企业债期权调整利差基准（2008 年 12 月峰值 21.82%、2020 年 3 月峰值 10.87%）。


## Sources
- [Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm): Microsoft 2026 年 7 月 29 日披露之 2026 财年（截至 2026 年 6 月 30 日）三张主表：总收入 331,839 M 美元、营业利润 155,237 M 美元、净利润 133,749 M 美元；经营现金流 182,935 M 美元、固定资产资本开支 −115,948 M 美元、投资现金流 −139,500 M 美元、融资现金流 −52,546 M 美元；期末总资产 758,376 M 美元（固定资产净值 313,076、现金及等价物 20,935）、总负债 315,989、股东权益 442,387。
- [The Boeing Company：FY2025 Form 10-K（Consolidated Statements、Debt、Leases 与 Shareholders’ Equity）](https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm): Boeing 2025 财年年报（2026 年 1 月 30 日提交 SEC，含 2023–2025 比较数据）：2024 年营业亏损 −10,707、利息及债务费用 2,725、经营现金流 −12,080（存货占用 −12,353）、资本开支 −2,230（自由现金流 −14,310 M 美元）；2024 年 10 月 30–31 日被迫增发 129,375,000 股普通股（现金流净募资 18,200，附注扣费净额 18,181）与 5,750,000 股 6.00% A 系列强制可转优先股（清算优先权 5,750，现金流净募资 5,657，附注净额 5,651，2027 年 10 月 15 日强制转股 3,351 万至 4,022 万股），流通普通股由 2023 年末 609.5 百万股升至 2024 年末 749.2 百万股（+22.9%）与 2025 年末 784.7 百万股。2025 年末非受限现金及等价物 10,921（剔除受限现金 742）＋ 短投 18,479 ＝ 29,400，总债务 54,098（短债及一年内到期 8,461 ＋ 长债 45,637），经营租赁负债 2,267，未动用循环信贷 10,000；2026–2030 年到期债务依次为 8,351（含 5,899 利率 2.20%–2.50% 旧债）、4,403、2,739、2,508、5,274；2025 年营业利润 4,281 含一次性处置收益 9,672，经营现金流 1,065、资本开支 −2,942、利息费用 2,771。
- [Microsoft Corporation：FY2026 Form 10-K（Balance Sheets、Other Income、Note 10 Debt 与 Note 13 Leases）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm): Microsoft 2026 财年年报（2026 年 7 月 29 日提交 SEC，截至 2026 年 6 月 30 日）：现金及等价物 20,935 M 美元、短期投资 55,908 M 美元（合计非受限现金及短投 76,843 M 美元）；账面一年内到期长债 9,227 与长期债务 31,067（总有息债务 40,294、面值 46,136，其中 34,385 M 美元于 FY2031 后到期）；营业利润 155,237、折旧摊销及其他 38,534、利息支出 3,051、利息及股息收入 3,301；Note 13 披露账内经营租赁负债 21,925（流动 5,393 ＋ 非流动 16,532）与融资租赁负债 66,594（流动 4,290 ＋ 非流动 62,304），另有 3,291 亿美元尚未起租数据中心等租赁承诺将于 FY2027 至 FY2033 生效；期末流通普通股 7,427 百万股（FY2025 为 7,434 百万股）。
- [AT&T Inc.：FY2025 Form 10-K（Consolidated Statements、Debt、Leases 与 Restricted Cash）](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm): AT&T 2025 财年年报（2026 年 2 月 9 日提交 SEC，截至 2025 年 12 月 31 日）：营业收入 125,648、营业利润 24,162、折旧摊销 20,886（EBITDA 45,048）、利息支出 6,804、经营现金流 40,284、资本开支 20,842（M 美元）；非受限现金及等价物 18,234（另披露受限现金 293，含流动 157 与非流动 136）；一年内到期债务 9,011 ＋ 长期债务 127,089 ＝ 总债务 136,100（含融资租赁 1,382），账面净债务 117,866，另载经营租赁负债 22,524（流动 3,581 ＋ 非流动 18,943）；2025 年 11 月续签 120 亿美元循环信贷协议与 175 亿美元延迟提款定期贷款，设季度末净债务／EBITDA 不超 3.75 倍契约；2026–2030 年到期长债分别为 8,652（加权利率 3.1%）、8,953（3.8%）、6,905（3.2%）、6,918（4.6%）、7,020（4.3%），而 2025 年新发 14,111 长债加权利率 5.0%、2026 年 2 月 5 日新发 6,500 全球债票息 5.2%。
- [ICE Data Indices / FRED（BAMLH0A0HYM2）：ICE BofA US High Yield Index Option-Adjusted Spread](https://fred.stlouisfed.org/series/BAMLH0A0HYM2): 美国高收益企业债期权调整利差（OAS）日频基准指标：记录 2007 年 6 月低点 2.41%、2008 年 12 月 15 日历史峰值 21.82% 与 2020 年 3 月 23 日疫情峰值 10.87%（注：2026 年 4 月起 FRED 仅分发最近三年滚动窗口，历史极值按 1996 年起全样本记录引用）。

## Content relations
```json
[
  {
    "from": "zh-debt-financing-cash-troughs",
    "relation": "part_of",
    "to": "topic-E",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [三张财报与经营活动](https://ou-liu-red-sugar.github.io/zh/notebook/three-financial-statements/)
- [投资期限与现金需要](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
- [信用与尾部风险对冲](https://ou-liu-red-sugar.github.io/zh/notebook/credit-tail-risk-hedging/)
