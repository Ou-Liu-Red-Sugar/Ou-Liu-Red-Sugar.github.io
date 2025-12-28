# Academic website and long-form mathematical notes

This repository contains the source for Ou Liu’s academic homepage and long-term mathematical notes. The site is built with Hugo and the PaperMod theme, and it collects research notes, publications, and supporting tooling for rendering commutative diagrams.

## Repository structure

- `content/` — site content in Markdown:
  - `notes/` — long-form mathematical notes and seminar materials, indexed through `content/notes/_index.md`.
  - `papers/` — publication list (`content/papers/_index.md`).
  - `about.md`, `search.md` — standalone pages.
- `layouts/` — Hugo templates and shortcodes, including theorem-style blocks (`definition`, `lemma`, `theorem`, `proposition`, `corollary`, `remark`, `construction`, `idea`), proof rendering (`proof.html`), references (`cite.html`, `references.html`, `pageref.html`, `thmref.html`), index helpers (`notes_index.html`, `section_index.html`), diagram helpers (`tikz.html`, `tikzcd.html`, `cdrow.html`), and safe HTML passthroughs.
- `static/` — static assets served as-is, including custom styles in `static/css/custom.css` and precompiled TikZ-CD SVGs under `static/generated/tikzcd/` with a manifest.
- `assets/` — Hugo asset pipeline inputs (e.g., additional CSS or images, if present).
- `themes/PaperMod/` — the PaperMod theme used by the site.
- `tools/` — helper scripts and resources for diagram generation (`gen_tikzcd.py`, `tools/tikzcd-preamble.tex`).
- `hugo.yaml` — site-wide configuration (base URL, menus, permalinks, MathJax, and other Hugo settings).

## Mathematical toolchain

- **Hugo + PaperMod**: Site generation is handled by Hugo with the PaperMod theme configured in `hugo.yaml`.
- **MathJax v3**: Enabled in `layouts/partials/extend_head.html` with common macros for algebraic notation and citation helpers.
- **TikZ-CD diagrams**: Diagrams are authored via the `tikzcd` shortcode. Precompiled SVGs live in `static/generated/tikzcd/` with metadata in `static/generated/tikzcd/manifest.json`. The shortcode accepts optional parameters such as `hash`, `alt`, `class`, `width`, and `caption`.
- **TikZ-CD build script**: `tools/gen_tikzcd.py` scans Markdown for `{{< tikzcd >}}...{{< /tikzcd >}}` or raw `\begin{tikzcd}` blocks, compiles them with LaTeX (`lualatex` by default), converts PDFs to SVG via `dvisvgm`, and updates the manifest.
- **Custom styling**: Additional CSS in `static/css/custom.css` tunes MathJax rendering and layout for diagrams and notes.

## Build and preview

1. Install Hugo (extended) locally.
2. From the repository root, run `hugo server -D` to start a development server with drafts enabled.
3. Build the production site with `hugo`; outputs will be placed in `public/`.

## TikZ-CD generation workflow

- Existing diagrams are already precompiled and served from `static/generated/tikzcd/`.
- To update or add diagrams, ensure LaTeX with `lualatex` (or `pdflatex`) and `dvisvgm` are available. Then run:

  ```bash
  python3 tools/gen_tikzcd.py
  ```

  Use `--force` to rebuild all diagrams or `--dry-run` to scan without rendering. Generated SVGs and `manifest.json` will be updated in `static/generated/tikzcd/`.

## Local math rendering

Math is rendered client-side via MathJax. Collapsible math environments rely on the MathJax configuration in `layouts/partials/extend_head.html`, and custom CSS (`static/css/custom.css`) adjusts display styles for inline and display math.
