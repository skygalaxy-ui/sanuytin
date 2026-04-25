"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Save, Loader2, Monitor, ArrowLeft, Image as ImageIcon, Type, Sparkles } from "lucide-react";
import Link from "next/link";
import MediaLibrary from "@/components/admin/MediaLibrary";

// Full configuration of editable sections
const THEME_SECTIONS = [
    {
        id: "hero",
        title: "Khối Hero Banner",
        icon: Sparkles,
        color: "text-yellow-400",
        bg: "bg-gray-900",
        images: [{ key: "hero_bg", label: "Ảnh nền (Background)", width: "aspect-video" }],
        fields: [
            { key: "hero_title", label: "Tiêu đề chính", type: "text" },
            { key: "hero_subtitle", label: "Đoạn giới thiệu", type: "textarea" },
            { key: "hero_button_primary", label: "Nút chính", type: "text" },
            { key: "hero_button_secondary", label: "Nút phụ", type: "text" },
        ]
    },
    {
        id: "feature",
        title: "Khối Tại Sao Chọn Chúng Tôi",
        icon: Sparkles,
        color: "text-teal-400",
        bg: "bg-teal-900",
        images: [{ key: "feature_main", label: "Ảnh Feature", width: "aspect-video" }],
        fields: [
            { key: "feature_title", label: "Tiêu đề", type: "text" },
            { key: "feature_subtitle", label: "Mô tả", type: "textarea" },
        ]
    },
    {
        id: "about",
        title: "Khối Giới Thiệu (About)",
        icon: Type,
        color: "text-blue-400",
        bg: "bg-blue-900",
        images: [],
        fields: [
            { key: "about_title", label: "Tiêu đề giới thiệu", type: "text" },
            { key: "about_description", label: "Nội dung giới thiệu", type: "textarea" },
        ]
    },
    {
        id: "services",
        title: "Khối Dịch Vụ",
        icon: Sparkles,
        color: "text-purple-400",
        bg: "bg-purple-900",
        images: [
            { key: "service_teambuilding", label: "Ảnh Teambuilding", width: "aspect-square" },
            { key: "service_company_trip", label: "Ảnh Company Trip", width: "aspect-square" },
            { key: "service_year_end_party", label: "Ảnh Year End Party", width: "aspect-square" },
            { key: "service_workshop", label: "Ảnh Workshop", width: "aspect-square" },
            { key: "service_sports_day", label: "Ảnh Sports Day", width: "aspect-square" },
            { key: "service_family_day", label: "Ảnh Family Day", width: "aspect-square" },
        ],
        fields: [
            { key: "service_title", label: "Tiêu đề", type: "text" },
            { key: "service_subtitle", label: "Mô tả", type: "textarea" },
        ]
    },
    {
        id: "portfolio",
        title: "Khối Dự Án (Portfolio)",
        icon: ImageIcon,
        color: "text-orange-400",
        bg: "bg-orange-900",
        images: [
            { key: "portfolio_1", label: "Ảnh Dự án 1", width: "aspect-video" },
            { key: "portfolio_2", label: "Ảnh Dự án 2", width: "aspect-video" },
            { key: "portfolio_3", label: "Ảnh Dự án 3", width: "aspect-video" },
            { key: "portfolio_4", label: "Ảnh Dự án 4", width: "aspect-video" },
            { key: "portfolio_5", label: "Ảnh Dự án 5", width: "aspect-video" },
            { key: "portfolio_6", label: "Ảnh Dự án 6", width: "aspect-video" },
        ],
        fields: [
            { key: "portfolio_1_title", label: "Tên Dự án 1", type: "text" },
            { key: "portfolio_1_client", label: "Khách hàng 1", type: "text" },
            { key: "portfolio_2_title", label: "Tên Dự án 2", type: "text" },
            { key: "portfolio_2_client", label: "Khách hàng 2", type: "text" },
            { key: "portfolio_3_title", label: "Tên Dự án 3", type: "text" },
            { key: "portfolio_3_client", label: "Khách hàng 3", type: "text" },
            { key: "portfolio_4_title", label: "Tên Dự án 4", type: "text" },
            { key: "portfolio_4_client", label: "Khách hàng 4", type: "text" },
            { key: "portfolio_5_title", label: "Tên Dự án 5", type: "text" },
            { key: "portfolio_5_client", label: "Khách hàng 5", type: "text" },
            { key: "portfolio_6_title", label: "Tên Dự án 6", type: "text" },
            { key: "portfolio_6_client", label: "Khách hàng 6", type: "text" },
        ]
    },
    {
        id: "sponsor",
        title: "Khối Đối Tác (Sponsor)",
        icon: ImageIcon,
        color: "text-emerald-400",
        bg: "bg-emerald-900",
        images: [{ key: "sponsor_bg", label: "Ảnh nền Đối tác", width: "aspect-video" }],
        fields: []
    },
    {
        id: "footer",
        title: "Khối Chân Trang (Footer)",
        icon: Type,
        color: "text-gray-400",
        bg: "bg-gray-900",
        images: [],
        fields: [
            { key: "footer_company_name", label: "Tên thương hiệu", type: "text" },
            { key: "footer_description", label: "Mô tả ngắn", type: "textarea" },
            { key: "footer_hotline", label: "Hotline hiển thị", type: "text" },
            { key: "footer_email", label: "Email hiển thị", type: "text" },
            { key: "footer_copyright", label: "Dòng bản quyền", type: "text" },
            { key: "footer_facebook", label: "Link Facebook", type: "text" },
            { key: "footer_instagram", label: "Link Instagram", type: "text" },
            { key: "footer_youtube", label: "Link YouTube", type: "text" },
            { key: "footer_tiktok", label: "Link TikTok", type: "text" },
        ]
    }
];

export default function ThemeEditorPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState<Record<string, string>>({});
    const [images, setImages] = useState<Record<string, string>>({});
    const [expandedSection, setExpandedSection] = useState<string>("hero"); // Only one open at a time
    
    // For media library
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);
    const [activeImageKey, setActiveImageKey] = useState<string | null>(null);

    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Load initial data
    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const { data } = await supabase.from("site_settings").select("*").in("key", ["page_content", "page_images"]);
            
            let loadedContent = {};
            let loadedImages = {};

            if (data) {
                const cRow = data.find((r) => r.key === "page_content");
                if (cRow?.value) {
                    loadedContent = typeof cRow.value === "string" ? JSON.parse(cRow.value) : cRow.value;
                    setContent(loadedContent);
                }

                const iRow = data.find((r) => r.key === "page_images");
                if (iRow?.value) {
                    loadedImages = typeof iRow.value === "string" ? JSON.parse(iRow.value) : iRow.value;
                    setImages(loadedImages);
                }
            }
            setLoading(false);
        }
        loadData();
    }, []);

    // Send data to iframe on every change
    useEffect(() => {
        if (!loading && iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
                type: 'UPDATE_THEME_PREVIEW',
                content,
                images
            }, '*');
        }
    }, [content, images, loading]);

    const handleSave = async () => {
        setSaving(true);
        await supabase.from("site_settings").upsert([
            { key: "page_content", value: content, updated_at: new Date().toISOString() },
            { key: "page_images", value: images, updated_at: new Date().toISOString() }
        ], { onConflict: "key" });
        setSaving(false);
        alert("Lưu thành công!");
    };

    const handleUpdateContent = (key: string, value: string) => {
        setContent(prev => ({ ...prev, [key]: value }));
    };

    const handleUpdateImage = (key: string, url: string) => {
        setImages(prev => ({ ...prev, [key]: url }));
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50 min-h-screen">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    <p className="text-sm font-medium text-gray-500">Đang tải trình sửa giao diện...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-white overflow-hidden">
            {/* Left Sidebar - Editor Tools */}
            <div className="w-[380px] flex-shrink-0 border-r border-gray-200 bg-gray-50 flex flex-col h-full shadow-sm z-10 relative">
                
                {/* Header Navbar */}
                <div className="h-16 border-b border-gray-200 bg-white px-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
                    <div className="flex items-center gap-2">
                        <Link href="/admin" className="p-2 -ml-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                            <ArrowLeft size={18} />
                        </Link>
                        <div>
                            <h1 className="text-sm font-bold text-gray-900">Sửa Trang Chủ</h1>
                            <p className="text-[11px] text-gray-500 flex items-center gap-1">
                                <Monitor size={10} /> Live Preview
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={handleSave} 
                        disabled={saving}
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 flex items-center gap-2 shadow-sm transition-all"
                    >
                        {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                        Lưu
                    </button>
                </div>

                {/* Editor Forms Scroll Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    
                    {THEME_SECTIONS.map((section) => {
                        const isExpanded = expandedSection === section.id;
                        return (
                            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-sm">
                                <button 
                                    onClick={() => setExpandedSection(isExpanded ? "" : section.id)}
                                    className={`w-full px-5 py-3.5 font-semibold flex items-center gap-2 transition-colors ${isExpanded ? `${section.bg} text-white` : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <section.icon size={16} className={isExpanded ? section.color : 'text-gray-400'} />
                                    {section.title}
                                </button>
                                
                                {isExpanded && (
                                    <div className="p-5 space-y-6">
                                        {/* Images */}
                                        {section.images.length > 0 && (
                                            <div className="space-y-4">
                                                {section.images.map((imgConf) => (
                                                    <div key={imgConf.key}>
                                                        <label className="flex items-center gap-2 font-medium text-gray-700 mb-2 text-xs">
                                                            <ImageIcon size={14} /> {imgConf.label}
                                                        </label>
                                                        {images[imgConf.key] ? (
                                                            <div className={`relative ${imgConf.width} rounded-lg overflow-hidden border border-gray-200 group mb-2 bg-gray-100`}>
                                                                <img src={images[imgConf.key]} alt={imgConf.label} className="w-full h-full object-cover" />
                                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                                                    <button 
                                                                        onClick={() => { setActiveImageKey(imgConf.key); setShowMediaLibrary(true); }}
                                                                        className="bg-white text-gray-900 px-3 py-1.5 rounded-md font-medium shadow-lg hover:scale-105 transition-transform text-xs"
                                                                    >
                                                                        Đổi ảnh
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <button 
                                                                onClick={() => { setActiveImageKey(imgConf.key); setShowMediaLibrary(true); }}
                                                                className={`w-full ${imgConf.width} rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-colors mb-2`}
                                                            >
                                                                <ImageIcon size={20} />
                                                                <span className="font-medium text-xs">Chọn ảnh</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <hr className="border-gray-100" />
                                            </div>
                                        )}

                                        {/* Text Inputs */}
                                        <div className="space-y-4">
                                            {section.fields.map((field) => (
                                                <div key={field.key}>
                                                    <label className="flex items-center gap-2 font-medium text-gray-700 mb-2 text-xs">
                                                        <Type size={14} /> {field.label}
                                                    </label>
                                                    {field.type === "textarea" ? (
                                                        <textarea
                                                            value={content[field.key] || ""}
                                                            onChange={(e) => handleUpdateContent(field.key, e.target.value)}
                                                            rows={3}
                                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-[13px] resize-none"
                                                            placeholder="Nhập nội dung..."
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            value={content[field.key] || ""}
                                                            onChange={(e) => handleUpdateContent(field.key, e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-[13px]"
                                                            placeholder="Nhập nội dung..."
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    <div className="text-center pb-8 pt-4">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Sự Kiện Toàn Quốc</p>
                    </div>

                </div>
            </div>

            {/* Right Side - Live Preview Iframe */}
            <div className="flex-1 bg-gray-200 relative">
                {/* Visual loading indicator while iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
                
                <iframe
                    ref={iframeRef}
                    src="/"
                    className="w-full h-full border-none relative z-10 shadow-[-10px_0_20px_rgba(0,0,0,0.05)] bg-white"
                    title="Live Preview"
                    onLoad={() => {
                        // Resend state when iframe finishes loading
                        if (iframeRef.current?.contentWindow) {
                            iframeRef.current.contentWindow.postMessage({
                                type: 'UPDATE_THEME_PREVIEW',
                                content,
                                images
                            }, '*');
                        }
                    }}
                />
            </div>

            {/* Media Picker Modal */}
            <MediaLibrary
                isOpen={showMediaLibrary}
                onClose={() => { setShowMediaLibrary(false); setActiveImageKey(null); }}
                onSelect={(url) => {
                    if (activeImageKey) handleUpdateImage(activeImageKey, url);
                    setShowMediaLibrary(false);
                    setActiveImageKey(null);
                }}
            />
        </div>
    );
}
