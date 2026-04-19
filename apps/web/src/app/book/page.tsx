"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { CheckCircle2, Loader2 } from "lucide-react"

const countries = [
    { name: "United States", code: "US", dial_code: "+1" },
    { name: "United Kingdom", code: "GB", dial_code: "+44" },
    { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
    { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
    { name: "Egypt", code: "EG", dial_code: "+20" },
    { name: "Canada", code: "CA", dial_code: "+1" },
    { name: "Germany", code: "DE", dial_code: "+49" },
    { name: "France", code: "FR", dial_code: "+33" },
    { name: "Australia", code: "AU", dial_code: "+61" },
    { name: "India", code: "IN", dial_code: "+91" },
    { name: "Japan", code: "JP", dial_code: "+81" },
]

export default function BookPage() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        website: "",
    })
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMsg, setErrorMsg] = React.useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, type: "lead" }),
            })

            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong")
            }

            setStatus("success")
        } catch (err) {
            setStatus("error")
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground pt-32 pb-20">
            <Header />

            <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-6 sticky top-32"
                >
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
                        Let us see if ElvateAI is right for your team
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-md">
                        This short conversation helps us understand your request volume, current bottlenecks, and which membership plan could fit.
                    </p>

                    <div className="mt-8">
                        <p className="font-semibold text-lg mb-6 text-foreground">Here is what we will cover:</p>
                        <ul className="space-y-6">
                            {[
                                ["Current bottlenecks", "What design, development, video, or maintenance work is slowing you down right now."],
                                ["Capacity needs", "How many active requests or specialists you may need each month."],
                                ["Membership fit", "Whether Maintenance or All Inclusive is the better starting point."],
                                ["Next steps", "How onboarding, request setup, and project management would work."],
                            ].map(([title, text]) => (
                                <li key={title} className="flex items-start gap-4 shadow-sm p-4 rounded-lg border border-border/50 bg-card">
                                    <CheckCircle2 className="w-6 h-6 text-[#7bbf00] shrink-0 mt-0.5 shadow-sm" />
                                    <span className="text-muted-foreground font-medium leading-relaxed">
                                        <strong className="text-foreground">{title}</strong> - {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card p-8 md:p-12 rounded-xl shadow-2xl border border-border/50 w-full"
                >
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                            <div className="w-20 h-20 bg-[#7bbf00]/20 rounded-full flex items-center justify-center text-[#7bbf00]">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold">Request Sent</h2>
                            <p className="text-muted-foreground">The ElvateAI team will be in touch shortly to schedule your discovery call.</p>
                            <button onClick={() => setStatus("idle")} className="mt-4 text-primary font-semibold hover:underline">Submit another response</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <input required placeholder="First Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                />
                                <input required placeholder="Last Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>

                            <input required type="email" placeholder="Work Email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />

                            <input required placeholder="Company Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                            />

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-muted-foreground px-1">Phone Number *</label>
                                <div className="flex">
                                    <div className="bg-background border border-border rounded-l-lg px-2 text-sm flex items-center border-r-0">
                                        <select
                                            className="bg-transparent outline-none cursor-pointer pr-1"
                                            onChange={(e) => {
                                                const country = countries.find(c => c.code === e.target.value)
                                                if (country) {
                                                    setFormData({ ...formData, phone: `${country.dial_code} ` })
                                                }
                                            }}
                                        >
                                            {countries.map((c) => (
                                                <option key={c.code} value={c.code}>
                                                    {c.code}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <input required type="tel" placeholder="Phone number" className="flex-1 bg-background border border-border rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-muted-foreground px-1">Company Website *</label>
                                <input required type="url" placeholder="https://" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })}
                                />
                            </div>

                            {status === "error" && (
                                <div className="bg-destructive/10 text-destructive text-sm p-4 rounded-lg flex flex-col gap-2">
                                    <strong className="block text-base">Submission Error</strong>
                                    {errorMsg}
                                </div>
                            )}

                            <button
                                disabled={status === "loading"}
                                className="w-full bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-4 mt-4 hover:shadow-lg hover:shadow-primary/30 transition-all font-heading text-lg disabled:opacity-70 flex items-center justify-center"
                            >
                                {status === "loading" ? <Loader2 className="w-6 h-6 animate-spin" /> : "Book Discovery Call"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>

            <Footer />
        </main>
    )
}
