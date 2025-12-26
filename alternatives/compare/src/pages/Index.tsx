import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TemplatesSection from "@/components/TemplatesSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import AgentCoreConcept from "@/components/AgentCoreConcept";
import VideoCreationComparison from "@/components/VideoCreationComparison";
import AIFeatures from "@/components/AIFeatures";
import AIToolsSection from "@/components/AIToolsSection";
import StatsSection from "@/components/StatsSection";
import CustomerSegments from "@/components/CustomerSegments";
import CaseStudy from "@/components/CaseStudy";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <HeroSection />
        <TemplatesSection />
        <TrustedCompanies />
        <AgentCoreConcept />
        <VideoCreationComparison />
        <AIFeatures />
        <AIToolsSection />
        <StatsSection />
        <CustomerSegments />
        <CaseStudy />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
