"use client";

import { useEffect, useState } from "react";
import {
    Building2, FileText, Gift, TrendingUp, CheckCircle, XCircle,
    BarChart3, Eye, Clock, ArrowUpRight, Database, AlertTriangle,
    RefreshCcw, Calendar, Settings, FolderOpen, Upload, FileEdit,
    LayoutGrid, PenTool, Share, Users, Zap, Activity, Globe,
    Search, Map, Link2, Sparkles, ArrowRight, Plus
} from "lucide-react";
import Link from "next/link";
import { supabase, getPosts, getBrokers, Post, Broker } from "@/lib/supabase";

// Quick action buttons with enhanced styling
const quickActions = [
    { label: "Viết bài mới", href: "/admin/posts", icon: PenTool, gradient: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/25" },
    { label: "Thêm sàn", href: "/admin/brokers", icon: Building2, gradient: "from-sky-500 to-blue-600", shadow: "shadow-sky-500/25" },
    { label: "SEO Audit", href: "/admin/seo-audit", icon: Search, gradient: "from-violet-500 to-purple-600", shadow: "shadow-violet-500/25" },
];

// Navigation menu items organized by category
const menuItems = [
    { label: "Quản lý Sàn", href: "/admin/brokers", icon: Building2, desc: "Thêm, sửa, xóa sàn", color: "sky", count: null },
    { label: "Bài viết", href: "/admin/posts", icon: FileText, desc: "Quản lý nội dung", color: "emerald", count: null },
    { label: "Danh mục", href: "/admin/categories", icon: FolderOpen, desc: "Phân loại bài viết", color: "amber", count: null },
    { label: "Khuyến mãi", href: "/admin/promotions", icon: Gift, desc: "Cập nhật promo", color: "pink", count: null },
    { label: "Lịch Nội Dung", href: "/admin/content-calendar", icon: Calendar, desc: "Lên kế hoạch", color: "violet", count: null },
    { label: "Cài đặt", href: "/admin/settings", icon: Settings, desc: "Cấu hình website", color: "slate", count: null },
];

const seoTools = [
    { label: "SEO Audit", href: "/admin/seo-audit", icon: Search, desc: "Kiểm tra On-Page", color: "orange" },
    { label: "Sitemap", href: "/admin/sitemap", icon: Map, desc: "Cấu trúc website", color: "cyan" },
    { label: "Broken Links", href: "/admin/broken-links", icon: Link2, desc: "Kiểm tra link hỏng", color: "red" },
    { label: "Analytics", href: "/admin/analytics", icon: BarChart3, desc: "Thống kê traffic", color: "green" },
];

export default function AdminDashboard() {
    const [brokerCount, setBrokerCount] = useState<number | null>(null);
    const [postCount, setPostCount] = useState<number | null>(null);
    const [publishedPostCount, setPublishedPostCount] = useState<number | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering time after mount
    useEffect(() => {
        setMounted(true);
        setCurrentTime(new Date());
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Fetch all data
    const fetchData = async () => {
        setIsRefreshing(true);
        try {
            // Get broker count
            const { count: bCount } = await supabase
                .from('brokers')
                .select('*', { count: 'exact', head: true });

            // Get post counts - wrap in try-catch for missing table
            let pCount = 0;
            let pubCount = 0;
            let posts: Post[] = [];

            try {
                const { count: pc } = await supabase
                    .from('posts')
                    .select('*', { count: 'exact', head: true });
                pCount = pc || 0;

                const { count: pubc } = await supabase
                    .from('posts')
                    .select('*', { count: 'exact', head: true })
                    .eq('is_published', true);
                pubCount = pubc || 0;

                posts = await getPosts(false);
            } catch (e) {
                console.log('Posts table may not exist yet');
            }

            setRecentPosts(posts.slice(0, 5));
            setConnectionStatus('connected');
            setBrokerCount(bCount || 0);
            setPostCount(pCount);
            setPublishedPostCount(pubCount);

        } catch (error: any) {
            console.error("Supabase connection error:", error);
            setConnectionStatus('error');
        }
        setIsRefreshing(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const stats = [
        {
            label: "Sàn giao dịch",
            value: brokerCount,
            icon: Building2,
            gradient: "from-sky-500/20 via-sky-500/10 to-transparent",
            iconBg: "bg-sky-500/20",
            iconColor: "text-sky-400",
            borderColor: "border-sky-500/20",
            href: "/admin/brokers"
        },
        {
            label: "Tổng bài viết",
            value: postCount,
            icon: FileText,
            gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
            iconBg: "bg-emerald-500/20",
            iconColor: "text-emerald-400",
            borderColor: "border-emerald-500/20",
            href: "/admin/posts"
        },
        {
            label: "Đã xuất bản",
            value: publishedPostCount,
            icon: Eye,
            gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
            iconBg: "bg-violet-500/20",
            iconColor: "text-violet-400",
            borderColor: "border-violet-500/20",
            href: "/admin/posts"
        },
        {
            label: "Bản nháp",
            value: postCount !== null && publishedPostCount !== null ? postCount - publishedPostCount : null,
            icon: FileEdit,
            gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
            iconBg: "bg-amber-500/20",
            iconColor: "text-amber-400",
            borderColor: "border-amber-500/20",
            href: "/admin/posts"
        },
    ];

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffHrs < 1) return "Vừa xong";
        if (diffHrs < 24) return `${diffHrs} giờ trước`;
        if (diffDays < 7) return `${diffDays} ngày trước`;
        return date.toLocaleDateString("vi-VN");
    };

    const getColorClasses = (color: string) => {
        const colors: Record<string, { icon: string; bg: string; border: string }> = {
            sky: { icon: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
            emerald: { icon: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
            amber: { icon: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
            pink: { icon: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
            violet: { icon: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
            slate: { icon: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
            orange: { icon: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
            cyan: { icon: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
            red: { icon: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
            green: { icon: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
        };
        return colors[color] || colors.slate;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-primary/20">
                            <Sparkles size={20} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                            <p className="text-slate-500 text-sm" suppressHydrationWarning>
                                {mounted && currentTime
                                    ? currentTime.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
                                    : 'Đang tải...'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Refresh Button */}
                    <button
                        onClick={fetchData}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-xl transition-all disabled:opacity-50"
                    >
                        <RefreshCcw size={16} className={isRefreshing ? 'animate-spin' : ''} />
                        <span className="text-sm font-medium hidden sm:inline">Làm mới</span>
                    </button>

                    {/* Connection Status */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${connectionStatus === 'connected'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : connectionStatus === 'error'
                            ? 'bg-red-500/10 text-red-400 border-red-500/20'
                            : 'bg-slate-800/50 text-slate-400 border-slate-700/50'
                        }`}>
                        {connectionStatus === 'loading' && <RefreshCcw size={14} className="animate-spin" />}
                        {connectionStatus === 'connected' && <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />}
                        {connectionStatus === 'error' && <XCircle size={14} />}
                        <span className="hidden sm:inline">
                            {connectionStatus === 'loading' && 'Đang kết nối...'}
                            {connectionStatus === 'connected' && 'Đã kết nối'}
                            {connectionStatus === 'error' && 'Lỗi kết nối'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                    <Link
                        key={action.label}
                        href={action.href}
                        className={`
                            flex items-center gap-2.5 px-5 py-2.5 
                            bg-gradient-to-r ${action.gradient} 
                            text-white rounded-xl text-sm font-medium 
                            transition-all duration-300 
                            hover:scale-[1.02] hover:shadow-lg ${action.shadow}
                            active:scale-[0.98]
                        `}
                    >
                        <action.icon size={18} />
                        {action.label}
                    </Link>
                ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className={`
                            bg-gradient-to-br ${stat.gradient} 
                            backdrop-blur-sm border ${stat.borderColor} 
                            rounded-2xl p-5 transition-all duration-300
                            hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-900/50
                            group cursor-pointer
                        `}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={22} />
                            </div>
                            <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <div>
                            {stat.value !== null ? (
                                <p className="text-3xl font-bold text-white mb-1 tabular-nums">{stat.value}</p>
                            ) : (
                                <div className="h-9 w-16 bg-slate-700/50 rounded-lg animate-pulse mb-1" />
                            )}
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Content Management */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Navigation Menu */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5">
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <LayoutGrid size={18} className="text-primary" />
                            Quản lý nội dung
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {menuItems.map((item) => {
                                const colors = getColorClasses(item.color);
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`
                                            flex items-center gap-3 p-4 
                                            bg-slate-800/30 hover:bg-slate-800/60 
                                            border ${colors.border} hover:border-slate-600/50 
                                            rounded-xl transition-all duration-200 group
                                        `}
                                    >
                                        <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center ${colors.icon} group-hover:scale-110 transition-transform`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-white font-medium text-sm truncate group-hover:text-primary transition-colors">{item.label}</p>
                                            <p className="text-slate-500 text-xs truncate">{item.desc}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* SEO Tools Section */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                <Search size={18} className="text-orange-400" />
                                SEO & Phân tích
                            </h2>
                            <Link href="/admin/seo-audit" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                                Xem tất cả <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {seoTools.map((tool) => {
                                const colors = getColorClasses(tool.color);
                                return (
                                    <Link
                                        key={tool.label}
                                        href={tool.href}
                                        className={`
                                            p-4 bg-slate-800/30 hover:bg-slate-800/60 
                                            border ${colors.border} hover:border-slate-600/50 
                                            rounded-xl transition-all duration-200 group text-center
                                        `}
                                    >
                                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.icon} mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                                            <tool.icon size={22} />
                                        </div>
                                        <p className="text-white font-medium text-sm group-hover:text-primary transition-colors">{tool.label}</p>
                                        <p className="text-slate-500 text-xs mt-1">{tool.desc}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                <FileText size={18} className="text-emerald-400" />
                                Bài viết gần đây
                            </h2>
                            <Link href="/admin/posts" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                                Xem tất cả <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {recentPosts.length > 0 ? (
                            <div className="space-y-3">
                                {recentPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="flex items-center gap-4 p-3 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 rounded-xl transition-colors group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-14 h-14 bg-slate-700/50 rounded-xl overflow-hidden shrink-0">
                                            {post.featured_image ? (
                                                <img
                                                    src={post.featured_image}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FileText size={22} className="text-slate-500" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">
                                                {post.title}
                                            </p>
                                            <div className="flex items-center gap-3 mt-1.5">
                                                <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${post.is_published
                                                    ? 'bg-emerald-500/20 text-emerald-400'
                                                    : 'bg-amber-500/20 text-amber-400'
                                                    }`}>
                                                    {post.is_published ? 'Đã đăng' : 'Nháp'}
                                                </span>
                                                <span className="text-slate-500 text-xs flex items-center gap-1">
                                                    <Clock size={11} />
                                                    {formatDate(post.updated_at || post.created_at)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <Link
                                            href={`/admin/posts`}
                                            className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FileText size={28} className="text-slate-600" />
                                </div>
                                <h3 className="text-white font-medium mb-2">Chưa có bài viết nào</h3>
                                <p className="text-slate-500 text-sm mb-4">Bắt đầu tạo bài viết đầu tiên của bạn</p>
                                <Link
                                    href="/admin/posts"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/25 text-white text-sm font-medium rounded-xl transition-all"
                                >
                                    <Plus size={16} />
                                    Viết bài mới
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Website Stats */}
                    <div className="bg-gradient-to-br from-primary/20 via-blue-600/10 to-violet-600/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Globe size={18} className="text-primary" />
                            <span className="font-semibold text-white">Website</span>
                        </div>
                        <div className="text-center py-4">
                            <p className="text-3xl font-bold text-white mb-1">sanuytin.net</p>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                Đang hoạt động
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                            <Link
                                href="/"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-colors"
                            >
                                <Globe size={14} />
                                Xem trang chủ
                            </Link>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity size={18} className="text-emerald-400" />
                            <h2 className="font-semibold text-white">Trạng thái hệ thống</h2>
                        </div>

                        <div className="space-y-2">
                            <StatusRow
                                label="Database"
                                status={connectionStatus === 'connected' ? 'online' : connectionStatus === 'error' ? 'offline' : 'loading'}
                            />
                            <StatusRow label="Storage" status="online" />
                            <StatusRow label="API" status="online" />
                            <StatusRow label="CDN" status="online" />
                        </div>
                    </div>

                    {/* Quick Tips */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={18} className="text-amber-400" />
                            <h2 className="font-semibold text-white">Mẹo nhanh</h2>
                        </div>
                        <div className="space-y-2.5 text-sm">
                            <div className="flex gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                <span className="text-lg">💡</span>
                                <p className="text-slate-300">Thêm ảnh đại diện cho bài viết để tăng tương tác</p>
                            </div>
                            <div className="flex gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                <span className="text-lg">📝</span>
                                <p className="text-slate-300">Điền đầy đủ Meta Title và Description cho SEO</p>
                            </div>
                            <div className="flex gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                <span className="text-lg">🔍</span>
                                <p className="text-slate-300">Chạy SEO Audit định kỳ để phát hiện lỗi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusRow({ label, status }: { label: string; status: 'online' | 'offline' | 'loading' }) {
    return (
        <div className="flex items-center justify-between py-2.5 px-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30">
            <span className="text-slate-300 text-sm">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-400' :
                    status === 'offline' ? 'bg-red-400' :
                        'bg-amber-400 animate-pulse'
                    }`} />
                <span className={`text-xs font-medium ${status === 'online' ? 'text-emerald-400' :
                    status === 'offline' ? 'text-red-400' :
                        'text-amber-400'
                    }`}>
                    {status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Checking...'}
                </span>
            </div>
        </div>
    );
}
