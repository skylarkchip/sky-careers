import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const CustomVideoPlayer = ({ video, placeholder, label, activeTab }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(false);
  }, [activeTab]);

  return (
    <Box flex="1">
      {play ? (
        <Box width="100%" height={{ base: "200px", md: "100%" }}>
          <ReactPlayer
            url={video.url}
            playing={play}
            height="100%"
            width="100%"
          />
        </Box>
      ) : (
        <Box
          width="100%"
          height={{ base: "200px", md: "100%" }}
          position="relative"
          overflow="hidden"
        >
          <Image
            src={placeholder.url}
            alt={placeholder.alt}
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            position="absolute"
          />
          <Button
            variant="ghost"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="2"
            role="group"
            onClick={setPlay}
            _hover={{ backgroundColor: "transparent" }}
          >
            <Flex alignItems="center" position="relative">
              <Image
                src="/images/play-button.png"
                alt="play button"
                width="20"
                height="20"
                position="absolute"
                zIndex={2}
                left="0"
              />
              <Box
                backgroundColor="rgba(255, 255, 255, 0.4)"
                backdropFilter="blur(5px)"
                pr="4"
                pl="8"
                py="4"
                height="max"
                ml="3.5rem"
                rounded="lg"
                _groupHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              >
                <Text color="#FFF">{label}</Text>
              </Box>
            </Flex>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CustomVideoPlayer;
