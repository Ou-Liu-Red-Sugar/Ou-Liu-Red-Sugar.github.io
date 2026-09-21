"""Render the shared notation source for the website and Agent packets."""
import json


def load_notation(root):
    return json.loads((root / "notebook/notation.json").read_text(encoding="utf-8"))


def notation_markdown(notation, lang):
    text = notation["text"][lang]
    lines = [text["intro"]]
    for group in notation["groups"]:
        lines += ["", "## " + group["title"][lang], "",
                  "| " + " | ".join(text["columns"]) + " |", "|---|---|---|"]
        for row in group["rows"]:
            lines.append("| " + " | ".join([row["symbol"], row[lang][0], row[lang][1]]) + " |")
    lines += ["", text["precision"], "", text["local_symbols"]]
    return "\n".join(lines) + "\n"


def notation_instruction(notation, lang):
    return notation["text"][lang]["instruction"]
