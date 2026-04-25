import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getPublishedPosts, getCategories } from "@/lib/supabase";
import { autoPublishOverduePosts } from "@/lib/auto-publish";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Blog Kiến Thức Sự Kiện — Sự Kiện Toàn Quốc",
    description: "Cập nhật xu hướng tổ chức sự kiện, teambuilding, company trip, year end party. Kiến thức chuyên sâu từ đội ngũ chuyên gia hàng đầu.",
    openGraph: {
        title: "Blog — Sự Kiện Toàn Quốc",
        description: "Kiến thức tổ chức sự kiện, teambuilding chuyên nghiệp.",
    },
    alternates: { canonical: "https://sukientoanquoc.com/blog" },
};

export const revalidate = 60;

export default async function BlogPage() {
    await autoPublishOverduePosts();

    const [posts, categories] = await Promise.all([
        getPublishedPosts(),
        getCategories(),
    ]);

    return (
        <>
            <Header />
            <BlogClient posts={posts} categories={categories} />
            <Footer />
        </>
    );
}
