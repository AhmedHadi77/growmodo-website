"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { maintenancePlan, pricingPlans, pricingProof } from "@/lib/growmodo-content"

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-accent/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">Monthly Membership</Badge>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                        Plans for growing design and dev operations
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Start with the capacity you need today. Upgrade, downgrade, pause, or cancel when your workload changes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={`${plan.label}-${plan.price}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={cn(
                                "relative bg-card rounded-xl p-8 border flex flex-col",
                                plan.popular ? "border-primary shadow-2xl" : "border-border/50 shadow-md"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1">
                                        <Sparkles className="w-3.5 h-3.5 mr-1" /> Popular
                                    </Badge>
                                </div>
                            )}

                            <div className="mb-8">
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{plan.name}</p>
                                <h3 className="text-2xl font-heading font-bold mb-2">{plan.label}</h3>
                                <p className="text-muted-foreground text-sm min-h-[60px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl md:text-5xl font-bold font-heading">{plan.price}</span>
                                {plan.cadence && <span className="text-muted-foreground">{plan.cadence}</span>}
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start">
                                        <div className="mt-1 bg-primary/20 p-0.5 rounded-full mr-3 text-primary">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-foreground text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={plan.price === "Custom" ? "/book" : "/checkout"}
                                className={cn(
                                    "w-full rounded-md h-11 inline-flex items-center justify-center font-bold transition-all",
                                    plan.popular
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                                        : "border border-border bg-background hover:bg-muted text-foreground"
                                )}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 rounded-xl border border-border bg-card p-8 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                        <div>
                            <Badge variant="secondary" className="mb-4">Need a Maintenance Plan?</Badge>
                            <h3 className="text-3xl font-heading font-bold mb-3">{maintenancePlan.name}</h3>
                            <p className="text-muted-foreground mb-6">{maintenancePlan.description}</p>
                            <div className="mb-6">
                                <span className="text-4xl font-heading font-bold">{maintenancePlan.price}</span>
                                <span className="text-muted-foreground">{maintenancePlan.cadence}</span>
                            </div>
                            <Link href="/checkout?plan=maintenance" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                                Subscribe Now
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {maintenancePlan.features.map((feature) => (
                                <div key={feature} className="flex items-start rounded-lg border border-border bg-background p-4">
                                    <Check className="mt-0.5 mr-3 h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {pricingProof.map((proof) => (
                        <div key={proof.label} className="rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                            <p className="font-heading text-5xl font-bold text-primary">{proof.value}</p>
                            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">{proof.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
