"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Github, Twitter } from "lucide-react"

export function FounderVision() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                            
                            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-muted shadow-2xl">
                                <Image
                                    src="/images/ceo.jpg"
                                    alt="Ahmed Hadi - CEO & Founder"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Social Tags */}
                            <div className="absolute -right-6 top-1/4 flex flex-col gap-3">
                                <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                    <Twitter size={18} />
                                </motion.a>
                                <motion.a href="#" whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Founded by Vision</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
                                A Message from our <br /> Founder, Ahmed Hadi
                            </h2>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <Quote className="absolute -top-6 -left-8 w-16 h-16 text-primary/10 -z-10" />
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed italic">
                                <p>
                                    "When I started Elevate, I saw a world full of talent but filtered through broken systems. Agencies were too slow, and freelancers were too inconsistent. We built Elevate to bridge that gap—merging the flexibility of a membership with the elite quality of a top-tier engineering firm."
                                </p>
                                <p>
                                    "Our mission is simple: to empower high-growth companies with the technical infrastructure and human creativity they need to scale at the speed of thought. Whether you're building a new AI platform or scaling a complex React suite, we are your real-time partners in excellence."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <span className="font-heading font-bold text-2xl text-foreground block">Ahmed Hadi</span>
                            <span className="text-primary font-medium">CEO & Founder, Elevate Agency</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
