import Hero from "@/components/Hero";
import BrokerRanking from "@/components/BrokerRanking";
import QuickComparison from "@/components/QuickComparison";
import Benefits from "@/components/Benefits";
import Steps from "@/components/Steps";
import LatestPosts from "@/components/LatestPosts";
import BrokerAdvice from "@/components/BrokerAdvice";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import { getPageContentByPath } from "@/lib/supabase";
import { brokers } from "@/data/brokers";

// Trang chủ tự cập nhật mỗi 60 giây → bài mới hiện tự động
export const revalidate = 60;

export default async function Home() {
  const content = await getPageContentByPath("/");

  // Schema: WebSite with SearchAction (enables Google Sitelinks search box)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sàn Uy Tín",
    url: "https://sanuytin.net",
    description: "Bảng xếp hạng và đánh giá sàn Forex uy tín nhất Việt Nam 2026",
    publisher: {
      "@type": "Organization",
      name: "Sàn Uy Tín",
      logo: { "@type": "ImageObject", url: "https://sanuytin.net/logo-san-uy-tin.png" },
    },
    inLanguage: "vi",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://sanuytin.net/tin-tuc/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };

  // Schema: ItemList for Broker Ranking (enables rich list snippets)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 Sàn Forex Uy Tín Nhất 2026",
    description: "Bảng xếp hạng sàn Forex uy tín nhất Việt Nam, đánh giá dựa trên giấy phép, phí giao dịch và trải nghiệm thực tế.",
    numberOfItems: Math.min(brokers.length, 10),
    itemListElement: brokers.slice(0, 10).map((broker, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: broker.name,
      url: `https://sanuytin.net/${broker.slug}/`,
      item: {
        "@type": "FinancialService",
        name: broker.name,
        url: `https://sanuytin.net/${broker.slug}/`,
        image: broker.logo,
        description: `Sàn ${broker.name} - Giấy phép: ${broker.license} | Nạp tối thiểu: ${broker.minDep} | Đòn bẩy: ${broker.maxLev}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: broker.score,
          bestRating: 10,
          worstRating: 0,
          ratingCount: Math.floor(50 + broker.score * 15),
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Hero content={content["home-hero"]} />
      <ScrollReveal>
        <BrokerRanking />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <QuickComparison />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Benefits content={content["home-features"]} />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Steps />
      </ScrollReveal>
      <ScrollReveal>
        <BrokerAdvice />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <LatestPosts />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
    </>
  );
}
