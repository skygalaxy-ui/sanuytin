"use client";

import { useState, useEffect } from "react";
import { Star, User, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

interface Rating {
    id: string;
    user_name: string;
    rating: number;
    comment: string;
    created_at: string;
}

interface UserRatingProps {
    targetSlug: string;
    title?: string;
}

export default function UserRating({ targetSlug, title = "Đánh giá của người dùng" }: UserRatingProps) {
    const [ratings, setRatings] = useState<Rating[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        userName: "",
        rating: 5,
        comment: ""
    });

    const [hover, setHover] = useState(0);

    useEffect(() => {
        fetchRatings();
    }, [targetSlug]);

    const fetchRatings = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('user_ratings')
                .select('*')
                .eq('target_slug', targetSlug)
                .eq('is_approved', true)
                .order('created_at', { ascending: false });

            if (error) {
                // If table doesn't exist (PGRST205) or no rows (PGRST116), just show empty
                if (error.code === 'PGRST116' || error.code === 'PGRST205' || error.message.includes('not found')) {
                    setRatings([]);
                } else {
                    console.error("Error fetching ratings:", error);
                }
            } else {
                setRatings(data || []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.userName || formData.rating === 0) {
            setError("Vui lòng nhập tên và chọn số sao.");
            return;
        }

        try {
            setSubmitting(true);
            setError(null);

            const { error } = await supabase
                .from('user_ratings')
                .insert([{
                    target_slug: targetSlug,
                    user_name: formData.userName,
                    rating: formData.rating,
                    comment: formData.comment,
                    is_approved: true // Auto-approve for now
                }]);

            if (error) throw error;

            setSubmitted(true);
            setFormData({ userName: "", rating: 5, comment: "" });
            fetchRatings();
        } catch (err: any) {
            console.error("Error submitting rating:", err);
            setError("Có lỗi xảy ra khi gửi đánh giá. Có thể cơ sở dữ liệu chưa sẵn sàng.");
        } finally {
            setSubmitting(false);
        }
    };

    const averageRating = ratings.length > 0
        ? (ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length).toFixed(1)
        : "5.0";

    return (
        <div className="bg-card border border-border rounded-2xl overflow-hidden mt-10">
            <div className="p-6 border-b border-border bg-secondary/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <MessageSquare className="text-primary" size={20} /> {title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Chia sẻ trải nghiệm của bạn về sàn này
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-background/50 px-4 py-2 rounded-xl border border-border">
                        <div className="text-2xl font-black text-primary">{averageRating}</div>
                        <div className="flex flex-col">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star
                                        key={star}
                                        size={14}
                                        fill={star <= Math.round(Number(averageRating)) ? "currentColor" : "none"}
                                    />
                                ))}
                            </div>
                            <div className="text-[10px] text-muted-foreground font-bold uppercase">
                                {ratings.length} Lượt đánh giá
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Review Form */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 bg-secondary/10 p-5 rounded-xl border border-border/50">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 space-y-2">
                                <label className="text-xs font-bold uppercase text-muted-foreground mr-2">Tên của bạn</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên..."
                                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                                    value={formData.userName}
                                    onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-muted-foreground">Chọn số sao</label>
                                <div className="flex items-center h-10 gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                            className="text-yellow-500 transition-transform hover:scale-125"
                                        >
                                            <Star
                                                size={24}
                                                fill={(hover || formData.rating) >= star ? "currentColor" : "none"}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-muted-foreground">Nhận xét (Tùy chọn)</label>
                            <textarea
                                placeholder="Cảm nhận của bạn về sàn này..."
                                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none h-24 resize-none"
                                value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            ></textarea>
                        </div>

                        {error && <p className="text-xs text-destructive font-medium">{error}</p>}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {submitting ? "Đang gửi..." : <><Send size={16} /> Gửi đánh giá</>}
                        </button>
                    </form>
                ) : (
                    <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-xl text-center space-y-3">
                        <div className="inline-flex p-3 bg-green-500/20 rounded-full text-green-500">
                            <CheckCircle2 size={32} />
                        </div>
                        <h4 className="font-bold text-lg">Cảm ơn bạn đã đánh giá!</h4>
                        <p className="text-sm text-muted-foreground">Đánh giá của bạn đã được ghi nhận và sẽ hiển thị sớm nhất.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-sm text-primary font-bold hover:underline"
                        >
                            Viết đánh giá khác
                        </button>
                    </div>
                )}

                {/* Ratings List */}
                <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground pb-2 border-b border-border">
                        Tất cả nhận xét ({ratings.length})
                    </h4>

                    {loading ? (
                        <div className="py-10 text-center text-muted-foreground animate-pulse">Đang tải đánh giá...</div>
                    ) : ratings.length === 0 ? (
                        <div className="py-10 text-center text-muted-foreground italic">Chưa có đánh giá nào. Hãy là người đầu tiên!</div>
                    ) : (
                        <div className="space-y-6">
                            {ratings.map((r) => (
                                <div key={r.id} className="flex gap-4 group">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User size={20} />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <div className="font-bold text-foreground text-sm">{r.user_name}</div>
                                            <div className="text-[10px] text-muted-foreground">
                                                {new Date(r.created_at).toLocaleDateString('vi-VN')}
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-500">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <Star key={star} size={10} fill={star <= r.rating ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                            {r.comment || "Người dùng không để lại nhận xét."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
