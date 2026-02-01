"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Building2,
    FileText,
    Settings,
    Gift,
    LogOut,
    Menu,
    X,
    Layers,
    Map,
    Search,
    Link2,
    Calendar,
    Users,
    BarChart3,
    FolderOpen,
    ChevronDown,
    ExternalLink,
    Sparkles
} from "lucide-react";

// Grouped navigation structure for better UX
const navGroups = [
    {
        label: "Tổng quan",
        items: [
            { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
        ]
    },
    {
        label: "Nội dung",
        items: [
            { href: "/admin/brokers", icon: Building2, label: "Quản lý Sàn" },
            { href: "/admin/posts", icon: FileText, label: "Bài viết" },
            { href: "/admin/categories", icon: FolderOpen, label: "Danh mục" },
            { href: "/admin/pages", icon: Layers, label: "Nội dung Trang" },
            { href: "/admin/promotions", icon: Gift, label: "Khuyến mãi" },
        ]
    },
    {
        label: "SEO & Phân tích",
        items: [
            { href: "/admin/seo-audit", icon: Search, label: "SEO Audit" },
            { href: "/admin/sitemap", icon: Map, label: "Sơ đồ Website" },
            { href: "/admin/broken-links", icon: Link2, label: "Kiểm tra Link" },
            { href: "/admin/competitors", icon: Users, label: "Theo dõi Đối thủ" },
            { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
        ]
    },
    {
        label: "Kế hoạch",
        items: [
            { href: "/admin/content-calendar", icon: Calendar, label: "Lịch Nội Dung" },
        ]
    },
    {
        label: "Hệ thống",
        items: [
            { href: "/admin/settings", icon: Settings, label: "Cài đặt" },
        ]
    }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleGroup = (label: string) => {
        setCollapsedGroups(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const isActiveLink = (href: string) => {
        if (href === '/admin') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Mobile Header - Enhanced */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                        <Sparkles size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-white">Sàn Uy Tín</span>
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                    {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Sidebar - Premium Design */}
            <aside className={`
                fixed top-0 left-0 bottom-0 w-64 
                bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950
                border-r border-slate-800/50 z-40 
                transform transition-all duration-300 ease-out
                lg:translate-x-0 
                ${sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                {/* Brand Header */}
                <div className="h-16 flex items-center px-5 border-b border-slate-800/50">
                    <Link href="/admin" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                            <Sparkles size={18} className="text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-lg text-white block leading-tight">Sàn Uy Tín</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Admin Panel</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation with Groups */}
                <nav className="p-3 space-y-4 overflow-y-auto h-[calc(100vh-8rem)] custom-scrollbar">
                    {navGroups.map((group) => {
                        const isCollapsed = collapsedGroups[group.label];
                        const hasActiveItem = group.items.some(item => isActiveLink(item.href));

                        return (
                            <div key={group.label} className="space-y-1">
                                {/* Group Header */}
                                <button
                                    onClick={() => toggleGroup(group.label)}
                                    className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    <span className={hasActiveItem ? 'text-primary' : ''}>{group.label}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transform transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`}
                                    />
                                </button>

                                {/* Group Items */}
                                <div className={`space-y-0.5 overflow-hidden transition-all duration-200 ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}`}>
                                    {group.items.map((item) => {
                                        const isActive = isActiveLink(item.href);
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setSidebarOpen(false)}
                                                className={`
                                                    flex items-center gap-3 px-3 py-2.5 rounded-xl 
                                                    transition-all duration-200 group relative
                                                    ${isActive
                                                        ? 'bg-gradient-to-r from-primary/20 to-primary/5 text-white shadow-sm'
                                                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                                                    }
                                                `}
                                            >
                                                {/* Active Indicator */}
                                                {isActive && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                                                )}
                                                <div className={`
                                                    w-8 h-8 rounded-lg flex items-center justify-center transition-all
                                                    ${isActive
                                                        ? 'bg-primary/20 text-primary'
                                                        : 'bg-slate-800/50 text-slate-500 group-hover:bg-slate-700/50 group-hover:text-slate-300'
                                                    }
                                                `}>
                                                    <item.icon size={17} />
                                                </div>
                                                <span className="font-medium text-sm">{item.label}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-sm">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-500 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all">
                                <ExternalLink size={16} />
                            </div>
                            <span className="font-medium text-sm">Xem Website</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-md font-medium">LIVE</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
                <div className="p-4 lg:p-6 xl:p-8 max-w-[1600px]">
                    {children}
                </div>
            </main>

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(148, 163, 184, 0.2);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(148, 163, 184, 0.4);
                }
            `}</style>
        </div>
    );
}
