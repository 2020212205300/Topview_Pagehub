import { Box, Container, Heading, Text, Flex, Button, IconButton, Icon } from "@chakra-ui/react";
import { Image, Video, ArrowUp, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroSection = () => {
  return (
    <Box as="section" pt="40" pb="20" px="6">
      <Container maxW="container.xl" textAlign="center">
        {/* Main Title */}
        <MotionHeading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb="6"
        >
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
            All-in-One AI Video Generator for Business Growth
          </Text>
        </MotionHeading>

        {/* Description */}
        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          color="gray.400"
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          mx="auto"
          mb="12"
          lineHeight="tall"
        >
          <Box as="span" display="block" color="gray.400" fontWeight="medium">
            No filming. No editing. No guessing. Just proven video structures that convert.
          </Box>
        </MotionText>

        {/* Input Box */}
        <Box maxW="3xl" mx="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            bg="whiteAlpha.100"
            backdropFilter="blur(20px)"
            borderRadius="2xl"
            p="6"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Text color="gray.400" textAlign="left" mb="4">
              Describe your video idea — upload assets or paste a reference link, your AI Agent will handle the rest.
            </Text>
            <Flex alignItems="center" gap="3">
              <Button
                leftIcon={<Icon as={Image} w={4} h={4} />}
                variant="ghost"
                color="gray.400"
                bg="whiteAlpha.100"
                _hover={{ color: "white", bg: "whiteAlpha.200" }}
                size="sm"
              >
                Add Image & Link
              </Button>
              <Button
                leftIcon={<Icon as={Video} w={4} h={4} />}
                variant="ghost"
                color="gray.400"
                bg="whiteAlpha.100"
                _hover={{ color: "white", bg: "whiteAlpha.200" }}
                size="sm"
              >
                Reference Video
              </Button>
              <Box flex="1" />
              <IconButton
                aria-label="Submit"
                icon={<Icon as={ArrowUp} w={5} h={5} />}
                bg="brand.500"
                color="white"
                isRound
                _hover={{ opacity: 0.9 }}
                size="lg"
              />
            </Flex>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
