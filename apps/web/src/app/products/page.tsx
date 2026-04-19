"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { products } from "@/lib/growmodo-content"

export default function ProductsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Products</span>
                        <h1 className="mt-4 text-5xl md:text-7xl font-heading font-extrabold tracking-tight">
                            Unlock the growth potential of your agency or marketing team
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Resources and training built around better websites, funnels, campaigns, and growth design decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <article key={product.name} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                                <h2 className="font-heading text-3xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>
                                <Link href={product.href} className="inline-flex h-11 items-center rounded-md bg-primary px-5 font-bold text-primary-foreground hover:bg-primary/90">
                                    {product.status}
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            <FloatingActions />
        </main>
    )
}
