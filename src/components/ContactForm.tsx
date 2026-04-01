"use client";

import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        // FormSubmit requires _captcha to be false to avoid breaking AJAX
        formData.append("_captcha", "false"); 
        formData.append("_template", "table");
        
        const data = Object.fromEntries(formData);

        try {
            // Dùng dịch vụ FormSubmit gửi thẳng vào Gmail cực kỳ tiện lợi
            const res = await fetch('https://formsubmit.co/ajax/sanuytin.net@gmail.com', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Có lỗi xảy ra, vui lòng thử lại sau.');
            
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            (e.target as HTMLFormElement).reset(); // Xoá trắng chữ
        } catch (err) {
            setError('Không thể gửi tin nhắn. Vui lòng kiểm tra lại kết nối!');
        } finally {
            setLoading(false);
        }
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
                {error && <p className="text-red-500 mt-2 text-sm bg-red-50/10 p-2 rounded">{error}</p>}
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
                            name="name"
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
                            name="email"
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
                        name="phone"
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Chủ đề
                    </label>
                    <select name="subject" className="w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground">
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
                        name="message"
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
                    <a href="/chinh-sach-bao-mat" className="text-primary hover:underline">chính sách bảo mật</a>{" "}
                    của chúng tôi.
                </p>
            </form>
        </div>
    );
}
