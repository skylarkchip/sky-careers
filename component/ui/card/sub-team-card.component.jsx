import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

// Components
import CustomButton from "@/component/ui/button/custom-button.component";
import CustomVideoPlayer from "@/component/ui/video/custom-video-player.component";

const SubTeamCard = ({ subTeam, activeTab }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      shadow="md"
      borderRadius="md"
      backgroundColor="#FFF"
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "8px",
        backgroundImage:
          "linear-gradient(90deg, sky.orange 0%, sky.red 20%, sky.pink 40%, 60%, sky.blue 80%, sky.azure 100%)",
      }}
    >
      <CardBody p="0" overflow="hidden">
        <Flex flexDirection={{ base: "column", md: "row" }} gap="4">
          <VStack
            spacing="10"
            px={{ base: "6", md: "8" }}
            pt={{ base: "6", md: "12" }}
            pb={{ base: "6", md: "14" }}
            align="left"
            flex="1"
          >
            <VStack width="full" align="left" spacing="4">
              <Heading
                as="h2"
                background="sky.lineartext"
                backgroundClip="text"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="400"
              >
                {subTeam.title}
              </Heading>
              <Text py="2" fontSize="md" color="gray.500">
                {subTeam.body}
              </Text>
            </VStack>
            <CustomButton
              href={subTeam.cta[0].href}
              newTab={subTeam.cta[0].newTab}
              text={subTeam.cta[0].text}
            />
          </VStack>
          {subTeam.video[0]?.video ? (
            <CustomVideoPlayer
              video={subTeam.video[0].video}
              placeholder={subTeam.video[0].placeholder}
              label={subTeam.video[0].label}
              activeTab={activeTab}
            />
          ) : (
            <Box flex="1">
              <Image
                src={subTeam.video[0].placeholder.url}
                alt={subTeam.video[0].placeholder.alt}
                objectFit="cover"
                objectPosition="center"
                width="100%"
                height="100%"
              />
            </Box>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SubTeamCard;
