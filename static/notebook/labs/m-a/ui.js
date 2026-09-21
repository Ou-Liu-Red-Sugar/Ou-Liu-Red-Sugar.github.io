(function () {
  'use strict';
  const $ = id => document.getElementById(id), data = window.MADATA, calc = window.MA;
  const embedded = window.self !== window.top;
  const money = (v, digits = 2) => v === null ? '未计算' : new Intl.NumberFormat('zh-CN', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);
  const num = id => $(id).value.trim() === '' ? NaN : Number($(id).value);
  const cash = value => (value > 0 ? '+' : '') + money(value);
  const palette = ['#25638a', '#398273', '#b07739'];
  const svg = (w, h, title, contents) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}"><title>${title}</title>${contents}</svg>`;
  const width = id => Math.max(240, $(id).clientWidth || 600);
  const label = (x, y, text, extra = '') => `<text x="${x}" y="${y}" ${extra.includes('font-size=') ? '' : 'font-size="13"'} fill="#314a5b" ${extra}>${text}</text>`;
  const box = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" ${extra}/>`;
  const card = (title, body) => `<div class="card"><h3>${title}</h3><p>${body}</p></div>`;
  const table = (head, rows, caption = '') => `<table>${caption ? `<caption>${caption}</caption>` : ''}<thead><tr>${head.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  function safe(prefix, results, work) {
    try { results.forEach(id => $(id).hidden = false); work(); $(prefix + '-error').textContent = ''; }
    catch (error) { $(prefix + '-error').textContent = error.message; results.forEach(id => $(id).hidden = true); }
  }

  function renderRights() {
    const instrument = $('instrument').value;
    document.querySelectorAll('[data-rights]').forEach(el => el.hidden = el.dataset.rights !== (instrument.startsWith('alphabet') ? 'shares' : instrument));
    safe('rights', ['rights-graphic', 'rights-relations', 'rights-cards', 'rights-update'], () => {
      const r = calc.rights(data.rights, { instrument, face: num('bill-face'), quoteMode: $('bill-quote').value,
        shares: num('share-count'), optionCount: num('option-count'), premium: $('option-premium').value });
      let descriptions, short, edges, relationDescription;
      if (instrument === 'bill') {
        descriptions = [`义务主体：美国财政部。面值 ${money(r.face)} 美元；发行 2025-09-23，到期 2025-10-21。`,
          `${r.quote_identity}：每 100 面值 ${money(r.quote, 6)}。教学规模对应付款 <strong>${money(r.cost, 4)}</strong> 美元。`,
          `特定账户的实际到账：<strong>未知</strong>。按约到期的条件面值差 ${money(r.conditional_gap, 4)}；持有回报 ${money(r.holding_return_percent, 6)}%。${r.holding_days === null ? '剩余期限未设定，不年化。' : '对应 28 天。'}`];
        short = ['美国财政部', '具名到期面值权利', `本例 ${money(r.face, 0)} 面值`];
        edges = ['支付约定', '到期支付'];
        relationDescription = '美国财政部承担本券支付义务；到期支付归属于届时持有人。交易价格另列在下方，转售不会改变到期面值。';
      } else if (instrument === 'spx') {
        descriptions = ['SPX 指数期权：欧式行权、现金结算，每点 100 美元。具体系列、执行价和期限尚未选定。',
          `${num('option-count')} 份 × ${$('option-premium').value} 教学权利金点 × 100 美元/点 = <strong>${money(r.premium_cash)}</strong> 美元，未计费用。`,
          '到期现金与实际到账均未给出。还需要具体系列规则、结算值及实际履约记录；不把权利金当到期支付。'];
        short = ['S&P 500 指数', 'SPX 系列期权合约', `本例 ${num('option-count')} 份`];
        edges = ['指数参照', '合约履约'];
        relationDescription = '指数 → 期权：提供参照对象；期权 → 持有人：依具体系列与清算安排履约。指数本身不是付款义务人，持有期权也不是持有指数成分股。';
      } else {
        const cls = instrument === 'alphabet_A' ? 'A' : 'C';
        descriptions = [`Alphabet ${cls} 类，教学数量 ${r.shares} 股。${cls === 'A' ? '通常每股一票。' : '除法律要求外通常没有投票权。'}分配取决于董事会决定及适用优先权等条件。`,
          '本实验没有提供股票交易价格，因此不生成购买支出。公司经营结果也不自动等于股东现金分配。',
          `不承诺固定到期支付。${cls === 'C' ? '清算权利涉及 C 转 A 及剩余资产的条件与顺位。' : '清算所得取决于剩余资产及适用顺位。'}实际分配须有相应记录。`];
        short = ['Alphabet 公司', `${cls} 类股份权利`, `本例 ${r.shares} 股`];
        edges = ['类别安排', '股东权利'];
        relationDescription = `公司 → 类别股份：规定经济与治理权利；股份 → 持有人：取得该类别的权利。本例通常投票数 ${r.usual_votes}；分配仍需满足原条款条件。`;
      }
      $('rights-cards').innerHTML = ['契约约定', '交易对价', '实际所得'].map((x, i) => card(x, descriptions[i])).join('');
      $('rights-relations').textContent = relationDescription;
      const w = width('rights-graphic'), vertical = w < 720, bw = vertical ? w - 24 : (w - 148) / 3;
      let marks = '';
      for (let i = 0; i < 3; i++) {
        const x = vertical ? 12 : 4 + i * (bw + 70), y = vertical ? 8 + i * 100 : 8;
        marks += box(x, y, bw, 66, i === 2 ? '#f6f4ef' : '#ecf3f7', 'stroke="#aabdc8"');
        marks += label(x + 12, y + 23, ['主体 / 参照对象', '金融权利', '持有人'][i], 'font-weight="700"');
        marks += label(x + 12, y + 48, short[i]);
        if (i < 2) marks += vertical
          ? label(w / 2, y + 90, '↓ ' + edges[i], 'text-anchor="middle"')
          : label(x + bw + 35, y + 31, edges[i], 'text-anchor="middle"') + label(x + bw + 35, y + 54, '→', 'text-anchor="middle" font-size="18"');
      }
      $('rights-graphic').innerHTML = svg(w, vertical ? 285 : 98, '主体或参照对象、金融权利与持有人之间的具名关系', marks);
      $('rights-update').textContent = `已切换为 ${$('instrument').selectedOptions[0].textContent}；具体内容与图的等价说明在三张卡中。`;
    });
  }

  function renderFlow() {
    safe('flow', ['flow-graphic', 'flow-status', 'flow-ledger'], () => {
      const r = calc.billFlow(data.rights.bill, { face: num('flow-face'), step: $('flow-step').value, channel: $('flow-channel').value });
      const w = width('flow-graphic');
      let payer, recipient, cashAmount, rightsText, description;
      if (r.blocked) {
        payer = '甲 · TreasuryDirect'; recipient = '到期前转出 / 出售路径'; cashAmount = null; rightsText = '面值权利仍由甲持有';
        description = '转出路径不可达：本例新购四周券受到 45 天持有要求限制。界面保留发行后的现金与权利，没有先生成转售再撤回。';
      } else if (r.effective_step === 'issue') {
        payer = '甲'; recipient = '美国财政部'; cashAmount = r.issue_cash_millionths / 1000000; rightsText = '财政部 → 甲';
        description = '发行动作完成属于教学设定。财政部是本例经济收款主体；经纪、支付和清算服务没有被合并成融资所得人。';
      } else if (r.effective_step === 'transfer') {
        payer = '乙'; recipient = '甲'; cashAmount = r.resale_cash_millionths / 1000000; rightsText = '甲 → 乙';
        description = '商业渠道中的教学转售：乙付款给甲，取得同一面值权利。财政部没有取得新的发行款，到期义务保留。';
      } else {
        payer = '美国财政部'; recipient = r.channel === 'treasurydirect_new' ? '甲 · 未转售的持有人' : '乙 · 转售后的持有人';
        cashAmount = r.face; rightsText = '债权按约偿付后归零';
        description = '这是按约到期支付的条件结果。' + (r.channel === 'treasurydirect_new' ? '甲未能转出，故到期收款仍归甲。' : '甲已转出权利，故到期收款归乙。');
      }
      const left = w * .29, right = w * .71;
      let marks = '<defs><marker id="ma-flow-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#25638a"/></marker></defs>';
      marks += box(12, 8, w - 24, 54, '#ecf3f7', 'stroke="#aabdc8"') + label(w / 2, 40, payer, 'text-anchor="middle" font-weight="700"');
      marks += box(12, 235, w - 24, 54, '#edf5f0', 'stroke="#aabdc8"') + label(w / 2, 267, recipient, 'text-anchor="middle" font-weight="700"');
      if (r.blocked) {
        marks += `<line x1="${w / 2}" y1="78" x2="${w / 2}" y2="218" stroke="#9f6637" stroke-width="2" stroke-dasharray="6 5"/>`;
        marks += box(w / 2 - 54, 118, 108, 54, '#fff8ee', 'stroke="#b9854b"');
        marks += label(w / 2, 140, '45 天条件', 'text-anchor="middle"');
        marks += label(w / 2, 160, '路径不可达', 'text-anchor="middle"');
      } else {
        marks += `<line x1="${left}" y1="78" x2="${left}" y2="218" stroke="#25638a" stroke-width="2" marker-end="url(#ma-flow-arrow)"/>`;
        marks += box(left - 54, 112, 108, 52, '#fff');
        marks += label(left, 130, r.effective_step === 'maturity' ? '按约支付（条件）' : '现金付款', 'text-anchor="middle"');
        marks += label(left, 151, money(cashAmount) + ' 美元', 'text-anchor="middle"');
        if (r.effective_step !== 'maturity') {
          marks += `<line x1="${right}" y1="218" x2="${right}" y2="78" stroke="#398273" stroke-width="2" marker-end="url(#ma-flow-arrow)"/>`;
          marks += box(right - 54, 112, 108, 52, '#fff');
          marks += label(right, 130, '面值权利', 'text-anchor="middle"');
          marks += label(right, 151, money(r.face, 0) + ' 美元', 'text-anchor="middle"');
        } else marks += label(right, 143, '债权偿付', 'text-anchor="middle"');
      }
      $('flow-graphic').innerHTML = svg(w, 308, '当前步骤的现金付款与面值权利；渠道阻挡时不生成成交', marks);
      $('flow-status').textContent = description + ' 权利：' + rightsText + '。';
      $('flow-ledger').innerHTML = table(['主体', '累计现金变动（美元）', '剩余面值权利（美元）'],
        [['甲', money(r.cash_millionths[0] / 1000000, 4), money(r.face_rights[0], 0)],
         ['乙', money(r.cash_millionths[1] / 1000000, 4), money(r.face_rights[1], 0)],
         ['财政部（仅本例份额）', money(r.cash_millionths[2] / 1000000, 4), '义务主体，不列持有量']],
        '现金变动与面值权利分列。底层使用十进制定点；三方累计现金变动之和为零。');
    });
  }

  function renderIpo() {
    safe('ipo', ['ipo-graphic', 'ipo-status', 'ipo-ledger'], () => {
      const r = calc.ipoSnapshot(data.ipo, $('ipo-view').value), selected = $('ipo-component').value;
      const keys = ['issuer', 'selling_holders', 'combined'], names = ['公司出售部分', '原股东出售部分', '向公众出售合计'];
      if (!keys.includes(selected)) throw new Error('未识别的出售部分');
      const w = width('ipo-graphic'), issuerWidth = (w - 8) * r.issuer.shares / r.combined.shares;
      let marks = label(4, 20, `该文件状态：共 ${money(r.combined.shares, 0)} 股`);
      marks += box(4, 37, issuerWidth, 32, palette[0]);
      marks += box(4 + issuerWidth, 37, w - 8 - issuerWidth, 32, palette[1]);
      marks += label(4, 92, `公司 ${money(r.issuer.shares, 0)} 股`);
      marks += label(4, 114, `原股东 ${money(r.selling_holders.shares, 0)} 股`);
      $('ipo-graphic').innerHTML = svg(w, 137, '同一文件状态内公司出售与原股东出售的股数构成', marks);
      const base = r.view === 'prospectus_base';
      $('ipo-status').textContent = base
        ? '2024-03-20 招股书基准安排，不包括额外购买权。公司与原股东分别取得其售股所得；合计金额不是公司净融资。'
        : '2024-03-25 完成发行，3 月 26 日更正 8-K/A。额外购买权的 3,300,000 股已全额行使；公司毛所得 631,601,918 美元是承销折扣、佣金及估计发行费用前。没有把此完成数量写回基准表。';
      const rows = keys.map((key, i) => {
        const row = r[key];
        return [names[i], money(row.shares, 0), row.gross_cents === null ? '本面板未展开' : money(row.gross_cents / 100),
          row.commission_cents === null ? '本面板未展开' : money(row.commission_cents / 100),
          row.after_commission_before_other_fees_cents === null ? '本面板未展开' : money(row.after_commission_before_other_fees_cents / 100)];
      });
      $('ipo-ledger').innerHTML = table(['出售主体', '股数', '毛所得（美元）', '承销折扣与佣金', '扣佣金后、其他费用前'], rows,
        base ? '每股公开价格 34 美元；每股承销折扣与佣金 1.70。' : '完成记录独立只读；只展示稿件核定的数量和更正后的公司毛所得。');
      $('ipo-ledger').querySelectorAll('tbody tr')[keys.indexOf(selected)].classList.add('row-highlight');
    });
  }

  function renderBook() {
    $('book-limit').disabled = $('book-type').value !== 'limit';
    safe('book', ['book-total', 'book-graphic', 'cost-graphic', 'cost-parts', 'book-status', 'book-results'], () => {
      const r = calc.fillVisible(data.book, { side: $('book-side').value, quantity: num('book-quantity'),
        fee: $('book-fee').value, limit: $('book-type').value === 'limit' ? $('book-limit').value : null });
      $('book-total').textContent = `本轮成交 ${r.filled} 股 · 余量 ${r.remaining} 股`;
      $('book-status').textContent = calc.remainderText(r, $('book-tif').value);
      const levels = r.side === 'buy' ? data.book.asks : data.book.bids, w = width('book-graphic'), barW = w - 100;
      const max = Math.max(...levels.map(x => x.quantity));
      let marks = '';
      levels.forEach((level, i) => {
        const y = 28 + i * 67, got = r.fills.find(x => x.price_cents === Math.round(Number(level.price) * 100))?.quantity || 0;
        marks += label(0, y + 19, Number(level.price).toFixed(2));
        marks += label(78, y - 3, `可见 ${level.quantity} 股；成交 ${got} 股`);
        marks += box(78, y + 3, barW * level.quantity / max, 24, '#e2e9ed');
        if (got) marks += box(78, y + 3, barW * got / max, 24, palette[0]);
      });
      marks += label(0, levels.length * 67 + 29, '表外执行未知，不延长档位。');
      $('book-graphic').innerHTML = svg(w, levels.length * 67 + 45, '逐档可见数量和已成交数量；不外推深度', marks);
      const cw = width('cost-graphic'), values = [r.half_spread_cents, r.walk_cents, r.fees_cents], names = ['半价差', '逐档变化', '成交费'];
      let x = 4, costMarks = '';
      values.forEach((v, i) => { if (v > 0) { const length = (cw - 8) * v / r.cost_cents; costMarks += box(x, 26, length, 32, palette[i]); x += length; } });
      if (!r.cost_cents) costMarks += box(4, 26, cw - 8, 32, '#e2e9ed');
      costMarks += label(4, 17, `成本合计 ${money(r.cost_cents / 100)} 美元`);
      costMarks += label(4, 83, `基准：${r.filled} 股 × 100.00 美元`);
      $('cost-graphic').innerHTML = svg(cw, 99, '成本分解为半价差、逐档变化及费用', costMarks);
      $('cost-parts').innerHTML = values.map((v, i) => `<div class="metric" style="border-color:${palette[i]}">${names[i]}<br><strong>${money(v / 100)}</strong> 美元</div>`).join('');
      const rows = r.fills.map((f, i) => [`第 ${i + 1} 笔`, f.quantity, money(f.price_cents / 100), money(f.gross_cents / 100)]);
      if (!rows.length) rows.push(['没有成交', 0, '未定义', '0.00']);
      $('book-results').innerHTML = table(['成交分笔', '股数', '价格 / 股', '毛额'], rows, '美元金额；价格不含费用')
        + table(['已知部分的账', '结果'], [['毛额', money(r.gross_cents / 100)], ['逐股成交费', money(r.fees_cents / 100)],
          ['现金流（买入为负）', cash(r.cash_cents / 100)], ['成交均价（未计费）', r.vwap === null ? '未定义：零成交' : money(r.vwap, 6)],
          ['已成交部分相对中间价成本', money(r.cost_cents / 100)]]);
    });
  }

  function renderSettlement() {
    safe('settlement', ['settlement-graphic', 'settlement-cards', 'settlement-update'], () => {
      const r = calc.settlement(data.securities, $('trade-date').value, $('trade-stage').value), w = width('settlement-graphic');
      const dates = ['2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29'];
      const step = (w - 8) / dates.length; let marks = '';
      dates.forEach((date, i) => {
        const x = 4 + step * i, open = data.securities.business_days.includes(date), trade = date === r.trade_date, due = date === r.standard_date;
        marks += box(x, 9, step - 5, 72, trade ? '#e0edf5' : due ? '#e2f1ea' : '#f0f2f3', `stroke="${trade ? palette[0] : due ? palette[1] : '#d7dfe4'}"`);
        marks += label(x + (step - 5) / 2, 31, date.slice(5).replace('-', '/'), 'text-anchor="middle"');
        marks += label(x + (step - 5) / 2, 56, trade ? '成交日' : due ? '标准日' : !open ? (date.endsWith('27') ? '假日' : '周末') : '营业日', 'text-anchor="middle" font-size="11"');
      });
      marks += label(4, 108, `从成交日之后计 ${r.lag} 个营业日 → 5 月 29 日`);
      $('settlement-graphic').innerHTML = svg(w, 127, '冻结美国历史营业日日历；两种交易日均对应5月29日标准交收', marks);
      const stageText = $('trade-stage').selectedOptions[0].textContent;
      $('settlement-cards').innerHTML = card('标准日期', `<strong>${r.standard_date}</strong><br>适用本例历史 T+${r.lag} 条件。`)
        + card('待付与待收', `<strong>${money(r.pending_cash)}</strong> 美元待付<br><strong>${r.pending_shares}</strong> 股待收`)
        + card('当前教学状态', `${stageText}。${r.stage === 'settled' ? '只有这项显式完成假设使待履行事项归零。' : '义务继续保留；标准日期不证明实际完成。'}`);
      $('settlement-update').textContent = `标准日期 ${r.standard_date}；${stageText}；待付 ${r.pending_cash} 美元、待收 ${r.pending_shares} 股。`;
    });
  }

  function renderCollateral() {
    safe('collateral', ['collateral-graphic', 'collateral-output'], () => {
      const r = calc.collateral(data.collateral, num('haircut'), num('net-debit')), w = width('collateral-graphic');
      let marks = '';
      [['抵押价值', r.collateral, palette[0]], ['净借记', r.net_debit, palette[2]]].forEach(([name, value, color], i) => {
        const y = 23 + 51 * i;
        marks += label(0, y + 14, name); marks += box(80, y, (w - 96) * value / 11000, 22, color);
        marks += label(80, y - 5, `${money(value)} 美元`);
      });
      $('collateral-graphic').innerHTML = svg(w, 109, '独立DTC参与人层抵押价值与净借记对照', marks);
      $('collateral-output').textContent = `CM = ${money(r.collateral)} − ${money(r.net_debit)} = ${money(r.cm)} 美元。${r.status}。`;
    });
  }

  function renderMes() {
    safe('mes', ['mes-identities', 'mes-graphic', 'mes-status', 'mes-ledger'], () => {
      const r = calc.mesPath(data.mes, num('mes-buffer'), $('mes-topup').checked), w = width('mes-graphic');
      const blocked = r.status === 'funding_unresolved', values = [3000, r.balance_before_topup, blocked ? null : 3000, r.margin_terminal];
      $('mes-identities').innerHTML = [['起点名义量', r.notional_at_initial_price], ['初始保证金', r.initial_margin],
        ['维持要求', r.maintenance], ['保证金外初始可用现金', r.buffer]].map(([name, value]) => `<div class="metric">${name}<br><strong>${money(value)}</strong> 美元</div>`).join('');
      const names = ['起点保证金', '首日损益后', '补款后', '第二日后'];
      const step = (w - 16) / 4, base = 156, scale = 110 / 4000; let marks = '';
      const maintainY = base - r.maintenance * scale;
      marks += `<line x1="8" y1="${maintainY}" x2="${w - 8}" y2="${maintainY}" stroke="#a96121" stroke-dasharray="5 4"/>`;
      marks += label(8, 17, '保证金余额（美元）；自由现金另列下表');
      values.forEach((v, i) => {
        const x = 8 + i * step + step * .17, bw = step * .66;
        if (v !== null) { marks += box(x, base - v * scale, bw, v * scale, i === 1 ? palette[2] : palette[0]); marks += label(x + bw / 2, base - v * scale - 8, money(v, 0), 'text-anchor="middle"'); }
        else { marks += box(x, 102, bw, 54, '#f1f3f5', 'stroke="#a7b3ba" stroke-dasharray="4 3"'); marks += label(x + bw / 2, 133, '未计算', 'text-anchor="middle"'); }
        marks += label(x + bw / 2, 178, names[i], 'text-anchor="middle" font-size="11"');
      });
      marks += label(8, 205, '虚线 2,700；补款目标 3,000。');
      $('mes-graphic').innerHTML = svg(w, 220, '逐日保证金余额；资金缺口未解决时后续余额停止计算', marks);
      $('mes-status').textContent = blocked
        ? `首日亏损 ${money(-r.day1_pnl)}，需补 ${money(r.call)}；现有自由缓冲 ${money(r.buffer)}，尚缺 ${money(r.shortfall)} 美元。路径停在补款关口。第二日 +500 仅为资金解决后的条件损益。`
        : `补款来源明确：自由缓冲用于 ${money(r.call - r.extra_external_cash)}，额外外部资金 ${money(r.extra_external_cash)}。在本例第二日路径下，期末总资源 ${money(r.terminal_resources)} − 总外部投入 ${money(r.external_resources)} = 净损益 ${money(r.net_pnl)} 美元。`;
      const rows = [['起点', '3,000.00', money(r.buffer), money(3000 + r.buffer), '均为外部初始资金'],
        ['首日损益 −400 后', money(r.balance_before_topup), money(r.buffer), money(3000 + r.buffer), '尚未作补款转移'],
        ['补款关口', blocked ? money(r.balance_before_topup) : '3,000.00', blocked ? money(r.buffer) : money(r.free_cash),
          money(r.external_resources), blocked ? `缺口 ${money(r.shortfall)}，未完成补足` : `补入 ${money(r.call)}；其中新增外部资金 ${money(r.extra_external_cash)}`],
        ['第二日条件路径', money(r.margin_terminal), money(r.free_cash), money(r.external_resources), blocked ? '余额未计算；+500 仅为条件损益' : `期末总资源 ${money(r.terminal_resources)}；净损益 ${money(r.net_pnl)}`]];
      $('mes-ledger').innerHTML = table(['阶段', '保证金余额', '自由现金', '累计外部投入', '资金动作与条件'], rows, '金额单位：美元。转移自由现金到保证金不会再次增加外部投入。');
    });
  }

  function renderAll() { renderRights(); renderFlow(); renderIpo(); renderBook(); renderSettlement(); renderCollateral(); renderMes(); }
  function selectView() {
    let active = (new URLSearchParams(location.search).get('experiment') || location.hash.slice(1));
    active = ({ 'INT-M01-RIGHTS': 'm01', 'INT-M02-FLOWS': 'm02', 'INT-M03-BOOK': 'm03', 'INT-M04-SETTLEMENT': 'm04' })[active] || active;
    const panel = ['m02-flow', 'm02-ipo', 'm04-securities', 'm04-collateral', 'm04-mes'].includes(active) ? active : null;
    const group = panel ? panel.slice(0, 3) : ['m01', 'm02', 'm03', 'm04'].includes(active) ? active : 'm01';
    document.querySelectorAll('.lab').forEach(el => el.hidden = embedded && el.id !== group);
    document.querySelectorAll('[data-lab-panel]').forEach(el => {
      el.hidden = embedded && panel !== null && el.id !== panel;
      if (el.tagName === 'DETAILS' && el.id === panel) el.open = true;
    });
    document.querySelectorAll('[data-group-intro]').forEach(el => el.hidden = embedded && panel !== null);
    document.querySelectorAll('nav a').forEach(el => el.hash === '#' + group ? el.setAttribute('aria-current', 'page') : el.removeAttribute('aria-current'));
    renderAll();
  }
  document.documentElement.classList.add('js');
  if (embedded) document.documentElement.classList.add('embedded');
  document.querySelectorAll('input,select').forEach(el => el.addEventListener('input', renderAll));
  $('book-reset').addEventListener('click', () => {
    $('book-side').value = 'buy'; $('book-quantity').value = '350'; $('book-type').value = 'market';
    $('book-limit').value = '100.05'; $('book-tif').value = 'day'; $('book-fee').value = '0.01'; renderBook();
  });
  $('m04-mes').addEventListener('toggle', renderMes);
  window.addEventListener('hashchange', selectView);
  let frame;
  const observer = new ResizeObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(renderAll); });
  observer.observe(document.querySelector('main'));
  selectView();
})();
