import React, { useState } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

// Components
import SubTeamCard from "@/component/ui/card/sub-team-card.component";
import CustomDrawer from "@/component/ui/drawer/custom-drawer.component";

const SubTeamTabs = ({ subTeams }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabIndexChangeHandler = (val) => {
    setActiveTab(val);
  };

  return (
    <Tabs
      isLazy
      variant="unstyled"
      defaultIndex={0}
      index={activeTab}
      onChange={onTabIndexChangeHandler}
    >
      <TabList
        gap="2"
        flexWrap="wrap"
        justifyContent="center"
        mb="8"
        maxWidth="5xl"
        mx="auto"
        display={{ base: "none", md: "flex" }}
      >
        {subTeams.map((subTeam) => {
          return (
            <Tab
              key={subTeam.title}
              borderColor="gray.500"
              borderRadius="lg"
              borderWidth="1px"
              px="12px"
              py="4px"
              _hover={{ backgroundColor: "sky.blue", color: "#FFF" }}
              _selected={{ backgroundColor: "sky.blue", color: "#FFF" }}
            >
              {subTeam.title}
            </Tab>
          );
        })}
      </TabList>
      <CustomDrawer
        subTeams={subTeams}
        onTabIndexChange={onTabIndexChangeHandler}
      />
      <TabPanels>
        {subTeams.map((subTeam) => {
          return (
            <TabPanel key={subTeam.title} padding="0">
              <SubTeamCard subTeam={subTeam} activeTab={activeTab} />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};
export default SubTeamTabs;
