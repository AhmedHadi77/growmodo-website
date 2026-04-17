"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Check, CreditCard, Shield, Zap, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CheckoutPage() {
    const [step, setStep] = React.useState(1)
    const [isProcessing, setIsProcessing] = React.useState(false)

    const handleNext = () => {
        if (step === 2) {
            setIsProcessing(true)
            setTimeout(() => {
                setIsProcessing(false)
                setStep(3)
            }, 2500)
        } else {
            setStep(step + 1)
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-slate-50">
            <Header />
            
            <div className="flex-1 pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-12 max-w-xs mx-auto">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                {step > s ? <Check size={18} /> : s}
                            </div>
                            {s < 3 && <div className={`w-12 h-0.5 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-border/50"
                                >
                                    <h2 className="text-3xl font-heading font-extrabold mb-8 text-foreground">Plan Selection</h2>
                                    <div className="space-y-4">
                                        <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                                            <div>
                                                <Badge className="mb-2">Selected</Badge>
                                                <h3 className="text-xl font-bold">Agency Scale</h3>
                                                <p className="text-sm text-muted-foreground">Comprehensive suite for scaling businesses.</p>
                                            </div>
                                            <div className="text-2xl font-bold font-heading">$12,500</div>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 cursor-pointer transition-colors flex items-center justify-between opacity-60">
                                            <div>
                                                <h3 className="text-xl font-bold">AI Pilot</h3>
                                                <p className="text-sm text-muted-foreground">Perfect for fast validation.</p>
                                            </div>
                                            <div className="text-2xl font-bold font-heading">$4,900</div>
                                        </div>
                                    </div>
                                    <Button onClick={handleNext} className="w-full mt-12 py-7 text-lg font-bold group">
                                        Continue to Billing <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-border/50"
                                >
                                    <h2 className="text-3xl font-heading font-extrabold mb-8 text-foreground">Billing Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                                            <input type="text" className="w-full bg-slate-50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="Growth Inc." />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Tax ID (Optional)</label>
                                            <input type="text" className="w-full bg-slate-50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="DE12345678" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Credit Card</label>
                                            <div className="relative">
                                                <input type="text" className="w-full bg-slate-50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors pl-12" placeholder="0000 0000 0000 0000" />
                                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <Button onClick={handleNext} disabled={isProcessing} className="w-full mt-12 py-7 text-lg font-bold">
                                        {isProcessing ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing Infrastructure...</> : "Confirm Subscription"}
                                    </Button>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-primary/20 text-center space-y-8"
                                >
                                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Zap size={40} />
                                    </div>
                                    <h2 className="text-4xl font-heading font-extrabold text-foreground tracking-tight">Welcome to Elevate!</h2>
                                    <div className="space-y-4 max-w-sm mx-auto text-muted-foreground">
                                        <p>Ahmed and the team are being notified right now. Your dedicated workspace is being provisioned.</p>
                                        <p>Check your email for access details and your onboarding schedule.</p>
                                    </div>
                                    <Button className="w-full py-7" onClick={() => window.location.href='/dashboard'}>Go to Dashboard</Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 flex items-center gap-2">
                                <Shield className="text-primary w-5 h-5" /> Professional Guarantee
                            </h4>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> 24/7 Priority Support</li>
                                <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Top 1% Dedicated Talent</li>
                                <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Weekly Sprint Deliverables</li>
                                <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Secure Cloud Infrastructure</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer />
        </main>
    )
}
