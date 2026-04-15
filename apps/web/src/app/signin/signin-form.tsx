"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Loader2, Mail, Lock, ArrowRight } from "lucide-react"

export function SignInForm() {
    const [error, setError] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")

        // Simulation for now, can be replaced with real Credentials Auth later
        await new Promise(resolve => setTimeout(resolve, 1500))

        if (email === "admin@growmodo.com" && password === "password123") {
            window.location.href = "/dashboard"
        } else {
            setError("Invalid email or password. Try admin@growmodo.com / password123")
            setIsLoading(false)
        }
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
                        <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input 
                            name="password"
                            required 
                            type="password" 
                            placeholder="••••••••" 
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

            <button 
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-4 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
            >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                        Sign In <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    )
}
