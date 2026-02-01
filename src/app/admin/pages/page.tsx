"use client";

import { useState } from "react";
import {
    Save, FileText, Home, Shield, HelpCircle, ChevronDown, ChevronUp, Eye,
    BarChart3, Layers, BookOpen, Gift, Wrench, Phone, Newspaper
} from "lucide-react";

interface Field {
    key: string;
    label: string;
    type: "text" | "textarea" | "number" | "url" | "image";
    placeholder?: string;
    description?: string;
}

interface PageSection {
    id: string;
    pagePath: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    fields: Field[];
}

const allPages: PageSection[] = [
    // === TRANG CHỦ ===
    {
        id: "home-hero",
        pagePath: "/",
        name: "Trang chủ - Hero Banner",
        icon: <Home size={18} />,
        description: "Banner chính đầu trang",
        fields: [
            { key: "badge", label: "Badge text", type: "text", placeholder: "🏆 TOP 10 SÀN FOREX UY TÍN 2026" },
            { key: "title", label: "Tiêu đề chính", type: "text", placeholder: "Chọn sàn giao dịch phù hợp với bạn" },
            { key: "subtitle", label: "Mô tả ngắn", type: "textarea", placeholder: "Đánh giá khách quan, minh bạch..." },
            { key: "ctaText", label: "Nút CTA", type: "text", placeholder: "Xem bảng xếp hạng" },
            { key: "ctaLink", label: "Link CTA", type: "url", placeholder: "/danh-gia-san" },
        ]
    },
    {
        id: "home-features",
        pagePath: "/",
        name: "Trang chủ - Vì sao chọn chúng tôi",
        icon: <Shield size={18} />,
        description: "Section giới thiệu tính năng",
        fields: [
            { key: "title", label: "Tiêu đề section", type: "text", placeholder: "Vì sao chọn Sàn Uy Tín?" },
            { key: "description", label: "Mô tả", type: "textarea" },
            { key: "feature1Title", label: "Tính năng 1 - Tiêu đề", type: "text" },
            { key: "feature1Desc", label: "Tính năng 1 - Mô tả", type: "textarea" },
            { key: "feature2Title", label: "Tính năng 2 - Tiêu đề", type: "text" },
            { key: "feature2Desc", label: "Tính năng 2 - Mô tả", type: "textarea" },
            { key: "feature3Title", label: "Tính năng 3 - Tiêu đề", type: "text" },
            { key: "feature3Desc", label: "Tính năng 3 - Mô tả", type: "textarea" },
        ]
    },
    {
        id: "home-faq",
        pagePath: "/",
        name: "Trang chủ - FAQ",
        icon: <HelpCircle size={18} />,
        description: "Câu hỏi thường gặp",
        fields: [
            { key: "title", label: "Tiêu đề section", type: "text", placeholder: "Câu hỏi thường gặp" },
            { key: "q1", label: "Câu hỏi 1", type: "text" },
            { key: "a1", label: "Trả lời 1", type: "textarea" },
            { key: "q2", label: "Câu hỏi 2", type: "text" },
            { key: "a2", label: "Trả lời 2", type: "textarea" },
            { key: "q3", label: "Câu hỏi 3", type: "text" },
            { key: "a3", label: "Trả lời 3", type: "textarea" },
        ]
    },

    // === TRANG ĐÁNH GIÁ SÀN ===
    {
        id: "danh-gia-san",
        pagePath: "/danh-gia-san",
        name: "Trang Đánh giá sàn",
        icon: <BarChart3 size={18} />,
        description: "Bảng xếp hạng các sàn Forex",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text", placeholder: "Top 10 Sàn Forex Uy Tín..." },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Bảng xếp hạng Sàn Forex" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "trustStat1", label: "Thống kê 1 (vd: 10+ sàn)", type: "text" },
            { key: "trustStat2", label: "Thống kê 2 (vd: 5 năm)", type: "text" },
            { key: "trustStat3", label: "Thống kê 3 (vd: 100K+ users)", type: "text" },
        ]
    },

    // === TRANG SO SÁNH ===
    {
        id: "so-sanh",
        pagePath: "/so-sanh",
        name: "Trang So sánh sàn",
        icon: <Layers size={18} />,
        description: "So sánh chi tiết các sàn Forex",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "So sánh chi tiết các sàn Forex" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },

    // === TRANG KIẾN THỨC FOREX ===
    {
        id: "kien-thuc-forex",
        pagePath: "/kien-thuc-forex",
        name: "Trang Kiến thức Forex",
        icon: <BookOpen size={18} />,
        description: "Trang tổng hợp kiến thức trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Kiến thức Forex từ A-Z" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "introText", label: "Đoạn giới thiệu", type: "textarea" },
        ]
    },

    // === TRANG THUẬT NGỮ ===
    {
        id: "thuat-ngu",
        pagePath: "/thuat-ngu",
        name: "Trang Thuật ngữ Forex",
        icon: <BookOpen size={18} />,
        description: "Từ điển thuật ngữ trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Thuật ngữ Forex" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },

    // === TRANG TIN TỨC ===
    {
        id: "tin-tuc",
        pagePath: "/tin-tuc",
        name: "Trang Tin tức",
        icon: <Newspaper size={18} />,
        description: "Tin tức thị trường Forex",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Tin tức Forex mới nhất" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },

    // === TRANG KHUYẾN MÃI ===
    {
        id: "khuyen-mai",
        pagePath: "/khuyen-mai",
        name: "Trang Khuyến mãi",
        icon: <Gift size={18} />,
        description: "Các chương trình khuyến mãi",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Khuyến mãi từ các sàn Forex" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "highlightText", label: "Text nổi bật (badge)", type: "text", placeholder: "🎁 HOT" },
        ]
    },

    // === TRANG CÔNG CỤ ===
    {
        id: "cong-cu",
        pagePath: "/cong-cu",
        name: "Trang Công cụ Trading",
        icon: <Wrench size={18} />,
        description: "Các công cụ hỗ trợ trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Công cụ Trading" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "tool1Name", label: "Công cụ 1 - Tên", type: "text" },
            { key: "tool1Desc", label: "Công cụ 1 - Mô tả", type: "textarea" },
            { key: "tool2Name", label: "Công cụ 2 - Tên", type: "text" },
            { key: "tool2Desc", label: "Công cụ 2 - Mô tả", type: "textarea" },
        ]
    },

    // === TRANG LIÊN HỆ ===
    {
        id: "lien-he",
        pagePath: "/lien-he",
        name: "Trang Liên hệ",
        icon: <Phone size={18} />,
        description: "Thông tin liên hệ",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text", placeholder: "Liên hệ với chúng tôi" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "email", label: "Email", type: "text" },
            { key: "address", label: "Địa chỉ", type: "textarea" },
            { key: "workingHours", label: "Giờ làm việc", type: "text" },
        ]
    },

    // === FOOTER ===
    {
        id: "footer",
        pagePath: "global",
        name: "Footer (Toàn site)",
        icon: <FileText size={18} />,
        description: "Chân trang website",
        fields: [
            { key: "description", label: "Mô tả website", type: "textarea" },
            { key: "email", label: "Email liên hệ", type: "text" },
            { key: "twitter", label: "Twitter URL", type: "url" },
            { key: "pinterest", label: "Pinterest URL", type: "url" },
            { key: "facebook", label: "Facebook URL", type: "url" },
            { key: "telegram", label: "Telegram URL", type: "url" },
            { key: "disclaimer", label: "Cảnh báo rủi ro", type: "textarea" },
            { key: "copyright", label: "Copyright text", type: "text", placeholder: "© 2026 Sàn Uy Tín" },
        ]
    },
];

// Group pages by path
const groupedPages = allPages.reduce((acc, page) => {
    const group = page.pagePath === "global" ? "Toàn site" : page.pagePath;
    if (!acc[group]) acc[group] = [];
    acc[group].push(page);
    return acc;
}, {} as Record<string, PageSection[]>);

export default function PagesContentPage() {
    const [content, setContent] = useState<Record<string, Record<string, string>>>({});
    const [expandedSections, setExpandedSections] = useState<string[]>(["home-hero"]);
    const [savedMessage, setSavedMessage] = useState("");
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const updateField = (sectionId: string, fieldKey: string, value: string) => {
        setContent(prev => ({
            ...prev,
            [sectionId]: {
                ...prev[sectionId],
                [fieldKey]: value
            }
        }));
    };

    const handleSave = () => {
        console.log("Saving content:", content);
        setSavedMessage("Đã lưu nội dung thành công!");
        setTimeout(() => setSavedMessage(""), 3000);
        alert("Đã lưu nội dung! (Demo mode - chưa kết nối Supabase)");
    };

    const filteredPages = activeFilter === "all"
        ? allPages
        : allPages.filter(p => p.pagePath === activeFilter || (activeFilter === "global" && p.pagePath === "global"));

    const uniquePaths = [...new Set(allPages.map(p => p.pagePath))];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <FileText className="text-primary" size={28} />
                        Quản lý Nội dung Trang
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Chỉnh sửa nội dung tất cả các trang mà không cần sửa code</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => window.open("/", "_blank")}
                        className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors"
                    >
                        <Eye size={18} />
                        Xem trước
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-500/90 hover:to-emerald-600/90 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                        <Save size={18} />
                        Lưu tất cả
                    </button>
                </div>
            </div>

            {savedMessage && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                    {savedMessage}
                </div>
            )}

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === "all" ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25" : "bg-slate-800/80 text-slate-400 hover:bg-slate-700"}`}
                >
                    Tất cả ({allPages.length})
                </button>
                {uniquePaths.map(path => (
                    <button
                        key={path}
                        onClick={() => setActiveFilter(path)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === path ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25" : "bg-slate-800/80 text-slate-400 hover:bg-slate-700"}`}
                    >
                        {path === "global" ? "Footer" : path}
                    </button>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/30 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">{allPages.length}</p>
                    <p className="text-slate-400 text-sm">Sections</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-purple-400">{uniquePaths.length}</p>
                    <p className="text-slate-400 text-sm">Trang</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-400">{allPages.reduce((acc, p) => acc + p.fields.length, 0)}</p>
                    <p className="text-slate-400 text-sm">Trường có thể sửa</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-400">{Object.keys(content).length}</p>
                    <p className="text-slate-400 text-sm">Đã chỉnh sửa</p>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {filteredPages.map((section) => (
                    <div
                        key={section.id}
                        className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
                    >
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between p-5 hover:bg-slate-800/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {section.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-white">{section.name}</h3>
                                    <p className="text-slate-500 text-sm">{section.description} • {section.fields.length} trường</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs px-2.5 py-1 bg-slate-800 text-slate-400 rounded-lg font-mono">
                                    {section.pagePath}
                                </span>
                                {expandedSections.includes(section.id) ? (
                                    <ChevronUp size={20} className="text-slate-400" />
                                ) : (
                                    <ChevronDown size={20} className="text-slate-400" />
                                )}
                            </div>
                        </button>

                        {/* Section Content */}
                        {expandedSections.includes(section.id) && (
                            <div className="px-5 pb-5 space-y-4 border-t border-slate-800 pt-4">
                                {section.fields.map((field) => (
                                    <div key={field.key}>
                                        <label className="block text-sm text-slate-400 mb-1.5">
                                            {field.label}
                                            {field.label.includes("SEO") && (
                                                <span className="ml-2 text-xs text-primary">Quan trọng cho SEO</span>
                                            )}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                rows={3}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                                value={content[section.id]?.[field.key] || ""}
                                                onChange={(e) => updateField(section.id, field.key, e.target.value)}
                                            />
                                        ) : (
                                            <input
                                                type={field.type === "url" ? "url" : field.type === "number" ? "number" : "text"}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                                value={content[section.id]?.[field.key] || ""}
                                                onChange={(e) => updateField(section.id, field.key, e.target.value)}
                                            />
                                        )}
                                        {field.description && (
                                            <p className="text-xs text-slate-500 mt-1">{field.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Save Button */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-500/90 hover:to-emerald-600/90 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                    <Save size={18} />
                    Lưu tất cả thay đổi
                </button>
            </div>
        </div>
    );
}
