// Español (neutro internacional). Misma estructura que ko.mjs / en.mjs. Sin rayas largas.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 idiomas (inglés, coreano, japonés, chino simplificado y tradicional, alemán, francés, español, portugués, italiano)';
const ONDEVICE = 'En el dispositivo · sin conexión a la red';
const ONE_TIME = 'Pago único · ₩10,000 o menos';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Ingresos publicitarios, bien diseñados.",
  translationNote: 'Esta página es una traducción. Si difiere del original en coreano, prevalece el original en coreano.',

  ui: {
    skip: 'Saltar al contenido', menu: 'Menú', language: 'Idioma', mainNav: 'Principal', breadcrumb: 'Ruta de navegación', toc: 'Contenido', homeAria: 'Inicio de EarnToLink',
    nav: { services: "Servicios", products: 'Productos', about: 'Nosotros', principles: 'Cómo trabajamos', news: 'Novedades', contact: 'Contacto' },
    home: 'Inicio', privacy: 'Política de privacidad', terms: 'Términos', rss: 'RSS',
    footer: { services: "Servicios", products: 'Productos', company: 'Empresa', policy: 'Políticas' },
    biz: { name: 'Nombre comercial', rep: 'Representante', no: 'N.º de registro de empresa', tax: 'Régimen fiscal', kinds: 'Actividad', mail: 'Correo electrónico' },
    rights: '© 2026 EarnToLink. Todos los derechos reservados.',
    view: 'Detalles', all: 'Todos los productos', allServices: "Todos los servicios", email: 'Correo electrónico', mailBtn: 'Escríbanos', projectBtn: "Solicitar una consulta",
    platform: 'Plataforma', status: 'Estado', features: 'Funciones', specs: 'Especificaciones', related: 'Otros productos', privacyNote: 'Privacidad',
    productIllustration: 'Ilustración del producto: ',
    heroLabel: 'Ilustración de un panel con los ingresos publicitarios de sitios web, apps y comercio electrónico',
    newsFeedTitle: 'Novedades de EarnToLink', newsFeedDesc: 'Novedades de EarnToLink (언투링크)',
    notFound: { title: 'Página no encontrada', text: 'La dirección ha cambiado o la página no existe.', home: 'Ir al inicio' },
  },

  status: { soon: 'Próximamente', dev: 'En desarrollo', live: 'Disponible' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Contribuyente general (Corea)',
    form: 'Forma jurídica', formValue: 'Empresario individual (Corea)', kindsLabel: 'Actividad registrada', site: 'Sitio web',
    kinds: ['Desarrollo y suministro de software de aplicación (principal)', 'Venta minorista por comercio electrónico', 'Intermediación de venta minorista por comercio electrónico'],
  },

  categories: {
    mobile: { name: 'Apps móviles', plat: 'Android · iOS' },
    desktop: { name: 'Apps de escritorio', plat: 'macOS · Windows' },
  },

  home: {
    "title": "EarnToLink | Consultoría de ingresos publicitarios para sitios web, apps y plataformas de comercio",
    "desc": "EarnToLink es una consultoría de ingresos publicitarios. Evaluamos y diseñamos cómo generan ingresos con publicidad los sitios web, las apps y las plataformas de comercio: elección y configuración de plataformas, cumplimiento de políticas y privacidad, retail media y operación publicitaria continua.",
    "eyebrow": "Consultoría de ingresos publicitarios para empresas",
    "h1": "Ingresos publicitarios,<br>bien diseñados.",
    "lead": "Ayudamos a sitios web, apps y plataformas de comercio a obtener ingresos estables con la publicidad. Analizamos su situación actual, elegimos las plataformas y los espacios publicitarios adecuados, y le acompañamos en las revisiones de políticas y en la operación diaria.",
    "meta": [
      "Sitios web y medios",
      "Apps móviles",
      "Comercio y retail media"
    ],
    "stats": [
      [
        "6",
        "Áreas de consultoría"
      ],
      [
        "3",
        "Canales de ingresos: web, app y comercio"
      ],
      [
        "6",
        "Etapas en cada proyecto"
      ],
      [
        "14",
        "Idiomas del sitio web"
      ]
    ],
    "services": {
      "eyebrow": "Servicios",
      "title": "Seis áreas de consultoría",
      "text": "Del diagnóstico a la configuración de plataformas, las revisiones de políticas y la operación. Contrate solo lo que necesite."
    },
    "why": {
      "eyebrow": "Por qué EarnToLink",
      "title": "Ingresos y confianza, protegidos a la vez",
      "text": "Seis principios que aplicamos en cada proyecto."
    },
    "how": {
      "eyebrow": "Cómo trabajamos",
      "title": "De la primera llamada a la operación continua",
      "text": "Seis etapas; en cada una validamos los resultados con cifras antes de avanzar."
    },
    "co": {
      "eyebrow": "Empresa",
      "title": "EarnToLink",
      "text": "Empresario individual. Consultoría de ingresos publicitarios y desarrollo de software."
    },
    "news": {
      "eyebrow": "Novedades",
      "title": "Últimas novedades"
    }
  },

  services: {
    "title": "Servicios",
    "desc": "Servicios de EarnToLink: diagnóstico y estrategia de ingresos publicitarios, monetización de sitios web y medios, monetización de apps, retail media y desarrollo de plataformas publicitarias, cumplimiento de políticas y privacidad, operación y reportes publicitarios.",
    "eyebrow": "Servicios",
    "h1": "Servicios",
    "lead": "Seis áreas. Elija solo las que necesite.",
    "whoLabel": "Es ideal si",
    "scopeLabel": "Qué hacemos",
    "deliverLabel": "Qué recibe",
    "otherLabel": "Otros servicios",
    "items": {
      "strategy": {
        "name": "Diagnóstico y estrategia de ingresos publicitarios",
        "short": "Revisamos su tráfico, sus espacios publicitarios, la configuración de las plataformas y sus métricas de ingresos, y definimos el rumbo de su modelo de ingresos.",
        "lead": "Primero averiguamos de dónde provienen sus ingresos publicitarios y dónde se pierden. Registramos las cifras sobre una misma base de referencia y luego fijamos prioridades y un plan de acción.",
        "who": [
          "Muestra anuncios, pero gana menos de lo esperado",
          "Está decidiendo si cambiar o añadir plataformas publicitarias",
          "Necesita incluir los ingresos publicitarios en su plan de negocio"
        ],
        "scope": [
          [
            "Revisión de la situación actual",
            "Origen del tráfico, espacios publicitarios, configuración de plataformas y flujo de ingresos."
          ],
          [
            "Métricas clave",
            "Valores de referencia de RPM de página, tasa de impresiones, tasa de llenado y visibilidad."
          ],
          [
            "Modelo de ingresos",
            "La combinación adecuada de publicidad, afiliación, suscripciones y venta directa de espacios."
          ],
          [
            "Plan de acción",
            "Prioridades, calendario e impacto esperado de cada mejora."
          ]
        ],
        "deliver": [
          "Informe de diagnóstico",
          "Tabla de métricas de referencia",
          "Recomendaciones sobre el modelo de ingresos",
          "Plan de acción por fases"
        ]
      },
      "web": {
        "name": "Monetización de sitios web y medios",
        "short": "Preparación para la aprobación, diseño de espacios publicitarios y equilibrio entre velocidad y rentabilidad en blogs, medios de noticias y sitios informativos.",
        "lead": "En lugar de añadir más anuncios, buscamos ubicaciones que no interrumpan la lectura. Nos ocupamos de todo, desde la preparación para la aprobación hasta el diseño de espacios y la configuración programática.",
        "who": [
          "Se prepara para la revisión de una plataforma publicitaria",
          "Los anuncios han ralentizado sus páginas o aumentado la tasa de rebote",
          "Quiere trabajar con varias redes publicitarias a la vez"
        ],
        "scope": [
          [
            "Preparación para la aprobación",
            "Revisión de la estructura del sitio, las páginas obligatorias y la calidad del contenido, y envío de la solicitud."
          ],
          [
            "Diseño de espacios",
            "Posiciones, tamaños y separaciones que respetan el flujo del contenido."
          ],
          [
            "Velocidad de página",
            "Carga diferida y prevención de saltos de diseño para que las páginas sigan siendo rápidas."
          ],
          [
            "Configuración programática",
            "Ad server, header bidding y reglas de precio mínimo."
          ]
        ],
        "deliver": [
          "Lista de verificación para la aprobación",
          "Plan de ubicaciones",
          "Configuración publicitaria y guía de implementación",
          "Informe comparativo antes y después"
        ]
      },
      "app": {
        "name": "Monetización de apps",
        "short": "Formatos publicitarios, mediación y frecuencia en su app móvil, diseñados según cómo la usan las personas.",
        "lead": "Decidimos cuándo y dónde aparecen los banners, los intersticiales y los anuncios con recompensa, y hacemos crecer los ingresos sin perder de vista la retención.",
        "who": [
          "Va a incorporar publicidad a su app por primera vez",
          "Las valoraciones o la retención bajaron tras añadir anuncios",
          "Quiere combinar varias redes publicitarias mediante mediación"
        ],
        "scope": [
          [
            "Diseño de formatos",
            "Ubicación y momento de banners, intersticiales, anuncios con recompensa y anuncios nativos."
          ],
          [
            "Mediación",
            "Prioridad y configuración de pujas entre redes publicitarias."
          ],
          [
            "Frecuencia y experiencia",
            "Límites de frecuencia, protección de la primera sesión y usuarios de pago sin anuncios."
          ],
          [
            "Anuncios y compras dentro de la app",
            "Productos para quitar anuncios y cómo combinar anuncios con recompensa y compras."
          ]
        ],
        "deliver": [
          "Mapa de ubicaciones publicitarias",
          "Plan de configuración de la mediación",
          "Documento de reglas de frecuencia",
          "Comparativa de retención e ingresos"
        ]
      },
      "retail": {
        "name": "Retail media y desarrollo de plataformas publicitarias",
        "short": "Ayudamos a marketplaces y plataformas a crear productos y una operación publicitaria para que vendedores y marcas puedan anunciarse en ellos.",
        "lead": "Convertimos el tráfico y los datos de su plataforma en productos publicitarios, y definimos con usted los precios, la venta y los reportes de resultados.",
        "who": [
          "Quiere abrir una línea de negocio publicitaria en su marketplace o plataforma",
          "Vende y factura la publicidad de sus vendedores de forma manual",
          "Los anunciantes piden reportes que demuestren resultados"
        ],
        "scope": [
          [
            "Diseño de productos publicitarios",
            "Espacios vendibles como resultados patrocinados, productos destacados, banners y correo electrónico."
          ],
          [
            "Precios y ventas",
            "Productos por subasta, de precio fijo y por tiempo, con sus reglas de precios."
          ],
          [
            "Datos y medición",
            "Impresiones, clics y atribución de compras medidos dentro de las normas de privacidad."
          ],
          [
            "Modelo operativo",
            "Alta de anunciantes, revisión de anuncios, facturación y reportes de rendimiento."
          ]
        ],
        "deliver": [
          "Catálogo de productos publicitarios y tarifario",
          "Modelo de resultados del negocio publicitario",
          "Estándares de medición y plantillas de reportes",
          "Procedimientos operativos"
        ]
      },
      "policy": {
        "name": "Cumplimiento de políticas publicitarias y privacidad",
        "short": "Revisión de políticas, gestión de rechazos, gestión del consentimiento, ads.txt y políticas de privacidad.",
        "lead": "Una cuenta segura es lo primero; los ingresos vienen después. Detectamos a tiempo los riesgos de política y, si rechazan una solicitud o limitan una cuenta, identificamos la causa y respondemos.",
        "who": [
          "Le rechazaron la aprobación publicitaria o le limitaron la cuenta",
          "Necesita gestionar el consentimiento de visitantes de otras regiones",
          "Debe actualizar su política de privacidad antes de activar los anuncios"
        ],
        "scope": [
          [
            "Revisión de políticas",
            "Riesgos de política en el contenido, la ubicación de anuncios y el origen del tráfico."
          ],
          [
            "Rechazos y limitaciones",
            "Análisis de la causa, correcciones y solicitud de nueva revisión."
          ],
          [
            "Gestión del consentimiento",
            "Avisos de consentimiento por región vinculados a la configuración publicitaria."
          ],
          [
            "Archivos y documentos obligatorios",
            "ads.txt, app-ads.txt, política de privacidad y aviso de cookies."
          ]
        ],
        "deliver": [
          "Lista de verificación de políticas",
          "Registro de respuestas",
          "Configuración de la gestión del consentimiento",
          "Archivos y documentos obligatorios"
        ]
      },
      "ops": {
        "name": "Operación publicitaria y asesoría en reportes",
        "short": "Cada mes analizamos las métricas de ingresos, hacemos pruebas y corregimos lo necesario, incluido el tráfico no válido y las diferencias en los pagos.",
        "lead": "Los ingresos publicitarios no se configuran una sola vez. Revisamos las métricas cada mes y conservamos solo los cambios que las pruebas han validado.",
        "who": [
          "Sus ingresos publicitarios varían mucho de un mes a otro",
          "Consolida a mano los reportes de varias plataformas",
          "Nadie en su equipo se ocupa de la operación publicitaria"
        ],
        "scope": [
          [
            "Revisión mensual",
            "Variaciones de ingresos, impresiones, precios y tasa de llenado, y sus causas."
          ],
          [
            "Pruebas",
            "Pruebas comparativas de ubicaciones, formatos publicitarios y reglas de precios."
          ],
          [
            "Reporte unificado",
            "Los ingresos de todas las plataformas en un solo informe."
          ],
          [
            "Controles de calidad",
            "Tráfico no válido, calidad de los anuncios y diferencias en los pagos."
          ]
        ],
        "deliver": [
          "Informe mensual de operación",
          "Registro de pruebas",
          "Reporte unificado",
          "Lista priorizada de mejoras"
        ]
      }
    }
  },

  why: [
    [
      "Ingresos sin sacrificar la experiencia",
      "En lugar de añadir más anuncios, buscamos ubicaciones que mantengan las páginas rápidas y la navegación fluida."
    ],
    [
      "Medimos, no suponemos",
      "Registramos las cifras de partida antes de empezar y comparamos cada cambio sobre la misma base."
    ],
    [
      "Asesoría independiente",
      "No cobramos comisiones de las plataformas publicitarias, por lo que comparamos las opciones en igualdad de condiciones."
    ],
    [
      "Primero, el cumplimiento",
      "Hacemos crecer los ingresos solo dentro de las políticas publicitarias y las normas de privacidad. Sin clics inducidos ni tráfico no válido."
    ],
    [
      "Sus cuentas, sus datos",
      "Las cuentas publicitarias, los datos de pago y los reportes se crean y se conservan a su nombre."
    ],
    [
      "Informes semanales",
      "Cada semana le contamos qué ha cambiado, cómo han evolucionado las cifras y cuál es el siguiente paso."
    ]
  ],

  steps: [
    [
      "Primera llamada",
      "Su servicio, el volumen de tráfico y sus objetivos."
    ],
    [
      "Diagnóstico",
      "Revisión de ubicaciones, configuración y métricas de ingresos, y registro de la situación de partida."
    ],
    [
      "Diseño",
      "Plataformas publicitarias, ubicaciones y plan de cumplimiento."
    ],
    [
      "Configuración y pruebas",
      "Aplicación de los cambios y comparación de resultados antes y después."
    ],
    [
      "Aprobación y lanzamiento",
      "Revisiones de políticas, gestión del consentimiento y archivos obligatorios."
    ],
    [
      "Operación",
      "Revisiones mensuales, pruebas y reportes."
    ]
  ],

  cta: {
    "title": "Hablemos de sus ingresos publicitarios",
    "text": "Escríbanos indicando su sitio web o app, el tráfico mensual y el problema que enfrenta."
  },

  products: {
    title: 'Productos',
    desc: 'Productos propios de EarnToLink: dos apps móviles (Roll Tidy, Roll Flick) y tres apps de escritorio (Space Map, Dupeless, Archive Fix). Todas próximamente.',
    eyebrow: 'Productos propios', h1: 'Productos', lead: 'Dos apps móviles y tres apps de escritorio. Todas próximamente.', tabsLabel: 'Categorías',
    groups: { mobile: 'Android · iOS. Limpieza de fotos.', desktop: 'macOS · Windows. Discos, archivos, archivos comprimidos.' },
    prin: { eyebrow: 'Principios de producto', title: 'Pequeños y honestos', text: 'Comunes a nuestras cinco apps.' },
    principles: [
      ['En el dispositivo', 'Los archivos y las fotos se analizan solo en el dispositivo. No se envía nada a un servidor.'],
      ['Sin anuncios ni rastreo', 'Sin anuncios, analítica, informes de fallos ni cuentas.'],
      ['Pago único', 'Sin suscripciones. ₩10,000 o menos por app.'],
      ['Eliminación reversible', 'Los archivos y las fotos eliminados van a la papelera y se pueden restaurar.'],
    ],
    featTitle: 'Funciones de {name}',
    privacy: {
      mobile: 'Las fotos se analizan solo en el dispositivo y nunca se envían a ninguna parte.',
      desktop: 'Los archivos se procesan solo en el dispositivo y nunca se envían a ninguna parte.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Fotos similares, fotos borrosas, capturas de pantalla y videos grandes',
        lead: 'Analiza la fototeca en el dispositivo y reúne por categorías lo que se puede eliminar.',
        features: [
          ['Grupos de fotos similares', 'Agrupa las tomas hechas con menos de 90 segundos de diferencia que se parecen, mediante un hash de diferencia de 64 bits.'],
          ['Mejor toma', 'Sugiere conservar la foto más nítida de cada grupo. Los favoritos nunca son candidatos a eliminar.'],
          ['Fotos borrosas', 'Detecta fotos borrosas en relación con toda la fototeca. Se omiten las fotos muy oscuras o muy claras.'],
          ['Capturas de pantalla', 'Reúne las fotos del álbum de capturas de pantalla.'],
          ['Videos grandes', 'Ordena los videos por tamaño estimado, de mayor a menor.'],
          ['Eliminación reversible', 'Mueve los elementos a la papelera de Android o a Eliminados recientemente de iOS (30 días).'],
        ],
        specs: [['Plataformas', 'Android · iOS'], ['Procesamiento', ONDEVICE], ['Eliminación', 'Se mueve a la papelera del sistema'], ['Idiomas', APP_LANGS], ['Precio', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Deslice las fotos una por una: conservar o eliminar',
        lead: 'Separa las fotos por el mes en que se tomaron y le deja decidir sobre cada una.',
        features: [
          ['Por mes', 'Agrupa las fotos por mes de toma, empezando por las más recientes.'],
          ['Deslizar', 'Deslice a la izquierda para marcar para eliminar y a la derecha para conservar.'],
          ['Deshacer', 'Revierte la última decisión.'],
          ['Revisar antes de eliminar', 'Al final de un mes, revise las fotos marcadas y limpie todo de una vez.'],
          ['Progreso', 'Fotos limpiadas, racha de días y meses terminados. Se guardan solo en el dispositivo.'],
          ['En el dispositivo', 'Las fotos nunca se envían a un servidor.'],
        ],
        specs: [['Plataformas', 'Android · iOS'], ['Procesamiento', ONDEVICE], ['Eliminación', 'Se mueve a la papelera del sistema'], ['Idiomas', APP_LANGS], ['Precio', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Un treemap de las carpetas y archivos que ocupan su disco',
        lead: 'Escanea una carpeta y muestra el tamaño como área, para limpiar primero lo más grande.',
        features: [
          ['Treemap', 'Treemap cuadrificado, coloreado por tipo de archivo: video, imágenes, audio, documentos, archivos comprimidos, programas, otros.'],
          ['Tres vistas', 'Mapa, archivos más grandes y tamaño por tipo.'],
          ['Carpetas rápidas', 'Inicio, Descargas, Escritorio, Documentos, Imágenes, Videos, unidad C (Windows).'],
          ['Navegación', 'Entre en las subcarpetas y vuelva a la carpeta superior.'],
          ['Finder · Explorador', 'Muestra el elemento seleccionado en Finder o en el Explorador.'],
          ['Mover a la papelera', 'Los elementos eliminados se pueden restaurar desde la papelera. Las carpetas sin permiso se omiten y se cuentan.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Procesamiento', ONDEVICE], ['Eliminación', 'Se mueve a la papelera'], ['Idiomas', APP_LANGS], ['Precio', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Encuentre archivos con contenido idéntico y límpielos',
        lead: 'Compara el contenido, no los nombres: primero el tamaño, luego los primeros y los últimos 64 KB y después SHA-256.',
        features: [
          ['Comparación en tres etapas', 'Lista de archivos, comparación rápida (primeros y últimos 64 KB), comparación completa (SHA-256).'],
          ['Varias carpetas', 'Varias carpetas de búsqueda, tamaño mínimo de archivo, omisión de archivos ocultos.'],
          ['Selección automática', 'Conservar el más antiguo, el más reciente o la ruta más corta.'],
          ['Siempre queda uno', 'Debe permanecer al menos un archivo por grupo.'],
          ['Mover a la papelera', 'Solo los archivos seleccionados van a la papelera. Se pueden restaurar.'],
          ['Finder · Explorador', 'Abra directamente la ubicación del archivo.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Procesamiento', ONDEVICE], ['Comparación', 'Tamaño → primeros/últimos 64 KB → SHA-256'], ['Idiomas', APP_LANGS], ['Precio', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Extraiga y cree archivos comprimidos sin nombres de archivo coreanos dañados',
        lead: 'Detecta nombres de archivo CP949 en ZIP creados en Windows en coreano y los restaura. Basado en 7-Zip.',
        features: [
          ['Reparación de nombres en coreano', 'Revisa las entradas ZIP sin la marca UTF-8 y convierte automáticamente los nombres CP949 (Windows en coreano).'],
          ['16 formatos', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Crear archivos comprimidos', 'ZIP o 7Z, con compresión rápida, normal o máxima.'],
          ['Contraseña AES-256', 'AES-256 para ZIP; 7Z también cifra los nombres de archivo.'],
          ['Arrastrar y soltar', 'Los archivos comprimidos se extraen; los demás archivos se comprimen.'],
          ['7-Zip 26.04 incluido', 'Sin instalación aparte.'],
        ],
        specs: [['Plataformas', 'macOS · Windows'], ['Procesamiento', ONDEVICE], ['Motor', '7-Zip 26.04 (LGPL)'], ['Idiomas', APP_LANGS], ['Precio', ONE_TIME]],
      },
    },
  },

  about: {
    "title": "Nosotros",
    "desc": "Sobre EarnToLink: consultoría que ayuda a sitios web, apps y plataformas de comercio a generar ingresos con publicidad. Misión, servicios, principios y datos de la empresa.",
    "eyebrow": "Nosotros",
    "h1": "EarnToLink",
    "lead": "EarnToLink es una consultoría de ingresos publicitarios que diseña la forma en que las empresas ganan dinero con la publicidad.",
    "mission": {
      "eyebrow": "Misión",
      "title": "Publicidad que fortalece el negocio",
      "body": [
        "Muchas empresas crean buen contenido y buenos servicios, pero ganan poco con la publicidad. Los espacios no encajan, la configuración está desactualizada o un problema de políticas frena los ingresos.",
        "EarnToLink mide su punto de partida, elige las plataformas y los espacios publicitarios adecuados y apoya la operación diaria dentro de las políticas y las normas de privacidad. Le mostramos el resultado de cada cambio sobre la misma base de referencia.",
        "A partir de nuestra propia experiencia creando y operando sitios web y apps, defendemos un principio: la monetización no debe estropear la experiencia del usuario."
      ]
    },
    "do": {
      "eyebrow": "Servicios",
      "title": "Qué hacemos",
      "text": "Actividades registradas: desarrollo y suministro de software de aplicación (principal), venta minorista por comercio electrónico e intermediación de venta minorista por comercio electrónico."
    },
    "why": {
      "eyebrow": "Principios",
      "title": "Nuestros principios"
    },
    "info": {
      "eyebrow": "Empresa",
      "title": "Datos de la empresa"
    }
  },

  principles: {
    "title": "Cómo trabajamos",
    "desc": "Cómo trabaja EarnToLink: ingresos en equilibrio con la experiencia del usuario, resultados medidos, asesoría independiente y cumplimiento de políticas. Etapas y condiciones de contratación.",
    "eyebrow": "Cómo trabajamos",
    "h1": "Cómo trabajamos",
    "lead": "Principios, etapas y condiciones de contratación.",
    "why": {
      "eyebrow": "Principios",
      "title": "Seis principios",
      "text": "Se aplican a todos los proyectos."
    },
    "steps": {
      "eyebrow": "Proceso",
      "title": "Etapas",
      "text": "De la primera llamada a la operación."
    },
    "terms": {
      "eyebrow": "Contratación",
      "title": "Condiciones de contratación",
      "rows": [
        [
          "Proyectos",
          "Cada proyecto tiene su contrato, que fija el alcance, el calendario, los honorarios y las condiciones de pago"
        ],
        [
          "Cambios de alcance",
          "Los cambios y su coste se acuerdan antes de continuar con el trabajo"
        ],
        [
          "Titularidad",
          "Las cuentas publicitarias, los reportes y los documentos de configuración permanecen a su nombre"
        ],
        [
          "Honorarios",
          "Sin comisiones de las plataformas publicitarias · los honorarios de asesoría se indican en el contrato"
        ]
      ]
    }
  },

  contact: {
    "title": "Contacto",
    "desc": "Contacte con EarnToLink para consultoría de ingresos publicitarios, productos, privacidad o colaboraciones. hello@earntolink.com",
    "eyebrow": "Contacto",
    "h1": "Contacto",
    "lead": "Atendemos las consultas por correo electrónico y respondemos en coreano o en inglés.",
    "topics": [
      [
        "chart",
        "Consultoría",
        "Diagnóstico de ingresos publicitarios, monetización de webs y apps, retail media, problemas de políticas, asesoría de operación"
      ],
      [
        "package",
        "Productos",
        "Funciones, fechas de lanzamiento y errores de nuestras propias apps"
      ],
      [
        "receipt",
        "Pagos",
        "Los pagos y reembolsos de las apps se rigen por la política de cada tienda de aplicaciones"
      ],
      [
        "shield",
        "Privacidad",
        "Solicitudes de acceso, rectificación, supresión o limitación del tratamiento de datos personales"
      ],
      [
        "users",
        "Colaboraciones",
        "Propuestas de colaboración y otras propuestas"
      ]
    ],
    "brief": {
      "title": "Datos que nos ayudan a responder",
      "items": [
        "Qué gestiona (sitio web, app o plataforma de comercio) y su dirección",
        "Visitantes mensuales o usuarios activos",
        "Las plataformas publicitarias que usa y los problemas que detecta",
        "El plazo que le interesa"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink se centra en la consultoría de ingresos publicitarios",
      "summary": "Diagnóstico y estrategia, monetización de webs y apps, retail media, cumplimiento de políticas y asesoría de operación.",
      "body": [
        "EarnToLink ha reorientado sus servicios hacia la consultoría de ingresos publicitarios.",
        "Ahora ofrecemos seis servicios: diagnóstico y estrategia de ingresos publicitarios, monetización de sitios web y medios, monetización de apps, retail media y desarrollo de plataformas publicitarias, cumplimiento de políticas publicitarias y privacidad, y operación publicitaria y asesoría en reportes.",
        "Para solicitar una consulta, escriba a hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com ya está en línea",
      "summary": "El sitio web de EarnToLink ya está disponible en 14 idiomas.",
      "body": [
        "El sitio web de EarnToLink, earntolink.com, ya está en línea.",
        "Incluye nuestros servicios, productos propios, datos de la empresa, política de privacidad e información de contacto.",
        "Está disponible en coreano, inglés, japonés, chino (simplificado y tradicional), español, francés, alemán, portugués, italiano, vietnamita, indonesio, tailandés y ruso."
      ]
    },
    "product-lineup": {
      "title": "Nuestros productos propios",
      "summary": "Dos apps móviles y tres apps de escritorio.",
      "body": [
        "El estado actual de nuestros productos propios.",
        "Las apps móviles Roll Tidy y Roll Flick y las apps de escritorio Space Map, Dupeless y Archive Fix llegarán próximamente."
      ]
    }
  },
  newsPage: {
    "title": "Novedades",
    "desc": "Novedades de EarnToLink: actualización de servicios, lanzamiento del sitio web y estado de los productos."
  },

  privacy: {
    title: 'Política de privacidad',
    desc: 'Política de privacidad de EarnToLink para el sitio web, las consultas por correo electrónico y nuestras apps. En vigor desde el 10 de octubre de 2026.',
    eyebrow: 'Política', lead: 'En vigor desde el 10 de octubre de 2026',
    sections: [
      { id: 'general', h: '1. Disposiciones generales', html: `<p>EarnToLink (언투링크, "EarnToLink") protege la información personal conforme a la Ley de Protección de la Información Personal de Corea. Esta política abarca el sitio web earntolink.com y las apps creadas por EarnToLink.</p><p>Resumen: el sitio web no usa registro, formularios, cookies, analítica ni anuncios. Nuestras apps procesan archivos y fotos solo en el dispositivo y nunca los envían a ninguna parte.</p>` },
      { id: 'site', h: '2. Sitio web', html: `<ul><li>Sin registro, inicio de sesión ni formularios.</li><li>Sin cookies, herramientas de analítica ni scripts publicitarios.</li><li>El sitio web se sirve mediante GitHub Pages (GitHub, Inc.). GitHub puede procesar registros de acceso, como las direcciones IP, para el funcionamiento y la seguridad, conforme a la <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Declaración General de Privacidad de GitHub</a>.</li><li>La fuente Pretendard se carga desde la CDN de jsDelivr, que puede recibir información de la solicitud, como la dirección IP de su navegador.</li><li>Si alguna vez se introducen cookies o analítica, esta política se actualizará antes.</li></ul>` },
      { id: 'email', h: '3. Consultas por correo electrónico', html: `<table><tr><th>Datos</th><th>Finalidad</th><th>Conservación</th></tr><tr><td>Dirección de correo electrónico, nombre visible, contenido del mensaje y archivos adjuntos</td><td>Leer y responder consultas, asesoramiento de proyectos, atención de solicitudes</td><td>Se eliminan sin demora una vez atendidos. Si se celebra un contrato, se conservan durante la vigencia del contrato y el plazo exigido por la ley</td></tr></table><p>Los correos de consulta se reciben y almacenan en Gmail, servicio de Google LLC.</p>` },
      { id: 'apps', h: '4. Nuestras apps', html: `<p>Apps cubiertas: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Todas próximamente.</p><div class="table-scroll"><table><tr><th>App</th><th>Datos procesados</th><th>Dónde</th><th>Envío al exterior</th></tr><tr><td>Roll Tidy</td><td>Fotos y videos de las fototecas a las que concede acceso</td><td>En el dispositivo</td><td>Ninguno</td></tr><tr><td>Roll Flick</td><td>Fotos de las fototecas a las que concede acceso</td><td>En el dispositivo</td><td>Ninguno</td></tr><tr><td>Space Map</td><td>Nombres, tamaños y tipos de los archivos de las carpetas que elige</td><td>En el dispositivo</td><td>Ninguno</td></tr><tr><td>Dupeless</td><td>Tamaños de archivo y hashes de contenido de las carpetas que elige</td><td>En el dispositivo</td><td>Ninguno</td></tr><tr><td>Archive Fix</td><td>Archivos comprimidos y archivos que elige</td><td>En el dispositivo</td><td>Ninguno</td></tr></table></div><ul><li>Las apps no se conectan a la red y nunca suben archivos ni fotos.</li><li>Sin cuentas, anuncios, analítica, informes de fallos ni rastreo.</li><li>Los archivos y fotos eliminados van a la papelera del sistema (Eliminados recientemente en iOS) y se pueden restaurar.</li><li>Los ajustes, los registros de progreso (Roll Flick) y las cachés de análisis de fotos (Roll Tidy: hash, nitidez, brillo) permanecen en el almacenamiento de la app en el dispositivo.</li><li>Los pagos los gestiona cada tienda de apps. EarnToLink nunca recibe datos de pago.</li></ul>` },
      { id: 'projects', h: '5. Proyectos de clientes', html: `<p>Cuando un proyecto de cliente involucra datos personales del cliente, el alcance y el método del tratamiento se rigen por el contrato y el acuerdo de tratamiento de datos con dicho cliente.</p>` },
      { id: 'third', h: '6. Cesión a terceros', html: `<p>No facilitamos información personal a terceros, salvo cuando la ley lo exija.</p>` },
      { id: 'rights', h: '7. Sus derechos', html: `<p>Puede solicitar en cualquier momento el acceso, la rectificación, la eliminación o la suspensión del tratamiento. Envíe sus solicitudes a ${mail}; las atendemos sin demora.</p>` },
      { id: 'destroy', h: '8. Eliminación', html: `<p>La información personal se destruye sin demora una vez vencido su plazo de conservación o cumplida su finalidad. Los archivos electrónicos se eliminan de modo que no puedan recuperarse.</p>` },
      { id: 'security', h: '9. Seguridad', html: `<p>El acceso al correo de consultas se limita al representante, y no recopilamos más información personal de la necesaria.</p>` },
      { id: 'officer', h: '10. Responsable de privacidad', html: `<table><tr><th>Nombre</th><td>Juhwan Ma (Representante)</td></tr><tr><th>Correo electrónico</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Vías de reclamación (Corea)', html: `<ul><li>Centro de Denuncias de Infracciones de la Información Personal: privacy.kisa.or.kr, 118 (en Corea)</li><li>Comité de Mediación de Disputas sobre Información Personal: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Cambios', html: `<p>Esta política está en vigor desde el 10 de octubre de 2026. Los cambios se publicarán en esta página con su fecha de entrada en vigor.</p>` },
    ],
  },

  terms: {
    title: 'Términos',
    desc: 'Términos de uso del sitio web de EarnToLink. En vigor desde el 10 de octubre de 2026.',
    eyebrow: 'Política', lead: 'En vigor desde el 10 de octubre de 2026',
    sections: [
      { id: 'purpose', h: '1. Objeto', html: '<p>Estos términos establecen las condiciones de uso de earntolink.com, el sitio web operado por EarnToLink.</p>' },
      { id: 'content', h: '2. Derechos sobre el contenido', html: '<p>Los derechos sobre los textos, las imágenes y el código de este sitio pertenecen a EarnToLink. Las marcas de terceros que aparecen aquí pertenecen a sus titulares.</p>' },
      { id: 'accuracy', h: '3. Información de productos y servicios', html: "<p>El estado de los productos, sus funciones y la descripción de los servicios son exactos en la fecha de redacción. Las funciones, los precios y los plazos de los productos aún no lanzados pueden cambiar.</p>" },
      { id: 'projects', h: '4. Contratos de proyecto', html: "<p>Los servicios de diagnóstico, consultoría, configuración publicitaria y asesoría de operación se rigen por el contrato de cada proyecto. Si estas condiciones difieren del contrato, prevalece el contrato. Los ingresos publicitarios dependen del mercado y de las políticas de las plataformas, y las estimaciones incluidas en nuestros diagnósticos o propuestas no constituyen una garantía.</p>" },
      { id: 'apps', h: '5. Uso de las apps', html: '<p>Cada app también está sujeta a los términos de la tienda a través de la cual se distribuye (App Store, Google Play, Microsoft Store y otras) y a sus propios avisos.</p>' },
      { id: 'links', h: '6. Enlaces externos', html: '<p>Los sitios externos se rigen por sus propios términos y políticas.</p>' },
      { id: 'liability', h: '7. Limitación de responsabilidad', html: '<p>En la medida permitida por la ley, EarnToLink no es responsable de los daños indirectos derivados del uso de este sitio.</p>' },
      { id: 'law', h: '8. Ley aplicable', html: '<p>Estos términos se rigen por las leyes de la República de Corea.</p>' },
      { id: 'contact', h: '9. Contacto', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Ingresos publicitarios, bien diseñados.",
    "s": "Diagnóstico de ingresos publicitarios · Monetización web y de apps<br>Retail media · Cumplimiento de políticas · Operación",
    "tags": [
      "Sitios web y medios",
      "Apps móviles",
      "Comercio"
    ]
  },
};
