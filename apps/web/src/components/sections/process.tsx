"use client"

import { motion } from "framer-motion"
import { processSteps } from "@/lib/growmodo-content"

export function Process() {
    return (
        <section id="process" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-8"
                    >
                        The quickest way to onboard creative talent to your team
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl px-4"
                    >
                        Start with a clean request queue, get matched with specialists, and scale output without traditional hiring cycles.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-card dark:bg-[#f6f6f6] border border-border/50 rounded-xl p-10 flex flex-col h-full min-h-[320px] relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold">
                                {index + 1}
                            </span>
                            <h3 className="text-3xl font-heading font-bold text-foreground dark:text-[#111] mb-4">{step.title}</h3>
                            <p className="text-lg text-muted-foreground dark:text-[#666] leading-relaxed">
                                {step.description}
                            </p>

                            <div className="absolute bottom-8 right-8 flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 border-2 border-primary rotate-45 bg-transparent" />
                                <div className="w-12 h-12 bg-[#cbf026] rotate-45 -ml-6 group-hover:scale-110 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
