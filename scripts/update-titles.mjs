import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Tiêu đề mới - thu hút click, dùng power words, số liệu, tạo tò mò
const newTitles = {
    10: { title: '5 Sai Lầm Khi Đặt Stop Loss Khiến Trader Mất Tiền Oan', meta_title: '5 Sai Lầm Stop Loss Khiến Trader Mất Tiền | Cách Khắc Phục' },
    28: { title: 'Forex Là Gì? 7 Điều Người Mới PHẢI Biết Trước Khi Bắt Đầu', meta_title: 'Forex Là Gì? 7 Điều Bắt Buộc Phải Biết Trước Khi Trade' },
    29: { title: 'Đọc Biểu Đồ Nến Nhật Trong 10 Phút - Từ Zero Đến Hero', meta_title: 'Cách Đọc Biểu Đồ Nến Nhật Trong 10 Phút Cho Người Mới' },
    30: { title: '90% Trader Cháy Tài Khoản Vì Bỏ Qua 5 Quy Tắc Quản Lý Vốn Này', meta_title: '5 Quy Tắc Quản Lý Vốn Trading Mà 90% Trader Bỏ Qua' },
    31: { title: 'Phân Tích Kỹ Thuật vs Cơ Bản: Phương Pháp Nào Kiếm Nhiều Tiền Hơn?', meta_title: 'Phân Tích Kỹ Thuật vs Cơ Bản: Đâu Là Phương Pháp Tốt Hơn?' },
    32: { title: 'Tâm Lý Trading: Lý Do Thật Sự Khiến 90% Trader Thất Bại', meta_title: 'Tâm Lý Trading: Lý Do 90% Trader Thất Bại Không Phải Chiến Lược' },
    33: { title: 'Market Order, Limit, Stop: Đặt Lệnh Sai Một Li, Mất Cả Ngàn Đô', meta_title: 'Các Loại Lệnh Forex: Market, Limit, Stop | Đặt Sao Cho Đúng?' },
    37: { title: 'Chỉ Báo RSI: Bí Kíp Tìm Điểm Mua Bán Chính Xác Mà Ít Ai Biết', meta_title: 'RSI Indicator: Bí Kíp Tìm Điểm Mua Bán Forex Chính Xác' },
    57: { title: 'Scalping Forex: Kiếm $50-$200/Ngày Với Chiến Lược Lướt Sóng', meta_title: 'Scalping Forex: Chiến Lược Lướt Sóng Kiếm Lời Mỗi Ngày' },
    61: { title: 'Mở Tài Khoản Demo Miễn Phí Trong 3 Phút - Thực Hành Không Mất Xu', meta_title: 'Mở Tài Khoản Demo Forex Miễn Phí Trong 3 Phút | Hướng Dẫn' },
    62: { title: 'Đòn Bẩy Forex: Con Dao Hai Lưỡi Có Thể Nhân 10 Lợi Nhuận Hoặc Cháy Tài Khoản', meta_title: 'Đòn Bẩy Forex: Nhân 10x Lợi Nhuận Hay Cháy Tài Khoản?' },
    63: { title: 'Spread Forex: Phí Ẩn Đang "Ăn Mòn" Lợi Nhuận Của Bạn Mỗi Ngày', meta_title: 'Spread Forex: Phí Ẩn Đang Ăn Mòn Lợi Nhuận Trader' },
    64: { title: 'Pip Là Gì? Cách Tính Chính Xác Để Biết Mình Lời/Lỗ Bao Nhiêu', meta_title: 'Pip Forex Là Gì? Công Thức Tính Pip Và Giá Trị Pip' },
    65: { title: '7 Dấu Hiệu Nhận Biết Sàn Forex Lừa Đảo - Đừng Mất Tiền Oan', meta_title: '7 Dấu Hiệu Nhận Biết Sàn Forex Lừa Đảo | Cách Tránh' },
    67: { title: 'Lot Size Forex: Tính Sai 1 Bước, Cháy Tài Khoản Cả Đời', meta_title: 'Lot Size Forex: Cách Tính Lot Chuẩn Tránh Cháy Tài Khoản' },
    68: { title: 'Margin Call - Cú Điện Thoại Đáng Sợ Nhất Mà Mọi Trader Đều Ghét', meta_title: 'Margin Call Là Gì? Hiểu Margin Call & Stop Out Để Tránh Mất Vốn' },
    69: { title: '3 Phiên Forex London-NewYork-Tokyo: Giờ Nào Kiếm Tiền Dễ Nhất?', meta_title: '3 Phiên Forex: Giờ Nào Trade Kiếm Tiền Nhiều Nhất?' },
    70: { title: 'MACD: Chỉ Báo "Thần Thánh" Giúp Bắt Đúng Xu Hướng Từ Đầu', meta_title: 'MACD Forex: Cách Dùng MACD Bắt Xu Hướng Chính Xác' },
    71: { title: 'Moving Average: Đường Trung Bình Đơn Giản Nhưng Lãi Bất Ngờ', meta_title: 'EMA vs SMA: Cách Dùng Moving Average Hiệu Quả Trong Forex' },
    72: { title: 'Exness vs XM 2026: Trader Việt Đang Bỏ Sàn Nào? Lý Do Gây Sốc', meta_title: 'Exness vs XM 2026: So Sánh Chi Tiết Cho Trader Việt Nam' },
    73: { title: 'Vùng Hỗ Trợ Kháng Cự: Nắm Vững Là Thắng 70% Lệnh', meta_title: 'Hỗ Trợ Kháng Cự Forex: Cách Xác Định Và Giao Dịch Hiệu Quả' },
    74: { title: 'Phí Swap Qua Đêm: Khoản Phí Bí Ẩn Đang Hút Tiền Bạn Mỗi Đêm', meta_title: 'Swap Forex: Phí Qua Đêm Là Gì? Cách Giảm Và Tránh Swap' },
    75: { title: 'Copy Trade: Ngồi Không Vẫn Có Lãi? Sự Thật Phũ Phàng Ít Ai Nói', meta_title: 'Copy Trade Forex: Sự Thật Về "Ngồi Không Có Lãi" Ít Ai Nói' },
    76: { title: 'Vantage vs Exness 2026: 1 Sàn Phí Rẻ, 1 Sàn Rút Nhanh - Chọn Ai?', meta_title: 'Vantage vs Exness 2026: So Sánh Chi Tiết Phí, Rút Tiền, Ưu Nhược' },
    77: { title: 'Bollinger Bands: Chỉ Báo Dự Đoán "Bão Giá" Trước Khi Nó Xảy Ra', meta_title: 'Bollinger Bands Forex: Dự Đoán Breakout Trước Khi Xảy Ra' },
    78: { title: 'Fibonacci: Tỷ Lệ Vàng Giúp Trader Tìm Điểm Vào Lệnh "Thần Sầu"', meta_title: 'Fibonacci Retracement: Cách Vẽ Và Trade Với Tỷ Lệ Vàng' },
    79: { title: 'Price Action: Giao Dịch "Trần Trụi" Không Indicator Mà Vẫn Lãi', meta_title: 'Price Action Trading: Giao Dịch Thuần Giá Không Indicator' },
    80: { title: 'Drawdown 50%? Bạn Cần Lãi 100% Chỉ Để Hòa Vốn - Đây Là Cách Tránh', meta_title: 'Drawdown Forex: Thua 50% Cần Lãi 100% | Cách Kiểm Soát' },
    81: { title: 'Backtest: Bước Bị Bỏ Qua Nhưng Quyết Định 80% Thành Công Trading', meta_title: 'Backtest Forex: Bước Quyết Định 80% Thành Công Trading' },
    82: { title: '5 Cặp Tiền "Dễ Ăn" Nhất Cho Người Mới - Đừng Trade Cặp Khác', meta_title: 'Top 5 Cặp Tiền Forex Dễ Trade Nhất 2026 Cho Người Mới' },
    83: { title: 'Trading Journal: Vũ Khí Bí Mật Của Top 10% Trader Có Lãi', meta_title: 'Trading Journal: Bí Mật Của Top 10% Trader Thành Công' },
    84: { title: 'IC Markets vs Exness: "Ông Lớn" Nào Thật Sự Tốt Cho Trader Việt?', meta_title: 'IC Markets vs Exness 2026: So Sánh Toàn Diện Cho Trader Việt' },
    85: { title: 'Lịch Kinh Tế: Biết Đọc Tin Này, Bạn Đi Trước 90% Trader Khác', meta_title: 'Đọc Tin Tức Kinh Tế Forex: Đi Trước 90% Trader Khác' },
    86: { title: 'Head & Shoulders, Double Top: 3 Mô Hình Đảo Chiều Chính Xác Nhất', meta_title: 'Mô Hình Head Shoulders, Double Top | 3 Pattern Chính Xác Nhất' },
    87: { title: 'Trendline: Vẽ 1 Đường Thẳng Mà Biết Giá Đi Đâu - Cách Làm Đúng', meta_title: 'Cách Vẽ Trendline Chuẩn: 1 Đường Thẳng Biết Giá Đi Đâu' },
    88: { title: 'MT4 vs MT5: Trader Pro Dùng Cái Nào? Câu Trả Lời Gây Bất Ngờ', meta_title: 'MT4 vs MT5 2026: Trader Chuyên Nghiệp Chọn Nền Tảng Nào?' },
    89: { title: 'Breakout Trading: Chiến Lược "Phá Rào" Thu Lợi Nhuận Lớn Nhất', meta_title: 'Breakout Trading Forex: Chiến Lược Phá Vỡ Lợi Nhuận Lớn' },
    90: { title: 'Forex vs Chứng Khoán: Bỏ 5 Triệu Vào Đâu Sinh Lời Nhanh Hơn?', meta_title: 'Forex vs Chứng Khoán VN: Đầu Tư Đâu Sinh Lời Nhanh Hơn?' },
    91: { title: 'Position Sizing: Công Thức Tính Lot Mà 95% Trader Không Biết', meta_title: 'Position Sizing Forex: Công Thức Tính Lot Chuẩn Xác' },
    92: { title: 'Trend Following: Chiến Lược "Lười" Nhưng Lãi Nhất Mọi Thời Đại', meta_title: 'Trend Following: Chiến Lược Trading Lãi Nhất Mọi Thời Đại' },
    93: { title: 'Risk/Reward 1:3 - Chỉ Cần Thắng 30% Lệnh Vẫn Có Lãi, Đây Là Cách', meta_title: 'Risk Reward Ratio: Thắng 30% Lệnh Vẫn Lãi | Cách Tính R:R' },
    94: { title: 'FOMO và Revenge Trade: 2 "Sát Thủ Thầm Lặng" Giết Chết Tài Khoản', meta_title: 'FOMO & Revenge Trade: 2 Sát Thủ Giết Tài Khoản Trading' },
    95: { title: 'Supply/Demand Zone: Giao Dịch Theo "Dấu Chân" Của Ngân Hàng Lớn', meta_title: 'Supply Demand Zone: Trade Theo Dấu Chân Ngân Hàng Lớn' },
};

async function main() {
    console.log('✏️ Cập nhật tiêu đề thu hút hơn...\n');
    let count = 0;
    for (const [id, update] of Object.entries(newTitles)) {
        const { error } = await sb.from('posts').update({
            title: update.title,
            meta_title: update.meta_title,
            updated_at: new Date().toISOString()
        }).eq('id', Number(id));
        if (error) console.log(`❌ [${id}] ${error.message}`);
        else { console.log(`✅ [${id}] ${update.title}`); count++; }
    }
    console.log(`\n✅ Đã cập nhật ${count} tiêu đề!`);
}
main();
