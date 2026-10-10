// Español (neutro internacional). Misma estructura que ko.mjs / en.mjs. Sin rayas largas.
const EMAIL = 'earn2link@gmail.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 idiomas (inglés, coreano, japonés, chino simplificado y tradicional, alemán, francés, español, portugués, italiano)';
const ONDEVICE = 'En el dispositivo · sin conexión a la red';
const ONE_TIME = 'Pago único · ₩10,000 o menos';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Conectamos mercados con el mundo.',
  translationNote: 'Esta página es una traducción. Si difiere del original en coreano, prevalece el original en coreano.',

  ui: {
    skip: 'Saltar al contenido', menu: 'Menú', language: 'Idioma', mainNav: 'Principal', breadcrumb: 'Ruta de navegación', toc: 'Contenido', homeAria: 'Inicio de EarnToLink',
    nav: { services: 'Servicios', products: 'Productos', about: 'Nosotros', principles: 'Cómo trabajamos', news: 'Novedades', contact: 'Contacto' },
    home: 'Inicio', privacy: 'Política de privacidad', terms: 'Términos', rss: 'RSS',
    footer: { services: 'Servicios', products: 'Productos', company: 'Empresa', policy: 'Políticas' },
    biz: { name: 'Nombre comercial', rep: 'Representante', no: 'N.º de registro de empresa', tax: 'Régimen fiscal', kinds: 'Actividad', mail: 'Correo electrónico' },
    rights: '© 2026 EarnToLink. Todos los derechos reservados.',
    view: 'Detalles', all: 'Todos los productos', allServices: 'Todos los servicios', email: 'Correo electrónico', mailBtn: 'Escríbanos', projectBtn: 'Iniciar un proyecto',
    platform: 'Plataforma', status: 'Estado', features: 'Funciones', specs: 'Especificaciones', related: 'Otros productos', privacyNote: 'Privacidad',
    productIllustration: 'Ilustración del producto: ',
    heroLabel: 'Ilustración de EarnToLink conectado con mercados en 14 idiomas',
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
    title: 'EarnToLink (언투링크) | Conectamos mercados con el mundo',
    desc: 'EarnToLink conecta mercados con el mundo: desarrollo de productos web, móviles y de escritorio, transformación con IA y automatización, localización en 14 idiomas, lanzamiento en tiendas de apps globales, integración y operación de comercio electrónico.',
    eyebrow: 'Software · Transformación con IA · Expansión global',
    h1: 'Conectamos mercados<br>con el mundo.',
    lead: 'De la planificación y el desarrollo a la automatización con IA, la localización y el lanzamiento en tiendas de apps globales, un solo equipo lleva su producto hasta el final.',
    meta: ['Web · Móvil · Escritorio', 'IA · Automatización', '14 idiomas'],
    stats: [['14', 'Idiomas del sitio'], ['6', 'Áreas de servicio'], ['5', 'Productos propios'], ['4', 'Tiendas de apps donde publicamos']],
    services: { eyebrow: 'Servicios', title: 'Seis áreas de servicio', text: 'Construimos, automatizamos, llevamos al mundo y mantenemos el crecimiento.' },
    why: { eyebrow: 'Por qué EarnToLink', title: 'Pensado para mercados globales desde el primer día', text: 'Seis compromisos que cumplimos en cada proyecto.' },
    how: { eyebrow: 'Proceso', title: 'De la primera llamada a la operación', text: 'Seis pasos, cada uno confirmado antes del siguiente.' },
    apps: { eyebrow: 'Productos propios', title: 'Productos que creamos nosotros', text: 'Nuestras propias apps, con el mismo estándar que el trabajo para clientes. Todas próximamente.' },
    co: { eyebrow: 'Empresa', title: 'EarnToLink', text: 'Empresa individual en Corea. Desarrollo y suministro de software de aplicación.' },
    news: { eyebrow: 'Novedades', title: 'Últimas novedades' },
  },

  services: {
    title: 'Servicios',
    desc: 'Servicios de EarnToLink: desarrollo de productos, transformación con IA y automatización, localización, lanzamiento en tiendas de apps globales, comercio y venta transfronteriza, operación y crecimiento.',
    eyebrow: 'Servicios', h1: 'Servicios', lead: 'Seis áreas. Elija solo las que necesite.',
    whoLabel: 'Es una buena opción cuando', scopeLabel: 'Qué hacemos', deliverLabel: 'Entregables', otherLabel: 'Otros servicios',
    items: {
      product: {
        name: 'Desarrollo de productos', short: 'Servicios web, apps móviles, apps de escritorio y sistemas internos, de la planificación al lanzamiento.',
        lead: 'Convertimos ideas en productos que la gente realmente usa. Planificación, diseño de pantallas, diseño visual, desarrollo y pruebas fluyen como un solo proceso.',
        who: ['Está creando un servicio nuevo desde cero', 'Quiere lanzar algo pequeño primero y probar el mercado', 'Quiere pasar el trabajo de hojas de cálculo y chats a un sistema real'],
        scope: [
          ['Servicios web', 'Sitios de servicio, cuentas y pagos, paneles de administración.'],
          ['Apps móviles', 'Apps para Android e iOS, creadas con una sola base de código.'],
          ['Apps de escritorio', 'Apps para Windows y macOS, incluidas herramientas de archivos y discos.'],
          ['Sistemas internos', 'Gestión del trabajo, liquidación, inventario y herramientas para clientes.'],
        ],
        deliver: ['Lista de funciones y diseño de pantallas', 'Código fuente y configuración de despliegue', 'Pruebas automatizadas', 'Guía de operación'],
      },
      ax: {
        name: 'Transformación con IA y automatización', short: 'Agentes de IA y automatización que reducen el trabajo repetitivo y cambian la forma de operar de los equipos.',
        lead: 'Identificamos el trabajo que se repite y lo pasamos a la IA y la automatización. Una pequeña demostración funcional prueba el efecto antes del desarrollo completo.',
        who: ['Su equipo repite las mismas respuestas de soporte, documentos o limpieza de datos', 'Quiere buscar en documentos y datos internos con IA', 'Las personas copian la misma información entre varias herramientas'],
        scope: [
          ['Agentes de IA', 'Primeras respuestas, resúmenes, borradores y clasificación.'],
          ['Automatización de documentos y datos', 'Lectura de formularios, limpieza de tablas, generación de informes.'],
          ['Búsqueda de conocimiento interno', 'Respuestas basadas en sus propios documentos (RAG).'],
          ['Integración de herramientas', 'Enlaces automáticos entre correo, chat, hojas de cálculo y sistemas internos.'],
        ],
        deliver: ['Evaluación del flujo de trabajo', 'Una demostración funcional', 'Automatización en producción y guía de usuario', 'Métricas para medir el efecto'],
      },
      localization: {
        name: 'Localización y expansión global', short: 'Lleve su servicio a 14 o más idiomas y hágase encontrar en cada país.',
        lead: 'No es solo traducción. Adaptamos la estructura del idioma, los formatos de fecha, número y moneda, y la visibilidad en buscadores país por país.',
        who: ['Su servicio existe en un solo idioma y quiere abrirlo al exterior', 'Tradujo, pero los buscadores extranjeros no lo encuentran', 'Necesita pagos y formatos que varían según el país'],
        scope: [
          ['Estructura multilingüe', 'Extracción de textos, cambio de idioma, URL por idioma.'],
          ['SEO multilingüe', 'hreflang, mapas del sitio por idioma, registro en buscadores.'],
          ['Formatos locales', 'Fechas, números, monedas y direcciones.'],
          ['Control de calidad de traducción', 'Glosarios y verificaciones automáticas de textos faltantes por idioma.'],
        ],
        deliver: ['Páginas y URL por idioma', 'Glosario', 'Herramienta de verificación de textos por idioma', 'Registro en buscadores'],
      },
      launch: {
        name: 'Lanzamiento en tiendas de apps globales', short: 'Lanzamiento y gestión de revisiones en App Store, Google Play, Microsoft Store y Mac App Store.',
        lead: 'Nos encargamos del registro en las tiendas, las respuestas a las revisiones y las fichas de tienda en cada idioma, y seguimos publicando actualizaciones tras el lanzamiento.',
        who: ['Tiene una app, pero el registro en las tiendas está atascado', 'Su app fue rechazada en la revisión', 'Necesita fichas de tienda para cada país'],
        scope: [
          ['Registro en tiendas', 'Cuenta de desarrollador, datos de la app, clasificación por edades, etiquetas de privacidad.'],
          ['Gestión de revisiones', 'Verificación de políticas, análisis de rechazos, corrección y reenvío.'],
          ['Localización de fichas de tienda', 'Descripciones y capturas de pantalla por idioma.'],
          ['Configuración de pagos', 'Compras dentro de la app, niveles de precio, precios por país.'],
        ],
        deliver: ['Su app publicada en las tiendas', 'Fichas de tienda por idioma', 'Historial de revisiones', 'Procedimiento de publicación de actualizaciones'],
      },
      commerce: {
        name: 'Comercio y venta transfronteriza', short: 'Conecte sus productos con clientes en el exterior mediante canales de venta y herramientas de operación.',
        lead: 'Creamos la tienda en línea, los datos de producto multilingües y las integraciones de pago, envío y contabilidad que necesita la venta al exterior.',
        who: ['Vende en su país y quiere vender al exterior', 'Edita los datos de producto por separado en cada canal', 'Concilia a mano pedidos, inventario y liquidaciones'],
        scope: [
          ['Canales de venta', 'Su propia tienda conectada con marketplaces del exterior.'],
          ['Datos de producto multilingües', 'Nombres, descripciones, opciones y tablas de tallas por idioma.'],
          ['Sincronización de pedidos e inventario', 'Sincronización automática de pedidos e inventario entre canales.'],
          ['Liquidación e informes', 'Totales automáticos de ventas, comisiones y pagos.'],
        ],
        deliver: ['Canales de venta e integraciones', 'Datos de producto multilingües', 'Sincronización de pedidos e inventario', 'Informes de liquidación'],
      },
      operate: {
        name: 'Operación y crecimiento', short: 'Después del lanzamiento: corrección de errores, mejora de velocidad, nuevas funciones, control de costos.',
        lead: 'El lanzamiento es solo el comienzo. Seguimos las métricas, reducimos errores, añadimos lo que los usuarios necesitan y mantenemos bajo control los costos de infraestructura.',
        who: ['Necesita a alguien que asuma un servicio creado por otro proveedor', 'Los errores y las pantallas lentas se repiten', 'Los costos de servidor no dejan de subir'],
        scope: [
          ['Respuesta a errores', 'Lectura de registros de errores, búsqueda de causas, publicación de correcciones.'],
          ['Rendimiento', 'Pantallas y consultas más rápidas.'],
          ['Crecimiento de funciones', 'Añadir y recortar funciones según los datos de uso.'],
          ['Revisión de costos', 'Revisión del uso de la nube y ahorros.'],
        ],
        deliver: ['Informe mensual de operación', 'Registro de respuesta a errores', 'Versiones de mejora', 'Resultados de la revisión de costos'],
      },
    },
  },

  why: [
    ['Multilingüe desde el inicio', 'La estructura multilingüe se incorpora en la etapa de diseño, de modo que añadir un idioma después nunca implica reconstruir.'],
    ['Alcance acordado primero', 'Funciones, plazo y costo se fijan por escrito antes de empezar. Cualquier cambio se acuerda antes de realizarse.'],
    ['El código y las cuentas son suyos', 'El código fuente, los dominios y las cuentas de tiendas y de la nube se crean a su nombre y se le entregan.'],
    ['Las pruebas forman parte de la entrega', 'Se incluyen pruebas automatizadas de las funciones centrales y verificaciones de textos faltantes por idioma.'],
    ['Avance semanal', 'Cada semana ve pantallas funcionando y lo que falta.'],
    ['Solo los datos necesarios', 'Los datos personales se limitan a lo que las funciones requieren y, siempre que es posible, se procesan en el dispositivo.'],
  ],

  steps: [
    ['Consulta', 'Objetivos, mercados de destino y plazos.'],
    ['Alcance y presupuesto', 'Lista de funciones, plazo y costo por escrito.'],
    ['Demostración', 'Primero funcionan las pantallas y los flujos centrales.'],
    ['Desarrollo y pruebas', 'Actualizaciones semanales, pruebas automatizadas.'],
    ['Localización y lanzamiento', 'Páginas por idioma, registro en tiendas y buscadores.'],
    ['Operación y mejora', 'Métricas, respuesta a errores, crecimiento.'],
  ],

  cta: { title: 'Iniciar un proyecto', text: 'Escríbanos qué quiere crear, sus mercados de destino y su calendario.' },

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
    title: 'Nosotros',
    desc: 'Sobre EarnToLink (언투링크): una empresa de software que conecta mercados con el mundo. Misión, servicios, principios y datos de la empresa.',
    eyebrow: 'Nosotros', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) es una empresa de software que conecta mercados con el mundo.',
    mission: {
      eyebrow: 'Misión', title: 'Conectamos mercados con el mundo',
      body: [
        'Los buenos productos y servicios suelen quedarse encerrados en un solo país y un solo idioma. EarnToLink crea el software que cierra esa brecha.',
        'Creamos productos, aligeramos las operaciones con IA y automatización y los llevamos a los mercados globales con muchos idiomas y tiendas de apps. Tras el lanzamiento seguimos mejorándolos a partir de los datos.',
        'Creamos nuestras propias apps con el mismo estándar. El estado se muestra tal cual: los productos aún no publicados figuran como próximamente.',
      ],
    },
    do: { eyebrow: 'Servicios', title: 'Qué hacemos', text: 'Actividad registrada: desarrollo y suministro de software de aplicación (principal), venta minorista por comercio electrónico, intermediación de venta minorista por comercio electrónico.' },
    why: { eyebrow: 'Principios', title: 'Cómo trabajamos' },
    info: { eyebrow: 'Empresa', title: 'Datos de la empresa' },
  },

  principles: {
    title: 'Cómo trabajamos',
    desc: 'Cómo trabaja EarnToLink: multilingüe desde el inicio, alcance acordado primero, el código y las cuentas son suyos, pruebas incluidas. Proceso y condiciones del contrato.',
    eyebrow: 'Cómo trabajamos', h1: 'Cómo trabajamos', lead: 'Principios, proceso y condiciones del contrato.',
    why: { eyebrow: 'Principios', title: 'Seis compromisos', text: 'Se aplican a todos los proyectos.' },
    steps: { eyebrow: 'Proceso', title: 'Pasos', text: 'De la consulta a la operación.' },
    terms: { eyebrow: 'Contratos', title: 'Condiciones de contrato y precios', rows: [
      ['Proyectos', 'Alcance, plazo, costo y condiciones de pago fijados en un contrato para cada proyecto'],
      ['Cambios de alcance', 'Los cambios y su costo se acuerdan antes de continuar el trabajo'],
      ['Titularidad', 'El código fuente y las cuentas se transfieren al cliente una vez completado el pago'],
      ['Nuestras apps', 'Pago único · ₩10,000 o menos por app · sin suscripción · pago a través de cada tienda de apps'],
    ] },
  },

  contact: {
    title: 'Contacto',
    desc: `Contacte con EarnToLink para proyectos, productos, privacidad o colaboraciones: ${EMAIL}`,
    eyebrow: 'Contacto', h1: 'Contacto', lead: 'Por correo electrónico. Respondemos en coreano o en inglés.',
    topics: [
      ['code', 'Proyectos', 'Desarrollo de productos, automatización con IA, localización, lanzamiento en tiendas de apps, comercio, operación'],
      ['package', 'Productos', 'Funciones, fechas de lanzamiento y errores de nuestras apps'],
      ['receipt', 'Pagos', 'Los pagos y reembolsos de las apps siguen la política de cada tienda de apps'],
      ['shield', 'Privacidad', 'Solicitudes de acceso, rectificación, eliminación o suspensión del tratamiento'],
      ['users', 'Colaboraciones', 'Cooperación y otras propuestas'],
    ],
    brief: { title: 'Conviene incluir en una consulta de proyecto', items: ['Qué quiere crear y por qué', 'Mercados e idiomas de destino', 'Calendario deseado', 'Servicios o materiales de referencia'] },
  },

  news: {
    'business-areas': { title: 'Nuestras áreas de servicio', summary: 'Desarrollo de productos, transformación con IA, localización, lanzamiento en tiendas de apps, comercio, operación.',
      body: ['Una visión general de las áreas de servicio de EarnToLink.', 'Son seis: desarrollo de productos, transformación con IA y automatización, localización y expansión global, lanzamiento en tiendas de apps globales, comercio y venta transfronteriza, y operación y crecimiento.', 'Las consultas sobre proyectos se envían a earn2link@gmail.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com ya está en línea', summary: 'El sitio web de EarnToLink ya está disponible en 14 idiomas.',
      body: ['El sitio web de EarnToLink, earntolink.com, ya está en línea.', 'Incluye nuestras áreas de servicio, productos propios, datos de la empresa, política de privacidad e información de contacto.', 'Está disponible en coreano, inglés, japonés, chino (simplificado y tradicional), español, francés, alemán, portugués, italiano, vietnamita, indonesio, tailandés y ruso.'] },
    'product-lineup': { title: 'Nuestros productos propios', summary: 'Dos apps móviles y tres apps de escritorio.',
      body: ['El estado actual de nuestros productos propios.', 'Las apps móviles Roll Tidy y Roll Flick y las apps de escritorio Space Map, Dupeless y Archive Fix llegarán próximamente.'] },
  },
  newsPage: { title: 'Novedades', desc: 'Novedades de EarnToLink: áreas de servicio, lanzamiento del sitio web y estado de los productos.' },

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
      { id: 'accuracy', h: '3. Información de productos y servicios', html: '<p>El estado de los productos, las funciones y las descripciones de los servicios son exactos en el momento de su redacción. Las funciones, los precios y los plazos de los productos aún no publicados pueden cambiar.</p>' },
      { id: 'projects', h: '4. Contratos de proyecto', html: '<p>Los servicios de desarrollo, automatización, localización, lanzamiento y operación se rigen por el contrato de cada proyecto. Si estos términos y un contrato difieren, prevalece el contrato.</p>' },
      { id: 'apps', h: '5. Uso de las apps', html: '<p>Cada app también está sujeta a los términos de la tienda a través de la cual se distribuye (App Store, Google Play, Microsoft Store y otras) y a sus propios avisos.</p>' },
      { id: 'links', h: '6. Enlaces externos', html: '<p>Los sitios externos se rigen por sus propios términos y políticas.</p>' },
      { id: 'liability', h: '7. Limitación de responsabilidad', html: '<p>En la medida permitida por la ley, EarnToLink no es responsable de los daños indirectos derivados del uso de este sitio.</p>' },
      { id: 'law', h: '8. Ley aplicable', html: '<p>Estos términos se rigen por las leyes de la República de Corea.</p>' },
      { id: 'contact', h: '9. Contacto', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Conectamos mercados con el mundo.', s: 'Desarrollo de productos · Transformación con IA · Localización<br>Lanzamiento en tiendas de apps · Comercio · Operación', tags: ['Web · App · Escritorio', 'IA · Automatización', '14 idiomas'] },
};
