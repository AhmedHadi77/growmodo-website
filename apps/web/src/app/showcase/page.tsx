"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShowcasePage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-20"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Work</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">Design & Code That Helps<br />Your Business Grow</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        At Elevate, we don't just build beautiful interfaces; we engineer ecosystems. Explore some of our recent premium projects showcasing bleeding-edge technology paired with high-end aesthetic execution. 
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {/* Project 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                        >
                            <Image 
                                src="/dashboard.png" 
                                alt="Dashboard Interface" 
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </motion.div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold">Collab AI SaaS Platform</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The modern enterprise requires more than just CRMs; it requires proactive AI agents that seamlessly plug into their daily workflows. We partnered with Collab to build a dark-mode focused, glassmorphic analytics dashboard.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our development team utilized advanced Next.js server components and WebGL for data visualization, ensuring that rendering thousands of data points at 60fps feels utterly effortless. The design system prioritizes vital metrics with electric neon highlights, guiding user attention instantly.
                            </p>
                            <div className="flex gap-4 pt-4 border-t border-border/50">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Web App</span>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Dashboard</span>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">AI Integration</span>
                            </div>
                            <Button className="mt-8 rounded-full h-12 px-8 font-semibold gap-2 group">
                                Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-6 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold">Night Nest iOS App</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Transitioning from simple utility apps to fully immersive mobile experiences. Night Nest requested an interface that felt completely alien compared to native standard components.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Utilizing React Native and custom Reanimated logic, we built a mobile journey characterized by smooth, ethereal gradients and playful 3D interactivity. The app feels alive, responding to gyroscopic movements and touch momentum with sub-millisecond latency. A true showcase of our mobile engineering capabilities.
                            </p>
                            <div className="flex gap-4 pt-4 border-t border-border/50">
                                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">Mobile App</span>
                                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">UI/UX Design</span>
                            </div>
                            <Button className="mt-8 rounded-full h-12 px-8 font-semibold gap-2 group">
                                Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50 order-1 lg:order-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-[300px] shadow-2xl rounded-[3rem] overflow-hidden border-8 border-background">
                                <Image 
                                    src="/mobile_app.png" 
                                    alt="Mobile App Interface" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
            <FloatingActions />
        </main>
    )
}
