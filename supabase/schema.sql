-- =============================================
-- SUPABASE DATABASE SCHEMA FOR SÀN UY TÍN
-- =============================================

-- 1. BROKERS TABLE
CREATE TABLE brokers (
    id SERIAL PRIMARY KEY,
    rank INTEGER NOT NULL DEFAULT 999,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    logo TEXT,
    score DECIMAL(3,1) NOT NULL DEFAULT 0,
    avg_spread VARCHAR(50),
    max_lev VARCHAR(50),
    min_dep VARCHAR(50),
    license TEXT,
    register_link TEXT,
    pros TEXT[] DEFAULT '{}',
    cons TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    year_founded INTEGER,
    headquarters VARCHAR(100),
    platforms TEXT[] DEFAULT '{}',
    description TEXT,
    full_review TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_brokers_rank ON brokers(rank);
CREATE INDEX idx_brokers_slug ON brokers(slug);
CREATE INDEX idx_brokers_is_active ON brokers(is_active);

-- 2. HOMEPAGE CONTENT TABLE
CREATE TABLE homepage_content (
    id SERIAL PRIMARY KEY,
    section VARCHAR(50) NOT NULL, -- 'hero', 'features', 'stats', 'cta', etc.
    title TEXT,
    subtitle TEXT,
    content JSONB DEFAULT '{}',
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SITE SETTINGS TABLE
CREATE TABLE site_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB,
    description TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CATEGORIES TABLE
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_categories_slug ON categories(slug);

-- 5. NEWS/POSTS TABLE
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    featured_image_alt TEXT,
    category VARCHAR(50),
    tags TEXT[] DEFAULT '{}',
    author VARCHAR(100),
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_is_published ON posts(is_published);
CREATE INDEX idx_posts_category ON posts(category);

-- 5. PROMOTIONS TABLE
CREATE TABLE promotions (
    id SERIAL PRIMARY KEY,
    broker_id INTEGER REFERENCES brokers(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    promo_code VARCHAR(50),
    discount_value VARCHAR(50),
    start_date DATE,
    end_date DATE,
    terms TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- SAMPLE DATA
-- =============================================

-- Insert sample brokers
INSERT INTO brokers (rank, name, slug, logo, score, avg_spread, max_lev, min_dep, license, register_link, pros, features, year_founded, headquarters, platforms) VALUES
(1, 'Vantage', 'vantage', '/images/brokers/vantage.png', 9.9, '1.0 pips', '1:1000', '$50', 'ASIC, FCA, CIMA', 'https://vfreferral.com/?affid=MTUwNjM5', 
 ARRAY['Spread thấp từ 0.0 pips', 'Hỗ trợ tiếng Việt 24/7', 'Nạp rút siêu nhanh qua ngân hàng nội địa', 'Nhiều khuyến mãi hấp dẫn'],
 ARRAY['MT4', 'MT5', 'ProTrader', 'Copy Trading'], 2009, 'Sydney, Australia', ARRAY['MT4', 'MT5', 'TradingView']),
 
(2, 'Exness', 'exness', '/images/brokers/exness.png', 9.8, '0.0 pips', '1:2000', '$1', 'FCA, CySEC, FSCA',  'https://one.exnesstrack.org/a/wlcvjnzbuu',
 ARRAY['Rút tiền tức thì 24/7', 'Đòn bẩy không giới hạn', 'Spread siêu thấp từ 0.0', 'Không phí qua đêm cho vàng'],
 ARRAY['MT4', 'MT5', 'Exness Terminal'], 2008, 'Cyprus', ARRAY['MT4', 'MT5', 'Web Terminal']),

(3, 'XM', 'xm', '/images/brokers/xm.png', 9.7, '1.0 pips', '1:888', '$5', 'CySEC, ASIC, DFSA', 'https://clicks.pipaffiliates.com/c?c=606530&l=vi&p=1',
 ARRAY['Bonus 100% tiền nạp', 'Webinar đào tạo miễn phí', 'Hơn 1000 công cụ giao dịch', 'Thực thi lệnh nhanh'],
 ARRAY['MT4', 'MT5', 'XM App'], 2009, 'Cyprus', ARRAY['MT4', 'MT5', 'Mobile App']);

-- Insert homepage content
INSERT INTO homepage_content (section, title, subtitle, content, sort_order) VALUES
('hero', 'Top 10 Sàn Forex Uy Tín Nhất 2026', 'Đánh giá độc lập, minh bạch, cập nhật liên tục', 
 '{"cta_text": "Xem Bảng Xếp Hạng", "cta_link": "/danh-gia-san"}', 1),
 
('stats', 'Số liệu nổi bật', NULL,
 '{"items": [{"value": "50+", "label": "Sàn đã review"}, {"value": "100K+", "label": "Người đọc/tháng"}, {"value": "10+", "label": "Năm kinh nghiệm"}]}', 2);

-- Insert site settings
INSERT INTO site_settings (key, value, description) VALUES
('site_name', '"Sàn Uy Tín"', 'Website name'),
('site_description', '"Cổng thông tin đánh giá sàn Forex uy tín hàng đầu Việt Nam"', 'Site meta description'),
('contact_email', '"sanuytin.net@gmail.com"', 'Contact email'),
('social_links', '{"twitter": "https://x.com/sanuytin", "pinterest": "https://www.pinterest.com/sanuytin/"}', 'Social media links');

-- =============================================
-- ROW LEVEL SECURITY (Optional but recommended)
-- =============================================

-- Enable RLS
ALTER TABLE brokers ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public read brokers" ON brokers FOR SELECT USING (is_active = true);
CREATE POLICY "Public read homepage" ON homepage_content FOR SELECT USING (is_active = true);
CREATE POLICY "Public read settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read posts" ON posts FOR SELECT USING (is_published = true);
CREATE POLICY "Public read promotions" ON promotions FOR SELECT USING (is_active = true);

-- =============================================
-- UTILITY FUNCTIONS
-- =============================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER brokers_updated_at BEFORE UPDATE ON brokers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER homepage_updated_at BEFORE UPDATE ON homepage_content FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER posts_updated_at BEFORE UPDATE ON posts FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =============================================
-- STORAGE BUCKETS (Run in SQL Editor)
-- =============================================

-- Create broker-logos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('broker-logos', 'broker-logos', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

-- Create post-images bucket  
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('post-images', 'post-images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO NOTHING;

-- Storage policies for broker-logos
CREATE POLICY "Public read broker-logos" ON storage.objects FOR SELECT USING (bucket_id = 'broker-logos');
CREATE POLICY "Allow upload broker-logos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'broker-logos');
CREATE POLICY "Allow update broker-logos" ON storage.objects FOR UPDATE USING (bucket_id = 'broker-logos');
CREATE POLICY "Allow delete broker-logos" ON storage.objects FOR DELETE USING (bucket_id = 'broker-logos');

-- Storage policies for post-images
CREATE POLICY "Public read post-images" ON storage.objects FOR SELECT USING (bucket_id = 'post-images');
CREATE POLICY "Allow upload post-images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'post-images');
CREATE POLICY "Allow update post-images" ON storage.objects FOR UPDATE USING (bucket_id = 'post-images');
CREATE POLICY "Allow delete post-images" ON storage.objects FOR DELETE USING (bucket_id = 'post-images');
