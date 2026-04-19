"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import { TalentsGrid } from "@/components/sections/talents"
import { screeningSteps, talentRoles, trustStats } from "@/lib/growmodo-content"

export default function TalentsPage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Talents</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">Cherry-pick skills on demand</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Your project manager delegates work task by task, making sure qualified specialists handle the right requests at the right time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {trustStats.slice(2).map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                            <p className="font-heading text-5xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                    <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
                        <p className="font-heading text-5xl font-bold text-primary">1</p>
                        <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">All-in-one membership</p>
                    </div>
                </div>

                <div className="mb-20 flex flex-wrap justify-center gap-3">
                    {talentRoles.map((role) => (
                        <span key={role} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-muted-foreground">
                            {role}
                        </span>
                    ))}
                </div>

                <TalentsGrid />

                <section className="mt-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Screening and talent development</h2>
                        <p className="text-muted-foreground">
                            ElvateAI combines vetting, onboarding, training, and peer review so clients get reliable work from people who understand managed delivery.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {screeningSteps.map((step, index) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.07 }}
                                className="rounded-xl border border-border bg-card p-6 shadow-sm"
                            >
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="font-heading text-xl font-bold">{step}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
            <FloatingActions />
        </main>
    )
}
