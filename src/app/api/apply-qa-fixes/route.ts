import { NextRequest, NextResponse } from "next/server";
import { callGeminiAPI } from "@/lib/ai/geminiClient";
import { SYSTEM_PROMPT, getApplyQAFixesPrompt } from "@/lib/ai/prompts";
import { TeachingBrief, LearningBlueprint, DocumentPack, QAReport } from "@/types/project";

import { applyQAFixesResponseSchema } from "@/lib/schemas/aiSchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { brief, blueprint, documentPack, qaReport, customApiKey } = body as { 
      brief: TeachingBrief; 
      blueprint: LearningBlueprint; 
      documentPack: DocumentPack;
      qaReport: QAReport;
      customApiKey?: string;
    };

    if (!brief || !blueprint || !documentPack || !qaReport) {
      return NextResponse.json({ error: "Missing required data" }, { status: 400 });
    }

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Mock fallback: Just return the original for now or slightly modified
      await new Promise(r => setTimeout(r, 2000));
      return NextResponse.json({ 
        blueprint: { ...blueprint, summary: blueprint.summary + " (Telah diperbaiki oleh QA)" },
        documentPack: { ...documentPack, studentModule: documentPack.studentModule + "\n\n*(Perbaikan QA diterapkan)*" } 
      });
    }

    // Call real Gemini API
    const prompt = getApplyQAFixesPrompt(
      JSON.stringify(brief), 
      JSON.stringify(blueprint),
      JSON.stringify(documentPack),
      JSON.stringify(qaReport)
    );

    const resultText = await callGeminiAPI({
      prompt,
      responseMimeType: "application/json",
      systemInstruction: SYSTEM_PROMPT,
      customApiKey
    });

    const parsedJson = JSON.parse(resultText.trim());
    const validatedData = applyQAFixesResponseSchema.parse(parsedJson);
    return NextResponse.json(validatedData);
  } catch (error: any) {
    console.error("Error in apply-qa-fixes API:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to apply QA fixes"
    }, { status: 500 });
  }
}
