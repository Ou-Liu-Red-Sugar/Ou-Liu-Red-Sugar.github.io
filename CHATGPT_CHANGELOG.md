# ChatGPT 变更日志

## 更新摘要
- 引入通用的 `thm-base` 渲染器，所有定理类短代码（theorem/lemma/proposition/definition/corollary）按页面顺序自动编号；星号版本保持不编号。
- 支持通过 `id` 参数注册锚点并用 `{{< thmref "id" >}}` 生成可点击引用，缺失时会显示 `[unknown:id]` 占位。
- 更新定理块样式（PaperMod 兼容）：统一边框、圆角与背景，标题行包含种类、编号与可选标题，滚动定位留出顶部空隙。
- 将 `layouts/shortcodes/tikz.html` 中的 `tikzcd` 内容统一迁移到 `tikzcd` 专用短代码，便于 TikZJax 直接渲染 SVG（共 12 个块，涉及 `content/notes/Type.md`、`content/notes/SixFunctor.md`）。
- 在 README 记录了数学写作与引用指南（MathJax 宏、定理短代码、TikZ/TikZCD 用法、参考文献短代码）。
- 修正 `thmref` 读取存储数据的方式并新增 `scroll-margin-top`，确保锚点跳转准确且不会贴顶。

## 迁移详情
- 扫描并迁移 tikz → tikzcd：找到 12 个包裹 `\begin{tikzcd}` 的 `{{< tikz >}}` 块，全部转换为 `{{< tikzcd >}}...{{< /tikzcd >}}` 并移除内部 `\begin{tikzcd}`/`\end{tikzcd}`。涉及文件：`content/notes/Type.md`、`content/notes/SixFunctor.md`。
- 后续扫描确认无残留或无法安全转换的块。

## 文件影响
- 模板与短代码：`layouts/shortcodes/thm-base.html`、`theorem.html`、`lemma.html`、`proposition.html`、`definition.html`、`corollary.html`、`thmref.html`、`tikzcd.html` 等。
- 样式：`static/css/custom.css`（定理块与 TikZCD 样式）。
- 文档：`README.md`、`CHATGPT_CHANGELOG.md`。
- 内容：`content/notes/Type.md`、`content/notes/SixFunctor.md`（tikz → tikzcd 迁移）。
