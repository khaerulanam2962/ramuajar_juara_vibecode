// src/app/api/generate-document-pack/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getDocumentPackPrompt } from "@/lib/ai/prompts";
import { SEED_DOCUMENT_PACK } from "@/lib/storage/mockData";
import { TeachingBrief, LearningBlueprint } from "@/types/project";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { brief, blueprint, customApiKey } = body as { 
      brief: TeachingBrief; 
      blueprint: LearningBlueprint; 
      customApiKey?: string;
    };

    if (!brief || !blueprint) {
      return NextResponse.json({ error: "Missing brief or blueprint data" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log("No API Key detected. Using smart mock fallback for Document Pack.");
      
      const topic = brief.topic.toLowerCase();
      const isCyber = topic.includes("cyber") || topic.includes("siber") || topic.includes("keamanan");
      
      if (isCyber) {
        return NextResponse.json({ documentPack: SEED_DOCUMENT_PACK });
      }

      // Generate a generic document pack based on the topic
      const genericPack = {
        studentModule: `# Modul Belajar: ${brief.topic}

Modul ini disusun untuk mempermudah pemahaman mengenai **${brief.topic}** bagi **${brief.audience}**.

## 1. Pengenalan ${brief.topic}
Konsep dasar mengenai ${brief.topic} sangat penting dipelajari di era digital saat ini. Hal ini mencakup pemahaman teoretis serta cara kerja elemen-elemen penting di dalamnya.

## 2. Implementasi dan Penerapan
Penerapan praktis ${brief.topic} meliputi:
- Memahami alur kerja dasar.
- Menganalisis studi kasus nyata di Indonesia.
- Melakukan eksperimen/latihan kecil.

## 3. Kesimpulan & Langkah Selanjutnya
Setelah mempelajari bab ini, diharapkan peserta mampu melakukan integrasi teori ke dalam pembuatan proyek akhir: **${brief.finalOutcome || "Proyek Mandiri"}**.
`,
        facilitatorGuide: `# Panduan Instruktur: Pengajaran Kelas ${brief.topic}

Panduan ini berisi peta alur pengajaran agar instruktur dapat menyampaikan materi secara interaktif.

## Persiapan Kelas:
1. Pastikan proyektor dan slide siap.
2. Siapkan studi kasus lokal sebagai bahan diskusi pemantik.

## Langkah Sesi:
- **Pendahuluan (25%)**: Ajukan pertanyaan pemantik mengenai ${brief.topic} di sekitar kita.
- **Teori & Contoh (35%)**: Jelaskan konsep utama dan tampilkan contoh yang dekat dengan keseharian siswa.
- **Praktik Mandiri/Kelompok (40%)**: Pandu siswa mengerjakan tugas di lembar kerja.
`,
        worksheet: `# Worksheet Peserta: Studi Kasus ${brief.topic}

**Nama Anggota Kelompok:**
1. \`________________________\`
2. \`________________________\`

---

## Instruksi Pengerjaan:
Lakukan analisis terhadap masalah di bawah ini, lalu diskusikan dalam kelompok!

### Studi Kasus:
Sebutkan satu masalah nyata di lingkungan sekitarmu yang berhubungan dengan **${brief.topic}**.

### Lembar Analisis:
1. Deskripsikan masalah tersebut secara ringkas!
   - *Jawaban:* \`_________________________________\`
2. Tuliskan 3 alternatif solusi pemecahannya!
   - *Solusi 1:* \`_________________________________\`
   - *Solusi 2:* \`_________________________________\`
   - *Solusi 3:* \`_________________________________\`
`,
        quiz: [
          {
            question: `Manakah di bawah ini definisi yang paling tepat mengenai ${brief.topic}?`,
            type: "multiple_choice",
            options: [
              `Sebuah konsep teoretis tanpa penerapan praktis`,
              `Penerapan konsep terpadu yang membantu memecahkan masalah relevan`,
              `Alat mekanis bertenaga listrik`,
              `Sistem penyimpanan data fisik`
            ],
            answer: `Penerapan konsep terpadu yang membantu memecahkan masalah relevan`,
            explanation: `Konsep ini menekankan pada penyelesaian masalah nyata secara terstruktur dan terpadu.`,
            difficulty: "basic"
          },
          {
            question: `Mengapa pemahaman konteks lokal sangat krusial dalam mempelajari ${brief.topic}?`,
            type: "multiple_choice",
            options: [
              "Agar terlihat lebih menarik",
              "Agar solusi yang diciptakan sesuai dengan tantangan nyata di lingkungan sekitar",
              "Untuk menghemat biaya pembuatan modul",
              "Karena regulasi pemerintah mewajibkannya secara mutlak"
            ],
            answer: "Agar solusi yang diciptakan sesuai dengan tantangan nyata di lingkungan sekitar",
            explanation: "Konteks lokal memastikan relevansi solusi dan tingkat keterterimaan oleh pengguna di sekitar kita.",
            difficulty: "standard"
          }
        ],
        rubric: [
          {
            criterion: "Pemahaman Konsep Dasar",
            excellent: "Menunjukkan pemahaman yang sangat mendalam dan mampu menjelaskan kaitan antarkonsep secara logis.",
            good: "Memahami konsep dasar dengan baik, namun terdapat sedikit kekeliruan kecil pada analisis hubungan konsep.",
            needsImprovement: "Belum memahami konsep dasar secara utuh, penjelasan masih sangat rancu.",
            weight: 50
          },
          {
            criterion: "Kualitas Eksekusi Proyek",
            excellent: "Karya akhir sangat rapi, kreatif, solutif, dan menjawab tantangan yang diajukan dengan tuntas.",
            good: "Karya akhir cukup baik, namun kurang inovatif atau ada detail instruksi yang terlewat.",
            needsImprovement: "Karya akhir tidak selesai, tidak rapi, dan tidak menjawab tantangan.",
            weight: 50
          }
        ],
        slideOutline: `# Slide Outline: Dasar ${brief.topic}\n\n- Slide 1: Judul Program & Selamat Datang\n- Slide 2: Mengapa Belajar ${brief.topic} Penting?\n- Slide 3: Konsep Kunci & Teori\n- Slide 4: Studi Kasus Nyata di Indonesia\n- Slide 5: Pengenalan Proyek Akhir: ${brief.finalOutcome}`,
        remedialMaterial: `# Materi Remedial: Penguatan ${brief.topic}\n\nJika kamu belum memahami konsep utama, baca rangkuman di bawah ini:\n- Poin Penting 1: Penjelasan konsep inti dengan bahasa sehari-hari.\n- Poin Penting 2: Latihan terbimbing satu-satu dengan instruktur.`,
        advancedChallenge: `# Advanced Challenge: Studi Kasus Kompleks ${brief.topic}\n\nBagi peserta tingkat lanjut, cobalah selesaikan tantangan berikut:\n- Analisis skenario tingkat tinggi yang melibatkan banyak variabel siber/teknis.\n- Buat rancangan solusi skala industri.`
      };

      return NextResponse.json({ documentPack: genericPack });
    }

    // Call real Gemini API
    const prompt = getDocumentPackPrompt(JSON.stringify(brief), JSON.stringify(blueprint));
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "application/json",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    const parsedJson = JSON.parse(resultText.trim());
    return NextResponse.json({ documentPack: parsedJson });
  } catch (error: any) {
    console.error("Error in generate-document-pack API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to generate document pack",
      fallback: true
    }, { status: 500 });
  }
}
