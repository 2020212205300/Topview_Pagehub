import { Helmet } from "react-helmet-async";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/heygen-alternative/Breadcrumb";
import AlternativesHeroSection from "@/components/alternatives/AlternativesHeroSection";
import AlternativesLeaderboard from "@/components/alternatives/AlternativesLeaderboard";
import MultiProductComparison from "@/components/alternatives/MultiProductComparison";
import AlternativesGrid from "@/components/alternatives/AlternativesGrid";

const Alternatives = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Alternatives", href: "/alternatives", current: true },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Video Generation Arena - Compare Top Platforms",
    description: "Compare Topview.ai with Heygen, Tavus, Synthesia and other AI video tools. See feature comparisons and find the best platform for your needs.",
    url: "https://www.topview.ai/alternatives",
  };

  return (
    <>
      <Helmet>
        <title>AI Video Generation Arena | Compare Heygen, Synthesia, Tavus</title>
        <meta
          name="description"
          content="AI Video Generation Arena - Compare top AI video platforms. See how Topview.ai stacks up against Heygen, Synthesia, Tavus in features, pricing, and performance."
        />
        <link rel="canonical" href="https://www.topview.ai/alternatives" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <PromoBanner />
        <Header />
        
        <main>
          <div className="container mx-auto px-4 pt-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          
          <AlternativesHeroSection />
          <AlternativesLeaderboard />
          <MultiProductComparison />
          <AlternativesGrid />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Alternatives;
