import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import AdInventorySection from "@/components/AdInventorySection";
import UseCasesSection from "@/components/UseCasesSection";
import TechCapabilities from "@/components/TechCapabilities";
import SocialProof from "@/components/SocialProof";
import HowToSection from "@/components/HowToSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <Box minH="100vh" bg="#0A0A0A" position="relative">
      {/* Background Gradient for "Mix" effect */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="radial(circle at 50% 0%, #1A1A1A 0%, #0A0A0A 100%)"
        zIndex="0"
        pointerEvents="none"
      />
      <StructuredData />
      <Box as="main" position="relative" zIndex="1">
        <HeroSection />
        <USPSection />
        
        <Box pt={{ base: 20, md: 32 }} pb={0}>
          <Container maxW="1400px">
            <VStack spacing={4} textAlign="center">
              <Heading 
                as="h2" 
                fontSize={{ base: "4xl", md: "64px" }} 
                color="white" 
                fontWeight="800"
                letterSpacing="-0.04em"
              >
                Real Results
              </Heading>
              <Text color="whiteAlpha.500" fontSize="lg">
                *Sources: Meta, TikTok, YouTube, Internal Benchmarks
              </Text>
            </VStack>
          </Container>
        </Box>

        <SocialProof 
          testimonial="Topview's AI Video Agent helped iLive by SHOPNOW grow our AI video production services revenue by 80%, while reducing labor and costs by 50%. It's not just a tool—it's a game-changer for scaling content and driving results."
          authorName="Long Ma"
          authorTitle="CEO, Shopnow Technology JSC"
          authorAvatar="/ilive-logo.png"
          metrics={[
            { value: "5x", label: "lower production costs" },
            { value: "30%", label: "sales increase" },
            { value: "70%", label: "reduction in time spent" }
          ]}
          caseStudyUrl="https://www.topview.ai/case-studies/shopnow-technology-case-study-social-commerce"
          pt={{ base: 10, md: 16 }}
          pb={{ base: 10, md: 8 }}
        />
        <SocialProof 
          testimonial="Topview made video production faster, easier, and far more affordable for my business."
          authorName="Alin"
          authorTitle="Founder & Marketing Specialist, Văzut Online"
          authorAvatar="/Vazut-logo.png"
          metrics={[
            { value: "60%", label: "lower production costs" },
            { value: "2x", label: "increase in client engagement" },
            { value: "40%", label: "growth in sales conversions" }
          ]}
          isReversed={true}
          caseStudyUrl="https://www.topview.ai/case-studies/vazut-online-case-study-ai-video-scaling"
          pt={{ base: 10, md: 8 }}
        />
        <AdInventorySection />
        <UseCasesSection />
        <TechCapabilities />
        <HowToSection />
        <FAQSection />
        <FinalCTA />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
