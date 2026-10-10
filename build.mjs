// Zero-dependency static site build. Run: node build.mjs  → output in dist/
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { site } from "./site.config.mjs";
import home from "./src/pages/home.mjs";
import products from "./src/pages/products.mjs";
import contact from "./src/pages/contact.mjs";
import insights, { insightPosts } from "./src/pages/insights.mjs";

const out = "dist";
const today = new Date().toISOString().slice(0, 10);
const pages = [home, ...products, ...contact, ...insights];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
if (existsSync("public")) cpSync("public", out, { recursive: true });

for (const p of pages) {
  const file = p.file ? join(out, p.file) : join(out, p.path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, p.render());
}

// sitemap.xml — every indexable page
const indexable = pages.filter((p) => !p.file && p.path !== "/thank-you/");
writeFileSync(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${p.lastmod || today}</lastmod></url>`).join("\n")}
</urlset>
`
);

// robots.txt — explicitly welcome search and AI crawlers
const bots = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot", "CCBot"];
writeFileSync(
  join(out, "robots.txt"),
  `${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}
User-agent: *
Allow: /
Disallow: /thank-you/

Sitemap: ${site.url}/sitemap.xml
`
);

// llms.txt — a plain-text map of the site for AI assistants
writeFileSync(
  join(out, "llms.txt"),
  `# ${site.legalName}

> ${site.name} (founded ${site.founded}, Foshan, China) designs and builds automated vertical storage and retrieval systems (AS/RS) for long and heavy materials: steel and aluminium bars, profiles, tubes, pipes and sheet metal, 3–12 m long and up to 6 t per storage position.

## Systems
- [Long material AS/RS (honeycomb)](${site.url}/products/long-material-asrs/): 3–12 m material, up to 6 t per position, 100–9,999 positions, cassette pull-out retrieval, stacker crane 120 m/min, about 90 s per retrieval; patented layout with machines on the ground floor and material stored above.
- [Sheet metal AS/RS (cantilever)](${site.url}/products/sheet-metal-asrs/): sheets 3–12 m long and 1–2 m wide, up to 6 t per position, 50–9,999 positions, telescopic fork or chain push-pull retrieval.
- [All systems](${site.url}/products/): including overhead crane storage and mini vertical storage for tools and dies.

## Guides
${insightPosts.map((p) => `- [${p.title}](${site.url}${p.path}): ${p.description}`).join("\n")}

## Contact
- [Request a layout and budget price](${site.url}/contact/)
- Email: ${site.contact.email}
`
);

// Cloudflare Pages: redirect old English URLs to the new pages (301)
writeFileSync(
  join(out, "_redirects"),
  `/en/ / 301
/en/index.html / 301
/en/pro/ /products/ 301
/en/pro1/ /products/long-material-asrs/ 301
/en/pro2/ /products/ 301
/en/pro3/ /products/ 301
/en/pro4/ /products/sheet-metal-asrs/ 301
/en/about/ / 301
/en/about/index.html / 301
/en/video/ / 301
/en/anli/ / 301
/en/custom/ / 301
/en/contact/ /contact/ 301
/en/* / 301
`
);

// Cloudflare Pages: caching and security headers
writeFileSync(
  join(out, "_headers"),
  `https://:project.pages.dev/*
  X-Robots-Tag: noindex
https://:version.:project.pages.dev/*
  X-Robots-Tag: noindex
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/styles.css
  Cache-Control: public, max-age=86400
/*.svg
  Cache-Control: public, max-age=604800
`
);

console.log(`Built ${pages.length} pages into ${out}/`);
