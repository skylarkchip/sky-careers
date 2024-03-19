import React from "react";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex
      backgroundColor="sky.white"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      py="24"
    >
      <Container maxWidth="7xl" mx="auto">
        {children}
      </Container>
    </Flex>
  );
};

export default Layout;
