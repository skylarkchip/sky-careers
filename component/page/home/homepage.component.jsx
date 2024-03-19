import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

// Components
import Layout from "@/component/layout/layout.component";
import SubTeamTabs from "@/component/ui/tabs/sub-team-tabs.component";

const Homepage = ({ team }) => {
  return (
    <Layout>
      <VStack spacing="12">
        <VStack spacing="4" maxWidth="xl" mx="auto">
          <Heading
            as="h1"
            background="sky.lineartext"
            backgroundClip="text"
            fontFamily="heading"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="400"
          >
            {team.subteamsTitle}
          </Heading>
          <Text fontFamily="body" textAlign="center" fontSize="md">
            {team.subTeamsDescription}
          </Text>
        </VStack>
        <SubTeamTabs subTeams={team.subTeamCard} />
      </VStack>
    </Layout>
  );
};

export default Homepage;
