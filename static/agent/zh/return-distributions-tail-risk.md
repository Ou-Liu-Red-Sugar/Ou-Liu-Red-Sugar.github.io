# 收益分布、尾部与风险度量

从损失的广义逆分位数与尾部概率质量出发，复算202607重建历史中BusEq的月度VaR/ES，并区分经验统计量与未来风险.

Entry: zh-qt04 | Node: QT04 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 从广义逆定义推导含原子分布的VaR与ES，重算432月BusEq样本中21个完整尾部点与边界0.6权重，比较窗口和删点扰动. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

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
      "source_id": "QTC-ES",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/cond-mat/0104295v5",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2 conventions; Definitions2.1/2.2 p.3, Definition2.6 p.5; Proposition3.2及证明p.6",
        "scope": "完整定义、原文损益下尾约定、分位积分证明",
        "purpose": "重建L=-X、p=1-alpha转换与边界概率质量"
      },
      "supports": "支持分位数、ES的原子边界与分位积分. 原文X为损益、alpha为下尾质量，正文显式采用L=-X、p=1-alpha. 本站有限样本逐格公式由同一定义重建；不把一般coherence或一致性证明算入本课.",
      "title": "On the coherence of Expected Shortfall",
      "authors": [
        "Carlo Acerbi",
        "Dirk Tasche"
      ],
      "version": "arXiv:cond-mat/0104295v5；提交2002-05-02，文内日期2002-04-19"
    },
    {
      "source_id": "QTC-FRENCH",
      "access": {
        "kind": "html_full_text",
        "uri": "https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Current Research Returns与历史重建说明",
        "scope": "所用数据生产格式/整段历史重建段",
        "purpose": "不要把冻结历史写成FIZ/CIZ拼接或PIT数据"
      },
      "supports": "Data Library说明自2025-01发布起使用CIZ文件生成美国研究收益，并说明每次更新会重建完整收益历史；CIZ与旧FIZ的月收益复合/股息再投资安排不同. 本课432月绑定一个202607数据库快照，不能拼接为前段FIZ后段CIZ，也不能称为逐月当时可见数据.",
      "title": "French Data Library: Current Research Returns",
      "authors": [
        "Kenneth R. French"
      ],
      "version": "在线说明，2026-09-21访问"
    },
    {
      "source_id": "QTC-FRENCH30",
      "access": {
        "kind": "html_full_text",
        "uri": "https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Monthly Returns与Construction",
        "scope": "完整对应条目",
        "purpose": "识别行业组合与月度数据来源"
      },
      "supports": "行业组合、Monthly Returns与Construction口径；用于标识BusEq不是一家公司或一只可直接交易的基金.",
      "title": "30 Industry Portfolios",
      "authors": [
        "Kenneth R. French"
      ],
      "version": "在线详情；数据快照202607"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-QT-C-review-v2",
    "experiment": {
      "id": "EXP-RETURNS-01",
      "title": "经验损失分布与分位点边界质量",
      "anchor": "qt04-sample",
      "description": "在有原子质量的分布和432月经验样本中正确计算VaR/ES，解释对象、单位与窗口变化.",
      "inputs": {
        "config": {
          "experiment_id": "EXP-RETURNS-01",
          "loss_definition": "L_t = -r_t",
          "sample_sd_ddof": 1,
          "quantile_method": "inverted_cdf",
          "return_quantile_levels": [
            0.01,
            0.05,
            0.25,
            0.5,
            0.75,
            0.95,
            0.99
          ],
          "tail_levels": [
            0.5,
            0.9,
            0.95,
            0.975,
            0.99
          ],
          "default_tail_level": 0.95,
          "annualized": false,
          "atom_example": {
            "losses": [
              0,
              1,
              1,
              1,
              10
            ],
            "probabilities": [
              0.2,
              0.2,
              0.2,
              0.2,
              0.2
            ],
            "p": 0.7
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
        "examples": {
          "losses": [
            0,
            1,
            1,
            1,
            10
          ],
          "probabilities": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "p": 0.8,
          "expected_VaR": 1,
          "expected_ES": 10
        }
      },
      "outputs": {
        "config": {
          "experiment_id": "EXP-RETURNS-01",
          "loss_definition": "L_t = -r_t",
          "sample_sd_ddof": 1,
          "quantile_method": "inverted_cdf",
          "return_quantile_levels": [
            0.01,
            0.05,
            0.25,
            0.5,
            0.75,
            0.95,
            0.99
          ],
          "tail_levels": [
            0.5,
            0.9,
            0.95,
            0.975,
            0.99
          ],
          "default_tail_level": 0.95,
          "annualized": false,
          "atom_example": {
            "losses": [
              0,
              1,
              1,
              1,
              10
            ],
            "probabilities": [
              0.2,
              0.2,
              0.2,
              0.2,
              0.2
            ],
            "p": 0.7
          }
        },
        "default": {
          "n": 432,
          "start": "199001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.013886342592592592,
          "sample_standard_deviation": 0.07288267292421713,
          "sample_variance": 0.005311884012578413,
          "empirical_distribution_standard_deviation": 0.07279826910560112,
          "minimum": {
            "value": -0.3153,
            "months": [
              "200102"
            ]
          },
          "maximum": {
            "value": 0.24719999999999998,
            "months": [
              "200002"
            ]
          },
          "return_quantiles": {
            "0.01": -0.1773,
            "0.05": -0.10679999999999999,
            "0.25": -0.0269,
            "0.5": 0.0168,
            "0.75": 0.056100000000000004,
            "0.95": 0.1309,
            "0.99": 0.18899999999999997
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.0168,
              "ES": 0.04158796296296296,
              "ES_quantile_integral_check": 0.04158796296296295,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.4976851851851852,
              "VaR_atom_probability": 0.004629629629629629,
              "included_VaR_atom_probability": 0.002314814814814825,
              "included_fraction_of_VaR_atom": 0.5000000000000022,
              "naive_conditional_mean_L_ge_VaR": 0.041318894009216595
            },
            {
              "p": 0.9,
              "VaR": 0.0758,
              "ES": 0.12407083333333335,
              "ES_quantile_integral_check": 0.1240708333333333,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09953703703703703,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0004629629629629428,
              "included_fraction_of_VaR_atom": 0.1999999999999913,
              "naive_conditional_mean_L_ge_VaR": 0.12319318181818185
            },
            {
              "p": 0.95,
              "VaR": 0.10679999999999999,
              "ES": 0.16058240740740737,
              "ES_quantile_integral_check": 0.16058240740740726,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.048611111111111105,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0013888888888889395,
              "included_fraction_of_VaR_atom": 0.6000000000000218,
              "naive_conditional_mean_L_ge_VaR": 0.1596045454545455
            },
            {
              "p": 0.975,
              "VaR": 0.15810000000000002,
              "ES": 0.19859999999999994,
              "ES_quantile_integral_check": 0.19859999999999978,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.023148148148148147,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0018518518518518753,
              "included_fraction_of_VaR_atom": 0.8000000000000101,
              "naive_conditional_mean_L_ge_VaR": 0.1978636363636364
            },
            {
              "p": 0.99,
              "VaR": 0.1773,
              "ES": 0.24192962962962958,
              "ES_quantile_integral_check": 0.2419296296296292,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.009259259259259259,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0007407407407407501,
              "included_fraction_of_VaR_atom": 0.32000000000000406,
              "naive_conditional_mean_L_ge_VaR": 0.23314000000000001
            }
          ]
        },
        "window_sensitivity": [
          {
            "n": 432,
            "start": "199001",
            "end": "202512",
            "unit": "monthly decimal return; not annualized",
            "sample_mean": 0.013886342592592592,
            "sample_standard_deviation": 0.07288267292421713,
            "sample_variance": 0.005311884012578413,
            "empirical_distribution_standard_deviation": 0.07279826910560112,
            "minimum": {
              "value": -0.3153,
              "months": [
                "200102"
              ]
            },
            "maximum": {
              "value": 0.24719999999999998,
              "months": [
                "200002"
              ]
            },
            "return_quantiles": {
              "0.01": -0.1773,
              "0.05": -0.10679999999999999,
              "0.25": -0.0269,
              "0.5": 0.0168,
              "0.75": 0.056100000000000004,
              "0.95": 0.1309,
              "0.99": 0.18899999999999997
            },
            "loss_tail_measures": [
              {
                "p": 0.5,
                "VaR": -0.0168,
                "ES": 0.04158796296296296,
                "ES_quantile_integral_check": 0.04158796296296295,
                "upper_tail_probability": 0.5,
                "strictly_above_VaR_probability": 0.4976851851851852,
                "VaR_atom_probability": 0.004629629629629629,
                "included_VaR_atom_probability": 0.002314814814814825,
                "included_fraction_of_VaR_atom": 0.5000000000000022,
                "naive_conditional_mean_L_ge_VaR": 0.041318894009216595
              },
              {
                "p": 0.9,
                "VaR": 0.0758,
                "ES": 0.12407083333333335,
                "ES_quantile_integral_check": 0.1240708333333333,
                "upper_tail_probability": 0.09999999999999998,
                "strictly_above_VaR_probability": 0.09953703703703703,
                "VaR_atom_probability": 0.0023148148148148147,
                "included_VaR_atom_probability": 0.0004629629629629428,
                "included_fraction_of_VaR_atom": 0.1999999999999913,
                "naive_conditional_mean_L_ge_VaR": 0.12319318181818185
              },
              {
                "p": 0.95,
                "VaR": 0.10679999999999999,
                "ES": 0.16058240740740737,
                "ES_quantile_integral_check": 0.16058240740740726,
                "upper_tail_probability": 0.050000000000000044,
                "strictly_above_VaR_probability": 0.048611111111111105,
                "VaR_atom_probability": 0.0023148148148148147,
                "included_VaR_atom_probability": 0.0013888888888889395,
                "included_fraction_of_VaR_atom": 0.6000000000000218,
                "naive_conditional_mean_L_ge_VaR": 0.1596045454545455
              },
              {
                "p": 0.975,
                "VaR": 0.15810000000000002,
                "ES": 0.19859999999999994,
                "ES_quantile_integral_check": 0.19859999999999978,
                "upper_tail_probability": 0.025000000000000022,
                "strictly_above_VaR_probability": 0.023148148148148147,
                "VaR_atom_probability": 0.0023148148148148147,
                "included_VaR_atom_probability": 0.0018518518518518753,
                "included_fraction_of_VaR_atom": 0.8000000000000101,
                "naive_conditional_mean_L_ge_VaR": 0.1978636363636364
              },
              {
                "p": 0.99,
                "VaR": 0.1773,
                "ES": 0.24192962962962958,
                "ES_quantile_integral_check": 0.2419296296296292,
                "upper_tail_probability": 0.010000000000000009,
                "strictly_above_VaR_probability": 0.009259259259259259,
                "VaR_atom_probability": 0.0023148148148148147,
                "included_VaR_atom_probability": 0.0007407407407407501,
                "included_fraction_of_VaR_atom": 0.32000000000000406,
                "naive_conditional_mean_L_ge_VaR": 0.23314000000000001
              }
            ]
          },
          {
            "n": 312,
            "start": "200001",
            "end": "202512",
            "unit": "monthly decimal return; not annualized",
            "sample_mean": 0.01035576923076923,
            "sample_standard_deviation": 0.07523936785119568,
            "sample_variance": 0.0056609624746475394,
            "empirical_distribution_standard_deviation": 0.07511869517072214,
            "minimum": {
              "value": -0.3153,
              "months": [
                "200102"
              ]
            },
            "maximum": {
              "value": 0.24719999999999998,
              "months": [
                "200002"
              ]
            },
            "return_quantiles": {
              "0.01": -0.1852,
              "0.05": -0.1162,
              "0.25": -0.0308,
              "0.5": 0.0168,
              "0.75": 0.054000000000000006,
              "0.95": 0.1284,
              "0.99": 0.19579999999999997
            },
            "loss_tail_measures": [
              {
                "p": 0.5,
                "VaR": -0.0168,
                "ES": 0.046257692307692305,
                "ES_quantile_integral_check": 0.04625769230769229,
                "upper_tail_probability": 0.5,
                "strictly_above_VaR_probability": 0.49679487179487175,
                "VaR_atom_probability": 0.00641025641025641,
                "included_VaR_atom_probability": 0.0032051282051282493,
                "included_fraction_of_VaR_atom": 0.5000000000000069,
                "naive_conditional_mean_L_ge_VaR": 0.04585605095541402
              },
              {
                "p": 0.9,
                "VaR": 0.0808,
                "ES": 0.13413333333333333,
                "ES_quantile_integral_check": 0.13413333333333335,
                "upper_tail_probability": 0.09999999999999998,
                "strictly_above_VaR_probability": 0.09935897435897435,
                "VaR_atom_probability": 0.003205128205128205,
                "included_VaR_atom_probability": 0.0006410256410256249,
                "included_fraction_of_VaR_atom": 0.19999999999999496,
                "naive_conditional_mean_L_ge_VaR": 0.13280000000000003
              },
              {
                "p": 0.95,
                "VaR": 0.1162,
                "ES": 0.17381538461538457,
                "ES_quantile_integral_check": 0.17381538461538446,
                "upper_tail_probability": 0.050000000000000044,
                "strictly_above_VaR_probability": 0.04807692307692307,
                "VaR_atom_probability": 0.003205128205128205,
                "included_VaR_atom_probability": 0.0019230769230769718,
                "included_fraction_of_VaR_atom": 0.6000000000000152,
                "naive_conditional_mean_L_ge_VaR": 0.172375
              },
              {
                "p": 0.975,
                "VaR": 0.1668,
                "ES": 0.21163333333333328,
                "ES_quantile_integral_check": 0.2116333333333332,
                "upper_tail_probability": 0.025000000000000022,
                "strictly_above_VaR_probability": 0.022435897435897436,
                "VaR_atom_probability": 0.003205128205128205,
                "included_VaR_atom_probability": 0.0025641025641025862,
                "included_fraction_of_VaR_atom": 0.8000000000000069,
                "naive_conditional_mean_L_ge_VaR": 0.21051250000000002
              },
              {
                "p": 0.99,
                "VaR": 0.1852,
                "ES": 0.2645589743589743,
                "ES_quantile_integral_check": 0.264558974358974,
                "upper_tail_probability": 0.010000000000000009,
                "strictly_above_VaR_probability": 0.009615384615384616,
                "VaR_atom_probability": 0.003205128205128205,
                "included_VaR_atom_probability": 0.00038461538461539296,
                "included_fraction_of_VaR_atom": 0.1200000000000026,
                "naive_conditional_mean_L_ge_VaR": 0.2471
              }
            ]
          },
          {
            "n": 192,
            "start": "201001",
            "end": "202512",
            "unit": "monthly decimal return; not annualized",
            "sample_mean": 0.017413541666666667,
            "sample_standard_deviation": 0.057584721322580884,
            "sample_variance": 0.003316000129799302,
            "empirical_distribution_standard_deviation": 0.05743456533995822,
            "minimum": {
              "value": -0.1241,
              "months": [
                "202204"
              ]
            },
            "maximum": {
              "value": 0.15789999999999998,
              "months": [
                "202207"
              ]
            },
            "return_quantiles": {
              "0.01": -0.1167,
              "0.05": -0.084,
              "0.25": -0.020099999999999996,
              "0.5": 0.0233,
              "0.75": 0.055099999999999996,
              "0.95": 0.10800000000000001,
              "0.99": 0.13970000000000002
            },
            "loss_tail_measures": [
              {
                "p": 0.5,
                "VaR": -0.023399999999999997,
                "ES": 0.029142708333333333,
                "ES_quantile_integral_check": 0.029142708333333336,
                "upper_tail_probability": 0.5,
                "strictly_above_VaR_probability": 0.5,
                "VaR_atom_probability": 0.005208333333333333,
                "included_VaR_atom_probability": 0.0,
                "included_fraction_of_VaR_atom": 0.0,
                "naive_conditional_mean_L_ge_VaR": 0.028601030927835044
              },
              {
                "p": 0.9,
                "VaR": 0.06309999999999999,
                "ES": 0.08882916666666668,
                "ES_quantile_integral_check": 0.0888291666666667,
                "upper_tail_probability": 0.09999999999999998,
                "strictly_above_VaR_probability": 0.09895833333333333,
                "VaR_atom_probability": 0.005208333333333333,
                "included_VaR_atom_probability": 0.001041666666666649,
                "included_fraction_of_VaR_atom": 0.19999999999999662,
                "naive_conditional_mean_L_ge_VaR": 0.0878
              },
              {
                "p": 0.95,
                "VaR": 0.084,
                "ES": 0.10055208333333332,
                "ES_quantile_integral_check": 0.1005520833333333,
                "upper_tail_probability": 0.050000000000000044,
                "strictly_above_VaR_probability": 0.046875,
                "VaR_atom_probability": 0.005208333333333333,
                "included_VaR_atom_probability": 0.0031250000000000444,
                "included_fraction_of_VaR_atom": 0.6000000000000085,
                "naive_conditional_mean_L_ge_VaR": 0.09988999999999998
              },
              {
                "p": 0.975,
                "VaR": 0.09820000000000001,
                "ES": 0.11194999999999997,
                "ES_quantile_integral_check": 0.11195000000000001,
                "upper_tail_probability": 0.025000000000000022,
                "strictly_above_VaR_probability": 0.020833333333333332,
                "VaR_atom_probability": 0.005208333333333333,
                "included_VaR_atom_probability": 0.00416666666666669,
                "included_fraction_of_VaR_atom": 0.8000000000000045,
                "naive_conditional_mean_L_ge_VaR": 0.1114
              },
              {
                "p": 0.99,
                "VaR": 0.1167,
                "ES": 0.12055416666666666,
                "ES_quantile_integral_check": 0.12055416666666671,
                "upper_tail_probability": 0.010000000000000009,
                "strictly_above_VaR_probability": 0.005208333333333333,
                "VaR_atom_probability": 0.005208333333333333,
                "included_VaR_atom_probability": 0.004791666666666676,
                "included_fraction_of_VaR_atom": 0.9200000000000018,
                "naive_conditional_mean_L_ge_VaR": 0.12040000000000001
              }
            ]
          },
          {
            "n": 72,
            "start": "202001",
            "end": "202512",
            "unit": "monthly decimal return; not annualized",
            "sample_mean": 0.022730555555555556,
            "sample_standard_deviation": 0.06798525448842584,
            "sample_variance": 0.004621994827856025,
            "empirical_distribution_standard_deviation": 0.0675114838767962,
            "minimum": {
              "value": -0.1241,
              "months": [
                "202204"
              ]
            },
            "maximum": {
              "value": 0.15789999999999998,
              "months": [
                "202207"
              ]
            },
            "return_quantiles": {
              "0.01": -0.1241,
              "0.05": -0.09820000000000001,
              "0.25": -0.026600000000000002,
              "0.5": 0.025,
              "0.75": 0.07980000000000001,
              "0.95": 0.1213,
              "0.99": 0.15789999999999998
            },
            "loss_tail_measures": [
              {
                "p": 0.5,
                "VaR": -0.029500000000000002,
                "ES": 0.03310277777777778,
                "ES_quantile_integral_check": 0.03310277777777778,
                "upper_tail_probability": 0.5,
                "strictly_above_VaR_probability": 0.5,
                "VaR_atom_probability": 0.013888888888888888,
                "included_VaR_atom_probability": 0.0,
                "included_fraction_of_VaR_atom": 0.0,
                "naive_conditional_mean_L_ge_VaR": 0.03141081081081082
              },
              {
                "p": 0.9,
                "VaR": 0.0791,
                "ES": 0.1006138888888889,
                "ES_quantile_integral_check": 0.10061388888888889,
                "upper_tail_probability": 0.09999999999999998,
                "strictly_above_VaR_probability": 0.09722222222222221,
                "VaR_atom_probability": 0.013888888888888888,
                "included_VaR_atom_probability": 0.002777777777777768,
                "included_fraction_of_VaR_atom": 0.1999999999999993,
                "naive_conditional_mean_L_ge_VaR": 0.09846250000000001
              },
              {
                "p": 0.95,
                "VaR": 0.09820000000000001,
                "ES": 0.11153333333333332,
                "ES_quantile_integral_check": 0.11153333333333332,
                "upper_tail_probability": 0.050000000000000044,
                "strictly_above_VaR_probability": 0.041666666666666664,
                "VaR_atom_probability": 0.013888888888888888,
                "included_VaR_atom_probability": 0.00833333333333338,
                "included_fraction_of_VaR_atom": 0.6000000000000034,
                "naive_conditional_mean_L_ge_VaR": 0.1102
              },
              {
                "p": 0.975,
                "VaR": 0.1167,
                "ES": 0.12081111111111112,
                "ES_quantile_integral_check": 0.12081111111111108,
                "upper_tail_probability": 0.025000000000000022,
                "strictly_above_VaR_probability": 0.013888888888888888,
                "VaR_atom_probability": 0.013888888888888888,
                "included_VaR_atom_probability": 0.011111111111111134,
                "included_fraction_of_VaR_atom": 0.8000000000000017,
                "naive_conditional_mean_L_ge_VaR": 0.1204
              },
              {
                "p": 0.99,
                "VaR": 0.1241,
                "ES": 0.12410000000000002,
                "ES_quantile_integral_check": 0.12410000000000002,
                "upper_tail_probability": 0.010000000000000009,
                "strictly_above_VaR_probability": 0.0,
                "VaR_atom_probability": 0.013888888888888888,
                "included_VaR_atom_probability": 0.010000000000000009,
                "included_fraction_of_VaR_atom": 0.7200000000000006,
                "naive_conditional_mean_L_ge_VaR": 0.1241
              }
            ]
          }
        ],
        "atom_example": {
          "inputs": {
            "losses": [
              0,
              1,
              1,
              1,
              10
            ],
            "probabilities": [
              0.2,
              0.2,
              0.2,
              0.2,
              0.2
            ],
            "p": 0.7
          },
          "outputs": {
            "p": 0.7,
            "VaR": 1.0,
            "ES": 6.999999999999999,
            "ES_quantile_integral_check": 6.999999999999998,
            "upper_tail_probability": 0.30000000000000004,
            "strictly_above_VaR_probability": 0.2,
            "VaR_atom_probability": 0.6000000000000001,
            "included_VaR_atom_probability": 0.10000000000000003,
            "included_fraction_of_VaR_atom": 0.16666666666666669,
            "naive_conditional_mean_L_ge_VaR": 3.25
          }
        },
        "delete_one_worst_month_sensitivity": {
          "identity": "只作具名教学扰动，不改变主样本或bootstrap",
          "removed_month": "200102",
          "removed_return": -0.3153,
          "statistics": {
            "n": 431,
            "start": "199001",
            "end": "202512",
            "unit": "monthly decimal return; not annualized",
            "sample_mean": 0.014650116009280742,
            "sample_standard_deviation": 0.07121547613183658,
            "sample_variance": 0.005071644040684186,
            "empirical_distribution_standard_deviation": 0.0711328115930852,
            "minimum": {
              "value": -0.2451,
              "months": [
                "200109"
              ]
            },
            "maximum": {
              "value": 0.24719999999999998,
              "months": [
                "200002"
              ]
            },
            "return_quantiles": {
              "0.01": -0.17679999999999998,
              "0.05": -0.1033,
              "0.25": -0.026600000000000002,
              "0.5": 0.0168,
              "0.75": 0.059800000000000006,
              "0.95": 0.1309,
              "0.99": 0.18899999999999997
            },
            "loss_tail_measures": [
              {
                "p": 0.5,
                "VaR": -0.0168,
                "ES": 0.04018236658932715,
                "ES_quantile_integral_check": 0.04018236658932716,
                "upper_tail_probability": 0.5,
                "strictly_above_VaR_probability": 0.49651972157772617,
                "VaR_atom_probability": 0.004640371229698376,
                "included_VaR_atom_probability": 0.0034802784222738303,
                "included_fraction_of_VaR_atom": 0.7500000000000104,
                "naive_conditional_mean_L_ge_VaR": 0.040050462962962954
              },
              {
                "p": 0.9,
                "VaR": 0.0754,
                "ES": 0.11862505800464039,
                "ES_quantile_integral_check": 0.11862505800464039,
                "upper_tail_probability": 0.09999999999999998,
                "strictly_above_VaR_probability": 0.09976798143851508,
                "VaR_atom_probability": 0.002320185614849188,
                "included_VaR_atom_probability": 0.00023201856148490074,
                "included_fraction_of_VaR_atom": 0.09999999999999222,
                "naive_conditional_mean_L_ge_VaR": 0.11774090909090912
              },
              {
                "p": 0.95,
                "VaR": 0.1033,
                "ES": 0.15094269141531316,
                "ES_quantile_integral_check": 0.15094269141531327,
                "upper_tail_probability": 0.050000000000000044,
                "strictly_above_VaR_probability": 0.048723897911832945,
                "VaR_atom_probability": 0.002320185614849188,
                "included_VaR_atom_probability": 0.0012761020881670998,
                "included_fraction_of_VaR_atom": 0.55000000000002,
                "naive_conditional_mean_L_ge_VaR": 0.14996818181818186
              },
              {
                "p": 0.975,
                "VaR": 0.1417,
                "ES": 0.18292505800464035,
                "ES_quantile_integral_check": 0.18292505800464043,
                "upper_tail_probability": 0.025000000000000022,
                "strictly_above_VaR_probability": 0.02320185614849188,
                "VaR_atom_probability": 0.002320185614849188,
                "included_VaR_atom_probability": 0.0017981438515081438,
                "included_fraction_of_VaR_atom": 0.77500000000001,
                "naive_conditional_mean_L_ge_VaR": 0.18208181818181818
              },
              {
                "p": 0.99,
                "VaR": 0.17679999999999998,
                "ES": 0.21002505800464033,
                "ES_quantile_integral_check": 0.2100250580046405,
                "upper_tail_probability": 0.010000000000000009,
                "strictly_above_VaR_probability": 0.009280742459396751,
                "VaR_atom_probability": 0.002320185614849188,
                "included_VaR_atom_probability": 0.0007192575406032575,
                "included_fraction_of_VaR_atom": 0.310000000000004,
                "naive_conditional_mean_L_ge_VaR": 0.20543999999999998
              }
            ]
          }
        }
      },
      "algorithm": "广义逆经验分位数(inverted_cdf)；上尾ES分位积分=严格上尾+部分边界质量；等权数据分母n；样本SD ddof=1，经验SD ddof=0. 删除最差月仅对完整窗口生成新扰动，不改主数据.",
      "boundaries": [
        "0<p<1；ES理论L1条件；有符号损失允许负VaR",
        "经验结果不保证未来概率",
        "p变化和窗口变化同步更新所有量",
        "删除扰动不是清洗"
      ],
      "static_equivalent": {
        "reader_anchor": "qt04-sample",
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
        "scope": "records and returns",
        "purpose": "需要完整图形或索引时按JSON路径读取；不以全部随机数组作为每次口头讲解必读"
      }
    ],
    "reading_base": "本站同源冻结输入；通过给定完整公开链接读取. 数据官网的当前更新不替换此 202607 快照.",
    "reproduction_source": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/compute/reproduce.py",
    "input_csv": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv",
    "configuration": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/experiment-config.json"
  },
  "learning_task": "从广义逆定义推导含原子分布的VaR与ES，重算432月BusEq样本中21个完整尾部点与边界0.6权重，比较窗口和删点扰动.",
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
令月度简单收益为 $R$，损失率为 $L=-R$. 均值、标准差、VaR 和 ES 分别描述中心、离散程度、分位阈值与固定尾部质量的平均；这些量必须相对于明确的模型分布或经验分布计算.

<a id="qt04-objects"></a>
## 收益与损失分布

令 $R$ 为一个月的简单收益率，内部按小数表示，例如 $-0.1$ 表示亏损 10%. 定义损失率 $L=-R$，于是损失越大越坏；赚钱时 $L$ 可以为负. 以下概率与期望均相对于明确选定的分布.

模型分布F定义总体风险函数值，历史等权经验分布 $\widehat F_n$ 定义样本风险函数值. 下一期损失另由未来分布决定；将经验分布用于预测，需要说明过程及估计假设.

$\mathbb{E}|R|<\infty$ 保证有限期望，二阶矩有限则有有限方差 $\operatorname{Var}(R)=\mathbb{E}[(R-\mathbb{E}R)^2]$. 固定样本使用

$$
\bar r=\frac1n\sum_{t=1}^nr_t,\qquad s^2=\frac1{n-1}\sum_{t=1}^n(r_t-\bar r)^2.
$$

 经验分布方差用分母n，故 $s^2=\frac n{n-1}\widehat\sigma_{\rm emp}^2$. 无偏性另依赖抽样假设.

恒定损失2.6与下文五点分布有相同均值，但后者可损失10. 尾部量保留均值未区分的信息.

<a id="qt04-quantile-es"></a>
## 分位数与尾部均值

固定 $0<p<1$，采用广义逆

$$
q_p(L)=\inf\{x:F_L(x)\ge p\},\qquad \operatorname{VaR}_p(L)=q_p(L).
$$

 分布有原子时，边界约定影响分位点. VaR是分位阈值，可取负值，未描述阈值以上损失的大小.

在 $L\in L^1$ 下，定义**预期短缺（Expected Shortfall，ES）**
\[
\mathrm{ES}_p(L)=\frac1{1-p}\int_p^1 q_u(L)\,du.
\]
这相当于取最坏的 $1-p$ 概率质量，按质量平均其损失. 定义对离散、连续和混合分布都适用. Acerbi–Tasche 原文用损益 $X$ 和下尾质量 $\alpha$；这里用 $L=-X$、$p=1-\alpha$，把记号统一为损失上尾. [^es]

记 $v=q_p(L)$. 因为
$P(L>v)\le1-p\le P(L\ge v)$，先取完所有严格超过 $v$ 的结果，再从 $L=v$ 的质量中补足
$b=(1-p)-P(L>v)$. 于是
\[
\mathrm{ES}_p(L)
=\frac{\mathbb{E}[L\mathbf1_{\{L>v\}}]+v\,b}{1-p},
\qquad 0\le b\le P(L=v).
\]
在分位数图上，$L=v$ 对应一段高度为 $v$ 的水平阶梯；积分只取这段阶梯落在 $(p,1)$ 内的长度. 边界原子按所需概率质量截取，损失值保持不变.

现在手算一个教学分布. 五个等可能结果的损失为 $0,1,1,1,10$，单位暂不指定为货币. 取 $p=.7$，则 $F_L(0)=.2$、$F_L(1)=.8$，所以 VaR 为 1. 最坏 30% 的质量包括损失 10 的全部 20%，再从损失 1 的 60% 原子里取 10%：
\[
\mathrm{ES}_{.7}=\frac{.2\times10+.1\times1}{.3}=7.
\]
这里取的是损失 1 的原子质量的 $1/6$. 反过来，把所有 $L\ge1$ 的结果平均，会得到
$\mathbb{E}[L\mid L\ge1]=(.6\times1+.2\times10)/.8=3.25$.
该条件平均覆盖80%质量，ES则固定最坏30%.

<a id="qt04-sample"></a>
## 432个月经验样本

本例采用 Kenneth French 30 Industry Portfolios 的 **BusEq、value-weighted monthly** 数据，取 1990-01 至 2025-12，共 432 个连续月份. 原文件声明使用 **202607 CRSP database**；这是数据库版本，不是这 432 个月最初各自的公布时间. 样本对应原 CSV 第 775–1206 行，原单位为百分数，读入后除以 100，损失取相反数；两个缺失码 `-99.99`、`-999` 在目标窗口均未出现，未插值、未删除极端月. [^data]

202607快照按French自2025年1月采用的CIZ流程重建全部历史. 本例使用单一重建版本，未还原每月当时可得的数据.[^french]

默认样本结果如下，全部为月度口径，不年化.

| 量 | 结果 | 对象 |
|---|---:|---|
| 算术平均收益 | 约 1.389% | 固定 432 月的平均 |
| 样本标准差 $s$（分母 $n-1$） | 约 7.288% | 收益的样本离散程度 |
| 经验分布标准差（分母 $n$） | 约 7.28% | 等权经验分布的标准差 |
| 损失 VaR95 | 10.68% | 经验损失分布的 95% 分位点 |
| 损失 ES95 | 约 16.058% | 最坏 5% 经验质量的平均损失 |

把损失降序排列为
$l_{[1]}\ge\cdots\ge l_{[n]}$，令 $m=n(1-p)=k+\theta$，其中 $k=\lfloor m\rfloor$、$0\le\theta<1$. 每个排序格子的质量是 $1/n$，因此分位数积分直接化为
\[
\widehat{\mathrm{ES}}_p=
\frac{\sum_{j=1}^k l_{[j]}+\theta\,l_{[k+1]}}{m}.
\]
$\theta=0$ 时不再加入下一项. 这正是经验分位阶梯函数的积分.

这里 $m=432\times.05=21.6$：完整取最坏 21 个月，再取边界月 0.6 份**经验概率质量**. 边界月是 1997-10，损失为 10.68%；最坏 21 项损失按百分数读数相加为 **340.45**. 故
\[
\widehat{\mathrm{ES}}_{.95}
=\frac{340.45+.6\times10.68}{21.6}\%
\approx16.058\%.
\]
分子先用同一百分数刻度求和，再除以 21.6. 若把所有损失至少为 10.68% 的 22 个月直接平均，则约为 15.961%；多取的那 0.4 份较轻损失拉低了均值.

<div data-experiment-slot="EXP-RETURNS-01"></div>

经验上尾保留原月份和原损失；严格高于 VaR 的观测全部计入，边界观测按所需概率质量分数计入.

<a id="qt04-comparisons"></a>
## 样本窗口与尾部统计量

| 起点（终点均为 2025-12） | 月数 | 月均收益 | 样本标准差 | 损失 VaR95 | 损失 ES95 |
|---|---:|---:|---:|---:|---:|
| 1990-01 | 432 | 约 1.389% | 约 7.288% | 10.68% | 约 16.058% |
| 2000-01 | 312 | 约 1.036% | 约 7.524% | 11.62% | 约 17.382% |
| 2010-01 | 192 | 约 1.741% | 约 5.759% | 8.4% | 约 10.055% |
| 2020-01 | 72 | 约 2.273% | 约 6.799% | 9.82% | 约 11.153% |

起点不同改变样本长度、历史状态及极端月份，表中较近窗口的经验ES较低. 依据结果挑窗口还会引入选择偏差，后续验证需计入选择过程.

删除最差月2001-02的扰动得到431月，均值约1.465%、VaR95为10.33%、ES95约15.094%，用于检验单个极端观测的影响；后续bootstrap沿主样本.

本节保持月度口径还有一个原因：一年简单收益是 $\prod_{t=1}^{12}(1+r_t)-1$，不是把单月损失阈值乘 12. 即使研究的是可相加的逐月损益，其总方差还包含跨月协方差. 时间尺度改变时，需要新的联合分布或明确的聚合假设.

$\widehat F_n$ 随样本变化，$\widehat{\mathrm{ES}}_p$ 也会变化. [估计误差与预测不确定性](https://ou-liu-red-sugar.github.io/zh/notebook/estimation-prediction-uncertainty/)进一步区分这种抽样不确定性和未来结果本身的波动.

<a id="qt04-exercises"></a>
## 练习与解析

**题一：边界质量.** 五点分布 $[0,1,1,1,10]$ 取 $p=.8$，求VaR、ES及边界纳入质量.

**解析.** $q_{.8}=1$，最坏20%恰为损失10的全部质量，边界质量零，ES为10.

**题二：从比率变成金额.** 只作风险刻度换算，假设起始资本为 100,000 美元且损失金额等于资本乘月损失率，不增加杠杆或现金流. 默认样本 VaR95 与 ES95 对应多少美元？其中哪一个是最大可能损失？

**解析.** VaR为10,680美元，ES约16,058.24美元，分别为经验分位点和尾部平均；最大经验损失需另查样本最大值.

**题三：检验一项解释.** 有人说“删除最差月后 ES 降低，所以清洗后的估计更可靠”. 这个结论缺什么？

**解析.** 删除需有独立于结果的数据错误证据或预定处理规则. 仅因损失极端而删除，会改变尾部分布及待估对象.

[^es]: Carlo Acerbi、Dirk Tasche，*On the coherence of Expected Shortfall*，arXiv:cond-mat/0104295v5（2002-05-02）；§2 的损益/下尾约定、Definitions 2.1、2.2、2.6，以及 Proposition 3.2 与证明，PDF pp.3、5–6. [公开全文](https://arxiv.org/pdf/cond-mat/0104295v5). 本节保留广义逆约定，并改写为损失上尾.
[^data]: 数据版本 `QT-C-inputs-20260921-v1`，原 CSV 的 `202607 CRSP database`、首个 value-weighted monthly 区块、`BusEq` 列. [完整 432 行快照](/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv)、[参数合同](/notebook/labs/qt-c/data/experiment-config.json)、[完整计算结果](/notebook/labs/qt-c/data/results.json). 表格由同一组参数与输入生成；原始百分数保留两位小数，额外计算位数不增加原观测精度.
[^french]: Kenneth R. French，[Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html) 的 Current Research Returns 与历史重建说明；[30 Industry Portfolios](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html) 的 Monthly Returns、Construction. 访问于 2026-09-21；公开链接会更新，本节数值绑定上述冻结快照.

## Additional teaching material
本篇使用的输入与结果如下；完整随机数组按[完整冻结结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/results.json) 的指定路径读取.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-RETURNS-01",
    "title": "经验损失分布与分位点边界质量",
    "anchor": "qt04-sample",
    "description": "在有原子质量的分布和432月经验样本中正确计算VaR/ES，解释对象、单位与窗口变化.",
    "inputs": {
      "config": {
        "experiment_id": "EXP-RETURNS-01",
        "loss_definition": "L_t = -r_t",
        "sample_sd_ddof": 1,
        "quantile_method": "inverted_cdf",
        "return_quantile_levels": [
          0.01,
          0.05,
          0.25,
          0.5,
          0.75,
          0.95,
          0.99
        ],
        "tail_levels": [
          0.5,
          0.9,
          0.95,
          0.975,
          0.99
        ],
        "default_tail_level": 0.95,
        "annualized": false,
        "atom_example": {
          "losses": [
            0,
            1,
            1,
            1,
            10
          ],
          "probabilities": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "p": 0.7
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
      "examples": {
        "losses": [
          0,
          1,
          1,
          1,
          10
        ],
        "probabilities": [
          0.2,
          0.2,
          0.2,
          0.2,
          0.2
        ],
        "p": 0.8,
        "expected_VaR": 1,
        "expected_ES": 10
      }
    },
    "outputs": {
      "config": {
        "experiment_id": "EXP-RETURNS-01",
        "loss_definition": "L_t = -r_t",
        "sample_sd_ddof": 1,
        "quantile_method": "inverted_cdf",
        "return_quantile_levels": [
          0.01,
          0.05,
          0.25,
          0.5,
          0.75,
          0.95,
          0.99
        ],
        "tail_levels": [
          0.5,
          0.9,
          0.95,
          0.975,
          0.99
        ],
        "default_tail_level": 0.95,
        "annualized": false,
        "atom_example": {
          "losses": [
            0,
            1,
            1,
            1,
            10
          ],
          "probabilities": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "p": 0.7
        }
      },
      "default": {
        "n": 432,
        "start": "199001",
        "end": "202512",
        "unit": "monthly decimal return; not annualized",
        "sample_mean": 0.013886342592592592,
        "sample_standard_deviation": 0.07288267292421713,
        "sample_variance": 0.005311884012578413,
        "empirical_distribution_standard_deviation": 0.07279826910560112,
        "minimum": {
          "value": -0.3153,
          "months": [
            "200102"
          ]
        },
        "maximum": {
          "value": 0.24719999999999998,
          "months": [
            "200002"
          ]
        },
        "return_quantiles": {
          "0.01": -0.1773,
          "0.05": -0.10679999999999999,
          "0.25": -0.0269,
          "0.5": 0.0168,
          "0.75": 0.056100000000000004,
          "0.95": 0.1309,
          "0.99": 0.18899999999999997
        },
        "loss_tail_measures": [
          {
            "p": 0.5,
            "VaR": -0.0168,
            "ES": 0.04158796296296296,
            "ES_quantile_integral_check": 0.04158796296296295,
            "upper_tail_probability": 0.5,
            "strictly_above_VaR_probability": 0.4976851851851852,
            "VaR_atom_probability": 0.004629629629629629,
            "included_VaR_atom_probability": 0.002314814814814825,
            "included_fraction_of_VaR_atom": 0.5000000000000022,
            "naive_conditional_mean_L_ge_VaR": 0.041318894009216595
          },
          {
            "p": 0.9,
            "VaR": 0.0758,
            "ES": 0.12407083333333335,
            "ES_quantile_integral_check": 0.1240708333333333,
            "upper_tail_probability": 0.09999999999999998,
            "strictly_above_VaR_probability": 0.09953703703703703,
            "VaR_atom_probability": 0.0023148148148148147,
            "included_VaR_atom_probability": 0.0004629629629629428,
            "included_fraction_of_VaR_atom": 0.1999999999999913,
            "naive_conditional_mean_L_ge_VaR": 0.12319318181818185
          },
          {
            "p": 0.95,
            "VaR": 0.10679999999999999,
            "ES": 0.16058240740740737,
            "ES_quantile_integral_check": 0.16058240740740726,
            "upper_tail_probability": 0.050000000000000044,
            "strictly_above_VaR_probability": 0.048611111111111105,
            "VaR_atom_probability": 0.0023148148148148147,
            "included_VaR_atom_probability": 0.0013888888888889395,
            "included_fraction_of_VaR_atom": 0.6000000000000218,
            "naive_conditional_mean_L_ge_VaR": 0.1596045454545455
          },
          {
            "p": 0.975,
            "VaR": 0.15810000000000002,
            "ES": 0.19859999999999994,
            "ES_quantile_integral_check": 0.19859999999999978,
            "upper_tail_probability": 0.025000000000000022,
            "strictly_above_VaR_probability": 0.023148148148148147,
            "VaR_atom_probability": 0.0023148148148148147,
            "included_VaR_atom_probability": 0.0018518518518518753,
            "included_fraction_of_VaR_atom": 0.8000000000000101,
            "naive_conditional_mean_L_ge_VaR": 0.1978636363636364
          },
          {
            "p": 0.99,
            "VaR": 0.1773,
            "ES": 0.24192962962962958,
            "ES_quantile_integral_check": 0.2419296296296292,
            "upper_tail_probability": 0.010000000000000009,
            "strictly_above_VaR_probability": 0.009259259259259259,
            "VaR_atom_probability": 0.0023148148148148147,
            "included_VaR_atom_probability": 0.0007407407407407501,
            "included_fraction_of_VaR_atom": 0.32000000000000406,
            "naive_conditional_mean_L_ge_VaR": 0.23314000000000001
          }
        ]
      },
      "window_sensitivity": [
        {
          "n": 432,
          "start": "199001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.013886342592592592,
          "sample_standard_deviation": 0.07288267292421713,
          "sample_variance": 0.005311884012578413,
          "empirical_distribution_standard_deviation": 0.07279826910560112,
          "minimum": {
            "value": -0.3153,
            "months": [
              "200102"
            ]
          },
          "maximum": {
            "value": 0.24719999999999998,
            "months": [
              "200002"
            ]
          },
          "return_quantiles": {
            "0.01": -0.1773,
            "0.05": -0.10679999999999999,
            "0.25": -0.0269,
            "0.5": 0.0168,
            "0.75": 0.056100000000000004,
            "0.95": 0.1309,
            "0.99": 0.18899999999999997
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.0168,
              "ES": 0.04158796296296296,
              "ES_quantile_integral_check": 0.04158796296296295,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.4976851851851852,
              "VaR_atom_probability": 0.004629629629629629,
              "included_VaR_atom_probability": 0.002314814814814825,
              "included_fraction_of_VaR_atom": 0.5000000000000022,
              "naive_conditional_mean_L_ge_VaR": 0.041318894009216595
            },
            {
              "p": 0.9,
              "VaR": 0.0758,
              "ES": 0.12407083333333335,
              "ES_quantile_integral_check": 0.1240708333333333,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09953703703703703,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0004629629629629428,
              "included_fraction_of_VaR_atom": 0.1999999999999913,
              "naive_conditional_mean_L_ge_VaR": 0.12319318181818185
            },
            {
              "p": 0.95,
              "VaR": 0.10679999999999999,
              "ES": 0.16058240740740737,
              "ES_quantile_integral_check": 0.16058240740740726,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.048611111111111105,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0013888888888889395,
              "included_fraction_of_VaR_atom": 0.6000000000000218,
              "naive_conditional_mean_L_ge_VaR": 0.1596045454545455
            },
            {
              "p": 0.975,
              "VaR": 0.15810000000000002,
              "ES": 0.19859999999999994,
              "ES_quantile_integral_check": 0.19859999999999978,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.023148148148148147,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0018518518518518753,
              "included_fraction_of_VaR_atom": 0.8000000000000101,
              "naive_conditional_mean_L_ge_VaR": 0.1978636363636364
            },
            {
              "p": 0.99,
              "VaR": 0.1773,
              "ES": 0.24192962962962958,
              "ES_quantile_integral_check": 0.2419296296296292,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.009259259259259259,
              "VaR_atom_probability": 0.0023148148148148147,
              "included_VaR_atom_probability": 0.0007407407407407501,
              "included_fraction_of_VaR_atom": 0.32000000000000406,
              "naive_conditional_mean_L_ge_VaR": 0.23314000000000001
            }
          ]
        },
        {
          "n": 312,
          "start": "200001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.01035576923076923,
          "sample_standard_deviation": 0.07523936785119568,
          "sample_variance": 0.0056609624746475394,
          "empirical_distribution_standard_deviation": 0.07511869517072214,
          "minimum": {
            "value": -0.3153,
            "months": [
              "200102"
            ]
          },
          "maximum": {
            "value": 0.24719999999999998,
            "months": [
              "200002"
            ]
          },
          "return_quantiles": {
            "0.01": -0.1852,
            "0.05": -0.1162,
            "0.25": -0.0308,
            "0.5": 0.0168,
            "0.75": 0.054000000000000006,
            "0.95": 0.1284,
            "0.99": 0.19579999999999997
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.0168,
              "ES": 0.046257692307692305,
              "ES_quantile_integral_check": 0.04625769230769229,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.49679487179487175,
              "VaR_atom_probability": 0.00641025641025641,
              "included_VaR_atom_probability": 0.0032051282051282493,
              "included_fraction_of_VaR_atom": 0.5000000000000069,
              "naive_conditional_mean_L_ge_VaR": 0.04585605095541402
            },
            {
              "p": 0.9,
              "VaR": 0.0808,
              "ES": 0.13413333333333333,
              "ES_quantile_integral_check": 0.13413333333333335,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09935897435897435,
              "VaR_atom_probability": 0.003205128205128205,
              "included_VaR_atom_probability": 0.0006410256410256249,
              "included_fraction_of_VaR_atom": 0.19999999999999496,
              "naive_conditional_mean_L_ge_VaR": 0.13280000000000003
            },
            {
              "p": 0.95,
              "VaR": 0.1162,
              "ES": 0.17381538461538457,
              "ES_quantile_integral_check": 0.17381538461538446,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.04807692307692307,
              "VaR_atom_probability": 0.003205128205128205,
              "included_VaR_atom_probability": 0.0019230769230769718,
              "included_fraction_of_VaR_atom": 0.6000000000000152,
              "naive_conditional_mean_L_ge_VaR": 0.172375
            },
            {
              "p": 0.975,
              "VaR": 0.1668,
              "ES": 0.21163333333333328,
              "ES_quantile_integral_check": 0.2116333333333332,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.022435897435897436,
              "VaR_atom_probability": 0.003205128205128205,
              "included_VaR_atom_probability": 0.0025641025641025862,
              "included_fraction_of_VaR_atom": 0.8000000000000069,
              "naive_conditional_mean_L_ge_VaR": 0.21051250000000002
            },
            {
              "p": 0.99,
              "VaR": 0.1852,
              "ES": 0.2645589743589743,
              "ES_quantile_integral_check": 0.264558974358974,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.009615384615384616,
              "VaR_atom_probability": 0.003205128205128205,
              "included_VaR_atom_probability": 0.00038461538461539296,
              "included_fraction_of_VaR_atom": 0.1200000000000026,
              "naive_conditional_mean_L_ge_VaR": 0.2471
            }
          ]
        },
        {
          "n": 192,
          "start": "201001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.017413541666666667,
          "sample_standard_deviation": 0.057584721322580884,
          "sample_variance": 0.003316000129799302,
          "empirical_distribution_standard_deviation": 0.05743456533995822,
          "minimum": {
            "value": -0.1241,
            "months": [
              "202204"
            ]
          },
          "maximum": {
            "value": 0.15789999999999998,
            "months": [
              "202207"
            ]
          },
          "return_quantiles": {
            "0.01": -0.1167,
            "0.05": -0.084,
            "0.25": -0.020099999999999996,
            "0.5": 0.0233,
            "0.75": 0.055099999999999996,
            "0.95": 0.10800000000000001,
            "0.99": 0.13970000000000002
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.023399999999999997,
              "ES": 0.029142708333333333,
              "ES_quantile_integral_check": 0.029142708333333336,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.5,
              "VaR_atom_probability": 0.005208333333333333,
              "included_VaR_atom_probability": 0.0,
              "included_fraction_of_VaR_atom": 0.0,
              "naive_conditional_mean_L_ge_VaR": 0.028601030927835044
            },
            {
              "p": 0.9,
              "VaR": 0.06309999999999999,
              "ES": 0.08882916666666668,
              "ES_quantile_integral_check": 0.0888291666666667,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09895833333333333,
              "VaR_atom_probability": 0.005208333333333333,
              "included_VaR_atom_probability": 0.001041666666666649,
              "included_fraction_of_VaR_atom": 0.19999999999999662,
              "naive_conditional_mean_L_ge_VaR": 0.0878
            },
            {
              "p": 0.95,
              "VaR": 0.084,
              "ES": 0.10055208333333332,
              "ES_quantile_integral_check": 0.1005520833333333,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.046875,
              "VaR_atom_probability": 0.005208333333333333,
              "included_VaR_atom_probability": 0.0031250000000000444,
              "included_fraction_of_VaR_atom": 0.6000000000000085,
              "naive_conditional_mean_L_ge_VaR": 0.09988999999999998
            },
            {
              "p": 0.975,
              "VaR": 0.09820000000000001,
              "ES": 0.11194999999999997,
              "ES_quantile_integral_check": 0.11195000000000001,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.020833333333333332,
              "VaR_atom_probability": 0.005208333333333333,
              "included_VaR_atom_probability": 0.00416666666666669,
              "included_fraction_of_VaR_atom": 0.8000000000000045,
              "naive_conditional_mean_L_ge_VaR": 0.1114
            },
            {
              "p": 0.99,
              "VaR": 0.1167,
              "ES": 0.12055416666666666,
              "ES_quantile_integral_check": 0.12055416666666671,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.005208333333333333,
              "VaR_atom_probability": 0.005208333333333333,
              "included_VaR_atom_probability": 0.004791666666666676,
              "included_fraction_of_VaR_atom": 0.9200000000000018,
              "naive_conditional_mean_L_ge_VaR": 0.12040000000000001
            }
          ]
        },
        {
          "n": 72,
          "start": "202001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.022730555555555556,
          "sample_standard_deviation": 0.06798525448842584,
          "sample_variance": 0.004621994827856025,
          "empirical_distribution_standard_deviation": 0.0675114838767962,
          "minimum": {
            "value": -0.1241,
            "months": [
              "202204"
            ]
          },
          "maximum": {
            "value": 0.15789999999999998,
            "months": [
              "202207"
            ]
          },
          "return_quantiles": {
            "0.01": -0.1241,
            "0.05": -0.09820000000000001,
            "0.25": -0.026600000000000002,
            "0.5": 0.025,
            "0.75": 0.07980000000000001,
            "0.95": 0.1213,
            "0.99": 0.15789999999999998
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.029500000000000002,
              "ES": 0.03310277777777778,
              "ES_quantile_integral_check": 0.03310277777777778,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.5,
              "VaR_atom_probability": 0.013888888888888888,
              "included_VaR_atom_probability": 0.0,
              "included_fraction_of_VaR_atom": 0.0,
              "naive_conditional_mean_L_ge_VaR": 0.03141081081081082
            },
            {
              "p": 0.9,
              "VaR": 0.0791,
              "ES": 0.1006138888888889,
              "ES_quantile_integral_check": 0.10061388888888889,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09722222222222221,
              "VaR_atom_probability": 0.013888888888888888,
              "included_VaR_atom_probability": 0.002777777777777768,
              "included_fraction_of_VaR_atom": 0.1999999999999993,
              "naive_conditional_mean_L_ge_VaR": 0.09846250000000001
            },
            {
              "p": 0.95,
              "VaR": 0.09820000000000001,
              "ES": 0.11153333333333332,
              "ES_quantile_integral_check": 0.11153333333333332,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.041666666666666664,
              "VaR_atom_probability": 0.013888888888888888,
              "included_VaR_atom_probability": 0.00833333333333338,
              "included_fraction_of_VaR_atom": 0.6000000000000034,
              "naive_conditional_mean_L_ge_VaR": 0.1102
            },
            {
              "p": 0.975,
              "VaR": 0.1167,
              "ES": 0.12081111111111112,
              "ES_quantile_integral_check": 0.12081111111111108,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.013888888888888888,
              "VaR_atom_probability": 0.013888888888888888,
              "included_VaR_atom_probability": 0.011111111111111134,
              "included_fraction_of_VaR_atom": 0.8000000000000017,
              "naive_conditional_mean_L_ge_VaR": 0.1204
            },
            {
              "p": 0.99,
              "VaR": 0.1241,
              "ES": 0.12410000000000002,
              "ES_quantile_integral_check": 0.12410000000000002,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.0,
              "VaR_atom_probability": 0.013888888888888888,
              "included_VaR_atom_probability": 0.010000000000000009,
              "included_fraction_of_VaR_atom": 0.7200000000000006,
              "naive_conditional_mean_L_ge_VaR": 0.1241
            }
          ]
        }
      ],
      "atom_example": {
        "inputs": {
          "losses": [
            0,
            1,
            1,
            1,
            10
          ],
          "probabilities": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "p": 0.7
        },
        "outputs": {
          "p": 0.7,
          "VaR": 1.0,
          "ES": 6.999999999999999,
          "ES_quantile_integral_check": 6.999999999999998,
          "upper_tail_probability": 0.30000000000000004,
          "strictly_above_VaR_probability": 0.2,
          "VaR_atom_probability": 0.6000000000000001,
          "included_VaR_atom_probability": 0.10000000000000003,
          "included_fraction_of_VaR_atom": 0.16666666666666669,
          "naive_conditional_mean_L_ge_VaR": 3.25
        }
      },
      "delete_one_worst_month_sensitivity": {
        "identity": "只作具名教学扰动，不改变主样本或bootstrap",
        "removed_month": "200102",
        "removed_return": -0.3153,
        "statistics": {
          "n": 431,
          "start": "199001",
          "end": "202512",
          "unit": "monthly decimal return; not annualized",
          "sample_mean": 0.014650116009280742,
          "sample_standard_deviation": 0.07121547613183658,
          "sample_variance": 0.005071644040684186,
          "empirical_distribution_standard_deviation": 0.0711328115930852,
          "minimum": {
            "value": -0.2451,
            "months": [
              "200109"
            ]
          },
          "maximum": {
            "value": 0.24719999999999998,
            "months": [
              "200002"
            ]
          },
          "return_quantiles": {
            "0.01": -0.17679999999999998,
            "0.05": -0.1033,
            "0.25": -0.026600000000000002,
            "0.5": 0.0168,
            "0.75": 0.059800000000000006,
            "0.95": 0.1309,
            "0.99": 0.18899999999999997
          },
          "loss_tail_measures": [
            {
              "p": 0.5,
              "VaR": -0.0168,
              "ES": 0.04018236658932715,
              "ES_quantile_integral_check": 0.04018236658932716,
              "upper_tail_probability": 0.5,
              "strictly_above_VaR_probability": 0.49651972157772617,
              "VaR_atom_probability": 0.004640371229698376,
              "included_VaR_atom_probability": 0.0034802784222738303,
              "included_fraction_of_VaR_atom": 0.7500000000000104,
              "naive_conditional_mean_L_ge_VaR": 0.040050462962962954
            },
            {
              "p": 0.9,
              "VaR": 0.0754,
              "ES": 0.11862505800464039,
              "ES_quantile_integral_check": 0.11862505800464039,
              "upper_tail_probability": 0.09999999999999998,
              "strictly_above_VaR_probability": 0.09976798143851508,
              "VaR_atom_probability": 0.002320185614849188,
              "included_VaR_atom_probability": 0.00023201856148490074,
              "included_fraction_of_VaR_atom": 0.09999999999999222,
              "naive_conditional_mean_L_ge_VaR": 0.11774090909090912
            },
            {
              "p": 0.95,
              "VaR": 0.1033,
              "ES": 0.15094269141531316,
              "ES_quantile_integral_check": 0.15094269141531327,
              "upper_tail_probability": 0.050000000000000044,
              "strictly_above_VaR_probability": 0.048723897911832945,
              "VaR_atom_probability": 0.002320185614849188,
              "included_VaR_atom_probability": 0.0012761020881670998,
              "included_fraction_of_VaR_atom": 0.55000000000002,
              "naive_conditional_mean_L_ge_VaR": 0.14996818181818186
            },
            {
              "p": 0.975,
              "VaR": 0.1417,
              "ES": 0.18292505800464035,
              "ES_quantile_integral_check": 0.18292505800464043,
              "upper_tail_probability": 0.025000000000000022,
              "strictly_above_VaR_probability": 0.02320185614849188,
              "VaR_atom_probability": 0.002320185614849188,
              "included_VaR_atom_probability": 0.0017981438515081438,
              "included_fraction_of_VaR_atom": 0.77500000000001,
              "naive_conditional_mean_L_ge_VaR": 0.18208181818181818
            },
            {
              "p": 0.99,
              "VaR": 0.17679999999999998,
              "ES": 0.21002505800464033,
              "ES_quantile_integral_check": 0.2100250580046405,
              "upper_tail_probability": 0.010000000000000009,
              "strictly_above_VaR_probability": 0.009280742459396751,
              "VaR_atom_probability": 0.002320185614849188,
              "included_VaR_atom_probability": 0.0007192575406032575,
              "included_fraction_of_VaR_atom": 0.310000000000004,
              "naive_conditional_mean_L_ge_VaR": 0.20543999999999998
            }
          ]
        }
      }
    },
    "algorithm": "广义逆经验分位数(inverted_cdf)；上尾ES分位积分=严格上尾+部分边界质量；等权数据分母n；样本SD ddof=1，经验SD ddof=0. 删除最差月仅对完整窗口生成新扰动，不改主数据.",
    "boundaries": [
      "0<p<1；ES理论L1条件；有符号损失允许负VaR",
      "经验结果不保证未来概率",
      "p变化和窗口变化同步更新所有量",
      "删除扰动不是清洗"
    ],
    "static_equivalent": {
      "reader_anchor": "qt04-sample",
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
- [On the coherence of Expected Shortfall](https://arxiv.org/pdf/cond-mat/0104295v5): 支持分位数、ES的原子边界与分位积分. 原文X为损益、alpha为下尾质量，正文显式采用L=-X、p=1-alpha. 本站有限样本逐格公式由同一定义重建；不把一般coherence或一致性证明算入本课.
- [French Data Library: Current Research Returns](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html): Data Library 自 2025-01 发布起使用 CIZ 文件生成美国研究收益，每次更新会重建完整历史. CIZ 与旧 FIZ 的月收益复合及股息再投资安排不同. 本站 432 个月样本统一使用 202607 数据库快照.
- [30 Industry Portfolios](https://mba.tuck.dartmouth.edu/pages/Faculty/ken.french/Data_Library/det_30_ind_port.html): 30 个行业研究组合的构造与月收益口径，包括 BusEq 组合的行业身份.
- [QT-C 冻结输入：BusEq 月收益、离散支付与重抽结果](https://ou-liu-red-sugar.github.io/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv): 从原始 CSV 的 value-weighted monthly 区块提取 BusEq，覆盖 1990-01 至 2025-12 的 432 个月，原始行号 775–1206，无缺失值. 配套文件保存提取数据、实验配置及计算算法；MC 和 AR 使用教学模拟数据.

## Content relations
```json
[
  {
    "from": "zh-qt04",
    "relation": "part_of",
    "to": "quant-data-info",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt04",
    "relation": "requires",
    "to": "zh-qt03",
    "reason": "当前学习任务确实调用该能力",
    "required_competence": "随机变量、CDF、有限加权平均"
  },
  {
    "from": "zh-qt04",
    "relation": "supported_by",
    "to": "QTC-ES",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "§2 conventions; Definitions 2.1/2.2, p.3；Definition 2.6, p.5；Proposition 3.2 and its complete proof, p.6",
    "scope": "支持分位数、ES的原子边界与分位积分. 原文X为损益、alpha为下尾质量，正文显式采用L=-X、p=1-alpha. 本站有限样本逐格公式由同一定义重建."
  },
  {
    "from": "zh-qt04",
    "relation": "supported_by",
    "to": "QTC-FRENCH",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "Current Research Returns 开头生产格式说明；历史重建说明：全部历史随数据更新重建",
    "scope": "Data Library说明自2025-01发布起使用CIZ文件生成美国研究收益，并说明每次更新会重建完整收益历史；CIZ与旧FIZ的月收益复合/股息再投资安排不同. 本课432月绑定一个202607数据库快照，不能拼接为前段FIZ后段CIZ，也不能称为逐月当时可见数据."
  },
  {
    "from": "zh-qt04",
    "relation": "supported_by",
    "to": "QTC-FRENCH30",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "Monthly Returns；Construction",
    "scope": "行业组合、Monthly Returns与Construction口径；用于标识BusEq不是一家公司或一只可直接交易的基金."
  },
  {
    "from": "zh-qt04",
    "relation": "supported_by",
    "to": "QTC-FROZEN",
    "reason": "支持对应定义、口径或明确限定的研究延伸",
    "locator": "source CSV title line11/header12, BusEq index23 including date；selected source rows775–1206；data/experiment-config.json；data/results.json: returns, Monte_Carlo, bootstrap",
    "scope": "原源CSV首个value-weighted monthly区块BusEq，199001–202512、原行775–1206共432月，缺失0. 归档源链接本身可变；实际随包为逐字节核验的432行提取及配置，结果由同样冻结算法在作者沙盒复算. 原全行业ZIP不在此包内. MC/AR是教学模拟而非市场资料."
  },
  {
    "from": "qt04-sample",
    "relation": "illustrated_by",
    "to": "EXP-RETURNS-01",
    "reason": "在有原子质量的分布和432月经验样本中正确计算VaR/ES，解释对象、单位与窗口变化."
  },
  {
    "from": "zh-qt04",
    "relation": "informs",
    "to": "zh-qt19",
    "reason": "提供同一收益样本和统计对象."
  }
]
```

## Related entries

## Optional reading path
理解模型并亲手算: step 4/9
按固定尾部概率质量复算经验 VaR/ES，区分样本统计量与未来结果.
描述一份样本后，下一篇检验估计量的波动；Monte Carlo 标准误可按需读 QT12.
Next: [估计误差与预测不确定性](https://ou-liu-red-sugar.github.io/zh/notebook/estimation-prediction-uncertainty/)
