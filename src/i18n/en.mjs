// English. Same structure as ko.mjs. Facts only, no em dashes.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 languages (English, Korean, Japanese, Chinese Simplified and Traditional, German, French, Spanish, Portuguese, Italian)';
const ONDEVICE = 'On device · no network connection';
const ONE_TIME = 'One-time purchase · ₩10,000 or less';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Your growth partner in advertising revenue",
  translationNote: 'This page is a translation. If it differs from the Korean original, the Korean original prevails.',

  ui: {
    skip: 'Skip to content', menu: 'Menu', language: 'Language', mainNav: 'Main', breadcrumb: 'Breadcrumb', toc: 'Contents', homeAria: 'EarnToLink home',
    nav: { services: "Services", products: 'Products', about: 'About', principles: 'How we work', news: 'News', contact: 'Contact' },
    home: 'Home', privacy: 'Privacy Policy', terms: 'Terms', rss: 'RSS',
    footer: { services: "Services", products: 'Products', company: 'Company', policy: 'Policies' },
    biz: { name: 'Business name', rep: 'Representative', no: 'Business registration no.', tax: 'Tax type', kinds: 'Business', mail: 'Email' },
    rights: '© 2026 EarnToLink. All rights reserved.',
    view: 'Details', all: 'All products', allServices: "All services", email: 'Email', mailBtn: 'Email us', projectBtn: "Book a consultation",
    platform: 'Platform', status: 'Status', features: 'Features', specs: 'Specifications', related: 'Other products', privacyNote: 'Privacy',
    productIllustration: 'Product illustration: ',
    heroLabel: 'Illustration of a dashboard showing ad revenue across websites, apps and commerce',
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
    "title": "EarnToLink | Ad revenue consulting for websites, apps and commerce platforms",
    "desc": "EarnToLink is an ad revenue consulting firm. We assess and design how websites, apps and commerce platforms earn from advertising: platform choice and setup, policy and privacy compliance, retail media and ongoing ad operations.",
    "eyebrow": "Ad revenue platform consulting for businesses",
    "h1": "Your growth partner<br>in advertising revenue",
    "lead": "We help websites, apps and commerce platforms earn steady revenue from advertising. We assess what you have today, choose the right ad platforms and placements, and stay with you through policy reviews and day-to-day operations.",
    "meta": [
      "Websites and media",
      "Mobile apps",
      "Commerce and retail media"
    ],
    "stats": [
      [
        "6",
        "Consulting areas"
      ],
      [
        "3",
        "Revenue channels: web, app, commerce"
      ],
      [
        "6",
        "Steps in every engagement"
      ],
      [
        "14",
        "Website languages"
      ]
    ],
    "services": {
      "eyebrow": "Services",
      "title": "Six areas of consulting",
      "text": "From assessment to platform setup, policy reviews and operations. Choose only the areas you need."
    },
    "why": {
      "eyebrow": "Why EarnToLink",
      "title": "Revenue and trust, protected together",
      "text": "Six principles we keep on every engagement."
    },
    "how": {
      "eyebrow": "How we work",
      "title": "From first call to ongoing operations",
      "text": "Six steps, each one checked against the numbers before we move on."
    },
    "co": {
      "eyebrow": "Company",
      "title": "EarnToLink",
      "text": "Sole proprietorship. Ad revenue consulting and software development."
    },
    "news": {
      "eyebrow": "News",
      "title": "Latest news"
    }
  },

  services: {
    "title": "Services",
    "desc": "EarnToLink services: ad revenue assessment and strategy, website and media monetization, app monetization, retail media and ad platform development, ad policy and privacy compliance, ad operations and reporting.",
    "eyebrow": "Services",
    "h1": "Services",
    "lead": "Six areas. Choose only the ones you need.",
    "whoLabel": "A good fit when",
    "scopeLabel": "What we do",
    "deliverLabel": "What you receive",
    "otherLabel": "Other services",
    "items": {
      "strategy": {
        "name": "Ad revenue assessment and strategy",
        "short": "We review your traffic, ad placements, platform settings and revenue metrics, and set the direction for your revenue model.",
        "lead": "First we find out where your ad revenue comes from and where it leaks. We record the numbers on one consistent baseline, then set priorities and an action plan.",
        "who": [
          "You run ads but earn less than expected",
          "You are deciding whether to switch or add ad platforms",
          "Ad revenue needs to go into your business plan"
        ],
        "scope": [
          [
            "Current-state review",
            "Traffic mix, ad placements, platform settings and revenue flow."
          ],
          [
            "Key metrics",
            "Baselines for page RPM, impression rate, fill rate and viewability."
          ],
          [
            "Revenue model",
            "The right mix of ads, affiliate income, subscriptions and direct-sold ads."
          ],
          [
            "Action plan",
            "Priorities, timeline and expected impact of each improvement."
          ]
        ],
        "deliver": [
          "Assessment report",
          "Metric baseline table",
          "Revenue model recommendations",
          "Phased action plan"
        ]
      },
      "web": {
        "name": "Website and media monetization",
        "short": "Approval readiness, ad placement design and the balance between page speed and revenue for blogs, news and information sites.",
        "lead": "Rather than adding more ads, we look for places that do not interrupt reading. We cover everything from approval readiness to placement design and programmatic setup.",
        "who": [
          "You are preparing for an ad platform approval review",
          "Ads have slowed your pages or increased bounce rates",
          "You want to run several ad networks together"
        ],
        "scope": [
          [
            "Approval readiness",
            "Site structure, required pages and content quality checks, then the application."
          ],
          [
            "Placement design",
            "Ad positions, sizes and spacing that follow the flow of your content."
          ],
          [
            "Page speed",
            "Lazy loading and layout-shift prevention to keep pages fast."
          ],
          [
            "Programmatic setup",
            "Ad server and header bidding configuration, price floor rules."
          ]
        ],
        "deliver": [
          "Approval checklist",
          "Placement plan",
          "Ad settings and implementation guide",
          "Before-and-after report"
        ]
      },
      "app": {
        "name": "App monetization",
        "short": "Ad formats, mediation and frequency in your mobile app, designed around how people use it.",
        "lead": "We decide when and where banner, interstitial and rewarded ads appear, and grow revenue while keeping an eye on retention.",
        "who": [
          "You are adding ads to an app for the first time",
          "Ratings or retention dropped after ads went in",
          "You want to combine several ad networks through mediation"
        ],
        "scope": [
          [
            "Ad format design",
            "Placement and timing of banner, interstitial, rewarded and native ads."
          ],
          [
            "Mediation",
            "Priority and bidding settings across ad networks."
          ],
          [
            "Frequency and experience",
            "Frequency caps, first-session protection and ad-free paying users."
          ],
          [
            "Ads alongside in-app purchases",
            "Remove-ads products and how rewarded ads and purchases fit together."
          ]
        ],
        "deliver": [
          "Ad placement map",
          "Mediation setup plan",
          "Frequency rules document",
          "Retention and revenue comparison"
        ]
      },
      "retail": {
        "name": "Retail media and ad platform development",
        "short": "We help marketplaces and platforms build ad products and operations so sellers and brands can advertise with them.",
        "lead": "We turn your platform's traffic and data into advertising products, and shape pricing, sales and performance reporting with you.",
        "who": [
          "You want to open an advertising business on your marketplace or platform",
          "You sell and invoice seller ads by hand",
          "Advertisers ask for reports that prove results"
        ],
        "scope": [
          [
            "Ad product design",
            "Sellable placements such as top-of-search, sponsored products, banners and email."
          ],
          [
            "Pricing and sales",
            "Auction, fixed-price and time-based products, with pricing rules."
          ],
          [
            "Data and measurement",
            "Impressions, clicks and purchase attribution measured within privacy rules."
          ],
          [
            "Operating model",
            "Advertiser onboarding, ad review, billing and performance reporting."
          ]
        ],
        "deliver": [
          "Ad product catalogue and rate card",
          "Ad business P&L model",
          "Measurement standards and report templates",
          "Operating procedures"
        ]
      },
      "policy": {
        "name": "Ad policy and privacy compliance",
        "short": "Policy reviews, help with rejections, consent management, ads.txt and privacy policies.",
        "lead": "A safe account comes before revenue. We find policy risks early, and when an application is rejected or an account is limited, we find the cause and respond.",
        "who": [
          "Your ad approval was rejected or your account was limited",
          "You need consent management for visitors from other regions",
          "Your privacy policy must be updated before ads go live"
        ],
        "scope": [
          [
            "Policy review",
            "Policy risks in content, ad placement and traffic sources."
          ],
          [
            "Rejections and limits",
            "Cause analysis, fixes and review requests."
          ],
          [
            "Consent management",
            "Regional consent notices linked to your ad settings."
          ],
          [
            "Required files and documents",
            "ads.txt, app-ads.txt, privacy policy and cookie notice."
          ]
        ],
        "deliver": [
          "Policy checklist",
          "Response record",
          "Consent management setup",
          "Required files and documents"
        ]
      },
      "ops": {
        "name": "Ad operations and reporting advisory",
        "short": "Every month we read the revenue metrics, run tests and fix what needs fixing, including invalid traffic and payout gaps.",
        "lead": "Ad revenue is not a one-time setup. We review the metrics every month and keep only the changes that tests have proven.",
        "who": [
          "Your ad revenue swings sharply from month to month",
          "You combine reports from several platforms by hand",
          "Nobody on your team owns ad operations"
        ],
        "scope": [
          [
            "Monthly review",
            "Changes in revenue, impressions, pricing and fill rate, and why they happened."
          ],
          [
            "Testing",
            "Comparison tests of placements, ad formats and price rules."
          ],
          [
            "Unified reporting",
            "Revenue from every platform in one report."
          ],
          [
            "Quality checks",
            "Invalid traffic, ad quality and payout discrepancies."
          ]
        ],
        "deliver": [
          "Monthly operations report",
          "Test log",
          "Unified report",
          "Improvement backlog"
        ]
      }
    }
  },

  why: [
    [
      "Revenue balanced with user experience",
      "Instead of adding more ads, we find placements that keep pages fast and journeys smooth."
    ],
    [
      "Measured, not guessed",
      "We record baseline numbers before we start and compare every change on the same basis."
    ],
    [
      "Independent advice",
      "We take no referral fees from ad platforms, so we compare the options on equal terms."
    ],
    [
      "Policy compliance first",
      "We grow revenue only within ad policies and privacy rules. No click baiting, no invalid traffic."
    ],
    [
      "Your accounts, your data",
      "Ad accounts, payment details and reports are created and kept in your name."
    ],
    [
      "Weekly updates",
      "Every week we share what changed, how the numbers moved and what comes next."
    ]
  ],

  steps: [
    [
      "First call",
      "Your service, traffic size and goals."
    ],
    [
      "Assessment",
      "Placements, settings and revenue metrics reviewed, baselines recorded."
    ],
    [
      "Design",
      "Ad platforms, placements and a compliance plan."
    ],
    [
      "Setup and testing",
      "Changes applied and compared before and after."
    ],
    [
      "Approval and launch",
      "Policy reviews, consent management and required files."
    ],
    [
      "Operations",
      "Monthly reviews, tests and reports."
    ]
  ],

  cta: {
    "title": "Talk to us about ad revenue",
    "text": "Email us your website or app, your monthly traffic and the problem you are facing."
  },

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
    "title": "About",
    "desc": "About EarnToLink: a consulting business that helps websites, apps and commerce platforms earn from advertising. Mission, services, principles and business details.",
    "eyebrow": "About",
    "h1": "EarnToLink",
    "lead": "EarnToLink is an ad revenue consulting business that designs how companies earn from advertising.",
    "mission": {
      "eyebrow": "Mission",
      "title": "Advertising that strengthens the business",
      "body": [
        "Many businesses build good content and services yet earn little from ads. Placements do not fit, settings are out of date, or a policy problem is holding revenue back.",
        "EarnToLink measures where you stand, chooses the right ad platforms and placements, and supports day-to-day operations within policy and privacy rules. We show you the results of every change on the same baseline.",
        "Drawing on our own experience of building and running websites and apps, we hold to one principle: monetization must not spoil the user experience."
      ]
    },
    "do": {
      "eyebrow": "Services",
      "title": "What we do",
      "text": "Registered business types: application software development and supply (main), e-commerce retail, e-commerce retail brokerage."
    },
    "why": {
      "eyebrow": "Principles",
      "title": "Our principles"
    },
    "info": {
      "eyebrow": "Company",
      "title": "Business information"
    }
  },

  principles: {
    "title": "How we work",
    "desc": "How EarnToLink works: revenue balanced with user experience, measured results, independent advice and policy compliance. Steps and contract terms.",
    "eyebrow": "How we work",
    "h1": "How we work",
    "lead": "Principles, steps and contract terms.",
    "why": {
      "eyebrow": "Principles",
      "title": "Six principles",
      "text": "Applied to every engagement."
    },
    "steps": {
      "eyebrow": "Process",
      "title": "Steps",
      "text": "From first call to operations."
    },
    "terms": {
      "eyebrow": "Contracts",
      "title": "Contract terms",
      "rows": [
        [
          "Projects",
          "A contract for each project sets the scope, schedule, fee and payment terms"
        ],
        [
          "Scope changes",
          "Changes and their cost are agreed before work continues"
        ],
        [
          "Ownership",
          "Ad accounts, reports and setup documents stay in your name"
        ],
        [
          "Fees",
          "No referral fees from ad platforms · advisory fees are stated in the contract"
        ]
      ]
    }
  },

  contact: {
    "title": "Contact",
    "desc": "Contact EarnToLink about ad revenue consulting, products, privacy or partnerships. hello@earntolink.com",
    "eyebrow": "Contact",
    "h1": "Contact",
    "lead": "We take enquiries by email and reply in Korean or English.",
    "topics": [
      [
        "chart",
        "Consulting",
        "Ad revenue assessment, web and app monetization, retail media, policy issues, operations advice"
      ],
      [
        "package",
        "Products",
        "Features, release dates and bugs in our own apps"
      ],
      [
        "receipt",
        "Payments",
        "App payments and refunds follow each app store's policy"
      ],
      [
        "shield",
        "Privacy",
        "Requests to access, correct, delete or stop processing personal data"
      ],
      [
        "users",
        "Partnerships",
        "Collaboration and other proposals"
      ]
    ],
    "brief": {
      "title": "Helpful details to include",
      "items": [
        "What you run (website, app or commerce platform) and its address",
        "Monthly visitors or active users",
        "The ad platforms you use now and the problems you see",
        "Your preferred timeline"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink refocuses on ad revenue consulting",
      "summary": "Assessment and strategy, web and app monetization, retail media, policy compliance and operations advice.",
      "body": [
        "EarnToLink has refocused its services on ad revenue consulting.",
        "We now offer six services: ad revenue assessment and strategy, website and media monetization, app monetization, retail media and ad platform development, ad policy and privacy compliance, and ad operations and reporting advisory.",
        "For consultations, email hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com is live",
      "summary": "The EarnToLink website is now available in 14 languages.",
      "body": [
        "The EarnToLink website, earntolink.com, is now live.",
        "It covers our services, our own products, company details, our privacy policy and how to contact us.",
        "It is available in Korean, English, Japanese, Chinese (Simplified and Traditional), Spanish, French, German, Portuguese, Italian, Vietnamese, Indonesian, Thai and Russian."
      ]
    },
    "product-lineup": {
      "title": "Our own products",
      "summary": "Two mobile apps and three desktop apps.",
      "body": [
        "An update on our own products.",
        "The mobile apps Roll Tidy and Roll Flick and the desktop apps Space Map, Dupeless and Archive Fix are being prepared for release."
      ]
    }
  },
  newsPage: {
    "title": "News",
    "desc": "EarnToLink news: service update, website launch and product status."
  },

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
      { id: 'accuracy', h: '3. Product and service information', html: "<p>Product status, features and service descriptions are accurate as of writing. Features, prices and schedules of products not yet released may change.</p>" },
      { id: 'projects', h: '4. Project contracts', html: "<p>Assessment, consulting, ad setup and operations advisory services follow the contract for each project. If these terms and a contract differ, the contract prevails. Ad revenue depends on the ad market and platform policies, and any estimates in our assessments or proposals are not guarantees.</p>" },
      { id: 'apps', h: '5. Use of apps', html: '<p>Each app is also subject to the terms of the store it is distributed through (App Store, Google Play, Microsoft Store and others) and its own notices.</p>' },
      { id: 'links', h: '6. External links', html: '<p>External sites are governed by their own terms and policies.</p>' },
      { id: 'liability', h: '7. Limitation of liability', html: '<p>To the extent permitted by law, EarnToLink is not liable for indirect damages arising from use of this site.</p>' },
      { id: 'law', h: '8. Governing law', html: '<p>These terms are governed by the laws of the Republic of Korea.</p>' },
      { id: 'contact', h: '9. Contact', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Your growth partner in advertising revenue",
    "s": "Ad revenue assessment · Web and app monetization<br>Retail media · Policy compliance · Operations",
    "tags": [
      "Websites and media",
      "Mobile apps",
      "Commerce"
    ]
  },
};
