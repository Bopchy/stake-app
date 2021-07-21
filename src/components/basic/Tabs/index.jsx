import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import { TabListComponent, TabComponent } from "./styles";

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
        <TabPanel key={index}>{panel}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabMenu;
