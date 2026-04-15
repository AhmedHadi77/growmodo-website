"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const cases = [
    {
        title: "SaaS Platform Scaling",
        category: "AI + Next.js Architecture",
        description: "Re-engineered a legacy monolithic application into a high-performance microservices architecture using Next.js and AI-powered caching.",
        metrics: [
            { label: "Page Load Speed", value: "-75%", icon: Zap },
            { label: "Conversion Rate", value: "+120%", icon: TrendingUp },
        ],
        image: "/saas.png",
    },
    {
        title: "E-Commerce Automation",
        category: "Shopify + Machine Learning",
        description: "Integrated custom predictive AI models into a massive Shopify store to personalize product recommendations in real-time.",
        metrics: [
            { label: "Revenue Lift", value: "+45%", icon: TrendingUp },
            { label: "Manual Work", value: "-80%", icon: Zap },
        ],
        image: "/ecommerce.png",
    },
]

export function CaseStudies() {
    return (
        <section id="work" className="py-24 bg-card relative border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                            Proven Impact
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We don't just write code; we deliver measurable business outcomes. Explore our recent successes scaling digital products.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex rounded-md font-semibold border-2 border-border shadow-sm">
                        View All Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group cursor-pointer flex flex-col"
                        >
                            <div className={`w-full aspect-[4/3] rounded-2xl mb-8 overflow-hidden relative border border-border/50 shadow-md`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                    <Button className="rounded-full shadow-2xl px-6 h-12">Read Case Study</Button>
                                </div>
                            </div>

                            <div>
                                <span className="text-primary font-bold text-sm mb-3 uppercase tracking-wider block">{project.category}</span>
                                <h3 className="text-3xl font-bold font-heading mb-4 text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-lg mb-8 line-clamp-2">{project.description}</p>

                                <div className="flex gap-8">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="flex flex-col border-l-2 border-primary pl-5 py-1">
                                            <span className="text-3xl font-bold font-heading text-foreground flex items-center mb-1">
                                                {metric.value} <metric.icon className="w-5 h-5 ml-2 text-primary translate-y-[2px]" />
                                            </span>
                                            <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Button variant="outline" className="w-full mt-8 md:hidden rounded-md border-2 border-border font-semibold">
                    View All Work <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </section>
    )
}
