// Bahasa Indonesia. Struktur sama dengan ko.mjs / en.mjs.
const EMAIL = 'earn2link@gmail.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 bahasa (Inggris, Korea, Jepang, Mandarin Sederhana dan Tradisional, Jerman, Prancis, Spanyol, Portugis, Italia)';
const ONDEVICE = 'Di perangkat · tanpa koneksi jaringan';
const ONE_TIME = 'Beli sekali · maksimal ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: 'Menghubungkan pasar dengan dunia.',
  translationNote: 'Halaman ini adalah terjemahan. Jika berbeda dari aslinya dalam bahasa Korea, versi asli bahasa Korea yang berlaku.',

  ui: {
    skip: 'Lewati ke konten', menu: 'Menu', language: 'Bahasa', mainNav: 'Utama', breadcrumb: 'Jejak navigasi', toc: 'Daftar isi', homeAria: 'Beranda EarnToLink',
    nav: { services: 'Layanan', products: 'Produk', about: 'Tentang', principles: 'Cara kerja kami', news: 'Berita', contact: 'Kontak' },
    home: 'Beranda', privacy: 'Kebijakan Privasi', terms: 'Ketentuan', rss: 'RSS',
    footer: { services: 'Layanan', products: 'Produk', company: 'Perusahaan', policy: 'Kebijakan' },
    biz: { name: 'Nama usaha', rep: 'Perwakilan', no: 'No. registrasi usaha', tax: 'Jenis pajak', kinds: 'Bidang usaha', mail: 'Email' },
    rights: '© 2026 EarnToLink. Semua hak dilindungi.',
    view: 'Detail', all: 'Semua produk', allServices: 'Semua layanan', email: 'Email', mailBtn: 'Kirim email', projectBtn: 'Mulai proyek',
    platform: 'Platform', status: 'Status', features: 'Fitur', specs: 'Spesifikasi', related: 'Produk lainnya', privacyNote: 'Privasi',
    productIllustration: 'Ilustrasi produk: ',
    heroLabel: 'Ilustrasi EarnToLink yang terhubung dengan pasar dalam 14 bahasa',
    newsFeedTitle: 'Berita EarnToLink', newsFeedDesc: 'Berita dari EarnToLink (언투링크)',
    notFound: { title: 'Halaman tidak ditemukan', text: 'Alamat telah berubah atau halaman tidak ada.', home: 'Ke beranda' },
  },

  status: { soon: 'Segera hadir', dev: 'Dalam pengembangan', live: 'Telah rilis' },

  company: {
    name: 'EarnToLink', altName: '언투링크', rep: 'Juhwan Ma', taxType: 'Wajib pajak umum (Korea)',
    form: 'Bentuk usaha', formValue: 'Usaha perorangan (Korea)', kindsLabel: 'Bidang usaha terdaftar', site: 'Situs web',
    kinds: ['Pengembangan dan penyediaan perangkat lunak aplikasi (utama)', 'Ritel e-commerce', 'Perantara ritel e-commerce'],
  },

  categories: {
    mobile: { name: 'Aplikasi seluler', plat: 'Android · iOS' },
    desktop: { name: 'Aplikasi desktop', plat: 'macOS · Windows' },
  },

  home: {
    title: 'EarnToLink (언투링크) | Menghubungkan pasar dengan dunia',
    desc: 'EarnToLink menghubungkan pasar dengan dunia: pengembangan produk web, seluler dan desktop, transformasi AI dan otomatisasi, lokalisasi ke 14 bahasa, peluncuran di toko aplikasi global, integrasi dan operasional e-commerce.',
    eyebrow: 'Perangkat lunak · Transformasi AI · Ekspansi global',
    h1: 'Menghubungkan pasar<br>dengan dunia.',
    lead: 'Dari perencanaan dan pengembangan hingga otomatisasi AI, lokalisasi dan peluncuran di toko aplikasi global, satu tim mendampingi produk Anda sampai tuntas.',
    meta: ['Web · Seluler · Desktop', 'AI · Otomatisasi', '14 bahasa'],
    stats: [['14', 'Bahasa situs web'], ['6', 'Bidang layanan'], ['5', 'Produk buatan sendiri'], ['4', 'Toko aplikasi tujuan rilis']],
    services: { eyebrow: 'Layanan', title: 'Enam bidang layanan', text: 'Kami membangun, mengotomatisasi, membawanya ke dunia, dan menjaganya terus tumbuh.' },
    why: { eyebrow: 'Mengapa EarnToLink', title: 'Dibangun untuk pasar global sejak hari pertama', text: 'Enam komitmen yang kami pegang di setiap proyek.' },
    how: { eyebrow: 'Proses', title: 'Dari diskusi pertama hingga operasional', text: 'Enam langkah, masing-masing dikonfirmasi sebelum lanjut ke berikutnya.' },
    apps: { eyebrow: 'Produk buatan sendiri', title: 'Produk yang kami bangun sendiri', text: 'Aplikasi milik kami sendiri, dibuat dengan standar yang sama seperti pekerjaan klien. Semuanya segera hadir.' },
    co: { eyebrow: 'Perusahaan', title: 'EarnToLink', text: 'Usaha perorangan di Korea. Pengembangan dan penyediaan perangkat lunak aplikasi.' },
    news: { eyebrow: 'Berita', title: 'Berita terbaru' },
  },

  services: {
    title: 'Layanan',
    desc: 'Layanan EarnToLink: pengembangan produk, transformasi AI dan otomatisasi, lokalisasi, peluncuran di toko aplikasi global, e-commerce dan penjualan lintas negara, operasional dan pertumbuhan.',
    eyebrow: 'Layanan', h1: 'Layanan', lead: 'Enam bidang. Pilih hanya yang Anda butuhkan.',
    whoLabel: 'Cocok jika', scopeLabel: 'Yang kami kerjakan', deliverLabel: 'Hasil yang diserahkan', otherLabel: 'Layanan lainnya',
    items: {
      product: {
        name: 'Pengembangan produk', short: 'Layanan web, aplikasi seluler, aplikasi desktop dan sistem internal, dari perencanaan hingga peluncuran.',
        lead: 'Kami mengubah ide menjadi produk yang benar-benar dipakai orang. Perencanaan, desain layar, desain visual, pengembangan dan pengujian berjalan sebagai satu alur.',
        who: ['Anda membangun layanan baru dari nol', 'Anda ingin meluncur kecil dulu untuk menguji pasar', 'Anda ingin memindahkan pekerjaan dari spreadsheet dan chat ke sistem yang sebenarnya'],
        scope: [
          ['Layanan web', 'Situs layanan, akun dan pembayaran, dasbor admin.'],
          ['Aplikasi seluler', 'Aplikasi Android dan iOS, dibuat dari satu basis kode.'],
          ['Aplikasi desktop', 'Aplikasi Windows dan macOS, termasuk alat untuk file dan disk.'],
          ['Sistem internal', 'Manajemen kerja, penyelesaian transaksi, stok, dan alat pelanggan.'],
        ],
        deliver: ['Daftar fitur dan desain layar', 'Kode sumber dan pengaturan deployment', 'Pengujian otomatis', 'Panduan operasional'],
      },
      ax: {
        name: 'Transformasi AI dan otomatisasi', short: 'Agen AI dan otomatisasi yang mengurangi pekerjaan berulang dan mengubah cara tim bekerja.',
        lead: 'Kami menemukan pekerjaan yang berulang dan memindahkannya ke AI dan otomatisasi. Demo kecil yang berfungsi membuktikan efeknya sebelum pengembangan penuh.',
        who: ['Tim Anda mengulang balasan dukungan, dokumen, atau pembersihan data yang sama', 'Anda ingin mencari dokumen dan data internal dengan AI', 'Orang menyalin informasi yang sama di antara beberapa alat'],
        scope: [
          ['Agen AI', 'Balasan awal, ringkasan, draf dan klasifikasi.'],
          ['Otomatisasi dokumen dan data', 'Membaca formulir, merapikan tabel, membuat laporan.'],
          ['Pencarian pengetahuan internal', 'Jawaban berdasarkan dokumen Anda sendiri (RAG).'],
          ['Integrasi alat', 'Tautan otomatis antara email, chat, spreadsheet dan sistem internal.'],
        ],
        deliver: ['Penilaian alur kerja', 'Demo yang berfungsi', 'Otomatisasi produksi dan panduan pengguna', 'Metrik untuk mengukur dampak'],
      },
      localization: {
        name: 'Lokalisasi dan ekspansi global', short: 'Bawa layanan Anda ke 14 bahasa atau lebih dan mudah ditemukan di setiap negara.',
        lead: 'Bukan sekadar terjemahan. Kami menyesuaikan struktur bahasa, format tanggal, angka dan mata uang, serta visibilitas di mesin pencari untuk tiap negara.',
        who: ['Layanan Anda hanya tersedia dalam satu bahasa dan Anda ingin membukanya ke luar negeri', 'Anda sudah menerjemahkan, tetapi mesin pencari asing tidak menemukan Anda', 'Anda membutuhkan pembayaran dan format yang berbeda di tiap negara'],
        scope: [
          ['Struktur multibahasa', 'Ekstraksi string, pergantian bahasa, URL per bahasa.'],
          ['SEO multibahasa', 'hreflang, sitemap per bahasa, pendaftaran ke mesin pencari.'],
          ['Format lokal', 'Tanggal, angka, mata uang dan alamat.'],
          ['QA terjemahan', 'Glosarium dan pemeriksaan otomatis untuk string yang hilang di tiap bahasa.'],
        ],
        deliver: ['Halaman dan URL per bahasa', 'Glosarium', 'Alat pemeriksa string per bahasa', 'Pendaftaran ke mesin pencari'],
      },
      launch: {
        name: 'Peluncuran di toko aplikasi global', short: 'Peluncuran dan penanganan review di App Store, Google Play, Microsoft Store dan Mac App Store.',
        lead: 'Kami menangani pendaftaran toko, tanggapan atas review, dan halaman toko dalam tiap bahasa, lalu terus merilis pembaruan setelah peluncuran.',
        who: ['Anda sudah punya aplikasi tetapi pendaftaran toko macet', 'Aplikasi Anda ditolak saat review', 'Anda membutuhkan halaman toko untuk tiap negara'],
        scope: [
          ['Pendaftaran toko', 'Pengaturan akun developer, detail aplikasi, peringkat usia, label privasi.'],
          ['Penanganan review', 'Pemeriksaan kebijakan, analisis penolakan, perbaikan dan pengajuan ulang.'],
          ['Lokalisasi halaman toko', 'Deskripsi dan tangkapan layar per bahasa.'],
          ['Pengaturan pembayaran', 'Pembelian dalam aplikasi, tingkat harga, harga per negara.'],
        ],
        deliver: ['Aplikasi Anda tayang di toko', 'Halaman toko per bahasa', 'Riwayat review', 'Prosedur rilis pembaruan'],
      },
      commerce: {
        name: 'E-commerce dan penjualan lintas negara', short: 'Hubungkan produk Anda dengan pelanggan di luar negeri lewat kanal penjualan dan alat operasional.',
        lead: 'Kami membangun toko online, data produk multibahasa, serta integrasi pembayaran, pengiriman dan akuntansi yang dibutuhkan untuk berjualan ke luar negeri.',
        who: ['Anda berjualan di dalam negeri dan ingin berjualan ke luar negeri', 'Anda mengedit data produk secara terpisah untuk setiap kanal', 'Anda mencocokkan pesanan, stok dan penyelesaian transaksi secara manual'],
        scope: [
          ['Kanal penjualan', 'Toko Anda sendiri terhubung dengan marketplace luar negeri.'],
          ['Data produk multibahasa', 'Nama, deskripsi, opsi dan tabel ukuran per bahasa.'],
          ['Sinkronisasi pesanan dan stok', 'Sinkronisasi otomatis pesanan dan inventaris di semua kanal.'],
          ['Penyelesaian transaksi dan laporan', 'Total otomatis untuk penjualan, biaya dan pencairan.'],
        ],
        deliver: ['Kanal penjualan dan integrasi', 'Data produk multibahasa', 'Sinkronisasi pesanan dan stok', 'Laporan penyelesaian transaksi'],
      },
      operate: {
        name: 'Operasional dan pertumbuhan', short: 'Setelah peluncuran: memperbaiki error, meningkatkan kecepatan, menambah fitur, memeriksa biaya.',
        lead: 'Peluncuran hanyalah awal. Kami memantau metrik, mengurangi error, menambah apa yang dibutuhkan pengguna dan menjaga biaya infrastruktur tetap terkendali.',
        who: ['Anda membutuhkan pihak yang mengambil alih layanan yang dibuat vendor lain', 'Error dan layar yang lambat terus berulang', 'Biaya server terus naik'],
        scope: [
          ['Penanganan error', 'Membaca log error, menemukan penyebab, merilis perbaikan.'],
          ['Performa', 'Layar dan kueri yang lebih cepat.'],
          ['Pertumbuhan fitur', 'Menambah dan memangkas fitur berdasarkan data penggunaan.'],
          ['Tinjauan biaya', 'Peninjauan penggunaan cloud dan penghematan.'],
        ],
        deliver: ['Laporan operasional bulanan', 'Catatan penanganan error', 'Rilis perbaikan', 'Hasil tinjauan biaya'],
      },
    },
  },

  why: [
    ['Multibahasa sejak awal', 'Struktur multibahasa dimasukkan pada tahap desain, sehingga menambah bahasa di kemudian hari tidak perlu membangun ulang.'],
    ['Lingkup disepakati lebih dulu', 'Fitur, jadwal dan biaya ditetapkan secara tertulis sebelum pekerjaan dimulai. Setiap perubahan disepakati sebelum dikerjakan.'],
    ['Kode dan akun milik Anda', 'Kode sumber, domain, serta akun toko dan cloud dibuat atas nama Anda dan diserahkan kepada Anda.'],
    ['Pengujian termasuk dalam penyerahan', 'Pengujian otomatis untuk fitur inti dan pemeriksaan string yang hilang per bahasa sudah termasuk.'],
    ['Progres mingguan', 'Setiap minggu Anda melihat layar yang berfungsi dan apa yang tersisa.'],
    ['Hanya data yang diperlukan', 'Data pribadi dibatasi pada yang dibutuhkan fitur, dan diproses di perangkat sebisa mungkin.'],
  ],

  steps: [
    ['Konsultasi', 'Tujuan, pasar sasaran dan tenggat waktu.'],
    ['Lingkup dan penawaran', 'Daftar fitur, jadwal dan biaya secara tertulis.'],
    ['Demo', 'Layar dan alur inti berfungsi lebih dulu.'],
    ['Bangun dan uji', 'Pembaruan mingguan, pengujian otomatis.'],
    ['Lokalisasi dan peluncuran', 'Halaman per bahasa, pendaftaran toko dan mesin pencari.'],
    ['Operasional dan perbaikan', 'Metrik, penanganan error, pertumbuhan.'],
  ],

  cta: { title: 'Mulai proyek', text: 'Kirim email kepada kami tentang apa yang ingin Anda bangun, pasar sasaran dan jadwal Anda.' },

  products: {
    title: 'Produk',
    desc: 'Produk buatan sendiri EarnToLink: dua aplikasi seluler (Roll Tidy, Roll Flick) dan tiga aplikasi desktop (Space Map, Dupeless, Archive Fix). Semuanya segera hadir.',
    eyebrow: 'Produk buatan sendiri', h1: 'Produk', lead: 'Dua aplikasi seluler dan tiga aplikasi desktop. Semuanya segera hadir.', tabsLabel: 'Kategori',
    groups: { mobile: 'Android · iOS. Merapikan foto.', desktop: 'macOS · Windows. Disk, file, arsip.' },
    prin: { eyebrow: 'Prinsip produk', title: 'Ringkas dan jujur', text: 'Berlaku untuk kelima aplikasi kami.' },
    principles: [
      ['Di perangkat', 'File dan foto dianalisis hanya di perangkat. Tidak ada yang dikirim ke server.'],
      ['Tanpa iklan, tanpa pelacakan', 'Tanpa iklan, analitik, pelaporan crash, atau akun.'],
      ['Beli sekali', 'Tanpa langganan. Maksimal ₩10,000 per aplikasi.'],
      ['Penghapusan yang dapat dipulihkan', 'File dan foto yang dihapus masuk ke tempat sampah dan dapat dipulihkan.'],
    ],
    featTitle: 'Fitur {name}',
    privacy: {
      mobile: 'Foto dianalisis hanya di perangkat dan tidak pernah dikirim ke mana pun.',
      desktop: 'File diproses hanya di perangkat dan tidak pernah dikirim ke mana pun.',
    },
    items: {
      'roll-tidy': {
        name: 'Roll Tidy', alt: '정리 싹',
        summary: 'Foto serupa, foto buram, tangkapan layar dan video berukuran besar',
        lead: 'Menganalisis pustaka foto di perangkat dan mengumpulkan yang bisa dibuang, per kategori.',
        features: [
          ['Grup foto serupa', 'Mengelompokkan foto yang diambil dalam 90 detik dan terlihat mirip, menggunakan hash selisih 64-bit.'],
          ['Foto terbaik', 'Menyarankan foto paling tajam di setiap grup untuk disimpan. Favorit tidak pernah menjadi kandidat penghapusan.'],
          ['Foto buram', 'Menemukan foto buram relatif terhadap seluruh pustaka. Foto yang sangat gelap atau terang dilewati.'],
          ['Tangkapan layar', 'Mengumpulkan foto dari album tangkapan layar.'],
          ['Video berukuran besar', 'Mengurutkan video berdasarkan perkiraan ukuran, terbesar lebih dulu.'],
          ['Penghapusan yang dapat dipulihkan', 'Memindahkan item ke tempat sampah Android atau Baru Dihapus di iOS (30 hari).'],
        ],
        specs: [['Platform', 'Android · iOS'], ['Pemrosesan', ONDEVICE], ['Hapus', 'Pindah ke tempat sampah sistem'], ['Bahasa', APP_LANGS], ['Harga', ONE_TIME]],
      },
      'roll-flick': {
        name: 'Roll Flick', alt: '넘겨 정리',
        summary: 'Geser foto satu per satu: simpan atau hapus',
        lead: 'Membagi foto menurut bulan pengambilan, lalu Anda memutuskan satu foto setiap kali.',
        features: [
          ['Per bulan', 'Mengelompokkan foto menurut bulan pengambilan, yang terbaru lebih dulu.'],
          ['Geser', 'Geser ke kiri untuk menandai hapus, ke kanan untuk menyimpan.'],
          ['Urungkan', 'Membatalkan keputusan terakhir.'],
          ['Tinjau sebelum hapus', 'Di akhir bulan, tinjau foto yang ditandai, lalu bersihkan dalam satu langkah.'],
          ['Progres', 'Foto yang dirapikan, rentetan hari dan bulan yang selesai. Disimpan hanya di perangkat.'],
          ['Di perangkat', 'Foto tidak pernah dikirim ke server.'],
        ],
        specs: [['Platform', 'Android · iOS'], ['Pemrosesan', ONDEVICE], ['Hapus', 'Pindah ke tempat sampah sistem'], ['Bahasa', APP_LANGS], ['Harga', ONE_TIME]],
      },
      'space-map': {
        name: 'Space Map', alt: '용량 지도',
        summary: 'Treemap folder dan file yang memakan ruang disk Anda',
        lead: 'Memindai folder dan menampilkan ukuran sebagai luas area, sehingga item terbesar bisa dibersihkan lebih dulu.',
        features: [
          ['Treemap', 'Treemap squarified, diberi warna menurut jenis file: video, gambar, audio, dokumen, arsip, program, lainnya.'],
          ['Tiga tampilan', 'Peta, file terbesar dan ukuran menurut jenis.'],
          ['Folder cepat', 'Home, Downloads, Desktop, Documents, Pictures, Videos, drive C (Windows).'],
          ['Navigasi', 'Masuk ke subfolder dan kembali ke folder induk.'],
          ['Finder · Explorer', 'Menampilkan item terpilih di Finder atau Explorer.'],
          ['Pindah ke Tempat Sampah', 'Item yang dihapus dapat dipulihkan dari Tempat Sampah. Folder tanpa izin dilewati dan dihitung.'],
        ],
        specs: [['Platform', 'macOS · Windows'], ['Pemrosesan', ONDEVICE], ['Hapus', 'Pindah ke Tempat Sampah'], ['Bahasa', APP_LANGS], ['Harga', ONE_TIME]],
      },
      dupeless: {
        name: 'Dupeless', alt: '중복 싹',
        summary: 'Temukan file dengan isi identik dan bersihkan',
        lead: 'Membandingkan isi, bukan nama: ukuran dulu, lalu 64 KB pertama dan terakhir, kemudian SHA-256.',
        features: [
          ['Perbandingan tiga tahap', 'Daftar file, perbandingan cepat (64 KB pertama dan terakhir), perbandingan penuh (SHA-256).'],
          ['Banyak folder', 'Beberapa folder pencarian, ukuran file minimum, lewati file tersembunyi.'],
          ['Pilih otomatis', 'Pertahankan yang terlama, terbaru, atau dengan path terpendek.'],
          ['Selalu sisakan satu', 'Setidaknya satu file per grup harus tetap ada.'],
          ['Pindah ke Tempat Sampah', 'Hanya file terpilih yang masuk ke Tempat Sampah. Dapat dipulihkan.'],
          ['Finder · Explorer', 'Buka lokasi file secara langsung.'],
        ],
        specs: [['Platform', 'macOS · Windows'], ['Pemrosesan', ONDEVICE], ['Perbandingan', 'Ukuran → 64 KB pertama/terakhir → SHA-256'], ['Bahasa', APP_LANGS], ['Harga', ONE_TIME]],
      },
      'archive-fix': {
        name: 'Archive Fix', alt: '한글 압축',
        summary: 'Ekstrak dan buat arsip tanpa nama file Korea yang rusak',
        lead: 'Mendeteksi nama file CP949 pada ZIP yang dibuat di Windows Korea dan memulihkannya. Dibangun di atas 7-Zip.',
        features: [
          ['Perbaikan nama Korea', 'Memeriksa entri ZIP tanpa flag UTF-8 dan otomatis mengonversi nama CP949 (Windows Korea).'],
          ['16 format', 'ZIP, 7Z, RAR, TAR, GZ, TGZ, BZ2, XZ, TXZ, ISO, CAB, LZH, ARJ, WIM, ZST, DMG.'],
          ['Buat arsip', 'ZIP atau 7Z, dengan kompresi cepat, normal, atau maksimum.'],
          ['Kata sandi AES-256', 'AES-256 untuk ZIP; 7Z juga mengenkripsi nama file.'],
          ['Seret dan lepas', 'Arsip diekstrak, file lain dikompres.'],
          ['7-Zip 26.04 sudah termasuk', 'Tanpa instalasi terpisah.'],
        ],
        specs: [['Platform', 'macOS · Windows'], ['Pemrosesan', ONDEVICE], ['Mesin', '7-Zip 26.04 (LGPL)'], ['Bahasa', APP_LANGS], ['Harga', ONE_TIME]],
      },
    },
  },

  about: {
    title: 'Tentang',
    desc: 'Tentang EarnToLink (언투링크): usaha perangkat lunak yang menghubungkan pasar dengan dunia. Misi, layanan, prinsip dan rincian usaha.',
    eyebrow: 'Tentang', h1: 'EarnToLink', lead: 'EarnToLink (언투링크) adalah usaha perangkat lunak yang menghubungkan pasar dengan dunia.',
    mission: {
      eyebrow: 'Misi', title: 'Menghubungkan pasar dengan dunia',
      body: [
        'Produk dan layanan yang bagus sering kali terkunci di satu negara dan satu bahasa. EarnToLink membangun perangkat lunak yang menjembatani kesenjangan itu.',
        'Kami membangun produk, meringankan operasional dengan AI dan otomatisasi, lalu membawanya ke pasar global melalui banyak bahasa dan toko aplikasi. Setelah peluncuran, kami terus memperbaikinya berdasarkan data.',
        'Kami juga membangun aplikasi sendiri dengan standar yang sama. Status ditampilkan apa adanya: produk yang belum dirilis ditandai segera hadir.',
      ],
    },
    do: { eyebrow: 'Layanan', title: 'Yang kami kerjakan', text: 'Bidang usaha terdaftar: pengembangan dan penyediaan perangkat lunak aplikasi (utama), ritel e-commerce, perantara ritel e-commerce.' },
    why: { eyebrow: 'Prinsip', title: 'Cara kerja kami' },
    info: { eyebrow: 'Perusahaan', title: 'Rincian usaha' },
  },

  principles: {
    title: 'Cara kerja kami',
    desc: 'Cara kerja EarnToLink: multibahasa sejak awal, lingkup disepakati lebih dulu, kode dan akun milik Anda, pengujian termasuk. Proses dan ketentuan kontrak.',
    eyebrow: 'Cara kerja kami', h1: 'Cara kerja kami', lead: 'Prinsip, proses dan ketentuan kontrak.',
    why: { eyebrow: 'Prinsip', title: 'Enam komitmen', text: 'Berlaku untuk setiap proyek.' },
    steps: { eyebrow: 'Proses', title: 'Langkah', text: 'Dari konsultasi hingga operasional.' },
    terms: { eyebrow: 'Kontrak', title: 'Ketentuan kontrak dan harga', rows: [
      ['Proyek', 'Lingkup, jadwal, biaya dan syarat pembayaran ditetapkan dalam kontrak untuk setiap proyek'],
      ['Perubahan lingkup', 'Perubahan dan biayanya disepakati sebelum pekerjaan dilanjutkan'],
      ['Kepemilikan', 'Kode sumber dan akun dialihkan kepada klien setelah pembayaran selesai'],
      ['Aplikasi kami', 'Beli sekali · maksimal ₩10,000 per aplikasi · tanpa langganan · dibayar melalui masing-masing toko aplikasi'],
    ] },
  },

  contact: {
    title: 'Kontak',
    desc: `Hubungi EarnToLink untuk proyek, produk, privasi, atau kemitraan: ${EMAIL}`,
    eyebrow: 'Kontak', h1: 'Kontak', lead: 'Lewat email. Kami membalas dalam bahasa Korea atau Inggris.',
    topics: [
      ['code', 'Proyek', 'Pengembangan produk, otomatisasi AI, lokalisasi, peluncuran di toko aplikasi, e-commerce, operasional'],
      ['package', 'Produk', 'Fitur, tanggal rilis dan bug pada aplikasi kami'],
      ['receipt', 'Pembayaran', 'Pembayaran dan pengembalian dana aplikasi mengikuti kebijakan masing-masing toko aplikasi'],
      ['shield', 'Privasi', 'Permintaan untuk mengakses, memperbaiki, menghapus, atau menghentikan pemrosesan'],
      ['users', 'Kemitraan', 'Kolaborasi dan usulan lainnya'],
    ],
    brief: { title: 'Sebaiknya disertakan dalam pertanyaan proyek', items: ['Apa yang ingin Anda bangun dan alasannya', 'Pasar dan bahasa sasaran', 'Jadwal yang diinginkan', 'Layanan atau materi referensi'] },
  },

  news: {
    'business-areas': { title: 'Bidang layanan kami', summary: 'Pengembangan produk, transformasi AI, lokalisasi, peluncuran di toko aplikasi, e-commerce, operasional.',
      body: ['Gambaran umum bidang layanan EarnToLink.', 'Ada enam: pengembangan produk, transformasi AI dan otomatisasi, lokalisasi dan ekspansi global, peluncuran di toko aplikasi global, e-commerce dan penjualan lintas negara, serta operasional dan pertumbuhan.', 'Pertanyaan proyek dikirim ke earn2link@gmail.com.'] },
    'earntolink-com-launch': { title: 'earntolink.com telah tayang', summary: 'Situs web EarnToLink telah tayang dalam 14 bahasa.',
      body: ['Situs web EarnToLink, earntolink.com, kini telah tayang.', 'Situs ini memuat bidang layanan, produk buatan sendiri, rincian perusahaan, kebijakan privasi dan informasi kontak.', 'Tersedia dalam bahasa Korea, Inggris, Jepang, Mandarin (Sederhana dan Tradisional), Spanyol, Prancis, Jerman, Portugis, Italia, Vietnam, Indonesia, Thai dan Rusia.'] },
    'product-lineup': { title: 'Produk buatan sendiri', summary: 'Dua aplikasi seluler dan tiga aplikasi desktop.',
      body: ['Status terkini produk buatan sendiri.', 'Aplikasi seluler Roll Tidy dan Roll Flick serta aplikasi desktop Space Map, Dupeless dan Archive Fix segera hadir.'] },
  },
  newsPage: { title: 'Berita', desc: 'Berita EarnToLink: bidang layanan, peluncuran situs web dan status produk.' },

  privacy: {
    title: 'Kebijakan Privasi',
    desc: 'Kebijakan privasi EarnToLink untuk situs web, email pertanyaan dan aplikasi kami. Berlaku mulai 10 Oktober 2026.',
    eyebrow: 'Kebijakan', lead: 'Berlaku mulai 10 Oktober 2026',
    sections: [
      { id: 'general', h: '1. Umum', html: `<p>EarnToLink (언투링크, "EarnToLink") melindungi data pribadi berdasarkan Undang-Undang Perlindungan Informasi Pribadi Korea. Kebijakan ini mencakup situs web earntolink.com dan aplikasi yang dibuat EarnToLink.</p><p>Ringkasan: situs web tidak menggunakan pendaftaran, formulir, cookie, analitik, maupun iklan. Aplikasi kami memproses file dan foto hanya di perangkat dan tidak pernah mengirimkannya ke mana pun.</p>` },
      { id: 'site', h: '2. Situs web', html: `<ul><li>Tanpa pendaftaran, login, atau formulir.</li><li>Tanpa cookie, alat analitik, atau skrip iklan.</li><li>Situs web disajikan oleh GitHub Pages (GitHub, Inc.). GitHub dapat memproses log akses seperti alamat IP untuk operasional dan keamanan, sesuai <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub General Privacy Statement</a>.</li><li>Font Pretendard dimuat dari CDN jsDelivr, yang dapat menerima informasi permintaan seperti alamat IP browser Anda.</li><li>Jika cookie atau analitik suatu saat diterapkan, kebijakan ini akan diperbarui terlebih dahulu.</li></ul>` },
      { id: 'email', h: '3. Email pertanyaan', html: `<table><tr><th>Item</th><th>Tujuan</th><th>Retensi</th></tr><tr><td>Alamat email, nama tampilan, isi pesan dan lampiran</td><td>Membaca dan menjawab pertanyaan, konsultasi proyek, menangani permintaan</td><td>Dihapus segera setelah ditangani. Jika berlanjut ke kontrak, disimpan selama masa kontrak dan jangka waktu yang diwajibkan hukum</td></tr></table><p>Email pertanyaan diterima dan disimpan di Gmail, yang disediakan oleh Google LLC.</p>` },
      { id: 'apps', h: '4. Aplikasi kami', html: `<p>Aplikasi yang tercakup: Roll Tidy (정리 싹), Roll Flick (넘겨 정리), Space Map (용량 지도), Dupeless (중복 싹), Archive Fix (한글 압축). Semuanya segera hadir.</p><div class="table-scroll"><table><tr><th>Aplikasi</th><th>Data yang diproses</th><th>Lokasi</th><th>Dikirim ke luar</th></tr><tr><td>Roll Tidy</td><td>Foto dan video di pustaka yang Anda beri akses</td><td>Di perangkat</td><td>Tidak ada</td></tr><tr><td>Roll Flick</td><td>Foto di pustaka yang Anda beri akses</td><td>Di perangkat</td><td>Tidak ada</td></tr><tr><td>Space Map</td><td>Nama, ukuran dan jenis file di folder yang Anda pilih</td><td>Di perangkat</td><td>Tidak ada</td></tr><tr><td>Dupeless</td><td>Ukuran file dan hash isi di folder yang Anda pilih</td><td>Di perangkat</td><td>Tidak ada</td></tr><tr><td>Archive Fix</td><td>Arsip dan file yang Anda pilih</td><td>Di perangkat</td><td>Tidak ada</td></tr></table></div><ul><li>Aplikasi tidak terhubung ke jaringan dan tidak pernah mengunggah file atau foto.</li><li>Tanpa akun, iklan, analitik, pelaporan crash, atau pelacakan.</li><li>File dan foto yang dihapus masuk ke tempat sampah sistem (Baru Dihapus di iOS) dan dapat dipulihkan.</li><li>Pengaturan, catatan progres (Roll Flick) dan cache analisis foto (Roll Tidy: hash, ketajaman, kecerahan) tersimpan di penyimpanan aplikasi pada perangkat.</li><li>Pembayaran ditangani oleh masing-masing toko aplikasi. EarnToLink tidak pernah menerima rincian pembayaran.</li></ul>` },
      { id: 'projects', h: '5. Proyek klien', html: `<p>Jika proyek klien melibatkan data pribadi milik klien, ruang lingkup dan cara pemrosesan mengikuti kontrak dan perjanjian pemrosesan data dengan klien tersebut.</p>` },
      { id: 'third', h: '6. Pengungkapan kepada pihak ketiga', html: `<p>Kami tidak memberikan data pribadi kepada pihak ketiga, kecuali diwajibkan oleh hukum.</p>` },
      { id: 'rights', h: '7. Hak Anda', html: `<p>Anda dapat meminta akses, perbaikan, penghapusan, atau penghentian pemrosesan kapan saja. Kirim permintaan ke ${mail}; kami akan menindaklanjutinya tanpa penundaan.</p>` },
      { id: 'destroy', h: '8. Penghapusan', html: `<p>Data pribadi dimusnahkan tanpa penundaan setelah masa retensinya berakhir atau tujuannya tercapai. File elektronik dihapus sehingga tidak dapat dipulihkan.</p>` },
      { id: 'security', h: '9. Keamanan', html: `<p>Akses ke email pertanyaan dibatasi hanya untuk perwakilan, dan kami tidak mengumpulkan data pribadi lebih dari yang diperlukan.</p>` },
      { id: 'officer', h: '10. Penanggung jawab privasi', html: `<table><tr><th>Nama</th><td>Juhwan Ma (Perwakilan)</td></tr><tr><th>Email</th><td>${mail}</td></tr></table>` },
      { id: 'remedy', h: '11. Upaya pemulihan (Korea)', html: `<ul><li>Pusat Pelaporan Pelanggaran Informasi Pribadi: privacy.kisa.or.kr, 118 (di Korea)</li><li>Komite Mediasi Sengketa Informasi Pribadi: www.kopico.go.kr, 1833-6972</li></ul>` },
      { id: 'changes', h: '12. Perubahan', html: `<p>Kebijakan ini berlaku mulai 10 Oktober 2026. Perubahan akan dipublikasikan di halaman ini beserta tanggal berlakunya.</p>` },
    ],
  },

  terms: {
    title: 'Ketentuan',
    desc: 'Ketentuan penggunaan situs web EarnToLink. Berlaku mulai 10 Oktober 2026.',
    eyebrow: 'Kebijakan', lead: 'Berlaku mulai 10 Oktober 2026',
    sections: [
      { id: 'purpose', h: '1. Tujuan', html: '<p>Ketentuan ini menetapkan syarat penggunaan earntolink.com, situs web yang dioperasikan oleh EarnToLink.</p>' },
      { id: 'content', h: '2. Hak atas konten', html: '<p>Hak atas teks, gambar dan kode di situs ini dimiliki oleh EarnToLink. Merek dagang pihak ketiga yang ditampilkan di sini adalah milik pemiliknya masing-masing.</p>' },
      { id: 'accuracy', h: '3. Informasi produk dan layanan', html: '<p>Status produk, fitur dan deskripsi layanan akurat pada saat penulisan. Fitur, harga dan jadwal produk yang belum dirilis dapat berubah.</p>' },
      { id: 'projects', h: '4. Kontrak proyek', html: '<p>Layanan pengembangan, otomatisasi, lokalisasi, peluncuran dan operasional mengikuti kontrak masing-masing proyek. Jika ketentuan ini berbeda dengan kontrak, kontrak yang berlaku.</p>' },
      { id: 'apps', h: '5. Penggunaan aplikasi', html: '<p>Setiap aplikasi juga tunduk pada ketentuan toko tempat aplikasi didistribusikan (App Store, Google Play, Microsoft Store dan lainnya) serta pemberitahuan aplikasi itu sendiri.</p>' },
      { id: 'links', h: '6. Tautan eksternal', html: '<p>Situs eksternal diatur oleh ketentuan dan kebijakannya masing-masing.</p>' },
      { id: 'liability', h: '7. Pembatasan tanggung jawab', html: '<p>Sejauh diizinkan oleh hukum, EarnToLink tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs ini.</p>' },
      { id: 'law', h: '8. Hukum yang berlaku', html: '<p>Ketentuan ini diatur oleh hukum Republik Korea.</p>' },
      { id: 'contact', h: '9. Kontak', html: `<p>${mail}</p>` },
    ],
  },

  og: { h: 'Menghubungkan pasar dengan dunia.', s: 'Pengembangan produk · Transformasi AI · Lokalisasi<br>Peluncuran di toko aplikasi · E-commerce · Operasional', tags: ['Web · Aplikasi · Desktop', 'AI · Otomatisasi', '14 bahasa'] },
};
