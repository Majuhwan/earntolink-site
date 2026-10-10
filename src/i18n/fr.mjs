// Français. Même structure que en.mjs. Apostrophes typographiques (’), pas de tiret cadratin.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 langues (anglais, coréen, japonais, chinois simplifié et traditionnel, allemand, français, espagnol, portugais, italien)';
const ONDEVICE = 'Sur l’appareil · aucune connexion réseau';
const ONE_TIME = 'Achat unique · ₩10,000 maximum';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Relier les marchés et le monde.',
  translationNote: 'Cette page est une traduction. En cas de divergence avec l’original coréen, l’original coréen prévaut.',

  ui: {
    skip: 'Aller au contenu', menu: 'Menu', language: 'Langue', mainNav: 'Principale', breadcrumb: 'Fil d’Ariane', toc: 'Sommaire', homeAria: 'Accueil EarnToLink',
    nav: { services: 'Services', products: 'Produits', about: 'À propos', principles: 'Notre méthode', news: 'Actualités', contact: 'Contact' },
    home: 'Accueil', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', rss: 'RSS',
    footer: { services: 'Services', products: 'Produits', company: 'Entreprise', policy: 'Politiques' },
    biz: { name: 'Nom commercial', rep: 'Représentant', no: 'N° d’enregistrement de l’entreprise', tax: 'Régime fiscal', kinds: 'Activité', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Tous droits réservés.',
    view: 'Détails', all: 'Tous les produits', allServices: 'Tous les services', email: 'E-mail', mailBtn: 'Nous écrire', projectBtn: 'Lancer un projet',
    platform: 'Plateforme', status: 'Statut', features: 'Fonctionnalités', specs: 'Caractéristiques', related: 'Autres produits', privacyNote: 'Confidentialité',
    productIllustration: 'Illustration du produit : ',
    heroLabel: 'Illustration d’EarnToLink reliée à des marchés en 14 langues',
    newsFeedTitle: 'Actualités EarnToLink', newsFeedDesc: 'Actualités d’EarnToLink (언투링크)',
    notFound: { title: 'Page introuvable', text: 'L’adresse a changé ou la page n’existe pas.', home: 'Retour à l’accueil' },
  },

  status: { soon: 'Bientôt disponible', dev: 'En développement', live: 'Disponible' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Contribuable général (Corée)',
    form: 'Forme juridique', formValue: 'Entreprise individuelle (Corée)', kindsLabel: 'Activités enregistrées', site: 'Site web',
    kinds: ['Développement et fourniture de logiciels d’application (principale)', 'Vente au détail en commerce électronique', 'Courtage de vente au détail en commerce électronique'],
  },

  categories: {
    mobile: { name: 'Applications mobiles', plat: 'Android · iOS' },
    desktop: { name: 'Applications de bureau', plat: 'macOS · Windows' },
  },

  home: {
    title: 'EarnToLink (언투링크) | Relier les marchés et le monde',
    desc: 'EarnToLink relie les marchés et le monde : développement de produits web, mobiles et de bureau, transformation par l’IA et automatisation, localisation en 14 langues, lancement sur les boutiques d’applications mondiales, intégration et exploitation e-commerce.',
    eyebrow: 'Logiciels · Transformation par l’IA · Expansion internationale',
    h1: 'Relier les marchés<br>et le monde.',
    lead: 'De la conception et du développement à l’automatisation par l’IA, la localisation et le lancement sur les boutiques d’applications mondiales, une seule équipe accompagne votre produit jusqu’au bout.',
    meta: ['Web · Mobile · Bureau', 'IA · Automatisation', '14 langues'],
    stats: [['14', 'Langues du site'], ['6', 'Domaines de service'], ['5', 'Produits maison'], ['4', 'Boutiques d’applications ciblées']],
    services: { eyebrow: 'Services', title: 'Six domaines de service', text: 'Nous construisons, automatisons, ouvrons au monde et faisons grandir.' },
    why: { eyebrow: 'Pourquoi EarnToLink', title: 'Pensé pour les marchés mondiaux dès le premier jour', text: 'Six engagements tenus sur chaque projet.' },
    how: { eyebrow: 'Processus', title: 'Du premier échange à l’exploitation', text: 'Six étapes, chacune validée avant la suivante.' },
    apps: { eyebrow: 'Produits maison', title: 'Les produits que nous créons nous-mêmes', text: 'Nos propres applications, conçues avec la même exigence que le travail pour nos clients. Toutes bientôt disponibles.' },
    co: { eyebrow: 'Entreprise', title: 'EarnToLink', text: 'Entreprise individuelle en Corée. Développement et fourniture de logiciels d’application.' },
    news: { eyebrow: 'Actualités', title: 'Dernières actualités' },
  },

  services: {
    title: 'Services',
    desc: 'Services d’EarnToLink : développement de produits, transformation par l’IA et automatisation, localisation, lancement sur les boutiques d’applications mondiales, e-commerce et vente transfrontalière, exploitation et croissance.',
    eyebrow: 'Services', h1: 'Services', lead: 'Six domaines. Choisissez uniquement ceux dont vous avez besoin.',
    whoLabel: 'Idéal si', scopeLabel: 'Ce que nous faisons', deliverLabel: 'Livrables', otherLabel: 'Autres services',
    items: {
      product: {
        name: 'Développement de produits', short: 'Services web, applications mobiles, applications de bureau et systèmes internes, de la conception au lancement.',
        lead: 'Nous transformons vos idées en produits réellement utilisés. Conception, maquettes d’écrans, design visuel, développement et tests forment un seul flux.',
        who: ['Vous créez un nouveau service de zéro', 'Vous voulez d’abord lancer en petit pour tester le marché', 'Vous voulez sortir le travail des tableurs et de la messagerie pour un vrai système'],
        scope: [
          ['Services web', 'Sites de service, comptes et paiements, tableaux de bord d’administration.'],
          ['Applications mobiles', 'Applications Android et iOS, construites à partir d’une seule base de code.'],
          ['Applications de bureau', 'Applications Windows et macOS, y compris des outils de fichiers et de disque.'],
          ['Systèmes internes', 'Outils de gestion du travail, de règlement, de stock et de relation client.'],
        ],
        deliver: ['Liste des fonctionnalités et maquettes d’écrans', 'Code source et configuration du déploiement', 'Tests automatisés', 'Guide d’exploitation'],
      },
      ax: {
        name: 'Transformation par l’IA et automatisation', short: 'Agents IA et automatisation pour réduire le travail répétitif et changer le fonctionnement des équipes.',
        lead: 'Nous repérons les tâches qui se répètent et les confions à l’IA et à l’automatisation. Une petite démo fonctionnelle prouve l’effet avant le développement complet.',
        who: ['Votre équipe répète les mêmes réponses au support, documents ou nettoyages de données', 'Vous voulez interroger vos documents et données internes avec l’IA', 'Des personnes recopient les mêmes informations entre plusieurs outils'],
        scope: [
          ['Agents IA', 'Réponses de premier niveau, résumés, brouillons et classification.'],
          ['Automatisation des documents et des données', 'Lecture de formulaires, nettoyage de tableaux, génération de rapports.'],
          ['Recherche dans les connaissances internes', 'Réponses fondées sur vos propres documents (RAG).'],
          ['Intégration d’outils', 'Liens automatiques entre e-mail, messagerie, tableurs et systèmes internes.'],
        ],
        deliver: ['Analyse des flux de travail', 'Une démo fonctionnelle', 'Automatisation en production et guide utilisateur', 'Indicateurs pour mesurer l’effet'],
      },
      localization: {
        name: 'Localisation et expansion internationale', short: 'Proposez votre service en 14 langues ou plus et soyez trouvé dans chaque pays.',
        lead: 'Pas seulement de la traduction. Nous adaptons pays par pays la structure des langues, les formats de date, de nombre et de devise, et la visibilité dans les moteurs de recherche.',
        who: ['Votre service n’existe que dans une langue et vous voulez l’ouvrir à l’étranger', 'Vous avez traduit, mais les moteurs de recherche étrangers ne vous trouvent pas', 'Vous avez besoin de paiements et de formats propres à chaque pays'],
        scope: [
          ['Structure multilingue', 'Extraction des chaînes, changement de langue, URL par langue.'],
          ['SEO multilingue', 'hreflang, plans de site par langue, enregistrement auprès des moteurs de recherche.'],
          ['Formats locaux', 'Dates, nombres, devises et adresses.'],
          ['Contrôle qualité des traductions', 'Glossaires et vérifications automatiques des chaînes manquantes par langue.'],
        ],
        deliver: ['Pages et URL par langue', 'Glossaire', 'Outil de vérification des chaînes par langue', 'Enregistrement auprès des moteurs de recherche'],
      },
      launch: {
        name: 'Lancement sur les boutiques d’applications mondiales', short: 'Lancement et gestion de la validation sur l’App Store, Google Play, Microsoft Store et Mac App Store.',
        lead: 'Nous gérons l’inscription en boutique, les réponses à la validation et les fiches dans chaque langue, puis continuons à publier des mises à jour après le lancement.',
        who: ['Vous avez une application mais l’inscription en boutique est bloquée', 'Votre application a été refusée à la validation', 'Vous avez besoin de fiches de boutique pour chaque pays'],
        scope: [
          ['Inscription en boutique', 'Création du compte développeur, informations de l’application, classification par âge, étiquettes de confidentialité.'],
          ['Gestion de la validation', 'Vérification des règles, analyse des refus, correction et nouvelle soumission.'],
          ['Localisation des fiches de boutique', 'Descriptions et captures d’écran par langue.'],
          ['Configuration des paiements', 'Achats intégrés, paliers de prix, tarifs par pays.'],
        ],
        deliver: ['Votre application en ligne sur les boutiques', 'Fiches de boutique par langue', 'Historique des validations', 'Procédure de publication des mises à jour'],
      },
      commerce: {
        name: 'E-commerce et vente transfrontalière', short: 'Reliez vos produits à des clients à l’étranger avec des canaux de vente et des outils d’exploitation.',
        lead: 'Nous construisons la boutique en ligne, les données produit multilingues et les intégrations de paiement, de livraison et de comptabilité nécessaires pour vendre à l’étranger.',
        who: ['Vous vendez dans votre pays et voulez vendre à l’étranger', 'Vous modifiez les données produit séparément pour chaque canal', 'Vous rapprochez à la main commandes, stocks et règlements'],
        scope: [
          ['Canaux de vente', 'Votre propre boutique reliée aux places de marché étrangères.'],
          ['Données produit multilingues', 'Noms, descriptions, options et guides des tailles par langue.'],
          ['Synchronisation commandes et stocks', 'Synchronisation automatique des commandes et de l’inventaire entre les canaux.'],
          ['Règlements et rapports', 'Totaux automatiques des ventes, commissions et versements.'],
        ],
        deliver: ['Canaux de vente et intégrations', 'Données produit multilingues', 'Synchronisation commandes et stocks', 'Rapports de règlement'],
      },
      operate: {
        name: 'Exploitation et croissance', short: 'Après le lancement : correction des erreurs, amélioration de la vitesse, ajout de fonctionnalités, contrôle des coûts.',
        lead: 'Le lancement n’est qu’un début. Nous suivons les indicateurs, réduisons les erreurs, ajoutons ce dont les utilisateurs ont besoin et maîtrisons les coûts d’infrastructure.',
        who: ['Vous cherchez quelqu’un pour reprendre un service créé par un autre prestataire', 'Les erreurs et les écrans lents reviennent sans cesse', 'Les coûts de serveur ne cessent d’augmenter'],
        scope: [
          ['Traitement des erreurs', 'Lecture des journaux d’erreurs, recherche des causes, publication des correctifs.'],
          ['Performance', 'Écrans et requêtes plus rapides.'],
          ['Évolution des fonctionnalités', 'Ajout et retrait de fonctionnalités selon les données d’usage.'],
          ['Revue des coûts', 'Analyse de l’usage du cloud et économies.'],
        ],
        deliver: ['Rapport mensuel d’exploitation', 'Journal de traitement des erreurs', 'Versions d’amélioration', 'Résultats de la revue des coûts'],
      },
    },
  },

  why: [
    ['Multilingue dès le départ', 'La structure multilingue est prévue dès la conception, donc ajouter une langue plus tard n’oblige jamais à tout refaire.'],
    ['Périmètre validé d’abord', 'Fonctionnalités, calendrier et coût sont fixés par écrit avant le début du travail. Tout changement est validé avant d’être réalisé.'],
    ['Le code et les comptes vous appartiennent', 'Le code source, les domaines, les comptes de boutiques et de cloud sont créés à votre nom puis remis.'],
    ['Les tests font partie de la livraison', 'Des tests automatisés des fonctionnalités clés et des vérifications des chaînes manquantes par langue sont inclus.'],
    ['Avancement hebdomadaire', 'Chaque semaine, vous voyez des écrans fonctionnels et ce qui reste à faire.'],
    ['Seulement les données nécessaires', 'Les données personnelles se limitent à ce que les fonctionnalités exigent, traitées sur l’appareil chaque fois que possible.'],
  ],

  steps: [
    ['Consultation', 'Objectifs, marchés cibles et échéances.'],
    ['Périmètre et devis', 'Liste des fonctionnalités, calendrier et coût par écrit.'],
    ['Démo', 'Les écrans et parcours essentiels fonctionnent en premier.'],
    ['Développement et tests', 'Points hebdomadaires, tests automatisés.'],
    ['Localisation et lancement', 'Pages par langue, enregistrement en boutique et auprès des moteurs de recherche.'],
    ['Exploitation et amélioration', 'Indicateurs, traitement des erreurs, croissance.'],
  ],

  cta: { title: 'Lancer un projet', text: 'Écrivez-nous ce que vous voulez créer, vos marchés cibles et votre calendrier.' },

  products: {
    title: 'Produits',
    desc: 'Produits maison d’EarnToLink : deux applications mobiles (Roll Tidy, Roll Flick) et trois applications de bureau (Space Map, Dupeless, Archive Fix). Toutes bientôt disponibles.',
    eyebrow: 'Produits maison', h1: 'Produits', lead: 'Deux applications mobiles et trois applications de bureau. Toutes bientôt disponibles.', tabsLabel: 'Catégories',
    groups: { mobile: 'Android · iOS. Nettoyage de photos.', desktop: 'macOS · Windows. Disque, fichiers, archives.' },
    prin: { eyebrow: 'Principes des produits', title: 'Simples et honnêtes', text: 'Communs à nos cinq applications.' },
    principles: [
      ['Sur l’appareil', 'Les fichiers et les photos sont analysés uniquement sur l’appareil. Rien n’est envoyé à un serveur.'],
      ['Sans publicité ni suivi', 'Pas de publicité, d’analyse d’audience, de rapport de plantage ni de compte.'],
      ['Achat unique', 'Pas d’abonnement. ₩10,000 maximum par application.'],
      ['Suppression réversible', 'Les fichiers et photos supprimés vont à la corbeille et peuvent être restaurés.'],
    ],
    featTitle: 'Fonctionnalités de {name}',
    privacy: {
      mobile: 'Les photos sont analysées uniquement sur l’appareil et ne sont jamais envoyées ailleurs.',
      desktop: 'Les fichiers sont traités uniquement sur l’appareil et ne sont jamais envoyés ailleurs.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Photos similaires, photos floues, captures d’écran et vidéos volumineuses',
        lead: 'Analyse la photothèque sur l’appareil et rassemble par catégorie ce qui peut être supprimé.',
        features: [
          ['Groupes de photos similaires', 'Regroupe les prises de vue faites à moins de 90 secondes d’intervalle et qui se ressemblent, à l’aide d’un hachage de différence sur 64 bits.'],
          ['Meilleure photo', 'Propose de conserver la photo la plus nette de chaque groupe. Les favoris ne sont jamais candidats à la suppression.'],
          ['Photos floues', 'Repère les photos floues par rapport à l’ensemble de la photothèque. Les photos très sombres ou très claires sont ignorées.'],
          ['Captures d’écran', 'Rassemble les photos de l’album des captures d’écran.'],
          ['Vidéos volumineuses', 'Trie les vidéos par taille estimée, de la plus grande à la plus petite.'],
          ['Suppression réversible', 'Déplace les éléments vers la corbeille d’Android ou « Supprimés récemment » d’iOS (30 jours).'],
        ],
        specs: [['Plateformes', 'Android · iOS'], ['Traitement', ONDEVICE], ['Suppression', 'Déplacement vers la corbeille du système'], ['Langues', APP_LANGS], ['Prix', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Faites défiler les photos une à une : garder ou supprimer',
        lead: 'Répartit les photos selon le mois de prise de vue, puis vous laisse décider photo par photo.',
        features: [
          ['Par mois', 'Regroupe les photos par mois de prise de vue, les plus récentes d’abord.'],
          ['Balayage', 'Balayez vers la gauche pour marquer à supprimer, vers la droite pour garder.'],
          ['Annuler', 'Annule la dernière décision.'],
          ['Vérification avant suppression', 'À la fin d’un mois, vérifiez les photos marquées, puis nettoyez en une seule fois.'],
          ['Progression', 'Photos nettoyées, jours consécutifs et mois terminés. Enregistrés uniquement sur l’appareil.'],
          ['Sur l’appareil', 'Les photos ne sont jamais envoyées à un serveur.'],
        ],
        specs: [['Plateformes', 'Android · iOS'], ['Traitement', ONDEVICE], ['Suppression', 'Déplacement vers la corbeille du système'], ['Langues', APP_LANGS], ['Prix', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Une carte arborescente (treemap) des dossiers et fichiers qui occupent votre disque',
        lead: 'Analyse un dossier et représente la taille par la surface, pour nettoyer d’abord les éléments les plus volumineux.',
        features: [
          ['Treemap', 'Treemap en carrés, colorée par type de fichier : vidéo, images, audio, documents, archives, programmes, autres.'],
          ['Trois vues', 'Carte, fichiers les plus volumineux et taille par type.'],
          ['Dossiers rapides', 'Dossier personnel, Téléchargements, Bureau, Documents, Images, Vidéos, lecteur C (Windows).'],
          ['Navigation', 'Entrez dans les sous-dossiers et remontez au dossier parent.'],
          ['Finder · Explorateur', 'Affiche l’élément sélectionné dans le Finder ou l’Explorateur.'],
          ['Mise à la corbeille', 'Les éléments supprimés peuvent être restaurés depuis la corbeille. Les dossiers sans autorisation sont ignorés et comptés.'],
        ],
        specs: [['Plateformes', 'macOS · Windows'], ['Traitement', ONDEVICE], ['Suppression', 'Déplacement vers la corbeille'], ['Langues', APP_LANGS], ['Prix', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Trouvez les fichiers au contenu identique et nettoyez-les',
        lead: 'Compare le contenu, pas les noms : d’abord la taille, puis les 64 premiers et derniers Ko, puis SHA-256.',
        features: [
          ['Comparaison en trois étapes', 'Liste des fichiers, comparaison rapide (64 premiers et derniers Ko), comparaison complète (SHA-256).'],
          ['Plusieurs dossiers', 'Plusieurs dossiers de recherche, taille minimale de fichier, fichiers cachés ignorés.'],
          ['Sélection automatique', 'Garder le plus ancien, le plus récent ou le chemin le plus court.'],
          ['Toujours en garder un', 'Au moins un fichier par groupe doit rester.'],
          ['Mise à la corbeille', 'Seuls les fichiers sélectionnés vont à la corbeille. Restaurables.'],
          ['Finder · Explorateur', 'Ouvrez directement l’emplacement du fichier.'],
        ],
        specs: [['Plateformes', 'macOS · Windows'], ['Traitement', ONDEVICE], ['Comparaison', 'Taille → 64 premiers/derniers Ko → SHA-256'], ['Langues', APP_LANGS], ['Prix', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Extrayez et créez des archives sans noms de fichiers coréens corrompus',
        lead: 'Détecte les noms de fichiers CP949 des ZIP créés sous Windows coréen et les restaure. Basé sur 7-Zip.',
        features: [
          ['Réparation des noms coréens', 'Examine les entrées ZIP sans l’indicateur UTF-8 et convertit automatiquement les noms CP949 (Windows coréen).'],
          ['16 formats', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Création d’archives', 'ZIP ou 7Z, avec compression rapide, normale ou maximale.'],
          ['Mot de passe AES-256', 'AES-256 pour ZIP ; 7Z chiffre aussi les noms de fichiers.'],
          ['Glisser-déposer', 'Les archives sont extraites, les autres fichiers sont compressés.'],
          ['7-Zip 26.04 inclus', 'Aucune installation séparée.'],
        ],
        specs: [['Plateformes', 'macOS · Windows'], ['Traitement', ONDEVICE], ['Moteur', '7-Zip 26.04 (LGPL)'], ['Langues', APP_LANGS], ['Prix', ONE_TIME]],
      },
    },
  },

  about: {
    title: 'À propos',
    desc: 'À propos d’EarnToLink (언투링크) : une entreprise de logiciels qui relie les marchés et le monde. Mission, services, principes et informations sur l’entreprise.',
    eyebrow: 'À propos', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) est une entreprise de logiciels qui relie les marchés et le monde.',
    mission: {
      eyebrow: 'Mission', title: 'Relier les marchés et le monde',
      body: [
        'De bons produits et services restent souvent enfermés dans un seul pays et une seule langue. EarnToLink crée les logiciels qui comblent cet écart.',
        'Nous créons des produits, allégeons l’exploitation grâce à l’IA et à l’automatisation, et les amenons sur les marchés mondiaux par de nombreuses langues et boutiques d’applications. Après le lancement, nous continuons à les améliorer à partir des données.',
        'Nous créons nos propres applications avec la même exigence. Le statut est indiqué tel qu’il est : les produits pas encore publiés sont signalés comme bientôt disponibles.',
      ],
    },
    do: { eyebrow: 'Services', title: 'Ce que nous faisons', text: 'Activités enregistrées : développement et fourniture de logiciels d’application (principale), vente au détail en commerce électronique, courtage de vente au détail en commerce électronique.' },
    why: { eyebrow: 'Principes', title: 'Notre méthode' },
    info: { eyebrow: 'Entreprise', title: 'Informations sur l’entreprise' },
  },

  principles: {
    title: 'Notre méthode',
    desc: 'La méthode d’EarnToLink : multilingue dès le départ, périmètre validé d’abord, code et comptes à vous, tests inclus. Processus et conditions contractuelles.',
    eyebrow: 'Notre méthode', h1: 'Notre méthode', lead: 'Principes, processus et conditions contractuelles.',
    why: { eyebrow: 'Principes', title: 'Six engagements', text: 'Appliqués à chaque projet.' },
    steps: { eyebrow: 'Processus', title: 'Étapes', text: 'De la consultation à l’exploitation.' },
    terms: { eyebrow: 'Contrats', title: 'Conditions contractuelles et tarifaires', rows: [
      ['Projets', 'Périmètre, calendrier, coût et modalités de paiement fixés par contrat pour chaque projet'],
      ['Changements de périmètre', 'Les changements et leur coût sont validés avant la poursuite du travail'],
      ['Propriété', 'Code source et comptes transférés au client une fois le paiement complet effectué'],
      ['Nos applications', 'Achat unique · ₩10,000 maximum par application · sans abonnement · paiement via chaque boutique d’applications'],
    ] },
  },

  contact: {
    title: 'Contact',
    desc: `Contactez EarnToLink pour des projets, des produits, la confidentialité ou des partenariats : ${EMAIL}`,
    eyebrow: 'Contact', h1: 'Contact', lead: 'Par e-mail. Nous répondons en coréen ou en anglais.',
    topics: [
      ['code', 'Projets', 'Développement de produits, automatisation par l’IA, localisation, lancement en boutique d’applications, e-commerce, exploitation'],
      ['package', 'Produits', 'Fonctionnalités, dates de sortie et bugs de nos applications'],
      ['receipt', 'Paiements', 'Les paiements et remboursements des applications suivent la politique de chaque boutique d’applications'],
      ['shield', 'Confidentialité', 'Demandes d’accès, de rectification, de suppression ou d’arrêt du traitement'],
      ['users', 'Partenariats', 'Collaborations et autres propositions'],
    ],
    brief: { title: 'À indiquer dans une demande de projet', items: ['Ce que vous voulez créer et pourquoi', 'Marchés et langues cibles', 'Calendrier souhaité', 'Services ou documents de référence'] },
  },

  news: {
    'business-areas': { title: 'Nos domaines de service', summary: 'Développement de produits, transformation par l’IA, localisation, lancement en boutique d’applications, e-commerce, exploitation.',
      body: ['Présentation des domaines de service d’EarnToLink.', 'Ils sont au nombre de six : développement de produits, transformation par l’IA et automatisation, localisation et expansion internationale, lancement sur les boutiques d’applications mondiales, e-commerce et vente transfrontalière, exploitation et croissance.', 'Les demandes de projet sont à envoyer à hello@earntolink.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com est en ligne', summary: 'Le site d’EarnToLink est en ligne en 14 langues.',
      body: ['Le site d’EarnToLink, earntolink.com, est désormais en ligne.', 'Il présente nos domaines de service, nos produits maison, les informations sur l’entreprise, la politique de confidentialité et les coordonnées.', 'Il est disponible en coréen, anglais, japonais, chinois (simplifié et traditionnel), espagnol, français, allemand, portugais, italien, vietnamien, indonésien, thaï et russe.'] },
    'product-lineup': { title: 'Nos produits maison', summary: 'Deux applications mobiles et trois applications de bureau.',
      body: ['L’état actuel de nos produits maison.', 'Les applications mobiles Roll Tidy et Roll Flick et les applications de bureau Space Map, Dupeless et Archive Fix sont bientôt disponibles.'] },
  },
  newsPage: { title: 'Actualités', desc: 'Actualités d’EarnToLink : domaines de service, lancement du site et état des produits.' },

  privacy: {
    title: 'Politique de confidentialité',
    desc: 'Politique de confidentialité d’EarnToLink pour le site web, les demandes par e-mail et nos applications. En vigueur le 10 octobre 2026.',
    eyebrow: 'Politique', lead: 'En vigueur le 10 octobre 2026',
    sections: [
      { id: 'general', h: '1. Généralités', html: `<p>EarnToLink (언투링크, « EarnToLink ») protège les informations personnelles conformément à la loi coréenne sur la protection des informations personnelles. Cette politique couvre le site earntolink.com et les applications créées par EarnToLink.</p><p>En résumé : le site n’utilise ni inscription, ni formulaires, ni cookies, ni outils d’analyse, ni publicité. Nos applications traitent les fichiers et les photos uniquement sur l’appareil et ne les envoient jamais ailleurs.</p>` },
      { id: 'site', h: '2. Site web', html: `<ul><li>Aucune inscription, connexion ni formulaire.</li><li>Aucun cookie, outil d’analyse ni script publicitaire.</li><li>Le site est hébergé par GitHub Pages (GitHub, Inc.). GitHub peut traiter des journaux d’accès tels que les adresses IP pour l’exploitation et la sécurité, conformément à la <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>La police Pretendard est chargée depuis le CDN jsDelivr, qui peut recevoir des informations de requête telles que l’adresse IP de votre navigateur.</li><li>Si des cookies ou des outils d’analyse sont un jour introduits, cette politique sera d’abord mise à jour.</li></ul>` },
      { id: 'email', h: '3. Demandes par e-mail', html: `<table><tr><th>Éléments</th><th>Finalité</th><th>Conservation</th></tr><tr><td>Adresse e-mail, nom affiché, contenu du message et pièces jointes</td><td>Lecture et traitement des demandes, consultation sur projet, gestion des requêtes</td><td>Supprimés sans délai une fois la demande traitée. Si un contrat suit, conservés pendant la durée du contrat et toute période exigée par la loi</td></tr></table><p>Les e-mails de demande sont reçus et conservés dans Gmail, fourni par Google LLC.</p>` },
      { id: 'apps', h: '4. Nos applications', html: `<p>Applications concernées : Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Toutes sont bientôt disponibles.</p><div class="table-scroll"><table><tr><th>Application</th><th>Données traitées</th><th>Lieu</th><th>Envoi externe</th></tr><tr><td>Roll Tidy</td><td>Photos et vidéos des photothèques dont vous accordez l’accès</td><td>Sur l’appareil</td><td>Aucun</td></tr><tr><td>Roll Flick</td><td>Photos des photothèques dont vous accordez l’accès</td><td>Sur l’appareil</td><td>Aucun</td></tr><tr><td>Space Map</td><td>Noms, tailles et types des fichiers des dossiers que vous choisissez</td><td>Sur l’appareil</td><td>Aucun</td></tr><tr><td>Dupeless</td><td>Tailles de fichiers et empreintes de contenu des dossiers que vous choisissez</td><td>Sur l’appareil</td><td>Aucun</td></tr><tr><td>Archive Fix</td><td>Archives et fichiers que vous choisissez</td><td>Sur l’appareil</td><td>Aucun</td></tr></table></div><ul><li>Les applications ne se connectent pas au réseau et n’envoient jamais de fichiers ni de photos.</li><li>Pas de compte, de publicité, d’analyse, de rapport de plantage ni de suivi.</li><li>Les fichiers et photos supprimés vont à la corbeille du système (« Supprimés récemment » sur iOS) et peuvent être restaurés.</li><li>Les réglages, les enregistrements de progression (Roll Flick) et les caches d’analyse des photos (Roll Tidy : empreinte, netteté, luminosité) restent dans le stockage de l’application sur l’appareil.</li><li>Les paiements sont gérés par chaque boutique d’applications. EarnToLink ne reçoit jamais les données de paiement.</li></ul>` },
      { id: 'projects', h: '5. Projets clients', html: `<p>Lorsqu’un projet client implique les données personnelles du client, l’étendue et le mode de traitement suivent le contrat et l’accord de traitement des données conclus avec ce client.</p>` },
      { id: 'third', h: '6. Communication à des tiers', html: `<p>Nous ne communiquons pas d’informations personnelles à des tiers, sauf lorsque la loi l’exige.</p>` },
      { id: 'rights', h: '7. Vos droits', html: `<p>Vous pouvez à tout moment demander l’accès, la rectification, la suppression ou la suspension du traitement. Envoyez vos demandes à ${mail} ; nous y donnons suite sans délai.</p>` },
      { id: 'destroy', h: '8. Suppression', html: `<p>Les informations personnelles sont détruites sans délai à l’expiration de leur durée de conservation ou une fois leur finalité atteinte. Les fichiers électroniques sont supprimés de manière irrécupérable.</p>` },
      { id: 'security', h: '9. Sécurité', html: `<p>L’accès à la messagerie des demandes est limité au représentant, et nous ne collectons pas plus d’informations personnelles que nécessaire.</p>` },
      { id: 'officer', h: '10. Responsable de la protection des informations personnelles', html: `<table><tr><th>Nom</th><td>Juhwan Ma (représentant)</td></tr><tr><th>E-mail</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Recours (Corée)', html: `<ul><li>Centre de signalement des atteintes aux informations personnelles : privacy.kisa.or.kr, 118 (en Corée)</li><li>Comité de médiation des litiges relatifs aux informations personnelles : www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Modifications', html: `<p>Cette politique est en vigueur à compter du 10 octobre 2026. Les modifications seront publiées sur cette page avec leur date d’entrée en vigueur.</p>` },
    ],
  },

  terms: {
    title: 'Conditions d’utilisation',
    desc: 'Conditions d’utilisation du site web d’EarnToLink. En vigueur le 10 octobre 2026.',
    eyebrow: 'Politique', lead: 'En vigueur le 10 octobre 2026',
    sections: [
      { id: 'purpose', h: '1. Objet', html: '<p>Ces conditions fixent les modalités d’utilisation de earntolink.com, le site web exploité par EarnToLink.</p>' },
      { id: 'content', h: '2. Droits sur le contenu', html: '<p>Les droits sur les textes, images et codes de ce site appartiennent à EarnToLink. Les marques de tiers affichées ici appartiennent à leurs propriétaires.</p>' },
      { id: 'accuracy', h: '3. Informations sur les produits et services', html: '<p>Le statut des produits, les fonctionnalités et les descriptions de services sont exacts à la date de rédaction. Les fonctionnalités, prix et calendriers des produits pas encore publiés peuvent changer.</p>' },
      { id: 'projects', h: '4. Contrats de projet', html: '<p>Les services de développement, d’automatisation, de localisation, de lancement et d’exploitation suivent le contrat de chaque projet. En cas de différence entre ces conditions et un contrat, le contrat prévaut.</p>' },
      { id: 'apps', h: '5. Utilisation des applications', html: '<p>Chaque application est également soumise aux conditions de la boutique par laquelle elle est distribuée (App Store, Google Play, Microsoft Store et autres) et à ses propres mentions.</p>' },
      { id: 'links', h: '6. Liens externes', html: '<p>Les sites externes sont régis par leurs propres conditions et politiques.</p>' },
      { id: 'liability', h: '7. Limitation de responsabilité', html: '<p>Dans la mesure permise par la loi, EarnToLink n’est pas responsable des dommages indirects résultant de l’utilisation de ce site.</p>' },
      { id: 'law', h: '8. Droit applicable', html: '<p>Ces conditions sont régies par le droit de la République de Corée.</p>' },
      { id: 'contact', h: '9. Contact', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Relier les marchés et le monde.', s: 'Développement de produits · Transformation par l’IA · Localisation<br>Lancement en boutique d’applications · E-commerce · Exploitation', tags: ['Web · App · Bureau', 'IA · Automatisation', '14 langues'] },
};
