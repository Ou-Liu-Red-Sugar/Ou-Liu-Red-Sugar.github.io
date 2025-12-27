# Ou’s Hugo Notes Converter

A deterministic assistant for converting raw mathematical notes into **Hugo-ready academic Markdown**, designed for a **PaperMod + MathJax** workflow.

This tool targets **theoretical mathematics notes** and intentionally avoids BibTeX/Pandoc complexity in favor of stable, linkable HTML anchors.

---

## Motivation

When writing mathematics, much of the friction is editorial rather than mathematical:

- LaTeX environments do not map cleanly to Hugo.
- MathJax does not reliably typeset inside collapsible `<details>` blocks.
- `\cite{...}` + BibTeX is heavy for short notes and fragile on static sites.
- Formatting inconsistencies accumulate and slow down writing.

This GPT removes that friction by enforcing a small, stable set of formatting rules.

---

## Scope

Designed for:

- short notes / “other notes” / informal research sketches
- algebraic geometry, homotopy theory, higher category theory
- Hugo sites using:
  - PaperMod
  - MathJax v3
  - custom shortcodes: `definition`, `lemma`, `theorem`, `proofc`, `tikzcd`, …

Not intended for:

- LaTeX paper/journal workflows
- BibTeX / CSL citation pipelines
- Pandoc-based publishing

---

## Core Principles

1. **Determinism over cleverness**  
   Same input → same structure.

2. **No hidden MathJax magic**  
   Anything inside `<details>` must not rely on MathJax macros for citations.

3. **Everything linkable**  
   All citations resolve to stable HTML anchors.

4. **Minimal, academic output**  
   Clean headings, short paragraphs, stable formatting.

---

## What This GPT Does

### 1) Converts LaTeX-style environments

| LaTeX | Hugo Output |
|------|-------------|
| `\begin{definition}` | `{{< definition >}}` |
| `\begin{lemma}` | `{{< lemma >}}` |
| `\begin{theorem}` | `{{< theorem >}}` |
| `\begin{proposition}` | `{{< proposition >}}` |
| `\begin{remark}` | `{{< remark >}}` |
| `\begin{proof}` | `{{< proofc >}}` |

Optional titles are preserved via `title="..."`.

---

### 2) Enforces safe citation syntax

Never outputs:

```tex
\cite{LurieSAG}
```

Always outputs:

```markdown
    {{< cite LurieSAG "Lemma D.3.3.6" >}}
```

Rendered style:

* ``[LurieSAG]``
* ``[LurieSAG, Lemma D.3.3.6]``
Linked to:
* ``#ref-LurieSAG``

This works inside proofs and collapsible blocks without needing MathJax re-typesetting.

### 3) Normalizes References (stable HTML)

References are always emitted as HTML to avoid Markdown parsing edge cases:

```html
<ul class="refs">
  <li id="ref-LurieSAG">
    <strong>Lurie, Jacob</strong>.
    <em>Spectral Algebraic Geometry</em>.
    (2018).
    <a href="...">PDF</a>.
  </li>
</ul>
```

### 4) Normalizes References (stable HTML)
All commutative diagrams are emitted as:

```markdown
{{< tikzcd >}}
A \ar[r] & B
{{< /tikzcd >}}
```

No raw ``\begin{tikzcd}`` remains.

### 5) Produces a single Hugo-ready document
Output is one Markdown file:

* with front matter (if provided),
* no commentary,
* no partial snippets.

---
#### Expected Input

Input may include:

* LaTeX-like environments
* inline and display math
* bibliographic hints (e.g. “see Lurie, SAG, Lemma …”)
* mixed English/Chinese prose

No pre-cleaning required.

---
#### Output Guarantees

Before returning output, the GPT ensures:
* no ``\cite`` macros remain
* all citations use ``{{< cite ... >}}``
* all references have ``id="ref-KEY"``
* proofs never rely on MathJax for citations
* output renders correctly after refresh

---
#### Typical Usage
Prompt:
| Convert the following notes into a Hugo short note.
Use ``[KEY, LOCATOR]`` citation style.
Output a single Markdown file.

---
Recommended Workflow
1. Write freely (messy LaTeX-like notes are fine).
2. Paste into this GPT.
3. Copy output into ``content/notes/...md``.
4. Run ``hugo server``
5. Publish.

---


#### Maintenance Notes
* MathJax upgrades: still works (citations are HTML anchors).
* PaperMod CSS changes: references remain stable.
* New environments: extend the environment mapping in the GPT instructions.