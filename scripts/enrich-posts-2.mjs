import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const IL = {
    home: '<a href="/">Sàn Uy Tín</a>',
    compare: '<a href="/so-sanh">So sánh sàn Forex</a>',
    exness: '<a href="/exness">Exness</a>',
    xm: '<a href="/xm">XM</a>',
    vantage: '<a href="/vantage">Vantage</a>',
    news: '<a href="/tin-tuc">Tin tức thị trường</a>',
    forexBasic: '<a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a>',
    techAnalysis: '<a href="/tin-tuc/phan-tich-ky-thuat-vs-co-ban">phân tích kỹ thuật vs cơ bản</a>',
    moneyMgmt: '<a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn trong trading</a>',
    candlestick: '<a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">đọc biểu đồ nến Nhật</a>',
    psychology: '<a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a>',
    orderTypes: '<a href="/tin-tuc/cac-loai-lenh-trong-forex">các loại lệnh trong Forex</a>',
    mt4: '<a href="/tin-tuc/cach-cai-dat-metatrader-4">cài đặt MetaTrader 4</a>',
    rsi: '<a href="/tin-tuc/huong-dan-su-dung-rsi">hướng dẫn sử dụng RSI</a>',
    copyTrade: '<a href="/tin-tuc/huong-dan-copy-trading">hướng dẫn copy trading</a>',
    scalping: '<a href="/tin-tuc/scalping-forex-chien-luoc-luot-song">chiến lược scalping</a>',
    stopLoss: '<a href="/tin-tuc/cach-dat-stop-loss-take-profit">cách đặt Stop Loss & Take Profit</a>',
    demo: '<a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">mở tài khoản demo</a>',
    cachdautu: '<a href="https://cachdautu.com/">Cách Đầu Tư</a>',
};

const updates = [
    {
        slug: 'forex-la-gi-huong-dan-nguoi-moi',
        content: `<h2>Forex là gì? Thị trường ngoại hối toàn cầu</h2>
<p>Forex (Foreign Exchange) hay thị trường ngoại hối là nơi các đồng tiền tệ của các quốc gia được mua bán liên tục. Với khối lượng giao dịch hàng ngày vượt 7.5 nghìn tỷ USD (theo BIS 2025), Forex là thị trường tài chính lớn nhất và thanh khoản cao nhất trên thế giới — gấp hàng chục lần thị trường chứng khoán Mỹ.</p>
<p>Khác với chứng khoán, Forex hoạt động 24/5 và phi tập trung (OTC), tức giao dịch diễn ra trực tiếp giữa các bên qua mạng lưới ngân hàng, tổ chức tài chính và sàn giao dịch trực tuyến. Tại Việt Nam, trader có thể tham gia thông qua các sàn quốc tế uy tín như ${IL.exness}, ${IL.xm}, hoặc ${IL.vantage}.</p>
<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Biểu đồ giao dịch Forex trên màn hình" />

<h2>Các cặp tiền tệ phổ biến trong Forex</h2>
<p>Trong giao dịch Forex, bạn luôn giao dịch theo cặp — mua một đồng tiền đồng thời bán đồng tiền khác. Cặp tiền được chia thành 3 nhóm chính:</p>
<table><thead><tr><th>Nhóm</th><th>Cặp tiền</th><th>Tên gọi</th><th>Spread TB</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td rowspan="3">Major</td><td>EUR/USD</td><td>Fiber</td><td>0.6-1.0 pip</td><td>Thanh khoản cao nhất</td></tr>
<tr><td>GBP/USD</td><td>Cable</td><td>1.0-2.0 pip</td><td>Biến động mạnh</td></tr>
<tr><td>USD/JPY</td><td>Gopher</td><td>0.7-1.2 pip</td><td>Ổn định, phù hợp người mới</td></tr>
<tr><td rowspan="2">Minor</td><td>EUR/GBP</td><td>Chunnel</td><td>1.5-2.5 pip</td><td>Biến động thấp</td></tr>
<tr><td>AUD/NZD</td><td>Aussie-Kiwi</td><td>2.0-3.5 pip</td><td>Tương quan cao</td></tr>
<tr><td rowspan="2">Exotic</td><td>USD/TRY</td><td>—</td><td>8-15 pip</td><td>Spread cao, rủi ro lớn</td></tr>
<tr><td>USD/ZAR</td><td>—</td><td>10-20 pip</td><td>Biến động cực mạnh</td></tr>
</tbody></table>

<h2>Các phiên giao dịch Forex (giờ Việt Nam)</h2>
<table><thead><tr><th>Phiên</th><th>Giờ mở cửa</th><th>Giờ đóng cửa</th><th>Cặp tiền nổi bật</th><th>Đặc điểm giao dịch</th></tr></thead><tbody>
<tr><td>🇯🇵 Á (Tokyo)</td><td>06:00</td><td>15:00</td><td>USD/JPY, AUD/USD</td><td>Biến động vừa phải, phù hợp ${IL.scalping}</td></tr>
<tr><td>🇬🇧 Âu (London)</td><td>14:00</td><td>23:00</td><td>EUR/USD, GBP/USD</td><td>Thanh khoản và biến động cao nhất</td></tr>
<tr><td>🇺🇸 Mỹ (New York)</td><td>19:00</td><td>04:00</td><td>EUR/USD, USD/CAD</td><td>Sôi động khi trùng phiên Âu (19h-23h)</td></tr>
</tbody></table>

<h2>Thuật ngữ Forex cơ bản cần biết</h2>
<p>Trước khi bắt đầu, hãy nắm vững những thuật ngữ quan trọng: <strong>Pip</strong> là đơn vị đo nhỏ nhất của giá (thường là chữ số thập phân thứ 4). <strong>Lot</strong> là đơn vị khối lượng (1 standard lot = 100,000 đơn vị). <strong>Spread</strong> là chênh lệch giá mua-bán, cũng là phí giao dịch chính. <strong>Leverage</strong> (đòn bẩy) cho phép giao dịch với vốn lớn hơn số tiền thực có.</p>
<p>Để hiểu sâu hơn về ${IL.orderTypes} và cách ${IL.stopLoss}, hãy đọc các bài hướng dẫn chi tiết.</p>

<h2>Bước đầu tiên: Mở tài khoản demo</h2>
<p>Cách tốt nhất để bắt đầu là ${IL.demo} tại một sàn uy tín. Bạn sẽ nhận được tiền ảo ($10,000-$100,000) để thực hành giao dịch trong điều kiện thị trường thực. Sau khi tự tin, hãy chuyển sang tài khoản thật với số vốn nhỏ.</p>
<ul>
<li><strong>Bước 1:</strong> Chọn sàn uy tín — ${IL.compare} để tìm sàn phù hợp</li>
<li><strong>Bước 2:</strong> ${IL.mt4} — nền tảng phổ biến nhất cho trader mới</li>
<li><strong>Bước 3:</strong> Học ${IL.candlestick} và ${IL.techAnalysis}</li>
<li><strong>Bước 4:</strong> Nắm vững ${IL.moneyMgmt} — yếu tố sống còn</li>
<li><strong>Bước 5:</strong> Rèn luyện ${IL.psychology} — kiểm soát cảm xúc khi giao dịch</li>
</ul>
<p>Tham khảo thêm kiến thức đầu tư tại ${IL.cachdautu} để cập nhật xu hướng thị trường mới nhất.</p>`
    },

    {
        slug: 'quan-ly-von-trong-trading',
        content: `<h2>Quản lý vốn — Kỹ năng sống còn trong Forex</h2>
<p>Hơn 80% trader thua lỗ không phải vì chiến lược sai, mà vì quản lý vốn kém. Bạn có thể thắng 70% số lệnh nhưng nếu mỗi lần thua lỗ gấp 5 lần lợi nhuận mỗi lần thắng, tài khoản vẫn cháy. Quản lý vốn (Money Management) là tập hợp các nguyên tắc giúp bạn tồn tại đủ lâu trên thị trường để kiếm lợi nhuận bền vững.</p>
<p>Nếu bạn mới bắt đầu giao dịch, hãy đọc bài ${IL.forexBasic} trước, sau đó quay lại đây để nắm vững nghệ thuật quản lý vốn.</p>
<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Quản lý vốn rủi ro trong giao dịch Forex" />

<h2>Quy tắc 2% — Nguyên tắc vàng</h2>
<p>Mỗi lệnh giao dịch, không bao giờ rủi ro quá 1-2% tổng vốn tài khoản. Bảng dưới đây minh họa vì sao:</p>
<table><thead><tr><th>Vốn ban đầu</th><th>Rủi ro/lệnh</th><th>Thua 5 lệnh liên tiếp</th><th>Vốn còn lại</th><th>Cần lãi để hồi vốn</th></tr></thead><tbody>
<tr><td>$1,000</td><td>1% ($10)</td><td>-$50</td><td>$950</td><td>5.3%</td></tr>
<tr><td>$1,000</td><td>2% ($20)</td><td>-$100</td><td>$900</td><td>11.1%</td></tr>
<tr><td>$1,000</td><td>5% ($50)</td><td>-$250</td><td>$750</td><td>33.3%</td></tr>
<tr><td>$1,000</td><td>10% ($100)</td><td>-$500</td><td>$500</td><td>100% ⚠️</td></tr>
<tr><td>$1,000</td><td>20% ($200)</td><td>-$1,000</td><td>$0</td><td>💀 Cháy TK</td></tr>
</tbody></table>

<h2>Tỷ lệ Risk/Reward tối thiểu 1:2</h2>
<p>Take Profit (TP) phải gấp ít nhất 2 lần Stop Loss (SL). Ví dụ: SL 30 pip → TP tối thiểu 60 pip. Với R:R 1:2, bạn chỉ cần thắng 40% số lệnh để vẫn có lãi. Đọc bài ${IL.stopLoss} để biết cách đặt SL và TP chính xác.</p>

<h2>Bảng tính khối lượng giao dịch (Lot) phù hợp</h2>
<p>Công thức: <strong>Lot = (Vốn × %Rủi ro) / (SL pip × Giá trị pip)</strong></p>
<table><thead><tr><th>Vốn</th><th>Rủi ro 2%</th><th>SL (pip)</th><th>Giá trị pip/0.01 lot</th><th>Lot khuyến nghị</th></tr></thead><tbody>
<tr><td>$200</td><td>$4</td><td>20</td><td>$0.10</td><td>0.02 lot</td></tr>
<tr><td>$500</td><td>$10</td><td>30</td><td>$0.10</td><td>0.03 lot</td></tr>
<tr><td>$1,000</td><td>$20</td><td>40</td><td>$0.10</td><td>0.05 lot</td></tr>
<tr><td>$5,000</td><td>$100</td><td>50</td><td>$0.10</td><td>0.20 lot</td></tr>
<tr><td>$10,000</td><td>$200</td><td>50</td><td>$0.10</td><td>0.40 lot</td></tr>
</tbody></table>

<h2>Stop Loss là bắt buộc — Không có ngoại lệ</h2>
<p>Mỗi lệnh PHẢI có Stop Loss. Tuyệt đối không di chuyển SL ra xa hơn vùng cắt lỗ ban đầu. Nhiều trader mới cố giữ lệnh thua với hy vọng thị trường đảo chiều — đây là cách nhanh nhất để cháy tài khoản. Tìm hiểu ${IL.orderTypes} để sử dụng SL hiệu quả.</p>

<h2>Đa dạng hóa — Đừng bỏ trứng vào một giỏ</h2>
<ul>
<li>Không mở quá 3 lệnh trên cùng một cặp tiền</li>
<li>Tránh giao dịch các cặp tương quan cao cùng lúc (EUR/USD + GBP/USD)</li>
<li>Tổng rủi ro tất cả lệnh mở không vượt 5-6% tổng vốn</li>
</ul>
<p>Thực hành quản lý vốn trên tài khoản ${IL.demo} trước khi áp dụng tiền thật. ${IL.compare} để chọn sàn có phí thấp nhất, giúp bảo toàn vốn tốt hơn. Tham khảo thêm ${IL.cachdautu} cho các chiến lược nâng cao.</p>`
    },

    {
        slug: 'cach-doc-bieu-do-nen-nhat-ban',
        content: `<h2>Biểu đồ nến Nhật — Công cụ đọc thị trường số 1</h2>
<p>Biểu đồ nến Nhật (Japanese Candlestick) được phát minh từ thế kỷ 18 bởi thương nhân gạo Nhật Bản Munehisa Homma. Ngày nay, nó là công cụ biểu diễn giá phổ biến nhất trong phân tích kỹ thuật Forex. Mỗi cây nến thể hiện 4 thông tin: giá Mở cửa (Open), Đóng cửa (Close), Cao nhất (High) và Thấp nhất (Low).</p>
<p>Nếu bạn chưa quen với giao dịch Forex, hãy đọc ${IL.forexBasic} trước, sau đó quay lại học cách đọc biểu đồ nến.</p>
<img src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=800&q=80" alt="Biểu đồ nến Nhật Candlestick phân tích kỹ thuật" />

<h2>10 mô hình nến quan trọng nhất</h2>
<table><thead><tr><th>STT</th><th>Mô hình</th><th>Tín hiệu</th><th>Độ tin cậy</th><th>Vị trí xuất hiện</th></tr></thead><tbody>
<tr><td>1</td><td>🔨 Hammer</td><td>Đảo chiều tăng</td><td>⭐⭐⭐⭐</td><td>Cuối xu hướng giảm</td></tr>
<tr><td>2</td><td>💫 Shooting Star</td><td>Đảo chiều giảm</td><td>⭐⭐⭐⭐</td><td>Cuối xu hướng tăng</td></tr>
<tr><td>3</td><td>✝️ Doji</td><td>Phân vân / Đảo chiều</td><td>⭐⭐⭐</td><td>Cần xác nhận nến sau</td></tr>
<tr><td>4</td><td>🟢 Bullish Engulfing</td><td>Đảo chiều tăng mạnh</td><td>⭐⭐⭐⭐⭐</td><td>Vùng hỗ trợ</td></tr>
<tr><td>5</td><td>🔴 Bearish Engulfing</td><td>Đảo chiều giảm mạnh</td><td>⭐⭐⭐⭐⭐</td><td>Vùng kháng cự</td></tr>
<tr><td>6</td><td>🌅 Morning Star</td><td>Đảo chiều tăng</td><td>⭐⭐⭐⭐⭐</td><td>Cuối downtrend</td></tr>
<tr><td>7</td><td>🌆 Evening Star</td><td>Đảo chiều giảm</td><td>⭐⭐⭐⭐⭐</td><td>Cuối uptrend</td></tr>
<tr><td>8</td><td>💪 Three White Soldiers</td><td>Tăng mạnh</td><td>⭐⭐⭐⭐</td><td>Bắt đầu uptrend</td></tr>
<tr><td>9</td><td>📉 Three Black Crows</td><td>Giảm mạnh</td><td>⭐⭐⭐⭐</td><td>Bắt đầu downtrend</td></tr>
<tr><td>10</td><td>🔄 Spinning Top</td><td>Phân vân</td><td>⭐⭐</td><td>Mọi vị trí</td></tr>
</tbody></table>

<h2>Cách áp dụng mô hình nến vào giao dịch thực tế</h2>
<h3>Nguyên tắc 1: Xem xét bối cảnh</h3>
<p>Mô hình nến chỉ có ý nghĩa khi xuất hiện tại vùng hỗ trợ/kháng cự quan trọng. Một Hammer giữa chừng xu hướng có giá trị thấp hơn nhiều so với Hammer tại vùng hỗ trợ mạnh. Kết hợp với ${IL.rsi} để xác nhận tín hiệu.</p>

<h3>Nguyên tắc 2: Chờ xác nhận</h3>
<p>Đừng vào lệnh ngay khi thấy mô hình nến. Hãy đợi nến tiếp theo xác nhận — ví dụ sau Bullish Engulfing, chờ nến tăng tiếp theo đóng cửa trên đỉnh nến Engulfing.</p>

<h3>Nguyên tắc 3: Kết hợp chỉ báo</h3>
<p>Sử dụng 2-3 chỉ báo bổ trợ. Ví dụ: Hammer + RSI vùng quá bán (< 30) + Fibonacci 61.8% = tín hiệu mua mạnh. Đọc thêm ${IL.techAnalysis} để học cách kết hợp.</p>

<h2>Ví dụ giao dịch với mô hình Bullish Engulfing</h2>
<table><thead><tr><th>Bước</th><th>Hành động</th><th>Chi tiết</th></tr></thead><tbody>
<tr><td>1</td><td>Nhận diện mô hình</td><td>Nến tăng (xanh) lớn bao phủ hoàn toàn nến giảm (đỏ) trước đó</td></tr>
<tr><td>2</td><td>Kiểm tra bối cảnh</td><td>Mô hình xuất hiện tại vùng hỗ trợ / EMA 200 / Fibonacci 50-61.8%</td></tr>
<tr><td>3</td><td>Xác nhận chỉ báo</td><td>RSI < 40 (gần quá bán), MACD sắp cắt lên</td></tr>
<tr><td>4</td><td>Entry</td><td>Mua (Buy) khi nến xác nhận đóng cửa trên đỉnh nến Engulfing</td></tr>
<tr><td>5</td><td>Stop Loss</td><td>Dưới đáy nến Engulfing 5-10 pip</td></tr>
<tr><td>6</td><td>Take Profit</td><td>Kháng cự gần nhất hoặc R:R tối thiểu 1:2</td></tr>
</tbody></table>
<p>Thực hành với ${IL.demo} trên nền tảng ${IL.mt4}. Luôn áp dụng ${IL.moneyMgmt} và kiểm soát ${IL.psychology}. Xem thêm tại ${IL.cachdautu}.</p>`
    },

    {
        slug: 'phan-tich-ky-thuat-vs-co-ban',
        content: `<h2>Phân tích kỹ thuật và phân tích cơ bản — Nên dùng gì?</h2>
<p>Đây là câu hỏi mà mọi trader đều đặt ra khi bắt đầu. Phân tích kỹ thuật (Technical Analysis) dựa trên biểu đồ giá và chỉ báo, trong khi phân tích cơ bản (Fundamental Analysis) dựa trên dữ liệu kinh tế và sự kiện. Câu trả lời đúng: hãy sử dụng CẢ HAI. Mỗi phương pháp đều có ưu nhược điểm riêng, và khi kết hợp sẽ tạo nên hệ thống giao dịch mạnh mẽ.</p>
<p>Nếu bạn mới bắt đầu tìm hiểu về Forex, hãy đọc ${IL.forexBasic} trước để nắm kiến thức nền tảng.</p>
<img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80" alt="Phân tích kỹ thuật biểu đồ chỉ báo Forex" />

<h2>So sánh Phân tích kỹ thuật vs Phân tích cơ bản</h2>
<table><thead><tr><th>Tiêu chí</th><th>Phân tích Kỹ thuật</th><th>Phân tích Cơ bản</th></tr></thead><tbody>
<tr><td>Dữ liệu sử dụng</td><td>Biểu đồ giá, khối lượng</td><td>Tin tức kinh tế, lãi suất, GDP</td></tr>
<tr><td>Khung thời gian</td><td>Ngắn đến trung hạn</td><td>Trung đến dài hạn</td></tr>
<tr><td>Công cụ chính</td><td>RSI, MACD, MA, Fibonacci</td><td>Lịch kinh tế, báo cáo NFP, CPI</td></tr>
<tr><td>Ưu điểm</td><td>Điểm vào/ra lệnh chính xác</td><td>Xác định xu hướng lớn</td></tr>
<tr><td>Nhược điểm</td><td>Dễ cho tín hiệu sai khi tin tức lớn</td><td>Khó xác định timing chính xác</td></tr>
<tr><td>Phù hợp</td><td>Scalper, Day Trader</td><td>Swing Trader, Position Trader</td></tr>
<tr><td>Độ khó</td><td>Trung bình</td><td>Cao</td></tr>
</tbody></table>

<h2>7 chỉ báo kỹ thuật quan trọng nhất</h2>
<table><thead><tr><th>Chỉ báo</th><th>Loại</th><th>Tín hiệu chính</th><th>Khung TG phù hợp</th></tr></thead><tbody>
<tr><td>Moving Average (MA)</td><td>Xu hướng</td><td>Golden Cross / Death Cross</td><td>H4, D1</td></tr>
<tr><td>RSI</td><td>Dao động</td><td>Quá mua (>70) / Quá bán (<30)</td><td>H1, H4</td></tr>
<tr><td>MACD</td><td>Xu hướng + Động lượng</td><td>Cắt chéo Signal line</td><td>H4, D1</td></tr>
<tr><td>Bollinger Bands</td><td>Biến động</td><td>Giá chạm dải trên/dưới</td><td>H1, H4</td></tr>
<tr><td>Fibonacci</td><td>Hỗ trợ/Kháng cự</td><td>Mức 38.2%, 50%, 61.8%</td><td>D1, W1</td></tr>
<tr><td>Stochastic</td><td>Dao động</td><td>Cắt chéo vùng 20/80</td><td>M15, H1</td></tr>
<tr><td>Ichimoku</td><td>Đa chức năng</td><td>Giá trên/dưới mây Kumo</td><td>H4, D1</td></tr>
</tbody></table>
<p>Đọc thêm ${IL.rsi} cho hướng dẫn chi tiết về chỉ báo RSI, và ${IL.candlestick} để nắm vững mô hình nến.</p>

<h2>5 sự kiện kinh tế quan trọng nhất cho trader Forex</h2>
<table><thead><tr><th>Sự kiện</th><th>Tần suất</th><th>Tác động chính</th><th>Cặp tiền bị ảnh hưởng</th></tr></thead><tbody>
<tr><td>Non-Farm Payrolls (NFP)</td><td>Hàng tháng (thứ 6 đầu tiên)</td><td>⭐⭐⭐⭐⭐</td><td>Tất cả cặp USD</td></tr>
<tr><td>Quyết định lãi suất Fed/ECB/BoE</td><td>6-8 lần/năm</td><td>⭐⭐⭐⭐⭐</td><td>Cặp tiền tương ứng</td></tr>
<tr><td>CPI (Lạm phát)</td><td>Hàng tháng</td><td>⭐⭐⭐⭐</td><td>Tất cả cặp tiền chính</td></tr>
<tr><td>GDP</td><td>Hàng quý</td><td>⭐⭐⭐⭐</td><td>Cặp tiền tương ứng</td></tr>
<tr><td>PMI sản xuất</td><td>Hàng tháng</td><td>⭐⭐⭐</td><td>Cặp tiền tương ứng</td></tr>
</tbody></table>

<h2>Cách kết hợp cả hai phương pháp hiệu quả</h2>
<ul>
<li><strong>Bước 1:</strong> Dùng phân tích cơ bản xác định xu hướng lớn — Fed dovish → USD yếu → Buy EUR/USD</li>
<li><strong>Bước 2:</strong> Dùng phân tích kỹ thuật tìm điểm entry chính xác — Chờ pullback về EMA 50 + RSI quá bán</li>
<li><strong>Bước 3:</strong> ${IL.stopLoss} dựa trên cấu trúc kỹ thuật</li>
<li><strong>Bước 4:</strong> Áp dụng ${IL.moneyMgmt} nghiêm ngặt</li>
</ul>
<p>Thực hành trên ${IL.demo} với nền tảng ${IL.mt4}. Nếu bạn muốn trader khác giao dịch hộ, tìm hiểu ${IL.copyTrade}. ${IL.compare} để chọn sàn phù hợp. Cập nhật phân tích hàng ngày tại ${IL.cachdautu}.</p>`
    },

    {
        slug: 'tam-ly-trading-yeu-to-thanh-cong',
        content: `<h2>Tâm lý giao dịch — Yếu tố quyết định 80% thành công</h2>
<p>Mark Douglas — tác giả huyền thoại của "Trading in the Zone" — từng nói: "Kết quả giao dịch 80% phụ thuộc vào tâm lý, 20% còn lại là chiến lược." Đây không phải lời nói ngoa. Hầu hết trader không thất bại vì thiếu kiến thức kỹ thuật, mà vì không kiểm soát được cảm xúc: tham lam khi thắng, sợ hãi khi thua, và bốc đồng khi giao dịch.</p>
<p>Trước khi đi sâu vào tâm lý, hãy đảm bảo bạn đã nắm vững ${IL.forexBasic} và ${IL.moneyMgmt} — đây là nền tảng giúp bạn giao dịch tự tin hơn.</p>
<img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80" alt="Tâm lý giao dịch kiểm soát cảm xúc trader" />

<h2>5 cảm xúc nguy hiểm nhất trong trading</h2>
<table><thead><tr><th>Cảm xúc</th><th>Biểu hiện</th><th>Hậu quả</th><th>Giải pháp</th></tr></thead><tbody>
<tr><td>😰 Sợ hãi (Fear)</td><td>Không dám vào lệnh dù đủ tín hiệu</td><td>Bỏ lỡ cơ hội tốt</td><td>Giao dịch theo hệ thống, không đoán mò</td></tr>
<tr><td>🤑 Tham lam (Greed)</td><td>Không chốt lời, tăng lot quá lớn</td><td>Lợi nhuận biến thành thua lỗ</td><td>Luôn đặt TP trước, không di chuyển</td></tr>
<tr><td>😤 Trả thù thị trường (Revenge)</td><td>Vào lệnh ngay sau khi thua để "gỡ"</td><td>Thua liên tiếp, cháy tài khoản</td><td>Nghỉ ít nhất 2h sau khi thua 2 lệnh liên tiếp</td></tr>
<tr><td>🎰 FOMO</td><td>Nhảy vào thị trường khi giá đã chạy xa</td><td>Entry xấu, SL quá rộng</td><td>Chờ pullback, luôn có kế hoạch trước</td></tr>
<tr><td>🥱 Chán nản (Boredom)</td><td>Giao dịch vì buồn chán, không có tín hiệu</td><td>Lệnh chất lượng thấp</td><td>Chỉ giao dịch khi có setup rõ ràng</td></tr>
</tbody></table>

<h2>Xây dựng kỷ luật giao dịch</h2>
<h3>Trading Journal — Nhật ký giao dịch</h3>
<p>Ghi chép mọi lệnh giao dịch là cách hiệu quả nhất để cải thiện. Mỗi entry nên bao gồm:</p>
<table><thead><tr><th>Thông tin</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Ngày/Giờ</td><td>05/02/2026 — 15:30</td></tr>
<tr><td>Cặp tiền</td><td>EUR/USD</td></tr>
<tr><td>Hướng lệnh</td><td>Buy</td></tr>
<tr><td>Lý do vào lệnh</td><td>Bullish Engulfing tại EMA 50 + RSI < 35</td></tr>
<tr><td>Entry / SL / TP</td><td>1.0855 / 1.0820 / 1.0925</td></tr>
<tr><td>R:R</td><td>1:2</td></tr>
<tr><td>Kết quả</td><td>+70 pip ✅</td></tr>
<tr><td>Cảm xúc</td><td>Tự tin, tuân thủ kế hoạch</td></tr>
<tr><td>Bài học</td><td>Chờ xác nhận tốt → kết quả tốt</td></tr>
</tbody></table>

<h2>Nguyên tắc vàng của trader thành công</h2>
<ul>
<li><strong>Giao dịch theo kế hoạch:</strong> Viết kế hoạch TRƯỚC khi thị trường mở. ${IL.stopLoss} phải được xác định trước.</li>
<li><strong>Chấp nhận thua lỗ:</strong> Thua lỗ là chi phí kinh doanh, không phải thất bại cá nhân.</li>
<li><strong>Nghỉ ngơi đúng lúc:</strong> Thua 2-3 lệnh liên tiếp → nghỉ ít nhất 1 ngày.</li>
<li><strong>Không so sánh:</strong> Không so sánh kết quả với trader khác. Tập trung vào hệ thống của bạn.</li>
<li><strong>Giữ sức khỏe:</strong> Ngủ đủ giấc, tập thể dục, ăn uống lành mạnh — ảnh hưởng trực tiếp đến quyết định.</li>
</ul>
<p>Bắt đầu rèn luyện kỷ luật trên ${IL.demo} cùng nền tảng ${IL.mt4}. Khi đã sẵn sàng, ${IL.compare} để chọn sàn phù hợp — ưu tiên ${IL.exness} hoặc ${IL.xm} cho trader Việt Nam. Xem thêm tại ${IL.cachdautu}.</p>`
    },

    {
        slug: 'cac-loai-lenh-trong-forex',
        content: `<h2>Các loại lệnh trong Forex — Hướng dẫn toàn diện</h2>
<p>Hiểu rõ các loại lệnh là kỹ năng cơ bản mà mọi trader cần nắm vững. Sử dụng đúng loại lệnh giúp bạn vào/ra thị trường ở mức giá tốt nhất và quản lý rủi ro hiệu quả. Nếu bạn mới bắt đầu, hãy đọc ${IL.forexBasic} trước để nắm kiến thức nền tảng.</p>
<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Các loại lệnh giao dịch trong thị trường Forex" />

<h2>Bảng tổng hợp tất cả các loại lệnh Forex</h2>
<table><thead><tr><th>Loại lệnh</th><th>Mô tả</th><th>Khi nào sử dụng</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td><strong>Market Order</strong></td><td>Mua/bán ngay tại giá hiện tại</td><td>Cần vào lệnh tức thì</td><td>Thực thi nhanh</td><td>Có thể bị trượt giá (slippage)</td></tr>
<tr><td><strong>Limit Order</strong></td><td>Mua/bán tại giá chỉ định hoặc tốt hơn</td><td>Chờ giá pullback</td><td>Giá entry tốt hơn</td><td>Có thể không được khớp</td></tr>
<tr><td><strong>Stop Order</strong></td><td>Mua/bán khi giá chạm mức chỉ định</td><td>Giao dịch breakout</td><td>Bắt đúng xu hướng mới</td><td>Dễ bị "false breakout"</td></tr>
<tr><td><strong>Stop Loss</strong></td><td>Tự động đóng lệnh để cắt lỗ</td><td>LUÔN LUÔN sử dụng</td><td>Bảo vệ vốn</td><td>Có thể bị quét SL</td></tr>
<tr><td><strong>Take Profit</strong></td><td>Tự động đóng lệnh khi đạt lợi nhuận</td><td>Chốt lời theo kế hoạch</td><td>Không cần canh màn hình</td><td>Có thể miss xu hướng dài</td></tr>
<tr><td><strong>Trailing Stop</strong></td><td>SL tự động di chuyển theo giá có lợi</td><td>Bắt trọn xu hướng dài</td><td>Khóa lợi nhuận + giữ lệnh</td><td>Dễ bị out sớm ở thị trường sideway</td></tr>
</tbody></table>

<h2>Cách sử dụng từng loại lệnh hiệu quả</h2>
<h3>Buy Limit vs Buy Stop</h3>
<p><strong>Buy Limit:</strong> Đặt MUA ở giá THẤP hơn giá hiện tại. Ví dụ: EUR/USD đang 1.0900, bạn muốn mua tại 1.0850 (chờ giá giảm về hỗ trợ). <strong>Buy Stop:</strong> Đặt MUA ở giá CAO hơn giá hiện tại. Ví dụ: EUR/USD ở 1.0900, bạn đặt Buy Stop tại 1.0950 (mua khi giá phá vỡ kháng cự). Tham khảo ${IL.candlestick} để nhận diện vùng hỗ trợ/kháng cự chính xác.</p>

<h3>Sell Limit vs Sell Stop</h3>
<p><strong>Sell Limit:</strong> Đặt BÁN ở giá CAO hơn giá hiện tại — chờ giá tăng lên kháng cự rồi bán. <strong>Sell Stop:</strong> Đặt BÁN ở giá THẤP hơn — bán khi giá phá vỡ hỗ trợ. Kết hợp với ${IL.rsi} để xác nhận vùng quá mua/quá bán.</p>

<h2>Ví dụ setup giao dịch hoàn chỉnh</h2>
<table><thead><tr><th>Thành phần</th><th>Chi tiết</th></tr></thead><tbody>
<tr><td>Cặp tiền</td><td>EUR/USD</td></tr>
<tr><td>Phân tích</td><td>Xu hướng tăng trên D1, pullback về EMA 50 trên H4</td></tr>
<tr><td>Loại lệnh</td><td>Buy Limit tại 1.0860</td></tr>
<tr><td>Stop Loss</td><td>1.0820 (-40 pip dưới EMA 50)</td></tr>
<tr><td>Take Profit 1</td><td>1.0940 (+80 pip, R:R 1:2)</td></tr>
<tr><td>Take Profit 2</td><td>1.1000 (+140 pip, dùng Trailing Stop)</td></tr>
<tr><td>Khối lượng</td><td>0.05 lot (2% rủi ro trên vốn $1,000)</td></tr>
</tbody></table>
<p>Thực hành đặt lệnh trên ${IL.demo} với nền tảng ${IL.mt4}. Áp dụng ${IL.moneyMgmt} nghiêm ngặt cho mọi lệnh giao dịch. ${IL.compare} tại ${IL.home} để chọn sàn phí thấp nhất. Tham khảo ${IL.cachdautu}.</p>`
    }
];

async function run() {
    console.log(`Updating ${updates.length} knowledge posts...\n`);
    for (const upd of updates) {
        const { error } = await supabase
            .from('posts')
            .update({ content: upd.content })
            .eq('slug', upd.slug);
        if (error) console.log(`❌ ${upd.slug}: ${error.message}`);
        else console.log(`✅ ${upd.slug}`);
    }
    console.log('\nDone batch 2!');
}
run();
