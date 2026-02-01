// Generate static params for export
export function generateStaticParams() {
    return [
        { slug: 'forex-la-gi' },
        { slug: 'cach-doc-bieu-do-nen-nhat' },
        { slug: 'quan-ly-von-trading' },
    ];
}

export default function KienThucSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
