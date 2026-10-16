// Bahasa Indonesia. Struktur sama dengan ko.mjs / en.mjs.
const EMAIL = 'hello@earntolink.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const APP_LANGS = '10 bahasa (Inggris, Korea, Jepang, Mandarin Sederhana dan Tradisional, Jerman, Prancis, Spanyol, Portugis, Italia)';
const ONDEVICE = 'Di perangkat · tanpa koneksi jaringan';
const ONE_TIME = 'Beli sekali · maksimal ₩10,000';

export default {
  brand: 'EarnToLink',
  brandAlt: '언투링크',
  slogan: "Konsultasi pendapatan iklan untuk situs web, aplikasi, dan e-commerce",
  translationNote: 'Halaman ini adalah terjemahan. Jika berbeda dari aslinya dalam bahasa Korea, versi asli bahasa Korea yang berlaku.',

  ui: {
    skip: 'Lewati ke konten', menu: 'Menu', language: 'Bahasa', mainNav: 'Utama', breadcrumb: 'Jejak navigasi', toc: 'Daftar isi', homeAria: 'Beranda EarnToLink',
    nav: { services: "Layanan", products: 'Produk', about: 'Tentang', principles: 'Cara kerja kami', news: 'Berita', contact: 'Kontak' },
    home: 'Beranda', privacy: 'Kebijakan Privasi', terms: 'Ketentuan', rss: 'RSS',
    footer: { services: "Layanan", products: 'Produk', company: 'Perusahaan', policy: 'Kebijakan' },
    biz: { name: 'Nama usaha', rep: 'Perwakilan', no: 'No. registrasi usaha', tax: 'Jenis pajak', kinds: 'Bidang usaha', mail: 'Email' },
    rights: '© 2026 EarnToLink. Semua hak dilindungi.',
    view: 'Detail', all: 'Semua produk', allServices: "Semua layanan", email: 'Email', mailBtn: 'Kirim email', projectBtn: "Jadwalkan konsultasi",
    platform: 'Platform', status: 'Status', features: 'Fitur', specs: 'Spesifikasi', related: 'Produk lainnya', privacyNote: 'Privasi',
    productIllustration: 'Ilustrasi produk: ',
    heroLabel: 'Ilustrasi dasbor pendapatan iklan dari situs web, aplikasi, dan e-commerce',
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
    "title": "EarnToLink | Konsultasi pendapatan iklan untuk situs web, aplikasi, dan platform e-commerce",
    "desc": "EarnToLink adalah konsultan pendapatan iklan. Kami menilai dan merancang cara situs web, aplikasi, dan platform e-commerce menghasilkan uang dari iklan: pemilihan dan pengaturan platform, kepatuhan kebijakan dan privasi, retail media, serta operasional iklan berkelanjutan.",
    "eyebrow": "EarnToLink",
    "h1": "Konsultasi pendapatan iklan<br>untuk situs web, aplikasi, dan e-commerce",
    "lead": "Kami membantu situs web, aplikasi, dan platform e-commerce memperoleh pendapatan iklan yang stabil. Kami menilai kondisi Anda saat ini, memilih platform dan penempatan iklan yang tepat, lalu mendampingi Anda dalam tinjauan kebijakan dan operasional harian.",
    "meta": [
      "Situs web dan media",
      "Aplikasi seluler",
      "E-commerce dan retail media"
    ],
    "stats": [
      [
        "6",
        "Bidang konsultasi"
      ],
      [
        "3",
        "Kanal pendapatan: web, aplikasi, e-commerce"
      ],
      [
        "6",
        "Tahapan di setiap proyek"
      ],
      [
        "14",
        "Bahasa situs web"
      ]
    ],
    "services": {
      "eyebrow": "Layanan",
      "title": "Enam bidang konsultasi",
      "text": "Dari penilaian, pengaturan platform, tinjauan kebijakan, hingga operasional. Pilih hanya bidang yang Anda perlukan."
    },
    "why": {
      "eyebrow": "Mengapa EarnToLink",
      "title": "Pendapatan dan kepercayaan, terlindungi bersama",
      "text": "Enam prinsip yang kami pegang di setiap proyek."
    },
    "how": {
      "eyebrow": "Cara kerja kami",
      "title": "Dari diskusi awal hingga operasional berkelanjutan",
      "text": "Enam tahap, masing-masing diperiksa dengan data sebelum kami melangkah ke tahap berikutnya."
    },
    "co": {
      "eyebrow": "Perusahaan",
      "title": "EarnToLink",
      "text": "Usaha perorangan di Korea. Konsultasi pendapatan iklan dan pengembangan perangkat lunak."
    },
    "news": {
      "eyebrow": "Berita",
      "title": "Berita terbaru"
    }
  },

  services: {
    "title": "Layanan",
    "desc": "Layanan EarnToLink: penilaian dan strategi pendapatan iklan, monetisasi situs web dan media, monetisasi aplikasi, retail media dan pengembangan platform iklan, kepatuhan kebijakan iklan dan privasi, serta operasional dan pelaporan iklan.",
    "eyebrow": "Layanan",
    "h1": "Layanan",
    "lead": "Enam bidang. Pilih hanya yang Anda perlukan.",
    "whoLabel": "Cocok jika",
    "scopeLabel": "Yang kami kerjakan",
    "deliverLabel": "Yang Anda terima",
    "otherLabel": "Layanan lainnya",
    "items": {
      "strategy": {
        "name": "Penilaian dan strategi pendapatan iklan",
        "short": "Kami meninjau trafik, penempatan iklan, pengaturan platform, dan metrik pendapatan Anda, lalu menentukan arah model pendapatan.",
        "lead": "Pertama, kami mencari tahu dari mana pendapatan iklan Anda berasal dan di mana letak kebocorannya. Angka dicatat pada satu acuan yang konsisten, lalu kami menyusun prioritas dan rencana tindakan.",
        "who": [
          "Anda memasang iklan tetapi hasilnya di bawah harapan",
          "Anda sedang menimbang untuk berganti atau menambah platform iklan",
          "Pendapatan iklan perlu masuk dalam rencana bisnis Anda"
        ],
        "scope": [
          [
            "Tinjauan kondisi saat ini",
            "Komposisi trafik, penempatan iklan, pengaturan platform, dan alur pendapatan."
          ],
          [
            "Metrik utama",
            "Acuan untuk RPM halaman, impression rate, fill rate, dan viewability."
          ],
          [
            "Model pendapatan",
            "Kombinasi yang tepat antara iklan, pendapatan afiliasi, langganan, dan iklan yang dijual langsung."
          ],
          [
            "Rencana tindakan",
            "Prioritas, jadwal, dan perkiraan dampak setiap perbaikan."
          ]
        ],
        "deliver": [
          "Laporan penilaian",
          "Tabel acuan metrik",
          "Rekomendasi model pendapatan",
          "Rencana tindakan bertahap"
        ]
      },
      "web": {
        "name": "Monetisasi situs web dan media",
        "short": "Kesiapan persetujuan, desain penempatan iklan, serta keseimbangan antara kecepatan halaman dan pendapatan untuk blog, situs berita, dan situs informasi.",
        "lead": "Alih-alih menambah jumlah iklan, kami mencari posisi yang tidak mengganggu pembaca. Kami menangani semuanya, dari kesiapan persetujuan dan desain penempatan hingga pengaturan programmatic.",
        "who": [
          "Anda sedang mempersiapkan peninjauan persetujuan platform iklan",
          "Iklan memperlambat halaman atau menaikkan bounce rate",
          "Anda ingin menjalankan beberapa jaringan iklan sekaligus"
        ],
        "scope": [
          [
            "Kesiapan persetujuan",
            "Pemeriksaan struktur situs, halaman wajib, dan kualitas konten, kemudian pengajuan."
          ],
          [
            "Desain penempatan",
            "Posisi, ukuran, dan jarak iklan yang mengikuti alur konten Anda."
          ],
          [
            "Kecepatan halaman",
            "Lazy loading dan pencegahan layout shift agar halaman tetap cepat."
          ],
          [
            "Pengaturan programmatic",
            "Konfigurasi ad server dan header bidding, serta aturan price floor."
          ]
        ],
        "deliver": [
          "Daftar periksa persetujuan",
          "Rencana penempatan",
          "Pengaturan iklan dan panduan implementasi",
          "Laporan sebelum dan sesudah"
        ]
      },
      "app": {
        "name": "Monetisasi aplikasi",
        "short": "Format iklan, mediasi, dan frekuensi tayang di aplikasi seluler, dirancang mengikuti cara pengguna memakainya.",
        "lead": "Kami menentukan kapan dan di mana iklan banner, interstitial, dan rewarded tampil, serta meningkatkan pendapatan sambil menjaga retensi pengguna.",
        "who": [
          "Anda baru pertama kali menambahkan iklan ke aplikasi",
          "Rating atau retensi turun setelah iklan dipasang",
          "Anda ingin menggabungkan beberapa jaringan iklan lewat mediasi"
        ],
        "scope": [
          [
            "Desain format iklan",
            "Penempatan dan waktu tayang iklan banner, interstitial, rewarded, dan native."
          ],
          [
            "Mediasi",
            "Pengaturan prioritas dan bidding di antara jaringan iklan."
          ],
          [
            "Frekuensi dan pengalaman",
            "Batas frekuensi, perlindungan sesi pertama, dan pengguna berbayar tanpa iklan."
          ],
          [
            "Iklan berdampingan dengan pembelian dalam aplikasi",
            "Produk hapus iklan dan keterpaduan iklan rewarded dengan pembelian."
          ]
        ],
        "deliver": [
          "Peta penempatan iklan",
          "Rencana pengaturan mediasi",
          "Dokumen aturan frekuensi",
          "Perbandingan retensi dan pendapatan"
        ]
      },
      "retail": {
        "name": "Retail media dan pengembangan platform iklan",
        "short": "Kami membantu marketplace dan platform membangun produk serta operasional iklan agar penjual dan merek dapat beriklan di platform Anda.",
        "lead": "Kami mengubah trafik dan data platform Anda menjadi produk iklan, lalu bersama Anda merancang harga, penjualan, dan pelaporan kinerja.",
        "who": [
          "Anda ingin membuka bisnis iklan di marketplace atau platform Anda",
          "Iklan penjual masih dijual dan ditagih secara manual",
          "Pengiklan meminta laporan yang membuktikan hasil"
        ],
        "scope": [
          [
            "Desain produk iklan",
            "Posisi yang dapat dijual, seperti teratas di pencarian, produk bersponsor, banner, dan email."
          ],
          [
            "Harga dan penjualan",
            "Produk berbasis lelang, harga tetap, dan durasi, lengkap dengan aturan harga."
          ],
          [
            "Data dan pengukuran",
            "Impression, klik, dan atribusi pembelian yang diukur sesuai aturan privasi."
          ],
          [
            "Model operasional",
            "Onboarding pengiklan, peninjauan iklan, penagihan, dan pelaporan kinerja."
          ]
        ],
        "deliver": [
          "Katalog produk iklan dan rate card",
          "Model laba rugi bisnis iklan",
          "Standar pengukuran dan templat laporan",
          "Prosedur operasional"
        ]
      },
      "policy": {
        "name": "Kepatuhan kebijakan iklan dan privasi",
        "short": "Tinjauan kebijakan, bantuan saat penolakan, manajemen persetujuan, ads.txt, dan kebijakan privasi.",
        "lead": "Akun yang aman lebih penting daripada pendapatan. Kami menemukan risiko kebijakan sejak dini, dan bila pengajuan ditolak atau akun dibatasi, kami mencari penyebabnya lalu menanggapinya.",
        "who": [
          "Persetujuan iklan Anda ditolak atau akun Anda dibatasi",
          "Anda memerlukan manajemen persetujuan untuk pengunjung dari wilayah lain",
          "Kebijakan privasi Anda perlu diperbarui sebelum iklan tayang"
        ],
        "scope": [
          [
            "Tinjauan kebijakan",
            "Risiko kebijakan pada konten, penempatan iklan, dan sumber trafik."
          ],
          [
            "Penolakan dan pembatasan",
            "Analisis penyebab, perbaikan, dan pengajuan tinjauan ulang."
          ],
          [
            "Manajemen persetujuan",
            "Pemberitahuan persetujuan per wilayah yang terhubung dengan pengaturan iklan Anda."
          ],
          [
            "File dan dokumen wajib",
            "ads.txt, app-ads.txt, kebijakan privasi, dan pemberitahuan cookie."
          ]
        ],
        "deliver": [
          "Daftar periksa kebijakan",
          "Catatan tanggapan",
          "Pengaturan manajemen persetujuan",
          "File dan dokumen wajib"
        ]
      },
      "ops": {
        "name": "Operasional iklan dan konsultasi pelaporan",
        "short": "Setiap bulan kami membaca metrik pendapatan, menjalankan pengujian, dan memperbaiki yang perlu diperbaiki, termasuk trafik tidak valid dan selisih pembayaran.",
        "lead": "Pendapatan iklan bukan pengaturan sekali jadi. Kami meninjau metrik setiap bulan dan hanya mempertahankan perubahan yang terbukti lewat pengujian.",
        "who": [
          "Pendapatan iklan Anda naik turun tajam dari bulan ke bulan",
          "Anda menggabungkan laporan dari beberapa platform secara manual",
          "Belum ada orang di tim Anda yang memegang operasional iklan"
        ],
        "scope": [
          [
            "Tinjauan bulanan",
            "Perubahan pendapatan, impression, harga, dan fill rate beserta penyebabnya."
          ],
          [
            "Pengujian",
            "Uji banding penempatan, format iklan, dan aturan harga."
          ],
          [
            "Pelaporan terpadu",
            "Pendapatan dari semua platform dalam satu laporan."
          ],
          [
            "Pemeriksaan kualitas",
            "Trafik tidak valid, kualitas iklan, dan selisih pembayaran."
          ]
        ],
        "deliver": [
          "Laporan operasional bulanan",
          "Catatan pengujian",
          "Laporan terpadu",
          "Daftar perbaikan berikutnya"
        ]
      }
    }
  },

  why: [
    [
      "Pendapatan selaras dengan pengalaman pengguna",
      "Alih-alih menambah iklan, kami mencari penempatan yang menjaga halaman tetap cepat dan perjalanan pengguna tetap lancar."
    ],
    [
      "Berdasarkan pengukuran, bukan dugaan",
      "Kami mencatat angka acuan sebelum mulai dan membandingkan setiap perubahan dengan dasar yang sama."
    ],
    [
      "Saran yang independen",
      "Kami tidak menerima komisi rujukan dari platform iklan, sehingga setiap pilihan kami bandingkan secara setara."
    ],
    [
      "Kepatuhan kebijakan di atas segalanya",
      "Kami meningkatkan pendapatan hanya dalam batas kebijakan iklan dan aturan privasi. Tanpa umpan klik, tanpa trafik tidak valid."
    ],
    [
      "Akun dan data milik Anda",
      "Akun iklan, data pembayaran, dan laporan dibuat serta disimpan atas nama Anda."
    ],
    [
      "Pembaruan mingguan",
      "Setiap minggu kami melaporkan apa yang berubah, bagaimana angkanya bergerak, dan langkah berikutnya."
    ]
  ],

  steps: [
    [
      "Diskusi awal",
      "Layanan, skala trafik, dan tujuan Anda."
    ],
    [
      "Penilaian",
      "Penempatan, pengaturan, dan metrik pendapatan ditinjau, angka acuan dicatat."
    ],
    [
      "Perancangan",
      "Platform iklan, penempatan, dan rencana kepatuhan."
    ],
    [
      "Pengaturan dan pengujian",
      "Perubahan diterapkan dan dibandingkan sebelum dan sesudahnya."
    ],
    [
      "Persetujuan dan peluncuran",
      "Tinjauan kebijakan, manajemen persetujuan, dan file wajib."
    ],
    [
      "Operasional",
      "Tinjauan bulanan, pengujian, dan laporan."
    ]
  ],

  cta: {
    "title": "Diskusikan pendapatan iklan bersama kami",
    "text": "Kirimkan email berisi situs web atau aplikasi Anda, trafik bulanan, dan masalah yang Anda hadapi."
  },

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
    "title": "Tentang",
    "desc": "Tentang EarnToLink: konsultan yang membantu situs web, aplikasi, dan platform e-commerce menghasilkan uang dari iklan. Misi, layanan, prinsip, dan informasi usaha.",
    "eyebrow": "Tentang",
    "h1": "EarnToLink",
    "lead": "EarnToLink adalah konsultan pendapatan iklan yang merancang cara perusahaan memperoleh penghasilan dari iklan.",
    "mission": {
      "eyebrow": "Misi",
      "title": "Iklan yang memperkuat bisnis",
      "body": [
        "Banyak bisnis memiliki konten dan layanan yang bagus, tetapi penghasilan dari iklannya kecil. Penempatannya kurang pas, pengaturannya sudah usang, atau ada masalah kebijakan yang menahan pendapatan.",
        "EarnToLink mengukur posisi Anda saat ini, memilih platform dan penempatan iklan yang tepat, serta mendukung operasional harian sesuai kebijakan dan aturan privasi. Hasil setiap perubahan kami tunjukkan pada acuan yang sama.",
        "Berbekal pengalaman kami sendiri membangun dan menjalankan situs web serta aplikasi, kami berpegang pada satu prinsip: monetisasi tidak boleh merusak pengalaman pengguna."
      ]
    },
    "do": {
      "eyebrow": "Layanan",
      "title": "Yang kami kerjakan",
      "text": "Bidang usaha terdaftar: pengembangan dan penyediaan perangkat lunak aplikasi (utama), ritel e-commerce, perantara ritel e-commerce."
    },
    "why": {
      "eyebrow": "Prinsip",
      "title": "Prinsip kami"
    },
    "info": {
      "eyebrow": "Perusahaan",
      "title": "Informasi usaha"
    }
  },

  principles: {
    "title": "Cara kerja kami",
    "desc": "Cara kerja EarnToLink: pendapatan selaras dengan pengalaman pengguna, hasil yang terukur, saran independen, dan kepatuhan kebijakan. Tahapan dan ketentuan kontrak.",
    "eyebrow": "Cara kerja kami",
    "h1": "Cara kerja kami",
    "lead": "Prinsip, tahapan, dan ketentuan kontrak.",
    "why": {
      "eyebrow": "Prinsip",
      "title": "Enam prinsip",
      "text": "Berlaku di setiap proyek."
    },
    "steps": {
      "eyebrow": "Proses",
      "title": "Tahapan",
      "text": "Dari diskusi awal hingga operasional."
    },
    "terms": {
      "eyebrow": "Kontrak",
      "title": "Ketentuan kontrak",
      "rows": [
        [
          "Proyek",
          "Kontrak per proyek menetapkan ruang lingkup, jadwal, biaya, dan ketentuan pembayaran"
        ],
        [
          "Perubahan lingkup",
          "Perubahan dan biayanya disepakati sebelum pekerjaan dilanjutkan"
        ],
        [
          "Kepemilikan",
          "Akun iklan, laporan, dan dokumen pengaturan tetap atas nama Anda"
        ],
        [
          "Biaya",
          "Tanpa komisi rujukan dari platform iklan · biaya konsultasi dinyatakan dalam kontrak"
        ]
      ]
    }
  },

  contact: {
    "title": "Kontak",
    "desc": "Hubungi EarnToLink untuk konsultasi pendapatan iklan, produk, privasi, atau kemitraan. hello@earntolink.com",
    "eyebrow": "Kontak",
    "h1": "Kontak",
    "lead": "Kami menerima pertanyaan lewat email dan membalas dalam bahasa Korea atau Inggris.",
    "topics": [
      [
        "chart",
        "Konsultasi",
        "Penilaian pendapatan iklan, monetisasi web dan aplikasi, retail media, masalah kebijakan, saran operasional"
      ],
      [
        "package",
        "Produk",
        "Fitur, tanggal rilis, dan bug pada aplikasi buatan kami sendiri"
      ],
      [
        "receipt",
        "Pembayaran",
        "Pembayaran dan pengembalian dana aplikasi mengikuti kebijakan masing-masing toko aplikasi"
      ],
      [
        "shield",
        "Privasi",
        "Permintaan akses, koreksi, penghapusan, atau penghentian pemrosesan data pribadi"
      ],
      [
        "users",
        "Kemitraan",
        "Kolaborasi dan usulan lainnya"
      ]
    ],
    "brief": {
      "title": "Informasi yang sebaiknya disertakan",
      "items": [
        "Apa yang Anda kelola (situs web, aplikasi, atau platform e-commerce) beserta alamatnya",
        "Jumlah pengunjung bulanan atau pengguna aktif",
        "Platform iklan yang Anda pakai saat ini dan masalah yang terlihat",
        "Jangka waktu yang Anda inginkan"
      ]
    }
  },

  news: {
    "ad-consulting": {
      "title": "EarnToLink berfokus pada konsultasi pendapatan iklan",
      "summary": "Penilaian dan strategi, monetisasi web dan aplikasi, retail media, kepatuhan kebijakan, dan saran operasional.",
      "body": [
        "EarnToLink kini memfokuskan layanannya pada konsultasi pendapatan iklan.",
        "Kami menawarkan enam layanan: penilaian dan strategi pendapatan iklan, monetisasi situs web dan media, monetisasi aplikasi, retail media dan pengembangan platform iklan, kepatuhan kebijakan iklan dan privasi, serta operasional dan konsultasi pelaporan iklan.",
        "Untuk konsultasi, kirim email ke hello@earntolink.com."
      ]
    },
    "earntolink-com-launch": {
      "title": "earntolink.com telah tayang",
      "summary": "Situs web EarnToLink telah tayang dalam 14 bahasa.",
      "body": [
        "Situs web EarnToLink, earntolink.com, kini telah tayang.",
        "Situs ini memuat layanan, produk buatan sendiri, rincian perusahaan, kebijakan privasi, dan informasi kontak.",
        "Tersedia dalam bahasa Korea, Inggris, Jepang, Mandarin (Sederhana dan Tradisional), Spanyol, Prancis, Jerman, Portugis, Italia, Vietnam, Indonesia, Thai dan Rusia."
      ]
    },
    "product-lineup": {
      "title": "Produk buatan sendiri",
      "summary": "Dua aplikasi seluler dan tiga aplikasi desktop.",
      "body": [
        "Status terkini produk buatan sendiri.",
        "Aplikasi seluler Roll Tidy dan Roll Flick serta aplikasi desktop Space Map, Dupeless dan Archive Fix segera hadir."
      ]
    }
  },
  newsPage: {
    "title": "Berita",
    "desc": "Berita EarnToLink: pembaruan layanan, peluncuran situs web, dan status produk."
  },

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
      { id: 'accuracy', h: '3. Informasi produk dan layanan', html: "<p>Status produk, fitur, dan uraian layanan akurat pada saat penulisan. Fitur, harga, dan jadwal produk yang belum dirilis dapat berubah.</p>" },
      { id: 'projects', h: '4. Kontrak proyek', html: "<p>Layanan penilaian, konsultasi, pengaturan iklan, dan saran operasional mengikuti kontrak untuk masing-masing proyek. Jika ketentuan ini berbeda dengan kontrak, kontrak yang berlaku. Pendapatan iklan bergantung pada pasar iklan dan kebijakan platform, dan perkiraan apa pun dalam penilaian atau proposal kami bukan merupakan jaminan.</p>" },
      { id: 'apps', h: '5. Penggunaan aplikasi', html: '<p>Setiap aplikasi juga tunduk pada ketentuan toko tempat aplikasi didistribusikan (App Store, Google Play, Microsoft Store dan lainnya) serta pemberitahuan aplikasi itu sendiri.</p>' },
      { id: 'links', h: '6. Tautan eksternal', html: '<p>Situs eksternal diatur oleh ketentuan dan kebijakannya masing-masing.</p>' },
      { id: 'liability', h: '7. Pembatasan tanggung jawab', html: '<p>Sejauh diizinkan oleh hukum, EarnToLink tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs ini.</p>' },
      { id: 'law', h: '8. Hukum yang berlaku', html: '<p>Ketentuan ini diatur oleh hukum Republik Korea.</p>' },
      { id: 'contact', h: '9. Kontak', html: `<p>${mail}</p>` },
    ],
  },

  og: {
    "h": "Mitra pertumbuhan untuk bisnis iklan Anda",
    "s": "Penilaian pendapatan iklan · Monetisasi web dan aplikasi<br>Retail media · Kepatuhan kebijakan · Operasional",
    "tags": [
      "Situs web dan media",
      "Aplikasi seluler",
      "E-commerce"
    ]
  },
};
