"""Validate one learning plan and prepare its map and readable outline outputs.

These functions only return generated text. The notebook compiler writes it after
all notebook and plan validation has succeeded.
"""
import copy
import json
from pathlib import Path


RELATION_KINDS = {"main", "knowledge", "economic", "decision", "research"}
EDITORIAL_TITLES = {
    "positioning": "定位",
    "reader": "读者与学习目标",
    "scope": "内容范围",
    "depth": "讲解深度",
    "materials": "资料采用原则",
    "writing": "写作安排",
    "cadence_notes": "推进节奏",
}
ENTRY_NOTE_TITLES = {"sources": "资料方向", "weight": "篇幅安排"}


def require(condition, message):
    if not condition:
        raise ValueError(f"Learning plan: {message}")


def text(value, context, allow_empty=False):
    require(isinstance(value, str) and (allow_empty or value.strip()),
            f"{context} must be {'a string' if allow_empty else 'a nonempty string'}")


def text_list(value, context, allow_empty=False):
    require(isinstance(value, list) and (allow_empty or value), f"{context} must be a list")
    for item in value:
        text(item, context)


def indexed_rows(value, context):
    require(isinstance(value, list) and value, f"{context} must be a nonempty list")
    result = {}
    for row in value:
        require(isinstance(row, dict), f"{context} rows must be objects")
        text(row.get("id"), f"{context} id")
        require(row["id"] not in result, f"duplicate {context} id: {row['id']}")
        result[row["id"]] = row
    return result


def validate_learning_plan(plan):
    require(isinstance(plan, dict), "root must be an object")
    require(type(plan.get("schema_version")) is int and plan["schema_version"] == 1,
            "unsupported schema_version")
    for key in ("title", "description", "default_node"):
        text(plan.get(key), key)
    nodes = indexed_rows(plan.get("nodes"), "node")
    require(plan["default_node"] in nodes, "default_node references an unknown node")
    for node in nodes.values():
        for key in ("title", "short", "depth", "visual"):
            text(node.get(key), f"node {node['id']} {key}")
        text_list(node.get("topics"), f"node {node['id']} topics")

    grouped_nodes = []
    groups = indexed_rows(plan.get("groups"), "group")
    for group in groups.values():
        text(group.get("title"), f"group {group['id']} title")
        require(isinstance(group.get("rows"), list) and group["rows"],
                f"group {group['id']} needs rows")
        for row in group["rows"]:
            text_list(row, f"group {group['id']} row")
            require(set(row) <= nodes.keys(), f"group {group['id']} references an unknown node")
            grouped_nodes.extend(row)
    require(len(grouped_nodes) == len(set(grouped_nodes)), "groups contain duplicate nodes")
    require(set(grouped_nodes) == nodes.keys(), "groups must cover every node")

    require(isinstance(plan.get("edges"), list), "edges must be a list")
    edge_keys = set()
    for edge in plan["edges"]:
        require(isinstance(edge, dict), "edge must be an object")
        for key in ("from", "to", "kind", "label"):
            text(edge.get(key), f"edge {key}")
        require(edge["from"] in nodes and edge["to"] in nodes, "edge references an unknown node")
        require(edge["kind"] in RELATION_KINDS, f"unknown relation kind: {edge['kind']}")
        key = (edge["from"], edge["to"], edge["kind"])
        require(key not in edge_keys, f"duplicate edge: {key}")
        edge_keys.add(key)
    # Graph relations include economic feedback; only explicit prerequisites
    # constrain the article sequence.
    entries = indexed_rows(plan.get("entries"), "entry")
    entry_nodes = set()
    for entry in entries.values():
        for key in ("node", "title", "goal", "example", "visual"):
            text(entry.get(key), f"entry {entry['id']} {key}")
        require(entry["node"] in nodes, f"entry {entry['id']} references an unknown node")
        entry_nodes.add(entry["node"])
        text_list(entry.get("scope"), f"entry {entry['id']} scope")
        prerequisites = entry.get("prerequisites", [])
        text_list(prerequisites, f"entry {entry['id']} prerequisites", allow_empty=True)
        require(len(prerequisites) == len(set(prerequisites)),
                f"entry {entry['id']} has duplicate prerequisites")
        require(set(prerequisites) <= entries.keys(),
                f"entry {entry['id']} has an unknown prerequisite")
    require(entry_nodes == nodes.keys(), "entries must cover every node")
    sequence = plan.get("sequence")
    text_list(sequence, "sequence")
    require(len(sequence) == len(set(sequence)), "sequence contains duplicate entries")
    require(set(sequence) == entries.keys(), "sequence must cover every entry exactly once")
    positions = {entry_id: index for index, entry_id in enumerate(sequence)}
    for entry in entries.values():
        for prerequisite in entry.get("prerequisites", []):
            require(positions[prerequisite] < positions[entry["id"]],
                    f"prerequisite {prerequisite} must precede {entry['id']} in sequence")

    phase_entries = []
    for phase in indexed_rows(plan.get("phases"), "phase").values():
        for key in ("title", "goal"):
            text(phase.get(key), f"phase {phase['id']} {key}")
        text(phase.get("transition", ""), f"phase {phase['id']} transition", allow_empty=True)
        text_list(phase.get("entry_ids"), f"phase {phase['id']} entry_ids")
        require(set(phase["entry_ids"]) <= entries.keys(),
                f"phase {phase['id']} references an unknown entry")
        phase_entries.extend(phase["entry_ids"])
    require(phase_entries == sequence, "phase entry_ids must follow and cover sequence exactly once")

    editorial = plan.get("editorial")
    require(isinstance(editorial, dict), "editorial must be an object")
    cadence = editorial.get("cadence")
    require(isinstance(cadence, list) and len(cadence) == 2 and
            all(type(value) is int and value > 0 for value in cadence) and cadence[0] <= cadence[1],
            "editorial cadence must contain an increasing positive integer range")
    for key, value in editorial.items():
        if key == "cadence":
            continue
        if key == "sections":
            require(isinstance(value, list), "editorial sections must be a list")
            for section in value:
                require(isinstance(section, dict), "editorial section must be an object")
                text(section.get("title"), "editorial section title")
                text_list(section.get("paragraphs"), "editorial section paragraphs")
        elif isinstance(value, list):
            text_list(value, f"editorial {key}")
        else:
            text(value, f"editorial {key}")
    return plan


def compile_learning_map(plan, published_entries):
    """Use exact Chinese article node_id matches, never a planned or guessed URL."""
    available = {}
    for entry in published_entries:
        if entry.get("lang") != "zh" or not entry.get("node_id") or not entry.get("published", True):
            continue
        require(entry["node_id"] not in available,
                f"duplicate available Chinese node_id: {entry['node_id']}")
        available[entry["node_id"]] = entry
    result = {key: copy.deepcopy(plan[key]) for key in
              ("title", "description", "default_node", "groups", "edges")}
    result["nodes"] = [dict(id=node["id"], title=node["title"], short=node["short"],
                            description=node["depth"]) for node in plan["nodes"]]
    result["entries"] = []
    for planned in plan["entries"]:
        actual = available.get(planned["id"])
        if actual:
            text(actual.get("url"), f"available entry {actual.get('id')} url")
        result["entries"].append(dict(
            id=planned["id"], node=planned["node"], title=planned["title"], goal=planned["goal"],
            status="available" if actual else "planned", url=actual["url"] if actual else None))
    return result


def table_cell(value):
    return str(value).replace("|", "\\|").replace("\r\n", "<br>").replace("\n", "<br>")


def paragraphs(value):
    return list(value) if isinstance(value, list) else [value]


def outline_markdown(plan):
    """Format supplied editorial and article details without inventing content."""
    entries = {entry["id"]: entry for entry in plan["entries"]}
    lines = [f"# {plan['title']}：写作大纲", "", plan["description"], "",
             "本文件由 `notebook/learning-plan.json` 生成；修改计划源后运行 "
             "`python tools/build_notebook.py`，同步更新本大纲与网站导航图。", "",
             "## 定位与范围", ""]
    editorial = plan["editorial"]
    for key, value in editorial.items():
        if key in ("cadence", "sections", "materials", "writing", "cadence_notes"):
            continue
        lines += [f"### {EDITORIAL_TITLES.get(key, key)}", ""]
        for paragraph in paragraphs(value):
            lines += [paragraph, ""]
    for section in editorial.get("sections", []):
        lines += [f"### {section['title']}", ""]
        for paragraph in section["paragraphs"]:
            lines += [paragraph, ""]

    low, high = editorial["cadence"]
    cadence = str(low) if low == high else f"{low}–{high}"
    lines += ["## 写作节奏", "", f"每天计划推进 {cadence} 篇词条，逐篇完成后再进入下一篇。", ""]
    for key in ("writing", "cadence_notes"):
        if key in editorial:
            for paragraph in paragraphs(editorial[key]):
                lines += [paragraph, ""]
    lines += ["## 分阶段顺序", ""]
    sequence_positions = {entry_id: index + 1 for index, entry_id in enumerate(plan["sequence"])}
    for phase in plan["phases"]:
        lines += [f"### {phase['title']}", "", phase["goal"], "",
                  "| 顺序 | 编号 | 词条 |", "| --- | --- | --- |"]
        for entry_id in phase["entry_ids"]:
            entry = entries[entry_id]
            lines.append(f"| {sequence_positions[entry_id]} | {table_cell(entry_id)} | {table_cell(entry['title'])} |")
        lines.append("")
        if phase.get("transition"):
            lines += [f"衔接：{phase['transition']}", ""]

    lines += ["## 节点与篇章安排", ""]
    for node in plan["nodes"]:
        lines += [f"### {node['id']} · {node['title']}", "", node["depth"], "", "节点范围：", ""]
        lines += [f"- {topic}" for topic in node["topics"]]
        lines += ["", f"图表用途：{node['visual']}", "",
                  "| 编号 | 标题 | 解释任务 | 先修 |", "| --- | --- | --- | --- |"]
        node_entries = [entries[entry_id] for entry_id in plan["sequence"]
                        if entries[entry_id]["node"] == node["id"]]
        for entry in node_entries:
            prerequisites = "、".join(entry.get("prerequisites", [])) or "无"
            lines.append("| " + " | ".join(table_cell(value) for value in
                         (entry["id"], entry["title"], entry["goal"], prerequisites)) + " |")
        lines.append("")
        for entry in node_entries:
            lines += [f"#### {entry['id']} · {entry['title']}", "", entry["goal"], "", "讲解范围：", ""]
            lines += [f"- {item}" for item in entry["scope"]]
            lines += ["", f"实例安排：{entry['example']}", "", f"图表安排：{entry['visual']}", ""]
            # Extra article notes can be supplied without discarding their detail.
            for key, value in entry.items():
                if key not in {"id", "node", "title", "goal", "scope", "example", "visual", "prerequisites"}:
                    if isinstance(value, (str, list)):
                        lines += [f"{ENTRY_NOTE_TITLES.get(key, key)}：", ""]
                        for paragraph in paragraphs(value):
                            lines += [str(paragraph), ""]

    if "materials" in editorial:
        lines += ["## 资料采用原则", ""]
        for paragraph in paragraphs(editorial["materials"]):
            lines += [paragraph, ""]
    return "\n".join(lines).rstrip() + "\n"


def learning_plan_outputs(source_root, published_entries):
    path = Path(source_root) / "notebook/learning-plan.json"
    if not path.exists():
        return {}
    plan = validate_learning_plan(json.loads(path.read_text(encoding="utf-8-sig")))
    return {
        "data/notebook_map.json": json.dumps(compile_learning_map(plan, published_entries),
                                            ensure_ascii=False, indent=2) + "\n",
        "docs/investment-notebook-outline.md": outline_markdown(plan),
    }
