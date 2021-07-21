import React from "react";
import styled from "styled-components";
import { H6Header } from "../basic/Text";
import StakeOptions from "../StakeOptions";
import BalanceComponent from "../BalanceComponent";
import TimerComponent from "../TimerComponent";
import Button from "../basic/Button";

const Wrapper = styled.div`
  display: flex;
  width: 27.5rem;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
`;

const StakeComponent = ({ isStake }) => {
  return (
    <Wrapper>
      <H6Header>
        {isStake ? `Select your boost power` : `Selected Boost power`}
      </H6Header>
      <StakeOptions />
      <BalanceComponent isStake={isStake} />
      <TimerComponent />
      <ButtonWrapper>
        <Button disabled>Claim</Button>
        <Button>Stake</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default StakeComponent;
