"use client";

import { useState } from "react";
import {
    BarChart3, TrendingUp, TrendingDown, Users, Eye, MousePointer,
    Clock, Globe, Smartphone, Monitor, Search, ArrowUpRight, ArrowDownRight,
    RefreshCw, Calendar, Filter
} from "lucide-react";

interface PageMetric {
    path: string;
    title: string;
    pageviews: number;
    sessions: number;
    avgTime: string;
    bounceRate: number;
    entrances: number;
    change: number;
}

interface KeywordRanking {
    keyword: string;
    position: number;
    previousPosition: number;
    clicks: number;
    impressions: number;
    ctr: number;
    url: string;
}

// Sample analytics data
const pageMetrics: PageMetric[] = [
    { path: "/", title: "Trang chủ", pageviews: 12500, sessions: 8200, avgTime: "2:35", bounceRate: 42, entrances: 6500, change: 12 },
    { path: "/danh-gia-san", title: "Đánh giá sàn", pageviews: 8900, sessions: 6100, avgTime: "4:20", bounceRate: 28, entrances: 3200, change: 18 },
    { path: "/vantage", title: "Đánh giá Vantage", pageviews: 4200, sessions: 3100, avgTime: "5:45", bounceRate: 22, entrances: 1800, change: 25 },
    { path: "/exness", title: "Đánh giá Exness", pageviews: 3800, sessions: 2900, avgTime: "5:12", bounceRate: 25, entrances: 1500, change: 8 },
    { path: "/kien-thuc-forex", title: "Kiến thức Forex", pageviews: 3200, sessions: 2400, avgTime: "3:50", bounceRate: 35, entrances: 900, change: -5 },
    { path: "/so-sanh", title: "So sánh sàn", pageviews: 2800, sessions: 2100, avgTime: "3:15", bounceRate: 38, entrances: 800, change: 15 },
    { path: "/thuat-ngu", title: "Thuật ngữ", pageviews: 2100, sessions: 1600, avgTime: "2:45", bounceRate: 45, entrances: 700, change: 3 },
    { path: "/khuyen-mai", title: "Khuyến mãi", pageviews: 1900, sessions: 1400, avgTime: "2:10", bounceRate: 52, entrances: 600, change: -8 },
];

const keywordRankings: KeywordRanking[] = [
    { keyword: "sàn forex uy tín", position: 2, previousPosition: 3, clicks: 1250, impressions: 15000, ctr: 8.3, url: "/" },
    { keyword: "đánh giá vantage", position: 1, previousPosition: 1, clicks: 890, impressions: 5200, ctr: 17.1, url: "/vantage" },
    { keyword: "exness có uy tín không", position: 3, previousPosition: 5, clicks: 650, impressions: 8900, ctr: 7.3, url: "/exness" },
    { keyword: "top 10 sàn forex việt nam", position: 4, previousPosition: 4, clicks: 520, impressions: 12000, ctr: 4.3, url: "/danh-gia-san" },
    { keyword: "so sánh vantage và exness", position: 1, previousPosition: 2, clicks: 380, impressions: 2100, ctr: 18.1, url: "/so-sanh" },
    { keyword: "forex là gì", position: 8, previousPosition: 12, clicks: 290, impressions: 25000, ctr: 1.2, url: "/kien-thuc-forex/forex-la-gi" },
    { keyword: "xm broker review", position: 5, previousPosition: 7, clicks: 210, impressions: 4500, ctr: 4.7, url: "/xm" },
    { keyword: "pip là gì", position: 6, previousPosition: 6, clicks: 180, impressions: 8000, ctr: 2.3, url: "/thuat-ngu" },
];

// Overview stats
const totalPageviews = pageMetrics.reduce((acc, p) => acc + p.pageviews, 0);
const totalSessions = pageMetrics.reduce((acc, p) => acc + p.sessions, 0);
const avgBounceRate = Math.round(pageMetrics.reduce((acc, p) => acc + p.bounceRate, 0) / pageMetrics.length);
const totalClicks = keywordRankings.reduce((acc, k) => acc + k.clicks, 0);

export default function AnalyticsPage() {
    const [dateRange, setDateRange] = useState("7d");
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 2000);
    };

    const getChangeIcon = (change: number) => {
        if (change > 0) return <ArrowUpRight size={14} className="text-green-500" />;
        if (change < 0) return <ArrowDownRight size={14} className="text-red-500" />;
        return null;
    };

    const getPositionChange = (current: number, previous: number) => {
        const diff = previous - current;
        if (diff > 0) return <span className="text-green-500 text-xs">↑{diff}</span>;
        if (diff < 0) return <span className="text-red-500 text-xs">↓{Math.abs(diff)}</span>;
        return <span className="text-slate-500 text-xs">–</span>;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <BarChart3 className="text-primary" size={28} />
                        Analytics Dashboard
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Thống kê truy cập và hiệu suất SEO</p>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-white outline-none focus:border-primary"
                    >
                        <option value="7d">7 ngày qua</option>
                        <option value="30d">30 ngày qua</option>
                        <option value="90d">90 ngày qua</option>
                    </select>
                    <button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
                        Làm mới
                    </button>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-sky-500/20 to-sky-600/10 border border-sky-500/30 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">Lượt xem trang</p>
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center">
                            <Eye size={18} className="text-sky-400" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">{totalPageviews.toLocaleString()}</p>
                    <p className="text-sm text-emerald-400 mt-1 flex items-center gap-1">
                        <TrendingUp size={14} /> +12% so với tuần trước
                    </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">Phiên truy cập</p>
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center">
                            <Users size={18} className="text-emerald-400" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">{totalSessions.toLocaleString()}</p>
                    <p className="text-sm text-emerald-400 mt-1 flex items-center gap-1">
                        <TrendingUp size={14} /> +8% so với tuần trước
                    </p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">Tỷ lệ thoát</p>
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center">
                            <TrendingDown size={18} className="text-amber-400" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">{avgBounceRate}%</p>
                    <p className="text-sm text-emerald-400 mt-1 flex items-center gap-1">
                        <TrendingDown size={14} /> -3% (tốt hơn)
                    </p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/30 rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-sm">Click từ Google</p>
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center">
                            <Search size={18} className="text-primary" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">{totalClicks.toLocaleString()}</p>
                    <p className="text-sm text-emerald-400 mt-1 flex items-center gap-1">
                        <TrendingUp size={14} /> +15% so với tuần trước
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-slate-800">
                        <h2 className="font-bold text-white flex items-center gap-2">
                            <Eye size={18} className="text-sky-400" />
                            Trang được xem nhiều nhất
                        </h2>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {pageMetrics.slice(0, 6).map((page, idx) => (
                            <div key={page.path} className="p-4 hover:bg-slate-800/50 transition-colors group">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg font-bold text-slate-500">#{idx + 1}</span>
                                        <div>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors">{page.title}</p>
                                            <p className="text-slate-500 text-sm font-mono">{page.path}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold">{page.pageviews.toLocaleString()}</p>
                                        <p className={`text-sm flex items-center justify-end gap-1 ${page.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                                            {getChangeIcon(page.change)}
                                            {page.change > 0 ? "+" : ""}{page.change}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Keyword Rankings */}
                <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-slate-800">
                        <h2 className="font-bold text-white flex items-center gap-2">
                            <Search size={18} className="text-primary" />
                            Thứ hạng Keyword (Google)
                        </h2>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {keywordRankings.slice(0, 6).map((kw) => (
                            <div key={kw.keyword} className="p-4 hover:bg-slate-800/50 transition-colors group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium group-hover:text-primary transition-colors">{kw.keyword}</p>
                                        <p className="text-slate-500 text-sm font-mono">{kw.url}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-center">
                                            <p className="text-xs text-slate-500">Vị trí</p>
                                            <div className="flex items-center gap-1">
                                                <span className={`font-bold ${kw.position <= 3 ? "text-green-500" : kw.position <= 10 ? "text-yellow-500" : "text-slate-400"}`}>
                                                    #{kw.position}
                                                </span>
                                                {getPositionChange(kw.position, kw.previousPosition)}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-slate-500">CTR</p>
                                            <span className="font-bold text-white">{kw.ctr}%</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-slate-500">Clicks</p>
                                            <span className="font-bold text-primary">{kw.clicks}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Device & Traffic Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Device Breakdown */}
                <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6">
                    <h2 className="font-bold text-white mb-4">Thiết bị truy cập</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Smartphone size={14} /> Mobile
                                </span>
                                <span className="text-white font-medium">65%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Monitor size={14} /> Desktop
                                </span>
                                <span className="text-white font-medium">30%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <Globe size={14} /> Tablet
                                </span>
                                <span className="text-white font-medium">5%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: "5%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6">
                    <h2 className="font-bold text-white mb-4">Nguồn truy cập</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400">Organic Search (Google)</span>
                                <span className="text-white font-medium">58%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: "58%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400">Direct</span>
                                <span className="text-white font-medium">22%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: "22%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400">Social Media</span>
                                <span className="text-white font-medium">12%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-purple-500 rounded-full" style={{ width: "12%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-slate-400">Referral</span>
                                <span className="text-white font-medium">8%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full">
                                <div className="h-full bg-yellow-500 rounded-full" style={{ width: "8%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Note */}
            <div className="bg-gradient-to-r from-sky-500/20 to-primary/20 border border-sky-500/30 rounded-2xl p-5 text-sm text-sky-300">
                💡 <strong>Lưu ý:</strong> Đây là dữ liệu mẫu. Để xem dữ liệu thực, hãy kết nối Google Analytics và Google Search Console.
            </div>
        </div>
    );
}
