"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Mail } from "lucide-react"

export function SignInForm() {
    const [error, setError] = React.useState<string | null>(null)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError("Email/password sign-in is not enabled. Use Google sign-in or request access from the ElvateAI team.")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
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
                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-sm font-semibold text-muted-foreground">Password</label>
                        <button type="button" className="text-xs text-primary hover:underline">Request access</button>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            name="password"
                            required
                            type="password"
                            placeholder="Password"
                            className="w-full bg-background/50 border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                        />
                    </div>
                </div>
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 bg-destructive/10 text-destructive text-xs rounded-lg font-medium"
                >
                    {error}
                </motion.div>
            )}

            <button className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                Request Password Access <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    )
}
