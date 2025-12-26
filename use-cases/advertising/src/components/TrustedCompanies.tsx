import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const companies = [
  "Meta", "TikTok", "Shopify", "Amazon", "Google", "Microsoft",
  "Netflix", "Spotify", "Adobe", "Salesforce",
];

const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

interface TrustedCompaniesProps {
  title?: string;
}

const TrustedCompanies = ({ title = "Trusted by Teams Using AI Video Agent" }: TrustedCompaniesProps) => {
  return (
    <Box as="section" py="16" px="6" borderTop="1px solid" borderColor="whiteAlpha.200">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          textAlign="center"
          color="gray.400"
          fontSize="lg"
          fontWeight="normal"
          mb="10"
        >
          {title}
        </Heading>

        <Box position="relative" overflow="hidden">
          <Box
            display="flex"
            animation={`${slideLeft} 30s linear infinite`}
            width="max-content"
          >
            {[...companies, ...companies].map((company, index) => (
              <Box
                key={index}
                flexShrink="0"
                px="12"
                py="4"
              >
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="whiteAlpha.400"
                  _hover={{ color: "whiteAlpha.600" }}
                  transition="colors 0.2s"
                >
                  {company}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustedCompanies;
