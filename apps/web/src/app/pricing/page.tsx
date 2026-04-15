"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingActions } from "@/components/layout/floating-actions"
import { motion } from "framer-motion"
import { Pricing } from "@/components/sections/pricing"

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Header />
            <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-6 mb-20"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Transparent Plans</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight">Got Curious About What We<br />Can Do For Your Business?</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Fixed monthly rates. No hidden fees. Pause or cancel anytime. Choose the plan that fits your current scaling needs, and let us handle the rest.
                    </p>
                </motion.div>
                
                {/* FAQ or Detailed description section */}
                <div className="max-w-4xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border/50"
                     >
                        <h4 className="font-bold text-xl mb-2">What does "Pause anytime" mean?</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            If you don't have enough work to fill an entire month, simply pause your subscription. Billing halts immediately, and you can resume right where you left off when you have more tasks.
                        </p>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border/50"
                     >
                        <h4 className="font-bold text-xl mb-2">How fast do we get started?</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Once you subscribe, we set up your Slack channel, Trello board, and onboarding docs within 24 hours. You can start creating your first tasks immediately.
                        </p>
                     </motion.div>
                </div>
            </div>

            {/* Existing Pricing component handles the cards */}
            <Pricing />

            <Footer />
            <FloatingActions />
        </main>
    )
}
