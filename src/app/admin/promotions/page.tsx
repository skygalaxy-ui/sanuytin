"use client";

import { useState, useEffect } from "react";
import {
    Gift, Plus, Edit2, Trash2, Search, Calendar, CheckCircle,
    XCircle, Clock, Tag, X, Save, Loader2, RefreshCw
} from "lucide-react";
import {
    getPromotions, createPromotion, updatePromotion, deletePromotion,
    getBrokers, Promotion, Broker
} from "@/lib/supabase";

type PromotionWithBroker = Promotion & { brokers: { name: string } | null };

export default function PromotionsPage() {
    const [promotions, setPromotions] = useState<PromotionWithBroker[]>([]);
    const [brokers, setBrokers] = useState<Broker[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingPromo, setEditingPromo] = useState<PromotionWithBroker | null>(null);

    const [formData, setFormData] = useState({
        broker_id: 0,
        title: "",
        description: "",
        promo_code: "",
        discount_value: "",
        start_date: "",
        end_date: "",
        terms: "",
        is_active: true,
    });

    // Load data from Supabase
    const loadData = async () => {
        setLoading(true);
        try {
            const [promosData, brokersData] = await Promise.all([
                getPromotions(),
                getBrokers(),
            ]);
            setPromotions(promosData);
            setBrokers(brokersData);
        } catch (error) {
            console.error('Error loading data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const activeCount = promotions.filter(p => p.is_active).length;
    const expiredCount = promotions.filter(p => {
        if (!p.end_date) return false;
        return new Date(p.end_date) < new Date();
    }).length;

    const filteredPromotions = promotions.filter(p => {
        const brokerName = p.brokers?.name || '';
        return p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            brokerName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleCreate = () => {
        setFormData({
            broker_id: brokers.length > 0 ? brokers[0].id : 0,
            title: "",
            description: "",
            promo_code: "",
            discount_value: "",
            start_date: new Date().toISOString().split('T')[0],
            end_date: "",
            terms: "",
            is_active: true,
        });
        setEditingPromo(null);
        setShowForm(true);
    };

    const handleEdit = (promo: PromotionWithBroker) => {
        setFormData({
            broker_id: promo.broker_id || 0,
            title: promo.title,
            description: promo.description || "",
            promo_code: promo.promo_code || "",
            discount_value: promo.discount_value || "",
            start_date: promo.start_date || "",
            end_date: promo.end_date || "",
            terms: promo.terms || "",
            is_active: promo.is_active,
        });
        setEditingPromo(promo);
        setShowForm(true);
    };

    const handleSave = async () => {
        if (!formData.title.trim()) {
            alert("Vui lòng nhập tên khuyến mãi!");
            return;
        }

        setSaving(true);
        try {
            const promoData = {
                broker_id: formData.broker_id || null,
                title: formData.title,
                description: formData.description || null,
                promo_code: formData.promo_code || null,
                discount_value: formData.discount_value || null,
                start_date: formData.start_date || null,
                end_date: formData.end_date || null,
                terms: formData.terms || null,
                is_active: formData.is_active,
            };

            if (editingPromo) {
                const result = await updatePromotion(editingPromo.id, promoData);
                if (result) {
                    setPromotions(promotions.map(p =>
                        p.id === editingPromo.id ? result : p
                    ));
                } else {
                    alert("Lỗi cập nhật khuyến mãi!");
                }
            } else {
                const result = await createPromotion(promoData);
                if (result) {
                    setPromotions([result, ...promotions]);
                } else {
                    alert("Lỗi tạo khuyến mãi!");
                }
            }

            setShowForm(false);
            setEditingPromo(null);
        } catch (error) {
            console.error('Save error:', error);
            alert("Có lỗi xảy ra!");
        }
        setSaving(false);
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Bạn có chắc muốn xóa khuyến mãi này?")) return;

        const success = await deletePromotion(id);
        if (success) {
            setPromotions(promotions.filter(p => p.id !== id));
        } else {
            alert("Lỗi xóa khuyến mãi!");
        }
    };

    const handleToggleActive = async (promo: PromotionWithBroker) => {
        const result = await updatePromotion(promo.id, { is_active: !promo.is_active });
        if (result) {
            setPromotions(promotions.map(p => p.id === promo.id ? result : p));
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingPromo(null);
    };

    const isExpired = (endDate: string | null) => {
        if (!endDate) return false;
        return new Date(endDate) < new Date();
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-32">
                <Loader2 size={32} className="animate-spin text-orange-500" />
                <span className="ml-3 text-gray-500">Đang tải khuyến mãi...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Gift className="text-pink-500" size={28} />
                        Quản lý Khuyến mãi
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {promotions.length} khuyến mãi • {activeCount} đang hoạt động
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={loadData}
                        className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all shadow-sm"
                    >
                        <RefreshCw size={16} />
                        <span className="text-sm font-medium hidden sm:inline">Làm mới</span>
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-pink-500/25"
                    >
                        <Plus size={18} />
                        Thêm khuyến mãi
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                            <CheckCircle size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{activeCount}</p>
                            <p className="text-gray-500 text-xs">Đang chạy</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                            <XCircle size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{promotions.length - activeCount}</p>
                            <p className="text-gray-500 text-xs">Tạm dừng</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                            <Gift size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{promotions.length}</p>
                            <p className="text-gray-500 text-xs">Tổng số</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{expiredCount}</p>
                            <p className="text-gray-500 text-xs">Hết hạn</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Tìm khuyến mãi..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingPromo ? "Sửa khuyến mãi" : "Thêm khuyến mãi mới"}
                            </h2>
                            <button onClick={handleCancel} className="text-gray-400 hover:text-gray-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Broker Select */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Sàn giao dịch</label>
                                <select
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                    value={formData.broker_id}
                                    onChange={(e) => setFormData({ ...formData, broker_id: parseInt(e.target.value) })}
                                >
                                    <option value={0}>-- Chọn sàn --</option>
                                    {brokers.map(b => (
                                        <option key={b.id} value={b.id}>{b.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Tên khuyến mãi *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Bonus 100% tiền nạp"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Mô tả</label>
                                <textarea
                                    rows={2}
                                    placeholder="Mô tả chi tiết..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 resize-none transition-all"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            {/* Promo Code + Discount */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 font-medium">Mã code</label>
                                    <input
                                        type="text"
                                        placeholder="BONUS100"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 font-mono transition-all"
                                        value={formData.promo_code}
                                        onChange={(e) => setFormData({ ...formData, promo_code: e.target.value.toUpperCase() })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 font-medium">Giá trị</label>
                                    <input
                                        type="text"
                                        placeholder="100%, $30, ..."
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                        value={formData.discount_value}
                                        onChange={(e) => setFormData({ ...formData, discount_value: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 font-medium">Ngày bắt đầu</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                        value={formData.start_date}
                                        onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 font-medium">Ngày kết thúc</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                        value={formData.end_date}
                                        onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Terms */}
                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Điều kiện & điều khoản</label>
                                <textarea
                                    rows={2}
                                    placeholder="Áp dụng cho lần nạp đầu tiên..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 resize-none transition-all"
                                    value={formData.terms}
                                    onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
                                />
                            </div>

                            {/* Active Toggle */}
                            <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={formData.is_active}
                                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                    className="w-4 h-4 accent-emerald-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Đang hoạt động</span>
                            </label>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={18} />}
                                {saving ? "Đang lưu..." : editingPromo ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Promotions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPromotions.map((promo) => (
                    <div
                        key={promo.id}
                        className={`bg-white border rounded-2xl p-5 transition-all hover:shadow-md group shadow-sm ${promo.is_active && !isExpired(promo.end_date)
                                ? 'border-gray-200 hover:border-pink-300'
                                : 'border-gray-200 opacity-70'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${promo.is_active && !isExpired(promo.end_date)
                                    ? 'bg-gradient-to-br from-pink-50 to-purple-50'
                                    : 'bg-gray-50'
                                }`}>
                                <Gift size={24} className={
                                    promo.is_active && !isExpired(promo.end_date)
                                        ? 'text-pink-500' : 'text-gray-400'
                                } />
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleEdit(promo)}
                                    className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                >
                                    <Edit2 size={16} />
                                </button>
                                <button
                                    onClick={() => handleDelete(promo.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        {promo.brokers?.name && (
                            <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-lg mb-2">
                                {promo.brokers.name}
                            </span>
                        )}
                        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-pink-600 transition-colors">
                            {promo.title}
                        </h3>
                        {promo.description && (
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{promo.description}</p>
                        )}

                        <div className="space-y-3 pt-4 border-t border-gray-100">
                            {promo.promo_code && (
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                                        <Tag size={14} />
                                        Mã code
                                    </span>
                                    <code className="px-2.5 py-1 bg-gray-50 text-orange-600 rounded-lg font-mono text-xs font-medium">
                                        {promo.promo_code}
                                    </code>
                                </div>
                            )}
                            {promo.discount_value && (
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">Giá trị</span>
                                    <span className="text-gray-900 text-sm font-medium">{promo.discount_value}</span>
                                </div>
                            )}
                            {promo.end_date && (
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        Hết hạn
                                    </span>
                                    <span className={`text-sm ${isExpired(promo.end_date) ? 'text-red-500' : 'text-gray-700'}`}>
                                        {new Date(promo.end_date).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">Trạng thái</span>
                                <button
                                    onClick={() => handleToggleActive(promo)}
                                    className="cursor-pointer"
                                    title="Click để thay đổi trạng thái"
                                >
                                    {promo.is_active && !isExpired(promo.end_date) ? (
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-lg hover:bg-emerald-100 transition-colors">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                            Đang chạy
                                        </span>
                                    ) : isExpired(promo.end_date) ? (
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-lg">
                                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                            Hết hạn
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            Tạm dừng
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Card */}
                <button
                    onClick={handleCreate}
                    className="bg-white/50 border-2 border-dashed border-gray-300 rounded-2xl p-5 flex flex-col items-center justify-center min-h-[280px] hover:border-pink-400 hover:bg-pink-50/30 transition-all group"
                >
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-purple-100 transition-all">
                        <Plus size={28} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
                    </div>
                    <span className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">
                        Thêm khuyến mãi mới
                    </span>
                    <span className="text-gray-400 text-sm mt-1">Click để tạo</span>
                </button>
            </div>

            {/* Empty State */}
            {filteredPromotions.length === 0 && !loading && (
                <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center shadow-sm">
                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                        <Gift size={36} className="text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {searchTerm ? "Không tìm thấy khuyến mãi" : "Chưa có khuyến mãi nào"}
                    </h3>
                    <p className="text-gray-500 mb-6">
                        {searchTerm ? "Thử tìm kiếm với từ khóa khác" : "Tạo khuyến mãi đầu tiên"}
                    </p>
                    {!searchTerm && (
                        <button
                            onClick={handleCreate}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                        >
                            <Plus size={18} />
                            Thêm khuyến mãi
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
