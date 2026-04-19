import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { guides } from "@/lib/growmodo-content"

export default function GuidesPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Guides</span>
                        <h1 className="mt-4 text-5xl md:text-7xl font-heading font-extrabold tracking-tight">
                            Practical guidance for better design and app projects
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            A resource hub for teams that want cleaner briefs, stronger websites, and smoother creative operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {guides.map((guide) => (
                            <article key={guide.title} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                                <h2 className="font-heading text-2xl font-bold mb-4">{guide.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
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
