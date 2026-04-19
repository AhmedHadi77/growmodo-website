"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Fingerprint, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Settings = {
    essential: true
    functional: boolean
    marketing: boolean
}

const STORAGE_KEY = "elvateai-privacy-settings"

export function PrivacySettings() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasSaved, setHasSaved] = React.useState(false)
    const [settings, setSettings] = React.useState<Settings>({
        essential: true,
        functional: true,
        marketing: false,
    })

    React.useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                setSettings(JSON.parse(saved))
                setHasSaved(true)
            } catch (error) {
                console.error("Failed to parse privacy settings", error)
            }
        }
    }, [])

    const saveSettings = (newSettings: Settings) => {
        setSettings(newSettings)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
        setHasSaved(true)
        setIsOpen(false)
    }

    return (
        <>
            {!hasSaved && (
                <div className="fixed bottom-6 left-6 right-6 z-[100] mx-auto max-w-3xl rounded-xl border border-border bg-card p-4 shadow-2xl md:left-1/2 md:right-auto md:-translate-x-1/2">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-muted-foreground">
                            ElvateAI uses essential cookies for the site and optional cookies for analytics and marketing.
                        </p>
                        <div className="flex gap-3">
                            <Button variant="secondary" onClick={() => saveSettings({ essential: true, functional: false, marketing: false })}>Deny</Button>
                            <Button variant="outline" onClick={() => setIsOpen(true)}>Settings</Button>
                            <Button onClick={() => saveSettings({ essential: true, functional: true, marketing: true })}>Accept All</Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-6 left-6 z-[99]">
                <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.35)] flex items-center justify-center hover:bg-blue-700 transition-all group relative"
                    aria-label="Open privacy settings"
                >
                    <Fingerprint className="w-8 h-8" />
                    {settings.marketing && (
                        <span className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600" />
                    )}
                </motion.button>
            </div>

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
                            initial={{ scale: 0.94, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-card border border-border/50 shadow-2xl rounded-xl overflow-hidden"
                        >
                            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-card">
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-1">
                                        <ShieldCheck size={12} className="text-blue-600" /> Privacy Controls
                                    </span>
                                    <h4 className="font-heading font-bold text-lg text-foreground mt-0.5">Cookie Settings</h4>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                {[
                                    ["Essential", "Required for secure site functionality.", "essential"],
                                    ["Functional", "Helps improve scheduling, forms, and site behavior.", "functional"],
                                    ["Marketing", "Used for campaign measurement and remarketing.", "marketing"],
                                ].map(([title, description, key]) => (
                                    <div key={key} className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
                                        <div>
                                            <h5 className="font-bold">{title}</h5>
                                            <p className="text-sm text-muted-foreground">{description}</p>
                                        </div>
                                        <button
                                            disabled={key === "essential"}
                                            onClick={() => {
                                                if (key === "essential") return
                                                setSettings((current) => ({ ...current, [key]: !current[key as keyof Settings] } as Settings))
                                            }}
                                            className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${settings[key as keyof Settings] ? "bg-blue-600" : "bg-muted"} ${key === "essential" ? "opacity-50" : ""}`}
                                        >
                                            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${settings[key as keyof Settings] ? "translate-x-5" : "translate-x-0"}`} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 border-t border-border/50 bg-muted/30 grid grid-cols-3 gap-4">
                                <Button variant="secondary" onClick={() => saveSettings({ essential: true, functional: false, marketing: false })}>Deny</Button>
                                <Button variant="secondary" onClick={() => saveSettings(settings)}>Save</Button>
                                <Button onClick={() => saveSettings({ essential: true, functional: true, marketing: true })}>Accept All</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
