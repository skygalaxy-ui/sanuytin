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
}

export const brokers: Broker[] = [
    {
        id: 1,
        rank: 1,
        name: "Vantage",
        slug: "vantage",
        logo: "https://sanuytin.net/wp-content/uploads/2025/11/san-giao-dich-forex-vantage-co-uy-tin-khong.png",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/xm-sanuytin.jpg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/exness-sanuytin.jpg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/xtb-sanuytin.jpg",
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
            <p class="mb-4"><strong>XTB</strong> là một Fintech company thực thụ trong lĩnh vực Forex. Khác với các sàn khác dùng MT4, XTB phát triển nền tảng xStation 5 đoạt nhiều giải thưởng, mang lại trải nghiệm giao dịch vượt trội.</p>
        `
    },
    {
        id: 5,
        rank: 5,
        name: "FBS",
        slug: "fbs",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/fbs-sanuytin.png",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/hfm-sanuytin.jpg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/11/fxtm-san-forex-uy-tin-2025.jpeg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/fxpro-sanuytin.jpg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/tickmill-sanuytin.jpg",
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
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/Pepperstone-sanuytin.jpg",
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
            <p class="mb-4"><strong>Pepperstone</strong> là niềm tự hào của Úc trong lĩnh vực Fintech. Sàn nổi tiếng với tốc độ, sự ổn định và hỗ trợ công nghệ tận răng. Pepperstone là một trong số ít broker cho phép bạn giao dịch trực tiếp trên biểu đồ TradingView.</p>
            <h3 class="text-xl font-bold mb-2 text-foreground">Công nghệ ECN/STP</h3>
            <p class="mb-4">Pepperstone hoạt động theo mô hình No Dealing Desk thực thụ. Mọi lệnh của bạn được đẩy trực tiếp ra thị trường liên ngân hàng với độ trễ gần như bằng 0. Đây là môi trường lý tưởng cho các hệ thống giao dịch tự động (EA).</p>
        `
    },
];
