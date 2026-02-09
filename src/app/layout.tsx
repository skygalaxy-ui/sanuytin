import type { Metadata, Viewport } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";
import TelegramButton from "@/components/TelegramButton";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
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
    default: "Sàn Uy Tín - Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026",
    template: "%s | Sàn Uy Tín",
  },
  description: "Bảng xếp hạng sàn Forex uy tín nhất tại Việt Nam 2026 được đánh giá minh bạch, khách quan. Cập nhật các sàn giao dịch ngoại hối tốt nhất, phí thấp, nạp rút nhanh.",
  keywords: ["sàn forex uy tín", "top sàn forex", "đánh giá sàn forex", "forex việt nam", "broker forex", "sàn giao dịch ngoại hối", "review sàn forex", "so sánh sàn forex"],
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
    icon: "/logo-khong-nen-san-uy-tin.png",
    apple: "/logo-khong-nen-san-uy-tin.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: baseUrl,
    siteName: "Sàn Uy Tín",
    title: "Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026",
    description: "Bảng xếp hạng & Đánh giá chi tiết các sàn Forex uy tín nhất hiện nay. Review thực tế từ chuyên gia.",
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
    title: "Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026",
    description: "Bảng xếp hạng & Đánh giá chi tiết các sàn Forex uy tín nhất hiện nay.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "your-google-verification-code",
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
    logo: "https://sanuytin.net/logo-khong-nen-san-uy-tin.png",
    description: "Bảng xếp hạng và đánh giá các sàn Forex uy tín nhất Việt Nam",
    sameAs: [
      "https://facebook.com/sanuytin",
      "https://t.me/sanuytin",
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
      </head>
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
          <TelegramButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

