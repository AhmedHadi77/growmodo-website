"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function TalentProfile() {
    const params = useParams()
    // Simulated fetch based on role
    const roleSlug = params.role as string
    const title = roleSlug.replace("-", " ") 

    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                
                {/* Profile Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Top 1% Talent</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 capitalize">{title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Our {title} are not just standard developers. They are elite problem solvers who understand the entire stack. They build robust architectures that handle millions of requests, utilizing cutting edge AI technologies.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                                <span className="font-semibold text-lg">Rigorous Vetting Process Passed</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                                <span className="font-semibold text-lg">Fluent English Communication</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                                <span className="font-semibold text-lg">Immediate Availability in your Timezone</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                    >
                        <Image src="/ai_portrait.png" alt="Talent Abstract" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h3 className="text-3xl font-heading font-bold">Senior Grade</h3>
                            <p className="text-white/80 text-lg">5+ Years Native Experience</p>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack Visuals Grid */}
                <div className="mb-24">
                    <h2 className="text-4xl font-heading font-bold text-center mb-16">The Tools We Master</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-border/50"
                        >
                             <Image src="/ai_code.png" alt="Code Stack" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Algorithms</h3>
                             </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-border/50"
                        >
                             <Image src="/ai_server.png" alt="Server Infrastructure" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Infrastructure</h3>
                             </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
