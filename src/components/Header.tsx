"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn, getRelativePath } from "@/lib/utils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const pathname = usePathname();

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { label: "TRANG CHỦ", href: "/" },
        { label: "TIN TỨC", href: "/tin-tuc" },
        { label: "KHUYẾN MÃI", href: "/khuyen-mai" },
        { label: "SO SÁNH", href: "/so-sanh" },
        { label: "REVIEW SÀN", href: "/danh-gia-san" },
        { label: "KIẾN THỨC", href: "/kien-thuc-forex" },
        { label: "CÔNG CỤ", href: "/cong-cu" },
        { label: "THUẬT NGỮ", href: "/thuat-ngu" },
        { label: "LIÊN HỆ", href: "/lien-he" },
    ];



    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
            <div className="container-custom h-24 flex items-center justify-between">
                {/* Logo - Made larger as requested */}
                <a href={getRelativePath(pathname, "/")} className="flex items-center gap-2 group shrink-0">
                    <div className="p-1">
                        {!logoError ? (
                            <img
                                src={getRelativePath(pathname, "/logo-khong-nen-san-uy-tin.png")}
                                alt="Sàn Uy Tín"
                                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
                                onError={() => setLogoError(true)}
                            />
                        ) : null}

                        <span className={`${!logoError ? 'hidden' : ''} flex items-center gap-2`}>
                            <span className="font-extrabold text-2xl md:text-3xl text-primary tracking-tighter">Sàn <span className="text-foreground dark:text-white">Uy Tín</span></span>
                        </span>
                    </div>
                </a>

                {/* Desktop Menu - Uppercase and Bold */}
                <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={getRelativePath(pathname, item.href)}
                            className={cn(
                                "text-sm font-bold transition-colors relative group uppercase tracking-wide",
                                isActive(item.href)
                                    ? "text-primary"
                                    : "text-foreground/90 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                            )}
                        >
                            {item.label}
                            <span className={cn(
                                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                                isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                            )}></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 xl:hidden">
                    <button
                        className="p-2 text-muted-foreground dark:text-slate-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="xl:hidden bg-background/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-border absolute w-full left-0 top-24 shadow-2xl animate-fade-in z-50 h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="container-custom py-8 flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={getRelativePath(pathname, item.href)}
                                className={cn(
                                    "text-lg font-bold py-4 border-b border-dashed border-gray-100 dark:border-slate-800 last:border-0 transition-colors uppercase",
                                    isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
