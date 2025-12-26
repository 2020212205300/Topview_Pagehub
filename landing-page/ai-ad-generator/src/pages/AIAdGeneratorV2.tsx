import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import AdHeroSectionV2 from "@/components/ai-ad-generator-v2/AdHeroSectionV2";
import VideoComparisonSection from "@/components/ai-ad-generator-v2/VideoComparisonSection";
import TrendingAdsSection from "@/components/ai-ad-generator-v2/TrendingAdsSection";
import WhatIsSection from "@/components/ai-ad-generator-v2/WhatIsSection";
import WhyChooseSection from "@/components/ai-ad-generator-v2/WhyChooseSection";
import AdTypesSection from "@/components/ai-ad-generator-v2/AdTypesSection";
import AdUseCases from "@/components/ai-ad-generator-v2/AdUseCases";
import AdSteps from "@/components/ai-ad-generator/AdSteps";
import AdToolsSection from "@/components/ai-ad-generator/AdToolsSection";
import AdFAQV2 from "@/components/ai-ad-generator-v2/AdFAQV2";

const AIAdGeneratorV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main className="pt-26">
        <AdHeroSectionV2 />
        <VideoComparisonSection />
        <TrendingAdsSection />
        <WhatIsSection />
        <WhyChooseSection />
        <AdTypesSection />
        <AdUseCases />
        <AdSteps />
        <AdToolsSection />
        <AdFAQV2 />
      </main>
      <Footer />
    </div>
  );
};

export default AIAdGeneratorV2;
