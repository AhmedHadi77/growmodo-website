import { clientLogos, trustStats } from "@/lib/growmodo-content"

export function SocialProof() {
    return (
        <section className="py-20 border-b border-border/50 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                <div className="flex-1 w-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight mb-8 max-w-sm">
                        Trusted by fast-moving brands and agencies worldwide
                    </h3>
                    <div className="grid grid-cols-2 gap-6 border-l-2 border-primary/20 pl-6">
                        {trustStats.slice(0, 4).map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl md:text-5xl font-bold font-heading text-blue-600 dark:text-blue-500 mb-2">{stat.value}</p>
                                <p className="text-foreground font-semibold text-sm tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-[1.5] w-full grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 items-center justify-items-center">
                    {clientLogos.map((logo) => (
                        <span key={logo} className="font-heading font-bold text-xl tracking-tight text-muted-foreground">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
