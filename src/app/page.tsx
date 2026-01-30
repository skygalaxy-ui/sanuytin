import Hero from "@/components/Hero";
import BrokerRanking from "@/components/BrokerRanking";
import Benefits from "@/components/Benefits";
import Steps from "@/components/Steps";
import LatestPosts from "@/components/LatestPosts";
import BrokerAdvice from "@/components/BrokerAdvice";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <BrokerRanking />
      <Benefits />
      <Steps />
      <BrokerAdvice />
      <LatestPosts />
      <FAQ />
    </>
  );
}
