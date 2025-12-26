import { Box, Container, Heading, Text, VStack, HStack, Icon, SimpleGrid, Flex, Image, Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";

const aiModels = [
  { name: "Nano Banana", icon: "/banana.svg" },
  { name: "SeeDream", icon: "/seedance.svg" },
  { name: "Imagen", icon: "/gemini-sparkle.svg" },
  { name: "gpt-image", icon: "/GPT.svg" },
  { name: "Kontext", icon: "/kontext.svg" },
];

const GeneratorSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={20} textAlign="center">
          {/* Header */}
          <VStack spacing={6} maxW="4xl" mx="auto">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "4xl" }}
              color="white"
              fontWeight="black"
              lineHeight="1.1"
            >
              One-Stop <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Product Photo</Text> Platform
            </Heading>
            <Heading as="h3" size="lg" color="whiteAlpha.900" fontWeight="bold">
              The Most Advanced AI Models, Working Together
            </Heading>
            <Text 
              color="gray.400" 
              fontSize={{ base: "lg", md: "xl" }} 
              lineHeight="tall"
              fontWeight="medium"
            >
              Topview brings the latest and most powerful AI models into one unified product photography workflow. 
              Instead of testing tools one by one, you get the best model for product image generation — automatically.
            </Text>
          </VStack>

          {/* Model Display Card Area */}
          <VStack spacing={12} w="full">
            <VStack spacing={12} w="full">
              <Text color="white" fontWeight="bold" fontSize="lg">
                Integrated AI Image Models:
              </Text>

              <HStack 
                spacing={{ base: 4, md: 12 }} 
                justify="center" 
                wrap="wrap" 
                w="full"
              >
                {aiModels.map((model) => (
                  <VStack key={model.name} spacing={4} minW="100px">
                    <Box
                        bg="#1A1A1A"
                        borderRadius="2xl"
                        p={4}
                        w={{ base: "100px", md: "120px" }}
                        h={{ base: "100px", md: "120px" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.3s"
                        _hover={{ transform: "translateY(-5px)", bg: "#252525" }}
                      >
                        <Image 
                          src={model.icon} 
                          alt={model.name} 
                          w="75%" 
                          h="75%"
                          objectFit="contain"
                          filter="grayscale(0)" // Keep icons colored if they are
                        />
                      </Box>
                    <Text color="white" fontWeight="bold" fontSize="sm">
                      {model.name}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>

            {/* CTA Button */}
            <Box mt={4}>
              <Button
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                height="64px"
                px={12}
                fontSize="xl"
                fontWeight="black"
                bg="white"
                color="black"
                borderRadius="full"
                _hover={{ bg: "gray.100", transform: "scale(1.02)" }}
                _active={{ bg: "gray.200" }}
                rightIcon={<Icon as={ChevronRight} w={5} h={5} />}
                transition="all 0.2s"
              >
                Start Generating with These Models
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
