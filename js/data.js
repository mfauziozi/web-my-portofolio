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
    name: "M. Fauzi",
    title: "Senior iOS Developer & Swift Specialist",
    tagline: "Merancang & Membangun Pengalaman Native iOS Berkinerja Tinggi, Elegan, dan Tanpa Kompromi.",
    shortBio: "Seorang iOS Developer dengan fokus pada Swift, SwiftUI, dan Clean Architecture. Berpengalaman membangun aplikasi native dengan animasi halus, integrasi sistem mendalam (WidgetKit, CoreData/SwiftData, HealthKit), serta arsitektur yang modular dan teruji.",
    avatar: "assets/images/profile/avatar.svg",
    location: "Jakarta, Indonesia",
    statusBadge: "Tersedia untuk Full-time & Proyek Baru",
    email: "fauzi.iosdev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    appStore: "https://apps.apple.com",
    resumeUrl: "#contact",
    stats: [
      { label: "Tahun Pengalaman iOS", value: "4+", prefix: "", suffix: "" },
      { label: "Aplikasi di App Store", value: "10+", prefix: "", suffix: "" },
      { label: "Crash-Free Users", value: "99.9", prefix: "", suffix: "%" },
      { label: "Total Downloads", value: "250", prefix: "", suffix: "K+" }
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
  projects: [
    {
      id: "kriptopay",
      title: "KriptoPay iOS Wallet",
      subtitle: "Fintech & Web3 Asset Management",
      category: "fintech",
      categoryLabel: "FinTech & Web3",
      featured: true,
      appIconBg: "from-blue-700 to-sky-600",
      appIconSymbol: "coins",
      role: "Lead iOS Engineer",
      timeline: "6 Bulan",
      thumbnail: "assets/images/projects/kripto-pay-1.svg",
      screenshots: [
        "assets/images/projects/kripto-pay-1.svg",
        "assets/images/projects/kripto-pay-2.svg"
      ],
      shortDescription: "Aplikasi dompet digital modern untuk manajemen aset multi-currency, swap instan, dan riwayat transaksi dengan integrasi LocalAuthentication (Face ID).",
      fullDescription: "KriptoPay dibangun secara native menggunakan SwiftUI penuh dengan pola Clean Architecture + MVVM. Mengimplementasikan Swift Charts untuk visualisasi riwayat harga aset real-time, Keychain Services terenkripsi untuk keamanan private key, serta WebSocket untuk update kurs tanpa delay.",
      metrics: {
        downloads: "120K+",
        rating: "4.9 ★",
        crashFree: "99.95%"
      },
      techStack: ["SwiftUI", "Combine", "Swift Charts", "CryptoKit", "Face ID", "Clean Architecture", "WebSocket"],
      keyFeatures: [
        "Dashboard portofolio interaktif dengan animasi grafik Swift Charts kustom.",
        "Autentikasi biometrik Face ID / Touch ID menggunakan LocalAuthentication framework.",
        "Kirim & terima aset kripto dengan pemindaian QR Code kamera native (AVFoundation).",
        "Enkripsi keychain hardware-backed (Secure Enclave) untuk keamanan kunci dompet."
      ],
      technicalChallenges: [
        {
          problem: "Streaming data websocket harga kripto yang sangat cepat menyebabkan rendering UI sering freeze.",
          solution: "Menerapkan Combine debounce & publisher buffer pada background thread sebelum mempublikasikan state ke @MainActor."
        },
        {
          problem: "Keamanan transaksi berisiko tinggi saat aplikasi beralih ke multitasking snapshot.",
          solution: "Mengimplementasikan proteksi privacy blur otomatis di sceneDidEnterBackground untuk menyamarkan nominal aset."
        }
      ],
      links: {
        appStore: "https://apps.apple.com",
        github: "https://github.com",
        testFlight: null
      }
    },

    {
      id: "fitpulse",
      title: "FitPulse: Health Tracker",
      subtitle: "Personal Fitness & HealthKit Companion",
      category: "health",
      categoryLabel: "Health & Fitness",
      featured: true,
      appIconBg: "from-rose-500 to-emerald-500",
      appIconSymbol: "heart-pulse",
      role: "Senior iOS Developer",
      timeline: "5 Bulan",
      thumbnail: "assets/images/projects/fitpulse-1.svg",
      screenshots: [
        "assets/images/projects/fitpulse-1.svg"
      ],
      shortDescription: "Aplikasi pelacak kebugaran terpadu dengan sinkronisasi HealthKit, pelacakan rute lari GPS real-time, dan tampilan Activity Ring Apple Watch.",
      fullDescription: "FitPulse dirancang untuk memanfaatkan potensi hardware iPhone dan Apple Watch secara maksimal. Mengintegrasikan HealthKit secara mendalam untuk membaca detak jantung, pola tidur, dan pembakaran kalori, serta memanfaatkan CoreMotion dan CoreLocation untuk penghitungan langkah dan pemetaan rute olahraga luar ruangan.",
      metrics: {
        downloads: "85K+",
        rating: "4.8 ★",
        crashFree: "99.9%"
      },
      techStack: ["SwiftUI", "HealthKit", "CoreMotion", "CoreLocation", "MapKit", "WidgetKit"],
      keyFeatures: [
        "Integrasi dua arah dengan Apple Health (HealthKit Store queries & background observers).",
        "Cincin aktivitas interaktif dengan kalkulasi target kalori dinamis.",
        "Widget Lock Screen dan Home Screen iOS 17 menggunakan WidgetKit.",
        "Live Activities pada Dynamic Island saat sesi latihan lari sedang berlangsung."
      ],
      technicalChallenges: [
        {
          problem: "Penggunaan baterai yang boros saat aplikasi melacak GPS rute lari di background.",
          solution: "Mengonfigurasi CoreLocation dengan kCLLocationAccuracyBestForNavigation dan pausesLocationUpdatesAutomatically saat pengguna berhenti."
        }
      ],
      links: {
        appStore: "https://apps.apple.com",
        github: "https://github.com",
        testFlight: null
      }
    },

    {
      id: "taskflow",
      title: "TaskFlow: Focus & Notes",
      subtitle: "Minimalist Productivity & SwiftData",
      category: "productivity",
      categoryLabel: "Produktivitas",
      featured: true,
      appIconBg: "from-amber-500 to-orange-600",
      appIconSymbol: "check-square",
      role: "Solo iOS Developer",
      timeline: "3 Bulan",
      thumbnail: "assets/images/projects/taskflow-1.svg",
      screenshots: [
        "assets/images/projects/taskflow-1.svg"
      ],
      shortDescription: "Aplikasi produktivitas berbasis waktu dengan integrasi SwiftData lokal pertama dan sinkronisasi otomatis CloudKit di seluruh perangkat Apple.",
      fullDescription: "TaskFlow menghadirkan antarmuka minimalis anti-distraksi untuk mencatat to-do list, reminder kontekstual, dan timer fokus gaya Pomodoro. Sepenuhnya memanfaatkan SwiftData @Model untuk persistensi performa tinggi dan CloudKit mirroring tanpa perlu server eksternal.",
      metrics: {
        downloads: "40K+",
        rating: "4.9 ★",
        crashFree: "100%"
      },
      techStack: ["Swift 6", "SwiftUI", "SwiftData", "CloudKit Sync", "UserNotifications", "Haptics"],
      keyFeatures: [
        "Sinkronisasi instan tanpa login via iCloud Private Database (CloudKit).",
        "Feedback haptik halus menggunakan UIFeedbackGenerator untuk setiap interaksi tombol.",
        "Notifikasi pengingat terjadwal lokal (UNUserNotificationCenter).",
        "Dukungan penuh Dark Mode & Tinted App Icons pada iOS 18."
      ],
      technicalChallenges: [
        {
          problem: "Migrasi struktur schema data dari model sederhana ke relasi bertingkat tanpa merusak data pengguna.",
          solution: "Membuat VersionedSchema dan SchemaMigrationPlan di SwiftData dengan fallback pengujian otomatis."
        }
      ],
      links: {
        appStore: "https://apps.apple.com",
        github: "https://github.com",
        testFlight: null
      }
    },

    {
      id: "coffeeshop",
      title: "Artisan Coffee & Deli",
      subtitle: "E-Commerce with Apple Pay & MapKit",
      category: "ecommerce",
      categoryLabel: "E-Commerce",
      featured: false,
      appIconBg: "from-amber-700 to-yellow-600",
      appIconSymbol: "coffee",
      role: "iOS Developer",
      timeline: "4 Bulan",
      thumbnail: "assets/images/projects/coffeeshop-1.svg",
      screenshots: [
        "assets/images/projects/coffeeshop-1.svg"
      ],
      shortDescription: "Aplikasi pemesanan kopi takeaway artisan dengan checkout satu sentuhan Apple Pay dan penjemputan berbasis estimasi radius toko MapKit.",
      fullDescription: "Aplikasi retail food & beverage yang mengutamakan kecepatan pemesanan (frictionless checkout). Mengintegrasikan PassKit (Apple Pay) untuk pembayaran super cepat, MapKit untuk visualisasi gerai terdekat, dan push notification via APNs untuk status pesanan kopi secara langsung.",
      metrics: {
        downloads: "30K+",
        rating: "4.7 ★",
        crashFree: "99.85%"
      },
      techStack: ["SwiftUI", "PassKit (Apple Pay)", "MapKit", "CoreLocation", "APNs", "AlamoFire"],
      keyFeatures: [
        "One-tap checkout menggunakan Apple Pay (PassKit PKPaymentAuthorizationController).",
        "Pencarian toko kopi terdekat dengan geofencing CoreLocation.",
        "Katalog dinamis dengan filter varian biji kopi, roast level, dan susu alternatif.",
        "Live status pesanan dari brewing hingga siap diambil."
      ],
      technicalChallenges: [
        {
          problem: "Handling status kegagalan transaksi Apple Pay pada koneksi jaringan yang tidak stabil.",
          solution: "Menerapkan idempotency key pada backend handshake dan retry mechanism transparan pada layer networking."
        }
      ],
      links: {
        appStore: "https://apps.apple.com",
        github: "https://github.com",
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


