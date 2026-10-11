# Font policy (English and Chinese sites)

Every font used on kktfs.com, and in graphics, videos and social posts made for it, must be licensed for commercial use. We self-host the files we use, so the site also renders in mainland China, where Google Fonts is blocked.

## In use now

| Font | Use | License | Files |
| --- | --- | --- | --- |
| Archivo (Omnibus-Type), variable, weights 400–700, widths 87–118 | All English text: headings use the wide setting, body the normal width, tables and small labels the narrow width | SIL Open Font License 1.1, free for commercial use, self-hosting allowed | `public/fonts/archivo-latin.woff2`, `public/fonts/archivo-latin-ext.woff2` (loaded only for Vietnamese and other extended Latin letters), license in `public/fonts/Archivo-OFL.txt` |

The WOFF2 files are subsets of the official Google Fonts release (`ofl/archivo`), built with fontTools.

## Chinese site

Use one of these, self-hosted and subset per page:

- **Source Han Sans / Noto Sans SC (思源黑体)**: SIL OFL 1.1. First choice.
- **Source Han Serif / Noto Serif SC (思源宋体)**: SIL OFL 1.1, for headings if a serif is wanted.
- **Alibaba PuHuiTi (阿里巴巴普惠体)** or **HarmonyOS Sans (鸿蒙黑体)**: free for commercial use under their own licenses. Keep a copy of the license with the files.

Fallback names such as `"PingFang SC"` or `"Microsoft YaHei"` may appear at the end of a CSS font stack, because the visitor's own system supplies them. Never upload or embed their files, and never use them in images.

## Never use without a paid license

- 方正 (FounderType), 汉仪 (Hanyi), 造字工房, 华康 (DynaComware) fonts
- Microsoft YaHei (微软雅黑), SimHei (黑体), SimSun (宋体) in logos, images, videos or embedded files
- Helvetica, Futura, DIN and other retail fonts

This rule covers website images, posters, brochure PDFs, video captions and LinkedIn or Facebook graphics, not only the website's CSS. Chinese companies are regularly sued over 方正 and 汉仪 fonts in images.
