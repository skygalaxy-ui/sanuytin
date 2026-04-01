import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";
import TelegramButton from "@/components/TelegramButton";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://sanuytin.net";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 ✓ Đánh Giá Thực Tế",
    template: "%s | SanUyTin.net",
  },
  description: "⭐ Xếp hạng 10+ sàn Forex uy tín nhất 2026 tại Việt Nam. So sánh chi tiết phí giao dịch, giấy phép, tốc độ nạp rút. Đánh giá khách quan từ chuyên gia 10+ năm kinh nghiệm.",
  keywords: ["sàn forex uy tín", "sàn forex tốt nhất", "top sàn forex uy tín", "sàn giao dịch forex uy tín", "sàn forex nào uy tín nhất", "top 10 sàn forex uy tín tại việt nam", "sàn trade forex uy tín", "các sàn forex uy tín", "sàn forex uy tín nhất", "kiểm tra sàn forex uy tín", "sàn forex kiếm tiền từ đâu", "so sánh sàn forex", "đánh giá sàn forex", "review sàn forex", "sàn giao dịch forex kiếm tiền từ đâu", "sàn forex nào tốt nhất", "top sàn forex uy tín", "các sàn giao dịch forex uy tín", "sàn trade uy tín", "sàn forex uy tín thế giới"],
  authors: [{ name: "Sàn Uy Tín", url: baseUrl }],
  creator: "Sàn Uy Tín",
  publisher: "Sàn Uy Tín",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-san-uy-tin.png",
    apple: "/logo-san-uy-tin.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: baseUrl,
    siteName: "Sàn Uy Tín",
    title: "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 ✓ Đánh Giá Thực Tế",
    description: "⭐ Xếp hạng 10+ sàn Forex uy tín nhất 2026 tại Việt Nam. So sánh phí, giấy phép, nạp rút. Đánh giá khách quan từ chuyên gia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sàn Uy Tín - Top 10 Sàn Forex Uy Tín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 ✓ Đánh Giá Thực Tế",
    description: "⭐ So sánh chi tiết top sàn Forex uy tín nhất hiện nay. Review thực tế từ chuyên gia 10+ năm.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "AuR5bHaiFovXfeMLnq1thh96e6Z62hB8ROBs4OH7UPA",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sàn Uy Tín",
    url: "https://sanuytin.net",
    logo: "https://sanuytin.net/logo-san-uy-tin.png",
    description: "Bảng xếp hạng và đánh giá các sàn Forex uy tín nhất Việt Nam",
    sameAs: [
      "https://facebook.com/sanuytin",
      "https://t.me/sanuytin",
      "https://www.youtube.com/@reviewsanuytin",
      "https://x.com/sanuytin",
      "https://www.pinterest.com/sanuytin/",
      "https://www.producthunt.com/@sanuytinreview",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "sanuytin.net@gmail.com",
      contactType: "customer service",
      availableLanguage: "Vietnamese",
    },
  };

  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QJB7HJNW31"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJB7HJNW31');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-body`}>
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
          <TelegramButton />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

