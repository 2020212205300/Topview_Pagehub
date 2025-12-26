import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { Upload, Link, Video, Film, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    secondaryIcon: Link,
    title: "Your Product",
    description: "Upload images or paste a product URL — AI extracts what it needs automatically.",
    gradient: "linear(to-br, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.2))",
  },
  {
    icon: Video,
    title: "Reference Video",
    description: "Provide any video you like — AI analyzes shots, pacing, and storytelling.",
    gradient: "linear(to-br, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
  },
  {
    icon: Film,
    title: "AI-Cloned Video",
    description: "Get a multi-shot, complete video that matches your reference style.",
    gradient: "linear(to-br, rgba(236, 72, 153, 0.2), rgba(244, 63, 94, 0.2))",
  },
];

const AgentCoreConcept = () => {
  return (
    <Box as="section" py="20" px="6" bg="whiteAlpha.50">
      <Container maxW="container.xl">
        {/* Header */}
        <Box textAlign="center" mb="16">
          <Heading as="h2" size="2xl" fontWeight="bold" mb="4">
            Clone Any Video Style with{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              AI
            </Text>
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
            Upload your product, provide a reference video, and let AI recreate the entire video concept with your product.
          </Text>
        </Box>

        {/* Three-step flow */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, lg: 8 }} position="relative">
          {steps.map((step, index) => (
            <Box key={index} position="relative">
              <Box
                h="full"
                bgGradient={step.gradient}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="2xl"
                p="8"
                textAlign="center"
                _hover={{ borderColor: "brand.500", transition: "all 0.3s" }}
              >
                {/* Icon */}
                <Flex
                  w="16"
                  h="16"
                  borderRadius="2xl"
                  bg="whiteAlpha.100"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb="6"
                >
                  {step.secondaryIcon ? (
                    <Flex alignItems="center" gap="1">
                      <Icon as={step.icon} w={6} h={6} color="brand.500" />
                      <Text color="gray.500">/</Text>
                      <Icon as={step.secondaryIcon} w={5} h={5} color="brand.500" />
                    </Flex>
                  ) : (
                    <Icon as={step.icon} w={8} h={8} color="brand.500" />
                  )}
                </Flex>

                {/* Step number */}
                <Text fontSize="xs" fontWeight="medium" color="gray.500" mb="2">
                  Step {index + 1}
                </Text>

                {/* Title */}
                <Heading as="h3" size="md" fontWeight="bold" mb="3" color="white">
                  {step.title}
                </Heading>

                {/* Description */}
                <Text color="gray.400" lineHeight="relaxed">
                  {step.description}
                </Text>
              </Box>

              {/* Arrow between cards (desktop only) */}
              {index < steps.length - 1 && (
                <Box
                  display={{ base: "none", md: "flex" }}
                  position="absolute"
                  top="50%"
                  right={{ base: "-4", lg: "-5" }}
                  transform="translateY(-50%)"
                  zIndex="10"
                >
                  <Icon as={ArrowRight} w={6} h={6} color="whiteAlpha.500" />
                </Box>
              )}
            </Box>
          ))}
        </SimpleGrid>

        {/* Bottom highlight */}
        <Box textAlign="center" mt="12">
          <Box
            display="inline-flex"
            alignItems="center"
            gap="3"
            px="6"
            py="3"
            borderRadius="full"
            bg="rgba(78, 64, 243, 0.1)"
            border="1px solid"
            borderColor="brand.500"
          >
            <Text color="brand.300" fontWeight="medium">
              Not just editing — AI understands and recreates the entire video concept
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AgentCoreConcept;
