import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const CustomDrawer = ({ subTeams, onTabIndexChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [buttonText, setButtonText] = useState("");

  const onButtonClickHandler = (title, idx) => {
    onTabIndexChange(idx);
    setButtonText(title);
    onClose();
  };

  return (
    <Box display={{ base: "block", md: "none" }} mb="8">
      <Button
        alignItems="center"
        borderColor="sky.blue"
        borderWidth="thin"
        display="flex"
        gap="4"
        fontSize="md"
        fontWeight="500"
        py="2"
        ref={btnRef}
        rounded="md"
        width="full"
        onClick={onOpen}
        _hover={{ backgroundColor: "sky.blue", color: "#FFF" }}
      >
        {buttonText ? buttonText : "Select a sub-team"}
        <LuChevronDown fontSize="18" />
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent px="4">
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            borderBottomColor="black"
            px="0"
          >
            Select a sub-team
          </DrawerHeader>
          <DrawerBody px="0">
            <VStack
              spacing="2"
              justifyContent="flex-start"
              width="full"
              py="4"
              divider={<Divider />}
            >
              {subTeams.map((subTeam, idx) => {
                return (
                  <Text
                    key={subTeam.title}
                    fontSize="sm"
                    p="0"
                    textAlign="left"
                    width="100%"
                    onClick={() => onButtonClickHandler(subTeam.title, idx)}
                    _hover={{ backgroundColor: "unset", color: "sky.blue" }}
                  >
                    {subTeam.title}
                  </Text>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
