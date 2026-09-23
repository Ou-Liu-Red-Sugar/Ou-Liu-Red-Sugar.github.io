"""Compile canonical entry JSON into Hugo pages, previews and Agent Markdown.

body_markdown is one complete Markdown document, including its footnotes.
Legacy sections remain supported. --output-root keeps generated files isolated.
"""
import argparse
import copy
import html
import json
import re
from pathlib import Path
from urllib.parse import urljoin
from notebook_notation import load_notation, notation_markdown, notation_instruction
from notebook_learning_plan import learning_plan_outputs

ROOT = Path(__file__).resolve().parents[1]
BASE_URL = "https://ou-liu-red-sugar.github.io/"
LINK = re.compile(r"\[\[([A-Za-z0-9_.:#/-]+)\|([^\]]+)\]\]")
RELATIONS = {"part_of", "requires", "uses_method", "derived_from", "has_mechanism",
             "illustrated_by", "supported_by", "analyzes", "informs", "updates", "compares_with"}
COMPANY_KINDS = {"company", "research"}
READABLE_KINDS = {"html_full_text", "pdf_full_text", "tex_full_text", "publisher_full_text",
                  "supplied_excerpt", "selected_chapters", "site_body", "site_full_text"}
READING_PROTOCOL = """Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference."""


def require(condition, message):
    if not condition:
        raise ValueError(message)


def required_reading_groups(packet, context):
    """Common units and named selected-branch units; neither implies read access."""
    common = packet.get("required_readings", [])
    branches = packet.get("required_readings_by_branch", {})
    require(isinstance(common, list), f"{context}: required_readings must be a list")
    require(isinstance(branches, dict), f"{context}: required_readings_by_branch must be an object")
    groups = [("common", common)]
    for branch, readings in branches.items():
        require(isinstance(branch, str) and branch.strip() and isinstance(readings, list) and readings,
                f"{context}: each named branch needs nonempty designated reading units")
        groups.append((branch, readings))
    if not common:
        declared = set(packet.get("required_competence_by_branch", {}))
        require(declared <= set(branches), f"{context}: a declared branch has no required reading units")
    return groups


def diagram_text(diagram):
    lines = ["", "### Illustration — paths and results", diagram["description"],
             f'Formula: {diagram["formula"]}', f'Default: {diagram["default"]}',
             f'Conditions: {diagram["conditions"]}']

    def paths_text(paths):
        return [path.get("title", "") + ": " + " → ".join(
            (f'[{step["via"]}] ' if step.get("via") else "") + step["node"] +
            (": " + step["detail"] if step.get("detail") else "")
            for step in path["steps"]) for path in paths]

    lines += paths_text(diagram.get("paths", []))
    for event in diagram.get("events", []):
        require(event["assets"] == event["liabilities"] + event["equity"], "Unbalanced teaching event")
        lines += ["", event["label"]] + paths_text(event["paths"]) + [
            event["explanation"],
            f'资产 {event["assets"]} = 负债 {event["liabilities"]} + 权益 {event["equity"]}',
            event["asset_detail"], event["liability_detail"], event["equity_detail"]]
    return lines


def check_cycles(edges, relation):
    adjacency = {}
    for edge in edges:
        if edge["relation"] == relation:
            adjacency.setdefault(edge["from"], []).append(edge["to"])
    visited, active, trail = set(), set(), []

    def visit(node):
        if node in active:
            cycle = trail[trail.index(node):] + [node]
            raise ValueError(f'{relation} cycle: {" -> ".join(cycle)}')
        if node in visited:
            return
        active.add(node)
        trail.append(node)
        for target in adjacency.get(node, []):
            visit(target)
        trail.pop()
        active.remove(node)
        visited.add(node)

    for node in adjacency:
        visit(node)


def compile_notebook(source_root=ROOT, output_root=None):
    source_root = Path(source_root).resolve()
    output_root = Path(output_root or source_root).resolve()
    book = json.loads((source_root / "notebook/catalogue.json").read_text(encoding="utf-8-sig"))
    entries = [json.loads(path.read_text(encoding="utf-8-sig"))
               for path in sorted((source_root / "notebook/entries").glob("*.json"))]
    entries = [entry for entry in entries if entry.get("published", True)]
    refs, by_id, node_ids, document_keys, ref_aliases = {}, {}, {}, set(), {}
    experiment_data = {}
    subjects = {subject["id"]: subject for subject in book["subjects"]}
    require(len(subjects) == len(book["subjects"]), "Duplicate subject ID")
    topic_rows = list(book.get("topics", []))
    for subject in subjects.values():
        topic_rows += [dict(topic, subject=subject["id"]) for topic in subject.get("topics", [])]
    topics = {topic["id"]: topic for topic in topic_rows}
    require(len(topics) == len(topic_rows), "Maintain each topic once: nested subjects[].topics OR book.topics")
    book["topics"] = list(topics.values())
    files = {}
    notation = load_notation(source_root)

    def write(path, value):
        relative = Path(path)
        require(not relative.is_absolute() and ".." not in relative.parts,
                f"Generated path escapes output root: {path}")
        require(relative not in files, f"Duplicate generated output: {path}")
        files[relative] = value

    def page(path, metadata, body=""):
        write(path, json.dumps(metadata, ensure_ascii=False, indent=2) + "\n\n" + body + ("\n" if body else ""))

    def add(key, data):
        require(key and key not in refs, f"Duplicate stable ID: {key}")
        refs[key] = dict(data)

    for source in book.get("sources", []):
        source["id"] = source.get("id", source.get("source_id"))
        require(source.get("id") and source.get("title") and source.get("url"),
                "Source requires id/source_id, title and public url")
        source.setdefault("body", source.get("summary") or source.get("supports") or
                          "; ".join(source.get("locators", [])) or source["title"])
        add(source["id"], dict(source, kind="source"))
    for lang in ("zh", "en"):
        add(f"notation-{lang}", dict(title=notation["text"][lang]["title"],
            body=notation_markdown(notation, lang), kind="notation", lang=lang,
            url=f"/{lang}/notebook/notation/"))
    for subject in subjects.values():
        add(subject["id"], dict(title=subject.get("zh", subject["id"]), body=subject.get("desc_zh", ""),
                               kind="domain", url=f'/zh/notebook/#{subject["id"]}'))
        subject["topics"] = [topic for topic in topics.values() if topic["subject"] == subject["id"]]
    for topic in topics.values():
        require(topic.get("subject") in subjects, f'{topic["id"]}: unknown subject')
        add(topic["id"], dict(title=topic.get("zh", topic["id"]), body=topic.get("desc_zh", ""),
                             kind="topic", url=f'/zh/notebook/#{topic["id"]}'))

    for entry in entries:
        for key in ("id", "lang", "slug", "title", "summary", "kind", "revised", "prompt"):
            require(entry.get(key), f'{entry.get("id")}: missing {key}')
        require(entry["lang"] in ("zh", "en"), f'{entry["id"]}: unsupported language')
        require(re.fullmatch(r"[a-z0-9-]+", entry["slug"]), f'{entry["id"]}: invalid slug')
        require(bool(entry.get("body_markdown", "").strip()) or bool(entry.get("sections")),
                f'{entry["id"]}: requires body_markdown or legacy sections')
        if entry["kind"] not in COMPANY_KINDS:
            require(entry.get("subject") in subjects, f'{entry["id"]}: unknown subject')
            if entry.get("topic"):
                require(entry["topic"] in topics and topics[entry["topic"]]["subject"] == entry["subject"],
                        f'{entry["id"]}: topic is not in its primary subject')
        if entry["kind"] == "research":
            require(entry.get("cutoff") and entry.get("period"), f'{entry["id"]}: dated research needs cutoff and period')
        entry["url"] = f'/{entry["lang"]}/notebook/{entry["slug"]}/'
        entry["agent"] = f'/agent/{entry["lang"]}/{entry["slug"]}.md'
        entry["body_format"] = "markdown" if entry.get("body_markdown", "").strip() else "sections"
        entry.pop("reading_path", None)
        key = (entry["lang"], entry["slug"])
        require(key not in document_keys, f"Duplicate language/slug: {key}")
        document_keys.add(key)
        require(entry["id"] not in by_id, f'Duplicate entry ID: {entry["id"]}')
        by_id[entry["id"]] = entry
        if entry.get("node_id"):
            key = (entry["lang"], entry["node_id"])
            require(key not in node_ids, f"Duplicate language/node_id: {key}")
            node_ids[key] = entry["id"]
        add(entry["id"], dict(title=entry["title"], body=entry.get("preview", entry["summary"]),
                             url=entry["url"], kind=entry["kind"], node_id=entry.get("node_id", ""),
                             lang=entry["lang"], cutoff=entry.get("cutoff", ""),
                             period=entry.get("period", ""), revised=entry["revised"]))
        if entry["body_format"] == "sections":
            for section in entry["sections"]:
                add(section["id"], dict(title=section["title"], body=section["body"],
                                       url=entry["url"] + "#" + section["id"],
                                       kind=section.get("kind", "section"), lang=entry["lang"]))
                for case in section.get("cases", []):
                    require(case.get("cutoff") and case.get("period") and case.get("sources"),
                            f'{case["id"]}: case requires cutoff, period and sources')
                    add(case["id"], dict(title=case["title"], body=case["body"],
                                        url=entry["url"] + "#" + case["id"], kind="case",
                                        lang=entry["lang"], cutoff=case["cutoff"], period=case["period"]))
        for anchor in entry.get("anchors", []):
            aid = anchor["id"]
            require(entry["body_format"] == "markdown", f'{entry["id"]}: anchors indexes body_markdown only')
            require(re.search(r'\bid=["\']' + re.escape(aid) + r'["\']', entry["body_markdown"]) or
                    re.search(r'\{#' + re.escape(aid) + r'\}', entry["body_markdown"]),
                    f'{entry["id"]}: indexed anchor {aid} is absent from body_markdown')
            if anchor.get("kind") in ("case", "research"):
                require(anchor.get("period") and anchor.get("cutoff"), f'{aid}: dated anchor needs period and cutoff')
            add(aid, dict(title=anchor["title"], body=anchor.get("preview", ""),
                          url=entry["url"] + "#" + aid, kind=anchor.get("kind", "section"),
                          lang=entry["lang"], period=anchor.get("period", ""), cutoff=anchor.get("cutoff", "")))
        for experiment in entry.get("experiments", []):
            require(experiment["anchor"] in refs and
                    refs[experiment["anchor"]]["url"] == entry["url"] + "#" + experiment["anchor"],
                    f'{experiment["id"]}: experiment anchor must be indexed in its owner entry')
            add(experiment["id"], dict(title=experiment["title"], body=experiment.get("description", ""),
                                      kind="experiment", lang=entry["lang"],
                                      url=entry["url"] + "#" + experiment["anchor"]))
            experiment_data[experiment["id"]] = experiment

    def target_id(target, lang):
        if target in ref_aliases:
            return ref_aliases[target]
        if target in refs:
            return target
        if (lang, target) in node_ids:
            return node_ids[(lang, target)]
        # A moved historical fragment may explicitly name its public destination.
        if isinstance(target, str) and target.startswith(("/", BASE_URL)):
            relative = "/" + target.removeprefix(BASE_URL).lstrip("/")
            matches = [rid for rid, ref in refs.items() if ref["url"] == relative and rid not in ref_aliases]
            require(len(matches) == 1, f"Unknown or ambiguous published destination: {target}")
            return matches[0]
        for subject in subjects.values():
            if target in (subject.get("zh"), subject.get("en")):
                return subject["id"]
        if isinstance(target, str) and "#" in target:
            entry_key, anchor = target.split("#", 1)
            owner_id = target_id(entry_key, lang)
            require(anchor in refs and refs[anchor]["url"].startswith(refs[owner_id]["url"] + "#"),
                    f"Unknown scoped reference: {target}")
            return anchor
        raise ValueError(f"Unknown reference ({lang}): {target}")

    for entry in entries:
        for alias in entry.get("anchor_aliases", []):
            target = alias["target"].removeprefix("#")
            resolved = target_id(target, entry["lang"])
            if alias["id"] in refs:
                require(alias["id"] == resolved,
                        f'{entry["id"]}: alias would replace a different stable reference {alias["id"]}')
            else:
                add(alias["id"], dict(refs[resolved]))
                ref_aliases[alias["id"]] = resolved
            alias["url"] = refs[resolved]["url"]
            alias["target"] = (alias["url"].split("#", 1)[1]
                               if alias["url"].startswith(entry["url"] + "#") else resolved)

    def resolve(text, lang, web=True):
        def sub(match):
            target, label = match.groups()
            resolved = target_id(target, lang)
            url = refs[resolved]["url"]
            if refs[resolved]["kind"] in ("domain", "topic"):
                url = f'/{lang}/notebook/#{resolved}'
            if web:
                return (f'<a class="inline-ref" href="{html.escape(url, quote=True)}" '
                        f'data-reference="{html.escape(resolved, quote=True)}">'
                        f'{html.escape(label)}<span aria-hidden="true"> ↗</span></a>')
            return f"[{label}]({urljoin(BASE_URL, url)})"
        lines, fence = [], None
        for line in text.splitlines(keepends=True):
            match = re.match(r"^\s*(`{3,}|~{3,})", line)
            if match:
                token = match[1]
                if fence is None:
                    fence = token
                elif token[0] == fence[0] and len(token) >= len(fence):
                    fence = None
                lines.append(line)
            else:
                lines.append(line if fence else LINK.sub(sub, line))
        return "".join(lines)

    for path in book.get("paths", []):
        lang = path["lang"]
        path["url"] = f'/{lang}/notebook/{path["slug"]}/'
        require((lang, path["slug"]) not in document_keys, f'Path collides with entry: {path["slug"]}')
        document_keys.add((lang, path["slug"]))
        if path.get("subject"):
            require(path["subject"] in subjects, f'{path["id"]}: unknown subject')
        steps = [step for step in path["steps"] if step.get("status") != "planned"]
        seen = set()
        for step in steps:
            eid = target_id(step.get("entry", step.get("node_id")), lang)
            require(eid in by_id, f'{path["id"]}: path step is not an entry')
            entry = by_id[eid]
            require(entry["lang"] == lang, f'{path["id"]}: path language differs from entry')
            require(entry["kind"] not in COMPANY_KINDS, f'{path["id"]}: company does not belong to a learning path')
            if path.get("subject") and not path.get("deprecated"):
                require(entry["subject"] == path["subject"], f'{path["id"]}: cross-domain path step {eid}')
            require(eid not in seen, f'{path["id"]}: repeated path step')
            seen.add(eid)
            step.update(entry=eid, title=entry["title"], url=entry["url"])
            step.setdefault("question", step.get("outcome", ""))
            step.setdefault("transition", "")
            step.setdefault("label", entry.get("node_id", ""))
        path["steps"] = steps
        path["reference_entries"] = []
        for reference in path.get("references", []):
            rid = target_id(reference, lang)
            require(rid in by_id and by_id[rid]["lang"] == lang,
                    f'{path["id"]}: reference must be a published entry in the same language')
            ref = by_id[rid]
            path["reference_entries"].append(dict(id=rid, title=ref["title"], url=ref["url"],
                                                   node_id=ref.get("node_id", "")))
        if not steps and not path.get("deprecated"):
            continue
        if not path.get("deprecated"):
            for index, step in enumerate(steps):
                entry = by_id[step["entry"]]
                require("reading_path" not in entry, f'{entry["id"]}: more than one primary reading path')
                route = dict(id=path["id"], title=path["title"], url=path["url"], number=index + 1,
                             total=len(steps), question=step["question"])
                if index:
                    route["previous"] = steps[index - 1]
                if index + 1 < len(steps):
                    route["next"] = dict(steps[index + 1], why=step["transition"])
                entry["reading_path"] = route
        folder = "content-zh" if lang == "zh" else "content"
        layout = "path-index" if path.get("deprecated") and path["slug"] == "reading-path" else "path"
        page(f'{folder}/notebook/{path["slug"]}.md', dict(title=path["title"], layout=layout, pathid=path["id"]))

    if book.get("path_index"):
        index = book["path_index"]
        key = (index["lang"], index["slug"])
        require(key not in document_keys, "Path index collides with an entry/path")
        document_keys.add(key)
        index["url"] = f'/{index["lang"]}/notebook/{index["slug"]}/'
        folder = "content-zh" if index["lang"] == "zh" else "content"
        page(f'{folder}/notebook/{index["slug"]}.md',
             dict(title=index["title"], description=index.get("summary", ""), layout="path-index"))

    graph_edges, edge_keys = [], set()

    def add_edge(edge):
        key = (edge["from"], edge["relation"], edge["to"], edge.get("at_section", ""))
        if key not in edge_keys:
            graph_edges.append(edge)
            edge_keys.add(key)

    for entry in entries:
        if entry["kind"] not in COMPANY_KINDS:
            add_edge({"from": entry["id"], "relation": "part_of",
                      "to": entry.get("topic") or entry["subject"], "reason": "主要 topic 归属"})
        for relation in entry.get("relations", []):
            require(relation.get("relation") in RELATIONS, f'{entry["id"]}: unknown relation type')
            require(relation.get("reason"), f'{entry["id"]}: relation requires reason')
            if relation.get("status") == "planned":
                continue
            edge = dict(relation)
            edge["from"] = target_id(edge.get("from", entry.get("node_id", entry["id"])), entry["lang"])
            edge["to"] = target_id(edge["to"], entry["lang"])
            if edge["relation"] == "requires":
                require(edge.get("required_competence"), f'{entry["id"]}: requires needs required_competence')
            if edge["relation"] == "supported_by":
                require(refs[edge["to"]]["kind"] == "source", f'{entry["id"]}: supported_by must target a source')
                require(edge.get("locator") or edge.get("scope") or refs[edge["to"]].get("locators"),
                        f'{entry["id"]}: supported_by needs source locator/scope')
            if edge["relation"] == "part_of":
                require(refs[edge["from"]]["kind"] not in COMPANY_KINDS,
                        f'{entry["id"]}: company/research cannot be a concept topic child')
                if edge["from"] == entry["id"]:
                    require(edge["to"] == (entry.get("topic") or entry.get("subject")),
                            f'{entry["id"]}: part_of conflicts with primary topic')
            add_edge(edge)
    active_topics = {entry["topic"] for entry in entries if entry.get("topic") and entry["kind"] not in COMPANY_KINDS}
    active_subjects = {entry["subject"] for entry in entries if entry["kind"] not in COMPANY_KINDS}
    for tid in active_topics:
        add_edge({"from": tid, "relation": "part_of", "to": topics[tid]["subject"], "reason": "topic 所属领域"})
    check_cycles(graph_edges, "requires")
    check_cycles(graph_edges, "derived_from")

    def reading_packet(entry):
        packet = copy.deepcopy(entry.get("agent_packet", {}))
        packet["runtime_reading_log"] = []
        packet.setdefault("required_readings", [])
        packet.setdefault("optional_readings", [])
        packet.setdefault("export_mode", "public")
        require(packet["export_mode"] == "public", f'{entry["id"]}: site generation requires a public Agent packet')
        groups = required_reading_groups(packet, entry["id"])
        for branch, branch_readings in groups:
            for reading in branch_readings:
                require(isinstance(reading, dict), f'{entry["id"]}: required reading needs a specified unit, not only an ID')
                sid = target_id(reading["source_id"], entry["lang"])
                require(refs[sid]["kind"] == "source", f'{entry["id"]}: reading source is not a source')
                source = refs[sid]
                reading["source_id"] = sid
                reading.setdefault("title", source["title"])
                reading.setdefault("authors", source.get("authors", []))
                reading.setdefault("version", source.get("version", ""))
                access = reading.setdefault("access", {})
                access.setdefault("uri", source["url"])
                require(access.get("kind") in READABLE_KINDS,
                        f'{entry["id"]}: required reading needs readable public text')
                require(not re.match(r"^[A-Za-z]:[\\/]", access["uri"]), f'{entry["id"]}: local reading path in public packet')
                unit = reading.get("required_unit", {})
                require(unit.get("locator") and unit.get("scope") and unit.get("purpose"),
                        f'{entry["id"]}: required reading needs locator, scope and purpose')
        if entry["body_format"] == "markdown" and entry.get("node_id") and entry["kind"] not in COMPANY_KINDS and entry.get("template") != "T0":
            require(any(readings for _, readings in groups), f'{entry["id"]}: new learning entry needs common or named branch required_readings')
        return packet

    search, used_sources = [], set()
    for entry in entries:
        lang = entry["lang"]
        packet = reading_packet(entry)
        entry["agent_packet"] = packet
        # A published entry includes relations authored at its indexed paragraphs.
        scope_ids = {entry["id"]} | {
            rid for rid, ref in refs.items()
            if rid not in ref_aliases and ref["url"].startswith(entry["url"] + "#")
        }
        entry["graph_scope_ids"] = sorted(scope_ids)
        lines = [f'# {entry["title"]}', "", entry["summary"], "",
                 f'Entry: {entry["id"]} | Node: {entry.get("node_id", "")} | Language: {lang} | Editorial revision: {entry["revised"]}']
        if entry.get("cutoff"):
            lines += [f'Research cutoff: {entry["cutoff"]} | Data period: {entry.get("period", "")}']
        lines += ["", "## Teaching instructions", entry["prompt"], "", READING_PROTOCOL,
                  "", "## Shared notation and writing conventions", notation_instruction(notation, lang),
                  f'[Notation and units]({BASE_URL}agent/{lang}/notation.md)',
                  "", "## Required readings and runtime protocol", "```json",
                  json.dumps(packet, ensure_ascii=False, indent=2), "```", "", "## Supplied entry"]
        used = {target_id(sid, lang) for sid in entry.get("sources", [])}
        for branch, readings in required_reading_groups(packet, entry["id"]):
            used.update(reading["source_id"] for reading in readings)
            for reading in readings:
                used.update(target_id(sid, lang) for sid in reading.get("fallback_source_ids", []))
        public_body = ""
        if entry["body_format"] == "markdown":
            raw_body = entry["body_markdown"]
            lines.append(resolve(raw_body, lang, False))
            public_body = resolve(raw_body, lang)
            search_body = raw_body
        else:
            legacy_body = []
            for section in entry["sections"]:
                legacy_body += ["", f'## {section["title"]} [{section["id"]}]', "", resolve(section["body"], lang, False)]
                for check in section.get("checks", []):
                    legacy_body += ["", "### " + check["question"], resolve(check["answer"], lang, False)]
                if section.get("diagram"):
                    legacy_body += diagram_text(section["diagram"])
                for case in section.get("cases", []):
                    legacy_body += ["", f'### {case["title"]} [{case["id"]}]',
                                    f'Research cutoff: {case["cutoff"]} | Data period: {case["period"]}',
                                    "", resolve(case["body"], lang, False)]
                    used.update(target_id(sid, lang) for sid in case["sources"])
                    if case.get("diagram"):
                        legacy_body += diagram_text(case["diagram"])
            lines += legacy_body
            search_body = "\n".join(legacy_body)
        if entry.get("agent_markdown"):
            lines += ["", "## Additional teaching material", resolve(entry["agent_markdown"], lang, False)]
        experiments = {experiment["id"] for experiment in entry.get("experiments", [])}
        experiments.update(edge["to"] for edge in graph_edges
                           if edge["from"] in scope_ids and edge["to"] in experiment_data)
        if experiments:
            lines += ["", "## Experiment inputs and static equivalents", "```json",
                      json.dumps([experiment_data[eid] for eid in sorted(experiments)], ensure_ascii=False, indent=2), "```"]
        lines += ["", "## Sources"]
        for sid in sorted(used):
            source = refs[sid]
            require(source["kind"] == "source", f'{entry["id"]}: sources contains a non-source {sid}')
            lines += [f'- [{source["title"]}]({urljoin(BASE_URL, source["url"])}): {resolve(source["body"], lang, False)}']
        used_sources.update(used)
        entry["sources"] = sorted(used)
        outgoing = [edge for edge in graph_edges if edge["from"] in scope_ids]
        lines += ["", "## Content relations", "```json", json.dumps(outgoing, ensure_ascii=False, indent=2), "```"]
        lines += ["", "## Related entries"]
        entry["related"] = [target_id(rid, lang) for rid in entry.get("related", [])]
        for rid in entry["related"]:
            ref = refs[rid]
            lines += [f'- [{ref["title"]}]({urljoin(BASE_URL, ref["url"])})']
        if entry.get("reading_path"):
            route = entry["reading_path"]
            lines += ["", "## Optional reading path", f'{route["title"]}: step {route["number"]}/{route["total"]}', route["question"]]
            if route.get("next"):
                following = route["next"]
                lines += [following["why"], f'Next: [{following["title"]}]({urljoin(BASE_URL, following["url"])})']
        if entry.get("translation"):
            target = by_id.get(entry["translation"])
            require(target and target.get("translation") == entry["id"] and target["lang"] != lang,
                    f'{entry["id"]}: translation must be reciprocal and in another language')
            entry["translation_url"] = target["url"]
        agent = "\n".join(lines) + "\n"
        write(Path("static") / entry["agent"].lstrip("/"), agent)
        entry["teaching_context"] = agent
        if entry["body_format"] == "sections":
            for section in entry["sections"]:
                section["body"] = resolve(section["body"], lang)
                for check in section.get("checks", []):
                    check["answer"] = resolve(check["answer"], lang)
                for case in section.get("cases", []):
                    case["body"] = resolve(case["body"], lang)
        metadata = dict(title=entry["title"], description=entry["summary"], layout="entry",
                        notebookid=entry["id"], math=True, body_format=entry["body_format"],
                        translationKey=min(entry["id"], entry.get("translation", entry["id"])))
        folder = "content-zh" if lang == "zh" else "content"
        page(Path(folder) / "notebook" / (entry["slug"] + ".md"), metadata, public_body)
        search.append(dict(id=entry["id"], node_id=entry.get("node_id", ""), lang=lang,
                           title=entry["title"], summary=entry["summary"], url=entry["url"],
                           text=" ".join(entry.get("aliases", [])) + " " + search_body,
                           subject=entry.get("subject"), topic=entry.get("topic"), kind=entry["kind"]))

    edge_endpoints = {edge[key] for edge in graph_edges for key in ("from", "to")}
    graph_nodes = []
    for rid, ref in refs.items():
        if rid in ref_aliases:
            continue
        kind = ref["kind"]
        if kind == "notation":
            continue
        if kind == "source" and rid not in used_sources and rid not in edge_endpoints:
            continue
        if kind == "domain" and rid not in active_subjects:
            continue
        if kind == "topic" and rid not in active_topics:
            continue
        graph_nodes.append(dict(id=rid, title=ref["title"], url=ref["url"], kind=kind,
                                preview_id=rid, lang=ref.get("lang", ""), node_id=ref.get("node_id", ""),
                                period=ref.get("period", ""), cutoff=ref.get("cutoff", ""), revised=ref.get("revised", "")))
    graph_ids = {node["id"] for node in graph_nodes}
    require(edge_endpoints <= graph_ids, f"Graph endpoints missing: {sorted(edge_endpoints - graph_ids)}")
    for ref in refs.values():
        ref["body"] = resolve(ref["body"], ref.get("lang", "zh"))
    book["entries"], book["references"] = entries, refs
    book["graph"] = dict(nodes=graph_nodes, edges=graph_edges)
    write("data/notebook.json", json.dumps(book, ensure_ascii=False, indent=2))
    write("static/notebook/search.json", json.dumps(search, ensure_ascii=False))
    for lang, folder, title in [("zh", "content-zh", "投资与金融笔记"), ("en", "content", "Finance notebook")]:
        page(f"{folder}/notebook/_index.md", dict(title=title, layout="catalogue"))
        notation_title = notation["text"][lang]["title"]
        notation_body = notation_markdown(notation, lang)
        page(f"{folder}/notebook/notation.md", dict(title=notation_title, layout="notation", math=True,
             translationKey="notebook-notation"), notation_body.rstrip())
        write(f"static/agent/{lang}/notation.md", f"# {notation_title}\n\n" + notation_body)
        if any(entry["kind"] in COMPANY_KINDS and entry["lang"] == lang for entry in entries):
            require((lang, "companies") not in document_keys, "Company index collides with an entry/path")
            page(f"{folder}/notebook/companies.md", dict(title="公司资料库" if lang == "zh" else "Company library", layout="companies"))
        agent_index = f"# Agent notebook\n\n- [{notation_title}]({BASE_URL}agent/{lang}/notation.md)\n" + "\n".join(
            f'- [{entry["title"]}]({urljoin(BASE_URL, entry["agent"])})' for entry in entries if entry["lang"] == lang)
        write(f"static/agent/{lang}/index.md", agent_index.rstrip() + "\n")
    for path, value in learning_plan_outputs(source_root, entries).items():
        write(path, value)
    # Validation is complete before the first generated file is written.
    for path, value in files.items():
        target = output_root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(value, encoding="utf-8")
    return book


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-root", type=Path, default=ROOT,
                        help="Write generated data/content/static here; input remains this repository.")
    args = parser.parse_args()
    book = compile_notebook(ROOT, args.output_root)
    if args.output_root.resolve() == ROOT.resolve():
        from prepare_notebook_lab_display import prepare
        prepare(ROOT)
    print(f'Compiled {len(book["entries"])} entries, {len(book["references"])} references, '
          f'{len(book["graph"]["edges"])} typed edges into {args.output_root.resolve()}.')


if __name__ == "__main__":
    main()
