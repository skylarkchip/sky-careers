import React from "react";
import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

const CustomButton = ({ newTab, href, text }) => {
  return (
    <ChakraLink
      as={Link}
      href={href}
      target={newTab ? "_blank" : "_self"}
      role="group"
      _hover={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="2px"
        px="4"
        py="2"
        borderColor="sky.blue"
        borderRadius="md"
        maxWidth="max-content"
        _groupHover={{ backgroundColor: "sky.blue" }}
      >
        <Text fontSize="md" color="sky.blue" _groupHover={{ color: "#FFF" }}>
          {text}
        </Text>
      </Box>
    </ChakraLink>
  );
};

export default CustomButton;
