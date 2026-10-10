import { layout, ctaBand, faqBlock, faqSchema } from "../lib.mjs";
import { heroElevation } from "../drawings.mjs";

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
      <p class="lede">Kinkalteck builds automated vertical storage for bars, profiles, tubes and sheet metal up to 12 m long. Material moves up into the rack, your floor space comes back, and your saws are fed without a crane or forklift.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/contact/">Get a budget price</a>
        <a class="btn btn-ghost" href="/products/long-material-asrs/">See the long material system</a>
      </div>
    </div>
    <figure class="hero-figure">
      ${heroElevation()}
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
  <div class="wrap narrow">
    <h2>Where long material costs you money</h2>
    <p class="section-lede">Many metal processors still keep bars and sheets in floor stacks and cantilever racks, moved by crane. That costs more than it seems.</p>
    <ul class="problems">
      <li><strong>Slow, risky handling.</strong> Heavy, bulky material moved by overhead crane or forklift is slow, and every lift is a safety risk.</li>
      <li><strong>Damaged stock.</strong> Bars and sheets stacked on top of each other bend, scratch and are hard to find. In a humid climate, they rust.</li>
      <li><strong>Handled again and again.</strong> When material is stored away from the machines, every job means extra moves and extra labour.</li>
      <li><strong>Floor space you pay for twice.</strong> Storage and production each take their own area of an expensive building.</li>
      <li><strong>Machines waiting for material.</strong> Every minute a saw or laser waits for the crane lowers your overall equipment effectiveness (OEE).</li>
    </ul>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <h2>Two systems, built for long and heavy material</h2>
    <div class="systems">
      <article class="system">
        <h3><a href="/products/long-material-asrs/">Long material AS/RS</a></h3>
        <p>A honeycomb rack of cassettes for bars, profiles and tubes. Machines can stand underneath, with material stored directly above them, in a patented embedded layout.</p>
        <ul class="facts">
          <li>3–12 m material, up to 6 t per position</li>
          <li>100–9,999 positions</li>
          <li>Cassette pull-out retrieval in about 90 s</li>
        </ul>
        <a class="text-link" href="/products/long-material-asrs/">Specifications and layout</a>
      </article>
      <article class="system">
        <h3><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS</a></h3>
        <p>A cantilever rack with custom pallets for sheets and plates, placed next to your cutting and forming machines.</p>
        <ul class="facts">
          <li>3–12 m long, 1–2 m wide, up to 6 t per position</li>
          <li>50–9,999 positions</li>
          <li>Telescopic fork or chain push-pull retrieval</li>
        </ul>
        <a class="text-link" href="/products/sheet-metal-asrs/">Specifications and layout</a>
      </article>
    </div>
    <p class="more-systems">We also build overhead-crane storage and compact goods-to-person storage for tools and dies. <a href="/products/">See all systems</a>.</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <h2>Now building in Singapore</h2>
      <p>Our first automated storage project in Singapore is under construction. We'll publish the build here as it happens, from foundations to the first retrieval.</p>
      <p>Once it's running, you can ask to see it in person.</p>
      <a class="text-link" href="/contact/">Ask about a site visit</a>
    </div>
    <div>
      <h2>How a project runs</h2>
      <ol class="steps">
        <li><strong>Assessment.</strong> You send your materials, quantities and floor plan.</li>
        <li><strong>Data analysis and simulation.</strong> We model your material flow and storage needs.</li>
        <li><strong>Basic planning.</strong> We propose a layout and system type.</li>
        <li><strong>Solution development.</strong> Detailed design, quotation and drawings.</li>
        <li><strong>Implementation.</strong> Manufacturing, shipping, installation and commissioning.</li>
        <li><strong>Support.</strong> Remote and on-site service after handover.</li>
      </ol>
    </div>
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
