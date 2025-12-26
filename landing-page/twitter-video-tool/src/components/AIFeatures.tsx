import { Box, Container, Heading, Text, SimpleGrid, Flex, Image, Icon } from "@chakra-ui/react";
import { Play } from "lucide-react";

const useCases = [
  { 
    title: "Viral News Clips",
    imageSrc: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?q=80&w=2670&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Thread-to-Video",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2548&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Tutorial Videos",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Event Highlights",
    imageSrc: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2670&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
];

const AIFeatures = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" color="white">
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Twitter Video</Text> Examples
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="6" maxW="container.xl" mx="auto">
          {useCases.map((useCase) => (
            <Box
              key={useCase.title}
              borderRadius="3xl"
              overflow="hidden"
              position="relative"
              aspectRatio="1/1"
              role="group"
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              _hover={{ 
                transform: "translateY(-8px)",
              }}
            >
              {/* Image */}
              <Image
                src={useCase.imageSrc}
                alt={useCase.title}
                w="full"
                h="full"
                objectFit="cover"
                transition="transform 0.5s ease"
                _groupHover={{ transform: "scale(1.05)" }}
              />

              {/* Play Button Overlay */}
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                alignItems="center"
                justifyContent="center"
                zIndex="2"
              >
                <Box
                  bg="whiteAlpha.300"
                  backdropFilter="blur(10px)"
                  borderRadius="full"
                  p="4"
                  transition="all 0.3s ease"
                  _groupHover={{ 
                    transform: "scale(1.1)",
                    bg: "brand.500",
                    color: "white"
                  }}
                  color="white"
                >
                  <Icon as={Play} fill="currentColor" w="6" h="6" ml="1" />
                </Box>
              </Flex>

              {/* Bottom Gradient Overlay */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="50%"
                bgGradient="linear(to-t, blackAlpha.900, transparent)"
                zIndex="1"
              />

              {/* Text Overlay */}
              <Flex
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p="8"
                zIndex="2"
                alignItems="flex-end"
              >
                <Heading 
                  as="h3" 
                  size="md" 
                  color="white" 
                  fontWeight="bold"
                  letterSpacing="tight"
                >
                  {useCase.title}
                </Heading>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AIFeatures;
