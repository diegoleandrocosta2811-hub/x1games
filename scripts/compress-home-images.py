from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "images"

TARGETS = [
    ("iphone-17-pro-max.png", 900),
    ("ipad.png", 800),
    ("macbook.png", 1000),
    ("ps5.png", 1000),
    ("iphone-15-pro.png", 900),
    ("smartphones.jpg", 1100),
    ("tv.jpg", 1100),
]


def compress(name: str, max_w: int) -> None:
    path = ROOT / name
    im = Image.open(path)
    if im.width > max_w:
        height = int(im.height * max_w / im.width)
        im = im.resize((max_w, height), Image.Resampling.LANCZOS)
    dest = path.with_suffix(".webp")
    save = im.convert("RGBA") if "A" in im.getbands() else im.convert("RGB")
    save.save(dest, "WEBP", quality=78, method=6)
    print(f"{name} -> {dest.name} {save.size} {dest.stat().st_size/1024:.1f}KB")


if __name__ == "__main__":
    for name, max_w in TARGETS:
        compress(name, max_w)
