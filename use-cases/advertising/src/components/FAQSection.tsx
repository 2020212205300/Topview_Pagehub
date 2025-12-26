import { Box, Container, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, VStack, Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is an AI Video Agent and how does it differ from traditional video generators?",
    answer: "Unlike basic template-based video generators, an AI Video Agent understands your creative intent. It autonomously handles the entire production workflow — from scripting and scene generation to advanced editing. It works as an intelligent creative partner that adapts to your brand, rather than just filling in a template.",
  },
  {
    question: "How can Topview's AI reduce video production costs by 80-90%?",
    answer: "Topview eliminates the need for expensive studios, professional actors, and manual editing teams. By automating repetitive tasks and using AI-generated avatars and environments, you can produce high-quality video ads for as low as $0.5 per video, compared to thousands of dollars in traditional production.",
  },
  {
    question: "What is the Product Avatar feature and how does it benefit E-commerce sellers?",
    answer: "The Product Avatar feature allows you to generate videos of avatars interacting with your specific products. You can precisely control the product's size and position while AI creates realistic human-product interactions, making it ideal for high-converting social media ads and product showcases.",
  },
  {
    question: "Are the videos optimized for platforms like TikTok, Meta, and Google Ads?",
    answer: "Yes. Topview's Native Exports feature automatically adapts every video to platform-specific requirements, including safe areas, aspect ratios (9:16, 1:1, 16:9), captions, and CTA formats for TikTok, Reels, YouTube Shorts, and LinkedIn Ads.",
  },
  {
    question: "How fast can I create a video ad using the AI Video Agent?",
    answer: "You can go from a product URL or raw idea to a polished, platform-ready video ad in just minutes. This 10x faster production cycle allows marketing teams to test dozens of creative variants in the time it used to take to brief a single video.",
  },
  {
    question: "Who should use Topview's AI video tools?",
    answer: "Topview is built for Growth Marketers, E-commerce sellers, DTC brands, Agencies, and Social Media Managers. Whether you need to scale volume for dropshipping or maintain a consistent quality for a global brand, our AI Agent scales with your needs.",
  },
  {
    question: "Do I need professional editing skills to use Topview?",
    answer: "Zero editing experience is required. The platform uses natural language processing and intuitive AI controls, meaning anyone can generate professional-grade content just by describing their vision or providing a reference video.",
  },
  {
    question: "Can I clone a specific video style using AI?",
    answer: "Absolutely. You can provide any reference video, and our AI Agent analyzes the shots, pacing, and storytelling style to recreate a similar concept tailored to your specific product and brand message.",
  },
  {
    question: "Can Topview automatically resize ads for different platforms (e.g., 16:9 to 9:16)?",
    answer: "Yes. Topview's AI includes smart auto-reframing technology. You can upload a single asset and instantly generate a 16:9 version for YouTube, a 9:16 version for TikTok, and a 1:1 version for Instagram, ensuring the main subject always stays centered.",
  },
  {
    question: "Does Topview support creating unskippable Bumper Ads (6 seconds)?",
    answer: "Absolutely. Our AI Video Agent can condense long-form footage or product highlights into punchy, 6-second narratives designed specifically for YouTube's unskippable Bumper Ad format, focusing on a single powerful brand message.",
  }
];

const FAQSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="transparent">
      <Container maxW="1000px">
        <VStack spacing={16} align="stretch">
          {/* Top Section: Title and Description */}
          <VStack spacing={6} textAlign="center" mx="auto" maxW="3xl">
            <Heading
              as="h2"
              fontSize={{ base: "5xl", md: "85px" }}
              fontWeight="800"
              color="white"
              lineHeight="1.1"
              letterSpacing="-0.04em"
            >
              <Text as="span" bgGradient="linear(to-r, red.400, purple.400, blue.400, teal.300)" bgClip="text">
                AI Video Agent
              </Text>{" "}
              FAQ
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.600">
              Everything you need to know about scaling your advertising with AI video creation.
            </Text>
          </VStack>

          {/* Bottom Section: Accordion */}
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb={4}
              >
                {({ isExpanded }) => (
                  <Box
                    bg="whiteAlpha.50"
                    borderRadius="32px"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    overflow="hidden"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ borderColor: "whiteAlpha.300", bg: "whiteAlpha.100" }}
                  >
                    <h3>
                      <AccordionButton 
                        py={6} 
                        px={10} 
                        _hover={{ bg: "transparent" }}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box 
                          flex="1" 
                          textAlign="left" 
                          fontWeight="700" 
                          color="white" 
                          fontSize={{ base: "md", md: "lg" }}
                          mr={4}
                        >
                          {faq.question}
                        </Box>
                        <Flex
                          w={8}
                          h={8}
                          borderRadius="full"
                          bg="whiteAlpha.100"
                          align="center"
                          justify="center"
                          transition="transform 0.3s"
                          transform={isExpanded ? "rotate(45deg)" : "none"}
                        >
                          <Plus size={20} color="white" />
                        </Flex>
                      </AccordionButton>
                    </h3>
                    <AccordionPanel 
                      pb={8} 
                      px={10} 
                      color="whiteAlpha.600" 
                      fontSize="md" 
                      lineHeight="1.6"
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
};

export default FAQSection;
