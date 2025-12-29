import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Type, Image as ImageIcon, Video, UserSquare2, Link2 } from "lucide-react";

const MotionBox = motion(Box);

const methods = [
  {
    title: "AI Video Agent",
    description: "An intelligent agent that analyzes 10M+ viral videos to recreate proven formats for your brand.",
    color: "brand.500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Text to Video",
    description: "Turn scripts, prompts, or product descriptions into videos.",
    color: "blue.400",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Image to Video",
    description: "Upload product images and generate dynamic motion videos.",
    color: "green.400",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Video Editing",
    description: "Edit, remix, and adapt videos with AI assistance.",
    color: "purple.400",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Video Face Swap",
    description: "Create UGC-style videos at scale with realistic avatars.",
    color: "orange.400",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "URL to Video",
    description: "Paste a product page or link — get a ready-to-publish video.",
    color: "pink.400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="black">
      <Container maxW="container.xl">
        <VStack spacing={6} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" mb="4" color="white">
              All <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Video Creation Methods</Text> Supported
            </Heading>
            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.900" mb={4}>
              Every Way to Create AI Videos — In One Tool
            </Text>
            <Text fontSize="lg" color="whiteAlpha.700" maxW="2xl" mx="auto">
              Topview supports all mainstream AI video generation workflows, so you can create exactly what you need.
            </Text>
          </MotionBox>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {methods.map((method, index) => (
            <MotionBox
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="whiteAlpha.50"
              borderRadius="3xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              overflow="hidden"
              role="group"
              _hover={{
                bg: "whiteAlpha.100",
                borderColor: method.color,
                transform: "translateY(-10px)",
              }}
              transition="all 0.3s ease"
            >
              <Box position="relative" h="200px" overflow="hidden">
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
                 <Box 
                    position="absolute" 
                    top={0} 
                    left={0} 
                    right={0} 
                    bottom={0} 
                    bgGradient="linear(to-t, blackAlpha.800, transparent)"
                  />
                </Box>

              <Box p={8}>
                <Heading as="h3" size="md" color="white" mb={4}>
                  {method.title}
                </Heading>
                <Text color="whiteAlpha.700" fontSize="md" lineHeight="tall">
                  {method.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MethodsSection;
