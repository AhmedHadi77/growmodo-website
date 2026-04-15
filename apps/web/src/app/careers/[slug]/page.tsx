"use client"
import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { CheckCircle2, Loader2, MapPin, Clock, Briefcase, GraduationCap, Laptop } from "lucide-react"

const jobDetails: Record<string, any> = {
    "ai-automation-engineer": {
        title: "AI Automation Engineer",
        department: "Engineering",
        salary: "$80k - $150k",
        responsibilities: [
            "Architect and implement complex LLM workflows and multi-agent systems.",
            "Integrate vector databases (Pinecone, Weaviate) for RAG implementations.",
            "Optimize prompt engineering strategies for production-grade reliability.",
            "Collaborate with product teams to define technical feasibility of AI features."
        ],
        requirements: [
            "Strong proficiency in Python or TypeScript.",
            "Experience with OpenAI SDK, Anthropic, or LangChain.",
            "Understanding of embeddings, tokenization, and vector search.",
            "Proven track record of building production-ready software."
        ]
    },
    "senior-product-designer": {
        title: "Senior Product Designer",
        department: "Design",
        salary: "$70k - $130k",
        responsibilities: [
            "Own the end-to-end design process for complex web and mobile products.",
            "Create high-fidelity prototypes that demonstrate advanced motion and interaction.",
            "Work closely with engineers to ensure pixel-perfect implementation.",
            "Evolve our internal design systems and component libraries."
        ],
        requirements: [
            "5+ years of experience in product design (UI/UX).",
            "Expert level proficiency in Figma and prototyping tools.",
            "Strong portfolio demonstrating high-end aesthetics and clean usability.",
            "Experience designing for SaaS, FinTech, or AI-driven platforms."
        ]
    }
}

export default function JobDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const job = jobDetails[slug] || jobDetails["ai-automation-engineer"] // Fallback for prototype

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        portfolio: "",
        linkedin: "",
        experience: ""
    })
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMsg, setErrorMsg] = React.useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    ...formData, 
                    type: 'job_application',
                    role: job.title 
                })
            })
            
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong")
            }
            
            setStatus("success")
        } catch (err: any) {
            setStatus("error")
            setErrorMsg(err.message)
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-background pt-32 pb-20">
            <Header />
            
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Column: Job Info */}
                <div className="lg:col-span-7 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                             <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                                {job.department}
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground flex items-center gap-1.5"><MapPin size={16}/> Remote</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-8">
                            {job.title}
                        </h1>
                        
                        <div className="flex flex-wrap gap-8 py-8 border-y border-border/50">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Expertise</p>
                                <p className="font-semibold">Senior Level</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Salary Range</p>
                                <p className="font-semibold">{job.salary}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Timezone</p>
                                <p className="font-semibold">Flexible</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-10">
                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                                <Laptop className="text-primary w-6 h-6" /> Key Responsibilities
                            </h2>
                            <ul className="space-y-4">
                                {job.responsibilities.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                                <GraduationCap className="text-primary w-6 h-6" /> Requirements
                            </h2>
                            <ul className="space-y-4">
                                {job.requirements.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Right Column: Application Form */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-border/50 sticky top-32"
                    >
                        <h3 className="text-2xl font-bold font-heading mb-2">Apply Now</h3>
                        <p className="text-sm text-muted-foreground mb-8">Submit your details and we'll review within 48 hours.</p>

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                                <div className="w-16 h-16 bg-[#A3FF00]/10 rounded-full flex items-center justify-center text-[#A3FF00]">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h4 className="text-xl font-bold">Application Received!</h4>
                                <p className="text-sm text-muted-foreground">Good luck! We'll reach out to you at {formData.email}.</p>
                                <button onClick={() => setStatus("idle")} className="text-primary text-sm font-semibold hover:underline">Apply for another role</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input required placeholder="First Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" 
                                        value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})}
                                    />
                                    <input required placeholder="Last Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})}
                                    />
                                </div>
                                <input required type="email" placeholder="Personal Email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                                <input required type="url" placeholder="Portfolio / Website URL" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.portfolio} onChange={e => setFormData({...formData, portfolio: e.target.value})}
                                />
                                <input type="url" placeholder="LinkedIn Profile" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})}
                                />
                                <textarea required rows={3} placeholder="Tell us about your biggest win..." className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                                    value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})}
                                />

                                {status === "error" && (
                                    <div className="p-3 bg-destructive/10 text-destructive text-xs rounded-lg">
                                        {errorMsg}
                                    </div>
                                )}

                                <button 
                                    disabled={status === "loading"}
                                    className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 mt-4 hover:shadow-lg transition-all flex items-center justify-center"
                                >
                                    {status === "loading" ? <Loader2 className="animate-spin" /> : "Submit Application"}
                                </button>
                                <p className="text-[10px] text-center text-muted-foreground mt-4 px-4">
                                By submitting, you agree to our recruitment data processing terms and privacy policy.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
            
            <Footer />
        </main>
    )
}
