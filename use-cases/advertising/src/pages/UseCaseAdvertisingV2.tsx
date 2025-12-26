import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import AdvertisingHeroV2 from "@/components/use-cases/advertising-v2/AdvertisingHeroV2";
import WhyVideoAdsSection from "@/components/use-cases/advertising-v2/WhyVideoAdsSection";
import VideoAdTypesContent from "@/components/use-cases/advertising-v2/VideoAdTypesContent";
import PlatformExplainerSection from "@/components/use-cases/advertising-v2/PlatformExplainerSection";
import IndustryUseCasesContent from "@/components/use-cases/advertising-v2/IndustryUseCasesContent";
import QuickSpecsSection from "@/components/use-cases/advertising-v2/QuickSpecsSection";
import AdvertisingFAQV2 from "@/components/use-cases/advertising-v2/AdvertisingFAQV2";
import AdvertisingCTA from "@/components/use-cases/advertising/AdvertisingCTA";

const UseCaseAdvertisingV2 = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Ads: Complete Guide to Video Advertising in 2024 | Topview</title>
        <meta
          name="description"
          content="Learn everything about video advertising: types of video ads, platform requirements, industry best practices. Create AI-powered video ads for YouTube, TikTok, Meta and more."
        />
        <meta name="keywords" content="video advertising, types of video ads, in-stream ads, out-stream ads, video ad formats, AI video ads, YouTube advertising, TikTok ads" />
        <link rel="canonical" href="https://www.topview.ai/use-cases/advertising-v2" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <PromoBanner />
        <Header />
        <main>
          <AdvertisingHeroV2 />
          <WhyVideoAdsSection />
          <VideoAdTypesContent />
          <PlatformExplainerSection />
          <IndustryUseCasesContent />
          <QuickSpecsSection />
          <AdvertisingFAQV2 />
          <AdvertisingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UseCaseAdvertisingV2;
