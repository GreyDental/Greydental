#!/usr/bin/env python3
"""Remove the empty paragraph Word leaves after an updated TOC field.

Word puts the field-end marker in its own paragraph. When the table of
contents fills a page, that paragraph starts a blank page before the body.
This script moves the marker into the previous TOC entry and deletes the
now-empty paragraph.
"""

from pathlib import Path

from docx import Document

DOCX = (
    Path(__file__).resolve().parent.parent
    / "docs"
    / "Grey_Dental_Technical_Documentation.docx"
)


def compact(path: Path = DOCX) -> None:
    document = Document(path)
    paragraphs = document.paragraphs

    body_start = next(
        (
            index
            for index, paragraph in enumerate(paragraphs)
            if paragraph.style.name == "Heading 1"
        ),
        None,
    )
    if body_start is None:
        return

    index = body_start - 1
    previous = paragraphs[index]
    if previous.text.strip() or 'w:fldCharType="end"' not in previous._p.xml:
        return

    target = paragraphs[index - 1]._p
    for child in list(previous._p):
        target.append(child)
    previous._p.getparent().remove(previous._p)

    document.save(path)
    print(f"Removed the empty TOC field paragraph in {path}")


if __name__ == "__main__":
    compact()
