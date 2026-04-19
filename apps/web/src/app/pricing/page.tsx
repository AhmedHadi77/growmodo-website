"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { Pricing } from "@/components/sections/pricing"
import { motion } from "framer-motion"
import { faqs } from "@/lib/growmodo-content"

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Plans & Pricing</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">Scale your design and dev team without growing payroll</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        ElvateAI memberships give fast-moving teams access to managed creative and technical talent at predictable monthly rates.
                    </p>
                </motion.div>
            </div>

            <Pricing />

            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">Frequently asked questions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.slice(0, 4).map((faq) => (
                            <div key={faq.question} className="rounded-xl border border-border bg-card p-6">
                                <h3 className="font-heading text-xl font-bold mb-3">{faq.question}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </main>
    )
}
