import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, Link, Badge, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Film, Megaphone, ShoppingBag, Share2, Video, Wand2, ExternalLink, Sparkles } from "lucide-react";

const MotionBox = motion(Box);

const videoTypes = [
  {
    icon: Film,
    title: "Video Ads",
    description: "High-converting video ads optimized for any platform.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    gradient: "linear(to-br, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))",
    color: "purple.400"
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Brand storytelling and promotional content that captures attention.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    gradient: "linear(to-br, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))",
    color: "blue.400"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Product demos and shopping videos that boost conversions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    gradient: "linear(to-br, rgba(249, 115, 22, 0.15), rgba(234, 179, 8, 0.15))",
    color: "orange.400"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "TikTok, Reels, and Shorts content that grows your audience.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    gradient: "linear(to-br, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.15))",
    color: "green.400"
  },
];

const tools = [
  { name: "Phone Avatar", href: "#", hot: true },
  { name: "Custom Avatar", href: "#" },
  { name: "LipSync", href: "#", hot: true },
  { name: "Make Your Avatar", href: "#" },
  { name: "Product Avatar", href: "#", hot: true },
  { name: "AI Voice Clone", href: "#" },
  { name: "Background Remover", href: "#" },
  { name: "Video Translator", href: "#" },
  { name: "AI Script Writer", href: "#" },
  { name: "Text to Video", href: "#" },
  { name: "Image to Video", href: "#" },
  { name: "URL to Video", href: "#", hot: true },
];

const CombinedAIFeatures = () => {
  return (
    <Box as="section" py="24" position="relative" overflow="hidden">
      {/* Background Decor */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="full"
        h="full"
        bgGradient="radial(circle at 50% 50%, rgba(78, 64, 243, 0.03) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative">
        {/* Part 1: Content Types */}
        <Box textAlign="center" mb="16">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flex
              display="inline-flex"
              alignItems="center"
              gap="2"
              px="4"
              py="2"
              borderRadius="full"
              bg="whiteAlpha.100"
              color="brand.400"
              mb="6"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Icon as={Video} w={4} h={4} />
              <Text fontSize="sm" fontWeight="medium">All-in-One AI Video Suite</Text>
            </Flex>
            <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
              Create AI Videos for <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Every Channel</Text>
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="3xl" mx="auto">
              From high-converting ads to viral social content, your AI Video Agent handles the entire production workflow.
            </Text>
          </MotionBox>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6" mb="20">
          {videoTypes.map((type, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              borderRadius="3xl"
              overflow="hidden"
              bg="rgba(255, 255, 255, 0.02)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: type.color, bg: "rgba(255, 255, 255, 0.04)" }}
              transitionProperty="all"
              transitionDuration="0.3s"
              role="group"
            >
              <Box aspectRatio="16/10" position="relative" overflow="hidden">
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient={type.gradient}
                  opacity="0.6"
                  zIndex="1"
                />
                <Image
                  src={type.image}
                  alt={type.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  transition="transform 0.5s"
                  _groupHover={{ transform: "scale(1.1)" }}
                />
              </Box>
              <Box p="6">
                <Flex w="10" h="10" borderRadius="xl" bg="whiteAlpha.100" alignItems="center" justifyContent="center" mb="4">
                  <Icon as={type.icon} w={5} h={5} color={type.color} />
                </Flex>
                <Heading as="h3" size="md" fontWeight="bold" color="white" mb="2">
                  {type.title}
                </Heading>
                <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                  {type.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Part 2: Creative Tools Integration */}
        <Box
          p={{ base: "8", md: "12" }}
          borderRadius="4xl"
          bg="rgba(255, 255, 255, 0.02)"
          border="1px solid"
          borderColor="whiteAlpha.100"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="0"
            right="0"
            p="10"
            bgGradient="radial(circle at center, rgba(78, 64, 243, 0.1) 0%, transparent 70%)"
            pointerEvents="none"
          />
          
          <Stack direction={{ base: "column", lg: "row" }} spacing="12" alignItems="center">
            <Box flex="1">
              <Flex alignItems="center" gap="2" color="brand.400" mb="4">
                <Icon as={Wand2} w={5} h={5} />
                <Text fontWeight="bold" letterSpacing="wider" fontSize="sm">CREATIVE TOOLKIT</Text>
              </Flex>
              <Heading as="h3" size="xl" color="white" mb="6">
                More Specialized <br />
                <Text as="span" bgGradient="linear(to-r, brand.400, purple.400)" bgClip="text">AI Magic Tools</Text>
              </Heading>
              <Text color="gray.400" fontSize="md" mb="8">
                Beyond full video generation, use our specialized tools to refine every detail of your creative assets.
              </Text>
              <Link
                href="#"
                display="inline-flex"
                alignItems="center"
                gap="2"
                px="8"
                py="4"
                borderRadius="full"
                bg="brand.500"
                color="white"
                fontWeight="bold"
                _hover={{ bg: "brand.600", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Explore All Tools
                <Icon as={ExternalLink} w={4} h={4} />
              </Link>
            </Box>

            <Box flex="1.5">
              <Flex flexWrap="wrap" gap="3" justifyContent={{ base: "center", lg: "flex-start" }}>
                {tools.map((tool, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={tool.href}
                      display="inline-flex"
                      alignItems="center"
                      gap="2"
                      px="4"
                      py="2"
                      borderRadius="full"
                      bg="whiteAlpha.100"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      _hover={{ borderColor: "brand.400", bg: "rgba(78, 64, 243, 0.05)", textDecoration: "none" }}
                      transition="all 0.2s"
                      role="group"
                    >
                      <Text color="gray.300" fontSize="sm" fontWeight="medium" _groupHover={{ color: "white" }}>
                        {tool.name}
                      </Text>
                      {tool.hot && (
                        <Icon as={Sparkles} w={3} h={3} color="orange.400" />
                      )}
                    </Link>
                  </MotionBox>
                ))}
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CombinedAIFeatures;
