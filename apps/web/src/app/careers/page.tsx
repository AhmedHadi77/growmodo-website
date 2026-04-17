"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Clock, Globe, Star, Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const jobs = [
    {
        title: "AI Automation Engineer",
        slug: "ai-automation-engineer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        salary: "$120k - $180k",
        description: "Join our elite team to build cutting-edge AI workflows using LLMs, LangChain, and vector databases. You will report directly to Ahmed Hadi's strategy team."
    },
    {
        title: "Senior Product Designer",
        slug: "senior-product-designer",
        department: "Design",
        location: "Remote (Global)",
        type: "Full-time",
        salary: "$110k - $160k",
        description: "Lead the design of next-generation SaaS dashboards and AI interfaces for high-growth scale-ups in the Elevate network."
    },
    {
        title: "Senior Fullstack Developer (Next.js)",
        slug: "senior-fullstack-developer",
        department: "Engineering",
        location: "Remote (Global)",
        type: "Full-time",
        salary: "$130k - $190k",
        description: "Build scalable, performant web applications using the latest Next.js features and TypeScript. Excellence is our only standard."
    }
]

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = React.useState<string | null>(null)

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />
            
            <div className="flex-1 pt-32 pb-20">
                
                {/* Hero */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto space-y-6"
                    >
                        <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-1">Top 1% Global Network</Badge>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground">
                            Build the Future <br /> with Ahmed Hadi
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            &quot;We don&apos;t hire employees. We onboard partners who are obsessed with excellence.&quot;
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Job Listings */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-heading font-bold">Open Positions</h2>
                            <div className="flex gap-2">
                                <Badge variant="outline">Engineering (2)</Badge>
                                <Badge variant="outline">Design (1)</Badge>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {jobs.map((job, idx) => (
                                <motion.div 
                                    key={job.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setSelectedJob(job.title)}
                                    className={`p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer group bg-white ${selectedJob === job.title ? 'ring-2 ring-primary border-transparent' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1 font-semibold"><Globe size={14} /> {job.location}</span>
                                                <span className="flex items-center gap-1 font-semibold text-primary"><Star size={14} /> {job.salary}</span>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Application / Info Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-border shadow-inner">
                            <h4 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                                <Sparkles className="text-primary" /> Application
                            </h4>
                            {selectedJob ? (
                                <form className="space-y-4">
                                    <div className="p-4 bg-white rounded-2xl border border-primary/20 text-sm font-bold flex justify-between items-center">
                                        {selectedJob} <button onClick={() => setSelectedJob(null)} className="text-xs text-muted-foreground hover:text-destructive">Remove</button>
                                    </div>
                                    <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-border focus:outline-none focus:border-primary transition-all" />
                                    <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-border focus:outline-none focus:border-primary transition-all" />
                                    <div className="p-4 border-2 border-dashed border-border rounded-xl text-center text-xs font-bold text-muted-foreground cursor-pointer hover:border-primary transition-all">
                                        Drop your technical CV / Portfolio here
                                    </div>
                                    <Button className="w-full py-6 font-bold gap-2">
                                        Submit Application <Send size={18} />
                                    </Button>
                                </form>
                            ) : (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                                        <Briefcase className="text-muted-foreground" />
                                    </div>
                                    <p className="text-sm text-muted-foreground font-semibold px-4">Select a position to begin your Top 1% assessment.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-8 space-y-4">
                            <h5 className="font-bold text-lg">Employee Benefits</h5>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-3"><Clock size={16} className="text-primary" /> Unlimited Paid Time Off</li>
                                <li className="flex items-center gap-3"><Globe size={16} className="text-primary" /> Fully Remote & Global Culture</li>
                                <li className="flex items-center gap-3"><Star size={16} className="text-primary" /> Competitive Equity Packages</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer />
        </main>
    )
}
