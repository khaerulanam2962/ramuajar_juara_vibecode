// src/lib/storage/mockData.ts
import { Project, TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";

export const SEED_BRIEF: TeachingBrief = {
  documentType: "bootcamp_module",
  topic: "Dasar Vibe Coding & Prompt Engineering",
  audience: "Pemula (Non-Programmer)",
  duration: "1 hari (6 jam)",
  level: "beginner",
  finalOutcome: "Aplikasi Web Sederhana Hasil Kolaborasi AI",
  languageStyle: "Bahasa Indonesia, modern, inspiratif",
  localContext: ["Gemini AI", "Cursor/Windsurf", "Hackathon", "Portofolio"],
  constraints: ["Tanpa perlu instalasi software rumit", "Fokus pada logika bahasa manusia"]
};

export const SEED_BLUEPRINT: LearningBlueprint = {
  summary: "Bootcamp kilat 1 hari untuk membongkar rahasia 'Vibe Coding'—cara modern membangun perangkat lunak menggunakan instruksi bahasa alami (Prompt) ke agen AI seperti Gemini, tanpa harus menghafal sintaks kode tradisional.",
  learningObjectives: [
    "Memahami pergeseran paradigma dari Traditional Coding ke Vibe Coding.",
    "Menguasai kerangka kerja MEGA (Misi, Eksekusi, Guardrails, Aturan) dalam Prompting.",
    "Mengidentifikasi dan memitigasi halusinasi AI saat menulis kode.",
    "Menerapkan siklus iterasi (Prompt-Generate-Test) dalam pembuatan mini web-app."
  ],
  prerequisites: [
    "Mampu mengoperasikan peramban web dasar.",
    "Memiliki imajinasi kreatif dan kemauan bereksperimen dengan bahasa."
  ],
  sessionPlan: [
    {
      sessionTitle: "Sesi 1: Era Baru Vibe Coding & Seni Berkomunikasi dengan AI",
      duration: "3 Jam",
      objectives: [
        "Memahami pergeseran paradigma dari Traditional Coding ke Vibe Coding.",
        "Menguasai kerangka kerja MEGA (Misi, Eksekusi, Guardrails, Aturan)."
      ],
      activities: [
        "Sesi Interaktif: Apa itu Vibe Coding? Mengapa bahasa Indonesia (dan Inggris) adalah bahasa pemrograman masa depan?",
        "Analisis Studi Kasus: Prompt buruk vs Prompt berkualitas tinggi.",
        "Aktivitas Pasangan: Permainan tebak instruksi buta (menggambarkan pentonjolan betapa AI butuh konteks eksplisit)."
      ],
      outputs: [
        "Koleksi draf prompt awal (System Prompt) buatan siswa."
      ]
    },
    {
      sessionTitle: "Sesi 2: Praktik Eksekusi & Iterasi Aplikasi Web",
      duration: "3 Jam",
      objectives: [
        "Mengidentifikasi dan memitigasi halusinasi AI saat menulis kode.",
        "Menerapkan siklus iterasi dalam pembuatan mini web-app."
      ],
      activities: [
        "Demonstrasi Live: Mengubah Prompt menjadi UI Kalkulator atau To-Do List dengan Gemini.",
        "Praktik Mandiri: Siswa mulai 'Vibe Coding' aplikasi impian mereka di lingkungan sandbox (codepen/replit).",
        "Refleksi: Memperbaiki error (debugging) bukan dengan kode, melainkan dengan memperbaiki kalimat Prompt.",
        "Showcase: Pameran hasil mini web-app dan saling mencoba."
      ],
      outputs: [
        "Mini web-app fungsional (HTML/CSS/JS) murni hasil Vibe Coding."
      ]
    }
  ],
  assessmentPlan: [
    "Kuis konseptual 5 soal tentang struktur Prompt dan siklus Vibe Coding.",
    "Penilaian kualitatif pada produk akhir aplikasi (berfungsi, minim error, dan UI menarik)."
  ],
  finalProject: {
    title: "Mini Web-App Pilihan Bebas",
    description: "Peserta mem-Vibe Code sebuah aplikasi satu halaman (Single Page App) yang bisa berupa kalkulator BMI, To-Do List, atau Pembangkit Kutipan Acak, murni dengan menginstruksikan AI.",
    deliverables: [
      "Tautan proyek berjalan (Live Link) dan dokumen sejarah Prompt (Prompt Log)."
    ],
    criteria: [
      "Fungsionalitas fitur (Berjalan tanpa error teknis)",
      "Kualitas struktur Prompt (Mengandung Role, Konteks, dan Constraint)",
      "Estetika UI/UX (Diinstruksikan dengan baik ke AI)",
      "Resiliensi (Kemampuan siswa menavigasi halusinasi AI)"
    ]
  }
};

export const SEED_DOCUMENT_PACK: DocumentPack = {
  studentModule: `# Modul Peserta: Menjadi Maestro Vibe Coding 🚀

Selamat datang di era baru pengembangan perangkat lunak! Hari ini, kamu tidak akan dituntut untuk menghafal titik-koma (\`;\`) atau sintaks bahasa pemrograman yang rumit. 

Hari ini, **bahasa manusiapun adalah bahasa pemrograman**.

---

## 1. Apa Itu Vibe Coding?

**Vibe Coding** adalah istilah revolusioner di mana kita membangun perangkat lunak tidak dengan mengetik baris kode secara manual, melainkan dengan bertindak sebagai **"Sutradara/Manajer"** yang memberikan instruksi (*prompt*) kepada agen AI (seperti Gemini). AI yang akan bertindak sebagai koder senior yang mengeksekusi visimu.

> 💡 **Kunci Sukses:**
> Dalam Vibe Coding, keterbatasan utamamu bukanlah seberapa pintar kamu dalam matematika atau ilmu komputer, melainkan seberapa presisi, logis, dan kaya imajinasimu saat menyusun kalimat bahasa alami.

---

## 2. Kerangka Kerja Prompt: MEGA (Misi, Eksekusi, Guardrails, Aturan)

Agar AI tidak berhalusinasi atau memberikan hasil yang melenceng, instruksi kita harus terstruktur. Gunakan format **MEGA**:

| Komponen | Deskripsi | Contoh |
| :--- | :--- | :--- |
| **M**isi (Peran & Tujuan) | Tentukan siapa AI dan apa tujuan akhirnya. | *"Kamu adalah Web Developer Ahli. Buatkan saya aplikasi Kalkulator."* |
| **E**ksekusi (Langkah Detail) | Jelaskan fitur apa saja yang ada. | *"Kalkulator harus punya tombol tambah, kurang, kali, bagi, dan tombol clear merah."* |
| **G**uardrails (Batasan) | Beri tahu AI apa yang TIDAK BOLEH dilakukan. | *"Jangan gunakan library eksternal seperti React. Gunakan Vanilla JS saja."* |
| **A**turan Format (Output) | Tentukan bagaimana kode harus disajikan. | *"Berikan kode dalam satu blok file index.html yang sudah mencakup tag <style> dan <script>."* |

---

## 3. Siklus Iterasi Vibe Coding (Debugging Tanpa Kode)

Terkadang, hasil dari AI tidak 100% sempurna di percobaan pertama. Itulah mengapa kita menggunakan Siklus Iterasi.

\`\`\`mermaid
graph TD
    A["1. Berikan Prompt (MEGA)"] --> B["2. AI Membuat Kode"]
    B --> C{"3. Apakah Ada Error / Bug?"}
    C -- "Ya, tombol tidak jalan" --> D["4. Jangan sentuh kode! Beri AI 'Error Message' atau jelaskan bug-nya"]
    D --> B
    C -- "Tidak, sempurna!" --> E["5. Tambah Fitur Baru / Perbagus UI"]
    E --> A
\`\`\`

**Ingat:** Saat menghadapi *error*, jangan panik. *Copy* pesan *error* tersebut, dan berikan kembali ke Gemini dengan pesan: *"Saya mendapat error ini, tolong perbaiki logikanya."*

---

## Lembar Refleksi Mandiri:
- [ ] Apakah *prompt* awal saya sudah mengandung Misi dan Batasan yang jelas?
- [ ] Ketika hasil AI salah, apakah saya menyerah atau saya mencoba memberikan instruksi yang lebih detail?
- [ ] Apakah saya sudah mencoba meminta AI untuk menambahkan CSS *Glassmorphism* untuk mempercantik UI aplikasi saya?

*Selamat bereksperimen, Vibe Coder!*
`,
  facilitatorGuide: `# Panduan Fasilitator: Bootcamp Vibe Coding

Panduan ini disusun untuk memandu jalannya kelas pengenalan Vibe Coding. Fokus utamanya adalah membuang ketakutan siswa terhadap *coding* tradisional.

---

## 📑 Ringkasan Kegiatan
- **Durasi:** 1 Hari (6 Jam)
- **Metode:** Simulasi prompt, bedah kasus "halusinasi AI", dan perancangan *Live App*.
- **Kunci Keberhasilan:** Fasilitator harus sering menunjukkan momen *Trial & Error*. Tunjukkan bahwa bahkan prompt dari pakar terkadang butuh 2-3 kali revisi. Vibe coding adalah tentang dialog dengan AI.

---

## 📅 Rencana Pembelajaran Detail

### Sesi 1: Era Baru Vibe Coding (3 Jam)
- **Aktivitas Pembuka:** Tunjukkan sebuah aplikasi web kalkulator BMI sederhana. Tanyakan ke siswa, *"Berapa lama waktu yang dibutuhkan untuk membuat ini dari nol bagi pemula?"*. Lalu demokan pembuatan aplikasi tersebut secara *live* menggunakan Gemini dalam waktu kurang dari 3 menit.
- **Aktivitas Pasangan (Tebak Buta):** Minta Siswa A menutup mata (berperan sebagai AI) dan Siswa B (berperan sebagai *Prompter*) harus menginstruksikan Siswa A menggambar rumah di kertas. Jika instruksi Siswa B tidak spesifik (misal tidak bilang "beri atap segitiga"), Siswa A menggambar kotak saja. Ini mendemonstrasikan bahwa AI butuh konteks eksplisit.

### Sesi 2: Praktik Eksekusi (3 Jam)
- **Praktik Mandiri:** Siswa masuk ke platform seperti CodePen. Mereka mulai mem-*prompt* Gemini untuk membuat aplikasi pilihan mereka (misal: Aplikasi Pencatat Hutang, atau Pembangkit Kutipan Acak).
- **Pendampingan:** Fasilitator berkeliling. Jika ada siswa yang mengalami error (aplikasinya tidak jalan), larang mereka mengedit kodenya secara manual. Ajari mereka cara meng-*copy* kendalanya dan memintakan solusinya kembali ke AI.
- **Showcase:** 30 menit terakhir, minta setiap siswa mempresentasikan karyanya.
`,
  worksheet: `# Lembar Kerja (LKPD): Merancang Prompt Masterpiece

**Nama Siswa:** \`________________________\`

---

## 🔍 Aktivitas 1: Membedah Prompt yang Buruk vs Baik

**Skenario:** Kamu ingin AI membuatkan halaman web portofolio pribadi.

### Prompt A (Buruk):
> *"Buatkan saya website portofolio yang keren, ada fotonya, ada bagian tentang saya, dan bisa dihubungi."*

### Prompt B (Baik - Format MEGA):
> *"Sebagai Web Designer Senior, buatkan saya kode website Single Page Portfolio untuk seorang desainer grafis. (Misi)
> Website harus memiliki 3 bagian: Header dengan efek parallax, Bagian 'Tentang Saya' dengan foto profil bundar, dan Formulir Kontak di bawah. (Eksekusi)
> Jangan gunakan framework eksternal seperti Bootstrap, cukup gunakan TailwindCSS via CDN. (Guardrails)
> Berikan hasil dalam satu blok file HTML yang lengkap. (Aturan Output)"*

---

## 📝 Lembar Latihan:

1. **Analisis:** Mengapa Prompt A kemungkinan besar akan menghasilkan desain yang berantakan atau tidak sesuai ekspektasi?
   *Jawaban:* \`_____________________________________________________________________\`

2. **Giliranmu:** Ubah prompt buruk di bawah ini menjadi Prompt berkualitas dengan kerangka **MEGA**!
   *Prompt Buruk:* *"Bikin aplikasi to-do list dong yang bisa dicentang kalau udah selesai."*
   
   **Prompt MEGA buatanmu:**
   - **Misi:** \`__________________________________________________________________\`
   - **Eksekusi:** \`_______________________________________________________________\`
   - **Guardrails:** \`_____________________________________________________________\`
   - **Aturan Output:** \`__________________________________________________________\`

3. **Praktik Langsung:** Ketikkan prompt buatanmu di atas ke Google Gemini atau AI asisten pilihanmu. Salin kodenya ke *CodePen*, lalu tuliskan 1 hal yang langsung berhasil dan 1 hal yang perlu kamu revisi di prompt keduamu!
   - *Berhasil:* \`_______________________________________________________________\`
   - *Perlu Revisi:* \`____________________________________________________________\`
`,
  quiz: [
    {
      question: "Apa yang menjadi kemampuan utama yang dibutuhkan seseorang untuk mahir dalam Vibe Coding?",
      type: "multiple_choice",
      options: [
        "Menghafal ratusan algoritma dan struktur data",
        "Mengetik dengan kecepatan 120 kata per menit",
        "Kemampuan menyusun logika bahasa alami dan konteks yang presisi ke dalam Prompt",
        "Menguasai bahasa pemrograman Assembly dan C++"
      ],
      answer: "Kemampuan menyusun logika bahasa alami dan konteks yang presisi ke dalam Prompt",
      explanation: "Vibe coding menggeser beban penulisan sintaks ke AI, sehingga yang terpenting adalah kemampuan manusia berkomunikasi dan merancang logika secara jelas (Prompting).",
      difficulty: "basic"
    },
    {
      question: "Dalam kerangka kerja MEGA, bagian manakah yang berfungsi untuk mencegah AI berhalusinasi atau menggunakan alat yang tidak kita inginkan?",
      type: "multiple_choice",
      options: [
        "Misi (Mission)",
        "Eksekusi (Execution)",
        "Guardrails (Batasan/Pagar)",
        "Aturan (Rules)"
      ],
      answer: "Guardrails (Batasan/Pagar)",
      explanation: "Guardrails atau batasan memberikan 'pagar' pada AI, misalnya instruksi 'Jangan gunakan React' atau 'Hanya gunakan warna monokrom'.",
      difficulty: "basic"
    },
    {
      question: "Jika kode yang di-generate oleh AI ternyata menghasilkan error di browser, apa tindakan Vibe Coder sejati?",
      type: "multiple_choice",
      options: [
        "Menyerah dan menganggap AI-nya rusak",
        "Meng-copy pesan error di browser dan memberikannya kembali ke AI untuk diperbaiki secara kolaboratif",
        "Mencari programmer profesional untuk membenarkan kode HTML-nya secara manual",
        "Mencoba mencari error titik koma secara manual selama berjam-jam"
      ],
      answer: "Meng-copy pesan error di browser dan memberikannya kembali ke AI untuk diperbaiki secara kolaboratif",
      explanation: "Iterasi adalah inti dari Vibe Coding. AI adalah partner; berikan ia feedback (error log) agar ia bisa memperbaiki kesalahannya sendiri.",
      difficulty: "standard"
    },
    {
      question: "Manakah pernyataan di bawah ini yang paling menggambarkan filosofi Vibe Coding?",
      type: "multiple_choice",
      options: [
        "Manusia menulis kode, mesin mengkompilasinya.",
        "Manusia adalah Manajer/Sutradara yang merumuskan masalah, AI adalah Staf Eksekutor yang menulis sintaks.",
        "AI akan menggantikan manusia secara total sehingga kita tidak perlu memikirkan logika aplikasi.",
        "Coding hanya bisa dilakukan oleh lulusan Teknik Informatika."
      ],
      answer: "Manusia adalah Manajer/Sutradara yang merumuskan masalah, AI adalah Staf Eksekutor yang menulis sintaks.",
      explanation: "Dalam paradigma baru ini, peran manusia naik tingkat ke ranah konseptual, sementara AI menangani eksekusi klerikal pengetikan kode.",
      difficulty: "standard"
    }
  ],
  rubric: [
    {
      criterion: "Kualitas & Struktur Prompt",
      excellent: "Prompt awal menggunakan kerangka yang sangat jelas (Peran, Konteks, Constraint) dan menghasilkan kode akurat pada percobaan pertama.",
      good: "Prompt cukup jelas, namun AI memerlukan beberapa revisi berulang karena kurangnya konteks detail.",
      needsImprovement: "Prompt terlalu pendek (seperti 'buatkan aplikasi X') sehingga AI kesulitan menangkap visi.",
      weight: 40
    },
    {
      criterion: "Fungsionalitas Mini Web-App",
      excellent: "Aplikasi berjalan mulus 100%, tombol interaktif berfungsi, dan bebas dari error (bug) fungsional.",
      good: "Aplikasi berjalan baik secara umum, namun ada 1-2 fitur kecil (misal warna tombol berubah) yang *glitch*.",
      needsImprovement: "Aplikasi sama sekali tidak berjalan di browser (layar kosong) karena error fatal yang tidak di-debug.",
      weight: 40
    },
    {
      criterion: "Estetika (UI) Hasil Vibe Coding",
      excellent: "Tampilan modern, rapi, responsif, dan mencerminkan instruksi desain yang diberikan ke AI secara brilian.",
      good: "Tampilan standar (cukup layak) namun belum terlihat polesan estetika yang mendalam.",
      needsImprovement: "Tampilan berantakan, elemen bertumpuk dan tidak nyaman dilihat.",
      weight: 20
    }
  ]
};

export const SEED_MOCK_BASIC_MODULE = `# Modul Peserta (Versi Pemula): Panduan Cepat Vibe Coding

---

## Mengapa Vibe Coding?
Dulu, membuat program itu seperti merangkai mesin jam secara manual. Sekarang, dengan AI, membuat program itu seperti memesan makanan di restoran: kamu hanya perlu menjelaskan dengan sangat detail pesananmu ke "Koki" (AI).

## 2 Langkah Emas:
1. **Perintah Detail:** Jangan bilang "Buatkan web". Bilanglah, "Kamu adalah ahli pembuat web. Buatkan satu halaman kalkulator berwarna biru, dengan tombol yang membulat."
2. **Revisi Tanpa Ragu:** Kalau hasilnya salah, jangan perbaiki kodenya sendiri. Cukup bilang ke AI, "Tombol tambahnya tidak berfungsi, tolong betulkan."

Ayo coba pesanan pertama kamu sekarang!
`;

export const SEED_MOCK_ADVANCED_MODULE = `# Modul Peserta (Versi Pakar): Advanced Prompt Engineering untuk Vibe Coding

---

## 1. Zero-Shot vs Few-Shot Prompting dalam Code Generation
Meningkatkan determinisme output agen AI saat melakukan *scaffolding* arsitektur proyek. Pada tingkat mahir, jangan sekadar memberi instruksi konseptual. Berikan *Few-Shot Examples* dari arsitektur JSON atau pola komponen yang Anda inginkan.

## 2. Mengendalikan Halusinasi dengan System Constraints
Saat membangun aplikasi kompleks, injeksikan *Guardrails* teknis ketat. 
Contoh: \`Strictly use functional components. Do not import React Router unless specified. Adhere to ESLint Airbnb style guide.\`

## 3. Iterasi Arsitektural Berbasis Git
Vibe Coding yang profesional mengombinasikan Prompting dengan *Version Control*. Integrasikan agen dengan terminal lokal Anda (seperti Cursor/Windsurf) agar setiap refaktor AI dicatat sebagai *commit* terpisah. Ini menjamin eksperimentasi yang aman.
`;

export const SEED_QA_REPORT: QAReport = {
  score: 98,
  summary: "Luar Biasa! Modul pelatihan ini sangat futuristik dan kontekstual. Paradigma Vibe Coding dijelaskan dengan metafora yang amat kuat sehingga siswa non-teknis bisa langsung memahaminya. Instruksi di Panduan Guru juga menstimulasi metode *hands-on* dengan cepat.",
  strengths: [
    "Penggunaan analogi 'Misi, Eksekusi, Guardrails, Aturan' (MEGA) sangat pedagogis untuk pemula.",
    "Bagan diagram alir (Mermaid) menunjukkan dengan jelas bahwa Vibe Coding adalah proses iteratif.",
    "Topik ini adalah perwujudan sejati dari visi ke depan teknologi pendidikan modern!"
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
  const sampleId = "demo-vibecoding";
  const project: Project = {
    id: sampleId,
    title: "Vibe Coding: App dengan AI",
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
