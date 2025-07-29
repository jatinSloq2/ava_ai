import OpenAI from "openai";
import pdfParse from "pdf-parse";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function reviewResumeFromBuffer(buffer: Buffer): Promise<any> {
  try {
    const pdfData = await pdfParse(buffer);

    const prompt = `
Review this resume and return a JSON like:
{
  "score": number,
  "strengths": [...],
  "weaknesses": [...],
  "suggestions": [...],
  "review": "..."
}

Resume:
${pdfData.text}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("Error reviewing resume:", error);
    throw new Error("Failed to review resume.");
  }
}
