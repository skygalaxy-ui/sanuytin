"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
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
    Hash,
    ChevronDown,
    ExternalLink,
    Sparkles,
    User,
    Loader2,
    Home,
    Image as ImageIcon
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
            { href: "/admin/homepage", icon: Home, label: "Trang chủ" },
            { href: "/admin/brokers", icon: Building2, label: "Quản lý Sàn" },
            { href: "/admin/posts", icon: FileText, label: "Bài viết" },
            { href: "/admin/media", icon: ImageIcon, label: "Thư viện ảnh" },
            { href: "/admin/categories", icon: FolderOpen, label: "Danh mục" },
            { href: "/admin/tags", icon: Hash, label: "Tags" },
            { href: "/admin/pages", icon: Layers, label: "Nội dung Trang" },
            { href: "/admin/promotions", icon: Gift, label: "Khuyến mãi" },
        ]
    },
    {
        label: "SEO",
        items: [
            { href: "/admin/seo-audit", icon: Search, label: "SEO Audit" },
            { href: "/admin/sitemap", icon: Map, label: "Sơ đồ Website" },
            { href: "/admin/broken-links", icon: Link2, label: "Kiểm tra Link" },
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
    const router = useRouter();
    const { user, signOut, loading } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
    const [mounted, setMounted] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await signOut();
        router.push("/admin/login");
    };

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
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Mobile Header - Enhanced */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 z-50 shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <Sparkles size={18} className="text-white" />
                    </div>
                    <span className="font-bold text-slate-900 tracking-tight">Sàn Uy Tín</span>
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar - Premium Dark Design */}
            <aside className={`
                fixed top-0 left-0 bottom-0 w-72 
                bg-slate-950 text-slate-300
                z-40 
                transform transition-all duration-300 ease-out
                lg:translate-x-0 
                ${sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                {/* Brand Header */}
                <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
                    <Link href="/admin" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-105">
                            <Sparkles size={20} className="text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-xl text-white block leading-tight tracking-tight">Sàn Uy Tín</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">Management Platform</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation with Groups */}
                <nav className="p-4 space-y-6">
                    {navGroups.map((group) => {
                        const hasActiveItem = group.items.some(item => isActiveLink(item.href));

                        return (
                            <div key={group.label} className="space-y-1">
                                {/* Group Header */}
                                <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                    <span className={hasActiveItem ? 'text-orange-500' : ''}>{group.label}</span>
                                </div>

                                {/* Group Items */}
                                <div className="space-y-1">
                                    {group.items.map((item) => {
                                        const isActive = isActiveLink(item.href);
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setSidebarOpen(false)}
                                                className={`
                                                    flex items-center gap-3 px-4 py-2.5 rounded-xl 
                                                    transition-all duration-200 group relative
                                                    ${isActive
                                                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                                                        : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                                                    }
                                                `}
                                            >
                                                <div className={`
                                                    w-8 h-8 rounded-lg flex items-center justify-center transition-all
                                                    ${isActive
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-slate-900 text-slate-500 group-hover:text-slate-300'
                                                    }
                                                `}>
                                                    <item.icon size={18} />
                                                </div>
                                                <span className={`font-medium text-[13px] ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>

                                                {/* Tooltip-like effect or indicator */}
                                                {!isActive && (
                                                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800/50 bg-slate-950 space-y-3">
                    {/* User Info */}
                    {user && (
                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
                            <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700/50">
                                <User size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Account</p>
                                <p className="text-[13px] font-semibold text-slate-300 truncate">{user.email}</p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                        {/* View Website */}
                        <Link
                            href="/"
                            target="_blank"
                            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/50 border border-slate-800/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all group"
                        >
                            <ExternalLink size={18} className="mb-1" />
                            <span className="text-[10px] font-bold uppercase tracking-tight">Website</span>
                        </Link>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            disabled={isLoggingOut}
                            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all group disabled:opacity-50"
                        >
                            {isLoggingOut ? <Loader2 size={18} className="animate-spin" /> : <LogOut size={18} className="mb-1" />}
                            <span className="text-[10px] font-bold uppercase tracking-tight">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="lg:ml-72 min-h-screen pt-16 lg:pt-0 transition-all duration-300">
                <div className="p-4 lg:p-8 xl:p-10 max-w-[1700px] mx-auto">
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
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
}
