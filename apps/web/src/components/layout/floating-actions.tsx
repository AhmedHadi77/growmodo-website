"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Fingerprint, Send, Bot, X } from "lucide-react"

export function FloatingActions() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState([
        { role: "agent", content: "Hi! Looking to hire AI developers, or do you need a custom automation built?" }
    ])
    const [input, setInput] = React.useState("")

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return
        setMessages(prev => [...prev, { role: "user", content: input }])
        setInput("")

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "agent", content: "That sounds like a great project. We have elite engineers ready. Would you like to schedule a strategy call?" }])
        }, 1200)
    }

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {/* Chat UI */}
                <div className={`mb-4 w-[320px] bg-card border border-border shadow-2xl rounded-2xl overflow-hidden transition-all origin-bottom-right duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute bottom-16'}`}>
                    <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
                        <div className="flex items-center gap-2">
                            <Bot className="w-5 h-5" />
                            <span className="font-semibold text-sm">Elevate AI Assistant</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20" onClick={() => setIsOpen(false)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="p-4 h-[240px] overflow-y-auto flex flex-col gap-3 bg-muted/30">
                        {messages.map((msg, i) => (
                            <div key={i} className={`text-sm p-3 rounded-xl max-w-[85%] ${msg.role === 'agent' ? 'bg-card border border-border rounded-tl-none self-start' : 'bg-primary text-primary-foreground rounded-tr-none self-end'}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSend} className="p-3 border-t border-border flex gap-2 bg-card">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type your project idea..."
                            className="flex-1 bg-transparent text-sm outline-none px-2 text-foreground placeholder:text-muted-foreground"
                        />
                        <Button type="submit" size="icon" className="h-8 w-8 rounded-full shrink-0">
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </div>

                {/* Floating Button */}
                <Button
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-16 w-16 rounded-full shadow-2xl bg-[#0f0f0f] hover:bg-black dark:bg-[#fff] dark:hover:bg-[#f2f2f2] transition-transform hover:scale-105 border-0"
                >
                    {isOpen ? <X className="h-7 w-7 text-white dark:text-black" /> : <MessageSquare className="h-7 w-7 text-white dark:text-black" />}
                </Button>
            </div>

            <div className="fixed bottom-6 left-6 z-50 hidden md:block group">
                <Button size="icon" className="h-16 w-16 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 border-0 overflow-hidden relative">
                    <Fingerprint className="h-7 w-7 text-white" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
            </div>
        </>
    )
}
