"use client";

import { useState, useEffect, useCallback } from "react";
import {
    FolderOpen, Plus, Edit2, Trash2, Save, X,
    FileText, Loader2, AlertCircle, CheckCircle, RefreshCw
} from "lucide-react";
import {
    getCategories, createCategory, updateCategory, deleteCategory,
    type Category
} from "@/lib/supabase";
import { supabase } from "@/lib/supabase";

// Extended category with post count
interface CategoryWithCount extends Category {
    postCount: number;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<CategoryWithCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingCategory, setEditingCategory] = useState<CategoryWithCount | null>(null);
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: ""
    });

    // Show toast notification
    const showToast = (type: "success" | "error", message: string) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 3000);
    };

    // Generate slug from Vietnamese text
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

    // Load categories with post counts
    const loadCategories = useCallback(async () => {
        setLoading(true);
        try {
            const cats = await getCategories();

            // Get post counts per category
            const { data: posts } = await supabase
                .from("posts")
                .select("category");

            const postCounts: Record<string, number> = {};
            if (posts) {
                posts.forEach((p: { category: string }) => {
                    postCounts[p.category] = (postCounts[p.category] || 0) + 1;
                });
            }

            const catsWithCount: CategoryWithCount[] = cats.map(c => ({
                ...c,
                postCount: postCounts[c.slug] || 0
            }));

            setCategories(catsWithCount);
        } catch (error) {
            console.error("Error loading categories:", error);
            showToast("error", "Không thể tải danh mục!");
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    // Handlers
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
            showToast("error", "Vui lòng nhập tên danh mục!");
            return;
        }

        const slug = formData.slug || generateSlug(formData.name);

        // Check duplicate slug
        const existing = categories.find(
            c => c.slug === slug && c.id !== editingCategory?.id
        );
        if (existing) {
            showToast("error", `Slug "${slug}" đã tồn tại!`);
            return;
        }

        setSaving(true);

        try {
            if (editingCategory) {
                // Update
                const result = await updateCategory(editingCategory.id, {
                    name: formData.name,
                    slug,
                    description: formData.description || null
                });
                if (result) {
                    showToast("success", `Đã cập nhật danh mục "${formData.name}"`);
                } else {
                    showToast("error", "Cập nhật thất bại!");
                    setSaving(false);
                    return;
                }
            } else {
                // Create
                const result = await createCategory({
                    name: formData.name,
                    slug,
                    description: formData.description || null
                });
                if (result) {
                    showToast("success", `Đã tạo danh mục "${formData.name}"`);
                } else {
                    showToast("error", "Tạo danh mục thất bại!");
                    setSaving(false);
                    return;
                }
            }

            setShowForm(false);
            setEditingCategory(null);
            setFormData({ name: "", slug: "", description: "" });
            await loadCategories(); // Reload from DB
        } catch (error) {
            console.error("Save error:", error);
            showToast("error", "Có lỗi xảy ra!");
        }

        setSaving(false);
    };

    const handleDelete = async (category: CategoryWithCount) => {
        if (category.postCount > 0) {
            if (!confirm(
                `Danh mục "${category.name}" có ${category.postCount} bài viết.\n\n` +
                `Bạn cần chuyển bài viết sang danh mục khác trước khi xóa.\n\n` +
                `Vẫn muốn xóa?`
            )) {
                return;
            }
        } else if (!confirm(`Xóa danh mục "${category.name}"?`)) {
            return;
        }

        const success = await deleteCategory(category.id);
        if (success) {
            showToast("success", `Đã xóa danh mục "${category.name}"`);
            await loadCategories();
        } else {
            showToast("error", "Xóa thất bại!");
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingCategory(null);
        setFormData({ name: "", slug: "", description: "" });
    };

    const totalPosts = categories.reduce((sum, c) => sum + c.postCount, 0);

    return (
        <div className="space-y-6">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-4 right-4 z-[60] flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all animate-in slide-in-from-top-2 ${toast.type === "success"
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}>
                    {toast.type === "success"
                        ? <CheckCircle size={16} />
                        : <AlertCircle size={16} />
                    }
                    {toast.message}
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <FolderOpen className="text-orange-500" size={28} />
                        Quản lý Danh mục
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {loading ? "Đang tải..." : `${categories.length} danh mục • ${totalPosts} bài viết`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={loadCategories}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition-all disabled:opacity-50"
                        title="Làm mới"
                    >
                        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-lg"
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
                            <button onClick={handleCancel} className="text-gray-400 hover:text-gray-900 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tên danh mục *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Kiến thức Forex"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-900/10 transition-all"
                                    value={formData.name}
                                    onChange={(e) => {
                                        const name = e.target.value;
                                        setFormData({
                                            ...formData,
                                            name,
                                            slug: editingCategory ? formData.slug : generateSlug(name)
                                        });
                                    }}
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug (URL)</label>
                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-900/10 transition-all">
                                    <span className="text-gray-400 text-sm px-3 bg-gray-50 py-3 border-r border-gray-200 shrink-0">/</span>
                                    <input
                                        type="text"
                                        placeholder="kien-thuc-forex"
                                        className="flex-1 px-3 py-3 bg-white text-gray-900 outline-none"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mô tả</label>
                                <textarea
                                    rows={3}
                                    placeholder="Mô tả ngắn về danh mục..."
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-900/10 resize-none transition-all"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving || !formData.name.trim()}
                                className="flex-1 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                {saving ? "Đang lưu..." : editingCategory ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Categories List */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                {loading ? (
                    <div className="py-16 flex flex-col items-center justify-center gap-3">
                        <Loader2 size={24} className="animate-spin text-gray-400" />
                        <p className="text-sm text-gray-500">Đang tải danh mục...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50/50">
                                    <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Danh mục</th>
                                    <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Slug</th>
                                    <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Bài viết</th>
                                    <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Ngày tạo</th>
                                    <th className="text-right px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors group">
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
                                            <code className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg font-mono border border-gray-100">
                                                /{category.slug}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-gray-700">
                                                <FileText size={14} className="text-gray-400" />
                                                <span className="font-medium">{category.postCount}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">
                                            {new Date(category.created_at).toLocaleDateString("vi-VN")}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => handleEdit(category)}
                                                    className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                                    title="Chỉnh sửa"
                                                >
                                                    <Edit2 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(category)}
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
                )}

                {!loading && categories.length === 0 && (
                    <div className="py-16 text-center">
                        <div className="relative mb-6 inline-block">
                            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0">
                                <FolderOpen size={40} className="text-gray-400" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                                <Plus size={20} className="text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có danh mục nào</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            Tạo danh mục để phân loại bài viết của bạn
                        </p>
                        <button
                            onClick={handleCreate}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-lg"
                        >
                            <Plus size={18} />
                            Tạo danh mục đầu tiên
                        </button>
                    </div>
                )}
            </div>

            {/* Info Card */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
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
                        <span>Danh mục có bài viết sẽ cần xác nhận trước khi xóa</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
