import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack, Image, HStack, Badge } from "@chakra-ui/react";
import { Brain, Clock, BarChart3, Layout, FileText, PlayCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const agentCapabilities = [
  {
    title: "Analyzes 10M+ viral videos",
    description: "Topview's AI Video Agent analyzes millions of high-performing videos to understand exactly what makes content go viral on platforms like TikTok and Instagram.",
    icon: BarChart3,
    color: "brand.500",
  },
  {
    title: "Breaks down winning structures",
    description: "The agent identifies the exact hooks, pacing, and CTAs that drive engagement. It breaks down winning formats to apply them to your brand.",
    icon: Layout,
    color: "orange.400",
  },
  {
    title: "Recreates proven formats",
    description: "The agent automatically recreates winning structures for your specific product or brand, ensuring high performance from day one.",
    icon: Sparkles,
    color: "purple.400",
  },
];

const workflowSteps = [
  {
    title: "Agent generates a creative brief",
    description: "No more staring at a blank screen. The agent analyzes your product and creates a professional creative brief that hits all the right emotional triggers.",
    icon: FileText,
    color: "blue.400",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Builds a storyboard",
    description: "A complete visual plan for your video. The agent maps out every scene, ensuring perfect pacing and high engagement from start to finish.",
    icon: Layout,
    color: "pink.400",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Produces a ready-to-publish video",
    description: "In one click, the agent renders your final video. Optimized for TikTok, Instagram, and YouTube Shorts with native-style captions and effects.",
    icon: PlayCircle,
    color: "green.400",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
  },
];

const AgentDifferences = () => {
  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      {/* Background Glows */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="500px"
        h="500px"
        bg="brand.500"
        filter="blur(150px)"
        opacity="0.05"
        zIndex="0"
      />
      
      <Container maxW="container.xl" position="relative" zIndex="1">
        <Box textAlign="center" mb="20">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" mb="6" color="white">
              AI Video Agent <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                That Thinks Like a Top Creator
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl" mx="auto">
              Topview isn’t just a generator. It’s an AI Video Agent.
            </Text>
          </MotionBox>
        </Box>

        <VStack spacing={24} align="stretch">
          {/* Section 1: What the Agent Does */}
          <Box>
            <Heading size="lg" color="white" mb={12} textAlign="center" fontWeight="black">
              What the Video Agent:
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {agentCapabilities.map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  bg="whiteAlpha.50"
                  p={8}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                >
                  <Flex 
                    w="12" 
                    h="12" 
                    bg="whiteAlpha.100" 
                    borderRadius="xl" 
                    align="center" 
                    justify="center"
                    mb={6}
                  >
                    <Icon as={item.icon} w={6} h={6} color={item.color} />
                  </Flex>
                  <Heading size="md" color="white" mb={4} fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text color="gray.400" fontSize="md" lineHeight="relaxed">
                    {item.description}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Section 2: One-Click Workflow */}
          <Box pt={8}>
            <VStack spacing={4} mb={16}>
              <Heading size="xl" color="white" textAlign="center" fontWeight="black">
                One-Click Workflow
              </Heading>
            </VStack>

            {/* Timeline Bar */}
            <Box position="relative" mb={16} px={{ base: 0, md: 0 }}>
              {/* Background Track */}
              <Box
                h="2px"
                bg="whiteAlpha.200"
                w="full"
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
                px={{ base: 10, md: "16.66%" }} // Align with column centers
              >
                <Box h="full" w="full" bg="whiteAlpha.200" />
              </Box>
              
              {/* Progress Line */}
              <Box
                h="2px"
                bgGradient="linear(to-r, brand.500, purple.500, green.500)"
                w="full"
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
                px={{ base: 10, md: "16.66%" }}
                boxShadow="0 0 15px rgba(78, 64, 243, 0.3)"
              >
                <Box h="full" w="full" bgGradient="linear(to-r, brand.500, purple.500, green.500)" />
              </Box>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} position="relative" zIndex="1">
                {[1, 2, 3].map((step) => (
                  <Flex key={step} justify="center">
                    <Flex
                      w="10"
                      h="10"
                      bg="black"
                      border="2px solid"
                      borderColor={step === 1 ? "brand.500" : step === 2 ? "purple.500" : "green.500"}
                      color="white"
                      borderRadius="full"
                      align="center"
                      justify="center"
                      fontWeight="bold"
                      fontSize="lg"
                      boxShadow={`0 0 20px ${step === 1 ? "rgba(78, 64, 243, 0.4)" : step === 2 ? "rgba(128, 90, 213, 0.4)" : "rgba(72, 187, 120, 0.4)"}`}
                    >
                      {step}
                    </Flex>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {workflowSteps.map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack align="center" spacing={4} position="relative">
                    {/* Image Container */}
                    <Box
                      w="full"
                      h="200px"
                      borderRadius="xl"
                      overflow="hidden"
                      position="relative"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        w="full"
                        h="full"
                        objectFit="cover"
                        opacity="0.7"
                        crossOrigin="anonymous"
                      />
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bgGradient="linear(to-t, blackAlpha.800, transparent)"
                      />
                    </Box>

                    <HStack spacing={3} justify="center">
                      <Icon as={item.icon} w={5} h={5} color={item.color} />
                      <Heading size="md" color="white" fontWeight="bold" textAlign="center">
                        {item.title}
                      </Heading>
                    </HStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AgentDifferences;
