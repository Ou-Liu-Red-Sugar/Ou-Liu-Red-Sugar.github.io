# Transformation Rules for Mathematical Notes

**NORMATIVE: Any deviation from these rules is an error.**

## Scope
- Applies to all automated conversions of raw mathematical notes into this repository’s Hugo-compatible Markdown format.
- Rules are mandatory requirements, not suggestions.
- Rules apply exclusively to PaperMod + MathJax v3 workflow with custom shortcodes defined in `layouts/shortcodes/`.

## Invariants (MUST NOT change)
- MUST NOT rewrite, paraphrase, simplify, or explain mathematical prose or formulae.
- MUST NOT alter mathematical symbols, notation, logical structure, or the ordering/splitting of statements.
- MUST NOT invent new macros, environments, or formatting conventions beyond those present in this repository.
- MUST NOT drop or reorder existing front matter fields; preserve YAML delimiters (`---`).
- MUST NOT emit any raw LaTeX structural commands in output, including `\begin{...}`, `\end{...}`, `\label`, `\ref`, `\eqref`, `\cite`.
- Diagrams MUST be emitted via `{{< tikzcd >}}...{{< /tikzcd >}}` (and `cdrow` where applicable), even if raw environments appear in the input.
- MUST NOT degrade linkability: anchors, IDs, and hashes must remain stable.

## Permitted Transformations
1. Map LaTeX-style theorem environments to shortcode pairs:
   - `definition`, `lemma`, `theorem`, `proposition`, `corollary`, `remark`, `construction`, `idea`.
   - Syntax: `{{< kind >}}...{{< /kind >}}` or percent form `{{% kind %}}...{{% /kind %}}` as already used.
   - Optional attributes: `title="..."`, `id="..."`, `group="..."` (mirrors `thm-base.html`).
2. Proofs:
   - Use `{{< proof >}}...{{< /proof >}}` with optional title parameter (first positional or `title=`).
   - Proof blocks render as `<details>`; keep inner Markdown intact.
3. Citations:
   - Replace all citation macros with `{{< cite KEY >}}` or `{{< cite KEY "Locator" >}}` (or `key=`, `loc=` variants).
   - Citation text renders as `[KEY]` or `[KEY, Locator]` linking to `#ref-KEY`.
4. References list:
   - Emit references as HTML `<ul class="refs"> ... </ul>` with each `<li>` carrying `id="ref-KEY"` and bolded author, italicized title, year, and optional links (mirrors existing notes). Default MUST be this HTML structure.
   - The `{{< references key="KEY" >}}...{{< /references >}}` shortcode MAY be used ONLY if it already appears in the surrounding document/input.
5. Commutative diagrams:
   - Use `{{< tikzcd >}}...{{< /tikzcd >}}` with the inner body hashed by the shortcode (no surrounding `\begin{tikzcd}` or trailing whitespace). Optional params: `hash`, `alt`, `class`, `width`, `caption`.
   - For side-by-side diagrams, wrap multiple `tikzcd` blocks inside `{{< cdrow >}}...{{< /cdrow >}}` separated by the inline separator `<span class="cdsep">\(\Leftrightarrow\)</span>` when present in sources.
6. Cross-references to numbered results:
   - When IDs are provided on theorem-like blocks, they register with `thmref`. Use `{{< thmref "id" >}}` (or `fmt=` variants) for references; IDs must remain unchanged.
7. Front matter:
   - Preserve all fields such as `title`, `date`, `math`, `draft`, `tags`, `categories`, `ShowToc`, `TocOpen`, `comments`, `aliases`, `description`, `summary`. Do not reorder semantically significant keys when present; retain YAML delimiters.

## Formatting Conventions
- Markdown structure mirrors existing notes: headings (`#`, `##`, `###`) and horizontal rules (`---`) separate sections.
- Inline math uses `$...$`; display math uses `\[ ... \]` or `$$ ... $$`. Do not alter delimiters.
- Paragraph spacing and bullet lists MUST remain consistent with existing spacing; avoid introducing extra blank lines inside shortcode bodies.
- Shortcodes render inner content via `markdownify` or `RenderString`; maintain valid Markdown inside.
- Theorem numbering is automatic per page order (`thm-base.html`); starred/`unnumbered` variants suppress numbering, while explicit `id` anchors override auto-generated anchors.
- Proof blocks end with an inline `$\square$` supplied by the shortcode; do not add manual QED symbols.
- Citations rely on HTML anchors; ensure every citation target exists in the references list with matching `ref-KEY` IDs.
- Citation keys (KEY) are case-sensitive and MUST be preserved verbatim.
- TikZCD hashing trims whitespace and strips `\begin{tikzcd}`/`\end{tikzcd}`; body text must be normalized exactly to avoid hash drift.

## Forbidden Behaviors / Failure Modes
- Leaving raw LaTeX theorem, proof, or tikzcd environments unconverted, even when such environments appear in the source.
- Emitting Markdown links or plain text in place of `{{< cite ... >}}` or `{{< thmref ... >}}` when anchors are required.
- Altering math expressions, replacing symbols, or reflowing formulas beyond necessary wrapper conversions.
- Generating BibTeX sections, Pandoc citation syntax, or CSL JSON.
- Creating new shortcode names, new optional parameters, or alternative numbering schemes not defined in `layouts/shortcodes/`.
- Removing or rephrasing existing remarks, examples, or contextual text.
- Introducing MathJax macro reliance inside `<details>` blocks for citations or references.
- Splitting, merging, or restructuring existing paragraphs, lists, or theorem blocks except for wrapper conversions explicitly permitted.

## Checklist Before Emitting Output
If ANY item fails, the output MUST be rejected and regenerated.
- PASS: All LaTeX-style environments are replaced with repository shortcodes and maintain titles/IDs. FAIL: Any raw LaTeX environments remain or metadata is lost.
- PASS: All citations use `{{< cite ... >}}` and correspond to `ref-KEY` entries in the references section. FAIL: Any citation uses alternative syntax or lacks a matching reference target.
- PASS: All diagrams use `{{< tikzcd >}}` (optionally within `cdrow`), with normalized bodies and no residual `\begin{tikzcd}` wrappers. FAIL: Any diagram retains raw LaTeX wrappers or unnormalized content.
- PASS: Front matter is intact, unaltered, and enclosed by `---` delimiters. FAIL: Any front matter field is dropped, reordered, or delimiter is missing.
- PASS: No explanatory or simplifying text has been introduced; mathematical content remains verbatim aside from structural wrapping. FAIL: Any paraphrase, explanation, or simplification appears.
- PASS: Output is a single Hugo-ready Markdown file with stable anchors and deterministic formatting. FAIL: Output deviates from Hugo-ready format or destabilizes anchors/hashes.
