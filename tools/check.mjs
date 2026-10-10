// Crawl the built site over HTTP and verify every internal link/asset returns 200.
// Usage: node tools/check.mjs [base=http://127.0.0.1:8787]
import { readdir, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
const BASE = process.argv[2] || 'http://127.0.0.1:8787';
const ORIGIN = 'https://earntolink.com';
async function walk(d) { const out = []; for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) out.push(...await walk(p)); else out.push(p); } return out; }
const files = (await walk(ROOT)).filter((f) => f.endsWith('.html'));
const targets = new Map(); const ext = new Set(); const problems = [];
for (const f of files) {
  const html = await readFile(f, 'utf8');
  const from = f.slice(ROOT.length) || '/';
  for (const m of html.matchAll(/(?:href|src|content)="([^"]+)"/g)) {
    let u = m[1].replace(/&amp;/g, '&');
    if (u.startsWith(ORIGIN)) u = u.slice(ORIGIN.length) || '/';
    if (/^(mailto:|#|data:)/.test(u)) continue;
    if (/^https?:/.test(u)) { ext.add(u); continue; }
    if (!u.startsWith('/')) continue;
    u = u.split('#')[0];
    if (!targets.has(u)) targets.set(u, from);
  }
  // in-page anchors
  for (const m of html.matchAll(/href="(\/[^"#]*)#([^"]+)"/g)) {
    const page = m[1].endsWith('/') ? m[1] + 'index.html' : m[1];
    try { const t = await readFile(join(ROOT, page), 'utf8'); if (!t.includes(`id="${m[2]}"`)) problems.push(`missing anchor #${m[2]} on ${m[1]} (from ${from})`); } catch { problems.push(`anchor target page missing ${m[1]}`); }
  }
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push('no title ' + from);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) problems.push('h1 count != 1 ' + from);
}
let ok = 0;
for (const [u, from] of targets) {
  const r = await fetch(BASE + u);
  if (r.status === 200) ok++; else problems.push(`${r.status} ${u} (from ${from})`);
}
console.log(JSON.stringify({ html: files.length, internalUrls: targets.size, ok, external: [...ext].filter((u) => !u.startsWith('https://cdn.jsdelivr')).sort(), problems }, null, 2));
process.exit(problems.length ? 1 : 0);
