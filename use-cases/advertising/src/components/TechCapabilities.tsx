import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Badge } from "@chakra-ui/react";
import { Cpu, UserCircle2, Zap, Layout, Link2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const features = [
  {
    title: "AI Agent that recreates winning ads",
    description: "Our core engine analyzes winning creative structures and reproduces full ad cuts tailored to your brand's unique assets.",
    icon: Cpu,
    color: "#D946EF"
  },
  {
    title: "AI UGC Avatars for realistic ads",
    description: "Generate photorealistic on-camera presenters with perfect lip-sync and tone. No casting, no studios, no expensive talent fees.",
    icon: UserCircle2,
    color: "#22D3EE"
  },
  {
    title: "AI product shoots (Nano Banana)",
    description: "Transform static product photos into high-end cinematic scenes with realistic lighting, reflections, and camera movements.",
    icon: Zap,
    color: "#FACC15",
    label: "Nano Banana"
  },
  {
    title: "Creative hook generation",
    description: "Leverage Sora2 and Veo3 engines to generate high-retention visual hooks that stop the scroll in the first 3 seconds.",
    icon: Layout,
    color: "#3B82F6",
    label: "Sora2 / Veo3"
  },
  {
    title: "URL-to-Video advertising remix",
    description: "The industry-standard 'Remix' capability. Turn any product URL into dozens of high-performing ad variations instantly.",
    icon: Link2,
    color: "#4ADE80"
  },
  {
    title: "Performance-Driven Templates",
    description: "Access templates built on data from 10M+ winning ads, ensuring your creatives are designed to convert, not just look good.",
    icon: Sparkles,
    color: "#FB923C"
  }
];

const TechCapabilities = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="transparent">
      <Container maxW="1400px">
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} align="center" textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="whiteAlpha.600"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Technology Stack
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "72px" }}
              fontWeight="800"
              color="white"
              lineHeight="1.1"
              letterSpacing="-0.04em"
            >
              The Most Advanced <br /> AI Ad Platform
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg="whiteAlpha.50"
                borderRadius="40px"
                p={10}
                border="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{ borderColor: "whiteAlpha.300", bg: "whiteAlpha.100" }}
                transitionProperty="all"
                transitionDuration="0.3s"
              >
                <VStack align="start" spacing={6}>
                  <VStack align="start" spacing={4} w="100%">
                    <Box display="flex" alignItems="center" gap={4} w="100%">
                      <Icon as={feature.icon} w={10} h={10} color={feature.color} />
                      <Heading as="h3" fontSize="28px" color="white" fontWeight="800" letterSpacing="-0.02em" lineHeight="1.2">
                        {feature.title}
                      </Heading>
                    </Box>
                    <Text fontSize="md" color="whiteAlpha.600" lineHeight="1.6">
                      {feature.description}
                    </Text>
                  </VStack>
                  
                  {/* Visual Placeholder for Tech */}
                  <Box 
                    w="100%" 
                    h="140px" 
                    bg="blackAlpha.400" 
                    borderRadius="24px" 
                    border="1px solid" 
                    borderColor="whiteAlpha.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    position="relative"
                  >
                    <Box 
                      position="absolute" 
                      inset="0" 
                      bgGradient={`linear(to-br, ${feature.color}11, transparent)`} 
                    />
                    <Icon as={feature.icon} w={12} h={12} color="whiteAlpha.100" />
                  </Box>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechCapabilities;
