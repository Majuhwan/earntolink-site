// 简体中文。结构与 ko.mjs / en.mjs 相同。
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10种语言(英语、韩语、日语、简体中文和繁体中文、德语、法语、西班牙语、葡萄牙语、意大利语)';
const ONDEVICE = '设备本地处理 · 无需联网';
const ONE_TIME = '一次性购买 · ₩10,000 以内';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: '连接市场与世界。',
  translationNote: '本页为译文。如与韩语原文有出入,以韩语原文为准。',

  ui: {
    skip: '跳到正文', menu: '菜单', language: '语言', mainNav: '主导航', breadcrumb: '面包屑导航', toc: '目录', homeAria: 'EarnToLink 首页',
    nav: { services: '服务', products: '产品', about: '关于我们', principles: '合作方式', news: '动态', contact: '联系我们' },
    home: '首页', privacy: '隐私政策', terms: '使用条款', rss: 'RSS',
    footer: { services: '服务', products: '产品', company: '公司', policy: '政策' },
    biz: { name: '商号', rep: '代表', no: '营业执照号', tax: '纳税类型', kinds: '经营范围', mail: '邮箱' },
    rights: '© 2026 EarnToLink. All rights reserved.',
    view: '查看详情', all: '全部产品', allServices: '全部服务', email: '邮箱', mailBtn: '发邮件咨询', projectBtn: '洽谈项目',
    platform: '平台', status: '状态', features: '功能', specs: '规格', related: '其他产品', privacyNote: '隐私',
    productIllustration: '产品插图:',
    heroLabel: 'EarnToLink 以14种语言连接各地市场的示意图',
    newsFeedTitle: 'EarnToLink 动态', newsFeedDesc: 'EarnToLink(언투링크)的最新动态',
    notFound: { title: '找不到页面', text: '地址已变更,或该页面不存在。', home: '返回首页' },
  },

  status: { soon: '即将推出', dev: '开发中', live: '已上线' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: '一般纳税人(韩国)',
    form: '企业类型', formValue: '个体工商户(韩国)', kindsLabel: '注册业务', site: '网站',
    kinds: ['应用软件开发与供应(主营)', '电子商务零售', '电子商务零售中介'],
  },

  categories: {
    mobile: { name: '移动应用', plat: 'Android · iOS' },
    desktop: { name: '桌面应用', plat: 'macOS · Windows' },
  },

  home: {
    title: 'EarnToLink(언투링크) | 连接市场与世界',
    desc: 'EarnToLink 连接市场与世界:网页、移动和桌面产品开发,AI转型与自动化,14种语言本地化,全球应用商店上架,电商对接与运营。',
    eyebrow: '软件 · AI转型 · 全球拓展',
    h1: '连接市场<br>与世界。',
    lead: '从策划、开发到AI自动化、本地化和全球应用商店上架,由一个团队把您的产品一路送到底。',
    meta: ['网页 · 移动 · 桌面', 'AI · 自动化', '14种语言'],
    stats: [['14', '网站语言'], ['6', '服务领域'], ['5', '自研产品'], ['4', '上架的应用商店']],
    services: { eyebrow: '服务', title: '六大服务领域', text: '打造、自动化、走向世界,并持续成长。' },
    why: { eyebrow: '为什么选择 EarnToLink', title: '从第一天起就面向全球市场', text: '每个项目都遵守的六项承诺。' },
    how: { eyebrow: '流程', title: '从初次沟通到运营', text: '共六个步骤,每一步确认后再进入下一步。' },
    apps: { eyebrow: '自研产品', title: '我们自己打造的产品', text: '按服务客户的同一标准打造的自有应用。全部即将推出。' },
    co: { eyebrow: '公司', title: 'EarnToLink', text: '韩国个体工商户。应用软件开发与供应。' },
    news: { eyebrow: '动态', title: '最新动态' },
  },

  services: {
    title: '服务',
    desc: 'EarnToLink 的服务:产品开发、AI转型与自动化、本地化、全球应用商店上架、电商与跨境销售、运营与增长。',
    eyebrow: '服务', h1: '服务', lead: '六个领域,按需选择。',
    whoLabel: '适合以下情况', scopeLabel: '服务内容', deliverLabel: '交付成果', otherLabel: '其他服务',
    items: {
      product: {
        name: '产品开发', short: '网页服务、移动应用、桌面应用和内部系统,从策划到上线。',
        lead: '把想法变成真正有人使用的产品。策划、界面设计、视觉设计、开发和测试一气呵成。',
        who: ['您要从零开始做一项新服务', '想先小规模上线,试探市场', '想把表格和聊天里的工作搬进正式的系统'],
        scope: [
          ['网页服务', '服务网站、账户与支付、管理后台。'],
          ['移动应用', '基于同一套代码的 Android 和 iOS 应用。'],
          ['桌面应用', 'Windows 和 macOS 应用,包括文件和磁盘工具。'],
          ['内部系统', '工作管理、结算、库存和客户工具。'],
        ],
        deliver: ['功能清单与界面设计', '源代码与部署配置', '自动化测试', '运营指南'],
      },
      ax: {
        name: 'AI转型与自动化', short: '用AI智能体和自动化减少重复工作,改变团队的运作方式。',
        lead: '找出反复出现的工作,交给AI和自动化。在正式开发之前,先用一个可运行的小型演示验证效果。',
        who: ['团队在重复同样的客服回复、文档或数据整理', '想用AI检索内部文档和数据', '同样的信息要在多个工具之间来回复制'],
        scope: [
          ['AI智能体', '首轮回复、摘要、草稿和分类。'],
          ['文档与数据自动化', '识别表单、整理表格、生成报告。'],
          ['内部知识检索', '基于您自己的文档作答(RAG)。'],
          ['工具集成', '邮件、聊天、表格和内部系统之间的自动联动。'],
        ],
        deliver: ['工作流程评估', '可运行的演示', '正式环境的自动化与用户指南', '衡量效果的指标'],
      },
      localization: {
        name: '本地化与全球拓展', short: '让您的服务支持14种以上语言,并在各国被搜索到。',
        lead: '不只是翻译。我们按国家调整语言结构、日期、数字和货币格式,以及搜索可见度。',
        who: ['服务只有一种语言,想拓展到海外', '已经翻译了,但海外搜索引擎找不到您', '需要按国家区分的支付方式和格式'],
        scope: [
          ['多语言架构', '字符串提取、语言切换、按语言划分的URL。'],
          ['多语言SEO', 'hreflang、按语言划分的站点地图、搜索引擎收录。'],
          ['本地格式', '日期、数字、货币和地址。'],
          ['翻译QA', '术语表,以及按语言自动检查缺失字符串。'],
        ],
        deliver: ['各语言的页面和URL', '术语表', '各语言的字符串检查工具', '搜索引擎收录'],
      },
      launch: {
        name: '全球应用商店上架', short: '在 App Store、Google Play、Microsoft Store 和 Mac App Store 上架并处理审核。',
        lead: '我们负责商店注册、审核回复和各语言的商店页面,上架后继续发布更新。',
        who: ['应用已经做好,但商店注册卡住了', '应用在审核中被拒', '需要各个国家的商店页面'],
        scope: [
          ['商店注册', '开发者账号设置、应用信息、年龄分级、隐私标签。'],
          ['审核处理', '政策核查、拒审原因分析、修改并重新提交。'],
          ['商店页面本地化', '各语言的描述和截图。'],
          ['支付设置', '应用内购买、价格档位、按国家定价。'],
        ],
        deliver: ['在商店中上线的应用', '各语言的商店页面', '审核记录', '更新发布流程'],
      },
      commerce: {
        name: '电商与跨境销售', short: '通过销售渠道和运营工具,把您的商品连接到海外客户。',
        lead: '我们搭建面向海外销售所需的网店、多语言商品数据,以及支付、物流和财务的对接。',
        who: ['国内已有销售,想卖到海外', '每个渠道的商品数据都要单独编辑', '订单、库存和结算靠手工核对'],
        scope: [
          ['销售渠道', '自有网店与海外电商平台对接。'],
          ['多语言商品数据', '各语言的名称、描述、选项和尺码表。'],
          ['订单与库存同步', '在各渠道之间自动同步订单和库存。'],
          ['结算与报表', '自动汇总销售额、手续费和回款。'],
        ],
        deliver: ['销售渠道与对接', '多语言商品数据', '订单与库存同步', '结算报表'],
      },
      operate: {
        name: '运营与增长', short: '上线之后:修复错误、提升速度、增加功能、核查成本。',
        lead: '上线只是开始。我们盯着指标,减少错误,补上用户需要的功能,并控制基础设施成本。',
        who: ['需要有人接手其他供应商开发的服务', '错误和卡顿的页面反复出现', '服务器费用不断上涨'],
        scope: [
          ['错误处理', '查看错误日志、定位原因、发布修复。'],
          ['性能', '更快的页面和查询。'],
          ['功能成长', '根据使用数据增加和精简功能。'],
          ['成本核查', '核查云资源用量并降低成本。'],
        ],
        deliver: ['月度运营报告', '错误处理记录', '改进版本发布', '成本核查结果'],
      },
    },
  },

  why: [
    ['从一开始就是多语言', '多语言架构在设计阶段就已纳入,日后增加语言无需重做。'],
    ['先约定范围', '功能、工期和费用在开工前以书面确定。任何变更都先达成一致再动手。'],
    ['代码和账号归您所有', '源代码、域名、商店和云账号以您的名义创建并移交。'],
    ['测试是交付的一部分', '包含核心功能的自动化测试,以及按语言的缺失字符串检查。'],
    ['每周同步进度', '每周您都能看到可运行的页面和剩余的工作。'],
    ['只处理必要的数据', '个人数据仅限于功能所需,并尽可能在设备本地处理。'],
  ],

  steps: [
    ['沟通咨询', '目标、目标市场和截止时间。'],
    ['范围与报价', '功能清单、工期和费用,以书面确定。'],
    ['演示', '先让核心页面和流程跑起来。'],
    ['开发与测试', '每周更新,自动化测试。'],
    ['本地化与上线', '各语言页面,商店和搜索引擎收录。'],
    ['运营与改进', '指标、错误处理、增长。'],
  ],

  cta: { title: '洽谈项目', text: '请把您想做的东西、目标市场和时间安排发邮件告诉我们。' },

  products: {
    title: '产品',
    desc: 'EarnToLink 的自研产品:两款移动应用(Roll Tidy、Roll Flick)和三款桌面应用(Space Map、Dupeless、Archive Fix)。全部即将推出。',
    eyebrow: '自研产品', h1: '产品', lead: '两款移动应用和三款桌面应用。全部即将推出。', tabsLabel: '分类',
    groups: { mobile: 'Android · iOS。照片清理。', desktop: 'macOS · Windows。磁盘、文件、压缩包。' },
    prin: { eyebrow: '产品原则', title: '小巧而诚实', text: '我们五款应用共同遵循。' },
    principles: [
      ['设备本地处理', '文件和照片只在设备上分析。不会向服务器发送任何内容。'],
      ['无广告,无追踪', '没有广告、统计分析、崩溃上报和账号。'],
      ['一次性购买', '没有订阅。每款应用 ₩10,000 以内。'],
      ['可恢复的删除', '删除的文件和照片会进入回收站,可以恢复。'],
    ],
    featTitle: '{name} 的功能',
    privacy: {
      mobile: '照片只在设备上分析,不会发送到任何地方。',
      desktop: '文件只在设备上处理,不会发送到任何地方。',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: '相似照片、模糊照片、截图和大体积视频',
        lead: '在设备上分析照片库,按类别归集可以清理的内容。',
        features: [
          ['相似照片分组', '用64位差值哈希,把90秒内拍摄且看起来相似的照片分为一组。'],
          ['最佳照片', '建议保留每组中最清晰的一张。收藏的照片绝不会成为删除候选。'],
          ['模糊照片', '相对整个照片库找出模糊的照片。过暗或过亮的照片会被跳过。'],
          ['截图', '归集截图相册中的照片。'],
          ['大体积视频', '按估算大小从大到小排列视频。'],
          ['可恢复的删除', '移入 Android 回收站或 iOS“最近删除”(30天)。'],
        ],
        specs: [['平台', 'Android · iOS'], ['处理方式', ONDEVICE], ['删除', '移入系统回收站'], ['语言', APP_LANGS], ['价格', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: '逐张滑动照片:保留或删除',
        lead: '按拍摄月份划分照片,再一张一张地决定去留。',
        features: [
          ['按月份', '按拍摄月份分组,最近的在前。'],
          ['滑动', '向左滑动标记为删除,向右滑动保留。'],
          ['撤销', '撤回上一次的决定。'],
          ['删除前复核', '一个月处理完后,先复核已标记的照片,再一次性清理。'],
          ['进度', '已清理的照片、连续天数和已完成的月份。仅保存在设备上。'],
          ['设备本地处理', '照片不会发送到服务器。'],
        ],
        specs: [['平台', 'Android · iOS'], ['处理方式', ONDEVICE], ['删除', '移入系统回收站'], ['语言', APP_LANGS], ['价格', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: '以矩形树图显示占用磁盘的文件夹和文件',
        lead: '扫描文件夹,用面积表示大小,方便先清理最大的项目。',
        features: [
          ['矩形树图', '方块化矩形树图,按文件类型着色:视频、图片、音频、文档、压缩包、程序、其他。'],
          ['三种视图', '地图、最大文件、按类型统计大小。'],
          ['快捷文件夹', '主目录、下载、桌面、文档、图片、视频、C盘(Windows)。'],
          ['导航', '可深入子文件夹,也可返回上一级。'],
          ['Finder · 资源管理器', '在 Finder 或资源管理器中定位所选项目。'],
          ['移入回收站', '删除的项目可从回收站恢复。没有权限的文件夹会被跳过并计数。'],
        ],
        specs: [['平台', 'macOS · Windows'], ['处理方式', ONDEVICE], ['删除', '移入回收站'], ['语言', APP_LANGS], ['价格', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: '找出内容完全相同的文件并清理',
        lead: '比较的是内容而不是名称:先比大小,再比首尾各64 KB,最后比 SHA-256。',
        features: [
          ['三阶段比较', '文件列表、快速比较(首尾各64 KB)、完整比较(SHA-256)。'],
          ['多个文件夹', '可设置多个搜索文件夹和最小文件大小,并可跳过隐藏文件。'],
          ['自动选择', '保留最早的、最新的或路径最短的。'],
          ['始终保留一个', '每组至少保留一个文件。'],
          ['移入回收站', '只有选中的文件会进入回收站。可以恢复。'],
          ['Finder · 资源管理器', '直接打开文件所在位置。'],
        ],
        specs: [['平台', 'macOS · Windows'], ['处理方式', ONDEVICE], ['比较', '大小 → 首尾64 KB → SHA-256'], ['语言', APP_LANGS], ['价格', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: '解压和创建压缩包,韩文文件名不乱码',
        lead: '检测韩文版 Windows 制作的 ZIP 中的 CP949 文件名并还原。基于 7-Zip 构建。',
        features: [
          ['韩文文件名修复', '检查没有 UTF-8 标志的 ZIP 条目,并自动转换 CP949(韩文版 Windows)文件名。'],
          ['16种格式', 'ZIP、7Z、RAR、TAR、GZ、TGZ、BZ2、XZ、TXZ、ISO、CAB、LZH、ARJ、WIM、ZST、DMG。'],
          ['创建压缩包', 'ZIP 或 7Z,可选快速、标准或最大压缩。'],
          ['AES-256 密码', 'ZIP 使用 AES-256;7Z 还会加密文件名。'],
          ['拖放操作', '压缩包会被解压,其他文件会被压缩。'],
          ['内置 7-Zip 26.04', '无需另外安装。'],
        ],
        specs: [['平台', 'macOS · Windows'], ['处理方式', ONDEVICE], ['引擎', '7-Zip 26.04 (LGPL)'], ['语言', APP_LANGS], ['价格', ONE_TIME]],
      },
    },
  },

  about: {
    title: '关于我们',
    desc: '关于 EarnToLink(언투링크):连接市场与世界的软件企业。使命、服务、原则和工商信息。',
    eyebrow: '关于我们', h1: 'EarnToLink', lead: 'EarnToLink(언투링크)是一家连接市场与世界的软件企业。',
    mission: {
      eyebrow: '使命', title: '连接市场与世界',
      body: [
        '许多优秀的产品和服务,常常被困在一个国家、一种语言之内。EarnToLink 打造跨越这道鸿沟的软件。',
        '我们开发产品,用AI和自动化让运营更轻松,并通过多种语言和应用商店把它们带到全球市场。上线之后,我们依据数据持续改进。',
        '我们按同样的标准打造自己的应用。状态如实展示:尚未发布的产品标注为“即将推出”。',
      ],
    },
    do: { eyebrow: '服务', title: '我们做什么', text: '注册业务:应用软件开发与供应(主营)、电子商务零售、电子商务零售中介。' },
    why: { eyebrow: '原则', title: '合作方式' },
    info: { eyebrow: '公司', title: '工商信息' },
  },

  principles: {
    title: '合作方式',
    desc: 'EarnToLink 的合作方式:从一开始就是多语言、先约定范围、代码和账号归您所有、包含测试。流程与合同条款。',
    eyebrow: '合作方式', h1: '合作方式', lead: '原则、流程与合同条款。',
    why: { eyebrow: '原则', title: '六项承诺', text: '适用于每一个项目。' },
    steps: { eyebrow: '流程', title: '步骤', text: '从沟通咨询到运营。' },
    terms: { eyebrow: '合同', title: '合同与费用条款', rows: [
      ['项目', '每个项目的范围、工期、费用和付款条件,均在合同中确定'],
      ['范围变更', '变更及其费用须先经双方同意,再继续推进'],
      ['权属', '款项付清后,源代码和账号移交给客户'],
      ['自研应用', '一次性购买 · 每款应用 ₩10,000 以内 · 无订阅 · 通过各应用商店支付'],
    ] },
  },

  contact: {
    title: '联系我们',
    desc: `项目、产品、隐私或合作事宜,请联系 EarnToLink:${EMAIL}`,
    eyebrow: '联系我们', h1: '联系我们', lead: '通过邮件联系。我们以韩语或英语回复。',
    topics: [
      ['code', '项目', '产品开发、AI自动化、本地化、应用商店上架、电商、运营'],
      ['package', '产品', '我们应用的功能、发布日期和缺陷'],
      ['receipt', '支付', '应用内的支付与退款遵循各应用商店的政策'],
      ['shield', '隐私', '查阅、更正、删除或停止处理的请求'],
      ['users', '合作', '合作及其他提案'],
    ],
    brief: { title: '项目咨询时建议附上', items: ['您想做什么,以及原因', '目标市场和语言', '期望的时间安排', '可参考的服务或资料'] },
  },

  news: {
    'business-areas': { title: '我们的服务领域', summary: '产品开发、AI转型、本地化、应用商店上架、电商、运营。',
      body: ['EarnToLink 服务领域概览。', '共有六个:产品开发、AI转型与自动化、本地化与全球拓展、全球应用商店上架、电商与跨境销售,以及运营与增长。', '项目咨询请发送至 hello@earntolink.com。'] },
    'earntolink-com-launch': { title: 'earntolink.com 正式上线', summary: 'EarnToLink 网站以14种语言上线。',
      body: ['EarnToLink 网站 earntolink.com 现已上线。', '网站介绍了我们的服务领域、自研产品、公司信息、隐私政策和联系方式。', '提供韩语、英语、日语、中文(简体和繁体)、西班牙语、法语、德语、葡萄牙语、意大利语、越南语、印度尼西亚语、泰语和俄语版本。'] },
    'product-lineup': { title: '我们的自研产品', summary: '两款移动应用和三款桌面应用。',
      body: ['自研产品的当前状态。', '移动应用 Roll Tidy 和 Roll Flick,以及桌面应用 Space Map、Dupeless 和 Archive Fix,均即将推出。'] },
  },
  newsPage: { title: '动态', desc: 'EarnToLink 动态:服务领域、网站上线和产品状态。' },

  privacy: {
    title: '隐私政策',
    desc: 'EarnToLink 关于网站、邮件咨询和自研应用的隐私政策。2026年10月10日起施行。',
    eyebrow: '政策', lead: '2026年10月10日起施行',
    sections: [
      { id: 'general', h: '1. 总则', html: `<p>EarnToLink(언투링크,以下简称“EarnToLink”)依据《韩国个人信息保护法》(Personal Information Protection Act of Korea)保护个人信息。本政策适用于网站 earntolink.com 以及 EarnToLink 开发的应用。</p><p>概要:本网站不使用注册、表单、Cookie、统计分析或广告。我们的应用只在设备上处理文件和照片,绝不会发送到任何地方。</p>` },
      { id: 'site', h: '2. 网站', html: `<ul><li>没有注册、登录或表单。</li><li>不使用 Cookie、统计分析工具或广告脚本。</li><li>网站由 GitHub Pages(GitHub, Inc.)提供服务。GitHub 可能出于运营和安全目的处理 IP 地址等访问日志,详见<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>。</li><li>Pretendard 字体从 jsDelivr CDN 加载,该 CDN 可能会收到您浏览器的 IP 地址等请求信息。</li><li>如果日后引入 Cookie 或统计分析,会先更新本政策。</li></ul>` },
      { id: 'email', h: '3. 邮件咨询', html: `<table><tr><th>项目</th><th>目的</th><th>保存期限</th></tr><tr><td>邮箱地址、显示名称、邮件内容及附件</td><td>阅读并回复咨询、项目洽谈、处理您的请求</td><td>处理完毕后立即删除。如后续签订合同,则在合同期限及法律要求的期限内保存</td></tr></table><p>咨询邮件通过 Google LLC 提供的 Gmail 接收和存储。</p>` },
      { id: 'apps', h: '4. 我们的应用', html: `<p>适用应用:Roll Tidy(정리 싹)、Roll Flick(넘겨 정리)、Space Map(용량 지도)、Dupeless(중복 싹)、Archive Fix(한글 압축)。全部即将推出。</p><div class="table-scroll"><table><tr><th>应用</th><th>处理的数据</th><th>处理位置</th><th>是否对外发送</th></tr><tr><td>Roll Tidy</td><td>您授权访问的照片库中的照片和视频</td><td>设备本地</td><td>无</td></tr><tr><td>Roll Flick</td><td>您授权访问的照片库中的照片</td><td>设备本地</td><td>无</td></tr><tr><td>Space Map</td><td>您所选文件夹中文件的名称、大小和类型</td><td>设备本地</td><td>无</td></tr><tr><td>Dupeless</td><td>您所选文件夹中文件的大小和内容哈希</td><td>设备本地</td><td>无</td></tr><tr><td>Archive Fix</td><td>您所选的压缩包和文件</td><td>设备本地</td><td>无</td></tr></table></div><ul><li>应用不会连接网络,也绝不会上传文件或照片。</li><li>没有账号、广告、统计分析、崩溃上报或追踪。</li><li>删除的文件和照片会进入系统回收站(iOS 上为“最近删除”),可以恢复。</li><li>设置、进度记录(Roll Flick)和照片分析缓存(Roll Tidy:哈希、清晰度、亮度)仅保存在设备上的应用存储空间中。</li><li>支付由各应用商店处理。EarnToLink 不会收到任何支付信息。</li></ul>` },
      { id: 'projects', h: '5. 客户项目', html: `<p>客户项目涉及客户的个人数据时,处理的范围和方式遵循与该客户签订的合同和数据处理协议。</p>` },
      { id: 'third', h: '6. 向第三方提供', html: `<p>除法律要求的情形外,我们不向第三方提供个人信息。</p>` },
      { id: 'rights', h: '7. 您的权利', html: `<p>您可以随时请求查阅、更正、删除或停止处理。请将请求发送至 ${mail},我们会及时处理。</p>` },
      { id: 'destroy', h: '8. 删除', html: `<p>个人信息在保存期限届满或目的达成后立即销毁。电子文件以无法恢复的方式删除。</p>` },
      { id: 'security', h: '9. 安全', html: `<p>咨询邮箱仅限代表本人访问,且我们收集的个人信息不超出必要范围。</p>` },
      { id: 'officer', h: '10. 个人信息保护负责人', html: `<table><tr><th>姓名</th><td>Juhwan Ma(代表)</td></tr><tr><th>邮箱</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. 救济渠道(韩国)', html: `<ul><li>个人信息侵权举报中心:privacy.kisa.or.kr,118(韩国境内)</li><li>个人信息纠纷调解委员会:www.kopico.go.kr,1833-6972</li></ul>` },
      { id: 'changes', h: '12. 变更', html: `<p>本政策自2026年10月10日起施行。如有变更,将连同施行日期在本页公布。</p>` },
    ],
  },

  terms: {
    title: '使用条款',
    desc: 'EarnToLink 网站使用条款。2026年10月10日起施行。',
    eyebrow: '政策', lead: '2026年10月10日起施行',
    sections: [
      { id: 'purpose', h: '1. 目的', html: '<p>本条款规定使用 EarnToLink 运营的网站 earntolink.com 的条件。</p>' },
      { id: 'content', h: '2. 内容权利', html: '<p>本网站的文字、图片和代码的权利归 EarnToLink 所有。本网站展示的第三方商标归其各自所有者所有。</p>' },
      { id: 'accuracy', h: '3. 产品与服务信息', html: '<p>产品状态、功能和服务说明以撰写时为准。尚未发布产品的功能、价格和时间安排可能会有变化。</p>' },
      { id: 'projects', h: '4. 项目合同', html: '<p>开发、自动化、本地化、上架和运营服务,遵循各项目的合同。本条款与合同不一致时,以合同为准。</p>' },
      { id: 'apps', h: '5. 应用的使用', html: '<p>各应用还须遵守其分发渠道所在商店(App Store、Google Play、Microsoft Store 等)的条款及应用自身的声明。</p>' },
      { id: 'links', h: '6. 外部链接', html: '<p>外部网站适用其各自的条款和政策。</p>' },
      { id: 'liability', h: '7. 责任限制', html: '<p>在法律允许的范围内,EarnToLink 对因使用本网站而产生的间接损失不承担责任。</p>' },
      { id: 'law', h: '8. 适用法律', html: '<p>本条款适用大韩民国法律。</p>' },
      { id: 'contact', h: '9. 联系方式', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: '连接市场与世界。', s: '产品开发 · AI转型 · 本地化<br>应用商店上架 · 电商 · 运营', tags: ['网页 · 应用 · 桌面', 'AI · 自动化', '14种语言'] },
};
