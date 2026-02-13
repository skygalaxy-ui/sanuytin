const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

// Unsplash images for each category
const categoryImages = {
    'tin-tuc': [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
        'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800',
        'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
        'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800',
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    ],
    'kien-thuc': [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
        'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800',
        'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800',
    ],
    'huong-dan': [
        'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
        'https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=800',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    ],
    'phan-tich': [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
        'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800',
        'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
        'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800',
        'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?w=800',
    ],
    'review': [
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
        'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
    ],
};

// Content with tables based on slug
const contentWithTables = {
    // TIN TUC
    'fed-giu-nguyen-lai-suat-thang-2-2026': {
        table: `<h2>Tổng Quan Quyết Định Lãi Suất Fed 2026</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#1e3a5f; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Cuộc họp</th>
<th style="padding:12px; border:1px solid #ddd;">Lãi suất</th>
<th style="padding:12px; border:1px solid #ddd;">Thay đổi</th>
<th style="padding:12px; border:1px solid #ddd;">Tác động USD</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Tháng 1/2026</td><td style="padding:10px; border:1px solid #ddd;">4.25%-4.50%</td><td style="padding:10px; border:1px solid #ddd;">Giữ nguyên</td><td style="padding:10px; border:1px solid #ddd;">Trung lập</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Tháng 2/2026</td><td style="padding:10px; border:1px solid #ddd;">4.25%-4.50%</td><td style="padding:10px; border:1px solid #ddd;">Giữ nguyên</td><td style="padding:10px; border:1px solid #ddd;">Tích cực</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Dự báo Q2</td><td style="padding:10px; border:1px solid #ddd;">4.00%-4.25%</td><td style="padding:10px; border:1px solid #ddd;">-0.25%</td><td style="padding:10px; border:1px solid #ddd;">Tiêu cực</td></tr>
</tbody></table>`,
    },
    'gia-vang-vuot-moc-2100-usd': {
        table: `<h2>Biến Động Giá Vàng Tháng 2/2026</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#b8860b; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Thời điểm</th>
<th style="padding:12px; border:1px solid #ddd;">Giá (USD/oz)</th>
<th style="padding:12px; border:1px solid #ddd;">Mức hỗ trợ</th>
<th style="padding:12px; border:1px solid #ddd;">Mức kháng cự</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Đầu tháng</td><td style="padding:10px; border:1px solid #ddd;">2,050</td><td style="padding:10px; border:1px solid #ddd;">2,020</td><td style="padding:10px; border:1px solid #ddd;">2,080</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Giữa tháng</td><td style="padding:10px; border:1px solid #ddd;">2,085</td><td style="padding:10px; border:1px solid #ddd;">2,060</td><td style="padding:10px; border:1px solid #ddd;">2,100</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Hiện tại</td><td style="padding:10px; border:1px solid #ddd; color:green; font-weight:bold;">2,105</td><td style="padding:10px; border:1px solid #ddd;">2,080</td><td style="padding:10px; border:1px solid #ddd;">2,150</td></tr>
</tbody></table>`,
    },

    // KIEN THUC
    'forex-la-gi-huong-dan-nguoi-moi': {
        table: `<h2>So Sánh Các Cặp Tiền Tệ Chính</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#2563eb; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Cặp tiền</th>
<th style="padding:12px; border:1px solid #ddd;">Spread TB</th>
<th style="padding:12px; border:1px solid #ddd;">Biến động</th>
<th style="padding:12px; border:1px solid #ddd;">Phù hợp với</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">EUR/USD</td><td style="padding:10px; border:1px solid #ddd;">0.1-0.3 pips</td><td style="padding:10px; border:1px solid #ddd;">Thấp</td><td style="padding:10px; border:1px solid #ddd;">Người mới</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">GBP/USD</td><td style="padding:10px; border:1px solid #ddd;">0.5-1.0 pips</td><td style="padding:10px; border:1px solid #ddd;">Trung bình</td><td style="padding:10px; border:1px solid #ddd;">Trung cấp</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">USD/JPY</td><td style="padding:10px; border:1px solid #ddd;">0.2-0.5 pips</td><td style="padding:10px; border:1px solid #ddd;">Trung bình</td><td style="padding:10px; border:1px solid #ddd;">Mọi cấp độ</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">XAU/USD</td><td style="padding:10px; border:1px solid #ddd;">2-5 pips</td><td style="padding:10px; border:1px solid #ddd;">Cao</td><td style="padding:10px; border:1px solid #ddd;">Chuyên nghiệp</td></tr>
</tbody></table>`,
    },
    'quan-ly-von-trong-trading': {
        table: `<h2>Bảng Tính Rủi Ro Theo Vốn</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#dc2626; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Vốn ($)</th>
<th style="padding:12px; border:1px solid #ddd;">Rủi ro 1%</th>
<th style="padding:12px; border:1px solid #ddd;">Rủi ro 2%</th>
<th style="padding:12px; border:1px solid #ddd;">Rủi ro 3%</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">$1,000</td><td style="padding:10px; border:1px solid #ddd;">$10</td><td style="padding:10px; border:1px solid #ddd;">$20</td><td style="padding:10px; border:1px solid #ddd;">$30</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">$5,000</td><td style="padding:10px; border:1px solid #ddd;">$50</td><td style="padding:10px; border:1px solid #ddd;">$100</td><td style="padding:10px; border:1px solid #ddd;">$150</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">$10,000</td><td style="padding:10px; border:1px solid #ddd;">$100</td><td style="padding:10px; border:1px solid #ddd;">$200</td><td style="padding:10px; border:1px solid #ddd;">$300</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">$50,000</td><td style="padding:10px; border:1px solid #ddd;">$500</td><td style="padding:10px; border:1px solid #ddd;">$1,000</td><td style="padding:10px; border:1px solid #ddd;">$1,500</td></tr>
</tbody></table>`,
    },
    'cac-loai-lenh-trong-forex': {
        table: `<h2>So Sánh Các Loại Lệnh Forex</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#7c3aed; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Loại lệnh</th>
<th style="padding:12px; border:1px solid #ddd;">Mô tả</th>
<th style="padding:12px; border:1px solid #ddd;">Khi nào dùng</th>
<th style="padding:12px; border:1px solid #ddd;">Ưu điểm</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;"><strong>Market Order</strong></td><td style="padding:10px; border:1px solid #ddd;">Khớp lệnh ngay tại giá hiện tại</td><td style="padding:10px; border:1px solid #ddd;">Vào lệnh nhanh</td><td style="padding:10px; border:1px solid #ddd;">Không bỏ lỡ cơ hội</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;"><strong>Limit Order</strong></td><td style="padding:10px; border:1px solid #ddd;">Khớp lệnh tại giá đặt trước</td><td style="padding:10px; border:1px solid #ddd;">Chờ giá tốt hơn</td><td style="padding:10px; border:1px solid #ddd;">Entry chính xác</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;"><strong>Stop Order</strong></td><td style="padding:10px; border:1px solid #ddd;">Kích hoạt khi giá chạm mốc</td><td style="padding:10px; border:1px solid #ddd;">Breakout trading</td><td style="padding:10px; border:1px solid #ddd;">Bắt xu hướng</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;"><strong>Stop Loss</strong></td><td style="padding:10px; border:1px solid #ddd;">Tự động cắt lỗ</td><td style="padding:10px; border:1px solid #ddd;">Quản lý rủi ro</td><td style="padding:10px; border:1px solid #ddd;">Bảo vệ vốn</td></tr>
</tbody></table>`,
    },

    // REVIEW
    'danh-gia-san-vantage-2026': {
        table: `<h2>Thông Tin Chi Tiết Sàn Vantage</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#059669; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Tiêu chí</th>
<th style="padding:12px; border:1px solid #ddd;">Thông tin</th>
<th style="padding:12px; border:1px solid #ddd;">Đánh giá</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Giấy phép</td><td style="padding:10px; border:1px solid #ddd;">ASIC, FCA, CIMA</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Spread EUR/USD</td><td style="padding:10px; border:1px solid #ddd;">Từ 0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Đòn bẩy tối đa</td><td style="padding:10px; border:1px solid #ddd;">1:1000</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Nạp tối thiểu</td><td style="padding:10px; border:1px solid #ddd;">$50</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Hỗ trợ tiếng Việt</td><td style="padding:10px; border:1px solid #ddd;">24/7</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Tổng điểm</td><td style="padding:10px; border:1px solid #ddd;"></td><td style="padding:10px; border:1px solid #ddd; font-weight:bold; color:green;">9.5/10</td></tr>
</tbody></table>`,
    },
    'danh-gia-san-exness-2026': {
        table: `<h2>Thông Tin Chi Tiết Sàn Exness</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#0ea5e9; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Tiêu chí</th>
<th style="padding:12px; border:1px solid #ddd;">Thông tin</th>
<th style="padding:12px; border:1px solid #ddd;">Đánh giá</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Giấy phép</td><td style="padding:10px; border:1px solid #ddd;">FCA, CySEC, FSCA</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Spread EUR/USD</td><td style="padding:10px; border:1px solid #ddd;">Từ 0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Đòn bẩy tối đa</td><td style="padding:10px; border:1px solid #ddd;">Không giới hạn</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Nạp tối thiểu</td><td style="padding:10px; border:1px solid #ddd;">$1</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Rút tiền</td><td style="padding:10px; border:1px solid #ddd;">Tức thì 24/7</td><td style="padding:10px; border:1px solid #ddd;">⭐⭐⭐⭐⭐</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Tổng điểm</td><td style="padding:10px; border:1px solid #ddd;"></td><td style="padding:10px; border:1px solid #ddd; font-weight:bold; color:green;">9.8/10</td></tr>
</tbody></table>`,
    },
    'so-sanh-exness-vs-vantage': {
        table: `<h2>So Sánh Chi Tiết Exness vs Vantage</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#1e3a5f; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Tiêu chí</th>
<th style="padding:12px; border:1px solid #ddd;">Exness</th>
<th style="padding:12px; border:1px solid #ddd;">Vantage</th>
<th style="padding:12px; border:1px solid #ddd;">Tốt hơn</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Spread</td><td style="padding:10px; border:1px solid #ddd;">0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">Hòa</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Đòn bẩy</td><td style="padding:10px; border:1px solid #ddd; color:green;">Không giới hạn</td><td style="padding:10px; border:1px solid #ddd;">1:1000</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Exness</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Nạp tối thiểu</td><td style="padding:10px; border:1px solid #ddd; color:green;">$1</td><td style="padding:10px; border:1px solid #ddd;">$50</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Exness</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Rút tiền</td><td style="padding:10px; border:1px solid #ddd; color:green;">Tức thì</td><td style="padding:10px; border:1px solid #ddd;">1-3 ngày</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Exness</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Copy Trading</td><td style="padding:10px; border:1px solid #ddd;">Có</td><td style="padding:10px; border:1px solid #ddd; color:green;">Có (tốt hơn)</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Vantage</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Bonus</td><td style="padding:10px; border:1px solid #ddd;">Không</td><td style="padding:10px; border:1px solid #ddd; color:green;">Có</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Vantage</td></tr>
</tbody></table>`,
    },
    'top-5-san-forex-phi-thap-nhat': {
        table: `<h2>Top 5 Sàn Forex Phí Thấp Nhất 2026</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#f59e0b; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Hạng</th>
<th style="padding:12px; border:1px solid #ddd;">Sàn</th>
<th style="padding:12px; border:1px solid #ddd;">Spread EUR/USD</th>
<th style="padding:12px; border:1px solid #ddd;">Phí hoa hồng</th>
<th style="padding:12px; border:1px solid #ddd;">Điểm</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">🥇 1</td><td style="padding:10px; border:1px solid #ddd;">IC Markets</td><td style="padding:10px; border:1px solid #ddd;">0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">$3.5/lot</td><td style="padding:10px; border:1px solid #ddd;">9.9</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">🥈 2</td><td style="padding:10px; border:1px solid #ddd;">Exness</td><td style="padding:10px; border:1px solid #ddd;">0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">$3.5/lot</td><td style="padding:10px; border:1px solid #ddd;">9.8</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">🥉 3</td><td style="padding:10px; border:1px solid #ddd;">Vantage</td><td style="padding:10px; border:1px solid #ddd;">0.0 pips</td><td style="padding:10px; border:1px solid #ddd;">$3/lot</td><td style="padding:10px; border:1px solid #ddd;">9.5</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">4</td><td style="padding:10px; border:1px solid #ddd;">Pepperstone</td><td style="padding:10px; border:1px solid #ddd;">0.1 pips</td><td style="padding:10px; border:1px solid #ddd;">$3.5/lot</td><td style="padding:10px; border:1px solid #ddd;">9.3</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">5</td><td style="padding:10px; border:1px solid #ddd;">FP Markets</td><td style="padding:10px; border:1px solid #ddd;">0.1 pips</td><td style="padding:10px; border:1px solid #ddd;">$3/lot</td><td style="padding:10px; border:1px solid #ddd;">9.2</td></tr>
</tbody></table>`,
    },

    // PHAN TICH
    'phan-tich-eurusd-xu-huong-tang': {
        table: `<h2>Mức Quan Trọng EUR/USD</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#059669; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Loại</th>
<th style="padding:12px; border:1px solid #ddd;">Mức giá</th>
<th style="padding:12px; border:1px solid #ddd;">Độ mạnh</th>
<th style="padding:12px; border:1px solid #ddd;">Gợi ý</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Kháng cự 2</td><td style="padding:10px; border:1px solid #ddd;">1.1200</td><td style="padding:10px; border:1px solid #ddd;">Mạnh</td><td style="padding:10px; border:1px solid #ddd;">Take Profit 2</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Kháng cự 1</td><td style="padding:10px; border:1px solid #ddd;">1.1050</td><td style="padding:10px; border:1px solid #ddd;">Trung bình</td><td style="padding:10px; border:1px solid #ddd;">Take Profit 1</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd; background:#e0f2e9;">Giá hiện tại</td><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">1.0920</td><td style="padding:10px; border:1px solid #ddd;">-</td><td style="padding:10px; border:1px solid #ddd;">Entry Buy</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Hỗ trợ 1</td><td style="padding:10px; border:1px solid #ddd;">1.0850</td><td style="padding:10px; border:1px solid #ddd;">Trung bình</td><td style="padding:10px; border:1px solid #ddd;">Stop Loss</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Hỗ trợ 2</td><td style="padding:10px; border:1px solid #ddd;">1.0750</td><td style="padding:10px; border:1px solid #ddd;">Mạnh</td><td style="padding:10px; border:1px solid #ddd;">Entry Buy mạnh</td></tr>
</tbody></table>`,
    },

    // HUONG DAN
    'huong-dan-mo-tai-khoan-vantage': {
        table: `<h2>Các Bước Mở Tài Khoản Vantage</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#7c3aed; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Bước</th>
<th style="padding:12px; border:1px solid #ddd;">Hành động</th>
<th style="padding:12px; border:1px solid #ddd;">Thời gian</th>
<th style="padding:12px; border:1px solid #ddd;">Lưu ý</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">1</td><td style="padding:10px; border:1px solid #ddd;">Truy cập website Vantage</td><td style="padding:10px; border:1px solid #ddd;">1 phút</td><td style="padding:10px; border:1px solid #ddd;">Dùng link chính thức</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">2</td><td style="padding:10px; border:1px solid #ddd;">Điền thông tin cá nhân</td><td style="padding:10px; border:1px solid #ddd;">5 phút</td><td style="padding:10px; border:1px solid #ddd;">Đúng với CMND/CCCD</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">3</td><td style="padding:10px; border:1px solid #ddd;">Xác minh email</td><td style="padding:10px; border:1px solid #ddd;">1 phút</td><td style="padding:10px; border:1px solid #ddd;">Kiểm tra spam</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">4</td><td style="padding:10px; border:1px solid #ddd;">Upload giấy tờ tùy thân</td><td style="padding:10px; border:1px solid #ddd;">5 phút</td><td style="padding:10px; border:1px solid #ddd;">CMND/CCCD + Sổ hộ khẩu</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">5</td><td style="padding:10px; border:1px solid #ddd;">Chờ phê duyệt</td><td style="padding:10px; border:1px solid #ddd;">1-24 giờ</td><td style="padding:10px; border:1px solid #ddd;">Thường 1-2 giờ</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">6</td><td style="padding:10px; border:1px solid #ddd;">Nạp tiền và giao dịch</td><td style="padding:10px; border:1px solid #ddd;">5 phút</td><td style="padding:10px; border:1px solid #ddd;">Nạp tối thiểu $50</td></tr>
</tbody></table>`,
    },
    'cach-nap-rut-tien-exness': {
        table: `<h2>Phương Thức Nạp/Rút Tiền Exness</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead><tr style="background:#0ea5e9; color:white;">
<th style="padding:12px; border:1px solid #ddd;">Phương thức</th>
<th style="padding:12px; border:1px solid #ddd;">Thời gian nạp</th>
<th style="padding:12px; border:1px solid #ddd;">Thời gian rút</th>
<th style="padding:12px; border:1px solid #ddd;">Phí</th>
</tr></thead>
<tbody>
<tr><td style="padding:10px; border:1px solid #ddd;">Ngân hàng nội địa</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd; color:green;">Miễn phí</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">MoMo</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd; color:green;">Miễn phí</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">USDT (TRC20)</td><td style="padding:10px; border:1px solid #ddd;">10-30 phút</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd; color:green;">Miễn phí</td></tr>
<tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd;">Thẻ Visa/Master</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd;">3-5 ngày</td><td style="padding:10px; border:1px solid #ddd; color:green;">Miễn phí</td></tr>
<tr><td style="padding:10px; border:1px solid #ddd;">Skrill/Neteller</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd;">Tức thì</td><td style="padding:10px; border:1px solid #ddd; color:green;">Miễn phí</td></tr>
</tbody></table>`,
    },
};

function generateEnhancedContent(title, slug) {
    const tableContent = contentWithTables[slug]?.table || '';

    const intro = `<h2>Giới thiệu</h2><p>${title} là một trong những chủ đề quan trọng mà các trader cần nắm vững để thành công trong thị trường Forex. Trong bài viết này, chúng tôi sẽ phân tích chi tiết và cung cấp những thông tin hữu ích nhất cho bạn đọc. Thị trường Forex là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng nghìn tỷ USD mỗi ngày, thu hút hàng triệu nhà đầu tư từ khắp nơi trên thế giới tham gia giao dịch.</p>`;

    const analysis = `<h2>Phân Tích Chi Tiết</h2><p>Để hiểu rõ hơn về vấn đề này, chúng ta cần xem xét nhiều khía cạnh khác nhau. Đầu tiên, yếu tố kinh tế vĩ mô đóng vai trò quan trọng trong việc định hướng xu hướng thị trường. Các chỉ số như GDP, lạm phát, lãi suất và tỷ lệ thất nghiệp đều có tác động trực tiếp đến giá trị đồng tiền và biến động thị trường.</p><p>Thứ hai, tâm lý thị trường cũng là yếu tố không thể bỏ qua. Khi nhà đầu tư lo ngại về rủi ro, họ thường chuyển sang các tài sản an toàn như USD, JPY hoặc vàng. Ngược lại, khi thị trường lạc quan, các đồng tiền rủi ro cao như AUD, NZD thường được ưa chuộng hơn.</p>`;

    const strategy = `<h2>Chiến Lược Giao Dịch</h2><p>Dựa trên phân tích trên, trader có thể áp dụng một số chiến lược phù hợp với phong cách và mục tiêu của mình. Đối với trader ngắn hạn, việc theo dõi các phiên giao dịch chính như London, New York và Tokyo là rất quan trọng vì đây là thời điểm thanh khoản cao nhất.</p><p>Đối với trader dài hạn, phân tích cơ bản và xu hướng lớn sẽ là nền tảng cho quyết định giao dịch. Quản lý rủi ro là yếu tố sống còn - không nên mạo hiểm quá 2% vốn cho mỗi giao dịch.</p>`;

    const tips = `<h2>Những Điều Cần Lưu Ý</h2><p>Khi tham gia giao dịch Forex, bạn cần lưu ý một số điểm quan trọng. Thứ nhất, luôn cập nhật tin tức kinh tế và các sự kiện có thể ảnh hưởng đến thị trường. Lịch kinh tế là công cụ không thể thiếu.</p><p>Thứ hai, đừng để cảm xúc chi phối quyết định giao dịch. Lòng tham và sợ hãi là kẻ thù lớn nhất của trader. Thứ ba, hãy liên tục học hỏi và cải thiện kỹ năng trading của mình.</p>`;

    const conclusion = `<h2>Kết Luận</h2><p>Tóm lại, ${title.toLowerCase()} là vấn đề đáng quan tâm đối với mọi trader. Bằng cách nắm vững kiến thức cơ bản, xây dựng chiến lược phù hợp và quản lý rủi ro tốt, bạn hoàn toàn có thể thành công trong thị trường Forex.</p><p>Hãy nhớ rằng trading là một hành trình dài, đừng nóng vội mà hãy kiên nhẫn tích lũy kinh nghiệm từng ngày. Chúc bạn giao dịch thành công!</p>`;

    return intro + tableContent + analysis + strategy + tips + conclusion;
}

async function updatePosts() {
    console.log('🚀 Bắt đầu cập nhật bài viết với ảnh và bảng...\n');

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Lỗi lấy bài viết:', error.message);
        return;
    }

    console.log(`📊 Tìm thấy ${posts.length} bài viết\n`);

    const categoryCount = {};
    let updated = 0;

    for (const post of posts) {
        const cat = post.category;
        categoryCount[cat] = (categoryCount[cat] || 0);

        const images = categoryImages[cat] || categoryImages['tin-tuc'];
        const imageIndex = categoryCount[cat] % images.length;
        const featuredImage = images[imageIndex];

        categoryCount[cat]++;

        const newContent = generateEnhancedContent(post.title, post.slug);

        const { error: updateError } = await supabase
            .from('posts')
            .update({
                featured_image: featuredImage,
                featured_image_alt: post.title,
                content: newContent,
            })
            .eq('id', post.id);

        if (updateError) {
            console.log(`❌ ${post.title.substring(0, 40)}...`);
        } else {
            updated++;
            const hasTable = contentWithTables[post.slug] ? '📊' : '📝';
            console.log(`✅ ${hasTable} ${post.title.substring(0, 45)}...`);
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 Đã cập nhật ${updated}/${posts.length} bài viết!`);
    console.log(`   - Thêm ảnh đại diện từ Unsplash`);
    console.log(`   - Thêm bảng cho ${Object.keys(contentWithTables).length} bài viết`);
    console.log(`${'='.repeat(50)}\n`);
}

updatePosts();
