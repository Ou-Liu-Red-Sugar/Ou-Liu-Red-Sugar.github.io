const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const {resolve} = require('node:path');
const {formatText, textParts} = require('../static/js/notebook-number-format.js');

test('inline/display math remains a complete segment for MathJax', () => {
  for (const formula of [String.raw`\(15\times0.06\times70/365=0.17260274\)`, String.raw`\[15\times0.06\times70/365=0.17260274\]`, '$0.17260274$', '$$0.17260274$$']) {
    assert.deepEqual(textParts('before ' + formula + ' after'), [
      {text:'before ', math:false}, {text:formula, math:true}, {text:' after', math:false}
    ]);
    assert.ok(formatText(formula, true).includes('0.173'));
  }
  const head = readFileSync(resolve(__dirname, '../layouts/partials/extend_head.html'), 'utf8');
  assert.ok(head.indexOf('js/notebook-number-format.js') < head.indexOf('id="MathJax-script"'));
});

test('long decimals adjacent to TeX commands and sentence punctuation', () => {
  assert.equal(formatText(String.raw`\(0.0005\times100\times52.85688375=2.6428442\)`, true), String.raw`\(5\times10^{-4}\times100\times52.857=2.643\)`);
  assert.equal(formatText(String.raw`\(\times52.85688375\)`, true), String.raw`\(\times52.857\)`);
  assert.equal(formatText('6652.5798479.'), '6652.58.');
  assert.equal(formatText('.2408332912'), '0.241');
});

test('reference identities and small nonzero values retain their meaning', () => {
  for (const identifier of ['§5.123456', 'v1.23456.7', 'arxiv: 2609.12345', 'doi: 10.123456']) {
    assert.equal(formatText(identifier), identifier);
  }
  assert.equal(formatText('0.00000015101234'), '1.51×10⁻⁷');
  assert.equal(formatText('-0.00000015101234'), '-1.51×10⁻⁷');
});
