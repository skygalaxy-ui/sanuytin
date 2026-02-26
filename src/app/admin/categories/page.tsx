"use client";

import { useState, useEffect } from "react";
import {
    FolderOpen, Plus, Edit2, Trash2, Save, X,
    FileText, Loader2, RefreshCw
} from "lucide-react";
import {
    getCategories, createCategory, updateCategory, deleteCategory,
    Category, supabase
} from "@/lib/supabase";

interface CategoryWithCount extends Category {
    postCount: number;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<CategoryWithCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingCategory, setEditingCategory] = useState<CategoryWithCount | null>(null);
    const [formData, setFormData] = useState({ name: "", slug: "", description: "" });

    // Load categories from Supabase
    const loadCategories = async () => {
        setLoading(true);
        try {
            const cats = await getCategories();

            // Get post counts per category
            const { data: posts } = await supabase
                .from('posts')
                .select('category');

            const countMap: Record<string, number> = {};
            (posts || []).forEach((p: any) => {
                const cat = p.category || '';
                countMap[cat] = (countMap[cat] || 0) + 1;
            });

            const catsWithCount: CategoryWithCount[] = cats.map(c => ({
                ...c,
                postCount: countMap[c.slug] || 0,
            }));

            setCategories(catsWithCount);
        } catch (error) {
            console.error('Error loading categories:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const handleCreate = () => {
        setFormData({ name: "", slug: "", description: "" });
        setEditingCategory(null);
        setShowForm(true);
    };

    const handleEdit = (category: CategoryWithCount) => {
        setFormData({
            name: category.name,
            slug: category.slug,
            description: category.description || ""
        });
        setEditingCategory(category);
        setShowForm(true);
    };

    const handleSave = async () => {
        if (!formData.name.trim()) {
            alert("Vui lòng nhập tên danh mục!");
            return;
        }

        setSaving(true);
        const slug = formData.slug || generateSlug(formData.name);

        try {
            if (editingCategory) {
                const result = await updateCategory(editingCategory.id, {
                    name: formData.name,
                    slug,
                    description: formData.description || null,
                });
                if (result) {
                    setCategories(categories.map(c =>
                        c.id === editingCategory.id
                            ? { ...c, name: result.name, slug: result.slug, description: result.description }
                            : c
                    ));
                } else {
                    alert("Lỗi cập nhật danh mục! Kiểm tra slug có bị trùng không.");
                }
            } else {
                const result = await createCategory({
                    name: formData.name,
                    slug,
                    description: formData.description || null,
                });
                if (result) {
                    setCategories([...categories, { ...result, postCount: 0 }]);
                } else {
                    alert("Lỗi tạo danh mục! Slug có thể đã tồn tại.");
                }
            }

            setShowForm(false);
            setEditingCategory(null);
            setFormData({ name: "", slug: "", description: "" });
        } catch (error) {
            console.error('Save error:', error);
            alert("Có lỗi xảy ra!");
        }
        setSaving(false);
    };

    const handleDelete = async (id: number) => {
        const category = categories.find(c => c.id === id);
        if (category && category.postCount > 0) {
            if (!confirm(`Danh mục "${category.name}" có ${category.postCount} bài viết. Bạn có chắc muốn xóa?`)) {
                return;
            }
        } else if (!confirm("Bạn có chắc muốn xóa danh mục này?")) {
            return;
        }

        const success = await deleteCategory(id);
        if (success) {
            setCategories(categories.filter(c => c.id !== id));
        } else {
            alert("Lỗi xóa danh mục!");
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingCategory(null);
        setFormData({ name: "", slug: "", description: "" });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-32">
                <Loader2 size={32} className="animate-spin text-orange-500" />
                <span className="ml-3 text-gray-500">Đang tải danh mục...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <FolderOpen className="text-orange-500" size={28} />
                        Quản lý Danh mục
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {categories.length} danh mục • {categories.reduce((sum, c) => sum + c.postCount, 0)} bài viết
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={loadCategories}
                        className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all shadow-sm"
                    >
                        <RefreshCw size={16} />
                        <span className="text-sm font-medium hidden sm:inline">Làm mới</span>
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25"
                    >
                        <Plus size={18} />
                        Thêm danh mục
                    </button>
                </div>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingCategory ? "Sửa danh mục" : "Thêm danh mục mới"}
                            </h2>
                            <button onClick={handleCancel} className="text-gray-400 hover:text-gray-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Tên danh mục *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Kiến thức Forex"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 transition-all"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                            slug: editingCategory ? formData.slug : generateSlug(e.target.value)
                                        });
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Slug (URL)</label>
                                <div className="flex items-center">
                                    <span className="text-gray-400 text-sm mr-1">/danh-muc/</span>
                                    <input
                                        type="text"
                                        placeholder="kien-thuc-forex"
                                        className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 transition-all"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2 font-medium">Mô tả</label>
                                <textarea
                                    rows={3}
                                    placeholder="Mô tả ngắn về danh mục..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 resize-none transition-all"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
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
                                className="flex-1 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={18} />}
                                {saving ? "Đang lưu..." : editingCategory ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Categories List */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50/50">
                                <th className="text-left px-6 py-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Danh mục</th>
                                <th className="text-left px-6 py-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Slug</th>
                                <th className="text-left px-6 py-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Bài viết</th>
                                <th className="text-left px-6 py-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Ngày tạo</th>
                                <th className="text-right px-6 py-4 text-gray-500 font-bold text-xs uppercase tracking-wider">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <FolderOpen size={18} className="text-orange-500" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{category.name}</p>
                                                {category.description && (
                                                    <p className="text-sm text-gray-400 line-clamp-1">{category.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg font-mono">
                                            /{category.slug}
                                        </code>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-gray-700 px-2.5 py-1 bg-gray-50/80 rounded-lg w-fit">
                                            <FileText size={14} className="text-gray-400" />
                                            <span className="font-medium">{category.postCount}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">
                                        {category.created_at ? new Date(category.created_at).toLocaleDateString('vi-VN') : '—'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleEdit(category)}
                                                className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                                title="Chỉnh sửa"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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

                {categories.length === 0 && !loading && (
                    <div className="py-16 text-center">
                        <div className="relative mb-6 inline-block">
                            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0">
                                <FolderOpen size={40} className="text-gray-300" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                                <Plus size={20} className="text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có danh mục nào</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            Tạo danh mục để phân loại bài viết của bạn
                        </p>
                        <button
                            onClick={handleCreate}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25"
                        >
                            <Plus size={18} />
                            Tạo danh mục đầu tiên
                        </button>
                    </div>
                )}
            </div>

            {/* Info Card */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">💡 Gợi ý</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500">•</span>
                        <span>Mỗi bài viết chỉ thuộc về một danh mục duy nhất</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500">•</span>
                        <span>Slug được sử dụng để tạo URL cho trang danh mục</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500">•</span>
                        <span>Xóa danh mục sẽ không xóa các bài viết thuộc danh mục đó</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
