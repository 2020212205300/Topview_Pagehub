import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, Icon, Button, Image, Badge } from "@chakra-ui/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ImageVideoFeatures = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        {/* Main Header */}
        <VStack spacing={6} textAlign="center" mb={24}>
          <Heading
            as="h2"
            size={{ base: "2xl", md: "4xl" }}
            color="white"
            fontWeight="black"
            lineHeight="1.1"
            mb="6"
          >
            Create AI Product Photos —{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              No Studio, No Shoot
            </Text>
          </Heading>
          <Text color="gray.400" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
            Support for every professional creation workflow:
          </Text>
        </VStack>

        <VStack spacing={32}>
          {/* Feature 1: One Product Image, Unlimited AI Product Photos */}
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  One Product Image, Unlimited AI Product Photos
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Turn a single product image into multiple marketing visuals with AI. Topview allows you to instantly change backgrounds, scenes, styles, and visual elements, generating a wide range of AI product photos, product posters, and promotional images in one click.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Instantly change backgrounds & scenes", 
                  "Generate multiple styles from one image", 
                  "One-click product poster creation"
                ].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #FF6B6B22, #805AD522)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              aspectRatio="4/3"
            >
              <Image 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop" 
                alt="Unlimited AI Product Photos"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 2: Advanced AI Photography Workflow */}
          <Flex 
            direction={{ base: "column", lg: "row-reverse" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  Advanced AI Photography Workflow
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  A streamlined process built for speed and scale. Replace traditional photoshoots with studio-quality results in minutes.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Commercial-ready visuals", 
                  "No complex setup or skills", 
                  "Studio-quality lifestyle images"
                ].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>

              <Box w="full">
                <Text color="gray.500" fontWeight="bold" mb={3} fontSize="sm" textTransform="uppercase" letterSpacing="widest">
                  Perfect for:
                </Text>
                <Flex wrap="wrap" gap={3}>
                  {["Amazon listings", "Shopify stores", "Marketing campaigns"].map((tag) => (
                    <Badge key={tag} bg="whiteAlpha.100" color="gray.300" px={4} py={2} borderRadius="full" textTransform="none">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #4ECDC422, #805AD522)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              aspectRatio="4/3"
            >
              <Image 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop" 
                alt="AI Photography Workflow"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 3: AI Product Avatar for Model-Based Product Ads */}
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  AI Product Avatar for Model-Based Product Ads
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Create stunning AI model product ads without hiring real models. By combining AI product photos with Topview’s AI Product Avatar, you can generate realistic AI fashion models holding your products for ads, landing pages, and social media campaigns.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Realistic AI fashion models", 
                  "No need for expensive photoshoots", 
                  "Boost engagement with human-centric ads"
                ].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>

              <Box w="full">
                <Text color="gray.500" fontWeight="bold" mb={3} fontSize="sm" textTransform="uppercase" letterSpacing="widest">
                  Best for:
                </Text>
                <Flex wrap="wrap" gap={3}>
                  {["Fashion ads", "Social media campaigns", "Landing pages"].map((tag) => (
                    <Badge key={tag} bg="whiteAlpha.100" color="gray.300" px={4} py={2} borderRadius="full" textTransform="none">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #FF6B6B22, #4ECDC422)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              aspectRatio="4/3"
            >
              <Image 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop" 
                alt="AI Product Avatar"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default ImageVideoFeatures;
