// src/lib/ai/geminiClient.ts

interface GenerateContentOptions {
  prompt: string;
  responseMimeType?: "application/json" | "text/plain";
  systemInstruction?: string;
  customApiKey?: string;
}

export async function callGeminiAPI({
  prompt,
  responseMimeType = "text/plain",
  systemInstruction,
  customApiKey
}: GenerateContentOptions): Promise<string> {
  // 1. Resolve API key: Client-passed key has highest priority, then server environment
  const apiKey = customApiKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY_MISSING");
  }

  // Use gemini-2.5-flash as default as it is fast and supports JSON output schemas
  const modelName = "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const contents = [
    {
      parts: [
        {
          text: prompt
        }
      ]
    }
  ];

  const generationConfig: Record<string, any> = {};
  if (responseMimeType === "application/json") {
    generationConfig.responseMimeType = "application/json";
  }

  const payload: Record<string, any> = {
    contents,
    generationConfig
  };

  if (systemInstruction) {
    payload.systemInstruction = {
      parts: [
        {
          text: systemInstruction
        }
      ]
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Gemini API Error details:", errorData);
      throw new Error(`GEMINI_API_ERROR: ${res.statusText} (${res.status})`);
    }

    const data = await res.json();
    const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textOutput) {
      throw new Error("GEMINI_EMPTY_RESPONSE");
    }

    return textOutput;
  } catch (error: any) {
    console.error("Error in callGeminiAPI:", error);
    throw error;
  }
}
