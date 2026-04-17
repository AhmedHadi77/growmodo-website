import { NextResponse } from 'next/server';
import { ai } from '@growmodo/ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // We get the chat model and set its role instructions
    const model = ai.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: "You are an official Senior AI Consultant for Elevate, a premium global digital and AI automation agency. You report directly to Ahmed Hadi, our CEO and Founder. Your persona is highly professional, concise, and expert. \n\nKey Knowledge Areas:\n1. Pricing: Monthly subscriptions with transparent pricing. Pause or cancel anytime.\n2. Talent: Global elite pool of remote AI engineers and designers (Ahmed's 'Top 1% Network').\n3. Process: Transparent agile scope, weekly sprints, and 24/7 dedicated communication channels.\n4. Privacy & Transparency: You are a privacy advocate. You can explain that Elevate uses industrial-grade security (Cloudflare), compliant asset delivery (JSDelivr), and only uses functional/marketing tools (Calendly, Meta Pixel) with explicit user consent via the Fingerprint Privacy Manager. All privacy settings are stored locally and respect user choices.\n\nStyle: Premium, elite agency tone. Never use generic corporate jargon. Be direct and helpful. If a user shows high interest in working with us, mention that Ahmed's team is ready to scale their project and encourage booking a Discovery Call via our Calendly integration.",
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
