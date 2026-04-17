"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Message = { role: "user" | "assistant"; content: string }

export function AIAssistant() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Elevate AI. How can I help you scale your engineering or design teams today?" }
    ])
    const [input, setInput] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    React.useEffect(() => {
        const handleOpenChat = (e: CustomEvent<string>) => {
            setIsOpen(true)
            if (e.detail) {
                setInput(e.detail)
            }
        }
        window.addEventListener('open-ai-chat' as any, handleOpenChat as any)
        return () => window.removeEventListener('open-ai-chat' as any, handleOpenChat as any)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return
        
        const userMsg = input
        setInput("")
        const newMessages: Message[] = [...messages, { role: "user", content: userMsg }]
        setMessages(newMessages)
        setIsLoading(true)

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages })
            })
            const data = await res.json()
            if (data.content) {
                setMessages([...newMessages, { role: "assistant", content: data.content }])
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-card w-[350px] shadow-2xl rounded-2xl border border-border/50 flex flex-col overflow-hidden mb-4"
                    >
                        <div className="bg-primary px-4 py-4 flex items-center justify-between text-primary-foreground">
                            <div className="flex items-center gap-2 font-heading font-bold">
                                <Bot className="w-5 h-5" /> Elevate Agent <Badge className="bg-white/20 text-[10px] px-1.5 py-0 h-4 border-none hover:bg-white/30">REAL TIME</Badge>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div ref={scrollRef} className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-background">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'assistant' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                        {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${m.role === 'user' ? 'bg-secondary text-secondary-foreground rounded-tr-sm' : 'bg-muted text-foreground rounded-tl-sm'}`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                 <div className="flex gap-3">
                                     <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/20 text-primary">
                                         <Bot size={16} />
                                     </div>
                                     <div className="p-4 rounded-2xl bg-muted text-foreground rounded-tl-sm flex items-center gap-1">
                                         <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                                         <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                                         <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                                     </div>
                                 </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="p-3 border-t border-border/50 bg-card flex items-center gap-2">
                            <input 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..." 
                                className="flex-1 bg-background text-sm rounded-full px-4 py-2 border border-border focus:outline-none focus:border-primary"
                                disabled={isLoading}
                            />
                            <button disabled={isLoading} className="bg-primary text-primary-foreground p-2 rounded-full shrink-0 disabled:opacity-50">
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/50 transition-shadow ml-auto"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}
