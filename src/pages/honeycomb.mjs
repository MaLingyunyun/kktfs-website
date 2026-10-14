import { layout, photo, siteVideo, wechatCard, specTable, ctaBand, faqBlock, faqSchema, productSchema, breadcrumbSchema, pageHead, icon, esc } from "../lib.mjs";
import { site } from "../../site.config.mjs";

// Honeycomb long-material AS/RS. Every figure on this page is boss-confirmed (see the project fact sheet).
const PATH = "/products/long-material-asrs/";

export const longSpecs = [
  ["Material", "Steel and non-ferrous bars, profiles, tubes and pipes"],
  ["Material length", "3–12 m"],
  ["Load per storage position", "Up to 6 t"],
  ["Position height and width", "Made to fit your bundle size"],
  ["Number of positions", "100–3,000"],
  ["Retrieval method", "Cassette (pallet) pull-out"],
  ["Retrieval robot travel speed", "120 m/min"],
  ["Retrieval robot acceleration", "0.5 m/s²"],
  ["Retrieval cycle", "About 90 s (2,000-position system)"],
  ["Rack", "Modular, quick to install, extendable"],
  ["Software", "Kinkalteck WMS and WCS, API connection to your ERP"],
];

const faqs = [
  [
    "How does a honeycomb store work?",
    "Each bundle sits in its own cassette in a modular rack. A gantry retrieval robot travels along the aisle, lifts to the right level and pulls the cassette out like a drawer, then delivers it to the outbound station next to your saws. The WMS records every move.",
  ],
  [
    "Why are the levels lower than in other AS/RS?",
    "Each honeycomb level is about 200 mm lower than in a fork-type AS/RS. Five honeycomb levels fit where a stacker-aisle store fits four, about 20% more storage in the same building height.",
  ],
  [
    "Does every position need a cassette?",
    "Yes. Every position holds a cassette sized to your bundles. The cassette protects the material and lets the retrieval robot pull it out.",
  ],
  [
    "What happens to part-used bundles?",
    "They go straight back into storage in their cassette, and the WMS updates the stock, so nothing is left lying beside the saw.",
  ],
  [
    "Can the system connect to our ERP?",
    "Yes. Our WMS tracks every bundle by QR code and position in real time and exchanges stock and order data with your ERP through an API. We develop the software ourselves and adapt it to your process.",
  ],
  [
    "Can I see a honeycomb store before I decide?",
    "Yes. Our engineers can build a 3D simulation of your own plant from your floor plan and material list. Visits to running systems can be arranged with our customers' agreement.",
  ],
  [
    "How do I get a quote?",
    "Send your longest material length, bundle size and weight, how many bundles you store and your building dimensions. Our team replies within one working day.",
  ],
];

// Elevation drawing: same building height, 4 fork-type levels against 5 honeycomb levels.
// The numbers in the drawing are the boss-confirmed claim (about 200 mm lower per level, about 20% more storage).
function levelsDrawing() {
  const top = 56, floor = 356, H = floor - top;
  const rack = (x0, n, cls) => {
    const w = 210, pitch = H / n;
    let g = `<g class="lv-rack ${cls}"><path class="lv-up" d="M${x0} ${top}V${floor}M${x0 + w} ${top}V${floor}"/>`;
    for (let i = 0; i < n; i++) {
      const y = floor - (i + 1) * pitch;
      const cy = y + pitch - 12;
      g += `<path class="lv-beam" d="M${x0} ${y + pitch}H${x0 + w}"/>`;
      g += `<rect class="lv-cas" x="${x0 + 10}" y="${cy - 26}" width="${w - 20}" height="30" rx="2"/>`;
      for (let k = 0; k < 9; k++) g += `<circle class="lv-bar" cx="${x0 + 28 + k * 19.5}" cy="${cy - 11}" r="8"/>`;
    }
    return g + `<path class="lv-beam" d="M${x0} ${top}H${x0 + w}"/></g>`;
  };
  return `
<svg class="levels-svg" viewBox="0 0 760 420" role="img" aria-labelledby="lv-t lv-d">
  <title id="lv-t">Four levels against five in the same height</title>
  <desc id="lv-d">Elevation of a fork-type AS/RS with four storage levels next to a Kinkalteck honeycomb store with five storage levels in the same building height. Each honeycomb level is about 200 mm lower.</desc>
  <path class="lv-dim" d="M54 ${top}V${floor}M46 ${top}H62M46 ${floor}H62M49 ${top + 12}L54 ${top}L59 ${top + 12}M49 ${floor - 12}L54 ${floor}L59 ${floor - 12}"/>
  <text class="lv-dimt" x="40" y="${(top + floor) / 2}" transform="rotate(-90 40 ${(top + floor) / 2})">Same building height</text>
  ${rack(100, 4, "is-fork")}
  ${rack(430, 5, "is-honey")}
  <path class="lv-floor" d="M80 ${floor}H680"/>
  <text class="lv-name" x="205" y="${floor + 30}">Fork-type AS/RS</text>
  <text class="lv-sub" x="205" y="${floor + 52}">4 levels</text>
  <text class="lv-name is-honey" x="535" y="${floor + 30}">Kinkalteck honeycomb</text>
  <text class="lv-sub is-honey" x="535" y="${floor + 52}">5 levels, about 20% more storage</text>
  <path class="lv-call" d="M652 ${floor - 60}h22M652 ${floor - 120}h22M668 ${floor - 60}V${floor - 120}"/>
  <text class="lv-callt" x="684" y="${floor - 100}">each level</text>
  <text class="lv-callt" x="684" y="${floor - 84}">about 200 mm</text>
  <text class="lv-callt" x="684" y="${floor - 68}">lower</text>
</svg>`;
}

const steps = [
  ["hc-load-station", "A bundle on the inbound station of a honeycomb store, next to the orange retrieval robot", "Receive", "Bundles arrive at the inbound station. They are weighed and labelled with a QR code, and the WMS gives each one a position."],
  ["hc-robot-lift", "The orange gantry retrieval robot lifting a cassette along a blue honeycomb rack full of bars", "Store", "The gantry retrieval robot travels along the aisle, lifts to the right level and pushes the cassette into the rack like a drawer."],
  ["hc-robot-front", "Front view of the gantry retrieval robot carrying an empty cassette frame in the aisle", "Retrieve", "When production calls for material, the robot pulls the cassette out and brings it down to the outbound station, first in, first out."],
  ["hc-saws-beside", "Saw lines installed right beside the honeycomb store, with the robot rail in the foreground", "Feed and return", "Saws stand right beside the store, so material goes straight to the machine. Part-used bundles go back into storage."],
];

const parts = [
  ["cassette", "Cassettes", "Every bundle lies in its own cassette, made to fit your bundle size. The cassette protects the material and lets the robot pull it out."],
  ["rack", "Modular honeycomb rack", "A modular rack that is quick to install and can be extended later. One aisle serves one or two rack rows."],
  ["gantry", "Gantry retrieval robot", "Travels the aisle at 120 m/min with 0.5 m/s² acceleration and pulls cassettes in and out. About 90 s per retrieval in a 2,000-position system."],
  ["weigh", "Inbound and outbound stations", "Automatic weighing on arrival, QR labelling and conveyors for loading and unloading."],
  ["software", "WMS and WCS", "Our own software tracks every bundle and position, controls the robot and connects to your ERP through an API."],
  ["fence", "Fenced robot area", "The robot works inside a fenced area, and operators load and unload at the stations outside it."],
];

const refs = [
  ["Steel pipe and bar stockholder", "Singapore", "About 800 positions, completing 2026"],
  ["Precision forging plant", "Zhejiang, China", "600 positions"],
  ["Precision steel tube maker", "China", "500 positions"],
  ["Precision forging plant", "Jiangsu, China", "300 positions"],
];

export const honeycombPage = {
  path: PATH,
  render: () =>
    layout({
      path: PATH,
      title: "Honeycomb Long-Material AS/RS for Bars, Tubes and Profiles | Kinkalteck",
      description:
        "Honeycomb vertical storage for bars, tubes and profiles 3–12 m long, up to 6 t per position, 100–3,000 positions. Gantry retrieval robot, saws beside the store, own WMS.",
      schema: [
        productSchema({
          name: "Kinkalteck honeycomb long-material AS/RS",
          description:
            "Automated honeycomb vertical storage and retrieval system for bars, profiles, tubes and pipes 3–12 m long, up to 6 t per storage position, with a gantry retrieval robot, cassette pull-out and machines installed beside the store.",
          path: PATH,
          specs: longSpecs,
        }),
        faqSchema(faqs),
        breadcrumbSchema([["Home", "/"], ["Products", "/products/"], ["Honeycomb long-material AS/RS", PATH]]),
      ],
      body: `
${pageHead({
  crumbs: [["Home", "/"], ["Products", "/products/"], ["Honeycomb long-material AS/RS", ""]],
  title: "Honeycomb storage for bars, tubes and profiles",
  lede: "Every bundle sits in its own cassette in a modular honeycomb rack. A gantry retrieval robot stores and retrieves it, and your saws stand right beside the store, a patented embedded design, so storage and production share one area.",
  iconName: "bar-round",
  figures: [["Material length", "3–12 m"], ["Load per position", "Up to 6 t"], ["Storage positions", "100–3,000"]],
})}

<div class="wrap product-hero">
  <figure>
    ${photo("hc-robot-wide", "Kinkalteck honeycomb store: orange gantry retrieval robot in front of a blue rack full of bar bundles", { eager: true })}
    <figcaption>A running honeycomb store in a customer's plant in China. The customer's name is confidential.</figcaption>
  </figure>
</div>

<section class="section" aria-labelledby="cycle-h">
  <div class="wrap">
    <h2 id="cycle-h">How a bundle moves through the store</h2>
    <p class="section-lede">Four steps from the truck to the saw and back, all recorded by the WMS.</p>
    <ol class="cycle">
      ${steps
        .map(
          ([img, alt, h, p]) => `<li>
        ${photo(img, alt)}
        <h3>${esc(h)}</h3>
        <p>${esc(p)}</p>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>

<section class="section section-alt" aria-labelledby="run-h">
  <div class="wrap embed-grid">
    ${siteVideo({ src: "/video/honeycomb-running.mp4", poster: "/video/honeycomb-running-poster.jpg", caption: "42 seconds of a running honeycomb store: cassette loading, the retrieval robot at work and the saw lines beside the store. Customer name confidential." })}
    <div>
      <h2 id="run-h">See one running</h2>
      <p>This is real footage from a customer's plant, not an animation. Watch the robot pull a cassette like a drawer and bring the material down to the saw lines beside the store.</p>
      <ul class="checks">
        <li>Bundles stay in their cassette from arrival to the saw</li>
        <li>About 90 seconds per retrieval in a 2,000-position system</li>
        <li>Operators work at the stations, outside the robot area</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="lv-h">
  <div class="wrap levels-grid">
    <div>
      <h2 id="lv-h">More levels in the same building</h2>
      <p>A honeycomb cassette needs less height than a pallet handled by forks. Each level is about 200 mm lower than in a fork-type AS/RS, so five honeycomb levels fit where a stacker-aisle store fits four.</p>
      <p>That is about 20% more storage without a taller building, or the same storage in a lower one.</p>
    </div>
    <figure class="levels-figure">${levelsDrawing()}</figure>
  </div>
</section>

<section class="section section-alt" aria-labelledby="parts-h">
  <div class="wrap">
    <h2 id="parts-h">What the system includes</h2>
    <ul class="parts">
      ${parts.map(([ic, h, p]) => `<li>${icon(ic, "part-icon")}<h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("")}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="sw-h">
  <div class="wrap hub-grid">
    <div>
      <h2 id="sw-h">Software that knows every bundle</h2>
      <p>The store runs on our own warehouse management system (WMS) and control system (WCS). Because we write the software ourselves, we adapt it to your process and keep changing it as your production changes.</p>
      <ul class="saves">
        <li>${icon("qr")}<span>QR code and digital record for every bundle</span></li>
        <li>${icon("weigh")}<span>Weight recorded automatically on arrival</span></li>
        <li>${icon("software")}<span>Stock and orders exchanged with your ERP through an API</span></li>
        <li>${icon("buffer")}<span>Buffer stock between processes, such as heat treatment and cutting</span></li>
      </ul>
    </div>
    <figure class="hub-side">
      ${photo("hc-dashboard", "Live dashboard of a honeycomb store showing stock, retrieval robot status and daily inbound and outbound statistics")}
      <figcaption class="fine">The live dashboard in a customer's plant: stock, robot status and daily movements.</figcaption>
    </figure>
  </div>
</section>

<section class="section section-dark blueprint sim" id="simulation" aria-labelledby="sim-h">
  <div class="wrap">
    <div class="sim-head">
      <h2 id="sim-h">See your own plant in 3D before you decide</h2>
      <p>Send us your floor plan and material list. Our engineers build a 3D simulation of your plant: your storage today next to a honeycomb store, with the material flow running from truck to saw. You receive the simulation video with your proposal.</p>
    </div>
    <div class="sim-compare">
      <figure>
        <span class="ba-label">Today</span>
        ${photo("sim-before", "3D simulation of a sample plant today: bars stored in floor stacks and moved by an overhead crane")}
        <figcaption>Floor stacks and an overhead crane</figcaption>
      </figure>
      <figure>
        <span class="ba-label ba-after">With a honeycomb store</span>
        ${photo("sim-after", "3D simulation of the same sample plant with a Kinkalteck honeycomb store and retrieval robot")}
        <figcaption>The same building with a honeycomb store</figcaption>
      </figure>
    </div>
    <div class="sim-actions">
      <a class="btn btn-yellow" href="/contact/?topic=simulation">Request a 3D simulation of my plant</a>
      ${wechatCard({ size: 116, cls: "on-dark" })}
    </div>
    <p class="fine sim-note">Sample plant shown. Your simulation is prepared from your own data and shared only with you.</p>
  </div>
</section>

<section class="section" aria-labelledby="spec-h">
  <div class="wrap narrow">
    <h2 id="spec-h">Specifications</h2>
    ${specTable(longSpecs)}
    <h2>What we need for your quote</h2>
    <ol class="need">
      <li>Longest material length and the bundle width, height and weight</li>
      <li>How many bundles or product types you store</li>
      <li>Your building's width, length and height</li>
      <li>Which machines the system should feed</li>
    </ol>
  </div>
</section>

<section class="section section-alt" aria-labelledby="refs-h">
  <div class="wrap">
    <h2 id="refs-h">Honeycomb stores we have built</h2>
    <p class="section-lede">Customer names are confidential. Every project saved floor space, operators and handling that adds no value.</p>
    <div class="table-wrap"><table>
      <thead><tr><th scope="col">Customer</th><th scope="col">Region</th><th scope="col">Size</th></tr></thead>
      <tbody>${refs.map(([a, b, c]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td><td>${esc(c)}</td></tr>`).join("")}</tbody>
    </table></div>
  </div>
</section>

<section class="section">
  <div class="wrap narrow">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Get a honeycomb store planned for your plant", "Send your material list and floor plan. Our team replies within one working day, and we can include a 3D simulation of your plant.")}
`,
    }),
};
