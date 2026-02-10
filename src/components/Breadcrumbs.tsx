"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://sanuytin.net/" },
            ...items.map((item, i) => ({
                "@type": "ListItem",
                "position": i + 2,
                "name": item.label,
                ...(item.href ? { "item": `https://sanuytin.net${item.href}` } : {}),
            })),
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className="container-custom pt-24 pb-2">
                <ol className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
                    <li>
                        <Link href="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                            <Home size={14} />
                            <span>Trang chủ</span>
                        </Link>
                    </li>
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                            <ChevronRight size={12} className="text-slate-600" />
                            {item.href ? (
                                <Link href={item.href} className="hover:text-blue-400 transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-slate-300 font-medium">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
