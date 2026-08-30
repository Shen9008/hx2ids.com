"""Inspect PDF pages and images for Hx2 portfolio extraction."""
import pymupdf
from pathlib import Path

PDF = Path(r"C:\Users\Chia Shen\Downloads\Hx2 Company Profile (2023).pdf")
doc = pymupdf.open(PDF)

for i in range(len(doc)):
    page = doc[i]
    text = page.get_text().strip().replace("\n", " ")[:80]
    imgs = page.get_images(full=True)
    dims = []
    for img in imgs:
        base = doc.extract_image(img[0])
        dims.append(f"{base['width']}x{base['height']}")
    print(f"p{i+1:02d} imgs={len(imgs)} {dims} | {text}")
