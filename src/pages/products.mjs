import { heroElevation } from "../drawings.mjs";
import { layout, photo, howItWorksVideo, specTable, ctaBand, faqBlock, faqSchema, productSchema, breadcrumbSchema } from "../lib.mjs";

const longSpecs = [
  ["Material", "Steel and aluminium bars, profiles, tubes and pipes"],
  ["Material length", "3–12 m"],
  ["Load per storage position", "Up to 6 t"],
  ["Position height and width", "Made to fit your bundle size"],
  ["Number of positions", "100–9,999"],
  ["Retrieval method", "Cassette (pallet) pull-out"],
  ["Stacker crane travel speed", "120 m/min"],
  ["Stacker crane acceleration", "0.5 m/s²"],
  ["Retrieval cycle", "About 90 s (2,000-position system)"],
  ["Rack", "Modular, quick to install, extendable"],
  ["Typical floor load requirement", "10 t/m²"],
];

const sheetSpecs = [
  ["Material", "Steel and aluminium sheets and plates"],
  ["Material length", "3–12 m"],
  ["Material width", "1–2 m"],
  ["Load per storage position", "Up to 6 t"],
  ["Number of positions", "50–9,999"],
  ["Retrieval method", "Telescopic fork or chain push-pull"],
  ["Stacker crane travel speed", "120 m/min"],
  ["Stacker crane acceleration", "0.5 m/s²"],
  ["Retrieval cycle", "About 90 s (1,000-position system)"],
  ["Rack", "Modular cantilever rack with custom pallets"],
];

const longFaqs = [
  [
    "How wide does my building need to be?",
    "For a honeycomb system with two rack rows sharing one aisle, plan for a clear width of about 3 to 3.5 times your longest material. For 6 m material, that means at least about 19 m.",
  ],
  [
    "Do I need cassettes?",
    "Yes. Every position in a honeycomb system holds a cassette, which protects the material and lets the stacker crane pull it out. Cassettes are sized to your bundles with about 200 mm clearance.",
  ],
  [
    "What floor load is needed?",
    "A standard floor rated for 10 t/m² suits most systems. Very tall stores may need a reinforced foundation, which we check during planning.",
  ],
  [
    "Can the system connect to our ERP?",
    "Yes. The warehouse software tracks every bundle by position in real time and can exchange stock and order data with your ERP or MES.",
  ],
];

const sheetFaqs = [
  [
    "What is the difference from a standard sheet metal tower?",
    "Kinkalteck's cantilever system uses a lower level pitch than conventional AS/RS, so more storage levels fit into the same building height, and it handles sheets and plates up to 12 m long.",
  ],
  [
    "Which retrieval method should I choose?",
    "Both telescopic fork and chain push-pull retrieval are available. We recommend one after reviewing your sheet sizes, weights and throughput.",
  ],
];

const longPage = {
  path: "/products/long-material-asrs/",
  render: () =>
    layout({
      path: "/products/long-material-asrs/",
      title: "Long Material Vertical Storage System (AS/RS) | Kinkalteck",
      description:
        "Honeycomb vertical storage for bars, profiles and tubes 3–12 m long, up to 6 t per position. Machines below, material above. Get a layout study.",
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
  <p class="lede">Long, heavy material is stored in cassettes inside a modular honeycomb rack and delivered by a high-speed stacker crane. Your production machines can stand on the ground floor with material stored directly above them, a patented layout that removes unnecessary handling.</p>
  <div class="gallery">
    ${photo("aisle-steel", "Aisle of a Kinkalteck honeycomb long-material store with profiles in cassettes", { eager: true, cls: "g-main" })}
    ${photo("rack-wall-orange", "Honeycomb storage wall with blue cassettes and orange stacker crane mast")}
    ${photo("loading-platform-tubes", "Tubes on the loading platform of a honeycomb store")}
  </div>
  <h2>Specifications</h2>
  ${specTable(longSpecs)}
  <h2>Machines below, material above</h2>
  <figure class="embed-figure">${heroElevation()}</figure>
  <h2>What makes it different</h2>
  <ul>
    <li><strong>More levels in the same height.</strong> A lower level pitch than standard AS/RS fits more storage levels into your building.</li>
    <li><strong>Machines underneath.</strong> The patented embedded layout puts storage and production in one footprint.</li>
    <li><strong>Storage, buffer and machine feeding in one system.</strong> Every bundle has a known position, and stock updates in real time.</li>
    <li><strong>Fast returns.</strong> Part-used bundles go back into storage quickly, instead of piling up beside the saw.</li>
  </ul>
  <h2>Built into your production flow</h2>
  <ul>
    <li><strong>Automatic weighing</strong> as bundles enter storage from the inbound platform.</li>
    <li><strong>QR code on every bundle</strong>, with WMS and WCS software and an API connection to your ERP.</li>
    <li><strong>Patented automatic picking and feeding</strong> delivers material to the machine first in, first out, with no material picker.</li>
    <li><strong>A buffer between processes</strong>: material comes back after heat treatment or cutting instead of going onto the floor.</li>
  </ul>
  <h2>See it work</h2>
  ${howItWorksVideo("3D animation: inbound platform, five-axis gantry retrieval robot and automatic feeding to the work station")}
  <h2>What we need to size your system</h2>
  <ol>
    <li>Longest material length and the bundle width, height and weight</li>
    <li>How many bundles or product types you store</li>
    <li>Building clear width, length and height, and column spacing</li>
    <li>Which machines the system should feed</li>
  </ol>
  ${faqBlock(longFaqs)}
</div>
${ctaBand("Get a layout for your building", "Send your longest bar length, bundle size and building width. We'll send a layout and a budget price.")}
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
        "Cantilever vertical storage for sheets and plates 3–12 m long and 1–2 m wide, up to 6 t per position. Protects sheets and saves floor space.",
      schema: [
        productSchema({
          name: "Kinkalteck cantilever sheet metal AS/RS",
          description:
            "Automated cantilever vertical storage and retrieval system for sheets and plates 3–12 m long and 1–2 m wide, up to 6 t per storage position.",
          path: "/products/sheet-metal-asrs/",
          specs: sheetSpecs,
        }),
        faqSchema(sheetFaqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Sheet metal AS/RS", "/products/sheet-metal-asrs/"]]),
      ],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / <span>Sheet metal AS/RS</span></nav>
  <h1>Cantilever vertical storage for sheet metal and plate</h1>
  <p class="lede">A modular cantilever rack with custom pallets stores sheets and plates up to 12 m long and delivers them to your production machines on demand. No more stacking damage, and far less floor space.</p>
  <div class="gallery">
    ${photo("sheet-metal-asrs", "Kinkalteck cantilever sheet metal storage tower with loading trolleys", { eager: true, cls: "g-main" })}
    ${photo("sheet-metal-station", "Loading station of a cantilever sheet metal store")}
    ${photo("sheet-metal-install", "Cantilever sheet metal storage installed in a factory")}
  </div>
  <h2>Specifications</h2>
  ${specTable(sheetSpecs)}
  <h2>What makes it different</h2>
  <ul>
    <li><strong>More levels in the same height.</strong> A lower level pitch than conventional AS/RS fits more storage into your building.</li>
    <li><strong>Sheets stay flat and clean.</strong> Each load sits on its own custom pallet instead of in a stack.</li>
    <li><strong>Storage next to production.</strong> Fewer handling moves between the store and your cutting and forming machines.</li>
    <li><strong>Quick to install.</strong> A modular rack that goes up fast and grows with you.</li>
  </ul>
  ${faqBlock(sheetFaqs)}
</div>
${ctaBand("Get a layout for your sheet store", "Send your sheet sizes, weights and quantities. We'll send a layout and a budget price.")}
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
        "Vertical storage for long profiles, bars, tubes, sheet metal and tooling. Compare Kinkalteck AS/RS systems and request a budget price.",
      schema: [breadcrumbSchema([["Home", "/"], ["Products", "/products/"]])],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Products</span></nav>
  <h1>Automated storage systems for metal materials</h1>
  <p class="lede">Choose by what you store and how much space you have. If your building suits more than one type, we compare the number of positions and the cost for you.</p>
  <div class="table-wrap"><table>
    <thead><tr><th scope="col">System</th><th scope="col">Stores</th><th scope="col">Size and load</th><th scope="col">Positions</th></tr></thead>
    <tbody>
      <tr><td><a href="/products/long-material-asrs/">Long material AS/RS (honeycomb)</a></td><td>Bars, profiles, tubes, pipes</td><td>3–12 m, up to 6 t per position</td><td>100–9,999</td></tr>
      <tr><td><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS (cantilever)</a></td><td>Sheets and plates</td><td>3–12 m × 1–2 m, up to 6 t per position</td><td>50–9,999</td></tr>
      <tr><td><a href="/products/overhead-crane-storage/">Overhead crane storage</a></td><td>Large long bundles, usually without cassettes</td><td>Ask us</td><td>About a third more positions than honeycomb in the same space</td></tr>
      <tr><td>Mini vertical storage</td><td>Tools, dies, moulds, MRO parts</td><td>Ask us</td><td>Ask us</td></tr>
    </tbody>
  </table></div>
  <h2>Honeycomb or overhead crane storage?</h2>
  <p>Space decides first. Where the building suits both, overhead crane storage usually fits more positions into the same space and costs less per position, because most material doesn't need a cassette. Honeycomb storage keeps every bundle in its own cassette and can sit directly above your machines.</p>
</div>
${ctaBand("Not sure which system fits?", "Send your material list and floor plan, and we'll recommend a system type with a budget price.")}
`,
    }),
};


const craneSpecs = [
  ["Material", "Long bundles of bars, profiles and tubes"],
  ["Cassettes", "Usually not required"],
  ["Positions in the same space", "About 200, where honeycomb storage fits about 150"],
  ["Position size", "Material + 700 mm length, + 100 mm width, + 100 mm height"],
  ["Crane height allowance", "About 1,500 mm above the top level"],
  ["First storage level", "About 1,000 mm above the floor"],
  ["Typical floor load requirement", "10 t/m²"],
];

const craneFaqs = [
  [
    "When is overhead crane storage the better choice?",
    "When the building has the height for the crane and you want the most positions and the lowest cost per position. Space decides first; when the building suits both types, we compare positions and cost for you.",
  ],
  [
    "Do I need cassettes?",
    "Usually not. Most bundles are stored directly in the rack, which saves the cost and weight of cassettes. Honeycomb storage, by contrast, needs a cassette in every position.",
  ],
];

const cranePage = {
  path: "/products/overhead-crane-storage/",
  render: () =>
    layout({
      path: "/products/overhead-crane-storage/",
      title: "Overhead Crane Vertical Storage for Long Bundles | Kinkalteck",
      description:
        "Crane-served vertical storage for long bundles, usually without cassettes. About a third more positions than honeycomb storage in the same space.",
      schema: [
        productSchema({
          name: "Kinkalteck overhead crane vertical storage",
          description:
            "Automated overhead-crane vertical storage for long bundles of bars, profiles and tubes, usually without cassettes.",
          path: "/products/overhead-crane-storage/",
          specs: craneSpecs,
        }),
        faqSchema(craneFaqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Overhead crane storage", "/products/overhead-crane-storage/"]]),
      ],
      body: `
<div class="wrap narrow page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / <span>Overhead crane storage</span></nav>
  <h1>Overhead crane vertical storage for long bundles</h1>
  <p class="lede">An automated overhead crane serves tall racks of long material. Most bundles are stored without cassettes, so the same space holds more positions at a lower cost per position.</p>
  <div class="gallery">
    ${photo("crane-store-long", "Overhead crane serving a long-material storage rack", { eager: true, cls: "g-main" })}
    ${photo("crane-store-render", "3D view of an overhead crane storage system with trucks at the loading area")}
    ${photo("crane-store-install", "Overhead crane storage during installation")}
  </div>
  <h2>Specifications</h2>
  ${specTable(craneSpecs)}
  <p class="fine">Load, length and number of positions are set for each project. Send your material list for a full specification.</p>
  <h2>What makes it different</h2>
  <ul>
    <li><strong>More positions per square metre.</strong> In the same space, about 200 positions instead of about 150 with honeycomb storage.</li>
    <li><strong>No cassettes for most loads.</strong> Lower system cost and less dead weight.</li>
    <li><strong>Lower cost per position.</strong> A strong fit for large stocks of similar bundles.</li>
    <li><strong>Same software.</strong> QR-coded bundles, WMS, WCS and ERP connection, as in every Kinkalteck system.</li>
  </ul>
  ${faqBlock(craneFaqs)}
</div>
${ctaBand("Compare crane and honeycomb storage for your building", "Send your floor plan and material list. We'll compare positions and cost for both types.")}
`,
    }),
};

export default [overview, longPage, sheetPage, cranePage];
