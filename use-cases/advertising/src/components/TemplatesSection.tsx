import { useState } from "react";
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, Icon, Flex, Link } from "@chakra-ui/react";
import { ArrowRight, Play } from "lucide-react";

const tabs = [
  { id: "all", label: "All" },
  { id: "video-agent", label: "Video Agent" },
  { id: "avatar", label: "Avatar" },
  { id: "product-avatar", label: "Product Avatar" },
  { id: "viral-hooks", label: "Viral Hooks" },
];

const templates = [
  {
    title: "Noodle Avalanche",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
  },
  {
    title: "Product Spotlight",
    category: "video-agent",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    title: "Digital Avatar Host",
    category: "avatar",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop",
  },
  {
    title: "Vacuuming Gorilla",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=300&fit=crop",
  },
  {
    title: "Product Demo Scene",
    category: "product-avatar",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    title: "Brand Storyteller",
    category: "video-agent",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
  },
  {
    title: "Virtual Presenter",
    category: "avatar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  },
  {
    title: "Giant Sneaker Jesus",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
];

const TemplatesSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTemplates =
    activeTab === "all"
      ? templates
      : templates.filter((t) => t.category === activeTab);

  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.xl">
        {/* Header */}
        <Box textAlign="center" mb="8">
          <Heading as="h2" size="2xl" fontWeight="bold" mb="4">
            Video Templates Created by{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              AI Agent
            </Text>
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
            Browse templates and start creating in seconds
          </Text>
        </Box>

        {/* Tab Navigation */}
        <Flex justify="center" gap="2" mb="10" overflowX="auto" pb="2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "solid" : "ghost"}
              bg={activeTab === tab.id ? "brand.500" : "whiteAlpha.100"}
              color={activeTab === tab.id ? "white" : "gray.400"}
              _hover={{
                bg: activeTab === tab.id ? "brand.600" : "whiteAlpha.200",
                color: "white",
              }}
              size="sm"
              borderRadius="full"
              px="5"
            >
              {tab.label}
            </Button>
          ))}
        </Flex>

        {/* Templates Grid */}
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={{ base: 4, md: 6 }}>
          {filteredTemplates.map((template, index) => (
            <Box
              key={index}
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              bg="gray.900"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.3s"
              cursor="pointer"
              role="group"
            >
              <Box aspectRatio="4/3">
                <Image
                  src={template.image}
                  alt={template.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
              <Box
                position="absolute"
                inset="0"
                bgGradient="linear(to-t, blackAlpha.800, transparent, transparent)"
              />
              <Box position="absolute" bottom="0" left="0" right="0" p="4">
                <Text color="white" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                  {template.title}
                </Text>
              </Box>
              <Flex
                position="absolute"
                top="3"
                right="3"
                w="8"
                h="8"
                borderRadius="full"
                bg="blackAlpha.600"
                backdropFilter="blur(4px)"
                alignItems="center"
                justifyContent="center"
                opacity="0"
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.2s"
              >
                <Icon as={Play} w={4} h={4} color="white" fill="white" />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* See All Button */}
        <Box textAlign="center" mt="10">
          <Button
            as={Link}
            href="https://www.topview.ai/"
            isExternal
            variant="outline"
            size="lg"
            rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
            _hover={{ bg: "whiteAlpha.100", textDecoration: "none" }}
          >
            See All Templates
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TemplatesSection;
