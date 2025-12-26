import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import Breadcrumb from "@/components/heygen-alternative/Breadcrumb";
import HeygenHeroSection from "@/components/heygen-alternative/HeygenHeroSection";
import HeygenTrustedCompanies from "@/components/heygen-alternative/HeygenTrustedCompanies";
import WhatIsHeygen from "@/components/heygen-alternative/WhatIsHeygen";
import HeygenUseCases from "@/components/heygen-alternative/HeygenUseCases";
import HeygenComparisonTable from "@/components/heygen-alternative/HeygenComparisonTable";
import AlternativesTagCloud from "@/components/heygen-alternative/AlternativesTagCloud";
import HeygenFAQ from "@/components/heygen-alternative/HeygenFAQ";
import HeygenCTA from "@/components/heygen-alternative/HeygenCTA";

const HeygenAlternative = () => {
  const breadcrumbItems = [
    { label: "Alternatives", path: "/alternatives" },
    { label: "Heygen Alternative" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main className="pt-28">
        <Breadcrumb items={breadcrumbItems} />
        <HeygenHeroSection />
        <HeygenTrustedCompanies />
        <WhatIsHeygen />
        <HeygenComparisonTable />
        <HeygenUseCases />
        <AlternativesTagCloud />
        <HeygenFAQ />
        <HeygenCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HeygenAlternative;
