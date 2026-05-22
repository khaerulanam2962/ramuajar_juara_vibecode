import { Project, TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";

export const SMP_BRIEF: TeachingBrief = {
  documentType: "school_module",
  topic: "Sistem Pencernaan Manusia",
  audience: "Siswa SMP Kelas 8",
  duration: "2 Pertemuan, 2x45 Menit",
  level: "beginner",
  finalOutcome: "Peta konsep interaktif perjalanan makanan",
  languageStyle: "Bahasa Indonesia, edukatif, seru, mudah dipahami",
  localContext: ["Nasi padang", "Tempe", "Sakit maag karena telat makan"],
  constraints: ["Gunakan analogi mesin/pabrik", "Jangan terlalu banyak istilah latin"]
};

export const SMP_BLUEPRINT: LearningBlueprint = {
  summary: "Modul pembelajaran Ilmu Pengetahuan Alam (IPA) untuk SMP kelas 8 yang membahas tentang sistem pencernaan manusia secara seru dengan analogi mesin pabrik makanan.",
  learningObjectives: [
    "Menyebutkan organ-organ pencernaan utama pada manusia secara berurutan.",
    "Menjelaskan fungsi organ pencernaan menggunakan analogi pabrik makanan.",
    "Membedakan proses pencernaan mekanik (fisik) dan kimiawi (bantuan enzim).",
    "Memahami penyebab sakit maag akibat terlambat makan dan cara pencegahannya.",
    "Membuat peta konsep perjalanan makanan dari mulut hingga anus secara berkelompok."
  ],
  prerequisites: [
    "Siswa sudah mengenal bagian-bagian tubuh luar manusia.",
    "Siswa memahami konsep dasar bahwa makanan menghasilkan energi bagi tubuh."
  ],
  sessionPlan: [
    {
      sessionTitle: "Pertemuan 1: Pintu Masuk & Mesin Blender Lambung",
      duration: "90 Menit",
      objectives: [
        "Menyebutkan organ pencernaan bagian atas (mulut, kerongkongan, lambung).",
        "Menjelaskan proses mekanik di mulut dan gerak peristaltik di kerongkongan.",
        "Mengidentifikasi proses kimiawi di lambung dengan bantuan asam dan enzim.",
        "Memahami mekanisme timbulnya penyakit maag."
      ],
      activities: [
        "Apersepsi (15 menit): Diskusi interaktif mengenai makanan favorit (seperti Nasi Padang) dan apa yang dirasakan perut setelah makan kenyang vs telat makan.",
        "Aktivitas Eksperimen Sederhana (20 menit): Simulasi gerak peristaltik menggunakan tabung plastik/odol dan kelereng untuk memvisualisasikan bagaimana makanan didorong ke bawah.",
        "Penjelasan Analogi Blender (30 menit): Guru mendemostrasikan analogi lambung sebagai mesin blender yang melumatkan makanan menggunakan asam dan enzim.",
        "Diskusi Kelompok Kecil (15 menit): Menganalisis mengapa perut perih saat terlambat makan (sakit maag).",
        "Kuis Interaktif Kilat (10 menit): Tebak organ berdasarkan karakteristik dan fungsinya."
      ],
      outputs: [
        "Lembar kerja analisis organ pencernaan bagian atas terisi.",
        "Catatan diskusi kelompok tentang penyebab penyakit maag."
      ]
    },
    {
      sessionTitle: "Pertemuan 2: Usus Penyerapan & Pembuatan Peta Konsep",
      duration: "90 Menit",
      objectives: [
        "Menjelaskan peran usus halus dalam menyerap sari-sari makanan.",
        "Menjelaskan peran usus besar dalam mengatur kadar air dan proses pembusukan sisa makanan.",
        "Membuat peta konsep perjalanan makanan (Nasi Padang) melewati seluruh organ pencernaan."
      ],
      activities: [
        "Roleplay Sari Makanan (20 menit): Siswa memperagakan perjalanan molekul gizi (karbohidrat dari nasi, protein dari tempe) yang disaring oleh usus halus.",
        "Workshop Peta Konsep (45 menit): Kelompok siswa merancang peta konsep perjalanan makanan di atas kertas karton warna-warni, mencantumkan nama organ, fungsi, dan analogi mesinnya.",
        "Galeri Karya & Presentasi (20 menit): Metode Gallery Walk di mana siswa berkeliling melihat hasil karya kelompok lain dan memberikan feedback.",
        "Refleksi & Penutup (5 menit): Guru merangkum pelajaran dan mengaitkannya dengan pentingnya menjaga pola makan sehat."
      ],
      outputs: [
        "Peta konsep berwarna perjalanan makanan dari mulut hingga anus.",
        "Lembar evaluasi diri siswa."
      ]
    }
  ],
  assessmentPlan: [
    "Formatif: Partisipasi aktif dalam eksperimen sederhana dan permainan peran.",
    "Sumatif: Lembar kerja peta konsep kelompok dan kuis pilihan ganda di akhir materi."
  ],
  finalProject: {
    title: "Peta Konsep Perjalanan Nasi Padang",
    description: "Siswa secara berkelompok membuat visualisasi kreatif berupa peta konsep yang menggambarkan petualangan sepotong tempe dan nasi padang dari awal masuk mulut hingga dikeluarkan kembali, lengkap dengan penjelasan fungsi dan enzim yang terlibat.",
    deliverables: [
      "Kertas karton poster berisi peta konsep berwarna lengkap dengan ilustrasi atau gambar organ."
    ],
    criteria: [
      "Ketepatan urutan organ pencernaan",
      "Kebenaran penjelasan fungsi dan jenis pencernaan (mekanik/kimiawi)",
      "Kreativitas visual, tata letak, dan kebersihan media",
      "Kerja sama tim dan kejelasan saat presentasi"
    ]
  }
};

export const SMP_DOCUMENT_PACK: DocumentPack = {
  studentModule: `# Modul IPA: Petualangan Nasi Padang di Dalam Tubuh Kita (Sistem Pencernaan)

Selamat datang, para penjelajah sains cilik! Pernahkah kamu berpikir, ke mana perginya seporsi **Nasi Padang** lengkap dengan **rendang** dan **tempe goreng** yang kamu makan saat jam istirahat sekolah? 

Mari kita ikuti petualangannya di dalam "pabrik pengolah makanan" super canggih yang ada di dalam tubuhmu sendiri!

---

## 1. Peta Perjalanan Makanan (Mekanisme Jalur)
Makanan yang kita makan tidak langsung terserap begitu saja. Mereka harus melewati pipa panjang berliku sepanjang kurang lebih 9 meter di tubuh kita.

\`\`\`mermaid
graph TD
    A["Mulut (Pencernaan Mekanik & Kimiawi)"] --> B["Kerongkongan (Gerak Peristaltik)"]
    B --> C["Lambung (Asam Lambung & Enzim Pepsin)"]
    C --> D["Usus Halus (Penyerapan Sari Makanan)"]
    D --> E["Usus Besar (Penyerapan Air & Pembusukan)"]
    E --> F["Anus (Pembuangan Sisa Makanan)"]
\`\`\`

---

## 2. Mengenal Stasiun-Stasiun Pencernaan

### 🦷 Stasiun 1: Mulut (Pintu Gerbang Utama)
Di mulut, petualangan dimulai. Terjadi dua cara menghancurkan makanan di sini:
*   **Pencernaan Mekanik:** Gigi kita memotong, merobek, dan mengunyah makanan keras (seperti tempe) menjadi potongan kecil. Lidah membantu membolak-balikkan makanan.
*   **Pencernaan Kimiawi:** Air liur kita mengandung enzim **Amilase (Ptialin)**. Enzim ini bertugas memecah karbohidrat (dari nasi padang) menjadi gula sederhana agar rasanya manis dan mudah diserap nanti.

### 🎢 Stasiun 2: Kerongkongan (Seluncuran Pemeras)
Setelah ditelan, makanan masuk ke kerongkongan (bukan tenggorokan ya, tenggorokan itu untuk bernapas). Kerongkongan tidak menyerap makanan, melainkan mendorongnya dengan **Gerak Peristaltik**—otot kerongkongan meremas-remas makanan secara bergelombang seperti cara kita meremas odol dari bawah ke atas agar makanan terdorong masuk ke lambung.

### 🧪 Stasiun 3: Lambung (Mesin Blender Asam)
Lambung adalah kantong otot berbentuk huruf J. Di sini makanan diaduk-aduk selama 2-4 jam hingga menjadi bubur halus (*kim*). Lambung memproduksi senjata khusus:
*   **Asam Lambung (HCl):** Asam kuat yang bertugas membunuh bakteri/kuman jahat yang menempel di makanan kita.
*   **Enzim Pepsin:** Memecah protein (dari rendang atau tempe) menjadi pepton.

> ### ⚠️ Info Kesehatan: Mengapa Kita Mengalami Sakit Maag?
> Sakit maag (*gastritis*) terjadi ketika dinding lambung mengalami peradangan akibat terkikis oleh asam lambung. Lambung kita terus memproduksi asam secara berkala. Jika kita **telat makan**, asam lambung yang asamnya mirip aki mobil ini tidak memiliki makanan untuk dicerna, sehingga ia mulai mengikis dinding lambungmu sendiri. Akibatnya perut terasa perih, melilit, dan mual!

### 🌾 Stasiun 4: Usus Halus (Pabrik Penyerap Gizi)
Panjang usus halus manusia dewasa mencapai 6 meter! Di sinilah seluruh sari makanan diserap. Dinding usus halus dipenuhi jutaan tonjolan kecil bernama **Vili** (seperti bulu handuk) yang bertugas menyedot vitamin, protein, karbohidrat, dan lemak dari makanan untuk dialirkan ke pembuluh darah dan diubah menjadi tenaga agar kamu bisa berlari dan berpikir.

### 🍂 Stasiun 5: Usus Besar (Pengering Air & Pembusukan)
Ampas makanan yang tidak terserap akan dikirim ke usus besar. Tugas usus besar adalah menyerap air yang tersisa agar ampas tidak terlalu encer. Di sini juga dibantu oleh bakteri baik *Escherichia coli* untuk membusukkan makanan sehingga berubah menjadi feses (kotoran).

### 🚪 Stasiun 6: Anus (Gerbang Pembuangan)
Feses yang sudah siap dibuang akan ditampung di rektum sebelum akhirnya dikeluarkan lewat anus saat kamu buang air besar (BAB).

---

## 🏭 Analogi Sistem Pencernaan Kita sebagai Pabrik

| Nama Organ | Analogi Pabrik | Proses Utama yang Terjadi |
| :--- | :--- | :--- |
| **Mulut** | Mesin Penghancur Awal & Penyiram Air | Gigi menghancurkan makanan, air liur mencerna karbohidrat. |
| **Kerongkongan** | Sabuk Konveyor (Pendorong) | Gerak otot mendorong makanan ke stasiun berikutnya. |
| **Lambung** | Tangki Blender & Asam Kimia | Makanan dilumatkan menjadi bubur dengan cairan asam kuat. |
| **Usus Halus** | Filter Penyaring Gizi Utama | Zat penting disaring dan dimasukkan ke pembuluh darah. |
| **Usus Besar** | Mesin Pengering & Pemadat | Air diserap kembali, sisa makanan dibusukkan bakteri baik. |
| **Anus** | Saluran Pembuangan Limbah | Sisa sampah makanan dibuang keluar pabrik. |

*Ingat: Jagalah kesehatan pabrik tubuhmu dengan makan teratur, mengunyah makanan sampai halus, dan banyak minum air putih!*
`,
  facilitatorGuide: `# Panduan Guru: Menjelaskan Sistem Pencernaan dengan Seru & Kontekstual

Tujuan modul ini adalah membantu siswa kelas 8 SMP memahami organ pencernaan secara fungsional melalui analogi, visualisasi, dan eksperimen sederhana. Jangan bebani siswa dengan hafalan latin, tekankan pada pemahaman alur kerja dan gaya hidup sehat.

---

## 📑 Alokasi Waktu & Skenario Mengajar

### Pertemuan 1: Mulut hingga Lambung (90 Menit)
*   **00:00 - 00:15 | Apersepsi Interaktif:** Tanyakan pada siswa: *"Pernahkah kalian makan terburu-buru sampai tersedak? Atau perut bunyi perih?"* Hubungkan dengan nasi padang yang dimakan siang hari. Jelaskan konsep bahwa makanan butuh perjalanan panjang.
*   **00:15 - 00:35 | Demonstrasi Gerak Peristaltik:**
    *   *Alat:* Selang bening berdiameter 2-3 cm atau kaos kaki panjang basah, bola pingpong atau kelereng besar.
    *   *Langkah:* Masukkan bola ke dalam kaos kaki, minta siswa mempraktikkan cara memeras kaos kaki agar bola berpindah dari atas ke bawah. Tekankan bahwa begitulah kerongkongan bekerja tanpa bantuan gaya gravitasi (bahkan jika kita makan sambil kayang, makanan tetap sampai ke lambung).
*   **00:35 - 01:10 | Diskusi Lambung & Analogi Blender:** Gambarkan lambung sebagai kantong yang melumatkan makanan. Diskusikan fenomena sakit maag. Gunakan analogi blender: *"Apa yang terjadi jika blender dinyalakan tanpa buah di dalamnya? Pisau blender akan mengikis wadah dan mesin akan panas."* Begitu pula lambung jika dibiarkan kosong.
*   **01:10 - 01:30 | Review & Penilaian Formatif:** Bagikan kuis tebak organ secara berpasangan.

---

## 💡 Tips Memfasilitasi Miskonsepsi
1.  **Tenggorokan vs Kerongkongan:** Siswa sering menyamakan keduanya. Jelaskan bahwa **tenggorokan** (*trakea*) adalah untuk jalur udara pernapasan, sedangkan **kerongkongan** (*esofagus*) adalah jalur makanan. Ada katup otomatis (*epiglotis*) yang bertugas membuka-tutup agar makanan tidak salah masuk jalur yang menyebabkan tersedak.
2.  **Pencernaan Kimiawi:** Tegaskan bahwa enzim bukanlah zat mistis, melainkan "gunting kimiawi" yang memotong rantai makanan panjang menjadi potongan kecil agar muat diserap pori-pori usus halus.
`,
  worksheet: `# Lembar Kerja Peserta Didik (LKPD): Detektif Perjalanan Tempe Goreng

**Nama Kelompok:** \`________________________\`  
**Anggota Kelompok:**  
1. \`________________________\`  
2. \`________________________\`  
3. \`________________________\`  

---

## 🕵️‍♂️ Misi Detektif: Melacak Petualangan Sepotong Tempe Goreng
Kalian adalah tim detektif medis yang ditugaskan untuk melacak perjalanan sepotong **Tempe Goreng** sejak digigit di mulut hingga diubah menjadi energi. Diskusikan dan jawablah pertanyaan-pertanyaan berikut!

### 📍 Pos 1: Di dalam Mulut
1. Saat mengunyah tempe goreng, gigi kita memecahnya menjadi butiran kecil. Ini disebut pencernaan:
   *   *Jawaban:* \`[ Mekanik / Kimiawi ]\` *(Coret yang salah)*
2. Di dalam mulut juga ada air liur. Zat gizi apa dari tempe atau nasi yang mulai dicerna secara kimiawi oleh enzim di mulut?
   *   *Jawaban:* \`__________________________________________________\`

### 📍 Pos 2: Jalur Kerongkongan
3. Tempe yang sudah halus didorong ke lambung melewati kerongkongan menggunakan gerakan bergelombang. Apa nama gerak otot ini dan jelaskan secara singkat prinsip kerjanya!
   *   *Jawaban:* \`____________________________________________________________________________________\`

### 📍 Pos 3: Penyelidikan Lambung
4. Mengapa tempe tidak membusuk di dalam lambung meskipun didiamkan selama 3 jam di dalam suhu tubuh yang hangat? Senjata kimia apa di lambung yang mencegah bakteri berkembang biak?
   *   *Jawaban:* \`__________________________________________________\`

### 📍 Pos 4: Penyerapan Zat Gizi
5. Karbohidrat, protein, dan lemak dari tempe akhirnya berhasil diserap tubuh untuk diubah menjadi energi di stasiun...
   *   *Jawaban:* \`__________________________________________________\`

### 📍 Pos 5: Kasus Maag
6. Bayangkan kamu asyik bermain game online sampai lupa makan dari pagi hingga sore. Apa yang terjadi pada lambungmu? Hubungkan jawabanmu dengan konsep asam lambung!
   *   *Analisis:* \`____________________________________________________________________________________\`
`,
  quiz: [
    {
      question: "Apakah nama gerak meremas dan mendorong makanan yang dilakukan oleh otot kerongkongan?",
      type: "multiple_choice",
      options: [
        "Gerak peristaltik",
        "Pencernaan mekanik",
        "Gerak sekresi",
        "Proses absorbsi"
      ],
      answer: "Gerak peristaltik",
      explanation: "Gerak peristaltik adalah kontraksi dan relaksasi otot kerongkongan secara berurutan untuk memeras makanan ke arah lambung.",
      difficulty: "basic"
    },
    {
      question: "Di lambung terjadi pencernaan kimiawi protein menggunakan enzim tertentu yang aktif dalam kondisi asam lambung yang kuat. Enzim yang dimaksud adalah...",
      type: "multiple_choice",
      options: [
        "Enzim Amilase",
        "Enzim Pepsin",
        "Enzim Lipase",
        "Enzim Tripsin"
      ],
      answer: "Enzim Pepsin",
      explanation: "Enzim Pepsin dihasilkan oleh dinding lambung dan bertugas mengubah protein menjadi pepton. Enzim ini bekerja optimal pada lingkungan asam (pH rendah).",
      difficulty: "standard"
    },
    {
      question: "Zat asam kuat (asam klorida/HCl) yang diproduksi di lambung kita memiliki peran penting bagi pertahanan tubuh, yaitu...",
      type: "multiple_choice",
      options: [
        "Menyerap air dari sisa makanan",
        "Membantu memecah lemak menjadi asam lemak",
        "Membunuh kuman/bakteri berbahaya yang masuk bersama makanan",
        "Membantu memotong karbohidrat menjadi zat gula manis"
      ],
      answer: "Membunuh kuman/bakteri berbahaya yang masuk bersama makanan",
      explanation: "Asam lambung (HCl) berfungsi menciptakan kondisi sangat asam untuk membunuh mikroorganisme berbahaya dan mengaktifkan pepsinogen menjadi pepsin.",
      difficulty: "basic"
    },
    {
      question: "Di organ manakah proses utama penyerapan sari-sari makanan ke dalam aliran darah manusia berlangsung?",
      type: "multiple_choice",
      options: [
        "Lambung",
        "Usus Besar",
        "Usus Halus",
        "Kerongkongan"
      ],
      answer: "Usus Halus",
      explanation: "Usus halus memiliki lipatan-lipatan kecil berlapis pembuluh darah (vili) yang berfungsi menyerap nutrisi dari bubur makanan untuk disebarkan ke tubuh.",
      difficulty: "basic"
    },
    {
      question: "Bagaimanakah mekanisme terjadinya penyakit Maag (Gastritis) pada lambung seseorang?",
      type: "multiple_choice",
      options: [
        "Karena usus besar menyerap terlalu banyak air sehingga kotoran mengeras",
        "Karena asam lambung yang asam mengikis dan mengiritasi dinding lambung akibat lambung kosong terlalu lama",
        "Karena makanan tidak dikunyah halus di mulut sehingga menyumbat lambung",
        "Karena infeksi virus influenza pada saluran pencernaan bagian bawah"
      ],
      answer: "Karena asam lambung yang asam mengikis dan mengiritasi dinding lambung akibat lambung kosong terlalu lama",
      explanation: "Saat telat makan, asam lambung tetap diproduksi tanpa ada makanan yang bisa dicerna. Akibatnya, asam kuat tersebut mengikis lapisan lendir pelindung dinding lambung, menimbulkan iritasi dan perih.",
      difficulty: "standard"
    }
  ],
  rubric: [
    {
      criterion: "Kebenaran Urutan Organ Pencernaan",
      excellent: "Peta konsep menggambarkan urutan lengkap dengan tepat tanpa ada yang terbalik: Mulut -> Kerongkongan -> Lambung -> Usus Halus -> Usus Besar -> Anus.",
      good: "Peta konsep menggambarkan urutan organ dengan benar, namun melewatkan 1 bagian transisi (misal kerongkongan atau anus).",
      needsImprovement: "Urutan organ acak-acakan atau salah parah (misal setelah mulut langsung ke lambung atau usus terbalik).",
      weight: 40
    },
    {
      criterion: "Kebenaran Konsep Fungsi & Pencernaan",
      excellent: "Semua organ diberi penjelasan fungsi yang akurat dan tepat dalam membedakan jenis pencernaan mekanik vs kimiawi di mulut dan lambung.",
      good: "Sebagian besar fungsi organ dijelaskan dengan benar, namun ada kekeliruan minor dalam penulisan peran asam lambung atau enzim.",
      needsImprovement: "Penjelasan fungsi tidak ada atau salah total (misalnya usus besar ditulis menyerap gizi utama).",
      weight: 30
    },
    {
      criterion: "Kreativitas & Desain Visual",
      excellent: "Peta konsep dibuat dengan layout yang sangat rapi, menggunakan warna yang kontras untuk memperjelas alur, dan memiliki gambar pendukung yang menarik.",
      good: "Cukup rapi dan mudah dibaca, namun kombinasi warna kurang kontras atau gambar pendukung kurang relevan.",
      needsImprovement: "Dibuat asal-asalan, tulisan sulit dibaca, tidak rapi, dan tidak menggunakan warna pembeda.",
      weight: 30
    }
  ]
};

export const SMP_QA_REPORT: QAReport = {
  score: 98,
  summary: "Modul dirancang dengan sangat baik, menggunakan tingkat kesulitan yang sangat pas bagi anak usia SMP kelas 8. Aspek analogi pabrik yang konsisten mempermudah siswa menyerap materi biologi.",
  strengths: [
    "Penggunaan diagram alir (flowchart) di awal modul sangat membimbing visualisasi siswa.",
    "Analogi pabrik (blender, konveyor, filter) konsisten dari awal hingga rubrik akhir.",
    "Pembahasan sakit maag dikaitkan langsung dengan kebiasaan hidup sehari-hari anak usia SMP (telat makan karena bermain game)."
  ],
  issues: []
};

export const seedSMPProject = (): Project => {
  return {
    id: "demo-smp-biologi",
    title: "IPA SMP: Sistem Pencernaan Manusia",
    createdAt: new Date(Date.now() - 10000).toISOString(),
    updatedAt: new Date(Date.now() - 10000).toISOString(),
    status: "qa_ready",
    brief: SMP_BRIEF,
    blueprint: SMP_BLUEPRINT,
    documentPack: SMP_DOCUMENT_PACK,
    qaReport: SMP_QA_REPORT,
    isDemo: true
  };
};
