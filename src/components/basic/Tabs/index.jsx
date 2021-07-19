import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import StakeComponent from "../../StakeComponent";
import UnstakeComponent from "../../UnstakeComponent";

import "./styles.css";

// Refactor to make this component more generic

const TabMenu = ({ tabGroup }) => (
  <Tabs className="tab-menu-body" selectedTabClassName="tab-menu-body-selected">
    <TabList>
      {/* tabGroup.map((tab) => (
        <Tab>{tab}</Tab>
      )) */}
      <Tab className="tab-menu-tab">Stake</Tab>
      <Tab className="tab-menu-tab">Unstake</Tab>
    </TabList>

    <TabPanel>
      <StakeComponent />
    </TabPanel>
    <TabPanel>
      <UnstakeComponent />
    </TabPanel>
  </Tabs>
);

export default TabMenu;
