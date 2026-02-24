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
            ok: "bg-emerald-50 text-emerald-700 border-emerald-100",
            broken: "bg-rose-50 text-rose-700 border-rose-100",
            redirect: "bg-amber-50 text-amber-700 border-amber-100",
            timeout: "bg-orange-50 text-orange-700 border-orange-100",
        };
        const labels = {
            ok: `200 OK`,
            broken: `${code || 404} Broken`,
            redirect: `${code || 301} Redirect`,
            timeout: "Timeout",
        };
        return (
            <span className={`text-[11px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-tight ${colors[status as keyof typeof colors]}`}>
                {labels[status as keyof typeof labels]}
            </span>
        );
    };

    const getTypeBadge = (type: string) => {
        const colors = {
            internal: "bg-blue-50 text-blue-700 border-blue-100",
            external: "bg-slate-50 text-slate-700 border-slate-100",
            affiliate: "bg-violet-50 text-violet-700 border-violet-100",
        };
        const labels = {
            internal: "Internal",
            external: "External",
            affiliate: "Affiliate",
        };
        return (
            <span className={`text-[11px] px-2.5 py-1 rounded-full border font-bold uppercase tracking-tight ${colors[type as keyof typeof colors]}`}>
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
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                            <Link2 size={24} />
                        </div>
                        Kiểm tra Link
                    </h1>
                    <p className="text-slate-500 text-sm mt-3 font-medium">Phát hiện và sửa lỗi link hỏng trên toàn website để tối ưu SEO</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all shadow-sm">
                        <Download size={18} />
                        Xuất CSV
                    </button>
                    <button
                        onClick={handleScan}
                        disabled={isScanning}
                        className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50"
                    >
                        <RefreshCw size={18} className={isScanning ? "animate-spin" : ""} />
                        {isScanning ? "Đang quét..." : "Quét lại ngay"}
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                    { label: "Tổng số link", value: totalLinks, color: "slate" },
                    { label: "Hoạt động", value: okLinks, color: "emerald", icon: CheckCircle },
                    { label: "Link hỏng", value: brokenLinks, color: "rose", icon: XCircle },
                    { label: "Redirect", value: redirectLinks, color: "amber", icon: AlertTriangle },
                    { label: "Timeout", value: timeoutLinks, color: "orange", icon: AlertTriangle },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                        <p className="text-slate-500 text-[13px] font-semibold flex items-center gap-1.5 mb-2">
                            {stat.icon && <stat.icon size={14} className={`text-${stat.color}-500`} />} {stat.label}
                        </p>
                        <p className={`text-4xl font-bold text-${stat.color === 'slate' ? 'slate-900' : stat.color + '-600'} tracking-tight`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Tìm URL hoặc anchor text..."
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-900 font-semibold outline-none focus:border-orange-500 transition-all shadow-sm"
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
                        className="px-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-900 font-semibold outline-none focus:border-orange-500 transition-all shadow-sm"
                    >
                        <option value="all">Tất cả loại</option>
                        <option value="internal">Internal Links</option>
                        <option value="external">External Links</option>
                        <option value="affiliate">Affiliate Links</option>
                    </select>
                </div>
            </div>

            {/* Links Table */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-200 text-left">
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Trạng thái</th>
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">URL</th>
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Anchor Text</th>
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Tìm thấy tại</th>
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Loại</th>
                                <th className="px-6 py-4 text-[13px] font-bold text-slate-500 uppercase tracking-widest">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredLinks.map((link) => (
                                <tr key={link.id} className={`hover:bg-slate-50 transition-colors group ${link.status !== "ok" ? "bg-rose-50/10" : ""}`}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {getStatusIcon(link.status)}
                                            {getStatusBadge(link.status, link.statusCode)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="max-w-xs xl:max-w-md">
                                            <p className="text-slate-900 text-[13px] font-mono font-medium truncate group-hover:text-orange-600 transition-colors">{link.url}</p>
                                            {link.redirectTo && (
                                                <p className="text-amber-600 text-[11px] mt-1.5 font-medium flex items-center gap-1.5">
                                                    <RefreshCw size={10} /> {link.redirectTo}
                                                </p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-600 text-[14px] font-medium">{link.anchorText}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={link.foundOn} target="_blank" className="text-orange-500 text-sm hover:text-orange-600 font-semibold flex items-center gap-2">
                                            {link.foundOn}
                                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {getTypeBadge(link.type)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {link.status !== "ok" && (
                                                <button className="px-3.5 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all">
                                                    Sửa Link
                                                </button>
                                            )}
                                            <a href={link.url} target="_blank" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                                                <ExternalLink size={18} />
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
                <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-bold text-rose-900 text-lg mb-4 flex items-center gap-3">
                        <XCircle className="text-rose-500" size={24} />
                        Cần xử lý ngay: {brokenLinks} link hỏng nghiêm trọng
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {links.filter(l => l.status === "broken").map(link => (
                            <div key={link.id} className="flex items-start gap-4 p-4 bg-white border border-rose-100 rounded-2xl shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                                    <AlertTriangle size={16} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Trang lỗi: {link.foundOn}</p>
                                    <p className="text-rose-600 font-mono text-xs truncate mt-1">{link.url}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
