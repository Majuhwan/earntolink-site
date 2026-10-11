// Static site build: node build.mjs  ->  ./site
// Text: src/i18n/<code>.mjs (ko is the original, at the site root). Structure: src/data.mjs.
import { mkdir, rm, writeFile, cp, readFile, readdir, access } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE, LANGS as ALL_LANGS, DEFAULT_LANG, SERVICES, WHY_ICONS, PRIN_ICONS, CATEGORIES, PRODUCTS, NEWS, APP_PAGES } from './src/data.mjs';
import { icon, LOGO_MARK } from './src/icons.mjs';
import { productMockup, heroMockup } from './src/mockups.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'site');
const SEO = JSON.parse(await readFile(join(ROOT, 'seo.json'), 'utf8'));
const FONT_CSS = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
const V = Date.now().toString(36);

// Load every language that has a file (so a partial set still builds).
const T = {};
const LANGS = [];
for (const l of ALL_LANGS) {
  const f = join(ROOT, 'src/i18n', l.code + '.mjs');
  try { await access(f); } catch { continue; }
  T[l.code] = (await import(pathToFileURL(f).href)).default;
  LANGS.push(l);
}
const LM = Object.fromEntries(LANGS.map((l) => [l.code, l]));
const DEF = LM[DEFAULT_LANG] ? DEFAULT_LANG : 'ko';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s ?? '').replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '');
const P = (lang, p) => LM[lang].base + p;
const abs = (p) => SITE.origin + p;
const byCat = (c) => PRODUCTS.filter((p) => p.cat === c);
const mailto = `mailto:${SITE.email}`;

// ---------------------------------------------------------------- layout
function langMenu(lang, page) {
  const cur = LM[lang];
  const items = LANGS.map((l) => `<a href="${P(l.code, page.noindex || page.single ? '/' : page.path)}" hreflang="${l.hreflang}" lang="${l.html}"${l.code === lang ? ' aria-current="true"' : ''}>${l.label}</a>`).join('');
  return `<details class="lsw"><summary class="lang" aria-label="${esc(T[lang].ui.language)}">${icon('globe')}<span>${cur.label}</span></summary><div class="lsw-menu">${items}</div></details>`;
}

function layout(lang, page, body) {
  const L = T[lang];
  const u = L.ui;
  const meta = LM[lang];
  const url = abs(page.single ? page.path : P(lang, page.path));
  const og = abs(`/assets/img/og-${lang}.png`);
  const title = page.title(lang);
  const desc = strip(page.desc(lang));
  const navKeys = ['services', 'products', 'about', 'principles', 'news', 'contact'];
  const navHtml = navKeys.map((k) => `<a href="${P(lang, `/${k}/`)}"${page.section === k ? ' aria-current="page"' : ''}>${u.nav[k]}</a>`).join('');
  const ld = (page.jsonld ? page.jsonld(lang) : []).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const alt = page.noindex || page.single ? '' : LANGS.map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${abs(P(l.code, page.path))}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${abs(P(DEF, page.path))}">`;
  const ogAlt = LANGS.filter((l) => l.code !== lang).map((l) => `<meta property="og:locale:alternate" content="${l.og}">`).join('\n');
  return `<!doctype html>
<html lang="${meta.html}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
${alt}
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(L.brand)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${meta.og}">
${ogAlt}
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(L.brand + ' ' + L.brandAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${og}">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b0c0f" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="alternate" type="application/rss+xml" title="${esc(u.newsFeedTitle)}" href="${P(lang, '/feed.xml')}">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="${FONT_CSS}">
<link rel="stylesheet" href="/assets/css/site.css?v=${V}">
${ld}
</head>
<body>
<a class="skip" href="#main">${u.skip}</a>
<header class="hdr">
  <div class="wrap hdr-in">
    <a class="brand" href="${P(lang, '/')}" aria-label="${esc(u.homeAria)}">${LOGO_MARK(28)}<span>${L.brand}</span><small>${L.brandAlt}</small></a>
    <nav class="nav" id="nav" aria-label="${esc(u.mainNav)}">${navHtml}</nav>
    <div class="hdr-tools">
      ${langMenu(lang, page)}
      <button class="menu-btn" type="button" aria-controls="nav" aria-expanded="false"><span class="sr">${u.menu}</span>${icon('menu', 'ic ic-open')}${icon('close', 'ic ic-close')}</button>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
${footer(lang, page)}
<script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

function footer(lang, page) {
  const L = T[lang];
  const u = L.ui;
  const c = L.company;
  const svc = SERVICES.map((s) => `<li><a href="${P(lang, `/services/${s.id}/`)}">${L.services.items[s.id].name}</a></li>`).join('');
  const prod = CATEGORIES.map((k) => `<li><a href="${P(lang, '/products/')}#${k.id}">${L.categories[k.id].name}</a></li>`).join('');
  const langs = LANGS.map((l) => `<a href="${P(l.code, page.noindex || page.single ? '/' : page.path)}" hreflang="${l.hreflang}" lang="${l.html}"${l.code === lang ? ' aria-current="true"' : ''}>${l.label}</a>`).join('');
  return `<footer class="ftr">
  <div class="wrap">
    <div class="ftr-top">
      <div>
        <a class="brand" href="${P(lang, '/')}">${LOGO_MARK(26)}<span>${c.name}</span><small>${c.altName}</small></a>
        <p class="tag">${L.slogan}</p>
      </div>
      <div><h2>${u.footer.services}</h2><ul>${svc}</ul></div>
      <div><h2>${u.footer.products}</h2><ul>${prod}</ul>
        <h2 style="margin-top:22px">${u.footer.company}</h2><ul>
        <li><a href="${P(lang, '/about/')}">${u.nav.about}</a></li>
        <li><a href="${P(lang, '/principles/')}">${u.nav.principles}</a></li>
        <li><a href="${P(lang, '/news/')}">${u.nav.news}</a></li>
        <li><a href="${P(lang, '/contact/')}">${u.nav.contact}</a></li></ul></div>
      <div><h2>${u.footer.policy}</h2><ul>
        <li><a href="${P(lang, '/privacy/')}">${u.privacy}</a></li>
        <li><a href="${P(lang, '/terms/')}">${u.terms}</a></li>
        <li><a href="${P(lang, '/feed.xml')}">${u.rss}</a></li></ul></div>
    </div>
    <div class="biz">
      <span><b>${u.biz.name}</b>${c.name} (${c.altName})</span>
      <span><b>${u.biz.rep}</b>${c.rep}</span>
      <span><b>${u.biz.no}</b>${SITE.bizNo}</span>
      <span><b>${u.biz.tax}</b>${c.taxType}</span>
      <span><b>${u.biz.kinds}</b>${c.kinds.join(', ')}</span>
      <span><b>${u.biz.mail}</b><a href="${mailto}">${SITE.email}</a></span>
    </div>
    <nav class="ftr-langs" aria-label="${esc(u.language)}">${langs}</nav>
    <div class="copy"><span>${u.rights}</span>${L.translationNote ? `<span>${L.translationNote}</span>` : ''}</div>
  </div>
</footer>`;
}

// ---------------------------------------------------------------- components
const badge = (lang, s) => `<span class="badge ${s}">${T[lang].status[s]}</span>`;
const pt = (lang, p) => T[lang].products.items[p.slug];

function pcard(lang, p) {
  const d = pt(lang, p);
  return `<article class="pcard">
  <div class="pmedia">${productMockup(p, lang, d.name)}</div>
  <div class="pbody">
    <div class="ptop"><h3 class="pname">${esc(d.name)}${d.alt ? `<small>${esc(d.alt)}</small>` : ''}</h3>${badge(lang, p.status)}</div>
    <p class="psum">${esc(d.summary)}</p>
    <div class="pfoot"><span>${T[lang].categories[p.cat].plat}</span><span class="link">${T[lang].ui.view}${icon('arrowRight')}</span></div>
  </div>
  <a class="cover" href="${P(lang, `/products/${p.slug}/`)}"><span class="sr">${esc(d.name)} ${T[lang].ui.view}</span></a>
</article>`;
}

function scard(lang, s) {
  const d = T[lang].services.items[s.id];
  return `<a class="cat svc" href="${P(lang, `/services/${s.id}/`)}"><span class="icb">${icon(s.icon)}</span><h3>${d.name}</h3><p>${d.short}</p><span class="cat-foot"><span>${T[lang].ui.view}</span>${icon('arrowRight')}</span></a>`;
}

function cta(lang) {
  const L = T[lang];
  return `<section class="sec" aria-labelledby="cta-h"><div class="wrap"><div class="cta">
  <div><h2 class="h-2" id="cta-h">${L.cta.title}</h2><p>${L.cta.text}</p></div>
  <div class="btns"><a class="btn btn-primary" href="${mailto}">${icon('mail')}${SITE.email}</a></div>
</div></div></section>`;
}

function infoTable(lang) {
  const L = T[lang];
  const c = L.company;
  const u = L.ui;
  return `<table class="info">
  <tr><th scope="row">${u.biz.name}</th><td>${c.name} (${c.altName})</td></tr>
  <tr><th scope="row">${u.biz.rep}</th><td>${c.rep}</td></tr>
  <tr><th scope="row">${u.biz.no}</th><td>${SITE.bizNo}</td></tr>
  <tr><th scope="row">${c.form}</th><td>${c.formValue}</td></tr>
  <tr><th scope="row">${u.biz.tax}</th><td>${c.taxType}</td></tr>
  <tr><th scope="row">${c.kindsLabel}</th><td><ul>${c.kinds.map((k) => `<li>${k}</li>`).join('')}</ul></td></tr>
  <tr><th scope="row">${u.biz.mail}</th><td><a class="link-u" href="${mailto}">${SITE.email}</a></td></tr>
  <tr><th scope="row">${c.site}</th><td>earntolink.com</td></tr>
</table>`;
}

const grid3 = (items, icons, cls = '') => `<div class="prin${cls}">${items.map(([h, p], i) => `<div>${icon(icons[i])}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
const whyGrid = (lang) => grid3(T[lang].why, WHY_ICONS);
function stepsGrid(lang) {
  return `<ol class="steps six">${T[lang].steps.map(([h, p], i) => `<li class="step"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol>`;
}
function crumbs(lang, items) {
  const parts = [`<a href="${P(lang, '/')}">${T[lang].ui.home}</a>`];
  items.forEach(([t, h]) => parts.push('<span aria-hidden="true">/</span>', h ? `<a href="${h}">${t}</a>` : `<span aria-current="page">${t}</span>`));
  return `<nav class="crumbs" aria-label="${esc(T[lang].ui.breadcrumb)}">${parts.join('')}</nav>`;
}
function phead(eyebrow, title, lead, cr) {
  return `<section class="phead"><div class="wrap">${cr || ''}<p class="eyebrow" style="margin-top:${cr ? 28 : 0}px">${eyebrow}</p><h1 class="h-1">${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div></section>`;
}
function fmtDate(lang, d) {
  const [y, m, dd] = d.split('-').map(Number);
  if (lang === 'ko') return `${y}. ${m}. ${dd}.`;
  return new Date(Date.UTC(y, m - 1, dd)).toLocaleDateString(LM[lang].intl, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
function newsList(lang) {
  const N = T[lang].news;
  return `<div class="news">${NEWS.map((n) => `<article class="news-item"><time datetime="${n.date}">${fmtDate(lang, n.date)}</time><div><h3>${esc(N[n.slug].title)}</h3><p>${esc(N[n.slug].summary)}</p></div>${icon('arrowRight')}<a class="cover" href="${P(lang, `/news/${n.slug}/`)}"><span class="sr">${esc(N[n.slug].title)}</span></a></article>`).join('')}</div>`;
}
function sechead(c, id, right) {
  return `<div class="sec-head"><div><p class="eyebrow">${c.eyebrow}</p><h2 class="h-2" id="${id}">${c.title}</h2></div>${right ?? (c.text ? `<p>${c.text}</p>` : '')}</div>`;
}

// ---------------------------------------------------------------- JSON-LD
const ORG_ID = SITE.origin + '/#org';
function orgLd(lang) {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': ORG_ID,
    name: T.ko.brand, alternateName: 'EarnToLink', url: SITE.origin + '/', email: SITE.email, slogan: T[lang].slogan,
    logo: SITE.origin + '/icon-512.png', taxID: SITE.bizNo,
    knowsLanguage: LANGS.map((l) => l.hreflang),
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.email, availableLanguage: ['ko', 'en'] },
  };
}
function siteLd(lang) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE.origin + '/#website', name: T[lang].brand, alternateName: T[lang].brandAlt, url: abs(P(lang, '/')), inLanguage: LM[lang].hreflang, publisher: { '@id': ORG_ID } };
}
function crumbLd(lang, items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })) };
}
function appLd(lang, p) {
  const d = pt(lang, p);
  return { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: d.name, alternateName: d.alt || undefined, description: d.summary, applicationCategory: p.appCategory, operatingSystem: p.os, inLanguage: LM[lang].hreflang, url: abs(P(lang, `/products/${p.slug}/`)), publisher: { '@id': ORG_ID }, creator: { '@id': ORG_ID } };
}
function serviceLd(lang, s) {
  const d = T[lang].services.items[s.id];
  return { '@context': 'https://schema.org', '@type': 'Service', name: d.name, description: d.short, serviceType: d.name, provider: { '@id': ORG_ID }, areaServed: 'Worldwide', availableLanguage: LANGS.map((l) => l.hreflang), url: abs(P(lang, `/services/${s.id}/`)) };
}
const home = (lang) => [T[lang].ui.home, P(lang, '/')];

// ---------------------------------------------------------------- pages
const pages = [];
const add = (page) => pages.push(page);
const brandT = (lang, t) => `${t} | ${T[lang].brand}`;

// Home
add({
  key: 'home', section: 'home', path: '/',
  title: (lang) => T[lang].home.title,
  desc: (lang) => T[lang].home.desc,
  jsonld: (lang) => [orgLd(lang), siteLd(lang)],
  render(lang) {
    const L = T[lang];
    const c = L.home;
    const u = L.ui;
    const chips = ALL_LANGS.map((l) => [l.label, l.html]);
    return `
<section class="hero"><div class="wrap hero-grid">
  <div>
    <p class="eyebrow">${c.eyebrow}</p>
    <h1 class="h-display">${c.h1}</h1>
    <p class="lead">${c.lead}</p>
    <div class="btns"><a class="btn btn-primary" href="${P(lang, '/services/')}">${u.nav.services}${icon('arrowRight')}</a><a class="btn btn-secondary" href="${P(lang, '/contact/')}">${u.projectBtn}</a></div>
    <div class="hero-meta">${c.meta.map((t, i) => `<span>${icon(['code', 'zap', 'globe'][i])}${t}</span>`).join('')}</div>
  </div>
  <div class="hero-art">${heroMockup(u.heroLabel, chips, [L.brand, L.brandAlt])}</div>
</div>
<div class="wrap" style="margin-top:72px"><div class="stats">${c.stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('')}</div></div>
</section>

<section class="sec sec-soft" aria-labelledby="h-svc"><div class="wrap">
  ${sechead(c.services, 'h-svc')}
  <div class="cats three">${SERVICES.map((s) => scard(lang, s)).join('')}</div>
</div></section>

<section class="sec" aria-labelledby="h-why"><div class="wrap">
  ${sechead(c.why, 'h-why')}
  ${whyGrid(lang)}
  <p style="margin-top:28px"><a class="link" href="${P(lang, '/principles/')}">${u.nav.principles}${icon('arrowRight')}</a></p>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-how"><div class="wrap">
  ${sechead(c.how, 'h-how')}
  ${stepsGrid(lang)}
</div></section>

<section class="sec" aria-labelledby="h-apps"><div class="wrap">
  ${sechead(c.apps, 'h-apps')}
  <div class="pgrid">${PRODUCTS.map((p) => pcard(lang, p)).join('')}</div>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-co"><div class="wrap split">
  <div><p class="eyebrow">${c.co.eyebrow}</p><h2 class="h-2" id="h-co" style="margin-top:14px">${c.co.title}</h2><p class="muted" style="margin-top:16px">${c.co.text}</p><p style="margin-top:24px"><a class="link" href="${P(lang, '/about/')}">${u.nav.about}${icon('arrowRight')}</a></p></div>
  ${infoTable(lang)}
</div></section>

<section class="sec" aria-labelledby="h-news"><div class="wrap">
  ${sechead(c.news, 'h-news', `<p><a class="link" href="${P(lang, '/news/')}">${u.nav.news}${icon('arrowRight')}</a></p>`)}
  ${newsList(lang)}
</div></section>
${cta(lang)}`;
  },
});

// Services index
add({
  key: 'services', section: 'services', path: '/services/',
  title: (lang) => brandT(lang, T[lang].services.title),
  desc: (lang) => T[lang].services.desc,
  jsonld: (lang) => [crumbLd(lang, [home(lang), [T[lang].ui.nav.services, P(lang, '/services/')]]), ...SERVICES.map((s) => serviceLd(lang, s))],
  render(lang) {
    const L = T[lang];
    const c = L.services;
    const u = L.ui;
    const blocks = SERVICES.map((s, i) => {
      const d = c.items[s.id];
      return `<section class="sec${i % 2 ? ' sec-soft' : ''} svc-block" id="${s.id}" aria-labelledby="sv-${s.id}"><div class="wrap split">
  <div><span class="icb big">${icon(s.icon)}</span><p class="eyebrow" style="margin-top:18px">${String(i + 1).padStart(2, '0')}</p><h2 class="h-2" id="sv-${s.id}" style="margin-top:12px">${d.name}</h2><p class="muted" style="margin-top:14px">${d.lead}</p>
    <p style="margin-top:22px"><a class="link" href="${P(lang, `/services/${s.id}/`)}">${u.view}${icon('arrowRight')}</a></p></div>
  <div class="feat two">${d.scope.map(([h, t], j) => `<div><span class="icb">${icon(s.scopeIcons[j])}</span><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>
</div></section>`;
    }).join('');
    return `${phead(c.eyebrow, c.h1, c.lead, crumbs(lang, [[u.nav.services]]))}
<div class="wrap"><nav class="tabs" aria-label="${esc(u.nav.services)}">${SERVICES.map((s) => `<a href="#${s.id}">${c.items[s.id].name}</a>`).join('')}</nav></div>
${blocks}
<section class="sec" aria-labelledby="h-why2"><div class="wrap">${sechead(L.home.why, 'h-why2')}${whyGrid(lang)}</div></section>
${cta(lang)}`;
  },
});

// Service details
SERVICES.forEach((s) => {
  add({
    key: 'service-' + s.id, section: 'services', path: `/services/${s.id}/`,
    title: (lang) => brandT(lang, T[lang].services.items[s.id].name),
    desc: (lang) => `${T[lang].services.items[s.id].name}: ${T[lang].services.items[s.id].short} ${T[lang].services.items[s.id].lead}`,
    jsonld: (lang) => [serviceLd(lang, s), crumbLd(lang, [home(lang), [T[lang].ui.nav.services, P(lang, '/services/')], [T[lang].services.items[s.id].name, P(lang, `/services/${s.id}/`)]])],
    render(lang) {
      const L = T[lang];
      const c = L.services;
      const d = c.items[s.id];
      const u = L.ui;
      const others = SERVICES.filter((x) => x.id !== s.id);
      return `<section class="phead"><div class="wrap">${crumbs(lang, [[u.nav.services, P(lang, '/services/')], [d.name]])}
  <div class="svc-hero"><span class="icb big">${icon(s.icon)}</span><div><p class="eyebrow">${c.eyebrow}</p><h1 class="h-1">${d.name}</h1><p class="lead">${d.lead}</p>
  <div class="btns" style="margin-top:28px"><a class="btn btn-primary" href="${mailto}?subject=${encodeURIComponent(d.name)}">${u.projectBtn}${icon('mail')}</a><a class="btn btn-secondary" href="${P(lang, '/services/')}">${u.allServices}</a></div></div></div>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-who"><div class="wrap split">
  <div><p class="eyebrow">${c.whoLabel}</p><h2 class="h-2" id="h-who" style="margin-top:14px">${d.name}</h2></div>
  <ul class="checks">${d.who.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>
</div></section>
<section class="sec" aria-labelledby="h-scope"><div class="wrap">
  <div class="sec-head single"><div><p class="eyebrow">${c.scopeLabel}</p><h2 class="h-2" id="h-scope">${c.scopeLabel}</h2></div></div>
  <div class="feat four">${d.scope.map(([h, t], j) => `<div><span class="icb">${icon(s.scopeIcons[j])}</span><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-del"><div class="wrap split">
  <div><p class="eyebrow">${c.deliverLabel}</p><h2 class="h-2" id="h-del" style="margin-top:14px">${c.deliverLabel}</h2></div>
  <ol class="dlist">${d.deliver.map((t, i) => `<li><span class="n">${String(i + 1).padStart(2, '0')}</span>${t}</li>`).join('')}</ol>
</div></section>
<section class="sec" aria-labelledby="h-steps"><div class="wrap">${sechead(L.home.how, 'h-steps')}${stepsGrid(lang)}</div></section>
<section class="sec sec-soft" aria-labelledby="h-other"><div class="wrap">
  <div class="sec-head"><div><h2 class="h-2" id="h-other">${c.otherLabel}</h2></div><p><a class="link" href="${P(lang, '/services/')}">${u.allServices}${icon('arrowRight')}</a></p></div>
  <div class="cats three">${others.map((x) => scard(lang, x)).join('')}</div>
</div></section>
${cta(lang)}`;
    },
  });
});

// Products index
add({
  key: 'products', section: 'products', path: '/products/',
  title: (lang) => brandT(lang, T[lang].products.title),
  desc: (lang) => T[lang].products.desc,
  jsonld: (lang) => [crumbLd(lang, [home(lang), [T[lang].ui.nav.products, P(lang, '/products/')]]), { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(P(lang, `/products/${p.slug}/`)), name: pt(lang, p).name })) }],
  render(lang) {
    const L = T[lang];
    const c = L.products;
    const u = L.ui;
    const tabs = CATEGORIES.map((k) => `<a href="#${k.id}">${L.categories[k.id].name} <span>${byCat(k.id).length}</span></a>`).join('');
    const groups = CATEGORIES.map((k) => {
      const list = byCat(k.id);
      return `<section class="group" id="${k.id}" aria-labelledby="g-${k.id}"><div class="wrap">
  <div class="group-head"><div><h2 id="g-${k.id}">${L.categories[k.id].name}</h2><p>${c.groups[k.id]}</p></div><span class="badge ${list[0].status}">${L.status[list[0].status]}</span></div>
  <div class="pgrid${k.id === 'desktop' ? '' : ' two'}">${list.map((p) => pcard(lang, p)).join('')}</div>
</div></section>`;
    }).join('');
    return `${phead(c.eyebrow, c.h1, c.lead, crumbs(lang, [[u.nav.products]]))}
<div class="wrap"><nav class="tabs" aria-label="${esc(c.tabsLabel)}">${tabs}</nav></div>
${groups}
<section class="sec sec-soft" aria-labelledby="h-pp"><div class="wrap">${sechead(c.prin, 'h-pp')}${grid3(c.principles, PRIN_ICONS, ' four')}</div></section>
${cta(lang)}`;
  },
});

// Product details
for (const p of PRODUCTS) {
  add({
    key: 'product-' + p.slug, section: 'products', path: `/products/${p.slug}/`,
    title: (lang) => { const d = pt(lang, p); return brandT(lang, `${d.name}${d.alt ? ` (${d.alt})` : ''}`); },
    desc: (lang) => { const d = pt(lang, p); return `${d.name}: ${d.summary}. ${d.lead}`; },
    jsonld: (lang) => [appLd(lang, p), crumbLd(lang, [home(lang), [T[lang].ui.nav.products, P(lang, '/products/')], [pt(lang, p).name, P(lang, `/products/${p.slug}/`)]])],
    render(lang) {
      const L = T[lang];
      const d = pt(lang, p);
      const u = L.ui;
      const cat = L.categories[p.cat];
      const rel = [...byCat(p.cat).filter((x) => x.slug !== p.slug), ...PRODUCTS.filter((x) => x.cat !== p.cat)].slice(0, 3);
      const facts = [[u.platform, cat.plat], [u.status, L.status[p.status]], ...d.specs.slice(1, 3)];
      return `<section class="pd-hero"><div class="wrap">
  ${crumbs(lang, [[u.nav.products, P(lang, '/products/')], [cat.name, P(lang, '/products/') + '#' + p.cat], [d.name]])}
  <div class="pd-grid">
    <div>
      ${badge(lang, p.status)}
      <h1 class="h-1">${esc(d.name)}</h1>
      <p class="pd-alt">${esc(d.alt || '')}</p>
      <p class="lead">${esc(d.summary)}. ${esc(d.lead)}</p>
      <div class="btns"><a class="btn btn-primary" href="${mailto}?subject=${encodeURIComponent(d.name)}">${u.mailBtn}${icon('mail')}</a><a class="btn btn-secondary" href="${P(lang, '/products/')}">${u.all}</a></div>
      <dl class="facts">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${String(b).split(' (')[0]}</dd></div>`).join('')}</dl>
    </div>
    <div class="pd-art">${productMockup(p, lang, d.name)}</div>
  </div>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-feat"><div class="wrap">
  <div class="sec-head single"><div><p class="eyebrow">${u.features}</p><h2 class="h-2" id="h-feat">${L.products.featTitle.replace('{name}', d.name)}</h2></div></div>
  <div class="feat">${d.features.map(([h, t], i) => `<div><span class="icb">${icon(p.featureIcons[i])}</span><h3>${esc(h)}</h3><p>${esc(t)}</p></div>`).join('')}</div>
</div></section>

<section class="sec" aria-labelledby="h-spec"><div class="wrap split">
  <div><p class="eyebrow">${u.specs}</p><h2 class="h-2" id="h-spec" style="margin-top:14px">${u.specs}</h2>
    <div class="note" style="margin-top:28px">${icon('shield')}<div><b>${u.privacyNote}</b><br>${L.products.privacy[p.cat]} <a class="link-u" href="${P(lang, '/privacy/')}#apps">${u.privacy}</a></div></div>
  </div>
  <table class="info">${d.specs.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('')}</table>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-rel"><div class="wrap">
  <div class="sec-head"><div><h2 class="h-2" id="h-rel">${u.related}</h2></div><p><a class="link" href="${P(lang, '/products/')}">${u.all}${icon('arrowRight')}</a></p></div>
  <div class="pgrid">${rel.map((x) => pcard(lang, x)).join('')}</div>
</div></section>
${cta(lang)}`;
    },
  });
}

// About
add({
  key: 'about', section: 'about', path: '/about/',
  title: (lang) => brandT(lang, T[lang].about.title),
  desc: (lang) => T[lang].about.desc,
  jsonld: (lang) => [orgLd(lang), crumbLd(lang, [home(lang), [T[lang].ui.nav.about, P(lang, '/about/')]])],
  render(lang) {
    const L = T[lang];
    const c = L.about;
    const u = L.ui;
    return `${phead(c.eyebrow, c.h1, c.lead, crumbs(lang, [[u.nav.about]]))}
<section class="sec" aria-labelledby="h-mission"><div class="wrap split">
  <div><p class="eyebrow">${c.mission.eyebrow}</p><h2 class="h-2" id="h-mission" style="margin-top:14px">${c.mission.title}</h2></div>
  <div class="prose">${c.mission.body.map((t) => `<p>${t}</p>`).join('')}</div>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-do"><div class="wrap">
  ${sechead(c.do, 'h-do')}
  <div class="cats three">${SERVICES.map((s) => scard(lang, s)).join('')}</div>
</div></section>
<section class="sec" aria-labelledby="h-prin2"><div class="wrap">
  ${sechead(c.why, 'h-prin2', `<p><a class="link" href="${P(lang, '/principles/')}">${u.nav.principles}${icon('arrowRight')}</a></p>`)}
  ${whyGrid(lang)}
</div></section>
<section class="sec sec-soft" aria-labelledby="h-info"><div class="wrap split">
  <div><p class="eyebrow">${c.info.eyebrow}</p><h2 class="h-2" id="h-info" style="margin-top:14px">${c.info.title}</h2></div>
  ${infoTable(lang)}
</div></section>
${cta(lang)}`;
  },
});

// Principles (How we work)
add({
  key: 'principles', section: 'principles', path: '/principles/',
  title: (lang) => brandT(lang, T[lang].principles.title),
  desc: (lang) => T[lang].principles.desc,
  jsonld: (lang) => [crumbLd(lang, [home(lang), [T[lang].ui.nav.principles, P(lang, '/principles/')]])],
  render(lang) {
    const L = T[lang];
    const c = L.principles;
    const u = L.ui;
    return `${phead(c.eyebrow, c.h1, c.lead, crumbs(lang, [[u.nav.principles]]))}
<section class="sec" aria-labelledby="h-p"><div class="wrap">${sechead(c.why, 'h-p')}${whyGrid(lang)}</div></section>
<section class="sec sec-soft" aria-labelledby="h-s"><div class="wrap">${sechead(c.steps, 'h-s')}${stepsGrid(lang)}</div></section>
<section class="sec" aria-labelledby="h-price"><div class="wrap split">
  <div><p class="eyebrow">${c.terms.eyebrow}</p><h2 class="h-2" id="h-price" style="margin-top:14px">${c.terms.title}</h2></div>
  <table class="info">${c.terms.rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('')}</table>
</div></section>
${cta(lang)}`;
  },
});

// News
add({
  key: 'news', section: 'news', path: '/news/',
  title: (lang) => brandT(lang, T[lang].newsPage.title),
  desc: (lang) => T[lang].newsPage.desc,
  jsonld: (lang) => [crumbLd(lang, [home(lang), [T[lang].ui.nav.news, P(lang, '/news/')]])],
  render(lang) {
    const u = T[lang].ui;
    return `${phead(u.nav.news, T[lang].newsPage.title, '', crumbs(lang, [[u.nav.news]]))}
<section class="sec" style="padding-top:56px"><div class="wrap">${newsList(lang)}
<p style="margin-top:28px"><a class="link" href="${P(lang, '/feed.xml')}">${icon('rss')}RSS</a></p></div></section>`;
  },
});
for (const n of NEWS) {
  add({
    key: 'news-' + n.slug, section: 'news', path: `/news/${n.slug}/`, ogType: 'article',
    title: (lang) => brandT(lang, T[lang].news[n.slug].title),
    desc: (lang) => T[lang].news[n.slug].summary + ' ' + T[lang].news[n.slug].body[0],
    jsonld: (lang) => [{ '@context': 'https://schema.org', '@type': 'Article', headline: T[lang].news[n.slug].title, datePublished: n.date, dateModified: n.date, inLanguage: LM[lang].hreflang, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: abs(P(lang, `/news/${n.slug}/`)), image: abs(`/assets/img/og-${lang}.png`) }],
    render(lang) {
      const u = T[lang].ui;
      const d = T[lang].news[n.slug];
      return `<section class="phead"><div class="wrap">${crumbs(lang, [[u.nav.news, P(lang, '/news/')], [d.title]])}<p class="eyebrow" style="margin-top:28px"><time datetime="${n.date}">${fmtDate(lang, n.date)}</time></p><h1 class="h-1">${esc(d.title)}</h1></div></section>
<section class="sec" style="padding-top:56px"><div class="wrap"><div class="prose">${d.body.map((t) => `<p>${esc(t)}</p>`).join('')}
<p style="margin-top:32px"><a href="${P(lang, '/news/')}">${u.nav.news}</a> · <a href="${P(lang, '/services/')}">${u.nav.services}</a></p></div></div></section>`;
    },
  });
}

// Contact
add({
  key: 'contact', section: 'contact', path: '/contact/',
  title: (lang) => brandT(lang, T[lang].contact.title),
  desc: (lang) => T[lang].contact.desc,
  jsonld: (lang) => [orgLd(lang), crumbLd(lang, [home(lang), [T[lang].ui.nav.contact, P(lang, '/contact/')]])],
  render(lang) {
    const c = T[lang].contact;
    const u = T[lang].ui;
    return `${phead(c.eyebrow, c.h1, c.lead, crumbs(lang, [[u.nav.contact]]))}
<section class="sec" style="padding-top:64px"><div class="wrap">
  <div class="contact-card">
    <div><p class="eyebrow">${u.email}</p><a class="mail" href="${mailto}">${SITE.email}</a><div class="btns"><a class="btn btn-primary" href="${mailto}">${u.mailBtn}${icon('mail')}</a></div>
      <h2 class="brief-h">${c.brief.title}</h2><ul class="brief">${c.brief.items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul></div>
    <div><ul>${c.topics.map(([ic, h, t]) => `<li>${icon(ic)}<span><b style="color:var(--ink)">${h}</b><br>${t}</span></li>`).join('')}</ul></div>
  </div>
</div></section>`;
  },
});

// Privacy & Terms
for (const key of ['privacy', 'terms']) {
  add({
    key, section: key, path: `/${key}/`,
    title: (lang) => brandT(lang, T[lang][key].title),
    desc: (lang) => T[lang][key].desc,
    jsonld: (lang) => [crumbLd(lang, [home(lang), [T[lang][key].title, P(lang, `/${key}/`)]])],
    render(lang) {
      const L = T[lang];
      const c = L[key];
      const toc = c.sections.map((s) => `<a href="#${s.id}">${s.h}</a>`).join('');
      const body = c.sections.map((s) => `<h2 id="${s.id}">${s.h}</h2>${s.html}`).join('');
      const note = L.translationNote ? `<p class="tnote">${L.translationNote} <a href="/${key}/" lang="ko" hreflang="ko">한국어 원문</a></p>` : '';
      return `${phead(c.eyebrow, c.title, c.lead, crumbs(lang, [[c.title]]))}
<div class="wrap doc"><nav class="toc" aria-label="${esc(L.ui.toc)}">${toc}</nav><article class="prose">${note}${body}</article></div>`;
    },
  });
}


// ---------------------------------------------------------------- app pages (/apps/<slug>/, English + Korean summary)
function listing(key) {
  try {
    const t = readFileSync(join(ROOT, '..', 'untolink-apps', 'apps', key, 'store', 'listing_en-us.txt'), 'utf8');
    const sec = (name) => (t.split(`[${name}]`)[1] || '').split(/\n\[/)[0].trim();
    return { short: sec('짧은 설명'), feats: sec('제품 기능').split('\n').map((x) => x.trim()).filter(Boolean) };
  } catch { return null; }
}
const appPages = [];
for (const p of PRODUCTS) {
  const a = APP_PAGES[p.slug]; if (!a) continue;
  const en = T.en.products.items[p.slug], ko = T.ko.products.items[p.slug];
  const lst = listing(a.key);
  const short = lst?.short || `${en.summary}.`;
  const feats = lst?.feats?.length ? lst.feats : en.features.slice(0, 5).map(([h]) => h);
  appPages.push({ p, a, en, ko, short, feats });
  add({
    key: 'app-' + p.slug, section: 'products', path: `/apps/${p.slug}/`, single: true,
    title: () => `${en.name} | EarnToLink`,
    desc: () => `${en.name}: ${short} ${a.price ? `One-time purchase ${a.price}. ` : (a.priceText ? `${a.priceText}. ` : '')}${a.store}.`,
    jsonld: () => [{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: en.name, alternateName: ko.name, description: short, applicationCategory: 'UtilitiesApplication', operatingSystem: a.os, ...(a.price ? { offers: { '@type': 'Offer', price: a.price.replace('$', ''), priceCurrency: 'USD' } } : {}), url: abs(`/apps/${p.slug}/`), publisher: { '@id': ORG_ID } }],
    render() {
      const rows = [['Platform', a.os], ['Price', a.price ? `${a.price} · one-time purchase, no subscription` : (a.priceText || 'To be announced')], ['Availability', a.store], ['Privacy', 'No internet connection. No personal data collected or sent.'], ['Support', `<a class="link-u" href="mailto:${SITE.email}">${SITE.email}</a>`]];
      return `<section class="pd-hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/en/">Home</a><span aria-hidden="true">/</span><a href="/apps/">Apps</a><span aria-hidden="true">/</span><span aria-current="page">${esc(en.name)}</span></nav>
  <div class="pd-grid"><div>
    <span class="badge soon">${esc(a.store)}</span>
    <div class="app-head"><img src="/assets/img/apps/${p.slug}.png" width="96" height="96" alt="${esc(en.name)} icon"><div><h1 class="h-1">${esc(en.name)}</h1><p class="pd-alt">${esc(ko.name)}</p></div></div>
    <p class="lead">${esc(short)}</p>
    <div class="btns"><a class="btn btn-primary" href="mailto:${SITE.email}?subject=${encodeURIComponent(en.name)}">${icon('mail')}Contact support</a><a class="btn btn-secondary" href="/en/privacy/#apps">Privacy Policy</a></div>
  </div><div class="pd-art">${productMockup(p, 'en', en.name)}</div></div>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-af"><div class="wrap split">
  <div><p class="eyebrow">Features</p><h2 class="h-2" id="h-af" style="margin-top:14px">What it does</h2></div>
  <ul class="checks">${feats.map((f) => `<li>${icon('check')}<span>${esc(f)}</span></li>`).join('')}</ul>
</div></section>
<section class="sec" aria-labelledby="h-ad"><div class="wrap split">
  <div><p class="eyebrow">Details</p><h2 class="h-2" id="h-ad" style="margin-top:14px">Details</h2></div>
  <table class="info">${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</table>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-ako" lang="ko"><div class="wrap split">
  <div><p class="eyebrow">한국어</p><h2 class="h-2" id="h-ako" style="margin-top:14px">${esc(ko.name)}</h2><p class="muted" style="margin-top:14px">${esc(ko.summary)}. ${esc(ko.lead)}</p></div>
  <table class="info"><tr><th scope="row">지원 환경</th><td>${a.osKo}</td></tr><tr><th scope="row">가격</th><td>${a.price ? `${a.price} · 한 번 구매, 구독 없음` : (a.priceKo || '출시 때 안내')}</td></tr><tr><th scope="row">출시</th><td>${a.storeKo}</td></tr><tr><th scope="row">개인정보</th><td>인터넷 연결 없음. 개인정보를 수집하거나 전송하지 않음. <a class="link-u" href="/privacy/#apps">개인정보처리방침</a></td></tr><tr><th scope="row">문의</th><td><a class="link-u" href="mailto:${SITE.email}">${SITE.email}</a></td></tr></table>
</div></section>`;
    },
  });
}
add({
  key: 'apps', section: 'products', path: '/apps/', single: true,
  title: () => 'Apps | EarnToLink', desc: () => 'Apps by EarnToLink: Space Map, Dupeless, Archive Fix for Windows, and Roll Tidy, Roll Flick for mobile. Offline, no account, no ads.',
  jsonld: () => [],
  render() {
    return `${phead('EarnToLink', 'Apps', 'Offline utilities. No account, no ads, no tracking. One-time purchase.', '')}
<section class="sec" style="padding-top:48px"><div class="wrap"><div class="cats three">${appPages.map(({ p, a, en, short }) => `<a class="cat svc" href="/apps/${p.slug}/"><img src="/assets/img/apps/${p.slug}.png" width="56" height="56" alt=""><h3>${esc(en.name)}</h3><p>${esc(short)}</p><span class="cat-foot"><span>${esc(a.store)}${a.price ? ` · ${a.price}` : (a.priceText ? ` · ${esc(a.priceText)}` : '')}</span>${icon('arrowRight')}</span></a>`).join('')}</div>
<p style="margin-top:28px" class="muted">Support: <a class="link-u" href="mailto:${SITE.email}">${SITE.email}</a> · <a class="link-u" href="/en/privacy/#apps">Privacy Policy</a></p></div></section>`;
  },
});

// ---------------------------------------------------------------- write
async function write(p, content) {
  const f = join(OUT, p.endsWith('/') ? p + 'index.html' : p);
  await mkdir(dirname(f), { recursive: true });
  await writeFile(f, content);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });
for (const f of ['favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) {
  await cp(join(ROOT, 'assets/img', f), join(OUT, f)).catch(() => console.warn('missing asset', f, '(run npm run assets)'));
}
let count = 0;
for (const page of pages) {
  if (page.single) { await write(page.path, layout('en', page, page.render('en'))); count++; continue; }
  for (const l of LANGS) { await write(P(l.code, page.path), layout(l.code, page, page.render(l.code))); count++; }
}

// 404 (noindex): Korean + English + language list
{
  const nf = { path: '/', noindex: true, section: '', title: () => '404 | 언투링크 EarnToLink', desc: () => '페이지 없음. Page not found.' };
  const en = T.en || T.ko;
  await write('/404.html', layout('ko', nf, `<section class="nf"><div class="wrap"><p class="code">404</p><h1 class="h-1" style="margin:14px 0 12px">${T.ko.ui.notFound.title}</h1><p class="lead">${T.ko.ui.notFound.text}</p><p class="lead" lang="en">${en.ui.notFound.title}. ${en.ui.notFound.text}</p>
<div class="btns" style="margin-top:32px">${LANGS.map((l) => `<a class="btn btn-secondary btn-sm" href="${P(l.code, '/')}" lang="${l.html}">${l.label}</a>`).join('')}</div></div></section>`));
  count++;
}

// sitemap (path unchanged: /sitemap.xml)
const sm = pages.map((pg) => pg.single ? `  <url>\n    <loc>${abs(pg.path)}</loc>\n    <lastmod>${SITE.updated}</lastmod>\n  </url>` : LANGS.map((l) => `  <url>
    <loc>${abs(P(l.code, pg.path))}</loc>
    <lastmod>${SITE.updated}</lastmod>
${LANGS.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(P(a.code, pg.path))}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(P(DEF, pg.path))}"/>
  </url>`).join('\n')).join('\n');
await write('/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sm}
</urlset>
`);
await write('/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);

// RSS feeds (ko: /feed.xml, others: /<code>/feed.xml)
const rfc822 = (d) => new Date(d + 'T00:00:00+09:00').toUTCString();
for (const l of LANGS) {
  const L = T[l.code];
  const self = abs(P(l.code, '/feed.xml'));
  const items = NEWS.map((n) => `    <item>
      <title>${esc(L.news[n.slug].title)}</title>
      <link>${abs(P(l.code, `/news/${n.slug}/`))}</link>
      <guid isPermaLink="true">${abs(P(l.code, `/news/${n.slug}/`))}</guid>
      <pubDate>${rfc822(n.date)}</pubDate>
      <description>${esc(L.news[n.slug].body.join(' '))}</description>
    </item>`).join('\n');
  await write(P(l.code, '/feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(L.ui.newsFeedTitle)}</title>
    <link>${abs(P(l.code, '/news/'))}</link>
    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
    <description>${esc(L.ui.newsFeedDesc)}</description>
    <language>${l.intl}</language>
    <lastBuildDate>${rfc822(SITE.updated)}</lastBuildDate>
${items}
  </channel>
</rss>
`);
}

await write('/manifest.webmanifest', JSON.stringify({
  name: '언투링크 EarnToLink', short_name: 'EarnToLink', lang: 'ko', start_url: '/', scope: '/', display: 'browser',
  background_color: '#ffffff', theme_color: '#ffffff',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }, { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
}, null, 2));
await write('/CNAME', 'earntolink.com\n');
await write('/.nojekyll', '');
await write(`/${SEO.indexnow_key}.txt`, SEO.indexnow_key);

// static/ verbatim (search-engine verification files etc.)
const staticDir = join(ROOT, 'static');
for (const f of await readdir(staticDir).catch(() => [])) {
  if (f === '.gitkeep') continue;
  await cp(join(staticDir, f), join(OUT, f), { recursive: true });
}

console.log(`built ${count} HTML pages (${pages.length} x ${LANGS.length} langs [${LANGS.map((l) => l.code).join(' ')}] + 404) -> site/`);
