-- =====================================================
-- SUPABASE TABLE CREATION SCRIPT FOR POSTS & CATEGORIES
-- Run this in Supabase SQL Editor
-- =====================================================

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    featured_image_alt VARCHAR(500),
    category VARCHAR(255),
    tags TEXT[] DEFAULT '{}',
    author VARCHAR(255),
    meta_title VARCHAR(255),
    meta_description TEXT,
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create scheduled_content table (for Content Calendar)
CREATE TABLE IF NOT EXISTS scheduled_content (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('article', 'update', 'promotion', 'review')),
    status VARCHAR(50) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published', 'overdue')),
    scheduled_date DATE NOT NULL,
    author VARCHAR(255),
    category VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Insert default categories
INSERT INTO categories (name, slug, description) VALUES 
    ('Tin tức', 'tin-tuc', 'Tin tức mới nhất về thị trường Forex'),
    ('Kiến thức', 'kien-thuc', 'Kiến thức cơ bản và nâng cao về Forex'),
    ('Hướng dẫn', 'huong-dan', 'Hướng dẫn chi tiết cho trader'),
    ('Phân tích', 'phan-tich', 'Phân tích kỹ thuật và cơ bản'),
    ('Review', 'review', 'Đánh giá chi tiết các sàn giao dịch')
ON CONFLICT (slug) DO NOTHING;

-- 5. Enable Row Level Security (RLS)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE scheduled_content ENABLE ROW LEVEL SECURITY;

-- 6. Create policies for public read access
CREATE POLICY "Allow public read access on posts" ON posts
    FOR SELECT USING (is_published = TRUE);

CREATE POLICY "Allow public read access on categories" ON categories
    FOR SELECT USING (TRUE);

-- 7. Create policies for authenticated users (admin)
CREATE POLICY "Allow admin full access on posts" ON posts
    FOR ALL USING (TRUE);

CREATE POLICY "Allow admin full access on categories" ON categories
    FOR ALL USING (TRUE);

CREATE POLICY "Allow admin full access on scheduled_content" ON scheduled_content
    FOR ALL USING (TRUE);

-- 8. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_is_published ON posts(is_published);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_scheduled_content_date ON scheduled_content(scheduled_date);

-- 9. Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 10. Create triggers for auto-updating timestamps
DROP TRIGGER IF EXISTS update_posts_updated_at ON posts;
CREATE TRIGGER update_posts_updated_at
    BEFORE UPDATE ON posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_scheduled_content_updated_at ON scheduled_content;
CREATE TRIGGER update_scheduled_content_updated_at
    BEFORE UPDATE ON scheduled_content
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- DONE! Tables created successfully.
-- =====================================================
