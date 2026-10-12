// Português (Brasil). Mesma estrutura que ko.mjs / en.mjs. Sem travessões longos.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 idiomas (inglês, coreano, japonês, chinês simplificado e tradicional, alemão, francês, espanhol, português, italiano)';
const ONDEVICE = 'No dispositivo · sem conexão com a rede';
const ONE_TIME = 'Compra única · ₩10,000 ou menos';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Seu parceiro de crescimento em receita publicitária",
  translationNote: 'Esta página é uma tradução. Se houver diferença em relação ao original em coreano, prevalece o original em coreano.',

  ui: {
    skip: 'Ir para o conteúdo', menu: 'Menu', language: 'Idioma', mainNav: 'Principal', breadcrumb: 'Caminho de navegação', toc: 'Conteúdo', homeAria: 'Página inicial da EarnToLink',
    nav: { services: "Serviços", products: 'Produtos', about: 'Sobre', principles: 'Como trabalhamos', news: 'Novidades', contact: 'Contato' },
    home: 'Início', privacy: 'Política de Privacidade', terms: 'Termos', rss: 'RSS',
    footer: { services: "Serviços", products: 'Produtos', company: 'Empresa', policy: 'Políticas' },
    biz: { name: 'Nome empresarial', rep: 'Representante', no: 'N.º de registro da empresa', tax: 'Regime tributário', kinds: 'Atividade', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Todos os direitos reservados.',
    view: 'Detalhes', all: 'Todos os produtos', allServices: "Todos os serviços", email: 'E-mail', mailBtn: 'Envie um e-mail', projectBtn: "Agendar uma consultoria",
    platform: 'Plataforma', status: 'Status', features: 'Recursos', specs: 'Especificações', related: 'Outros produtos', privacyNote: 'Privacidade',
    productIllustration: 'Ilustração do produto: ',
    heroLabel: 'Ilustração de um painel com a receita de anúncios de sites, apps e comércio eletrônico',
    newsFeedTitle: 'Novidades da EarnToLink', newsFeedDesc: 'Novidades da EarnToLink (언투링크)',
    notFound: { title: 'Página não encontrada', text: 'O endereço mudou ou a página não existe.', home: 'Ir para o início' },
  },

  status: { soon: 'Em breve', dev: 'Em desenvolvimento', live: 'Disponível' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Contribuinte geral (Coreia)',
    form: 'Tipo de empresa', formValue: 'Empresário individual (Coreia)', kindsLabel: 'Atividade registrada', site: 'Site',
    kinds: ['Desenvolvimento e fornecimento de software aplicativo (principal)', 'Varejo por comércio eletrônico', 'Intermediação de varejo por comércio eletrônico'],
  },

  categories: {
    mobile: { name: 'Apps para celular', plat: 'Android · iOS' },
    desktop: { name: 'Apps para computador', plat: 'macOS · Windows' },
  },

  home: {
    "title": "EarnToLink | Consultoria de receita publicitária para sites, apps e plataformas de e-commerce",
    "desc": "A EarnToLink é uma consultoria de receita publicitária. Avaliamos e estruturamos como sites, apps e plataformas de e-commerce geram receita com anúncios: escolha e configuração de plataformas, conformidade com políticas e privacidade, retail media e operação publicitária contínua.",
    "eyebrow": "Consultoria de receita publicitária para empresas",
    "h1": "Seu parceiro de crescimento<br>em receita publicitária",
    "lead": "Ajudamos sites, apps e plataformas de e-commerce a ter receita constante com publicidade. Analisamos o cenário atual, escolhemos as plataformas e os espaços de anúncio mais adequados e acompanhamos sua empresa nas revisões de políticas e na operação do dia a dia.",
    "meta": [
      "Sites e portais de mídia",
      "Apps para celular",
      "E-commerce e retail media"
    ],
    "stats": [
      [
        "6",
        "Áreas de consultoria"
      ],
      [
        "3",
        "Canais de receita: web, app e e-commerce"
      ],
      [
        "6",
        "Etapas em cada projeto"
      ],
      [
        "14",
        "Idiomas do site"
      ]
    ],
    "services": {
      "eyebrow": "Serviços",
      "title": "Seis áreas de consultoria",
      "text": "Do diagnóstico à configuração das plataformas, das revisões de políticas à operação. Contrate apenas o que fizer sentido para você."
    },
    "why": {
      "eyebrow": "Por que a EarnToLink",
      "title": "Receita e confiança, protegidas juntas",
      "text": "Seis princípios que seguimos em todos os projetos."
    },
    "how": {
      "eyebrow": "Como trabalhamos",
      "title": "Da primeira conversa à operação contínua",
      "text": "Seis etapas, e cada uma é validada com números antes de seguirmos adiante."
    },
    "co": {
      "eyebrow": "Empresa",
      "title": "EarnToLink",
      "text": "Empresa individual. Consultoria de receita publicitária e desenvolvimento de software."
    },
    "news": {
      "eyebrow": "Novidades",
      "title": "Últimas novidades"
    }
  },

  services: {
    "title": "Serviços",
    "desc": "Serviços da EarnToLink: diagnóstico e estratégia de receita publicitária, monetização de sites e portais, monetização de apps, retail media e desenvolvimento de plataformas de anúncios, conformidade com políticas e privacidade, operação e relatórios de publicidade.",
    "eyebrow": "Serviços",
    "h1": "Serviços",
    "lead": "Seis áreas. Escolha apenas as que você precisa.",
    "whoLabel": "Ideal quando",
    "scopeLabel": "O que fazemos",
    "deliverLabel": "O que você recebe",
    "otherLabel": "Outros serviços",
    "items": {
      "strategy": {
        "name": "Diagnóstico e estratégia de receita publicitária",
        "short": "Analisamos seu tráfego, seus espaços de anúncio, as configurações das plataformas e os indicadores de receita, e definimos o caminho do seu modelo de receita.",
        "lead": "Primeiro descobrimos de onde vem a sua receita com anúncios e onde ela se perde. Registramos os números sobre uma mesma base de comparação e, em seguida, definimos prioridades e um plano de ação.",
        "who": [
          "Você exibe anúncios, mas ganha menos do que esperava",
          "Está avaliando trocar de plataforma de anúncios ou adicionar outra",
          "Precisa incluir a receita publicitária no seu plano de negócios"
        ],
        "scope": [
          [
            "Análise da situação atual",
            "Origem do tráfego, espaços de anúncio, configurações das plataformas e fluxo da receita."
          ],
          [
            "Indicadores-chave",
            "Referências de RPM por página, taxa de impressões, taxa de preenchimento e visibilidade."
          ],
          [
            "Modelo de receita",
            "A combinação certa de anúncios, afiliados, assinaturas e venda direta de espaços."
          ],
          [
            "Plano de ação",
            "Prioridades, cronograma e impacto esperado de cada melhoria."
          ]
        ],
        "deliver": [
          "Relatório de diagnóstico",
          "Tabela de referência dos indicadores",
          "Recomendações para o modelo de receita",
          "Plano de ação em fases"
        ]
      },
      "web": {
        "name": "Monetização de sites e portais de mídia",
        "short": "Preparação para a aprovação, desenho dos espaços de anúncio e equilíbrio entre velocidade da página e receita em blogs, portais de notícias e sites de conteúdo.",
        "lead": "Em vez de colocar mais anúncios, buscamos posições que não atrapalhem a leitura. Cuidamos de tudo, da preparação para a aprovação ao desenho dos espaços e à configuração programática.",
        "who": [
          "Você está se preparando para a análise de uma plataforma de anúncios",
          "Os anúncios deixaram suas páginas lentas ou aumentaram a taxa de rejeição",
          "Quer trabalhar com várias redes de anúncios ao mesmo tempo"
        ],
        "scope": [
          [
            "Preparação para a aprovação",
            "Verificação da estrutura do site, das páginas obrigatórias e da qualidade do conteúdo, seguida do pedido de aprovação."
          ],
          [
            "Desenho dos espaços",
            "Posições, tamanhos e espaçamentos que acompanham o fluxo do conteúdo."
          ],
          [
            "Velocidade da página",
            "Carregamento sob demanda e prevenção de mudanças de layout para manter as páginas rápidas."
          ],
          [
            "Configuração programática",
            "Ad server, header bidding e regras de preço mínimo."
          ]
        ],
        "deliver": [
          "Checklist de aprovação",
          "Plano de posicionamento dos anúncios",
          "Configurações de anúncios e guia de implementação",
          "Relatório comparativo de antes e depois"
        ]
      },
      "app": {
        "name": "Monetização de apps",
        "short": "Formatos de anúncio, mediação e frequência no seu app para celular, planejados conforme o jeito que as pessoas o usam.",
        "lead": "Definimos quando e onde aparecem banners, anúncios intersticiais e anúncios premiados, e aumentamos a receita sem perder de vista a retenção.",
        "who": [
          "Você vai incluir anúncios no seu app pela primeira vez",
          "As avaliações ou a retenção caíram depois da chegada dos anúncios",
          "Quer combinar várias redes de anúncios por meio de mediação"
        ],
        "scope": [
          [
            "Desenho dos formatos",
            "Posição e momento de banners, intersticiais, anúncios premiados e anúncios nativos."
          ],
          [
            "Mediação",
            "Prioridade e configuração de lances entre as redes de anúncios."
          ],
          [
            "Frequência e experiência",
            "Limites de frequência, proteção da primeira sessão e usuários pagantes sem anúncios."
          ],
          [
            "Anúncios e compras no app",
            "Produtos para remover anúncios e a combinação entre anúncios premiados e compras."
          ]
        ],
        "deliver": [
          "Mapa de posicionamento dos anúncios",
          "Plano de configuração da mediação",
          "Documento com as regras de frequência",
          "Comparativo de retenção e receita"
        ]
      },
      "retail": {
        "name": "Retail media e desenvolvimento de plataformas de anúncios",
        "short": "Ajudamos marketplaces e plataformas a criar produtos e uma operação de publicidade para que vendedores e marcas possam anunciar neles.",
        "lead": "Transformamos o tráfego e os dados da sua plataforma em produtos de publicidade e definimos com você preços, vendas e relatórios de desempenho.",
        "who": [
          "Você quer abrir um negócio de publicidade no seu marketplace ou plataforma",
          "Vende e cobra os anúncios dos vendedores manualmente",
          "Os anunciantes pedem relatórios que comprovem os resultados"
        ],
        "scope": [
          [
            "Desenho dos produtos de anúncio",
            "Espaços vendáveis, como topo da busca, produtos patrocinados, banners e e-mail."
          ],
          [
            "Preços e vendas",
            "Produtos em leilão, de preço fixo e por período, com regras de precificação."
          ],
          [
            "Dados e mensuração",
            "Impressões, cliques e atribuição de compras medidos dentro das regras de privacidade."
          ],
          [
            "Modelo de operação",
            "Cadastro de anunciantes, revisão de anúncios, cobrança e relatórios de desempenho."
          ]
        ],
        "deliver": [
          "Catálogo de produtos de anúncio e tabela de preços",
          "Modelo de resultados do negócio de publicidade",
          "Padrões de mensuração e modelos de relatório",
          "Procedimentos de operação"
        ]
      },
      "policy": {
        "name": "Conformidade com políticas de anúncios e privacidade",
        "short": "Revisão de políticas, tratamento de reprovações, gestão de consentimento, ads.txt e políticas de privacidade.",
        "lead": "Uma conta segura vem antes da receita. Identificamos cedo os riscos de política e, quando um pedido é reprovado ou uma conta é limitada, encontramos a causa e respondemos.",
        "who": [
          "Sua aprovação para anunciar foi negada ou sua conta foi limitada",
          "Você precisa gerenciar o consentimento de visitantes de outras regiões",
          "Sua política de privacidade precisa ser atualizada antes de os anúncios entrarem no ar"
        ],
        "scope": [
          [
            "Revisão de políticas",
            "Riscos de política no conteúdo, no posicionamento dos anúncios e nas fontes de tráfego."
          ],
          [
            "Reprovações e limitações",
            "Análise da causa, correções e pedido de nova revisão."
          ],
          [
            "Gestão de consentimento",
            "Avisos de consentimento por região, integrados às configurações de anúncios."
          ],
          [
            "Arquivos e documentos obrigatórios",
            "ads.txt, app-ads.txt, política de privacidade e aviso de cookies."
          ]
        ],
        "deliver": [
          "Checklist de políticas",
          "Registro das respostas enviadas",
          "Configuração da gestão de consentimento",
          "Arquivos e documentos obrigatórios"
        ]
      },
      "ops": {
        "name": "Operação de anúncios e assessoria em relatórios",
        "short": "Todo mês analisamos os indicadores de receita, fazemos testes e corrigimos o que for preciso, inclusive tráfego inválido e divergências de pagamento.",
        "lead": "Receita publicitária não se resolve com uma configuração única. Revisamos os indicadores todos os meses e mantemos apenas as mudanças comprovadas por testes.",
        "who": [
          "Sua receita publicitária oscila muito de um mês para o outro",
          "Você consolida à mão os relatórios de várias plataformas",
          "Ninguém na sua equipe é responsável pela operação de anúncios"
        ],
        "scope": [
          [
            "Revisão mensal",
            "Variações de receita, impressões, preço e taxa de preenchimento, e os motivos delas."
          ],
          [
            "Testes",
            "Testes comparativos de posições, formatos de anúncio e regras de preço."
          ],
          [
            "Relatório unificado",
            "A receita de todas as plataformas em um único relatório."
          ],
          [
            "Controles de qualidade",
            "Tráfego inválido, qualidade dos anúncios e divergências de pagamento."
          ]
        ],
        "deliver": [
          "Relatório mensal de operação",
          "Registro dos testes",
          "Relatório unificado",
          "Lista priorizada de melhorias"
        ]
      }
    }
  },

  why: [
    [
      "Receita sem prejudicar a experiência",
      "Em vez de colocar mais anúncios, buscamos posições que mantenham as páginas rápidas e a navegação fluida."
    ],
    [
      "Medimos, não supomos",
      "Registramos os números de partida antes de começar e comparamos cada mudança sobre a mesma base."
    ],
    [
      "Assessoria independente",
      "Não recebemos comissão das plataformas de anúncios, então comparamos as opções em pé de igualdade."
    ],
    [
      "Conformidade em primeiro lugar",
      "Só aumentamos a receita dentro das políticas de anúncios e das regras de privacidade. Sem cliques induzidos e sem tráfego inválido."
    ],
    [
      "Suas contas, seus dados",
      "Contas de anúncios, dados de pagamento e relatórios são criados e mantidos em seu nome."
    ],
    [
      "Atualização semanal",
      "Toda semana contamos o que mudou, como os números evoluíram e qual é o próximo passo."
    ]
  ],

  steps: [
    [
      "Primeira conversa",
      "Seu serviço, o volume de tráfego e seus objetivos."
    ],
    [
      "Diagnóstico",
      "Análise de posições, configurações e indicadores de receita, com registro da situação de partida."
    ],
    [
      "Planejamento",
      "Plataformas de anúncios, posicionamento e plano de conformidade."
    ],
    [
      "Configuração e testes",
      "Mudanças aplicadas e comparadas entre antes e depois."
    ],
    [
      "Aprovação e lançamento",
      "Revisões de políticas, gestão de consentimento e arquivos obrigatórios."
    ],
    [
      "Operação",
      "Revisões mensais, testes e relatórios."
    ]
  ],

  cta: {
    "title": "Vamos conversar sobre a sua receita publicitária",
    "text": "Envie um e-mail com o seu site ou app, o tráfego mensal e o problema que você enfrenta."
  },

  products: {
    title: 'Produtos',
    desc: 'Produtos próprios da EarnToLink: dois apps para celular (Roll Tidy, Roll Flick) e três apps para computador (Space Map, Dupeless, Archive Fix). Todos em breve.',
    eyebrow: 'Produtos próprios', h1: 'Produtos', lead: 'Dois apps para celular e três apps para computador. Todos em breve.', tabsLabel: 'Categorias',
    groups: { mobile: 'Android · iOS. Limpeza de fotos.', desktop: 'macOS · Windows. Disco, arquivos, arquivos compactados.' },
    prin: { eyebrow: 'Princípios de produto', title: 'Pequenos e honestos', text: 'Comuns aos nossos cinco apps.' },
    principles: [
      ['No dispositivo', 'Arquivos e fotos são analisados apenas no dispositivo. Nada é enviado a um servidor.'],
      ['Sem anúncios, sem rastreamento', 'Sem anúncios, análises, relatórios de falhas ou contas.'],
      ['Compra única', 'Sem assinaturas. ₩10,000 ou menos por app.'],
      ['Exclusão reversível', 'Arquivos e fotos excluídos vão para a lixeira e podem ser restaurados.'],
    ],
    featTitle: 'Recursos do {name}',
    privacy: {
      mobile: 'As fotos são analisadas apenas no dispositivo e nunca são enviadas a lugar nenhum.',
      desktop: 'Os arquivos são processados apenas no dispositivo e nunca são enviados a lugar nenhum.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Fotos parecidas, fotos tremidas, capturas de tela e vídeos grandes',
        lead: 'Analisa a galeria de fotos no dispositivo e reúne, por categoria, o que pode sair.',
        features: [
          ['Grupos de fotos parecidas', 'Agrupa fotos tiradas com até 90 segundos de diferença e de aparência semelhante, usando um hash de diferença de 64 bits.'],
          ['Melhor foto', 'Sugere manter a foto mais nítida de cada grupo. Favoritas nunca são candidatas à exclusão.'],
          ['Fotos tremidas', 'Encontra fotos tremidas em relação a toda a galeria. Fotos muito escuras ou muito claras são ignoradas.'],
          ['Capturas de tela', 'Reúne as fotos do álbum de capturas de tela.'],
          ['Vídeos grandes', 'Ordena os vídeos por tamanho estimado, do maior para o menor.'],
          ['Exclusão reversível', 'Move os itens para a lixeira do Android ou para Excluídos recentemente do iOS (30 dias).'],
        ],
        specs: [['Plataformas', 'Android · iOS'], ['Processamento', ONDEVICE], ['Exclusão', 'Move para a lixeira do sistema'], ['Idiomas', APP_LANGS], ['Preço', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Deslize as fotos uma a uma: manter ou excluir',
        lead: 'Separa as fotos pelo mês em que foram tiradas e deixa você decidir uma foto de cada vez.',
        features: [
          ['Por mês', 'Agrupa as fotos pelo mês em que foram tiradas, das mais recentes para as mais antigas.'],
          ['Deslizar', 'Deslize para a esquerda para marcar para exclusão e para a direita para manter.'],
          ['Desfazer', 'Reverte a última decisão.'],
          ['Revisar antes de excluir', 'No fim de um mês, revise as fotos marcadas e limpe tudo de uma vez.'],
          ['Progresso', 'Fotos limpas, sequência de dias e meses concluídos. Guardados apenas no dispositivo.'],
          ['No dispositivo', 'As fotos nunca são enviadas a um servidor.'],
        ],
        specs: [['Plataformas', 'Android · iOS'], ['Processamento', ONDEVICE], ['Exclusão', 'Move para a lixeira do sistema'], ['Idiomas', APP_LANGS], ['Preço', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Um treemap das pastas e arquivos que ocupam o seu disco',
        lead: 'Examina uma pasta e mostra o tamanho como área, para que você limpe primeiro o que é maior.',
        features: [
          ['Treemap', 'Treemap quadrificado, colorido por tipo de arquivo: vídeo, imagens, áudio, documentos, arquivos compactados, programas, outros.'],
          ['Três visualizações', 'Mapa, maiores arquivos e tamanho por tipo.'],
          ['Pastas rápidas', 'Início, Downloads, Mesa, Documentos, Imagens, Vídeos, unidade C (Windows).'],
          ['Navegação', 'Entre nas subpastas e volte para a pasta superior.'],
          ['Finder · Explorer', 'Mostra o item selecionado no Finder ou no Explorer.'],
          ['Mover para a lixeira', 'Itens excluídos podem ser restaurados pela lixeira. Pastas sem permissão são ignoradas e contadas.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Processamento', ONDEVICE], ['Exclusão', 'Move para a lixeira'], ['Idiomas', APP_LANGS], ['Preço', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Encontre arquivos com conteúdo idêntico e faça a limpeza',
        lead: 'Compara o conteúdo, não os nomes: primeiro o tamanho, depois os primeiros e últimos 64 KB e então o SHA-256.',
        features: [
          ['Comparação em três etapas', 'Lista de arquivos, comparação rápida (primeiros e últimos 64 KB), comparação completa (SHA-256).'],
          ['Várias pastas', 'Várias pastas de busca, tamanho mínimo de arquivo, opção de ignorar arquivos ocultos.'],
          ['Seleção automática', 'Manter o mais antigo, o mais recente ou o de caminho mais curto.'],
          ['Sempre fica um', 'Pelo menos um arquivo de cada grupo precisa permanecer.'],
          ['Mover para a lixeira', 'Somente os arquivos selecionados vão para a lixeira. Podem ser restaurados.'],
          ['Finder · Explorer', 'Abra diretamente a localização do arquivo.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Processamento', ONDEVICE], ['Comparação', 'Tamanho → primeiros/últimos 64 KB → SHA-256'], ['Idiomas', APP_LANGS], ['Preço', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Extraia e crie arquivos compactados sem nomes de arquivo coreanos corrompidos',
        lead: 'Detecta nomes de arquivo CP949 em ZIPs criados no Windows em coreano e os restaura. Baseado no 7-Zip.',
        features: [
          ['Reparo de nomes em coreano', 'Verifica entradas ZIP sem a marca UTF-8 e converte automaticamente os nomes CP949 (Windows em coreano).'],
          ['16 formatos', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Criar arquivos compactados', 'ZIP ou 7Z, com compressão rápida, normal ou máxima.'],
          ['Senha AES-256', 'AES-256 para ZIP; o 7Z também criptografa os nomes dos arquivos.'],
          ['Arrastar e soltar', 'Arquivos compactados são extraídos; os demais arquivos são compactados.'],
          ['7-Zip 26.04 incluído', 'Sem instalação separada.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Processamento', ONDEVICE], ['Motor', '7-Zip 26.04 (LGPL)'], ['Idiomas', APP_LANGS], ['Preço', ONE_TIME]],
      },
    },
  },

  about: {
    "title": "Sobre",
    "desc": "Sobre a EarnToLink: consultoria que ajuda sites, apps e plataformas de e-commerce a gerar receita com publicidade. Missão, serviços, princípios e dados da empresa.",
    "eyebrow": "Sobre",
    "h1": "EarnToLink",
    "lead": "A EarnToLink é uma consultoria de receita publicitária que planeja como as empresas ganham dinheiro com anúncios.",
    "mission": {
      "eyebrow": "Missão",
      "title": "Publicidade que fortalece o negócio",
      "body": [
        "Muitas empresas criam bons conteúdos e bons serviços, mas ganham pouco com anúncios. Os espaços não funcionam, as configurações estão defasadas ou um problema de política segura a receita.",
        "A EarnToLink mede o seu ponto de partida, escolhe as plataformas e os espaços de anúncio adequados e apoia a operação diária dentro das políticas e das regras de privacidade. Mostramos o resultado de cada mudança sobre a mesma base de comparação.",
        "Com a experiência de quem constrói e opera sites e apps próprios, seguimos um princípio: a monetização não pode prejudicar a experiência do usuário."
      ]
    },
    "do": {
      "eyebrow": "Serviços",
      "title": "O que fazemos",
      "text": "Atividades registradas: desenvolvimento e fornecimento de software aplicativo (principal), comércio varejista eletrônico e intermediação de comércio varejista eletrônico."
    },
    "why": {
      "eyebrow": "Princípios",
      "title": "Nossos princípios"
    },
    "info": {
      "eyebrow": "Empresa",
      "title": "Dados da empresa"
    }
  },

  principles: {
    "title": "Como trabalhamos",
    "desc": "Como a EarnToLink trabalha: receita em equilíbrio com a experiência do usuário, resultados medidos, assessoria independente e conformidade com políticas. Etapas e condições de contratação.",
    "eyebrow": "Como trabalhamos",
    "h1": "Como trabalhamos",
    "lead": "Princípios, etapas e condições de contratação.",
    "why": {
      "eyebrow": "Princípios",
      "title": "Seis princípios",
      "text": "Aplicados em todos os projetos."
    },
    "steps": {
      "eyebrow": "Processo",
      "title": "Etapas",
      "text": "Da primeira conversa à operação."
    },
    "terms": {
      "eyebrow": "Contratação",
      "title": "Condições de contratação",
      "rows": [
        [
          "Projetos",
          "Cada projeto tem um contrato próprio, com escopo, cronograma, honorários e condições de pagamento"
        ],
        [
          "Mudanças de escopo",
          "Mudanças e seus custos são combinados antes de o trabalho continuar"
        ],
        [
          "Titularidade",
          "Contas de anúncios, relatórios e documentos de configuração permanecem em seu nome"
        ],
        [
          "Honorários",
          "Sem comissão das plataformas de anúncios · os honorários de consultoria constam no contrato"
        ]
      ]
    }
  },

  contact: {
    "title": "Contato",
    "desc": "Fale com a EarnToLink sobre consultoria de receita publicitária, produtos, privacidade ou parcerias. hello@earntolink.com",
    "eyebrow": "Contato",
    "h1": "Contato",
    "lead": "Atendemos por e-mail e respondemos em coreano ou inglês.",
    "topics": [
      [
        "chart",
        "Consultoria",
        "Diagnóstico de receita publicitária, monetização de sites e apps, retail media, questões de política, assessoria de operação"
      ],
      [
        "package",
        "Produtos",
        "Recursos, datas de lançamento e erros dos nossos apps"
      ],
      [
        "receipt",
        "Pagamentos",
        "Pagamentos e reembolsos de apps seguem a política de cada loja de aplicativos"
      ],
      [
        "shield",
        "Privacidade",
        "Pedidos de acesso, correção, exclusão ou suspensão do tratamento de dados pessoais"
      ],
      [
        "users",
        "Parcerias",
        "Propostas de colaboração e outras propostas"
      ]
    ],
    "brief": {
      "title": "Informações que ajudam na resposta",
      "items": [
        "O que você administra (site, app ou plataforma de e-commerce) e o endereço",
        "Visitantes mensais ou usuários ativos",
        "As plataformas de anúncios que você usa hoje e os problemas que percebe",
        "O prazo desejado"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink passa a focar em consultoria de receita publicitária",
      "summary": "Diagnóstico e estratégia, monetização de sites e apps, retail media, conformidade com políticas e assessoria de operação.",
      "body": [
        "A EarnToLink reorientou seus serviços para a consultoria de receita publicitária.",
        "Agora oferecemos seis serviços: diagnóstico e estratégia de receita publicitária, monetização de sites e portais de mídia, monetização de apps, retail media e desenvolvimento de plataformas de anúncios, conformidade com políticas de anúncios e privacidade, e operação de anúncios e assessoria em relatórios.",
        "Para agendar uma consultoria, escreva para hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com está no ar",
      "summary": "O site da EarnToLink está no ar em 14 idiomas.",
      "body": [
        "O site da EarnToLink, earntolink.com, já está no ar.",
        "Ele reúne nossos serviços, produtos próprios, dados da empresa, política de privacidade e informações de contato.",
        "Está disponível em coreano, inglês, japonês, chinês (simplificado e tradicional), espanhol, francês, alemão, português, italiano, vietnamita, indonésio, tailandês e russo."
      ]
    },
    "product-lineup": {
      "title": "Nossos produtos próprios",
      "summary": "Dois apps para celular e três apps para computador.",
      "body": [
        "A situação atual dos nossos produtos próprios.",
        "Os apps para celular Roll Tidy e Roll Flick e os apps para computador Space Map, Dupeless e Archive Fix chegam em breve."
      ]
    }
  },
  newsPage: {
    "title": "Novidades",
    "desc": "Novidades da EarnToLink: atualização dos serviços, lançamento do site e status dos produtos."
  },

  privacy: {
    title: 'Política de Privacidade',
    desc: 'Política de privacidade da EarnToLink para o site, consultas por e-mail e nossos apps. Em vigor desde 10 de outubro de 2026.',
    eyebrow: 'Política', lead: 'Em vigor desde 10 de outubro de 2026',
    sections: [
      { id: 'general', h: '1. Disposições gerais', html: `<p>A EarnToLink (언투링크, "EarnToLink") protege as informações pessoais de acordo com a Lei de Proteção de Informações Pessoais da Coreia. Esta política abrange o site earntolink.com e os apps criados pela EarnToLink.</p><p>Resumo: o site não usa cadastro, formulários, cookies, análises ou anúncios. Nossos apps processam arquivos e fotos apenas no dispositivo e nunca os enviam a lugar nenhum.</p>` },
      { id: 'site', h: '2. Site', html: `<ul><li>Sem cadastro, login ou formulários.</li><li>Sem cookies, ferramentas de análise ou scripts de anúncios.</li><li>O site é servido pelo GitHub Pages (GitHub, Inc.). O GitHub pode processar registros de acesso, como endereços IP, para operação e segurança, conforme a <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Declaração Geral de Privacidade do GitHub</a>.</li><li>A fonte Pretendard é carregada da CDN jsDelivr, que pode receber informações da solicitação, como o endereço IP do seu navegador.</li><li>Se cookies ou ferramentas de análise forem introduzidos algum dia, esta política será atualizada antes.</li></ul>` },
      { id: 'email', h: '3. Consultas por e-mail', html: `<table><tr><th>Dados</th><th>Finalidade</th><th>Retenção</th></tr><tr><td>Endereço de e-mail, nome de exibição, conteúdo da mensagem e anexos</td><td>Ler e responder consultas, conversa sobre projetos, atendimento de pedidos</td><td>Excluídos sem demora depois de atendidos. Se houver contrato, mantidos durante a vigência do contrato e pelo prazo exigido em lei</td></tr></table><p>Os e-mails de consulta são recebidos e armazenados no Gmail, fornecido pela Google LLC.</p>` },
      { id: 'apps', h: '4. Nossos apps', html: `<p>Apps abrangidos: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Todos em breve.</p><div class="table-scroll"><table><tr><th>App</th><th>Dados processados</th><th>Onde</th><th>Enviado ao exterior</th></tr><tr><td>Roll Tidy</td><td>Fotos e vídeos das galerias às quais você concede acesso</td><td>No dispositivo</td><td>Nenhum</td></tr><tr><td>Roll Flick</td><td>Fotos das galerias às quais você concede acesso</td><td>No dispositivo</td><td>Nenhum</td></tr><tr><td>Space Map</td><td>Nomes, tamanhos e tipos dos arquivos das pastas que você escolhe</td><td>No dispositivo</td><td>Nenhum</td></tr><tr><td>Dupeless</td><td>Tamanhos de arquivo e hashes de conteúdo das pastas que você escolhe</td><td>No dispositivo</td><td>Nenhum</td></tr><tr><td>Archive Fix</td><td>Arquivos compactados e arquivos que você escolhe</td><td>No dispositivo</td><td>Nenhum</td></tr></table></div><ul><li>Os apps não se conectam à rede e nunca enviam arquivos ou fotos.</li><li>Sem contas, anúncios, análises, relatórios de falhas ou rastreamento.</li><li>Arquivos e fotos excluídos vão para a lixeira do sistema (Excluídos recentemente no iOS) e podem ser restaurados.</li><li>Configurações, registros de progresso (Roll Flick) e caches de análise de fotos (Roll Tidy: hash, nitidez, brilho) ficam no armazenamento do app no dispositivo.</li><li>Os pagamentos são tratados por cada loja de apps. A EarnToLink nunca recebe dados de pagamento.</li></ul>` },
      { id: 'projects', h: '5. Projetos de clientes', html: `<p>Quando um projeto de cliente envolve dados pessoais do cliente, o alcance e o método do tratamento seguem o contrato e o acordo de tratamento de dados firmados com esse cliente.</p>` },
      { id: 'third', h: '6. Fornecimento a terceiros', html: `<p>Não fornecemos informações pessoais a terceiros, exceto quando exigido por lei.</p>` },
      { id: 'rights', h: '7. Seus direitos', html: `<p>Você pode solicitar a qualquer momento o acesso, a correção, a exclusão ou a suspensão do tratamento. Envie seus pedidos para ${mail}; atendemos sem demora.</p>` },
      { id: 'destroy', h: '8. Exclusão', html: `<p>As informações pessoais são destruídas sem demora quando o prazo de retenção termina ou a finalidade é cumprida. Arquivos eletrônicos são excluídos de modo que não possam ser recuperados.</p>` },
      { id: 'security', h: '9. Segurança', html: `<p>O acesso ao e-mail de consultas é restrito ao representante, e não coletamos mais informações pessoais do que o necessário.</p>` },
      { id: 'officer', h: '10. Responsável pela privacidade', html: `<table><tr><th>Nome</th><td>Juhwan Ma (Representante)</td></tr><tr><th>E-mail</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Vias de reclamação (Coreia)', html: `<ul><li>Centro de Denúncias de Violação de Informações Pessoais: privacy.kisa.or.kr, 118 (na Coreia)</li><li>Comitê de Mediação de Disputas de Informações Pessoais: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Alterações', html: `<p>Esta política está em vigor desde 10 de outubro de 2026. As alterações serão publicadas nesta página com a data de início da vigência.</p>` },
    ],
  },

  terms: {
    title: 'Termos',
    desc: 'Termos de uso do site da EarnToLink. Em vigor desde 10 de outubro de 2026.',
    eyebrow: 'Política', lead: 'Em vigor desde 10 de outubro de 2026',
    sections: [
      { id: 'purpose', h: '1. Finalidade', html: '<p>Estes termos estabelecem as condições de uso do earntolink.com, o site operado pela EarnToLink.</p>' },
      { id: 'content', h: '2. Direitos sobre o conteúdo', html: '<p>Os direitos sobre os textos, imagens e código deste site pertencem à EarnToLink. As marcas de terceiros exibidas aqui pertencem a seus respectivos titulares.</p>' },
      { id: 'accuracy', h: '3. Informações de produtos e serviços', html: "<p>A situação dos produtos, os recursos e a descrição dos serviços são precisos na data de redação. Recursos, preços e prazos de produtos ainda não lançados podem mudar.</p>" },
      { id: 'projects', h: '4. Contratos de projeto', html: "<p>Os serviços de diagnóstico, consultoria, configuração de anúncios e assessoria de operação seguem o contrato de cada projeto. Se estes termos divergirem do contrato, prevalece o contrato. A receita publicitária depende do mercado de anúncios e das políticas das plataformas, e as estimativas apresentadas em nossos diagnósticos ou propostas não são garantia.</p>" },
      { id: 'apps', h: '5. Uso dos apps', html: '<p>Cada app também está sujeito aos termos da loja pela qual é distribuído (App Store, Google Play, Microsoft Store e outras) e aos seus próprios avisos.</p>' },
      { id: 'links', h: '6. Links externos', html: '<p>Sites externos são regidos por seus próprios termos e políticas.</p>' },
      { id: 'liability', h: '7. Limitação de responsabilidade', html: '<p>Na medida permitida por lei, a EarnToLink não se responsabiliza por danos indiretos decorrentes do uso deste site.</p>' },
      { id: 'law', h: '8. Lei aplicável', html: '<p>Estes termos são regidos pelas leis da República da Coreia.</p>' },
      { id: 'contact', h: '9. Contato', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Seu parceiro de crescimento em receita publicitária",
    "s": "Diagnóstico de receita publicitária · Monetização de sites e apps<br>Retail media · Conformidade com políticas · Operação",
    "tags": [
      "Sites e portais de mídia",
      "Apps para celular",
      "E-commerce"
    ]
  },
};
