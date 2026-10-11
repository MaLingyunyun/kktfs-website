# Notes for Claude working on this repo

- Fonts: only commercially licensed fonts, self-hosted from `public/fonts/`, on both the English and the Chinese site and in any graphics or video made for it. Read `docs/fonts.md` before adding or changing a font. Never load fonts from Google Fonts or another CDN.
- Architecture: zero-dependency static generator (`node build.mjs` → `dist/`). Keep all content as real HTML text with JSON-LD; decorative SVG gets `aria-hidden="true"`; never put copy inside images.
- Public content must follow the boss-confirmed facts (no customer names, no sizing rules, no price ranges, no "zero" claims, machines stand beside the store, not below).
