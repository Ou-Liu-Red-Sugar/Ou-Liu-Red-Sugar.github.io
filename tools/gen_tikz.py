#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
gen_tikz.py
-----------
Scan Hugo markdown for general tikz blocks, compile each to PDF via
(lua/pdf)latex, convert PDF -> SVG via dvisvgm, write outputs to:
  static/generated/tikz/<hash>.svg
and maintain:
  static/generated/tikz/manifest.json

Mirrors tools/gen_tikzcd.py, but wraps the body in a standalone TikZ
document with a general preamble (loads tikz + the most common
libraries). The body is the inside of a tikzpicture environment.

Hash normalization is aligned with layouts/shortcodes/tikz.html:
- normalize newlines (\r\n,\r -> \n)
- strip whole text
- rstrip each line (remove trailing whitespace)
"""

from __future__ import annotations

import argparse
import hashlib
import shutil
import json
import os
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, List, Dict, Tuple, Optional


# ----------------------------
# Configuration
# ----------------------------

REPO_ROOT = Path(__file__).resolve().parents[1]  # tools/.. = repo root

DEFAULT_CONTENT_DIRS = [
    REPO_ROOT / "content",
]

# Final, Hugo-served outputs live under static/
OUT_DIR = REPO_ROOT / "static" / "generated" / "tikz"
MANIFEST_PATH = OUT_DIR / "manifest.json"

# Build cache (intermediate .tex/.pdf/.log)
BUILD_DIR = REPO_ROOT / ".tikz-build"

# LaTeX engine — pdflatex matches gen_tikzcd.py's choice and works
# in the sandbox. Switch to lualatex if you need unicode in node text.
LATEX_ENGINE = "pdflatex"

# SVG minimum size sanity check (bytes)
MIN_SVG_SIZE = 500


# ----------------------------
# Regex extractors
# ----------------------------
# 1) Hugo paired shortcode:
#    {{< tikz >}} ... {{< /tikz >}}
#    Note: must match {{< tikz >}} but NOT {{< tikzcd >}} — we anchor on
#    "tikz" not followed by a letter/digit so the cd variant is excluded.
SHORTCODE_RE = re.compile(
    r"{{<\s*tikz\b(?!cd)[^>]*>}}(.*?){{<\s*/\s*tikz\s*>}}",
    re.DOTALL | re.IGNORECASE,
)

# 2) Raw LaTeX environment (only when not inside a tikzcd):
#    \begin{tikzpicture}...\end{tikzpicture}
TIKZPICTURE_ENV_RE = re.compile(
    r"\\begin\{tikzpicture\}(\[[^\]]*\])?(.*?)\\end\{tikzpicture\}",
    re.DOTALL,
)


# ----------------------------
# Helpers
# ----------------------------

def utc_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def normalize_source(s: str) -> str:
    """
    Normalize source text for hashing. Must match the Hugo shortcode's
    normalization in layouts/shortcodes/tikz.html.
    """
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    s = s.strip()
    s = "\n".join(line.rstrip() for line in s.split("\n"))
    return s


def sha1_hex(s: str) -> str:
    return hashlib.sha1(s.encode("utf-8")).hexdigest()


def run(cmd: List[str], cwd: Optional[Path] = None) -> subprocess.CompletedProcess:
    return subprocess.run(
        cmd,
        cwd=str(cwd) if cwd else None,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
    )


def ensure_manifest() -> Dict[str, dict]:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if not MANIFEST_PATH.exists():
        MANIFEST_PATH.write_text("{}", encoding="utf-8")
        return {}
    try:
        return json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        raise RuntimeError(f"manifest.json is not valid JSON: {MANIFEST_PATH}")


def write_manifest(manifest: Dict[str, dict]) -> None:
    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )


@dataclass(frozen=True)
class TikzItem:
    key: str          # sha1 of normalized source
    source: str       # normalized source (inside tikzpicture)
    origin: str       # where it came from (file path)
    kind: str         # "shortcode" | "env"


def iter_markdown_files(content_dirs: List[Path]) -> Iterable[Path]:
    for d in content_dirs:
        if d.exists():
            yield from d.rglob("*.md")


def extract_tikz_blocks(md_text: str) -> List[Tuple[str, str]]:
    """
    Return list of (kind, raw_content). The raw_content is the *body*
    (inside the tikzpicture environment), not including \begin/\end.
    """
    blocks: List[Tuple[str, str]] = []

    for m in SHORTCODE_RE.finditer(md_text):
        raw = m.group(1)
        # The shortcode body may itself contain \begin{tikzpicture}…\end{tikzpicture}
        # — strip those wrappers so the hash matches the Hugo shortcode's hash.
        env_m = re.search(
            r"(?s)^\s*\\begin\{tikzpicture\}(\[[^\]]*\])?\s*(.*?)\s*\\end\{tikzpicture\}\s*$",
            raw,
        )
        body = env_m.group(2) if env_m else raw
        blocks.append(("shortcode", body))

    for m in TIKZPICTURE_ENV_RE.finditer(md_text):
        raw = m.group(2)
        blocks.append(("env", raw))

    return blocks


def build_tex_document(tikz_body: str) -> str:
    """
    Build a standalone LaTeX document with a tikzpicture environment.
    The input should be ONLY the inside of tikzpicture.
    """
    # General-purpose TikZ preamble: standalone class with tikz + a
    # broad set of commonly-used libraries. Add to this list if a
    # diagram needs more (and bump the manifest by re-running with
    # --force on affected hashes).
    return r"""\documentclass[tikz,border=2pt]{standalone}
\usepackage{tikz}
\usetikzlibrary{
  arrows.meta,
  calc,
  decorations.markings,
  decorations.pathmorphing,
  decorations.pathreplacing,
  fit,
  patterns,
  positioning,
  shapes.arrows,
  shapes.geometric,
  shapes.misc,
  shapes.symbols,
  through,
  intersections,
  matrix,
  backgrounds,
  cd
}
\usepackage{amsmath,amssymb}
\usepackage{xcolor}
% Site-wide TikZ colour palette. Keep these in sync with preface.tex
% style; new entries can use these names directly.
\definecolor{winered}{HTML}{8B1A1A}
\definecolor{prussianblue}{HTML}{003366}
\definecolor{agreen}{HTML}{2A6E3F}
\definecolor{oxblue}{HTML}{002147}
\definecolor{burntorange}{HTML}{B8541D}

% --- Mini-figure macros for fat-point illustrations ---
% Used by content/wiki/reduced-scheme.md and friends. Each macro
% expands to a small inline tikzpicture, suitable for placing inside
% a \node in an enclosing diagram. The three macros visualise:
%   \miniaxis  — a regular point: a vertical axis with a black dot.
%   \minifat   — a non-reduced fat point: nested red haze, no axis.
%   \minicombo — a fat point on a regular curve: axis + haze.
\providecommand{\miniaxis}{%
  \begin{tikzpicture}[baseline=-2pt, scale=0.55]
    \draw[gray!25, thin] (-0.7, 0) -- (0.7, 0);
    \draw[prussianblue, very thick, line cap=round] (0, -0.85) -- (0, 0.85);
    \fill[black] (0, 0) circle (1.3pt);
  \end{tikzpicture}%
}
\providecommand{\minifat}{%
  \begin{tikzpicture}[baseline=-2pt, scale=0.55]
    \draw[gray!25, thin] (-0.7, 0) -- (0.7, 0);
    \draw[gray!25, thin] (0, -0.85) -- (0, 0.85);
    \fill[winered, opacity=0.10] (0,0) ellipse (16pt and 2.6pt);
    \fill[winered, opacity=0.18] (0,0) ellipse (12pt and 2.0pt);
    \fill[winered, opacity=0.28] (0,0) ellipse (8pt  and 1.5pt);
    \fill[winered, opacity=0.42] (0,0) ellipse (4.5pt and 1.0pt);
    \fill[black] (0,0) circle (1.3pt);
  \end{tikzpicture}%
}
\providecommand{\minicombo}{%
  \begin{tikzpicture}[baseline=-2pt, scale=0.55]
    \draw[gray!25, thin] (-0.7, 0) -- (0.7, 0);
    \draw[prussianblue, very thick, line cap=round] (0, -0.85) -- (0, 0.85);
    \fill[winered, opacity=0.10] (0,0) ellipse (16pt and 2.6pt);
    \fill[winered, opacity=0.18] (0,0) ellipse (12pt and 2.0pt);
    \fill[winered, opacity=0.28] (0,0) ellipse (8pt  and 1.5pt);
    \fill[winered, opacity=0.42] (0,0) ellipse (4.5pt and 1.0pt);
    \fill[black] (0,0) circle (1.3pt);
  \end{tikzpicture}%
}

\begin{document}
\begin{tikzpicture}
""" + tikz_body + r"""
\end{tikzpicture}
\end{document}
"""


def compile_pdf(tex_path: Path, workdir: Path) -> Path:
    """
    Compile tex -> pdf. We compile in workdir, output is workdir/main.pdf.
    """
    engine = LATEX_ENGINE
    cmd = [
        engine,
        "-interaction=nonstopmode",
        "-halt-on-error",
        tex_path.name,
    ]
    p = run(cmd, cwd=workdir)
    if p.returncode != 0:
        msg = [
            "LaTeX compilation failed.",
            f"Command: {' '.join(cmd)}",
            f"Workdir: {workdir}",
            "STDOUT:\n" + (p.stdout.strip() or "(empty)"),
            "STDERR:\n" + (p.stderr.strip() or "(empty)"),
        ]
        log_path = workdir / (tex_path.stem + ".log")
        if log_path.exists():
            try:
                tail = "\n".join(
                    log_path.read_text(encoding="utf-8", errors="replace").splitlines()[-80:]
                )
                msg.append("LOG (tail):\n" + tail)
            except Exception:
                pass
        raise RuntimeError("\n".join(msg))

    pdf_path = workdir / (tex_path.stem + ".pdf")
    if not pdf_path.exists():
        raise RuntimeError(f"PDF was not produced: {pdf_path}")
    return pdf_path


def pdf_to_svg_dvisvgm(pdf_path: Path, svg_path: Path, tmp_dir: Path) -> None:
    """
    Robust PDF -> SVG via dvisvgm + mutool.
    """
    tmp_dir.mkdir(parents=True, exist_ok=True)
    svg_path.parent.mkdir(parents=True, exist_ok=True)

    tmp_svg = tmp_dir / (svg_path.name + ".tmp.svg")

    if tmp_svg.exists():
        tmp_svg.unlink()

    cmd = [
        "dvisvgm",
        "--pdf",
        "--bbox=min",
        "--no-fonts=1",
        "-o", str(tmp_svg),
        str(pdf_path),
    ]

    env = os.environ.copy()
    env["DVISVGM_PDF_PROC"] = "mutool"

    p = subprocess.run(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
    )

    ok = tmp_svg.exists() and tmp_svg.stat().st_size > MIN_SVG_SIZE
    if p.returncode != 0 or not ok:
        raise RuntimeError(
            "dvisvgm PDF→SVG failed.\n"
            f"Command: {' '.join(cmd)}\n"
            f"Return code: {p.returncode}\n"
            f"PDF: {pdf_path}\n"
            f"TMP SVG: {tmp_svg} (exists={tmp_svg.exists()})\n"
            f"STDOUT:\n{p.stdout.strip()}\n"
            f"STDERR:\n{p.stderr.strip()}\n"
        )

    if svg_path.exists():
        svg_path.unlink()
    shutil.move(str(tmp_svg), str(svg_path))


def render_one(item: TikzItem, force: bool) -> Tuple[bool, Path]:
    """
    Render item to SVG. Return (did_work, svg_path).
    """
    svg_path = OUT_DIR / f"{item.key}.svg"

    if svg_path.exists() and not force:
        return (False, svg_path)

    workdir = BUILD_DIR / item.key
    workdir.mkdir(parents=True, exist_ok=True)

    tex_path = workdir / "main.tex"

    tex_doc = build_tex_document(item.source)
    tex_path.write_text(tex_doc, encoding="utf-8")

    pdf_path = compile_pdf(tex_path, workdir)
    tmp_dir = workdir
    pdf_to_svg_dvisvgm(pdf_path, svg_path, tmp_dir=tmp_dir)

    return (True, svg_path)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--content",
        action="append",
        default=[],
        help="Content directory to scan (repeatable). Default: ./content",
    )
    ap.add_argument("--force", action="store_true", help="Force rebuild all diagrams")
    ap.add_argument("--dry-run", action="store_true", help="Scan only, do not build")
    args = ap.parse_args()

    content_dirs = [Path(p) for p in args.content] if args.content else DEFAULT_CONTENT_DIRS

    manifest = ensure_manifest()

    items_by_key: Dict[str, TikzItem] = {}

    md_files = list(iter_markdown_files(content_dirs))
    for md_path in md_files:
        text = md_path.read_text(encoding="utf-8", errors="replace")
        blocks = extract_tikz_blocks(text)
        if not blocks:
            continue

        for kind, raw in blocks:
            norm = normalize_source(raw)
            if not norm:
                continue
            key = sha1_hex(norm)
            if key not in items_by_key:
                items_by_key[key] = TikzItem(
                    key=key,
                    source=norm,
                    origin=str(md_path),
                    kind=kind,
                )

    keys = sorted(items_by_key.keys())
    print(f"Found {len(keys)} unique tikz blocks.")

    # Update manifest entries (source/origin metadata) even in dry-run
    changed_manifest = False
    for k in keys:
        item = items_by_key[k]
        entry = manifest.get(k)
        if entry is None:
            manifest[k] = {
                "source": item.source,
                "origin": item.origin,
                "kind": item.kind,
                "svg": f"generated/tikz/{k}.svg",
                "updated": utc_iso(),
            }
            changed_manifest = True
        else:
            if (entry.get("source") != item.source
                    or entry.get("origin") != item.origin
                    or entry.get("kind") != item.kind):
                entry["source"] = item.source
                entry["origin"] = item.origin
                entry["kind"] = item.kind
                entry["updated"] = utc_iso()
                manifest[k] = entry
                changed_manifest = True

    if changed_manifest:
        write_manifest(manifest)

    if args.dry_run:
        print("Dry-run: not building.")
        return

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    BUILD_DIR.mkdir(parents=True, exist_ok=True)

    did = 0
    skipped = 0

    for k in keys:
        item = items_by_key[k]
        try:
            worked, svg_path = render_one(item, force=args.force)
            if worked:
                did += 1
                manifest[k]["updated"] = utc_iso()
                write_manifest(manifest)
                print(f"[built]   {k} -> {svg_path}")
            else:
                skipped += 1
        except Exception:
            print(f"[error]   {k} ({item.origin})")
            raise

    print(f"Done. built={did}, skipped={skipped}, total={len(keys)}")


if __name__ == "__main__":
    main()
