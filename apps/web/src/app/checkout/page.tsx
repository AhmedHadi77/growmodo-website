"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Check, Loader2, Shield } from "lucide-react"
import { maintenancePlan, pricingPlans } from "@/lib/growmodo-content"

export default function CheckoutPage() {
    const [selectedPlan, setSelectedPlan] = React.useState(pricingPlans[1].label)
    const [email, setEmail] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
    const [error, setError] = React.useState("")

    const planOptions = [
        ...pricingPlans.map((plan) => ({
            label: `${plan.label} - ${plan.price}${plan.cadence}`,
            value: plan.label,
        })),
        { label: `${maintenancePlan.name} - ${maintenancePlan.price}${maintenancePlan.cadence}`, value: maintenancePlan.name },
    ]

    React.useEffect(() => {
        if (window.location.search.includes("plan=maintenance")) {
            setSelectedPlan(maintenancePlan.name)
        }
    }, [])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus("loading")
        setError("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "lead",
                    firstName: "Checkout",
                    lastName: "Request",
                    email,
                    company,
                    website,
                    phone: `Selected plan: ${selectedPlan}`,
                }),
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error || "Unable to submit checkout request")
            }

            setStatus("success")
        } catch (err) {
            setStatus("error")
            setError(err instanceof Error ? err.message : "Unable to submit checkout request")
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-slate-50">
            <Header />

            <div className="flex-1 pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Start Membership</span>
                    <h1 className="mt-4 text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground">
                        Confirm your plan request
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        Stripe billing can be connected with live keys later. For now, this captures the selected plan and creates a lead for follow-up.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-xl p-8 md:p-12 shadow-sm border border-border/50 space-y-6">
                        <div>
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Plan</label>
                            <select
                                value={selectedPlan}
                                onChange={(event) => setSelectedPlan(event.target.value)}
                                className="mt-2 w-full bg-slate-50 border border-border p-4 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            >
                                {planOptions.map((plan) => (
                                    <option key={plan.value} value={plan.value}>{plan.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Work Email</label>
                            <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full bg-slate-50 border border-border p-4 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company</label>
                            <input required value={company} onChange={(event) => setCompany(event.target.value)} className="mt-2 w-full bg-slate-50 border border-border p-4 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="Growth Inc." />
                        </div>
                        <div>
                            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Website</label>
                            <input required type="url" value={website} onChange={(event) => setWebsite(event.target.value)} className="mt-2 w-full bg-slate-50 border border-border p-4 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="https://" />
                        </div>

                        {status === "error" && <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">{error}</div>}
                        {status === "success" && <div className="rounded-lg bg-primary/10 p-4 text-sm font-medium text-foreground">Plan request received. The ElvateAI team will follow up with billing and onboarding details.</div>}

                        <button disabled={status === "loading"} className="w-full rounded-md bg-primary py-4 font-heading text-lg font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-70 flex items-center justify-center">
                            {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : "Request This Plan"}
                        </button>
                    </form>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 flex items-center gap-2">
                                <Shield className="text-primary w-5 h-5" /> Included
                            </h4>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                {[
                                    "Dedicated project manager",
                                    "Unlimited requests",
                                    "Daily or weekly updates",
                                    "Pause or cancel anytime",
                                    "IP and asset ownership",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3"><Check size={16} className="text-primary" /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
