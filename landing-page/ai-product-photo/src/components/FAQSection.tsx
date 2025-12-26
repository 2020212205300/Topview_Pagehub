import { Box, Container, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const faqs = [
  {
    question: "What is AI product photo generation?",
    answer: "AI product photo generation uses artificial intelligence to create realistic and visually appealing images of products. It can involve generating new backgrounds, adding props, or creating entirely new scenes around your product photos without traditional photography."
  },
  {
    question: "How can AI enhance my product marketing?",
    answer: "AI significantly enhances product marketing by allowing brands to produce a wide variety of compelling visuals quickly and affordably. You can create diverse lifestyle shots, seasonal campaigns, and A/B test different image styles to see what resonates best with your audience."
  },
  {
    question: "Do I need design skills to use the AI photo generator?",
    answer: "No, you do not need advanced design skills. The platform is designed with user-friendliness in mind, featuring intuitive interfaces and AI-powered suggestions. You can achieve professional-quality results with minimal effort, even as a beginner."
  },
  {
    question: "Can I use my own product images for AI backgrounds?",
    answer: "Yes, absolutely. You can upload your existing product images, and the AI will help you remove backgrounds, generate new scenes, and integrate your product seamlessly into various AI-created environments. This makes your existing assets even more versatile with Topview."
  },
  {
    question: "How quickly can I generate AI product photos?",
    answer: "The speed of generation depends on the complexity of the desired image and your internet connection. However, most AI product photos can be generated and refined within minutes. This rapid turnaround is a major advantage for fast-paced marketing needs."
  },
  {
    question: "What are the common uses for AI-generated product photos?",
    answer: "AI-generated product photos are ideal for e-commerce listings (Amazon, Shopify), social media marketing (Instagram, Pinterest, TikTok), digital ads, website banners, and various promotional materials. Using Topview for this allows for consistent and high-quality visual branding."
  }
];

const FAQSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.md">
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          mb={12}
          color="white"
          fontWeight="black"
          lineHeight="1.2"
        >
          Frequently Asked Questions About <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Product Photos</Text>
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
              <h3>
                <AccordionButton py="6" _hover={{ bg: "whiteAlpha.100" }}>
                  <Box flex="1" textAlign="left" fontWeight="medium" color="white">
                    {faq.question}
                  </Box>
                  <AccordionIcon color="gray.400" />
                </AccordionButton>
              </h3>
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
