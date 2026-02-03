"use client";

import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    if (submitted) {
        return (
            <div className="bg-secondary p-12 rounded-3xl border border-border text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Gửi thành công!</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">Gửi tin nhắn</h3>
                <p className="text-muted-foreground">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại sớm nhất</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Họ và tên <span className="text-destructive">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nguyễn Văn A"
                            required
                            className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Email <span className="text-destructive">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            required
                            className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Số điện thoại
                    </label>
                    <input
                        type="tel"
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Chủ đề
                    </label>
                    <select className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground">
                        <option value="">Chọn chủ đề</option>
                        <option value="consult">Tư vấn chọn sàn giao dịch</option>
                        <option value="partner">Hợp tác / Quảng cáo</option>
                        <option value="support">Hỗ trợ kỹ thuật</option>
                        <option value="feedback">Góp ý / Phản hồi</option>
                        <option value="other">Khác</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Nội dung <span className="text-destructive">*</span>
                    </label>
                    <textarea
                        rows={5}
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground text-foreground"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
                >
                    {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Đang gửi...
                        </>
                    ) : (
                        <>
                            Gửi tin nhắn
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                    Bằng việc gửi form, bạn đồng ý với{" "}
                    <a href="#" className="text-primary hover:underline">chính sách bảo mật</a>{" "}
                    của chúng tôi.
                </p>
            </form>
        </div>
    );
}
