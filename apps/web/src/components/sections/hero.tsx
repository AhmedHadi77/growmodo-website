"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { XCircle } from "lucide-react"

const roles = [
    "Shopify Developers",
    "UI/UX Designers",
    "Webflow Developers",
    "AI Engineers",
]

export function Hero() {
    const [currentRole, setCurrentRole] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-card dark:bg-[#0f0f0f] border-b border-border/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left Content */}
                <div className="w-full md:w-[60%] flex flex-col items-start pt-12 md:pt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-8"
                    >
                        Frustrated with Unreliable Freelancers, But Don&apos;t Have the Time to Find In-House <br className="hidden md:block" />
                        <span className="text-[#cbf026] dark:text-[#d4f933] drop-shadow-sm min-h-[1.2em] inline-block mt-2">
                            {roles[currentRole]}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium mb-12"
                    >
                        You&apos;re scaling fast, but creative bottlenecks are slowing you down. We&apos;ve built something different—a flexible talent membership that gives you instant access to vetted professionals who &quot;get you&quot;!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <div className="flex items-center gap-2 bg-[#222] dark:bg-[#111] px-5 py-3 rounded-full border border-white/10 dark:border-white/5">
                            <div className="w-5 h-5 bg-[#cbf026] text-black rounded-full flex items-center justify-center font-bold text-xs"><XCircle className="w-3 h-3" /></div>
                            <span className="text-white text-sm font-semibold tracking-wide">No Endless Profile Scrolling</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#222] dark:bg-[#111] px-5 py-3 rounded-full border border-white/10 dark:border-white/5">
                            <div className="w-5 h-5 bg-[#cbf026] text-black rounded-full flex items-center justify-center font-bold text-xs"><XCircle className="w-3 h-3" /></div>
                            <span className="text-white text-sm font-semibold tracking-wide">No Draining Interviews</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#222] dark:bg-[#111] px-5 py-3 rounded-full border border-white/10 dark:border-white/5">
                            <div className="w-5 h-5 bg-[#cbf026] text-black rounded-full flex items-center justify-center font-bold text-xs"><XCircle className="w-3 h-3" /></div>
                            <span className="text-white text-sm font-semibold tracking-wide">No Recruiting Fees</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Decorative (Placeholder for future avatars scrolling if needed) */}
                <div className="w-full md:w-[40%] hidden lg:flex flex-col items-end opacity-20 pointer-events-none select-none">
                    <div className="space-y-4 text-right">
                        {roles.slice(1).map((r, i) => (
                            <h2 key={i} className="text-5xl font-heading font-bold text-muted-foreground">{r}</h2>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
