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

export default async function Home() {
  const content = await getPageContentByPath("/");

  return (
    <>
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
