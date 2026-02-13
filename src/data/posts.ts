export interface Post {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
    slug: string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Nên Trade sàn nào năm 2026? Top 5 sàn uy tín cho từng nhu cầu",
        excerpt: "Sàn trade uy tín là nền tảng môi giới sở hữu giấy phép từ các tổ chức tài chính hàng đầu thế giới...",
        category: "Review Sàn",
        date: "15/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "nen-trade-san-nao-nam-2026",
    },
    {
        id: 2,
        title: "Pepperstone Review 2026: Đánh Giá Pháp Lý Và Trải Nghiệm Thực Tế",
        excerpt: "Pepperstone là sàn môi giới ngoại hối uy tín được thành lập từ 2010, sở hữu các giấy phép quốc tế...",
        category: "Review Sàn",
        date: "14/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "review-san-pepperstone-danh-gia-phap-ly-va-trai-nghiem-thuc-te",
    },
    {
        id: 3,
        title: "Hướng dẫn chọn sàn Forex cho F0 từ A-Z: Vốn nhỏ 500k vẫn có thể bắt đầu?",
        excerpt: "Sàn Forex tốt nhất cho người mới là những nền tảng có giấy phép uy tín (FCA, ASIC), và hỗ trợ tốt...",
        category: "Hướng dẫn",
        date: "12/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "huong-dan-chon-san-forex",
    },
    {
        id: 4,
        title: "Trade là gì? Hiểu đúng về trade",
        excerpt: "Nếu bạn từng tình cờ thấy một ai đó ngồi cà phê với chiếc laptop đầy rẫy những biểu đồ...",
        category: "Kiến thức cơ bản",
        date: "10/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "trade-la-gi-hieu-dung-ve-trade",
    },
    {
        id: 5,
        title: "Vốn dưới 1 triệu có Trade Forex được không?",
        excerpt: "Cầm 1 triệu đồng trong tay vào thời điểm cuối năm 2025 này, nhiều anh em sẽ nghĩ số vốn này quá nhỏ...",
        category: "Tư vấn",
        date: "08/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "von-duoi-1-trieu-co-trade-forex-duoc-khong",
    },
    {
        id: 6,
        title: "Trade Vàng đòn bẩy cao: “Lối tắt” làm giàu hay bẫy cháy tài khoản 2026?",
        excerpt: "Thú thật đi, có phải bạn vừa nhìn thấy một tấm ảnh chụp màn hình xanh mướt trên mạng xã hội...",
        category: "Chiến lược",
        date: "05/01/2026",
        imageUrl: "/images/placeholder-post.png",
        slug: "trade-vang-don-bay-cao",
    },
];
