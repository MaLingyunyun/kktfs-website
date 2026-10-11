# kktfs.com — Kinkalteck 立库英文网站

静态网站，不依赖任何第三方程序包。每一页都是现成的 HTML，Google 和 AI 搜索（ChatGPT、Claude、Perplexity）都能完整读取。

## 目录说明

| 位置 | 内容 |
| --- | --- |
| `site.config.mjs` | 公司名称、地址、邮箱、WhatsApp/Zalo/LINE、社交账号。**联系方式只改这里。** 留空的项目不会在网站上显示 |
| `src/pages/` | 首页、产品页、联系页、文章列表的页面模板 |
| `content/insights/` | 行业文章和技术指南，每篇一个 `.md` 文件 |
| `public/` | 样式、logo、图片、字体、图标，原样复制到网站 |
| `docs/fonts.md` | **字体规定：中英文网站和所有配图、视频只用可商用字体**（目前用 Archivo，SIL OFL 开源协议，已放在 `public/fonts/`） |
| `functions/api/enquiry.js` | 询盘表单的处理程序（Cloudflare Pages Function） |
| `build.mjs` | 生成网站，同时生成 sitemap.xml、robots.txt、llms.txt 和旧网址跳转 |

## 发一篇新文章

在 `content/insights/` 新建一个文件，文件名就是网址（英文小写加横线），例如 `vietnam-industrial-land-2026.md`：

```
---
title: 文章标题
description: 一两句话摘要，会显示在 Google 和 AI 搜索结果里
date: 2026-10-20
updated: 2026-10-20
author: Kinkalteck engineering team
---

第一段直接给出结论和关键数字。

## 小标题

正文……
```

提交到 GitHub 后，Cloudflare 会在 1–2 分钟内自动更新网站。

## Cloudflare Pages 设置（只需一次）

1. Cloudflare 后台 → Workers & Pages → Create → Pages → 连接 GitHub 仓库 `kktfs-website`
2. Build command：`node build.mjs`　Build output directory：`dist`
3. Settings → Environment variables（让表单发邮件）：
   - `RESEND_API_KEY`：在 resend.com 注册后获取
   - `ENQUIRY_TO`：接收询盘的邮箱
   - `ENQUIRY_FROM`：发件地址，例如 `website@kktfs.com`（需在 Resend 验证域名）
4. Custom domains → 绑定 `www.kktfs.com`

## 本地预览

```
node build.mjs
```

然后用任意静态服务器打开 `dist/` 文件夹。
