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
            Create Professional Twitter Videos —{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              No Editing Skills Needed
            </Text>
          </Heading>
          <Text color="gray.400" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
            Support for every viral social media workflow:
          </Text>
        </VStack>

        <VStack spacing={32}>
          {/* Feature 1: One Post Link, Unlimited Video Variations */}
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
                  One Tweet URL, Unlimited Video Variations
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Paste a Tweet URL directly — then transform ideas into shareable, impactful videos in just a few clicks.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Paste any X (Twitter) link", 
                  "Auto-generate video scenes", 
                  "Multiple variations in seconds"
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
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2548&auto=format&fit=crop" 
                alt="Viral Video Generation"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 2: Realistic AI Avatars for Storytelling */}
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
                  Realistic AI Avatars for Storytelling
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Bring your Twitter videos to life with over 80 realistic AI avatars. Add a personal touch without costly influencer collaborations.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "80+ diverse AI avatars", 
                  "Human-like narration", 
                  "Save on influencer costs"
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
                  {["X (Twitter) Marketing", "Personal Branding", "News Aggregators"].map((tag) => (
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
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop" 
                alt="AI Video Avatar"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 3: AI Script and Caption Optimization */}
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
                  AI Script and Caption Optimization
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Topview’s AI analyzes the post content to create keyword‑optimized captions and dynamic layouts.
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Keyword-optimized captions", 
                  "Dynamic layout analysis", 
                  "Boost reach and engagement"
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
                  {["Breaking News", "Twitter Threads", "X Ad Campaigns"].map((tag) => (
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
                src="https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?q=80&w=2670&auto=format&fit=crop" 
                alt="AI Content Analysis"
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
