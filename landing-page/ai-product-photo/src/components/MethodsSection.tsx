import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Flex } from "@chakra-ui/react";

const templates = [
  { 
    title: "Amazon main images & A+ visuals",
    description: "High-impact layouts designed to dominate search results and detail pages.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop"
  },
  { 
    title: "Shopify & DTC PDP layouts",
    description: "Clean, conversion-focused visual structures for modern e-commerce stores.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop"
  },
  { 
    title: "Instagram & TikTok ad creatives",
    description: "Scroll-stopping assets optimized for mobile-first social advertising.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2548&auto=format&fit=crop"
  },
  { 
    title: "Social commerce & UGC formats",
    description: "Authentic, high-engagement formats for social selling and community growth.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2574&auto=format&fit=crop"
  }
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" textAlign="center" mb={16}>
          <Box maxW="4xl">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
              5,000+ <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">High-Converting Ecommerce</Text> Templates
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="3xl" mx="auto" fontWeight="medium">
              Choose from CTR-optimized templates built for major platforms:
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

