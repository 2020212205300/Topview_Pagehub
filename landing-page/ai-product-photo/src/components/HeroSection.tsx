import { Box, Container, Heading, Text, Flex, Button, Icon, Textarea, VStack, HStack, Center, SimpleGrid } from "@chakra-ui/react";
import { Sparkles, Upload } from "lucide-react";

import { useState } from "react";

const promptIdeas = ["Café Vibes", "Gadget Unboxing", "Eco-Friendly Showcase", "Fashion Forward"];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("text_to_image");

  return (
    <Box as="section" pt="40" pb="20" px="6">
      <Container maxW="container.xl" textAlign="center">
        {/* Main Title */}
        <Heading
          as="h1"
          size={{ base: "2xl", md: "4xl" }}
          fontWeight="black"
          mb="6"
        >
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
            AI Product Photo for Marketing
          </Text>
        </Heading>

        {/* Description */}
        <Text
          color="gray.400"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="medium"
          maxW="3xl"
          mx="auto"
          mb="12"
          lineHeight="tall"
        >
          Create high-quality AI product photos and AI product photography for e-commerce and marketing — without photoshoots, studios, or designers.
        </Text>

        {/* Input Box */}
        <Box maxW="4xl" mx="auto" mb="10">
          <Box
            bg="#0d0d0d"
            backdropFilter="blur(20px)"
            borderRadius="3xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            textAlign="left"
            overflow="hidden"
          >
            {/* Tabs */}
            <Flex borderBottom="1px solid" borderColor="whiteAlpha.100">
              <Box
                flex="1"
                py="4"
                textAlign="center"
                cursor="pointer"
                fontWeight="bold"
                fontSize="sm"
                color={activeTab === "text_to_image" ? "#805AD5" : "gray.500"}
                borderBottom="2px solid"
                borderColor={activeTab === "text_to_image" ? "#805AD5" : "transparent"}
                onClick={() => setActiveTab("text_to_image")}
              >
                Text to Image
              </Box>
              <Box
                flex="1"
                py="4"
                textAlign="center"
                cursor="pointer"
                fontWeight="bold"
                fontSize="sm"
                color={activeTab === "image_edit" ? "#805AD5" : "gray.500"}
                borderBottom="2px solid"
                borderColor={activeTab === "image_edit" ? "#805AD5" : "transparent"}
                onClick={() => setActiveTab("image_edit")}
              >
                Image Edit
              </Box>
            </Flex>

            <VStack align="start" spacing={6} p="8" w="full">
              {activeTab === "text_to_image" ? (
                /* Text to Image Content */
                <VStack align="start" spacing={6} w="full">
                  {/* Prompt Section */}
                  <VStack align="start" spacing={2} w="full">
                    <Text color="white" fontWeight="bold" fontSize="md">
                      Prompt
                    </Text>
                    <Box w="full" position="relative">
                      <Textarea
                        placeholder="What do you want to create?"
                        bg="black"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        borderRadius="2xl"
                        color="white"
                        _placeholder={{ color: "gray.600" }}
                        _hover={{ borderColor: "whiteAlpha.400" }}
                        _focus={{ borderColor: "#805AD5", boxShadow: "none" }}
                        minH="150px"
                        p={6}
                        resize="none"
                      />
                      <Text position="absolute" bottom="4" left="6" color="gray.600" fontSize="xs">
                        0 / 1500
                      </Text>
                    </Box>
                  </VStack>

                  {/* Ideas Section */}
                  <VStack align="start" spacing={3} w="full">
                    <Text color="white" fontWeight="bold" fontSize="md">
                      Ideas:
                    </Text>
                    <HStack spacing={3} wrap="wrap">
                      {promptIdeas.map((idea) => (
                        <Box
                          key={idea}
                          px={4}
                          py={2}
                          bg="whiteAlpha.50"
                          border="1px solid"
                          borderColor="whiteAlpha.100"
                          borderRadius="xl"
                          fontSize="sm"
                          color="gray.400"
                          cursor="pointer"
                          _hover={{ bg: "whiteAlpha.100", color: "white", borderColor: "#805AD5" }}
                        >
                          {idea}
                        </Box>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              ) : (
                /* Image Edit Specific: Upload Area */
                <VStack align="start" spacing={3} w="full">
                  <Text color="white" fontWeight="bold" fontSize="md">
                    Image
                  </Text>
                  <Center
                    w="full"
                    minH="200px"
                    bg="black"
                    border="1px dashed"
                    borderColor="whiteAlpha.300"
                    borderRadius="2xl"
                    flexDirection="column"
                    cursor="pointer"
                    _hover={{ borderColor: "#805AD5", bg: "whiteAlpha.50" }}
                    transition="0.3s"
                  >
                    <Icon as={Upload} w={8} h={8} color="gray.500" mb={4} />
                    <Text color="white" fontWeight="bold" mb={2}>
                      Click to upload product image
                    </Text>
                    <Text color="gray.500" fontSize="xs" textAlign="center" px={10}>
                      Upload JPG/PNG/WEBP images up to 10MB, with a minimum width and height of 300px.
                    </Text>
                  </Center>
                </VStack>
              )}

              <Flex w="full" justifyContent="center" pt={4}>
                <Box
                  as="a"
                  href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                  target="_blank"
                  rel="noopener noreferrer"
                  position="relative"
                  p="3px"
                  borderRadius="full"
                  overflow="hidden"
                  display="inline-block"
                  role="group"
                  cursor="pointer"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(45deg, #FF6B6B, #805AD5, #4ECDC4, #FF6B6B)",
                  }}
                >
                  <Button
                    leftIcon={<Icon as={Sparkles} w={4} h={4} color="#A29BFE" />}
                    bg="black"
                    _hover={{ bg: "black" }}
                    _active={{ bg: "black" }}
                    color="white"
                    px={12}
                    height="54px"
                    borderRadius="full"
                    fontSize="lg"
                    fontWeight="black"
                    position="relative"
                    zIndex="1"
                  >
                    Start Creating for Free
                  </Button>
                </Box>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
