import { GoogleGenerativeAI, Schema, FunctionDeclaration } from '@google/generative-ai';

export const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// --- 1. Standard Text Generation ---
export async function generateContent(prompt: string) {
  const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// --- 2. Memory-based Chat Assistant ---
export function startChatConversation(systemInstruction?: string) {
  const model = ai.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: systemInstruction 
  });
  return model.startChat({
    history: [],
  });
}

// --- 3. Structured Data Generation (CMS Concept) ---
export async function generateStructuredContent(prompt: string, schema: Schema) {
  const model = ai.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
      }
  });
  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// --- 4. Agentic Tool Calling ---
export async function generateAgenticResponse(prompt: string, tools: any[]) {
   const model = ai.getGenerativeModel({
       model: 'gemini-2.5-flash',
       tools: tools,
   });
   const result = await model.generateContent(prompt);
   
   const calls = result.response.functionCalls();
   if (calls && calls.length > 0) {
       return {
           type: 'tool_call',
           calls: calls
       };
   }
   
   return {
       type: 'text',
       content: result.response.text()
   };
}

// Re-export common types so consumer packages don't need direct @google/generative-ai dependencies
export type { Schema, FunctionDeclaration };
