// Language-independent structure. All text lives in src/i18n/<code>.mjs.
// Product facts map to code in untolink-apps (Flutter) as of 2026-10-10.

export const SITE = {
  origin: 'https://earntolink.com',
  updated: '2026-10-10',
  email: 'earn2link@gmail.com',
  bizNo: '310-59-00749',
};

// code = folder and i18n file name. ko lives at the site root.
export const LANGS = [
  { code: 'ko', base: '', html: 'ko', hreflang: 'ko', og: 'ko_KR', intl: 'ko-KR', label: '한국어' },
  { code: 'en', base: '/en', html: 'en', hreflang: 'en', og: 'en_US', intl: 'en-US', label: 'English' },
  { code: 'ja', base: '/ja', html: 'ja', hreflang: 'ja', og: 'ja_JP', intl: 'ja-JP', label: '日本語' },
  { code: 'zh-cn', base: '/zh-cn', html: 'zh-Hans', hreflang: 'zh-Hans', og: 'zh_CN', intl: 'zh-CN', label: '简体中文' },
  { code: 'zh-tw', base: '/zh-tw', html: 'zh-Hant', hreflang: 'zh-Hant', og: 'zh_TW', intl: 'zh-TW', label: '繁體中文' },
  { code: 'es', base: '/es', html: 'es', hreflang: 'es', og: 'es_ES', intl: 'es-ES', label: 'Español' },
  { code: 'fr', base: '/fr', html: 'fr', hreflang: 'fr', og: 'fr_FR', intl: 'fr-FR', label: 'Français' },
  { code: 'de', base: '/de', html: 'de', hreflang: 'de', og: 'de_DE', intl: 'de-DE', label: 'Deutsch' },
  { code: 'pt', base: '/pt', html: 'pt', hreflang: 'pt', og: 'pt_BR', intl: 'pt-BR', label: 'Português' },
  { code: 'it', base: '/it', html: 'it', hreflang: 'it', og: 'it_IT', intl: 'it-IT', label: 'Italiano' },
  { code: 'vi', base: '/vi', html: 'vi', hreflang: 'vi', og: 'vi_VN', intl: 'vi-VN', label: 'Tiếng Việt' },
  { code: 'id', base: '/id', html: 'id', hreflang: 'id', og: 'id_ID', intl: 'id-ID', label: 'Bahasa Indonesia' },
  { code: 'th', base: '/th', html: 'th', hreflang: 'th', og: 'th_TH', intl: 'th-TH', label: 'ไทย' },
  { code: 'ru', base: '/ru', html: 'ru', hreflang: 'ru', og: 'ru_RU', intl: 'ru-RU', label: 'Русский' },
];
export const DEFAULT_LANG = 'en'; // x-default

// Business areas. Text: i18n.services.items[id]
export const SERVICES = [
  { id: 'product', icon: 'code', scopeIcons: ['globe', 'smartphone', 'monitor', 'settings'] },
  { id: 'ax', icon: 'zap', scopeIcons: ['users', 'file', 'search', 'refresh'] },
  { id: 'localization', icon: 'globe', scopeIcons: ['type', 'search', 'coins', 'check'] },
  { id: 'launch', icon: 'package', scopeIcons: ['smartphone', 'shield', 'images', 'receipt'] },
  { id: 'commerce', icon: 'truck', scopeIcons: ['store', 'type', 'receipt', 'chart'] },
  { id: 'operate', icon: 'chart', scopeIcons: ['alert', 'cpu', 'chart', 'coins'] },
];

// Why EarnToLink. Text: i18n.why[i] = [title, text]
export const WHY_ICONS = ['globe', 'receipt', 'key', 'test', 'calendar', 'shield'];
// Product principles. Text: i18n.products.principles[i]
export const PRIN_ICONS = ['shield', 'ban', 'receipt', 'undo'];

export const CATEGORIES = [
  { id: 'mobile', icon: 'smartphone' },
  { id: 'desktop', icon: 'monitor' },
];

// status: soon | dev | live. Text: i18n.products.items[slug]
export const PRODUCTS = [
  { slug: 'roll-tidy', cat: 'mobile', status: 'soon', mock: 'rollTidy', icon: 'images', appCategory: 'UtilitiesApplication', os: 'Android, iOS',
    featureIcons: ['images', 'star', 'aperture', 'smartphone', 'film', 'undo'], source: 'untolink-apps/apps/photo_cleaner, packages/photo_engine' },
  { slug: 'roll-flick', cat: 'mobile', status: 'soon', mock: 'rollFlick', icon: 'layers', appCategory: 'UtilitiesApplication', os: 'Android, iOS',
    featureIcons: ['calendar', 'swipe', 'undo', 'list', 'chart', 'shield'], source: 'untolink-apps/apps/swipe_clean' },
  { slug: 'space-map', cat: 'desktop', status: 'soon', mock: 'spaceMap', icon: 'grid', appCategory: 'UtilitiesApplication', os: 'macOS, Windows',
    featureIcons: ['grid', 'list', 'folder', 'corner', 'search', 'undo'], source: 'untolink-apps/apps/disk_map' },
  { slug: 'dupeless', cat: 'desktop', status: 'soon', mock: 'dupeless', icon: 'copy', appCategory: 'UtilitiesApplication', os: 'macOS, Windows',
    featureIcons: ['layers', 'folder', 'check', 'shield', 'undo', 'search'], source: 'untolink-apps/apps/dupe_finder' },
  { slug: 'archive-fix', cat: 'desktop', status: 'soon', mock: 'archiveFix', icon: 'archive', appCategory: 'UtilitiesApplication', os: 'macOS, Windows',
    featureIcons: ['type', 'archive', 'package', 'lock', 'drop', 'cpu'], source: 'untolink-apps/apps/zip_ko' },
];

// Text: i18n.news[slug]
export const NEWS = [
  { slug: 'business-areas', date: '2026-10-10' },
  { slug: 'earntolink-com-launch', date: '2026-10-10' },
  { slug: 'product-lineup', date: '2026-10-10' },
];
