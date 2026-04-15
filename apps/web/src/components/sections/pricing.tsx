"use client"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

const plans = [
    {
        name: "AI Pilot",
        price: "$4,900",
        description: "Perfect for fast validation and initial MVP launches.",
        features: [
            "Custom Next.js Frontend",
            "Basic AI Integration (OpenAI)",
            "Standard Analytics",
            "1 Month Free Support",
        ],
        popular: false,
    },
    {
        name: "Agency Scale",
        price: "$12,500",
        description: "Comprehensive software suite for scaling businesses.",
        features: [
            "Everything in AI Pilot",
            "Advanced Machine Learning Models",
            "High-Performance Edge Caching",
            "Conversion Optimization Audit",
            "3 Months Platinum Support",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Bespoke automation systems and complex architectures.",
        features: [
            "Everything in Agency Scale",
            "Dedicated Full-Stack Team",
            "Custom Microservices",
            "On-Premise or Private Cloud",
            "SLA Guarantees",
        ],
        popular: false,
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-accent/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">Transparent Pricing</Badge>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                        Invest in Growth
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We build high-ROI digital assets that pay for themselves through increased conversion and operational automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-card rounded-3xl p-8 border ${plan.popular ? "border-primary shadow-2xl scale-[1.02] md:-translate-y-4" : "border-border/50 shadow-md"} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1">
                                        <Sparkles className="w-3.5 h-3.5 mr-1" /> Most Recommended
                                    </Badge>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl md:text-5xl font-bold font-heading">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="mt-1 bg-primary/20 p-0.5 rounded-full mr-3 text-primary">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-foreground text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link 
                                href="/book" 
                                className={cn(
                                    "w-full rounded-full h-11 inline-flex items-center justify-center font-bold transition-all",
                                    plan.popular 
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90" 
                                        : "border border-border bg-background hover:bg-muted text-foreground"
                                )}
                            >
                                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
