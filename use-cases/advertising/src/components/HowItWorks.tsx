import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, List, ListItem, ListIcon, Badge, Image } from "@chakra-ui/react";
import { Search, Upload, BarChart3, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
    {
        number: "01",
        title: "Match & Learn from 10M+ Ads",
        description: "Topview searches a curated 10 million ad database to find templates, hooks and editing structures that have proven performance for your product category.",
        icon: Search,
        color: "blue.400",
    },
    {
        number: "02",
        title: "Upload & Generate",
        description: "Paste your product URL or upload an image, choose a style (Replica / UGC / Product Shoot / App Demo), and let the Agent:",
        subPoints: [
            "replicate the best ad structure and pacing,",
            "generate an AI UGC avatar or photorealistic product scene,",
            "apply creative hooks (Sora2 / Veo3) and produce multiple aspect ratios.",
        ],
        icon: Upload,
        color: "purple.400",
    },
    {
        number: "03",
        title: "Publish & Optimize",
        description: "Export or one-click publish multi-variant creatives to Google, Meta, TikTok, YouTube and LinkedIn. Topview then collects campaign KPIs and recommends creative optimizations to improve CTR, CVR and ROAS.",
        icon: BarChart3,
        color: "green.400",
    },
];

const HowItWorks = () => {
    return (
        <Box as="section" py="24" position="relative" overflow="hidden">
            {/* Background Glow */}
            <Box
                position="absolute"
                top="20%"
                left="50%"
                transform="translateX(-50%)"
                w="70%"
                h="40%"
                bgGradient="radial(brand.900, transparent)"
                filter="blur(120px)"
                opacity="0.3"
                zIndex="0"
            />

            <Container maxW="container.xl" position="relative" zIndex="1">
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
                        Efficiency Redefined
                    </Badge>
                    <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
                        How It <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Works</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        From data-driven insights to high-performing creatives in three simple steps.
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing="10">
                    {steps.map((step, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            position="relative"
                            p="8"
                            borderRadius="3xl"
                            bg="rgba(255, 255, 255, 0.03)"
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            _hover={{
                                bg: "rgba(255, 255, 255, 0.05)",
                                borderColor: "whiteAlpha.300",
                                transform: "translateY(-5px)",
                            }}
                            transitionProperty="all"
                            transitionDuration="0.3s"
                            transitionTimingFunction="ease"
                        >
                            {/* Step Number */}
                            <Text
                                position="absolute"
                                top="4"
                                right="8"
                                fontSize="6xl"
                                fontWeight="black"
                                color="whiteAlpha.100"
                                lineHeight="1"
                                userSelect="none"
                            >
                                {step.number}
                            </Text>

                            {/* Icon */}
                            <Flex
                                w="14"
                                h="14"
                                borderRadius="2xl"
                                bgGradient={`linear(to-br, ${step.color}, transparent)`}
                                alignItems="center"
                                justifyContent="center"
                                mb="6"
                                boxShadow="xl"
                            >
                                <Icon as={step.icon} w={6} h={6} color="white" />
                            </Flex>

                            <Box
                                mb="6"
                                borderRadius="2xl"
                                height="180px"
                                bg="whiteAlpha.100"
                                border="1px dashed"
                                borderColor="whiteAlpha.300"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text color="whiteAlpha.400" fontSize="sm">Placeholder Image</Text>
                            </Box>

                            <Heading as="h3" size="md" color="white" mb="4" fontWeight="bold">
                                {step.title}
                            </Heading>

                            <Text color="gray.400" fontSize="md" mb={step.subPoints ? "4" : "0"} lineHeight="tall">
                                {step.description}
                            </Text>

                            {step.subPoints && (
                                <List spacing={3}>
                                    {step.subPoints.map((point, idx) => (
                                        <ListItem key={idx} color="gray.400" fontSize="sm" display="flex" alignItems="start">
                                            <ListIcon as={Sparkles} color="brand.400" mt="1" />
                                            <Text>{point}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default HowItWorks;
