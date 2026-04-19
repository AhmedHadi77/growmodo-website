"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { CheckCircle2, Loader2, MapPin } from "lucide-react"

const jobDetails: Record<string, { title: string; department: string; responsibilities: string[]; requirements: string[] }> = {
    "ui-ux-designer": {
        title: "UI/UX Designer",
        department: "Design",
        responsibilities: [
            "Design landing pages, websites, funnels, and product interfaces.",
            "Turn briefs into Figma concepts, wireframes, and high-fidelity UI.",
            "Collaborate with project managers and developers on delivery handoff.",
        ],
        requirements: [
            "Strong portfolio of web and product design work.",
            "Comfort working from briefs and client feedback.",
            "Clear written communication and attention to detail.",
        ],
    },
    "webflow-developer": {
        title: "Webflow Developer",
        department: "Development",
        responsibilities: [
            "Build responsive Webflow sites and CMS structures.",
            "Implement interactions, components, forms, and launch checks.",
            "Fix bugs, update pages, and support ongoing maintenance requests.",
        ],
        requirements: [
            "Strong Webflow development experience.",
            "Understanding of responsive design and site performance.",
            "Comfort collaborating with designers and project managers.",
        ],
    },
    "video-editor": {
        title: "Video Editor",
        department: "Creative",
        responsibilities: [
            "Edit short-form videos, ads, product clips, and motion assets.",
            "Adapt creative direction into polished client-ready deliverables.",
            "Organize files and revisions for smooth client review cycles.",
        ],
        requirements: [
            "Strong editing portfolio.",
            "Experience with social-first video formats.",
            "Reliable turnaround and clear async communication.",
        ],
    },
}

export default function JobDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const job = jobDetails[slug] || jobDetails["ui-ux-designer"]

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        portfolio: "",
        linkedin: "",
        experience: "",
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
                    type: "job_application",
                    role: job.title,
                }),
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong")
            }

            setStatus("success")
        } catch (err) {
            setStatus("error")
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-background pt-32 pb-20">
            <Header />

            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                                {job.department}
                            </div>
                            <span className="text-muted-foreground flex items-center gap-1.5"><MapPin size={16} /> Remote</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-8">
                            {job.title}
                        </h1>
                    </motion.div>

                    <div className="space-y-10">
                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6">Key Responsibilities</h2>
                            <ul className="space-y-4">
                                {job.responsibilities.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6">Requirements</h2>
                            <ul className="space-y-4">
                                {job.requirements.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-8 md:p-10 rounded-xl shadow-2xl border border-border/50 sticky top-32"
                    >
                        <h3 className="text-2xl font-bold font-heading mb-2">Apply Now</h3>
                        <p className="text-sm text-muted-foreground mb-8">Submit your details and we will review your fit for the talent pool.</p>

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                                <div className="w-16 h-16 bg-[#7bbf00]/10 rounded-full flex items-center justify-center text-[#7bbf00]">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h4 className="text-xl font-bold">Application Received</h4>
                                <p className="text-sm text-muted-foreground">We will reach out to you at {formData.email}.</p>
                                <button onClick={() => setStatus("idle")} className="text-primary text-sm font-semibold hover:underline">Apply again</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input required placeholder="First Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                    <input required placeholder="Last Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                                <input required type="email" placeholder="Personal Email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                                <input required type="url" placeholder="Portfolio / Website URL" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                />
                                <input type="url" placeholder="LinkedIn Profile" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                                <textarea required rows={3} placeholder="Tell us about relevant client work..." className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                                    value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })}
                                />

                                {status === "error" && (
                                    <div className="p-3 bg-destructive/10 text-destructive text-xs rounded-lg">
                                        {errorMsg}
                                    </div>
                                )}

                                <button
                                    disabled={status === "loading"}
                                    className="w-full bg-primary text-primary-foreground font-bold rounded-lg py-4 mt-4 hover:shadow-lg transition-all flex items-center justify-center"
                                >
                                    {status === "loading" ? <Loader2 className="animate-spin" /> : "Submit Application"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
