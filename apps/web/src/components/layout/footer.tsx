import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-card border-t py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-heading font-bold text-lg leading-none">E</span>
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight">
                            Elevate AI
                        </span>
                    </Link>
                    <p className="text-muted-foreground max-w-sm mb-6">
                        Join 200+ marketing teams & agencies who've ditched freelancer roulette. Get dedicated AI-empowered designers & developers who 'get' your business.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/careers" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                            Talent Login
                        </Link>
                        <Link href="/book" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md">
                            Client Portal
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Talents</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/talents/ai-engineers" className="hover:text-primary transition-colors">AI Engineers</Link></li>
                        <li><Link href="/talents/frontend" className="hover:text-primary transition-colors">Frontend Developers</Link></li>
                        <li><Link href="/talents/backend" className="hover:text-primary transition-colors">Backend Developers</Link></li>
                        <li><Link href="/talents/designers" className="hover:text-primary transition-colors">UX/UI Designers</Link></li>
                        <li><Link href="/talents/pm" className="hover:text-primary transition-colors">Project Managers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Services (Showcase)</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/showcase/collab-ai" className="hover:text-primary transition-colors">Collab AI SaaS</Link></li>
                        <li><Link href="/showcase" className="hover:text-primary transition-colors">E-commerce Stores</Link></li>
                        <li><Link href="/showcase" className="hover:text-primary transition-colors">Custom Automations</Link></li>
                        <li><Link href="/showcase" className="hover:text-primary transition-colors">AI Product Integrations</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Company</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/scope" className="hover:text-primary transition-colors">Our Scope & Process</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition-colors">Apply as a Talent</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Strategy</Link></li>
                        <li><Link href="/book" className="hover:text-primary transition-colors">Book Discovery Call</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">FAQ</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Elevate AI Agency. Elevating scale-ups globally.</p>
                <div className="flex flex-wrap gap-6 items-center">
                    <Link href="https://www.linkedin.com/in/mr-ahmed-mahram-327a83285?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        LinkedIn
                    </Link>
                    <Link href="https://www.facebook.com/share/18ZobQef1h/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook
                    </Link>
                    <div className="w-px h-4 bg-border mx-2 hidden sm:block" />
                    <Link href="#privacy" className="hover:text-primary transition-colors">Privacy</Link>
                    <Link href="#terms" className="hover:text-primary transition-colors">Terms</Link>
                </div>
            </div>
        </footer>
    )
}
