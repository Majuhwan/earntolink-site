// Schematic product mockups as inline SVG. Abstract UI only, no people.
// Colors come from CSS custom properties (see .mk rules in site.css) so dark mode works.

let uid = 0;
const R = (x, y, w, h, c = 'f-t3', rx = 0, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ''} class="${c}"${extra}/>`;
const L = (x, y, w, c = 'f-t3', h = 6) => R(x, y, w, h, c, h / 2);
const T = (x, y, s, size = 11, c = 'tx', weight = 500, anchor = 'start') => `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" class="${c}" text-anchor="${anchor}">${esc(s)}</text>`;
const C = (cx, cy, r, c = 'f-t3') => `<circle cx="${cx}" cy="${cy}" r="${r}" class="${c}"/>`;
const G = (x, y, inner, s = 1) => `<g transform="translate(${x} ${y})${s !== 1 ? ` scale(${s})` : ''}">${inner}</g>`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const check = (x, y, s = 1, c = 's-white') => `<path d="M${x} ${y + 4 * s} l${3 * s} ${3 * s} l${6 * s} -${6.5 * s}" class="${c}" fill="none" stroke-width="${1.8 * s}" stroke-linecap="round" stroke-linejoin="round"/>`;

function photo(x, y, w, h, v = 0) {
  const id = `ph${++uid}`;
  const tones = [['f-acc3', 'f-acc2', 'f-acc'], ['f-g1', 'f-g2', 'f-g3'], ['f-acc3', 'f-g2', 'f-acc2'], ['f-g1', 'f-acc2', 'f-g3']][v % 4];
  const p1 = `M${x} ${y + h} L${x} ${y + h * 0.72} L${x + w * 0.32} ${y + h * 0.45} L${x + w * 0.55} ${y + h * 0.68} L${x + w * 0.72} ${y + h * 0.55} L${x + w} ${y + h * 0.8} L${x + w} ${y + h}Z`;
  return `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/></clipPath><g clip-path="url(#${id})">${R(x, y, w, h, tones[0])}<circle cx="${x + w * 0.74}" cy="${y + h * 0.3}" r="${Math.min(w, h) * 0.1}" class="${tones[1]}"/><path d="${p1}" class="${tones[2]}"/></g>`;
}

// Desktop window 592x392
function desktop(title, side, body, { sideW = 140, url = null } = {}) {
  const W = 592, H = 392, top = url ? 40 : 34;
  let s = R(0, 0, W, H, 'f-bg s-frame', 12);
  s += `<path d="M0 12a12 12 0 0 1 12-12h${W - 24}a12 12 0 0 1 12 12v${top - 12}H0z" class="f-chrome"/>`;
  s += C(18, top / 2, 4.5, 'f-dot') + C(32, top / 2, 4.5, 'f-dot') + C(46, top / 2, 4.5, 'f-dot');
  if (url) s += R(150, 10, 292, 20, 'f-bg', 10) + T(296, 24, url, 10, 'tx3', 500, 'middle');
  else s += T(W / 2, 21, title, 11, 'tx2', 600, 'middle');
  s += `<path d="M0 ${top}H${W}" class="s-line"/>`;
  if (side) {
    s += `<path d="M0 ${top}H${sideW}V${H}H12a12 12 0 0 1-12-12z" class="f-side"/>`;
    s += `<path d="M${sideW} ${top}V${H}" class="s-line"/>`;
    s += G(0, top, side(sideW, H - top));
  }
  s += G(side ? sideW : 0, top, body(W - (side ? sideW : 0), H - top));
  return s;
}

// Phone 210x420
function phone(body) {
  const W = 210, H = 420;
  let s = R(0, 0, W, H, 'f-bezel', 34);
  s += R(7, 7, W - 14, H - 14, 'f-bg', 28);
  s += R(W / 2 - 30, 15, 60, 16, 'f-bezel', 8);
  s += G(7, 40, body(W - 14, H - 54));
  s += R(W / 2 - 34, H - 18, 68, 4, 'f-t3', 2);
  return s;
}

function svg(inner, vw = 640, vh = 440, label = '') {
  return `<svg class="mk" viewBox="0 0 ${vw} ${vh}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

const sideRows = (labels, active = 0, w = 140) => (sw) => {
  let s = L(16, 18, 46, 'f-t3', 5);
  labels.forEach((t, i) => {
    const y = 34 + i * 28;
    if (i === active) s += R(8, y - 4, sw - 16, 24, 'f-acc3', 6);
    s += R(16, y + 2, 12, 12, i === active ? 'f-acc' : 'f-t3', 3);
    s += typeof t === 'string' ? T(36, y + 12, t, 10.5, i === active ? 'tx' : 'tx2', i === active ? 600 : 500) : L(36, y + 5, t, i === active ? 'f-t2' : 'f-t3');
  });
  return s;
};

// ---------- Desktop apps ----------
function spaceMapBody(lang) {
  return (w, h) => {
    let s = T(18, 28, lang === 'ko' ? '~/문서' : '~/Documents', 13, 'tx', 700);
    // segmented
    s += R(w - 176, 12, 160, 26, 'f-chrome', 7) + R(w - 174, 14, 52, 22, 'f-bg s-line', 6);
    s += L(w - 160, 22, 24, 'f-t2') + L(w - 108, 22, 30, 'f-t3') + L(w - 56, 22, 28, 'f-t3');
    const ax = 16, ay = 50, aw = 284, ah = h - 66;
    const tiles = [
      [0, 0, 0.56, 0.6, 'f-acc'], [0.56, 0, 0.44, 0.36, 'f-acc2'], [0.56, 0.36, 0.44, 0.24, 'f-g2'],
      [0, 0.6, 0.36, 0.4, 'f-acc2'], [0.36, 0.6, 0.3, 0.4, 'f-g2'], [0.66, 0.6, 0.34, 0.2, 'f-acc3'],
      [0.66, 0.8, 0.18, 0.2, 'f-g1'], [0.84, 0.8, 0.16, 0.2, 'f-g3'],
    ];
    tiles.forEach(([x, y, tw, th, c], i) => {
      const X = ax + x * aw + 1.5, Y = ay + y * ah + 1.5, W = tw * aw - 3, H = th * ah - 3;
      s += R(X, Y, W, H, c, 5);
      if (i < 2) s += L(X + 10, Y + 12, Math.min(70, W - 24), i === 0 ? 'f-on' : 'f-on2') + L(X + 10, Y + 24, 36, i === 0 ? 'f-on2' : 'f-on3', 5);
    });
    // list panel
    const lx = ax + aw + 14, lw = w - lx - 14;
    s += R(lx, ay, lw, ah, 'f-bg s-line', 8);
    s += L(lx + 12, ay + 14, 54, 'f-t2', 5);
    [0.92, 0.7, 0.5, 0.38, 0.26, 0.18, 0.12].forEach((p, i) => {
      const y = ay + 36 + i * 38;
      s += R(lx + 12, y, 10, 10, i < 2 ? 'f-acc' : i < 4 ? 'f-acc2' : 'f-g2', 2.5);
      s += L(lx + 28, y + 2, lw - 70, 'f-t3', 5) + L(lx + lw - 36, y + 2, 24, 'f-t2', 5);
      s += R(lx + 12, y + 18, lw - 24, 4, 'f-chrome', 2) + R(lx + 12, y + 18, (lw - 24) * p, 4, i < 2 ? 'f-acc' : 'f-g3', 2);
    });
    return s;
  };
}

function spaceMap(lang) {
  const labels = lang === 'ko' ? ['홈', '다운로드', '데스크톱', '문서', '사진', '동영상'] : ['Home', 'Downloads', 'Desktop', 'Documents', 'Pictures', 'Videos'];
  return desktop(lang === 'ko' ? '용량 지도' : 'Space Map', sideRows(labels, 3), spaceMapBody(lang));
}

function dupeless(lang) {
  const labels = lang === 'ko' ? ['다운로드', '사진', '문서'] : ['Downloads', 'Pictures', 'Documents'];
  const side = (sw, sh) => {
    let s = sideRows(labels, -1)(sw);
    s += L(16, 132, 50, 'f-t3', 5) + R(16, 146, sw - 32, 22, 'f-bg s-line', 6) + L(26, 154, 40, 'f-t2', 5);
    s += R(16, 180, 26, 14, 'f-acc', 7) + C(35, 187, 5, 'f-white') + L(50, 184, 60, 'f-t3', 5);
    s += R(16, sh - 50, sw - 32, 32, 'f-ink', 8) + T(sw / 2, sh - 30, lang === 'ko' ? '중복 검색' : 'Find', 11, 'tx-inv', 600, 'middle');
    return s;
  };
  const body = (w, h) => {
    let s = '';
    // stages
    const st = lang === 'ko' ? ['파일 목록', '빠른 비교', '정밀 비교'] : ['File list', 'Quick', 'Full'];
    st.forEach((t, i) => {
      const x = 26 + i * 128;
      if (i < 2) s += R(x + 12, 27, 116, 2, 'f-acc', 1);
      s += C(x + 6, 28, 8, 'f-acc') + check(x + 1.5, 23.5, 1, 's-white') + T(x - 4, 54, t, 10, 'tx2', 600);
    });
    const groups = [3, 2];
    let y = 72;
    groups.forEach((n, gi) => {
      const gh = 30 + n * 28;
      s += R(16, y, w - 32, gh, 'f-bg s-line', 8);
      s += R(28, y + 10, 12, 14, gi === 0 ? 'f-acc2' : 'f-g2', 2) + L(48, y + 14, 120, 'f-t2', 5) + L(w - 90, y + 14, 60, 'f-t3', 5);
      for (let r = 0; r < n; r++) {
        const ry = y + 34 + r * 28;
        s += `<path d="M28 ${ry - 6}H${w - 28}" class="s-line"/>`;
        if (r === 0) { s += R(28, ry + 2, 14, 14, 'f-bg s-strong', 4); s += R(w - 78, ry + 3, 46, 13, 'f-chrome', 6.5) + L(w - 70, ry + 7, 30, 'f-t2', 5); }
        else { s += R(28, ry + 2, 14, 14, 'f-acc', 4) + check(31, ry + 4.5, 0.8); }
        s += L(52, ry + 6, 150 - r * 18, r === 0 ? 'f-t2' : 'f-t3', 5);
      }
      y += gh + 10;
    });
    s += R(16, h - 44, w - 32, 32, 'f-chrome', 8) + L(28, h - 31, 120, 'f-t2', 5) + R(w - 138, h - 40, 118, 24, 'f-ink', 6) + L(w - 120, h - 31, 82, 'f-inv', 5);
    return s;
  };
  return desktop(lang === 'ko' ? '중복 싹' : 'Dupeless', side, body);
}

function archiveFix(lang) {
  const labels = lang === 'ko' ? ['시작', '압축 해제', '압축'] : ['Start', 'Extract', 'Compress'];
  const side = (sw, sh) => {
    let s = sideRows(labels, 1)(sw);
    s += L(16, 132, 48, 'f-t3', 5);
    for (let i = 0; i < 3; i++) s += R(16, 148 + i * 26, 14, 16, 'f-g2', 3) + L(36, 153 + i * 26, 70 - i * 10, 'f-t3', 5);
    return s;
  };
  const rows = [['√÷¡æ ∫∏∞Ìº≠.hwp', '최종 보고서.hwp'], ['»∏¿«∑œ_1ø˘.docx', '회의록_1월.docx'], ['∞Ëæ‡º≠.pdf', '계약서.pdf']];
  const body = (w, h) => {
    let s = `<rect x="16" y="14" width="${w - 32}" height="66" rx="10" class="f-chrome s-dash"/>`;
    s += `<g transform="translate(${w / 2 - 70} 34)"><path d="M10 0v14M4 8l6 6 6-6M0 16v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" class="s-ink" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    s += T(w / 2 - 42, 50, lang === 'ko' ? '파일 드롭' : 'Drop files', 12, 'tx', 600);
    s += R(16, 92, w - 32, h - 108, 'f-bg s-line', 10);
    s += R(30, 106, 16, 18, 'f-acc2', 3) + T(54, 120, lang === 'ko' ? '자료 모음.zip' : 'files.zip', 12, 'tx', 700);
    s += R(w - 150, 105, 120, 20, 'f-acc3', 10) + T(w - 90, 119, 'CP949 → UTF-8', 10, 'tx-acc', 700, 'middle');
    rows.forEach(([bad, good], i) => {
      const y = 146 + i * 44;
      s += `<path d="M30 ${y - 8}H${w - 30}" class="s-line"/>`;
      s += R(30, y + 2, 14, 16, i === 3 ? 'f-acc2' : 'f-g2', 3);
      s += `<text x="54" y="${y + 10}" font-size="10" font-weight="500" class="tx3" text-decoration="line-through">${esc(bad)}</text>`;
      s += T(54, y + 26, good, 12, 'tx', 600);
      s += R(w - 64, y + 6, 34, 16, 'f-acc', 8) + check(w - 53, y + 9, 0.85);
    });
    s += R(w - 132, h - 48, 98, 26, 'f-ink', 7) + T(w - 83, h - 31, lang === 'ko' ? '압축 해제' : 'Extract', 11, 'tx-inv', 600, 'middle');
    return s;
  };
  return desktop(lang === 'ko' ? '한글 압축' : 'Archive Fix', side, body);
}

// ---------- Mobile apps ----------
function rollTidyScreen(lang) {
  return (w, h) => {
    let s = T(14, 18, lang === 'ko' ? '정리 싹' : 'Roll Tidy', 14, 'tx', 700);
    s += R(12, 30, w - 24, 64, 'f-acc3', 12) + L(24, 44, 60, 'f-acc2', 5) + R(24, 56, 92, 14, 'f-acc', 4) + R(24, 78, w - 48, 5, 'f-bg', 2.5) + R(24, 78, (w - 48) * 0.62, 5, 'f-acc', 2.5);
    const cats = lang === 'ko' ? ['비슷한 사진', '흐린 사진', '스크린샷', '큰 동영상'] : ['Similar', 'Blurry', 'Screenshots', 'Large videos'];
    cats.forEach((t, i) => {
      const y = 106 + i * 34;
      s += R(12, y, 24, 24, i === 0 ? 'f-acc' : 'f-acc3', 7) + T(44, y + 16, t, 10.5, 'tx', 600) + L(w - 50, y + 10, 32, 'f-t3', 5);
    });
    const gy = 250, gw = (w - 24 - 8) / 3;
    for (let i = 0; i < 6; i++) {
      const x = 12 + (i % 3) * (gw + 4), y = gy + Math.floor(i / 3) * (gw + 4);
      s += photo(x, y, gw, gw, i % 2 ? 1 : 0);
      if (i === 0) s += R(x + 1, y + 1, gw - 2, gw - 2, 's-acc', 5) + C(x + gw - 11, y + 11, 7, 'f-acc') + check(x + gw - 15, y + 7, 0.75);
      else s += C(x + gw - 11, y + 11, 6.5, 'f-white s-line');
    }
    return s;
  };
}
function rollTidy(lang) {
  let s = G(215, 10, phone(rollTidyScreen(lang)));
  s += G(36, 96, card(150, 96, (cw) => R(12, 12, 22, 22, 'f-acc', 6) + T(42, 27, lang === 'ko' ? '추천 보관' : 'Best shot', 11, 'tx', 700) + photo(12, 44, 38, 38, 0) + photo(56, 44, 38, 38, 1) + photo(100, 44, 38, 38, 2) + R(13, 45, 36, 36, 's-acc', 5)));
  s += G(454, 276, card(150, 70, () => R(12, 14, 22, 22, 'f-chrome', 6) + T(42, 29, lang === 'ko' ? '휴지통 이동' : 'To trash', 11, 'tx', 700) + L(12, 48, 110, 'f-t3', 5)));
  return s;
}

function rollFlickScreen(lang) {
  return (w, h) => {
    let s = T(14, 18, lang === 'ko' ? '9월' : 'September', 14, 'tx', 700) + L(w - 60, 10, 44, 'f-t3', 5);
    s += R(14, 30, w - 28, 4, 'f-chrome', 2) + R(14, 30, (w - 28) * 0.4, 4, 'f-acc', 2);
    const cx = w / 2;
    s += `<g transform="rotate(-5 ${cx} 180)">${R(26, 60, w - 52, 230, 'f-chrome s-line', 14)}</g>`;
    s += `<g transform="rotate(7 ${cx} 180)">${R(20, 54, w - 40, 236, 'f-bg s-line', 14)}${photo(28, 62, w - 56, 182, 0)}${L(28, 256, 70, 'f-t2', 5)}${L(28, 270, 44, 'f-t3', 5)}${R(w - 92, 72, 50, 20, 'f-ink', 10)}${T(w - 67, 86, lang === 'ko' ? '보관' : 'Keep', 10, 'tx-inv', 700, 'middle')}</g>`;
    const by = h - 52;
    s += C(cx - 40, by, 22, 'f-bg s-strong') + `<path d="M${cx - 46} ${by - 6}l12 12M${cx - 34} ${by - 6}l-12 12" class="s-ink" stroke-width="2" stroke-linecap="round"/>`;
    s += C(cx + 40, by, 22, 'f-ink') + check(cx + 33, by - 5, 1.3, 's-inv');
    s += C(cx, by, 13, 'f-chrome') + `<path d="M${cx - 5} ${by - 2}h7a3.5 3.5 0 0 1 0 7h-4M${cx - 2} ${by - 5}l-3 3 3 3" class="s-ink" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    return s;
  };
}
function rollFlick(lang) {
  let s = G(215, 10, phone(rollFlickScreen(lang)));
  s += G(40, 170, pill(130, lang === 'ko' ? '← 삭제' : '← Delete', false));
  s += G(470, 210, pill(130, lang === 'ko' ? '보관 →' : 'Keep →', true));
  s += G(44, 300, card(140, 84, () => L(14, 16, 50, 'f-t3', 5) + T(14, 46, lang === 'ko' ? '연속 정리' : 'Streak', 12, 'tx', 700) + R(14, 58, 112, 6, 'f-chrome', 3) + R(14, 58, 70, 6, 'f-acc', 3)));
  return s;
}

function card(w, h, inner) { return R(0, 0, w, h, 'f-bg s-frame shadow', 14) + inner(w, h); }
function pill(w, t, dark) { return R(0, 0, w, 36, dark ? 'f-ink shadow' : 'f-bg s-frame shadow', 18) + T(w / 2, 23, t, 12, dark ? 'tx-inv' : 'tx', 700, 'middle'); }


// Product mockup. lang 'ko' gets Korean UI labels, everything else English labels.
export function productMockup(p, lang, name) {
  const L2 = lang === 'ko' ? 'ko' : 'en';
  const label = (lang === 'ko' ? '제품 화면 예시: ' : 'Product illustration: ') + name;
  let inner = '';
  if (p.mock === 'spaceMap') inner = G(24, 24, spaceMap(L2));
  else if (p.mock === 'dupeless') inner = G(24, 24, dupeless(L2));
  else if (p.mock === 'archiveFix') inner = G(24, 24, archiveFix(L2));
  else if (p.mock === 'rollTidy') inner = rollTidy(L2);
  else if (p.mock === 'rollFlick') inner = rollFlick(L2);
  return svg(inner, 640, 440, label);
}

// Hero: one company in the middle, markets (languages) around it.
// chips: [[label, lang]] in display order; center: [brand, sub]
export function heroMockup(label, chips, center) {
  const W = 720, H = 520, cx = 360, cy = 262;
  let s = '';
  // globe lines
  s += `<g fill="none" class="s-line" stroke-width="1">`;
  s += `<circle cx="${cx}" cy="${cy}" r="170"/><circle cx="${cx}" cy="${cy}" r="118" opacity=".7"/>`;
  s += `<ellipse cx="${cx}" cy="${cy}" rx="70" ry="170"/><ellipse cx="${cx}" cy="${cy}" rx="130" ry="170" opacity=".7"/>`;
  s += `<path d="M${cx - 170} ${cy}H${cx + 170}M${cx - 150} ${cy - 80}H${cx + 150}M${cx - 150} ${cy + 80}H${cx + 150}" opacity=".7"/></g>`;
  // chips on an ellipse
  const n = chips.length, rx = 300, ry = 222;
  const pos = chips.map((c, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a), c];
  });
  pos.forEach(([x, y]) => { s += `<path d="M${cx} ${cy}L${x.toFixed(1)} ${y.toFixed(1)}" class="s-line" stroke-dasharray="3 5" fill="none"/>`; });
  pos.forEach(([x0, y, [t, lg]], i) => {
    let x = x0;
    const w = Math.max(54, 16 + [...t].length * (/[\u3040-\u9fff\uac00-\ud7a3]/.test(t) ? 14 : 8.2));
    const on = i % 4 === 0;
    x = Math.min(Math.max(x, w / 2 + 6), W - w / 2 - 6);
    s += `<g transform="translate(${(x - w / 2).toFixed(1)} ${(y - 17).toFixed(1)})">${R(0, 0, w, 34, on ? 'f-ink shadow' : 'f-bg s-frame shadow', 17)}<text x="${w / 2}" y="22" font-size="13" font-weight="650" class="${on ? 'tx-inv' : 'tx'}" text-anchor="middle"${lg ? ` lang="${lg}"` : ''}>${esc(t)}</text></g>`;
  });
  // center card
  s += G(cx - 92, cy - 62, R(0, 0, 184, 124, 'f-bg s-frame shadow', 22)
    + R(68, 16, 48, 48, 'f-ink', 12)
    + `<g fill="none" class="s-inv" stroke-width="3.4" stroke-linecap="round" transform="translate(68 16) scale(1.5)"><path d="M13.6 18.4a4.2 4.2 0 0 1 0-5.9l2.6-2.6a4.2 4.2 0 0 1 5.9 5.9l-1.3 1.3"/><path d="M18.4 13.6a4.2 4.2 0 0 1 0 5.9l-2.6 2.6a4.2 4.2 0 0 1-5.9-5.9l1.3-1.3"/></g>`
    + T(92, 88, center[0], 16, 'tx', 750, 'middle') + T(92, 108, center[1], 11.5, 'tx2', 550, 'middle'));
  return svg(s, W, H, label);
}

// Hero for the ad revenue consulting positioning: an abstract revenue dashboard (no numbers, no claims).
// chans: three channel names (home.meta), center: [brand, brandAlt]
export function heroAdMockup(label, chans, center) {
  const W = 720, H = 520;
  let s = '';
  // main dashboard card
  let d = R(0, 0, 520, 360, 'f-bg s-frame shadow', 20);
  d += R(24, 22, 30, 30, 'f-ink', 9)
    + `<g fill="none" class="s-inv" stroke-width="2.4" stroke-linecap="round" transform="translate(24 22) scale(.94)"><path d="M13.6 18.4a4.2 4.2 0 0 1 0-5.9l2.6-2.6a4.2 4.2 0 0 1 5.9 5.9l-1.3 1.3"/><path d="M18.4 13.6a4.2 4.2 0 0 1 0 5.9l-2.6 2.6a4.2 4.2 0 0 1-5.9-5.9l1.3-1.3"/></g>`
    + T(66, 36, center[0], 14, 'tx', 750) + T(66, 51, center[1], 10.5, 'tx3', 550)
    + L(380, 30, 52, 'f-g1', 16) + L(440, 30, 52, 'f-acc3', 16);
  // chart area
  d += `<g class="s-line" stroke-width="1" fill="none">${[110, 150, 190, 230].map((y) => `<path d="M24 ${y}H496"/>`).join('')}</g>`;
  const pts = [[24, 222], [80, 214], [136, 220], [192, 196], [248, 200], [304, 176], [360, 168], [416, 140], [472, 120], [496, 112]];
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('');
  d += `<path d="${line}L496 236L24 236Z" class="f-acc3"/><path d="${line}" class="s-acc" stroke-width="3" stroke-linejoin="round" fill="none"/>`;
  const base = pts.map(([x, y]) => `${x} ${Math.min(234, y + 34)}`).join('L');
  d += `<path d="M${base}" class="s-t3" stroke-width="2" stroke-dasharray="4 6" fill="none"/>` + C(472, 120, 6, 'f-acc') + C(472, 120, 11, 'f-acc2" opacity=".35');
  // channel rows
  const cls = ['f-acc', 'f-ok', 'f-warn'];
  chans.forEach((c, i) => {
    const y = 262 + i * 30;
    d += C(32, y + 6, 5, cls[i]) + T(46, y + 10, c, 11.5, 'tx2', 600) + L(250, y + 2, 220, 'f-g1', 9) + L(250, y + 2, [180, 120, 90][i], cls[i], 9);
  });
  s += G(16, 70, d);
  // side card: donut
  let k = R(0, 0, 196, 196, 'f-bg s-frame shadow', 20);
  const arc = (r, a0, a1) => { const p = (a) => [98 + r * Math.cos(a), 104 + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`; };
  const segs = [[0, 0.5, 'f-acc'], [0.5, 0.8, 'f-ok'], [0.8, 1, 'f-warn']];
  const strokeOf = { 'f-acc': 'var(--mk-acc)', 'f-ok': 'var(--mk-ok)', 'f-warn': 'var(--mk-warn)' };
  segs.forEach(([a, b, c]) => { k += `<path d="${arc(52, -Math.PI / 2 + a * 2 * Math.PI + 0.04, -Math.PI / 2 + b * 2 * Math.PI - 0.04)}" fill="none" stroke="${strokeOf[c]}" stroke-width="20"/>`; });
  k += L(70, 28, 56, 'f-g2', 8) + C(98, 104, 30, 'f-bg') + L(78, 100, 40, 'f-t2', 8);
  s += G(508, 22, k);
  // small floating card: upward trend
  let f = R(0, 0, 176, 84, 'f-bg s-frame shadow', 16) + R(16, 18, 36, 36, 'f-ok-soft', 10)
    + `<path d="M24 46l8-8 6 5 9-11" fill="none" stroke="var(--mk-ok)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 32h6v6" fill="none" stroke="var(--mk-ok)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`
    + L(64, 24, 90, 'f-g2', 8) + L(64, 42, 60, 'f-t2', 8);
  s += G(520, 400, f);
  return svg(s, W, H, label);
}
