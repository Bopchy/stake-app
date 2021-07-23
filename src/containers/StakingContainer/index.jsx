import React from "react";
import styled from "styled-components";
import BoostOptionButtons from "../../components/BoostOptionButtons";
import BoostOptionDetails from "../../components/BoostOptionDetails";
import { H6Header } from "../../components/basic/Text";
import BalanceComponent from "../../components/BalanceComponent";
import TimerComponent from "../../components/TimerComponent";
import Button from "../../components/basic/Button";

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

const StakingContainer = ({ isStake }) => {
  return (
    <Wrapper>
      <H6Header>
        {isStake ? `Select your boost power` : `Selected Boost power`}
      </H6Header>
      <BoostOptionDetails />
      <BoostOptionButtons />
      <BalanceComponent isStake={isStake} />
      <TimerComponent />
      <ButtonWrapper>
        <Button disabled>Claim</Button>
        <Button>Stake</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default StakingContainer;