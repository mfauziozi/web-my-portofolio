#  Portofolio iOS Developer - Apple Dark Theme Edition

Website portofolio modern yang dirancang khusus untuk **iOS Developer & Swift Specialist** dengan estetika **Dark Theme bergaya Apple (WWDC & iOS Pro)** yang elegan, nyaman di mata (anti-silau), dan responsif di semua perangkat.

---

## ✨ Fitur Utama

- **Apple Pro Dark Mode**: Palet warna charcoal obsidian yang sejuk, efek frosted glass (*glassmorphism*), dan border titanium halus.
- **Interactive iPhone 16 Pro Mockup**: Bingkai iPhone realistis dengan Dynamic Island, refleksi layar, dan tombol fisik untuk menampilkan screenshot aplikasi secara hidup.
- **Showcase Aplikasi & Fitur Upload Foto**:
  - Filter kategori aplikasi (FinTech, Health, Productivity, E-Commerce).
  - Modal detail lengkap: Arsitektur sistem (MVVM, Clean Architecture, TCA), tantangan rekayasa kode, metrik performa (*Crash-Free rate*, *Rating*, *Downloads*), dan galeri tangkapan layar.
  - **Studio Uji Coba Upload Foto**: Anda dapat menarik foto screenshot dari Mac langsung ke browser untuk melihat previewnya secara instan di dalam mockup iPhone.
- **Keahlian & Ekosistem Apple**: Pengelompokan keahlian mencakup Swift, SwiftUI, UIKit, Combine, Concurrency, SwiftData, Instruments, dan Fastlane.
- **Timeline Riwayat Karier**: Rekam jejak pengalaman kerja dengan capaian kuantitatif.
- **Zero-Dependency**: Dibangun menggunakan teknologi web murni (HTML5, Tailwind CSS, Lucide Icons, Vanilla JS) tanpa perlu kompilasi atau instalasi yang rumit.

---

## 🚀 Cara Menjalankan Portofolio di Mac Anda

Ada dua cara mudah untuk membuka website ini:

### Cara 1: Langsung Klik Ganda (Paling Cepat)
1. Buka folder `WebPortofolio` di Finder Mac Anda.
2. Klik ganda file **`index.html`**. Website akan langsung terbuka di browser Safari atau Chrome Anda!

### Cara 2: Menggunakan Server Lokal Python (Direkomendasikan)
Buka aplikasi **Terminal** di Mac Anda, lalu jalankan:
```bash
cd /Users/mfauzi/Documents/Web/WebPortofolio
python3 -m http.server 8080
```
Buka browser dan akses alamat: `http://localhost:8080`

---

## 📸 Panduan Menambahkan / Mengganti Foto Screenshot Aplikasi

### Cara A: Uji Coba Langsung di Browser (Live Preview)
1. Buka website portofolio Anda.
2. Klik tombol **"Uji Upload Foto"** di pojok kanan atas atau pada kartu aplikasi mana pun.
3. Tarik (drag & drop) gambar screenshot aplikasi Anda (format `.png`, `.jpg`, `.webp`) ke area yang disediakan.
4. Anda akan langsung melihat screenshot Anda tampil di dalam bingkai iPhone secara instan!

### Cara B: Menyimpan Foto Secara Permanen
1. Simpan file foto tangkapan layar aplikasi Anda ke dalam folder:
   ```
   WebPortofolio/assets/images/projects/
   ```
   *Contoh: `my-fintech-screen.png`*
2. Buka file **`js/data.js`** menggunakan teks editor favorit Anda (VS Code, Xcode, atau TextEdit).
3. Cari proyek yang ingin Anda ubah, lalu sesuaikan bagian `thumbnail` dan `screenshots`:
   ```javascript
   {
     id: "kriptopay",
     title: "Nama Aplikasi Anda",
     thumbnail: "assets/images/projects/my-fintech-screen.png",
     screenshots: [
       "assets/images/projects/my-fintech-screen.png",
       "assets/images/projects/my-fintech-screen-2.png"
     ],
     // ...
   }
   ```
4. Simpan file `js/data.js` dan refresh browser Anda. Selesai!

---

## 👤 Cara Mengubah Data Diri, Keahlian, & Kontak

Semua teks, profil, keahlian, dan tautan sosial tersimpan secara rapi di file **`js/data.js`**:

- **Informasi Pribadi & Kontak**: Ubah properti `profile` (nama, gelar, bio, email, tautan GitHub, LinkedIn, dan profil App Store).
- **Keahlian (Skills)**: Tambah atau edit framework pada array `skills`.
- **Pengalaman Kerja**: Ubah riwayat posisi dan pencapaian pada array `experiences`.

---

## 🌐 Cara Menayangkan Website Secara Online (Gratis)

### Opsi 1: GitHub Pages
1. Buat repository baru di akun GitHub Anda (misalnya: `ios-portfolio`).
2. Upload semua file dari folder `WebPortofolio` ini ke repository tersebut.
3. Masuk ke tab **Settings** di GitHub > **Pages** > pilih branch `main` sebagai sumber > Klik **Save**.
4. Website Anda akan langsung aktif secara publik dalam hitungan menit di `https://username.github.io/ios-portfolio/`!

### Opsi 2: Vercel / Netlify
1. Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
2. Tarik folder `WebPortofolio` ke dashboard mereka (drag-and-drop deploy).
3. Website akan langsung online dengan domain gratis dan SSL HTTPS otomatis.

---

*Dibuat khusus untuk pengembang iOS dengan standar visual Apple Human Interface Guidelines.*

