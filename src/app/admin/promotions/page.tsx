"use client";

import { Gift, Plus, Edit2, Trash2, Search, Calendar, CheckCircle, XCircle } from "lucide-react";

export default function PromotionsPage() {
    const promotions = [
        { id: 1, broker: "Exness", title: "Bonus 100% tiền nạp", code: "BONUS100", endDate: "2026-03-31", isActive: true },
        { id: 2, broker: "Vantage", title: "Giảm 50% spread tuần đầu", code: "NEWUSER50", endDate: "2026-02-28", isActive: true },
        { id: 3, broker: "XM", title: "Bonus $30 không cần nạp", code: "XM30FREE", endDate: "2026-01-15", isActive: false },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Quản lý Khuyến mãi</h1>
                    <p className="text-slate-400 text-sm mt-1">{promotions.length} khuyến mãi</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors">
                    <Plus size={18} />
                    Thêm khuyến mãi
                </button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Tìm khuyến mãi..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 outline-none focus:border-primary"
                />
            </div>

            {/* Promotions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {promotions.map((promo) => (
                    <div key={promo.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <Gift size={20} className="text-purple-500" />
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors">
                                    <Edit2 size={14} />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-700 rounded-md transition-colors">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>

                        <p className="text-xs text-primary font-medium mb-1">{promo.broker}</p>
                        <h3 className="text-white font-bold mb-3">{promo.title}</h3>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">Mã code:</span>
                                <code className="px-2 py-0.5 bg-slate-800 text-primary rounded font-mono text-xs">{promo.code}</code>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">Hết hạn:</span>
                                <span className="text-slate-300 flex items-center gap-1">
                                    <Calendar size={12} /> {promo.endDate}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500">Trạng thái:</span>
                                {promo.isActive ? (
                                    <span className="flex items-center gap-1 text-green-500">
                                        <CheckCircle size={12} /> Đang chạy
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-slate-500">
                                        <XCircle size={12} /> Hết hạn
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Card */}
                <button className="bg-slate-900 border border-dashed border-slate-700 rounded-xl p-5 flex flex-col items-center justify-center min-h-[200px] hover:border-slate-600 transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-slate-700 transition-colors">
                        <Plus size={24} className="text-slate-400" />
                    </div>
                    <span className="text-slate-400 font-medium">Thêm khuyến mãi mới</span>
                </button>
            </div>
        </div>
    );
}
