// Decorative background drawing: front elevation of a honeycomb store, drawn as blueprint line art.
// Written to /img/blueprint-rack.svg by build.mjs. Purely decorative (CSS background).
export function blueprintRack() {
  const W = 1200, H = 640, floor = 600, top = 70;
  const cols = [60, 330, 600, 870, 1140]; // rack bays; the aisle sits between 330 and 600 at the stacker crane
  const rowH = 44;
  let g = "";
  const rnd = (i) => ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1; // stable pseudo-random
  let k = 0;
  // uprights
  for (const x of cols) g += `<path d="M${x} ${top}V${floor}"/>`;
  // cassettes in bays 0-1 and 2-4 (skip the aisle bay 1-2)
  for (const [a, b] of [[0, 1], [2, 3], [3, 4]]) {
    const x0 = cols[a] + 10, x1 = cols[b] - 10;
    for (let y = top + 14; y + rowH <= floor - 40; y += rowH) {
      g += `<path d="M${cols[a]} ${y + rowH}H${cols[b]}"/>`; // beam
      const filled = rnd(k++) > 0.18;
      g += `<rect x="${x0}" y="${y + 8}" width="${x1 - x0}" height="${rowH - 12}" rx="2"/>`;
      if (filled) {
        // bundle ends: round bars or tubes packed along the cassette
        const r = 4 + Math.floor(rnd(k++) * 3);
        const tube = rnd(k++) > 0.6;
        for (let cx = x0 + 10 + r; cx < x1 - r - 6; cx += r * 2 + 3) {
          g += `<circle cx="${cx}" cy="${y + rowH - 4 - r - 3}" r="${r}"/>`;
          if (tube) g += `<circle cx="${cx}" cy="${y + rowH - 4 - r - 3}" r="${r - 2.5}"/>`;
        }
      }
    }
  }
  // stacker crane mast and carriage in the aisle
  const mx = 465;
  g += `<path d="M${mx - 26} ${top - 30}V${floor}M${mx + 26} ${top - 30}V${floor}M${mx - 26} ${top - 30}H${mx + 26}"/>`;
  for (let y = top; y + 40 <= floor; y += 40) g += `<path d="M${mx - 26} ${y}L${mx + 26} ${y + 40}"/>`;
  g += `<rect x="${mx - 120}" y="${top + 238}" width="240" height="30" rx="3"/><path d="M${mx - 110} ${top + 253}H${mx + 110}"/>`;
  // floor and rail
  g += `<path d="M20 ${floor}H${W - 20}M20 ${floor + 6}H${W - 20}"/>`;
  // dimension lines
  const dim = (x1, x2, y, label) =>
    `<path d="M${x1} ${y - 8}V${y + 8}M${x2} ${y - 8}V${y + 8}M${x1} ${y}H${x2}M${x1 + 12} ${y - 5}L${x1} ${y}L${x1 + 12} ${y + 5}M${x2 - 12} ${y - 5}L${x2} ${y}L${x2 - 12} ${y + 5}"/>`;
  g += dim(cols[0], cols[1], top - 30, "BAY A");
  g += dim(cols[2], cols[4], top - 30, "BAY B");
  g += `<path d="M${W - 30} ${top}V${floor}M${W - 38} ${top}H${W - 22}M${W - 38} ${floor}H${W - 22}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" fill="none" stroke="#9cc3ee" stroke-opacity="0.32" stroke-width="1.1" font-family="sans-serif" font-size="13" letter-spacing="2"><style>text{fill:#9cc3ee;fill-opacity:.45;stroke:none;text-anchor:middle}</style>${g}</svg>`;
}
