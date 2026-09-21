# Personal notebook — bilingual HTML edition

Current source guide: [Notebook authoring](docs/notebook-authoring.md).

- Chinese collection: `content-zh/`; English and preserved archive: `content/`.
- Optional reading route: `/zh/notebook/reading-path/`; the route sequence and transitions live in `notebook/catalogue.json`.
- New entry source: `notebook/entries/*.json`; subject/source registry: `notebook/catalogue.json`.
- Generate pages, local search and complete Agent exports: `python tools/build_notebook.py`.
- Check interactive calculations and numeric display: `node --test tools/notebook-math.test.mjs tools/notebook-number-format.test.cjs`.
- Preview: `hugo server --destination .git/notebook-preview --disableFastRender`.
- Build without overwriting existing public changes: `hugo --destination .git/notebook-build`, then `python tools/check_notebook.py`.
- The Pages workflow compiles notebook content and Agent exports, checks calculations, builds with Hugo 0.152.2 into a clean temporary directory, and checks site links before deploying. A push to `main` publishes to GitHub Pages.
- Local editorial packets, reviews and staging builds under `docs/production/` stay on the author's machine. Published entries use the canonical source in `notebook/entries/`; these local production records are not needed to build the site.

The implementation record and pre-change backup location are in `docs/implementation-record.json`. Mathematical prose in the archive is preserved; old content addresses redirect to the English collection. See `notebook/sources/pilot-provenance.md` for the editorial origin of the seven pilot entries.


## Mathematical toolchain


- **Hugo + PaperMod**: Site generation is handled by Hugo with the PaperMod theme configured in `hugo.yaml`.
- **MathJax v4.0.0**: Enabled in `layouts/partials/extend_head.html` with existing macros and automatic inline/display line breaks. Display mathematics is re-typeset when the reading width changes.
- **TikZ-CD diagrams**: Diagrams are authored via the `tikzcd` shortcode. Precompiled SVGs live in `static/generated/tikzcd/` with metadata in `static/generated/tikzcd/manifest.json`. The shortcode accepts optional parameters such as `hash`, `alt`, `class`, `width`, and `caption`.
- **TikZ-CD build script**: `tools/gen_tikzcd.py` scans Markdown for `{{< tikzcd >}}...{{< /tikzcd >}}` or raw `\begin{tikzcd}` blocks, compiles them with LaTeX (`lualatex` by default), converts PDFs to SVG via `dvisvgm`, and updates the manifest.
- **Custom styling**: Additional CSS in `static/css/custom.css` tunes MathJax rendering and layout for diagrams and notes.


## TikZ-CD generation

Existing diagrams remain precompiled in `static/generated/tikzcd/`. To add diagrams, install LaTeX (`lualatex`) and `dvisvgm`, then run `python tools/gen_tikzcd.py`; `--dry-run` scans without rendering and `--force` rebuilds all diagrams. Mathematical content and theorem shortcodes continue to work independently of the new notebook source format.
