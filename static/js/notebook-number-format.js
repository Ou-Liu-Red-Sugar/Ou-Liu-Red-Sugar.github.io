/* Display rounding only. Source material, form inputs and exported packets retain
   their original precision. A small nonzero value is never displayed as zero. */
(function () {
  'use strict';
  const decimals = /(?<![A-Za-z0-9_./])[-+]?(?:\d{1,3}(?:,\d{3})+|\d*)\.\d{4,}(?:[eE][+-]?\d+)?(?![A-Za-z0-9_/]|\.\d)/g;
  const superscripts = {'-':'⁻','+':'⁺','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
  const mathSegments = /(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|(?<![\\$])\$(?!\$)[^\n$]+?\$(?!\$))/g;

  function formatNumber(original, tex = false) {
    const value = Number(original.replaceAll(',', ''));
    if (!Number.isFinite(value) || Math.abs(value) > Number.MAX_SAFE_INTEGER) return original;
    const plus = original.startsWith('+') && value >= 0 ? '+' : '';
    if (value !== 0 && (Math.abs(value) < 0.001 || /[eE]/.test(original))) {
      const [mantissa, power] = value.toExponential(3).split('e');
      const coefficient = Number(mantissa).toString();
      if (tex) return plus + coefficient + '\\times10^{' + Number(power) + '}';
      const exponent = String(Number(power)).split('').map(c => superscripts[c]).join('');
      return plus + coefficient + '×10' + exponent;
    }
    return plus + new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 3, useGrouping: original.includes(',')
    }).format(Object.is(value, -0) ? 0 : value);
  }

  function formatToken(token, index, source, tex = false) {
    const before = source.slice(Math.max(0, index - 45), index);
    if (/(?:arxiv|doi|编号|版本|version|§)\s*[:：#]?\s*$/i.test(before)) return token;
    return formatNumber(token, tex);
  }
  function formatText(text, tex = false) {
    if (tex) {
      // Control words end at the first nonletter: \\times52.85688375 is a
      // command followed by a number, not a text identifier. Keep the command
      // intact and round its following text with the ordinary number rules.
      return text.split(/(\\[A-Za-z]+)/).map(part => /^\\[A-Za-z]+$/.test(part) ? part :
        part.replace(decimals, (token, index, source) => formatToken(token, index, source, true))).join('');
    }
    return text.replace(decimals, (token, index, source) => formatToken(token, index, source));
  }
  function textParts(text) {
    const parts = [];
    let cursor = 0;
    for (const match of text.matchAll(mathSegments)) {
      if (match.index > cursor) parts.push({text: text.slice(cursor, match.index), math: false});
      parts.push({text: match[0], math: true});
      cursor = match.index + match[0].length;
    }
    if (cursor < text.length) parts.push({text: text.slice(cursor), math: false});
    return parts;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {formatNumber, formatText, textParts};
  if (typeof document === 'undefined') return;

  const excluded = 'script,style,textarea,input,select,option,pre,code,kbd,samp,annotation,annotation-xml,[data-number-display], [data-exact-number],a[href^="http"]';
  const processedMath = new WeakMap();

  function formatNode(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest(excluded)) return;
    const original = node.data;
    if (processedMath.get(node) === original) return;
    const parts = textParts(original);
    if (!parts.some(part => formatText(part.text, part.math) !== part.text)) return;
    if (parent.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
      const formatted = formatText(original);
      if (formatted !== original) {
        parent.setAttribute('data-original-number', original);
        parent.setAttribute('title', '完整数值：' + original);
        node.data = formatted;
        processedMath.set(node, formatted);
      }
      return;
    }
    const fragment = node.ownerDocument.createDocumentFragment();
    for (const part of parts) {
      if (part.math) {
        // MathJax must receive both delimiters and the full expression in one
        // text node. Wrapping a numeric token would split and hide the formula.
        const math = node.ownerDocument.createElement('span');
        math.dataset.numberDisplay = '3';
        math.dataset.originalMath = part.text;
        math.title = '完整公式：' + part.text;
        math.textContent = formatText(part.text, true);
        fragment.append(math);
        continue;
      }
      let cursor = 0;
      for (const match of part.text.matchAll(decimals)) {
        fragment.append(part.text.slice(cursor, match.index));
        const rounded = node.ownerDocument.createElement('span');
        rounded.dataset.numberDisplay = '3';
        rounded.dataset.originalNumber = match[0];
        rounded.title = '完整数值：' + match[0];
        rounded.textContent = formatToken(match[0], match.index, part.text);
        fragment.append(rounded);
        cursor = match.index + match[0].length;
      }
      fragment.append(part.text.slice(cursor));
    }
    node.replaceWith(fragment);
  }

  function scan(root) {
    if (root.nodeType === 3) { formatNode(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1 && root.closest(excluded)) return;
    const owner = root.ownerDocument || root;
    const walker = owner.createTreeWalker(root, 4);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(formatNode);
  }

  function install(doc) {
    if (!doc.body || doc.documentElement.dataset.numberDisplayInstalled) return;
    doc.documentElement.dataset.numberDisplayInstalled = '3';
    scan(doc.body);
    const observer = new MutationObserver(records => {
      const roots = new Set();
      for (const record of records) {
        if (record.type === 'characterData') roots.add(record.target);
        else for (const node of record.addedNodes) roots.add(node);
      }
      for (const root of roots) scan(root);
    });
    observer.observe(doc.body, {subtree: true, childList: true, characterData: true});
    for (const frame of doc.querySelectorAll('iframe')) {
      const attach = () => {
        try { if (frame.contentDocument) install(frame.contentDocument); } catch (_) { /* External document. */ }
      };
      frame.addEventListener('load', attach);
      attach();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => install(document), {once:true});
  else install(document);
})();
