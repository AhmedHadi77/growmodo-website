import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { faqs } from "@/lib/growmodo-content"

export default function FAQPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">FAQ</span>
                        <h1 className="mt-4 text-5xl md:text-7xl font-heading font-extrabold tracking-tight">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <article key={faq.question} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                                <h2 className="font-heading text-2xl font-bold mb-3">{faq.question}</h2>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
