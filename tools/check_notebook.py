"""Validate the generated notebook, full-site links and retained public contracts.

This reads actual canonical inputs, compiled data, Agent exports and Hugo output.
It does not rebuild the site or import the generator under test.
"""
import argparse
import json
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import parse_qs, unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://ou-liu-red-sugar.github.io"
COMPANY_KINDS = {"company", "research"}
READABLE_KINDS = {"html_full_text", "pdf_full_text", "tex_full_text", "publisher_full_text",
                  "supplied_excerpt", "selected_chapters", "site_body", "site_full_text"}
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
WIKI_LINK = re.compile(r"\[\[([A-Za-z0-9_.:#/-]+)\|([^\]]+)\]\]")
LOCAL_DRIVE = re.compile(r"(?i)\b[A-Z]:[/\\](?:Users|Investing)[/\\ -]")


@dataclass
class Element:
    tag: str
    attrs: dict
    parent: object = None
    text_parts: list = field(default_factory=list)

    @property
    def text(self):
        return "".join(self.text_parts)

    def in_class(self, name):
        node = self
        while node:
            if name in node.attrs.get("class", "").split():
                return True
            node = node.parent
        return False

    def in_tag(self, name):
        node = self.parent
        while node:
            if node.tag == name:
                return True
            node = node.parent
        return False


class Page(HTMLParser):
    """Parse the actual document, excluding inert reference template contents."""
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.raw = text
        self.elements = []
        self.ids = {}
        self.duplicate_ids = []
        self.links = []
        self.stack = []
        self.template_depth = 0
        self.feed(text)
        self.close()

    def handle_starttag(self, tag, attrs):
        if tag == "template":
            self.template_depth += 1
            return
        if self.template_depth:
            return
        attributes = dict(attrs)
        element = Element(tag, attributes, self.stack[-1] if self.stack else None)
        self.elements.append(element)
        if attributes.get("id"):
            identity = attributes["id"]
            if identity in self.ids:
                self.duplicate_ids.append(identity)
            self.ids[identity] = element
        if tag in {"a", "area", "link", "use"} and attributes.get("href"):
            self.links.append((attributes["href"], element, "href"))
        if tag in {"img", "iframe", "script", "source", "video", "audio", "embed"} and attributes.get("src"):
            self.links.append((attributes["src"], element, "src"))
        if tag == "meta" and attributes.get("http-equiv", "").lower() == "refresh":
            match = re.search(r"url\s*=\s*['\"]?([^'\"]+)", attributes.get("content", ""), re.I)
            if match:
                self.links.append((match[1].strip(), element, "redirect"))
        if tag not in VOID_TAGS:
            self.stack.append(element)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID_TAGS:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if self.template_depth:
            if tag == "template":
                self.template_depth -= 1
            return
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        if not self.template_depth:
            for element in self.stack:
                element.text_parts.append(data)


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def outside_fences(text):
    lines, fence = [], None
    for line in text.splitlines(keepends=True):
        match = re.match(r"^\s*(`{3,}|~{3,})", line)
        if match:
            token = match[1]
            if fence is None:
                fence = token
            elif token[0] == fence[0] and len(token) >= len(fence):
                fence = None
            lines.append("\n")
        elif fence is None:
            lines.append(line)
    return "".join(lines)


class Validator:
    def __init__(self, build_dir):
        self.build = build_dir.resolve()
        self.book = load_json(ROOT / "data/notebook.json")
        self.catalogue = load_json(ROOT / "notebook/catalogue.json")
        self.canonical = {}
        for source in sorted((ROOT / "notebook/entries").glob("*.json")):
            entry = load_json(source)
            if entry.get("published", True):
                self.canonical[entry["id"]] = entry
        self.entries = {entry["id"]: entry for entry in self.book["entries"]}
        self.refs = self.book["references"]
        self.node_ids = {(entry["lang"], entry["node_id"]): entry["id"] for entry in self.entries.values() if entry.get("node_id")}
        self.pages = {}
        self.errors = []
        self.warnings = []
        self.error_keys = set()
        self.stats = Counter()

    def issue(self, code, context, message, warning=False):
        key = (code, context, message)
        if key in self.error_keys:
            return
        self.error_keys.add(key)
        (self.warnings if warning else self.errors).append(dict(code=code, context=context, message=message))

    def require(self, condition, code, context, message):
        self.stats["assertions"] += 1
        if not condition:
            self.issue(code, context, message)
        return condition

    def file_for(self, path):
        decoded = unquote(path)
        target = (self.build / decoded.lstrip("/")).resolve()
        if not target.is_relative_to(self.build):
            return None
        if target.is_dir() or not target.suffix:
            target = target / "index.html"
        return target

    def page_for(self, path):
        target = self.file_for(urlsplit(path).path)
        if not target or not target.is_file():
            self.issue("MISSING_PAGE", path, "Built file is absent")
            return None
        if target not in self.pages:
            self.pages[target] = Page(target.read_text(encoding="utf-8-sig"))
        return self.pages[target]

    def url_for_file(self, path):
        relative = path.relative_to(self.build).as_posix()
        if relative.endswith("index.html"):
            relative = relative[:-10]
        return "/" + relative

    def internal_link(self, origin, href, context=None):
        href = unescape(href).strip()
        if not href or href.startswith(("mailto:", "tel:", "javascript:", "data:", "blob:")):
            return
        destination = urlsplit(urljoin(ORIGIN + origin, href))
        if destination.scheme not in ("http", "https") or destination.netloc.lower() != urlsplit(ORIGIN).netloc:
            return
        self.stats["local_links"] += 1
        context = context or origin
        target = self.file_for(destination.path)
        if not self.require(target is not None and target.is_file(), "BROKEN_LOCAL_LINK", context, href + " -> " + destination.path):
            return
        if destination.fragment and target.suffix.lower() in (".html", ".svg"):
            self.stats["fragment_links"] += 1
            if target not in self.pages:
                self.pages[target] = Page(target.read_text(encoding="utf-8-sig"))
            fragment = unquote(destination.fragment)
            # Browser text fragments do not name a DOM id. An id before the text selector still must exist.
            fragment = fragment.split(":~:text=", 1)[0]
            if fragment:
                self.require(fragment in self.pages[target].ids, "MISSING_FRAGMENT", context, href + " -> missing #" + fragment)

    def resolve_identity(self, identity, lang):
        if identity in self.refs:
            return identity
        if (lang, identity) in self.node_ids:
            return self.node_ids[(lang, identity)]
        if isinstance(identity, str) and "#" in identity:
            owner, anchor = identity.split("#", 1)
            if anchor in self.refs:
                return anchor
        return identity

    def preserve_body(self, body, exported, context):
        """Require every original non-wikilink character in its original order.

        Link labels and destinations are checked separately; this is independent
        of the generator's HTML/Markdown formatting choice for those references.
        """
        cursor = 0
        parts = WIKI_LINK.split(body)
        for index in range(0, len(parts), 3):
            chunk = parts[index]
            if chunk:
                found = exported.find(chunk, cursor)
                if found < 0:
                    self.issue("AGENT_BODY_LOSS", context, "Original body segment absent: " + repr(chunk[:140]))
                    return
                cursor = found + len(chunk)
            if index + 2 < len(parts):
                label = parts[index + 2]
                found = exported.find(label, cursor)
                if found < 0:
                    self.issue("AGENT_REFERENCE_LOSS", context, "Reference label absent: " + label)
                    return
                cursor = found + len(label)
        self.stats["complete_agent_bodies"] += 1

    def check_agent(self, entry, page):
        eid = entry["id"]
        target = self.file_for(entry["agent"])
        if not self.require(target is not None and target.is_file(), "MISSING_AGENT", eid, entry["agent"]):
            return
        agent = target.read_text(encoding="utf-8-sig")
        self.require(entry["prompt"] in agent, "AGENT_PROMPT_LOSS", eid, "Tailored prompt is absent or altered")
        self.require(not LOCAL_DRIVE.search(agent), "PRIVATE_PATH", eid, "Public Agent export contains a local drive path")
        teaching = page.ids.get("teaching-context")
        self.require(teaching is not None and teaching.text.strip() == agent.strip(), "PROMPT_COPY_MISMATCH", eid, "Rendered copy packet differs from downloadable Agent file")
        match = re.search(r"(?m)^## Required readings and runtime protocol\s+```json[ \t]*\r?\n([\s\S]*?)^```[ \t]*\r?$", agent)
        if not self.require(match is not None, "AGENT_PACKET_MISSING", eid, "Structured reading packet missing"):
            return
        try:
            packet = json.loads(match[1])
        except json.JSONDecodeError as error:
            self.issue("AGENT_PACKET_JSON", eid, str(error))
            return
        self.require(packet == entry.get("agent_packet"), "AGENT_PACKET_MISMATCH", eid, "Exported reading packet differs from compiled data")
        self.require(packet.get("runtime_reading_log") == [], "NONEMPTY_RUNTIME_LOG", eid, "New public packet must start with an empty runtime log")
        self.require(packet.get("export_mode") == "public", "AGENT_ACCESS_MODE", eid, "Expected public export mode")
        if packet.get("prompt"):
            self.require(packet["prompt"] == entry["prompt"], "AGENT_PROMPT_MISMATCH", eid, "Packet and entry prompts differ")
        common = packet.get("required_readings", [])
        branches = packet.get("required_readings_by_branch", {})
        if not self.require(isinstance(common, list), "READING_GROUP", eid, "Common required readings must be a list"):
            common = []
        if not self.require(isinstance(branches, dict), "READING_BRANCHES", eid, "Named branch readings must be an object"):
            branches = {}
        groups = [("common", common)]
        for branch, units in branches.items():
            if self.require(isinstance(branch, str) and bool(branch.strip()) and isinstance(units, list) and bool(units),
                            "EMPTY_READING_BRANCH", eid, "Each named branch needs nonempty designated reading units: " + str(branch)):
                groups.append((branch, units))
        if not common:
            declared = set(packet.get("required_competence_by_branch", {}))
            self.require(declared <= set(branches), "MISSING_READING_BRANCH", eid, "A declared branch has no required reading units")
        readings = [(branch, index, reading) for branch, units in groups for index, reading in enumerate(units)]
        if entry.get("body_format") == "markdown" and entry.get("node_id") and entry["kind"] not in COMPANY_KINDS and entry.get("template") != "T0":
            self.require(bool(readings), "MISSING_REQUIRED_READINGS", eid, "New learning entry needs common or named branch designated reading units")
        else:
            self.stats["legacy_or_directory_packets"] += 1
        for branch, index, reading in readings:
            self.stats["required_reading_units"] += 1
            context = f"{eid} / {branch} reading {index + 1}"
            if not self.require(isinstance(reading, dict), "READING_UNIT", context, "Reading must be an object, not a bare citation"):
                continue
            sid = reading.get("source_id")
            self.require(self.refs.get(sid, {}).get("kind") == "source", "READING_SOURCE", context, str(sid))
            for field_name in ("title", "authors", "version"):
                self.require(bool(reading.get(field_name)), "READING_IDENTITY", context, "Missing " + field_name)
            access = reading.get("access", {})
            self.require(access.get("kind") in READABLE_KINDS, "UNREADABLE_REQUIRED_UNIT", context, str(access.get("kind")))
            uri = access.get("uri", "")
            self.require(bool(uri) and not LOCAL_DRIVE.search(uri) and (uri.startswith("/") or urlsplit(uri).scheme in ("http", "https")), "PUBLIC_READING_URI", context, uri)
            if uri:
                self.internal_link(entry["url"], uri, context)
            unit = reading.get("required_unit", {})
            for field_name in ("locator", "scope", "purpose"):
                self.require(bool(unit.get(field_name)), "READING_SCOPE", context, "Missing " + field_name)
        if entry.get("body_format") == "markdown":
            marker = "## Supplied entry\n"
            self.require(marker in agent, "AGENT_BODY_SECTION", eid, "Supplied entry section missing")
            body_export = agent.split(marker, 1)[-1]
            self.preserve_body(entry["body_markdown"], body_export, eid)
        else:
            for section in entry.get("sections", []):
                self.require(section["id"] in agent, "LEGACY_AGENT_SECTION", eid, section["id"])
                for case in section.get("cases", []):
                    for value in (case["id"], case["cutoff"], case["period"]):
                        self.require(value in agent, "LEGACY_AGENT_CASE", eid, str(value))
                for block in [section] + section.get("cases", []):
                    diagram = block.get("diagram", {})
                    if not diagram:
                        continue
                    self.require(diagram["formula"] in agent, "AGENT_DIAGRAM_FORMULA", eid, diagram["formula"])
                    paths = list(diagram.get("paths", []))
                    for event in diagram.get("events", []):
                        self.require(event["explanation"] in agent, "AGENT_EVENT_EXPLANATION", eid, event["label"])
                        paths.extend(event.get("paths", []))
                    for graph_path in paths:
                        for step in graph_path.get("steps", []):
                            self.require(step["node"] in agent and step.get("via", "") in agent, "AGENT_DIAGRAM_EDGE", eid, str(step))
        if entry.get("agent_markdown"):
            self.preserve_body(entry["agent_markdown"], agent, eid + " / teaching appendix")
        if entry.get("experiments"):
            marker = re.search(r"(?m)^## Experiment inputs and static equivalents\s+```json[ \t]*\r?\n([\s\S]*?)^```[ \t]*\r?$", agent)
            if self.require(marker is not None, "AGENT_EXPERIMENT_INPUTS", eid, "Structured static experiment inputs absent"):
                try:
                    exported = {item["id"]: item for item in json.loads(marker[1])}
                    for experiment in entry["experiments"]:
                        self.require(exported.get(experiment["id"]) == experiment, "AGENT_EXPERIMENT_MISMATCH", eid, experiment["id"])
                except (json.JSONDecodeError, KeyError, TypeError) as error:
                    self.issue("AGENT_EXPERIMENT_JSON", eid, str(error))
        self.stats["agent_files"] += 1

    def check_entries(self):
        self.require(set(self.entries) == set(self.canonical), "CANONICAL_SET", "entries", "Compiled and published canonical entry IDs differ")
        for eid, entry in self.entries.items():
            canonical = self.canonical.get(eid, {})
            page = self.page_for(entry["url"])
            if page is None:
                continue
            self.stats["entries"] += 1
            self.require(entry["title"] in unescape(page.raw), "ENTRY_TITLE", eid, "Title missing from HTML")
            self.require(not LOCAL_DRIVE.search(unescape(page.raw)), "PRIVATE_PATH", eid, "Public page contains a local drive path")
            self.require(entry["prompt"] == canonical.get("prompt"), "STALE_COMPILED_PROMPT", eid, "Compiled prompt differs from canonical input")
            source_runtime = canonical.get("agent_packet", {}).get("runtime_reading_log", [])
            self.require(source_runtime == [], "CANONICAL_RUNTIME_LOG", eid, "Canonical teaching packet runtime log is not empty")
            if entry.get("body_format") == "markdown":
                self.stats["markdown_entries"] += 1
                body = entry["body_markdown"]
                self.require(body == canonical.get("body_markdown"), "STALE_COMPILED_BODY", eid, "Compiled body differs from canonical input")
                explicit = set(re.findall(r"\bid\s*=\s*[\"']([^\"']+)[\"']", outside_fences(body)))
                explicit.update(re.findall(r"\{#([^\s}]+)\}", outside_fences(body)))
                for anchor in explicit | {item["id"] for item in entry.get("anchors", [])}:
                    self.require(anchor in page.ids, "EXPLICIT_ANCHOR", eid, anchor)
                clean = outside_fences(body)
                definitions = set(re.findall(r"(?m)^\s*\[\^([^\]]+)\]:", clean))
                refs = re.findall(r"\[\^([^\]\r\n]+)\](?!:)", clean)
                self.require(set(refs) <= definitions, "FOOTNOTE_DEFINITION", eid, "Undefined labels: " + ", ".join(sorted(set(refs) - definitions)))
                rendered = [node for node in page.elements if node.tag == "a" and (node.attrs.get("role") == "doc-noteref" or "footnote-ref" in node.attrs.get("class", "").split())]
                self.require(len(rendered) == len(refs), "FOOTNOTE_RENDER_COUNT", eid, f"Source occurrences {len(refs)}, rendered {len(rendered)}")
                self.stats["footnote_references"] += len(rendered)
            else:
                self.stats["legacy_entries"] += 1
                for section in entry.get("sections", []):
                    for block in [section] + section.get("cases", []):
                        self.require(block["id"] in page.ids, "LEGACY_SECTION_ANCHOR", eid, block["id"])
            for alias in entry.get("anchor_aliases", []):
                self.require(alias["id"] in page.ids, "LEGACY_ALIAS_ANCHOR", eid, alias["id"])
                self.internal_link(entry["url"], alias.get("url", "#" + alias["target"]), eid + " / alias " + alias["id"])
            interactions = entry.get("interactions", [])
            configured = [item["id"] for item in interactions]
            slots = [node.attrs["data-experiment-slot"] for node in page.elements if "data-experiment-slot" in node.attrs]
            if entry.get("body_format") == "markdown":
                self.require(Counter(slots) == Counter(configured) and all(count == 1 for count in Counter(slots).values()), "EXPERIMENT_SLOT_MAPPING", eid, f"slots={slots}; interactions={configured}")
            for item in interactions:
                self.stats["interactions"] += 1
                element = page.ids.get(item["id"])
                if self.require(element is not None and element.tag == "details" and element.in_class("experiment-embed"), "EXPERIMENT_ELEMENT", eid, item["id"]):
                    self.require(not item.get("open") or "open" in element.attrs, "EXPERIMENT_OPEN", eid, item["id"])
                    frames = [node for node in page.elements if node.tag == "iframe" and self.is_descendant(node, element)]
                    original_url = urlsplit(item["url"])
                    actual_url = urlsplit(frames[0].attrs.get("src", "")) if len(frames) == 1 else None
                    expected_query = parse_qs(original_url.query, keep_blank_values=True)
                    if original_url.path.startswith("/notebook/labs/") and original_url.fragment and "experiment" not in expected_query:
                        expected_query["experiment"] = [original_url.fragment]
                    same_target = actual_url is not None and (actual_url.scheme, actual_url.netloc, actual_url.path) == (original_url.scheme, original_url.netloc, original_url.path)
                    same_parameters = actual_url is not None and parse_qs(actual_url.query, keep_blank_values=True) == expected_query
                    self.require(same_target and same_parameters, "EXPERIMENT_FRAME", eid, item["id"])
                if item.get("static_anchor"):
                    self.require(item["static_anchor"] in page.ids, "EXPERIMENT_STATIC_ANCHOR", eid, item["static_anchor"])
                self.internal_link(entry["url"], item["url"], eid + " / " + item["id"])
            self.check_agent(entry, page)

    @staticmethod
    def is_descendant(node, ancestor):
        node = node.parent
        while node:
            if node is ancestor:
                return True
            node = node.parent
        return False

    def check_routes_and_graph(self):
        subjects = {row["id"] for row in self.book["subjects"]}
        active = [path for path in self.book.get("paths", []) if not path.get("deprecated") and path.get("steps")]
        self.require(len(subjects) == 5, "DOMAIN_COUNT", "catalogue", f"Expected five domains, got {len(subjects)}")
        chinese = [path for path in active if path["lang"] == "zh"]
        self.require(Counter(path.get("subject") for path in chinese) == Counter({sid: 1 for sid in subjects}), "FIVE_DOMAIN_ROUTES", "catalogue", "Expected one existing Chinese route for each domain")
        canonical_paths = {path["id"]: path for path in self.catalogue.get("paths", [])}
        seen = set()
        for path in active:
            self.stats["reading_routes"] += 1
            pid = path["id"]
            page = self.page_for(path["url"])
            if page is None:
                continue
            steps = path["steps"]
            expected_order = [self.resolve_identity(step.get("entry", step.get("node_id")), path["lang"]) for step in canonical_paths.get(pid, {}).get("steps", []) if step.get("status") != "planned"]
            self.require([step["entry"] for step in steps] == expected_order, "ROUTE_ORDER", pid, "Compiled order differs from recommended canonical order")
            rendered = [href for href, element, attr in page.links if attr == "href" and element.in_class("reading-steps") and element.in_tag("h2")]
            self.require(rendered == [step["url"] for step in steps], "ROUTE_RENDER_ORDER", pid, f"Rendered links: {rendered}")
            for index, step in enumerate(steps):
                entry = self.entries.get(step["entry"])
                if not self.require(entry is not None, "ROUTE_ENTRY", pid, step["entry"]):
                    continue
                self.require(entry["id"] not in seen, "MULTIPLE_PRIMARY_ROUTES", pid, entry["id"])
                seen.add(entry["id"])
                self.require(entry["kind"] not in COMPANY_KINDS and entry.get("subject") == path.get("subject") and entry["lang"] == path["lang"], "ROUTE_DOMAIN", pid, entry["id"])
                position = entry.get("reading_path", {})
                self.require(position.get("id") == pid and position.get("number") == index + 1 and position.get("total") == len(steps), "ROUTE_POSITION", entry["id"], str(position))
                for key, neighbor in (("previous", index - 1), ("next", index + 1)):
                    expected = steps[neighbor]["url"] if 0 <= neighbor < len(steps) else None
                    self.require(position.get(key, {}).get("url") == expected, "ROUTE_NEIGHBOR", entry["id"], key)
                if index + 1 < len(steps):
                    self.require(position.get("next", {}).get("why") == step.get("transition", ""), "ROUTE_TRANSITION", entry["id"], "Transition explanation lost")
            for reference in path.get("reference_entries", []):
                self.internal_link(path["url"], reference["url"], pid + " / optional reference")
        graph = self.book.get("graph", {})
        nodes = {node["id"]: node for node in graph.get("nodes", [])}
        edges = graph.get("edges", [])
        declared_requires = set()
        for entry in self.canonical.values():
            for edge in entry.get("relations", []):
                if edge.get("relation") == "requires" and edge.get("status") != "planned":
                    declared_requires.add((self.resolve_identity(edge.get("from", entry.get("node_id", entry["id"])), entry["lang"]), self.resolve_identity(edge["to"], entry["lang"])))
        actual_requires = {(edge["from"], edge["to"]) for edge in edges if edge["relation"] == "requires"}
        self.require(actual_requires == declared_requires, "REQUIRES_VS_RECOMMENDATION", "graph", f"Extra hard prerequisites: {sorted(actual_requires-declared_requires)}; omitted: {sorted(declared_requires-actual_requires)}")
        for edge in edges:
            self.require(edge["from"] in nodes and edge["to"] in nodes, "GRAPH_ENDPOINT", "graph", str(edge))
            self.require(bool(edge.get("reason")), "GRAPH_REASON", "graph", str(edge))
            if edge["relation"] == "requires":
                self.require(bool(edge.get("required_competence")), "REQUIRES_COMPETENCE", edge["from"], edge["to"])
            if edge["relation"] == "part_of":
                self.require(nodes.get(edge["from"], {}).get("kind") not in COMPANY_KINDS, "COMPANY_IN_CONCEPT_GRAPH", edge["from"], edge["to"])
        for entry in self.canonical.values():
            for prerequisite in entry.get("hard_prerequisites", []):
                target = prerequisite.get("to") if isinstance(prerequisite, dict) else prerequisite
                if target:
                    origin = prerequisite.get("from", entry["id"]) if isinstance(prerequisite, dict) else entry["id"]
                    resolved_origin = self.resolve_identity(origin, entry["lang"])
                    self.require(resolved_origin == entry["id"] or self.refs.get(resolved_origin, {}).get("url", "").startswith(self.entries[entry["id"]]["url"] + "#"),
                                 "PREREQUISITE_OWNER", entry["id"], str(origin))
                    self.require((resolved_origin, self.resolve_identity(target, entry["lang"])) in actual_requires, "MISSING_HARD_PREREQUISITE", entry["id"], str(target))
        for node in nodes.values():
            self.internal_link("/zh/notebook/", node["url"], "graph node " + node["id"])
        self.stats["typed_edges"] = len(edges)
        self.stats["hard_prerequisites"] = len(actual_requires)
        company_urls = {entry["url"] for entry in self.entries.values() if entry["kind"] in COMPANY_KINDS}
        for lang in {entry["lang"] for entry in self.entries.values()}:
            catalogue = self.page_for(f"/{lang}/notebook/")
            if catalogue:
                for href, element, attr in catalogue.links:
                    if href in company_urls and element.in_class("subject-group"):
                        self.issue("COMPANY_IN_CONCEPT_CATALOGUE", f"/{lang}/notebook/", href)
            companies = [entry for entry in self.entries.values() if entry["lang"] == lang and entry["kind"] in COMPANY_KINDS]
            if companies:
                library = self.page_for(f"/{lang}/notebook/companies/")
                if library:
                    for entry in companies:
                        self.require(any(href == entry["url"] for href, _, _ in library.links), "COMPANY_LIBRARY_ENTRY", entry["id"], entry["url"])

    def check_site(self):
        for target in sorted(self.build.rglob("*.html")):
            origin = self.url_for_file(target)
            if target not in self.pages:
                self.pages[target] = Page(target.read_text(encoding="utf-8-sig"))
            page = self.pages[target]
            self.stats["html_pages"] += 1
            for identity in set(page.duplicate_ids):
                self.issue("DUPLICATE_DOM_ID", origin, identity)
            for href, element, attr in page.links:
                self.internal_link(origin, href)
                if element.in_class("subject-branch"):
                    company = next((e for e in self.entries.values() if e["url"] == href and e["kind"] in COMPANY_KINDS), None)
                    self.require(company is None, "COMPANY_IN_CONCEPT_NAV", origin, href)
        for url in load_json(ROOT / "docs/legacy-urls.json"):
            target = self.file_for(urlsplit(url).path)
            self.require(target is not None and target.is_file(), "LOST_LEGACY_URL", "legacy URLs", url)
            self.internal_link("/", url, "legacy URL")
            self.stats["legacy_urls"] += 1
        for slug in ("financial-claims", "balance-sheet", "amzn", "goog", "reading-path"):
            self.internal_link("/", f"/zh/notebook/{slug}/", "retained notebook URL")

    def run(self):
        self.check_entries()
        self.check_routes_and_graph()
        self.check_site()
        return dict(build_dir=str(self.build), passed=not self.errors, stats=dict(self.stats), errors=self.errors, warnings=self.warnings,
                    scope="Structural and export validation against actual built files; public external documents are not fetched and browser interaction is not simulated.")


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--build-dir", type=Path, default=ROOT / ".git/notebook-build", help="Hugo destination to validate; does not modify or rebuild it.")
    parser.add_argument("--report", type=Path, help="Optionally write the actual validation findings as JSON.")
    args = parser.parse_args()
    if not args.build_dir.is_dir():
        parser.error("Build directory does not exist: " + str(args.build_dir))
    report = Validator(args.build_dir).run()
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    stats = report["stats"]
    print(f"Checked {stats.get('entries',0)} HTML/Agent entries ({stats.get('markdown_entries',0)} full Markdown, {stats.get('legacy_entries',0)} legacy), "
          f"{stats.get('html_pages',0)} HTML pages, {stats.get('local_links',0)} local links, {stats.get('fragment_links',0)} fragments, "
          f"{stats.get('legacy_urls',0)} legacy URLs, {stats.get('reading_routes',0)} routes, {stats.get('required_reading_units',0)} required reading units and {stats.get('interactions',0)} interactions.")
    print(f"Result: {len(report['errors'])} errors; {len(report['warnings'])} warnings.")
    for item in report["errors"][:40]:
        print(f"[{item['code']}] {item['context']}: {item['message']}")
    if len(report["errors"]) > 40:
        print(f"Additional errors: {len(report['errors'])-40}; use --report for the complete list.")
    return 0 if report["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
