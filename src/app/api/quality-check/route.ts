// src/app/api/quality-check/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getQAPrompt } from "@/lib/ai/prompts";
import { SEED_QA_REPORT } from "@/lib/storage/mockData";

import { qaReportZodSchema } from "@/lib/schemas/aiSchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { brief, blueprint, documentPack, customApiKey } = body;

    if (!brief || !blueprint || !documentPack) {
      return NextResponse.json({ error: "Missing brief, blueprint, or documentPack data" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log("No API Key detected. Using smart mock fallback for QA Report.");
      
      const topic = brief.topic.toLowerCase();
      const isCyber = topic.includes("cyber") || topic.includes("siber") || topic.includes("keamanan");
      
      if (isCyber) {
        return NextResponse.json({ qaReport: SEED_QA_REPORT });
      }

      // Generate a generic QA report for other topics
      const genericQA = {
        score: 85,
        summary: `Secara umum, paket dokumen untuk topik ${brief.topic} sudah tersusun dengan lengkap dan memiliki relevansi yang baik terhadap target audiens (${brief.audience}). Namun, terdapat beberapa catatan mengenai efektivitas alokasi waktu.`,
        strengths: [
          "Terdapat keterkaitan yang jelas antara tujuan pembelajaran dengan materi inti.",
          "Bahasa yang digunakan sesuai dengan preferensi yang ditentukan.",
          "Worksheet memiliki panduan yang terstruktur untuk pengerjaan kelompok."
        ],
        issues: [
          {
            category: "duration",
            severity: "medium",
            message: `Estimasi durasi (${brief.duration}) terasa terlalu sempit untuk menyelesaikan proyek akhir "${brief.finalOutcome}".`,
            suggestion: "Sederhanakan bagian luaran proyek akhir atau berikan opsi templat pengerjaan cepat agar siswa tidak kehabisan waktu."
          },
          {
            category: "rubric",
            severity: "low",
            message: "Kriteria penilaian rubrik terlalu subjektif.",
            suggestion: "Tambahkan kriteria kuantitatif/spesifik pada rubrik penilaian untuk mengurangi bias penilai."
          }
        ]
      };

      return NextResponse.json({ qaReport: genericQA });
    }

    // Call real Gemini API
    const prompt = getQAPrompt(
      JSON.stringify(brief),
      JSON.stringify(blueprint),
      JSON.stringify(documentPack)
    );
    
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "application/json",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    const parsedJson = JSON.parse(resultText.trim());
    
    // Validate with Zod
    const validatedData = qaReportZodSchema.parse(parsedJson);

    return NextResponse.json({ qaReport: validatedData });
  } catch (error: any) {
    console.error("Error in quality-check API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to complete QA check",
      fallback: true
    }, { status: 500 });
  }
}
