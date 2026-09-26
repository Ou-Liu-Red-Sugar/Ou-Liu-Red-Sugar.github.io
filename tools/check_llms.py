"""Check the built LLMS outputs, scope, local URLs and authored HTML evidence."""
import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

from llms_export import namespace_footnotes

ROOT = Path(__file__).resolve().parents[1]
LOCAL_ORIGIN = "ou-liu-red-sugar.github.io"
CODE = re.compile(r"(?ms)^`{3,}[^\n]*\n.*?^`{3,}[ \t]*(?:\n|$)|^~{3,}[^\n]*\n.*?^~{3,}[ \t]*(?:\n|$)|`+[^`\n]+`+")


def compact(text):
    return re.sub(r"\s+", "", text)


class ElementIDs(HTMLParser):
    def __init__(self, markup):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.feed(markup)
        self.close()

    def handle_starttag(self, tag, attrs):
        identity = dict(attrs).get("id")
        if identity is not None:
            self.ids.add(identity)


class Evidence(HTMLParser):
    def __init__(self, body):
        super().__init__(convert_charrefs=True)
        self.stack, self.texts, self.panel_ids, self.cell_count = [], [], [], 0
        self.exchange_depth = None
        self.feed(body)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag not in {"br", "img", "input", "link", "meta", "hr"}:
            self.stack.append(tag)
        if "data-asset-panel" in attrs:
            self.panel_ids.append(attrs["data-asset-panel"])
        if tag == "td":
            self.cell_count += 1
        if "business-exchange" in attrs.get("class", "").split() and attrs.get("aria-label"):
            self.texts.append(attrs["aria-label"])
            self.exchange_depth = len(self.stack)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index] == tag:
                del self.stack[index:]
                if self.exchange_depth is not None and len(self.stack) < self.exchange_depth:
                    self.exchange_depth = None
                break

    def handle_data(self, data):
        # Export omits UI buttons; their labels are not authored diagram evidence.
        if self.exchange_depth is not None or "button" in self.stack:
            return
        if data.strip() and any(tag in {"td", "th", "h3", "figure"} for tag in self.stack):
            self.texts.append(data.strip())


def check(build_dir, generated_root=ROOT):
    build_dir, generated_root = Path(build_dir).resolve(), Path(generated_root).resolve()
    book = json.loads((generated_root / "data/notebook.json").read_text(encoding="utf-8-sig"))
    expected = {entry["markdown"].lstrip("/"): entry for entry in book["entries"] if entry.get("markdown")}
    expected.update({f"llms/{lang}/notebook/notation.md": None for lang in ("zh", "en")})
    errors, stats = [], {"documents": len(expected), "asset_panels": 0, "table_cells": 0, "local_links": 0}
    actual = {path.relative_to(build_dir).as_posix() for path in (build_dir / "llms").rglob("*.md")}
    if actual != set(expected):
        errors.append(f"Markdown set differs: missing={sorted(set(expected) - actual)}, stale={sorted(actual - set(expected))}")
    targets = ["llms.txt", "llms-full.txt", *expected]
    documents, page_ids = {}, {}
    for target in targets:
        file = build_dir / target
        if not file.is_file():
            errors.append("Missing output: " + target)
            continue
        text = file.read_text(encoding="utf-8")
        documents[target] = text
        prose = CODE.sub("", text)
        if re.search(r"<\s*/?\s*(?:script|style|div|table|section|button|iframe)\b", prose, re.I):
            errors.append("Unconverted HTML: " + target)
        if "## Teaching instructions" in text or "runtime_reading_log" in text:
            errors.append("Teaching packet leaked into pure text: " + target)
        if re.search(r"(?:docs/production|NotebookArchives|[A-Za-z]:[\\/](?:Users|Investing))", text):
            errors.append("Private/editorial path in export: " + target)
        # Check ordinary Markdown links; footnote references are checked below.
        links = re.findall(r"!?\[[^\]\n]*\]\(([^\s)]+)", prose)
        links += re.findall(r"<(https?://[^<>\s]+)>", prose)
        for url in links:
            parsed = urlsplit(url)
            if parsed.netloc and parsed.netloc != LOCAL_ORIGIN:
                continue
            if parsed.scheme and parsed.scheme not in {"http", "https"}:
                continue
            local = (build_dir / unquote(parsed.path).lstrip("/")).resolve()
            if not local.is_relative_to(build_dir):
                errors.append(f"Escaping URL in {target}: {url}")
                continue
            if not local.suffix or local.is_dir():
                local = local / "index.html"
            stats["local_links"] += 1
            if not local.is_file():
                errors.append(f"Broken URL in {target}: {url}")
            elif parsed.fragment and local.suffix == ".html":
                if local not in page_ids:
                    page_ids[local] = ElementIDs(local.read_text(encoding="utf-8")).ids
                fragment = unquote(parsed.fragment)
                if fragment not in page_ids[local]:
                    errors.append(f"Missing fragment in {target}: {url}")
        definitions = re.findall(r"(?m)^\[\^([^\]]+)\]:", prose)
        references = set(re.findall(r"\[\^([^\]]+)\](?!:)", prose))
        if len(definitions) != len(set(definitions)) or not references <= set(definitions):
            errors.append("Duplicate or unresolved footnotes: " + target)
    index, full = documents.get("llms.txt", ""), documents.get("llms-full.txt", "")
    if "尚未转换全文" not in index or "历史归档" not in index:
        errors.append("Index does not state its bounded scope")
    for target, entry in expected.items():
        if "/" + target not in index:
            errors.append("Not discoverable from llms.txt: " + target)
        if entry is None or target not in documents:
            continue
        body = documents[target]
        if entry["title"] not in full:
            errors.append("Article absent from full bundle: " + entry["id"])
        if entry.get("draft") or entry.get("status") in {"draft", "planned", "archived"}:
            errors.append("Unpublished entry exported: " + entry["id"])
        evidence = Evidence(entry["body_markdown"])
        stats["asset_panels"] += len(evidence.panel_ids)
        stats["table_cells"] += evidence.cell_count
        for value in evidence.texts:
            # Markdown emphasis and links may surround the original visible text.
            for label, text in ((entry["id"], body), ("llms-full", full)):
                expected_value = namespace_footnotes(value, entry["id"]) if label == "llms-full" else value
                if compact(expected_value) not in compact(text):
                    errors.append(f"Missing authored diagram/table text in {label}: {value[:90]}")
        source_notes = re.findall(r"(?m)^\[\^([^\]]+)\]:", entry["body_markdown"])
        for note in source_notes:
            if f"[^{note}]:" not in body or f"[^{entry['id']}--{note}]:" not in full:
                errors.append(f"Missing source footnote {entry['id']}:{note}")
    return {"passed": not errors, "stats": stats, "errors": errors}


def main():
    import sys
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--build-dir", type=Path, required=True)
    parser.add_argument("--generated-root", type=Path, default=ROOT)
    args = parser.parse_args()
    report = check(args.build_dir, args.generated_root)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
