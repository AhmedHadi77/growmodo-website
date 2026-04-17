"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import Image from "next/image"
import { TalentsGrid } from "@/components/sections/talents"

export default function TalentsPage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-20"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Top 1% Network</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">World-Class Talent,<br />Embedded In Your Team</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Skip the agonizing months of recruiting, interviewing, and onboarding. Our rigorous vetting connects you instantly with pre-vetted AI engineers, full-stack developers, and senior designers who operate at the apex of their fields.
                    </p>
                    
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        {["All Talent", "AI Engineers", "Designers", "Fullstack", "Webflow"].map((cat) => (
                            <button key={cat} className={`px-6 py-2 rounded-full border border-border shadow-sm text-sm font-semibold transition-all hover:bg-primary hover:text-white ${cat === 'All Talent' ? 'bg-primary text-white' : 'bg-background text-muted-foreground'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Animated graphic section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-32 shadow-2xl border border-border/50"
                >
                    <Image 
                        src="/workflow_3d.png" 
                        alt="Abstract AI Workflow" 
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-8 md:p-16">
                        <div className="max-w-xl text-white space-y-4">
                            <h3 className="text-3xl font-bold font-heading">The AI Engineer Standard</h3>
                            <p className="text-white/80 text-lg">
                                Not just coders—our engineers understand LLM architectures, vector databases, and deep reinforcement learning. They don't just build features; they build cognitive infrastructure.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Grid of actual talents */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet Some of Our Experts</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Whether you need a Webflow expert to launch a campaign tomorrow, or a Senior Backend Developer for your SaaS, we have them on standby.
                        </p>
                    </div>
                    
                    {/* Reuse the existing talents grid, but now it lives seamlessly in this dedicated page */}
                    <div className="py-8">
                        <TalentsGrid />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
                    <motion.div whileHover={{ y: -10 }} className="p-8 bg-card rounded-3xl border border-border/50 shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
                        <h4 className="text-xl font-bold mb-3">Vetted for Excellence</h4>
                        <p className="text-muted-foreground">Only 1% of applicants pass our technical assessments, live pair-programming sessions, and rigorous communication checks.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="p-8 bg-card rounded-3xl border border-border/50 shadow-sm">
                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
                        <h4 className="text-xl font-bold mb-3">Timezone Alignment</h4>
                        <p className="text-muted-foreground">Our talent pool is structured to ensure major overlap with your working hours. You will always have synchronous touchpoints.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="p-8 bg-card rounded-3xl border border-border/50 shadow-sm">
                        <div className="w-12 h-12 bg-accent/10 text-accent-foreground rounded-xl flex items-center justify-center font-bold text-xl mb-6">3</div>
                        <h4 className="text-xl font-bold mb-3">Zero Risk Trial</h4>
                        <p className="text-muted-foreground">Not the perfect fit? We offer a 100% money-back guarantee for the first two weeks if you are not absolutely thrilled.</p>
                    </motion.div>
                </div>
            </div>
            <Footer />
            <FloatingActions />
        </main>
    )
}
