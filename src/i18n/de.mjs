// Deutsch. Same structure as ko.mjs. Facts only, no em dashes.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 Sprachen (Englisch, Koreanisch, Japanisch, Chinesisch vereinfacht und traditionell, Deutsch, Französisch, Spanisch, Portugiesisch, Italienisch)';
const ONDEVICE = 'Auf dem Gerät · keine Netzwerkverbindung';
const ONE_TIME = 'Einmalkauf · ₩10.000 oder weniger';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Wir verbinden Märkte und Welt.',
  translationNote: 'Diese Seite ist eine Übersetzung. Bei Abweichungen vom koreanischen Original gilt das koreanische Original.',

  ui: {
    skip: 'Zum Inhalt springen', menu: 'Menü', language: 'Sprache', mainNav: 'Hauptnavigation', breadcrumb: 'Brotkrumennavigation', toc: 'Inhalt', homeAria: 'EarnToLink Startseite',
    nav: { services: 'Leistungen', products: 'Produkte', about: 'Über uns', principles: 'Arbeitsweise', news: 'Neuigkeiten', contact: 'Kontakt' },
    home: 'Startseite', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', rss: 'RSS',
    footer: { services: 'Leistungen', products: 'Produkte', company: 'Unternehmen', policy: 'Richtlinien' },
    biz: { name: 'Firmenname', rep: 'Inhaber', no: 'Gewerbenummer', tax: 'Steuerart', kinds: 'Geschäftsfelder', mail: 'E-Mail' },
    rights: '© 2026 EarnToLink. Alle Rechte vorbehalten.',
    view: 'Details', all: 'Alle Produkte', allServices: 'Alle Leistungen', email: 'E-Mail', mailBtn: 'E-Mail senden', projectBtn: 'Projekt starten',
    platform: 'Plattform', status: 'Status', features: 'Funktionen', specs: 'Technische Daten', related: 'Weitere Produkte', privacyNote: 'Datenschutz',
    productIllustration: 'Produktabbildung: ',
    heroLabel: 'Illustration von EarnToLink, verbunden mit Märkten in 14 Sprachen',
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
    title: 'EarnToLink (언투링크) | Wir verbinden Märkte und Welt',
    desc: 'EarnToLink verbindet Märkte und Welt: Produktentwicklung für Web, Mobil und Desktop, KI-Transformation und Automatisierung, Lokalisierung in 14 Sprachen, globale App-Store-Einführung, Commerce-Integration und Betrieb.',
    eyebrow: 'Software · KI-Transformation · Globale Expansion',
    h1: 'Wir verbinden Märkte<br>und Welt.',
    lead: 'Von der Planung und Entwicklung über KI-Automatisierung und Lokalisierung bis zur globalen App-Store-Einführung: Ein Team begleitet Ihr Produkt auf dem ganzen Weg.',
    meta: ['Web · Mobil · Desktop', 'KI · Automatisierung', '14 Sprachen'],
    stats: [['14', 'Website-Sprachen'], ['6', 'Leistungsbereiche'], ['5', 'Eigene Produkte'], ['4', 'App Stores, in die wir liefern']],
    services: { eyebrow: 'Leistungen', title: 'Sechs Leistungsbereiche', text: 'Wir entwickeln, automatisieren, bringen Ihr Produkt in die Welt und halten es im Wachstum.' },
    why: { eyebrow: 'Warum EarnToLink', title: 'Von Anfang an für globale Märkte gebaut', text: 'Sechs Zusagen, die wir in jedem Projekt einhalten.' },
    how: { eyebrow: 'Ablauf', title: 'Vom ersten Gespräch bis zum Betrieb', text: 'Sechs Schritte, jeder wird bestätigt, bevor der nächste beginnt.' },
    apps: { eyebrow: 'Eigene Produkte', title: 'Produkte, die wir selbst entwickeln', text: 'Unsere eigenen Apps, nach demselben Standard wie Kundenprojekte gebaut. Alle demnächst verfügbar.' },
    co: { eyebrow: 'Unternehmen', title: 'EarnToLink', text: 'Einzelunternehmen in Korea. Entwicklung und Vertrieb von Anwendungssoftware.' },
    news: { eyebrow: 'Neuigkeiten', title: 'Aktuelles' },
  },

  services: {
    title: 'Leistungen',
    desc: 'Leistungen von EarnToLink: Produktentwicklung, KI-Transformation und Automatisierung, Lokalisierung, globale App-Store-Einführung, Commerce und grenzüberschreitender Verkauf, Betrieb und Wachstum.',
    eyebrow: 'Leistungen', h1: 'Leistungen', lead: 'Sechs Bereiche. Wählen Sie nur, was Sie brauchen.',
    whoLabel: 'Passt gut, wenn', scopeLabel: 'Was wir tun', deliverLabel: 'Lieferumfang', otherLabel: 'Weitere Leistungen',
    items: {
      product: {
        name: 'Produktentwicklung', short: 'Webdienste, mobile Apps, Desktop-Apps und interne Systeme, von der Planung bis zum Start.',
        lead: 'Wir machen aus Ideen Produkte, die tatsächlich genutzt werden. Planung, Screen-Design, visuelles Design, Entwicklung und Tests laufen als ein Ablauf.',
        who: ['Sie bauen einen neuen Dienst von Grund auf', 'Sie möchten klein starten und den Markt testen', 'Sie möchten Arbeit aus Tabellen und Chats in ein echtes System überführen'],
        scope: [
          ['Webdienste', 'Dienst-Websites, Konten und Zahlungen, Admin-Dashboards.'],
          ['Mobile Apps', 'Android- und iOS-Apps aus einer Codebasis.'],
          ['Desktop-Apps', 'Windows- und macOS-Apps, auch Datei- und Festplattenwerkzeuge.'],
          ['Interne Systeme', 'Werkzeuge für Arbeitssteuerung, Abrechnung, Lagerbestand und Kunden.'],
        ],
        deliver: ['Funktionsliste und Screen-Designs', 'Quellcode und Deployment-Einrichtung', 'Automatisierte Tests', 'Betriebshandbuch'],
      },
      ax: {
        name: 'KI-Transformation und Automatisierung', short: 'KI-Agenten und Automatisierung, die Routinearbeit verringern und die Arbeitsweise von Teams verändern.',
        lead: 'Wir finden die Arbeit, die sich wiederholt, und übertragen sie auf KI und Automatisierung. Eine kleine funktionierende Demo belegt die Wirkung vor der vollen Entwicklung.',
        who: ['Ihr Team wiederholt dieselben Support-Antworten, Dokumente oder Datenbereinigungen', 'Sie möchten interne Dokumente und Daten per KI durchsuchen', 'Mitarbeitende kopieren dieselben Informationen zwischen mehreren Werkzeugen'],
        scope: [
          ['KI-Agenten', 'Erstantworten, Zusammenfassungen, Entwürfe und Klassifizierung.'],
          ['Dokumenten- und Datenautomatisierung', 'Formulare lesen, Tabellen bereinigen, Berichte erstellen.'],
          ['Interne Wissenssuche', 'Antworten auf Basis Ihrer eigenen Dokumente (RAG).'],
          ['Werkzeugintegration', 'Automatische Verbindungen zwischen E-Mail, Chat, Tabellen und internen Systemen.'],
        ],
        deliver: ['Analyse der Arbeitsabläufe', 'Eine funktionierende Demo', 'Produktive Automatisierung und Benutzerhandbuch', 'Kennzahlen zur Wirkungsmessung'],
      },
      localization: {
        name: 'Lokalisierung und globale Expansion', short: 'Bringen Sie Ihren Dienst in 14 oder mehr Sprachen und werden Sie in jedem Land gefunden.',
        lead: 'Nicht nur Übersetzung. Wir passen Sprachstruktur, Datums-, Zahlen- und Währungsformate sowie die Auffindbarkeit in der Suche Land für Land an.',
        who: ['Ihr Dienst existiert nur in einer Sprache und Sie möchten ins Ausland', 'Sie haben übersetzt, aber ausländische Suchmaschinen finden Sie nicht', 'Sie brauchen Zahlungen und Formate, die je Land verschieden sind'],
        scope: [
          ['Mehrsprachige Struktur', 'Textextraktion, Sprachumschaltung, URLs je Sprache.'],
          ['Mehrsprachige SEO', 'hreflang, Sitemaps je Sprache, Anmeldung bei Suchmaschinen.'],
          ['Lokale Formate', 'Datum, Zahlen, Währungen und Adressen.'],
          ['Übersetzungs-QS', 'Glossare und automatische Prüfung auf fehlende Texte je Sprache.'],
        ],
        deliver: ['Seiten und URLs je Sprache', 'Glossar', 'Textprüfwerkzeug je Sprache', 'Anmeldung bei Suchmaschinen'],
      },
      launch: {
        name: 'Globale App-Store-Einführung', short: 'Einführung und Prüfungsbetreuung im App Store, bei Google Play, im Microsoft Store und im Mac App Store.',
        lead: 'Wir übernehmen die Store-Registrierung, die Antworten auf Prüfungen und die Store-Seiten in jeder Sprache und liefern nach dem Start weiter Updates.',
        who: ['Sie haben eine App, aber die Store-Registrierung hängt', 'Ihre App wurde bei der Prüfung abgelehnt', 'Sie brauchen Store-Seiten für jedes Land'],
        scope: [
          ['Store-Registrierung', 'Einrichtung des Entwicklerkontos, App-Angaben, Altersfreigaben, Datenschutzangaben.'],
          ['Prüfungsbetreuung', 'Richtlinienprüfung, Analyse von Ablehnungen, Korrektur und erneute Einreichung.'],
          ['Lokalisierung der Store-Seiten', 'Beschreibungen und Screenshots je Sprache.'],
          ['Zahlungseinrichtung', 'In-App-Käufe, Preisstufen, Preise je Land.'],
        ],
        deliver: ['Ihre App live in den Stores', 'Store-Seiten je Sprache', 'Prüfungsverlauf', 'Ablauf für Update-Releases'],
      },
      commerce: {
        name: 'Commerce und grenzüberschreitender Verkauf', short: 'Verbinden Sie Ihre Produkte mit Kunden im Ausland über Vertriebskanäle und Betriebswerkzeuge.',
        lead: 'Wir bauen den Onlineshop, mehrsprachige Produktdaten und die Zahlungs-, Versand- und Buchhaltungsanbindungen, die der Verkauf ins Ausland braucht.',
        who: ['Sie verkaufen im Inland und möchten ins Ausland verkaufen', 'Sie pflegen Produktdaten für jeden Kanal einzeln', 'Sie gleichen Bestellungen, Bestände und Abrechnungen von Hand ab'],
        scope: [
          ['Vertriebskanäle', 'Ihr eigener Shop, verbunden mit Marktplätzen im Ausland.'],
          ['Mehrsprachige Produktdaten', 'Namen, Beschreibungen, Optionen und Größentabellen je Sprache.'],
          ['Bestell- und Bestandsabgleich', 'Automatischer Abgleich von Bestellungen und Beständen über alle Kanäle.'],
          ['Abrechnung und Berichte', 'Automatische Summen für Umsatz, Gebühren und Auszahlungen.'],
        ],
        deliver: ['Vertriebskanäle und Anbindungen', 'Mehrsprachige Produktdaten', 'Bestell- und Bestandsabgleich', 'Abrechnungsberichte'],
      },
      operate: {
        name: 'Betrieb und Wachstum', short: 'Nach dem Start: Fehler beheben, Geschwindigkeit verbessern, Funktionen ergänzen, Kosten prüfen.',
        lead: 'Der Start ist der Anfang. Wir beobachten die Kennzahlen, verringern Fehler, ergänzen, was Nutzer brauchen, und halten die Infrastrukturkosten im Griff.',
        who: ['Sie brauchen jemanden, der einen Dienst eines anderen Anbieters übernimmt', 'Fehler und langsame Seiten kehren immer wieder', 'Die Serverkosten steigen weiter'],
        scope: [
          ['Fehlerbehebung', 'Fehlerprotokolle lesen, Ursachen finden, Korrekturen ausliefern.'],
          ['Performance', 'Schnellere Oberflächen und Abfragen.'],
          ['Funktionswachstum', 'Funktionen hinzufügen und straffen, basierend auf Nutzungsdaten.'],
          ['Kostenprüfung', 'Prüfung der Cloud-Nutzung und Einsparungen.'],
        ],
        deliver: ['Monatlicher Betriebsbericht', 'Protokoll der Fehlerbehebung', 'Verbesserungs-Releases', 'Ergebnisse der Kostenprüfung'],
      },
    },
  },

  why: [
    ['Von Anfang an mehrsprachig', 'Die mehrsprachige Struktur entsteht in der Entwurfsphase, sodass eine weitere Sprache später keinen Umbau bedeutet.'],
    ['Umfang zuerst vereinbart', 'Funktionen, Zeitplan und Kosten werden vor Arbeitsbeginn schriftlich festgelegt. Jede Änderung wird vereinbart, bevor sie umgesetzt wird.'],
    ['Code und Konten gehören Ihnen', 'Quellcode, Domains sowie Store- und Cloud-Konten werden auf Ihren Namen angelegt und übergeben.'],
    ['Tests gehören zur Lieferung', 'Automatisierte Tests für Kernfunktionen und Prüfungen auf fehlende Texte je Sprache sind enthalten.'],
    ['Wöchentlicher Fortschritt', 'Jede Woche sehen Sie funktionierende Oberflächen und was noch offen ist.'],
    ['Nur die nötigen Daten', 'Personenbezogene Daten beschränken sich auf das, was Funktionen brauchen, und werden wo immer möglich auf dem Gerät verarbeitet.'],
  ],

  steps: [
    ['Beratung', 'Ziele, Zielmärkte und Termine.'],
    ['Umfang und Angebot', 'Funktionsliste, Zeitplan und Kosten schriftlich.'],
    ['Demo', 'Zuerst laufen die wichtigsten Oberflächen und Abläufe.'],
    ['Entwicklung und Tests', 'Wöchentliche Updates, automatisierte Tests.'],
    ['Lokalisierung und Start', 'Seiten je Sprache, Registrierung in Stores und Suche.'],
    ['Betrieb und Verbesserung', 'Kennzahlen, Fehlerbehebung, Wachstum.'],
  ],

  cta: { title: 'Projekt starten', text: 'Schreiben Sie uns per E-Mail, was Sie bauen möchten, Ihre Zielmärkte und Ihren Zeitplan.' },

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
    title: 'Über uns',
    desc: 'Über EarnToLink (언투링크): ein Softwareunternehmen, das Märkte und Welt verbindet. Mission, Leistungen, Prinzipien und Unternehmensdaten.',
    eyebrow: 'Über uns', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) ist ein Softwareunternehmen, das Märkte und Welt verbindet.',
    mission: {
      eyebrow: 'Mission', title: 'Wir verbinden Märkte und Welt',
      body: [
        'Gute Produkte und Dienste bleiben oft in einem Land und einer Sprache eingeschlossen. EarnToLink baut die Software, die diese Lücke überbrückt.',
        'Wir entwickeln Produkte, erleichtern den Betrieb mit KI und Automatisierung und bringen sie über viele Sprachen und App Stores auf globale Märkte. Nach dem Start verbessern wir sie weiter auf Basis der Daten.',
        'Unsere eigenen Apps bauen wir nach demselben Standard. Der Status wird so gezeigt, wie er ist: Noch nicht veröffentlichte Produkte sind als demnächst verfügbar gekennzeichnet.',
      ],
    },
    do: { eyebrow: 'Leistungen', title: 'Was wir tun', text: 'Angemeldete Tätigkeit: Entwicklung und Vertrieb von Anwendungssoftware (Hauptgeschäft), E-Commerce-Einzelhandel, Vermittlung im E-Commerce-Einzelhandel.' },
    why: { eyebrow: 'Prinzipien', title: 'Wie wir arbeiten' },
    info: { eyebrow: 'Unternehmen', title: 'Unternehmensdaten' },
  },

  principles: {
    title: 'Arbeitsweise',
    desc: 'Die Arbeitsweise von EarnToLink: von Anfang an mehrsprachig, Umfang zuerst vereinbart, Code und Konten gehören Ihnen, Tests inklusive. Ablauf und Vertragsbedingungen.',
    eyebrow: 'Arbeitsweise', h1: 'Arbeitsweise', lead: 'Prinzipien, Ablauf und Vertragsbedingungen.',
    why: { eyebrow: 'Prinzipien', title: 'Sechs Zusagen', text: 'Gelten für jedes Projekt.' },
    steps: { eyebrow: 'Ablauf', title: 'Schritte', text: 'Von der Beratung bis zum Betrieb.' },
    terms: { eyebrow: 'Verträge', title: 'Vertrags- und Preisbedingungen', rows: [
      ['Projekte', 'Umfang, Zeitplan, Kosten und Zahlungsbedingungen werden je Projekt vertraglich festgelegt'],
      ['Änderungen des Umfangs', 'Änderungen und ihre Kosten werden vereinbart, bevor die Arbeit fortgesetzt wird'],
      ['Eigentum', 'Quellcode und Konten gehen nach vollständiger Zahlung an den Kunden über'],
      ['Unsere Apps', 'Einmalkauf · ₩10.000 oder weniger pro App · kein Abonnement · Bezahlung über den jeweiligen App Store'],
    ] },
  },

  contact: {
    title: 'Kontakt',
    desc: `Kontakt zu EarnToLink für Projekte, Produkte, Datenschutz oder Partnerschaften: ${EMAIL}`,
    eyebrow: 'Kontakt', h1: 'Kontakt', lead: 'Per E-Mail. Wir antworten auf Koreanisch oder Englisch.',
    topics: [
      ['code', 'Projekte', 'Produktentwicklung, KI-Automatisierung, Lokalisierung, App-Store-Einführung, Commerce, Betrieb'],
      ['package', 'Produkte', 'Funktionen, Veröffentlichungstermine und Fehler in unseren Apps'],
      ['receipt', 'Zahlungen', 'App-Zahlungen und Erstattungen folgen den Richtlinien des jeweiligen App Stores'],
      ['shield', 'Datenschutz', 'Anfragen auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung'],
      ['users', 'Partnerschaften', 'Zusammenarbeit und andere Vorschläge'],
    ],
    brief: { title: 'Hilfreich bei einer Projektanfrage', items: ['Was Sie bauen möchten und warum', 'Zielmärkte und Sprachen', 'Gewünschter Zeitplan', 'Vergleichbare Dienste oder Unterlagen'] },
  },

  news: {
    'business-areas': { title: 'Unsere Leistungsbereiche', summary: 'Produktentwicklung, KI-Transformation, Lokalisierung, App-Store-Einführung, Commerce, Betrieb.',
      body: ['Ein Überblick über die Leistungsbereiche von EarnToLink.', 'Es sind sechs: Produktentwicklung, KI-Transformation und Automatisierung, Lokalisierung und globale Expansion, globale App-Store-Einführung, Commerce und grenzüberschreitender Verkauf sowie Betrieb und Wachstum.', 'Projektanfragen gehen an hello@earntolink.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com ist online', summary: 'Die Website von EarnToLink ist in 14 Sprachen online.',
      body: ['Die Website von EarnToLink, earntolink.com, ist jetzt online.', 'Sie enthält unsere Leistungsbereiche, eigenen Produkte, Unternehmensdaten, die Datenschutzerklärung und Kontaktdaten.', 'Sie ist verfügbar auf Koreanisch, Englisch, Japanisch, Chinesisch (vereinfacht und traditionell), Spanisch, Französisch, Deutsch, Portugiesisch, Italienisch, Vietnamesisch, Indonesisch, Thailändisch und Russisch.'] },
    'product-lineup': { title: 'Unsere eigenen Produkte', summary: 'Zwei mobile Apps und drei Desktop-Apps.',
      body: ['Der aktuelle Stand unserer eigenen Produkte.', 'Die mobilen Apps Roll Tidy und Roll Flick sowie die Desktop-Apps Space Map, Dupeless und Archive Fix sind demnächst verfügbar.'] },
  },
  newsPage: { title: 'Neuigkeiten', desc: 'Neuigkeiten von EarnToLink: Leistungsbereiche, Start der Website und Produktstatus.' },

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
      { id: 'accuracy', h: '3. Produkt- und Leistungsinformationen', html: '<p>Produktstatus, Funktionen und Leistungsbeschreibungen sind zum Zeitpunkt der Erstellung zutreffend. Funktionen, Preise und Termine noch nicht veröffentlichter Produkte können sich ändern.</p>' },
      { id: 'projects', h: '4. Projektverträge', html: '<p>Entwicklungs-, Automatisierungs-, Lokalisierungs-, Einführungs- und Betriebsleistungen folgen dem Vertrag des jeweiligen Projekts. Weichen diese Bedingungen und ein Vertrag voneinander ab, gilt der Vertrag.</p>' },
      { id: 'apps', h: '5. Nutzung der Apps', html: '<p>Für jede App gelten zusätzlich die Bedingungen des Stores, über den sie vertrieben wird (App Store, Google Play, Microsoft Store und andere), sowie ihre eigenen Hinweise.</p>' },
      { id: 'links', h: '6. Externe Links', html: '<p>Für externe Websites gelten deren eigene Bedingungen und Richtlinien.</p>' },
      { id: 'liability', h: '7. Haftungsbeschränkung', html: '<p>Soweit gesetzlich zulässig, haftet EarnToLink nicht für mittelbare Schäden, die aus der Nutzung dieser Website entstehen.</p>' },
      { id: 'law', h: '8. Anwendbares Recht', html: '<p>Für diese Bedingungen gilt das Recht der Republik Korea.</p>' },
      { id: 'contact', h: '9. Kontakt', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Wir verbinden Märkte und Welt.', s: 'Produktentwicklung · KI-Transformation · Lokalisierung<br>App-Store-Einführung · Commerce · Betrieb', tags: ['Web · App · Desktop', 'KI · Automatisierung', '14 Sprachen'] },
};
