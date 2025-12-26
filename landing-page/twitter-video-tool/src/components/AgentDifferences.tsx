import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Image, Icon } from "@chakra-ui/react";
import { CheckCircle2, ShoppingBag, Store, Tag, Globe, Rocket, User, Zap } from "lucide-react";

const videoTypes = [
  {
    name: "Breaking News",
    description: "Convert text updates into urgent, eye-catching news clips that demand immediate attention.",
    iconType: "lucide",
    icon: Globe,
    color: "#FF6B6B",
    bg: "rgba(255, 107, 107, 0.05)"
  },
  {
    name: "Product Launch",
    description: "Showcase your latest features or products with sleek, professional video presentations.",
    iconType: "lucide",
    icon: Rocket,
    color: "#95BF47",
    bg: "rgba(149, 191, 71, 0.05)"
  },
  {
    name: "Viral Tutorials",
    description: "Transform complex tips into easy-to-digest video guides that users love to bookmark.",
    iconType: "image",
    icon: "/tiktok.svg",
    color: "#00f2ea",
    bg: "rgba(0, 242, 234, 0.05)"
  },
  {
    name: "Event Coverage",
    description: "Summarize conferences, webinars, or live events into high-energy highlight reels.",
    iconType: "image",
    icon: "/Instagram.png",
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.05)"
  },
  {
    name: "Personal Branding",
    description: "Humanize your X profile with AI-narrated videos that build trust and authority.",
    iconType: "lucide",
    icon: User,
    color: "#F1641E",
    bg: "rgba(241, 100, 30, 0.05)"
  },
  {
    name: "Marketing Ads",
    description: "Optimize your X ad spend with high-performing video creatives designed to convert.",
    iconType: "lucide",
    icon: Zap,
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
              Viral Twitter Videos <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                for Every Goal
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.500" mb={8}>
              Topview helps you create the perfect video content for different Twitter marketing goals and audience preferences.
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
              Supported video types
            </Badge>
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="6xl" mx="auto" mb={16}>
          {videoTypes.map((type) => (
            <Box
              key={type.name}
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
                height: "2px",
                background: `linear-gradient(to right, transparent, ${type.color}, transparent)`,
                opacity: 0,
                transition: "0.3s"
              }}
              _hover={{
                borderColor: "whiteAlpha.300",
                transform: "translateY(-5px)",
                _before: { opacity: 1 }
              }}
              transition="0.3s"
            >
              <VStack align="start" spacing={6}>
                <Box
                  p={4}
                  bg={type.bg}
                  borderRadius="2xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {type.iconType === "image" ? (
                    <Image src={type.icon as string} alt={type.name} w={6} h={6} />
                  ) : (
                    <Icon as={type.icon as any} color={type.color} w={6} h={6} />
                  )}
                </Box>
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {type.name}
                  </Heading>
                  <Text color="gray.500" fontSize="sm" lineHeight="relaxed">
                    {type.description}
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
            Aspect ratio, resolution, and composition are automatically optimized for the X timeline.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default PlatformOptimization;
