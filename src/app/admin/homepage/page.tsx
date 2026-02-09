"use client";

import { useState, useEffect, useRef } from "react";
import { Home, RefreshCw, Upload, ImageIcon, Loader2, Eye, ArrowUpDown, Check, Lightbulb, ShieldCheck, ImageOff } from "lucide-react";
import { getBrokers, updateBroker, uploadImage, Broker } from "@/lib/supabase";

function BrokerImagePreview({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false);
    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-1">
                <ImageOff size={20} />
                <span className="text-xs">{alt}</span>
            </div>
        );
    }
    return <img src={src} alt={alt} className="w-full h-full object-contain" onError={() => setError(true)} />;
}

function LogoPreviewCard({ broker }: { broker?: Broker }) {
    if (!broker) return <div className="aspect-square bg-slate-800 rounded-xl" />;
    return (
        <div className="aspect-square bg-slate-800 rounded-xl p-3 border border-slate-700 flex items-center justify-center">
            {broker.logo ? (
                <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
            ) : (
                <span className="text-gray-500 text-xs">{broker.name}</span>
            )}
        </div>
    );
}

export default function HomepageManagement() {
    const [brokers, setBrokers] = useState<Broker[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<"advice" | "protect">("advice");
    const [successMessage, setSuccessMessage] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedBrokerId, setSelectedBrokerId] = useState<number | null>(null);

    useEffect(() => {
        loadBrokers();
    }, []);

    const loadBrokers = async () => {
        setLoading(true);
        const data = await getBrokers();
        setBrokers(data);
        setLoading(false);
    };

    const adviceBrokers = brokers.slice(0, 6);
    const protectBrokers = brokers.slice(3, 7).length >= 4 ? brokers.slice(3, 7) : brokers.slice(-4);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, brokerId: number) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) { alert("Vui lòng chọn file ảnh!"); return; }
        if (file.size > 2 * 1024 * 1024) { alert("Kích thước ảnh tối đa 2MB!"); return; }

        setUploading(brokerId);
        try {
            const url = await uploadImage(file);
            if (url) {
                const updated = await updateBroker(brokerId, { logo: url });
                if (updated) {
                    setSuccessMessage(`Đã cập nhật logo cho ${updated.name}!`);
                    setTimeout(() => setSuccessMessage(""), 3000);
                    await loadBrokers();
                }
            } else {
                alert("Upload thất bại!");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Có lỗi xảy ra khi upload ảnh!");
        }
        setUploading(null);
        setSelectedBrokerId(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleUploadClick = (brokerId: number) => {
        setSelectedBrokerId(brokerId);
        setTimeout(() => fileInputRef.current?.click(), 50);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
                <RefreshCw className="animate-spin text-orange-500" size={40} />
                <p className="text-gray-500">Đang tải dữ liệu...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <input type="file" ref={fileInputRef} accept="image/*" onChange={(e) => selectedBrokerId && handleImageUpload(e, selectedBrokerId)} className="hidden" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Home className="text-orange-500" size={28} />
                        Quản lý Trang Chủ
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Quản lý section &quot;Kinh nghiệm giao dịch&quot; trên trang chủ</p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={loadBrokers} className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" title="Tải lại">
                        <RefreshCw size={18} />
                    </button>
                    <a href="/" target="_blank" className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors">
                        <Eye size={18} />
                        Xem trang chủ
                    </a>
                </div>
            </div>

            {successMessage && (
                <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl">
                    <Check size={18} />
                    <span className="font-medium">{successMessage}</span>
                </div>
            )}

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-800 text-sm">
                    <strong>💡 Hướng dẫn:</strong> Section trên trang chủ tự động hiển thị logo từ danh sách broker (theo rank).
                    Tab &quot;Lời khuyên&quot; hiển thị <strong>Top 6</strong>, tab &quot;Bảo vệ vốn&quot; hiển thị <strong>rank 4-7</strong>.
                    Thay đổi ảnh tại đây hoặc trong <a href="/admin/brokers" className="underline font-medium">Quản lý Sàn</a>.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
                <button onClick={() => setActiveTab("advice")} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === "advice" ? "bg-orange-50 text-orange-600 border border-orange-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent"}`}>
                    <Lightbulb size={16} />
                    Tab: Lời khuyên (Top 6)
                </button>
                <button onClick={() => setActiveTab("protect")} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeTab === "protect" ? "bg-orange-50 text-orange-600 border border-orange-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent"}`}>
                    <ShieldCheck size={16} />
                    Tab: Bảo vệ vốn (Rank 4-7)
                </button>
            </div>

            {/* Broker Cards */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ImageIcon size={20} className="text-orange-500" />
                    {activeTab === "advice" ? "Logo Broker - Tab \"Lời khuyên\"" : "Logo Broker - Tab \"Bảo vệ vốn\""}
                </h2>
                <div className={`grid ${activeTab === "advice" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "grid-cols-2 md:grid-cols-4"} gap-4`}>
                    {(activeTab === "advice" ? adviceBrokers : protectBrokers).map((broker, index) => (
                        <div key={broker.id} className="group relative">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-all">
                                <div className="aspect-square bg-white rounded-lg border border-gray-200 mb-3 flex items-center justify-center overflow-hidden p-2">
                                    {broker.logo ? <BrokerImagePreview src={broker.logo} alt={broker.name} /> : (
                                        <div className="text-gray-300 flex flex-col items-center gap-1">
                                            <ImageOff size={24} />
                                            <span className="text-xs">Chưa có ảnh</span>
                                        </div>
                                    )}
                                </div>
                                <div className="text-center mb-3">
                                    <p className="font-medium text-gray-900 text-sm">{broker.name}</p>
                                    <p className="text-xs text-gray-400">Rank #{broker.rank}</p>
                                </div>
                                <button onClick={() => handleUploadClick(broker.id)} disabled={uploading === broker.id} className="w-full px-3 py-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg text-orange-600 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50">
                                    {uploading === broker.id ? (<><Loader2 size={14} className="animate-spin" /> Đang tải...</>) : (<><Upload size={14} /> Thay ảnh</>)}
                                </button>
                            </div>
                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye size={20} className="text-orange-500" />
                    Xem trước trên trang chủ
                </h2>
                <div className="bg-slate-900 rounded-xl p-6">
                    <div className="text-center mb-6">
                        <h3 className="text-white text-lg font-bold mb-2">Kinh nghiệm giao dịch trên sàn Forex</h3>
                    </div>
                    {activeTab === "advice" ? (
                        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                            <div className="col-start-3"><LogoPreviewCard broker={adviceBrokers[0]} /></div>
                            <div className="col-start-2"><LogoPreviewCard broker={adviceBrokers[1]} /></div>
                            <div><LogoPreviewCard broker={adviceBrokers[2]} /></div>
                            <div><LogoPreviewCard broker={adviceBrokers[3]} /></div>
                            <div><LogoPreviewCard broker={adviceBrokers[4]} /></div>
                            <div><LogoPreviewCard broker={adviceBrokers[5]} /></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                            {protectBrokers.map((broker) => <LogoPreviewCard key={broker.id} broker={broker} />)}
                        </div>
                    )}
                </div>
            </div>

            {/* All Brokers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ArrowUpDown size={20} className="text-orange-500" />
                    Tất cả Broker (rank quyết định vị trí hiển thị)
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                    Thay đổi rank trong <a href="/admin/brokers" className="text-orange-500 underline font-medium">Quản lý Sàn</a> để thay đổi broker hiển thị.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Rank</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Sàn</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Logo</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Hiển thị</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {brokers.slice(0, 10).map((broker, index) => {
                                const inAdvice = index < 6;
                                const inProtect = index >= 3 && index < 7;
                                return (
                                    <tr key={broker.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3"><span className="w-7 h-7 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center font-bold text-sm">{broker.rank}</span></td>
                                        <td className="px-4 py-3 font-medium text-gray-900">{broker.name}</td>
                                        <td className="px-4 py-3">
                                            <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center p-1">
                                                {broker.logo ? <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" /> : <ImageOff size={14} className="text-gray-300" />}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-1.5">
                                                {inAdvice && <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">Lời khuyên</span>}
                                                {inProtect && <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs font-medium">Bảo vệ vốn</span>}
                                                {!inAdvice && !inProtect && <span className="px-2 py-0.5 bg-gray-50 text-gray-400 rounded text-xs">Không hiển thị</span>}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
