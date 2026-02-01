"use client";

import { Gift, Plus, Edit2, Trash2, Search, Calendar, CheckCircle, XCircle, Clock, Tag } from "lucide-react";
import { useState } from "react";

interface Promotion {
    id: number;
    broker: string;
    title: string;
    code: string;
    endDate: string;
    isActive: boolean;
    description?: string;
}

export default function PromotionsPage() {
    const [promotions] = useState<Promotion[]>([
        { id: 1, broker: "Exness", title: "Bonus 100% tiền nạp", code: "BONUS100", endDate: "2026-03-31", isActive: true, description: "Nhận ngay 100% bonus cho lần nạp đầu tiên" },
        { id: 2, broker: "Vantage", title: "Giảm 50% spread tuần đầu", code: "NEWUSER50", endDate: "2026-02-28", isActive: true, description: "Spread thấp hơn 50% trong 7 ngày đầu" },
        { id: 3, broker: "XM", title: "Bonus $30 không cần nạp", code: "XM30FREE", endDate: "2026-01-15", isActive: false, description: "Nhận ngay $30 miễn phí khi đăng ký" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const activeCount = promotions.filter(p => p.isActive).length;

    const filteredPromotions = promotions.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.broker.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Gift className="text-pink-500" size={28} />
                        Quản lý Khuyến mãi
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        {promotions.length} khuyến mãi • {activeCount} đang hoạt động
                    </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-500/90 hover:to-purple-600/90 text-white font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                    <Plus size={18} />
                    Thêm khuyến mãi
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-emerald-400">
                            <CheckCircle size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{activeCount}</p>
                            <p className="text-slate-400 text-xs">Đang chạy</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/10 border border-slate-500/30 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-slate-400">
                            <XCircle size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{promotions.length - activeCount}</p>
                            <p className="text-slate-400 text-xs">Hết hạn</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/30 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-pink-400">
                            <Gift size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">{promotions.length}</p>
                            <p className="text-slate-400 text-xs">Tổng số</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-amber-400">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">2</p>
                            <p className="text-slate-400 text-xs">Sắp hết hạn</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Tìm khuyến mãi..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Promotions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPromotions.map((promo) => (
                    <div
                        key={promo.id}
                        className={`bg-slate-900/80 backdrop-blur border rounded-2xl p-5 transition-all hover:scale-[1.02] group ${promo.isActive ? 'border-slate-800 hover:border-pink-500/50' : 'border-slate-800/50 opacity-70'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${promo.isActive
                                    ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20'
                                    : 'bg-slate-800'
                                }`}>
                                <Gift size={24} className={promo.isActive ? 'text-pink-400' : 'text-slate-500'} />
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-800 rounded-lg transition-colors">
                                    <Edit2 size={16} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-lg mb-2">
                            {promo.broker}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink-400 transition-colors">
                            {promo.title}
                        </h3>
                        {promo.description && (
                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{promo.description}</p>
                        )}

                        <div className="space-y-3 pt-4 border-t border-slate-800">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5">
                                    <Tag size={14} />
                                    Mã code
                                </span>
                                <code className="px-2.5 py-1 bg-slate-800 text-primary rounded-lg font-mono text-xs font-medium">
                                    {promo.code}
                                </code>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    Hết hạn
                                </span>
                                <span className="text-slate-300 text-sm">{promo.endDate}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500 text-sm">Trạng thái</span>
                                {promo.isActive ? (
                                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                        Đang chạy
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-slate-400 text-xs font-medium rounded-lg">
                                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                                        Hết hạn
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Card */}
                <button className="bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-2xl p-5 flex flex-col items-center justify-center min-h-[280px] hover:border-pink-500/50 hover:bg-slate-900/80 transition-all group">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all">
                        <Plus size={28} className="text-slate-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <span className="text-slate-400 font-medium group-hover:text-white transition-colors">
                        Thêm khuyến mãi mới
                    </span>
                    <span className="text-slate-600 text-sm mt-1">Click để tạo</span>
                </button>
            </div>

            {/* Empty State when no results */}
            {filteredPromotions.length === 0 && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-16 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                        <Gift size={36} className="text-slate-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Không tìm thấy khuyến mãi</h3>
                    <p className="text-slate-400 mb-6">Thử tìm kiếm với từ khóa khác</p>
                </div>
            )}
        </div>
    );
}
