import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Badge, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaGoogle } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const MotionBox = motion(Box);

const platforms = [
    {
        name: "Google Ads",
        subtext: "YouTube + Discovery",
        icon: FaGoogle,
        color: "#4285F4",
        specs: ["Auto-duration", "Safe zones", "TrueView specs"]
    },
    {
        name: "Meta",
        subtext: "Feed, Reels, Stories",
        icon: FaFacebook,
        color: "#0668E1",
        specs: ["9:16 / 4:5 / 1:1", "Caption sync", "Reels safe area"]
    },
    {
        name: "TikTok Ads",
        subtext: "For You Feed",
        icon: FaTiktok,
        color: "#FFFFFF",
        specs: ["Sound-on focus", "Safe zones", "Native text styles"]
    },
    {
        name: "YouTube Shorts",
        subtext: "& In-stream",
        icon: FaYoutube,
        color: "#FF0000",
        specs: ["Vertical optimization", "Thumbnail generation", "CTA overlays"]
    },
    {
        name: "LinkedIn Ads",
        subtext: "Sponsored Content",
        icon: FaLinkedin,
        color: "#0A66C2",
        specs: ["B2B framing", "Professional captions", "High-res export"]
    }
];

const NativeExports = () => {
    return (
        <Box as="section" py="24" bg="black" position="relative" overflow="hidden">
            {/* Background Decorative Gradients */}
            <Box
                position="absolute"
                top="-10%"
                right="-5%"
                w="40%"
                h="40%"
                bgGradient="radial(circle, rgba(164, 161, 255, 0.08) 0%, transparent 70%)"
                pointerEvents="none"
                zIndex="0"
            />
            
            <Container maxW="container.xl" position="relative" zIndex="1">
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
                        Publishing & Export
                    </Badge>
                    <Heading as="h2" size="2xl" fontWeight="bold" mb="6">
                        Native Exports & <Text as="span" bgGradient="linear(to-r, #4285F4, #0668E1, #FF0000)" bgClip="text">Direct Publishing</Text>
                    </Heading>
                    <Text color="gray.400" fontSize="lg" maxW="2xl" mx="auto">
                        Each export is automatically adapted to the platform’s specs (duration, safe area, captions, CTA formats).
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing="6">
                    {platforms.map((platform, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="rgba(255, 255, 255, 0.03)"
                            borderRadius="2xl"
                            p="6"
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            _hover={{
                                borderColor: platform.color,
                                bg: "rgba(255, 255, 255, 0.06)",
                                transform: "translateY(-5px)"
                            }}
                            transitionProperty="all"
                            transitionDuration="0.3s"
                        >
                            <Flex direction="column" h="full">
                                <Flex 
                                    w="12" 
                                    h="12" 
                                    borderRadius="xl" 
                                    bg="whiteAlpha.100" 
                                    alignItems="center" 
                                    justifyContent="center" 
                                    mb="4"
                                    color={platform.color}
                                >
                                    <Icon as={platform.icon} w={6} h={6} />
                                </Flex>
                                
                                <Heading size="md" mb="1" color="white">
                                    {platform.name}
                                </Heading>
                                <Text fontSize="xs" color="gray.500" mb="6">
                                    {platform.subtext}
                                </Text>

                                <Stack spacing="2" mt="auto">
                                    {platform.specs.map((spec, sIdx) => (
                                        <Flex key={sIdx} alignItems="center" gap="2">
                                            <Icon as={CheckCircle2} w={3} h={3} color="brand.400" />
                                            <Text fontSize="xs" color="gray.400">{spec}</Text>
                                        </Flex>
                                    ))}
                                </Stack>
                            </Flex>
                        </MotionBox>
                    ))}
                </SimpleGrid>

            </Container>
        </Box>
    );
};

export default NativeExports;
