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
      "Generate high-converting AI product photos",
      "No studio or photoshoot required",
      "Perfect for Shopify and Amazon"
    ]
  },
  { 
    name: "Marketers", 
    icon: Megaphone, 
    color: "orange.400",
    details: [
      "Scale product visual testing across channels",
      "Test more background variations",
      "Increase CTR with better product shots"
    ]
  },
  { 
    name: "DTC Brands", 
    icon: Gem, 
    color: "green.400",
    details: [
      "Maintain brand consistency with AI photography",
      "Create seasonal lifestyle assets in seconds",
      "Reduce content production costs"
    ]
  },
  { 
    name: "Agencies", 
    icon: Briefcase, 
    color: "blue.400",
    details: [
      "Scale product photoshoot output for clients",
      "Shorten project delivery cycles",
      "Offer AI-powered visual services"
    ]
  },
  { 
    name: "Dropshippers", 
    icon: Rocket, 
    color: "yellow.400",
    details: [
      "Transform supplier photos into professional shots",
      "Stand out from other sellers instantly",
      "Launch products with premium visuals"
    ]
  },
  { 
    name: "Social Media Managers", 
    icon: Target, 
    color: "cyan.400",
    details: [
      "Create aesthetic product content for feeds",
      "Boost engagement with human-centric AI models",
      "Maintain active presence with fresh visuals"
    ]
  },
  { 
    name: "Amazon Sellers", 
    icon: ShoppingBag, 
    color: "brand.500",
    details: [
      "Meet strict marketplace visual requirements",
      "Generate A+ content and main images",
      "Dominate search results with better visuals"
    ]
  },
  { 
    name: "Designers", 
    icon: Ruler, 
    color: "pink.400",
    details: [
      "Automate tedious background removals",
      "Focus on creative composition",
      "Deliver faster prototypes for clients"
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
