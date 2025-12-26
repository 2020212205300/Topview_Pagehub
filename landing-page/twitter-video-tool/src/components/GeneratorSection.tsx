import { Box, Container, Heading, Text, VStack, HStack, Icon, SimpleGrid, Flex, Image, Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";

const aiModels = [
  { name: "Sora", icon: "/Sora.svg" },
  { name: "Veo", icon: "/gemini-sparkle.svg" },
  { name: "Seedance", icon: "/seedance.svg" },
  { name: "Kling", icon: "/kling.svg" },
  { name: "Wan", icon: "/wan.svg" },
  { name: "Vidu", icon: "/vidu.svg" },
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
              One-Stop <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Twitter Video</Text> Platform
            </Heading>
            <Heading as="h3" size="lg" color="whiteAlpha.900" fontWeight="bold">
              The Most Advanced AI Video Models, Working Together
            </Heading>
            <Text 
              color="gray.400" 
              fontSize={{ base: "lg", md: "xl" }} 
              lineHeight="tall"
              fontWeight="medium"
            >
              Topview brings the latest and most powerful AI video models into one unified Twitter video creation workflow. 
              Instead of testing tools one by one, you get the best model for viral video generation — automatically.
            </Text>
          </VStack>

          {/* Model Display Card Area */}
          <Box w="full">
            <Text color="whiteAlpha.700" fontWeight="bold" fontSize="lg" mb={12}>
              Integrated AI Video Models:
            </Text>

            <SimpleGrid 
              columns={{ base: 2, md: 3, lg: 6 }} 
              spacing={{ base: 8, md: 10 }} 
              maxW="6xl" 
              mx="auto" 
              mb={20}
            >
              {aiModels.map((model) => (
                <VStack key={model.name} spacing={6}>
                  <Box
                    bg="#111"
                    borderRadius="2xl"
                    p={6}
                    w="full"
                    aspectRatio="1/1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-5px)", borderColor: "whiteAlpha.300", bg: "#161616" }}
                  >
                    <Image 
                      src={model.icon} 
                      alt={model.name} 
                      w="70%" 
                      h="70%"
                      objectFit="contain"
                    />
                  </Box>
                  <Text color="white" fontWeight="bold" fontSize="md">
                    {model.name}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>

            {/* Bottom CTA Area */}
            <VStack spacing={8} w="full">
              <VStack spacing={2}>
                <Text color="white" fontSize="xl" fontWeight="bold">
                  One platform. One workflow.
                </Text>
                <Text color="gray.500" fontSize="lg">
                  Multiple state-of-the-art models behind every video.
                </Text>
              </VStack>

              <Box
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                role="group"
              >
                <Button
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
                  Create Twitter Video Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
