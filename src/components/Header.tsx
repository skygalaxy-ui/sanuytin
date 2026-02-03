"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap, Calculator, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn, getRelativePath } from "@/lib/utils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setResourcesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const mainMenuItems = [
        { label: "TRANG CHỦ", href: "/" },
        { label: "TIN TỨC", href: "/tin-tuc" },
        { label: "KHUYẾN MÃI", href: "/khuyen-mai" },
        { label: "SO SÁNH", href: "/so-sanh" },
        { label: "REVIEW SÀN", href: "/danh-gia-san" },
    ];

    const resourcesItems = [
        { label: "Kiến Thức Forex", href: "/kien-thuc-forex", icon: GraduationCap, description: "Học forex từ A-Z" },
        { label: "Công Cụ Giao Dịch", href: "/cong-cu", icon: Calculator, description: "Tính pip, margin..." },
        { label: "Thuật Ngữ", href: "/thuat-ngu", icon: BookOpen, description: "Giải thích thuật ngữ" },
    ];

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname?.startsWith(path)) return true;
        return false;
    };

    const isResourcesActive = resourcesItems.some(item => isActive(item.href));

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10">
            <div className="container-custom h-20 flex items-center justify-between">
                {/* Logo */}
                <a href={getRelativePath(pathname, "/")} className="flex items-center gap-2 group shrink-0">
                    <div className="p-1">
                        {!logoError ? (
                            <img
                                src={getRelativePath(pathname, "/logo-khong-nen-san-uy-tin.png")}
                                alt="Sàn Uy Tín"
                                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                                onError={() => setLogoError(true)}
                            />
                        ) : null}

                        <span className={`${!logoError ? 'hidden' : ''} flex items-center gap-2`}>
                            <span className="font-extrabold text-2xl md:text-3xl text-primary tracking-tighter">Sàn <span className="text-foreground dark:text-white">Uy Tín</span></span>
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden xl:flex items-center gap-1">
                    {mainMenuItems.map((item) => (
                        <a
                            key={item.label}
                            href={getRelativePath(pathname, item.href)}
                            className={cn(
                                "px-4 py-2 text-sm font-semibold transition-all relative group uppercase tracking-wide rounded-lg",
                                isActive(item.href)
                                    ? "text-white bg-white/10"
                                    : "text-slate-300 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {item.label}
                            <span className={cn(
                                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all rounded-full",
                                isActive(item.href) ? "w-8" : "w-0 group-hover:w-8"
                            )}></span>
                        </a>
                    ))}

                    {/* Resources Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setResourcesOpen(!resourcesOpen)}
                            className={cn(
                                "px-4 py-2 text-sm font-semibold transition-all flex items-center gap-1.5 uppercase tracking-wide rounded-lg",
                                isResourcesActive || resourcesOpen
                                    ? "text-white bg-white/10"
                                    : "text-slate-300 hover:text-white hover:bg-white/5"
                            )}
                        >
                            TÀI NGUYÊN
                            <ChevronDown
                                size={16}
                                className={cn(
                                    "transition-transform duration-200",
                                    resourcesOpen && "rotate-180"
                                )}
                            />
                        </button>

                        {/* Dropdown Panel */}
                        <div className={cn(
                            "absolute top-full right-0 mt-2 w-72 origin-top-right transition-all duration-200",
                            resourcesOpen
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        )}>
                            <div className="bg-slate-800/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden p-2">
                                {resourcesItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.label}
                                            href={getRelativePath(pathname, item.href)}
                                            onClick={() => setResourcesOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 p-3 rounded-lg transition-all group",
                                                isActive(item.href)
                                                    ? "bg-blue-500/20 text-white"
                                                    : "hover:bg-white/5 text-slate-300 hover:text-white"
                                            )}
                                        >
                                            <div className={cn(
                                                "p-2 rounded-lg transition-colors",
                                                isActive(item.href)
                                                    ? "bg-blue-500/30"
                                                    : "bg-white/5 group-hover:bg-blue-500/20"
                                            )}>
                                                <Icon size={20} className={cn(
                                                    isActive(item.href) ? "text-blue-400" : "text-slate-400 group-hover:text-blue-400"
                                                )} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{item.label}</div>
                                                <div className="text-xs text-slate-500">{item.description}</div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button - Refined */}
                    <a
                        href={getRelativePath(pathname, "/lien-he")}
                        className="ml-3 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white rounded-md transition-all hover:shadow-md hover:shadow-blue-500/20"
                    >
                        LIÊN HỆ
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 xl:hidden">
                    <button
                        className="p-2 text-slate-300 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="xl:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/5 absolute w-full left-0 top-20 shadow-2xl animate-fade-in z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="container-custom py-6 flex flex-col gap-1">
                        {mainMenuItems.map((item) => (
                            <a
                                key={item.label}
                                href={getRelativePath(pathname, item.href)}
                                className={cn(
                                    "text-base font-semibold py-3 px-4 transition-colors uppercase rounded-lg",
                                    isActive(item.href)
                                        ? "text-white bg-white/10"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Mobile Resources Section */}
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Tài Nguyên
                            </div>
                            {resourcesItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={getRelativePath(pathname, item.href)}
                                        className={cn(
                                            "flex items-center gap-3 py-3 px-4 transition-colors rounded-lg",
                                            isActive(item.href)
                                                ? "text-white bg-white/10"
                                                : "text-slate-300 hover:text-white hover:bg-white/5"
                                        )}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon size={18} className="text-blue-400" />
                                        <span className="font-medium">{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Mobile CTA - Refined */}
                        <a
                            href={getRelativePath(pathname, "/lien-he")}
                            className="mt-4 mx-4 py-2.5 text-center text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            LIÊN HỆ
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
