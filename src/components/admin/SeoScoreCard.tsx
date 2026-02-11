"use client";

import { useMemo } from "react";
import {
    CheckCircle2, XCircle, AlertCircle, TrendingUp,
    FileText, Image as ImageIcon, Link2, Hash, Type, AlignLeft
} from "lucide-react";

interface SeoCheckItem {
    label: string;
    pass: boolean;
    warning?: boolean;
    detail: string;
    icon: React.ReactNode;
}

interface SeoScoreCardProps {
    title: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    content: string;
    slug: string;
    featuredImage: string;
    featuredImageAlt: string;
    tags: string[];
}

function countWords(html: string): number {
    const text = html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(w => w.length > 0).length;
}

export default function SeoScoreCard(props: SeoScoreCardProps) {
    const checks = useMemo<SeoCheckItem[]>(() => {
        const {
            title, metaTitle, metaDescription, excerpt,
            content, slug, featuredImage, featuredImageAlt, tags
        } = props;

        const effectiveMetaTitle = metaTitle || title;
        const effectiveMetaDesc = metaDescription || excerpt;
        const wordCount = countWords(content);
        const hasH2 = /<h2[\s>]/i.test(content);
        const hasInternalLink = /href=["']https?:\/\/(cachdautu\.com|sanuytin)/i.test(content) || /href=["']\//i.test(content);
        const imageCount = (content.match(/<img[\s]/gi) || []).length;

        const items: SeoCheckItem[] = [];

        // 1. Title length
        const titleLen = effectiveMetaTitle.length;
        if (titleLen === 0) {
            items.push({ label: "Tiêu đề SEO", pass: false, detail: "Chưa có tiêu đề", icon: <Type size={14} /> });
        } else if (titleLen > 60) {
            items.push({ label: "Tiêu đề SEO", pass: false, warning: true, detail: `Quá dài (${titleLen}/60 ký tự)`, icon: <Type size={14} /> });
        } else if (titleLen < 30) {
            items.push({ label: "Tiêu đề SEO", pass: false, warning: true, detail: `Quá ngắn (${titleLen}/60 ký tự)`, icon: <Type size={14} /> });
        } else {
            items.push({ label: "Tiêu đề SEO", pass: true, detail: `${titleLen}/60 ký tự ✓`, icon: <Type size={14} /> });
        }

        // 2. Meta description
        const descLen = effectiveMetaDesc.length;
        if (descLen === 0) {
            items.push({ label: "Meta description", pass: false, detail: "Chưa có mô tả", icon: <AlignLeft size={14} /> });
        } else if (descLen > 160) {
            items.push({ label: "Meta description", pass: false, warning: true, detail: `Quá dài (${descLen}/160)`, icon: <AlignLeft size={14} /> });
        } else if (descLen < 100) {
            items.push({ label: "Meta description", pass: false, warning: true, detail: `Quá ngắn (${descLen}/160)`, icon: <AlignLeft size={14} /> });
        } else {
            items.push({ label: "Meta description", pass: true, detail: `${descLen}/160 ký tự ✓`, icon: <AlignLeft size={14} /> });
        }

        // 3. Featured image
        if (!featuredImage) {
            items.push({ label: "Ảnh đại diện", pass: false, detail: "Chưa có ảnh featured", icon: <ImageIcon size={14} /> });
        } else if (!featuredImageAlt || featuredImageAlt.length < 5) {
            items.push({ label: "Ảnh đại diện", pass: false, warning: true, detail: "Cần thêm alt text cho ảnh", icon: <ImageIcon size={14} /> });
        } else {
            items.push({ label: "Ảnh đại diện", pass: true, detail: "Có ảnh + alt text ✓", icon: <ImageIcon size={14} /> });
        }

        // 4. Word count
        if (wordCount < 300) {
            items.push({ label: "Độ dài nội dung", pass: false, detail: `Quá ngắn (${wordCount} từ, cần >700)`, icon: <FileText size={14} /> });
        } else if (wordCount < 700) {
            items.push({ label: "Độ dài nội dung", pass: false, warning: true, detail: `${wordCount} từ (khuyến nghị >700)`, icon: <FileText size={14} /> });
        } else {
            items.push({ label: "Độ dài nội dung", pass: true, detail: `${wordCount} từ ✓`, icon: <FileText size={14} /> });
        }

        // 5. Has H2 headings
        if (!content || content.length < 50) {
            items.push({ label: "Heading H2", pass: false, detail: "Nội dung quá ngắn", icon: <Hash size={14} /> });
        } else if (!hasH2) {
            items.push({ label: "Heading H2", pass: false, detail: "Thiếu heading H2 trong bài", icon: <Hash size={14} /> });
        } else {
            const h2Count = (content.match(/<h2[\s>]/gi) || []).length;
            items.push({ label: "Heading H2", pass: true, detail: `${h2Count} heading H2 ✓`, icon: <Hash size={14} /> });
        }

        // 6. Internal links
        if (!hasInternalLink) {
            items.push({ label: "Internal link", pass: false, detail: "Chưa có link nội bộ", icon: <Link2 size={14} /> });
        } else {
            items.push({ label: "Internal link", pass: true, detail: "Có internal link ✓", icon: <Link2 size={14} /> });
        }

        // 7. Slug
        if (!slug || slug.length < 3) {
            items.push({ label: "URL Slug", pass: false, detail: "Chưa có slug", icon: <Link2 size={14} /> });
        } else if (slug.length > 75) {
            items.push({ label: "URL Slug", pass: false, warning: true, detail: `Slug quá dài (${slug.length} ký tự)`, icon: <Link2 size={14} /> });
        } else {
            items.push({ label: "URL Slug", pass: true, detail: `"${slug}" ✓`, icon: <Link2 size={14} /> });
        }

        // 8. Images in content
        if (wordCount > 500 && imageCount === 0) {
            items.push({ label: "Ảnh trong bài", pass: false, warning: true, detail: "Nên thêm ảnh minh họa", icon: <ImageIcon size={14} /> });
        } else if (imageCount > 0) {
            items.push({ label: "Ảnh trong bài", pass: true, detail: `${imageCount} ảnh ✓`, icon: <ImageIcon size={14} /> });
        }

        return items;
    }, [props]);

    const passCount = checks.filter(c => c.pass).length;
    const totalCount = checks.length;
    const scorePercent = totalCount > 0 ? Math.round((passCount / totalCount) * 100) : 0;

    const scoreColor = scorePercent >= 80 ? 'text-green-600' : scorePercent >= 50 ? 'text-amber-500' : 'text-red-500';
    const scoreBg = scorePercent >= 80 ? 'bg-green-50 border-green-200' : scorePercent >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200';
    const scoreBarColor = scorePercent >= 80 ? 'bg-green-500' : scorePercent >= 50 ? 'bg-amber-500' : 'bg-red-500';
    const scoreLabel = scorePercent >= 80 ? 'Tốt' : scorePercent >= 50 ? 'Cần cải thiện' : 'Yếu';

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2">
                <TrendingUp size={16} className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-900">Điểm SEO</span>
            </div>
            <div className="p-5">
                {/* Score Circle */}
                <div className={`flex items-center gap-4 p-3 rounded-xl border ${scoreBg} mb-4`}>
                    <div className="relative w-14 h-14 shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                            <circle
                                cx="18" cy="18" r="15.5" fill="none"
                                stroke={scorePercent >= 80 ? '#22c55e' : scorePercent >= 50 ? '#f59e0b' : '#ef4444'}
                                strokeWidth="3"
                                strokeDasharray={`${scorePercent} ${100 - scorePercent}`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${scoreColor}`}>
                            {scorePercent}
                        </span>
                    </div>
                    <div>
                        <p className={`text-sm font-bold ${scoreColor}`}>{scoreLabel}</p>
                        <p className="text-xs text-gray-500">{passCount}/{totalCount} tiêu chí đạt</p>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${scoreBarColor}`}
                        style={{ width: `${scorePercent}%` }}
                    />
                </div>

                {/* Checklist */}
                <div className="space-y-2">
                    {checks.map((check, i) => (
                        <div key={i} className={`flex items-start gap-2.5 py-1.5 px-2 rounded-lg ${!check.pass ? 'bg-gray-50' : ''}`}>
                            <div className="mt-0.5 shrink-0">
                                {check.pass ? (
                                    <CheckCircle2 size={15} className="text-green-500" />
                                ) : check.warning ? (
                                    <AlertCircle size={15} className="text-amber-500" />
                                ) : (
                                    <XCircle size={15} className="text-red-400" />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className={`text-xs font-medium ${check.pass ? 'text-gray-700' : 'text-gray-900'}`}>{check.label}</p>
                                <p className={`text-[11px] ${check.pass ? 'text-gray-400' : 'text-gray-500'} truncate`}>{check.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
