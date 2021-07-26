import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BalanceComponent from "../../components/BalanceComponent";
import BoostOptionButtons from "../../components/BoostOptionButtons";
import BoostOptionDetails from "../../components/BoostOptionDetails";
import Button from "../../components/basic/Button";
import { H6Header } from "../../components/basic/Text";
import TimerComponent from "../../components/TimerComponent";
import RevaultLogo from "../../assets/icons/revault_logo.svg";
import { getBalanceStart } from "../../state/actions/balance.actions";
import { getTokenValuesStart } from "../../state/actions/global.actions";
import { getBoostOptionsStart } from "../../state/actions/staking.actions";

const StakingContainer = ({ isStake, name }) => {
  const dispatch = useDispatch();
  const { balances } = useSelector((state) => state.balance);
  const { options } = useSelector((state) => state.boostOptions);
  const { value, currency } = useSelector((state) => state.tokenValues);
  const [stakedAmount, setStakedAmount] = useState("");
  const [selectedBoostPower, setSelectedBoostPower] = useState(0);

  useEffect(() => {
    dispatch(getBalanceStart());
    dispatch(getTokenValuesStart());
    dispatch(getBoostOptionsStart());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setStakedAmount(event.target.value);
  };

  const handleXOptionChange = (buttonId) => {
    setSelectedBoostPower(buttonId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return console.log(
      "Amount staked: ",
      stakedAmount,
      "Boost power selected: ",
      selectedBoostPower
    );
  };

  if (options.length > 0 && value) {
    const balanceAmount =
      balances.length > 0
        ? balances.find((balance) => balance.tokenName === name).balanceAmount
        : "0.00";

    return (
      <>
        <H6Header>
          {isStake ? `Select your boost power` : `Selected Boost power`}
        </H6Header>
        <BoostOptionDetails
          options={options}
          selectedOptionIndex={selectedBoostPower}
        />
        <BoostOptionButtons onChange={handleXOptionChange} options={options} />
        <BalanceComponent
          isStake={isStake}
          name={name}
          balanceAmount={balanceAmount}
          tokenImage={RevaultLogo}
          currency={currency}
          stakedAmount={stakedAmount}
          onChange={handleInputChange}
          pricePerToken={value}
          options={options}
        />
        <TimerComponent />
        <div id="button-wrapper">
          <Button disabled>Claim</Button>
          <Button onClick={handleSubmit}>Stake</Button>
        </div>
      </>
    );
  } else {
    return <H6Header>Loading...</H6Header>;
  }
};

export default StakingContainer;
