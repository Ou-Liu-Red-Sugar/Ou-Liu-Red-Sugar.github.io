# 大数定律、中心极限定理与 Monte Carlo 误差

证明有限方差下的Chebyshev弱律，并以同一PCG64样本前缀计算均值、标准误和区间覆盖.

Entry: zh-qt12 | Node: QT12 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 由四状态分布计算解析均值方差，证明有限方差弱律和样本方差一致性，解释CLT及Slutsky；复算冻结前缀、重复覆盖率与MCSE，分解模拟误差和模型差. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTC-MIT17",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/f44fa78f05ac31a4ba2bd82f599dcf60_MIT6_436JF18_lec17.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1 p.1；§3 pp.5–6；§4 p.7",
        "scope": "不等式、iid L1弱律和有限正方差CLT完整单元",
        "purpose": "核Chebyshev证明条件与CLT对象；不复制p5强律笔误"
      },
      "supports": "采用iid L1弱律和有限正方差CLT；正文完整给有限方差Chebyshev短证明. p.5强律旁述的X_n为笔误，应为样本均值；未照抄且未扩写强律证明.",
      "title": "Lecture 17: Laws of Large Numbers and Central Limit Theorem",
      "authors": [
        "MIT OCW 6.436J / 15.085J"
      ],
      "version": "Fall 2018"
    },
    {
      "source_id": "QTC-SPX",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p.1 settlement type/exercise style；p.2 Summary Product Specifications 中 Contract Multiplier 与 Final Settlement Value",
        "scope": "现金结算/欧式行权、乘数、结算值计算与到期后下一营业日现金交付",
        "purpose": "核指数点/美元、支付、结算值计算与现金交付；不从事实表推断券商booking时点"
      },
      "supports": "支持每点100美元、欧式现金结算、行权结算值及到期后下一营业日的现金交付. 四状态未来值、行权价6000与概率均为教学假设；预期支付不自动成为期权现价. 券商账户内部booking时点不由该事实表给出.",
      "title": "SPX Index Options Fact Sheet",
      "authors": [
        "Cboe Exchange, Inc."
      ],
      "version": "©2026；2026-09-21访问，无独立修订日期"
    },
    {
      "source_id": "QTC-SLUTSKY",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://adembo.su.domains/stat-310b/lnotes.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Exercise3.2.8(a)–(c), p.106",
        "scope": "完整练习陈述及常数极限条件",
        "purpose": "核学生化中常数因子的乘法形式；该页不是完整附解证明"
      },
      "supports": "Exercise3.2.8在每n同概率空间、第二极限为常数时给和与积形式；正文用它解释s_n替代sigma. 原件此处是练习，不声称附有完整证明.",
      "title": "Probability Theory: STAT310/MATH230",
      "authors": [
        "Amir Dembo"
      ],
      "version": "2021-04-15"
    }
  ],
  "optional_readings": [
    {
      "source_id": "QTC-WEAK",
      "access": {
        "kind": "html_full_text",
        "uri": "https://arxiv.org/html/2011.12433v2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1 Introduction, Problem1.1, Theorems1.2–1.3",
        "scope": "完整所用弱矩设定与主结果陈述",
        "purpose": "只解释有限方差条件失败后问题改变，不教未实现算法"
      },
      "supports": "以更弱(1+alpha)矩条件研究均值估计，支持失去有限方差后应更换条件/方法这一有限延伸. 本课没有实现该算法或声称金融有效性.",
      "branch": "weak-moments-extension",
      "required_if_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-C-review-v2",
    "experiment": {
      "id": "EXP-MC-01",
      "title": "共同均匀数、嵌套前缀与覆盖率",
      "anchor": "qt12-experiment",
      "description": "从指定支付模型与冻结随机序列重建平均、SE和CLT近似区间，并说明增加n不能消去模型差.",
      "inputs": {
        "config": {
          "experiment_id": "EXP-MC-01",
          "generator": "numpy.random.Generator(numpy.random.PCG64(seed))",
          "payoffs_usd": [
            0,
            0,
            10000,
            20000
          ],
          "probabilities": [
            0.1,
            0.3,
            0.4,
            0.2
          ],
          "stress_probabilities": [
            0.1,
            0.4,
            0.3,
            0.2
          ],
          "reference_seed": 1201,
          "sample_sizes": [
            100,
            1000,
            10000
          ],
          "default_sample_size": 1000,
          "reference_path": "先生成10000个U[0,1)；各n取同一路径前缀，p与p'共用均匀数；inverse-CDF按四个状态映射",
          "coverage_seed": 1202,
          "coverage_repetitions": 5000,
          "coverage_chunk_rows": 250,
          "coverage_interval_z": 1.96,
          "coverage_design": "每行10000个独立均匀数，行间独立；各n在每行使用嵌套前缀，故不同n的覆盖结果相关；只对p模型统计覆盖",
          "sample_sd_ddof": 1
        },
        "contract_convention": {
          "settlement_points": [
            5900,
            6000,
            6100,
            6200
          ],
          "strike_points": 6000,
          "multiplier_usd_per_point": 100,
          "identity": "教学未来情景；非具体挂牌报价"
        },
        "examples": {
          "precision": {
            "target_SE_usd": 100,
            "required_n": 5600
          },
          "heavy_tail": {
            "identity": "教学Pareto，P(Y>y)=y^-alpha for y>=1",
            "alpha": 1.5,
            "mean": 3,
            "second_moment_finite": false
          }
        }
      },
      "outputs": {
        "experiment_id": "EXP-MC-01",
        "config": {
          "experiment_id": "EXP-MC-01",
          "generator": "numpy.random.Generator(numpy.random.PCG64(seed))",
          "payoffs_usd": [
            0,
            0,
            10000,
            20000
          ],
          "probabilities": [
            0.1,
            0.3,
            0.4,
            0.2
          ],
          "stress_probabilities": [
            0.1,
            0.4,
            0.3,
            0.2
          ],
          "reference_seed": 1201,
          "sample_sizes": [
            100,
            1000,
            10000
          ],
          "default_sample_size": 1000,
          "reference_path": "先生成10000个U[0,1)；各n取同一路径前缀，p与p'共用均匀数；inverse-CDF按四个状态映射",
          "coverage_seed": 1202,
          "coverage_repetitions": 5000,
          "coverage_chunk_rows": 250,
          "coverage_interval_z": 1.96,
          "coverage_design": "每行10000个独立均匀数，行间独立；各n在每行使用嵌套前缀，故不同n的覆盖结果相关；只对p模型统计覆盖",
          "sample_sd_ddof": 1
        },
        "reference": {
          "base": {
            "model": {
              "payoffs_usd": [
                0.0,
                0.0,
                10000.0,
                20000.0
              ],
              "probabilities": [
                0.1,
                0.3,
                0.4,
                0.2
              ],
              "mean_usd": 8000.0,
              "second_moment_usd_squared": 120000000.0,
              "variance_usd_squared": 56000000.0,
              "sd_usd": 7483.314773547882
            },
            "sample_sizes": [
              {
                "n": 100,
                "state_counts": [
                  9,
                  34,
                  41,
                  16
                ],
                "estimate_usd": 7300.0,
                "error_relative_to_simulated_model_usd": -700.0,
                "error_relative_to_base_model_usd": -700.0,
                "estimated_SE_usd": 722.7193316379687,
                "theoretical_SE_usd": 748.3314773547883,
                "CLT_95_interval_usd": [
                  5883.470109989581,
                  8716.529890010419
                ],
                "interval_contains_simulated_model_mean": true
              },
              {
                "n": 1000,
                "state_counts": [
                  95,
                  313,
                  389,
                  203
                ],
                "estimate_usd": 7950.0,
                "error_relative_to_simulated_model_usd": -50.0,
                "error_relative_to_base_model_usd": -50.0,
                "estimated_SE_usd": 238.6513240157164,
                "theoretical_SE_usd": 236.64319132398464,
                "CLT_95_interval_usd": [
                  7482.243404929196,
                  8417.756595070805
                ],
                "interval_contains_simulated_model_mean": true
              },
              {
                "n": 10000,
                "state_counts": [
                  967,
                  3051,
                  3969,
                  2013
                ],
                "estimate_usd": 7995.0,
                "error_relative_to_simulated_model_usd": -5.0,
                "error_relative_to_base_model_usd": -5.0,
                "estimated_SE_usd": 75.03039688050174,
                "theoretical_SE_usd": 74.83314773547882,
                "CLT_95_interval_usd": [
                  7847.940422114217,
                  8142.059577885783
                ],
                "interval_contains_simulated_model_mean": true
              }
            ]
          },
          "stress": {
            "model": {
              "payoffs_usd": [
                0.0,
                0.0,
                10000.0,
                20000.0
              ],
              "probabilities": [
                0.1,
                0.4,
                0.3,
                0.2
              ],
              "mean_usd": 7000.0,
              "second_moment_usd_squared": 110000000.0,
              "variance_usd_squared": 61000000.0,
              "sd_usd": 7810.249675906654
            },
            "sample_sizes": [
              {
                "n": 100,
                "state_counts": [
                  9,
                  46,
                  29,
                  16
                ],
                "estimate_usd": 6100.0,
                "error_relative_to_simulated_model_usd": -900.0,
                "error_relative_to_base_model_usd": -1900.0,
                "estimated_SE_usd": 750.6899183653352,
                "theoretical_SE_usd": 781.0249675906655,
                "CLT_95_interval_usd": [
                  4628.647760003943,
                  7571.352239996057
                ],
                "interval_contains_simulated_model_mean": true
              },
              {
                "n": 1000,
                "state_counts": [
                  95,
                  416,
                  286,
                  203
                ],
                "estimate_usd": 6920.0,
                "error_relative_to_simulated_model_usd": -80.0,
                "error_relative_to_base_model_usd": -1080.0,
                "estimated_SE_usd": 248.94894170406826,
                "theoretical_SE_usd": 246.9817807045694,
                "CLT_95_interval_usd": [
                  6432.060074260026,
                  7407.939925739974
                ],
                "interval_contains_simulated_model_mean": true
              },
              {
                "n": 10000,
                "state_counts": [
                  967,
                  4049,
                  2971,
                  2013
                ],
                "estimate_usd": 6997.0,
                "error_relative_to_simulated_model_usd": -3.0,
                "error_relative_to_base_model_usd": -1003.0,
                "estimated_SE_usd": 78.28034160112051,
                "theoretical_SE_usd": 78.10249675906654,
                "CLT_95_interval_usd": [
                  6843.570530461804,
                  7150.429469538196
                ],
                "interval_contains_simulated_model_mean": true
              }
            ]
          }
        },
        "coverage": [
          {
            "n": 100,
            "R": 5000,
            "coverage_count": 4750,
            "coverage_rate": 0.95,
            "coverage_MC_standard_error": 0.0030822070014844896,
            "empirical_bias_usd": -0.5399999999999636,
            "empirical_RMSE_usd": 741.2840211416943,
            "replicate_mean_SD_usd": 741.3579639594798,
            "mean_estimated_SE_usd": 747.5128208198363,
            "theoretical_SE_usd": 748.3314773547883
          },
          {
            "n": 1000,
            "R": 5000,
            "coverage_count": 4792,
            "coverage_rate": 0.9584,
            "coverage_MC_standard_error": 0.0028238073588685176,
            "empirical_bias_usd": 0.17600000000038563,
            "empirical_RMSE_usd": 229.83211263876944,
            "replicate_mean_SD_usd": 229.85503190301975,
            "mean_estimated_SE_usd": 236.70645159930316,
            "theoretical_SE_usd": 236.64319132398464
          },
          {
            "n": 10000,
            "R": 5000,
            "coverage_count": 4723,
            "coverage_rate": 0.9446,
            "coverage_MC_standard_error": 0.0032351457463304493,
            "empirical_bias_usd": -0.40020000000004075,
            "empirical_RMSE_usd": 75.85731210634872,
            "replicate_mean_SD_usd": 75.86384319622161,
            "mean_estimated_SE_usd": 74.83376414414207,
            "theoretical_SE_usd": 74.83314773547882
          }
        ],
        "model_mean_difference_stress_minus_base_usd": -1000.0
      },
      "algorithm": "PCG64(1201)一次10000 uniform，p/p'共同逆CDF；n取前缀. seed1202 5000独立行，每行10000，chunk250；各n跨行独立而不同n共享前缀；CLT区间z=1.96；覆盖率MCSE使用二项比例SE.",
      "boundaries": [
        "iid可积弱律，CLT需要有限正方差",
        "n=1样本SE未定义；零样本方差不证明总体无波动",
        "区间为固定n近似均值区间；无同时覆盖/预测承诺",
        "数值误差和模型差分开",
        "浏览器只读取复算冻结路径，无新RNG"
      ],
      "static_equivalent": {
        "reader_anchor": "qt12-experiment",
        "description": "正文完整输入/推导/默认数值/题解；HTML保留默认表和静态解释."
      },
      "execution": {
        "author_sandbox_recomputed": true,
        "results_file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json",
        "checkpoint_evidence": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/evidence/validation.json",
        "original_full_results_byte_compared": false
      }
    },
    "shared_input_file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/shared_inputs.json",
    "array_files": [
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json",
        "scope": "Monte_Carlo reference/coverage",
        "purpose": "需要完整图形或索引时按JSON路径读取；不以全部随机数组作为每次口头讲解必读"
      }
    ],
    "reading_base": "本站同源冻结输入；通过给定完整公开链接读取. 数据官网的当前更新不替换此 202607 快照.",
    "reproduction_source": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/compute/reproduce.py",
    "input_csv": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv",
    "configuration": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/experiment-config.json"
  },
  "learning_task": "由四状态分布计算解析均值方差，证明有限方差弱律和样本方差一致性，解释CLT及Slutsky；复算冻结前缀、重复覆盖率与MCSE，分解模拟误差和模型差.",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 由四状态分布计算解析均值方差，证明有限方差弱律和样本方差一致性，解释CLT及Slutsky；复算冻结前缀、重复覆盖率与MCSE，分解模拟误差和模型差. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
Monte Carlo 平均涉及两个不同问题：有限次抽样的均值离当前模型期望有多远，以及当前模型是否适合目标对象. 增加模拟路径只直接作用于前一个问题. 以下用一个期望可精确计算的离散支付分布比较理论误差、冻结路径和重复覆盖实验.

<a id="qt12-target"></a>
## 模拟目标与基准

沿用看涨期权式支付表. SPX 产品采用每指数点 100 美元的乘数和现金结算，支付按合约规定的行权结算值计算.[^spx] 以下行权价 6,000、四个结算情景和概率均为**教学设定**.

令 $Z$ 表示结算值，$X=100(Z-6000)^+$ 表示一张合约对应的到期支付金额：

| 状态 | $Z$（指数点） | $X$（美元） | 基准概率 $p$ | 压力概率 $p'$ |
|---|---:|---:|---:|---:|
| 1 | 5,900 | 0 | 0.1 | 0.1 |
| 2 | 6,000 | 0 | 0.3 | 0.4 |
| 3 | 6,100 | 10,000 | 0.4 | 0.3 |
| 4 | 6,200 | 20,000 | 0.2 | 0.2 |

$X$ 表示按结算值计算的一张合约到期支付. Cboe 规定标准 SPX 的结算值按到期日成分股开盘价计算，行权现金在到期后的下一营业日交付. 本节估计的是教学分布下的期望支付 $\mathbb{E}_pX$.

基准模型的精确计算是
\[
\mu=\mathbb{E}_pX=.4(10000)+.2(20000)=8000\ {\rm USD},
\]
\[
\mathbb{E}_pX^2=.4(10000)^2+.2(20000)^2=120000000\ {\rm USD}^2,
\]
\[
\sigma^2=\mathbb{E}_pX^2-\mu^2=56000000\ {\rm USD}^2,
\qquad \sigma\approx7483.31\ {\rm USD}.
\]
这两个解析值给出冻结模拟的误差基准. 这里的 $n$ 表示在同一指定分布下的 iid 模拟抽样次数.[^inputs]

<a id="qt12-lln"></a>
## 弱大数定律与Chebyshev界

令 $X_i$ 独立同分布，$\bar X_n=n^{-1}\sum_{i=1}^nX_i$. **弱大数定律：** 若 $\mathbb{E}|X_1|<\infty$，则 $\bar X_n\to\mathbb{E}X_1$ 依概率，即每个 $\varepsilon>0$ 均满足 $P(|\bar X_n-\mathbb{E}X_1|>\varepsilon)\to0$.[^lln]

**命题.** 若 $X_i$ iid，$\mathbb{E}[X_i]=\mu$、$\operatorname{Var}(X_i)=\sigma^2<\infty$，则
\[
\mathbb{E}[(\bar X_n-\mu)^2]=\frac{\sigma^2}{n},\qquad
P(|\bar X_n-\mu|\ge\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}\quad(\varepsilon>0).
\]

**证明.** 期望的线性性给出 $\mathbb{E}\bar X_n=\mu$. 展开中心化和的平方，不同项因独立且均值为零，交叉期望为零，所以
\[
\mathbb{E}[(\bar X_n-\mu)^2]
=\frac1{n^2}\sum_{i=1}^n\mathbb{E}[(X_i-\mu)^2]
=\frac{\sigma^2}{n}.
\]
又因为
$\varepsilon^2\mathbf1_{\{|\bar X_n-\mu|\ge\varepsilon\}}
\le(\bar X_n-\mu)^2$，
两边取期望，再除以 $\varepsilon^2$，即得不等式；右边随 $n$ 趋于零，因而得到依概率收敛.

独立性使交叉协方差为0；相关样本的方差需保留这些项. 上述证明使用有限二阶矩，仅有有限一阶绝对矩的弱律另需截断论证.

<a id="qt12-clt"></a>
## CLT与标准误

上面的平方误差计算给出平均值的标准差
$\operatorname{SE}(\bar X_n)=\sigma/\sqrt n$. 标准误是估计量 $\bar X_n$ 的抽样标准差；本例 $n=1000$ 时，单次支付标准差为 7,483.31 美元，平均值的理论标准误约为 236.64 美元.

采用的经典 iid **中心极限定理**进一步要求 $0<\sigma^2<\infty$，结论是
\[
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\ \Rightarrow\ N(0,1).
\]
收敛对象是标准化均值误差的分布. [^lln]

模拟时通常以
$s_n^2=(n-1)^{-1}\sum_i(X_i-\bar X_n)^2$ 估计方差. 有限二阶矩使 $X_i$ 与 $X_i^2$ 都可积，分别应用大数定律，再用
\[
s_n^2=\frac n{n-1}\left(\frac1n\sum_iX_i^2-\bar X_n^2\right)
\]
可得 $s_n^2\to\sigma^2$ 依概率. 由于 $\sigma>0$，Slutsky 定理允许用 $s_n$ 替代标准化分母； [^slutsky]

于是我们使用近似 95% 区间
\[
I_n=\left[\bar X_n-1.96\,\frac{s_n}{\sqrt n},
          \bar X_n+1.96\,\frac{s_n}{\sqrt n}\right].
\]
频率解释是：按同一模型反复生成整份样本，这一构造覆盖固定 $\mu$ 的比例在适用极限下趋近 95%.  若某次离散样本恰好全相同而 $s_n=0$，公式会给零宽区间，此时学生化近似可能失灵.

<a id="qt12-experiment"></a>
## 路径与覆盖率

冻结实验使用 NumPy `Generator(PCG64(1201))` 一次生成 10,000 个 $[0,1)$ 均匀数，再按累计概率映射四个状态. $n=100,1000,10000$ 都取同一路径的前缀；基准与压力模型也使用同一组均匀数，只有映射阈值改变. [^inputs] 各样本量共享前缀.

| 模型 | $n$ | 样本均值（美元） | 对本模型的数值误差 | 估计 SE | 理论 SE |
|---|---:|---:|---:|---:|---:|
| 基准 | 100 | 7,300.00 | -700.00 | 722.72 | 748.33 |
| 基准 | 1,000 | 7,950.00 | -50.00 | 238.65 | 236.64 |
| 基准 | 10,000 | 7,995.00 | -5.00 | 75.03 | 74.83 |
| 压力 | 100 | 6,100.00 | -900.00 | 750.69 | 781.02 |
| 压力 | 1,000 | 6,920.00 | -80.00 | 248.95 | 246.98 |
| 压力 | 10,000 | 6,997.00 | -3.00 | 78.28 | 78.1 |

以默认基准 $n=1000$ 为例，四状态次数为 $[95,313,389,203]$，所以
\[
\bar X_{1000}=\frac{389(10000)+203(20000)}{1000}=7950.
\]
将这组计数代入样本方差公式，得到估计 SE 为 238.65 美元，而模型给出的理论 SE 为 236.64 美元. 估计SE随样本变化. 此次近似区间为 **[7,482.24，8,417.76] 美元**，包含模型均值 8,000.

<div data-experiment-slot="EXP-MC-01"></div>

累计平均随新增样本上下波动，图中区间对应当前固定样本量 $n$.

为了检验区间构造，另用 seed 1202 生成 5,000 行独立重复，每行长度 10,000，再各取三个前缀. 每个 $n$ 的 5,000 次重复彼此独立，但**不同 $n$ 的覆盖率结果互相关联**，因为它们共享每行前缀.

| $n$ | 覆盖模型均值的次数 / 5,000 | 覆盖率 | 覆盖率的 MCSE（百分点） |
|---:|---:|---:|---:|
| 100 | 4,750 | 95.00% | 0.308 |
| 1,000 | 4,792 | 95.84% | 0.282 |
| 10,000 | 4,723 | 94.46% | 0.324 |

覆盖指示为0/1，覆盖率估计 $\widehat c$ 的Monte Carlo标准误为 $\sqrt{\widehat c(1-\widehat c)/5000}$. 95.84%是这批重复样本的覆盖比例，变化包含重复实验误差和区间的有限样本近似误差.

<a id="qt12-model-error"></a>
## 模拟误差与模型差

压力模型的期望为 7,000 美元、方差为 61,000,000 美元². 默认 $n=1000$ 得到 6,920 美元. 现在有两种误差：
\[
6920-8000
=\underbrace{(6920-7000)}_{\text{对所模拟模型的数值误差 }-80}
+\underbrace{(7000-8000)}_{\text{两模型均值差 }-1000}.
\]
增加 $n$，第一项会向零收敛，第二项保持为两模型均值之差.

Pareto分布 $P(Y>y)=y^{-1.5}$（$y\ge1$）满足均值3、二阶矩无限. 普通均值弱律成立，有限方差CLT的条件不成立.

<details>
<summary>选读：弱矩条件下的均值估计</summary>

Cherapanamjeri 等研究更弱矩条件下的均值估计，使用不同的矩条件和估计方法.[^weak]

</details>

<a id="qt12-exercises"></a>
## 练习与解析

**题一：要多少次？** 本例基准模型的理论 SE 要不超过 100 美元，最少需要多少次 iid 抽样？这是保证实际误差不超过 100 美元吗？

**解析.** $\sqrt{56000000/n}\le100$ 给出 $n\ge5600$，约束抽样标准差. 若要求实际误差的概率界，可用Chebyshev界或满足条件时的CLT近似.

**题二：两个不同的“误差”.** 压力模型 $n=10000$ 的估计是 6,997 美元. 分别计算相对本模型和相对基准模型的差异，并解释再加一百倍路径可能改变什么.

**解析.** 数值误差为 $6997-7000=-3$；相对基准的差异为 $6997-8000=-1003$. 理论 SE 在路径数增大一百倍后缩为原来的十分之一，模型均值差仍为 $-1000$. 一次路径的实际误差不必恰按十分之一缩放.

**题三：区间到底覆盖什么？** 把 [7,482.24，8,417.76] 美元解释为“下一次支付大概率在这里”是否合理？

**解析.** 单次支付仅取0、10,000、20,000，均在该区间外. 区间估计的对象是均值8,000.

[^spx]: Cboe，*SPX Index Options Fact Sheet*，©2026，pp.1–2：欧式现金结算、$100 乘数、标准 SPX 结算值及到期后下一营业日现金交付，[原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，访问于 2026-09-21.
[^lln]: MIT 6.436J/15.085J，Fall 2018，*Lecture 17: Laws of Large Numbers and Central Limit Theorem*，§1 Markov/Chebyshev 不等式（p.1）、§3 WLLN（pp.5–6）与 §4 CLT（p.7），[完整讲义](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/f44fa78f05ac31a4ba2bd82f599dcf60_MIT6_436JF18_lec17.pdf). 讲义 p.5 强律旁述中的 $X_n$ 应读作样本均值.
[^inputs]: `QT-C-inputs-20260921-v1`，[参数合同](/notebook/labs/qt-c/data/experiment-config.json) 的 `monte_carlo`，[结果](/notebook/labs/qt-c/data/results.json) 的 `Monte_Carlo`. 共同均匀数、全长状态序列、前缀均值/SE 与每次覆盖指示均保留；复算程序见 [compute/reproduce.py](/notebook/labs/qt-c/compute/reproduce.py). 图与表绑定这些冻结路径.
[^weak]: Y. Cherapanamjeri、N. Tripuraneni、P. L. Bartlett、M. I. Jordan，*Optimal Mean Estimation without a Variance*：[COLT 2022/PMLR 178 扩展摘要](https://proceedings.mlr.press/v178/cherapanamjeri22a.html)；[开放完整预印本 2011.12433v2](https://arxiv.org/html/2011.12433v2) 的 §1（Problem 1.1、主要定理）及 §3 算法概述. 完整预印本版本为 2020 年，与 2022 扩展摘要分开引用.

[^slutsky]: Amir Dembo，*Probability Theory: STAT310/MATH230*，2021-04-15 版，Exercise 3.2.8 (a)–(c)，p.106，[公开原文](https://adembo.su.domains/stat-310b/lnotes.pdf). 原文给出趋于常数时的和与积版本；这里对 $\sigma/s_n\to1$ 使用积版本，$\sigma>0$ 是倒数变换所需条件.

## Additional teaching material
冻结输入与结果见[完整冻结结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json)；按本篇指定 JSON 路径读取.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MC-01",
    "title": "共同均匀数、嵌套前缀与覆盖率",
    "anchor": "qt12-experiment",
    "description": "从指定支付模型与冻结随机序列重建平均、SE和CLT近似区间，并说明增加n不能消去模型差.",
    "inputs": {
      "config": {
        "experiment_id": "EXP-MC-01",
        "generator": "numpy.random.Generator(numpy.random.PCG64(seed))",
        "payoffs_usd": [
          0,
          0,
          10000,
          20000
        ],
        "probabilities": [
          0.1,
          0.3,
          0.4,
          0.2
        ],
        "stress_probabilities": [
          0.1,
          0.4,
          0.3,
          0.2
        ],
        "reference_seed": 1201,
        "sample_sizes": [
          100,
          1000,
          10000
        ],
        "default_sample_size": 1000,
        "reference_path": "先生成10000个U[0,1)；各n取同一路径前缀，p与p'共用均匀数；inverse-CDF按四个状态映射",
        "coverage_seed": 1202,
        "coverage_repetitions": 5000,
        "coverage_chunk_rows": 250,
        "coverage_interval_z": 1.96,
        "coverage_design": "每行10000个独立均匀数，行间独立；各n在每行使用嵌套前缀，故不同n的覆盖结果相关；只对p模型统计覆盖",
        "sample_sd_ddof": 1
      },
      "contract_convention": {
        "settlement_points": [
          5900,
          6000,
          6100,
          6200
        ],
        "strike_points": 6000,
        "multiplier_usd_per_point": 100,
        "identity": "教学未来情景；非具体挂牌报价"
      },
      "examples": {
        "precision": {
          "target_SE_usd": 100,
          "required_n": 5600
        },
        "heavy_tail": {
          "identity": "教学Pareto，P(Y>y)=y^-alpha for y>=1",
          "alpha": 1.5,
          "mean": 3,
          "second_moment_finite": false
        }
      }
    },
    "outputs": {
      "experiment_id": "EXP-MC-01",
      "config": {
        "experiment_id": "EXP-MC-01",
        "generator": "numpy.random.Generator(numpy.random.PCG64(seed))",
        "payoffs_usd": [
          0,
          0,
          10000,
          20000
        ],
        "probabilities": [
          0.1,
          0.3,
          0.4,
          0.2
        ],
        "stress_probabilities": [
          0.1,
          0.4,
          0.3,
          0.2
        ],
        "reference_seed": 1201,
        "sample_sizes": [
          100,
          1000,
          10000
        ],
        "default_sample_size": 1000,
        "reference_path": "先生成10000个U[0,1)；各n取同一路径前缀，p与p'共用均匀数；inverse-CDF按四个状态映射",
        "coverage_seed": 1202,
        "coverage_repetitions": 5000,
        "coverage_chunk_rows": 250,
        "coverage_interval_z": 1.96,
        "coverage_design": "每行10000个独立均匀数，行间独立；各n在每行使用嵌套前缀，故不同n的覆盖结果相关；只对p模型统计覆盖",
        "sample_sd_ddof": 1
      },
      "reference": {
        "base": {
          "model": {
            "payoffs_usd": [
              0.0,
              0.0,
              10000.0,
              20000.0
            ],
            "probabilities": [
              0.1,
              0.3,
              0.4,
              0.2
            ],
            "mean_usd": 8000.0,
            "second_moment_usd_squared": 120000000.0,
            "variance_usd_squared": 56000000.0,
            "sd_usd": 7483.314773547882
          },
          "sample_sizes": [
            {
              "n": 100,
              "state_counts": [
                9,
                34,
                41,
                16
              ],
              "estimate_usd": 7300.0,
              "error_relative_to_simulated_model_usd": -700.0,
              "error_relative_to_base_model_usd": -700.0,
              "estimated_SE_usd": 722.7193316379687,
              "theoretical_SE_usd": 748.3314773547883,
              "CLT_95_interval_usd": [
                5883.470109989581,
                8716.529890010419
              ],
              "interval_contains_simulated_model_mean": true
            },
            {
              "n": 1000,
              "state_counts": [
                95,
                313,
                389,
                203
              ],
              "estimate_usd": 7950.0,
              "error_relative_to_simulated_model_usd": -50.0,
              "error_relative_to_base_model_usd": -50.0,
              "estimated_SE_usd": 238.6513240157164,
              "theoretical_SE_usd": 236.64319132398464,
              "CLT_95_interval_usd": [
                7482.243404929196,
                8417.756595070805
              ],
              "interval_contains_simulated_model_mean": true
            },
            {
              "n": 10000,
              "state_counts": [
                967,
                3051,
                3969,
                2013
              ],
              "estimate_usd": 7995.0,
              "error_relative_to_simulated_model_usd": -5.0,
              "error_relative_to_base_model_usd": -5.0,
              "estimated_SE_usd": 75.03039688050174,
              "theoretical_SE_usd": 74.83314773547882,
              "CLT_95_interval_usd": [
                7847.940422114217,
                8142.059577885783
              ],
              "interval_contains_simulated_model_mean": true
            }
          ]
        },
        "stress": {
          "model": {
            "payoffs_usd": [
              0.0,
              0.0,
              10000.0,
              20000.0
            ],
            "probabilities": [
              0.1,
              0.4,
              0.3,
              0.2
            ],
            "mean_usd": 7000.0,
            "second_moment_usd_squared": 110000000.0,
            "variance_usd_squared": 61000000.0,
            "sd_usd": 7810.249675906654
          },
          "sample_sizes": [
            {
              "n": 100,
              "state_counts": [
                9,
                46,
                29,
                16
              ],
              "estimate_usd": 6100.0,
              "error_relative_to_simulated_model_usd": -900.0,
              "error_relative_to_base_model_usd": -1900.0,
              "estimated_SE_usd": 750.6899183653352,
              "theoretical_SE_usd": 781.0249675906655,
              "CLT_95_interval_usd": [
                4628.647760003943,
                7571.352239996057
              ],
              "interval_contains_simulated_model_mean": true
            },
            {
              "n": 1000,
              "state_counts": [
                95,
                416,
                286,
                203
              ],
              "estimate_usd": 6920.0,
              "error_relative_to_simulated_model_usd": -80.0,
              "error_relative_to_base_model_usd": -1080.0,
              "estimated_SE_usd": 248.94894170406826,
              "theoretical_SE_usd": 246.9817807045694,
              "CLT_95_interval_usd": [
                6432.060074260026,
                7407.939925739974
              ],
              "interval_contains_simulated_model_mean": true
            },
            {
              "n": 10000,
              "state_counts": [
                967,
                4049,
                2971,
                2013
              ],
              "estimate_usd": 6997.0,
              "error_relative_to_simulated_model_usd": -3.0,
              "error_relative_to_base_model_usd": -1003.0,
              "estimated_SE_usd": 78.28034160112051,
              "theoretical_SE_usd": 78.10249675906654,
              "CLT_95_interval_usd": [
                6843.570530461804,
                7150.429469538196
              ],
              "interval_contains_simulated_model_mean": true
            }
          ]
        }
      },
      "coverage": [
        {
          "n": 100,
          "R": 5000,
          "coverage_count": 4750,
          "coverage_rate": 0.95,
          "coverage_MC_standard_error": 0.0030822070014844896,
          "empirical_bias_usd": -0.5399999999999636,
          "empirical_RMSE_usd": 741.2840211416943,
          "replicate_mean_SD_usd": 741.3579639594798,
          "mean_estimated_SE_usd": 747.5128208198363,
          "theoretical_SE_usd": 748.3314773547883
        },
        {
          "n": 1000,
          "R": 5000,
          "coverage_count": 4792,
          "coverage_rate": 0.9584,
          "coverage_MC_standard_error": 0.0028238073588685176,
          "empirical_bias_usd": 0.17600000000038563,
          "empirical_RMSE_usd": 229.83211263876944,
          "replicate_mean_SD_usd": 229.85503190301975,
          "mean_estimated_SE_usd": 236.70645159930316,
          "theoretical_SE_usd": 236.64319132398464
        },
        {
          "n": 10000,
          "R": 5000,
          "coverage_count": 4723,
          "coverage_rate": 0.9446,
          "coverage_MC_standard_error": 0.0032351457463304493,
          "empirical_bias_usd": -0.40020000000004075,
          "empirical_RMSE_usd": 75.85731210634872,
          "replicate_mean_SD_usd": 75.86384319622161,
          "mean_estimated_SE_usd": 74.83376414414207,
          "theoretical_SE_usd": 74.83314773547882
        }
      ],
      "model_mean_difference_stress_minus_base_usd": -1000.0
    },
    "algorithm": "PCG64(1201)一次10000 uniform，p/p'共同逆CDF；n取前缀. seed1202 5000独立行，每行10000，chunk250；各n跨行独立而不同n共享前缀；CLT区间z=1.96；覆盖率MCSE使用二项比例SE.",
    "boundaries": [
      "iid可积弱律，CLT需要有限正方差",
      "n=1样本SE未定义；零样本方差不证明总体无波动",
      "区间为固定n近似均值区间；无同时覆盖/预测承诺",
      "数值误差和模型差分开",
      "浏览器只读取复算冻结路径，无新RNG"
    ],
    "static_equivalent": {
      "reader_anchor": "qt12-experiment",
      "description": "正文完整输入/推导/默认数值/题解；HTML保留默认表和静态解释."
    },
    "execution": {
      "author_sandbox_recomputed": true,
      "results_file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json",
      "checkpoint_evidence": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/evidence/validation.json",
      "original_full_results_byte_compared": false
    }
  }
]
```

## Sources
- [QT-C 冻结输入：BusEq 月收益、离散支付与重抽结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv): 从原始 CSV 的 value-weighted monthly 区块提取 BusEq，覆盖 1990-01 至 2025-12 的 432 个月，原始行号 775–1206，无缺失值. 配套文件保存提取数据、实验配置及计算算法；MC 和 AR 使用教学模拟数据.
- [Lecture 17: Laws of Large Numbers and Central Limit Theorem](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/f44fa78f05ac31a4ba2bd82f599dcf60_MIT6_436JF18_lec17.pdf): 采用iid L1弱律和有限正方差CLT；正文完整给有限方差Chebyshev短证明. p.5强律旁述的X_n为笔误，应为样本均值；未照抄且未扩写强律证明.
- [Probability Theory: STAT310/MATH230](https://adembo.su.domains/stat-310b/lnotes.pdf): Exercise 3.2.8：当每个 n 的变量定义在同一概率空间、第二个极限为常数时，给出和与积的 Slutsky 形式；用于解释以样本标准差替代总体标准差.
- [SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 支持每点100美元、欧式现金结算、行权结算值及到期后下一营业日的现金交付. 四状态未来值、行权价6000与概率均为教学假设；预期支付不自动成为期权现价. 券商账户内部booking时点不由该事实表给出.
- [Optimal Mean Estimation without a Variance](https://arxiv.org/html/2011.12433v2): 以更弱(1+alpha)矩条件研究均值估计，支持失去有限方差后应更换条件/方法这一有限延伸. 本课没有实现该算法或声称金融有效性.

## Content relations
```json
[
  {
    "from": "zh-qt12",
    "relation": "part_of",
    "to": "quant-estimation",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt12",
    "relation": "requires",
    "to": "zh-qt04",
    "reason": "当前学习任务确实调用该能力",
    "required_competence": "分布、期望、方差与样本量的含义"
  },
  {
    "from": "zh-qt12",
    "relation": "supported_by",
    "to": "QTC-MIT17",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§1, p.1, Markov and Chebyshev；§3, pp.5–6, WLLN；§4, p.7, CLT statement and characteristic-function proof",
    "scope": "采用iid L1弱律和有限正方差CLT；正文完整给有限方差Chebyshev短证明. p.5强律旁述的X_n为笔误，应为样本均值；未照抄且未扩写强律证明."
  },
  {
    "from": "zh-qt12",
    "relation": "supported_by",
    "to": "QTC-SLUTSKY",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "Exercise 3.2.8(a)–(c), p.106",
    "scope": "Exercise3.2.8在每n同概率空间、第二极限为常数时给和与积形式；正文用它解释s_n替代sigma. 原件此处是练习，不声称附有完整证明."
  },
  {
    "from": "zh-qt12",
    "relation": "supported_by",
    "to": "QTC-SPX",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "p.1 Comparison table: settlement type/exercise style；p.2 Summary Product Specifications: Contract Multiplier; Final Settlement Value; cash delivery on business day following expiration",
    "scope": "支持每点100美元、欧式现金结算、行权结算值及到期后下一营业日的现金交付. 四状态未来值、行权价6000与概率均为教学假设；预期支付不自动成为期权现价. 券商账户内部booking时点不由该事实表给出."
  },
  {
    "from": "zh-qt12",
    "relation": "supported_by",
    "to": "QTC-FROZEN",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "source CSV title line11/header12, BusEq index23 including date；selected source rows775–1206；data/experiment-config.json；data/results.json: returns, Monte_Carlo, bootstrap",
    "scope": "原源CSV首个value-weighted monthly区块BusEq，199001–202512、原行775–1206共432月，缺失0. 归档源链接本身可变；实际随包为逐字节核验的432行提取及配置，结果由同样冻结算法在作者沙盒复算. 原全行业ZIP不在此包内. MC/AR是教学模拟而非市场资料."
  },
  {
    "from": "zh-qt12",
    "relation": "supported_by",
    "to": "QTC-WEAK",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§1 Introduction, Problem1.1, Theorems1.2–1.3；§3 algorithm overview",
    "scope": "以更弱(1+alpha)矩条件研究均值估计，支持失去有限方差后应更换条件/方法这一有限延伸. 本课没有实现该算法或声称金融有效性."
  },
  {
    "from": "qt12-experiment",
    "relation": "illustrated_by",
    "to": "EXP-MC-01",
    "reason": "从指定支付模型与冻结随机序列重建平均、SE和CLT近似区间，并说明增加n不能消去模型差."
  },
  {
    "from": "zh-qt12",
    "relation": "informs",
    "to": "zh-qt19",
    "reason": "解释有限B重抽模拟误差，区别于原始样本信息不足"
  }
]
```

## Related entries
