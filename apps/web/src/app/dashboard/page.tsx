"use client"
import * as React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { LayoutDashboard, Users, Zap, Clock, ChevronRight, Activity } from "lucide-react"

export default function DashboardPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Header />
            
            <div className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
                >
                    <div>
                        <h1 className="text-4xl font-heading font-extrabold tracking-tight">Client Portal</h1>
                        <p className="text-muted-foreground mt-1">Manage your active AI projects and talent requests.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold">Project Health: Stabilized</span>
                    </div>
                </motion.div>

                {/* Stat Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Active Talents", value: "4", icon: Users, color: "text-blue-500" },
                        { label: "Velocity", value: "94%", icon: Zap, color: "text-[#cbf026]" },
                        { label: "Hours logged", value: "128h", icon: Clock, color: "text-purple-500" },
                        { label: "Remaining Credits", value: "1,200", icon: LayoutDashboard, color: "text-orange-500" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card/50 border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-xl bg-background border border-border shadow-inner ${stat.color}`}>
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">30d Change +12%</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Active Projects Table Mockup */}
                <div className="bg-card/50 border border-border/50 rounded-[2rem] overflow-hidden shadow-sm">
                    <div className="p-8 border-b border-border/50 flex justify-between items-center">
                        <h2 className="text-2xl font-bold font-heading">Active Projects</h2>
                        <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                            New Request <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-muted/50 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    <tr>
                                        <th className="px-8 py-4">Project Name</th>
                                        <th className="px-8 py-4">Assigned Talent</th>
                                        <th className="px-8 py-4">Status</th>
                                        <th className="px-8 py-4 text-right">Last Update</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {[
                                        { name: "Collab AI Mobile App", talent: "Alex (Senior Dev)", status: "In Progress", date: "2h ago" },
                                        { name: "Brand Identity v2", talent: "Sarah (UX Lead)", status: "Review Required", date: "Yesterday" },
                                        { name: "API Infrastructure", talent: "David (AI Eng)", status: "Completed", date: "3 days ago" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-8 py-5 font-semibold">{row.name}</td>
                                            <td className="px-8 py-5 text-sm text-muted-foreground">{row.talent}</td>
                                            <td className="px-8 py-5">
                                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${row.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : row.status === 'Completed' ? 'bg-[#cbf026]/10 text-[#cbf026]' : 'bg-orange-500/10 text-orange-500'}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-sm text-muted-foreground text-right">{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            
            <Footer />
        </main>
    )
}
