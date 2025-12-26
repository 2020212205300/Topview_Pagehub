import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Badge, Stack, Avatar } from "@chakra-ui/react";
import { TrendingUp, ShoppingBag, Building2, Palette, Globe, Quote as QuoteIcon, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const audiences = [
    {
        title: "Marketers & Growth Teams",
        description: "Scale hypothesis testing and speed up creative iteration.",
        persona: "“Test 50 creatives in the time it takes to brief one video.”",
        role: "For Growth Marketers",
        icon: TrendingUp,
        color: "blue.400",
    },
    {
        title: "E-commerce Sellers & DTC Brands",
        description: "Turn SKUs into ready-to-run ad sets in minutes.",
        persona: "“Upload a SKU and get shopping-ready ads.”",
        role: "For Sellers",
        icon: ShoppingBag,
        color: "orange.400",
    },
    {
        title: "Agencies",
        description: "Cut turnaround time and bill more clients with the same creative team.",
        persona: "“White-label outputs and team management ready.”",
        role: "For Agencies",
        icon: Building2,
        color: "purple.400",
    },
    {
        title: "Designers & Video Producers",
        description: "Automate repetitive builds and focus on strategy/quality.",
        persona: "“Automate the tedious parts, focus on the creative vision.”",
        role: "For Creatives",
        icon: Palette,
        color: "pink.400",
    },
    {
        title: "Dropshippers & Affiliates",
        description: "Produce high-volume variants for global campaigns.",
        persona: "“Mass-produce high-converting variants for every platform.”",
        role: "For Growth Pros",
        icon: Globe,
        color: "green.400",
    },
    {
        title: "Social Media Managers",
        description: "Maintain a consistent posting schedule with high-quality, trending video content.",
        persona: "“Keep your feed fresh without spending all day in the editing suite.”",
        role: "For Content Managers",
        icon: Share2,
        color: "teal.400",
    },
];

const TargetAudiences = () => {
    return (
        <Box as="section" py="24" bg="black" position="relative">
            <Container maxW="container.xl">
                <Box textAlign="center" mb="20">
                    <Badge
                        px="3"
                        py="1"
                        borderRadius="full"
                        bg="whiteAlpha.100"
                        color="brand.400"
                        mb="4"
                        textTransform="none"
                        letterSpacing="wide"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                    >
                        Target Users
                    </Badge>
                    <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
                        Who <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Benefits Most</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        From small businesses to large global brands, everyone is scaling with Topview Video Agent
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                    {audiences.map((item, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="rgba(255, 255, 255, 0.02)"
                            borderRadius="3xl"
                            p="8"
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            _hover={{
                                borderColor: item.color,
                                bg: "rgba(255, 255, 255, 0.04)",
                                transform: "translateY(-8px)"
                            }}
                            transitionProperty="all"
                            transitionDuration="0.3s"
                            display="flex"
                            flexDirection="column"
                            position="relative"
                            overflow="hidden"
                        >
                            <Stack spacing="6" flex="1">
                                <Flex justifyContent="space-between" alignItems="center">
                                    <Flex
                                        w="12"
                                        h="12"
                                        borderRadius="xl"
                                        bg="whiteAlpha.100"
                                        alignItems="center"
                                        justifyContent="center"
                                        border="1px solid"
                                        borderColor="whiteAlpha.100"
                                    >
                                        <Icon as={item.icon} w={6} h={6} color={item.color} />
                                    </Flex>
                                    <Box
                                        px="3"
                                        py="1"
                                        borderRadius="full"
                                        bg={`${item.color}15`}
                                        color={item.color}
                                        fontSize="xs"
                                        fontWeight="bold"
                                        letterSpacing="wider"
                                    >
                                        {item.role || "Professional"}
                                    </Box>
                                </Flex>

                                <Box>
                                    <Heading as="h3" size="md" color="white" fontWeight="bold" mb="3">
                                        {item.title}
                                    </Heading>
                                    <Text color="gray.400" fontSize="md" lineHeight="tall">
                                        {item.description}
                                    </Text>
                                </Box>

                                {item.persona && (
                                    <Box
                                        mt="4"
                                        p="5"
                                        bg={`${item.color}10`}
                                        borderRadius="2xl"
                                        borderLeft="4px solid"
                                        borderColor={item.color}
                                    >
                                        <Icon as={QuoteIcon} w={4} h={4} color={item.color} mb="2" opacity="0.6" />
                                        <Text color="gray.200" fontSize="sm" fontStyle="italic" fontWeight="medium">
                                            {item.persona}
                                        </Text>
                                    </Box>
                                )}

                                {!item.persona && (
                                    <Box
                                        mt="auto"
                                        pt="4"
                                        borderRadius="2xl"
                                        height="100px"
                                        bg="whiteAlpha.100"
                                        border="1px dashed"
                                        borderColor="whiteAlpha.200"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Text color="whiteAlpha.300" fontSize="xs">Use Case Visualization Placeholder</Text>
                                    </Box>
                                )}
                            </Stack>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default TargetAudiences;
