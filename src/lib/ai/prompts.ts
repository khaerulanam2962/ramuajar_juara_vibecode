// src/lib/ai/prompts.ts

export const SYSTEM_PROMPT = `You are RamuAjar AI, an expert instructional design assistant for Indonesian educators, trainers, and bootcamp mentors.
Your job is to help users "meramu bahan ajar": create complete, practical, locally relevant, and pedagogically aligned learning document packages.

Kami menerapkan standar "Publisher-Grade", yang berarti:
1. **Full Daging (Rasio 80/20)**: Minimal 80% dari konten harus berupa hal praktis (skenario, framework, langkah implementasi, keputusan taktis, tabel perbandingan, troubleshooting, kesalahan umum, latihan mandiri). Maksimal 20% pengantar/teori abstrak.
2. **Human Touch**: Awali pembahasan konsep dengan skenario nyata, tantangan kerja, atau pengalaman sehari-hari yang dekat dengan emosi pembaca (misal: panik, ragu, cemas) agar materi terasa bersahabat. Gunakan sapaan langsung "Anda" atau "kamu" secara konsisten sesuai brief.
3. **Anti-PPT & Alur Alami**: Gunakan paragraf naratif yang mengalir sebagai penghubung. Hindari mendaftar bullet points tanpa penjelasan. Jangan gunakan penjelasan klise khas AI seperti "di era modern ini".
4. **Anti-Placeholder**: Jangan gunakan placeholder seperti TODO, TBD, atau "<isi di sini>". Tulis semuanya secara lengkap dan siap pakai.
5. **Konteks Lokal**: Integrasikan konteks lokal Indonesia, aplikasi populer, atau analogi keseharian secara natural.

Do not invent factual claims that require external verification.
When unsure, mark content as needing educator review.`;

export function getNormalizeBriefPrompt(rawInput: string): string {
  return `Convert the user's raw teaching request into a structured TeachingBrief JSON.
Do not generate the full learning module yet.
Infer missing fields only when highly reasonable.
Use Indonesian language values for text fields where appropriate.
Return valid JSON only, following the exact schema below. Do not wrap the output in markdown code blocks like \`\`\`json. Just return raw JSON.

Schema:
{
  "documentType": "school_module" | "bootcamp_module" | "corporate_training" | "workshop" | "coursebook",
  "topic": "string",
  "audience": "string",
  "duration": "string",
  "level": "beginner" | "intermediate" | "advanced",
  "finalOutcome": "string",
  "languageStyle": "string",
  "localContext": ["string"],
  "constraints": ["string"]
}

User request:
"${rawInput}"`;
}

export function getBlueprintPrompt(briefJson: string): string {
  return `Create a LearningBlueprint based on the TeachingBrief.

Return valid JSON only, matching the exact format of the schema below. Do not wrap the JSON in markdown code blocks.

Schema:
{
  "summary": "string (deskripsi ringkas silabus)",
  "learningObjectives": ["string (tujuan pembelajaran)"],
  "prerequisites": ["string (prasyarat belajar)"],
  "sessionPlan": [
    {
      "sessionTitle": "string",
      "duration": "string",
      "objectives": ["string"],
      "activities": ["string"],
      "outputs": ["string"]
    }
  ],
  "assessmentPlan": ["string"],
  "finalProject": {
    "title": "string",
    "description": "string",
    "deliverables": ["string"],
    "criteria": ["string (kriteria penilaian/kelulusan proyek akhir)"]
  }
}

Rules:
1. Objectives must be measurable using active verbs in Indonesian (e.g., Menjelaskan, Mengidentifikasi, Menerapkan, Membuat).
2. Activities must realistically match the specified session duration.
3. Assessment must align directly with the learning objectives.
4. Use practical Indonesian context.
5. Keep the plan realistic for the target audience.

TeachingBrief:
${briefJson}`;
}

export function getDocumentPackPrompt(briefJson: string, blueprintJson: string): string {
  return `Generate a complete learning document pack from the approved TeachingBrief and LearningBlueprint.

Required outputs:
1. studentModule in Markdown
2. facilitatorGuide in Markdown
3. worksheet in Markdown
4. quiz as JSON array of QuizItem
5. rubric as JSON array of RubricItem
6. slideOutline in Markdown
7. remedialMaterial in Markdown
8. advancedChallenge in Markdown

Rules:
- Use Bahasa Indonesia for all contents (except standard technical terms).
- Use local examples and context specified in the brief.
- Make the content highly detailed, practical, and ready to teach (do not summarize or use placeholders).
- Follow the Publisher-Grade standards for all outputs:
  * studentModule: Build a comprehensive guide. For each session in the blueprint, expand it into a full chapter containing: Hook pembuka (real-world challenge/emotion), Prinsip Inti, Decision Table (tabel keputusan taktis & mitigasi risiko), Contoh Kerja konkret, Kesalahan Umum (kesalahan -> dampak -> perbaikan), Latihan Praktis 20 Menit, dan Checklist Keberhasilan.
  * facilitatorGuide: Provide classroom setup, session timeline breakdown, pedagogical tips/analogies, open-ended discussion questions with ideal answers, and classroom troubleshooting tips.
  * worksheet: Include worksheet identity, a real-world scenario/case, step-by-step instructions, blank spaces for answers, and self-reflection questions.
  * quiz: Focus on analytical case-based questions with deep explanations.
  * rubric: Use measurable performance criteria.
  * slideOutline: Detail visual slide contents and speaker notes for each slide.
  * remedialMaterial: Simplify core concepts with alternate analogies, diagnostic questions, and guided exercises.
  * advancedChallenge: Deep industrial cases and troubleshooting for fast learners.

Return a valid JSON matching the schema below. Do not wrap the JSON in markdown code blocks.

Schema:
{
  "studentModule": "string (Markdown)",
  "facilitatorGuide": "string (Markdown)",
  "worksheet": "string (Markdown)",
  "quiz": [
    {
      "question": "string",
      "type": "multiple_choice" | "short_answer" | "case_study",
      "options": ["string"] (required if multiple_choice, else omit),
      "answer": "string",
      "explanation": "string",
      "difficulty": "basic" | "standard" | "advanced"
    }
  ],
  "rubric": [
    {
      "criterion": "string",
      "excellent": "string",
      "good": "string",
      "needsImprovement": "string",
      "weight": number (percentage integer, e.g. 30)
    }
  ],
  "slideOutline": "string (Markdown)",
  "remedialMaterial": "string (Markdown)",
  "advancedChallenge": "string (Markdown)"
}

TeachingBrief:
${briefJson}

LearningBlueprint:
${blueprintJson}`;
}

export function getAdaptationPrompt(mode: string, documentName: string, documentContent: string): string {
  return `Rewrite the selected document for the requested learner mode.

Modes:
- basic: simpler language, more analogies, guided exercises, slower pace
- standard: balanced explanation and practice (default)
- advanced: deeper cases, open-ended challenges, troubleshooting, complex terminology

Rules:
1. Keep the same learning objectives.
2. Preserve important safety notes or key principles.
3. Make examples fit the requested difficulty level.
4. Return only the revised Markdown content. Do not include any JSON wrapping or markdown block enclosures. Just output the raw rewritten text.

Requested Mode:
${mode}

Document Type:
${documentName}

Original Document Content:
${documentContent}`;
}

export function getQAPrompt(briefJson: string, blueprintJson: string, documentPackJson: string): string {
  return `Evaluate the quality of the learning document package using the Publisher-Grade Ebook Workflow rubric standards.

Scoring Rubric (Total 100 points, each aspect is max 20 points):
1. **Struktur dan Alur (Max 20)**: Urutan sesi logis, setiap bagian memiliki fungsi unik, transisi antar bagian mengalir alami.
2. **Kedalaman Isi (Max 20)**: Penjelasan konsep spesifik dan berbobot (Full Daging 80/20), ada sudut pandang editorial, bukan sekadar rangkuman artikel generik.
3. **Kepraktisan (Max 20)**: Adanya contoh nyata, latihan terpandu, mini project, validasi hasil, checklist tindakan, atau tabel keputusan.
4. **Human Touch (Max 20)**: Adanya skenario pembuka yang empatik, menyentuh pain-point atau emosi pembaca (misal: rasa ragu, takut gagal, panik), nada penyampaian bersahabat dan membimbing.
5. **Akurasi dan Produksi (Max 20)**: Konsistensi sapaan (Anda/kamu), kerapian format Markdown (heading, list, code block), bebas dari placeholder (TODO/TBD/<isi>), serta keamanan data.

Return a QAReport JSON with:
- score: number (total score from the 5 aspects above, 0-100)
- summary: string (MUST include a detailed markdown bullet-point breakdown of the 5 aspects with their respective scores and short rationales, followed by a 2-3 sentences overview summary.)
- strengths: string[] (list of positive highlights of the package)
- issues: array of issues found, each containing:
  - category: "alignment" | "difficulty" | "duration" | "clarity" | "assessment" | "rubric" | "local_relevance" | "safety"
  - severity: "low" | "medium" | "high"
  - message: string (what is wrong, be specific)
  - suggestion: string (how to fix it in detail)

Return valid JSON only. Do not wrap the JSON in markdown code blocks.

TeachingBrief:
${briefJson}

LearningBlueprint:
${blueprintJson}

DocumentPack:
${documentPackJson}`;
}

export function getDocumentChunkPrompt(documentType: string, briefJson: string, blueprintJson: string): string {
  let formatRules = "";
  let specificInstructions = "";

  if (documentType === "studentModule") {
    specificInstructions = `
Tugas: Buat "Modul Siswa" (Student Module) yang komprehensif, mendalam, dan "publisher-grade" berdasarkan TeachingBrief dan LearningBlueprint yang disetujui.

Struktur Modul Siswa yang harus Anda buat:
1. **Judul Utama & Subjudul**: Judul yang memikat sesuai dengan topik dan sasaran belajar.
2. **Kata Pengantar & Hasil Akhir**: Jelaskan secara singkat apa yang akan dikuasai dan diperoleh siswa setelah membaca modul ini (janji buku).
3. **Daftar Isi**: Tulis daftar isi modular yang merujuk pada bab/sesi di silabus.
4. **Pengembangan Bab/Sesi**: Kembangkan SETIAP sesi di LearningBlueprint's sessionPlan menjadi satu bab pembahasan lengkap. JANGAN diringkas atau disingkat. Setiap bab harus memiliki sub-elemen berikut:
   - **Hook Pembuka**: Skenario nyata, tantangan kerja, atau pengalaman sehari-hari yang menyentuh pain-point audiens sebelum masuk konsep (misal: rasa panik, cemas, ragu, atau kendala taktis).
   - **Prinsip Inti & Konsep**: Penjelasan konsep secara mendalam dengan analogi yang mudah dipahami (minimal 3 paragraf naratif, hindari bullet points kosong).
   - **Keputusan Praktis (Tabel Keputusan)**: Kapan harus memilih pendekatan A vs pendekatan B, beserta analisis risiko dan mitigasinya.
   - **Contoh Kerja / Konfigurasi / Code**: Skenario nyata (sesuai localContext) lengkap dengan langkah demi langkah, struktur folder, script/code/konfigurasi jika relevan (misal untuk IT/koding), atau draf dialog/skenario jika soft skill.
   - **Kesalahan Umum (Common Mistakes)**: Minimal 3 kesalahan yang sering terjadi, dengan format: Kesalahan -> Dampak -> Cara Perbaikan.
   - **Latihan Praktis 20 Menit**: Tugas mandiri terbimbing yang menantang dan realistis untuk menguji pemahaman.
   - **Checklist & Ringkasan**: Kriteria keberhasilan mandiri (Definition of Done) dan rangkuman 3-5 poin penting.
5. **Penutup & Sumber Resmi**: Kesimpulan akhir dengan CTA pembelajaran berikutnya, dan daftar rujukan sumber resmi (dokumentasi resmi, standard, atau project repo) yang relevan.

PENTING:
- Tulislah setiap bab dengan sangat detail dan berbobot ("Full Daging" 80% praktik, 20% teori).
- Hindari menyembunyikan langkah dengan kata-kata klise, todo, atau placeholder.
- Pastikan tidak ada "AI smell" (frasa klise seperti "di era digital ini", "seperti yang kita ketahui", "sangat penting untuk diingat").
- Gunakan sapaan langsung sesuai gaya bahasa brief. JANGAN campur aduk sapaan.`;
  } else if (documentType === "facilitatorGuide") {
    specificInstructions = `
Tugas: Buat "Panduan Fasilitator / Guru" (Facilitator Guide) yang sangat detail dan praktis berdasarkan TeachingBrief dan LearningBlueprint yang disetujui.

Panduan ini harus menuntun instruktur/guru langkah demi langkah untuk mengajar dengan sukses di kelas.
Struktur Panduan Guru:
1. **Persiapan Awal Kelas**: Hal-hal yang harus disiapkan instruktur sebelum kelas dimulai (perangkat keras/lunak, slide presentasi, bahan bacaan, setup ruangan fisik/virtual).
2. **Pedoman Pembelajaran per Sesi**: Untuk setiap sesi di LearningBlueprint's sessionPlan, buat panduan detail:
   - **Alokasi Waktu Detail (Timeline)**: Pembagian menit sesi (misal: 10 menit Hook/Pembuka, 30 menit Pembahasan/Analogi, 45 menit Latihan Terbimbing/Praktik, 5 menit Penutup/Refleksi).
   - **Taktik Penyampaian & Analogi**: Bagaimana menjelaskan konsep sulit, analogi apa yang harus dipakai agar mudah dicerna, dan cara memicu keterlibatan aktif peserta.
   - **Pertanyaan Pemantik Diskusi**: Minimal 3 pertanyaan terbuka berbobot beserta panduan jawaban ideal yang diharapkan dari siswa.
   - **Penanganan Masalah (Troubleshooting Pengajaran)**: Apa yang harus dilakukan instruktur jika siswa mengalami kebuntuan, salah ketik, error teknis, atau jika kelas terlalu pasif/sunyi.
3. **Panduan Penilaian & Pembimbingan**: Cara menilai latihan sesi, memberikan feedback yang konstruktif, serta mendampingi siswa yang mengalami kesulitan belajar.

PENTING: JANGAN menyederhanakan penjelasan. Buat panduan ini seolah ditulis oleh pendidik senior untuk guru baru agar siap mengajar tanpa keraguan.`;
  } else if (documentType === "worksheet") {
    specificInstructions = `
Tugas: Buat "Lembar Kerja Siswa" (Worksheet/LKPD) yang sangat aplikatif dan siap pakai.

Lembar Kerja harus memandu siswa mengerjakan aktivitas/studi kasus nyata secara mandiri atau kelompok.
Struktur Worksheet:
1. **Identitas Lembar Kerja**: Topik, target waktu pengerjaan, instruksi umum, dan ruang nama anggota kelompok.
2. **Studi Kasus Konkret (Skenario)**: Kasus nyata yang relevan dengan materi (menggunakan localContext) yang membutuhkan penyelesaian masalah praktis.
3. **Instruksi Pengerjaan Langkah demi Langkah**: Panduan pengerjaan yang jelas dan terstruktur.
4. **Lembar Jawab & Format Analisis**: Sediakan template tabel, formulir kosong, atau pertanyaan isian terbimbing bagi siswa untuk menuliskan jawaban/solusi mereka secara terstruktur (JANGAN biarkan kosong tanpa panduan format).
5. **Pertanyaan Refleksi Akhir**: Pertanyaan refleksi mendalam untuk mengevaluasi apa yang dipelajari siswa dari aktivitas ini dan bagaimana mengaplikasikannya di dunia nyata.

PENTING: Lembar kerja harus memicu pemikiran kritis dan pemecahan masalah secara terstruktur.`;
  } else if (documentType === "quiz") {
    formatRules = `Kembalikan output dalam format JSON Array of QuizItem. Jangan bungkus dengan markdown code block.
Schema:
[
  {
    "question": "string (soal berupa kasus/konseptual yang berbobot, berbasis skenario nyata)",
    "type": "multiple_choice" | "short_answer" | "case_study",
    "options": ["string"] (wajib diisi dengan 4 pilihan jawaban jika multiple_choice, jika jenis lain kosongkan),
    "answer": "string (jawaban benar)",
    "explanation": "string (penjelasan rinci dan edukatif mengapa jawaban tersebut benar dan mengapa pilihan lainnya salah. JANGAN hanya menulis definisi singkat, berikan analisis kasusnya)",
    "difficulty": "basic" | "standard" | "advanced"
  }
]`;
    specificInstructions = `
Tugas: Buat minimal 5-10 butir soal kuis (Quiz) yang selaras dengan tujuan pembelajaran.
Pastikan pertanyaan berbobot, menguji kemampuan analisis/aplikasi (bukan sekadar hafalan teori), dan memiliki penjelasan jawaban yang mendalam.`;
  } else if (documentType === "rubric") {
    formatRules = `Kembalikan output dalam format JSON Array of RubricItem. Jangan bungkus dengan markdown code block.
Schema:
[
  {
    "criterion": "string (aspek penilaian spesifik, misal: Keamanan Kode, Desain Responsif, Alur Logika)",
    "excellent": "string (deskripsi detail performa luar biasa / skor 90-100)",
    "good": "string (deskripsi detail performa baik / skor 70-89)",
    "needsImprovement": "string (deskripsi detail performa perlu perbaikan / skor < 70)",
    "weight": number (persentase bobot kriteria, total seluruh kriteria harus 100)
  }
]`;
    specificInstructions = `
Tugas: Buat rubrik penilaian (Rubric) yang objektif, terukur, dan selaras dengan hasil akhir/tugas akhir pada blueprint.
Kriteria penilaian harus spesifik dan mencakup aspek pemahaman konsep, kualitas eksekusi, serta penyelesaian masalah secara praktis.`;
  } else if (documentType === "slideOutline") {
    specificInstructions = `
Tugas: Buat "Outline Presentasi / Slide" (Slide Outline) dalam format Markdown.
Buat rancangan presentasi per slide (Slide 1, Slide 2, dst) untuk memandu pengajaran visual.
Every slide must contain:
- **Judul Slide**
- **Poin-poin Visual Utama** (ringkas, padat, berfokus pada visual/diagram/kata kunci)
- **Catatan Pembicara (Speaker Notes)**: Naskah/panduan kata-kata yang mendalam bagi instruktur saat menerangkan slide tersebut (tulis minimal 1-2 paragraf narasi per slide, JANGAN biarkan hanya 1 kalimat pendek).`;
  } else if (documentType === "remedialMaterial") {
    specificInstructions = `
Tugas: Buat "Materi Remedial" (Remedial Material) dalam format Markdown.
Materi ini ditujukan bagi siswa yang belum mencapai tujuan pembelajaran utama.
Fokus pada:
- Penyederhanaan konsep tersulit dengan analogi alternatif yang lebih mudah dipahami.
- Latihan mandiri yang dibimbing langkah demi langkah dengan tingkat kesulitan yang diturunkan (guided practice).
- Pertanyaan diagnosis mandiri untuk mendeteksi kesalahpahaman konsep (misconception check).`;
  } else if (documentType === "advancedChallenge") {
    specificInstructions = `
Tugas: Buat "Tantangan Lanjutan" (Advanced Challenge) dalam format Markdown.
Materi ini ditujukan bagi siswa cepat-belajar yang ingin mendalami topik lebih jauh.
Fokus pada:
- Kasus tingkat industri atau skenario kompleks dengan batasan ketat (real-world edge cases).
- Eksperimen terbuka (open-ended challenges) yang menuntut troubleshooting tingkat lanjut.
- Rujukan bacaan/materi eksternal resmi untuk pengayaan mendalam.`;
  }

  return `Generate ONLY the "${documentType}" component of the learning document pack based on the approved TeachingBrief and LearningBlueprint.

---
${specificInstructions}
---

Rules:
- Gunakan Bahasa Indonesia untuk seluruh isi naskah (kecuali istilah teknis yang tidak ada padanan Indonesianya, biarkan bahasa Inggris tanpa italic/quote sesuai panduan ebook).
- Gunakan contoh nyata, analogi, dan konteks lokal yang ditentukan dalam TeachingBrief.
- Konten HARUS ditulis secara lengkap, mendalam, "publisher-grade", bernilai tinggi, dan langsung bisa dipakai (jangan disingkat, jangan gunakan placeholder seperti TODO/TBD).
- ${formatRules || "Kembalikan dokumen dalam format Markdown bersih tanpa dibungkus JSON."}

TeachingBrief:
${briefJson}

LearningBlueprint:
${blueprintJson}`;
}

export function getApplyQAFixesPrompt(briefJson: string, blueprintJson: string, documentPackJson: string, qaReportJson: string): string {
  return `Apply the fixes suggested in the QAReport to the LearningBlueprint and DocumentPack.
You must return the completely updated LearningBlueprint and DocumentPack that incorporates all the suggested fixes.

Return a valid JSON matching the exact schema below. Do not wrap in markdown code blocks.

Schema:
{
  "blueprint": {
    "summary": "string",
    "learningObjectives": ["string"],
    "prerequisites": ["string"],
    "sessionPlan": [
      {
        "sessionTitle": "string",
        "duration": "string",
        "objectives": ["string"],
        "activities": ["string"],
        "outputs": ["string"]
      }
    ],
    "assessmentPlan": ["string"],
    "finalProject": {
      "title": "string",
      "description": "string",
      "deliverables": ["string"],
      "criteria": ["string"]
    }
  },
  "documentPack": {
    "studentModule": "string (Markdown)",
    "facilitatorGuide": "string (Markdown)",
    "worksheet": "string (Markdown)",
    "quiz": [
      {
        "question": "string",
        "type": "multiple_choice" | "short_answer" | "case_study",
        "options": ["string"],
        "answer": "string",
        "explanation": "string",
        "difficulty": "basic" | "standard" | "advanced"
      }
    ],
    "rubric": [
      {
        "criterion": "string",
        "excellent": "string",
        "good": "string",
        "needsImprovement": "string",
        "weight": number
      }
    ],
    "slideOutline": "string (Markdown)",
    "remedialMaterial": "string (Markdown)",
    "advancedChallenge": "string (Markdown)"
  }
}

TeachingBrief:
${briefJson}

LearningBlueprint:
${blueprintJson}

DocumentPack:
${documentPackJson}

QAReport (with issues to fix):
${qaReportJson}`;
}
