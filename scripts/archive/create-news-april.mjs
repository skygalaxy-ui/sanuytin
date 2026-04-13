import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

// Current UTC time + 20 mins for the first post
let nextTime = Date.now() + 20 * 60 * 1000;

function createNewsPost(title, slug, excerpt, content, tags, photoId) {
    const scheduledISO = new Date(nextTime).toISOString();
    nextTime += 20 * 60 * 1000; // block cho bài tiếp theo cách 20p
    
    // Ghép ảnh Unsplash ngẫu nhiên với từ khóa
    const imageHtml = `
<figure class="my-8">
  <img src="https://images.unsplash.com/photo-${photoId}?w=800&q=80" alt="${title}" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Nguyên tắc cốt lõi: Luôn quản trị rủi ro trước những tin tức chấn động nhất.</figcaption>
</figure>`;

    return {
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: imageHtml + content,
        category: "tin-thi-truong",
        tags: tags,
        is_published: false,
        scheduled_at: scheduledISO,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
}

const articlesData = [
    {
        title: "Fed ám chỉ khả năng giảm lãi suất vào tháng 6: Giá vàng (XAU) lập đỉnh mới",
        slug: "fed-am-chi-kha-nang-giam-lai-suat-vang-lap-dinh",
        excerpt: "Biên bản cuộc họp FOMC rạng sáng nay cho thấy các quan chức Cục Dự trữ Liên bang (Fed) vẫn giữ nguyên kế hoạch nới lỏng chính sách trong năm 2026.",
        tags: ["Tin tức Vàng", "Fed", "FOMC"],
        photoId: "1611974789855-9c2a0a7236a3",
        content: `
<h2>Lạm phát hạ nhiệt nhưng vẫn tiềm ẩn rủi ro</h2>
<p>Thị trường tài chính toàn cầu đã trải qua một phiên nhào lộn điên rồ sau biên bản cuộc họp Cục Dự trữ Liên bang Mỹ (Fed). Chủ tịch Jerome Powell khẳng định rằng mặc dù áp lực <a href="/kien-thuc-forex/non-farm-la-gi/">tình hình lạm phát (CPI)</a> lõi vẫn cứng đầu, các tín hiệu vĩ mô cho thấy nền kinh tế đang dần hạ sốt.</p>
<p>Giới tạo lập thị trường (Smart money) ngay lập tức định giá lại kịch bản cắt giảm lãi suất cơ bản. Đồng USD bị bán phản ứng gắt gao, giúp tỷ giá XAU/USD (Vàng ròng) tiếp tục thiết lập một cột mốc lịch sử mới, áp sát vùng kháng cự $2,450 / ounce.</p>
<h2>Cơ hội nào cho nhà đầu tư bán lẻ?</h2>
<p>Với mức chênh lệch giá bị nén qua nhiều tuần, những nhà giao dịch theo xu hướng dài hạn đang đứng trước rủi ro quét thanh khoản 2 đầu. Việc duy trì <a href="/kien-thuc-forex/risk-reward-rr-la-gi-bi-quyet-quan-ly-von/">kỷ luật quản lý vốn</a> và nới lỏng mức dừng lỗ (Stop loss) là bắt buộc trong bối cảnh các đợt sóng bất cân xứng đang diễn ra dữ dội.</p>
`
    },
    {
        title: "Bất ổn địa chính trị Trung Đông đẩy giá dầu WTI vượt ngưỡng 90 USD",
        slug: "bat-on-dia-chinh-tri-trung-dong-day-gia-dau-wti",
        excerpt: "Hành lang vận chuyển dầu mỏ lớn nhất thế giới tiếp tục gặp gián đoạn, đẩy hợp đồng tương lai dầu thô WTI phá vỡ mức đỉnh lịch sử kể từ tháng 10 năm ngoái.",
        tags: ["Dầu WTI", "Địa chính trị", "Tin hàng hóa"],
        photoId: "1518709268805-4e9042af9f23",
        content: `
<h2>Căng thẳng leo thang đe dọa chuỗi cung ứng</h2>
<p>Sự hỗn loạn tại khu vực eo biển Hormuz khiến cước phí bảo hiểm tàu biển chuyên chở dầu tăng gấp 3 trong vòng một tháng. Căng thẳng leo thang có thể dập tắt hi vọng ổn định lạm phát của các nền kinh tế lớn.</p>
<h2>Xu hướng giao dịch năng lượng tuần tới</h2>
<p>Trên biểu đồ phân tích kỹ thuật hiện tại, dầu WTI đang ở mức mua quá mức (Overbought) trên khung D1. Tuy nhiên, rủi ro địa chính trị là ngòi nổ "Thiên nga đen", do đó <a href="/kien-thuc-forex/hanh-dong-gia-price-action-co-ban/">các cấu trúc hành động giá cơ bản</a> tại đỉnh mới có thể dễ dàng bị đập nát nếu có thêm một quả tên lửa lạc quỹ đạo.</p>
`
    },
    {
        title: "Ngân hàng trung ương Nhật (BOJ) chấm dứt lãi suất âm: Đồng Yên bứt phá",
        slug: "boj-cham-dut-lai-suat-am-dong-yen-but-pha",
        excerpt: "Kỷ nguyên bơm tiền không giới hạn của Nhật Bản chính thức khép lại. Quyết định lịch sử này khiến giỏ tiền tệ EUR/JPY bị xả kho trên diện rộng.",
        tags: ["Ngân hàng BOJ", "JPY", "Ngoại hối"],
        photoId: "1526304640581-d334cdbbf45e",
        content: `
<h2>Sự kiện lịch sử thay đổi thế trận của đồng JPY</h2>
<p>BOJ đã mạnh tay nâng lãi suất chủ chốt từ -0.1% về thẳng 0.1%, chấm dứt chuỗi 8 năm ròng rã duy trì chính sách tiền tệ siêu lỏng. Việc điều chỉnh chính sách kiểm soát đường cong lợi suất (YCC) này đã gửi tín hiệu cực kỳ mạnh bạo đến các quỹ bán khống Yên Nhật suốt thời gian qua.</p>
<h2>Chiến lược đánh chênh lệch lãi suất (Carry trade) hấp hối</h2>
<p>Rất nhiều định chế tài chính đã vay JPY lãi suất rẻ để vác tiền đi mua USD suốt nhiều năm. Giữa bối cảnh JPY đắt lên, hành động "trả hàng" tháo margin diễn ra ồ ạt khiến tỷ giá chao đảo trong một nhịp nến H4. Liệu sự rút chân có bền vững, hãy cẩn trọng quan sát <a href="/kien-thuc-forex/3-mau-nen-price-action-pin-bar-fakey/">các mô hình nến râu dài</a> để quyết định gồng lời hay không.</p>
`
    },
    {
        title: "Bitcoin (BTC) áp sát mốc 80,000 USD trước thềm Halving: Dòng tiền ETF cuộn sóng",
        slug: "bitcoin-ap-sat-80k-truoc-halving-dong-tien-etf",
        excerpt: "Tính khan hiếm của hệ thống Blockchain cùng sự bảo chứng hợp pháp hóa của Phố Wall (ETF) khiến cá mập liên tục gom hàng trước đợt giảm nửa phần thưởng khối.",
        tags: ["Crypto", "Bitcoin", "Qũy ETF"],
        photoId: "1518546305929-0eb1ab1c5b8d",
        content: `
<h2>Lực cầu Spot lấn át hoàn toàn nguồn cung thợ đào</h2>
<p>Khoảng thời gian ngụp lặn của "vua tiền số" đã chấm dứt hoàn toàn. Mỗi ngày mạng lưới đào cạn đi lượng cung mới, trong khi các quỹ BlackRock và Fidelity vẫn giữ lửa mua gom hàng nghìn BTC. Sự giằng co cung cầu khiến lệnh Short cháy hàng loạt tại hệ sinh thái tương lai (Futures).</p>
<h2>Cẩn trọng "Bán sự thật" (Sell the news)</h2>
<p>Không phải ai nhảy vào trước Halving đều chiến thắng. Theo số liệu lịch sử tại 3 chu kỳ Halving trước đó, thị trường thường có một nhịp <a href="/kien-thuc-forex/liquidity-thanh-khoan-la-gi-bay-gia-smc/">quét thanh khoản khủng khiếp</a> (giảm 20% - 30%) chia tay những tay mơ FOMO trước khi bước vào chu kỳ siêu lợi nhuận thực sự kéo dài hàng năm rưỡi.</p>
`
    },
    {
        title: "Chủ tịch Powell điều trần: 'Không vội hạ lãi suất' khiến chỉ số USD (DXY) bật tăng",
        slug: "powell-dieu-tran-khong-voi-ha-lai-suat",
        excerpt: "Những phát biểu cứng rắn từ FED đập tan mơ mộng của nhà đầu tư, dòng vốn ồ ạt rót ngược về trái phiếu kho bạc Mỹ kỳ hạn 10 năm.",
        tags: ["USD Index", "Fed", "Tin tức vĩ mô"],
        photoId: "1611974789855-9c2a0a7236a3",
        content: `
<h2>Kinh tế Mỹ kiên cường bất chấp lãi suất cao</h2>
<p>Đối mặt với số liệu việc làm NFP không hề sứt mẻ và vòng xoáy giá dịch vụ còn âm ỉ, ông Powell tái khẳng định uỷ ban cần nhìn thấy lạm phát lao thẳng tuột về mốc lõi 2.0% thì mới nhúc nhích đảo đòn.</p>
<h2>Tỷ giá EUR/USD và GBP/USD đối mặt vùng tử thần</h2>
<p>Sức nóng của USD khiến hàng loạt cặp tiền tệ chính đối diện với sự gãy vỡ mô hình. Lực hút từ trái phiếu kho bạc đang bào mòn dòng tiền chảy về Liên minh châu Âu, nếu bạn đang Long các cặp hậu vị USD, hãy tính toán <a href="/kien-thuc-forex/cach-tinh-lot-size-chuan-xac-trong-forex/">số Lot cẩn thận</a> để đón nhận một quý 2 đầy giông bão.</p>
`
    },
    {
        title: "Báo cáo bảng lương phi nông nghiệp (NFP) công bố tuần này: Thị trường nín thở chờ đợi",
        slug: "bao-cao-nfp-tuan-nay-thi-truong-nin-tho",
        excerpt: "Mọi sự quan tâm của giới đầu cơ đổ dồn vào báo cáo tình hình thất nghiệp tối thứ 6. Điểm xoay chiều quyết định số phận ngắn hạn của Vàng và USD nằm trọn vẹn tại đây.",
        tags: ["NFP", "Non-farm", "Tin kinh tế"],
        photoId: "1642543439904-7b9dc0bb418b",
        content: `
<h2>NFP luôn là sân chơi rủi ro tột đỉnh</h2>
<p>Bảng lương phi nông nghiệp (Non-Farm Payrolls) nổi tiếng với sự khốc liệt trên biểu đồ 1 phút. Theo chuyên gia phân tích từ các nhà kinh tế học, tỷ lệ thất nghiệp tăng lên một phần nhỏ thôi cũng đủ để kích hoạt robot giao dịch thuật toán đẩy vàng lên thẳng đứng.</p>
<h2>Bài toán FOMO của Trader nghiệp dư</h2>
<p>Sức hút kỳ quái của những cây nến dãn 20-30 pips trong nháy mắt tạo ra sức cám dỗ mãnh liệt. Lời khuyên xương máu là: Tối nay hãy rời xa giao diện chuột, pha một tách trà nóng, tuyệt đối kiểm soát <a href="/kien-thuc-forex/hoi-chung-fomo-forex-tam-ly-giao-dich/">hội chứng FOMO lỡ đò</a>. Không lệnh nào là lệnh an toàn khi đường truyền đang trượt giá kịch khung ở các sàn giao dịch thanh khoản kém.</p>
`
    },
    {
        title: "Tỷ giá EUR/USD suy yếu khi ECB phát tín hiệu nới lỏng sớm hơn Mỹ",
        slug: "ty-gia-eur-usd-suy-yeu-khi-ecb-noi-long",
        excerpt: "Nền kinh tế khu vực châu Âu hạ nhiệt khá nhanh tạo áp lực khiến Ngân hàng Trung ương (ECB) buộc phải rục rịch khởi động in tiền và hạ lãi suất chặn đứng suy thoái.",
        tags: ["EUR/USD", "ECB", "Tin thị trường"],
        photoId: "1624996379697-f67a28e5dbec",
        content: `
<h2>Tốc độ giảm phát quyết định sự kiện</h2>
<p>Trái ngược với sự lì lợm và rực rỡ của kinh tế Mỹ, Đức và Pháp đang cảm nhận rõ làn gió lạnh từ suy thoái. Do đó, mặc dù ECB ngỏ ý mong Fed hành động trước, nhưng với dữ liệu mới này, khả năng bà Lagarde ấn nút cứu thương là cực lớn.</p>
<h2>Phân nhánh dòng tiền vĩ mô</h2>
<p>Sự chênh lệch về thời điểm hành động ngân hàng tạo ra cơ hội Short-term bán khống hoàn hảo cho EUR/USD. Nếu cấu trúc đỉnh đáy thấp dần của <a href="/kien-thuc-forex/hanh-dong-gia-price-action-co-ban/">Hành động giá Price action</a> xác nhận phá thủng hỗ trợ tĩnh, đà dốc của Đồng Euro sẽ không có dấu hiệu ngơi nghỉ cho tới mốc 1.0500.</p>
`
    },
    {
        title: "Cổ phiếu công nghệ đẩy chứng khoán Mỹ lên đỉnh lịch sử trước mùa báo cáo",
        slug: "co-phieu-cong-nghe-day-chung-khoan-my-len-dinh",
        excerpt: "Làn sóng trí tuệ nhân tạo (AI) chưa có dấu hiệu lỗi thời. Sắc xanh áp đảo tại phố Wall kéo các chỉ số SP500 và Nasdaq thiết lập trần kháng cự vô giới hạn.",
        tags: ["Chứng khoán Mỹ", "Nasdaq", "S&P 500"],
        photoId: "1611974789855-9c2a0a7236a3",
        content: `
<h2>Bong bóng hay sự chuyển dịch cơ cấu nhân loại?</h2>
<p>Những khoản đầu tư quy mô khổng lồ vào trung tâm xử lý dữ liệu của Meta, Google và ông trùm chip Nvidia là bộ 3 tên lửa kéo cả thị trường tài chính bò sữa. Số đông chờ đợi nhịp đi chỉnh truyền thống đang bị mắc kẹt trên đường đua xanh.</p>
<h2>Ảnh hưởng tới các lớp tài sản rủi ro khác</h2>
<p>Dòng chảy tham lam đan xen rủi ro thúc đẩy tiền gửi tìm kiếm kênh trú ẩn phòng hờ, khiến đồng USD vẫn giữ nguyên phong độ cạnh tranh. Cục diện giằng co này làm việc phân tích <a href="/kien-thuc-forex/margin-call-stop-out-la-gi/">tình trạng trượt giá Margin call</a> và tính toán cược dài hạn tại sàn Forex cho chỉ số trở thành con dao 2 lưỡi.</p>
`
    }
];

async function seedPosts() {
    const arr = [];
    for (let c of articlesData) {
        arr.push(createNewsPost(c.title, c.slug, c.excerpt, c.content, c.tags, c.photoId));
    }

    const { data, error } = await supabase.from('posts').insert(arr).select('id');
    
    if (error) {
        console.error("Lỗi khi thêm bài viết:", error);
    } else {
        console.log(`Đã tạo thành công ${data.length} bài viết!`);
        console.log("IDs:", data.map(d => d.id).join(', '));
    }
}

seedPosts();
