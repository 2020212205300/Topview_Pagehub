import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Badge, Stack, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Youtube, Facebook, Music2, Smartphone, Zap } from "lucide-react";

const MotionBox = motion(Box);

const inventoryData = [
  {
    category: "YouTube Video Ads",
    icon: Youtube,
    color: "#FF0000",
    items: [
      {
        title: "In-Stream Pre-roll Ads",
        description: "Capture attention instantly. Our AI optimizes hooks for that crucial 5-second window before the \"Skip\" button appears.",
        optimization: "Optimized for 16:9 (Landscape)."
      },
      {
        title: "YouTube Shorts Ads",
        description: "Viral, high-energy vertical videos designed specifically for the Shorts feed.",
        optimization: "Optimized for 9:16 (Vertical)."
      },
      {
        title: "Bumper Ads (6s)",
        description: "Generate concise, punchy 6-second unskippable clips designed to drive maximum brand recall.",
        optimization: ""
      }
    ]
  },
  {
    category: "Meta (Facebook & Instagram) Ads",
    icon: Facebook,
    color: "#1877F2",
    items: [
      {
        title: "Instagram Reels & Stories",
        description: "Full-screen immersive experiences. We generate native-feeling UGC that fits perfectly in 9:16.",
        optimization: "Strictly 9:16."
      },
      {
        title: "Facebook Feed & In-Stream",
        description: "High-conversion creative optimized for 4:5 (Portrait) and 1:1 (Square) mobile viewing experiences.",
        optimization: "Optimized for 4:5 & 1:1."
      },
      {
        title: "Carousel Video Assets",
        description: "Multiple distinct video hooks generated automatically to tell a sequential story in carousel formats.",
        optimization: ""
      }
    ]
  },
  {
    category: "TikTok & Social Video Ads",
    icon: Music2,
    color: "#000000",
    items: [
      {
        title: "In-Feed Ads",
        description: "Native UGC-style videos that blend seamlessly with the \"For You\" page to reduce ad fatigue.",
        optimization: "Strictly 9:16."
      },
      {
        title: "Spark Ads",
        description: "Authentic content designed to boost organic posts for maximum engagement and social proof.",
        optimization: ""
      },
      {
        title: "Pangle/App Network Ads",
        description: "Performance-focused video assets optimized for high click-through rates (CTR) on partner networks.",
        optimization: ""
      }
    ]
  },
  {
    category: "Mobile App & Gaming Ads",
    icon: Smartphone,
    color: "#4ADE80",
    items: [
      {
        title: "Rewarded Video Creative",
        description: "Produce engaging content for gaming apps that users want to watch in exchange for rewards.",
        optimization: ""
      },
      {
        title: "Interstitial Video",
        description: "High-impact, full-screen videos designed for natural pause points in app usage.",
        optimization: "Perfect for maximizing App monetization."
      }
    ]
  }
];

const AdInventorySection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="transparent">
      <Container maxW="1400px">
        <VStack spacing={16} align="stretch">
          <VStack spacing={6} align="center" textAlign="center" mx="auto" maxW="4xl">
            <Badge
              bg="whiteAlpha.100"
              color="whiteAlpha.700"
              px={4}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.2em"
              textTransform="uppercase"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              Ad Inventory
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "72px" }}
              fontWeight="800"
              color="white"
              lineHeight="1.1"
              letterSpacing="-0.04em"
            >
              Supported Video Ad Formats & Platforms
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.700" lineHeight="1.6">
              Create native ads for YouTube (16:9), TikTok (9:16), and Meta. One click to resize for any placement.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            {inventoryData.map((category, catIndex) => (
              <MotionBox
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                bg="whiteAlpha.50"
                borderRadius="40px"
                border="1px solid"
                borderColor="whiteAlpha.100"
                p={{ base: 8, md: 10 }}
                _hover={{ borderColor: "whiteAlpha.300", bg: "whiteAlpha.100" }}
                transitionProperty="all"
                transitionDuration="0.3s"
              >
                <VStack align="start" spacing={8}>
                  <Stack direction="row" align="center" spacing={4}>
                    <Box
                      p={3}
                      bg="whiteAlpha.100"
                      borderRadius="20px"
                      color="white"
                    >
                      <Icon as={category.icon} w={8} h={8} />
                    </Box>
                    <Heading as="h3" fontSize={{ base: "2xl", md: "32px" }} color="white" fontWeight="800">
                      {category.category}
                    </Heading>
                  </Stack>

                  <VStack align="stretch" spacing={8} w="100%">
                    {category.items.map((item, itemIndex) => (
                      <VStack key={itemIndex} align="start" spacing={3}>
                        <Heading as="h4" fontSize="xl" color="white" fontWeight="700">
                          {item.title}
                        </Heading>
                        <Text color="whiteAlpha.600" fontSize="md" lineHeight="1.6">
                          {item.description}
                        </Text>
                        {item.optimization && (
                          <Stack direction="row" align="center" spacing={2} bg="whiteAlpha.100" px={3} py={1} borderRadius="full">
                            <Icon as={Zap} w={3} h={3} color="purple.400" />
                            <Text fontSize="xs" color="whiteAlpha.800" fontWeight="600" letterSpacing="0.02em">
                              {item.optimization}
                            </Text>
                          </Stack>
                        )}
                        {itemIndex < category.items.length - 1 && (
                          <Divider borderColor="whiteAlpha.100" mt={4} />
                        )}
                      </VStack>
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdInventorySection;
