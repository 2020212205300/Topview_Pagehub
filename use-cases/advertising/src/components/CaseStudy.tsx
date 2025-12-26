import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.xl">
        <Heading as="h2" textAlign="center" size="xl" fontWeight="bold" mb="12">
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Topview AI Video Agent</Text> Success Story
        </Heading>

        <Box maxW="4xl" mx="auto">
          <Box
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            bgGradient="linear(to-br, rgba(78, 64, 243, 0.1), whiteAlpha.50, rgba(190, 24, 93, 0.1))"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Icon as={Quote} w={12} h={12} color="brand.500" opacity="0.4" mb="6" />
            <Text fontSize={{ base: "xl", md: "2xl" }} color="white" lineHeight="relaxed" mb="8" fontStyle="italic">
              "Topview's video solutions helped iLive by SHOPNOW grow our AI video
              production services revenue by 80%, while reducing labor and costs by 50%.
              It's not just a tool—it's a game-changer for scaling content and driving results."
            </Text>

            <Flex alignItems="center" gap="4" mb="10">
              <Flex
                w="14"
                h="14"
                borderRadius="full"
                bgGradient="linear(to-br, brand.500, pink.500)"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                color="white"
              >
                LM
              </Flex>
              <Box>
                <Text fontWeight="semibold" color="white">Long Ma</Text>
                <Text color="gray.400" fontSize="sm">CEO, Shopnow Technology JSC</Text>
              </Box>
            </Flex>

            <SimpleGrid columns={3} spacing="6">
              <Box textAlign="center" p="4" borderRadius="2xl" bg="blackAlpha.400">
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text" mb="1">5x</Text>
                <Text color="gray.400" fontSize="sm">lower video production costs</Text>
              </Box>
              <Box textAlign="center" p="4" borderRadius="2xl" bg="blackAlpha.400">
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text" mb="1">30%</Text>
                <Text color="gray.400" fontSize="sm">increase in sales revenue</Text>
              </Box>
              <Box textAlign="center" p="4" borderRadius="2xl" bg="blackAlpha.400">
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text" mb="1">70%</Text>
                <Text color="gray.400" fontSize="sm">less time spent on content</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudy;
