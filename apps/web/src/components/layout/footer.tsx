import Link from "next/link"
import { brand } from "@/lib/growmodo-content"

export function Footer() {
    return (
        <footer className="bg-card border-t py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-heading font-bold text-lg leading-none">G</span>
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight">
                            {brand.name}
                        </span>
                    </Link>
                    <p className="text-muted-foreground max-w-sm mb-6">
                        {brand.shortTagline}. Get AI-empowered designers, developers, video editors, and project managers without the hiring headache.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/careers" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                            Apply as a Talent
                        </Link>
                        <Link href="/book" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-md">
                            Book a Discovery Call
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/talents" className="hover:text-primary transition-colors">Talents</Link></li>
                        <li><Link href="/showcase" className="hover:text-primary transition-colors">Showcase</Link></li>
                        <li><Link href="/scope" className="hover:text-primary transition-colors">Scope of Work</Link></li>
                        <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Resources</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
                        <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                        <li><Link href="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
                        <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-6 text-foreground">Company</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/book" className="hover:text-primary transition-colors">Book Discovery Call</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        <li><Link href="/imprint" className="hover:text-primary transition-colors">Imprint</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition-colors">Apply as a Talent</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                <p>Copyright © {new Date().getFullYear()} ElvateAI. All Rights Reserved.</p>
                <div className="flex flex-wrap gap-6 items-center">
                    <Link href="https://www.linkedin.com/company/elvateai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        LinkedIn
                    </Link>
                    <Link href="https://www.facebook.com/elvateai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        Facebook
                    </Link>
                    <Link href="https://www.instagram.com/elvateai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        Instagram
                    </Link>
                    <div className="w-px h-4 bg-border mx-2 hidden sm:block" />
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                </div>
            </div>
        </footer>
    )
}
