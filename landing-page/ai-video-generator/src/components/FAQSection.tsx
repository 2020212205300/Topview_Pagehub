import { Box, Container, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const faqs = [
  {
    question: "Which AI models does Topview support?",
    answer: "Topview integrates the industry's leading video and image generation models, including Sora 2, Veo 3, Kling O1, Vidu Q2, and Seedream 4.5. We ensure you always have access to the latest AI technology in one single tool.",
  },
  {
    question: "What makes Topview's AI Video Agent different?",
    answer: "Unlike simple generators, our AI Video Agent analyzes over 10 million viral videos to understand winning structures. It handles the entire creative process—from brief and storyboard to the final render—thinking like a top content creator.",
  },
  {
    question: "How does the One-Click Workflow work?",
    answer: "It's a streamlined 3-step process: 1. The Agent generates a creative brief based on your product. 2. It builds a visual storyboard. 3. It produces a ready-to-publish video. All this happens automatically with just one click.",
  },
  {
    question: "Can I use Topview for TikTok and Instagram Ads?",
    answer: "Yes, Topview is specifically optimized for social media. It produces high-converting 9:16 vertical videos with native-style captions, hooks, and pacing that are proven to perform on TikTok, Reels, and Shorts.",
  },
  {
    question: "Do I need professional editing skills?",
    answer: "Not at all. Topview is designed for everyone. Our AI Agent handles all the complex editing, scripting, and visual composition. If you can paste a link or type a description, you can create a professional video.",
  },
  {
    question: "What inputs can I use to start a project?",
    answer: "You can start with a simple text prompt, upload product images, or just paste a product URL from platforms like Amazon or Shopify. Our Agent will extract the key features and benefits to build your video.",
  },
];

const FAQSection = () => {
  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.md">
        <Heading as="h2" textAlign="center" size="xl" fontWeight="bold" mb="12">
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Video</Text> FAQ
        </Heading>

        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              bg="whiteAlpha.50"
              mb="4"
              overflow="hidden"
            >
              <h2>
                <AccordionButton py="6" _hover={{ bg: "whiteAlpha.100" }}>
                  <Box flex="1" textAlign="left" fontWeight="medium" color="white">
                    {faq.question}
                  </Box>
                  <AccordionIcon color="gray.400" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb="6" color="gray.400">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQSection;
