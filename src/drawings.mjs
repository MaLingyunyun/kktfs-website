// Engineering-style elevation drawings, inline SVG so text stays readable to crawlers.

export const heroElevation = () => {
  const x0 = 24, x1 = 464, top = 86, levelH = 26, levels = 8;
  const levelYs = Array.from({ length: levels }, (_, i) => top + i * levelH);
  const rackBottom = top + levels * levelH; // 294
  const floor = 392;
  const pulled = 3; // the cassette being retrieved
  const mid = (x0 + x1) / 2;
  const cassette = (y, cls = "cassette") => `
    <g class="${cls}">
      <rect x="${x0 + 6}" y="${y + 6}" width="${x1 - x0 - 12}" height="${levelH - 10}" rx="1.5"/>
      <line x1="${x0 + 14}" y1="${y + 11}" x2="${x1 - 14}" y2="${y + 11}"/>
      <line x1="${x0 + 14}" y1="${y + 15}" x2="${x1 - 14}" y2="${y + 15}"/>
    </g>`;
  return `
<svg class="elevation" viewBox="0 0 640 420" role="img" aria-labelledby="elev-t elev-d">
  <title id="elev-t">Front elevation of a Kinkalteck honeycomb long-material storage system</title>
  <desc id="elev-d">Eight storage levels of cassettes holding steel bars up to 12 metres long sit directly above the production floor. A stacker crane lowers one cassette to the saw below. Each storage position carries up to 6 tonnes.</desc>
  <g class="dim">
    <line x1="${x0}" y1="40" x2="${x1}" y2="40"/>
    <line x1="${x0}" y1="30" x2="${x0}" y2="${top - 6}"/>
    <line x1="${x1}" y1="30" x2="${x1}" y2="${top - 6}"/>
    <path d="M${x0} 40 l10 -4 v8z M${x1} 40 l-10 -4 v8z" class="dim-head"/>
    <rect x="${mid - 52}" y="27" width="104" height="26" class="dim-bg"/>
    <text x="${mid}" y="46" text-anchor="middle" class="dim-label">3–12 m</text>
  </g>
  <g class="rack">
    ${[x0, 170, 318, x1].map((x) => `<line x1="${x}" y1="${top}" x2="${x}" y2="${floor}"/>`).join("")}
    ${levelYs.concat([rackBottom]).map((y) => `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="beam"/>`).join("")}
  </g>
  ${levelYs.filter((_, i) => i !== pulled).map((y) => cassette(y)).join("")}
  <g class="slot-empty"><rect x="${x0 + 6}" y="${levelYs[pulled] + 6}" width="${x1 - x0 - 12}" height="${levelH - 10}" rx="1.5"/></g>
  <g class="lift">
    <line x1="${x0 + 60}" y1="${top - 10}" x2="${x0 + 60}" y2="312" class="cable"/>
    <line x1="${x1 - 60}" y1="${top - 10}" x2="${x1 - 60}" y2="312" class="cable"/>
    <g class="moving">${cassette(levelYs[pulled], "cassette is-live")}</g>
  </g>
  <g class="machine">
    <rect x="284" y="340" width="150" height="${floor - 340}" rx="2"/>
    <rect x="312" y="322" width="50" height="18" rx="2"/>
    <line x1="284" y1="356" x2="434" y2="356"/>
    <rect x="70" y="360" width="190" height="10" rx="1" class="table"/>
  </g>
  <line x1="0" y1="${floor}" x2="640" y2="${floor}" class="floor"/>
  <g class="callouts">
    <line x1="${x1 + 4}" y1="${levelYs[1] + 13}" x2="${x1 + 22}" y2="${levelYs[1] + 13}"/>
    <text x="${x1 + 28}" y="${levelYs[1] + 9}">Up to 6 t</text>
    <text x="${x1 + 28}" y="${levelYs[1] + 27}">per position</text>
    <line x1="${x1 + 4}" y1="${levelYs[pulled] + 13}" x2="${x1 + 22}" y2="${levelYs[pulled] + 13}"/>
    <text x="${x1 + 28}" y="${levelYs[pulled] + 9}">About 90 s</text>
    <text x="${x1 + 28}" y="${levelYs[pulled] + 27}">per retrieval</text>
    <line x1="${x1 + 4}" y1="366" x2="${x1 + 22}" y2="366"/>
    <text x="${x1 + 28}" y="362">Machines stay</text>
    <text x="${x1 + 28}" y="380">on the floor below</text>
  </g>
</svg>`;
};
