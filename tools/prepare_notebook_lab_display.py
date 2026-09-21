"""Attach the shared, presentation-only numeric formatter to actual lab pages."""
from pathlib import Path

TAG = '<script defer src="/js/notebook-number-format.js" data-notebook-numbers></script>'


def prepare(root):
    from prepare_notebook_research_branches import prepare as prepare_branches
    prepare_branches(root)
    changed = []
    for path in sorted((root / 'static/notebook/labs').rglob('*.html')):
        text = path.read_text(encoding='utf-8')
        if 'data-notebook-numbers' in text or '</head>' not in text:
            continue
        path.write_text(text.replace('</head>', TAG + '\n</head>', 1), encoding='utf-8')
        changed.append(path)
    return changed


if __name__ == '__main__':
    changed = prepare(Path(__file__).resolve().parents[1])
    print(f'Added shared display formatting to {len(changed)} lab pages.')
