// Kinkalteck icon set: 24×24 line drawings in the style of a technical drawing.
// Stroke uses currentColor, so CSS sets the colour. build.mjs writes these into /icons.svg.
export const icons = {
  // Materials, drawn as the cut end of the stock
  "bar-round": `<circle cx="12" cy="12" r="8"/><path d="M7.2 16.8 16.8 7.2M5.4 13.4l8-8M10.6 18.6l8-8"/>`,
  tube: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.6"/>`,
  profile: `<path d="M5 4.5h14v3h-5.4v9H19v3H5v-3h5.4v-9H5z"/>`,
  sheet: `<path d="M3 16.5 8 19h13l-5-2.5z"/><path d="M3 12.5 8 15h13l-5-2.5z"/><path d="M3 8.5 8 11h13l-5-2.5z"/>`,
  "long-load": `<rect x="2.5" y="13.5" width="19" height="4" rx="2"/><path d="M2.5 6v4.5M21.5 6v4.5M2.5 8.2h19M5.5 6.7 2.6 8.2l2.9 1.5M18.5 6.7l2.9 1.5-2.9 1.5"/>`,
  tooling: `<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M4 10h16M4 14.5h16M10.5 7.5h3M10.5 12.2h3M10.5 16.8h3"/>`,
  // Material flow
  weigh: `<path d="M3 19.5h18M5 17h14M8 17v-2.5h8V17"/><circle cx="9.6" cy="11.4" r="2.4"/><circle cx="14.4" cy="11.4" r="2.4"/><circle cx="12" cy="7.3" r="2.4"/>`,
  qr: `<rect x="4" y="4" width="6" height="6" rx="0.6"/><rect x="14" y="4" width="6" height="6" rx="0.6"/><rect x="4" y="14" width="6" height="6" rx="0.6"/><path d="M14 14h2.5v2.5H14zM18 18h2v2h-2zM17.5 14H20M14 19v1"/>`,
  feed: `<rect x="2.5" y="9.5" width="11" height="3" rx="0.8"/><path d="M2.5 14.5h13"/><circle cx="4.5" cy="16.8" r="1.3"/><circle cx="9" cy="16.8" r="1.3"/><circle cx="13.5" cy="16.8" r="1.3"/><path d="M15.5 8.5l2.5 2.5-2.5 2.5"/><path d="M19.5 5v14.5"/>`,
  buffer: `<path d="M3.5 4v16M11.5 4v16M3.5 9.3h8M3.5 14.7h8"/><path d="M20.5 18a6 6 0 0 0-6-6h-1.2"/><path d="M15.4 9.7 13 12l2.4 2.3"/>`,
  // Advantages
  "one-area": `<path d="M2.5 20.5h19"/><path d="M4 20.5V4h8v16.5M4 8.2h8M4 12.3h8M4 16.4h8"/><rect x="14.5" y="13" width="6" height="7.5" rx="0.6"/><path d="M16.5 13v-2h2v2"/>`,
  levels: `<path d="M3.5 4v16M10 4v16M3.5 7.2h6.5M3.5 10.4h6.5M3.5 13.6h6.5M3.5 16.8h6.5M14 4v16M20.5 4v16M14 8h6.5M14 12h6.5M14 16h6.5"/>`,
  software: `<rect x="3" y="4.5" width="18" height="13" rx="1"/><path d="M8 21h8M12 17.5V21"/><circle cx="8.5" cy="11" r="1.6"/><circle cx="15.5" cy="11" r="1.6"/><path d="M10.1 11h3.8"/>`,
  cost: `<path d="M3.5 12.6 11.4 4.7h7.9v7.9l-7.9 7.9z"/><circle cx="15.6" cy="8.4" r="1.3"/><path d="M8.6 12.4l3 3"/>`,
  delivery: `<path d="M2.5 6.5h11v9.5h-11zM13.5 9.5h4l3.5 3.5v3h-7.5"/><circle cx="6.5" cy="17.3" r="1.7"/><circle cx="17" cy="17.3" r="1.7"/>`,
  // What customers save
  floor: `<rect x="3.5" y="3.5" width="17" height="17" rx="0.8"/><rect x="8.5" y="8.5" width="7" height="7" rx="0.5"/><path d="M4.8 4.8l2.7 2.7M19.2 4.8l-2.7 2.7M4.8 19.2l2.7-2.7M19.2 19.2l-2.7-2.7"/>`,
  operator: `<circle cx="12" cy="7" r="3.2"/><path d="M5.5 20.5v-2.2a4.8 4.8 0 0 1 4.8-4.8h3.4a4.8 4.8 0 0 1 4.8 4.8v2.2"/>`,
  hook: `<path d="M3 3.5h18M12 3.5v4"/><rect x="9.5" y="7.5" width="5" height="3" rx="0.5"/><path d="M12 10.5v3.2a2.8 2.8 0 1 1-2.8 2.8"/>`,
  // Contact
  mail: `<rect x="3" y="5.5" width="18" height="13" rx="1"/><path d="m3.6 6.4 8.4 6.6 8.4-6.6"/>`,
  phone: `<path d="M8.4 3.5H5.6a1.6 1.6 0 0 0-1.6 1.7A15.3 15.3 0 0 0 18.8 20a1.6 1.6 0 0 0 1.7-1.6v-2.8l-3.8-1.6-2 2a11 11 0 0 1-5.2-5.2l2-2z"/>`,
  chat: `<path d="M20.5 11.5a8.5 7.5 0 0 1-12.4 6.7L3.5 19.5l1.4-3.8a7 7 0 0 1-1.4-4.2 8.5 7.5 0 0 1 17 0z"/>`,
  pin: `<path d="M12 21s-6.5-6.1-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.9 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/>`,
  play: `<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l5.5-3.5z"/>`,
  check: `<path d="m4.5 12.5 4.5 4.5 10.5-10.5"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
};

export const iconSprite = () =>
  `<svg xmlns="http://www.w3.org/2000/svg">${Object.entries(icons)
    .map(([id, body]) => `<symbol id="${id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`)
    .join("")}</svg>`;
