import { layout, ctaBand, faqBlock, faqSchema, photo, esc } from "../lib.mjs";
import { heroElevation } from "../drawings.mjs";
import { insightPosts } from "./insights.mjs";

const faqs = [
  [
    "What materials can a Kinkalteck AS/RS store?",
    "Steel and aluminium bars, profiles, tubes and pipes 3 to 12 m long in the honeycomb long-material system, and sheets and plates 3 to 12 m long and 1 to 2 m wide in the cantilever sheet metal system. Each storage position carries up to 6 tonnes.",
  ],
  [
    "How many storage positions can one system have?",
    "From 100 to 9,999 positions for the honeycomb long-material system and from 50 to 9,999 for the sheet metal system. The racks are modular, so a system can be extended later.",
  ],
  [
    "Can the storage sit above our saws or machines?",
    "Yes. In Kinkalteck's patented embedded layout, production machines stand on the ground floor and raw material is stored directly above them, so the store and the machines share one footprint.",
  ],
  [
    "How fast is retrieval?",
    "The stacker crane travels at 120 m/min with 0.5 m/s² acceleration. A 2,000-position honeycomb system retrieves a cassette in about 90 seconds.",
  ],
  [
    "How do I get a price?",
    "Send your longest material length, bundle size and weight, the number of bundles you store, and your building dimensions. We reply with a storage layout and a budget price.",
  ],
];

const latest = insightPosts.slice(0, 3);

export default {
  path: "/",
  render: () =>
    layout({
      path: "/",
      title: "Vertical Storage for Long & Heavy Materials | Kinkalteck",
      description:
        "Automated vertical storage for steel bars, profiles, tubes and sheets up to 12 m and 6 t per position. Store material above your machines and get the floor back.",
      schema: [faqSchema(faqs)],
      body: `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>Store long steel above your machines, not beside them</h1>
      <p class="lede">Automated vertical storage for bars, profiles, tubes and sheet metal up to 12 m long. Material goes up into the rack, your floor space comes back, and your saws are fed without a crane or forklift.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/contact/">Get a budget price</a>
        <a class="btn btn-ghost" href="/products/long-material-asrs/">See the long material system</a>
      </div>
      <p class="hero-note">Send your material sizes and floor plan. A sales engineer replies within one working day.</p>
    </div>
    <figure class="hero-photo">
      ${photo("honeycomb-aisle", "Aisle of a Kinkalteck honeycomb storage system with long steel profiles stored in cassettes on both sides", { eager: true })}
      <figcaption>Honeycomb long-material storage with cassettes on both sides of the stacker crane aisle</figcaption>
    </figure>
  </div>
  <div class="wrap">
    <dl class="nameplate" aria-label="Key specifications">
      <div><dt>Material length</dt><dd>3–12 m</dd></div>
      <div><dt>Load per position</dt><dd>Up to 6 t</dd></div>
      <div><dt>Storage positions</dt><dd>50–9,999</dd></div>
      <div><dt>Stacker crane</dt><dd>120 m/min</dd></div>
    </dl>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>What do you store?</h2>
    <div class="materials">
      <a class="material" href="/products/long-material-asrs/">
        ${photo("honeycomb-aisle-2", "Steel profiles stored in a honeycomb rack")}
        <span class="material-name">Bars and profiles</span>
        <span class="material-note">Honeycomb storage, 3–12 m</span>
      </a>
      <a class="material" href="/products/long-material-asrs/">
        ${photo("long-material-crane", "Long tubes in a honeycomb store with stacker crane")}
        <span class="material-name">Tubes and pipes</span>
        <span class="material-note">Honeycomb storage, up to 6 t per position</span>
      </a>
      <a class="material" href="/products/sheet-metal-asrs/">
        ${photo("sheet-metal-asrs", "Cantilever sheet metal storage tower with loading trolleys")}
        <span class="material-name">Sheets and plates</span>
        <span class="material-note">Cantilever storage, 1–2 m wide</span>
      </a>
      <a class="material material-text" href="/products/">
        <span class="material-name">Tools, dies and other loads</span>
        <span class="material-note">Overhead crane storage and mini vertical storage</span>
        <span class="text-link">Compare all systems</span>
      </a>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap problem-grid">
    <div>
      <h2>Where long material costs you money</h2>
      <p class="section-lede">Many metal processors still keep bars and sheets in floor stacks and cantilever racks, moved by crane. That costs more than it seems.</p>
      <ul class="problems">
        <li><strong>Slow, risky handling.</strong> Heavy, bulky material moved by overhead crane or forklift is slow, and every lift is a safety risk.</li>
        <li><strong>Damaged stock.</strong> Stacked bars and sheets bend, scratch and get lost. In a humid climate, they rust.</li>
        <li><strong>Handled again and again.</strong> Material stored away from the machines means extra moves for every job.</li>
        <li><strong>Floor space you pay for twice.</strong> Storage and production each take their own area of an expensive building.</li>
        <li><strong>Machines waiting for material.</strong> Every minute a saw or laser waits for the crane lowers your OEE.</li>
      </ul>
    </div>
    <div class="before-photos">
      <figure>${photo("cantilever-racks", "Steel tubes on conventional cantilever racks on the shop floor")}<figcaption>Typical today: cantilever racks taking up floor space</figcaption></figure>
      <figure>${photo("stacked-plates", "Steel plates stacked on a pallet and lifted by crane clamps")}<figcaption>Plates stacked and moved one lift at a time</figcaption></figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap embed-grid">
    <figure class="embed-figure">
      ${heroElevation()}
    </figure>
    <div>
      <h2>Machines below, material above</h2>
      <p>Kinkalteck's patented embedded layout puts your saws and machines on the ground floor and stores raw material directly above them. Storage, buffer and machine feeding become one system in one footprint.</p>
      <ul class="checks">
        <li>A lower level pitch than standard AS/RS fits more levels into the same building height</li>
        <li>The stacker crane brings each cassette down to the machine in about 90 seconds</li>
        <li>Part-used bundles go straight back into storage, not onto the floor</li>
      </ul>
      <a class="text-link" href="/insights/building-size-for-long-material-asrs/">How much building do you need?</a>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <h2>Two systems, built for long and heavy material</h2>
    <div class="systems">
      <article class="system">
        <a class="system-photo" href="/products/long-material-asrs/">${photo("long-material-machines", "Kinkalteck long-material storage with machines in the same hall")}</a>
        <h3><a href="/products/long-material-asrs/">Long material AS/RS</a></h3>
        <p>A honeycomb rack of cassettes for bars, profiles and tubes, with machines underneath in a patented layout.</p>
        <ul class="facts">
          <li>3–12 m material, up to 6 t per position</li>
          <li>100–9,999 positions</li>
          <li>Cassette pull-out retrieval in about 90 s</li>
        </ul>
        <a class="btn btn-ghost btn-sm" href="/products/long-material-asrs/">Specifications</a>
      </article>
      <article class="system">
        <a class="system-photo" href="/products/sheet-metal-asrs/">${photo("sheet-metal-install", "Kinkalteck cantilever sheet metal storage installed in a factory")}</a>
        <h3><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS</a></h3>
        <p>A cantilever rack with custom pallets for sheets and plates, placed next to your cutting and forming machines.</p>
        <ul class="facts">
          <li>3–12 m long, 1–2 m wide, up to 6 t per position</li>
          <li>50–9,999 positions</li>
          <li>Telescopic fork or chain push-pull retrieval</li>
        </ul>
        <a class="btn btn-ghost btn-sm" href="/products/sheet-metal-asrs/">Specifications</a>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap software-grid">
    <div>
      <h2>Every bundle tracked, in real time</h2>
      <p>The warehouse software knows where every bundle and sheet is, how much is left and what the machines need next. It can exchange stock and order data with your ERP or MES, so your planners see the store as it really is.</p>
      <ul class="checks">
        <li>Live stock by position, material and order</li>
        <li>Retrieval jobs sent straight to the stacker crane</li>
        <li>Dashboard for throughput and storage use</li>
      </ul>
    </div>
    <figure class="screen">${photo("wms-dashboard", "Kinkalteck warehouse management dashboard showing storage use and throughput")}</figure>
  </div>
</section>

<section class="section section-dark" id="singapore">
  <div class="wrap split">
    <div>
      <h2>Now building in Singapore</h2>
      <p>Our first automated storage project in Singapore is under construction. We'll publish the build here as it happens, from foundations to the first retrieval.</p>
      <p>Once it's running, you can ask to see it in person.</p>
      <a class="btn btn-yellow" href="/contact/">Ask about a site visit</a>
    </div>
    <div>
      <h2>How a project runs</h2>
      <ol class="steps">
        <li><strong>Assessment.</strong> You send your materials, quantities and floor plan.</li>
        <li><strong>Analysis and simulation.</strong> We model your material flow and storage needs.</li>
        <li><strong>Basic planning.</strong> We propose a layout and system type.</li>
        <li><strong>Solution development.</strong> Detailed design, quotation and drawings.</li>
        <li><strong>Implementation.</strong> Manufacturing, shipping, installation and commissioning.</li>
        <li><strong>Support.</strong> Remote and on-site service after handover.</li>
      </ol>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Planning guides</h2>
      <a class="text-link" href="/insights/">All guides</a>
    </div>
    <ul class="guide-list">
      ${latest
        .map((p) => `<li><a href="${p.path}"><span class="guide-title">${esc(p.title)}</span><span class="guide-desc">${esc(p.description)}</span></a></li>`)
        .join("")}
    </ul>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap narrow">
    <h2>Who uses it</h2>
    <p>Metal forging plants, sheet metal processors, aluminium profile makers, ERW pipe and seamless tube producers, and steel stockholders.</p>
    ${faqBlock(faqs)}
  </div>
</section>

${ctaBand("Tell us what you store", "Send your material sizes and floor plan. We'll reply with a storage layout and a budget price.")}
`,
    }),
};
