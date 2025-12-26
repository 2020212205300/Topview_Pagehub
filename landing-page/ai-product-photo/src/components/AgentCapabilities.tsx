import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { 
  Megaphone, Store, Gem, Briefcase, Ruler, Rocket, Target, CheckCircle2, ShoppingBag
} from "lucide-react";

const professionalGroups = [
  { 
    name: "Ecommerce Sellers", 
    icon: Store, 
    color: "purple.400",
    details: [
      "High-converting AI photos",
      "No studio needed",
      "Shopify & Amazon ready"
    ]
  },
  { 
    name: "Marketers", 
    icon: Megaphone, 
    color: "orange.400",
    details: [
      "Scale visual testing",
      "More background variations",
      "Higher CTR"
    ]
  },
  { 
    name: "DTC Brands", 
    icon: Gem, 
    color: "green.400",
    details: [
      "Consistent branding",
      "Seasonal assets in seconds",
      "Lower production costs"
    ]
  },
  { 
    name: "Agencies", 
    icon: Briefcase, 
    color: "blue.400",
    details: [
      "Scale client output",
      "Faster delivery cycles",
      "AI-powered services"
    ]
  },
  { 
    name: "Dropshippers", 
    icon: Rocket, 
    color: "yellow.400",
    details: [
      "Pro supplier shots",
      "Instant differentiation",
      "Premium product launches"
    ]
  },
  { 
    name: "Social Media Managers", 
    icon: Target, 
    color: "cyan.400",
    details: [
      "Aesthetic feed content",
      "Higher engagement",
      "Fresh daily visuals"
    ]
  },
  { 
    name: "Amazon Sellers", 
    icon: ShoppingBag, 
    color: "brand.500",
    details: [
      "Marketplace compliant",
      "A+ content ready",
      "Search dominant visuals"
    ]
  },
  { 
    name: "Designers", 
    icon: Ruler, 
    color: "pink.400",
    details: [
      "Auto background removal",
      "Creative focus",
      "Rapid prototyping"
    ]
  }
];

const AgentCapabilities = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Box>
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" color="white" mb={6}>
              Built for Professionals{" "}
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                Who Need Results
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
              Topview is trusted by teams and creators who need speed, scale, and performance.
            </Text>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {professionalGroups.map((group, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: group.color,
                bg: "whiteAlpha.100",
              }}
              position="relative"
              height="full"
            >
              <VStack align="stretch" spacing={6}>
                <HStack spacing={4}>
                  <Flex 
                    w="12" 
                    h="12" 
                    bg={`${group.color}15`} 
                    borderRadius="xl" 
                    align="center" 
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={group.icon} w={6} h={6} color={group.color} />
                  </Flex>
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {group.name}
                  </Heading>
                </HStack>

                <VStack align="start" spacing={3} pt={4} borderTop="1px solid" borderColor="whiteAlpha.100">
                  {group.details.map((detail, idx) => (
                    <Flex key={idx} align="start" gap={3}>
                      <Icon as={CheckCircle2} color={group.color} w={4} h={4} mt={1} />
                      <Text color="gray.400" fontSize="sm" fontWeight="medium">
                        {detail}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentCapabilities;
