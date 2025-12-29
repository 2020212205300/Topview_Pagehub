import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Image, Link, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Type, Image as ImageIcon, Video, UserSquare2, Link2 } from "lucide-react";

const MotionBox = motion(Box);

const methods = [
  {
    title: "AI Video Agent",
    description: "An intelligent agent that analyzes 10M+ viral videos to recreate proven formats for your brand.",
    color: "brand.500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
  {
    title: "Text to Video",
    description: "Turn scripts, prompts, or product descriptions into videos.",
    color: "blue.400",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
  {
    title: "Image to Video",
    description: "Upload product images and generate dynamic motion videos.",
    color: "green.400",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
  {
    title: "AI Video Editing",
    description: "Edit, remix, and adapt videos with AI assistance.",
    color: "purple.400",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
  {
    title: "Video Face Swap",
    description: "Create UGC-style videos at scale with realistic avatars.",
    color: "orange.400",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
  {
    title: "URL to Video",
    description: "Paste a product page or link — get a ready-to-publish video.",
    color: "pink.400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "https://agent.topview.ai/"
  },
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" textAlign="center">
          <Box maxW="4xl">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
                All <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Video Creation Methods</Text> Supported
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.900" mb={4}>
                Every Way to Create AI Videos — In One Tool
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="3xl" mx="auto">
                Topview supports all mainstream AI video generation workflows, so you can create exactly what you need.
              </Text>
            </MotionBox>
          </Box>

          {/* Methods Grid - Styled like Templates Grid */}
          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} w="full" pt={8}>
            {methods.map((method, index) => (
              <VStack key={index} spacing={4}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  aspectRatio="9/16"
                  bg="whiteAlpha.50"
                  w="full"
                  role="group"
                >
                  <Image 
                    src={method.image}
                    alt={method.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _groupHover={{ transform: "scale(1.1)" }}
                    crossOrigin="anonymous"
                  />
                  
                  {/* Overlay for better text readability */}
                  <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-t, blackAlpha.900, transparent, transparent)"
                    zIndex="1"
                  />

                  <VStack
                    position="absolute"
                    bottom="5"
                    left="0"
                    right="0"
                    spacing={1}
                    zIndex="2"
                    px={2}
                  >
                    <Text
                      color="white"
                      fontSize="sm"
                      fontWeight="bold"
                      lineHeight="shorter"
                    >
                      {method.title}
                    </Text>
                  </VStack>
                </MotionBox>
                <Link href={method.link} isExternal w="full">
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="whiteAlpha"
                    color="white"
                    w="full"
                    borderRadius="full"
                    fontSize="xs"
                    _hover={{ 
                      bg: "whiteAlpha.200",
                      borderColor: method.color,
                      color: "white"
                    }}
                  >
                    Try it now
                  </Button>
                </Link>
              </VStack>
            ))}
          </SimpleGrid>

          <VStack spacing={6} pt={8}>
            <Text color="gray.400" fontSize="lg" fontWeight="medium">
              Choose your preferred method and start creating.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default MethodsSection;
