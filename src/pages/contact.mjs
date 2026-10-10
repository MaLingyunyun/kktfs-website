import { layout, esc, breadcrumbSchema } from "../lib.mjs";
import { site } from "../../site.config.mjs";

const c = site.contact;

const contact = {
  path: "/contact/",
  render: () =>
    layout({
      path: "/contact/",
      title: "Contact Kinkalteck – Get an AS/RS Quote",
      description:
        "Send your material sizes and floor plan to get a budget price and storage layout. Email, WhatsApp or call our international sales team.",
      schema: [breadcrumbSchema([["Home", "/"], ["Contact", "/contact/"]])],
      body: `
<div class="wrap page contact-grid">
  <div>
    <h1>Get a budget price and layout</h1>
    <p class="lede">Tell us what you store. A sales engineer replies within one working day with a storage layout and a budget price.</p>
    <form class="enquiry" method="post" action="/api/enquiry">
      <div class="row2">
        <label>Name<input name="name" autocomplete="name" required></label>
        <label>Company<input name="company" autocomplete="organization" required></label>
      </div>
      <div class="row2">
        <label>Email<input type="email" name="email" autocomplete="email" required></label>
        <label>WhatsApp or phone <span class="opt">(optional)</span><input name="phone" autocomplete="tel"></label>
      </div>
      <div class="row2">
        <label>Country<input name="country" autocomplete="country-name" required></label>
        <label>Material
          <select name="material">
            <option>Bars</option><option>Profiles</option><option>Tubes and pipes</option><option>Sheets and plates</option><option>Tools and dies</option><option>Other</option>
          </select>
        </label>
      </div>
      <div class="row2">
        <label>Longest length (m) <span class="opt">(optional)</span><input name="length" inputmode="decimal"></label>
        <label>Number of bundles or pallets <span class="opt">(optional)</span><input name="quantity" inputmode="numeric"></label>
      </div>
      <label>Message <span class="opt">(optional)</span><textarea name="message" rows="4" placeholder="Building size, machines to feed, timeline"></textarea></label>
      <input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn btn-primary" type="submit">Request my layout and price</button>
      <p class="fine">We use your details only to reply to this request.</p>
    </form>
  </div>
  <aside class="contact-side">
    <h2>Other ways to reach us</h2>
    <ul>
      <li>Email: <a href="mailto:${c.email}">${c.email}</a></li>
      ${c.whatsapp ? `<li>WhatsApp: <a href="https://wa.me/${c.whatsapp}">Start a chat</a></li>` : ""}
      ${c.zalo ? `<li>Zalo: ${esc(c.zalo)}</li>` : ""}
      ${c.line ? `<li>LINE: ${esc(c.line)}</li>` : ""}
      ${c.phoneIntl ? `<li>Phone: <a href="tel:${c.phoneIntl.replace(/\s/g, "")}">${esc(c.phoneIntl)}</a></li>` : ""}
    </ul>
    <h2>Factory</h2>
    <p>${esc(site.legalName)}<br>${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.region)}, ${esc(site.address.countryName)}</p>
  </aside>
</div>
`,
    }),
};

const thanks = {
  path: "/thank-you/",
  render: () =>
    layout({
      path: "/thank-you/",
      noindex: true,
      title: "Request received | Kinkalteck",
      description: "Your request has been received.",
      body: `
<div class="wrap narrow page">
  <h1>Request received</h1>
  <p class="lede">A sales engineer will reply within one working day. If you have a floor plan or material list, email it to <a href="mailto:${c.email}">${c.email}</a> so we can start on your layout.</p>
  <p><a class="text-link" href="/insights/">Read our storage planning guides</a></p>
</div>`,
    }),
};

const notFound = {
  path: "/404.html",
  file: "404.html",
  render: () =>
    layout({
      path: "/404.html",
      noindex: true,
      title: "Page not found | Kinkalteck",
      description: "This page does not exist.",
      body: `
<div class="wrap narrow page">
  <h1>This page doesn't exist</h1>
  <p class="lede">It may have moved when we rebuilt the site. Start from the <a href="/products/">systems overview</a> or <a href="/contact/">contact us</a>.</p>
</div>`,
    }),
};

export default [contact, thanks, notFound];
