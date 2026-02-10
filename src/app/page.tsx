import Hero from "@/components/Hero";
import BrokerRanking from "@/components/BrokerRanking";
import Benefits from "@/components/Benefits";
import Steps from "@/components/Steps";
import LatestPosts from "@/components/LatestPosts";
import BrokerAdvice from "@/components/BrokerAdvice";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <BrokerRanking />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Benefits />
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
