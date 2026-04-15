"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function ShowcaseDetail() {
    const params = useParams()
    // Simulated fetch based on slug, defaulting to Collab AI for this prototype
    const title = params.slug === 'collab-ai' ? "Collab AI Platform" : "Enterprise Solutions"

    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                
                {/* Hero Header for Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-32 max-w-4xl"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Case Study</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 capitalize">{title}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-8 mt-12 text-sm">
                        <div>
                            <span className="text-muted-foreground block mb-2">Client</span>
                            <span className="font-semibold text-lg">{title} Inc.</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Timeline</span>
                            <span className="font-semibold text-lg">12 Weeks</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Services</span>
                            <span className="font-semibold text-lg">UX/UI, Next.js, AI</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-2">Platform</span>
                            <span className="font-semibold text-lg">Web & iOS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Massive Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {/* Left Column */}
                    <div className="space-y-8 flex flex-col pt-0 md:pt-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                        >
                             <Image src="/collab_dash.png" alt="Dashboard" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="p-8 md:p-12 bg-card rounded-[2rem] border border-border/50 shadow-sm"
                        >
                            <h3 className="text-2xl font-bold font-heading mb-4">The Challenge</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Collab approached us to revolutionize their outdated dashboard. They needed a slick, dark-mode experience capable of rendering real-time AI analytics without dropping a single frame. Data density was high, but the aesthetic needed to remain minimalist.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                        >
                             <Image src="/collab_soc.png" alt="Marketing" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 flex flex-col">
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="p-8 md:p-12 bg-primary/5 rounded-[2rem] border border-primary/20 shadow-sm"
                        >
                            <h3 className="text-2xl font-bold font-heading mb-4">The Execution</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We designed a bespoke design system leaning heavily into glassmorphism and electric accents. The mobile experience was built simultaneously in React Native, ensuring 100% feature parity.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative aspect-[3/4] md:aspect-[2/3] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-8 flex justify-center items-center"
                        >
                             <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-[2.5rem] overflow-hidden border-[6px] border-background shadow-2xl">
                                <Image src="/collab_mob.png" alt="Mobile App" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                             </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                        >
                             <Image src="/dashboard.png" alt="Original Dash" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Call to action */}
                <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-heading font-bold mb-6">Want results like these?</h2>
                    <p className="text-lg text-muted-foreground mb-8">Book a call to see how our embedded talent can scale your product.</p>
                </motion.div>

            </div>
            <Footer />
        </main>
    )
}
