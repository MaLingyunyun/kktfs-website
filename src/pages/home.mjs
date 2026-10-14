import { layout, ctaBand, faqBlock, faqSchema, photo, howItWorksVideo, icon, lengthRuler, wechatCard, simCompare, SIM_SAMPLE } from "../lib.mjs";

const faqs = [
  [
    "What materials can a Kinkalteck AS/RS store?",
    "Bars, profiles, tubes and pipes 3 to 12 m long in the honeycomb long-material system; sheets and plates 3 to 8 m long and 1 to 2 m wide in the sheet metal system; long, heavy loads 2 to 20 m long and up to 20 t per position in the overhead-crane stacker system; and tools, dies and parts 0.2 to 2 m long and up to 2 t per position in the mini system.",
  ],
  [
    "How many storage positions can one system have?",
    "100 to 3,000 positions for the honeycomb long-material system, 50 to 3,000 for the sheet metal and overhead-crane stacker systems, and 100 to 20,000 for the mini system.",
  ],
  [
    "How does the storage connect to our machines?",
    "Kinkalteck's patented embedded design turns the store and the workshop into one area: saws and other production machines stand right beside the store and are fed automatically, so no separate warehouse area and no material picker are needed.",
  ],
  [
    "Does the system connect to our ERP?",
    "Yes. Kinkalteck develops its own warehouse management system (WMS) and control system (WCS), labels every bundle with a QR code, connects to your ERP through an API, and adapts the software to your process on request.",
  ],
  [
    "How fast is retrieval?",
    "The stacker crane travels at 120 m/min with 0.5 m/s² acceleration. A 2,000-position honeycomb system retrieves a cassette in about 90 seconds.",
  ],
  [
    "Where has Kinkalteck delivered systems?",
    "About 20 automated storage systems in China, South Korea, Australia and Singapore, for precision forging plants, steel tube makers, valve makers and steel stockholders.",
  ],
  [
    "How do I get a quote?",
    "Send what you store (material, longest length, bundle weight), how much you store and the size of your building. Our team replies within one working day, and we can include a 3D simulation of your plant.",
  ],
];

export default {
  path: "/",
  render: () =>
    layout({
      path: "/",
      title: "Material Flow & Automated Storage for Long Materials | Kinkalteck",
      description:
        "Automated storage and machine feeding for bars, tubes, profiles and sheets: honeycomb, sheet metal and overhead-crane stacker AS/RS. About 20 systems in 4 countries.",
      schema: [faqSchema(faqs)],
      body: `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>Shop-floor material flow for long and heavy materials</h1>
      <p class="lede">Kinkalteck builds automated storage that keeps bars, tubes, profiles and sheets moving with your production: weighed on arrival, stored by the stacker crane and fed to your machines automatically, with no material picker.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/contact/">Request a quote</a>
        <a class="btn btn-ghost" href="#see-it-work">${icon("play")}Watch how it works</a>
      </div>
      <p class="hero-note">About 20 systems delivered in China, South Korea, Australia and Singapore.</p>
    </div>
    <figure class="hero-photo">
      ${photo("hero-honeycomb", "Kinkalteck honeycomb storage with blue cassette racks on both sides of a stacker crane aisle", { eager: true })}
      <figcaption>Honeycomb long-material storage, cassettes on both sides of the stacker crane aisle</figcaption>
    </figure>
  </div>
  <div class="wrap">
    ${lengthRuler()}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>What do you store?</h2>
    <div class="materials">
      <a class="material" href="/products/long-material-asrs/">
        ${photo("aisle-grey", "Long profiles stored in a honeycomb rack")}
        <span class="material-body">${icon("bar-round", "material-icon")}<span class="material-name">Bars and profiles</span>
        <span class="material-note">Honeycomb storage, 3–12 m</span></span>
      </a>
      <a class="material" href="/products/long-material-asrs/">
        ${photo("hc-load-station", "A bundle of bars on the inbound station of a honeycomb store, next to the orange retrieval robot")}
        <span class="material-body">${icon("tube", "material-icon")}<span class="material-name">Tubes and pipes</span>
        <span class="material-note">Honeycomb storage, up to 6 t per position</span></span>
      </a>
      <a class="material" href="/products/sheet-metal-asrs/">
        ${photo("sheet-metal-asrs", "Sheet metal storage tower with loading trolleys")}
        <span class="material-body">${icon("sheet", "material-icon")}<span class="material-name">Sheets and plates</span>
        <span class="material-note">Sheet metal storage, 3–8 m long, 1–2 m wide</span></span>
      </a>
      <a class="material" href="/products/overhead-crane-storage/">
        ${photo("crane-store-long", "Overhead-crane stacker serving a cantilever storage rack")}
        <span class="material-body">${icon("long-load", "material-icon")}<span class="material-name">Extra-long and heavy loads</span>
        <span class="material-note">Overhead-crane stacker storage, 2–20 m, up to 20 t</span></span>
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
        <li>${icon("weigh", "flow-icon")}<p><strong>Receive and weigh.</strong> Bundles arrive on the inbound conveyor and are weighed automatically as they enter storage.</p></li>
        <li>${icon("qr", "flow-icon")}<p><strong>Identify and record.</strong> Every bundle gets a QR code and a digital identity. Our own WMS records it, the WCS tells the crane where to put it, and stock updates in your ERP through an API.</p></li>
        <li>${icon("feed", "flow-icon")}<p><strong>Feed the machines.</strong> Our patented automatic picking and feeding delivers the right material to the machine, first in, first out, with no material picker.</p></li>
        <li>${icon("buffer", "flow-icon")}<p><strong>Buffer between processes.</strong> After heat treatment or cutting, material goes back into the rack instead of onto the floor, ready for the next step.</p></li>
      </ol>
    </div>
    <div class="hub-side">
      ${photo("rack-wall-orange", "Large honeycomb storage wall with blue cassettes and an orange stacker crane mast")}
      <h3 class="saves-h">What our customers save</h3>
      <ul class="saves">
        <li>${icon("floor")}<span>Floor space</span></li>
        <li>${icon("operator")}<span>Crane and forklift operators</span></li>
        <li>${icon("hook")}<span>Handling that adds no value</span></li>
      </ul>
      <p class="fine">Turnkey delivery: storage, WMS and WCS from one supplier, with software changes made as your process changes.</p>
    </div>
  </div>
</section>

<section class="section section-alt" id="see-it-work">
  <div class="wrap embed-grid">
    ${howItWorksVideo("3D animation: inbound platform, five-axis gantry retrieval robot and automatic feeding to the work station")}
    <div>
      <h2>See it work</h2>
      <p>A five-axis gantry robot takes cassettes from the honeycomb rack and delivers material straight to the work station. Saws and other machines stand right beside the store, a patented embedded design, so the warehouse and the workshop become one area.</p>
      <ul class="checks">
        <li>Each honeycomb level is about 200 mm lower than in a fork-type AS/RS: 5 levels fit where a stacker-aisle store fits 4, about 20% more storage</li>
        <li>About 90 seconds per retrieval in a 2,000-position system</li>
        <li>Part-used bundles go straight back into storage</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Four systems for long, heavy and small loads</h2>
    <div class="systems systems-3">
      <article class="system">
        <a class="system-photo" href="/products/long-material-asrs/">${photo("aisle-steel", "Aisle of a honeycomb long-material store")}</a>
        <h3><a href="/products/long-material-asrs/">Long material AS/RS</a></h3>
        <p>Honeycomb rack of cassettes for bars, profiles and tubes, fed straight to your machines.</p>
        <dl class="facts">
          <div><dt>Length</dt><dd>3–12 m</dd></div>
          <div><dt>Load</dt><dd>up to 6 t per position</dd></div>
          <div><dt>Positions</dt><dd>100–3,000</dd></div>
        </dl>
        <a class="btn btn-ghost btn-sm" href="/products/long-material-asrs/">Specifications</a>
      </article>
      <article class="system">
        <a class="system-photo" href="/products/sheet-metal-asrs/">${photo("sheet-metal-install", "Sheet metal storage installed in a factory")}</a>
        <h3><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS</a></h3>
        <p>Bracket-arm racks with custom pallets for sheets and plates, next to your machines.</p>
        <dl class="facts">
          <div><dt>Length</dt><dd>3–8 m × 1–2 m</dd></div>
          <div><dt>Load</dt><dd>up to 6 t per position</dd></div>
          <div><dt>Positions</dt><dd>50–3,000</dd></div>
        </dl>
        <a class="btn btn-ghost btn-sm" href="/products/sheet-metal-asrs/">Specifications</a>
      </article>
      <article class="system">
        <a class="system-photo" href="/products/overhead-crane-storage/">${photo("crane-store-render", "3D view of an overhead-crane stacker storage system with trucks at the loading area")}</a>
        <h3><a href="/products/overhead-crane-storage/">Overhead-crane stacker AS/RS</a></h3>
        <p>Cantilever racks served by an overhead-crane stacker for extra-long and heavy loads.</p>
        <dl class="facts">
          <div><dt>Length</dt><dd>2–20 m</dd></div>
          <div><dt>Load</dt><dd>up to 20 t per position</dd></div>
          <div><dt>Positions</dt><dd>50–3,000</dd></div>
        </dl>
        <a class="btn btn-ghost btn-sm" href="/products/overhead-crane-storage/">Specifications</a>
      </article>
    </div>
    <p class="more-systems">For tools, dies and parts: <a href="/products/">mini vertical storage</a>, 0.2–2 m, up to 2 t per position, 100–20,000 positions.</p>
  </div>
</section>

<section class="section section-alt" id="simulation" aria-labelledby="sim-home-h">
  <div class="wrap sim-home">
    <div class="sim-home-pics">
      ${simCompare(SIM_SAMPLE)}
      <p class="fine compare-hint">Drag the handle to compare. Sample plant shown.</p>
    </div>
    <div class="sim-home-text">
      <h2 id="sim-home-h">See your own plant in 3D before you decide</h2>
      <p>Send us your floor plan and material list. Our engineers build a 3D simulation of your plant: your storage today next to the new system, with the material flow running from truck to machine.</p>
      <p>You receive the simulation video with your proposal. It is prepared from your own data and shared only with you.</p>
      <a class="btn btn-primary" href="/contact/?topic=simulation">Request a 3D simulation of my plant</a>
      ${wechatCard({ size: 104 })}
    </div>
  </div>
</section>

<section class="section section-dark blueprint" id="singapore">
  <div class="wrap split">
    <div>
      <h2>Singapore: a steel pipe stockholder's new store</h2>
      <p>A Singapore steel pipe and bar stockholder building a new warehouse chose Kinkalteck for its honeycomb store. The company already runs an automated store from a European supplier. It compared prices and visited Kinkalteck customers before deciding.</p>
      <dl class="case-facts">
        <div><dt>System</dt><dd>Honeycomb AS/RS, about 800 positions</dd></div>
        <div><dt>Material</dt><dd>Pipes and bars, about 7.2 m, about 3 t per bundle</dd></div>
        <div><dt>Footprint</dt><dd>About 500 m², 11 m high</dd></div>
        <div><dt>Scope</dt><dd>Storage, WMS software, weighing, inbound and outbound conveyors</dd></div>
        <div><dt>Timeline</dt><dd>Contract March 2026, on site from June 2026, completion planned October 2026</dd></div>
      </dl>
      <p class="fine">Site visits can be arranged with the customer's agreement once the system is running.</p>
      <a class="btn btn-yellow" href="/contact/">Ask about a site visit</a>
    </div>
    <div>
      <h2>How a project runs</h2>
      <ol class="steps">
        <li><strong>Assessment.</strong> You send your materials, quantities and floor plan.</li>
        <li><strong>Analysis and simulation.</strong> We model your material flow and storage needs.</li>
        <li><strong>Basic planning.</strong> We propose a layout and system type.</li>
        <li><strong>Solution development.</strong> Detailed design, quotation and drawings.</li>
        <li><strong>Implementation.</strong> Manufacturing, shipping, installation and commissioning, with local partner teams abroad.</li>
        <li><strong>Support.</strong> Remote and on-site service after handover.</li>
      </ol>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Selected projects</h2>
    <p class="section-lede">Customer names are confidential. Every project saved floor space, operators and handling that adds no value.</p>
    <div class="table-wrap"><table>
      <thead><tr><th scope="col">Customer</th><th scope="col">Region</th><th scope="col">System</th></tr></thead>
      <tbody>
        <tr><td>Steel pipe and bar stockholder</td><td>Singapore</td><td>Honeycomb AS/RS, about 800 positions (completing 2026)</td></tr>
        <tr><td>Precision forging plant</td><td>Zhejiang, China</td><td>Honeycomb AS/RS, 600 positions</td></tr>
        <tr><td>Precision steel tube maker</td><td>China</td><td>Honeycomb AS/RS, 500 positions</td></tr>
        <tr><td>Precision forging plant</td><td>Jiangsu, China</td><td>Honeycomb AS/RS, 300 positions</td></tr>
        <tr><td>Precision valve maker</td><td>China</td><td>Overhead-crane stacker AS/RS with cantilever racks</td></tr>
      </tbody>
    </table></div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap about-grid">
    <div>
      <h2>Why we build it</h2>
      <blockquote class="philosophy"><p>We build smart storage so that the supply of long and heavy material keeps pace with production, and the machines, buildings and people our customers invest in turn into output and on-time delivery.</p></blockquote>
      <p>Kinkalteck works on the production floors of plants that handle long and heavy material. We combine process experience, material-flow planning and purpose-built equipment into systems that work in practice, so material supply, process flow and order delivery stay under control.</p>
      <h3>Why customers choose Kinkalteck</h3>
      <ul class="advantages">
        <li>${icon("one-area")}<span>Storage and workshop in one area, with machines right beside the store (patented)</span></li>
        <li>${icon("feed")}<span>Automatic feeding to the machines, no material picker (patented)</span></li>
        <li>${icon("levels")}<span>Lower levels: about 20% more storage in the same height</span></li>
        <li>${icon("software")}<span>Our own WMS and WCS, adapted to your process on request</span></li>
        <li>${icon("cost")}<span>Lower cost than European-built systems</span></li>
        <li>${icon("delivery")}<span>Short delivery times</span></li>
      </ul>
      <p>A team of about 50 in Foshan, China, designs the hardware and software in-house. Certified to ISO 9001.</p>
    </div>
    <div>
      <h2>Milestones</h2>
      <ol class="milestones">
        <li><span class="year">2018</span>Kinkalteck founded in Foshan, China</li>
        <li><span class="year">2024</span>China's first export of a honeycomb AS/RS for heavy long material</li>
        <li><span class="year">2024</span>Invention patent for the embedded smart AS/RS</li>
        <li><span class="year">2025</span>China's first export of an overhead-crane stacker AS/RS with cantilever racks</li>
        <li><span class="year">2026</span>Singapore project for a steel pipe stockholder</li>
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
      <li><strong>Steel stockholders</strong>Fast picking of mixed bars, tubes and profiles</li>
      <li><strong>Forging and heat treatment</strong>A buffer between processes, off the floor</li>
      <li><strong>Valve and machinery makers</strong>Bar stock for machining lines</li>
      <li><strong>Shipyards and tower fabricators</strong>Profiles and plates for fabrication</li>
      <li><strong>Aluminium profile and sheet processors</strong>Profiles, sheets and plates</li>
    </ul>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap narrow">
    ${faqBlock(faqs)}
  </div>
</section>

${ctaBand("Tell us what you store", "Send your materials and floor plan. Our team replies within one working day.")}
`,
    }),
};
