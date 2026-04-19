"use client"

import { motion } from "framer-motion"
import { Brain, Clock3, Handshake, LockKeyhole, RefreshCw, ShieldCheck, Users, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { coreBenefits } from "@/lib/growmodo-content"

const icons = [Users, Brain, Handshake, RefreshCw, Clock3, Zap, ShieldCheck, LockKeyhole]

export function Services() {
    return (
        <section id="services" className="py-24 bg-accent/20 dark:bg-card/30 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">
                            What you get from ElvateAI
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium">
                            Meet your new team members minus the recruiting, HR, operations, and admin work.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {coreBenefits.map((feature, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <motion.div
                                key={feature.title}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <Card className="h-full border-border bg-card/60 hover:bg-card transition-colors shadow-sm hover:shadow-xl group">
                                    <CardHeader className="pb-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                        </div>
                                        <CardTitle className="text-xl font-heading font-bold tracking-tight">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
