import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";

const useCases = [
  { 
    title: "E-commerce & Retail",
    imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Social Media Marketing",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2548&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Digital Advertising",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
  { 
    title: "Brand Design",
    imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop",
    borderColor: "whiteAlpha.300" 
  },
];

const AIFeatures = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" color="white">
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Product Photo</Text> Example
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
