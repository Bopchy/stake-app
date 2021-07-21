import React from "react";
import styled from "styled-components";
import { H6Header } from "../basic/Text";
import StakeOptions from "../StakeOptions";
import BalanceComponent from "../BalanceComponent";
import TimerComponent from "../TimerComponent";

const Wrapper = styled.div`
  display: flex;
  width: 27.5rem;
  flex-direction: column;
  margin: 0 auto;
`;

const StakeComponent = ({ isStake }) => {
  return (
    <Wrapper>
      <H6Header>Select your boost power</H6Header>
      <StakeOptions />
      <BalanceComponent isStake={isStake} />
      <TimerComponent />
    </Wrapper>
  );
};

export default StakeComponent;
