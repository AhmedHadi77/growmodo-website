export function SocialProof() {
    return (
        <section className="py-20 border-b border-border/50 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                {/* Left Side: Stats */}
                <div className="flex-1 w-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight mb-8 max-w-sm">
                        Trusted by fast-moving brands & agencies worldwide
                    </h3>
                    <div className="flex items-start gap-8 border-l-2 border-primary/20 pl-6">
                        <div>
                            <p className="text-3xl md:text-5xl font-bold font-heading text-blue-600 dark:text-blue-500 mb-2">10,000+</p>
                            <p className="text-foreground font-semibold text-sm tracking-wide">Tasks delivered</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-5xl font-bold font-heading text-blue-600 dark:text-blue-500 mb-2">200+</p>
                            <p className="text-foreground font-semibold text-sm tracking-wide">Projects nailed</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Logos */}
                <div className="flex-[1.5] w-full grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 items-center justify-items-center">
                    {/* System Logos Replicas */}
                    <span className="font-heading font-bold text-2xl tracking-tighter text-muted-foreground">systeme</span>
                    <span className="font-heading font-black text-2xl tracking-widest text-muted-foreground flex items-center gap-1">
                        <div className="w-5 h-5 bg-muted-foreground" /> MAXONE
                    </span>
                    <span className="font-heading font-medium text-xl tracking-widest text-muted-foreground italic">TEEMYCO</span>
                    <span className="font-heading font-bold text-2xl tracking-tight text-muted-foreground">LYFEfuel</span>
                    <span className="font-heading font-extrabold text-2xl tracking-tight text-muted-foreground">staffgeek</span>
                    <span className="font-heading font-semibold text-xl text-muted-foreground flex items-center gap-2">☁️ sendcloud</span>
                </div>

            </div>
        </section>
    )
}
