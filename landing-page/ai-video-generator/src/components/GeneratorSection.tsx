import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack, Button, HStack, Badge, Image } from "@chakra-ui/react";
import { Video, Image as ImageIcon, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import soraLogo from "../../public/sora.png";
import klingLogo from "../../public/kling.png";
import seedanceLogo from "../../public/字节跳动.svg";
import viduLogo from "../../public/vidu.svg";
import qwenLogo from "../../public/qwen.svg";

const MotionBox = motion(Box);

const videoModels = [
  "Sora 2", "Seedream 4.5", "Kling O1", "Kling 2.6", "Vidu Q2", "Wan 2.6"
];

const imageModels = [
  "Nano Banana Pro", "GPT Image 1.5", "Seedream 4.5", "Imagen 4", "Kontext-Pro"
];

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <Button
    bg="#5D5CFF"
    color="white"
    borderRadius="full"
    px={12}
    height="64px"
    width={{ base: "full", md: "auto" }}
    minW="280px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    fontSize="lg"
    fontWeight="bold"
    rightIcon={<Icon as={ChevronRight} w={5} h={5} />}
    cursor="default"
    pointerEvents="none"
    transition="none"
  >
    {children}
  </Button>
);

const GeneratorCard = ({ 
  children 
}: { 
  children?: React.ReactNode
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    bg="whiteAlpha.50"
    backdropFilter="blur(10px)"
    borderRadius="3xl"
    p={{ base: 4, md: 5 }}
    position="relative"
    overflow="hidden"
    h="full"
    display="flex"
    flexDirection="column"
    _hover={{
      bg: "whiteAlpha.100",
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px -20px rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s"
    }}
  >
    <VStack align="start" spacing={3} flex="1">
      <Box w="full" mt={1} flex="1">
        {children}
      </Box>
    </VStack>
  </MotionBox>
);

const GeneratorSection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} px="6" bg="black">
      <Container maxW="container.xl">
        <VStack spacing={8} mb={8} textAlign="center">
          <VStack spacing={4}>
            <Heading
              as="h2"
              size="2xl"
              color="white"
              fontWeight="bold"
              lineHeight="shorter"
            >
              Your All-in-One AI Video Generator
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="2xl">
              Topview integrates the latest and most powerful AI video models into a single workflow — so you don’t have to choose, test, or switch tools.
            </Text>
          </VStack>
        </VStack>

        <VStack maxW="1000px" mx="auto" spacing={8}>
          <GeneratorCard>
            <Box 
              position="relative" 
              w="full" 
              p={{ base: 4, md: 6 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex wrap="wrap" justify="center" gap={{ base: 3, md: 4 }} w="full">
                {[
                  { name: "Sora", color: "green.400", logo: soraLogo },
                  { name: "Kling", color: "orange.400", logo: klingLogo },
                  { name: "Seedance", color: "yellow.400", logo: seedanceLogo },
                  { name: "Vidu", color: "cyan.400", logo: viduLogo },
                  { name: "Wan", color: "teal.400", logo: qwenLogo }
                ].map((m) => (
                  <HStack 
                    key={m.name} 
                    bg="whiteAlpha.100" 
                    p={{ base: 2, md: 3 }} 
                    px={{ base: 3, md: 5 }}
                    borderRadius="2xl" 
                    spacing={3}
                    border="1px solid"
                    borderColor="transparent"
                  >
                    <Box boxSize={{ base: "24px", md: "32px" }} flexShrink={0} display="flex" alignItems="center" justifyContent="center">
                      {m.logo ? (
                        <Image src={m.logo} alt={m.name} boxSize="full" objectFit="contain" />
                      ) : (
                        <Box w={2} h={2} borderRadius="full" bg={m.color} display="none" />
                      )}
                    </Box>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900" fontWeight="bold" whiteSpace="nowrap">{m.name}</Text>
                  </HStack>
                ))}
              </Flex>
              
              {/* Decorative elements */}
              <Box 
                position="absolute" 
                bottom="-20px" 
                left="50%" 
                transform="translateX(-50%)" 
                w="80%" 
                h="40px" 
                bg="whiteAlpha.100" 
                borderRadius="full" 
                filter="blur(20px)"
              />
            </Box>
          </GeneratorCard>

          <PrimaryButton>
            Create Video with AI Now
          </PrimaryButton>
        </VStack>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
