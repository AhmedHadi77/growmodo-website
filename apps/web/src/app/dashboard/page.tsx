"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { 
    LayoutDashboard, 
    Users, 
    Zap, 
    Clock, 
    ChevronRight, 
    Activity, 
    Settings, 
    Bell,
    CreditCard,
    Plus,
    FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
    return (
        <main className="flex min-h-screen flex-col bg-slate-50/50">
            <Header />
            
            <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-4xl font-heading font-extrabold tracking-tight text-foreground">Client Portal</h1>
                        <p className="text-muted-foreground mt-1 flex items-center gap-2">
                            Welcome back. Ahmed's team is currently processing <Badge variant="secondary" className="bg-[#cbf026]/20 text-[#222]">2 Active Sprints</Badge>
                        </p>
                    </motion.div>
                    
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Settings size={20} />
                        </Button>
                        <Button className="rounded-full px-6 gap-2">
                            <Plus size={18} /> New Request
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Sidebar Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground">Subscription</h4>
                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <div className="text-xs font-bold text-primary uppercase mb-1">Active Plan</div>
                                    <div className="text-xl font-bold">Agency Scale</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase text-muted-foreground">
                                        <span>Hours Used</span>
                                        <span>72 / 160h</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[45%]" />
                                    </div>
                                </div>
                                <Button variant="ghost" className="w-full justify-between group h-12 rounded-xl">
                                    Manage Billing <CreditCard size={18} className="group-hover:text-primary transition-colors" />
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-border/50">
                            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground">Support</h4>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-border">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Dedicated Manager</div>
                                    <div className="text-xs text-muted-foreground">Sarah J. (Online)</div>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-4 h-12 rounded-xl">Open Support Ticket</Button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        
                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Sprint Velocity", value: "98.2%", icon: Zap, color: "text-[#cbf026]" },
                                { label: "Talent Embedded", value: "3 Developers", icon: Users, color: "text-blue-500" },
                                { label: "Project Health", value: "Optimum", icon: Activity, color: "text-green-500" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-[2rem] shadow-sm border border-border/50"
                                >
                                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${stat.color}`}>
                                        <stat.icon size={20} />
                                    </div>
                                    <div className="text-2xl font-bold font-heading">{stat.value}</div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Activity Table */}
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-border/50">
                            <div className="p-8 border-b border-border/50 flex justify-between items-center bg-white">
                                <h2 className="text-2xl font-bold font-heading">Sprint Performance</h2>
                                <Button variant="ghost" size="sm" className="gap-1 font-bold">
                                    Export Logs <FileText size={16} />
                                </Button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50/50 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                        <tr>
                                            <th className="px-8 py-5">Sprint ID</th>
                                            <th className="px-8 py-5">Focused Talent</th>
                                            <th className="px-8 py-5">Operational Status</th>
                                            <th className="px-8 py-5 text-right">Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {[
                                            { id: "SP-2401", talent: "Alex (AI Eng)", status: "Active Sprint", progress: 65 },
                                            { id: "SP-2402", talent: "Maria (UI/UX)", status: "Review Stage", progress: 95 },
                                            { id: "SP-2399", talent: "Deep Pool (Team)", status: "Completed", progress: 100 },
                                        ].map((row, i) => (
                                            <tr key={i} className="group hover:bg-slate-50 transition-all duration-300">
                                                <td className="px-8 py-6">
                                                    <span className="font-bold text-foreground">{row.id}</span>
                                                </td>
                                                <td className="px-8 py-6 text-sm text-muted-foreground">{row.talent}</td>
                                                <td className="px-8 py-6">
                                                    <Badge className={
                                                        row.status === 'Completed' ? 'bg-[#cbf026] text-black hover:bg-[#cbf026]' : 
                                                        row.status === 'Review Stage' ? 'bg-orange-500 text-white hover:bg-orange-500' : 'bg-primary'
                                                    }>
                                                        {row.status}
                                                    </Badge>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <div className="flex items-center justify-end gap-3 text-sm font-bold">
                                                        <span>{row.progress}%</span>
                                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                            <div 
                                                                className="h-full bg-primary transition-all duration-1000" 
                                                                style={{ width: `${row.progress}%` }} 
                                                            />
                                                        </div>
                                                    </div>
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
