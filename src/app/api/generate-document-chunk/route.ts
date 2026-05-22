import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getDocumentChunkPrompt } from "@/lib/ai/prompts";
import { TeachingBrief, LearningBlueprint } from "@/types/project";
import { SEED_DOCUMENT_PACK } from "@/lib/storage/mockData";

import { quizItemZodSchema, rubricItemZodSchema } from "@/lib/schemas/aiSchemas";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { documentType, brief, blueprint, customApiKey } = body as { 
      documentType: keyof typeof SEED_DOCUMENT_PACK;
      brief: TeachingBrief; 
      blueprint: LearningBlueprint; 
      customApiKey?: string;
    };

    if (!documentType || !brief || !blueprint) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Mock fallback
      const topic = brief.topic.toLowerCase();
      const isCyber = topic.includes("cyber") || topic.includes("siber") || topic.includes("keamanan");
      
      let chunkData;
      if (isCyber) {
        chunkData = SEED_DOCUMENT_PACK[documentType];
      } else {
        // Generic fallback... (Simplified for mock mode)
        const genericData: any = {
          studentModule: `# Modul Belajar: ${brief.topic}\n\nModul ini disusun untuk mempermudah pemahaman mengenai **${brief.topic}**.`,
          facilitatorGuide: `# Panduan Instruktur: ${brief.topic}\n\nPanduan ini berisi peta alur pengajaran.`,
          worksheet: `# Worksheet Peserta: ${brief.topic}\n\nKerjakan soal berikut.`,
          quiz: [{ question: `Apa itu ${brief.topic}?`, type: "multiple_choice", options: ["A", "B", "C", "D"], answer: "A", explanation: "...", difficulty: "basic" }],
          rubric: [{ criterion: "Pemahaman", excellent: "Bagus", good: "Cukup", needsImprovement: "Kurang", weight: 100 }],
          slideOutline: `# Slide: ${brief.topic}`,
          remedialMaterial: `# Remedial: ${brief.topic}`,
          advancedChallenge: `# Challenge: ${brief.topic}`
        };
        chunkData = genericData[documentType];
      }
      // Fake delay
      await new Promise(r => setTimeout(r, 1000));
      return NextResponse.json({ chunk: chunkData });
    }

    // Call real Gemini API
    const prompt = getDocumentChunkPrompt(documentType, JSON.stringify(brief), JSON.stringify(blueprint));
    const isJson = documentType === "quiz" || documentType === "rubric";
    
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: isJson ? "application/json" : "text/plain",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    let chunk: any = resultText.trim();
    if (isJson) {
      try {
        const parsedJson = JSON.parse(chunk);
        
        // Zod validation for arrays
        if (documentType === "quiz") {
          chunk = z.array(quizItemZodSchema).parse(parsedJson);
        } else if (documentType === "rubric") {
          chunk = z.array(rubricItemZodSchema).parse(parsedJson);
        }
      } catch (e: any) {
        console.error("Failed to parse JSON for", documentType, e);
        throw new Error("Invalid JSON output from AI: " + e.message);
      }
    }

    return NextResponse.json({ chunk });
  } catch (error: any) {
    console.error(`Error in generate-document-chunk API:`, error);
    return NextResponse.json({ 
      error: error.message || "Failed to generate document chunk",
    }, { status: 500 });
  }
}
