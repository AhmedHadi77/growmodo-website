import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"

export default function NewsletterPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Newsletter</span>
                    <h1 className="mt-4 text-5xl md:text-7xl font-heading font-extrabold tracking-tight">
                        Coming soon
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        A future home for ideas on design, marketing, products, and creative operations.
                    </p>
                    <Link href="/book" className="mt-10 inline-flex h-12 items-center rounded-md bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                        Book a Discovery Call
                    </Link>
                </div>
            </section>
            <Footer />
            <FloatingActions />
        </main>
    )
}
