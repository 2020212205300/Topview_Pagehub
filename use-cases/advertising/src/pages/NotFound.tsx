import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center" bg="gray.900">
      <Box textAlign="center">
        <Heading as="h1" size="4xl" fontWeight="bold" mb="4" color="white">
          404
        </Heading>
        <Text fontSize="xl" color="gray.400" mb="4">
          Oops! Page not found
        </Text>
        <Link href="/" color="brand.500" textDecoration="underline" _hover={{ color: "brand.400" }}>
          Return to Home
        </Link>
      </Box>
    </Flex>
  );
};

export default NotFound;
