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

// Quick action buttons - unified orange theme
const quickActions = [
    { label: "Viết bài mới", href: "/admin/posts", icon: PenTool },
    { label: "Thêm sàn", href: "/admin/brokers", icon: Building2 },
    { label: "SEO Audit", href: "/admin/seo-audit", icon: Search },
];

// Navigation menu items - simplified
const menuItems = [
    { label: "Quản lý Sàn", href: "/admin/brokers", icon: Building2, desc: "Thêm, sửa, xóa sàn" },
    { label: "Bài viết", href: "/admin/posts", icon: FileText, desc: "Quản lý nội dung" },
    { label: "Danh mục", href: "/admin/categories", icon: FolderOpen, desc: "Phân loại bài viết" },
    { label: "Khuyến mãi", href: "/admin/promotions", icon: Gift, desc: "Cập nhật promo" },
    { label: "Lịch Nội Dung", href: "/admin/content-calendar", icon: Calendar, desc: "Lên kế hoạch" },
    { label: "Cài đặt", href: "/admin/settings", icon: Settings, desc: "Cấu hình website" },
];

const seoTools = [
    { label: "SEO Audit", href: "/admin/seo-audit", icon: Search, desc: "Kiểm tra On-Page" },
    { label: "Sitemap", href: "/admin/sitemap", icon: Map, desc: "Cấu trúc website" },
    { label: "Broken Links", href: "/admin/broken-links", icon: Link2, desc: "Kiểm tra link hỏng" },
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

    // Simplified stats - all use same gray/white style
    const stats = [
        { label: "Sàn giao dịch", value: brokerCount, icon: Building2, href: "/admin/brokers" },
        { label: "Tổng bài viết", value: postCount, icon: FileText, href: "/admin/posts" },
        { label: "Đã xuất bản", value: publishedPostCount, icon: Eye, href: "/admin/posts" },
        { label: "Bản nháp", value: postCount !== null && publishedPostCount !== null ? postCount - publishedPostCount : null, icon: FileEdit, href: "/admin/posts" },
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


    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <Sparkles size={20} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-500 text-sm" suppressHydrationWarning>
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
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all disabled:opacity-50 shadow-sm"
                    >
                        <RefreshCcw size={16} className={isRefreshing ? 'animate-spin' : ''} />
                        <span className="text-sm font-medium hidden sm:inline">Làm mới</span>
                    </button>

                    {/* Connection Status - Gray only */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all shadow-sm ${connectionStatus === 'connected'
                        ? 'bg-gray-50 text-gray-600 border-gray-200'
                        : connectionStatus === 'error'
                            ? 'bg-orange-50 text-orange-600 border-orange-200'
                            : 'bg-gray-50 text-gray-500 border-gray-200'
                        }`}>
                        {connectionStatus === 'loading' && <RefreshCcw size={14} className="animate-spin" />}
                        {connectionStatus === 'connected' && <span className="w-2 h-2 bg-gray-500 rounded-full" />}
                        {connectionStatus === 'error' && <XCircle size={14} />}
                        <span className="hidden sm:inline">
                            {connectionStatus === 'loading' && 'Đang kết nối...'}
                            {connectionStatus === 'connected' && 'Đã kết nối'}
                            {connectionStatus === 'error' && 'Lỗi kết nối'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quick Actions - All orange */}
            <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                    <Link
                        key={action.label}
                        href={action.href}
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                    >
                        <action.icon size={18} />
                        {action.label}
                    </Link>
                ))}
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className="bg-white border border-gray-200 rounded-xl p-3.5 transition-all hover:shadow-md hover:border-gray-300 group cursor-pointer shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all">
                                <stat.icon size={18} />
                            </div>
                            <ArrowUpRight size={14} className="text-gray-400 group-hover:text-orange-500 transition-all" />
                        </div>
                        <div>
                            {stat.value !== null ? (
                                <p className="text-2xl font-bold text-gray-900 tabular-nums">{stat.value}</p>
                            ) : (
                                <div className="h-7 w-14 bg-gray-200 rounded-lg animate-pulse" />
                            )}
                            <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Content Management */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Navigation Menu - Simplified */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                            <LayoutGrid size={16} className="text-gray-500" />
                            Quản lý nội dung
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-2.5 p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg transition-all group"
                                >
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all shrink-0">
                                        <item.icon size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-gray-900 font-medium text-xs truncate group-hover:text-orange-600 transition-colors">{item.label}</p>
                                        <p className="text-gray-500 text-[11px] truncate">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SEO Tools Section - Simplified */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2 uppercase tracking-wide">
                                <Search size={16} className="text-gray-500" />
                                SEO
                            </h2>
                            <Link href="/admin/seo-audit" className="text-orange-600 text-xs font-medium hover:underline flex items-center gap-1">
                                Xem tất cả <ArrowRight size={12} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {seoTools.map((tool) => (
                                <Link
                                    key={tool.label}
                                    href={tool.href}
                                    className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg transition-all group text-center"
                                >
                                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 mx-auto mb-2 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all">
                                        <tool.icon size={18} />
                                    </div>
                                    <p className="text-gray-900 font-medium text-xs group-hover:text-orange-600 transition-colors">{tool.label}</p>
                                    <p className="text-gray-500 text-[11px] mt-0.5">{tool.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Recent Posts - Simplified */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <FileText size={18} className="text-gray-600" />
                                Bài viết gần đây
                            </h2>
                            <Link href="/admin/posts" className="text-orange-600 text-sm font-medium hover:underline flex items-center gap-1">
                                Xem tất cả <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {recentPosts.length > 0 ? (
                            <div className="space-y-3">
                                {recentPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                                            {post.featured_image ? (
                                                <img
                                                    src={post.featured_image}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FileText size={22} className="text-gray-400" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-900 text-sm font-medium truncate group-hover:text-orange-600 transition-colors">
                                                {post.title}
                                            </p>
                                            <div className="flex items-center gap-3 mt-1.5">
                                                <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${post.is_published
                                                    ? 'bg-gray-200 text-gray-700'
                                                    : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {post.is_published ? 'Đã đăng' : 'Nháp'}
                                                </span>
                                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                                    <Clock size={11} />
                                                    {formatDate(post.updated_at || post.created_at)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <Link
                                            href={`/admin/posts`}
                                            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FileText size={28} className="text-gray-400" />
                                </div>
                                <h3 className="text-gray-900 font-medium mb-2">Chưa có bài viết nào</h3>
                                <p className="text-gray-500 text-sm mb-4">Bắt đầu tạo bài viết đầu tiên của bạn</p>
                                <Link
                                    href="/admin/posts"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/25 text-white text-sm font-medium rounded-xl transition-all"
                                >
                                    <Plus size={16} />
                                    Viết bài mới
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar - Simplified */}
                <div className="space-y-6">
                    {/* Website Stats */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <Globe size={16} className="text-gray-500" />
                            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Website</span>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-lg font-bold text-gray-900 mb-1">sanuytin.net</p>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" />
                                Đang hoạt động
                            </div>
                        </div>
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center justify-center gap-2 mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded-lg transition-colors w-full"
                        >
                            <Globe size={14} />
                            Xem trang chủ
                        </Link>
                    </div>

                    {/* System Status */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <Activity size={16} className="text-gray-500" />
                            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Trạng thái hệ thống</h2>
                        </div>
                        <div className="space-y-1.5">
                            <StatusRow
                                label="Database"
                                status={connectionStatus === 'connected' ? 'online' : connectionStatus === 'error' ? 'offline' : 'loading'}
                            />
                            <StatusRow label="Storage" status="online" />
                            <StatusRow label="API" status="online" />
                            <StatusRow label="CDN" status="online" />
                        </div>
                    </div>

                    {/* Quick Tips - Simplified */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={18} className="text-gray-600" />
                            <h2 className="font-semibold text-gray-900">Mẹo nhanh</h2>
                        </div>
                        <div className="space-y-2.5 text-sm">
                            <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                                <span className="text-lg">💡</span>
                                <p className="text-gray-700">Thêm ảnh đại diện cho bài viết để tăng tương tác</p>
                            </div>
                            <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                                <span className="text-lg">📝</span>
                                <p className="text-gray-700">Điền đầy đủ Meta Title và Description cho SEO</p>
                            </div>
                            <div className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                                <span className="text-lg">🔍</span>
                                <p className="text-gray-700">Chạy SEO Audit định kỳ để phát hiện lỗi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Simplified StatusRow component - only gray
function StatusRow({ label, status }: { label: string; status: 'online' | 'offline' | 'loading' }) {
    return (
        <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700 text-xs">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-gray-500' :
                    status === 'offline' ? 'bg-orange-500' :
                        'bg-gray-400 animate-pulse'
                    }`} />
                <span className={`text-xs font-medium ${status === 'online' ? 'text-gray-600' :
                    status === 'offline' ? 'text-orange-600' :
                        'text-gray-500'
                    }`}>
                    {status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Checking...'}
                </span>
            </div>
        </div>
    );
}
