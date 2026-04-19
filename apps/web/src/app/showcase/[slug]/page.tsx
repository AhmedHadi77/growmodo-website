"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { showcaseItems } from "@/lib/growmodo-content"

export default function ShowcaseDetail() {
    const params = useParams()
    const slug = params.slug as string
    const project = showcaseItems.find((item) => item.slug === slug) ?? showcaseItems[0]

    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 max-w-4xl"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Work Story</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8">{project.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">{project.summary}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-8 mt-12 text-sm">
                        <div>
                            <span className="text-muted-foreground block mb-2">Client</span>
                            <span className="font-semibold text-lg">{project.client}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Model</span>
                            <span className="font-semibold text-lg">Membership</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Category</span>
                            <span className="font-semibold text-lg">{project.category}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Team</span>
                            <span className="font-semibold text-lg">Managed pod</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-border/50"
                    >
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl border border-border bg-card p-8 md:p-12"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">How ElvateAI supports this work</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                            A project manager turns business priorities into clear requests, assigns the right specialists, keeps the queue moving, and loops the client into progress without heavy meeting overhead.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.services.map((service) => (
                                <span key={service} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-heading font-bold mb-6">Want this kind of support?</h2>
                    <p className="text-lg text-muted-foreground mb-8">Book a call to see which membership plan fits your current request volume.</p>
                    <Link href="/book" className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                        Book a Discovery Call
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}
