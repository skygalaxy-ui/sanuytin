import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const batch4 = [
    {
        id: 32,
        content: `<h2>Tâm lý trading — yếu tố mà 90% trader bỏ qua</h2>
<p>Nhiều trader mới chỉ tập trung vào chỉ báo, chiến lược, và điểm vào lệnh. Nhưng sự thật phũ phàng là: <strong>tâm lý chiếm đến 80% thành công trong trading</strong>, kỹ thuật chỉ chiếm 20%. Mark Douglas — tác giả "Trading in the Zone" — thậm chí còn nói rằng giao dịch là 100% tâm lý.</p>
<p>Dù bạn có hệ thống tốt nhất thế giới, chỉ cần một khoảnh khắc tham lam hay sợ hãi, bạn sẽ phá vỡ mọi quy tắc và thua lỗ. Hãy thực hành kiểm soát cảm xúc trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a>.</p>
<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Tâm lý trading yếu tố thành công" />

<h2>Ba "kẻ thù" lớn nhất của trader</h2>
<p><strong>Tham lam (Greed)</strong> khiến bạn không chịu chốt lời, tăng lot size "thêm một chút nữa thôi", kết quả là giá quay đầu và lợi nhuận bay sạch. Giải pháp? Luôn đặt Take Profit trước khi vào lệnh và tuân thủ nó.</p>
<p><strong>Sợ hãi (Fear)</strong> khiến bạn không dám vào lệnh dù setup đẹp, hoặc cắt lỗ quá sớm khi giá mới giảm nhẹ. Nếu bạn đã backtest hệ thống trên 100+ lệnh và biết nó có winrate 55%, hãy tin vào con số thống kê — một lệnh thua không quyết định gì.</p>
<p><strong>FOMO</strong> (Fear Of Missing Out) — sợ bỏ lỡ — là khi bạn thấy giá tăng mạnh và nhảy vào mua đỉnh vì "không muốn bị bỏ lại". Kết quả thường là mua đỉnh bán đáy. Hãy nhớ: thị trường LUÔN có cơ hội mới. Chờ pullback, không bao giờ đuổi giá.</p>

<h2>Xây dựng kỷ luật — bắt đầu từ ba thói quen</h2>
<p><strong>Trading Plan</strong> là thói quen đầu tiên. Trước khi mở máy tính, hãy viết ra: giao dịch cặp tiền nào, khung thời gian nào, điều kiện entry, SL/TP, lot size, và số lệnh tối đa trong ngày. Mỗi lệnh ngoài kế hoạch là một canh bạc, không phải trading.</p>
<p><strong>Trading Journal</strong> là thói quen thứ hai. Ghi lại mỗi lệnh: lý do vào, cảm xúc lúc đó, kết quả, và bài học rút ra. Sau 3 tháng review, bạn sẽ phát hiện ra các sai lầm lặp đi lặp lại mà trước đó không nhận ra.</p>
<p><strong>Quy tắc "3 lệnh thua = nghỉ"</strong> là thói quen thứ ba. Sau 3 lệnh thua liên tiếp, tắt máy và nghỉ ít nhất 4 giờ. Chuỗi thua gây stress, stress dẫn đến quyết định cảm xúc, và cảm xúc dẫn đến thua thêm. Cắt đứt vòng xoáy này bằng cách nghỉ ngơi.</p>

<h2>Hành trình tâm lý của mọi trader</h2>
<p><strong>Giai đoạn 1 (0-3 tháng):</strong> Hào hứng, lạc quan, thử mọi thứ. Mọi lệnh đều thú vị. Giai đoạn "tuần trăng mật" với thị trường.</p>
<p><strong>Giai đoạn 2 (3-12 tháng):</strong> Hoang mang, nghi ngờ, liên tục đổi hệ thống. Đây là giai đoạn khó khăn nhất — hầu hết trader bỏ cuộc ở đây.</p>
<p><strong>Giai đoạn 3 (1-2 năm):</strong> Bắt đầu bình tĩnh, kiên nhẫn, tuân thủ một hệ thống duy nhất. Kỷ luật trở thành thói quen.</p>
<p><strong>Giai đoạn 4 (2+ năm):</strong> Trading trở thành công việc bình thường. Không có cảm xúc mạnh khi thắng hay thua. Đây là mục tiêu cần hướng tới.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Làm sao vượt qua sợ hãi khi vào lệnh?</h3>
<p>Sợ hãi thường do không tin vào hệ thống hoặc rủi ro quá lớn. Giải pháp: backtest hệ thống trên 100+ lệnh, giảm lot size đến mức thoải mái, và nhớ rằng mỗi lệnh chỉ là 1 trong 1,000+ lệnh — kết quả một lệnh không quan trọng.</p>
<h3>Có nên trade khi tâm trạng không tốt?</h3>
<p>Tuyệt đối không. Khi mệt, stress, giận hay buồn — đừng ngồi vào bàn giao dịch. Cảm xúc tiêu cực làm giảm khả năng phán đoán và tăng xu hướng quyết định bốc đồng. Áp dụng <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> nghiêm ngặt.</p>

<p>Thành thạo <strong>tâm lý trading</strong> đòi hỏi thời gian và sự kiên nhẫn. Trading plan trước mọi phiên, journal sau mọi lệnh, và nghỉ khi tâm lý lung lay. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> và xây dựng thói quen tốt từ đầu. Tìm hiểu thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<p>Nếu muốn tìm hiểu sâu hơn, hãy đọc "Trading in the Zone" (Mark Douglas) và "Market Wizards" (Jack Schwager) — hai cuốn sách kinh điển về tâm lý giao dịch. Kết hợp với <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> và chọn <a href="/so-sanh">sàn Forex uy tín</a> phù hợp với phong cách của bạn.</p>`
    },
    {
        id: 62,
        content: `<h2>Đòn bẩy — "siêu năng lực" hay "cái bẫy" của Forex?</h2>
<p><strong>Đòn bẩy (Leverage)</strong> cho phép bạn giao dịch với số tiền lớn hơn nhiều so với vốn thực. Với đòn bẩy 1:100, chỉ cần 100 USD, bạn đã kiểm soát vị thế trị giá 10,000 USD. Sàn môi giới "cho bạn mượn" phần còn lại.</p>
<p>Nghe hấp dẫn, nhưng đòn bẩy là <strong>con dao hai lưỡi</strong>: nó khuếch đại cả lợi nhuận lẫn thua lỗ. Và đây chính là lý do nhiều trader mới cháy tài khoản trong tuần đầu tiên — không phải vì phân tích sai, mà vì dùng đòn bẩy quá mạnh.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Màn hình giao dịch Forex với đòn bẩy" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Giao diện giao dịch Forex - nơi bạn chọn mức đòn bẩy phù hợp</figcaption>
</figure>

<h2>Cơ chế hoạt động — đơn giản hơn bạn nghĩ</h2>
<p>Khi bạn mở lệnh, sàn yêu cầu bạn đặt một khoản <strong>ký quỹ (Margin)</strong> — đó chính là "tiền cọc" để giữ vị thế. Với đòn bẩy 1:100, ký quỹ chỉ bằng 1% giá trị giao dịch. Muốn mua 1 lot EUR/USD (trị giá 100,000 USD)? Ký quỹ chỉ 1,000 USD.</p>
<p>Đòn bẩy càng cao, ký quỹ càng thấp. 1:500 chỉ cần 200 USD, 1:1000 chỉ 100 USD cho cùng vị thế 100,000 USD. Nhưng hãy nhớ: ký quỹ thấp không có nghĩa là rủi ro thấp — hoàn toàn ngược lại.</p>

<h2>Ví dụ thực tế — khi đòn bẩy "cắn" ngược</h2>
<p>Bạn có 1,000 USD, dùng đòn bẩy 1:100 mở 1 lot EUR/USD. Nếu giá tăng 1% (100 pips), bạn lời 1,000 USD — tài khoản tăng gấp đôi. Tuyệt vời!</p>
<p>Nhưng nếu giá giảm 1%? Bạn thua 1,000 USD — tài khoản về 0 và bị <strong>Margin Call</strong>. Chỉ cần 1% biến động sai hướng là mất toàn bộ vốn. Và 100 pips trên EUR/USD? Hoàn toàn có thể xảy ra trong vài giờ khi có tin tức lớn.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Biểu đồ tài chính minh họa rủi ro đòn bẩy" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Biểu đồ minh họa - đòn bẩy khuếch đại cả lãi lẫn lỗ</figcaption>
</figure>

<h2>Margin Call và Stop Out — hai "tín hiệu đỏ"</h2>
<p><strong>Margin Call</strong> là lời cảnh báo từ sàn khi ký quỹ của bạn giảm xuống mức tối thiểu (thường 50-100%). Lúc này bạn cần nạp thêm tiền hoặc đóng bớt lệnh.</p>
<p><strong>Stop Out</strong> nghiêm trọng hơn: khi margin giảm quá thấp (20-50%), sàn sẽ tự động đóng các lệnh thua lỗ lớn nhất để bảo vệ tài khoản khỏi âm. Mức Stop Out khác nhau tùy sàn — <a href="/exness/" title="Exness">Exness</a> có Stop Out 0%, <a href="/ic-markets/" title="IC Markets">IC Markets</a> là 50%.</p>

<h2>Cách sử dụng đòn bẩy an toàn</h2>
<p>Nguyên tắc vàng: <strong>chỉ vì sàn cho đòn bẩy 1:1000 không có nghĩa bạn phải dùng hết</strong>. Hãy bắt đầu với đòn bẩy hiệu dụng 1:10 đến 1:20 bằng cách mở vị thế nhỏ so với tài khoản.</p>
<p>Luôn đặt <a href="/tin-tuc/cach-dat-stop-loss-take-profit/" title="Stop Loss">Stop Loss</a> — đây là lưới an toàn bắt buộc khi dùng đòn bẩy. Áp dụng quy tắc 1-2%: với tài khoản 1,000 USD, mỗi lệnh chỉ nên rủi ro tối đa 10-20 USD. Tính lot size phù hợp bằng công thức: <strong>Lot size = (Vốn × % rủi ro) ÷ (SL pips × Giá trị 1 pip)</strong>.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Trader phân tích biểu đồ Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Phân tích và tính toán lot size phù hợp trước khi vào lệnh</figcaption>
</figure>

<h2>Đòn bẩy phù hợp cho từng cấp độ</h2>
<p>Người mới bắt đầu nên dùng 1:10 đến 1:50 — rủi ro thấp, học hỏi từ từ. Trader trung cấp có thể dùng 1:50 đến 1:200 — cân bằng lợi nhuận và rủi ro. Trader chuyên nghiệp dùng 1:200-1:500 cho các cơ hội ngắn hạn, và scalper chuyên nghiệp mới cần đến 1:500+ cho giao dịch cực ngắn hạn.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Đòn bẩy 1:100 nghĩa là gì?</h3>
<p>Bạn kiểm soát vị thế lớn gấp 100 lần vốn thực. 100 USD giao dịch được 10,000 USD. Cả lợi nhuận và thua lỗ đều khuếch đại 100 lần.</p>
<h3>Người mới nên dùng đòn bẩy bao nhiêu?</h3>
<p>Bắt đầu với đòn bẩy hiệu dụng 1:10 đến 1:20. Mở vị thế nhỏ, kết hợp Stop Loss và chỉ rủi ro 1%/lệnh.</p>
<h3>Sàn nào cho đòn bẩy cao nhất?</h3>
<p><a href="/exness/">Exness</a> cung cấp đòn bẩy Unlimited cho một số tài khoản. <a href="/vantage/" title="Vantage">Vantage</a> và XM cung cấp tới 1:500. Chọn mức phù hợp với trình độ của bạn.</p>`
    },
    {
        id: 63,
        content: `<h2>Spread — chi phí "ẩn" mà nhiều trader không để ý</h2>
<p><strong>Spread</strong> là khoảng chênh lệch giữa giá Mua (Ask) và giá Bán (Bid). Nói đơn giản: đây chính là phí giao dịch mà sàn thu từ bạn mỗi khi mở lệnh. Ví dụ, EUR/USD có Bid 1.0850 và Ask 1.0852 — spread là 2 pips.</p>
<p>Tại sao quan trọng? Vì mỗi lệnh bạn mở đều <strong>bắt đầu ở trạng thái lỗ</strong> — lỗ đúng bằng giá trị spread. Nếu spread 2 pips và mục tiêu lợi nhuận 10 pips, bạn thực tế chỉ lời 8 pips. Tích lũy qua 20 lệnh/ngày, spread "ăn" không ít đâu.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Phân tích dữ liệu spread Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Phân tích spread - yếu tố ảnh hưởng trực tiếp đến chi phí giao dịch</figcaption>
</figure>

<h2>Ba loại spread bạn cần biết</h2>
<p><strong>Spread cố định (Fixed)</strong> không thay đổi bất kể thị trường ra sao — EUR/USD luôn 2 pips chẳng hạn. Dễ dự đoán chi phí, phù hợp cho người mới, nhưng thường cao hơn loại thả nổi trong điều kiện bình thường.</p>
<p><strong>Spread thả nổi (Variable)</strong> dao động theo cung cầu. Bình thường rất thấp (0.1-0.5 pip), nhưng khi có tin lớn như NFP hay FOMC, spread có thể giãn lên 10-50 pips. Phù hợp cho scalper nhưng cần cẩn thận khi biến động mạnh.</p>
<p><strong>Spread bằng 0 (Zero Spread)</strong> thì spread = 0 nhưng sàn thu phí hoa hồng cố định thêm. <a href="/exness/" title="Exness">Exness</a> Zero và <a href="/ic-markets/" title="IC Markets">IC Markets</a> Raw Spread là ví dụ tiêu biểu.</p>

<h2>Những yếu tố ảnh hưởng đến spread</h2>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dashboard tài chính hiển thị spread realtime" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Theo dõi spread realtime trên dashboard giao dịch</figcaption>
</figure>

<p><strong>Cặp tiền</strong> là yếu tố lớn nhất: EUR/USD spread chỉ 0.1-2 pips, trong khi cặp exotic như USD/ZAR có thể lên 10-100 pips. <strong>Phiên giao dịch</strong> cũng quan trọng — phiên London và overlap London-New York có spread thấp nhất.</p>
<p>Khi có <strong>tin tức kinh tế lớn</strong> (NFP, quyết định lãi suất), spread có thể giãn gấp 5-20 lần bình thường. Cuối tuần và ngày lễ cũng có spread rộng hơn do thanh khoản giảm. Ngoài ra, loại tài khoản cũng ảnh hưởng — ECN/Raw spread luôn thấp hơn Standard.</p>

<h2>Tính chi phí spread thực tế</h2>
<p>Giá trị 1 <a href="/kien-thuc-forex/pip-trong-forex-la-gi/" title="pip">pip</a> phụ thuộc vào lot size: 1 lot = 10 USD/pip, 0.1 lot = 1 USD/pip, 0.01 lot = 0.10 USD/pip. Nếu bạn trade 1 lot EUR/USD với spread 1.5 pips, chi phí mỗi lệnh là 15 USD.</p>
<p>Ví dụ thực tế: trade 1 lot/ngày, 20 ngày/tháng. Sàn A spread 1.5 pips = <strong>$300/tháng</strong>. Sàn B spread 0.2 pip + $7 hoa hồng = <strong>$180/tháng</strong>. Tiết kiệm $120/tháng = $1,440/năm — chỉ nhờ chọn đúng loại tài khoản!</p>

<h2>Mẹo giảm chi phí spread</h2>

<figure style="margin: 2em 0; text-align: center;">
<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80" alt="Thị trường tài chính và chiến lược giảm spread" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chiến lược giảm chi phí spread hiệu quả cho trader</figcaption>
</figure>

<p>Chọn tài khoản <strong>ECN/Raw Spread</strong> — tổng chi phí thường thấp hơn tài khoản Standard. Giao dịch trong giờ thanh khoản cao (phiên London, 14:00-23:00 VN). Tránh trade 15-30 phút trước và sau tin tức lớn vì spread giãn cực mạnh.</p>
<p>Ưu tiên các cặp tiền major (EUR/USD, USD/JPY, GBP/USD) vì spread thấp nhất. So sánh spread giữa các sàn vì chênh lệch 0.2-0.5 pip tích lũy lâu dài rất đáng kể. Xem <a href="/" title="sàn uy tín">so sánh sàn</a> để chọn sàn phù hợp.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Spread bao nhiêu là tốt?</h3>
<p>EUR/USD dưới 1 pip là tốt. Tài khoản ECN với spread 0.0-0.3 pips + commission 3-3.5 USD/lot là rất cạnh tranh.</p>
<h3>Spread cố định hay thả nổi tốt hơn?</h3>
<p>Swing trader nên dùng spread cố định vì dễ tính toán. Scalper nên dùng spread thả nổi (ECN) vì tiết kiệm hơn nhiều.</p>
<h3>Tại sao spread giãn rộng đột ngột?</h3>
<p>Do thanh khoản giảm hoặc biến động tăng mạnh. Thường xảy ra khi có tin kinh tế quan trọng, đầu tuần, hoặc cuối năm.</p>`
    },
];

async function main() {
    for (const post of batch4) {
        const { error } = await supabase
            .from('posts')
            .update({ content: post.content })
            .eq('id', post.id);

        if (error) {
            console.log(`❌ Post #${post.id}: ${error.message}`);
        } else {
            console.log(`✅ Post #${post.id} updated`);
        }
    }
    console.log(`\nBatch 4 done! Updated ${batch4.length} posts.`);
}

main();
