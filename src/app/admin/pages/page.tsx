"use client";

import { useState, useEffect } from "react";
import {
    Save, FileText, Home, Shield, HelpCircle, ChevronDown, ChevronUp, Eye,
    BarChart3, Layers, BookOpen, Gift, Wrench, Phone, Newspaper, Loader2, Check, AlertCircle
} from "lucide-react";
import { getAllPageContent, savePageContent, type PageContent } from "@/lib/supabase";

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
        ]
    },
    {
        id: "so-sanh",
        pagePath: "/so-sanh",
        name: "Trang So sánh sàn",
        icon: <Layers size={18} />,
        description: "So sánh chi tiết các sàn Forex",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "kien-thuc-forex",
        pagePath: "/kien-thuc-forex",
        name: "Trang Kiến thức Forex",
        icon: <BookOpen size={18} />,
        description: "Trang tổng hợp kiến thức trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "thuat-ngu",
        pagePath: "/thuat-ngu",
        name: "Trang Thuật ngữ Forex",
        icon: <BookOpen size={18} />,
        description: "Từ điển thuật ngữ trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "tin-tuc",
        pagePath: "/tin-tuc",
        name: "Trang Tin tức",
        icon: <Newspaper size={18} />,
        description: "Tin tức thị trường Forex",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "khuyen-mai",
        pagePath: "/khuyen-mai",
        name: "Trang Khuyến mãi",
        icon: <Gift size={18} />,
        description: "Các chương trình khuyến mãi",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "cong-cu",
        pagePath: "/cong-cu",
        name: "Trang Công cụ Trading",
        icon: <Wrench size={18} />,
        description: "Các công cụ hỗ trợ trading",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
        ]
    },
    {
        id: "lien-he",
        pagePath: "/lien-he",
        name: "Trang Liên hệ",
        icon: <Phone size={18} />,
        description: "Thông tin liên hệ",
        fields: [
            { key: "metaTitle", label: "Meta Title (SEO)", type: "text" },
            { key: "metaDescription", label: "Meta Description (SEO)", type: "textarea" },
            { key: "pageTitle", label: "Tiêu đề trang", type: "text" },
            { key: "pageSubtitle", label: "Mô tả trang", type: "textarea" },
            { key: "email", label: "Email", type: "text" },
            { key: "address", label: "Địa chỉ", type: "textarea" },
            { key: "workingHours", label: "Giờ làm việc", type: "text" },
        ]
    },
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

export default function PagesContentPage() {
    const [content, setContent] = useState<Record<string, Record<string, string>>>({});
    const [expandedSections, setExpandedSections] = useState<string[]>(["home-hero"]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [savingSection, setSavingSection] = useState<string | null>(null);
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

    // Load data from Supabase on mount
    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        setLoading(true);
        const data = await getAllPageContent();
        const contentMap: Record<string, Record<string, string>> = {};
        data.forEach(item => {
            contentMap[item.section_id] = item.data;
        });
        setContent(contentMap);
        setLoading(false);
    };

    const showToast = (type: "success" | "error", message: string) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 3000);
    };

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
        setDirtyFields(prev => new Set(prev).add(sectionId));
    };

    // Save a single section
    const handleSaveSection = async (section: PageSection) => {
        setSavingSection(section.id);
        const sectionData = content[section.id] || {};
        const success = await savePageContent(section.id, section.pagePath, sectionData);
        if (success) {
            showToast("success", `Đã lưu "${section.name}"`);
            setDirtyFields(prev => {
                const next = new Set(prev);
                next.delete(section.id);
                return next;
            });
        } else {
            showToast("error", `Lỗi khi lưu "${section.name}"`);
        }
        setSavingSection(null);
    };

    // Save ALL sections
    const handleSaveAll = async () => {
        setSaving(true);
        let successCount = 0;
        let errorCount = 0;

        for (const section of allPages) {
            const sectionData = content[section.id] || {};
            const success = await savePageContent(section.id, section.pagePath, sectionData);
            if (success) successCount++;
            else errorCount++;
        }

        if (errorCount === 0) {
            showToast("success", `Đã lưu tất cả ${successCount} sections!`);
            setDirtyFields(new Set());
        } else {
            showToast("error", `Lưu được ${successCount}, lỗi ${errorCount} sections`);
        }
        setSaving(false);
    };

    const filteredPages = activeFilter === "all"
        ? allPages
        : allPages.filter(p => p.pagePath === activeFilter || (activeFilter === "global" && p.pagePath === "global"));

    const uniquePaths = [...new Set(allPages.map(p => p.pagePath))];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <Loader2 className="animate-spin mx-auto mb-3 text-blue-500" size={32} />
                    <p className="text-gray-500">Đang tải nội dung...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium transition-all animate-in slide-in-from-right ${toast.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}>
                    {toast.type === "success" ? <Check size={16} /> : <AlertCircle size={16} />}
                    {toast.message}
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <FileText className="text-blue-600" size={24} />
                        Quản lý Nội dung Trang
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Chỉnh sửa nội dung → Lưu → Website cập nhật sau khi rebuild
                        {dirtyFields.size > 0 && (
                            <span className="ml-2 text-orange-500 font-medium">• {dirtyFields.size} mục chưa lưu</span>
                        )}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => window.open("/", "_blank")}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors text-sm"
                    >
                        <Eye size={16} />
                        Xem website
                    </button>
                    <button
                        onClick={handleSaveAll}
                        disabled={saving}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium rounded-xl transition-all text-sm"
                    >
                        {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        {saving ? "Đang lưu..." : "Lưu tất cả"}
                    </button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                    Tất cả ({allPages.length})
                </button>
                {uniquePaths.map(path => (
                    <button
                        key={path}
                        onClick={() => setActiveFilter(path)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === path ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                        {path === "global" ? "Footer" : path}
                    </button>
                ))}
            </div>

            {/* Sections */}
            <div className="space-y-3">
                {filteredPages.map((section) => (
                    <div
                        key={section.id}
                        className={`bg-white border rounded-xl overflow-hidden transition-colors ${dirtyFields.has(section.id) ? "border-orange-300" : "border-gray-200"
                            }`}
                    >
                        {/* Section Header */}
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    {section.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-900 text-sm">{section.name}</h3>
                                    <p className="text-gray-400 text-xs">{section.description} • {section.fields.length} trường</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {dirtyFields.has(section.id) && (
                                    <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                                        Chưa lưu
                                    </span>
                                )}
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded font-mono">
                                    {section.pagePath}
                                </span>
                                {expandedSections.includes(section.id) ? (
                                    <ChevronUp size={18} className="text-gray-400" />
                                ) : (
                                    <ChevronDown size={18} className="text-gray-400" />
                                )}
                            </div>
                        </button>

                        {/* Section Content */}
                        {expandedSections.includes(section.id) && (
                            <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
                                {section.fields.map((field) => (
                                    <div key={field.key}>
                                        <label className="block text-xs font-medium text-gray-600 mb-1.5">
                                            {field.label}
                                            {field.label.includes("SEO") && (
                                                <span className="ml-1.5 text-blue-500 text-[10px]">SEO</span>
                                            )}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                rows={3}
                                                placeholder={field.placeholder}
                                                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                                                value={content[section.id]?.[field.key] || ""}
                                                onChange={(e) => updateField(section.id, field.key, e.target.value)}
                                            />
                                        ) : (
                                            <input
                                                type={field.type === "url" ? "url" : field.type === "number" ? "number" : "text"}
                                                placeholder={field.placeholder}
                                                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                                value={content[section.id]?.[field.key] || ""}
                                                onChange={(e) => updateField(section.id, field.key, e.target.value)}
                                            />
                                        )}
                                    </div>
                                ))}

                                {/* Per-section save */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        onClick={() => handleSaveSection(section)}
                                        disabled={savingSection === section.id}
                                        className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium rounded-lg transition-all"
                                    >
                                        {savingSection === section.id ? (
                                            <Loader2 size={14} className="animate-spin" />
                                        ) : (
                                            <Save size={14} />
                                        )}
                                        Lưu section này
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
