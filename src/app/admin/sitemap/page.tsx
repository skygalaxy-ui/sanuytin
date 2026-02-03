"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Map, ChevronRight, ChevronDown, ExternalLink, AlertCircle,
    CheckCircle, XCircle, FileText, Home, Layers, BookOpen,
    HelpCircle, Gift, Wrench, Phone, BarChart3, Link2
} from "lucide-react";

interface PageNode {
    id: string;
    path: string;
    title: string;
    icon: React.ReactNode;
    children?: PageNode[];
    seo: {
        hasMetaTitle: boolean;
        hasMetaDescription: boolean;
        internalLinksCount: number;
        externalLinksCount: number;
        hasH1: boolean;
        wordCount: number;
        status: "good" | "warning" | "error";
    };
}

// Site structure with SEO analysis
const siteStructure: PageNode[] = [
    {
        id: "home",
        path: "/",
        title: "Trang chủ",
        icon: <Home size={16} />,
        seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 15, externalLinksCount: 5, hasH1: true, wordCount: 850, status: "good" },
        children: [
            {
                id: "danh-gia-san",
                path: "/danh-gia-san",
                title: "Đánh giá sàn Forex",
                icon: <BarChart3 size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 20, externalLinksCount: 10, hasH1: true, wordCount: 1200, status: "good" },
                children: [
                    { id: "vantage", path: "/vantage", title: "Đánh giá Vantage", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 8, externalLinksCount: 2, hasH1: true, wordCount: 2500, status: "good" } },
                    { id: "exness", path: "/exness", title: "Đánh giá Exness", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 7, externalLinksCount: 2, hasH1: true, wordCount: 2300, status: "good" } },
                    { id: "xm", path: "/xm", title: "Đánh giá XM", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 6, externalLinksCount: 2, hasH1: true, wordCount: 2100, status: "good" } },
                    { id: "icmarkets", path: "/icmarkets", title: "Đánh giá IC Markets", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 5, externalLinksCount: 2, hasH1: true, wordCount: 1900, status: "good" } },
                    { id: "fbs", path: "/fbs", title: "Đánh giá FBS", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 5, externalLinksCount: 2, hasH1: true, wordCount: 1800, status: "good" } },
                ]
            },
            {
                id: "so-sanh",
                path: "/so-sanh",
                title: "So sánh sàn",
                icon: <Layers size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 12, externalLinksCount: 0, hasH1: true, wordCount: 600, status: "good" },
            },
            {
                id: "kien-thuc-forex",
                path: "/kien-thuc-forex",
                title: "Kiến thức Forex",
                icon: <BookOpen size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 8, externalLinksCount: 3, hasH1: true, wordCount: 500, status: "good" },
                children: [
                    { id: "forex-la-gi", path: "/kien-thuc-forex/forex-la-gi", title: "Forex là gì?", icon: <FileText size={16} />, seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 10, externalLinksCount: 2, hasH1: true, wordCount: 3000, status: "good" } },
                ]
            },
            {
                id: "thuat-ngu",
                path: "/thuat-ngu",
                title: "Thuật ngữ Forex",
                icon: <HelpCircle size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 25, externalLinksCount: 0, hasH1: true, wordCount: 4500, status: "good" },
            },
            {
                id: "tin-tuc",
                path: "/tin-tuc",
                title: "Tin tức",
                icon: <FileText size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 15, externalLinksCount: 5, hasH1: true, wordCount: 400, status: "good" },
            },
            {
                id: "khuyen-mai",
                path: "/khuyen-mai",
                title: "Khuyến mãi",
                icon: <Gift size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 8, externalLinksCount: 10, hasH1: true, wordCount: 350, status: "good" },
            },
            {
                id: "cong-cu",
                path: "/cong-cu",
                title: "Công cụ trading",
                icon: <Wrench size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: false, internalLinksCount: 4, externalLinksCount: 0, hasH1: true, wordCount: 200, status: "warning" },
            },
            {
                id: "lien-he",
                path: "/lien-he",
                title: "Liên hệ",
                icon: <Phone size={16} />,
                seo: { hasMetaTitle: true, hasMetaDescription: true, internalLinksCount: 2, externalLinksCount: 3, hasH1: true, wordCount: 150, status: "warning" },
            },
        ]
    }
];

function TreeNode({ node, level = 0, expanded, onToggle }: { node: PageNode; level?: number; expanded: string[]; onToggle: (id: string) => void }) {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded.includes(node.id);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "good": return "text-green-500";
            case "warning": return "text-yellow-500";
            case "error": return "text-red-500";
            default: return "text-gray-400";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "good": return <CheckCircle size={14} className="text-green-500" />;
            case "warning": return <AlertCircle size={14} className="text-yellow-500" />;
            case "error": return <XCircle size={14} className="text-red-500" />;
            default: return null;
        }
    };

    return (
        <div>
            <div
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50/50 transition-colors group ${level === 0 ? 'bg-gray-50/30' : ''}`}
                style={{ marginLeft: level * 24 }}
            >
                {/* Expand/Collapse Button */}
                {hasChildren ? (
                    <button onClick={() => onToggle(node.id)} className="p-1 hover:bg-gray-200 rounded">
                        {isExpanded ? <ChevronDown size={14} className="text-gray-500" /> : <ChevronRight size={14} className="text-gray-500" />}
                    </button>
                ) : (
                    <div className="w-6" />
                )}

                {/* Icon */}
                <div className={`${getStatusColor(node.seo.status)}`}>
                    {node.icon}
                </div>

                {/* Title & Path */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 truncate">{node.title}</span>
                        <span className="text-xs text-gray-400 font-mono">{node.path}</span>
                    </div>
                </div>

                {/* SEO Stats */}
                <div className="hidden md:flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1" title="Internal Links">
                        <Link2 size={12} className="text-blue-500" />
                        <span className="text-gray-500">{node.seo.internalLinksCount}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Word Count">
                        <FileText size={12} className="text-gray-400" />
                        <span className="text-gray-500">{node.seo.wordCount}</span>
                    </div>
                    {getStatusIcon(node.seo.status)}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                        href={node.path}
                        target="_blank"
                        className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded"
                        title="Xem trang"
                    >
                        <ExternalLink size={14} />
                    </Link>
                    <Link
                        href={`/admin/pages?edit=${node.id}`}
                        className="p-1.5 text-gray-500 hover:text-primary hover:bg-gray-200 rounded"
                        title="Chỉnh sửa"
                    >
                        <FileText size={14} />
                    </Link>
                </div>
            </div>

            {/* Children */}
            {hasChildren && isExpanded && (
                <div className="border-l border-gray-200 ml-6">
                    {node.children!.map(child => (
                        <TreeNode key={child.id} node={child} level={level + 1} expanded={expanded} onToggle={onToggle} />
                    ))}
                </div>
            )}
        </div>
    );
}

function countAllPages(nodes: PageNode[]): number {
    return nodes.reduce((count, node) => {
        return count + 1 + (node.children ? countAllPages(node.children) : 0);
    }, 0);
}

function countByStatus(nodes: PageNode[], status: string): number {
    return nodes.reduce((count, node) => {
        const match = node.seo.status === status ? 1 : 0;
        return count + match + (node.children ? countByStatus(node.children, status) : 0);
    }, 0);
}

function getTotalInternalLinks(nodes: PageNode[]): number {
    return nodes.reduce((count, node) => {
        return count + node.seo.internalLinksCount + (node.children ? getTotalInternalLinks(node.children) : 0);
    }, 0);
}

export default function SitemapPage() {
    const [expanded, setExpanded] = useState<string[]>(["home", "danh-gia-san", "kien-thuc-forex"]);

    const toggleNode = (id: string) => {
        setExpanded(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const expandAll = () => {
        const getAllIds = (nodes: PageNode[]): string[] => {
            return nodes.flatMap(n => [n.id, ...(n.children ? getAllIds(n.children) : [])]);
        };
        setExpanded(getAllIds(siteStructure));
    };

    const collapseAll = () => {
        setExpanded([]);
    };

    const totalPages = countAllPages(siteStructure);
    const goodPages = countByStatus(siteStructure, "good");
    const warningPages = countByStatus(siteStructure, "warning");
    const errorPages = countByStatus(siteStructure, "error");
    const totalInternalLinks = getTotalInternalLinks(siteStructure);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Map className="text-primary" size={28} />
                        Sơ đồ Website (Sitemap)
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Cấu trúc link nội bộ và đánh giá SEO từng trang</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={expandAll} className="px-4 py-2 text-sm bg-gray-50/80 hover:bg-gray-200 text-gray-900 rounded-xl transition-colors">
                        Mở tất cả
                    </button>
                    <button onClick={collapseAll} className="px-4 py-2 text-sm bg-gray-50/80 hover:bg-gray-200 text-gray-900 rounded-xl transition-colors">
                        Thu gọn
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/30 rounded-2xl p-4">
                    <p className="text-gray-500 text-sm">Tổng số trang</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{totalPages}</p>
                </div>
                <div className="bg-gradient-to-br from-sky-500/20 to-sky-600/10 border border-sky-500/30 rounded-2xl p-4">
                    <p className="text-gray-500 text-sm">Internal Links</p>
                    <p className="text-2xl font-bold text-sky-400 mt-1">{totalInternalLinks}</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        <CheckCircle size={14} className="text-emerald-400" /> Tốt
                    </p>
                    <p className="text-2xl font-bold text-emerald-400 mt-1">{goodPages}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        <AlertCircle size={14} className="text-amber-400" /> Cần cải thiện
                    </p>
                    <p className="text-2xl font-bold text-amber-400 mt-1">{warningPages}</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        <XCircle size={14} className="text-red-400" /> Lỗi
                    </p>
                    <p className="text-2xl font-bold text-red-400 mt-1">{errorPages}</p>
                </div>
            </div>

            {/* Legend */}
            <div className="bg-white/50 backdrop-blur border border-gray-200 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Chú thích đánh giá SEO</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-gray-500">Tốt - Đạt chuẩn SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-yellow-500" />
                        <span className="text-gray-500">Cần cải thiện</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link2 size={16} className="text-blue-500" />
                        <span className="text-gray-500">Số link nội bộ</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FileText size={16} className="text-gray-400" />
                        <span className="text-gray-500">Số từ trên trang</span>
                    </div>
                </div>
            </div>

            {/* Tree View */}
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-gray-900">Cấu trúc Website</h2>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="hidden md:block">Internal Links</span>
                        <span className="hidden md:block">Words</span>
                        <span>Status</span>
                    </div>
                </div>

                <div className="space-y-1">
                    {siteStructure.map(node => (
                        <TreeNode key={node.id} node={node} expanded={expanded} onToggle={toggleNode} />
                    ))}
                </div>
            </div>

            {/* SEO Issues */}
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6">
                <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="text-amber-400" size={20} />
                    Các vấn đề cần xử lý
                </h2>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <AlertCircle size={18} className="text-amber-400 mt-0.5" />
                        <div>
                            <p className="text-gray-900 font-medium">/cong-cu - Thiếu Meta Description</p>
                            <p className="text-gray-500 text-sm">Thêm mô tả ngắn 150-160 ký tự cho trang Công cụ trading</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <AlertCircle size={18} className="text-amber-400 mt-0.5" />
                        <div>
                            <p className="text-gray-900 font-medium">/lien-he - Ít internal links</p>
                            <p className="text-gray-500 text-sm">Chỉ có 2 internal links. Nên thêm link đến các trang liên quan</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-sky-500/10 border border-sky-500/20 rounded-xl">
                        <Link2 size={18} className="text-sky-400 mt-0.5" />
                        <div>
                            <p className="text-gray-900 font-medium">Đề xuất: Thêm liên kết nội bộ</p>
                            <p className="text-gray-500 text-sm">Các trang đánh giá sàn nên link sang nhau để tăng internal linking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
