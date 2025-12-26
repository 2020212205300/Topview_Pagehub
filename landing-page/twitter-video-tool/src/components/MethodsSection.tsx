import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Flex } from "@chakra-ui/react";

const templates = [
  { 
    title: "News & Breaking Updates",
    description: "Flashy headlines and news ticker styles that stop the scroll on the X timeline.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Thought Leadership Clips",
    description: "Clean, professional layouts for sharing deep insights and viral threads.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2574&auto=format&fit=crop"
  },
  { 
    title: "Product Showcase Clips",
    description: "High-impact video formats designed to launch products and highlight key features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  { 
    title: "Engagement & Reaction Videos",
    description: "Interactive layouts specifically designed to drive replies, retweets, and engagement.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
  }
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" textAlign="center" mb={16}>
          <Box maxW="4xl">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
              1,000+ <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Viral-Ready Twitter</Text> Templates
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="3xl" mx="auto" fontWeight="medium">
              Choose from high-engagement templates optimized for X's unique feed and audience:
            </Text>
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="full">
          {templates.map((item, index) => (
            <Box
              key={index}
              bg="#0d0d0d"
              borderRadius="3xl"
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.100"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-8px)", borderColor: "whiteAlpha.300" }}
            >
              {/* Image Container */}
              <Box aspectRatio="4/5" overflow="hidden" bg="whiteAlpha.50">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>

              {/* Text Content */}
              <VStack align="start" p={6} spacing={3} minH="160px">
                <Heading as="h3" size="sm" color="white" fontWeight="bold" textAlign="left" lineHeight="shorter">
                  {item.title}
                </Heading>
                <Text color="gray.500" fontSize="xs" textAlign="left" lineHeight="relaxed">
                  {item.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MethodsSection;

