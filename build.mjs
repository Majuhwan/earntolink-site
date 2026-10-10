// Static site build: node build.mjs  ->  ./site
import { mkdir, rm, writeFile, cp, readFile, readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, COMPANY, CATEGORIES, PRODUCTS, STATUS, NEWS } from './src/data.mjs';
import { UI } from './src/ui.mjs';
import { icon, LOGO_MARK } from './src/icons.mjs';
import { productMockup, heroMockup } from './src/mockups.mjs';
import { PAGES_COPY } from './src/copy.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'site');
const SEO = JSON.parse(await readFile(join(ROOT, 'seo.json'), 'utf8'));
const LANGS = ['ko', 'en'];
const FONT_CSS = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
const V = Date.now().toString(36);

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const P = (lang, p) => (lang === 'ko' ? p : '/en' + p);
const abs = (p) => SITE.origin + p;
const byCat = (c) => PRODUCTS.filter((p) => p.cat === c);
const mailto = `mailto:${SITE.email}`;

// ---------------------------------------------------------------- layout
function layout(lang, page, body) {
  const u = UI[lang];
  const other = lang === 'ko' ? 'en' : 'ko';
  const url = abs(page.paths[lang]);
  const og = abs(`/assets/img/og-${lang}.png`);
  const title = page.titles[lang];
  const desc = page.descs[lang];
  const navKeys = ['products', 'about', 'principles', 'news', 'contact'];
  const navHtml = navKeys.map((k) => {
    const href = P(lang, `/${k}/`);
    const cur = page.section === k ? ' aria-current="page"' : '';
    return `<a href="${href}"${cur}>${u.nav[k]}</a>`;
  }).join('');
  const ld = (page.jsonld ? page.jsonld(lang) : []).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const alt = page.paths.en
    ? `<link rel="alternate" hreflang="ko" href="${abs(page.paths.ko)}">
<link rel="alternate" hreflang="en" href="${abs(page.paths.en)}">
<link rel="alternate" hreflang="x-default" href="${abs(page.paths.ko)}">` : '';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
${alt}
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${lang === 'ko' ? '언투링크' : 'EarnToLink'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${lang === 'ko' ? 'ko_KR' : 'en_US'}">
<meta property="og:locale:alternate" content="${lang === 'ko' ? 'en_US' : 'ko_KR'}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${lang === 'ko' ? '언투링크 EarnToLink' : 'EarnToLink 언투링크'}">
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
<link rel="alternate" type="application/rss+xml" title="${lang === 'ko' ? '언투링크 소식' : 'EarnToLink News'}" href="${P(lang, '/feed.xml')}">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="${FONT_CSS}">
<link rel="stylesheet" href="/assets/css/site.css?v=${V}">
${ld}
</head>
<body>
<a class="skip" href="#main">${u.skip}</a>
<header class="hdr">
  <div class="wrap hdr-in">
    <a class="brand" href="${P(lang, '/')}" aria-label="${lang === 'ko' ? '언투링크 홈' : 'EarnToLink home'}">${LOGO_MARK(28)}<span>${lang === 'ko' ? '언투링크' : 'EarnToLink'}</span><small>${lang === 'ko' ? 'EarnToLink' : '언투링크'}</small></a>
    <nav class="nav" id="nav" aria-label="${lang === 'ko' ? '주 메뉴' : 'Main'}">${navHtml}</nav>
    <div class="hdr-tools">
      <a class="lang" href="${page.paths[other] || P(other, '/')}" hreflang="${other}" lang="${other}">${u.otherLang}</a>
      <button class="menu-btn" type="button" aria-controls="nav" aria-expanded="false"><span class="sr">${u.menu}</span>${icon('menu', 'ic ic-open')}${icon('close', 'ic ic-close')}</button>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
${footer(lang)}
<script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

function footer(lang) {
  const u = UI[lang];
  const c = COMPANY[lang];
  const cats = CATEGORIES.map((k) => `<li><a href="${P(lang, '/products/')}#${k.id}">${k[lang].name}</a></li>`).join('');
  return `<footer class="ftr">
  <div class="wrap">
    <div class="ftr-top">
      <div>
        <a class="brand" href="${P(lang, '/')}">${LOGO_MARK(26)}<span>${c.name}</span><small>${c.altName}</small></a>
        <p class="tag">${u.footer.tag}</p>
      </div>
      <div><h2>${u.footer.products}</h2><ul>${cats}</ul></div>
      <div><h2>${u.footer.company}</h2><ul>
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
      <span><b>${u.biz.no}</b>${c.bizNo}</span>
      <span><b>${u.biz.tax}</b>${c.taxType}</span>
      <span><b>${u.biz.kinds}</b>${c.kinds.join(', ')}</span>
      <span><b>${u.biz.mail}</b><a href="${mailto}">${SITE.email}</a></span>
    </div>
    <div class="copy"><span>${u.rights}</span><span><a href="${P(lang === 'ko' ? 'en' : 'ko', '/')}" lang="${lang === 'ko' ? 'en' : 'ko'}">${u.otherLang}</a></span></div>
  </div>
</footer>`;
}

// ---------------------------------------------------------------- components
const badge = (lang, s) => `<span class="badge ${s}">${STATUS[lang][s]}</span>`;
const catOf = (id) => CATEGORIES.find((c) => c.id === id);

function pcard(lang, p) {
  const d = p[lang];
  const href = P(lang, `/products/${p.slug}/`);
  return `<article class="pcard">
  <div class="pmedia">${productMockup(p, lang)}</div>
  <div class="pbody">
    <div class="ptop"><h3 class="pname">${esc(d.name)}${d.alt ? `<small>${esc(d.alt)}</small>` : ''}</h3>${badge(lang, p.status)}</div>
    <p class="psum">${esc(d.summary)}</p>
    <div class="pfoot"><span>${catOf(p.cat)[lang].plat}</span><span class="link">${UI[lang].view}${icon('arrowRight')}</span></div>
  </div>
  <a class="cover" href="${href}"><span class="sr">${esc(d.name)} ${UI[lang].view}</span></a>
</article>`;
}

function prow(lang, p) {
  const d = p[lang];
  return `<div class="prow">
  <span class="icb">${icon(p.icon)}</span>
  <span><b>${esc(d.name)}</b><span class="d">${esc(d.summary)}</span></span>
  ${icon('arrowRight', 'ic ic-go')}
  <a class="cover" href="${P(lang, `/products/${p.slug}/`)}"><span class="sr">${esc(d.name)}</span></a>
</div>`;
}

function cta(lang) {
  const c = PAGES_COPY[lang].cta;
  return `<section class="sec" aria-labelledby="cta-h"><div class="wrap"><div class="cta">
  <div><h2 class="h-2" id="cta-h">${c.title}</h2><p>${c.text}</p></div>
  <div class="btns"><a class="btn btn-primary" href="${mailto}">${icon('mail')}${SITE.email}</a></div>
</div></div></section>`;
}

function infoTable(lang) {
  const c = COMPANY[lang];
  const u = UI[lang];
  const t = PAGES_COPY[lang].company;
  return `<table class="info">
  <tr><th scope="row">${u.biz.name}</th><td>${c.name} (${c.altName})</td></tr>
  <tr><th scope="row">${u.biz.rep}</th><td>${c.rep}</td></tr>
  <tr><th scope="row">${u.biz.no}</th><td>${c.bizNo}</td></tr>
  <tr><th scope="row">${t.form}</th><td>${t.formValue}</td></tr>
  <tr><th scope="row">${u.biz.tax}</th><td>${c.taxType}</td></tr>
  <tr><th scope="row">${t.kinds}</th><td><ul>${c.kinds.map((k) => `<li>${k}</li>`).join('')}</ul></td></tr>
  <tr><th scope="row">${u.biz.mail}</th><td><a class="link-u" href="${mailto}">${SITE.email}</a></td></tr>
  <tr><th scope="row">${t.site}</th><td>earntolink.com</td></tr>
</table>`;
}

function principlesGrid(lang, items) {
  return `<div class="prin">${items.map(([ic, h, p, scope]) => `<div>${icon(ic)}<h3>${h}</h3><p>${p}</p>${scope ? `<span class="scope">${scope}</span>` : ''}</div>`).join('')}</div>`;
}
function stepsGrid(lang, items) {
  return `<ol class="steps">${items.map(([h, p], i) => `<li class="step"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol>`;
}
function crumbs(lang, items) {
  const parts = [`<a href="${P(lang, '/')}">${UI[lang].home}</a>`];
  items.forEach(([t, h]) => parts.push('<span aria-hidden="true">/</span>', h ? `<a href="${h}">${t}</a>` : `<span aria-current="page">${t}</span>`));
  return `<nav class="crumbs" aria-label="${lang === 'ko' ? '현재 위치' : 'Breadcrumb'}">${parts.join('')}</nav>`;
}
function phead(lang, eyebrow, title, lead, cr) {
  return `<section class="phead"><div class="wrap">${cr || ''}<p class="eyebrow" style="margin-top:${cr ? 28 : 0}px">${eyebrow}</p><h1 class="h-1">${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div></section>`;
}
function newsList(lang, items) {
  return `<div class="news">${items.map((n) => `<article class="news-item"><time datetime="${n.date}">${fmtDate(lang, n.date)}</time><div><h3>${esc(n[lang].title)}</h3><p>${esc(n[lang].summary)}</p></div>${icon('arrowRight')}<a class="cover" href="${P(lang, `/news/${n.slug}/`)}"><span class="sr">${esc(n[lang].title)}</span></a></article>`).join('')}</div>`;
}
function fmtDate(lang, d) {
  const [y, m, dd] = d.split('-').map(Number);
  if (lang === 'ko') return `${y}. ${m}. ${dd}.`;
  return new Date(Date.UTC(y, m - 1, dd)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

// ---------------------------------------------------------------- JSON-LD
const ORG_ID = SITE.origin + '/#org';
function orgLd() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': ORG_ID,
    name: '언투링크', alternateName: 'EarnToLink', url: SITE.origin + '/', email: SITE.email,
    logo: SITE.origin + '/icon-512.png', taxID: COMPANY.ko.bizNo,
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SITE.email, availableLanguage: ['ko', 'en'] },
  };
}
function siteLd(lang) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE.origin + '/#website', name: lang === 'ko' ? '언투링크' : 'EarnToLink', alternateName: lang === 'ko' ? 'EarnToLink' : '언투링크', url: abs(P(lang, '/')), inLanguage: lang, publisher: { '@id': ORG_ID } };
}
function crumbLd(lang, items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })) };
}
function appLd(lang, p) {
  const d = p[lang];
  const o = { '@context': 'https://schema.org', '@type': p.cat === 'web' ? 'WebApplication' : 'SoftwareApplication', name: d.name, alternateName: d.alt || undefined, description: d.summary, applicationCategory: p.appCategory, operatingSystem: p.os, inLanguage: lang, url: abs(P(lang, `/products/${p.slug}/`)), publisher: { '@id': ORG_ID }, creator: { '@id': ORG_ID } };
  if (p.url) o.sameAs = p.url;
  return o;
}

// ---------------------------------------------------------------- pages
const pages = [];
function add(page) { pages.push(page); }

// Home
add({
  key: 'home', section: 'home',
  paths: { ko: '/', en: '/en/' },
  titles: { ko: '언투링크 EarnToLink | 소프트웨어 개발', en: 'EarnToLink (언투링크) | Software' },
  descs: { ko: PAGES_COPY.ko.home.desc, en: PAGES_COPY.en.home.desc },
  jsonld: (lang) => [orgLd(), siteLd(lang)],
  render(lang) {
    const c = PAGES_COPY[lang].home;
    const u = UI[lang];
    const featured = [...byCat('mobile'), ...byCat('desktop'), ...byCat('web')];
    return `
<section class="hero"><div class="wrap hero-grid">
  <div>
    <p class="eyebrow">${c.eyebrow}</p>
    <h1 class="h-display">${c.h1}</h1>
    <p class="lead">${c.lead}</p>
    <div class="btns"><a class="btn btn-primary" href="${P(lang, '/products/')}">${u.nav.products}${icon('arrowRight')}</a><a class="btn btn-secondary" href="${P(lang, '/about/')}">${u.nav.about}</a></div>
    <div class="hero-meta">${c.meta.map(([ic, t]) => `<span>${icon(ic)}${t}</span>`).join('')}</div>
  </div>
  <div class="hero-art">${heroMockup(lang)}</div>
</div>
<div class="wrap" style="margin-top:72px"><div class="stats">${c.stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('')}</div></div>
</section>

<section class="sec sec-soft" aria-labelledby="h-areas"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.areas.eyebrow}</p><h2 class="h-2" id="h-areas">${c.areas.title}</h2></div><p>${c.areas.text}</p></div>
  <div class="cats">${CATEGORIES.map((k) => `<a class="cat" href="${P(lang, '/products/')}#${k.id}"><span class="icb">${icon(k.icon)}</span><h3>${k[lang].name}</h3><p>${c.areas.items[k.id]}</p><span class="cat-foot"><span>${k[lang].plat}</span><b>${byCat(k.id).length}</b></span></a>`).join('')}</div>
</div></section>

<section class="sec" aria-labelledby="h-apps"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.apps.eyebrow}</p><h2 class="h-2" id="h-apps">${c.apps.title}</h2></div><p>${c.apps.text}</p></div>
  <div class="pgrid">${featured.map((p) => pcard(lang, p)).join('')}</div>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-shop"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.shop.eyebrow}</p><h2 class="h-2" id="h-shop">${c.shop.title}</h2></div><p>${c.shop.text}</p></div>
  <div class="plist">${byCat('shopify').map((p) => prow(lang, p)).join('')}</div>
  <p class="small muted" style="margin-top:20px">${u.trademark}</p>
</div></section>

<section class="sec" aria-labelledby="h-prin"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.prin.eyebrow}</p><h2 class="h-2" id="h-prin">${c.prin.title}</h2></div><p>${c.prin.text}</p></div>
  ${principlesGrid(lang, PAGES_COPY[lang].principles)}
  <p style="margin-top:28px"><a class="link" href="${P(lang, '/principles/')}">${u.nav.principles}${icon('arrowRight')}</a></p>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-how"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.how.eyebrow}</p><h2 class="h-2" id="h-how">${c.how.title}</h2></div><p>${c.how.text}</p></div>
  ${stepsGrid(lang, PAGES_COPY[lang].steps)}
</div></section>

<section class="sec" aria-labelledby="h-co"><div class="wrap split">
  <div><p class="eyebrow">${c.co.eyebrow}</p><h2 class="h-2" id="h-co" style="margin-top:14px">${c.co.title}</h2><p class="muted" style="margin-top:16px">${c.co.text}</p><p style="margin-top:24px"><a class="link" href="${P(lang, '/about/')}">${u.nav.about}${icon('arrowRight')}</a></p></div>
  ${infoTable(lang)}
</div></section>

<section class="sec sec-soft" aria-labelledby="h-news"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.news.eyebrow}</p><h2 class="h-2" id="h-news">${c.news.title}</h2></div><p><a class="link" href="${P(lang, '/news/')}">${u.nav.news}${icon('arrowRight')}</a></p></div>
  ${newsList(lang, NEWS)}
</div></section>
${cta(lang)}`;
  },
});

// Products index
add({
  key: 'products', section: 'products',
  paths: { ko: '/products/', en: '/en/products/' },
  titles: { ko: '제품 | 언투링크', en: 'Products | EarnToLink' },
  descs: { ko: PAGES_COPY.ko.products.desc, en: PAGES_COPY.en.products.desc },
  jsonld: (lang) => [crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.products, P(lang, '/products/')]]), { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(P(lang, `/products/${p.slug}/`)), name: p[lang].name })) }],
  render(lang) {
    const c = PAGES_COPY[lang].products;
    const u = UI[lang];
    const tabs = CATEGORIES.map((k) => `<a href="#${k.id}">${k[lang].name} <span>${byCat(k.id).length}</span></a>`).join('');
    const groups = CATEGORIES.map((k) => {
      const list = byCat(k.id);
      const cols = k.id === 'desktop' ? '' : ' two';
      return `<section class="group" id="${k.id}" aria-labelledby="g-${k.id}"><div class="wrap">
  <div class="group-head"><div><h2 id="g-${k.id}">${k[lang].name}</h2><p>${c.groups[k.id]}</p></div><span class="badge ${list[0].status}">${STATUS[lang][list[0].status]}</span></div>
  <div class="pgrid${cols}">${list.map((p) => pcard(lang, p)).join('')}</div>
  ${k.id === 'shopify' ? `<p class="small muted" style="margin-top:20px">${u.trademark}</p>` : ''}
</div></section>`;
    }).join('');
    return `${phead(lang, c.eyebrow, c.title, c.lead, crumbs(lang, [[u.nav.products]]))}
<div class="wrap"><nav class="tabs" aria-label="${c.tabsLabel}">${tabs}</nav></div>
${groups}
${cta(lang)}`;
  },
});

// Product details
for (const p of PRODUCTS) {
  add({
    key: 'product-' + p.slug, section: 'products',
    paths: { ko: `/products/${p.slug}/`, en: `/en/products/${p.slug}/` },
    titles: { ko: `${p.ko.name}${p.ko.alt ? ` (${p.ko.alt})` : ''} | 언투링크`, en: `${p.en.name} | EarnToLink` },
    descs: { ko: `${p.ko.name}: ${p.ko.summary}. ${p.ko.lead}`, en: `${p.en.name}: ${p.en.summary}. ${p.en.lead}` },
    jsonld: (lang) => [appLd(lang, p), crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.products, P(lang, '/products/')], [p[lang].name, P(lang, `/products/${p.slug}/`)]])],
    render(lang) {
      const d = p[lang];
      const u = UI[lang];
      const k = catOf(p.cat);
      const pc = PAGES_COPY[lang].detail;
      const related = byCat(p.cat).filter((x) => x.slug !== p.slug).slice(0, 3);
      const rel = [...related, ...PRODUCTS.filter((x) => x.cat !== p.cat && x.cat !== 'shopify')].slice(0, 3);
      const facts = [[u.platform, k[lang].plat], [u.status, STATUS[lang][p.status]], ...d.specs.filter(([a]) => ![u.platform, u.status, '플랫폼', 'Platform', 'Platforms', '상태', 'Status'].includes(a)).slice(0, 2)];
      const primary = p.url
        ? `<a class="btn btn-primary" href="${p.url}" rel="noopener">${u.visit}${icon('arrowUpRight')}</a>`
        : `<a class="btn btn-primary" href="${mailto}?subject=${encodeURIComponent(d.name)}">${u.mailBtn}${icon('mail')}</a>`;
      const priv = pc.privacy[p.cat];
      return `<section class="pd-hero"><div class="wrap">
  ${crumbs(lang, [[u.nav.products, P(lang, '/products/')], [k[lang].name, P(lang, '/products/') + '#' + p.cat], [d.name]])}
  <div class="pd-grid">
    <div>
      ${badge(lang, p.status)}
      <h1 class="h-1">${esc(d.name)}</h1>
      ${d.alt ? `<p class="pd-alt">${esc(d.alt)}</p>` : '<p class="pd-alt"></p>'}
      <p class="lead">${esc(d.summary)}. ${esc(d.lead)}</p>
      <div class="btns">${primary}<a class="btn btn-secondary" href="${P(lang, '/products/')}">${u.all}</a></div>
      <dl class="facts">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${String(b).split(' (')[0]}</dd></div>`).join('')}</dl>
    </div>
    <div class="pd-art">${productMockup(p, lang)}</div>
  </div>
</div></section>

<section class="sec sec-soft" aria-labelledby="h-feat"><div class="wrap">
  <div class="sec-head single"><div><p class="eyebrow">${u.features}</p><h2 class="h-2" id="h-feat">${pc.featTitle(d.name)}</h2></div></div>
  <div class="feat">${d.features.map(([ic, h, t]) => `<div><span class="icb">${icon(ic)}</span><h3>${esc(h)}</h3><p>${esc(t)}</p></div>`).join('')}</div>
</div></section>

<section class="sec" aria-labelledby="h-spec"><div class="wrap split">
  <div><p class="eyebrow">${u.specs}</p><h2 class="h-2" id="h-spec" style="margin-top:14px">${u.specs}</h2>
    <div class="note" style="margin-top:28px">${icon('shield')}<div><b>${u.privacyNote}</b><br>${priv} <a class="link-u" href="${P(lang, '/privacy/')}#${p.cat === 'shopify' ? 'shopify' : p.cat === 'web' ? 'web' : 'apps'}">${u.privacy}</a></div></div>
    ${p.cat === 'shopify' ? `<p class="small muted" style="margin-top:16px">${u.trademark}</p>` : ''}
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
  key: 'about', section: 'about',
  paths: { ko: '/about/', en: '/en/about/' },
  titles: { ko: '회사 소개 | 언투링크', en: 'About | EarnToLink' },
  descs: { ko: PAGES_COPY.ko.about.desc, en: PAGES_COPY.en.about.desc },
  jsonld: (lang) => [orgLd(), crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.about, P(lang, '/about/')]])],
  render(lang) {
    const c = PAGES_COPY[lang].about;
    const u = UI[lang];
    return `${phead(lang, c.eyebrow, c.title, c.lead, crumbs(lang, [[u.nav.about]]))}
<section class="sec" aria-labelledby="h-mission"><div class="wrap split">
  <div><p class="eyebrow">${c.mission.eyebrow}</p><h2 class="h-2" id="h-mission" style="margin-top:14px">${c.mission.title}</h2></div>
  <div class="prose">${c.mission.body.map((t) => `<p>${t}</p>`).join('')}</div>
</div></section>
<section class="sec sec-soft" aria-labelledby="h-do"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.do.eyebrow}</p><h2 class="h-2" id="h-do">${c.do.title}</h2></div><p>${c.do.text}</p></div>
  <div class="cats">${CATEGORIES.map((k) => `<a class="cat" href="${P(lang, '/products/')}#${k.id}"><span class="icb">${icon(k.icon)}</span><h3>${k[lang].name}</h3><p>${PAGES_COPY[lang].home.areas.items[k.id]}</p><span class="cat-foot"><span>${k[lang].plat}</span><b>${byCat(k.id).length}</b></span></a>`).join('')}</div>
</div></section>
<section class="sec" aria-labelledby="h-prin2"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.prin.eyebrow}</p><h2 class="h-2" id="h-prin2">${c.prin.title}</h2></div><p><a class="link" href="${P(lang, '/principles/')}">${u.nav.principles}${icon('arrowRight')}</a></p></div>
  ${principlesGrid(lang, PAGES_COPY[lang].principles)}
</div></section>
<section class="sec sec-soft" aria-labelledby="h-info"><div class="wrap split">
  <div><p class="eyebrow">${c.info.eyebrow}</p><h2 class="h-2" id="h-info" style="margin-top:14px">${c.info.title}</h2></div>
  ${infoTable(lang)}
</div></section>
${cta(lang)}`;
  },
});

// Principles
add({
  key: 'principles', section: 'principles',
  paths: { ko: '/principles/', en: '/en/principles/' },
  titles: { ko: '일하는 방식 | 언투링크', en: 'Principles | EarnToLink' },
  descs: { ko: PAGES_COPY.ko.prinPage.desc, en: PAGES_COPY.en.prinPage.desc },
  jsonld: (lang) => [crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.principles, P(lang, '/principles/')]])],
  render(lang) {
    const c = PAGES_COPY[lang].prinPage;
    const u = UI[lang];
    return `${phead(lang, c.eyebrow, c.title, c.lead, crumbs(lang, [[u.nav.principles]]))}
<section class="sec" aria-labelledby="h-p"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.p.eyebrow}</p><h2 class="h-2" id="h-p">${c.p.title}</h2></div><p>${c.p.text}</p></div>
  ${principlesGrid(lang, PAGES_COPY[lang].principles)}
</div></section>
<section class="sec sec-soft" aria-labelledby="h-s"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">${c.s.eyebrow}</p><h2 class="h-2" id="h-s">${c.s.title}</h2></div><p>${c.s.text}</p></div>
  ${stepsGrid(lang, PAGES_COPY[lang].steps)}
</div></section>
<section class="sec" aria-labelledby="h-price"><div class="wrap split">
  <div><p class="eyebrow">${c.price.eyebrow}</p><h2 class="h-2" id="h-price" style="margin-top:14px">${c.price.title}</h2></div>
  <table class="info">${c.price.rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('')}</table>
</div></section>
${cta(lang)}`;
  },
});

// News index
add({
  key: 'news', section: 'news',
  paths: { ko: '/news/', en: '/en/news/' },
  titles: { ko: '소식 | 언투링크', en: 'News | EarnToLink' },
  descs: { ko: '언투링크 소식: 사이트 공개, 제품 현황.', en: 'EarnToLink news: site launch and product status.' },
  jsonld: (lang) => [crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.news, P(lang, '/news/')]])],
  render(lang) {
    const u = UI[lang];
    return `${phead(lang, lang === 'ko' ? '소식' : 'News', lang === 'ko' ? '소식' : 'News', '', crumbs(lang, [[u.nav.news]]))}
<section class="sec" style="padding-top:56px"><div class="wrap">${newsList(lang, NEWS)}
<p style="margin-top:28px"><a class="link" href="${P(lang, '/feed.xml')}">${icon('rss')}RSS</a></p></div></section>`;
  },
});
for (const n of NEWS) {
  add({
    key: 'news-' + n.slug, section: 'news', ogType: 'article',
    paths: { ko: `/news/${n.slug}/`, en: `/en/news/${n.slug}/` },
    titles: { ko: `${n.ko.title} | 언투링크 소식`, en: `${n.en.title} | EarnToLink News` },
    descs: { ko: n.ko.summary + ' ' + n.ko.body[0], en: n.en.summary + ' ' + n.en.body[0] },
    jsonld: (lang) => [{ '@context': 'https://schema.org', '@type': 'Article', headline: n[lang].title, datePublished: n.date, dateModified: n.date, inLanguage: lang, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: abs(P(lang, `/news/${n.slug}/`)), image: abs(`/assets/img/og-${lang}.png`) }],
    render(lang) {
      const u = UI[lang];
      return `<section class="phead"><div class="wrap">${crumbs(lang, [[u.nav.news, P(lang, '/news/')], [n[lang].title]])}<p class="eyebrow" style="margin-top:28px"><time datetime="${n.date}">${fmtDate(lang, n.date)}</time></p><h1 class="h-1">${esc(n[lang].title)}</h1></div></section>
<section class="sec" style="padding-top:56px"><div class="wrap"><div class="prose">${n[lang].body.map((t) => `<p>${esc(t)}</p>`).join('')}
<p style="margin-top:32px"><a href="${P(lang, '/news/')}">${u.nav.news}</a> · <a href="${P(lang, '/products/')}">${u.nav.products}</a></p></div></div></section>`;
    },
  });
}

// Contact
add({
  key: 'contact', section: 'contact',
  paths: { ko: '/contact/', en: '/en/contact/' },
  titles: { ko: '문의 | 언투링크', en: 'Contact | EarnToLink' },
  descs: { ko: `언투링크 문의: ${SITE.email}`, en: `Contact EarnToLink: ${SITE.email}` },
  jsonld: (lang) => [orgLd(), crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang].nav.contact, P(lang, '/contact/')]])],
  render(lang) {
    const c = PAGES_COPY[lang].contact;
    const u = UI[lang];
    return `${phead(lang, c.eyebrow, c.title, c.lead, crumbs(lang, [[u.nav.contact]]))}
<section class="sec" style="padding-top:64px"><div class="wrap">
  <div class="contact-card">
    <div><p class="eyebrow">${u.email}</p><a class="mail" href="${mailto}">${SITE.email}</a><div class="btns"><a class="btn btn-primary" href="${mailto}">${u.mailBtn}${icon('mail')}</a></div></div>
    <div><ul>${c.topics.map(([ic, h, t]) => `<li>${icon(ic)}<span><b style="color:var(--ink)">${h}</b><br>${t}</span></li>`).join('')}</ul></div>
  </div>
</div></section>`;
  },
});

// Privacy & Terms
for (const key of ['privacy', 'terms']) {
  add({
    key, section: key,
    paths: { ko: `/${key}/`, en: `/en/${key}/` },
    titles: { ko: `${UI.ko[key]} | 언투링크`, en: `${UI.en[key]} | EarnToLink` },
    descs: { ko: PAGES_COPY.ko[key].desc, en: PAGES_COPY.en[key].desc },
    jsonld: (lang) => [crumbLd(lang, [[UI[lang].home, P(lang, '/')], [UI[lang][key], P(lang, `/${key}/`)]])],
    render(lang) {
      const c = PAGES_COPY[lang][key];
      const u = UI[lang];
      const toc = c.sections.map((s) => `<a href="#${s.id}">${s.h}</a>`).join('');
      const body = c.sections.map((s) => `<h2 id="${s.id}">${s.h}</h2>${s.html}`).join('');
      return `${phead(lang, c.eyebrow, u[key], c.lead, crumbs(lang, [[u[key]]]))}
<div class="wrap doc"><nav class="toc" aria-label="${lang === 'ko' ? '목차' : 'Contents'}">${toc}</nav><article class="prose">${body}</article></div>`;
    },
  });
}

// ---------------------------------------------------------------- write
async function write(p, content) {
  const f = join(OUT, p.endsWith('/') ? p + 'index.html' : p);
  await mkdir(dirname(f), { recursive: true });
  await writeFile(f, content);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });
// icons/OG live in assets/img; favicons also at root
for (const f of ['favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) {
  await cp(join(ROOT, 'assets/img', f), join(OUT, f)).catch(() => console.warn('missing asset', f, '(run npm run assets)'));
}
let count = 0;
for (const page of pages) for (const lang of LANGS) { await write(page.paths[lang], layout(lang, page, page.render(lang))); count++; }

// 404 (bilingual, noindex)
const nf = { paths: { ko: '/404.html' }, titles: { ko: '404 | 언투링크 EarnToLink' }, descs: { ko: '페이지 없음. Page not found.' }, noindex: true, section: '' };
await write('/404.html', layout('ko', nf, `<section class="nf"><div class="wrap"><p class="code">404</p><h1 class="h-1" style="margin:14px 0 12px">페이지 없음</h1><p class="lead" lang="en">Page not found</p><div class="btns" style="margin-top:32px"><a class="btn btn-primary" href="/">홈</a><a class="btn btn-secondary" href="/en/" lang="en">Home (English)</a><a class="btn btn-secondary" href="/products/">제품</a></div></div></section>`));
count++;

// sitemap
const sm = pages.map((pg) => LANGS.map((lang) => `  <url>
    <loc>${abs(pg.paths[lang])}</loc>
    <lastmod>${SITE.updated}</lastmod>
    <xhtml:link rel="alternate" hreflang="ko" href="${abs(pg.paths.ko)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(pg.paths.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pg.paths.ko)}"/>
  </url>`).join('\n')).join('\n');
await write('/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sm}
</urlset>
`);
await write('/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);

// RSS feeds
const rfc822 = (d) => new Date(d + 'T00:00:00+09:00').toUTCString();
for (const lang of LANGS) {
  const self = abs(P(lang, '/feed.xml'));
  const items = NEWS.map((n) => `    <item>
      <title>${esc(n[lang].title)}</title>
      <link>${abs(P(lang, `/news/${n.slug}/`))}</link>
      <guid isPermaLink="true">${abs(P(lang, `/news/${n.slug}/`))}</guid>
      <pubDate>${rfc822(n.date)}</pubDate>
      <description>${esc(n[lang].body.join(' '))}</description>
    </item>`).join('\n');
  await write(P(lang, '/feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${lang === 'ko' ? '언투링크 소식' : 'EarnToLink News'}</title>
    <link>${abs(P(lang, '/news/'))}</link>
    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
    <description>${lang === 'ko' ? '언투링크(EarnToLink) 소식' : 'News from EarnToLink (언투링크)'}</description>
    <language>${lang === 'ko' ? 'ko-KR' : 'en-US'}</language>
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

console.log(`built ${count} HTML pages (${pages.length} x ${LANGS.length} + 404) -> site/`);
