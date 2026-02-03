"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Edit2, Trash2, Search, Star, ExternalLink, Save, X, ChevronUp, ChevronDown, RefreshCw, Database, Upload, ImageIcon, Loader2 } from "lucide-react";
import { getBrokers, createBroker, updateBroker, deleteBroker, uploadImage, Broker } from "@/lib/supabase";

export default function BrokersManagement() {
    const [brokers, setBrokers] = useState<Broker[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState<Partial<Broker>>({});
    const fileInputRef = useRef<HTMLInputElement>(null);


    // Load from Supabase
    useEffect(() => {
        loadBrokers();
    }, []);

    const loadBrokers = async () => {
        setLoading(true);
        const data = await getBrokers();
        setBrokers(data);
        setLoading(false);
    };

    const filteredBrokers = brokers.filter(b =>
        b.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.rank - b.rank);

    const handleEdit = (broker: Broker) => {
        setEditingId(broker.id);
        setFormData(broker);
        setIsCreating(false);
    };

    const handleCreate = () => {
        setIsCreating(true);
        setEditingId(null);
        setFormData({
            rank: brokers.length + 1,
            name: "",
            slug: "",
            logo: "",
            score: 8.0,
            avg_spread: "",
            max_lev: "",
            min_dep: "",
            license: "",
            register_link: "",
            pros: [],
            cons: [],
            features: [],
            year_founded: new Date().getFullYear(),
            headquarters: "",
            platforms: [],
            is_active: true
        });
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            if (isCreating) {
                const newBroker = await createBroker(formData as Omit<Broker, 'id' | 'created_at' | 'updated_at'>);
                if (newBroker) {
                    await loadBrokers();
                }
            } else if (editingId) {
                const updated = await updateBroker(editingId, formData);
                if (updated) {
                    await loadBrokers();
                }
            }
            setEditingId(null);
            setIsCreating(false);
            setFormData({});
        } catch (error) {
            console.error('Error saving:', error);
        }
        setSaving(false);
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsCreating(false);
        setFormData({});
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Vui lòng chọn file ảnh!');
            return;
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('Kích thước ảnh tối đa 2MB!');
            return;
        }

        setUploading(true);
        try {
            const url = await uploadImage(file);
            if (url) {
                setFormData({ ...formData, logo: url });
            } else {
                alert('Upload thất bại! Vui lòng kiểm tra cấu hình Supabase Storage.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Có lỗi xảy ra khi upload ảnh!');
        }
        setUploading(false);

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Bạn có chắc muốn xóa sàn này?")) {
            const success = await deleteBroker(id);
            if (success) {
                await loadBrokers();
            }
        }
    };

    const moveRank = async (id: number, direction: 'up' | 'down') => {
        const sortedBrokers = [...brokers].sort((a, b) => a.rank - b.rank);
        const index = sortedBrokers.findIndex(b => b.id === id);

        if (direction === 'up' && index > 0) {
            const current = sortedBrokers[index];
            const above = sortedBrokers[index - 1];

            await updateBroker(current.id, { rank: above.rank });
            await updateBroker(above.id, { rank: current.rank });
            await loadBrokers();
        } else if (direction === 'down' && index < sortedBrokers.length - 1) {
            const current = sortedBrokers[index];
            const below = sortedBrokers[index + 1];

            await updateBroker(current.id, { rank: below.rank });
            await updateBroker(below.id, { rank: current.rank });
            await loadBrokers();
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
                <RefreshCw className="animate-spin text-primary" size={40} />
                <p className="text-gray-500">Đang tải dữ liệu...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Database className="text-primary" size={28} />
                        Quản lý Sàn Giao Dịch
                        <span className="text-sm font-normal text-green-500 bg-green-500/10 px-2 py-0.5 rounded">LIVE</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Dữ liệu từ Supabase • {brokers.length} sàn giao dịch</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={loadBrokers}
                        className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <RefreshCw size={18} />
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-gray-900 font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                        <Plus size={18} />
                        Thêm sàn mới
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Tìm kiếm sàn..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Create/Edit Form */}
            {(isCreating || editingId !== null) && (
                <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">
                        {isCreating ? "Thêm sàn mới" : "Chỉnh sửa thông tin"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Tên sàn</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.name || ""}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Slug (URL)</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.slug || ""}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Điểm đánh giá</label>
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.score || ""}
                                onChange={(e) => setFormData({ ...formData, score: parseFloat(e.target.value) })}
                            />
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <label className="block text-sm text-gray-500 mb-2">Logo</label>
                            <div className="flex items-start gap-4">
                                {/* Preview */}
                                <div className="w-20 h-20 bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                                    {formData.logo ? (
                                        <img src={formData.logo} alt="Logo preview" className="w-full h-full object-contain" />
                                    ) : (
                                        <ImageIcon size={24} className="text-slate-600" />
                                    )}
                                </div>
                                <div className="flex-1 space-y-2">
                                    {/* Upload Button */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        disabled={uploading}
                                        className="w-full px-3 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg text-primary font-medium text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        {uploading ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                Đang tải...
                                            </>
                                        ) : (
                                            <>
                                                <Upload size={16} />
                                                Tải ảnh lên
                                            </>
                                        )}
                                    </button>
                                    {/* URL Input */}
                                    <input
                                        type="text"
                                        placeholder="Hoặc dán URL ảnh..."
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm outline-none focus:border-primary"
                                        value={formData.logo || ""}
                                        onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Spread</label>
                            <input
                                type="text"
                                placeholder="vd: 1.0 pips"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.avg_spread || ""}
                                onChange={(e) => setFormData({ ...formData, avg_spread: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Đòn bẩy tối đa</label>
                            <input
                                type="text"
                                placeholder="vd: 1:1000"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.max_lev || ""}
                                onChange={(e) => setFormData({ ...formData, max_lev: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Nạp tối thiểu</label>
                            <input
                                type="text"
                                placeholder="vd: $50"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.min_dep || ""}
                                onChange={(e) => setFormData({ ...formData, min_dep: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Giấy phép</label>
                            <input
                                type="text"
                                placeholder="vd: ASIC, FCA"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.license || ""}
                                onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Link đăng ký (affiliate)</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.register_link || ""}
                                onChange={(e) => setFormData({ ...formData, register_link: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Năm thành lập</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.year_founded || ""}
                                onChange={(e) => setFormData({ ...formData, year_founded: parseInt(e.target.value) })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Trụ sở</label>
                            <input
                                type="text"
                                placeholder="vd: Sydney, Australia"
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                value={formData.headquarters || ""}
                                onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Ưu điểm (mỗi dòng 1 ưu điểm)</label>
                            <textarea
                                rows={3}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary resize-none"
                                value={(formData.pros || []).join('\n')}
                                onChange={(e) => setFormData({ ...formData, pros: e.target.value.split('\n').filter(p => p.trim()) })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Nhược điểm (mỗi dòng 1 nhược điểm)</label>
                            <textarea
                                rows={3}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary resize-none"
                                value={(formData.cons || []).join('\n')}
                                onChange={(e) => setFormData({ ...formData, cons: e.target.value.split('\n').filter(p => p.trim()) })}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-500/90 hover:to-emerald-600/90 text-gray-900 font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
                        >
                            {saving ? <RefreshCw size={18} className="animate-spin" /> : <Save size={18} />}
                            {saving ? "Đang lưu..." : "Lưu thay đổi"}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors"
                        >
                            <X size={18} />
                            Hủy
                        </button>
                    </div>
                </div>
            )}

            {/* Brokers Table */}
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50/50">
                                <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Rank</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Sàn</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Score</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Spread</th>
                                <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Đòn bẩy</th>
                                <th className="text-right text-xs font-bold text-gray-500 uppercase tracking-wider px-6 py-4">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {filteredBrokers.map((broker, index) => (
                                <tr key={broker.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => moveRank(broker.id, 'up')}
                                                    className="p-0.5 text-gray-400 hover:text-gray-900 disabled:opacity-30"
                                                    disabled={index === 0}
                                                >
                                                    <ChevronUp size={14} />
                                                </button>
                                                <button
                                                    onClick={() => moveRank(broker.id, 'down')}
                                                    className="p-0.5 text-gray-400 hover:text-gray-900 disabled:opacity-30"
                                                    disabled={index === filteredBrokers.length - 1}
                                                >
                                                    <ChevronDown size={14} />
                                                </button>
                                            </div>
                                            <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center font-bold text-sm">
                                                {broker.rank}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={broker.logo} alt={broker.name} className="w-10 h-10 object-contain rounded-lg" />
                                            <div>
                                                <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">{broker.name}</p>
                                                <p className="text-xs text-gray-400">/{broker.slug}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                            <span className="text-gray-900 font-medium">{broker.score}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">{broker.avg_spread}</td>
                                    <td className="px-6 py-4 text-gray-900">{broker.max_lev}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <a
                                                href={broker.register_link}
                                                target="_blank"
                                                className="p-2 text-gray-500 hover:text-sky-400 hover:bg-gray-50 rounded-lg transition-colors"
                                                title="Mở link affiliate"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                            <button
                                                onClick={() => handleEdit(broker)}
                                                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                                                title="Chỉnh sửa"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(broker.id)}
                                                className="p-2 text-gray-500 hover:text-red-400 hover:bg-gray-50 rounded-lg transition-colors"
                                                title="Xóa"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
