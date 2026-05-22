# RamuAjar AI — Product Breakdown Lengkap

**Versi:** 1.0  
**Konteks:** Draft ide produk untuk lomba #JuaraVibeCoding  
**Kategori:** AI + Education + Document Automation  
**Target Build:** Vibe coding / Google AI Studio / Gemini API  
**Tagline:** **Ramu. Sesuaikan. Validasi. Ajarkan.**

---

## 1. Ringkasan Produk

**RamuAjar AI** adalah aplikasi AI lokal untuk membantu guru, trainer, mentor bootcamp, dosen, dan instruktur **meramu paket dokumen ajar lengkap** dari satu input singkat.

Nama **RamuAjar** menekankan ide utama produk: bukan sekadar menghasilkan teks, tetapi meramu tujuan belajar, aktivitas, asesmen, rubrik, dan konteks lokal menjadi bahan ajar yang siap digunakan.

Produk ini tidak hanya membuat teks modul, tetapi menjalankan workflow desain pembelajaran:

```text
Teaching Brief → Learning Blueprint → Document Pack → Differentiation → Pedagogical QA → Export
```

Output utama:

- Modul peserta
- Panduan fasilitator
- Worksheet / LKPD
- Quiz pre-test dan post-test
- Rubrik penilaian
- Slide outline
- Materi remedial
- Challenge lanjutan
- Export Markdown / HTML / PDF

---

## 2. Problem Statement

### 2.1 Masalah Utama

Pengajar sering menghabiskan banyak waktu untuk menyusun dokumen ajar yang lengkap dan siap digunakan. Dokumen ajar yang baik tidak hanya berisi materi, tetapi juga harus memiliki:

- tujuan pembelajaran,
- alur sesi,
- aktivitas kelas,
- latihan,
- studi kasus,
- asesmen,
- rubrik,
- remedial,
- challenge lanjutan,
- format yang rapi dan mudah dibagikan.

Banyak pengajar akhirnya membuat dokumen secara manual atau menggunakan AI chatbot secara bebas. Masalahnya, hasilnya sering:

- tidak konsisten,
- terlalu generik,
- tidak sesuai level peserta,
- tidak punya struktur pedagogis,
- tidak menyertakan asesmen yang selaras,
- tidak punya rubrik yang jelas,
- sulit diekspor menjadi paket siap ajar.

### 2.2 Masalah Spesifik

AI tools umum seperti chatbot bisa membantu menulis materi, tetapi user harus tahu cara melakukan prompting. Banyak guru atau trainer tidak ingin menghabiskan waktu mengatur prompt panjang.

RamuAjar AI menyelesaikan gap ini dengan menyediakan **workflow terarah** dan **template pedagogis**.

---

## 3. Target User

### 3.1 Primary User

1. **Guru sekolah**
   - Membuat modul ajar, LKPD, quiz, rubrik.
   - Cocok untuk SMP, SMA, SMK.

2. **Trainer corporate**
   - Membuat modul pelatihan internal.
   - Contoh: cybersecurity awareness, onboarding, leadership, cloud basics.

3. **Mentor bootcamp**
   - Membuat kurikulum singkat berbasis project.
   - Contoh: DevOps bootcamp, AI bootcamp, cybersecurity bootcamp.

4. **Dosen / instruktur kampus**
   - Membuat handout, rencana pertemuan, tugas, rubrik.

### 3.2 Secondary User

- Lembaga kursus
- Komunitas teknologi
- Pemerintah daerah / dinas pendidikan
- Sekolah vokasi
- Lembaga pelatihan kerja

---

## 4. Unique Value Proposition

### UVP Pendek

> **Ramu paket dokumen ajar lengkap dalam menit, bukan hari—adaptif, tervalidasi, dan sesuai konteks Indonesia.**

### UVP Panjang

> **RamuAjar AI membantu pengajar meramu ide pembelajaran menjadi paket ajar lengkap dengan modul, aktivitas, asesmen, rubrik, dan versi diferensiasi, tanpa harus menjadi ahli prompt engineering.**

### Competitive Wedge

> **AI biasa membuat konten. RamuAjar meramu paket ajar yang siap dipakai di kelas.**

---

## 5. Positioning

RamuAjar AI berada di antara:

1. **General AI chatbot** seperti Gemini, ChatGPT, Claude.
2. **AI lesson generator** global.
3. **LMS/content platform** yang lebih fokus distribusi materi.

RamuAjar fokus pada:

- workflow dokumen ajar,
- konteks Indonesia,
- diferensiasi level peserta,
- quality checker pedagogis,
- export-ready learning package.

### Positioning Statement

> **RamuAjar AI adalah AI Instructional Design Workspace lokal yang membantu pengajar Indonesia meramu paket dokumen ajar lengkap, terdiferensiasi, tervalidasi, dan siap diekspor.**

---

## 6. Core Workflow

```text
1. User mengisi Teaching Brief
2. AI membuat Learning Blueprint
3. User review dan edit blueprint
4. AI generate Document Pack
5. User adaptasi level peserta
6. AI menjalankan Pedagogical QA
7. User export dokumen
```

---

## 7. Fitur Utama MVP

## 7.1 Teaching Brief Wizard

Form input awal untuk menangkap kebutuhan pengajaran.

### Input Field

| Field | Tipe | Contoh |
|---|---|---|
| Jenis dokumen | Select | Modul bootcamp |
| Topik | Text | Dasar Cybersecurity |
| Target peserta | Text | Siswa SMK kelas 11 |
| Durasi | Text | 2 hari, 4 jam per hari |
| Level awal | Select | Pemula |
| Output akhir | Text | Poster edukasi anti-phishing |
| Gaya bahasa | Select/Text | Santai, praktis, Bahasa Indonesia |
| Konteks lokal | Tags | WhatsApp, akun game, marketplace |
| Constraint | Textarea | Tidak terlalu teknis, banyak contoh |

### Contoh Input

```text
Saya ingin membuat modul bootcamp 2 hari tentang Dasar Cybersecurity untuk siswa SMK kelas 11.
Durasi 4 jam per hari.
Peserta pemula.
Output akhir: siswa membuat poster edukasi anti-phishing.
Gunakan bahasa Indonesia yang santai dan contoh lokal seperti WhatsApp, akun game, email palsu, dan marketplace.
```

### Output Internal

```json
{
  "documentType": "bootcamp_module",
  "topic": "Dasar Cybersecurity",
  "audience": "Siswa SMK kelas 11",
  "duration": "2 hari, 4 jam per hari",
  "level": "beginner",
  "finalOutcome": "Poster edukasi anti-phishing",
  "languageStyle": "Bahasa Indonesia, santai, praktis",
  "localContext": ["WhatsApp", "akun game", "email palsu", "marketplace"],
  "constraints": ["Tidak terlalu teknis", "Banyak contoh nyata"]
}
```

---

## 7.2 Learning Blueprint Generator

Fitur ini menghasilkan desain pembelajaran sebelum membuat dokumen penuh.

### Output

- Ringkasan program
- Tujuan pembelajaran
- Prasyarat
- Struktur sesi
- Aktivitas per sesi
- Output peserta
- Strategi asesmen
- Final project

### Contoh Output

```markdown
# Learning Blueprint

## Ringkasan
Bootcamp 2 hari untuk mengenalkan konsep dasar cybersecurity kepada siswa SMK kelas 11.

## Tujuan Pembelajaran
Setelah mengikuti sesi ini, peserta mampu:
1. Menjelaskan konsep dasar cybersecurity.
2. Mengidentifikasi contoh phishing.
3. Menerapkan password hygiene.
4. Menjelaskan manfaat MFA.
5. Membuat poster edukasi anti-phishing.

## Struktur Sesi

### Hari 1
- Pengenalan cybersecurity
- Ancaman umum dunia digital
- Studi kasus phishing WhatsApp dan email palsu
- Latihan identifikasi pesan mencurigakan

### Hari 2
- Password hygiene
- Multi-factor authentication
- Mini workshop poster edukasi
- Presentasi final project
```

---

## 7.3 Document Pack Generator

Membuat paket dokumen ajar dari blueprint yang sudah disetujui.

### Output MVP

1. Modul peserta
2. Panduan fasilitator
3. Worksheet / LKPD
4. Quiz
5. Rubrik penilaian

### Output Advanced

6. Slide outline
7. Materi remedial
8. Challenge lanjutan
9. Ringkasan WhatsApp / Google Classroom
10. LMS export

---

## 7.4 Differentiation Engine

Mengubah dokumen menjadi beberapa versi berdasarkan kemampuan peserta.

### Mode Adaptasi

| Mode | Deskripsi |
|---|---|
| Basic | Bahasa sederhana, banyak analogi, latihan terpandu |
| Standard | Penjelasan seimbang, latihan praktis |
| Advanced | Studi kasus lebih kompleks, challenge terbuka |
| Short Session | Disingkat untuk sesi 60–90 menit |
| Bootcamp Mode | Lebih banyak hands-on dan project |
| School Mode | Lebih terstruktur seperti modul sekolah |
| Corporate Mode | Lebih fokus risiko bisnis dan kebijakan internal |

### Contoh Adaptasi

Topik: Password Hygiene

**Basic:**

> Password itu seperti kunci rumah digital. Kalau kuncinya mudah ditebak, orang lain bisa masuk ke akun kita.

**Standard:**

> Password yang kuat sebaiknya panjang, unik untuk setiap akun, dan tidak memakai informasi pribadi seperti tanggal lahir.

**Advanced:**

> Password hygiene melibatkan password manager, unique credential per service, MFA, dan mitigasi credential stuffing.

---

## 7.5 Pedagogical QA Checker

Fitur validasi kualitas dokumen.

### Hal yang Dicek

| Area | Penjelasan |
|---|---|
| Objective Alignment | Apakah asesmen sesuai tujuan pembelajaran? |
| Difficulty Fit | Apakah materi sesuai level peserta? |
| Time Realism | Apakah aktivitas realistis untuk durasi? |
| Clarity | Apakah istilah teknis dijelaskan? |
| Rubric Quality | Apakah rubrik punya indikator terukur? |
| Completeness | Apakah dokumen punya pembuka, inti, latihan, refleksi? |
| Local Relevance | Apakah contoh sesuai konteks Indonesia? |
| Safety | Apakah materi aman untuk usia peserta? |

### Output QA

```json
{
  "score": 86,
  "summary": "Dokumen sudah cukup kuat, tetapi aktivitas final project perlu disederhanakan agar sesuai durasi.",
  "strengths": [
    "Tujuan pembelajaran jelas",
    "Contoh lokal relevan",
    "Quiz sesuai dengan materi utama"
  ],
  "issues": [
    {
      "category": "duration",
      "severity": "medium",
      "message": "Final project terlalu luas untuk durasi 90 menit.",
      "suggestion": "Batasi output menjadi poster 1 halaman dengan 3 pesan utama."
    },
    {
      "category": "rubric",
      "severity": "low",
      "message": "Rubrik kreativitas belum memiliki indikator terukur.",
      "suggestion": "Tambahkan indikator: pesan jelas, visual relevan, ajakan tindakan."
    }
  ]
}
```

---

## 7.6 Export Center

### Format MVP

- Markdown
- HTML preview
- Browser print to PDF
- Copy to clipboard

### Format Lanjutan

- PDF generator server-side
- Google Docs export
- Moodle quiz CSV
- Google Classroom package
- Slide deck auto-generator

---

## 8. Information Architecture / Pages

```text
/
  Landing Page

/app
  Dashboard Project

/app/new
  Teaching Brief Wizard

/app/project/:id/blueprint
  Learning Blueprint Preview + Edit

/app/project/:id/documents
  Document Pack Tabs

/app/project/:id/adapt
  Differentiation Engine

/app/project/:id/qa
  Pedagogical QA Report

/app/project/:id/export
  Export Center
```

---

## 9. UI Component Breakdown

```text
/components
  layout/
    AppShell.tsx
    Sidebar.tsx
    Topbar.tsx

  brief/
    TeachingBriefForm.tsx
    LocalContextTags.tsx
    BriefPreviewCard.tsx

  blueprint/
    BlueprintPreview.tsx
    ObjectiveList.tsx
    SessionPlanCard.tsx
    AssessmentPlanCard.tsx

  documents/
    DocumentPackTabs.tsx
    MarkdownEditor.tsx
    DocumentPreview.tsx
    QuizPreview.tsx
    RubricTable.tsx

  adapt/
    DifferentiationPanel.tsx
    AdaptationModeSelector.tsx
    AdaptedOutputPreview.tsx

  qa/
    QualityScoreCard.tsx
    IssueList.tsx
    SuggestionCard.tsx

  export/
    ExportPanel.tsx
    DownloadMarkdownButton.tsx
    PrintPdfButton.tsx
```

---

## 10. Architecture MVP

```text
┌─────────────────────────────┐
│        User Browser          │
│  React / Next.js Frontend    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      App Server / API        │
│  Node.js Server-side Runtime │
└──────────────┬──────────────┘
               │
       ┌───────┼────────────────────────┐
       ▼       ▼                        ▼
┌─────────┐ ┌──────────────┐ ┌────────────────┐
│ Gemini  │ │ Prompt       │ │ Document       │
│ API     │ │ Orchestrator │ │ Formatter      │
└─────────┘ └──────────────┘ └────────────────┘
       │              │                 │
       ▼              ▼                 ▼
┌─────────────────────────────────────────────┐
│        Project Data / Firestore              │
│ Brief, Blueprint, Document Pack, QA Report   │
└─────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────┐
│ Export Layer                 │
│ Markdown / HTML / PDF        │
└─────────────────────────────┘
```

---

## 11. Recommended Tech Stack

### MVP Stack

```text
Frontend       : React / Next.js
Styling        : Tailwind CSS + shadcn/ui
AI             : Gemini API
Runtime        : Node.js server-side API route
Storage        : localStorage or Firestore
Export         : Markdown + HTML print
Deployment     : Google AI Studio / Firebase Hosting / Vercel
```

### Production Stack

```text
Auth           : Firebase Auth
Database       : Firestore
File Storage   : Firebase Storage
AI             : Gemini API / Vertex AI
PDF Generation : Puppeteer / Playwright
Logging        : Google Cloud Logging
Queue          : Cloud Tasks
```

---

## 12. Folder Structure Next.js

```text
ramuajar-ai/
  app/
    page.tsx
    layout.tsx
    app/
      page.tsx
      new/
        page.tsx
      project/
        [id]/
          blueprint/
            page.tsx
          documents/
            page.tsx
          adapt/
            page.tsx
          qa/
            page.tsx
          export/
            page.tsx
    api/
      generate-brief/
        route.ts
      generate-blueprint/
        route.ts
      generate-document-pack/
        route.ts
      adapt-document/
        route.ts
      quality-check/
        route.ts
      export-markdown/
        route.ts

  components/
    brief/
    blueprint/
    documents/
    adapt/
    qa/
    export/
    layout/
    ui/

  lib/
    ai/
      geminiClient.ts
      promptOrchestrator.ts
      prompts/
        normalizeBriefPrompt.ts
        blueprintPrompt.ts
        documentPackPrompt.ts
        adaptationPrompt.ts
        qaPrompt.ts
      schemas/
        teachingBriefSchema.ts
        blueprintSchema.ts
        documentPackSchema.ts
        qaReportSchema.ts
    storage/
      projectStore.ts
    export/
      markdownExporter.ts
      htmlExporter.ts

  types/
    project.ts
    teaching.ts

  public/
    examples/
```

---

## 13. Data Model

## 13.1 Project

```ts
type Project = {
  id: string;
  title: string;
  ownerId?: string;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "blueprint_ready" | "documents_ready" | "qa_ready" | "exported";
  brief: TeachingBrief;
  blueprint?: LearningBlueprint;
  documentPack?: DocumentPack;
  adaptedVersions?: AdaptedVersion[];
  qaReport?: QAReport;
};
```

## 13.2 TeachingBrief

```ts
type TeachingBrief = {
  documentType:
    | "school_module"
    | "bootcamp_module"
    | "corporate_training"
    | "workshop"
    | "coursebook";
  topic: string;
  audience: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  finalOutcome: string;
  languageStyle: string;
  localContext: string[];
  constraints?: string[];
};
```

## 13.3 LearningBlueprint

```ts
type LearningBlueprint = {
  summary: string;
  learningObjectives: string[];
  prerequisites: string[];
  sessionPlan: SessionPlan[];
  assessmentPlan: string[];
  finalProject: FinalProject;
};

type SessionPlan = {
  sessionTitle: string;
  duration: string;
  objectives: string[];
  activities: string[];
  outputs: string[];
};

type FinalProject = {
  title: string;
  description: string;
  deliverables: string[];
  criteria: string[];
};
```

## 13.4 DocumentPack

```ts
type DocumentPack = {
  studentModule: string;
  facilitatorGuide: string;
  worksheet: string;
  quiz: QuizItem[];
  rubric: RubricItem[];
  slideOutline?: string;
  remedialMaterial?: string;
  advancedChallenge?: string;
};
```

## 13.5 QuizItem

```ts
type QuizItem = {
  question: string;
  type: "multiple_choice" | "short_answer" | "case_study";
  options?: string[];
  answer: string;
  explanation: string;
  difficulty: "basic" | "standard" | "advanced";
};
```

## 13.6 RubricItem

```ts
type RubricItem = {
  criterion: string;
  excellent: string;
  good: string;
  needsImprovement: string;
  weight: number;
};
```

## 13.7 QAReport

```ts
type QAReport = {
  score: number;
  summary: string;
  strengths: string[];
  issues: QAIssue[];
};

type QAIssue = {
  category:
    | "alignment"
    | "difficulty"
    | "duration"
    | "clarity"
    | "assessment"
    | "rubric"
    | "local_relevance"
    | "safety";
  severity: "low" | "medium" | "high";
  message: string;
  suggestion: string;
};
```

---

## 14. API Endpoint Design

## 14.1 POST /api/generate-brief

### Purpose

Mengubah raw user request menjadi `TeachingBrief` terstruktur.

### Request

```json
{
  "rawInput": "Saya ingin membuat modul bootcamp 2 hari tentang Dasar Cybersecurity untuk siswa SMK..."
}
```

### Response

```json
{
  "brief": {
    "documentType": "bootcamp_module",
    "topic": "Dasar Cybersecurity",
    "audience": "Siswa SMK kelas 11",
    "duration": "2 hari, 4 jam per hari",
    "level": "beginner",
    "finalOutcome": "Poster edukasi anti-phishing",
    "languageStyle": "Bahasa Indonesia, santai, praktis",
    "localContext": ["WhatsApp", "akun game", "email palsu", "marketplace"]
  }
}
```

---

## 14.2 POST /api/generate-blueprint

### Purpose

Generate `LearningBlueprint` dari `TeachingBrief`.

### Request

```json
{
  "brief": {}
}
```

### Response

```json
{
  "blueprint": {}
}
```

---

## 14.3 POST /api/generate-document-pack

### Purpose

Generate dokumen ajar lengkap dari brief dan blueprint.

### Request

```json
{
  "brief": {},
  "blueprint": {}
}
```

### Response

```json
{
  "documentPack": {}
}
```

---

## 14.4 POST /api/adapt-document

### Purpose

Mengubah dokumen menjadi versi tertentu.

### Request

```json
{
  "document": "markdown content",
  "mode": "basic",
  "brief": {},
  "blueprint": {}
}
```

### Response

```json
{
  "adaptedDocument": "markdown content"
}
```

---

## 14.5 POST /api/quality-check

### Purpose

Mengevaluasi kualitas dokumen ajar.

### Request

```json
{
  "brief": {},
  "blueprint": {},
  "documentPack": {}
}
```

### Response

```json
{
  "qaReport": {
    "score": 86,
    "summary": "Dokumen sudah baik, tetapi perlu penyederhanaan final project.",
    "strengths": [],
    "issues": []
  }
}
```

---

## 15. Prompt Pipeline

Jangan membuat satu prompt besar. Pecah menjadi beberapa tahap agar hasil lebih stabil.

---

## 15.1 System Prompt

```text
You are RamuAjar AI, an expert instructional design assistant for Indonesian educators, trainers, and bootcamp mentors.
Your job is to help users "meramu bahan ajar": create complete, practical, locally relevant, and pedagogically aligned learning document packages.
Always prioritize:
1. Clear learning objectives.
2. Practical activities.
3. Assessment alignment.
4. Appropriate difficulty for the target audience.
5. Indonesian local context when requested.
6. Structured output that can be exported.
Do not invent factual claims that require verification.
When unsure, mark content as needing educator review.
```

---

## 15.2 Normalize Brief Prompt

```text
Convert the user's raw teaching request into a structured TeachingBrief JSON.
Do not generate the full learning module yet.
Infer missing fields only when reasonable.
Use Indonesian language values when appropriate.
Return valid JSON only.

Schema:
{
  "documentType": "school_module | bootcamp_module | corporate_training | workshop | coursebook",
  "topic": "string",
  "audience": "string",
  "duration": "string",
  "level": "beginner | intermediate | advanced",
  "finalOutcome": "string",
  "languageStyle": "string",
  "localContext": ["string"],
  "constraints": ["string"]
}

User request:
{{rawInput}}
```

---

## 15.3 Blueprint Prompt

```text
Create a LearningBlueprint based on the TeachingBrief.
The blueprint must include:
- summary
- learning objectives
- prerequisites
- session plan
- assessment plan
- final project

Rules:
1. Objectives must be measurable.
2. Activities must match the duration.
3. Assessment must align with objectives.
4. Use practical Indonesian context.
5. Keep the plan realistic for the target audience.

Return valid JSON only.

TeachingBrief:
{{brief}}
```

---

## 15.4 Document Pack Prompt

```text
Generate a complete learning document pack from the approved TeachingBrief and LearningBlueprint.

Required outputs:
1. studentModule in Markdown
2. facilitatorGuide in Markdown
3. worksheet in Markdown
4. quiz as JSON array
5. rubric as JSON array
6. slideOutline in Markdown
7. remedialMaterial in Markdown
8. advancedChallenge in Markdown

Rules:
- Use Bahasa Indonesia.
- Use local examples from the brief.
- Make the content practical and ready to teach.
- Keep the content suitable for the target audience.
- Do not include unsupported factual claims.
- If content needs educator review, mark it clearly.

Return valid JSON only.

TeachingBrief:
{{brief}}

LearningBlueprint:
{{blueprint}}
```

---

## 15.5 Adaptation Prompt

```text
Rewrite the selected document for the requested learner mode.

Modes:
- basic: simpler language, more analogy, guided exercises
- standard: balanced explanation and practice
- advanced: deeper cases, open-ended challenge, troubleshooting
- short_session: compressed version for limited time
- bootcamp: more hands-on and project-focused
- school: more formal and structured for classroom use
- corporate: risk-based and workplace-oriented

Rules:
1. Keep the same learning objectives.
2. Preserve important safety notes.
3. Make examples fit the audience.
4. Return only Markdown content.

Mode:
{{mode}}

Document:
{{document}}
```

---

## 15.6 QA Prompt

```text
Evaluate the learning document package.

Check these areas:
1. Objective-assessment alignment.
2. Difficulty fit for the target audience.
3. Time realism.
4. Clarity of technical terms.
5. Rubric quality.
6. Document completeness.
7. Local relevance.
8. Safety and age appropriateness.

Return a QAReport JSON with:
- score 0-100
- summary
- strengths
- issues

Each issue must include:
- category
- severity
- message
- suggestion

TeachingBrief:
{{brief}}

LearningBlueprint:
{{blueprint}}

DocumentPack:
{{documentPack}}
```

---

## 16. Example Seed Project

Gunakan seed ini untuk demo lomba.

### Input Demo

```text
Saya ingin membuat modul bootcamp 2 hari tentang Dasar Cybersecurity untuk siswa SMK kelas 11.
Durasi 4 jam per hari.
Peserta pemula.
Output akhir: siswa membuat poster edukasi anti-phishing.
Gunakan bahasa Indonesia yang santai dan contoh lokal seperti WhatsApp, akun game, email palsu, dan marketplace.
```

### Demo Flow

1. Masukkan input ke Teaching Brief Wizard.
2. Klik **Generate Blueprint**.
3. Tampilkan tujuan pembelajaran dan struktur sesi.
4. Klik **Generate Document Pack**.
5. Tampilkan tab:
   - Modul Peserta
   - Panduan Fasilitator
   - Worksheet
   - Quiz
   - Rubrik
6. Klik **Adapt to Basic**.
7. Tampilkan versi lebih sederhana.
8. Klik **Run Pedagogical QA**.
9. Tampilkan score dan rekomendasi.
10. Klik **Export Markdown/PDF**.

---

## 17. Landing Page Copy

### Hero

```text
Ramu paket ajar lengkap dalam menit.
Adaptif, tervalidasi, dan siap diajarkan.
```

### Subheadline

```text
RamuAjar AI membantu guru, trainer, dan mentor bootcamp meramu ide pengajaran menjadi paket dokumen ajar lengkap: modul, worksheet, quiz, rubrik, panduan fasilitator, dan versi diferensiasi level peserta.
```

### CTA

```text
Mulai Ramu Modul
Lihat Contoh Demo
```

### Feature Section

#### Ramu

Buat modul, quiz, rubrik, worksheet, dan panduan fasilitator dari satu brief.

#### Adapt

Sesuaikan materi untuk level basic, standard, advanced, sekolah, bootcamp, atau corporate training.

#### Validate

Cek kualitas pedagogis: alignment, durasi, kesulitan, rubrik, dan relevansi lokal.

#### Export

Export ke Markdown, HTML print, PDF, atau copy ke LMS.

---

## 18. Design Direction

### Visual Style

- Clean, modern, education-tech, dengan rasa lokal yang ramah.
- Warna utama: hijau kebiruan atau biru lembut dengan aksen hangat.
- Banyak card, tabs, progress stepper.
- Tone: profesional tapi ramah.

### UI Pattern

- Wizard form untuk input.
- Stepper untuk workflow.
- Tabs untuk dokumen.
- Score card untuk QA.
- Side panel untuk adaptasi.

### Suggested Screens

1. Landing Page
2. New Project Wizard
3. Blueprint Preview
4. Document Pack Workspace
5. Adaptation Panel
6. QA Report
7. Export Center

---

## 19. MVP Backlog

## Must Have

- [ ] Landing page sederhana
- [ ] Teaching Brief form
- [ ] Generate brief dari raw input
- [ ] Generate blueprint
- [ ] Generate document pack
- [ ] Preview dokumen dengan tabs
- [ ] Adaptasi basic / standard / advanced
- [ ] QA checker
- [ ] Export Markdown
- [ ] Browser print to PDF
- [ ] Sample project demo

## Should Have

- [ ] Save project ke localStorage
- [ ] Edit blueprint sebelum generate dokumen
- [ ] Copy document to clipboard
- [ ] Loading state per AI step
- [ ] Error handling API
- [ ] Regenerate per section

## Could Have

- [ ] Firebase Auth
- [ ] Firestore project storage
- [ ] PDF server-side generation
- [ ] Upload materi lama
- [ ] Slide deck generator
- [ ] Moodle quiz export

## Won't Have for MVP

- [ ] Marketplace modul
- [ ] Real-time collaboration
- [ ] Native mobile app
- [ ] Full LMS
- [ ] Complex permission system
- [ ] Payment system

---

## 20. Acceptance Criteria MVP

### Teaching Brief Wizard

- User bisa memasukkan raw prompt atau mengisi form.
- Sistem menghasilkan brief terstruktur.
- User bisa mengedit brief sebelum lanjut.

### Blueprint Generator

- Sistem menghasilkan tujuan pembelajaran yang measurable.
- Sistem menghasilkan minimal 2 sesi pembelajaran.
- Sistem menghasilkan final project dan strategi asesmen.

### Document Pack Generator

- Sistem menghasilkan minimal:
  - modul peserta,
  - panduan fasilitator,
  - worksheet,
  - quiz,
  - rubrik.

### Differentiation Engine

- User bisa memilih Basic / Standard / Advanced.
- Sistem menghasilkan versi adaptasi tanpa mengubah tujuan pembelajaran utama.

### QA Checker

- Sistem menghasilkan score 0–100.
- Sistem memberikan minimal 3 strengths atau issues.
- Setiap issue punya suggestion yang actionable.

### Export

- User bisa download Markdown.
- User bisa print halaman sebagai PDF.

---

## 21. Risk & Mitigation

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Output AI terlalu generik | Demo lemah | Gunakan prompt dengan local context wajib |
| Hallucination | Kepercayaan turun | Tambahkan QA dan educator review note |
| Scope terlalu luas | Tidak selesai | Fokus generate → adapt → validate → export |
| API response tidak valid JSON | App error | Gunakan schema validation dan retry |
| Dokumen terlalu panjang | UI berat | Generate per section atau pakai tabs |
| Terlihat seperti wrapper AI | Nilai produk turun | Tampilkan workflow, schema, QA score, export |

---

## 22. Differentiator Utama

### 22.1 Workflow, Bukan Chatbot

RamuAjar tidak memberikan blank chat box. User diarahkan lewat workflow.

### 22.2 Paket Lengkap, Bukan Satu Dokumen

Output bukan hanya lesson plan, tetapi dokumen ajar lengkap.

### 22.3 Adaptasi Level

Satu materi bisa menjadi basic, standard, dan advanced.

### 22.4 Pedagogical QA

Ada quality checker untuk memastikan dokumen siap diajarkan.

### 22.5 Indonesia-first

Bahasa, konteks, studi kasus, dan format disesuaikan dengan kebutuhan lokal.

---

## 23. Demo Script 3 Menit

### Opening — 20 detik

```text
Banyak guru dan trainer menghabiskan waktu berjam-jam menyusun modul ajar, quiz, rubrik, dan worksheet. AI memang bisa membantu, tetapi kebanyakan masih berupa chatbot kosong yang membutuhkan prompt panjang.
```

### Problem — 30 detik

```text
Masalahnya bukan hanya menulis materi. Dokumen ajar harus punya tujuan pembelajaran, aktivitas, asesmen, rubrik, dan level yang sesuai peserta. Kalau tidak, materi sulit langsung dipakai di kelas.
```

### Solution — 30 detik

```text
RamuAjar AI membantu pengajar meramu ide pengajaran menjadi paket dokumen ajar lengkap. Workflow-nya sederhana: generate blueprint, generate module pack, adapt level, quality check, lalu export.
```

### Demo — 90 detik

```text
Saya masukkan contoh: bootcamp Dasar Cybersecurity untuk siswa SMK selama 2 hari. RamuAjar meramu blueprint, lalu menghasilkan modul peserta, panduan fasilitator, worksheet, quiz, dan rubrik. Setelah itu saya bisa membuat versi Basic untuk peserta pemula dan menjalankan Pedagogical QA untuk melihat apakah dokumennya sudah siap diajarkan.
```

### Closing — 30 detik

```text
RamuAjar bukan sekadar AI writer. Ini adalah instructional design workspace untuk pengajar Indonesia: ramu, sesuaikan, validasi, dan ajarkan.
```

---

## 24. Pitch Deck Outline

### Slide 1 — Title

RamuAjar AI  
**Ramu Paket Ajar Siap Pakai untuk Indonesia**

### Slide 2 — Problem

Pengajar menghabiskan waktu besar untuk membuat modul, quiz, rubrik, worksheet, dan panduan sesi.

### Slide 3 — Why Existing Tools Are Not Enough

Chatbot terlalu bebas. Lesson generator terlalu sempit. LMS lebih fokus distribusi.

### Slide 4 — Solution

RamuAjar AI: workflow ramu, adaptasi, validasi, export.

### Slide 5 — Product Demo Flow

Teaching Brief → Blueprint → Document Pack → Differentiation → QA → Export

### Slide 6 — Key Features

- Teaching Brief Wizard
- Document Pack Generator
- Differentiation Engine
- Pedagogical QA
- Export Center

### Slide 7 — Architecture

React/Next.js → API Route → Gemini → Prompt Orchestrator → Storage → Export

### Slide 8 — Differentiation

Indonesia-first, module-pack, QA layer, multi-audience.

### Slide 9 — Impact

Menghemat waktu guru/trainer, meningkatkan kualitas dokumen, mendukung pembelajaran adaptif.

### Slide 10 — Closing

**Ramu. Sesuaikan. Validasi. Ajarkan.**

---

## 25. Build Plan 7 Hari

### Hari 1 — Setup & UI Skeleton

- Setup project Next.js
- Install Tailwind + shadcn/ui
- Buat layout, sidebar, stepper
- Buat landing page

### Hari 2 — Teaching Brief Wizard

- Buat form input
- Buat raw prompt input
- Buat endpoint normalize brief
- Simpan state project

### Hari 3 — Blueprint Generator

- Buat endpoint generate blueprint
- Buat blueprint preview
- Buat edit blueprint sederhana

### Hari 4 — Document Pack Generator

- Buat endpoint generate document pack
- Buat tabs dokumen
- Render Markdown
- Render quiz dan rubrik

### Hari 5 — Differentiation Engine

- Buat mode Basic / Standard / Advanced
- Buat endpoint adapt document
- Simpan adapted version

### Hari 6 — QA Checker & Export

- Buat endpoint quality check
- Render QA score dan issues
- Buat export Markdown
- Buat print to PDF

### Hari 7 — Polish Demo

- Tambahkan sample project
- Perbaiki loading state
- Perbaiki error handling
- Buat demo script
- Rekam demo / siapkan presentasi

---

## 26. Example Output Structure

### Student Module

```markdown
# Modul Peserta: Dasar Cybersecurity

## Ringkasan
Modul ini membantu siswa SMK memahami ancaman digital dasar dan cara melindungi akun pribadi.

## Tujuan Pembelajaran
...

## Materi 1: Apa Itu Cybersecurity?
...

## Studi Kasus: Pesan WhatsApp Mencurigakan
...

## Latihan
...

## Refleksi
...
```

### Facilitator Guide

```markdown
# Panduan Fasilitator

## Persiapan
- Laptop/proyektor
- Contoh pesan phishing
- Template poster

## Alur Sesi
...

## Tips Mengajar
...

## Pertanyaan Diskusi
...
```

### Worksheet

```markdown
# Worksheet: Deteksi Phishing

## Instruksi
Baca 3 contoh pesan berikut. Tandai bagian yang mencurigakan.

## Tugas
1. Identifikasi tanda phishing.
2. Jelaskan alasannya.
3. Tulis respon aman yang sebaiknya dilakukan.
```

### Quiz

```json
[
  {
    "question": "Apa tujuan utama phishing?",
    "type": "multiple_choice",
    "options": [
      "Membantu pengguna login",
      "Mencuri informasi sensitif",
      "Mempercepat internet",
      "Menghapus virus"
    ],
    "answer": "Mencuri informasi sensitif",
    "explanation": "Phishing bertujuan menipu korban agar memberikan data seperti password atau OTP.",
    "difficulty": "basic"
  }
]
```

### Rubric

```json
[
  {
    "criterion": "Kejelasan Pesan",
    "excellent": "Pesan sangat jelas, ringkas, dan mudah dipahami.",
    "good": "Pesan cukup jelas tetapi masih bisa diringkas.",
    "needsImprovement": "Pesan membingungkan atau terlalu panjang.",
    "weight": 30
  }
]
```

---

## 27. Metrics of Success

### Product Metrics

- Waktu meramu paket dokumen < 5 menit.
- Minimal 5 jenis output dalam satu project.
- QA score tampil jelas.
- User bisa export dokumen tanpa setup tambahan.

### Demo Metrics

- Workflow selesai dalam 3 menit.
- Output terlihat konkret dan siap digunakan.
- Juri bisa memahami pembeda dalam 30 detik.

### Impact Metrics

- Mengurangi waktu persiapan dokumen ajar.
- Membantu pengajar membuat materi yang lebih adaptif.
- Meningkatkan konsistensi antara tujuan, aktivitas, asesmen, dan rubrik.

---

## 28. Future Roadmap

### Phase 1 — MVP

Ramu, adaptasi, validasi, export.

### Phase 2 — Upload Existing Material

User upload materi lama, RamuAjar meramunya ulang menjadi paket dokumen baru.

### Phase 3 — Curriculum Mapper

Mapping ke capaian pembelajaran / kompetensi / kurikulum.

### Phase 4 — LMS Integration

Export ke Google Classroom, Moodle, Canvas, atau LMS custom.

### Phase 5 — Organization Workspace

Tim sekolah/training bisa membuat library modul bersama.

---

## 29. Security & Responsible AI Notes

### API Key Safety

- Jangan panggil Gemini API langsung dari client untuk produksi.
- Gunakan server-side API route.
- Simpan API key di environment variable.

### Content Safety

- Tampilkan catatan bahwa hasil AI perlu ditinjau pengajar.
- Untuk topik teknis seperti cybersecurity, hindari instruksi ofensif.
- Fokus pada edukasi defensif dan awareness.

### Data Privacy

- Jangan meminta data pribadi siswa.
- Jika ada upload dokumen, beri peringatan untuk menghapus informasi sensitif.

### Hallucination Mitigation

- Gunakan QA checker.
- Tandai klaim faktual yang perlu verifikasi.
- Buat mode “educator review required”.

---

## 30. Final One-liner

> **RamuAjar AI mengubah Gemini dari text generator menjadi learning-design engine untuk meramu paket dokumen ajar Indonesia yang lengkap, adaptif, tervalidasi, dan siap diajarkan.**

---

## 31. Recommended First Build Prompt for Vibe Coding

Gunakan prompt ini untuk mulai membuat aplikasi:

```text
Build a modern web app called RamuAjar AI.

RamuAjar AI is an AI instructional design workspace for Indonesian educators. It helps users turn a teaching brief into a complete, locally relevant learning document package. The brand idea is "meramu bahan ajar": combining learning goals, activities, assessment, rubrics, and local context into ready-to-teach materials.

Core workflow:
1. Teaching Brief Wizard
2. Learning Blueprint Generator
3. Document Pack Generator
4. Differentiation Engine
5. Pedagogical QA Checker
6. Export Center

Tech requirements:
- Use React or Next.js.
- Use Tailwind CSS.
- Use clean card-based UI.
- Use a stepper to show the workflow.
- Use tabs to preview document outputs.
- Use API routes for AI calls.
- Store project state in localStorage for MVP.
- Use mock AI responses first, but structure the code so Gemini API can be connected later.

Main pages:
- Landing page
- New project page
- Blueprint preview page
- Document pack workspace
- QA report page
- Export page

Important features:
- User can enter raw teaching request.
- App converts it into structured TeachingBrief.
- App generates LearningBlueprint.
- App generates DocumentPack with student module, facilitator guide, worksheet, quiz, and rubric.
- App can adapt the module to Basic, Standard, and Advanced levels.
- App can run quality check and show score, strengths, issues, and suggestions.
- App can export Markdown and print to PDF.

Use this sample input for the demo:
"Saya ingin membuat modul bootcamp 2 hari tentang Dasar Cybersecurity untuk siswa SMK kelas 11. Durasi 4 jam per hari. Peserta pemula. Output akhir: siswa membuat poster edukasi anti-phishing. Gunakan bahasa Indonesia yang santai dan contoh lokal seperti WhatsApp, akun game, email palsu, dan marketplace."

Design style:
- Modern Indonesian edtech SaaS
- Clean white background
- Soft teal/blue accent with one warm local accent color
- Rounded cards
- Clear typography
- Professional but friendly

Do not build authentication or payment yet.
Focus on a polished MVP demo.
```

---

## 32. Recommended Gemini Integration Prompt

Gunakan prompt ini setelah UI MVP jadi:

```text
Now connect RamuAjar AI to Gemini API using server-side API routes.

Create these endpoints:
- POST /api/generate-brief
- POST /api/generate-blueprint
- POST /api/generate-document-pack
- POST /api/adapt-document
- POST /api/quality-check

Requirements:
- API key must be stored in environment variable.
- Do not expose API key to browser.
- Each endpoint should validate request body.
- Each endpoint should return structured JSON.
- Add error handling when Gemini returns invalid JSON.
- Add loading and error states in the UI.
- Keep prompts in separate files under /lib/ai/prompts.
- Keep TypeScript types under /types.
```

---

## 33. Recommended Polish Prompt

Gunakan prompt ini untuk mempercantik hasil akhir:

```text
Polish the RamuAjar AI MVP for a hackathon demo.

Improve:
- Landing page hero copy
- Workflow stepper
- Loading states
- Empty states
- Error states
- Document preview tabs
- QA score visualization
- Export buttons
- Sample project button

Add a seeded demo project for:
Dasar Cybersecurity untuk siswa SMK kelas 11.

Make the app feel like a real SaaS product, not a prototype.
Keep the brand voice local, memorable, and practical: "ramu paket ajar", "siap diajarkan", and "sesuai konteks Indonesia".
```

---

## 34. Recommended Judging Narrative

Tekankan narasi ini saat presentasi:

1. Masalah nyata: pengajar overload membuat dokumen ajar.
2. AI biasa belum cukup karena butuh prompt engineering.
3. RamuAjar mengubah AI menjadi workflow untuk meramu desain pembelajaran.
4. Produk menghasilkan paket lengkap, bukan satu teks.
5. Ada adaptasi level peserta.
6. Ada QA pedagogis.
7. Ada konteks Indonesia.
8. Output bisa langsung dipakai.

---

## 35. Final Build Scope

Untuk lomba, jangan membangun semuanya. Fokus pada demo yang terasa selesai:

```text
Input → Blueprint → Modul → Quiz → Rubrik → Adaptasi Basic → QA Score → Export
```

Itu sudah cukup untuk menunjukkan value, AI workflow, dan diferensiasi produk.
