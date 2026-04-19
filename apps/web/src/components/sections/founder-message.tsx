"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export function FounderVision() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                            <div className="relative h-full w-full rounded-xl overflow-hidden bg-muted shadow-2xl">
                                <Image
                                    src="/workflow_3d.png"
                                    alt="ElvateAI managed creative workflow"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Managed talent membership</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
                                Built for teams that need more creative capacity, not more hiring admin
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <Quote className="absolute -top-6 -left-8 w-16 h-16 text-primary/10 -z-10" />
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    ElvateAI works like an extension of your in-house team. Your project manager keeps the request queue organized, matches each task with the right specialist, and sends clear progress updates.
                                </p>
                                <p>
                                    Designers, developers, video editors, automation specialists, and project managers can move in and out of your workflow based on what the next request needs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
                        >
                            {["No recruiting fees", "Daily updates", "Flexible capacity"].map((item) => (
                                <div key={item} className="rounded-lg border border-border bg-card p-4 font-bold text-foreground">
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
