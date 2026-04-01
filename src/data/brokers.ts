export interface Broker {
    id: number;
    rank: number;
    name: string;
    slug: string; // URL friendly name
    logo: string;
    score: number;
    minDep: string;
    maxLev: string;
    license: string;
    features: string[];
    reviewLink: string;
    registerLink: string;
    // Detailed Review Data
    foundedYear: string;
    headquarters: string;
    platforms: string[];
    depositMethods: string[];
    pros: string[];
    cons: string[];
    longDescription: string;
    avgSpread: string;
    commission: string;
    faq?: { question: string; answer: string }[];
}

export const brokers: Broker[] = [
    {
        id: 1,
        rank: 1,
        name: "Vantage",
        slug: "vantage",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111202536-xylxa3m03pi.png",
        score: 9.9,
        minDep: "$50",
        maxLev: "1:1000",
        license: "ASIC, FCA, CIMA",
        features: ["Khớp lệnh siêu tốc", "Raw Spread từ 0.0", "Hỗ trợ người Việt"],
        reviewLink: "vantage",
        registerLink: "https://www.vantage-markets-apac.com/vi/open-live-account/?affid=NzI2ODQyNw==",
        foundedYear: "2009",
        headquarters: "Sydney, Australia",
        platforms: ["MT4", "MT5", "ProTrader", "App"],
        depositMethods: ["Internet Banking", "Visa/Master", "USDT", "Skrill"],
        pros: [
            "Được cấp phép bởi các tổ chức uy tín hàng đầu (ASIC, FCA)",
            "Tốc độ khớp lệnh cực nhanh, không re-quote",
            "Phí giao dịch thấp, đặc biệt là tài khoản Raw ECN",
            "Hỗ trợ nạp rút tiền nhanh chóng qua ngân hàng nội địa"
        ],
        avgSpread: "1.0 pips",
        commission: "Không phí",
        cons: [
            "Yêu cầu tiền nạp tối thiểu $50 (cao hơn một số sàn khác)",
            "Ít chương trình Bonus cho khách hàng cũ"
        ],
        longDescription: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">01.</span> Tổng Quan Về Vantage
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        <strong>Vantage</strong> (trước đây là Vantage FX) là nhà môi giới đa tài sản toàn cầu được thành lập từ năm 2009, có trụ sở chính tại Sydney, Úc. 
                        Với hơn 15 năm hoạt động, Vantage đã khẳng định vị thế là "Thiên đường cho ECN Trader" nhờ hạ tầng công nghệ vượt trội.
                    </p>
                    <p class="text-muted-foreground leading-relaxed">
                        Sàn kết nối trực tiếp với các nhà cung cấp thanh khoản hàng đầu (Tier-1 Liquidity Providers) qua cầu nối quang học <span class="font-semibold text-foreground">oneZero™ MT4 Bridge</span>, 
                        đảm bảo tốc độ khớp lệnh siêu tốc (dưới 30ms) và không có sự can thiệp của bàn giao dịch (No Dealing Desk).
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">02.</span> Giấy Phép & Độ Uy Tín
                    </h3>
                    <p class="mb-3 text-muted-foreground">Vantage sở hữu hồ sơ pháp lý cực kỳ "sạch" và uy tín với các giấy phép hạng A:</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">ASIC (Úc)</span>
                            <span class="text-sm text-muted-foreground">GP số 428901 - Một trong những giấy phép khó đạt được nhất thế giới.</span>
                        </li>
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">FCA (Anh)</span>
                            <span class="text-sm text-muted-foreground">GP số 590299 - Bảo hiểm tiền gửi lên đến £85,000 cho khách hàng.</span>
                        </li>
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">CIMA (Cayman)</span>
                            <span class="text-sm text-muted-foreground">GP số 1383491 - Quản lý hoạt động toàn cầu với cơ chế linh hoạt.</span>
                        </li>
                    </ul>
                    <p class="text-sm text-muted-foreground italic">
                        *Tiền ký quỹ của khách hàng được giữ trong tài khoản tách biệt (Segregated Accounts) tại Ngân hàng Quốc gia Úc (NAB), đảm bảo an toàn tuyệt đối.
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">03.</span> Điều Kiện Giao Dịch
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                            <thead class="bg-secondary/50 text-foreground">
                                <tr>
                                    <th class="p-3 text-left">Loại Tài Khoản</th>
                                    <th class="p-3 text-left">Spread Từ</th>
                                    <th class="p-3 text-left">Hoa Hồng (2 chiều)</th>
                                    <th class="p-3 text-left">Nạp Tối Thiểu</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border/50">
                                <tr>
                                    <td class="p-3 font-medium">Standard STP</td>
                                    <td class="p-3">1.0 pips</td>
                                    <td class="p-3 font-bold text-green-600">Không phí</td>
                                    <td class="p-3">$50</td>
                                </tr>
                                <tr class="bg-primary/5">
                                    <td class="p-3 font-medium">Raw ECN (Khuyên dùng)</td>
                                    <td class="p-3 font-bold text-primary">0.0 pips</td>
                                    <td class="p-3">$6.0</td>
                                    <td class="p-3">$50</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Pro ECN</td>
                                    <td class="p-3">0.0 pips</td>
                                    <td class="p-3">$3.0</td>
                                    <td class="p-3">$10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 text-muted-foreground">
                        Với tài khoản <strong>Raw ECN</strong>, bạn sẽ được trải nghiệm spread Vàng gần như bằng 0 trong phiên Âu và Mỹ. Đây là điểm mạnh tuyệt đối của Vantage so với Exness hay XM.
                    </p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        rank: 2,
        name: "XM",
        slug: "xm",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg",
        score: 9.8,
        minDep: "$5",
        maxLev: "1:1000",
        license: "ASIC, CySEC, FSC",
        features: ["Bonus $30 không cần nạp", "Phí qua đêm thấp", "Khớp lệnh nhanh"],
        reviewLink: "xm",
        registerLink: "https://affs.click/mG65j",
        foundedYear: "2009",
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "XM App"],
        depositMethods: ["Internet Banking", "MoMo", "Visa"],
        pros: [
            "Chương trình Bonus thưởng nạp tiền hấp dẫn nhất",
            "Không yêu cầu báo giá lại (Re-quotes)",
            "Phí spread ổn định, không giãn mạnh"
        ],
        avgSpread: "1.0 pips",
        commission: "Không phí",
        cons: [
            "Tài khoản Standard có spread hơi cao so với ECN",
            "Giao diện web hơi cũ"
        ],
        longDescription: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">01.</span> Tại Sao XM Được Yêu Thích?
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        <strong>XM</strong> (XM Global) là một trong những nhà môi giới lớn nhất thế giới với hơn <strong>10 triệu khách hàng</strong> từ 190 quốc gia. 
                        Thương hiệu XM gắn liền với sự "Hào Phóng" nhờ các chương trình khuyến mãi khủng và chính sách không báo giá lại (No Re-quotes).
                    </p>
                    <div class="bg-card p-4 rounded-xl border border-border shadow-sm flex gap-4 items-center">
                        <div class="bg-green-500/10 p-3 rounded-full text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </div>
                        <div>
                            <div class="font-bold text-foreground">Bonus $30 (Không Cần Nạp)</div>
                            <div class="text-sm text-muted-foreground">Tặng ngay $30 vào tài khoản khi mở mới. Lãi rút được, tiền thưởng không rút được.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">02.</span> Tài Khoản Giao Dịch
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                            <thead class="bg-secondary/50 text-foreground">
                                <tr>
                                    <th class="p-3 text-left">Đặc Điểm</th>
                                    <th class="p-3 text-left">Micro</th>
                                    <th class="p-3 text-left">Standard</th>
                                    <th class="p-3 text-left">Ultra Low</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border/50">
                                <tr>
                                    <td class="p-3 font-medium">Tiền nạp tối thiểu</td>
                                    <td class="p-3">$5</td>
                                    <td class="p-3">$5</td>
                                    <td class="p-3">$5</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Spread từ</td>
                                    <td class="p-3">1.0 pips</td>
                                    <td class="p-3">1.0 pips</td>
                                    <td class="p-3 font-bold text-primary">0.6 pips</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Hoa hồng</td>
                                    <td class="p-3 text-green-600 font-bold">Không</td>
                                    <td class="p-3 text-green-600 font-bold">Không</td>
                                    <td class="p-3 text-green-600 font-bold">Không</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Lot size</td>
                                    <td class="p-3">1,000 unit</td>
                                    <td class="p-3">100,000 unit</td>
                                    <td class="p-3">Chuẩn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">03.</span> Ưu Đãi Độc Quyền
                    </h3>
                    <ul class="space-y-2">
                        <li class="flex items-start gap-2">
                            <span class="text-primary font-bold">✓</span>
                            <span class="text-muted-foreground">Thưởng nạp tiền 50% lên đến $500 và 20% lên đến $4,500.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-primary font-bold">✓</span>
                            <span class="text-muted-foreground">Chương trình khách hàng thân thiết (XM Loyalty) tích điểm đổi tiền mặt.</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-primary font-bold">✓</span>
                            <span class="text-muted-foreground">Miễn phí máy chủ ảo (VPS) cho tài khoản có số dư > $500.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 2,
        rank: 3,
        name: "Exness",
        slug: "exness",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112121651-fh714o034v6.jpg",
        score: 9.5,
        minDep: "$10",
        maxLev: "Vô cực",
        license: "FCA, CySEC, FSA",
        features: ["Nạp rút tức thì", "Spread cực thấp", "Hỗ trợ tiếng Việt 24/7"],
        reviewLink: "exness",
        registerLink: "#",
        foundedYear: "2008",
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "Exness Terminal"],
        depositMethods: ["Internet Banking", "VietQR", "USDT", "Visa/Master"],
        pros: [
            "Nạp rút tiền diễn ra tức thì, kể cả cuối tuần",
            "Đòn bẩy không giới hạn (Vô cực)",
            "Spread trên cặp vàng và tiền tệ chính cực thấp",
            "Đội ngũ hỗ trợ người Việt 24/7 nhiệt tình"
        ],
        avgSpread: "0.6 pips",
        commission: "Không phí",
        cons: [
            "Máy chủ đôi khi bị lag vào giờ tin mạnh",
            "Spread có thể giãn nhẹ khi thị trường biến động cực đoan"
        ],
        longDescription: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">01.</span> Tổng Quan Về Exness
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        <strong>Exness</strong> được cộng đồng trader Việt Nam mệnh danh là "Vua thanh khoản". Thành lập từ 2008, Exness hiện là nhà môi giới có khối lượng giao dịch lớn nhất thế giới (đạt hơn 4.000 tỷ USD/tháng vào năm 2024).
                    </p>
                    <p class="text-muted-foreground leading-relaxed">
                        Điểm "ăn tiền" nhất của Exness chính là cơ chế <strong>Nạp Rút Tức Thì (Instant Withdrawal)</strong>. Hệ thống xử lý tự động 24/7 cho phép tiền về tài khoản ngân hàng của bạn chỉ trong vài giây, kể cả Thứ 7 và Chủ Nhật.
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">02.</span> Giấy Phép Hoạt Động
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div class="bg-card p-4 rounded-xl border border-border shadow-sm">
                            <div class="font-bold text-primary mb-1">FCA (Vương Quốc Anh)</div>
                            <div class="text-xs text-muted-foreground">Giấy phép uy tín nhất ngành tài chính, bảo vệ quyền lợi tối đa cho nhà đầu tư.</div>
                        </div>
                        <div class="bg-card p-4 rounded-xl border border-border shadow-sm">
                            <div class="font-bold text-primary mb-1">CySEC (Síp)</div>
                            <div class="text-xs text-muted-foreground">Cho phép hoạt động hợp pháp trên toàn châu Âu.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">03.</span> Các Loại Tài Khoản
                    </h3>
                    <ul class="space-y-4">
                        <li class="bg-secondary/30 p-4 rounded-xl border border-border/50">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-foreground">1. Standard & Standard Cent</span>
                                <span class="bg-green-500/10 text-green-600 px-2 py-0.5 rounded text-xs font-bold">Phổ biến nhất</span>
                            </div>
                            <p class="text-sm text-muted-foreground">
                                Chỉ từ $1 nạp vốn. Phù hợp cho người mới bắt đầu (Newbie). Spread ổn định từ 0.3 pips. <br>
                                <strong>Đòn bẩy: Vô cực (1:Unlimited)</strong> - Duy nhất trên thị trường.
                            </p>
                        </li>
                        <li class="bg-secondary/30 p-4 rounded-xl border border-border/50">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-foreground">2. Raw Spread</span>
                                <span class="bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded text-xs font-bold">Cho Scalper</span>
                            </div>
                            <p class="text-sm text-muted-foreground">
                                Spread cặp chính cố định ở <strong>0.0 pips</strong>. Phí hoa hồng $7/lot. <br>
                                Lý tưởng cho các chiến lược lướt sóng (Scalping) và giao dịch thuật toán (EA).
                            </p>
                        </li>
                        <li class="bg-secondary/30 p-4 rounded-xl border border-border/50">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-foreground">3. Zero Account</span>
                                <span class="bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded text-xs font-bold">Spread 0.0</span>
                            </div>
                            <p class="text-sm text-muted-foreground">
                                Cam kết Spread 0.0 pips trong 95% thời gian giao dịch cho 30 cặp tiền chính. Phí hoa hồng từ $3.5/lot/chiều.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 4,
        rank: 4,
        name: "XTB",
        slug: "xtb",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112164030-loanxe4gvka.jpg",
        score: 9.5,
        minDep: "$0",
        maxLev: "1:500",
        license: "FCA, CySEC, KNF",
        features: ["Nền tảng xStation 5 xịn", "Niêm yết chứng khoán", "Miễn phí qua đêm vàng"],
        reviewLink: "xtb",
        registerLink: "#",
        foundedYear: "2002",
        headquarters: "Warsaw, Poland",
        platforms: ["xStation 5", "xStation Mobile"],
        depositMethods: ["NganLuong", "Visa", "Skrill"],
        pros: [
            "Nền tảng xStation 5 độc quyền cực kỳ mượt mà",
            "Được niêm yết trên sàn chứng khoán (minh bạch tài chính)",
            "Miễn phí phí qua đêm (Swap) cho lệnh Vàng và nhiều cặp tiền"
        ],
        avgSpread: "0.8 pips",
        commission: "Không phí",
        cons: [
            "Không hỗ trợ MT4/MT5 (có thể khó quen với người cũ)",
            "Đòn bẩy tối đa chỉ 1:500"
        ],
        longDescription: `
            <div class="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-3">XTB là ai? Tại sao nên chọn XTB?</h3>
                    <p>XTB là một trong những nhà môi giới ngoại hối và CFD lớn nhất thế giới, được thành lập tại Ba Lan năm 2002 và hiện đang niêm yết trên sàn chứng khoán Warsaw. Sự minh bạch về tài chính là thế mạnh tuyệt đối của XTB, khi mọi báo cáo đều được công khai định kỳ.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-3">Nền tảng xStation 5 độc quyền</h3>
                    <p>Khác với đa số sàn dùng MT4, XTB sở hữu nền tảng xStation 5 đoạt nhiều giải thưởng danh giá. Giao diện cực kỳ hiện đại, tích hợp sẵn lịch kinh tế, tin tức thị trường và tốc độ khớp lệnh trung bình chỉ khoảng 33ms.</p>
                </div>
                <div class="bg-primary/5 p-4 rounded-xl border border-primary/20">
                    <h4 class="font-bold text-primary mb-2">Ưu điểm cho Trader giao dịch Vàng</h4>
                    <p>XTB hiện đang áp dụng chính sách <strong>Free Swap (Miễn phí qua đêm)</strong> cho lệnh Vàng và nhiều cặp tiền tệ. Đây là lý do chính khiến XTB trở thành lựa chọn hàng đầu cho các trader thích phong cách Swing hoặc giữ lệnh dài hạn.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-3">Cạnh tranh cùng Pepperstone</h3>
                    <p>Nếu bạn phân vân giữa XTB và các đối thủ tầm cỡ khác, hãy tham khảo bài viết <a href="/kien-thuc-forex/so-sanh-san-xtb-va-pepperstone-2026">so sánh XTB và Pepperstone</a> để tìm ra sàn phù hợp nhất với phong cách lướt sóng của bạn.</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        rank: 5,
        name: "FBS",
        slug: "fbs",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112317691-rsgvniyati9.png",
        score: 9.3,
        minDep: "$1",
        maxLev: "1:3000",
        license: "CySEC, ASIC, FSC",
        features: ["Nhiều loại tài khoản", "Copy trade tốt", "Nạp rút nhanh"],
        reviewLink: "fbs",
        registerLink: "#",
        foundedYear: "2009",
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "FBS Trader"],
        depositMethods: ["Internet Banking", "Visa", "USDT"],
        pros: [
            "Đòn bẩy cực cao lên tới 1:3000",
            "Nhiều loại tài khoản phù hợp mọi trader (Cent, Micro, Standard)",
            "Ứng dụng Copy Trade tốt"
        ],
        avgSpread: "0.7 pips",
        commission: "Không phí",
        cons: [
            "Spread tài khoản thường hơi cao",
            "Giấy phép quốc tế chưa mạnh bằng top đầu"
        ],
        longDescription: `
            <p class="mb-4"><strong>FBS</strong> là lựa chọn phổ biến cho các trader mới bắt đầu nhờ yêu cầu vốn thấp và tài khoản Cent. Sàn có mặt tại hơn 150 quốc gia và nổi tiếng với các hoạt động marketing sôi nổi.</p>
        `
    },
    {
        id: 6,
        rank: 6,
        name: "HFM",
        slug: "hfm",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114266255-sck66d40i7.jpg",
        score: 9.2,
        minDep: "$5",
        maxLev: "1:2000",
        license: "FCA, CySEC, FSA",
        features: ["Bonus nạp tiền lớn", "Nhiều công cụ GD", "Bảo hiểm vốn"],
        reviewLink: "hfm",
        registerLink: "#",
        foundedYear: "2010",
        headquarters: "Larnaca, Cyprus",
        platforms: ["MT4", "MT5", "HFM App"],
        depositMethods: ["Bank Transfer", "Crypto", "Cards", "MoMo"],
        pros: [
            "Chương trình Bảo hiểm Trách nhiệm Dân sự lên đến 5.000.000 EUR",
            "Tài khoản PAMM chất lượng cho nhà đầu tư",
            "Công cụ phân tích độc quyền Premium Trader Tools",
            "Nhiều loại tài khoản linh hoạt (Cent, Zero, Premium)"
        ],
        avgSpread: "1.0 pips",
        commission: "Không phí",
        cons: [
            "Quy trình xác minh danh tính đôi khi hơi lâu (24h)",
            "Không hỗ trợ PayPal cho khách hàng Việt Nam"
        ],
        longDescription: `
            <p class="mb-4"><strong>HFM</strong> (trước đây là HotForex) là một thương hiệu môi giới đa tài sản từng đoạt giải thưởng. Với hơn 2.5 triệu tài khoản thực đã mở, HFM khẳng định vị thế là một trong những sàn giao dịch lớn nhất thế giới.</p>
            <h3 class="text-xl font-bold mb-2 text-foreground">An toàn và Bảo mật</h3>
            <p class="mb-4">HFM nổi bật với gói bảo hiểm lá chắn thị trường trị giá 5 triệu Euro, bảo vệ khách hàng khỏi các lỗi sai sót, gian lận hoặc sơ suất có thể dẫn đến thiệt hại về tài chính. Đây là điểm cộng cực lớn về uy tín.</p>
        `
    },
    {
        id: 7,
        rank: 7,
        name: "FXTM",
        slug: "fxtm",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114278972-v3ru19uy6ki.jpg",
        score: 9.1,
        minDep: "$10",
        maxLev: "1:2000",
        license: "FCA, CySEC",
        features: ["Đào tạo tốt", "Tài khoản ECN", "Hỗ trợ nhiệt tình"],
        reviewLink: "fxtm",
        registerLink: "#",
        foundedYear: "2011",
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "FXTM Trader"],
        depositMethods: ["Internet Banking", "E-wallets", "Visa/Master"],
        pros: [
            "Tốc độ khớp lệnh ECN cực nhanh, trung bình vài mili giây",
            "Nền tảng FXTM Invest (Copy Trade) rất phát triển",
            "Kho tài liệu giáo dục và hội thảo online phong phú",
            "Tách biệt vốn khách hàng tại các ngân hàng Tier-1"
        ],
        avgSpread: "1.5 pips",
        commission: "Không phí",
        cons: [
            "Phí rút tiền qua một số ví điện tử có thể cao",
            "Giao diện web quản lý tài khoản hơi rối với người mới"
        ],
        longDescription: `
            <p class="mb-4"><strong>FXTM</strong> (ForexTime) được biết đến là nhà môi giới có tốc độ tăng trưởng nhanh nhất thế giới. Sàn tập trung mạnh vào giáo dục và công nghệ khớp lệnh ECN, mang lại trải nghiệm giao dịch chuyên nghiệp.</p>
            <h3 class="text-xl font-bold mb-2 text-foreground">Giáo dục và Đào tạo</h3>
            <p class="mb-4">FXTM đầu tư rất mạnh vào mảng đào tạo với hàng loạt Ebook, Video hướng dẫn và các buổi Webinar hàng tuần. Đây là môi trường lý tưởng cho các trader mới muốn nâng cao kiến thức bài bản.</p>
        `
    },
    {
        id: 8,
        rank: 8,
        name: "FxPro",
        slug: "fxpro",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114307443-oc7s00765xt.jpg",
        score: 8.9,
        minDep: "$100",
        maxLev: "1:500",
        license: "FCA, CySEC, SCB",
        features: ["Thương hiệu toàn cầu", "Không phí hoa hồng", "Nhiều nền tảng"],
        reviewLink: "fxpro",
        registerLink: "#",
        foundedYear: "2006",
        headquarters: "London, UK",
        platforms: ["cTrader", "MT4", "MT5", "FxPro Edge"],
        depositMethods: ["Bank", "Visa", "PayPal", "Skrill"],
        pros: [
            "Thương hiệu toàn cầu uy tín, nhà tài trợ đội đua McLaren F1",
            "Nền tảng cTrader mạnh mẽ, hỗ trợ đo lường độ sâu thị trường (DOM)",
            "Mô hình No Dealing Desk (NDD) minh bạch hoàn toàn",
            "Ví FxPro Wallet giúp quản lý vốn an toàn, tách biệt rủi ro"
        ],
        avgSpread: "1.2 pips",
        commission: "Không phí",
        cons: [
            "Spread trên tài khoản MT4 không cạnh tranh bằng Exness hay Vantage",
            "Quy trình mở tài khoản yêu cầu xác minh khá kỹ"
        ],
        longDescription: `
            <p class="mb-4"><strong>FxPro</strong> là "ông lớn" thực thụ trong ngành Forex với trụ sở chính tại London. Hoạt động từ 2006, FxPro đã phục vụ khách hàng tại hơn 170 quốc gia và xử lý hàng nghìn lệnh mỗi giây.</p>
            <h3 class="text-xl font-bold mb-2 text-foreground">Nền tảng cTrader</h3>
            <p class="mb-4">FxPro là một trong những broker cung cấp nền tảng cTrader tốt nhất hiện nay. cTrader cho phép trader nhìn thấy độ sâu thị trường (Market Depth) và khớp lệnh VWAP (Volume Weighted Average Price), cực kỳ phù hợp cho Scalping chuyên nghiệp.</p>
        `
    },
    {
        id: 9,
        rank: 9,
        name: "Tickmill",
        slug: "tickmill",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114318664-67xqk21nro6.jpg",
        score: 8.6,
        minDep: "$100",
        maxLev: "1:1000",
        license: "FCA, CySEC, FSA",
        features: ["Spread thấp ổn định", "Không phí hoa hồng", "Execution nhanh"],
        reviewLink: "tickmill",
        registerLink: "#",
        foundedYear: "2014",
        headquarters: "Mahe, Seychelles",
        platforms: ["MT4", "MT5"],
        depositMethods: ["Bank Transfer", "Crypto", "Neteller", "Skrill"],
        pros: [
            "Phí hoa hồng (Commission) thấp nhất thị trường: 2 đơn vị tiền tệ/lot",
            "Chào đón mọi chiến lược giao dịch: Scalping, News Trading, EA",
            "Không có phí ẩn, spread cực thấp trên tài khoản Pro",
            "Giấy phép FCA Anh Quốc uy tín"
        ],
        avgSpread: "0.0 pips",
        commission: "$2/lot",
        cons: [
            "Ít sản phẩm giao dịch (chủ yếu là Forex, Vàng, Dầu, một số Index)",
            "Không có tài khoản Cent (chỉ có Pro và Classic)"
        ],
        longDescription: `
            <p class="mb-4"><strong>Tickmill</strong> là thiên đường cho dân Scalping và Algo Trading (Giao dịch thuật toán). Sàn nổi tiếng với điều kiện giao dịch "Raw" nhất: spread thấp, phí hoa hồng cực rẻ và tốc độ khớp lệnh tuyệt vời.</p>
            <h3 class="text-xl font-bold mb-2 text-foreground">Chi phí giao dịch</h3>
            <p class="mb-4">Nếu bạn quan tâm đến chi phí, Tickmill là lựa chọn số 1. Tài khoản Pro của họ có spread từ 0.0 pips và phí hoa hồng chỉ 2 USD/lot/chiều, thấp hơn 30-40% so với mức trung bình ngành (thường là 3.5 USD).</p>
        `
    },
    {
        id: 10,
        rank: 10,
        name: "Pepperstone",
        slug: "pepperstone",
        logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114342264-78hoiquogtv.jpg",
        score: 8.3,
        minDep: "$0 (rec. $200)",
        maxLev: "1:500",
        license: "ASIC, FCA, SCB",
        features: ["Khớp lệnh cực nhanh", "Không Dealing Desk", "Hỗ trợ cTrader"],
        reviewLink: "/pepperstone",
        registerLink: "#",
        foundedYear: "2010",
        headquarters: "Melbourne, Australia",
        platforms: ["cTrader", "MT4", "MT5", "TradingView"],
        depositMethods: ["Internet Banking", "Visa", "PayPal"],
        pros: [
            "Hỗ trợ kết nối trực tiếp với TradingView để giao dịch",
            "Thanh khoản sâu từ 22 ngân hàng Tier-1",
            "Dịch vụ chăm sóc khách hàng được đánh giá 5 sao",
            "Khớp lệnh cực nhanh dưới 30ms"
        ],
        avgSpread: "0.0 pips",
        commission: "$3.5/lot",
        cons: [
            "Yêu cầu nạp tiền lần đầu $200 (hơi cao với sinh viên)",
            "Không có nhiều chương trình Bonus như XM hay Exness"
        ],
        longDescription: `
            <div class="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                    <h3 class="text-xl font-bold text-foreground mb-3">Về sàn Pepperstone</h3>
                    <p>Được thành lập vào năm 2010 tại Melbourne, Úc, Pepperstone đã khẳng định vị thế là "Con cưng" của ngành Fintech nhờ tốc độ thực thi lệnh cực nhanh và thanh khoản sâu từ hơn 22 ngân hàng Tier-1.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-card p-4 rounded-xl border border-border">
                        <h4 class="font-bold text-primary">Phí Razor cực thấp</h4>
                        <p class="text-sm">Spread thô từ 0.0 pips và hoa hồng cạnh tranh, lý tưởng cho Scalpers.</p>
                    </div>
                    <div class="bg-card p-4 rounded-xl border border-border">
                        <h4 class="font-bold text-primary">Đa dạng nền tảng</h4>
                        <p class="text-sm">Hỗ trợ MT4, MT5, cTrader và giao dịch trực tiếp trên TradingView.</p>
                    </div>
                </div>
                <div>
                    <p>Pepperstone là một phần không thể thiếu trong danh sách <a href="/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026">top 10 sàn Forex uy tín nhất 2026</a> của chúng tôi. Với cơ chế No Dealing Desk (NDD), sàn đảm bảo không có sự can thiệp của bàn giao dịch, mang lại sự công bằng tối đa cho nhà đầu tư.</p>
                </div>
            </div>
        `
    },
    {
        id: 11, rank: 11, name: "IC Markets", slug: "ic-markets",
        logo: "https://www.google.com/s2/favicons?domain=icmarkets.com&sz=128",
        score: 9.0, minDep: "$200", maxLev: "1:500", license: "ASIC, CySEC, FSA",
        features: ["True ECN", "Spread thấp nhất", "Khớp lệnh nhanh"],
        reviewLink: "ic-markets", registerLink: "#",
        foundedYear: "2007", headquarters: "Sydney, Australia",
        platforms: ["MT4", "MT5", "cTrader"], depositMethods: ["Bank", "Visa", "Skrill", "Crypto"],
        pros: ["Spread cực thấp từ 0.0 pips", "True ECN - thanh khoản sâu", "Hỗ trợ cTrader chuyên nghiệp"],
        cons: ["Yêu cầu nạp tối thiểu $200", "Không có bonus cho khách mới"],
        avgSpread: "0.0 pips", commission: "$3.5/lot",
        longDescription: `<p class="mb-4"><strong>IC Markets</strong> là sàn True ECN hàng đầu thế giới với spread cực thấp và thanh khoản sâu từ các ngân hàng Tier-1.</p>`
    },
    {
        id: 12, rank: 12, name: "OANDA", slug: "oanda",
        logo: "https://www.google.com/s2/favicons?domain=oanda.com&sz=128",
        score: 8.8, minDep: "$0", maxLev: "1:50", license: "FCA, ASIC, NFA",
        features: ["Uy tín lâu đời", "Công cụ phân tích mạnh", "API trading"],
        reviewLink: "oanda", registerLink: "#",
        foundedYear: "1996", headquarters: "New York, USA",
        platforms: ["OANDA Trade", "MT4", "TradingView"], depositMethods: ["Bank", "Cards", "PayPal"],
        pros: ["Thương hiệu lâu đời từ 1996", "Được cấp phép NFA Mỹ", "Công cụ phân tích chuyên sâu"],
        cons: ["Đòn bẩy thấp 1:50", "Phí qua đêm cao"],
        avgSpread: "1.0 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>OANDA</strong> là một trong những broker lâu đời nhất thế giới, được thành lập từ năm 1996 với uy tín hàng đầu.</p>`
    },
    {
        id: 13, rank: 13, name: "eToro", slug: "etoro",
        logo: "https://www.google.com/s2/favicons?domain=etoro.com&sz=128",
        score: 8.7, minDep: "$50", maxLev: "1:30", license: "FCA, CySEC, ASIC",
        features: ["Copy Trading #1", "Giao diện thân thiện", "Đầu tư cổ phiếu"],
        reviewLink: "etoro", registerLink: "#",
        foundedYear: "2007", headquarters: "Tel Aviv, Israel",
        platforms: ["eToro Platform", "eToro App"], depositMethods: ["Bank", "Cards", "PayPal", "Skrill"],
        pros: ["Nền tảng Copy Trading hàng đầu", "Giao diện đẹp, dễ sử dụng", "Đa dạng sản phẩm đầu tư"],
        cons: ["Phí rút tiền $5", "Spread cao hơn trung bình"],
        avgSpread: "1.5 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>eToro</strong> là nền tảng Social Trading lớn nhất thế giới với hơn 30 triệu người dùng.</p>`
    },
    {
        id: 14, rank: 14, name: "Plus500", slug: "plus500",
        logo: "https://www.google.com/s2/favicons?domain=plus500.com&sz=128",
        score: 8.5, minDep: "$100", maxLev: "1:30", license: "FCA, CySEC, ASIC",
        features: ["CFD đa dạng", "Niêm yết LSE", "Giao diện đơn giản"],
        reviewLink: "plus500", registerLink: "#",
        foundedYear: "2008", headquarters: "Haifa, Israel",
        platforms: ["Plus500 Webtrader", "Plus500 App"], depositMethods: ["Bank", "Cards", "PayPal"],
        pros: [
            "Niêm yết công khai trên Sàn chứng khoán London (LSE: PLUS) — minh bạch tài chính tuyệt đối",
            "Được cấp phép bởi 3 tổ chức uy tín hàng đầu: FCA (Anh), CySEC (Síp), ASIC (Úc)",
            "Giao diện WebTrader cực kỳ trực quan, phù hợp người mới bắt đầu",
            "Miễn phí hoa hồng 100% — chỉ tính spread, không phí ẩn",
            "Hơn 2,800 sản phẩm CFD: Cổ phiếu, Forex, Hàng hóa, ETF, Crypto, Chỉ số",
            "Tài khoản Demo không giới hạn thời gian để luyện tập"
        ],
        cons: [
            "Không hỗ trợ MT4/MT5 — chỉ dùng nền tảng độc quyền Plus500",
            "Công cụ phân tích kỹ thuật cơ bản, chưa đa dạng bằng TradingView",
            "Đòn bẩy tối đa chỉ 1:30 cho khách hàng châu Âu (do quy định ESMA)",
            "Phí không hoạt động $10/tháng nếu không đăng nhập trong 3 tháng"
        ],
        avgSpread: "Variable", commission: "Không phí",
        faq: [
            {
                question: "Plus500 có uy tín không?",
                answer: "Có. Plus500 là một trong số ít sàn giao dịch CFD được niêm yết công khai trên Sàn chứng khoán London (LSE) với mã cổ phiếu PLUS. Sàn được cấp phép bởi FCA (Anh Quốc, GP số 509909), CySEC (Síp, GP số 250/14) và ASIC (Úc, GP số 417727). Báo cáo tài chính được kiểm toán công khai hàng năm, đảm bảo minh bạch tuyệt đối."
            },
            {
                question: "Plus500 có phù hợp cho người mới không?",
                answer: "Plus500 rất phù hợp cho người mới nhờ giao diện đơn giản, dễ hiểu. Tuy nhiên, sàn chỉ cung cấp CFD (Hợp đồng chênh lệch) nên người mới cần hiểu rõ về rủi ro đòn bẩy trước khi giao dịch bằng tiền thật. Nên bắt đầu với tài khoản Demo miễn phí để làm quen."
            },
            {
                question: "Rút tiền Plus500 có nhanh không?",
                answer: "Thời gian rút tiền Plus500 thường mất 1-3 ngày làm việc qua chuyển khoản ngân hàng và Visa/Mastercard. Rút qua PayPal và Skrill thường nhanh hơn, chỉ trong vòng 24 giờ. Plus500 không tính phí rút tiền."
            },
            {
                question: "Plus500 có hỗ trợ MetaTrader (MT4/MT5) không?",
                answer: "Không. Plus500 sử dụng nền tảng giao dịch độc quyền riêng (Plus500 WebTrader và App). Nền tảng này có ưu điểm là giao diện cực kỳ đơn giản, nhưng thiếu các công cụ phân tích nâng cao mà MT4/MT5 cung cấp. Nếu bạn cần MT4/MT5, có thể cân nhắc Vantage hoặc Exness."
            },
            {
                question: "Phí giao dịch của Plus500 là bao nhiêu?",
                answer: "Plus500 không tính phí hoa hồng (commission). Chi phí giao dịch duy nhất là Spread (chênh lệch giá mua-bán), thay đổi tùy theo sản phẩm và điều kiện thị trường. Ngoài ra, có phí qua đêm (Overnight Funding) nếu bạn giữ lệnh qua ngày, và phí không hoạt động $10/tháng nếu tài khoản không sử dụng trong 3 tháng."
            },
            {
                question: "Plus500 có phải lừa đảo không?",
                answer: "Không. Plus500 là công ty niêm yết trên Sàn chứng khoán London (LSE) từ năm 2018, phải tuân thủ các quy định nghiêm ngặt về công bố thông tin tài chính. Sàn được giám sát bởi FCA, CySEC và ASIC — ba trong số những cơ quan quản lý tài chính uy tín nhất thế giới. Tiền của khách hàng được giữ trong tài khoản tách biệt (Segregated Accounts)."
            }
        ],
        longDescription: `
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">01.</span> Tổng Quan Về Plus500
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        <strong>Plus500</strong> là nhà cung cấp dịch vụ giao dịch CFD (Hợp đồng chênh lệch) hàng đầu thế giới, được thành lập từ năm 2008 tại Haifa, Israel. Điểm đặc biệt nhất của Plus500 so với hầu hết các broker khác là sàn được <strong>niêm yết công khai trên Sàn chứng khoán London (LSE)</strong> với mã cổ phiếu <span class="font-semibold text-foreground">PLUS</span>, thuộc chỉ số FTSE 250.
                    </p>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        Việc niêm yết LSE đồng nghĩa với việc Plus500 phải tuân thủ các tiêu chuẩn minh bạch tài chính nghiêm ngặt nhất: công bố báo cáo tài chính hàng quý, kiểm toán độc lập, và chịu sự giám sát từ cả cổ đông lẫn cơ quan quản lý. Đây là lá chắn bảo vệ mạnh mẽ nhất cho nhà đầu tư — điều mà phần lớn các sàn Forex truyền thống không có được.
                    </p>
                    <div class="bg-card p-4 rounded-xl border border-border shadow-sm flex gap-4 items-center">
                        <div class="bg-blue-500/10 p-3 rounded-full text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <div>
                            <div class="font-bold text-foreground">2,800+ Sản Phẩm CFD</div>
                            <div class="text-sm text-muted-foreground">Giao dịch CFD trên Cổ phiếu, Forex, Chỉ số, Hàng hóa, ETF và Tiền điện tử — tất cả trên một nền tảng duy nhất.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">02.</span> Giấy Phép & Độ Uy Tín
                    </h3>
                    <p class="mb-3 text-muted-foreground">Plus500 sở hữu danh mục giấy phép ấn tượng từ các cơ quan quản lý tài chính hàng đầu thế giới:</p>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">FCA (Anh Quốc)</span>
                            <span class="text-sm text-muted-foreground">GP số 509909 — Plus500UK Ltd. Bảo hiểm FSCS lên đến £85,000 cho mỗi khách hàng.</span>
                        </li>
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">CySEC (Síp/EU)</span>
                            <span class="text-sm text-muted-foreground">GP số 250/14 — Plus500CY Ltd. Tuân thủ MiFID II, bảo vệ nhà đầu tư EU.</span>
                        </li>
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">ASIC (Úc)</span>
                            <span class="text-sm text-muted-foreground">AFSL số 417727 — Plus500AU Pty Ltd. Giám sát hoạt động tại khu vực châu Á - Thái Bình Dương.</span>
                        </li>
                        <li class="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border border-border/50">
                            <span class="font-bold text-primary">LSE (Niêm yết)</span>
                            <span class="text-sm text-muted-foreground">Mã cổ phiếu PLUS trên London Stock Exchange — Minh bạch tài chính hàng quý.</span>
                        </li>
                    </ul>
                    <p class="text-sm text-muted-foreground italic">
                        *Tiền ký quỹ của khách hàng được giữ trong tài khoản tách biệt (Segregated Accounts) tại các ngân hàng uy tín, đảm bảo an toàn ngay cả khi Plus500 gặp vấn đề tài chính.
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">03.</span> Điều Kiện Giao Dịch
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                            <thead class="bg-secondary/50 text-foreground">
                                <tr>
                                    <th class="p-3 text-left">Tiêu chí</th>
                                    <th class="p-3 text-left">Plus500</th>
                                    <th class="p-3 text-left">So với ngành</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border/50">
                                <tr>
                                    <td class="p-3 font-medium">Nạp tối thiểu</td>
                                    <td class="p-3">$100</td>
                                    <td class="p-3 text-muted-foreground">Trung bình (XM: $5, Exness: $10)</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Spread</td>
                                    <td class="p-3">Thay đổi (Variable)</td>
                                    <td class="p-3 text-muted-foreground">Cạnh tranh cho CFD cổ phiếu</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Hoa hồng</td>
                                    <td class="p-3 font-bold text-green-600">0% — Không phí</td>
                                    <td class="p-3 text-muted-foreground">Tốt hơn trung bình ngành</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Đòn bẩy tối đa</td>
                                    <td class="p-3">1:30 (EU/ASIC)</td>
                                    <td class="p-3 text-muted-foreground">Thấp (Exness: Vô cực, Vantage: 1:1000)</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Sản phẩm CFD</td>
                                    <td class="p-3 font-bold text-primary">2,800+</td>
                                    <td class="p-3 text-muted-foreground">Đa dạng hơn trung bình</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Bảo vệ số dư âm</td>
                                    <td class="p-3 font-bold text-green-600">Có</td>
                                    <td class="p-3 text-muted-foreground">Tiêu chuẩn cho sàn FCA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 text-muted-foreground">
                        Plus500 áp dụng chính sách <strong>Bảo vệ số dư âm (Negative Balance Protection)</strong> — tức tài khoản của bạn không bao giờ bị âm dù thị trường biến động cực mạnh. Kết hợp với cơ chế <strong>đóng lệnh tự động (Margin Call)</strong> khi ký quỹ giảm xuống mức tối thiểu, giúp hạn chế tối đa rủi ro mất vốn.
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">04.</span> Nền Tảng Giao Dịch
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        Khác với đa số broker sử dụng MetaTrader (MT4/MT5), Plus500 phát triển <strong>nền tảng giao dịch độc quyền riêng</strong> gồm phiên bản WebTrader (trình duyệt) và ứng dụng di động (iOS/Android). Đây vừa là ưu điểm vừa là hạn chế:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-green-500/5 p-4 rounded-xl border border-green-500/20">
                            <div class="font-bold text-green-600 mb-2">✅ Ưu điểm nền tảng</div>
                            <ul class="text-sm text-muted-foreground space-y-1">
                                <li>• Giao diện cực kỳ trực quan, dễ dùng</li>
                                <li>• Không cần cài đặt — chạy trên trình duyệt</li>
                                <li>• Cảnh báo giá theo thời gian thực</li>
                                <li>• Quản lý rủi ro: Stop Loss, Trailing Stop miễn phí</li>
                            </ul>
                        </div>
                        <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
                            <div class="font-bold text-red-600 mb-2">⚠️ Hạn chế</div>
                            <ul class="text-sm text-muted-foreground space-y-1">
                                <li>• Không hỗ trợ Expert Advisors (EA/Robot)</li>
                                <li>• Ít chỉ báo kỹ thuật hơn MT4/MT5</li>
                                <li>• Không hỗ trợ giao dịch thuật toán</li>
                                <li>• Không có TradingView tích hợp</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">05.</span> Nạp & Rút Tiền
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                            <thead class="bg-secondary/50 text-foreground">
                                <tr>
                                    <th class="p-3 text-left">Phương thức</th>
                                    <th class="p-3 text-left">Nạp tiền</th>
                                    <th class="p-3 text-left">Rút tiền</th>
                                    <th class="p-3 text-left">Phí</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border/50">
                                <tr>
                                    <td class="p-3 font-medium">Chuyển khoản ngân hàng</td>
                                    <td class="p-3">1-3 ngày</td>
                                    <td class="p-3">1-3 ngày</td>
                                    <td class="p-3 text-green-600 font-bold">Miễn phí</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Visa / Mastercard</td>
                                    <td class="p-3">Tức thì</td>
                                    <td class="p-3">1-3 ngày</td>
                                    <td class="p-3 text-green-600 font-bold">Miễn phí</td>
                                </tr>
                                <tr class="bg-primary/5">
                                    <td class="p-3 font-medium">PayPal</td>
                                    <td class="p-3 font-bold text-primary">Tức thì</td>
                                    <td class="p-3 font-bold text-primary">Trong 24h</td>
                                    <td class="p-3 text-green-600 font-bold">Miễn phí</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Skrill</td>
                                    <td class="p-3">Tức thì</td>
                                    <td class="p-3">Trong 24h</td>
                                    <td class="p-3 text-green-600 font-bold">Miễn phí</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 text-sm text-muted-foreground italic">
                        *Plus500 không tính phí nạp rút. Tuy nhiên, ngân hàng trung gian hoặc nhà cung cấp ví điện tử có thể thu phí riêng. Yêu cầu rút tiền tối thiểu từ $100.
                    </p>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">06.</span> So Sánh Plus500 vs Các Sàn Khác
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                            <thead class="bg-secondary/50 text-foreground">
                                <tr>
                                    <th class="p-3 text-left">Tiêu chí</th>
                                    <th class="p-3 text-left">Plus500</th>
                                    <th class="p-3 text-left">Exness</th>
                                    <th class="p-3 text-left">XM</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border/50">
                                <tr>
                                    <td class="p-3 font-medium">Niêm yết sàn CK</td>
                                    <td class="p-3 font-bold text-green-600">✓ LSE</td>
                                    <td class="p-3 text-muted-foreground">✗</td>
                                    <td class="p-3 text-muted-foreground">✗</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Nạp tối thiểu</td>
                                    <td class="p-3">$100</td>
                                    <td class="p-3 font-bold text-primary">$10</td>
                                    <td class="p-3 font-bold text-primary">$5</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Đòn bẩy</td>
                                    <td class="p-3">1:30</td>
                                    <td class="p-3 font-bold text-primary">Vô cực</td>
                                    <td class="p-3">1:1000</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Nền tảng</td>
                                    <td class="p-3">WebTrader riêng</td>
                                    <td class="p-3">MT4, MT5</td>
                                    <td class="p-3">MT4, MT5</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">CFD Cổ phiếu</td>
                                    <td class="p-3 font-bold text-green-600">2,000+</td>
                                    <td class="p-3 text-muted-foreground">Hạn chế</td>
                                    <td class="p-3">1,000+</td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-medium">Phù hợp</td>
                                    <td class="p-3">Người mới, CFD đa dạng</td>
                                    <td class="p-3">Scalper, Trader pro</td>
                                    <td class="p-3">Người mới, Bonus</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                        <span class="text-primary">07.</span> Plus500 Có Phù Hợp Cho Nhà Đầu Tư Việt Nam?
                    </h3>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        Plus500 là lựa chọn phù hợp cho <strong>nhà đầu tư Việt Nam muốn tiếp cận thị trường CFD cổ phiếu quốc tế</strong> (Apple, Tesla, Amazon...) với mức vốn khởi điểm hợp lý ($100). Giao diện đơn giản giúp người mới không bị choáng ngợp bởi quá nhiều chỉ báo kỹ thuật phức tạp.
                    </p>
                    <p class="mb-3 text-muted-foreground leading-relaxed">
                        Tuy nhiên, nếu bạn chủ yếu giao dịch <strong>Forex và Vàng với đòn bẩy cao</strong>, Plus500 không phải lựa chọn tối ưu vì đòn bẩy bị giới hạn ở mức 1:30. Trong trường hợp đó, <strong>Vantage</strong> (đòn bẩy 1:1000, Raw ECN) hoặc <strong>Exness</strong> (đòn bẩy vô cực, rút tiền tức thì) sẽ phù hợp hơn.
                    </p>
                    <div class="bg-card p-4 rounded-xl border border-border shadow-sm">
                        <div class="font-bold text-foreground mb-2">🎯 Kết luận của Sàn Uy Tín:</div>
                        <p class="text-sm text-muted-foreground">
                            Plus500 được đánh giá <strong>8.5/10</strong> — là sàn <strong>uy tín và an toàn</strong> nhờ niêm yết LSE và giấy phép FCA/ASIC. Phù hợp nhất cho nhà đầu tư muốn giao dịch CFD cổ phiếu quốc tế với giao diện đơn giản. Không phù hợp cho scalper hay trader cần MT4/MT5 và đòn bẩy cao.
                        </p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 15, rank: 15, name: "IG", slug: "ig",
        logo: "https://www.google.com/s2/favicons?domain=ig.com&sz=128",
        score: 8.9, minDep: "$250", maxLev: "1:200", license: "FCA, ASIC, BaFin",
        features: ["Broker lớn nhất UK", "ProRealTime", "Đa dạng sản phẩm"],
        reviewLink: "ig", registerLink: "#",
        foundedYear: "1974", headquarters: "London, UK",
        platforms: ["IG Platform", "MT4", "ProRealTime"], depositMethods: ["Bank", "Cards", "PayPal"],
        pros: ["Broker lớn nhất và lâu đời nhất UK", "Công cụ ProRealTime chuyên nghiệp", "17,000+ sản phẩm giao dịch"],
        cons: ["Yêu cầu nạp $250", "Phí không hoạt động sau 2 năm"],
        avgSpread: "0.6 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>IG</strong> được thành lập từ năm 1974, là broker CFD lớn nhất thế giới tính theo doanh thu.</p>`
    },
    {
        id: 16, rank: 16, name: "Capital.com", slug: "capital-com",
        logo: "https://www.google.com/s2/favicons?domain=capital.com&sz=128",
        score: 8.6, minDep: "$20", maxLev: "1:30", license: "FCA, CySEC, ASIC",
        features: ["AI phân tích", "Spread 0", "Học trading miễn phí"],
        reviewLink: "capital-com", registerLink: "#",
        foundedYear: "2016", headquarters: "London, UK",
        platforms: ["Capital.com App", "MT4", "TradingView"], depositMethods: ["Bank", "Cards", "Apple Pay"],
        pros: ["Công nghệ AI phân tích hành vi trading", "Spread cạnh tranh từ 0.0", "Ứng dụng học trading miễn phí"],
        cons: ["Broker mới thành lập (2016)", "Đòn bẩy EU thấp 1:30"],
        avgSpread: "0.0 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>Capital.com</strong> là Fintech mới nổi với công nghệ AI hỗ trợ trader phân tích và cải thiện hiệu suất.</p>`
    },
    {
        id: 17, rank: 17, name: "OCTA", slug: "octa",
        logo: "https://www.google.com/s2/favicons?domain=octafx.com&sz=128",
        score: 8.4, minDep: "$25", maxLev: "1:500", license: "CySEC, FSA",
        features: ["Copy Trading", "Bonus hấp dẫn", "Hỗ trợ VN"],
        reviewLink: "octa", registerLink: "#",
        foundedYear: "2011", headquarters: "St. Vincent",
        platforms: ["MT4", "MT5", "OctaTrader"], depositMethods: ["Bank", "USDT", "Cards"],
        pros: ["Bonus nạp tiền hấp dẫn", "Copy Trading tích hợp", "Hỗ trợ tiếng Việt tốt"],
        cons: ["Giấy phép offshore", "Spread đôi khi giãn rộng"],
        avgSpread: "0.6 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>OCTA</strong> (OctaFX cũ) là sàn phổ biến tại Việt Nam với nhiều chương trình bonus và hỗ trợ tiếng Việt.</p>`
    },
    {
        id: 18, rank: 18, name: "RoboForex", slug: "roboforex",
        logo: "https://www.google.com/s2/favicons?domain=roboforex.com&sz=128",
        score: 8.3, minDep: "$10", maxLev: "1:2000", license: "FSC Belize",
        features: ["Đòn bẩy cao", "8 loại tài khoản", "Copy Trading R Stocks"],
        reviewLink: "roboforex", registerLink: "#",
        foundedYear: "2009", headquarters: "Belize City, Belize",
        platforms: ["MT4", "MT5", "cTrader", "R StocksTrader"], depositMethods: ["Bank", "Crypto", "E-wallets"],
        pros: ["Đòn bẩy lên đến 1:2000", "8 loại tài khoản đa dạng", "Hỗ trợ giao dịch cổ phiếu Mỹ"],
        cons: ["Giấy phép FSC Belize yếu", "Spread tài khoản thường cao"],
        avgSpread: "1.3 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>RoboForex</strong> cung cấp đa dạng loại tài khoản và đòn bẩy cực cao lên đến 1:2000.</p>`
    },
    {
        id: 19, rank: 19, name: "Admiral Markets", slug: "admiral",
        logo: "https://www.google.com/s2/favicons?domain=admiralmarkets.com&sz=128",
        score: 8.5, minDep: "$100", maxLev: "1:500", license: "FCA, CySEC, ASIC",
        features: ["MetaTrader Supreme", "Đào tạo chất lượng", "Nhiều công cụ"],
        reviewLink: "admiral", registerLink: "#",
        foundedYear: "2001", headquarters: "Tallinn, Estonia",
        platforms: ["MT4", "MT5", "MetaTrader Supreme Edition"], depositMethods: ["Bank", "Cards", "Skrill"],
        pros: ["Plugin MetaTrader Supreme Edition độc quyền", "Tài liệu đào tạo chất lượng cao", "4000+ sản phẩm giao dịch"],
        cons: ["Spread tài khoản thường hơi cao", "Phí không hoạt động sau 24 tháng"],
        avgSpread: "0.5 pips", commission: "$3/lot",
        longDescription: `<p class="mb-4"><strong>Admiral Markets</strong> (Admirals) nổi tiếng với plugin MetaTrader Supreme Edition và chất lượng đào tạo.</p>`
    },
    {
        id: 20, rank: 20, name: "Saxo Bank", slug: "saxo-bank",
        logo: "https://www.google.com/s2/favicons?domain=saxobank.com&sz=128",
        score: 9.0, minDep: "$2000", maxLev: "1:100", license: "FCA, FSA Denmark, MAS",
        features: ["Ngân hàng thực thụ", "71,000+ sản phẩm", "Platform chuyên nghiệp"],
        reviewLink: "saxo-bank", registerLink: "#",
        foundedYear: "1992", headquarters: "Copenhagen, Denmark",
        platforms: ["SaxoTraderGO", "SaxoTraderPRO"], depositMethods: ["Bank Transfer"],
        pros: ["Là ngân hàng được cấp phép đầy đủ", "71,000+ sản phẩm đầu tư", "Nền tảng SaxoTrader đẳng cấp"],
        cons: ["Yêu cầu nạp tối thiểu $2000", "Không phù hợp trader nhỏ lẻ"],
        avgSpread: "0.4 pips", commission: "Variable",
        longDescription: `<p class="mb-4"><strong>Saxo Bank</strong> là ngân hàng đầu tư Đan Mạch với hơn 30 năm lịch sử, phục vụ khách hàng cao cấp.</p>`
    },
    {
        id: 21, rank: 21, name: "IQ Option", slug: "iq-option",
        logo: "https://www.google.com/s2/favicons?domain=iqoption.com&sz=128",
        score: 7.8, minDep: "$10", maxLev: "1:500", license: "CySEC",
        features: ["Giao diện đẹp", "Binary Options", "Học trading"],
        reviewLink: "iq-option", registerLink: "#",
        foundedYear: "2013", headquarters: "Limassol, Cyprus",
        platforms: ["IQ Option Platform"], depositMethods: ["Bank", "Cards", "Crypto", "E-wallets"],
        pros: ["Giao diện người dùng cực đẹp", "Nạp tối thiểu chỉ $10", "Nhiều công cụ học tập"],
        cons: ["Binary Options rủi ro cao", "Spread Forex cao hơn trung bình"],
        avgSpread: "Variable", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>IQ Option</strong> nổi tiếng với giao diện đẹp và tập trung vào Binary Options và CFD.</p>`
    },
    {
        id: 22, rank: 22, name: "Interactive Brokers", slug: "interactive-brokers",
        logo: "https://www.google.com/s2/favicons?domain=interactivebrokers.com&sz=128",
        score: 9.2, minDep: "$0", maxLev: "1:40", license: "SEC, FCA, MAS",
        features: ["Phí thấp nhất", "Toàn cầu", "Pro traders"],
        reviewLink: "interactive-brokers", registerLink: "#",
        foundedYear: "1978", headquarters: "Greenwich, USA",
        platforms: ["TWS", "IBKR Mobile", "Client Portal"], depositMethods: ["Bank Transfer"],
        pros: ["Phí giao dịch thấp nhất thị trường", "Truy cập 150+ sàn toàn cầu", "Công cụ chuyên nghiệp"],
        cons: ["Giao diện phức tạp", "Không phù hợp newbie"],
        avgSpread: "0.1 pips", commission: "$2/lot",
        longDescription: `<p class="mb-4"><strong>Interactive Brokers</strong> là broker cho trader chuyên nghiệp với phí cực thấp.</p>`
    },
    {
        id: 23, rank: 23, name: "CMC Markets", slug: "cmc-markets",
        logo: "https://www.google.com/s2/favicons?domain=cmcmarkets.com&sz=128",
        score: 8.7, minDep: "$0", maxLev: "1:500", license: "FCA, ASIC, BaFin",
        features: ["Next Generation", "10,000+ sản phẩm", "Công cụ mạnh"],
        reviewLink: "cmc-markets", registerLink: "#",
        foundedYear: "1989", headquarters: "London, UK",
        platforms: ["Next Generation", "MT4"], depositMethods: ["Bank", "Cards"],
        pros: ["Nền tảng Next Generation đoạt giải", "10,000+ sản phẩm CFD", "Công cụ phân tích mạnh"],
        cons: ["Spread mở rộng khi biến động", "Không có bonus"],
        avgSpread: "0.7 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>CMC Markets</strong> là broker CFD lâu đời từ UK với nền tảng Next Generation.</p>`
    },
    {
        id: 24, rank: 24, name: "FP Markets", slug: "fp-markets",
        logo: "https://www.google.com/s2/favicons?domain=fpmarkets.com&sz=128",
        score: 8.6, minDep: "$100", maxLev: "1:500", license: "ASIC, CySEC",
        features: ["True ECN", "Spread thấp", "Nhiều nền tảng"],
        reviewLink: "fp-markets", registerLink: "#",
        foundedYear: "2005", headquarters: "Sydney, Australia",
        platforms: ["MT4", "MT5", "cTrader", "IRESS"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["True ECN với spread từ 0.0", "Hỗ trợ cTrader và IRESS", "Được quản lý bởi ASIC"],
        cons: ["Yêu cầu nạp $100", "Phí rút tiền cho một số phương thức"],
        avgSpread: "0.0 pips", commission: "$3/lot",
        longDescription: `<p class="mb-4"><strong>FP Markets</strong> là sàn True ECN Úc với spread cực thấp và đa dạng nền tảng.</p>`
    },
    {
        id: 25, rank: 25, name: "Deriv", slug: "deriv",
        logo: "https://www.google.com/s2/favicons?domain=deriv.com&sz=128",
        score: 8.0, minDep: "$5", maxLev: "1:1000", license: "MFSA, VFSC",
        features: ["Synthetic Indices", "DBot", "Binary/Multipliers"],
        reviewLink: "deriv", registerLink: "#",
        foundedYear: "1999", headquarters: "Cyberjaya, Malaysia",
        platforms: ["DTrader", "DBot", "MT5"], depositMethods: ["Bank", "Cards", "Crypto", "E-wallets"],
        pros: ["Synthetic Indices 24/7", "DBot - tự động hóa trading", "Nạp tối thiểu chỉ $5"],
        cons: ["Sản phẩm phức tạp, rủi ro cao", "Giấy phép offshore"],
        avgSpread: "Variable", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>Deriv</strong> (Binary.com cũ) chuyên về Synthetic Indices và các sản phẩm phái sinh độc đáo.</p>`
    },
    {
        id: 26, rank: 26, name: "Trading 212", slug: "trading-212",
        logo: "https://www.google.com/s2/favicons?domain=trading212.com&sz=128",
        score: 8.2, minDep: "$1", maxLev: "1:30", license: "FCA, FSC Bulgaria",
        features: ["Cổ phiếu 0 phí", "Giao diện đẹp", "Đầu tư thụ động"],
        reviewLink: "trading-212", registerLink: "#",
        foundedYear: "2004", headquarters: "London, UK",
        platforms: ["Trading 212 App"], depositMethods: ["Bank", "Cards", "Apple Pay"],
        pros: ["Mua cổ phiếu thật 0% phí", "Giao diện mobile cực đẹp", "Đầu tư tự động Pies"],
        cons: ["Spread CFD cao", "Không có MT4/MT5"],
        avgSpread: "1.5 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>Trading 212</strong> phổ biến với Gen Z nhờ giao diện đẹp và mua cổ phiếu 0 phí.</p>`
    },
    {
        id: 27, rank: 27, name: "TopFX", slug: "topfx",
        logo: "https://www.google.com/s2/favicons?domain=topfx.com&sz=128",
        score: 8.1, minDep: "$50", maxLev: "1:500", license: "CySEC, FSA",
        features: ["ECN/STP", "Spread thấp", "cTrader"],
        reviewLink: "topfx", registerLink: "#",
        foundedYear: "2010", headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "cTrader"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["Liquidity từ các ngân hàng Tier-1", "Spread thấp ổn định", "Hỗ trợ cTrader"],
        cons: ["Thương hiệu chưa phổ biến", "Ít tài liệu đào tạo"],
        avgSpread: "0.0 pips", commission: "$2.75/lot",
        longDescription: `<p class="mb-4"><strong>TopFX</strong> là sàn ECN chất lượng với liquidity sâu và spread cạnh tranh.</p>`
    },
    {
        id: 28, rank: 28, name: "FXGT", slug: "fxgt",
        logo: "https://www.google.com/s2/favicons?domain=fxgt.com&sz=128",
        score: 7.9, minDep: "$5", maxLev: "1:1000", license: "FSA, VFSC",
        features: ["Crypto + Forex", "Bonus lớn", "Đòn bẩy cao"],
        reviewLink: "fxgt", registerLink: "#",
        foundedYear: "2019", headquarters: "Seychelles",
        platforms: ["MT4", "MT5"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["Kết hợp Forex và Crypto", "Bonus nạp tiền hấp dẫn", "Đòn bẩy lên 1:1000"],
        cons: ["Sàn mới, chưa có lịch sử dài", "Giấy phép offshore"],
        avgSpread: "1.0 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>FXGT</strong> là sàn hybrid Forex-Crypto mới nổi với bonus hấp dẫn.</p>`
    },
    {
        id: 29, rank: 29, name: "ThinkMarkets", slug: "thinkmarkets",
        logo: "https://www.google.com/s2/favicons?domain=thinkmarkets.com&sz=128",
        score: 8.4, minDep: "$0", maxLev: "1:500", license: "FCA, ASIC, FSA",
        features: ["ThinkTrader", "Spread thấp", "Copy Trading"],
        reviewLink: "thinkmarkets", registerLink: "#",
        foundedYear: "2010", headquarters: "Melbourne, Australia",
        platforms: ["ThinkTrader", "MT4", "MT5"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["Nền tảng ThinkTrader hiện đại", "Không yêu cầu nạp tối thiểu", "ThinkCopy miễn phí"],
        cons: ["Spread tài khoản Standard cao", "Ít công cụ nghiên cứu"],
        avgSpread: "0.4 pips", commission: "$3.5/lot",
        longDescription: `<p class="mb-4"><strong>ThinkMarkets</strong> nổi bật với nền tảng ThinkTrader và copy trading miễn phí.</p>`
    },
    {
        id: 30, rank: 30, name: "ATFX", slug: "atfx",
        logo: "https://www.google.com/s2/favicons?domain=atfx.com&sz=128",
        score: 8.0, minDep: "$100", maxLev: "1:400", license: "FCA, CySEC, FSA",
        features: ["Spread thấp", "Khớp lệnh nhanh", "Hỗ trợ APAC"],
        reviewLink: "atfx", registerLink: "#",
        foundedYear: "2014", headquarters: "London, UK",
        platforms: ["MT4", "ATFX Connect"], depositMethods: ["Bank", "Cards", "E-wallets"],
        pros: ["Được quản lý FCA UK", "Khớp lệnh nhanh", "Hỗ trợ khách hàng châu Á tốt"],
        cons: ["Chỉ có MT4", "Sản phẩm giao dịch hạn chế"],
        avgSpread: "0.6 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>ATFX</strong> là broker UK tập trung phát triển mạnh tại thị trường châu Á.</p>`
    },
    {
        id: 31, rank: 31, name: "NordFX", slug: "nordfx",
        logo: "https://www.google.com/s2/favicons?domain=nordfx.com&sz=128",
        score: 7.7, minDep: "$10", maxLev: "1:1000", license: "VFSC",
        features: ["Đòn bẩy cao", "Copy Trading", "Crypto trading"],
        reviewLink: "nordfx", registerLink: "#",
        foundedYear: "2008", headquarters: "Vanuatu",
        platforms: ["MT4", "MT5"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["Vốn nạp thấp $10", "Đòn bẩy 1:1000", "Hỗ trợ giao dịch Crypto"],
        cons: ["Giấy phép offshore yếu", "Spread không cạnh tranh"],
        avgSpread: "1.2 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>NordFX</strong> phù hợp cho trader muốn đòn bẩy cao và vốn nhỏ.</p>`
    },
    {
        id: 32, rank: 32, name: "FXCM", slug: "fxcm",
        logo: "https://www.google.com/s2/favicons?domain=fxcm.com&sz=128",
        score: 8.3, minDep: "$50", maxLev: "1:400", license: "FCA, ASIC",
        features: ["Trading Station", "API mạnh", "Nghiên cứu sâu"],
        reviewLink: "fxcm", registerLink: "#",
        foundedYear: "1999", headquarters: "London, UK",
        platforms: ["Trading Station", "MT4", "ZuluTrade"], depositMethods: ["Bank", "Cards"],
        pros: ["Lịch sử 25+ năm", "Công cụ API mạnh mẽ", "Nghiên cứu thị trường chuyên sâu"],
        cons: ["Spread cao hơn ECN brokers", "Giao diện cũ kỹ"],
        avgSpread: "1.3 pips", commission: "Không phí",
        longDescription: `<p class="mb-4"><strong>FXCM</strong> là broker lâu đời với nền tảng Trading Station độc quyền.</p>`
    },
    {
        id: 33, rank: 33, name: "Libertex", slug: "libertex",
        logo: "https://www.google.com/s2/favicons?domain=libertex.com&sz=128",
        score: 7.8, minDep: "$10", maxLev: "1:500", license: "CySEC",
        features: ["0 Spread", "Hoa hồng thấp", "Nhiều giải thưởng"],
        reviewLink: "libertex", registerLink: "#",
        foundedYear: "1997", headquarters: "Limassol, Cyprus",
        platforms: ["Libertex Platform", "MT4", "MT5"], depositMethods: ["Bank", "Cards", "Crypto"],
        pros: ["Spread 0% - chỉ tính hoa hồng", "Lịch sử 25+ năm", "Nhiều giải thưởng"],
        cons: ["Hoa hồng có thể cao cho một số cặp", "Sản phẩm CFD hạn chế"],
        avgSpread: "0.0 pips", commission: "0.1-0.5%",
        longDescription: `<p class="mb-4"><strong>Libertex</strong> độc đáo với mô hình 0 spread, chỉ tính hoa hồng giao dịch.</p>`
    }
];
