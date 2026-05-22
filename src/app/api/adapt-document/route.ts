// src/app/api/adapt-document/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getAdaptationPrompt } from "@/lib/ai/prompts";
import { SEED_MOCK_BASIC_MODULE, SEED_MOCK_ADVANCED_MODULE } from "@/lib/storage/mockData";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { documentContent, documentName, mode, customApiKey } = body;

    if (!documentContent || !mode) {
      return NextResponse.json({ error: "Missing documentContent or mode" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log("No API Key detected. Using smart mock fallback for Adaptation.");
      
      const isCyber = documentContent.toLowerCase().includes("cyber") || 
                      documentContent.toLowerCase().includes("siber") || 
                      documentContent.toLowerCase().includes("phishing");
      
      if (isCyber && documentName === "studentModule") {
        if (mode === "basic") {
          return NextResponse.json({ adaptedDocument: SEED_MOCK_BASIC_MODULE });
        } else if (mode === "advanced") {
          return NextResponse.json({ adaptedDocument: SEED_MOCK_ADVANCED_MODULE });
        }
      }

      // Generic adaptation mock for other topics
      let intro = "";
      if (mode === "basic") {
        intro = `> *Dokumen ini telah disesuaikan untuk level **Basic (Pemula)** menggunakan analogi sederhana dan penjelasan langkah-demi-langkah.*\n\n`;
        const simplified = documentContent
          .replace(/# (.*)/g, "# $1 (Pemula)")
          .replace(/## (.*)/g, "## $1 (Sederhana)")
          .replace(/Mekanisme|Analisis|Eksploitasi|Strategi/g, "Cara kerja");
        return NextResponse.json({ adaptedDocument: intro + simplified });
      } else if (mode === "advanced") {
        intro = `> *Dokumen ini telah disesuaikan untuk level **Advanced (Lanjutan)** dengan penambahan istilah teknis dan studi kasus mendalam.*\n\n`;
        const complex = documentContent
          .replace(/# (.*)/g, "# Analisis Mendalam: $1 (Advanced)")
          .replace(/## (.*)/g, "## Arsitektur & Teori: $1")
          .replace(/Cara kerja/g, "Mekanisme Vektor Kerusakan");
        return NextResponse.json({ adaptedDocument: intro + complex });
      }

      return NextResponse.json({ adaptedDocument: documentContent });
    }

    // Call real Gemini API
    const prompt = getAdaptationPrompt(mode, documentName || "Document", documentContent);
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "text/plain",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    return NextResponse.json({ adaptedDocument: resultText });
  } catch (error: any) {
    console.error("Error in adapt-document API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to adapt document",
      fallback: true
    }, { status: 500 });
  }
}
