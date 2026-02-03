"use client";

import { useState } from "react";
import {
    FolderOpen, Plus, Edit2, Trash2, Save, X,
    GripVertical, FileText, ChevronRight
} from "lucide-react";

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    postCount: number;
    createdAt: string;
}

const sampleCategories: Category[] = [
    {
        id: 1,
        name: "Kiến thức",
        slug: "kien-thuc",
        description: "Các bài viết kiến thức cơ bản về Forex",
        postCount: 15,
        createdAt: "2026-01-01"
    },
    {
        id: 2,
        name: "Review",
        slug: "review",
        description: "Đánh giá chi tiết các sàn Forex",
        postCount: 25,
        createdAt: "2026-01-05"
    },
    {
        id: 3,
        name: "Tin tức",
        slug: "tin-tuc",
        description: "Tin tức thị trường Forex mới nhất",
        postCount: 32,
        createdAt: "2026-01-10"
    },
    {
        id: 4,
        name: "Hướng dẫn",
        slug: "huong-dan",
        description: "Hướng dẫn sử dụng các công cụ trading",
        postCount: 18,
        createdAt: "2026-01-12"
    },
    {
        id: 5,
        name: "Phân tích",
        slug: "phan-tich",
        description: "Phân tích kỹ thuật và cơ bản",
        postCount: 42,
        createdAt: "2026-01-15"
    }
];

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>(sampleCategories);
    const [isEditing, setIsEditing] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [showForm, setShowForm] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: ""
    });

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

    const handleEdit = (category: Category) => {
        setFormData({
            name: category.name,
            slug: category.slug,
            description: category.description
        });
        setEditingCategory(category);
        setShowForm(true);
    };

    const handleSave = () => {
        if (!formData.name.trim()) {
            alert("Vui lòng nhập tên danh mục!");
            return;
        }

        const slug = formData.slug || generateSlug(formData.name);

        if (editingCategory) {
            // Update existing
            setCategories(categories.map(c =>
                c.id === editingCategory.id
                    ? { ...c, name: formData.name, slug, description: formData.description }
                    : c
            ));
        } else {
            // Create new
            const newCategory: Category = {
                id: Date.now(),
                name: formData.name,
                slug,
                description: formData.description,
                postCount: 0,
                createdAt: new Date().toISOString().split('T')[0]
            };
            setCategories([...categories, newCategory]);
        }

        setShowForm(false);
        setEditingCategory(null);
        setFormData({ name: "", slug: "", description: "" });
    };

    const handleDelete = (id: number) => {
        const category = categories.find(c => c.id === id);
        if (category && category.postCount > 0) {
            if (!confirm(`Danh mục "${category.name}" có ${category.postCount} bài viết. Bạn có chắc muốn xóa?`)) {
                return;
            }
        } else if (!confirm("Bạn có chắc muốn xóa danh mục này?")) {
            return;
        }
        setCategories(categories.filter(c => c.id !== id));
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingCategory(null);
        setFormData({ name: "", slug: "", description: "" });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <FolderOpen className="text-primary" size={28} />
                        Quản lý Danh mục
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {categories.length} danh mục • {categories.reduce((sum, c) => sum + c.postCount, 0)} bài viết
                    </p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-gray-900 font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                    <Plus size={18} />
                    Thêm danh mục
                </button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white border border-gray-300 rounded-xl p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingCategory ? "Sửa danh mục" : "Thêm danh mục mới"}
                            </h2>
                            <button onClick={handleCancel} className="text-gray-500 hover:text-gray-900">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Tên danh mục *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Kiến thức Forex"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                            slug: generateSlug(e.target.value)
                                        });
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Slug (URL)</label>
                                <div className="flex items-center">
                                    <span className="text-gray-400 text-sm mr-1">/danh-muc/</span>
                                    <input
                                        type="text"
                                        placeholder="kien-thuc-forex"
                                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Mô tả</label>
                                <textarea
                                    rows={3}
                                    placeholder="Mô tả ngắn về danh mục..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 outline-none focus:border-primary resize-none"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-gray-900 rounded-lg transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-2.5 bg-primary hover:bg-primary/90 text-gray-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Save size={18} />
                                {editingCategory ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Categories List */}
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden">
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
                                <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <FolderOpen size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">{category.name}</p>
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
                                        {category.createdAt}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleEdit(category)}
                                                className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                                                title="Chỉnh sửa"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
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

                {categories.length === 0 && (
                    <div className="py-16 text-center">
                        {/* Illustration */}
                        <div className="relative mb-6 inline-block">
                            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0">
                                <FolderOpen size={40} className="text-gray-400" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                                <Plus size={20} className="text-gray-900" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có danh mục nào</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            Tạo danh mục để phân loại bài viết của bạn
                        </p>

                        <button
                            onClick={handleCreate}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-gray-900 font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                        >
                            <Plus size={18} />
                            Tạo danh mục đầu tiên
                        </button>
                    </div>
                )}
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-2xl p-5">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">💡 Gợi ý</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Mỗi bài viết chỉ thuộc về một danh mục duy nhất</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Slug được sử dụng để tạo URL cho trang danh mục</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Xóa danh mục sẽ không xóa các bài viết thuộc danh mục đó</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
