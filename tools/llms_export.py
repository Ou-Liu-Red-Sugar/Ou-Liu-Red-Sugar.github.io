"""Hugo-native equivalents of vitepress-plugin-llms outputs.

Only canonical, complete notebook Markdown and notation enter the full bundle.
This is a bounded HTML-to-Markdown adapter, not a converter for legacy Hugo
shortcodes or a crawler. It keeps all authored panels, irrespective of visibility.
"""
import re
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin


SCOPE = ("全文范围：当前正式投资学词条与符号约定，保留原语言并优先列中文。"
         "互动图表以正文中的文字和完整表格展开，不执行交互。"
         "数学讲义、Blog、论文、wiki 及独立 Investing Lab 仅提供栏目入口，尚未转换全文；"
         "写作计划、草稿、工作记录与历史归档不在全文中。"
         "本文件与单篇 Markdown 不包含 Agent 教学指令，教学包另见 Agent 索引。")
PROTECTED = re.compile(
    r"(?P<fence>^`{3,}[^\n]*\n.*?^`{3,}[ \t]*(?:\n|$)|^~{3,}[^\n]*\n.*?^~{3,}[ \t]*(?:\n|$))"
    r"|(?P<code>`+[^`\n]+`+)"
    r"|(?P<autolink><(?:https?://|mailto:)[^<>\s]+>|<[^<>\s@]+@[^<>\s@]+\.[^<>\s@]+>)"
    r"|(?P<math>\$\$.*?\$\$|\\\[.*?\\\]|\\\(.*?\\\)|(?<!\\)\$(?!\$)(?:\\.|[^$\n])+?(?<!\\)\$)",
    re.M | re.S,
)
MD_LINK = re.compile(r'(!?\[[^\]\n]*\])\(([^\s)]+)([^)]*)\)')
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "wbr"}
OMIT = {"script", "style", "link", "meta", "button", "input", "select", "textarea"}
BLOCKS = {"div", "section", "article", "figure", "p", "header", "footer", "nav", "aside", "details"}


@dataclass
class Node:
    tag: str
    attrs: dict = field(default_factory=dict)
    children: list = field(default_factory=list)


class Fragment(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.stack = [self.root]
        self.feed(text)
        self.close()

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs))
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def descendants(node, tag=None):
    for child in node.children:
        if isinstance(child, Node):
            if tag is None or child.tag == tag:
                yield child
            yield from descendants(child, tag)


def absolute(url, page_url):
    return urljoin(page_url, url).replace(" ", "%20")


class Markdown:
    def __init__(self, page_url):
        self.page_url = page_url

    def children(self, node):
        return "".join(self.render(child) for child in node.children)

    def table(self, node):
        rows = []
        header = False
        for row in descendants(node, "tr"):
            cells = [child for child in row.children if isinstance(child, Node) and child.tag in {"td", "th"}]
            if not cells:
                continue
            if any(cell.attrs.get("colspan", "1") != "1" or cell.attrs.get("rowspan", "1") != "1" for cell in cells):
                raise ValueError("LLMS table needs an authored text equivalent for merged cells")
            if not rows:
                header = all(cell.tag == "th" for cell in cells)
            rows.append([re.sub(r"\s+", " ", self.children(cell)).strip().replace("|", r"\|") for cell in cells])
        if not rows:
            return ""
        width = max(map(len, rows))
        rows = [row + [""] * (width - len(row)) for row in rows]
        if not header:
            rows.insert(0, ["项目", "说明"] if width == 2 else [""] * width)
        lines = ["| " + " | ".join(rows[0]) + " |", "| " + " | ".join(["---"] * width) + " |"]
        lines += ["| " + " | ".join(row) + " |" for row in rows[1:]]
        return "\n\n" + "\n".join(lines) + "\n\n"

    def asset_overview(self, node):
        panels = {item.attrs["data-asset-panel"]: item for item in descendants(node)
                  if "data-asset-panel" in item.attrs}
        rendered = set()
        pieces = []
        for nav in descendants(node, "nav"):
            labels = [item for item in descendants(nav, "span")
                      if "asset-group-label" in item.attrs.get("class", "").split()]
            title = self.children(labels[0]).strip() if labels else nav.attrs.get("aria-label", "")
            if title:
                pieces.append("\n\n### " + title + "\n\n")
            for button in descendants(nav, "button"):
                key = button.attrs.get("data-asset-choice")
                if key in panels and key not in rendered:
                    pieces.append(self.children(panels[key]).replace("\n\n### ", "\n\n#### ", 1))
                    rendered.add(key)
        # Include authored panels even when no navigation button points to them.
        pieces += [self.children(panel) for key, panel in panels.items() if key not in rendered]
        return "".join(pieces)

    def render(self, node):
        if isinstance(node, str):
            return node
        tag = node.tag
        if tag in OMIT:
            return ""
        if "data-asset-overview" in node.attrs:
            return self.asset_overview(node)
        if "business-exchange" in node.attrs.get("class", "").split() and node.attrs.get("aria-label"):
            # CSS supplies arrow direction; the accessible label states both
            # counterparties and directions, unlike the visible short labels.
            return "\n\n" + node.attrs["aria-label"] + "\n\n"
        if tag == "table":
            return self.table(node)
        content = self.children(node)
        if tag == "a":
            return f'[{content.strip()}]({absolute(node.attrs["href"], self.page_url)})' if node.attrs.get("href") else content
        if tag == "img":
            return f'![{node.attrs.get("alt", "")}]({absolute(node.attrs["src"], self.page_url)})' if node.attrs.get("src") else content
        if tag == "iframe":
            return f'\n\n[{node.attrs.get("title", "交互内容 / Interactive content")}]({absolute(node.attrs["src"], self.page_url)})\n\n' if node.attrs.get("src") else content
        if tag in {"strong", "b"}:
            return "**" + content.strip() + "** "
        if tag in {"em", "i"}:
            return "*" + content.strip() + "*"
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            return "\n\n" + "#" * int(tag[1]) + " " + content.strip() + "\n\n"
        if tag in {"figcaption", "summary"}:
            return "\n\n**" + content.strip() + "**\n\n"
        if tag in {"ul", "ol"}:
            items = [child for child in node.children if isinstance(child, Node) and child.tag == "li"]
            return "\n\n" + "\n".join((f"{index}. " if tag == "ol" else "- ") +
                                         re.sub(r"\s+", " ", self.children(item)).strip()
                                         for index, item in enumerate(items, 1)) + "\n\n"
        if tag == "br":
            return "\n"
        if tag == "hr":
            return "\n\n---\n\n"
        if tag == "span":
            return content + (" " if content else "")
        if tag in BLOCKS:
            return "\n\n" + content.strip() + "\n\n"
        if tag == "svg":
            titles = [self.children(item).strip() for item in descendants(node) if item.tag in {"title", "desc", "text"}]
            if not titles:
                raise ValueError("LLMS SVG needs an authored title, description or text equivalent")
            return "\n\n" + "\n".join(titles) + "\n\n"
        return content


def plain_markdown(body, page_url):
    protected = []

    def hold(match):
        protected.append(match.group())
        return f"\x00LLMS{len(protected) - 1}\x00"

    text = PROTECTED.sub(hold, body)
    if re.search(r"\{\{[<%]", text):
        raise ValueError("LLMS export does not convert legacy Hugo shortcodes; supply complete canonical Markdown")
    text = Markdown(page_url).render(Fragment(text).root)
    text = MD_LINK.sub(lambda match: match[1] + "(" + absolute(match[2], page_url) + match[3] + ")", text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    for index, original in enumerate(protected):
        text = text.replace(f"\x00LLMS{index}\x00", original)
    return text.rstrip() + "\n"


def exportable(entry):
    return (entry.get("published", True) and not entry.get("draft", False)
            and entry.get("status") not in {"draft", "planned", "archived"}
            and entry.get("kind") not in {"outline", "plan"}
            and bool(entry.get("body_markdown", "").strip()))


def markdown_url(entry):
    return f'/llms/{entry["lang"]}/notebook/{entry["slug"]}.md'


def namespace_footnotes(body, prefix):
    # Leave examples in code and mathematics untouched when combining documents.
    pieces, start = [], 0
    for match in PROTECTED.finditer(body):
        pieces.append(re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{prefix}--{m[1]}]", body[start:match.start()]))
        pieces.append(match.group())
        start = match.end()
    pieces.append(re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{prefix}--{m[1]}]", body[start:]))
    return "".join(pieces)


def llms_outputs(source_root, entries, bodies, notation_documents, base_url):
    files, documents = {}, []
    for entry in sorted((entry for entry in entries if exportable(entry)),
                        key=lambda entry: (entry["lang"] != "zh", entry["lang"], entry["slug"])):
        url = markdown_url(entry)
        page_url = urljoin(base_url, entry["url"])
        body = plain_markdown(bodies[entry["id"]], page_url)
        text = (f'# {entry["title"]}\n\n{entry["summary"]}\n\n'
                f'网页 / HTML: [{entry["title"]}]({page_url})\n\n'
                f'语言 / Language: {entry["lang"]} · 更新 / Revised: {entry["revised"]}\n\n{body}')
        files[Path("static") / url.lstrip("/")] = text
        documents.append((entry["id"], entry["title"], entry["summary"], url, text))
    for lang, title, body in notation_documents:
        url = f"/llms/{lang}/notebook/notation.md"
        text = f"# {title}\n\n网页 / HTML: [{title}]({urljoin(base_url, f'/{lang}/notebook/notation/')})\n\n" + plain_markdown(body, urljoin(base_url, f"/{lang}/notebook/notation/"))
        files[Path("static") / url.lstrip("/")] = text
        documents.append((f"notation-{lang}", title, "共用符号与单位 / Shared notation and units", url, text))
    index = ["# 刘欧 · 笔记 / Ou Liu · Notes", "", "> 中文数学与投资笔记、讲义及研究资料。Chinese and English notes and teaching material.",
             "", SCOPE, "", "## 正文 Markdown / Full-text Markdown", ""]
    index += [f'- [{title}]({urljoin(base_url, url)}): {summary}' for _, title, summary, url, _ in documents]
    index += ["", "## 汇总与教学包 / Bundle and teaching packets", "",
              f'- [全文汇总 / Full-text bundle]({urljoin(base_url, "/llms-full.txt")}): 仅含上述正文，脚注按篇编号。',
              f'- [中文 Agent 教学包]({urljoin(base_url, "/agent/zh/index.md")}): 教学指令、原文阅读要求与资料。',
              f'- [English Agent packets]({urljoin(base_url, "/agent/en/index.md")}): Teaching instructions and reading requirements.',
              "", "## 全站栏目 / Site sections", "",
              f'- [中文首页]({urljoin(base_url, "/zh/")})',
              f'- [English home]({urljoin(base_url, "/en/")})',
              f'- [投资学笔记]({urljoin(base_url, "/zh/notebook/")}): 含当前正文与明确标识的写作计划；计划不计入全文。',
              f'- [English investment notebook]({urljoin(base_url, "/en/notebook/")})']
    for relative, label, url in [
        ("content-zh/notes/_index.md", "数学笔记与讲义", "/zh/notes/"),
        ("content/notes/_index.md", "Mathematics notes", "/en/notes/"),
        ("content-zh/blog/_index.md", "Blog", "/zh/blog/"),
        ("content/papers/_index.md", "Papers", "/en/papers/"),
        ("content/wiki/_index.md", "Wiki", "/en/wiki/"),
        ("content/invest/_index.md", "Independent Investing Lab", "/en/invest/"),
    ]:
        if (Path(source_root) / relative).is_file():
            index.append(f'- [{label}]({urljoin(base_url, url)}): 网页／PDF 栏目，未纳入全文汇总。')
    files[Path("static/llms.txt")] = "\n".join(index) + "\n"
    full = ["# 投资学笔记全文 / Investment notebook full text\n\n" + SCOPE]
    full += [namespace_footnotes(text, identity) for identity, _, _, _, text in documents]
    files[Path("static/llms-full.txt")] = "\n\n---\n\n".join(full).rstrip() + "\n"
    return files


def prune_obsolete_markdown(output_root, expected_files):
    """Remove only obsolete files from this exporter's dedicated output namespace."""
    root = Path(output_root).resolve()
    directory = (root / "static/llms").resolve()
    if not directory.is_relative_to(root):
        raise ValueError("LLMS export directory escapes output root")
    expected = {(root / path).resolve() for path in expected_files}
    for path in directory.rglob("*.md"):
        resolved = path.resolve()
        if not resolved.is_relative_to(directory):
            raise ValueError("LLMS output path escapes its owned directory")
        if resolved not in expected:
            path.unlink()
