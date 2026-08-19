const https = require("https");
const fs = require("fs");
const path = require("path");

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            Accept: "text/html",
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return fetch(res.headers.location).then(resolve).catch(reject);
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        },
      )
      .on("error", reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            file.close();
            fs.unlinkSync(dest);
            return download(res.headers.location, dest).then(resolve).catch(reject);
          }
          res.pipe(file);
          file.on("finish", () => file.close(() => resolve(dest)));
        },
      )
      .on("error", reject);
  });
}

(async () => {
  const html = await fetch("https://www.apple.com/iphone-17-pro/");
  const urls = [...html.matchAll(/https:\/\/www\.apple\.com\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map(
    (m) => m[0],
  );
  const unique = [...new Set(urls)];
  console.log("APPLE COUNT", unique.length);
  unique.slice(0, 40).forEach((u) => console.log(u));

  const html2 = await fetch("https://www.samsung.com/us/smartphones/galaxy-s26-ultra/");
  const urls2 = [
    ...html2.matchAll(
      /https:\/\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi,
    ),
  ].map((m) => m[0]);
  const unique2 = [...new Set(urls2)].filter((u) =>
    /s26|galaxy|ultra|hero|kv/i.test(u),
  );
  console.log("SAMSUNG COUNT", unique2.length);
  unique2.slice(0, 40).forEach((u) => console.log(u));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
