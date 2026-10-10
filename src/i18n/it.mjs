// Italiano. Stessa struttura di en.mjs. Apostrofi tipografici (’), nessun trattino lungo.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 lingue (inglese, coreano, giapponese, cinese semplificato e tradizionale, tedesco, francese, spagnolo, portoghese, italiano)';
const ONDEVICE = 'Sul dispositivo · nessuna connessione di rete';
const ONE_TIME = 'Acquisto una tantum · fino a ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Colleghiamo i mercati e il mondo.',
  translationNote: 'Questa pagina è una traduzione. In caso di differenze con l’originale coreano, prevale l’originale coreano.',

  ui: {
    skip: 'Vai al contenuto', menu: 'Menu', language: 'Lingua', mainNav: 'Principale', breadcrumb: 'Percorso di navigazione', toc: 'Indice', homeAria: 'Home di EarnToLink',
    nav: { services: 'Servizi', products: 'Prodotti', about: 'Chi siamo', principles: 'Come lavoriamo', news: 'Novità', contact: 'Contatti' },
    home: 'Home', privacy: 'Informativa sulla privacy', terms: 'Termini di utilizzo', rss: 'RSS',
    footer: { services: 'Servizi', products: 'Prodotti', company: 'Azienda', policy: 'Informative' },
    biz: { name: 'Denominazione', rep: 'Rappresentante', no: 'N. di registrazione dell’impresa', tax: 'Regime fiscale', kinds: 'Attività', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Tutti i diritti riservati.',
    view: 'Dettagli', all: 'Tutti i prodotti', allServices: 'Tutti i servizi', email: 'E-mail', mailBtn: 'Scrivici', projectBtn: 'Avvia un progetto',
    platform: 'Piattaforma', status: 'Stato', features: 'Funzionalità', specs: 'Specifiche', related: 'Altri prodotti', privacyNote: 'Privacy',
    productIllustration: 'Illustrazione del prodotto: ',
    heroLabel: 'Illustrazione di EarnToLink collegata a mercati in 14 lingue',
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
    title: 'EarnToLink (언투링크) | Colleghiamo i mercati e il mondo',
    desc: 'EarnToLink collega i mercati e il mondo: sviluppo di prodotti web, mobile e desktop, trasformazione con l’AI e automazione, localizzazione in 14 lingue, lancio sugli app store globali, integrazione e gestione dell’e-commerce.',
    eyebrow: 'Software · Trasformazione con l’AI · Espansione globale',
    h1: 'Colleghiamo i mercati<br>e il mondo.',
    lead: 'Dalla progettazione e dallo sviluppo all’automazione con l’AI, alla localizzazione e al lancio sugli app store globali, un unico team accompagna il tuo prodotto fino in fondo.',
    meta: ['Web · Mobile · Desktop', 'AI · Automazione', '14 lingue'],
    stats: [['14', 'Lingue del sito'], ['6', 'Aree di servizio'], ['5', 'Prodotti interni'], ['4', 'App store su cui pubblichiamo']],
    services: { eyebrow: 'Servizi', title: 'Sei aree di servizio', text: 'Costruiamo, automatizziamo, portiamo nel mondo e facciamo crescere.' },
    why: { eyebrow: 'Perché EarnToLink', title: 'Pensato per i mercati globali fin dal primo giorno', text: 'Sei impegni che manteniamo su ogni progetto.' },
    how: { eyebrow: 'Processo', title: 'Dal primo contatto alla gestione', text: 'Sei fasi, ciascuna confermata prima della successiva.' },
    apps: { eyebrow: 'Prodotti interni', title: 'I prodotti che realizziamo noi', text: 'Le nostre app, realizzate con lo stesso standard dei lavori per i clienti. Tutte in arrivo.' },
    co: { eyebrow: 'Azienda', title: 'EarnToLink', text: 'Ditta individuale in Corea. Sviluppo e fornitura di software applicativo.' },
    news: { eyebrow: 'Novità', title: 'Ultime novità' },
  },

  services: {
    title: 'Servizi',
    desc: 'Servizi di EarnToLink: sviluppo di prodotti, trasformazione con l’AI e automazione, localizzazione, lancio sugli app store globali, e-commerce e vendite transfrontaliere, gestione e crescita.',
    eyebrow: 'Servizi', h1: 'Servizi', lead: 'Sei aree. Scegli solo quelle che ti servono.',
    whoLabel: 'Ideale se', scopeLabel: 'Cosa facciamo', deliverLabel: 'Consegne', otherLabel: 'Altri servizi',
    items: {
      product: {
        name: 'Sviluppo di prodotti', short: 'Servizi web, app mobile, app desktop e sistemi interni, dalla progettazione al lancio.',
        lead: 'Trasformiamo le idee in prodotti che le persone usano davvero. Progettazione, disegno delle schermate, design visivo, sviluppo e test procedono come un unico flusso.',
        who: ['Stai creando un nuovo servizio da zero', 'Vuoi partire in piccolo per testare il mercato', 'Vuoi portare il lavoro fuori da fogli di calcolo e chat e dentro un vero sistema'],
        scope: [
          ['Servizi web', 'Siti di servizio, account e pagamenti, pannelli di amministrazione.'],
          ['App mobile', 'App Android e iOS, realizzate da un’unica base di codice.'],
          ['App desktop', 'App per Windows e macOS, compresi strumenti per file e dischi.'],
          ['Sistemi interni', 'Strumenti per gestione del lavoro, liquidazioni, magazzino e clienti.'],
        ],
        deliver: ['Elenco delle funzionalità e disegno delle schermate', 'Codice sorgente e configurazione del rilascio', 'Test automatici', 'Guida operativa'],
      },
      ax: {
        name: 'Trasformazione con l’AI e automazione', short: 'Agenti AI e automazione per ridurre il lavoro ripetitivo e cambiare il modo di operare dei team.',
        lead: 'Individuiamo il lavoro che si ripete e lo affidiamo ad AI e automazione. Una piccola demo funzionante dimostra l’effetto prima dello sviluppo completo.',
        who: ['Il tuo team ripete le stesse risposte di assistenza, documenti o pulizie di dati', 'Vuoi cercare nei documenti e nei dati interni con l’AI', 'Le persone copiano le stesse informazioni tra più strumenti'],
        scope: [
          ['Agenti AI', 'Risposte di primo livello, riassunti, bozze e classificazione.'],
          ['Automazione di documenti e dati', 'Lettura di moduli, pulizia di tabelle, generazione di report.'],
          ['Ricerca nelle conoscenze interne', 'Risposte basate sui tuoi documenti (RAG).'],
          ['Integrazione di strumenti', 'Collegamenti automatici tra e-mail, chat, fogli di calcolo e sistemi interni.'],
        ],
        deliver: ['Analisi dei flussi di lavoro', 'Una demo funzionante', 'Automazione in produzione e guida per l’utente', 'Metriche per misurare l’effetto'],
      },
      localization: {
        name: 'Localizzazione ed espansione globale', short: 'Porta il tuo servizio in 14 o più lingue e fatti trovare in ogni paese.',
        lead: 'Non solo traduzione. Adattiamo paese per paese la struttura delle lingue, i formati di data, numero e valuta e la visibilità nei motori di ricerca.',
        who: ['Il tuo servizio esiste in una sola lingua e vuoi aprirlo all’estero', 'Hai tradotto, ma i motori di ricerca stranieri non ti trovano', 'Ti servono pagamenti e formati diversi da paese a paese'],
        scope: [
          ['Struttura multilingue', 'Estrazione delle stringhe, cambio lingua, URL per lingua.'],
          ['SEO multilingue', 'hreflang, sitemap per lingua, registrazione sui motori di ricerca.'],
          ['Formati locali', 'Date, numeri, valute e indirizzi.'],
          ['Controllo qualità delle traduzioni', 'Glossari e controlli automatici delle stringhe mancanti per lingua.'],
        ],
        deliver: ['Pagine e URL per lingua', 'Glossario', 'Strumento di controllo delle stringhe per lingua', 'Registrazione sui motori di ricerca'],
      },
      launch: {
        name: 'Lancio sugli app store globali', short: 'Lancio e gestione della revisione su App Store, Google Play, Microsoft Store e Mac App Store.',
        lead: 'Ci occupiamo della registrazione sugli store, delle risposte alla revisione e delle schede in ogni lingua, poi continuiamo a pubblicare aggiornamenti dopo il lancio.',
        who: ['Hai un’app ma la registrazione sugli store è bloccata', 'La tua app è stata rifiutata in revisione', 'Ti servono schede dello store per ogni paese'],
        scope: [
          ['Registrazione sugli store', 'Creazione dell’account sviluppatore, dettagli dell’app, classificazione per età, etichette sulla privacy.'],
          ['Gestione della revisione', 'Verifica delle policy, analisi dei rifiuti, correzione e nuovo invio.'],
          ['Localizzazione delle schede dello store', 'Descrizioni e screenshot per lingua.'],
          ['Configurazione dei pagamenti', 'Acquisti in-app, fasce di prezzo, prezzi per paese.'],
        ],
        deliver: ['La tua app online sugli store', 'Schede dello store per lingua', 'Cronologia delle revisioni', 'Procedura di rilascio degli aggiornamenti'],
      },
      commerce: {
        name: 'E-commerce e vendite transfrontaliere', short: 'Collega i tuoi prodotti ai clienti all’estero con canali di vendita e strumenti operativi.',
        lead: 'Costruiamo il negozio online, i dati prodotto multilingue e le integrazioni di pagamento, spedizione e contabilità necessarie per vendere all’estero.',
        who: ['Vendi nel tuo paese e vuoi vendere all’estero', 'Modifichi i dati prodotto separatamente per ogni canale', 'Riconcili a mano ordini, scorte e liquidazioni'],
        scope: [
          ['Canali di vendita', 'Il tuo negozio collegato ai marketplace esteri.'],
          ['Dati prodotto multilingue', 'Nomi, descrizioni, opzioni e tabelle taglie per lingua.'],
          ['Sincronizzazione ordini e scorte', 'Sincronizzazione automatica di ordini e inventario tra i canali.'],
          ['Liquidazioni e report', 'Totali automatici di vendite, commissioni e pagamenti.'],
        ],
        deliver: ['Canali di vendita e integrazioni', 'Dati prodotto multilingue', 'Sincronizzazione ordini e scorte', 'Report di liquidazione'],
      },
      operate: {
        name: 'Gestione e crescita', short: 'Dopo il lancio: correzione degli errori, miglioramento della velocità, nuove funzionalità, controllo dei costi.',
        lead: 'Il lancio è solo l’inizio. Monitoriamo le metriche, riduciamo gli errori, aggiungiamo ciò che serve agli utenti e teniamo sotto controllo i costi dell’infrastruttura.',
        who: ['Cerchi qualcuno che rilevi un servizio creato da un altro fornitore', 'Errori e schermate lente continuano a tornare', 'I costi dei server continuano a salire'],
        scope: [
          ['Gestione degli errori', 'Lettura dei log degli errori, ricerca delle cause, rilascio delle correzioni.'],
          ['Prestazioni', 'Schermate e query più veloci.'],
          ['Evoluzione delle funzionalità', 'Aggiunta e riduzione di funzionalità in base ai dati di utilizzo.'],
          ['Revisione dei costi', 'Verifica dell’uso del cloud e risparmi.'],
        ],
        deliver: ['Report mensile di gestione', 'Registro della gestione degli errori', 'Rilasci di miglioramento', 'Risultati della revisione dei costi'],
      },
    },
  },

  why: [
    ['Multilingue fin dall’inizio', 'La struttura multilingue entra già in fase di progettazione, quindi aggiungere una lingua in seguito non richiede mai di rifare tutto.'],
    ['Ambito concordato prima', 'Funzionalità, tempi e costi sono fissati per iscritto prima dell’inizio dei lavori. Ogni modifica viene concordata prima di essere realizzata.'],
    ['Codice e account sono tuoi', 'Codice sorgente, domini, account degli store e del cloud vengono creati a tuo nome e consegnati.'],
    ['I test fanno parte della consegna', 'Sono inclusi test automatici delle funzionalità principali e controlli delle stringhe mancanti per lingua.'],
    ['Avanzamento settimanale', 'Ogni settimana vedi schermate funzionanti e cosa resta da fare.'],
    ['Solo i dati necessari', 'I dati personali sono limitati a ciò che le funzionalità richiedono, elaborati sul dispositivo ovunque possibile.'],
  ],

  steps: [
    ['Consulenza', 'Obiettivi, mercati di destinazione e scadenze.'],
    ['Ambito e preventivo', 'Elenco delle funzionalità, tempi e costi per iscritto.'],
    ['Demo', 'Prima le schermate e i flussi principali funzionanti.'],
    ['Sviluppo e test', 'Aggiornamenti settimanali, test automatici.'],
    ['Localizzazione e lancio', 'Pagine per lingua, registrazione su store e motori di ricerca.'],
    ['Gestione e miglioramento', 'Metriche, gestione degli errori, crescita.'],
  ],

  cta: { title: 'Avvia un progetto', text: 'Scrivici cosa vuoi realizzare, i tuoi mercati di destinazione e i tuoi tempi.' },

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
    title: 'Chi siamo',
    desc: 'Chi è EarnToLink (언투링크): un’attività di software che collega i mercati e il mondo. Missione, servizi, principi e dati dell’azienda.',
    eyebrow: 'Chi siamo', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) è un’attività di software che collega i mercati e il mondo.',
    mission: {
      eyebrow: 'Missione', title: 'Colleghiamo i mercati e il mondo',
      body: [
        'Buoni prodotti e servizi restano spesso chiusi in un solo paese e in una sola lingua. EarnToLink realizza il software che colma questa distanza.',
        'Realizziamo prodotti, rendiamo più leggera la gestione con AI e automazione e li portiamo sui mercati globali attraverso molte lingue e app store. Dopo il lancio continuiamo a migliorarli in base ai dati.',
        'Realizziamo con lo stesso standard anche le nostre app. Lo stato è mostrato così com’è: i prodotti non ancora rilasciati sono indicati come in arrivo.',
      ],
    },
    do: { eyebrow: 'Servizi', title: 'Cosa facciamo', text: 'Attività registrate: sviluppo e fornitura di software applicativo (principale), vendita al dettaglio online, intermediazione nella vendita al dettaglio online.' },
    why: { eyebrow: 'Principi', title: 'Come lavoriamo' },
    info: { eyebrow: 'Azienda', title: 'Dati dell’azienda' },
  },

  principles: {
    title: 'Come lavoriamo',
    desc: 'Come lavora EarnToLink: multilingue fin dall’inizio, ambito concordato prima, codice e account tuoi, test inclusi. Processo e condizioni contrattuali.',
    eyebrow: 'Come lavoriamo', h1: 'Come lavoriamo', lead: 'Principi, processo e condizioni contrattuali.',
    why: { eyebrow: 'Principi', title: 'Sei impegni', text: 'Applicati a ogni progetto.' },
    steps: { eyebrow: 'Processo', title: 'Fasi', text: 'Dalla consulenza alla gestione.' },
    terms: { eyebrow: 'Contratti', title: 'Condizioni contrattuali e di prezzo', rows: [
      ['Progetti', 'Ambito, tempi, costi e condizioni di pagamento fissati in un contratto per ogni progetto'],
      ['Modifiche all’ambito', 'Le modifiche e il relativo costo vengono concordati prima di procedere'],
      ['Proprietà', 'Codice sorgente e account trasferiti al cliente a pagamento completato'],
      ['Le nostre app', 'Acquisto una tantum · fino a ₩10,000 per app · nessun abbonamento · pagamento tramite ciascun app store'],
    ] },
  },

  contact: {
    title: 'Contatti',
    desc: `Contatta EarnToLink per progetti, prodotti, privacy o collaborazioni: ${EMAIL}`,
    eyebrow: 'Contatti', h1: 'Contatti', lead: 'Via e-mail. Rispondiamo in coreano o in inglese.',
    topics: [
      ['code', 'Progetti', 'Sviluppo di prodotti, automazione con l’AI, localizzazione, lancio sugli app store, e-commerce, gestione'],
      ['package', 'Prodotti', 'Funzionalità, date di rilascio e bug delle nostre app'],
      ['receipt', 'Pagamenti', 'I pagamenti e i rimborsi delle app seguono la policy di ciascun app store'],
      ['shield', 'Privacy', 'Richieste di accesso, rettifica, cancellazione o sospensione del trattamento'],
      ['users', 'Collaborazioni', 'Collaborazioni e altre proposte'],
    ],
    brief: { title: 'Utile da includere in una richiesta di progetto', items: ['Cosa vuoi realizzare e perché', 'Mercati e lingue di destinazione', 'Tempistiche desiderate', 'Servizi o materiali di riferimento'] },
  },

  news: {
    'business-areas': { title: 'Le nostre aree di servizio', summary: 'Sviluppo di prodotti, trasformazione con l’AI, localizzazione, lancio sugli app store, e-commerce, gestione.',
      body: ['Una panoramica delle aree di servizio di EarnToLink.', 'Sono sei: sviluppo di prodotti, trasformazione con l’AI e automazione, localizzazione ed espansione globale, lancio sugli app store globali, e-commerce e vendite transfrontaliere, gestione e crescita.', 'Le richieste di progetto vanno inviate a hello@earntolink.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com è online', summary: 'Il sito di EarnToLink è online in 14 lingue.',
      body: ['Il sito di EarnToLink, earntolink.com, è ora online.', 'Presenta le nostre aree di servizio, i prodotti interni, i dati dell’azienda, l’informativa sulla privacy e i contatti.', 'È disponibile in coreano, inglese, giapponese, cinese (semplificato e tradizionale), spagnolo, francese, tedesco, portoghese, italiano, vietnamita, indonesiano, thailandese e russo.'] },
    'product-lineup': { title: 'I nostri prodotti interni', summary: 'Due app mobile e tre app desktop.',
      body: ['Lo stato attuale dei nostri prodotti interni.', 'Le app mobile Roll Tidy e Roll Flick e le app desktop Space Map, Dupeless e Archive Fix sono in arrivo.'] },
  },
  newsPage: { title: 'Novità', desc: 'Novità di EarnToLink: aree di servizio, lancio del sito e stato dei prodotti.' },

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
      { id: 'accuracy', h: '3. Informazioni su prodotti e servizi', html: '<p>Stato dei prodotti, funzionalità e descrizioni dei servizi sono accurati alla data di redazione. Funzionalità, prezzi e tempi dei prodotti non ancora rilasciati possono cambiare.</p>' },
      { id: 'projects', h: '4. Contratti di progetto', html: '<p>I servizi di sviluppo, automazione, localizzazione, lancio e gestione seguono il contratto di ciascun progetto. In caso di differenze tra questi termini e un contratto, prevale il contratto.</p>' },
      { id: 'apps', h: '5. Uso delle app', html: '<p>Ogni app è soggetta anche ai termini dello store attraverso cui è distribuita (App Store, Google Play, Microsoft Store e altri) e alle proprie avvertenze.</p>' },
      { id: 'links', h: '6. Link esterni', html: '<p>I siti esterni sono regolati dai propri termini e dalle proprie informative.</p>' },
      { id: 'liability', h: '7. Limitazione di responsabilità', html: '<p>Nei limiti consentiti dalla legge, EarnToLink non risponde dei danni indiretti derivanti dall’uso di questo sito.</p>' },
      { id: 'law', h: '8. Legge applicabile', html: '<p>Questi termini sono regolati dalle leggi della Repubblica di Corea.</p>' },
      { id: 'contact', h: '9. Contatti', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Colleghiamo i mercati e il mondo.', s: 'Sviluppo di prodotti · Trasformazione con l’AI · Localizzazione<br>Lancio sugli app store · E-commerce · Gestione', tags: ['Web · App · Desktop', 'AI · Automazione', '14 lingue'] },
};
