"use client";

import { useState } from "react";
import {
    Users, TrendingUp, TrendingDown, ExternalLink, Eye, Search,
    BarChart3, FileText, Link2, RefreshCw, Plus, AlertCircle, Bell
} from "lucide-react";

interface Competitor {
    id: string;
    name: string;
    domain: string;
    logo?: string;
    metrics: {
        domainAuthority: number;
        organicTraffic: number;
        keywords: number;
        backlinks: number;
    };
    changes: {
        traffic: number;
        keywords: number;
        backlinks: number;
    };
}

interface KeywordComparison {
    keyword: string;
    searchVolume: number;
    ourPosition: number | null;
    competitors: {
        name: string;
        position: number | null;
    }[];
}

interface ContentAlert {
    id: string;
    competitor: string;
    type: "new_article" | "ranking_change" | "backlink";
    title: string;
    date: string;
    url?: string;
}

// Sample competitor data
const competitors: Competitor[] = [
    {
        id: "1",
        name: "WikiFX Vietnam",
        domain: "wikifx.com/vi",
        metrics: { domainAuthority: 62, organicTraffic: 85000, keywords: 2400, backlinks: 12000 },
        changes: { traffic: 8, keywords: 120, backlinks: 350 }
    },
    {
        id: "2",
        name: "Forex Factory VN",
        domain: "forexfactory.vn",
        metrics: { domainAuthority: 45, organicTraffic: 42000, keywords: 1200, backlinks: 5600 },
        changes: { traffic: -3, keywords: -50, backlinks: 120 }
    },
    {
        id: "3",
        name: "Trading VN",
        domain: "tradingvn.com",
        metrics: { domainAuthority: 38, organicTraffic: 28000, keywords: 890, backlinks: 3200 },
        changes: { traffic: 12, keywords: 80, backlinks: 180 }
    },
];

const keywordComparisons: KeywordComparison[] = [
    {
        keyword: "sàn forex uy tín",
        searchVolume: 8100,
        ourPosition: 2,
        competitors: [
            { name: "WikiFX Vietnam", position: 1 },
            { name: "Forex Factory VN", position: 4 },
            { name: "Trading VN", position: 7 },
        ]
    },
    {
        keyword: "đánh giá exness",
        searchVolume: 5400,
        ourPosition: 3,
        competitors: [
            { name: "WikiFX Vietnam", position: 2 },
            { name: "Forex Factory VN", position: 5 },
            { name: "Trading VN", position: null },
        ]
    },
    {
        keyword: "top 10 sàn forex việt nam",
        searchVolume: 3600,
        ourPosition: 4,
        competitors: [
            { name: "WikiFX Vietnam", position: 1 },
            { name: "Forex Factory VN", position: 3 },
            { name: "Trading VN", position: 6 },
        ]
    },
    {
        keyword: "vantage review",
        searchVolume: 2900,
        ourPosition: 1,
        competitors: [
            { name: "WikiFX Vietnam", position: 3 },
            { name: "Forex Factory VN", position: null },
            { name: "Trading VN", position: 8 },
        ]
    },
    {
        keyword: "xm broker có tốt không",
        searchVolume: 1900,
        ourPosition: 5,
        competitors: [
            { name: "WikiFX Vietnam", position: 2 },
            { name: "Forex Factory VN", position: 1 },
            { name: "Trading VN", position: 4 },
        ]
    },
];

const contentAlerts: ContentAlert[] = [
    { id: "1", competitor: "WikiFX Vietnam", type: "new_article", title: "Đánh giá chi tiết sàn Pepperstone 2026", date: "2026-01-28", url: "https://wikifx.com/vi/pepperstone-review" },
    { id: "2", competitor: "Trading VN", type: "ranking_change", title: "Tăng từ #8 lên #4 cho 'forex cho người mới'", date: "2026-01-27" },
    { id: "3", competitor: "WikiFX Vietnam", type: "backlink", title: "Nhận backlink từ trang tài chính lớn", date: "2026-01-26" },
    { id: "4", competitor: "Forex Factory VN", type: "new_article", title: "Hướng dẫn giao dịch vàng 2026", date: "2026-01-25", url: "https://forexfactory.vn/giao-dich-vang" },
];

export default function CompetitorMonitorPage() {
    const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 2000);
    };

    const getPositionBadge = (position: number | null) => {
        if (position === null) return <span className="text-gray-400">-</span>;
        if (position <= 3) return <span className="text-green-500 font-bold">#{position}</span>;
        if (position <= 10) return <span className="text-yellow-500 font-bold">#{position}</span>;
        return <span className="text-gray-500">#{position}</span>;
    };

    const getAlertIcon = (type: string) => {
        switch (type) {
            case "new_article": return <FileText size={16} className="text-blue-500" />;
            case "ranking_change": return <TrendingUp size={16} className="text-green-500" />;
            case "backlink": return <Link2 size={16} className="text-purple-500" />;
            default: return <AlertCircle size={16} className="text-yellow-500" />;
        }
    };

    const getAlertTypeBadge = (type: string) => {
        const configs = {
            new_article: { color: "bg-blue-500/20 text-blue-400", label: "Bài viết mới" },
            ranking_change: { color: "bg-green-500/20 text-green-400", label: "Thay đổi rank" },
            backlink: { color: "bg-purple-500/20 text-purple-400", label: "Backlink mới" },
        };
        const config = configs[type as keyof typeof configs];
        return <span className={`text-xs px-2 py-1 rounded ${config.color}`}>{config.label}</span>;
    };

    // Our metrics (for comparison)
    const ourMetrics = {
        domainAuthority: 35,
        organicTraffic: 32000,
        keywords: 680,
        backlinks: 2800
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Users className="text-primary" size={28} />
                        Theo dõi Đối thủ
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Phân tích và so sánh với các đối thủ cạnh tranh</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-900 rounded-lg transition-colors">
                        <Plus size={18} />
                        Thêm đối thủ
                    </button>
                    <button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-gray-900 rounded-lg transition-colors"
                    >
                        <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
                        Cập nhật
                    </button>
                </div>
            </div>

            {/* Our Stats vs Average Competitor */}
            <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-xl p-6">
                <h2 className="font-bold text-gray-900 mb-4">📊 Sàn Uy Tín vs Trung bình đối thủ</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm">Domain Authority</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-bold text-gray-900">{ourMetrics.domainAuthority}</span>
                            <span className="text-sm text-gray-400">vs</span>
                            <span className="text-lg text-gray-500">{Math.round(competitors.reduce((a, c) => a + c.metrics.domainAuthority, 0) / competitors.length)}</span>
                        </div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm">Organic Traffic</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-bold text-gray-900">{(ourMetrics.organicTraffic / 1000).toFixed(0)}K</span>
                            <span className="text-sm text-gray-400">vs</span>
                            <span className="text-lg text-gray-500">{(competitors.reduce((a, c) => a + c.metrics.organicTraffic, 0) / competitors.length / 1000).toFixed(0)}K</span>
                        </div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm">Keywords</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-bold text-gray-900">{ourMetrics.keywords}</span>
                            <span className="text-sm text-gray-400">vs</span>
                            <span className="text-lg text-gray-500">{Math.round(competitors.reduce((a, c) => a + c.metrics.keywords, 0) / competitors.length)}</span>
                        </div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-gray-500 text-sm">Backlinks</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-bold text-gray-900">{(ourMetrics.backlinks / 1000).toFixed(1)}K</span>
                            <span className="text-sm text-gray-400">vs</span>
                            <span className="text-lg text-gray-500">{(competitors.reduce((a, c) => a + c.metrics.backlinks, 0) / competitors.length / 1000).toFixed(1)}K</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {competitors.map(comp => (
                    <div key={comp.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-gray-900">{comp.name}</h3>
                                <a href={`https://${comp.domain}`} target="_blank" className="text-sm text-gray-500 hover:text-primary flex items-center gap-1">
                                    {comp.domain} <ExternalLink size={12} />
                                </a>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-primary">{comp.metrics.domainAuthority}</p>
                                <p className="text-xs text-gray-400">DA</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-gray-50/50 rounded-lg p-2">
                                <p className="text-gray-900 font-bold">{(comp.metrics.organicTraffic / 1000).toFixed(0)}K</p>
                                <p className="text-xs text-gray-400">Traffic</p>
                                <p className={`text-xs ${comp.changes.traffic >= 0 ? "text-green-500" : "text-red-500"}`}>
                                    {comp.changes.traffic >= 0 ? "+" : ""}{comp.changes.traffic}%
                                </p>
                            </div>
                            <div className="bg-gray-50/50 rounded-lg p-2">
                                <p className="text-gray-900 font-bold">{comp.metrics.keywords}</p>
                                <p className="text-xs text-gray-400">KWs</p>
                                <p className={`text-xs ${comp.changes.keywords >= 0 ? "text-green-500" : "text-red-500"}`}>
                                    {comp.changes.keywords >= 0 ? "+" : ""}{comp.changes.keywords}
                                </p>
                            </div>
                            <div className="bg-gray-50/50 rounded-lg p-2">
                                <p className="text-gray-900 font-bold">{(comp.metrics.backlinks / 1000).toFixed(1)}K</p>
                                <p className="text-xs text-gray-400">Links</p>
                                <p className={`text-xs ${comp.changes.backlinks >= 0 ? "text-green-500" : "text-red-500"}`}>
                                    +{comp.changes.backlinks}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Keyword Comparison */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="font-bold text-gray-900 flex items-center gap-2">
                        <Search size={18} className="text-primary" />
                        So sánh Keyword Rankings
                    </h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 text-left text-sm">
                                <th className="px-4 py-3 text-gray-500">Keyword</th>
                                <th className="px-4 py-3 text-gray-500 text-center">Volume</th>
                                <th className="px-4 py-3 text-gray-500 text-center">Sàn Uy Tín</th>
                                {competitors.map(c => (
                                    <th key={c.id} className="px-4 py-3 text-gray-500 text-center">{c.name.split(" ")[0]}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {keywordComparisons.map((kw, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50">
                                    <td className="px-4 py-3">
                                        <span className="text-gray-900">{kw.keyword}</span>
                                    </td>
                                    <td className="px-4 py-3 text-center text-gray-500">{kw.searchVolume.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`px-2 py-1 rounded ${kw.ourPosition && kw.ourPosition <= 3 ? "bg-green-500/20" : ""}`}>
                                            {getPositionBadge(kw.ourPosition)}
                                        </span>
                                    </td>
                                    {kw.competitors.map((c, i) => (
                                        <td key={i} className="px-4 py-3 text-center">
                                            {getPositionBadge(c.position)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Content Alerts */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="font-bold text-gray-900 flex items-center gap-2">
                        <Bell size={18} className="text-yellow-500" />
                        Cảnh báo hoạt động đối thủ
                    </h2>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">{contentAlerts.length} mới</span>
                </div>
                <div className="divide-y divide-slate-800">
                    {contentAlerts.map(alert => (
                        <div key={alert.id} className="p-4 hover:bg-gray-50/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {getAlertIcon(alert.type)}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-900 font-medium">{alert.competitor}</span>
                                        {getAlertTypeBadge(alert.type)}
                                    </div>
                                    <p className="text-gray-500 text-sm mt-0.5">{alert.title}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm">{alert.date}</span>
                                {alert.url && (
                                    <a href={alert.url} target="_blank" className="text-primary hover:text-primary/80">
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    💡 Đề xuất hành động
                </h3>
                <div className="space-y-2 text-sm">
                    <p className="text-blue-400">• Viết bài về "<strong>Pepperstone</strong>" để cạnh tranh với WikiFX (vừa ra bài mới)</p>
                    <p className="text-blue-400">• Tập trung tăng backlinks - đang thấp hơn đối thủ 4x</p>
                    <p className="text-blue-400">• Keyword "forex cho người mới" - Trading VN đang tăng rank, cần optimize lại bài viết</p>
                    <p className="text-blue-400">• Xem xét tạo nội dung về "giao dịch vàng" - Forex Factory VN vừa đăng</p>
                </div>
            </div>
        </div>
    );
}
