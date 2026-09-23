"""Checks for planned navigation, real publication links and isolated compilation."""
import copy
import json
import tempfile
import unittest
from pathlib import Path

from build_notebook import compile_notebook
from notebook_learning_plan import validate_learning_plan


def plan_fixture():
    return {
        "schema_version": 1,
        "title": "投资学习计划",
        "description": "从金融常识走向独立判断。",
        "default_node": "A",
        "groups": [{"id": "foundation", "title": "基础", "rows": [["A", "S"]]}],
        "nodes": [
            {"id": "A", "title": "资金与风险", "short": "资金", "topics": ["资金期限"],
             "depth": "比较资金用途。", "visual": "现金时间线。"},
            {"id": "S", "title": "股票", "short": "股票", "topics": ["每股结果"],
             "depth": "理解股份和经营的联系。", "visual": "股份关系。"},
        ],
        "edges": [
            {"from": "A", "to": "S", "kind": "main", "label": "资金用途引出股票选择"},
            {"from": "S", "to": "A", "kind": "research", "label": "持有结果反馈资金安排"},
        ],
        "entries": [
            {"id": "NB-A01", "node": "A", "title": "资金用途", "goal": "解释期限怎样影响选择。",
             "scope": ["资金用途", "可用时间"], "example": "比较两笔不同日期需要的资金。",
             "visual": "资金时间线。", "prerequisites": [], "sources": ["基础金融教材"],
             "weight": "重点展开"},
            {"id": "NB-S01", "node": "S", "title": "股票与股份", "goal": "解释公司|股份的联系。",
             "scope": ["股份", "每股结果"], "example": "使用一家虚构小企业。",
             "visual": "股份拆分图。", "prerequisites": ["NB-A01"], "sources": ["证券入门资料"],
             "weight": "常规展开"},
        ],
        "sequence": ["NB-A01", "NB-S01"],
        "phases": [
            {"id": "first", "title": "资金安排", "entry_ids": ["NB-A01"],
             "goal": "认识可用资金。", "transition": "再认识用资金购买的资产。"},
            {"id": "second", "title": "股票基础", "entry_ids": ["NB-S01"],
             "goal": "连接股份与经营。", "transition": ""},
        ],
        "editorial": {
            "positioning": "面向个人投资者。", "reader": "从常识开始建立判断。",
            "depth": ["保留必要解释。", "不预设复杂计算训练。"],
            "materials": ["先取材，再随正文需要补证。"],
            "writing": "逐篇完成草图、正文和审查。", "cadence": [5, 8],
            "sections": [{"title": "实例安排", "paragraphs": ["实例随解释问题选择。"]}],
        },
    }


def article_fixture(node_id="NB-A01", lang="zh", slug="actual-article", **changes):
    article = {
        "id": f"{lang}-{slug}", "node_id": node_id, "lang": lang, "slug": slug,
        "title": "已完成文章的新标题", "summary": "A fixture article.",
        "kind": "concept", "subject": "foundation", "revised": "2026-09-23",
        "prompt": "Explain the supplied article.", "body_markdown": "## 正文\n\n已经完成的解释。\n",
        "sources": ["fixture-source"],
        "agent_packet": {"required_readings": [{
            "source_id": "fixture-source", "access": {"kind": "supplied_excerpt"},
            "required_unit": {"locator": "fixture", "scope": "supplied passage", "purpose": "test only"},
        }]},
    }
    article.update(changes)
    return article


class LearningPlanTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name) / "source"
        self.out = Path(self.temp.name) / "generated"
        (self.root / "notebook/entries").mkdir(parents=True)
        notation = Path(__file__).resolve().parents[1] / "notebook/notation.json"
        self.write("notebook/notation.json", notation.read_text(encoding="utf-8"))
        self.write_json("notebook/catalogue.json", {
            "subjects": [{"id": "foundation", "zh": "基础", "en": "Foundation"}],
            "sources": [{"source_id": "fixture-source", "title": "Fixture source",
                         "url": "https://example.org/fixture", "body": "Supplied fixture."}],
            "paths": [],
        })
        self.plan = plan_fixture()

    def write(self, relative, content):
        target = self.root / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding="utf-8")

    def write_json(self, relative, value):
        self.write(relative, json.dumps(value, ensure_ascii=False))

    def compile(self, articles=(), include_plan=True):
        if include_plan:
            self.write_json("notebook/learning-plan.json", self.plan)
        for article in articles:
            self.write_json(f"notebook/entries/{article['id']}.json", article)
        return compile_notebook(self.root, self.out)

    def generated_map(self):
        return json.loads((self.out / "data/notebook_map.json").read_text(encoding="utf-8"))

    def test_empty_book_has_planned_navigation_without_article_links(self):
        book = self.compile()
        self.assertEqual(book["entries"], [])
        data = self.generated_map()
        self.assertEqual(data["default_node"], "A")
        self.assertEqual(data["nodes"][0]["description"], self.plan["nodes"][0]["depth"])
        self.assertTrue(all(row["status"] == "planned" and row["url"] is None for row in data["entries"]))
        self.assertFalse((self.out / "content-zh/notebook/nb-a01.md").exists())
        self.assertEqual(set(data["entries"][0]), {"id", "node", "title", "goal", "status", "url"})
        self.assertFalse((self.root / "data").exists(), "An isolated build must not write into the source")
        self.assertFalse((self.root / "docs").exists())
        self.assertEqual(json.loads((self.root / "notebook/learning-plan.json").read_text(encoding="utf-8")),
                         self.plan)

    def test_only_published_chinese_exact_node_id_gets_its_actual_url(self):
        articles = [
            article_fixture(),
            article_fixture("NB-S01", lang="en", slug="english-only"),
            article_fixture("UNRELATED", slug="matching-title", title="股票与股份"),
            article_fixture("NB-S01", slug="unpublished", published=False),
        ]
        book = self.compile(articles)
        data = {row["id"]: row for row in self.generated_map()["entries"]}
        self.assertEqual(data["NB-A01"]["status"], "available")
        actual = next(row for row in book["entries"] if row["id"] == "zh-actual-article")
        self.assertEqual(data["NB-A01"]["url"], actual["url"])
        self.assertEqual(data["NB-A01"]["url"], "/zh/notebook/actual-article/")
        self.assertEqual(data["NB-S01"]["status"], "planned")
        self.assertIsNone(data["NB-S01"]["url"])

    def test_explicit_outline_is_linked_without_becoming_a_completed_article(self):
        self.plan["entries"][0]["outline_page"] = {
            "slug": "first-outline", "sections": [{"title": "主要资产", "items": ["股票与债券"]}]}
        book = self.compile()
        row = self.generated_map()["entries"][0]
        self.assertEqual((row["status"], row["url"]), ("outline", "/zh/notebook/first-outline/"))
        page = (self.out / "content-zh/notebook/first-outline.md").read_text(encoding="utf-8")
        self.assertIn('"layout": "outline"', page)
        self.assertIn("## 主要资产\n\n- 股票与债券", page)
        self.assertEqual(book["entries"], [])
        self.assertEqual(json.loads((self.out / "static/notebook/search.json").read_text(encoding="utf-8")), [])
        self.assertFalse((self.out / "static/agent/zh/first-outline.md").exists())

    def test_completed_article_replaces_its_outline_at_the_same_address(self):
        self.plan["entries"][0]["outline_page"] = {
            "slug": "actual-article", "sections": [{"title": "主要资产", "items": ["股票与债券"]}]}
        self.compile([article_fixture()])
        row = self.generated_map()["entries"][0]
        self.assertEqual(row["status"], "available")
        page = (self.out / "content-zh/notebook/actual-article.md").read_text(encoding="utf-8")
        self.assertIn('"layout": "entry"', page)
        self.assertNotIn("## 主要资产", page)

    def test_outline_preserves_phase_and_article_details_from_plan(self):
        self.compile()
        outline = (self.out / "docs/investment-notebook-outline.md").read_text(encoding="utf-8")
        for expected in ("notebook/learning-plan.json", "5–8", "逐篇完成", "再认识用资金购买的资产。",
                         "比较两笔不同日期需要的资金。", "股份拆分图。", "基础金融教材",
                         "资料方向", "篇幅安排", "重点展开", "实例随解释问题选择。",
                         "先取材，再随正文需要补证。", "公司\\|股份"):
            self.assertIn(expected, outline)
        self.assertLess(outline.index("| 1 | NB-A01"), outline.index("| 2 | NB-S01"))

    def test_no_plan_preserves_existing_compiler_fixtures(self):
        self.compile(include_plan=False)
        self.assertTrue((self.out / "data/notebook.json").exists())
        self.assertFalse((self.out / "data/notebook_map.json").exists())
        self.assertFalse((self.out / "docs/investment-notebook-outline.md").exists())

    def test_graph_feedback_cycles_are_not_article_prerequisites(self):
        self.assertIs(validate_learning_plan(self.plan), self.plan)
        self.plan["entries"][0]["prerequisites"] = ["NB-S01"]
        with self.assertRaisesRegex(ValueError, "must precede"):
            validate_learning_plan(self.plan)

    def test_invalid_plan_references_and_coverage_fail(self):
        mutations = [
            ("unknown edge node", lambda p: p["edges"][0].update(to="missing"), "unknown node"),
            ("unknown relation", lambda p: p["edges"][0].update(kind="requires"), "relation kind"),
            ("duplicate edge", lambda p: p["edges"].append(copy.deepcopy(p["edges"][0])), "duplicate edge"),
            ("duplicate node", lambda p: p["nodes"].append(copy.deepcopy(p["nodes"][0])), "duplicate node"),
            ("unknown default", lambda p: p.update(default_node="missing"), "default_node"),
            ("unknown grouped node", lambda p: p["groups"][0].update(rows=[["A", "missing"]]), "unknown node"),
            ("duplicate grouped node", lambda p: p["groups"][0].update(rows=[["A", "S", "A"]]), "duplicate nodes"),
            ("ungrouped node", lambda p: p["groups"][0].update(rows=[["A"]]), "cover every node"),
            ("duplicate entry", lambda p: p["entries"].append(copy.deepcopy(p["entries"][0])), "duplicate entry"),
            ("unknown entry node", lambda p: p["entries"][0].update(node="missing"), "unknown node"),
            ("node without entries", lambda p: p["entries"][1].update(node="A"), "cover every node"),
            ("unknown prerequisite", lambda p: p["entries"][1].update(prerequisites=["missing"]), "unknown prerequisite"),
            ("duplicate sequence", lambda p: p["sequence"].append("NB-A01"), "duplicate entries"),
            ("incomplete sequence", lambda p: p.update(sequence=["NB-A01"]), "cover every entry"),
            ("unknown phase entry", lambda p: p["phases"][0].update(entry_ids=["missing"]), "unknown entry"),
            ("phase order", lambda p: p["phases"].reverse(), "follow and cover sequence"),
        ]
        for name, mutate, message in mutations:
            with self.subTest(name=name):
                plan = copy.deepcopy(self.plan)
                mutate(plan)
                with self.assertRaisesRegex(ValueError, message):
                    validate_learning_plan(plan)

    def test_plan_failure_happens_before_any_generated_write(self):
        self.plan["edges"][0]["to"] = "missing"
        sentinel = self.out / "data/notebook.json"
        sentinel.parent.mkdir(parents=True)
        sentinel.write_text("previous output", encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "unknown node"):
            self.compile()
        self.assertEqual(sentinel.read_text(encoding="utf-8"), "previous output")
        self.assertEqual([path.relative_to(self.out).as_posix() for path in self.out.rglob("*") if path.is_file()],
                         ["data/notebook.json"])


if __name__ == "__main__":
    unittest.main()
