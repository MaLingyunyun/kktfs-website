import { layout, ctaBand, faqBlock, faqSchema, photo, esc, howItWorksVideo } from "../lib.mjs";
import { insightPosts } from "./insights.mjs";

const faqs = [
  [
    "What materials can a Kinkalteck AS/RS store?",
    "Steel, copper, aluminium, titanium and other bars, profiles, tubes and pipes 3 to 12 m long in the honeycomb long-material system, and sheets and plates 3 to 12 m long and 1 to 2 m wide in the cantilever sheet metal system. Each storage position carries up to 6 tonnes.",
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
    "Does the system connect to our ERP?",
    "Yes. Kinkalteck supplies the warehouse management system (WMS) and the control system (WCS), labels every bundle with a QR code, and connects to your ERP through an API.",
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
      <p class="lede">Automated vertical storage for bars, profiles, tubes and sheet metal up to 12 m long. Material goes up into the rack, your floor space comes back, and your machines are fed without a crane, a forklift or a material picker.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/contact/">Get a budget price</a>
        <a class="btn btn-ghost" href="#see-it-work">Watch how it works</a>
      </div>
      <p class="hero-note">Send your material sizes and floor plan. A sales engineer replies within one working day.</p>
    </div>
    <figure class="hero-photo">
      ${photo("hero-honeycomb", "Kinkalteck honeycomb storage with blue cassette racks on both sides of a stacker crane aisle", { eager: true })}
      <figcaption>Honeycomb long-material storage, cassettes on both sides of the stacker crane aisle</figcaption>
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
        ${photo("aisle-grey", "Long profiles stored in a honeycomb rack")}
        <span class="material-name">Bars and profiles</span>
        <span class="material-note">Honeycomb storage, 3–12 m</span>
      </a>
      <a class="material" href="/products/long-material-asrs/">
        ${photo("loading-platform-tubes", "Tubes on the loading platform in front of a honeycomb store")}
        <span class="material-name">Tubes and pipes</span>
        <span class="material-note">Honeycomb storage, up to 6 t per position</span>
      </a>
      <a class="material" href="/products/sheet-metal-asrs/">
        ${photo("sheet-metal-asrs", "Cantilever sheet metal storage tower with loading trolleys")}
        <span class="material-name">Sheets and plates</span>
        <span class="material-note">Cantilever storage, 1–2 m wide</span>
      </a>
      <a class="material" href="/products/overhead-crane-storage/">
        ${photo("crane-store-long", "Overhead crane serving a long-material storage rack")}
        <span class="material-name">Large bundles</span>
        <span class="material-note">Overhead crane storage, most loads without cassettes</span>
      </a>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <h2>From crane and floor stacks to a store that feeds the line</h2>
    <p class="section-lede">Many plants still lift bars from floor stacks onto the saw by crane. Kinkalteck puts the material in a rack and brings it to the machine automatically.</p>
    <div class="before-after">
      <figure>
        <span class="ba-label">Today</span>
        ${photo("flow-before", "Illustration: an overhead crane lifting bars from a floor stack onto a saw infeed")}
        <figcaption>A crane operator and a picker move every bundle from the floor to the saw.</figcaption>
      </figure>
      <figure>
        <span class="ba-label ba-after">With Kinkalteck</span>
        ${photo("flow-after", "Illustration: honeycomb racks and a stacker crane delivering material straight to the saw")}
        <figcaption>The stacker crane takes the right bundle from the rack and delivers it to the saw.</figcaption>
      </figure>
    </div>
    <ul class="problems problems-grid">
      <li><strong>Slow, risky handling.</strong> Every crane or forklift lift of heavy, bulky material is slow and a safety risk.</li>
      <li><strong>Damaged and lost stock.</strong> Stacked bars and sheets bend, scratch and get lost. In a humid climate, they rust.</li>
      <li><strong>Searching and digging.</strong> Pickers dig through stacks to find the right material, and wrong picks reach the machine.</li>
      <li><strong>Floor space paid for twice.</strong> Storage and production each take their own area of an expensive building.</li>
      <li><strong>Machines waiting.</strong> Every minute a saw waits for the crane lowers your overall equipment effectiveness (OEE).</li>
      <li><strong>Stock you can't see.</strong> Handwritten records are never up to date, so planning works from guesses.</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap hub-grid">
    <div>
      <h2>Not just a store: the hub of your material flow</h2>
      <p>The system follows your production process from the truck to the machine and back again.</p>
      <ol class="flow">
        <li><strong>Receive and weigh.</strong> Bundles are unloaded onto the inbound platform and weighed automatically as they enter storage.</li>
        <li><strong>Identify and record.</strong> Every bundle gets a QR code and a digital identity. The WMS records it, the WCS tells the crane where to put it, and stock updates in your ERP through an API.</li>
        <li><strong>Feed the machines.</strong> Our patented automatic picking and feeding delivers the right material to the machine on schedule, first in, first out, with no material picker.</li>
        <li><strong>Buffer between processes.</strong> After heat treatment or cutting, material goes back into the rack instead of onto the floor, ready for the next step.</li>
      </ol>
    </div>
    <div class="hub-side">
      ${photo("rack-wall-orange", "Large honeycomb storage wall with blue cassettes and an orange stacker crane mast")}
      <dl class="zeros" aria-label="What changes on the shop floor">
        <div><dt>Waiting</dt><dd>Zero</dd></div>
        <div><dt>Wrong picks</dt><dd>Zero</dd></div>
        <div><dt>Digging through stacks</dt><dd>Zero</dd></div>
        <div><dt>Material on the floor</dt><dd>Zero</dd></div>
      </dl>
      <p class="fine">Turnkey delivery: hardware, WMS and WCS from one supplier, with software changes made as your process changes.</p>
    </div>
  </div>
</section>

<section class="section section-alt" id="see-it-work">
  <div class="wrap embed-grid">
    ${howItWorksVideo("3D animation: inbound platform, five-axis gantry retrieval robot and automatic feeding to the work station")}
    <div>
      <h2>See it work</h2>
      <p>A five-axis gantry robot takes cassettes from the honeycomb rack and delivers material straight to the work station. Production machines can stand underneath the rack, so storage and production share one footprint, a layout protected by Kinkalteck patents.</p>
      <ul class="checks">
        <li>A lower level pitch than standard AS/RS fits more levels into the same building height</li>
        <li>About 90 seconds per retrieval in a 2,000-position system</li>
        <li>Part-used bundles go straight back into storage</li>
      </ul>
      <a class="text-link" href="/insights/building-size-for-long-material-asrs/">How much building do you need?</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Three ways to store long and heavy material</h2>
    <div class="systems systems-3">
      <article class="system">
        <a class="system-photo" href="/products/long-material-asrs/">${photo("aisle-steel", "Aisle of a honeycomb long-material store")}</a>
        <h3><a href="/products/long-material-asrs/">Long material AS/RS</a></h3>
        <p>Honeycomb rack of cassettes for bars, profiles and tubes, with machines underneath.</p>
        <ul class="facts">
          <li>3–12 m, up to 6 t per position</li>
          <li>100–9,999 positions</li>
        </ul>
        <a class="btn btn-ghost btn-sm" href="/products/long-material-asrs/">Specifications</a>
      </article>
      <article class="system">
        <a class="system-photo" href="/products/sheet-metal-asrs/">${photo("sheet-metal-install", "Cantilever sheet metal storage installed in a factory")}</a>
        <h3><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS</a></h3>
        <p>Cantilever rack with custom pallets for sheets and plates, next to your machines.</p>
        <ul class="facts">
          <li>3–12 m × 1–2 m, up to 6 t per position</li>
          <li>50–9,999 positions</li>
        </ul>
        <a class="btn btn-ghost btn-sm" href="/products/sheet-metal-asrs/">Specifications</a>
      </article>
      <article class="system">
        <a class="system-photo" href="/products/overhead-crane-storage/">${photo("crane-store-render", "3D view of an overhead crane storage system with trucks at the loading area")}</a>
        <h3><a href="/products/overhead-crane-storage/">Overhead crane storage</a></h3>
        <p>Crane-served racks for large bundles, usually without cassettes, at a lower cost per position.</p>
        <ul class="facts">
          <li>More positions in the same space</li>
          <li>Suits tall buildings with crane height</li>
        </ul>
        <a class="btn btn-ghost btn-sm" href="/products/overhead-crane-storage/">Details</a>
      </article>
    </div>
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
    <h2>Built for plants that handle long and heavy material</h2>
    <ul class="industries">
      <li><strong>Non-ferrous bar producers</strong>Copper, aluminium, titanium and alloy bars</li>
      <li><strong>Steel tube and pipe makers</strong>Precision tubes, ERW pipe, seamless tube</li>
      <li><strong>Metal cutting service centres</strong>Raw material and finished-part storage</li>
      <li><strong>Steel stockholders</strong>Fast picking of mixed bars and profiles</li>
      <li><strong>Forging and heat treatment</strong>A buffer between processes, off the floor</li>
      <li><strong>Valve and machinery makers</strong>Bar stock for machining lines</li>
      <li><strong>Shipyards and tower fabricators</strong>Profiles and plates for fabrication</li>
      <li><strong>Aluminium profile and sheet processors</strong>Profiles, sheets and plates</li>
    </ul>
  </div>
</section>

<section class="section section-alt">
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

<section class="section">
  <div class="wrap narrow">
    ${faqBlock(faqs)}
  </div>
</section>

${ctaBand("Tell us what you store", "Send your material sizes and floor plan. We'll reply with a storage layout and a budget price.")}
`,
    }),
};
