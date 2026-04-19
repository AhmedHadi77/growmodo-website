import { NextResponse } from "next/server"
import { ai } from "@growmodo/ai"
import { faqs, maintenancePlan, pricingPlans, scopeCategories, talentRoles } from "@/lib/growmodo-content"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] }

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 })
    }

    const pricingSummary = pricingPlans
      .map((plan) => `${plan.label}: ${plan.price}${plan.cadence}`)
      .join(", ")

    const scopeSummary = scopeCategories
      .map((category) => `${category.name}: ${category.items.join(", ")}`)
      .join("\n")

    const faqSummary = faqs
      .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
      .join("\n\n")

    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are the ElvateAI website assistant. Speak as a concise, helpful membership advisor for agencies, marketing teams, and scale-ups.\n\n" +
        "Core positioning: ElvateAI is a talent membership that gives clients access to AI-empowered designers, developers, video editors, and project managers without hiring full-time employees.\n\n" +
        `Talent roles: ${talentRoles.join(", ")}.\n\n` +
        `All Inclusive pricing: ${pricingSummary}. Maintenance plan: ${maintenancePlan.price}${maintenancePlan.cadence}.\n\n` +
        `Scope of work:\n${scopeSummary}\n\n` +
        `FAQ knowledge:\n${faqSummary}\n\n` +
        "Guidelines: Do not describe ElvateAI as a generic AI agency. Mention flat monthly membership pricing, dedicated project manager, unlimited requests, active capacity, and flexible pause/cancel options when relevant. If the visitor shows buying intent, invite them to book a discovery call at /book. Keep responses short and practical.",
    })

    const chat = model.startChat({
      history: messages.slice(0, -1).map((message) => ({
        role: message.role === "user" ? "user" : "model",
        parts: [{ text: message.content }],
      })),
    })

    const lastMessage = messages[messages.length - 1].content
    const result = await chat.sendMessage(lastMessage)

    return NextResponse.json({
      content: result.response.text(),
      role: "assistant",
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
