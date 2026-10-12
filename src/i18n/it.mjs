// Italiano. Stessa struttura di en.mjs. Apostrofi tipografici (’), nessun trattino lungo.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 lingue (inglese, coreano, giapponese, cinese semplificato e tradizionale, tedesco, francese, spagnolo, portoghese, italiano)';
const ONDEVICE = 'Sul dispositivo · nessuna connessione di rete';
const ONE_TIME = 'Acquisto una tantum · fino a ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Ricavi pubblicitari, con metodo.",
  translationNote: 'Questa pagina è una traduzione. In caso di differenze con l’originale coreano, prevale l’originale coreano.',

  ui: {
    skip: 'Vai al contenuto', menu: 'Menu', language: 'Lingua', mainNav: 'Principale', breadcrumb: 'Percorso di navigazione', toc: 'Indice', homeAria: 'Home di EarnToLink',
    nav: { services: "Servizi", products: 'Prodotti', about: 'Chi siamo', principles: 'Come lavoriamo', news: 'Novità', contact: 'Contatti' },
    home: 'Home', privacy: 'Informativa sulla privacy', terms: 'Termini di utilizzo', rss: 'RSS',
    footer: { services: "Servizi", products: 'Prodotti', company: 'Azienda', policy: 'Informative' },
    biz: { name: 'Denominazione', rep: 'Rappresentante', no: 'N. di registrazione dell’impresa', tax: 'Regime fiscale', kinds: 'Attività', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Tutti i diritti riservati.',
    view: 'Dettagli', all: 'Tutti i prodotti', allServices: "Tutti i servizi", email: 'E-mail', mailBtn: 'Scriveteci', projectBtn: "Richiedi una consulenza",
    platform: 'Piattaforma', status: 'Stato', features: 'Funzionalità', specs: 'Specifiche', related: 'Altri prodotti', privacyNote: 'Privacy',
    productIllustration: 'Illustrazione del prodotto: ',
    heroLabel: 'Illustrazione di una dashboard con i ricavi pubblicitari di siti web, app ed e-commerce',
    newsFeedTitle: 'Novità di EarnToLink', newsFeedDesc: 'Novità di EarnToLink (언투링크)',
    notFound: { title: 'Pagina non trovata', text: 'L’indirizzo è cambiato o la pagina non esiste.', home: 'Torna alla home' },
  },

  status: { soon: 'In arrivo', dev: 'In sviluppo', live: 'Disponibile' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Contribuente generale (Corea)',
    form: 'Forma giuridica', formValue: 'Ditta individuale (Corea)', kindsLabel: 'Attività registrate', site: 'Sito web',
    kinds: ['Sviluppo e fornitura di software applicativo (principale)', 'Vendita al dettaglio online', 'Intermediazione nella vendita al dettaglio online'],
  },

  categories: {
    mobile: { name: 'App mobile', plat: 'Android · iOS' },
    desktop: { name: 'App desktop', plat: 'macOS · Windows' },
  },

  home: {
    "title": "EarnToLink | Consulenza sui ricavi pubblicitari per siti web, app e piattaforme di commerce",
    "desc": "EarnToLink è una società di consulenza sui ricavi pubblicitari. Analizziamo e progettiamo il modo in cui siti web, app e piattaforme di commerce guadagnano con la pubblicità: scelta e configurazione delle piattaforme, conformità a policy e privacy, retail media e gestione operativa.",
    "eyebrow": "Consulenza sui ricavi pubblicitari per le aziende",
    "h1": "Ricavi pubblicitari,<br>con metodo.",
    "lead": "Aiutiamo siti web, app e piattaforme di commerce a ottenere ricavi pubblicitari stabili. Partiamo dalla vostra situazione attuale, scegliamo piattaforme e posizionamenti più adatti e vi affianchiamo nelle verifiche delle policy e nella gestione quotidiana.",
    "meta": [
      "Siti web ed editoria",
      "App mobile",
      "Commerce e retail media"
    ],
    "stats": [
      [
        "6",
        "Aree di consulenza"
      ],
      [
        "3",
        "Canali di ricavo: web, app, commerce"
      ],
      [
        "6",
        "Fasi in ogni incarico"
      ],
      [
        "14",
        "Lingue del sito"
      ]
    ],
    "services": {
      "eyebrow": "Servizi",
      "title": "Sei aree di consulenza",
      "text": "Dall’analisi alla configurazione delle piattaforme, dalle verifiche delle policy alla gestione operativa. Scegliete solo ciò che vi serve."
    },
    "why": {
      "eyebrow": "Perché EarnToLink",
      "title": "Ricavi e affidabilità, tutelati insieme",
      "text": "Sei principi che rispettiamo in ogni incarico."
    },
    "how": {
      "eyebrow": "Metodo di lavoro",
      "title": "Dal primo colloquio alla gestione continuativa",
      "text": "Sei fasi, ciascuna verificata sui numeri prima di passare alla successiva."
    },
    "co": {
      "eyebrow": "Azienda",
      "title": "EarnToLink",
      "text": "Ditta individuale. Consulenza sui ricavi pubblicitari e sviluppo software."
    },
    "news": {
      "eyebrow": "Novità",
      "title": "Ultime novità"
    }
  },

  services: {
    "title": "Servizi",
    "desc": "I servizi di EarnToLink: analisi e strategia dei ricavi pubblicitari, monetizzazione di siti ed editoria digitale, monetizzazione delle app, retail media e sviluppo di piattaforme pubblicitarie, conformità a policy e privacy, gestione operativa e reportistica.",
    "eyebrow": "Servizi",
    "h1": "Servizi",
    "lead": "Sei aree. Scegliete solo quelle che vi servono.",
    "whoLabel": "Indicato quando",
    "scopeLabel": "Cosa facciamo",
    "deliverLabel": "Cosa riceverete",
    "otherLabel": "Altri servizi",
    "items": {
      "strategy": {
        "name": "Analisi e strategia dei ricavi pubblicitari",
        "short": "Esaminiamo traffico, posizionamenti, impostazioni delle piattaforme e metriche di ricavo, e definiamo la direzione del vostro modello di ricavo.",
        "lead": "Prima di tutto capiamo da dove arrivano i vostri ricavi pubblicitari e dove si perdono. Fissiamo i numeri su un’unica base di riferimento, poi stabiliamo priorità e piano d’azione.",
        "who": [
          "Pubblicate annunci ma guadagnate meno del previsto",
          "Dovete decidere se cambiare piattaforma pubblicitaria o affiancarne altre",
          "I ricavi pubblicitari devono entrare nel vostro piano aziendale"
        ],
        "scope": [
          [
            "Analisi dello stato attuale",
            "Composizione del traffico, posizionamenti, impostazioni delle piattaforme e flusso dei ricavi."
          ],
          [
            "Metriche chiave",
            "Valori di partenza per RPM di pagina, impression rate, fill rate e viewability."
          ],
          [
            "Modello di ricavo",
            "La giusta combinazione di pubblicità, affiliazioni, abbonamenti e vendita diretta di spazi."
          ],
          [
            "Piano d’azione",
            "Priorità, tempi e impatto atteso di ogni miglioramento."
          ]
        ],
        "deliver": [
          "Rapporto di analisi",
          "Tabella dei valori di partenza",
          "Raccomandazioni sul modello di ricavo",
          "Piano d’azione per fasi"
        ]
      },
      "web": {
        "name": "Monetizzazione di siti web ed editoria digitale",
        "short": "Idoneità all’approvazione, progettazione dei posizionamenti e equilibrio tra velocità delle pagine e ricavi per blog, testate e siti informativi.",
        "lead": "Più che aggiungere annunci, cerchiamo gli spazi che non disturbano la lettura. Seguiamo tutto: dall’idoneità all’approvazione al disegno dei posizionamenti, fino alla configurazione programmatic.",
        "who": [
          "State preparando la richiesta di approvazione a una piattaforma pubblicitaria",
          "Gli annunci hanno rallentato le pagine o aumentato la frequenza di rimbalzo",
          "Volete gestire più reti pubblicitarie insieme"
        ],
        "scope": [
          [
            "Idoneità all’approvazione",
            "Verifica di struttura del sito, pagine obbligatorie e qualità dei contenuti, poi la richiesta."
          ],
          [
            "Progettazione dei posizionamenti",
            "Posizioni, formati e distanze degli annunci in linea con il flusso dei contenuti."
          ],
          [
            "Velocità delle pagine",
            "Lazy loading e prevenzione degli spostamenti di layout per pagine veloci."
          ],
          [
            "Configurazione programmatic",
            "Ad server, header bidding e regole sui prezzi minimi."
          ]
        ],
        "deliver": [
          "Checklist per l’approvazione",
          "Piano dei posizionamenti",
          "Impostazioni pubblicitarie e guida all’implementazione",
          "Rapporto prima e dopo"
        ]
      },
      "app": {
        "name": "Monetizzazione delle app",
        "short": "Formati pubblicitari, mediazione e frequenza nella vostra app mobile, costruiti attorno al modo in cui gli utenti la usano.",
        "lead": "Stabiliamo quando e dove mostrare banner, interstitial e annunci con premio, facendo crescere i ricavi senza perdere di vista la retention.",
        "who": [
          "Inserite la pubblicità in un’app per la prima volta",
          "Valutazioni o retention sono calate dopo l’arrivo degli annunci",
          "Volete combinare più reti pubblicitarie tramite mediazione"
        ],
        "scope": [
          [
            "Formati pubblicitari",
            "Posizione e momento di banner, interstitial, annunci con premio e nativi."
          ],
          [
            "Mediazione",
            "Priorità e impostazioni di bidding tra le reti pubblicitarie."
          ],
          [
            "Frequenza ed esperienza",
            "Frequency cap, prima sessione senza annunci e utenti paganti senza pubblicità."
          ],
          [
            "Pubblicità e acquisti in-app",
            "Prodotti per rimuovere gli annunci e convivenza tra annunci con premio e acquisti."
          ]
        ],
        "deliver": [
          "Mappa dei posizionamenti",
          "Piano di configurazione della mediazione",
          "Documento sulle regole di frequenza",
          "Confronto tra retention e ricavi"
        ]
      },
      "retail": {
        "name": "Retail media e sviluppo di piattaforme pubblicitarie",
        "short": "Affianchiamo marketplace e piattaforme nella creazione di prodotti pubblicitari e processi operativi, perché venditori e marchi possano investire al loro interno.",
        "lead": "Trasformiamo traffico e dati della vostra piattaforma in prodotti pubblicitari e definiamo con voi prezzi, vendita e reportistica sui risultati.",
        "who": [
          "Volete avviare un’attività pubblicitaria sul vostro marketplace o sulla vostra piattaforma",
          "Vendete e fatturate la pubblicità dei venditori a mano",
          "Gli inserzionisti chiedono report che dimostrino i risultati"
        ],
        "scope": [
          [
            "Prodotti pubblicitari",
            "Posizionamenti vendibili come top of search, prodotti sponsorizzati, banner ed e-mail."
          ],
          [
            "Prezzi e vendita",
            "Prodotti ad asta, a prezzo fisso e a tempo, con le relative regole di prezzo."
          ],
          [
            "Dati e misurazione",
            "Impression, clic e attribuzione degli acquisti, misurati nel rispetto della privacy."
          ],
          [
            "Modello operativo",
            "Onboarding degli inserzionisti, revisione degli annunci, fatturazione e report sulle performance."
          ]
        ],
        "deliver": [
          "Catalogo dei prodotti pubblicitari e listino",
          "Modello di conto economico dell’attività pubblicitaria",
          "Standard di misurazione e modelli di report",
          "Procedure operative"
        ]
      },
      "policy": {
        "name": "Conformità a policy pubblicitarie e privacy",
        "short": "Verifica delle policy, supporto in caso di rifiuto, gestione del consenso, ads.txt e informativa sulla privacy.",
        "lead": "Un account sicuro viene prima dei ricavi. Individuiamo per tempo i rischi legati alle policy e, se una richiesta viene respinta o un account limitato, ne cerchiamo la causa e rispondiamo.",
        "who": [
          "La vostra approvazione pubblicitaria è stata respinta o l’account è stato limitato",
          "Vi serve la gestione del consenso per i visitatori di altre aree geografiche",
          "L’informativa sulla privacy va aggiornata prima dell’attivazione degli annunci"
        ],
        "scope": [
          [
            "Verifica delle policy",
            "Rischi legati a contenuti, posizionamento degli annunci e fonti di traffico."
          ],
          [
            "Rifiuti e limitazioni",
            "Analisi delle cause, correzioni e richiesta di riesame."
          ],
          [
            "Gestione del consenso",
            "Avvisi di consenso per area geografica, collegati alle impostazioni pubblicitarie."
          ],
          [
            "File e documenti obbligatori",
            "ads.txt, app-ads.txt, informativa sulla privacy e cookie policy."
          ]
        ],
        "deliver": [
          "Checklist delle policy",
          "Registro delle risposte",
          "Configurazione della gestione del consenso",
          "File e documenti obbligatori"
        ]
      },
      "ops": {
        "name": "Gestione operativa e consulenza sulla reportistica",
        "short": "Ogni mese leggiamo le metriche di ricavo, eseguiamo test e correggiamo ciò che serve, compresi traffico non valido e scostamenti nei pagamenti.",
        "lead": "I ricavi pubblicitari non si impostano una volta per tutte. Ogni mese analizziamo le metriche e manteniamo soltanto le modifiche confermate dai test.",
        "who": [
          "I vostri ricavi pubblicitari oscillano molto da un mese all’altro",
          "Unite a mano i report di più piattaforme",
          "Nel vostro team nessuno si occupa della gestione operativa della pubblicità"
        ],
        "scope": [
          [
            "Analisi mensile",
            "Variazioni di ricavi, impression, prezzi e fill rate, con le loro cause."
          ],
          [
            "Test",
            "Test comparativi su posizionamenti, formati pubblicitari e regole di prezzo."
          ],
          [
            "Reportistica unificata",
            "I ricavi di tutte le piattaforme in un unico report."
          ],
          [
            "Controlli di qualità",
            "Traffico non valido, qualità degli annunci e scostamenti nei pagamenti."
          ]
        ],
        "deliver": [
          "Report operativo mensile",
          "Registro dei test",
          "Report unificato",
          "Backlog dei miglioramenti"
        ]
      }
    }
  },

  why: [
    [
      "Ricavi in equilibrio con l’esperienza utente",
      "Invece di aggiungere annunci, cerchiamo posizionamenti che mantengano le pagine veloci e il percorso dell’utente fluido."
    ],
    [
      "Misurato, non stimato",
      "Registriamo i valori di partenza prima di iniziare e confrontiamo ogni modifica sulla stessa base."
    ],
    [
      "Consulenza indipendente",
      "Non percepiamo commissioni dalle piattaforme pubblicitarie, quindi confrontiamo le alternative ad armi pari."
    ],
    [
      "Prima la conformità alle policy",
      "Facciamo crescere i ricavi solo nel rispetto delle policy pubblicitarie e delle norme sulla privacy. Niente clickbait, niente traffico non valido."
    ],
    [
      "I vostri account, i vostri dati",
      "Account pubblicitari, dati di pagamento e report sono creati e conservati a vostro nome."
    ],
    [
      "Aggiornamenti settimanali",
      "Ogni settimana vi comunichiamo che cosa è cambiato, come si sono mossi i numeri e quali sono i passi successivi."
    ]
  ],

  steps: [
    [
      "Primo colloquio",
      "Il vostro servizio, il volume di traffico e gli obiettivi."
    ],
    [
      "Analisi",
      "Posizionamenti, impostazioni e metriche di ricavo verificati, valori di partenza registrati."
    ],
    [
      "Progettazione",
      "Piattaforme pubblicitarie, posizionamenti e piano di conformità."
    ],
    [
      "Configurazione e test",
      "Modifiche applicate e confrontate prima e dopo."
    ],
    [
      "Approvazione e avvio",
      "Verifica delle policy, gestione del consenso e file obbligatori."
    ],
    [
      "Gestione operativa",
      "Analisi mensili, test e report."
    ]
  ],

  cta: {
    "title": "Parliamo dei vostri ricavi pubblicitari",
    "text": "Scriveteci indicando il vostro sito o la vostra app, il traffico mensile e il problema che state affrontando."
  },

  products: {
    title: 'Prodotti',
    desc: 'Prodotti interni di EarnToLink: due app mobile (Roll Tidy, Roll Flick) e tre app desktop (Space Map, Dupeless, Archive Fix). Tutte in arrivo.',
    eyebrow: 'Prodotti interni', h1: 'Prodotti', lead: 'Due app mobile e tre app desktop. Tutte in arrivo.', tabsLabel: 'Categorie',
    groups: { mobile: 'Android · iOS. Pulizia delle foto.', desktop: 'macOS · Windows. Disco, file, archivi.' },
    prin: { eyebrow: 'Principi dei prodotti', title: 'Semplici e onesti', text: 'Comuni a tutte e cinque le nostre app.' },
    principles: [
      ['Sul dispositivo', 'File e foto vengono analizzati solo sul dispositivo. Nulla viene inviato a un server.'],
      ['Niente pubblicità né tracciamento', 'Nessuna pubblicità, analisi, segnalazione di arresti anomali o account.'],
      ['Acquisto una tantum', 'Nessun abbonamento. Fino a ₩10,000 per app.'],
      ['Eliminazione ripristinabile', 'File e foto eliminati vanno nel cestino e possono essere ripristinati.'],
    ],
    featTitle: 'Funzionalità di {name}',
    privacy: {
      mobile: 'Le foto vengono analizzate solo sul dispositivo e non vengono mai inviate altrove.',
      desktop: 'I file vengono elaborati solo sul dispositivo e non vengono mai inviati altrove.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Foto simili, foto sfocate, screenshot e video pesanti',
        lead: 'Analizza la libreria di foto sul dispositivo e raccoglie per categoria ciò che si può eliminare.',
        features: [
          ['Gruppi di foto simili', 'Raggruppa gli scatti fatti a meno di 90 secondi di distanza e simili tra loro, usando un hash di differenza a 64 bit.'],
          ['Scatto migliore', 'Suggerisce di tenere la foto più nitida di ogni gruppo. I preferiti non sono mai candidati all’eliminazione.'],
          ['Foto sfocate', 'Trova le foto sfocate rispetto all’intera libreria. Le foto molto scure o molto chiare vengono ignorate.'],
          ['Screenshot', 'Raccoglie le foto dall’album degli screenshot.'],
          ['Video pesanti', 'Ordina i video per dimensione stimata, dal più grande.'],
          ['Eliminazione ripristinabile', 'Sposta gli elementi nel cestino di Android o in “Eliminati di recente” di iOS (30 giorni).'],
        ],
        specs: [['Piattaforme', 'Android · iOS'], ['Elaborazione', ONDEVICE], ['Eliminazione', 'Sposta nel cestino di sistema'], ['Lingue', APP_LANGS], ['Prezzo', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Scorri le foto una a una: tieni o elimina',
        lead: 'Divide le foto per mese di scatto, poi ti lascia decidere una foto alla volta.',
        features: [
          ['Per mese', 'Raggruppa le foto per mese di scatto, le più recenti per prime.'],
          ['Scorrimento', 'Scorri a sinistra per segnare da eliminare, a destra per tenere.'],
          ['Annulla', 'Annulla l’ultima decisione.'],
          ['Controllo prima di eliminare', 'A fine mese controlli le foto segnate, poi fai pulizia in un solo passaggio.'],
          ['Avanzamento', 'Foto ripulite, giorni consecutivi e mesi completati. Salvati solo sul dispositivo.'],
          ['Sul dispositivo', 'Le foto non vengono mai inviate a un server.'],
        ],
        specs: [['Piattaforme', 'Android · iOS'], ['Elaborazione', ONDEVICE], ['Eliminazione', 'Sposta nel cestino di sistema'], ['Lingue', APP_LANGS], ['Prezzo', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Una treemap delle cartelle e dei file che occupano il tuo disco',
        lead: 'Analizza una cartella e mostra la dimensione come area, così si possono ripulire per primi gli elementi più grandi.',
        features: [
          ['Treemap', 'Treemap a quadrati, colorata per tipo di file: video, immagini, audio, documenti, archivi, programmi, altro.'],
          ['Tre viste', 'Mappa, file più grandi e dimensione per tipo.'],
          ['Cartelle rapide', 'Home, Download, Scrivania, Documenti, Immagini, Video, unità C (Windows).'],
          ['Navigazione', 'Entra nelle sottocartelle e torna alla cartella superiore.'],
          ['Finder · Esplora file', 'Mostra l’elemento selezionato nel Finder o in Esplora file.'],
          ['Sposta nel cestino', 'Gli elementi eliminati si possono ripristinare dal cestino. Le cartelle senza autorizzazione vengono saltate e conteggiate.'],
        ],
        specs: [['Piattaforme', 'macOS · Windows'], ['Elaborazione', ONDEVICE], ['Eliminazione', 'Sposta nel cestino'], ['Lingue', APP_LANGS], ['Prezzo', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Trova i file con contenuto identico e ripuliscili',
        lead: 'Confronta il contenuto, non i nomi: prima la dimensione, poi i primi e gli ultimi 64 KB, poi SHA-256.',
        features: [
          ['Confronto in tre fasi', 'Elenco dei file, confronto rapido (primi e ultimi 64 KB), confronto completo (SHA-256).'],
          ['Più cartelle', 'Più cartelle di ricerca, dimensione minima del file, file nascosti ignorati.'],
          ['Selezione automatica', 'Tieni il più vecchio, il più recente o il percorso più breve.'],
          ['Ne resta sempre uno', 'In ogni gruppo deve restare almeno un file.'],
          ['Sposta nel cestino', 'Solo i file selezionati vanno nel cestino. Ripristinabili.'],
          ['Finder · Esplora file', 'Apri direttamente la posizione del file.'],
        ],
        specs: [['Piattaforme', 'macOS · Windows'], ['Elaborazione', ONDEVICE], ['Confronto', 'Dimensione → primi/ultimi 64 KB → SHA-256'], ['Lingue', APP_LANGS], ['Prezzo', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Estrai e crea archivi senza nomi di file coreani corrotti',
        lead: 'Rileva i nomi di file CP949 negli ZIP creati su Windows coreano e li ripristina. Basato su 7-Zip.',
        features: [
          ['Riparazione dei nomi coreani', 'Controlla le voci ZIP senza il flag UTF-8 e converte automaticamente i nomi CP949 (Windows coreano).'],
          ['16 formati', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Creazione di archivi', 'ZIP o 7Z, con compressione veloce, normale o massima.'],
          ['Password AES-256', 'AES-256 per ZIP; 7Z cifra anche i nomi dei file.'],
          ['Trascina e rilascia', 'Gli archivi vengono estratti, gli altri file vengono compressi.'],
          ['7-Zip 26.04 incluso', 'Nessuna installazione separata.'],
        ],
        specs: [['Piattaforme', 'macOS · Windows'], ['Elaborazione', ONDEVICE], ['Motore', '7-Zip 26.04 (LGPL)'], ['Lingue', APP_LANGS], ['Prezzo', ONE_TIME]],
      },
    },
  },

  about: {
    "title": "Chi siamo",
    "desc": "Chi è EarnToLink: una società di consulenza che aiuta siti web, app e piattaforme di commerce a guadagnare con la pubblicità. Missione, servizi, principi e dati aziendali.",
    "eyebrow": "Chi siamo",
    "h1": "EarnToLink",
    "lead": "EarnToLink è una società di consulenza sui ricavi pubblicitari che progetta il modo in cui le aziende guadagnano con la pubblicità.",
    "mission": {
      "eyebrow": "Missione",
      "title": "Una pubblicità che rafforza il business",
      "body": [
        "Molte aziende costruiscono contenuti e servizi di valore ma ricavano poco dalla pubblicità. I posizionamenti non sono adatti, le impostazioni sono datate oppure un problema di policy frena i ricavi.",
        "EarnToLink misura il punto di partenza, sceglie piattaforme e posizionamenti più adatti e accompagna la gestione quotidiana nel rispetto di policy e privacy. I risultati di ogni modifica vi vengono mostrati sulla stessa base di riferimento.",
        "Forti dell’esperienza maturata nella realizzazione e nella gestione di siti e app, seguiamo un principio: la monetizzazione non deve rovinare l’esperienza dell’utente."
      ]
    },
    "do": {
      "eyebrow": "Servizi",
      "title": "Di cosa ci occupiamo",
      "text": "Attività registrate: sviluppo e fornitura di software applicativo (principale), vendita al dettaglio online, intermediazione nella vendita al dettaglio online."
    },
    "why": {
      "eyebrow": "Principi",
      "title": "I nostri principi"
    },
    "info": {
      "eyebrow": "Azienda",
      "title": "Dati aziendali"
    }
  },

  principles: {
    "title": "Come lavoriamo",
    "desc": "Come lavora EarnToLink: ricavi in equilibrio con l’esperienza utente, risultati misurati, consulenza indipendente e conformità alle policy. Fasi e condizioni contrattuali.",
    "eyebrow": "Come lavoriamo",
    "h1": "Come lavoriamo",
    "lead": "Principi, fasi e condizioni contrattuali.",
    "why": {
      "eyebrow": "Principi",
      "title": "Sei principi",
      "text": "Validi per ogni incarico."
    },
    "steps": {
      "eyebrow": "Fasi",
      "title": "Le fasi",
      "text": "Dal primo colloquio alla gestione operativa."
    },
    "terms": {
      "eyebrow": "Contratti",
      "title": "Condizioni contrattuali",
      "rows": [
        [
          "Progetti",
          "Un contratto per ogni progetto definisce ambito, tempi, compenso e condizioni di pagamento"
        ],
        [
          "Variazioni dell’ambito",
          "Le modifiche e i relativi costi vengono concordati prima di proseguire"
        ],
        [
          "Titolarità",
          "Account pubblicitari, report e documenti di configurazione restano a vostro nome"
        ],
        [
          "Compensi",
          "Nessuna commissione dalle piattaforme pubblicitarie · il compenso di consulenza è indicato nel contratto"
        ]
      ]
    }
  },

  contact: {
    "title": "Contatti",
    "desc": "Contattate EarnToLink per consulenza sui ricavi pubblicitari, prodotti, privacy o partnership. hello@earntolink.com",
    "eyebrow": "Contatti",
    "h1": "Contatti",
    "lead": "Riceviamo le richieste via e-mail e rispondiamo in coreano o in inglese.",
    "topics": [
      [
        "chart",
        "Consulenza",
        "Analisi dei ricavi pubblicitari, monetizzazione di siti e app, retail media, questioni di policy, consulenza operativa"
      ],
      [
        "package",
        "Prodotti",
        "Funzionalità, date di uscita e problemi delle nostre app"
      ],
      [
        "receipt",
        "Pagamenti",
        "I pagamenti e i rimborsi delle app seguono le regole di ciascuno store"
      ],
      [
        "shield",
        "Privacy",
        "Richieste di accesso, rettifica, cancellazione o limitazione del trattamento dei dati personali"
      ],
      [
        "users",
        "Partnership",
        "Collaborazioni e altre proposte"
      ]
    ],
    "brief": {
      "title": "Informazioni utili da indicare",
      "items": [
        "Che cosa gestite (sito web, app o piattaforma di commerce) e relativo indirizzo",
        "Visitatori mensili o utenti attivi",
        "Le piattaforme pubblicitarie in uso e i problemi riscontrati",
        "I tempi desiderati"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink si concentra sulla consulenza sui ricavi pubblicitari",
      "summary": "Analisi e strategia, monetizzazione di siti e app, retail media, conformità alle policy e consulenza operativa.",
      "body": [
        "EarnToLink ha concentrato la propria offerta sulla consulenza sui ricavi pubblicitari.",
        "Oggi proponiamo sei servizi: analisi e strategia dei ricavi pubblicitari, monetizzazione di siti web ed editoria digitale, monetizzazione delle app, retail media e sviluppo di piattaforme pubblicitarie, conformità a policy pubblicitarie e privacy, gestione operativa e consulenza sulla reportistica.",
        "Per richiedere una consulenza scrivete a hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com è online",
      "summary": "Il sito di EarnToLink è online in 14 lingue.",
      "body": [
        "Il sito di EarnToLink, earntolink.com, è ora online.",
        "Presenta i nostri servizi, i prodotti interni, i dati dell’azienda, l’informativa sulla privacy e i contatti.",
        "È disponibile in coreano, inglese, giapponese, cinese (semplificato e tradizionale), spagnolo, francese, tedesco, portoghese, italiano, vietnamita, indonesiano, thailandese e russo."
      ]
    },
    "product-lineup": {
      "title": "I nostri prodotti interni",
      "summary": "Due app mobile e tre app desktop.",
      "body": [
        "Lo stato attuale dei nostri prodotti interni.",
        "Le app mobile Roll Tidy e Roll Flick e le app desktop Space Map, Dupeless e Archive Fix sono in arrivo."
      ]
    }
  },
  newsPage: {
    "title": "Novità",
    "desc": "Novità di EarnToLink: aggiornamento dei servizi, lancio del sito e stato dei prodotti."
  },

  privacy: {
    title: 'Informativa sulla privacy',
    desc: 'Informativa sulla privacy di EarnToLink per il sito web, le richieste via e-mail e le nostre app. In vigore dal 10 ottobre 2026.',
    eyebrow: 'Informativa', lead: 'In vigore dal 10 ottobre 2026',
    sections: [
      { id: 'general', h: '1. Disposizioni generali', html: `<p>EarnToLink (언투링크, “EarnToLink”) tutela i dati personali ai sensi della legge coreana sulla protezione delle informazioni personali (Personal Information Protection Act). Questa informativa riguarda il sito earntolink.com e le app realizzate da EarnToLink.</p><p>In sintesi: il sito non usa registrazione, moduli, cookie, strumenti di analisi né pubblicità. Le nostre app elaborano file e foto solo sul dispositivo e non li inviano mai altrove.</p>` },
      { id: 'site', h: '2. Sito web', html: `<ul><li>Nessuna registrazione, accesso o modulo.</li><li>Nessun cookie, strumento di analisi o script pubblicitario.</li><li>Il sito è servito da GitHub Pages (GitHub, Inc.). GitHub può elaborare log di accesso, come gli indirizzi IP, per il funzionamento e la sicurezza, secondo la <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>Il font Pretendard viene caricato dalla CDN jsDelivr, che può ricevere informazioni sulla richiesta, come l’indirizzo IP del tuo browser.</li><li>Se in futuro verranno introdotti cookie o strumenti di analisi, questa informativa sarà aggiornata prima.</li></ul>` },
      { id: 'email', h: '3. Richieste via e-mail', html: `<table><tr><th>Dati</th><th>Finalità</th><th>Conservazione</th></tr><tr><td>Indirizzo e-mail, nome visualizzato, contenuto del messaggio e allegati</td><td>Lettura e risposta alle richieste, consulenza sui progetti, gestione delle richieste</td><td>Eliminati senza ritardo una volta gestita la richiesta. Se segue un contratto, conservati per la durata del contratto e per l’eventuale periodo richiesto dalla legge</td></tr></table><p>Le e-mail di richiesta vengono ricevute e conservate in Gmail, fornito da Google LLC.</p>` },
      { id: 'apps', h: '4. Le nostre app', html: `<p>App interessate: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Tutte sono in arrivo.</p><div class="table-scroll"><table><tr><th>App</th><th>Dati elaborati</th><th>Dove</th><th>Invio all’esterno</th></tr><tr><td>Roll Tidy</td><td>Foto e video delle librerie a cui concedi l’accesso</td><td>Sul dispositivo</td><td>Nessuno</td></tr><tr><td>Roll Flick</td><td>Foto delle librerie a cui concedi l’accesso</td><td>Sul dispositivo</td><td>Nessuno</td></tr><tr><td>Space Map</td><td>Nomi, dimensioni e tipi dei file nelle cartelle che scegli</td><td>Sul dispositivo</td><td>Nessuno</td></tr><tr><td>Dupeless</td><td>Dimensioni dei file e hash del contenuto nelle cartelle che scegli</td><td>Sul dispositivo</td><td>Nessuno</td></tr><tr><td>Archive Fix</td><td>Archivi e file che scegli</td><td>Sul dispositivo</td><td>Nessuno</td></tr></table></div><ul><li>Le app non si connettono alla rete e non caricano mai file o foto.</li><li>Nessun account, pubblicità, analisi, segnalazione di arresti anomali o tracciamento.</li><li>File e foto eliminati vanno nel cestino di sistema (“Eliminati di recente” su iOS) e possono essere ripristinati.</li><li>Impostazioni, registri di avanzamento (Roll Flick) e cache di analisi delle foto (Roll Tidy: hash, nitidezza, luminosità) restano nello spazio di archiviazione dell’app sul dispositivo.</li><li>I pagamenti sono gestiti da ciascun app store. EarnToLink non riceve mai i dati di pagamento.</li></ul>` },
      { id: 'projects', h: '5. Progetti per i clienti', html: `<p>Quando un progetto per un cliente riguarda i dati personali del cliente, l’ambito e le modalità di trattamento seguono il contratto e l’accordo sul trattamento dei dati stipulati con quel cliente.</p>` },
      { id: 'third', h: '6. Comunicazione a terzi', html: `<p>Non forniamo dati personali a terzi, salvo nei casi in cui la legge lo richieda.</p>` },
      { id: 'rights', h: '7. I tuoi diritti', html: `<p>Puoi richiedere in qualsiasi momento l’accesso, la rettifica, la cancellazione o la sospensione del trattamento. Invia le richieste a ${mail}; vi daremo seguito senza ritardo.</p>` },
      { id: 'destroy', h: '8. Cancellazione', html: `<p>I dati personali vengono distrutti senza ritardo quando termina il periodo di conservazione o la finalità è stata raggiunta. I file elettronici vengono cancellati in modo non recuperabile.</p>` },
      { id: 'security', h: '9. Sicurezza', html: `<p>L’accesso alla posta delle richieste è limitato al rappresentante e non raccogliamo più dati personali di quelli necessari.</p>` },
      { id: 'officer', h: '10. Responsabile della protezione dei dati personali', html: `<table><tr><th>Nome</th><td>Juhwan Ma (rappresentante)</td></tr><tr><th>E-mail</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Mezzi di tutela (Corea)', html: `<ul><li>Centro per la segnalazione delle violazioni dei dati personali: privacy.kisa.or.kr, 118 (in Corea)</li><li>Comitato di mediazione delle controversie sui dati personali: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Modifiche', html: `<p>Questa informativa è in vigore dal 10 ottobre 2026. Le modifiche saranno pubblicate su questa pagina con la relativa data di entrata in vigore.</p>` },
    ],
  },

  terms: {
    title: 'Termini di utilizzo',
    desc: 'Termini di utilizzo del sito web di EarnToLink. In vigore dal 10 ottobre 2026.',
    eyebrow: 'Informativa', lead: 'In vigore dal 10 ottobre 2026',
    sections: [
      { id: 'purpose', h: '1. Finalità', html: '<p>Questi termini stabiliscono le condizioni di utilizzo di earntolink.com, il sito web gestito da EarnToLink.</p>' },
      { id: 'content', h: '2. Diritti sui contenuti', html: '<p>I diritti su testi, immagini e codice di questo sito appartengono a EarnToLink. I marchi di terzi qui mostrati appartengono ai rispettivi titolari.</p>' },
      { id: 'accuracy', h: '3. Informazioni su prodotti e servizi', html: "<p>Stato dei prodotti, funzionalità e descrizioni dei servizi sono accurati al momento della redazione. Funzionalità, prezzi e tempi dei prodotti non ancora rilasciati possono cambiare.</p>" },
      { id: 'projects', h: '4. Contratti di progetto', html: "<p>I servizi di analisi, consulenza, configurazione pubblicitaria e consulenza operativa sono regolati dal contratto di ciascun progetto. In caso di difformità tra questi termini e un contratto, prevale il contratto. I ricavi pubblicitari dipendono dal mercato e dalle policy delle piattaforme; le stime contenute in analisi o proposte non costituiscono una garanzia.</p>" },
      { id: 'apps', h: '5. Uso delle app', html: '<p>Ogni app è soggetta anche ai termini dello store attraverso cui è distribuita (App Store, Google Play, Microsoft Store e altri) e alle proprie avvertenze.</p>' },
      { id: 'links', h: '6. Link esterni', html: '<p>I siti esterni sono regolati dai propri termini e dalle proprie informative.</p>' },
      { id: 'liability', h: '7. Limitazione di responsabilità', html: '<p>Nei limiti consentiti dalla legge, EarnToLink non risponde dei danni indiretti derivanti dall’uso di questo sito.</p>' },
      { id: 'law', h: '8. Legge applicabile', html: '<p>Questi termini sono regolati dalle leggi della Repubblica di Corea.</p>' },
      { id: 'contact', h: '9. Contatti', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Ricavi pubblicitari, con metodo.",
    "s": "Analisi dei ricavi · Monetizzazione di siti e app<br>Retail media · Conformità alle policy · Gestione operativa",
    "tags": [
      "Siti web ed editoria",
      "App mobile",
      "Commerce"
    ]
  },
};
