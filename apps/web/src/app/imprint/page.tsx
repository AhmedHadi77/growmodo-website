import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { legalPages } from "@/lib/growmodo-content"

export default function ImprintPage() {
    const page = legalPages.imprint

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-8">{page.title}</h1>
                    <p className="text-lg leading-relaxed text-muted-foreground">{page.body}</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}
