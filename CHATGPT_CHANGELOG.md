# ChatGPT 变更日志

## 更新摘要
- 修正了 `thmref` 引用逻辑，改用映射访问以正确读取保存的种类、编号和锚点。
- 为定理类块增加了 `scroll-margin-top`，通过锚点跳转时留出视口空间，方便引用定位。
- 检查 `content/` 下的 tikz → tikzcd 迁移：未发现需要转换的块（0 个）。

## 迁移详情
- 扫描结果：未找到形如 `{{< tikz >}} ... \begin{tikzcd} ...` 的块，因此无内容变更。
- 未出现无法安全转换的块。

## 文件影响
- 修改文件：`layouts/shortcodes/thmref.html`、`static/css/custom.css`
- 内容文件：无改动（tikzcd 迁移无需操作）。
