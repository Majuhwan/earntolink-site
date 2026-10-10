// Screenshots of key pages at 1440 and 375. Usage: PLAYWRIGHT_PATH=... node tools/screens.mjs <outDir> [base]
import { pathToFileURL } from 'node:url';
let pw; try { pw = await import('playwright'); } catch { pw = await import(pathToFileURL(process.env.PLAYWRIGHT_PATH).href); }
const { chromium } = pw.default?.chromium ? pw.default : pw;
const out = process.argv[2] || '.'; const base = process.argv[3] || 'http://127.0.0.1:8787';
const pages = (process.env.PAGES || 'home:/,products:/products/,about:/about/,detail:/products/space-map/,en-home:/en/,privacy:/privacy/,shopdetail:/en/products/stock-scan/,contact:/contact/').split(',').map((s) => s.split(':'));
const b = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
for (const [w, tag] of [[1440, 'd'], [375, 'm']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: w < 500 ? 2 : 1, colorScheme: process.env.SCHEME || 'light' });
  const p = await ctx.newPage();
  for (const [name, path] of pages) {
    await p.goto(base + path, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    const ov = await p.evaluate(() => { const W = document.documentElement.clientWidth; return [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.right > W + 1 || r.left < -1) && !e.closest('.hero-art') ; }).slice(0, 5).map((e) => e.tagName + '.' + e.className.baseVal ?? e.className); });
    const sw = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const f = `${out}/earntolink_${name}_${w}${process.env.SCHEME === 'dark' ? '_dark' : ''}.png`;
    await p.screenshot({ path: f, fullPage: true });
    console.log(f, 'hscroll=' + sw, ov.length ? 'overflow:' + ov.join(' ') : '');
  }
  await ctx.close();
}
await b.close();
