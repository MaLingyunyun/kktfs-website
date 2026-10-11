// Zero-dependency static site build. Run: node build.mjs  → output in dist/
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { site } from "./site.config.mjs";
import home from "./src/pages/home.mjs";
import products from "./src/pages/products.mjs";
import contact from "./src/pages/contact.mjs";
import insights, { insightPosts } from "./src/pages/insights.mjs";
import { iconSprite } from "./src/icons.mjs";
import { blueprintRack } from "./src/blueprint.mjs";

const out = "dist";
const today = new Date().toISOString().slice(0, 10);
const pages = [home, ...products, ...contact, ...insights];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
if (existsSync("public")) cpSync("public", out, { recursive: true });
// Generated graphics: icon sprite and the blueprint background drawing
writeFileSync(join(out, "icons.svg"), iconSprite());
writeFileSync(join(out, "img", "blueprint-rack.svg"), blueprintRack());

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
const guides = insightPosts.length
  ? `\n## Guides\n${insightPosts.map((p) => `- [${p.title}](${site.url}${p.path}): ${p.description}`).join("\n")}\n`
  : "";
writeFileSync(
  join(out, "llms.txt"),
  `# ${site.name}

> ${site.name} (${site.legalName}, founded ${site.founded}, Foshan, China) builds shop-floor material-flow systems for long and heavy materials: automated vertical storage and retrieval systems (AS/RS), handling and automatic machine feeding for steel and non-ferrous bars, profiles, tubes, pipes and sheet metal. About 20 systems delivered in China, South Korea, Australia and Singapore. Certified to ISO 9001.

## Systems
- [Long material AS/RS (honeycomb)](${site.url}/products/long-material-asrs/): 3–12 m material, up to 6 t per position, 100–3,000 positions, cassette pull-out retrieval, stacker crane 120 m/min, about 90 s per retrieval. Each level is about 200 mm lower than in a fork-type AS/RS, so 5 honeycomb levels fit where a stacker-aisle store fits 4 (about 20% more storage).
- [Sheet metal AS/RS (bracket-arm)](${site.url}/products/sheet-metal-asrs/): sheets 3–8 m long and 1–2 m wide, up to 6 t per position, 50–3,000 positions, telescopic fork or chain push-pull retrieval.
- [Overhead-crane stacker AS/RS (cantilever)](${site.url}/products/overhead-crane-storage/): cantilever racks served by an automated overhead-crane stacker, material 2–20 m long, up to 20 t per position, 50–3,000 positions.
- [All systems](${site.url}/products/): including mini vertical storage for tools, dies and parts, 0.2–2 m, up to 2 t per position, 100–20,000 positions.

## How the system fits production
- Patented embedded design: saws and other production machines stand right beside the store, so storage and workshop share one area.
- Inbound platform with automatic weighing; QR code on every bundle; WMS and WCS developed by Kinkalteck, with API connection to ERP.
- Patented automatic picking and feeding to machines, first in first out, no material picker.
- Works as a buffer between processes such as heat treatment and cutting.

## Projects
- Singapore: honeycomb AS/RS with about 800 positions for a steel pipe and bar stockholder; pipes and bars about 7.2 m and 3 t per bundle; about 500 m², 11 m high; contract March 2026, completion planned October 2026.
- China: precision forging plants (600 and 300 positions), a precision steel tube maker (500 positions) and a precision valve maker (overhead-crane stacker AS/RS). Customer names are confidential.

## Milestones
- 2018: founded in Foshan, China.
- 2024: China's first export of a honeycomb AS/RS for heavy long material; invention patent for the embedded smart AS/RS.
- 2025: China's first export of an overhead-crane stacker AS/RS with cantilever racks.
${guides}
## Contact
- [Request a quote](${site.url}/contact/)
- Email: ${site.contact.email}
- Phone and WhatsApp: ${site.contact.phoneIntl}
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
${insightPosts.length ? "" : "/insights/ / 301\n/insights/* / 301\n"}`
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
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *
/img/*
  Cache-Control: public, max-age=604800
/video/*
  Cache-Control: public, max-age=604800
`
);

console.log(`Built ${pages.length} pages into ${out}/`);
