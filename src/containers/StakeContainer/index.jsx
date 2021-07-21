import React from "react";
import { H3Header, RegularText } from "../../components/basic/Text";
import TabMenu from "../../components/basic/Tabs";
import Layout from "../../components/basic/Layout";
import StakeComponent from "../../components/StakeComponent";

const StakeContainer = ({ name = "REVA" }) => {
  return (
    <Layout>
      <H3Header>Lock {name} to Boost Rewards</H3Header>
      <RegularText>
        Locking {name} will increase yield and voting power
      </RegularText>
      <TabMenu
        tabGroup={["Stake", "Unstake"]}
        panelGroup={[<StakeComponent isStake />, <StakeComponent />]}
      />
    </Layout>
  );
};

export default StakeContainer;
