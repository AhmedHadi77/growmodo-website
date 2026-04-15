"use client"
import { motion } from "framer-motion"

export function Process() {
    return (
        <section id="process" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-8"
                    >
                        The Quickest Way To Onboard Talent To Your Team
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl px-4"
                    >
                        Join other ambitious marketing leaders who've built their secret weapon for scaling without the hiring headaches.
                    </motion.p>
                </div>

                {/* 3 Step Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-card dark:bg-[#f6f6f6] border border-border/50 rounded-2xl p-10 flex flex-col h-full min-h-[340px] relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-3xl font-heading font-bold text-foreground dark:text-[#111] mb-4">Kick-off</h3>
                        <p className="text-lg text-muted-foreground dark:text-[#666] leading-relaxed">
                            our partnership today and delegate your first projects.
                        </p>

                        {/* Geometric Art */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 flex items-center">
                            <div className="w-12 h-12 border-2 border-primary rotate-45 transform bg-transparent z-10" />
                            <div className="w-12 h-12 bg-blue-600 rotate-45 transform -ml-6 z-20 group-hover:scale-110 transition-transform" />
                            <div className="w-12 h-12 border-2 border-primary rotate-45 transform bg-transparent -ml-6 z-10" />
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-card dark:bg-[#f6f6f6] border border-border/50 rounded-2xl p-10 flex flex-col h-full min-h-[340px] relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-3xl font-heading font-bold text-foreground dark:text-[#111] mb-4">Get matched</h3>
                        <p className="text-lg text-muted-foreground dark:text-[#666] leading-relaxed">
                            with your creative dream team who 'get' your business.
                        </p>

                        {/* Geometric Art */}
                        <div className="absolute bottom-8 right-8 flex items-center group-hover:gap-1 transition-all">
                            <div className="w-14 h-14 rounded-full border-2 border-primary bg-transparent z-10 -mr-4" />
                            <div className="w-14 h-14 rounded-full bg-[#cbf026] border-2 border-primary z-20" />
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-card dark:bg-[#f6f6f6] border border-border/50 rounded-2xl p-10 flex flex-col h-full min-h-[340px] relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-3xl font-heading font-bold text-foreground dark:text-[#111] mb-4">Move faster</h3>
                        <p className="text-lg text-muted-foreground dark:text-[#666] leading-relaxed">
                            while scaling up and down based on your project needs.
                        </p>

                        {/* Geometric Art */}
                        <div className="absolute bottom-8 right-8 flex items-center group-hover:translate-x-2 transition-transform">
                            <div className="w-0 h-0 border-y-[20px] border-y-transparent border-l-[30px] border-l-transparent border-t-transparent border-r-transparent relative">
                                <div className="w-0 h-0 border-y-[18px] border-y-transparent border-l-[26px] border-l-primary absolute -left-[28px] -top-[18px] z-10 opacity-20" />
                            </div>
                            <div className="w-0 h-0 border-y-[20px] border-y-transparent border-l-[30px] border-l-transparent border-t-transparent border-r-transparent relative -ml-4">
                                <div className="w-0 h-0 border-y-[18px] border-y-transparent border-l-[26px] border-l-primary absolute -left-[28px] -top-[18px] z-20 opacity-50" />
                            </div>
                            <div className="w-0 h-0 border-y-[20px] border-y-transparent border-l-[30px] border-l-transparent border-t-transparent border-r-transparent relative -ml-4">
                                <div className="w-0 h-0 border-y-[18px] border-y-transparent border-l-[26px] border-l-[#34d399] absolute -left-[28px] -top-[18px] z-30" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
