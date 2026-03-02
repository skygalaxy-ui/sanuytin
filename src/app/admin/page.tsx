"use client";

import { useEffect, useState } from "react";
import {
    Building2, FileText, Gift, TrendingUp, CheckCircle, XCircle,
    BarChart3, Eye, Clock, ArrowUpRight, Database, AlertTriangle,
    RefreshCcw, Calendar, Settings, FolderOpen, Upload, FileEdit,
    LayoutGrid, PenTool, Share, Users, Zap, Activity, Globe,
    Search, Map, Link2, Sparkles, ArrowRight, Plus, Edit3, PenLine,
    Image as ImageIcon, Download
} from "lucide-react";
import Link from "next/link";
import { supabase, getPosts, getBrokers, Post, Broker } from "@/lib/supabase";

// Weekly Activity Chart component
function WeeklyChart({ posts }: { posts: { created_at: string }[] }) {
    const days: { label: string; count: number }[] = [];
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().slice(0, 10);
        const count = posts.filter(p => p.created_at.startsWith(dateStr)).length;
        days.push({ label: dayNames[d.getDay()], count });
    }

    const max = Math.max(...days.map(d => d.count), 1);

    return (
        <div className="flex items-end gap-2 h-28">
            {days.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] font-medium text-gray-500">{day.count || ''}</span>
                    <div
                        className={`w-full rounded-t-md transition-all duration-500 ${day.count > 0 ? 'bg-orange-500' : 'bg-gray-100'}`}
                        style={{
                            height: `${Math.max(4, (day.count / max) * 80)}px`,
                            animationDelay: `${i * 80}ms`,
                        }}
                    />
                    <span className="text-[10px] text-gray-400">{day.label}</span>
                </div>
            ))}
        </div>
    );
}

// Quick action buttons
const quickActions = [
    { label: "Viết bài mới", href: "/admin/posts", icon: PenTool },
    { label: "Thêm sàn", href: "/admin/brokers", icon: Building2 },
    { label: "SEO Audit", href: "/admin/seo-audit", icon: Search },
];

// Navigation menu items
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
    const [draftCount, setDraftCount] = useState<number | null>(null);
    const [scheduledCount, setScheduledCount] = useState<number | null>(null);
    const [categoryCount, setCategoryCount] = useState<number | null>(null);
    const [imagesCount, setImagesCount] = useState<number>(0);
    const [thisMonthPosts, setThisMonthPosts] = useState<number>(0);
    const [lastMonthPosts, setLastMonthPosts] = useState<number>(0);
    const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [draftPosts, setDraftPosts] = useState<Post[]>([]);
    const [scheduledPosts, setScheduledPosts] = useState<Post[]>([]);
    const [weeklyPosts, setWeeklyPosts] = useState<{ created_at: string }[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [autoPublished, setAutoPublished] = useState<string[]>([]);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
        setCurrentTime(new Date());
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Auto-publish check
    useEffect(() => {
        async function checkAutoPublish() {
            try {
                const now = new Date().toISOString();
                const { data: overduePosts } = await supabase
                    .from('posts')
                    .select('id, title')
                    .eq('is_published', false)
                    .not('scheduled_at', 'is', null)
                    .lte('scheduled_at', now);

                if (overduePosts && overduePosts.length > 0) {
                    for (const post of overduePosts) {
                        await supabase.from('posts').update({
                            is_published: true,
                            published_at: now,
                            scheduled_at: null,
                            updated_at: now,
                        }).eq('id', post.id);
                    }
                    setAutoPublished(overduePosts.map(p => p.title));
                }
            } catch { }
        }
        checkAutoPublish();
        const interval = setInterval(checkAutoPublish, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Fetch all data
    const fetchData = async () => {
        setIsRefreshing(true);
        try {
            const now = new Date();
            const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
            const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
            const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0).toISOString();
            const weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).toISOString();

            const [
                { count: bCount },
                { count: pCount },
                { count: pubCount },
                { count: dCount },
                { count: sCount },
                { count: catsCount },
                { count: tmCount },
                { count: lmCount },
                { data: recent },
                { data: drafts },
                { data: scheduled },
                { data: weekly },
            ] = await Promise.all([
                supabase.from('brokers').select('*', { count: 'exact', head: true }),
                supabase.from('posts').select('*', { count: 'exact', head: true }),
                supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', true),
                supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', false),
                supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', false).not('scheduled_at', 'is', null).gt('scheduled_at', now.toISOString()),
                supabase.from('categories').select('*', { count: 'exact', head: true }),
                supabase.from('posts').select('*', { count: 'exact', head: true }).gte('created_at', thisMonthStart),
                supabase.from('posts').select('*', { count: 'exact', head: true }).gte('created_at', lastMonthStart).lte('created_at', lastMonthEnd),
                supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(5),
                supabase.from('posts').select('*').eq('is_published', false).order('created_at', { ascending: false }).limit(5),
                supabase.from('posts').select('*').eq('is_published', false).not('scheduled_at', 'is', null).gt('scheduled_at', now.toISOString()).order('scheduled_at', { ascending: true }).limit(5),
                supabase.from('posts').select('id,created_at').gte('created_at', weekAgo),
            ]);

            // Images count
            let imgCount = 0;
            try {
                const { data: imgs } = await supabase.storage.from('post-images').list('', { limit: 500 });
                imgCount = imgs?.filter(f => f.name && !f.name.startsWith('.')).length || 0;
            } catch { }

            setConnectionStatus('connected');
            setBrokerCount(bCount || 0);
            setPostCount(pCount || 0);
            setPublishedPostCount(pubCount || 0);
            setDraftCount(dCount || 0);
            setScheduledCount(sCount || 0);
            setCategoryCount(catsCount || 0);
            setThisMonthPosts(tmCount || 0);
            setLastMonthPosts(lmCount || 0);
            setImagesCount(imgCount);
            setRecentPosts((recent || []) as Post[]);
            setDraftPosts((drafts || []) as Post[]);
            setScheduledPosts((scheduled || []) as Post[]);
            setWeeklyPosts((weekly || []) as { created_at: string }[]);
        } catch (error: any) {
            console.error("Supabase connection error:", error);
            setConnectionStatus('error');
        }
        setIsRefreshing(false);
    };

    useEffect(() => { fetchData(); }, []);

    const growthPercent = lastMonthPosts > 0
        ? Math.round(((thisMonthPosts - lastMonthPosts) / lastMonthPosts) * 100)
        : thisMonthPosts > 0 ? 100 : 0;

    const stats = [
        {
            label: "Tổng bài viết", value: postCount, icon: FileText,
            href: "/admin/posts", color: "text-blue-500", bgLight: "bg-blue-50",
            trend: `${growthPercent >= 0 ? '+' : ''}${growthPercent}%`,
            trendUp: growthPercent >= 0, sub: `${thisMonthPosts} tháng này`
        },
        {
            label: "Đã xuất bản", value: publishedPostCount, icon: Eye,
            href: "/admin/posts", color: "text-emerald-500", bgLight: "bg-emerald-50",
            trend: postCount ? `${Math.round(((publishedPostCount || 0) / postCount) * 100)}%` : "0%",
            trendUp: true, sub: "tỉ lệ xuất bản"
        },
        {
            label: "Sàn giao dịch", value: brokerCount, icon: Building2,
            href: "/admin/brokers", color: "text-orange-500", bgLight: "bg-orange-50",
            trend: `${categoryCount || 0} mục`, trendUp: true, sub: "chuyên mục"
        },
        {
            label: "Bản nháp", value: draftCount, icon: FileEdit,
            href: "/admin/posts", color: "text-amber-500", bgLight: "bg-amber-50",
            trend: (draftCount || 0) > 0 ? "Cần xử lý" : "Tốt",
            trendUp: (draftCount || 0) === 0, sub: `${imagesCount} ảnh`
        },
    ];

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMin = Math.floor(diffMs / 60000);
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMin < 1) return "Vừa xong";
        if (diffMin < 60) return `${diffMin} phút trước`;
        if (diffHrs < 24) return `${diffHrs} giờ trước`;
        if (diffDays < 7) return `${diffDays} ngày trước`;
        return date.toLocaleDateString("vi-VN");
    };

    const formatScheduleDate = (dateStr: string) => {
        const d = new Date(dateStr);
        const now = new Date();
        const diff = d.getTime() - now.getTime();
        const days = Math.floor(diff / 86400000);

        if (days < 0) return "Đã quá hạn";
        if (days === 0) return "Hôm nay";
        if (days === 1) return "Ngày mai";
        return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    };

    // Export CSV
    const handleExportCSV = async () => {
        const { data } = await supabase.from('posts').select('title,slug,is_published,created_at,published_at,scheduled_at,tags,category').order('created_at', { ascending: false });
        if (!data || data.length === 0) { alert('Không có dữ liệu'); return; }
        const header = 'Tiêu đề,Slug,Trạng thái,Ngày tạo,Ngày xuất bản,Lên lịch,Tags';
        const rows = data.map((p: any) => [
            `"${p.title.replace(/"/g, '""')}"`,
            p.slug,
            p.is_published ? 'Xuất bản' : (p.scheduled_at ? 'Lên lịch' : 'Nháp'),
            new Date(p.created_at).toLocaleDateString('vi-VN'),
            p.published_at ? new Date(p.published_at).toLocaleDateString('vi-VN') : '',
            p.scheduled_at ? new Date(p.scheduled_at).toLocaleDateString('vi-VN') : '',
            (p.tags || []).join('; ')
        ].join(','));
        const csv = '\uFEFF' + [header, ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `posts_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
    };

    return (
        <div className="space-y-6">
            {/* Auto-publish notification */}
            {autoPublished.length > 0 && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-emerald-800">🎉 Tự động xuất bản {autoPublished.length} bài viết!</p>
                        <ul className="mt-1 space-y-0.5">
                            {autoPublished.map((title, i) => (
                                <li key={i} className="text-xs text-emerald-600">• {title}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={() => setAutoPublished([])} className="text-emerald-400 hover:text-emerald-600 text-lg leading-none transition-colors">&times;</button>
                </div>
            )}

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
                    <button
                        onClick={fetchData}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all disabled:opacity-50 shadow-sm"
                    >
                        <RefreshCcw size={16} className={isRefreshing ? 'animate-spin' : ''} />
                        <span className="text-sm font-medium hidden sm:inline">Làm mới</span>
                    </button>

                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all shadow-sm ${connectionStatus === 'connected'
                        ? 'bg-gray-50 text-gray-600 border-gray-200'
                        : connectionStatus === 'error'
                            ? 'bg-orange-50 text-orange-600 border-orange-200'
                            : 'bg-gray-50 text-gray-500 border-gray-200'
                        }`}>
                        {connectionStatus === 'loading' && <RefreshCcw size={14} className="animate-spin" />}
                        {connectionStatus === 'connected' && <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />}
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
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                    >
                        <action.icon size={18} />
                        {action.label}
                    </Link>
                ))}
            </div>

            {/* Stats Grid - Enhanced with trends */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat, idx) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className="bg-white border border-gray-200 rounded-2xl p-4 transition-all hover:shadow-md hover:border-gray-300 hover:-translate-y-1 group cursor-pointer shadow-sm"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className={`w-10 h-10 rounded-xl ${stat.bgLight} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                <stat.icon size={20} className={stat.color} />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            {stat.value !== null ? (
                                <p className="text-2xl font-bold text-gray-900 tabular-nums">{stat.value}</p>
                            ) : (
                                <div className="h-7 w-14 bg-gray-200 rounded-lg animate-pulse" />
                            )}
                            <p className="text-gray-500 text-xs mt-0.5 group-hover:text-gray-900 transition-colors">{stat.label}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{stat.sub}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Weekly Chart + Export CSV */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Hoạt động 7 ngày qua</h3>
                        <span className="text-xs text-gray-400">Bài viết mới mỗi ngày</span>
                    </div>
                    {postCount === null ? (
                        <div className="h-32 bg-gray-50 rounded-xl animate-pulse" />
                    ) : (
                        <WeeklyChart posts={weeklyPosts} />
                    )}
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Xuất dữ liệu</h3>
                        <p className="text-xs text-gray-400 mb-4">Tải xuống danh sách bài viết dưới dạng CSV</p>
                    </div>
                    <button
                        onClick={handleExportCSV}
                        className="w-full py-2.5 bg-orange-500 text-white rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left - Content Management */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Navigation Menu */}
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

                    {/* SEO Tools */}
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

                    {/* Recent Posts */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                                <FileText size={18} className="text-gray-600" />
                                Bài viết gần đây
                            </h2>
                            <Link href="/admin/posts" className="text-orange-600 text-sm font-medium hover:underline flex items-center gap-1">
                                Xem tất cả <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {recentPosts.length > 0 ? (
                            <div className="p-3">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                        {/* Thumbnail */}
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                            {post.featured_image ? (
                                                <img src={post.featured_image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FileText size={20} className="text-gray-400" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-900 text-sm font-medium truncate group-hover:text-orange-600 transition-colors">
                                                {post.title}
                                            </p>
                                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={11} />
                                                    {formatDate(post.updated_at || post.created_at)}
                                                </span>
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${post.is_published ? 'bg-emerald-50 text-emerald-600'
                                                    : (post.scheduled_at && new Date(post.scheduled_at) > new Date()) ? 'bg-purple-50 text-purple-600'
                                                        : 'bg-amber-50 text-amber-600'
                                                    }`}>
                                                    {post.is_published ? 'Xuất bản'
                                                        : (post.scheduled_at && new Date(post.scheduled_at) > new Date()) ? 'Lên lịch'
                                                            : 'Nháp'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <Link
                                            href="/admin/posts"
                                            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <Edit3 size={16} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
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

                {/* Right Sidebar */}
                <div className="space-y-4">
                    {/* Drafts Card */}
                    {draftPosts.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <PenLine className="w-4 h-4 text-amber-500" />
                                    Bài nháp
                                </h3>
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-50 text-amber-600">{draftCount || draftPosts.length}</span>
                            </div>
                            <div className="p-2">
                                {draftPosts.slice(0, 3).map(post => (
                                    <Link
                                        key={post.id}
                                        href="/admin/posts"
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-700 truncate group-hover:text-amber-600 transition-colors">{post.title}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{formatDate(post.created_at)}</p>
                                        </div>
                                        <Edit3 className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Scheduled Posts */}
                    {scheduledPosts.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-purple-500" />
                                    Lên lịch
                                </h3>
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-50 text-purple-600">{scheduledCount || scheduledPosts.length}</span>
                            </div>
                            <div className="p-2">
                                {scheduledPosts.slice(0, 3).map(post => (
                                    <Link
                                        key={post.id}
                                        href="/admin/posts"
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-700 truncate group-hover:text-purple-600 transition-colors">{post.title}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {post.scheduled_at && formatScheduleDate(post.scheduled_at)}
                                            </p>
                                        </div>
                                        <Clock className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-500 transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Website Info */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <Globe size={16} className="text-gray-500" />
                            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Website</span>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-lg font-bold text-gray-900 mb-1">sanuytin.net</p>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-medium rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
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
                            <StatusRow label="Database" status={connectionStatus === 'connected' ? 'online' : connectionStatus === 'error' ? 'offline' : 'loading'} />
                            <StatusRow label="Storage" status="online" />
                            <StatusRow label="API" status="online" />
                            <StatusRow label="CDN" status="online" />
                        </div>
                        <Link href="/admin/system" className="flex items-center justify-center gap-2 mt-3 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors w-full">
                            <Activity size={14} />
                            Chi tiết hệ thống
                        </Link>
                    </div>

                    {/* Quick Tips */}
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

                    {/* CMS Branding */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-5 text-white">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                            <span className="font-black text-sm">SUT</span>
                        </div>
                        <h3 className="font-semibold mb-2">Sàn Uy Tín CMS</h3>
                        <p className="text-sm text-orange-100 mb-4">Viết tiêu đề hấp dẫn, mô tả meta độc đáo, và thêm ảnh đại diện cho mỗi bài để tăng CTR từ Google.</p>
                        <div className="flex items-center justify-between text-xs text-orange-200">
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-3.5 h-3.5" />
                                <span>{postCount ? Math.round(((publishedPostCount || 0) / postCount) * 100) : 0}% đã xuất bản</span>
                            </div>
                            <span className="text-orange-300/50 text-[10px]">© Sàn Uy Tín</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// StatusRow component
function StatusRow({ label, status }: { label: string; status: 'online' | 'offline' | 'loading' }) {
    return (
        <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-700 text-xs">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-500' :
                    status === 'offline' ? 'bg-red-500' :
                        'bg-gray-400 animate-pulse'
                    }`} />
                <span className={`text-xs font-medium ${status === 'online' ? 'text-emerald-600' :
                    status === 'offline' ? 'text-red-600' :
                        'text-gray-500'
                    }`}>
                    {status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Checking...'}
                </span>
            </div>
        </div>
    );
}
