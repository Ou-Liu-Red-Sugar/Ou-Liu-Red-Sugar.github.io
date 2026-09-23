"""Regression checks for complete Markdown, language IDs and the publication graph."""
import copy
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from build_notebook import compile_notebook
from check_notebook import Validator


def reading():
    return {"source_id": "QS02-5.10", "access": {"kind": "html_full_text", "verified_access_at": "2026-09-21"},
            "required_unit": {"locator": "§5.10", "scope": "whole section", "purpose": "time-respecting validation"}}


def entry(node="QT01", lang="zh", **changes):
    item = dict(id=f"{lang}-{node.lower()}", node_id=node, lang=lang, slug=node.lower(), title=node,
                summary="A learning task", subject="quant", topic="quant-data-info", kind="concept",
                revised="2026-09-21", prompt="Read the specified units, then reconstruct the calculation.",
                template="T1", body_markdown="## Full unit\n\nReasoning.[^unit]\n\n[^unit]: A source unit.\n",
                sources=["QS02-5.10"], agent_packet={"required_readings": [reading()]})
    item.update(changes)
    return item


class CompilerTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name) / "source"
        self.out = Path(self.temp.name) / "generated"
        (self.root / "notebook/entries").mkdir(parents=True)
        notation = Path(__file__).resolve().parents[1] / "notebook/notation.json"
        (self.root / "notebook/notation.json").write_text(notation.read_text(encoding="utf-8"), encoding="utf-8")
        self.catalogue = {
            "subjects": [
                {"id": "quant", "zh": "数学、统计与计算方法", "en": "Quantitative methods",
                 "topics": [{"id": "quant-data-info", "zh": "数据与信息", "en": "Data"},
                            {"id": "quant-unused", "zh": "未写专题", "en": "Unwritten"}]},
                {"id": "business", "zh": "企业经营与财务分析", "en": "Business"}],
            "sources": [{"source_id": "QS02-5.10", "title": "Time series cross-validation", "version": "3e",
                         "url": "https://otexts.com/fpp3/tscv.html", "body": "Editorial source preview.", "locators": ["§5.10"]}],
            "paths": []}

    def compile(self, entries):
        (self.root / "notebook/catalogue.json").write_text(json.dumps(self.catalogue), encoding="utf-8")
        for item in entries:
            (self.root / "notebook/entries" / (item["id"] + ".json")).write_text(json.dumps(item), encoding="utf-8")
        return compile_notebook(self.root, self.out)

    def test_whole_body_footnotes_aliases_and_private_appendix(self):
        body = '<span id="definition"></span>\n\n## Definition\n\nLine one.[^unit]\n\n## Application\n\nLine two uses [[QS02-5.10|the unit]].\n\n[^unit]: Complete global footnote.\n'
        item = entry(body_markdown=body, anchors=[{"id": "definition", "title": "Definition", "preview": "Precise meaning"}],
                     anchor_aliases=[{"id": "old-definition", "target": "definition"}],
                     agent_markdown="Appendix-only calculation details.")
        book = self.compile([item])
        page = (self.out / "content-zh/notebook/qt01.md").read_text(encoding="utf-8")
        agent = (self.out / "static/agent/zh/qt01.md").read_text(encoding="utf-8")
        self.assertIn('[^unit]: Complete global footnote.', page)
        self.assertIn('[^unit]: Complete global footnote.', agent)
        self.assertIn('data-reference="QS02-5.10"', page)
        self.assertNotIn("Appendix-only", page)
        self.assertIn("Appendix-only", agent)
        self.assertEqual(book["entries"][0]["anchor_aliases"][0]["target"], "definition")
        self.assertEqual(book["references"]["old-definition"]["url"], "/zh/notebook/qt01/#definition")
        self.assertFalse((self.root / "content-zh").exists())
        self.assertEqual(json.loads((self.root / 'notebook/entries/zh-qt01.json').read_text())["body_markdown"], body)

    def test_language_aware_node_resolution(self):
        entries = [entry(lang=lang, body_markdown="Read [[QT02|the definition]].") for lang in ("zh", "en")]
        entries += [entry("QT02", lang=lang) for lang in ("zh", "en")]
        self.compile(entries)
        for lang, folder in (("zh", "content-zh"), ("en", "content")):
            page = (self.out / folder / "notebook/qt01.md").read_text(encoding="utf-8")
            self.assertIn(f'href="/{lang}/notebook/qt02/"', page)
            self.assertIn(f'data-reference="{lang}-qt02"', page)

    def test_paths_references_companies_and_empty_topics(self):
        self.catalogue["paths"] = [{"id": "quant-path", "lang": "zh", "subject": "quant", "slug": "models-path",
                                    "title": "Models", "steps": [{"entry": "QT01"}], "references": ["QT02"]}]
        self.catalogue["path_index"] = {"lang": "zh", "slug": "reading-path", "title": "Choose a path"}
        company = entry("CO", id="zh-amzn", slug="amzn", kind="company", subject="old-company-subject",
                        topic=None, node_id=None, template="C0", agent_packet={})
        book = self.compile([entry(), entry("QT02", template="T10"), company])
        by_id = {item["id"]: item for item in book["entries"]}
        self.assertNotIn("reading_path", by_id["zh-qt02"])
        self.assertEqual(book["paths"][0]["reference_entries"][0]["id"], "zh-qt02")
        self.assertTrue((self.out / "content-zh/notebook/companies.md").exists())
        self.assertIn('"layout": "path-index"', (self.out / "content-zh/notebook/reading-path.md").read_text())
        self.assertEqual(by_id["zh-amzn"]["url"], "/zh/notebook/amzn/")
        self.assertFalse(any(e["from"] == "zh-amzn" and e["relation"] == "part_of" for e in book["graph"]["edges"]))
        self.assertNotIn("quant-unused", {node["id"] for node in book["graph"]["nodes"]})
        self.assertNotIn("business", {node["id"] for node in book["graph"]["nodes"]})

    def test_reference_first_log_and_abstract_rejection(self):
        item = entry()
        item["agent_packet"]["runtime_reading_log"] = [{"read_complete": True}]
        book = self.compile([item])
        self.assertEqual(book["entries"][0]["agent_packet"]["runtime_reading_log"], [])
        self.assertEqual(book["entries"][0]["agent_packet"]["required_readings"][0]["access"]["uri"],
                         "https://otexts.com/fpp3/tscv.html")
        item["agent_packet"]["required_readings"][0]["access"]["kind"] = "abstract"
        with self.assertRaisesRegex(ValueError, "readable public text"):
            self.compile([item])

    def test_typed_edges_shared_experiments_and_planned_nodes(self):
        owner = entry(body_markdown='<span id="experiment"></span>\n\n## An experiment',
                      anchors=[{"id": "experiment", "title": "Experiment"}],
                      experiments=[{"id": "EXP-ONE", "title": "Frozen input", "anchor": "experiment", "inputs": {"cash": 1000}}])
        consumer = entry("QT02", relations=[
            {"from": "QT02", "relation": "illustrated_by", "to": "EXP-ONE", "reason": "same inputs"},
            {"from": "QT02", "relation": "supported_by", "to": "QS02-5.10", "reason": "timing", "locator": "§5.10"},
            {"from": "QT02", "relation": "informs", "to": "QT99", "reason": "future work", "status": "planned"}])
        book = self.compile([owner, consumer])
        self.assertFalse(any(edge["to"] == "QT99" for edge in book["graph"]["edges"]))
        agent = (self.out / "static/agent/zh/qt02.md").read_text(encoding="utf-8")
        self.assertIn('"cash": 1000', agent)
        self.assertIn('"from": "zh-qt02"', agent)

    def test_section_relations_reach_agent_without_changing_endpoints(self):
        item = entry(body_markdown='<span id="application"></span>\n\n## Apply it',
                     anchors=[{"id": "application", "title": "Application"}],
                     relations=[{"from": "QT01#application", "relation": "supported_by",
                                 "to": "QS02-5.10", "reason": "uses the full unit", "locator": "§5.10"}])
        book = self.compile([item])
        self.assertIn("application", book["entries"][0]["graph_scope_ids"])
        agent = (self.out / "static/agent/zh/qt01.md").read_text(encoding="utf-8")
        self.assertIn('"from": "application"', agent)
        self.assertTrue(any(e["from"] == "application" and e["relation"] == "supported_by"
                            for e in book["graph"]["edges"]))
        self.assertFalse(any(e["from"] == "zh-qt01" and e["relation"] == "supported_by"
                             for e in book["graph"]["edges"]))

    def test_hard_cycles_fail_but_method_cycles_are_allowed(self):
        entries = [entry("QT01"), entry("QT02")]
        for item, target in zip(entries, ("QT02", "QT01")):
            item["relations"] = [{"from": item["node_id"], "relation": "requires", "to": target,
                                  "reason": "needed", "required_competence": "specified competence"}]
        with self.assertRaisesRegex(ValueError, "requires cycle"):
            self.compile(entries)
        self.assertFalse(self.out.exists(), "Failed validation must not write generated outputs")
        for item in entries:
            item["relations"][0]["relation"] = "uses_method"
        self.compile(entries)

    def test_legacy_sections_remain_readable(self):
        legacy = entry(node_id=None, body_markdown="", sections=[{
            "id": "legacy-definition", "title": "Existing definition", "body": "Legacy body [[QS02-5.10|source]].",
            "checks": [{"question": "Explain it", "answer": "Complete reasoning."}],
            "cases": [{"id": "case-fixed-date", "title": "Existing case", "entity": "Company", "body": "Historical amount.",
                       "cutoff": "2026-09-20", "period": "2025", "sources": ["QS02-5.10"]}]}])
        book = self.compile([legacy])
        self.assertEqual(book["entries"][0]["body_format"], "sections")
        self.assertIn("case-fixed-date", book["references"])
        agent = (self.out / "static/agent/zh/qt01.md").read_text(encoding="utf-8")
        self.assertIn("Historical amount.", agent)
        self.assertIn("Complete reasoning.", agent)
        self.assertIn("2026-09-20", agent)

    def test_moved_case_keeps_its_id_and_old_cross_page_fragment(self):
        case_id = "case-amzn-assets-20260920"
        company = entry("CO", id="zh-amzn", slug="amzn", kind="company", node_id=None,
                        body_markdown="", sections=[{"id": "history", "title": "Historical teaching material",
                        "body": "The original teaching fragment.", "cases": [{"id": case_id,
                        "title": "AMZN old case", "body": "Original content", "period": "2026 H1",
                        "cutoff": "2026-09-20", "sources": ["QS02-5.10"]}]}])
        url = f"/zh/notebook/amzn/#{case_id}"
        concept = entry(anchor_aliases=[{"id": case_id, "target": url}])
        book = self.compile([company, concept])
        self.assertEqual(book["references"][case_id]["url"], url)
        self.assertIn(case_id, {node["id"] for node in book["graph"]["nodes"]})
        alias = next(e for e in book["entries"] if e["id"] == "zh-qt01")["anchor_aliases"][0]
        self.assertEqual(alias["url"], url)
        self.assertEqual(alias["target"], case_id)


class EmptyNotebookTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.build = self.root / "site"
        self.catalogue = {"subjects": [], "sources": [], "paths": []}
        self.book = dict(self.catalogue, entries=[], references={}, graph={"nodes": [], "edges": []})
        (self.root / "notebook/entries").mkdir(parents=True)
        self.write("docs/legacy-urls.json", "[]")
        for lang in ("zh", "en"):
            self.write(f"site/{lang}/notebook/index.html", "<h1>No entries</h1>")
            self.write(f"site/{lang}/notebook/notation/index.html", "<h1>Notation</h1>")
            self.write(f"site/agent/{lang}/index.md", "# Agent index\n")
            self.write(f"site/agent/{lang}/notation.md", "# Notation\n")

    def write(self, relative, text):
        target = self.root / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(text, encoding="utf-8")

    def validate(self):
        self.write("notebook/catalogue.json", json.dumps(self.catalogue))
        self.write("data/notebook.json", json.dumps(self.book))
        with patch("check_notebook.ROOT", self.root):
            return Validator(self.build).run()

    def test_empty_notebook_keeps_directory_and_agent_indexes(self):
        report = self.validate()
        self.assertTrue(report["passed"], report["errors"])

    def test_subjects_follow_catalogue_without_requiring_five_routes(self):
        subjects = [{"id": "one"}, {"id": "two"}]
        self.catalogue["subjects"] = subjects
        self.book["subjects"] = subjects
        report = self.validate()
        self.assertTrue(report["passed"], report["errors"])

    def test_declared_route_cannot_disappear_from_compiled_data(self):
        self.catalogue["paths"] = [{"id": "declared", "lang": "zh", "slug": "route",
                                    "steps": [{"entry": "QT01"}]}]
        report = self.validate()
        self.assertFalse(report["passed"])
        self.assertIn("DECLARED_ROUTES", {error["code"] for error in report["errors"]})

    def test_empty_notebook_still_checks_agent_indexes(self):
        (self.build / "agent/en/index.md").unlink()
        report = self.validate()
        self.assertFalse(report["passed"])
        self.assertTrue(any(error["context"] == "Agent index" for error in report["errors"]))

    def test_empty_notebook_still_checks_local_links_and_legacy_urls(self):
        self.write("site/zh/notebook/index.html", '<a href="/missing/">Missing</a>')
        self.write("docs/legacy-urls.json", '["/en/invest/"]')
        report = self.validate()
        self.assertFalse(report["passed"])
        self.assertIn("LOST_LEGACY_URL", {error["code"] for error in report["errors"]})
        self.assertTrue(any("/missing/" in error["message"] for error in report["errors"]))


if __name__ == "__main__":
    unittest.main()
