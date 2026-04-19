"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Loader2, Mail } from "lucide-react"
import { signIn } from "next-auth/react"

export function SignInForm() {
    const [message, setMessage] = React.useState<string | null>(null)
    const [error, setError] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setMessage(null)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const email = String(formData.get("email") ?? "")

        try {
            const result = await signIn("nodemailer", {
                email,
                redirect: false,
                callbackUrl: "/dashboard",
            })

            if (result?.error) {
                throw new Error(result.error)
            }

            setMessage("Check your inbox for the ElvateAI sign-in link.")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unable to send sign-in email.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground ml-1">Email Address</label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="name@company.com"
                        className="w-full bg-background/50 border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                </div>
            </div>

            {message && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 bg-primary/10 text-foreground text-xs rounded-lg font-medium"
                >
                    {message}
                </motion.div>
            )}

            {error && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 bg-destructive/10 text-destructive text-xs rounded-lg font-medium"
                >
                    {error}
                </motion.div>
            )}

            <button
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
            >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                        Send Sign-In Link <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    )
}
