import { honeycombPage } from "./honeycomb.mjs";
import { layout, photo, howItWorksVideo, specTable, ctaBand, faqBlock, faqSchema, productSchema, breadcrumbSchema, pageHead, lengthRuler } from "../lib.mjs";

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
${pageHead({
  crumbs: [["Home", "/"], ["Products", "/products/"], ["Sheet metal AS/RS", ""]],
  title: "Vertical storage for sheet metal and plate",
  lede: "A modular bracket-arm rack with custom pallets stores sheets and plates up to 8 m long and delivers them to your production machines on demand, without stacking damage and in far less floor space.",
  iconName: "sheet",
  figures: [["Sheet size", "3–8 m × 1–2 m"], ["Load per position", "Up to 6 t"], ["Storage positions", "50–3,000"]],
})}
<div class="wrap narrow page">
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
${pageHead({
  crumbs: [["Home", "/"], ["Products", ""]],
  title: "Automated storage systems for metal materials",
  lede: "Choose by what you store. If more than one type suits your materials and building, our engineers compare them for you.",
})}
<div class="wrap page page-lead">
  ${lengthRuler({ title: "Compare by material length" })}
</div>
<div class="wrap narrow page page-follow">
  <div class="table-wrap"><table>
    <thead><tr><th scope="col">System</th><th scope="col">Stores</th><th scope="col">Size and load</th><th scope="col">Positions</th></tr></thead>
    <tbody>
      <tr><td><a href="/products/long-material-asrs/">Long material AS/RS (honeycomb)</a></td><td>Bars, profiles, tubes, pipes</td><td>3–12 m, up to 6 t per position</td><td>100–3,000</td></tr>
      <tr><td><a href="/products/sheet-metal-asrs/">Sheet metal AS/RS (bracket-arm)</a></td><td>Sheets and plates</td><td>3–8 m × 1–2 m, up to 6 t per position</td><td>50–3,000</td></tr>
      <tr><td><a href="/products/overhead-crane-storage/">Overhead-crane stacker AS/RS (cantilever)</a></td><td>Extra-long and heavy bars, tubes and profiles</td><td>2–20 m, up to 20 t per position</td><td>50–3,000</td></tr>
      <tr><td>Mini vertical storage</td><td>Tools, dies, moulds and parts</td><td>0.2–2 m, up to 2 t per position</td><td>100–20,000</td></tr>
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
${pageHead({
  crumbs: [["Home", "/"], ["Products", "/products/"], ["Overhead-crane stacker AS/RS", ""]],
  title: "Overhead-crane stacker storage for extra-long and heavy loads",
  lede: "An automated overhead-crane stacker serves cantilever racks for material up to 20 m long and up to 20 t per position. In 2025 it became China's first exported overhead-crane stacker AS/RS with cantilever racks.",
  iconName: "long-load",
  figures: [["Material length", "2–20 m"], ["Load per position", "Up to 20 t"], ["Storage positions", "50–3,000"]],
})}
<div class="wrap narrow page">
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

export default [overview, honeycombPage, sheetPage, cranePage];
