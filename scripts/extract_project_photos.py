"""Extract actual property photos (not floor plans) from Hx2 Company Profile PDF."""
from __future__ import annotations

from pathlib import Path

import pymupdf

PDF = Path(r"C:\Users\Chia Shen\Downloads\Hx2 Company Profile (2023).pdf")
OUT = Path(r"C:\Users\Chia Shen\Downloads\hx2ids-website\public\images\projects")

# Photo-gallery pages only — skip title/spread pages with floor plans.
PROJECT_PAGES: dict[str, list[int]] = {
    "aster-villa-simpang": [7],
    "aster-villa-corner": [9, 11],
    "desa-relau-ii": [14, 15],
    "balik-pulau-bungalow": [18, 19, 20, 21],
    "pine-residence": [24],
    "queens-waterfront-2": [26],
    "shorefront-residences": [28, 29, 30, 31],
    "copen-grand": [32],
    "zen-6": [34, 35],
    "20db-hearing-perai": [37],
    "20db-hearing-alor-setar": [38],
    "wurth-electronic": [39],
    "wurth-auditorium": [40],
    "face-story": [41],
    "ferringhi-bay-2": [43],
    "hair-artisanar": [44],
    "hair-story-butterworth": [45],
    "hair-story-gurney": [46],
    "hair-story-prima": [47],
    "hair-story-puchong": [48],
    "beauty-lot": [49],
    "pickleball-factory": [51],
    "smith-associates": [52],
}


def is_likely_floor_plan(width: int, height: int) -> bool:
    aspect = width / height
    # Ultra-wide banner strips and plan layouts.
    if aspect > 2.0:
        return True
    # Wide landscape CAD plans (e.g. 2099x1212, 2211x1475).
    if aspect > 1.55 and width >= 1500:
        return True
    # Large square plans (e.g. 1832x1832).
    if 0.9 <= aspect <= 1.1 and min(width, height) >= 1500:
        return True
    # Extra-wide title-page plan strips (short height).
    if width >= 2100 and aspect >= 1.25 and height < 1600:
        return True
    return False


def photo_score(width: int, height: int) -> float:
    if is_likely_floor_plan(width, height):
        return 0.0

    area = width * height
    aspect = width / height
    score = float(area)

    # Standard embedded photo sizes in the profile PDF.
    common = {
        (932, 700),
        (960, 1280),
        (800, 600),
        (1000, 700),
        (1008, 756),
        (1080, 1080),
        (1080, 810),
        (810, 1080),
        (999, 750),
        (1000, 750),
    }
    if (width, height) in common:
        score *= 4.0

    if 850 <= width <= 1100 and 600 <= height <= 850:
        score *= 3.0
    if 850 <= height <= 1500 and 600 <= width <= 1100 and aspect < 1.0:
        score *= 3.0

    # Prefer landscape/interior shots for card thumbnails.
    if 1.1 <= aspect <= 1.6:
        score *= 1.2

    return score


def best_image_from_pages(doc: pymupdf.Document, pages: list[int]) -> tuple[bytes, str, int, int, int]:
    best: tuple[float, bytes, str, int, int, int] | None = None

    for page_num in pages:
        page = doc[page_num - 1]
        for img in page.get_images(full=True):
            xref = img[0]
            base = doc.extract_image(xref)
            w, h = base["width"], base["height"]
            score = photo_score(w, h)
            if score <= 0:
                continue
            candidate = (score, base["image"], base["ext"], w, h, page_num)
            if best is None or candidate[0] > best[0]:
                best = candidate

    if best is None:
        raise RuntimeError(f"No suitable photo found on pages {pages}")

    _, image_bytes, ext, w, h, page_num = best
    return image_bytes, ext, w, h, page_num


def save_jpg(image_bytes: bytes, ext: str, dest: Path) -> None:
    if ext.lower() in {"jpg", "jpeg"}:
        dest.write_bytes(image_bytes)
        return

    # Convert PNG/other embedded formats via PyMuPDF.
    pix = pymupdf.Pixmap(image_bytes)
    if pix.alpha:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    pix.save(dest.as_posix(), jpg_quality=88)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(PDF)

    print(f"Extracting {len(PROJECT_PAGES)} project photos -> {OUT}\n")
    for project_id, pages in PROJECT_PAGES.items():
        image_bytes, ext, w, h, page_num = best_image_from_pages(doc, pages)
        dest = OUT / f"{project_id}.jpg"
        save_jpg(image_bytes, ext, dest)
        print(f"  {project_id}: page {page_num}, {w}x{h} -> {dest.name}")

    doc.close()
    print("\nDone.")


if __name__ == "__main__":
    main()
