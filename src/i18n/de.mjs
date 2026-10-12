// Deutsch. Same structure as ko.mjs. Facts only, no em dashes.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 Sprachen (Englisch, Koreanisch, Japanisch, Chinesisch vereinfacht und traditionell, Deutsch, Französisch, Spanisch, Portugiesisch, Italienisch)';
const ONDEVICE = 'Auf dem Gerät · keine Netzwerkverbindung';
const ONE_TIME = 'Einmalkauf · ₩10.000 oder weniger';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Werbeeinnahmen mit System.",
  translationNote: 'Diese Seite ist eine Übersetzung. Bei Abweichungen vom koreanischen Original gilt das koreanische Original.',

  ui: {
    skip: 'Zum Inhalt springen', menu: 'Menü', language: 'Sprache', mainNav: 'Hauptnavigation', breadcrumb: 'Brotkrumennavigation', toc: 'Inhalt', homeAria: 'EarnToLink Startseite',
    nav: { services: "Leistungen", products: 'Produkte', about: 'Über uns', principles: 'Arbeitsweise', news: 'Neuigkeiten', contact: 'Kontakt' },
    home: 'Startseite', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', rss: 'RSS',
    footer: { services: "Leistungen", products: 'Produkte', company: 'Unternehmen', policy: 'Richtlinien' },
    biz: { name: 'Firmenname', rep: 'Inhaber', no: 'Gewerbenummer', tax: 'Steuerart', kinds: 'Geschäftsfelder', mail: 'E-Mail' },
    rights: '© 2026 EarnToLink. Alle Rechte vorbehalten.',
    view: 'Details', all: 'Alle Produkte', allServices: "Alle Leistungen", email: 'E-Mail', mailBtn: 'E-Mail senden', projectBtn: "Beratung buchen",
    platform: 'Plattform', status: 'Status', features: 'Funktionen', specs: 'Technische Daten', related: 'Weitere Produkte', privacyNote: 'Datenschutz',
    productIllustration: 'Produktabbildung: ',
    heroLabel: 'Illustration eines Dashboards mit Werbeeinnahmen aus Websites, Apps und Commerce',
    newsFeedTitle: 'EarnToLink Neuigkeiten', newsFeedDesc: 'Neuigkeiten von EarnToLink (언투링크)',
    notFound: { title: 'Seite nicht gefunden', text: 'Die Adresse hat sich geändert oder die Seite existiert nicht.', home: 'Zur Startseite' },
  },

  status: { soon: 'Demnächst', dev: 'In Entwicklung', live: 'Verfügbar' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Regelbesteuerter Unternehmer (Korea)',
    form: 'Unternehmensform', formValue: 'Einzelunternehmen (Korea)', kindsLabel: 'Angemeldete Tätigkeit', site: 'Website',
    kinds: ['Entwicklung und Vertrieb von Anwendungssoftware (Hauptgeschäft)', 'E-Commerce-Einzelhandel', 'Vermittlung im E-Commerce-Einzelhandel'],
  },

  categories: {
    mobile: { name: 'Mobile Apps', plat: 'Android · iOS' },
    desktop: { name: 'Desktop-Apps', plat: 'macOS · Windows' },
  },

  home: {
    "title": "EarnToLink | Beratung für Werbeeinnahmen von Websites, Apps und Commerce-Plattformen",
    "desc": "EarnToLink ist eine Beratung für Werbeeinnahmen. Wir analysieren und gestalten, wie Websites, Apps und Commerce-Plattformen mit Werbung Geld verdienen: Plattformwahl und Einrichtung, Richtlinien- und Datenschutz-Compliance, Retail Media und laufender Werbebetrieb.",
    "eyebrow": "Beratung für Werbeeinnahmen von Unternehmen",
    "h1": "Werbeeinnahmen<br>mit System.",
    "lead": "Wir helfen Websites, Apps und Commerce-Plattformen, mit Werbung verlässlich zu verdienen. Wir analysieren Ihre Ausgangslage, wählen passende Werbeplattformen und Platzierungen aus und begleiten Sie bei Richtlinienprüfungen und im laufenden Betrieb.",
    "meta": [
      "Websites und Medien",
      "Mobile Apps",
      "Commerce und Retail Media"
    ],
    "stats": [
      [
        "6",
        "Beratungsfelder"
      ],
      [
        "3",
        "Erlöskanäle: Web, App, Commerce"
      ],
      [
        "6",
        "Schritte in jedem Projekt"
      ],
      [
        "14",
        "Website-Sprachen"
      ]
    ],
    "services": {
      "eyebrow": "Leistungen",
      "title": "Sechs Beratungsfelder",
      "text": "Von der Analyse über die Plattformeinrichtung bis zu Richtlinienprüfung und Betrieb. Sie wählen nur, was Sie brauchen."
    },
    "why": {
      "eyebrow": "Warum EarnToLink",
      "title": "Erlöse und Vertrauen gemeinsam schützen",
      "text": "Sechs Grundsätze, die wir in jedem Projekt einhalten."
    },
    "how": {
      "eyebrow": "Ablauf",
      "title": "Vom ersten Gespräch bis zum laufenden Betrieb",
      "text": "Sechs Schritte, jeder wird an den Zahlen geprüft, bevor der nächste beginnt."
    },
    "co": {
      "eyebrow": "Unternehmen",
      "title": "EarnToLink",
      "text": "Einzelunternehmen in Korea. Beratung für Werbeeinnahmen und Softwareentwicklung."
    },
    "news": {
      "eyebrow": "Neuigkeiten",
      "title": "Aktuelles"
    }
  },

  services: {
    "title": "Leistungen",
    "desc": "Leistungen von EarnToLink: Analyse und Strategie für Werbeeinnahmen, Monetarisierung von Websites und Medien, App-Monetarisierung, Retail Media und Entwicklung von Werbeplattformen, Werbe- und Datenschutz-Compliance, Werbebetrieb und Reporting.",
    "eyebrow": "Leistungen",
    "h1": "Leistungen",
    "lead": "Sechs Bereiche. Wählen Sie nur, was Sie brauchen.",
    "whoLabel": "Passt gut, wenn",
    "scopeLabel": "Was wir tun",
    "deliverLabel": "Das erhalten Sie",
    "otherLabel": "Weitere Leistungen",
    "items": {
      "strategy": {
        "name": "Erlösanalyse und Strategie",
        "short": "Wir prüfen Traffic, Werbeplätze, Plattformeinstellungen und Erlöskennzahlen und legen die Richtung Ihres Erlösmodells fest.",
        "lead": "Zuerst klären wir, woher Ihre Werbeeinnahmen kommen und wo sie verloren gehen. Wir halten die Zahlen auf einer einheitlichen Basis fest und legen dann Prioritäten und einen Maßnahmenplan fest.",
        "who": [
          "Sie schalten Werbung, verdienen aber weniger als erwartet",
          "Sie entscheiden, ob Sie die Werbeplattform wechseln oder weitere hinzunehmen",
          "Werbeeinnahmen sollen in Ihre Unternehmensplanung einfließen"
        ],
        "scope": [
          [
            "Bestandsaufnahme",
            "Traffic-Struktur, Werbeplätze, Plattformeinstellungen und Erlösfluss."
          ],
          [
            "Kernkennzahlen",
            "Ausgangswerte für Seiten-RPM, Impression-Rate, Fill Rate und Viewability."
          ],
          [
            "Erlösmodell",
            "Die passende Mischung aus Werbung, Affiliate-Einnahmen, Abonnements und direkt verkaufter Werbung."
          ],
          [
            "Maßnahmenplan",
            "Prioritäten, Zeitplan und erwartete Wirkung jeder Verbesserung."
          ]
        ],
        "deliver": [
          "Analysebericht",
          "Tabelle mit den Ausgangskennzahlen",
          "Empfehlungen zum Erlösmodell",
          "Maßnahmenplan in Phasen"
        ]
      },
      "web": {
        "name": "Monetarisierung von Websites und Medien",
        "short": "Zulassungsreife, Gestaltung der Werbeplätze und der Ausgleich zwischen Ladezeit und Erlös für Blogs, Nachrichten- und Informationsseiten.",
        "lead": "Statt mehr Werbung einzubauen, suchen wir Plätze, die das Lesen nicht stören. Wir begleiten alles von der Zulassungsreife über die Platzierung bis zur Programmatic-Einrichtung.",
        "who": [
          "Sie bereiten die Zulassung bei einer Werbeplattform vor",
          "Werbung hat Ihre Seiten verlangsamt oder die Absprungrate erhöht",
          "Sie möchten mehrere Werbenetzwerke parallel einsetzen"
        ],
        "scope": [
          [
            "Zulassungsreife",
            "Prüfung von Seitenstruktur, Pflichtseiten und Inhaltsqualität, danach der Antrag."
          ],
          [
            "Platzierung",
            "Position, Format und Abstand der Werbung, abgestimmt auf den Lesefluss."
          ],
          [
            "Ladezeit",
            "Lazy Loading und Vermeidung von Layoutverschiebungen für schnelle Seiten."
          ],
          [
            "Programmatic-Einrichtung",
            "Konfiguration von Ad-Server und Header Bidding, Regeln für Mindestpreise."
          ]
        ],
        "deliver": [
          "Checkliste zur Zulassung",
          "Platzierungsplan",
          "Werbeeinstellungen und Umsetzungsleitfaden",
          "Vorher-nachher-Bericht"
        ]
      },
      "app": {
        "name": "App-Monetarisierung",
        "short": "Werbeformate, Mediation und Ausspielhäufigkeit in Ihrer mobilen App, abgestimmt auf das Nutzungsverhalten.",
        "lead": "Wir legen fest, wann und wo Banner, Interstitials und Rewarded Ads erscheinen, und steigern den Erlös, ohne die Nutzerbindung aus dem Blick zu verlieren.",
        "who": [
          "Sie bauen erstmals Werbung in eine App ein",
          "Bewertungen oder Nutzerbindung sind nach der Einführung von Werbung gesunken",
          "Sie möchten mehrere Werbenetzwerke per Mediation bündeln"
        ],
        "scope": [
          [
            "Werbeformate",
            "Platzierung und Zeitpunkt von Bannern, Interstitials, Rewarded Ads und Native Ads."
          ],
          [
            "Mediation",
            "Priorisierung und Bidding-Einstellungen über mehrere Werbenetzwerke."
          ],
          [
            "Frequenz und Nutzererlebnis",
            "Frequency Caps, werbefreie erste Sitzung und werbefreie zahlende Nutzer."
          ],
          [
            "Werbung neben In-App-Käufen",
            "Produkte zum Entfernen der Werbung und das Zusammenspiel von Rewarded Ads und Käufen."
          ]
        ],
        "deliver": [
          "Karte der Werbeplätze",
          "Plan für die Mediation",
          "Dokument mit den Frequenzregeln",
          "Vergleich von Nutzerbindung und Erlös"
        ]
      },
      "retail": {
        "name": "Retail Media und Aufbau von Werbeplattformen",
        "short": "Wir unterstützen Marktplätze und Plattformen beim Aufbau von Werbeprodukten und Abläufen, damit Händler und Marken dort werben können.",
        "lead": "Wir machen aus Reichweite und Daten Ihrer Plattform Werbeprodukte und gestalten gemeinsam mit Ihnen Preise, Vertrieb und Erfolgsreporting.",
        "who": [
          "Sie möchten auf Ihrem Marktplatz oder Ihrer Plattform ein Werbegeschäft aufbauen",
          "Sie verkaufen und fakturieren Händlerwerbung bisher von Hand",
          "Werbekunden verlangen Berichte, die den Erfolg belegen"
        ],
        "scope": [
          [
            "Werbeprodukte",
            "Verkaufbare Platzierungen wie Top-of-Search, Sponsored Products, Banner und E-Mail."
          ],
          [
            "Preise und Vertrieb",
            "Auktions-, Festpreis- und zeitbasierte Produkte samt Preisregeln."
          ],
          [
            "Daten und Messung",
            "Impressionen, Klicks und Kaufzuordnung, gemessen im Rahmen des Datenschutzes."
          ],
          [
            "Betriebsmodell",
            "Onboarding der Werbekunden, Anzeigenprüfung, Abrechnung und Erfolgsreporting."
          ]
        ],
        "deliver": [
          "Produktkatalog und Preisliste für Werbung",
          "GuV-Modell für das Werbegeschäft",
          "Messstandards und Berichtsvorlagen",
          "Betriebsabläufe"
        ]
      },
      "policy": {
        "name": "Werberichtlinien und Datenschutz",
        "short": "Richtlinienprüfung, Hilfe bei Ablehnungen, Einwilligungsmanagement, ads.txt und Datenschutzerklärung.",
        "lead": "Ein sicheres Konto kommt vor dem Erlös. Wir erkennen Richtlinienrisiken früh und analysieren die Ursache, wenn ein Antrag abgelehnt oder ein Konto eingeschränkt wird, und antworten darauf.",
        "who": [
          "Ihre Werbezulassung wurde abgelehnt oder Ihr Konto eingeschränkt",
          "Sie brauchen ein Einwilligungsmanagement für Besucher aus anderen Regionen",
          "Ihre Datenschutzerklärung muss vor dem Start der Werbung aktualisiert werden"
        ],
        "scope": [
          [
            "Richtlinienprüfung",
            "Richtlinienrisiken bei Inhalten, Werbeplatzierung und Traffic-Quellen."
          ],
          [
            "Ablehnungen und Einschränkungen",
            "Ursachenanalyse, Korrekturen und Antrag auf erneute Prüfung."
          ],
          [
            "Einwilligungsmanagement",
            "Einwilligungshinweise je Region, verknüpft mit Ihren Werbeeinstellungen."
          ],
          [
            "Pflichtdateien und Dokumente",
            "ads.txt, app-ads.txt, Datenschutzerklärung und Cookie-Hinweis."
          ]
        ],
        "deliver": [
          "Richtlinien-Checkliste",
          "Protokoll der Rückmeldungen",
          "Einrichtung des Einwilligungsmanagements",
          "Pflichtdateien und Dokumente"
        ]
      },
      "ops": {
        "name": "Werbebetrieb und Reporting-Beratung",
        "short": "Jeden Monat werten wir die Erlöskennzahlen aus, führen Tests durch und beheben, was nötig ist, auch bei ungültigem Traffic und Auszahlungsabweichungen.",
        "lead": "Werbeeinnahmen sind keine einmalige Einrichtung. Wir werten die Kennzahlen jeden Monat aus und behalten nur Änderungen, die ein Test bestätigt hat.",
        "who": [
          "Ihre Werbeeinnahmen schwanken von Monat zu Monat stark",
          "Sie führen die Berichte mehrerer Plattformen von Hand zusammen",
          "In Ihrem Team ist niemand für den Werbebetrieb zuständig"
        ],
        "scope": [
          [
            "Monatliche Auswertung",
            "Veränderungen bei Erlös, Impressionen, Preisen und Fill Rate samt Ursachen."
          ],
          [
            "Tests",
            "Vergleichstests von Platzierungen, Werbeformaten und Preisregeln."
          ],
          [
            "Einheitliches Reporting",
            "Die Erlöse aller Plattformen in einem Bericht."
          ],
          [
            "Qualitätskontrolle",
            "Ungültiger Traffic, Werbequalität und Abweichungen bei Auszahlungen."
          ]
        ],
        "deliver": [
          "Monatlicher Betriebsbericht",
          "Testprotokoll",
          "Einheitlicher Bericht",
          "Backlog für Verbesserungen"
        ]
      }
    }
  },

  why: [
    [
      "Erlös und Nutzererlebnis im Gleichgewicht",
      "Statt mehr Werbung auszuspielen, suchen wir Platzierungen, die Seiten schnell und den Weg der Nutzer reibungslos halten."
    ],
    [
      "Gemessen statt geschätzt",
      "Wir halten die Ausgangswerte vor dem Start fest und vergleichen jede Änderung auf derselben Basis."
    ],
    [
      "Unabhängige Beratung",
      "Wir nehmen keine Vermittlungsprovisionen von Werbeplattformen an und vergleichen die Optionen deshalb gleichberechtigt."
    ],
    [
      "Richtlinientreue zuerst",
      "Wir steigern Erlöse nur im Rahmen von Werberichtlinien und Datenschutzregeln. Kein Klickfang, kein ungültiger Traffic."
    ],
    [
      "Ihre Konten, Ihre Daten",
      "Werbekonten, Zahlungsdaten und Berichte werden auf Ihren Namen angelegt und bleiben bei Ihnen."
    ],
    [
      "Wöchentliche Updates",
      "Jede Woche berichten wir, was sich geändert hat, wie sich die Zahlen entwickeln und was als Nächstes ansteht."
    ]
  ],

  steps: [
    [
      "Erstgespräch",
      "Ihr Angebot, Ihr Traffic und Ihre Ziele."
    ],
    [
      "Analyse",
      "Platzierungen, Einstellungen und Erlöskennzahlen geprüft, Ausgangswerte festgehalten."
    ],
    [
      "Konzept",
      "Werbeplattformen, Platzierungen und Compliance-Plan."
    ],
    [
      "Einrichtung und Tests",
      "Änderungen umgesetzt und im Vorher-nachher-Vergleich geprüft."
    ],
    [
      "Zulassung und Start",
      "Richtlinienprüfung, Einwilligungsmanagement und Pflichtdateien."
    ],
    [
      "Betrieb",
      "Monatliche Auswertung, Tests und Berichte."
    ]
  ],

  cta: {
    "title": "Sprechen Sie mit uns über Werbeeinnahmen",
    "text": "Senden Sie uns per E-Mail Ihre Website oder App, den monatlichen Traffic und die Herausforderung, vor der Sie stehen."
  },

  products: {
    title: 'Produkte',
    desc: 'Eigene Produkte von EarnToLink: zwei mobile Apps (Roll Tidy, Roll Flick) und drei Desktop-Apps (Space Map, Dupeless, Archive Fix). Alle demnächst verfügbar.',
    eyebrow: 'Eigene Produkte', h1: 'Produkte', lead: 'Zwei mobile Apps und drei Desktop-Apps. Alle demnächst verfügbar.', tabsLabel: 'Kategorien',
    groups: { mobile: 'Android · iOS. Fotos aufräumen.', desktop: 'macOS · Windows. Datenträger, Dateien, Archive.' },
    prin: { eyebrow: 'Produktprinzipien', title: 'Klein und ehrlich', text: 'Gilt für alle fünf unserer Apps.' },
    principles: [
      ['Auf dem Gerät', 'Dateien und Fotos werden nur auf dem Gerät analysiert. Nichts wird an einen Server gesendet.'],
      ['Keine Werbung, kein Tracking', 'Keine Werbung, Analyse, Absturzberichte oder Konten.'],
      ['Einmalkauf', 'Keine Abonnements. ₩10.000 oder weniger pro App.'],
      ['Wiederherstellbares Löschen', 'Gelöschte Dateien und Fotos landen im Papierkorb und lassen sich wiederherstellen.'],
    ],
    featTitle: 'Funktionen von {name}',
    privacy: {
      mobile: 'Fotos werden nur auf dem Gerät analysiert und nie irgendwohin gesendet.',
      desktop: 'Dateien werden nur auf dem Gerät verarbeitet und nie irgendwohin gesendet.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Ähnliche Fotos, unscharfe Aufnahmen, Screenshots und große Videos',
        lead: 'Analysiert die Fotomediathek auf dem Gerät und sammelt nach Kategorien, was weg kann.',
        features: [
          ['Gruppen ähnlicher Fotos', 'Gruppiert Aufnahmen innerhalb von 90 Sekunden, die sich ähneln, mit einem 64-Bit-Differenz-Hash.'],
          ['Beste Aufnahme', 'Schlägt in jeder Gruppe das schärfste Foto zum Behalten vor. Favoriten sind nie Löschkandidaten.'],
          ['Unscharfe Fotos', 'Findet unscharfe Fotos im Vergleich zur gesamten Mediathek. Sehr dunkle oder helle Fotos werden übersprungen.'],
          ['Screenshots', 'Sammelt Fotos aus dem Screenshot-Album.'],
          ['Große Videos', 'Sortiert Videos nach geschätzter Größe, die größten zuerst.'],
          ['Wiederherstellbares Löschen', 'Verschiebt Elemente in den Android-Papierkorb oder zu „Zuletzt gelöscht“ unter iOS (30 Tage).'],
        ],
        specs: [['Plattformen', 'Android · iOS'], ['Verarbeitung', ONDEVICE], ['Löschen', 'Verschiebt in den System-Papierkorb'], ['Sprachen', APP_LANGS], ['Preis', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Fotos einzeln durchwischen: behalten oder löschen',
        lead: 'Teilt Fotos nach dem Aufnahmemonat auf und lässt Sie Foto für Foto entscheiden.',
        features: [
          ['Nach Monat', 'Gruppiert Fotos nach Aufnahmemonat, die neuesten zuerst.'],
          ['Wischen', 'Nach links wischen zum Löschen vormerken, nach rechts zum Behalten.'],
          ['Rückgängig', 'Macht die letzte Entscheidung rückgängig.'],
          ['Prüfen vor dem Löschen', 'Am Ende eines Monats prüfen Sie die markierten Fotos und räumen dann in einem Schritt auf.'],
          ['Fortschritt', 'Aufgeräumte Fotos, Tage in Folge und abgeschlossene Monate. Nur auf dem Gerät gespeichert.'],
          ['Auf dem Gerät', 'Fotos werden nie an einen Server gesendet.'],
        ],
        specs: [['Plattformen', 'Android · iOS'], ['Verarbeitung', ONDEVICE], ['Löschen', 'Verschiebt in den System-Papierkorb'], ['Sprachen', APP_LANGS], ['Preis', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Eine Treemap der Ordner und Dateien, die Ihren Datenträger füllen',
        lead: 'Durchsucht einen Ordner und zeigt die Größe als Fläche, damit die größten Elemente zuerst aufgeräumt werden können.',
        features: [
          ['Treemap', 'Squarified Treemap, nach Dateityp gefärbt: Video, Bilder, Audio, Dokumente, Archive, Programme, Sonstiges.'],
          ['Drei Ansichten', 'Karte, größte Dateien und Größe nach Typ.'],
          ['Schnellzugriff auf Ordner', 'Home, Downloads, Schreibtisch, Dokumente, Bilder, Videos, Laufwerk C (Windows).'],
          ['Navigation', 'In Unterordner wechseln und zum übergeordneten Ordner zurückkehren.'],
          ['Finder · Explorer', 'Zeigt das ausgewählte Element im Finder oder Explorer an.'],
          ['In den Papierkorb', 'Gelöschte Elemente lassen sich aus dem Papierkorb wiederherstellen. Ordner ohne Berechtigung werden übersprungen und gezählt.'],
        ],
        specs: [['Plattformen', 'macOS · Windows'], ['Verarbeitung', ONDEVICE], ['Löschen', 'Verschiebt in den Papierkorb'], ['Sprachen', APP_LANGS], ['Preis', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Dateien mit identischem Inhalt finden und aufräumen',
        lead: 'Vergleicht den Inhalt, nicht die Namen: zuerst die Größe, dann die ersten und letzten 64 KB, dann SHA-256.',
        features: [
          ['Dreistufiger Vergleich', 'Dateiliste, Schnellvergleich (erste und letzte 64 KB), vollständiger Vergleich (SHA-256).'],
          ['Mehrere Ordner', 'Mehrere Suchordner, Mindestdateigröße, versteckte Dateien überspringen.'],
          ['Automatische Auswahl', 'Die älteste, die neueste oder die Datei mit dem kürzesten Pfad behalten.'],
          ['Immer eine behalten', 'Mindestens eine Datei pro Gruppe bleibt erhalten.'],
          ['In den Papierkorb', 'Nur ausgewählte Dateien kommen in den Papierkorb. Wiederherstellbar.'],
          ['Finder · Explorer', 'Den Speicherort der Datei direkt öffnen.'],
        ],
        specs: [['Plattformen', 'macOS · Windows'], ['Verarbeitung', ONDEVICE], ['Vergleich', 'Größe → erste/letzte 64 KB → SHA-256'], ['Sprachen', APP_LANGS], ['Preis', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Archive entpacken und erstellen, ohne defekte koreanische Dateinamen',
        lead: 'Erkennt CP949-Dateinamen in ZIPs, die unter koreanischem Windows erstellt wurden, und stellt sie wieder her. Basiert auf 7-Zip.',
        features: [
          ['Reparatur koreanischer Namen', 'Prüft ZIP-Einträge ohne UTF-8-Kennzeichen und wandelt CP949-Namen (koreanisches Windows) automatisch um.'],
          ['16 Formate', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Archive erstellen', 'ZIP oder 7Z, mit schneller, normaler oder maximaler Komprimierung.'],
          ['AES-256-Passwort', 'AES-256 für ZIP; 7Z verschlüsselt auch Dateinamen.'],
          ['Drag and Drop', 'Archive werden entpackt, andere Dateien komprimiert.'],
          ['7-Zip 26.04 enthalten', 'Keine separate Installation.'],
        ],
        specs: [['Plattformen', 'macOS · Windows'], ['Verarbeitung', ONDEVICE], ['Engine', '7-Zip 26.04 (LGPL)'], ['Sprachen', APP_LANGS], ['Preis', ONE_TIME]],
      },
    },
  },

  about: {
    "title": "Über uns",
    "desc": "Über EarnToLink: eine Beratung, die Websites, Apps und Commerce-Plattformen hilft, mit Werbung zu verdienen. Mission, Leistungen, Grundsätze und Unternehmensdaten.",
    "eyebrow": "Über uns",
    "h1": "EarnToLink",
    "lead": "EarnToLink ist eine Beratung für Werbeeinnahmen und gestaltet, wie Unternehmen mit Werbung Geld verdienen.",
    "mission": {
      "eyebrow": "Mission",
      "title": "Werbung, die das Geschäft stärkt",
      "body": [
        "Viele Unternehmen bauen gute Inhalte und Dienste auf und verdienen doch wenig mit Werbung. Die Platzierungen passen nicht, Einstellungen sind veraltet, oder ein Richtlinienproblem bremst den Erlös.",
        "EarnToLink misst Ihre Ausgangslage, wählt passende Werbeplattformen und Platzierungen aus und begleitet den laufenden Betrieb im Rahmen von Werbe- und Datenschutzrichtlinien. Die Wirkung jeder Änderung zeigen wir Ihnen auf derselben Basis.",
        "Aus eigener Erfahrung im Aufbau und Betrieb von Websites und Apps folgen wir einem Grundsatz: Monetarisierung darf das Nutzererlebnis nicht verderben."
      ]
    },
    "do": {
      "eyebrow": "Leistungen",
      "title": "Was wir tun",
      "text": "Angemeldete Tätigkeiten: Entwicklung und Vertrieb von Anwendungssoftware (Hauptgeschäft), E-Commerce-Einzelhandel, Vermittlung im E-Commerce-Einzelhandel."
    },
    "why": {
      "eyebrow": "Grundsätze",
      "title": "Unsere Grundsätze"
    },
    "info": {
      "eyebrow": "Unternehmen",
      "title": "Unternehmensdaten"
    }
  },

  principles: {
    "title": "Arbeitsweise",
    "desc": "Die Arbeitsweise von EarnToLink: Erlös im Gleichgewicht mit dem Nutzererlebnis, gemessene Ergebnisse, unabhängige Beratung und Richtlinientreue. Ablauf und Vertragsbedingungen.",
    "eyebrow": "Arbeitsweise",
    "h1": "Arbeitsweise",
    "lead": "Grundsätze, Ablauf und Vertragsbedingungen.",
    "why": {
      "eyebrow": "Grundsätze",
      "title": "Sechs Grundsätze",
      "text": "Sie gelten für jedes Projekt."
    },
    "steps": {
      "eyebrow": "Ablauf",
      "title": "Schritte",
      "text": "Vom Erstgespräch bis zum Betrieb."
    },
    "terms": {
      "eyebrow": "Verträge",
      "title": "Vertragsbedingungen",
      "rows": [
        [
          "Projekte",
          "Umfang, Zeitplan, Honorar und Zahlungsbedingungen werden je Projekt vertraglich festgelegt"
        ],
        [
          "Änderungen des Umfangs",
          "Änderungen und ihre Kosten werden vereinbart, bevor die Arbeit fortgesetzt wird"
        ],
        [
          "Eigentum",
          "Werbekonten, Berichte und Einrichtungsdokumente bleiben auf Ihren Namen"
        ],
        [
          "Honorar",
          "Keine Vermittlungsprovisionen von Werbeplattformen · das Beratungshonorar steht im Vertrag"
        ]
      ]
    }
  },

  contact: {
    "title": "Kontakt",
    "desc": "Kontakt zu EarnToLink für Beratung zu Werbeeinnahmen, Produkte, Datenschutz oder Partnerschaften. hello@earntolink.com",
    "eyebrow": "Kontakt",
    "h1": "Kontakt",
    "lead": "Anfragen nehmen wir per E-Mail entgegen und antworten auf Koreanisch oder Englisch.",
    "topics": [
      [
        "chart",
        "Beratung",
        "Erlösanalyse, Web- und App-Monetarisierung, Retail Media, Richtlinienfragen, Betriebsberatung"
      ],
      [
        "package",
        "Produkte",
        "Funktionen, Veröffentlichungstermine und Fehler in unseren eigenen Apps"
      ],
      [
        "receipt",
        "Zahlungen",
        "App-Zahlungen und Erstattungen folgen den Richtlinien des jeweiligen App Stores"
      ],
      [
        "shield",
        "Datenschutz",
        "Anfragen auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung"
      ],
      [
        "users",
        "Partnerschaften",
        "Zusammenarbeit und andere Vorschläge"
      ]
    ],
    "brief": {
      "title": "Hilfreiche Angaben für Ihre Anfrage",
      "items": [
        "Was Sie betreiben (Website, App oder Commerce-Plattform) und die Adresse",
        "Monatliche Besucher oder aktive Nutzer",
        "Die Werbeplattformen, die Sie derzeit nutzen, und die Probleme, die Sie sehen",
        "Ihr gewünschter Zeitrahmen"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink richtet sich auf Beratung für Werbeeinnahmen aus",
      "summary": "Erlösanalyse und Strategie, Web- und App-Monetarisierung, Retail Media, Richtlinientreue und Betriebsberatung.",
      "body": [
        "EarnToLink hat sein Leistungsangebot auf die Beratung für Werbeeinnahmen ausgerichtet.",
        "Wir bieten jetzt sechs Leistungen an: Erlösanalyse und Strategie, Monetarisierung von Websites und Medien, App-Monetarisierung, Retail Media und Aufbau von Werbeplattformen, Werberichtlinien und Datenschutz sowie Werbebetrieb und Reporting-Beratung.",
        "Für Beratungsanfragen schreiben Sie an hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com ist online",
      "summary": "Die Website von EarnToLink ist in 14 Sprachen online.",
      "body": [
        "Die Website von EarnToLink, earntolink.com, ist jetzt online.",
        "Sie enthält unsere Leistungen, eigenen Produkte, Unternehmensdaten, die Datenschutzerklärung und Kontaktdaten.",
        "Sie ist verfügbar auf Koreanisch, Englisch, Japanisch, Chinesisch (vereinfacht und traditionell), Spanisch, Französisch, Deutsch, Portugiesisch, Italienisch, Vietnamesisch, Indonesisch, Thailändisch und Russisch."
      ]
    },
    "product-lineup": {
      "title": "Unsere eigenen Produkte",
      "summary": "Zwei mobile Apps und drei Desktop-Apps.",
      "body": [
        "Der aktuelle Stand unserer eigenen Produkte.",
        "Die mobilen Apps Roll Tidy und Roll Flick sowie die Desktop-Apps Space Map, Dupeless und Archive Fix sind demnächst verfügbar."
      ]
    }
  },
  newsPage: {
    "title": "Neuigkeiten",
    "desc": "Neuigkeiten von EarnToLink: Leistungsangebot, Start der Website und Produktstatus."
  },

  privacy: {
    title: 'Datenschutzerklärung',
    desc: 'Datenschutzerklärung von EarnToLink für die Website, E-Mail-Anfragen und unsere Apps. Gültig ab 10. Oktober 2026.',
    eyebrow: 'Richtlinie', lead: 'Gültig ab 10. Oktober 2026',
    sections: [
      { id: 'general', h: '1. Allgemeines', html: `<p>EarnToLink (언투링크, „EarnToLink“) schützt personenbezogene Daten nach dem koreanischen Gesetz zum Schutz personenbezogener Daten (Personal Information Protection Act). Diese Erklärung gilt für die Website earntolink.com und die von EarnToLink entwickelten Apps.</p><p>Zusammenfassung: Die Website verwendet keine Registrierung, Formulare, Cookies, Analyse oder Werbung. Unsere Apps verarbeiten Dateien und Fotos nur auf dem Gerät und senden sie nie irgendwohin.</p>` },
      { id: 'site', h: '2. Website', html: `<ul><li>Keine Registrierung, kein Login und keine Formulare.</li><li>Keine Cookies, Analysewerkzeuge oder Werbeskripte.</li><li>Die Website wird über GitHub Pages (GitHub, Inc.) bereitgestellt. GitHub kann Zugriffsprotokolle wie IP-Adressen für Betrieb und Sicherheit verarbeiten, gemäß der <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>Die Schrift Pretendard wird über das jsDelivr-CDN geladen, das Anfragedaten wie die IP-Adresse Ihres Browsers erhalten kann.</li><li>Sollten jemals Cookies oder Analyse eingeführt werden, wird diese Erklärung zuvor aktualisiert.</li></ul>` },
      { id: 'email', h: '3. E-Mail-Anfragen', html: `<table><tr><th>Daten</th><th>Zweck</th><th>Aufbewahrung</th></tr><tr><td>E-Mail-Adresse, Anzeigename, Nachrichteninhalt und Anhänge</td><td>Lesen und Beantworten von Anfragen, Projektberatung, Bearbeitung von Anliegen</td><td>Unverzügliche Löschung nach Bearbeitung. Folgt ein Vertrag, Aufbewahrung für die Vertragsdauer und die gesetzlich vorgeschriebene Frist</td></tr></table><p>Anfragen per E-Mail werden in Gmail empfangen und gespeichert, bereitgestellt von Google LLC.</p>` },
      { id: 'apps', h: '4. Unsere Apps', html: `<p>Erfasste Apps: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Alle demnächst verfügbar.</p><div class="table-scroll"><table><tr><th>App</th><th>Verarbeitete Daten</th><th>Ort</th><th>Extern gesendet</th></tr><tr><td>Roll Tidy</td><td>Fotos und Videos in Mediatheken, für die Sie Zugriff erteilen</td><td>Auf dem Gerät</td><td>Nein</td></tr><tr><td>Roll Flick</td><td>Fotos in Mediatheken, für die Sie Zugriff erteilen</td><td>Auf dem Gerät</td><td>Nein</td></tr><tr><td>Space Map</td><td>Namen, Größen und Typen der Dateien in von Ihnen gewählten Ordnern</td><td>Auf dem Gerät</td><td>Nein</td></tr><tr><td>Dupeless</td><td>Dateigrößen und Inhalts-Hashes in von Ihnen gewählten Ordnern</td><td>Auf dem Gerät</td><td>Nein</td></tr><tr><td>Archive Fix</td><td>Archive und Dateien, die Sie auswählen</td><td>Auf dem Gerät</td><td>Nein</td></tr></table></div><ul><li>Die Apps stellen keine Netzwerkverbindung her und laden nie Dateien oder Fotos hoch.</li><li>Keine Konten, Werbung, Analyse, Absturzberichte oder Tracking.</li><li>Gelöschte Dateien und Fotos landen im System-Papierkorb (unter iOS „Zuletzt gelöscht“) und lassen sich wiederherstellen.</li><li>Einstellungen, Fortschrittsdaten (Roll Flick) und Caches der Fotoanalyse (Roll Tidy: Hash, Schärfe, Helligkeit) bleiben im App-Speicher auf dem Gerät.</li><li>Zahlungen werden vom jeweiligen App Store abgewickelt. EarnToLink erhält nie Zahlungsdaten.</li></ul>` },
      { id: 'projects', h: '5. Kundenprojekte', html: `<p>Betrifft ein Kundenprojekt personenbezogene Daten des Kunden, richten sich Umfang und Art der Verarbeitung nach dem Vertrag und der Auftragsverarbeitungsvereinbarung mit diesem Kunden.</p>` },
      { id: 'third', h: '6. Weitergabe an Dritte', html: `<p>Wir geben personenbezogene Daten nicht an Dritte weiter, außer wenn das Gesetz es verlangt.</p>` },
      { id: 'rights', h: '7. Ihre Rechte', html: `<p>Sie können jederzeit Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen. Senden Sie Anfragen an ${mail}; wir bearbeiten sie unverzüglich.</p>` },
      { id: 'destroy', h: '8. Löschung', html: `<p>Personenbezogene Daten werden unverzüglich vernichtet, sobald die Aufbewahrungsfrist endet oder der Zweck erreicht ist. Elektronische Dateien werden so gelöscht, dass sie nicht wiederhergestellt werden können.</p>` },
      { id: 'security', h: '9. Sicherheit', html: `<p>Der Zugriff auf E-Mail-Anfragen ist auf den Inhaber beschränkt, und wir erheben nicht mehr personenbezogene Daten als nötig.</p>` },
      { id: 'officer', h: '10. Datenschutzbeauftragter', html: `<table><tr><th>Name</th><td>Juhwan Ma (Inhaber)</td></tr><tr><th>E-Mail</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Rechtsbehelfe (Korea)', html: `<ul><li>Meldestelle für Verletzungen personenbezogener Daten: privacy.kisa.or.kr, 118 (in Korea)</li><li>Schlichtungsausschuss für Streitigkeiten über personenbezogene Daten: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Änderungen', html: `<p>Diese Erklärung gilt ab dem 10. Oktober 2026. Änderungen werden mit ihrem Inkrafttreten auf dieser Seite veröffentlicht.</p>` },
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    desc: 'Nutzungsbedingungen für die Website von EarnToLink. Gültig ab 10. Oktober 2026.',
    eyebrow: 'Richtlinie', lead: 'Gültig ab 10. Oktober 2026',
    sections: [
      { id: 'purpose', h: '1. Zweck', html: '<p>Diese Bedingungen regeln die Nutzung von earntolink.com, der von EarnToLink betriebenen Website.</p>' },
      { id: 'content', h: '2. Rechte an Inhalten', html: '<p>Die Rechte an Texten, Bildern und Code dieser Website liegen bei EarnToLink. Hier gezeigte Marken Dritter gehören ihren jeweiligen Inhabern.</p>' },
      { id: 'accuracy', h: '3. Produkt- und Leistungsinformationen', html: "<p>Produktstatus, Funktionen und Leistungsbeschreibungen sind zum Zeitpunkt der Erstellung zutreffend. Funktionen, Preise und Termine noch nicht veröffentlichter Produkte können sich ändern.</p>" },
      { id: 'projects', h: '4. Projektverträge', html: "<p>Analyse-, Beratungs-, Werbeeinrichtungs- und Betriebsberatungsleistungen folgen dem Vertrag des jeweiligen Projekts. Weichen diese Bedingungen und ein Vertrag voneinander ab, gilt der Vertrag. Werbeeinnahmen hängen vom Werbemarkt und von den Richtlinien der Plattformen ab; Schätzungen in unseren Analysen oder Angeboten sind keine Zusicherung.</p>" },
      { id: 'apps', h: '5. Nutzung der Apps', html: '<p>Für jede App gelten zusätzlich die Bedingungen des Stores, über den sie vertrieben wird (App Store, Google Play, Microsoft Store und andere), sowie ihre eigenen Hinweise.</p>' },
      { id: 'links', h: '6. Externe Links', html: '<p>Für externe Websites gelten deren eigene Bedingungen und Richtlinien.</p>' },
      { id: 'liability', h: '7. Haftungsbeschränkung', html: '<p>Soweit gesetzlich zulässig, haftet EarnToLink nicht für mittelbare Schäden, die aus der Nutzung dieser Website entstehen.</p>' },
      { id: 'law', h: '8. Anwendbares Recht', html: '<p>Für diese Bedingungen gilt das Recht der Republik Korea.</p>' },
      { id: 'contact', h: '9. Kontakt', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Werbeeinnahmen mit System.",
    "s": "Erlösanalyse · Web- und App-Monetarisierung<br>Retail Media · Richtlinientreue · Betrieb",
    "tags": [
      "Websites und Medien",
      "Mobile Apps",
      "Commerce"
    ]
  },
};
