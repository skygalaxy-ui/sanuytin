import { supabase } from './supabase';

// Default images (fallback khi chưa set trong CMS)
const DEFAULT_IMAGES: Record<string, string> = {
  // Hero
  "hero_bg": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=90",
  
  // Feature
  "feature_main": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841253774-zecd3wkwcvi.webp",
  
  // Services
  "service_teambuilding": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg",
  "service_company_trip": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
  "service_year_end_party": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
  "service_workshop": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841552125-d6rsss2mtnr.webp",
  "service_sports_day": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
  "service_family_day": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
  "service_khai_truong": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774842323006-w8rswfc8loo.webp",
  
  // Portfolio
  "portfolio_1": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg",
  "portfolio_2": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
  "portfolio_3": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
  "portfolio_4": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
  "portfolio_5": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841552125-d6rsss2mtnr.webp",
  "portfolio_6": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
  
  // Speakers
  "speaker_1": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fm=webp",
  "speaker_2": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fm=webp",
  "speaker_3": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fm=webp",
  
  // Sponsor
  "sponsor_bg": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85",
  
  // Events
  "event_teambuilding_1": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
  "event_teambuilding_2": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80",
  "event_gala_1": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  "event_gala_2": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
  "event_workshop_1": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
  "event_workshop_2": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80",
  
  // VideoGrid
  "video_1": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
  "video_2": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
  "video_3": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  "video_4": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",

  // Service page heroes
  "servicepage_teambuilding": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg",
  "servicepage_company_trip": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
  "servicepage_year_end_party": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
  "servicepage_workshop": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841552125-d6rsss2mtnr.webp",
  "servicepage_sports_day": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
  "servicepage_family_day": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
  "servicepage_khai_truong": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774842323006-w8rswfc8loo.webp",
  "servicepage_hoi_nghi": "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
};

let cachedImages: Record<string, string> | null = null;
let cacheTime = 0;
const CACHE_TTL = 60 * 1000; // 60 seconds

/**
 * Fetch page images from Supabase site_settings.
 * Merges CMS-managed images on top of defaults.
 * Results are cached for 60 seconds (matches ISR revalidation).
 */
export async function getPageImages(): Promise<Record<string, string>> {
  const now = Date.now();
  if (cachedImages && (now - cacheTime) < CACHE_TTL) {
    return cachedImages;
  }

  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('key', 'page_images')
      .single();

    if (error || !data) {
      cachedImages = { ...DEFAULT_IMAGES };
    } else {
      cachedImages = { ...DEFAULT_IMAGES, ...(data.value || {}) };
    }
  } catch {
    cachedImages = { ...DEFAULT_IMAGES };
  }

  cacheTime = now;
  return cachedImages!;
}

export function getDefaultImages(): Record<string, string> {
  return { ...DEFAULT_IMAGES };
}

export async function getImage(key: string): Promise<string> {
  const images = await getPageImages();
  return images[key] || DEFAULT_IMAGES[key] || '';
}
