"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
    Tag as TagIcon, Plus, Edit2, Trash2, Save, X,
    FileText, Loader2, AlertCircle, CheckCircle, RefreshCw,
    Search, Hash
} from "lucide-react";
import {
    getTags, createTag, updateTag, deleteTag,
    type Tag
} from "@/lib/supabase";
import { supabase } from "@/lib/supabase";

// Extended tag with post count
interface TagWithCount extends Tag {
    postCount: number;
}

export default function TagsPage() {
    const [tags, setTags] = useState<TagWithCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingTag, setEditingTag] = useState<TagWithCount | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
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

    // Load tags with post counts
    const loadTags = useCallback(async () => {
        setLoading(true);
        try {
            const tagsData = await getTags();

            // Get all post tags to count usage
            const { data: posts } = await supabase
                .from("posts")
                .select("tags");

            const tagCounts: Record<string, number> = {};
            if (posts) {
                posts.forEach((p: { tags: string[] | null }) => {
                    (p.tags || []).forEach(t => {
                        tagCounts[t] = (tagCounts[t] || 0) + 1;
                    });
                });
            }

            const tagsWithCount: TagWithCount[] = tagsData.map(t => ({
                ...t,
                // Match by name (posts store tag names, not slugs)
                postCount: tagCounts[t.name] || tagCounts[t.slug] || 0
            }));

            setTags(tagsWithCount);
        } catch (error) {
            console.error("Error loading tags:", error);
            showToast("error", "Không thể tải tags!");
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        loadTags();
    }, [loadTags]);

    // Filtered tags
    const filteredTags = useMemo(() => {
        if (!searchTerm) return tags;
        const term = searchTerm.toLowerCase();
        return tags.filter(t =>
            t.name.toLowerCase().includes(term) ||
            t.slug.toLowerCase().includes(term)
        );
    }, [tags, searchTerm]);

    // Stats
    const stats = useMemo(() => ({
        total: tags.length,
        used: tags.filter(t => t.postCount > 0).length,
        unused: tags.filter(t => t.postCount === 0).length,
    }), [tags]);

    // Handlers
    const handleCreate = () => {
        setFormData({ name: "", slug: "", description: "" });
        setEditingTag(null);
        setShowForm(true);
    };

    const handleEdit = (tag: TagWithCount) => {
        setFormData({
            name: tag.name,
            slug: tag.slug,
            description: tag.description || ""
        });
        setEditingTag(tag);
        setShowForm(true);
    };

    const handleSave = async () => {
        if (!formData.name.trim()) {
            showToast("error", "Vui lòng nhập tên tag!");
            return;
        }

        const slug = formData.slug || generateSlug(formData.name);

        // Check duplicate
        const existing = tags.find(
            t => t.slug === slug && t.id !== editingTag?.id
        );
        if (existing) {
            showToast("error", `Slug "${slug}" đã tồn tại!`);
            return;
        }

        setSaving(true);

        try {
            if (editingTag) {
                const result = await updateTag(editingTag.id, {
                    name: formData.name,
                    slug,
                    description: formData.description || null
                });
                if (result) {
                    showToast("success", `Đã cập nhật tag "${formData.name}"`);
                } else {
                    showToast("error", "Cập nhật thất bại!");
                    setSaving(false);
                    return;
                }
            } else {
                const result = await createTag({
                    name: formData.name,
                    slug,
                    description: formData.description || null
                });
                if (result) {
                    showToast("success", `Đã tạo tag "${formData.name}"`);
                } else {
                    showToast("error", "Tạo tag thất bại!");
                    setSaving(false);
                    return;
                }
            }

            setShowForm(false);
            setEditingTag(null);
            setFormData({ name: "", slug: "", description: "" });
            await loadTags();
        } catch (error) {
            console.error("Save error:", error);
            showToast("error", "Có lỗi xảy ra!");
        }

        setSaving(false);
    };

    const handleDelete = async (tag: TagWithCount) => {
        if (tag.postCount > 0) {
            if (!confirm(
                `Tag "${tag.name}" đang được dùng trong ${tag.postCount} bài viết.\n\n` +
                `Nếu xóa, tag sẽ vẫn còn trong bài viết nhưng sẽ không quản lý được nữa.\n\n` +
                `Vẫn muốn xóa?`
            )) {
                return;
            }
        } else if (!confirm(`Xóa tag "${tag.name}"?`)) {
            return;
        }

        const success = await deleteTag(tag.id);
        if (success) {
            showToast("success", `Đã xóa tag "${tag.name}"`);
            await loadTags();
        } else {
            showToast("error", "Xóa thất bại!");
        }
    };

    // Bulk add tags from text input
    const [showBulkAdd, setShowBulkAdd] = useState(false);
    const [bulkText, setBulkText] = useState("");
    const [bulkAdding, setBulkAdding] = useState(false);

    const handleBulkAdd = async () => {
        const newTags = bulkText
            .split(/[,\n]/)
            .map(t => t.trim())
            .filter(t => t.length > 0);

        if (newTags.length === 0) {
            showToast("error", "Nhập ít nhất 1 tag!");
            return;
        }

        setBulkAdding(true);
        let created = 0;
        let skipped = 0;

        for (const tagName of newTags) {
            const slug = generateSlug(tagName);
            const exists = tags.find(t => t.slug === slug);
            if (exists) {
                skipped++;
                continue;
            }

            const result = await createTag({
                name: tagName,
                slug,
                description: null
            });
            if (result) created++;
        }

        showToast("success", `Đã tạo ${created} tag${skipped > 0 ? `, bỏ qua ${skipped} trùng` : ""}`);
        setBulkText("");
        setShowBulkAdd(false);
        await loadTags();
        setBulkAdding(false);
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingTag(null);
        setFormData({ name: "", slug: "", description: "" });
    };

    const totalPosts = tags.reduce((sum, t) => sum + t.postCount, 0);

    return (
        <div className="space-y-6">
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-4 right-4 z-[60] flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all ${toast.type === "success"
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
                        <Hash className="text-blue-500" size={28} />
                        Quản lý Tags
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {loading ? "Đang tải..." : `${tags.length} tags • ${totalPosts} lượt sử dụng`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={loadTags}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-all disabled:opacity-50"
                        title="Làm mới"
                    >
                        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                    </button>
                    <button
                        onClick={() => setShowBulkAdd(true)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition-all"
                    >
                        <FileText size={16} />
                        Thêm hàng loạt
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-lg"
                    >
                        <Plus size={18} />
                        Thêm tag
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            {!loading && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Tổng tags</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Đang sử dụng</p>
                        <p className="text-2xl font-bold text-green-600">{stats.used}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Chưa dùng</p>
                        <p className="text-2xl font-bold text-amber-500">{stats.unused}</p>
                    </div>
                </div>
            )}

            {/* Search */}
            {!loading && tags.length > 0 && (
                <div className="relative max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Tìm tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 bg-white"
                    />
                </div>
            )}

            {/* Single Tag Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingTag ? "Sửa tag" : "Thêm tag mới"}
                            </h2>
                            <button onClick={handleCancel} className="text-gray-400 hover:text-gray-900 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tên tag *</label>
                                <input
                                    type="text"
                                    placeholder="VD: phân tích kỹ thuật"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-900/10 transition-all"
                                    value={formData.name}
                                    onChange={(e) => {
                                        const name = e.target.value;
                                        setFormData({
                                            ...formData,
                                            name,
                                            slug: editingTag ? formData.slug : generateSlug(name)
                                        });
                                    }}
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug (URL)</label>
                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-900/10 transition-all">
                                    <span className="text-gray-400 text-sm px-3 bg-gray-50 py-3 border-r border-gray-200 shrink-0">#</span>
                                    <input
                                        type="text"
                                        placeholder="phan-tich-ky-thuat"
                                        className="flex-1 px-3 py-3 bg-white text-gray-900 outline-none"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mô tả (SEO)</label>
                                <textarea
                                    rows={2}
                                    placeholder="Mô tả ngắn giúp SEO cho trang tag..."
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
                                {saving ? "Đang lưu..." : editingTag ? "Cập nhật" : "Tạo mới"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bulk Add Modal */}
            {showBulkAdd && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Thêm tags hàng loạt</h2>
                            <button onClick={() => { setShowBulkAdd(false); setBulkText(""); }} className="text-gray-400 hover:text-gray-900 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                            Nhập mỗi tag trên một dòng, hoặc phân cách bằng dấu phẩy.
                        </p>
                        <textarea
                            rows={6}
                            placeholder={"forex\nphân tích kỹ thuật\nquản lý vốn\nhoặc: tag1, tag2, tag3"}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-900/10 resize-none transition-all font-mono text-sm"
                            value={bulkText}
                            onChange={(e) => setBulkText(e.target.value)}
                            autoFocus
                        />
                        <p className="text-xs text-gray-400 mt-2">
                            {bulkText.split(/[,\n]/).filter(t => t.trim()).length} tags sẽ được thêm • Tags trùng sẽ bị bỏ qua
                        </p>
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => { setShowBulkAdd(false); setBulkText(""); }}
                                className="flex-1 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleBulkAdd}
                                disabled={bulkAdding || !bulkText.trim()}
                                className="flex-1 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {bulkAdding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                                {bulkAdding ? "Đang thêm..." : "Thêm tất cả"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tags Grid */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                {loading ? (
                    <div className="py-16 flex flex-col items-center justify-center gap-3">
                        <Loader2 size={24} className="animate-spin text-gray-400" />
                        <p className="text-sm text-gray-500">Đang tải tags...</p>
                    </div>
                ) : filteredTags.length === 0 && searchTerm ? (
                    <div className="py-12 text-center">
                        <p className="text-gray-500">Không tìm thấy tag nào cho &quot;{searchTerm}&quot;</p>
                    </div>
                ) : tags.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="relative mb-6 inline-block">
                            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0">
                                <Hash size={40} className="text-gray-400" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                                <Plus size={20} className="text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có tag nào</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            Tạo tags để gom nhóm và tối ưu SEO cho bài viết
                        </p>
                        <button
                            onClick={handleCreate}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-lg"
                        >
                            <Plus size={18} />
                            Tạo tag đầu tiên
                        </button>
                    </div>
                ) : (
                    <div className="p-5">
                        {/* Tag Cloud View */}
                        <div className="flex flex-wrap gap-2">
                            {filteredTags.map(tag => (
                                <div
                                    key={tag.id}
                                    className="group relative inline-flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default"
                                >
                                    <Hash size={13} className="text-gray-400 group-hover:text-blue-500" />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                                        {tag.name}
                                    </span>
                                    {tag.postCount > 0 && (
                                        <span className="text-xs text-gray-400 bg-white px-1.5 py-0.5 rounded-md border border-gray-100">
                                            {tag.postCount}
                                        </span>
                                    )}

                                    {/* Hover Actions */}
                                    <div className="hidden group-hover:flex items-center gap-0.5 ml-1">
                                        <button
                                            onClick={() => handleEdit(tag)}
                                            className="p-1 text-blue-500 hover:bg-blue-100 rounded transition-colors"
                                            title="Sửa"
                                        >
                                            <Edit2 size={12} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(tag)}
                                            className="p-1 text-red-400 hover:bg-red-100 rounded transition-colors"
                                            title="Xóa"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Table View for detailed info */}
            {!loading && filteredTags.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900">Chi tiết Tags</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">Tag</th>
                                    <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">Slug</th>
                                    <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">Mô tả</th>
                                    <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">Bài viết</th>
                                    <th className="text-right px-6 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTags.map(tag => (
                                    <tr key={tag.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-2">
                                                <Hash size={14} className="text-blue-400" />
                                                <span className="font-medium text-gray-900">{tag.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg font-mono border border-gray-100">
                                                {tag.slug}
                                            </code>
                                        </td>
                                        <td className="px-6 py-3 text-sm text-gray-400 max-w-[200px] truncate">
                                            {tag.description || "—"}
                                        </td>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center gap-1.5">
                                                <FileText size={14} className="text-gray-400" />
                                                <span className={`font-medium ${tag.postCount > 0 ? "text-gray-700" : "text-gray-300"}`}>
                                                    {tag.postCount}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => handleEdit(tag)}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Sửa"
                                                >
                                                    <Edit2 size={15} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(tag)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Xóa"
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Info Card */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">💡 Hướng dẫn Tags</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Tags giúp gom nhóm bài viết theo chủ đề, hỗ trợ SEO tốt hơn</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Mỗi bài viết có thể gắn nhiều tags cùng lúc</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Sử dụng &quot;Thêm hàng loạt&quot; để import nhiều tags nhanh chóng</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Tags chưa sử dụng có thể xóa mà không ảnh hưởng bài viết</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
