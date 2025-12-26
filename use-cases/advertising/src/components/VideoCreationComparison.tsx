import { Box, Container, Heading, Text, Grid, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import { X, Minus, Check, Clock, DollarSign, Zap, Brain, RefreshCw, Sparkles } from "lucide-react";

const comparisonData = [
  {
    feature: "Time to Create",
    icon: Clock,
    manual: "Days to Weeks",
    generator: "Hours",
    agent: "Minutes",
  },
  {
    feature: "Cost",
    icon: DollarSign,
    manual: "$1,000 - $10,000+",
    generator: "$50 - $500",
    agent: "From $0.5",
  },
  {
    feature: "Creative Control",
    icon: Sparkles,
    manual: "Full but complex",
    generator: "Template-based",
    agent: "Natural language",
  },
  {
    feature: "Learning Curve",
    icon: Brain,
    manual: "Steep (months)",
    generator: "Moderate (days)",
    agent: "None (just talk)",
  },
  {
    feature: "Iteration Speed",
    icon: RefreshCw,
    manual: "Slow & expensive",
    generator: "Manual tweaks",
    agent: "Instant refinement",
  },
  {
    feature: "Scalability",
    icon: Zap,
    manual: "Limited",
    generator: "Moderate",
    agent: "Unlimited",
  },
];

const VideoCreationComparison = () => {
  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Text color="brand.500" fontSize="sm" fontWeight="semibold" letterSpacing="wider" textTransform="uppercase" mb="4">
            The Evolution
          </Text>
          <Heading as="h2" size="2xl" fontWeight="bold" mb="4">
            Why <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Generate Video Ads</Text> with AI Agent
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
            See how video creation has evolved from manual production to AI-powered agents.
          </Text>
        </Box>

        {/* Comparison Table */}
        <Box maxW="5xl" mx="auto">
          {/* Header */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="4" mb="6">
            <Box display={{ base: "none", md: "block" }} />
            <Box textAlign="center" p="4" borderRadius="2xl" bg="whiteAlpha.100">
              <Text color="gray.400" fontWeight="medium" fontSize="sm">Traditional</Text>
              <Heading as="h3" size="md" fontWeight="bold" mt="1">Manual Production</Heading>
            </Box>
            <Box textAlign="center" p="4" borderRadius="2xl" bg="whiteAlpha.100">
              <Text color="gray.400" fontWeight="medium" fontSize="sm">Current Gen</Text>
              <Heading as="h3" size="md" fontWeight="bold" mt="1">Video Generators</Heading>
            </Box>
            <Box
              textAlign="center"
              p="4"
              borderRadius="2xl"
              bgGradient="linear(to-br, rgba(78, 64, 243, 0.2), rgba(168, 85, 247, 0.2))"
              border="1px solid"
              borderColor="brand.500"
            >
              <Text color="brand.500" fontWeight="medium" fontSize="sm">Next Gen</Text>
              <Heading as="h3" size="md" fontWeight="bold" mt="1" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                AI Video Agent
              </Heading>
            </Box>
          </Grid>

          {/* Rows */}
          <Box>
            {comparisonData.map((row, index) => (
              <Grid
                key={index}
                templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                gap="4"
                alignItems="center"
                p="4"
                borderRadius="2xl"
                bg="whiteAlpha.50"
                _hover={{ bg: "whiteAlpha.100" }}
                transition="colors 0.2s"
                border="1px solid"
                borderColor="whiteAlpha.100"
                mb="3"
              >
                {/* Feature name */}
                <Flex alignItems="center" gap="3">
                  <Flex w="10" h="10" borderRadius="xl" bg="whiteAlpha.100" alignItems="center" justifyContent="center" flexShrink="0">
                    <Icon as={row.icon} w={5} h={5} color="brand.500" />
                  </Flex>
                  <Text fontWeight="medium" fontSize={{ base: "sm", md: "base" }}>{row.feature}</Text>
                </Flex>

                {/* Manual */}
                <Box textAlign="center">
                  <Text color="gray.400" fontSize={{ base: "sm", md: "base" }}>{row.manual}</Text>
                </Box>

                {/* Generator */}
                <Box textAlign="center">
                  <Text color="gray.400" fontSize={{ base: "sm", md: "base" }}>{row.generator}</Text>
                </Box>

                {/* Agent */}
                <Box textAlign="center">
                  <Text color="brand.500" fontWeight="semibold" fontSize={{ base: "sm", md: "base" }}>{row.agent}</Text>
                </Box>
              </Grid>
            ))}
          </Box>

          {/* Bottom Summary */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="4" mt="8">
            <Box display={{ base: "none", md: "block" }} />
            <Box textAlign="center" p="4">
              <Flex w="12" h="12" borderRadius="full" bg="rgba(229, 62, 62, 0.1)" alignItems="center" justifyContent="center" mx="auto" mb="2">
                <Icon as={X} w={6} h={6} color="red.500" />
              </Flex>
              <Text color="gray.400" fontSize="sm">High barrier, slow iteration</Text>
            </Box>
            <Box textAlign="center" p="4">
              <Flex w="12" h="12" borderRadius="full" bg="rgba(214, 158, 46, 0.1)" alignItems="center" justifyContent="center" mx="auto" mb="2">
                <Icon as={Minus} w={6} h={6} color="yellow.500" />
              </Flex>
              <Text color="gray.400" fontSize="sm">Better, but still manual work</Text>
            </Box>
            <Box textAlign="center" p="4">
              <Flex w="12" h="12" borderRadius="full" bg="rgba(78, 64, 243, 0.1)" alignItems="center" justifyContent="center" mx="auto" mb="2">
                <Icon as={Check} w={6} h={6} color="brand.500" />
              </Flex>
              <Text color="brand.500" fontSize="sm" fontWeight="medium">Just describe, AI delivers</Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoCreationComparison;
