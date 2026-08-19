from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "images" / "famosos"
MAP = {
    "tcar.png": "tcar.webp",
    "ronaldinho.png": "ronaldinho.webp",
    "yudi.png": "yudi.webp",
    "vitube.png": "viih-tube.webp",
}


def compress(src_name: str, dest_name: str, max_w: int = 900) -> None:
    src = ROOT / src_name
    im = Image.open(src).convert("RGB")
    if im.width > max_w:
        height = int(im.height * max_w / im.width)
        im = im.resize((max_w, height), Image.Resampling.LANCZOS)
    dest = ROOT / dest_name
    im.save(dest, "WEBP", quality=78, method=6)
    print(f"{src_name} -> {dest_name} {im.size} {dest.stat().st_size/1024:.1f}KB")


if __name__ == "__main__":
    for src_name, dest_name in MAP.items():
        compress(src_name, dest_name)
