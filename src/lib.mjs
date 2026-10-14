import { site } from "../site.config.mjs";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

// Changes whenever styles.css changes, so browsers never use an outdated stylesheet
const CSS_V = createHash("md5").update(readFileSync(new URL("../public/styles.css", import.meta.url))).digest("hex").slice(0, 8);
const ICON_V = createHash("md5").update(readFileSync(new URL("./icons.mjs", import.meta.url))).digest("hex").slice(0, 8);

// Decorative line icon from /icons.svg (hidden from screen readers; the text next to it carries the meaning)
export const icon = (name, cls = "") =>
  `<svg class="icon${cls ? " " + cls : ""}" aria-hidden="true" focusable="false"><use href="/icons.svg?v=${ICON_V}#${name}"></use></svg>`;

// The four systems by material length. One source for the home-page ruler and the overview page.
export const SYSTEMS = [
  { name: "Mini vertical storage", href: "/products/", icon: "tooling", from: 0.2, to: 2, len: "0.2–2 m", load: "up to 2 t", positions: "100–20,000 positions", stores: "Tools, dies and parts" },
  { name: "Sheet metal AS/RS", href: "/products/sheet-metal-asrs/", icon: "sheet", from: 3, to: 8, len: "3–8 m", load: "up to 6 t", positions: "50–3,000 positions", stores: "Sheets and plates, 1–2 m wide" },
  { name: "Honeycomb long-material AS/RS", href: "/products/long-material-asrs/", icon: "bar-round", from: 3, to: 12, len: "3–12 m", load: "up to 6 t", positions: "100–3,000 positions", stores: "Bars, profiles, tubes and pipes" },
  { name: "Overhead-crane stacker AS/RS", href: "/products/overhead-crane-storage/", icon: "long-load", from: 2, to: 20, len: "2–20 m", load: "up to 20 t", positions: "50–3,000 positions", stores: "Extra-long and heavy bars, tubes and profiles" },
];

// WeChat QR card (QR only: no name or photo). Text carries the ID for visitors who cannot scan.
export const wechatCard = ({ size = 132, cls = "" } = {}) =>
  site.contact.wechat
    ? `<figure class="wechat-card${cls ? " " + cls : ""}">
  <img src="/img/wechat-qr.png" width="${size}" height="${size}" alt="WeChat QR code to add Kinkalteck sales, WeChat ID ${esc(site.contact.wechat)}" loading="lazy" decoding="async">
  <figcaption><strong>Scan to add us on WeChat</strong><span>WeChat ID: ${esc(site.contact.wechat)}</span><span>Messages go straight to our management.</span></figcaption>
</figure>`
    : "";

// Header band for inner pages: breadcrumb, title, lede and up to three key figures (all real text).
export const pageHead = ({ crumbs = [], title, lede = "", iconName = "", figures = [] }) => `
<header class="page-head">
  <div class="wrap">
    ${crumbs.length ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([label, href], i) => (i < crumbs.length - 1 ? `<a href="${href}">${esc(label)}</a>` : `<span>${esc(label)}</span>`)).join(" / ")}</nav>` : ""}
    <div class="page-head-grid${figures.length ? "" : " no-figures"}">
      <div>
        ${iconName ? icon(iconName, "page-head-icon") : ""}
        <h1>${esc(title)}</h1>
        ${lede ? `<p class="lede">${esc(lede)}</p>` : ""}
      </div>
      ${figures.length ? `<dl class="key-figures">${figures.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
    </div>
  </div>
</header>`;

// Material-length ruler: each system drawn as a bar on a 0–20 m scale. All figures are real text.
export const lengthRuler = ({ title = "Choose by material length", headingLevel = 2 } = {}) => {
  const ticks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  return `
<section class="ruler" aria-labelledby="ruler-h">
  <div class="ruler-head">
    <h${headingLevel} id="ruler-h">${esc(title)}</h${headingLevel}>
    <p>Four systems cover material from 0.2 m to 20 m long. Each one is listed with its load per storage position and number of positions.</p>
  </div>
  <div class="ruler-body">
    <div class="ruler-scale" aria-hidden="true">${ticks.map((t) => `<span style="--at:${t}" data-t="${t === 20 ? "20 m" : t}"></span>`).join("")}</div>
    <ul class="ruler-rows">
      ${SYSTEMS.map(
        (sy, i) => `<li style="--from:${sy.from};--to:${sy.to};--i:${i}">
        <a class="ruler-name" href="${sy.href}">${icon(sy.icon)}<span>${esc(sy.name)}</span></a>
        <span class="ruler-track"><span class="ruler-bar${sy.to - sy.from >= 8 ? " is-long" : ""}"><span class="ruler-len">${esc(sy.len)}</span></span></span>
        <span class="ruler-data"><span>${esc(sy.load[0].toUpperCase() + sy.load.slice(1))} per position,</span> <span>${esc(sy.positions)}</span></span>
      </li>`
      ).join("")}
    </ul>
  </div>
</section>`;
};

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const abs = (path) => site.url + path;

// ---------- Minimal Markdown (headings, paragraphs, lists, tables, bold, italic, links, code) ----------
const inline = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      const ext = /^https?:/.test(u) && !u.startsWith(site.url);
      return `<a href="${u}"${ext ? ' rel="noopener"' : ""}>${t}</a>`;
    });

export function markdown(src) {
  const lines = src.replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if (h) {
      const lvl = h[1].length;
      const id = h[2].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      out.push(`<h${lvl} id="${id}">${inline(h[2])}</h${lvl}>`);
      i++; continue;
    }
    if (/^\|.*\|\s*$/.test(line) && /^\|\s*:?-{3,}/.test(lines[i + 1] || "")) {
      const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) rows.push(cells(lines[i++]));
      out.push(
        `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th scope="col">${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`
      );
      continue;
    }
    if (/^(\s*)([-*]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items = [];
      while (i < lines.length && /^(\s*)([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*)([-*]|\d+\.)\s+/, ""));
        i++;
      }
      const tag = ordered ? "ol" : "ul";
      out.push(`<${tag}>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</${tag}>`);
      continue;
    }
    if (line.startsWith("> ")) {
      const q = [];
      while (i < lines.length && lines[i].startsWith("> ")) q.push(lines[i++].slice(2));
      out.push(`<blockquote><p>${inline(q.join(" "))}</p></blockquote>`);
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|\||\s*[-*]\s|\s*\d+\.\s|> )/.test(lines[i])) para.push(lines[i++]);
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return out.join("\n");
}

// Front matter: lines of "key: value" between --- markers
export function parseFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text };
  const data = {};
  for (const l of m[1].split("\n")) {
    const kv = l.match(/^(\w+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^"|"$/g, "");
  }
  return { data, body: m[2] };
}

// ---------- Structured data ----------
export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: abs("/img/logo-mark.png"),
  foundingDate: site.founded,
  description:
    "Kinkalteck designs and builds shop-floor material-flow systems for long and heavy materials: automated storage and retrieval systems (AS/RS) for steel bars, profiles, tubes, pipes and sheet metal, with automatic weighing, conveying and machine feeding.",
  email: site.contact.email,
  telephone: site.contact.phoneIntl || undefined,
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  areaServed: ["CN", "KR", "AU", "SG", "Southeast Asia"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  sameAs: Object.values(site.social).filter(Boolean),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export const productSchema = ({ name, description, path, specs }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  url: abs(path),
  brand: { "@type": "Brand", name: site.name },
  manufacturer: { "@id": abs("/#organization") },
  category: "Automated storage and retrieval system (AS/RS)",
  additionalProperty: specs.map(([k, v]) => ({ "@type": "PropertyValue", name: k, value: v })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

// ---------- Shared pieces ----------
export const specTable = (rows, caption) => `
<div class="table-wrap"><table class="spec">
${caption ? `<caption>${esc(caption)}</caption>` : ""}
<tbody>${rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody>
</table></div>`;

export const faqBlock = (faqs) => `
<section class="faq" aria-labelledby="faq-h">
  <h2 id="faq-h">Questions buyers ask</h2>
  ${faqs.map(([q, a]) => `<details><summary><span>${esc(q)}</span>${icon("plus", "faq-icon")}</summary><p>${esc(a)}</p></details>`).join("")}
</section>`;

export const ctaBand = (title, text) => `
<section class="cta-band blueprint">
  <div class="wrap cta-inner">
    <div>
      <h2>${esc(title)}</h2>
      <p>${esc(text)}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-primary" href="/contact/">Request a quote</a>
      ${site.contact.whatsapp ? `<a class="btn btn-ghost" href="https://wa.me/${site.contact.whatsapp}">Chat on WhatsApp</a>` : ""}
    </div>
  </div>
</section>`;

// Responsive photo: WebP with JPEG fallback. Sizes are the source pixel sizes.
const IMG = {
  "hero-honeycomb": [1200, 675],
  "aisle-grey": [1200, 675],
  "rack-blue-perspective": [1200, 675],
  "aisle-steel": [1200, 675],
  "rack-wall-orange": [1200, 675],
  "crane-store-long": [900, 560],
  "crane-store-render": [900, 560],
  "sheet-loading-stations": [900, 560],
  "crane-honeycomb": [500, 375],
  "crane-store-tall": [500, 375],
  "rack-wall-blue": [500, 375],
  "loading-platform-tubes": [500, 281],
  "crane-store-install": [500, 375],
  "flow-before": [1600, 1003],
  "flow-after": [1600, 741],
  "crane-store-portrait": [780, 1172],
  "sheet-metal-asrs": [579, 501],
  "sheet-metal-install": [579, 458],
  "sheet-metal-station": [583, 481],
  "hc-load-station": [1280, 720],
  "hc-robot-wide": [1280, 720],
  "hc-robot-front": [1280, 720],
  "hc-robot-lift": [1280, 720],
  "hc-saws-beside": [1280, 720],
  "hc-dashboard": [1110, 640],
  "sim-before": [1200, 703],
  "sim-after": [1200, 703],
};
export const photo = (name, alt, { eager = false, cls = "" } = {}) => {
  const [w, h] = IMG[name];
  return `<picture${cls ? ` class="${cls}"` : ""}><source type="image/webp" srcset="/img/${name}.webp"><img src="/img/${name}.jpg" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;
};

// Any site video: loaded only when the visitor presses play (preload="none"), muted, with a poster
export const siteVideo = ({ src, poster, caption, width = 1280, height = 720 }) => `
<figure class="video">
  <video controls muted playsinline preload="none" poster="${poster}" width="${width}" height="${height}">
    <source src="${src}" type="video/mp4">
  </video>
  <figcaption>${esc(caption)}</figcaption>
</figure>`;

// The 3D animation, loaded only when the visitor presses play
export const howItWorksVideo = (caption) => `
<figure class="video">
  <video controls muted playsinline preload="none" poster="/video/how-it-works-poster.jpg" width="960" height="720">
    <source src="/video/how-it-works.mp4" type="video/mp4">
  </video>
  <figcaption>${esc(caption)}</figcaption>
</figure>`;

// ---------- Page shell ----------
export function layout({ title, description, path, body, schema = [], ogType = "website", noindex = false }) {
  const canonical = abs(path);
  const nav = [
    ["/products/long-material-asrs/", "Long material"],
    ["/products/sheet-metal-asrs/", "Sheet metal"],
    ["/products/", "All systems"],
    ["/contact/", "Contact"],
  ];
  const navHtml = nav
    .map(([href, label]) => `<a href="${href}"${path === href || (href !== "/products/" && path.startsWith(href)) ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
  const ld = [orgSchema(), ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  const c = site.contact;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${canonical}">
<link rel="alternate" hreflang="x-default" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ""}
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${site.name}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css?v=${CSS_V}">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="utility">
  <div class="wrap utility-inner">
    <span>Material-flow systems for long and heavy materials, made in Foshan, China</span>
    <span class="utility-links">
      <a href="/#singapore">Singapore project</a>
      <a href="mailto:${site.contact.email}">${site.contact.email}</a>
    </span>
  </div>
</div>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="Kinkalteck home">
      <img src="/img/logo-mark.png" alt="Kinkalteck" width="110" height="42">
    </a>
    <nav class="main-nav" aria-label="Main">${navHtml}</nav>
    <a class="btn btn-primary btn-sm header-cta" href="/contact/">Request a quote</a>
    <details class="mobile-menu">
      <summary aria-label="Open menu">Menu</summary>
      <nav aria-label="Mobile">${navHtml}<a class="btn btn-primary" href="/contact/">Request a quote</a></nav>
    </details>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer blueprint">
  <div class="wrap footer-grid">
    <div>
      <img class="footer-logo" src="/img/logo-mark.png" alt="Kinkalteck" width="96" height="37">
      <p class="footer-brand">${esc(site.shortName)}</p>
      <p>Shop-floor material-flow systems for long and heavy materials: automated storage, handling and machine feeding, designed and built in Foshan, China.</p>
      <p class="footer-addr">${icon("pin")}<span>${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.region)}, ${esc(site.address.countryName)}</span></p>
    </div>
    <div>
      <p class="footer-h">Systems</p>
      <ul>
        <li><a href="/products/long-material-asrs/">Long material AS/RS</a></li>
        <li><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS</a></li>
        <li><a href="/products/overhead-crane-storage/">Overhead-crane stacker AS/RS</a></li>
        <li><a href="/products/">All systems</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-h">Contact</p>
      <ul>
        <li>${icon("mail")}<a href="mailto:${c.email}">${c.email}</a></li>
        ${c.phoneIntl ? `<li>${icon("phone")}<a href="tel:${c.phoneIntl.replace(/\s/g, "")}">${esc(c.phoneIntl)}</a></li>` : ""}
        ${c.whatsapp ? `<li>${icon("chat")}<a href="https://wa.me/${c.whatsapp}">WhatsApp</a></li>` : ""}
        ${c.wechat ? `<li>${icon("chat")}<span>WeChat: ${esc(c.wechat)}</span></li>` : ""}
        <li><a href="${site.sisterSite.url}" rel="noopener">${esc(site.sisterSite.name)}</a></li>
      </ul>
      ${c.wechat ? `<img class="footer-qr" src="/img/wechat-qr.png" width="96" height="96" alt="WeChat QR code, WeChat ID ${esc(c.wechat)}" loading="lazy" decoding="async">` : ""}
    </div>
  </div>
  <div class="wrap footer-base">
    <p>© ${new Date().getFullYear()} ${esc(site.legalName)}</p>
  </div>
</footer>
${c.whatsapp ? `<a class="wa-float" href="https://wa.me/${c.whatsapp}" aria-label="Chat with us on WhatsApp">${icon("chat")}<span>WhatsApp</span></a>` : ""}
</body>
</html>`;
}
