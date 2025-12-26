import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { Bot } from "lucide-react";

const stats = [
  {
    value: "10X",
    label: "faster video production. From weeks to minutes.",
  },
  {
    value: "80-90%",
    label: "cost savings. High-quality videos without the agency price tag.",
  },
  {
    value: "0",
    label: "learning curve. Anyone can start creating immediately.",
  },
];

const StatsSection = () => {
  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Flex
            display="inline-flex"
            alignItems="center"
            gap="2"
            px="4"
            py="2"
            borderRadius="full"
            bg="rgba(78, 64, 243, 0.1)"
            color="brand.500"
            mb="4"
          >
            <Icon as={Bot} w={4} h={4} />
            <Text fontSize="sm" fontWeight="medium">Why an AI Video Agent?</Text>
          </Flex>
          <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Video Agent</Text>: Create Videos{" "}
            10× Faster at a Fraction of the Cost
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
            Traditional tools require manual editing for every frame. Your AI Video Agent
            understands your intent and handles everything — from scripting to final cut.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          {stats.map((stat, index) => (
            <Box
              key={index}
              textAlign="center"
              p="8"
              borderRadius="3xl"
              bgGradient="linear(to-br, whiteAlpha.100, whiteAlpha.50)"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Text
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)"
                bgClip="text"
                mb="4"
              >
                {stat.value}
              </Text>
              <Text color="gray.400">{stat.label}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StatsSection;
