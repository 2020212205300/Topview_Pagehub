import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import AdHeroSection from "@/components/ai-ad-generator/AdHeroSection";
import SEOContentBlock from "@/components/ai-ad-generator/SEOContentBlock";
import VideoShowcase from "@/components/ai-ad-generator/VideoShowcase";
import AdFeatures from "@/components/ai-ad-generator/AdFeatures";
import EcommerceValue from "@/components/ai-ad-generator/EcommerceValue";
import TrustedCompanies from "@/components/TrustedCompanies";
import AdSteps from "@/components/ai-ad-generator/AdSteps";
import AdToolsSection from "@/components/ai-ad-generator/AdToolsSection";
import AdFAQ from "@/components/ai-ad-generator/AdFAQ";
import Footer from "@/components/Footer";

const AIAdGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <AdHeroSection />
        
        {/* SEO Block 1 */}
        <SEOContentBlock
          title="The AI Ad Generator That Turns Products into Viral Video Ads"
          description="TopView's AI ad generator brings video production into a new era of speed and quality. Whether from a simple product photo or a direct URL link, all you need to do is click, and our AI delivers a complete, ready-to-launch ad in minutes. Want to create high-quality viral AI ads effortlessly? TopView is your best choice today."
          ctaText="Try AI Ad Generator Free"
          imagePosition="right"
        />
        
        {/* SEO Block 2 */}
        <SEOContentBlock
          title="Stop Wasting Hours on Shooting and Editing"
          description="Say goodbye to the traditional, expensive, and slow video production process. TopView AI video ads generator dramatically boosts your workflow by automating scriptwriting, clip selection, and editing. No professional skills or expensive crews needed—just pure performance."
          ctaText="Try AI Video Ads Generator Free"
          imagePosition="left"
        />
        
        <VideoShowcase />
        
        {/* SEO Block 3 */}
        <SEOContentBlock
          title="Create Video Ads the Algorithms Actually Love"
          description="A great ad isn't just about HD quality. It's about the hook, the captions, and the beat—details that stop the scroll. TopView AI Ad Generator is trained on millions of viral TikTok hits, mastering shot composition, lighting, and pacing. We ensure your ads grab attention instantly and get favored by social media algorithms."
          ctaText="Try AI Product Ad Generator Free"
          imagePosition="right"
        />
        
        {/* SEO Block 4 */}
        <SEOContentBlock
          title="Recreate Winning Ads Directly from Our Library"
          description="The seamless integration of TopView's AI Ad Generator and Ad Library is a game-changer. Cloning a proven viral hit is far easier than brainstorming scripts from scratch. Access our massive library of high-performing ads with detailed data insights. No ideas? Just pick a template you like and One-Click Recreate it with your product."
          ctaText="Browse Ad Library"
          imagePosition="left"
        />
        
        <AdFeatures />
        <EcommerceValue />
        <TrustedCompanies title="The AI Ad Generator Trusted by Top-Tier Brands" />
        <AdSteps />
        <AdToolsSection />
        <AdFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AIAdGenerator;
