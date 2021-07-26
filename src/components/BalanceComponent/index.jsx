import React from "react";
import { RegularText } from "../basic/Text";
import TokenWrapper from "../TokenWrapper";
import getCurrencySymbol from "../../utils/helpers";
import {
  Wrapper,
  BalanceWrapper,
  Header,
  Input,
  UnstakeOptions,
  Button,
} from "./styles";

const StakeBalance = ({
  isStake,
  name,
  balanceAmount,
  tokenImage,
  currency = "USD",
  stakedAmount,
  onChange,
  pricePerToken,
}) => {
  const unstakePercentages = [10, 25, 50, 75, 100];
  const errorClass = stakedAmount > balanceAmount ? "error" : "";
  const stakedAmountCashValue = balanceAmount * pricePerToken;

  return (
    <Wrapper className={errorClass}>
      <TokenWrapper
        action={isStake ? "Stake" : "UnStake"}
        tokenImage={tokenImage}
        name={name}
      />
      <BalanceWrapper id="balance-wrapper">
        {isStake ? (
          <Header>
            <span className="action">GET</span>
            <span className="balance">
              {name} Balance: {balanceAmount}
            </span>
          </Header>
        ) : (
          <UnstakeOptions>
            {unstakePercentages.map((percentage) => (
              <Button>{percentage}%</Button>
            ))}
          </UnstakeOptions>
        )}
        <Input
          type="text"
          name="stake-amount"
          value={stakedAmount}
          onChange={onChange}
          placeholder="0.00"
        />
        <RegularText className="stakeAmount">
          {getCurrencySymbol(currency)}
          {stakedAmountCashValue}
        </RegularText>
      </BalanceWrapper>
    </Wrapper>
  );
};

export default StakeBalance;
