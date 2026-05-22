// src/app/api/generate-brief/route.ts
import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getNormalizeBriefPrompt } from "@/lib/ai/prompts";
import { SEED_BRIEF } from "@/lib/storage/mockData";
import { teachingBriefZodSchema } from "@/lib/schemas/aiSchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rawInput, customApiKey } = body;

    if (!rawInput) {
      return NextResponse.json({ error: "Missing rawInput" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // API Key missing -> Run fallback mock logic
      console.log("No API Key detected. Using smart mock fallback for Brief.");
      
      const isCyber = rawInput.toLowerCase().includes("cyber") || 
                      rawInput.toLowerCase().includes("siber") || 
                      rawInput.toLowerCase().includes("keamanan");
      
      if (isCyber) {
        return NextResponse.json({ brief: SEED_BRIEF });
      }

      // Generate a generic mock brief for other topics
      const topic = rawInput.split("tentang")?.[1]?.trim() || rawInput.substring(0, 30) || "Topik Pembelajaran";
      const genericBrief = {
        documentType: "school_module",
        topic: topic.replace(/[.":]/g, ""),
        audience: "Siswa Umum",
        duration: "1 Hari, 4 Jam",
        level: "beginner",
        finalOutcome: "Karya Akhir Penugasan Mandiri",
        languageStyle: "Bahasa Indonesia, santai, praktis",
        localContext: ["Kehidupan sehari-hari", "Media sosial"],
        constraints: ["Mudah dipahami", "Banyak latihan"]
      };

      return NextResponse.json({ brief: genericBrief });
    }

    // Call real Gemini API
    const prompt = getNormalizeBriefPrompt(rawInput);
    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "application/json",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    const parsedJson = JSON.parse(resultText.trim());
    
    // Validate with Zod
    const validatedData = teachingBriefZodSchema.parse(parsedJson);

    return NextResponse.json({ brief: validatedData });
  } catch (error: any) {
    console.error("Error in generate-brief API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to process brief",
      fallback: true
    }, { status: 500 });
  }
}
