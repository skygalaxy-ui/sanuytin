"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, Eye, EyeOff, X, Loader2, Clock, ChevronLeft, ChevronDown, Image as ImageIcon } from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { uploadImage, getPosts, createPost, updatePost, deletePost } from "@/lib/supabase";

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    featuredImageAlt: string;
    category: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    isPublished: boolean;
    publishedAt: string;
    scheduledAt: string;
    createdAt: string;
}

type PostStatus = 'published' | 'scheduled' | 'draft';

const categories = [
    { slug: "tin-tuc", name: "Tin tức" },
    { slug: "kien-thuc", name: "Kiến thức" },
    { slug: "review", name: "Review" },
    { slug: "huong-dan", name: "Hướng dẫn" },
    { slug: "phan-tich", name: "Phân tích" }
];

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    const [uploading, setUploading] = useState(false);
    const featuredImageInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        async function loadPosts() {
            setLoading(true);
            const data = await getPosts(false);
            const mappedPosts: Post[] = data.map(p => ({
                id: p.id,
                title: p.title,
                slug: p.slug,
                excerpt: p.excerpt || "",
                content: p.content || "",
                featuredImage: p.featured_image || "",
                featuredImageAlt: p.featured_image_alt || "",
                category: p.category || "tin-tuc",
                tags: p.tags || [],
                metaTitle: p.meta_title || "",
                metaDescription: p.meta_description || "",
                isPublished: p.is_published,
                publishedAt: p.published_at?.split('T')[0] || "",
                scheduledAt: (p as any).scheduled_at || "",
                createdAt: p.created_at?.split('T')[0] || ""
            }));
            setPosts(mappedPosts);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const filteredPosts = posts.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCreate = () => {
        setCurrentPost({
            id: 0,
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featuredImage: "",
            featuredImageAlt: "",
            category: "tin-tuc",
            tags: [],
            metaTitle: "",
            metaDescription: "",
            isPublished: false,
            publishedAt: "",
            scheduledAt: "",
            createdAt: new Date().toISOString().split('T')[0]
        });
        setIsEditing(true);
    };

    const handleEdit = (post: Post) => {
        setCurrentPost({ ...post });
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (!currentPost || !currentPost.title.trim()) {
            alert("Vui lòng nhập tiêu đề!");
            return;
        }

        setSaving(true);

        let slug = currentPost.slug;
        if (!slug && currentPost.title) {
            slug = currentPost.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .trim();
        }

        const postData: any = {
            title: currentPost.title,
            slug: slug,
            excerpt: currentPost.excerpt,
            content: currentPost.content,
            featured_image: currentPost.featuredImage || null,
            featured_image_alt: currentPost.featuredImageAlt || null,
            category: currentPost.category,
            tags: currentPost.tags,
            author: null,
            meta_title: currentPost.metaTitle || `${currentPost.title} | Sàn Uy Tín`,
            meta_description: currentPost.metaDescription || null,
            is_published: currentPost.isPublished,
            published_at: currentPost.isPublished ? new Date().toISOString() : null,
            scheduled_at: currentPost.scheduledAt ? new Date(currentPost.scheduledAt).toISOString() : null,
        };

        try {
            if (currentPost.id === 0) {
                const result = await createPost(postData);
                if (result) {
                    const newPost: Post = {
                        id: result.id,
                        title: result.title,
                        slug: result.slug,
                        excerpt: result.excerpt || "",
                        content: result.content || "",
                        featuredImage: result.featured_image || "",
                        featuredImageAlt: result.featured_image_alt || "",
                        category: result.category || "",
                        tags: result.tags || [],
                        metaTitle: result.meta_title || "",
                        metaDescription: result.meta_description || "",
                        isPublished: result.is_published,
                        publishedAt: result.published_at?.split('T')[0] || "",
                        scheduledAt: (result as any).scheduled_at || "",
                        createdAt: result.created_at?.split('T')[0] || ""
                    };
                    setPosts([newPost, ...posts]);
                }
            } else {
                const result = await updatePost(currentPost.id, postData);
                if (result) {
                    setPosts(posts.map(p => p.id === currentPost.id ? {
                        ...p,
                        ...currentPost,
                        slug: result.slug,
                        scheduledAt: (result as any).scheduled_at || "",
                    } : p));
                }
            }
            setIsEditing(false);
            setCurrentPost(null);
        } catch (error) {
            console.error("Save error:", error);
            alert("Có lỗi xảy ra!");
        }

        setSaving(false);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Xóa bài viết này?")) {
            const success = await deletePost(id);
            if (success) {
                setPosts(posts.filter(p => p.id !== id));
            }
        }
    };

    const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !currentPost) return;

        if (file.size > 5 * 1024 * 1024) {
            alert("Ảnh tối đa 5MB!");
            return;
        }

        setUploading(true);
        const url = await uploadImage(file, 'post-images');
        if (url) {
            setCurrentPost({ ...currentPost, featuredImage: url });
        }
        setUploading(false);
    };

    const getPostStatus = (post: Post): PostStatus => {
        if (post.isPublished) return 'published';
        if (post.scheduledAt) return 'scheduled';
        return 'draft';
    };

    const getCurrentStatus = (): PostStatus => {
        if (!currentPost) return 'draft';
        if (currentPost.isPublished) return 'published';
        if (currentPost.scheduledAt) return 'scheduled';
        return 'draft';
    };

    const setStatus = (status: PostStatus) => {
        if (!currentPost) return;
        if (status === 'published') {
            setCurrentPost({ ...currentPost, isPublished: true, scheduledAt: "" });
        } else if (status === 'scheduled') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(9, 0, 0, 0);
            setCurrentPost({ ...currentPost, isPublished: false, scheduledAt: tomorrow.toISOString().slice(0, 16) });
        } else {
            setCurrentPost({ ...currentPost, isPublished: false, scheduledAt: "" });
        }
    };

    // ==================== EDITOR VIEW ====================
    if (isEditing && currentPost) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Top Bar */}
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <button onClick={() => { setIsEditing(false); setCurrentPost(null); }} className="p-2 hover:bg-gray-100 rounded-lg">
                            <ChevronLeft size={20} className="text-gray-600" />
                        </button>
                        <span className="text-sm text-gray-600">
                            {currentPost.id ? "Chỉnh sửa" : "Bài viết mới"}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => { setIsEditing(false); setCurrentPost(null); }} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
                            Hủy
                        </button>
                        <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 disabled:opacity-50 flex items-center gap-2">
                            {saving ? <Loader2 size={14} className="animate-spin" /> : null}
                            Lưu
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Title */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                                <input
                                    type="text"
                                    value={currentPost.title}
                                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                    placeholder="VD: Hướng dẫn chọn sàn Forex"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            {/* Content */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung</label>
                                <RichTextEditor
                                    content={currentPost.content}
                                    onChange={(content) => setCurrentPost({ ...currentPost, content })}
                                    placeholder="Viết nội dung..."
                                />
                            </div>

                            {/* Excerpt */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tóm tắt</label>
                                <textarea
                                    rows={2}
                                    value={currentPost.excerpt}
                                    onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                                    placeholder="Mô tả ngắn..."
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                                />
                            </div>

                            {/* SEO */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-3">SEO</label>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">URL</label>
                                        <div className="flex items-center text-sm">
                                            <span className="text-gray-400">/tin-tuc/</span>
                                            <input
                                                type="text"
                                                value={currentPost.slug}
                                                onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                                                placeholder="url-bai-viet"
                                                className="flex-1 px-2 py-1 border-b border-gray-200 focus:outline-none focus:border-gray-900"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Meta title</label>
                                        <input
                                            type="text"
                                            value={currentPost.metaTitle}
                                            onChange={(e) => setCurrentPost({ ...currentPost, metaTitle: e.target.value })}
                                            placeholder="Tiêu đề SEO"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-1">Meta description</label>
                                        <textarea
                                            rows={2}
                                            value={currentPost.metaDescription}
                                            onChange={(e) => setCurrentPost({ ...currentPost, metaDescription: e.target.value })}
                                            placeholder="Mô tả SEO"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4">
                            {/* Status */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Trạng thái</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="status" checked={getCurrentStatus() === 'published'} onChange={() => setStatus('published')} className="w-4 h-4" />
                                        <span className="text-sm">Công khai</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="status" checked={getCurrentStatus() === 'scheduled'} onChange={() => setStatus('scheduled')} className="w-4 h-4" />
                                        <span className="text-sm">Lên lịch</span>
                                    </label>
                                    {getCurrentStatus() === 'scheduled' && (
                                        <div className="ml-6 mt-2">
                                            <input
                                                type="datetime-local"
                                                value={currentPost.scheduledAt}
                                                onChange={(e) => setCurrentPost({ ...currentPost, scheduledAt: e.target.value })}
                                                min={new Date().toISOString().slice(0, 16)}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                            />
                                        </div>
                                    )}
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="status" checked={getCurrentStatus() === 'draft'} onChange={() => setStatus('draft')} className="w-4 h-4" />
                                        <span className="text-sm">Nháp</span>
                                    </label>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Ảnh đại diện</label>
                                <input type="file" ref={featuredImageInputRef} accept="image/*" onChange={handleFeaturedImageUpload} className="hidden" />

                                {currentPost.featuredImage ? (
                                    <div className="relative">
                                        <img src={currentPost.featuredImage} alt="" className="w-full h-32 object-cover rounded-lg" />
                                        <button
                                            onClick={() => setCurrentPost({ ...currentPost, featuredImage: "", featuredImageAlt: "" })}
                                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => featuredImageInputRef.current?.click()}
                                        disabled={uploading}
                                        className="w-full py-8 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors flex flex-col items-center gap-2"
                                    >
                                        {uploading ? <Loader2 size={24} className="animate-spin" /> : <ImageIcon size={24} />}
                                        <span className="text-sm">{uploading ? "Đang tải..." : "Thêm ảnh"}</span>
                                    </button>
                                )}
                            </div>

                            {/* Category */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                                <select
                                    value={currentPost.category}
                                    onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                                >
                                    {categories.map(cat => (
                                        <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Tags */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                                <input
                                    type="text"
                                    value={currentPost.tags.join(', ')}
                                    onChange={(e) => setCurrentPost({ ...currentPost, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                                    placeholder="tag1, tag2, tag3"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ==================== LIST VIEW ====================
    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-900">Bài viết</h1>
                <button onClick={handleCreate} className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800">
                    <Plus size={16} />
                    Thêm bài viết
                </button>
            </div>

            {/* Search */}
            <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {loading ? (
                    <div className="py-12 flex justify-center">
                        <Loader2 size={24} className="animate-spin text-gray-400" />
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="py-12 text-center text-gray-500">
                        <p>Chưa có bài viết nào</p>
                        <button onClick={handleCreate} className="mt-3 text-sm text-gray-900 underline">Tạo bài viết đầu tiên</button>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-4 py-3">Tiêu đề</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-4 py-3 hidden md:table-cell">Danh mục</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase px-4 py-3">Trạng thái</th>
                                <th className="text-right text-xs font-medium text-gray-500 uppercase px-4 py-3 w-20"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPosts.map((post) => {
                                const status = getPostStatus(post);
                                return (
                                    <tr key={post.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <button onClick={() => handleEdit(post)} className="text-left">
                                                <p className="font-medium text-gray-900 hover:underline">{post.title}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">/{post.slug}</p>
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 hidden md:table-cell">
                                            <span className="text-sm text-gray-600">
                                                {categories.find(c => c.slug === post.category)?.name || post.category}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            {status === 'published' && (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                    Đã đăng
                                                </span>
                                            )}
                                            {status === 'scheduled' && (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">
                                                    <Clock size={12} />
                                                    Lên lịch
                                                </span>
                                            )}
                                            {status === 'draft' && (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    Nháp
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <button onClick={() => handleEdit(post)} className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-900">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button onClick={() => handleDelete(post.id)} className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
