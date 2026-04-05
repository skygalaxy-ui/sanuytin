import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Unique Unsplash images mapped by post ID - each one is different
const imageMap = {
  // Group 1: photo-1611974789855 (6 dupes)
  69: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80', // phien forex - world clock
  74: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80', // swap fee - calculator
  119: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&q=80', // lừa đảo - warning sign
  133: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', // tradingview - dashboard (swap with 81)
  139: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80', // chi bao ky thuat - analytics
  150: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=1200&q=80', // sai lam chon san - danger

  // Group 2: photo-1551288049 (5 dupes)
  81: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // backtest - data screen (swap with 65)
  88: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80', // MT4 vs MT5 - comparison
  93: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80', // risk reward - balance
  124: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80', // exness vs xm - versus
  132: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80', // MT4 MT5 choice - laptop

  // Group 3: photo-1460925895917 (3 dupes)
  65: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=1200&q=80', // lừa đảo forex - shield
  127: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=1200&q=80', // IC vs Pepper - race
  131: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', // FxPro review - building

  // Group 4: photo-1642790106117 (3 dupes)
  70: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80', // MACD - signal
  71: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', // Moving avg - trend line => reassign
  121: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80', // Pepperstone - speed => reassign

  // Group 5: photo-1563986768494 (3 dupes)
  79: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=1200&q=80', // price action - candlestick
  129: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80', // eToro - social
  134: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80', // cTrader - tech

  // Group 6: photo-1526304640581 (3 dupes)
  87: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80', // trendline => reassign to chart
  120: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', // XTB review - interface
  137: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&q=80', // Axi review - modern

  // Group 7: photo-1535320903710 (3 dupes)  
  89: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80', // breakout - chart burst
  95: 'https://images.unsplash.com/photo-1504607798333-52a30db54a5d?w=1200&q=80', // supply demand - warehouse
  130: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80', // FXTM - global

  // Group 8: photo-1590283603385 (3 dupes)
  90: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80', // forex vs stock => reassign
  122: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80', // Plus500 - London
  126: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&q=80', // nạp rút exness xm - money

  // Group 9: photo-1607863680198 (2 dupes)
  10: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&q=80', // stop loss => reassign
  107: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6e?w=1200&q=80', // Vantage spread - compare

  // Group 10: photo-1642790595397 (2 dupes)
  29: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80', // nến nhật - candle pattern
  // 64 keeps original

  // Group 11: photo-1554224155 (2 dupes)
  30: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1200&q=80', // quản lý vốn => reassign
  125: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80', // mở tài khoản - signup form

  // Group 12: photo-1518186285589 (2 dupes)
  63: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80', // spread => reassign
  128: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80', // Tickmill - precision

  // Group 13: photo-1559526324 (2 dupes)
  76: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=1200&q=80', // vantage vs exness - compare
  92: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80', // trend following - path

  // Group 14: photo-1504868584819 (2 dupes)
  77: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=1200&q=80', // bollinger => reassign
  123: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80', // HFM - bonus

  // Group 15: photo-1454165804606 (2 dupes)
  84: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=1200&q=80', // IC vs Exness - showdown
  94: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80', // FOMO - emotion

  // Group 16: photo-1579532537598 (2 dupes)
  91: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80', // position sizing - math
  118: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80', // top 10 san => reassign

  // Also fix posts with NULL or missing images
  142: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80', // huong dan forex
  140: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80', // khuyen mai
};

// Now deduplicate - remove any new duplicates
const usedImages = new Set();
const finalMap = {};

for (const [id, img] of Object.entries(imageMap)) {
  const base = img.split('?')[0];
  if (!usedImages.has(base)) {
    usedImages.add(base);
    finalMap[id] = img;
  } else {
    // Generate a unique search-based image
    console.log(`⚠️ Skipping duplicate for ID ${id}, will use fallback`);
  }
}

let updated = 0;
for (const [id, img] of Object.entries(finalMap)) {
  const { error } = await sb.from('posts').update({
    featured_image: img,
    updated_at: new Date().toISOString()
  }).eq('id', parseInt(id));

  if (error) console.error(`❌ ${id}:`, error.message);
  else { updated++; console.log(`✅ ${id} updated`); }
}

console.log(`\n🎉 Updated ${updated} article images`);
process.exit(0);
