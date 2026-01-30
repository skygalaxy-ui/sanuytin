import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sàn Uy Tín - Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026",
  description: "Bảng xếp hạng sàn Forex uy tín nhất tại Việt Nam 2026 được đánh giá minh bạch, khách quan. Cập nhật các sàn giao dịch ngoại hối tốt nhất, phí thấp, nạp rút nhanh.",
  keywords: "sàn forex uy tín, top sàn forex, đánh giá sàn forex, forex việt nam",
  icons: {
    icon: '/home/logo-khong-nen-san-uy-tin.png',
  },
  openGraph: {
    title: "Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026",
    description: "Bảng xếp hạng & Đánh giá chi tiết các sàn Forex uy tín nhất hiện nay.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${openSans.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

