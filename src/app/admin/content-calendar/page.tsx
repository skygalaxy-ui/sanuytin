"use client";

import { useState, useEffect } from "react";
import {
    Calendar, Plus, Edit2, Trash2, Clock, CheckCircle, AlertCircle,
    ChevronLeft, ChevronRight, FileText, Eye, Bell, RefreshCw, X
} from "lucide-react";
import { getScheduledContent, createScheduledContent, updateScheduledContent, deleteScheduledContent, ScheduledContent } from "@/lib/supabase";

// Generate calendar days
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};

export default function ContentCalendarPage() {
    const [posts, setPosts] = useState<ScheduledContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [view, setView] = useState<"calendar" | "list">("calendar");
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState<ScheduledContent | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        type: "article" as "article" | "update" | "promotion" | "review",
        status: "draft" as "draft" | "scheduled" | "published" | "overdue",
        scheduled_date: "",
        author: "Admin",
        category: "",
        notes: ""
    });

    // Load data from Supabase
    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        setLoading(true);
        const data = await getScheduledContent();
        setPosts(data);
        setLoading(false);
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const getPostsForDate = (dateStr: string) => {
        return posts.filter(p => p.scheduled_date.startsWith(dateStr));
    };

    const getTypeBadge = (type: string) => {
        const colors = {
            article: "bg-blue-500",
            update: "bg-yellow-500",
            promotion: "bg-green-500",
            review: "bg-purple-500",
        };
        return colors[type as keyof typeof colors] || "bg-slate-500";
    };

    const getStatusBadge = (status: string) => {
        const configs = {
            draft: { color: "bg-slate-500/20 text-slate-400", label: "Nháp" },
            scheduled: { color: "bg-blue-500/20 text-blue-400", label: "Đã lên lịch" },
            published: { color: "bg-green-500/20 text-green-400", label: "Đã đăng" },
            overdue: { color: "bg-red-500/20 text-red-400", label: "Quá hạn" },
        };
        const config = configs[status as keyof typeof configs] || configs.draft;
        return <span className={`text-xs px-2 py-1 rounded ${config.color}`}>{config.label}</span>;
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
    };

    // CRUD operations
    const handleSubmit = async () => {
        if (!formData.title || !formData.scheduled_date) return;

        if (editingPost) {
            await updateScheduledContent(editingPost.id, formData);
        } else {
            await createScheduledContent(formData);
        }

        setShowModal(false);
        setEditingPost(null);
        setFormData({
            title: "",
            type: "article",
            status: "draft",
            scheduled_date: "",
            author: "Admin",
            category: "",
            notes: ""
        });
        loadContent();
    };

    const handleEdit = (post: ScheduledContent) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            type: post.type,
            status: post.status,
            scheduled_date: post.scheduled_date.split("T")[0],
            author: post.author,
            category: post.category,
            notes: post.notes || ""
        });
        setShowModal(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
            await deleteScheduledContent(id);
            loadContent();
        }
    };

    const openNewPostModal = () => {
        setEditingPost(null);
        setFormData({
            title: "",
            type: "article",
            status: "draft",
            scheduled_date: selectedDate || new Date().toISOString().split("T")[0],
            author: "Admin",
            category: "",
            notes: ""
        });
        setShowModal(true);
    };

    // Stats
    const draftCount = posts.filter(p => p.status === "draft").length;
    const scheduledCount = posts.filter(p => p.status === "scheduled").length;
    const overdueCount = posts.filter(p => p.status === "overdue").length;

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <RefreshCw className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Calendar className="text-primary" size={28} />
                        Lịch Nội Dung
                        <span className="text-sm font-normal text-green-500 bg-green-500/10 px-2 py-0.5 rounded">LIVE</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Dữ liệu từ Supabase • {posts.length} bài viết</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={loadContent}
                        className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
                    >
                        <RefreshCw size={16} />
                    </button>
                    <div className="flex bg-slate-800 rounded-lg p-1">
                        <button
                            onClick={() => setView("calendar")}
                            className={`px-3 py-1.5 rounded text-sm ${view === "calendar" ? "bg-primary text-white" : "text-slate-400 hover:text-white"}`}
                        >
                            Lịch
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={`px-3 py-1.5 rounded text-sm ${view === "list" ? "bg-primary text-white" : "text-slate-400 hover:text-white"}`}
                        >
                            Danh sách
                        </button>
                    </div>
                    <button
                        onClick={openNewPostModal}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                    >
                        <Plus size={18} />
                        Thêm bài mới
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Tổng bài viết</p>
                    <p className="text-2xl font-bold text-white mt-1">{posts.length}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock size={14} className="text-blue-500" /> Đã lên lịch
                    </p>
                    <p className="text-2xl font-bold text-blue-500 mt-1">{scheduledCount}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <FileText size={14} className="text-slate-400" /> Bản nháp
                    </p>
                    <p className="text-2xl font-bold text-slate-400 mt-1">{draftCount}</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        <AlertCircle size={14} className="text-red-500" /> Quá hạn
                    </p>
                    <p className="text-2xl font-bold text-red-500 mt-1">{overdueCount}</p>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span className="text-slate-400">Bài viết</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-yellow-500"></div>
                    <span className="text-slate-400">Cập nhật</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span className="text-slate-400">Khuyến mãi</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-purple-500"></div>
                    <span className="text-slate-400">Đánh giá</span>
                </div>
            </div>

            {view === "calendar" ? (
                /* Calendar View */
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                        <button onClick={prevMonth} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white">
                            <ChevronLeft size={20} />
                        </button>
                        <h2 className="text-xl font-bold text-white">{monthNames[month]} {year}</h2>
                        <button onClick={nextMonth} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayNames.map(day => (
                            <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {/* Empty cells for days before first day of month */}
                        {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-24 bg-slate-800/30 rounded-lg"></div>
                        ))}

                        {/* Days of month */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                            const dayPosts = getPostsForDate(dateStr);
                            const today = new Date().toISOString().split("T")[0];
                            const isToday = dateStr === today;
                            const isSelected = selectedDate === dateStr;

                            return (
                                <div
                                    key={day}
                                    onClick={() => setSelectedDate(dateStr)}
                                    className={`h-24 p-2 rounded-lg cursor-pointer transition-colors ${isToday ? "bg-primary/20 border border-primary" : "bg-slate-800/50 hover:bg-slate-800"
                                        } ${isSelected ? "ring-2 ring-primary" : ""}`}
                                >
                                    <div className={`text-sm font-medium mb-1 ${isToday ? "text-primary" : "text-white"}`}>
                                        {day}
                                    </div>
                                    <div className="space-y-1">
                                        {dayPosts.slice(0, 2).map(post => (
                                            <div
                                                key={post.id}
                                                className={`text-xs px-1.5 py-0.5 rounded truncate text-white ${getTypeBadge(post.type)}`}
                                                title={post.title}
                                            >
                                                {post.title.substring(0, 15)}...
                                            </div>
                                        ))}
                                        {dayPosts.length > 2 && (
                                            <div className="text-xs text-slate-400">+{dayPosts.length - 2} more</div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                /* List View */
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="divide-y divide-slate-800">
                        {posts.sort((a, b) => a.scheduled_date.localeCompare(b.scheduled_date)).map(post => (
                            <div key={post.id} className={`p-4 hover:bg-slate-800/50 ${post.status === "overdue" ? "bg-red-500/5" : ""}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-1 h-12 rounded ${getTypeBadge(post.type)}`}></div>
                                        <div>
                                            <h3 className="font-medium text-white">{post.title}</h3>
                                            <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {formatDate(post.scheduled_date)}
                                                </span>
                                                <span>{post.category}</span>
                                                {getStatusBadge(post.status)}
                                            </div>
                                            {post.notes && (
                                                <p className="text-sm text-yellow-400 mt-1">📝 {post.notes}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-700 rounded-lg"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Reminders */}
            {overdueCount > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Bell className="text-red-500" size={20} />
                        Nhắc nhở: {overdueCount} bài cần cập nhật
                    </h3>
                    <div className="space-y-2">
                        {posts.filter(p => p.status === "overdue").map(post => (
                            <div key={post.id} className="flex items-center justify-between text-sm bg-red-500/10 p-2 rounded">
                                <span className="text-white">{post.title}</span>
                                <span className="text-red-400">Hạn: {formatDate(post.scheduled_date)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-lg mx-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-white">
                                {editingPost ? "Sửa bài viết" : "Thêm bài viết mới"}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-f-4">
                            <div className="mb-4">
                                <label className="block text-sm text-slate-400 mb-1">Tiêu đề *</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                                    placeholder="Nhập tiêu đề bài viết..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Loại</label>
                                    <select
                                        value={formData.type}
                                        onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                                    >
                                        <option value="article">Bài viết</option>
                                        <option value="update">Cập nhật</option>
                                        <option value="promotion">Khuyến mãi</option>
                                        <option value="review">Đánh giá</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Trạng thái</label>
                                    <select
                                        value={formData.status}
                                        onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                                    >
                                        <option value="draft">Nháp</option>
                                        <option value="scheduled">Đã lên lịch</option>
                                        <option value="published">Đã đăng</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Ngày đăng *</label>
                                    <input
                                        type="date"
                                        value={formData.scheduled_date}
                                        onChange={e => setFormData({ ...formData, scheduled_date: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Danh mục</label>
                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                                        placeholder="VD: Đánh giá sàn"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-400 mb-1">Ghi chú</label>
                                <textarea
                                    value={formData.notes}
                                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white h-20"
                                    placeholder="Ghi chú thêm..."
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
                                >
                                    Hủy
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg"
                                >
                                    {editingPost ? "Cập nhật" : "Tạo mới"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
