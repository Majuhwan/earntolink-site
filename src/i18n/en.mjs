// English. Same structure as ko.mjs. Facts only, no em dashes.
const EMAIL = 'earn2link@gmail.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 languages (English, Korean, Japanese, Chinese Simplified and Traditional, German, French, Spanish, Portuguese, Italian)';
const ONDEVICE = 'On device · no network connection';
const ONE_TIME = 'One-time purchase · ₩10,000 or less';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Connecting markets and the world.',
  translationNote: 'This page is a translation. If it differs from the Korean original, the Korean original prevails.',

  ui: {
    skip: 'Skip to content', menu: 'Menu', language: 'Language', mainNav: 'Main', breadcrumb: 'Breadcrumb', toc: 'Contents', homeAria: 'EarnToLink home',
    nav: { services: 'Services', products: 'Products', about: 'About', principles: 'How we work', news: 'News', contact: 'Contact' },
    home: 'Home', privacy: 'Privacy Policy', terms: 'Terms', rss: 'RSS',
    footer: { services: 'Services', products: 'Products', company: 'Company', policy: 'Policies' },
    biz: { name: 'Business name', rep: 'Representative', no: 'Business registration no.', tax: 'Tax type', kinds: 'Business', mail: 'Email' },
    rights: '© 2026 EarnToLink. All rights reserved.',
    view: 'Details', all: 'All products', allServices: 'All services', email: 'Email', mailBtn: 'Email us', projectBtn: 'Start a project',
    platform: 'Platform', status: 'Status', features: 'Features', specs: 'Specifications', related: 'Other products', privacyNote: 'Privacy',
    productIllustration: 'Product illustration: ',
    heroLabel: 'Illustration of EarnToLink connected to markets in 14 languages',
    newsFeedTitle: 'EarnToLink News', newsFeedDesc: 'News from EarnToLink (언투링크)',
    notFound: { title: 'Page not found', text: 'The address has changed or the page does not exist.', home: 'Go home' },
  },

  status: { soon: 'Coming soon', dev: 'In development', live: 'Live' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'General taxpayer (Korea)',
    form: 'Business type', formValue: 'Sole proprietorship (Korea)', kindsLabel: 'Registered business', site: 'Website',
    kinds: ['Application software development and supply (primary)', 'E-commerce retail', 'E-commerce retail brokerage'],
  },

  categories: {
    mobile: { name: 'Mobile apps', plat: 'Android · iOS' },
    desktop: { name: 'Desktop apps', plat: 'macOS · Windows' },
  },

  home: {
    title: 'EarnToLink (언투링크) | Connecting markets and the world',
    desc: 'EarnToLink connects markets and the world: web, mobile and desktop product development, AI transformation and automation, localization into 14 languages, global app store launches, commerce integration and operations.',
    eyebrow: 'Software · AI transformation · Global expansion',
    h1: 'Connecting markets<br>and the world.',
    lead: 'From planning and development to AI automation, localization and global app store launches, one team carries your product all the way.',
    meta: ['Web · Mobile · Desktop', 'AI · Automation', '14 languages'],
    stats: [['14', 'Website languages'], ['6', 'Service areas'], ['5', 'In-house products'], ['4', 'App stores we ship to']],
    services: { eyebrow: 'Services', title: 'Six service areas', text: 'We build, automate, take it to the world, and keep it growing.' },
    why: { eyebrow: 'Why EarnToLink', title: 'Built for global markets from day one', text: 'Six commitments we keep on every project.' },
    how: { eyebrow: 'Process', title: 'From first call to operations', text: 'Six steps, each one confirmed before the next.' },
    apps: { eyebrow: 'In-house products', title: 'Products we build ourselves', text: 'Our own apps, built to the same standard as client work. All coming soon.' },
    co: { eyebrow: 'Company', title: 'EarnToLink', text: 'Sole proprietorship in Korea. Application software development and supply.' },
    news: { eyebrow: 'News', title: 'Latest news' },
  },

  services: {
    title: 'Services',
    desc: 'EarnToLink services: product development, AI transformation and automation, localization, global app store launches, commerce and cross-border sales, operations and growth.',
    eyebrow: 'Services', h1: 'Services', lead: 'Six areas. Pick only the ones you need.',
    whoLabel: 'A good fit when', scopeLabel: 'What we do', deliverLabel: 'Deliverables', otherLabel: 'Other services',
    items: {
      product: {
        name: 'Product development', short: 'Web services, mobile apps, desktop apps and internal systems, from planning to launch.',
        lead: 'We turn ideas into products people actually use. Planning, screen design, visual design, development and testing run as one flow.',
        who: ['You are building a new service from scratch', 'You want to launch small first and test the market', 'You want to move work out of spreadsheets and chat into a real system'],
        scope: [
          ['Web services', 'Service websites, accounts and payments, admin dashboards.'],
          ['Mobile apps', 'Android and iOS apps, built from one codebase.'],
          ['Desktop apps', 'Windows and macOS apps, including file and disk tools.'],
          ['Internal systems', 'Work management, settlement, inventory and customer tools.'],
        ],
        deliver: ['Feature list and screen designs', 'Source code and deployment setup', 'Automated tests', 'Operations guide'],
      },
      ax: {
        name: 'AI transformation and automation', short: 'AI agents and automation that cut repetitive work and change how teams operate.',
        lead: 'We find the work that repeats and move it to AI and automation. A small working demo proves the effect before full development.',
        who: ['Your team repeats the same support replies, documents or data cleanup', 'You want to search internal documents and data with AI', 'People copy the same information between several tools'],
        scope: [
          ['AI agents', 'First-line replies, summaries, drafts and classification.'],
          ['Document and data automation', 'Reading forms, cleaning tables, generating reports.'],
          ['Internal knowledge search', 'Answers grounded in your own documents (RAG).'],
          ['Tool integration', 'Automatic links between email, chat, spreadsheets and internal systems.'],
        ],
        deliver: ['Workflow assessment', 'A working demo', 'Production automation and user guide', 'Metrics to measure the effect'],
      },
      localization: {
        name: 'Localization and global expansion', short: 'Take your service into 14 or more languages and get found in each country.',
        lead: 'Not just translation. We change the language structure, date, number and currency formats, and search visibility country by country.',
        who: ['Your service exists only in one language and you want to open it abroad', 'You translated, but foreign search engines do not find you', 'You need payment and formats that differ by country'],
        scope: [
          ['Multilingual structure', 'String extraction, language switching, per-language URLs.'],
          ['Multilingual SEO', 'hreflang, per-language sitemaps, search engine registration.'],
          ['Local formats', 'Dates, numbers, currencies and addresses.'],
          ['Translation QA', 'Glossaries and automatic checks for missing strings per language.'],
        ],
        deliver: ['Pages and URLs per language', 'Glossary', 'String check tool per language', 'Search engine registration'],
      },
      launch: {
        name: 'Global app store launch', short: 'Launch and review handling on the App Store, Google Play, Microsoft Store and Mac App Store.',
        lead: 'We handle store registration, review responses and store pages in each language, then keep shipping updates after launch.',
        who: ['You have an app but store registration is stuck', 'Your app was rejected in review', 'You need store pages for each country'],
        scope: [
          ['Store registration', 'Developer account setup, app details, age ratings, privacy labels.'],
          ['Review handling', 'Policy checks, rejection analysis, fix and resubmit.'],
          ['Store page localization', 'Descriptions and screenshots per language.'],
          ['Payments setup', 'In-app purchases, price tiers, pricing by country.'],
        ],
        deliver: ['Your app live on the stores', 'Store pages per language', 'Review history', 'Update release procedure'],
      },
      commerce: {
        name: 'Commerce and cross-border sales', short: 'Connect your products to customers abroad with sales channels and operations tools.',
        lead: 'We build the online store, multilingual product data and payment, shipping and accounting integrations that selling abroad needs.',
        who: ['You sell at home and want to sell abroad', 'You edit product data separately for every channel', 'You reconcile orders, stock and settlements by hand'],
        scope: [
          ['Sales channels', 'Your own store connected to overseas marketplaces.'],
          ['Multilingual product data', 'Names, descriptions, options and size charts per language.'],
          ['Order and stock sync', 'Automatic sync of orders and inventory across channels.'],
          ['Settlement and reports', 'Automatic totals for sales, fees and payouts.'],
        ],
        deliver: ['Sales channels and integrations', 'Multilingual product data', 'Order and stock sync', 'Settlement reports'],
      },
      operate: {
        name: 'Operations and growth', short: 'After launch: fixing errors, improving speed, adding features, checking costs.',
        lead: 'Launch is the start. We watch the metrics, cut errors, add what users need and keep infrastructure costs in check.',
        who: ['You need someone to take over a service another vendor built', 'Errors and slow screens keep coming back', 'Server costs keep rising'],
        scope: [
          ['Error response', 'Reading error logs, finding causes, shipping fixes.'],
          ['Performance', 'Faster screens and queries.'],
          ['Feature growth', 'Adding and trimming features based on usage data.'],
          ['Cost review', 'Cloud usage review and savings.'],
        ],
        deliver: ['Monthly operations report', 'Error response log', 'Improvement releases', 'Cost review results'],
      },
    },
  },

  why: [
    ['Multilingual from the start', 'Multilingual structure goes in at the design stage, so adding a language later never means rebuilding.'],
    ['Scope agreed first', 'Features, schedule and cost are fixed in writing before work starts. Any change is agreed before it is built.'],
    ['You own the code and accounts', 'Source code, domains, store and cloud accounts are created in your name and handed over.'],
    ['Tests are part of delivery', 'Automated tests for core features and missing-string checks per language are included.'],
    ['Weekly progress', 'Every week you see working screens and what is left.'],
    ['Only the data needed', 'Personal data is limited to what features need, processed on the device wherever possible.'],
  ],

  steps: [
    ['Consultation', 'Goals, target markets and deadlines.'],
    ['Scope and quote', 'Feature list, schedule and cost in writing.'],
    ['Demo', 'Core screens and flows working first.'],
    ['Build and test', 'Weekly updates, automated tests.'],
    ['Localize and launch', 'Pages per language, store and search registration.'],
    ['Operate and improve', 'Metrics, error response, growth.'],
  ],

  cta: { title: 'Start a project', text: 'Email us what you want to build, your target markets and your timeline.' },

  products: {
    title: 'Products',
    desc: 'EarnToLink in-house products: two mobile apps (Roll Tidy, Roll Flick) and three desktop apps (Space Map, Dupeless, Archive Fix). All coming soon.',
    eyebrow: 'In-house products', h1: 'Products', lead: 'Two mobile apps and three desktop apps. All coming soon.', tabsLabel: 'Categories',
    groups: { mobile: 'Android · iOS. Photo cleanup.', desktop: 'macOS · Windows. Disk, files, archives.' },
    prin: { eyebrow: 'Product principles', title: 'Small and honest', text: 'Shared by all five of our apps.' },
    principles: [
      ['On device', 'Files and photos are analyzed only on the device. Nothing is sent to a server.'],
      ['No ads, no tracking', 'No ads, analytics, crash reporting or accounts.'],
      ['One-time purchase', 'No subscriptions. ₩10,000 or less per app.'],
      ['Restorable delete', 'Deleted files and photos go to the trash and can be restored.'],
    ],
    featTitle: '{name} features',
    privacy: {
      mobile: 'Photos are analyzed only on the device and are never sent anywhere.',
      desktop: 'Files are processed only on the device and are never sent anywhere.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Similar photos, blurry shots, screenshots and large videos',
        lead: 'Analyzes the photo library on the device and gathers what can go, by category.',
        features: [
          ['Similar photo groups', 'Groups shots taken within 90 seconds that look alike, using a 64-bit difference hash.'],
          ['Best shot', 'Suggests the sharpest photo in each group to keep. Favorites are never deletion candidates.'],
          ['Blurry photos', 'Finds blurry photos relative to the whole library. Very dark or bright photos are skipped.'],
          ['Screenshots', 'Collects photos from the screenshots album.'],
          ['Large videos', 'Sorts videos by estimated size, largest first.'],
          ['Restorable delete', 'Moves items to the Android trash or iOS Recently Deleted (30 days).'],
        ],
        specs: [['Platforms', 'Android · iOS'], ['Processing', ONDEVICE], ['Delete', 'Moves to system trash'], ['Languages', APP_LANGS], ['Price', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Swipe through photos one by one: keep or delete',
        lead: 'Splits photos by the month they were taken, then lets you decide one photo at a time.',
        features: [
          ['By month', 'Groups photos by month taken, most recent first.'],
          ['Swipe', 'Swipe left to mark for deletion, right to keep.'],
          ['Undo', 'Reverts the last decision.'],
          ['Review before delete', 'At the end of a month, review the marked photos, then clean up in one step.'],
          ['Progress', 'Photos cleaned, day streak and finished months. Stored on the device only.'],
          ['On device', 'Photos are never sent to a server.'],
        ],
        specs: [['Platforms', 'Android · iOS'], ['Processing', ONDEVICE], ['Delete', 'Moves to system trash'], ['Languages', APP_LANGS], ['Price', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'A treemap of the folders and files taking up your disk',
        lead: 'Scans a folder and shows size as area, so the largest items can be cleaned up first.',
        features: [
          ['Treemap', 'Squarified treemap, colored by file type: video, images, audio, documents, archives, programs, other.'],
          ['Three views', 'Map, largest files and size by type.'],
          ['Quick folders', 'Home, Downloads, Desktop, Documents, Pictures, Videos, C drive (Windows).'],
          ['Navigation', 'Drill into subfolders and back up to the parent.'],
          ['Finder · Explorer', 'Reveals the selected item in Finder or Explorer.'],
          ['Move to Trash', 'Deleted items can be restored from the Trash. Folders without permission are skipped and counted.'],
        ],
        specs: [['Platforms', 'macOS · Windows'], ['Processing', ONDEVICE], ['Delete', 'Moves to Trash'], ['Languages', APP_LANGS], ['Price', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Find files with identical content and clean them up',
        lead: 'Compares content, not names: size first, then the first and last 64 KB, then SHA-256.',
        features: [
          ['Three-stage compare', 'File list, quick compare (first and last 64 KB), full compare (SHA-256).'],
          ['Multiple folders', 'Several search folders, minimum file size, skip hidden files.'],
          ['Auto select', 'Keep the oldest, the newest or the shortest path.'],
          ['Always keep one', 'At least one file per group must stay.'],
          ['Move to Trash', 'Only selected files go to the Trash. Restorable.'],
          ['Finder · Explorer', 'Open the file location directly.'],
        ],
        specs: [['Platforms', 'macOS · Windows'], ['Processing', ONDEVICE], ['Compare', 'Size → first/last 64 KB → SHA-256'], ['Languages', APP_LANGS], ['Price', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Extract and create archives without broken Korean file names',
        lead: 'Detects CP949 file names in ZIPs made on Korean Windows and restores them. Built on 7-Zip.',
        features: [
          ['Korean name repair', 'Checks ZIP entries without the UTF-8 flag and converts CP949 (Korean Windows) names automatically.'],
          ['16 formats', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Create archives', 'ZIP or 7Z, with fast, normal or maximum compression.'],
          ['AES-256 password', 'AES-256 for ZIP; 7Z also encrypts file names.'],
          ['Drag and drop', 'Archives are extracted, other files are compressed.'],
          ['7-Zip 26.04 included', 'No separate install.'],
        ],
        specs: [['Platforms', 'macOS · Windows'], ['Processing', ONDEVICE], ['Engine', '7-Zip 26.04 (LGPL)'], ['Languages', APP_LANGS], ['Price', ONE_TIME]],
      },
    },
  },

  about: {
    title: 'About',
    desc: 'About EarnToLink (언투링크): a software business that connects markets and the world. Mission, services, principles and business details.',
    eyebrow: 'About', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) is a software business that connects markets and the world.',
    mission: {
      eyebrow: 'Mission', title: 'Connecting markets and the world',
      body: [
        'Good products and services often stay locked inside one country and one language. EarnToLink builds the software that bridges that gap.',
        'We build products, make operations lighter with AI and automation, and bring them to global markets through many languages and app stores. After launch we keep improving them from the data.',
        'We build our own apps to the same standard. Status is shown as it is: products not yet released are marked coming soon.',
      ],
    },
    do: { eyebrow: 'Services', title: 'What we do', text: 'Registered business: application software development and supply (primary), e-commerce retail, e-commerce retail brokerage.' },
    why: { eyebrow: 'Principles', title: 'How we work' },
    info: { eyebrow: 'Company', title: 'Business details' },
  },

  principles: {
    title: 'How we work',
    desc: 'How EarnToLink works: multilingual from the start, scope agreed first, you own the code and accounts, tests included. Process and contract terms.',
    eyebrow: 'How we work', h1: 'How we work', lead: 'Principles, process and contract terms.',
    why: { eyebrow: 'Principles', title: 'Six commitments', text: 'Applied to every project.' },
    steps: { eyebrow: 'Process', title: 'Steps', text: 'From consultation to operations.' },
    terms: { eyebrow: 'Contracts', title: 'Contract and pricing terms', rows: [
      ['Projects', 'Scope, schedule, cost and payment terms fixed in a contract for each project'],
      ['Scope changes', 'Changes and their cost are agreed before work proceeds'],
      ['Ownership', 'Source code and accounts transferred to the client once payment is complete'],
      ['Our apps', 'One-time purchase · ₩10,000 or less per app · no subscription · paid through each app store'],
    ] },
  },

  contact: {
    title: 'Contact',
    desc: `Contact EarnToLink about projects, products, privacy or partnerships: ${EMAIL}`,
    eyebrow: 'Contact', h1: 'Contact', lead: 'By email. We reply in Korean or English.',
    topics: [
      ['code', 'Projects', 'Product development, AI automation, localization, app store launch, commerce, operations'],
      ['package', 'Products', 'Features, release dates and bugs in our apps'],
      ['receipt', 'Payments', 'App payments and refunds follow each app store\'s policy'],
      ['shield', 'Privacy', 'Requests to access, correct, delete or stop processing'],
      ['users', 'Partnerships', 'Collaboration and other proposals'],
    ],
    brief: { title: 'Helpful to include in a project inquiry', items: ['What you want to build and why', 'Target markets and languages', 'Preferred timeline', 'Reference services or materials'] },
  },

  news: {
    'business-areas': { title: 'Our service areas', summary: 'Product development, AI transformation, localization, app store launch, commerce, operations.',
      body: ['An overview of EarnToLink service areas.', 'There are six: product development, AI transformation and automation, localization and global expansion, global app store launch, commerce and cross-border sales, and operations and growth.', 'Project inquiries go to earn2link@gmail.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com is live', summary: 'The EarnToLink website is live in 14 languages.',
      body: ['The EarnToLink website, earntolink.com, is now live.', 'It covers our service areas, in-house products, company details, privacy policy and contact information.', 'It is available in Korean, English, Japanese, Chinese (Simplified and Traditional), Spanish, French, German, Portuguese, Italian, Vietnamese, Indonesian, Thai and Russian.'] },
    'product-lineup': { title: 'Our in-house products', summary: 'Two mobile apps and three desktop apps.',
      body: ['The current status of our in-house products.', 'The mobile apps Roll Tidy and Roll Flick and the desktop apps Space Map, Dupeless and Archive Fix are coming soon.'] },
  },
  newsPage: { title: 'News', desc: 'EarnToLink news: service areas, website launch and product status.' },

  privacy: {
    title: 'Privacy Policy',
    desc: 'EarnToLink privacy policy for the website, email inquiries and our apps. Effective October 10, 2026.',
    eyebrow: 'Policy', lead: 'Effective October 10, 2026',
    sections: [
      { id: 'general', h: '1. General', html: `<p>EarnToLink (언투링크, "EarnToLink") protects personal information under the Personal Information Protection Act of Korea. This policy covers the website earntolink.com and the apps EarnToLink makes.</p><p>Summary: the website uses no sign-up, forms, cookies, analytics or ads. Our apps process files and photos only on the device and never send them anywhere.</p>` },
      { id: 'site', h: '2. Website', html: `<ul><li>No sign-up, login or forms.</li><li>No cookies, analytics tools or ad scripts.</li><li>The website is served by GitHub Pages (GitHub, Inc.). GitHub may process access logs such as IP addresses for operation and security, under the <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>The Pretendard font is loaded from the jsDelivr CDN, which may receive request information such as your browser's IP address.</li><li>If cookies or analytics are ever introduced, this policy will be updated first.</li></ul>` },
      { id: 'email', h: '3. Email inquiries', html: `<table><tr><th>Items</th><th>Purpose</th><th>Retention</th></tr><tr><td>Email address, display name, message content and attachments</td><td>Reading and answering inquiries, project consultation, handling requests</td><td>Deleted without delay once handled. If a contract follows, kept for the contract term and any period required by law</td></tr></table><p>Inquiry emails are received and stored in Gmail, provided by Google LLC.</p>` },
      { id: 'apps', h: '4. Our apps', html: `<p>Covered apps: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). All are coming soon.</p><div class="table-scroll"><table><tr><th>App</th><th>Data processed</th><th>Where</th><th>Sent externally</th></tr><tr><td>Roll Tidy</td><td>Photos and videos in libraries you grant access to</td><td>On device</td><td>None</td></tr><tr><td>Roll Flick</td><td>Photos in libraries you grant access to</td><td>On device</td><td>None</td></tr><tr><td>Space Map</td><td>Names, sizes and types of files in folders you choose</td><td>On device</td><td>None</td></tr><tr><td>Dupeless</td><td>File sizes and content hashes in folders you choose</td><td>On device</td><td>None</td></tr><tr><td>Archive Fix</td><td>Archives and files you choose</td><td>On device</td><td>None</td></tr></table></div><ul><li>The apps do not connect to the network and never upload files or photos.</li><li>No accounts, ads, analytics, crash reporting or tracking.</li><li>Deleted files and photos go to the system trash (Recently Deleted on iOS) and can be restored.</li><li>Settings, progress records (Roll Flick) and photo analysis caches (Roll Tidy: hash, sharpness, brightness) stay in app storage on the device.</li><li>Payments are handled by each app store. EarnToLink never receives payment details.</li></ul>` },
      { id: 'projects', h: '5. Client projects', html: `<p>When a client project involves the client's personal data, the scope and method of processing follow the contract and data processing agreement with that client.</p>` },
      { id: 'third', h: '6. Disclosure to third parties', html: `<p>We do not provide personal information to third parties, except where required by law.</p>` },
      { id: 'rights', h: '7. Your rights', html: `<p>You may request access, correction, deletion or suspension of processing at any time. Send requests to ${mail}; we act on them without delay.</p>` },
      { id: 'destroy', h: '8. Deletion', html: `<p>Personal information is destroyed without delay once its retention period ends or its purpose is achieved. Electronic files are deleted so they cannot be recovered.</p>` },
      { id: 'security', h: '9. Security', html: `<p>Access to inquiry email is limited to the representative, and we collect no more personal information than needed.</p>` },
      { id: 'officer', h: '10. Privacy officer', html: `<table><tr><th>Name</th><td>Juhwan Ma (Representative)</td></tr><tr><th>Email</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Remedies (Korea)', html: `<ul><li>Personal Information Infringement Report Center: privacy.kisa.or.kr, 118 (in Korea)</li><li>Personal Information Dispute Mediation Committee: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Changes', html: `<p>This policy is effective from October 10, 2026. Changes will be posted on this page with their effective date.</p>` },
    ],
  },

  terms: {
    title: 'Terms',
    desc: 'Terms of use for the EarnToLink website. Effective October 10, 2026.',
    eyebrow: 'Policy', lead: 'Effective October 10, 2026',
    sections: [
      { id: 'purpose', h: '1. Purpose', html: '<p>These terms set the conditions for using earntolink.com, the website operated by EarnToLink.</p>' },
      { id: 'content', h: '2. Content rights', html: '<p>Rights to the text, images and code on this site belong to EarnToLink. Third-party trademarks shown here belong to their owners.</p>' },
      { id: 'accuracy', h: '3. Product and service information', html: '<p>Product status, features and service descriptions are accurate as of writing. Features, prices and schedules of products not yet released may change.</p>' },
      { id: 'projects', h: '4. Project contracts', html: '<p>Development, automation, localization, launch and operations services follow the contract for each project. If these terms and a contract differ, the contract prevails.</p>' },
      { id: 'apps', h: '5. Use of apps', html: '<p>Each app is also subject to the terms of the store it is distributed through (App Store, Google Play, Microsoft Store and others) and its own notices.</p>' },
      { id: 'links', h: '6. External links', html: '<p>External sites are governed by their own terms and policies.</p>' },
      { id: 'liability', h: '7. Limitation of liability', html: '<p>To the extent permitted by law, EarnToLink is not liable for indirect damages arising from use of this site.</p>' },
      { id: 'law', h: '8. Governing law', html: '<p>These terms are governed by the laws of the Republic of Korea.</p>' },
      { id: 'contact', h: '9. Contact', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Connecting markets and the world.', s: 'Product development · AI transformation · Localization<br>App store launch · Commerce · Operations', tags: ['Web · App · Desktop', 'AI · Automation', '14 languages'] },
};
