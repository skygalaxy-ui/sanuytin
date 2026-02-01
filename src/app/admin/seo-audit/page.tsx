"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Search, CheckCircle, XCircle, AlertTriangle, ExternalLink,
    FileText, Image, Link2, Hash, Type, AlignLeft, Globe,
    Smartphone, Zap, Shield, ChevronDown, ChevronUp, RefreshCw
} from "lucide-react";

interface SEOCheck {
    id: string;
    name: string;
    description: string;
    status: "pass" | "fail" | "warning";
    value?: string;
    recommendation?: string;
    priority: "high" | "medium" | "low";
}

interface PageAudit {
    path: string;
    title: string;
    lastChecked: string;
    score: number;
    checks: SEOCheck[];
}

// SEO Audit Data - In real app, this would be dynamically generated
const pageAudits: PageAudit[] = [
    {
        path: "/",
        title: "Trang chủ",
        lastChecked: "2026-01-29 16:00",
        score: 92,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang trong thẻ <title>", status: "pass", value: "Sàn Uy Tín - Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026 (58 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang trong thẻ meta", status: "pass", value: "Bảng xếp hạng sàn Forex uy tín nhất... (156 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1 trên trang", status: "pass", value: "Chọn sàn giao dịch phù hợp với bạn", priority: "high" },
            { id: "h2-h6", name: "Cấu trúc Heading", description: "Thứ tự heading hợp lý (H1 → H2 → H3...)", status: "pass", value: "H1: 1, H2: 4, H3: 8", priority: "medium" },
            { id: "images-alt", name: "Alt Text cho ảnh", description: "Tất cả ảnh có thuộc tính alt", status: "warning", value: "8/10 ảnh có alt text", recommendation: "Thêm alt text cho 2 ảnh còn thiếu", priority: "high" },
            { id: "internal-links", name: "Internal Links", description: "Số lượng liên kết nội bộ", status: "pass", value: "15 internal links", priority: "medium" },
            { id: "external-links", name: "External Links", description: "Liên kết ra ngoài có rel='nofollow'", status: "pass", value: "5 external links (tất cả có nofollow)", priority: "low" },
            { id: "canonical", name: "Canonical URL", description: "Có thẻ canonical để tránh duplicate", status: "pass", value: "https://sanuytin.net/", priority: "high" },
            { id: "og-tags", name: "Open Graph Tags", description: "Thẻ OG cho social sharing", status: "pass", value: "og:title, og:description, og:image đầy đủ", priority: "medium" },
            { id: "mobile", name: "Mobile Friendly", description: "Responsive trên điện thoại", status: "pass", value: "Viewport meta đúng chuẩn", priority: "high" },
            { id: "page-speed", name: "Tốc độ tải trang", description: "Core Web Vitals", status: "warning", value: "LCP: 2.8s (nên < 2.5s)", recommendation: "Tối ưu hình ảnh, lazy load", priority: "high" },
            { id: "ssl", name: "SSL/HTTPS", description: "Trang sử dụng HTTPS", status: "pass", value: "HTTPS enabled", priority: "high" },
        ]
    },
    {
        path: "/danh-gia-san",
        title: "Đánh giá sàn Forex",
        lastChecked: "2026-01-29 16:00",
        score: 88,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang trong thẻ <title>", status: "pass", value: "Top 10 Sàn Forex Uy Tín Việt Nam 2026 - Đánh Giá Chi Tiết (55 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang trong thẻ meta", status: "pass", value: "Bảng xếp hạng và đánh giá chi tiết... (148 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1 trên trang", status: "pass", value: "Bảng Xếp Hạng Sàn Forex Uy Tín 2026", priority: "high" },
            { id: "h2-h6", name: "Cấu trúc Heading", description: "Thứ tự heading hợp lý", status: "pass", value: "H1: 1, H2: 10, H3: 5", priority: "medium" },
            { id: "images-alt", name: "Alt Text cho ảnh", description: "Tất cả ảnh có thuộc tính alt", status: "warning", value: "9/12 ảnh có alt text", recommendation: "Thêm alt text cho logo broker", priority: "high" },
            { id: "internal-links", name: "Internal Links", description: "Số lượng liên kết nội bộ", status: "pass", value: "20 internal links", priority: "medium" },
            { id: "keyword-density", name: "Keyword Density", description: "Mật độ từ khóa chính", status: "pass", value: "'sàn forex': 2.1% (tốt)", priority: "medium" },
            { id: "content-length", name: "Độ dài nội dung", description: "Số từ trên trang", status: "pass", value: "1,200 từ (tốt cho trang danh sách)", priority: "medium" },
            { id: "schema", name: "Schema Markup", description: "Structured data cho rich snippets", status: "fail", value: "Chưa có schema", recommendation: "Thêm Review schema hoặc ItemList schema", priority: "medium" },
            { id: "breadcrumb", name: "Breadcrumb", description: "Đường dẫn breadcrumb", status: "pass", value: "Có breadcrumb navigation", priority: "low" },
        ]
    },
    {
        path: "/kien-thuc-forex",
        title: "Kiến thức Forex",
        lastChecked: "2026-01-29 16:00",
        score: 85,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Kiến Thức Forex Từ A-Z Cho Người Mới Bắt Đầu (45 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "Học forex từ cơ bản đến nâng cao... (152 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Kiến Thức Forex", priority: "high" },
            { id: "images-alt", name: "Alt Text cho ảnh", description: "Tất cả ảnh có alt", status: "pass", value: "5/5 ảnh có alt text", priority: "high" },
            { id: "internal-links", name: "Internal Links", description: "Liên kết nội bộ", status: "warning", value: "8 internal links", recommendation: "Thêm liên kết đến các bài viết liên quan", priority: "medium" },
            { id: "table-contents", name: "Mục lục (TOC)", description: "Table of Contents cho bài dài", status: "fail", value: "Chưa có mục lục", recommendation: "Thêm mục lục để cải thiện UX và SEO", priority: "low" },
        ]
    },
    {
        path: "/cong-cu",
        title: "Công cụ Trading",
        lastChecked: "2026-01-29 16:00",
        score: 65,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Công Cụ Trading Forex Miễn Phí (32 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "fail", value: "THIẾU", recommendation: "Thêm meta description 150-160 ký tự mô tả các công cụ trading", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Công Cụ Hỗ Trợ Trading", priority: "high" },
            { id: "content-length", name: "Độ dài nội dung", description: "Số từ trên trang", status: "warning", value: "200 từ (quá ít)", recommendation: "Thêm mô tả chi tiết cho mỗi công cụ, ít nhất 500 từ", priority: "medium" },
            { id: "internal-links", name: "Internal Links", description: "Liên kết nội bộ", status: "warning", value: "4 internal links (ít)", recommendation: "Thêm liên kết đến bài viết hướng dẫn sử dụng", priority: "medium" },
            { id: "schema", name: "Schema Markup", description: "Structured data", status: "fail", value: "Chưa có schema", recommendation: "Thêm SoftwareApplication schema cho mỗi tool", priority: "medium" },
        ]
    },
    {
        path: "/lien-he",
        title: "Liên hệ",
        lastChecked: "2026-01-29 16:00",
        score: 70,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Liên Hệ - Sàn Uy Tín (22 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "Liên hệ với chúng tôi qua email... (140 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Liên Hệ Với Chúng Tôi", priority: "high" },
            { id: "internal-links", name: "Internal Links", description: "Liên kết nội bộ", status: "fail", value: "2 internal links (quá ít)", recommendation: "Thêm liên kết đến trang FAQ, About Us, các dịch vụ", priority: "medium" },
            { id: "schema", name: "Schema Markup", description: "Structured data", status: "fail", value: "Chưa có LocalBusiness schema", recommendation: "Thêm ContactPage và LocalBusiness schema", priority: "medium" },
            { id: "content-length", name: "Độ dài nội dung", description: "Số từ trên trang", status: "warning", value: "150 từ", recommendation: "Thêm FAQ về liên hệ, thời gian phản hồi", priority: "low" },
        ]
    },
    {
        path: "/so-sanh",
        title: "So sánh sàn",
        lastChecked: "2026-01-29 16:00",
        score: 82,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "So Sánh Chi Tiết Các Sàn Forex Uy Tín 2026 (45 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "So sánh spread, đòn bẩy, nạp rút... (155 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "So Sánh Các Sàn Forex", priority: "high" },
            { id: "table-accessibility", name: "Bảng so sánh", description: "Bảng có header và caption", status: "warning", value: "Có header nhưng thiếu caption", recommendation: "Thêm caption cho bảng so sánh", priority: "low" },
            { id: "schema", name: "Schema Markup", description: "Structured data", status: "fail", value: "Chưa có schema", recommendation: "Thêm Table hoặc ComparisonList schema", priority: "medium" },
        ]
    },
    {
        path: "/khuyen-mai",
        title: "Khuyến mãi",
        lastChecked: "2026-01-29 16:00",
        score: 78,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Khuyến Mãi Sàn Forex Mới Nhất 2026 (38 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "Tổng hợp các chương trình khuyến mãi... (152 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Khuyến Mãi Từ Các Sàn Forex", priority: "high" },
            { id: "freshness", name: "Nội dung cập nhật", description: "Thông tin mới nhất", status: "warning", value: "Cập nhật 7 ngày trước", recommendation: "Cập nhật thường xuyên (hàng tuần) để giữ freshness", priority: "medium" },
            { id: "schema", name: "Schema Markup", description: "Structured data", status: "fail", value: "Chưa có Offer schema", recommendation: "Thêm Offer schema cho mỗi khuyến mãi", priority: "medium" },
        ]
    },
    {
        path: "/thuat-ngu",
        title: "Thuật ngữ Forex",
        lastChecked: "2026-01-29 16:00",
        score: 90,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Thuật Ngữ Forex A-Z | Từ Điển Trading (42 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "Từ điển thuật ngữ forex đầy đủ nhất... (158 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Thuật Ngữ Forex", priority: "high" },
            { id: "content-length", name: "Độ dài nội dung", description: "Số từ trên trang", status: "pass", value: "4,500 từ (tuyệt vời)", priority: "medium" },
            { id: "internal-links", name: "Internal Links", description: "Liên kết nội bộ", status: "pass", value: "25 internal links", priority: "medium" },
            { id: "anchor-links", name: "Anchor Links", description: "Links đến từng section", status: "pass", value: "Có navigation A-Z", priority: "low" },
        ]
    },
    {
        path: "/tin-tuc",
        title: "Tin tức",
        lastChecked: "2026-01-29 16:00",
        score: 85,
        checks: [
            { id: "meta-title", name: "Meta Title", description: "Tiêu đề trang", status: "pass", value: "Tin Tức Forex Mới Nhất | Sàn Uy Tín (40 ký tự)", priority: "high" },
            { id: "meta-desc", name: "Meta Description", description: "Mô tả trang", status: "pass", value: "Cập nhật tin tức thị trường forex... (150 ký tự)", priority: "high" },
            { id: "h1", name: "Thẻ H1", description: "Có đúng 1 thẻ H1", status: "pass", value: "Tin Tức Forex", priority: "high" },
            { id: "pagination", name: "Phân trang", description: "SEO-friendly pagination", status: "warning", value: "Có phân trang nhưng thiếu rel='next/prev'", recommendation: "Thêm rel='next' và rel='prev' cho phân trang", priority: "low" },
            { id: "date", name: "Ngày đăng", description: "Hiển thị ngày đăng bài", status: "pass", value: "Có ngày đăng cho mỗi bài", priority: "medium" },
        ]
    },
];

// Calculate summary stats
const totalPages = pageAudits.length;
const avgScore = Math.round(pageAudits.reduce((acc, p) => acc + p.score, 0) / totalPages);
const totalIssues = pageAudits.reduce((acc, p) => acc + p.checks.filter(c => c.status !== "pass").length, 0);
const criticalIssues = pageAudits.reduce((acc, p) => acc + p.checks.filter(c => c.status === "fail" && c.priority === "high").length, 0);

export default function SEOAuditPage() {
    const [expandedPages, setExpandedPages] = useState<string[]>([]);
    const [filterStatus, setFilterStatus] = useState<"all" | "fail" | "warning">("all");
    const [searchTerm, setSearchTerm] = useState("");

    const togglePage = (path: string) => {
        setExpandedPages(prev =>
            prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
        );
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-500";
        if (score >= 70) return "text-yellow-500";
        return "text-red-500";
    };

    const getScoreBg = (score: number) => {
        if (score >= 90) return "bg-green-500";
        if (score >= 70) return "bg-yellow-500";
        return "bg-red-500";
    };

    const filteredAudits = pageAudits.filter(page => {
        if (searchTerm && !page.title.toLowerCase().includes(searchTerm.toLowerCase()) && !page.path.includes(searchTerm)) {
            return false;
        }
        if (filterStatus === "all") return true;
        return page.checks.some(c => c.status === filterStatus);
    });

    const getCheckIcon = (status: string) => {
        switch (status) {
            case "pass": return <CheckCircle size={16} className="text-green-500" />;
            case "fail": return <XCircle size={16} className="text-red-500" />;
            case "warning": return <AlertTriangle size={16} className="text-yellow-500" />;
            default: return null;
        }
    };

    const getPriorityBadge = (priority: string) => {
        const colors = {
            high: "bg-red-500/20 text-red-400",
            medium: "bg-yellow-500/20 text-yellow-400",
            low: "bg-slate-500/20 text-slate-400",
        };
        return (
            <span className={`text-xs px-2 py-0.5 rounded ${colors[priority as keyof typeof colors]}`}>
                {priority === "high" ? "Cao" : priority === "medium" ? "Trung bình" : "Thấp"}
            </span>
        );
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Search className="text-primary" size={28} />
                        SEO Audit - Kiểm tra On-Page
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Checklist đánh giá SEO chi tiết cho từng trang</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                    <RefreshCw size={18} />
                    Quét lại
                </button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Điểm SEO Trung bình</p>
                    <p className={`text-3xl font-bold mt-1 ${getScoreColor(avgScore)}`}>{avgScore}%</p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/30 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Tổng số trang</p>
                    <p className="text-3xl font-bold text-white mt-1">{totalPages}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Tổng vấn đề</p>
                    <p className="text-3xl font-bold text-amber-400 mt-1">{totalIssues}</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Vấn đề nghiêm trọng</p>
                    <p className="text-3xl font-bold text-red-400 mt-1">{criticalIssues}</p>
                </div>
            </div>

            {/* SEO Checklist Legend */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-white mb-3">Các yếu tố SEO On-Page được kiểm tra:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Type size={14} className="text-primary" />
                        <span>Meta Title</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <AlignLeft size={14} className="text-primary" />
                        <span>Meta Description</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Hash size={14} className="text-primary" />
                        <span>Heading (H1-H6)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Image size={14} className="text-primary" />
                        <span>Alt Text ảnh</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Link2 size={14} className="text-primary" />
                        <span>Internal Links</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Globe size={14} className="text-primary" />
                        <span>Schema Markup</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Smartphone size={14} className="text-primary" />
                        <span>Mobile Friendly</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Zap size={14} className="text-primary" />
                        <span>Page Speed</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <FileText size={14} className="text-primary" />
                        <span>Content Length</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Shield size={14} className="text-primary" />
                        <span>SSL/HTTPS</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trang..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 outline-none focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setFilterStatus("all")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filterStatus === "all" ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
                    >
                        Tất cả
                    </button>
                    <button
                        onClick={() => setFilterStatus("fail")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${filterStatus === "fail" ? "bg-red-500 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
                    >
                        <XCircle size={14} /> Lỗi
                    </button>
                    <button
                        onClick={() => setFilterStatus("warning")}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${filterStatus === "warning" ? "bg-amber-500 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
                    >
                        <AlertTriangle size={14} /> Cảnh báo
                    </button>
                </div>
            </div>

            {/* Page Audits */}
            <div className="space-y-4">
                {filteredAudits.map((page) => {
                    const failCount = page.checks.filter(c => c.status === "fail").length;
                    const warnCount = page.checks.filter(c => c.status === "warning").length;
                    const passCount = page.checks.filter(c => c.status === "pass").length;
                    const isExpanded = expandedPages.includes(page.path);
                    const filteredChecks = filterStatus === "all"
                        ? page.checks
                        : page.checks.filter(c => c.status === filterStatus);

                    return (
                        <div key={page.path} className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors">
                            {/* Page Header */}
                            <button
                                onClick={() => togglePage(page.path)}
                                className="w-full flex items-center justify-between p-5 hover:bg-slate-800/50 transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg text-white ${getScoreBg(page.score)}`}>
                                        {page.score}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">{page.title}</h3>
                                        <p className="text-slate-500 text-sm font-mono">{page.path}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Quick Stats */}
                                    <div className="hidden md:flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <CheckCircle size={14} className="text-green-500" />
                                            <span className="text-green-500 text-sm">{passCount}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <AlertTriangle size={14} className="text-yellow-500" />
                                            <span className="text-yellow-500 text-sm">{warnCount}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <XCircle size={14} className="text-red-500" />
                                            <span className="text-red-500 text-sm">{failCount}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={page.path}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                                    >
                                        <ExternalLink size={16} />
                                    </Link>

                                    {isExpanded ? (
                                        <ChevronUp size={20} className="text-slate-400" />
                                    ) : (
                                        <ChevronDown size={20} className="text-slate-400" />
                                    )}
                                </div>
                            </button>

                            {/* Checks Detail */}
                            {isExpanded && (
                                <div className="border-t border-slate-800">
                                    <div className="divide-y divide-slate-800">
                                        {filteredChecks.map((check) => (
                                            <div key={check.id} className={`p-4 ${check.status !== "pass" ? "bg-slate-800/30" : ""}`}>
                                                <div className="flex items-start gap-3">
                                                    <div className="mt-0.5">
                                                        {getCheckIcon(check.status)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="font-medium text-white">{check.name}</span>
                                                            {getPriorityBadge(check.priority)}
                                                        </div>
                                                        <p className="text-slate-500 text-sm mt-0.5">{check.description}</p>
                                                        {check.value && (
                                                            <p className={`text-sm mt-1 ${check.status === "pass" ? "text-green-400" : check.status === "warning" ? "text-yellow-400" : "text-red-400"}`}>
                                                                {check.value}
                                                            </p>
                                                        )}
                                                        {check.recommendation && (
                                                            <div className="mt-2 p-2 bg-blue-500/10 border border-blue-500/20 rounded text-sm text-blue-400">
                                                                💡 {check.recommendation}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Summary Actions */}
            <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">📋 Tóm tắt các vấn đề cần xử lý ngay</h3>
                <div className="space-y-2">
                    {pageAudits.flatMap(page =>
                        page.checks
                            .filter(c => c.status === "fail" && c.priority === "high")
                            .map(c => (
                                <div key={`${page.path}-${c.id}`} className="flex items-center gap-3 text-sm">
                                    <XCircle size={14} className="text-red-500 flex-shrink-0" />
                                    <span className="text-slate-400">{page.path}</span>
                                    <span className="text-white">{c.name}: {c.recommendation || c.value}</span>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>
    );
}
