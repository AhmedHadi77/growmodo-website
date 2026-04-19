"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { talentProfiles } from "@/lib/growmodo-content"

export function TalentsGrid() {
    return (
        <section className="py-12 bg-background overflow-hidden relative">
            <div className="w-full flex justify-center px-4 overflow-x-auto pb-8 hide-scrollbar">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex items-center gap-4 min-w-max"
                >
                    {talentProfiles.map((talent) => (
                        <div
                            key={talent.name}
                            className={`relative w-64 md:w-72 aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-border/50 shadow-sm hover:shadow-2xl transition-all ${talent.accent}`}
                        >
                            <Image
                                src={talent.image}
                                alt={talent.name}
                                fill
                                sizes="(max-width: 768px) 60vw, 25vw"
                                className="object-cover mix-blend-multiply dark:mix-blend-normal grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 left-4 right-4 bg-background dark:bg-card p-4 rounded-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h4 className="font-heading font-bold text-foreground text-lg">{talent.name}</h4>
                                <p className="text-muted-foreground text-sm font-medium">{talent.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
