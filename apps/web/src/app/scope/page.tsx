"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import { Process } from "@/components/sections/process"

export default function ScopePage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-20"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">How We Work</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">The Perfect Workflow<br />For Scaling Teams</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        At Elevate, we have dismantled the clunky, outdated agency model. Say goodbye to protracted negotiation cycles and hidden scope creep. We employ an agile, transparent process engineered specifically for fast-moving startups and ambitious enterprise teams. 
                    </p>
                </motion.div>

                {/* Long description blocks to satisfy "many descriptions" */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold font-heading">Complete Transparency</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Most agencies hide behind opaque account managers. We embed our talent directly into your Slack, Teams, or Discord. You communicate directly with the AI engineers and designers building your product. This eliminates the telephone game, reduces latency, and fosters genuine synergy between our teams and yours.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From day one, you have full access to our project boards, Figma files, and Git repositories. You see exactly what is being built, line by line, pixel by pixel.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold font-heading">Asynchronous Velocity</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            While we ensure daily synchronous overlap for standups, our true superpower lies in asynchronous coordination. We utilize Loom, highly detailed tickets, and automated CI/CD pipelines so that work happens around the clock. You wake up to pull requests and design reviews every single morning.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our proprietary "Scope Guard" methodology means that we define finite deliverables in 2-week sprints. If priorities change, our model flexes with you without needing twelve layers of approval and contract re-negotiations.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Process />

            <div className="pb-32 px-6 max-w-4xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-primary/5 rounded-[2rem] border border-primary/20"
                >
                    <h3 className="text-3xl font-heading font-bold mb-6">Ready to see it in action?</h3>
                    <p className="text-lg text-muted-foreground mb-8">Stop wasting time on traditional hiring. Plug into the Elevate ecosystem today.</p>
                    <button className="bg-primary text-primary-foreground h-14 px-8 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
                        Book Your Discovery Call
                    </button>
                </motion.div>
            </div>

            <Footer />
            <FloatingActions />
        </main>
    )
}
