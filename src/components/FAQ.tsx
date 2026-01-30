"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const faqs = [
        {
            question: "Forex là gì?",
            answer: "Forex, hay còn gọi là thị trường ngoại hối, là thị trường tài chính toàn cầu nơi diễn ra các hoạt động mua bán cặp tiền tệ quốc tế. Forex là thị trường tài chính lớn nhất và có tính thanh khoản cao nhất trên thế giới."
        },
        {
            question: "Làm thế nào để bắt đầu giao dịch Forex ?",
            answer: "Để bắt đầu giao dịch Forex, bạn cần chọn một sàn giao dịch uy tín, mở tài khoản giao dịch, nạp tiền và làm quen với nền tảng giao dịch. Một cách tốt để bắt đầu là sử dụng tài khoản demo để thực hành mà không có rủi ro vốn."
        },
        {
            question: "Các cặp tiền tệ nào là phổ biến nhất ?",
            answer: "Các cặp tiền tệ phổ biến nhất bao gồm EUR/USD, GBP/USD, USD/JPY, USD/CHF. Đây là những cặp tiền tệ có tính thanh khoản cao nhất và thường có spread thấp, rất phù hợp cho các nhà giao dịch mới."
        },
        {
            question: "Spread và hoa hồng là gì ?",
            answer: "Spread là chênh lệch giữa giá mua và giá bán của một cặp tiền tệ, còn hoa hồng là khoản phí mà sàn giao dịch thu từ mỗi giao dịch. Spread và hoa hồng thấp giúp giảm chi phí giao dịch và tối đa hoá lợi nhuận của bạn."
        },
        {
            question: "Đòn bẩy là gì ?",
            answer: "Đòn bẩy là công cụ tài chính cho phép bạn giao dịch với số vốn lớn hơn số vốn bạn có sẵn trong tài khoản. Ví dụ, với đòn bẩy 1:100, bạn có thể mở lệnh giao dịch trị giá $10.000 chỉ với $100 trong tài khoản."
        },
        {
            question: "Tôi có thể giao dịch Forex ở đâu ?",
            answer: "Forex là thị trường toàn cầu, hoạt động 24 giờ mỗi ngày từ thứ Hai đến thứ Sáu. Bạn có thể giao dịch từ bất kỳ đâu có kết nối Internet, chỉ cần truy cập vào nền tảng giao dịch của sàn bạn chọn."
        },
        {
            question: "Giao dịch Forex có gì rủi ro ?",
            answer: "Giao dịch Forex đi kèm với nhiều rủi ro như biến động giá mạnh, đòn bẩy cao có thể tạo ra lỗ lớn, rủi ro từ sàn giao dịch không uy tín. Do đó, quản lý rủi ro và chọn sàn giao dịch uy tín là rất quan trọng."
        },
        {
            question: "Phân tích kỹ thuật có cần thiết không ?",
            answer: "Có, phân tích kỹ thuật là công cụ quan trọng giúp dự đoán xu hướng giá và quyết định thời điểm ra vào giao dịch."
        },
        {
            question: "Làm sao để giảm thiểu thua lỗ khi giao dịch?",
            answer: "Sử dụng lệnh Stop lost (dừng lỗ), không đặt cược quá nhiều vào một giao dịch và luôn tuân thủ kế hoạch giao dịch."
        },
        {
            question: "Làm thế nào để chọn sàn giao dịch Forex uy tín ?",
            answer: "Chọn sàn giao dịch có giấy phép từ các cơ quan quản lý tài chính uy tín, có dịch vụ hỗ trợ khách hàng tốt, nền tảng giao dịch mạnh mẽ và điều kiện giao dịch minh bạch như spread thấp, không có phí ẩn."
        }
    ];

    return (
        <section className="py-16 bg-background relative z-10">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground">Câu Hỏi Thường Gặp</h2>
                    <p className="text-muted-foreground mt-3 text-base">Giải đáp thắc mắc cho nhà đầu tư mới.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "border rounded-lg overflow-hidden transition-all duration-300",
            isOpen ? "border-primary/50 bg-secondary/30 shadow-md" : "border-border/60 bg-card hover:border-primary/30"
        )}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left transition-colors select-none"
                aria-expanded={isOpen}
            >
                <span className={cn("font-bold text-base pr-4 transition-colors", isOpen ? "text-primary" : "text-foreground")}>
                    {question}
                </span>
                <span className={cn(
                    "p-1.5 rounded-full transition-all duration-300 shrink-0",
                    isOpen ? "bg-primary text-white rotate-180" : "bg-secondary text-muted-foreground"
                )}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>

            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <div className="p-4 pt-0 text-muted-foreground leading-relaxed border-t border-dashed border-border/50 pt-3 text-sm">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
