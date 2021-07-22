import React from "react";
import { RegularText } from "../basic/Text";
import TokenWrapper from "../TokenWrapper";
import {
  Wrapper,
  BalanceWrapper,
  Header,
  Input,
  UnstakeOptions,
  Button,
} from "./styles";
import RevaultLogo from "../../assets/icons/revault_logo.svg";

const StakeBalance = ({
  isStake,
  name = "REVA",
  stakeAmount = "0.00",
  balanceAmount = "0.00",
  tokenImage = RevaultLogo,
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
        <RegularText className="stakeAmount">${stakeAmount}</RegularText>
      </BalanceWrapper>
    </Wrapper>
  );
};

export default StakeBalance;
