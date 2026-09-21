const configElement = document.getElementById('discussion-config');
if (configElement) setup(JSON.parse(configElement.textContent));

function setup(config) {
  const dialog = document.getElementById('discussion-dialog');
  const container = document.getElementById('discussion-thread');
  const status = document.getElementById('discussion-status');
  const title = document.getElementById('discussion-title');
  const scope = document.getElementById('discussion-scope');
  const context = document.getElementById('discussion-context');
  const githubLink = document.getElementById('discussion-on-github');
  const zh = config.lang === 'zh';
  const t = (a, b) => zh ? a : b;
  const origin = 'https://giscus.app';
  let selected, returnFocus, script, loaded = false;

  // The logical node and explicit source anchor survive title and URL changes.
  // Language variants have independent conversations because their text differs.
  function thread(section) {
    const url = new URL(config.url);
    if (section) url.hash = section.id;
    return {
      term: `notebook:${config.lang}:${config.nodeId}:${section ? 'section:' + section.id : 'entry'}`,
      title: section?.title || config.title,
      url: url.href,
      description: `${config.title}${section ? ' · ' + section.title : ''}${config.version ? '\n' + t('正文版本：', 'Text version: ') + config.version : ''}`,
      section: Boolean(section)
    };
  }

  function setBacklink(url) {
    let meta = document.querySelector('meta[name="giscus:backlink"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'giscus:backlink';
      document.head.append(meta);
    }
    meta.content = url;
  }

  function sendConfig() {
    const frame = container.querySelector('iframe.giscus-frame');
    if (!frame || !selected) return;
    frame.contentWindow.postMessage({giscus: {setConfig: {
      term: selected.term, description: selected.description,
      backLink: selected.url, strict: true,
      emitMetadata: true, inputPosition: 'top'
    }}}, origin);
  }

  function loadThread() {
    if (!config.ready) {
      status.textContent = t('讨论暂未开放。入口已准备好，接通后可使用 GitHub 账号参与。', 'Discussions are not open yet. Once connected, you can join with your GitHub account.');
      return;
    }
    setBacklink(selected.url);
    status.textContent = t('正在载入讨论…', 'Loading discussion…');
    if (script) {
      if (loaded) sendConfig();
      return;
    }
    script = document.createElement('script');
    script.src = origin + '/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    Object.assign(script.dataset, {
      repo: config.repo, repoId: config.repoId,
      category: config.category, categoryId: config.categoryId,
      mapping: 'specific', term: selected.term, strict: '1',
      reactionsEnabled: '1', emitMetadata: '1', inputPosition: 'top',
      theme: 'light', lang: zh ? 'zh-CN' : 'en', loading: 'eager'
    });
    script.addEventListener('error', () => {
      status.textContent = t('讨论暂时无法载入，可稍后重试。', 'The discussion could not load. Please try again later.');
      script.remove(); script = null;
    });
    const observer = new MutationObserver(() => {
      const frame = container.querySelector('iframe.giscus-frame');
      if (!frame) return;
      observer.disconnect();
      frame.addEventListener('load', () => {
        loaded = true;
        sendConfig();
        status.textContent = '';
      });
    });
    observer.observe(container, {childList: true, subtree: true});
    container.append(script);
  }

  function open(section, trigger) {
    selected = thread(section);
    if (!dialog.open) returnFocus = trigger;
    title.textContent = selected.title;
    scope.textContent = selected.section ? t('章说 · 就这一节讨论', 'Discuss this section') : t('本篇讨论', 'Entry discussion');
    context.textContent = selected.section ? config.title : t('提出疑问、补充资料，或分享你的推演。', 'Ask a question, contribute a source, or share your reasoning.');
    githubLink.hidden = true;
    dialog.dataset.thread = selected.term;
    dialog.querySelectorAll('[data-discuss-entry]').forEach(b => b.hidden = !selected.section);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('[data-close-discussion]').focus({preventScroll: true});
    loadThread();
  }

  document.querySelectorAll('[data-discuss-entry]').forEach(button => button.addEventListener('click', () => open(null, button)));
  dialog.querySelector('[data-close-discussion]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => returnFocus?.focus({preventScroll: true}));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.querySelector('[data-copy-discussion-link]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(selected.url);
      status.textContent = t('已复制原文链接。', 'Passage link copied.');
    } catch {
      status.textContent = selected.url;
    }
  });

  function blockFor(target) {
    if (target.matches('h2,h3,h4')) return target;
    if (target.matches('section')) return target.querySelector('h2,h3,h4');
    const block = target.closest('p') || target;
    const visibleContent = block.cloneNode(true);
    visibleContent.querySelectorAll('.anchor-alias').forEach(e => e.remove());
    if (visibleContent.textContent.trim()) return block.matches('p') ? block : null;
    const next = block.nextElementSibling;
    return next?.matches('h2,h3,h4') ? next : null;
  }
  const attached = new Set();
  for (const anchor of config.anchors) {
    const target = document.getElementById(anchor.id);
    if (!target || !target.closest('.entry-body,.entry-section')) continue;
    const block = blockFor(target);
    if (!block || attached.has(block) || block.closest('.footnotes,.experiment-embed,table')) continue;
    attached.add(block);
    const section = {id: anchor.id, title: anchor.title || block.textContent.trim()};
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'section-discuss';
    button.textContent = t('章说', 'Discuss');
    button.setAttribute('aria-label', t('讨论这一节：', 'Discuss this section: ') + section.title);
    button.setAttribute('aria-haspopup', 'dialog');
    button.dataset.discussionAnchor = anchor.id;
    button.addEventListener('click', () => open(section, button));
    block.append(button);
  }

  window.addEventListener('message', event => {
    const frame = container.querySelector('iframe.giscus-frame');
    if (event.origin !== origin || event.source !== frame?.contentWindow || !event.data?.giscus) return;
    const data = event.data.giscus;
    if (data.error) {
      status.textContent = String(data.error).includes('Discussion not found')
        ? t('还没有讨论，可以从你的第一个问题开始。', 'No discussion yet. Start with your first question.')
        : t('讨论暂时无法载入，请稍后重试。', 'The discussion is temporarily unavailable. Please try again later.');
    }
    if (data.discussion?.url && data.discussion.title === selected?.term) {
      const url = new URL(data.discussion.url);
      if (url.origin === 'https://github.com' && url.pathname.startsWith('/' + config.repo + '/discussions/')) {
        githubLink.href = url.href;
        githubLink.hidden = false;
        status.textContent = '';
      }
    }
  });
}
