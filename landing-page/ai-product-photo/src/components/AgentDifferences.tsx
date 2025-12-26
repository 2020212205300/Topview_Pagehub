import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Image, Icon } from "@chakra-ui/react";
import { CheckCircle2, ShoppingBag, Store, Tag, Globe } from "lucide-react";

const platforms = [
  {
    name: "Amazon",
    description: "Pure white backgrounds and lifestyle shots that meet Amazon's strict visual standards.",
    iconType: "image",
    icon: "/amazon.svg",
    color: "#FF9900",
    bg: "rgba(255, 153, 0, 0.05)"
  },
  {
    name: "Shopify",
    description: "Branded product imagery designed to boost conversion rates on your online store.",
    iconType: "image",
    icon: "/shopify.svg",
    color: "#95BF47",
    bg: "rgba(149, 191, 71, 0.05)"
  },
  {
    name: "TikTok Shop",
    description: "Eye-catching visuals optimized for TikTok's social-first product promotion.",
    iconType: "image",
    icon: "/tiktok.svg",
    color: "#00f2ea",
    bg: "rgba(0, 242, 234, 0.05)"
  },
  {
    name: "Instagram",
    description: "Aesthetic, lifestyle-oriented photos perfect for Instagram Shopping and feed posts.",
    iconType: "image",
    icon: "/Instagram.png",
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.05)"
  },
  {
    name: "eBay & Etsy",
    description: "High-quality, authentic product shots that stand out in competitive marketplaces.",
    iconType: "image",
    icon: "/Etsy.svg",
    color: "#F1641E",
    bg: "rgba(241, 100, 30, 0.05)"
  },
  {
    name: "Global Marketplaces",
    description: "Optimized visuals for Walmart, Target, and other global e-commerce platforms.",
    iconType: "lucide",
    icon: Globe,
    color: "#4ECDC4",
    bg: "rgba(78, 205, 196, 0.05)"
  }
];

const PlatformOptimization = () => {
  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl" position="relative" zIndex="1">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Box maxW="3xl" mx="auto">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="4" color="white">
              AI Product Photos <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                for Every Platform
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={8}>
              Topview automatically adapts your product photos to match the specific requirements and visual styles of global marketplaces.
            </Text>
            
            <Badge 
              colorScheme="brand" 
              variant="subtle" 
              px={4} 
              py={2} 
              borderRadius="full" 
              fontSize="sm"
              bg="whiteAlpha.100"
              color="brand.400"
              border="1px solid"
              borderColor="brand.500"
            >
              Supported platforms
            </Badge>
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="6xl" mx="auto" mb={16}>
          {platforms.map((platform) => (
            <Box
              key={platform.name}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={8}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: platform.bg,
                opacity: 0.5,
                pointerEvents: "none"
              }}
              _hover={{
                borderColor: platform.color,
                transform: "translateY(-4px)",
                transition: "all 0.3s ease"
              }}
            >
              <VStack align="center" spacing={6} position="relative" zIndex="1" h="full" textAlign="center">
                {/* Icon Box */}
                <Box 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={2}
                  w={16}
                  h={16}
                >
                  {platform.iconType === "image" ? (
                    <Image 
                      src={platform.icon as string} 
                      alt={platform.name} 
                      w="full" 
                      h="full" 
                      objectFit="contain"
                      filter={`drop-shadow(0 0 10px ${platform.color}44)`}
                    />
                  ) : (
                    <Icon 
                      as={platform.icon as any} 
                      w="full" 
                      h="full" 
                      color={platform.color}
                      filter={`drop-shadow(0 0 10px ${platform.color}44)`}
                    />
                  )}
                </Box>

                <VStack align="center" spacing={3} flex="1">
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {platform.name}
                  </Heading>
                  <Text color="gray.500" fontSize="md" lineHeight="tall">
                    {platform.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <HStack 
          justify="center" 
          spacing={3} 
          bg="whiteAlpha.50" 
          p={6} 
          borderRadius="2xl" 
          maxW="2xl" 
          mx="auto"
          border="1px dashed"
          borderColor="whiteAlpha.200"
        >
          <CheckCircle2 size={20} color="var(--chakra-colors-brand-500)" />
          <Text color="gray.400" fontSize="md" fontWeight="medium" textAlign="center">
            Aspect ratio, resolution, and composition are automatically optimized for each marketplace.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default PlatformOptimization;
