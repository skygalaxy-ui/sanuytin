// Generate static params for export
export function generateStaticParams() {
    return [
        { slug: 'gia-vang-pha-dinh-2026' },
        { slug: 'fed-giu-nguyen-lai-suat' },
        { slug: 'top-3-cap-tien-bien-dong' },
    ];
}

export default function TinTucSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
