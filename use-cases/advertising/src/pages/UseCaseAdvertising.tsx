import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import AdvertisingHero from "@/components/use-cases/advertising/AdvertisingHero";
import VideoAdTypesMatrix from "@/components/use-cases/advertising/VideoAdTypesMatrix";
import AdPlatformsGrid from "@/components/use-cases/advertising/AdPlatformsGrid";
import AdsByIndustryGrid from "@/components/use-cases/advertising/AdsByIndustryGrid";
import AdSpecsTable from "@/components/use-cases/advertising/AdSpecsTable";
import RelatedPagesHub from "@/components/use-cases/advertising/RelatedPagesHub";
import TestimonialsSection from "@/components/use-cases/advertising/TestimonialsSection";
import AdvertisingFAQ from "@/components/use-cases/advertising/AdvertisingFAQ";
import AdvertisingCTA from "@/components/use-cases/advertising/AdvertisingCTA";

const UseCaseAdvertising = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Ad Generator for YouTube, TikTok, Meta & More | Topview</title>
        <meta
          name="description"
          content="Create high-converting video ads for YouTube, TikTok, Instagram, Meta and more. AI-powered video ad generator for e-commerce, SaaS, travel and all industries."
        />
        <meta name="keywords" content="AI video ads, video ad generator, YouTube ads, TikTok ads, Meta ads, Instagram ads, e-commerce video ads, AI advertising" />
        <link rel="canonical" href="https://www.topview.ai/use-cases/advertising" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <PromoBanner />
        <Header />
        <main>
          <AdvertisingHero />
          <VideoAdTypesMatrix />
          <AdPlatformsGrid />
          <AdsByIndustryGrid />
          <AdSpecsTable />
          <RelatedPagesHub />
          <TestimonialsSection />
          <AdvertisingFAQ />
          <AdvertisingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UseCaseAdvertising;
