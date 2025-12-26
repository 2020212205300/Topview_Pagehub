import { Box, Container, Heading, Text, Button, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const FinalCTA = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="transparent">
      <Container maxW="1400px">
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          bg="whiteAlpha.50"
          borderRadius="60px"
          p={{ base: 12, md: 24 }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          {/* Background Glow */}
          <Box
            position="absolute"
            top="-50%"
            left="-10%"
            w="50%"
            h="100%"
            bg="purple.500"
            borderRadius="full"
            filter="blur(120px)"
            opacity="0.1"
            zIndex="0"
          />
          <Box
            position="absolute"
            bottom="-50%"
            right="-10%"
            w="50%"
            h="100%"
            bg="blue.500"
            borderRadius="full"
            filter="blur(120px)"
            opacity="0.1"
            zIndex="0"
          />

          <VStack spacing={10} position="relative" zIndex="1">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "85px" }}
              fontWeight="800"
              color="white"
              lineHeight="1"
              letterSpacing="-0.04em"
            >
              Start creating <br /> high-performance <br /> ad videos with AI
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "24px" }}
              color="whiteAlpha.700"
              maxW="2xl"
              mx="auto"
            >
              Join 50,000+ advertisers scaling their creative output with Topview.
            </Text>

            <Button
              as={Link}
              href="https://www.topview.ai/"
              isExternal
              size="lg"
              height="80px"
              px="12"
              fontSize="xl"
              fontWeight="800"
              borderRadius="full"
              bg="#4e40f3"
              color="white"
              _hover={{ bg: "#3b30c3", transform: "translateY(-4px)", textDecoration: "none" }}
              _active={{ bg: "#3b30c3" }}
              transition="all 0.3s"
            >
              Start Creating Ad Videos with AI
            </Button>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FinalCTA;
