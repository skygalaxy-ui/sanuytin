-- =====================================================
-- SUPABASE POSTS TABLE MIGRATION
-- Run this in: Supabase Dashboard > SQL Editor
-- Created: 2026-02-01
-- =====================================================

-- 1. Create Categories Table (if not exists)
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Posts Table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    featured_image_alt TEXT,
    category VARCHAR(50),
    category_id BIGINT REFERENCES categories(id),
    tags TEXT[] DEFAULT '{}',
    author VARCHAR(100),
    author_id UUID,
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(is_published);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

-- 4. Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS Policies for Posts
-- Drop existing policies first (to avoid conflicts)
DROP POLICY IF EXISTS "Public read posts" ON posts;
DROP POLICY IF EXISTS "Admin full access posts" ON posts;

-- Allow anyone to read published posts
CREATE POLICY "Public read posts" ON posts 
    FOR SELECT 
    USING (is_published = true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Admin full access posts" ON posts 
    FOR ALL 
    USING (true)
    WITH CHECK (true);

-- 6. Create RLS Policies for Categories
DROP POLICY IF EXISTS "Public read categories" ON categories;
DROP POLICY IF EXISTS "Admin full access categories" ON categories;

CREATE POLICY "Public read categories" ON categories 
    FOR SELECT 
    USING (true);

CREATE POLICY "Admin full access categories" ON categories 
    FOR ALL 
    USING (true)
    WITH CHECK (true);

-- 7. Seed default categories (if not exist)
INSERT INTO categories (name, slug, description) VALUES 
    ('Tin tức', 'tin-tuc', 'Tin tức mới nhất về thị trường Forex'),
    ('Kiến thức', 'kien-thuc', 'Kiến thức cơ bản và nâng cao về Forex'),
    ('Hướng dẫn', 'huong-dan', 'Hướng dẫn chi tiết cho trader'),
    ('Phân tích', 'phan-tich', 'Phân tích kỹ thuật và cơ bản'),
    ('Review', 'review', 'Đánh giá chi tiết các sàn giao dịch')
ON CONFLICT (slug) DO NOTHING;

-- 8. Create Storage Bucket for Post Images (run separately if needed)
-- INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
-- VALUES ('post-images', 'post-images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
-- ON CONFLICT (id) DO NOTHING;

-- 9. Refresh PostgREST schema cache (IMPORTANT!)
NOTIFY pgrst, 'reload schema';

-- =====================================================
-- VERIFICATION QUERY (run after migration)
-- =====================================================
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
-- SELECT * FROM categories;
-- SELECT * FROM posts;
