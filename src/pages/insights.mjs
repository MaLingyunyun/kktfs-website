import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { layout, markdown, parseFrontMatter, esc, abs, breadcrumbSchema, ctaBand } from "../lib.mjs";

const dir = new URL("../../content/insights/", import.meta.url).pathname;

const posts = (existsSync(dir) ? readdirSync(dir) : [])
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data, body } = parseFrontMatter(readFileSync(join(dir, f), "utf8"));
    const slug = f.replace(/\.md$/, "");
    return { ...data, slug, path: `/insights/${slug}/`, html: markdown(body) };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const fmtDate = (d) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const index = {
  path: "/insights/",
  render: () =>
    layout({
      path: "/insights/",
      title: "Storage Planning Guides for Metal Processors | Kinkalteck",
      description:
        "Industry news and practical guides on automated storage and material flow for bars, profiles, tubes and sheet metal.",
      schema: [breadcrumbSchema([["Home", "/"], ["Guides", "/insights/"]])],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Guides</span></nav>
  <h1>Storage planning guides</h1>
  <p class="lede">What our engineers check when they plan automated storage for long and heavy materials.</p>
  <ul class="post-list">
    ${posts
      .map(
        (p) => `<li><a href="${p.path}"><span class="post-title">${esc(p.title)}</span></a><p>${esc(p.description)}</p><time datetime="${p.date}">${fmtDate(p.date)}</time></li>`
      )
      .join("")}
  </ul>
</div>`,
    }),
};

const articles = posts.map((p) => ({
  path: p.path,
  lastmod: p.updated || p.date,
  render: () =>
    layout({
      path: p.path,
      title: `${p.title} | Kinkalteck`,
      description: p.description,
      ogType: "article",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.updated || p.date,
          author: { "@type": "Organization", name: p.author || "Kinkalteck" },
          publisher: { "@id": abs("/#organization") },
          mainEntityOfPage: abs(p.path),
        },
        breadcrumbSchema([["Home", "/"], ["Guides", "/insights/"], [p.title, p.path]]),
      ],
      body: `
<article class="wrap narrow page prose">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/insights/">Guides</a></nav>
  <h1>${esc(p.title)}</h1>
  <p class="byline">${esc(p.author || "Kinkalteck")}. Published <time datetime="${p.date}">${fmtDate(p.date)}</time>${
        p.updated && p.updated !== p.date ? `, updated <time datetime="${p.updated}">${fmtDate(p.updated)}</time>` : ""
      }.</p>
  ${p.html}
</article>
${ctaBand("Tell us what you store", "Send your materials and floor plan. Our team replies within one working day.")}
`,
    }),
}));

export const insightPosts = posts;
// The index page is only published once there is at least one post.
export default posts.length ? [index, ...articles] : [];
