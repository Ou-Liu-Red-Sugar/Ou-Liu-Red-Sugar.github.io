# Personal notebook — bilingual HTML edition

Current source guide: [Notebook authoring](docs/notebook-authoring.md).

The investment notebook was archived on 2026-09-23 at the author's request. The local source now starts with zero entries and an empty catalogue. New work proceeds one article at a time; the former outline, routes, company examples and production assignments are historical material. The first new article has not been selected.

- Chinese collection: `content-zh/`; English and preserved archive: `content/`.
- Blog posts: `content-zh/blog/*.md`, with `title`, `description` and `date` in front matter. Posts appear automatically in the Blog directory, the Chinese homepage's recent articles and site search.
- New entry source: `notebook/entries/*.json`; subjects, sources and any future routes: `notebook/catalogue.json`. Add them when an actual article needs them.
- Generate pages, local search and complete Agent exports: `python tools/build_notebook.py`.
- Check the generator and catalogue constraints: `python tools/test_build_notebook.py`.
- Check interactive calculations and numeric display: `node --test tools/notebook-math.test.mjs tools/notebook-number-format.test.cjs`.
- Preview: `hugo server --destination .git/notebook-preview --disableFastRender`.
- Build into a fresh temporary directory without overwriting existing public changes: `hugo --destination .git/notebook-build`, then `python tools/check_notebook.py --build-dir .git/notebook-build`.
- The Pages workflow compiles notebook content and Agent exports, checks calculations, builds with Hugo 0.152.2 into a clean temporary directory, and checks site links before deploying. A push to `main` publishes to GitHub Pages.
- Local editorial packets, reviews and staging builds under `docs/production/` stay on the author's machine. Published entries use the canonical source in `notebook/entries/`; these local production records are not needed to build the site.

The archive identifier is `investment-notebook-20260923`. On the author's machine, `codex-backups/notebook-reset-20260923/manifest.json` inside the common Git directory points to the external archive and its file inventory. Locate that directory with `git rev-parse --git-common-dir`. The archive retains the actual previous content, outlines, source registry, interactive cases and editorial records; it is not a build input. Recovery guidance is in the authoring guide.

Mathematics notes, Blog, papers, wiki, the separate Investing Lab section (`content/invest/`) and shared site assets remain in place. Chinese writing methods and calibration records are preserved. This reset is local; publishing requires explicit authorization.


## Mathematical toolchain


- **Hugo + PaperMod**: Site generation is handled by Hugo with the PaperMod theme configured in `hugo.yaml`.
- **MathJax v4.0.0**: Enabled in `layouts/partials/extend_head.html` with existing macros and automatic inline/display line breaks. Display mathematics is re-typeset when the reading width changes.
- **TikZ-CD diagrams**: Diagrams are authored via the `tikzcd` shortcode. Precompiled SVGs live in `static/generated/tikzcd/` with metadata in `static/generated/tikzcd/manifest.json`. The shortcode accepts optional parameters such as `hash`, `alt`, `class`, `width`, and `caption`.
- **TikZ-CD build script**: `tools/gen_tikzcd.py` scans Markdown for `{{< tikzcd >}}...{{< /tikzcd >}}` or raw `\begin{tikzcd}` blocks, compiles them with LaTeX (`lualatex` by default), converts PDFs to SVG via `dvisvgm`, and updates the manifest.
- **Custom styling**: Additional CSS in `static/css/custom.css` tunes MathJax rendering and layout for diagrams and notes.


## TikZ-CD generation

Existing diagrams remain precompiled in `static/generated/tikzcd/`. To add diagrams, install LaTeX (`lualatex`) and `dvisvgm`, then run `python tools/gen_tikzcd.py`; `--dry-run` scans without rendering and `--force` rebuilds all diagrams. Mathematical content and theorem shortcodes continue to work independently of the new notebook source format.
