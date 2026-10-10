// Renders favicon PNGs and OG images into assets/img using Playwright Chromium.
// Usage: npm run assets   (needs `playwright` resolvable, or PLAYWRIGHT_PATH=/path/to/node_modules/playwright/index.mjs)
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { heroMockup } from '../src/mockups.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG = join(ROOT, 'assets/img');
await mkdir(IMG, { recursive: true });

let pw;
try { pw = await import('playwright'); } catch {
  if (!process.env.PLAYWRIGHT_PATH) throw new Error('playwright not found; set PLAYWRIGHT_PATH');
  pw = await import(pathToFileURL(process.env.PLAYWRIGHT_PATH).href);
}
const { chromium } = pw.default?.chromium ? pw.default : pw;

const MARK = (fg = '#0b0d12', ink = '#fff') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${fg}"/><g fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"><path d="M13.6 18.4a4.2 4.2 0 0 1 0-5.9l2.6-2.6a4.2 4.2 0 0 1 5.9 5.9l-1.3 1.3"/><path d="M18.4 13.6a4.2 4.2 0 0 1 0 5.9l-2.6 2.6a4.2 4.2 0 0 1-5.9-5.9l1.3-1.3"/></g></svg>`;
await writeFile(join(IMG, 'favicon.svg'), MARK());

const css = await readFile(join(ROOT, 'assets/css/site.css'), 'utf8');
const FONT = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ deviceScaleFactor: 1, colorScheme: 'light' });

// Icons: full-bleed mark for 32/192/512; apple-touch with white padding is unnecessary since mark is square.
for (const [name, size, pad] of [['favicon-32.png', 32, 0], ['apple-touch-icon.png', 180, 0], ['icon-192.png', 192, 0], ['icon-512.png', 512, 0]]) {
  await page.setViewportSize({ width: size, height: size });
  const svg = name === 'apple-touch-icon.png'
    ? MARK().replace('rx="8"', 'rx="0"')
    : MARK();
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg ', `<svg width="${size}" height="${size}" style="display:block;padding:${pad}px" `)}</body></html>`);
  await page.screenshot({ path: join(IMG, name), omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}

// OG images, one per language (text from src/i18n/<code>.mjs)
const { LANGS } = await import('../src/data.mjs');
await page.setViewportSize({ width: 1200, height: 630 });
for (const l of LANGS) {
  let L; try { L = (await import(pathToFileURL(join(ROOT, 'src/i18n', l.code + '.mjs')).href)).default; } catch { continue; }
  const o = { name: L.brand, alt: L.brandAlt, h: L.home.h1, s: L.og.s, tags: L.og.tags };
  const chips = LANGS.map((x) => [x.label, x.html]);
  const long = Math.max(...o.h.split("<br>").map((x) => [...x].length)) > 18;
  await page.setContent(`<!doctype html><html lang="${l.html}"><head><link rel="stylesheet" href="${FONT}"><style>${css}
  body{margin:0;width:1200px;height:630px;overflow:hidden;background:#fff;word-break:${["ja","zh-cn","zh-tw","th"].includes(l.code) ? "normal" : "keep-all"}}
  .og{position:relative;display:grid;grid-template-columns:620px 1fr;height:630px}
  .l{padding:64px 0 56px 72px;display:flex;flex-direction:column}
  .b{display:flex;align-items:center;gap:14px;font-size:28px;font-weight:700;letter-spacing:-.02em}
  .b small{font-size:20px;color:#636a77;font-weight:500}
  .h{font-size:${long ? 50 : 62}px;line-height:1.14;letter-spacing:-.035em;font-weight:750;margin-top:auto;max-width:540px}
  .s{font-size:22px;color:#3b404c;margin-top:20px;line-height:1.45;max-width:520px}
  .t{display:flex;flex-wrap:wrap;gap:8px;margin-top:30px}
  .t span{border:1px solid #e7e8ec;border-radius:999px;padding:6px 14px;font-size:16px;font-weight:600;color:#3b404c}
  .r{position:relative;overflow:hidden;background:#f6f7f9;border-left:1px solid #e7e8ec;display:flex;align-items:center;justify-content:center;padding:0 10px 30px}
  .r svg{width:600px;max-width:none;height:auto}
  .u{position:absolute;right:36px;bottom:24px;font-size:18px;font-weight:600;color:#636a77}
  </style></head><body><div class="og"><div class="l"><div class="b">${MARK().replace('<svg ', '<svg width="44" height="44" ')}<span>${o.name}</span><small>${o.alt}</small></div>
  <div class="h">${o.h}</div><div class="s">${o.s}</div><div class="t">${o.tags.map((t) => `<span>${t}</span>`).join('')}</div></div>
  <div class="r">${heroMockup('', chips, [L.brand, L.brandAlt])}<div class="u">earntolink.com</div></div></div></body></html>`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(IMG, `og-${l.code}.png`), clip: { x: 0, y: 0, width: 1200, height: 630 } });
}
await browser.close();
console.log('assets rendered to assets/img');
