import { layout, photo, howItWorksVideo, specTable, ctaBand, faqBlock, faqSchema, productSchema, breadcrumbSchema } from "../lib.mjs";

const longSpecs = [
  ["Material", "Steel and non-ferrous bars, profiles, tubes and pipes"],
  ["Material length", "3–12 m"],
  ["Load per storage position", "Up to 6 t"],
  ["Position height and width", "Made to fit your bundle size"],
  ["Number of positions", "100–3,000"],
  ["Retrieval method", "Cassette (pallet) pull-out"],
  ["Stacker crane travel speed", "120 m/min"],
  ["Stacker crane acceleration", "0.5 m/s²"],
  ["Retrieval cycle", "About 90 s (2,000-position system)"],
  ["Rack", "Modular, quick to install, extendable"],
  ["Software", "Kinkalteck WMS and WCS, API connection to your ERP"],
];

const sheetSpecs = [
  ["Material", "Steel and aluminium sheets and plates"],
  ["Material length", "3–8 m"],
  ["Material width", "1–2 m"],
  ["Load per storage position", "Up to 6 t"],
  ["Number of positions", "50–3,000"],
  ["Retrieval method", "Telescopic fork or chain push-pull"],
  ["Stacker crane travel speed", "120 m/min"],
  ["Stacker crane acceleration", "0.5 m/s²"],
  ["Retrieval cycle", "About 90 s (1,000-position system)"],
  ["Rack", "Modular bracket-arm rack with custom pallets"],
  ["Software", "Kinkalteck WMS and WCS, API connection to your ERP"],
];

const craneSpecs = [
  ["Material", "Extra-long and heavy bars, tubes, pipes and profiles"],
  ["Material length", "2–20 m"],
  ["Load per storage position", "Up to 20 t"],
  ["Number of positions", "50–3,000"],
  ["Handling", "Automated overhead-crane stacker"],
  ["Rack", "Cantilever rack"],
  ["Software", "Kinkalteck WMS and WCS, API connection to your ERP"],
];

const longFaqs = [
  [
    "Why are the levels lower than in other AS/RS?",
    "Each honeycomb level is about 200 mm lower than in a fork-type AS/RS. Five honeycomb levels fit where a stacker-aisle store fits four, about 20% more storage in the same building height.",
  ],
  [
    "Does every position need a cassette?",
    "Yes. Every position in a honeycomb system holds a cassette sized to your bundles. The cassette protects the material and lets the stacker crane pull it out.",
  ],
  [
    "Can the system connect to our ERP?",
    "Yes. Our WMS tracks every bundle by QR code and position in real time and exchanges stock and order data with your ERP through an API. We develop the software ourselves and adapt it to your process.",
  ],
  [
    "How do I get a quote?",
    "Send your longest material length, bundle size and weight, how many bundles you store and your building dimensions. Our team replies within one working day.",
  ],
];

const sheetFaqs = [
  [
    "What sizes of sheet can it store?",
    "Sheets and plates 3 to 8 m long and 1 to 2 m wide, up to 6 t per position, in 50 to 3,000 positions.",
  ],
  [
    "Which retrieval method should I choose?",
    "Both telescopic fork and chain push-pull retrieval are available. We recommend one after reviewing your sheet sizes, weights and throughput.",
  ],
];

const craneFaqs = [
  [
    "When is an overhead-crane stacker the right choice?",
    "For material that is longer or heavier than a honeycomb system handles: up to 20 m long and up to 20 t per position. We recommend a system type after reviewing your materials and building.",
  ],
  [
    "Does it use the same software as your other systems?",
    "Yes. QR-coded bundles, our WMS and WCS, and an API connection to your ERP, as in every Kinkalteck system.",
  ],
];

const longPage = {
  path: "/products/long-material-asrs/",
  render: () =>
    layout({
      path: "/products/long-material-asrs/",
      title: "Long Material Vertical Storage System (AS/RS) | Kinkalteck",
      description:
        "Honeycomb vertical storage for bars, profiles and tubes 3–12 m long, up to 6 t per position, 100–3,000 positions, with automatic feeding to your machines.",
      schema: [
        productSchema({
          name: "Kinkalteck honeycomb long material AS/RS",
          description:
            "Automated honeycomb vertical storage and retrieval system for bars, profiles, tubes and pipes 3–12 m long, up to 6 t per storage position.",
          path: "/products/long-material-asrs/",
          specs: longSpecs,
        }),
        faqSchema(longFaqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Long material AS/RS", "/products/long-material-asrs/"]]),
      ],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / <span>Long material AS/RS</span></nav>
  <h1>Honeycomb vertical storage for bars, profiles and tubes</h1>
  <p class="lede">Long, heavy material is stored in cassettes inside a modular honeycomb rack and delivered by a high-speed stacker crane. Saws and other machines are installed at the store, a patented embedded design, so storage and production share one area.</p>
  <div class="gallery">
    ${photo("aisle-steel", "Aisle of a Kinkalteck honeycomb long-material store with profiles in cassettes", { eager: true, cls: "g-main" })}
    ${photo("rack-wall-orange", "Honeycomb storage wall with blue cassettes and orange stacker crane mast")}
    ${photo("loading-platform-tubes", "Tubes on the loading platform of a honeycomb store")}
  </div>
  <h2>Specifications</h2>
  ${specTable(longSpecs)}
  <h2>What makes it different</h2>
  <ul>
    <li><strong>About 20% more storage in the same height.</strong> Each level is about 200 mm lower than in a fork-type AS/RS, so 5 honeycomb levels fit where a stacker-aisle store fits 4.</li>
    <li><strong>Storage and workshop in one area.</strong> The patented embedded design installs machines at the store, with no separate warehouse area.</li>
    <li><strong>Automatic feeding, no material picker.</strong> Patented picking and feeding delivers material to the machine, first in, first out.</li>
    <li><strong>Fast returns.</strong> Part-used bundles go back into storage instead of piling up beside the saw.</li>
  </ul>
  <h2>Built into your production flow</h2>
  <ul>
    <li><strong>Automatic weighing</strong> as bundles enter storage from the inbound platform.</li>
    <li><strong>QR code on every bundle</strong>, with our own WMS and WCS and an API connection to your ERP.</li>
    <li><strong>A buffer between processes</strong>: material comes back after heat treatment or cutting instead of going onto the floor.</li>
  </ul>
  <h2>See it work</h2>
  ${howItWorksVideo("3D animation: inbound platform, five-axis gantry retrieval robot and automatic feeding to the work station")}
  <h2>What we need for your quote</h2>
  <ol>
    <li>Longest material length and the bundle width, height and weight</li>
    <li>How many bundles or product types you store</li>
    <li>Your building's width, length and height</li>
    <li>Which machines the system should feed</li>
  </ol>
  ${faqBlock(longFaqs)}
</div>
${ctaBand("Request a quote for your building", "Send your material list and floor plan. Our team replies within one working day.")}
`,
    }),
};

const sheetPage = {
  path: "/products/sheet-metal-asrs/",
  render: () =>
    layout({
      path: "/products/sheet-metal-asrs/",
      title: "Sheet Metal Vertical Storage System (AS/RS) | Kinkalteck",
      description:
        "Bracket-arm vertical storage for sheets and plates 3–8 m long and 1–2 m wide, up to 6 t per position, 50–3,000 positions. Protects sheets and saves floor space.",
      schema: [
        productSchema({
          name: "Kinkalteck sheet metal AS/RS",
          description:
            "Automated bracket-arm vertical storage and retrieval system for sheets and plates 3–8 m long and 1–2 m wide, up to 6 t per storage position.",
          path: "/products/sheet-metal-asrs/",
          specs: sheetSpecs,
        }),
        faqSchema(sheetFaqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Sheet metal AS/RS", "/products/sheet-metal-asrs/"]]),
      ],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / <span>Sheet metal AS/RS</span></nav>
  <h1>Vertical storage for sheet metal and plate</h1>
  <p class="lede">A modular bracket-arm rack with custom pallets stores sheets and plates up to 8 m long and delivers them to your production machines on demand, without stacking damage and in far less floor space.</p>
  <div class="gallery">
    ${photo("sheet-metal-asrs", "Kinkalteck sheet metal storage tower with loading trolleys", { eager: true, cls: "g-main" })}
    ${photo("sheet-metal-station", "Loading station of a sheet metal store")}
    ${photo("sheet-metal-install", "Sheet metal storage installed in a factory")}
  </div>
  <h2>Specifications</h2>
  ${specTable(sheetSpecs)}
  <h2>What makes it different</h2>
  <ul>
    <li><strong>Sheets stay flat and clean.</strong> Each load sits on its own custom pallet instead of in a stack.</li>
    <li><strong>Storage next to production.</strong> Fewer handling moves between the store and your cutting and forming machines.</li>
    <li><strong>Our own software.</strong> WMS and WCS developed in-house and adapted to your process on request.</li>
    <li><strong>Quick to install.</strong> A modular rack that goes up fast and grows with you.</li>
  </ul>
  ${faqBlock(sheetFaqs)}
</div>
${ctaBand("Request a quote for your sheet store", "Send your sheet sizes, weights and quantities. Our team replies within one working day.")}
`,
    }),
};

const overview = {
  path: "/products/",
  render: () =>
    layout({
      path: "/products/",
      title: "Automated Storage Systems for Metal Materials | Kinkalteck",
      description:
        "Vertical storage for bars, profiles, tubes, sheet metal, extra-long loads and tooling. Compare Kinkalteck AS/RS systems and request a quote.",
      schema: [breadcrumbSchema([["Home", "/"], ["Products", "/products/"]])],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Products</span></nav>
  <h1>Automated storage systems for metal materials</h1>
  <p class="lede">Choose by what you store. If more than one type suits your materials and building, our engineers compare them for you.</p>
  <div class="table-wrap"><table>
    <thead><tr><th scope="col">System</th><th scope="col">Stores</th><th scope="col">Size and load</th><th scope="col">Positions</th></tr></thead>
    <tbody>
      <tr><td><a href="/products/long-material-asrs/">Long material AS/RS (honeycomb)</a></td><td>Bars, profiles, tubes, pipes</td><td>3–12 m, up to 6 t per position</td><td>100–3,000</td></tr>
      <tr><td><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS (bracket-arm)</a></td><td>Sheets and plates</td><td>3–8 m × 1–2 m, up to 6 t per position</td><td>50–3,000</td></tr>
      <tr><td><a href="/products/overhead-crane-storage/">Overhead-crane stacker AS/RS (cantilever)</a></td><td>Extra-long and heavy bars, tubes and profiles</td><td>2–20 m, up to 20 t per position</td><td>50–3,000</td></tr>
      <tr><td>Mini vertical storage</td><td>Tools, dies, moulds and parts</td><td>Small loads</td><td>100–20,000</td></tr>
    </tbody>
  </table></div>
  <h2>Which system fits?</h2>
  <p>Bars, tubes and profiles up to 12 m and 6 t go into honeycomb storage, with every bundle in its own cassette and automatic feeding to your machines. Longer or heavier material, up to 20 m and 20 t, goes onto cantilever racks served by an overhead-crane stacker. Sheets and plates go onto bracket-arm racks with custom pallets.</p>
  <p>Every system runs on the same Kinkalteck WMS and WCS, with a QR code on every bundle and an API connection to your ERP.</p>
</div>
${ctaBand("Not sure which system fits?", "Send your material list and floor plan. Our team replies within one working day.")}
`,
    }),
};

const cranePage = {
  path: "/products/overhead-crane-storage/",
  render: () =>
    layout({
      path: "/products/overhead-crane-storage/",
      title: "Overhead-Crane Stacker AS/RS with Cantilever Racks | Kinkalteck",
      description:
        "Automated cantilever storage served by an overhead-crane stacker, for material 2–20 m long and up to 20 t per position, 50–3,000 positions.",
      schema: [
        productSchema({
          name: "Kinkalteck overhead-crane stacker AS/RS with cantilever racks",
          description:
            "Automated cantilever storage and retrieval system served by an overhead-crane stacker, for material 2–20 m long and up to 20 t per storage position.",
          path: "/products/overhead-crane-storage/",
          specs: craneSpecs,
        }),
        faqSchema(craneFaqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Overhead-crane stacker AS/RS", "/products/overhead-crane-storage/"]]),
      ],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / <span>Overhead-crane stacker AS/RS</span></nav>
  <h1>Overhead-crane stacker storage for extra-long and heavy loads</h1>
  <p class="lede">An automated overhead-crane stacker serves cantilever racks for material up to 20 m long and up to 20 t per position. In 2025 it became China's first exported overhead-crane stacker AS/RS with cantilever racks.</p>
  <div class="gallery">
    ${photo("crane-store-long", "Overhead-crane stacker serving a cantilever storage rack", { eager: true, cls: "g-main" })}
    ${photo("crane-store-render", "3D view of an overhead-crane stacker storage system with trucks at the loading area")}
    ${photo("crane-store-install", "Overhead-crane stacker storage during installation")}
  </div>
  <h2>Specifications</h2>
  ${specTable(craneSpecs)}
  <p class="fine">Load, length and number of positions are set for each project. Send your material list for a full specification.</p>
  <h2>What makes it different</h2>
  <ul>
    <li><strong>Long and heavy loads.</strong> Up to 20 m and 20 t per position, beyond what a honeycomb store handles.</li>
    <li><strong>Automated handling.</strong> The crane stacker stores and retrieves bundles without a crane operator.</li>
    <li><strong>Same software.</strong> QR-coded bundles, WMS, WCS and ERP connection, as in every Kinkalteck system.</li>
    <li><strong>In use.</strong> Running at a precision valve maker in China.</li>
  </ul>
  ${faqBlock(craneFaqs)}
</div>
${ctaBand("Request a quote for long and heavy loads", "Send your floor plan and material list. Our team replies within one working day.")}
`,
    }),
};

export default [overview, longPage, sheetPage, cranePage];
