import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getPublishedPosts } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Danh mục tất cả bài viết | Sự Kiện Toàn Quốc',
    description: 'Sitemap HTML tổng hợp toàn bộ danh sách bài viết chuyên ngành tổ chức sự kiện, teambuilding, gala dinner. Cập nhật liên tục những kiến thức mới nhất từ chuyên gia.',
    alternates: {
        canonical: 'https://sukientoanquoc.com/danh-muc-bai-viet'
    }
};

export const revalidate = 3600; // 1 hour

export default async function HTMLSitemap() {
    // Lấy toàn bộ bài viết đã public
    const posts = await getPublishedPosts();

    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
                    <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-heading)' }}>
                            Danh mục bài viết (Sitemap)
                        </h1>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '15px' }}>
                            Tổng hợp <strong>{posts.length}</strong> bài viết chuyên sâu về Tổ chức sự kiện, Kịch bản Teambuilding, Year End Party và các dịch vụ sự kiện từ đội ngũ Sự Kiện Toàn Quốc.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                            {posts.map((post) => (
                                <div key={post.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border)', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover:shadow-md hover:-translate-y-1">
                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        style={{ color: 'var(--text-heading)', fontWeight: 600, textDecoration: 'none', lineHeight: 1.4, fontSize: '15px' }}
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                        {new Date(post.published_at || post.created_at).toLocaleDateString("vi-VN")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
