import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Badge, AspectRatio, Stack } from "@chakra-ui/react";
import { Video, ShoppingBag, Users, Smartphone, Share2, Network, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const formats = [
    {
        title: "Video Ads",
        description: "15s/30s/60s brand and performance videos optimized for conversion.",
        useCase: "Brand Discovery & Performance",
        icon: Video,
        color: "blue.400",
    },
    {
        title: "Product Ads",
        description: "Detail shots, 360° mockups, feature highlights for shopping campaigns.",
        useCase: "E-commerce & Listings",
        icon: ShoppingBag,
        color: "pink.400",
    },
    {
        title: "UGC Video Ads",
        description: "Native-feeling user testimonials, reviews, and influencer-style clips.",
        useCase: "Trust & Social Proof",
        icon: Users,
        color: "purple.400",
    },
    {
        title: "App/Software Ads",
        description: "Walkthroughs, feature callouts, store page previews.",
        useCase: "SaaS & Mobile Apps",
        icon: Smartphone,
        color: "cyan.400",
    },
    {
        title: "Social Media Ads",
        description: "Vertical short-form creatives for Reels, Shorts, TikTok and Stories.",
        useCase: "Viral & Organic Reach",
        icon: Share2,
        color: "orange.400",
    },
    {
        title: "Affiliate Network Ads",
        description: "Lightweight, high-volume variants for affiliate channels and native networks.",
        useCase: "Scale & Distribution",
        icon: Network,
        color: "green.400",
    },
];

const AdFormats = () => {
    return (
        <Box as="section" py="24" bg="black" position="relative" overflow="hidden">
            <Container maxW="container.xl">
                <Box textAlign="center" mb="16">
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
                        Endless Possibilities
                    </Badge>
                    <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
                        What You Can <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Generate</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        Ad formats we produce (examples & use cases)
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
                    {formats.map((format, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="whiteAlpha.50"
                            borderRadius="3xl"
                            p="1"
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            _hover={{ borderColor: "whiteAlpha.300", transform: "translateY(-4px)" }}
                            transitionProperty="all"
                            transitionDuration="0.3s"
                        >
                            <Box p="6">
                                {/* Gray Placeholder for Image/Video */}
                                <AspectRatio ratio={16 / 9} mb="6">
                                    <Box
                                        bg="whiteAlpha.100"
                                        borderRadius="2xl"
                                        border="1px dashed"
                                        borderColor="whiteAlpha.200"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        flexDirection="column"
                                        gap="2"
                                    >
                                        <Icon as={format.icon} w={8} h={8} color="whiteAlpha.300" />
                                        <Text color="whiteAlpha.400" fontSize="xs" fontWeight="medium">
                                            Preview Placeholder
                                        </Text>
                                    </Box>
                                </AspectRatio>

                                <Stack spacing="4">
                                    <Flex alignItems="center" gap="3">
                                        <Flex
                                            w="10"
                                            h="10"
                                            borderRadius="xl"
                                            bgGradient={`linear(to-br, ${format.color}, transparent)`}
                                            alignItems="center"
                                            justifyContent="center"
                                            opacity="0.8"
                                        >
                                            <Icon as={format.icon} w={5} h={5} color="white" />
                                        </Flex>
                                        <Heading as="h3" size="md" color="white" fontWeight="bold">
                                            {format.title}
                                        </Heading>
                                    </Flex>

                                    <Text color="gray.400" fontSize="sm" lineHeight="tall">
                                        {format.description}
                                    </Text>

                                    <Flex alignItems="center" gap="2" pt="2">
                                        <Box boxSize="1.5" borderRadius="full" bg={format.color} />
                                        <Text color="whiteAlpha.600" fontSize="xs" fontWeight="semibold" letterSpacing="wider" textTransform="uppercase">
                                            {format.useCase}
                                        </Text>
                                    </Flex>
                                </Stack>
                            </Box>
                        </MotionBox>
                    ))}
                </SimpleGrid>

                <Box
                    mt="16"
                    p="6"
                    borderRadius="2xl"
                    bg="rgba(78, 64, 243, 0.05)"
                    border="1px solid"
                    borderColor="brand.900"
                    textAlign="center"
                >
                    <Flex alignItems="center" justifyContent="center" gap="3">
                        <Icon as={CheckCircle2} color="brand.400" w={5} h={5} />
                        <Text color="gray.300" fontSize="md">
                            For each format, Topview outputs <strong>multiple variants</strong> (text, CTA, thumbnail) for A/B testing.
                        </Text>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default AdFormats;
