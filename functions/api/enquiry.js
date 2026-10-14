// Cloudflare Pages Function: receives the enquiry form and emails it to sales.
// Set these in Cloudflare Pages → Settings → Environment variables:
//   RESEND_API_KEY  – API key from resend.com (free tier is enough to start)
//   ENQUIRY_TO      – where enquiries go, e.g. sales@kinkalteck.com
//   ENQUIRY_FROM    – a sender on a domain verified in Resend, e.g. website@kktfs.com
//   WEBHOOK_URL     – optional: also POST each enquiry as JSON (CRM, Google Sheet, etc.)

const FIELDS = ["topic", "name", "company", "email", "phone", "country", "material", "length", "quantity", "message"];

export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  if (form.get("website")) return Response.redirect(new URL("/thank-you/", request.url), 303); // spam trap

  const data = {};
  for (const f of FIELDS) data[f] = String(form.get(f) || "").slice(0, 2000).trim();
  if (!data.name || !data.email || !data.company || !data.country) {
    return new Response("Please fill in name, company, email and country.", { status: 400 });
  }
  data.page = request.headers.get("referer") || "";
  data.visitorCountry = request.cf?.country || "";
  data.receivedAt = new Date().toISOString();

  const text = FIELDS.concat(["page", "visitorCountry", "receivedAt"])
    .map((k) => `${k}: ${data[k] || "-"}`)
    .join("\n");

  const jobs = [];
  if (env.RESEND_API_KEY && env.ENQUIRY_TO && env.ENQUIRY_FROM) {
    jobs.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env.ENQUIRY_FROM,
          to: env.ENQUIRY_TO.split(","),
          reply_to: data.email,
          subject: `Website enquiry: ${data.company} (${data.country}) – ${data.material}`,
          text,
        }),
      })
    );
  }
  if (env.WEBHOOK_URL) {
    jobs.push(fetch(env.WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }));
  }
  if (!jobs.length) console.log("Enquiry received but no delivery configured:\n" + text);
  await Promise.allSettled(jobs);

  return Response.redirect(new URL("/thank-you/", request.url), 303);
}
