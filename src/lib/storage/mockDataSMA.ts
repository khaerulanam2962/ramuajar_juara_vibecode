import { Project, TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";

export const SMA_BRIEF: TeachingBrief = {
  documentType: "school_module",
  topic: "Literasi & Manajemen Keuangan Pribadi",
  audience: "Siswa SMA Kelas 12",
  duration: "1 Sesi Workshop, 120 Menit",
  level: "intermediate",
  finalOutcome: "Rencana anggaran (budgeting) pribadi",
  languageStyle: "Bahasa Indonesia, profesional tapi asik, memotivasi",
  localContext: ["Pinjol (Pinjaman Online)", "Paylater", "Nongkrong di kafe", "Uang saku bulanan"],
  constraints: ["Gunakan aturan 50/30/20", "Jangan terlalu banyak rumus akuntansi rumit"]
};

export const SMA_BLUEPRINT: LearningBlueprint = {
  summary: "Workshop singkat untuk siswa SMA tingkat akhir yang bersiap lulus, memberikan bekal literasi keuangan untuk mengatur uang saku, mengenali bahaya gaya hidup konsumtif, dan menjauhi jeratan Pinjol.",
  learningObjectives: [
    "Membedakan antara kebutuhan (needs) dan keinginan (wants) dalam pengeluaran sehari-hari.",
    "Menyusun rencana anggaran pribadi menggunakan aturan 50/30/20 dengan benar.",
    "Mengidentifikasi ciri-ciri pinjaman online (Pinjol) ilegal dan bahaya penggunaan Paylater yang berlebihan.",
    "Menghitung proyeksi tabungan masa depan untuk mencapai tujuan keuangan jangka pendek."
  ],
  prerequisites: [
    "Memahami operasi hitung matematika dasar seperti persentase.",
    "Memiliki pemahaman dasar tentang konsep uang dan transaksi jual-beli."
  ],
  sessionPlan: [
    {
      sessionTitle: "Sesi 1: Kebutuhan vs Keinginan & Waspada FinTech Gelap",
      duration: "60 Menit",
      objectives: [
        "Menganalisis perbedaan kebutuhan primer dengan keinginan gaya hidup.",
        "Mengklasifikasikan pengeluaran pribadi berdasarkan skala prioritas.",
        "Menjelaskan risiko finansial dan hukum dari Pinjol ilegal dan Paylater."
      ],
      activities: [
        "Apersepsi & Ice Breaking (15 menit): Game interaktif 'Butuh atau Ingin?' menggunakan kartu gambar barang (misal: sepatu branded vs sepatu sekolah, kuota belajar vs skin game).",
        "Bedah Kasus Nyata (20 menit): Menyimak dan menganalisis cerita pemuda fiktif yang terjerat lingkaran hutang Paylater akibat gengsi FOMO (*Fear of Missing Out*) saat nongkrong.",
        "Pemaparan Edukasi Anti-Pinjol (15 menit): Menjelaskan cara kerja bunga harian Pinjol ilegal dan ancaman penyebaran data pribadi.",
        "Tanya Jawab & Diskusi Interaktif (10 menit): Mengapa anak muda sangat rentan terjebak dalam gaya hidup konsumtif."
      ],
      outputs: [
        "Daftar identifikasi pengeluaran pribadi terpilah antara kebutuhan dan keinginan.",
        "Mindmap tanda bahaya (red flags) Pinjol ilegal."
      ]
    },
    {
      sessionTitle: "Sesi 2: Menjinakkan Uang Saku dengan Aturan 50/30/20",
      duration: "60 Menit",
      objectives: [
        "Menerapkan metode 50/30/20 untuk mengelola uang saku bulanan sebesar Rp 1.000.000.",
        "Menyusun rencana keuangan mandiri berorientasi masa depan."
      ],
      activities: [
        "Pemaparan Konsep Budgeting (15 menit): Mengupas formula Senator Elizabeth Warren tentang pembagian 50% Kebutuhan, 30% Keinginan, dan 20% Tabungan.",
        "Praktik Mengisi LKPD Anggaran (25 menit): Setiap siswa mensimulasikan pembagian uang saku bulanan menggunakan template tabel yang disediakan.",
        "Showcase & Peer Review (15 menit): Siswa saling bertukar draf anggaran untuk diberikan masukan oleh rekan sebangku.",
        "Refleksi Akhir & Komitmen Keuangan (5 menit): Guru membagikan lembar komitmen finansial untuk ditandatangani siswa sebagai janji hidup hemat."
      ],
      outputs: [
        "Worksheet Rencana Anggaran Bulanan 50/30/20 individu.",
        "Kartu komitmen bebas hutang konsumtif."
      ]
    }
  ],
  assessmentPlan: [
    "Formatif: Keaktifan berdiskusi dan hasil pemilahan kartu 'Butuh vs Ingin'.",
    "Sumatif: Penilaian lembar kerja simulasi anggaran pribadi berdasarkan rubrik kelayakan finansial."
  ],
  finalProject: {
    title: "Dokumen Anggaran Keuangan Pribadiku",
    description: "Siswa secara individu membuat rencana pengalokasian anggaran keuangan bulanan menggunakan metode 50/30/20 berdasarkan simulasi pendapatan magang atau uang saku sebesar Rp 1.000.000, lengkap dengan target tabungan jangka pendek yang konkret.",
    deliverables: [
      "Lembar rencana anggaran tertulis/digital yang rapi, lengkap dengan rincian pengeluaran per kategori dan target tabungan."
    ],
    criteria: [
      "Ketepatan klasifikasi kebutuhan vs keinginan",
      "Akurasi perhitungan porsi persentase 50/30/20",
      "Realistis dan logisnya alokasi biaya pengeluaran sehari-hari",
      "Kejelasan rencana pencapaian target tabungan"
    ]
  }
};

export const SMA_DOCUMENT_PACK: DocumentPack = {
  studentModule: `# Modul Ekonomi: Cerdas Atur Uang Saku & Jauhi Jebakan Pinjol

Halo calon profesional muda! Lulus dari SMA adalah gerbang menuju kemandirian. Salah satu kemampuan paling penting yang harus kamu miliki agar sukses di dunia dewasa adalah **Literasi Keuangan**.

Banyak orang dewasa yang memiliki gaji besar tetapi tabungannya nol karena mereka tidak tahu cara membedakan antara kebutuhan hidup dengan gengsi sosial. Yuk, kita pelajari strategi cerdas mengelola uangmu sejak dini!

---

## 1. Aliran Dana Masuk & Pembagian Anggaran (Metode 50/30/20)
Sebelum membelanjakan uang saku, pastikan kamu membagi uang tersebut ke dalam 3 kantong utama secara disiplin begitu uang diterima.

\`\`\`mermaid
graph TD
    A["Pemasukan (Uang Saku/Gaji Magang) Rp 1.000.000"] --> B["50% Kebutuhan (Needs) - Rp 500.000"]
    A --> C["30% Keinginan (Wants) - Rp 300.000"]
    A --> D["20% Tabungan (Savings) - Rp 200.000"]
    
    B --> B1["Makan Pokok"]
    B --> B2["Transportasi / Bensin"]
    B --> B3["Kuota Belajar"]
    
    C --> C1["Nongkrong Kafe / Kopi"]
    C --> C2["Langganan Netflix/Spotify"]
    C --> C3["Top Up Game / Skin"]
    
    D --> D1["Dana Darurat"]
    D --> D2["Tabungan Laptop/HP Baru"]
\`\`\`

---

## 2. Kebutuhan (Needs) vs Keinginan (Wants): Skala Prioritas

Mari kita bedah perbedaan mendasar antara kedua pengeluaran ini:

*   **Kebutuhan (Needs):** Segala sesuatu yang mutlak harus dipenuhi agar kita tetap bisa beraktivitas dan bertahan hidup. Jika dihilangkan, akan timbul masalah serius dalam hidupmu.
*   **Keinginan (Wants):** Hal-hal yang kita harapkan ada untuk kepuasan pribadi, gaya hidup, atau agar terlihat keren (FOMO). Jika dihilangkan, kita tetap sehat dan selamat.

### 📊 Tabel Contoh Kategori Pengeluaran Remaja

| Aspek | Kebutuhan (Needs) - 50% | Keinginan (Wants) - 30% |
| :--- | :--- | :--- |
| **Definisi** | Harus ada untuk bertahan & bekerja. | Hanya pemuas hasrat/gaya hidup. |
| **Contoh 1** | Makan siang sederhana di kantin sekolah. | Kopi susu kekinian berlogo terkenal di mal. |
| **Contoh 2** | Kuota internet reguler untuk kirim tugas. | Kuota khusus game atau top-up skin karakter. |
| **Contoh 3** | Ongkos angkutan umum atau bensin motor. | Aksesoris modifikasi motor biar terlihat keren. |
| **Dampaknya** | Jika ditunda: Sakit mag, nilai turun, telat sekolah. | Jika ditunda: Sedikit kecewa, tapi hidup aman. |

---

## 3. Bahaya FinTech Gelap: Paylater & Pinjol Ilegal

Di era digital, berutang menjadi sangat mudah. Hanya butuh foto KTP, uang jutaan rupiah bisa langsung cair dalam 5 menit. Namun, kemudahan ini menyembunyikan jeratan yang mematikan bagi masa depanmu:

### ⚡ Dampak Negatif Paylater (Beli Sekarang, Bayar Nanti)
*   **Memicu Konsumtivisme:** Kamu dipaksa membeli barang yang sebenarnya tidak mampu kamu beli hari ini.
*   **Bunga & Denda Tersembunyi:** Bunga paylater jika diakumulasikan sangat besar, ditambah denda harian jika kamu telat membayar meskipun hanya 1 hari.

### 🔴 Red Flags (Tanda Bahaya) Pinjol Ilegal
1.  **Tidak Terdaftar OJK:** Tidak memiliki izin resmi dari Otoritas Jasa Keuangan.
2.  **Menyerap Data Kontak:** Meminta izin akses kontak HP, galeri foto, dan lokasi saat menginstal aplikasi. Data ini akan dipakai untuk meneror keluarga dan teman-temanmu jika kamu menunggak.
3.  **Bunga Mencekik:** Bunga harian bisa mencapai 1-2% per hari, membuat hutang 1 juta membengkak jadi 5 juta dalam hitungan bulan.

---

## 💡 Lembar Simulasi Anggaran Bulanan (Aturan 50/30/20)

Jika kamu memiliki uang saku **Rp 1.000.000** sebulan, inilah simulasi alokasi anggaran yang sehat:

1.  **Kantong Kebutuhan (50% = Rp 500.000):**
    *   Makan siang sekolah (20 hari x Rp 15.000) = Rp 300.000.
    *   Transportasi/bensin motor = Rp 100.000.
    *   Paket internet bulanan = Rp 100.000.
2.  **Kantong Keinginan (30% = Rp 300.000):**
    *   Nongkrong di kafe bersama teman = Rp 150.000.
    *   Beli skin game/hiburan = Rp 50.000.
    *   Tabungan belanja baju kaos = Rp 100.000.
3.  **Kantong Tabungan (20% = Rp 200.000):**
    *   Investasi masa depan / Dana darurat = Rp 200.000 (Langsung dipisahkan di awal bulan!).
`,
  facilitatorGuide: `# Panduan Fasilitator: Sukses Mengajar Literasi Keuangan SMA

Gunakan pendekatan yang berempati dan hindari menggurui. Ingat bahwa remaja usia 17-18 tahun sedang berada dalam fase pencarian jati diri yang sangat dipengaruhi oleh media sosial dan tekanan pergaulan teman sebaya (*peer pressure*).

---

## 📑 Rencana Pelaksanaan Pelatihan (Total 120 Menit)

### 1. Sesi Pembuka: Bongkar Dompet & Realita FOMO (30 Menit)
*   **Ice Breaking (15 menit):** Tanyakan secara acak: *"Siapa di sini yang uang sakunya habis sebelum tanggal 15?"* Minta mereka menuliskan pengeluaran tak terduga terbesar mereka di papan tulis.
*   **Analisis Gengsi (15 menit):** Diskusikan kata kunci **FOMO** (*Fear of Missing Out*). Jelaskan bahwa industri periklanan modern sengaja membuat kita merasa tidak bahagia jika tidak membeli produk terbaru.

### 2. Sesi Inti 1: Memutus Rantai Hutang Digital (30 Menit)
*   **Bedah Kasus Pinjol (20 menit):** Jelaskan bahaya Pinjol menggunakan simulasi bunga berbunga. Tunjukkan cara mengecek legalitas pinjol melalui WhatsApp resmi OJK di nomor **081157157157**.
*   **Diskusi Paylater (10 menit):** Jelaskan konsep bahwa Paylater bukanlah diskon atau uang gratis, melainkan mengambil hak pendapatanmu di masa depan untuk konsumsi masa kini.

### 3. Sesi Inti 2: Workshop Perhitungan 50/30/20 (45 Menit)
*   **Kerja Mandiri (25 menit):** Bimbing siswa mengisi LKPD. Pastikan mereka mematuhi aturan memisahkan 20% tabungan di awal sebelum membagi pos pengeluaran lainnya.
*   **Peer Review & Presentasi (20 menit):** Siswa saling mempresentasikan hasil alokasi anggarannya kepada teman sebangku dan berdiskusi apakah pembagian tersebut sudah cukup realistis atau belum.

### 4. Penutup: Deklarasi Merdeka Finansial (15 Menit)
*   Minta siswa membacakan komitmen keuangan secara bersama-sama di akhir kelas untuk memberikan dampak psikologis yang mendalam.
`,
  worksheet: `# LKPD: Merancang Anggaran Mandiri 50/30/20

**Nama Lengkap:** \`________________________\`  
**Kelas/Jurusan:** \`________________________\`  

---

## 🎯 Instruksi Tugas:
Bayangkan kamu telah lulus SMA dan bekerja paruh waktu (*part-time*) sambil kuliah dengan penghasilan bersih **Rp 1.000.000** per bulan. Tugasmu adalah mengelola uang tersebut agar tidak terjerat hutang dan tabunganmu tetap terisi!

### 💰 LANGKAH 1: Pisahkan Porsi Tabungan Terlebih Dahulu!
*   **Alokasi Tabungan (20%):** Rp \`______________\`
*   *Tulis rencana konkret penggunaan tabungan ini (misal: Beli laptop kuliah, modal bisnis):*
    \`____________________________________________________________________________________\`

---

### 🏡 LANGKAH 2: Daftarkan Pengeluaran Kebutuhan (Maksimal 50%)
*   **Batas Maksimal Anggaran Kebutuhan (50%):** Rp \`______________\`
*   *Rincian Rencana Belanja Kebutuhanmu:*
    1.  Makan pokok sehari-hari: Rp \`______________\`
    2.  Transportasi/bensin: Rp \`______________\`
    3.  Kuota internet belajar/bekerja: Rp \`______________\`
    4.  Lain-lain: Rp \`______________\`
    *   **Total Kebutuhan (Harus <= Rp 500.000):** Rp \`______________\`

---

### ☕ LANGKAH 3: Daftarkan Pengeluaran Keinginan (Maksimal 30%)
*   **Batas Maksimal Anggaran Keinginan (30%):** Rp \`______________\`
*   *Rincian Rencana Belanja Keinginanmu:*
    1.  Nongkrong bersama teman: Rp \`______________\`
    2.  Langganan hiburan (Netflix/Spotify): Rp \`______________\`
    3.  Belanja hobi/Game/Baju: Rp \`______________\`
    *   **Total Keinginan (Harus <= Rp 300.000):** Rp \`______________\`

---

## 🔍 Pertanyaan Analisis Reflektif:
1.  Jika di tengah bulan tiba-tiba ban motormu bocor dan harus diganti dengan biaya Rp 150.000, dari pos anggaran manakah kamu sebaiknya mengambil uang tersebut? Mengapa?
    *   *Analisis:* \`____________________________________________________________________________________\`
2.  Teman akrabmu mengajak patungan membeli tiket konser musik seharga Rp 400.000 menggunakan paylater karena uangmu tidak cukup. Keputusan apa yang akan kamu ambil? Jelaskan alasan logismu!
    *   *Keputusan & Alasan:* \`____________________________________________________________________________________\`
`,
  quiz: [
    {
      question: "Manakah pembagian persentase yang tepat menurut aturan pengelolaan keuangan 50/30/20?",
      type: "multiple_choice",
      options: [
        "50% Keinginan, 30% Kebutuhan, 20% Tabungan",
        "50% Kebutuhan, 30% Keinginan, 20% Tabungan",
        "50% Tabungan, 30% Kebutuhan, 20% Keinginan",
        "50% Kebutuhan, 30% Tabungan, 20% Keinginan"
      ],
      answer: "50% Kebutuhan, 30% Keinginan, 20% Tabungan",
      explanation: "Aturan 50/30/20 membagi pemasukan menjadi 50% untuk kebutuhan dasar hidup (needs), 30% untuk rekreasi/keinginan gaya hidup (wants), dan 20% untuk tabungan/dana darurat (savings).",
      difficulty: "basic"
    },
    {
      question: "Manakah pengeluaran di bawah ini yang paling tepat dikategorikan sebagai Kebutuhan (Needs) bagi seorang siswa sekolah?",
      type: "multiple_choice",
      options: [
        "Membeli paket kuota data internet untuk mengakses Google Classroom sekolah",
        "Membeli tiket bioskop premier untuk menonton film rilis terbaru",
        "Melakukan top-up diamond game online agar mendapat skin edisi terbatas",
        "Membeli sepatu olahraga bermerek impor untuk mengikuti tren mode sekolah"
      ],
      answer: "Membeli paket kuota data internet untuk mengakses Google Classroom sekolah",
      explanation: "Kuota internet untuk tugas sekolah bersifat mendesak dan memiliki konsekuensi langsung pada nilai akademis jika diabaikan, sehingga merupakan kebutuhan. Pilihan lainnya adalah keinginan.",
      difficulty: "basic"
    },
    {
      question: "Mengapa pinjaman online (Pinjol) ilegal dinilai sangat berbahaya dan harus dijauhi dibandingkan meminjam di Bank resmi?",
      type: "multiple_choice",
      options: [
        "Karena pinjol ilegal tidak melayani pinjaman dengan nominal kecil di bawah Rp 500.000",
        "Karena pinjol ilegal membebankan bunga harian sangat tinggi dan melakukan intimidasi/teror menggunakan data pribadi kontak HP korban",
        "Karena pinjol ilegal mewajibkan jaminan sertifikat rumah dan kendaraan bermotor",
        "Karena proses pencairan dana di aplikasi pinjol ilegal memakan waktu hingga berbulan-bulan"
      ],
      answer: "Karena pinjol ilegal membebankan bunga harian sangat tinggi dan melakukan intimidasi/teror menggunakan data pribadi kontak HP korban",
      explanation: "Pinjol ilegal tidak terikat aturan OJK sehingga menetapkan bunga sangat tinggi secara sepihak dan menyalahgunakan data kontak HP nasabah untuk melakukan teror penagihan yang tidak beretika.",
      difficulty: "standard"
    },
    {
      question: "Kapan waktu terbaik untuk menyisihkan pos anggaran 20% Tabungan menurut prinsip literasi keuangan yang sehat?",
      type: "multiple_choice",
      options: [
        "Di akhir bulan apabila ada uang saku yang tersisa",
        "Di awal bulan sesaat setelah menerima uang saku sebelum dibelanjakan untuk hal lain",
        "Saat ada diskon belanja besar di marketplace online",
        "Ketika sudah terlanjur berhutang pada teman sebangku"
      ],
      answer: "Di awal bulan sesaat setelah menerima uang saku sebelum dibelanjakan untuk hal lain",
      explanation: "Menabung yang efektif dilakukan dengan menyisihkannya secara sadar di awal bulan. Jika menabung mengandalkan sisa uang belanja di akhir bulan, umumnya uang tersebut sudah habis terpakai.",
      difficulty: "basic"
    },
    {
      question: "Salah satu dampak psikologis negatif akibat kemudahan fitur Paylater pada e-commerce bagi remaja adalah munculnya FOMO. Apa kepanjangan dari FOMO?",
      type: "multiple_choice",
      options: [
        "Focus On Money Only",
        "Fear Of Missing Out",
        "Find Our Many Options",
        "Future Of Market Organization"
      ],
      answer: "Fear Of Missing Out",
      explanation: "FOMO (Fear of Missing Out) adalah rasa takut tertinggal dari tren atau aktivitas seru yang sedang dilakukan orang lain di media sosial, memicu perilaku konsumtif impulsif.",
      difficulty: "standard"
    }
  ],
  rubric: [
    {
      criterion: "Ketepatan Perhitungan Persentase 50/30/20",
      excellent: "Seluruh perhitungan matematika alokasi uang saku Rp 1.000.000 dikalkulasi secara presisi: Kebutuhan Rp 500.000, Keinginan Rp 300.000, Tabungan Rp 200.000 tanpa kesalahan.",
      good: "Perhitungan persentase secara konsep benar, namun terdapat kesalahan hitung minor pada pembagian sub-item pengeluaran.",
      needsImprovement: "Perhitungan salah total sehingga jumlah total alokasi melebihi atau kurang dari Rp 1.000.000.",
      weight: 30
    },
    {
      criterion: "Ketepatan Klasifikasi Needs vs Wants",
      excellent: "Siswa mampu mengidentifikasi pos pengeluaran secara logis dengan meletakkan biaya primer di kategori 50% dan hiburan/gaya hidup di kategori 30%.",
      good: "Terdapat 1-2 item pengeluaran yang tertukar klasifikasinya (misalnya kuota game diletakkan pada kebutuhan belajar).",
      needsImprovement: "Sebagian besar pengeluaran gaya hidup konsumtif dimasukkan ke dalam porsi kebutuhan dasar.",
      weight: 40
    },
    {
      criterion: "Kerealistisan Anggaran & Rencana Tabungan",
      excellent: "Alokasi biaya yang ditulis sangat realistis sesuai harga pasar lokal dan rencana target tabungan ditulis secara spesifik serta logis.",
      good: "Alokasi biaya cukup logis namun rencana penggunaan tabungan di masa depan masih bersifat umum (misal: 'untuk masa depan' tanpa tujuan spesifik).",
      needsImprovement: "Alokasi biaya tidak masuk akal (misal makan sebulan ditulis Rp 20.000) dan tidak memiliki rencana tabungan.",
      weight: 30
    }
  ]
};

export const SMA_QA_REPORT: QAReport = {
  score: 99,
  summary: "Modul yang luar biasa komprehensif, sangat kontekstual dengan gaya hidup remaja masa kini yang lekat dengan gadget dan e-commerce. Penekanan pada aspek moralitas dan kesehatan finansial sangat kuat.",
  strengths: [
    "Sangat tepat sasaran dengan mengangkat isu FOMO, Paylater, dan no telepon resmi aduan OJK.",
    "Perhitungan persentase 50/30/20 diintegrasikan secara matang di dalam modul dan LKPD.",
    "Diagram alur pembagian dana sangat membantu mempermudah visualisasi siswa."
  ],
  issues: []
};

export const seedSMAProject = (): Project => {
  return {
    id: "demo-sma-ekonomi",
    title: "Ekonomi SMA: Literasi & Keuangan Pribadi",
    createdAt: new Date(Date.now() - 5000).toISOString(),
    updatedAt: new Date(Date.now() - 5000).toISOString(),
    status: "qa_ready",
    brief: SMA_BRIEF,
    blueprint: SMA_BLUEPRINT,
    documentPack: SMA_DOCUMENT_PACK,
    qaReport: SMA_QA_REPORT,
    isDemo: true
  };
};
