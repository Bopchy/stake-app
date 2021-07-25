import React from "react";
import { RegularText } from "../basic/Text";
import TokenWrapper from "../TokenWrapper";
import getCurrencySymbol from "../../utils/getCurrencySymbol";
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
  stakeAmount = "0.00",
  balanceAmount,
  tokenImage,
  currency = "USD",
}) => {
  const unstakePercentages = [10, 25, 50, 75, 100];

  return (
    <Wrapper>
      <TokenWrapper
        action={isStake ? "Stake" : "UnStake"}
        tokenImage={tokenImage}
        name={name}
      />
      <BalanceWrapper>
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
        <Input name="stake-amount" type="text" value="0.00" />
        <RegularText className="stakeAmount">
          {getCurrencySymbol(currency)}
          {stakeAmount}
        </RegularText>
      </BalanceWrapper>
    </Wrapper>
  );
};

export default StakeBalance;
