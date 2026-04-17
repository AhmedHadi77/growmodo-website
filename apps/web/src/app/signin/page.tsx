import * as React from "react"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Loader2, Mail, Lock, ArrowRight } from "lucide-react"
import { signIn } from "@/auth"
import { SignInForm } from "./signin-form"

export default function SignInPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
            <Header />
            
            <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-md relative z-10 transition-all duration-500">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-heading font-extrabold tracking-tight mb-2">Welcome Back</h1>
                        <p className="text-muted-foreground">Enter your credentials to access the client portal.</p>
                    </div>

                    <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                        
                        <SignInForm />

                        <div className="relative my-8 text-center uppercase">
                             <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border" />
                             </div>
                             <span className="relative bg-card px-4 text-xs font-semibold text-muted-foreground">Or continue with</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <form action={async () => {
                                "use server"
                                await signIn("google")
                            }} className="w-full">
                                <button className="w-full flex items-center justify-center gap-3 bg-background/50 border border-border rounded-xl py-3 text-sm font-medium hover:bg-muted transition-all transform active:scale-[0.98] duration-200 group">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,11.071L12.545,11.071l9.845,-0.006c0.062,0.307 0.095,0.624 0.095,0.949c0,2.651 -0.994,4.887 -2.71,6.466c-1.542,1.423 -3.564,2.26 -5.918,2.26c-4.861,0 -8.8,-3.939 -8.8,-8.8c0,-4.861 3.939,-8.8 8.8,-8.8c2.316,0 4.256,0.84 5.752,2.233l-3.235,3.116c-0.835,-0.751 -2.165,-1.247 -3.551,-1.247c-2.851,0 -5.17,2.387 -5.17,5.17c0,2.783 2.319,5.17 5.17,5.17c2.551,0 4.167,-1.594 4.542,-3.545l-3.545,0.003L12.545,11.071z"/></svg>
                                    Continue with Google
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className="text-center mt-8 text-sm text-muted-foreground">
                        Don't have an account? <button className="text-primary font-semibold hover:underline">Apply as a Talent</button>
                    </p>
                </div>
            </div>
            
            <Footer />
        </main>
    )
}
