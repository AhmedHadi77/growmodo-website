"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { showcaseItems } from "@/lib/growmodo-content"

export function CaseStudies() {
    return (
        <section id="work" className="py-24 bg-card relative border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                            Selected work from ElvateAI talents
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Explore the kinds of design, development, creative production, and project-management support teams delegate to ElvateAI.
                        </p>
                    </div>
                    <Link href="/showcase" className="hidden md:block">
                        <Button variant="outline" className="rounded-md font-semibold border-2 border-border shadow-sm">
                            View All Work <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {showcaseItems.slice(0, 4).map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col"
                        >
                            <Link href={`/showcase/${project.slug}`} className="relative w-full aspect-[4/3] rounded-xl mb-8 overflow-hidden border border-border/50 shadow-md block">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                    <Button className="rounded-md shadow-2xl px-6 h-12">Read Work Story</Button>
                                </div>
                            </Link>

                            <div>
                                <span className="text-primary font-bold text-sm mb-3 uppercase tracking-wider block">{project.category}</span>
                                <h3 className="text-3xl font-bold font-heading mb-4 text-card-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-lg mb-6">{project.summary}</p>

                                <div className="flex flex-wrap gap-3">
                                    {project.services.map((service) => (
                                        <span key={service} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link href="/showcase" className="block md:hidden">
                    <Button variant="outline" className="w-full mt-8 rounded-md border-2 border-border font-semibold">
                        View All Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}
