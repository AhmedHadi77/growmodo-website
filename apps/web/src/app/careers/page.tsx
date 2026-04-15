"use client"
import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"

const jobs = [
    {
        title: "AI Automation Engineer",
        slug: "ai-automation-engineer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        description: "Join our elite team to build cutting-edge AI workflows using LLMs, LangChain, and vector databases."
    },
    {
        title: "Senior Product Designer",
        slug: "senior-product-designer",
        department: "Design",
        location: "Remote (Global)",
        type: "Full-time",
        description: "Lead the design of next-generation SaaS dashboards and AI interfaces for high-growth scale-ups."
    },
    {
        title: "Senior Fullstack Developer (Next.js)",
        slug: "senior-fullstack-developer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        description: "Build scalable, performant web applications using the latest Next.js features and TypeScript."
    },
    {
        title: "AI Product Manager",
        slug: "ai-product-manager",
        department: "Product",
        location: "Remote (Global)",
        type: "Full-time",
        description: "Bridge the gap between complex AI capabilities and intuitive user experiences."
    }
]

export default function CareersPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background pt-32 pb-20">
            <Header />
            
            <div className="max-w-7xl mx-auto w-full px-6">
                {/* Hero */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Careers at Elevate</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">
                        Join the Top 1% of Global Talent
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We're looking for the builders, the designers, and the visionaries who want to shape the future of AI-empowered development. 
                    </p>
                </motion.div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/careers/${job.slug}`} className="block h-full">
                                <div className="bg-card hover:bg-accent/5 transition-all duration-300 p-8 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                            {job.department}
                                        </div>
                                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h3>
                                    
                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow cursor-default">
                                        {job.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" /> {job.type}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Culture Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 rounded-[3rem] p-12 md:p-20 text-center border border-primary/10"
                >
                    <h2 className="text-4xl font-heading font-bold mb-8">Why work with Elevate?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">100% Remote</h4>
                            <p className="text-muted-foreground">Work from anywhere in the world. We focus on results, not hours in a chair.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">Flexible Flow</h4>
                            <p className="text-muted-foreground">Pick your own hours. We respect your circadian rhythm and personal life.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">Elite Projects</h4>
                            <p className="text-muted-foreground">Scale top-tier SaaS companies and agencies with high-impact AI solutions.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
            
            <Footer />
        </main>
    )
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
