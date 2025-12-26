import { Box, Container, Heading, Text, Flex, Button, Icon, Textarea, VStack, HStack, IconButton } from "@chakra-ui/react";
import { Sparkles, ImagePlus, Video, ArrowUp } from "lucide-react";

import { useState } from "react";

const promptIdeas = ["Viral News", "Product Launch", "Tutorial Video", "Reaction Clip", "Breaking News", "Tech Review"];

const HeroSection = () => {
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
            Twitter Video Tool
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
          Transform X (formerly Twitter) posts or videos into eye-catching content in minutes.
        </Text>

        {/* Input Box */}
        <Box maxW="4xl" mx="auto" mb="10">
          <Box
            bg="#161616"
            borderRadius="2xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            p={4}
            textAlign="left"
            position="relative"
            transition="all 0.2s"
            _focusWithin={{ borderColor: "whiteAlpha.400", boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1)" }}
          >
            <Textarea
              placeholder="Enter your video idea or paste an X post link. You can also provide a reference video to recreate its content."
              variant="unstyled"
              color="white"
              fontSize="md"
              minH="120px"
              p={2}
              mb={4}
              resize="none"
              _placeholder={{ color: "gray.500" }}
            />
            
            <Flex justifyContent="space-between" alignItems="flex-end">
              <HStack spacing={3}>
                <Button
                  leftIcon={<Icon as={ImagePlus} w={4} h={4} />}
                  size="sm"
                  bg="whiteAlpha.100"
                  color="gray.300"
                  borderRadius="lg"
                  fontWeight="medium"
                  px={4}
                  _hover={{ bg: "whiteAlpha.200", color: "white" }}
                >
                  Add Media & Link
                </Button>
                <Button
                  leftIcon={<Icon as={Video} w={4} h={4} />}
                  size="sm"
                  bg="whiteAlpha.100"
                  color="gray.300"
                  borderRadius="lg"
                  fontWeight="medium"
                  px={4}
                  _hover={{ bg: "whiteAlpha.200", color: "white" }}
                >
                  Reference Video
                </Button>
              </HStack>
              
              <IconButton
                aria-label="Submit"
                icon={<Icon as={ArrowUp} w={5} h={5} />}
                size="sm"
                borderRadius="full"
                bg="whiteAlpha.200"
                color="white"
                _hover={{ bg: "whiteAlpha.300" }}
                _active={{ bg: "whiteAlpha.400" }}
              />
            </Flex>
          </Box>

          {/* Ideas Section */}
          <VStack align="start" spacing={3} mt={8}>
            <Text color="gray.500" fontWeight="bold" fontSize="sm" px={2}>
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
                  borderRadius="full"
                  fontSize="sm"
                  color="gray.400"
                  cursor="pointer"
                  transition="0.2s"
                  _hover={{ bg: "whiteAlpha.100", color: "white", borderColor: "whiteAlpha.300" }}
                >
                  {idea}
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>

        {/* Action Button */}
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
      </Container>
    </Box>
  );
};

export default HeroSection;
