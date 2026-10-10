// Structure parity check: node tools/i18n-check.mjs [code ...]
// Compares every src/i18n/<code>.mjs against en.mjs: same keys, same array lengths,
// same section ids, HTML tag counts match, no em dash, no leftover English in long strings (warning).
import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const dir = new URL('../src/i18n/', import.meta.url);
const en = (await import(new URL('en.mjs', dir))).default;
const codes = process.argv.slice(2).length ? process.argv.slice(2) : (await readdir(dir)).filter((f) => f.endsWith('.mjs')).map((f) => f.slice(0, -4));
let bad = 0;
const tags = (s) => (String(s).match(/<[a-z]+/g) || []).sort().join(',');
function cmp(a, b, path, errs, warns, code) {
  if (typeof a === 'function' || typeof b === 'function') return;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errs.push(`${path}: expected array`);
    if (a.length !== b.length) errs.push(`${path}: length ${b.length} != en ${a.length}`);
    a.forEach((x, i) => b[i] !== undefined && cmp(x, b[i], `${path}[${i}]`, errs, warns, code));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return errs.push(`${path}: expected object`);
    for (const k of Object.keys(a)) { if (!(k in b)) errs.push(`${path}.${k}: missing`); else cmp(a[k], b[k], `${path}.${k}`, errs, warns, code); }
    for (const k of Object.keys(b)) if (!(k in a)) errs.push(`${path}.${k}: extra key`);
    return;
  }
  if (typeof a === 'string') {
    if (typeof b !== 'string') return errs.push(`${path}: expected string`);
    if (b.includes('\u2014')) errs.push(`${path}: em dash`);
    if (path.endsWith('.id') && a !== b) errs.push(`${path}: id changed ${b}`);
    if (tags(a) !== tags(b)) errs.push(`${path}: HTML tags differ`);
    if (!b.trim() && a.trim() && !(code === 'ko' && path.endsWith('translationNote'))) errs.push(`${path}: empty`);
    if (code !== 'en' && a.length > 40 && a === b && !/^[\x00-\x7F₩→·]*$/.test(a) === false && !/(ZIP|SHA|7-Zip|@)/.test(a)) warns.push(`${path}: identical to English`);
  }
}
for (const code of codes) {
  let L; try { L = (await import(pathToFileURL(new URL(code + '.mjs', dir).pathname).href + '?t=' + Date.now())).default; } catch (e) { console.log(`✗ ${code}: import failed: ${e.message}`); bad++; continue; }
  const errs = [], warns = [];
  cmp(en, L, code, errs, warns, code);
  if (code !== 'ko' && code !== 'en' && !L.translationNote) errs.push(`${code}.translationNote: required`);
  console.log(`${errs.length ? '✗' : '✓'} ${code}: ${errs.length} errors, ${warns.length} warnings`);
  errs.slice(0, 40).forEach((e) => console.log('   E ' + e));
  warns.slice(0, 15).forEach((w) => console.log('   W ' + w));
  if (errs.length) bad++;
}
process.exit(bad ? 1 : 0);
