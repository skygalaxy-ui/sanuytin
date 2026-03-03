import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const content = `
<h2>MetaTrader 4 (MT4) Là Gì?</h2>

<p>MetaTrader 4 hay MT4 là nền tảng giao dịch phổ biến nhất thế giới, được phát triển bởi MetaQuotes Software. Ra mắt từ năm 2005, MT4 vẫn là lựa chọn hàng đầu của hàng triệu trader nhờ giao diện trực quan, công cụ phân tích mạnh mẽ và khả năng tự động hóa giao dịch thông qua Expert Advisors (EA).</p>

<p>Dù đã có phiên bản MT5 mới hơn, MT4 vẫn chiếm ưu thế nhờ sự đơn giản, ổn định và cộng đồng hỗ trợ khổng lồ. Hầu hết các <a href="/so-sanh">sàn Forex uy tín</a> đều hỗ trợ MT4 như Exness, XM, IC Markets hay XTB.</p>

<img src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Giao diện nền tảng giao dịch MT4 trên máy tính" />

<h2>1. Cách Tải Và Cài Đặt MT4</h2>

<h3>Tải MT4 Trên Máy Tính (Windows/Mac)</h3>

<p>Bước đầu tiên là tải MT4 từ website của sàn Forex mà bạn đã đăng ký. Mỗi sàn sẽ có phiên bản MT4 riêng được tùy chỉnh với server của họ. Ví dụ, nếu bạn dùng Exness thì tải MT4 từ trang Exness, không tải bản gốc từ MetaQuotes.</p>

<p>Quy trình cài đặt rất đơn giản: tải file cài đặt → chạy file .exe → chọn thư mục cài đặt → nhấn Next cho đến khi hoàn tất. Trên Mac, bạn có thể cần cài thêm Wine hoặc PlayOnMac để chạy MT4.</p>

<h3>Tải MT4 Trên Điện Thoại (Android/iOS)</h3>

<p>MT4 có sẵn trên cả Google Play Store và Apple App Store. Chỉ cần tìm "MetaTrader 4" và cài đặt ứng dụng chính thức từ MetaQuotes. Sau đó đăng nhập bằng tài khoản trading mà sàn đã cấp cho bạn.</p>

<img src="https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Giao dịch Forex trên điện thoại di động" />

<h2>2. Giao Diện MT4 — Các Thành Phần Chính</h2>

<p>Khi mở MT4 lần đầu, bạn sẽ thấy giao diện gồm nhiều phần. Đừng lo lắng vì nhìn phức tạp, thực ra rất dễ quen khi bạn hiểu từng phần.</p>

<h3>Market Watch (Bảng Giá)</h3>
<p>Nằm phía bên trái, hiển thị giá Bid/Ask realtime của tất cả các cặp tiền và sản phẩm. Bạn có thể click chuột phải để thêm hoặc ẩn cặp tiền. Muốn mở biểu đồ nhanh, chỉ cần kéo cặp tiền từ Market Watch vào vùng biểu đồ.</p>

<h3>Navigator (Bảng Điều Hướng)</h3>
<p>Nằm bên dưới Market Watch, chứa danh sách tài khoản, các <strong>Indicators</strong> (chỉ báo kỹ thuật), <strong>Expert Advisors</strong> (robot giao dịch), và <strong>Scripts</strong>. Đây là nơi bạn quản lý tất cả công cụ phân tích.</p>

<img src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Phân tích biểu đồ kỹ thuật trên nền tảng trading" />

<h3>Biểu Đồ Giá (Chart)</h3>
<p>Chiếm phần lớn nhất màn hình, hiển thị biểu đồ giá theo thời gian thực. MT4 hỗ trợ 3 loại biểu đồ: <strong>Line Chart</strong> (đường), <strong>Bar Chart</strong> (thanh) và <strong>Candlestick Chart</strong> (nến Nhật) — trong đó biểu đồ nến được dùng phổ biến nhất.</p>

<h3>Terminal (Bảng Giao Dịch)</h3>
<p>Nằm phía dưới cùng, hiển thị các tab quan trọng: <strong>Trade</strong> (lệnh đang mở), <strong>Account History</strong> (lịch sử giao dịch), <strong>Alerts</strong> (cảnh báo), <strong>Journal</strong> (nhật ký hệ thống). Tab Trade là nơi bạn theo dõi lời/lỗ theo thời gian thực.</p>

<h2>3. Cách Đặt Lệnh Giao Dịch Trên MT4</h2>

<h3>Mở Lệnh Market Order (Lệnh Thị Trường)</h3>

<p>Đây là cách đặt lệnh nhanh nhất — mua/bán ngay tại giá hiện tại. Nhấn phím <strong>F9</strong> hoặc click vào nút "New Order" trên thanh công cụ. Cửa sổ Order sẽ hiện ra với các thông tin cần điền:</p>

<ul>
<li><strong>Symbol:</strong> Cặp tiền muốn giao dịch (VD: EUR/USD)</li>
<li><strong>Volume:</strong> Khối lượng lệnh tính bằng Lot (0.01 = micro lot, 0.1 = mini lot, 1.0 = standard lot)</li>
<li><strong>Stop Loss:</strong> Mức giá cắt lỗ tự động</li>
<li><strong>Take Profit:</strong> Mức giá chốt lời tự động</li>
</ul>

<img src="https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Đặt lệnh giao dịch mua bán trên MT4" />

<p>Sau đó nhấn <strong>"Sell by Market"</strong> (nếu dự đoán giá giảm) hoặc <strong>"Buy by Market"</strong> (nếu dự đoán giá tăng). Để hiểu rõ hơn về các loại lệnh, bạn có thể tham khảo <a href="/kien-thuc-forex/cac-loai-lenh-giao-dich-forex">bài viết về các loại lệnh trong Forex</a>.</p>

<h3>Đặt Lệnh Pending Order (Lệnh Chờ)</h3>

<p>Lệnh chờ cho phép bạn đặt lệnh ở một mức giá cụ thể trong tương lai. MT4 hỗ trợ 4 loại lệnh chờ:</p>

<ul>
<li><strong>Buy Limit:</strong> Đặt mua ở giá thấp hơn giá hiện tại (mua khi giá giảm về mức mong muốn)</li>
<li><strong>Sell Limit:</strong> Đặt bán ở giá cao hơn giá hiện tại</li>
<li><strong>Buy Stop:</strong> Đặt mua ở giá cao hơn giá hiện tại (mua khi giá breakout lên)</li>
<li><strong>Sell Stop:</strong> Đặt bán ở giá thấp hơn giá hiện tại</li>
</ul>

<p>Để đặt lệnh chờ, mở cửa sổ New Order (F9) → chọn Type là "Pending Order" → chọn loại lệnh → nhập giá mong muốn → nhấn "Place".</p>

<h2>4. Cách Sử Dụng Indicator (Chỉ Báo Kỹ Thuật)</h2>

<p>MT4 có sẵn hơn 30 indicator phổ biến. Để thêm indicator vào biểu đồ, bạn có 2 cách:</p>

<p><strong>Cách 1:</strong> Vào menu <strong>Insert → Indicators</strong> → chọn loại indicator muốn dùng.</p>

<p><strong>Cách 2:</strong> Từ bảng Navigator bên trái, mở thư mục Indicators → kéo thả indicator mong muốn vào biểu đồ.</p>

<img src="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Các chỉ báo kỹ thuật phổ biến trong phân tích Forex" />

<h3>Những Indicator Phổ Biến Nhất</h3>

<ul>
<li><strong>Moving Average (MA):</strong> Đường trung bình động — xác định xu hướng giá. MA 20 và MA 50 là phổ biến nhất</li>
<li><strong>RSI (Relative Strength Index):</strong> Chỉ số sức mạnh tương đối — xác định vùng quá mua (trên 70) và quá bán (dưới 30)</li>
<li><strong>MACD:</strong> Xác nhận xu hướng và tín hiệu mua/bán dựa trên sự giao cắt của đường MACD và Signal</li>
<li><strong>Bollinger Bands:</strong> Đo biến động giá — khi giá chạm band trên/dưới có thể báo hiệu đảo chiều</li>
<li><strong>Stochastic:</strong> Tương tự RSI nhưng nhạy hơn, thích hợp cho giao dịch ngắn hạn</li>
</ul>

<p>Bạn cũng có thể cài thêm indicator tùy chỉnh bằng cách tải file .mq4 hoặc .ex4 rồi copy vào thư mục <strong>MQL4/Indicators</strong> trong thư mục cài đặt MT4.</p>

<h2>5. Cách Cài Và Sử Dụng EA (Expert Advisor)</h2>

<p>EA hay robot giao dịch là một trong những tính năng mạnh nhất của MT4. EA tự động thực hiện lệnh theo chiến lược đã được lập trình sẵn, giúp bạn giao dịch 24/5 mà không cần ngồi trước máy tính.</p>

<img src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Robot EA giao dịch tự động trên nền tảng MT4" />

<h3>Cách Cài Đặt EA</h3>

<p>Tải file EA (định dạng .mq4 hoặc .ex4) → mở MT4 → vào <strong>File → Open Data Folder</strong> → mở thư mục <strong>MQL4/Experts</strong> → copy file EA vào đây → khởi động lại MT4.</p>

<p>Sau khi khởi động lại, EA sẽ xuất hiện trong bảng Navigator dưới mục Expert Advisors. Kéo EA vào biểu đồ cặp tiền muốn giao dịch, điều chỉnh thông số và nhấn OK.</p>

<h3>Lưu Ý Quan Trọng Khi Dùng EA</h3>

<ul>
<li>Nhấn nút <strong>"AutoTrading"</strong> trên thanh công cụ để bật/tắt EA (biểu tượng phải chuyển sang màu xanh)</li>
<li>Luôn test EA trên tài khoản Demo trước khi chạy tiền thật</li>
<li>Sử dụng <strong>VPS</strong> để EA chạy liên tục 24/7 — máy tính cá nhân có thể mất điện hoặc mất mạng</li>
<li>Kiểm tra kết quả backtest trước khi tin tưởng bất kỳ EA nào</li>
</ul>

<h2>6. Phím Tắt Hữu Ích Trên MT4</h2>

<p>Sử dụng phím tắt giúp bạn thao tác nhanh hơn rất nhiều. Dưới đây là một số phím tắt quan trọng nhất:</p>

<ul>
<li><strong>F9:</strong> Mở cửa sổ đặt lệnh mới</li>
<li><strong>F11:</strong> Chế độ toàn màn hình</li>
<li><strong>Ctrl + T:</strong> Ẩn/hiện bảng Terminal</li>
<li><strong>Ctrl + M:</strong> Ẩn/hiện Market Watch</li>
<li><strong>Ctrl + N:</strong> Ẩn/hiện Navigator</li>
<li><strong>Ctrl + G:</strong> Ẩn/hiện Grid (lưới) trên biểu đồ</li>
<li><strong>+ / -:</strong> Phóng to / thu nhỏ biểu đồ</li>
</ul>

<img src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Trader sử dụng phím tắt trên bàn phím để giao dịch nhanh" />

<h2>7. Mẹo Sử Dụng MT4 Hiệu Quả</h2>

<h3>Tùy Chỉnh Giao Diện</h3>
<p>Click chuột phải vào biểu đồ → chọn <strong>"Properties"</strong> (hoặc nhấn F8) để thay đổi màu nến, màu nền, font chữ theo sở thích. Một biểu đồ rõ ràng giúp bạn phân tích tốt hơn.</p>

<h3>Lưu Template</h3>
<p>Khi đã thiết lập indicator và bố cục biểu đồ ưng ý, hãy lưu lại bằng cách click chuột phải → <strong>"Template → Save Template"</strong>. Lần sau bạn có thể áp dụng ngay template này cho bất kỳ biểu đồ nào.</p>

<h3>Sử Dụng Profile</h3>
<p>Profile lưu lại toàn bộ workspace (tất cả biểu đồ đang mở). Vào <strong>File → Profiles</strong> để lưu và chuyển đổi giữa các workspace khác nhau — ví dụ một profile cho scalping, một profile cho swing trading.</p>

<img src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Quản lý vốn và giao dịch Forex hiệu quả" />

<h3>Quản Lý Vốn</h3>
<p>MT4 hiện rõ Balance, Equity, Margin, Free Margin ở bảng Terminal. Hãy đảm bảo Free Margin luôn đủ lớn để tránh bị <strong>Margin Call</strong>. Đọc thêm về <a href="/kien-thuc-forex/cach-quan-ly-von-forex-hieu-qua">cách quản lý vốn hiệu quả</a> để bảo vệ tài khoản.</p>

<h2>Kết Luận</h2>

<p>MetaTrader 4 vẫn là nền tảng giao dịch tốt nhất cho người mới bắt đầu nhờ giao diện đơn giản, nhiều công cụ phân tích và cộng đồng hỗ trợ lớn. Hãy bắt đầu bằng tài khoản Demo để làm quen với các tính năng trước khi giao dịch tiền thật.</p>

<p>Nếu bạn chưa có tài khoản trading, hãy xem <a href="/kien-thuc-forex/huong-dan-mo-tai-khoan-forex">hướng dẫn mở tài khoản Forex</a> hoặc <a href="/so-sanh">so sánh các sàn uy tín</a> để chọn sàn phù hợp.</p>
`;

async function main() {
    const { error } = await supabase
        .from('posts')
        .update({
            content,
            featured_image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
            featured_image_alt: "Hướng dẫn sử dụng MetaTrader 4 chi tiết từ A-Z"
        })
        .eq('slug', 'huong-dan-su-dung-mt4-chi-tiet');

    if (error) {
        console.error('❌ Error:', error.message);
    } else {
        console.log('✅ Updated MT4 article with 8 unique images distributed throughout content');
    }
}

main();
