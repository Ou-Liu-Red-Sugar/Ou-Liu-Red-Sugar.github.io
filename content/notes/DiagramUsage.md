---
title: "Commutative diagrams: usage"
date: 2026-01-01
draft: false
math: true
---

This site renders commutative diagrams written in **TikZ-CD** by compiling LaTeX to **SVG ahead of time**.  
Diagrams must be written using the shortcodes described below, rather than raw LaTeX environments, so that Hugo can reliably locate, hash, and embed each diagram.

## Available shortcodes

- **`tikzcd`**  
  Renders a single commutative diagram.  
  The body should be valid TikZ-CD code, i.e. exactly what would normally appear inside  
  `\begin{tikzcd} … \end{tikzcd}`.

- **`cdrow`**  
  A container shortcode for arranging multiple diagrams in a single row, together with a manually supplied separator  
  (for example `\Leftrightarrow`, `\simeq`, or textual labels such as “def.”).  
  One or more `tikzcd` blocks may appear inside a `cdrow`.

## Minimal examples

### Single diagram (`tikzcd`)

```tex
{{< tikzcd >}}
A \ar[r,"f"] \ar[d,"g"'] & B \ar[d,"h"] \\
C \ar[r,"k"']            & D
{{< /tikzcd >}}
```

### Side-by-side or equivalence layout (`cdrow`)

```tex
{{% cdrow %}}
{{< tikzcd >}}
X \ar[r,"f"] \ar[d,"g"'] & Y \ar[d,"h"] \\
Z \ar[r,"k"']            & W
{{< /tikzcd >}}

<span class="cdsep">\( \Leftrightarrow \)</span>

{{< tikzcd >}}
X' \ar[r,"f'"] \ar[d,"g'"'] & Y' \ar[d,"h'"] \\
Z'  \ar[r,"k'"']            & W'
{{< /tikzcd >}}
{{% /cdrow %}}
```

## Pitfalls to avoid

- **Shortcodes must start at column 0.**  
  Hugo does not tolerate leading indentation before `{{< tikzcd >}}`, `{{% cdrow %}}`, or their corresponding closing tags.

- **Do not wrap diagrams in LaTeX display environments.**  
  Write the TikZ-CD body directly inside the shortcode blocks.  
  Bare LaTeX such as  
  `\[\begin{tikzcd} … \end{tikzcd}\]`  
  is ignored by the generator and will not be rendered.

## Workflow

1. **Write diagrams in Markdown.**  
   Use the shortcodes above and keep them flush-left.  
   The generator normalizes whitespace, computes a content hash, and records each diagram.

2. **Run the generation script.**  
   From the repository root, execute:
   ```tex
   python tools/gen_tikzcd.py
   ```
   This compiles all diagrams (LaTeX → PDF → SVG via `dvisvgm` and `mutool`), writes the results to  
   `static/generated/tikzcd/<hash>.svg`, and deduplicates identical diagrams by hash.

3. **Preview with Hugo.**  
   Start a local server with:
   ```tex
   hugo server -D
   ```
   Verify that SVGs appear at the expected locations.  
   Since diagrams are cached by hash, regeneration is fast unless the source changes.
