// src/lib/storage/mockData.ts
import { Project, TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";

export const SEED_BRIEF: TeachingBrief = {
  documentType: "bootcamp_module",
  topic: "Dasar Cybersecurity",
  audience: "Siswa SMK kelas 11",
  duration: "2 hari, 4 jam per hari",
  level: "beginner",
  finalOutcome: "Poster edukasi anti-phishing",
  languageStyle: "Bahasa Indonesia, santai, praktis",
  localContext: ["WhatsApp", "akun game", "email palsu", "marketplace"],
  constraints: ["Tidak terlalu teknis", "Banyak contoh nyata"]
};

export const SEED_BLUEPRINT: LearningBlueprint = {
  summary: "Bootcamp 2 hari untuk mengenalkan konsep dasar cybersecurity dan perlindungan diri dari kejahatan siber kepada siswa SMK kelas 11 secara santai, berfokus pada pencegahan phishing dan pembuatan materi kampanye keamanan.",
  learningObjectives: [
    "Menjelaskan konsep dasar cybersecurity dalam kehidupan sehari-hari.",
    "Mengidentifikasi contoh phishing pada WhatsApp, email, dan marketplace lokal.",
    "Menerapkan password hygiene (keamanan kata sandi) pada akun pribadi.",
    "Menjelaskan manfaat Multi-Factor Authentication (MFA).",
    "Membuat poster edukasi anti-phishing sebagai hasil karya akhir."
  ],
  prerequisites: [
    "Mampu menggunakan smartphone atau laptop dasar.",
    "Memiliki setidaknya satu akun media sosial atau email pribadi."
  ],
  sessionPlan: [
    {
      sessionTitle: "Hari 1: Fondasi Keamanan Siber & Deteksi Phishing",
      duration: "4 Jam",
      objectives: [
        "Menjelaskan konsep dasar cybersecurity dalam kehidupan sehari-hari.",
        "Mengidentifikasi contoh phishing pada WhatsApp, email, dan marketplace lokal."
      ],
      activities: [
        "Sesi Interaktif: Apa itu Cybersecurity dan Mengapa Kita Jadi Target?",
        "Analisis Studi Kasus: Penipuan kurir paket di WhatsApp dan link palsu hadiah shopee/game gratis.",
        "Aktivitas Kelompok: Membedakan pesan asli vs pesan palsu (phishing).",
        "Refleksi & Pengumpulan Draf Checklist Pendeteksi Phishing."
      ],
      outputs: [
        "Lembar draf checklist tanda-tanda phishing buatan kelompok."
      ]
    },
    {
      sessionTitle: "Hari 2: Password Hygiene, MFA, & Kampanye Anti-Phishing",
      duration: "4 Jam",
      objectives: [
        "Menerapkan password hygiene (keamanan kata sandi) pada akun pribadi.",
        "Menjelaskan manfaat Multi-Factor Authentication (MFA).",
        "Membuat poster edukasi anti-phishing sebagai hasil karya akhir."
      ],
      activities: [
        "Simulasi & Demo: Cara hacker menebak password menggunakan taktik brute-force sederhana.",
        "Hands-on: Membuat password yang kuat menggunakan frasa unik dan mengaktifkan MFA di akun masing-masing.",
        "Workshop Kreatif: Merancang dan membuat poster kampanye anti-phishing di Canva atau kertas gambar.",
        "Showcase & Penilaian: Presentasi poster kelompok dan kuis akhir program."
      ],
      outputs: [
        "Poster kampanye edukasi anti-phishing siap pakai dan dipublikasikan."
      ]
    }
  ],
  assessmentPlan: [
    "Kuis pilihan ganda berisi 5 soal evaluasi pemahaman teori di akhir Hari ke-2.",
    "Rubrik penilaian poster kelompok untuk mengukur kejelasan pesan, aspek visual, dan relevansi konteks lokal."
  ],
  finalProject: {
    title: "Poster Kampanye Edukasi Anti-Phishing",
    description: "Peserta secara berkelompok membuat poster edukatif 1 halaman yang mudah dipahami oleh orang awam (seperti orang tua atau adik kelas) tentang bahaya phishing dan cara menghindarinya.",
    deliverables: [
      "File ekspor poster digital (PNG/PDF) atau foto poster fisik buatan tangan."
    ],
    criteria: [
      "Kejelasan pesan utama (mudah dipahami orang awam)",
      "Penggunaan contoh lokal (WhatsApp, marketplace, game)",
      "Visual yang menarik dan rapi",
      "Adanya seruan aksi/ajakan bertindak (Call to Action)"
    ]
  }
};

export const SEED_DOCUMENT_PACK: DocumentPack = {
  studentModule: `# Modul Peserta: Dasar Keamanan Siber & Deteksi Phishing

Selamat datang di Modul **Dasar Keamanan Siber**! Modul ini dirancang khusus untuk membantumu mengenali bahaya digital yang mengintai di kehidupan sehari-hari, serta melatih langkah-langkah praktis untuk melindungi akun pribadimu.

---

## 1. Apa Itu Keamanan Siber (Cybersecurity) di Keseharian Kita?

Bayangkan akun WhatsApp, Instagram, TikTok, atau akun game kesayanganmu seperti kamar kos pribadi. Jika pintu kamar tidak pernah dikunci, atau kamu meninggalkan kuncinya di meja kantin sekolah, siapapun bisa masuk dan mencuri barang-barang berharga di dalamnya.

Di dunia digital, **Keamanan Siber (Cybersecurity)** adalah segala upaya kita untuk memasang gembok pada pintu kamar tersebut. Ini adalah pertahanan agar data pribadi (foto, chat, dokumen), uang digital (e-wallet seperti GoPay, ShopeePay), dan identitas online milik kita aman dari pencurian dan penyalahgunaan.

---

## 2. Mengenal Phishing: Jeratan Umpan Digital

Salah satu serangan siber yang paling sering memakan korban di Indonesia adalah **Phishing**. 

> **Definisi Phishing:**
> Istilah ini berasal dari kata *fishing* (memancing). Phishing adalah upaya penipuan di mana pelaku berpura-pura menjadi institusi resmi atau orang terdekat untuk mengelabui korban agar memberikan informasi rahasia secara sukarela, seperti kata sandi, PIN, nomor kartu ATM, atau kode OTP (One-Time Password).

### Jenis & Contoh Phishing Populer di Indonesia:

| Vektor / Media | Deskripsi Taktik Penipuan | Indikator Bahaya (Red Flags) |
| :--- | :--- | :--- |
| **WhatsApp Kurir APK** | Pelaku mengirim file dengan nama \`.APK\` berkedok "Foto Paket" atau "Resi J&T". | Ekstensi file adalah \`.apk\` (bukan \`.jpg\` atau \`.pdf\`), ukuran file beberapa MB. |
| **Undangan Nikah APK** | Mengirim undangan pernikahan palsu berformat APK untuk memicu penasaran korban. | Meminta instalasi manual di luar Google Play Store. |
| **Link Hadiah Shopee** | Tautan undian berhadiah palsu yang mengarah ke form login tiruan. | URL menggunakan domain gratisan atau aneh (contoh: \`.blogspot.com\`, \`.xyz\`, \`.gift\`). |
| **Phishing Diamond Game** | Halaman web palsu yang menjanjikan Diamond Mobile Legends gratis. | Meminta memasukkan email, password akun game, dan kode OTP verifikasi. |

---

## 3. Cara Kerja APK Phishing (Pencurian OTP SMS)

Bagaimana chat kurir palsu di WhatsApp bisa menguras habis rekening bank atau saldo e-wallet korban? Mari kita lihat visualisasi berikut:

\`\`\`mermaid
graph TD
    A["1. Pelaku mengirim chat + file APK palsu"] --> B["2. Korban terpancing menginstal file APK"]
    B --> C["3. Aplikasi meminta izin membaca SMS (READ_SMS)"]
    C --> D["4. Korban memberikan izin akses tanpa curiga"]
    D --> E["5. Pelaku login ke mobile banking/e-wallet korban"]
    E --> F["6. SMS OTP masuk ke HP korban, dibaca otomatis oleh malware"]
    F --> G["7. Malware mengirim OTP ke server pelaku"]
    G --> H["8. Pelaku menguras saldo e-wallet korban"]
\`\`\`

Ketika kamu memberikan izin **"Baca SMS"** (*READ_SMS*) pada aplikasi palsu tersebut, kamu secara tidak langsung memberikan kunci brankasmu ke peretas. Setiap kali ada kode OTP perbankan masuk via SMS, malware akan langsung meneruskannya ke peretas secara otomatis.

---

## 4. Langkah Praktis Melindungi Akun Pribadi

### A. Terapkan Password Hygiene (Keamanan Kata Sandi)
1. **Jangan gunakan tanggal lahir atau nama:** Password seperti \`budi2007\` sangat mudah ditebak peretas dalam waktu kurang dari 1 detik.
2. **Gunakan metode Passphrase:** Kombinasikan 3-4 kata acak yang mudah kamu ingat tetapi sulit ditebak sistem. 
   - *Contoh Kuat:* \`MakanSateKambingDiSolo@2026!\`
3. **Satu Akun, Satu Password:** Jangan samakan password Instagram dengan password email utama atau akun sekolahmu. Jika satu akun bocor, akun lainnya tetap aman.

### B. Aktifkan Multi-Factor Authentication (MFA)
MFA adalah keamanan berlapis. Selain password (sesuatu yang kamu tahu), kamu membutuhkan kunci verifikasi tambahan (sesuatu yang kamu miliki).
- **Verifikasi Dua Langkah WhatsApp:** Buka **Setelan > Akun > Verifikasi Dua Langkah**. Buat PIN 6 digit yang wajib dimasukkan secara berkala. Ini mencegah pembajakan nomor meskipun OTP SMS-mu dicuri.

---

## Lembar Refleksi Mandiri:
- [ ] Apakah saya sudah mengaktifkan Verifikasi Dua Langkah di WhatsApp?
- [ ] Apakah password e-mail utama saya berbeda dengan password akun media sosial?
- [ ] Apakah saya langsung menghapus file berakhiran \`.apk\` yang dikirim via chat?
- [ ] Apakah saya terbiasa memeriksa ulang nama domain situs sebelum mengetikkan password?

*Keamanan digital dimulai dari dirimu sendiri! Waspada sebelum klik.*
`,
  facilitatorGuide: `# Panduan Fasilitator: Rencana Pelaksanaan Pelatihan Keamanan Siber

Panduan ini disusun untuk membantu guru atau fasilitator menyelenggarakan workshop interaktif Keamanan Siber bagi siswa SMK kelas 11 secara menarik dan praktis.

---

## 📑 Ringkasan Kegiatan
- **Durasi Total:** 2 Hari (4 Jam/Hari, total 8 Jam)
- **Metode:** Ceramah interaktif, bedah kasus nyata, kerja kelompok, dan workshop pembuatan poster kampanye di Canva.
- **Kunci Keberhasilan:** Gunakan analogi sehari-hari dan hindari istilah teknis jaringan komputer yang rumit di awal sesi.

---

## 🛠️ Persiapan & Alat Bantu
1. **Bahan Studi Kasus:** Screenshot chat WhatsApp kurir APK palsu, undangan pernikahan palsu, dan website phishing game online.
2. **Alat Pendukung:** Proyektor, laptop per kelompok, kertas karton besar (jika Canva tidak tersedia), spidol warna, dan stiker.
3. **Instalasi:** Pastikan koneksi internet lancar agar siswa dapat mengakses Canva untuk merancang poster.

---

## 📅 Rencana Pembelajaran Detail

### HARI 1: Mengenal Serangan Rekayasa Sosial & Phishing (4 Jam)

#### Sesi 1: Pembuka & Analogi Kehidupan Nyata (60 Menit)
- **Aktivitas:** 
  1. Mulai dengan pertanyaan pemantik: *"Siapa di sini yang akun game-nya pernah di-hack?"* atau *"Apakah orang tua kalian pernah mendapat SMS undian palsu?"*
  2. Jelaskan konsep keamanan siber dengan analogi **"Kunci Kamar Kos"**.
- **Pedagogi:** Hubungkan pentingnya keamanan siber langsung dengan risiko kehilangan uang digital dan akun pribadi mereka sendiri agar siswa termotivasi mendengarkan.

#### Sesi 2: Bedah Kasus Phishing & Simulasi APK (90 Menit)
- **Aktivitas:**
  1. Bagikan LKPD (Lembar Kerja) berisi gambar chat kurir palsu.
  2. Minta perwakilan kelompok mempresentasikan di depan kelas: *Bagaimana cara membedakan file dokumen asli dengan file instalasi APK palsu?*
  3. Jelaskan alur penipuan OTP dengan diagram alur di papan tulis.
- **Tips Fasilitasi:** Ingatkan siswa secara tegas bahwa **instansi resmi seperti Bank atau Kurir Ekspedition tidak akan pernah mengirimkan file berakhiran .APK via WhatsApp.**

#### Sesi 3: Diskusi Kelompok & Rancangan Aturan Emas (90 Menit)
- **Aktivitas:** Setiap kelompok menyusun "3 Aturan Emas Deteksi Dini Phishing". Hasil tulisan ditempel di dinding kelas untuk dibaca kelompok lain (metode *Gallery Walk*).

---

### HARI 2: Keamanan Sandi, MFA, & Pembuatan Poster Kampanye (4 Jam)

#### Sesi 1: Praktik Membuat Sandi Kuat & MFA (90 Menit)
- **Aktivitas:** 
  1. Demo interaktif: Tulis password \`rahasia123\` di web pengecek kekuatan sandi untuk menunjukkan betapa cepatnya ia diretas.
  2. Bimbing seluruh siswa mempraktikkan metode **Passphrase** dan langsung mengaktifkan verifikasi 2 langkah di WhatsApp mereka masing-masing saat itu juga.

#### Sesi 2: Workshop Kreatif Pembuatan Poster Kampanye (120 Menit)
- **Aktivitas:** Siswa merancang poster kampanye anti-phishing di Canva. Tema poster harus ditargetkan untuk kelompok rentan (seperti orang tua atau adik kelas).
- **Kriteria Poster:** Harus memuat contoh kasus lokal (misal: WhatsApp kurir), tips pencegahan, dan seruan aksi yang jelas (Call to Action).

#### Sesi 3: Showcase & Kuis Penutup (30 Menit)
- **Aktivitas:** Presentasi kilat poster (2 menit per kelompok), dilanjutkan dengan pengisian kuis objektif sebanyak 5 soal.
`,
  worksheet: `# Lembar Kerja Peserta Didik (LKPD): Detektif Keamanan Siber

**Nama Anggota Kelompok:**
1. \`________________________\`
2. \`________________________\`
3. \`________________________\`

---

## 🔍 Aktivitas 1: Menganalisis Pesan WhatsApp Mencurigakan

Perhatikan baik-baik dua tangkapan layar (screenshot) teks chat di bawah ini, lalu diskusikan dalam kelompokmu untuk mengidentifikasi kejanggalannya.

### 🛑 KASUS A: Pesan dari Kurir Paket
> *"Selamat siang Kak, saya kurir Shopee Express. Paket dengan nomor resi SPX99321 sudah sampai di area Anda, tetapi alamat rumah tidak lengkap. Tolong cek foto paket di bawah ini untuk memastikan apakah benar ini milik Kakak, lalu instal aplikasinya ya untuk update alamat. Terima kasih."*
> 
> **📎 Lampiran File: Foto_Paket_Spx.apk (Ukuran: 5.2 MB)**

### 🛑 KASUS B: Tautan Hadiah Undian
> *"INFO RESMI BANK MANDIRI: Selamat! Rekening Anda terpilih mendapatkan subsidi tunai Rp2.500.000 dalam rangka HUT Bank Mandiri ke-27. Silakan lakukan klaim data penerima bantuan melalui portal resmi berikut: www.bankmandiri-subsidi-promo.my.id/login"*

---

## 📝 Lembar Jawaban Diskusi:

1. **Analisis Kasus A (Kurir Paket):**
   - Apakah pesan ini aman dibuka? (Ya / Tidak): \`______________\`
   - Tuliskan 2 kejanggalan utama pada lampiran file di atas!
     1. Kejanggalan 1: \`__________________________________________________\`
     2. Kejanggalan 2: \`__________________________________________________\`

2. **Analisis Kasus B (Tautan Bank):**
   - Mengapa alamat website tersebut dinilai sangat mencurigakan dan bukan website resmi Bank Mandiri? Jelaskan analisis kelompokmu pada bagian nama domain!
     - *Analisis:* \`________________________________________________________________________________________\`

3. **Aturan Emas Kelompok (Golden Rules):**
   Susunlah 3 aturan wajib kelompokmu sebelum membuka tautan atau file dari nomor asing di WhatsApp!
   - *Aturan 1:* \`__________________________________________________\`
   - *Aturan 2:* \`__________________________________________________\`
   - *Aturan 3:* \`__________________________________________________\`
`,
  quiz: [
    {
      question: "Apakah yang dimaksud dengan phishing dalam konteks cybersecurity?",
      type: "multiple_choice",
      options: [
        "Metode merusak hardware komputer menggunakan virus",
        "Upaya penipuan memancing korban untuk memberikan data sensitif (password/OTP) dengan berpura-pura menjadi lembaga resmi",
        "Tindakan mengamankan database dari serangan luar menggunakan enkripsi",
        "Mengirim email secara massal untuk tujuan iklan promosi produk baru"
      ],
      answer: "Upaya penipuan memancing korban untuk memberikan data sensitif (password/OTP) dengan berpura-pura menjadi lembaga resmi",
      explanation: "Phishing berasal dari analogi 'memancing' korban. Tujuannya adalah mengelabui korban agar menyerahkan kunci keamanan (seperti password, pin, OTP) secara sukarela.",
      difficulty: "basic"
    },
    {
      question: "Jika kamu menerima file dengan ekstensi '.apk' dari kurir di WhatsApp padahal kamu tidak memesan apa-apa, tindakan terbaik adalah...",
      type: "multiple_choice",
      options: [
        "Langsung menginstal file tersebut karena penasaran isi paketnya",
        "Meneruskan (forward) pesan tersebut ke teman sekelas untuk bertanya",
        "Mengabaikan atau menghapus pesan tersebut serta memblokir nomor pengirimnya",
        "Mengganti ekstensi file menjadi .pdf agar aman dibuka"
      ],
      answer: "Mengabaikan atau menghapus pesan tersebut serta memblokir nomor pengirimnya",
      explanation: "File .apk di WhatsApp dari nomor tak dikenal sering kali merupakan malware pencuri data OTP SMS. Jangan pernah menginstalnya.",
      difficulty: "standard"
    },
    {
      question: "Manakah di bawah ini contoh pembuatan kata sandi (password) yang memenuhi asas password hygiene yang baik?",
      type: "multiple_choice",
      options: [
        "Admin123 (Mudah diingat)",
        "Budi21Mei2010 (Memakai nama dan tanggal lahir lengkap)",
        "MakanBaksoPedasSekali@2026 (Kombinasi kalimat panjang, simbol, angka, dan unik)",
        "12345678 (Standar keamanan internasional)"
      ],
      answer: "MakanBaksoPedasSekali@2026 (Kombinasi kalimat panjang, simbol, angka, dan unik)",
      explanation: "Password yang baik sebaiknya berbentuk frasa (passphrase) yang panjang, mengandung karakter unik/angka/simbol, serta tidak terikat data pribadi.",
      difficulty: "basic"
    },
    {
      question: "Apa fungsi utama dari mengaktifkan Multi-Factor Authentication (MFA) di akun WhatsApp atau Instagram?",
      type: "multiple_choice",
      options: [
        "Mempercepat waktu loading aplikasi saat digunakan di tempat sepi",
        "Menghemat penggunaan kuota internet data seluler saat mengunggah foto",
        "Menambahkan lapisan keamanan kedua sehingga akun tetap aman meskipun password utama bocor",
        "Mencegah iklan masuk ke dalam kolom obrolan obrolan pribadi kita"
      ],
      answer: "Menambahkan lapisan keamanan kedua sehingga akun tetap aman meskipun password utama bocor",
      explanation: "Dengan MFA, login baru membutuhkan verifikasi lapis kedua (kode OTP/Authenticator), sehingga peretas yang memegang password Anda tetap tidak bisa masuk.",
      difficulty: "standard"
    },
    {
      question: "Sebuah link undian berhadiah bertuliskan 'www.bank-lokal-undian-indonesia.blogspot.com'. Mengapa tautan ini dikategorikan mencurigakan?",
      type: "multiple_choice",
      options: [
        "Karena tidak memiliki ikon gambar bank",
        "Karena menggunakan domain blog gratisan (blogspot.com) untuk mengatasnamakan bank resmi",
        "Karena tidak diawali dengan huruf kapital",
        "Karena link tersebut terlalu pendek untuk dibaca"
      ],
      answer: "Karena menggunakan domain blog gratisan (blogspot.com) untuk mengatasnamakan bank resmi",
      explanation: "Institusi resmi (khususnya bank) selalu menggunakan domain khusus berbayar yang resmi (seperti .co.id atau .com perusahaan), bukan domain gratisan.",
      difficulty: "standard"
    }
  ],
  rubric: [
    {
      criterion: "Kejelasan Informasi & Pesan",
      excellent: "Informasi cara mendeteksi dan mencegah phishing sangat jelas, logis, mudah dimengerti orang awam, dan tidak bertele-tele.",
      good: "Informasi cukup lengkap, namun terdapat 1-2 bagian teori yang masih membingungkan bagi orang awam.",
      needsImprovement: "Informasi tidak lengkap, membingungkan, atau ada teori yang salah dalam mendeteksi ancaman.",
      weight: 40
    },
    {
      criterion: "Relevansi Konteks Lokal",
      excellent: "Menggunakan contoh phishing yang sangat kontekstual dengan kehidupan siswa (misal: kurir paket WhatsApp, diamond game, Shopee).",
      good: "Menggunakan contoh penipuan umum, namun kurang dekat dengan keseharian target siswa SMK.",
      needsImprovement: "Tidak menyertakan contoh lokal sama sekali, contoh bersifat sangat teoretis luar negeri.",
      weight: 30
    },
    {
      criterion: "Visual & Call to Action (CTA)",
      excellent: "Tata letak poster sangat rapi, kombinasi warna serasi, tulisan terbaca jelas, dan ada seruan aksi preventif yang persuasif.",
      good: "Visual cukup menarik, tetapi ukuran tulisan kurang proporsional atau kalimat ajakan kurang membekas.",
      needsImprovement: "Poster berantakan, tulisan sulit dibaca, dan tidak ada kalimat ajakan bertindak (CTA).",
      weight: 30
    }
  ]
};

export const SEED_MOCK_BASIC_MODULE = `# Modul Peserta (Versi Sederhana): Dasar Cybersecurity

Modul ini dibuat khusus untuk mempermudah kamu memahami keamanan internet dengan menggunakan bahasa yang simpel dan banyak contoh perumpamaan sederhana.

---

## 1. Analogi Kunci Kamar
Bayangkan akun internet kamu seperti kamar kos pribadi kamu. Jika pintu kamarmu tidak dikunci, atau kamu meninggalkan kuncinya di meja kantin, tentu pencuri bisa masuk dan mengambil barang berhargamu, bukan?
Di internet, **keamanan siber (cybersecurity)** adalah cara kita belajar memasang gembok pintu kamar kita sendiri agar foto, data pribadi, dan akun kita tidak dicuri.

---

## 2. Mengenal Penipuan Online (Phishing / Umpan Pancing)
Pernahkah kamu melihat ada orang memancing ikan? Mereka memasang cacing di kail agar ikan tertipu dan mau memakannya.
Di dunia internet, ini disebut **phishing**. Penjahat memasang "umpan palsu" di WhatsApp atau SMS agar kita terjebak memberikan kata sandi (password).

### Umpan yang Sering Dipakai:
- **Chat Kurir**: Mengirim file \`.APK\` lewat WhatsApp. Katanya itu foto paket kamu. Jika kamu klik dan instal, dia akan mengambil kode rahasia SMS kamu secara diam-diam!
- **Link Hadiah Gratis**: Link web palsu yang bilang kamu menang undian. Kamu disuruh login ke situ. Jika kamu lakukan, password kamu akan dicuri pelaku.

---

## 3. Cara Mudah Aman di Internet
1. **Buat Password Panjang**: Jangan pakai tanggal lahir. Pakai kalimat biasa saja yang panjang, contoh: \`sayaSukaMakanSateKambing@2026\`. Ini sangat sulit ditebak orang lain tapi gampang kamu ingat.
2. **Aktifkan Kunci Tambahan (MFA/Verifikasi 2 Langkah)**: Aktifkan fitur verifikasi 2 langkah di WhatsApp kamu. Dengan begitu, sekalipun orang lain tahu password kamu, mereka tetap tidak bisa masuk tanpa kode tambahan yang dikirim ke HP-mu.
`;

export const SEED_MOCK_ADVANCED_MODULE = `# Modul Peserta (Versi Lanjutan): Dasar Cybersecurity & Analisis Vektor Serangan siber

Modul tingkat lanjut ini ditujukan bagi siswa yang ingin mendalami mekanisme teknis serangan rekayasa sosial (*Social Engineering*) dan mitigasi risiko siber tingkat organisasi.

---

## 1. Keamanan Siber & Lanskap Ancaman Modern
Dalam era modern, perimeter keamanan tidak lagi terbatas pada firewall jaringan. Serangan siber paling mematikan sering kali menyasar celah paling rentan di setiap sistem: **manusia** (*the human firewall*). 

Rekayasa sosial (*Social Engineering*) adalah manipulasi psikologis korban untuk membocorkan kredensial atau informasi rahasia.

---

## 2. Bedah Teknis Vektor Serangan Phishing
Serangan phishing modern menggunakan teknik yang presisi untuk menduplikasi identitas.

### Mekanisme Serangan APK Phishing (Spyware):
1. **Pengiriman Payload**: Penyerang mendistribusikan payload berbahaya berformat Android Package (\`.APK\`) yang disamarkan menggunakan ekstensi ganda atau nama paket manipulatif (e.g. \`Lihat_Resi_Paket.pdf.apk\`).
2. **Eksploitasi Izin (Permissions)**: Setelah diinstal, aplikasi meminta izin akses krusial, khususnya \`READ_SMS\` dan \`RECEIVE_SMS\`.
3. **Penyusupan OTP**: Saat korban melakukan transaksi keuangan atau login akun, payload mencegat pesan SMS masuk yang berisi OTP (One-Time Password) dan mentransmisikannya ke server Command and Control (C2) milik penyerang.

### Analisis Domain Tiruan:
Pelaku sering menggunakan teknik *Typosquatting* (mendaftarkan domain mirip domain asli, seperti \`sh0pee.co-id.secure\`) atau menggunakan subdomain pada platform hosting gratis untuk memanipulasi kredensial SSL (HTTPS).

---

## 3. Strategi Defensif Tingkat Lanjut
Untuk mengamankan akun dan infrastruktur:
1. **Password Entropy & Management**: Menggunakan entropy kata sandi yang tinggi (di atas 80 bit) dan menerapkan sistem penyimpanan terenkripsi zero-knowledge (Password Manager).
2. **U2F / FIDO2 Security Keys**: Meninggalkan SMS-based MFA dan beralih ke verifikasi berbasis hardware (seperti YubiKey) atau aplikasi Authenticator berbasis TOTP (Time-Based One-Time Password) untuk mencegah serangan Man-in-the-Middle (MitM) phishing.
`;

export const SEED_QA_REPORT: QAReport = {
  score: 96,
  summary: "Secara keseluruhan dokumen pembelajaran ini sudah luar biasa lengkap, selaras secara pedagogis, memiliki visualisasi diagram alir Alur APK Phishing yang sangat membantu pemahaman siswa, serta latihan kontekstual yang mendalam.",
  strengths: [
    "Diagram alir ancaman APK sangat mempermudah pemahaman kognitif siswa.",
    "Tingkat relevansi konteks lokal (WhatsApp, Shopee, Mandiri) sangat tinggi.",
    "Pembagian waktu (schedule) dan tips pelaksanaan di panduan guru sangat rinci."
  ],
  issues: []
};

// Memory store for user projects in simulation/mock mode
export interface ProjectStore {
  projects: Record<string, Project>;
}

const GLOBAL_PROJECTS: Record<string, Project> = {};

// Helper to seed a initial project for demonstration
export const seedSampleProject = (): Project => {
  const sampleId = "demo-cybersecurity";
  const project: Project = {
    id: sampleId,
    title: "Dasar Cybersecurity untuk SMK",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "qa_ready",
    brief: SEED_BRIEF,
    blueprint: SEED_BLUEPRINT,
    documentPack: SEED_DOCUMENT_PACK,
    qaReport: SEED_QA_REPORT,
    isDemo: true
  };
  GLOBAL_PROJECTS[sampleId] = project;
  return project;
};
