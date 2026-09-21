{
  "title": "流动性提供：库存、费用与比较基准",
  "description": "在恒定乘积与集中流动性模型中，比较LP、持币和自融资再平衡的库存、费用与损益.",
  "layout": "entry",
  "notebookid": "zh-p33",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p33"
}

LP收益需要同时记录库存、交易路径、费用和比较基准. 本篇先在恒定乘积的两步模型中比较LP、静态持币与自融资再平衡，再转到集中流动性. 统一记风险资产为X、计价资产为Y，价格 $P$ 的单位为Y/X；库存 $x$ 为X，现金、财富、费用和LVR均以Y计. 费用与成本是独立教学输入.

<a id="p33-inventory"></a>
## 恒定乘积库存

从 $x_0=y_0=1$ 开始，池子保持 $xy=1$. 把参考市场价格记为 $P$，在这个无费、充分套利的模型中池内边际价格与参考价一致，故 $P=y/x$. 联立两个式子便得到

$$x^*(P)=\frac1{\sqrt P},\qquad y^*(P)=\sqrt P.$$

于是库存市值为

$$V(P)=Px^*(P)+y^*(P)=2\sqrt P.$$

价格从1涨到1.4时，X库存约降至0.845、Y增至1.183，体现卖出X的库存调整；价格下跌时反向调整.[^lvr33]

先与“什么都不动”比较. 同样初始1X+1Y，静态持币的财富是 $H(P)=P+1$，所以

$$V(P)-H(P)=2\sqrt P-P-1=-(\sqrt P-1)^2.$$

该终点差额非正，价格回到1时为零. LVR另以逐次按参考价交易、保持相同风险库存的自融资策略作基准.

<a id="p33-rebalancing"></a>
## 自融资再平衡

采用论文Figure 3的有限树：$1\to1.4\to1.8$、$1\to1.4\to1$、$1\to0.6\to1$、$1\to0.6\to0.2$. 每节点上下概率各半，价格在模型测度Q下为鞅.[^tree33]

再平衡基准始终把X库存调到池子的 $x^*(P)$，但每次都按变化后的参考价交易. 若第 $k$ 次价格为 $P_k$，则

$$
\begin{aligned}
x_k&=1/\sqrt{P_k},\\
y_k^{R}&=y_{k-1}^{R}-P_k(x_k-x_{k-1}),\\
R_k&=P_kx_k+y_k^{R}.
\end{aligned}
$$

第二式使买X减少Y、卖X增加Y，保持自融资. 基准现金 $y_k^R$ 由成交路径决定.

路径先到1.4，基准卖 $1-1/\sqrt{1.4}\approx0.155$ X，得约0.217Y，现金约1.217Y. 总财富2.4，池子财富约2.366；两者X库存相同，差异在现金.

再回到1，基准买回约0.155X，现金约1.062Y，总财富约2.062. 池子与静态持币均回到2Y.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P33-a.svg" alt="四条价格路径上，池子、静态持币与自融资再平衡的终值. 相同终价并不产生相同LVR. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同终价的两条路径，LVR仍不同</p><p class="pfh-figure-note">无手续费与成本；四路径是模型状态，不是时间</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>池子V</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>静态持币H</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="2 5"/></svg><span>再平衡R</span></li></ul><p class="pfh-axis-label">财富Y</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">0.67</span><span style="top:75.0%">1.26</span><span style="top:50.0%">1.85</span><span style="top:25.00000000000001%">2.44</span><span style="top:0.0%">3.03</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000003" x2="765" y2="165.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,140.08 318.33,209.48 541.67,209.48 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 318.33,209.48 541.67,209.48 765.00,290.74" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><polyline points="95.00,134.52 318.33,203.19 541.67,197.66 765.00,302.56" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="140.08085769062882" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="209.48153645894246" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="209.48153645894246" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="209.48153645894246" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="209.48153645894246" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="290.737266466272" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="134.51685848689462" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="203.19048442366073" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="197.65905327888825" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="302.5597496463261" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">上→上</span><span class="" style="left:33.333333333333336%">上→回1</span><span class="" style="left:66.66666666666667%">下→回1</span><span class="last" style="left:100.0%">下→下</span></div></div></div></figure>

<a id="p33-lvr"></a>
## LVR与持币基准

无费 $\mathrm{LVR}_k=R_k-V(P_k)$，衡量池子相对同风险库存再平衡基准的差额.

| 价格路径 | 池子V，Y | 静态持币H，Y | 再平衡R，Y | LVR=R−V，Y |
|---|---:|---:|---:|---:|
| 1→1.4→1.8 | 2.683 | 2.8 | 2.738 | 0.055 |
| 1→1.4→1 | 2 | 2 | 2.062 | 0.062 |
| 1→0.6→1 | 2 | 2 | 2.116 | 0.116 |
| 1→0.6→0.2 | 0.894 | 1.2 | 1.084 | 0.189 |

两条回到1的路径都有 $V-H=0$，但逐次交易量不同，使基准留下不同现金，因而LVR不同.

还有一个直接的数学检查. 因为 $V'(P)=x^*(P)$ 且 $V$ 凹，单步有

$$V(P_k)-V(P_{k-1})\le x^*(P_{k-1})(P_k-P_{k-1}).$$

右侧为基准在价格变化、调仓前的财富增量. 自融资调仓保持财富，故每步R−V的增量非负. 所用条件为正价、价值函数凹性与自融资.

在这棵模型Q树上，基准与持币的期望均为2Y，池子期望约1.894Y，期望无费LVR约0.106Y. 该Q期望描述模型中的公平参考交易；现实参考市场的成交与成本条件需要另行加入实施账.

<a id="p33-fees"></a>
## 费用与净财富

前面的V与R都是无费库存财富. 现在独立假设池子另收0.02Y费用、支出0.005Y成本，费用提取到池外现金，不再投入库存. 净费用现金为0.015Y，总净所得为

$$W_{\rm LP}=V+0.02-0.005=V+0.015.$$

无费库存与结构LVR保持不变，净费用增加总财富. 期望总财富约1.909Y，相对R的期望净差约0.091Y；该含费差额可随费用增大而反号.

论文以计价资产支付并单列费用，池子曲线保持不变.[^fee33] 对具体协议，应按费用再投入、分配及头寸调整规则重建库存和成本.

<a id="p33-range"></a>
## 集中流动性区间

Uniswap v3的集中流动性允许把流动性放在有限区间. 价格越过区间后，头寸变为单一资产、不再提供该区间内的活跃交换流动性；重新进入时才重新活跃. [^uni33]

我们用连续价格近似，区间 $[p_a,p_b]=[0.64,1.44]$，起点P=1，初值2Y. 区间内的实际库存为

$$
\begin{aligned}
x(P)&=L\left(\frac1{\sqrt P}-\frac1{\sqrt{p_b}}\right),\\
y(P)&=L\left(\sqrt P-\sqrt{p_a}\right).
\end{aligned}
$$

在P=1时，$x=L/6$、$y=L/5$，因此初值 $x+y=11L/30=2$，解得 $L=60/11$，$x_0=10/11$ X、$y_0=12/11$ Y.

价格1.69超过上界，库存为 $x=0$、$y=L(\sqrt{1.44}-\sqrt{0.64})=24/11$ Y，约2.182Y. 相同初始库存的静态持币为

$$H=1.69\times\frac{10}{11}+\frac{12}{11}\approx2.627\text{ Y}.$$

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P33-b.svg" alt="集中区间内外的X、Y库存及活跃状态. 上穿区间后X库存归零，并不是资金消失. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">集中区间：上界以后库存全为Y</p><p class="pfh-figure-note">区间[0.64,1.44]；越界不再收取新的swap费</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>区间库存市值</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>原库存持币市值</span></li></ul><p class="pfh-axis-label">财富Y；横轴价格Y/X；费用另列</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">0.67</span><span style="top:75.0%">1.29</span><span style="top:50.0%">1.91</span><span style="top:25.0%">2.53</span><span style="top:0.0%">3.15</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,321.77 103.38,317.38 111.75,312.98 120.12,308.58 128.50,304.18 136.88,299.78 145.25,295.38 153.62,290.98 162.00,286.58 170.38,282.18 178.75,277.79 187.12,273.39 195.50,268.99 203.88,264.69 212.25,260.59 220.62,256.68 229.00,252.95 237.38,249.39 245.75,245.99 254.12,242.76 262.50,239.68 270.88,236.75 279.25,233.96 287.62,231.30 296.00,228.78 304.38,226.39 312.75,224.12 321.12,221.97 329.50,219.94 337.88,218.02 346.25,216.20 354.62,214.50 363.00,212.89 371.38,211.39 379.75,209.98 388.12,208.66 396.50,207.44 404.88,206.31 413.25,205.26 421.62,204.30 430.00,203.42 438.38,202.62 446.75,201.89 455.12,201.25 463.50,200.68 471.88,200.18 480.25,199.76 488.62,199.40 497.00,199.11 505.38,198.89 513.75,198.73 522.12,198.64 530.50,198.61 538.88,198.61 547.25,198.61 555.62,198.61 564.00,198.61 572.38,198.61 580.75,198.61 589.12,198.61 597.50,198.61 605.88,198.61 614.25,198.61 622.62,198.61 631.00,198.61 639.38,198.61 647.75,198.61 656.12,198.61 664.50,198.61 672.88,198.61 681.25,198.61 689.62,198.61 698.00,198.61 706.38,198.61 714.75,198.61 723.12,198.61 731.50,198.61 739.88,198.61 748.25,198.61 756.62,198.61 765.00,198.61" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,268.99 103.38,267.23 111.75,265.47 120.12,263.71 128.50,261.95 136.88,260.19 145.25,258.43 153.62,256.67 162.00,254.91 170.38,253.15 178.75,251.39 187.12,249.63 195.50,247.87 203.88,246.11 212.25,244.35 220.62,242.60 229.00,240.84 237.38,239.08 245.75,237.32 254.12,235.56 262.50,233.80 270.88,232.04 279.25,230.28 287.62,228.52 296.00,226.76 304.38,225.00 312.75,223.24 321.12,221.48 329.50,219.72 337.88,217.96 346.25,216.20 354.62,214.44 363.00,212.68 371.38,210.92 379.75,209.16 388.12,207.40 396.50,205.65 404.88,203.89 413.25,202.13 421.62,200.37 430.00,198.61 438.38,196.85 446.75,195.09 455.12,193.33 463.50,191.57 471.88,189.81 480.25,188.05 488.62,186.29 497.00,184.53 505.38,182.77 513.75,181.01 522.12,179.25 530.50,177.49 538.88,175.73 547.25,173.97 555.62,172.21 564.00,170.45 572.38,168.70 580.75,166.94 589.12,165.18 597.50,163.42 605.88,161.66 614.25,159.90 622.62,158.14 631.00,156.38 639.38,154.62 647.75,152.86 656.12,151.10 664.50,149.34 672.88,147.58 681.25,145.82 689.62,144.06 698.00,142.30 706.38,140.54 714.75,138.78 723.12,137.02 731.50,135.26 739.88,133.50 748.25,131.74 756.62,129.99 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">0.4</span><span class="" style="left:50.0%">1.2</span><span class="last" style="left:100.0%">2</span></div></div></div></figure>

区间分支另设费用0.05Y、成本0.01Y，总净财富约2.222Y. 达到该路径静态持币财富所需累计费用为

$$H-V+\mathrm{cost}=\frac{28.9-24}{11}+0.01\approx0.455\text{ Y}.$$

这是给定路径上的费用门槛. 价格在区间外时头寸不再赚取新的区间内swap费；主动移区间则新增交易、资产转换与gas成本，应作为新的策略路径记录.

<a id="p33-theory"></a>
## 连续时间形式

连续形式设零利率，$P$ 为正的连续半鞅，池子曲线固定且 $V\in C^2$、$V'=x^*$. 自融资基准为

$$R_t=V(P_0)+\int_0^t x^*(P_s)\,dP_s.$$

对V用Itô公式并相减，完整得到

$$R_t-V(P_t)=-\frac12\int_0^t V''(P_s)\,d[P]_s.$$

凹性使被积量非负. 当 $d[P]_t=\sigma_t^2P_t^2dt$，增长率为 $\tfrac12\sigma_t^2P_t^2|x^{*\prime}(P_t)|$. 要令R为期望保持不变的Q鞅，还需Q下价格的鞅性及相应真鞅可积条件.[^proof33]

跳跃价格需加入Itô跳跃项；费用改变曲线或主动增减流动性时，按实际规则更新自融资与库存关系.

<a id="p33-lab"></a>
## 实验与解析

<div data-experiment-slot="EXP-P33-LP"></div>

实验分别比较四条无费路径、0.015Y净费用层和集中区间. 跨越上界后X为零，区间分支采用独立费用0.05Y、成本0.01Y.

**解释题.** 为什么1→1.4→1与1→0.6→1的相对静态持币差均为零，而LVR分别为0.062和0.116？

静态持币只保留初始1X+1Y，回到同一终价便回到同一财富. 再平衡基准在上行路径先卖后买，在下行路径先买后卖；两条路径的交易数量不同，因此留下不同Y余额. LP虽然回到初始库存，却没有取得按参考价逐次交易的那份现金.

**迁移题.** 若有限树净费用提高到0.12Y，是否应该把所有原LVR减0.12并继续叫它“非负LVR”？

结构LVR仍为无费R−V. 净费用0.12Y使总财富变为V+0.12，部分路径相对R的净差为负；无费凹性结论保持成立.

**区间题.** 越过上界后还能用此前每日期望手续费继续累计收入吗？

越界头寸停止提供活跃流动性，重入区间后恢复. 区间内费用取决于交易流量及流动性份额，主动移仓另计转换和gas成本.

[^lvr33]: Milionis、Moallemi、Roughgarden、Zhang，[Automated Market Making and Loss-Versus-Rebalancing](https://arxiv.org/pdf/2208.06v6)，固定v6，2026-08-20上传，§2–3及§4的价值/自融资定义.
[^tree33]: 同文§5.1与Figure 3. 正文DD=0.4与图DD=0.2不一致；采用明确的0.2树以保持各节点模型Q鞅，库存按自融资关系重建.
[^fee33]: 同文§3“Noise traders”及§5.1；费用独立于库存曲线的假设与无费树分开.
[^uni33]: Adams等，[Uniswap v3 Core](https://app.uniswap.org/whitepaper-v3.pdf)，2021-03，§2、§2.1及§3.1–3.2，实际库存、越界与费用.
[^proof33]: LVR v6 §4 Assumption 1、Lemmas 1–2、自融资定义及Appendix A.1/A.2.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
