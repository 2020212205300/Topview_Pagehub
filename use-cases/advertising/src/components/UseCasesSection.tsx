import { Box, Container, Heading, Text, VStack, Icon, Grid, GridItem, Button, Collapse, useDisclosure, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Smartphone, Laptop, Users, Palmtree, Network, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const MotionBox = motion(Box);

const useCases = [
  {
    title: "E-commerce & Product Ads",
    shortDesc: "Transform static Amazon or Shopify product links into high-ROAS video ads instantly.",
    expandedText: {
      description: "Transform static Amazon or Shopify product links into high-ROAS video ads instantly.",
      idealFor: "Dropshipping, DTC brands, and Amazon Sellers.",
      keyFeature: "Uses Nano Banana engine to generate 360° product views and places your item in hyper-realistic lifestyle backgrounds without a studio shoot."
    },
    icon: ShoppingBag,
    color: "#3B82F6"
  },
  {
    title: "Mobile App & Gaming",
    shortDesc: "Lower your CPI (Cost Per Install) with high-octane gameplay trailers and UGC-style reviews.",
    expandedText: {
      description: "Lower your CPI (Cost Per Install) with high-octane gameplay trailers and UGC-style reviews.",
      idealFor: "Mobile Game Developers, Utility Apps.",
      keyFeature: "Create Rewarded Video ads and Interstitial creatives that capture gamers' attention instantly."
    },
    icon: Smartphone,
    color: "#22D3EE"
  },
  {
    title: "SaaS & Software Demos",
    shortDesc: "Explain complex software simply. Turn screen recordings into engaging feature walkthroughs.",
    expandedText: {
      description: "Explain complex software simply. Turn screen recordings into engaging feature walkthroughs that drive sign-ups.",
      idealFor: "B2B Platforms, Tech Startups.",
      keyFeature: "Automated voiceovers clarify value propositions without the need for expensive motion graphics teams."
    },
    icon: Laptop,
    color: "#D946EF"
  },
  {
    title: "UGC & AI Avatar Ads",
    shortDesc: "Generate authentic, native-feeling UGC using AI Avatars to build trust and drive engagement.",
    expandedText: {
      description: "Generate authentic, native-feeling \"User Generated Content\" using AI Avatars. Build trust and drive engagement on social feeds.",
      idealFor: "TikTok Shops, Instagram Reels, Social Proof.",
      keyFeature: "Access diverse AI avatars that speak any language with perfect lip-sync, eliminating casting costs."
    },
    icon: Users,
    color: "#FACC15"
  },
  {
    title: "Real Estate & Travel Tours",
    shortDesc: "Sell the destination, not just the booking. Create immersive virtual tours and scenic reels.",
    expandedText: {
      description: "Sell the destination, not just the booking. Create immersive virtual tours and scenic highlight reels.",
      idealFor: "Real Estate Agents, Travel Agencies, Airbnb Hosts.",
      keyFeature: "Smooth transitions and aspirational AI voiceovers turn static property photos into cinematic experiences."
    },
    icon: Palmtree,
    color: "#4ADE80"
  },
  {
    title: "Affiliate & Network Ads",
    shortDesc: "Scale high-volume ad variations for affiliate networks and performance channels.",
    expandedText: {
      description: "Scale high-volume ad variations for affiliate networks and performance channels to combat ad fatigue.",
      idealFor: "Affiliate Marketers, CPA Networks.",
      keyFeature: "Use the URL-to-Video Remix tool to generate 50+ unique variations of a winning creative in minutes for A/B testing."
    },
    icon: Network,
    color: "#FB923C"
  }
];

const UseCaseCard = ({ useCase, index }: { useCase: any, index: number }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <GridItem>
      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        height="100%"
        bg="whiteAlpha.50"
        borderRadius="40px"
        border="1px solid"
        borderColor={isOpen ? "purple.400" : "whiteAlpha.100"}
        overflow="hidden"
        _hover={{ borderColor: isOpen ? "purple.400" : "whiteAlpha.300" }}
        display="flex"
        flexDirection="column"
      >
        <VStack align="start" spacing={0} flex={1}>
          {/* Visual Content */}
          <Box 
            w="100%" 
            position="relative" 
            overflow="hidden"
            height={isOpen ? "200px" : "400px"}
          >
            <Box
              position="absolute"
              inset="0"
              bg="whiteAlpha.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={useCase.icon} w={16} h={16} color="whiteAlpha.200" />
              <Box
                position="absolute"
                inset="0"
                bgGradient="linear(to-b, transparent 0%, blackAlpha.700 100%)"
              />
            </Box>
          </Box>

          {/* Text Content */}
          <VStack align="start" spacing={3} p={5} w="100%" bg="transparent" flex={1} justifyContent="space-between">
            <Box w="100%">
              <Heading as="h3" fontSize="22px" color="white" fontWeight="800" letterSpacing="-0.02em">
                {useCase.title}
              </Heading>
              
              <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.5" mt={3}>
                {useCase.shortDesc}
              </Text>

              {isOpen && (
                <VStack align="start" spacing={4} pt={4} w="100%">
                  <Stack direction="row" align="start" spacing={3}>
                    <Icon as={CheckCircle2} w={3.5} h={3.5} color="purple.400" mt={1} />
                    <Box>
                      <Text color="white" fontWeight="700" fontSize="xs" mb={1}>Ideal for:</Text>
                      <Text color="whiteAlpha.600" fontSize="xs">{useCase.expandedText.idealFor}</Text>
                    </Box>
                  </Stack>

                  <Stack direction="row" align="start" spacing={3} bg="whiteAlpha.100" p={3} borderRadius="16px" border="1px solid" borderColor="whiteAlpha.200">
                    <Icon as={Sparkles} w={3.5} h={3.5} color="yellow.400" mt={1} />
                    <Box>
                      <Text color="white" fontWeight="700" fontSize="xs" mb={1}>Key Feature:</Text>
                      <Text color="whiteAlpha.700" fontSize="xs" lineHeight="1.4">{useCase.expandedText.keyFeature}</Text>
                    </Box>
                  </Stack>
                </VStack>
              )}
            </Box>

            <Button
              variant="unstyled"
              display="flex"
              alignItems="center"
              color="purple.400"
              fontSize="xs"
              fontWeight="bold"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              _hover={{ color: "purple.300" }}
              h="auto"
              minH="0"
              mt={4}
            >
              <Stack direction="row" align="center" spacing={2}>
                <Text>{isOpen ? "Show Less" : "Learn More"}</Text>
                <Icon as={isOpen ? ChevronUp : ChevronDown} w={3} h={3} />
              </Stack>
            </Button>
          </VStack>
        </VStack>
      </MotionBox>
    </GridItem>
  );
};

const UseCasesSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="transparent">
      <Container maxW="1400px">
        <VStack spacing={16} align="stretch">
          <VStack spacing={6} align="center" textAlign="center" mx="auto" maxW="4xl">
            <Text
              color="purple.400"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Advertising Types
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "72px" }}
              fontWeight="800"
              color="white"
              lineHeight="1.1"
              letterSpacing="-0.04em"
            >
              Create Winning Video Ads for Any Industry
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.700" lineHeight="1.6">
              Specialized workflows for E-commerce, Mobile Gaming, SaaS, and Real Estate marketing.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
          >
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default UseCasesSection;
