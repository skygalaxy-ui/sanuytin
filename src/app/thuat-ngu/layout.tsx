import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Từ Điển Thuật Ngữ Forex - Giải Thích 67+ Thuật Ngữ A-Z | Sàn Uy Tín",
    description: "Tra cứu nhanh 67+ thuật ngữ chuyên ngành Forex. Giải thích dễ hiểu từ Spread, Pip, Lot, Margin, MT4/MT5, NFP, RSI đến Leverage, Stop Loss, Take Profit cho người mới bắt đầu.",
    alternates: {
        canonical: "https://sanuytin.net/thuat-ngu/",
    },
    openGraph: {
        title: "Từ Điển Thuật Ngữ Forex - Giải Thích A-Z",
        description: "Tra cứu nhanh 50+ thuật ngữ Forex chuyên ngành từ cơ bản đến nâng cao.",
        url: "https://sanuytin.net/thuat-ngu/",
        type: "website",
    },
};

export default function ThuatNguLayout({ children }: { children: React.ReactNode }) {
    return children;
}
