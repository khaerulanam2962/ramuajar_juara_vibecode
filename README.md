# RamuAjar AI 🎓✨

**RamuAjar AI** adalah platform rancang bahan ajar cerdas (berbasis AI Generatif) yang dirancang khusus untuk mempermudah guru, fasilitator, dan pengajar dalam menyusun silabus, modul peserta, panduan pengajar, hingga kuis dan rubrik penilaian hanya dalam hitungan menit.

Aplikasi ini mendemonstrasikan implementasi **Gemini AI** dengan fokus pada **Validasi Kualitas Pedagogis** dan pembentukan materi yang dinamis, disajikan secara elegan menggunakan desain antarmuka yang modern, responsif, dan siap cetak.

---

## 🎯 Value Proposition (Mengapa RamuAjar?)

1. **Efisiensi Waktu Ekstrem:** Mengubah ide pengajaran satu kalimat menjadi *Teaching Brief*, meracik *Blueprint* (silabus), dan memecahnya menjadi dokumen-dokumen spesifik secara otomatis.
2. **Pedagogical QA Engine:** Tidak sekadar *generate* teks, RamuAjar memiliki tahap peninjauan (Quality Assurance) yang menilik kesesuaian materi dengan audiens dan durasi, bahkan memberikan saran *Auto-Fix*.
3. **Ekosistem Terpadu (MVP):** Editor Markdown bawaan, pengaturan komponen kuis/rubrik visual, hingga sistem ekspor (Download `.md` dan Cetak PDF) berjalan mulus di klien.

---

## 🚀 Alur Demo (Demo Flow)

Untuk memahami potensi penuh dari RamuAjar, silakan ikuti alur skenario berikut:

1. **Eksplorasi Contoh Cepat (Read-Only)**
   - Di halaman utama, pilih proyek contoh (misal: "Cybersecurity Bootcamp" atau "Modul Biologi SMP").
   - Anda dapat menjelajahi *Blueprint*, Modul Siswa, Lembar Kerja, Kuis, hingga Laporan Kualitas tanpa harus memanggil API.
2. **Coba Langsung (Proyek Aktif)**
   - Klik **"Modul IPA SD: Siklus Air"** (Draft).
   - Perhatikan *Brief* yang sudah terisi. Klik tombol **Buat Rancangan Silabus** untuk mulai memanggil AI.
   - Setujui *Blueprint* yang dihasilkan, lalu klik **Buat Semua Dokumen Ajar**. AI akan menyusun *Modul*, *Panduan*, *Kuis*, *Lembar Kerja*, dll.
   - Lakukan **Cek Kualitas** dan amati bagaimana skor kesesuaian pedagogis dihitung beserta umpan baliknya.
3. **Penyelesaian & Ekspor**
   - Masuk ke tab Unduh Hasil. Anda bisa mengunduh modul dalam format `.md` atau langsung menggunakan fungsi **Cetak PDF**.

---

## 💻 Panduan Instalasi (Setup & Run)

> **PENTING:** Proyek ini dibangun menggunakan **Next.js 15+** dan fitur-fitur mutakhir yang membutuhkan **Node.js versi 20 atau lebih baru (Node 20+)**.

### 1. Kloning & Persiapan
Buka terminal dan *clone* repositori ini, lalu masuk ke foldernya:
```bash
git clone <repository_url>
cd ramuajar_juara_vibecode
```

### 2. Instalasi Dependensi
Jalankan perintah ini untuk menginstal semua *library* (termasuk Next.js, Lucide Icons, dan Zod):
```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan (API Key)
Buat sebuah berkas `.env.local` di root folder proyek Anda.
Isikan kunci API Gemini Anda sebagai berikut:
```env
GEMINI_API_KEY=AIzaSyB-contoh-kunci-api-anda...
```
*(Catatan: Aplikasi juga mengizinkan *override* API Key di browser melalui ikon roda gigi di Beranda, namun hal ini hanya diperuntukkan untuk pengujian demo mandiri di localhost)*.

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```

Aplikasi siap diakses pada **[http://localhost:3000](http://localhost:3000)**. 

---

## 🛠️ Keputusan Arsitektur & Teknologi

Saat ini, aplikasi berjalan pada fase **MVP (Minimum Viable Product)** yang menitikberatkan pada kestabilan *workflow*:

- **Frontend & Backend (Monolith):** Next.js (App Router) + API Routes (Server-Side untuk pemanggilan Gemini API).
- **Validasi Terstruktur:** Memanfaatkan `zod` untuk memastikan *output* AI (Structured JSON) selalu akurat dan tidak menyebabkan eror di antarmuka.
- **Penyimpanan (Storage):** Untuk kecepatan MVP, seluruh status (*state*) proyek saat ini disimpan melalui `localStorage` di sisi klien. Sinkronisasi multi-perangkat (*Database eksternal*) serta *Auth* ditempatkan pada fase *roadmap* pasca-kompetisi demi menjaga ruang lingkup demonstrasi tetap bersih dan tepat sasaran.
- **Desain UI:** Vanilla CSS/TailwindCSS dengan ikon dari `lucide-react`.

---
*Dibuat untuk JuaraGCP / VibeCode Challenge.*
