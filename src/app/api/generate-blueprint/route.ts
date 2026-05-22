// src/app/api/generate-blueprint/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getBlueprintPrompt } from "@/lib/ai/prompts";
import { SEED_BLUEPRINT } from "@/lib/storage/mockData";
import { TeachingBrief } from "@/types/project";
import { blueprintZodSchema } from "@/lib/schemas/aiSchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { brief, customApiKey } = body as { brief: TeachingBrief; customApiKey?: string };

    if (!brief) {
      return NextResponse.json({ error: "Missing brief data" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log("No API Key detected. Using smart mock fallback for Blueprint.");
      
      const topic = brief.topic.toLowerCase();
      const isCyber = topic.includes("cyber") || topic.includes("siber") || topic.includes("keamanan");
      
      if (isCyber) {
        return NextResponse.json({ blueprint: SEED_BLUEPRINT });
      }

      // Generate a generic blueprint for other topics
      const genericBlueprint = {
        summary: `Modul pembelajaran praktis tentang ${brief.topic} yang dirancang khusus untuk ${brief.audience} dengan durasi ${brief.duration}. Sesi ini menitikberatkan pada pembelajaran berbasis proyek.`,
        learningObjectives: [
          `Menjelaskan konsep dasar ${brief.topic} dengan benar.`,
          `Mengidentifikasi masalah dan peluang utama dalam lingkup ${brief.topic}.`,
          `Menerapkan prinsip ${brief.topic} dalam studi kasus sehari-hari.`,
          `Membuat hasil karya akhir berupa ${brief.finalOutcome || "Proyek Mandiri"}.`
        ],
        prerequisites: [
          "Pemahaman dasar penggunaan teknologi komputer atau internet.",
          "Ketertarikan belajar hal baru."
        ],
        sessionPlan: [
          {
            sessionTitle: "Sesi 1: Pengenalan Konsep & Teori Dasar",
            duration: "Setengah Durasi",
            objectives: [`Menjelaskan konsep dasar ${brief.topic}`, `Mengidentifikasi masalah terkait`],
            activities: [
              `Pemaparan materi dasar ${brief.topic} secara interaktif.`,
              `Diskusi studi kasus nyata dan relevansi lokal.`,
              `Aktivitas kelompok menganalisis contoh yang ada.`
            ],
            outputs: ["Catatan draf pemahaman dasar kelompok"]
          },
          {
            sessionTitle: `Sesi 2: Implementasi Praktis & Pembuatan ${brief.finalOutcome || "Proyek"}`,
            duration: "Setengah Durasi",
            objectives: [`Menerapkan prinsip ${brief.topic}`, `Membuat ${brief.finalOutcome || "Proyek"}`],
            activities: [
              `Demo langkah-langkah implementasi praktis.`,
              `Aktivitas mandiri membuat draf/kerangka ${brief.finalOutcome || "proyek akhir"}.`,
              `Showcase hasil karya dan evaluasi penilaian.`
            ],
            outputs: [`${brief.finalOutcome || "Hasil Karya Akhir"} yang siap dinilai`]
          }
        ],
        assessmentPlan: [
          "Evaluasi penyelesaian aktivitas per sesi",
          `Penilaian hasil karya akhir: ${brief.finalOutcome || "Proyek Akhir"}`
        ],
        finalProject: {
          title: brief.finalOutcome || "Proyek Akhir Mandiri",
          description: `Membuat ${brief.finalOutcome || "karya mandiri"} yang menampilkan pemahaman peserta mengenai ${brief.topic}.`,
          deliverables: ["Berkas dokumentasi hasil karya akhir"],
          criteria: ["Kesesuaian dengan instruksi", "Kreativitas", "Kejelasan pesan", "Dampak solusi"]
        }
      };

      return NextResponse.json({ blueprint: genericBlueprint });
    }

    // Call real Gemini API
    const prompt = getBlueprintPrompt(JSON.stringify(brief));
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "application/json",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    const parsedJson = JSON.parse(resultText.trim());
    
    // Validate with Zod
    const validatedData = blueprintZodSchema.parse(parsedJson);

    return NextResponse.json({ blueprint: validatedData });
  } catch (error: any) {
    console.error("Error in generate-blueprint API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to generate blueprint",
      fallback: true
    }, { status: 500 });
  }
}
