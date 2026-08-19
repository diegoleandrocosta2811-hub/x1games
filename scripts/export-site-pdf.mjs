import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "cliente");
const OUT_FILE = path.join(OUT_DIR, "X1-Games-Eletronicos-preview.pdf");
const CHROME =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.SITE_URL || "http://localhost:3000";

const ROUTES = [
  "/",
  "/games",
  "/informatica",
  "/seminovos",
  "/acessorios",
  "/troca",
  "/lojas",
  "/sobre",
  "/contato",
  "/sorocaba",
  "/tatui",
];

const PRINT_CSS = `
  header { position: relative !important; }
  a[aria-label="Falar no WhatsApp"] { display: none !important; }
  .reveal-on-view, .hero-anim, .hero-phone, .hero-glow {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    animation: none !important;
  }
`;

async function capturePdf(page, route) {
  const url = `${BASE}${route === "/" ? "/" : route}`;
  await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
  await page.addStyleTag({ content: PRINT_CSS });
  await page.evaluate(async () => {
    document
      .querySelectorAll(".reveal-on-view, .hero-anim, .hero-phone")
      .forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.animation = "none";
      });
    await Promise.all(
      [...document.images].map((img) =>
        img.complete
          ? null
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            }),
      ),
    );
  });
  await new Promise((resolve) => setTimeout(resolve, 600));

  const height = await page.evaluate(() =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      900,
    ),
  );

  return page.pdf({
    printBackground: true,
    width: "1440px",
    height: `${Math.min(height + 40, 18000)}px`,
    margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--hide-scrollbars", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  const merged = await PDFDocument.create();

  for (const route of ROUTES) {
    process.stdout.write(`Capturando ${route}...\n`);
    const bytes = await capturePdf(page, route);
    const part = await PDFDocument.load(bytes);
    const copied = await merged.copyPages(part, part.getPageIndices());
    copied.forEach((p) => merged.addPage(p));
  }

  await browser.close();
  const output = await merged.save();
  await writeFile(OUT_FILE, output);
  console.log(`PDF salvo em: ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
