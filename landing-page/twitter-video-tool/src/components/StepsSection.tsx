import { Box, Container, Heading, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";

const steps = [
  {
    number: "STEP 1",
    title: "Upload Media or Select Template",
    description: "Upload your clips or choose from our diverse library of AI video templates specifically designed for short-form content.",
  },
  {
    number: "STEP 2",
    title: "Customize with AI Tools",
    description: "Add AI Avatars, realistic voiceovers with Lip-sync, and engaging captions. Optimize elements to capture attention.",
  },
  {
    number: "STEP 3",
    title: "Export and Share to Twitter",
    description: "Export high-quality videos optimized for Twitter's specifications and share directly to your audience from the dashboard.",
  },
];

const StepsSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} px="6" bg="black" position="relative">
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
            How to Create Engaging{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              Twitter Videos in 3 Simple Steps
            </Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" fontWeight="medium" maxW="2xl">
            Transform your ideas into high-converting Twitter videos in seconds.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {steps.map((step, index) => (
            <Box
              key={index}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={10}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              _hover={{
                borderColor: "#805AD5",
                bg: "rgba(128, 90, 213, 0.02)"
              }}
            >
              <VStack align="start" spacing={4}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  letterSpacing="widest"
                >
                  {step.number}
                </Text>
                <Heading as="h3" size="lg" color="white" fontWeight="bold">
                  {step.title}
                </Heading>
                <Text color="gray.500" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StepsSection;
