{
  "title": "库存周期、产能周期与结构变化",
  "description": "重建订单存量流量与库存调整，区分经营交期和资本建设期，并按需比较CAT独立经销渠道.",
  "layout": "entry",
  "notebookid": "zh-ei09",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-ei09"
}

<div data-reading-branch-controls aria-label="选择阅读分支">
<button type="button" data-select-reading-branch="common">共同主线</button>
<button type="button" data-select-reading-branch="dealer-channel">渠道比较</button>
<button type="button" data-select-reading-branch="research">研究选读</button>
<button type="button" data-select-reading-branch="all">全部展开</button>
</div>

<a id="ei09-clocks"></a>

## 订单、交付与资本形成

订单、生产、厂家出货、渠道库存与终端销售构成经营链条；投资决定、建设与投运构成资本形成过程. 两者可并行发生，所需时间也不同.

```text
经营与供应链过程：
需求信号 → 下单、采购 → 投入生产或交付 → 厂家出货 → 渠道库存 → 向最终用户销售
                         每个箭头都有自己的交期或处理时间

资本形成过程：
预期需求与回报 → 投资决定 → 资金、场址、设备安排 → 建设、调试 → 投入运行
       └──────── 可在当期销售尚未完成时提前启动 ────────────────┘
```

投入生产与运输决定经营交期，设备建设与调试决定新容量投入使用的时间.

<a id="ei09-m3"></a>
<a id="CASE-EI09-M3-CONSTRUCTION-MACHINERY-202605"></a>

## 制造业订单与存货

Census M3 记录出货、新订单、未交订单与存货. 本例采用2026年7月2日发布的5月完整版，5月为初值、4月为该版修订值. 下表摘录工程机械行，单位 USD M，已季调，未作价格调整. [^m3]

| 原表与记录对象 | 2026年4月，修订值 | 2026年5月，初值 | 读数时必须保留的身份 |
|---|---:|---:|---|
| Table1，出货 | 4,424 | 4,498 | 月内流量 |
| Table2，新订单 | 4,734 | 4,879 | 月内流量，净取消口径 |
| Table3，未完成订单 | 11,214 | 11,595 | 月末待交付订单余额 |
| Table4，存货 | 10,593 | 10,659 | 月末制造商存货金额 |

这四张表先提供生产过程的不同观察点. 订单显示新增加的待履约需求，出货显示本月离开厂家交付环节的金额，未完成订单是剩余任务的余额；存货则是生产与销售过程中仍由相关主体持有的资源金额，它并不只包含已完成、可立即出售的设备.

令 $B_t$ 为未完成订单，$N_t$ 为新订单净额，$S_t$ 为出货，$A_t$ 汇集范围、计量和修订调整，则一般的金额桥为：

$$
B_t=B_{t-1}+N_t-S_t+A_t.
$$

但**这份 Census M3 发布表还有一个统计构造关系**. 官方 Methodology 的 Estimation 单元说明，总体新订单估计由“当月出货 + 本月与上月未完成订单之差”构造；Seasonal Adjustment Methodology 又规定，季调新订单由季调出货和季调未完成订单的期差构造. 新订单估计本身也已经包含先前订单取消和修改的影响. [^m3method]

Census 按 $N_t=S_t+(B_t-B_{t-1})$ 构造新订单，并纳入既有订单取消和修改的影响. 本例 $4879-4498=381=11595-11214$，与该统计定义一致. [^m3method]

新订单环比约3.063%，出货约1.673%，未交订单约3.398%，存货约0.623%. 前三者由上述统计恒等式连接. 存货另增66，由10,593增至10,659；解释该变化需进一步分解原材料、在制品、成品及估价因素.

公布存货／出货比约为 $10659/4498\approx2.370$，即存货相对于当月出货的金额倍数. 将其用于交期估计，还需匹配物量、生产阶段与流转方式.

<a id="ei09-path"></a>

## 可检验的机制路径

假设订单突然上升而厂家交付调整较慢. 原有出货暂时跟不上，未完成订单先增加；企业可能增加排产和采购，原材料或在制品随后增加. 这是一条“需求先变、交付后跟”的路径. 它预期我们会看到交期延长、产出响应或资源投入增加.

另一条路径是特定投入交付受阻. 厂家可能继续接单，出货受限，未完成订单也会上升；部分不能配齐的在制品积累，甚至在总存货增加时仍缺少关键零件. 这条解释更需要投入到货、缺件和生产瓶颈资料. 两条路径可以产生相似的四表方向，却要求不同的新证据.

“库存高”也要相对于目标来解释. 我们用一个明示的教学假设隔离调整速度：目标库存 $I^*$ 固定，超额库存为 $E_t=I_t-I^*\ge0$；每期净消化超额库存的比例为 $\lambda$，没有新的需求冲击、估值变化或目标变化. 于是

$$
E_{t+1}=E_t-\lambda E_t=(1-\lambda)E_t,
\qquad
E_t=E_0(1-\lambda)^t.
$$

取 $E_0=100,\lambda=0.05$，第6期剩余约73.509，第7期约69.834，首次低于70发生于第7期.

一般地，对 $0<\lambda<1$、$0<h\le E_0$，严格条件 $E_t<h$ 给出
$t>\log(h/E_0)/\log(1-\lambda)$. 因此第一个满足条件的整数期为

$$
n=\left\lfloor\frac{\log(h/E_0)}{\log(1-\lambda)}\right\rfloor+1.
$$

若 $\lambda=0.5$、阈值为25，序列100、50、25、12.5首次严格低于阈值在第3期；$\lambda=0$ 时正缺口保持不变. 对 $0<\lambda<1$，该模型沿同一方向逐期收敛.

| 教学设置 | 临界前一期 | 下一期 | 首次严格低于阈值 |
|---|---|---|---|
| $\lambda=.05,h=70$ | $E_6=73.509$ | $E_7=69.834$ | 第7期 |
| $\lambda=.5,h=25$ | $E_2=25$，恰好相等 | $E_3=12.5$ | 第3期 |
| $\lambda=0,h=70$ | 始终为100 | 始终为100 | 不发生 |

<a id="ei09-experiment"></a>

## 库存调整实验

<div data-experiment-slot="exp-ei09-clocks"></div>

<section data-reading-branch="dealer-channel">
<a id="ei09-dealer"></a>
<a id="CASE-EI09-CAT-Q2H1-2026"></a>
<details>
<summary>比较分支：Caterpillar 独立经销渠道</summary>

Caterpillar Q2 2026 10-Q 披露独立经销商的库存变动. Dealer Inventories 指经销商的机器与发动机库存，排除售后零件. [^cat]

| Dealer Inventories期间变动， B 美元 | 2025年同期 | 2026年当期 | 覆盖 |
|---|---:|---:|---|
| 第二季度 | +0.1 | +0.6 | 全体 |
| 第二季度 | −0.3 | +0.4 | Construction Industries |
| 上半年 | +0.2 | +2.6 | 全体 |
| 上半年 | −0.4 | +1.9 | Construction Industries |

上半年包含第二季度，Construction Industries 属于全体业务的子集. 各窗口分别比较同一范围的变化.

同一Q2单元说，销售量增长主要由**向最终用户销售设备增加**驱动，CI北美叙述还同时提到经销商库存变化的影响. 这里的 end-user equipment sales 是售出设备，不是设备使用小时、开工率或作业量. 公司对 Sales Volume 的术语定义还包含新品引入的销售影响，不能只看中文“量”字就把所有桥项都当设备台数. [^cat]

```text
厂家与配送中心
   │ 向渠道供货／销售
   ▼
独立经销商 ──持有机器与发动机库存，排除售后零件
   │ 向最终用户销售设备
   ▼
最终用户
```

同单位、估价与范围下，经销渠道满足 $I_t^d=I_{t-1}^d+X_t-R_t+J_t$，其中 $X_t$ 为流入、$R_t$ 为流出、$J_t$ 为调整. 流入增幅超过流出时，终端销售和库存可同时增加. 复算这条桥需取得各项可比金额，当前 MD&A 尚缺完整输入.

管理层将经销商库存选择与需求预期、季节性、机器租赁及交货时间联系起来；交货时间又取决于工厂和配送中心的产品可得性. [^cat]

**练习.** 比较 Construction Industries 第二季度增0.4 B、上半年增1.9 B的范围，解释终端销售增加时渠道库存仍可增加的条件.

</details>
</section>

<section data-reading-branch="research">
<a id="ei09-research"></a>
<details>
<summary>研究分支：为什么有些冲击会向上游放大？</summary>

Leng、Liu、Ren、Tsyvinski 的2025年3月版本研究投入品生产和交付的 time-to-build，以及这种时滞如何沿部门网络传播冲击. [^bullwhip]

一种信号出现后立即逐步消退，另一种则先上升再回落；即使当前幅度相似，对未来交付时点的需求也不同. 企业在同一信息条件下会作出不同投入安排. 论文完整信息单元分别处理单调型与驼峰型冲击，并分析网络位置与投入滞后如何共同作用. 因此，“越上游必然放大”不是无条件定律.

经验分析结合工业生产、投入产出联系与M3订单积压代理. 在流量和订单范围匹配等指定条件下，订单积压／出货帮助近似从下单到收货的时间；模型再用冲击形状及部门联系解释动态响应. [^bullwhip]

</details>
</section>

<a id="ei09-exercises"></a>

## 数据与动态练习

**任务一：按统计定义重建订单桥.** 用原表和 M3 Methodology 解释为什么5月会有 $4879-4498=11595-11214=381$，并指出“制造商存货也多66”应放在哪里.

**解析.** $4879=4498+(11595-11214)$ 是该版新订单统计构造的复算. 存货增加 $10659-10593=66$，需用库存阶段及估价资料继续分解.

**任务二：阈值为何必须严格？** 保持 $E_0=100$，令 $\lambda=0.5$. 当阈值是25时，给出最早满足“低于”与“不高于”的时期.

**解析.** 序列为100、50、25、12.5. 不高于25在第2期成立，严格低于25在第3期成立；阈值判断按原始计算值进行.

**迁移题.** 同一口径材料显示：新订单下降，出货暂时持平，经销商库存偏高，新厂仍在建设. 请提出“去库调整”和“长期需求转弱”两条路径，并分别选择下一项最有区分力的证据.

**解析.** 去库路径可以是渠道主动减少向厂商订货，但仍利用现有库存满足较稳定的终端设备销售；厂家暂时交付原有积压订单，所以出货滞后于新订单. 应检查同批终端销售、渠道补货与库存消化是否随后恢复. 长期需求转弱则预期终端购买、客户投资计划或订单取消持续恶化，原有积压耗尽后厂家出货也承压；应检查这些更接近客户用途的资料. 新厂建设是早先投资决定的延续，不能用“仍在建设”替代当前需求证据. 两条路径还可能叠加，后续判断要允许修正.

[^m3]: EI-S06-M3-202605，Census《Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report》，2026-07-02 10:00 AM EDT，CB 26-104 M3-2 (26)-05. PDF p.3定义、pp.6–9 Tables1–4工程机械行、表头及表注；May preliminary / April revised. [固定原件](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf).
[^m3method]: EIBC-S07M，U.S. Census Bureau，《Methodology for Manufacturers’ Shipments, Inventories, and Orders》. 采用 Estimation（PDF pp.2–3）中“new orders = shipments + change in unfilled orders”的估计定义，以及 Seasonal Adjustment Methodology（pp.3–4）中季调新订单的同样构造；原文还说明新订单包含既有订单取消和修改的影响. [官方方法 PDF](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf).
[^cat]: EIBC-S08，Caterpillar Q2 2026 10-Q，period 2026-06-30；完整采用单元为 Q2 Consolidated Sales and Revenues、Q2 Construction Industries、H1 Consolidated Sales and Revenues，以及MD&A Glossary的Dealer Inventories、Sales Volume、Construction Industries. [SEC原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm).
[^bullwhip]: EIBC-S09，Leng、Liu、Ren、Tsyvinski，《The Bullwhip: Time-to-Build and Sectoral Fluctuations》，Cowles DP2436，March 2025. 采用§§2.1–2.2、3.1–3.2.1、4.1、4.3. [所用版本](https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf).

<script src="/notebook/labs/ei-b/reader-adapter.js" defer></script>
