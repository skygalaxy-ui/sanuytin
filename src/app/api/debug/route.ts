import { getPostBySlug, getPosts } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug') || 'danh-gia-san-vantage-tong-hop-2026';
    
    // Test 1: getPostBySlug
    const postBySlug = await getPostBySlug(slug);
    
    // Test 2: getPosts (verify if it exists in the list)
    const allPosts = await getPosts(true);
    const foundInAll = allPosts.find((p: any) => p.slug === slug);

    return NextResponse.json({
        slug,
        postBySlugExists: !!postBySlug,
        postBySlugDetails: postBySlug ? { id: postBySlug.id, title: postBySlug.title, is_published: postBySlug.is_published } : null,
        foundInAllExists: !!foundInAll,
        foundInAllDetails: foundInAll ? { id: foundInAll.id, title: foundInAll.title, is_published: foundInAll.is_published } : null,
        totalPostsLength: allPosts.length,
        timestamp: Date.now()
    });
}
