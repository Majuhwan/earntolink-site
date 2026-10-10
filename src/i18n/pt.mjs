// Português (Brasil). Mesma estrutura que ko.mjs / en.mjs. Sem travessões longos.
const EMAIL = 'earn2link@gmail.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 idiomas (inglês, coreano, japonês, chinês simplificado e tradicional, alemão, francês, espanhol, português, italiano)';
const ONDEVICE = 'No dispositivo · sem conexão com a rede';
const ONE_TIME = 'Compra única · ₩10,000 ou menos';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Conectamos mercados e o mundo.',
  translationNote: 'Esta página é uma tradução. Se houver diferença em relação ao original em coreano, prevalece o original em coreano.',

  ui: {
    skip: 'Ir para o conteúdo', menu: 'Menu', language: 'Idioma', mainNav: 'Principal', breadcrumb: 'Caminho de navegação', toc: 'Conteúdo', homeAria: 'Página inicial da EarnToLink',
    nav: { services: 'Serviços', products: 'Produtos', about: 'Sobre', principles: 'Como trabalhamos', news: 'Novidades', contact: 'Contato' },
    home: 'Início', privacy: 'Política de Privacidade', terms: 'Termos', rss: 'RSS',
    footer: { services: 'Serviços', products: 'Produtos', company: 'Empresa', policy: 'Políticas' },
    biz: { name: 'Nome empresarial', rep: 'Representante', no: 'N.º de registro da empresa', tax: 'Regime tributário', kinds: 'Atividade', mail: 'E-mail' },
    rights: '© 2026 EarnToLink. Todos os direitos reservados.',
    view: 'Detalhes', all: 'Todos os produtos', allServices: 'Todos os serviços', email: 'E-mail', mailBtn: 'Envie um e-mail', projectBtn: 'Iniciar um projeto',
    platform: 'Plataforma', status: 'Status', features: 'Recursos', specs: 'Especificações', related: 'Outros produtos', privacyNote: 'Privacidade',
    productIllustration: 'Ilustração do produto: ',
    heroLabel: 'Ilustração da EarnToLink conectada a mercados em 14 idiomas',
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
    title: 'EarnToLink (언투링크) | Conectamos mercados e o mundo',
    desc: 'A EarnToLink conecta mercados e o mundo: desenvolvimento de produtos web, mobile e desktop, transformação com IA e automação, localização em 14 idiomas, lançamento em lojas de apps globais, integração e operação de comércio eletrônico.',
    eyebrow: 'Software · Transformação com IA · Expansão global',
    h1: 'Conectamos mercados<br>e o mundo.',
    lead: 'Do planejamento e desenvolvimento à automação com IA, à localização e ao lançamento em lojas de apps globais, uma única equipe leva o seu produto até o fim.',
    meta: ['Web · Mobile · Desktop', 'IA · Automação', '14 idiomas'],
    stats: [['14', 'Idiomas do site'], ['6', 'Áreas de serviço'], ['5', 'Produtos próprios'], ['4', 'Lojas de apps onde publicamos']],
    services: { eyebrow: 'Serviços', title: 'Seis áreas de serviço', text: 'Construímos, automatizamos, levamos ao mundo e mantemos o crescimento.' },
    why: { eyebrow: 'Por que a EarnToLink', title: 'Pensado para mercados globais desde o primeiro dia', text: 'Seis compromissos que cumprimos em todo projeto.' },
    how: { eyebrow: 'Processo', title: 'Da primeira conversa à operação', text: 'Seis etapas, cada uma confirmada antes da seguinte.' },
    apps: { eyebrow: 'Produtos próprios', title: 'Produtos que criamos', text: 'Nossos próprios apps, feitos com o mesmo padrão do trabalho para clientes. Todos em breve.' },
    co: { eyebrow: 'Empresa', title: 'EarnToLink', text: 'Empresa individual na Coreia. Desenvolvimento e fornecimento de software aplicativo.' },
    news: { eyebrow: 'Novidades', title: 'Últimas novidades' },
  },

  services: {
    title: 'Serviços',
    desc: 'Serviços da EarnToLink: desenvolvimento de produtos, transformação com IA e automação, localização, lançamento em lojas de apps globais, comércio e vendas internacionais, operação e crescimento.',
    eyebrow: 'Serviços', h1: 'Serviços', lead: 'Seis áreas. Escolha apenas as que você precisa.',
    whoLabel: 'É uma boa opção quando', scopeLabel: 'O que fazemos', deliverLabel: 'Entregas', otherLabel: 'Outros serviços',
    items: {
      product: {
        name: 'Desenvolvimento de produtos', short: 'Serviços web, apps para celular, apps para computador e sistemas internos, do planejamento ao lançamento.',
        lead: 'Transformamos ideias em produtos que as pessoas realmente usam. Planejamento, design de telas, design visual, desenvolvimento e testes seguem como um único fluxo.',
        who: ['Você está criando um serviço novo do zero', 'Você quer lançar algo pequeno primeiro e testar o mercado', 'Você quer tirar o trabalho de planilhas e chats e levá-lo a um sistema de verdade'],
        scope: [
          ['Serviços web', 'Sites de serviço, contas e pagamentos, painéis administrativos.'],
          ['Apps para celular', 'Apps para Android e iOS, criados a partir de uma única base de código.'],
          ['Apps para computador', 'Apps para Windows e macOS, incluindo ferramentas de arquivos e discos.'],
          ['Sistemas internos', 'Gestão do trabalho, acertos financeiros, estoque e ferramentas para clientes.'],
        ],
        deliver: ['Lista de recursos e design das telas', 'Código-fonte e configuração de implantação', 'Testes automatizados', 'Guia de operação'],
      },
      ax: {
        name: 'Transformação com IA e automação', short: 'Agentes de IA e automação que reduzem o trabalho repetitivo e mudam a forma como as equipes operam.',
        lead: 'Identificamos o trabalho que se repete e o levamos para a IA e a automação. Uma pequena demonstração funcional comprova o efeito antes do desenvolvimento completo.',
        who: ['Sua equipe repete as mesmas respostas de suporte, documentos ou limpeza de dados', 'Você quer pesquisar documentos e dados internos com IA', 'As pessoas copiam as mesmas informações entre várias ferramentas'],
        scope: [
          ['Agentes de IA', 'Primeiras respostas, resumos, rascunhos e classificação.'],
          ['Automação de documentos e dados', 'Leitura de formulários, limpeza de tabelas, geração de relatórios.'],
          ['Busca de conhecimento interno', 'Respostas baseadas nos seus próprios documentos (RAG).'],
          ['Integração de ferramentas', 'Ligações automáticas entre e-mail, chat, planilhas e sistemas internos.'],
        ],
        deliver: ['Avaliação do fluxo de trabalho', 'Uma demonstração funcional', 'Automação em produção e guia do usuário', 'Métricas para medir o efeito'],
      },
      localization: {
        name: 'Localização e expansão global', short: 'Leve seu serviço para 14 ou mais idiomas e seja encontrado em cada país.',
        lead: 'Não é só tradução. Adaptamos a estrutura de idiomas, os formatos de data, número e moeda e a visibilidade nos buscadores, país por país.',
        who: ['Seu serviço existe em um único idioma e você quer abri-lo para o exterior', 'Você traduziu, mas os buscadores estrangeiros não encontram o seu site', 'Você precisa de pagamentos e formatos que variam de país para país'],
        scope: [
          ['Estrutura multilíngue', 'Extração de textos, troca de idioma, URLs por idioma.'],
          ['SEO multilíngue', 'hreflang, sitemaps por idioma, cadastro nos buscadores.'],
          ['Formatos locais', 'Datas, números, moedas e endereços.'],
          ['Controle de qualidade da tradução', 'Glossários e verificações automáticas de textos ausentes em cada idioma.'],
        ],
        deliver: ['Páginas e URLs por idioma', 'Glossário', 'Ferramenta de verificação de textos por idioma', 'Cadastro nos buscadores'],
      },
      launch: {
        name: 'Lançamento em lojas de apps globais', short: 'Lançamento e tratamento de revisões na App Store, Google Play, Microsoft Store e Mac App Store.',
        lead: 'Cuidamos do cadastro nas lojas, das respostas às revisões e das páginas da loja em cada idioma, e seguimos publicando atualizações depois do lançamento.',
        who: ['Você tem um app, mas o cadastro nas lojas está travado', 'Seu app foi rejeitado na revisão', 'Você precisa de páginas de loja para cada país'],
        scope: [
          ['Cadastro nas lojas', 'Conta de desenvolvedor, dados do app, classificação etária, etiquetas de privacidade.'],
          ['Tratamento de revisões', 'Verificação de políticas, análise de rejeições, correção e reenvio.'],
          ['Localização da página da loja', 'Descrições e capturas de tela por idioma.'],
          ['Configuração de pagamentos', 'Compras no app, faixas de preço, preços por país.'],
        ],
        deliver: ['Seu app publicado nas lojas', 'Páginas de loja por idioma', 'Histórico de revisões', 'Procedimento de publicação de atualizações'],
      },
      commerce: {
        name: 'Comércio e vendas internacionais', short: 'Conecte seus produtos a clientes no exterior com canais de venda e ferramentas de operação.',
        lead: 'Criamos a loja virtual, os dados de produto multilíngues e as integrações de pagamento, envio e contabilidade de que a venda internacional precisa.',
        who: ['Você vende no seu país e quer vender no exterior', 'Você edita os dados de produto separadamente em cada canal', 'Você concilia pedidos, estoque e repasses manualmente'],
        scope: [
          ['Canais de venda', 'Sua própria loja conectada a marketplaces do exterior.'],
          ['Dados de produto multilíngues', 'Nomes, descrições, opções e tabelas de medidas por idioma.'],
          ['Sincronização de pedidos e estoque', 'Sincronização automática de pedidos e estoque entre os canais.'],
          ['Acertos financeiros e relatórios', 'Totais automáticos de vendas, tarifas e repasses.'],
        ],
        deliver: ['Canais de venda e integrações', 'Dados de produto multilíngues', 'Sincronização de pedidos e estoque', 'Relatórios de acertos financeiros'],
      },
      operate: {
        name: 'Operação e crescimento', short: 'Depois do lançamento: correção de erros, melhoria de velocidade, novos recursos, controle de custos.',
        lead: 'O lançamento é só o começo. Acompanhamos as métricas, reduzimos erros, adicionamos o que os usuários precisam e mantemos os custos de infraestrutura sob controle.',
        who: ['Você precisa de alguém para assumir um serviço criado por outro fornecedor', 'Erros e telas lentas continuam voltando', 'Os custos de servidor não param de subir'],
        scope: [
          ['Resposta a erros', 'Leitura de logs de erro, busca de causas, publicação de correções.'],
          ['Desempenho', 'Telas e consultas mais rápidas.'],
          ['Crescimento de recursos', 'Adição e corte de recursos com base nos dados de uso.'],
          ['Revisão de custos', 'Revisão do uso de nuvem e economia.'],
        ],
        deliver: ['Relatório mensal de operação', 'Registro de resposta a erros', 'Versões de melhoria', 'Resultados da revisão de custos'],
      },
    },
  },

  why: [
    ['Multilíngue desde o início', 'A estrutura multilíngue entra na fase de design, então adicionar um idioma depois nunca significa refazer tudo.'],
    ['Escopo combinado primeiro', 'Recursos, prazo e custo são definidos por escrito antes de começar. Qualquer mudança é combinada antes de ser feita.'],
    ['O código e as contas são seus', 'Código-fonte, domínios e contas de lojas e de nuvem são criados em seu nome e entregues a você.'],
    ['Testes fazem parte da entrega', 'Incluímos testes automatizados dos recursos principais e verificações de textos ausentes por idioma.'],
    ['Andamento semanal', 'Toda semana você vê telas funcionando e o que falta.'],
    ['Só os dados necessários', 'Os dados pessoais se limitam ao que os recursos exigem e, sempre que possível, são processados no dispositivo.'],
  ],

  steps: [
    ['Consulta', 'Objetivos, mercados de destino e prazos.'],
    ['Escopo e orçamento', 'Lista de recursos, prazo e custo por escrito.'],
    ['Demonstração', 'Primeiro funcionam as telas e os fluxos principais.'],
    ['Desenvolvimento e testes', 'Atualizações semanais, testes automatizados.'],
    ['Localização e lançamento', 'Páginas por idioma, cadastro nas lojas e nos buscadores.'],
    ['Operação e melhoria', 'Métricas, resposta a erros, crescimento.'],
  ],

  cta: { title: 'Iniciar um projeto', text: 'Envie um e-mail contando o que você quer criar, seus mercados de destino e seu cronograma.' },

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
    title: 'Sobre',
    desc: 'Sobre a EarnToLink (언투링크): uma empresa de software que conecta mercados e o mundo. Missão, serviços, princípios e dados da empresa.',
    eyebrow: 'Sobre', h1: 'EarnToLink', lead: 'A EarnToLink (언투링크) é uma empresa de software que conecta mercados e o mundo.',
    mission: {
      eyebrow: 'Missão', title: 'Conectamos mercados e o mundo',
      body: [
        'Bons produtos e serviços muitas vezes ficam presos a um único país e a um único idioma. A EarnToLink cria o software que une essas pontas.',
        'Criamos produtos, deixamos as operações mais leves com IA e automação e os levamos a mercados globais por meio de vários idiomas e lojas de apps. Depois do lançamento, seguimos melhorando-os com base nos dados.',
        'Criamos nossos próprios apps com o mesmo padrão. O status é mostrado como é: produtos ainda não lançados aparecem como em breve.',
      ],
    },
    do: { eyebrow: 'Serviços', title: 'O que fazemos', text: 'Atividade registrada: desenvolvimento e fornecimento de software aplicativo (principal), varejo por comércio eletrônico, intermediação de varejo por comércio eletrônico.' },
    why: { eyebrow: 'Princípios', title: 'Como trabalhamos' },
    info: { eyebrow: 'Empresa', title: 'Dados da empresa' },
  },

  principles: {
    title: 'Como trabalhamos',
    desc: 'Como a EarnToLink trabalha: multilíngue desde o início, escopo combinado primeiro, o código e as contas são seus, testes incluídos. Processo e condições contratuais.',
    eyebrow: 'Como trabalhamos', h1: 'Como trabalhamos', lead: 'Princípios, processo e condições contratuais.',
    why: { eyebrow: 'Princípios', title: 'Seis compromissos', text: 'Aplicados a todos os projetos.' },
    steps: { eyebrow: 'Processo', title: 'Etapas', text: 'Da consulta à operação.' },
    terms: { eyebrow: 'Contratos', title: 'Condições de contrato e preços', rows: [
      ['Projetos', 'Escopo, prazo, custo e condições de pagamento definidos em contrato para cada projeto'],
      ['Mudanças de escopo', 'As mudanças e seu custo são combinados antes de o trabalho prosseguir'],
      ['Titularidade', 'Código-fonte e contas transferidos ao cliente após a conclusão do pagamento'],
      ['Nossos apps', 'Compra única · ₩10,000 ou menos por app · sem assinatura · pagamento pela loja de cada app'],
    ] },
  },

  contact: {
    title: 'Contato',
    desc: `Entre em contato com a EarnToLink sobre projetos, produtos, privacidade ou parcerias: ${EMAIL}`,
    eyebrow: 'Contato', h1: 'Contato', lead: 'Por e-mail. Respondemos em coreano ou inglês.',
    topics: [
      ['code', 'Projetos', 'Desenvolvimento de produtos, automação com IA, localização, lançamento em lojas de apps, comércio, operação'],
      ['package', 'Produtos', 'Recursos, datas de lançamento e bugs dos nossos apps'],
      ['receipt', 'Pagamentos', 'Pagamentos e reembolsos dos apps seguem a política de cada loja de apps'],
      ['shield', 'Privacidade', 'Pedidos de acesso, correção, exclusão ou suspensão do tratamento'],
      ['users', 'Parcerias', 'Colaboração e outras propostas'],
    ],
    brief: { title: 'O que ajuda incluir em uma consulta de projeto', items: ['O que você quer criar e por quê', 'Mercados e idiomas de destino', 'Cronograma desejado', 'Serviços ou materiais de referência'] },
  },

  news: {
    'business-areas': { title: 'Nossas áreas de serviço', summary: 'Desenvolvimento de produtos, transformação com IA, localização, lançamento em lojas de apps, comércio, operação.',
      body: ['Uma visão geral das áreas de serviço da EarnToLink.', 'São seis: desenvolvimento de produtos, transformação com IA e automação, localização e expansão global, lançamento em lojas de apps globais, comércio e vendas internacionais, e operação e crescimento.', 'Consultas sobre projetos devem ser enviadas para earn2link@gmail.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com está no ar', summary: 'O site da EarnToLink está no ar em 14 idiomas.',
      body: ['O site da EarnToLink, earntolink.com, já está no ar.', 'Ele reúne nossas áreas de serviço, produtos próprios, dados da empresa, política de privacidade e informações de contato.', 'Está disponível em coreano, inglês, japonês, chinês (simplificado e tradicional), espanhol, francês, alemão, português, italiano, vietnamita, indonésio, tailandês e russo.'] },
    'product-lineup': { title: 'Nossos produtos próprios', summary: 'Dois apps para celular e três apps para computador.',
      body: ['A situação atual dos nossos produtos próprios.', 'Os apps para celular Roll Tidy e Roll Flick e os apps para computador Space Map, Dupeless e Archive Fix chegam em breve.'] },
  },
  newsPage: { title: 'Novidades', desc: 'Novidades da EarnToLink: áreas de serviço, lançamento do site e status dos produtos.' },

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
      { id: 'accuracy', h: '3. Informações de produtos e serviços', html: '<p>O status dos produtos, os recursos e as descrições dos serviços são exatos no momento da redação. Recursos, preços e prazos de produtos ainda não lançados podem mudar.</p>' },
      { id: 'projects', h: '4. Contratos de projeto', html: '<p>Os serviços de desenvolvimento, automação, localização, lançamento e operação seguem o contrato de cada projeto. Se estes termos e um contrato forem diferentes, prevalece o contrato.</p>' },
      { id: 'apps', h: '5. Uso dos apps', html: '<p>Cada app também está sujeito aos termos da loja pela qual é distribuído (App Store, Google Play, Microsoft Store e outras) e aos seus próprios avisos.</p>' },
      { id: 'links', h: '6. Links externos', html: '<p>Sites externos são regidos por seus próprios termos e políticas.</p>' },
      { id: 'liability', h: '7. Limitação de responsabilidade', html: '<p>Na medida permitida por lei, a EarnToLink não se responsabiliza por danos indiretos decorrentes do uso deste site.</p>' },
      { id: 'law', h: '8. Lei aplicável', html: '<p>Estes termos são regidos pelas leis da República da Coreia.</p>' },
      { id: 'contact', h: '9. Contato', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Conectamos mercados e o mundo.', s: 'Desenvolvimento de produtos · Transformação com IA · Localização<br>Lançamento em lojas de apps · Comércio · Operação', tags: ['Web · App · Desktop', 'IA · Automação', '14 idiomas'] },
};
