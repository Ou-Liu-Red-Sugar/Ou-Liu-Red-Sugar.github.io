# 估计误差与预测不确定性

锁定均值估计目标，对照iid与非循环MBB的条件分布，推导边缘加权中心，再以稳态AR(1)真SE辨认推断边界.

Entry: zh-qt19 | Node: QT19 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你教授 QT19《估计误差与预测不确定性》. 先实际读指定Bootstrap、FPP3区块与时间验证单元，以及本篇同源正文、432月冻结输入、AR设定和对应默认结果. 记录版本、完整范围、算法及假设；原文只有STL余项示例，不可把它说成本课非循环原收益MBB的一致性证明. 可读必读缺失时补取经核入口，仍缺就说明缺口，不能拿摘要顶替.
先让读者命名目标：历史实现值、假定平稳过程的均值mu、估计量抽样误差还是下一月结果？对象没锁定先澄清. 再逐项读一条重抽索引，解释块内连续、块间断开. 推导本例n可被ell整除时的候选块和公式与边缘权重，区分原均值、精确条件中心和5000次均值的平均. 模型/数据切换须同时改变单位；真实收益百分点/月，AR无量纲. AR从独立X0~N(0,1)开始，先由递推推出cov=rho^h，再核真实有限n SE；一次bootstrap输出不是重复覆盖检验. 不得用SE大小评选统计方法有效性. 风险预测研究只在选择分支并实读2019开放稿引言后讲有限机制，不混用正式版页码. 迁移检验使用六点边缘例、B与n的区别、rho=0，以及均值区间为何不是未来预测区间.

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
      "source_id": "QTC-BOOT",
      "access": {
        "kind": "html_full_text",
        "uri": "https://web.stanford.edu/class/stats202/notes/Resampling/Bootstrap.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Cross-validation vs Bootstrap；Resampling the data from the true distribution 至 Comparing Bootstrap sampling...",
        "scope": "逐点重抽、经验分布、估计SE及两分布对照完整教学单元",
        "purpose": "确认估计目标而不是逐字采用所有示例"
      },
      "supports": "经验分布有放回重抽、估计量标准误与交叉验证任务区别. 仅采用对应单元，不把网页广泛的可适用性说明当作金融序列一致性定理.",
      "title": "Bootstrap — STATS 202",
      "authors": [
        "Sergio Bacallado",
        "Jonathan Taylor"
      ],
      "version": "following ISLR 2e；©2022"
    },
    {
      "source_id": "QTC-BLOCK",
      "access": {
        "kind": "html_full_text",
        "uri": "https://otexts.com/fpp3/bootstrap.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§12.5 Bootstrapping time series完整单元",
        "scope": "连续块动机、STL余项上下文",
        "purpose": "区分来源算法与本课直接对原收益做非循环MBB"
      },
      "supports": "连续块可保留块内局部顺序；FPP3示例针对STL余项、再组合与bagging. 本课原收益非循环MBB为明确另述算法，有限条件中心/SE自行推导；不以该示例证明一般bootstrap一致性.",
      "title": "Forecasting: Principles and Practice (3e), §12.5",
      "authors": [
        "Rob J Hyndman",
        "George Athanasopoulos"
      ],
      "version": "在线第三版；2026-09-21访问"
    },
    {
      "source_id": "QTC-CV",
      "access": {
        "kind": "html_full_text",
        "uri": "https://otexts.com/fpp3/tscv.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§5.10完整单元",
        "scope": "滚动预测起点及单步/多步代码和图示说明",
        "purpose": "区分均值bootstrap与时间预测评价"
      },
      "supports": "滚动预测起点的信息边界；只用作bootstrap均值区间不等于未来预测验证的区分.",
      "title": "Forecasting: Principles and Practice (3e), §5.10",
      "authors": [
        "Rob J Hyndman",
        "George Athanasopoulos"
      ],
      "version": "在线第三版；2026-09-21访问"
    }
  ],
  "optional_readings": [
    {
      "source_id": "QTC-BDK",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://papers.tinbergen.nl/19058.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1 Introduction，印刷pp.2–5/PDF pp.4–7",
        "scope": "完整引言，版本为2019开放稿",
        "purpose": "只讲估计步骤影响风险预测评价的机制；不挪用2023页码和实证结论"
      },
      "supports": "只采用估计风险预测时需要把参数估计步骤纳入后续评价这一引言范围机制. 主篇不转述特定实证优劣或拒绝率. 2019与2023是不同版本，未逐式核等.",
      "branch": "risk-backtest-estimation",
      "required_if_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-C-review-v2",
    "experiment": {
      "id": "EXP-BOOT-01",
      "title": "条件重抽分布、MBB边缘权重与稳态AR",
      "anchor": "qt19-results",
      "description": "识别样本/条件重抽/真实过程三层分布，重建MBB有限中心与SE，并区分均值区间和下一期预测区间.",
      "inputs": {
        "config": {
          "experiment_id": "EXP-BOOT-01",
          "repetitions": 5000,
          "iid_seed": 1901,
          "moving_block_seed": 1902,
          "block_lengths": [
            3,
            6,
            12
          ],
          "default_block_length": 6,
          "percentile_levels": [
            0.025,
            0.975
          ],
          "percentile_method": "linear",
          "se_ddof": 1,
          "index_base": 0,
          "moving_block_algorithm": "均匀有放回抽起点0..n-l；每块保留连续l项，拼接ceil(n/l)块后截取前n项；不循环绕回",
          "seed_reset": "每个设计重新初始化指定种子；真实收益与AR(1)复用同一组抽样索引；不同块长分别重置1902",
          "ar1": {
            "seed": 1910,
            "rho": 0.6,
            "innovation_variance": 0.64,
            "n": 432,
            "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
            "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
            "unit": "无量纲的教学模拟变量"
          }
        },
        "dataset": {
          "source_csv": "30_Industry_Portfolios.csv",
          "source_zip": "30_Industry_Portfolios_CSV.zip",
          "source_zip_url": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/ftp/30_Industry_Portfolios_CSV.zip",
          "source_details_url": "https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html",
          "source_regime_url": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html",
          "download_date": "2026-09-21",
          "download_date_provenance": "Lead具名下载记录；非源文件生成日或各月发布日期",
          "expected_crsp_vintage": "202607",
          "block_title": "Average Value Weighted Returns -- Monthly",
          "column": "BusEq",
          "sample_start": "199001",
          "sample_end": "202512",
          "expected_months": 432,
          "missing_codes": [
            -99.99,
            -999.0
          ],
          "percent_divisor": 100.0,
          "regime": "当前CIZ生成的整段重建历史；不与历史FIZ快照拼接",
          "sample_windows": [
            [
              "199001",
              "202512"
            ],
            [
              "200001",
              "202512"
            ],
            [
              "201001",
              "202512"
            ],
            [
              "202001",
              "202512"
            ]
          ],
          "history_identity": "202607当前CIZ整段重建历史；非逐月当时可见vintage",
          "first_source_line": 775,
          "last_source_line": 1206,
          "selected_rows": 432,
          "missing_removed": 0,
          "original_archive_included": false,
          "selected_csv_bytes_verified": true
        },
        "records": [
          {
            "month": "199001",
            "percent": -0.94,
            "r": -0.009399999999999999,
            "loss": 0.009399999999999999,
            "source_line": 775
          },
          {
            "month": "199002",
            "percent": 3.53,
            "r": 0.0353,
            "loss": -0.0353,
            "source_line": 776
          },
          {
            "month": "199003",
            "percent": 4.1,
            "r": 0.040999999999999995,
            "loss": -0.040999999999999995,
            "source_line": 777
          },
          {
            "month": "199004",
            "percent": -1.46,
            "r": -0.0146,
            "loss": 0.0146,
            "source_line": 778
          },
          {
            "month": "199005",
            "percent": 11.64,
            "r": 0.1164,
            "loss": -0.1164,
            "source_line": 779
          },
          {
            "month": "199006",
            "percent": -2.0,
            "r": -0.02,
            "loss": 0.02,
            "source_line": 780
          },
          {
            "month": "199007",
            "percent": -6.52,
            "r": -0.0652,
            "loss": 0.0652,
            "source_line": 781
          },
          {
            "month": "199008",
            "percent": -12.22,
            "r": -0.1222,
            "loss": 0.1222,
            "source_line": 782
          },
          {
            "month": "199009",
            "percent": -6.16,
            "r": -0.0616,
            "loss": 0.0616,
            "source_line": 783
          },
          {
            "month": "199010",
            "percent": -3.82,
            "r": -0.0382,
            "loss": 0.0382,
            "source_line": 784
          },
          {
            "month": "199011",
            "percent": 10.47,
            "r": 0.1047,
            "loss": -0.1047,
            "source_line": 785
          },
          {
            "month": "199012",
            "percent": 3.93,
            "r": 0.0393,
            "loss": -0.0393,
            "source_line": 786
          },
          {
            "month": "199101",
            "percent": 14.36,
            "r": 0.1436,
            "loss": -0.1436,
            "source_line": 787
          },
          {
            "month": "199102",
            "percent": 5.98,
            "r": 0.059800000000000006,
            "loss": -0.059800000000000006,
            "source_line": 788
          },
          {
            "month": "199103",
            "percent": -0.61,
            "r": -0.0060999999999999995,
            "loss": 0.0060999999999999995,
            "source_line": 789
          },
          {
            "month": "199104",
            "percent": -3.01,
            "r": -0.0301,
            "loss": 0.0301,
            "source_line": 790
          },
          {
            "month": "199105",
            "percent": 3.47,
            "r": 0.0347,
            "loss": -0.0347,
            "source_line": 791
          },
          {
            "month": "199106",
            "percent": -9.19,
            "r": -0.0919,
            "loss": 0.0919,
            "source_line": 792
          },
          {
            "month": "199107",
            "percent": 4.15,
            "r": 0.0415,
            "loss": -0.0415,
            "source_line": 793
          },
          {
            "month": "199108",
            "percent": 1.37,
            "r": 0.0137,
            "loss": -0.0137,
            "source_line": 794
          },
          {
            "month": "199109",
            "percent": -2.13,
            "r": -0.0213,
            "loss": 0.0213,
            "source_line": 795
          },
          {
            "month": "199110",
            "percent": 0.13,
            "r": 0.0013,
            "loss": -0.0013,
            "source_line": 796
          },
          {
            "month": "199111",
            "percent": -5.01,
            "r": -0.0501,
            "loss": 0.0501,
            "source_line": 797
          },
          {
            "month": "199112",
            "percent": 7.05,
            "r": 0.0705,
            "loss": -0.0705,
            "source_line": 798
          },
          {
            "month": "199201",
            "percent": 7.35,
            "r": 0.0735,
            "loss": -0.0735,
            "source_line": 799
          },
          {
            "month": "199202",
            "percent": 4.45,
            "r": 0.044500000000000005,
            "loss": -0.044500000000000005,
            "source_line": 800
          },
          {
            "month": "199203",
            "percent": -4.94,
            "r": -0.049400000000000006,
            "loss": 0.049400000000000006,
            "source_line": 801
          },
          {
            "month": "199204",
            "percent": 0.2,
            "r": 0.002,
            "loss": -0.002,
            "source_line": 802
          },
          {
            "month": "199205",
            "percent": -0.75,
            "r": -0.0075,
            "loss": 0.0075,
            "source_line": 803
          },
          {
            "month": "199206",
            "percent": -2.71,
            "r": -0.0271,
            "loss": 0.0271,
            "source_line": 804
          },
          {
            "month": "199207",
            "percent": 2.67,
            "r": 0.026699999999999998,
            "loss": -0.026699999999999998,
            "source_line": 805
          },
          {
            "month": "199208",
            "percent": -5.32,
            "r": -0.053200000000000004,
            "loss": 0.053200000000000004,
            "source_line": 806
          },
          {
            "month": "199209",
            "percent": 2.38,
            "r": 0.023799999999999998,
            "loss": -0.023799999999999998,
            "source_line": 807
          },
          {
            "month": "199210",
            "percent": -0.03,
            "r": -0.0003,
            "loss": 0.0003,
            "source_line": 808
          },
          {
            "month": "199211",
            "percent": 6.77,
            "r": 0.0677,
            "loss": -0.0677,
            "source_line": 809
          },
          {
            "month": "199212",
            "percent": 0.32,
            "r": 0.0032,
            "loss": -0.0032,
            "source_line": 810
          },
          {
            "month": "199301",
            "percent": 5.1,
            "r": 0.051,
            "loss": -0.051,
            "source_line": 811
          },
          {
            "month": "199302",
            "percent": 0.75,
            "r": 0.0075,
            "loss": -0.0075,
            "source_line": 812
          },
          {
            "month": "199303",
            "percent": 1.51,
            "r": 0.0151,
            "loss": -0.0151,
            "source_line": 813
          },
          {
            "month": "199304",
            "percent": -2.69,
            "r": -0.0269,
            "loss": 0.0269,
            "source_line": 814
          },
          {
            "month": "199305",
            "percent": 9.23,
            "r": 0.09230000000000001,
            "loss": -0.09230000000000001,
            "source_line": 815
          },
          {
            "month": "199306",
            "percent": -0.48,
            "r": -0.0048,
            "loss": 0.0048,
            "source_line": 816
          },
          {
            "month": "199307",
            "percent": -2.81,
            "r": -0.0281,
            "loss": 0.0281,
            "source_line": 817
          },
          {
            "month": "199308",
            "percent": 7.83,
            "r": 0.0783,
            "loss": -0.0783,
            "source_line": 818
          },
          {
            "month": "199309",
            "percent": -0.05,
            "r": -0.0005,
            "loss": 0.0005,
            "source_line": 819
          },
          {
            "month": "199310",
            "percent": 1.19,
            "r": 0.011899999999999999,
            "loss": -0.011899999999999999,
            "source_line": 820
          },
          {
            "month": "199311",
            "percent": -0.07,
            "r": -0.0007000000000000001,
            "loss": 0.0007000000000000001,
            "source_line": 821
          },
          {
            "month": "199312",
            "percent": 4.15,
            "r": 0.0415,
            "loss": -0.0415,
            "source_line": 822
          },
          {
            "month": "199401",
            "percent": 4.55,
            "r": 0.0455,
            "loss": -0.0455,
            "source_line": 823
          },
          {
            "month": "199402",
            "percent": 1.6,
            "r": 0.016,
            "loss": -0.016,
            "source_line": 824
          },
          {
            "month": "199403",
            "percent": -3.67,
            "r": -0.036699999999999997,
            "loss": 0.036699999999999997,
            "source_line": 825
          },
          {
            "month": "199404",
            "percent": -2.43,
            "r": -0.024300000000000002,
            "loss": 0.024300000000000002,
            "source_line": 826
          },
          {
            "month": "199405",
            "percent": 0.63,
            "r": 0.0063,
            "loss": -0.0063,
            "source_line": 827
          },
          {
            "month": "199406",
            "percent": -5.03,
            "r": -0.050300000000000004,
            "loss": 0.050300000000000004,
            "source_line": 828
          },
          {
            "month": "199407",
            "percent": 5.09,
            "r": 0.0509,
            "loss": -0.0509,
            "source_line": 829
          },
          {
            "month": "199408",
            "percent": 9.22,
            "r": 0.0922,
            "loss": -0.0922,
            "source_line": 830
          },
          {
            "month": "199409",
            "percent": -0.99,
            "r": -0.009899999999999999,
            "loss": 0.009899999999999999,
            "source_line": 831
          },
          {
            "month": "199410",
            "percent": 6.94,
            "r": 0.0694,
            "loss": -0.0694,
            "source_line": 832
          },
          {
            "month": "199411",
            "percent": -2.28,
            "r": -0.022799999999999997,
            "loss": 0.022799999999999997,
            "source_line": 833
          },
          {
            "month": "199412",
            "percent": 2.75,
            "r": 0.0275,
            "loss": -0.0275,
            "source_line": 834
          },
          {
            "month": "199501",
            "percent": -0.59,
            "r": -0.0059,
            "loss": 0.0059,
            "source_line": 835
          },
          {
            "month": "199502",
            "percent": 6.65,
            "r": 0.0665,
            "loss": -0.0665,
            "source_line": 836
          },
          {
            "month": "199503",
            "percent": 4.32,
            "r": 0.0432,
            "loss": -0.0432,
            "source_line": 837
          },
          {
            "month": "199504",
            "percent": 9.28,
            "r": 0.0928,
            "loss": -0.0928,
            "source_line": 838
          },
          {
            "month": "199505",
            "percent": 3.34,
            "r": 0.0334,
            "loss": -0.0334,
            "source_line": 839
          },
          {
            "month": "199506",
            "percent": 10.15,
            "r": 0.1015,
            "loss": -0.1015,
            "source_line": 840
          },
          {
            "month": "199507",
            "percent": 8.73,
            "r": 0.0873,
            "loss": -0.0873,
            "source_line": 841
          },
          {
            "month": "199508",
            "percent": -0.16,
            "r": -0.0016,
            "loss": 0.0016,
            "source_line": 842
          },
          {
            "month": "199509",
            "percent": 1.29,
            "r": 0.0129,
            "loss": -0.0129,
            "source_line": 843
          },
          {
            "month": "199510",
            "percent": 0.03,
            "r": 0.0003,
            "loss": -0.0003,
            "source_line": 844
          },
          {
            "month": "199511",
            "percent": -1.41,
            "r": -0.0141,
            "loss": 0.0141,
            "source_line": 845
          },
          {
            "month": "199512",
            "percent": -4.58,
            "r": -0.0458,
            "loss": 0.0458,
            "source_line": 846
          },
          {
            "month": "199601",
            "percent": 2.11,
            "r": 0.021099999999999997,
            "loss": -0.021099999999999997,
            "source_line": 847
          },
          {
            "month": "199602",
            "percent": 6.93,
            "r": 0.0693,
            "loss": -0.0693,
            "source_line": 848
          },
          {
            "month": "199603",
            "percent": -4.55,
            "r": -0.0455,
            "loss": 0.0455,
            "source_line": 849
          },
          {
            "month": "199604",
            "percent": 10.57,
            "r": 0.1057,
            "loss": -0.1057,
            "source_line": 850
          },
          {
            "month": "199605",
            "percent": 4.32,
            "r": 0.0432,
            "loss": -0.0432,
            "source_line": 851
          },
          {
            "month": "199606",
            "percent": -6.32,
            "r": -0.0632,
            "loss": 0.0632,
            "source_line": 852
          },
          {
            "month": "199607",
            "percent": -7.54,
            "r": -0.0754,
            "loss": 0.0754,
            "source_line": 853
          },
          {
            "month": "199608",
            "percent": 5.1,
            "r": 0.051,
            "loss": -0.051,
            "source_line": 854
          },
          {
            "month": "199609",
            "percent": 10.66,
            "r": 0.1066,
            "loss": -0.1066,
            "source_line": 855
          },
          {
            "month": "199610",
            "percent": -1.23,
            "r": -0.0123,
            "loss": 0.0123,
            "source_line": 856
          },
          {
            "month": "199611",
            "percent": 14.01,
            "r": 0.1401,
            "loss": -0.1401,
            "source_line": 857
          },
          {
            "month": "199612",
            "percent": -2.42,
            "r": -0.0242,
            "loss": 0.0242,
            "source_line": 858
          },
          {
            "month": "199701",
            "percent": 10.36,
            "r": 0.1036,
            "loss": -0.1036,
            "source_line": 859
          },
          {
            "month": "199702",
            "percent": -8.16,
            "r": -0.0816,
            "loss": 0.0816,
            "source_line": 860
          },
          {
            "month": "199703",
            "percent": -5.22,
            "r": -0.052199999999999996,
            "loss": 0.052199999999999996,
            "source_line": 861
          },
          {
            "month": "199704",
            "percent": 6.02,
            "r": 0.0602,
            "loss": -0.0602,
            "source_line": 862
          },
          {
            "month": "199705",
            "percent": 10.21,
            "r": 0.10210000000000001,
            "loss": -0.10210000000000001,
            "source_line": 863
          },
          {
            "month": "199706",
            "percent": 0.93,
            "r": 0.009300000000000001,
            "loss": -0.009300000000000001,
            "source_line": 864
          },
          {
            "month": "199707",
            "percent": 18.9,
            "r": 0.18899999999999997,
            "loss": -0.18899999999999997,
            "source_line": 865
          },
          {
            "month": "199708",
            "percent": -0.79,
            "r": -0.0079,
            "loss": 0.0079,
            "source_line": 866
          },
          {
            "month": "199709",
            "percent": 3.89,
            "r": 0.038900000000000004,
            "loss": -0.038900000000000004,
            "source_line": 867
          },
          {
            "month": "199710",
            "percent": -10.68,
            "r": -0.10679999999999999,
            "loss": 0.10679999999999999,
            "source_line": 868
          },
          {
            "month": "199711",
            "percent": 0.64,
            "r": 0.0064,
            "loss": -0.0064,
            "source_line": 869
          },
          {
            "month": "199712",
            "percent": -4.76,
            "r": -0.047599999999999996,
            "loss": 0.047599999999999996,
            "source_line": 870
          },
          {
            "month": "199801",
            "percent": 5.08,
            "r": 0.0508,
            "loss": -0.0508,
            "source_line": 871
          },
          {
            "month": "199802",
            "percent": 9.65,
            "r": 0.0965,
            "loss": -0.0965,
            "source_line": 872
          },
          {
            "month": "199803",
            "percent": -2.18,
            "r": -0.0218,
            "loss": 0.0218,
            "source_line": 873
          },
          {
            "month": "199804",
            "percent": 7.61,
            "r": 0.0761,
            "loss": -0.0761,
            "source_line": 874
          },
          {
            "month": "199805",
            "percent": -7.14,
            "r": -0.07139999999999999,
            "loss": 0.07139999999999999,
            "source_line": 875
          },
          {
            "month": "199806",
            "percent": 4.64,
            "r": 0.0464,
            "loss": -0.0464,
            "source_line": 876
          },
          {
            "month": "199807",
            "percent": 3.85,
            "r": 0.0385,
            "loss": -0.0385,
            "source_line": 877
          },
          {
            "month": "199808",
            "percent": -17.49,
            "r": -0.17489999999999997,
            "loss": 0.17489999999999997,
            "source_line": 878
          },
          {
            "month": "199809",
            "percent": 13.18,
            "r": 0.1318,
            "loss": -0.1318,
            "source_line": 879
          },
          {
            "month": "199810",
            "percent": 10.06,
            "r": 0.10060000000000001,
            "loss": -0.10060000000000001,
            "source_line": 880
          },
          {
            "month": "199811",
            "percent": 10.34,
            "r": 0.10339999999999999,
            "loss": -0.10339999999999999,
            "source_line": 881
          },
          {
            "month": "199812",
            "percent": 14.09,
            "r": 0.1409,
            "loss": -0.1409,
            "source_line": 882
          },
          {
            "month": "199901",
            "percent": 13.29,
            "r": 0.1329,
            "loss": -0.1329,
            "source_line": 883
          },
          {
            "month": "199902",
            "percent": -12.31,
            "r": -0.1231,
            "loss": 0.1231,
            "source_line": 884
          },
          {
            "month": "199903",
            "percent": 5.09,
            "r": 0.0509,
            "loss": -0.0509,
            "source_line": 885
          },
          {
            "month": "199904",
            "percent": 6.19,
            "r": 0.061900000000000004,
            "loss": -0.061900000000000004,
            "source_line": 886
          },
          {
            "month": "199905",
            "percent": 0.03,
            "r": 0.0003,
            "loss": -0.0003,
            "source_line": 887
          },
          {
            "month": "199906",
            "percent": 12.86,
            "r": 0.1286,
            "loss": -0.1286,
            "source_line": 888
          },
          {
            "month": "199907",
            "percent": 2.41,
            "r": 0.0241,
            "loss": -0.0241,
            "source_line": 889
          },
          {
            "month": "199908",
            "percent": 7.8,
            "r": 0.078,
            "loss": -0.078,
            "source_line": 890
          },
          {
            "month": "199909",
            "percent": -2.45,
            "r": -0.0245,
            "loss": 0.0245,
            "source_line": 891
          },
          {
            "month": "199910",
            "percent": 3.17,
            "r": 0.0317,
            "loss": -0.0317,
            "source_line": 892
          },
          {
            "month": "199911",
            "percent": 14.16,
            "r": 0.1416,
            "loss": -0.1416,
            "source_line": 893
          },
          {
            "month": "199912",
            "percent": 17.29,
            "r": 0.1729,
            "loss": -0.1729,
            "source_line": 894
          },
          {
            "month": "200001",
            "percent": -1.28,
            "r": -0.0128,
            "loss": 0.0128,
            "source_line": 895
          },
          {
            "month": "200002",
            "percent": 24.72,
            "r": 0.24719999999999998,
            "loss": -0.24719999999999998,
            "source_line": 896
          },
          {
            "month": "200003",
            "percent": 4.72,
            "r": 0.0472,
            "loss": -0.0472,
            "source_line": 897
          },
          {
            "month": "200004",
            "percent": -6.03,
            "r": -0.0603,
            "loss": 0.0603,
            "source_line": 898
          },
          {
            "month": "200005",
            "percent": -11.47,
            "r": -0.11470000000000001,
            "loss": 0.11470000000000001,
            "source_line": 899
          },
          {
            "month": "200006",
            "percent": 12.82,
            "r": 0.1282,
            "loss": -0.1282,
            "source_line": 900
          },
          {
            "month": "200007",
            "percent": -3.28,
            "r": -0.032799999999999996,
            "loss": 0.032799999999999996,
            "source_line": 901
          },
          {
            "month": "200008",
            "percent": 12.84,
            "r": 0.1284,
            "loss": -0.1284,
            "source_line": 902
          },
          {
            "month": "200009",
            "percent": -17.73,
            "r": -0.1773,
            "loss": 0.1773,
            "source_line": 903
          },
          {
            "month": "200010",
            "percent": -6.66,
            "r": -0.0666,
            "loss": 0.0666,
            "source_line": 904
          },
          {
            "month": "200011",
            "percent": -24.28,
            "r": -0.24280000000000002,
            "loss": 0.24280000000000002,
            "source_line": 905
          },
          {
            "month": "200012",
            "percent": -8.29,
            "r": -0.08289999999999999,
            "loss": 0.08289999999999999,
            "source_line": 906
          },
          {
            "month": "200101",
            "percent": 13.93,
            "r": 0.1393,
            "loss": -0.1393,
            "source_line": 907
          },
          {
            "month": "200102",
            "percent": -31.53,
            "r": -0.3153,
            "loss": 0.3153,
            "source_line": 908
          },
          {
            "month": "200103",
            "percent": -14.14,
            "r": -0.1414,
            "loss": 0.1414,
            "source_line": 909
          },
          {
            "month": "200104",
            "percent": 15.93,
            "r": 0.1593,
            "loss": -0.1593,
            "source_line": 910
          },
          {
            "month": "200105",
            "percent": -6.35,
            "r": -0.0635,
            "loss": 0.0635,
            "source_line": 911
          },
          {
            "month": "200106",
            "percent": -1.57,
            "r": -0.015700000000000002,
            "loss": 0.015700000000000002,
            "source_line": 912
          },
          {
            "month": "200107",
            "percent": -4.33,
            "r": -0.0433,
            "loss": 0.0433,
            "source_line": 913
          },
          {
            "month": "200108",
            "percent": -11.16,
            "r": -0.1116,
            "loss": 0.1116,
            "source_line": 914
          },
          {
            "month": "200109",
            "percent": -24.51,
            "r": -0.2451,
            "loss": 0.2451,
            "source_line": 915
          },
          {
            "month": "200110",
            "percent": 19.58,
            "r": 0.19579999999999997,
            "loss": -0.19579999999999997,
            "source_line": 916
          },
          {
            "month": "200111",
            "percent": 20.19,
            "r": 0.20190000000000002,
            "loss": -0.20190000000000002,
            "source_line": 917
          },
          {
            "month": "200112",
            "percent": -3.94,
            "r": -0.0394,
            "loss": 0.0394,
            "source_line": 918
          },
          {
            "month": "200201",
            "percent": 3.35,
            "r": 0.0335,
            "loss": -0.0335,
            "source_line": 919
          },
          {
            "month": "200202",
            "percent": -16.68,
            "r": -0.1668,
            "loss": 0.1668,
            "source_line": 920
          },
          {
            "month": "200203",
            "percent": 9.73,
            "r": 0.0973,
            "loss": -0.0973,
            "source_line": 921
          },
          {
            "month": "200204",
            "percent": -8.52,
            "r": -0.0852,
            "loss": 0.0852,
            "source_line": 922
          },
          {
            "month": "200205",
            "percent": -2.71,
            "r": -0.0271,
            "loss": 0.0271,
            "source_line": 923
          },
          {
            "month": "200206",
            "percent": -18.52,
            "r": -0.1852,
            "loss": 0.1852,
            "source_line": 924
          },
          {
            "month": "200207",
            "percent": -9.2,
            "r": -0.092,
            "loss": 0.092,
            "source_line": 925
          },
          {
            "month": "200208",
            "percent": -3.42,
            "r": -0.0342,
            "loss": 0.0342,
            "source_line": 926
          },
          {
            "month": "200209",
            "percent": -17.48,
            "r": -0.1748,
            "loss": 0.1748,
            "source_line": 927
          },
          {
            "month": "200210",
            "percent": 15.59,
            "r": 0.1559,
            "loss": -0.1559,
            "source_line": 928
          },
          {
            "month": "200211",
            "percent": 21.41,
            "r": 0.2141,
            "loss": -0.2141,
            "source_line": 929
          },
          {
            "month": "200212",
            "percent": -15.94,
            "r": -0.1594,
            "loss": 0.1594,
            "source_line": 930
          },
          {
            "month": "200301",
            "percent": -0.96,
            "r": -0.0096,
            "loss": 0.0096,
            "source_line": 931
          },
          {
            "month": "200302",
            "percent": 3.07,
            "r": 0.030699999999999998,
            "loss": -0.030699999999999998,
            "source_line": 932
          },
          {
            "month": "200303",
            "percent": -2.21,
            "r": -0.022099999999999998,
            "loss": 0.022099999999999998,
            "source_line": 933
          },
          {
            "month": "200304",
            "percent": 10.5,
            "r": 0.105,
            "loss": -0.105,
            "source_line": 934
          },
          {
            "month": "200305",
            "percent": 13.86,
            "r": 0.1386,
            "loss": -0.1386,
            "source_line": 935
          },
          {
            "month": "200306",
            "percent": 0.34,
            "r": 0.0034000000000000002,
            "loss": -0.0034000000000000002,
            "source_line": 936
          },
          {
            "month": "200307",
            "percent": 8.49,
            "r": 0.0849,
            "loss": -0.0849,
            "source_line": 937
          },
          {
            "month": "200308",
            "percent": 8.2,
            "r": 0.08199999999999999,
            "loss": -0.08199999999999999,
            "source_line": 938
          },
          {
            "month": "200309",
            "percent": -2.64,
            "r": -0.0264,
            "loss": 0.0264,
            "source_line": 939
          },
          {
            "month": "200310",
            "percent": 13.09,
            "r": 0.1309,
            "loss": -0.1309,
            "source_line": 940
          },
          {
            "month": "200311",
            "percent": 3.04,
            "r": 0.0304,
            "loss": -0.0304,
            "source_line": 941
          },
          {
            "month": "200312",
            "percent": 0.08,
            "r": 0.0008,
            "loss": -0.0008,
            "source_line": 942
          },
          {
            "month": "200401",
            "percent": 4.85,
            "r": 0.048499999999999995,
            "loss": -0.048499999999999995,
            "source_line": 943
          },
          {
            "month": "200402",
            "percent": -2.72,
            "r": -0.027200000000000002,
            "loss": 0.027200000000000002,
            "source_line": 944
          },
          {
            "month": "200403",
            "percent": -2.52,
            "r": -0.0252,
            "loss": 0.0252,
            "source_line": 945
          },
          {
            "month": "200404",
            "percent": -8.06,
            "r": -0.0806,
            "loss": 0.0806,
            "source_line": 946
          },
          {
            "month": "200405",
            "percent": 6.86,
            "r": 0.06860000000000001,
            "loss": -0.06860000000000001,
            "source_line": 947
          },
          {
            "month": "200406",
            "percent": 1.25,
            "r": 0.0125,
            "loss": -0.0125,
            "source_line": 948
          },
          {
            "month": "200407",
            "percent": -10.33,
            "r": -0.1033,
            "loss": 0.1033,
            "source_line": 949
          },
          {
            "month": "200408",
            "percent": -5.94,
            "r": -0.0594,
            "loss": 0.0594,
            "source_line": 950
          },
          {
            "month": "200409",
            "percent": 2.53,
            "r": 0.0253,
            "loss": -0.0253,
            "source_line": 951
          },
          {
            "month": "200410",
            "percent": 5.51,
            "r": 0.055099999999999996,
            "loss": -0.055099999999999996,
            "source_line": 952
          },
          {
            "month": "200411",
            "percent": 5.22,
            "r": 0.052199999999999996,
            "loss": -0.052199999999999996,
            "source_line": 953
          },
          {
            "month": "200412",
            "percent": 3.03,
            "r": 0.030299999999999997,
            "loss": -0.030299999999999997,
            "source_line": 954
          },
          {
            "month": "200501",
            "percent": -6.28,
            "r": -0.06280000000000001,
            "loss": 0.06280000000000001,
            "source_line": 955
          },
          {
            "month": "200502",
            "percent": 1.75,
            "r": 0.0175,
            "loss": -0.0175,
            "source_line": 956
          },
          {
            "month": "200503",
            "percent": -2.59,
            "r": -0.0259,
            "loss": 0.0259,
            "source_line": 957
          },
          {
            "month": "200504",
            "percent": -4.32,
            "r": -0.0432,
            "loss": 0.0432,
            "source_line": 958
          },
          {
            "month": "200505",
            "percent": 10.34,
            "r": 0.10339999999999999,
            "loss": -0.10339999999999999,
            "source_line": 959
          },
          {
            "month": "200506",
            "percent": -1.13,
            "r": -0.0113,
            "loss": 0.0113,
            "source_line": 960
          },
          {
            "month": "200507",
            "percent": 6.66,
            "r": 0.0666,
            "loss": -0.0666,
            "source_line": 961
          },
          {
            "month": "200508",
            "percent": -1.19,
            "r": -0.011899999999999999,
            "loss": 0.011899999999999999,
            "source_line": 962
          },
          {
            "month": "200509",
            "percent": 1.46,
            "r": 0.0146,
            "loss": -0.0146,
            "source_line": 963
          },
          {
            "month": "200510",
            "percent": -4.44,
            "r": -0.0444,
            "loss": 0.0444,
            "source_line": 964
          },
          {
            "month": "200511",
            "percent": 7.33,
            "r": 0.0733,
            "loss": -0.0733,
            "source_line": 965
          },
          {
            "month": "200512",
            "percent": -1.46,
            "r": -0.0146,
            "loss": 0.0146,
            "source_line": 966
          },
          {
            "month": "200601",
            "percent": 4.79,
            "r": 0.0479,
            "loss": -0.0479,
            "source_line": 967
          },
          {
            "month": "200602",
            "percent": 0.63,
            "r": 0.0063,
            "loss": -0.0063,
            "source_line": 968
          },
          {
            "month": "200603",
            "percent": 3.02,
            "r": 0.0302,
            "loss": -0.0302,
            "source_line": 969
          },
          {
            "month": "200604",
            "percent": -0.27,
            "r": -0.0027,
            "loss": 0.0027,
            "source_line": 970
          },
          {
            "month": "200605",
            "percent": -7.35,
            "r": -0.0735,
            "loss": 0.0735,
            "source_line": 971
          },
          {
            "month": "200606",
            "percent": -3.14,
            "r": -0.031400000000000004,
            "loss": 0.031400000000000004,
            "source_line": 972
          },
          {
            "month": "200607",
            "percent": -4.77,
            "r": -0.04769999999999999,
            "loss": 0.04769999999999999,
            "source_line": 973
          },
          {
            "month": "200608",
            "percent": 9.1,
            "r": 0.091,
            "loss": -0.091,
            "source_line": 974
          },
          {
            "month": "200609",
            "percent": 2.85,
            "r": 0.0285,
            "loss": -0.0285,
            "source_line": 975
          },
          {
            "month": "200610",
            "percent": 2.14,
            "r": 0.021400000000000002,
            "loss": -0.021400000000000002,
            "source_line": 976
          },
          {
            "month": "200611",
            "percent": 4.02,
            "r": 0.04019999999999999,
            "loss": -0.04019999999999999,
            "source_line": 977
          },
          {
            "month": "200612",
            "percent": -1.31,
            "r": -0.0131,
            "loss": 0.0131,
            "source_line": 978
          },
          {
            "month": "200701",
            "percent": 1.15,
            "r": 0.0115,
            "loss": -0.0115,
            "source_line": 979
          },
          {
            "month": "200702",
            "percent": -1.14,
            "r": -0.011399999999999999,
            "loss": 0.011399999999999999,
            "source_line": 980
          },
          {
            "month": "200703",
            "percent": 0.26,
            "r": 0.0026,
            "loss": -0.0026,
            "source_line": 981
          },
          {
            "month": "200704",
            "percent": 5.02,
            "r": 0.050199999999999995,
            "loss": -0.050199999999999995,
            "source_line": 982
          },
          {
            "month": "200705",
            "percent": 4.1,
            "r": 0.040999999999999995,
            "loss": -0.040999999999999995,
            "source_line": 983
          },
          {
            "month": "200706",
            "percent": 2.05,
            "r": 0.020499999999999997,
            "loss": -0.020499999999999997,
            "source_line": 984
          },
          {
            "month": "200707",
            "percent": -0.08,
            "r": -0.0008,
            "loss": 0.0008,
            "source_line": 985
          },
          {
            "month": "200708",
            "percent": 3.67,
            "r": 0.036699999999999997,
            "loss": -0.036699999999999997,
            "source_line": 986
          },
          {
            "month": "200709",
            "percent": 3.73,
            "r": 0.0373,
            "loss": -0.0373,
            "source_line": 987
          },
          {
            "month": "200710",
            "percent": 3.97,
            "r": 0.0397,
            "loss": -0.0397,
            "source_line": 988
          },
          {
            "month": "200711",
            "percent": -7.58,
            "r": -0.0758,
            "loss": 0.0758,
            "source_line": 989
          },
          {
            "month": "200712",
            "percent": 0.39,
            "r": 0.0039000000000000003,
            "loss": -0.0039000000000000003,
            "source_line": 990
          },
          {
            "month": "200801",
            "percent": -14.17,
            "r": -0.1417,
            "loss": 0.1417,
            "source_line": 991
          },
          {
            "month": "200802",
            "percent": -1.75,
            "r": -0.0175,
            "loss": 0.0175,
            "source_line": 992
          },
          {
            "month": "200803",
            "percent": 0.36,
            "r": 0.0036,
            "loss": -0.0036,
            "source_line": 993
          },
          {
            "month": "200804",
            "percent": 6.8,
            "r": 0.068,
            "loss": -0.068,
            "source_line": 994
          },
          {
            "month": "200805",
            "percent": 6.23,
            "r": 0.0623,
            "loss": -0.0623,
            "source_line": 995
          },
          {
            "month": "200806",
            "percent": -9.74,
            "r": -0.0974,
            "loss": 0.0974,
            "source_line": 996
          },
          {
            "month": "200807",
            "percent": 0.3,
            "r": 0.003,
            "loss": -0.003,
            "source_line": 997
          },
          {
            "month": "200808",
            "percent": 2.93,
            "r": 0.029300000000000003,
            "loss": -0.029300000000000003,
            "source_line": 998
          },
          {
            "month": "200809",
            "percent": -15.81,
            "r": -0.15810000000000002,
            "loss": 0.15810000000000002,
            "source_line": 999
          },
          {
            "month": "200810",
            "percent": -17.68,
            "r": -0.17679999999999998,
            "loss": 0.17679999999999998,
            "source_line": 1000
          },
          {
            "month": "200811",
            "percent": -11.63,
            "r": -0.11630000000000001,
            "loss": 0.11630000000000001,
            "source_line": 1001
          },
          {
            "month": "200812",
            "percent": 1.84,
            "r": 0.0184,
            "loss": -0.0184,
            "source_line": 1002
          },
          {
            "month": "200901",
            "percent": -3.08,
            "r": -0.0308,
            "loss": 0.0308,
            "source_line": 1003
          },
          {
            "month": "200902",
            "percent": -6.87,
            "r": -0.0687,
            "loss": 0.0687,
            "source_line": 1004
          },
          {
            "month": "200903",
            "percent": 13.08,
            "r": 0.1308,
            "loss": -0.1308,
            "source_line": 1005
          },
          {
            "month": "200904",
            "percent": 14.28,
            "r": 0.14279999999999998,
            "loss": -0.14279999999999998,
            "source_line": 1006
          },
          {
            "month": "200905",
            "percent": 2.18,
            "r": 0.0218,
            "loss": -0.0218,
            "source_line": 1007
          },
          {
            "month": "200906",
            "percent": 4.55,
            "r": 0.0455,
            "loss": -0.0455,
            "source_line": 1008
          },
          {
            "month": "200907",
            "percent": 10.36,
            "r": 0.1036,
            "loss": -0.1036,
            "source_line": 1009
          },
          {
            "month": "200908",
            "percent": 2.19,
            "r": 0.0219,
            "loss": -0.0219,
            "source_line": 1010
          },
          {
            "month": "200909",
            "percent": 5.61,
            "r": 0.056100000000000004,
            "loss": -0.056100000000000004,
            "source_line": 1011
          },
          {
            "month": "200910",
            "percent": -3.9,
            "r": -0.039,
            "loss": 0.039,
            "source_line": 1012
          },
          {
            "month": "200911",
            "percent": 4.34,
            "r": 0.0434,
            "loss": -0.0434,
            "source_line": 1013
          },
          {
            "month": "200912",
            "percent": 6.63,
            "r": 0.0663,
            "loss": -0.0663,
            "source_line": 1014
          },
          {
            "month": "201001",
            "percent": -8.05,
            "r": -0.0805,
            "loss": 0.0805,
            "source_line": 1015
          },
          {
            "month": "201002",
            "percent": 6.25,
            "r": 0.0625,
            "loss": -0.0625,
            "source_line": 1016
          },
          {
            "month": "201003",
            "percent": 8.19,
            "r": 0.0819,
            "loss": -0.0819,
            "source_line": 1017
          },
          {
            "month": "201004",
            "percent": 3.83,
            "r": 0.0383,
            "loss": -0.0383,
            "source_line": 1018
          },
          {
            "month": "201005",
            "percent": -7.24,
            "r": -0.0724,
            "loss": 0.0724,
            "source_line": 1019
          },
          {
            "month": "201006",
            "percent": -6.05,
            "r": -0.0605,
            "loss": 0.0605,
            "source_line": 1020
          },
          {
            "month": "201007",
            "percent": 6.45,
            "r": 0.0645,
            "loss": -0.0645,
            "source_line": 1021
          },
          {
            "month": "201008",
            "percent": -8.4,
            "r": -0.084,
            "loss": 0.084,
            "source_line": 1022
          },
          {
            "month": "201009",
            "percent": 13.79,
            "r": 0.1379,
            "loss": -0.1379,
            "source_line": 1023
          },
          {
            "month": "201010",
            "percent": 4.48,
            "r": 0.044800000000000006,
            "loss": -0.044800000000000006,
            "source_line": 1024
          },
          {
            "month": "201011",
            "percent": 1.03,
            "r": 0.0103,
            "loss": -0.0103,
            "source_line": 1025
          },
          {
            "month": "201012",
            "percent": 5.2,
            "r": 0.052000000000000005,
            "loss": -0.052000000000000005,
            "source_line": 1026
          },
          {
            "month": "201101",
            "percent": 4.85,
            "r": 0.048499999999999995,
            "loss": -0.048499999999999995,
            "source_line": 1027
          },
          {
            "month": "201102",
            "percent": 3.07,
            "r": 0.030699999999999998,
            "loss": -0.030699999999999998,
            "source_line": 1028
          },
          {
            "month": "201103",
            "percent": -2.5,
            "r": -0.025,
            "loss": 0.025,
            "source_line": 1029
          },
          {
            "month": "201104",
            "percent": 3.05,
            "r": 0.0305,
            "loss": -0.0305,
            "source_line": 1030
          },
          {
            "month": "201105",
            "percent": -1.28,
            "r": -0.0128,
            "loss": 0.0128,
            "source_line": 1031
          },
          {
            "month": "201106",
            "percent": -3.47,
            "r": -0.0347,
            "loss": 0.0347,
            "source_line": 1032
          },
          {
            "month": "201107",
            "percent": -1.57,
            "r": -0.015700000000000002,
            "loss": 0.015700000000000002,
            "source_line": 1033
          },
          {
            "month": "201108",
            "percent": -7.23,
            "r": -0.0723,
            "loss": 0.0723,
            "source_line": 1034
          },
          {
            "month": "201109",
            "percent": -5.34,
            "r": -0.053399999999999996,
            "loss": 0.053399999999999996,
            "source_line": 1035
          },
          {
            "month": "201110",
            "percent": 12.08,
            "r": 0.1208,
            "loss": -0.1208,
            "source_line": 1036
          },
          {
            "month": "201111",
            "percent": -1.99,
            "r": -0.0199,
            "loss": 0.0199,
            "source_line": 1037
          },
          {
            "month": "201112",
            "percent": -0.75,
            "r": -0.0075,
            "loss": 0.0075,
            "source_line": 1038
          },
          {
            "month": "201201",
            "percent": 10.66,
            "r": 0.1066,
            "loss": -0.1066,
            "source_line": 1039
          },
          {
            "month": "201202",
            "percent": 7.37,
            "r": 0.0737,
            "loss": -0.0737,
            "source_line": 1040
          },
          {
            "month": "201203",
            "percent": 5.34,
            "r": 0.053399999999999996,
            "loss": -0.053399999999999996,
            "source_line": 1041
          },
          {
            "month": "201204",
            "percent": -3.26,
            "r": -0.0326,
            "loss": 0.0326,
            "source_line": 1042
          },
          {
            "month": "201205",
            "percent": -8.08,
            "r": -0.0808,
            "loss": 0.0808,
            "source_line": 1043
          },
          {
            "month": "201206",
            "percent": 1.68,
            "r": 0.0168,
            "loss": -0.0168,
            "source_line": 1044
          },
          {
            "month": "201207",
            "percent": 0.71,
            "r": 0.0070999999999999995,
            "loss": -0.0070999999999999995,
            "source_line": 1045
          },
          {
            "month": "201208",
            "percent": 5.4,
            "r": 0.054000000000000006,
            "loss": -0.054000000000000006,
            "source_line": 1046
          },
          {
            "month": "201209",
            "percent": -0.28,
            "r": -0.0028000000000000004,
            "loss": 0.0028000000000000004,
            "source_line": 1047
          },
          {
            "month": "201210",
            "percent": -7.27,
            "r": -0.0727,
            "loss": 0.0727,
            "source_line": 1048
          },
          {
            "month": "201211",
            "percent": 1.68,
            "r": 0.0168,
            "loss": -0.0168,
            "source_line": 1049
          },
          {
            "month": "201212",
            "percent": -0.61,
            "r": -0.0060999999999999995,
            "loss": 0.0060999999999999995,
            "source_line": 1050
          },
          {
            "month": "201301",
            "percent": -0.87,
            "r": -0.0087,
            "loss": 0.0087,
            "source_line": 1051
          },
          {
            "month": "201302",
            "percent": 0.4,
            "r": 0.004,
            "loss": -0.004,
            "source_line": 1052
          },
          {
            "month": "201303",
            "percent": 3.01,
            "r": 0.0301,
            "loss": -0.0301,
            "source_line": 1053
          },
          {
            "month": "201304",
            "percent": -0.86,
            "r": -0.0086,
            "loss": 0.0086,
            "source_line": 1054
          },
          {
            "month": "201305",
            "percent": 5.4,
            "r": 0.054000000000000006,
            "loss": -0.054000000000000006,
            "source_line": 1055
          },
          {
            "month": "201306",
            "percent": -3.39,
            "r": -0.0339,
            "loss": 0.0339,
            "source_line": 1056
          },
          {
            "month": "201307",
            "percent": 7.12,
            "r": 0.0712,
            "loss": -0.0712,
            "source_line": 1057
          },
          {
            "month": "201308",
            "percent": -0.49,
            "r": -0.0049,
            "loss": 0.0049,
            "source_line": 1058
          },
          {
            "month": "201309",
            "percent": 2.67,
            "r": 0.026699999999999998,
            "loss": -0.026699999999999998,
            "source_line": 1059
          },
          {
            "month": "201310",
            "percent": 4.55,
            "r": 0.0455,
            "loss": -0.0455,
            "source_line": 1060
          },
          {
            "month": "201311",
            "percent": 3.6,
            "r": 0.036000000000000004,
            "loss": -0.036000000000000004,
            "source_line": 1061
          },
          {
            "month": "201312",
            "percent": 3.51,
            "r": 0.0351,
            "loss": -0.0351,
            "source_line": 1062
          },
          {
            "month": "201401",
            "percent": -2.79,
            "r": -0.0279,
            "loss": 0.0279,
            "source_line": 1063
          },
          {
            "month": "201402",
            "percent": 4.66,
            "r": 0.0466,
            "loss": -0.0466,
            "source_line": 1064
          },
          {
            "month": "201403",
            "percent": 1.57,
            "r": 0.015700000000000002,
            "loss": -0.015700000000000002,
            "source_line": 1065
          },
          {
            "month": "201404",
            "percent": 0.94,
            "r": 0.009399999999999999,
            "loss": -0.009399999999999999,
            "source_line": 1066
          },
          {
            "month": "201405",
            "percent": 4.43,
            "r": 0.0443,
            "loss": -0.0443,
            "source_line": 1067
          },
          {
            "month": "201406",
            "percent": 3.45,
            "r": 0.0345,
            "loss": -0.0345,
            "source_line": 1068
          },
          {
            "month": "201407",
            "percent": -0.46,
            "r": -0.0046,
            "loss": 0.0046,
            "source_line": 1069
          },
          {
            "month": "201408",
            "percent": 5.13,
            "r": 0.0513,
            "loss": -0.0513,
            "source_line": 1070
          },
          {
            "month": "201409",
            "percent": -1.77,
            "r": -0.0177,
            "loss": 0.0177,
            "source_line": 1071
          },
          {
            "month": "201410",
            "percent": 2.92,
            "r": 0.0292,
            "loss": -0.0292,
            "source_line": 1072
          },
          {
            "month": "201411",
            "percent": 6.47,
            "r": 0.0647,
            "loss": -0.0647,
            "source_line": 1073
          },
          {
            "month": "201412",
            "percent": -1.64,
            "r": -0.016399999999999998,
            "loss": 0.016399999999999998,
            "source_line": 1074
          },
          {
            "month": "201501",
            "percent": -2.26,
            "r": -0.0226,
            "loss": 0.0226,
            "source_line": 1075
          },
          {
            "month": "201502",
            "percent": 8.43,
            "r": 0.0843,
            "loss": -0.0843,
            "source_line": 1076
          },
          {
            "month": "201503",
            "percent": -3.08,
            "r": -0.0308,
            "loss": 0.0308,
            "source_line": 1077
          },
          {
            "month": "201504",
            "percent": -0.06,
            "r": -0.0006,
            "loss": 0.0006,
            "source_line": 1078
          },
          {
            "month": "201505",
            "percent": 4.09,
            "r": 0.0409,
            "loss": -0.0409,
            "source_line": 1079
          },
          {
            "month": "201506",
            "percent": -4.87,
            "r": -0.0487,
            "loss": 0.0487,
            "source_line": 1080
          },
          {
            "month": "201507",
            "percent": -0.81,
            "r": -0.008100000000000001,
            "loss": 0.008100000000000001,
            "source_line": 1081
          },
          {
            "month": "201508",
            "percent": -6.31,
            "r": -0.06309999999999999,
            "loss": 0.06309999999999999,
            "source_line": 1082
          },
          {
            "month": "201509",
            "percent": -1.71,
            "r": -0.0171,
            "loss": 0.0171,
            "source_line": 1083
          },
          {
            "month": "201510",
            "percent": 8.54,
            "r": 0.08539999999999999,
            "loss": -0.08539999999999999,
            "source_line": 1084
          },
          {
            "month": "201511",
            "percent": 0.31,
            "r": 0.0031,
            "loss": -0.0031,
            "source_line": 1085
          },
          {
            "month": "201512",
            "percent": -4.57,
            "r": -0.045700000000000005,
            "loss": 0.045700000000000005,
            "source_line": 1086
          },
          {
            "month": "201601",
            "percent": -7.72,
            "r": -0.07719999999999999,
            "loss": 0.07719999999999999,
            "source_line": 1087
          },
          {
            "month": "201602",
            "percent": 1.45,
            "r": 0.014499999999999999,
            "loss": -0.014499999999999999,
            "source_line": 1088
          },
          {
            "month": "201603",
            "percent": 8.83,
            "r": 0.0883,
            "loss": -0.0883,
            "source_line": 1089
          },
          {
            "month": "201604",
            "percent": -5.42,
            "r": -0.0542,
            "loss": 0.0542,
            "source_line": 1090
          },
          {
            "month": "201605",
            "percent": 5.53,
            "r": 0.0553,
            "loss": -0.0553,
            "source_line": 1091
          },
          {
            "month": "201606",
            "percent": -1.37,
            "r": -0.0137,
            "loss": 0.0137,
            "source_line": 1092
          },
          {
            "month": "201607",
            "percent": 7.98,
            "r": 0.07980000000000001,
            "loss": -0.07980000000000001,
            "source_line": 1093
          },
          {
            "month": "201608",
            "percent": 2.33,
            "r": 0.0233,
            "loss": -0.0233,
            "source_line": 1094
          },
          {
            "month": "201609",
            "percent": 3.99,
            "r": 0.039900000000000005,
            "loss": -0.039900000000000005,
            "source_line": 1095
          },
          {
            "month": "201610",
            "percent": -2.24,
            "r": -0.022400000000000003,
            "loss": 0.022400000000000003,
            "source_line": 1096
          },
          {
            "month": "201611",
            "percent": 2.41,
            "r": 0.0241,
            "loss": -0.0241,
            "source_line": 1097
          },
          {
            "month": "201612",
            "percent": 2.07,
            "r": 0.0207,
            "loss": -0.0207,
            "source_line": 1098
          },
          {
            "month": "201701",
            "percent": 3.28,
            "r": 0.032799999999999996,
            "loss": -0.032799999999999996,
            "source_line": 1099
          },
          {
            "month": "201702",
            "percent": 6.7,
            "r": 0.067,
            "loss": -0.067,
            "source_line": 1100
          },
          {
            "month": "201703",
            "percent": 2.37,
            "r": 0.023700000000000002,
            "loss": -0.023700000000000002,
            "source_line": 1101
          },
          {
            "month": "201704",
            "percent": 0.85,
            "r": 0.0085,
            "loss": -0.0085,
            "source_line": 1102
          },
          {
            "month": "201705",
            "percent": 4.53,
            "r": 0.0453,
            "loss": -0.0453,
            "source_line": 1103
          },
          {
            "month": "201706",
            "percent": -3.37,
            "r": -0.0337,
            "loss": 0.0337,
            "source_line": 1104
          },
          {
            "month": "201707",
            "percent": 3.05,
            "r": 0.0305,
            "loss": -0.0305,
            "source_line": 1105
          },
          {
            "month": "201708",
            "percent": 4.92,
            "r": 0.0492,
            "loss": -0.0492,
            "source_line": 1106
          },
          {
            "month": "201709",
            "percent": 1.07,
            "r": 0.010700000000000001,
            "loss": -0.010700000000000001,
            "source_line": 1107
          },
          {
            "month": "201710",
            "percent": 7.12,
            "r": 0.0712,
            "loss": -0.0712,
            "source_line": 1108
          },
          {
            "month": "201711",
            "percent": 2.52,
            "r": 0.0252,
            "loss": -0.0252,
            "source_line": 1109
          },
          {
            "month": "201712",
            "percent": -0.83,
            "r": -0.0083,
            "loss": 0.0083,
            "source_line": 1110
          },
          {
            "month": "201801",
            "percent": 5.51,
            "r": 0.055099999999999996,
            "loss": -0.055099999999999996,
            "source_line": 1111
          },
          {
            "month": "201802",
            "percent": 1.98,
            "r": 0.019799999999999998,
            "loss": -0.019799999999999998,
            "source_line": 1112
          },
          {
            "month": "201803",
            "percent": -2.71,
            "r": -0.0271,
            "loss": 0.0271,
            "source_line": 1113
          },
          {
            "month": "201804",
            "percent": -2.05,
            "r": -0.020499999999999997,
            "loss": 0.020499999999999997,
            "source_line": 1114
          },
          {
            "month": "201805",
            "percent": 7.79,
            "r": 0.0779,
            "loss": -0.0779,
            "source_line": 1115
          },
          {
            "month": "201806",
            "percent": -2.01,
            "r": -0.020099999999999996,
            "loss": 0.020099999999999996,
            "source_line": 1116
          },
          {
            "month": "201807",
            "percent": 2.76,
            "r": 0.0276,
            "loss": -0.0276,
            "source_line": 1117
          },
          {
            "month": "201808",
            "percent": 9.59,
            "r": 0.0959,
            "loss": -0.0959,
            "source_line": 1118
          },
          {
            "month": "201809",
            "percent": -0.18,
            "r": -0.0018,
            "loss": 0.0018,
            "source_line": 1119
          },
          {
            "month": "201810",
            "percent": -8.18,
            "r": -0.0818,
            "loss": 0.0818,
            "source_line": 1120
          },
          {
            "month": "201811",
            "percent": -4.7,
            "r": -0.047,
            "loss": 0.047,
            "source_line": 1121
          },
          {
            "month": "201812",
            "percent": -9.01,
            "r": -0.0901,
            "loss": 0.0901,
            "source_line": 1122
          },
          {
            "month": "201901",
            "percent": 7.46,
            "r": 0.0746,
            "loss": -0.0746,
            "source_line": 1123
          },
          {
            "month": "201902",
            "percent": 7.38,
            "r": 0.0738,
            "loss": -0.0738,
            "source_line": 1124
          },
          {
            "month": "201903",
            "percent": 4.35,
            "r": 0.0435,
            "loss": -0.0435,
            "source_line": 1125
          },
          {
            "month": "201904",
            "percent": 5.3,
            "r": 0.053,
            "loss": -0.053,
            "source_line": 1126
          },
          {
            "month": "201905",
            "percent": -11.62,
            "r": -0.1162,
            "loss": 0.1162,
            "source_line": 1127
          },
          {
            "month": "201906",
            "percent": 11.16,
            "r": 0.1116,
            "loss": -0.1116,
            "source_line": 1128
          },
          {
            "month": "201907",
            "percent": 3.26,
            "r": 0.0326,
            "loss": -0.0326,
            "source_line": 1129
          },
          {
            "month": "201908",
            "percent": -3.11,
            "r": -0.0311,
            "loss": 0.0311,
            "source_line": 1130
          },
          {
            "month": "201909",
            "percent": 4.23,
            "r": 0.042300000000000004,
            "loss": -0.042300000000000004,
            "source_line": 1131
          },
          {
            "month": "201910",
            "percent": 5.09,
            "r": 0.0509,
            "loss": -0.0509,
            "source_line": 1132
          },
          {
            "month": "201911",
            "percent": 5.02,
            "r": 0.050199999999999995,
            "loss": -0.050199999999999995,
            "source_line": 1133
          },
          {
            "month": "201912",
            "percent": 6.32,
            "r": 0.0632,
            "loss": -0.0632,
            "source_line": 1134
          },
          {
            "month": "202001",
            "percent": 0.97,
            "r": 0.0097,
            "loss": -0.0097,
            "source_line": 1135
          },
          {
            "month": "202002",
            "percent": -9.02,
            "r": -0.0902,
            "loss": 0.0902,
            "source_line": 1136
          },
          {
            "month": "202003",
            "percent": -8.65,
            "r": -0.08650000000000001,
            "loss": 0.08650000000000001,
            "source_line": 1137
          },
          {
            "month": "202004",
            "percent": 13.97,
            "r": 0.13970000000000002,
            "loss": -0.13970000000000002,
            "source_line": 1138
          },
          {
            "month": "202005",
            "percent": 8.02,
            "r": 0.0802,
            "loss": -0.0802,
            "source_line": 1139
          },
          {
            "month": "202006",
            "percent": 6.63,
            "r": 0.0663,
            "loss": -0.0663,
            "source_line": 1140
          },
          {
            "month": "202007",
            "percent": 9.52,
            "r": 0.09519999999999999,
            "loss": -0.09519999999999999,
            "source_line": 1141
          },
          {
            "month": "202008",
            "percent": 11.76,
            "r": 0.1176,
            "loss": -0.1176,
            "source_line": 1142
          },
          {
            "month": "202009",
            "percent": -5.14,
            "r": -0.051399999999999994,
            "loss": 0.051399999999999994,
            "source_line": 1143
          },
          {
            "month": "202010",
            "percent": -3.18,
            "r": -0.0318,
            "loss": 0.0318,
            "source_line": 1144
          },
          {
            "month": "202011",
            "percent": 11.73,
            "r": 0.1173,
            "loss": -0.1173,
            "source_line": 1145
          },
          {
            "month": "202012",
            "percent": 7.21,
            "r": 0.0721,
            "loss": -0.0721,
            "source_line": 1146
          },
          {
            "month": "202101",
            "percent": 1.26,
            "r": 0.0126,
            "loss": -0.0126,
            "source_line": 1147
          },
          {
            "month": "202102",
            "percent": -1.9,
            "r": -0.019,
            "loss": 0.019,
            "source_line": 1148
          },
          {
            "month": "202103",
            "percent": 1.69,
            "r": 0.0169,
            "loss": -0.0169,
            "source_line": 1149
          },
          {
            "month": "202104",
            "percent": 4.07,
            "r": 0.0407,
            "loss": -0.0407,
            "source_line": 1150
          },
          {
            "month": "202105",
            "percent": -0.76,
            "r": -0.0076,
            "loss": 0.0076,
            "source_line": 1151
          },
          {
            "month": "202106",
            "percent": 7.42,
            "r": 0.0742,
            "loss": -0.0742,
            "source_line": 1152
          },
          {
            "month": "202107",
            "percent": 3.59,
            "r": 0.0359,
            "loss": -0.0359,
            "source_line": 1153
          },
          {
            "month": "202108",
            "percent": 4.03,
            "r": 0.0403,
            "loss": -0.0403,
            "source_line": 1154
          },
          {
            "month": "202109",
            "percent": -5.82,
            "r": -0.0582,
            "loss": 0.0582,
            "source_line": 1155
          },
          {
            "month": "202110",
            "percent": 7.15,
            "r": 0.07150000000000001,
            "loss": -0.07150000000000001,
            "source_line": 1156
          },
          {
            "month": "202111",
            "percent": 8.76,
            "r": 0.0876,
            "loss": -0.0876,
            "source_line": 1157
          },
          {
            "month": "202112",
            "percent": 4.38,
            "r": 0.0438,
            "loss": -0.0438,
            "source_line": 1158
          },
          {
            "month": "202201",
            "percent": -7.72,
            "r": -0.07719999999999999,
            "loss": 0.07719999999999999,
            "source_line": 1159
          },
          {
            "month": "202202",
            "percent": -2.66,
            "r": -0.026600000000000002,
            "loss": 0.026600000000000002,
            "source_line": 1160
          },
          {
            "month": "202203",
            "percent": 4.35,
            "r": 0.0435,
            "loss": -0.0435,
            "source_line": 1161
          },
          {
            "month": "202204",
            "percent": -12.41,
            "r": -0.1241,
            "loss": 0.1241,
            "source_line": 1162
          },
          {
            "month": "202205",
            "percent": -0.86,
            "r": -0.0086,
            "loss": 0.0086,
            "source_line": 1163
          },
          {
            "month": "202206",
            "percent": -10.18,
            "r": -0.1018,
            "loss": 0.1018,
            "source_line": 1164
          },
          {
            "month": "202207",
            "percent": 15.79,
            "r": 0.15789999999999998,
            "loss": -0.15789999999999998,
            "source_line": 1165
          },
          {
            "month": "202208",
            "percent": -5.86,
            "r": -0.058600000000000006,
            "loss": 0.058600000000000006,
            "source_line": 1166
          },
          {
            "month": "202209",
            "percent": -11.67,
            "r": -0.1167,
            "loss": 0.1167,
            "source_line": 1167
          },
          {
            "month": "202210",
            "percent": 8.83,
            "r": 0.0883,
            "loss": -0.0883,
            "source_line": 1168
          },
          {
            "month": "202211",
            "percent": 5.19,
            "r": 0.0519,
            "loss": -0.0519,
            "source_line": 1169
          },
          {
            "month": "202212",
            "percent": -9.11,
            "r": -0.0911,
            "loss": 0.0911,
            "source_line": 1170
          },
          {
            "month": "202301",
            "percent": 9.85,
            "r": 0.09849999999999999,
            "loss": -0.09849999999999999,
            "source_line": 1171
          },
          {
            "month": "202302",
            "percent": 1.36,
            "r": 0.013600000000000001,
            "loss": -0.013600000000000001,
            "source_line": 1172
          },
          {
            "month": "202303",
            "percent": 9.85,
            "r": 0.09849999999999999,
            "loss": -0.09849999999999999,
            "source_line": 1173
          },
          {
            "month": "202304",
            "percent": -1.83,
            "r": -0.0183,
            "loss": 0.0183,
            "source_line": 1174
          },
          {
            "month": "202305",
            "percent": 8.26,
            "r": 0.08259999999999999,
            "loss": -0.08259999999999999,
            "source_line": 1175
          },
          {
            "month": "202306",
            "percent": 8.02,
            "r": 0.0802,
            "loss": -0.0802,
            "source_line": 1176
          },
          {
            "month": "202307",
            "percent": 3.49,
            "r": 0.0349,
            "loss": -0.0349,
            "source_line": 1177
          },
          {
            "month": "202308",
            "percent": -1.52,
            "r": -0.0152,
            "loss": 0.0152,
            "source_line": 1178
          },
          {
            "month": "202309",
            "percent": -7.91,
            "r": -0.0791,
            "loss": 0.0791,
            "source_line": 1179
          },
          {
            "month": "202310",
            "percent": -3.88,
            "r": -0.0388,
            "loss": 0.0388,
            "source_line": 1180
          },
          {
            "month": "202311",
            "percent": 12.13,
            "r": 0.1213,
            "loss": -0.1213,
            "source_line": 1181
          },
          {
            "month": "202312",
            "percent": 6.29,
            "r": 0.0629,
            "loss": -0.0629,
            "source_line": 1182
          },
          {
            "month": "202401",
            "percent": 2.34,
            "r": 0.023399999999999997,
            "loss": -0.023399999999999997,
            "source_line": 1183
          },
          {
            "month": "202402",
            "percent": 7.98,
            "r": 0.07980000000000001,
            "loss": -0.07980000000000001,
            "source_line": 1184
          },
          {
            "month": "202403",
            "percent": 2.95,
            "r": 0.029500000000000002,
            "loss": -0.029500000000000002,
            "source_line": 1185
          },
          {
            "month": "202404",
            "percent": -3.53,
            "r": -0.0353,
            "loss": 0.0353,
            "source_line": 1186
          },
          {
            "month": "202405",
            "percent": 13.4,
            "r": 0.134,
            "loss": -0.134,
            "source_line": 1187
          },
          {
            "month": "202406",
            "percent": 7.77,
            "r": 0.07769999999999999,
            "loss": -0.07769999999999999,
            "source_line": 1188
          },
          {
            "month": "202407",
            "percent": 0.33,
            "r": 0.0033,
            "loss": -0.0033,
            "source_line": 1189
          },
          {
            "month": "202408",
            "percent": 1.46,
            "r": 0.0146,
            "loss": -0.0146,
            "source_line": 1190
          },
          {
            "month": "202409",
            "percent": 2.24,
            "r": 0.022400000000000003,
            "loss": -0.022400000000000003,
            "source_line": 1191
          },
          {
            "month": "202410",
            "percent": 0.0,
            "r": 0.0,
            "loss": -0.0,
            "source_line": 1192
          },
          {
            "month": "202411",
            "percent": 3.5,
            "r": 0.035,
            "loss": -0.035,
            "source_line": 1193
          },
          {
            "month": "202412",
            "percent": 2.5,
            "r": 0.025,
            "loss": -0.025,
            "source_line": 1194
          },
          {
            "month": "202501",
            "percent": -4.44,
            "r": -0.0444,
            "loss": 0.0444,
            "source_line": 1195
          },
          {
            "month": "202502",
            "percent": -0.74,
            "r": -0.0074,
            "loss": 0.0074,
            "source_line": 1196
          },
          {
            "month": "202503",
            "percent": -9.82,
            "r": -0.09820000000000001,
            "loss": 0.09820000000000001,
            "source_line": 1197
          },
          {
            "month": "202504",
            "percent": -1.17,
            "r": -0.011699999999999999,
            "loss": 0.011699999999999999,
            "source_line": 1198
          },
          {
            "month": "202505",
            "percent": 9.29,
            "r": 0.0929,
            "loss": -0.0929,
            "source_line": 1199
          },
          {
            "month": "202506",
            "percent": 10.8,
            "r": 0.10800000000000001,
            "loss": -0.10800000000000001,
            "source_line": 1200
          },
          {
            "month": "202507",
            "percent": 6.13,
            "r": 0.0613,
            "loss": -0.0613,
            "source_line": 1201
          },
          {
            "month": "202508",
            "percent": 3.4,
            "r": 0.034,
            "loss": -0.034,
            "source_line": 1202
          },
          {
            "month": "202509",
            "percent": 8.15,
            "r": 0.0815,
            "loss": -0.0815,
            "source_line": 1203
          },
          {
            "month": "202510",
            "percent": 9.17,
            "r": 0.0917,
            "loss": -0.0917,
            "source_line": 1204
          },
          {
            "month": "202511",
            "percent": -2.88,
            "r": -0.0288,
            "loss": 0.0288,
            "source_line": 1205
          },
          {
            "month": "202512",
            "percent": -0.66,
            "r": -0.0066,
            "loss": 0.0066,
            "source_line": 1206
          }
        ],
        "ar_initial": 1.4678084774843276,
        "ar_values": [
          0.24729236767568918,
          -0.3395520151562399,
          -0.8978418780885042,
          -1.3766551891090015,
          0.9463806979489443,
          0.025552784136162354,
          -0.9240498655813658,
          -1.1238679711245143,
          -0.07853464259677878,
          1.1053496333499915,
          0.7145140389242101,
          0.287086263827503,
          0.47287598744803755,
          -0.2735314634117238,
          0.9261294111355965,
          1.68632341600118,
          2.080338704898275,
          1.1259772172033011,
          0.000882654417010631,
          0.17851756396085766,
          0.7633769100793537,
          1.106619464795716,
          0.8090302564399173,
          -0.12682873967550223,
          -0.06461579602218817,
          0.20471603610279693,
          1.7148437272964518,
          1.1203812506751354,
          0.5489533533291326,
          -0.16352962190107145,
          -1.0958347012116796,
          -1.715419540771383,
          -0.07839477098306935,
          -0.9407261929939468,
          -0.8359497650204326,
          0.5196506489629688,
          -0.41695320119723134,
          0.6582394997777312,
          1.104277416882406,
          1.9236452609196473,
          1.5369156490006015,
          0.44041201782284556,
          0.71360856269822,
          1.6139812468981574,
          0.5093168437079882,
          1.9886942910484162,
          0.5208961955250253,
          -0.7190032808559146,
          -1.2243003603885656,
          -0.47249454652992384,
          -1.0592213915620126,
          -0.8407816247257757,
          -1.5556343455882204,
          -1.5073413346402442,
          -0.5057441094603383,
          -1.8185780541820669,
          -1.8079057496606319,
          -0.37984289831030227,
          -0.2750652297332207,
          0.06858759825061797,
          -0.35661924734479905,
          -1.766650006369224,
          -1.4769552813682711,
          -0.184905219525221,
          -0.10095343021948577,
          -0.9699214232134097,
          -2.25173739249977,
          -1.8370804030765484,
          -3.0592749535031136,
          -2.8720034409295705,
          -0.7153410416977724,
          -0.7893872620445852,
          0.4618526341354836,
          0.6324005741838452,
          0.23358232549568728,
          -0.07015975546730932,
          0.099966703570398,
          0.4836468223838239,
          0.44059646647858114,
          1.0057228055431806,
          -1.0143076751008895,
          -1.9404100795339778,
          -2.0361355218229873,
          -1.0251773051852937,
          0.6043335575779746,
          1.6388715455147969,
          0.22008055987412478,
          0.05258466443088054,
          -0.1413553416436702,
          0.12377493301613356,
          -0.7442187622751439,
          -0.1850110492753011,
          -1.5103318436479396,
          -2.265148954878473,
          -1.9500845825304636,
          -2.001126778241684,
          -0.9712024276141664,
          -1.647615326062371,
          0.22081815142653638,
          0.8216648230063887,
          -0.2614076490985134,
          0.49476676522017193,
          -1.5522782897689773,
          -1.1312807013614736,
          -2.6607994348431334,
          -1.5110353802081775,
          -1.386961240705161,
          -0.2016247984585816,
          -1.3065077516585604,
          -0.5659156101818886,
          0.23388583349066622,
          0.5316213961266583,
          -0.02204070471225439,
          0.14334906685702345,
          0.188882034498342,
          0.22013972855502129,
          1.588104468592142,
          0.7066768536157895,
          -0.4658713179930762,
          -0.46283443252824646,
          0.33809442037884474,
          -0.39269906292677614,
          -1.2471904592926575,
          -0.036215588029540946,
          -0.46738908627613873,
          -0.48054619229808393,
          -0.5695640866644195,
          -0.582252878664366,
          -0.0826115469000332,
          0.5119484023457026,
          0.9951050430009296,
          -0.1705844868878027,
          0.020990020288215394,
          0.7151565315040811,
          -0.4237136492980895,
          -1.8125396561024216,
          -1.2297145031325254,
          -1.0455851501644409,
          -1.9796670376312735,
          -2.1765345323878105,
          -0.6478506903487806,
          -1.2076573757258027,
          0.05106989987951549,
          0.2918459550378708,
          -0.8266611140146634,
          -0.9792911945700764,
          0.6650134861352835,
          -0.24604000735631837,
          -0.9164177102836155,
          -1.6303385063641138,
          -2.087696741300862,
          -1.7036509969639257,
          -0.9010777620624153,
          -0.7489904606646715,
          -1.196268143232699,
          -1.6034595373700258,
          -1.1334450111065757,
          -0.8712678843447713,
          -1.3212161923059602,
          -0.38951431509413703,
          0.7765530867276557,
          -0.3788947624777417,
          1.9947979650326522,
          0.3913546640542451,
          -1.50368992064196,
          -1.0047177256443365,
          -2.0309243230339313,
          -0.29798314122715963,
          0.03609201057232711,
          0.5248786922217739,
          0.8675715313443966,
          0.3758870817011428,
          -0.5881337352640444,
          -0.21386832677275486,
          1.1229473304705424,
          0.27141640674223055,
          0.48995067755110155,
          1.0132013251840752,
          1.1211625868460904,
          1.6512192502590715,
          0.6481052387129773,
          -0.6167350405009836,
          -0.38412410210141307,
          0.016012368414951378,
          0.04963576623632737,
          -0.8398464350106499,
          -1.2167797010267567,
          0.9563261854766261,
          0.29679268890323346,
          1.17010045953775,
          0.6951996558854316,
          1.0008218519573204,
          0.4513487913706354,
          -0.5505777987964156,
          0.9528507881025365,
          0.707687328449,
          0.9699386454842849,
          0.26153126818349637,
          -0.6821239070431576,
          1.6623980485940641,
          1.3633513326024604,
          -0.3936834419947701,
          -0.7691321630802732,
          -0.20991475633692885,
          0.09116517480257585,
          0.33557923473200824,
          -0.010279613405664578,
          0.4580839044276248,
          -0.2555873859657411,
          -0.49321107953715826,
          -1.4526948587963893,
          -0.6040072107105283,
          1.310064145287785,
          0.8256025520452865,
          1.0250484479273205,
          0.4970189772308432,
          0.4195821383612386,
          -0.26791677085735743,
          0.6255825088272806,
          1.4962851469206533,
          0.6308608490628236,
          0.8921555720264889,
          0.3815147832725908,
          0.37650697073698125,
          0.27304369654895283,
          -0.06899979945352064,
          -1.1928025288942967,
          -0.6816993940003659,
          -0.5101016412047087,
          -0.3391922378701343,
          -1.0609231184642014,
          -1.6625887312324672,
          -0.5664759366977248,
          -0.36238322370516207,
          -0.48508880899379003,
          0.16926048308148167,
          -1.5408088447203943,
          -0.693103104166346,
          -0.1254789588036574,
          0.8485691428207836,
          0.7062660340118085,
          0.5187367402913818,
          1.5336654955383127,
          0.9673888660818409,
          -0.31408631715399626,
          0.8029172709404927,
          -0.21085965580768162,
          -0.26968343055086214,
          -0.07319859710081855,
          0.3171570859690745,
          0.38673836276227047,
          -0.5787613657547549,
          0.6661056273512371,
          -0.5458370033164519,
          0.23117101253059946,
          -1.0360043681453894,
          -0.5624639536167422,
          -0.8826574724291854,
          0.07586975935699536,
          0.6237549120904492,
          -0.545966899950597,
          -0.25025855636919003,
          -0.44631668721810813,
          -0.09269366498539944,
          0.5622951822627746,
          0.8266035285836226,
          0.6459845000206704,
          2.407153951413701,
          1.6097871506014139,
          0.4396099741738101,
          0.46138705868979385,
          0.8631491719406967,
          -0.07111923657365893,
          -0.2710054833594304,
          -1.4941978611580606,
          -0.11866392184436325,
          0.2683625599080055,
          -0.20939111306012045,
          -1.6173736646721737,
          -0.4827413897017029,
          0.8355065763321778,
          0.65567050123268,
          0.6559178465756539,
          0.9136943409889056,
          1.3447742558180424,
          0.2735931607337674,
          0.8043892635631636,
          -1.1374363342111338,
          -0.28683033483420023,
          -0.35162959641001806,
          -0.4725558724511243,
          1.3541634132232245,
          1.3562140971549481,
          0.2155364680185976,
          0.12228477284781115,
          1.1629121850821695,
          0.38097192273357144,
          -0.4724273412374144,
          0.18069615243400228,
          0.3472786175773215,
          1.2720415967184486,
          -0.33455883039350753,
          1.0629114914842208,
          1.10071952208102,
          0.4440183032422035,
          1.8651753413935772,
          2.7165863468611127,
          0.9898053767684747,
          0.9468552096014784,
          1.9084086037050105,
          1.8146367519328197,
          0.5491116978253633,
          -1.275310257564434,
          -0.16337681772232926,
          -0.6710583985102296,
          -0.6117588838416184,
          -0.6951593144633863,
          -1.9877158550779641,
          -1.3577164417661256,
          -0.20513161524136936,
          0.08856593029656643,
          1.4035454814655917,
          -0.10269074668880163,
          -0.36682953627336295,
          -1.4227647109850148,
          0.09987642269926678,
          1.1499407660522543,
          1.4188750444422564,
          0.43990632967384125,
          0.19282215604856004,
          -1.225491573417922,
          -0.7388942179237046,
          -0.16938453865905984,
          0.3127972778276633,
          0.6113529596184348,
          1.529227453258823,
          -0.38998610264072664,
          -1.0530061406767348,
          0.4173429237244983,
          0.9379214826035338,
          0.3136719996609859,
          1.085023837752695,
          0.04737742981973114,
          0.304859152622271,
          -1.2652120603947064,
          0.5175629349613393,
          0.6602204746097096,
          1.4198172777216942,
          0.42683180003965876,
          0.9019114893940287,
          0.3818076373241359,
          -0.844991582529192,
          -0.7110927927134456,
          0.21490398499531155,
          -0.06770485489986378,
          -0.3961259675051881,
          -0.983905393593864,
          -1.5284204227634746,
          -0.27842880605573517,
          0.5939937879563909,
          1.4785711333872538,
          0.37052336463098157,
          -0.03392529133212105,
          0.31169538492478555,
          -0.8229734647119996,
          0.5648260418603298,
          0.5258481676847166,
          2.9538383230654226,
          2.4878123715424287,
          -0.32407157638508277,
          -1.328694708674314,
          -1.4056762239012732,
          -1.3412652265747018,
          -1.224310119373479,
          1.5090108176339965,
          -0.36029625434408574,
          -0.49402789064078084,
          -0.7699712153635092,
          -0.7568042771344872,
          0.4431305792556511,
          -0.14124774438335158,
          -0.2467278642473224,
          0.15840338896211562,
          0.41232408336945,
          0.09362822646921126,
          -0.7513370329891919,
          -1.117077601584361,
          -0.6568689262032886,
          0.8590992195788418,
          -0.1839745103145235,
          0.3012412638718728,
          -0.6149651394073016,
          -0.1558598548166698,
          0.20802940381561202,
          0.05567293734558866,
          -1.648086003411409,
          -1.2931328527905093,
          0.20119802767332562,
          -0.5034243181169704,
          0.0375455768178648,
          -0.3305993011473592,
          -0.38387274085675827,
          0.13753895897722485,
          1.277192863868665,
          1.4834518371264056,
          0.6399206325171067,
          0.5734258443470708,
          -0.25276518037492324,
          0.5525523377937074,
          0.6485478947412062,
          0.16584333880260813,
          -0.42604204926565536,
          -0.3594393985481775,
          0.584974836786534,
          0.6923812547776895,
          0.807566598191416,
          -1.4484267323786373,
          -0.8069181794547005,
          -0.6623715596951014,
          -0.25220239092241836,
          -1.728007948963533,
          -0.9911917617459745,
          -0.659956691620897,
          -0.16692487536424752,
          0.2246078399096343,
          1.2404499005949319,
          0.5175992616305352,
          -0.21101002052592593,
          1.1181257094296937,
          -0.23608727087917303,
          0.2306544473242039,
          1.4754075323587466
        ],
        "toy": {
          "identity": "无量纲教学构造，不是市场观测",
          "values": [
            0,
            0,
            0,
            0,
            0,
            6
          ],
          "block_length": 3,
          "original_mean": 1,
          "exact_conditional_center": 0.5,
          "exact_conditional_variance": 0.375
        }
      },
      "outputs": {
        "experiment_id": "EXP-BOOT-01",
        "config": {
          "experiment_id": "EXP-BOOT-01",
          "repetitions": 5000,
          "iid_seed": 1901,
          "moving_block_seed": 1902,
          "block_lengths": [
            3,
            6,
            12
          ],
          "default_block_length": 6,
          "percentile_levels": [
            0.025,
            0.975
          ],
          "percentile_method": "linear",
          "se_ddof": 1,
          "index_base": 0,
          "moving_block_algorithm": "均匀有放回抽起点0..n-l；每块保留连续l项，拼接ceil(n/l)块后截取前n项；不循环绕回",
          "seed_reset": "每个设计重新初始化指定种子；真实收益与AR(1)复用同一组抽样索引；不同块长分别重置1902",
          "ar1": {
            "seed": 1910,
            "rho": 0.6,
            "innovation_variance": 0.64,
            "n": 432,
            "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
            "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
            "unit": "无量纲的教学模拟变量"
          }
        },
        "AR1": {
          "config": {
            "seed": 1910,
            "rho": 0.6,
            "innovation_variance": 0.64,
            "n": 432,
            "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
            "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
            "unit": "无量纲的教学模拟变量"
          },
          "X0": 1.4678084774843276,
          "sample_mean": -0.05561958489307564,
          "sample_sd": 0.9744542646704172,
          "model_mean": 0.0,
          "model_marginal_variance": 1.0,
          "exact_finite_n_sample_mean_variance": 0.009219071502057611,
          "exact_finite_n_sample_mean_SE": 0.096015996073871,
          "iid_counterfactual_SE_for_variance_1": 0.048112522432468816
        },
        "series": {
          "French_BusEq": {
            "unit": "monthly decimal return",
            "designs": [
              {
                "method": "iid",
                "block_length": null,
                "B": 5000,
                "seed": 1901,
                "n": 432,
                "original_sample_mean": 0.013886342592592592,
                "bootstrap_mean_of_means": 0.013898207638888889,
                "bootstrap_SE": 0.0035285634950972433,
                "percentile_95_interval": [
                  0.00697949074074074,
                  0.020692962962962958
                ],
                "exact_conditional_resampling_center": 0.013886342592592592,
                "exact_conditional_resampling_SE": 0.0035025083553881352,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.0074389943050459095,
                "resampling_center_minus_original_mean": 0.0
              },
              {
                "method": "moving_block",
                "block_length": 3,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": 0.013886342592592592,
                "bootstrap_mean_of_means": 0.013984987407407407,
                "bootstrap_SE": 0.003565264010786091,
                "percentile_95_interval": [
                  0.006828124999999999,
                  0.02074227430555555
                ],
                "exact_conditional_resampling_center": 0.013970697674418607,
                "exact_conditional_resampling_SE": 0.003548406359510234,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.004750766842325227,
                "resampling_center_minus_original_mean": 8.435508182601421e-05
              },
              {
                "method": "moving_block",
                "block_length": 6,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": 0.013886342592592592,
                "bootstrap_mean_of_means": 0.01387384101851852,
                "bootstrap_SE": 0.0036986457176410798,
                "percentile_95_interval": [
                  0.006649438657407408,
                  0.02090615162037036
                ],
                "exact_conditional_resampling_center": 0.013803708040593285,
                "exact_conditional_resampling_SE": 0.0036113240893080175,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.024179947900991206,
                "resampling_center_minus_original_mean": -8.263455199930721e-05
              },
              {
                "method": "moving_block",
                "block_length": 12,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": 0.013886342592592592,
                "bootstrap_mean_of_means": 0.013793640046296294,
                "bootstrap_SE": 0.0037955376138197857,
                "percentile_95_interval": [
                  0.005921608796296295,
                  0.021007829861111108
                ],
                "exact_conditional_resampling_center": 0.013730463182897864,
                "exact_conditional_resampling_SE": 0.0037499768463182784,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.012149613015941307,
                "resampling_center_minus_original_mean": -0.00015587940969472892
              }
            ]
          },
          "simulated_AR1": {
            "unit": "dimensionless simulated variable",
            "designs": [
              {
                "method": "iid",
                "block_length": null,
                "B": 5000,
                "seed": 1901,
                "n": 432,
                "original_sample_mean": -0.05561958489307564,
                "bootstrap_mean_of_means": -0.05612870133298568,
                "bootstrap_SE": 0.04624076788830656,
                "percentile_95_interval": [
                  -0.14533262243579023,
                  0.03254600084993952
                ],
                "exact_conditional_resampling_center": -0.05561958489307564,
                "exact_conditional_resampling_SE": 0.04682915797422228,
                "finite_B_SE_relative_difference_from_exact_conditional": -0.012564609558848083,
                "resampling_center_minus_original_mean": 0.0
              },
              {
                "method": "moving_block",
                "block_length": 3,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": -0.05561958489307564,
                "bootstrap_mean_of_means": -0.05794880337663453,
                "bootstrap_SE": 0.06510086450471249,
                "percentile_95_interval": [
                  -0.18472380403705843,
                  0.0706219085403846
                ],
                "exact_conditional_resampling_center": -0.05846471647570767,
                "exact_conditional_resampling_SE": 0.06519620273923855,
                "finite_B_SE_relative_difference_from_exact_conditional": -0.0014623280270997796,
                "resampling_center_minus_original_mean": -0.0028451315826320267
              },
              {
                "method": "moving_block",
                "block_length": 6,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": -0.05561958489307564,
                "bootstrap_mean_of_means": -0.0570049419652368,
                "bootstrap_SE": 0.07577485215711521,
                "percentile_95_interval": [
                  -0.20609711656998075,
                  0.08985227621071178
                ],
                "exact_conditional_resampling_center": -0.058220295684175444,
                "exact_conditional_resampling_SE": 0.07519114243777843,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.007763011711383605,
                "resampling_center_minus_original_mean": -0.002600710791099803
              },
              {
                "method": "moving_block",
                "block_length": 12,
                "B": 5000,
                "seed": 1902,
                "n": 432,
                "original_sample_mean": -0.05561958489307564,
                "bootstrap_mean_of_means": -0.057889919987945015,
                "bootstrap_SE": 0.08368447834029598,
                "percentile_95_interval": [
                  -0.22660800500811165,
                  0.10467902745219997
                ],
                "exact_conditional_resampling_center": -0.05941968515501624,
                "exact_conditional_resampling_SE": 0.08280077561519829,
                "finite_B_SE_relative_difference_from_exact_conditional": 0.010672638251657762,
                "resampling_center_minus_original_mean": -0.003800100261940602
              }
            ]
          }
        }
      },
      "algorithm": "iid 1901，MBB1902；各设计重置；非循环起点0..n-ell，拼接连续块，432可被3/6/12整除；数据分支共用索引；B=5000，SE ddof=1，端点linear. 精确条件中心/SE由候选块和求出；AR1910先X0再创新.",
      "boundaries": [
        "真实过程推断依赖额外条件，本课只证有限重抽身份",
        "非循环MBB中心可能偏移",
        "linear端点不等于inverted_cdf",
        "AR单位独立于真实收益",
        "B有限误差和数据n有限误差分开",
        "一般不整除n的设计未在冻结实验中使用"
      ],
      "static_equivalent": {
        "reader_anchor": "qt19-results",
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
        "scope": "bootstrap AR1/series",
        "purpose": "需要完整图形或索引时按JSON路径读取；不以全部随机数组作为每次口头讲解必读"
      }
    ],
    "reading_base": "本站同源冻结输入；通过给定完整公开链接读取. 数据官网的当前更新不替换此 202607 快照.",
    "reproduction_source": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/compute/reproduce.py",
    "input_csv": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv",
    "configuration": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/experiment-config.json"
  },
  "learning_task": "识别样本/条件重抽/真实过程三层分布，重建MBB有限中心与SE，并区分均值区间和下一期预测区间."
}
```

## Supplied entry
432 个月的平均收益是 1.3886%：只要数据固定，这个数就固定了. 我们说“平均收益的估计不确定性”时，却是在问另一件事——在某个假定的数据生成过程中，再观察一段同长度记录，估计出来的平均值可能怎样变化？

这一节先锁定这个目标，再比较逐点重抽与非循环移动区块重抽. 你将实际读一组抽样索引，推导重抽分布的中心，最后用一个真值已知的 AR(1) 模型区分**样本分布、条件重抽分布和真实过程中的抽样分布**. 先修是均值、方差以及 [标准误与 Monte Carlo 误差](https://ou-liu-red-sugar.github.io/zh/notebook/convergence-monte-carlo/).

<a id="qt19-estimand"></a>
## 1. “不确定”必须有一个对象

如果假设月收益过程具有不随时间改变的、有限的无条件均值，可以把估计目标写为 $\mu=\mathbb{E}[R_t]$，估计量写为 $\bar R_n$. 观察一份记录后得到实现值 $\bar r_n$. 这里有一个重要条件：若过程的均值随时期改变，一个覆盖 36 年的平均并不天然等于“下一月期望收益”. 先选模型中的目标，再解释估计量，不能反过来因为我们算了一个平均就宣称目标已经明确.

本例继续用 [BusEq 的 432 月快照](https://ou-liu-red-sugar.github.io/zh/notebook/return-distributions-tail-risk/)：202607 数据库版本、当前 CIZ 方式重建的 1990-01 至 2025-12 历史；无缺失、无删除，内部小数收益，展示时按百分数. 它不是一套逐月当时可见的 vintage. [^data]

我们需要区分三个分布.**经验分布**把这 432 个已观察月份各赋权 $1/432$. **条件重抽分布**固定这些数值，再按照某个算法抽取索引；不同算法产生不同分布，记其概率与期望为 $P^*$、$\mathbb{E}^*$. **真实过程中的抽样分布**则来自未知过程重新生成整段记录. Bootstrap 希望用第二个去近似第三个，但只有在相应的过程、统计量和重抽条件下才可能有效，三者不能直接画等号. [^bootstrap]

第四个对象是下一月 $R_{n+1}$. 它本身的波动与 $\bar R_n$ 的估计波动也不同. 为了先看清尺度，在一个 iid、有限方差 $\sigma^2$ 的模型里，未来观测独立于历史，因此
\[
\operatorname{Var}(R_{n+1}-\bar R_n)
=\sigma^2+\frac{\sigma^2}{n}.
\]
估计均值的不确定性随 $n$ 增加而缩小，未来单次结果的噪声却不会一起消失. 这个等式只说明 iid 对照，不能不加协方差地套到下面的相关过程.

<a id="qt19-iid"></a>
## 2. 逐点重抽：固定数据，再让索引随机

iid bootstrap 每次独立地从 $\{0,\ldots,n-1\}$ 有放回抽 $n$ 个索引，按索引取数据并计算一个均值；重复 $B=5000$ 次，得到
$\bar r^{*(1)},\ldots,\bar r^{*(B)}$. 这里“iid”说的是**条件于当前数据后的重抽规则**，不等于我们已经证明历史月份 iid. [^bootstrap]

本实验 seed 1901. 对这些重抽均值求分母 $B-1$ 的标准差，得到模拟 bootstrap SE；它不是原始收益的标准差. 默认 BusEq 原始样本标准差为 7.2883%，重抽均值的 SE 则为 **0.3529 个百分点/月**. [^results]

由于重抽索引独立均匀，我们甚至可以在不做 5000 次模拟时精确计算这个条件分布：
\[
\mathbb{E}^*[\bar r^*]=\bar r,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{\widehat\sigma_{\rm emp}^2}{n},\qquad
\widehat\sigma_{\rm emp}^2=\frac1n\sum_t(r_t-\bar r)^2.
\]
本例精确条件 SE 是 **0.3503 个百分点/月**. 与模拟值 0.3529 的差异属于有限 $B$ 的 Monte Carlo 误差；它不是“市场真实 SE 与估计 SE 的差”，因为两个数仍都在固定样本的同一重抽模型内部.

我们另外报告重抽均值分布的 2.5% 与 97.5% **percentile 区间**. 端点采用 NumPy `linear`：将 $B$ 个均值升序记为 $y_0,\ldots,y_{B-1}$，对水平 $u$ 取 $h=(B-1)u$、$j=\lfloor h\rfloor$，用 $(1-h+j)y_j+(h-j)y_{j+1}$ 插值. 它不同于 QT04 计算损失 VaR 时使用的 `inverted_cdf`；对象和约定必须分别写明. 区间能否近似某个总体均值的置信区间，还需要 bootstrap 的有效性条件；“取了两个百分位”本身不保证 95% 覆盖.

<a id="qt19-block"></a>
## 3. 区块重抽保留局部顺序，也改变边缘权重

逐点打乱会破坏原序列的局部时间结构. 移动区块 bootstrap（MBB）改为抽取连续片段，再拼接起来. FPP3 用这一想法处理可能有自相关的余项；此处选用的是对原收益序列直接重抽的**非循环** MBB，不是复现其 STL 分解与 bagging 实验. [^block]

固定块长 $\ell$. 候选起点是 $0,\ldots,n-\ell$；均匀、有放回抽 $k=\lceil n/\ell\rceil$ 个起点，各取连续 $\ell$ 项，拼接后截到 $n$ 项. 不循环绕回意味着最后一个月份不会和第一个月份被强行接成一个候选块. 块内顺序保留，**块与块连接处不保留原有邻接关系**.

本例 $n=432$，$\ell=3,6,12$ 都整除 $n$. 各设计重新初始化 seed 1902；真实收益与 AR(1) 分支复用相同索引. 下面是默认 $\ell=6$ 第一条重抽序列的前两个块，索引从零计数：

| 重抽位置（从 0 开始） | 原序列索引 | 原月份 | 月收益 |
|---:|---:|---|---:|
| 0 | 363 | 2020-04 | 13.97% |
| 1 | 364 | 2020-05 | 8.02% |
| 2 | 365 | 2020-06 | 6.63% |
| 3 | 366 | 2020-07 | 9.52% |
| 4 | 367 | 2020-08 | 11.76% |
| 5 | 368 | 2020-09 | -5.14% |
| 6 | 208 | 2007-05 | 4.10% |
| 7 | 209 | 2007-06 | 2.05% |
| 8 | 210 | 2007-07 | -0.08% |
| 9 | 211 | 2007-08 | 3.67% |
| 10 | 212 | 2007-09 | 3.73% |
| 11 | 213 | 2007-10 | 3.97% |

第一个块的 2020-09 之后跳到第二个块的 2007-05，这个连接是重抽算法产生的，不是原历史的下一月. 图中会显示块边界；完整 432 个索引及重抽数值均可查看.

比“保留顺序”更容易被忽略的是边缘权重. 令 $N=n-\ell+1$，候选块和为
$S_j=\sum_{h=0}^{\ell-1}r_{j+h}$（$j=0,\ldots,N-1$）. 对本例整块情形 $k=n/\ell$，抽到的块和独立同分布，因此
\[
\mathbb{E}^*[\bar r^*]=\frac{k}{n}\overline S,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{k}{n^2}\frac1N\sum_{j=0}^{N-1}(S_j-\overline S)^2.
\]
这是固定有限候选块的精确计算，不是一般 bootstrap 一致性定理.

为什么中心不一定是 $\bar r$？用从 1 开始的原位置 $t$，令 $a_t$ 为包含该位置的候选块数，则
\[
a_t=\min(t,N)-\max(1,t-\ell+1)+1,\qquad
\mathbb{E}^*[\bar r^*]=\sum_{t=1}^n\frac{a_t}{\ell N}r_t.
\]
首尾位置通常只出现一次，中间位置最多出现 $\ell$ 次. 只有这些权重与数据恰好抵消，中心才等于普通样本均值.

对 BusEq、$\ell=6$，原均值是 **1.3886%/月**，精确重抽中心是 **1.3804%/月**，差 **−0.0083 个百分点/月**. 有限 5000 次所得均值的平均又是约 1.3874%/月. 后两者的差属于模拟误差，前两者的差却由非循环边缘加权产生；增加 $B$ 不会让精确重抽中心自动回到原均值. [^results]

<a id="qt19-results"></a>
## 4. 同一数据，不同重抽分布

| 重抽设计 | 模拟 SE（百分点/月） | 精确条件重抽 SE（百分点/月） | percentile 95% 均值区间（%/月） |
|---|---:|---:|---|
| iid | 0.3529 | 0.3503 | [0.6979, 2.0693] |
| 非循环 MBB，$\ell=3$ | 0.3565 | 0.3548 | [0.6828, 2.0742] |
| 非循环 MBB，$\ell=6$ | 0.3699 | 0.3611 | [0.6649, 2.0906] |
| 非循环 MBB，$\ell=12$ | 0.3796 | 0.3750 | [0.5922, 2.1008] |

<div data-experiment-slot="EXP-BOOT-01"></div>

界面先显示原序列和一条完整重抽序列，再显示 5000 个均值的分布. 两条中心标记分别是原样本均值和精确条件重抽中心；它们即使很接近，也不是同一个对象. 更改块长时，要同时重读索引、边界、中心、SE 与区间，而不是只看区间宽窄.

这些数值不宣布哪种方法对真实市场“更正确”. 将 MBB 用于推断还需要针对所研究过程、统计量与块长方案建立相应理论条件；FPP3 的教学单元只支持“连续块保留局部次序”这一动机，本节也没有重证一般 block-bootstrap 一致性. 本节的 3、6、12 只是预先固定的敏感性网格，没有通过更宽的区间证明某组条件成立.

<a id="qt19-ar"></a>
## 5. 用真值已知的过程检查解释是否越界

现在换一个完全指定的合成模型：
\[
X_t=.6X_{t-1}+\varepsilon_t,\qquad
X_0\sim N(0,1),\qquad \varepsilon_t\overset{\rm iid}{\sim}N(0,.64),
\]
并要求 $X_0$ 与后续创新独立. seed 1910 先抽 $X_0$，再抽 432 个创新，保存 $X_1,\ldots,X_{432}$；这是从稳态分布开始，不使用 burn-in. 变量无量纲，与真实月收益分支不同.

由递推，均值始终为零，方差为 $.6^2\times1+.64=1$. 对 $h\ge1$，将 $X_{t+h}$ 展成 $.6^hX_t$ 加未来创新，后者与 $X_t$ 独立，因此
$\operatorname{Cov}(X_t,X_{t+h})=.6^h$. 展开样本均值的方差，按相隔 $h$ 的协方差配对，得到
\[
\operatorname{Var}(\bar X_n)=
\frac{n+2\sum_{h=1}^{n-1}(n-h).6^h}{n^2}.
\]
$n=432$ 时，真 SE 为 **0.096016**；把相同边缘方差误当 iid 会得到 $1/\sqrt{432}=0.048113$. 相关性在这里不是抽象提醒，它直接出现在双重和中.

这一次冻结路径的 $X_0=1.467808\ldots$、样本均值为 $-0.055620$，得到：

| 重抽设计 | 这次样本上的模拟 SE | 精确条件重抽 SE |
|---|---:|---:|
| iid | 0.04624 | 0.04683 |
| MBB，$\ell=3$ | 0.06510 | 0.06520 |
| MBB，$\ell=6$ | 0.07577 | 0.07519 |
| MBB，$\ell=12$ | 0.08368 | 0.08280 |

这些条件重抽 SE 均不是 0.096016. 较长块在这次结果里向真值靠近，不等于“block-12 已恢复真值”，更不能用一次样本证明方法覆盖率或替金融市场选择最佳块长. 真过程反复生成样本的分布、对一次样本重抽的条件分布，以及仅 5000 次模拟得到的近似，仍然是三层对象.

<a id="qt19-boundaries"></a>
## 6. 带回实际估计：不要把区间换一个名字

真实收益的均值区间不是下一月收益预测区间. 前者试图描述估计某个 $\mu$ 的误差，后者必须同时处理新结果的过程波动；若还要判断预测能力，则需要按实际可得时间组织训练与未来评价. 时间序列交叉验证的训练集只能包含预测起点以前可用的信息，不由 bootstrap 重抽替代. [^cv]

<details>
<summary>选读：风险预测本身也经过估计</summary>

估计误差也会进入更复杂的风险检验. Barendse、Kole、van Dijk 专门研究了估计参数所产生的 VaR/ES 预测如何影响后续检验；此处只采用“估计步骤不能被当作已知真值”这一机制，不把其具体模型比较移植成 BusEq 的结论. 可读选读稿是 2019 开放版本，和后来发表的版本分别记录. [^research]

</details>

**题一：手算边缘加权.** 一个无量纲教学样本是 $[0,0,0,0,0,6]$，用非循环 $\ell=3$ 的 MBB，抽两个块. 原均值、精确重抽中心和精确条件 SE 各是多少？

**解析.** 原均值为 1；四个候选块和为 $[0,0,0,6]$，均值 1.5、总体方差 6.75. 故重抽中心为 $2\times1.5/6=.5$，条件方差为 $2\times6.75/6^2=.375$，SE 为 $\sqrt{.375}\approx.61237$. 最后一个较大值的边缘权重低，产生了中心偏移；不需要诉诸“随机运行不够多”.

**题二：增加的是 $n$ 还是 $B$？** 保留 432 月数据和 $\ell=6$ 算法，只把重抽次数从 5000 提高到 500000，哪些对象会改变？

**解析.** 原样本均值、候选块及精确条件分布不变，所以其中心 1.3804%/月和精确 SE 0.3611 个百分点/月不变. 模拟均值分布、模拟 SE 与 percentile 端点会更精确地近似这一个条件分布；真实市场假设没有因此被验证，也没有增加 495000 个月的信息.

**题三：换掉相关系数.** 在同样稳态边缘方差为 1 的构造中，改成 $\rho=0$，样本均值真 SE 应如何变化？能否由此证明历史 BusEq 应使用 iid bootstrap？

**解析.** 正滞后协方差全部为零，上式变为 $1/n$，真 SE 是 $1/\sqrt n$. 这是这个特定独立创新模型的结果，并不证明 BusEq 的联合分布满足相同假设. 模型机制例帮助检查推理，不能代替真实过程的证据.

[^data]: `QT-C-inputs-20260921-v1`，[432 月原值与来源行号](/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv)；[参数合同](/notebook/labs/qt-c/data/experiment-config.json) 的 dataset. 数据生产与版本说明见 [French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)；本例绑定冻结的 202607 重建历史.
[^bootstrap]: Sergio Bacallado、Jonathan Taylor，Stanford STATS 202，*Bootstrap*（following ISLR 2e），[正文](https://web.stanford.edu/class/stats202/notes/Resampling/Bootstrap.html)，尤其 “Cross-validation vs. the Bootstrap”“Resampling the data from the true distribution”“Computing the standard error”“In reality, we only have n samples”. 本节的有限重抽均值与方差由已定义的索引规则直接推导.
[^block]: Rob J. Hyndman、George Athanasopoulos，*Forecasting: Principles and Practice* 3e，[§12.5 Bootstrapping and bagging](https://otexts.com/fpp3/bootstrap.html)，尤其 Bootstrapping time series. 这里采用连续块保留局部次序的动机；非循环原收益 MBB、边缘权重与有限条件分布算法由正文明确给出.
[^results]: [完整结果](/notebook/labs/qt-c/data/results.json) 的 `bootstrap.AR1` 与 `bootstrap.series`；每个设计保存 5000 个均值、第一条完整索引、重抽值和块边界.[复算源](/notebook/labs/qt-c/compute/reproduce.py) 读取唯一配置；不同数据分支复用索引，并保持真实收益百分数与 AR 无量纲值的单位区别.
[^cv]: Hyndman、Athanasopoulos，[FPP3 §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html)，rolling forecasting origin 及多步预测例.
[^research]: Sander Barendse、Erik Kole、Dick van Dijk，*Backtesting Value-at-Risk and Expected Shortfall in the Presence of Estimation Error*，[Tinbergen 2019-058/III 开放稿](https://papers.tinbergen.nl/19058.pdf)，§1 Introduction（印刷 pp.2–5；PDF pp.4–7）. 相关正式发表版本为 *Journal of Financial Econometrics* 21(2), 2023（[作者出版列表](https://sites.google.com/view/dickvandijk/publications)）；两版页码分开使用. 该文作为估计误差扩展阅读，不承担本节 MBB 一致性证明.


## Additional teaching material
以下是本篇真正使用的输入与结果；完整随机数组按[完整冻结结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json) 的指定路径读取.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BOOT-01",
    "title": "条件重抽分布、MBB边缘权重与稳态AR",
    "anchor": "qt19-results",
    "description": "识别样本/条件重抽/真实过程三层分布，重建MBB有限中心与SE，并区分均值区间和下一期预测区间.",
    "inputs": {
      "config": {
        "experiment_id": "EXP-BOOT-01",
        "repetitions": 5000,
        "iid_seed": 1901,
        "moving_block_seed": 1902,
        "block_lengths": [
          3,
          6,
          12
        ],
        "default_block_length": 6,
        "percentile_levels": [
          0.025,
          0.975
        ],
        "percentile_method": "linear",
        "se_ddof": 1,
        "index_base": 0,
        "moving_block_algorithm": "均匀有放回抽起点0..n-l；每块保留连续l项，拼接ceil(n/l)块后截取前n项；不循环绕回",
        "seed_reset": "每个设计重新初始化指定种子；真实收益与AR(1)复用同一组抽样索引；不同块长分别重置1902",
        "ar1": {
          "seed": 1910,
          "rho": 0.6,
          "innovation_variance": 0.64,
          "n": 432,
          "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
          "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
          "unit": "无量纲的教学模拟变量"
        }
      },
      "dataset": {
        "source_csv": "30_Industry_Portfolios.csv",
        "source_zip": "30_Industry_Portfolios_CSV.zip",
        "source_zip_url": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/ftp/30_Industry_Portfolios_CSV.zip",
        "source_details_url": "https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html",
        "source_regime_url": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html",
        "download_date": "2026-09-21",
        "download_date_provenance": "Lead具名下载记录；非源文件生成日或各月发布日期",
        "expected_crsp_vintage": "202607",
        "block_title": "Average Value Weighted Returns -- Monthly",
        "column": "BusEq",
        "sample_start": "199001",
        "sample_end": "202512",
        "expected_months": 432,
        "missing_codes": [
          -99.99,
          -999.0
        ],
        "percent_divisor": 100.0,
        "regime": "当前CIZ生成的整段重建历史；不与历史FIZ快照拼接",
        "sample_windows": [
          [
            "199001",
            "202512"
          ],
          [
            "200001",
            "202512"
          ],
          [
            "201001",
            "202512"
          ],
          [
            "202001",
            "202512"
          ]
        ],
        "history_identity": "202607当前CIZ整段重建历史；非逐月当时可见vintage",
        "first_source_line": 775,
        "last_source_line": 1206,
        "selected_rows": 432,
        "missing_removed": 0,
        "original_archive_included": false,
        "selected_csv_bytes_verified": true
      },
      "records": [
        {
          "month": "199001",
          "percent": -0.94,
          "r": -0.009399999999999999,
          "loss": 0.009399999999999999,
          "source_line": 775
        },
        {
          "month": "199002",
          "percent": 3.53,
          "r": 0.0353,
          "loss": -0.0353,
          "source_line": 776
        },
        {
          "month": "199003",
          "percent": 4.1,
          "r": 0.040999999999999995,
          "loss": -0.040999999999999995,
          "source_line": 777
        },
        {
          "month": "199004",
          "percent": -1.46,
          "r": -0.0146,
          "loss": 0.0146,
          "source_line": 778
        },
        {
          "month": "199005",
          "percent": 11.64,
          "r": 0.1164,
          "loss": -0.1164,
          "source_line": 779
        },
        {
          "month": "199006",
          "percent": -2.0,
          "r": -0.02,
          "loss": 0.02,
          "source_line": 780
        },
        {
          "month": "199007",
          "percent": -6.52,
          "r": -0.0652,
          "loss": 0.0652,
          "source_line": 781
        },
        {
          "month": "199008",
          "percent": -12.22,
          "r": -0.1222,
          "loss": 0.1222,
          "source_line": 782
        },
        {
          "month": "199009",
          "percent": -6.16,
          "r": -0.0616,
          "loss": 0.0616,
          "source_line": 783
        },
        {
          "month": "199010",
          "percent": -3.82,
          "r": -0.0382,
          "loss": 0.0382,
          "source_line": 784
        },
        {
          "month": "199011",
          "percent": 10.47,
          "r": 0.1047,
          "loss": -0.1047,
          "source_line": 785
        },
        {
          "month": "199012",
          "percent": 3.93,
          "r": 0.0393,
          "loss": -0.0393,
          "source_line": 786
        },
        {
          "month": "199101",
          "percent": 14.36,
          "r": 0.1436,
          "loss": -0.1436,
          "source_line": 787
        },
        {
          "month": "199102",
          "percent": 5.98,
          "r": 0.059800000000000006,
          "loss": -0.059800000000000006,
          "source_line": 788
        },
        {
          "month": "199103",
          "percent": -0.61,
          "r": -0.0060999999999999995,
          "loss": 0.0060999999999999995,
          "source_line": 789
        },
        {
          "month": "199104",
          "percent": -3.01,
          "r": -0.0301,
          "loss": 0.0301,
          "source_line": 790
        },
        {
          "month": "199105",
          "percent": 3.47,
          "r": 0.0347,
          "loss": -0.0347,
          "source_line": 791
        },
        {
          "month": "199106",
          "percent": -9.19,
          "r": -0.0919,
          "loss": 0.0919,
          "source_line": 792
        },
        {
          "month": "199107",
          "percent": 4.15,
          "r": 0.0415,
          "loss": -0.0415,
          "source_line": 793
        },
        {
          "month": "199108",
          "percent": 1.37,
          "r": 0.0137,
          "loss": -0.0137,
          "source_line": 794
        },
        {
          "month": "199109",
          "percent": -2.13,
          "r": -0.0213,
          "loss": 0.0213,
          "source_line": 795
        },
        {
          "month": "199110",
          "percent": 0.13,
          "r": 0.0013,
          "loss": -0.0013,
          "source_line": 796
        },
        {
          "month": "199111",
          "percent": -5.01,
          "r": -0.0501,
          "loss": 0.0501,
          "source_line": 797
        },
        {
          "month": "199112",
          "percent": 7.05,
          "r": 0.0705,
          "loss": -0.0705,
          "source_line": 798
        },
        {
          "month": "199201",
          "percent": 7.35,
          "r": 0.0735,
          "loss": -0.0735,
          "source_line": 799
        },
        {
          "month": "199202",
          "percent": 4.45,
          "r": 0.044500000000000005,
          "loss": -0.044500000000000005,
          "source_line": 800
        },
        {
          "month": "199203",
          "percent": -4.94,
          "r": -0.049400000000000006,
          "loss": 0.049400000000000006,
          "source_line": 801
        },
        {
          "month": "199204",
          "percent": 0.2,
          "r": 0.002,
          "loss": -0.002,
          "source_line": 802
        },
        {
          "month": "199205",
          "percent": -0.75,
          "r": -0.0075,
          "loss": 0.0075,
          "source_line": 803
        },
        {
          "month": "199206",
          "percent": -2.71,
          "r": -0.0271,
          "loss": 0.0271,
          "source_line": 804
        },
        {
          "month": "199207",
          "percent": 2.67,
          "r": 0.026699999999999998,
          "loss": -0.026699999999999998,
          "source_line": 805
        },
        {
          "month": "199208",
          "percent": -5.32,
          "r": -0.053200000000000004,
          "loss": 0.053200000000000004,
          "source_line": 806
        },
        {
          "month": "199209",
          "percent": 2.38,
          "r": 0.023799999999999998,
          "loss": -0.023799999999999998,
          "source_line": 807
        },
        {
          "month": "199210",
          "percent": -0.03,
          "r": -0.0003,
          "loss": 0.0003,
          "source_line": 808
        },
        {
          "month": "199211",
          "percent": 6.77,
          "r": 0.0677,
          "loss": -0.0677,
          "source_line": 809
        },
        {
          "month": "199212",
          "percent": 0.32,
          "r": 0.0032,
          "loss": -0.0032,
          "source_line": 810
        },
        {
          "month": "199301",
          "percent": 5.1,
          "r": 0.051,
          "loss": -0.051,
          "source_line": 811
        },
        {
          "month": "199302",
          "percent": 0.75,
          "r": 0.0075,
          "loss": -0.0075,
          "source_line": 812
        },
        {
          "month": "199303",
          "percent": 1.51,
          "r": 0.0151,
          "loss": -0.0151,
          "source_line": 813
        },
        {
          "month": "199304",
          "percent": -2.69,
          "r": -0.0269,
          "loss": 0.0269,
          "source_line": 814
        },
        {
          "month": "199305",
          "percent": 9.23,
          "r": 0.09230000000000001,
          "loss": -0.09230000000000001,
          "source_line": 815
        },
        {
          "month": "199306",
          "percent": -0.48,
          "r": -0.0048,
          "loss": 0.0048,
          "source_line": 816
        },
        {
          "month": "199307",
          "percent": -2.81,
          "r": -0.0281,
          "loss": 0.0281,
          "source_line": 817
        },
        {
          "month": "199308",
          "percent": 7.83,
          "r": 0.0783,
          "loss": -0.0783,
          "source_line": 818
        },
        {
          "month": "199309",
          "percent": -0.05,
          "r": -0.0005,
          "loss": 0.0005,
          "source_line": 819
        },
        {
          "month": "199310",
          "percent": 1.19,
          "r": 0.011899999999999999,
          "loss": -0.011899999999999999,
          "source_line": 820
        },
        {
          "month": "199311",
          "percent": -0.07,
          "r": -0.0007000000000000001,
          "loss": 0.0007000000000000001,
          "source_line": 821
        },
        {
          "month": "199312",
          "percent": 4.15,
          "r": 0.0415,
          "loss": -0.0415,
          "source_line": 822
        },
        {
          "month": "199401",
          "percent": 4.55,
          "r": 0.0455,
          "loss": -0.0455,
          "source_line": 823
        },
        {
          "month": "199402",
          "percent": 1.6,
          "r": 0.016,
          "loss": -0.016,
          "source_line": 824
        },
        {
          "month": "199403",
          "percent": -3.67,
          "r": -0.036699999999999997,
          "loss": 0.036699999999999997,
          "source_line": 825
        },
        {
          "month": "199404",
          "percent": -2.43,
          "r": -0.024300000000000002,
          "loss": 0.024300000000000002,
          "source_line": 826
        },
        {
          "month": "199405",
          "percent": 0.63,
          "r": 0.0063,
          "loss": -0.0063,
          "source_line": 827
        },
        {
          "month": "199406",
          "percent": -5.03,
          "r": -0.050300000000000004,
          "loss": 0.050300000000000004,
          "source_line": 828
        },
        {
          "month": "199407",
          "percent": 5.09,
          "r": 0.0509,
          "loss": -0.0509,
          "source_line": 829
        },
        {
          "month": "199408",
          "percent": 9.22,
          "r": 0.0922,
          "loss": -0.0922,
          "source_line": 830
        },
        {
          "month": "199409",
          "percent": -0.99,
          "r": -0.009899999999999999,
          "loss": 0.009899999999999999,
          "source_line": 831
        },
        {
          "month": "199410",
          "percent": 6.94,
          "r": 0.0694,
          "loss": -0.0694,
          "source_line": 832
        },
        {
          "month": "199411",
          "percent": -2.28,
          "r": -0.022799999999999997,
          "loss": 0.022799999999999997,
          "source_line": 833
        },
        {
          "month": "199412",
          "percent": 2.75,
          "r": 0.0275,
          "loss": -0.0275,
          "source_line": 834
        },
        {
          "month": "199501",
          "percent": -0.59,
          "r": -0.0059,
          "loss": 0.0059,
          "source_line": 835
        },
        {
          "month": "199502",
          "percent": 6.65,
          "r": 0.0665,
          "loss": -0.0665,
          "source_line": 836
        },
        {
          "month": "199503",
          "percent": 4.32,
          "r": 0.0432,
          "loss": -0.0432,
          "source_line": 837
        },
        {
          "month": "199504",
          "percent": 9.28,
          "r": 0.0928,
          "loss": -0.0928,
          "source_line": 838
        },
        {
          "month": "199505",
          "percent": 3.34,
          "r": 0.0334,
          "loss": -0.0334,
          "source_line": 839
        },
        {
          "month": "199506",
          "percent": 10.15,
          "r": 0.1015,
          "loss": -0.1015,
          "source_line": 840
        },
        {
          "month": "199507",
          "percent": 8.73,
          "r": 0.0873,
          "loss": -0.0873,
          "source_line": 841
        },
        {
          "month": "199508",
          "percent": -0.16,
          "r": -0.0016,
          "loss": 0.0016,
          "source_line": 842
        },
        {
          "month": "199509",
          "percent": 1.29,
          "r": 0.0129,
          "loss": -0.0129,
          "source_line": 843
        },
        {
          "month": "199510",
          "percent": 0.03,
          "r": 0.0003,
          "loss": -0.0003,
          "source_line": 844
        },
        {
          "month": "199511",
          "percent": -1.41,
          "r": -0.0141,
          "loss": 0.0141,
          "source_line": 845
        },
        {
          "month": "199512",
          "percent": -4.58,
          "r": -0.0458,
          "loss": 0.0458,
          "source_line": 846
        },
        {
          "month": "199601",
          "percent": 2.11,
          "r": 0.021099999999999997,
          "loss": -0.021099999999999997,
          "source_line": 847
        },
        {
          "month": "199602",
          "percent": 6.93,
          "r": 0.0693,
          "loss": -0.0693,
          "source_line": 848
        },
        {
          "month": "199603",
          "percent": -4.55,
          "r": -0.0455,
          "loss": 0.0455,
          "source_line": 849
        },
        {
          "month": "199604",
          "percent": 10.57,
          "r": 0.1057,
          "loss": -0.1057,
          "source_line": 850
        },
        {
          "month": "199605",
          "percent": 4.32,
          "r": 0.0432,
          "loss": -0.0432,
          "source_line": 851
        },
        {
          "month": "199606",
          "percent": -6.32,
          "r": -0.0632,
          "loss": 0.0632,
          "source_line": 852
        },
        {
          "month": "199607",
          "percent": -7.54,
          "r": -0.0754,
          "loss": 0.0754,
          "source_line": 853
        },
        {
          "month": "199608",
          "percent": 5.1,
          "r": 0.051,
          "loss": -0.051,
          "source_line": 854
        },
        {
          "month": "199609",
          "percent": 10.66,
          "r": 0.1066,
          "loss": -0.1066,
          "source_line": 855
        },
        {
          "month": "199610",
          "percent": -1.23,
          "r": -0.0123,
          "loss": 0.0123,
          "source_line": 856
        },
        {
          "month": "199611",
          "percent": 14.01,
          "r": 0.1401,
          "loss": -0.1401,
          "source_line": 857
        },
        {
          "month": "199612",
          "percent": -2.42,
          "r": -0.0242,
          "loss": 0.0242,
          "source_line": 858
        },
        {
          "month": "199701",
          "percent": 10.36,
          "r": 0.1036,
          "loss": -0.1036,
          "source_line": 859
        },
        {
          "month": "199702",
          "percent": -8.16,
          "r": -0.0816,
          "loss": 0.0816,
          "source_line": 860
        },
        {
          "month": "199703",
          "percent": -5.22,
          "r": -0.052199999999999996,
          "loss": 0.052199999999999996,
          "source_line": 861
        },
        {
          "month": "199704",
          "percent": 6.02,
          "r": 0.0602,
          "loss": -0.0602,
          "source_line": 862
        },
        {
          "month": "199705",
          "percent": 10.21,
          "r": 0.10210000000000001,
          "loss": -0.10210000000000001,
          "source_line": 863
        },
        {
          "month": "199706",
          "percent": 0.93,
          "r": 0.009300000000000001,
          "loss": -0.009300000000000001,
          "source_line": 864
        },
        {
          "month": "199707",
          "percent": 18.9,
          "r": 0.18899999999999997,
          "loss": -0.18899999999999997,
          "source_line": 865
        },
        {
          "month": "199708",
          "percent": -0.79,
          "r": -0.0079,
          "loss": 0.0079,
          "source_line": 866
        },
        {
          "month": "199709",
          "percent": 3.89,
          "r": 0.038900000000000004,
          "loss": -0.038900000000000004,
          "source_line": 867
        },
        {
          "month": "199710",
          "percent": -10.68,
          "r": -0.10679999999999999,
          "loss": 0.10679999999999999,
          "source_line": 868
        },
        {
          "month": "199711",
          "percent": 0.64,
          "r": 0.0064,
          "loss": -0.0064,
          "source_line": 869
        },
        {
          "month": "199712",
          "percent": -4.76,
          "r": -0.047599999999999996,
          "loss": 0.047599999999999996,
          "source_line": 870
        },
        {
          "month": "199801",
          "percent": 5.08,
          "r": 0.0508,
          "loss": -0.0508,
          "source_line": 871
        },
        {
          "month": "199802",
          "percent": 9.65,
          "r": 0.0965,
          "loss": -0.0965,
          "source_line": 872
        },
        {
          "month": "199803",
          "percent": -2.18,
          "r": -0.0218,
          "loss": 0.0218,
          "source_line": 873
        },
        {
          "month": "199804",
          "percent": 7.61,
          "r": 0.0761,
          "loss": -0.0761,
          "source_line": 874
        },
        {
          "month": "199805",
          "percent": -7.14,
          "r": -0.07139999999999999,
          "loss": 0.07139999999999999,
          "source_line": 875
        },
        {
          "month": "199806",
          "percent": 4.64,
          "r": 0.0464,
          "loss": -0.0464,
          "source_line": 876
        },
        {
          "month": "199807",
          "percent": 3.85,
          "r": 0.0385,
          "loss": -0.0385,
          "source_line": 877
        },
        {
          "month": "199808",
          "percent": -17.49,
          "r": -0.17489999999999997,
          "loss": 0.17489999999999997,
          "source_line": 878
        },
        {
          "month": "199809",
          "percent": 13.18,
          "r": 0.1318,
          "loss": -0.1318,
          "source_line": 879
        },
        {
          "month": "199810",
          "percent": 10.06,
          "r": 0.10060000000000001,
          "loss": -0.10060000000000001,
          "source_line": 880
        },
        {
          "month": "199811",
          "percent": 10.34,
          "r": 0.10339999999999999,
          "loss": -0.10339999999999999,
          "source_line": 881
        },
        {
          "month": "199812",
          "percent": 14.09,
          "r": 0.1409,
          "loss": -0.1409,
          "source_line": 882
        },
        {
          "month": "199901",
          "percent": 13.29,
          "r": 0.1329,
          "loss": -0.1329,
          "source_line": 883
        },
        {
          "month": "199902",
          "percent": -12.31,
          "r": -0.1231,
          "loss": 0.1231,
          "source_line": 884
        },
        {
          "month": "199903",
          "percent": 5.09,
          "r": 0.0509,
          "loss": -0.0509,
          "source_line": 885
        },
        {
          "month": "199904",
          "percent": 6.19,
          "r": 0.061900000000000004,
          "loss": -0.061900000000000004,
          "source_line": 886
        },
        {
          "month": "199905",
          "percent": 0.03,
          "r": 0.0003,
          "loss": -0.0003,
          "source_line": 887
        },
        {
          "month": "199906",
          "percent": 12.86,
          "r": 0.1286,
          "loss": -0.1286,
          "source_line": 888
        },
        {
          "month": "199907",
          "percent": 2.41,
          "r": 0.0241,
          "loss": -0.0241,
          "source_line": 889
        },
        {
          "month": "199908",
          "percent": 7.8,
          "r": 0.078,
          "loss": -0.078,
          "source_line": 890
        },
        {
          "month": "199909",
          "percent": -2.45,
          "r": -0.0245,
          "loss": 0.0245,
          "source_line": 891
        },
        {
          "month": "199910",
          "percent": 3.17,
          "r": 0.0317,
          "loss": -0.0317,
          "source_line": 892
        },
        {
          "month": "199911",
          "percent": 14.16,
          "r": 0.1416,
          "loss": -0.1416,
          "source_line": 893
        },
        {
          "month": "199912",
          "percent": 17.29,
          "r": 0.1729,
          "loss": -0.1729,
          "source_line": 894
        },
        {
          "month": "200001",
          "percent": -1.28,
          "r": -0.0128,
          "loss": 0.0128,
          "source_line": 895
        },
        {
          "month": "200002",
          "percent": 24.72,
          "r": 0.24719999999999998,
          "loss": -0.24719999999999998,
          "source_line": 896
        },
        {
          "month": "200003",
          "percent": 4.72,
          "r": 0.0472,
          "loss": -0.0472,
          "source_line": 897
        },
        {
          "month": "200004",
          "percent": -6.03,
          "r": -0.0603,
          "loss": 0.0603,
          "source_line": 898
        },
        {
          "month": "200005",
          "percent": -11.47,
          "r": -0.11470000000000001,
          "loss": 0.11470000000000001,
          "source_line": 899
        },
        {
          "month": "200006",
          "percent": 12.82,
          "r": 0.1282,
          "loss": -0.1282,
          "source_line": 900
        },
        {
          "month": "200007",
          "percent": -3.28,
          "r": -0.032799999999999996,
          "loss": 0.032799999999999996,
          "source_line": 901
        },
        {
          "month": "200008",
          "percent": 12.84,
          "r": 0.1284,
          "loss": -0.1284,
          "source_line": 902
        },
        {
          "month": "200009",
          "percent": -17.73,
          "r": -0.1773,
          "loss": 0.1773,
          "source_line": 903
        },
        {
          "month": "200010",
          "percent": -6.66,
          "r": -0.0666,
          "loss": 0.0666,
          "source_line": 904
        },
        {
          "month": "200011",
          "percent": -24.28,
          "r": -0.24280000000000002,
          "loss": 0.24280000000000002,
          "source_line": 905
        },
        {
          "month": "200012",
          "percent": -8.29,
          "r": -0.08289999999999999,
          "loss": 0.08289999999999999,
          "source_line": 906
        },
        {
          "month": "200101",
          "percent": 13.93,
          "r": 0.1393,
          "loss": -0.1393,
          "source_line": 907
        },
        {
          "month": "200102",
          "percent": -31.53,
          "r": -0.3153,
          "loss": 0.3153,
          "source_line": 908
        },
        {
          "month": "200103",
          "percent": -14.14,
          "r": -0.1414,
          "loss": 0.1414,
          "source_line": 909
        },
        {
          "month": "200104",
          "percent": 15.93,
          "r": 0.1593,
          "loss": -0.1593,
          "source_line": 910
        },
        {
          "month": "200105",
          "percent": -6.35,
          "r": -0.0635,
          "loss": 0.0635,
          "source_line": 911
        },
        {
          "month": "200106",
          "percent": -1.57,
          "r": -0.015700000000000002,
          "loss": 0.015700000000000002,
          "source_line": 912
        },
        {
          "month": "200107",
          "percent": -4.33,
          "r": -0.0433,
          "loss": 0.0433,
          "source_line": 913
        },
        {
          "month": "200108",
          "percent": -11.16,
          "r": -0.1116,
          "loss": 0.1116,
          "source_line": 914
        },
        {
          "month": "200109",
          "percent": -24.51,
          "r": -0.2451,
          "loss": 0.2451,
          "source_line": 915
        },
        {
          "month": "200110",
          "percent": 19.58,
          "r": 0.19579999999999997,
          "loss": -0.19579999999999997,
          "source_line": 916
        },
        {
          "month": "200111",
          "percent": 20.19,
          "r": 0.20190000000000002,
          "loss": -0.20190000000000002,
          "source_line": 917
        },
        {
          "month": "200112",
          "percent": -3.94,
          "r": -0.0394,
          "loss": 0.0394,
          "source_line": 918
        },
        {
          "month": "200201",
          "percent": 3.35,
          "r": 0.0335,
          "loss": -0.0335,
          "source_line": 919
        },
        {
          "month": "200202",
          "percent": -16.68,
          "r": -0.1668,
          "loss": 0.1668,
          "source_line": 920
        },
        {
          "month": "200203",
          "percent": 9.73,
          "r": 0.0973,
          "loss": -0.0973,
          "source_line": 921
        },
        {
          "month": "200204",
          "percent": -8.52,
          "r": -0.0852,
          "loss": 0.0852,
          "source_line": 922
        },
        {
          "month": "200205",
          "percent": -2.71,
          "r": -0.0271,
          "loss": 0.0271,
          "source_line": 923
        },
        {
          "month": "200206",
          "percent": -18.52,
          "r": -0.1852,
          "loss": 0.1852,
          "source_line": 924
        },
        {
          "month": "200207",
          "percent": -9.2,
          "r": -0.092,
          "loss": 0.092,
          "source_line": 925
        },
        {
          "month": "200208",
          "percent": -3.42,
          "r": -0.0342,
          "loss": 0.0342,
          "source_line": 926
        },
        {
          "month": "200209",
          "percent": -17.48,
          "r": -0.1748,
          "loss": 0.1748,
          "source_line": 927
        },
        {
          "month": "200210",
          "percent": 15.59,
          "r": 0.1559,
          "loss": -0.1559,
          "source_line": 928
        },
        {
          "month": "200211",
          "percent": 21.41,
          "r": 0.2141,
          "loss": -0.2141,
          "source_line": 929
        },
        {
          "month": "200212",
          "percent": -15.94,
          "r": -0.1594,
          "loss": 0.1594,
          "source_line": 930
        },
        {
          "month": "200301",
          "percent": -0.96,
          "r": -0.0096,
          "loss": 0.0096,
          "source_line": 931
        },
        {
          "month": "200302",
          "percent": 3.07,
          "r": 0.030699999999999998,
          "loss": -0.030699999999999998,
          "source_line": 932
        },
        {
          "month": "200303",
          "percent": -2.21,
          "r": -0.022099999999999998,
          "loss": 0.022099999999999998,
          "source_line": 933
        },
        {
          "month": "200304",
          "percent": 10.5,
          "r": 0.105,
          "loss": -0.105,
          "source_line": 934
        },
        {
          "month": "200305",
          "percent": 13.86,
          "r": 0.1386,
          "loss": -0.1386,
          "source_line": 935
        },
        {
          "month": "200306",
          "percent": 0.34,
          "r": 0.0034000000000000002,
          "loss": -0.0034000000000000002,
          "source_line": 936
        },
        {
          "month": "200307",
          "percent": 8.49,
          "r": 0.0849,
          "loss": -0.0849,
          "source_line": 937
        },
        {
          "month": "200308",
          "percent": 8.2,
          "r": 0.08199999999999999,
          "loss": -0.08199999999999999,
          "source_line": 938
        },
        {
          "month": "200309",
          "percent": -2.64,
          "r": -0.0264,
          "loss": 0.0264,
          "source_line": 939
        },
        {
          "month": "200310",
          "percent": 13.09,
          "r": 0.1309,
          "loss": -0.1309,
          "source_line": 940
        },
        {
          "month": "200311",
          "percent": 3.04,
          "r": 0.0304,
          "loss": -0.0304,
          "source_line": 941
        },
        {
          "month": "200312",
          "percent": 0.08,
          "r": 0.0008,
          "loss": -0.0008,
          "source_line": 942
        },
        {
          "month": "200401",
          "percent": 4.85,
          "r": 0.048499999999999995,
          "loss": -0.048499999999999995,
          "source_line": 943
        },
        {
          "month": "200402",
          "percent": -2.72,
          "r": -0.027200000000000002,
          "loss": 0.027200000000000002,
          "source_line": 944
        },
        {
          "month": "200403",
          "percent": -2.52,
          "r": -0.0252,
          "loss": 0.0252,
          "source_line": 945
        },
        {
          "month": "200404",
          "percent": -8.06,
          "r": -0.0806,
          "loss": 0.0806,
          "source_line": 946
        },
        {
          "month": "200405",
          "percent": 6.86,
          "r": 0.06860000000000001,
          "loss": -0.06860000000000001,
          "source_line": 947
        },
        {
          "month": "200406",
          "percent": 1.25,
          "r": 0.0125,
          "loss": -0.0125,
          "source_line": 948
        },
        {
          "month": "200407",
          "percent": -10.33,
          "r": -0.1033,
          "loss": 0.1033,
          "source_line": 949
        },
        {
          "month": "200408",
          "percent": -5.94,
          "r": -0.0594,
          "loss": 0.0594,
          "source_line": 950
        },
        {
          "month": "200409",
          "percent": 2.53,
          "r": 0.0253,
          "loss": -0.0253,
          "source_line": 951
        },
        {
          "month": "200410",
          "percent": 5.51,
          "r": 0.055099999999999996,
          "loss": -0.055099999999999996,
          "source_line": 952
        },
        {
          "month": "200411",
          "percent": 5.22,
          "r": 0.052199999999999996,
          "loss": -0.052199999999999996,
          "source_line": 953
        },
        {
          "month": "200412",
          "percent": 3.03,
          "r": 0.030299999999999997,
          "loss": -0.030299999999999997,
          "source_line": 954
        },
        {
          "month": "200501",
          "percent": -6.28,
          "r": -0.06280000000000001,
          "loss": 0.06280000000000001,
          "source_line": 955
        },
        {
          "month": "200502",
          "percent": 1.75,
          "r": 0.0175,
          "loss": -0.0175,
          "source_line": 956
        },
        {
          "month": "200503",
          "percent": -2.59,
          "r": -0.0259,
          "loss": 0.0259,
          "source_line": 957
        },
        {
          "month": "200504",
          "percent": -4.32,
          "r": -0.0432,
          "loss": 0.0432,
          "source_line": 958
        },
        {
          "month": "200505",
          "percent": 10.34,
          "r": 0.10339999999999999,
          "loss": -0.10339999999999999,
          "source_line": 959
        },
        {
          "month": "200506",
          "percent": -1.13,
          "r": -0.0113,
          "loss": 0.0113,
          "source_line": 960
        },
        {
          "month": "200507",
          "percent": 6.66,
          "r": 0.0666,
          "loss": -0.0666,
          "source_line": 961
        },
        {
          "month": "200508",
          "percent": -1.19,
          "r": -0.011899999999999999,
          "loss": 0.011899999999999999,
          "source_line": 962
        },
        {
          "month": "200509",
          "percent": 1.46,
          "r": 0.0146,
          "loss": -0.0146,
          "source_line": 963
        },
        {
          "month": "200510",
          "percent": -4.44,
          "r": -0.0444,
          "loss": 0.0444,
          "source_line": 964
        },
        {
          "month": "200511",
          "percent": 7.33,
          "r": 0.0733,
          "loss": -0.0733,
          "source_line": 965
        },
        {
          "month": "200512",
          "percent": -1.46,
          "r": -0.0146,
          "loss": 0.0146,
          "source_line": 966
        },
        {
          "month": "200601",
          "percent": 4.79,
          "r": 0.0479,
          "loss": -0.0479,
          "source_line": 967
        },
        {
          "month": "200602",
          "percent": 0.63,
          "r": 0.0063,
          "loss": -0.0063,
          "source_line": 968
        },
        {
          "month": "200603",
          "percent": 3.02,
          "r": 0.0302,
          "loss": -0.0302,
          "source_line": 969
        },
        {
          "month": "200604",
          "percent": -0.27,
          "r": -0.0027,
          "loss": 0.0027,
          "source_line": 970
        },
        {
          "month": "200605",
          "percent": -7.35,
          "r": -0.0735,
          "loss": 0.0735,
          "source_line": 971
        },
        {
          "month": "200606",
          "percent": -3.14,
          "r": -0.031400000000000004,
          "loss": 0.031400000000000004,
          "source_line": 972
        },
        {
          "month": "200607",
          "percent": -4.77,
          "r": -0.04769999999999999,
          "loss": 0.04769999999999999,
          "source_line": 973
        },
        {
          "month": "200608",
          "percent": 9.1,
          "r": 0.091,
          "loss": -0.091,
          "source_line": 974
        },
        {
          "month": "200609",
          "percent": 2.85,
          "r": 0.0285,
          "loss": -0.0285,
          "source_line": 975
        },
        {
          "month": "200610",
          "percent": 2.14,
          "r": 0.021400000000000002,
          "loss": -0.021400000000000002,
          "source_line": 976
        },
        {
          "month": "200611",
          "percent": 4.02,
          "r": 0.04019999999999999,
          "loss": -0.04019999999999999,
          "source_line": 977
        },
        {
          "month": "200612",
          "percent": -1.31,
          "r": -0.0131,
          "loss": 0.0131,
          "source_line": 978
        },
        {
          "month": "200701",
          "percent": 1.15,
          "r": 0.0115,
          "loss": -0.0115,
          "source_line": 979
        },
        {
          "month": "200702",
          "percent": -1.14,
          "r": -0.011399999999999999,
          "loss": 0.011399999999999999,
          "source_line": 980
        },
        {
          "month": "200703",
          "percent": 0.26,
          "r": 0.0026,
          "loss": -0.0026,
          "source_line": 981
        },
        {
          "month": "200704",
          "percent": 5.02,
          "r": 0.050199999999999995,
          "loss": -0.050199999999999995,
          "source_line": 982
        },
        {
          "month": "200705",
          "percent": 4.1,
          "r": 0.040999999999999995,
          "loss": -0.040999999999999995,
          "source_line": 983
        },
        {
          "month": "200706",
          "percent": 2.05,
          "r": 0.020499999999999997,
          "loss": -0.020499999999999997,
          "source_line": 984
        },
        {
          "month": "200707",
          "percent": -0.08,
          "r": -0.0008,
          "loss": 0.0008,
          "source_line": 985
        },
        {
          "month": "200708",
          "percent": 3.67,
          "r": 0.036699999999999997,
          "loss": -0.036699999999999997,
          "source_line": 986
        },
        {
          "month": "200709",
          "percent": 3.73,
          "r": 0.0373,
          "loss": -0.0373,
          "source_line": 987
        },
        {
          "month": "200710",
          "percent": 3.97,
          "r": 0.0397,
          "loss": -0.0397,
          "source_line": 988
        },
        {
          "month": "200711",
          "percent": -7.58,
          "r": -0.0758,
          "loss": 0.0758,
          "source_line": 989
        },
        {
          "month": "200712",
          "percent": 0.39,
          "r": 0.0039000000000000003,
          "loss": -0.0039000000000000003,
          "source_line": 990
        },
        {
          "month": "200801",
          "percent": -14.17,
          "r": -0.1417,
          "loss": 0.1417,
          "source_line": 991
        },
        {
          "month": "200802",
          "percent": -1.75,
          "r": -0.0175,
          "loss": 0.0175,
          "source_line": 992
        },
        {
          "month": "200803",
          "percent": 0.36,
          "r": 0.0036,
          "loss": -0.0036,
          "source_line": 993
        },
        {
          "month": "200804",
          "percent": 6.8,
          "r": 0.068,
          "loss": -0.068,
          "source_line": 994
        },
        {
          "month": "200805",
          "percent": 6.23,
          "r": 0.0623,
          "loss": -0.0623,
          "source_line": 995
        },
        {
          "month": "200806",
          "percent": -9.74,
          "r": -0.0974,
          "loss": 0.0974,
          "source_line": 996
        },
        {
          "month": "200807",
          "percent": 0.3,
          "r": 0.003,
          "loss": -0.003,
          "source_line": 997
        },
        {
          "month": "200808",
          "percent": 2.93,
          "r": 0.029300000000000003,
          "loss": -0.029300000000000003,
          "source_line": 998
        },
        {
          "month": "200809",
          "percent": -15.81,
          "r": -0.15810000000000002,
          "loss": 0.15810000000000002,
          "source_line": 999
        },
        {
          "month": "200810",
          "percent": -17.68,
          "r": -0.17679999999999998,
          "loss": 0.17679999999999998,
          "source_line": 1000
        },
        {
          "month": "200811",
          "percent": -11.63,
          "r": -0.11630000000000001,
          "loss": 0.11630000000000001,
          "source_line": 1001
        },
        {
          "month": "200812",
          "percent": 1.84,
          "r": 0.0184,
          "loss": -0.0184,
          "source_line": 1002
        },
        {
          "month": "200901",
          "percent": -3.08,
          "r": -0.0308,
          "loss": 0.0308,
          "source_line": 1003
        },
        {
          "month": "200902",
          "percent": -6.87,
          "r": -0.0687,
          "loss": 0.0687,
          "source_line": 1004
        },
        {
          "month": "200903",
          "percent": 13.08,
          "r": 0.1308,
          "loss": -0.1308,
          "source_line": 1005
        },
        {
          "month": "200904",
          "percent": 14.28,
          "r": 0.14279999999999998,
          "loss": -0.14279999999999998,
          "source_line": 1006
        },
        {
          "month": "200905",
          "percent": 2.18,
          "r": 0.0218,
          "loss": -0.0218,
          "source_line": 1007
        },
        {
          "month": "200906",
          "percent": 4.55,
          "r": 0.0455,
          "loss": -0.0455,
          "source_line": 1008
        },
        {
          "month": "200907",
          "percent": 10.36,
          "r": 0.1036,
          "loss": -0.1036,
          "source_line": 1009
        },
        {
          "month": "200908",
          "percent": 2.19,
          "r": 0.0219,
          "loss": -0.0219,
          "source_line": 1010
        },
        {
          "month": "200909",
          "percent": 5.61,
          "r": 0.056100000000000004,
          "loss": -0.056100000000000004,
          "source_line": 1011
        },
        {
          "month": "200910",
          "percent": -3.9,
          "r": -0.039,
          "loss": 0.039,
          "source_line": 1012
        },
        {
          "month": "200911",
          "percent": 4.34,
          "r": 0.0434,
          "loss": -0.0434,
          "source_line": 1013
        },
        {
          "month": "200912",
          "percent": 6.63,
          "r": 0.0663,
          "loss": -0.0663,
          "source_line": 1014
        },
        {
          "month": "201001",
          "percent": -8.05,
          "r": -0.0805,
          "loss": 0.0805,
          "source_line": 1015
        },
        {
          "month": "201002",
          "percent": 6.25,
          "r": 0.0625,
          "loss": -0.0625,
          "source_line": 1016
        },
        {
          "month": "201003",
          "percent": 8.19,
          "r": 0.0819,
          "loss": -0.0819,
          "source_line": 1017
        },
        {
          "month": "201004",
          "percent": 3.83,
          "r": 0.0383,
          "loss": -0.0383,
          "source_line": 1018
        },
        {
          "month": "201005",
          "percent": -7.24,
          "r": -0.0724,
          "loss": 0.0724,
          "source_line": 1019
        },
        {
          "month": "201006",
          "percent": -6.05,
          "r": -0.0605,
          "loss": 0.0605,
          "source_line": 1020
        },
        {
          "month": "201007",
          "percent": 6.45,
          "r": 0.0645,
          "loss": -0.0645,
          "source_line": 1021
        },
        {
          "month": "201008",
          "percent": -8.4,
          "r": -0.084,
          "loss": 0.084,
          "source_line": 1022
        },
        {
          "month": "201009",
          "percent": 13.79,
          "r": 0.1379,
          "loss": -0.1379,
          "source_line": 1023
        },
        {
          "month": "201010",
          "percent": 4.48,
          "r": 0.044800000000000006,
          "loss": -0.044800000000000006,
          "source_line": 1024
        },
        {
          "month": "201011",
          "percent": 1.03,
          "r": 0.0103,
          "loss": -0.0103,
          "source_line": 1025
        },
        {
          "month": "201012",
          "percent": 5.2,
          "r": 0.052000000000000005,
          "loss": -0.052000000000000005,
          "source_line": 1026
        },
        {
          "month": "201101",
          "percent": 4.85,
          "r": 0.048499999999999995,
          "loss": -0.048499999999999995,
          "source_line": 1027
        },
        {
          "month": "201102",
          "percent": 3.07,
          "r": 0.030699999999999998,
          "loss": -0.030699999999999998,
          "source_line": 1028
        },
        {
          "month": "201103",
          "percent": -2.5,
          "r": -0.025,
          "loss": 0.025,
          "source_line": 1029
        },
        {
          "month": "201104",
          "percent": 3.05,
          "r": 0.0305,
          "loss": -0.0305,
          "source_line": 1030
        },
        {
          "month": "201105",
          "percent": -1.28,
          "r": -0.0128,
          "loss": 0.0128,
          "source_line": 1031
        },
        {
          "month": "201106",
          "percent": -3.47,
          "r": -0.0347,
          "loss": 0.0347,
          "source_line": 1032
        },
        {
          "month": "201107",
          "percent": -1.57,
          "r": -0.015700000000000002,
          "loss": 0.015700000000000002,
          "source_line": 1033
        },
        {
          "month": "201108",
          "percent": -7.23,
          "r": -0.0723,
          "loss": 0.0723,
          "source_line": 1034
        },
        {
          "month": "201109",
          "percent": -5.34,
          "r": -0.053399999999999996,
          "loss": 0.053399999999999996,
          "source_line": 1035
        },
        {
          "month": "201110",
          "percent": 12.08,
          "r": 0.1208,
          "loss": -0.1208,
          "source_line": 1036
        },
        {
          "month": "201111",
          "percent": -1.99,
          "r": -0.0199,
          "loss": 0.0199,
          "source_line": 1037
        },
        {
          "month": "201112",
          "percent": -0.75,
          "r": -0.0075,
          "loss": 0.0075,
          "source_line": 1038
        },
        {
          "month": "201201",
          "percent": 10.66,
          "r": 0.1066,
          "loss": -0.1066,
          "source_line": 1039
        },
        {
          "month": "201202",
          "percent": 7.37,
          "r": 0.0737,
          "loss": -0.0737,
          "source_line": 1040
        },
        {
          "month": "201203",
          "percent": 5.34,
          "r": 0.053399999999999996,
          "loss": -0.053399999999999996,
          "source_line": 1041
        },
        {
          "month": "201204",
          "percent": -3.26,
          "r": -0.0326,
          "loss": 0.0326,
          "source_line": 1042
        },
        {
          "month": "201205",
          "percent": -8.08,
          "r": -0.0808,
          "loss": 0.0808,
          "source_line": 1043
        },
        {
          "month": "201206",
          "percent": 1.68,
          "r": 0.0168,
          "loss": -0.0168,
          "source_line": 1044
        },
        {
          "month": "201207",
          "percent": 0.71,
          "r": 0.0070999999999999995,
          "loss": -0.0070999999999999995,
          "source_line": 1045
        },
        {
          "month": "201208",
          "percent": 5.4,
          "r": 0.054000000000000006,
          "loss": -0.054000000000000006,
          "source_line": 1046
        },
        {
          "month": "201209",
          "percent": -0.28,
          "r": -0.0028000000000000004,
          "loss": 0.0028000000000000004,
          "source_line": 1047
        },
        {
          "month": "201210",
          "percent": -7.27,
          "r": -0.0727,
          "loss": 0.0727,
          "source_line": 1048
        },
        {
          "month": "201211",
          "percent": 1.68,
          "r": 0.0168,
          "loss": -0.0168,
          "source_line": 1049
        },
        {
          "month": "201212",
          "percent": -0.61,
          "r": -0.0060999999999999995,
          "loss": 0.0060999999999999995,
          "source_line": 1050
        },
        {
          "month": "201301",
          "percent": -0.87,
          "r": -0.0087,
          "loss": 0.0087,
          "source_line": 1051
        },
        {
          "month": "201302",
          "percent": 0.4,
          "r": 0.004,
          "loss": -0.004,
          "source_line": 1052
        },
        {
          "month": "201303",
          "percent": 3.01,
          "r": 0.0301,
          "loss": -0.0301,
          "source_line": 1053
        },
        {
          "month": "201304",
          "percent": -0.86,
          "r": -0.0086,
          "loss": 0.0086,
          "source_line": 1054
        },
        {
          "month": "201305",
          "percent": 5.4,
          "r": 0.054000000000000006,
          "loss": -0.054000000000000006,
          "source_line": 1055
        },
        {
          "month": "201306",
          "percent": -3.39,
          "r": -0.0339,
          "loss": 0.0339,
          "source_line": 1056
        },
        {
          "month": "201307",
          "percent": 7.12,
          "r": 0.0712,
          "loss": -0.0712,
          "source_line": 1057
        },
        {
          "month": "201308",
          "percent": -0.49,
          "r": -0.0049,
          "loss": 0.0049,
          "source_line": 1058
        },
        {
          "month": "201309",
          "percent": 2.67,
          "r": 0.026699999999999998,
          "loss": -0.026699999999999998,
          "source_line": 1059
        },
        {
          "month": "201310",
          "percent": 4.55,
          "r": 0.0455,
          "loss": -0.0455,
          "source_line": 1060
        },
        {
          "month": "201311",
          "percent": 3.6,
          "r": 0.036000000000000004,
          "loss": -0.036000000000000004,
          "source_line": 1061
        },
        {
          "month": "201312",
          "percent": 3.51,
          "r": 0.0351,
          "loss": -0.0351,
          "source_line": 1062
        },
        {
          "month": "201401",
          "percent": -2.79,
          "r": -0.0279,
          "loss": 0.0279,
          "source_line": 1063
        },
        {
          "month": "201402",
          "percent": 4.66,
          "r": 0.0466,
          "loss": -0.0466,
          "source_line": 1064
        },
        {
          "month": "201403",
          "percent": 1.57,
          "r": 0.015700000000000002,
          "loss": -0.015700000000000002,
          "source_line": 1065
        },
        {
          "month": "201404",
          "percent": 0.94,
          "r": 0.009399999999999999,
          "loss": -0.009399999999999999,
          "source_line": 1066
        },
        {
          "month": "201405",
          "percent": 4.43,
          "r": 0.0443,
          "loss": -0.0443,
          "source_line": 1067
        },
        {
          "month": "201406",
          "percent": 3.45,
          "r": 0.0345,
          "loss": -0.0345,
          "source_line": 1068
        },
        {
          "month": "201407",
          "percent": -0.46,
          "r": -0.0046,
          "loss": 0.0046,
          "source_line": 1069
        },
        {
          "month": "201408",
          "percent": 5.13,
          "r": 0.0513,
          "loss": -0.0513,
          "source_line": 1070
        },
        {
          "month": "201409",
          "percent": -1.77,
          "r": -0.0177,
          "loss": 0.0177,
          "source_line": 1071
        },
        {
          "month": "201410",
          "percent": 2.92,
          "r": 0.0292,
          "loss": -0.0292,
          "source_line": 1072
        },
        {
          "month": "201411",
          "percent": 6.47,
          "r": 0.0647,
          "loss": -0.0647,
          "source_line": 1073
        },
        {
          "month": "201412",
          "percent": -1.64,
          "r": -0.016399999999999998,
          "loss": 0.016399999999999998,
          "source_line": 1074
        },
        {
          "month": "201501",
          "percent": -2.26,
          "r": -0.0226,
          "loss": 0.0226,
          "source_line": 1075
        },
        {
          "month": "201502",
          "percent": 8.43,
          "r": 0.0843,
          "loss": -0.0843,
          "source_line": 1076
        },
        {
          "month": "201503",
          "percent": -3.08,
          "r": -0.0308,
          "loss": 0.0308,
          "source_line": 1077
        },
        {
          "month": "201504",
          "percent": -0.06,
          "r": -0.0006,
          "loss": 0.0006,
          "source_line": 1078
        },
        {
          "month": "201505",
          "percent": 4.09,
          "r": 0.0409,
          "loss": -0.0409,
          "source_line": 1079
        },
        {
          "month": "201506",
          "percent": -4.87,
          "r": -0.0487,
          "loss": 0.0487,
          "source_line": 1080
        },
        {
          "month": "201507",
          "percent": -0.81,
          "r": -0.008100000000000001,
          "loss": 0.008100000000000001,
          "source_line": 1081
        },
        {
          "month": "201508",
          "percent": -6.31,
          "r": -0.06309999999999999,
          "loss": 0.06309999999999999,
          "source_line": 1082
        },
        {
          "month": "201509",
          "percent": -1.71,
          "r": -0.0171,
          "loss": 0.0171,
          "source_line": 1083
        },
        {
          "month": "201510",
          "percent": 8.54,
          "r": 0.08539999999999999,
          "loss": -0.08539999999999999,
          "source_line": 1084
        },
        {
          "month": "201511",
          "percent": 0.31,
          "r": 0.0031,
          "loss": -0.0031,
          "source_line": 1085
        },
        {
          "month": "201512",
          "percent": -4.57,
          "r": -0.045700000000000005,
          "loss": 0.045700000000000005,
          "source_line": 1086
        },
        {
          "month": "201601",
          "percent": -7.72,
          "r": -0.07719999999999999,
          "loss": 0.07719999999999999,
          "source_line": 1087
        },
        {
          "month": "201602",
          "percent": 1.45,
          "r": 0.014499999999999999,
          "loss": -0.014499999999999999,
          "source_line": 1088
        },
        {
          "month": "201603",
          "percent": 8.83,
          "r": 0.0883,
          "loss": -0.0883,
          "source_line": 1089
        },
        {
          "month": "201604",
          "percent": -5.42,
          "r": -0.0542,
          "loss": 0.0542,
          "source_line": 1090
        },
        {
          "month": "201605",
          "percent": 5.53,
          "r": 0.0553,
          "loss": -0.0553,
          "source_line": 1091
        },
        {
          "month": "201606",
          "percent": -1.37,
          "r": -0.0137,
          "loss": 0.0137,
          "source_line": 1092
        },
        {
          "month": "201607",
          "percent": 7.98,
          "r": 0.07980000000000001,
          "loss": -0.07980000000000001,
          "source_line": 1093
        },
        {
          "month": "201608",
          "percent": 2.33,
          "r": 0.0233,
          "loss": -0.0233,
          "source_line": 1094
        },
        {
          "month": "201609",
          "percent": 3.99,
          "r": 0.039900000000000005,
          "loss": -0.039900000000000005,
          "source_line": 1095
        },
        {
          "month": "201610",
          "percent": -2.24,
          "r": -0.022400000000000003,
          "loss": 0.022400000000000003,
          "source_line": 1096
        },
        {
          "month": "201611",
          "percent": 2.41,
          "r": 0.0241,
          "loss": -0.0241,
          "source_line": 1097
        },
        {
          "month": "201612",
          "percent": 2.07,
          "r": 0.0207,
          "loss": -0.0207,
          "source_line": 1098
        },
        {
          "month": "201701",
          "percent": 3.28,
          "r": 0.032799999999999996,
          "loss": -0.032799999999999996,
          "source_line": 1099
        },
        {
          "month": "201702",
          "percent": 6.7,
          "r": 0.067,
          "loss": -0.067,
          "source_line": 1100
        },
        {
          "month": "201703",
          "percent": 2.37,
          "r": 0.023700000000000002,
          "loss": -0.023700000000000002,
          "source_line": 1101
        },
        {
          "month": "201704",
          "percent": 0.85,
          "r": 0.0085,
          "loss": -0.0085,
          "source_line": 1102
        },
        {
          "month": "201705",
          "percent": 4.53,
          "r": 0.0453,
          "loss": -0.0453,
          "source_line": 1103
        },
        {
          "month": "201706",
          "percent": -3.37,
          "r": -0.0337,
          "loss": 0.0337,
          "source_line": 1104
        },
        {
          "month": "201707",
          "percent": 3.05,
          "r": 0.0305,
          "loss": -0.0305,
          "source_line": 1105
        },
        {
          "month": "201708",
          "percent": 4.92,
          "r": 0.0492,
          "loss": -0.0492,
          "source_line": 1106
        },
        {
          "month": "201709",
          "percent": 1.07,
          "r": 0.010700000000000001,
          "loss": -0.010700000000000001,
          "source_line": 1107
        },
        {
          "month": "201710",
          "percent": 7.12,
          "r": 0.0712,
          "loss": -0.0712,
          "source_line": 1108
        },
        {
          "month": "201711",
          "percent": 2.52,
          "r": 0.0252,
          "loss": -0.0252,
          "source_line": 1109
        },
        {
          "month": "201712",
          "percent": -0.83,
          "r": -0.0083,
          "loss": 0.0083,
          "source_line": 1110
        },
        {
          "month": "201801",
          "percent": 5.51,
          "r": 0.055099999999999996,
          "loss": -0.055099999999999996,
          "source_line": 1111
        },
        {
          "month": "201802",
          "percent": 1.98,
          "r": 0.019799999999999998,
          "loss": -0.019799999999999998,
          "source_line": 1112
        },
        {
          "month": "201803",
          "percent": -2.71,
          "r": -0.0271,
          "loss": 0.0271,
          "source_line": 1113
        },
        {
          "month": "201804",
          "percent": -2.05,
          "r": -0.020499999999999997,
          "loss": 0.020499999999999997,
          "source_line": 1114
        },
        {
          "month": "201805",
          "percent": 7.79,
          "r": 0.0779,
          "loss": -0.0779,
          "source_line": 1115
        },
        {
          "month": "201806",
          "percent": -2.01,
          "r": -0.020099999999999996,
          "loss": 0.020099999999999996,
          "source_line": 1116
        },
        {
          "month": "201807",
          "percent": 2.76,
          "r": 0.0276,
          "loss": -0.0276,
          "source_line": 1117
        },
        {
          "month": "201808",
          "percent": 9.59,
          "r": 0.0959,
          "loss": -0.0959,
          "source_line": 1118
        },
        {
          "month": "201809",
          "percent": -0.18,
          "r": -0.0018,
          "loss": 0.0018,
          "source_line": 1119
        },
        {
          "month": "201810",
          "percent": -8.18,
          "r": -0.0818,
          "loss": 0.0818,
          "source_line": 1120
        },
        {
          "month": "201811",
          "percent": -4.7,
          "r": -0.047,
          "loss": 0.047,
          "source_line": 1121
        },
        {
          "month": "201812",
          "percent": -9.01,
          "r": -0.0901,
          "loss": 0.0901,
          "source_line": 1122
        },
        {
          "month": "201901",
          "percent": 7.46,
          "r": 0.0746,
          "loss": -0.0746,
          "source_line": 1123
        },
        {
          "month": "201902",
          "percent": 7.38,
          "r": 0.0738,
          "loss": -0.0738,
          "source_line": 1124
        },
        {
          "month": "201903",
          "percent": 4.35,
          "r": 0.0435,
          "loss": -0.0435,
          "source_line": 1125
        },
        {
          "month": "201904",
          "percent": 5.3,
          "r": 0.053,
          "loss": -0.053,
          "source_line": 1126
        },
        {
          "month": "201905",
          "percent": -11.62,
          "r": -0.1162,
          "loss": 0.1162,
          "source_line": 1127
        },
        {
          "month": "201906",
          "percent": 11.16,
          "r": 0.1116,
          "loss": -0.1116,
          "source_line": 1128
        },
        {
          "month": "201907",
          "percent": 3.26,
          "r": 0.0326,
          "loss": -0.0326,
          "source_line": 1129
        },
        {
          "month": "201908",
          "percent": -3.11,
          "r": -0.0311,
          "loss": 0.0311,
          "source_line": 1130
        },
        {
          "month": "201909",
          "percent": 4.23,
          "r": 0.042300000000000004,
          "loss": -0.042300000000000004,
          "source_line": 1131
        },
        {
          "month": "201910",
          "percent": 5.09,
          "r": 0.0509,
          "loss": -0.0509,
          "source_line": 1132
        },
        {
          "month": "201911",
          "percent": 5.02,
          "r": 0.050199999999999995,
          "loss": -0.050199999999999995,
          "source_line": 1133
        },
        {
          "month": "201912",
          "percent": 6.32,
          "r": 0.0632,
          "loss": -0.0632,
          "source_line": 1134
        },
        {
          "month": "202001",
          "percent": 0.97,
          "r": 0.0097,
          "loss": -0.0097,
          "source_line": 1135
        },
        {
          "month": "202002",
          "percent": -9.02,
          "r": -0.0902,
          "loss": 0.0902,
          "source_line": 1136
        },
        {
          "month": "202003",
          "percent": -8.65,
          "r": -0.08650000000000001,
          "loss": 0.08650000000000001,
          "source_line": 1137
        },
        {
          "month": "202004",
          "percent": 13.97,
          "r": 0.13970000000000002,
          "loss": -0.13970000000000002,
          "source_line": 1138
        },
        {
          "month": "202005",
          "percent": 8.02,
          "r": 0.0802,
          "loss": -0.0802,
          "source_line": 1139
        },
        {
          "month": "202006",
          "percent": 6.63,
          "r": 0.0663,
          "loss": -0.0663,
          "source_line": 1140
        },
        {
          "month": "202007",
          "percent": 9.52,
          "r": 0.09519999999999999,
          "loss": -0.09519999999999999,
          "source_line": 1141
        },
        {
          "month": "202008",
          "percent": 11.76,
          "r": 0.1176,
          "loss": -0.1176,
          "source_line": 1142
        },
        {
          "month": "202009",
          "percent": -5.14,
          "r": -0.051399999999999994,
          "loss": 0.051399999999999994,
          "source_line": 1143
        },
        {
          "month": "202010",
          "percent": -3.18,
          "r": -0.0318,
          "loss": 0.0318,
          "source_line": 1144
        },
        {
          "month": "202011",
          "percent": 11.73,
          "r": 0.1173,
          "loss": -0.1173,
          "source_line": 1145
        },
        {
          "month": "202012",
          "percent": 7.21,
          "r": 0.0721,
          "loss": -0.0721,
          "source_line": 1146
        },
        {
          "month": "202101",
          "percent": 1.26,
          "r": 0.0126,
          "loss": -0.0126,
          "source_line": 1147
        },
        {
          "month": "202102",
          "percent": -1.9,
          "r": -0.019,
          "loss": 0.019,
          "source_line": 1148
        },
        {
          "month": "202103",
          "percent": 1.69,
          "r": 0.0169,
          "loss": -0.0169,
          "source_line": 1149
        },
        {
          "month": "202104",
          "percent": 4.07,
          "r": 0.0407,
          "loss": -0.0407,
          "source_line": 1150
        },
        {
          "month": "202105",
          "percent": -0.76,
          "r": -0.0076,
          "loss": 0.0076,
          "source_line": 1151
        },
        {
          "month": "202106",
          "percent": 7.42,
          "r": 0.0742,
          "loss": -0.0742,
          "source_line": 1152
        },
        {
          "month": "202107",
          "percent": 3.59,
          "r": 0.0359,
          "loss": -0.0359,
          "source_line": 1153
        },
        {
          "month": "202108",
          "percent": 4.03,
          "r": 0.0403,
          "loss": -0.0403,
          "source_line": 1154
        },
        {
          "month": "202109",
          "percent": -5.82,
          "r": -0.0582,
          "loss": 0.0582,
          "source_line": 1155
        },
        {
          "month": "202110",
          "percent": 7.15,
          "r": 0.07150000000000001,
          "loss": -0.07150000000000001,
          "source_line": 1156
        },
        {
          "month": "202111",
          "percent": 8.76,
          "r": 0.0876,
          "loss": -0.0876,
          "source_line": 1157
        },
        {
          "month": "202112",
          "percent": 4.38,
          "r": 0.0438,
          "loss": -0.0438,
          "source_line": 1158
        },
        {
          "month": "202201",
          "percent": -7.72,
          "r": -0.07719999999999999,
          "loss": 0.07719999999999999,
          "source_line": 1159
        },
        {
          "month": "202202",
          "percent": -2.66,
          "r": -0.026600000000000002,
          "loss": 0.026600000000000002,
          "source_line": 1160
        },
        {
          "month": "202203",
          "percent": 4.35,
          "r": 0.0435,
          "loss": -0.0435,
          "source_line": 1161
        },
        {
          "month": "202204",
          "percent": -12.41,
          "r": -0.1241,
          "loss": 0.1241,
          "source_line": 1162
        },
        {
          "month": "202205",
          "percent": -0.86,
          "r": -0.0086,
          "loss": 0.0086,
          "source_line": 1163
        },
        {
          "month": "202206",
          "percent": -10.18,
          "r": -0.1018,
          "loss": 0.1018,
          "source_line": 1164
        },
        {
          "month": "202207",
          "percent": 15.79,
          "r": 0.15789999999999998,
          "loss": -0.15789999999999998,
          "source_line": 1165
        },
        {
          "month": "202208",
          "percent": -5.86,
          "r": -0.058600000000000006,
          "loss": 0.058600000000000006,
          "source_line": 1166
        },
        {
          "month": "202209",
          "percent": -11.67,
          "r": -0.1167,
          "loss": 0.1167,
          "source_line": 1167
        },
        {
          "month": "202210",
          "percent": 8.83,
          "r": 0.0883,
          "loss": -0.0883,
          "source_line": 1168
        },
        {
          "month": "202211",
          "percent": 5.19,
          "r": 0.0519,
          "loss": -0.0519,
          "source_line": 1169
        },
        {
          "month": "202212",
          "percent": -9.11,
          "r": -0.0911,
          "loss": 0.0911,
          "source_line": 1170
        },
        {
          "month": "202301",
          "percent": 9.85,
          "r": 0.09849999999999999,
          "loss": -0.09849999999999999,
          "source_line": 1171
        },
        {
          "month": "202302",
          "percent": 1.36,
          "r": 0.013600000000000001,
          "loss": -0.013600000000000001,
          "source_line": 1172
        },
        {
          "month": "202303",
          "percent": 9.85,
          "r": 0.09849999999999999,
          "loss": -0.09849999999999999,
          "source_line": 1173
        },
        {
          "month": "202304",
          "percent": -1.83,
          "r": -0.0183,
          "loss": 0.0183,
          "source_line": 1174
        },
        {
          "month": "202305",
          "percent": 8.26,
          "r": 0.08259999999999999,
          "loss": -0.08259999999999999,
          "source_line": 1175
        },
        {
          "month": "202306",
          "percent": 8.02,
          "r": 0.0802,
          "loss": -0.0802,
          "source_line": 1176
        },
        {
          "month": "202307",
          "percent": 3.49,
          "r": 0.0349,
          "loss": -0.0349,
          "source_line": 1177
        },
        {
          "month": "202308",
          "percent": -1.52,
          "r": -0.0152,
          "loss": 0.0152,
          "source_line": 1178
        },
        {
          "month": "202309",
          "percent": -7.91,
          "r": -0.0791,
          "loss": 0.0791,
          "source_line": 1179
        },
        {
          "month": "202310",
          "percent": -3.88,
          "r": -0.0388,
          "loss": 0.0388,
          "source_line": 1180
        },
        {
          "month": "202311",
          "percent": 12.13,
          "r": 0.1213,
          "loss": -0.1213,
          "source_line": 1181
        },
        {
          "month": "202312",
          "percent": 6.29,
          "r": 0.0629,
          "loss": -0.0629,
          "source_line": 1182
        },
        {
          "month": "202401",
          "percent": 2.34,
          "r": 0.023399999999999997,
          "loss": -0.023399999999999997,
          "source_line": 1183
        },
        {
          "month": "202402",
          "percent": 7.98,
          "r": 0.07980000000000001,
          "loss": -0.07980000000000001,
          "source_line": 1184
        },
        {
          "month": "202403",
          "percent": 2.95,
          "r": 0.029500000000000002,
          "loss": -0.029500000000000002,
          "source_line": 1185
        },
        {
          "month": "202404",
          "percent": -3.53,
          "r": -0.0353,
          "loss": 0.0353,
          "source_line": 1186
        },
        {
          "month": "202405",
          "percent": 13.4,
          "r": 0.134,
          "loss": -0.134,
          "source_line": 1187
        },
        {
          "month": "202406",
          "percent": 7.77,
          "r": 0.07769999999999999,
          "loss": -0.07769999999999999,
          "source_line": 1188
        },
        {
          "month": "202407",
          "percent": 0.33,
          "r": 0.0033,
          "loss": -0.0033,
          "source_line": 1189
        },
        {
          "month": "202408",
          "percent": 1.46,
          "r": 0.0146,
          "loss": -0.0146,
          "source_line": 1190
        },
        {
          "month": "202409",
          "percent": 2.24,
          "r": 0.022400000000000003,
          "loss": -0.022400000000000003,
          "source_line": 1191
        },
        {
          "month": "202410",
          "percent": 0.0,
          "r": 0.0,
          "loss": -0.0,
          "source_line": 1192
        },
        {
          "month": "202411",
          "percent": 3.5,
          "r": 0.035,
          "loss": -0.035,
          "source_line": 1193
        },
        {
          "month": "202412",
          "percent": 2.5,
          "r": 0.025,
          "loss": -0.025,
          "source_line": 1194
        },
        {
          "month": "202501",
          "percent": -4.44,
          "r": -0.0444,
          "loss": 0.0444,
          "source_line": 1195
        },
        {
          "month": "202502",
          "percent": -0.74,
          "r": -0.0074,
          "loss": 0.0074,
          "source_line": 1196
        },
        {
          "month": "202503",
          "percent": -9.82,
          "r": -0.09820000000000001,
          "loss": 0.09820000000000001,
          "source_line": 1197
        },
        {
          "month": "202504",
          "percent": -1.17,
          "r": -0.011699999999999999,
          "loss": 0.011699999999999999,
          "source_line": 1198
        },
        {
          "month": "202505",
          "percent": 9.29,
          "r": 0.0929,
          "loss": -0.0929,
          "source_line": 1199
        },
        {
          "month": "202506",
          "percent": 10.8,
          "r": 0.10800000000000001,
          "loss": -0.10800000000000001,
          "source_line": 1200
        },
        {
          "month": "202507",
          "percent": 6.13,
          "r": 0.0613,
          "loss": -0.0613,
          "source_line": 1201
        },
        {
          "month": "202508",
          "percent": 3.4,
          "r": 0.034,
          "loss": -0.034,
          "source_line": 1202
        },
        {
          "month": "202509",
          "percent": 8.15,
          "r": 0.0815,
          "loss": -0.0815,
          "source_line": 1203
        },
        {
          "month": "202510",
          "percent": 9.17,
          "r": 0.0917,
          "loss": -0.0917,
          "source_line": 1204
        },
        {
          "month": "202511",
          "percent": -2.88,
          "r": -0.0288,
          "loss": 0.0288,
          "source_line": 1205
        },
        {
          "month": "202512",
          "percent": -0.66,
          "r": -0.0066,
          "loss": 0.0066,
          "source_line": 1206
        }
      ],
      "ar_initial": 1.4678084774843276,
      "ar_values": [
        0.24729236767568918,
        -0.3395520151562399,
        -0.8978418780885042,
        -1.3766551891090015,
        0.9463806979489443,
        0.025552784136162354,
        -0.9240498655813658,
        -1.1238679711245143,
        -0.07853464259677878,
        1.1053496333499915,
        0.7145140389242101,
        0.287086263827503,
        0.47287598744803755,
        -0.2735314634117238,
        0.9261294111355965,
        1.68632341600118,
        2.080338704898275,
        1.1259772172033011,
        0.000882654417010631,
        0.17851756396085766,
        0.7633769100793537,
        1.106619464795716,
        0.8090302564399173,
        -0.12682873967550223,
        -0.06461579602218817,
        0.20471603610279693,
        1.7148437272964518,
        1.1203812506751354,
        0.5489533533291326,
        -0.16352962190107145,
        -1.0958347012116796,
        -1.715419540771383,
        -0.07839477098306935,
        -0.9407261929939468,
        -0.8359497650204326,
        0.5196506489629688,
        -0.41695320119723134,
        0.6582394997777312,
        1.104277416882406,
        1.9236452609196473,
        1.5369156490006015,
        0.44041201782284556,
        0.71360856269822,
        1.6139812468981574,
        0.5093168437079882,
        1.9886942910484162,
        0.5208961955250253,
        -0.7190032808559146,
        -1.2243003603885656,
        -0.47249454652992384,
        -1.0592213915620126,
        -0.8407816247257757,
        -1.5556343455882204,
        -1.5073413346402442,
        -0.5057441094603383,
        -1.8185780541820669,
        -1.8079057496606319,
        -0.37984289831030227,
        -0.2750652297332207,
        0.06858759825061797,
        -0.35661924734479905,
        -1.766650006369224,
        -1.4769552813682711,
        -0.184905219525221,
        -0.10095343021948577,
        -0.9699214232134097,
        -2.25173739249977,
        -1.8370804030765484,
        -3.0592749535031136,
        -2.8720034409295705,
        -0.7153410416977724,
        -0.7893872620445852,
        0.4618526341354836,
        0.6324005741838452,
        0.23358232549568728,
        -0.07015975546730932,
        0.099966703570398,
        0.4836468223838239,
        0.44059646647858114,
        1.0057228055431806,
        -1.0143076751008895,
        -1.9404100795339778,
        -2.0361355218229873,
        -1.0251773051852937,
        0.6043335575779746,
        1.6388715455147969,
        0.22008055987412478,
        0.05258466443088054,
        -0.1413553416436702,
        0.12377493301613356,
        -0.7442187622751439,
        -0.1850110492753011,
        -1.5103318436479396,
        -2.265148954878473,
        -1.9500845825304636,
        -2.001126778241684,
        -0.9712024276141664,
        -1.647615326062371,
        0.22081815142653638,
        0.8216648230063887,
        -0.2614076490985134,
        0.49476676522017193,
        -1.5522782897689773,
        -1.1312807013614736,
        -2.6607994348431334,
        -1.5110353802081775,
        -1.386961240705161,
        -0.2016247984585816,
        -1.3065077516585604,
        -0.5659156101818886,
        0.23388583349066622,
        0.5316213961266583,
        -0.02204070471225439,
        0.14334906685702345,
        0.188882034498342,
        0.22013972855502129,
        1.588104468592142,
        0.7066768536157895,
        -0.4658713179930762,
        -0.46283443252824646,
        0.33809442037884474,
        -0.39269906292677614,
        -1.2471904592926575,
        -0.036215588029540946,
        -0.46738908627613873,
        -0.48054619229808393,
        -0.5695640866644195,
        -0.582252878664366,
        -0.0826115469000332,
        0.5119484023457026,
        0.9951050430009296,
        -0.1705844868878027,
        0.020990020288215394,
        0.7151565315040811,
        -0.4237136492980895,
        -1.8125396561024216,
        -1.2297145031325254,
        -1.0455851501644409,
        -1.9796670376312735,
        -2.1765345323878105,
        -0.6478506903487806,
        -1.2076573757258027,
        0.05106989987951549,
        0.2918459550378708,
        -0.8266611140146634,
        -0.9792911945700764,
        0.6650134861352835,
        -0.24604000735631837,
        -0.9164177102836155,
        -1.6303385063641138,
        -2.087696741300862,
        -1.7036509969639257,
        -0.9010777620624153,
        -0.7489904606646715,
        -1.196268143232699,
        -1.6034595373700258,
        -1.1334450111065757,
        -0.8712678843447713,
        -1.3212161923059602,
        -0.38951431509413703,
        0.7765530867276557,
        -0.3788947624777417,
        1.9947979650326522,
        0.3913546640542451,
        -1.50368992064196,
        -1.0047177256443365,
        -2.0309243230339313,
        -0.29798314122715963,
        0.03609201057232711,
        0.5248786922217739,
        0.8675715313443966,
        0.3758870817011428,
        -0.5881337352640444,
        -0.21386832677275486,
        1.1229473304705424,
        0.27141640674223055,
        0.48995067755110155,
        1.0132013251840752,
        1.1211625868460904,
        1.6512192502590715,
        0.6481052387129773,
        -0.6167350405009836,
        -0.38412410210141307,
        0.016012368414951378,
        0.04963576623632737,
        -0.8398464350106499,
        -1.2167797010267567,
        0.9563261854766261,
        0.29679268890323346,
        1.17010045953775,
        0.6951996558854316,
        1.0008218519573204,
        0.4513487913706354,
        -0.5505777987964156,
        0.9528507881025365,
        0.707687328449,
        0.9699386454842849,
        0.26153126818349637,
        -0.6821239070431576,
        1.6623980485940641,
        1.3633513326024604,
        -0.3936834419947701,
        -0.7691321630802732,
        -0.20991475633692885,
        0.09116517480257585,
        0.33557923473200824,
        -0.010279613405664578,
        0.4580839044276248,
        -0.2555873859657411,
        -0.49321107953715826,
        -1.4526948587963893,
        -0.6040072107105283,
        1.310064145287785,
        0.8256025520452865,
        1.0250484479273205,
        0.4970189772308432,
        0.4195821383612386,
        -0.26791677085735743,
        0.6255825088272806,
        1.4962851469206533,
        0.6308608490628236,
        0.8921555720264889,
        0.3815147832725908,
        0.37650697073698125,
        0.27304369654895283,
        -0.06899979945352064,
        -1.1928025288942967,
        -0.6816993940003659,
        -0.5101016412047087,
        -0.3391922378701343,
        -1.0609231184642014,
        -1.6625887312324672,
        -0.5664759366977248,
        -0.36238322370516207,
        -0.48508880899379003,
        0.16926048308148167,
        -1.5408088447203943,
        -0.693103104166346,
        -0.1254789588036574,
        0.8485691428207836,
        0.7062660340118085,
        0.5187367402913818,
        1.5336654955383127,
        0.9673888660818409,
        -0.31408631715399626,
        0.8029172709404927,
        -0.21085965580768162,
        -0.26968343055086214,
        -0.07319859710081855,
        0.3171570859690745,
        0.38673836276227047,
        -0.5787613657547549,
        0.6661056273512371,
        -0.5458370033164519,
        0.23117101253059946,
        -1.0360043681453894,
        -0.5624639536167422,
        -0.8826574724291854,
        0.07586975935699536,
        0.6237549120904492,
        -0.545966899950597,
        -0.25025855636919003,
        -0.44631668721810813,
        -0.09269366498539944,
        0.5622951822627746,
        0.8266035285836226,
        0.6459845000206704,
        2.407153951413701,
        1.6097871506014139,
        0.4396099741738101,
        0.46138705868979385,
        0.8631491719406967,
        -0.07111923657365893,
        -0.2710054833594304,
        -1.4941978611580606,
        -0.11866392184436325,
        0.2683625599080055,
        -0.20939111306012045,
        -1.6173736646721737,
        -0.4827413897017029,
        0.8355065763321778,
        0.65567050123268,
        0.6559178465756539,
        0.9136943409889056,
        1.3447742558180424,
        0.2735931607337674,
        0.8043892635631636,
        -1.1374363342111338,
        -0.28683033483420023,
        -0.35162959641001806,
        -0.4725558724511243,
        1.3541634132232245,
        1.3562140971549481,
        0.2155364680185976,
        0.12228477284781115,
        1.1629121850821695,
        0.38097192273357144,
        -0.4724273412374144,
        0.18069615243400228,
        0.3472786175773215,
        1.2720415967184486,
        -0.33455883039350753,
        1.0629114914842208,
        1.10071952208102,
        0.4440183032422035,
        1.8651753413935772,
        2.7165863468611127,
        0.9898053767684747,
        0.9468552096014784,
        1.9084086037050105,
        1.8146367519328197,
        0.5491116978253633,
        -1.275310257564434,
        -0.16337681772232926,
        -0.6710583985102296,
        -0.6117588838416184,
        -0.6951593144633863,
        -1.9877158550779641,
        -1.3577164417661256,
        -0.20513161524136936,
        0.08856593029656643,
        1.4035454814655917,
        -0.10269074668880163,
        -0.36682953627336295,
        -1.4227647109850148,
        0.09987642269926678,
        1.1499407660522543,
        1.4188750444422564,
        0.43990632967384125,
        0.19282215604856004,
        -1.225491573417922,
        -0.7388942179237046,
        -0.16938453865905984,
        0.3127972778276633,
        0.6113529596184348,
        1.529227453258823,
        -0.38998610264072664,
        -1.0530061406767348,
        0.4173429237244983,
        0.9379214826035338,
        0.3136719996609859,
        1.085023837752695,
        0.04737742981973114,
        0.304859152622271,
        -1.2652120603947064,
        0.5175629349613393,
        0.6602204746097096,
        1.4198172777216942,
        0.42683180003965876,
        0.9019114893940287,
        0.3818076373241359,
        -0.844991582529192,
        -0.7110927927134456,
        0.21490398499531155,
        -0.06770485489986378,
        -0.3961259675051881,
        -0.983905393593864,
        -1.5284204227634746,
        -0.27842880605573517,
        0.5939937879563909,
        1.4785711333872538,
        0.37052336463098157,
        -0.03392529133212105,
        0.31169538492478555,
        -0.8229734647119996,
        0.5648260418603298,
        0.5258481676847166,
        2.9538383230654226,
        2.4878123715424287,
        -0.32407157638508277,
        -1.328694708674314,
        -1.4056762239012732,
        -1.3412652265747018,
        -1.224310119373479,
        1.5090108176339965,
        -0.36029625434408574,
        -0.49402789064078084,
        -0.7699712153635092,
        -0.7568042771344872,
        0.4431305792556511,
        -0.14124774438335158,
        -0.2467278642473224,
        0.15840338896211562,
        0.41232408336945,
        0.09362822646921126,
        -0.7513370329891919,
        -1.117077601584361,
        -0.6568689262032886,
        0.8590992195788418,
        -0.1839745103145235,
        0.3012412638718728,
        -0.6149651394073016,
        -0.1558598548166698,
        0.20802940381561202,
        0.05567293734558866,
        -1.648086003411409,
        -1.2931328527905093,
        0.20119802767332562,
        -0.5034243181169704,
        0.0375455768178648,
        -0.3305993011473592,
        -0.38387274085675827,
        0.13753895897722485,
        1.277192863868665,
        1.4834518371264056,
        0.6399206325171067,
        0.5734258443470708,
        -0.25276518037492324,
        0.5525523377937074,
        0.6485478947412062,
        0.16584333880260813,
        -0.42604204926565536,
        -0.3594393985481775,
        0.584974836786534,
        0.6923812547776895,
        0.807566598191416,
        -1.4484267323786373,
        -0.8069181794547005,
        -0.6623715596951014,
        -0.25220239092241836,
        -1.728007948963533,
        -0.9911917617459745,
        -0.659956691620897,
        -0.16692487536424752,
        0.2246078399096343,
        1.2404499005949319,
        0.5175992616305352,
        -0.21101002052592593,
        1.1181257094296937,
        -0.23608727087917303,
        0.2306544473242039,
        1.4754075323587466
      ],
      "toy": {
        "identity": "无量纲教学构造，不是市场观测",
        "values": [
          0,
          0,
          0,
          0,
          0,
          6
        ],
        "block_length": 3,
        "original_mean": 1,
        "exact_conditional_center": 0.5,
        "exact_conditional_variance": 0.375
      }
    },
    "outputs": {
      "experiment_id": "EXP-BOOT-01",
      "config": {
        "experiment_id": "EXP-BOOT-01",
        "repetitions": 5000,
        "iid_seed": 1901,
        "moving_block_seed": 1902,
        "block_lengths": [
          3,
          6,
          12
        ],
        "default_block_length": 6,
        "percentile_levels": [
          0.025,
          0.975
        ],
        "percentile_method": "linear",
        "se_ddof": 1,
        "index_base": 0,
        "moving_block_algorithm": "均匀有放回抽起点0..n-l；每块保留连续l项，拼接ceil(n/l)块后截取前n项；不循环绕回",
        "seed_reset": "每个设计重新初始化指定种子；真实收益与AR(1)复用同一组抽样索引；不同块长分别重置1902",
        "ar1": {
          "seed": 1910,
          "rho": 0.6,
          "innovation_variance": 0.64,
          "n": 432,
          "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
          "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
          "unit": "无量纲的教学模拟变量"
        }
      },
      "AR1": {
        "config": {
          "seed": 1910,
          "rho": 0.6,
          "innovation_variance": 0.64,
          "n": 432,
          "initial_distribution": "X0 ~ N(0,1)，与后续独立创新独立",
          "draw_order": "Generator(PCG64(1910))先standard_normal()取X0，再standard_normal(432)乘sqrt(0.64)取创新；保存X1..X432",
          "unit": "无量纲的教学模拟变量"
        },
        "X0": 1.4678084774843276,
        "sample_mean": -0.05561958489307564,
        "sample_sd": 0.9744542646704172,
        "model_mean": 0.0,
        "model_marginal_variance": 1.0,
        "exact_finite_n_sample_mean_variance": 0.009219071502057611,
        "exact_finite_n_sample_mean_SE": 0.096015996073871,
        "iid_counterfactual_SE_for_variance_1": 0.048112522432468816
      },
      "series": {
        "French_BusEq": {
          "unit": "monthly decimal return",
          "designs": [
            {
              "method": "iid",
              "block_length": null,
              "B": 5000,
              "seed": 1901,
              "n": 432,
              "original_sample_mean": 0.013886342592592592,
              "bootstrap_mean_of_means": 0.013898207638888889,
              "bootstrap_SE": 0.0035285634950972433,
              "percentile_95_interval": [
                0.00697949074074074,
                0.020692962962962958
              ],
              "exact_conditional_resampling_center": 0.013886342592592592,
              "exact_conditional_resampling_SE": 0.0035025083553881352,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.0074389943050459095,
              "resampling_center_minus_original_mean": 0.0
            },
            {
              "method": "moving_block",
              "block_length": 3,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": 0.013886342592592592,
              "bootstrap_mean_of_means": 0.013984987407407407,
              "bootstrap_SE": 0.003565264010786091,
              "percentile_95_interval": [
                0.006828124999999999,
                0.02074227430555555
              ],
              "exact_conditional_resampling_center": 0.013970697674418607,
              "exact_conditional_resampling_SE": 0.003548406359510234,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.004750766842325227,
              "resampling_center_minus_original_mean": 8.435508182601421e-05
            },
            {
              "method": "moving_block",
              "block_length": 6,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": 0.013886342592592592,
              "bootstrap_mean_of_means": 0.01387384101851852,
              "bootstrap_SE": 0.0036986457176410798,
              "percentile_95_interval": [
                0.006649438657407408,
                0.02090615162037036
              ],
              "exact_conditional_resampling_center": 0.013803708040593285,
              "exact_conditional_resampling_SE": 0.0036113240893080175,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.024179947900991206,
              "resampling_center_minus_original_mean": -8.263455199930721e-05
            },
            {
              "method": "moving_block",
              "block_length": 12,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": 0.013886342592592592,
              "bootstrap_mean_of_means": 0.013793640046296294,
              "bootstrap_SE": 0.0037955376138197857,
              "percentile_95_interval": [
                0.005921608796296295,
                0.021007829861111108
              ],
              "exact_conditional_resampling_center": 0.013730463182897864,
              "exact_conditional_resampling_SE": 0.0037499768463182784,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.012149613015941307,
              "resampling_center_minus_original_mean": -0.00015587940969472892
            }
          ]
        },
        "simulated_AR1": {
          "unit": "dimensionless simulated variable",
          "designs": [
            {
              "method": "iid",
              "block_length": null,
              "B": 5000,
              "seed": 1901,
              "n": 432,
              "original_sample_mean": -0.05561958489307564,
              "bootstrap_mean_of_means": -0.05612870133298568,
              "bootstrap_SE": 0.04624076788830656,
              "percentile_95_interval": [
                -0.14533262243579023,
                0.03254600084993952
              ],
              "exact_conditional_resampling_center": -0.05561958489307564,
              "exact_conditional_resampling_SE": 0.04682915797422228,
              "finite_B_SE_relative_difference_from_exact_conditional": -0.012564609558848083,
              "resampling_center_minus_original_mean": 0.0
            },
            {
              "method": "moving_block",
              "block_length": 3,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": -0.05561958489307564,
              "bootstrap_mean_of_means": -0.05794880337663453,
              "bootstrap_SE": 0.06510086450471249,
              "percentile_95_interval": [
                -0.18472380403705843,
                0.0706219085403846
              ],
              "exact_conditional_resampling_center": -0.05846471647570767,
              "exact_conditional_resampling_SE": 0.06519620273923855,
              "finite_B_SE_relative_difference_from_exact_conditional": -0.0014623280270997796,
              "resampling_center_minus_original_mean": -0.0028451315826320267
            },
            {
              "method": "moving_block",
              "block_length": 6,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": -0.05561958489307564,
              "bootstrap_mean_of_means": -0.0570049419652368,
              "bootstrap_SE": 0.07577485215711521,
              "percentile_95_interval": [
                -0.20609711656998075,
                0.08985227621071178
              ],
              "exact_conditional_resampling_center": -0.058220295684175444,
              "exact_conditional_resampling_SE": 0.07519114243777843,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.007763011711383605,
              "resampling_center_minus_original_mean": -0.002600710791099803
            },
            {
              "method": "moving_block",
              "block_length": 12,
              "B": 5000,
              "seed": 1902,
              "n": 432,
              "original_sample_mean": -0.05561958489307564,
              "bootstrap_mean_of_means": -0.057889919987945015,
              "bootstrap_SE": 0.08368447834029598,
              "percentile_95_interval": [
                -0.22660800500811165,
                0.10467902745219997
              ],
              "exact_conditional_resampling_center": -0.05941968515501624,
              "exact_conditional_resampling_SE": 0.08280077561519829,
              "finite_B_SE_relative_difference_from_exact_conditional": 0.010672638251657762,
              "resampling_center_minus_original_mean": -0.003800100261940602
            }
          ]
        }
      }
    },
    "algorithm": "iid 1901，MBB1902；各设计重置；非循环起点0..n-ell，拼接连续块，432可被3/6/12整除；数据分支共用索引；B=5000，SE ddof=1，端点linear. 精确条件中心/SE由候选块和求出；AR1910先X0再创新.",
    "boundaries": [
      "真实过程推断依赖额外条件，本课只证有限重抽身份",
      "非循环MBB中心可能偏移",
      "linear端点不等于inverted_cdf",
      "AR单位独立于真实收益",
      "B有限误差和数据n有限误差分开",
      "一般不整除n的设计未在冻结实验中使用"
    ],
    "static_equivalent": {
      "reader_anchor": "qt19-results",
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
- [Backtesting Value-at-Risk and Expected Shortfall in the Presence of Estimation Error](https://papers.tinbergen.nl/19058.pdf): 只采用估计风险预测时需要把参数估计步骤纳入后续评价这一引言范围机制. 主篇不转述特定实证优劣或拒绝率.2019与2023是不同版本，未逐式核等.
- [Forecasting: Principles and Practice (3e), §12.5](https://otexts.com/fpp3/bootstrap.html): 连续块可保留块内局部顺序；FPP3示例针对STL余项、再组合与bagging. 本课原收益非循环MBB为明确另述算法，有限条件中心/SE自行推导；不以该示例证明一般bootstrap一致性.
- [Bootstrap — STATS 202](https://web.stanford.edu/class/stats202/notes/Resampling/Bootstrap.html): 经验分布有放回重抽、估计量标准误与交叉验证任务区别. 仅采用对应单元，不把网页广泛的可适用性说明当作金融序列一致性定理.
- [Forecasting: Principles and Practice (3e), §5.10](https://otexts.com/fpp3/tscv.html): 滚动预测起点的信息边界；只用作bootstrap均值区间不等于未来预测验证的区分.
- [French Data Library: Current Research Returns](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html): Data Library说明自2025-01发布起使用CIZ文件生成美国研究收益，并说明每次更新会重建完整收益历史；CIZ与旧FIZ的月收益复合/股息再投资安排不同. 本课432月绑定一个202607数据库快照，不能拼接为前段FIZ后段CIZ，也不能称为逐月当时可见数据.

本批读取范围：同版本数据和回溯重建历史的区别.
- [QT-C 冻结输入：BusEq 月收益、离散支付与重抽结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv): 原源CSV首个value-weighted monthly区块BusEq，199001–202512、原行775–1206共432月，缺失0. 归档源链接本身可变；实际随包为逐字节核验的432行提取及配置，结果由同样冻结算法在作者沙盒复算. 原全行业ZIP不在此包内. MC/AR是教学模拟而非市场资料.

## Content relations
```json
[
  {
    "from": "zh-qt19",
    "relation": "part_of",
    "to": "quant-estimation",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt19",
    "relation": "requires",
    "to": "zh-qt04",
    "reason": "当前学习任务确实调用该能力",
    "required_competence": "经验分布、月收益单位和样本均值/标准差"
  },
  {
    "from": "zh-qt19",
    "relation": "requires",
    "to": "zh-qt12",
    "reason": "当前学习任务确实调用该能力",
    "required_competence": "SE、Monte Carlo近似误差与模型条件"
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-BOOT",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "Cross-validation vs. the Bootstrap；Resampling the data from the true distribution；Computing the standard error；In reality, we only have n samples；Comparing Bootstrap sampling to sampling from the true distribution",
    "scope": "经验分布有放回重抽、估计量标准误与交叉验证任务区别. 仅采用对应单元，不把网页广泛的可适用性说明当作金融序列一致性定理."
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-BLOCK",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§12.5 Bootstrapping time series (完整单元)；Bagged forecasts（仅定位边界，不采用效果结论）",
    "scope": "连续块可保留块内局部顺序；FPP3示例针对STL余项、再组合与bagging. 本课原收益非循环MBB为明确另述算法，有限条件中心/SE自行推导；不以该示例证明一般bootstrap一致性."
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-CV",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§5.10 Time series cross-validation；rolling forecasting origin、单步/多步例",
    "scope": "滚动预测起点的信息边界；只用作bootstrap均值区间不等于未来预测验证的区分."
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-FRENCH",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "Current Research Returns 开头生产格式说明；历史重建说明：全部历史随数据更新重建",
    "scope": "Data Library说明自2025-01发布起使用CIZ文件生成美国研究收益，并说明每次更新会重建完整收益历史；CIZ与旧FIZ的月收益复合/股息再投资安排不同. 本课432月绑定一个202607数据库快照，不能拼接为前段FIZ后段CIZ，也不能称为逐月当时可见数据."
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-FROZEN",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "source CSV title line11/header12, BusEq index23 including date；selected source rows775–1206；data/experiment-config.json；data/results.json: returns, Monte_Carlo, bootstrap",
    "scope": "原源CSV首个value-weighted monthly区块BusEq，199001–202512、原行775–1206共432月，缺失0. 归档源链接本身可变；实际随包为逐字节核验的432行提取及配置，结果由同样冻结算法在作者沙盒复算. 原全行业ZIP不在此包内. MC/AR是教学模拟而非市场资料."
  },
  {
    "from": "zh-qt19",
    "relation": "supported_by",
    "to": "QTC-BDK",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§1 Introduction 完整单元，印刷pp.2–5 / PDF pp.4–7",
    "scope": "只采用估计风险预测时需要把参数估计步骤纳入后续评价这一引言范围机制. 主篇不转述特定实证优劣或拒绝率. 2019与2023是不同版本，未逐式核等."
  },
  {
    "from": "qt19-results",
    "relation": "illustrated_by",
    "to": "EXP-BOOT-01",
    "reason": "识别样本/条件重抽/真实过程三层分布，重建MBB有限中心与SE，并区分均值区间和下一期预测区间."
  }
]
```

## Related entries

## Optional reading path
理解模型并亲手算: step 5/9
重建条件重抽分布，区分估计误差、模拟误差与下一期波动.
明确估计不确定性后，建立预测目标、损失函数与可复算基线.
Next: [预测目标、正则化与模型复杂度](https://ou-liu-red-sugar.github.io/zh/notebook/prediction-regularization-complexity/)
