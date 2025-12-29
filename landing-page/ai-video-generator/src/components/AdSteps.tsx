import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack, Image, Badge, HStack, Grid, GridItem } from "@chakra-ui/react";
import { CheckCircle2, TrendingUp, Smartphone, Play, Zap, Instagram, Youtube, Share2, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TikTokIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 3.19-.81 5.84-3.1 7.93-2.33 2.12-5.59 2.91-8.62 2.22-3.04-.69-5.56-2.91-6.48-5.85-.92-2.94-.13-6.18 2.02-8.33 2.15-2.14 5.38-2.92 8.32-2.1v4.13c-1.4-.41-3 .04-3.95 1.13-.95 1.08-1.21 2.62-.68 3.98.53 1.36 1.95 2.27 3.41 2.22 1.46-.05 2.77-1.12 3.03-2.55.07-.38.08-.77.08-1.15V.02z"
    />
  </Icon>
);

const AdSteps = () => {
  const styles = [
    {
      title: "Viral Videos",
      description: "Reproduce high-impact formats that are currently trending.",
      icon: Play,
      color: "purple.500"
    },
    {
      title: "UGC Style",
      description: "Authentic user-generated content look for high trust.",
      icon: Instagram,
      color: "blue.500"
    },
    {
      title: "Shoppable Ads",
      description: "Direct response templates optimized for ecommerce sales.",
      icon: Smartphone,
      color: "green.500"
    },
    {
      title: "Native Look",
      description: "Your videos look native — not like ads. High conversion rates.",
      icon: Zap,
      color: "pink.500"
    }
  ];

  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="600px"
        h="600px"
        bg="brand.500"
        filter="blur(180px)"
        opacity="0.08"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        bg="purple.500"
        filter="blur(150px)"
        opacity="0.05"
        borderRadius="full"
        pointerEvents="none"
      />

      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Header Section */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Heading as="h2" size="2xl" fontWeight="black" mb="6" color="white" lineHeight="1.1">
                Viral AI Video Templates <br />
                <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                  That Actually Work
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.300" mb={8} lineHeight="relaxed">
                Stop guessing. Start copying what works. Topview offers proven AI video templates based on millions of high-performing videos.
              </Text>
            </MotionBox>
          </Box>

          {/* 4-Column Video Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="8">
            {styles.map((style, index) => (
              <MotionBox
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                borderRadius="3xl"
                overflow="hidden"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{ borderColor: style.color, transform: "translateY(-10px)", bg: "whiteAlpha.100" }}
                role="group"
                p="4"
              >
                <Box aspectRatio="9/16" position="relative" overflow="hidden" borderRadius="2xl" bg="black" mb="6">
                  <Box
                    as="video"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
                
                <VStack align="center" spacing={3} textAlign="center">
                  <HStack spacing={2} color="brand.400">
                    <Icon as={style.icon} w={4} h={4} />
                    <Heading as="h3" size="md" color="white" fontWeight="bold">
                      {style.title}
                    </Heading>
                  </HStack>
                  <Text color="gray.400" fontSize="sm" lineHeight="tall">
                    {style.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Platform-Optimized Styles Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            pt={8}
            borderTop="1px solid"
            borderColor="whiteAlpha.100"
          >
            <VStack spacing={8} textAlign="center">
              <Box>
                <Heading as="h3" size="lg" color="white" mb={3} fontWeight="bold">
                  Platform-Optimized Styles
                </Heading>
                <Text color="gray.400" fontSize="lg">
                  Each template is designed to match native platform behavior:
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full" maxW="4xl" mx="auto">
                {[
                  { name: "TikTok", icon: TikTokIcon, color: "#00f2ea", desc: "Native hooks & trends" },
                  { name: "Instagram Reels", icon: Instagram, color: "#E1306C", desc: "Aesthetic & visual storytelling" },
                  { name: "YouTube Shorts", icon: Youtube, color: "#FF0000", desc: "Fast-paced & engaging" }
                ].map((platform) => (
                  <HStack 
                    key={platform.name} 
                    spacing={4} 
                    bg="whiteAlpha.50" 
                    p={6} 
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    _hover={{ borderColor: platform.color, bg: "whiteAlpha.100", transform: "translateY(-5px)" }}
                    transition="all 0.3s"
                    align="center"
                  >
                    <Flex 
                      w="12" 
                      h="12" 
                      bg="whiteAlpha.100" 
                      borderRadius="xl" 
                      align="center" 
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={platform.icon} w={6} h={6} color={platform.color} />
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text color="white" fontWeight="bold" fontSize="md">{platform.name}</Text>
                      <Text color="gray.500" fontSize="xs">{platform.desc}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdSteps;
