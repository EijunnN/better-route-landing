import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem-section";
import FeaturesSection from "@/components/sections/features-section";
import SavingsSection from "@/components/sections/savings-section";
import HowItWorks, { TechStack } from "@/components/sections/how-it-works";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <ProblemSection />
        <Divider />
        <FeaturesSection />
        <Divider />
        <SavingsSection />
        <Divider />
        <HowItWorks />
        <Divider />
        <TechStack />
        <Divider />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
