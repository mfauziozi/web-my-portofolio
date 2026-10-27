/**
 * =================================================================
 * DATA PORTOFOLIO IOS DEVELOPER
 * =================================================================
 * Anda dapat dengan mudah mengedit data diri, keahlian, riwayat kerja,
 * dan proyek aplikasi di file ini.
 * 
 * Untuk mengganti screenshot aplikasi:
 * Masukkan file foto/gambar Anda (format PNG, JPG, WebP) ke folder:
 * assets/images/projects/nama-file-anda.png
 * Lalu update path 'thumbnail' dan 'screenshots' di bawah ini.
 */

const portfolioData = {
  // Informasi Pribadi
  profile: {
    name: "Muchamad Fauzi",
    title: "Senior iOS Developer (Swift)",
    tagline: "Merancang & Membangun Pengalaman Native iOS Berkinerja Tinggi, Skalabilitas Tinggi, dan Handal.",
    shortBio: "Seorang iOS Developer dengan rekam jejak mengembangkan aplikasi native berskala besar, termasuk ekosistem perbankan digital nasional (BRImo), tanda tangan digital tersertifikasi (Privy), dan enterprise HR (Linov HR 5). Berpengalaman mendalam dalam Swift, UIKit, SwiftUI, arsitektur modular, dan standar keamanan mobile.",
    avatar: "assets/images/profile/avatar.svg",
    location: "Jakarta, Indonesia",
    statusBadge: "Tersedia untuk Full-time & Konsultasi iOS",
    email: "fauzi.iosdev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    appStore: "https://apps.apple.com",
    resumeUrl: "#contact",
    stats: [
      { label: "Tahun Pengalaman iOS", value: "4+", prefix: "", suffix: "" },
      { label: "Aplikasi Unggulan", value: "3", prefix: "", suffix: " Apps" },
      { label: "Crash-Free Users", value: "99.9", prefix: "", suffix: "%" },
      { label: "Total Pengguna Aktif", value: "50", prefix: "", suffix: "M+" }
    ]
  },

  // Keahlian & Teknologi iOS
  skills: [
    {
      category: "Bahasa & Framework Utama",
      description: "Pondasi utama dalam pengembangan aplikasi iOS modern.",
      items: [
        { name: "Swift 5 / 6", level: "Expert", icon: "code-2", highlight: "Modern Concurrency, Generics, Actors" },
        { name: "SwiftUI", level: "Expert", icon: "layout-grid", highlight: "Custom Modifiers, Canvas, Animations" },
        { name: "UIKit", level: "Advanced", icon: "layers", highlight: "AutoLayout, UICollectionView diffable" },
        { name: "Combine", level: "Advanced", icon: "git-merge", highlight: "Publishers, Subscribers, Operators" },
        { name: "Swift Concurrency", level: "Advanced", icon: "zap", highlight: "async/await, TaskGroup, Sendable" }
      ]
    },
    {
      category: "Arsitektur & Desain Sistem",
      description: "Pola kode yang maintainable, modular, dan testable.",
      items: [
        { name: "MVVM-C", level: "Expert", icon: "workflow", highlight: "Model-View-ViewModel + Coordinator" },
        { name: "Clean Architecture", level: "Advanced", icon: "shield-check", highlight: "Domain, Data, Presentation Separation" },
        { name: "The Composable Architecture (TCA)", level: "Intermediate", icon: "cpu", highlight: "State management terpusat" },
        { name: "Modular Architecture", level: "Advanced", icon: "box", highlight: "SPM Multi-module decomposition" },
        { name: "Unit & UI Testing", level: "Advanced", icon: "check-circle-2", highlight: "XCTest, Quick/Nimble, Mocks" }
      ]
    },
    {
      category: "Penyimpanan & Jaringan",
      description: "Manajemen data persisten lokal dan komunikasi API yang handal.",
      items: [
        { name: "SwiftData & CoreData", level: "Advanced", icon: "database", highlight: "Schema Migration, Predicate, Background context" },
        { name: "URLSession & REST API", level: "Expert", icon: "globe", highlight: "Custom Interceptors, JWT Token Refresh" },
        { name: "Keychain & Security", level: "Advanced", icon: "lock", highlight: "Biometric Auth, Secure Enclave, CryptoKit" },
        { name: "CloudKit", level: "Intermediate", icon: "cloud", highlight: "Cross-device private database sync" }
      ]
    },
    {
      category: "Tools & DevOps Apple",
      description: "Ekosistem alat untuk otomasi rilis dan optimasi performa.",
      items: [
        { name: "Xcode Instruments", level: "Advanced", icon: "gauge", highlight: "Time Profiler, Allocations, Leaks" },
        { name: "Fastlane & CI/CD", level: "Advanced", icon: "terminal", highlight: "Match, Gym, GitHub Actions pipeline" },
        { name: "TestFlight & App Store Connect", level: "Expert", icon: "smartphone", highlight: "Beta testing, phased rollouts" },
        { name: "Swift Package Manager (SPM)", level: "Expert", icon: "package", highlight: "Internal dependency management" }
      ]
    }
  ],

  // Daftar Proyek Aplikasi iOS (Bisa Anda tambah, kurangi, atau ubah screenshot-nya)
  // Daftar 3 Aplikasi Utama iOS
  projects: [
    {
      id: "brimo",
      title: "BRImo (BRI Mobile Banking)",
      subtitle: "Flagship Digital Banking & Lifestyle Ecosystem",
      category: "fintech",
      categoryLabel: "Digital Banking",
      featured: true,
      appIconBg: "from-blue-700 to-sky-500",
      appIconSymbol: "landmark",
      role: "iOS Developer / Module Engineer",
      timeline: "Flagship Project",
      thumbnail: "assets/images/projects/brimo/brimo-home.png",
      screenshots: [
        "assets/images/projects/brimo/brimo-home.png",
        "assets/images/projects/brimo/brimo-login.png",
        "assets/images/projects/brimo/brimo-atur-fitur.png",
        "assets/images/projects/brimo/brimo-favorit.png",
        "assets/images/projects/brimo/brimo-account.png",
        "assets/images/projects/brimo/brimo-lifestyle-1.png",
        "assets/images/projects/brimo/brimo-lifestyle-2.png"
      ],
      shortDescription: "Aplikasi mobile banking terbesar di Indonesia dengan puluhan juta pengguna aktif, menghadirkan transaksi finansial real-time, personalisasi dashboard (Atur Fitur), QRIS, dan modul Lifestyle perbankan.",
      fullDescription: "Berkontribusi langsung dalam pengembangan dan peningkatan performa aplikasi perbankan digital BRImo pada platform native iOS. Terlibat aktif dalam implementasi modul Dashboard Lifestyle, personalisasi menu (Atur Fitur & Fitur Favorit), alur konfirmasi transaksi (Pattern Confirmation & Receipt Revamp), integrasi autentikasi biometrik Face ID/Touch ID, serta pemisahan kode modular yang aman dan berkinerja tinggi.",
      metrics: {
        downloads: "50M+",
        rating: "4.7 ★",
        crashFree: "99.92%"
      },
      techStack: ["Swift", "UIKit", "SwiftUI", "MVVM-C", "Clean Architecture", "Biometric Auth", "CoreSecurity", "AVFoundation (QRIS)"],
      keyFeatures: [
        "Dashboard Utama & Personalisasi Menu 'Atur Fitur' untuk memudahkan akses transaksi harian nasabah.",
        "Fast Menu sebelum login untuk transaksi kilat (QRIS, BRIVA, E-Wallet, Pulsa/Data).",
        "Integrasi Alur Konfirmasi Transaksi (Pattern Confirmation) & Tanda Terima Digital (Receipt Revamp).",
        "Autentikasi keamanan ganda (Biometric Face ID / Touch ID & Enkripsi Sesi Perbankan)."
      ],
      technicalChallenges: [
        {
          problem: "Menjaga stabilitas dan responsivitas UI dengan tingginya variasi komponen modular pada halaman Dashboard & Lifestyle.",
          solution: "Menerapkan pemisahan responsibilitas arsitektur MVVM-Coordinator, reusable components, serta rendering asinkronus agar interaksi pengguna tetap halus dan efisien."
        },
        {
          problem: "Keamanan data sensitif transaksi keuangan dan perlindungan privasi saldo rekening nasabah pada layer presentasi.",
          solution: "Mengintegrasikan proteksi privacy blur otomatis saat aplikasi beralih ke multitasking snapshot serta masking nominal saldo secara dinamis."
        }
      ],
      links: {
        appStore: "https://apps.apple.com/id/app/brimo-bri/id1439730843",
        github: null,
        testFlight: null
      }
    },

    {
      id: "privy",
      title: "Privy - Digital Signature & Identity",
      subtitle: "PSrE-Certified Digital Signature & e-KYC Trust",
      category: "security",
      categoryLabel: "Digital Identity & Trust",
      featured: true,
      appIconBg: "from-rose-600 to-red-500",
      appIconSymbol: "file-check",
      role: "iOS Developer",
      timeline: "Enterprise Security",
      thumbnail: "assets/images/projects/privy/privy-mockup.svg",
      screenshots: [
        "assets/images/projects/privy/privy-mockup.svg"
      ],
      shortDescription: "Aplikasi identitas digital dan tanda tangan elektronik tersertifikasi (PSrE) yang sah secara hukum, mengamankan penandatanganan dokumen digital multi-pihak secara native di iOS.",
      fullDescription: "Mengembangkan modul penandatanganan dokumen elektronik dan verifikasi identitas pengguna pada aplikasi Privy iOS. Bertanggung jawab atas integrasi PDF rendering & interaksi kustom berbasis PDFKit, alur verifikasi biometrik e-KYC dengan liveness detection, serta pengelolaan sertifikat digital berstandar keamanan tinggi.",
      metrics: {
        downloads: "10M+",
        rating: "4.8 ★",
        crashFree: "99.95%"
      },
      techStack: ["Swift", "PDFKit", "CryptoKit", "Biometric Auth", "Face Liveness Detection", "Clean Architecture", "SPM"],
      keyFeatures: [
        "Tanda tangan digital berstandar hukum legal di Indonesia dengan sertifikat elektronik terakreditasi Kominfo.",
        "Viewer dokumen PDF interaktif dengan navigasi cepat dan penempatan letak tanda tangan presisi.",
        "Verifikasi identitas biometrik dan deteksi keaslian wajah (Liveness Detection) untuk mencegah spoofing.",
        "Sistem notifikasi pengingat dokumen dan audit trail transaksi dokumen legal."
      ],
      technicalChallenges: [
        {
          problem: "Rendering file dokumen PDF berukuran besar (puluhan megabyte) yang rentan menyebabkan memory peak dan lag pada scrolling.",
          solution: "Mengoptimalkan PDFKit dengan tiled asynchronous rendering dan caching halaman yang cerdas untuk menjaga pemakaian memori tetap rendah."
        }
      ],
      links: {
        appStore: "https://apps.apple.com/id/app/privy-digital-signature/id1254397637",
        github: null,
        testFlight: null
      }
    },

    {
      id: "linovhr",
      title: "Linov HR 5 (LinovHR Mobile)",
      subtitle: "Enterprise Human Resource Information System (HRIS)",
      category: "enterprise",
      categoryLabel: "Enterprise & HRIS",
      featured: true,
      appIconBg: "from-emerald-600 to-teal-500",
      appIconSymbol: "briefcase",
      role: "iOS Developer",
      timeline: "Enterprise HRMS",
      thumbnail: "assets/images/projects/linovhr/linovhr-mockup.svg",
      screenshots: [
        "assets/images/projects/linovhr/linovhr-mockup.svg"
      ],
      shortDescription: "Solusi mobile enterprise HRIS generasi terbaru untuk absensi cerdas berbasis GPS & Face Recognition, pengajuan cuti, lembur, dan slip gaji terenkripsi.",
      fullDescription: "Pengembangan arsitektur mobile pada Linov HR versi 5 yang melayani ribuan karyawan perusahaan terkemuka. Mengimplementasikan fitur absensi presisi dengan validasi geofencing lokasi kantor dan validasi biometrik wajah anti fake-GPS, manajemen alur approval berjenjang, serta proteksi keamanan pada akses slip gaji digital.",
      metrics: {
        downloads: "500K+",
        rating: "4.6 ★",
        crashFree: "99.9%"
      },
      techStack: ["Swift", "SwiftUI", "CoreLocation (Geofencing)", "Vision Framework", "LocalAuthentication", "REST API", "APNs"],
      keyFeatures: [
        "Clock-in & Clock-out pintar berbasis validasi radius Geofencing GPS dan pengenalan wajah real-time.",
        "Pengajuan cuti, izin, lembur, dan reimbursement dengan alur persetujuan (approval) atasan instan.",
        "Akses slip gaji digital (e-Payslip) yang diproteksi Face ID / Touch ID dan terenkripsi.",
        "Kalender kerja interaktif, info shift kerja, dan feed pengumuman internal perusahaan."
      ],
      technicalChallenges: [
        {
          problem: "Mencegah manipulasi lokasi (mock location/fake GPS) dan fraud presensi karyawan.",
          solution: "Menerapkan verifikasi integritas koordinat GPS dengan validasi akurasi horizontal/vertikal CoreLocation, deteksi perangkat jailbreak, dan validasi timestamp waktu server."
        }
      ],
      links: {
        appStore: "https://apps.apple.com/id/app/linovhr/id1524317188",
        github: null,
        testFlight: null
      }
    }
  ],

  // Riwayat Pengalaman Kerja
  experiences: [
    {
      period: "2023 - Sekarang",
      role: "Senior iOS Developer",
      company: "Tech Innovation Labs",
      type: "Full-Time",
      description: "Memimpin arsitektur aplikasi mobile iOS skala besar, mengarahkan transisi dari UIKit legacy ke SwiftUI modular, serta meningkatkan standar performa kode tim.",
      achievements: [
        "Mengurangi waktu startup aplikasi (cold launch) sebesar 42% menggunakan Xcode Instruments Time Profiler.",
        "Membangun reusable Design System internal berbasis SwiftUI Package yang digunakan oleh 3 tim aplikasi berbeda.",
        "Mengotomasi workflow TestFlight dan App Store distribution dengan Fastlane, menghemat 5+ jam rilis per sprint."
      ]
    },
    {
      period: "2021 - 2023",
      role: "iOS Application Engineer",
      company: "Digital FinTech Solutions",
      type: "Full-Time",
      description: "Bertanggung jawab atas modul pembayaran, integrasi biometric authentication, serta sistem enkripsi transaksi keuangan pada aplikasi perbankan digital.",
      achievements: [
        "Mempertahankan tingkat crash-free session pengguna di angka 99.95% untuk 100K+ Monthly Active Users.",
        "Menerapkan Clean Architecture + MVVM-Coordinator untuk memisahkan logika bisnis dari UI layer.",
        "Mengintegrasikan push notification interaktif via APNs dengan tingkat konversi pesan 30% lebih tinggi."
      ]
    },
    {
      period: "2020 - 2021",
      role: "Junior iOS Developer",
      company: "Creative Mobile Studio",
      type: "Full-Time",
      description: "Mengembangkan aplikasi native iOS untuk klien lokal dan internasional menggunakan UIKit, AutoLayout, Storyboard, dan RESTful API.",
      achievements: [
        "Berhasil merilis 4 aplikasi klien ke Apple App Store tepat waktu sesuai jadwal.",
        "Mengimplementasikan unit testing pertama pada modul autentikasi dengan code coverage mencapai 85%."
      ]
    }
  ],

  // Informasi Kontak
  contact: {
    heading: "Mari Bekerja Sama",
    subheading: "Punya ide aplikasi iOS baru, butuh bantuan arsitektur Swift, atau sedang mencari iOS Engineer untuk tim Anda? Mari berdiskusi!",
    directEmail: "fauzi.iosdev@example.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    appStoreUrl: "https://apps.apple.com",
    location: "Jakarta, Indonesia (Bisa Remote / On-site)"
  },

  // Konfigurasi Mode Owner (Khusus Pemilik Portofolio)
  owner: {
    passcode: "admin", // Passcode default untuk membuka fitur upload di browser
    hint: "Buka URL '?owner=true' atau klik tombol gembok di footer dan masukkan passcode 'admin'."
  }
};


