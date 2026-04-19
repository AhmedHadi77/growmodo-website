"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FileText, Plus, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type RequestItem = {
    title: string
    type: string
    status: string
}

export default function DashboardPage() {
    const [requests, setRequests] = React.useState<RequestItem[]>([
        { title: "Homepage hero polish", type: "UI Design", status: "Queued" },
        { title: "Product page CMS update", type: "Web Development", status: "In Progress" },
        { title: "Monthly maintenance pass", type: "Maintenance", status: "Review" },
    ])
    const [title, setTitle] = React.useState("")
    const [type, setType] = React.useState("UI Design")

    function handleAddRequest(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!title.trim()) return
        setRequests((current) => [{ title: title.trim(), type, status: "Queued" }, ...current])
        setTitle("")
    }

    return (
        <main className="flex min-h-screen flex-col bg-slate-50/50">
            <Header />

            <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-heading font-extrabold tracking-tight text-foreground">Client Portal</h1>
                        <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-2">
                            Demo request queue for a ElvateAI membership <Badge variant="secondary">All Inclusive</Badge>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Settings size={20} />
                        </Button>
                        <Button className="rounded-md px-6 gap-2" onClick={() => document.getElementById("new-request-title")?.focus()}>
                            <Plus size={18} /> New Request
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground">Membership</h4>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                                    <div className="text-xs font-bold text-primary uppercase mb-1">Active Plan</div>
                                    <div className="text-xl font-bold">All Inclusive</div>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-50 border border-border">
                                    <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Active Talent</div>
                                    <div className="text-xl font-bold">2 specialists</div>
                                </div>
                                <Button variant="outline" className="w-full justify-between h-12 rounded-md">
                                    Billing Setup <FileText size={18} />
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground">Support</h4>
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-border">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Dedicated PM</div>
                                    <div className="text-xs text-muted-foreground">Assigned after onboarding</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8">
                        <form onSubmit={handleAddRequest} className="bg-white rounded-xl p-6 shadow-sm border border-border/50 grid grid-cols-1 md:grid-cols-[1fr_220px_auto] gap-4">
                            <input
                                id="new-request-title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder="Describe a new request..."
                                className="rounded-md border border-border bg-slate-50 px-4 py-3 outline-none focus:border-primary"
                            />
                            <select
                                value={type}
                                onChange={(event) => setType(event.target.value)}
                                className="rounded-md border border-border bg-slate-50 px-4 py-3 outline-none focus:border-primary"
                            >
                                {["UI Design", "Web Development", "Video Editing", "Maintenance", "Automation"].map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                            <Button type="submit" className="rounded-md px-6">Add Request</Button>
                        </form>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50">
                            <div className="p-8 border-b border-border/50 bg-white">
                                <h2 className="text-2xl font-bold font-heading">Request Queue</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50/50 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                        <tr>
                                            <th className="px-8 py-5">Request</th>
                                            <th className="px-8 py-5">Type</th>
                                            <th className="px-8 py-5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {requests.map((request, index) => (
                                            <tr key={`${request.title}-${index}`} className="hover:bg-slate-50 transition-all duration-300">
                                                <td className="px-8 py-6 font-bold text-foreground">{request.title}</td>
                                                <td className="px-8 py-6 text-sm text-muted-foreground">{request.type}</td>
                                                <td className="px-8 py-6">
                                                    <Badge>{request.status}</Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
