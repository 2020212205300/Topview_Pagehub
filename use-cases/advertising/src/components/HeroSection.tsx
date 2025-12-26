import { Box, Container, Heading, Text, Flex, Button, Icon, VStack, Link } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaSnapchat, FaPinterest, FaXTwitter } from "react-icons/fa6";
import VideoGrid from "./VideoGrid";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroSection = () => {
  return (
    <Box 
      as="section" 
      pt="10" 
      pb="20" 
      px={{ base: 4, md: 8 }} 
      bg="transparent"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Container maxW="container.xl" textAlign="center" p="0">
        {/* Main Content Card */}
        <Box 
          borderRadius={{ base: "40px", md: "100px" }} 
          bg="rgba(10, 10, 10, 0.8)" 
          pt={{ base: 12, md: 32 }} 
          pb={{ base: 10, md: 12 }} 
          px={{ base: 6, md: 10 }} 
          boxShadow="0 20px 60px rgba(255,255,255,0.05)"
          position="relative"
          overflow="hidden"
          width="100%"
          border="1px solid"
          borderColor="whiteAlpha.100"
          backdropFilter="blur(20px)"
        >
          {/* Top Label */}
          <MotionText
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            color="whiteAlpha.600"
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="0.2em"
            textTransform="uppercase"
            mb="10"
          >
            USE CASES
          </MotionText>

          {/* Main Title */}
          <MotionHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            as="h1"
            fontSize={{ base: "5xl", md: "110px" }}
            fontWeight="800"
            color="white"
            mb="10"
            lineHeight="1.1"
            letterSpacing="-0.05em"
            maxW="6xl"
            mx="auto"
          >
            AI Video Creation <br /> for{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #3B82F6, #22D3EE, #D946EF)"
              bgClip="text"
              display="inline-block"
              pb="0.15em"
              mb="-0.15em"
            >
              Advertising
            </Text>
          </MotionHeading>

          {/* Subtitle */}
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            color="whiteAlpha.800"
            fontSize={{ base: "lg", md: "26px" }}
            maxW="4xl"
            mx="auto"
            mb="12"
            lineHeight="1.3"
            fontWeight="500"
          >
            All-in-One Platform to Create, Test, and Scale High-Performance Ads
          </MotionText>

          {/* CTA Button */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            mb="16"
          >
            <Button
              as={Link}
              href="https://www.topview.ai/"
              isExternal
              size="lg"
              bg="white"
              color="black"
              px="14"
              py="9"
              fontSize="xl"
              borderRadius="full"
              _hover={{ bg: "whiteAlpha.900", transform: "scale(1.05)", textDecoration: "none" }}
              _active={{ transform: "scale(0.95)" }}
              transition="all 0.2s"
              rightIcon={<Icon as={Sparkles} w={6} h={6} />}
            >
              Start Creating Ad Videos with AI
            </Button>
          </MotionBox>

          {/* Video Waterfall Section */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            position="relative"
            borderRadius="40px"
            overflow="hidden"
            bg="rgba(0,0,0,0.3)"
            border="1px solid"
            borderColor="whiteAlpha.100"
            boxShadow="2xl"
            maxW="100%"
            mx="auto"
            mb="0"
            p={6}
          >
            <VideoGrid />
          </MotionBox>
        </Box>

        {/* Social Icons Section */}
        <Box mt="12">
          <Text 
            fontSize="xs" 
            fontWeight="bold" 
            color="gray.400" 
            letterSpacing="widest" 
            mb="6"
            textTransform="uppercase"
          >
            COMPATIBLE WITH ALL MAJOR PLATFORMS
          </Text>
          <Flex justify="center" align="center" gap={{ base: 6, md: 8 }} wrap="wrap">
            <Icon as={FaFacebook} w={6} h={6} color="gray.400" _hover={{ color: "blue.500" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaInstagram} w={6} h={6} color="gray.400" _hover={{ color: "pink.500" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaTiktok} w={6} h={6} color="gray.400" _hover={{ color: "white" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaXTwitter} w={6} h={6} color="gray.400" _hover={{ color: "white" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaYoutube} w={6} h={6} color="gray.400" _hover={{ color: "red.500" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaSnapchat} w={6} h={6} color="gray.400" _hover={{ color: "yellow.400" }} cursor="pointer" transition="color 0.2s" />
            <Icon as={FaPinterest} w={6} h={6} color="gray.400" _hover={{ color: "red.600" }} cursor="pointer" transition="color 0.2s" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
