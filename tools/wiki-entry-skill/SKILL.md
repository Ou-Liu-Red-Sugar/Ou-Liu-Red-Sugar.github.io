---
name: wiki-entry
description: Create one or more wiki entries for Ou Liu's personal mathematics wiki at C:\Users\23980\Documents\Ou-Liu-Red-Sugar.github.io. Use this skill whenever the user wants to "create a wiki entry", "add to the wiki", "整理成词条", "做一个词条", "make a wiki page", or pastes math notes / LaTeX / Chinese text / web snippets that they want turned into wiki form. Also trigger when the user names a math concept and asks you to write a page for it. The skill follows the user's established conventions (category = (∞,1)-category by default; classical category for the 1-categorical sense; four-section template Definition → Examples → Properties → Related concepts; per-area color palette; [[wikilinks]] for cross-references) and writes the file directly into content/wiki/. When the input contains more than one concept, the skill ASKS the user which entries to extract before writing anything. Treat any input that looks like math notes — even short ones, even without explicit mention of "wiki" — as a potential trigger; the user often expects you to recognise this on your own.
---

# Wiki entry skill

This skill produces wiki entries for Ou Liu's mathematics wiki at

```
C:\Users\23980\Documents\Ou-Liu-Red-Sugar.github.io\content\wiki\
```

The wiki is built with Hugo + PaperMod, with established conventions
(most importantly: "category" always means "(∞,1)-category" here), a
fixed four-section template, a per-area color palette, and several
custom shortcodes for typesetting math.

## Step 0 — refresh the live conventions

Before writing anything, **read these files** so you're working from
the user's actual current conventions, not a memorised snapshot:

- `content/wiki/conventions.md` — wiki-wide conventions and template.
- `archetypes/wiki.md` — the literal Hugo archetype for new entries.
- `data/wiki_palette.yaml` — list of valid `categories:` values.
- `layouts/partials/extend_head.html` — the live MathJax preamble
  (so you know which custom macros are available).
- `tools/gen_tikz.py` (the preamble in `build_tex_document`) — the
  live TikZ preamble, including the custom colour palette.

If any conflict with what's documented below, **trust the live files**.
This skill summarises the conventions; the wiki itself is canonical.

## Step 1 — multi-concept clarification

If the input contains several distinct concepts (a chapter of notes, a
link-dump from nLab, a paste from Banana Space spanning multiple
articles), use `AskUserQuestion` to list the concepts you detected and
let the user pick which to extract — multi-select. Phrase the question
concretely:

> "I see these concepts in your input. Which should I turn into wiki
> entries? (One per entry — pick all that apply.)"

Do **not** silently pick one or batch-create them all. The user has
final say on scope.

A natural-feeling exception: a *preface*, *introduction*, or
*overview* of a single course or paper is a one-concept input — the
field-overview itself. Treat it as a topic-stub (see "Topic stubs vs
concept entries" below) and skip the clarification step.

## Step 2 — identify the entry's mathematical area

Pick a single first-category value from `data/wiki_palette.yaml`. Quick
guide:

- *Category theory* — anything purely categorical (presentable,
  compactly generated, monoidal categories, presheaves, …).
- *Stable homotopy theory* — spectra, K-theory, motivic homotopy,
  triangulated structure.
- *Algebraic geometry* — schemes, sheaves, étale cohomology, motives.
- *Algebraic topology* — homotopy / cohomology of spaces, fibrations,
  spectral sequences in the topological setting.
- *Foundations* — set theory, type theory, the wiki's own conventions.
- *Number theory*, *Analysis*, *Mathematical physics*, … — as named.

If the entry's natural area isn't on the list, **add a line to
`data/wiki_palette.yaml`** before writing the entry. Pick a hex colour
that's visually distinct from the existing ones (a saturated mid-tone,
not a near-duplicate of an existing hue).

## Step 3 — check for collisions and aliases

Before creating a new file, check `content/wiki/` for an existing entry
that already covers this concept. Look at filenames, titles, and
`aliases:` arrays. If a match exists:

- If the user gave you new content for an *existing* entry: ask whether
  to extend the existing file or create a sibling. Don't silently
  overwrite.
- If a related but distinct entry exists: write the new entry and
  cross-link with `[[…]]`.

## Step 4 — write the entry

Filename: `<slug>.md` under `content/wiki/`, where the slug is
lowercase, hyphenated, ASCII-only:

- "Compactly assembled category" → `compactly-assembled-category`.
- "κ-compact object" → `kappa-compact-object`.
- "Étale cohomology" → `etale-cohomology`.

### Frontmatter

```yaml
---
title: "Sentence-case title"
slug: "slug-form"
date: 2026-MM-DD                  # today's date
draft: false
math: true
categories:
  - "Category theory"             # exactly one value from wiki_palette.yaml
tags:
  - keyword
  - keyword
aliases:
  - "Other-name 1"
  - "Other-name 2 with ∞ etc"
description: >
  One-sentence summary, ≤ 25 words. Used in the side index, search, and
  graph node tooltip. Avoid LaTeX inside this field — render as plain text.
---
```

Add `excludeFromGraph: true` for meta entries (the conventions page,
style guides) — those should not appear as graph nodes.

### Body — opening sentence

Open with **one paragraph** in this shape:

> In `[[Subject]]`, a **Title** is a *(class of mathematical object)*.
> Roughly speaking, *(intuitive, non-rigorous explanation — one or two
> sentences)*. For example, *(two or three of the simplest examples)*.

`[[Subject]]` is a wikilink to the relevant topic stub. If the topic
stub doesn't exist yet, write the entry anyway — the link will render
as a greyed-out broken-link span — and **tell the user explicitly** so
they can decide whether to ask you to create one.

Optionally add one or two further intro paragraphs: deeper motivation,
contrast with related notions, applications.

### Body — four standard sections

In this order (a `## References` section before *Related concepts* is
encouraged when external sources are cited):

```markdown
## Definition

{{</* definition */>}}
(Formal definition, with every notation explained. Use
{{</* definition title="…" */>}} when you want a labelled variant.)
{{</* /definition */>}}

## Examples

- (Most basic / canonical example.)
- (Slightly richer.)
- (Non-trivial / illuminating.)

## Properties

### Basic properties

- (Properties almost-immediate from the definition.)

(Add other ### subsections as the topic warrants.)

## References

- Author, *Title*, §X.Y.

## Related concepts

- [[Concept A]] — one-line context.
- [[Concept B]] — one-line context.

{{</* topic_index */>}}
```

The `{{</* topic_index */>}}` at the end auto-renders a navbox of
every other entry sharing this entry's first category. Don't maintain
it by hand; just include the shortcode.

## Topic stubs vs concept entries

A *concept entry* is what the four-section template is designed for: a
specific mathematical object (a presentable category, a sheaf, an
elliptic curve). The "In [[Subject]], a **Title** is a …" opening
fits naturally.

A *topic stub* is a one-paragraph orientation to a whole field
(`category-theory.md`, `stable-homotopy-theory.md`,
`algebraic-geometry.md`). For these, the rigid opening pattern reads
awkwardly because the concept *is* the parent field. Open instead
with a **direct definitional sentence**:

> "**Algebraic geometry** is the study of geometric objects represented
> as functors $X\colon \mathsf{CAlg} \to \mathsf{Set}$. Roughly
> speaking, … For example, …"

The rest of the template (Definition / Examples / Properties /
Related concepts / topic_index) still applies. The Definition for a
topic stub is usually the central object of the field
(e.g. "An (∞,1)-category is …" inside `category-theory.md`).

## Conventions in force (apply while drafting)

- **category** = **1-category** = **(∞,1)-category**.
- **n-category** = **(∞, n)-category**.
- **classical category** = **1-truncated category** is the explicit
  name for the 1-categorical, $\mathsf{Set}$-enriched notion. Either
  qualifier is acceptable; pick whichever reads better in context.
- **anima** = the (∞,1)-category of ∞-groupoids ($\mathsf{An}$).

In practice, **drop the ∞- prefix** when adapting input that uses
"presentable ∞-category", "stable ∞-category", "compactly generated
∞-category", etc. They become "presentable category", "stable
category", "compactly generated category" without the prefix.

## Math rendering: what MathJax actually supports

Inline math is `$…$`, display math is `\[ … \]`. The renderer is
MathJax 3 with the `amscd`, `newcommand`, and `html` packages loaded
in `extend_head.html`. **Stick to standard MathJax commands** plus the
site's defined macros — anything outside this set will render as raw
text on the page.

### Site-defined macros

These are pre-defined in `extend_head.html` and safe to use anywhere:

| Macro | Expansion |
|---|---|
| `\Z, \R, \Q, \C, \N` | $\mathbb{Z}$, $\mathbb{R}$, $\mathbb{Q}$, $\mathbb{C}$, $\mathbb{N}$ |
| `\Hom`, `\Spec`, `\colim` | `\operatorname{Hom}`, `\operatorname{Spec}`, `\operatorname{colim}` |
| `\id`, `\ker`, `\im` | `\operatorname{id}`, `\operatorname{ker}`, `\operatorname{im}` |
| `\hofib`, `\cofib` | `\operatorname{hofib}`, `\operatorname{cofib}` |
| `\coloneqq` | `\mathrel{:=}` |
| `\To` | `\longrightarrow` |
| `\xhookrightarrow{f}`, `\xhookleftarrow{f}`, `\xtwoheadrightarrow{f}` | extensible hooked / two-headed arrows with label |
| `\cite{ref-id}`, `\citet{ref-id}` | inline citations in MathJax (rare) |
| `\dint`, `\dsum`, `\dprod`, `\dlim`, `\dcolim` | `\displaystyle`-wrapped integral / sum / product / lim / colim — use in **inline math** when the indices should sit below the symbol |
| `\diint`, `\diiint`, `\doint` | `\displaystyle\iint`, `\iiint`, `\oint` |
| `\dbigcup`, `\dbigcap`, `\dbigvee`, `\dbigwedge`, `\dbigoplus`, `\dbigotimes`, `\dbigsqcup` | `\displaystyle`-wrapped large $\bigcup$ / $\bigcap$ / $\bigvee$ / $\bigwedge$ / $\bigoplus$ / $\bigotimes$ / $\bigsqcup$ |

If a useful macro is missing, ask the user and propose adding it to
`extend_head.html`'s `macros:` block.

### Common LaTeX you might be tempted to use that DOES NOT WORK

- `\longhookrightarrow` — use `\hookrightarrow` instead.
- `\xrightarrow{f}` works, but `\xhookrightarrow{f}` is the site's
  custom variant for the hooked case (use it).
- Multi-letter operator-name commands you'd usually write inside an
  `\operatorname{}` — write the `\operatorname{...}` explicitly unless
  the macro is in the table above.
- `\begin{align}` etc. work because `ams` math is loaded; but `\begin{equation}` is
  superfluous in MathJax — use `\[ … \]` for display math.
- Custom `\newcommand` declarations *inside the markdown body* don't
  persist between blocks. If you need a recurring symbol, propose
  adding it to the global preamble.

If you're unsure whether a command renders, prefer the verbose form
(`\operatorname{Spec}` over `\Spec`) — it's always safe.

## Available shortcodes (use these instead of raw LaTeX environments)

- `{{</* definition */>}}…{{</* /definition */>}}` — also supports
  `title="…"` and `id="…"`. Use `title=` to disambiguate when an
  entry has multiple definitions.
- `{{</* theorem */>}}`, `{{</* proposition */>}}`, `{{</* lemma */>}}`,
  `{{</* corollary */>}}` — numbered theorem-like blocks.
- `{{</* proof */>}}…{{</* /proof */>}}` — collapsible proof block.
- `{{</* remark */>}}`, `{{</* example */>}}` — boxed environments.
- `{{</* tikzcd */>}}…{{</* /tikzcd */>}}` — commutative diagrams. Body
  is the body of a `tikzcd` environment (with or without the
  `\begin{tikzcd}…\end{tikzcd}` wrapper).
- `{{</* tikz */>}}…{{</* /tikz */>}}` — general TikZ pictures. Body is
  the contents of a `tikzpicture` environment.
- `{{</* cite "ref-id" "Lemma 1.2" */>}}` — inline reference to a
  bibliography entry with `id="ref-ref-id"`.
- `{{</* thmref "lemma-id" */>}}` — internal cross-reference to a
  theorem block in the same entry.
- `{{</* topic_index */>}}` — auto-renders a navbox of sibling entries
  in the same first-category.

Both `{{</* tikz */>}}` and `{{</* tikzcd */>}}` accept these
parameters: `caption="…"` (markdown caption rendered below the SVG),
`alt="…"`, `class="…"`, `width="…"`. Captions are valuable on every
non-trivial figure — use them.

## TikZ palette and preamble

The `tools/gen_tikz.py` preamble pre-loads `tikz` plus the libraries
`arrows.meta`, `calc`, `decorations.{markings,pathmorphing,pathreplacing}`,
`fit`, `patterns`, `positioning`, `shapes.*`, `through`, `intersections`,
`matrix`, `backgrounds`, `cd`. It also defines a small named-colour
palette via `xcolor`:

| Colour name | Hex |
|---|---|
| `winered` | `#8B1A1A` |
| `prussianblue` | `#003366` |
| `agreen` | `#2A6E3F` |
| `oxblue` | `#002147` |
| `burntorange` | `#B8541D` |

When porting figures from LaTeX source, **only use names from this
list** (or standard xcolor names like `gray!55`, `black`, `red`). If
the source uses a colour outside this palette, either add the colour
to `gen_tikz.py`'s preamble (preferred) or substitute a similar one
from the existing palette.

The `tikzcd` compiler has a smaller preamble (just `tikz-cd` +
`amsmath/amssymb`) — fine for arrow diagrams, but if you need the full
palette or a `tikzpicture`-style drawing, use `{{< tikz >}}` instead.

## Porting figures from LaTeX source

When the user's input is a `.tex` excerpt with figures, **port them
into the entry**. Don't drop them; they were the visual that made the
input click. Concretely:

1. Copy the `tikzpicture` body verbatim into a `{{< tikz >}}…{{< /tikz >}}`
   block. The shortcode strips the `\begin{tikzpicture}…\end{tikzpicture}`
   wrapper, so you can include it or not.
2. Add a `caption="…"` parameter. A short caption that names the
   figure's role (not a re-statement of the prose) is best.
3. Check that all `\definecolor`-named colours in the figure are in
   the site palette (above). If not, add them to `gen_tikz.py`.
4. After authoring, **tell the user to run `python tools/gen_tikz.py`**
   to compile the figure. The shortcode references a hash-named SVG
   that doesn't exist until the compiler has run.

For commutative diagrams (`tikzcd`), use `{{< tikzcd >}}` and tell the
user to run `python tools/gen_tikzcd.py` instead.

## Linking conventions

- Use `[[Title]]` for cross-references. Match against entry `title:`
  and `aliases:`, case-insensitive. The supported forms are:

  ```markdown
  [[Title]]                   — link to entry "Title", display "Title"
  [[Title|display]]           — link to "Title" with custom display text
  [[Title#anchor]]            — link to a section anchor in "Title"
  [[Title#anchor|display]]    — link to anchor with custom display text
  ```

  Use the pipe form for grammatical agreement (plurals, lower case,
  inflected forms): `[[Compactly generated category|compactly
  generated categories]]` reads more naturally than `[[Compactly
  generated category]]s` ever could.
- The anchor (after `#`) is normalised via Hugo's `anchorize` to
  match heading slugs. Section headings are slugged automatically by
  the renderer; anchor text in the wikilink can use natural casing
  (e.g. `[[Scheme#Quasi-coherent modules]]`).
- A `[[Title]]` *inside a fenced code block* is rendered literally
  (the partial preserves code regions). Use this when *showing* the
  wikilink syntax.
- Prefer the wikilink form over raw HTML `<a href>` for internal
  links, so renames and aliases stay coherent.

## Existing topic stubs (verify before linking)

Before relying on a `[[Subject]]` link in the opening sentence, check
`content/wiki/` for the matching topic stub. As of the last skill
update these are:

- `[[Category theory]]`
- `[[Stable homotopy theory]]`
- `[[Algebraic geometry]]`

If the link would point at a non-existent stub, write the entry
anyway and report the missing stub to the user in your final summary.
Don't auto-create it — that's a separate decision.

## Multi-entry batches

If the user confirms they want multiple entries from the same input,
write each one as a complete file in the same response. Number them
in your summary (Entry 1: …, Entry 2: …) and say which file path each
one ended up at. Then check that all `[[…]]` cross-references resolve;
report any unresolved ones.

## Final summary template

After writing, end your response with a short report:

- File(s) created — full path each.
- One-line description of each entry's content.
- **Compilation needed?** If the entry contains `{{< tikz >}}` or
  `{{< tikzcd >}}` blocks that didn't exist before, remind the user
  to run `python tools/gen_tikz.py` and/or `python tools/gen_tikzcd.py`
  before previewing.
- Anything that needs follow-up: missing topic stubs, new categories
  added to the palette, cross-references that point at concepts not
  yet on the wiki, definitions you weren't sure of and marked TODO,
  custom TikZ colours that needed to be added.
