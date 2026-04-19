"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { brand, talentProfiles, talentRoles } from "@/lib/growmodo-content"

export function Hero() {
    const [currentRole, setCurrentRole] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % talentRoles.length)
        }, 2200)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-card dark:bg-[#0f0f0f] border-b border-border/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
                <div className="flex flex-col items-start pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground"
                    >
                        <CheckCircle2 className="h-4 w-4 text-[#7bbf00]" />
                        Onboard vetted experts in 24 hours
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-tight mb-8"
                    >
                        {brand.heroTitle}
                        <span className="block text-[#7bbf00] dark:text-[#cbf026] min-h-[1.1em] mt-3">
                            {talentRoles[currentRole]}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium mb-10"
                    >
                        {brand.heroSubtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link href="/book" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90">
                            {brand.primaryCta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link href="/showcase" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 font-bold text-foreground transition-all hover:bg-muted">
                            {brand.secondaryCta}
                        </Link>
                    </motion.div>

                    <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-muted-foreground">
                        {["No endless profile scrolling", "No draining interviews", "No recruiting fees"].map((item) => (
                            <span key={item} className="rounded-full border border-border bg-background px-4 py-2">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {talentProfiles.slice(0, 4).map((talent, index) => (
                        <div
                            key={talent.name}
                            className={`relative min-h-[220px] overflow-hidden rounded-xl border border-border/50 shadow-xl ${talent.accent} ${index % 2 === 1 ? "mt-8" : ""}`}
                        >
                            <Image
                                src={talent.image}
                                alt={talent.name}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover mix-blend-multiply opacity-85 dark:mix-blend-normal"
                            />
                            <div className="absolute inset-x-3 bottom-3 rounded-lg bg-background/95 p-3 shadow-lg backdrop-blur">
                                <p className="font-heading text-base font-bold text-foreground">{talent.name}</p>
                                <p className="text-xs font-medium text-muted-foreground">{talent.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
