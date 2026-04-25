import { supabase } from './supabase';

const DEFAULT_CONTENT: Record<string, string> = {
  // Hero section (Existing parts preserved / merged with new schema)
  'hero_title_1': 'SỰ KIỆN',
  'hero_title_2': '2026',
  'hero_title': 'TỔ CHỨC SỰ KIỆN, & TEAMBUILDING, CHUYÊN NGHIỆP',
  'hero_subtitle': 'Sự Kiện Toàn Quốc tự hào là đơn vị tổ chức sự kiện chuyên nghiệp, mang đến những trải nghiệm đẳng cấp. Kiến tạo sự kiện, nâng tầm thương hiệu và gắn kết đội ngũ của bạn trên 63 tỉnh thành.',
  'hero_button_primary': 'Nhận Báo Giá Ngay',
  'hero_button_secondary': 'Xem Dự Án',

  // Feature Section
  'feature_title': 'Tại Sao Chọn Sự Kiện Toàn Quốc?',
  'feature_subtitle': 'Những giá trị cốt lõi làm nên sự khác biệt của Sự Kiện Toàn Quốc',

  // About Section
  'about_title': 'Hơn 10 Năm Kinh Nghiệm Tổ Chức Teambuilding & Event',
  'about_description': 'Với hơn 10 năm kinh nghiệm trong ngành truyền thông và sự kiện, chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp lớn nhỏ trên toàn quốc...',

  // Service Section
  'service_title': 'Dịch Vụ Tổ Chức Sự Kiện & Teambuilding Trọn Gói',
  'service_subtitle': 'Giải pháp toàn diện cho mọi nhu cầu tổ chức sự kiện của doanh nghiệp bạn.',

  // Footer
  'footer_company_name': 'SỰ KIỆN TOÀN QUỐC',
  'footer_description': 'Đơn vị tổ chức sự kiện uy tín chuyên nghiệp hàng đầu tại Việt Nam.',
  'footer_hotline': 'Hotline: 0854 517 868',
  'footer_email': 'Email: info@sukientoanquoc.com',

  // Portfolio Section (From original)
  'portfolio_1_title': 'TEAMBUILDING BIỂN ĐÀ NẴNG',
  'portfolio_1_client': 'FPT Software — 300 người',
  'portfolio_2_title': 'YEAR END PARTY 2025',
  'portfolio_2_client': 'Viettel Group — 500 người',
  'portfolio_3_title': 'COMPANY TRIP PHÚ QUỐC',
  'portfolio_3_client': 'MoMo — 200 người',
  'portfolio_4_title': 'SPORTS DAY NỘI BỘ',
  'portfolio_4_client': 'Samsung Electronics — 800 người',
  'portfolio_5_title': 'WORKSHOP LEADERSHIP',
  'portfolio_5_client': 'Masan Group — 150 người',
  'portfolio_6_title': 'FAMILY DAY & CARNIVAL',
  'portfolio_6_client': 'Vingroup — 1000+ người',
};

let cachedContent: Record<string, string> | null = null;
let cacheTime = 0;
const CACHE_TTL = 60 * 1000; // 60 seconds

/**
 * Fetch text content overrides from Supabase site_settings.
 * Merges CMS-managed content on top of defaults.
 */
export async function getPageContent(): Promise<Record<string, string>> {
  const now = Date.now();
  if (cachedContent && (now - cacheTime) < CACHE_TTL) {
    return cachedContent;
  }

  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('key', 'page_content')
      .single();

    if (error || !data) {
      cachedContent = { ...DEFAULT_CONTENT };
    } else {
      cachedContent = { ...DEFAULT_CONTENT, ...(data.value || {}) };
    }
  } catch {
    cachedContent = { ...DEFAULT_CONTENT };
  }

  cacheTime = now;
  return cachedContent!;
}
