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

// ---------- Shopify ----------
function admin(title, lang, body) {
  const nav = lang === 'ko' ? ['홈', '주문', '상품', '고객', '앱'] : ['Home', 'Orders', 'Products', 'Customers', 'Apps'];
  const side = (sw) => {
    let s = '';
    nav.forEach((t, i) => {
      const y = 14 + i * 26;
      if (i === 4) s += R(8, y - 4, sw - 16, 22, 'f-acc3', 6);
      s += R(16, y + 1, 11, 11, i === 4 ? 'f-acc' : 'f-t3', 3) + T(34, y + 11, t, 10, i === 4 ? 'tx' : 'tx2', i === 4 ? 600 : 500);
    });
    s += `<path d="M14 ${14 + 5 * 26 + 2}H${sw - 14}" class="s-line"/>`;
    s += R(16, 14 + 5 * 26 + 14, 11, 11, 'f-ink', 3) + T(34, 14 + 5 * 26 + 24, title, 9.5, 'tx', 600);
    return s;
  };
  return desktop('', side, (w, h) => T(18, 30, title, 14, 'tx', 700) + G(0, 44, body(w, h - 44)), { sideW: 124, url: 'admin.shopify.com' });
}

const SHOP_BODIES = {
  labels: (lang) => (w, h) => {
    let s = R(16, 4, w - 32, h - 20, 'f-chrome', 8);
    const cols = 3, rows = 5, pw = w - 56, ph = h - 40, lw = (pw - (cols - 1) * 8) / cols, lh = (ph - (rows - 1) * 8) / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = 28 + c * (lw + 8), y = 14 + r * (lh + 8);
      const used = r === 0 && c < 2;
      s += R(x, y, lw, lh, used ? 'f-chrome s-dash' : 'f-bg s-line', 4);
      if (!used) {
        s += L(x + 8, y + 7, lw * 0.55, 'f-t2', 4) + L(x + lw - 34, y + 7, 26, 'f-ink', 4);
        let bx = x + 8; const bars = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 2, 1];
        bars.forEach((b, i) => { if (i % 2 === 0) s += R(bx, y + 17, b, lh - 24, 'f-ink'); bx += b + 1.2; });
      }
    }
    return s;
  },
  stockscan: (lang) => (w, h) => {
    let s = R(16, 4, w - 32, 44, 'f-ok', 10) + check(30, 18, 1.2, 's-white') + T(52, 31, lang === 'ko' ? '스캔 완료' : 'Scanned', 13, 'tx-white', 700);
    s += R(w - 120, 14, 88, 24, 'f-white-a', 12) + L(w - 104, 23, 56, 'f-on', 5);
    const rows = [['ok', 12, 12], ['short', 7, 9], ['ok', 4, 4], ['over', 15, 14], ['ok', 20, 20]];
    s += R(16, 60, w - 32, h - 76, 'f-bg s-line', 8);
    rows.forEach(([k, a, b], i) => {
      const y = 74 + i * 40;
      if (i) s += `<path d="M28 ${y - 8}H${w - 28}" class="s-line"/>`;
      s += photo(28, y - 2, 26, 26, i % 3) + L(64, y + 2, 140 - i * 10, 'f-t2', 5) + L(64, y + 14, 70, 'f-t3', 5);
      s += R(w - 140, y + 1, 50, 20, k === 'ok' ? 'f-ok-soft' : 'f-warn-soft', 10) + C(w - 128, y + 11, 3.5, k === 'ok' ? 'f-ok' : 'f-warn') + L(w - 120, y + 8, 22, 'f-t2', 5);
      s += T(w - 46, y + 15, `${a} / ${b}`, 11, 'tx', 600, 'middle');
    });
    return s;
  },
  kitsync: (lang) => (w, h) => {
    const kx = 30, ky = 20;
    let s = R(kx, ky + 90, 150, 110, 'f-bg s-frame', 10) + photo(kx + 12, ky + 102, 50, 50, 0) + T(kx + 72, ky + 120, lang === 'ko' ? '선물 세트' : 'Gift kit', 12, 'tx', 700) + L(kx + 72, ky + 132, 50, 'f-t3', 5) + R(kx + 12, ky + 164, 126, 26, 'f-acc3', 6) + T(kx + 75, ky + 181, lang === 'ko' ? '재고 4' : 'Available 4', 11, 'tx-acc', 700, 'middle');
    const comps = [['× 1', 9, 0.9], ['× 2', 8, 0.5], ['× 1', 4, 0.4]];
    comps.forEach(([q, n, p], i) => {
      const y = ky + i * 106;
      s += `<path d="M${kx + 150} ${ky + 145} C ${kx + 200} ${ky + 145}, ${kx + 190} ${y + 40}, ${kx + 236} ${y + 40}" class="s-strong" fill="none"/>`;
      s += R(kx + 236, y, w - kx - 266, 80, 'f-bg s-line', 10) + photo(kx + 248, y + 14, 40, 40, i + 1) + L(kx + 298, y + 18, 90, 'f-t2', 5) + L(kx + 298, y + 32, 50, 'f-t3', 5);
      s += R(kx + 298, y + 52, 110, 5, 'f-chrome', 2.5) + R(kx + 298, y + 52, 110 * p, 5, i === 2 ? 'f-acc' : 'f-g3', 2.5);
      s += R(w - 92, y + 14, 34, 20, 'f-chrome', 10) + T(w - 75, y + 28, q, 10, 'tx', 700, 'middle');
    });
    return s;
  },
  autotag: (lang) => (w, h) => {
    let s = R(16, 4, w - 32, 150, 'f-bg s-line', 10);
    const rows = lang === 'ko' ? [['주문 금액', '≥', '200,000'], ['배송 국가', '다음 중', 'JP, US']] : [['Order total', '≥', '200'], ['Ship country', 'is one of', 'JP, US']];
    rows.forEach(([a, b, c], i) => {
      const y = 18 + i * 44;
      if (i) s += R(30, y - 14, 36, 16, 'f-acc3', 8) + T(48, y - 3, 'AND', 9, 'tx-acc', 700, 'middle');
      s += R(30, y + 6, 130, 28, 'f-chrome', 6) + T(42, y + 24, a, 11, 'tx', 600);
      s += R(168, y + 6, 80, 28, 'f-chrome', 6) + T(180, y + 24, b, 11, 'tx2', 500);
      s += R(256, y + 6, w - 302, 28, 'f-bg s-strong', 6) + T(268, y + 24, c, 11, 'tx', 600);
    });
    s += L(30, 120, 60, 'f-t3', 5) + R(98, 112, 54, 22, 'f-acc', 11) + T(125, 127, '+ VIP', 10, 'tx-inv', 700, 'middle') + R(158, 112, 76, 22, 'f-acc3', 11) + T(196, 127, '+ export', 10, 'tx-acc', 700, 'middle');
    s += R(16, 166, w - 32, h - 182, 'f-chrome', 10) + T(30, 188, lang === 'ko' ? '미리보기' : 'Dry run', 11, 'tx', 700);
    for (let i = 0; i < 4; i++) { const y = 202 + i * 26; s += L(30, y, 90, 'f-t3', 5) + R(140, y - 5, 16, 16, i % 3 === 0 ? 'f-ok' : 'f-g2', 8) + L(166, y, 120 - i * 14, 'f-t2', 5); }
    return s;
  },
  mailcraft: (lang) => (w, h) => {
    let s = R(16, 4, 128, h - 20, 'f-bg s-line', 10) + L(28, 18, 50, 'f-t3', 5);
    ['f-ink', 'f-acc', 'f-ok', 'f-warn', 'f-g3', 'f-acc2'].forEach((c, i) => { s += C(36 + (i % 3) * 28, 44 + Math.floor(i / 3) * 28, 10, c); });
    s += R(26, 34, 20, 20, 's-acc-ring', 10);
    for (let i = 0; i < 4; i++) s += L(28, 112 + i * 34, 50, 'f-t3', 5) + R(28, 122 + i * 34, 104, 16, 'f-chrome', 4);
    const ex = 156, ew = w - ex - 16;
    s += R(ex, 4, ew, h - 20, 'f-chrome', 10) + R(ex + 26, 16, ew - 52, h - 44, 'f-bg s-line', 6);
    const x = ex + 42, iw = ew - 84;
    s += R(x, 30, 54, 14, 'f-ink', 3) + L(x + iw - 50, 34, 50, 'f-t3', 5);
    s += T(x, 72, lang === 'ko' ? '주문해 주셔서 감사합니다' : 'Thanks for your order', 13, 'tx', 700) + L(x, 84, iw * 0.8, 'f-t3', 5) + L(x, 96, iw * 0.6, 'f-t3', 5);
    s += R(x, 112, 110, 28, 'f-ink', 6) + L(x + 22, 123, 66, 'f-inv', 5);
    for (let i = 0; i < 2; i++) { const y = 156 + i * 46; s += `<path d="M${x} ${y - 6}H${x + iw}" class="s-line"/>` + photo(x, y, 36, 36, i) + L(x + 46, y + 8, 100, 'f-t2', 5) + L(x + 46, y + 22, 60, 'f-t3', 5) + L(x + iw - 40, y + 8, 40, 'f-t2', 5); }
    return s;
  },
  xerosync: (lang) => (w, h) => {
    const cw = (w - 92) / 2;
    let s = T(16 + cw / 2, 16, 'Shopify', 11, 'tx2', 700, 'middle') + T(w - 16 - cw / 2, 16, 'Xero', 11, 'tx2', 700, 'middle');
    const rows = [['#1042', 'SH-1042', 'ok'], ['#1043', 'SH-1043', 'ok'], [lang === 'ko' ? '환불 #1038' : 'Refund #1038', 'CN-1038', 'ok'], ['#1044', '', 'fail']];
    rows.forEach(([a, b, k], i) => {
      const y = 28 + i * 60;
      s += R(16, y, cw, 46, 'f-bg s-line', 8) + T(30, y + 20, a, 12, 'tx', 700) + L(30, y + 30, 70, 'f-t3', 5);
      s += `<path d="M${16 + cw + 10} ${y + 23}H${w - 16 - cw - 14}" class="${k === 'fail' ? 's-warn' : 's-strong'}" stroke-dasharray="${k === 'fail' ? '3 3' : '0'}"/><path d="M${w - 16 - cw - 18} ${y + 19}l4 4-4 4" class="${k === 'fail' ? 's-warn' : 's-strong'}" fill="none"/>`;
      if (k === 'fail') s += R(w - 16 - cw, y, cw, 46, 'f-warn-soft', 8) + T(w - 16 - cw + 14, y + 20, lang === 'ko' ? '실패 · 재시도' : 'Failed · retry', 11, 'tx-warn', 700) + L(w - 16 - cw + 14, y + 30, 110, 'f-t3', 5);
      else s += R(w - 16 - cw, y, cw, 46, 'f-bg s-line', 8) + T(w - 16 - cw + 14, y + 20, b, 12, 'tx', 700) + R(w - 16 - 62, y + 13, 48, 18, 'f-ok-soft', 9) + C(w - 16 - 50, y + 22, 3.5, 'f-ok') + L(w - 16 - 42, y + 19, 22, 'f-t2', 5);
    });
    return s;
  },
  clickdrop: (lang) => (w, h) => {
    let s = R(16, 4, w - 32, 34, 'f-warn-soft', 8) + C(32, 21, 4, 'f-warn') + T(44, 25, lang === 'ko' ? '전송 실패 1건' : '1 order failed', 11, 'tx-warn', 700) + R(w - 100, 10, 72, 22, 'f-ink', 6) + T(w - 64, 25, lang === 'ko' ? '재시도' : 'Retry', 10, 'tx-inv', 700, 'middle');
    s += R(16, 50, w - 32, h - 66, 'f-bg s-line', 8);
    s += L(30, 64, 40, 'f-t3', 5) + L(120, 64, 50, 'f-t3', 5) + L(w - 200, 64, 40, 'f-t3', 5) + L(w - 100, 64, 50, 'f-t3', 5);
    const st = ['ok', 'ok', 'fail', 'ok', 'wait'];
    st.forEach((k, i) => {
      const y = 86 + i * 40;
      s += `<path d="M30 ${y - 6}H${w - 30}" class="s-line"/>` + T(30, y + 14, `#${1201 + i}`, 11, 'tx', 700) + L(120, y + 8, 90, 'f-t2', 5) + L(w - 200, y + 8, 60, 'f-t3', 5);
      const c = k === 'ok' ? ['f-ok-soft', 'f-ok'] : k === 'fail' ? ['f-warn-soft', 'f-warn'] : ['f-chrome', 'f-t3'];
      s += R(w - 100, y + 1, 64, 20, c[0], 10) + C(w - 88, y + 11, 3.5, c[1]) + L(w - 80, y + 8, 32, 'f-t2', 5);
    });
    return s;
  },
  sizechart: (lang) => (w, h) => {
    let s = photo(16, 4, 170, 200, 1) + L(200, 10, 120, 'f-t2', 7) + L(200, 28, 70, 'f-t3', 5);
    ['S', 'M', 'L'].forEach((t, i) => { s += R(200 + i * 40, 46, 32, 26, i === 1 ? 'f-ink' : 'f-bg s-strong', 6) + T(216 + i * 40, 63, t, 11, i === 1 ? 'tx-inv' : 'tx', 700, 'middle'); });
    s += T(200, 92, lang === 'ko' ? '사이즈 표' : 'Size chart', 11, 'tx-acc', 700) + `<path d="M200 96h${lang === 'ko' ? 50 : 56}" class="s-acc"/>`;
    const mx = 92, my = 106, mw = w - 118, mh = h - 112;
    s += R(mx, my, mw, mh, 'f-bg s-frame shadow', 12) + T(mx + 16, my + 26, lang === 'ko' ? '사이즈 표' : 'Size chart', 13, 'tx', 700);
    s += R(mx + mw - 96, my + 12, 80, 22, 'f-chrome', 11) + R(mx + mw - 94, my + 14, 38, 18, 'f-bg', 9) + T(mx + mw - 75, my + 27, 'cm', 9.5, 'tx', 700, 'middle') + T(mx + mw - 36, my + 27, 'in', 9.5, 'tx2', 600, 'middle');
    const cols = ['', lang === 'ko' ? '가슴' : 'Chest', lang === 'ko' ? '허리' : 'Waist', lang === 'ko' ? '길이' : 'Length'];
    const data = [['S', '88', '72', '66'], ['M', '94', '78', '68'], ['L', '100', '84', '70']];
    const cw = (mw - 32) / 4;
    cols.forEach((c, i) => { s += T(mx + 16 + i * cw + 6, my + 58, c, 10, 'tx2', 700); });
    data.forEach((r, ri) => {
      const y = my + 68 + ri * 26;
      if (ri === 1) s += R(mx + 12, y, mw - 24, 24, 'f-acc3', 5);
      r.forEach((c, i) => { s += T(mx + 16 + i * cw + 6, y + 16, c, 11, i ? 'tx' : 'tx', i ? 500 : 700); });
    });
    return s;
  },
  giftwrap: (lang) => (w, h) => {
    let s = photo(16, 4, 160, 190, 2) + L(190, 10, 140, 'f-t2', 7) + L(190, 28, 60, 'f-t3', 5);
    s += R(190, 48, w - 206, 48, 'f-acc3', 10) + R(202, 62, 18, 18, 'f-acc', 5) + check(205, 64.5, 1) + T(230, 76, lang === 'ko' ? '선물 포장 추가' : 'Add gift wrap', 12, 'tx', 700) + L(w - 70, 68, 40, 'f-t2', 5);
    s += R(190, 106, w - 206, 30, 'f-bg s-strong', 6) + L(202, 118, 120, 'f-t2', 5);
    s += R(190, 146, w - 206, 70, 'f-bg s-strong', 6) + T(202, 166, lang === 'ko' ? '생일 축하해!' : 'Happy birthday!', 12, 'tx', 500) + L(202, 180, 80, 'f-t3', 5) + L(w - 70, 200, 40, 'f-t3', 5);
    s += R(190, 228, w - 206, 34, 'f-ink', 8) + L(w / 2 + 40, 242, 80, 'f-inv', 6);
    s += G(16, 206, R(0, 0, 160, 92, 'f-bg s-line', 8) + `<path d="M0 30h160M80 0v92" class="s-acc"/>` + L(92, 44, 54, 'f-t3', 5) + L(92, 58, 40, 'f-t3', 5) + L(14, 44, 54, 'f-t2', 5));
    return s;
  },
  idealofeed: (lang) => (w, h) => {
    let s = R(16, 4, w - 32, 36, 'f-chrome', 8) + T(28, 26, '/feeds/•••/de.csv', 11, 'tx2', 600) + R(w - 96, 10, 66, 24, 'f-ink', 6) + T(w - 63, 26, lang === 'ko' ? '복사' : 'Copy', 10, 'tx-inv', 700, 'middle');
    const mk = ['DE', 'AT', 'FR', 'IT', 'ES', 'UK'];
    mk.forEach((m, i) => { s += R(16 + i * 46, 50, 40, 22, i === 0 ? 'f-ink' : 'f-chrome', 11) + T(36 + i * 46, 65, m, 10, i === 0 ? 'tx-inv' : 'tx2', 700, 'middle'); });
    s += R(16, 84, w - 32, h - 100, 'f-bg s-line', 8);
    const head = ['sku', 'price', 'formerPrice', 'ean', 'deliveryCosts'];
    const cw = (w - 60) / 5;
    head.forEach((t, i) => { s += T(30 + i * cw, 104, t, 10, 'tx-mono', 600); });
    for (let r = 0; r < 5; r++) {
      const y = 116 + r * 28;
      s += `<path d="M30 ${y}H${w - 30}" class="s-line"/>`;
      for (let c = 0; c < 5; c++) s += L(30 + c * cw, y + 11, cw * (c === 2 && r % 2 ? 0 : 0.6), c === 1 ? 'f-t2' : 'f-t3', 5);
      if (r === 3) s += R(30 + 3 * cw - 6, y + 5, cw * 0.75, 18, 'f-warn-soft', 4) + L(30 + 3 * cw, y + 11, cw * 0.5, 'f-warn', 5);
    }
    return s;
  },
};

function thously(lang) {
  const body = (w, h) => {
    let s = R(0, 0, w, 40, 'f-bg') + R(18, 13, 14, 14, 'f-ink', 4) + T(38, 25, 'Thously', 12, 'tx', 700);
    s += L(w - 210, 18, 40, 'f-t3', 5) + L(w - 160, 18, 40, 'f-t3', 5) + L(w - 110, 18, 40, 'f-t3', 5) + `<path d="M0 40H${w}" class="s-line"/>`;
    s += T(28, 76, lang === 'ko' ? '대출 계산기' : 'Loan calculator', 18, 'tx', 700) + L(28, 88, 200, 'f-t3', 5);
    for (let i = 0; i < 4; i++) { const y = 108 + i * 50; s += L(28, y, 60, 'f-t2', 5) + R(28, y + 12, 240, 30, 'f-bg s-strong', 7) + L(40, y + 24, 80 - i * 10, 'f-t2', 5); }
    const rx = 296, rw = w - rx - 24;
    s += R(rx, 104, rw, 210, 'f-chrome', 12) + L(rx + 18, 122, 70, 'f-t3', 5) + R(rx + 18, 136, 140, 22, 'f-ink', 5);
    const bars = [0.35, 0.5, 0.42, 0.62, 0.55, 0.75, 0.68, 0.88];
    const bw = (rw - 36 - 7 * 8) / 8;
    bars.forEach((b, i) => { s += R(rx + 18 + i * (bw + 8), 300 - 110 * b, bw, 110 * b, i === 7 ? 'f-acc' : 'f-acc2', 3); });
    return s;
  };
  return desktop('', null, body, { url: 'thously.com' });
}

export function productMockup(p, lang) {
  const label = (lang === 'ko' ? '제품 화면 예시: ' : 'Product illustration: ') + p[lang].name;
  let inner;
  if (p.mock === 'spaceMap') inner = G(24, 24, spaceMap(lang));
  else if (p.mock === 'dupeless') inner = G(24, 24, dupeless(lang));
  else if (p.mock === 'archiveFix') inner = G(24, 24, archiveFix(lang));
  else if (p.mock === 'rollTidy') inner = rollTidy(lang);
  else if (p.mock === 'rollFlick') inner = rollFlick(lang);
  else if (p.mock === 'thously') inner = G(24, 24, thously(lang));
  else if (p.mock.startsWith('shop_')) {
    const h = p.mock.slice(5);
    const short = { labels: 'Labels', stockscan: 'Stock Scan', kitsync: 'Kit Inventory', autotag: 'Auto Tagger', mailcraft: 'Email Designer', xerosync: 'Xero Sync', clickdrop: 'Click & Drop', sizechart: 'Size Charts', giftwrap: 'Gift Wrap', idealofeed: 'idealo Feed' }[h];
    inner = G(24, 24, admin(short, lang, SHOP_BODIES[h](lang)));
  }
  return svg(inner, 640, 440, label);
}

export function heroMockup(lang) {
  const label = lang === 'ko' ? '용량 지도와 정리 싹 화면 예시' : 'Illustration of Space Map and Roll Tidy';
  const inner = G(4, 8, spaceMap(lang)) + G(520, 150, phone(rollTidyScreen(lang)), 0.86) + G(20, 382, pill(170, lang === 'ko' ? '기기 안 처리' : 'On device', true));
  return svg(inner, 720, 520, label);
}
