"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
    Plus, Edit2, Trash2, Search, Eye, EyeOff, X, Loader2, Clock,
    ChevronLeft, ChevronDown, ChevronUp, ChevronRight,
    Image as ImageIcon, FileText, Filter, MoreHorizontal,
    Globe, Type, AlignLeft, Hash, CheckCircle, AlertCircle,
    ExternalLink, Copy
} from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import MediaLibrary from "@/components/admin/MediaLibrary";
import SeoScoreCard from "@/components/admin/SeoScoreCard";
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

// ==================== COLLAPSIBLE CARD ====================
function CollapsibleCard({
    title,
    children,
    defaultOpen = true
}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
            >
                <span className="text-sm font-semibold text-gray-900">{title}</span>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </button>
            {isOpen && (
                <div className="px-5 pb-4 border-t border-gray-100">
                    {children}
                </div>
            )}
        </div>
    );
}

// ==================== WORD COUNTER HELPERS ====================
function countWords(html: string): number {
    const text = html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(w => w.length > 0).length;
}

function countChars(html: string): number {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim().length;
}

function readingTime(wordCount: number): number {
    return Math.max(1, Math.ceil(wordCount / 200));
}


export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    const [uploading, setUploading] = useState(false);
    const [statusFilter, setStatusFilter] = useState<'all' | PostStatus>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const featuredImageInputRef = useRef<HTMLInputElement>(null);
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);
    const [mediaLibraryTarget, setMediaLibraryTarget] = useState<'featured' | 'content'>('featured');

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

    // Filtered posts
    const filteredPosts = useMemo(() => {
        return posts.filter(p => {
            const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchStatus = statusFilter === 'all' || getPostStatus(p) === statusFilter;
            const matchCategory = categoryFilter === 'all' || p.category === categoryFilter;
            return matchSearch && matchStatus && matchCategory;
        });
    }, [posts, searchTerm, statusFilter, categoryFilter]);

    // Stats
    const postStats = useMemo(() => ({
        total: posts.length,
        published: posts.filter(p => p.isPublished).length,
        draft: posts.filter(p => !p.isPublished && !p.scheduledAt).length,
        scheduled: posts.filter(p => !p.isPublished && p.scheduledAt).length,
    }), [posts]);

    const handleCreate = () => {
        setCurrentPost({
            id: 0, title: "", slug: "", excerpt: "", content: "",
            featuredImage: "", featuredImageAlt: "", category: "tin-tuc",
            tags: [], metaTitle: "", metaDescription: "",
            isPublished: false, publishedAt: "", scheduledAt: "",
            createdAt: new Date().toISOString().split('T')[0]
        });
        setIsEditing(true);
        setUnsavedChanges(false);
    };

    const handleEdit = (post: Post) => {
        setCurrentPost({ ...post });
        setIsEditing(true);
        setUnsavedChanges(false);
    };

    const handlePostChange = (updates: Partial<Post>) => {
        if (!currentPost) return;
        setCurrentPost({ ...currentPost, ...updates });
        setUnsavedChanges(true);
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
                .toLowerCase().normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
                .replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").trim();
        }

        const postData: any = {
            title: currentPost.title, slug,
            excerpt: currentPost.excerpt, content: currentPost.content,
            featured_image: currentPost.featuredImage || null,
            featured_image_alt: currentPost.featuredImageAlt || null,
            category: currentPost.category, tags: currentPost.tags,
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
                        id: result.id, title: result.title, slug: result.slug,
                        excerpt: result.excerpt || "", content: result.content || "",
                        featuredImage: result.featured_image || "",
                        featuredImageAlt: result.featured_image_alt || "",
                        category: result.category || "", tags: result.tags || [],
                        metaTitle: result.meta_title || "", metaDescription: result.meta_description || "",
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
                        ...p, ...currentPost, slug: result.slug,
                        scheduledAt: (result as any).scheduled_at || "",
                    } : p));
                }
            }
            setIsEditing(false);
            setCurrentPost(null);
            setUnsavedChanges(false);
        } catch (error) {
            console.error("Save error:", error);
            alert("Có lỗi xảy ra!");
        }
        setSaving(false);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Xóa bài viết này?")) {
            const success = await deletePost(id);
            if (success) setPosts(posts.filter(p => p.id !== id));
        }
    };

    const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !currentPost) return;
        if (file.size > 5 * 1024 * 1024) { alert("Ảnh tối đa 5MB!"); return; }
        setUploading(true);
        const url = await uploadImage(file, 'post-images');
        if (url) handlePostChange({ featuredImage: url });
        setUploading(false);
    };

    function getPostStatus(post: Post): PostStatus {
        if (post.isPublished) return 'published';
        if (post.scheduledAt) return 'scheduled';
        return 'draft';
    }

    const getCurrentStatus = (): PostStatus => {
        if (!currentPost) return 'draft';
        if (currentPost.isPublished) return 'published';
        if (currentPost.scheduledAt) return 'scheduled';
        return 'draft';
    };

    const setStatus = (status: PostStatus) => {
        if (!currentPost) return;
        if (status === 'published') {
            handlePostChange({ isPublished: true, scheduledAt: "" });
        } else if (status === 'scheduled') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(9, 0, 0, 0);
            handlePostChange({ isPublished: false, scheduledAt: tomorrow.toISOString().slice(0, 16) });
        } else {
            handlePostChange({ isPublished: false, scheduledAt: "" });
        }
    };

    const handleBack = () => {
        if (unsavedChanges) {
            if (!confirm("Bạn có thay đổi chưa lưu. Thoát mà không lưu?")) return;
        }
        setIsEditing(false);
        setCurrentPost(null);
        setUnsavedChanges(false);
    };

    // ==================== EDITOR VIEW (Shopify-style) ====================
    if (isEditing && currentPost) {
        const wordCount = countWords(currentPost.content);
        const charCount = countChars(currentPost.content);
        const readTime = readingTime(wordCount);
        const metaTitleLen = (currentPost.metaTitle || currentPost.title).length;
        const metaDescLen = (currentPost.metaDescription || currentPost.excerpt).length;
        const currentSlug = currentPost.slug || currentPost.title
            .toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
            .replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").trim();

        return (
            <div className="min-h-screen bg-gray-50/80">
                {/* ===== TOP BAR ===== */}
                <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <button onClick={handleBack} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                            <ChevronLeft size={20} className="text-gray-500" />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">
                                {currentPost.id ? "Bài viết" : "Bài viết mới"}
                            </span>
                            {unsavedChanges && (
                                <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                                    Chưa lưu
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center gap-2"
                        >
                            {saving && <Loader2 size={14} className="animate-spin" />}
                            {saving ? "Đang lưu..." : "Lưu"}
                        </button>
                    </div>
                </div>

                {/* ===== MAIN CONTENT ===== */}
                <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

                        {/* ===== LEFT COLUMN ===== */}
                        <div className="space-y-5">

                            {/* Title + Content Card */}
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                <div className="p-5">
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tiêu đề</label>
                                    <input
                                        type="text"
                                        value={currentPost.title}
                                        onChange={(e) => handlePostChange({ title: e.target.value })}
                                        placeholder="VD: Hướng dẫn chọn sàn Forex uy tín 2026"
                                        className="w-full px-0 py-2 text-lg font-medium border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 placeholder-gray-300 transition-colors bg-transparent"
                                    />
                                </div>

                                <div className="border-t border-gray-100">
                                    <div className="px-5 pt-4 pb-1">
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Nội dung</label>
                                    </div>
                                    <RichTextEditor
                                        content={currentPost.content}
                                        onChange={(content) => handlePostChange({ content })}
                                        placeholder="Viết nội dung bài viết..."
                                    />
                                    {/* Word Count Bar */}
                                    <div className="flex items-center gap-4 px-5 py-2.5 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Type size={12} />
                                            {wordCount.toLocaleString()} từ
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Hash size={12} />
                                            {charCount.toLocaleString()} ký tự
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            ~{readTime} phút đọc
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Excerpt */}
                            <CollapsibleCard title="Tóm tắt" defaultOpen={!!currentPost.excerpt}>
                                <div className="pt-3">
                                    <p className="text-xs text-gray-500 mb-2">
                                        Thêm tóm tắt để hiển thị ở danh sách bài viết thay vì đoạn mở đầu tự động.
                                    </p>
                                    <textarea
                                        rows={3}
                                        value={currentPost.excerpt}
                                        onChange={(e) => handlePostChange({ excerpt: e.target.value })}
                                        placeholder="Viết tóm tắt ngắn gọn..."
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 resize-none text-sm transition-all"
                                    />
                                </div>
                            </CollapsibleCard>

                            {/* SEO — Google Preview */}
                            <CollapsibleCard title="Tối ưu công cụ tìm kiếm (SEO)" defaultOpen={true}>
                                <div className="pt-3 space-y-4">
                                    {/* Google SERP Preview */}
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Xem trước trên Google</p>
                                        <div className="space-y-1">
                                            <p className="text-[13px] text-green-700 truncate">
                                                sanuytin.net › tin-tuc › {currentSlug || "url-bai-viet"}
                                            </p>
                                            <p className="text-lg text-[#1a0dab] hover:underline cursor-pointer leading-tight line-clamp-1">
                                                {currentPost.metaTitle || currentPost.title || "Tiêu đề trang"}
                                            </p>
                                            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                                {currentPost.metaDescription || currentPost.excerpt || "Thêm mô tả meta để kiểm soát cách bài viết hiển thị trên Google..."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Page Title */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label className="text-sm font-medium text-gray-700">Tiêu đề trang (Meta title)</label>
                                            <span className={`text-xs font-medium ${metaTitleLen > 60 ? 'text-red-500' : metaTitleLen > 50 ? 'text-amber-500' : 'text-gray-400'}`}>
                                                {metaTitleLen}/60
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            value={currentPost.metaTitle}
                                            onChange={(e) => handlePostChange({ metaTitle: e.target.value })}
                                            placeholder={currentPost.title || "Tiêu đề SEO"}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-sm transition-all"
                                        />
                                        {metaTitleLen > 60 && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> Nên giữ dưới 60 ký tự
                                            </p>
                                        )}
                                    </div>

                                    {/* Meta Description */}
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label className="text-sm font-medium text-gray-700">Mô tả (Meta description)</label>
                                            <span className={`text-xs font-medium ${metaDescLen > 160 ? 'text-red-500' : metaDescLen > 140 ? 'text-amber-500' : 'text-gray-400'}`}>
                                                {metaDescLen}/160
                                            </span>
                                        </div>
                                        <textarea
                                            rows={3}
                                            value={currentPost.metaDescription}
                                            onChange={(e) => handlePostChange({ metaDescription: e.target.value })}
                                            placeholder={currentPost.excerpt || "Mô tả SEO"}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-sm resize-none transition-all"
                                        />
                                        {metaDescLen > 160 && (
                                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> Nên giữ dưới 160 ký tự
                                            </p>
                                        )}
                                    </div>

                                    {/* URL Handle */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-1 block">URL handle</label>
                                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                                            <span className="text-xs text-gray-400 px-3 bg-gray-100 py-2.5 border-r border-gray-200 shrink-0">
                                                sanuytin.net/tin-tuc/
                                            </span>
                                            <input
                                                type="text"
                                                value={currentPost.slug}
                                                onChange={(e) => handlePostChange({ slug: e.target.value })}
                                                placeholder={currentSlug}
                                                className="flex-1 px-3 py-2.5 bg-transparent focus:outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CollapsibleCard>
                        </div>

                        {/* ===== RIGHT SIDEBAR ===== */}
                        <div className="space-y-5">

                            {/* Visibility / Status */}
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-3.5 border-b border-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">Trạng thái</span>
                                </div>
                                <div className="p-5 space-y-3">
                                    <label className="flex items-center gap-3 p-3 rounded-lg cursor-pointer border border-gray-200 hover:border-gray-300 transition-colors has-[:checked]:border-green-300 has-[:checked]:bg-green-50/50">
                                        <input
                                            type="radio"
                                            name="status"
                                            checked={getCurrentStatus() === 'published'}
                                            onChange={() => setStatus('published')}
                                            className="w-4 h-4 accent-green-600"
                                        />
                                        <div>
                                            <span className="text-sm font-medium text-gray-900 block">Công khai</span>
                                            <span className="text-xs text-gray-500">Hiển thị trên website</span>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-3 p-3 rounded-lg cursor-pointer border border-gray-200 hover:border-gray-300 transition-colors has-[:checked]:border-blue-300 has-[:checked]:bg-blue-50/50">
                                        <input
                                            type="radio"
                                            name="status"
                                            checked={getCurrentStatus() === 'scheduled'}
                                            onChange={() => setStatus('scheduled')}
                                            className="w-4 h-4 mt-0.5 accent-blue-600"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-gray-900 block">Lên lịch</span>
                                            <span className="text-xs text-gray-500">Tự động đăng vào ngày chọn</span>
                                            {getCurrentStatus() === 'scheduled' && (
                                                <input
                                                    type="datetime-local"
                                                    value={currentPost.scheduledAt}
                                                    onChange={(e) => handlePostChange({ scheduledAt: e.target.value })}
                                                    min={new Date().toISOString().slice(0, 16)}
                                                    className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                                                />
                                            )}
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 rounded-lg cursor-pointer border border-gray-200 hover:border-gray-300 transition-colors has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="status"
                                            checked={getCurrentStatus() === 'draft'}
                                            onChange={() => setStatus('draft')}
                                            className="w-4 h-4 accent-gray-600"
                                        />
                                        <div>
                                            <span className="text-sm font-medium text-gray-900 block">Bản nháp</span>
                                            <span className="text-xs text-gray-500">Chỉ bạn mới xem được</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Organization */}
                            <CollapsibleCard title="Tổ chức" defaultOpen={true}>
                                <div className="pt-3 space-y-4">
                                    {/* Category */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-1 block">Danh mục</label>
                                        <select
                                            value={currentPost.category}
                                            onChange={(e) => handlePostChange({ category: e.target.value })}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-sm transition-all bg-white"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-1 block">Tags</label>
                                        <input
                                            type="text"
                                            value={currentPost.tags.join(', ')}
                                            onChange={(e) => handlePostChange({ tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                                            placeholder="forex, sàn giao dịch, review"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 text-sm transition-all"
                                        />
                                        <p className="text-xs text-gray-400 mt-1">Phân cách bằng dấu phẩy</p>
                                    </div>
                                </div>
                            </CollapsibleCard>

                            {/* Featured Image */}
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                <div className="px-5 py-3.5 border-b border-gray-100">
                                    <span className="text-sm font-semibold text-gray-900">Ảnh đại diện</span>
                                </div>
                                <div className="p-5">
                                    <input type="file" ref={featuredImageInputRef} accept="image/*" onChange={handleFeaturedImageUpload} className="hidden" />
                                    {currentPost.featuredImage ? (
                                        <div className="space-y-3">
                                            <div className="relative group rounded-lg overflow-hidden">
                                                <img src={currentPost.featuredImage} alt="" className="w-full h-40 object-cover" />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                    <button
                                                        onClick={() => { setMediaLibraryTarget('featured'); setShowMediaLibrary(true); }}
                                                        className="p-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 text-xs font-medium"
                                                    >
                                                        Thay đổi
                                                    </button>
                                                    <button
                                                        onClick={() => handlePostChange({ featuredImage: "", featuredImageAlt: "" })}
                                                        className="p-2 bg-white rounded-lg text-red-600 hover:bg-red-50"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Alt text */}
                                            <div>
                                                <label className="text-xs font-medium text-gray-500 mb-1 block">Alt text (SEO)</label>
                                                <input
                                                    type="text"
                                                    value={currentPost.featuredImageAlt}
                                                    onChange={(e) => handlePostChange({ featuredImageAlt: e.target.value })}
                                                    placeholder="Mô tả ảnh cho SEO..."
                                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 text-sm"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => { setMediaLibraryTarget('featured'); setShowMediaLibrary(true); }}
                                                className="w-full py-8 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all flex flex-col items-center gap-2"
                                            >
                                                <ImageIcon size={28} />
                                                <span className="text-sm font-medium">Chọn từ thư viện</span>
                                                <span className="text-xs text-gray-400">hoặc upload ảnh mới</span>
                                            </button>
                                            <button
                                                onClick={() => featuredImageInputRef.current?.click()}
                                                disabled={uploading}
                                                className="w-full py-2 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                                            >
                                                {uploading ? <Loader2 size={12} className="animate-spin" /> : null}
                                                {uploading ? "Đang tải..." : "Upload từ máy tính"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Media Library Modal */}
                            <MediaLibrary
                                isOpen={showMediaLibrary}
                                onClose={() => setShowMediaLibrary(false)}
                                onSelect={(url) => {
                                    if (mediaLibraryTarget === 'featured') {
                                        handlePostChange({ featuredImage: url });
                                    }
                                    setShowMediaLibrary(false);
                                }}
                            />

                            {/* SEO Score */}
                            <SeoScoreCard
                                title={currentPost.title}
                                metaTitle={currentPost.metaTitle}
                                metaDescription={currentPost.metaDescription}
                                excerpt={currentPost.excerpt}
                                content={currentPost.content}
                                slug={currentPost.slug}
                                featuredImage={currentPost.featuredImage}
                                featuredImageAlt={currentPost.featuredImageAlt}
                                tags={currentPost.tags}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ==================== LIST VIEW (Shopify-style) ====================
    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h1 className="text-xl font-bold text-gray-900">Bài viết</h1>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                >
                    <Plus size={16} />
                    Thêm bài viết
                </button>
            </div>

            {/* Tabs + Search */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Status Tabs */}
                <div className="flex items-center gap-0 border-b border-gray-200 px-4 overflow-x-auto">
                    {(
                        [
                            { key: 'all', label: 'Tất cả', count: postStats.total },
                            { key: 'published', label: 'Đã đăng', count: postStats.published },
                            { key: 'draft', label: 'Nháp', count: postStats.draft },
                            { key: 'scheduled', label: 'Lên lịch', count: postStats.scheduled },
                        ] as const
                    ).map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setStatusFilter(tab.key)}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${statusFilter === tab.key
                                ? 'border-gray-900 text-gray-900'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.label}
                            {tab.count > 0 && (
                                <span className="ml-1.5 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Search + Category Filter */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm bài viết..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        />
                    </div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 text-gray-600 bg-white"
                    >
                        <option value="all">Tất cả danh mục</option>
                        {categories.map(cat => (
                            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                {/* Table */}
                {loading ? (
                    <div className="py-16 flex justify-center">
                        <Loader2 size={24} className="animate-spin text-gray-400" />
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FileText size={24} className="text-gray-400" />
                        </div>
                        <p className="text-gray-900 font-medium mb-1">Không tìm thấy bài viết</p>
                        <p className="text-sm text-gray-500 mb-4">Thử thay đổi bộ lọc hoặc tạo bài mới</p>
                        <button onClick={handleCreate} className="text-sm text-gray-900 underline font-medium">
                            Tạo bài viết đầu tiên
                        </button>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Bài viết</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3 hidden md:table-cell">Trạng thái</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">Danh mục</th>
                                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">Ngày</th>
                                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3 w-24"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPosts.map((post) => {
                                const status = getPostStatus(post);
                                return (
                                    <tr key={post.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-5 py-3.5">
                                            <button onClick={() => handleEdit(post)} className="text-left group/title">
                                                <div className="flex items-center gap-3">
                                                    {/* Thumbnail */}
                                                    {post.featuredImage && (
                                                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                                            <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="font-medium text-gray-900 group-hover/title:text-blue-600 transition-colors line-clamp-1">
                                                            {post.title}
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-0.5">/{post.slug}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </td>
                                        <td className="px-4 py-3.5 hidden md:table-cell">
                                            {status === 'published' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                    Đã đăng
                                                </span>
                                            )}
                                            {status === 'scheduled' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                                    <Clock size={12} />
                                                    Lên lịch
                                                </span>
                                            )}
                                            {status === 'draft' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    Nháp
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5 hidden lg:table-cell">
                                            <span className="text-sm text-gray-600">
                                                {categories.find(c => c.slug === post.category)?.name || post.category}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5 hidden lg:table-cell">
                                            <span className="text-sm text-gray-500">
                                                {post.publishedAt || post.createdAt}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEdit(post)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors" title="Chỉnh sửa">
                                                    <Edit2 size={15} />
                                                </button>
                                                <button onClick={() => handleDelete(post.id)} className="p-1.5 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600 transition-colors" title="Xóa">
                                                    <Trash2 size={15} />
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
