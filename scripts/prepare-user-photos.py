from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "usar essas"
OUT = ROOT / "public" / "images"
MARKER = (1, 2, 3)


def knockout_white(src: Path, dest: Path, thresh: int = 30) -> None:
    original = Image.open(src).convert("RGBA")
    fill = original.convert("RGB")
    width, height = fill.size
    seeds = [
        (0, 0),
        (width - 1, 0),
        (0, height - 1),
        (width - 1, height - 1),
        (width // 2, 0),
        (width // 2, height - 1),
        (0, height // 2),
        (width - 1, height // 2),
    ]
    for seed in seeds:
        ImageDraw.floodfill(fill, seed, MARKER, thresh=thresh)
    rgba = np.array(original)
    marked = np.array(fill)
    mask = (
        (marked[:, :, 0] == MARKER[0])
        & (marked[:, :, 1] == MARKER[1])
        & (marked[:, :, 2] == MARKER[2])
    )
    rgba[mask, 3] = 0
    Image.fromarray(rgba).save(dest, optimize=True)
    print(f"knockout -> {dest.name}")


def copy_png(src: Path, dest: Path) -> None:
    Image.open(src).convert("RGBA").save(dest, optimize=True)
    print(f"copy -> {dest.name}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    copy_png(SRC / "17promax.png", OUT / "iphone-17-pro-max.png")
    knockout_white(SRC / "ipad.png", OUT / "ipad.png")
    knockout_white(SRC / "macbook.jpg", OUT / "macbook.png")
    knockout_white(SRC / "ps5.jpg", OUT / "ps5.png")
    knockout_white(SRC / "iphone-15-pro-branco-1.jpg", OUT / "iphone-15-pro.png")


if __name__ == "__main__":
    main()
