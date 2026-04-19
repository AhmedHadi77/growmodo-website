"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { showcaseItems, testimonials } from "@/lib/growmodo-content"

export default function ShowcasePage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-20"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Showcase</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">Selected work from our talents</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        ElvateAI supports agencies, marketing teams, and scale-ups with recurring design, development, creative, and maintenance requests.
                    </p>
                </motion.div>

                <div id="selected-work" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {showcaseItems.map((project, index) => (
                        <motion.article
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                        >
                            <Link href={`/showcase/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            </Link>
                            <div className="p-8">
                                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{project.category}</p>
                                <h2 className="font-heading text-3xl font-bold mb-4">{project.title}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
                                <div className="mb-8 flex flex-wrap gap-3">
                                    {project.services.map((service) => (
                                        <span key={service} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/showcase/${project.slug}`}>
                                    <Button className="rounded-md gap-2">
                                        Read Work Story <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <section id="testimonials" className="pt-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-heading text-4xl font-bold mb-4">What clients say</h2>
                        <p className="text-muted-foreground">Teams use ElvateAI to keep creative and technical work moving without the friction of hiring.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.slice(0, 6).map((testimonial) => (
                            <div key={testimonial.name} className="rounded-xl border border-border bg-card p-6">
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <p className="font-heading font-bold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
            <FloatingActions />
        </main>
    )
}
