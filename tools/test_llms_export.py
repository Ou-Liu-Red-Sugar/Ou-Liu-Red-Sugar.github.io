import json
import tempfile
import unittest
from pathlib import Path

from check_llms import check
from llms_export import llms_outputs, namespace_footnotes, plain_markdown, prune_obsolete_markdown

PAGE = "https://example.test/zh/notebook/article/"


class MarkdownExportTests(unittest.TestCase):
    def test_text_versions_export_the_full_sentence_without_controls(self):
        body = ('<span data-text-versions>买入债券'
                '<span data-text-detail hidden>（每年付息一次）</span>'
                '，到期还本。<button data-text-version-toggle hidden>详细版</button></span>')
        self.assertEqual(plain_markdown(body, PAGE).strip(), '买入债券（每年付息一次），到期还本。')

    def test_table_footnote_evidence_uses_bundle_namespace(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            build = root / "site"
            (root / "data").mkdir()
            entry = dict(id="zh-one", title="Example", markdown="/llms/zh/notebook/one.md",
                         body_markdown='<table><tr><td>Visible explanation[^detail]</td></tr></table>\n\n[^detail]: Full explanation\n')
            (root / "data/notebook.json").write_text(json.dumps({"entries": [entry]}), encoding="utf-8")
            documents = {"llms/zh/notebook/one.md": "# Example\n\nVisible explanation[^detail]\n\n[^detail]: Full explanation\n",
                         "llms/zh/notebook/notation.md": "# Notation\n",
                         "llms/en/notebook/notation.md": "# Notation\n"}
            for name, text in documents.items():
                target = build / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text(text, encoding="utf-8")
            (build / "llms.txt").write_text("尚未转换全文；历史归档不纳入。\n" +
                                           "\n".join(f"[Text](/{name})" for name in documents), encoding="utf-8")
            bundle = build / "llms-full.txt"
            full = namespace_footnotes(documents["llms/zh/notebook/one.md"], "zh-one")
            bundle.write_text(full, encoding="utf-8")
            report = check(build, root)
            self.assertTrue(report["passed"], report["errors"])
            bundle.write_text(full.replace("Visible explanation", "Omitted"), encoding="utf-8")
            report = check(build, root)
            self.assertFalse(report["passed"])
            self.assertTrue(any("Missing authored diagram/table text in llms-full" in error
                                for error in report["errors"]))

    def test_fragment_check_accepts_minified_ids_but_rejects_missing_anchor(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            build = root / "site"
            (root / "data").mkdir()
            (root / "data/notebook.json").write_text(json.dumps({"entries": []}), encoding="utf-8")
            links = []
            for lang in ("zh", "en"):
                target = build / f"llms/{lang}/notebook/notation.md"
                target.parent.mkdir(parents=True)
                target.write_text("# Notation\n", encoding="utf-8")
                links.append(f"[Notation](/llms/{lang}/notebook/notation.md)")
            (build / "llms.txt").write_text(
                "尚未转换全文；历史归档不纳入。\n" + "\n".join(links) +
                "\n[Topic](/zh/notebook/#topic-U)\n", encoding="utf-8")
            (build / "llms-full.txt").write_text("# Notation\n", encoding="utf-8")
            page = build / "zh/notebook/index.html"
            page.parent.mkdir(parents=True)
            for markup in ('<section id="topic-U">Topic</section>',
                           "<section class=topic id=topic-U>Topic</section>"):
                with self.subTest(markup=markup):
                    page.write_text(markup, encoding="utf-8")
                    report = check(build, root)
                    self.assertTrue(report["passed"], report["errors"])
                    self.assertEqual(report["stats"]["local_links"], 3)
            page.write_text("<section id=other>Topic</section>", encoding="utf-8")
            report = check(build, root)
            self.assertFalse(report["passed"])
            self.assertTrue(any("Missing fragment" in error and "#topic-U" in error
                                for error in report["errors"]))

    def test_markdown_autolinks_are_not_mistaken_for_html_tags(self):
        body = "来源 <https://example.test/source#part>；联系 <person@example.test>。"
        self.assertEqual(plain_markdown(body, PAGE).strip(), body)

    def test_math_code_footnotes_and_links_survive_html_conversion(self):
        formula = r"$$x < y,\quad A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$$"
        body = ("<script>secret()</script><link href='/style.css'>\n"
                "## 数学\n\n" + formula + "\n\n"
                r"内联 $a<b$ 与 \(\Hom(X,Y)\), \[x>0\]." + "\n\n"
                "```html\n<div>example, not an element</div>\n```\n\n"
                "正文[^a].\n\n[^a]: [来源](/source/#note)\n\n"
                '<p><a href="#proof">证明</a>，<img src="figure.svg" alt="有向图"></p>')
        result = plain_markdown(body, PAGE)
        self.assertIn(formula, result)
        self.assertIn(r"$a<b$ 与 \(\Hom(X,Y)\), \[x>0\]", result)
        self.assertIn("```html\n<div>example, not an element</div>\n```", result)
        self.assertIn("[^a]: [来源](https://example.test/source/#note)", result)
        self.assertIn("[证明](" + PAGE + "#proof)", result)
        self.assertIn("![有向图](" + PAGE + "figure.svg)", result)
        self.assertNotIn("secret()", result)

    def test_all_hidden_asset_panels_and_groups_are_preserved(self):
        body = '<div data-asset-overview><nav aria-label="资产"><button data-asset-choice="a">A</button></nav><nav aria-label="合约"><button data-asset-choice="b">B</button></nav><div>'
        for key in ("a", "b"):
            body += f'<section data-asset-panel="{key}" hidden><h3>{key}</h3><table><tbody><tr><th>是什么</th><td>内容{key}</td></tr><tr><th>相关词条</th><td><a href="/plan/#x">计划</a></td></tr></tbody></table></section>'
        result = plain_markdown(body + "</div></div>", PAGE)
        self.assertLess(result.index("### 资产"), result.index("#### a"))
        self.assertLess(result.index("### 合约"), result.index("#### b"))
        self.assertEqual(result.count("| 是什么 |"), 2)
        self.assertEqual(result.count("[计划](https://example.test/plan/#x)"), 2)
        self.assertNotIn("button", result)

    def test_css_arrow_diagram_keeps_complete_directions(self):
        body = '<figure><figcaption>生态图</figcaption><div class="business-exchange" aria-label="供方给公司设备；公司给供方付款"><span>设备</span><span>付款</span></div></figure>'
        result = plain_markdown(body, PAGE)
        self.assertIn("供方给公司设备；公司给供方付款", result)
        self.assertIn("生态图", result)

    def test_bundle_namespaces_footnotes_without_rewriting_code(self):
        body = "正文[^a].\n\n[^a]: 来源\n\n`[^a]`\n"
        result = namespace_footnotes(body, "zh-one")
        self.assertIn("正文[^zh-one--a]", result)
        self.assertIn("[^zh-one--a]:", result)
        self.assertIn("`[^a]`", result)

    def test_scope_excludes_drafts_plans_and_unpublished_entries(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            entries = []
            for identity, flags in [("live", {}), ("draft", {"draft": True}),
                                    ("plan", {"status": "planned"}), ("hidden", {"published": False})]:
                entries.append(dict(id=identity, lang="zh", slug=identity, title=identity,
                                    summary=identity, revised="2026-09-23", body_markdown="正文",
                                    url=f"/zh/notebook/{identity}/", **flags))
            outputs = llms_outputs(root, entries, {"live": "正文"}, [], "https://example.test/")
            self.assertEqual({path.as_posix() for path in outputs},
                             {"static/llms.txt", "static/llms-full.txt", "static/llms/zh/notebook/live.md"})
            full = outputs[Path("static/llms-full.txt")]
            self.assertIn("正文", full)
            self.assertNotIn("## Teaching instructions", full)
            self.assertNotIn("/draft/", full)
            old = root / "static/llms/zh/notebook/old.md"
            old.parent.mkdir(parents=True)
            old.write_text("old", encoding="utf-8")
            outside = root / "static/agent/zh/keep.md"
            outside.parent.mkdir(parents=True)
            outside.write_text("keep", encoding="utf-8")
            prune_obsolete_markdown(root, outputs)
            self.assertFalse(old.exists())
            self.assertTrue(outside.exists())

    def test_legacy_hugo_shortcodes_are_not_silently_exported(self):
        with self.assertRaisesRegex(ValueError, "shortcodes"):
            plain_markdown('{{< theorem >}}text{{< /theorem >}}', PAGE)


if __name__ == "__main__":
    unittest.main()
