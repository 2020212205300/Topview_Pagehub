import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { 
  Megaphone, Gem, Briefcase, Ruler, Rocket, Target, CheckCircle2
} from "lucide-react";

const professionalGroups = [
  { 
    name: "Content Creators", 
    icon: Rocket, 
    color: "purple.400",
    details: [
      "Viral-ready video clips",
      "Automated video editing",
      "Boost X engagement"
    ]
  },
  { 
    name: "Brand Managers", 
    icon: Gem, 
    color: "orange.400",
    details: [
      "Consistent video branding",
      "Professional product launches",
      "Humanize your brand"
    ]
  },
  { 
    name: "News Aggregators", 
    icon: Megaphone, 
    color: "green.400",
    details: [
      "Instant news video clips",
      "Automated headline generation",
      "Stop-the-scroll visuals"
    ]
  },
  { 
    name: "Digital Marketers", 
    icon: Briefcase, 
    color: "blue.400",
    details: [
      "High-performing video ads",
      "A/B test video variations",
      "Scale X ad creatives"
    ]
  },
  { 
    name: "Influencers", 
    icon: Target, 
    color: "yellow.400",
    details: [
      "Personalized AI narrators",
      "Turn threads into videos",
      "Deepen audience trust"
    ]
  },
  { 
    name: "Growth Hackers", 
    icon: Rocket, 
    color: "cyan.400",
    details: [
      "Scale video production",
      "Automated content repurposing",
      "Faster viral testing"
    ]
  },
  { 
    name: "Social Media Agencies", 
    icon: Briefcase, 
    color: "brand.500",
    details: [
      "Scale client video output",
      "AI-powered video services",
      "Faster delivery cycles"
    ]
  },
  { 
    name: "Video Editors", 
    icon: Ruler, 
    color: "pink.400",
    details: [
      "AI-assisted storytelling",
      "Rapid prototyping",
      "Focus on creative vision"
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
              Built for Creators{" "}
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                Who Need Impact
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
              Topview is trusted by teams and creators who need speed, scale, and viral performance on X.
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
