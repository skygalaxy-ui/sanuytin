"use client";

import { useState } from "react";
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
    FolderOpen
} from "lucide-react";

const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/brokers", icon: Building2, label: "Quản lý Sàn" },
    { href: "/admin/posts", icon: FileText, label: "Bài viết" },
    { href: "/admin/categories", icon: FolderOpen, label: "Danh mục" },
    { href: "/admin/pages", icon: Layers, label: "Nội dung Trang" },
    { href: "/admin/sitemap", icon: Map, label: "Sơ đồ Website" },
    { href: "/admin/seo-audit", icon: Search, label: "SEO Audit" },
    { href: "/admin/broken-links", icon: Link2, label: "Kiểm tra Link" },
    { href: "/admin/content-calendar", icon: Calendar, label: "Lịch Nội Dung" },
    { href: "/admin/competitors", icon: Users, label: "Theo dõi Đối thủ" },
    { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
    { href: "/admin/promotions", icon: Gift, label: "Khuyến mãi" },
    { href: "/admin/settings", icon: Settings, label: "Cài đặt" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 z-50">
                <span className="font-bold text-white">Admin Panel</span>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-400 hover:text-white">
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-slate-900 border-r border-slate-800 z-40 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <Link href="/admin" className="font-bold text-xl text-white">
                        Sàn Uy Tín <span className="text-primary text-sm font-normal">Admin</span>
                    </Link>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Về trang chủ</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
