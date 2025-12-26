import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Avatar, Flex, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const MotionBox = motion(Box);

interface Metric {
  value: string;
  label: string;
}

interface SocialProofProps {
  testimonial: string;
  authorName: string;
  authorTitle: string;
  authorAvatar?: string;
  metrics: Metric[];
  isReversed?: boolean;
  caseStudyUrl?: string;
  pt?: any;
  pb?: any;
}

const SocialProof = ({ testimonial, authorName, authorTitle, authorAvatar, metrics, isReversed, caseStudyUrl, pt, pb }: SocialProofProps) => {
  return (
    <Box as="section" pt={pt ?? { base: 20, md: 32 }} pb={pb ?? { base: 20, md: 32 }} bg="transparent">
      <Container maxW="1400px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          bg="whiteAlpha.50"
          borderRadius="60px"
          p={{ base: 10, md: 20 }}
          border="1px solid"
          borderColor="whiteAlpha.100"
          position="relative"
          overflow="hidden"
        >
          <VStack spacing={12} align="stretch">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 24 }} alignItems="center">
              {/* Testimonial Side */}
              <VStack 
                align="start" 
                spacing={10} 
                order={{ base: 2, lg: isReversed ? 2 : 1 }}
              >
                <Box color="purple.400">
                  <Quote size={48} fill="currentColor" />
                </Box>
                
                <Text 
                  fontSize={{ base: "xl", md: "32px" }} 
                  color="white" 
                  fontWeight="600" 
                  lineHeight="1.4"
                  letterSpacing="-0.02em"
                >
                  "{testimonial}"
                </Text>

                <HStack spacing={4}>
                  <Avatar 
                    size="lg" 
                    name={authorName} 
                    src={authorAvatar} 
                    bgGradient="linear(to-br, blue.400, purple.500)"
                  />
                  <VStack align="start" spacing={0}>
                    <Text color="white" fontWeight="bold" fontSize="lg">{authorName}</Text>
                    <Text color="whiteAlpha.600" fontSize="md">{authorTitle}</Text>
                  </VStack>
                </HStack>
              </VStack>

              {/* Metrics Side */}
              <Box 
                pl={!isReversed ? { lg: 12 } : 0}
                pr={isReversed ? { lg: 12 } : 0}
                borderLeft={!isReversed ? { lg: "1px solid" } : "none"}
                borderRight={isReversed ? { lg: "1px solid" } : "none"}
                borderColor={{ lg: "whiteAlpha.200" }}
                order={{ base: 1, lg: isReversed ? 1 : 2 }}
              >
                <VStack align="stretch" spacing={12}>
                <VStack align="stretch" spacing={10}>
                  {metrics.map((metric, index) => (
                      <Flex 
                        key={index}
                        justify="space-between" 
                        align="center" 
                        pb={index !== metrics.length - 1 ? 6 : 0} 
                        borderBottom={index !== metrics.length - 1 ? "1px solid" : "none"} 
                        borderColor="whiteAlpha.100"
                      >
                        <Text 
                          fontSize="64px" 
                          fontWeight="800" 
                          bgGradient="linear(to-r, purple.400, blue.400)" 
                          bgClip="text" 
                          lineHeight="1"
                        >
                          {metric.value}
                        </Text>
                        <Text fontSize="lg" color="whiteAlpha.700" fontWeight="600" textAlign="right" maxW="200px">
                          {metric.label}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </SimpleGrid>

            {caseStudyUrl && (
              <Flex justify="center" pt={4}>
                <Button
                  as={Link}
                  href={caseStudyUrl}
                  isExternal
                  variant="outline"
                  colorScheme="purple"
                  color="white"
                  size="lg"
                  height="60px"
                  px={10}
                  borderRadius="full"
                  fontSize="lg"
                  fontWeight="bold"
                  rightIcon={<ArrowRight size={20} />}
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(128, 90, 213, 0.2)",
                    textDecoration: "none"
                  }}
                  transition="all 0.3s"
                >
                  Read the Full Case Study
                </Button>
              </Flex>
            )}
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default SocialProof;
