import re
import sys
from pathlib import Path

html = Path(sys.argv[1]).read_text(encoding="utf-8", errors="ignore")
for tag in re.findall(r"<meta[^>]+>", html):
    if "og:" in tag or "twitter:" in tag:
        print(tag[:300])
for tag in re.findall(r"<link[^>]+canonical[^>]+>", html):
    print(tag[:300])
