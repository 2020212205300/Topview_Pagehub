import { Box, Container, Flex, Button, Text, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Use cases", hasDropdown: true },
    { label: "AI tools", hasDropdown: true },
    { label: "AI Ad Generator", hasDropdown: false, href: "/ai-ad-generator" },
    { label: "Resources", hasDropdown: true },
    { label: "Ad library", hasDropdown: false },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      bg="whiteAlpha.800"
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor="gray.100"
      boxShadow="sm"
      mt="0"
    >
      <Container maxW="container.xl" px="6" h="20">
        <Flex h="full" alignItems="center" justify="space-between">
          {/* Logo */}
          <HStack spacing="3">
            <HStack spacing="2">
              <HStack spacing="0.5">
                <Box w="1" h="6" bg="pink.500" borderRadius="full" />
                <Box w="1" h="6" bg="purple.500" borderRadius="full" />
                <Box w="1" h="6" bg="cyan.400" borderRadius="full" />
              </HStack>
              <Text fontSize="xl" fontWeight="bold" color="gray.900">
                TOPVIEW
              </Text>
            </HStack>
          </HStack>

          {/* Navigation */}
          <HStack as="nav" spacing="1" display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => (
              item.href ? (
                <ChakraLink
                  as={RouterLink}
                  key={item.label}
                  to={item.href}
                  px="4"
                  py="2"
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: "black", textDecoration: "none" }}
                  display="flex"
                  alignItems="center"
                  gap="1"
                >
                  {item.label}
                </ChakraLink>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  color="gray.600"
                  _hover={{ color: "black", bg: "gray.50" }}
                  fontSize="sm"
                  fontWeight="medium"
                  rightIcon={item.hasDropdown ? <Icon as={ChevronDown} w={4} h={4} /> : undefined}
                >
                  {item.label}
                </Button>
              )
            ))}
          </HStack>

          {/* Actions */}
          <HStack spacing="3">
            <Button variant="ghost" color="gray.600" _hover={{ color: "black", bg: "gray.50" }}>
              Sign in
            </Button>
            <Button
              as={ChakraLink}
              href="https://www.topview.ai/"
              isExternal
              bg="black"
              color="white"
              px="6"
              borderRadius="full"
              fontSize="sm"
              _hover={{ bg: "gray.800", textDecoration: "none" }}
            >
              Get started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
