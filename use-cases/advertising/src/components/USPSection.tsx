import { Box, Container, Heading, Text, VStack, Button, Flex, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MotionBox = motion(Box);

const usps = [
  {
    title: "10M+ data-validated ad library",
    description: "Stop guessing what works. Access a massive database of high-performing ads across every niche to find your next winning structure.",
    cta: "Explore Ad Library",
    href: "https://agent.topview.ai/",
    imageType: "grid"
  },
  {
    title: "AI Agent that recreates winning ads",
    description: "Our AI doesn't just edit; it understands. It breaks down winning ad hooks and pacing, then recreates them specifically for your product.",
    cta: "Try AI Agent",
    href: "https://agent.topview.ai/",
    imageType: "split"
  },
  {
    title: "Multi-variant videos for A/B testing",
    description: "Scale your creative testing instantly. Generate dozens of variations for hooks, CTAs, and visual styles to find the absolute best ROI.",
    cta: "Start A/B Testing",
    href: "https://agent.topview.ai/",
    imageType: "variants"
  },
  {
    title: "Track competitor advertising videos",
    description: "Stay ahead of the market. Monitor your competitors' most successful creative strategies and adapt them for your own brand in real-time.",
    cta: "Monitor Competitors",
    href: "https://agent.topview.ai/",
    imageType: "monitor"
  }
];

const USPSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="transparent">
      <Container maxW="1400px">
        <VStack spacing={20} align="stretch">
          <VStack spacing={4} align="center" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "72px" }}
              fontWeight="800"
              color="white"
              lineHeight="1"
              letterSpacing="-0.04em"
            >
              Why advertising teams <br /> choose{" "}
              <Text as="span" color="#4e40f3">
                Topview
              </Text>
            </Heading>
          </VStack>

          <VStack spacing={32}>
            {usps.map((usp, index) => (
              <Flex
                key={index}
                direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                align="center"
                justify="space-between"
                gap={{ base: 12, md: 24 }}
                w="100%"
              >
                {/* Text Content */}
                <VStack align="flex-start" spacing={8} flex="1" maxW={{ md: "500px" }}>
                  <Heading
                    as="h3"
                    fontSize={{ base: "3xl", md: "48px" }}
                    color="white"
                    fontWeight="800"
                    lineHeight="1.1"
                    letterSpacing="-0.02em"
                  >
                    {usp.title}
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "20px" }} color="whiteAlpha.700" lineHeight="1.6">
                    {usp.description}
                  </Text>
                  <Button
                    as={Link}
                    href={usp.href || "https://www.topview.ai/"}
                    isExternal
                    size="lg"
                    height="60px"
                    px="10"
                    bg="white"
                    color="black"
                    borderRadius="full"
                    fontSize="md"
                    fontWeight="700"
                    _hover={{ bg: "whiteAlpha.900", transform: "translateY(-2px)", textDecoration: "none" }}
                    transition="all 0.2s"
                  >
                    {usp.cta}
                  </Button>
                </VStack>

                {/* Visual Content (Image Placeholder) */}
                <Box flex="1.2" w="100%" position="relative">
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      borderRadius="40px"
                      overflow="hidden"
                      bg="whiteAlpha.50"
                      aspectRatio={4/3}
                      position="relative"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                    >
                      {/* Visual Mockup according to imageType */}
                      <Flex
                        position="absolute"
                        inset="0"
                        align="center"
                        justify="center"
                        bgGradient="linear(to-br, whiteAlpha.100, transparent)"
                      >
                        {usp.imageType === "grid" && (
                          <SimpleGrid columns={3} spacing={4} p={8} w="100%">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <Box key={i} aspectRatio={9/16} bg="whiteAlpha.100" borderRadius="12px" position="relative">
                                <Icon as={Play} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="whiteAlpha.300" />
                              </Box>
                            ))}
                          </SimpleGrid>
                        )}
                        {usp.imageType === "split" && (
                          <Flex gap={4} p={8} w="100%" h="100%" align="center">
                            <Box flex="1" h="80%" bg="whiteAlpha.100" borderRadius="20px" />
                            <Box flex="1" h="100%" bg="#4e40f322" borderRadius="20px" border="2px solid" borderColor="#4e40f3" />
                          </Flex>
                        )}
                        {usp.imageType === "variants" && (
                          <VStack spacing={4} w="100%" p={8}>
                            <Box w="100%" h="40px" bg="whiteAlpha.100" borderRadius="full" />
                            <Box w="80%" h="40px" bg="whiteAlpha.100" borderRadius="full" alignSelf="flex-start" />
                            <Box w="90%" h="40px" bg="whiteAlpha.100" borderRadius="full" alignSelf="flex-end" />
                          </VStack>
                        )}
                        {usp.imageType === "monitor" && (
                          <Box w="80%" h="80%" bg="whiteAlpha.100" borderRadius="30px" position="relative">
                            <Box position="absolute" top="-10%" right="-10%" w="40%" h="40%" bg="#4e40f3" borderRadius="20px" opacity="0.2" filter="blur(40px)" />
                          </Box>
                        )}
                      </Flex>
                    </Box>
                  </MotionBox>
                </Box>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default USPSection;
