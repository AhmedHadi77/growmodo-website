"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, RefreshCw, Handshake, Zap, ShieldCheck } from "lucide-react"

const features = [
    {
        title: "Scalable Workforce",
        description: "Add a new AI engineer or designer to your projects whenever you need more hands. We make sure the talent is briefed on your operations upfront.",
        icon: Users,
    },
    {
        title: "Fully-Managed Team",
        description: "We handle replacing staff dropouts, skill training on the newest LLMs, team happiness, and HR overhead so you can focus on building.",
        icon: Brain,
    },
    {
        title: "Dedicated Project Manager",
        description: "A single point of contact who knows your business logic. Your PM oversees prompt engineers, devs, and delivers the automated output flawlessly.",
        icon: Handshake,
    },
    {
        title: "Flexible Skill-Matching",
        description: "Switch your talent stack seamlessly. Need an AI researcher today and a React developer tomorrow? Swap them out with no extra onboarding fees.",
        icon: RefreshCw,
    },
    {
        title: "Trained for Efficiency",
        description: "We use programmatic checklists & AI-driven linters to reduce human error and improve turnaround times. Zero learning curve for you.",
        icon: Zap,
    },
    {
        title: "Predictable Pricing & Security",
        description: "Forget salary negotiations. Pay a flat rate for elite talent with guaranteed IP & Data Security backed by enterprise compliance tools.",
        icon: ShieldCheck,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Services() {
    return (
        <section id="services" className="py-24 bg-accent/20 dark:bg-card/30 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">
                            What You Get From Elevate
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium">
                            Meet your new AI-empowered team members minus the Recruiting, HR, Operations, and Admin work.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-border bg-card/60 hover:bg-card transition-colors shadow-sm hover:shadow-xl group">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                        <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                    </div>
                                    <CardTitle className="text-xl font-heading font-bold tracking-tight">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
