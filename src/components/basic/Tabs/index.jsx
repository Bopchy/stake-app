import React from "react";
import styled, { css } from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StakeComponent from "../../StakeComponent";
// styles
// import { H5Header } from "../Text"; -- add H5 styles via css``
import { POPPINS_BOLD } from "../../../utils/fonts";
import {
  OFF_WHITE,
  PRIMARY_DEFAULT,
  GRAYSCALE_BODY,
  GRAYSCALE_TITLE_ACTIVE,
} from "../../../utils/colors";

// Refactor to make this component more generic

const TabListComponent = styled(TabList)`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  gap: 1.875rem;
  margin: 0 0 1.25rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${GRAYSCALE_TITLE_ACTIVE};
`;

const TabComponent = styled(Tab)`
  ${POPPINS_BOLD}
  cursor: pointer;
  color: ${GRAYSCALE_BODY};
  font-size: 1.25rem;
  line-height: 2.1875rem;
  padding: 0 0 0.625rem 0;
  width: 6.25rem;
  text-align: center;

  &.tab-menu-body-selected {
    color: ${OFF_WHITE};
    border-bottom: 0.1875rem solid ${PRIMARY_DEFAULT};
  }
`;

const TabMenu = ({ tabGroup }) => (
  <Tabs className="tab-menu-body" selectedTabClassName="tab-menu-body-selected">
    <TabListComponent>
      {/* tabGroup.map((tab) => (
        <Tab>{tab}</Tab>
      )) */}
      <TabComponent>Stake</TabComponent>
      <TabComponent>Unstake</TabComponent>
    </TabListComponent>

    <TabPanel>
      <StakeComponent />
    </TabPanel>
    <TabPanel>
      <StakeComponent />
    </TabPanel>
  </Tabs>
);

export default TabMenu;
