// Français. Même structure que en.mjs. Apostrophes typographiques (’), pas de tiret cadratin.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 langues (anglais, coréen, japonais, chinois simplifié et traditionnel, allemand, français, espagnol, portugais, italien)';
const ONDEVICE = 'Sur l’appareil · aucune connexion réseau';
const ONE_TIME = 'Achat unique · ₩10,000 maximum';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Votre partenaire de croissance pour les revenus publicitaires",
  translationNote: 'Cette page est une traduction. En cas de divergence avec l’original coréen, l’original coréen prévaut.',

  ui: {
    skip: 'Aller au contenu', menu: 'Menu', language: 'Langue', mainNav: 'Principale', breadcrumb: 'Fil d’Ariane', toc: 'Sommaire', homeAria: 'Accueil EarnToLink',
    nav: { services: "Services", products: 'Produits', about: 'À propos', principles: 'Notre méthode', news: 'Actualités', contact: 'Contact' },
    home: 'Accueil', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', rss: 'RSS',
    footer: { services: "Services", products: 'Produits', company: 'Entreprise', policy: 'Politiques' },
    biz: { name: 'Nom commercial', rep: 'Représentant', no: 'N° d’enregistrement de l’entreprise', tax: 'Régime fiscal', kinds: 'Activité', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Tous droits réservés.',
    view: 'Détails', all: 'Tous les produits', allServices: "Tous les services", email: 'E-mail', mailBtn: 'Nous écrire', projectBtn: "Prendre rendez-vous",
    platform: 'Plateforme', status: 'Statut', features: 'Fonctionnalités', specs: 'Caractéristiques', related: 'Autres produits', privacyNote: 'Confidentialité',
    productIllustration: 'Illustration du produit : ',
    heroLabel: 'Illustration d’un tableau de bord des revenus publicitaires des sites web, des applications et du e-commerce',
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
    "title": "EarnToLink | Conseil en revenus publicitaires pour sites web, applications et plateformes e-commerce",
    "desc": "EarnToLink est un cabinet de conseil en revenus publicitaires. Nous analysons et structurons la façon dont les sites web, les applications et les plateformes e-commerce gagnent de l’argent grâce à la publicité : choix et paramétrage des plateformes, conformité aux règles et à la vie privée, retail media et pilotage publicitaire au quotidien.",
    "eyebrow": "Conseil en revenus publicitaires pour les entreprises",
    "h1": "Votre partenaire de croissance<br>pour les revenus publicitaires",
    "lead": "Nous aidons les sites web, les applications et les plateformes e-commerce à tirer des revenus réguliers de la publicité. Nous faisons le point sur votre situation, choisissons les plateformes et les emplacements publicitaires adaptés, puis restons à vos côtés pour les revues de conformité et le pilotage quotidien.",
    "meta": [
      "Sites web et médias",
      "Applications mobiles",
      "E-commerce et retail media"
    ],
    "stats": [
      [
        "6",
        "Domaines de conseil"
      ],
      [
        "3",
        "Canaux de revenus : web, application, e-commerce"
      ],
      [
        "6",
        "Étapes dans chaque mission"
      ],
      [
        "14",
        "Langues du site"
      ]
    ],
    "services": {
      "eyebrow": "Services",
      "title": "Six domaines de conseil",
      "text": "Du diagnostic au paramétrage des plateformes, des revues de conformité au pilotage. Ne retenez que ce dont vous avez besoin."
    },
    "why": {
      "eyebrow": "Pourquoi EarnToLink",
      "title": "Revenus et confiance, préservés ensemble",
      "text": "Six principes appliqués à chaque mission."
    },
    "how": {
      "eyebrow": "Notre méthode",
      "title": "Du premier échange au pilotage continu",
      "text": "Six étapes, chacune validée par les chiffres avant de passer à la suivante."
    },
    "co": {
      "eyebrow": "Entreprise",
      "title": "EarnToLink",
      "text": "Entreprise individuelle. Conseil en revenus publicitaires et développement logiciel."
    },
    "news": {
      "eyebrow": "Actualités",
      "title": "Dernières actualités"
    }
  },

  services: {
    "title": "Services",
    "desc": "Services d’EarnToLink : diagnostic et stratégie de revenus publicitaires, monétisation de sites et de médias, monétisation d’applications, retail media et développement de plateformes publicitaires, conformité aux règles publicitaires et à la vie privée, pilotage et reporting publicitaires.",
    "eyebrow": "Services",
    "h1": "Services",
    "lead": "Six domaines. Choisissez uniquement ceux dont vous avez besoin.",
    "whoLabel": "Pour vous si",
    "scopeLabel": "Ce que nous faisons",
    "deliverLabel": "Ce que vous recevez",
    "otherLabel": "Autres services",
    "items": {
      "strategy": {
        "name": "Diagnostic et stratégie de revenus publicitaires",
        "short": "Nous passons en revue votre trafic, vos emplacements publicitaires, le paramétrage des plateformes et vos indicateurs de revenus, puis nous fixons le cap de votre modèle économique.",
        "lead": "Nous commençons par identifier d’où viennent vos revenus publicitaires et où ils se perdent. Les chiffres sont consignés sur une même base de référence, puis nous définissons les priorités et un plan d’action.",
        "who": [
          "Vous diffusez de la publicité, mais gagnez moins que prévu",
          "Vous hésitez à changer de plateforme publicitaire ou à en ajouter une",
          "Vous devez intégrer les revenus publicitaires à votre plan d’affaires"
        ],
        "scope": [
          [
            "État des lieux",
            "Sources de trafic, emplacements publicitaires, paramétrage des plateformes et circuit des revenus."
          ],
          [
            "Indicateurs clés",
            "Valeurs de référence du RPM de page, du taux d’impressions, du taux de remplissage et de la visibilité."
          ],
          [
            "Modèle de revenus",
            "Le bon dosage entre publicité, affiliation, abonnements et vente directe d’espaces."
          ],
          [
            "Plan d’action",
            "Priorités, calendrier et impact attendu de chaque amélioration."
          ]
        ],
        "deliver": [
          "Rapport de diagnostic",
          "Tableau des indicateurs de référence",
          "Recommandations sur le modèle de revenus",
          "Plan d’action par phases"
        ]
      },
      "web": {
        "name": "Monétisation de sites web et de médias",
        "short": "Préparation à la validation, conception des emplacements publicitaires et équilibre entre vitesse des pages et revenus pour les blogs, les sites d’actualité et les sites d’information.",
        "lead": "Plutôt que d’ajouter des publicités, nous cherchons les emplacements qui n’interrompent pas la lecture. Nous couvrons tout, de la préparation à la validation jusqu’à la conception des emplacements et au paramétrage programmatique.",
        "who": [
          "Vous préparez la validation de votre site par une plateforme publicitaire",
          "La publicité a ralenti vos pages ou fait monter le taux de rebond",
          "Vous souhaitez faire travailler plusieurs régies ensemble"
        ],
        "scope": [
          [
            "Préparation à la validation",
            "Vérification de la structure du site, des pages obligatoires et de la qualité des contenus, puis dépôt de la demande."
          ],
          [
            "Conception des emplacements",
            "Positions, formats et espacements qui respectent le fil du contenu."
          ],
          [
            "Vitesse des pages",
            "Chargement différé et prévention des décalages de mise en page pour garder des pages rapides."
          ],
          [
            "Paramétrage programmatique",
            "Ad server, header bidding et règles de prix plancher."
          ]
        ],
        "deliver": [
          "Liste de contrôle pour la validation",
          "Plan d’emplacements",
          "Paramétrage publicitaire et guide de mise en œuvre",
          "Rapport comparatif avant et après"
        ]
      },
      "app": {
        "name": "Monétisation d’applications",
        "short": "Formats publicitaires, médiation et fréquence dans votre application mobile, pensés selon l’usage réel de vos utilisateurs.",
        "lead": "Nous déterminons quand et où s’affichent les bannières, les interstitiels et les publicités récompensées, et nous faisons croître les revenus sans perdre de vue la rétention.",
        "who": [
          "Vous intégrez de la publicité à votre application pour la première fois",
          "Les notes ou la rétention ont baissé depuis l’arrivée des publicités",
          "Vous voulez combiner plusieurs régies grâce à la médiation"
        ],
        "scope": [
          [
            "Conception des formats",
            "Emplacement et moment d’affichage des bannières, interstitiels, publicités récompensées et publicités natives."
          ],
          [
            "Médiation",
            "Priorités et paramétrage des enchères entre les régies publicitaires."
          ],
          [
            "Fréquence et expérience",
            "Plafonds de fréquence, protection de la première session et utilisateurs payants sans publicité."
          ],
          [
            "Publicité et achats intégrés",
            "Offres de suppression des publicités et articulation entre publicités récompensées et achats."
          ]
        ],
        "deliver": [
          "Carte des emplacements publicitaires",
          "Plan de paramétrage de la médiation",
          "Document des règles de fréquence",
          "Comparatif rétention et revenus"
        ]
      },
      "retail": {
        "name": "Retail media et développement de plateformes publicitaires",
        "short": "Nous aidons les places de marché et les plateformes à bâtir des offres et une organisation publicitaires, afin que vendeurs et marques puissent y faire de la publicité.",
        "lead": "Nous transformons le trafic et les données de votre plateforme en offres publicitaires, et définissons avec vous la tarification, la vente et le reporting de performance.",
        "who": [
          "Vous voulez lancer une activité publicitaire sur votre place de marché ou votre plateforme",
          "Vous vendez et facturez à la main la publicité de vos vendeurs",
          "Les annonceurs réclament des rapports qui prouvent les résultats"
        ],
        "scope": [
          [
            "Conception des offres publicitaires",
            "Espaces vendables : tête de recherche, produits sponsorisés, bannières et e-mailing."
          ],
          [
            "Tarification et vente",
            "Offres aux enchères, à prix fixe et à la durée, avec leurs règles de prix."
          ],
          [
            "Données et mesure",
            "Impressions, clics et attribution des achats mesurés dans le respect de la vie privée."
          ],
          [
            "Modèle opérationnel",
            "Accueil des annonceurs, validation des annonces, facturation et reporting de performance."
          ]
        ],
        "deliver": [
          "Catalogue des offres publicitaires et grille tarifaire",
          "Modèle de rentabilité de l’activité publicitaire",
          "Standards de mesure et modèles de rapports",
          "Procédures opérationnelles"
        ]
      },
      "policy": {
        "name": "Conformité aux règles publicitaires et à la vie privée",
        "short": "Revue des règles, traitement des refus, gestion du consentement, ads.txt et politiques de confidentialité.",
        "lead": "Un compte en règle passe avant les revenus. Nous repérons tôt les risques de non-conformité et, lorsqu’une demande est refusée ou qu’un compte est limité, nous en cherchons la cause et y répondons.",
        "who": [
          "Votre demande de validation publicitaire a été refusée ou votre compte limité",
          "Vous devez gérer le consentement de visiteurs d’autres régions",
          "Votre politique de confidentialité doit être mise à jour avant la mise en ligne des publicités"
        ],
        "scope": [
          [
            "Revue des règles",
            "Risques liés aux contenus, aux emplacements publicitaires et aux sources de trafic."
          ],
          [
            "Refus et limitations",
            "Analyse des causes, corrections et demande de réexamen."
          ],
          [
            "Gestion du consentement",
            "Bannières de consentement par région, reliées au paramétrage publicitaire."
          ],
          [
            "Fichiers et documents obligatoires",
            "ads.txt, app-ads.txt, politique de confidentialité et information sur les cookies."
          ]
        ],
        "deliver": [
          "Liste de contrôle des règles",
          "Historique des réponses",
          "Paramétrage de la gestion du consentement",
          "Fichiers et documents obligatoires"
        ]
      },
      "ops": {
        "name": "Pilotage publicitaire et conseil en reporting",
        "short": "Chaque mois, nous analysons les indicateurs de revenus, menons des tests et corrigeons ce qui doit l’être, y compris le trafic invalide et les écarts de paiement.",
        "lead": "Les revenus publicitaires ne se règlent pas en un seul paramétrage. Nous examinons les indicateurs chaque mois et ne conservons que les changements validés par des tests.",
        "who": [
          "Vos revenus publicitaires varient fortement d’un mois à l’autre",
          "Vous consolidez à la main les rapports de plusieurs plateformes",
          "Personne dans votre équipe ne pilote la publicité"
        ],
        "scope": [
          [
            "Revue mensuelle",
            "Évolution des revenus, des impressions, des prix et du taux de remplissage, et leurs causes."
          ],
          [
            "Tests",
            "Tests comparatifs d’emplacements, de formats publicitaires et de règles de prix."
          ],
          [
            "Reporting unifié",
            "Les revenus de toutes les plateformes réunis dans un seul rapport."
          ],
          [
            "Contrôles qualité",
            "Trafic invalide, qualité des publicités et écarts de paiement."
          ]
        ],
        "deliver": [
          "Rapport mensuel de pilotage",
          "Journal des tests",
          "Rapport unifié",
          "Liste priorisée des améliorations"
        ]
      }
    }
  },

  why: [
    [
      "Des revenus sans dégrader l’expérience",
      "Plutôt que d’ajouter des publicités, nous cherchons les emplacements qui gardent les pages rapides et le parcours fluide."
    ],
    [
      "Mesurer plutôt que supposer",
      "Nous relevons les chiffres de départ avant de commencer et comparons chaque changement sur la même base."
    ],
    [
      "Un conseil indépendant",
      "Nous ne percevons aucune commission des plateformes publicitaires : les options sont comparées à armes égales."
    ],
    [
      "La conformité d’abord",
      "Nous ne développons les revenus que dans le respect des règles publicitaires et de la vie privée. Pas de clics provoqués, pas de trafic invalide."
    ],
    [
      "Vos comptes, vos données",
      "Les comptes publicitaires, les coordonnées de paiement et les rapports sont créés et conservés à votre nom."
    ],
    [
      "Un point chaque semaine",
      "Chaque semaine, nous vous indiquons ce qui a changé, l’évolution des chiffres et la suite prévue."
    ]
  ],

  steps: [
    [
      "Premier échange",
      "Votre service, votre volume de trafic et vos objectifs."
    ],
    [
      "Diagnostic",
      "Revue des emplacements, du paramétrage et des indicateurs de revenus, avec relevé des valeurs de référence."
    ],
    [
      "Conception",
      "Plateformes publicitaires, emplacements et plan de conformité."
    ],
    [
      "Paramétrage et tests",
      "Changements appliqués puis comparés avant et après."
    ],
    [
      "Validation et lancement",
      "Revues de conformité, gestion du consentement et fichiers obligatoires."
    ],
    [
      "Pilotage",
      "Revues mensuelles, tests et rapports."
    ]
  ],

  cta: {
    "title": "Parlons de vos revenus publicitaires",
    "text": "Écrivez-nous en indiquant votre site ou votre application, votre trafic mensuel et le problème que vous rencontrez."
  },

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
    "title": "À propos",
    "desc": "À propos d’EarnToLink : un cabinet de conseil qui aide les sites web, les applications et les plateformes e-commerce à gagner de l’argent grâce à la publicité. Mission, services, principes et informations légales.",
    "eyebrow": "À propos",
    "h1": "EarnToLink",
    "lead": "EarnToLink est un cabinet de conseil en revenus publicitaires qui conçoit la façon dont les entreprises tirent profit de la publicité.",
    "mission": {
      "eyebrow": "Mission",
      "title": "Une publicité qui renforce l’activité",
      "body": [
        "De nombreuses entreprises proposent de bons contenus et de bons services, mais gagnent peu avec la publicité. Les emplacements ne conviennent pas, le paramétrage est dépassé ou un problème de conformité freine les revenus.",
        "EarnToLink mesure votre point de départ, choisit les plateformes et les emplacements publicitaires adaptés, et accompagne le pilotage quotidien dans le respect des règles publicitaires et de la vie privée. Le résultat de chaque changement vous est présenté sur la même base de référence.",
        "Forts de notre propre expérience de création et d’exploitation de sites web et d’applications, nous défendons un principe : la monétisation ne doit jamais dégrader l’expérience des utilisateurs."
      ]
    },
    "do": {
      "eyebrow": "Services",
      "title": "Ce que nous faisons",
      "text": "Activités déclarées : développement et fourniture de logiciels d’application (principale), vente au détail par e-commerce et intermédiation de vente au détail par e-commerce."
    },
    "why": {
      "eyebrow": "Principes",
      "title": "Nos principes"
    },
    "info": {
      "eyebrow": "Entreprise",
      "title": "Informations sur l’entreprise"
    }
  },

  principles: {
    "title": "Notre méthode",
    "desc": "La méthode d’EarnToLink : revenus et expérience utilisateur en équilibre, résultats mesurés, conseil indépendant et conformité. Étapes et conditions contractuelles.",
    "eyebrow": "Notre méthode",
    "h1": "Notre méthode",
    "lead": "Principes, étapes et conditions contractuelles.",
    "why": {
      "eyebrow": "Principes",
      "title": "Six principes",
      "text": "Appliqués à chaque mission."
    },
    "steps": {
      "eyebrow": "Déroulement",
      "title": "Étapes",
      "text": "Du premier échange au pilotage."
    },
    "terms": {
      "eyebrow": "Contrat",
      "title": "Conditions contractuelles",
      "rows": [
        [
          "Missions",
          "Chaque mission fait l’objet d’un contrat qui précise le périmètre, le calendrier, les honoraires et les modalités de paiement"
        ],
        [
          "Évolution du périmètre",
          "Les modifications et leur coût sont convenus avant de poursuivre le travail"
        ],
        [
          "Propriété",
          "Les comptes publicitaires, les rapports et les documents de paramétrage restent à votre nom"
        ],
        [
          "Honoraires",
          "Aucune commission des plateformes publicitaires · les honoraires de conseil sont indiqués au contrat"
        ]
      ]
    }
  },

  contact: {
    "title": "Contact",
    "desc": "Contactez EarnToLink pour du conseil en revenus publicitaires, nos produits, la confidentialité ou un partenariat. hello@earntolink.com",
    "eyebrow": "Contact",
    "h1": "Contact",
    "lead": "Nous traitons les demandes par e-mail et répondons en coréen ou en anglais.",
    "topics": [
      [
        "chart",
        "Conseil",
        "Diagnostic de revenus publicitaires, monétisation de sites et d’applications, retail media, questions de conformité, conseil en pilotage"
      ],
      [
        "package",
        "Produits",
        "Fonctionnalités, dates de sortie et anomalies de nos propres applications"
      ],
      [
        "receipt",
        "Paiements",
        "Les paiements et remboursements des applications suivent la politique de chaque boutique d’applications"
      ],
      [
        "shield",
        "Confidentialité",
        "Demandes d’accès, de rectification, de suppression ou de limitation du traitement des données personnelles"
      ],
      [
        "users",
        "Partenariats",
        "Propositions de collaboration et autres propositions"
      ]
    ],
    "brief": {
      "title": "Informations utiles à nous transmettre",
      "items": [
        "Ce que vous exploitez (site web, application ou plateforme e-commerce) et son adresse",
        "Nombre de visiteurs mensuels ou d’utilisateurs actifs",
        "Les plateformes publicitaires utilisées aujourd’hui et les difficultés rencontrées",
        "Le calendrier souhaité"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink se recentre sur le conseil en revenus publicitaires",
      "summary": "Diagnostic et stratégie, monétisation de sites et d’applications, retail media, conformité et conseil en pilotage.",
      "body": [
        "EarnToLink a recentré ses services sur le conseil en revenus publicitaires.",
        "Nous proposons désormais six services : diagnostic et stratégie de revenus publicitaires, monétisation de sites web et de médias, monétisation d’applications, retail media et développement de plateformes publicitaires, conformité aux règles publicitaires et à la vie privée, pilotage publicitaire et conseil en reporting.",
        "Pour prendre rendez-vous, écrivez à hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com est en ligne",
      "summary": "Le site d’EarnToLink est en ligne en 14 langues.",
      "body": [
        "Le site d’EarnToLink, earntolink.com, est désormais en ligne.",
        "Il présente nos services, nos produits maison, les informations sur l’entreprise, la politique de confidentialité et les coordonnées.",
        "Il est disponible en coréen, anglais, japonais, chinois (simplifié et traditionnel), espagnol, français, allemand, portugais, italien, vietnamien, indonésien, thaï et russe."
      ]
    },
    "product-lineup": {
      "title": "Nos produits maison",
      "summary": "Deux applications mobiles et trois applications de bureau.",
      "body": [
        "L’état actuel de nos produits maison.",
        "Les applications mobiles Roll Tidy et Roll Flick et les applications de bureau Space Map, Dupeless et Archive Fix sont bientôt disponibles."
      ]
    }
  },
  newsPage: {
    "title": "Actualités",
    "desc": "Actualités d’EarnToLink : évolution des services, lancement du site et état des produits."
  },

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
      { id: 'accuracy', h: '3. Informations sur les produits et services', html: "<p>L’état des produits, leurs fonctionnalités et la description des services sont exacts à la date de rédaction. Les fonctionnalités, les prix et les calendriers des produits non encore sortis peuvent évoluer.</p>" },
      { id: 'projects', h: '4. Contrats de projet', html: "<p>Les prestations de diagnostic, de conseil, de paramétrage publicitaire et de conseil en pilotage sont régies par le contrat propre à chaque mission. En cas de divergence entre les présentes conditions et un contrat, le contrat prévaut. Les revenus publicitaires dépendent du marché publicitaire et des règles des plateformes ; les estimations figurant dans nos diagnostics ou nos propositions ne constituent pas une garantie.</p>" },
      { id: 'apps', h: '5. Utilisation des applications', html: '<p>Chaque application est également soumise aux conditions de la boutique par laquelle elle est distribuée (App Store, Google Play, Microsoft Store et autres) et à ses propres mentions.</p>' },
      { id: 'links', h: '6. Liens externes', html: '<p>Les sites externes sont régis par leurs propres conditions et politiques.</p>' },
      { id: 'liability', h: '7. Limitation de responsabilité', html: '<p>Dans la mesure permise par la loi, EarnToLink n’est pas responsable des dommages indirects résultant de l’utilisation de ce site.</p>' },
      { id: 'law', h: '8. Droit applicable', html: '<p>Ces conditions sont régies par le droit de la République de Corée.</p>' },
      { id: 'contact', h: '9. Contact', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Votre partenaire de croissance pour les revenus publicitaires",
    "s": "Diagnostic de revenus publicitaires · Monétisation web et applications<br>Retail media · Conformité · Pilotage",
    "tags": [
      "Sites web et médias",
      "Applications mobiles",
      "E-commerce"
    ]
  },
};
