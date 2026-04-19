"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { screeningSteps } from "@/lib/growmodo-content"

const roleDetails: Record<string, { title: string; image: string; skills: string[]; summary: string }> = {
    "ai-engineers": {
        title: "AI Engineers",
        image: "/ai_code.png",
        skills: ["LLM workflows", "Automation logic", "API integrations", "Internal tools"],
        summary: "AI specialists help teams automate workflows, connect tools, and make smarter use of existing data and processes.",
    },
    designers: {
        title: "Designers",
        image: "/workflow_3d.png",
        skills: ["UI/UX Design", "Graphic Design", "Brand Assets", "Landing Pages"],
        summary: "Designers support websites, campaigns, product screens, brand assets, and conversion-focused page updates.",
    },
    developers: {
        title: "Developers",
        image: "/ai_server.png",
        skills: ["Webflow", "Shopify", "WordPress", "Custom Code"],
        summary: "Developers turn approved designs and requests into reliable websites, stores, CMS pages, and integrations.",
    },
    video: {
        title: "Video Editors",
        image: "/mobile_app.png",
        skills: ["Short-form edits", "Motion graphics", "Ad creatives", "Product videos"],
        summary: "Video editors and motion designers create assets for campaigns, social channels, products, and launches.",
    },
}

export default function TalentProfile() {
    const params = useParams()
    const roleSlug = params.role as string
    const talent = roleDetails[roleSlug] ?? roleDetails.designers

    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Top talent pool</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">{talent.title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {talent.summary}
                        </p>
                        <ul className="space-y-4 mb-8">
                            {talent.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-lg">{skill}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/book" className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                            Get matched
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-border/50"
                    >
                        <Image src={talent.image} alt={talent.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 text-white">
                            <h3 className="text-3xl font-heading font-bold">Managed delivery</h3>
                            <p className="text-white/80 text-lg">Briefed, assigned, reviewed, and coordinated by your PM.</p>
                        </div>
                    </motion.div>
                </div>

                <section>
                    <h2 className="text-4xl font-heading font-bold text-center mb-12">How ElvateAI vets talent</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {screeningSteps.map((step, index) => (
                            <div key={step} className="rounded-xl border border-border bg-card p-6">
                                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</span>
                                <h3 className="font-heading text-xl font-bold">{step}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
