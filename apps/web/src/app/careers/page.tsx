"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Globe, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const jobs = [
    {
        title: "UI/UX Designer",
        slug: "ui-ux-designer",
        department: "Design",
        location: "Remote",
        description: "Create website, product, and landing page designs for fast-moving client teams.",
    },
    {
        title: "Webflow Developer",
        slug: "webflow-developer",
        department: "Development",
        location: "Remote",
        description: "Build responsive Webflow sites, CMS structures, interactions, and launch-ready pages.",
    },
    {
        title: "Video Editor",
        slug: "video-editor",
        department: "Creative",
        location: "Remote",
        description: "Edit campaign videos, social ads, product clips, and motion assets for client work.",
    },
]

export default function CareersPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Header />

            <div className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto space-y-6"
                    >
                        <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-1">Join the talent pool</Badge>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground">
                            Work with ElvateAI clients from anywhere
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            ElvateAI partners with designers, developers, video editors, and project managers who can deliver reliable work inside a managed membership model.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto px-6 space-y-6">
                    {jobs.map((job, idx) => (
                        <motion.article
                            key={job.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-xl border border-border shadow-sm hover:shadow-xl transition-all bg-white"
                        >
                            <Link href={`/careers/${job.slug}`} className="flex flex-col md:flex-row justify-between gap-6">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1 font-semibold"><Globe size={14} /> {job.location}</span>
                                        <span className="flex items-center gap-1 font-semibold text-primary"><Star size={14} /> {job.department}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold hover:text-primary transition-colors">{job.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                                </div>
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}
