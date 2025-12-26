---
title: "Commutative diagrams: usage"
date: 2026-01-01
draft: false
math: true
---

This site renders TikZ-CD diagrams by compiling LaTeX to SVG ahead of time. Use the shortcodes below instead of raw LaTeX environments so Hugo can locate, hash, and embed each diagram.

## Available shortcodes

- **`tikzcd`**: a single diagram written in TikZ-CD syntax (the part that normally goes inside `\\begin{tikzcd} ... \\end{tikzcd}`).
- **`cdrow`**: manual row layout for multiple diagrams and a separator you supply (e.g. `\\Leftrightarrow`, `\\simeq`, “def.”). Include one or more `tikzcd` blocks inside.

## Minimal examples

**Single diagram (`tikzcd`)**

{{< tikzcd >}}
A \\arrow[r, "f"] \\arrow[d, "g"'] & B \\arrow[d, "h"] \\
C \\arrow[r, "k"'] & D
{{< /tikzcd >}}

**Side-by-side or equivalence layout (`cdrow`)**

{{< cdrow >}}
{{< tikzcd >}}
X \\arrow[r, "f"] \\arrow[d, "g"'] & Y \\arrow[d, "h"] \\
Z \\arrow[r, "k"'] & W
{{< /tikzcd >}}
<span class="cdsep">\\Leftrightarrow</span>
{{< tikzcd >}}
X' \\arrow[r, "f'"] \\arrow[d, "g'"'] & Y' \\arrow[d, "h'"] \\
Z' \\arrow[r, "k'"'] & W'
{{< /tikzcd >}}
{{< /cdrow >}}

## Pitfalls to avoid

- **Shortcodes must start at column 0.** Hugo does not tolerate indentation before `{{< tikzcd >}}`, `{{< cdrow >}}`, or their closing tags.
- **Do not wrap diagrams in LaTeX display environments.** Write the TikZ-CD body directly inside the shortcode blocks; the generator ignores bare `\\[\\begin{tikzcd} ... \\end{tikzcd}\\]` text.

## Workflow

1. **Write diagrams in Markdown.** Use the shortcodes above; keep them flush-left. The generator normalizes whitespace, hashes the source, and writes `static/generated/tikzcd/<hash>.svg` plus a manifest.
2. **Run the generation script.** From the repo root, execute `python tools/gen_tikzcd.py`. It compiles all diagrams (LaTeX → PDF → SVG via `dvisvgm` and `mutool`) and deduplicates identical sources by hash.
3. **Preview with Hugo.** Start the local server with `hugo server -D` and check that SVGs appear where expected. SVGs are cached by hash, so reruns are fast unless the source changes.
