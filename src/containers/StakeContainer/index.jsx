import React from "react";
import Header from "../../components/basic/Header";
import Button from "../../components/basic/Button";
import TabMenu from "../../components/basic/Tabs";
import Layout from "../../components/basic/Layout";

const StakeContainer = () => {
  return (
    <Layout>
      <Header name="REVA" />
      <TabMenu tabGroup={["Stake", "Unstake"]} />
      <Button>Claim</Button>
      <Button>Stake</Button>
    </Layout>
  );
};

export default StakeContainer;
