import { Box, Container, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const faqs = [
  {
    question: "What is the best format for Twitter videos?",
    answer: "Twitter supports MP4 and MOV formats. For optimal playback and quality, MP4 with H264 codec and AAC audio is generally recommended. Our platform ensures your exported videos meet these specifications for seamless uploads."
  },
  {
    question: "Can I add subtitles or captions to my Twitter videos?",
    answer: "Yes, absolutely! Our video generator allows you to easily add customizable subtitles and captions to your videos. This is crucial for accessibility and ensures your content is understood even when played without sound, enhancing viewer engagement."
  },
  {
    question: "How can I make my Twitter videos more engaging?",
    answer: "To make your Twitter videos stand out, use compelling visuals, clear audio, and concise messaging. Incorporating AI avatars, dynamic transitions, and strong calls to action can significantly boost engagement. Keep them short and to the point."
  },
  {
    question: "Does this tool support AI avatars for Twitter content?",
    answer: "Yes, Topview's AI technology integrates advanced AI avatars that can present your content. These avatars offer a professional and engaging way to deliver messages, perfect for marketing, explainers, or product updates on Twitter."
  },
  {
    question: "Is it possible to automate Twitter video creation for campaigns?",
    answer: "Our platform is designed for efficiency, allowing you to create multiple short-form videos quickly. While full automation depends on your specific workflow, you can save templates and assets to streamline the creation of various AI Ads Videos for Twitter campaigns."
  },
  {
    question: "What kind of short-form video content can I create?",
    answer: "You can create a wide range of short-form video content perfect for Twitter, including product highlights, quick tutorials, announcements, behind-the-scenes glimpses, and engaging promotions. Leveraging Topview's features, like UGC-style content, keeps your feed fresh."
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
          Frequently Asked Questions About <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Twitter Video Tool</Text>
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
