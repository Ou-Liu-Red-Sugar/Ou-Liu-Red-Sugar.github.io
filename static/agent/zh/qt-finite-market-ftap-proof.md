# 有限期第一资产定价基本定理：无套利与等价鞅测度

现金补足、有限维分离与指标持仓给出无套利与 EMM 的双向证明.

Entry: zh-qt18p1 | Node: QT18-P1 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 证明现金补足和贴现财富恒等式，两个方向证明有限期FTAP；完整给出闭凸集最近点、逐分量严格正分离及可预测指标策略，核二状态空间和零权重反例. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTF-WILLIAMS3",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.1–§3.2 complete; printed pp.40–50/PDF2–7",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "模型、现金补足、贴现财富、FTAP及指标判据完整证明"
      },
      "supports": "模型、现金补足、贴现财富、FTAP及指标判据完整证明",
      "title": "Finite Market Model, Chapter 3",
      "authors": [
        "Ruth J. Williams"
      ],
      "version": "Chapter PDF; no reliable revision date stated"
    },
    {
      "source_id": "QTF-WILLIAMS3",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.6 Theorem3.6.1 full proof; printed pp.66–67/PDF15",
        "scope": "完整读取该采用单元，含必要条件和所用证明.",
        "purpose": "G闭性、最近点、正交与严格正性"
      },
      "supports": "G闭性、最近点、正交与严格正性",
      "title": "Finite Market Model, Chapter 3",
      "authors": [
        "Ruth J. Williams"
      ],
      "version": "Chapter PDF; no reliable revision date stated"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "market_contract": {
      "experiment_id": "EXP-STATE-01",
      "version": "2026-09-21-v1",
      "identity": "Finite frictionless teaching market, independently reconstructed with exact rational arithmetic; no estimated probability or live security quote",
      "units": {
        "monetary_unit": "USD, teaching denomination per modeled asset unit",
        "time": "one abstract period; not annualized",
        "cash_account_holding": "number of cash-account units; cash value at t equals beta*B_t",
        "probabilities": "dimensionless; state-price vector is not a probability",
        "gross_cash_return_symbol": "R=B_1/B_0=51/50; reserve real scalars for mathbb R"
      },
      "assumptions": {
        "time_grid": [
          0,
          1
        ],
        "F_0": "{empty, Omega}",
        "F_T": "all subsets of the displayed terminal atoms",
        "physical_probability": "strictly positive on every terminal atom",
        "cash_account": "B_0=1, deterministic B_1=51/50 > 0; identical borrowing and lending accumulation",
        "holdings": "unrestricted finite signed real quantities; fractional positions and short sales allowed",
        "timing": "holdings for (0,1] chosen from F_0; terminal state cannot be used to choose them",
        "financing": "V_0=beta*B_0+sum_j h_j*S_0^j over every traded risky asset; in the augmented market this includes the added claim at price c. No external cash flows; its terminal payoff is included once in the portfolio value.",
        "frictions": "zero transaction costs, no bid/ask spread, no dividends, no margin/liquidity/short-sale constraint"
      },
      "formula_contract": {
        "state_prices": "A^T*pi=s_0; pi_i>0; sum_i pi_i=B_0/B_1=1/R",
        "martingale_probability": "Q_i=R*pi_i, E_Q[S_1]=R*S_0",
        "density": "z_i=Q_i/P_i; E_P[z]=1",
        "pricing_kernel": "m_i=pi_i/P_i=z_i/R; E_P[m]=1/R",
        "replication": "A*theta=H; price=s_0^T*theta=sum_i pi_i*H_i",
        "multiperiod_cash_completion": "beta_1=(V_0-h_1 dot S_0)/B_0; beta_(k+1)=(beta_k*B_k+h_k dot S_k-h_(k+1) dot S_k)/B_k",
        "discounted_wealth": "V_k/B_k=V_0/B_0+sum_(j=1)^k h_j dot (S_j/B_j-S_(j-1)/B_(j-1))",
        "attainable_space": "K=span{1}+L={a*1+ell:a in real numbers,ell in L}; R is not the scalar field"
      }
    },
    "two_state_example": {
      "state_order": [
        "up",
        "down"
      ],
      "B_0": {
        "exact": "1",
        "decimal": 1.0
      },
      "B_1": {
        "exact": "51/50",
        "decimal": 1.02
      },
      "S_0": {
        "exact": "100",
        "decimal": 100.0
      },
      "S_1": [
        {
          "exact": "120",
          "decimal": 120.0
        },
        {
          "exact": "90",
          "decimal": 90.0
        }
      ],
      "Q": [
        {
          "exact": "2/5",
          "decimal": 0.4
        },
        {
          "exact": "3/5",
          "decimal": 0.6
        }
      ],
      "replication": {
        "cash_account_units": {
          "exact": "-750/17",
          "decimal": -44.11764705882353
        },
        "stock_units": {
          "exact": "1/2",
          "decimal": 0.5
        },
        "initial_cash_value": {
          "exact": "-750/17",
          "decimal": -44.11764705882353
        },
        "initial_stock_value": {
          "exact": "50",
          "decimal": 50.0
        },
        "initial_cost": {
          "exact": "100/17",
          "decimal": 5.882352941176471
        },
        "terminal_cash_value": {
          "exact": "-45",
          "decimal": -45.0
        },
        "terminal_stock_values": [
          {
            "exact": "60",
            "decimal": 60.0
          },
          {
            "exact": "45",
            "decimal": 45.0
          }
        ],
        "terminal_values": [
          {
            "exact": "15",
            "decimal": 15.0
          },
          {
            "exact": "0",
            "decimal": 0.0
          }
        ]
      }
    },
    "endpoint_counterexample": {
      "endpoint": "lower",
      "claim_price": {
        "exact": "100/51",
        "decimal": 1.9607843137254901
      },
      "holdings_B_S_C": [
        {
          "exact": "5000/51",
          "decimal": 98.03921568627452
        },
        {
          "exact": "-1",
          "decimal": -1.0
        },
        {
          "exact": "1",
          "decimal": 1.0
        }
      ],
      "initial_cost": {
        "exact": "0",
        "decimal": 0.0
      },
      "terminal_payoffs": [
        {
          "exact": "20",
          "decimal": 20.0
        },
        {
          "exact": "0",
          "decimal": 0.0
        },
        {
          "exact": "0",
          "decimal": 0.0
        }
      ]
    },
    "view": {
      "node": "QT18-P1",
      "underlying_experiment_id": "EXP-STATE-01",
      "default_h": "1",
      "default_V0": "0"
    },
    "attachments": [
      {
        "title": "本篇完整静态阅读",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18-P1.html",
        "kind": "html"
      },
      {
        "title": "EXP-STATE-01 唯一冻结市场",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
        "kind": "json",
        "version": "2026-09-21-v1",
        "json_pointers": [
          "/units",
          "/assumptions",
          "/formula_contract",
          "/two_state",
          "/three_state_incomplete/endpoint_arbitrages"
        ],
        "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
      },
      {
        "title": "同包默认精确计算",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
        "kind": "json",
        "json_pointers": [
          "/two/gain_basis",
          "/two/cash_completion",
          "/three/endpoints"
        ]
      }
    ]
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 证明现金补足和贴现财富恒等式，两个方向证明有限期FTAP；完整给出闭凸集最近点、逐分量严格正分离及可预测指标策略，核二状态空间和零权重反例. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "learning_task": "证明现金补足和贴现财富恒等式，两个方向证明有限期FTAP；完整给出闭凸集最近点、逐分量严格正分离及可预测指标策略，核二状态空间和零权重反例.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
<a id="qt18p1-model"></a>

## 有限市场与策略

固定 $\Omega=\{\omega_1,\ldots,\omega_m\}$，$\mathcal F=2^\Omega$，且 $P(\{\omega_i\})>0$. 时点为 $0,\ldots,T$，$T<\infty$；取

$$
\mathcal F_0=\{\varnothing,\Omega\},\qquad
\mathcal F_0\subseteq\cdots\subseteq\mathcal F_T=\mathcal F.
$$

若原始样本空间更细，这里直接以终端信息的正概率原子为状态；完备性和测度唯一性都针对这些可区分状态.

现金账户 $B_k$ 为确定、严格正的有限数值；借款与存款沿同一账户增长. 风险资产向量 $S_k=(S_k^1,\ldots,S_k^d)$ 取有限实值且适应滤过. 允许有限、有符号的实数持仓，没有手续费、买卖价差、分红或额外借贷、卖空与流动性限制. $h_k\in\mathbb R^d$ 是在 $(k-1,k]$ 持有的风险资产单位数，必须 $\mathcal F_{k-1}$ 可测；现金账户单位数 $\beta_k$ 也一样. [^w-model]

任意实数持仓使可实施零成本增益对相加和数乘封闭，构成线性空间.

令 $\widetilde S_k=S_k/B_k$，$\widetilde V_k=V_k/B_k$. 套利是初值 $V_0=0$、终值每个状态非负、至少一个状态严格正的自融资策略. 由于 $P$ 全支持，这等价于 $V_T\ge0$ 且 $P(V_T>0)>0$.

<a id="qt18p1-cash"></a>

## 现金补足与贴现财富

对 $k=1,\ldots,T-1$，自融资要求换仓前后在同一时点计价的财富相等，没有外部注资或提款：

$$
\beta_kB_k+h_k\cdot S_k
=\beta_{k+1}B_k+h_{k+1}\cdot S_k.
$$

命题（现金补足）. 给定初始财富 $V_0\in\mathbb R$ 和所有可预测风险持仓 $h_1,\ldots,h_T$，唯一的自融资现金持仓由以下递推确定：

$$
\begin{aligned}
\beta_1&=\frac{V_0-h_1\cdot S_0}{B_0},\\
\beta_{k+1}&=\frac{\beta_kB_k+h_k\cdot S_k-h_{k+1}\cdot S_k}{B_k},\qquad 1\le k\le T-1.
\end{aligned}
$$

证明. 第一式是初始预算的唯一解，因为 $B_0>0$；它是 $\mathcal F_0$ 可测. 若 $\beta_k$ 已构造，第二式正是上述换仓等值式对 $\beta_{k+1}$ 的唯一解. 右端每项都在 $\mathcal F_k$ 可知，因此 $\beta_{k+1}$ 可用于下一期. 归纳完成存在、可预测性和唯一性. [^w-cash]

现在把同一期持仓放在两个端点计价：

$$
\begin{aligned}
V_k&=\beta_kB_k+h_k\cdot S_k,\\
V_{k-1}&=\beta_kB_{k-1}+h_k\cdot S_{k-1}.
\end{aligned}
$$

各自除以对应的 $B$ 后相减，现金单位数消去，得到

$$
\widetilde V_k-\widetilde V_{k-1}
=h_k\cdot(\widetilde S_k-\widetilde S_{k-1}).
$$

逐期求和就是贴现财富恒等式：

$$
\widetilde V_k=V_0/B_0+
\sum_{j=1}^k h_j\cdot\Delta\widetilde S_j.
$$

<a id="qt18p1-ftap"></a>

## 第一基本定理

定理（有限期第一资产定价基本定理）. 在第 1 节全部模型条件下，市场无套利，当且仅当存在概率 $Q\sim P$，使每个贴现风险价格 $\widetilde S^i$ 相对于 $(\mathcal F_k)$ 是 $Q$ 鞅. 有限状态中的 $Q\sim P$ 等价于每个 $q_i=Q(\{\omega_i\})$ 严格正. [^w-ftap]

先证明存在这样的 $Q$ 就没有套利. 可预测性让 $h_k$ 在 $\mathcal F_{k-1}$ 下可提出，而贴现价格增量的条件均值为零. 因此自融资财富满足

$$
\mathbb{E}_Q[\widetilde V_k\mid\mathcal F_{k-1}]
=\widetilde V_{k-1}.
$$

这里所有变量都取有限多个有限值，可积性自动成立. 零初值给 $\mathbb{E}_Q\widetilde V_T=0$. 若存在套利，则 $B_T>0$ 保持终值符号；某个严格正终值所在的状态也有严格正 $q_i$，使 $\mathbb{E}_Q\widetilde V_T>0$，矛盾.

<a id="qt18p1-separation"></a>

## 严格正分离

把终端随机变量看成 $\mathbb R^m$ 中的向量，定义零初值贴现增益空间

$$
L=\left\{\sum_{k=1}^T h_k\cdot\Delta\widetilde S_k:
 h_k\text{ 是可预测风险持仓}\right\}.
$$

现金补足保证这里每个向量都能由零初值自融资策略实现. 它是线性子空间，因而在有限维空间中闭. 无套利说 $L$ 不含非零非负向量. 把这样的向量除以分量之和，可知这等价于 $L$ 与单纯形

$$
\mathcal D=\{f\in\mathbb R^m:f_i\ge0,\ \sum_i f_i=1\}
$$

不相交. [^w-separation]

先令 $G=\mathcal D-L$. 它凸、非空，且不含零. 它也闭：若 $x_n=f_n-\ell_n\to x$，单纯形的紧性让一个子列满足 $f_{n_j}\to f\in\mathcal D$；于是 $\ell_{n_j}=f_{n_j}-x_{n_j}\to f-x$. $L$ 闭，所以 $f-x\in L$，即 $x\in G$.

取以原点为中心、半径为 $r$ 且与 $G$ 相交的闭球 $\overline B(0,r)$. 交集非空且紧，欧氏范数在其中达到最小值，记最小点为 $z$. 球外所有点范数大于 $r\ge\|z\|$，故 $z$ 也是整个 $G$ 的最小范数点. 由于 $0\notin G$，$z\ne0$.

对 $x\in G$ 和 $0<\lambda<1$，凸性给 $z+\lambda(x-z)\in G$. 最小性于是给

$$
\begin{aligned}
\|z+\lambda(x-z)\|^2&\ge\|z\|^2,\\
2z\cdot(x-z)+\lambda\|x-z\|^2&\ge0.
\end{aligned}
$$

令 $\lambda\downarrow0$，得 $z\cdot x\ge\|z\|^2$. 代入 $x=f-\ell$：

$$
z\cdot f-z\cdot\ell\ge\|z\|^2
\quad(f\in\mathcal D,\ \ell\in L).
$$

固定 $f$，把 $\ell$ 替换成任意实数倍 $a\ell$. 若 $z\cdot\ell\ne0$，选适当符号、足够大的 $a$ 就使不等式失败. 因此 $z\perp L$. 再逐个取单纯形顶点 $f=e_i$，得到

$$
z_i\ge\|z\|^2>0\quad\text{对每个 }i.
$$

归一化严格正向量 $z$：

$$
q_i=\frac{z_i}{\sum_jz_j}
$$

给出全支持概率 $Q$；而 $z\perp L$ 说明 $\mathbb{E}_Q\ell=0$ 对每个 $\ell\in L$ 成立.

<a id="qt18p1-indicator"></a>

## 指标持仓与条件鞅

要从所有零初始终端增益的 $Q$ 均值为零恢复条件鞅，需要逐一检验每个资产、每一期和每个 $A\in\mathcal F_{k-1}$.

固定资产 $i$、时点 $k$ 和 $A\in\mathcal F_{k-1}$，令风险持仓只在第 $k$ 期的该资产取 $\mathbf1_A$，其他期、其他资产均为零. 这是可预测持仓. 用第 2 节递推补足现金，初值取零，它的终端贴现增益正好为

$$
\ell=\mathbf1_A(\widetilde S_k^i-\widetilde S_{k-1}^i)\in L.
$$

因而 $\mathbb{E}_Q[\mathbf1_A\Delta\widetilde S_k^i]=0$. 这对所有 $A\in\mathcal F_{k-1}$ 都成立；再加上适应性、可积性，条件期望的积分刻画给

$$
\mathbb{E}_Q[\widetilde S_k^i\mid\mathcal F_{k-1}]
=\widetilde S_{k-1}^i.
$$

每个资产、每一期均满足该式，故 $Q$ 为EMM.[^w-indicator]

<a id="qt18p1-example"></a>

## 一期增益空间

回到同一 EXP-STATE-01 二状态市场. 持有一单位股票并用现金账户借款，使初值为零；贴现增益的基向量为

$$
g=\left(\frac{300}{17},-\frac{200}{17}\right),\qquad L=\operatorname{span}\{g\}.
$$

可选常数风险持仓 $h$，增益就是 $hg$. 每个非零 $h$ 都让两个分量一正一负，所以 $L$ 不会进入非零非负象限. 上面构造出的定价权重在此就是 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$，它满足 $Q\cdot g=0$.

| 量 | 精确结果 |
|---|---|
| 风险持仓 $h$ | $1$ |
| 现金账户单位 $\beta$ | $-100$ |
| 初始财富 | $0$ |
| 终端现金金额 | $-102$ |
| 两状态财富 | $\left(18,-12\right)$ |
| 两状态贴现增益 | $\left(\frac{300}{17},-\frac{200}{17}\right)$ |
| $Q$ 下增益均值 | $0$ |

<div data-experiment-slot="EXP-STATE-01--na-proof"></div>

<a id="qt18p1-exercises"></a>

## 练习与解析

问题一. 仍在同一二状态市场中，设某人只在上涨结果出现时持有股票，下跌时不持有，并声称能在起点借入恰好需要的现金，使初值处处为零、终值非负. 这与本定理矛盾吗？

**解析.** $h_1=\mathbf1_{\{\mathrm{up}\}}$ 及现金持仓 $\beta_1=-S_0h_1/B_0$ 均非平凡 $\mathcal F_0$-可测，违反可预测性条件. 形式终值为 $(18,0)$，但该持仓不属于允许的策略集合.

问题二. 三状态新增支付在价格下端 $c=\frac{100}{51}$ 时，可以找到使全部资产正确加权的 $Q=(0,\frac{9}{10},\frac{1}{10})$. 为什么这不能排除套利？请核对持仓与被忽略的状态.

**解析.** $(\beta,\Delta,\gamma)=(5000/51,-1,1)$ 初始成本0，终值 $(20,0,0)$. $Q$ 为盈利状态赋零权重，故均值仍为0；它与全支持 $P$ 不等价.

[^w-model]: Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3. 章节无可靠修订日期；Lemma 3.2.3 初值行的 $\phi_0$ 为原件排印错误，本稿按从第 1 期持仓定义初值.
[^w-cash]: 同章 Lemma 3.2.5 及完整证明，印刷 pp.48–49 / PDF p.6；贴现增益公式见 §3.1，印刷 pp.42–43 / PDF p.3.
[^w-ftap]: 同章 Theorem 3.2.4，印刷 pp.45–48 / PDF pp.4–6；贴现财富鞅性质见 Lemma 3.2.3，pp.44–45 / PDF p.4.
[^w-separation]: 同章 Theorem 3.6.1 及完整证明，印刷 pp.66–67 / PDF p.15.
[^w-indicator]: 同章 Lemma 3.2.6，印刷 pp.49–50 / PDF pp.6–7.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-STATE-01",
    "title": "有限市场中的状态价格、等价鞅测度与完备性：计算视图",
    "anchor": "qt18-measures",
    "description": "改变本视图参数后重算；正文保留默认表、完整推导和题解，公开附件提供精确输入与结果.",
    "inputs": {
      "shared_experiment_id": "EXP-STATE-01",
      "view": {
        "node": "QT18",
        "underlying_experiment_id": "EXP-STATE-01",
        "default_mode": "two"
      },
      "public_attachments": [
        {
          "title": "EXP-STATE-01 唯一冻结市场",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
          "kind": "json",
          "version": "2026-09-21-v1",
          "json_pointers": [
            "/units",
            "/assumptions",
            "/two_state",
            "/three_state_incomplete",
            "/three_state_augmented_complete"
          ],
          "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
        },
        {
          "title": "同包默认精确计算",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
          "kind": "json",
          "json_pointers": [
            "/two",
            "/three",
            "/complete"
          ]
        }
      ]
    },
    "outputs": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
      "scope": "two/three/complete",
      "json_pointers": [
        "/two",
        "/three",
        "/complete"
      ]
    },
    "is_view_of_existing_experiment": true,
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18.html"
  },
  {
    "id": "EXP-STATE-01--na-proof",
    "title": "有限期第一资产定价基本定理：无套利与等价鞅测度：计算视图",
    "anchor": "qt18p1-example",
    "description": "改变本视图参数后重算；正文保留默认表、完整推导和题解，公开附件提供精确输入与结果.",
    "inputs": {
      "shared_experiment_id": "EXP-STATE-01",
      "view": {
        "node": "QT18-P1",
        "underlying_experiment_id": "EXP-STATE-01",
        "default_h": "1",
        "default_V0": "0"
      },
      "public_attachments": [
        {
          "title": "EXP-STATE-01 唯一冻结市场",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
          "kind": "json",
          "version": "2026-09-21-v1",
          "json_pointers": [
            "/units",
            "/assumptions",
            "/formula_contract",
            "/two_state",
            "/three_state_incomplete/endpoint_arbitrages"
          ],
          "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
        },
        {
          "title": "同包默认精确计算",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
          "kind": "json",
          "json_pointers": [
            "/two/gain_basis",
            "/two/cash_completion",
            "/three/endpoints"
          ]
        }
      ]
    },
    "outputs": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
      "scope": "two/three/complete",
      "json_pointers": [
        "/two/gain_basis",
        "/two/cash_completion",
        "/three/endpoints"
      ]
    },
    "is_view_of_existing_experiment": true,
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18-P1.html"
  }
]
```

## Sources
- [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf): 有限状态模型、现金补足、指标持仓鞅判据、两条基本定理及有限维分离完整证明. 数值输入属于另行冻结的教学市场，不归称讲义报价.

## Content relations
```json
[
  {
    "from": "zh-qt18p1",
    "relation": "part_of",
    "to": "quant-processes",
    "reason": "主要 topic 归属"
  },
  {
    "from": "qt18p1-example",
    "relation": "illustrated_by",
    "to": "EXP-STATE-01",
    "reason": "同一冻结输入的当前视图；证明与算术分别呈现."
  },
  {
    "from": "zh-qt18p1",
    "relation": "requires",
    "to": "zh-qt11",
    "reason": "本证明实际调用的局部能力.",
    "required_competence": "使用所有信息事件上的积分身份识别条件期望."
  },
  {
    "from": "qt18p1-indicator",
    "relation": "informs",
    "to": "qt18p2-perturbation",
    "reason": "正概率与指标持仓判据完成扰动后的EMM验证."
  },
  {
    "from": "qt18p1-model",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3. 章节无可靠修订日期；本文保持其有限状态、平凡初始信息和确定正现金模型. 初始财富统一使用从第 1 期开始的持仓，不沿用 Lemma 3.2.3 初值行的 $\\phi_0$ 排印错误.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-model"
    ]
  },
  {
    "from": "qt18p1-cash",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 Lemma 3.2.5 及完整证明，印刷 pp.48–49 / PDF p.6；贴现增益公式见 §3.1，印刷 pp.42–43 / PDF p.3.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-cash"
    ]
  },
  {
    "from": "qt18p1-ftap",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 Theorem 3.2.4，印刷 pp.45–48 / PDF pp.4–6；贴现财富鞅性质见 Lemma 3.2.3，pp.44–45 / PDF p.4.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-ftap"
    ]
  },
  {
    "from": "qt18p1-separation",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 Theorem 3.6.1 及完整证明，印刷 pp.66–67 / PDF p.15. 此处将其紧凸集取为单纯形，并完整给出闭性、最近点与逐分量严格正性.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-separation"
    ]
  },
  {
    "from": "qt18p1-indicator",
    "relation": "supported_by",
    "to": "QTF-WILLIAMS3",
    "reason": "本段已著明脚注的定义、条件或证明单元；例题数字由具名教学输入提供.",
    "locator": "同章 Lemma 3.2.6，印刷 pp.49–50 / PDF pp.6–7. 零成本收益空间与可实施测试持仓由本文现金递推连接.",
    "scope": "沿本段原脚注的采用范围和勘误说明，不扩充为原件全部结论.",
    "citation_labels": [
      "w-indicator"
    ]
  }
]
```

## Related entries
