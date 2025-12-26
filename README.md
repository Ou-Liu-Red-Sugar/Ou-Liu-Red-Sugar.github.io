# Math-first writing guide

This site is configured for TeX-heavy writing with Hugo + PaperMod and ships reusable shortcodes for theorem-style blocks and commutative diagrams. Use this guide to add math content quickly.

## Prerequisites
- Install **Hugo Extended** (required for SCSS/SVG pipelines). See https://gohugo.io/getting-started/installing/.  
- Clone the repo and run the usual Hugo commands:
  - `hugo server -D` to preview locally.
  - `hugo` to build the static site into `public/`.

## Writing math
- Inline math: `$ ... $` or `\( ... \)`
- Display math: `$$ ... $$` or `\[ ... \]`
- Goldmark passthrough is enabled so these delimiters are preserved for MathJax.
- Common macros are preloaded (see `layouts/partials/extend_head.html`): `\Z, \R, \Q, \C, \N`, `\Hom`, `\Spec`, `\colim`, `\ker`, `\im`, `\hofib`, `\cofib`, `\To`, `\coloneqq`, `\operatorname{id}`.

## Theorem-style shortcodes
Wrap text in the matching shortcode to get styled math environments defined in `layouts/shortcodes/` and `static/css/custom.css`.

Examples:

```markdown
{{< theorem title="Yoneda" >}}
Every presheaf is a colimit of representables.
{{< /theorem >}}

{{< lemma >}}
A section that is both left- and right-invertible is an isomorphism.
{{< /lemma >}}

{{< proposition title="Universal property" >}}
...body...
{{< /proposition >}}

{{< definition >}}A groupoid is a category whose morphisms are all invertible.{{< /definition >}}

{{< remark >}}Short observations live here.{{< /remark >}}

{{< idea >}}Sketchy ideas or heuristics.{{< /idea >}}

{{< proofc >}}
Proof text that can be collapsed/expanded; the QED box is added automatically.
{{< /proofc >}}
```

## Commutative diagrams
Two shortcodes cover different levels of complexity.

### 1) Classic `CD` diagrams (MathJax/AMScd)
Use for simple square/triangle diagrams.

```markdown
{{< cd >}}
A @>f>> B \\
@VgVV   @VVhV \\
C @>>k> D
{{< /cd >}}
```

### 2) TikZ commutative diagrams rendered to SVG
Use `tikzcd` when you need curved arrows, labels, or more elaborate layouts. The content is wrapped in a `tikzcd` environment and rendered by TikZJax to SVG.

```markdown
{{< tikzcd >}}
X \arrow[r, "f"] \arrow[d, swap, "g"] & Y \arrow[d, "h"] \\
Z \arrow[r, "k"] & W
{{< /tikzcd >}}
```

Tips:
- Write standard `tikzcd` syntax; TikZJax compiles it in the browser.
- SVG output is responsive and centered via `static/css/custom.css`.

## General TikZ pictures
For non-diagram TikZ snippets, use the `tikz` shortcode. TikZJax handles compilation the same way as above.

```markdown
{{< tikz >}}
\begin{tikzpicture}
  \draw (0,0) circle (1cm);
\end{tikzpicture}
{{< /tikz >}}
```

## Styling
Typography, math blocks, and diagram wrappers are customized in `static/css/custom.css`. Adjust colors or spacing there if you want to tweak the TeX-like appearance.
