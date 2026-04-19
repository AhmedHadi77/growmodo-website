"use client"
import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { brand } from "@/lib/growmodo-content"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300"
        >
            <div className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border border-border" : "bg-card shadow-md border border-border"}`}>
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-bold text-lg leading-none">G</span>
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
                        {brand.name}
                    </span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold relative">
                    <span className="px-2 py-2 text-muted-foreground">Why Us</span>

                    <div className="relative group px-2 py-2 cursor-pointer">
                        <Link href="/talents" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                            Talents <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </Link>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
                            <Link href="/talents#designers" className="px-4 py-2 hover:bg-accent rounded-lg">Designers</Link>
                            <Link href="/talents#developers" className="px-4 py-2 hover:bg-accent rounded-lg">Developers</Link>
                            <Link href="/talents#video" className="px-4 py-2 hover:bg-accent rounded-lg">Video Editors</Link>
                            <Link href="/talents#pm" className="px-4 py-2 hover:bg-accent rounded-lg">Project Managers</Link>
                        </div>
                    </div>

                    <div className="relative group px-2 py-2 cursor-pointer">
                        <Link href="/showcase" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                            Showcase <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </Link>
                        <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
                            <Link href="/showcase#selected-work" className="px-4 py-2 hover:bg-accent rounded-lg">Selected Work</Link>
                            <Link href="/showcase#testimonials" className="px-4 py-2 hover:bg-accent rounded-lg">Testimonials</Link>
                            <Link href="/showcase#clients" className="px-4 py-2 hover:bg-accent rounded-lg">Client Results</Link>
                        </div>
                    </div>

                    <Link href="/scope" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Scope</Link>
                    <Link href="/pricing" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Pricing</Link>

                    <div className="relative group px-2 py-2 cursor-pointer">
                        <span className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                            Resources <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </span>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
                            <Link href="/guides" className="px-4 py-3 hover:bg-accent rounded-lg">
                                <span className="block font-bold">Guides</span>
                                <span className="block text-xs text-muted-foreground">Project planning and growth design</span>
                            </Link>
                            <Link href="/products" className="px-4 py-3 hover:bg-accent rounded-lg">
                                <span className="block font-bold">Products</span>
                                <span className="block text-xs text-muted-foreground">Growth Design Kit and Sprint</span>
                            </Link>
                            <Link href="/newsletter" className="px-4 py-3 hover:bg-accent rounded-lg">
                                <span className="block font-bold">Newsletter</span>
                                <span className="block text-xs text-muted-foreground">Coming soon</span>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <ThemeToggle />
                    <Link href="/signin" className="hidden lg:inline-flex items-center justify-center rounded-md font-semibold text-muted-foreground px-4 hover:text-foreground transition-colors">
                        Sign In
                    </Link>
                    <Link href="/book" className="hidden sm:inline-flex items-center justify-center rounded-md font-semibold font-heading px-6 h-9 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md">
                        Book a Call
                    </Link>
                </div>
            </div>
        </motion.header>
    )
}
