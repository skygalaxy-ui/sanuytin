"use client";

import Link from "next/link";
import { Facebook, Twitter, ShieldAlert, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { getRelativePath } from "@/lib/utils";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer id="contact" className="bg-[#0b0e14] dark:bg-[#0b0e14] text-slate-400 pt-24 pb-12 border-t border-slate-800 dark:border-border relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-12 gap-14 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <a href={getRelativePath(pathname, "/")} className="inline-block group">
                            <span className="font-bold text-2xl text-white tracking-tight group-hover:text-primary transition-colors">Sàn Uy Tín</span>
                        </a>
                        <p className="text-base text-slate-300 leading-8 pr-4">
                            Cổng thông tin đánh giá sàn Forex minh bạch, uy tín hàng đầu tại Việt Nam.
                            Chúng tôi cung cấp dữ liệu thực và phân tích chuyên sâu giúp nhà đầu tư đưa ra quyết định an toàn.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <SocialButton icon={<Mail size={18} />} href="mailto:sanuytin.net@gmail.com" label="Email" />
                            <SocialButton icon={<Twitter size={18} />} href="https://x.com/sanuytin" label="Twitter" />
                            <SocialButton
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.402-.09.375-.293 1.191-.333 1.357-.053.218-.174.264-.402.158-1.492-.693-2.422-2.875-2.422-4.628 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.83 0 4.071-2.563 7.339-6.12 7.339-1.195 0-2.319-.621-2.703-1.353l-.734 2.793c-.266 1.018-.987 2.293-1.473 3.072 1.111.328 2.285.505 3.492.505 6.626 0 12-5.373 12-12C24 5.372 18.627 0 12 0z" /></svg>}
                                href="https://www.pinterest.com/sanuytin/"
                                label="Pinterest"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 text-lg">Khám phá</h4>
                        <ul className="space-y-4 text-base">
                            <FooterLink pathname={pathname} href="/danh-gia-san">Top 10 Sàn Forex 2026</FooterLink>
                            <FooterLink pathname={pathname} href="/so-sanh">So sánh chi tiết</FooterLink>
                            <FooterLink pathname={pathname} href="/kien-thuc-forex">Kiến thức giao dịch</FooterLink>
                            <FooterLink pathname={pathname} href="/cong-cu">Công cụ hỗ trợ</FooterLink>
                        </ul>
                    </div>

                    {/* Risk Warning & Disclaimer */}
                    <div className="md:col-span-5">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-7 relative overflow-hidden group hover:border-slate-600/50 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-500/40"></div>
                            <h4 className="text-slate-300 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <ShieldAlert size={18} className="text-slate-400" />
                                Tuyên bố miễn trừ trách nhiệm
                            </h4>
                            <div className="space-y-3 text-sm text-slate-500 leading-relaxed text-justify">
                                <p>
                                    Giao dịch Forex và CFD là sản phẩm tài chính có đòn bẩy, tiềm ẩn rủi ro cao và có thể không phù hợp với tất cả nhà đầu tư.
                                </p>
                                <p>
                                    Nội dung tại <strong className="text-slate-400">SanUyTin.net</strong> chỉ mang tính chất cung cấp thông tin tham khảo, không cấu thành lời khuyên đầu tư.
                                    Bạn chịu hoàn toàn trách nhiệm với các quyết định tài chính của mình.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-slate-600">
                    <p className="text-slate-500">&copy; 2026 SanUyTin.net. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
            title={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children, pathname }: { href: string, children: React.ReactNode, pathname: string }) {
    return (
        <li>
            <a href={getRelativePath(pathname, href)} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                {children}
            </a>
        </li>
    );
}
