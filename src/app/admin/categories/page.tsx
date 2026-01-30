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
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FolderOpen className="text-primary" size={28} />
                        Quản lý Danh mục
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        {categories.length} danh mục • {categories.reduce((sum, c) => sum + c.postCount, 0)} bài viết
                    </p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
                >
                    <Plus size={18} />
                    Thêm danh mục
                </button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">
                                {editingCategory ? "Sửa danh mục" : "Thêm danh mục mới"}
                            </h2>
                            <button onClick={handleCancel} className="text-slate-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Tên danh mục *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Kiến thức Forex"
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
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
                                <label className="block text-sm text-slate-400 mb-2">Slug (URL)</label>
                                <div className="flex items-center">
                                    <span className="text-slate-500 text-sm mr-1">/danh-muc/</span>
                                    <input
                                        type="text"
                                        placeholder="kien-thuc-forex"
                                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Mô tả</label>
                                <textarea
                                    rows={3}
                                    placeholder="Mô tả ngắn về danh mục..."
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary resize-none"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Save size={18} />
                                {editingCategory ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Categories List */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-800">
                                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">Danh mục</th>
                                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">Slug</th>
                                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">Bài viết</th>
                                <th className="text-left px-6 py-4 text-slate-400 font-medium text-sm">Ngày tạo</th>
                                <th className="text-right px-6 py-4 text-slate-400 font-medium text-sm">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <FolderOpen size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">{category.name}</p>
                                                {category.description && (
                                                    <p className="text-sm text-slate-500 line-clamp-1">{category.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-sm text-slate-400 bg-slate-800 px-2 py-1 rounded">
                                            /{category.slug}
                                        </code>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-slate-300">
                                            <FileText size={14} className="text-slate-500" />
                                            <span>{category.postCount}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-400 text-sm">
                                        {category.createdAt}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleEdit(category)}
                                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                                title="Chỉnh sửa"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-700 rounded-lg transition-colors"
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
                    <div className="py-12 text-center">
                        <FolderOpen size={48} className="text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400">Chưa có danh mục nào</p>
                        <button
                            onClick={handleCreate}
                            className="mt-4 text-primary hover:underline"
                        >
                            Tạo danh mục đầu tiên
                        </button>
                    </div>
                )}
            </div>

            {/* Info Card */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <h3 className="font-medium text-blue-400 mb-2">💡 Gợi ý</h3>
                <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Mỗi bài viết chỉ thuộc về một danh mục duy nhất</li>
                    <li>• Slug được sử dụng để tạo URL cho trang danh mục</li>
                    <li>• Xóa danh mục sẽ không xóa các bài viết thuộc danh mục đó</li>
                </ul>
            </div>
        </div>
    );
}
