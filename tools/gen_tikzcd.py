#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
gen_tikzcd.py
-------------
Scan Hugo markdown for tikzcd blocks, compile each to PDF via (lua)latex,
convert PDF -> SVG via Inkscape (non-interactive), write outputs to:
  static/generated/tikzcd/<hash>.svg
and maintain:
  static/generated/tikzcd/manifest.json

Design:
- Content-addressed filenames: sha1(normalized_source)
- Never delete old SVGs automatically
- Robust on Windows: uses Inkscape actions + --batch-process to avoid GUI dialogs
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
OUT_DIR = REPO_ROOT / "static" / "generated" / "tikzcd"
MANIFEST_PATH = OUT_DIR / "manifest.json"

# Build cache (intermediate .tex/.pdf/.log)
BUILD_DIR = REPO_ROOT / ".tikzcd-build"

# Choose latex engine
# - lualatex is typically robust with unicode
# - if unavailable, switch to pdflatex (but unicode may fail)
LATEX_ENGINE = "lualatex"  # or "pdflatex"

# Inkscape executable in PATH (you already fixed PATH); if you prefer absolute path, set it here
INKSCAPE_EXE = "inkscape"

# SVG minimum size sanity check (bytes)
MIN_SVG_SIZE = 500


# ----------------------------
# Regex extractors
# ----------------------------
# 1) Hugo paired shortcode:
#    {{< tikzcd >}} ... {{< /tikzcd >}}
SHORTCODE_RE = re.compile(
    r"{{<\s*tikzcd\s*>}}(.*?){{<\s*/\s*tikzcd\s*>}}",
    re.DOTALL | re.IGNORECASE,
)

# 2) Raw LaTeX environment:
#    \begin{tikzcd} ... \end{tikzcd}
TIKZCD_ENV_RE = re.compile(
    r"\\begin\{tikzcd\}(.*?)\\end\{tikzcd\}",
    re.DOTALL,
)


# ----------------------------
# Helpers
# ----------------------------

def utc_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def normalize_source(s: str) -> str:
    """
    Normalize source text for hashing.
    Keep this stable; changes will change all hashes.
    """
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    s = s.strip()
    # Optional: normalize trailing whitespace per line
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
        # If corrupted, fail loudly (better than silently losing data)
        raise RuntimeError(f"manifest.json is not valid JSON: {MANIFEST_PATH}")


def write_manifest(manifest: Dict[str, dict]) -> None:
    # Stable ordering for diffs
    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )


@dataclass(frozen=True)
class TikzItem:
    key: str          # sha1
    source: str       # normalized
    origin: str       # where it came from (file path)
    kind: str         # "shortcode" | "env"


def iter_markdown_files(content_dirs: List[Path]) -> Iterable[Path]:
    for d in content_dirs:
        if d.exists():
            yield from d.rglob("*.md")


def extract_tikzcd_blocks(md_text: str) -> List[Tuple[str, str]]:
    """
    Return list of (kind, raw_content)
    kind is "shortcode" or "env"
    raw_content is inside shortcode or inside tikzcd env (without begin/end)
    """
    blocks: List[Tuple[str, str]] = []

    for m in SHORTCODE_RE.finditer(md_text):
        raw = m.group(1)
        blocks.append(("shortcode", raw))

    for m in TIKZCD_ENV_RE.finditer(md_text):
        raw = m.group(1)
        blocks.append(("env", raw))

    return blocks


def build_tex_document(tikzcd_body_inside_env: str) -> str:
    """
    Build a standalone LaTeX document with a tikzcd environment.
    The input should be ONLY the inside of tikzcd environment.
    """
    # Keep template free of Python %-format hazards by using f-string with raw triple quotes.
    # NOTE: We explicitly load tikz-cd.
    return r"""\documentclass[tikz,border=2pt]{standalone}
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}

\begin{document}
\begin{tikzcd}
""" + tikzcd_body_inside_env + r"""
\end{tikzcd}
\end{document}
"""


def compile_pdf(tex_path: Path, workdir: Path) -> Path:
    """
    Compile tex -> pdf using chosen engine.
    We compile in workdir, output is workdir/main.pdf if tex is main.tex.
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
        # Add log excerpt if exists
        log_path = workdir / (tex_path.stem + ".log")
        if log_path.exists():
            try:
                tail = "\n".join(log_path.read_text(encoding="utf-8", errors="replace").splitlines()[-80:])
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
    Robust PDF -> SVG:
    - dvisvgm writes into a tmp directory we control (always writable)
    - then we atomically replace the final target
    """
    tmp_dir.mkdir(parents=True, exist_ok=True)
    svg_path.parent.mkdir(parents=True, exist_ok=True)

    tmp_svg = tmp_dir / (svg_path.name + ".tmp.svg")

    # Ensure old tmp is gone
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

    # Atomic-ish replace on Windows
    if svg_path.exists():
        svg_path.unlink()
    shutil.move(str(tmp_svg), str(svg_path))



def render_one(item: TikzItem, force: bool) -> Tuple[bool, Path]:
    """
    Render item to SVG. Return (did_work, svg_path).
    """
    svg_path = OUT_DIR / f"{item.key}.svg"

    # If exists and not forcing, skip
    if svg_path.exists() and not force:
        return (False, svg_path)

    workdir = BUILD_DIR / item.key
    workdir.mkdir(parents=True, exist_ok=True)

    tex_path = workdir / "main.tex"

    # The source is inside tikzcd env (we store inside body)
    tex_doc = build_tex_document(item.source)
    tex_path.write_text(tex_doc, encoding="utf-8")

    pdf_path = compile_pdf(tex_path, workdir)
    tmp_dir = workdir  # 直接用该 hash 的 build 目录作为 tmp
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

    # Gather unique items by key
    items_by_key: Dict[str, TikzItem] = {}

    md_files = list(iter_markdown_files(content_dirs))
    for md_path in md_files:
        text = md_path.read_text(encoding="utf-8", errors="replace")
        blocks = extract_tikzcd_blocks(text)
        if not blocks:
            continue

        for kind, raw in blocks:
            norm = normalize_source(raw)
            if not norm:
                continue
            key = sha1_hex(norm)
            # Keep first origin only; that's enough for manifest
            if key not in items_by_key:
                items_by_key[key] = TikzItem(
                    key=key,
                    source=norm,
                    origin=str(md_path),
                    kind=kind,
                )

    keys = sorted(items_by_key.keys())
    print(f"Found {len(keys)} unique tikzcd blocks.")

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
                "svg": f"generated/tikzcd/{k}.svg",
                "updated": utc_iso(),
            }
            changed_manifest = True
        else:
            # Keep original source stable; but if it differs, update to latest and refresh updated time
            # (This can happen if your normalization rules changed or file content was edited.)
            if entry.get("source") != item.source or entry.get("origin") != item.origin or entry.get("kind") != item.kind:
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
                # Refresh manifest timestamp on rebuild
                manifest[k]["updated"] = utc_iso()
                write_manifest(manifest)
                print(f"[built]   {k} -> {svg_path}")
            else:
                skipped += 1
        except Exception as e:
            # Fail fast with clear message
            print(f"[error]   {k} ({item.origin})")
            raise

    print(f"Done. built={did}, skipped={skipped}, total={len(keys)}")


if __name__ == "__main__":
    main()
