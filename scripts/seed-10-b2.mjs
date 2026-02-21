import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

const posts = [
    {
        title: "Position Sizing: cách tính khối lượng lệnh theo rủi ro",
        slug: "position-sizing-tinh-khoi-luong-lenh-forex",
        category: "kien-thuc",
        tags: ["position sizing", "quản lý vốn", "rủi ro"],
        excerpt: "Hướng dẫn tính lot size chính xác dựa trên % rủi ro, pip SL và giá trị pip. Công thức Position Sizing giúp bảo vệ vốn tối đa.",
        meta_title: "Position Sizing Forex: Công Thức Tính Lot Size Chuẩn 2026",
        meta_description: "Công thức Position Sizing: cách tính lot size theo % rủi ro, khoảng cách SL. Bảo vệ vốn và tối đa hóa lợi nhuận.",
        featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        scheduled_at: '2026-02-27T09:00:00Z', // 16:00 VN ngay 27
        content: `<h2>1. Position Sizing là gì?</h2><p><strong>Position Sizing</strong> (tính khối lượng lệnh) là kỹ năng quyết định bao nhiêu lot cho mỗi lệnh, dựa trên mức rủi ro chấp nhận được. Đây là kỹ năng <strong>quan trọng nhất</strong> trong quản lý vốn - quan trọng hơn cả entry point hay exit strategy.</p>
<p>Trader chuyên nghiệp KHÔNG bao giờ dùng cùng lot size cho mọi lệnh. Thay vào đó, họ tính lot size riêng cho từng giao dịch dựa trên khoảng cách Stop Loss. SL xa → lot nhỏ. SL gần → lot lớn hơn. Mục tiêu: mỗi lệnh thua chỉ mất đúng X% vốn.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Position Sizing - tính lot size theo rủi ro")}
<h2>2. Công thức Position Sizing</h2><p>Công thức chuẩn:</p>
<div style="background:rgba(59,130,246,0.1);padding:20px;border-radius:12px;margin:1em 0;text-align:center;font-size:18px;"><strong>Lot Size = (Vốn × % Rủi ro) ÷ (SL pip × Giá trị 1 pip)</strong></div>
<h3>Ví dụ 1: EUR/USD</h3><p>Vốn: $1,000. Rủi ro tối đa: 2% = $20. SL: 30 pip. Giá trị 1 pip (standard lot): $10.</p><p>Lot Size = $20 ÷ (30 × $10) = $20 ÷ $300 = <strong>0.067 lot</strong> (≈ 0.07 lot = 7 micro lot)</p>
<h3>Ví dụ 2: GBP/JPY</h3><p>Vốn: $5,000. Rủi ro: 1% = $50. SL: 50 pip. Giá trị pip phụ thuộc tỷ giá USD/JPY.</p><p>Nếu USD/JPY = 150 → pip value per standard lot ≈ $6.67. Lot Size = $50 ÷ (50 × $6.67) = $50 ÷ $333.5 = <strong>0.15 lot</strong></p>
<h2>3. Quy tắc % Rủi ro</h2><ul><li><strong>1% rule:</strong> Dành cho trader thận trọng, vốn lớn (>$10,000). Chịu được 100 lệnh thua liên tiếp</li><li><strong>2% rule:</strong> Phổ biến nhất, cân bằng giữa rủi ro và growth. Alexander Elder khuyên dùng</li><li><strong>3% rule:</strong> Aggressive nhưng vẫn chấp nhận được cho tài khoản nhỏ (<$500)</li><li><strong>Trên 5%:</strong> QUÁ RỦI RO - Ngay cả 5 lệnh thua liên tiếp đã mất 25% vốn</li></ul>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Bảng tính Position Sizing nhanh")}
<h2>4. Position Sizing Calculator</h2><p>Không cần tính tay mỗi lần. Các công cụ miễn phí:</p><ul><li><strong>Myfxbook Position Size Calculator:</strong> Nhập vốn, rủi ro %, SL pip → ra lot size</li><li><strong>Babypips Calculator:</strong> Hỗ trợ nhiều cặp tiền, tự tra giá trị pip</li><li><strong>MT4/MT5 Script:</strong> Nhiều script tính Position Size tự động trên chart</li></ul>
<h2>5. Fixed Ratio vs Fixed Fractional</h2><h3>Fixed Fractional (Phổ biến)</h3><p>Rủi ro cố định theo % vốn hiện tại. Khi vốn tăng → lot tăng theo. Khi vốn giảm → lot giảm, bảo vệ vốn tự động. Đây là phương pháp phổ biến nhất, phù hợp hầu hết trader.</p>
<h3>Fixed Ratio (Ryan Jones)</h3><p>Tăng lot size khi lợi nhuận đạt một mức "delta" nhất định. Ví dụ: delta = $500. Bắt đầu 0.01 lot. Khi lời $500 → tăng lên 0.02. Khi lời thêm $500 → 0.03. Phương pháp này tăng tốc compounding nhưng cũng tăng rủi ro.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "So sánh tăng trưởng Fixed Fractional vs Fixed Ratio")}
<h2>6. Sai lầm thường gặp</h2><ul><li><strong>Dùng cùng lot cho mọi lệnh:</strong> Trade SL 20 pip và SL 80 pip cùng 0.1 lot → rủi ro chênh lệch 4 lần</li><li><strong>Tăng lot sau khi thua:</strong> Martingale (gấp đôi) = đường nhanh nhất đến cháy tài khoản</li><li><strong>Quên tính spread:</strong> SL 10 pip + spread 2 pip = SL thật 12 pip. Phải tính spread vào</li><li><strong>Không điều chỉnh theo vốn:</strong> Thua 30% vẫn trade cùng lot = rủi ro thực tế tăng từ 2% lên ~3%</li></ul>
<h2>7. Kết luận</h2><p>Position Sizing là "bảo hiểm nhân thọ" cho tài khoản trading. Dù win rate chỉ 40%, nếu Position Sizing đúng với R:R 1:2, bạn vẫn có lợi nhuận dương. Hãy tính lot size TRƯỚC MỌI LỆNH, biến nó thành thói quen tự động.</p>`
    },
    {
        title: "Chiến lược Trend Following: giao dịch theo xu hướng bền vững",
        slug: "chien-luoc-trend-following-forex",
        category: "kien-thuc",
        tags: ["trend following", "xu hướng", "chiến lược"],
        excerpt: "Tìm hiểu chiến lược Trend Following - phương pháp giao dịch theo xu hướng được các quỹ đầu tư lớn sử dụng. Setup, entry, exit chi tiết.",
        meta_title: "Trend Following: Chiến Lược Giao Dịch Theo Xu Hướng | 2026",
        meta_description: "Trend Following: cách nhận diện xu hướng, entry khi pullback, exit khi trend kết thúc. Phương pháp kinh điển cho trader.",
        featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
        scheduled_at: '2026-02-28T01:00:00Z', // 8:00 VN
        content: `<h2>1. Trend Following là gì?</h2><p><strong>Trend Following</strong> (giao dịch theo xu hướng) là chiến lược "đi theo dòng nước" thay vì cố dự đoán đỉnh/đáy. Câu châm ngôn kinh điển: <em>"The trend is your friend until it ends"</em> (Xu hướng là bạn cho đến khi nó kết thúc).</p>
<p>Trend Following không cố dự đoán khi nào xu hướng bắt đầu hay kết thúc. Thay vào đó, nó nhận diện xu hướng đang diễn ra, nhảy vào giữa chừng, và thoát ra khi có dấu hiệu xu hướng thay đổi. Phương pháp này được sử dụng bởi nhiều quỹ đầu tư hàng tỷ đô như AHL (Man Group), Winton Group.</p>
${img("https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", "Trend Following - giao dịch theo xu hướng chính")}
<h2>2. Xác định xu hướng</h2><h3>Phương pháp 1: Higher Highs / Higher Lows</h3><p>Uptrend = giá liên tục tạo đỉnh cao hơn (HH) và đáy cao hơn (HL). Downtrend = giá tạo đỉnh thấp hơn (LH) và đáy thấp hơn (LL). Khi cấu trúc HH/HL bị phá → xu hướng suy yếu hoặc đảo chiều.</p>
<h3>Phương pháp 2: Moving Average</h3><ul><li>Giá trên EMA 200 → Uptrend</li><li>Giá dưới EMA 200 → Downtrend</li><li>EMA 50 cắt lên EMA 200 (Golden Cross) → Xu hướng tăng mạnh</li><li>EMA 50 cắt xuống EMA 200 (Death Cross) → Xu hướng giảm mạnh</li></ul>
<h3>Phương pháp 3: ADX (Average Directional Index)</h3><p>ADX > 25 → Xu hướng mạnh, phù hợp Trend Following. ADX < 20 → Sideway, KHÔNG trade theo xu hướng. ADX càng cao → xu hướng càng mạnh.</p>
<h2>3. Entry Strategies</h2><h3>Strategy 1: EMA Pullback Entry</h3><ul><li>Xác nhận uptrend trên D1 (giá trên EMA 200)</li><li>Chờ giá pullback về EMA 20 hoặc EMA 50 trên H4</li><li>Tìm nến xác nhận (Pin Bar, Engulfing) tại EMA → MUA</li><li>SL: Dưới swing low gần nhất. TP: Trailing stop hoặc 2× SL</li></ul>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "EMA Pullback Entry - mua tại điểm hồi")}
<h3>Strategy 2: Breakout Entry</h3><ul><li>Trong uptrend, khi giá phá đỉnh trước đó → MUA</li><li>Donchian Channel (20 period): mua khi giá phá trên channel, bán khi phá dưới</li><li>Phương pháp Turtle Trading nổi tiếng dùng Donchian 20/55</li></ul>
<h2>4. Exit Strategies</h2><h3>Trailing Stop</h3><p>Thay vì TP cố định, dùng Trailing Stop để bám theo xu hướng. Ví dụ: Trailing SL theo EMA 20. Khi giá đóng dưới EMA 20 → thoát lệnh. Phương pháp này cho phép bắt được những move lớn hàng trăm pip.</p>
<h3>ATR Trailing Stop</h3><p>SL di chuyển theo: Giá cao nhất - 2× ATR(14). Chandelier Exit là biến thể phổ biến. Ưu điểm: SL tự động điều chỉnh theo biến động thị trường.</p>
<h2>5. Ưu và nhược điểm</h2><h3>Ưu điểm</h3><ul><li>Bắt được những xu hướng lớn (100-500 pip)</li><li>Không cần dự đoán - chỉ phản ứng theo thị trường</li><li>Win rate chỉ cần 30-40% vẫn lãi nhờ R:R cao</li></ul>
<h3>Nhược điểm</h3><ul><li>Thua nhiều lệnh nhỏ trong sideway (whipsaw)</li><li>Drawdown kéo dài khi thị trường không trend</li><li>Đòi hỏi kiên nhẫn - có thể wait 1-2 tuần cho 1 setup</li></ul>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Equity curve của chiến lược Trend Following")}
<h2>6. Kết luận</h2><p>Trend Following là chiến lược đã chứng minh hiệu quả qua hàng thập kỷ, từ Richard Dennis (Turtle Traders) đến các quỹ hedge fund hiện đại. Chìa khóa thành công: kỷ luật theo hệ thống, chấp nhận nhiều lệnh thua nhỏ để đổi lấy vài lệnh thắng lớn, và KHÔNG trade khi thị trường sideway.</p>`
    },
    {
        title: "Supply và Demand Zone: giao dịch theo vùng cung cầu",
        slug: "supply-demand-zone-giao-dich-forex",
        category: "kien-thuc",
        tags: ["supply demand", "cung cầu", "vùng giá"],
        excerpt: "Supply/Demand Zone khác gì S/R? Cách vẽ, nhận diện vùng cung cầu mạnh và chiến lược giao dịch theo Sam Seiden.",
        meta_title: "Supply & Demand Zone Forex: Cách Giao Dịch Vùng Cung Cầu 2026",
        meta_description: "Hướng dẫn vẽ Supply/Demand Zone: nguyên lý cung cầu, cách nhận diện vùng mạnh, entry/exit và so sánh với S/R truyền thống.",
        featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        scheduled_at: '2026-02-28T09:00:00Z', // 16:00 VN
        content: `<h2>1. Supply/Demand Zone là gì?</h2><p><strong>Supply Zone</strong> (vùng cung) là vùng giá nơi có nhiều người bán sẵn sàng bán → giá giảm khi chạm vùng này. <strong>Demand Zone</strong> (vùng cầu) là vùng có nhiều người mua → giá tăng khi chạm. Khái niệm này dựa trên nguyên lý cung-cầu cơ bản: khi cung > cầu → giá giảm, khi cầu > cung → giá tăng.</p>
<p>Supply/Demand Zone khác với Support/Resistance truyền thống ở chỗ: S/R là đường hoặc mức giá, còn S/D Zone là <strong>VÙNG</strong> với boundary rõ ràng. Phương pháp này được phổ biến bởi Sam Seiden và Online Trading Academy.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Supply và Demand Zone trên biểu đồ Forex")}
<h2>2. Cách vẽ Supply/Demand Zone</h2><h3>Demand Zone (Vùng cầu)</h3><ol><li>Tìm vùng giá sideway hoặc base nhỏ</li><li>Từ vùng đó giá tăng mạnh (rally) với nến thân dài</li><li>Vẽ hình chữ nhật bao phủ vùng base đó</li><li>Đó chính là Demand Zone - nơi có lệnh mua chưa được khớp</li></ol>
<h3>Supply Zone (Vùng cung)</h3><ol><li>Tìm vùng sideway/base nhỏ</li><li>Từ đó giá giảm mạnh (drop) với nến thân dài đỏ</li><li>Vẽ hình chữ nhật bao phủ vùng base</li><li>Đó là Supply Zone - nơi có lệnh bán chưa khớp</li></ol>
<h2>3. Đặc điểm vùng Supply/Demand mạnh</h2><ul><li><strong>Fresh (Mới):</strong> Giá chưa quay lại test vùng này → strongest. Lần đầu test thường bounce mạnh nhất</li><li><strong>Strong departure:</strong> Giá rời vùng với lực mạnh (nến Marubozu, gap) → vùng có nhiều "unfilled orders"</li><li><strong>Thời gian ngắn:</strong> Vùng base chỉ 1-3 nến → tốt hơn base 10+ nến (đã có thời gian khớp lệnh)</li><li><strong>Trùng với S/R cũ:</strong> Khi S/D zone trùng với S/R truyền thống → confluence cực mạnh</li></ul>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Cách vẽ Supply/Demand Zone chuẩn xác")}
<h2>4. Chiến lược giao dịch</h2><h3>Chiến lược RBR (Rally-Base-Rally)</h3><p>Giá tăng → tạo base nhỏ → tăng tiếp. Base đó là Demand Zone (continuation). Khi giá pullback về zone → MUA.</p>
<h3>Chiến lược DBD (Drop-Base-Drop)</h3><p>Giá giảm → base nhỏ → giảm tiếp. Base đó là Supply Zone (continuation). Khi giá pullback lên zone → BÁN.</p>
<h3>Chiến lược DBR (Drop-Base-Rally)</h3><p>Giá giảm → base → đảo chiều tăng mạnh. Đây là Demand Zone đảo chiều - mạnh nhất. Entry MUA khi giá quay về zone.</p>
<h3>Chiến lược RBD (Rally-Base-Drop)</h3><p>Giá tăng → base → đảo chiều giảm mạnh. Supply Zone đảo chiều. Entry BÁN khi giá quay về zone.</p>
<h2>5. Entry và Risk Management</h2><ul><li><strong>Entry:</strong> Đặt Limit Order tại boundary gần nhất của zone. Hoặc chờ Price Action tại zone</li><li><strong>SL:</strong> Đặt bên kia zone + buffer 5-10 pip</li><li><strong>TP:</strong> Supply/Demand zone tiếp theo theo hướng trade</li><li><strong>R:R target:</strong> Tối thiểu 1:3 cho fresh zone</li></ul>
<h2>6. Supply/Demand vs S/R</h2><p>Supply/Demand tập trung vào NGUYÊN NHÂN (why) giá đảo chiều: có unfilled orders tại vùng đó. S/R truyền thống tập trung vào WHERE: giá bounce ở đâu. Kết hợp cả hai cho hiệu quả tốt nhất: dùng S/R xác định vùng quan trọng, dùng S/D zone xác định entry chính xác.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Kết hợp Supply/Demand với Support/Resistance")}
<h2>7. Kết luận</h2><p>Supply/Demand Zone là phương pháp giao dịch logic, dựa trên nguyên lý cung-cầu cơ bản. Fresh zone với strong departure cho xác suất thắng cao nhất. Luôn trade theo xu hướng: chỉ mua tại Demand Zone trong uptrend, bán tại Supply Zone trong downtrend.</p>`
    },
    {
        title: "Risk/Reward Ratio: cách tính và tối ưu tỷ lệ rủi ro",
        slug: "risk-reward-ratio-ty-le-rui-ro-loi-nhuan",
        category: "kien-thuc",
        tags: ["risk reward", "rủi ro", "quản lý vốn"],
        excerpt: "Hiểu R:R Ratio là gì, cách tính, và tại sao R:R quan trọng hơn Win Rate. Ví dụ thực tế và bảng tính lợi nhuận.",
        meta_title: "Risk/Reward Ratio Forex: Cách Tính & Tối Ưu R:R 2026",
        meta_description: "Risk/Reward Ratio: cách tính R:R, mối quan hệ với Win Rate, và chiến lược tối ưu R:R cho trader Forex.",
        featured_image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        scheduled_at: '2026-03-01T01:00:00Z', // 8:00 VN
        content: `<h2>1. Risk/Reward Ratio (R:R) là gì?</h2><p><strong>Risk/Reward Ratio</strong> (tỷ lệ rủi ro/lợi nhuận) là con số so sánh giữa mức bạn chấp nhận mất (Risk) và mức bạn kỳ vọng lãi (Reward) cho mỗi giao dịch. R:R = 1:2 nghĩa là bạn rủi ro 1 để kiếm 2. R:R = 1:3 → rủi ro 1 kiếm 3.</p>
<p>R:R là một trong những khái niệm quan trọng nhất trong trading. Một trader có Win Rate chỉ 40% vẫn có thể có lãi nếu R:R trung bình là 1:2 trở lên.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Risk/Reward Ratio - tỷ lệ rủi ro lợi nhuận")}
<h2>2. Cách tính R:R</h2><div style="background:rgba(59,130,246,0.1);padding:20px;border-radius:12px;margin:1em 0;text-align:center;font-size:18px;"><strong>R:R = (Entry - SL) : (TP - Entry)</strong></div>
<h3>Ví dụ 1: Lệnh Buy EUR/USD</h3><p>Entry: 1.0800. SL: 1.0770 (30 pip risk). TP: 1.0860 (60 pip reward). R:R = 30:60 = <strong>1:2</strong></p>
<h3>Ví dụ 2: Lệnh Sell GBP/USD</h3><p>Entry: 1.2650. SL: 1.2680 (30 pip risk). TP: 1.2560 (90 pip reward). R:R = 30:90 = <strong>1:3</strong></p>
<h2>3. Tại sao R:R quan trọng hơn Win Rate?</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Win Rate</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">R:R</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">100 lệnh ($100 risk)</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Kết quả</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">60%</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:1</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">60×$100 - 40×$100</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);color:#4ade80;">+$2,000</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">40%</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:2</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">40×$200 - 60×$100</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);color:#4ade80;">+$2,000</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">30%</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:3</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">30×$300 - 70×$100</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);color:#4ade80;">+$2,000</td></tr><tr><td style="padding:12px;">70%</td><td style="padding:12px;">1:0.5</td><td style="padding:12px;">70×$50 - 30×$100</td><td style="padding:12px;color:#f87171;">+$500</td></tr></tbody></table>
<p>Bảng trên cho thấy: trader thắng 60% với R:R 1:1 lãi BẰNG trader chỉ thắng 30% nhưng R:R 1:3. Tập trung vào R:R tốt thay vì cố ép win rate cao.</p>
<h2>4. Expectancy - Kỳ vọng lợi nhuận</h2><div style="background:rgba(59,130,246,0.1);padding:20px;border-radius:12px;margin:1em 0;text-align:center;font-size:16px;"><strong>Expectancy = (Win% × Avg Win) - (Loss% × Avg Loss)</strong></div>
<p>Expectancy dương → chiến lược có lợi nhuận dài hạn. Ví dụ: Win Rate 45%, Avg Win $200, Avg Loss $100 → Expectancy = (0.45 × 200) - (0.55 × 100) = 90 - 55 = <strong>+$35/lệnh</strong>.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Bảng R:R và Win Rate - mối quan hệ nghịch")}
<h2>5. R:R tối thiểu bao nhiêu?</h2><ul><li><strong>R:R 1:1:</strong> Cần Win Rate > 50% (khả thi với Price Action)</li><li><strong>R:R 1:1.5:</strong> Cần Win Rate > 40% (phổ biến, khuyên dùng)</li><li><strong>R:R 1:2:</strong> Cần Win Rate > 33% (dễ đạt, nhưng TP xa → ít lệnh hit TP)</li><li><strong>R:R 1:3+:</strong> Cần Win Rate > 25% (swing trading, ít lệnh nhưng lãi lớn)</li></ul>
<h2>6. Sai lầm phổ biến</h2><ul><li><strong>Di chuyển TP gần hơn vì sợ:</strong> Làm giảm R:R từ 1:2 xuống 1:1 → hệ thống hết lợi thế</li><li><strong>Di chuyển SL xa hơn:</strong> Không chấp nhận thua → mất nhiều hơn dự kiến</li><li><strong>Ép R:R quá cao:</strong> R:R 1:5 nghe đẹp nhưng win rate sẽ cực thấp, không thực tế</li></ul>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Biểu đồ Win Rate và R:R - vùng lãi/lỗ")}
<h2>7. Kết luận</h2><p>R:R ratio quyết định bạn cần thắng bao nhiêu % để có lãi. Mục tiêu realistc: R:R 1:1.5 đến 1:2 kết hợp Win Rate 40-50%. Trước mỗi lệnh, luôn tự hỏi: "R:R có ít nhất 1:1.5 không?" Nếu không → SKIP lệnh đó.</p>`
    },
    {
        title: "Tâm lý giao dịch: cách kiểm soát cảm xúc FOMO và Revenge Trade",
        slug: "tam-ly-giao-dich-fomo-revenge-trade",
        category: "kien-thuc",
        tags: ["tâm lý", "FOMO", "revenge trade"],
        excerpt: "FOMO, Revenge Trade, Overtrading - 3 kẻ thù lớn nhất của trader. Cách nhận diện, phòng tránh và xây dựng tâm lý trading vững chắc.",
        meta_title: "Tâm Lý Trading: Kiểm Soát FOMO & Revenge Trade | Forex 2026",
        meta_description: "Cách kiểm soát FOMO, Revenge Trade, Overtrading trong Forex. Xây dựng kỷ luật và tâm lý trader chuyên nghiệp.",
        featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        scheduled_at: '2026-03-01T09:00:00Z', // 16:00 VN
        content: `<h2>1. Tại sao tâm lý quan trọng nhất?</h2><p>Trong trading, <strong>80% là tâm lý, 10% là quản lý vốn, 10% là chiến lược</strong> - theo Mark Douglas, tác giả cuốn "Trading in the Zone". Bạn có thể có chiến lược siêu tốt, nhưng nếu tâm lý không vững, bạn sẽ không tuân thủ chiến lược khi gặp áp lực.</p>
<p>3 kẻ thù tâm lý lớn nhất của trader: <strong>FOMO</strong> (Fear of Missing Out), <strong>Revenge Trading</strong> (Trade trả thù), và <strong>Overtrading</strong> (Trade quá nhiều). Nhận diện và kiểm soát 3 điều này giúp bạn vượt qua 90% trader khác.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Tâm lý trading - yếu tố quyết định thành bại")}
<h2>2. FOMO (Fear of Missing Out)</h2><h3>FOMO là gì?</h3><p>FOMO là nỗi sợ bỏ lỡ cơ hội. Bạn thấy giá đang chạy mạnh và nhảy vào mua vì sợ "con sóng này" đi mà không có mình. Kết quả: thường mua ở gần đỉnh, giá đảo chiều → thua.</p>
<h3>Dấu hiệu FOMO</h3><ul><li>Nhìn giá chạy 50-100 pip và cảm thấy "tiếc" vì đã không vào sớm</li><li>Vào lệnh mà không có setup theo kế hoạch, chỉ vì "sợ muộn"</li><li>Tăng lot size vì muốn "bù" cơ hội đã bỏ lỡ</li><li>Nhảy từ cặp tiền này sang cặp tiền khác theo "hot news"</li></ul>
<h3>Cách khắc phục FOMO</h3><ul><li><strong>Quy tắc "Nếu tôi phải đuổi giá → SKIP":</strong> Trade tốt nhất đến từ patience, không phải chasing</li><li><strong>Nhắc nhở:</strong> Thị trường mở 24/5, cơ hội LUÔN LUÔN có. Không có giao dịch nào là cơ hội cuối cùng</li><li><strong>Pre-plan:</strong> Mỗi sáng, liệt kê 2-3 setup chờ đợi. Nếu không match → không trade</li></ul>
<h2>3. Revenge Trading (Trade trả thù)</h2><h3>Revenge Trading là gì?</h3><p>Sau khi thua lệnh, bạn ngay lập tức mở lệnh mới với lot lớn hơn để "gỡ lại". Tâm lý: giận dữ, không chịu thua, muốn "trả thù" thị trường. Kết quả: thường thua thêm → tức giận hơn → trade thêm → vòng xoáy thua lỗ.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Revenge Trading - vòng xoáy thua lỗ nguy hiểm")}
<h3>Cách khắc phục Revenge Trade</h3><ul><li><strong>Quy tắc 2-strike:</strong> Thua 2 lệnh liên tiếp → ĐÓNG MT4, đi ra ngoài ít nhất 2 giờ</li><li><strong>Daily loss limit:</strong> Đặt giới hạn thua tối đa/ngày (ví dụ 3%). Đạt limit → dừng trade</li><li><strong>Nhận diện cảm xúc:</strong> Trước mỗi lệnh, tự hỏi "Tôi đang trade vì setup hay vì muốn gỡ lỗ?"</li><li><strong>Ghi journal:</strong> Viết về cảm xúc khi thua. Awareness là bước đầu tiên kiểm soát</li></ul>
<h2>4. Overtrading</h2><h3>Overtrading là gì?</h3><p>Trade quá nhiều lệnh trong ngày, thường 10-20 lệnh khi chỉ nên trade 1-3. Overtrading xảy ra vì: nghiện adrenline, bored, hoặc không tin vào chiến lược (cần nhiều lệnh mới "an tâm").</p>
<h3>Tác hại</h3><ul><li>Phí spread tích lũy: 15 lệnh/ngày × 1.5 pip spread = 22.5 pip phí/ngày</li><li>Chất lượng setup giảm vì ép mình tìm trade</li><li>Stress và kiệt sức → ảnh hưởng sức khỏe</li></ul>
<h3>Cách khắc phục</h3><p>Đặt giới hạn cứng: tối đa 3 lệnh/ngày. Sau 3 lệnh → đóng MT4. Nếu cả 3 đều thắng và bạn muốn trade thêm, vẫn phải DỪNG. Kỷ luật là khi bạn tuân thủ dù "cảm thấy" muốn làm khác.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Checklist tâm lý trước mỗi phiên trading")}
<h2>5. Xây dựng tâm lý trader</h2><ol><li><strong>Trading Plan:</strong> Viết kế hoạch giao dịch chi tiết VÀ cam kết tuân thủ</li><li><strong>Meditation:</strong> 10 phút thiền trước khi trade giúp tâm tĩnh</li><li><strong>Exercise:</strong> Tập thể dục giúp giảm stress, sáng suốt hơn</li><li><strong>Sách:</strong> Đọc "Trading in the Zone" (Mark Douglas) và "The Disciplined Trader"</li><li><strong>Accountability partner:</strong> Có người mentor/bạn trade kiểm tra lẫn nhau</li></ol>
<h2>6. Kết luận</h2><p>Tâm lý trading không thể học trong 1 tuần - đó là hành trình cả đời. Mỗi lệnh thua là 1 bài học tâm lý. Trader thành công không phải người không bao giờ cảm xúc, mà là người <strong>nhận ra cảm xúc và không hành động theo nó</strong>.</p>`
    }
];

async function main() {
    console.log('📝 Tạo bài 6-10...\n');
    for (const post of posts) {
        const schedAt = post.scheduled_at;
        delete post.scheduled_at;
        const { data, error } = await sb.from('posts').insert([{
            ...post, author: 'Sàn Uy Tín', is_published: false,
            published_at: schedAt, scheduled_at: schedAt,
            featured_image_alt: post.title,
        }]).select('id').single();
        const d = new Date(schedAt);
        const vn = d.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
        if (error) console.log('❌ ' + post.title + ': ' + error.message);
        else console.log(`⏰ ${vn} | [${data.id}] ${post.title}`);
    }
    console.log('\n✅ Batch 2 done (10/10)!');
}
main();
