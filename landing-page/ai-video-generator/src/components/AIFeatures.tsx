import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, List, ListItem, ListIcon, VStack } from "@chakra-ui/react";
import { Target, ShoppingCart, User, Smartphone, Check, Video, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import videoSrc from "../../public/video.mp4";

const MotionBox = motion(Box);

const videoTypes = [
  { 
    title: "Viral Videos",
    description: "Reproduce high-impact formats that are currently trending.",
    borderColor: "purple.500" 
  },
  { 
    title: "UGC Videos",
    description: "Authentic user-generated content look for high trust.",
    borderColor: "blue.500" 
  },
  { 
    title: "Shoppable Product Videos",
    description: "Direct response templates optimized for ecommerce sales.",
    borderColor: "green.500" 
  },
  { 
    title: "Ads & Performance Creatives",
    description: "Native look and high conversion rates for performance marketing.",
    borderColor: "pink.500" 
  },
];

const AIFeatures = () => {
  const [mutedStates, setMutedStates] = useState(new Array(videoTypes.length).fill(true));

  const toggleMute = (index: number) => {
    const newStates = [...mutedStates];
    newStates[index] = !newStates[index];
    setMutedStates(newStates);
  };

  return (
    <Box as="section" py={{ base: 12, md: 20 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" mb="4" color="white">
              AI Video <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">use case</Text>
            </Heading>
          </MotionBox>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="8" maxW="container.xl" mx="auto">
          {videoTypes.map((type, index) => (
            <MotionBox
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              borderRadius="3xl"
              overflow="hidden"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: type.borderColor, transform: "translateY(-10px)", bg: "whiteAlpha.100" }}
              role="group"
              display="flex"
              flexDirection="column"
            >
              <Box p="4">
                <Box aspectRatio="9/16" position="relative" overflow="hidden" borderRadius="2xl" bg="black" mb="4">
                  <Box
                    as="video"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted={mutedStates[index]}
                    playsInline
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  
                  {/* Sound Toggle Button */}
                  <Flex
                    position="absolute"
                    bottom="3"
                    right="3"
                    bg="blackAlpha.700"
                    backdropFilter="blur(10px)"
                    px="3"
                    py="1.5"
                    borderRadius="full"
                    alignItems="center"
                    cursor="pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                    _hover={{ bg: "blackAlpha.800", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                    zIndex="2"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Icon 
                      as={mutedStates[index] ? VolumeX : Volume2} 
                      color="white" 
                      w={3.5} 
                      h={3.5} 
                      mr={2} 
                    />
                    <Text color="white" fontSize="xs" fontWeight="bold" letterSpacing="tight">
                      {mutedStates[index] ? "Muted" : "Sound On"}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AIFeatures;
