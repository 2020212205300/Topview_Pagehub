import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Circle, Button, Flex, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Play, Plus, Search, Layout, MousePointer2 } from "lucide-react";

const MotionBox = motion(Box);

const steps = [
  {
    title: "Upload Assets",
    description: "Upload product assets, URLs, or competitor ads",
  },
  {
    title: "Define Goals",
    description: "Define campaign goal (CTR, CPI, ROAS)",
  },
  {
    title: "AI Generation",
    description: "Let the AI Agent generate test-ready ad packs",
  },
  {
    title: "Test & Scale",
    description: "Launch A/B tests and scale winning creatives",
  },
];

const HowToSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="transparent">
      <Container maxW="1400px">
        <VStack spacing={20} align="stretch">
          {/* Top Section: Heading */}
          <VStack spacing={12} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "5xl", md: "85px" }}
              fontWeight="800"
              color="white"
              lineHeight="1.1"
              letterSpacing="-0.04em"
            >
              How Topview fits into your <br /> advertising workflow
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 24 }} alignItems="center">
            {/* Left Side: Mockup UI */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              position="relative"
              order={{ base: 2, lg: 1 }}
            >
              <Box
                bg="whiteAlpha.50"
                borderRadius="40px"
                p={4}
                boxShadow="2xl"
                position="relative"
                overflow="hidden"
                aspectRatio={16/10}
                border="1px solid"
                borderColor="whiteAlpha.100"
                backdropFilter="blur(10px)"
              >
                {/* Header */}
                <Flex borderBottom="1px solid" borderColor="whiteAlpha.100" pb={3} mb={4} justify="space-between" align="center">
                  <HStack spacing={2}>
                    <Circle size="3" bg="red.400" opacity="0.6" />
                    <Circle size="3" bg="yellow.400" opacity="0.6" />
                    <Circle size="3" bg="green.400" opacity="0.6" />
                  </HStack>
                  <Box bg="whiteAlpha.100" px={4} py={1} borderRadius="full" fontSize="xs" color="whiteAlpha.400">
                    topview.ai/dashboard
                  </Box>
                  <Box w="10" />
                </Flex>

                <Flex h="full">
                  {/* Sidebar */}
                  <VStack w="60px" borderRight="1px solid" borderColor="whiteAlpha.100" spacing={6} pt={2}>
                    <Circle size="10" bg="purple.500" color="white">
                      <Icon as={Plus} />
                    </Circle>
                    <Icon as={Search} color="whiteAlpha.300" />
                    <Icon as={Layout} color="whiteAlpha.300" />
                    <Icon as={MousePointer2} color="whiteAlpha.300" />
                  </VStack>

                  {/* Main Content */}
                  <Box flex={1} p={6}>
                    <VStack align="start" spacing={6}>
                      <HStack w="full" justify="space-between">
                        <Box>
                          <Text fontWeight="800" color="white" fontSize="xl">New Ad Generation</Text>
                          <Text fontSize="xs" color="whiteAlpha.400">Context fetching successful!</Text>
                        </Box>
                        <Button size="sm" colorScheme="purple" variant="outline" borderColor="whiteAlpha.200">Create using URL</Button>
                      </HStack>

                      <SimpleGrid columns={3} spacing={4} w="full">
                        {[1, 2, 3].map((i) => (
                          <VStack key={i} align="start" spacing={3}>
                            <Box
                              w="full"
                              aspectRatio={3/4}
                              bg="whiteAlpha.100"
                              borderRadius="lg"
                              position="relative"
                              overflow="hidden"
                              border="1px solid"
                              borderColor="whiteAlpha.100"
                            >
                              <Flex align="center" justify="center" h="full">
                                <Icon as={Play} color="whiteAlpha.200" w={8} h={8} />
                              </Flex>
                              {i === 2 && (
                                <Circle size="5" bg="purple.500" position="absolute" top={2} right={2}>
                                  <Icon as={Plus} size={12} color="white" />
                                </Circle>
                              )}
                            </Box>
                            <Box>
                              <Text fontWeight="bold" fontSize="xs" color="white">Option {i}</Text>
                              <Text fontSize="10px" color="whiteAlpha.400">High engagement variant</Text>
                            </Box>
                          </VStack>
                        ))}
                      </SimpleGrid>
                    </VStack>
                  </Box>
                </Flex>
              </Box>
              
              {/* Floating Element */}
              <Box
                position="absolute"
                bottom="-20px"
                right="-20px"
                bg="purple.500"
                p={4}
                borderRadius="24px"
                boxShadow="2xl"
                display={{ base: "none", md: "block" }}
              >
                <HStack spacing={3}>
                  <Circle size="8" bg="whiteAlpha.200" color="white">
                    <Icon as={Play} size={14} />
                  </Circle>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" fontSize="sm" color="white">2.7x ROI</Text>
                    <Text fontSize="xs" color="whiteAlpha.300">Campaign scaling...</Text>
                  </VStack>
                </HStack>
              </Box>
            </MotionBox>

            {/* Right Side: Content */}
            <VStack align="start" spacing={12} pl={{ lg: 12 }} order={{ base: 1, lg: 2 }}>
              <VStack align="start" spacing={8} w="full">
                {steps.map((step, index) => (
                  <HStack key={index} spacing={6} align="start">
                    <Circle
                      size="40px"
                      bg="purple.500"
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                      flexShrink={0}
                    >
                      {index + 1}
                    </Circle>
                    <VStack align="start" spacing={1}>
                      <Text color="white" fontWeight="bold" fontSize="xl">
                        {step.title}
                      </Text>
                      <Text color="whiteAlpha.600" fontSize="lg">
                        {step.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* Bottom Section: Button */}
          <VStack spacing={12} textAlign="center">
            <Button
              as={Link}
              href="https://agent.topview.ai/"
              isExternal
              size="lg"
              height="80px"
              px="14"
              fontSize="xl"
              fontWeight="800"
              borderRadius="full"
              bg="purple.500"
              color="white"
              _hover={{ bg: "purple.600", transform: "scale(1.05)", textDecoration: "none" }}
              _active={{ bg: "purple.700" }}
              transition="all 0.3s ease"
            >
              Start Your Workflow
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowToSection;
