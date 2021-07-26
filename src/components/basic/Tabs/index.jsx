import React from "react";
import { Tabs } from "react-tabs";
import { TabListComponent, TabComponent, TabPanelComponent } from "./styles";

const TabMenu = ({ tabGroup, panelGroup }) => {
  // Panels are rendered according to their index in panelGroup
  return (
    <Tabs>
      <TabListComponent>
        {tabGroup.map((tab) => (
          <TabComponent key={tab}>{tab}</TabComponent>
        ))}
      </TabListComponent>
      {panelGroup.map((panel, index) => (
        <TabPanelComponent key={index}>{panel}</TabPanelComponent>
      ))}
    </Tabs>
  );
};

export default TabMenu;
