import { NextResponse } from 'next/server';
import { ai } from '@growmodo/ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // We get the chat model and set its role instructions
    const model = ai.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: "You are an official AI consultant for Elevate, a premium digital agency. You answer questions about pricing (monthly subscriptions, pause anytime), our remote AI engineer talent pool, and our transparent agile scope process. Be concise, professional, and friendly. Encourage them to book a discovery call if they show high intent.",
    });

    const chat = model.startChat({
        history: messages.slice(0, -1).map((m: any) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        }))
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    
    return NextResponse.json({
        content: result.response.text(),
        role: 'assistant'
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
