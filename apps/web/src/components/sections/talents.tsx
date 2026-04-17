"use client"
import { motion } from "framer-motion"

const talents = [
    {
        name: "Zeke S.",
        role: "AI Automation Engineer",
        color: "bg-blue-600",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Russel W.",
        role: "Senior Full Stack Developer",
        color: "bg-[#34d399]", // Emerald/Mint
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Kristian L.",
        role: "UI/UX Product Designer",
        color: "bg-[#cbf026]", // Lime
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    },
    {
        name: "Aira L.",
        role: "Senior Backend Engineer",
        color: "bg-white",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    },
]

export function TalentsGrid() {
    return (
        <section className="py-12 bg-background overflow-hidden relative">
            {/* Container slightly overflowing the viewport to imply infinite scroll row */}
            <div className="w-full flex justify-center px-4 overflow-x-auto pb-8 hide-scrollbar">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex items-center gap-4 min-w-max"
                >
                    {talents.map((talent, idx) => (
                        <div
                            key={idx}
                            className={`relative w-64 md:w-72 aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-border/50 shadow-sm hover:shadow-2xl transition-all ${talent.color === 'bg-white' ? 'dark:bg-zinc-800' : talent.color}`}
                        >
                            {/* Avatar mimicking isolated portrait */}
                            <div className="absolute inset-0 top-10 flex justify-center items-end">
                                <img
                                    src={talent.avatar}
                                    alt={talent.name}
                                    className={`w-full h-[90%] object-cover mix-blend-multiply dark:mix-blend-normal grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 ${talent.color === 'bg-white' ? 'mix-blend-normal' : ''}`}
                                />
                            </div>

                            {/* Detail Card Overlay at bottom */}
                            <div className="absolute bottom-4 left-4 right-4 bg-background dark:bg-card p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
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
