"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { projectCategories, scopeCategories } from "@/lib/growmodo-content"

export default function ScopePage() {
    const [query, setQuery] = React.useState("")
    const normalizedQuery = query.trim().toLowerCase()

    const filteredCategories = scopeCategories
        .map((category) => ({
            ...category,
            items: category.items.filter((item) =>
                `${category.name} ${item}`.toLowerCase().includes(normalizedQuery)
            ),
        }))
        .filter((category) => category.items.length > 0)

    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-16"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Scope of Work</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">The candy store of design and dev work</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Browse the request types ElvateAI can help with, from UI design and development to maintenance, automation, no-code, and conversion support.
                    </p>
                </motion.div>

                <div className="mx-auto mb-12 max-w-2xl">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search services..."
                            className="h-14 w-full rounded-md border border-border bg-card pl-12 pr-4 text-base outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                </div>

                <div className="mb-16 flex flex-wrap justify-center gap-3">
                    {projectCategories.map((category) => (
                        <span key={category} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-muted-foreground">
                            {category}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            className="rounded-xl border border-border bg-card p-6 shadow-sm"
                        >
                            <h2 className="font-heading text-2xl font-bold mb-5">{category.name}</h2>
                            <div className="space-y-3">
                                {category.items.map((item) => (
                                    <div key={item} className="rounded-lg bg-background p-4">
                                        <p className="font-bold text-foreground">{item}</p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">1-4 days avg. turnaround</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
            <FloatingActions />
        </main>
    )
}
