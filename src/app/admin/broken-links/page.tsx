"use client";

import { useState } from "react";
import {
    Link2, ExternalLink, AlertTriangle, CheckCircle, XCircle,
    RefreshCw, Download, Filter, Search, Globe, FileText
} from "lucide-react";

interface LinkCheck {
    id: string;
    url: string;
    foundOn: string;
    anchorText: string;
    type: "internal" | "external" | "affiliate";
    status: "ok" | "broken" | "redirect" | "timeout";
    statusCode?: number;
    redirectTo?: string;
    lastChecked: string;
}

// Sample link check data - would be dynamically generated in real app
const linkChecks: LinkCheck[] = [
    { id: "1", url: "/danh-gia-san", foundOn: "/", anchorText: "Xem bảng xếp hạng", type: "internal", status: "ok", statusCode: 200, lastChecked: "2026-01-29 16:00" },
    { id: "2", url: "/kien-thuc-forex", foundOn: "/", anchorText: "Kiến thức Forex", type: "internal", status: "ok", statusCode: 200, lastChecked: "2026-01-29 16:00" },
    { id: "3", url: "/blog/huong-dan-mt4", foundOn: "/kien-thuc-forex", anchorText: "Hướng dẫn MT4", type: "internal", status: "broken", statusCode: 404, lastChecked: "2026-01-29 16:00" },
    { id: "4", url: "https://www.vantage.com/vi", foundOn: "/vantage", anchorText: "Mở tài khoản", type: "affiliate", status: "ok", statusCode: 200, lastChecked: "2026-01-29 16:00" },
    { id: "5", url: "https://www.exness.com/vi", foundOn: "/exness", anchorText: "Đăng ký Exness", type: "affiliate", status: "redirect", statusCode: 301, redirectTo: "https://www.exness.com/a/abc123", lastChecked: "2026-01-29 16:00" },
    { id: "6", url: "https://old-broker-site.com", foundOn: "/so-sanh", anchorText: "Xem thêm", type: "external", status: "broken", statusCode: 404, lastChecked: "2026-01-29 16:00" },
    { id: "7", url: "/thuat-ngu#pip", foundOn: "/kien-thuc-forex/forex-la-gi", anchorText: "Pip là gì?", type: "internal", status: "ok", statusCode: 200, lastChecked: "2026-01-29 16:00" },
    { id: "8", url: "https://api.tradingview.com/widget", foundOn: "/cong-cu", anchorText: "TradingView Chart", type: "external", status: "timeout", lastChecked: "2026-01-29 16:00" },
    { id: "9", url: "/tin-tuc/phan-tich-vang", foundOn: "/tin-tuc", anchorText: "Phân tích vàng", type: "internal", status: "broken", statusCode: 404, lastChecked: "2026-01-29 16:00" },
    { id: "10", url: "https://www.xm.com/vn", foundOn: "/xm", anchorText: "Mở tài khoản XM", type: "affiliate", status: "ok", statusCode: 200, lastChecked: "2026-01-29 16:00" },
    { id: "11", url: "/khuyen-mai/exness-bonus", foundOn: "/khuyen-mai", anchorText: "Bonus Exness", type: "internal", status: "redirect", statusCode: 301, redirectTo: "/khuyen-mai", lastChecked: "2026-01-29 16:00" },
    { id: "12", url: "https://twitter.com/oldforexnews", foundOn: "/lien-he", anchorText: "Twitter", type: "external", status: "broken", statusCode: 404, lastChecked: "2026-01-29 16:00" },
];

// Stats
const totalLinks = linkChecks.length;
const okLinks = linkChecks.filter(l => l.status === "ok").length;
const brokenLinks = linkChecks.filter(l => l.status === "broken").length;
const redirectLinks = linkChecks.filter(l => l.status === "redirect").length;
const timeoutLinks = linkChecks.filter(l => l.status === "timeout").length;

export default function BrokenLinksPage() {
    const [links, setLinks] = useState(linkChecks);
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterType, setFilterType] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isScanning, setIsScanning] = useState(false);

    const handleScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            alert("Đã quét xong! Tìm thấy 4 link lỗi cần xử lý.");
        }, 3000);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "ok": return <CheckCircle size={16} className="text-green-500" />;
            case "broken": return <XCircle size={16} className="text-red-500" />;
            case "redirect": return <AlertTriangle size={16} className="text-yellow-500" />;
            case "timeout": return <AlertTriangle size={16} className="text-orange-500" />;
            default: return null;
        }
    };

    const getStatusBadge = (status: string, code?: number) => {
        const colors = {
            ok: "bg-green-500/20 text-green-400",
            broken: "bg-red-500/20 text-red-400",
            redirect: "bg-yellow-500/20 text-yellow-400",
            timeout: "bg-orange-500/20 text-orange-400",
        };
        const labels = {
            ok: `200 OK`,
            broken: `${code || 404} Broken`,
            redirect: `${code || 301} Redirect`,
            timeout: "Timeout",
        };
        return (
            <span className={`text-xs px-2 py-1 rounded font-mono ${colors[status as keyof typeof colors]}`}>
                {labels[status as keyof typeof labels]}
            </span>
        );
    };

    const getTypeBadge = (type: string) => {
        const colors = {
            internal: "bg-blue-500/20 text-blue-400",
            external: "bg-purple-500/20 text-purple-400",
            affiliate: "bg-green-500/20 text-green-400",
        };
        const labels = {
            internal: "Internal",
            external: "External",
            affiliate: "Affiliate",
        };
        return (
            <span className={`text-xs px-2 py-1 rounded ${colors[type as keyof typeof colors]}`}>
                {labels[type as keyof typeof labels]}
            </span>
        );
    };

    const filteredLinks = links.filter(link => {
        if (filterStatus !== "all" && link.status !== filterStatus) return false;
        if (filterType !== "all" && link.type !== filterType) return false;
        if (searchTerm && !link.url.includes(searchTerm) && !link.anchorText.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    const handleIgnore = (id: string) => {
        setLinks(links.filter(l => l.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Link2 className="text-primary" size={28} />
                        Kiểm tra Link
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Phát hiện và sửa lỗi link hỏng trên toàn website</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                        <Download size={18} />
                        Xuất CSV
                    </button>
                    <button
                        onClick={handleScan}
                        disabled={isScanning}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors disabled:opacity-50"
                    >
                        <RefreshCw size={18} className={isScanning ? "animate-spin" : ""} />
                        {isScanning ? "Đang quét..." : "Quét lại"}
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Tổng số link</p>
                    <p className="text-2xl font-bold text-white mt-1">{totalLinks}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <CheckCircle size={14} className="text-green-500" /> Hoạt động
                    </p>
                    <p className="text-2xl font-bold text-green-500 mt-1">{okLinks}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <XCircle size={14} className="text-red-500" /> Link hỏng
                    </p>
                    <p className="text-2xl font-bold text-red-500 mt-1">{brokenLinks}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <AlertTriangle size={14} className="text-yellow-500" /> Redirect
                    </p>
                    <p className="text-2xl font-bold text-yellow-500 mt-1">{redirectLinks}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <AlertTriangle size={14} className="text-orange-500" /> Timeout
                    </p>
                    <p className="text-2xl font-bold text-orange-500 mt-1">{timeoutLinks}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Tìm URL hoặc anchor text..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 outline-none focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white outline-none"
                    >
                        <option value="all">Tất cả trạng thái</option>
                        <option value="ok">✓ Hoạt động</option>
                        <option value="broken">✗ Link hỏng</option>
                        <option value="redirect">→ Redirect</option>
                        <option value="timeout">⏱ Timeout</option>
                    </select>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white outline-none"
                    >
                        <option value="all">Tất cả loại</option>
                        <option value="internal">Internal</option>
                        <option value="external">External</option>
                        <option value="affiliate">Affiliate</option>
                    </select>
                </div>
            </div>

            {/* Links Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-800 text-left">
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">Trạng thái</th>
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">URL</th>
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">Anchor Text</th>
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">Tìm thấy tại</th>
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">Loại</th>
                                <th className="px-4 py-3 text-sm font-medium text-slate-400">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {filteredLinks.map((link) => (
                                <tr key={link.id} className={`hover:bg-slate-800/50 ${link.status !== "ok" ? "bg-red-500/5" : ""}`}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(link.status)}
                                            {getStatusBadge(link.status, link.statusCode)}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="max-w-xs">
                                            <p className="text-white text-sm font-mono truncate">{link.url}</p>
                                            {link.redirectTo && (
                                                <p className="text-yellow-400 text-xs mt-1 truncate">
                                                    → {link.redirectTo}
                                                </p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-slate-300 text-sm">{link.anchorText}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <a href={link.foundOn} target="_blank" className="text-primary text-sm hover:underline flex items-center gap-1">
                                            {link.foundOn}
                                            <ExternalLink size={12} />
                                        </a>
                                    </td>
                                    <td className="px-4 py-3">
                                        {getTypeBadge(link.type)}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            {link.status !== "ok" && (
                                                <>
                                                    <button className="text-xs px-2 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30">
                                                        Sửa
                                                    </button>
                                                    <button
                                                        onClick={() => handleIgnore(link.id)}
                                                        className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded hover:bg-slate-600"
                                                    >
                                                        Bỏ qua
                                                    </button>
                                                </>
                                            )}
                                            <a href={link.url} target="_blank" className="text-slate-400 hover:text-white">
                                                <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Issues Summary */}
            {brokenLinks > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                        <XCircle className="text-red-500" size={20} />
                        Cần xử lý ngay: {brokenLinks} link hỏng
                    </h3>
                    <div className="space-y-2">
                        {links.filter(l => l.status === "broken").map(link => (
                            <div key={link.id} className="flex items-center gap-3 text-sm">
                                <span className="text-slate-400">Trang {link.foundOn}:</span>
                                <span className="text-red-400 font-mono">{link.url}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
