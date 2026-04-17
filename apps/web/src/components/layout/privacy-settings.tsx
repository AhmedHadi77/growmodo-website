"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Fingerprint, X, ChevronDown, ChevronUp, Info, Check, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Category = "essential" | "functional" | "marketing"
type Tab = "categories" | "services" | "about"

interface Service {
    id: string
    name: string
    description: string
    category: Category
}

const SERVICES: Service[] = [
    { id: "cloudflare", name: "Cloudflare", description: "Provides security and performance optimization.", category: "essential" },
    { id: "js-delivr", name: "JSDelivr", description: "Content delivery network for faster asset loading.", category: "essential" },
    { id: "calendly", name: "Calendly", description: "Used for scheduling discovery calls and meetings.", category: "functional" },
    { id: "convertflow", name: "ConvertFlow", description: "Personalization and lead generation tool.", category: "functional" },
    { id: "fb-pixel", name: "Facebook Pixel", description: "Used to measure effectiveness of advertising.", category: "marketing" },
    { id: "google-ads", name: "Google Ads", description: "Helps deliver relevant advertisements to users.", category: "marketing" },
]

export function PrivacySettings() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [activeTab, setActiveTab] = React.useState<Tab>("categories")
    const [expandedCategory, setExpandedCategory] = React.useState<Category | null>(null)
    const [settings, setSettings] = React.useState({
        essential: true,
        functional: true,
        marketing: true
    })

    // Load settings from localStorage
    React.useEffect(() => {
        const saved = localStorage.getItem("elevate-privacy-settings")
        if (saved) {
            try {
                setSettings(JSON.parse(saved))
            } catch (e) {
                console.error("Failed to parse privacy settings", e)
            }
        }
    }, [])

    const saveSettings = (newSettings: typeof settings) => {
        setSettings(newSettings)
        localStorage.setItem("elevate-privacy-settings", JSON.stringify(newSettings))
        setIsOpen(false)
    }

    const handleAcceptAll = () => {
        saveSettings({ essential: true, functional: true, marketing: true })
    }

    const handleDeny = () => {
        saveSettings({ essential: true, functional: false, marketing: false })
    }

    const toggleSetting = (cat: Category) => {
        if (cat === "essential") return
        setSettings(prev => ({ ...prev, [cat]: !prev[cat] }))
    }

    const CategoryItem = ({ id, title, count, description, isEssential = false }: { id: Category, title: string, count: number, description: string, isEssential?: boolean }) => {
        const isExpanded = expandedCategory === id
        return (
            <div className="border-b border-border/50 py-4 last:border-0">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setExpandedCategory(isExpanded ? null : id)}>
                        <div className="transition-transform duration-200">
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{title}</span>
                                <Badge variant="secondary" className="px-1.5 py-0 h-5 text-[10px] rounded-full">{count}</Badge>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => toggleSetting(id)}
                        disabled={isEssential}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${settings[id] ? 'bg-blue-600' : 'bg-muted'} ${isEssential ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings[id] ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm text-muted-foreground mt-2 pl-7 pr-4">
                                {description}
                            </p>
                            <div className="mt-4 pl-7 flex flex-col gap-2">
                                {SERVICES.filter(s => s.category === id).map(service => (
                                    <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border/50">
                                        <div className="flex-1">
                                            <div className="text-xs font-medium text-foreground">{service.name}</div>
                                            <div className="text-[10px] text-muted-foreground">{service.description}</div>
                                        </div>
                                        <Info size={14} className="text-muted-foreground hover:text-primary cursor-pointer" title="More info" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    return (
        <>
            {/* Fingerprint Trigger Button */}
            <div className="fixed bottom-6 left-6 z-[100]">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center hover:bg-blue-700 transition-all group relative"
                >
                    <Fingerprint className="w-8 h-8 group-hover:animate-pulse" />
                    {settings.marketing && (
                         <span className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600" />
                    )}
                </motion.button>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-card">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-1">
                                            <ShieldCheck size={12} className="text-blue-600" /> Usercentrics
                                        </span>
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-foreground mt-0.5">Privacy Settings</h4>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-border/50 px-6">
                                {(["categories", "services", "about"] as Tab[]).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-3 text-sm font-medium capitalize transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto px-6 bg-background/50">
                                {activeTab === "categories" && (
                                    <div className="py-2">
                                        <CategoryItem 
                                            id="essential" 
                                            title="Essential" 
                                            count={2} 
                                            description="These technologies are required to activate the core functionality of our service." 
                                            isEssential={true} 
                                        />
                                        <CategoryItem 
                                            id="functional" 
                                            title="Functional" 
                                            count={2} 
                                            description="These technologies enable us to analyse usage behavior in order to measure and improve performance." 
                                        />
                                        <CategoryItem 
                                            id="marketing" 
                                            title="Marketing" 
                                            count={2} 
                                            description="These technologies are used by advertisers to serve ads that are relevant to your interests." 
                                        />
                                    </div>
                                )}

                                {activeTab === "services" && (
                                    <div className="py-6 flex flex-col gap-4">
                                        <p className="text-xs text-muted-foreground mb-2">Detailed list of third-party services integrated into Elevate.</p>
                                        {SERVICES.map(service => (
                                            <div key={service.id} className="p-4 rounded-xl bg-card border border-border group hover:border-blue-600/30 transition-colors">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-semibold text-foreground">{service.name}</span>
                                                    <Badge variant={service.category === 'essential' ? 'default' : 'secondary'} className="text-[10px] uppercase">
                                                        {service.category}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "about" && (
                                    <div className="py-8 space-y-6">
                                        <div className="space-y-3">
                                            <h5 className="font-heading font-bold text-foreground">Our Data Commitment</h5>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                At Elevate, transparency is our core value. We use various technologies to provide a high-end agency experience. We respect your privacy choices and never sell your personal data.
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <h5 className="font-heading font-bold text-foreground">Real-time Privacy AI</h5>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Our AI Assistant is trained specifically on our data handling policies. If you have questions about how we use any specific tool, you can ask our real AI consultant at any time.
                                            </p>
                                            <Button 
                                                variant="outline" 
                                                className="w-full border-blue-600/20 text-blue-600 hover:bg-blue-600/10 gap-2 font-semibold"
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    // This will be handled by a global state or simple event
                                                    window.dispatchEvent(new CustomEvent('open-ai-chat', { detail: 'Tell me about how Elevate handles my privacy.' }));
                                                }}
                                            >
                                                Ask AI about Privacy
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-border/50 bg-muted/30 grid grid-cols-3 gap-4">
                                <Button variant="secondary" onClick={handleDeny} className="font-bold py-6 hover:bg-destructive hover:text-destructive-foreground transition-all">Deny</Button>
                                <Button variant="secondary" onClick={() => saveSettings(settings)} className="font-bold py-6">Save Settings</Button>
                                <Button onClick={handleAcceptAll} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 shadow-lg shadow-blue-600/20">Accept All</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
