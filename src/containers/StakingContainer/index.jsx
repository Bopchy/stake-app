import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BalanceComponent from "../../components/BalanceComponent";
import BoostOptionButtons from "../../components/BoostOptionButtons";
import BoostOptionDetails from "../../components/BoostOptionDetails";
import Button from "../../components/basic/Button";
import { H6Header } from "../../components/basic/Text";
import TimerComponent from "../../components/TimerComponent";
import RevaultLogo from "../../assets/icons/revault_logo.svg";
import { getBalanceStart } from "../../state/actions/balance.actions";
import { fetchTokenValuesStart } from "../../state/actions/global.actions";
import { getBoostOptionsStart } from "../../state/actions/staking.actions";

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

const StakingContainer = ({ isStake, name }) => {
  const dispatch = useDispatch();
  const { balances } = useSelector((state) => state.balance);
  const { options } = useSelector((state) => state.boostOptions);
  const { value, currency } = useSelector((state) => state.tokenValues);

  const [boostOptions, setBoostOptions] = useState(options[0]);

  useEffect(() => {
    dispatch(getBalanceStart());
    dispatch(fetchTokenValuesStart());
    dispatch(getBoostOptionsStart());
  }, []);

  const handleXOptionClick = (buttonId) => {
    setBoostOptions(options[buttonId]);
  };

  if (balances.length > 0 || !boostOptions || !value) {
    return <H6Header>Loading...</H6Header>;
  }

  const { apy, powerShare, daysLock } = boostOptions;
  const balanceAmount =
    balances.length > 0
      ? balances.find((balance) => balance.tokenName === name).balanceAmount
      : "0.00";
  const stakeAmount = 0; // read amount entered in input from here - value * inputValue

  return (
    <Wrapper>
      <H6Header>
        {isStake ? `Select your boost power` : `Selected Boost power`}
      </H6Header>
      <BoostOptionDetails
        apy={apy}
        powerShare={powerShare}
        daysLock={daysLock}
      />
      <BoostOptionButtons onClick={handleXOptionClick} />
      <BalanceComponent
        isStake={isStake}
        name={name}
        stakeAmount={stakeAmount}
        balanceAmount={balanceAmount}
        tokenImage={RevaultLogo}
        currency={currency}
      />
      <TimerComponent />
      <ButtonWrapper>
        <Button disabled>Claim</Button>
        <Button>Stake</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default StakingContainer;
