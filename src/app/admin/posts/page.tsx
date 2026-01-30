"use client";

import { useState, useRef, useEffect } from "react";
import {
    FileText, Plus, Edit2, Trash2, Search, Eye, EyeOff,
    Save, X, Image, Link2, Bold, Italic, List, Heading,
    Upload, AlertCircle, CheckCircle, Loader2, ImagePlus
} from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { uploadImage, getPosts, createPost, updatePost, deletePost, Post as SupabasePost } from "@/lib/supabase";


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
    createdAt: string;
}

const samplePosts: Post[] = [
    {
        id: 1,
        title: "Hướng dẫn chọn sàn Forex cho người mới bắt đầu 2026",
        slug: "huong-dan-chon-san-forex",
        excerpt: "Bài viết hướng dẫn chi tiết cách chọn sàn Forex uy tín cho người mới...",
        content: "# Hướng dẫn chọn sàn Forex\n\nNội dung bài viết...",
        featuredImage: "/images/posts/huong-dan-forex.jpg",
        featuredImageAlt: "Hướng dẫn chọn sàn Forex cho người mới",
        category: "Kiến thức",
        tags: ["forex", "hướng dẫn", "người mới"],
        metaTitle: "Hướng dẫn chọn sàn Forex cho người mới 2026 | Sàn Uy Tín",
        metaDescription: "Tổng hợp các tiêu chí quan trọng giúp bạn chọn sàn Forex uy tín, an toàn cho người mới bắt đầu giao dịch năm 2026.",
        isPublished: true,
        publishedAt: "2026-01-25",
        createdAt: "2026-01-20"
    },
    {
        id: 2,
        title: "Top 5 sàn Forex có spread thấp nhất 2026",
        slug: "top-5-san-spread-thap",
        excerpt: "Danh sách 5 sàn Forex có mức spread cạnh tranh nhất...",
        content: "# Top 5 sàn spread thấp\n\nNội dung...",
        featuredImage: "/images/posts/top-san-spread.jpg",
        featuredImageAlt: "Top 5 sàn Forex spread thấp nhất 2026",
        category: "Review",
        tags: ["spread", "top sàn", "review"],
        metaTitle: "Top 5 sàn Forex spread thấp nhất 2026 | So sánh chi tiết",
        metaDescription: "So sánh chi tiết 5 sàn Forex có spread thấp nhất năm 2026, giúp trader tiết kiệm chi phí giao dịch.",
        isPublished: true,
        publishedAt: "2026-01-20",
        createdAt: "2026-01-18"
    },
    {
        id: 3,
        title: "Phân tích kỹ thuật cơ bản cho Forex",
        slug: "phan-tich-ky-thuat-co-ban",
        excerpt: "Các phương pháp phân tích kỹ thuật cơ bản...",
        content: "# Phân tích kỹ thuật\n\nNội dung...",
        featuredImage: "",
        featuredImageAlt: "",
        category: "Kiến thức",
        tags: ["phân tích kỹ thuật", "trading"],
        metaTitle: "",
        metaDescription: "",
        isPublished: false,
        publishedAt: "",
        createdAt: "2026-01-18"
    },
];

const categories = ["Kiến thức", "Review", "Tin tức", "Hướng dẫn", "Phân tích"];

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'media'>('content');
    const [uploading, setUploading] = useState(false);
    const featuredImageInputRef = useRef<HTMLInputElement>(null);

    // Load posts from Supabase
    useEffect(() => {
        async function loadPosts() {
            setLoading(true);
            const data = await getPosts(false); // get all posts including drafts
            // Map Supabase format to local format
            const mappedPosts: Post[] = data.map(p => ({
                id: p.id,
                title: p.title,
                slug: p.slug,
                excerpt: p.excerpt || "",
                content: p.content || "",
                featuredImage: p.featured_image || "",
                featuredImageAlt: p.featured_image_alt || "",
                category: p.category || "Kiến thức",
                tags: p.tags || [],
                metaTitle: p.meta_title || "",
                metaDescription: p.meta_description || "",
                isPublished: p.is_published,
                publishedAt: p.published_at?.split('T')[0] || "",
                createdAt: p.created_at?.split('T')[0] || ""
            }));
            setPosts(mappedPosts);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !currentPost) return;

        if (!file.type.startsWith('image/')) {
            alert('Vui lòng chọn file ảnh!');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('Kích thước ảnh tối đa 5MB!');
            return;
        }

        setUploading(true);
        try {
            const url = await uploadImage(file, 'post-images');
            if (url) {
                updateCurrentPost({ featuredImage: url });
            } else {
                alert('Upload thất bại! Vui lòng kiểm tra cấu hình Supabase Storage.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Có lỗi xảy ra khi upload ảnh!');
        }
        setUploading(false);

        if (featuredImageInputRef.current) {
            featuredImageInputRef.current.value = '';
        }
    };

    const filteredPosts = posts.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCreate = () => {
        setCurrentPost({
            id: 0, // Will be assigned by Supabase
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            featuredImage: "",
            featuredImageAlt: "",
            category: "Kiến thức",
            tags: [],
            metaTitle: "",
            metaDescription: "",
            isPublished: false,
            publishedAt: "",
            createdAt: new Date().toISOString().split('T')[0]
        });
        setIsEditing(true);
        setActiveTab('content');
    };

    const handleEdit = (post: Post) => {
        setCurrentPost({ ...post });
        setIsEditing(true);
        setActiveTab('content');
    };

    const handleSave = async () => {
        if (!currentPost || !currentPost.title.trim()) {
            alert("Vui lòng nhập tiêu đề bài viết!");
            return;
        }

        setSaving(true);

        // Create updated post with auto-generated fields
        let slug = currentPost.slug;
        if (!slug && currentPost.title) {
            slug = currentPost.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim();
        }

        const metaTitle = currentPost.metaTitle || `${currentPost.title} | Sàn Uy Tín`;

        // Prepare data for Supabase
        const postData = {
            title: currentPost.title,
            slug: slug,
            excerpt: currentPost.excerpt,
            content: currentPost.content,
            featured_image: currentPost.featuredImage || null,
            featured_image_alt: currentPost.featuredImageAlt || null,
            category: currentPost.category,
            tags: currentPost.tags,
            author: null,
            meta_title: metaTitle,
            meta_description: currentPost.metaDescription || null,
            is_published: currentPost.isPublished,
            published_at: currentPost.isPublished ? new Date().toISOString() : null,
        };

        try {
            if (currentPost.id === 0) {
                // Create new post
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
                        createdAt: result.created_at?.split('T')[0] || ""
                    };
                    setPosts([newPost, ...posts]);
                    alert("Đã tạo bài viết thành công!");
                } else {
                    alert("Lỗi khi tạo bài viết. Vui lòng thử lại.");
                }
            } else {
                // Update existing post
                const result = await updatePost(currentPost.id, postData);
                if (result) {
                    setPosts(posts.map(p => p.id === currentPost.id ? {
                        ...p,
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
                    } : p));
                    alert("Đã cập nhật bài viết thành công!");
                } else {
                    alert("Lỗi khi cập nhật bài viết. Vui lòng thử lại.");
                }
            }
            setIsEditing(false);
            setCurrentPost(null);
        } catch (error) {
            console.error("Save error:", error);
            alert("Có lỗi xảy ra khi lưu bài viết!");
        }

        setSaving(false);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
            const success = await deletePost(id);
            if (success) {
                setPosts(posts.filter(p => p.id !== id));
            } else {
                alert("Lỗi khi xóa bài viết!");
            }
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentPost(null);
    };

    const togglePublish = async (id: number) => {
        const post = posts.find(p => p.id === id);
        if (!post) return;

        const newStatus = !post.isPublished;
        const result = await updatePost(id, {
            is_published: newStatus,
            published_at: newStatus ? new Date().toISOString() : null
        });

        if (result) {
            setPosts(posts.map(p => p.id === id ? {
                ...p,
                isPublished: newStatus,
                publishedAt: newStatus ? new Date().toISOString().split('T')[0] : p.publishedAt
            } : p));
        }
    };


    const updateCurrentPost = (updates: Partial<Post>) => {
        if (currentPost) {
            setCurrentPost({ ...currentPost, ...updates });
        }
    };

    // Check SEO score
    const getSeoScore = (post: Post) => {
        let score = 0;
        if (post.metaTitle && post.metaTitle.length >= 30 && post.metaTitle.length <= 60) score += 25;
        if (post.metaDescription && post.metaDescription.length >= 120 && post.metaDescription.length <= 160) score += 25;
        if (post.featuredImage) score += 25;
        if (post.featuredImageAlt) score += 25;
        return score;
    };

    if (isEditing && currentPost) {
        return (
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleCancel}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <h1 className="text-xl font-semibold text-white">
                            {currentPost.id && posts.find(p => p.id === currentPost.id) ? "Chỉnh sửa bài viết" : "Thêm bài viết"}
                        </h1>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                    >
                        {saving ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Đang lưu...
                            </>
                        ) : (
                            "Lưu"
                        )}
                    </button>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Title */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <label className="block text-sm text-slate-400 mb-2">Tiêu đề</label>
                            <input
                                type="text"
                                placeholder="VD: Hướng dẫn chọn sàn Forex cho người mới"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-lg outline-none focus:border-primary"
                                value={currentPost.title}
                                onChange={(e) => updateCurrentPost({ title: e.target.value })}
                            />
                        </div>

                        {/* Content */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <label className="block text-sm text-slate-400 mb-2">Nội dung</label>
                            <RichTextEditor
                                content={currentPost.content}
                                onChange={(content) => updateCurrentPost({ content })}
                                placeholder="Viết nội dung bài viết tại đây..."
                            />
                        </div>

                        {/* Excerpt - Collapsible */}
                        <CollapsibleSection title="Tóm tắt (Excerpt)" description="Mô tả ngắn hiển thị trong danh sách bài viết">
                            <textarea
                                rows={3}
                                placeholder="Mô tả ngắn về bài viết..."
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary resize-none"
                                value={currentPost.excerpt}
                                onChange={(e) => updateCurrentPost({ excerpt: e.target.value })}
                            />
                        </CollapsibleSection>

                        {/* SEO - Collapsible */}
                        <CollapsibleSection title="SEO (Search engine listing)" description="Tối ưu hiển thị trên Google">
                            <div className="space-y-4">
                                {/* Google Preview */}
                                <div className="bg-white rounded-lg p-4 mb-4">
                                    <p className="text-sm text-green-700 mb-1">
                                        sanuytin.net › tin-tuc › {currentPost.slug || 'url-bai-viet'}
                                    </p>
                                    <h4 className="text-lg text-blue-700 hover:underline cursor-pointer mb-1">
                                        {currentPost.metaTitle || currentPost.title || 'Tiêu đề bài viết'}
                                    </h4>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {currentPost.metaDescription || currentPost.excerpt || 'Mô tả bài viết...'}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">
                                        Meta Title <span className="text-slate-500">({currentPost.metaTitle.length}/60)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tiêu đề hiển thị trên Google"
                                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                                        value={currentPost.metaTitle}
                                        onChange={(e) => updateCurrentPost({ metaTitle: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">
                                        Meta Description <span className="text-slate-500">({currentPost.metaDescription.length}/160)</span>
                                    </label>
                                    <textarea
                                        rows={2}
                                        placeholder="Mô tả hiển thị trên Google"
                                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary resize-none"
                                        value={currentPost.metaDescription}
                                        onChange={(e) => updateCurrentPost({ metaDescription: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">URL Slug</label>
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-500 text-sm">/tin-tuc/</span>
                                        <input
                                            type="text"
                                            placeholder="url-bai-viet"
                                            className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                                            value={currentPost.slug}
                                            onChange={(e) => updateCurrentPost({ slug: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CollapsibleSection>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-4">
                        {/* Visibility */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <h3 className="font-medium text-white mb-3">Trạng thái</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                                    <input
                                        type="radio"
                                        name="visibility"
                                        checked={currentPost.isPublished}
                                        onChange={() => updateCurrentPost({ isPublished: true, publishedAt: new Date().toISOString().split('T')[0] })}
                                        className="w-4 h-4 text-primary"
                                    />
                                    <span className="text-slate-300">Công khai</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                                    <input
                                        type="radio"
                                        name="visibility"
                                        checked={!currentPost.isPublished}
                                        onChange={() => updateCurrentPost({ isPublished: false })}
                                        className="w-4 h-4 text-primary"
                                    />
                                    <span className="text-slate-300">Ẩn</span>
                                </label>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <h3 className="font-medium text-white mb-3">Ảnh đại diện</h3>
                            <input
                                type="file"
                                ref={featuredImageInputRef}
                                accept="image/*"
                                onChange={handleFeaturedImageUpload}
                                className="hidden"
                            />

                            <div
                                onClick={() => !currentPost.featuredImage && featuredImageInputRef.current?.click()}
                                className={`border-2 border-dashed border-slate-700 rounded-xl p-6 text-center transition-colors ${!currentPost.featuredImage ? 'cursor-pointer hover:border-primary/50' : ''}`}
                            >
                                {currentPost.featuredImage ? (
                                    <div className="relative">
                                        <img
                                            src={currentPost.featuredImage}
                                            alt="Preview"
                                            className="w-full h-32 object-cover rounded-lg"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Error';
                                            }}
                                        />
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateCurrentPost({ featuredImage: '', featuredImageAlt: '' });
                                            }}
                                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-400"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {uploading ? (
                                            <div className="py-4">
                                                <Loader2 size={24} className="text-primary animate-spin mx-auto mb-2" />
                                                <p className="text-slate-400 text-sm">Đang tải...</p>
                                            </div>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors text-sm"
                                                >
                                                    Thêm ảnh
                                                </button>
                                                <p className="text-slate-500 text-xs mt-2">hoặc kéo thả ảnh vào đây</p>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>

                            {currentPost.featuredImage && (
                                <div className="mt-3">
                                    <input
                                        type="text"
                                        placeholder="Mô tả ảnh (Alt text)"
                                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm outline-none focus:border-primary"
                                        value={currentPost.featuredImageAlt}
                                        onChange={(e) => updateCurrentPost({ featuredImageAlt: e.target.value })}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Organization */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                            <h3 className="font-medium text-white mb-3">Phân loại</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Danh mục</label>
                                    <select
                                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                                        value={currentPost.category}
                                        onChange={(e) => updateCurrentPost({ category: e.target.value })}
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Tags</label>
                                    <input
                                        type="text"
                                        placeholder="forex, trading, hướng dẫn"
                                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                                        value={currentPost.tags.join(', ')}
                                        onChange={(e) => updateCurrentPost({
                                            tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Quản lý Bài viết</h1>
                    <p className="text-slate-400 text-sm mt-1">{posts.length} bài viết</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
                >
                    <Plus size={18} />
                    Viết bài mới
                </button>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Tìm bài viết..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 outline-none focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 flex flex-col items-center justify-center">
                    <Loader2 size={40} className="text-primary animate-spin mb-4" />
                    <p className="text-slate-400">Đang tải bài viết...</p>
                </div>
            ) : (
                /* Posts Table */
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Bài viết</th>
                                    <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Danh mục</th>
                                    <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4">SEO</th>
                                    <th className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Trạng thái</th>
                                    <th className="text-right text-xs font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {filteredPosts.map((post) => (
                                    <tr key={post.id} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {post.featuredImage ? (
                                                    <img
                                                        src={post.featuredImage}
                                                        alt={post.featuredImageAlt}
                                                        className="w-12 h-12 object-cover rounded-lg"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                                                        <FileText size={20} className="text-slate-600" />
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <p className="font-medium text-white truncate max-w-xs">{post.title}</p>
                                                    <p className="text-xs text-slate-500">/{post.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getSeoScore(post) >= 75 ? 'bg-green-500/20 text-green-500' :
                                                getSeoScore(post) >= 50 ? 'bg-yellow-500/20 text-yellow-500' :
                                                    'bg-red-500/20 text-red-500'
                                                }`}>
                                                {getSeoScore(post)}%
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => togglePublish(post.id)}
                                                className={`flex items-center gap-1 text-sm ${post.isPublished ? 'text-green-500' : 'text-slate-500'
                                                    }`}
                                            >
                                                {post.isPublished ? (
                                                    <><Eye size={14} /> Đã đăng</>
                                                ) : (
                                                    <><EyeOff size={14} /> Nháp</>
                                                )}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                                >
                                                    <Edit2 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-700 rounded-lg transition-colors"
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
            )}
        </div>
    );
}

function ChecklistItem({ checked, label }: { checked: boolean; label: string }) {
    return (
        <div className={`flex items-center gap-2 text-sm ${checked ? 'text-green-500' : 'text-slate-500'}`}>
            {checked ? <CheckCircle size={14} /> : <div className="w-3.5 h-3.5 rounded-full border border-slate-600" />}
            {label}
        </div>
    );
}

function CollapsibleSection({ title, description, children }: {
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
            >
                <div className="text-left">
                    <h3 className="font-medium text-white">{title}</h3>
                    <p className="text-sm text-slate-500">{description}</p>
                </div>
                <Edit2 size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-5 pb-5 border-t border-slate-800">
                    <div className="pt-4">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
