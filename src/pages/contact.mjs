import { layout, esc, breadcrumbSchema, icon } from "../lib.mjs";
import { site } from "../../site.config.mjs";

const c = site.contact;

const contact = {
  path: "/contact/",
  render: () =>
    layout({
      path: "/contact/",
      title: "Contact Kinkalteck – Get an AS/RS Quote",
      description:
        "Send your materials and floor plan for a quote on automated long-material storage. Email, WhatsApp or call our team.",
      schema: [breadcrumbSchema([["Home", "/"], ["Contact", "/contact/"]])],
      body: `
<div class="wrap page contact-grid">
  <div>
    <h1>Request a quote</h1>
    <p class="lede">Tell us what you store. Our team replies within one working day to discuss your materials, building and the right system.</p>
    <form class="enquiry" id="form" method="post" action="/api/enquiry">
      <label>What do you need?
        <select name="topic" id="topic">
          <option value="quote">A quote</option>
          <option value="simulation">A 3D simulation of my plant</option>
          <option value="visit">A visit to a running system</option>
          <option value="other">Something else</option>
        </select>
      </label>
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
      <button class="btn btn-primary" type="submit">Send my request</button>
      <p class="fine">We use your details only to reply to this request.</p>
    </form>
    <script>
      (function () {
        var t = new URLSearchParams(location.search).get("topic"), s = document.getElementById("topic");
        if (t && s && s.querySelector('option[value="' + t + '"]')) s.value = t;
      })();
    </script>
  </div>
  <aside class="contact-side">
    <h2>Other ways to reach us</h2>
    <ul>
      <li>${icon("mail")}<span>Email: <a href="mailto:${c.email}">${c.email}</a></span></li>
      ${c.whatsapp ? `<li>${icon("chat")}<span>WhatsApp: <a href="https://wa.me/${c.whatsapp}">Start a chat</a></span></li>` : ""}
      ${c.zalo ? `<li>${icon("chat")}<span>Zalo: ${esc(c.zalo)}</span></li>` : ""}
      ${c.line ? `<li>${icon("chat")}<span>LINE: ${esc(c.line)}</span></li>` : ""}
      ${c.wechat ? `<li>${icon("chat")}<span>WeChat: ${esc(c.wechat)}</span></li>` : ""}
      ${c.phoneIntl ? `<li>${icon("phone")}<span>Phone: <a href="tel:${c.phoneIntl.replace(/\s/g, "")}">${esc(c.phoneIntl)}</a></span></li>` : ""}
    </ul>
    <h2>Factory</h2>
    <p class="factory">${esc(site.legalName)}<br>${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.region)}, ${esc(site.address.countryName)}</p>
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
  <p class="lede">A sales engineer will reply within one working day. If you have a floor plan or material list, email it to <a href="mailto:${c.email}">${c.email}</a>.</p>
  <p><a class="text-link" href="/products/">Back to our systems</a></p>
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
